var student_names = [];
function sub(){
    var n1 = document.getElementById("s1").value;
    var n2 = document.getElementById("s2").value;
    var n3 = document.getElementById("s3").value;
    var n4 = document.getElementById("s4").value;
    student_names.push(n1);
    student_names.push(n2);
    student_names.push(n3);
    student_names.push(n4);
    console.log(student_names);
    document.getElementById("display_value").innerHTML=student_names;
    document.getElementById("b1").style.display = "none";
    document.getElementById("b2").style.display = "inline";
}   

function sor(){
    student_names.sort();
    console.log(student_names);
    document.getElementById("display_value").innerHTML=student_names;
}
