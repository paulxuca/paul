'use nodent';
const storage = require('@google-cloud/storage');
const path = require('path');
const config = require('../secret/dianebox.json');

const storageClient = storage({
  projectId: config.project_id,
  keyFilename: config,
});

const storageBucket = storageClient.bucket('dianebox');
const createDomain = (domainName) => new Promise((res, rej) => {
  storageClient.createBucket(domainName, (err, bucket) => {
    if (err) rej(err);
    res(bucket);
  });
});

module.exports = {
  createDomain,
};

