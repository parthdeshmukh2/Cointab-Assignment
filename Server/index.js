const express = require("express");
const cors = require("cors");
// const axios = require('axios');
const fetch = require("node-fetch");
const connection = require("./Config/db.js");
const ProjectModel = require("./Models/project.model.js");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/getall", async (req, res) => {
  const result = await fetch("https://randomuser.me/api/?results=100");
  const body = await result.json();

  let data = [];
  data.push(body);

  const params = new ProjectModel({ Data: data[0].results });
  await params.save();
  res.send(params.Data);
});

app.get('/', async(req, res)=>{
    const result = await ProjectModel.find({});
    res.send(result);
})

app.delete('/delete', async(req, res)=>{
    const result = await ProjectModel.remove();
    res.send("Data Removed");
})

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
});
