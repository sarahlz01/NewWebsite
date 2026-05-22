// Creation of Adam Animation
let currentPadding = getBasePadding();
let resetTimer = null;

function getBasePadding() {
  return window.matchMedia("(max-width: 768px)").matches ? 5 : 20;
}

function closeGap() {
  const gap = document.getElementById("gap");
  const text = document.getElementById("gapText");

  // shrink padding
  currentPadding = Math.max(currentPadding * 0.1,1);
  gap.style.padding = `${currentPadding}vh`;

  // collapse text space smoothly
  text.style.maxWidth = "0";
  text.style.opacity = "0";

  clearTimeout(resetTimer);

  resetTimer = setTimeout(() => {
    // restore padding
    currentPadding = getBasePadding();
    gap.style.padding = `${currentPadding}vh`;

    // restore text space
    text.style.maxWidth = "200px";
    text.style.opacity = "1";
  }, 1000);
}