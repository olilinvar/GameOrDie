var editor;


document.getElementById("submit-btn").addEventListener("click", checkContent, callGetData);


function callGetData() {
    var data = editor.getData();
    console.log(data);
    var contentInput = data;
    checkContent(contentInput);
};

function checkContent() {
    let titleInput = document.getElementById("title").value.trim();
    let contentInput = editor.getData().trim();

    let titleIsValid = titleInput.length > 0 && /^[a-zA-Z0-9 ]+$/.test(titleInput);
    let contentIsValid = contentInput.length > 0 && !/^\s*$/.test(contentInput);

    if (!titleIsValid) {
        document.getElementById("title-error").textContent = "Title is missing or invalid.";
    } else {
        document.getElementById("title-error").textContent = "";
    }

    if (!contentIsValid) {
        document.getElementById("content-error").textContent = "Content is missing or invalid.";
    } else {
        document.getElementById("content-error").textContent = "";
    }

    if (titleIsValid && contentIsValid) {
        submitContent();

        console.log(titleInput);
        console.log(contentInput );
    }
}


function submitContent() {
    console.log("submitContent has been executed");
} 








// function checkContent() {
//     let titleInput = document.getElementById("title").value;
//     let contentInput = editor.getData();

//     let titleIsValid = true;
//     let contentIsValid = true;

//     if (titleInput === undefined || titleInput === "" || titleInput === null) {
//         titleIsValid = false;
//         console.log("Title is required!");
//     }
//     if (contentInput === undefined || contentInput === "" || contentInput === null) {
//         contentIsValid = false;
//         console.log("Content is required!");
//     }

//     if (titleIsValid === true && contentIsValid === true) {
//         submitContent();
//     }

//     else {
//         console.log("Something went wrong. Please try again.");
//     }

//     console.log("titleInput = " + titleInput);
//     console.log("contentInput = " + contentInput);
// }