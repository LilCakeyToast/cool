input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("Hello!")
    basic.showString("how")
    basic.showString("are")
    basic.showString("you")
    music.playMelody("B A G A G F A C5 ", 112)
    basic.showIcon(IconNames.Fabulous)
    basic.showIcon(IconNames.House)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Ghost)
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.StickFigure)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Cow)
    basic.showLeds(`
        # . . # .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        # # # . .
        # . . . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        # # # . .
        # . . . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        . # . . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        # . # . .
        # # . . .
        # . # . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        # . # . #
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . . . # .
        . . # . .
        . . . . .
        `)
    basic.showIcon(IconNames.EigthNote)
    basic.clearScreen()
})
