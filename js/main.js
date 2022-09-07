// Enter your JavaScript for the solution here...


//1. populate the image from selected value of drop down display liat

//grab form
let mainForm = document.querySelector('.meme-form');
//error message area
let errorMessage = document.querySelector(".error");
//grabbing image
let image = document.querySelector("img");

// grab p element for txt
let imageTopText = document.querySelector(".top-text");
let imageBottomText = document.querySelector(".bottom-text");

// create function for inserting url and alt info into class
function insertImage(url){
    image.src = "img/" + url;
    // remove - and .png from alt
    image.alt = url.replace(/-|.png/g,"");
}

// adding eventlistener for submit
mainForm.addEventListener("submit",function (event){

    let frm = event.target;
    //grabbing the drop down list
    let imageList = frm.elements.memeImage;
    errorMessage.innerHTML = "";

    // add in text from input
    // grab the value from input
    let topText = frm.elements.memeTopText;
    let bottomText = frm.elements.memeBottomText;

    // create function for inserting bottom and top text
    function insertText(){
        imageTopText.innerHTML = topText.value;
        imageBottomText.innerHTML = bottomText.value;
    }

    let boolCheck = true;

    //validation for empty
    if(topText.value.trim() === ""){
        errorMessage.innerHTML += "Please enter at least on letter into the top text box <br/>";
        boolCheck = false;
    }

    if (bottomText.value.trim() === ""){
        errorMessage.innerHTML += "Please enter at least one letter into the bottom text box <br/>";
        boolCheck = false;
    }

    if(imageList.value === ""){
        errorMessage.innerHTML += "Please select an image from the drop down list <br/>"
        boolCheck = false;
    }

    if(boolCheck){

        // Image Selection decision            
        if(imageList.value === "fry-meme"){
            insertImage("fry-meme.png");
            insertText()
        }
        
        else if(imageList.value === "one-does-not-simply-meme"){
            insertImage("one-does-not-simply-meme.png");
            insertText()
        }
        
        else if(imageList.value === "most-interesting-man-meme"){
            insertImage("most-interesting-man-meme.png");
            insertText()
        }        
    }
      
    //debug and prevent default
    // console.log(topText.value);
    event.preventDefault();
});

// RESET BUTTON PRESSED
mainForm.addEventListener("reset",function(event){

    let frm = event.target;

    //grabbing the drop down list and setting back to default
    let imageList = frm.elements.memeImage;
    imageList.value = "";

    // text reset
    let topText = frm.elements.memeTopText;
    let bottomText = frm.elements.memeBottomText;

    topText.value = "";
    bottomText.value = "";

    imageTopText.innerHTML = "";
    imageBottomText.innerHTML = "";

    // image reset
    image.src = "https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown";
    image.alt = "Placeholder Image";

    event.preventDefault();
    
});
