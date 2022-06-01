//solution try
async function getDataSalaries(path, path2) {
  const response = await fetch(`${path}`);
  const response2 = await fetch(`${path2}`);
  const data = await response.json();
  const data2 = await response2.json();
  return employeesWithSalaries(data, data2);
}
getDataSalaries("./fake-server/salaries.json", "./fake-server/employees.json")
  .then((data) => {
    data.sort((a, b) => a?.salary - b?.salary);
    console.log(data);
  })
  .catch((err) => console.log("error"));
const employeesWithSalaries = (arr1, arr2) => {
  let temp = [];

  arr1.forEach((x) => {
    arr2.forEach((y) => {
      if (x.employeeId === y.id) {
        temp.push({ ...x, ...y });
      }
    });
  });
  return temp;
};

module.exports = getDataSalaries;
