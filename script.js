const initialState = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...

- list item 1
- list item 2
- list item 3

[Visit random quote generator website](https://frankie3388.github.io/random-quote-machine/)

This is a inline \`<div></div>\`

This is a block code

\`\`\`
let x = 1
let y = 2
let z = x + y
\`\`\`

This is a paragraph

**This is bolded text**

> Block Quotes!

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


function App() {
    const [text, setText] = React.useState(initialState)
    
    React.useEffect(() => {
        $("#expand-button").on('click', function(){
            if ($('#editor').height() < "400") {
                $("#editor").animate({
                    height: "800"
                }, 250);
            } else {
                $("#editor").animate({
                    height: "300"
                }, 250)
            }
        })
    }, []);
    
    return (
        <div>
            <h1 id='edit-heading' className='border border-dark w-50'>
                Editor
                <a id='expand-button' className="btn btn-dark">
                    <i class="fa fa-expand"></i>
                </a>
            </h1>
                <textarea
                    id="editor" 
                    className="w-50 p-3" 
                    rows="10" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}>
                </textarea>
        
            <h1 id='pre-heading' className="mt-5 border w-75">Previewer</h1>
            <Preview markdown={text} />
        </div>
    )
}
       

function Preview({markdown}) {
 const mark = marked.parse(markdown, {breaks: true})
    return <div id="preview" dangerouslySetInnerHTML={{__html: mark}} 
    className="text-start w-75 p-3">   
    </div>
}

ReactDOM.render(
    <App />, document.getElementById('app'))