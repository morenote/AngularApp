import {
  AfterViewInit,
  ChangeDetectorRef,
  Component, ComponentRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {VditorMarkdownEditorComponent} from "../VditorMarkdomEditor/vditor-markdown-editor.component";

@Component({
  selector: 'app-editor-container',
  standalone: true,
  imports: [],
  templateUrl: './editor-container.component.html',
  styleUrl: './editor-container.component.css'
})
export class EditorContainerComponent implements  AfterViewInit {

  cdr: ChangeDetectorRef=Inject(ComponentRef);
  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  public orderedViewContainer!: ViewContainerRef;

  @Input()
  public container_id!:string;

  ngAfterViewInit(){
    this.loadComponent();
  }
  loadComponent() {

    let componentRef = this.orderedViewContainer.createComponent(VditorMarkdownEditorComponent)


  }


}
