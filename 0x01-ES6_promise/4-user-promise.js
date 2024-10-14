#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function signUpUser(firstName, lastName) {
    return new Promise((resolve, reject) => {
      resolve({
        firstName: firstName,
        lastName: lastName
      });
    });
  }
