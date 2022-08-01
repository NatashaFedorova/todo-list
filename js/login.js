console.log('login');

const refs = {
  form: document.querySelector('.login-form'),
};

const handleSubmit = e => {
  e.preventDefault();

  // варіант деструктуризації 1
  // const { login, password } = event.target.elements;
  // const loginValue = login.value;
  // const passwordValue = password.value;

  // варіант деструктуризації 2
  const {
    login: { value: loginValue },
    password: { value: passwordValue },
  } = event.target.elements;

  // варіант деструктуризації 3s
  // const {
  //   elements: { login, password },
  // } = event.target;
  // const loginValue = login.value;
  // const passwordValue = password.value;

  console.log({ loginValue, passwordValue }); // {loginValue: 'NatashaFedorova', passwordValue: 'qwert'}
};

refs.form.addEventListener('submit', handleSubmit);
