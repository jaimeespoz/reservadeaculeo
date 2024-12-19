'use strict';

import '../globalstyles.css';
import './quienes_somos.css';

// import { footerModal } from '../shared/footer/footer';
// import { navbarModal } from '../shared/navbar/navbar';

// const qsModal = function () {
const /* {HTMLElement} */ qsModal = document.createElement('div');
qsModal.innerHTML = `
    <div class="wrapper-quienes">
      <div class="container-quienes">
        <div>
          <input type="radio" name="slide" id="c1" checked />
          <label for="c1" class="card-quienes">
            <div class="row">
              <div class="icon">1</div>
              <div class="description">
                <h4>Unidad Vecinal</h4>
                <p>Juan Perez</p>
              </div>
            </div>
            <div class="card__modalqs"></div>
          </label>
        </div>

        <div>
          <input type="radio" name="slide" id="c2" />
          <label for="c2" class="card-quienes">
            <div class="row">
              <div class="icon">2</div>
              <div class="description">
                <h4>Secretaria</h4>
                <p>Juan Perez</p>
              </div>
            </div>
            <div class="card__modalqs"></div>
          </label>
        </div>
        <div>
          <input type="radio" name="slide" id="c3" />
          <label for="c3" class="card-quienes">
            <div class="row">
              <div class="icon">3</div>
              <div class="description">
                <h4>Tesoreria</h4>
                <p>Juan Perez</p>
              </div>
            </div>
            <div class="card__modalqs"></div>
          </label>
        </div>
        <div>
          <input type="radio" name="slide" id="c4" />
          <label for="c4" class="card-quienes">
            <div class="row">
              <div class="icon">4</div>
              <div class="description">
                <h4>Comunicaciones</h4>
                <p>Juan Perez</p>
              </div>
            </div>
            <div class="card__modalqs"></div>
          </label>
        </div>
        <div>
          <input type="radio" name="slide" id="c5" />
          <label for="c5" class="card-quienes">
            <div class="row">
              <div class="icon">5</div>
              <div class="description">
                <h4>Relaciones Publicas</h4>
                <p>Juan Perez</p>
              </div>
            </div>
            <div class="card__modalqs"></div>
          </label>
        </div>
      </div>
    </div>
`;

export { qsModal };
