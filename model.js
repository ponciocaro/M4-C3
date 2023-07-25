import jsonfile from 'jsonfile';
const PATH = './data.json';

const db = jsonfile.readFileSync(PATH);

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ COMPLETAR SOLO ESTA FUNCIÓN ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

function obtenerProvinciasSegunMeridiano(meridiano) {
    const provinciaEncontrada = db.provincias.find((provincia) => Math.trunc(provincia.centroide.lon) == - meridiano)
    return provinciaEncontrada
    // COMPLETAR
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ COMPLETAR SOLO ESTA FUNCIÓN ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

export default obtenerProvinciasSegunMeridiano;