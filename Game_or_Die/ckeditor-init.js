ClassicEditor
    .create(document.querySelector('#editor'))
    .then(editor => {
        console.log('Editor was initialized successfully!');
    })
    .catch(error => {
        console.error('There was an error initializing the editor:', error);
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.innerHTML = 'There was an error initializing the editor. Please try again later.';
        document.querySelector('#editor').parentNode.insertBefore(errorMessage, document.querySelector('#editor'));
    });
