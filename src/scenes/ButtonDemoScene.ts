import Phaser from 'phaser'

export default class ButtonDemoScene extends Phaser.Scene {
  constructor() {
    super('demo-scene')
  }

  preload() {
    this.load.scenePlugin(
      'rexuiplugin',
      'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      'rexUI',
      'rexUI',
    )
    this.load.image('button-1', 'assets/blue_button02.png')
    this.load.image('button-2', 'assets/blue_button03.png')
    this.load.image('button-3', 'assets/blue_button01.png')
  }

  create() {
    const background = this.add.image(400, 300, 'button-1')
    const overState = this.add.image(400, 300, 'button-2')
    const clickState = this.add.image(400, 300, 'button-3')

    var buttons = this.rexUI.add.buttons({
      // x: 0,
      // y: 0,
      // anchor: undefined,
      // width: undefined,
      // height: undefined,

      orientation: 0,
      // rtl: false,
      // buttonsType: undefined,

      // Elements
      background: background,

      buttons: [
        background,
        overState,
        clickState,
        // buttonGameObject,
        // buttonGameObject,
        // ...
      ],
      expand: false,
      align: undefined,
      click: {
        mode: 'pointerdown',
        clickInterval: 100,
      },

      // space: 0,
      // space: { left: 0, right:0, top:0, bottom:0, item:0 },

      // name: '',
      // draggable: false,
      // sizerEvents: false,
      // eventEmitter: this,
      // groupName: undefined,

      // setValueCallback: undefined,  // or setButtonStateCallback: undefined
      // setValueCallbackScope: undefined  // or setButtonStateCallbackScope: undefined
    })

    buttons.hideButton(1)
    buttons.hideButton(2)

    buttons.on('button.click', (button, index, pointer, event) => {
      buttons.hideButton(0)
      buttons.hideButton(1)
      buttons.showButton(2)
      this.time.delayedCall(100, () => {
        this.scene.start('hello-world')
      })
    })

    buttons.on('button.over', (button, index, pointer, event) => {
      buttons.hideButton(0)
      buttons.showButton(1)
    })

    buttons.on('button.out', (button, index, pointer, event) => {
      buttons.hideButton(1)
      buttons.showButton(0)
    })
  }
}
