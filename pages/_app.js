import Layouts from '../Components/Layouts'
import '../styles/globals.css'
import Link from 'next/link'


function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    getLayout( <Component {...pageProps} />)
  //  <Layouts>
    // <Component {...pageProps} />
  // </Layouts>

  )
  
}

export default MyApp
