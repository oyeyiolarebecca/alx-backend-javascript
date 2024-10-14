#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function loadBalancer(chinaDownload, USDownload) {
    return Promise.race([chinaDownload, USDownload]);
  }
