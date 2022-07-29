import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch, NavLink, useParams } from 'react-router-dom';
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
function Product() {
  var params = useParams();
  console.log(params);
  var prod_id = params.product_id;
  var selected_product = {
    title : "",
    desc : "제품정보 없음"
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
      <p>{selected_product.desc}</p>
    </div>
  );
}
var contents=[
  {id : 1, title : "냉장고", desc : "양문형으로..."},
  {id : 2, title : "세탁기", desc : "드럼과 통돌이..."},
  {id : 3, title : "에어컨", desc : "스탠다드형, 벽걸이형..."}
];
function Products() {      
  var list = [];
  for(var i = 0; i < contents.length; i++) {
    list.push(
      <li key = {contents[i].id}><NavLink to={"/products/" + contents[i].id}>{contents[i].title}</NavLink></li>
    );
  }   {/* return안에는 1개(div)만 나와야함 */}
  return (
    <div>
      <ul>
        {list}
      </ul>
      <Route path="/products/:product_id">
        <Product></Product>
      </Route>
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
  return (
    <div>
      <h1>SS전자</h1>
      <ul>
        <li><NavLink exact to="/">SS전자소개</NavLink></li>   {/* a태그 대신 Link태그사용 리로드(새로고침)되지 않음, a태그는 이동하는것으로 생각하면 됨 */}
        <li><NavLink to="/products">제품소개</NavLink></li>  {/* Link -> NavLink로 변경 //  */}
        <li><NavLink to="/community">커뮤니티</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home></Home></Route> {/*exact path를 써주면 "/"가 일치하는걸 보여줌, </Switch>로 묶어주면 동일한 효과가 적용됨 */}
        <Route path="/products"><Products></Products></Route>
        <Route path="/community"><Community></Community></Route>
        <Route path="/">페이지를 찾을 수 없습니다.</Route>
      </Switch>
    </div>
  )
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
