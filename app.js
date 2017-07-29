var app = require('express')();
var request = require('request');

var port = process.env.PORT || 5000;

app.get('/events',function(req,res){

request({
    method: 'GET',
    uri: 'https://graph.facebook.com/search?q=Singapore,workshop&type=event',
    headers: {
        'Authorization':'Bearer EAAFaZAGdzZBNkBAEVUVUx1IML0ki3AcNvK37n5PhBbzoAZCIVjOEr38xgfJFZAib38S2pEgBKn5XSQWN7ZCUh16948vCw9M2yYA19OhoWF1WxZCQ8Rb3E7D8KcJFQleH2U6v3AjWB4hzcdKiKuYiEOOZCF3ZBUgjz9HH9M91LbOBbwZDZD'
    }
  },
  function (error, response, body) {
    if (error) {
       res.status(500).send(error);
    }else{
        console.log(JSON.stringify(response));
        res.status(200).send(body.data);
        }
           //  console.log('Upload successful!  Server responded with:', body);
  })

});



app.listen(port,function(err){
console.log("Server listening on 5000");
});
