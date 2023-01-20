const ratingCard = document.querySelector(".ratingCard")
const thankYouCard = document.querySelector(".thankYouCard")
const submitButton = document.querySelector(".submit_button")
const ratingPoint = document.querySelector(".ratingPoint")
const ratingNumber = document.querySelectorAll(".rating_number")


submitButton.addEventListener("click",()=>{
    ratingCard.style.display = "none";
    thankYouCard.style.display = "block";
})

for (const rating of ratingNumber) {
    rating.addEventListener("click",(e)=>{
        ratingPoint.innerHTML = `You selected ${e.target.name} out of 5`
    });
    ratingPoint.innerHTML = `You selected 5 out of 5`;
}