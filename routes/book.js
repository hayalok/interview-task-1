var express = require('express');
var router = express.Router();
var models = require('../models');
var book = require('../controllers/book');
// Routes related to actor.
router.get('/', book.getBooks);
router.post('/', book.addBook);
router.put('/:bookId', book.updateBook);
router.delete('/:bookId', book.deleteBook);

module.exports = router;