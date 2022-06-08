import ContentBlock from '../../components/ContentBlock'
// import authorImage from '../../public/img/author_bio.png'
import { createClient } from 'contentful'
import Head from 'next/head'

export async function getStaticProps() {
    
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
    
    const res = await client.getEntries({ content_type: 'textSection' })
    const contentObj = res.items.filter(item => item.fields.title === 'R B Lumsden')[0].fields 

    return {
        props: {
            contentObj
        }
    }
}

function author(props) {

  return (
    <div>
      <Head>
        <title>Waverley Aerospace Publications | author</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ContentBlock>
          <div>
            <h2 className='font-bold text-lg text-center mb-3'>{props.contentObj.title}</h2>
            <div className='border-2 max-w-max mx-auto'>
              {/* <Image src={authorImage}/> */}
            </div>
            {props.contentObj.content.content.map((paragraph, index) => (
            <p key={` paragraph ${index}`} className='mb-3'>{paragraph.content[0].value}</p>
          ))}
          </div>
        {/* } */}
      </ContentBlock>
    </div>
  )
}

export default author