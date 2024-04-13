function checkForName(name) {
    console.log("::: Running checkForName :::", name);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(name)) {
        alert("Welcome, Captain!")
        return true
    } else {
        return false
    }
}

export { checkForName }
