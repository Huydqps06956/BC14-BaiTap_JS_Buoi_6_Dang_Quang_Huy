function hienThi(){
    var soX = +document.getElementById('soX').value;
    var soN = +document.getElementById('soN').value;
    var result = document.getElementById('result');
    var S = tinhTong(soX,soN);
    result.innerHTML = S;
}
function tinhTong(soX,SoN){
    var t = 1;
    var s = 0;
    for (var i = 1; i <= SoN; i++){
        t = t * soX;
        s = s + t;
    }
    return s;
}