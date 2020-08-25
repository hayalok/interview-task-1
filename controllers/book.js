var models = require('../models');

var getBooks =  function (req, res) {    
  
  models.Book.findAll({
        
  }).then(function (data) {
    res.send(data);
  });
    
  

};

var addBook =  function (req, res) {
    console.log("check 2");
    console.log(req.body.name);

    if (req.body.author == undefined || req.body.title == undefined || req.body.isbn == undefined){
      return res.status(500).json({
        message: "Author, Title and isbn are mandatory"
      })
    }else{
      let createData = {};
      if (req.body.author != undefined){
        createData["author"] = req.body.author;
      }
      if (req.body.title != undefined){
        createData["title"] = req.body.title;
      }
      if (req.body.isbn != undefined){
        createData["isbn"] = req.body.isbn;
      }
      if (req.body.release_date != undefined){
        createData["release_date"] = req.body.release_date;
      }
    
    //updateData[req.body.name] = req.body.value;
      models.Book.create(createData).then(function (data){
        res.send("success");
      });




      // models.Book.create({
      //   author: req.body.author,
      //   title: req.body.title,
      //   isbn: req.body.isbn,
      //   release_date: req.body.release_date    
      // }).then(function (data) {
      //   res.send("success");
      // });
    }
    


};

var updateBook =  function (req, res) {


  models.Book.find({
    where: {
        id: req.params.bookId
    }
  }).then((book) => {
    if (!book) {
        return res.status(404).json({
            message: "Book inexistant"
        })
    }
    let updateData = {};
    if (req.body.author != undefined){
      updateData["author"] = req.body.author;
    }
    if (req.body.title != undefined){
      updateData["title"] = req.body.title;
    }
    if (req.body.isbn != undefined){
      updateData["isbn"] = req.body.isbn;
    }
    if (req.body.release_date != undefined){
      updateData["release_date"] = req.body.release_date;
    }
    
    //updateData[req.body.name] = req.body.value;
    book.update(updateData).then(function (data){
      res.send("success");
    });
      
    
  });
  
}

var deleteBook =  function (req, res) {
   

  models.Book.destroy({
    where: {
      id: req.params.bookId
    }
  }).then(function (data) {
    res.send("success");
  });
  
}
module.exports = {
    getBooks: getBooks,
    addBook: addBook,
    updateBook: updateBook,
    deleteBook: deleteBook
};
