/**
 * @param data.shows.show.
 * @param callback
 */

function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

//DOM function
function filling(title,latestEpisode,rating,link) {
    div = document.createElement("div");
    place = document.getElementById("container");
    place.appendChild(div);
    
    div.innerHTML = "<h2><a href='"+link+"/"+latestEpisode+"'>"+title+"</a></h2><br>" +
                    "<h3>Latest Episode : "+latestEpisode+"</h3><br>" +
                    "<span>"+ rating + "/10</span><br>";
    
    div.setAttribute("class", "card");
}

// this requests the file and executes a callback with the parsed result once
//   it is available

fetchJSONFile('shows.json', function(data){

    for (var i=0; i< data.shows.show.length; i++){

        var title = data.shows.show[i].title;
        var latestEpisode = data.shows.show[i].latest_episode;
        var rating = data.shows.show[i].rating;
        var background = data.shows.show[i].poster_link;
        var link = data.shows.show[i].link;

        filling(title,latestEpisode,rating,link);
        div.setAttribute("style", "background-image : url(\""+background+"\");");
    }

    var width = data.shows.show.length*200;
    // console.log(width+"px");
    document.getElementById("container").style.width = width+"px";

});



var left = document.getElementById("left");
var right = document.getElementById("right");
var container = document.getElementById("container");

left.addEventListener("click", function(){
    if ($('#container:animated').length == 0) {
        var marginLeft = container.style.marginLeft;
        var parsedMarginLeft = parseInt(marginLeft);
        //console.log(parsedMarginLeft);
        if (parsedMarginLeft > -800) {
            $('#container').animate({marginLeft: '-=200px'}, 300 );
        }else {
            $('#container').animate({marginLeft: '0px'}, 300 );
        }
    }
});

function goLeft(){

}

right.addEventListener("click", function(){
    if ($('#container:animated').length == 0) {
        var marginLeft = container.style.marginLeft;
        var parsedMarginLeft = parseInt(marginLeft);
        //console.log(parsedMarginLeft);
        if (parsedMarginLeft < 0) {
            $('#container').animate({marginLeft: '+=200px'}, 300);
        }else {
            $('#container').animate({marginLeft: '-800px'}, 300 );

        }
    }
});

window.addEventListener("load",function () {
    setTimeout(function () {
        num = document.getElementsByClassName("card").length;
    },300)
});

