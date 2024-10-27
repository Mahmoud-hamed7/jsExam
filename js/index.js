
// تعريفات
let sitBut=document.querySelector('.fa-bars')
let rowElement=document.querySelector('#rowelement')
let serchBar=document.querySelector('#serchBar')
// console.log(serchBar);

let loding = document.querySelector('.loding')

 


// nav-sec
function openNav() {
  $('.navo').animate({left:"0"},500)
  sitBut.classList.replace('fa-bars','fa-xmark')
  
  
}
function closeNav(params) {
  $('.navo').animate({left:"-272.222px"},500)
  sitBut.classList.replace('fa-xmark','fa-bars')
}
closeNav()

$('.side-nav-right-side-but i').click(function (e) { 
  if($(".navo ").css('left')=='0px'){
    closeNav()
  }else{
    openNav()
  }
  
});


// display api home sec



getFood()
async  function getFood() {
  loding.classList.remove('d-none')

  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
  const data= await api.json()
  // console.log(data.meals);
  displayMeal(data.meals)
  serchBar.innerHTML=""
loding.classList.add('d-none')

  
}

// idMeal
// 
function displayMeal(arr) {
  var box = ``

  for (let i = 0; i< arr.length ; i++) {
    box +=
     ` <div class="col-md-3 ">
                <div onclick="getApiDetails('${arr[i].idMeal}')"  class="position-relative item img-hov bg-danger poniiter">

             <img src='${arr[i].strMealThumb}'  class="w-100 " alt="">    
             <div class="layer ">
                <div class="img-text  d-flex  h-100 ">
                <p class="fs-2 fw-bold position-relative  align-self-center">${arr[i].strMeal} </p>

                </div>
             </div>            
            </div>

        </div>`
    
  }
  rowElement.innerHTML = box

  
  
  
  
  
}


// display api catigory sec 


async function gatApiCat(info) {
loding.classList.remove('d-none')

   let catApi= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
   let catRespone = await catApi.json()
  //  console.log(catRespone);
   displayCat(catRespone.categories)
  serchBar.innerHTML=""
loding.classList.add  ('d-none')


   
  
}


function displayCat(arr) {
  var catBox = ``

  for (let i = 0; i< arr.length ; i++) {
    catBox +=
     ` <div class="col-md-3 ">
        
                <div onclick="getCatDetails('${arr[i].strCategory}')" class="position-relative item img-hov  overflow-hidden poniiter">

             <img  src='${arr[i].strCategoryThumb}'  class="w-100 " alt="">    
             <div  class="layer ">
                <div class="img-text  text-center h-100  ">
                <h3 class="fw-bold position-relative  ">${arr[i].strCategory}</h3>
                
                <p class="fw-bold position-relative  ">${arr[i].strCategoryDescription.split(" ").slice(0,20).join(' ')} </p>

                </div>
             </div>            
            </div>

        </div>`
    
  }
  rowElement.innerHTML = catBox
  // console.log(catBox);
  

  
}

async function getCatDetails(cat) {
loding.classList.remove('d-none')

  let catDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
  let catDetailsRespone= await catDetails.json()
  // console.log(catDetailsRespone);
  displayCatDetails(catDetailsRespone.meals)
loding.classList.add('d-none')


  
}

function displayCatDetails(arr) {
  
  let catBoxDetails = ``
  for (let i = 0; i< arr.length ; i++) {
    catBoxDetails +=
     ` <div class="col-md-3 ">
        
                <div onclick="getApiDetails('${arr[i].idMeal}')"  class="position-relative item img-hov   poniiter">

             <img src='${arr[i].strMealThumb}'  class="w-100 " alt="">    
             <div class="layer ">
                <div class="img-text d-flex justify-content-center align-content-center  text-center h-100  ">
                <h3 class="fw-bold position-relative  align-self-center ">${arr[i].strMeal}</h3>
                

                </div>
             </div>            
            </div>

        </div>`
    
  }
  
  rowElement.innerHTML = catBoxDetails
  
  
}



// display api  area third
async function getApiArea() {
loding.classList.remove('d-none')


  let areaApi=await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')

  let ApiRespone= await areaApi.json()
  // console.log(ApiRespone.meals);
  displayArea(ApiRespone.meals)
loding.classList.add('d-none')

} 

function displayArea(arr) {
  var AreaBox = ``

  for (let i = 0; i< arr.length ; i++) {
    AreaBox +=
     ` <div class="col-md-3  ">
        
                <div onclick="getApiAreaDetails('${arr[i].strArea}')" class="position-relative item  text-center poniiter">
            <i  class="fa-solid fa-house-laptop fa-4x  text-white"></i>
            <h3 class="text-white fw-bold "> ${arr[i].strArea}  </h3>            
            </div>

        </div>`
    
  }
  
  rowElement.innerHTML = AreaBox
 
  
}


// حطيت
async function getApiAreaDetails(cat) {
loding.classList.remove('d-none')

  let ApiAreaDetails =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cat}`)
  let ApiAreaDetailsRspone = await ApiAreaDetails.json()

  // console.log(ApiAreaDetailsRspone);
  displayApiAreaDetails(ApiAreaDetailsRspone.meals)
  serchBar.innerHTML=""
loding.classList.add('d-none')


}
 
function displayApiAreaDetails(arr) {
  
  let AreaBoxDetails = ``
  for (let i = 0; i< arr.length ; i++) {
    AreaBoxDetails +=
     ` <div class="col-md-3 ">
        
                <div onclick="getApiDetails('${arr[i].idMeal}')"  class="position-relative item img-hov   poniiter">

             <img src='${arr[i].strMealThumb}'  class="w-100 " alt="">    
             <div class="layer ">
                <div class="img-text d-flex justify-content-center align-content-center  text-center h-100  ">
                <h3 class="fw-bold position-relative  align-self-center ">${arr[i].strMeal}</h3>
                

                </div>
             </div>            
            </div>

        </div>`
    
  }
  
  rowElement.innerHTML = AreaBoxDetails
  
  
  
}

















// display api  ingrediant four
async function getInApi() {
loding.classList.remove('d-none')


  let ApiIng=await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
  let ResponeIng= await ApiIng.json()
  // console.log(ResponeIng.meals.slice(0,20));
  displayIng(ResponeIng.meals.slice(0,20))
loding.classList.add('d-none')

}

function displayIng(arr) {

  var ingBox = ``

  for (let i = 0; i< arr.length ; i++) {
    ingBox +=
     ` <div class="col-md-3  ">
        
                <div   onclick="getInApiDetails('${arr[i].strIngredient}')"  class="position-relative item  text-center poniiter">
            <i class="fa-solid fa-drumstick-bite fa-4x  text-white"></i>
            <h3 class="text-white fw-bold "> ${arr[i].strIngredient}  </h3> 
            <p class="text-white  fw-bold ">${arr[i].strDescription.split(" ").slice(0,20).join(' ')}</p>           
            </div>

        </div>`
    
  }
  rowElement.innerHTML = ingBox

  
}


async function getInApiDetails(ingrediant) {
loding.classList.remove('d-none')

  let InApiDetails=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediant}`)
  let InApiDetailsRespone =await InApiDetails.json()
  // console.log(InApiDetailsRespone);
  displayInApiDetails(InApiDetailsRespone.meals)
  serchBar.innerHTML=""
loding.classList.add('d-none')


}
// حطيت
function displayInApiDetails(arr) {

  
  let ingrediantBoxDetails = ``
  for (let i = 0; i< arr.length ; i++) {
    ingrediantBoxDetails +=
     ` <div class="col-md-3 ">
        
                <div onclick="getApiDetails('${arr[i].idMeal}')"  class="position-relative item img-hov   poniiter">

             <img src='${arr[i].strMealThumb}'  class="w-100 " alt="">    
             <div class="layer ">
                <div class="img-text d-flex justify-content-center align-content-center  text-center h-100  ">
                <h3 class="fw-bold position-relative  align-self-center ">${arr[i].strMeal}</h3>
                

                </div>
             </div>            
            </div>

        </div>`
    
  }
  
  rowElement.innerHTML = ingrediantBoxDetails
  
  
}
  // 
async function getApiDetails(det) {
loding.classList.remove('d-none')

  
  let ApiDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${det}`)
  let ApiDetailsRespone = await ApiDetails.json()
  // console.log(ApiDetailsRespone.meals[0]);
  
  displayDetails(ApiDetailsRespone.meals)
  serchBar.innerHTML=""
  loding.classList.add('d-none')

}





function displayDetails(arr) {

  let displayBox = ``
  for (let i = 0; i < arr.length; i++) {
    displayBox = ` <div class="col-md-4">
                        <div class="img-side">
                            <img src="${arr[i].strMealThumb}" class="w-100 rounded-4 "alt>
                            <h2 class="text-white">${arr[i].strMeal}</h2>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div class="text-side">
                            <h1 class="fw-bold text-white">Instructions</h1>
                            <p class="text-white">${arr[i].strInstructions}</p>
                                <p class=" fw-bold text-white fs-3">Area :<span>  ${arr[i].strArea}</span></p>
                                <p class=" fw-bold text-white fs-3">Category  :<span>  ${arr[i].strCategory}</span></p>
                                <div class="recipce">
                                    <p class=" fw-bold text-white fs-3">Recipes :</p>
                                    <ul class="list-unstyled row g-1">
                                        <li class="alert  alert-info  m-1"> ${arr[i].strIngredient1}</li>
                                        <li class="alert  alert-info  m-1"> ${arr[i].strIngredient2}</li>
                                        <li class="alert  alert-info  m-1"> ${arr[i].strIngredient3}</li>
                                        <li class="alert  alert-info  m-1"> ${arr[i].strIngredient4}</li>
                                        <li class="alert  alert-info  m-1"> ${arr[i].strIngredient5}</li>
                                        <li class="alert  alert-info  m-1"> ${arr[i].strIngredient6}</li>
                                        <li class="alert  alert-info  m-1"> ${arr[i].strIngredient7}</li>
                                        </ul>
                                    
                                </div>

                                <div class="Tag">
                                    <p class=" fw-bold fs-3 text-white">Tags :</p>
                                    <ul class="list-unstyled row g-1">
                                        <li class="alert alert-info m-1"> ${arr[i].strTags}</li>
                                        <li class="alert alert-info m-1"> 1 Packet Filo Pastry</li>
                                        
                                        <div class="soical-item d-flex">
                                            <a   target="_blank" href="${arr[i].strYoutube}"  class="btn    btn-danger m-1"> youtube</a>
                                        <a  target="_blank"  href="${arr[i].strSource}" class="btn  btn-success m1"> source</a>
                                     
                                        </div>
                                        
                                    </ul>
                                    
                                </div>
                        </div>
                    </div>`
    
  }
  
  rowElement.innerHTML=displayBox
  // console.log(displayBox);
  closeNav()
  
}


// serch
function showSerch() {
  let SerchBox=`<div class="col-md-6">
            <div class="item">
            <div class="form-floating text-white">
                <textarea onkeyup="searchByName(this.value)" class="form-control bg-black text-white " placeholder="Search By Name " id="floatingTextarea"></textarea>
                <label for="floatingTextarea" class="">serach By Name</label>
              </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="item">
            <div class="form-floating text-white">
                <textarea onkeyup="serchByFirstLetter(this.value)" maxlength="1" class="form-control  bg-black text-white" placeholder="Search By Fitst Letter  " id="floatingTextarea"></textarea>
                <label class='' for="floatingTextarea">serach By First Letter</label>
              </div>
            </div>
        </div>`
  
        serchBar.innerHTML=SerchBox
        rowElement.innerHTML=""
}


// searchByName()
async function searchByName(bynname) {
loding.classList.remove('d-none')

  let bynNameApi= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${bynname}`)
   let bynNameApiRespone= await bynNameApi.json()
  console.log(bynNameApiRespone);

  if (bynNameApiRespone.meals) {
    displayMeal(bynNameApiRespone.meals)
    
  }
  
loding.classList.add('d-none')
  
  }
  // serchByFirstLetter
  async function serchByFirstLetter(byletter) {
loding.classList.remove('d-none')

    if (byletter=="") {
      byletter="c";
    }
    

    let byLetterApi= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${byletter}`)
     let byLetterApiRespone= await byLetterApi.json()
    console.log(byLetterApiRespone);
  
    displayMeal(byLetterApiRespone.meals)
    loding.classList.add('d-none')


    }





    function dispalyContact(){

      let contactBox =`
     <div class="contact-page">
            <div class="container ">
                <div
                    class="row justify-content-center align-content-center h-100 vh-100 g-3">

                    <div class="col-md-5">
                        <div class="form-floating mb-3">
                            <input onkeyup="inputsVaildation()" type="text"
                                class="  form-control vaildationName"
                                id="floatingInput"
                                placeholder="enter your name">
                            <div class="nameAlert alert alert-danger w-100 mt-1 d-none"> Special
                                characters and numbers not allowed </div>
                           
                           
                                <label for="floatingInput">Enter your Name</label>
                        </div>

                    </div>
                    <div class="col-md-5">
                        <div class="   form-floating mb-3">
                            <input onkeyup="inputsVaildation()" type="email"
                                class="form-control vaildationEmail"
                                id="floatingInput"
                                placeholder="name@example.com">
                            <div class="alert emailAlert alert-danger w-100 mt-1 d-none"> Email
                                not valid *exemple@yyy.zzz </div>

                            <label for="floatingInput">Email address</label>
                        </div>

                    </div>

                    <div class="col-md-5">
                        <div class="  form-floating mb-3">
                            <input onkeyup="inputsVaildation()" type="number"
                                class="  form-control vaildationNum"
                                id="floatingInput" placeholder="your number">
                            <div class="alert numAlert alert-danger w-100 mt-1 d-none">Enter
                                valid Phone Number </div>

                            <label for="floatingInput">your phone</label>
                        </div>

                    </div>
                    <div class="col-md-5">
                        <div class="  form-floating mb-3">
                            <input onkeyup="inputsVaildation()" type="number"
                                class="form-control vaildationAge"
                                id="floatingInput" placeholder="your age">
                            <div class="alert ageAlert alert-danger w-100 mt-1 d-none">Enter
                                valid age</div>

                            <label for="floatingInput">Enter your Age</label>
                        </div>

                    </div>

                    <div class="col-md-5">
                        <div class="  form-floating">
                            <input onkeyup="inputsVaildation()" type="password"
                                class=" form-control vaildationPass"
                                id="floatingPassword" placeholder="Password">
                            <div class="alert passAlert alert-danger w-100 mt-1 d-none">Enter
                                valid password *Minimum eight characters, at
                                least one letter and one number:*</div>

                            <label for="floatingPassword">Enter your
                                Password</label>
                        </div>

                    </div>

                    <div class="col-md-5">
                        <div class="  form-floating">
                            <input onkeyup="inputsVaildation()" type="password"
                                class="form-control vaildationRepass"
                                id="floatingPassword" placeholder="Password">
                                <div class="alert repassAlert alert-danger w-100 mt-1 d-none">Enter valid repassword</div> 
                                <label for="floatingPassword">Confirom your
                                Password</label>
                        </div>

                    </div>
                    <div class="col-md-5 text-center  ">
                        <button disabled type="submit"
                            class=" subBut btn btn-outline-danger">submit</button>

                    </div>

                </div>
            </div>

        </div>  
      `

rowElement.innerHTML=contactBox

document.querySelector('.vaildationName').addEventListener('focus',()=>{
  
  
  let nameInput = true;
 
  console.log(nameInput);
  
})

document.querySelector('.vaildationEmail').addEventListener('focus',()=>{
  let emailInput=true;
 
 
  console.log(emailInput);
  
})


document.querySelector('.vaildationNum').addEventListener('focus',()=>{
  let numInput=true;
  
  console.log(numInput);
  
})


document.querySelector('.vaildationAge').addEventListener('focus',()=>{
  let ageInput=true;
  console.log('hi');
  console.log(ageInput);
  
})


document.querySelector('.vaildationPass').addEventListener('focus',()=>{
  let passInput=true;
  console.log('hi');
  console.log(passInput);
  
})

document.querySelector('.vaildationRepass').addEventListener('focus',()=>{
  let repassInput=true;
  console.log('hi');
  console.log(repassInput);
  
  
})

    }


 
let nameInput = false;
let emailInput = false;
let numInput = false;
let ageInput = false;
let passInput = false;
let repassInput = false;
  


    function inputsVaildation() {

if (nameInput==false) {

  if (NameVaildation()) {
    document.querySelector('.nameAlert').classList.replace('d-block','d-none')

  }else{
    document.querySelector('.nameAlert').classList.replace('d-none','d-block')

  } 

}else{
  console.log('hi');
  
}

 if (emailInput==false) {
  if (EmailVaildation()) {
    document.querySelector('.emailAlert').classList.replace('d-block','d-none')
  }else{
    document.querySelector('.emailAlert').classList.replace('d-none','d-block')

  }
 }

 if (ageInput==false) {
  if (AgeVaildation()==false) {
    document.querySelector('.ageAlert').classList.replace('d-none','d-block')
  }else{
    document.querySelector('.ageAlert').classList.replace('d-block','d-none')

  }

 }
  
 if (numInput==false) {
  if (NumberVaildation()==false) {
    document.querySelector('.numAlert').classList.replace('d-none','d-block')
  }else{
    document.querySelector('.numAlert').classList.replace('d-block','d-none')

  }
   
 }

  

 

if (passInput==false) {
  if (PassVaildation()==false) {
    document.querySelector('.passAlert').classList.replace('d-none','d-block')
  }else{
    document.querySelector('.passAlert').classList.replace('d-block','d-none')

  }
}

if (repassInput==false) {
  
  if (RepassVaildation()==false) {
    document.querySelector('.repassAlert').classList.replace('d-none','d-block')
  }else{
    document.querySelector('.repassAlert').classList.replace('d-block','d-none')

  }
   
}
  
  
  
 
  



     if (NameVaildation()&&EmailVaildation()&&NumberVaildation()&&AgeVaildation()&&PassVaildation()&&RepassVaildation()) {
       document.querySelector('.subBut').removeAttribute('disabled')
      
     }
      
      
      
      
    }


    function NameVaildation() {

      
      return (/^[a-zA-Z ]{2,30}$/.test(document.querySelector('.vaildationName').value)) 
      
      
      
    }


    function EmailVaildation() {

      return ( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.querySelector('.vaildationEmail').value)) 
      
      
      
    }
   


    function NumberVaildation() {

      return (/^[0-9]*\d$/.test(document.querySelector('.vaildationNum').value)) 
      
      
      
    }




    function AgeVaildation() {

      return (/^[1-9]?[0-9]{1}$|^100$/.test(document.querySelector('.vaildationAge').value)) 
      
      
      
    }



    function PassVaildation() {

      return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(document.querySelector('.vaildationPass').value)) 
      
      
      
    }



    function RepassVaildation() {

      return document.querySelector('.vaildationRepass').value ==document.querySelector('.vaildationPass').value
      
      
      
    }
    


    // 




    