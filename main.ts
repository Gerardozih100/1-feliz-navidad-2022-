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
basic.showLeds(`
    . . # . .
    . # # # .
    . # # # .
    # # # # #
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    # # # # #
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    max7219_matrix.scrollText(
    "Feliz Navidad",
    0,
    1
    )
})
