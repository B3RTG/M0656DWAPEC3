export default class Todo {
    
    id: String;
    text: String;
    complete: boolean;

    //constructor(text: String, complete: Boolean = false) {
    constructor({text, complete = false}: {text: String; complete?: boolean}) {
        this.id = this.uuidv4();
        this.text = text;
        this.complete = complete;
    }
    uuidv4() {
        return ([1e7, 1e3, 4e3, 8e3, 1e11].join('-')).replace(/[018]/g, c=>
        (
            parseInt(c, 2) ^
                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (parseInt(c, 2) / 4)))
            ).toString(16)
        );
    }
}