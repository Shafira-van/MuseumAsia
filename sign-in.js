let submit = document.getElementById("sign-in")
let userName = document.getElementById("inputUserName")
let password = document.getElementById("inputPassword")
let massage = document.getElementById("massage")
let popUp = document.getElementById("popUp")
let button = document.getElementById("buttonSubmit")

const x = function cek() {
  button.setAttribute("data-bs-toggle", "modal");
  button.setAttribute("data-bs-target", "#exampleModalToggle")
}

const signIn =async() => {
    let getUser = await fetch('https://6350d871dfe45bbd55afb4ff.mockapi.io/MuseumAsia/user')
    let result = await getUser.json()
    const found = result.find(element => {
        return userName.value === element.userName & password.value === element.Password
    }); 
    console.log(found)

    if(!found){
      console.log("gagal");
      massage.innerHTML = `<p> username dan password anda belum terdaftar, silahkan mendaftar </p>`
    } else {
      console.log("berhasil");
      window.open("home.html", "_self");
    }  
}

submit.addEventListener("submit", (e) =>{
    e.preventDefault();
    signIn()
})


