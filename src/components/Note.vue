<template>
  <div class="col-md-4 mb-5 mt-3">
    <div
      @dblclick="deleteNote"
      class="card text-center"
      :class="content == '' ? '' : 'fullNote'"
    >
      <div class="card-header">
        <label for="author">Author </label>
        <input
          class="author"
          type="text"
          v-model="author"
          @focus="focusClass()"
        />
        <i @click="saveNote" class="fas fa-save ml-3"></i>
      </div>
      <div class="card-body">
        <textarea
          v-model="content"
          class="content"
          name="content"
          id=""
          cols="20"
          rows="10"
          @focus="focusClass(content)"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../eventBus";
export default {
  props: { note: { type: Object }, myCallback: Function },
  data() {
    return {
      author: this.note.author,
      content: this.note.content,
    };
  },
  methods: {
    saveNote() {
      this.note.author = this.author;
      this.note.content = this.content;
      EventBus.$emit("save", this.note);
    },
    deleteNote() {
      this.myCallback(this.note);
      EventBus.$emit("delete", this.note);
    },
    focusClass(data) {
      console.log(data);
      document.querySelectorAll(".content").forEach((item) => {
        if (item.value === data) {
          item.parentElement.parentElement.classList.remove("fullNote");
        }
      });
    },
  },
};
</script>

<style scoped>
.focusNote {
  opacity: 1;
}

.fullNote {
  opacity: 0.8;
}

.card-header {
  background: #9ebd5d;
}

.card-header label {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.8rem;
}
.card-header input {
  width: 7rem;
  height: 1.6rem;
  outline: none;
  margin-right: 1rem;
  background-color: #ade6e0;
  border: none;
  border-radius: 5px;
}
.card-header i {
  color: #fff;
  font-size: 1.3rem;
  cursor: pointer;
  margin-right: 0.6rem;
}

.card-body,
textarea {
  background: #b8e8e3;
  border: none;
  outline: none;
}
</style>