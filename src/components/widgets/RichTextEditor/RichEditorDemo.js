import React from 'react';
import RichTextEditor,{createEmptyValue, EditorValue} from 'react-richtext/lib/RichTextEditor';
import {convertToRaw} from 'draft-js';

class RichEditorDemo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: createEmptyValue(),
      format: 'html'},
    this.onChange = this.onChange.bind(this);
    this.onChangeFormat = this.onChangeFormat.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
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

  render(){
    let {value} = this.state;
    return (
      <div className="editor-demo">
        <div className="row">
          <RichTextEditor
            value={value}
            onChange={this.onChange}
            placeholder="Type here ..."
          />
        </div>

        <label htmlFor="change-format-html" className="radio-item" >
          <input
            id="change-format-html"
            className="display"
            type="radio"
            name="format"
            value="html"
            checked={this.state.format === 'html'}
            onChange={this.onChangeFormat}
          />
          <span className="label">HTML</span>
        </label>
        <label htmlFor="change-format-markdown" className="radio-item">
          <input
            id="change-format-markdown"
            className="display"
            type="radio"
            name="format"
            value="markdown"
            checked={this.state.format === 'markdown'}
            onChange={this.onChangeFormat}
          />

          <span className="label">Markdown</span>
        </label>
        <span className="log" onClick={this.logState} >Log State</span>

        <div className="row">
          <textarea
            className="source"
            placeholder="Editor Source"
            value={value.toString(this.state.format)}
            onChange={this.onChangeSource}
          />
        </div>
      </div>
    );
  }
}

export default RichEditorDemo;
