import { NavLink, useNavigate } from 'react-router-dom';
import styles from './sign-up-form.module.scss';

import { Block, Button } from '@ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
// import { authService } from '../../../../shared/api/services/authService';
import { SignUpDto } from '@models';
import { useSignUpMutation } from '@features/auth';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<SignUpDto>({
    criteriaMode: 'all',
    mode: 'onChange',
  });

  const [signUp, { isLoading, isSuccess, error, isError }] = useSignUpMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success('User registered successfully');
      navigate('/verifyemail');
    }

    if (isError) {
      console.log(error);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmit: SubmitHandler<SignUpDto> = (values) => {
    signUp(values);
  };

  // const onSubmit: SubmitHandler<SignUpDto> = async (data) => {
  //   const tokens = await authService.signUp(data);
  //   console.log(tokens);
  // };
  return (
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
              className={styles.input}
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
              className={styles.input}
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
              className={styles.input}
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
              className={styles.input}
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
  );
};
