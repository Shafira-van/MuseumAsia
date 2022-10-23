let negara = document.querySelector(".carousel-inner #row3");
let url ="https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/negara"

const genres = [
  {
    "id": 1,
    "name": "Jepang"
  },
  {
    "id": 2,
    "name": "China"
  },
  {
    "id": 3,
    "name": "India"
  },
  {
    "id": 4,
    "name": "Burma"
  },
  {
    "id": 5,
    "name": "Korea"
  },
  {
    "id": 6,
    "name": "Indonesia"
  }
]

async function searchData(){
  let response = await fetch(url)
  let result = await response.json()
  let print1=""
  let print2=""
  let print3=""
  let print4=""
  let print5=""
  let print6=""
  let data1 ="Jepang"
  let hasilPencarian1=[]
  let data2 ="China"
  let hasilPencarian2=[]
  let data3 ="India"
  let hasilPencarian3=[]
  let data4 ="Burma"
  let hasilPencarian4=[]
  let data5 ="Korea"
  let hasilPencarian5=[]
  let data6 ="indonesia"
  let hasilPencarian6=[]
  result.forEach((item)=>{
    if(item.provenience.includes(data1)) {
      hasilPencarian1.push(item)
      print1 += `<div class="col">
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
      negara.innerHTML = print1;
    }
    
  })
  console.log(hasilPencarian1)
  console.log(hasilPencarian2)
  console.log(hasilPencarian3)
  console.log(hasilPencarian4)
  console.log(hasilPencarian5)
  console.log(hasilPencarian6)
}

searchData()


//  let hasilDariMuseum = {
//     status: 200,
//     url:"https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/negara"
//     result: [
//       {id:1, title: "Jepang"},
//       {id:2, title: "China"},
//       {id:3, title: "India"},
//       {id:4, title: "Burma"},
//       {id:5, title: "Korea"},
//       {id:6, title: "Indonesia"},
//     ]
//  }
getMuseum(url);

function getMuseum(url) {
  lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        if(data.length !== 0){
            showMuseum(data);
            currentPage = data.page;
            nextPage = currentPage + 1;
            prevPage = currentPage - 1;
            totalPages = data.total_pages;

            current.innerText = currentPage;

            if(currentPage <= 1){
              prev.classList.add('disabled');
              next.classList.remove('disabled')
            }else if(currentPage>= totalPages){
              prev.classList.remove('disabled');
              next.classList.add('disabled')
            }else{
              prev.classList.remove('disabled');
              next.classList.remove('disabled')
            }

            

        }else{
            main.innerHTML= `<h1 class="no-results">No Results Found</h1>`
        }
       
    })

}

function showMuseum(data) {
  main.innerHTML = '';

  data.forEach(museum => {
      const {description, img, object_name, provenience, url} = museum;
      const museum1 = document.createElement('div');
      museum1.classList.add('museum');
      museum1.innerHTML = `<div class="col">
      <div class="card" >
        <img src="${img}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${object_name}</h5>
          <p class="card-text" >
          ${provenience}
          </p>
          <p class="card-text" id="cardDesc">
          ${description}
          </p>
          <a href="${url}" class="btn btn-primary">Show more</a>
        </div>
      </div>
    </div>`

      main.appendChild(museum1);

      document.getElementById(id).addEventListener('click', () => {
        console.log(id)
        openNav(museum)
      })
  })
}

const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');
const tagsEl = document.getElementById('tags');

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const current = document.getElementById('current')

var currentPage = 1;
var nextPage = 2;
var prevPage = 3;
var totalPages = 5;

var selectedGenre = []
setGenre();
function setGenre() {
    tagsEl.innerHTML= '';
    genres.forEach(genre => {
        const t = document.createElement('div');
        t.classList.add('tag');
        t.id=genre.id;
        t.innerText = genre.name;
        t.addEventListener('click', () => {
            if(selectedGenre.length == 0){
                selectedGenre.push(genre.id);
            }else{
                if(selectedGenre.includes(genre.id)){
                    selectedGenre.forEach((id, idx) => {
                        if(id == genre.id){
                            selectedGenre.splice(idx, 1);
                        }
                    })
                }else{
                    selectedGenre.push(genre.id);
                }
            }
            console.log(selectedGenre)
            getMuseum(url)
            highlightSelection()
        })
        tagsEl.append(t);
    })
}

function highlightSelection() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.classList.remove('highlight')
    })
    clearBtn()
    if(selectedGenre.length !=0){   
        selectedGenre.forEach(id => {
            const hightlightedTag = document.getElementById(id);
            hightlightedTag.classList.add('highlight');
        })
    }

}

function clearBtn(){
    let clearBtn = document.getElementById('clear');
    if(clearBtn){
        clearBtn.classList.add('highlight')
    }else{
            
        let clear = document.createElement('div');
        clear.classList.add('tag','highlight');
        clear.id = 'clear';
        clear.innerText = 'Clear x';
        clear.addEventListener('click', () => {
            selectedGenre = [];
            setGenre();            
            getMuseum(url);
        })
        tagsEl.append(clear);
    }
    
}


function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function getColor(vote) {
  if(vote>= 8){
      return 'green'
  }else if(vote >= 5){
      return "orange"
  }else{
      return 'red'
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  selectedGenre=[];
  setGenre();
  if(searchTerm) {
      getMuseum(url)
  }else{
      getMuseum();
  }

})

prev.addEventListener('click', () => {
  if(prevPage > 0){
  pageCall(prevPage);
   }
})

next.addEventListener('click', () => {
   if(nextPage <= totalPages){
     pageCall(nextPage);
    }
})

function pageCall(page){
let urlSplit = url.split('?');
let queryParams = urlSplit[1].split('&');
let key = queryParams[queryParams.length -1].split('=');
if(key[0] != 'page'){
  let url = lastUrl + '&page='+page
  getMuseum(url);
}else{
  key[1] = page.toString();
  let a = key.join('=');
  queryParams[queryParams.length -1] = a;
  let b = queryParams.join('&');
  let url = urlSplit[0] +'?'+ b
  getMuseum(url);
}
}
