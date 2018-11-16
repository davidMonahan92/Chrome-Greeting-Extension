var userName;

function openSettings () {
	document.getElementById('settings').classList.toggle("settings-open");
	clearName();
}

function saveName() {
	localStorage.setItem('receivedName', userName);

	userName=localStorage.getItem('receivedName');

	if( userName == null){
		userName = "friend";
	}
}

function changeName() {
	if(userName = document.getElementById("name-input").value == ""){
		userName = "friend";
	}else {
		userName = document.getElementById("name-input").value;
	}
	

	saveName();
	getGreeting();
}

function getGreeting() {
	document.getElementById('greeting').innerHTML = `Hello, ${userName}. Enjoy your day!`;
}

function clearName() {
	document.getElementById("name-input").value = "";
}

document.getElementById("settings-button").addEventListener('click', openSettings);

document.getElementById("name-form").addEventListener('submit', function(e) {
	e.preventDefault();

	changeName();
	clearName();
});