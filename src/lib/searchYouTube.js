var searchYouTube = function (options, callback) { //need to pass in query, key, maxResults
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',  
      contentType: 'application/json',
      q: 'hello',
      key: 'AIzaSyBAefnn0ECk-ptjIkPLuGdjLUl5hmRMOLA',
      maxResults: 5
    },
    success: data => callback(data),
    error: data => console.error('error: ajax call', data)
  });
};



// https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YOUR_API_KEY
//      &part=snippet,contentDetails,statistics,status

// GET {base_URL}/search?part=snippet        
//                      &order=rating
//                      &type=video
//                      &videoDefinition=high
//                      &videoEmbeddable=true
//                      &key={YOUR_API_KEY}



window.searchYouTube = searchYouTube;


// Sample js code for search.list

// See full sample for buildApiRequest() code, which is not 
// specific to a particular youtube or youtube method.
