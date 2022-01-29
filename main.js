const price = document.querySelector(`#cena`);
const persons = document.querySelector(`#osoby`);
const tip = document.querySelector(`#napiwek`);
const btnResult = document.querySelector(`.result`);
const error = document.querySelector(`.error`);
const sum_info = document.querySelector(`.wynik-info`);
const sum = document.querySelector(`.wynik`);


const showValue = () =>
{
   if (price.value == "" || persons.value == "" || tip.value == 0)
   {
      error.style.display = `block`;
      sum_info.style.display = `none`;
   } else
   {
      error.style.display = `none`;
      przelicz();
   }

}

const przelicz = () =>
{
   const newPrice = parseFloat(price.value);
   const newPersons = parseInt(persons.value);
   const newTip = parseFloat(tip.value);

   const zrzutka = ((newPrice + (newPrice * newTip)) / newPersons).toFixed(2);
   sum_info.style.display = "block";
   sum.textContent = zrzutka;

}



btnResult.addEventListener(`click`, showValue);