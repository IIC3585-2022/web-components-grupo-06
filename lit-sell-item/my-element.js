/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html, css } from "lit-element";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
import { LitElement, html, css } from "lit";

export class sellItem extends LitElement {
	static get properties() {
		return {
			colorProd: { type: String },
			imgProd: { type: String },
			nombreProd: { type: String },
			extraInfo: { type: String },
			precioAnterior: { type: String },
			precioProd: { type: String },
			descuento: { type: String },
			rating: { type: String },
			inCart: { type: Boolean },
			isFav: { type: Boolean },
		};
	}

	constructor() {
		super();

		this.colorProd = this.getAttribute("colorProd");
		this.imgProd = this.getAttribute("imgProd");
		this.nombreProd = this.getAttribute("nombreProd");

		this.extraInfo = this.getAttribute("extraInfo");
		this.precioAnterior = this.getAttribute("precioAnterior");
		this.precioProd = this.getAttribute("precioProd");
		this.descuento = this.getAttribute("descuento");
		this.rating = this.getAttribute("rating");

		this.inCart = false;
		this.isFav = false;
		console.log(this.descuento);
	}

	render() {
		return html`
			<div class="contenedor-card">
				<div class="card">
					<div class="wrapper">
						<div class="color-prod"></div>
						<div
							class="img-prod"
							style="background-image: url(${this.imgProd})"
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
										<div class="precio-actual">
											<p>${this.precioProd}</p>
										</div>

										<div
											@click=${this.inCartBtnHandler}
											class="icono action alCarrito"
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
			</div>
		`;
	}

	inCartBtnHandler() {
		this.renderRoot.querySelector(".in-cart").classList.toggle("hidden");
		this.renderRoot.querySelector(".out-cart").classList.toggle("hidden");
		this.inCart = !this.inCart;
	}

	favBtnHandler() {
		this.renderRoot.querySelector(".black-heart").classList.toggle("hidden");
		this.renderRoot.querySelector(".red-heart").classList.toggle("hidden");
		this.isFav = !this.isFav;
	}

	static get styles() {
		return css`
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
		`;
	}
}

window.customElements.define("sell-item", sellItem);
