import React, { useState } from "react";
import css from "./DropDownButton.module.css";

const blocks = ["Опыт", "О себе", "Навыки", "Образование"];

interface DropdownButtonProps {
  onSelect: (block: string) => void;
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({ onSelect }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleSelect = (block: string) => {
    onSelect(block);
    setOpen(false);
  };

  return (
    <div className={css["dropdown-button"]}>
      <button
        className={css["dropdown-button__toggle"]}
        onClick={toggleDropdown}
      >
        Добавить блок
      </button>
      {open && (
        <ul className={css["dropdown-button__menu"]}>
          {blocks.map((block) => (
            <li
              key={block}
              className={css["dropdown-button__item"]}
              onClick={() => handleSelect(block)}
              tabIndex={0}
              role="button"
              aria-label={`Добавить блок ${block}`}
            >
              {block}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
