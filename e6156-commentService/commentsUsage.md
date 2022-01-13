1.Create Comment
POST
https://uwu5f8dejb.execute-api.us-east-1.amazonaws.com/api/commentsdynamo
{
  "comment": "xinhao!",
  "blog_id": "blog_id",
  "user_name": "user_name",
  "user_id": "user_id",
}


2.Read All Comments
GET
https://uwu5f8dejb.execute-api.us-east-1.amazonaws.com/api/commentsdynamo


3.Get a single comment
GET
https://uwu5f8dejb.execute-api.us-east-1.amazonaws.com/api/commentsdynamo/byID
{
  "ID": "74637729-2a07-4a2d-89fa-3fd16da23416"
}


3.Get comments by blog_id
GET
https://uwu5f8dejb.execute-api.us-east-1.amazonaws.com/api/commentsdynamo/byBlogID
{
  "blog_id": "blog_id"
}


5.Post a response to a comment
POST
https://uwu5f8dejb.execute-api.us-east-1.amazonaws.com/api/commentsdynamo/response
{
  "ID": "74637729-2a07-4a2d-89fa-3fd16da23416",
  "responseBody": "eeee",
  "responseName": "ljhl!",
  "responseemail": "ybwww@gmail",
  "responseID": "12"
}

6. Update a comment
POST
https://uwu5f8dejb.execute-api.us-east-1.amazonaws.com/api/commentsdynamo/byID
{
  "ID": "74637729-2a07-4a2d-89fa-3fd16da23416",
  "comment": "test",
}

7. Delete a comment
DELETE
https://uwu5f8dejb.execute-api.us-east-1.amazonaws.com/api/commentsdynamo/byID
{
  "ID": "74637729-2a07-4a2d-89fa-3fd16da23416",
}