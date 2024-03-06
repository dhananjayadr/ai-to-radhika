function walk(node) {
    if (shouldSkipNode(node)) {
        return;
    }

    switch (node.nodeType) {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            for (var child = node.firstChild; child; child = child.nextSibling) {
                walk(child);
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function shouldSkipNode(node) {
    var tagName = node.tagName ? node.tagName.toLowerCase() : "";
    if (tagName === 'input' || tagName === 'textarea' || (node.classList && node.classList.contains('ace_editor'))) {
        return true;
    }
    return false;
}

function handleText(textNode) {
    var v = textNode.nodeValue;

    v = v.replace(/\bAI\b/gi, "Radhika");
    v = v.replace(/\bartificial intelligence\b/gi, "Radhika");

    textNode.nodeValue = v;
}

walk(document.body);

// document.addEventListener('DOMContentLoaded', function() {
//     // Your script here
//     walk(document.body);
// });
