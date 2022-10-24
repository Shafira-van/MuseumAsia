let subbmitSignUp = document.getElementById("sign-up")
let emailSignUp = document.getElementById("inputEmailSignUp")
let userNameSignUp = document.getElementById("inputUserNameSignUp")
let passwordSignUp = document.getElementById("inputPasswordSignUp")
let massageSignUp = document.getElementById("massage")

const register = async() => {
    let user = {
        userName: userNameSignUp.value,
        Password: passwordSignUp.value,
        Email: emailSignUp.value
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
        alert("Berhasil Terdaftar, silahkan login kembali")
        location.href="sign-in.html"
    } else{
        console.log("maaf, terjadi masalah. Silahkan daftar ulang")
    }

    let kembalian = postUser.json()
    return kembalian;

}

subbmitSignUp.addEventListener("submit", (e) =>{
    e.preventDefault();
    register() 
})

//=========================================================================================
// ==============================================Sign-In===================================
// ========================================================================================


