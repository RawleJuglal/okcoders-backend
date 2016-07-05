var mongo = require('mongodb')
var MongoClient = mongo.MongoClient

// Connection URL
// localhost = ip
// 27017 is the port
// enron is the database
// make sure your mongod is running
var url = 'mongodb://localhost:27017/enron'

var findEarliest = function(db, callback){
  var cursor = db.collection('emails').find({},{date:true}).sort({date:1}).limit(1);
  cursor.each(function(err, docs){
    if (docs != null) {
         console.dir(docs.date);
      } else {
         callback();
      }
  });
}

var findLatest = function(db, callback){
  var cursor = db.collection('emails').find({},{date:true}).sort({date:-1}).limit(1);
  cursor.each(function(err, docs){
    if (docs != null) {
         console.dir(docs.date);
      } else {
         callback();
      }
  });
}

var findKeyword = function(db, callback){
  var cursor = db.collection('emails').find({text:/money/i}).limit(1);
  cursor.each(function(err, docs){
    if(docs != null){
      console.dir(docs);
    }else{
      callback();
    }
  });
}

var findMostEmails = function(db, callback){
  var senders = db.collection('emails').aggregate([{$group: {"sender": "rosalee.fleming@enron.com", "count": {$sum:1}}}]).toArray(function(err,results){
    console.log(senders);
    console.log(results);
    callback(results);
  })
  /*senders.each(function(err, docs){
    if(docs != null)
      {
        console.dir(docs);
      } else {
        callback();
      }
  });*/
}

MongoClient.connect(url, function(err, db) {
  if (err) { console.log("error!") }
  else
    {
      findMostEmails(db, function() {
          db.close();
      });
    }

 /*
 FIND AND LOG ALL DOCUMENTS IN COLLECTION
 var collection = db.collection('emails')
  collection.find({}).toArray(function(err, docs) {
    console.log(docs[0])
    db.close()
  });*/
  
 /*
 COUNT ANSWER
 var collection = db.collection('emails');
  collection.count(function(err, count){
    if(err)
      {
        console.log(err);
      }
    else
      {
        console.log(count);
          db.close()
      }
  });*/
})


//1. how many emails are there? db.emails.count()
//2. what is the earliest email (in terms of date) db.emails.find({}, {date:true}).sort({date: 1}).limit(1).pretty()
//3. what is the latest email? db.emails.find({}, {date:true}).sort({date: -1}).limit(1).pretty()
//4. do any emails contain the word "money" in their text? db.emails.find({text:/money/i}).limit(1).pretty()
//4. what sender sent the most emails? db.emails.find
