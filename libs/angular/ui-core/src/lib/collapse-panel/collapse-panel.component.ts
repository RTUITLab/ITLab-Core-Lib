import { Component, OnInit, NgModule, Input, HostListener, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponentModule } from "../icon/icon.component";


@Component({
  selector: 'ng-ui-core-collapse-panel',
  templateUrl: './collapse-panel.component.html',
  styleUrls: ['./collapse-panel.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CollapsePanelComponent implements OnInit{
  
  
  @Input()
  header?: string = '';
  @Input()
  style? = {};
  @Input()
  class? = '';

  @ViewChild('content')
  contentRef?: ElementRef;
  
  expanded = false;
  contentDisplay = 'block';
  contentHeight = 0;

  defaultContentHeight = 10;



  getItemClasses(){
    return 'collapse-item ' + (this.expanded && 'collapse-item-expanded')
  }
  getHeaderClasses(){
    return 'collapse-item-header-container ' + (this.expanded ? 'collapse-item-header-container-expanded' : 'collapse-item-header-container-contracted')
  }
  toggleExpanded(){
    if (this.expanded) this.close();
    else this.open();
  }

  open(){
    this.expanded = true;
    this.contentDisplay = 'block';
    setTimeout(() => {
      this.contentHeight = this.defaultContentHeight;
    }, 10);
  }
  close(){
    this.expanded = false;
    this.contentHeight = 0;
    setTimeout(() => {
      this.contentDisplay = 'none';
    }, 150)
  }

  getDefaultHeight(children: HTMLElement[]){
    return children.reduce((acc, child) => acc + child.scrollHeight, 0);
  }

  setDefaultParams(){
    if(this.contentRef) {
      const children = Array.from(this.contentRef.nativeElement.children);
      Promise.resolve().then(() => {
        const height = this.contentRef?.nativeElement.getBoundingClientRect().height;
        this.contentDisplay = 'none';
        this.defaultContentHeight = height;
      });
    }
  }

  ngOnInit(): void {
    setTimeout(() => this.setDefaultParams());
    window.addEventListener('resize', () => this.setDefaultParams())
  }

}

@NgModule({
    declarations: [CollapsePanelComponent],
    exports: [CollapsePanelComponent],
    imports: [CommonModule, IconComponentModule]
})
export class CollapsePanelComponentModule {}
