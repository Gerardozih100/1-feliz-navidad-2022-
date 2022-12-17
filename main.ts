input.onButtonPressed(Button.A, function () {
    On += 90000
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . # . .
        `)
    for (let index = 0; index < On; index++) {
        max7219_matrix.scrollText(
        "Feliz Navidad",
        0,
        1
        )
    }
    basic.showString(" Off")
})
let On = 0
max7219_matrix.setup(
4,
DigitalPin.P12,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
max7219_matrix.for_4_in_1_modules(
rotation_direction.counterclockwise,
true
)
basic.showString("On")
basic.pause(1000)
basic.showLeds(`
    . . # . .
    . # # # .
    . # # # .
    # # # # #
    . . # . .
    `)
On = 0
