import { Injectable } from "@angular/core";
import { Expense, ExpenseCategory } from "../components/models/expenseModels";

@Injectable
(
    {
  providedIn: "root" 
})
export class ExpenseService 
{
  
  private expensesList: Expense[] = 
  [
    {
      id: 1,
      description: "Alquiler de apartamento",
      amount: 1200000,
      date: new Date(),
      category: ExpenseCategory.Housing
    },
    {
      id: 2,
      description: "Compra de mercado",
      amount: 250000,
      date: new Date(),
      category: ExpenseCategory.Food
    },
    {
      id: 3,
      description: "Transporte público",
      amount: 50000,
      date: new Date(),
      category: ExpenseCategory.Transport
    }
  ];

  getExpensesList(): Expense[] 
  {
    return this.expensesList;
  }
  add(expense: Omit<Expense, "id">): Expense 
  {
    const newExpense: Expense = 
    {
      id: Math.floor(Math.random() * 100000), 
      ...expense
    };
    this.expensesList.push(newExpense);
    return newExpense;
  }

  
  deleteExpense(id: number): void 
  {
    this.expensesList = this.expensesList.filter(e => e.id !== id);
  }
  editExpense(updatedExpense: Expense): void
   {
    const index = this.expensesList.findIndex(e => e.id === updatedExpense.id);
    if (index !== -1) 
        {
      this.expensesList[index] = updatedExpense;
    }
  }
}
