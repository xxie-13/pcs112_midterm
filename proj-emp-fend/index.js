const content = document.querySelector("#content");
const submit = document.querySelector("#add");
window.addEventListener("load", () => {
  getEnrollment();
});

function getEnrollment() {
  let html = "";
  //FETCH API
  fetch("https://pcs112-midterm.onrender.com/api/enrollment", {
    mode: "cors",
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        html += `<li>${element.id} ${element.productName} - ${element.category} | ${element.stockCount} | ${element.locationCode}| ${element.lastUpdated}</li>`;
      });
      content.innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
}

//POST API
submit.addEventListener("click", () => {
  const id = document.querySelector("#id").value;
  const productName = document.querySelector("#productName").value;
  const category = document.querySelector("#category").value;
  const stockCount = document.querySelector("#stockCount").value;
  const locationCode = document.querySelector("#locationCode").value;
  const lastUpdated = document.querySelector("#lastUpdated").value;
  const product = { id, productName, category, stockCount, locationCode, lastUpdated };
  fetch("https://pcs112-midterm.onrender.com/api/enrollment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enrollments),
  }).catch((error) => {
    console.log(error);
  });
  alert("Enrollment added successfully");
  location.reload();
});

