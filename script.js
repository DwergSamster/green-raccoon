window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function chgtext(text) {
    document.getElementById('chgtext').innerHTML = text;
}

function difftext(text) {
    document.getElementById('difftext').innerHTML = text;
}