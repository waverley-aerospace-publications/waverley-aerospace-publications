import React from "react"
import Link from "next/link"
import Head from 'next/head'
import Card from "../components/Card"
import image1 from "../public/img/Page127.jpg"
import image2 from "../public/img/ConcordeLanding.png"
import ContentBlock from "../components/ContentBlock"
import fs from 'fs'
import path from 'path'
import matter from "gray-matter"

export async function getStaticProps() {
    
    const files = fs.readdirSync(path.join('books'))

    const books = files.map((filename) => {

      const slug = filename.replace('.md', '')      
      const markdownWithMeta = fs.readFileSync(path.join('books', filename),'utf-8')  
      const {data:frontmatter, content} = matter(markdownWithMeta)    
      
      return {
        slug,
        frontmatter,
        content
      }      
    })

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
          <Head>
            <title>Waverley Aerospace Publications</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/favicon.svg" />
          </Head>
          <ContentBlock>
            <p className="mb-3">Welcome to Waverley Aerospace Publications. Below are the books currently available for purchase. <strong>Touchdown, Safely!</strong> is available immediately, whereas <strong>Blind Landing, A History</strong> is available for pre-order and will be posted week commencing 23rd May.</p>
            <p className="mb-3">Both books can be bought together for the <strong>reduced price of £40</strong>. P&P is £5 per book.</p>
            <p className="mb-8">This website is under development, and so we can not currently take payment here. However, if you would like to email the author with a purchase order, payment can be made directly using PayPal. Please <strong className="underline"><Link href="/contact">contact the author</Link></strong> for details.</p>
          </ContentBlock>
          <div className="grid md:grid-cols-2">
            {props.books.map((book, index) => (
                <Card 
                  key={book.frontmatter.title}
                  image={images[index]} 
                  title={book.frontmatter.title} 
                  description={book.content} 
                  price={book.frontmatter.price}              
                />
            ))}
          </div>
      </div>
  )
}
