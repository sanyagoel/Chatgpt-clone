//require('dotenv').config();

async function fetchRes(){
    const message = document.getElementById('question').value;
    const question = document.getElementById('userques');
    const answer = document.getElementById('answer');
    console.log(message);
    question.innerHTML += `<div>${message}</div>`
    const url = `https://chat-gpt-3-5-turbo2.p.rapidapi.com/?question=${message}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.RAPID_KEY  ,
        'x-rapidapi-host': process.env.RAPID_HOST
      }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        answer.innerHTML += `<div>${result.answer} </div>\n`
        console.log(result.answer);
    } catch (error) {
        console.error(error);
    }
}

window.fetchRes = fetchRes;

