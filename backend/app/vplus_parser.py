import re
import os
import PyPDF2

MEXICAN_CITIES = {
    'acapulco', 'aguascalientes', 'cancun', 'chetumal', 'chihuahua',
    'ciudad de méxico', 'ciudad de mexico', 'ciudad juarez', 'ciudad obregon',
    'colima', 'cozumel', 'culiacan', 'durango', 'guadalajara', 'hermosillo',
    'huatulco', 'ixtapa / zihuatanejo', 'la paz', 'leon/guanajuato', 'loreto',
    'los mochis', 'mazatlan', 'merida', 'mexicali', 'monterrey', 'morelia',
    'oaxaca', 'puebla', 'puerto vallarta', 'queretaro', 'san jose cabo',
    'san luis potosi', 'santa lucia', 'tapachula', 'tepic', 'tijuana',
    'toluca', 'torreon', 'tuxtla gutierrez', 'uruapan', 'veracruz',
    'villahermosa', 'zacatecas'
}

SKIP_WORDS = {
    'origen', 'origin', 'destino', 'destination', 'nacionales',
    'internacionales', 'flights', 'within', 'mexico', 'internationals',
    'disponibilidad', 'seats', 'availability', 'última', 'last',
    'update', 'hora', 'ciudad', 'de', 'am', 'pm'
}

# Find all (Origin  Destination  Seats) triplets using 2+ spaces as separator
TRIPLET_RE = re.compile(
    r'([A-ZÁÉÍÓÚÜÑ][A-Za-záéíóúüÁÉÍÓÚÜñÑ]+(?:[ /\.\\][A-Za-záéíóúüÁÉÍÓÚÜñÑ][A-Za-záéíóúüÁÉÍÓÚÜñÑ\.]*)*)'
    r'[ \t]{2,}'
    r'([A-ZÁÉÍÓÚÜÑ][A-Za-záéíóúüÁÉÍÓÚÜñÑ]+(?:[ /\.\\][A-Za-záéíóúüÁÉÍÓÚÜñÑ][A-Za-záéíóúüÁÉÍÓÚÜñÑ\.]*)*)'
    r'[ \t]{2,}'
    r'(\d+)'
)

DATE_RE = re.compile(r'(\d+\s+de\s+\w+\s+de\s+\d{4})\s*[\n\r]+\s*(\d+:\d+\s*[AP]M)')


def _is_nacional(origin, destination):
    return (origin.lower().strip() in MEXICAN_CITIES and
            destination.lower().strip() in MEXICAN_CITIES)


def _is_header(text):
    return text.lower().strip() in SKIP_WORDS


def _extract_flights(reader):
    """Shared parsing logic for both file path and bytes."""
    pages_text = []
    for page in reader.pages:
        pages_text.append(page.extract_text() or '')

    full_text = '\n'.join(pages_text)

    last_update = None
    m = DATE_RE.search(full_text)
    if m:
        last_update = f"{m.group(1).strip()} {m.group(2).strip()}"

    nacionales = []
    internacionales = []
    seen = set()

    for m in TRIPLET_RE.finditer(full_text):
        origin = m.group(1).strip()
        destination = m.group(2).strip()
        seats = int(m.group(3))

        if _is_header(origin) or _is_header(destination):
            continue

        key = (origin.lower(), destination.lower())
        if key in seen:
            continue
        seen.add(key)

        entry = {'origin': origin, 'destination': destination, 'seats': seats}

        if _is_nacional(origin, destination):
            nacionales.append(entry)
        else:
            internacionales.append(entry)

    nacionales.sort(key=lambda x: (x['origin'], x['destination']))
    internacionales.sort(key=lambda x: (x['origin'], x['destination']))

    return {
        'success': True,
        'last_update': last_update,
        'nacionales': nacionales,
        'internacionales': internacionales,
        'total_nacionales': len(nacionales),
        'total_internacionales': len(internacionales),
    }


def parse_vplus_from_bytes(pdf_bytes):
    """Parse V+ PDF from raw bytes (uploaded file)."""
    try:
        import io
        reader = PyPDF2.PdfReader(io.BytesIO(pdf_bytes))
        return _extract_flights(reader)
    except Exception as e:
        return {'success': False, 'error': str(e)}


def parse_vplus_pdf(pdf_path):
    """Parse V+ PDF from a file path."""
    if not os.path.exists(pdf_path):
        return {
            'success': False,
            'error': 'PDF no encontrado. Coloca el archivo vplus-disponibilidad.pdf en la carpeta del proyecto.'
        }
    try:
        with open(pdf_path, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            return _extract_flights(reader)
    except Exception as e:
        return {'success': False, 'error': str(e)}
