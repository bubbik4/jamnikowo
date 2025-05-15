function showMode() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("showBtn");

    if(dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Pokaż więcej";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Pokaż mniej";
        moreText.style.display = "inline";
    }
}