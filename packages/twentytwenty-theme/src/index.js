import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import {categoriesWidgetsHome} from './config'
import { projectsHandler } from "./handlers";

const twentyTwentyTheme = {
  name: "@frontity/twentytwenty-theme",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      colors: {
        gray: {
          base: "#6D6D6D",
          light: "#DCD7CA",
          lighter: "#F5EFE0"
        },
        primary: "#f6f6f6",
        headerBg: "rgba(0,0,0,0.1)",
        footerBg: "rgba(0,0,0,0.1)",
        bodyBg: "#454545",
        bodyText: "#f0f0f0",
        link:"#f6f6f6",
      },
      // Whether to show the search button in page header
      showSearchInHeader: true,
      // Menu links to display in the header
      menu: [],
      // State for the menu on mobile
      isMobileMenuOpen: false,
      // State for the search modal on mobile
      isSearchModalOpen: false,
      // Whether to show all post content or only excerpt (summary) in archive view
      showAllContentOnArchive: false,
      // Settings for the featured media (image or video)
      featuredMedia: {
        // Whether to show it on archive view
        showOnArchive: true,
        // Whether to show it on post
        showOnPost: true
      },
      // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
      autoPreFetch: "no",
      /**
       * At the moment, we only include the ascii characters of Inter font.
       * Values can be "us-ascii" | "latin" | "all"
       */
      fontSets: "all"
    }
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      /*
      beforeSSR: async ({ state, actions }) => {
        if (state.router.link === "/") {

          console.log(state.router.link)
          console.log('getting data from beforeSSR...')
          await Promise.all(
            Object.values(categoriesWidgetsHome)
              .map(category => actions.source.fetch(`/category/${category}/`))
          )
        }
      },*/
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      openSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = true;
      },
      closeSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = false;
      },

    }
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image]
    },
    source: {
     handlers: [projectsHandler]
   }
  }
};

export default twentyTwentyTheme;
