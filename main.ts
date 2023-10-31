/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: cedric
 * Created on: Oct 2023
 * This program does a countdown and shows colors for each number
 */

// variables
let neopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {

    // on countdown 4 light up Red
    basic.showString('4')
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    pause(1000)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()

// on countdown 3 light up blue
    basic.showString('3')
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.show()
    pause(1000)
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()

// on countdown 2 light up Green
    basic.showString('2')
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
    pause(1000)
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()

// on countdown 1 light up yellow
    basic.showString('1')
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    pause(1000)
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()

// on countdown 0 light up Purple
    basic.showString('0')
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
    neopixelStrip.show()
    pause(1000)
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
})
