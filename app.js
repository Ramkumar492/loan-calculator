
document.querySelector('.submit-btn').addEventListener('click',function(e)
{

  calculateloan();
  e.preventDefault();


}
);



function calculateloan()
{
     let principal= parseFloat(document.querySelector('#amount').value);
     console.log(principal);
     let interest =parseFloat(document.querySelector('#interest').value)/100/12;
     let period = parseFloat(document.querySelector('#time').value)*12;


     calculategifon();

     setTimeout( function()
   {
     calculategifoff();
     let monthly= document.querySelector('#monthly');
     let  yearly= document.querySelector('#yearly');
     let totalintrest = document.querySelector('#total-interest');


     const x = Math.pow(1+interest,period);
     const monthlyPayment= (principal*x*interest)/(x-1);


     if(isFinite(monthlyPayment))
     {
       monthly.value= monthlyPayment.toFixed(2);

       yearly.value= (monthlyPayment * period).toFixed(2);

       totalintrest.value= ((monthlyPayment* period) - principal).toFixed(2);

       let results= document.querySelector('.results');
       document.querySelector('.results').classList.remove('diss');


     }

     else
     {
       showerror();
     }



   },1000);








}


function showerror()
{

    const errordiv= document.createElement('div');
    const heading= document.querySelector('#input');
    const card= document.querySelector('.input-card');

    errordiv.classList.add('alert');
    errordiv.classList.add('alert-danger');

    errordiv.appendChild( document.createTextNode('Please Check Input Values'));


    card.prepend(errordiv);

    setTimeout(function()
    {
      card.firstElementChild.remove();
    },3000);




}
function calculategifon()
{
    const gif= document.querySelector('.loading-gif');

    gif.classList.remove('diss');
    console.log(gif.classList);


}
function calculategifoff()
{
    const gif= document.querySelector('.loading-gif');

    gif.classList.add('diss');

}
