var s = 0;
var n = 0;
var result = document.getElementById('result')

while (s < 10000){
n++;
s = s+n;
}
result.innerHTML = "Số nguyên dương nhỏ nhất :"+n
