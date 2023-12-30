
const Footer = () => {
    const year: number = new Date().getFullYear()

    return (
        <>
            <p>Shopping Cart: &copy; {year} </p>
        </>
    )
}

export default Footer