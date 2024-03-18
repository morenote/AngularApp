import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NzBreadCrumbComponent, NzBreadCrumbItemComponent} from "ng-zorro-antd/breadcrumb";
import {HeaderComponent} from "../../components/header/header.component";
import {AsideComponent} from "../../components/aside/aside.component";
import {EditorTabComponent} from "../../components/editor-tab/editor-tab.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, NzBreadCrumbComponent, NzBreadCrumbItemComponent, HeaderComponent, AsideComponent, EditorTabComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isCollapsed = false;
}
