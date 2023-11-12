let 変数 = 0
led.enable(true)
basic.showLeds(`
    . . # # .
    . # . # .
    # . . # .
    # # # # #
    . . . # .
    `)
basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(1000)
    }
    変数 = 0
    for (let index = 0; index < 2; index++) {
        while (変数 < 1024) {
            変数 = 変数 + 1
            pins.analogWritePin(AnalogPin.P0, 変数)
            basic.pause(5)
        }
        while (変数 > 0) {
            変数 = 変数 - 1
            pins.analogWritePin(AnalogPin.P0, 変数)
            basic.pause(5)
        }
    }
})
