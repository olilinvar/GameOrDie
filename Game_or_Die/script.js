/*
Mark all invalid text and symbols inside the editor if error appears on submit

Display a fancy error message with errMsg and errField class instead of the titleErr and contentErr id's 
using class.add inside the if's and else's of checkContent()

errField makes the field red to indicate error in said field

add sorting buttons on the viewer page
sort by date and popularity


*/


var editor;
const allPosts = [];

document.getElementById("submit-btn").addEventListener("click", callGetData);

function callGetData() {
    const data = editor.getData();
    const contentInput = data;
    checkContent(contentInput);
};

function checkContent() {
    const titleInput = String(document.getElementById("title").value.trim());
    const contentInput = String(editor.getData().trim()/*.replace(/<p[^>]*>/gi, '').replace(/<\/p>/gi, '')*/);

    const titleIsValid = /*titleInput.length > 0 &&*/ /^[a-zA-Z0-9 ]+$/.test(titleInput);
    const contentIsValid = /*contentInput.length > 0 &&*/ !/^\s*$/.test(contentInput);

    if (!titleIsValid) {
        document.getElementById("titleErr").textContent = "Title is missing or invalid.";
        console.log("titleIsValid = " + titleIsValid)
    } else {
        document.getElementById("titleErr").textContent = "";
        console.log("titleIsValid = " + titleIsValid)
    }

    if (!contentIsValid) {
        document.getElementById("contentErr").textContent = "Content is missing or invalid.";
        console.log("contentIsValid = " + contentIsValid)
    } else {
        document.getElementById("contentErr").textContent = "";
        console.log("contentIsValid = " + contentIsValid)
    }

    if (titleIsValid && contentIsValid) {
        submitContent(titleInput, contentInput);
        // updateUI();
    }
}

function submitContent(title, content) {
    console.log("submitContent() has been executed");
    const newPost = { title, content }
    allPosts.push(newPost);

    try {
        localStorage.setItem("posts", JSON.stringify(allPosts));
    }
    catch (error) {
        console.error("Error saving post to local storage:", error);
    }

    console.log(allPosts);

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