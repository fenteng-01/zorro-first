import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TypographyEllipsisComponent } from './typography-ellipsis.component';

describe('TypographyEllipsisComponent', () => {
  let component: TypographyEllipsisComponent;
  let fixture: ComponentFixture<TypographyEllipsisComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographyEllipsisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographyEllipsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
