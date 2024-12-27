module.exports = {
  pwa: {
    name: 'Aura App',
    short_name: 'Aura',
    description: 'A smart home app built with Vue.js.',
    themeColor: '#121212',
    backgroundColor: '#121212',
    display: 'standalone', // Makes the app behave like a native app
    icons: [
      {
        src: 'favicon.ico',
        sizes: '400x400',
        type: 'image/ico',
      },
    ],
    // Customize the service worker
    workboxOptions: {
      // Add some caching strategies here if you want
      skipWaiting: true,
      clientsClaim: true,
    },
  },
}
