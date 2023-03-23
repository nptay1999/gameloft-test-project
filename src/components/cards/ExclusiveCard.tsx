import React from 'react';

function ExclusiveCard({ img }: { img: string }): JSX.Element {
  return (
    <div className="exclusive-card">
      <img src={img} alt={img} className="exclusive-card__img" />
      <a href={img} download type="button" className="exclusive-card__btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.462"
          height="16.837"
          viewBox="0 0 18.462 16.837"
        >
          <g
            id="Group_1443"
            data-name="Group 1443"
            transform="translate(-11.229 -9.481)"
          >
            <path
              id="Path_328"
              data-name="Path 328"
              d="M0,10.062V0"
              transform="translate(20.428 10.481)"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <path
              id="Path_329"
              data-name="Path 329"
              d="M-1315.015-710.748l3.133,3.289,2.976-3.289"
              transform="translate(1332.278 728.464)"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <path
              id="Path_330"
              data-name="Path 330"
              d="M16.462-2.8V0H0V-2.8"
              transform="translate(12.229 25.318)"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </a>
    </div>
  );
}

export default ExclusiveCard;
