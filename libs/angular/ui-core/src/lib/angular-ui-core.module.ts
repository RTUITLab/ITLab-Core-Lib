import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BadgeModule,
  ButtonModule,
  CheckboxModule
} from "./components";

@NgModule({
  imports: [CommonModule,
    ButtonModule,
    BadgeModule,
    CheckboxModule
  ],
  exports: [
    ButtonModule,
    BadgeModule,
    CheckboxModule
  ]
})
export class AngularUiCoreModule {}
