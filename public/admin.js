//require('dotenv').config();

async function fetchRes(){
    let message = document.getElementById('question').value;
    document.getElementById('question').value = '';
    let container = document.getElementById('container');
   
    console.log(message);
    container.innerHTML += `<li class="userques">${message}</li>`
    const url = 'https://infinite-gpt.p.rapidapi.com/infinite-gpt';
const options = {
  method: 'POST',
  headers: {
    'x-rapidapi-key': process.env.RAPID_KEY,
    'x-rapidapi-host': process.env.RAPID_HOST,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: `${message}`,
    sysMsg: 'You are a friendly Chatbot.'
  })
};

try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    container.innerHTML += `<li class="answer">${result.msg} </li>`
    container.scrollTo(0, container.scrollHeight);

} catch (error) {
	console.error(error);
}    

}

window.fetchRes = fetchRes;

