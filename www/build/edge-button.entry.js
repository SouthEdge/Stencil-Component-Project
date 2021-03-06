import { r as registerInstance, e as createEvent, h } from './index-ccd88df3.js';

const buttonComponentCss = ":host{display:block}button{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;padding:6px 12px;font-size:14px;line-height:1.42857143;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}button.btn{border-width:1px;background-color:initial;font-weight:400;opacity:.8;filter:alpha(opacity=80);padding:8px 16px;border-color:#444;color:#444}button.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}button.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}button.btn-wd{min-width:140px}button.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}button.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}button.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}button.btn-outline-primary{color:#007bff;background-color:transparent;background-image:none;border-color:#007bff}button.btn-outline-success{color:#28a745;background-color:transparent;background-image:none;border-color:#28a745}button.btn-outline-danger{color:#dc3545;background-color:transparent;background-image:none;border-color:#dc3545}button.btn-outline-warning{color:#ffc107;background-color:transparent;background-image:none;border-color:#ffc107}button.btn-outline-info{color:#17a2b8;background-color:transparent;background-image:none;border-color:#17a2b8}button.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}button.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}button.btn-link{font-weight:400;color:#007bff;background-color:transparent}button.btn-lg{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}button.btn-fill{color:#fff;background-color:#444;opacity:1;filter:alpha(opacity=100)}button.btn-round{border-width:1px;border-radius:30px!important;padding:8px 16px}button.btn-simple{border:0;font-size:16px;padding:8px 16px}button.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}button.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}button .btn-label .fa{width:13px}.fa-check:before{content:\"\\f00c\"}.fa-remove:before,.fa-close:before,.fa-times:before{content:\"\\f00d\"}";

const EdgeButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = createEvent(this, "name", 7);
    this.class = "btn-default";
    this.title = "Submit";
    this.strData = 'edge';
  }
  getName() {
    this.name.emit(this.strData);
  }
  render() {
    return (h("button", { onClick: () => this.getName(), class: this.class }, this.title));
  }
};
EdgeButton.style = buttonComponentCss;

export { EdgeButton as edge_button };
