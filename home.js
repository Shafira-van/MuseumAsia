let dev = document.querySelector(".container-dev");

let getProfil = async () => {
  let response = await fetch(
    `https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/developer`
  );
  let profil = await response.json();
  let print = "";
  profil.forEach((item) => {
    console.log(item);
    print += `<div class="card mb-3">
   <div class="row g-0" id="rowDev">
     <div class="col-md-4">
       <img src="${item.gambar}" class="img-fluid rounded-start" alt="..." />
     </div>
     <div class="col-md-8">
       <div class="card-body" id="card-body">
         <h5 class="card-title">${item.nama}</h5>
         <p class="card-text">
         ${item.universitas}
         </p>
         <p class="card-text">
         ${item.jurusan}
         </p>
       </div>
     </div>
   </div>
 </div>`;
    dev.innerHTML = print;
  });
  let displayKhai = document.querySelectorAll("#rowDev");
  displayKhai[1].style.flexDirection = "row-reverse";
  let titleKhai = document.querySelectorAll("#card-body");
  titleKhai[1].style.textAlign = "right";
};

getProfil();

let car1 = document.querySelector(".carousel-inner #row1");
let car2 = document.querySelector(".carousel-inner #row2");
let car3 = document.querySelector(".carousel-inner #row3");

let getBarang = async () => {
  let response = await fetch(
    `https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/carousel`
  );
  let barang = await response.json();
  let print2 = "";
  barang.splice(0, 4).forEach((item) => {
    console.log(item);
    print2 += `<div class="col">
    <div class="card" >
      <img src="${item.img}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${item.object_name}</h5>
        <p class="card-text" >
        ${item.provenience}
        </p>
        <p class="card-text" id="cardDesc">
        ${item.description}
        </p>
        <a href="${item.url}" class="btn btn-primary">Show more</a>
      </div>
    </div>
  </div>`;
    car1.innerHTML = print2;
  });

  let print3 = "";
  barang.splice(0, 4).forEach((item) => {
    console.log(item);
    print3 += `<div class="col">
    <div class="card">
      <img src="${item.img}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${item.object_name}</h5>
        <p class="card-text" >
        ${item.provenience}
        </p>
        <p class="card-text" id="cardDesc">
        ${item.description}
        </p>
        <a href="${item.url}" class="btn btn-primary">Show more</a>
      </div>
    </div>
  </div>`;
    car2.innerHTML = print3;
  });

  let print4 = "";
  barang.splice(0, 4).forEach((item) => {
    console.log(item);
    print4 += `<div class="col">
    <div class="card" >
      <img src="${item.img}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${item.object_name}</h5>
        <p class="card-text" >
        ${item.provenience}
        </p>
        <p class="card-text" id="cardDesc">
        ${item.description}
        </p>
        <a href="${item.url}" class="btn btn-primary">Show more</a>
      </div>
    </div>
  </div>`;
    car3.innerHTML = print4;
  });
};

getBarang();

// let negara = document.querySelector(".carousel-inner #row3");
// let url ="https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/negara"

// async function searchData(){
//   let response = await fetch(url)
//   let result = await response.json()
//   let print5=""
//   let data4 ="China"
//   let hasilPencarian=[]
//   result.forEach((item)=>{
//     if(item.provenience.includes(data4)) {
//       hasilPencarian.push(item)
//       print5 += `<div class="col">
//       <div class="card" >
//         <img src="${item.img}" class="card-img-top" alt="..." />
//         <div class="card-body">
//           <h5 class="card-title">${item.object_name}</h5>
//           <p class="card-text" >
//           ${item.provenience}
//           </p>
//           <p class="card-text" id="cardDesc">
//           ${item.description}
//           </p>
//           <a href="${item.url}" class="btn btn-primary">Show more</a>
//         </div>
//       </div>
//     </div>`;
//       negara.innerHTML = print5;
//     }
//   })
//   console.log(hasilPencarian)
// }

// searchData()