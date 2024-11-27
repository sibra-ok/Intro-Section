console.log('hi');


let featureBlock=document.getElementById('featureBlock');
let companyBlock=document.getElementById('companyBlock');
let ClickFeauture=document.getElementById('DropArrow');
let ClickCompany=document.getElementById('DropSecArrow')

let CompanyDown=document.getElementById('CompanyDown');
let FeatureDown=document.getElementById('down');

let FeatureUp=document.getElementById('up');
let CompanyUp=document.getElementById('CompanyUp');

let bar=document.getElementById('bar');
let close=document.getElementById('close');

ClickFeauture.addEventListener('mouseover', (event) => {
console.log('hello Feature');
let FeatureUp=document.getElementById('up');
let CompanyUp=document.getElementById('CompanyUp');
let FeatureDown=document.getElementById('down');
let featureBlock=document.getElementById('featureBlock');

FeatureDown.classList.toggle('dropHide');
FeatureUp.classList.toggle('dropHide');
featureBlock.classList.toggle('dropHide')

});


ClickCompany.addEventListener('mouseover',(event)=>{
console.log('hello Company')
let CompanyUp=document.getElementById('CompanyUp');
let CompanyDown=document.getElementById('CompanyDown');
let companyBlock=document.getElementById('companyBlock');

CompanyDown.classList.toggle('dropHide');
CompanyUp.classList.toggle('dropHide');
companyBlock.classList.toggle('dropHide');
})


bar.addEventListener('click',(event)=>{

    console.log('sideMenu')
let sideMenu=document.getElementById('sideMenu');

sideMenu.classList.remove('dropHide');
})

close.addEventListener('click',(event)=>{

console.log('deactivated');
let sideMenu=document.getElementById('sideMenu');
sideMenu.classList.add('dropHide');
})