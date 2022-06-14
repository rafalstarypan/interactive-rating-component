const setSelectedNumberInfo = () => {
  const selectedNumber = Number(localStorage.getItem("selectedNumber"));
  const element = document.querySelector(".answerWrapper");
  element.innerHTML = `You selected ${selectedNumber} out of 5`;
};

setSelectedNumberInfo();
