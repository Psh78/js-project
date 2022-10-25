

// Courosel starts

const next = document.querySelector('.next');

const courArray = ['https://d2g9wbak88g7ch.cloudfront.net/bannerimages/84_inr.jpg', 'https://d2g9wbak88g7ch.cloudfront.net/bannerimages/80_inr.jpg', 'https://d2g9wbak88g7ch.cloudfront.net/bannerimages/82_inr.jpg', 'https://d2g9wbak88g7ch.cloudfront.net/bannerimages/83_inr.jpg', 'https://d2g9wbak88g7ch.cloudfront.net/bannerimages/81_inr.jpg'];

let imageCount = 0;
const img = document.querySelector('.cimg');
try{
window.addEventListener('DOMContentLoaded', function(){
    const item = courArray[imageCount]
    img.src = `${item}`;
    // console.log(item)
})

next.addEventListener('click', setInterval(() => {
    if(imageCount > courArray.length-1)
    {
        imageCount = 0;
    }
    const item = courArray[imageCount]
    img.src = `${item}`;
    imageCount++;

}, 2000));}
catch(e)
{
    
}

// courosel ends

// Sign up and login starts 


const loginn = document.querySelector('.log');
const login = document.querySelector('.login');

loginn.addEventListener('click', function(){

    if(login.classList.contains('hider'))
    {
        login.classList.remove('hider');
    }
    else
        login.classList.add('hider');
})

let isLogin = false;

const logForm = document.querySelector('.logForm');
let logVal = "";
let pass = "";
logForm.addEventListener('submit', function(e){
    e.preventDefault();

    logVal = document.querySelector('.uName').value;
    pass = document.querySelector('.pass').value;
    console.log(logVal, pass);
    
    document.querySelector('.uName').value = "";
    document.querySelector('.pass').value = '';
    isLogin = true;

    logged();
})



const signButton = document.querySelector('.sign');
const signup = document.querySelector('.signUp');

signButton.addEventListener('click', function(){

    if(signup.classList.contains('hider'))
    {
        signup.classList.remove('hider');
    }
    else
        signup.classList.add('hider');
})

const signForm = document.querySelector('.signForm');
let signmail = "";
let signPass = "";
let signName = "";
signForm.addEventListener('submit', function(e){
    e.preventDefault();

    signName = document.querySelector('.sname').value;
    signmail = document.querySelector('.smail').value;
    signPass = document.querySelector('.spass').value;


    
    document.querySelector('.sname').value = "";
    document.querySelector('.smail').value = "";
    document.querySelector('.spass').value = "";
})


function logged()
{

    const logdel = document.querySelector('.log');
    const signdel = document.querySelector('.sign');
    const face = document.querySelector('.loggedin');
    if(isLogin)
    {
        signdel.style.display = "none";
        logdel.style.display = "none";
        signdel.style.position = "absolute";
        logdel.style.position = 'absolute';
        face.style.position = "relative";
        face.style.visibility = 'visible'
        face.classList.remove('hider');
        login.classList.add('hider');
    }
}

const face = document.querySelector('.loggedin');
const logOut = document.querySelector('.logout');

face.addEventListener('click', function(){

    logOut.classList.remove('hider');
})

const logOutButton = document.querySelector('.lout')

logOutButton.addEventListener('click', function(){
    
    const logdel = document.querySelector('.log');
    const signdel = document.querySelector('.sign');

    logOut.classList.add('hider');
    face.style.position = 'absolute';
    face.style.visibility = 'hidden';
    login.classList.add('hider');
    face.classList.add('hider');
    signdel.style.display = 'block';
    logdel.style.display = 'block';
    signdel.style.position = 'relative';
    logdel.style.position = 'relative';
})

// login and signup ends


// Search box

const searchButton = document.querySelector('.searching');
const search = document.querySelector('.search')

searchButton.addEventListener('click', function(){

    if(search.classList.contains('hider'))
    {
        search.classList.remove('hider');
    }
    else    
        search.classList.add('hider');
})

const sForm = document.querySelector('.searchForm');

sForm.addEventListener('submit', function(e){
    
    const searchInput = document.querySelector('.searchBar');
    // searchInput.value = "";
})