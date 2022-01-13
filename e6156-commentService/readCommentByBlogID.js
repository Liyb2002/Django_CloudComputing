// Loads in the AWS SDK
const AWS = require('aws-sdk');

// Creates the document client specifing the region 
// The tutorial's table is 'in us-east-1'
const ddb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

exports.handler = async(event, context, callback) => {
    // Handle promise fulfilled/rejected states
    const requestId = event.blog_id;

    await readMessage(requestId).then(data => {
        data.Items.forEach(function(item) {
            console.log(item.message)
        });
        callback(null, {
            // If success return 200, and items
            statusCode: 200,
            body: data.Items,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
    }).catch((err) => {
        // If an error occurs write to the console
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

// Function readMessage
// Reads 10 messages from the DynamoDb table Message
// Returns promise
function readMessage(requestId) {
    const params = {
        TableName: 'commentsT1',
        FilterExpression: "#blog = :blogId",
        ExpressionAttributeNames: {
            "#blog": "blog_id"
        },
        ExpressionAttributeValues: {
            ":blogId": requestId
        },
    }
    return ddb.scan(params).promise();
}