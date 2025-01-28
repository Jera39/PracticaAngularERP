import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RRHHPage } from './rrhh.page';

describe('RRHHPage', () => {
  let component: RRHHPage;
  let fixture: ComponentFixture<RRHHPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RRHHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
