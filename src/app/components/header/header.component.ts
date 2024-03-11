import { Component } from '@angular/core';
import {NzMenuDirective, NzMenuGroupComponent, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        NzMenuDirective,
        NzMenuGroupComponent,
        NzMenuItemComponent,
        NzSubMenuComponent
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
