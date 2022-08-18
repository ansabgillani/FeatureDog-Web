import Badge from 'react-bootstrap/Badge';

const Tag = props => {
  return (
    <Badge bg="secondary" className='mx-2 my-1'> {props.tag}</Badge>
  )
}

export default Tag;