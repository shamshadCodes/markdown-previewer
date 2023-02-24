const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

const defaultText = `# This is the page Heading
## This is another heading
[Link to github](https://www.github.com)
\`console.log("Hello WORLD")\`
\`\`\`
// code block
function example() {
  return 'example';
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://via.placeholder.com/150)
**Bolded text**`;

editor.value = defaultText;
preview.innerHTML = marked(defaultText);

editor.addEventListener("input", () => {
  const markdown = editor.value;
  preview.innerHTML = marked(markdown);
});
