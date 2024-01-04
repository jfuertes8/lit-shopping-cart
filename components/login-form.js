import { LitElement, html, css } from 'lit';

export class LoginForm extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                background-color: #f5ebe0;
                border-radius: 15px;
                padding: 20px;
            }

            h2 {
                margin-top: 0;
            }

            p {
                font-weight: 300;
                font-size: 14px;
            }

            input {
                width: 100%;
                box-sizing: border-box;
                margin-top: 6px;
                margin-bottom: 16px;
                height: 36px;
                border: none;
                border-radius: 10px;
                padding-left: 10px;
                text-align: center;
            }

            button {
                height: 40px;
                border: none;
                background-color: #ff5733;
                color: #ffffff;
                border-radius: 10px;
                margin-top: 20px;
                cursor: pointer;
                font-weight: bold;
                transition: 0.15s;
            }

            button:hover {
                font-size: 16px;
                height: 45px;
                transition: 0.15s;
            }
        `
    ];

    render() {
        return html`
            <h2>Login</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem tellus, fermentum id ultricies nec, scelerisque viverra metus. Donec eu euismod libero, nec laoreet eros.</p>
            <div>
                <label>Email</label>
                <input id="email" type="email" placeholder="ejemplo@ejemplo.com" />
            </div>
            <div>
                <label>Contraseña</label>
                <input id="password" type="password" placeholder="Por favor introduce tu contraseña" />
            </div>
            
            <button @click="${this._login}">Iniciar sesión</button>
        `;
    }

    _login() {
        const email = this.shadowRoot.querySelector("#email").value;
        const password = this.shadowRoot.querySelector("#password").value;

        if(!!email && !!password) {
            this.dispatchEvent(new CustomEvent('sign', { detail: {login: true}, bubbles: true, composed: true}));
        }
    }
}
customElements.define('login-form', LoginForm);
