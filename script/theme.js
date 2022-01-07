let toggleSwich=document.getElementById('checkbox');
let toggleIcon=document.getElementById('toggle-icon');


function lightDarkMode(isDark)
{
    isDark?document.documentElement.setAttribute('data-theme', 'dark'):document.documentElement.removeAttribute('data-theme');
    isDark?toggleIcon.firstElementChild.textContent='Dark Mode' : toggleIcon.firstElementChild.textContent='Light Mode';
    //console.log(toggleIcon.firstElementChild);
    isDark?toggleIcon.children[1].className='fas fa-moon':toggleIcon.children[1].className='fas fa-sun';
}

function setBtnsColors(){
    let btn;
    for(let i=1; i<=9; i++)
    {
    btn=document.getElementById(`btn${i}`);
    btn.style=`background: var(--btn${i})`;
    }
}


toggleSwich.addEventListener('change', function(e){
    //console.log(e.target.checked)
    if(e.target.checked){
        lightDarkMode(true);
        localStorage.setItem('themeMode', 'dark');
        // console.log(localStorage)
    }else{ 
        lightDarkMode(false);
        localStorage.setItem('themeMode', 'light');
        // console.log(localStorage)
    }
})
// console.log(localStorage)
//save to local storage
//let currentTheme=localStorage.getItem('');

 let currentTheme=localStorage.getItem('themeMode');
 
//console.log(localStorage);
 if(currentTheme){
    //  console.log(currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme== 'light'){
         toggleSwich.checked=false;
       //darkMode();
        lightDarkMode(false);
     }
     if(currentTheme== 'dark'){
        toggleSwich.checked=true;
      //darkMode();
       lightDarkMode(true);
    }
     
 }

setBtnsColors();