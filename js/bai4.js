function In(){
    var result = document.getElementById('result');
    for(var i = 0; i<10; i++){
        if ((i+1)%2==0){
            var newDiv = document.createElement("div");
            newDiv.style.cssText = "background-color:red;font-size:18px;color:white;line-height:30px";
            newDiv.innerHTML = "div chẵn "+ (i+1);
            result.appendChild(newDiv);
        }
        else {
            var newDiv = document.createElement("div");
            newDiv.style.cssText = "background-color:blue;font-size:18px;color:white;line-height:30px";
            newDiv.innerHTML = "div lẻ "+ (i+1);
            result.appendChild(newDiv);
        }
    }
}