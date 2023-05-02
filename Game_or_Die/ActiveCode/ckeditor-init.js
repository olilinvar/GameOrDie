var editor;
ClassicEditor
    .create(document.querySelector('#editor'))
    .then(instance => {
        console.log('Editor was initialized successfully!');
        editor = instance;
    })
    .catch(error => {
        console.error('There was an error initializing the editor:', error);
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.innerHTML = 'There was an error initializing the editor. Please try again later.';
        document.querySelector('#editor').parentNode.insertBefore(errorMessage, document.querySelector('#editor'));
    });
