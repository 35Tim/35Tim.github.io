import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tim's Bolg",
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'HTML', link: '/html/html1' },
      {
        text: 'JS',
        items: [
          { text: 'React', link: '/js/react/react1' },
          { text: 'Vue', link: '/js/vue/vue1' },
          { text: 'Javascript', link: '/functions#' },
        ],
      },
      {
        text: 'CSS',
        link: '/css/css1',
      },
      {
        text: '工程化',
        items: [
          { text: 'Git', link: '/engineering/git/git1' },
          { text: 'Webpack', link: '/engineering/webpack/webpack1' },
        ],
      },
      {
        text: '算法',
        link: '/algorithm/algorithm1',
      },
    ],
    sidebar: {
      '/html/': [
        {
          text: 'HTML',
          items: [
            { text: 'HTML文章1', link: '/html/html1' },
            { text: 'HTML文章2', link: '/html/html2' },
          ],
        },
      ],
      '/css/': [
        {
          text: 'CSS',
          items: [
            { text: 'CSS文章1', link: '/css/css1' },
            { text: 'CSS文章2', link: '/css/css2' },
          ],
        },
      ],
      '/js/react/': [
        {
          text: 'React',
          items: [
            { text: 'React文章1', link: '/js/react/react1' },
            { text: 'React文章2', link: '/js/react/react2' },
          ],
        },
      ],
      '/js/vue/': [
        {
          text: 'Vue',
          items: [
            { text: 'Vue文章1', link: '/js/vue/vue1' },
            { text: 'Vue文章2', link: '/js/vue/vue2' },
          ],
        },
      ],
      '/engineering/git': [
        {
          text: 'Git',
          items: [
            { text: 'Git1', link: '/engineering/git/git1' },
            { text: 'Git2', link: '/engineering/git/git2' },
          ],
        },
      ],
      '/engineering/webpack': [
        {
          text: 'Webpack',
          items: [
            { text: 'Webpack1', link: '/engineering/webpack/webpack1' },
            { text: 'Webpack2', link: '/engineering/webpack/webpack2' },
          ],
        },
      ],
      '/algorithm/': [
        {
          text: '算法',
          items: [
            { text: '算法1', link: '/algorithm/algorithm1' },
            { text: '算法2', link: '/algorithm/algorithm2' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/35Tim' }],
  },
});
