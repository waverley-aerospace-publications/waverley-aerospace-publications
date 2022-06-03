import { Navbar } from './components/Navbar';
import { Brand } from './components/Brand';
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  
  async function getContent() {

    const client = createClient({
      space: variables.contentful.space,
      accessToken: variables.contentful.accessToken
    })

    const res = await client.getEntries({ content_type: 'textSection' })
    setTitle(res.items.filter(item => item.fields.title === 'R B Lumsden')[0].fields.title)
    const paragraphs = res.items.filter(item => item.fields.title === 'R B Lumsden')[0].fields.content.content.map((p,i) => p.content[0].value)
    setContent(paragraphs)
    setLoading(false)

  }

  useEffect(() => {
    getContent()
  },[])

  return (
    <>    
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow'>
        <Navbar  />
        <div className='max-w-3xl mx-auto font-body'>
          <Brand />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
    </>

  )
}

export default App
