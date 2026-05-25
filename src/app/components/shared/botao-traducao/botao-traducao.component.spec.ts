import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoTraducaoComponent } from './botao-traducao.component';

describe('BotaoTraducaoComponent', () => {
  let component: BotaoTraducaoComponent;
  let fixture: ComponentFixture<BotaoTraducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoTraducaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoTraducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
