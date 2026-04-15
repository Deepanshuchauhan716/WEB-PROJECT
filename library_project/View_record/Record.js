
let students = JSON.parse(localStorage.getItem("students")) || [];

let table = document.getElementById("recordTable");
let totalBorrowed = document.getElementById("totalBorrowed");
let totalReturned = document.getElementById("totalReturned");

let borrowedCount = 0;
let returnCount = 0;

students.forEach((s)=>{

    borrowedCount++;

    if(s.status === "returned"){
        returnCount++;
    }

    let color = s.status === "returned" ? "green" : "red";
    let statusText = s.status === "returned" ? "Returned" : "Borrowed";

    let row = `
        <tr>
            <td>${s.name}</td>
            <td>${s.roll}</td>
            <td>${s.book}</td>
            <td>${s.issueDate}</td>
            <td>${s.returnDate}</td>
            <td style="color:${color}; font-weight:bold;">
                ${statusText}
            </td>
        </tr>
    `;

    table.innerHTML += row;

});

// ================= UPDATE CARDS =================
totalBorrowed.innerText = borrowedCount;
totalReturned.innerText = returnCount;