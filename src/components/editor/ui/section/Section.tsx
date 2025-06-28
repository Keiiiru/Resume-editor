export function renderSectionFields(
  sectionKey: string,
  data: Record<string, string>
) {
  switch (sectionKey) {
    case "Опыт":
      return (
        <>
          <div>Должность: {data.position || "-"}</div>
          <div>Компания: {data.company || "-"}</div>
          <div>Период: {data.period || "-"}</div>
          <div>Описание: {data.description || "-"}</div>
        </>
      );
    case "Навыки":
      return <div>Навыки: {data.skills || "-"}</div>;
    case "Образование":
      return (
        <>
          <div>Учебное заведение: {data.institution || "-"}</div>
          <div>Специальность: {data.specialty || "-"}</div>
          <div>Период: {data.period || "-"}</div>
        </>
      );
    case "Сертификаты":
      return (
        <>
          <div>Название сертификата: {data.certificateName || "-"}</div>
          <div>Организация: {data.issuer || "-"}</div>
          <div>Дата получения: {data.date || "-"}</div>
        </>
      );
    case "О себе":
      return <div>{data.description || "-"}</div>;
    default:
      return null;
  }
}
