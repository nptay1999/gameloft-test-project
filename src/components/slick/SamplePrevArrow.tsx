import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function SamplePrevArrow(props: any): JSX.Element {
  const { className, style, onClick, type } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      aria-hidden="true"
    >
      {type === 'arrow' ? (
        <FontAwesomeIcon icon={faArrowLeft} />
      ) : (
        <FontAwesomeIcon icon={faChevronLeft} />
      )}
    </div>
  );
}

export default SamplePrevArrow;
