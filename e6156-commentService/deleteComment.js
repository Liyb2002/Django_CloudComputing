// Loads in the AWS SDK
const AWS = require('aws-sdk');

// Creates the document client specifying the region 
// The tutorial's table is 'in us-east-1'
const ddb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

exports.handler = async(event, context, callback) => {
    // Captures the requestId from the context message
    const requestId = event.ID;

    // Handle promise fulfilled/rejected states
    await deleteMessage(requestId).then(() => {
        callback(null, {
            statusCode: 204,
            body: '',
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

// Function deleteMessage
// Delete message from DynamoDb table Message 
function deleteMessage(requestId) {
    const params = {
        TableName: 'commentsT1',
        ConditionExpression: 'attribute_exists(ID)',
        Key: {
            'ID': requestId,
        },
    }
    return ddb.delete(params).promise();
}