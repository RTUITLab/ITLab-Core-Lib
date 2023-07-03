import { Component, OnInit, NgModule, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponentModule } from '../icon/icon.component';

@Component({
  selector: 'ng-ui-core-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AlertComponent implements OnInit {

  @Input() title: string = 'Заголовок';
  @Input() style = {};
  @Input() type: 'info' | 'success' | 'warning' | 'error' = 'info';
  iconName = 'information';

  constructor() {
  }

  ngOnInit(): void {
  }
}

@NgModule({
  imports: [CommonModule, IconComponentModule],
  declarations: [AlertComponent],
  exports: [AlertComponent],
})
export class AlertComponentModule {}
