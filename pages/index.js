import React from "react"
import Link from "next/link"
import Card from "../components/Card"
import image1 from "../public/img/Page127.jpg"
import image2 from "../public/img/ConcordeLanding.png"
import ContentBlock from "../components/ContentBlock"
import { createClient } from "contentful"

export async function getStaticProps() {
    
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
    
    const res = (await client.getEntries({ content_type: "textSection" })).items
    const books = res.filter(item => item.fields.type === "book")

    return {
        props: {
            books
        }
    }
}

export default function home(props) {
  
  const images = [image1, image2]

  return (
      <div>
          <ContentBlock>
            <p className="mb-3">Welcome to Waverley Aerospace Publications. Below are the books currently available for purchase. <strong>Touchdown, Safely!</strong> is available immediately, whereas <strong>Blind Landing, A History</strong> is available for pre-order and will be posted week commencing 23rd May.</p>
            <p className="mb-3">Both books can be bought together for the <strong>reduced price of £40</strong>. P&P is £5 per book.</p>
            <p className="mb-8">This website is under development, and so we can not currently take payment here. However, if you would like to email the author with a purchase order, payment can be made directly using PayPal. Please <strong className="underline"><Link href="/contact">contact the author</Link></strong> for details.</p>
          </ContentBlock>
          <div className="grid md:grid-cols-2">
            {props.books.map((book, index) => (
                <Card 
                  key={book.fields.title}
                  image={images[index]} 
                  title={book.fields.title} 
                  description={book.fields.content.content[0].content[0].value} 
                  price={book.fields.subtitle}              
                />
            ))}
          </div>
      </div>
  )
}
