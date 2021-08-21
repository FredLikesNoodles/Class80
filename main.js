var student_names = [];
var darray = [];
function sub(){
    for (var i = 1; i<=4; i++) {
        var n = document.getElementById("s"+i).value; 
       student_names.push(n);
       console.log(student_names); 
    }    
    console.log(student_names);
    var len = student_names.length;
    console.log(len);

for(var j = 0; j<len; j++){
    darray.push("<h5> NAME - "+ student_names[j]+"</h5>");
}
console.log(darray);
document.getElementById("display1").innerHTML=darray;

var rc = darray.join(" ");
console.log(rc)
document.getElementById("display2").innerHTML = rc;

    document.getElementById("b1").style.display = "none";
    document.getElementById("b2").style.display = "inline";
}   

function sor(){
    darray.sort();
    console.log(darray);
    var rc = darray.join(" ");
    console.log(rc)
    document.getElementById("display2").innerHTML = rc;

}
