var apiKey = "d152576e58714ab5ba4e89d5f0607368"
var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=" + "d152576e58714ab5ba4e89d5f0607368";
fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });