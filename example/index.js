const express = require('express');

const app = express();

app.get("/a", (req, res) => {
  res.status(200).json({
    hello: "dog",
  });
});


app.listen(4100, () => {
  console.log("listen in http://127.0.0.1:4100");
});
