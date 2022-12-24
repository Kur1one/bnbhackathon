import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {useLivepeerProvider} from "@livepeer/react";
import { useCreateStream } from '@livepeer/react';
import {useState} from "react";
import App from "next/app";
import { Player } from '@livepeer/react';
import {MoralisProvider} from "react-moralis"
import {NotificationProvider} from "web3uikit";




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const provider = useLivepeerProvider();
    const [streamName, setStreamName] = useState();
    const {
        mutate: createStream,
        data: stream,
    } = useCreateStream({
        name:streamName
    })

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1>Livepeer Hackathon - {provider.getConfig().name}</h1>
        <input
            onChange={(e) => setStreamName(e.target.value)}
            placeholder={"Stream Name"}
            className="p-2 border border-gray-200 rounded-md mt-4 w-1/3"
        />
        <button onClick={() => createStream?.()} className="mt-4 p-2 bg-blue-500  text-white rounded-md">
            Create Stream
        </button>

        {stream && (
            <>
                <p className="mt-4">Stream Key: {stream.streamKey}</p>
                <p className="mt-4">Stream Name: {stream.name}</p>
                <p className="mt-4">Playback Id: {stream.playbackId}</p>

                <div className="mt-4 w-1/2">
                    <Player
                        title={stream.name}
                        playbackId={stream.playbackId}
                        showPipButton
                    />
                </div>
            </>
        )}
    </div>
  )
}
