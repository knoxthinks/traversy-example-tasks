import PropTypes from 'prop-types'
import {Button} from './Button'

//using curly braces and spread syntax for props:title
const Header = ({ title }) => {

  const onClick = () => {
    console.log('click');
  }

  return (
    <header className = 'header'>
        {/* <h1>Tasks Task</h1> */}
        {/* <h2>{props.title} fool!</h2> */}
        {/* <h1>{title}</h1> */}
        {/* <h1 style ={headingStyle}>{title}</h1> */}
        {/* <button className='btn'>Add a Task</button> */}
        <Button color ='green' text = 'hello' onClick={onClick}/>
        <Button color ='green' text = 'hello1'/>
        <Button color ='green' text = 'hello3'/>
    </header>
  )
}

Header.defaultProps = {
  title:"Task Tracker default value"
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS can be passed into a component via {}
const headingStyle = {
  color: 'green'
}
export default Header