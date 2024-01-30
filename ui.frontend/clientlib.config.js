module.exports = {
  // default working directory
  context: __dirname,

  // path to the clientlib root folder
  clientLibRoot:
    "./../ui.apps/src/main/content/jcr_root/apps/ui.frontend/clientlibs",

  libs: {
    name: "react-app",
    allowProxy: true,
    categories: ["com.wilson-aem-project.react"],
    serializationFormat: "xml",
    jsProcessor: ["min:gcc"],
    dependencies: ["ui.frontend.grid"],
    assets: {
      js: ["build/static/**/*.js"],
      css: ["build/static/**/*.css"],
    },
  },
};
