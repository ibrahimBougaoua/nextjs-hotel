import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/jquery-ui.css'
import '../styles/animate.css'
import '../styles/bootstrap.min.css'
import '../styles/fonts.css'
import '../styles/font-awesome.css'
import '../styles/owl.carousel.min.css'
import '../styles/owl.theme.default.min.css'
import '../styles/style.css'
import '../styles/responsive.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
