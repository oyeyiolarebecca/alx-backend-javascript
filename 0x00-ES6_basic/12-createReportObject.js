#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function createReportObject(employeesList) {
    return {
      allEmployees: {
        ...employeesList,
      },
      getNumberOfDepartments() {
        return Object.keys(employeesList).length; // Return the number of department keys
      },
    };
  }
