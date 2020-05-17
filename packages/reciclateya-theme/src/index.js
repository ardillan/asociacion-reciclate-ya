import Root from "./Root";

export default {
  name: "reciclateya-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isMenuOpen: false,
    },
  },
  actions: {
    theme: {
      openMenu: ({ state }) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({ state }) => {
        state.theme.isMenuOpen = false;
      },
    },
  },
};
