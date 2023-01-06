import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgClass, NgIf, NgStyle } from "@angular/common";
import { IconComponent } from "../../icon";
import { BaseInputComponent, inputNgValueAccessorProviderFactory } from "../base-input.component";

export type InputCustomTypes = 'text' | 'search' | 'icon'

@Component({
  selector: 'nuc-input',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [inputNgValueAccessorProviderFactory(() => InputTextComponent)],
  imports: [
    NgStyle,
    NgClass,
    NgIf,
    IconComponent
  ]
})
export class InputTextComponent extends BaseInputComponent {

  /** If type='icon' presents, then shown Remixicon class name like 'ri-home-line' */
  @Input() iconClassName = '';

  @Input() iconPosition: 'right' | 'left' = 'left';

  @Input() errorText = '';

  /** Size of input */
  @Input() size: 'large' | 'medium' | 'small' = 'medium'

  /** Ref to native el of input */
  @ViewChild('inputElement', {static: true}) override inputViewChild: ElementRef<HTMLInputElement> | undefined;

  private _type: InputCustomTypes = 'text'

  /** Custom types of input */
  @Input()
  get type(): InputCustomTypes {
    return this._type;
  }
  set type(value: InputCustomTypes) {
    this._type = value
    if (this._type === 'search') {
      this.iconClassName = 'ri-search-line'
    }
  }

  get containerClass() {
    return {
      "input-wrapper": true,
      "input-wrapper-large": this.size === 'large',
      "input-wrapper-small": this.size === 'small',
      "input-wrapper-medium": this.size === 'medium' || !this.size,
      "input-wrapper-disabled": Boolean(this.disabled),
      "input-wrapper-readonly": Boolean(this.readonly),
    };
  }

  get iconClass() {
    return {
      "input-icon": true,
      "input-icon-left": this.iconPosition === 'left' || !this.iconPosition,
      "input-icon-right": this.iconPosition === 'right',
    }
  }

  isIconShouldBeShown(type: InputCustomTypes) {
    return type === 'icon' || type === 'search'
  }
}
