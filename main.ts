/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: cedric
 * Created on: Oct 2023
 * This program does a countdown and shows colors for each number
 */

// variables
let neopixelStrip: neopixel.Strip = null
let loopcounter = 4

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
    neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    loopcounter = 4
    while (loopcounter >= 0){
    basic.showNumber(loopcounter)
    neopixelStrip.setPixelColor(loopcounter, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.pause(500)
   loopcounter = loopcounter - 1
    }

})
