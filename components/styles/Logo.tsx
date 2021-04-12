import React from "react";

export function Logo() {
  return (
    <svg
      className="h-3.5 lg:h-4.5"
      viewBox="0 0 140 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.464 23.192C2.48267 23.2347 1.736 23.0853 1.224 22.744C0.733333 22.4027 0.488 21.88 0.488 21.176C0.488 20.536 0.648 20.0667 0.968 19.768C1.288 19.448 1.78933 19.2667 2.472 19.224L3.496 19.16C5.032 19.096 5.8 18.1893 5.8 16.44V2.744C5.8 1.99733 6.03467 1.4 6.504 0.952C6.97333 0.503999 7.58133 0.279999 8.328 0.279999C9.07467 0.279999 9.672 0.503999 10.12 0.952C10.5893 1.4 10.824 1.99733 10.824 2.744V16.376C10.824 20.6 8.712 22.8507 4.488 23.128L3.464 23.192ZM18.7585 23.192C17.9905 23.192 17.3825 22.968 16.9345 22.52C16.4865 22.072 16.2625 21.464 16.2625 20.696V2.744C16.2625 1.99733 16.4865 1.4 16.9345 0.952C17.3825 0.503999 17.9905 0.279999 18.7585 0.279999C19.5265 0.279999 20.1345 0.503999 20.5825 0.952C21.0305 1.4 21.2545 1.99733 21.2545 2.744V20.696C21.2545 21.464 21.0305 22.072 20.5825 22.52C20.1345 22.968 19.5265 23.192 18.7585 23.192ZM47.7153 19.96C47.8859 20.344 47.9713 20.6853 47.9713 20.984C47.9713 21.5813 47.7259 22.0933 47.2353 22.52C46.7659 22.9253 46.2219 23.128 45.6033 23.128C45.1979 23.128 44.8139 23.0213 44.4513 22.808C44.0886 22.5733 43.8113 22.232 43.6193 21.784L41.9233 18.008H31.0753L29.3793 21.784C29.1873 22.232 28.9099 22.5733 28.5473 22.808C28.2059 23.0213 27.8219 23.128 27.3953 23.128C26.7766 23.128 26.2219 22.9253 25.7313 22.52C25.2406 22.0933 24.9953 21.5813 24.9953 20.984C24.9953 20.6853 25.0806 20.344 25.2513 19.96L33.8913 1.816C34.1259 1.304 34.4779 0.919999 34.9473 0.664C35.4166 0.386666 35.9179 0.247999 36.4513 0.247999C37.0059 0.247999 37.5179 0.386666 37.9873 0.664C38.4566 0.941332 38.8193 1.32533 39.0753 1.816L47.7153 19.96ZM32.7713 14.232H40.2273L36.5153 5.912L32.7713 14.232ZM68.8985 0.279999C69.6025 0.279999 70.1678 0.514666 70.5945 0.983999C71.0425 1.432 71.2665 2.01867 71.2665 2.744V20.696C71.2665 21.4427 71.0425 22.0507 70.5945 22.52C70.1678 22.968 69.6025 23.192 68.8985 23.192C68.1305 23.192 67.5118 22.9147 67.0425 22.36L56.3225 8.632V20.696C56.3225 21.4427 56.1092 22.0507 55.6825 22.52C55.2772 22.968 54.7225 23.192 54.0185 23.192C53.3145 23.192 52.7492 22.968 52.3225 22.52C51.8958 22.0507 51.6825 21.4427 51.6825 20.696V2.744C51.6825 2.01867 51.8958 1.432 52.3225 0.983999C52.7705 0.514666 53.3465 0.279999 54.0505 0.279999C54.8398 0.279999 55.4478 0.557332 55.8745 1.112L66.5945 14.744V2.744C66.5945 2.01867 66.8078 1.432 67.2345 0.983999C67.6612 0.514666 68.2158 0.279999 68.8985 0.279999Z"
        fill="#333333"
      />
      <path
        d="M84.833 23.288C83.1477 23.288 81.5797 23.096 80.129 22.712C78.6783 22.3067 77.4943 21.7413 76.577 21.016C76.257 20.7813 76.0223 20.536 75.873 20.28C75.745 20.0027 75.681 19.6613 75.681 19.256C75.681 18.7227 75.841 18.2533 76.161 17.848C76.5023 17.4427 76.8863 17.24 77.313 17.24C77.5477 17.24 77.7717 17.2827 77.985 17.368C78.2197 17.432 78.497 17.56 78.817 17.752C79.7343 18.328 80.6623 18.7547 81.601 19.032C82.5397 19.288 83.5743 19.416 84.705 19.416C86.113 19.416 87.1903 19.1813 87.937 18.712C88.6837 18.2427 89.057 17.5707 89.057 16.696C89.057 16.0347 88.705 15.5013 88.001 15.096C87.3183 14.6907 86.0917 14.3067 84.321 13.944C82.337 13.5387 80.7477 13.048 79.553 12.472C78.3797 11.896 77.5157 11.1813 76.961 10.328C76.4277 9.47467 76.161 8.44 76.161 7.224C76.161 5.88 76.545 4.67467 77.313 3.608C78.1023 2.52 79.1797 1.67733 80.545 1.08C81.9317 0.461332 83.489 0.151999 85.217 0.151999C88.2463 0.151999 90.7423 0.909332 92.705 2.424C93.025 2.68 93.249 2.94667 93.377 3.224C93.5263 3.48 93.601 3.8 93.601 4.184C93.601 4.71733 93.4303 5.18667 93.089 5.592C92.769 5.99733 92.3957 6.2 91.969 6.2C91.7343 6.2 91.5103 6.168 91.297 6.104C91.105 6.04 90.8277 5.90133 90.465 5.688C89.5903 5.13333 88.7797 4.71733 88.033 4.44C87.3077 4.16267 86.3797 4.024 85.249 4.024C83.9477 4.024 82.9237 4.28 82.177 4.792C81.4303 5.28267 81.057 5.96533 81.057 6.84C81.057 7.352 81.1957 7.77867 81.473 8.12C81.7717 8.44 82.2517 8.728 82.913 8.984C83.5957 9.24 84.5557 9.50667 85.793 9.784C88.6943 10.424 90.7743 11.2453 92.033 12.248C93.313 13.2507 93.953 14.6267 93.953 16.376C93.953 17.7413 93.569 18.9467 92.801 19.992C92.0543 21.0373 90.9877 21.848 89.601 22.424C88.2357 23 86.6463 23.288 84.833 23.288ZM100.845 23C100.098 23 99.5221 22.7973 99.1168 22.392C98.7114 21.9867 98.5088 21.4107 98.5088 20.664V2.776C98.5088 2.02933 98.7114 1.45333 99.1168 1.048C99.5221 0.642665 100.098 0.439999 100.845 0.439999H112.173C113.751 0.439999 114.541 1.08 114.541 2.36C114.541 3.66133 113.751 4.312 112.173 4.312H103.373V9.592H111.533C113.111 9.592 113.901 10.2427 113.901 11.544C113.901 12.824 113.111 13.464 111.533 13.464H103.373V19.128H112.173C113.751 19.128 114.541 19.7787 114.541 21.08C114.541 22.36 113.751 23 112.173 23H100.845ZM135.654 0.279999C136.358 0.279999 136.923 0.514666 137.35 0.983999C137.798 1.432 138.022 2.01867 138.022 2.744V20.696C138.022 21.4427 137.798 22.0507 137.35 22.52C136.923 22.968 136.358 23.192 135.654 23.192C134.886 23.192 134.267 22.9147 133.798 22.36L123.078 8.632V20.696C123.078 21.4427 122.864 22.0507 122.438 22.52C122.032 22.968 121.478 23.192 120.774 23.192C120.07 23.192 119.504 22.968 119.078 22.52C118.651 22.0507 118.438 21.4427 118.438 20.696V2.744C118.438 2.01867 118.651 1.432 119.078 0.983999C119.526 0.514666 120.102 0.279999 120.806 0.279999C121.595 0.279999 122.203 0.557332 122.63 1.112L133.35 14.744V2.744C133.35 2.01867 133.563 1.432 133.99 0.983999C134.416 0.514666 134.971 0.279999 135.654 0.279999Z"
        fill="#DB7125"
      />
    </svg>
  );
}
