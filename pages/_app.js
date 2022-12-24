import '../styles/globals.css'
import {createReactClient, studioProvider, LivepeerConfig} from "@livepeer/react";


const client = createReactClient({
  provider: studioProvider({
    apiKey: "c74c4fc2-65f3-4530-8169-120f22a5adad",
  }),
})

function MyApp({Component,pageProps}) {
  return(
      <LivepeerConfig client={client}>
        <Component {...pageProps}/>
      </LivepeerConfig>
  )
}

export default MyApp