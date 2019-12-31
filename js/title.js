if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 100);

}

var x = 0;

var titleText = [ "Elgedarmer uwu", "El", "Elge", "Elgedar", "Elgedarmer", "life", "inside", "чекни котэ", "люблю сгущёнку" ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
