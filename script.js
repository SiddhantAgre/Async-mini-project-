const URL = "https://cat-fact.herokuapp.com/facts";
const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
const button3 = document.querySelector("#three");
const button4 = document.querySelector("#four");
const para = document.querySelector(".data")

const printURL1 = async function () {
  response = await fetch(URL);
  console.log(response);
  const data = await response.json();
  // console.log(data[2].text)
  para.innerText = data[1].text
}

const printURL2 = async function () {
  response = await fetch(URL);
  console.log(response);
  const data = await response.json();
  // console.log(data[2].text)
  para.innerText = data[2].text
}

const printURL3 = async function () {
  response = await fetch(URL);
  console.log(response);
  const data = await response.json();
  // console.log(data[2].text)
  para.innerText = data[3].text
}

const printURL4 = async function () {
  response = await fetch(URL);
  console.log(response);
  const data = await response.json();
  // console.log(data[2].text)
  para.innerText = data[4].text
}


button1.addEventListener('click', printURL1);
button2.addEventListener('click', printURL2);
button3.addEventListener('click', printURL3);
button4.addEventListener('click', printURL4);
