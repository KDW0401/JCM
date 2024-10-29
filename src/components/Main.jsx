import '../css/Main.css';
import PageMain from './mainPage/PageMain';
import Chat from './mainPage/Chat';
import MainInfo from './mainPage/MainInfo';
import MainSimulation from './mainPage/MainSimulation';
import MainReferences from './mainPage/MainReferences';
import MainDescribe from './mainPage/MainDescribe';
import MainMethod from './mainPage/MainMethod';
import MainEmail from './mainPage/MainEmail';

const MainPage = () => {
  return (
    <>
      <PageMain />  {/* 여기서 PageMain이 불러와집니다 */}
      <Chat />
      <MainInfo />
      <MainSimulation />
      <MainReferences />
      <MainDescribe />
      <MainMethod />
      <MainEmail />
      <hr />
    </>
  );
};

export default MainPage;
