import { Component, h, Prop } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'edge-button',
  styleUrl: 'button-component.css',
  shadow: true,
})
export class EdgeButton {
  @Prop() class: "btn-default" | "btn-primary" | "btn-info" | "btn-success" | "btn-warning" | "btn-danger" = "btn-default";
  @Prop() title: string = "Submit";
  @Event() name: EventEmitter<string>;
  private strData: string = 'edge';
  
  getName() {
    this.name.emit(this.strData);
  }

  render() {
    return (
      <button onClick={() => this.getName()} class={this.class}>{this.title}</button>
    );
  }

}

