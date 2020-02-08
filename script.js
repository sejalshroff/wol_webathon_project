// Get an HTML element in JavaScript code
const signup = document.querySelector(".signup");
const signupModal = document.querySelector(".signup-modal-wrapper");
const closeButton = document.querySelector(".close-modal");

// function which shows the modal by changing the style of signupModal to "block"
const showModal = () => {
  signupModal.style.display = "block";
};

// function which hides the modal by changing the style of signupModal to "none"
const closeModal = () => {
  signupModal.style.display = "none";
};

// Call the showModal function when signup button is clicked
signup.addEventListener("click", () => {
  showModal();
});

// Call the closeModal function when close button on the modal is clicked
closeButton.addEventListener("click", () => {
  closeModal();
});

// Call the closeModal function when anywhere outside of the modal is clicked
window.addEventListener("click", () => {
  if (event.target === modal) {
    closeModal();
  }
});

var user = {
    validateCredentials: function (username, password) {
      return (
          (!(username += '') || username === '') ? { error: "No Username Given.", field: 'name' }
        : (!(username += '') || password === '') ? { error: "No Password Given.", field: 'pass' }
        : (username.length < 3)                  ? { error: "Username is less than 3 Characters.", field: 'name' }
        : (password.length < 4)                  ? { error: "Password is less than 4 Characters.", field: 'pass' }
        : (!/^([a-z0-9-_]+)$/i.test(username))   ? { error: "Username contains invalid characters.", field: 'name' }
        : false
      );
    }
  };

  var results = user.validateCredentials(uname,psw);
  console.log(results);
