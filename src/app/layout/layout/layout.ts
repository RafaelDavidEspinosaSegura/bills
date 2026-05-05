import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar";
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';
import { ExpenseList } from "../../feature/components/expense-list/expense-list";

@Component({
  selector: 'app-layout',
  imports: [Header, Sidebar, Footer, RouterOutlet, ExpenseList],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
