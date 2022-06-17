const template = document.createElement("template");
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
        font-family: "Roboto Condensed", sans-serif;
    }
    body p,
    body h1,
    body h2,
    body h3,
    body h4,
    body h5,
    body h6 {
        margin: 0;
    }
    body a {
        color: #666;
        text-decoration: none;
    }
    body ul,
    body li {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    .wrapper {
        height: 500px;
    }

    .contenedor-card .card {
        width: 300px;
        transition: ease all 0.3s;
    }
    .contenedor-card .card.esFav .wrapper .info-prod .actions .action.aFavs {
        transform: rotateX(360deg) scale(1.2);
    }

    .contenedor-card .card .wrapper {
        margin: 60px 10px 10px 10px;
        padding-top: 300px;
        box-sizing: border-box;
        position: relative;
        box-shadow: 0 0 20px 10px rgba(29, 29, 29, 0.1);
        transition: ease all 0.3s;
    }
    .contenedor-card .card .wrapper:hover {
        transform: translateY(-10px);
    }
    .contenedor-card .card .wrapper:hover .img-prod {
        height: 350px;
    }
    .contenedor-card .card .wrapper .color-prod {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 200px;
        background-color: #b82d44;
    }
    .contenedor-card .card .wrapper .img-prod {
        background-size: contain;
        background-position: center bottom;
        background-repeat: no-repeat;
        position: absolute;
        bottom: calc(100% - 300px);
        width: 100%;
        height: 300px;
        transition: ease all 0.3s;
    }
    .contenedor-card .card .wrapper .info-prod {
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
    .contenedor-card .card .wrapper .info-prod {
        width: 100%;
        font-size: 14px;
        text-align: center;
    }
    .contenedor-card .card .wrapper .info-prod .nombre-prod {
        font-family: "Roboto", sans-serif;
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: 600;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        display: -webkit-box;
    }
    .contenedor-card .card .wrapper .info-prod .extraInfo {
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .contenedor-card .card .wrapper .info-prod .actions {
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
    .contenedor-card .card .wrapper .info-prod .actions .precios-grupo {
        flex-grow: 1;
        position: relative;
    }
    .contenedor-card
        .card
        .wrapper
        .info-prod
        .actions
        .precios-grupo
        .precio {
        font-family: "Roboto", sans-serif;
        color: #1d1d1d;
        font-size: 25px;
        font-weight: 600;
        text-align: left;
    }
    .contenedor-card
        .card
        .wrapper
        .info-prod
        .actions
        .precios-grupo
        .precio.precio-oferta {
        position: absolute;
        left: 0;
        top: -15px;
        color: red;
        font-size: 15px;
        text-decoration: line-through;
    }
    .contenedor-card
        .card
        .wrapper
        .info-prod
        .actions
        .precios-grupo
        .precio.precio-oferta:before {
        font-size: 12px;
    }
    .contenedor-card
        .card
        .wrapper
        .info-prod
        .actions
        .precios-grupo
        .precio:before {
        content: "$";
        font-size: 20px;
    }
    .contenedor-card .card .wrapper .info-prod .actions .action {
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
    .contenedor-card .card .wrapper .info-prod .actions .action svg {
        position: absolute;
        transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) all 0.3s;
    }
    .contenedor-card .card .wrapper .info-prod .actions .action svg path,
    .contenedor-card .card .wrapper .info-prod .actions .action svg circle {
        stroke: currentColor;
        fill: transparent;
        transition: ease all 0.3s;
    }
    .contenedor-card .card .wrapper .info-prod .actions .action.aFavs {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 1;
        width: 25px;
        height: 25px;
        color: #fff;
    }

    .discount {
        background-color: red;
        width: 40px;
        height: 20px;
        margin-left: auto;
        border-radius: 5px;
        color: white;
        text-align: center;
    }
    .discount::before {
        content: "-";
    }

    .discount::after {
        content: "%";
    }
    .star {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .rating {
        margin-left: 0px;
        width: 5%;
        margin-right: 20px;
    }
    .star-img {
        width: 10px;
        height: 10px;
    }

    .precio-actual ::before {
        content: "$";
    }

    .precio-actual {
        font-size: 20px;
        font-weight: bold;
        width: 100px;
    }

    .hidden {
        display: none;
    }

    .heart {
        width: 25px;
        height: 25px;
        margin-left: 20px;
    }

    .icono-favorito {
        cursor: pointer;
    }
  </style>
  <div class="contenedor-card">
  <div class="card">
      <div class="wrapper">
          <div class="color-prod"></div>
          <div
              class="img-prod"
          ></div>
          <div class="info-prod">
              <p class="nombre-prod">${this.nombreProd}</p>
              <p class="extra-info">${this.extraInfo}</p>

              <div class="actions">
                  <div class="precios-grupo">
                      <p class="precio precio-oferta">
                          ${this.precioAnterior}
                      </p>
                      <div class="discount">${this.descuento}</div>
                      <div class="star">
                          <img class="star-img" src="../assets/star.png" />
                          <p class="rating">${this.rating}</p>
                          <div class="precio-actual precio-prod">
                          </div>

                          <div
                              @click=${this.inCartBtnHandler}
                              class="icono action icono-carrito"
                              id="carrito"
                          >
                              <svg
                                  class="in-cart hidden"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 64 64"
                              >
                                  <title>Quitar del carrito</title>
                                  <path d="M30 22H12M2 6h6l10 40h32l3.2-9.7"></path>
                                  <circle cx="20" cy="54" r="4"></circle>
                                  <circle cx="46" cy="54" r="4"></circle>
                                  <circle cx="46" cy="22" r="16"></circle>
                                  <path d="M53 18l-8 9-5-5"></path>
                              </svg>
                              <svg
                                  class="out-cart"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 64 64"
                              >
                                  <title>Agregar al carrito</title>
                                  <path d="M2 6h10l10 40h32l8-24H16"></path>
                                  <circle cx="23" cy="54" r="4"></circle>
                                  <circle cx="49" cy="54" r="4"></circle>
                              </svg>
                          </div>
                          <div @click=${this.favBtnHandler} class="icono-favorito">
                              <img
                                  class="heart black-heart"
                                  src="../assets/black_heart.png"
                              />
                              <img
                                  class="heart red-heart hidden"
                                  src="../assets/red_heart.png"
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>`;

class ProductCard extends HTMLElement {
	constructor() {
		super();

		this.fav = false;
		this.enCarrito = false;

		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot.querySelector(
			".color-prod"
		).style = `background-color: ${this.getAttribute("color-prod")};`;
		this.shadowRoot.querySelector(
			".img-prod"
		).style = `background-image: url(${this.getAttribute("img-prod")});`;
		this.shadowRoot.querySelector(".nombre-prod").innerText = this.getAttribute(
			"nombre-prod"
		);
		this.shadowRoot.querySelector(".extra-info").innerText = this.getAttribute(
			"extra-info"
		);
		this.shadowRoot.querySelector(
			".precio-oferta"
		).innerText = this.getAttribute("precio-anterior");
		this.shadowRoot.querySelector(".precio-prod").innerText = this.getAttribute(
			"precio-prod"
		);
		this.shadowRoot.querySelector(
			".discount"
		).style = `background-color: ${this.getAttribute("color-prod")};`;
		this.shadowRoot.querySelector(".discount").innerText = `${this.getAttribute(
			"descuento"
		)}`;
		this.shadowRoot.querySelector(".rating").innerText = `${this.getAttribute(
			"rating"
		)}`;
	}

	favBtnHandler() {
		this.shadowRoot.querySelector(".black-heart").classList.toggle("hidden");
		this.shadowRoot.querySelector(".red-heart").classList.toggle("hidden");
		this.isFav = !this.isFav;
	}

	inCartBtnHandler() {
		this.shadowRoot.querySelector(".in-cart").classList.toggle("hidden");
		this.shadowRoot.querySelector(".out-cart").classList.toggle("hidden");
		this.inCart = !this.inCart;
	}

	connectedCallback() {
		this.shadowRoot
			.querySelector(".icono-favorito")
			.addEventListener("click", () => this.favBtnHandler());
		this.shadowRoot
			.querySelector(".icono-carrito")
			.addEventListener("click", () => this.inCartBtnHandler());
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector("#fav").removeEventListener();
		this.shadowRoot.querySelector("#carrito").removeEventListener();
	}
}

window.customElements.define("sell-item", ProductCard);
