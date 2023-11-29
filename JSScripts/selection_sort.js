function Selection_short(){

    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="O(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N^2)";

    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++){

        div_update(divs[i],div_size[i],"red");

        var index_min=i;

        for(var j=i+1;j<array_size;j++){
            div_update(divs[j],div_size[j],"yellow");

            if(div_size[index_min]>div_size[j]){

                if(index_min!=i){
                    div_update(divs[index_min],div_size[index_min],"blue");
                }
                index_min=j;
                div_update(divs[index_min],div_size[index_min],"red");
            }
            else{
                div_update(divs[j],div_size[j],"blue");
            }

            
        }

        if(index_min!=i){

            var temp= div_size[index_min];
            div_size[index_min]=div_size[i];
            div_size[i]=temp;
            div_update(divs[index_min],div_size[index_min],"red");
            div_update(divs[i],div_size[i],"red");
            div_update(divs[index_min],div_size[index_min],"blue");
        }
        div_update(divs[i],div_size[i],"green");



    }
    div_update(divs[i],div_size[i],"green");
    enable_buttons();

    

}