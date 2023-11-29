var speed =1000;

arr_speed.addEventListener("input",v_speed);

function v_speed()
{
    var array_speed=arr_speed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
}
var delay_time = 10000/(Math.floor(array_size/10)*speed);
var c_delay=0;

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}


function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<bttn_algos.length;i++)
        {
            bttn_algos[i].classList=[];
            bttn_algos[i].classList.add("butt_unselected");

            bttn_algos[i].disabled=false;
            arr_size.disabled=false;
            arr_gen.disabled=false;
            arr_speed.disabled=false;
        }
    },c_delay+=delay_time);
}