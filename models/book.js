'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    id:   {
        type: DataTypes.BIGINT(11),
        autoIncrement: true,
        primaryKey: true
    },
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    isbn: DataTypes.STRING,
    release_date: DataTypes.DATE
  });
  
  return Book;
};