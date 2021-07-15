import React from "react"
import Editor from "./Editor"
import Toolbar from "./Toolbar"
import Preview from "./Preview"
import placeholder from "./placeholder"
class App extends React.Component{
    constructor(){
        super()
        this.state = {
      markdown: placeholder,
      editorMax: false,
      previewMax: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMax = this.handleEditorMax.bind(this);
    this.handlePreviewMax = this.handlePreviewMax.bind(this);
    }
     handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  handleEditorMax() {
    this.setState({
      editorMax: !this.state.editorMax
    });
  }
  handlePreviewMax() {
    this.setState({
      previewMax: !this.state.previewMax
    });
  }
 
    render()
    {
       
        const classes = this.state.editorMax
      ? ['editorWrap maximized', 'previewWrap hide']
      : this.state.previewMax
      ? ['editorWrap hide', 'previewWrap maximized']
      : ['editorWrap', 'previewWrap'];
      
        return(
            <div>
        <div className={classes[0]}>
          <Toolbar
            
            onClick={this.handleEditorMax}
            text="Editor"
          />
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        </div>
        <div className="convertor"/>
        <div className={classes[1]}>
          <Toolbar
            
            onClick={this.handlePreviewMax}
            text="Previewer"
          />
          <Preview markdown={this.state.markdown} />
        </div>
        
      </div>
    
        
            
        );
    }
}

export default App
