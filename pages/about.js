import Link from "next/link"
import Head from "next/head"

const About = () => {
  return (
    <div>
        <Head>
            <title>About</title>
        </Head>
      <h1>welcome to about me page</h1>
      <Link href='/'>back home</Link>
    </div>
  )
}

export default About
