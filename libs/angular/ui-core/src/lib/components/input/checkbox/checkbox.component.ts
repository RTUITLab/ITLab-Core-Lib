import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor } from "@angular/forms";
import { NgClass, NgIf, NgStyle } from "@angular/common";
import { IconComponent } from "../../icon";
import { BaseInputComponent, inputNgValueAccessorProviderFactory } from "../base-input.component";

type CheckedEvent = { checked: boolean, originalEvent: Event | undefined }

@Component({
  selector: 'nuc-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: [
    './checkbox.component.scss'
  ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [inputNgValueAccessorProviderFactory(() => CheckboxComponent)],
  imports: [
    NgClass,
    NgStyle,
    NgIf,
    IconComponent
  ],
  standalone: true
})
export class CheckboxComponent extends BaseInputComponent<any> {
  /** Name of the checkbox group */
  @Input() override name = '';

  /** Label of the checkbox */
  @Input() label = '';

  /** Icon class of the checkbox icon */
  @Input() checkboxIcon = 'ri-check-line';

  /** Value in checked state */
  @Input() trueValue: any = true;

  /** Value in unchecked state */
  @Input() falseValue: any = false;

  /** Ref to native el of checkbox */
  @ViewChild('cb') override inputViewChild: ElementRef<HTMLInputElement> | undefined;

  /** Callback to invoke on checkbox click */
  @Output() override inputEvent: EventEmitter<CheckedEvent> = new EventEmitter();

  get isChecked() {
    if (this.formControl) {
      return this.formControl.value === this.trueValue;
    }
    return this.value === this.trueValue;
  }

  onClick(event: Event, checkbox: HTMLInputElement, focus: boolean) {
    event.preventDefault();

    if (this.disabled || this.readonly) {
      return;
    }

    this.updateModel(event);

    if (focus) {
      checkbox.focus();
    }
  }

  override updateModel(event?: Event) {
    const newModelValue = this.isChecked ? this.falseValue : this.trueValue;
    this.value = newModelValue;
    this._onInputModelChange(newModelValue);

    if (this.formControl) {
      this.formControl.setValue(newModelValue);
    }
    this.inputEvent.emit({checked: newModelValue, originalEvent: event});
  }
}
