import Head from 'next/head'
import '../styles/global.css'

import { Toaster } from 'react-hot-toast'

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
                    <Toaster />
                </WalletConnectProvider>
            </main>
        </>
    )
}

export default MyApp
