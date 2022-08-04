import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, NavLink, Route, Routes, useParams } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import ame from './images/ame.jpg';
import bever from './images/bever.png';
import dish from './images/food.png';
import produc from './images/product.png';
import maincoffee from './images/커피.png';
import mainjucie from './images/주스.png';
import maintea from './images/티.png';
import mainice from './images/아이스블랜드.png';
import mainbread from './images/빵.png';
import maincake from './images/케이크.png';
import mainsand from './images/샌드위치.png';
import mainicecream from './images/아이스크림.png';
import maintum from './images/텀블러.png';
import mainmug from './images/머그컵.png';
import mainacc from './images/악세서리.png';
import maingift from './images/기프트카드.png';


var lists = [
  {id : 1, title : "Beverage"},
  {id : 2, title : "Food"},
  {id : 3, title : "Product"}
];


var beverage=[
  {id: 1, title: 'Coffee'},
  {id: 2, title: 'Juice & Ade'},
  {id: 3, title: 'Tea'},
  {id: 4, title: 'Ice blended'}
];
var food=[
  {id: 1, title: 'Bread'},
  {id: 2, title: 'Cake'},
  {id: 3, title: 'Sandwich'},
  {id: 4, title: 'IceCream'}
];
var product=[
  {id: 1, title: 'Tumbler'},
  {id: 2, title: 'Mug Cup'},
  {id: 3, title: 'Accessory'},
  {id: 4, title: 'Coffee Supplies'}
];


var coffee=[
  {id: 1, title: '아메리카노'},
  {id: 2, title: '카페모카'},
  {id: 3, title: '카라멜 마끼아또'},
  {id: 4, title: '콜드브루'}
];
var juiceade=[
  {id: 1, title: '아이스티'},
  {id: 2, title: '레몬에이드'},
  {id: 3, title: '자몽주스'},
  {id: 4, title: '토마토주스'}
];
var tea=[
  {id: 1, title: '유자차'},
  {id: 2, title: '자몽 얼그레이티'},
  {id: 3, title: '캐모마일'},
  {id: 4, title: '페퍼민트'}
];
var iceblended=[
  {id: 1, title: '초콜릿 아이스 블렌디드'},
  {id: 2, title: '그린티 아이스 블렌디드'},
  {id: 3, title: '스트로베리 요거트 블렌디드'},
  {id: 4, title: '망고빙수'}
];
var bread=[
  {id: 1, title: '플레인 베이글'},
  {id: 2, title: '허니레몬 마들렌'},
  {id: 3, title: '반숙 크로크무슈'},
  {id: 4, title: '츄러스 휘낭시에'}
];
var cake=[
  {id: 1, title: '레드벨벳 케이크'},
  {id: 2, title: '티라미수'},
  {id: 3, title: '그릭요거 치즈케이크'},
  {id: 4, title: '당근 크림치즈 케이크'}
];
var sandwich=[
  {id: 1, title: '바질치즈 치아바타'},
  {id: 2, title: '허니까망베르 치아바타'},
  {id: 3, title: '더블햄모짜렐라 샌드위치'},
  {id: 4, title: '미트볼칠리치즈 샌드위치'}
];
var IceCream=[
  {id: 1, title: '자바 칩 유기농 아이스크림 바닐라'},
  {id: 2, title: '초콜릿 아포가토'},
  {id: 3, title: '유기농 아이스크림 초콜릿'},
  {id: 4, title: '바닐라 아포가토'}
];
var tumbler=[
  {id: 1, title: '22 SS 돌고래 탭 텀블러'},
  {id: 2, title: '22 SS 베이지 테리 텀블러'},
  {id: 3, title: '22 SS 그레이 워커 텀블러'},
  {id: 4, title: '22 SS 정글 화이트 콜드컵'}
];
var mugCup=[
  {id: 1, title: '22 바다거북 머그'},
  {id: 2, title: '북청사자놀음 데미머그'},
  {id: 3, title: '경주 투어 머그'},
  {id: 4, title: '22 LF 코리아 머그'}
];
var accessory=[
  {id: 1, title: '베어리스타 네임택'},
  {id: 2, title: '리저브 베이지 에코백'},
  {id: 3, title: '투고그린 쿨링백'},
  {id: 4, title: '리저브 오렌지 카드 홀더'}
];
var coffeesupplies=[
  {id: 1, title: '크림 컴프레소'},
  {id: 2, title: '화이트 사이렌 커피 클립 스쿱'},
  {id: 3, title: '화이트 사이렌 그라인더'},
  {id: 4, title: '스타벅스 종이 필터'}
];


var mainpic = [
  {id : 1, title : bever},
  {id : 2, title : dish},
  {id : 3, title : produc}
]
var mainpics1 = [
  {id : 1, title : maincoffee},
  {id : 2, title : mainjucie},
  {id : 3, title : maintea},
  {id : 4, title : mainice}
]
var mainpics2 = [
  {id : 1, title : mainbread},
  {id : 2, title : maincake},
  {id : 3, title : mainsand},
  {id : 4, title : mainicecream}
]
var mainpics3 = [
  {id : 1, title : maintum},
  {id : 2, title : mainmug},
  {id : 3, title : mainacc},
  {id : 4, title : maingift}
]


function App() {
  var list = [];
  for(var i = 0; i < lists.length; i++) {
    list.push(
      <NavLink key={lists[i].id} to={"/cafe/" + lists[i].id} className='mainMenu'>
        <li>
          <img src={mainpic[i].title} alt="" className='img'/>
          {lists[i].title}
        </li>
      </NavLink>
    )
  }
  return(
    <div className='frame'>
      <div className='cafename'>
        <h1>Ezen Cafe</h1>
      </div>
      <div>
        {list}
      </div>
      <Routes>
        <Route path="/cafe/:list_id" element={<Menu></Menu>} ></Route>
        <Route path="/cafe/:list_id/:detail" element={<MenuDetail></MenuDetail>}></Route>
      </Routes>
    </div>
  );
}

function Menu() {
  var params = useParams();
  var list_id = params.list_id;
  var menuList = [];
  var menuListPic = [];

  if(list_id === "1") {
    menuList = beverage;
    menuListPic = mainpics1;
  }else if(list_id === "2") {
    menuList = food;
    menuListPic = mainpics2;
  }else{
    menuList = product;
    menuListPic = mainpics3;
  }

  var list = [];

  for (var i = 0; i < menuList.length; i++) {
    list.push(
      <li key={menuList[i].id} className="sideMenus">
        <NavLink to={"/cafe/" + menuList[i].id + "/" + menuList[i].title} className="sideMenu">
          <img src={menuListPic[i].title} alt="" className='sideimg'/> 
          {menuList[i].title}
        </NavLink>
      </li>
    )
  }
  return (
    <div>
      <ul className='sideMenuList'>
        {list}
      </ul>
    </div>
  )
}


function MenuDetail() {
  var params = useParams();
  var title = params.detail;
  var lists = [];


  if(title === "Coffee") {
    lists = coffee;
    
  }else if( title === "Juice & Ade") {
    lists = juiceade;
  }else if( title === "Tea") {
    lists = tea;
  }else if( title === "Ice blended") {
    lists = iceblended;
  }else if( title === "Bread") {
    lists = bread;
  }else if( title === "Cake") {
    lists = cake;
  }else if( title === "Sandwich") {
    lists = sandwich;
  }else if( title === "IceCream") {
    lists = IceCream;
  }else if( title === "Tumbler") {
    lists = tumbler;
  }else if( title === "Mug Cup") {
    lists = mugCup;
  }else if( title === "Accessory") {
    lists = accessory;
  }else if( title === "Coffee Supplies") {
    lists = coffeesupplies;
  }

  var list = [];

  for (var i = 0; i < lists.length; i++) {
    list.push(
      <li key={lists[i].id} className="sideMenusDetail">
        <NavLink to={"/cafe/" + lists[i].id + "/" + lists[i].title} className="sideMenuDetail">
        {/*<img src={ame} alt="" className='imgdetail'/>*/}
        <img src={require('./images/' + lists[i].title + '.png')} alt="" className="imgdetail"/>
        <p className='text'>
          {lists[i].title} 
        </p>
        </NavLink>
      </li>
    )
  }
  return (
    <ul className='sideMenuListDetail'>
      {list}
    </ul>
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
