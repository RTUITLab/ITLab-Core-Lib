import { Component } from '@angular/core';
import { ButtonComponent as NucButtonComponent } from '@rtuitlab/ng-ui-core';
import { NgForOf, NgIf } from "@angular/common";

@Component({
  standalone: true,
  selector: 'ae-button',
  template: `
    <div
      style="
     display:grid;
     grid-template-columns: repeat(4, 1fr);
     grid-gap: 1rem;
     align-items: center;
     "
    >
      <ng-container
        *ngFor="let type of types; let idx = index"
      >
        {{type}}
        <ng-container
          *ngFor="let color of colors"
        >
          <ng-container
            *ngIf="
        (type === 'transparent' && color === 'primary') ||
        (type !== 'transparent'); else showEmpty"
          >
            <div>
              <ng-container *ngIf="idx === 0">{{color}}</ng-container>

              <nuc-button
                [type]="type"
                label="Label"
                [styleColor]="color"
                [styleType]="type"
              ></nuc-button>
            </div>
          </ng-container>
          <ng-template #showEmpty>
            <div></div>
          </ng-template>
        </ng-container>
      </ng-container>
    </div>
  `,
  imports: [NucButtonComponent, NgIf, NgForOf],
})
export class ButtonComponent {
  types: ("outline" | "solid" | "light" | "transparent")[] = ['outline',
    'solid',
    'light',
    'transparent'
  ]
  colors: ("primary" | "red" | "green")[] = ['primary',
    'red',
    'green'
  ]
}
