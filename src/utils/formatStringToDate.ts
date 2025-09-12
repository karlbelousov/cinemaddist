function formatStringToDate(date: string) {
    return new Date(date).toLocaleString('en-GB', {day: '2-digit', month: 'long', year: 'numeric'});
  }
  
  export default formatStringToDate;