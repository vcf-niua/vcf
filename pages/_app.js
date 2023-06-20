import Layout from '@/components/Layout';
import { StyledEngineProvider } from '@mui/material/styles';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledEngineProvider>
  )
}
