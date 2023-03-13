const navHeight = 64;   //px

// https://github.com/nuxt/framework/issues/1707
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
      if (savedPosition && !to.hash) {
        return savedPosition;
      }
  
      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve) => {
            if (x > 0) {
              return resolve(document.querySelector("#app"));
            }
            // Need to set the timeout to something larger or equal than 300
            setTimeout(() => {
              resolve(findEl(hash, 1));
            }, 300);
          })
        );
      };
  
      if (to.hash && to.hash !== '#') {
        const el = await findEl(to.hash);
        if (el) {
            const offset = el.getBoundingClientRect().top + window.scrollY - navHeight;
            if ("scrollBehavior" in document.documentElement.style) {
              return window.scrollTo({ top: offset, behavior: "smooth" });
            } else {
              return window.scrollTo(0, offset);
            }
        }
      }
      return { left: 0, top: 0, behaviour: "smooth" };
    };
  });
  