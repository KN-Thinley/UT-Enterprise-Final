function login(){
    var _data = {
        userName: document.getElementById("email").value,
        password: document.getElementById("pw").value
    }

    fetch("/admin/login", {
        //we use the POST for login to post credentials to check whether a user exist or not
        method:"POST",
        body:JSON.stringify(_data),
        headers: {"Content-type": "application/json; charset+UTF-8"}
    })
    .then(response => {
        if (response.ok){
            window.open("./adminDashboard.html", "_self")
        }else {
            throw new Error(response.statusText)
        }
    }).catch(e => {
        if (e == "Error: Unauthorized"){
            alert(e + ". Credentials does not match!")
            return
        }
    })
}

function logout(){
    fetch("/logout")
    .then(response => {
        if (response.ok){
            window.open("index.html")
        }else{
            throw new Error(response.statusText)
        }
    }).catch(e => {
        alert(e)
    })
}
