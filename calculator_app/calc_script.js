var value = 0;
var operation = "";

var dec = false;

var first=0;

function clearResult() {
  const res = document.querySelector(".result");
  value = 0;
  operation = " ";
  res.innerText = value;
}

function deleteNum() {
  const res = document.querySelector(".result");
  let num = res.innerText;
  if (num / 10 < 1) {
    res.innerText = 0;
    return;
  }
  let newNum = "";
  for (let i = 0; i < num.length - 1; i++) newNum += num[i];
  res.innerText = newNum;
  value = newNum;
  operation = "";
}

function reciprocal() {
  const res = document.querySelector(".result");
  let num = res.innerText;
  value = 1 / num;
  res.innerText = value;
  operation = "";
}

function square() {
  const res = document.querySelector(".result");
  let num = res.innerText;
  value = num * num;
  res.innerText = value;
}

function squareRoot() {
  const res = document.querySelector(".result");
  let num = res.innerText;
  value = Math.sqrt(num);
  res.innerText = value;
}

function enterNum(inp) {
  let res = document.querySelector(".result");
  let value = res.innerText;

  if (operation==="over"){
    value=inp;
    operation=" ";
  }
  else if (dec === true) {
    value = Number(value + inp);
  }
  else 
    value = value * 10 + inp;
    
  res.innerText = value;
}

function arithmatic(symbol) {
  const res = document.querySelector(".result");
  value = res.innerText;
  first=value;
  dec = false;
  res.innerText=0;
  operation = symbol;
}

function decimal() {
  let res = document.querySelector(".result");

  let currVal = res.innerText;
  currVal = currVal + ".";
  res.innerText = currVal;
  dec = true;
}

function showResult() {
  const res = document.querySelector(".result");
  value = res.innerText;

  if (operation==="div"){
    let ans=first/value;
    res.innerText=ans;
    operation="over";
  }

  if (operation==="mul"){
    let ans=first*value;
    res.innerText=ans;
    operation="over";
  }

  if (operation==="sub"){
    let ans=first-value;
    res.innerText=ans;
    operation="over";
  }

  if (operation==="add"){
    let ans=Number(first)+Number(value);
    res.innerText=ans;
    operation="over";
  }

}
