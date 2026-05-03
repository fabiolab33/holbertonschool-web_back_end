export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,

    getNumberOfDepartments(report) {
      return Object.keys(report).length;
    },
  };
}
