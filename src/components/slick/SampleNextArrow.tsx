import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

function SampleNextArrow(props: any): JSX.Element {
  const { className, style, onClick, type } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      aria-hidden="true"
    >
      {type === 'arrow' ? (
        <FontAwesomeIcon icon={faArrowRight} />
      ) : (
        <FontAwesomeIcon icon={faChevronRight} />
      )}
    </div>
  );
}
export default SampleNextArrow;
