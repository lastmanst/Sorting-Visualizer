function Quick(){

    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="O(NlogN)";
    document.getElementById("Time_Best").innerText="(NlogN)";

    document.getElementById("Space_Worst").innerText="O(logN)";
    c_delay=0;

    quic_part(0,array_size-1);
    enable_buttons();






}
function partition(s,e){

    var i= s-1;
    var pi= div_size[e];
    div_update(divs[e],div_size[e],"yellow");

    for(var j=s;j<=e-1;j++){
        
        

        if(div_size[j]<pi){
            i++;
            div_update(divs[j],div_size[j],"yellow");

            div_update(divs[j],div_size[j],"red");
            div_update(divs[i],div_size[i],"red");
            var temp= div_size[j];
            div_size[j]=div_size[i];
            div_size[i]=temp;

            

            div_update(divs[j],div_size[j],"red");
            div_update(divs[i],div_size[i],"red");

            div_update(divs[j],div_size[j],"blue");
            div_update(divs[i],div_size[i],"blue");
        }


    }
    div_update(divs[i+1],div_size[i+1],"red");
    div_update(divs[e],div_size[e],"red");
    var temp = div_size[e];
    div_size[e]= div_size[i+1];
    div_size[i+1]=temp;
    div_update(divs[i+1],div_size[i+1],"red");
    div_update(divs[e],div_size[e],"red");
    for(var t=i;t<=e;t++){
        div_update(divs[t],div_size[t],"green");

    }
    return i+1;

}

function quic_part(s,e){


    if(s<e){

        var pi= partition(s,e);
        quic_part(s,pi-1);
        quic_part(pi+1,e);

    }
}