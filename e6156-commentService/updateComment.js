// Loads in the AWS SDK
const AWS = require('aws-sdk');

// Creates the document client specifying the region 
// The tutorial's table is 'in us-east-1'
const ddb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

exports.handler = async(event, context, callback) => {
    // Captures the requestId from the context message

    // Handle promise fulfilled/rejected states
    await updateComment(event).then(data => {
        data.Items.forEach(function(item) {
            console.log(item.message)
        });

        callback(null, {
            statusCode: 200,
            body: data.Items,
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
function updateComment(event) {
    const params = {
        TableName: 'commentsT1',
        ConditionExpression: 'attribute_exists(ID)',
        Key: {
            'ID': event.ID,
        },
        UpdateExpression: "set comment = :c",
        ExpressionAttributeValues: {
            ":c": event.comment,
        },
        ReturnValues: "UPDATED_NEW"
    }
    return ddb.update(params).promise();
}