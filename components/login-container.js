import { LitElement, html, css } from 'lit';
import { LoginForm } from './login-form';
import { SuccessComponent } from './success-component'

export class LoginContainer extends LitElement {

    static get properties() {
        return {
            success: { type: Boolean },
        };
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            ${this.success 
                ? html`<success-component @signal="${this._hiddenLogin}"></success-component>` 
                : html`<login-form @sign="${this._hiddenLogin}"></login-form>`
            }
        `;
    }

    _hiddenLogin() {
        this.success = !this.success;
    }
}
customElements.define('login-container', LoginContainer);
