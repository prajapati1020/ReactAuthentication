
import { Form ,Link,useSearchParams ,useActionData,useNavigation} from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const data =useActionData();
  const navigation =useNavigation();
 const[SearchParams ] =useSearchParams();
 const isLogin =SearchParams.get('mode')==='Login'

 const isSubmitting =navigation.state ==='submitting'

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.errors && (<ul>
          {Object.values(data.errors).map((err)=>(<li key={err}>
            {err}
          </li>))}
          </ul>
          )}
          {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin?'signup':'Login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting?'Submitting..':'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
