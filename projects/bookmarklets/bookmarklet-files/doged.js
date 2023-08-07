setInterval(() => {
    let images = document.querySelectorAll('img')
    images.forEach(element => {
        element.src = 'https://images.theconversation.com/files/521751/original/file-20230419-18-hg9dc3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop'
    });
}, 100);