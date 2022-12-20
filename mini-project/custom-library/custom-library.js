const createElement = (tagName, fatherNode) => {
    const tag = document.createElement(tagName);
    fatherNode.append(tag);
    return tag;
}

const showObject = (object) => {
    const wrap = createElement('div', document.body)
    for (const objectKey in object) {
        const p = createElement('p', wrap)
        if (typeof (object[objectKey]) !== "object") {
            p.innerHTML = objectKey + " : " + object[objectKey];
        } else {
            p.innerHTML = objectKey + ' :'
            showObject(object[objectKey]);
        }
    }
}
export {createElement, showObject}
