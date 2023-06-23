<template>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
      <div class="selected" :class="{ open: open }" @click="open = !open">
        {{ selected }}
      </div>
      <div class="items" :class="{ selectHide: !open }">
        <div
          v-for="(option, i) of options"
          :key="i"
          @click="
            selected = option;
            open = false;
            $emit('input', option);
          "
        >
          {{ option }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  export default defineComponent(
    {
    props: {
      options: {
        type: Array,
        required: true,
      },
      default: {
        type: String,
        required: false,
        default: null,
      },
      tabindex: {
        type: Number,
        required: false,
        default: 0,
      },
    },
    data() {
      return {
        selected: this.default
          ? this.default
          : this.options.length > 0
          ? this.options[0]
          : null,
        open: false,
      };
    },
    mounted() {
      this.$emit("input", this.selected);
    },
  }
  ) 
  ;
  </script>
  
  <style scoped>
  .custom-select {
    position: relative;
    width: 75%;
    text-align: left;
    outline: none;
    height: 47px;
    line-height: 37px;
  }
  
  .custom-select .selected {
    background-color: steelblue;
    border-radius: 6px;
    border: 1px solid #666666;
    color: #fff;
    padding-left: 0.6em;
    cursor: pointer;
    user-select: none;
  }
  
  .custom-select .selected.open {
    /* border: 1px solid #fff; */
    border-radius: 6px 6px 0px 0px;
  }
  
  .custom-select .selected:after {
    position: absolute;
    content: "";
    top: 22px;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #fff transparent transparent transparent;
  }
  
  .custom-select .items {
    color: #fff;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid #1783c4;
    border-left: 1px solid #1783c4;
    /* border-bottom: 1px solid #fff; */
    border-top: 1px solid #fff;
    position: absolute;
    background-color: steelblue;
    left: 0;
    right: 0;
    z-index: 1;
  }
  
  .custom-select .items div {
    color: #fff;
    border-bottom: 1px solid #fff;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
  }
  
  .custom-select .items div:hover {
    background-color: #1783c4;
  }
  
  .selectHide {
    display: none;
  }
  </style>
  