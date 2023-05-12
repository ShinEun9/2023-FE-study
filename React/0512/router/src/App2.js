import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";

export default function App2() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">HomePage</Link> <br />
        <Link to="/cart">CartPage</Link> <br />
        <Link to="/products/1">ProductDetailPage</Link> <br />
        <Link to="/users">UserPage</Link>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:id/*" element={<Outlet />}>
            <Route path="" element={<ProductDetailPage />} />
            <Route path="notice" element={<ProductDetailNoticePage />} />
          </Route>
          <Route path={"/users/*"} element={<Outlet />}>
            <Route path="" element={<UserPage />} />
            <Route path="coupon" element={<CouponPage />} />
            <Route path="question" element={<QuestionPage />} />
            <Route path="notice" element={<NoticePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Homepage() {
  return <div>homepage</div>;
}

function UserPage() {
  return (
    <div>
      UserPage
      <Link to="/users/coupon">CouponPage</Link>
      <Link to="/users/question">QuestionPage</Link>
      <Link to="/users/notice">NoticePage</Link>
    </div>
  );
}

function ProductDetailPage() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  return (
    <div>
      ProductDetailPage {path}
      <br />
      <Link to={`/products/${path}/notice`}>
        {path} ProductDetailNoticePage
      </Link>
    </div>
  );
}

function ProductDetailNoticePage() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  return <div>{path} ProductDetailNoticePage </div>;
}

function CartPage() {
  return <div>CartPage</div>;
}
function CouponPage() {
  return <div>CouponPage</div>;
}

function QuestionPage() {
  return <div>QuestionPage</div>;
}
function NoticePage() {
  return <div>NoticePage</div>;
}
