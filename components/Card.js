function Card({children, className}) {
    return (
        <div className={"shadow-md p-8 bg-white mb-4 rounded-lg "+className}>
            {children}
        </div>
    )
}

export default Card
