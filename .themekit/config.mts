import { defineConfig } from 'themekit-js'

// https://vitepress.dev/reference/site-config
const ThemeConfigJp={
  nav: []   
};
 
const ThemeConfigCn={
  nav: [ 
  ] 
};
 
const ThemeConfigEn ={ 
  nav: [ ]
};
 
const siteBase="/"
export default defineConfig({
  title: "eFACILITY",  
  base:siteBase,
  themeName: "default theme + customization",
  description: "A VitePress Site",
  lang:"root",
  locales: {  
    "English": {
      label: 'English',
      lang: 'English',  
      link: '/English/',
      themeConfig: ThemeConfigEn 
    }, 
    "日本語": {
      label: '日本語',
      lang: '日本語',  
      link: '/日本語/',
      themeConfig: ThemeConfigJp 
    }, 
    root: {
      label: '简体中文',
      lang: '简体中文',   
      themeConfig:  ThemeConfigCn
    }
  },   
  themeConfig: { 
    nav: [ ], 
    socialLinks: [
      { icon: 'github', link: 'https://github.com/e-facility' }
      ],
    footer: {
      message: '<a href=\"'+siteBase+'English/"\>English</a>&nbsp;&nbsp;&nbsp;<a href=\"/"\>简体中文</a>&nbsp;&nbsp;&nbsp;<a href=\"'+siteBase+'日本語/"\>日本語</a>',
      copyright: 'Copyright © 2019-2024 eFACILITY'
    }
  }
})
