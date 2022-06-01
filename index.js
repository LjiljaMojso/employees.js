//solution try
async function getDataSalaries() {
  const response = await fetch("../fake-server/salaries.json");
  const response2 = await fetch("../fake-server/employees.json");
  const data = await response.json();
  const data2 = await response2.json();

  employeesWithSalaries(data, data2);
}
getDataSalaries()
  .then((response) => console.log("corect data"))
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
  temp.sort((a, b) => a?.salary - b?.salary);
  console.log(temp);
  return temp;
};
module.exports = getDataSalaries;
