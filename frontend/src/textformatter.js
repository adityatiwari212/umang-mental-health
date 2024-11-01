const prettier = require("prettier");



export const format = (text)=>{
    return prettier.format(text , {parser : "markdown"})
}