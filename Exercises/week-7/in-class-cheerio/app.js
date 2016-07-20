var request = require('request');
var cheerio = require('cheerio');
var _ = require('lodash');

var url = 'http://pitchfork.com/reviews/best/albums/',
page = 1,
options = {
    url:url,
    method:'GET',
    qs:{
        page:page
    }
};

function getCallback( err, res, body){
    if(err)
        {
            console.log('Error: ', err);
        }
    else
        {
           if(res.statusCode !== 200)
                {
                    console.log('can\'t parse', res.statusCode);
                }
            else
                {
                   startParsing(body) 
                }
        }
}

function startParsing (html){
    var $ = cheerio.load(html);
   //console.log('cheerio loaded: ', $.html())
   getReviews($);
}

function getReviews(html){
   var reviewContainer = html('div.fragment-list');
   var reviews = reviewContainer.find('div.review');
   //console.log('reviews', reviews);
   parseReviews(reviews);
}

function parseReviews(reviews){
   var parsedReviews = _.map(reviews, review=>{
        var parsedAnchor = parseAnchor(review.children[0]);
        //console.log(parsedAnchor);
        var parsedMeta = parseMeta(review.children[1]);
        return _.merge({}, parsedAnchor, parsedMeta);
    });
    console.log(parsedReviews);
}

function parseAnchor(anchor){
    //console.log('anchor', anchor);
    var albumArtist = anchor.children[1];
    var artist = albumArtist.children[0].children[0].children[0].data;
    var album = albumArtist.children[1].children[0].data;
    return {artist:artist, album:album};
}

function parseMeta(meta){
    var genre = meta.children[0].children[0].children[0].children[0].data;
    return {genre:genre};
}

request(options, getCallback);
