//created event listener
document.getElementById("btnLogin").addEventListener("onclick",makeRequest);

function makeRequest(){
    console.log("Button clicked");
    //create xhr object
    const xhr=new XMLHttpRequest();
    xhr.open("GET","data.json",true);
    console.log('READYSTATE: ',xhr.readyState)
    xhr.onreadystatechange=function(){
        console.log('READYSTATE: ',xhr.readyState)
        if(xhr.readyState ==4 && this.status==200){
            if(xhr.status=200){
           console.log(this.responseText);
            }
            else{
                console.log("wrong content")
            }
        }
    };
    xhr.send();
}