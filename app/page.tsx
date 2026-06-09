import NavBar from '../components/NavBar'


export default function Main() {
  return (
    <div>
      <NavBar />
      <MainPage />
      <SecondPage />
    </div>
    <Image
      src={edDog}
      alt="A drawing of a dog by Edwin on his laptop track pad (which means it probably didn't turn out like how you'd expect a dog to look)"
      placeholder="blur"
    />
  );
}
