import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReadComponent } from './home-read.component';

describe('HomeReadComponent', () => {
  let component: HomeReadComponent;
  let fixture: ComponentFixture<HomeReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
