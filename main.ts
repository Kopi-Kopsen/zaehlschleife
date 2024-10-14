let zahl = 0
input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    for (let Index = 0; Index <= 10; Index++) {
        basic.showNumber(Index + 1, 50)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    zahl += 1
    for (let index = 0; index < 10; index++) {
        basic.showNumber(zahl, 50)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        zahl += 1
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    zahl = 10
    for (let index = 0; index < 10; index++) {
        basic.showNumber(zahl, 50)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        zahl += -1
    }
})
