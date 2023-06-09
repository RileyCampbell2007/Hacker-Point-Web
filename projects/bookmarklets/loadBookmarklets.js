fetch('./bookmarklets.json')
    .then(response => response.json())
    .then(urls => {
        var bookmarklets = document.getElementsByClassName('bookmarklet')
        for (let i=0;i<bookmarklets.length;i++) {
            bookmarklets[i].href=urls[i]
        }
    })
    .catch(error => {
        // Handle any errors
        console.error('Error:', error);
    });