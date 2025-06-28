import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import css from "./Preview.module.css";

const Preview = () => {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error("ResumeContext is not provided");
  }

  const { resume } = context;

  if (!resume || Object.keys(resume).length === 0) {
    return <div className={css.empty}>Резюме пока пустое</div>;
  }

  const renderSectionContent = (
    sectionKey: string,
    data: Record<string, string>
  ) => {
    switch (sectionKey) {
      case "Опыт":
        return (
          <>
            <div>
              <strong>Должность:</strong> {data.position}
            </div>
            <div>
              <strong>Компания:</strong> {data.company}
            </div>
            <div>
              <strong>Период:</strong> {data.period}
            </div>
            <div>
              <strong>Описание:</strong> {data.description}
            </div>
          </>
        );
      case "Образование":
        return (
          <>
            <div>
              <strong>Учебное заведение:</strong> {data.institution}
            </div>
            <div>
              <strong>Специальность:</strong> {data.specialty}
            </div>
            <div>
              <strong>Период:</strong> {data.period}
            </div>
          </>
        );
      case "Навыки":
        return (
          <div>
            <strong>Навыки:</strong> {data.skills}
          </div>
        );
      case "О себе":
        return <div>{data.about}</div>;
      case "Сертификаты":
        return <div>{data.certificates}</div>;
      default:
        return null;
    }
  };

  return (
    <div className={css.previewWrapper}>
      {Object.entries(resume).map(([sectionKey, data]) => (
        <section key={sectionKey} className={css.section}>
          <h3 className={css.sectionTitle}>{sectionKey}</h3>
          <div className={css.sectionContent}>
            {renderSectionContent(sectionKey, data)}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Preview;
