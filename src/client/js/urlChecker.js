const checkForUrl = (url) => {
    const isValidUrl = inputURL.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);


    if (isValidUrl) {
        return true
    } 
    else {
        return false
    } 
}

export {
    checkForUrl
}