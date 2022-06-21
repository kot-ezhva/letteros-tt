import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: true,
    error: '',
    cardItems: [],
  },
  getters: {
    isLoading: state => state.isLoading,
    error: state => state.error,
    cards: state => state.cardItems,
  },
  mutations: {
    setInitialCards(state, cards) {
      state.cardItems = cards;
    },
    appendCard(state, card) {
      state.cardItems.push(card);
    },
    setIsLoading(state, loading) {
      state.isLoading = loading;
    },
    setError(state, errorText) {
      state.error = errorText;
    },
  },
  actions: {
    async fetchInitialCards({ commit }) {
      try {
        const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')).json();
        const photos = await (await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=3')).json();

        posts.map((post, index) => {
          post.image = photos[index]?.url;
        });

        commit('setInitialCards', posts);
      } catch (e) {
        commit('setError', 'Error while posts loading');
      } finally {
        commit('setIsLoading', false);
      }
    },
    async fetchCardItem({ commit, state }) {
      try {
        commit('setIsLoading', true);
        const id = state.cardItems[state.cardItems.length - 1].id + 1;
        const post = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
        const { url: image } = await (await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)).json();

        post.image = image;

        commit('appendCard', post);
      } catch (e) {
        commit('setInitialCards', [])
        commit('setError', 'Error while post loading 😿');
      } finally {
        commit('setIsLoading', false);
      }
    },
  },
  modules: {},
})
