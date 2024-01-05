import { LitElement, html, css } from 'lit';

export class SuccessComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            h2, p {
                text-align: center;
            }

            button {
                margin-top: 22px;
                width: 250px;
                height: 42px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: bold;
                background-color: #ff5733;
                color: #ffffff;
            }
        `
    ];

    render() {
        return html`
            <img src="./assets/success.jpg" width="100%" height="auto" />
            <h2>Ole, ¡Iniciaste sesión!</h2>
            <p>Has iniciado sesión correctamente. Ahora ya puedes realizar todas las operativas de un usuario logado.</p>
            <button @click="${this._goBack}">Volver al inicio de sesión</button>
        `;
    }

    _goBack() {
        this.dispatchEvent(new CustomEvent('signal', { detail: { login: true }, bubbles: true, composed: true }));
    }
}
customElements.define('success-component', SuccessComponent);
