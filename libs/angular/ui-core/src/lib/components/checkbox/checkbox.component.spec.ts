import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  fakeAsync,
  TestBed,
  TestBedStatic,
  tick
} from '@angular/core/testing';

import {CheckboxComponent} from './checkbox.component';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";
import {Component, SimpleChange} from "@angular/core";

describe('CheckboxComponent', () => {
  let checkboxEl: HTMLInputElement;

  describe('Checkbox with NgModel', () => {
    let testNgModelComponent: CheckboxWithNgModelComponent;
    let testNgModelFixture: ComponentFixture<CheckboxWithNgModelComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [CheckboxComponent, CheckboxWithNgModelComponent],
        imports: [FormsModule]
      }).compileComponents();
    });

    beforeEach(() => {
      testNgModelFixture = TestBed.createComponent(CheckboxWithNgModelComponent);
      testNgModelFixture.detectChanges();

      testNgModelComponent = testNgModelFixture.componentInstance;

      checkboxEl = testNgModelFixture.debugElement.query(By.css('[type="checkbox"]')).nativeElement;
    });

    it('should create', () => {
      expect(testNgModelComponent).toBeTruthy();
    });

    it('should get value from NgModel', fakeAsync(() => {
      testNgModelComponent.value = true;
      testNgModelFixture.detectChanges();

      tick();
      testNgModelFixture.detectChanges();

      expect(checkboxEl.checked).toBeTruthy();

    }));

    it('should return value right value via NgModel, if changed value changed outside', fakeAsync(() => {
      let model = true;

      testNgModelComponent.value = model;
      testNgModelFixture.detectChanges();

      tick();
      testNgModelFixture.detectChanges();

      expect(checkboxEl.checked).toBeTruthy();

      model = false;

      testNgModelComponent.value = model;
      testNgModelFixture.detectChanges();

      tick();
      testNgModelFixture.detectChanges();

      expect(checkboxEl.checked).toBeFalsy();
    }));

    it('should return value right value via NgModel and custom change callback, if changed value changed inside',
      fakeAsync(() => {
        testNgModelComponent.value = true;
        testNgModelFixture.detectChanges();

        tick();
        testNgModelFixture.detectChanges();

        expect(checkboxEl.checked).toBeTruthy();

        checkboxEl.click();
        testNgModelFixture.detectChanges();

        expect(testNgModelComponent.value).toBeFalsy();
      }));
  });

  describe('Checkbox with FormControl', () => {
    let formControl: FormControl;
    let testFormControlComponent: CheckboxWithFormControlComponent;
    let testFormControlFixture: ComponentFixture<CheckboxWithFormControlComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [CheckboxComponent, CheckboxWithFormControlComponent],
        imports: [ReactiveFormsModule]
      }).compileComponents();
    });

    beforeEach(() => {
      testFormControlFixture = TestBed.createComponent(CheckboxWithFormControlComponent);
      testFormControlComponent = testFormControlFixture.componentInstance;
      checkboxEl = testFormControlFixture.debugElement.query(By.css('[type="checkbox"]')).nativeElement;
    });

    it('should create', () => {
      expect(testFormControlComponent).toBeTruthy();
    });

    it('should get value from FormControl with true value', () => {
      expect(checkboxEl.checked).toBeFalsy();

      testFormControlComponent.formControl = new FormControl(true);
      testFormControlFixture.detectChanges();

      expect(testFormControlComponent.formControl.value).toBeTruthy();
      expect(checkboxEl.checked).toBeTruthy();
    });

    it('should return value right value via FormControl, if changed value changed outside', async () => {
      expect(checkboxEl.checked).toBeFalsy();

      testFormControlComponent.formControl = new FormControl(true);
      testFormControlFixture.detectChanges();

      expect(testFormControlComponent.formControl.value).toBeTruthy();
      expect(checkboxEl.checked).toBeTruthy();

      testFormControlComponent.formControl = new FormControl(false);
      testFormControlFixture.detectChanges();

      expect(testFormControlComponent.formControl.value).toBeFalsy();
      expect(checkboxEl.checked).toBeFalsy();
    });

    it('should return value right value via FormControl, if changed value changed inside', () => {
      expect(checkboxEl.checked).toBeFalsy();

      checkboxEl.click();
      testFormControlFixture.detectChanges();

      expect(testFormControlComponent.formControl.value).toBeFalsy();
      expect(checkboxEl.checked).toBeFalsy();
    });
  })
});

/** Test component with ngModel */
@Component({
  template: '<ng-ui-core-checkbox name="checkbox" [(ngModel)]="value"></ng-ui-core-checkbox>'
})
class CheckboxWithNgModelComponent {
  value = false;
}

/** Test component with reactive forms */
@Component({
  template: `<ng-ui-core-checkbox [formControl]="formControl"></ng-ui-core-checkbox>`,
})
class CheckboxWithFormControlComponent {
  formControl = new FormControl(false);
}
