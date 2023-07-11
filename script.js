const canvas = document.getElementById('canvas');
const button = document.getElementById('btn');
const wrapper = document.getElementById('random-cocktail-content');



const fetchRandomCocktail = async()=>{
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const randomCocktail = await response.json();
  console.log(randomCocktail.drinks[0]);

  const randomCocktailImage = document.createElement('img')
  randomCocktailImage.src = randomCocktail.drinks[0].strDrinkThumb;
  randomCocktailImage.classList.add('random-cocktail-image');

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('random-cocktail-texts');

  const cocktailName = document.createElement('h2');
  cocktailName.innerHTML = randomCocktail.drinks[0].strDrink
  

  const cocktailInstructions = document.createElement('h5');
  cocktailInstructions.innerHTML = randomCocktail.drinks[0].strInstructions



  const ingridientsTitle = document.createElement('h3');
  ingridientsTitle.innerHTML = "Ingridients:";


  const ingridients = document.createElement('ul');
  ingridients.classList.add('ingridients-list');
  let ingridientNumber = 1;

  while(randomCocktail.drinks[0]['strIngredient'+ingridientNumber]){
    console.log(randomCocktail.drinks[0]['strIngredient'+ingridientNumber])

    const ingridient = document.createElement('li');
    ingridient.innerHTML=randomCocktail.drinks[0]['strIngredient'+ingridientNumber];
    ingridients.append(ingridient);

    ingridientNumber++;
  }



  textWrapper.append(cocktailName, cocktailInstructions, ingridientsTitle, ingridients);

  wrapper.append(randomCocktailImage);
  wrapper.append(textWrapper);
}

fetchRandomCocktail();


const jsConfetti = new JSConfetti({ canvas });

  let isPlaying = false;

  const audio = new Audio('./Alusinamus.mp3');


  const play = () =>{
    audio.play();
    isPlaying = true;
  }

  audio.addEventListener('ended', () => {
    isPlaying = false;

  });

  button.addEventListener('click', ()=>{
    
    !isPlaying && play();
    jsConfetti.addConfetti({
        emojis: ['🐢', '🍺', '🍻'],
     });
  });