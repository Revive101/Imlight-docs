import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Imlight",
  description: "Rewriting Magic",
  srcDir: "modules",
  base: "/Imlight-docs/",
  themeConfig: {
    logo: '../assets/flowers.png',
    nav: [
      { text: 'Jumpstart', link: '/' },
      { text: 'Game Internals', link: '/internals/index' },
    ],

    sidebar: [
      {
        text: 'Game Internals',
        items: [
          { text: 'Getting Started', link: '/internals/index' },
          { text: 'Launch Args', link: '/internals/launchargs' },
          { text: 'Schemas', link: '/internals/schemas' },
        ]
      },
      {
        text: 'Systems',
        items: [
          {
            text: "KiNP",
            items: [
              { text: 'KI Networking Protocol', link: '/internals/systems/kinp/index' },
              { text: 'Packet Framing', link: '/internals/systems/kinp/packet-framing' },
              { text: 'Control Messages', link: '/internals/systems/kinp/controlmessages' },
              { text: 'Session', link: '/internals/systems/kinp/session' },
            ]
          },
          {
            text: "DML",
            items: [
              { text: 'Distributed Message Layer', link: '/internals/systems/dml/index' },
              { text: 'Message Protocols', link: '/internals/systems/dml/protocols' },
              { text: 'Message Records', link: '/internals/systems/dml/records' },
              { text: 'Serialization', link: '/internals/systems/dml/serialization' },
            ]
          },
          {
            text: "Object Property",
            items: [
              { text: 'Object Property', link: '/internals/systems/op/index' },
              { text: 'Property Class', link: '/internals/systems/op/propertyclass' },
              { text: 'Serialization', link: '/internals/systems/op/serialization' },
              { text: 'Core Objects', link: '/internals/systems/op/coreobject' },
            ]
          },
        ]
      },
      {
        text: "Authority",
        items: [
          { text: 'Authentication', link: '/internals/auth/auth' },
          { text: 'Validation', link: '/internals/auth/validation' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Revive101/Imlight-docs' }
    ]
  }
})
