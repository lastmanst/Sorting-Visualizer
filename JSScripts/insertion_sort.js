function Insertion_short(){
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="O(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    document.getElementById("Space_Worst").innerText="O(1)";

    var c_delay=0;

    for(var i=1;i<array_size;i++){

        div_update(divs[i],div_size[i],"yellow");
        var key =div_size[i];
        j=i-1;

        while(j>=0 && div_size[j]>key){

            div_update(divs[j],div_size[j],"red"); /// colour update
            div_update(divs[j+1],div_size[j+1],"red");

            div_size[j+1]=div_size[j];
            div_update(divs[j],div_size[j],"red");//height update
            div_update(divs[j+1],div_size[j+1],"red");

            div_update(divs[j],div_size[j],"blue"); //colour update

            if(j==i-1){
                div_update(divs[j+1],div_size[j+1],"yellow");


            }
            else{
                div_update(divs[j],div_size[j],"blue");
            }
            j=j-1;


        }
        div_size[j+1]= key;

        for(var t=0;t<i;t++){

            div_update(divs[t],div_size[t],"green");

        }

        

        

        
    }
    div_update(divs[i-1],div_size[i-1],"green");


    enable_buttons();
}