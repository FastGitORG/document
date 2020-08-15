<template>
  <div>
    <component :is="layout" />
    <footer>Copyright © FastGit {{ new Date().getFullYear() }}</footer>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      // Copied from https://github.com/vuejs/vuepress/blob/c7ba6162045bc88bb0aed09cb24257aad5b655dd/packages/%40vuepress/core/lib/client/components/GlobalLayout.vue#L22-L30
      if (this.$page.path) {
        const layout = this.$page.frontmatter.layout
        if (layout && (this.$vuepress.getLayoutAsyncComponent(layout)
          || this.$vuepress.getVueComponent(layout))) {
          return layout
        }
        return 'Layout'
      }
      return 'NotFound'
    },
  },
}
</script>

<style scoped>
footer {
  /* Follow https://github.com/vuejs/vuepress/blob/c7ba6162045bc88bb0aed09cb24257aad5b655dd/packages/%40vuepress/theme-default/components/Home.vue#L141-L145 */
  text-align: center;
  padding-bottom: 2.5rem;
  color: #4e6e8e;

  /* Prevent footer from showing when the page is loading */
  visibility: hidden;
}

.theme-container + footer {
  visibility: visible;
}

.theme-container:not(.no-sidebar) + footer {
  margin-top: -1.5rem;
}

@media (min-width: 720px) {
  .theme-container:not(.no-sidebar) + footer {
    margin-left: 20rem;
  }
}
</style>
