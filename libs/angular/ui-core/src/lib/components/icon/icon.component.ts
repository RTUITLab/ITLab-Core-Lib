import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'nuc-icon[icon]',
  template: `<span [ngClass]="icon"></span>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgClass
  ]
})
export class IconComponent {
  @Input() icon!: string
}
