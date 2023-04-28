const melumat = document.querySelector(".melumat");
const btn = document.querySelector(".btn");
const cantiner = document.querySelector(".cantiner");
const cavab = document.querySelector(".cavab");
cantiner.addEventListener("submit", function (e) {
    e.preventDefault();
    if (melumat.value == "") {
    alert("deyer yazin");
  } 
  else {
    const yeni = document.createElement("div");
    yeni.innerText = melumat.value;
    cavab.appendChild(yeni);
    melumat.value = "";
    const btn1 = document.createElement("button");
    yeni.appendChild(btn1);
    btn1.innerText = "edit";
    const btn2 = document.createElement("button");
    yeni.appendChild(btn2);
    btn2.innerText = "Delete";
    btn2.addEventListener("click", function () {
    yeni.remove();
    });
    btn1.addEventListener("click",)
    }
});
