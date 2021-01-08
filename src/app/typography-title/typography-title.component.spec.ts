import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TypographyTitleComponent } from './typography-title.component';

describe('TypographyTitleComponent', () => {
  let component: TypographyTitleComponent;
  let fixture: ComponentFixture<TypographyTitleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographyTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
