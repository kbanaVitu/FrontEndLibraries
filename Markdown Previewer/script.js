const projectName = 'markdown-previewer';

marked.setOptions({
    breaks: true
});

const markdownInitialText = `
# This is H1
## This is H2
### This is H3
#### This is H4 and so

**Strong text** or *italicized text* your choice


> Wow a blockquote - it is just check the markup


do you like the organised way
1. First add this
2. Then this
3. This is the last one

or non orgranised way
- I don't
- like
- numbers

<br />

\`console.log('Finally I can write Hello World!');\`

<br />
Or use tags here, who cares
<br /><br />

but but but always a but
we will write a function to print hello world

\`\`\`\


function printHelloWorld(sayHelloTo='World') {
    console.log('Hello' + sayHelloTo);
}

