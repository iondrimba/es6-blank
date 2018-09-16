import './styles/index.scss';

export default class Hello {
  constructor() {
  }

  greetings() {
    const a = { name: 'Ion'}
    const b = Object.assign({}, a);

    console.log('>>>> Hello1', b);
  }
}
