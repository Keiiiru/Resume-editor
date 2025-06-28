import React, { useState } from "react";

interface SectionEditFormProps {
  sectionKey: string;
  initialData: Record<string, string>;
  onClose: () => void;
  onSave: (data: Record<string, string>) => void;
}

interface SectionField {
  name: string;
  label: string;
}

type SectionKey = "Опыт" | "Навыки" | "Образование" | "Сертификаты" | "О себе";

const sectionsConfig: Record<SectionKey, SectionField[]> = {
  Опыт: [
    { name: "position", label: "Должность" },
    { name: "company", label: "Компания" },
    { name: "period", label: "Период" },
    { name: "description", label: "Описание" },
  ],
  Навыки: [{ name: "skills", label: "Навыки" }],
  Образование: [
    { name: "institution", label: "Учебное заведение" },
    { name: "specialty", label: "Специальность" },
    { name: "period", label: "Период" },
  ],
  Сертификаты: [
    { name: "certificateName", label: "Название сертификата" },
    { name: "issuer", label: "Организация" },
    { name: "date", label: "Дата получения" },
  ],
  "О себе": [{ name: "description", label: "О себе" }],
};

export const SectionEditForm: React.FC<SectionEditFormProps> = ({
  sectionKey,
  initialData,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState(initialData);

  const fields = sectionsConfig[sectionKey as SectionKey] || [];

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Редактирование: {sectionKey}</h2>
      {fields.map(({ name, label }: { name: string; label: string }) => (
        <div key={name}>
          <label>{label}</label>
          <input
            type="text"
            value={formData[name] || ""}
            onChange={(e) => handleChange(name, e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </div>
      ))}
      <button type="submit">Сохранить</button>
      <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>
        Отмена
      </button>
    </form>
  );
};
