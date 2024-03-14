import {AfterViewInit, Component, ElementRef, inject, Input, OnInit} from '@angular/core';
import Muya from "@marktext/muya";
import '@marktext/muya/dist/assets/style.css'
import {DEFAULT_MARKDOWN} from "./Mock";
@Component({
  selector: 'app-muya-editor',
  standalone: true,
  imports: [],
  templateUrl: './muya-editor.component.html',
  styleUrl: './muya-editor.component.css'
})
export class MuyaEditorComponent implements AfterViewInit {
  @Input() editor_id = ""
  eleRef: ElementRef= inject(ElementRef);
  ngAfterViewInit() {
    console.log(this.editor_id)
    const container = this.eleRef.nativeElement.querySelector('#'+this.editor_id);
    console.log(container)
    const muya = new Muya(container, {
      markdown: DEFAULT_MARKDOWN,frontMatter: false
    });
    muya.init();
  }
}
