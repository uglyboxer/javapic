function validateForm() {

    // Validate name fields
    var loc = document.querySelectorAll("#signup input[type='text']");
      if (!loc[0].value || !loc[1].value) {
        alert("Needs some data, yo.");
        return;
      }

    // Validate email
    var reg = /^\w?.+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}?.?[a-zA-Z]*/g;
    var loc2 = document.querySelectorAll("#signup input[type='email']");
      if (!loc2[0].value || !reg.exec(loc2[0].value) ) {
        alert("Needs valid email address, pal.");
        return;
      }

    window.location.href = "gallery.html?"+loc[0].value;

}



var btn = document.getElementById("submit");
btn.addEventListener("click", function(event) {
    event.preventDefault();
    validateForm();
});