// part for accessing html elements 
const sound = document.getElementById('sound')
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const phonetic = document.getElementById('phonetic')
const meanings = document.getElementById('para1')
const example = document.getElementById('para2')
const speech = document.getElementById('speech')
const sample = document.getElementById('sample')
const panto = document.getElementById("p-anto")
const psynto = document.getElementById("p-synto")


// function for executing button
function btn (){
    //accesing the input element
    const input = document.getElementById('input')
    const search = input.value
    //converted the input value to lowercase
    const seek = search.toLowerCase();
    // sample innertext
    fetch(`${url} ${seek}`)
    .then(Response => Response.json())
    .then(json => {
      // rendering result in html
      phonetic.innerText = `${json[0].phonetic}`
      const symbol = (phonetic.innerText)
      if (symbol == 'undefined'){
        phonetic.innerText = ''
      }else{
        phonetic.innerText = `${json[0].phonetic}`

      }
      // appending the api result in the declared variable innertext
      sample.innerHTML = `${seek}`
     speech.innerHTML = `${json[0].meanings[0].partOfSpeech}`
       meanings.innerHTML = `${json[0].meanings[0].definitions[0].definition}`
     example.innerHTML = `${json[0].meanings[0].definitions[0].example}`
     const exam = (example.innerHTML)
     if (exam == 'undefined'){
      example.innerText = ''
     }else{example.innerText = exam}
     panto.innerHTML = `${json[0].meanings[0].antonyms[0]}`
     panto.style.opacity = 0
     psynto.innerHTML = `${json[0].meanings[0].synonyms[0]}`
     psynto.style.opacity = 0

    })
  
  }

// function for running audio for input value
const audiosound = document.getElementById('sound')
audiosound.onclick = () => {
const audio = (sample.innerText )
var speech = new SpeechSynthesisUtterance();

    // defing speech properties
    speech.lang =  "en-NG";
    speech.text = audio;
    speech.volume = 30;
    speech.pitch = 1;
    speech.rate = 1;


    window.speechSynthesis.speak(speech)
}


    // grabbed the antonynms btn basically for detecting unfamiliar word and display it in the 'panto' (antonynyms)
const antonyms = document.getElementById("ANTO")
antonyms.onclick = () => {
  const pant = (panto.innerHTML)
  if (pant == 'undefined'){
    panto.innerText = 'I couldnt fetch it out😌'
  }else{
    panto.innerText = pant
  }
  panto.style.opacity = 1

}

    //grabbed the synonyms  basically for detecting unfamiliar word and display it in the 'panto' (antonynyms)

const synonyms = document.getElementById("SYNO")
synonyms.onclick = () => {
  const syno = (psynto.innerHTML)
  if (syno == 'undefined'){
    psynto.innerText =  'I couldnt fetch it out😌'
  }else{
    psynto.innerText = syno
  }
  psynto.style.opacity = 1

}

