import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, Validators } from "@angular/forms";
import { NgClass, NgIf, NgStyle } from "@angular/common";
import { BooleanInput, coerceBooleanProperty } from "@angular/cdk/coercion";

@Component({
  selector: 'nuc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    }],
  imports: [
    NgStyle,
    NgClass,
    NgIf
  ]
})
export class InputComponent implements OnChanges {
  /** Name of input */
  @Input() name: string | undefined;

  /** Value of input */
  @Input() value = '';

  /** Placeholder of the input */
  @Input() placeholder = '';

  @Input() errorText = '';

  /** Establishes relationships between the component and label(s) where its value should be one or more element IDs */
  @Input() ariaLabelledBy = '';

  /** Size of input */
  @Input() size: 'large' | 'medium' | 'small' = 'medium'

  /** When present, it specifies that the component should be disabled */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  protected _disabled = false;

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

  /** Value of the input */
  @Input() formControl: FormControl | undefined;

  /** Icon class of the input icon */
  @Input() inputIcon = 'ri-check-line';

  /** When present, it specifies that the component cannot be edited */
  @Input()
  get readonly(): boolean {
    return this._readonly;
  }
  set readonly(value: BooleanInput) {
    this._readonly = coerceBooleanProperty(value);
  }
  private _readonly = false;

  /** When present, it specifies that input must be checked before submitting the form */
  @Input()
  get required(): boolean {
    return this._required ?? this.formControl?.hasValidator(Validators.required) ?? false;
  }
  set required(value: BooleanInput) {
    this._required = coerceBooleanProperty(value);
  }
  protected _required: boolean | undefined;

  /** Ref to native el of input */
  @ViewChild('inputElement', {static: true}) inputViewChild: ElementRef<HTMLInputElement> | undefined;

  /** Callback to invoke on input click */
  @Output() inputEvent: EventEmitter<any> = new EventEmitter();

  /** Model for NgModel*/
  model: any;

  /** Is field in focus */
  isFocused = false;

  /** Is field was touched */
  isWasTouched = false

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formControl'] && !changes['formControl'].isFirstChange()) {
      this.formControl = changes['formControl'].currentValue;
      this.cd.markForCheck();
    }
  }

  handleChange(event: Event) {
    if (!this.readonly) {
      this.updateModel(event);
    }
  }

  updateModel(event?: Event) {
    const value = this.inputViewChild?.nativeElement.value || ''
    this.model = value
    this._onInputModelChange(value);

    if (this.formControl) {
      this.formControl.setValue(value);
    }

    this.inputEvent.emit({value, originalEvent: event});
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
    this.isWasTouched = true;
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
    this.disabled = isDisabled;
    this.cd.markForCheck();
  }

  containerClass() {
    return {
      "input-wrapper": true,
      "input-wrapper-large": this.size === 'large',
      "input-wrapper-small": this.size === 'small',
      "input-wrapper-medium": this.size === 'medium' || !this.size,
      "input-wrapper-disabled": Boolean(this.disabled),
      "input-wrapper-readonly": Boolean(this.readonly),
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onInputModelChange: (value: any) => void = () => {
  };

  ////

  /**
   * Called when the input is blurred. Needed to properly implement ControlValueAccessor.
   * @docs-private
   */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onInputModelTouched: () => any = () => {
  };
}
