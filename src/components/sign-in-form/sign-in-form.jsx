import React, {useState} from 'react';

const SignInForm = () => {
  const [signInForm, setSignInForm] = useState({
    'email': ``,
    'password': ``
  });

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setSignInForm({...signInForm, [name]: value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" type="email" name="email" placeholder="Email" required onChange={handleFieldChange} />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input" type="password" name="password" placeholder="Password" required onChange={handleFieldChange} />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
};

export default SignInForm;
