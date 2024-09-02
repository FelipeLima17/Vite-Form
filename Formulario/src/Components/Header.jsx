const Header = () => {  
    const headerStyle = {
        backgroundColor: "#228B22",
        padding: '20px',
        textAlign: 'center',
        borderBottom: '3px solid #000'
      }

      const titleStyle = {
        margin: 0,
        frontSize: '24px',
        color: '#ffffff'
      }
      
    return(
        <header style={headerStyle} >
            <h1 style={titleStyle}>
                Vets Shop
            </h1>

        </header>
    )

}

export default Header;