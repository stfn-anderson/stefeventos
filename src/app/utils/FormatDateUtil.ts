export function formatDate(dateString: string) {
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) return dateString;

  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    let [year, month, day] = dateString.split("-");

    return `${day}/${month}/${year}`;
  }

  return "Formato de data inválido";
}
