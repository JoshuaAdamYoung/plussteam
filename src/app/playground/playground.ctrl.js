class PlaygroundController {
  constructor(){
    'ngInject';
    this.ref = new Firebase('https://plussteam.firebaseio.com');
    this.firepadRef = this.ref.child('firepad');
    this.codeMirror = CodeMirror(document.getElementById('firepad'), { lineWrapping: true });
    this.init = this.initialize();
  }

  initialize(){
    var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror,
      { richTextShortcuts: true, richTextToolbar: true, defaultText: 'Hello, World!' });
  }

}

export default PlaygroundController;
