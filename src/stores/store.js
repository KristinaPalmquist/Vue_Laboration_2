import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      projectId: null,
      projectsList: [],
      projects: [],
    };
  },
  mounted() {
    store.state.fetchData();
  },
  actions: {
    fetchData() {
      fetch("../../data.json", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          data.forEach((el) => {
            store.state.projectsList = {
              id: el.id,
              school: el.school,
              course: el.course,
              from: el.from,
              to: el.to,
              details: el.details,
              link: el.link,
              src: el.src,
            };
            store.state.projects.push(store.state.projectsList);
          });
        });
    },
  },
});
export default store;
