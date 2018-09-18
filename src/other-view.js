import { LitElement, html } from '@polymer/lit-element/lit-element.js';
import { repeat } from 'lit-html/directives/repeat.js'

class OtherView extends LitElement {
    render() {
        const items = [{ id: 1, text: "foo" }, { id: 2, text: "bar" }];
        return html`
         ${repeat(items, (i) => i.id, (item, index) => html`
        <span>${item.text}</span>`)}
         `;
    }
}
window.customElements.define('other-view', OtherView);
