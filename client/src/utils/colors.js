/* global Phaser */
export function hexToColor(hex) {
    let { r, g, b } = Phaser.Color.hexToColor(hex)

    return Phaser.Color.getColor(r, g, b)
}
