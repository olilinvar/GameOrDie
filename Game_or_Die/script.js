/*
Mark all invalid text and symbols inside the editor if error appears on submit

Display a fancy error message with errMsg and errField class instead of the titleErr and contentErr id's 
using class.add inside the if's and else's of processForm()

errField makes the field red to indicate error in said field

add sorting buttons on the viewer page
sort by date and popularity


*/



const posts = [];

const validateTitle = (title) => {
    return title.length > 1 && /^[a-zA-Z0-9 ]+$/.test(title);
}

const validateContent = (content) => {
    return content.length > 1 && !/^\s*$/.test(content);
}

const savePost = (title, content, backupContent) => {
    const newPost = {
        title,
        content: content || backupContent
    };

    posts.push(newPost);

    try {
        localStorage.setItem("storedPosts", JSON.stringify(posts));
        console.log("Post successfully saved in local storage")
    } catch (error) {
        console.error("Error saving post to local storage:", error);
    }
}

const processForm = () => {
    const titleInput = String(document.getElementById("title").value.trim());
    const contentInput = String(editor.getData().trim());
    const backupContent = String(document.getElementById("editor").value.trim());

    const isTitleValid = validateTitle(titleInput);
    const isContentValid = validateContent(contentInput);

    if (!isTitleValid) {
        document.getElementById("titleErr").textContent = "Title is missing or invalid.";
        console.log("isTitleValid = "+isTitleValid)
    } else {
        document.getElementById("titleErr").textContent = "";
        console.log("isTitleValid = "+isTitleValid)
    }

    if (!isContentValid) {
        document.getElementById("contentErr").textContent = "Content is missing or invalid.";
        console.log("isContentValid = "+isContentValid)
    } else {
        document.getElementById("contentErr").textContent = "";
        console.log("isContentValid = "+isContentValid)
    }



    if (isTitleValid && isContentValid) {
        savePost(titleInput, contentInput);
    }

    if (isTitleValid && !isContentValid && validateContent(backupContent)) {
        savePost(titleInput, null, backupContent);
    }
}

const updateUI = () => {
    localStorage.getItem("storedPosts");
    storedPosts;
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

document.getElementById("submit-btn").addEventListener("click", callGetData);