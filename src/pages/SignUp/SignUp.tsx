import { NavLink } from 'react-router-dom';
import styles from './SignUp.module.scss';

import { Block, Button } from '@ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const SignUp = () => {
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
                <span>Enter your first name. </span>
                <ErrorMessage
                  errors={errors}
                  name="firstName"
                  render={({ message }) => {
                    return <span className={styles.error}>{message}</span>;
                  }}
                />
              </div>

              <input
                placeholder="Ivan"
                {...register('firstName', {
                  required: 'Required',
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: 'Only letters',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Max length 20 letters',
                  },
                })}
              />
            </div>
            <div className={styles.inputLine}>
              <div className={styles.hint}>
                <span>Enter your last name. </span>
                <ErrorMessage
                  errors={errors}
                  name="lastName"
                  render={({ message }) => {
                    return <span className={styles.error}>{message}</span>;
                  }}
                />
              </div>

              <input
                placeholder="Ivanov"
                {...register('lastName', {
                  required: 'Required',
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: 'Only letters',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Max length 20 letters',
                  },
                })}
              />
            </div>
            <div className={styles.inputLine}>
              <div className={styles.hint}>
                <span>Enter your email. </span>
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
                <span>Choose security password. </span>
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

                  minLength: {
                    value: 4,
                    message: 'min length 4 letters',
                  },
                  maxLength: {
                    value: 16,
                    message: 'max length 16 letters',
                  },
                })}
              />
            </div>
            <Button type="submit" width={150} height={50} variant="primary">
              Sign Up
            </Button>
          </form>
          <div>
            Already have an account? <NavLink to="/signin">Sign In</NavLink>
          </div>
        </div>
      </Block>
    </div>
  );
};
