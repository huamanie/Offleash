import Image from "next/image";
import edDog from "../public/ed_dog.png"

export default function Home() {
  return (
    <Image
      src={edDog}
      alt="A drawing of a dog by Edwin on his laptop track pad (which means it probably didn't turn out like how you'd expect a dog to look)"
      placeholder="blur"
    />
  );
}
