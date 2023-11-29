import { SignUpForm } from '@features/auth';
import styles from './sign-up-page.module.scss';

export const SignUpPage = () => {
  return (
    <div className={styles.container}>
      <SignUpForm />
    </div>
  );
};
