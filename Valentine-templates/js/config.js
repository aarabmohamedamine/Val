const openButton = document.querySelector("#open-btn")
const introScreen = document.querySelector("#intro-screen")
const unlockScreen = document.querySelector("#unlock-screen")
const dateInput = document.querySelector('#date-input')
const unlockButton = document.querySelector('#unlock-btn')
const errorMessage = document.querySelector('#error-message')
const correctDate = "15/03/2006"
const memoriesScreen = document.querySelector('#memories-screen')

openButton.addEventListener('click',function(){
    introScreen.style.display = "none";    
    unlockScreen.style.display = "flex"
})

unlockButton.addEventListener('click',function(){
    const userDate = dateInput.value;
    if (userDate === correctDate){
        unlockScreen.style.display = "none";
        memoriesScreen.style.display = "block";
    } else {
        errorMessage.textContent = "Wrong date. Try again";
    }



})