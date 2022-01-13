// Loads in the AWS SDK
const AWS = require('aws-sdk');

// Creates the document client specifing the region 
// The tutorial's table is 'in us-east-1'
const ddb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

exports.handler = async(event, context, callback) => {
    // Handle promise fulfilled/rejected states
    const params = {
        TableName: "commentsT1",
        Key: {
            "ID": event.ID
        },
        ConditionExpression: 'contains(responses, :responses_obj)',
        UpdateExpression: 'set responses = list_append(responses, :responses_obj)',
        ExpressionAttributeValues: {
            ":responses_obj": [{
                'myObject': {
                    'Body': event.responseBody,
                    'Name': event.responseName,
                    'ID': event.responseID,
                    'Time': Date.now()
                }
            }]
        }

    };

    return ddb.update(params).promise();

};