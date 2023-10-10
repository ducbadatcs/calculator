function widthAlign(numSquares) {
    for (let i = 10; i > 0; i--) {
        if (numSquares % i == 0) {
            return i;
        }
    }
    return 1; // fallback value if no suitable width is found
}

var buttons = document.getElementById("buttons");
var scr = document.getElementById("screen");
var res = document.getElementById("result");
var buttonList = "1234567890.+-*/=()<C";
console.log(buttonList.length);
console.log(widthAlign(buttons.length));

var inputOn = 1;
var buttonsPerLine = widthAlign(buttonList.length);
//buttons.style.gridTemplateColumns = `repeat(${buttonsPerLine}, ${Number(buttons.style.width) / buttonsPerLine}px)`;
//buttons.style.gridTemplateColumns = `repeat(4, ${Number(buttons.style.width) / buttonsPerLine}px)`
console.log(document.getElementsByClassName("buttoncalc"));
for (let i of document.getElementsByClassName("buttoncalc")){
    
    if (i.textContent === "="){
        i.addEventListener("click", (f) => {
            let result = "";
            try {
                result = eval(scr.textContent.replace("x", "*").replace("%", "/100")).toString();
            }
            catch (e){
                if (e instanceof Error) result = "Invalid input!"
            }
            scr.textContent = result;
			inputOn = 0;
        })
    }
    else if (i.textContent === "C"){
        i.addEventListener("click", (f) => {
            scr.textContent = "";
			inputOn = 1;
        })
    }
	else if (i.textContent === "<"){
		i.addEventListener("click", () => {
			let scrtext = scr.textContent;
			if (scr.textContent != "") scr.textContent = scrtext.substring(0, scrtext.length - 1);
		})
	}
    else {
        i.addEventListener("click", (f) => {
            
			if (!inputOn){scr.textContent = i.textContent; inputOn = 1;}
			else scr.textContent += i.textContent;
        })
    }
}