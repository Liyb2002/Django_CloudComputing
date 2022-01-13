// Loads in the AWS SDK
const AWS = require('aws-sdk');

// Creates the document client specifying the region 
// The tutorial's table is 'in us-east-1'
const ddb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

exports.handler = async(event, context, callback) => {
    // Captures the requestId from the context message
    const requestId = context.awsRequestId;

    // Handle promise fulfilled/rejected states
    await createMessage(requestId, event).then(data => {
        callback(null, {
            statusCode: 201,
            body: data,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    }).catch((err) => {
        console.error(err);
        callback(null, {
            statusCode: 400,
            body: '',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    })
};

// Function createMessage
// Writes message to DynamoDb table Message 
function createMessage(requestId, event) {
    const params = {
        TableName: 'commentsT1',
        ConditionExpression: 'attribute_not_exists(ID)',
        Item: {
            'ID': requestId,
            'comment': event.comment,
            'blog_id': event.blog_id,
            'user_name': event.user_name,
            'user_id': event.user_id,
            'responses': []
        }
    }
    return ddb.put(params).promise();
}