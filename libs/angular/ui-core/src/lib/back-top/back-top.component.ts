import { Component, OnInit, NgModule, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponentModule } from "../icon/icon.component";

@Component({
  selector: 'ng-ui-core-back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.scss'],
})
export class BackTopComponent implements OnDestroy{

  
  threshold?: number = 150;

  @Input()
  style?: string;

  @Input()
  class?: string;

  visible = false;
  displayed = false;
  visibleTimeoutRef: NodeJS.Timeout | undefined;
  displayedTimeoutRef: NodeJS.Timeout | undefined;

  @Input()
  set Threshold(threshold: number) {
    this.threshold = threshold || 150;
  }

  

  hideButton(){
    if (this.visibleTimeoutRef) {
      clearTimeout(this.visibleTimeoutRef);
      this.visibleTimeoutRef = undefined;
    }
    this.visible = false;
    const ref = setTimeout(() => {
      this.displayed = false;
      this.displayedTimeoutRef = undefined;
    }, 150);
    this.displayedTimeoutRef = ref;
  }

  showButton(){
    if (this.displayedTimeoutRef) {
      clearTimeout(this.displayedTimeoutRef);
      this.displayedTimeoutRef = undefined;
    }
    this.displayed = true;
    const ref = setTimeout(() => {
      this.visible = true;
      this.visibleTimeoutRef = undefined;
    }, 10);
    this.visibleTimeoutRef = ref;
  }

  handleScroll(){
    const scroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const threshold = this.threshold || 150;
    if (scroll < threshold && this.visible && !this.displayedTimeoutRef) this.hideButton();
    if (scroll >= threshold && !this.visible && !this.visibleTimeoutRef) this.showButton();
  }
  
  scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  constructor() {
    window.addEventListener('scroll', ()=>{
      this.handleScroll();
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getClass(){
    return 'back-top ' + (!this.visible && 'back-top-fading ') + (!this.displayed && 'back-top-hidden ') + (this.class ?? '');
  }
}

@NgModule({
    declarations: [BackTopComponent],
    exports: [BackTopComponent],
    imports: [CommonModule, IconComponentModule]
})
export class BackTopComponentModule {}
