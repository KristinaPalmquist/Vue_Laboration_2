import { createStore } from "vuex";

const delay = () => new Promise((res) => setTimeout(res, 500));

export const store = createStore({
  state() {
    return {
      projectId: null,
      projects: [],
    };
  },
  mutations: {
    setProjectId(state, workId) {
      state.projectId = workId;
    },
    setProjects(state, work) {
      state.projects = work;
    },
  },
  mounted() {
    store.state.fetchData();
  },
  actions: {
    async fetchData() {
      fetch("../../public/data.json", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      await delay()
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          data.forEach((el) => {
            console.log("el", el);
            // let details = {
            //   id: el.id,
            //   school: el.school,
            //   course: el.course,
            //   from: el.from,
            //   to: el.to,
            //   details: el.details,
            //   link: el.link,
            //   src: el.src,
            // };
            // store.state.projects.push(details);
          });
        });
      console.log("projects", store.state.projects);
      //   ctx.commit("setProjects", projects);
    },
  },
  getters: {
    chosenProject(state) {
      return state.projects.find((x) => {
        return x.id === state.projectId;
      });
    },
  },
});
export default store

// fetchData() {
//   fetch("../../public/data.json", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json;charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((projects) => {
//       state.projects = projects;
//       console.log("state.projects", state.projects);
//     });
// },

// fetchData(state) {
//     fetch("../../public/data.json", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json;charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then((projects) => {
//         console.log("projects", projects);
//       });
//   },
