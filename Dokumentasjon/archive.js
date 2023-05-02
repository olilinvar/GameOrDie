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
    } else {
        document.getElementById("titleErr").textContent = "";
    }

    if (!isContentValid) {
        document.getElementById("contentErr").textContent = "Content is missing or invalid.";
    } else {
        document.getElementById("contentErr").textContent = "";
    }



    if (isTitleValid && isContentValid) {
        savePost(titleInput, contentInput);
    }

    if (isTitleValid && !isContentValid && validateContent(backupContent)) {
        savePost(titleInput, null, backupContent);
    }
}

const updateUI = () => {
    const postEl = document.getElementById("displayStoredPosts");
    postEl.innerHTML = localStorage.getItem("storedPosts");
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




//----------------------------------------------------------------------------------------------------------------



// document.getElementById("submit-btn").addEventListener("click", callGetData);

// function callGetData() {
//     try {
//         const data = editor.getData();
//         const contentInput = data;
//         processForm(contentInput);
//     }
//     catch (error) {
//         console.error("Error calling getData using callGetData():", error);
//         console.log("Attempting a fallback solution...")
//         processForm()
//     }
// };

// function processForm() {
//     const titleInput = String(document.getElementById("title").value.trim());
//     const contentInput = String(editor.getData().trim()/*.replace(/<p[^>]*>/gi, '').replace(/<\/p>/gi, '')*/);

//     const backupContent = String(document.getElementById("editor").value.trim());


//     const isTitleValid = titleInput.length > 1 && /^[a-zA-Z0-9 ]+$/.test(titleInput);
//     const isContentValid = contentInput.length > 1 && !/^\s*$/.test(contentInput);

//     const isBackupContentValid = backupContent.length > 1 && !/^\s*$/.test(backupContent);

//     if (!isTitleValid) {
//         document.getElementById("titleErr").textContent = "Title is missing or invalid.";
//         console.log("isTitleValid = " + isTitleValid)
//     } else {
//         document.getElementById("titleErr").textContent = "";
//         console.log("isTitleValid = " + isTitleValid)
//     }

//     if (!isContentValid) {
//         document.getElementById("contentErr").textContent = "Content is missing or invalid.";
//         console.log("isContentValid = " + isContentValid)
//     } else {
//         document.getElementById("contentErr").textContent = "";
//         console.log("isContentValid = " + isContentValid)
//     }

//     if (isTitleValid && isContentValid) {
//         storeContent(titleInput, contentInput);
//     }

//     if (isTitleValid && !isContentValid && isBackupContentValid) {
//         storeBackupContent(titleInput, backupContent)
//     }
// }

// function storeContent(title, content) {
//     console.log("storeContent() has been executed");
//     const newPost = { title, content }
//     postArray.push(newPost);

//     try {
//         localStorage.setItem("storedPosts", JSON.stringify(postArray));
//     }
//     catch (error) {
//         console.error("Error saving post to local storage:", error);
//     }

//     console.log(postArray);

// }

// function storeBackupContent(title, backupContent) {
//     console.log("storeBackupContent() has been executed");
//     const newPost = { title, backupContent }
//     postArray.push(newPost);

//     try {
//         localStorage.setItem("storedPosts", JSON.stringify(postArray));
//     }
//     catch (error) {
//         console.error("Error saving post to local storage:", error);
//     }

//     console.log(postArray);
// }

// function updateUI() {
//     const postEl = document.getElementById("displayStoredPosts");
//     document.getElementById("displayStoredPosts").innerHTML = localStorage.getItem("storedPosts");
// }



//------------------------------------------------------------------------------------------------------------------




// function processForm() {
//     let titleInput = document.getElementById("title").value;
//     let contentInput = editor.getData();

//     let isTitleValid = true;
//     let isContentValid = true;

//     if (titleInput === undefined || titleInput === "" || titleInput === null) {
//         isTitleValid = false;
//         console.log("Title is required!");
//     }
//     if (contentInput === undefined || contentInput === "" || contentInput === null) {
//         isContentValid = false;
//         console.log("Content is required!");
//     }

//     if (isTitleValid === true && isContentValid === true) {
//         storeContent();
//     }

//     else {
//         console.log("Something went wrong. Please try again.");
//     }

//     console.log("titleInput = " + titleInput);
//     console.log("contentInput = " + contentInput);
// }