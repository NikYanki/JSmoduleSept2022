const createElement = (tagName, fatherNode) => {
    const tag = document.createElement(tagName);
    fatherNode.append(tag);
    return tag;
}

const showObject = (object, saveTo) => {
    const ul = createElement('ul', saveTo);
    for (const objectKey in object) {
        const li = createElement('li', ul);
        if (typeof (object[objectKey]) !== "object") {
            li.innerHTML = objectKey + " : " + object[objectKey];
        } else {
            li.innerHTML = `<b>${objectKey}  :</b>`;
            showObject(object[objectKey],saveTo);
        }
    }
}
const showSelectedkeysInObjet = (object, saveTo, ...keys) => {
    const ul = createElement('ul', saveTo)
    for (const key of keys) {
        const li = createElement('li', ul)
        for (const objectKey in object) {
            if (objectKey === key)
                li.innerHTML = `${objectKey} : ${object[objectKey]}`
        }
    }
}
export {createElement, showObject, showSelectedkeysInObjet}
