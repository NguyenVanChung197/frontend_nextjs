import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store'

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log(Component)
  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp);
