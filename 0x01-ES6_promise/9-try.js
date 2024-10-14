#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function guardrail(mathFunction) {
    const queue = [];
    let value;
  
    try {
      value = mathFunction();
    } catch (err) {
      value = err.toString();
    }
  
    queue.push(value);
    queue.push('Guardrail was processed');
  
    return queue;
  }

