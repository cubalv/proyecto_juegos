function HangManFigure({errorsCount}) {
  return (
    <div className=" border-b-2 border-slate-200 w-1/4 h-1/2 mb-6 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        zoomAndPan="magnify"
        viewBox="0 0 375 374.999991"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
        className=" w-full h-full m-0"
      >
        <defs>
          <clipPath id="18e30498f8">
            <path
              d="M 216.441406 79.589844 L 260.539062 79.589844 L 260.539062 123.6875 L 216.441406 123.6875 Z M 216.441406 79.589844 "
              clipRule="nonzero"
            />
          </clipPath>
          <clipPath id="0229748e53">
            <path
              d="M 238.488281 79.589844 C 226.3125 79.589844 216.441406 89.460938 216.441406 101.640625 C 216.441406 113.816406 226.3125 123.6875 238.488281 123.6875 C 250.667969 123.6875 260.539062 113.816406 260.539062 101.640625 C 260.539062 89.460938 250.667969 79.589844 238.488281 79.589844 Z M 238.488281 79.589844 "
              clipRule="nonzero"
            />
          </clipPath>
        </defs>
        <path
        //base de la horca
          strokeLinecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 93.789102, 315.771337)"
          fill="none"
          strokeLinejoin="miter"
          d="M -0.0000520549 8.497593 L 102.895788 8.497593 "
          stroke="#fed7aa"
          strokeWidth="17"
          strokeOpacity="1"
          strokeMiterlimit="4"
        />
        <path
        //poste de la horca
          strokeLinecap="butt"
          transform="matrix(0, -0.75, 0.75, 0, 127.030748, 322.142556)"
          fill="none"
          strokeLinejoin="miter"
          d="M 0.00257526 8.50067 L 367.554683 8.50067 "
          stroke="#fed7aa"
          strokeWidth="17"
          strokeOpacity="1"
          strokeMiterlimit="4"
        />
        <path        
        //techo de la horca
          strokeLinecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 132.375934, 46.606077)"
          fill="none"
          strokeLinejoin="miter"
          d="M -0.00124561 8.49919 L 198.446684 8.49919 "
          stroke="#fed7aa"
          strokeWidth="17"
          strokeOpacity="1"
          strokeMiterlimit="4"
        />
        <path
        //escuadra de la horca
          strokeLinecap="butt"
          transform="matrix(0.556098, -0.503245, 0.503245, 0.556098, 129.131362, 112.167818)"
          fill="none"
          strokeLinejoin="miter"
          d="M 0.00130445 8.50097 L 127.003663 8.499547 "
          stroke="#fed7aa"
          strokeWidth="17"
          strokeOpacity="1"
          strokeMiterlimit="4"
        />
        <path
        //lazo de la horca
          strokeLinecap="butt"
          transform="matrix(0, 0.75, -0.75, 0, 239.985706, 52.985116)"
          fill="none"
          strokeLinejoin="miter"
          d="M -0.000987628 2.001775 L 35.478181 2.001775 "
          stroke="#fed7aa"
          strokeWidth="4"
          strokeOpacity="1"
          strokeMiterlimit="4"
        />
        <g clipPath="url(#18e30498f8)">
          <g clipPath="url(#0229748e53)">
            <path
            //cabeza
              strokeLinecap="butt"
              transform="matrix(0.75, 0, 0, 0.75, 216.440131, 79.590727)"
              fill="none"
              strokeLinejoin="miter"
              d="M 29.397535 -0.00117736 C 13.163159 -0.00117736 0.00170022 13.160282 0.00170022 29.399866 C 0.00170022 45.634242 13.163159 58.795701 29.397535 58.795701 C 45.63712 58.795701 58.798579 45.634242 58.798579 29.399866 C 58.798579 13.160282 45.63712 -0.00117736 29.397535 -0.00117736 Z M 29.397535 -0.00117736 "
              stroke={errorsCount<6?("#fed7aa"):("#292524")}
              strokeWidth="10"
              strokeOpacity="1"
              strokeMiterlimit="4"
            />
          </g>
        </g>
        <path
        //pie derecho
          strokeLinecap="butt"
          transform="matrix(0.437727, 0.609012, -0.609012, 0.437727, 240.011502, 199.735124)"
          fill="none"
          strokeLinejoin="miter"
          d="M -0.00196407 2.499724 L 72.410937 2.502631 "
          stroke={errorsCount<1?("#fed7aa"):("#292524")}
          strokeWidth="5"
          strokeOpacity="1"
          strokeMiterlimit="4"
        />
        <path
        //pie izquierdo
          strokeLinecap="butt"
          transform="matrix(-0.461733, 0.591018, -0.591018, -0.461733, 239.963442, 201.984157)"
          fill="none"
          strokeLinejoin="miter"
          d="M -0.000537363 2.502993 L 74.614884 2.497607 "
          stroke={errorsCount<2?("#fed7aa"):("#292524")}
          strokeWidth="5"
          strokeOpacity="1"
          strokeMiterlimit="4"
        />
        <path
        //mano derecha
          strokeLinecap="butt"
          transform="matrix(0.452175, 0.598362, -0.598362, 0.452175, 239.983803, 135.518648)"
          fill="none"
          strokeLinejoin="miter"
          d="M -0.000382161 2.49907 L 73.701134 2.50208 "
          stroke={errorsCount<3?("#fed7aa"):("#292524")}
          strokeWidth="5"
          strokeOpacity="1"
          strokeMiterlimit="4"
        />
        <path
        //mano izquierda
          strokeLinecap="butt"
          transform="matrix(-0.447807, 0.601639, -0.601639, -0.447807, 239.992839, 137.765381)"
          fill="none"
          strokeLinejoin="miter"
          d="M -0.00105949 2.501555 L 73.300481 2.500404 "
          stroke={errorsCount<4?("#fed7aa"):("#292524")}
          strokeWidth="5"
          strokeOpacity="1"
          strokeMiterlimit="4"
        />
        <path
        //pecho
          strokeLinecap="butt"
          transform="matrix(0, 0.75, -0.75, 0, 240.36217, 123.692541)"
          fill="none"
          strokeLinejoin="miter"
          d="M -0.00151257 2.498519 L 102.852661 2.498519 "
          stroke={errorsCount<5?("#fed7aa"):("#292524")}
          strokeWidth="5"
          strokeOpacity="1"
          strokeMiterlimit="4"
        />
      </svg>
    </div>
  );
}
export default HangManFigure;
