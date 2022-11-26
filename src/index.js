import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Expenses from "./routes/expenses/expenses";
import Invoices from "./routes/invoices/invoices";
import "./index.css";
import App from "./App";
import NoMatch from "./routes/nomatch/Nomatch";
import Invoice from "./components/Invoice/Invoice";
import InvoiceBlank from "./components/Invoice/InvoiceBlank";
import Home from "./routes/home/home";
import Expense from "./components/Expense/Expense";
import ExpenseBlank from "./components/Expense/ExpenseBlank";

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/expenses" element={<Expenses />}>
          <Route index element={<ExpenseBlank />} />
          <Route path=":expenseId" element={<Expense />} />
        </Route>
        <Route path="/invoices" element={<Invoices />}>
          <Route index element={<InvoiceBlank />} />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
