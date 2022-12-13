//created event listener
//for calling get api
function makeRequest() {
    console.log("Show Button clicked");
    //create xhr object
    const xhr = new XMLHttpRequest();
    //give url
    const url = "http://localhost:3000/api/user";

    //called open method of xhr object which take 3 parameters
    xhr.open("GET", url, true);
    console.log('READYSTATE: ', xhr.readyState)
    xhr.onreadystatechange = function () {
        console.log('READYSTATE: ', xhr.readyState)
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log(xhr);
                console.log(xhr.response);
                let contactList = JSON.parse(xhr.response) ?? [];
                // // for get request through id response converted into object and stored in list variable
                // let list = JSON.parse(xhr.response);
                // //list object stored in contact list array 
                // let  contactList=[list];
                table.innerHTML = ``
                //looping data and show data in table
                contactList.forEach(function (value, id) {

                    const table = document.getElementById('table')

                    table.innerHTML += `
            <tr>
                <td>${value.id}</td>
                <td>${value.fullName}</td>
                <td>${value.email}</td>
                <td>${value.contact}</td>
                <td>
                    <button type="button" id="findBtn" onclick="findData('${value.id}','${value.fullName}','${value.contact}','${value.email}')",>Edit
                    </button>
                
                </td>
                <td>
                    <button type="button" id="deleteBtn" onclick="removeData('${value.id}')">Delete
               </button>
               
                </td>
            </tr>`
                })

            }

            else {
                console.log("problem occurred")
            }
        }
    };
    xhr.send();
}


//for calling post api
function save() {

    const item = {
        fullName: document.getElementById('fullName').value,
        contact: document.getElementById('contact').value,
        email: document.getElementById('email').value,

    }
    // console.log(list);
    console.log(item)
    console.log("Save Button clicked");
    const xhr = new XMLHttpRequest();
    const urlPost = "http://localhost:3000/api/user";

    xhr.open("POST", urlPost, true);

    // console.log('READYSTATE', xhr.readyState);
    xhr.onreadystatechange = function () {
        console.log('READYSTATE', xhr.readyState);
        if (xhr.readyState === XMLDocument.XMLHttpRequest, this.DONE) {
            if (xhr.status === 200) {
                console.log(xhr);

            }

        }

    }
    xhr.setRequestHeader("Content-type", "application/json;Charset=UTF-8");

    xhr.send(JSON.stringify(item))
    alert("data added successfully")

}

//for calling Delete api
function removeData(id) {
    if (confirm("Do you want delete data")) {
        console.log("remove button clicked");
        console.log(id)
        const xhr = new XMLHttpRequest();
        const url = `http://localhost:3000/api/user/${id}`
        xhr.open("DELETE", url, true);
        xhr.onreadystatechange = function () {
            console.log('READYSTATE', xhr.readyState);
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log(xhr);
                    console.log(xhr.response);
                    alert("data removed successfully")
                }
            }
        }
        xhr.send();
        makeRequest();
    }

    else {
        alert("data not deleted")
    }

}


//patch method
function findData(idData,fullNameData, emailData, contactData) {
    console.log("edit button clicked");
    document.getElementById('fullName').value =fullNameData
    document.getElementById('contact').value = emailData
    document.getElementById('email').value = contactData
    getData(idData); 
}
function getData(id){
    function saveClick(){
    let item = [
        fullName= document.getElementById('fullName').value,
        contact= document.getElementById('contact').value,
        email= document.getElementById('email').value,

    ]
    console.log(item)
}

    if (confirm("Do you want update data")) {
        const btn=document.getElementById("twoBtn")
        btn.addEventListener("onclick",getData);
      
       // console.log(getData)   
    // const xhr = new XMLHttpRequest();
    //  const url = `http://localhost:3000/api/user/${id}`
    // xhr.open("PATCH", url, true);
    // xhr.onreadystatechange = function () {
    //     console.log('READYSTATE', xhr.readyState);
    //     if (xhr.readyState === XMLHttpRequest.DONE) {
    //         if (xhr.status === 200) {
    //             console.log(xhr);
    //             console.log(xhr.response);
    //             alert("data updated successfully")
    //         }
    //     }
    // }
    // xhr.setRequestHeader("Content-type", "application/json;Charset=UTF-8");
    // xhr.send(JSON.stringify(body))
}
else {
    alert("data not updated")
}



}

document.getElementById("btnLogin").addEventListener("click", makeRequest);
const btn=document.getElementById("twoBtn")
btn.addEventListener("onclick", save);
btn.addEventListener("onclick", findData);
document.getElementById("deleteBtn").addEventListener("onclick", removeData);
document.getElementById("findBtn").addEventListener("onclick", findData);


