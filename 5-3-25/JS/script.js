// console.log("hello js");
//varible 

//var ,let,const

// var a ;
// a = 10;
// console.log("value of a is",a);
// var a = 20;
// console.log("value of a is",a);

// let name1 = "Simran";
// console.log(name1);

//  name1 = "raman";
// console.log("name is ",name1);


// const statusofproduct = "true";
//  statusofproduct = "false";
// console.log(statusofproduct);


//functions in JS
// parts of fun - fun declare and fun call
function fun1(a){
        console.log("fun1 is called",a);
        
}

fun1(10)


function add(num1 ,num2){
    var result = num1+num2;
        console.log("result is",result);
        
}

add(10.09,20)
add(20,20)
add(40,20)
add(60,20)






// DOM muni

function ShowImg(){
    // console.log("Show fun call");

    // alert("fun call");

    // document.getElementById("img1").src = "https://media.istockphoto.com/id/1394440950/photo/natural-view-cosmos-filed-and-sunset-on-garden-background.jpg?s=612x612&w=0&k=20&c=eBnRobwsk2w_9MqM6bnXukIia5j-ayuMS0PeB6GHN0E=";
    // document.getElementById("heading1").innerText ="Hello JS";
    document.getElementById("inp1").value ="Hello JS";
}

function inpShow(){
    var emailinp =document.getElementById("email").value;
    console.log("email value is",emailinp);
    document.getElementById("emailprint").innerText = emailinp;
    
}



