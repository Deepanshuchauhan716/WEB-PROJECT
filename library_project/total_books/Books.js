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
// 🔥 TOP BORROWED BOOK FUNCTION
function showTopBorrowedBook(){

    let books = JSON.parse(localStorage.getItem("books"));
    if(!books) return;

    let topBook = "";
    let maxBorrowed = 0;

    books.forEach(book => {

        let borrowed = book.total - book.available;

        if(borrowed > maxBorrowed){
            maxBorrowed = borrowed;
            topBook = book.category;
        }

    });

    // 👇 UI update
    document.getElementById("topBookName").innerText = topBook || "No Data";
    document.getElementById("topBookCount").innerText = maxBorrowed + " Borrowed";
}

function showStudentRanking(){

    let data = JSON.parse(localStorage.getItem("students")) || [];

    if(data.length === 0){
        document.getElementById("rankingList").innerHTML = "No Data";
        return;
    }

    let studentCount = {};

    // 👇 name + roll ko unique key bana diya
    data.forEach(item => {

        let key = item.name + " (" + item.roll + ")";

        if(studentCount[key]){
            studentCount[key]++;
        }else{
            studentCount[key] = 1;
        }

    });

    // convert to array
    let rankingArray = [];

    for(let key in studentCount){
        rankingArray.push({
            student: key,
            count: studentCount[key]
        });
    }

    // sort descending
    rankingArray.sort((a, b) => b.count - a.count);

    // top 5
    let topStudents = rankingArray.slice(0, 5);

    // UI
    let html = "";

    topStudents.forEach((item, index) => {
        html += `
            <div class="rank-item">
                <span>#${index+1} ${item.student}</span>
                <span>${item.count} Books</span>
            </div>
        `;
    });

    document.getElementById("rankingList").innerHTML = html;
}
function showTotalFine(){

    let data = JSON.parse(localStorage.getItem("students")) || [];

    let totalFine = 0;

    data.forEach(item => {
        totalFine += Number(item.fine) || 0;
    });

    document.getElementById("totalFine").innerText = "₹ " + totalFine;
}

updateBookUI();
showTopBorrowedBook();
showStudentRanking();
showTotalFine();