/* eslint-disable no-debugger */
import { withPluginApi } from "discourse/lib/plugin-api";

const observer = new MutationObserver((record) => {
  const classList = record[0].target.classList;
  if (!classList.contains("timeline-container")) {
    debugger;
  }
});

export default {
  name: "class-thief-detective",

  initialize() {
    withPluginApi("0.8.31", (api) => {
      api.onPageChange(() => {
        observer.disconnect();

        const timeline = document.querySelector(".timeline-container");
        if (timeline) {
          observer.observe(timeline, { attributes: true });
        }
      });

      api.modifyClass("component:mount-widget", {
        pluginId: "class-thief-detective",

        willClearRender() {
          this._super(...arguments);
          if (this._rootNode) {
            debugger;
          }
        },

        rerenderWidget() {
          this._super(...arguments);
          if (this._rootNode?.className === "") {
            debugger;
          }
        },
      });
    });
  },
};
