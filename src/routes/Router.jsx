import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/Main/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Article from "../pages/Article";
import ArticleDetail from "../pages/ArticleDetail";
import Cart from "../pages/Cart";
import Courses from "../pages/Courses";
import CourseDetail from "../pages/CourseDetail";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Instructor from "../pages/Instructor";
import InstructorDetail from "../pages/InstructorDetail";
import UserDashboard from "../pages/UserDashboard";
function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="article" element={<Article />} />
          <Route path="article/:id" element={<ArticleDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="courses" element={<Courses />} />
          <Route path="course/:id" element={<CourseDetail />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="instructor" element={<Instructor />} />
          <Route path="instructor/:id" element={<InstructorDetail />} />
          <Route path="dashboard" element={<UserDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
