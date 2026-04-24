import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitoSenhaComponent } from './requisito-senha.component';

describe('RequisitoSenhaComponent', () => {
  let component: RequisitoSenhaComponent;
  let fixture: ComponentFixture<RequisitoSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitoSenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisitoSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
