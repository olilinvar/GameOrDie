/*
Mark all invalid text and symbols inside the editor if error appears on submit

Display a fancy error message with errMsg and errField class instead of the titleErr and contentErr id's 
using class.add inside the if's and else's of processForm()

errField makes the field red to indicate error in said field

add sorting buttons on the viewer page
sort by date and popularity

*/




//[===============================[makePost JS]===================================

const posts = [];

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarEl = document.getElementsByClassName("navbar");
const navbarLinks = document.querySelectorAll(".navbar ul li a");

toggleButton.addEventListener("click", () => {
    navbarLinks.forEach(link => link.classList.toggle("active"));
    for (let i = 0; i < navbarEl.length; i++) { // loop through navbarEl and toggle class on each element
        navbarEl[i].classList.toggle("active");
    }
});


function init() {
    document.getElementById("submit-btn").addEventListener("click", callGetData);
    //Wrapped in a function so that other pages wont try to find submit-btn when it does not exist
}


const validateTitle = (title) => {
    return title.length > 1 && /^[a-zA-Z0-9 ]+$/.test(title);
    /*
    This function takes a parameter representing my title and returns true if 
    the title.length is greater than 1 and if the title passes the regex test.
    Otherwise it returns false.

    I can pass a value for the function to validate at any time
    The exact same explenation applies to the validateContent() function below
    */
}

const validateContent = (content) => {
    return content.length > 1 && !/^\s*$/.test(content);
}

const savePost = (title, content, backupContent) => {
    const newPost = {
        title,
        content: content || backupContent
    };
    //Declares the newPost object containing the value of title, content or the backupContent parameters

    posts.push(newPost);
    //The newPost object is pushed to the posts[] array

    try {
        localStorage.setItem("stringifiedPosts", JSON.stringify(posts));
        console.log("Post successfully saved in local storage")
        //Tries to store a stringified version of the posts[] array under the name of stringifiedPosts
    } catch (error) {
        console.error("Error saving post to local storage:", error);
        //Logs an error message if localStorage.setItem fails
    }
}

const processForm = () => {
    const titleInput = String(document.getElementById("title").value.trim());
    const contentInput = String(editor.getData().trim().replace(/<p[^>]*>/gi, '').replace(/<\/p>/gi, ''));
    //editor.getData() is from the ckeditor library, it gets the input data from ckeditor's textarea
    const backupContent = String(document.getElementById("editor").value.trim());
    //The backupContent variable is a fallback solution in case the ckeditor cdn servers are down

    const isTitleValid = validateTitle(titleInput);
    const isContentValid = validateContent(contentInput);
    //The isValid variables are booleans used for validation and error handling.
    //Their value is given based on what the validating functions return

    if (!isTitleValid) {
        document.getElementById("titleErr").textContent = "Title is missing or invalid.";
        console.log("isTitleValid = " + isTitleValid)
        //If title is invalid: display error and log isTitleValid value
    } else {
        document.getElementById("titleErr").textContent = "";
        console.log("isTitleValid = " + isTitleValid)
        //If title is valid: display nothing and log isTitleValid value
        //The same explenation apply to the if-else statement below
    }

    if (!isContentValid) {
        document.getElementById("contentErr").textContent = "Content is missing or invalid.";
        console.log("isContentValid = " + isContentValid)
    } else {
        document.getElementById("contentErr").textContent = "";
        console.log("isContentValid = " + isContentValid)
    }



    if (isTitleValid && isContentValid) {
        savePost(titleInput, contentInput);
    }

    if (isTitleValid && !isContentValid && validateContent(backupContent)) {
        savePost(titleInput, null, backupContent);
        /*
        The validateContent function is called in the conditions to check if backupContent is valid
        If the title and backupContent is valid while content is invalid we execute the savePost function passing the valid title and backupContent
        This is a fallback solution in case the ckeditor cdn servers are down
        */
    }
}

const callGetData = () => {
    try {
        const data = editor.getData();
        const contentInput = data;
        processForm(contentInput);
    }
    catch (error) {
        console.error("Error calling getData using callGetData():", error);
        console.log("Attempting a fallback solution...");
        processForm();
    }
};

//[===============================[forum JS]===================================

let newPosts = [];

const getNewPosts = () => {
    newPosts = JSON.parse(localStorage.getItem("stringifiedPosts"));
    console.log(newPosts)
    //This function is called from allPosts.html to retrive the stringifiedPosts array from localStorage
}

function handlebarsLoad() {
    const postTemplate = Handlebars.compile(document.querySelector('#post-template').innerHTML);
    const postContainer = document.querySelector('#post-container');
    newPosts.forEach((post) => {
        const postHTML = postTemplate(post);
        postContainer.insertAdjacentHTML('beforeend', postHTML);
    });
}

window.addEventListener("load", () => {
    if (window.location.pathname.includes("forum.html")) {
        console.log("forum initialized")
        getNewPosts()
        handlebarsLoad()
    }
})