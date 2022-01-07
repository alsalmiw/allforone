
 function makePageTitle(chNum, num){
    let h2 = document.createElement('h2');
    h2.textContent=`Mini Challenge ${chNum}`;

    let pageTitleDiv=document.createElement('div');
    pageTitleDiv.className='row pageTitle';
    pageTitleDiv.style=`background: var(--btn${num})`;
    pageTitleDiv.appendChild(h2);

    return pageTitleDiv;
}

function makeSubmitBtn(){
    let button = document.createElement('button');
    button.className='btn btn-secondary btn-lg';
    button.type='button';
    button.textContent='Submit';
    button.id='submitBtn';

    let buttonDiv=document.createElement('div');
    buttonDiv.className='d-grid gap-2 d-md-flex justify-content-md-end';

    buttonDiv.appendChild(button);

    let btnRow=document.createElement('div');
    btnRow.className='row';
    btnRow.appendChild(buttonDiv);

    return btnRow;
}

function makeInstructions(instructions){
    let h4=document.createElement('h4');
    h4.textContent=instructions;

    let instDiv=document.createElement('div');
    instDiv.className='row';
    instDiv.id='instructions';

    instDiv.appendChild(h4);

    return instDiv;
}

function makeInputAndLabel(question, InputNum){
    let h4 = document.createElement('h4');
    h4.textContent=question;

    let label=document.createElement('label');
    label.className='col-sm-6 col-form-label col-form-label-lg';
    label.for='colFormLabelLg';

    label.appendChild(h4);

    let input=document.createElement('input');
    input.id=`userInput${InputNum}`;
    input.className='form-control form-control-lg';
    input.type='text';

    let inputDiv=document.createElement('div');
    inputDiv.className='col-sm-6';
    
    inputDiv.appendChild(input);

    let container=document.createElement('div');
    container.className='row inputData pt-4';

    container.appendChild(label);
    container.appendChild(inputDiv);

    return container;
}

function makeDropMenuAndLabel(question, options){
    console.log('hello');
    let h4 = document.createElement('h4');
    h4.textContent=question;

    let label=document.createElement('label');
    label.className='col-sm-6 col-form-label col-form-label-lg';
    label.for='colFormLabelLg';

    label.appendChild(h4);

    let select=document.createElement('select');
    select.className='col-sm-6 form-select p-2';
    select.id='userChoice';

    let defaultOption=document.createElement('option');
    defaultOption.selected=false;
    defaultOption.textContent='Select an Option';
    defaultOption.value='null';

    select.appendChild(defaultOption);
    
    for(let i=0; i<options.length; i++)
    {   let option ='options'+i;
        option= document.createElement('option');
        option.value=options[i];
        option.textContent=options[i];
        select.appendChild(option);
    }

    let divDropM=document.createElement('div');
        divDropM.className='row inputData pt-4';

        divDropM.appendChild(label);
        divDropM.appendChild(select);

    return divDropM;
}

function makeResultsContainer(result)
{
    let resultBox=document.createElement('div');
    resultBox.className='col-12 col-md-10 resultsBox';
    resultBox.textContent=result;

    let resultDiv=document.createElement('div');
    resultDiv.className='row inputData pt-4 d-flex justify-content-center';

    resultDiv.appendChild(resultBox);

    return resultDiv;
}

export {makePageTitle, makeInstructions, makeInputAndLabel, makeDropMenuAndLabel, makeResultsContainer, makeSubmitBtn};