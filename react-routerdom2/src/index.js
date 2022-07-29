import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Home() {
  return (
    <div>
      <h2>SS전자소개</h2>
      전자제품의 모든 메카
    </div>
  )
}
var contents=[
  {id : 1, title : "냉장고", desc : "양문형으로..."},
  {id : 2, title : "세탁기", desc : "드럼과 통돌이..."},
  {id : 3, title : "에어컨", desc : "스탠다드형, 벽걸이형..."}
];
function Product() {
  var params = useParams();
  var prod_id = params.product.id;
  var selected_product = {
    title : "제품없음",
    desc : "제품 정보 없음"
  }
  for(var i = 0; i < contents.length; i++) {
    if(contents[i].id === Number(prod_id)) {
      selected_product = contents[i];
      break;
    }
  }
  return (
    <div>
      <h3>{selected_product.title}</h3>
      <h3>{selected_product.desc}</h3>
    </div>
  )
}

function Products() {
  var list = [];
  for(var i = 0; i < contents.length; i++) {
    list.push(
      <li key = {contents[i].id}>
        <NavLink to={"/product/" + contents[i].id}>
          {contents[i].title}
        </NavLink>
      </li>
    )
  }
  return (
    <div>
      <h2>제품소개</h2>
      <ul>
       {/* <li><NavLink to="/Products/1">냉장고</NavLink></li>
        <li><NavLink to="/Products/2">세탁기</NavLink></li>
  <li><NavLink to="/Products/3">에어컨</NavLink></li> */}
        {list}
      </ul>
      <Routes>
        <Route path=":product_id" element={<Product></Product>}/>
      </Routes>
    </div>
  )
}
function Community() {
  return (
    <div>
      <h2>커뮤니티</h2>
      다양한 제품들의 사용법을 알려주며...
    </div>
  )
}

function App() {
  return(
    <div>
      <h1>SS전자</h1>
      <ul>
        <li><NavLink to="/">SS전자소개</NavLink></li> {/* a태그는 새로고침이 되고, NavLink를 사용해주면 active라는 class를 갖게 됨 */}
        <li><NavLink to="/products">제품소개</NavLink></li>
        <li><NavLink to="/community">커뮤니티</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/products" element={<Products></Products>}/>
        <Route path="/community" element={<Community></Community>}/>
      </Routes>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
