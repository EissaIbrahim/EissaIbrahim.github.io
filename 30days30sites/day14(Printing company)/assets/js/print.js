//DOM Manupilation for javascript
var anchor = document.querySelector(".open")
anchor.addEventListener("click", function(){  
	document.getElementById('side-menu').style.width = '190px';
 
})

var btn = document.querySelector(".btn-close")
btn.addEventListener("click", function closeSlideMenu(){
   document.getElementById('side-menu').style.width = '0';
})
