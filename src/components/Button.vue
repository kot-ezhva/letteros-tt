<template>
  <button class="card-btn" @click="$emit('click')">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    loading: false,
  }),
};
</script>

<style lang="scss">
.card-btn {
  background: #fff;
  color: #bbb;
  border: 1px solid #bbbbbb;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background: #bbb;
    color: #fff;
  }

  &:last-child {
    margin-right: 0;
  }

  &:disabled {
    opacity: .45;
  }
}
</style>
