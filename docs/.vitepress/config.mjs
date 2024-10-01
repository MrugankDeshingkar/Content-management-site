import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Table of content",
  description: "A VitePress Site",
  themeConfig: {
    search:{
       provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Creating and Sending Invoices',
        items: [
          {text: 'Identifying Orders Ready for Invoicing', link: '/Invoicing_Status_check/identifying-orders-ready-for-invoicing'},
          {text: 'Handling Partial Orders', link: '/Invoicing_Status_check/handling-partial-orders'},
          {text:'Preparing Orders for Invoicing',link: '/Invoicing_Status_check/preparing-orders-for-invoicing'},
          {text: "Tracking Number Management", link: '/Invoicing_Status_check/tracking-number-management'} 

          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
