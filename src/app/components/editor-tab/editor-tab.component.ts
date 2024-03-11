import { Component } from '@angular/core';
import {NzTabComponent, NzTabSetComponent} from "ng-zorro-antd/tabs";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-editor-tab',
  standalone: true,
  imports: [
    NzTabSetComponent,
    NzTabComponent,
    NzIconDirective,
    NgForOf
  ],
  templateUrl: './editor-tab.component.html',
  styleUrl: './editor-tab.component.css'
})
export class EditorTabComponent {
  tabs = [
    {
      name: 'Tab 1',
      icon: 'apple'
    },
    {
      name: 'Tab 2',
      icon: 'android'
    }
  ];
}
