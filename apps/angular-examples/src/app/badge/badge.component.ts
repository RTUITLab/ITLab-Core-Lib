import { Component } from '@angular/core';
import { BadgeComponent as NucBadgeComponent } from '@rtuitlab/ng-ui-core';
import { NgForOf, NgIf } from "@angular/common";

@Component({
  standalone: true,
  selector: 'ae-badge',
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

              <nuc-badge
                value="10"
                [type]="type"
                [color]="color"
              ></nuc-badge>
            </div>
          </ng-container>
          <ng-template #showEmpty>
            <div></div>
          </ng-template>
        </ng-container>
      </ng-container>
    </div>
  `,
  imports: [NucBadgeComponent, NgForOf, NgIf],
})
export class BadgeComponent {
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
