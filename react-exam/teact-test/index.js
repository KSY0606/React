import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

var days=[
  {id: 1, title: '월'},
  {id: 2, title: '화'},
  {id: 3, title: '수'},
  {id: 4, title: '목'},
  {id: 5, title: '금'},
  {id: 6, title: '토'},
  {id: 7, title: '일'},
];

var mon=[
  {id: 1, title: '참교육'},
  {id: 2, title: '퀘스트지상주의'},
  {id: 3, title: '윈드브레이커'}
];
var tue=[
  {id: 1, title: '김부장'},
  {id: 2, title: '멸망 이후의 세계'},
  {id: 3, title: '내가 키운 S급들'}
];
var wed=[
  {id: 1, title: '화산귀환'},
  {id: 2, title: '전지적 독자 시점'},
  {id: 3, title: '나쁜사람'}
];
var thu=[
  {id: 1, title: '나노마신'},
  {id: 2, title: '현실 퀘스트'},
  {id: 3, title: '연애혁명'}
];
var fri=[
  {id: 1, title: '외모지상주의'},
  {id: 2, title: '나혼자 만렙 뉴비'},
  {id: 3, title: '갓 오브 하이스쿨'}
];
var sat=[
  {id: 1, title: '99강화나무몽둥이'},
  {id: 2, title: '프리드로우'},
  {id: 3, title: '취사병 전설이되다'}
];
var sun=[
  {id: 1, title: '싸움독학'},
  {id: 2, title: '입학용병'},
  {id: 3, title: '투신전생기'}
];

function App() {

  var list = [];
  for (var i = 0; i < days.length; i++) {
    list.push(
      <NavLink key={days[i].id} to={"/webtoon/" + days[i].id} style={{ width: '14.28%' }}>
        <li style={{ textAlign: 'center', padding: '12px', cursor: 'pointer' }}>
          {days[i].title}
        </li>
      </NavLink>
    )
  }

  return(
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{border: '1px solid darkmagenta', width: '80%', height: '500px'}}>
        <div style={{ width: '100%', border: '1px solid blue', textAlign: 'center' }}>
          <h1>웹툰</h1>
        </div>
        <div>
          <ul style={{ width: '100%', border: '1px solid green', display: 'inline-flex', margin: 0, padding: 0, listStyle: 'none' }}>
            {list}
          </ul>
        </div>
        <Routes>
          <Route path="/webtoon/:day_id" element={<DayWebtoon></DayWebtoon>}></Route>
          <Route path="/webtoon/:day_id/:detail" element={<DayWebtoonDetail></DayWebtoonDetail>}></Route>
        </Routes>
      </div>
    </div>
  );
}

function DayWebtoon() {
  var params = useParams();
  var day_id = params.day_id;

  var dayWebtoonList = [];

  if (day_id === '1') {
    dayWebtoonList = mon;
  } else if (day_id === '2') {
    dayWebtoonList = tue;
  } else if (day_id === '3') {
    dayWebtoonList = wed;
  } else if (day_id === '4') {
    dayWebtoonList = thu;
  } else if (day_id === '5') {
    dayWebtoonList = fri;
  } else if (day_id === '6') {
    dayWebtoonList = sat;
  } else {
    dayWebtoonList = sun;
  }

  var list = [];

  for (var i = 0; i < dayWebtoonList.length; i++) {
    list.push(
      <li key={dayWebtoonList[i].id} style={{ padding: '12px', cursor: 'pointer' }}>
        <NavLink to={"/webtoon/" + dayWebtoonList[i].id + "/" + dayWebtoonList[i].title}>
         {dayWebtoonList[i].title} 
        </NavLink>
      </li>
    )
  }

  return (
    <div>
      <ul style={{ border: '1px solid gold' }}>
        {list}
      </ul>
    </div>
  )
}

function DayWebtoonDetail() {
  var params = useParams();

  var title = params.detail;

  var list = [];
  
  for (var i = 1; i <= 10; i++) {
    list.push(title + ' ' + i + '화');
  }

  return (
    <ul>
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
