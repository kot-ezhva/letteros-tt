<template>
  <main id="app">
    <Actions v-on:append-card="fetchCardItem" />
    <CardList />
  </main>
</template>

<!--

Собрать vue проект и разместить в публичный репозитории
Исходная верстка в файле tz.html
https://jsonplaceholder.typicode.com/ - fake api сервис

ТЗ:
1) Используя fake api подтянуть данные и подставить их в карточку с классом .card
2) Изначально на экране должно быть 3 карточки
3) Нажатие на кнопку "Добавить еще" создает дополнительную карточку внизу списка с новыми данными из api
4) Подключить tinymce для текстовых узлов карточки, без отображения стандартных инструментов
5) При выделение текста и нажатие на кнопку "Курсив" текст должен выделяться курсивом, для добавленных карточек этот
функционал должен так же работать. После клика на кнопку, она должна становиться активной, как при наведение.
Если выделить текст с курсивом, кнопка должна подсвечиваться, как при наведение, а повторное нажатие по ней должно
удалять курсив с выделенного текста

-->

<script>
import { mapActions } from 'vuex';
import { Actions, CardList } from '@/views';

export default {
  name: 'App',
  components: {
    // Router specially not used
    Actions,
    CardList,
  },
  methods: {
    ...mapActions(['fetchCardItem']),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 50px 0;

  p {
    margin: 0;
  }

  [contenteditable] {
    outline: 0 solid transparent;
  }
}
</style>
