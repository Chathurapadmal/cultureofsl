// JavaScript for Counting Animation
document.addEventListener("DOMContentLoaded", () => {
    const populationElement = document.getElementById("population");
    const targetPopulation = 22921000; // Target population value
    const duration = 2000; // Animation duration in milliseconds
    const increment = targetPopulation / (duration / 16); // Increment per frame (~60fps)

    let currentPopulation = 0;

    function updateCounter() {
        currentPopulation += increment;
        if (currentPopulation >= targetPopulation) {
            currentPopulation = targetPopulation;
            populationElement.textContent = targetPopulation.toLocaleString(); // Format with commas
            return;
        }
        populationElement.textContent = Math.floor(currentPopulation).toLocaleString();
        requestAnimationFrame(updateCounter);
    }

    updateCounter();
});
// JavaScript Document