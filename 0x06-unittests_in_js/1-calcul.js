function calculateNumber(type, a, b) {
    const first = Math.round(a);
    const second = Math.round(b);
    
    if (type === 'SUM') {
        return first + second;
    } else if (type === 'SUBTRACT') {
        return first - second;
    } else if (type === 'DIVIDE') {
        if (second === 0) {
            return 'Error';
        }
        return first / second;
    }
}

module.exports = calculateNumber;
