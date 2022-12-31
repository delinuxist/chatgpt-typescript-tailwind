const express = require("express");
const morgan = require("morgan");
const openai = require("./config/openai.config");
const cors = require("cors")


const app = express();
const port = 4000;

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.post('/',async (req,res)=> {
  const {message} = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 100,
    temperature: 0.5,
  });
  res.json({
    message: response.data.choices[0].text,
  })
})

const start = async () => {
  app.listen(port,()=> {
    console.log(`Server running on port ${port}`)
  })
}

start();