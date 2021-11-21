const { Console } = require('console');
const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


console.log("Welcome to the Password Validator!!!!!")
reader.question("Please enter your password. \n", function(input) {
    if (input.length >= 10) {
        reader.close()
    } else {
        console.log("Password is shorter than 10 characters. please make it longer.")
        reader.prompt
        reader.on("line", (input) => {
            if (input.length >= 10) {
                reader.close()
            } else {
                reader.setPrompt("The password you have entered is still shorter then 10 characters please try again. \n")
                reader.prompt()
            }
        })
    }
});
reader.on('close', () => {
    console.log(" /  /  ")
    console.log("((ovo))")
    console.log("():::()")
    console.log("  VVV")
    console.log("Hoot Hoot! Good Job")
});