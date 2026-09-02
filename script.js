//your JS code here. If required.
const form = document.getElementById("form");
    const age = document.getElementById("age");
    const name = document.getElementById("name");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const ageValue = age.value.trim();
      const nameValue = name.value.trim();

      if (ageValue === "" || nameValue === "") {
        alert("Please enter valid details.");
        return;
      }

      const ageNumber = Number(ageValue);

      const votingPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (ageNumber > 18) {
            resolve();
          } else {
            reject();
          }
        }, 4000);
      });

      votingPromise
        .then(() => {
          alert(`Welcome, ${nameValue}. You can vote.`);
        })
        .catch(() => {
          alert(`Oh sorry ${nameValue}. You aren't old enough.`);
        });
    });