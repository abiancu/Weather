   

var buttonSearch = $("#search").click(searchClick);
$("#results").hide();

function handleResults(data) {
    console.log(data);
    for (var i = 0; i < data.query.results.channel.item.forecast.length; i++) {
      
        $("#body1").html(data.query.results.channel.item.forecast[0].date);
        $("#body2").html(data.query.results.channel.item.forecast[0].day);
        $("#body3").html(data.query.results.channel.item.forecast[0].high);
        $("#body4").html(data.query.results.channel.item.forecast[0].low);
        $("#body5").html(data.query.results.channel.item.forecast[0].text);
    }
    for (var i = 0; i < data.query.results.channel.item.forecast.length; i++) {

        $("#body6").html(data.query.results.channel.item.forecast[1].date);
        $("#body7").html(data.query.results.channel.item.forecast[1].day);
        $("#body8").html(data.query.results.channel.item.forecast[1].high);
        $("#body9").html(data.query.results.channel.item.forecast[1].low);
        $("#body10").html(data.query.results.channel.item.forecast[1].text);
    }
    for (var i = 0; i < data.query.results.channel.item.forecast.length; i++) {

        $("#body11").html(data.query.results.channel.item.forecast[2].date);
        $("#body12").html(data.query.results.channel.item.forecast[2].day);
        $("#body13").html(data.query.results.channel.item.forecast[2].high);
        $("#body14").html(data.query.results.channel.item.forecast[2].low);
        $("#body15").html(data.query.results.channel.item.forecast[2].text);
    }
    for (var i = 0; i < data.query.results.channel.item.forecast.length; i++) {

        $("#body16").html(data.query.results.channel.item.forecast[3].date);
        $("#body17").html(data.query.results.channel.item.forecast[3].day);
        $("#body18").html(data.query.results.channel.item.forecast[3].high);
        $("#body19").html(data.query.results.channel.item.forecast[3].low);
        $("#body20").html(data.query.results.channel.item.forecast[3].text);
    }
    for (var i = 0; i < data.query.results.channel.item.forecast.length; i++) {

        $("#body21").html(data.query.results.channel.item.forecast[4].date);
        $("#body22").html(data.query.results.channel.item.forecast[4].day);
        $("#body23").html(data.query.results.channel.item.forecast[4].high);
        $("#body24").html(data.query.results.channel.item.forecast[4].low);
        $("#body25").html(data.query.results.channel.item.forecast[4].text);
    }   
    $("#results").show();
}



function searchClick(event) {
    event.preventDefault();
    var city = $("#city").val();


    var query = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "')&format=json"; 
    $.getJSON(query, handleResults );

    
};




