//for calling get api so that data will show in table
function gateMethodData() {
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
                    <button type="hidden" id="findBtn" onclick="editData('${value.id}','${value.fullName}','${value.contact}','${value.email}')",>Edit
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
function postData() {
    //if value is empty then execute post api
    if (document.getElementById("hideId").value === "") {
        //form field data stored in item variable
        const item = {
            fullName: document.getElementById('fullName').value,
            contact: document.getElementById('contact').value,
            email: document.getElementById('email').value,
        }
        console.log(item)
        console.log("Save Button clicked");
        const xhr = new XMLHttpRequest();
        const urlPost = "http://localhost:3000/api/user";
        xhr.open("POST", urlPost, true);
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
    //if value is not null then execute update api
    else if (document.getElementById("hideId").value !== "") {
        //taken hidden id from table so that we can use in url
        const fillId = document.getElementById('hideId').value
        //form field data stored in dataForm variable
        let dataForm = {
            id: document.getElementById('hideId').value,
            fullName: document.getElementById('fullName').value,
            contact: document.getElementById('contact').value,
            email: document.getElementById('email').value,
        }
        if (confirm("Do you want update data")) {
            const xhr = new XMLHttpRequest();
            const url = `http://localhost:3000/api/user/${fillId}`
            xhr.open("PATCH", url, true);
            xhr.onreadystatechange = function () {
                console.log('READYSTATE', xhr.readyState);
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        console.log(xhr);
                        console.log(xhr.response);
                    }
                }
            }
            xhr.setRequestHeader("Content-type", "application/json;Charset=UTF-8");
            xhr.send(JSON.stringify(dataForm));
            alert("data updated successfully");
        }
        else {
            alert("data not updated")
        }

    }
}
//for calling Delete api
// take id from value.id objects click event
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
                }
            }
        }
        xhr.send();
        alert("data removed successfully")
    }
    else {
        alert("data not deleted")
    }
}
//patch method
// take data from edit button onclick event show on form field for updating
function editData(idData, fullNameData, emailData, contactData) {
    console.log("edit button clicked");
    document.getElementById('hideId').value = idData
    document.getElementById('fullName').value = fullNameData
    document.getElementById('contact').value = emailData
    document.getElementById('email').value = contactData
}
//get api event handler
document.getElementById("loginBtn").addEventListener("click", gateMethodData);
//for post and update api event handler
document.getElementById("saveBtn").addEventListener("onclick", postData);
//delete api event handler
document.getElementById("deleteBtn").addEventListener("onclick", removeData);



