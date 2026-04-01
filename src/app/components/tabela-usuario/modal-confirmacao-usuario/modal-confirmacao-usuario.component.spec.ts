import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmacaoUsuarioComponent } from './modal-confirmacao-usuario.component';

describe('ModalConfirmacaoUsuarioComponent', () => {
  let component: ModalConfirmacaoUsuarioComponent;
  let fixture: ComponentFixture<ModalConfirmacaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmacaoUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfirmacaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
