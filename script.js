console.log("i am JS")
let input = document.querySelector("#input")
let output = document.querySelector(".output")
let button = document.querySelector(".button")

button.addEventListener('click', async() => {
    const value = input.value
    if (value === "") {
        output.innerHTML = "Please enter a word for better meaning"
        // alert("please enter a word")
    }else {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
        let meaning =await fetch(url)
        meaning = await meaning.json()
        console.log("meaning",meaning[0]["meanings"][0]["definitions"][0]["definition"])  
        output.innerHTML = ("meaning",meaning[0]["meanings"][0]["definitions"][0]["definition"])
    }
})
