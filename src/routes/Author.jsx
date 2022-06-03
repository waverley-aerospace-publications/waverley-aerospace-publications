import React, { useState, useEffect } from 'react'
import ContentBlock from '../components/ContentBlock'
import authorImage from '../img/author_bio.png'
import { createClient } from 'contentful'
import variables from '../../variables'

function Author() {

  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState([])

  async function getText() {

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
    getText()
  },[])

  useEffect(() => {
    console.log(content)
  },[content])

  return (
    <ContentBlock>
      {loading ? <p>loading...</p> : 
        <div className='sm:grid sm:grid-cols-2'>
          <h2 className='font-bold text-lg text-center mb-3 col-span-2'>{title}</h2>
          <div className='mb-4 px-5 mt-2'>
            <img src={authorImage}/>
          </div>
          {content.filter((p,i) => i === 0).map((paragraph, index) => (
            <p key={`author paragraph ${index}`} className='mb-3'>{paragraph}</p>
          ))}
          {content.filter((p,i) => i > 0).map((paragraph, index) => (
            <p key={`author paragraph ${index}`} className='mb-3 col-span-2'>{paragraph}</p>
          ))}
        </div>
      }
    </ContentBlock>
  )
}

export default Author