import React from "react";
import { categories } from "../categories";

interface Props {
  selectCategory: (category: string) => void;
}

const ExpenseFilter = ({ selectCategory }: Props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(e) => selectCategory(e.target.value)}
      >
        <option value="">All Category</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
