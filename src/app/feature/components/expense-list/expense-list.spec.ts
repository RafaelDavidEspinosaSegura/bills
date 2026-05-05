import { TestBed } from '@angular/core/testing';
import { ExpenseListComponent } from './expense-list';

describe('ExpenseListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExpenseListComponent]
    });
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ExpenseListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
