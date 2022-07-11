import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BadgeModule, ButtonModule} from "./components";

@NgModule({
  imports: [CommonModule],
  exports: [
    ButtonModule,
    BadgeModule
  ]
})
export class AngularUiCoreModule {}
