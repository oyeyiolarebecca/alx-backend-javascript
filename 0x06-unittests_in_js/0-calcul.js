function calculateNumber(a, b) {
    const first = Math.round(a);
    const second = Math.round(b);
    const c = first + second;
    return c;
}

module.exports = calculateNumber;
