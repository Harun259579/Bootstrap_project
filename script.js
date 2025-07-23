function healtplan() {
	fetch('health_plan.html')
		.then(res => res.text())
		.then(data => {
			document.getElementById('maincontent').innerHTML = data;
		});
}

function about() {
	fetch('about.html')
		.then(res => res.text())
		.then(data => {
			document.getElementById('maincontent').innerHTML = data;
		});
}

function diagnosis() {
	fetch('diagonosis.html')
		.then(res => res.text())
		.then(data => {
			document.getElementById('maincontent').innerHTML = data;
		});
}
function ordermedichine() {
	fetch('order_medichine.html')
		.then(res => res.text())
		.then(data => {
			document.getElementById('maincontent').innerHTML = data;
		});
}
function consultasion() {
	fetch('consultation.html')
		.then(res => res.text())
		.then(data => {
			document.getElementById('maincontent').innerHTML = data;
		});
}
