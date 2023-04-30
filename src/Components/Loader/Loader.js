const Loader = () => {
    const logo = require('../../assets/images/logo-red.webp');
    return (
        <div className="loader">
            <img className='fa-beat-fade' src={logo} alt="Sard Logo" />
        </div>
    )
}

export default Loader;