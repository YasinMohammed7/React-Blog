const Footer = ({ length }) => {
    const today = new Date()
    return (
        <footer className="footer">
            <p>CopyRight &copy; {today.getFullYear()} and you have {length} {length === 1 ? "post" : "posts"}</p>
        </footer>
    )
}

export default Footer