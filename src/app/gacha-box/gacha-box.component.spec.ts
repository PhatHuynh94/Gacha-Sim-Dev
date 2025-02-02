import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GachaBoxComponent } from './gacha-box.component';

describe('GachaBoxComponent', () => {
  let component: GachaBoxComponent;
  let fixture: ComponentFixture<GachaBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GachaBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GachaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
