import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetreiroResultadoComponent } from './letreiro-resultado.component';

describe('LetreiroResultadoComponent', () => {
  let component: LetreiroResultadoComponent;
  let fixture: ComponentFixture<LetreiroResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetreiroResultadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetreiroResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
