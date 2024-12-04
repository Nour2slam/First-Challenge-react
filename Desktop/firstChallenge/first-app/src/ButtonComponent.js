export default function ReturnButton({title ,children , className}) {
    if (title == null || title === "") {
        return null
      }
    return (
        <button className={className}>
        {title}
        {children}
        </button>
      
    )
}