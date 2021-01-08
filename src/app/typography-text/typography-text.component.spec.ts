import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TypographyTextComponent } from './typography-text.component';

describe('TypographyTextComponent', () => {
  let component: TypographyTextComponent;
  let fixture: ComponentFixture<TypographyTextComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographyTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
