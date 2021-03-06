import { Component, Element, Prop } from '@stencil/core';
import { Color, Mode } from '../../interface';
import { createColorClasses } from '../../utils/theme';

@Component({
  tag: 'ion-item-divider',
  styleUrls: {
    ios: 'item-divider.ios.scss',
    md: 'item-divider.md.scss'
  },
  shadow: true
})
export class ItemDivider {

  @Element() el!: HTMLElement;

  /**
   * The color to use for the item-divider
   */
  @Prop() color?: Color;

  /**
   * The mode determines which platform styles to use.
   * Possible values are: `"ios"` or `"md"`.
   */
  @Prop() mode!: Mode;

  componentDidLoad() {
    // Change the button size to small for each ion-button in the item
    // unless the size is explicitly set
    const buttons = this.el.querySelectorAll('ion-button');
    for (let i = 0; i < buttons.length; i++) {
      if (!buttons[i].size) {
        buttons[i].size = 'small';
      }
    }
  }

  hostData() {
    return {
      class: createColorClasses(this.color)
    };
  }

  render() {
    return [
      <slot name="start"></slot>,
      <div class="item-divider-inner">
        <div class="item-divider-wrapper">
          <slot></slot>
        </div>
        <slot name="end"></slot>
      </div>
    ];
  }
}
