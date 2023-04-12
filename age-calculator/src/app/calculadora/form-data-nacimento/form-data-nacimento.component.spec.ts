import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataNacimentoComponent } from './form-data-nacimento.component';

describe('FormDataNacimentoComponent', () => {
  let component: FormDataNacimentoComponent;
  let fixture: ComponentFixture<FormDataNacimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDataNacimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDataNacimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
