function volume_sphere() {
	event.preventDefault();
    let r=document.querySelector("#radius").value;
	if(isNaN(r) || r<0){
		v=NaN
	}else{
	let v=(4/3)*Math.PI*Math.pow(r, 3);}
	document.querySelector("#volume").value=v.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
