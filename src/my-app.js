import { LitElement, html } from '@polymer/lit-element/lit-element.js';

class MyApp extends LitElement {
  render() {
    return html`
        <button @click="${e => this.click()}">Load other component</button>
        <other-view></other-view>
      `
  }
  click() {
    import("./other-view.js");
    
  }
}
window.customElements.define('my-app', MyApp);

