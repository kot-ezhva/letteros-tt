<template>
  <div class="card">
    <Editor
      class="card-title"
      api-key="1y2aini2v51af4vq1slya89ffu6ztn8pgecmxv2iggfzf30n"
      :inline="true"
      :value="`${card.id}. ${card.title}`"
      :init="tinyConfig"
    />
    <img class="card-img" :src="card.image">
    <Editor
      class="card-body"
      api-key="1y2aini2v51af4vq1slya89ffu6ztn8pgecmxv2iggfzf30n"
      :inline="true"
      :initial-value="card.body"
      :init="tinyConfig"
    />
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';

export default {
  name: 'Card',
  props: {
    card: {
      required: true,
      type: Object,
    },
  },
  data: () => ({
    tinyConfig: {
      menubar: '',
      toolbar: '',
    },
  }),
  components: { Editor },
};
</script>

<style lang="scss">
.card {
  margin-bottom: 50px;
  box-shadow: 0 17px 42px rgb(0 0 0 / 15%);
  padding: 25px;

  &-title {
    font-size: 24px;
    margin-bottom: 25px;
  }

  &-img {
    max-width: 100%;
    margin-bottom: 25px;
    max-height: 200px;
    width: 100%;
    object-fit: cover;
  }

  &-body {
    font-size: 18px;
  }

  &-action {
    width: 300px;
  }
}

</style>
