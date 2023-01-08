import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgClass, NgIf, NgStyle } from "@angular/common";
import { IconComponent } from "../../icon";
import { BaseInputComponent, inputNgValueAccessorProviderFactory } from "../base-input.component";
import { coerceNumberProperty } from "@angular/cdk/coercion";

export type InputCustomTypes = 'text' | 'search' | 'icon'

@Component({
  selector: 'nuc-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [inputNgValueAccessorProviderFactory(() => InputNumberComponent)],
  imports: [
    NgStyle,
    NgClass,
    NgIf,
    IconComponent
  ]
})
export class InputNumberComponent extends BaseInputComponent<number> {
  @Input() iconPosition: 'right' | 'left' = 'left';

  @Input() errorText = '';

  /** Specifies the minimum value allowed */
  @Input() min: number | undefined

  /** Specifies the maximum value allowed */
  @Input() max: number | undefined

  /** Specifies the legal number intervals. Decimal input allowed if step will be decimal. Default is 1. */
  @Input() step = 1

  @Input() showActionsButtons = true

  /** Size of input */
  @Input() size: 'large' | 'medium' | 'small' = 'medium'

  /** Ref to native el of input */
  @ViewChild('inputElement', {static: true}) override inputViewChild: ElementRef<HTMLInputElement> | undefined;

  get containerClass() {
    return {
      "inputNumber-wrapper": true,
      "inputNumber-wrapper-disabled": this.disabled === true,
      "inputNumber-wrapper-readonly": this.readonly === true,
    };
  }

  override updateModel(event?: Event) {
    const newValue = this.inputViewChild?.nativeElement.value
    // TODO: fix wrong formcontrol decimal input
    const value = coerceNumberProperty(newValue, NaN)
    this._onInputModelChange(value);

    if (this.formControl) {
      this.formControl.setValue(value);
    }

    this.inputEvent.emit({value, originalEvent: event});
  }

  changeValueByStep(step: number) {
    const currentValue = coerceNumberProperty(this.value, 0)
    this.value = currentValue + step
  }
}
