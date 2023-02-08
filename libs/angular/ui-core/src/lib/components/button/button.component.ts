import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy, Input, Output, EventEmitter,
} from '@angular/core';
import { NgClass, NgIf, NgStyle } from "@angular/common";


@Component({
  selector: 'nuc-button',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.scss'
  ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgStyle,
    NgClass,
    NgIf
  ],
  standalone: true
})
export class ButtonComponent{

  /** Type of the button */
  @Input() type: string = 'button';

  /** Text of the button */
  @Input() label: string = '';

  /** Style Color of the button */
  @Input() styleColor: 'primary' | 'red' | 'green' = 'primary';

  /** Style Type of the button */
  @Input() styleType: 'solid' | 'outline' | 'light' | 'transparent' = 'solid';

  /** Style Size of the button */
  @Input() buttonSize: 'large' | 'medium' | 'small' = 'medium';

  /** Name of the icon */
  @Input() icon: string = '';

  /** Position of the icon, valid values are "left", "right". */
  @Input() iconPos: 'left' | 'right' = 'right';

  /** When present, it specifies that the component should be disabled */
  @Input() disabled: boolean = false;

  /** Whether the button is in loading state */
  @Input() loading: boolean = false;

  /** Classes to be determined as Icon to display in loading state */
  @Input() loadingIconStyle: string = 'ri-refresh-line spin-anim';

  /** Inline style of the element. */
  @Input() style: { [p: string]: any } | null = null;

  /** Style class of the element */
  @Input() styleClass: string = '';

  /** Used to define a string that autocomplete attribute the current element */
  @Input() ariaLabel: string = '';

  /** Callback to execute when button is clicked */
  @Output() clickCb: EventEmitter<any> = new EventEmitter();

  /** Callback to execute when button is focused */
  @Output() focusCb: EventEmitter<any> = new EventEmitter();

  /** Callback to execute when button loses focus */
  @Output() blurCb: EventEmitter<any> = new EventEmitter();

  containerClass() {
    return {
      'button':true,
      'button-icon-only': (this.icon && !this.label),
      'disabled': this.disabled || this.loading,
      'button-loading': this.loading,
      'button-primary': this.styleColor === 'primary',
      'button-green': this.styleColor === 'green',
      'button-red': this.styleColor === 'red',
      'button-transparent': this.styleType === 'transparent',
      'button-outline': this.styleType ==='outline',
      'button-solid': this.styleType === 'solid',
      'button-light': this.styleType === 'light',
      'button-large': this.buttonSize === 'large',
      'button-medium': this.buttonSize === 'medium',
      'button-small': this.buttonSize === 'small'
    };
  }
}
