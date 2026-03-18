import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStatusUsuarioComponent } from './modal-status-usuario.component';

describe('ModalStatusUsuarioComponent', () => {
  let component: ModalStatusUsuarioComponent;
  let fixture: ComponentFixture<ModalStatusUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalStatusUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalStatusUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
