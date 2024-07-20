function volume_sphere() {
	event.preventDefault();
    let r=document.querySelector("#radius").value;
	let v=(4/3)*(22/7)*r*r*r;
	document.querySelector("#volume").value=v.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
