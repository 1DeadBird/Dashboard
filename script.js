const toggle = document.getElementById("toggle");
const body = document.body;

toggle.addEventListener("input", (e) => {
  const isChecked = e.target.checked;

  if (isChecked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
