import styles from './style.module.css'
import Project from './project';
import Link from 'next/link';
import Image from 'next/image';
import dress from "@/public/dress.svg"
import { motion } from 'framer-motion';


export default function WelcomePage() {
    const projects = [
        {
            title1: "Bubba",
            title2: "Women",
            src: "bobba.jpeg",
        },
        {
            title1: "Combats",
            title2: "Wo/Men",
            src: "cargo.jpeg",
        },
        {
            title1: "Kaftan",
            title2: "Men",
            src: "kaftan.jpeg",
        },
        {
            title1: "Two Piece",
            title2: "Women",
            src: "twopeice.jpg",
        },
        {
            title1: "Jumpsuits",
            title2: "Women",
            src: "jumpsuit.png",
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
                    projects.map((project, index) => {
                        return <Project project={project} key={index} />
                    })}
            </div>
        </main>
    )
}





