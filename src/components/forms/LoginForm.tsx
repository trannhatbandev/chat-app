import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from '../../utils/styles';
import styles from './index.module.scss';
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel
          htmlFor="email"
          {...register('email', { required: 'Email is required' })}
        >
          {' '}
          Email
        </InputLabel>
        <InputField type="email" id="email" />
      </InputContainer>

      <InputContainer className={styles.loginFormPassword}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          type="password"
          id="password"
          {...register('password', { required: 'Password is required' })}
        />
      </InputContainer>
      <Button className={styles.button}>Login</Button>
      <div className={styles.footerText}>
        <span>Don't have an account?</span>
        <Link to="/register">
          <span>Sign up</span>
        </Link>
      </div>
    </form>
  );
};
