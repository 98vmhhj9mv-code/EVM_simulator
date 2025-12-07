// Load beep sound
const beep = new Audio("beep.mp3");

// Select the READY dot
const readyDot = document.querySelector(".ready-dot");

document.querySelectorAll("tr").forEach((row, index) => {
  const btn = row.querySelector(".vote-btn");
  const light = row.querySelector(".red-light");

  if (btn && light) {
    btn.addEventListener("click", () => {

      // --- Only first row can beep + light ---
      if (index === 1) {

        // Turn on light
        light.classList.add("active");
        readyDot.classList.add("active");

        // Play beep first
        beep.currentTime = 0;
        beep.play();

        // After beep finishes, show alert + redirect
        beep.onended = () => {
          alert("Vote successfully completed!");

          // Go to Vote Again Page
          window.location.href = "vote_again.html";
        };
      }

      else {
        // Disable light for other rows
        light.classList.remove("active");
        readyDot.classList.remove("active");
      }
    });
  }
});