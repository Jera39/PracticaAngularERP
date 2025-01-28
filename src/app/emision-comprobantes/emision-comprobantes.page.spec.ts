import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmisionComprobantesPage } from './emision-comprobantes.page';

describe('EmisionComprobantesPage', () => {
  let component: EmisionComprobantesPage;
  let fixture: ComponentFixture<EmisionComprobantesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmisionComprobantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
