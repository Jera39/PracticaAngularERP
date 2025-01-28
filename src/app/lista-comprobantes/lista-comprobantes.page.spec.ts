import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaComprobantesPage } from './lista-comprobantes.page';

describe('ListaComprobantesPage', () => {
  let component: ListaComprobantesPage;
  let fixture: ComponentFixture<ListaComprobantesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComprobantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
