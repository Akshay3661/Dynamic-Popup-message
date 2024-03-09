 const studentsinfo = [
  {
    name: "vikas nadar",
    Enrollment_No: 1,
    Marks: 50,
  },
  {
    name: "Namal kalan",
    Enrollment_No: 2,
    Marks: 25,
  },
  {
    name: "visvas dalal",
    Enrollment_No: 3,
    Marks: 33,
  },
  {
    name: "mani zalil",
    Enrollment_No: 4,
    Marks: 45,
  },
  {
    name: "karan malal",
    Enrollment_No: 5,
    Marks: 20,
  },
  {
    name: "skil khan",
    Enrollment_No: 6,
    Marks: 22,
  },
  {
    name: "priya raval",
    Enrollment_No: 7,
    Marks: 50,
  },
  {
    name: "nirma Nagar",
    Enrollment_No: 8,
    Marks: 50,
  },
  {
    name: "ravi batra",
    Enrollment_No: 9,
    Marks: 60,
  },
  {
    name: "kamal modi",
    Enrollment_No: 10,
    Marks: 22,
  },
];

const Table = document.querySelector("#stnTable tbody");

studentsinfo.forEach((item) => {
  const row = Table.insertRow();

  const cell1 = row.insertCell(0);
  cell1.innerHTML = item.name;

  const cell2 = row.insertCell(1);
  cell2.innerHTML = item.Enrollment_No;

  const cell3 = row.insertCell(2);
  const checkMarksButton = document.createElement("button");
  checkMarksButton.innerHTML = "Check Marks!";
  cell3.appendChild(checkMarksButton);

  checkMarksButton.addEventListener("click", () => {
    const modalName = document.querySelector(".Name");
    const modalEnNo = document.querySelector(".EnNO");  
    const modalMarks = document.querySelector(".marks");

    modalName.textContent = `Name: ${item.name}`;
    modalEnNo.textContent = `Enrollment No: ${item.Enrollment_No}`;
    modalMarks.textContent = `Marks: ${item.Marks}`;
    pop_open();
  });
});
console.log(studentsinfo);

// let openBtns = document.querySelectorAll("button");
let closebtn = document.querySelector(".closebtn");
let popupModal = document.getElementById("popupcontaner");

 function pop_open() {
  const modalMarks = document.querySelector(".marks");
  const marks = parseInt(modalMarks.innerHTML.replace("Marks: ", ""), 10);
  if (marks <= 23) {
    popup.style.backgroundColor = "red";
  } else {
    popup.style.backgroundColor = "lime";
  }
  popupModal.style.display = "block";
}
 function pop_close() {
  popupModal.style.display = "none";
}

closebtn.addEventListener("click", pop_close);







