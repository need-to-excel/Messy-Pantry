var apiKey = "0qKmN4G3IDKPTq3BC91TZXoTnlsKdCl0"
    
var queryURL = "https://api.giphy.com/v1/gifs/random?tag=wine&api_key=" + "0qKmN4G3IDKPTq3BC91TZXoTnlsKdCl0";
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.data.bitly_url);
    //   var url = (data.images);
    //   console.log(url)
});