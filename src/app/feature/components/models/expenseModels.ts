export enum ExpenseCategory
 {
  Housing = 'Housing',
  Food = 'Food',
  Entertainment = 'Entertainment',
  Health = 'Health',
  Transport = 'Transport',
  Others = 'Others'
}
export interface Expense 
{
  id: number;
  description: string;
  amount: number;
  date: Date;
  category: ExpenseCategory;
}
