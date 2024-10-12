document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    let square = 16;


    function buildGrids() {
        for (let i = 0; i < square * square; i++) {
            const divGrid = document.createElement('div');
            divGrid.classList.add('grid-item');
            divGrid.style.width = 100/square +'%' ;
            divGrid.style.height = 100/square +'%' ;
            container.appendChild(divGrid);
        }

        const hoverGrid = document.querySelectorAll('.grid-item');

        hoverGrid.forEach(item => {
            item.addEventListener('mouseover', ()=>{
                item.style.backgroundColor = getRandomHexColor();
                
            });
    
        });

        function getRandomHexColor() {
            // Generate a random number between 0 and 16777215 (0xFFFFFF in hexadecimal)
            const randomNumber = Math.floor(Math.random() * 16777215);
          
            // Convert the random number to a hexadecimal string with 6 digits
            const randomColor = "#" + randomNumber.toString(16).padStart(6, '0'); 
          
            return randomColor;
          }



    }

    
    
    const button = document.createElement('button');
    button.type = 'number';
    button.min = '1';
    button.max = '100';
    button.textContent = "New Sketch pad";
    button.style.padding = '12px';
    button.style.borderRadius = '10px';
    button.style.backgroundColor = 'lightblue';
    button.style.maxWidth = '150px';
    document.body.prepend(button);

    button.addEventListener('click', ()=>{
const userInput = prompt('number of squares per side');

// Select all div elements with a specific class (replace 'your-class-name' with your actual class name)
const elementsToRemove = document.querySelectorAll('.grid-item');

// Iterate over each element and remove it
elementsToRemove.forEach(element => {
    element.remove();
});
square = userInput;
buildGrids();
    });

    
buildGrids();

});

