import React, { useState} from 'react';
import { useAppDispatch, useAppSelector} from '../../../store/hooks';
import { State } from "../../../type";
import { signup } from '../../../store/user';


const FormTab = (): JSX.Element => {
  const [userName, setUserName] = useState<string>("");
  const [userPhone, setUserPhone] = useState<string>("");
  const [userPassword, setPassword] = useState<string>("");
  const [userConfirm, setUserConfirm] = useState<string>("");
  const users = useAppSelector( (state: State) => state.users);
  let loading = users[users.length-1].loading;


  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!loading) {
        setUserName('');
        setUserPhone('');
        setPassword('');
        setUserConfirm('');
    } 
  }, [loading]);

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>)  => {
    evt.preventDefault();

    const data = { id: Math.random().toString(16).substring(3),  username: userName, phone: userPhone, loading: true, password: userPassword }
    dispatch(signup(data));
  }

  return (
    <React.Fragment>
          <div>
          {loading && <span>submitting...</span>}
            <form onSubmit={submitHandler}>
              <fieldset>
                  <legend>User Name</legend>
                  <label htmlFor="username">
                      <input type="text" 
                        id="username" 
                        name="username" 
                        value={userName}
                        onChange={(
                          evt: React.ChangeEvent<HTMLInputElement>,
                        ): void => setUserName(evt.target.value)}
                      />
                  </label>
              </fieldset>
              <fieldset>
                  <legend>Phone Number</legend>
                  <label htmlFor="phone">
                      <input type="text" 
                        id="phone" 
                        name="phone" 
                        value={userPhone}
                        onChange={(
                          evt: React.ChangeEvent<HTMLInputElement>,
                        ): void => setUserPhone(evt.target.value)}
                      />
                  </label>
              </fieldset>
              <fieldset>
                  <legend>Password</legend>
                  <label htmlFor="password">
                      <input type="text" 
                        id="password" 
                        name="password" 
                        value={userPassword}
                        onChange={(
                          evt: React.ChangeEvent<HTMLInputElement>,
                        ): void => setPassword(evt.target.value)}
                      />
                  </label>
              </fieldset>
              <fieldset>
                  <legend>Confirm Password</legend>
                  <label htmlFor="confirm">
                      <input type="text" 
                        id="confirm" 
                        name="confirm" 
                        value={userConfirm}
                        onChange={(
                          evt: React.ChangeEvent<HTMLInputElement>,
                        ): void => setUserConfirm(evt.target.value)}
                      />
                  </label>
              </fieldset>
              <button type="submit" className={!loading ? "btn submit" : "btn-disabled"} disabled={loading ? true : false}>
                  Submit
              </button>
            </form>
          </div>
        </React.Fragment>
  );
}

export default FormTab;

