function volume_sphere() {
	event.preventDefault();
	var v;
    let r=document.querySelector("#radius").value;
	if(isNaN(r) || r<0){
		v=NaN;
	}else{
	v=(4/3)*Math.PI*Math.pow(r, 3);
	v=v.toFixed(4);}
	document.querySelector("#volume").value=v;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
