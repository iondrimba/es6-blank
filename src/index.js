import Hello from './hello';

let app = new  Hello();
app.greetings();

if (module.hot) {
  module.hot.accept('./hello.js', function () {
    console.log('Accepting the updated module!');
    app = new  Hello();
    app.greetings();
  })
}
