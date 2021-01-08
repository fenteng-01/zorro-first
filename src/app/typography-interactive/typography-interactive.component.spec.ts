import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TypographyInteractiveComponent } from './typography-interactive.component';

describe('TypographyInteractiveComponent', () => {
  let component: TypographyInteractiveComponent;
  let fixture: ComponentFixture<TypographyInteractiveComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographyInteractiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographyInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
