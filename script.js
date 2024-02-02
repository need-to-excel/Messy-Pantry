<<<<<<< HEAD
<<<<<<< HEAD
var apiKey = "0qKmN4G3IDKPTq3BC91TZXoTnlsKdCl0"
    
var queryURL = "https://api.giphy.com/v1/gifs/random?tag=wine&api_key=" + "0qKmN4G3IDKPTq3BC91TZXoTnlsKdCl0";
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.bitly_gif_url);
    //   var url = (data.images);
    //   console.log(url)
});
=======
=======
>>>>>>> d78073aed892007e586c8a72502e54e1d6c77e74
var apiKey = "d152576e58714ab5ba4e89d5f0607368"
var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=" + "d152576e58714ab5ba4e89d5f0607368";
fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
<<<<<<< HEAD
    });
>>>>>>> 928b6fbc022777175d74008591fc4e4f94095588
=======
    });
>>>>>>> d78073aed892007e586c8a72502e54e1d6c77e74
