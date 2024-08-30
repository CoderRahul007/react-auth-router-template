import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthWrapperProps {
  rolesRequired: string[];
  children: React.ReactNode; // More flexible type for children
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ rolesRequired, children }) => {

  const userRoles = ['rahul']; // Placeholder for user roles

  // Check if the user has all the required roles
  const hasRequiredRoles = rolesRequired.every(role => userRoles.includes(role));

  // If the user does not have the required roles, redirect them
  if (!hasRequiredRoles) {
    return <Navigate to="/" replace />;
  }

  // Render the children if the user has the required roles
  return <>{children}</>;
};


interface AuthWrappedComponentProps {
  Component: React.ComponentType;
  LoadingComponent: React.ComponentType;
  roles: string[];
}
// for layout as a prop add Layout: React.ComponentType<{ children : React.ReactNode }>

const AuthWrappedComponent: React.FC<AuthWrappedComponentProps> = ({
  Component,
  LoadingComponent,
  roles
}) => {
  return (
    <AuthWrapper rolesRequired={roles}>
      <Suspense fallback={<LoadingComponent />}>
        <Component />
      </Suspense>
    </AuthWrapper>
  );
};

export default AuthWrappedComponent;

