import { Component, OnInit, NgModule, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponentModule } from '../icon/icon.component';
import { transform } from '@babel/core';
const closeBtn = require('../../../../../../assets/close.svg');


@Component({
  selector: 'ng-ui-core-alert[title]',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AlertComponent {

  @Input() title = '';
  @Input() subtitle?: string;
  @Input() style? = {};
  type: 'info' | 'success' | 'warning' | 'error' = 'info';
  closable = true;
  @Input() onClose?: () => void;
  iconName = 'information';
  btnPath: any;
  visible = true;
  closing = '';

  @Input() 
  set Type(type: 'info' | 'success' | 'warning' | 'error') {
    this.type = type || 'info';
  }

  @Input() 
  set Closable(closable: boolean) {
    this.closable = closable ?? true;
  }
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
