import { Component, OnInit, NgModule, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-ui-core-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CollapseComponent implements OnInit {

  @Input()
  style? = {};
  @Input()
  class? = '';

  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [CollapseComponent],
  exports: [CollapseComponent],
})
export class CollapseComponentModule {}
