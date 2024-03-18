import {AfterViewInit, Component, ElementRef, inject, Input, OnInit} from '@angular/core';
import zh from '@marktext/muya/dist/locales/zh';
import Muya from "@marktext/muya";
import '@marktext/muya/dist/assets/style.css'

import {DEFAULT_MARKDOWN} from "./Mock";
import {
  CodeBlockLanguageSelector,
  EmojiSelector,
  ImageResizeBar,
  ImageToolBar,
  InlineFormatToolbar,
  ParagraphFrontButton,
  ParagraphFrontMenu,
  ParagraphQuickInsertMenu, PreviewToolBar,
  TableColumnToolbar,
  TableDragBar, TableRowColumMenu
} from "@marktext/muya/dist/ui";
@Component({
  selector: 'app-muya-editor',
  standalone: true,
  imports: [],
  templateUrl: './muya-editor.component.html',
  styleUrls:['./muya-editor.component.css']

})
export class MuyaEditorComponent implements AfterViewInit {
  @Input() editor_id = ""
  eleRef: ElementRef= inject(ElementRef);
  ngAfterViewInit() {
    console.log(this.editor_id)
    const container = this.eleRef.nativeElement.querySelector('#'+this.editor_id);
    console.log(container)
    Muya.use(EmojiSelector);
    Muya.use(InlineFormatToolbar);

    Muya.use(ImageToolBar);
    Muya.use(ImageResizeBar);
    Muya.use(CodeBlockLanguageSelector);

    Muya.use(ParagraphFrontButton);
    Muya.use(ParagraphFrontMenu);
    Muya.use(TableColumnToolbar);
    Muya.use(ParagraphQuickInsertMenu);
    Muya.use(TableDragBar);
    Muya.use(TableRowColumMenu);
    Muya.use(PreviewToolBar);

    const muya = new Muya(container, {
      markdown: DEFAULT_MARKDOWN,frontMatter: false
    });
    muya.locale(zh);
    muya.init();
  }
}
