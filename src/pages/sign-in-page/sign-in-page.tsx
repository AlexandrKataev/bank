import { SignInForm } from '@features/auth';
import styles from './sign-in-page.module.scss';

export const SignInPage = () => {
  return (
    <div className={styles.container}>
      <SignInForm />
    </div>
  );
};
