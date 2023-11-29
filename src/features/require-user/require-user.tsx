import { userApi } from '@entities/user';
import { useCookies } from 'react-cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// import FullScreenLoader from './FullScreenLoader';

const RequireUser = () => {
  const [cookies] = useCookies(['logged_in']);
  const location = useLocation();

  const { isLoading, isFetching } = userApi.endpoints.getMe.useQuery(null, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  const loading = isLoading || isFetching;

  // const user = userApi.endpoints.getMe.useQueryState(null, {
  //   selectFromResult: ({ data }) => data ,
  // });

  if (loading) {
    return <div>LOADING</div>;
  }

  return cookies.logged_in ? (
    <Outlet />
  ) : (
    <Navigate to="/signup" state={{ from: location }} replace />
  );
};

export default RequireUser;
