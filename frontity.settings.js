const settings = {
  "name": "thingsthatmove.xyz",
  "state": {
    "frontity": {
      "url": "https://blog.thingsthatmove.xyz",
      "title": "Things That Move Ltd.",
      "description": "Artwork, Design, Technology"
    }
  },
  source: {
    url: "https://blog.thingsthatmove.xyz", // Updated to match WordPress site
    preFetch: [
      "/landings/home/",
      "/landings/bio/",
      "/landings/interactive-digital/",
      "/landings/tech-research/",
      "/landings/kinetics-robotics/"
    ]
  },
  "bundle": {
    "splitting": true,
    "publicPath": "/static/"
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          api: "https://blog.thingsthatmove.xyz/wp-json",
          params: {
            per_page: 50,
            type: ["post", "page","landings"]
          },
          postTypes: [
            {
              type: "projects",
              endpoint: "projects",
              archive: "projects" // link where this custom posts are listed
            },
            {
              type: "landings",
              endpoint: "landings",
              archive: "/landings"
            },
          ]
        }
      }
    },
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingId: "UA-221885825-2",
        },
      },
    },
    {
      name: "@frontity/google-tag-manager-analytics",
      state: {
        googleTagManagerAnalytics: {
          containerId: "GTM-PKP53HR",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};
export default settings;
