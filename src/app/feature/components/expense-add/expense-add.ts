import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Expense, ExpenseCategory } from '../../models/expenseModels';

@Component({
  selector: 'app-expense-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './expense-add.html',
  styleUrls: ['./expense-add.css']
})
export class ExpenseAdd {
  @Output() expenseAdded = new EventEmitter<Omit<Expense, 'id'>>();
  @Output() closed = new EventEmitter<void>();
  @Input() message: string = '';
   ExpenseCategory = ExpenseCategory;

  description: string = '';
  amount: number = 0;
  date: Date = new Date();
  category: ExpenseCategory = ExpenseCategory.Others;

  addExpense(): void {
    if (this.description && this.amount > 0) {
      this.expenseAdded.emit({
        description: this.description,
        amount: this.amount,
        date: this.date,
        category: this.category
      });
      this.resetForm();
    }
  }

  close(): void {
    this.closed.emit();
  }
  private resetForm(): void {
    this.description = '';
    this.amount = 0;
    this.date = new Date();
    this.category = ExpenseCategory.Others;
  }
}
