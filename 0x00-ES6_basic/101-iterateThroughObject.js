#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function iterateThroughObject(reportWithIterator) {
  const employeesArray = [...reportWithIterator];

  return employeesArray.join(' | ');
}
