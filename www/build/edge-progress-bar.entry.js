import { r as registerInstance, h } from './index-ccd88df3.js';

const progressBarComponentCss = ":host{display:block}progress.determinate-progress{border:1px solid grey;border-radius:3px;width:30%;height:18px;position:relative}.determinate-progress:before{content:attr(data-label);font-size:0.8em;vertical-align:0;position:absolute;left:2%;right:0}.determinate-progress{color:#222}.determinate-progress::-webkit-progress-value{background:rgb(35, 231, 245)}.determinate-progress::-moz-progress-bar{background:#fcf4f4}.determinate-progress::-webkit-progress-value{background:#3880ff}.determinate-progress::-webkit-progress-bar{background:#fcf4f4}.progress-bar-success::-webkit-progress-value{background-color:#d4edda;border-color:#c3e6cb;color:#155724}.progress-bar-success::-moz-progress-value{background-color:#d4edda;border-color:#c3e6cb;color:#155724}.progress-bar-info::-webkit-progress-value{background-color:#cce5ff}.progress-bar-info::-moz-progress-value{background-color:#cce5ff}.progress-bar-warning::-webkit-progress-value{background-color:#ffc107}.progress-bar-warning::-moz-progress-value{background-color:#ffc107}.progress-bar-danger::-webkit-progress-value{background-color:#dc3545}.progress-bar-danger::-moz-progress-value{background-color:#dc3545}body{background:#ffffff;margin:50px 300px}.pure-material-progress-circular{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;border:none;border-radius:50%;padding:0.25em;width:3em;height:3em;color:rgb(var(--pure-material-primary-rgb, 33, 150, 243));background-color:transparent;font-size:16px;overflow:hidden}.pure-material-progress-circular::-webkit-progress-bar{background-color:transparent}.pure-material-progress-circular:indeterminate{-webkit-mask-image:linear-gradient(transparent 50%, black 50%), linear-gradient(to right, transparent 50%, black 50%);mask-image:linear-gradient(transparent 50%, black 50%), linear-gradient(to right, transparent 50%, black 50%);animation:pure-material-progress-circular 6s infinite cubic-bezier(0.3, 0.6, 1, 1)}:-ms-lang(x),.pure-material-progress-circular:indeterminate{animation:none}.pure-material-progress-circular:indeterminate::before,.pure-material-progress-circular:indeterminate::-webkit-progress-value{content:\"\";display:block;box-sizing:border-box;margin-bottom:0.25em;border:solid 0.25em transparent;border-top-color:currentColor;border-radius:50%;width:100% !important;height:100%;background-color:transparent;animation:pure-material-progress-circular-pseudo 0.75s infinite linear alternate}.pure-material-progress-circular:indeterminate::-moz-progress-bar{box-sizing:border-box;border:solid 0.25em transparent;border-top-color:currentColor;border-radius:50%;width:100%;height:100%;background-color:transparent;animation:pure-material-progress-circular-pseudo 0.75s infinite linear alternate}.pure-material-progress-circular:indeterminate::-ms-fill{animation-name:-ms-ring}@keyframes pure-material-progress-circular{0%{transform:rotate(0deg)}12.5%{transform:rotate(180deg);animation-timing-function:linear}25%{transform:rotate(630deg)}37.5%{transform:rotate(810deg);animation-timing-function:linear}50%{transform:rotate(1260deg)}62.5%{transform:rotate(1440deg);animation-timing-function:linear}75%{transform:rotate(1890deg)}87.5%{transform:rotate(2070deg);animation-timing-function:linear}100%{transform:rotate(2520deg)}}@keyframes pure-material-progress-circular-pseudo{0%{transform:rotate(-30deg)}29.4%{border-left-color:transparent}29.41%{border-left-color:currentColor}64.7%{border-bottom-color:transparent}64.71%{border-bottom-color:currentColor}100%{border-left-color:currentColor;border-bottom-color:currentColor;transform:rotate(225deg)}}.indeterminate-progress,.indeterminate-progress:before{height:5px;width:30%;}progress.indeterminate-progress{background-color:#b3d4fc;display:flex}.indeterminate-progress:before{background-color:#3f51b5;content:'';-webkit-animation:running-progress 2s infinite;animation:running-progress 2s infinite}@-webkit-keyframes running-progress{0%{margin-left:0%;margin-right:0%}25%{margin-left:25%;margin-right:0%}50%{margin-left:50%;margin-right:0%}100%{margin-left:100%;margin-right:0%}}@keyframes running-progress{0%{margin-left:0%;margin-right:0%}100%{margin-left:100%;margin-right:0%}}";

const ProgressBarComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.max = 0;
    this.value = 0;
    this.color = '';
    this.dlabel = '';
    this.class = '';
  }
  render() {
    return (h("div", null, h("progress", { max: this.max, value: this.value, class: this.class, "data-label": this.dlabel })));
  }
};
ProgressBarComponent.style = progressBarComponentCss;

export { ProgressBarComponent as edge_progress_bar };
