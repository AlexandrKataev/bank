import styles from './sign-in-form.module.scss';

import { NavLink, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { Block, Button } from '@ui';
import { useSignInMutation } from '@features/auth';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

interface SignUpForm {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<SignUpForm>({
    criteriaMode: 'all',
    mode: 'onChange',
  });

  const [signIn, { isLoading, isSuccess, error, isError }] = useSignInMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success('You successfully logged in');
      navigate('/');
    }
    if (isError) {
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: 'top-right',
          }),
        );
      } else {
        toast.error((error as any).data.message, {
          position: 'top-right',
        });
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    signIn(data);
  };

  return (
    <Block>
      <div className={styles.block}>
        <h1 className={styles.title}>Sign In</h1>
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
              className={styles.input}
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
              className={styles.input}
              type="password"
              {...register('password', {
                required: 'Required',
              })}
            />
          </div>
          <Button type="submit" width={150} height={50} variant="primary">
            Sign In
          </Button>
        </form>
        <div>
          Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </div>
    </Block>
  );
};
