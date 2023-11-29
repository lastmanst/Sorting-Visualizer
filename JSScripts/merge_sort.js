function Merge_short(){

    /// complexity of every case

    document.getElementById("Time_Worst").innerText="O(Nlog(N))";
    document.getElementById("Time_Average").innerText="O(Nlog(N))";
    document.getElementById("Time_Best").innerText="Ω(Nlog(N))";

    document.getElementById("Space_Worst").innerText="O(N)";
    c_delay=0;

    merge_part(0,array_size-1);
    enable_buttons();

    
}
function Combine(s,m,e){

    var p= s;
    var q= m+1;
    var arr=[];
    //var ar
    var k=0;
    for(var i=s;i<=e;i++){

        if(p>m){

            arr[k]= div_size[q];
            k++;
            q++;
            div_update(divs[q-1],div_size[q-1],"red");
        }
        else if(q>e){
            arr[k]=div_size[p];
            k++;
            p++;
            div_update(divs[p-1],div_size[p-1],"red");
        }

        else if(div_size[p]<div_size[q]){
            arr[k]=div_size[p];
            k++;
            p++;
            div_update(divs[p-1],div_size[p-1],"red");
        }
        else{
            arr[k]= div_size[q];
            k++;
            q++;
            div_update(divs[q-1],div_size[q-1],"red");
        }
    }
    for( var t=0;t<k;t++){
        div_size[s++]=arr[t];
        
        div_update(divs[s-1],div_size[s-1],"green");
    }


}

function merge_part(s,e){
    

    if(s<e){

        var m= Math.floor((s+e)/2);
        div_update(divs[m],div_size[m],"yellow");
        merge_part(s,m);
        merge_part(m+1,e);
        Combine(s,m,e);
        
        

    }

}