 $(function() {
    var newSearch = $('#search');
    var searchText = newSearch.val().toLowerCase();
    var knackDisplay = $('#search-results');

    //IMPLEMENT SEARCH API CALL
    $("#my-form").on("submit", function(e) {
      e.preventDefault();
      knackDisplay.html("Loading...");
      var url="http://knack-prod.cloudapp.net/knack/make/product?search[]="+searchText;
      $.getJSON(url,function(knackData){
        var knack = knackData.results;
        if(knack){

        //SORT ITEMS AS DESCRIBED.
        knackDisplay.html("");
        knack.forEach(function(knack){


        var knackArray = [];

        var str = knack.product.title;
        if( str.toLowerCase().indexOf(searchText) != -1){
          knackArray.push(knack.product);
        }
            //DISPLAY RESULTS IN #search-results

            knackArray.forEach(function(item){
              var myKnack = $('<div />',{
                "class": "knack col-xs-12 col-sm-3"
              });
              var knackImg = "https:" + item.featured_image;
              var knackTitle = item.title;
              var imgDiv = $("<div />",{
                class: "knackImage",
                style: "background-image: url("+knackImg+");"
              });

              var textDiv = $("<div />",{
                class: "knackText"
              });
              textDiv.append("<p>"+knackTitle+"</p>");
              myKnack.append(imgDiv);
              myKnack.append(textDiv);
              myKnack.appendTo(knackDisplay);
            });
          });
        }else{
          knackDisplay.html("<div class='alert alert-danger'>Error! We could not find What you were looking for!</div>")
        }
      })




        return false;
    });
});