import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcartoonComponent } from './imgcartoon.component';

describe('ImgcartoonComponent', () => {
  let component: ImgcartoonComponent;
  let fixture: ComponentFixture<ImgcartoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgcartoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgcartoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
