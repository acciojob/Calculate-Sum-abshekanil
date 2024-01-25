//your JS code here. If required.
let num1 = document.getElementById('n1');
let num2 = document.getElementById('n2');
let btn = document.getElementById('sum_btn');
let sum = document.getElementById('Sum');

btn.addEventListener('click' ,function(){
	let ans = parseInt(num1.value) + parseInt(num2.value);
	sum.innerHTML = ans;
})
