import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ButtonComponent } from "./button/button.component";
import { BadgeComponent } from "./badge/badge.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { InputComponent } from "./input/input.component";

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent, BadgeComponent, CheckboxComponent, InputComponent],
  selector: 'ae-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
