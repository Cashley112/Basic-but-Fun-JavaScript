

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


// request and (hopefully) receive data that is ALREADY parsed
// put in async function to await the returned, parsed data
const getDadJoke = async () => {
    try {
        const config = { headers : { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }
    
}

// do what you want with parased data
const addNewJoke = async () => {
    // must wait for promise to be resolved from get request
    const jokeText = await getDadJoke();
    // promise resolved, then proceed
    console.log(jokeText);
    const newLI = document.createElement('li');
    newLI.append(jokeText);
    jokes.append(newLI);
}

button.addEventListener('click', addNewJoke);