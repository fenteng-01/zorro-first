import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DividerOrientationComponent } from './divider-orientation.component';

describe('DividerOrientationComponent', () => {
  let component: DividerOrientationComponent;
  let fixture: ComponentFixture<DividerOrientationComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DividerOrientationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividerOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
