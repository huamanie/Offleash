import NavBar from '../components/NavBar'
import MainPage from '../components/MainPage'
import SecondPage from '../components/SecondPage'
import Image from 'next/image'


export default function Main() {
  return (
    <div>
      <NavBar />
      <MainPage />
      <SecondPage />
    </div>
  );
}
