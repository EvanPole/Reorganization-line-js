///////////////////////
//     Evan suire    //
///////////////////////
// * function for the game *

function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}


// ! Init game on load page !

const parentElements = document.getElementsByClassName("order-cont");
const heights = [];

Array.from(parentElements).forEach(parentElement => {
    for (let i = 0; i < 100; i++) {
        const bigline = document.createElement("div");
        bigline.className = "bigline";
        bigline.id = i;
        bigline.style.height = getRandomArbitrary(50, 350) + "px";
        bigline.style.backgroundColor = "red"
        parentElement.appendChild(bigline);
        heights.push({ element: bigline, height: parseInt(bigline.style.height) });
    }
});


// ! algorithm reclassification ! 

let end = false;
let iterationCount = 0;

function checkBigLines() {
  end = true;
  Array.from(parentElements).forEach(parentElement => {
    const biglines = parentElement.getElementsByClassName("bigline");

    for (let i = 0; i < biglines.length - 1; i++) {
      const currentHeight = parseInt(biglines[i].style.height, 10);
      const nextHeight = parseInt(biglines[i + 1].style.height, 10);

      if (currentHeight > nextHeight) {
        const tempHeight = biglines[i].style.height;
        biglines[i].style.height = biglines[i + 1].style.height;
        biglines[i + 1].style.height = tempHeight;

        end = false;
      }
    }
  });

  if (!end && iterationCount < 100) {
    iterationCount++;
    setTimeout(checkBigLines, 100);
  }
}

checkBigLines();

  