#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function* createIteratorObject(report) {
    const { allEmployees } = report;
  
    for (const department of Object.values(allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }
