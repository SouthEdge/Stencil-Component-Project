import { Component, Prop, State, h } from "@stencil/core";

 

@Component({

  tag: "edge-alert",

  styleUrl: "alert-component.css",

  shadow: true,

  assetsDirs: ["stencil-asset"],

})

export class MyComponent {

  @State() show: boolean = true;

  //@Prop({ reflectToAttr: true, mutable: true }) headertitle: string;
  @Prop({ mutable: true }) headertitle: string;

 

  render() {

    return (

     

          <div>
          <div class="card">

            <div class="title">{this.headertitle}</div>

            <span class="highlight" onClick={() => (this.show = !this.show)}>

              x

            </span>

          </div>
          </div>
          )

  }

}