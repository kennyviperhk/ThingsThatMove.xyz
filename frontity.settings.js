const settings = {
  "name": "thingsthatmove.xyz",
  "state": {
    "frontity": {
      "url": "https://blog.thingsthatmove.xyz",
      "title": "Things That Move Ltd.",
      "description": ""
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [

            [
              "Bio",
              "/bio/"
            ],
            [
              "Work",
              "/2019/solo-exhibition-moving-average-goethe-institut-hong-kong/"
            ],
            [
              "Press",
              "/press_all/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
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
          trackingId: "305589988",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};
export default settings;
