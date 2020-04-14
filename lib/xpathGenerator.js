module.exports = {
    getElementXPath(elt) {
        let path = "";
        for (; elt && elt.nodeType == 1; elt = elt.parentNode) {
            let idx = this.getElementIdx(elt);
            let xname = elt.tagName;
            if (idx > 1) xname += "[" + idx + "]";
            path = "/" + xname + path;
        }

        return path;
    },
    getElementIdx(elt) {
        let count = 1;
        for (let sib = elt.previousSibling; sib; sib = sib.previousSibling) {
            if (sib.nodeType == 1 && sib.tagName == elt.tagName) count++
        }

        return count;
    }

};
