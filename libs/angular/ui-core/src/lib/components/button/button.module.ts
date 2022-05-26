import {NgModule} from "@angular/core";
import {ButtonComponent} from "./button.component";
import {CommonModule} from "@angular/common";
import { BadgeModule } from "../badge";

@NgModule({
  imports: [
    CommonModule,
    BadgeModule
  ],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonModule {}
