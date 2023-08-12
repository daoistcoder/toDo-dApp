import Head from 'next/head'
import '../styles/global.css'

import { WalletConnectProvider } from '../components/WalletConnectionProvider'
import '@solana/wallet-adapter-react-ui/styles.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Daoist Todo App</title>
            </Head>
            <main>
                {/* Wrap provider around App */}
                <WalletConnectProvider>
                    <Component {...pageProps} />
                </WalletConnectProvider>
            </main>
        </>
    )
}

export default MyApp
