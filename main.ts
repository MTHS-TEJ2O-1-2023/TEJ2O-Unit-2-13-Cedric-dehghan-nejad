/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: cedric
 * Created on: Oct 2023
 * This program tells you the light level
 */

// variables
let neopixelStrip: neopixel.Strip = null
let loopcounter = 0

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
  loopcounter = 4
  neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))

  while (loopcounter >= 0) {
    basic.showNumber(loopcounter)
    neopixelStrip.show()
    basic.pause(1000)

    loopcounter = loopcounter - 1
    neopixelStrip.setPixelColor(loopcounter, neopixel.colors(NeoPixelColors.Black))
  }
})
