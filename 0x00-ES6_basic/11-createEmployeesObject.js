#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
