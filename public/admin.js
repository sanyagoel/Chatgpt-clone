// require('dotenv').config();


async function addquestion(button){
  let message = button.querySelector('p').textContent;
  fetchRes(message);
}


async function copyClipboard(button){
  let answer = button.closest('.answer').querySelector('p').textContent;
  navigator.clipboard.writeText(answer);
}

async function toSpeech(button){
  const speechSynth = window.speechSynthesis;
  let answer = button.closest('.answer').querySelector('p').textContent;
  console.log(answer);

  if(!speechSynth.speaking && answer.trim().length){
    const newUtter = new SpeechSynthesisUtterance(answer);
    speechSynth.speak(newUtter); 

    
  button.addEventListener('click',matres);

  function matres(){
      speechSynth.cancel();
      button.removeEventListener('click',matres); // Remove the event listener after canceling speech
    
  }

  }

}


async function fetchRes(message){
  // if(message===undefined){
  //   message = document.getElementById('question').value;
  // }
  let homeOptions = document.getElementById('homeOptions');
    homeOptions.innerHTML = '';
  let remove = document.getElementById('removed');
  if(remove){
    remove.remove();

  }
    document.getElementById('question').value = '';
    let container = document.getElementById('container');
    console.log(message);
    container.innerHTML += `<li class="userques">${message}</li>`
    container.innerHTML += `<li>                </li>`


    const url = 'https://cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com/v1/chat/completions';

const options = {
  method: 'POST',
  headers: {
    'x-rapidapi-key': process.env.RAPID_KEY,
    'x-rapidapi-host': process.env.RAPID_HOST,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    messages: [
      {
        role: 'user',
        content: `${message}`
      }
    ],
    model: 'gpt-4-turbo-2024-04-09',
    max_tokens: 100,
    temperature: 0.9
  }
)

};

try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.choices[0].message.content);

    container.innerHTML += `<li class="answer">
    <div class="logocontainer">
        <img class="logochatgpt" src="../images/logo.png"/>
        <p>${result.choices[0].message.content}</p>
    </div>
    <button class="answerbuttons" onClick=copyClipboard(this)><img src="../images/logocopy2.png"/></button>
    <button class="answerbuttons2" onClick=toSpeech(this)><img src="../images/file.png"/></button>
</li>
`
    container.scrollTo(0, container.scrollHeight);

} catch (error) {
	console.error(error);
}    

}

window.fetchRes = fetchRes;
window.copyClipboard = copyClipboard;
window.toSpeech = toSpeech;
window.addquestion = addquestion;