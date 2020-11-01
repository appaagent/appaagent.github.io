function showIt() {
  document.getElementById("hid").style.visibility = "visible";
}
setTimeout("showIt()", 100); // after 3 seconds

function onSubmit(yes) {
 var x= document.getElementById("hid");
 { x.style.display = "none";}
}
function onSubmit() {
 var y= document.getElementById("hide");
 { y.style.display = "none";}
}
$("button button-yes").onSubmit(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 2000);
});
