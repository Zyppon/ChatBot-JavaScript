const chatForm = document.getElementById('chat-form');
const chatLog = document.getElementById('chatlog');
const userInput = document.getElementById('user-input');

chatForm.addEventListener('submit', handleFormSubmit);

const questions = {
    "hello": "Hello! How can I help you?",
    "website": "Our website will be avaible soon...",
    "contact": "There is! You can contact me on email contact.zyppon@gmail.com.",
  };
  

function handleFormSubmit(e) {
  e.preventDefault();
  const userMessage = userInput.value;
  displayMessage(userMessage, 'user');
  processUserInput(userMessage);
  userInput.value = '';
}

function displayMessage(message, sender) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message');
  messageContainer.classList.add(sender);
  messageContainer.textContent = message;
  chatLog.appendChild(messageContainer);
}

function processUserInput(userMessage) {
    userMessage = userMessage.toLowerCase();
    
    for (const keyword in questions) {
      if (userMessage.includes(keyword)) {
        const answer = questions[keyword];
        displayMessage(answer, 'bot');
        return; 
      }
    }
    
    displayMessage("I'm sorry ,  I can't understand your question.", 'bot');
  }
  