import PageLayout from '@/layouts/page-layout'
import About from '@/components/pages/About'
import Hero from '@/components/pages/Hero'
import Project from '@/components/pages/Project'
import Footer from '@/components/footer/Footer'

export const Home = (): JSX.Element => (
  <>
    <PageLayout isHaveFooter={false}>
      <Hero />
      <About />
    </PageLayout>
    <div className="bg-yellow-400 w-full h-24 flex justify-center items-center relative overflow-hidden">
      <img src="/assets/github-repo-1.svg" alt="circle 1" className="w-3/6 transform translate-y-20" />
      <img src="/assets/github-repo-2.svg" alt="circle 1" className="w-2/6 transform -translate-y-20" />
      <a
        href="https://github.com/tchala120"
        className="absolute z-10 text-xl font-bold text-center text-black cursor-pointer"
      >
        <h1>
          Checkout my <span className="text-gray-100">Github</span> for more information.
        </h1>
      </a>
    </div>
    <PageLayout isHaveMenu={false} isFullHeight={false} isHaveFooter={false}>
      <Project />
    </PageLayout>
    <div className="border-t-2 p-4">
      <Footer />
    </div>
  </>
)

export default Home
