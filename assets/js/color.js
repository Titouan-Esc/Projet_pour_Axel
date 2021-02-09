const randomColor = document.querySelector('#color_button');
const bgColor = document.querySelector('main');
const hexArray = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const inputColor = document.querySelector('#color-input')
const pickedColor = document.querySelector('#colorPicker')

randomColor.addEventListener('click', (e) =>{
    const colorPicked = [];
    for(i = 0 ; i < 6 ; i++){
        let color = hexArray[Math.floor(Math.random() * hexArray.length)];
        colorPicked.push(color)
    }
    const colorHex = colorPicked.join('')
    bgColor.style.background = `#${colorHex}`

});

inputColor.addEventListener('keyup', (e) => {
    const userInput = inputColor.value;
    if(userInput.length === 3 || userInput.length === 6){
        bgColor.style.background = `#${userInput}`
    } else {
        inputColor.style.border = '1px solid red'
    }
});

