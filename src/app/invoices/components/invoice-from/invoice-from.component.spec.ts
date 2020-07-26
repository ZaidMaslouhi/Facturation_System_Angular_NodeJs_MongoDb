import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFromComponent } from './invoice-from.component';

describe('InvoiceFromComponent', () => {
  let component: InvoiceFromComponent;
  let fixture: ComponentFixture<InvoiceFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
