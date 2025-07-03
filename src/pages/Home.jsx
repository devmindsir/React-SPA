import Hero from "../components/home/Hero";
import Category from "../components/home/Category";
import Course from "../components/home/Course";
import Article from "../components/home/Article";

function Home() {
  return (
    <>
      <div className="text-gray-800">
        <Hero />
        <Category />
        <Course />
        <Article />
      </div>
      ;
    </>
  );
}

export default Home;
