var apiKeyGiphy = "0qKmN4G3IDKPTq3BC91TZXoTnlsKdCl0"
var apiKeySpoon = "d152576e58714ab5ba4e89d5f0607368"
    

var getMeal = function(mealInput) {
    var queryURL = "https://api.giphy.com/v1/gifs/random?tag=wine&api_key=" + apiKeyGiphy;
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var gif = data.data.images.downsized.url
      console.log(data)
      $(".gif").empty()
      var gifImage = $("<img>")
      gifImage.attr("src", gif)
      $(".gif").append(gifImage)
    
});

var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=" + mealInput + "&apiKey=" + apiKeySpoon;
fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var mealdata = []
        const WidgetContainer = document.querySelector(".widgets")
        WidgetContainer.innerHTML = " "
        // lenghth of the index is reduced to 2, in order to ensure that we do not run out of api fetches, as only limited to 150
        for(index = 0; index < 2; index++){
        var queryURL = "https://api.spoonacular.com/recipes/" + data.results[index].id + "/card?apiKey=" + apiKeySpoon;
            fetch(queryURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    mealdata.push(data.url)
                    WidgetContainer.innerHTML += `<img src="${data.url}" class="img-fluid" alt="...">`                                          
                }); 
        }
        console.log(mealdata); 
         for(index = 0; index < mealdata.length; index ++) {
        }
        var winePar = "https://api.spoonacular.com/recipes/" + data.results[index].id + "/information?apiKey=" + apiKeySpoon;
            fetch(winePar)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                  console.log(data.winePairing.pairingText)
                  var wineChoice = data.winePairing.pairingText
                  // $(".wine").empty()
                  var wineText = $("h2")
                  wineText.attr("h2", wineChoice)
                  $(".wine").append(wineChoice)
                    
                }); 
  });

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


