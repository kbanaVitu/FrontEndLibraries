const projectName = 'markdown-previewer';

marked.setOptions({
    breaks: true
});

const markdownInitialText = `

function printHelloWorld(sayHelloTo='World') {
    console.log('Hello' + sayHelloTo);
}

