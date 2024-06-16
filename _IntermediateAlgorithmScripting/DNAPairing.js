function pairElement(str) {
    let pairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    };

    let arr = str.split("");
    return arr.map(x => [x, pairs[x]]);
}

pairElement("GCG");