exports.handler = function(event, context, callback) {
    //console.log(event);
    //callback(null, {"message": "Successfully executed"});
    console.log(JSON.stringify(event, null, 2));
    callback(null, event);
}