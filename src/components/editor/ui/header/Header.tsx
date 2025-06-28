import css from "./Header.module.css";
import { DropdownButton } from "./DropDownButton";
import { useContext } from "react";
import { ResumeContext } from "../../../../context/ResumeContext";

const Header = () => {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error("ResumeContext is not provided");
  }

  const { resume, setResume } = context;

  const handleSelect = (block: string) => {
    if (resume[block]) {
      return;
    }
    setResume({
      ...resume,
      [block]: {},
    });
  };

  return (
    <div className={css.header}>
      <h1 className={css.headerTitle}>Редактор резюме</h1>
      <DropdownButton onSelect={handleSelect} />
    </div>
  );
};

export default Header;
