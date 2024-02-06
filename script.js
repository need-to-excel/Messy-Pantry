var apiKey = "0qKmN4G3IDKPTq3BC91TZXoTnlsKdCl0"
    

var getMeal = function(mealInput) {
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
var apiKey = "d152576e58714ab5ba4e89d5f0607368"
var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=chicken&apiKey=" + "d152576e58714ab5ba4e89d5f0607368";
fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var mealdata = []
        for(index = 0; index < data.results.length; index++){
            // mealIds.push(data.results[index].id)
            var queryURL = "https://api.spoonacular.com/recipes/" + data.results[index].id + "/card?apiKey=" + "d152576e58714ab5ba4e89d5f0607368";
            fetch(queryURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    mealdata.push(data.url)
                    WidgetContainer.innerHTML += `<img src="${data.url}" class="img-fluid" alt="...">`                  
                
                    console.log(data); 
                    
                }); 
        }
        console.log(mealdata); 
        // console.log(data)  
const WidgetContainer = document.querySelector(".widgets")
        for(index = 0; index < mealdata.length; index ++) {
            // WidgetContainer.innerHTML += `<img src="${mealdata[index]}" class="img-fluid" alt="...">`
        }
    });

}
getMeal()




    $("#search-button").on("click", function(event) {
        event.preventDefault();
      var mealInput = $("#search-input").val().trim()
      console.log(mealInput)
      getMeal(mealInput);
      });
