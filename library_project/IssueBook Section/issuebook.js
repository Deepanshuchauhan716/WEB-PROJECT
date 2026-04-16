function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "../index.html";
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

    let name = document.querySelector(".StudentName").value;
    let roll = document.querySelector(".RollNumber").value;
    let book = document.querySelector(".BookName").value;
    let issueDate = document.querySelector(".IssuedDate").value;
    let returnDate = document.querySelector(".ReturnDate").value;

    // ❌ validation
    if(name === "" || roll === "" || book === "" || issueDate === "" || returnDate === ""){
        alert("❌ Sab fields bharo!");
        return;
    }

    let student = {
        name: name,
        roll: roll,
        book: book,
        issueDate: issueDate,
        returnDate: returnDate,
        id: generateId(),
        fine: 0,
        status: "issued"
    };

    let data = JSON.parse(localStorage.getItem("students")) || [];

    data.push(student);

    localStorage.setItem("students", JSON.stringify(data));


    let books = JSON.parse(localStorage.getItem("books"));

    if(books){
        for(let i = 0; i < books.length; i++){
            if(books[i].category === book){

                if(books[i].available > 0){
                    books[i].available--;   // 👈 100 → 99
                }else{
                    alert("❌ Book not available!");
                    return;
                }

                break;
            }
        }

        localStorage.setItem("books", JSON.stringify(books));
    }


    document.getElementById("issuePopup").style.display = "flex";

    document.getElementById("closeIssue").onclick = function() {
        document.getElementById("issuePopup").style.display = "none";
    };

    document.querySelector("form").reset();

});