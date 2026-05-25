import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroBarraPesquisaComponent } from './filtro-barra-pesquisa.component';

describe('FiltroBarraPesquisaComponent', () => {
  let component: FiltroBarraPesquisaComponent;
  let fixture: ComponentFixture<FiltroBarraPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroBarraPesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroBarraPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
