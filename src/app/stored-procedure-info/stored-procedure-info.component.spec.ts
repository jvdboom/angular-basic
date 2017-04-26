import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredProcedureInfoComponent } from './stored-procedure-info.component';

describe('StoredProcedureInfoComponent', () => {
  let component: StoredProcedureInfoComponent;
  let fixture: ComponentFixture<StoredProcedureInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoredProcedureInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredProcedureInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
