const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&family=Roboto:wght@300;400;900&display=swap');
    body {
        overflow-x: hidden;
        color: #666;
        left: 0;
        padding: 0;
        margin: 0 auto;
        position: relative;
        transition: ease all 0.3s;
    }
    body * {
        font-family: 'Roboto Condensed', sans-serif;
    }
    body p, body h1, body h2, body h3, body h4, body h5, body h6 {
        margin: 0;
    }
    body a {
        color: #666;
        text-decoration: none;
    }
    body ul, body li {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
    
    .contenedorCards .card {
        width: 300px;
        transition: ease all 0.3s;
    }
    .contenedorCards .card.esFav .wrapper .infoProd .actions .action.aFavs {
        transform: rotateX(360deg) scale(1.2);
    }
    .contenedorCards .card.esFav .wrapper .infoProd .actions .action.aFavs svg path, .contenedorCards .card.esFav .wrapper .infoProd .actions .action.aFavs svg circle {
        fill: #fff;
        transition-delay: 0.2s;
    }
    .contenedorCards .card.enCarrito .wrapper .infoProd .actions .action.alCarrito .inCart {
        transform: scale(1);
    }
    .contenedorCards .card.enCarrito .wrapper .infoProd .actions .action.alCarrito .outCart {
        transform: scale(0);
    }
    .contenedorCards .card .wrapper {
        margin: 60px 10px 10px 10px;
        padding-top: 300px;
        box-sizing: border-box;
        position: relative;
        box-shadow: 0 0 20px 10px rgba(29, 29, 29, .1);
        transition: ease all 0.3s;
    }
    .contenedorCards .card .wrapper:hover {
        transform: translateY(-10px);
    }
    .contenedorCards .card .wrapper:hover .imgProd {
        height: 350px;
    }
    .contenedorCards .card .wrapper .colorProd {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 200px;
        background-color: #b82d44;
    }
    .contenedorCards .card .wrapper .imgProd {
        background-size: contain;
        background-position: center bottom;
        background-repeat: no-repeat;
        position: absolute;
        bottom: calc(100% - 300px);
        width: 100%;
        height: 300px;
        transition: ease all 0.3s;
    }
    .contenedorCards .card .wrapper .infoProd {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        align-content: center;
        height: 170px;
        padding: 20px;
        box-sizing: border-box;
    }
    .contenedorCards .card .wrapper .infoProd p {
        width: 100%;
        font-size: 14px;
        text-align: center;
    }
    .contenedorCards .card .wrapper .infoProd .nombreProd {
        font-family: "Roboto", sans-serif;
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: 600;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        display: -webkit-box;
    }
    .contenedorCards .card .wrapper .infoProd .extraInfo {
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .contenedorCards .card .wrapper .infoProd .actions {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        align-content: center;
        width: 100%;
        margin-top: auto;
        padding-top: 10px;
    }
    .contenedorCards .card .wrapper .infoProd .actions .preciosGrupo {
        flex-grow: 1;
        position: relative;
    }
    .contenedorCards .card .wrapper .infoProd .actions .preciosGrupo .precio {
        font-family: "Roboto", sans-serif;
        color: #1d1d1d;
        font-size: 25px;
        font-weight: 600;
        text-align: left;
    }
    .contenedorCards .card .wrapper .infoProd .actions .preciosGrupo .precio.precioOferta {
        position: absolute;
        left: 0;
        top: -15px;
        color: red;
        font-size: 15px;
        text-decoration: line-through;
    }
    .contenedorCards .card .wrapper .infoProd .actions .preciosGrupo .precio.precioOferta:before {
        font-size: 12px;
    }
    .contenedorCards .card .wrapper .infoProd .actions .preciosGrupo .precio:before {
        content: "$";
        font-size: 20px;
    }
    .contenedorCards .card .wrapper .infoProd .actions .action {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        align-content: center;
        margin-left: 15px;
        width: 35px;
        height: 35px;
        position: relative;
        transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) all 0.3s;
        cursor: pointer;
        color: #1d1d1d;
    }
    .contenedorCards .card .wrapper .infoProd .actions .action svg {
        position: absolute;
        transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) all 0.3s;
    }
    .contenedorCards .card .wrapper .infoProd .actions .action svg path, .contenedorCards .card .wrapper .infoProd .actions .action svg circle {
        stroke: currentColor;
        fill: transparent;
        transition: ease all 0.3s;
    }
    .contenedorCards .card .wrapper .infoProd .actions .action.aFavs {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 1;
        width: 25px;
        height: 25px;
        color: #fff;
    }
    .contenedorCards .card .wrapper .infoProd .actions .action.alCarrito svg.inCart {
        transform: scale(0);
    }
  </style>
<div class="contenedorCards">
  <div class="card">
        <div class="wrapper">
        <div class="colorProd"></div>
        <div class="imgProd"></div>
        <div class="infoProd">
            <p class="nombreProd"></p>
            <p class="extraInfo"></p>
            <div class="actions">
            <div class="preciosGrupo">
                <p class="precio precioOferta">9,999</p>
                <p class="precio precioProd">9,999</p>
            </div>
            <div class="icono action aFavs" id="fav">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z">
                </path>
                </svg>
            </div>
            <div class="icono action alCarrito">
                <svg class="inCart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <title>Quitar del carrito</title>
                <path d="M30 22H12M2 6h6l10 40h32l3.2-9.7"></path>
                <circle cx="20" cy="54" r="4"></circle>
                <circle cx="46" cy="54" r="4"></circle>
                <circle cx="46" cy="22" r="16"></circle>
                <path d="M53 18l-8 9-5-5"></path>
                </svg>
                <svg class="outCart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <title>Agregar al carrito</title>
                <path d="M2 6h10l10 40h32l8-24H16"></path>
                <circle cx="23" cy="54" r="4"></circle>
                <circle cx="49" cy="54" r="4"></circle>
                </svg>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
`;

class ProductCard extends HTMLElement {
  constructor() {
    super();

    this.fav = false;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('.colorProd').style = `background-color: ${this.getAttribute('colorProd')};`;
    this.shadowRoot.querySelector('.imgProd').style = `background-image: url(${this.getAttribute('imgProd')});`;
    this.shadowRoot.querySelector('.nombreProd').innerText = this.getAttribute('nombreProd');
    this.shadowRoot.querySelector('.extraInfo').innerText = this.getAttribute('extraInfo');
    this.shadowRoot.querySelector('.precioOferta').innerText = this.getAttribute('precioAnterior');
    this.shadowRoot.querySelector('.precioProd').innerText = this.getAttribute('precioProd');
  }

  makeFav() {
    const div = this.shadowRoot.querySelector('.card');
    div.classList.toggle('esFav');
    this.fav = !this.fav;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#fav').addEventListener('click', () => this.makeFav());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#fav').removeEventListener();
  }
}

window.customElements.define('product-card', ProductCard);