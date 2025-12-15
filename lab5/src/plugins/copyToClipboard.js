export default {
  install: (app) => {
    app.config.globalProperties.$copyToClipboard = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        console.error('Failed to copy: ', err);
        return false;
      }
    };

    // Also provide via injection for Composition API
    app.provide('copyToClipboard', async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        console.error('Failed to copy: ', err);
        return false;
      }
    });
  }
};
