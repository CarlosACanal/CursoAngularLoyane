import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoFormsComponent } from './aluno-forms.component';

describe('AlunoFormsComponent', () => {
  let component: AlunoFormsComponent;
  let fixture: ComponentFixture<AlunoFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
