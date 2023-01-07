import { ControlValueAccessor } from '@angular/forms';
import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from "@angular/cdk/coercion";

@Component({template: '', standalone: true})
export class AbstractNgModelComponent<T = any> implements ControlValueAccessor {
  protected cdr: ChangeDetectorRef;

  constructor() {
    this.cdr = inject(ChangeDetectorRef)
  }

  protected _disabled = false;

  /** When present, it specifies that the component should be disabled */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }

  protected _value!: T;

  get value(): T {
    return this._value;
  }

  @Input()
  protected set value(value: T) {
    this._value = value;
    this.notifyValueChange();
  }

  notifyValueChange(): void {
    if (this._onInputModelChange) {
      this._onInputModelChange(this.value);
    }
  }

  /** Function for ControlValueAccessor */
  writeValue(value: T): void {
    this._value = value;
    this.cdr.markForCheck();
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
    this.cdr.markForCheck();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected _onInputModelChange: (value: T) => void = () => {
  };

  /**
   * Called when the input is blurred. Needed to properly implement ControlValueAccessor.
   * @docs-private
   */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected _onInputModelTouched: () => any = () => {
  };
}
