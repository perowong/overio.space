const standardBasePath = `/`

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions

  // const basePath = themeOptions.basePath || standardBasePath
  const basePath = standardBasePath

  createPage({
    path: basePath,
    component: require.resolve(`./src/templates/cara.tsx`),
  })
}
