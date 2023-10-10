import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "abc", amount: 12, category: "Utilities" },
    { id: 2, description: "ccc", amount: 12, category: "Utilities" },
  ]);

  const [selectCategory, setSelectCategory] = useState("");
  const visibleExpense = selectCategory
    ? expenses.filter((c) => c.category === selectCategory)
    : expenses;
  return (
    <>
      <div>
        <div className="mb-5">
          <ExpenseForm
            onSubmit={(expense) =>
              setExpenses([
                ...expenses,
                { ...expense, id: expenses.length + 1 },
              ])
            }
          />
        </div>
        <div className="mb-3">
          <ExpenseFilter
            selectCategory={(category) => setSelectCategory(category)}
          />
        </div>
        <ExpenseList
          expenses={visibleExpense}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
}

export default App;
