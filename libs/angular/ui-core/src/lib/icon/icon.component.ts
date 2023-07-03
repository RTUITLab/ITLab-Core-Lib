// import '../../../../../../styles/icons/fonts/remixicon.css';
import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-ui-core-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent  implements OnInit{

  @Input() name = 'code-s-slash';
  @Input() type?: 'fill' | 'line' | '' = 'fill';
  @Input() color?: "primary" | "general" | "green" | "red" | "yellow" | "orange" | "general-light" | "green-light" | "red-light" | "yellow-light" | "orange-light" | "general-dark" | "green-dark" | "red-dark" | "yellow-dark" | "orange-dark" = 'primary';
  @Input() size?: number = 24;


  getClass(){
    return `${this.color ?? ""} ri-${this.name}${this.type ? `-${this.type}` : ''}`
  }
  getStyle(){
    return {fontSize: `${this.size}px`, height: "fit-content", display: "inline-flex", justifyContent: "center"};
  }

  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconComponent],
  exports: [IconComponent],
})
export class IconComponentModule {}
