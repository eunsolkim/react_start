import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chp_03/Library'
import Clock from './chp_04/Clock'
import CommentList from './chp_05/CommentList';
import NotificationList from './chp_06/NotificationList'
import Accommodate from './chp_07/Accommodate'
import ConfirmButton from './chp_08/ConfirmButton';
import LandingPage from './chp_09/LandingPage';
import AttendanceBook from './chp_10/AttendanceBook';
import SignUp from './chp_11/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // npx create-react-app으로 프로젝트 생성 시, 자동 설정된 Strict Mode 때문에 
  // react rendering이 두 번 발생 => 주석 처리
  //<React.StrictMode>
    <SignUp />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
