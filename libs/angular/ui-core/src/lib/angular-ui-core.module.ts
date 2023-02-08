import { NgModule } from '@angular/core';
import {
  BadgeComponent,
  ButtonComponent,
  CheckboxComponent,
  InputTextComponent
} from "./components";

@NgModule({
  imports: [CheckboxComponent, BadgeComponent, InputTextComponent, ButtonComponent],
  exports: [CheckboxComponent, BadgeComponent, InputTextComponent, ButtonComponent],
})
export class AngularUiCoreModule {
}
