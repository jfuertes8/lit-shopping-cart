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

            p#intro-text {
                margin-bottom: 15px;
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

            .error-container {
                margin-top: 20px;
                background-color: #ffcfd2;
                border-radius: 10px;
                padding: 10px;
                display: none;
            }

            p {
                margin: 0;
            }
        `
    ];

    render() {
        return html`
            <h2>Login</h2>
            <p id="intro-text">Inicia sesión en la web para poder acceder al detalle de tu perfil y poder realizar acciones en tu sesión privada.</p>
            <div>
                <label>Email</label>
                <input id="email" type="email" placeholder="ejemplo@ejemplo.com" />
            </div>
            <div>
                <label>Contraseña</label>
                <input id="password" type="password" placeholder="Por favor introduce tu contraseña" />
            </div>
            
            <button @click="${this._login}">Iniciar sesión</button>

            <div id="error-block" class="error-container">
                <p>Vaya... necesitamos que introduzcas tu email y contraseña para poder iniciar sesión</p>
            </div>
        `;
    }

    _login() {
        const email = this.shadowRoot.querySelector("#email").value;
        const password = this.shadowRoot.querySelector("#password").value;

        if (!!email && !!password) {
            this.dispatchEvent(new CustomEvent('sign', { detail: { login: true }, bubbles: true, composed: true }));
        } else {
            this.shadowRoot.getElementById('error-block').style.display = 'block';
        }
    }
}
customElements.define('login-form', LoginForm);
