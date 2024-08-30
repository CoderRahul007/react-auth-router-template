
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { NextUIProvider } from '@nextui-org/react';
import routes from './routing/routes';


const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return (
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  )
}
export default App;


