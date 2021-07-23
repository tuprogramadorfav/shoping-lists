import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const DeleteBtn = ({ onClick }) => {
    return (
        <FontAwesomeIcon icon={faTimes} onClick={onClick} />
    )
}

export default DeleteBtn