let subbmit = document.getElementById("sign-up")
let email = document.getElementById("inputEmail")
let userName = document.getElementById("inputUserName")
let password = document.getElementById("inputPassword")
let massage = document.getElementById("massage")

const register = async() => {
    let user = {
        userName: userName.value,
        Password: password.value,
        Email: email.value
    }
    let postUser = await fetch('https://6350d871dfe45bbd55afb4ff.mockapi.io/MuseumAsia/user', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(user)  
    })

    if(postUser.status === 201){
        console.log("berhasil terdaftar")
        massage.innerHTML = `<p>Berhasil Terdaftar, silahkan login kembali</p>`
    } else{
        console.log("maaf, terjadi masalah. Silahkan daftar ulang")
    }

    let kembalian = postUser.json()
    return kembalian;

}

subbmit.addEventListener("submit", (e) =>{
    e.preventDefault();
    register() 
})