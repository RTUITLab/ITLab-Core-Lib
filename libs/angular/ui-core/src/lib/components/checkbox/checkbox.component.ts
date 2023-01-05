import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  forwardRef, OnChanges, SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR
} from "@angular/forms";
import { NgClass, NgIf, NgStyle } from "@angular/common";

@Component({
  selector: 'nuc-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: [
    './checkbox.component.scss'
  ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    }],
  imports: [
    NgClass,
    NgStyle,
    NgIf
  ],
  standalone: true
})
export class CheckboxComponent implements ControlValueAccessor, OnChanges {
  /** Name of the checkbox group */
  @Input() name = '';

  /** [It doesn't change checked state of checkbox] Variable which stores value, which used in when checkbox is checked */
  @Input() value: any;

  /** Label of the checkbox */
  @Input() label = '';

  /** When present, it specifies that the element should be disabled */
  @Input() isDisabled = false;

  /** Establishes relationships between the component and label(s) where its value should be one or more element IDs */
  @Input() ariaLabelledBy = '';

  /** Used to define a string that labels the input element */
  @Input() ariaLabel = '';

  /** Index of the element in tabbing order */
  @Input() tabindex: number | undefined;

  /** Identifier of the focus input to match a label defined for the component */
  @Input() inputId = '';

  /** Inline style of the component */
  @Input() style: { [p: string]: any } | null = null;

  /** Style class of the component */
  @Input() styleClass = '';

  /** Style class of the label */
  @Input() labelStyleClass = '';

  /** Value of the checkbox */
  @Input() formControl: FormControl | undefined;

  /** Icon class of the checkbox icon */
  @Input() checkboxIcon = 'ri-check-line';

  /** When present, it specifies that the component cannot be edited */
  @Input() isReadonly = false;

  /** When present, it specifies that checkbox must be checked before submitting the form */
  @Input() isRequired = false;

  /** Value in checked state */
  @Input() trueValue: any = true;

  /** Value in unchecked state */
  @Input() falseValue: any = false;

  /** Ref to native el of checkbox */
  @ViewChild('cb') inputViewChild: ElementRef | undefined;

  /** Callback to invoke on checkbox click */
  @Output() changeCb: EventEmitter<any> = new EventEmitter();

  /** Model for NgModel*/
  model: any;

  /** Is field in focus */
  isFocused = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onInputModelChange: (value: any) => void = () => {
  };

  /**
   * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
   * @docs-private
   */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onInputModelTouched: () => any = () => {
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formControl'] && !changes['formControl'].isFirstChange()) {
      this.formControl = changes['formControl'].currentValue;
      this.cd.markForCheck();
    }
  }

  constructor(private cd: ChangeDetectorRef) {
  }


  get isChecked() {
    if (this.formControl) {
      return this.formControl.value === this.trueValue;
    }
    return this.model === this.trueValue;
  }

  onClick(event: Event, checkbox: HTMLInputElement, focus: boolean) {
    event.preventDefault();

    if (this.isDisabled || this.isReadonly) {
      return;
    }

    this.updateModel(event);

    if (focus) {
      checkbox.focus();
    }
  }

  updateModel(event?: Event) {
    const newModelValue = this.isChecked ? this.falseValue : this.trueValue;
    this.model = newModelValue;
    this._onInputModelChange(newModelValue);

    if (this.formControl) {
      this.formControl.setValue(newModelValue);
    }

    this.changeCb.emit({checked: newModelValue, originalEvent: event});
  }

  handleChange(event: Event) {
    if (!this.isReadonly) {
      this.updateModel(event);
    }
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
    this._onInputModelTouched();
  }

  /** Puts the DOM focus on the main element. */
  focus() {
    if (
      this.inputViewChild
      && document.activeElement !== this.inputViewChild.nativeElement) {
      this.inputViewChild.nativeElement.focus();
    }
  }

  /** Removes the DOM focus on the main element. */
  blur() {
    if (!this.inputViewChild) {
      return;
    }
    this.inputViewChild.nativeElement.blur();
  }

  /** Function for ControlValueAccessor */
  writeValue(model: any): void {
    this.model = model;
    this.cd.markForCheck();
  }

  /** Function for ControlValueAccessor */
  registerOnChange(fn: (value: any) => void): void {
    this._onInputModelChange = fn;
  }

  /** Function for ControlValueAccessor */
  registerOnTouched(fn: any): void {
    this._onInputModelTouched = fn;
  }

  /** Function for ControlValueAccessor */
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.cd.markForCheck();
  }

  ////
}
