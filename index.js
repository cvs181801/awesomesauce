var mallText = document.querySelector("#mallSoftText").textContent;
mallText = "Happiness";
mallSoftText.style.color = "teal";

//add button controls
var page1Btn = document.getElementById("btnPage1");
page1Btn.style.color = "purple";

const handleButtonClickfunction () {
    page1Btn.innerHTML += "<button>Call 1-800-tRopicAL-PoPicAl</button>";
}
page1Btn.addEventListener("click", handleButtonClickfunction);

//add text box controls
var inputBox = document.getElementById("text-boxPg1")
inputBox.value = "Hey!";





