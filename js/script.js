"use strict";

window.addEventListener("load", Initialize);

var txtUsername, txtEmail, txtTelephone,txtStreet,txtNumber,txtPostalCode,txtTown;
var cardUsername,cardEmail, cardTelephone,cardAddress;
var btnGenerate,btnClear;
var divCard;

var user;

function Initialize()
 {        
    BindElements();
    //create your own user object here ...
    AddeventListeners()
    HideElement(divCard);
}

function BindElements()
{
    //txtElements
    txtUsername = document.querySelector('#txtUsername');
    txtEmail = document.querySelector('#txtEmail');
    txtTelephone = document.querySelector('#txtTelephone');
    txtStreet = document.querySelector('#txtStreet');
    txtNumber = document.querySelector('#txtNumber');
    txtPostalCode = document.querySelector('#txtPostalCode');
    txtTown = document.querySelector('#txtTown');
    //card elements
    cardUsername = document.querySelector("#name");
    cardEmail = document.querySelector("#email");
    cardTelephone = document.querySelector("#telephone");
    cardAddress = document.querySelector("#address");
    //btn
    btnGenerate = document.querySelector('#btnGenerate');
    btnClear = document.querySelector('#btnClear');
    //div
    divCard = document.querySelector('div.card');
}

function AddeventListeners()
{
    btnGenerate.addEventListener('click',GenerateCard);
    //use fat arrow anonymous function
    btnClear.addEventListener('click',() => {ClearUi();HideElement(divCard)});
}



function GenerateCard()
{
   //make a card object
   let card = MakeCardObject();
   //fill the html elements, use the object
   cardUsername.innerHTML = card.UserName;
   cardEmail.innerHTML = card.Email;
   cardTelephone.innerHTML = card.Telephone;
   cardAddress.innerHTML = `${card.Address.Street} ${card.Address.Number}, ${card.Address.PostalCode} ${card.Address.Town}`;
   ShowElement(divCard);
}

function MakeCardObject()
{
    //nieuwe oop declaratie
    let cardObject = new Object();
    cardObject.UserName = txtUsername.value;
    cardObject.Email = txtEmail.value;
    cardObject.Telephone = txtTelephone.value;
    //get an address object
    cardObject.Address = MakeaddressObject();
    
    return cardObject;
}

function MakeaddressObject()
{
    //classic declaration
    let adressObject = 
    {
        Street : txtStreet.value,
        Number : txtNumber.value,
        PostalCode : txtPostalCode.value,
        Town : txtTown.value
    };
    return adressObject;
}


function ShowElement(element)
{
    element.style.visibility = 'visible';
}
function HideElement(element)
{
    element.style.visibility = 'hidden';
}

function ClearUi()
{
    //use querySelector all and loop to clear all inputs
    let inputs = document.querySelectorAll('input');
    for(let i=0;i<inputs.length;i++)
    {
        inputs[i].value = '';
    }
}
