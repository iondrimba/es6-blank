import './styles/index.scss';

export default class Hello {
  constructor() {
  }

  greetings() {
    const a = { name: 'Jon Doe'}
    const b = Object.assign({}, a);
    const log = () => console.log('>>> Hello', b);

    log();
  }
}
