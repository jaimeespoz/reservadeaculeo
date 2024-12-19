'use strict';

import '../../globalstyles.css';
import './fotosCondominio.css';
import 'material-symbols';

import { navbarModal } from '../navbar/navbar';
import { footerModal } from '../footer/footer';

const galeria = [
    {
        id: '1',
        src: '/src/assets/fotos/Ale-Donoso-01.jpg',
        orientacion: 'p',
        creditos: 'Ale Donoso',
        resena: '',
    },
    {
        id: '2',
        src: '/src/assets/fotos/Ale-Donoso-02.jpg',
        orientacion: 'p',
        creditos: 'Ale Donoso',
        resena: '',
    },
    {
        id: '3',
        src: '/src/assets/fotos/Ale-Donoso-03.jpg',
        orientacion: 'p',
        creditos: 'Ale Donoso',
        resena: '',
    },
    {
        id: '4',
        src: '/src/assets/fotos/Ale-Donoso-04.jpg',
        orientacion: 'p',
        creditos: 'Ale Donoso',
        resena: '',
    },
    {
        id: '5',
        src: '/src/assets/fotos/Ale-Donoso-05.jpg',
        orientacion: 'p',
        creditos: 'Ale Donoso',
        resena: '',
    },
    {
        id: '6',
        src: '/src/assets/fotos/Ale-Donoso-06.jpg',
        orientacion: 'p',
        creditos: 'Ale Donoso',
        resena: '',
    },
    {
        id: '7',
        src: '/src/assets/fotos/Ale-Donoso-07.jpg',
        orientacion: 'p',
        creditos: 'Ale Donoso',
        resena: '',
    },
    {
        id: '8',
        src: '/src/assets/fotos/Ale-Donoso-08.jpg',
        orientacion: 'p',
        creditos: 'Ale Donoso',
        resena: '',
    },
    {
        id: '9',
        src: '/src/assets/fotos/Ale-Donoso-09.jpg',
        orientacion: 'p',
        creditos: 'Ale Donoso',
        resena: '',
    },
    {
        id: '10',
        src: '/src/assets/fotos/Ale-Donoso-10.jpg',
        orientacion: 'p',
        creditos: 'Ale Donoso',
        resena: '',
    },
    {
        id: '11',
        src: '/src/assets/fotos/Ale-Donoso-11.jpg',
        orientacion: 'p',
        creditos: 'Ale Donoso',
        resena: '',
    },
    {
        id: '12',
        src: '/src/assets/fotos/Ale-Donoso-12.jpg',
        orientacion: 'p',
        creditos: 'Ale Donoso',
        resena: '',
    },
    {
        id: '13',
        src: '/src/assets/fotos/Elizabeth-Torres-01.jpg',
        orientacion: 'p',
        creditos: 'Elizabeth Torres',
        resena: '',
    },
    {
        id: '14',
        src: '/src/assets/fotos/Elizabeth-Torres-02.jpg',
        orientacion: 'p',
        creditos: 'Elizabeth Torres',
        resena: '',
    },
    {
        id: '15',
        src: '/src/assets/fotos/Erik-Cubillos-01.jpg',
        orientacion: 'p',
        creditos: 'Erik Cubillos',
        resena: '',
    },
    {
        id: '16',
        src: '/src/assets/fotos/Gladys-01.jpg',
        orientacion: 'p',
        creditos: 'Gladys',
        resena: '',
    },
    {
        id: '17',
        src: '/src/assets/fotos/Gladys-02.jpg',
        orientacion: 'p',
        creditos: 'Gladys',
        resena: '',
    },
    {
        id: '18',
        src: '/src/assets/fotos/Gladys-03.jpg',
        orientacion: 'p',
        creditos: 'Gladys',
        resena: '',
    },
    {
        id: '19',
        src: '/src/assets/fotos/Gladys-04.jpg',
        orientacion: 'p',
        creditos: 'Gladys',
        resena: '',
    },
    {
        id: '20',
        src: '/src/assets/fotos/Gladys-05.jpg',
        orientacion: 'p',
        creditos: 'Gladys',
        resena: '',
    },
    {
        id: '21',
        src: '/src/assets/fotos/Gladys-06.jpg',
        orientacion: 'p',
        creditos: 'Gladys',
        resena: '',
    },
    {
        id: '22',
        src: '/src/assets/fotos/Erik-Cubillos-02.jpg',
        orientacion: 'p',
        creditos: 'Erik Cubillos',
        resena: '',
    },
    {
        id: '23',
        src: '/src/assets/fotos/Juan-Angel-01.jpg',
        orientacion: 'p',
        creditos: 'Juan Angel',
        resena: '',
    },
    {
        id: '24',
        src: '/src/assets/fotos/Juan-Angel-02.jpg',
        orientacion: 'p',
        creditos: 'Juan Angel',
        resena: '',
    },
    {
        id: '25',
        src: '/src/assets/fotos/Lucia-01.jpg',
        orientacion: 'p',
        creditos: 'Lucia',
        resena: '',
    },
    {
        id: '26',
        src: '/src/assets/fotos/Lucia-02.jpg',
        orientacion: 'p',
        creditos: 'Lucia',
        resena: '',
    },
    {
        id: '27',
        src: '/src/assets/fotos/Lucia-03.jpg',
        orientacion: 'p',
        creditos: 'Lucia',
        resena: '',
    },
    {
        id: '28',
        src: '/src/assets/fotos/Lucia-04.jpg',
        orientacion: 'p',
        creditos: 'Lucia',
        resena: '',
    },
    {
        id: '29',
        src: '/src/assets/fotos/Lucia-05.jpg',
        orientacion: 'p',
        creditos: 'Lucia',
        resena: '',
    },
    {
        id: '30',
        src: '/src/assets/fotos/Lucia-06.jpg',
        orientacion: 'p',
        creditos: 'Lucia',
        resena: '',
    },
    {
        id: '32',
        src: '/src/assets/fotos/Lucia-08.jpg',
        orientacion: 'p',
        creditos: 'Lucia',
        resena: '',
    },
    {
        id: '33',
        src: '/src/assets/fotos/Lucia-09.jpg',
        orientacion: 'p',
        creditos: 'Lucia',
        resena: '',
    },
    {
        id: '34',
        src: '/src/assets/fotos/Lucia-10.jpg',
        orientacion: 'p',
        creditos: 'Lucia',
        resena: '',
    },
    {
        id: '35',
        src: '/src/assets/fotos/Manuel-Ramirez-01.jpg',
        orientacion: 'p',
        creditos: 'Manuel Ramirez',
        resena: '',
    },
    {
        id: '36',
        src: '/src/assets/fotos/Manuel-Ramirez-02.jpg',
        orientacion: 'p',
        creditos: 'Manuel Ramirez',
        resena: '',
    },
    {
        id: '37',
        src: '/src/assets/fotos/Manuel-Ramirez-03.jpg',
        orientacion: 'p',
        creditos: 'Manuel Ramirez',
        resena: '',
    },
    {
        id: '38',
        src: '/src/assets/fotos/Manuel-Ramirez-04.jpg',
        orientacion: 'p',
        creditos: 'Manuel Ramirez',
        resena: '',
    },
    {
        id: '39',
        src: '/src/assets/fotos/Manuel-Ramirez-05.jpg',
        orientacion: 'p',
        creditos: 'Manuel Ramirez',
        resena: '',
    },
    {
        id: '40',
        src: '/src/assets/fotos/Manuel-Ramirez-06.jpg',
        orientacion: 'p',
        creditos: 'Manuel Ramirez',
        resena: '',
    },
    {
        id: '41',
        src: '/src/assets/fotos/Maria-Osorio-01.jpg',
        orientacion: 'p',
        creditos: 'Maria Osorio',
        resena: '',
    },
    {
        id: '42',
        src: '/src/assets/fotos/Maria-Osorio-02.jpg',
        orientacion: 'p',
        creditos: 'Maria Osorio',
        resena: '',
    },
    {
        id: '43',
        src: '/src/assets/fotos/Maria-Osorio-03.jpg',
        orientacion: 'p',
        creditos: 'Maria Osorio',
        resena: '',
    },
    {
        id: '44',
        src: '/src/assets/fotos/Maria-Osorio-04.jpg',
        orientacion: 'p',
        creditos: 'Maria Osorio',
        resena: '',
    },
    {
        id: '45',
        src: '/src/assets/fotos/Maria-Osorio-05.jpg',
        orientacion: 'p',
        creditos: 'Maria Osorio',
        resena: '',
    },
    {
        id: '46',
        src: '/src/assets/fotos/Maria-Osorio-06.jpg',
        orientacion: 'p',
        creditos: 'Maria Osorio',
        resena: '',
    },
    {
        id: '47',
        src: '/src/assets/fotos/Paola-Stevens-01.jpg',
        orientacion: 'p',
        creditos: 'Paola Stevens',
        resena: '',
    },
    {
        id: '48',
        src: '/src/assets/fotos/Paola-Stevens-02.jpg',
        orientacion: 'p',
        creditos: 'Paola Stevens',
        resena: '',
    },
    {
        id: '49',
        src: '/src/assets/fotos/Paola-Stevens-03.jpg',
        orientacion: 'p',
        creditos: 'Paola Stevens',
        resena: '',
    },
    {
        id: '50',
        src: '/src/assets/fotos/Paola-Stevens-04.jpg',
        orientacion: 'p',
        creditos: 'Paola Stevens',
        resena: '',
    },
    {
        id: '51',
        src: '/src/assets/fotos/Paola-Stevens-05.jpg',
        orientacion: 'p',
        creditos: 'Paola Stevens',
        resena: '',
    },
    {
        id: '52',
        src: '/src/assets/fotos/Paola-Stevens-06.jpg',
        orientacion: 'p',
        creditos: 'Paola Stevens',
        resena: '',
    },
    {
        id: '53',
        src: '/src/assets/fotos/Ruth-Miranda-01.jpg',
        orientacion: 'p',
        creditos: 'Ruth Miranda',
        resena: '',
    },
    {
        id: '54',
        src: '/src/assets/fotos/Ruth-Miranda-02.jpg',
        orientacion: 'p',
        creditos: 'Ruth Miranda',
        resena: '',
    },
    {
        id: '55',
        src: '/src/assets/fotos/Ruth-Miranda-03.jpg',
        orientacion: 'p',
        creditos: 'Ruth Miranda',
        resena: '',
    },
    {
        id: '56',
        src: '/src/assets/fotos/Ruth-Miranda-04.jpg',
        orientacion: 'p',
        creditos: 'Ruth Miranda',
        resena: '',
    },
    {
        id: '57',
        src: '/src/assets/fotos/Ruth-Miranda-05.jpg',
        orientacion: 'p',
        creditos: 'Ruth Miranda',
        resena: '',
    },
    {
        id: '58',
        src: '/src/assets/fotos/Ruth-Miranda-06.jpg',
        orientacion: 'p',
        creditos: 'Ruth Miranda',
        resena: '',
    },
    {
        id: '59',
        src: '/src/assets/fotos/Ruth-Miranda-08.jpg',
        orientacion: 'p',
        creditos: 'Ruth Miranda',
        resena: '',
    },
    {
        id: '60',
        src: '/src/assets/fotos/Ruth-Miranda-09.jpg',
        orientacion: 'p',
        creditos: 'Ruth Miranda',
        resena: '',
    },
    {
        id: '61',
        src: '/src/assets/fotos/Ruth-Miranda-10.jpg',
        orientacion: 'p',
        creditos: 'Ruth Miranda',
        resena: '',
    },
    {
        id: '62',
        src: '/src/assets/fotos/Ruth-Miranda-11.jpg',
        orientacion: 'p',
        creditos: 'Ruth Miranda',
        resena: '',
    },
    {
        id: '63',
        src: '/src/assets/fotos/Ruth-Miranda-12.jpg',
        orientacion: 'p',
        creditos: 'Ruth Miranda',
        resena: '',
    },
    {
        id: '64',
        src: '/src/assets/fotos/Ruth-Miranda-01.jpg',
        orientacion: 'p',
        creditos: 'Ruth Miranda',
        resena: '',
    },
    {
        id: '65',
        src: '/src/assets/fotos/Ruth-Miranda-01.jpg',
        orientacion: 'p',
        creditos: 'Ruth Miranda',
        resena: '',
    },
];

const fotosModal = function () {
    function showLightbox(n) {
        const resultado = galeria.find((foto) => foto.id === n);
        // console.log('open1');
        // enConstruccionModal().open();
        // console.log('open2');

        // var currWidth = lightboxImg.clientWidth;
        // var currHeight = lightboxImg.clientHeight;
        // if (currHeight > currWidth) {
        //     lightboxImg.classList.add('imagen-portrait');
        //     lightboxImg.classList.remove('imagen-landscape');
        // } else {
        //     lightboxImg.classList.remove('imagen-portrait');
        //     lightboxImg.classList.add('imagen-landscape');
        // }
    }

    function agregaFoto(foto) {
        const /** */ $marcoFoto = document.createElement('div');
        $marcoFoto.classList.add('marco-foto');
        const /** */ $imagen = document.createElement('img');
        $imagen.classList.add('imagen');
        $imagen.src = foto.src;
        $imagen.alt = '';
        $imagen.setAttribute('data-id', `${foto.id}`);

        const /** */ $creditos = document.createElement('div');
        $creditos.classList.add('creditos');

        const /** */ $creditosTitulo = document.createElement('span');
        $creditosTitulo.classList.add('text-title-medium');
        $creditosTitulo.innerText = 'Creditos';

        const /** */ $creditosDetalle = document.createElement('span');
        $creditosDetalle.classList.add('text-title-medium');
        $creditosDetalle.innerText = `${foto.creditos}`;
        $creditos.appendChild($creditosTitulo);
        $creditos.appendChild($creditosDetalle);

        const /** */ $resena = document.createElement('span');
        $resena.classList.add('resena');
        $resena.innerText = `${foto.resena}`;
        $marcoFoto.appendChild($imagen);
        $marcoFoto.appendChild($creditos);
        // $marcoFoto.appendChild($resena);

        $marcoFoto.addEventListener('click', () => {
            const indice = $imagen.getAttribute('data-id');
            showLightbox(indice);
        });
        return $marcoFoto;
    }

    const /** */ $modal = document.createElement('div');
    $modal.classList.add('frame-fotos');
    galeria.forEach((foto) => {
        $modal.appendChild(agregaFoto(foto));
    });

    const open = function () {
        const /** {Object} */ $navbarmodal = navbarModal();
        $navbarmodal.open();

        document.body.appendChild($modal);

        const /** {Object} */ $footermodal = footerModal();
        $footermodal.open();
    };

    return { open };
};

export { fotosModal };
