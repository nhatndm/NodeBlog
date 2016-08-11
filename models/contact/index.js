module.exports = function(app,db){
    app.get('/contactlist',function(req,res){
    console.log("I have Received a request");
    db.contact.find(function(err,docs){
        res.json(docs);
        });
    });
}