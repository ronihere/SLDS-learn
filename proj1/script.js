function startit() {
  let contactbutton = document.querySelector("#Contact");

  contactbutton.addEventListener("click", () => {
    console.log("contact-button clicked");
    // document.getElementById("contactus").scrollIntoView();
  });
}
startit();
