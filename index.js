const musicDb = {
    'lp-1': {
        title: 'Muscia para borrachos',
        date: '12-03-1987',
        tracks: [
            'Ramona',
            'La puta de la cabra',
            'El dolor mas doloroso'
        ]
    },
    'lp-2': {
        title: 'Enya',
        date: '12-03-1997',
        tracks: [
            'Duermo a los corderos',
            'Duermo a los peces',
            'Duermo a los diputados',
            'Se zen'
        ]
    },
    'lp-3': {
        title: 'OBK',
        date: '12-03-2007',
        tracks: [
            '15 años tiene mi amor (version electronica)',
            'Bailar pegados (version electronica)',
            'Amante bandido (version pasodoble)'
        ]
    },
    'lp-4': {
        title: 'Alejandro Sanz',
        date: '12-03-1987',
        tracks: [
            'Desafinando',
            'Desafinando con acento adaluz',
            'Desafinando con acento aduluz mientras degollo un gato'
        ]
    },
    'lp-5': {
        title: 'Juaquin Sabina',
        date: '12-03-1987',
        tracks: [
            'Me mola Madrid',
            'Me mola las madrileñas',
            'Me mola las drogas de Madrid'
        ]
    }
}

function managerDisco (id, prop, value) {
    let discoParaModificar = musicDb[id];

    console.log('Disco a modificar: ', discoParaModificar);
}

managerDisco('lp-3');
managerDisco('lp-5');
