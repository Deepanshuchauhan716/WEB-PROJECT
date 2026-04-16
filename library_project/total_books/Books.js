// 👇 first time data set (run once)
if(!localStorage.getItem("books")){
    let books = [
        {category:"English", total:100, available:100},
        {category:"Hindi", total:200, available:200},
        {category:"Data Structure", total:400, available:400},
        {category:"Physics", total:50, available:50}
    ];
    localStorage.setItem("books", JSON.stringify(books));
}


// 🔥 UI update function
function updateBookUI(){

    let books = JSON.parse(localStorage.getItem("books"));
    if(!books) return;

    books.forEach(book => {

        let availableId, statusId;

        if(book.category === "English"){
            availableId = "engAvailable";
            statusId = "engStatus";
        }
        else if(book.category === "Hindi"){
            availableId = "hindiAvailable";
            statusId = "hindiStatus";
        }
        else if(book.category === "Data Structure"){
            availableId = "dsAvailable";
            statusId = "dsStatus";
        }
        else if(book.category === "Physics"){
            availableId = "phyAvailable";
            statusId = "phyStatus";
        }

        // update available
        document.getElementById(availableId).innerText = book.available;

        // status logic
        let issued = book.total - book.available;

        if(issued > 0){
            document.getElementById(statusId).innerText = issued + " Borrowed";
            document.getElementById(statusId).style.color = "red";
        }else{
            document.getElementById(statusId).innerText = "Available";
            document.getElementById(statusId).style.color = "green";
        }

    });
}

// page load pe run
updateBookUI();