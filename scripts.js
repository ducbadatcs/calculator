function widthAlign(numSquares){
    let w = parseInt(Math.sqrt(numSquares));
    //console.log(w);
    for (i = w; i > 0; i--) {
        if (numSquares % i == 0) {
            return i;
        }
    }
    return 1; // fallback value if no suitable width is found
}

var buttonDisplay = document.getElementById("buttondisplay");
var scr = document.getElementById("screen");
var res = document.getElementById("result");
var buttonList = "1234567890.+-*/=()<C";
var buttonWidth = 100;


console.log(buttonList.length);
console.log(widthAlign(buttonList.length));

var inputOn = 1;
var buttonsPerLine = widthAlign(buttonList.length);

res.textContent = "0" //string to fix the error of it collapsing, not like I actually know how to fix the issue
buttonDisplay.style.gridTemplateColumns = `repeat(${buttonsPerLine}, ${Number(buttonDisplay.style.width) / buttonsPerLine}px)`;
buttonDisplay.style.gap = "0px 100px";
for (let i of buttonList){
    let but = document.createElement("button");
    but.textContent = i;
    but.className = "calcbutton";
    
    but.style.width = buttonWidth.toString() + "px"
    //but.style.width = (Number(buttonDisplay.style.width) - buttonsPerLine * parseInt(buttonDisplay.style.gap)) / buttonsPerLine
    if (i == "="){
        but.addEventListener("click", (f) => {
            let result = "";
            try {
                //the space is to invalidate the input for something like 5%3 
                result = eval(scr.textContent.replace("x", "*").replace("%", "/100 ")).toString();
            }
            catch (e){
                if (e instanceof Error) result = "Invalid input!"
            }
            res.textContent = result;
			inputOn = 0;
        })
    }
    else if (i == "C"){
        but.style.color = "white";
        but.style.backgroundColor = "blue";
        but.addEventListener("click", (f) => {
            scr.textContent = "";
            res.textContent = "";
			inputOn = 1;
        })
    }
	else if (i == "<"){
		but.addEventListener("click", () => {
			let scrtext = scr.textContent;
			if (scr.textContent != "") scr.textContent = scrtext.substring(0, scrtext.length - 1);
		})
	}
    else if (!isNaN(i)){
        but.style.color = "white";
        but.style.backgroundColor = "black";
        but.addEventListener("click", (f) => {
            
			if (!inputOn){scr.textContent = i; inputOn = 1;}
			else scr.textContent += i;
        })
    }
    else {
        but.style.color = "white";
        but.style.backgroundColor = "gray";
        but.addEventListener("click", (f) => {
            
			if (!inputOn){scr.textContent = i; inputOn = 1;}
			else scr.textContent += i;
        })
    }
    let butbox = document.createElement("div");
    
    butbox.appendChild(but);
    buttonDisplay.appendChild(butbox);
}
