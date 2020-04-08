import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsoCommonComponent } from './sso-common.component';

describe('SsoCommonComponent', () => {
  let component: SsoCommonComponent;
  let fixture: ComponentFixture<SsoCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsoCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsoCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
