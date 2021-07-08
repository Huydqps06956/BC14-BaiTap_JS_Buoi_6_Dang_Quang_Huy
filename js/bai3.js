function hienThi(){
    var n = +document.getElementById('n').value;
    var result = document.getElementById('result');
    var giaiThua = tinhGiaiThua(n);
    result.innerHTML = giaiThua;
}
function tinhGiaiThua(n){
    var giaiThua = 1;
    for (i = 1; i <= n; i++)
		{
			giaiThua = giaiThua * i;
		}
    return giaiThua;
}