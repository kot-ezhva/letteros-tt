<template>
  <p v-if="!!error">{{ error }}</p>
  <div v-else class="card-group">
    <Card
        v-for="card in cards"
        :card="card"
        :key="card.id"
    />

    <p v-if="isLoading" class="card-group-loading">Loading, please wait... ⏰</p>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import { mapGetters, mapActions } from 'vuex';
import { Button, Card } from '@/components';

export default {
  name: 'CardList',
  components: { Card, Button, Editor },
  data: () => ({
    tinyInitConfig: {
      plugins: 'lists link image table code help wordcount',
      inline: true,
    },
  }),
  computed: {
    ...mapGetters(['cards', 'isLoading', 'error']),
  },
  methods: {
    ...mapActions(['fetchInitialCards']),
  },
  mounted() {
    this.fetchInitialCards();
  },
};
</script>

<style lang="scss">
.card-group {
  display: flex;
  flex-flow: column wrap;
  width: 500px;

  &-loading {
    margin: 0 auto;
  }
}
</style>
