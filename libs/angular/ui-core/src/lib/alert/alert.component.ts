import { Component, OnInit, NgModule, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponentModule } from '../icon/icon.component';
const closeBtn = require('../../../../../../assets/close.svg');


@Component({
  selector: 'ng-ui-core-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AlertComponent {

  @Input() title = 'Заголовок';
  @Input() subtitle = 'Подзаголовок';
  @Input() style? = {};
  @Input() type: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Input() closable = true;
  @Input() onClose?: () => void;
  iconName = 'information';
  btnPath: any;
  visible = true;
  closing = '';

  constructor(private host: ElementRef<HTMLElement>) {
    this.btnPath = closeBtn;
  }

  getIconName() {
    if (this.type === 'info') return 'information';
    if (this.type === 'success') return 'checkbox-circle';
    if (this.type === 'warning') return 'error-warning';
    if (this.type === 'error') return 'close-circle';
    return '';
  }

  closeAlert() {
    this.closing = ' alert-closing';
    this.onClose?.();
    setTimeout(() => {
      this.host.nativeElement.remove();
    }, 150);
  }
}

@NgModule({
  imports: [CommonModule, IconComponentModule],
  declarations: [AlertComponent],
  exports: [AlertComponent],
})
export class AlertComponentModule {}
