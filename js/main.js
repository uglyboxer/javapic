function jumboSwitch() {
    
    var loc = document.getElementById("jumbotron");
    var num = Math.floor((Math.random() * 60) + 1);
    if (num === 36 || num === 42) {
        num = 37;
    }

    num = num.toString();
    if (num.length < 2) {
        num = "0" + num;
    }

    var file_name = "url('images/pdxcg_" + num + ".jpg')"; 
    loc.style.backgroundImage = file_name;
    
    }

window.setInterval(jumboSwitch, 20000);