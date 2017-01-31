
function startConversation(email) {
      var html=""
       html +=   "<div \n"
       html +=   "data-toggle=\"spark-message-meet\" \n"
       html +=   "data-access-token=\"<your token here>\" \n"
       html +=   "data-to-person-email=\""+email+"\"></div> \n"
       html += "<script src=\"/meetjs/bundle.js\"></script>\n"

      console.log(html)
      $("#sparkchat_div").html(html);
}
var toggle=true
$("#message_button").click(function() {
  if (toggle)
  {
    uri = $("#uri").val()
    $("#uri").hide()
    $("#message_button").hide()
    startConversation(uri)
    console.log(uri)
    toggle=false
  }
  else {
    $("#sparkchat_div").html("");
  }
})
