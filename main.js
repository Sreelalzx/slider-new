let indexValue=1;
slidingFunc(indexValue);

function angles(input){
  slidingFunc(indexValue+=1);
}


function slidingFunc(n){
  
var i;

const imgs =document.querySelectorAll('img');

if(n> imgs.length)
{
  indexValue = 1
}

if(n<1)
 {
indexValue=imgs.length;
 }

for(i=0;i<imgs.length;i++)
{
imgs[i].style.display='none';
}

imgs[indexValue-1].style.display='block';

}
