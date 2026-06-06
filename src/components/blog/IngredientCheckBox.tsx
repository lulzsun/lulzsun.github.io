import { useState } from "react";

interface Props {
  children?: React.ReactNode;
}

export const IngredientCheckBox: React.FC<Props> = ({ children }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="label text-base-content cursor-pointer gap-2">
      <input type="checkbox" className="checkbox" checked={checked} onChange={() => setChecked((c) => !c)} />
      <span className={checked ? "line-through opacity-50" : ""}>{children}</span>
    </label>
  );
};
