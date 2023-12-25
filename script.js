const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");


yesBtn.addEventListener("click", () => {
  question.innerHTML = "Nice bizli yıllaraaa!";
  gif.src =
    "https://media4.giphy.com/media/6xday2oxXjltK9JUSg/giphy.gif?cid=ecf05e47k0266huf4q2cm4jwhlp7ze3t5juc1g4kb61j47qc&ep=v1_gifs_search&rid=giphy.gif&ct=g";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

});
