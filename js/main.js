function toggle_visibility(id, view) {
       var e = document.getElementById(id);
       if(view == 'hide')
          e.style.display = 'none';
       else
          e.style.display = 'block';
   }

function show_more_menu(value) {
  var x = document.getElementById("first_name2");
  x.value = value;
  myFunction();
}
function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}
function myFunction() {
    var x = document.getElementById("first_name2");
    var y = document.getElementById("submit_button");

    $("#listOfPeople").empty();
    $("#metaInfo").empty();
    y.disabled = true;
    if(x.value.length < 1){
      y.disabled = false;
      return 1;
    }

    if(!isInt(x.value) || x.value < 1 || x.value > 100){
      $("#metaInfo").append("Invalid ID: " + x.value);
      y.disabled = false;
      return 1; 
    }
    x.value = x.value.replace(/^0+/, '');
    toggle_visibility('loadingMask', 'show');
    $.ajax({url: "http://jsonplaceholder.typicode.com/posts/" + x.value.trim(), success: function(result){
        console.log(result);
	y.disabled = false;
        toggle_visibility('loadingMask', 'hide');
	$("#listOfPeople").empty();
    	$("#metaInfo").empty();
        $("#metaInfo").append("ID: " + result.id);
        $("#listOfPeople").append('<li class="collection-item avatar"> <i class="material-icons circle green">insert_chart</i><span class="title"><b>' + 
              result.title + '</b></span><p style="text-align:left;">' + result.body + ' </p></li>');
    }});
}

