function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "../login section/index.html";
}

let returnBtn = document.getElementById("returnBookBtn");

returnBtn.addEventListener("click", function() {
    let studentName = document.getElementById("studentName").value;
    let rollNumber = document.getElementById("rollNumber").value;
    let uniqueId = document.getElementById("uniqueId").value;

    if (studentName === "" || rollNumber === "" || uniqueId === "") {
        alert("❌ Sab fields bharo!");
        return;
    }

    let allStudents = localStorage.getItem("students");
    
    if (allStudents === null) {
        alert("❌ Koi book nahi mili!");
        return;
    }

    let students = JSON.parse(allStudents);
    let bookFound = false;

    for (let i = 0; i < students.length; i++) {
        if (students[i].name === studentName && 
            students[i].roll === rollNumber && 
            students[i].id === uniqueId) {
            
            students[i].status = "returned";
            students[i].fine = 0;
            
            bookFound = true;
            break;
        }
    }

    if (bookFound) {
        localStorage.setItem("students", JSON.stringify(students));
        alert("✅ Book Returned Successfully!");
        
        document.getElementById("studentName").value = "";
        document.getElementById("rollNumber").value = "";
        document.getElementById("uniqueId").value = "";
        
    } else {
        alert("❌ Data not found! Check Name, Roll No or Unique ID");
    }
});