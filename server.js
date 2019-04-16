const express = require('express');
const path = require('path')
const app = express();
const PORT = 3001;

/*app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});*/

app.use(express.static("public"));

app.listen(PORT, () => {
	console.log(`listening on ${PORT}!`);
});

//Left off without fully setting up react - Able to get html, but not css - Session 19.2 - Video stopped @1:46:01
