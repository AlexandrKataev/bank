import { NavLink } from 'react-router-dom';
import styles from './SignIn.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { Block, Button } from '@ui';

interface SignUpForm {
  email: string;
  password: string;
}

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    criteriaMode: 'all',
  });

  const onSubmit: SubmitHandler<SignUpForm> = (data) => console.log(data);
  return (
    <div className={styles.container}>
      <Block>
        <div className={styles.block}>
          <h1 className={styles.title}>Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.inputGroup}>
            <div className={styles.inputLine}>
              <div className={styles.hint}>
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => {
                    return <span className={styles.error}>{message}</span>;
                  }}
                />
              </div>

              <input
                placeholder="ivanov@example.com"
                type="email"
                {...register('email', { required: 'Required' })}
              />
            </div>
            <div className={styles.inputLine}>
              <div className={styles.hint}>
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }) => {
                    return <span className={styles.error}>{message}</span>;
                  }}
                />
              </div>

              <input
                placeholder="Strong password"
                type="password"
                {...register('password', {
                  required: 'Required',
                })}
              />
            </div>
            <Button type="submit" width={150} height={50} variant="primary">
              Sign Up
            </Button>
          </form>
          <div>
            Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </div>
      </Block>
    </div>
  );
};
