import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'edge-progress-bar',
  styleUrl: 'progress-bar-component.css',
  shadow: true,
})
export class ProgressBarComponent {
  @Prop() max: number = 0;
  @Prop() value: number = 0;
  @Prop() color: string = '';
  @Prop() dlabel: string = '';
  @Prop() class: string = '';

  render() {
    return (
      <div>
        <progress max={this.max} value={this.value} class={this.class} data-label={this.dlabel}></progress>
      </div>
    );
  }
}
