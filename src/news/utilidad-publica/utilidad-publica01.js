// import '/src/style.css';
import './utilidad-publica01.css';

const /** {HTMLElement} */ $overlay = document.createElement('div');
$overlay.classList.add('overlay', 'modal-overlay');

const utilidadPublicaModal = function () {
    const /** {HTMLElement} */ $modal = document.createElement('div');
    // $modal.classList.add('modal');

    $modal.innerHTML = `
    <div id="dragcontainer">
        <div id="spincontainer">
            <img src="/src/assets/images/1.png" alt="" />
            <img src="/src/assets/images/2.png" alt="" />
            <img src="/src/assets/images/3.png" alt="" />
            <img src="/src/assets/images/4.png" alt="" />
            <img src="/src/assets/images/5.png" alt="" />
            <img src="/src/assets/images/6.png" alt="" />
            <img src="/src/assets/images/7.png" alt="" />
            <img src="/src/assets/images/8.png" alt="" />
            <img src="/src/assets/images/9.png" alt="" />
            <img src="/src/assets/images/10.png" alt="" />
            <p>3D Marvel Carrousel</p>
        </div>
        <div id="ground"></div>
    </div>
    `;

    const open = function () {
        document.body.appendChild($modal);
        document.body.appendChild($overlay);

        let radius = 240;
        let autorotate = true;
        let rotatespeed = -60;
        let imgwidth = 120;
        let imgheight = 170;

        setTimeout(init, 1000);

        let odrag = document.getElementById('dragcontainer');
        let ospin = document.getElementById('spincontainer');

        let aimg = ospin.getElementsByTagName('img');
        let ele = [...aimg];

        ospin.style.width = imgwidth + 'px';
        ospin.style.height = imgheight + 'px';

        let ground = document.getElementById('ground');

        ground.style.width = radius * 3 + 'px';
        ground.style.height = radius * 3 + 'px';

        function init(delaytime) {
            for (let i = 0; i < ele.length; ++i) {
                ele[i].style.transform =
                    'rotateY(' +
                    i * (360 / ele.length) +
                    'deg) translateZ(' +
                    radius +
                    'px)';

                ele[i].style.transition = 'transform 1s';
                ele[i].style.transitionDelay =
                    delaytime || (ele.length - 1) / 4 + 's';
            }
        }

        function applytransform(obj) {
            if (ty > 100) {
                ty = 100;
            }
            if (ty < 0) {
                ty = 0;
            }

            obj.style.transform =
                'rotateX(' + -ty + 'deg) rotateY(' + tx + 'deg)';
        }

        function playspin(yes) {
            ospin.style.animationPlayState = yes ? 'running' : 'paused';
        }

        let sx,
            sy,
            nx,
            ny,
            desx = 0,
            desy = 0,
            tx = 0,
            ty = 10;

        if (autorotate) {
            let animationname = rotatespeed > 0 ? 'spin' : 'spinrevert';

            ospin.style.animation = `${animationname} ${Math.abs(
                rotatespeed
            )}s infinite linear`;
        }

        $modal.onpointerdown = function (e) {
            clearInterval(odrag.timer);

            e = e || window.Event;

            var sx = e.clientX,
                sy = e.clientY;

            this.onpointermove = function (e) {
                e = e || window.Event;

                let nx = e.clientX,
                    ny = e.clientY,
                    desx = nx - sx,
                    desy = ny - sy;

                tx += desx * 0.1;
                ty += desy * 0.1;

                applytransform(odrag);
                sx = nx;
                sy = ny;
            };

            this.onpointerup = function (e) {
                odrag.timer = setInterval(function () {
                    desx *= 0.95;
                    desy *= 0.95;
                    tx += desx * 0.1;
                    ty += desy * 0.1;

                    applytransform(odrag);
                    playspin(false);

                    if (Math.abs(desx) < 0.5 && Math.abs(desy) < 0.5) {
                        clearInterval(odrag.timer);
                        playspin(true);
                    }
                }, 17);

                this.onpointermove = this.onpointerup = null;
            };

            return false;
        };

        $modal.onmousewheel = function (e) {
            e = e || window.Event;
            let d = e.wheelDelta / 20 || -e.detail;
            radius += d;
            init(1);
        };
    };

    const close = function () {
        document.body.removeChild($modal);
        document.body.removeChild($overlay);
    };

    // const /** {HTMLElement} */ $modalCloseBtn = $modal.querySelector(
    //         '[data-modal-close-btn]'
    //     );
    // $modalCloseBtn.addEventListener('click', close);
    // const /** {HTMLElement} */ $closeBtn =
    //         $modal.querySelector('[data-close-btn]');
    // $closeBtn.addEventListener('click', close);

    return { open, close };
};

export { utilidadPublicaModal };
