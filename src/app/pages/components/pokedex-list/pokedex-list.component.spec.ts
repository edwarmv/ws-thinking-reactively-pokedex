import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexListComponent } from './pokedex-list.component';

describe('PokedexListComponent', () => {
  let component: PokedexListComponent;
  let fixture: ComponentFixture<PokedexListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokedexListComponent]
    });
    fixture = TestBed.createComponent(PokedexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
