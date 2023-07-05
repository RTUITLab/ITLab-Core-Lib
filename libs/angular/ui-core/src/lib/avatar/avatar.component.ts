import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-ui-core-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() name?: string;
  size?: 120 | 96 | 72 | 48 | 36 | 24 = 96;
  color?: 'primary' | 'green' | 'red' | 'general' = 'primary';
  @Input() src?: string;

  @Input() 
  set Size(size: 120 | 96 | 72 | 48 | 36 | 24) {
    this.size = size || 96;
  }

  @Input()
  set Color(color: 'primary' | 'green' | 'red' | 'general') {
    this.color = color || 'primary';
  }

  handleSrcError(){
    this.src = '';
  }
  getLetter() {
    return this.name ? this.name[0] : null;
  }

  

  getClass() {
    return `avatar avatar-${this.size} avatar-${this.color}`;
  }

  getStyle() {
    let size = 48;

    switch (this.size) {
      case 120:
        size = 64;
        break;
      case 72:
        size = 32;
        break;
      case 48:
        size = 24;
        break;
      case 36:
        size = 18;
        break;
      case 24:
        size = 14;
        break;
      default:
        break;
    }

    return {
      fontSize: `${size}px`,
    };
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [AvatarComponent],
  exports: [AvatarComponent],
})
export class AvatarComponentModule {}
