// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBar from './components/common/MenuBar';
import Main from './components/Main';
import MyPage from './components/user/MyPage';
import SignIn from './components/user/SignIn';
import EditProfile from './components/user/EditProfile';
import ChangePwd from './components/user/ChangePwd';
import CompIntroduce from './components/CompIntroduce';
import FreeBoard from './components/post/FreeBoard';
import ProjectBoard from './components/post/ProjectBoard';
import Questions from './components/post/Questions';
import Notice from './components/post/Notice';
import FrequentlyQuestions from './components/post/FrequentlyQuestions';
import AdminDashboard from './components/admin/AdminDashboard';
import Subscribe from './components/admin/Subscribe';
import Customer from './components/admin/Customer';
import Posts from './components/admin/Posts';
import AdminChat from './components/admin/AdminChat';
import FooterPage from './components/common/FooterPage';
import QnA from './components/admin/QnA';
import Guide from './components/guide/Guide';
import ProjectHistory from './components/user/ProjectHistory';
import PaymentHistory from './components/payment/PaymentHistory';
import PaymentMethod from './components/payment/PaymentMethod';
import EnrollPost from './components/post/EnrollPost';

import DetailPost from './components/post/DetailPost';

import TechIntro from './components/techIntro/TechIntro';


function App() {
  return (
    <BrowserRouter basename='/JCM'>
      <MenuBar />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/changePwd" element={<ChangePwd />} />
          <Route path="/projectHistory" element={<ProjectHistory />} />
        
          <Route path='/detailpost' element={<DetailPost/>}/>
          <Route path="/introduce" element={<CompIntroduce />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/freeBoard" element={<FreeBoard />} />
          <Route path="/projectBoard" element={<ProjectBoard />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/frequentlyQuestions" element={<FrequentlyQuestions />} />
          <Route path="/enrollPost" element={<EnrollPost />} />
          
          <Route path="/admin/adminDashboard" element={<AdminDashboard />} />
          <Route path="/admin/subscribe" element={<Subscribe />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/posts" element={<Posts />} />
          <Route path="/admin/adminChat" element={<AdminChat />} />
          <Route path="/admin/qna" element={<QnA />} />

          <Route path="/paymentHistory" element={<PaymentHistory />} />
          <Route path="/paymentMethod" element={<PaymentMethod />} />

          <Route path="/techIntro" element={<TechIntro />} />
        </Routes>
      </main>
      <FooterPage />
    </BrowserRouter>
  );
}

export default App;
