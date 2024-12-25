import Banner from '../components/home/Banner';
import ProjectHighlights from '../components/home/ProjectHighlights';
import CaseStudies from '../components/home/CaseStudies';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <ProjectHighlights />
      <CaseStudies />
    </div>
  );
};

export default Home;
