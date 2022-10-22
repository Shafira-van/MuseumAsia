let negara = document.querySelector(".carousel-inner #row3");
let url ="https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/negara"

async function searchData(){
  let response = await fetch(url)
  let result = await response.json()
  let print5=""
  let data4 ="China"
  let hasilPencarian=[]
  result.forEach((item)=>{
    if(item.provenience.includes(data4)) {
      hasilPencarian.push(item)
      print5 += `<div class="col">
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
      negara.innerHTML = print5;
    }
  })
  console.log(hasilPencarian)
}

searchData()
const genres = [
    {
      "id": 28,
      "name": "indonesia"
    },
    {
      "id": 12,
      "name": "burma"
    },
    {
      "id": 16,
      "name": "jepang"
    },
    {
      "id": 35,
      "name": "korea"
    },
    {
      "id": 80,
      "name": "india"
    },
    {
      "id": 99,
      "name": "china"
    }
  ]

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
var lastUrl = '';
var totalPages = 100;

var selectedGenre = []


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
            getMuseum(API_URL);
        })
        tagsEl.append(clear);
    }
    
}

getMuseum();

function getMuseum(url) {
  lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        if(data.results.length !== 0){
            showMuseum(data.results);
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

            tagsEl.scrollIntoView({behavior : 'smooth'})

        }else{
            main.innerHTML= `<h1 class="no-results">No Results Found</h1>`
        }
       
    })

}


function showMuseum(data) {
    main.innerHTML = '';

    data.forEach(museum => {
        const {title, poster_path, vote_average, overview, id} = Museum;
        const museum = document.createElement('div');
        museum.classList.add('museum');
        museum.innerHTML = `
             <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">

            <div class="museum-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">

                <h3>Overview</h3>
                ${overview}
                <br/> 
                <button class="know-more" id="${id}">Know More</button
            </div>
        
        `

        main.appendChild(Museum);

        document.getElementById(id).addEventListener('click', () => {
          console.log(id)
          openNav(museum)
        })
    })
}

const overlayContent = document.getElementById('overlay-content');
/* Open when someone clicks on the span element */
function openNav(Museum) {
  let id = Museum.id;
  fetch().then(res => res.json()).then()
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


const leftArrow = document.getElementById('left-arrow')
const rightArrow = document.getElementById('right-arrow')


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
        getMuseum(searchURL+'&query='+searchTerm)
    }else{
        getMuseum(API_URL);
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
  let urlSplit = lastUrl.split('?');
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
