let col = document.querySelector(".container-dev");

let getData = async () => {
  let response = await fetch(
    `https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/developer`
  );
  let movie = await response.json();
  let print = "";
  console.log(movie);
  movie.forEach((item) => {
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
    col.innerHTML = print;
  });
  let displayKhai = document.querySelectorAll("#rowDev");
  displayKhai[1].style.flexDirection = "row-reverse";
  let titleKhai = document.querySelectorAll("#card-body");
  titleKhai[1].style.textAlign = "right";
};

getData();

let col1 = document.querySelector(".carousel-inner #row1");
let col2 = document.querySelector(".carousel-inner #row2");
let col3 = document.querySelector(".carousel-inner #row3");

let getData2 = async () => {
  let response = await fetch(
    `https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/carousel`
  );
  let movie2 = await response.json();
  let print2 = "";
  console.log(movie2);
  movie2.splice(0,4).forEach((item) => {
    console.log(item);
    print2 += `<div class="col">
    <div class="card" style="width: 14rem">
      <img src="${item.img}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${item.object_name}</h5>
        <p class="card-text">
        ${item.description}
        </p>
        <p class="card-text">
        ${item.provenience}
        </p>
        <a href="${item.url}" class="btn btn-primary">Click Here</a>
      </div>
    </div>
  </div>`;
    col1.innerHTML = print2;
  });

  let print3=""
  console.log(movie2);
  movie2.splice(0,4).forEach((item) => {
    console.log(item);
    print3 += `<div class="col">
    <div class="card" style="width: 14rem">
      <img src="${item.img}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${item.object_name}</h5>
        <p class="card-text">
        ${item.description}
        </p>
        <p class="card-text">
        ${item.provenience}
        </p>
        <a href="${item.url}" class="btn btn-primary">Click Here</a>
      </div>
    </div>
  </div>`;
    col2.innerHTML = print3;
  });

  let print4=""
  console.log(movie2);
  movie2.splice(0,4).forEach((item) => {
    console.log(item);
    print4 += `<div class="col">
    <div class="card" style="width: 14rem">
      <img src="${item.img}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${item.object_name}</h5>
        <p class="card-text">
        ${item.description}
        </p>
        <p class="card-text">
        ${item.provenience}
        </p>
        <a href="${item.url}" class="btn btn-primary">Click Here</a>
      </div>
    </div>
  </div>`;
    col3.innerHTML = print4;
  });
 


  
};

getData2();