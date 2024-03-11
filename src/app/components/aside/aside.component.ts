import { Component } from '@angular/core';
import {NzTreeComponent} from "ng-zorro-antd/tree";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzButtonComponent} from "ng-zorro-antd/button";
import { NZ_ICONS } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    NzTreeComponent,
    NzIconDirective,
    NzButtonComponent
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  nodes = [
    {
      title: 'parent 1',
      key: '100',
      expanded: true,
      icon: 'smile',
      children: [
        { title: 'leaf', key: '1001', icon: 'meh', isLeaf: true },
        { title: 'leaf', key: '1002', icon: 'frown', isLeaf: true }
      ]
    }
  ];
}
