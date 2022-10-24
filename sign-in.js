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
        alert ("username dan password anda belum terdaftar, silahkan SignUp")
    }else {
        JSON.stringify(found)
        localStorage.setItem('username', userName.value);
        localStorage.setItem('pw', password.value);
        location.href="home.html"
       
       
    }  
   

    
}

submit.addEventListener("submit", (e) =>{
    e.preventDefault();
    signIn()
})
