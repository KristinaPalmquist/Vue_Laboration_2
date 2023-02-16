import { createStore } from "vuex";
import { projects } from "../../public/data.json";

const delay = () => new Promise((res) => setTimeout(res, 500));

// modules helps store scalability, making it possible to have several bransches
// for different purposes
const assignments = {
  namespaced: true,

  state() {
    return {
      projectNbr: null,
      works: [],
    };
  },

  mutations: {
    projectNbr(state, workId) {
      state.projectNbr = workId;
    },
    setProjects(state, work) {
      state.works = work;
    },
  },
  actions: {
    async fetch(ctx) {
      await delay();
      ctx.commit("setProjects", projects);
    },
  },
  getters: {
    currentProject(state) {
      return state.works.find((work) => {
        return work.id === state.projectNbr;
      });
    },
  },
};

export const store = createStore({
  modules: {
    // accessed through store.state.assignments.etc
    assignments,
  },
});
