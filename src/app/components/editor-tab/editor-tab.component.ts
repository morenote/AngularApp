import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ComponentRef, Inject,
  inject,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {NzTabComponent, NzTabSetComponent} from "ng-zorro-antd/tabs";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NgForOf} from "@angular/common";
import {MuyaEditorComponent} from "../editor/muya-editor/muya-editor.component";
import {VditorMarkdownEditorComponent} from "../editor/VditorMarkdomEditor/vditor-markdown-editor.component";

import {EditorInterface} from "../editor/editor-interface";
import {EditorContainerComponent} from "../editor/editor-container/editor-container.component";


@Component({
  selector: 'app-editor-tab',
  standalone: true,
  imports: [
    NzTabSetComponent,
    NzTabComponent,
    NzIconDirective,
    NgForOf,
    MuyaEditorComponent,
    VditorMarkdownEditorComponent,
    EditorContainerComponent

  ],
  templateUrl: './editor-tab.component.html',
  styleUrl: './editor-tab.component.css'
})
export class EditorTabComponent  {

  tabs = [
    {
      name: 'Tab1',
      icon: 'apple'
    },
    {
      name: 'Tab2',
      icon: 'apple'
    },

  ];







}
