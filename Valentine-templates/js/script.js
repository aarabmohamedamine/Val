const openButton = document.querySelector("#open-btn");
const introScreen = document.querySelector("#intro-screen");
const unlockScreen = document.querySelector("#unlock-screen");
const dateInput = document.querySelector("#date-input");
const unlockButton = document.querySelector("#unlock-btn");
const errorMessage = document.querySelector("#error-message");
const correctDate = CONFIG.specialDate;
const memoriesScreen = document.querySelector("#memories-screen");
const continueButton = document.querySelector("#continue-btn");
const messagesScreen = document.querySelector("#messages-screen");
const messageCards = document.querySelectorAll(".message-card");
const finalButton = document.querySelector("#final-btn");
const finalScreen = document.querySelector("#final-screen");
const surpriseButton = document.querySelector("#surprise-btn");
const surpriseMessage = document.querySelector("#surprise-message");
const introSmallText = document.querySelector("#intro-small-text");
const introTitle = document.querySelector("#intro-title");
const introText = document.querySelector("#intro-text");
const recipientName = document.querySelector("#recipient-name");
const unlockText = document.querySelector("#unlock-text");
const dateQuestion = document.querySelector("#date-question");
const finalTitle = document.querySelector("#final-title");
const finalParagraph1 = document.querySelector("#final-paragraph1");
const finalParagraph2 = document.querySelector("#final-paragraph2");

openButton.addEventListener("click", function () {
    showScreen(introScreen, unlockScreen, "flex");
});

unlockButton.addEventListener("click", function () {
  const userDate = dateInput.value;
  if (userDate === correctDate) {
    showScreen(memoriesScreen, messagesScreen);
  } else {
    errorMessage.textContent = "Wrong date. Try again";
  }
});

continueButton.addEventListener("click", function () {
    showScreen(memoriesScreen, messagesScreen);
});

finalButton.addEventListener("click", function () {
    showScreen(messagesScreen, finalScreen);
});

surpriseButton.addEventListener("click", function () {
  surpriseMessage.textContent = CONFIG.surpriseMessage;
});

introSmallText.textContent = CONFIG.introSmallText;
introTitle.textContent = CONFIG.introTitle;
introText.textContent = CONFIG.introText;

recipientName.textContent = CONFIG.recipientName;

unlockText.textContent = CONFIG.unlockText;
dateQuestion.textContent = CONFIG.dateQuestion;

const memoriesContainer = document.querySelector("#memories-container");

CONFIG.memories.forEach(function (memory) {
  const memoryCard = document.createElement("div");
  memoryCard.classList.add("memory-card");

  const image = document.createElement("img");
  image.src = memory.image;
  image.alt = memory.title;

  const title = document.createElement("h3");
  title.textContent = memory.title;

  const text = document.createElement("p");
  text.textContent = memory.text;

  memoryCard.appendChild(image);
  memoryCard.appendChild(title);
  memoryCard.appendChild(text);

  memoriesContainer.appendChild(memoryCard);
});

const messagesContainer = document.querySelector("#messages-container");

CONFIG.openWhen.forEach(function (message) {
  const messageCard = document.createElement("div");
  messageCard.classList.add("message-card");

  const title = document.createElement("h3");
  title.textContent = message.title;

  const hiddenMessage = document.createElement("p");
  hiddenMessage.classList.add("hidden-message");
  hiddenMessage.textContent = message.message;

  messageCard.appendChild(title);
  messageCard.appendChild(hiddenMessage);

  messagesContainer.appendChild(messageCard);

  messageCard.addEventListener("click", function () {
    messageCard.classList.toggle("open");
  });
});

finalTitle.textContent = CONFIG.finalTitle;
finalParagraph1.textContent = CONFIG.finalParagraph1;
finalParagraph2.textContent = CONFIG.finalParagraph2;



function showScreen(currentScreen, nextScreen, displayType = "block") {

    currentScreen.style.display = "none";

    nextScreen.style.display = displayType;

    nextScreen.classList.remove("screen-enter");
    void nextScreen.offsetWidth;
    nextScreen.classList.add("screen-enter");
}
