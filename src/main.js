// ----------------------- Language change funtionality --------------------------------------------------
document.getElementById("language-toggle").addEventListener('change',(event)=>{
    setTimeout(applyLanguage.bind(null,event?.target?.checked ? "telugu" : "english"),500)
})


function applyLanguage(lang){
    const languageSpecificDetails = mainDetails.getDetails(lang)
    document.getElementById("intro-message").innerText = languageSpecificDetails.introMessage

    document.getElementById("bride-name").innerHTML = languageSpecificDetails.brideDetails.name
    document.getElementById("bride-owners").innerHTML = languageSpecificDetails.brideDetails.relationContent
    
    document.getElementById("groom-name").innerHTML = languageSpecificDetails.groomDetails.name
    document.getElementById("groom-owners").innerHTML = languageSpecificDetails.groomDetails.relationContent
    
    document.getElementById("reception-label").innerText = languageSpecificDetails.receptionLabel
    document.getElementById("reception-time").innerText = languageSpecificDetails.receptionTime
    document.getElementById("marriage-label").innerText = languageSpecificDetails.marriageLabel
    document.getElementById("marriage-time").innerText = languageSpecificDetails.marriageTime
    document.getElementById("venue-label").innerText = languageSpecificDetails.venueLabel
    document.getElementById("venue-value").innerText = languageSpecificDetails.venueValue
    
    document.getElementById("welcome-heading").innerText = languageSpecificDetails.welcomeHeading
    document.getElementById("welcome-note").innerHTML = languageSpecificDetails.welcomeNote
    document.getElementById("signature-head").innerText = languageSpecificDetails.signatureHead
    document.getElementById("signature-tail").innerHTML = languageSpecificDetails.signatureTail

    document.getElementById("main-footer").innerHTML = languageSpecificDetails.blessingNote
}
applyLanguage("english")

// -------------------------- Timer ------------------------------------------------

const timerElement = document.querySelector(".timer")
const TARGET_DATE = new Date(marriageTime)

const timerRef = setInterval(updateTimeRemaining,1000)
function updateTimeRemaining(){ 
    let timeDifference = TARGET_DATE - new Date()
    if(timeDifference<=0){
        timerElement.innerText = `🌹Happily Engaged🌹`
        clearInterval(timerRef)
        return
    }
    
    const days = Math.floor(timeDifference/(1000*60*60*24))
    timeDifference %= (1000*60*60*24)
    
    const hours = Math.floor(timeDifference/(1000*60*60))
    timeDifference %= (1000*60*60)
    
    const minutes = Math.floor(timeDifference/(1000*60))
    timeDifference %= (1000*60)

    const seconds = Math.floor(timeDifference/1000)

    timerElement.innerText = `${days}Ds : ${hours}Hrs : ${minutes}Mts : ${seconds}s`
}
updateTimeRemaining();

// ------------------------------- Horizontal scrolling -----------------------------------------------

(function (){
    const scrollingContents = document.querySelectorAll(".scrolling-content")
    scrollingContents.forEach((element, index) => {
        const fragment = document.createDocumentFragment()
        const duplicatedData = [...familyDetails[index], ...familyDetails[index], ...familyDetails[index], ...familyDetails[index]]
        duplicatedData.forEach(data => {
            const newElement = document.createElement("li")
            newElement.innerText = data
            newElement.classList.add("scrolling-tag")
            fragment.appendChild(newElement)
        });
        element.appendChild(fragment)
    });
    
})()