'use strict'

const bookshelf = require('../db/bookshelf')

const Monster = bookshelf.Model.extend(
  {
    tableName: 'monsters'
  }
)
