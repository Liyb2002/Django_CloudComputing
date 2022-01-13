COMMENT MICROSERVICE 

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

param:
id=2


3.Get comments by blog_id
GET
https://uwu5f8dejb.execute-api.us-east-1.amazonaws.com/api/commentsdynamo/blog

param:
blog_id=jiayang!


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


6. Delete a comment
DELETE
https://uwu5f8dejb.execute-api.us-east-1.amazonaws.com/api/commentsdynamo
{
  "ID": "74637729-2a07-4a2d-89fa-3fd16da23416",
}




--------------------------------------------------------------



BLOG MICROSERVICE

1.Read all blogs
GET
https://uwu5f8dejb.execute-api.us-east-1.amazonaws.com/api/test

2.post new blog
POST
https://uwu5f8dejb.execute-api.us-east-1.amazonaws.com/api/test

   {
      "title": "first",
      "subtitle": "firstSubtitle!",
      "body": "firstbody",
      "user_id": 12,
      "user_name": "firstusername",
      "tag": "deploy",
    }
  
3.delete one blog
DELETE
https://uwu5f8dejb.execute-api.us-east-1.amazonaws.com/api/test/{id}

4.get one blog
GET
https://uwu5f8dejb.execute-api.us-east-1.amazonaws.com/api/test/{id}

5.update one blog
PUT
https://uwu5f8dejb.execute-api.us-east-1.amazonaws.com/api/test/{id}

   {
      "title": "first",
      "subtitle": "firstSubtitle!",
      "body": "firstbody",
      "user_id": 12,
      "user_name": "firstusername",
      "tag": "deploy",
    }
