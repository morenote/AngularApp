import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuyaEditorComponent } from './muya-editor.component';

describe('MuyaComponent', () => {
  let component: MuyaEditorComponent;
  let fixture: ComponentFixture<MuyaEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuyaEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuyaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
