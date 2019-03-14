const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const router = express.Router();
const product = require("./Models/mydata.js");

let port = process.env.port || 3000;

const app = express();

app.use(cors());
app.use(bodyparser.json());
mongoose
  .connect(
    "mongodb+srv://admin:007@cluster0-rafph.azure.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log(" connection successfull");
  })
  .catch(err => {
    console.log("not succesfull", err);
  });
app.get("/", (req, res) => {
  res.json({ status: "Success" });
});

app.post("/add", (req, res) => {
  //const issue=new Issue(req.body);
  const title = req.body.title;
  const description = req.body.description;
  const costprice = req.body.costprice;
  const sellingprice = req.body.sellingprice;

  const newproduct = new product({
    title: title,
    description: description,
    costprice: costprice,
    sellingprice: sellingprice
  });
  newproduct
    .save()
    .then(() => {
      res.json({ Operation: "Successful" });
      console.log("succesfully added");
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/allproducts", (req, res) => {
  product
    .find()
    .then(products => {
      res.json(products);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/getproductById/:id", (req, res) => {
  let id = req.params.id;
  product
    .findById(id)
    .then(p => {
      res.json(p);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/deleteproduct/:id", (req, res) => {
  let id = req.params.id;
  product
    .findById(id)
    .then(products => {
      products
        .delete()
        .then(() => {
          res.json({ Operation: "Succesfully Deleted" });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(() => {
      console.log("ID not found");
    });
});

app.listen(port, () => console.log("server is running on port "+port));
