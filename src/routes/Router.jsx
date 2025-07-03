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
import ProtectedUser from "../utils/guard/ProtectedUser";
import ProtectedGuest from "../utils/guard/ProtectedGuest";
import DashboardLayout from "../layouts/Main/DashboardLayout";
import Course from "../components/dashboard/Course";
import Setting from "../components/dashboard/Setting";
import Transaction from "../components/dashboard/Transaction";
import Notice from "../components/dashboard/Notice";
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
          <Route
            path="login"
            element={
              <ProtectedGuest>
                <LoginPage />
              </ProtectedGuest>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedGuest>
                <RegisterPage />
              </ProtectedGuest>
            }
          />
          <Route path="instructor" element={<Instructor />} />
          <Route path="instructor/:id" element={<InstructorDetail />} />
          <Route
            path="dashboard"
            element={
              <ProtectedUser>
                <DashboardLayout />
              </ProtectedUser>
            }>
            <Route index element={<UserDashboard />} />
            <Route path="course" element={<Course />} />
            <Route path="setting" element={<Setting />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="notice" element={<Notice />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default Router;
