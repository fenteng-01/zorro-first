import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TypographySuffixComponent } from './typography-suffix.component';

describe('TypographySuffixComponent', () => {
  let component: TypographySuffixComponent;
  let fixture: ComponentFixture<TypographySuffixComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographySuffixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographySuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
