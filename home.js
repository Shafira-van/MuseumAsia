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


let getData2 = async () => {
  let response = await fetch(
    `https://raw.githubusercontent.com/Shafira-van/MuseumAsia/dev/developer.json`
  );
  let movie2 = await response.json();

  console.log(movie2);
  

};

getData2();