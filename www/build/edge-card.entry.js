import { r as registerInstance, h } from './index-ccd88df3.js';

const cardComponentCss = ".card{font-weight:400;width:300px;border:0;-webkit-box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)}.user-card .card-up{height:120px;overflow:hidden;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem}.aqua-gradient{background:linear-gradient(40deg, #2096ff, #05ffa3) !important}.aqua-gradient{background:linear-gradient(40deg, #05ffa3, #2096ff) !important}.user-card .avatar{width:120px;margin-top:-60px;overflow:hidden;border:5px solid #fff;border-radius:50%;background-color:#fff !important;margin-left:auto;margin-right:auto;height:120px}.user-card .avatar img{width:100%}.rounded-circle{border-radius:50% !important}.user-card .card-body{text-align:center}.card-body{border-radius:0 !important;flex:1 1 auto;min-height:1px;padding:0.25rem 1.5rem 1.25rem 1.25rem}.font-weight-bold{font-weight:700 !important}.card-title{margin-bottom:0.75rem}.rounded-text{border-radius:50% !important;width:100%;height:100%;background-color:cornflowerblue}.rounded-text div{font-size:27px;position:absolute;text-align:center;margin:44px}";

const CardComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return this.firstname.charAt(0).toUpperCase() + this.lastname.charAt(0).toUpperCase();
  }
  render() {
    return (h("slot", null, h("div", { class: "card user-card" }, h("div", { class: "card-up aqua-gradient" }), h("div", { class: "avatar" }, this.avatar ? (h("img", { src: this.avatar, class: "rounded-circle", alt: "woman avatar" })) : (h("div", { class: "rounded-text" }, h("div", null, this.getText())))), h("div", { class: "card-body" }, h("h4", { class: "card-title font-weight-bold" }, this.firstname + this.lastname), h("hr", null), h("p", null, this.description)))));
  }
};
CardComponent.style = cardComponentCss;

export { CardComponent as edge_card };
