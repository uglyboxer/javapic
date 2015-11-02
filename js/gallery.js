var loc = document.getElementById("gallery");
var num;

// Function to activate lightbox, and kill it afterward.
var blowUp = function thing(e) {
    var clickedImg = e.target;

    // Check to see if click was on a picture.
    if (clickedImg.className === "picture") {
        var imShow = document.getElementById("image_show");
        imShow.firstChild.src = clickedImg.src;
        imShow.className = 'display_img';
        imShow.addEventListener("click", function(f) {

            // Check to see if second click was outside blown up picture
            if (f.target !== imShow.firstChild) {
               imShow.className = 'display_none';
            }
        });
    }
};

// Retrieve name from get request and append to tagline.
var passedName = location.search.substr(1);
var tagName = document.getElementsByClassName("tagline")[0].firstChild;
var newTag = passedName + ", " + tagName.data;
tagName.data = newTag;

for (var x = 1; x < 61; x++) {  // 60 image available (more or less)
    num = x.toString();
    if (num.length < 2) {
        num = "0" + num;
    }
    var fileName = "images/pdxcg_" + num + ".jpg";
    var listElem = document.createElement("LI");  
    var imgElem = document.createElement("IMG");
    imgElem.setAttribute("src", fileName);
    imgElem.setAttribute("onerror", "src='images/pdxcg_01.jpg'");
    imgElem.className = "picture";
    listElem.appendChild(imgElem);
    loc.appendChild(listElem);
}


loc.addEventListener("click", blowUp);