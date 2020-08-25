# interview task
4 apis are there

1. get /book/

purpose - get all books present in the database.

response - json data containing books data

2. post /book/

purpose - add book to database

body parameters:
author - "author content"
title - "title content"
isbn - "isbn content"
release_date - "date data"

response - success

3. put /book/:BookId

purpose - Updates fields for book id

body parameter:
author - "author content"
title - "title content"
isbn - "isbn content"
release_date - "date data"

response - success

4. delete /book/:BookId

purpose - delete book

response -  success
