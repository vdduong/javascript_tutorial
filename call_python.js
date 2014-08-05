// learning jQuerry

// show a message to visitors who use IE
if($.browser.msie){
  alert("C'est Internet Explorer " +$.browser.version + " !");
}

// jQuerry is not a language but a javascript library. Implying that JVscript to be activated within the browser.

$("#AnyID").click(function())
  {
    $.ajax({
      type: "get",
      url: "<your-python-script>.py",
      data: {"param1":"abc"},
      async: false,
      success: function(response){
      // response is string, convert it to json and apply conditions.
      var json_obj=eval('(' + response + ')'); // $.parseJSON("'"+response+"'");
      if (json_obj.type == 'Error'){
        alert(json_obj.msg);
      }
      else {
        alert(json_obj.msg);
      } // else closed
      }, //success closed
      error:function(xhr, err)
      {
        alert("Error connecting to server, please contact system administrator.")
      }
    }) // ajax closed
  }
