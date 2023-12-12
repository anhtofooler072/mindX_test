let a = prompt("Nhập vào số a: ");

function numberOneTriangle(a) {
  if (a < 1 || a > 10) {
    console.log("Số a không hợp lệ - hay nhập lại số a tu 1 đến 10");
    alert("Số a không hợp lệ - hay nhập lại số a tu 1 đến 10");
  } else {
    for (let i = 1; i <= a; i++) {
      let star = "";
      for (let j = 1; j <= i; j++) {
        star += "*";
      }
      console.log(star);
    }
  }
}

numberOneTriangle(a);

// draw star
let stardraw = document.querySelector(".drawStar");
function drawStar(a) {
  for (let i = 1; i <= a; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    stardraw.innerHTML += star + "<br>";
  }
}

drawStar(a);
