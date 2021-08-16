import express from 'express'

const app = express();
const port = 3000;

app.set('views', './src/templates');
app.set('view engine', 'pug');

app.get("/bookstore", function (req, res) {
  var bookStore = [
    {
      title: "Templating with Pug",
      author: "Winston Smith",
      pages: 143,
      year: 2017
    },
    {
      title: "Node.js will help",
      author: "Guy Fake",
      pages: 879,
      year: 2015
    }
  ];

  res.render("index", {
    bookStore: bookStore,
  });
});

app.get("/bookstore1", function (req, res) {
  var bookStore = [
    {
      title: "Templating with Pug",
      author: "Winston Smith",
      pages: 143,
      year: 2017
    },
    {
      title: "Node.js will help",
      author: "Guy Fake",
      pages: 879,
      year: 2015
    }
  ];

  res.render("index", {
    bookStore: bookStore,
  });
});

app.get("/bookstore2", function (req, res) {
  var bookStore = [
    {
      title: "Templating with Pug",
      author: "Winston Smith",
      pages: 143,
      year: 2017
    },
    {
      title: "Node.js will help",
      author: "Guy Fake",
      pages: 879,
      year: 2015
    },
    {
      title: "React.js is awesome",
      author: "Facebook team",
      pages: 1666,
      year: 2014,
      popup: "Is it popup message?"
    }
  ];

  res.render("index", {
    bookStore: bookStore,
  });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
