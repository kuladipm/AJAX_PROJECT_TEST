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
                table.innerHTML = ``
                //looping data and show data in table
                contactList.forEach(function (value, i) {

                    var table = document.getElementById('table')

                    table.innerHTML += `
            <tr>
                <td>${value.id}</td>
                <td>${value.fullName}</td>
                <td>${value.email}</td>
                <td>${value.contact}</td>
                <td>
                    <button type="button" onclick="find(${value.id})">Edit
                    </button>
                
                </td>
                <td>
                    <button type="button" onclick="removeData(${value.id})">Delete
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
}

//for calling update api
function update() {

    const item = {
        id: document.getElementById('id').value,
        contact: document.getElementById('contact').value,
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,

    }
    let list = JSON.stringify(item)
    //contactList.push(item)
    console.log(list);
    console.log("Save Button clicked");
    const xhr = new XMLHttpRequest();
    const urlPost = "http://localhost:3000/api/user/update/4";
    xhr.open("POST", urlPost, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(list)
    // console.log('READYSTATE', xhr.readyState);
    xhr.onreadystatechange = function () {
        console.log('READYSTATE', xhr.readyState);
        if (xhr.readyState === XMLDocument.XMLHttpRequest, this.DONE) {
            if (xhr.status === 200) {
                // console.log(xhr);


            }

        }

    }

}
document.getElementById("btnLogin").addEventListener("click", makeRequest);
document.getElementById("saveBtn").addEventListener("Onclick", save);
// document.getElementById("updateBtn").addEventListener("click", update);
