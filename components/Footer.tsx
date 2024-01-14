
const Footer = () => {
    const year: number = new Date().getFullYear()

    return (
        <>
            <p className="absolute bottom-0">Shopping Cart: &copy; {year} </p>
        </>
    )
}

export default Footer