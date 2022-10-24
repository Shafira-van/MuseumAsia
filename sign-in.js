let submit = document.getElementById("sign-in")
let userName = document.getElementById("inputUserName")
let password = document.getElementById("inputPassword")
let massage = document.getElementById("massage")

const signIn =async() => {
    let getUser = await fetch('https://6350d871dfe45bbd55afb4ff.mockapi.io/MuseumAsia/user')
    let result = await getUser.json()
    let found = result.find(element => {
        return userName.value === element.userName && password.value === element.Password
    }); 
    console.log(found)

    if(!found){
        console.log("gagal");
        alert ("username dan password anda belum terdaftar, silahkan mendaftar")
    }else {
        console.log("berhasil");
        window.open("home.html", "_self");
    }  
   

    
}

submit.addEventListener("submit", (e) =>{
    e.preventDefault();
    signIn()
})
