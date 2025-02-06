//showing navbar when click menu on mobile view
const mobile=document.querySelector('.menu-toggle');
const mobileLink=document.querySelector('.sidebar');

mobile.addEventListener("click", function() {

    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");

})
mobileLink.addEventListener("click", function() {
    const menuBars=document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
})

document.getElementById("allmenu").addEventListener("mouseenter",function(e){
    alert("All menu is selected")
})

// var step = 100;
// var stepFilter = 60;
// var scrolling = true;

// $(document).ready(function() {
//     // Scroll functionality for highlight-wrapper
//     $(".back").on("click", function(e) {
//         e.preventDefault();
//         $(".highlight-wrapper").animate({
//             scrollLeft: "-=" + step
//         }, 500);  // Adding duration for smoothness
//     });

//     $(".next").on("click", function(e) {
//         e.preventDefault();
//         $(".highlight-wrapper").animate({
//             scrollLeft: "+=" + step 
//         }, 500);  // Adding duration for smoothness
//     });

//     // Scroll functionality for filter-wrapper (menu filters)
//     $(".back-menus").on("click", function(e) {
//         e.preventDefault();
//         $(".filter-wrapper").animate({
//             scrollLeft: "-=" + stepFilter 
//         }, 500);  // Adding duration for smoothness
//     });

//     $(".next-menus").on("click", function(e) {
//         e.preventDefault();
//         $(".filter-wrapper").animate({
//             scrollLeft: "+=" + stepFilter 
//         }, 500);  // Adding duration for smoothness
//     });
// });


var step = 100;
var stepFilter = 60;

// Scroll recommendations back
document.querySelector(".back").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".highlight-wrapper").scrollBy({
        left: -step,
        behavior: "smooth"
    });
});

// Scroll recommendations next
document.querySelector(".next").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".highlight-wrapper").scrollBy({
        left: step,
        behavior: "smooth"
    });
});

// Scroll menu filters back
document.querySelector(".back-menus").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".filter-wrapper").scrollBy({
        left: -stepFilter,
        behavior: "smooth"
    });
});

// Scroll menu filters next
document.querySelector(".next-menus").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".filter-wrapper").scrollBy({
        left: stepFilter,
        behavior: "smooth"
    });
});

/*---login---*/
/*
document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    alert(data.message);
});

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    alert(data.message);
});
*/