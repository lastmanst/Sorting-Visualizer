var arr_size = document.getElementById('a_size'),array_size=arr_size.value;
var arr_speed=document.getElementById('a_speed');
var arr_gen = document.getElementById('a_generate');
// let aad=document.getElementById("array_container");
// aad.style.backgroundColor="cyan";

var bttn_algos= document.querySelectorAll(".algos button");

var div_size =[];

var divs=[];
var margin_size;

var cont=document.getElementById("array_container");
cont.style="flex-direction:row";



arr_gen.addEventListener("click",array_genrate);
arr_size.addEventListener("input",update_array);

function array_genrate(){

    cont.innerHTML="";

    for(var i=0;i<array_size;i++){

        div_size[i]= Math.floor(Math.random() * 0.5 *(arr_size.max-arr_size.min))+10
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_size[i]) + "%";
       // divs[i].style=" margin:0%" +  margin_size + "%; background-color:blue; width: " + (100/array_size-(2*margin_size))+"%; height :" +(100/array_size-(2*margin_size)) + "%; border-radius:" +(div_size[i]) +"%";

    }



}
function update_array(){
    array_size=arr_size.value;
    array_genrate();
}
window.onload=update_array();

//var bttn_algos= document.querySelectorAll('algos button');
for(var i=0;i<bttn_algos.length;i++){

    bttn_algos[i].addEventListener("click",runalgo);

}

function disable_buttons(){

    for( var i=0;i<bttn_algos.length;i++){

        bttn_algos[i].classList=[];

        bttn_algos[i].classList.add("butt_locked");

        bttn_algos[i].disabled=true;
        arr_gen.disabled=true;
        arr_size.disabled=true;
        arr_speed.disabled=true;
        
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_short();
                        break;
        case "Insertion":Insertion_short();
                        break;
        case "Merge":Merge_short();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}






// var arr =[1,2,3,4,5,];
// console.log(arr);

// let mystring =" thhis is my string";

// console.log(mystring.length);
// console.log(mystring.indexOf("my"));

// let mydate= new Date();
// console.log(mydate.getFullYear());
// console.log(mydate.getMinutes());

// //Dommanipulation

//let aad=document.getElementById("array_container");
//aad.style.backgroundColor="cyan";

// let classname= document.getElementsByClassName("Complexity_Containers");
// console.log(classname);




