function importAll(r) {
  return r.keys().filter((fileName) => !fileName.includes('pages'))
    .map(fileName => {
      console.log("[FILENAME}", fileName)
      return {
        link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
        module: r(fileName)
      }
    })
}

export const posts = importAll(
  require.context("./pages/blog/", true, /\.mdx$/)
);
