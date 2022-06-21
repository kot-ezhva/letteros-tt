<template>
  <div class="card-action">
    <Button title="Курсив" :disabled="isLoading" @click="toggleItalic"/>
    <Button :title="isLoading ? 'Загрузка' : 'Добавить еще'" @click="$emit('append-card')" :disabled="isLoading"/>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import { mapGetters } from 'vuex';
import { Button } from '@/components';

export default {
  name: 'Actions',
  components: { Button, Editor },
  computed: {
    ...mapGetters(['isLoading']),
  },
  methods: {
    toggleItalic() {
      global.tinymce?.activeEditor?.selection?.editor.execCommand('Italic');
    },
  },
};
</script>

<style lang="scss">
.card-action {
  width: 300px;
  position: sticky;
  align-self: flex-start;
  top: 50px;
}
</style>

