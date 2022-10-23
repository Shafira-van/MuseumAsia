let negara = document.querySelector(".container-dev");
let text = document.querySelector(".text_negara");
let formCari = document.querySelector("#form");
let cari = document.querySelector("#cari");
let url ="https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/negara"
let data1 ="Burma"
let data2 ="China"
let data3 ="India"
let data4 ="Indonesia"
let data5 ="Japan"
let data6 ="Korea"

async function asia(){
    let response = await fetch(url)
    let result = await response.json()
    let print=""
    let hasilPencarian=[]
    result.splice(0,20).forEach((item)=>{
        hasilPencarian.push(item)
        print += `
        <div class="card">
           <img src="${item.img}" class="card-img-top" alt="...">
           <div class="card-body">
                <h5 class="card-title">${item.object_name}</h5>
                <p class="card-text" >  ${item.provenience} </p>
                <p class="card-text"> ${item.accession_credit_line}</p>
                <a href="${item.url}" class="btn btn-secondary">Show more</a>
           </div>
      </div>`
        negara.innerHTML = print;
      }
    )
    
  }

  asia()


formCari.addEventListener("submit",(event) => {
    event.preventDefault()
    cariHasil = cari.value
    async function search(){
        let response = await fetch(url)
        let result = await response.json()
        let print1=""
        let hasilPencarian1=[]
        result.forEach((item)=>{
    
          if(item.provenience.includes(cariHasil)||item.object_name.includes(cariHasil)) {
            hasilPencarian1.push(item)
            print1 += `
            <div class="card">
               <img src="${item.img}" class="card-img-top" alt="...">
               <div class="card-body">
                    <h5 class="card-title">${item.object_name}</h5>
                    <p class="card-text" >  ${item.provenience} </p>
                    <p class="card-text"> ${item.accession_credit_line}</p>
                    <a href="${item.url}" class="btn btn-secondary">Show more</a>
               </div>
          </div>`
            negara.innerHTML = print1;
            text.innerHTML =`<h2></h2>`
          }
          
         
        })
        
      }
      search();

    formCari.reset()
})
 
async function burma(){
    let response = await fetch(url)
    let result = await response.json()
    let print1=""
    let hasilPencarian1=[]
    result.forEach((item)=>{
      if(item.provenience.includes(data1)) {
        hasilPencarian1.push(item)
        print1 += `
        <div class="card">
           <img src="${item.img}" class="card-img-top" alt="...">
           <div class="card-body">
                <h5 class="card-title">${item.object_name}</h5>
                <p class="card-text" >  ${item.provenience} </p>
                <p class="card-text"> ${item.accession_credit_line}</p>
                <a href="${item.url}" class="btn btn-secondary">Show more</a>
           </div>
      </div>`
        negara.innerHTML = print1;
        text.innerHTML =`<h2> ${item.provenience}</h2>`
      }
    })
    
  }
  
async function china(){
  let response = await fetch(url)
  let result = await response.json()
  let print5=""
  let hasilPencarian2=[]
  result.forEach((item)=>{
    if(item.provenience.includes(data2)) {
      hasilPencarian2.push(item)
      print5 += `
      <div class="card">
         <img src="${item.img}" class="card-img-top" alt="...">
         <div class="card-body">
              <h5 class="card-title">${item.object_name}</h5>
              <p class="card-text" >  ${item.provenience} </p>
              <p class="card-text"> ${item.accession_credit_line}</p>
              <a href="${item.url}" class="btn btn-secondary">Show more</a>
         </div>
    </div>`
      negara.innerHTML = print5;
      text.innerHTML =`<h2> ${item.provenience}</h2>`
    }
  })
  
}

async function india(){
    let response = await fetch(url)
    let result = await response.json()
    let print3=""
    let hasilPencarian3=[]
    result.forEach((item)=>{
      if(item.provenience.includes(data3)) {
        hasilPencarian3.push(item)
        print3 += `
        <div class="card">
           <img src="${item.img}" class="card-img-top" alt="...">
           <div class="card-body">
                <h5 class="card-title">${item.object_name}</h5>
                <p class="card-text" >  ${item.provenience} </p>
                <p class="card-text"> ${item.accession_credit_line}</p>
                <a href="${item.url}" class="btn btn-secondary">Show more</a>
           </div>
      </div>`
        negara.innerHTML = print3;
        text.innerHTML =`<h2> ${item.provenience[0]}</h2>`
      }
    })
    
  }
  

  async function indonesia(){
    let response = await fetch(url)
    let result = await response.json()
    let print4=""
    let hasilPencarian4=[]
    result.forEach((item)=>{
      if(item.provenience.includes(data4)) {
        hasilPencarian4.push(item)
        print4 += `
        <div class="card">
           <img src="${item.img}" class="card-img-top" alt="...">
           <div class="card-body">
                <h5 class="card-title">${item.object_name}</h5>
                <p class="card-text" >  ${item.provenience} </p>
                <p class="card-text"> ${item.accession_credit_line}</p>
                <a href="${item.url}" class="btn btn-secondary">Show more</a>
           </div>
      </div>`
        negara.innerHTML = print4;
        text.innerHTML =`<h2> ${item.provenience[0]}</h2>`
      }
    })
    
  }
  
async function japan(){
  let response = await fetch(url)
  let result = await response.json()
  let print5=""
  let data5 ="Japan"
  let hasilPencarian5=[]
  result.forEach((item)=>{
    if(item.provenience.includes(data5)) {
      hasilPencarian5.push(item)
      print5 += `
      <div class="card">
         <img src="${item.img}" class="card-img-top" alt="...">
         <div class="card-body">
              <h5 class="card-title">${item.object_name}</h5>
              <p class="card-text" >  ${item.provenience} </p>
              <p class="card-text"> ${item.accession_credit_line}</p>
              <a href="${item.url}" class="btn btn-secondary">Show more</a>
         </div>
    </div>`
    negara.innerHTML = print5;
    text.innerHTML =`<h2> ${item.provenience[0]}</h2>`

    }
  })
  
}

async function korea(){
    let response = await fetch(url)
    let result = await response.json()
    let print6=""
    let hasilPencarian6=[]
    result.forEach((item)=>{
      if(item.provenience.includes(data6)) {
        hasilPencarian6.push(item)
        print6 += `
        <div class="card">
           <img src="${item.img}" class="card-img-top" alt="...">
           <div class="card-body">
                <h5 class="card-title">${item.object_name}</h5>
                <p class="card-text" >  ${item.provenience} </p>
                <p class="card-text"> ${item.accession_credit_line}</p>
                <a href="${item.url}" class="btn btn-secondary">Show more</a>
           </div>
      </div>`
        negara.innerHTML = print6;
        text.innerHTML =`<h2> ${item.provenience[0]}</h2>`
      }
    })
    
  }
