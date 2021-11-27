const htmlEditor = CpdeMirror(document.querySelector(".editor .code .html-code"), {
    lineNumbers: true,
    tabsize: 4,
    mode: "xml"
});
const cssEditor = CpdeMirror(document.querySelector(".editor .code .css-code"), {
    lineNumbers: true,
    tabsize: 4,
    mode: "css"
});
const jsEditor = CpdeMirror(document.querySelector(".editor .code .js-code"), {
    lineNumbers: true,
    tabsize: 4,
    mode: "javascript"
});