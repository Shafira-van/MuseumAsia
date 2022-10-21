let submit = document.getElementById("sign-in")
let userName = document.getElementById("inputUserName")
let password = document.getElementById("inputPassword")

const signIn =async() => {
    let getUser = await fetch('https://6350d871dfe45bbd55afb4ff.mockapi.io/MuseumAsia/user')
    let result = await getUser.json()

    // console.log(result)
    // result.forEach(element => {
    //     console.log(element.userName, userName.value)
    //     console.log(element.Password, password.value)

    //     if(userName.value === element.userName && password.value === element.Password){
    //         console.log("data ditemukan")
            
    //     } else{
    //         console.log("data tida ditemukan")
    //     }
    // });


    const found = result.find(element => {
        return userName.value === element.userName && password.value === element.Password
    }); 
    console.log(found)

  
    
}

submit.addEventListener("submit", (e) =>{
    e.preventDefault();
    signIn()
})
