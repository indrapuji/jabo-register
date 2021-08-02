const arrPrint = (newData) => {
  let result = [];
  for (let i = 0; i < newData.length; i++) {
    result.push(newData[i].id);
  }
  return result;
};

const arrNew = (newData) => {
  let temp = '';
  let result = [];
  for (let i = 0; i < newData.length; i++) {
    if (newData[i] !== ',') {
      temp = temp + newData[i];
    } else if (newData[i] === ',') {
      result.push(temp);
      temp = '';
    }
  }
  result.push(temp);
  return result;
};

export { arrPrint, arrNew };
