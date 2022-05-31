import Phaser from 'phaser'
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js'

import ButtonDemoScene from './scenes/ButtonDemoScene'
import HelloWorldScene from './scenes/HelloWorldScene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [ButtonDemoScene, HelloWorldScene],
  plugins: {
    scene: [
      {
        key: 'rexUI',
        plugin: UIPlugin,
        mapping: 'rexUI',
      },
    ],
  },
}

export default new Phaser.Game(config)
