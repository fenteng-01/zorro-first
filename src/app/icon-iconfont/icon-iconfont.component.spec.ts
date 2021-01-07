import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconIconfontComponent } from './icon-iconfont.component';

describe('IconIconfontComponent', () => {
  let component: IconIconfontComponent;
  let fixture: ComponentFixture<IconIconfontComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconIconfontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconIconfontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
