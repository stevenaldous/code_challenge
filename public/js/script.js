 $(function() {
    var searchText = $('#search');
    var knackDisplay = $('#search-results')


    //IMPLEMENT SEARCH API CALL
    $("#my-form").on("submit", function(e) {
      e.preventDefault();
      knackDisplay.html("Loading...");
      var url="http://knack-prod.cloudapp.net/knack/make/product?search[]="+searchText.val();
      $.getJSON(url,function(knackData){
        var knack = knackData.results;
        if(knack){
        //SORT ITEMS AS DESCRIBED.
        knack.forEach(function(knack){
        var knackArray = [];
        if(knack.product.title == searchText){
          knackArray.push(knack.product);
        }
        console.log("knackArray"+knackArray)

            //DISPLAY RESULTS IN #search-results
            knackDisplay.html("");
            knackArray.forEach(function(item){

            // knack.forEach(function(item){
              var myKnack = $('<div />',{
                "class": "knack col-xs-12 col-sm-3"
              });
              var knackImg = "https:"+item.product.featured_image;
              var knackTitle = item.product.title;

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