import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  ForwardRefFn,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, Validators } from "@angular/forms";
import { BooleanInput, coerceBooleanProperty } from "@angular/cdk/coercion";
import { AbstractNgModelComponent } from "./abstract-ng-model.component";

export function inputNgValueAccessorProviderFactory(forwardRefFactory: ForwardRefFn) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(forwardRefFactory),
    multi: true,
  }
}

@Component({template: '', standalone: true})
export class BaseInputComponent<T> extends AbstractNgModelComponent<T> implements OnChanges {
  /** Name of input */
  @Input() name: string | undefined;

  /** Placeholder of the input */
  @Input() placeholder = '';

  /** Establishes relationships between the component and label(s) where its value should be one or more element IDs */
  @Input() ariaLabelledBy = '';

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

  /** Ref to native el of input */
  @ViewChild('inputElement', {static: true}) inputViewChild: ElementRef<any> | undefined;

  /** Callback to invoke on input event */
  @Output() inputEvent: EventEmitter<any> = new EventEmitter();

  /** Is field in focus */
  isFocused = false;

  private _readonly = false;

  /** When present, it specifies that the component cannot be edited */
  @Input()
  get readonly(): boolean {
    return this._readonly;
  }

  set readonly(value: BooleanInput) {
    this._readonly = coerceBooleanProperty(value);
  }

  protected _required: boolean | undefined;

  /** When present, it specifies that input must be checked before submitting the form */
  @Input()
  get required(): boolean {
    return this._required ?? this.formControl?.hasValidator(Validators.required) ?? false;
  }

  set required(value: BooleanInput) {
    this._required = coerceBooleanProperty(value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formControl'] && !changes['formControl'].isFirstChange()) {
      this.formControl = changes['formControl'].currentValue;
      this.cdr.markForCheck();
    }
  }

  handleChange(event: Event) {
    if (!this.readonly) {
      this.updateModel(event);
    }
  }

  updateModel(event?: Event) {
    const value = this.inputViewChild?.nativeElement.value || ''
    this.value = value
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
}