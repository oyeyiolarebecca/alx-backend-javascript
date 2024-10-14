#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function divideFunction(numerator, denominator) {
    if (denominator === 0) throw Error('cannot divide by 0');
  
    return numerator / denominator;
  }
