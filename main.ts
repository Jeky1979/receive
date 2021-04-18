radio.onReceivedNumberDeprecated(function (receivedNumber) {
    y = receivedNumber % 1000
    yy = y - 90
    x = receivedNumber - y
    xx = x / 1000 - 90
    if (Math.abs(xx) < 10) {
        if (yy <= 0) {
            motorbit.forward(Math.abs(yy))
        } else {
            motorbit.back(yy)
        }
    } else {
        if (yy <= 0) {
            if (xx <= -15) {
                motorbit.freestyle(Math.abs(yy) * (1 - Math.abs(xx) / 90), Math.abs(yy))
            } else if (xx >= 15) {
                motorbit.freestyle(Math.abs(yy), Math.abs(yy) * (1 - Math.abs(xx) / 90))
            }
        } else {
            if (xx <= -15) {
                motorbit.freestyle(0 - Math.abs(yy) * (1 - Math.abs(xx) / 90), 0 - yy)
            } else if (xx >= 15) {
                motorbit.freestyle(0 - yy, 0 - Math.abs(yy) * (1 - Math.abs(xx) / 90))
            }
        }
    }
})
let xx = 0
let x = 0
let yy = 0
let y = 0
radio.setGroup(1)
