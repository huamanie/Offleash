

export default function SecondPage() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className= 'text-6xl font-bold text-center '>
                Upcoming Shows/Music
            </h1>
            <br />
            <div className='flex justify-center md:gap-10'>
                <button className='bg-main-color rounded-full w-16 h-16'>
                    LinkTree
                </button>
                <button className='bg-main-color rounded-full w-16 h-16'>
                    Spotify
                </button>
                <button className='bg-main-color rounded-full w-16 h-16'>
                    Insta
                </button>
            </div>
            <br />
            <h3 className='md:text-xl text-center'>
                No Upcoming Shows :( <br />
                <br />
                BUTT, we are gathering up all our ingredients to cook up some new music for yall <br />
                <br />
                Visit our Socials for quicker updates!
            </h3>
            <br />
            <h3 className='md:text-xl text-center'>
                Need to contact us? Send us a DM on Instagram or email us at offleashbandmedia (at) gmail (dot) com!
            </h3>
        </div>
    )

}