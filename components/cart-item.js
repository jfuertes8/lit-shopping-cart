import { LitElement, html, css } from 'lit';

export class CartItem extends LitElement {
    //Aquí definimos estilos encapsulados de este elemento
    static styles = [
        css`
            :host {
                display: block;
                margin-bottom: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }

            div {
                padding: 15px;
            }

            h2 {
                color: #ff5733;
                margin-top: 0px;
                margin-bottom: 0px;
                font-size: 18px;
            }

            h3 {
                font-weight: 300;
                margin-top: 0px;
                margin-bottom: 0px;
            }

            h4 {
                margin-left: 10px;
                margin-right: 10px;
                margin-top: 0;
                margin-bottom: 0;
            }

            h5 {
                font-size: 24px;
                margin: 0;
                padding: 0;
            }

            h6 {
                font-size: 20px;
                margin: 0;
            }

            .top-info {
                padding: 0;
                display: flex;
                justify-content: space-between;
            }

            .top-text {
                margin: 0;
                padding: 0;
                flex: 1;
                margin-left: 10px;
            }

            p {
                font-size: 11px;
                font-weight: 300;
            }

            button {
                width:40px;
                height: 40px;
                border-radius: 100px;
                border: none;
                cursor: pointer;
            }

            .bottom-container {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 0;
            }

            .buttons {
                display: flex;
                flex-direction: row;
                text-align: center;
                align-items: center;
                padding-left: 0px;
                padding-top: 0px;
                padding-bottom: 0px;
            }

            .total {
                display: flex;
                text-align: center;
                align-items: center;
                padding: 0px;
            }
        `
    ];

    //Aquí definimos las propiedades de la clase de este elemento
    static properties = {
        productName: { type: String },
        productCounter: { type: Number },
        productPrice: { type: Number },
        imageUrl: { type: String }
    }

    //Con el constructor inicializamos las variables con un valor default
    //Esto se podría omitir porque ya le estamos pasando los valores
    constructor() {
        super();
        this.productName = '';
        this.productCounter = 0;
        this.productPrice = 0;
        this.imageUrl = '';
    }


    //Con esto renderizamos lo que queramos que muestre el componente en el HTML
    //Hay que usar 'this' para que sepa a qué instancia pertenece la variable
    render() {
        return html`
            <div>
                <div class="top-info">
                    <img src="${this.imageUrl}" width="100px" height="100px" />
                    <div class="top-text">
                        <h2>${this.productName}</h2>
                        <p>Esto es una descripción de cada uno de los productos que vas a añadir a tu lista de la compra</p>
                    </div>
                    <h3>${this.productPrice} €</h3>
                </div>
                <div class="bottom-container">
                    <div class="buttons">
                        <button @click=${this.increment}><h6>+</h6></button>
                        <h4>${this.productCounter}</h4>
                        <button @click=${this.decrement}><h6>-</h6></button>
                    </div>
                    <div class="total">
                        <h5>${this.productPrice * this.productCounter} €</h5>
                    </div>
                </div>
            </div>
        `;
    }

    increment() {
        this.productCounter++;
    }

    decrement() {
        if (this.productCounter > 0) {
            this.productCounter--;
        }
    }
}

//Definimos como se llama nuestra etiqueta para que HTML la entienda
customElements.define('cart-item', CartItem);
