let camera = document.querySelector('#camera');
let drag = document.querySelector('#drag');
let printer = document.querySelector('#printer');

camera.addEventListener('click',(event) => {
    console.log('camera clicked');
    document.body.style.cursor="url('icons/camera.svg') 25 25,auto";
    camera.style.display="none";
    drag.style.display="flex";
    printer.style.display="flex";
});

drag.addEventListener('click',(event) => {
    console.log('drag clicked');
    document.body.style.cursor="url('icons/drag.svg') 25 25,auto";
    camera.style.display="flex";
    drag.style.display="none";
    printer.style.display="flex";
});

printer.addEventListener('click',(event) => {
    console.log('printer clicked');
    document.body.style.cursor="url('icons/printer.svg')25 25,auto";
    camera.style.display="flex";
    drag.style.display="flex";
    printer.style.display="none";
});

//big photo viewer
let viewer_area = document.querySelector("#viewer_area");
let zoom_sahra1 = document.querySelector("#zoom_sahra1");
console.log(viewer_area);
console.log(zoom_sahra1);

viewer_area.addEventListener("mousemove",function(event){
    clientX = event.clientX - viewer_area.offsetLeft;
    clientY = event.clientY - viewer_area.offsetTop

    mWidth = viewer_area.offsetWidth;
    mHeight = viewer_area.offsetHeight

    clientX = clientX / mWidth * 100
    clientY = clientY / mHeight * 100

    zoom_sahra1.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(4)'
});


viewer_area.addEventListener("mouseleave", function(){
    zoom_sahra1.style.transform = 'translate(-50%,-50%) scale(1)'
});


// Not working yet - photo viewer on Click

    // let photo1 = document.querySelector("#div1");
    // let hidden1 = document.querySelector(".hidden1");
    // photo1.addEventListener('click',(event) => {
    //     hidden1.style.display="flex";
    //     console.log('photo1 click');
    // })


//draggable
let chooseElement;

const move = function(element){
    const elements = document.querySelectorAll(".element")

    elements.forEach(element => {
        element.addEventListener("mousedown", () => {
            element.style.position = "absolute"
            chooseElement = element
            document.onmousemove = (e) => {
                let x = e.pageX
                let y = e.pageY

                chooseElement.style.left = x + "px"
                chooseElement.style.top = y + "px"

                // console.log(chooseElement)
            }
        })
    })
    document.onmouseup = function(e){
        chooseElement = null
    }
}

//resizing, can this become a single function?
    
let scaler = .004;

    function getPositionXY(element) {
    
    let rect = element.getBoundingClientRect();
    
     rect.y
     console.log(rect.y)
     let mult = (rect.y * scaler);
     let zIndexer = Math.trunc(rect.y);
     console.log(zIndexer);
     console.log(mult, 'newScale');
     document.querySelector("#div1").style.setProperty('--scaleSize', mult);
     document.querySelector("#div1").style.setProperty('--zIndex', zIndexer);

     if (mult > 0) {
     console.log ("Positive");
     }
     if (mult < 0) {
     console.log ("Negative");
     document.querySelector("#div1").style.display = "none";
     
     }
    }

function getPositionXY2(element) {
    
        let rect = element.getBoundingClientRect();
        
         rect.y
         console.log(rect.y)
         let mult = (rect.y * scaler);
         let zIndexer = Math.trunc(rect.y);
         console.log(mult, 'newScale');
         document.querySelector("#div2").style.setProperty('--scaleSize', mult);
         document.querySelector("#div2").style.setProperty('--zIndex', zIndexer);
    
         if (mult > 0) {
         console.log ("Positive");
         }
         if (mult < 0) {
         console.log ("Negative");
         document.querySelector("#div2").style.display = "none";
         
         }
        }

function getPositionXY3(element) {
    
            let rect = element.getBoundingClientRect();
            
             rect.y
             console.log(rect.y)
             let mult = (rect.y * scaler);
             let zIndexer = Math.trunc(rect.y);
             console.log(mult, 'newScale');
             document.querySelector("#div3").style.setProperty('--scaleSize', mult);
             document.querySelector("#div3").style.setProperty('--zIndex', zIndexer);
        
             if (mult > 0) {
             console.log ("Positive");
             }
             if (mult < 0) {
             console.log ("Negative");
             document.querySelector("#div3").style.display = "none";
             
             }
            }
 function getPositionXY4(element) {
    
              let rect = element.getBoundingClientRect();
                
              rect.y
              console.log(rect.y)
              let mult = (rect.y * scaler);
              let zIndexer = Math.trunc(rect.y);
             console.log(mult, 'newScale');
              document.querySelector("#div4").style.setProperty('--scaleSize', mult);
              document.querySelector("#div4").style.setProperty('--zIndex', zIndexer);
            
              if (mult > 0) {
              console.log ("Positive");
              }
             if (mult < 0) {
             console.log ("Negative");
             document.querySelector("#div4").style.display = "none";
                 
                 }
                }