import {Component, OnInit} from '@angular/core';
import Vditor from 'vditor';
import {EditorInterface} from "../editor-interface";


@Component({
  selector: 'app-VditorMarkdownEditor',
  templateUrl: './vditor-markdown-editor.component.html',
  styleUrls: ['./vditor-markdown-editor.component.css'],
  standalone:true
})
export class VditorMarkdownEditorComponent implements OnInit, EditorInterface {



  public vditor!: Vditor;

  ngOnInit() {
    this.vditor = new Vditor('vditor', {
      mode: 'ir',

      outline: {
        enable: true,
        position: 'right',
      },
      typewriterMode: true,
      placeholder: 'Hello, Vditor!',
      preview: {
        markdown: {
          toc: true,
          mark: true,
          footnotes: true,
          autoSpace: true,
        },
        math: {
          engine: 'KaTeX',
        },
      },
      toolbarConfig:{
        pin:true
      },

      counter: {
        enable: true,
        type: 'text',
      },
      undoDelay: 60,
      tab: '\t',
      upload: {
        accept: 'image/*,.mp3, .wav, .rar',
        token: 'test',
        url:  '/api/vditor/upload/' ,
        linkToImgUrl: '/api/vditor/fetch/' ,
        filename(name) {
          return name.replace(/[^(a-zA-Z0-9\u4e00-\u9fa5\.)]/g, '').replace(/[\?\\/:|<>\*\[\]\(\)\$%\{\}@~]/g, '').replace('/\\s/g', '')
        },
      },
      after: () => {
        this.vditor.setValue('Hello, Vditor + Angular!');
      }
    });
  }

  public SetContent(value: string, clearCache: boolean) {
    if (clearCache) {
      this.vditor.clearCache();
    }
    this.vditor.setValue(value, clearCache);
  }


  GetContent(): string {
    return this.vditor.getValue();

  }

  Destroy(): void {
    this.vditor.destroy();
  }

  Disabled(): void {
    this.vditor.disabled();
  }

  Enable(): void {
    this.vditor.enable();
  }

  GetYourName(): string {
    return "vditor";
  }

  IsReady(): boolean {
    return this.vditor!=null;
  }
}
