import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy, Input,
} from '@angular/core';

@Component({
  selector: 'ng-ui-core-badge',
  templateUrl: './badge.component.html',
  styleUrls: [
    './badge.component.scss'
  ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  private MAX_NUMBER_IN_BADGE: number = 99;
  /** Style class of the component */
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() styleClass: string = '';

  /** Inline style of the component */
  @Input() style: {[p: string]: any} | null = null;

  /** Size of the badge */
  @Input() size: 'large' | 'medium' | 'small' = 'medium';

  /** Color of the badge */
  @Input() color: 'primary' | 'red' | 'green' = 'primary';

  /** Type of the badge */
  @Input() type: 'outline' | 'solid' | 'light' | 'transparent' = 'solid';

  /** Value to display inside the badge */
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  private _value: string = '';
  get value(): string {
    return this._value;
  }
  @Input() set value(value: string) {
    if (!Number.isNaN(value) && Number(value) > this.MAX_NUMBER_IN_BADGE){
      this._value = `${this.MAX_NUMBER_IN_BADGE}+`;
    }else{
      this._value = value;
    }
  }

  containerClass() {
    return {
      'badge': true,
      'badge-no-gutter': this.value != undefined && String(this.value).length === 1,
      'badge-lg': this.size === 'large',
      'badge-m': this.size === 'medium',
      'badge-sm': this.size === 'small',
      'badge-primary': this.color === 'primary',
      'badge-red': this.color === 'red',
      'badge-green': this.color === 'green',
      'badge-transparent': this.type === 'transparent',
      'badge-outline': this.type === 'outline',
      'badge-solid': this.type === 'solid',
      'badge-light': this.type === 'light'
    };
  }
}
