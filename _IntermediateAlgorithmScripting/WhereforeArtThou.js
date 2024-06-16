function whatIsInAName(collection, source) {
    let sourceKeys = Object.keys(source);

    return collection.filter((obj) => {
        return sourceKeys.every((key) => {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });