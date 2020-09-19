import procRows from './procRows';

const todayData = (dataArray, date) => {
  if (!dataArray) { return [] }

  const today = dataArray.filter(appt => {
    const ret = sameDay(appt.start, date);
    const ret1 = sameDay(appt.end, date);
    const ret2 = new Date(date).valueOf() > appt.start.valueOf() && new Date(date).valueOf() < appt.end.valueOf()
    console.log(ret, ret1, ret2)
    return ret || ret1 || ret2;
  });
  return procRows(today);
}

const sameDay = (input1, input2) => {
  const d1 = typeof input1 === 'string' ? new Date(input1) : input1
  const d2 = typeof input2 === 'string' ? new Date(input2) : input2

  return d1.getDate() === d2.getDate() &&
  d1.getMonth() === d2.getMonth() &&
  d1.getFullYear() === d2.getFullYear();
}

export default todayData;
