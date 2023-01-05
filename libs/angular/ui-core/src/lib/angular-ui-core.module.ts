import { NgModule } from '@angular/core';
import { BadgeComponent, ButtonComponent, CheckboxComponent, InputComponent } from "./components";

@NgModule({
  imports: [CheckboxComponent, BadgeComponent, InputComponent, ButtonComponent],
  exports: [CheckboxComponent, BadgeComponent, InputComponent, ButtonComponent],
})
export class AngularUiCoreModule {
}
