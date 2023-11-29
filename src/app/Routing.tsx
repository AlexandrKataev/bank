import {
  ActivityPage,
  CardsPage,
  EarnGiftsPage,
  HelpCenterPage,
  HomePage,
  RecipientsPage,
  SignUpPage,
  SignInPage,
} from '@pages';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RootState, useAppSelector } from './store/store';
import { useRefreshMutation } from '@features/auth';
import { useEffect } from 'react';

export const Routing = () => {
  const user = useAppSelector((state: RootState) => state.userState.user);
  const [refresh] = useRefreshMutation();
  useEffect(() => {
    refresh(null);
  }, []);
  return (
    <Routes>
      {user ? (
        <>
          <Route path="cards" element={<CardsPage />} />
          <Route path="activity" element={<ActivityPage />} />
          <Route path="recipients" element={<RecipientsPage />} />
          <Route path="help" element={<HelpCenterPage />} />
          <Route path="gifts" element={<EarnGiftsPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </>
      ) : (
        <>
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="*" element={<Navigate to="/signup" replace />} />
        </>
      )}
    </Routes>
  );
};
