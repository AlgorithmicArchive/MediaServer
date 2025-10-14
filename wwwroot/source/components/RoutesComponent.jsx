import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
// import AdminPanel from "./AdminPanel";
import HomePage from "../screens/user/Home";
import Auth from "../screens/home/Auth";
import UserLayout from "../screens/user/UserLayout";
import AdminLayout from "../screens/admin/AdminLayout";
import Home from "../../source/screens/admin/AdminHome";
import MediaDetailPage from "../screens/user/MediaDetails";
import Test from "../screens/user/Test";

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Auth />} />

    {/* User protected routes */}
    <Route element={<ProtectedRoute requiredRoles={["User"]} />}>
      <Route path="/user" element={<UserLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="media/:mediaId" element={<MediaDetailPage />} />
        <Route path="test" element={<Test />} />
      </Route>
    </Route>

    {/* Admin protected routes */}
    <Route element={<ProtectedRoute requiredRoles={["Admin"]} />}>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Route>

    {/* Unauthorized fallback */}
    <Route path="/unauthorized" element={<div>Access Denied</div>} />
  </Routes>
);

export default RoutesComponent;
