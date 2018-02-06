
function zipList(data1, data2) {
  let i = 0;
  let newList = [];
  while (i < data1.length || i < data2.length) {
    newList[i] = data1[i];
    newList[i + 1] = data2[i];
    i++;
  }
  return newList;
}

function zipListTheSimpleWay(data1, data2) {
  return _.zip(data1, data2);
}


console.log(zipList([1, 2, 3], ['a', 'b', 'c']));
console.log(zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c']));
