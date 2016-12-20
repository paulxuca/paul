'use nodent';
const storage = require('@google-cloud/storage');
const config = require('./config');
const path = require('path');


const storageClient = storage({
  projectId: 'dianebox-153022',
  keyFilename: path.resolve(process.cwd(), 'secret', 'dianebox.json'),
});

const storageBucket = storageClient.bucket('dianebox');
