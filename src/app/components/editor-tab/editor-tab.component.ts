import { Component } from '@angular/core';
import {NzTabComponent, NzTabSetComponent} from "ng-zorro-antd/tabs";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NgForOf} from "@angular/common";
import {MuyaEditorComponent} from "../editor/muya-editor/muya-editor.component";


@Component({
  selector: 'app-editor-tab',
  standalone: true,
  imports: [
    NzTabSetComponent,
    NzTabComponent,
    NzIconDirective,
    NgForOf,
    MuyaEditorComponent
  ],
  templateUrl: './editor-tab.component.html',
  styleUrl: './editor-tab.component.css'
})
export class EditorTabComponent {
  tabs = [
    {
      name: 'Tab1',
      icon: 'apple'
    },
    {
      name: 'Tab2',
      icon: 'android'
    }
  ];
}
