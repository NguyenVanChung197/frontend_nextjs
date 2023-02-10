import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store'
import Layouts from './components/Layouts'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
}

export default wrapper.withRedux(MyApp);
