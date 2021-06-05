import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationTileComponent } from './realisation-tile.component';

describe('RealisationTileComponent', () => {
  let component: RealisationTileComponent;
  let fixture: ComponentFixture<RealisationTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealisationTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisationTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
