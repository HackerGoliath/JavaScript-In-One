const url = "https://icanhazdadjoke.com/"
const joke = document.querySelector("#joke")
const jokeBtn = document.querySelector("#jokeBtn")

// Promises =>
// const generateJoke = () => {
//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }
//     fetch(url, setHeader)
//         .then((res) => res.json())
//         .then((data) => {
//             joke.innerHTML = data.joke;
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }


// Async/Await =>
const generateJoke = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const res = await fetch(url, setHeader)
        const data = await res.json();
        joke.innerHTML = data.joke;
    } catch (error) {
        console.log("Error loading data", error);
    }

}

jokeBtn.addEventListener("click", generateJoke)
generateJoke();