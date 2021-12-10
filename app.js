var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#Output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslate(serverURL) {
    return serverURL + "?" + "text=" + txtInput.value;
}

function errorHandler(error) {
    console.log("error occured",console.error);
    alert("Something wrong with server! try again after some time");
}

function clickEventHandler() {
    fetch(getTranslate(serverURL))
        .then(response=>response.json())
        .then(json=>{
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
        
        })
    
    .catch(errorHandler)
}
btnTranslate.addEventListener("click",clickEventHandler);