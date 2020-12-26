<template>
  <div class="container">
    <div class="note-book">
      <div class="add">
        <button @click="addNote" class="btn btn-add">Add Note</button>
      </div>
    </div>
    <div class="note-area">
      <div class="row">
        <app-note
          v-for="note in notelist"
          :key="note.index"
          :note="note"
          :myCallback="myCallback"
        ></app-note>
      </div>
    </div>
  </div>
</template>

<script>
import Note from "./Note";
import NoteModels from "../models/Note";
import { EventBus } from "../eventBus";
export default {
  data() {
    return {
      notelist: [],
    };
  },
  components: {
    appNote: Note,
  },
  methods: {
    addNote() {
      this.notelist.push(new NoteModels());
    },
    myCallback(data) {
      this.deleteNote(data);
    },
    deleteNote(data) {
      let indexx = this.notelist.findIndex((element) => element.id == data.id);
      console.log("Hmme Delete");
      console.log("index " + indexx);
      if (indexx >= 0) {
        console.log("Silinecek");
        this.notelist.splice(indexx, 1);
        localStorage.removeItem("noteList");
        localStorage.setItem("noteList", JSON.stringify(this.notelist));
      }
    },
  },

  updated() {
    EventBus.$on("save", (data) => {
      this.notelist.forEach((element) => {
        if (element.id == data.id) {
          element = data;
        }
      });

      localStorage.setItem("noteList", JSON.stringify(this.notelist));
    }),
      EventBus.$on("delete", (data) => {
        this.deleteNote(data);
      });
  },
  created() {
    if (JSON.parse(localStorage.getItem("noteList")).length > 0)
      this.notelist = JSON.parse(localStorage.getItem("noteList"));

    console.log(this.notelist);
  },
};
</script>

<style scoped>
.note-book {
  display: flex;
  align-items: center;
  height: 3rem;
  position: relative;
}
.note-area {
  margin-top: 3rem;
}

.add {
  padding-top: 2rem;
}

.btn {
  position: absolute;
  right: 0px;
  border: 1px solid green;
  background: transparent;
  background-color: rgb(186, 228, 186);
  font-size: 1.6rem;
  color: gray;
  border-radius: 10px;
}

.btn:focus {
  outline: none;
}

.btn:hover {
  background-color: rgb(200, 200, 120);
}
</style>