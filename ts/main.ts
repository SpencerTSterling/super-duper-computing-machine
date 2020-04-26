window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void {
    resetErrorMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");

    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if(!isValidDate(dob)){
        let errSpan = dobBox.nextElementSibling;
        errSpan.innerHTML = "Format should be mm/dd/yyyy";
    }

}

function isValidDate(input:string):boolean{
    // mm/dd/yyyy
    // \d{1,2}\/\d{1,2}\/\d{4}
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    let result = pattern.test(input);
    return result;
}


/**
 * Resets all the spans to default text
 */
function resetErrorMessages(): void {
    let allSpans = document.querySelectorAll("form span")
    for (let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i]
        if (currSpan.hasAttribute("data-required")){
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
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
