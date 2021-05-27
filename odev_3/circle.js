const pi = Number(Math.PI)

const circleArea = (r) => {
    return (pi * ( r ** 2 )).toFixed(2)
}

const circleCircumference = (r) => {
    return (2 * (r * pi)).toFixed(2)
}

module.exports = {
    cArea: circleArea,
    cCircum: circleCircumference
}