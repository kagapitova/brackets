module.exports = function check(str, bracketsConfig) {
    let arrPair = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        arrPair.push(bracketsConfig[i][0] + bracketsConfig[i][1])
    }

    while (true) {
        let counter = 0;
        for (let j = 0; j < arrPair.length; j++) {
            if (str.includes(arrPair[j])) {
                str = str.replace(arrPair[j], '')
                counter++
            }
        }
        if (counter === 0) {
            break;
        }
    }
    return str.length === 0;
}
