#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    const self = this;
    this.addNeighborhood = (newNeighborhood) => {
      self.sanFranciscoNeighborhoods.push(newNeighborhood);
      return self.sanFranciscoNeighborhoods;
    };
  }
  