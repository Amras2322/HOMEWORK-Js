document.addEventListener("DOMContentLoaded", () => {
    const volunteerForm = document.getElementById("volunteer-form");
    const thankYouMessage = document.getElementById("thank-you-message");
  

    document.getElementById("volunteer-btn").addEventListener("click", () => volunteerForm.style.display = "block");
    volunteerForm.addEventListener("submit", e => {
      e.preventDefault();
      fetch("https://api.sheetson.com/v2/sheets/Emails", {
    //fetch("https://api.sheetson.com/v2/sheets/1xvQopqgOzD4tIeAqJzikHZGUI14aIcswiiN_vuLIGjk", {
        method: "POST",
        headers: {
          "Authorization": "RR4pA-R_W627nlYGnFsbwX65C8OpKZI0wNCHQqMYrKYTdijRVipiZsNe83I",
          "X-Spreadsheet-Id": "1xvQopqgOzD4tIeAqJzikHZGUI14aIcswiiN_vuLIGjk",
        "Content-Type": "application/json"
        },
        body: JSON.stringify({Email: document.getElementById("email-input").value })
      })
      .then(result => console.log(result))
      //.then(response => response.ok && (volunteerForm.style.display = "none", thankYouMessage.style.display = "block"))
      //.catch(console.error);
    });
  });

  