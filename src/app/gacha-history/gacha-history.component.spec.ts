import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GachaHistoryComponent } from './gacha-history.component';

describe('GachaHistoryComponent', () => {
  let component: GachaHistoryComponent;
  let fixture: ComponentFixture<GachaHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GachaHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GachaHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
