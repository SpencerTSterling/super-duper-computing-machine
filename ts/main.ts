window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void {
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
}

/**
 * Returns true if the textbox with given id has
 * some text inside of it
 * @param id The id of the <input type="text"> to validate
 * @param errMsg The message to display in the sibling span of textbox
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let textBox = <HTMLInputElement>document.getElementById(id);
    let textBoxValue = textBox.value;
    if (textBoxValue == "") {
        let errSpan = <HTMLElement>textBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
