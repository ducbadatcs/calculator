var buttons = document.getElementById("buttons");
var scr = document.getElementById("screen");
var res = document.getElementById("result");
var buttonList = "1234567890.+-*/=()<C"

var inputOn = 1;


for (let i of buttonList){
    var but = document.createElement("button");
    but.textContent = i;
	
    if (i === "="){
        but.addEventListener("click", (f) => {
            let result = eval(scr.textContent).toString();
            scr.textContent = result;
			inputOn = 0;
        })
    }
    else if (i === "C"){
        but.addEventListener("click", (f) => {
            scr.textContent = "";
			inputOn = 1;
        })
    }
	else if (i === "<"){
		but.addEventListener("click", () => {
			let scrtext = scr.textContent;
			if (scr.textContent != "") scr.textContent = scrtext.substring(0, scrtext.length - 1);
		})
	}
    else {
        but.addEventListener("click", (f) => {
            
			if (!inputOn){scr.textContent = i; inputOn = 1;}
			else scr.textContent += i;
        })
    }
    buttons.appendChild(but);
}