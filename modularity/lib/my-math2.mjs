function times(a, b) {
    return a * b;
}

function sq(x) {
    return times(x, x);
}

const LS = 299792458;

export {
    sq as square,
    LS as LIGHTSPEED
}