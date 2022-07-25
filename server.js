require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const method = require("method-override");
const app = express();
const PORT = process.env.PORT || 3001;
const Adventure = require("./models/Adventure");

// === CONNECTION TO DATABASE ===
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => console.log("Connected to Mongo"));

// === SET UP VIEW ENGINE ===
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// === SET UP MIDDLEWARE ===
app.use(method("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// PARSING JSON
app.use(express.json());
app.use((req, res, next) => {
  console.log("I run for all the routes.");
  next();
});

// INDEX
app.get("/adventures", (req, res) => {
  Adventure.find({}, (err, allAdventures) => {
    res.render("Index", { adventures: allAdventures });
  });
});

// NEW

app.get("/adventures/new", (req, res) => {
  res.render("New");
});

// DELETE
app.delete("/adventures/:id", (req, res) => {
  Adventure.findByIdAndDelete(req.params.id, (err) => {
    if (!err) {
      res.status(200).redirect("/adventures");
    } else {
      res.status(400).json(err);
    }
  });
});

// UPDATE
app.put("/adventures/:id", (req, res) => {
  Adventure.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedAdventure) => {
      if (!err) {
        res.status(200).redirect("/adventures");
      } else {
        res.status(400).json(err);
      }
    }
  );
});

// CREATE
app.post("/adventures", (req, res) => {
  Adventure.create(req.body, (err, createdAdventure) => {
    res.redirect("/adventures");
  });
});

// EDIT
app.get("/adventures/:id/edit", (req, res) => {
  Adventure.findById(req.params.id, (err, foundAdventure) => {
    if (!err) {
      res.render("Edit", { adventure: foundAdventure });
    } else {
      res.status.apply(400).json(err);
    }
  });
});

// SHOW

app.get("/adventures/:id", (req, res) => {
  Adventure.findById(req.params.id, (err, foundAdventure) => {
    res.render("Show", { adventure: foundAdventure });
  });
});

// ABOUT PAGE
app.get("/about", (req, res) => {
  res.render("About");
});

// CONTACT PAGE
app.get("/contact-page", (req, res) => {
  res.render("Contact");
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
