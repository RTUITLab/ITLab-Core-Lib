import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-ui-core-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
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
  imports: [CommonModule],
  declarations: [AlertComponent],
  exports: [AlertComponent],
})
export class AlertComponentModule {}
