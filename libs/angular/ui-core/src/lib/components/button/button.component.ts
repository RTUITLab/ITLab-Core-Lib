import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy, Input, Output, EventEmitter,
} from '@angular/core';

@Component({
  selector: 'ng-ui-core-button',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.scss'
  ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  /** Type of the button */
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() type: string = 'button';

  /** Text of the button */
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() label: string = '';

  /** Name of the icon */
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() icon: string = '';

  /** Position of the icon, valid values are "left", "right", "top", "bottom". */
  @Input() iconPos: 'left' | 'right' | 'top' | 'bottom' = 'right';

  /** Value of the badge */
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() badge: string = '';

  /** Style class of the badge */
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() badgeClass: string = '';

  /** Inline style of the badge */
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() badgeStyle: { [p: string]: any } | null = null;

  /** When present, it specifies that the component should be disabled */
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() disabled: boolean = false;

  /** Whether the button is in loading state */
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() loading: boolean = false;

  /** Classes to be determined as Icon to display in loading state */
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() loadingIconStyle: string = 'ri-refresh-line spin-anim';

  /** Inline style of the element. */
  @Input() style: { [p: string]: any } | null = null;

  /** Style class of the element */
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() styleClass: string = '';

  /** Used to define a string that autocomplete attribute the current element */
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() ariaLabel: string = '';

  /** Callback to execute when button is clicked */
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  /** Callback to execute when button is focused */
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  /** Callback to execute when button loses focus */
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onBlur: EventEmitter<any> = new EventEmitter();
}
