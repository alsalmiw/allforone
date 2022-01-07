import {makePageTitle, makeInstructions, makeInputAndLabel, makeDropMenuAndLabel, makeResultsContainer, makeSubmitBtn} from './components.js';

let urlBase='https://allminichallenges.azurewebsites.net/MiniChallenges/';
let url='';
let studentDrctUrl='https://studentdirectory.azurewebsites.net/StudentDirectory/';
let injectHere=document.getElementById('injectHere');
let contClass='col-8 p-0';
let selectedOption='';
let questionsContainer;

function homePage(){
    injectHere.innerHTML='';
    injectHere.className='col-8 content-body p-0 d-flex justify-content-center align-items-center';

    let h1=document.createElement('h1');
    h1.textContent='All for One Project';
    let h4=document.createElement('h4');
    h4.textContent='Welcome to the website';
    let div=document.createElement('div');
    div.className='row titleBox text-center';
    div.appendChild(h1);
    div.appendChild(h4);
    injectHere.appendChild(div);
}

function miniCh1(){
    
    injectHere.innerHTML='';
    injectHere.className=contClass;
    let instructions ='Let the computer say Hi to you!';
    let questions=['What is your name:'];
    let page='One', pageNum=1;    
    componentsTxtBoxPagesOnly(page,pageNum, instructions, questions);
    
   
    //get values
    // let name='Walaa';//user input
    url=urlBase+`miniCh1/`;
    // urlFetch(url);

    submitEvntLstnr(questions, url, pageNum)
}

function miniCh2(){
    //clear body and url
    // let num1=4,//user input
    // num2= 6;//user input
    url=urlBase+`miniCh2/`;
    // urlFetch(url);
   
    injectHere.innerHTML='';
    injectHere.className=contClass;
    let instructions='Find out the sum of two numbers';
    let questions=['Enter First Number:', 'Enter Second Number:'];
    let page='Two', pageNum=2;    
    componentsTxtBoxPagesOnly(page,pageNum, instructions, questions);

    submitEvntLstnr(questions, url, pageNum)
}

function miniCh3(){
    url=urlBase+`miniCh3/`;
    // urlFetch(url);
    injectHere.innerHTML='';
    injectHere.className=contClass;
    let instructions='Let the Computer you your name and the time you woke up!';
    let questions =['Enter Your Name:', 'Enter A Time:'];
    let page='Three', pageNum=3;
    componentsTxtBoxPagesOnly(page,pageNum, instructions, questions);
    submitEvntLstnr(questions, url, pageNum);
}

function miniCh4(){
    url=urlBase+`miniCh4/`;
    // urlFetch(url);
    injectHere.innerHTML='';
    injectHere.className=contClass;
    let instructions='Find out the relationship between two numbers.';
    let questions =['Enter First Number:', 'Enter Second Number:'];
    let page='Four', pageNum=4;

    componentsTxtBoxPagesOnly(page,pageNum, instructions, questions)
    submitEvntLstnr(questions, url, pageNum);
}

function miniCh5(){
 
    url=urlBase+'madLib';
    // modelFetch(url, madLibModel);
    injectHere.innerHTML='';
    injectHere.className=contClass;
    let instructions='Enter words below for a MadLib experience! The story is about two friends!';
    let questions =['What is your favorite animal?', 'What is a large animal?', 'What is a small animal?', 'What is your favorite activity?', 'What is your favorite place?', 'How do you feel today?', 'How did you feel Yesterday?', 'What did you you do when you got your first job?', 'What did you you do when you left your first job?', 'Give me an action, such as push or swing:', 'What’s your favorite town?', 'Give me a number between 1,000 and 10,000:', 'Give me a number between 1 and 100:', 'What is something you wish to have?'];
    let page='Five', pageNum=5;

    componentsTxtBoxPagesOnly(page,pageNum, instructions, questions)
    submitEvntLstnr(questions, url, pageNum);
}

function miniCh6(){
    url = urlBase+`miniCh6/`;
    // urlFetch(url);
    injectHere.innerHTML='';
    injectHere.className=contClass;
    let instructions='Find out if a number is even or odd';
    let questions =['Enter A Number:'];
    let page='Six', pageNum=6;

    componentsTxtBoxPagesOnly(page,pageNum, instructions, questions);
    submitEvntLstnr(questions, url, pageNum);
}

function miniCh7(){
    // url=urlBase+`miniCh7/${string}`;
    let url=urlBase;
    // urlFetch(url);
    injectHere.className=contClass;
    injectHere.innerHTML='';
    let instructions='Reverse a Word or a Number!';
    let question ='Select to reverse a word or a number:';
    let options=['Word', 'Number'];
    let OptInstructions=['Enter a word:', 'Enter a number:']
    let page='Seven', pageNum=7;
    componentsTxtBoxDropMenu(page, pageNum, instructions, question, options);
    let selectedOption=menuEvenListener(options, OptInstructions);
    
    if (selectedOption=='Word')
     {
       url+=`miniCh7/`;
       
    }
    else if(selectedOption=='Number')
    {
        url+=`miniCh7Int/`;
    }
   
     submitEvntLstnr(question, url, pageNum);
    
}

function miniCh8(){
    //student Directory
    // let firstName='first/Walaa'; //`first/${userInput}` userInput
    // let lastName='last/alsalmi';//userInput
    // let hobby='hobbies/video games';//userInput
    // urlFetch(url);

    injectHere.className=contClass;
    injectHere.innerHTML='';
    let instructions='Student Directory: choose your Input by First Name, Last Name, or Hobby!';
    let question ='Select an Option:';
    let options=['First Name', 'LastName', 'Hobby'];
    let OptInstructions=['Enter First Name:', 'Enter Last Name:', 'Enter Hooby']
    let page='Eight', pageNum=8;

componentsTxtBoxDropMenu(page, pageNum, instructions, question, options);
let userOption=menuEvenListener(options, OptInstructions);
let url=studentDrctUrl+userOption+'/';
submitEvntLstnr(question, url, pageNum);
}

function miniCh9(){
    // let resturant='arabic'; //userInput
    // url=urlBase+`miniCh9/${resturant}`
    // urlFetch(url);

    injectHere.className=contClass;
    injectHere.innerHTML='';
    let instructions='Find a random resturant in your Area!';
    let question ='Select an Option:';
    let options=['Arabic', 'Indian', 'Chinese', 'Mexican'];
    let page='Nine', pageNum=9;

componentsTxtBoxDropMenu(page, pageNum, instructions, question, options);
let userOption=getMenuValue();
let url=urlBase+`miniCh9/${userOption}`;
submitEvntLstnr(question, url, pageNum);
}


function getModelConstruct(pageNum, resultArr)
{
   let modelConstruct;
    switch (pageNum) {
        case 5:
             modelConstruct={
                animal1:`${resultArr[0]}`, 
                animal2:`${resultArr[1]}`, 
                animal3:`${resultArr[2]}`, 
                action0:`${resultArr[3]}`, 
                place:`${resultArr[4]}`, 
                emotion1:`${resultArr[5]}`,
                emotion2: `${resultArr[6]}`, 
                action1: `${resultArr[7]}`, 
                action2:`${resultArr[8]}`, 
                action3: `${resultArr[9]}`, 
                town1:`${resultArr[10]}`,
                number1:`${resultArr[11]}`, 
                number2:`${resultArr[12]}`, 
                object1:`${resultArr[13]}`};
        break; 
                
        default:
            break;
    }

    return modelConstruct;
}

function submitEvntLstnr(questions, url, pageNum){
    
    let isResultBox;
    let resultArr=[];
    document.getElementById('submitBtn').addEventListener('click',async function(e){  
        let questionsContainer=document.getElementsByClassName('pageContainer');
        
        for (let i=1; i<=questions.length; i++){
            let userInput=document.getElementById('userInput'+i);
            let userAnswer;
            userAnswer=userInput.value;
            resultArr.push(userAnswer); 
        }
        var test;
        if(pageNum==5)
        {
           let modelConstruct= getModelConstruct(pageNum, resultArr);
           test = await modelFetch(url, modelConstruct);
            
            
        }
        else
        {
                for(let j=0; j<resultArr.length; j++)
            {
                url+=resultArr[j]+'/';
            }
                    //urlFetch(url);
            test= await urlFetch(url);
        }

        
        if(test.includes('One or more validation errors occurred'))
        {
            test='Error! One or more validation errors occurred. please enter a valid choice.';
        }
        
        setTimeout(() => {
        }, 1000);
        if(isResultBox==true)
        {   
            questionsContainer[0].removeChild(questionsContainer[0].lastChild);

            questionsContainer[0].appendChild(makeResultsContainer(test));
            
            isResultBox=true;
            url = resetUrl(pageNum, url, resultArr)
            resultArr=[];
        }else{
            questionsContainer[0].appendChild(makeResultsContainer(test));
            
            url = resetUrl(pageNum, url, resultArr);
            isResultBox=true;
            resultArr=[];
        }
    })
}

function resetUrl(pageNum, url, resultArr){
    if(pageNum!=5)
    {
         for(let d=0; d<resultArr.length; d++)
            {
                let deleteUrl = resultArr[d]+'/';
               url=url.slice(0,-deleteUrl.length);
            }
    }
    return url;
}

// Functions!!

function componentsTxtBoxPagesOnly(page,pageNum, instructions, questions){
    let questionsContainer=document.createElement('div');
    
    questionsContainer.className='row  pageContainer';
    questionsContainer.appendChild(makeInstructions(instructions));
    for (let i=0; i<questions.length;i++){
        let inputLabel = makeInputAndLabel(questions[i], i+1);
    questionsContainer.appendChild(inputLabel);
    }
    
    injectHere.appendChild(makePageTitle(page, pageNum));
    injectHere.appendChild(questionsContainer);
    injectHere.appendChild(makeSubmitBtn());
}

function componentsTxtBoxDropMenu(page, pageNum, instructions, question, options){
    questionsContainer=document.createElement('div');
    questionsContainer.className='row pageContainer';
    questionsContainer.appendChild(makeInstructions(instructions));
    questionsContainer.appendChild(makeDropMenuAndLabel(question, options));
    
    injectHere.appendChild(makePageTitle(page, pageNum));
    injectHere.appendChild(questionsContainer);
    injectHere.appendChild(makeSubmitBtn());
}

function getMenuValue()
{ 
    let selectedOption;
    let userChoice=document.getElementById('userChoice');
    userChoice.addEventListener('change', (e)=>
    {
       selectedOption= e.target.value;
        return selectedOption;
    });
   
}

function menuEvenListener(options, OptInstructions){
    let userChoice=document.getElementById('userChoice');
    userChoice.addEventListener('change', (e)=>
    {
       selectedOption= e.target.value;
       
        for (let i=0; i<options.length; i++)
        {   
            if (selectedOption==options[i])
            {
                let num=1;
              
                if(questionsContainer.children.length==3)
                {
                     questionsContainer.removeChild(questionsContainer.children[2]);
                }
               
                questionsContainer.appendChild(makeInputAndLabel(OptInstructions[i], num));
            }
            else if(selectedOption=='null')
            {
                if(questionsContainer.children.length==3)
                {
                     questionsContainer.removeChild(questionsContainer.children[2]);
                }
            }
        }
    });

      return selectedOption;
}






function urlFetch(url){
   return fetch(url)
    .then (resp=>resp.text())
    .then(data => { return data})
}

function modelFetch(url, model){


    return fetch(url, {
        'method':'POST', 
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(model)
    }).then(resp => resp.text())
    .then (data => { return data})
}

// function fetchEx(){
// fetch('https://allminichallenges.azurewebsites.net/MiniChallenges/miniCh1/walaa')
// .then (
//     response => response.text()
// )
// .then(
//     data => {
//         console.log(data)
//     }
// )
// }


// function urlMethodEx(){
//     fetch('http://localhost:5000/MiniChallenges/miniCh1/walaaa')
//     .then(response => response.text())
//     .then(data => console.log(data))
// }




//Example let miniCh1Model={username: 'walaa'}
// let miniCh2Model={
//     x:4,
//     y:5
// }

// let madLibUrl='http://localhost:5000/MiniChallenges/madLib';
// let madLibModel={
//     animal1:"cat", 
//     animal2:"dog", 
//     animal3:"mouse", 
//     action0:"jump", 
//     place:"hiking", 
//     emotion1:"sad",
//     emotion2: "cried", 
//     action1: "peed", 
//     action2:"defecated", 
//     action3: "hug", 
//     town1:"stockton",
//     number1:"556", 
//     number2:"34", 
//     object1:"calculator"};



//modelFetch(madLibUrl, madLibModel);
//urlMethodEx();
document.getElementById('homeBtn').addEventListener('click', homePage);
document.getElementById('btn1').addEventListener('click', miniCh1);
document.getElementById('btn2').addEventListener('click', miniCh2);
document.getElementById('btn3').addEventListener('click', miniCh3);
document.getElementById('btn4').addEventListener('click', miniCh4);
document.getElementById('btn5').addEventListener('click', miniCh5);
document.getElementById('btn6').addEventListener('click', miniCh6);
document.getElementById('btn7').addEventListener('click', miniCh7);
document.getElementById('btn8').addEventListener('click', miniCh8);
document.getElementById('btn9').addEventListener('click', miniCh9);