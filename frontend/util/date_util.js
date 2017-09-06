export const formatDate = (date) => {
  let newDate = new Date(date);
  let aFormat = Math.floor((new Date() - newDate) / 1000);

  const times = [2592000, 172800, 86400, 3600, 60];
  const periods = [
    'MONTHS AGO',
    'DAYS AGO',
    'YESTERDAY',
    'HOURS AGO',
    'MINUTES AGO',
    'MOMENTS AGO'
  ];

  for (var i = 0; i < times.length; i++) {
    let era = Math.floor(aFormat / times[i]);
    if (era >= 1 && periods[i] === 'YESTERDAY') {
      return periods[i];
    } else if (era > 1) {
      return `${era} ${periods[i]}`;
    }
  }

  return 'MOMENTS AGO';

};
