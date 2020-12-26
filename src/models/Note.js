class Note {
    id=Math.floor(Math.random()*200);
    author = ""
    content = ""
    date = {
        type: Date,
        default: Date.now
    }

    constructor(author, content, date) {
        this.author = author;
        this.content = content;
        this.date = date;
    }


}

export default Note;