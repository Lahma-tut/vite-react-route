import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './model/store.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Task from './pages/task/Task';
import Error from './pages/error/Error';
import Posts from './pages/post/Posts';
import Post from './pages/post/Post';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Posts />
      },
      {
        path: "/tasc",
        element: <Task />
      },
      {
        path: "/post/:id",
        element: <Post />
      }
    ]
  },
  {
    path: "*",
    element: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);