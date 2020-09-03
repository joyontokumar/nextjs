import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar'
import Services from '../components/services/index'
import AboutUs from '../components/aboutus'
import Team from '../components/team'
import Blog from '../components/latestblog'

export default function Home() {
  return (
    <>
      <Navbar />
      <Services />
      <AboutUs />
      <Team />
      <Blog />
    </>
  )
}
