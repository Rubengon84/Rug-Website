

const cleaningRugExamples = {
  0: {
   derty: "./images/Cleaning/dertyExample1.jpg" ,
   clean: "./images/Cleaning/cleanExample1.jpg" 
  },
  
  1: {
    derty: "./images/Cleaning/dertyExample2.jpg" ,
    clean: "./images/Cleaning/cleanExample2.jpg" 
   }, 

  2: {
    derty: "./images/Cleaning/dertyExample3.jpg" ,
    clean: "./images/Cleaning/cleanExample3.jpg" 
   }, 

  3: {
    derty: "./images/Cleaning/dertyExample4.jpg" ,
    clean: "./images/Cleaning/cleanExample4.jpg" 
   },
                                                                     //Images of the Cleaning Section Comparation
  4: {
    derty: "./images/Cleaning/dertyExample5.jpg" ,
    clean: "./images/Cleaning/cleanExample5.jpg" 
   },
  
  5: {
    derty: "./images/Cleaning/dertyExample6.jpg" ,
    clean: "./images/Cleaning/cleanExample6.jpg" 
   },  

  6: {
    derty: "./images/Cleaning/dertyExample7.jpg" ,
    clean: "./images/Cleaning/cleanExample7.jpg" 
   },

  7: {
    derty: "./images/Cleaning/dertyExample8.jpg" ,
    clean: "./images/Cleaning/cleanExample8.jpg" 
   }, 
}

// Reviews of the About Animation
const floatContainerImages = ['./images/Reviews/reviws1.jpg', './images/Reviews/reviws2.jpg', './images/Reviews/reviws3.jpg', './images/Reviews/reviws11.jpg' ]



// Animation for the Scrolling
const square = document.getElementById('liquidBlindStain');
square.classList.remove('blindStainOpen');


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('blindStainOpen');
      return;
    }

    square.classList.remove('blindStainOpen');
  });
});

observer.observe(document.getElementById('liquidStain'));





 // Animation for the counting Numbers
const updateCount = (element, speed) => {
    
    const elementHtml = document.getElementById(element);
    const target = elementHtml.getAttribute("dataTarget");
    const porcentLess = target - (target * 0.10);
    const inc = target / speed;
    
    let count = 0;
    
    
    function time(){
          let mseconds = 1;
          if (count < target) {

            count = count + inc;
            elementHtml.innerHTML = Math.round(count)+"+";

            if (count > porcentLess) {
              mseconds = 40;
            } 
            let t = setTimeout(time, mseconds);
          }else{
          elementHtml.innerHTML = target+"+";}
        }
    time();
};


// Change the reviews of the About Animation
function changeFloatContainer(secondsDelay, times) {
  const container = document.getElementById("floatContainer");
  const delay = (secondsDelay / times) * 1000; 
  
  for (let i=0; i < times; i++) {
  
      setTimeout(() => {
        
      container.style.backgroundImage = `url('${floatContainerImages[i]}')`; 
      }, i * delay );
  
  }

}

// Delay for the About Animation H4
setTimeout(() => {
  const h4Tags = document.getElementsByClassName("aboutAnimationH4");

  for(let i=0; i < h4Tags.length; i++) {
    h4Tags[i].style.display = "none";
  }
}, 13000);

// Delay for when to start the counting numbers
setTimeout(() => {
 
  changeFloatContainer(6,4);
  updateCount("reviewsNumber",650);
  updateCount("yearsNumber",650);
  updateCount("stockNumber",650);
}, 1000);

// Change the the width in the Animation for the Cleaning comparation section
function changeRange(){

  const range = document.getElementById("slideShow").value;
   const before = document.getElementById("before");
   const after = document.getElementById("after");
   const imgRange = document.getElementById("secondPhoto");
   before.style.width = range +'%';
   after.style.width = (100-range)+'%';
   imgRange.style.setProperty('clip-path', 'polygon(0% 0%,'+ range +'% 0%,'+ range +'% 100%,0% 100%)');
  };

  const cleaningExamplesDiv = document.getElementsByClassName("smallCleaningExamplesDiv");
  const example2 = document.getElementById("example2");
  
  function changeCompareImg (objImg) {
    document.getElementById("secondPhoto").setAttribute('src', objImg.derty);
    document.getElementById("firstPhoto").setAttribute('src', objImg.clean); 
  };
  

// Assign the photos to shows in the examples

  function assignCleaningExamples () {
  
    let randomNumbersSelection = [];
  
    for(let i=0; i < cleaningExamplesDiv.length; i++) {
      let randomNumber = Math.floor(Math.random() * 8);
  
       while (randomNumbersSelection.includes(randomNumber)){
        randomNumber = Math.floor(Math.random() * 8);
       };
  
      randomNumbersSelection.push(randomNumber);
       
      cleaningExamplesDiv[i].style.backgroundImage = `url('${cleaningRugExamples[randomNumber].derty}')`;
        
      cleaningExamplesDiv[i].addEventListener('click', () => {changeCompareImg(cleaningRugExamples[randomNumber])});
      };
    changeCompareImg(cleaningRugExamples[randomNumbersSelection[0]]);
  };
  
  assignCleaningExamples();





// Open the Learn more and shows more information  
 function openLearnMore() {

  let container = document.getElementById("learnMore");
  let containerText = document.getElementById("learnMoreText");
  const hiddenElements = document.getElementsByClassName("hiddenElement");
  let keyOpen = container.getAttribute("keyOpen");

  let height = 15;
  let inc= 5;
  
  if(keyOpen === "no") {

    container.style.top = '0';
    container.style.height = '40rem';
    container.setAttribute("keyOpen","yes");
    document.getElementById("buttonLearn").innerHTML = "Close Learn More" 

    height = 15;

    for (let i=0; i < 4; i++) {

      setTimeout(() => {
      height = height + inc;
      hiddenElements[i].style.display = "inline-block";
      containerText.style.height = `${height}rem`;
      }, i* 500);
    }  
  }
  else {
   
    height= 35;
    
    for (let i=0; i < 4; i++) {

      setTimeout(() => {
      height = height - inc;
      hiddenElements[i].style.display = "none";
      containerText.style.height = `${height}rem`;
      }, i* 500);
    }  


    container.style.top = '-15.1rem';
    container.style.height = '7rem';
    container.setAttribute("keyOpen","no");
    document.getElementById("buttonLearn").innerHTML = "Open Learn More"
  }
};




const button = document.getElementsByClassName("buttonLearnClass");
button[0].addEventListener("click", openLearnMore);
button[1].addEventListener("click", openLearnMore);

