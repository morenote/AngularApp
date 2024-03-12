import { Component } from '@angular/core';
import {NzTreeComponent} from "ng-zorro-antd/tree";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzButtonComponent} from "ng-zorro-antd/button";
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    NzTreeComponent,
    NzIconDirective,
    NzButtonComponent,
    NgIf
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  nodes = [
    {
      title: '文件夹 1',
      key: '100',
      expanded: true,
      icon: 'folder',
      children: [
        { title: '测试', key: '1001', icon: 'file-markdown', isLeaf: true },
        { title: '测试', key: '1002', icon: 'file-markdown', isLeaf: true }

      ]
    }
  ];
}
