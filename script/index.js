import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/button/filled-tonal-button";
import "@material/web/icon/icon";
import "@material/web/divider/divider";

// Set up preferred color scheme
const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');

const toggleBodyClass = (e) => {
  document.body.classList.toggle('dark', e.matches);
};

// Initial setting and listener for color scheme changes
toggleBodyClass(colorScheme);
colorScheme.addEventListener('change', toggleBodyClass);

document.addEventListener("DOMContentLoaded", () => {
  const words = ["developing", "designing", "building", "creating", "coding", "crafting"];
  let currentIndex = 0;
  const dynamicWordElement = document.getElementById("dynamic-word");
  const vibrantElement = document.getElementsByClassName("vibrant")[0];

  const changeWord = () => {
    currentIndex = (currentIndex + 1) % words.length;
    dynamicWordElement.textContent = words[currentIndex];

    // Update colors
    const newColor = getComputedStyle(document.body).getPropertyValue(`--color-${["primary", "secondary", "tertiary", "quaternary", "quinary", "senary"][currentIndex]}`);
    dynamicWordElement.style.color = vibrantElement.style.color = newColor;

    // Animation reset
    dynamicWordElement.classList.remove("slide-in");
    void dynamicWordElement.offsetWidth; // Reflow
    dynamicWordElement.classList.add("slide-in");
  };

  setInterval(changeWord, 2000);
});
