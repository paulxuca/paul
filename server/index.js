const express = require('express');
const app = express();


app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  console.log('Server on 3000');
})