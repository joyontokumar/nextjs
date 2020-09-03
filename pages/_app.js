import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import '../pages/posts/posts.scss'
import '../components/services/services.scss'
import '../components/aboutus/about.scss'
import '../components/team/team.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
