<<<<<<< HEAD
var myIndex = 1;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 2 seconds
}
=======
$.jInvertScroll(['.div', '.div1', '.div2', '.div3']);
>>>>>>> 1c60764b5c5c1cb30a56eb4692e0b692406c0240
