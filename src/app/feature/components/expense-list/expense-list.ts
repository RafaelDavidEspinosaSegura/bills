import { Component } from '@angular/core';
import { NgFor, NgClass, DatePipe, DecimalPipe } from '@angular/common';
import { Expense, ExpenseCategory } from '../../models/expenseModels';
import { ExpenseAdd } from '../expense-add/expense-add';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [NgFor, NgClass, DatePipe, DecimalPipe, ExpenseAdd],
  templateUrl: './expense-list.html',
  styleUrls: ['./expense-list.css']
})
export class ExpenseList {
  showModal = false;
  modalMessage = 'Agrega un nuevo gasto a tu lista';

  expensesList: Expense[] = [
    {
      id: 1,
      description: 'Alquiler de apartamento',
      amount: 1200000,
      date: new Date(),
      category: ExpenseCategory.Housing
    },
    {
      id: 2,
      description: 'Compra de mercado',
      amount: 250000,
      date: new Date(),
      category: ExpenseCategory.Food
    },
    {
      id: 3,
      description: 'Transporte público',
      amount: 50000,
      date: new Date(),
      category: ExpenseCategory.Transport
    }
  ];

  openModal(): void {
    this.showModal = true;
  }

  // Agregar gasto desde el hijo
  onExpenseAdded(data: Omit<Expense, 'id'>): void {
    const newId = Math.max(...this.expensesList.map(e => e.id), 0) + 1;
    this.expensesList.push({ id: newId, ...data });
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
}
