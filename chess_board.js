var w = document.querySelectorAll("tr:nth-of-type(odd) td:nth-child(even), tr:nth-of-type(even) td:nth-child(odd)");
var b = document.querySelectorAll("tr:nth-of-type(even) td:nth-child(even), tr:nth-of-type(odd) td:nth-child(odd)");
var p = document.querySelector("p");
var click1 = document.querySelector(".click");
click1.addEventListener("click",function(){
	var random1 = '#'+Math.random().toString(16).slice(-3);
	var random2 = '#'+Math.random().toString(16).slice(-6);
	p.textContent = "White:"+random1+",black:"+random2;
	if(random1!='#000000' && random2!='#000000' && random1!=random2){
		w.forEach(function(i){
			i.style.background=random1;
		})
		b.forEach(function(i){
			i.style.background=random2;
		})
	}
})