const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  export function formatDate(date: any) {
    return new Date(date).toLocaleDateString("pt-BR", options as any);
  }
  
  export function formatHour(date: Date) {
    const hour = date.getHours() <= 10 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() <= 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${hour}:${minutes}`;
  }