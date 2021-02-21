import PageLayout from '@/layouts/page-layout'
import About from '@/components/page/About'
import Hero from '@/components/page/Hero'

export const Home = (): JSX.Element => (
  <>
    <PageLayout isHaveFooter={false}>
      <Hero />
      <About />
    </PageLayout>
    <div className="bg-yellow-400 w-full h-24 flex justify-center items-center relative overflow-hidden">
      <img
        src="/assets/github-repo-1.svg"
        alt="circle 1"
        className="w-3/6 transform translate-y-20"
      />
      <img
        src="/assets/github-repo-2.svg"
        alt="circle 1"
        className="w-2/6 transform -translate-y-20"
      />
      <a
        href="https://github.com/tchala120"
        className="absolute z-10 text-xl font-bold text-center text-black cursor-pointer"
      >
        <h1>For more information. Check my Github</h1>
      </a>
    </div>
    <PageLayout isHaveMenu={false}>
      <Hero />
      <About />
    </PageLayout>
  </>
)

export default Home
