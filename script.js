// Function to show the popup
function addRecommendation() {
    // Show the modal
    const modal = document.getElementById("confirmationModal");
    modal.style.display = "flex";
    
    // Close the modal when the user clicks on the "x" (close button)
    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
      modal.style.display = "none"; // Hide the modal when clicked
    }
    
    // Also close the modal if the user clicks anywhere outside of the modal
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  }
