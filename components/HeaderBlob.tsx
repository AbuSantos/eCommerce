import { Roboto, Poppins, Montserrat, Quicksand } from 'next/font/google'
import { Dispatch, SetStateAction } from 'react'

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
type Props = {
    openProducts: boolean,
    setOpenProducts: Dispatch<SetStateAction<boolean>>
}
const HeaderBlob = ({ openProducts, setOpenProducts }: Props) => {
    return (
        <div className='text-center text-yellow-700 p-8'>
            <h2 className={`${roboto.className} text-3xl`}>{openProducts ? "Current Collection" : "New Arrivals"} </h2>
            <p className={`${quicksand.className} text-[0.7rem] md:text-[0.85rem]`}>
                Delve into the distinctive style of RuthRich Designs that define timeless elegance. Confidently embrace your impeccable sense of style
            </p>
        </div>
    )
}

export default HeaderBlob