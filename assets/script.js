
// getRecentlySearched();

// var locationData = [];

// function addRecentlySearched(cityInput) {
//     $('#userSearchrecent').show();

//     //now we append li in the html
//     var newSpot = $('<li>');
//     newSpot.addClass('group-list');
//     newSpot.text(cityInput);
//     $('#user-recent-list').append(newSpot)

//     var localObject = {
//         cityInput: cityInput
//     };
//     locationData.push(localObject);

//     //This will be adding values to localStorage
// localStorage.setItem('search', JSON.stringify(locationData));

// }

//this is where we get the recent items from localstorage
// function getRecentlySearched () {
//     var search = JSON.parse(localStorage.getItem('search'));
//     if(search != null) {
//         for (var i = 0; i < search.length; i++) {
//             // new li creation similar to the above and appending
//             var newSpot = $('<li>');
//     newSpot.addClass('group-list');
//     newSpot.text(search[i].cityInput);
//     $('user-recent-list').append(newSpot);
//         }
//         $('#userSearchrecent').show();
//     }else {
//         $('#userSearchrecent').hide();
//     }
// }

// //this is for clear button when user clicks will clear history
// $("#clearhistoryBtn").on("click", function () {
//     localStorage.clear();
//     $("#user-recent-list").empty();
//   });

//   //event listener for search btn/user input 'Let's GO
// userIn.keypress(function(event){
//     if (event.keycode === 13) {
//         currentlyData(userIn.val())
//         addRecentlySearched(userIn.val());
//     }
// });

  //This will be the click list event for searched items by the user
// $('#user-recent-list').on('click', 'li.group-list', function(){
// var userHistory = $(this).text();
// stormsURL = `https://api.openweathermap.org/data/2.5/forecast?q=` + userHistory + `&units=imperial&appid=${APIKey}`;
// //fetch request
// fetch (stormsURL)
// .then(response => response.json())
// .then(data => {
// longitude = data.city.coord.lon;
// latitude = data.city.coord.lat;
// var codeIcon = data.weather[0].icon;
// var urlIcon = "https://openweathermap.org/img/wn/" + codeIcon + ".png";
// //fetch request for the icon url above
// fetch (urlIcon)
// .then(data => {
//     icon.attr('src', data.url)
// });
// Travel.text(`${data.name} (${getTimeyWimey(data.dt)})`);
// todaysWeather(longitude, latitude);
// });
// });


//in this area I will be using the API call to get the longitude and latitude
//  function todaysWeather(lon, lat) {
//       console.log(lon, lat);
//       var result = fetch(
//         `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`
//       )
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (data) {
//           console.log(data);
    
//           // check the response from API to find the fields on data object, should be in the "list" and choose the "12" for noon
//            temp.text(`Current Temp: ${data.list[12].main.temp}`);
//            windy.text(`Wind: ${data.list[12].wind.speed} MPH`);
//            humidity.text(`Humidity: ${data.list[12].main.humidity}%`);

// //repeat in a loop to create cards for the preceding 5 day forecast
//    futureDays.empty();

//    var dazeArray = data.daily;
//    for (var i=0; i<5; i++){
//     var codeIcon = data.weather[0].icon;
// var urlIcon = "https://openweathermap.org/img/wn/" + codeIcon + ".png"; 
// fetch(urlIcon)
// .then(data =>{
//     $('#fiveIcon').attr('src', data.url);
// });

// multiFiveCards(getTimeyWimey(data.list[i].dt), urlIcon, data.list[i].main.temp, data.list[i].wind.speed, data.list[i].main.humidity);

//    }

//         });
//     };        

// function addRecentSearch(cityname) {
//   $("#recently-searched-list").show();

//   //new element
//   var cityQuery = $("<li>");
//   cityQuery.addClass("list-group-item");
//   cityQuery.text(cityname);
//   //append the item
//   $("#recently-searched-list").prepend(cityQuery);

//   //new object
//   var objectCities = {
//     input: cityname,
//   };

//   citiesData.push(objectCities);

//   //localstorage
//   localStorage.setItem("searches", JSON.stringify(citiesData));
// }


//function will be for established time (day, month year)
// function getDateEl(unix_time) {
//   var currentdate = new Date(unix_time * 1000);
//    var mm = date.getMm() + 1;
//   var dd = date.getDd();
//   var yyyy = date.getFullYear();
//   return `${yyyy}/${dd}/${mm}`;
// }