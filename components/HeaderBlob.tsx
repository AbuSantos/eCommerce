import { Roboto, Poppins, Montserrat, Quicksand } from 'next/font/google'

const roboto = Roboto({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})
const quicksand = Quicksand({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})

const HeaderBlob = () => {
    return (
        <div className='text-center text-yellow-700 p-8'>
            <h2 className={`${roboto.className} text-2xl`}>Current Collections</h2>
            <p className={`${quicksand.className} text-sm`}>
                Delve into the distinctive style of RuthRich Designs that define timeless elegance. Confidently embrace your impeccable sense of style
            </p>
        </div>
    )
}

export default HeaderBlob