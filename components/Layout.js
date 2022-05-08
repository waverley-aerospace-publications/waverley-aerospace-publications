import Navbar from '../components/Navbar';
import Brand  from '../components/Brand';
import Footer from '../components/Footer';

export default function Layout(props) {  
  return (
    <>  
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow'>
        <Navbar  />
        <div className='max-w-3xl mx-auto font-body'>
          <Brand />
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
    </>

  )
}