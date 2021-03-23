const main = document.querySelector("#input-area")
const btn = document.querySelector("#btn-main")
const mainOutput = document.querySelector("#output-area")
const serverURL = "https://api.funtranslations.com/translate/minion.json"
const urlGenerator=(text)=>{
    return `${serverURL}?text=${text}`
}

 const translator=(text)=>{
     fetch(urlGenerator(text))
     .then(response=>response.json())
     .then(json=>{
         const translatedText = json.contents.translated
         mainOutput.innerText = translatedText
     })
}
 function clickHandler(){
     translator(main.value)
    
 }
 btn.addEventListener("click",clickHandler)