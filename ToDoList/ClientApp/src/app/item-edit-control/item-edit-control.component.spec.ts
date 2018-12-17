import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditControlComponent } from './item-edit-control.component';

describe('ItemEditControlComponent', () => {
  let component: ItemEditControlComponent;
  let fixture: ComponentFixture<ItemEditControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEditControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEditControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
