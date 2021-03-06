import { r as registerInstance, h } from './index-ccd88df3.js';

const alertComponentCss = ".card{max-width:460px;background-clip:border-box;border:1px solid var(--border-color);border-radius:0.25rem;padding:0.75rem 1.25rem;margin-bottom:1rem;background-color:var(--background-color);color:var(--color);display:flex;justify-content:space-between}.title{font-weight:bold;font-size:1.25rem}:host{--background-color:rgba(0, 0, 0, 0.03)}:host(.primary){--background-color:#cce5ff;--border-color:#b8daff;--color:#004085}:host(.success){--background-color:#d4edda;--border-color:#c3e6cb;--color:#155724}:host(.danger){--color:#721c24;--background-color:#f8d7da;--border-color:#f5c6cb}.highlight:hover{cursor:pointer;opacity:0.4}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.show = true;
  }
  render() {
    return (h("div", null, h("div", { class: "card" }, h("div", { class: "title" }, this.headertitle), h("span", { class: "highlight", onClick: () => (this.show = !this.show) }, "x"))));
  }
  static get assetsDirs() { return ["stencil-asset"]; }
};
MyComponent.style = alertComponentCss;

export { MyComponent as edge_alert };
