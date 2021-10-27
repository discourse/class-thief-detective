import { withPluginApi } from 'discourse/lib/plugin-api';

const observer = new MutationObserver((record) => {
  const classList = record[0].target.classList;
  if (
    !classList.contains('timeline-container') &&
    !classList.contains('extra-info-wrapper')
  ) {
    debugger;
  }
});

export default {
  name: 'class-thief-detective',

  initialize() {
    withPluginApi('0.8.31', (api) => {
      api.onPageChange(() => {
        observer.disconnect();

        const timeline = document.querySelector('.timeline-container');
        if (timeline) observer.observe(timeline, { attributes: true });

        // const title = document.querySelector('.extra-info-wrapper');
        // if (title) observer.observe(title, { attributes: true });
      });
    });
  },
};
