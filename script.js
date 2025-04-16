// Function triggered from HTML onclick attribute
function continueToResultPage() {
    const session = document.getElementById("session_input").value.trim();
    const pin = document.getElementById("pin_input").value.trim();
  
    if (!session || !pin) {
      alert("Please enter both session and PIN.");
      return;
    }
  
    // Redirect to result page with session and PIN
    window.location.href = "Federal Science And Technical College Awka-real.html?session=" + encodeURIComponent(session) + "&pin=" + encodeURIComponent(pin);
  }
  
  // ========== RESULT PAGE SCRIPT ==========
  document.addEventListener("DOMContentLoaded", function () {
    const termLinks = document.querySelectorAll(".quick-btn");
    if (termLinks.length > 0) {
      const urlParams = new URLSearchParams(window.location.search);
      const session = urlParams.get("session");
      const pin = urlParams.get("pin");
  
      if (!session || !pin) {
        console.warn("Session and PIN not found in URL.");
        return;
      }
  
      termLinks.forEach(link => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
  
          let termText = this.innerText.toLowerCase();
          let term = "";
  
          if (termText.includes("first term")) term = "first_term";
          else if (termText.includes("second term")) term = "second_term";
          else if (termText.includes("third term")) term = "third_term";
          else if (termText.includes("annual")) term = "annual";
  
          if (!term) {
            alert("Unknown term format.");
            return;
          }
  
          const filePath = `${term}_${session}_${pin}.html`;
          window.open(filePath, "_blank");
          window.open(`Federal Science And Technical College Awka-pdf.html?term=${term}&session=${session}&pin=${pin}`, '_blank');
        });
      });
    }
  });
  // script.js


  
  
