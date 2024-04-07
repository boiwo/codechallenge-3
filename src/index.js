// Your code here
//Frontend logic
document.addEventListener('DOMContentLoaded',(Event) =>{
    console.log("before")
    
})
let ul = document.createElement('ul')
let li = document.createElement('li')

ul.appendChild(li)
fetch("http://localhost:3000/movies")

  .then(ben => ben.json())
  .then(movies => {
    console.log(movies);
  })

function displayMovies(movies){

  return movies = movies.map((movies)=>{
      return`
    <div class="content"><div class="card" style="width: 18rem;">
              
       <img src="${movies.title}https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg" class="card-img-center" alt="image" height="350" width="350">  
    
        <div class="card-body">
        <h5 class="card-title">${movies.title_sold}</h5>
        <p class="card-text">${movies.poster}</p>
      <form class="poster">
      
        <div class="description">
           <div id="film-info"> [INSERT MOVIE DESCRIPTION HERE]<div>
           <span id="showtime" class="ui label">[SHOWTIME]</span>
          <span id="ticket-num">X</span> remaining tickets
          <button id="buy-ticket" onclick ="alert" class="ui orange button">Buy Ticket</button>
      </form>
  
    </div>
    `
  })
 const moviesContainer = document.getElementById("all-movies")
 moviesContainer.innerHTML = moviesCodes
}
function viewMovies(){
  const button = document.querySelectorAll(".button-view")
  console.log(buttonviews);
}
function methodsubmit(){
  const forms = document.querySelectorAll("form.poster")
  forms.addEventListener("submit",function(event){
    event.preventDefault();
    console.log
  })
}

 const  baseUrl ="http://localhost:3000"

//business logic


function addInterestingMovie(interestingMovies){
  fetch(`${baseUrl}/favorite`,{
    method:"post",
    headers:{
      "content-Type":"application/json",
      "Accept":"application/json"
    },
    body:JSON.stringify(interestingMovies)

    })
  
}