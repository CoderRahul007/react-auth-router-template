import React  from 'react';
import { RouteObject } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
import ErrorBoundary from '../components/common/ErrorBoundary';
import RootLayout from '../components/common/RootLayout';
import AuthWrappedComponent from '../Authentication/authWrappedComponent';
import Loading from '../components/common/Loading';


const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        "index": true,
        element: (
          <AuthWrappedComponent
            Component={Home}   
            LoadingComponent={Loading}       
            roles={[
              'rahul'
            ]}
          />
        ),
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/home',                  
        element: (
          <AuthWrappedComponent
            Component={Home}   
            LoadingComponent={Loading}       
            roles={[
              'rahul'
            ]}
          />
        ),
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/about',
        element: (
          <AuthWrappedComponent
            Component={About}   
            LoadingComponent={Loading}       
            roles={[
              'rahul'
            ]}
          />
        ),
        errorElement: <ErrorBoundary />,     
      } 
                     
    ]      
  }
 
];

export default routes;
