require('dotenv').config();
const express = require('express');
const cors = require('cors')

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
	res.send("Hello world");
})

app.listen(PORT, () => {console.log(`server is listening on port http://localhost:${PORT}`)})