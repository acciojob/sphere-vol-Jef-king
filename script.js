function volume_sphere() {
    let r=document.querySelector("#radius").value;
	let v=4/3*3.14*r*r*r;
	document.querySelector("#volume").value=v;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
