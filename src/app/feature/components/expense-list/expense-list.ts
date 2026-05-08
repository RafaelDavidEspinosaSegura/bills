import { Component } from '@angular/core';
import { NgFor, NgClass, DatePipe, DecimalPipe, NgIf } from '@angular/common';
import { Expense, ExpenseCategory } from '../models/expenseModels';
import { FormsModule } from '@angular/forms';
import { ExpenseAdd } from '../expense-add/expense-add';
import { ExpenseService } from '../../services/expenseService';

@Component
(
  {
  selector: 'app-expense-list',
  standalone: true,
  imports: [NgFor, NgClass, DatePipe, DecimalPipe, ExpenseAdd, FormsModule, NgIf, ],
  templateUrl: './expense-list.html',
  styleUrls: ['./expense-list.css']
})

export class ExpenseList
 {
  showModal = false;
  modalMessage = 'Agrega un nuevo gasto a tu lista';
  selecEdeExpense: Expense| null=null;

  ExpensesList:Expense[]=[];
  constructor(private expenseService:ExpenseService)
  {
    this.ExpensesList= this.expenseService. getExpensesList();
  }

  openModal(): void
   {
    this.showModal = true;
  }
  onExpenseAdded(data: Omit<Expense, 'id'>): void
   {
    const
     newId = Math.max(...this.ExpensesList.map(e => e.id), 0) + 1;
    this.ExpensesList.push({ id: newId, ...data });
    this.showModal = false;
  }

  getCategoryClass(category: ExpenseCategory): string {
    const map: Record<ExpenseCategory, string> = {
      [ExpenseCategory.Housing]: 'cat-housing',
      [ExpenseCategory.Food]: 'cat-food',
      [ExpenseCategory.Entertainment]: 'cat-entertainment',
      [ExpenseCategory.Health]: 'cat-health',
      [ExpenseCategory.Transport]: 'cat-transport',
      [ExpenseCategory.Others]: 'cat-others',
    };
    return map[category] ?? 'cat-others';
  }
  deleteExpense(id: number): void {
  this.ExpensesList = this.ExpensesList.filter(e => e.id !== id);
}

}
