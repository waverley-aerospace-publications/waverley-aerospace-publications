import ContentBlock from "../../components/ContentBlock"
import Head from "next/head"

function Contact() {
  return (
    <div>
      <Head>
        <title>Waverley Aerospace Publications | contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ContentBlock>
          <p className='mb-3'>Feel free to contact the author directly for any purchases or enquiries:</p>
          <p className='underline font-bold'><a href='mailto:rbrucelumsden@yahoo.co.uk'>rbrucelumsden@yahoo.co.uk</a></p>
      </ContentBlock>
    </div>
  )
}

export default Contact