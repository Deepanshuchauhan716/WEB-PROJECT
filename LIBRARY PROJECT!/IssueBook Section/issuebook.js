function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "../login section/index.html";
}


document.querySelector(".issu").addEventListener("click", function(e){

    e.preventDefault(); // form reload rokega

    function generateId(){
      let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let id = "";

    for(let i = 0; i < 6; i++){
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
}

    // form se data uthao
    let name = document.querySelector(".StudentName").value;
    let roll = document.querySelector(".RollNumber").value;
    let book = document.querySelector(".BookName").value;
    let issueDate = document.querySelector(".IssuedDate").value;
    let returnDate = document.querySelector(".ReturnDate").value;

    // ek object banao
    let student = {
        name: name,
        roll: roll,
        book: book,
        issueDate: issueDate,
        returnDate: returnDate,
        id:generateId(),
        fine: 0
    };

    // pehle ka data nikalo
    let data = JSON.parse(localStorage.getItem("students")) || [];

    // new data add karo
    data.push(student);

    // dobara save karo
    localStorage.setItem("students", JSON.stringify(data));

    alert("Book Issued ✅");

    // form clear
    document.querySelector("form").reset();
});
