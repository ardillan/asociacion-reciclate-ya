export const renderText = (text) => {
  return text.replace(/&nbsp;/g, "\u00a0");
};

export const formatDate = (dateTime, type) => {
  let date;
  switch (type) {
    case "Readable":
      date = new Date(dateTime).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      break;
    case "DD/MM/YYYY":
      date = new Date(dateTime).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
      break;
    case "DD/MM/YYYY:HH/MM":
      date = new Date(dateTime).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
      break;
    default:
      date = new Date(dateTime).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
  }

  return date;
};
