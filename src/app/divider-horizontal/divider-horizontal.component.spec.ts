import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DividerHorizontalComponent } from './divider-horizontal.component';

describe('DividerHorizontalComponent', () => {
  let component: DividerHorizontalComponent;
  let fixture: ComponentFixture<DividerHorizontalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DividerHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividerHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
