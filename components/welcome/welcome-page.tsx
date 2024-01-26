import styles from './style.module.css'
import Project from './project';
import type { GetStaticProps } from 'next'
import Link from 'next/link';
import Image from 'next/image';
import dress from "@/public/dress.svg"
import { useTransform, useScroll, motion } from 'framer-motion';


export default function WelcomePage() {
    const projects = [
        {
            title1: "Bubba",
            title2: "Women",
            src: "bobba.jpeg",
            link: "/sunglasses"
        },
        {
            title1: "Combats",
            title2: "Wo/Men",
            src: "cargo.jpeg",
            link: "/belts"

        },
        {
            title1: "Kaftan",
            title2: "Men",
            src: "kaftan.jpeg",
            link: "/bags"

        },
        {
            title1: "Two Piece",
            title2: "Women",
            src: "twopeice.jpg",
            link: "/scarves"

        },
        {
            title1: "Jumpsuits",
            title2: "Wo/Men",
            src: "jumpsuit.png",
            link: "/gloves"

        }
    ]

    return (
        <main className={styles.main}>
            <div className={styles.gallery}>
                <div className='flex justify-between'>

                    <Link href={"/shop"} className='flex items-center  text-xl uppercase font-medium'>
                        <motion.div
                            className='flex items-center text-xl uppercase font-medium'
                            whileHover={{ scale: 1.1 }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            Visit
                            <Image src={dress} width={40} height={40} alt='dress' />
                            Shop
                        </motion.div>
                    </Link>
                </div>
                {
                    projects.map(project => {
                        return <Project project={project} />
                    })}
            </div>
        </main>
    )
}





