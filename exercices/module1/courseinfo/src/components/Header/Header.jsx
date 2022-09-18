import logo from './logo.png'

const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
        <img src={logo} alt="Logo" />
      </>
    )
  }

  export default Header