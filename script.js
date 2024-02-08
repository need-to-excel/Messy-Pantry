var apiKey = "0qKmN4G3IDKPTq3BC91TZXoTnlsKdCl0"
    

var getMeal = function(mealInput) {
    var queryURL = "https://api.giphy.com/v1/gifs/random?tag=wine&api_key=" + "0qKmN4G3IDKPTq3BC91TZXoTnlsKdCl0";
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var gif = data.data.images.downsized.url
      console.log(data)
      const gifImage = document.querySelector(".search-column")
      gifImage.innerHTML += `<img src="${gif}" class="img-fluid" alt="...">` 
    
});
// var apiKey = "d152576e58714ab5ba4e89d5f0607368"
var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=" + mealInput + "&apiKey=" + "f0a28ce8eeb940948187c66790d305f0";
fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var mealdata = []
        const WidgetContainer = document.querySelector(".widgets")
        WidgetContainer.innerHTML = " "
        for(index = 0; index < 3; index++){
            // mealIds.push(data.results[index].id)
            var queryURL = "https://api.spoonacular.com/recipes/" + data.results[index].id + "/card?apiKey=" + "f0a28ce8eeb940948187c66790d305f0";
            fetch(queryURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    mealdata.push(data.url)
                    WidgetContainer.innerHTML += `<img src="${data.url}" class="img-fluid" alt="...">`                  
                
                    // console.log(data); 
                    
                }); 
        }
        console.log(mealdata); 
        // console.log(data)  
        for(index = 0; index < mealdata.length; index ++) {
        }
        var winePar = "https://api.spoonacular.com/recipes/" + data.results[index].id + "/information?apiKey=" + "f0a28ce8eeb940948187c66790d305f0";
            fetch(winePar)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                  console.log(data.winePairing.pairingText)
                  var wineChoice = data.winePairing.pairingText
                  var wineText = $("h5")
                  wineText.attr("h5", wineChoice)
                  $(".search-column").append(wineChoice)
                    // mealdata.push(data.url)
                    // WidgetContainer.innerHTML += `<img src="${data.url}" class="img-fluid" alt="...">`                  
                
                    // console.log(data); 
                    
                }); 
  });

  // var wineParing = "https://api.spoonacular.com/recipes/" + data.results[index].id + "/information?apiKey=" + "f0a28ce8eeb940948187c66790d305f0";
  //           fetch(wineParing)
  //               .then(function (response) {
  //                   return response.json();
  //               })
  //               .then(function (data) {
  //                 console.log(data)
  //                   // mealdata.push(data.url)
  //                   // WidgetContainer.innerHTML += `<img src="${data.url}" class="img-fluid" alt="...">`                  
                
  //                   // console.log(data); 
                    
  //               }); 



}

$("#search-button").on("click", function(event) {
        event.preventDefault();
      var mealInput = $("#search-input").val().trim()
      console.log(mealInput)
      getMeal(mealInput);
      updateSearchHistory(mealInput);
      });

function updateSearchHistory(mealInput) {
  var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  searchHistory = searchHistory.slice(0, 4);
  searchHistory.push(mealInput)
  console.log(searchHistory)

  localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

  // Update the search history display on the website
  var historyContainer = $('#history');
  historyContainer.empty();
  searchHistory.forEach(function (search) {
    // Create a button element for each search history item
    var historyItem = $('<button class="btn btn-secondary m-1 history-item">');
    historyItem.text(search);
    historyItem.on('click', function () {
      updateMeal(search);
    });
    historyContainer.append(historyItem);
  });

}



// needs to be inside a function 
