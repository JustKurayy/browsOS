let input;
let lastInput;
let userSettings = {
	username: 'admin',
	password: 'admin',
	terminalBG: '#111212',
	terminalTC: '#00ff00',
	loggedIniInputStyle: 0
}

let x0mem = { //available memory list. Used for storing information and then dumping it into the localstorage.
	x00000: "",
	x00001: "",
	x00002: "",
	x00003: "",
	x00005: "",
	x00006: "",
	x00007: "",
	x00008: "",
	x00009: "",
	x00010: ""
	//continue for more memory
}

let boot = { //applies localstorage information into OS.
	xm00000: "",
	xae0001: "",
	xad0110: ""
}

showLog(`browsOS is a browser forwarder. 
It is a fake operating system for browsers to forward to different sites. <br>
Most functions have to use, like the login, and are only there for unidentified reasons.`)

function clickPress(event) {
	input = document.querySelector('.command-input').value;
    if (event.key == 'Enter') {
		lastInput = input;
		if (input.charAt(0) === '.') {
			switch(input) {
				case ".help":
					showLog('<p class="console">List of commands:<p>' + 
					"<p class='console'>.help //shows the list of available commands</p>" +
					"<p class='console'>.settings //used to customize the OS to the user's liking</p>" +
					"<p class='console'>.reset //used to reset the terminal</p>" +
					"<p class='console'>.login //login into the terminal</p>");
					break;
				case ".reset":
					window.location.reload();
					break;
				case ".settings":
					showLog(`<p class="console">Username: ${userSettings.username}</p>` +
					`<p class="console">Password: ${userSettings.password}</p>` +
					`<p class="console">Terminal background color: <input type="text" class="text-color-input" placeholder="${userSettings.terminalBG}"></p>` +
					`<p class="console">Terminal text color: <input type="text" class="text-color-input" placeholder="${userSettings.terminalTC}"></p>` +
					`<p class="console">Logged in Input Style: ${userSettings.loggedIniInputStyle}
					//is used for the tag next to the console input. 0 means $USERNAME >> & 1 means USERNAME$ </p>`);
					break;
				case ".login":
					document.querySelector('.console-parameters').style.display = 'none';
					showLog('<p class="console">Enter username and password:</p>' +
					'<label for="input" class="input-tag-2">$</label>' +
					'<input type="text" class="username" onkeydown="loginSys(event)">' + '<br>' +
					'<label for="input" class="input-tag-3">$</label>' +
					'<input type="password" class="password" onkeydown="loginSys(event)">');
					break;
				case ".forward":
					window.open('_blank', forwarder);
				default:
					showLog('<p class="console">Command not found</p>');
					input = '';
					break;
			}
		} else {
			 showLog('<p class="console">Not a command</p>');
			 input = '';
		}
		input = '';
    }
	if (event.key == 'ArrowUp') {
		input = lastInput;
	}
}

function showLog(log) {
	document.querySelector('.console-log').innerHTML += log;
}

function loginSys(event) {
    if (event.key == 'Enter') {
		if (document.querySelector('.username') && document.querySelector('.password') != '') {
			userSettings.username = document.querySelector('.username').value;
			userSettings.password = document.querySelector('.password').value;
			document.querySelector('.console-parameters').style.display = 'block';
			switch(userSettings.loggedIniInputStyle) {
				case 0:
					document.querySelector('.input-tag').textContent = '$' + userSettings.username + ' >> ';
					break;
				case 1:
					document.querySelector('.input-tag').textContent = userSettings.username + '$ ';
					break;
			}
			fillMemory(userSettings.username);
			fillMemory(userSettings.password);
		} else {
			showLog('<p>Fill the form in</p>');
		}
	}
}

function applyColors() {
	//paste css code here for body.background and text color
}

function fillMemory(data) {
	if (x0mem.x00000 == "") {
		x0mem.x00000 = data;
		window.localStorage.setItem("username", x0mem.x00000);
		showLog("<br>" + x0mem.x00000);
	} else if (x0mem.x00001 == "") {
		x0mem.x00001 = data;
		showLog("<br>" + x0mem.x00001);
	} else {
		x0mem.x00002 = data;
		showLog("<br>" + x0mem.x00002);
	}
}