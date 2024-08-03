import './App.css';
import Home from './pages/Home';
import Todo from './pages/todo/Todo';
import Diary from './pages/diary/Diary';
import Post from './pages/post/Post';
import Layout from './Layout';
import { Routes, Route } from "react-router-dom";
import NotePage from './pages/todo/todo_component/NotePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="todo" element={<Todo />}>
          <Route path=":id" element={<NotePage />} />
        </Route>
        <Route path="diary" element={<Diary />} />
        <Route path="post" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default App;
