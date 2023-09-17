import { store } from '@/redux/store'
import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import MainApp from '../components/MainApp'
import '../../public/css/vendor.css'
import '../../public/css/plugins.css'
import '../../public/css/icons.css'
import '../../public/css/style.css'
// import '../../public/js/jquery-3.7.0.min.js'
// import '../../public/js/vendors.js'
// import '../../public/js/plugins.js'
// import '../../public/js/main.js'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <React.Fragment>
            <link rel="apple-touch-icon" sizes="57x57" href="/img/favicons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/img/favicons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/img/favicons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/img/favicons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/img/favicons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/img/favicons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/img/favicons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/img/favicons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/img/favicons/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/img/favicons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/img/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/img/favicons/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/img/favicons/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff"></meta>
            <title>Look Up Datas | SaaS API Finance Currency Address Country</title>
            <script src="/js/jquery-3.7.0.min.js"></script>
            <script src="/js/vendors.js"></script>
            <script src="/js/plugins.js"></script>
            <script src="/js/main.js"></script>

            <Provider store={store}>
                <Toaster
                    position="bottom-right"
                    reverseOrder={false}
                />

                <MainApp MainProp={() => <Component {...pageProps} />} />

            </Provider>
        </React.Fragment>
    )
}

export default MyApp;