import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'edge-card',

  styleUrl: 'card-component.css',

  shadow: true,
})
export class CardComponent {
  @Prop() firstname: string;

  @Prop() lastname: string;

  @Prop() description: string;

  @Prop() avatar: string;

  private getText(): string {
    return this.firstname.charAt(0).toUpperCase() + this.lastname.charAt(0).toUpperCase();
  }

  render() {
    return (
      <slot>
        <div class="card user-card">
          <div class="card-up aqua-gradient"></div>

          <div class="avatar">
            {this.avatar ? (
              <img src={this.avatar} class="rounded-circle" alt="woman avatar" />
            ) : (
              <div class="rounded-text">
                <div>{this.getText()}</div>
              </div>
            )}
          </div>

          <div class="card-body">
            <h4 class="card-title font-weight-bold">{this.firstname + this.lastname}</h4>

            <hr />

            <p>{this.description}</p>
          </div>
        </div>
      </slot>
    );
  }
}
