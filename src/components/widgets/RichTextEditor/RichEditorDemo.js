import React from 'react';
import RichTextEditor,{createEmptyValue,EditorValue} from 'react-richtext/lib/RichTextEditor';
import {convertToRaw} from 'draft-js';
// import {EditorValue} from 'react-richtext/lib/lib/EditorValue';

const styles={
  display:{
    color: '#0585c8',
    paddingTop:10
  },
  row:{
    height:100,
    width: '100%',
    borderColor:'#ddd',
    resize: 'none'
  },
  log:{
    float:'right',
    marginTop:10,
    color: '#0585c8',
    paddingRight:5
  }

};

class RichEditorDemo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: createEmptyValue(),
      format: 'html'
    }; // eslint-disable-line
  }

  render() // eslint-disable-line
{
    let {value} = this.state;
    return (
    <div className="editor-demo">
      <div className="row">
        <RichTextEditor
          value={value}
          onChange={this.onChange.bind(this)}  // eslint-disable-line
          placeholder="Type here ..."
        />
      </div>

      <label className="radio-item" >
        <input
          style={styles.display}
          type="radio"
          name="format"
          value="html"
          checked={this.state.format === 'html'}
          onChange={this.onChangeFormat.bind(this)}   // eslint-disable-line
        />
        <span className="label">HTML</span>
      </label>
      <label className="radio-item">
        <input
          style={styles.display}
          type="radio"
          name="format"
          value="markdown"
          checked={this.state.format === 'markdown'}
          onChange={this.onChangeFormat.bind(this)}    // eslint-disable-line
        />

        <span className="label">Markdown</span>
      </label>
      <span className="btn-row" style={styles.log} onClick={this.logState} >Log State</span>

      <div className="row">
          <textarea
            className="source"
            placeholder="Editor Source"
            value={value.toString(this.state.format)}
            onChange={this.onChangeSource.bind(this)}      // eslint-disable-line
            style={styles.row}
          />
      </div>
    </div>

  );
  }
  logState() {
    console.log(this.state.value); // eslint-disable-line
    const editorState = this.state.value.getEditorState();
    const contentState = window.contentState = editorState.getCurrentContent().toJS();
    console.log(contentState); // eslint-disable-line
  }
  logStateRaw() {
    const editorState = this.state.value.getEditorState();
    const contentState = editorState.getCurrentContent();
    const rawContentState = window.rawContentState = convertToRaw(contentState);
    console.log(JSON.stringify(rawContentState)); // eslint-disable-line
  }
  onChange(value= EditorValue) {
    this.setState({value});
  }
  onChangeSource(event= Object) {
    const source = event.target.value;
    const oldValue = this.state.value;
    this.setState({
      value: oldValue.setContentFromString(source, this.state.format),
    });
  }
  onChangeFormat(event= Object) {
    this.setState({format: event.target.value});
  }

}

export default RichEditorDemo;
