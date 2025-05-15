let button = document.getElementById("bTTBtn");

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}


function backToTop() {
    document.body.scrollTop = 0; //Safari compat
    document.documentElement.scrollTop = 0; //Chrome Firefox IE Opera compat
}