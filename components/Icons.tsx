export function GitHub(props: { class?: string }) {
  return (
    <svg
      class={`h-6 w-6 ${props.class ?? ""}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export function MapPin(props: { class?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

export function Phone(props: { class?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0833 14.4167L16.9166 10.5834C16.9999 10.5 17.0588 10.4098 17.0933 10.3125C17.1283 10.2153 17.1458 10.1112 17.1458 10C17.1458 9.88893 17.1283 9.78476 17.0933 9.68754C17.0588 9.59032 16.9999 9.50004 16.9166 9.41671L13.0624 5.56254C12.9096 5.40976 12.7221 5.33337 12.4999 5.33337C12.2777 5.33337 12.0833 5.41671 11.9166 5.58337C11.7638 5.73615 11.6874 5.9306 11.6874 6.16671C11.6874 6.40282 11.7638 6.59726 11.9166 6.75004L14.3333 9.16671H3.33325C3.09714 9.16671 2.89936 9.24643 2.73992 9.40587C2.57992 9.56587 2.49992 9.76393 2.49992 10C2.49992 10.2362 2.57992 10.4339 2.73992 10.5934C2.89936 10.7534 3.09714 10.8334 3.33325 10.8334H14.3333L11.8958 13.2709C11.743 13.4237 11.6666 13.6112 11.6666 13.8334C11.6666 14.0556 11.7499 14.25 11.9166 14.4167C12.0694 14.5695 12.2638 14.6459 12.4999 14.6459C12.736 14.6459 12.9305 14.5695 13.0833 14.4167Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconMinus() {
  return (
    <svg
      class="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20 12H4"
      />
    </svg>
  );
}

export function IconPlus() {
  return (
    <svg
      class="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
}

// from https://heroicons.com/
export function Check() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-width={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

// from https://heroicons.com/
export function Info() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function Cart() {
  <svg
    class="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
      fill="black"
    />
    <path
      d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
      fill="black"
    />
    <path
      d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
      fill="black"
    />
  </svg>;
}

// from: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools
export function Instagram(props: { class?: string }) {
  return (
    <svg
      class={`h-5 w-5 ${props.class ?? ""}`}
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>instagram [#167]</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="currentColor"
        stroke-width={1}
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-340.000000, -7439.000000)"
          fill="#000000"
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
              id="instagram-[#167]"
            >
            </path>
          </g>
        </g>
      </g>
    </svg>
  );
}
export function Facebook(props: { class?: string }) {
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      class="w-5 h-5"
      viewBox="0 0 14.906 32"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path d="M14.874,11.167 L14.262,14.207 C14.062,15.208 13.100,15.992 12.072,15.992 L10.000,15.992 L10.000,30.000 C10.000,31.104 9.159,32.000 8.049,32.000 L5.030,32.000 C3.920,32.000 3.017,31.102 3.017,29.999 L3.017,15.992 L2.011,15.992 C0.901,15.992 -0.002,15.095 -0.002,13.991 L-0.002,10.990 C-0.002,9.887 0.901,8.989 2.011,8.989 L3.017,8.989 L3.017,6.003 C3.017,2.716 5.693,0.041 8.994,0.013 C9.015,0.012 9.033,0.001 9.055,0.001 L13.081,0.001 C13.636,0.001 14.000,0.448 14.000,1.000 L14.000,6.000 C14.000,6.553 13.636,7.004 13.081,7.004 L10.061,7.004 L10.060,8.989 L13.079,8.989 C13.645,8.989 14.167,9.228 14.509,9.644 C14.852,10.059 14.985,10.615 14.874,11.167 ZM9.092,10.990 C9.078,10.991 9.067,10.998 9.053,10.998 L9.053,10.998 C8.497,10.997 8.046,10.549 8.047,9.997 L8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 L8.049,6.003 C8.049,5.450 8.499,5.003 9.055,5.003 L12.074,5.003 L12.074,2.002 L9.094,2.002 C9.077,2.002 9.063,2.011 9.045,2.011 C6.831,2.011 5.030,3.802 5.030,6.003 L5.030,10.005 C5.030,10.558 4.579,11.006 4.023,11.006 C3.996,11.006 3.973,10.992 3.946,10.990 L2.011,10.990 L2.011,13.991 L4.023,13.991 C4.579,13.991 5.030,14.439 5.030,14.992 C5.030,15.044 5.008,15.088 5.000,15.138 L5.000,30.000 L8.049,29.999 L8.049,15.002 C8.049,14.998 8.047,14.995 8.047,14.992 C8.047,14.439 8.497,13.991 9.053,13.991 L12.072,13.991 C12.145,13.991 12.275,13.886 12.288,13.816 L12.857,10.990 L9.092,10.990 Z" />
        {" "}
      </g>
    </svg>
  );
}

export function Enveloppe() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}
export function Hamburger(props: { class?: string }) {
  return (
    <svg
      class={`w-6 h-6 + ${props?.class} ?? ""`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      >
      </path>
    </svg>
  );
}
export function CloseCross(props: { class?: string }) {
  return (
    <svg
      class={`w-6 h-6 + ${props?.class} ?? ""`}
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18 6l-12 12m0 -12l12 12"></path>
    </svg>
  );
}
export function Quotes(props: { class?: string }) {
  return (
    <svg
      class={`w-6 h-6 + ${props?.class}`}
      fill="currentColor"
      height="800px"
      width="800px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xmlSpace="preserve"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <g id="Quotemarks-left">
          <path d="M50.6292648,26.225668c-0.1288986-1.3934994-0.0303001-5.1816006,3.5985985-10.4492006 c0.2745018-0.3975,0.2247009-0.9335995-0.1161957-1.2743998c-1.4795036-1.4794998-2.395504-2.4131002-3.0379982-3.0663996 c-0.8448029-0.8614006-1.2305031-1.2539005-1.795002-1.7657003c-0.3769035-0.3388004-0.9472008-0.3446999-1.3281021-0.0125999 c-6.3251991,5.5038996-13.3505974,16.8768997-12.3339958,30.8105011 c0.5956955,8.1815987,6.5634956,14.1200981,14.1894951,14.1200981c7.8260994,0,14.1932983-6.3661995,14.1932983-14.1923981 C63.9993629,32.845768,58.0736694,26.6543674,50.6292648,26.225668z M49.8060646,52.5879669 c-6.5489006,0-11.6767998-5.1581993-12.1953011-12.2645988c0,0,0,0,0-0.0009995 c-1.1435966-15.6709003,8.1718025-25.8496017,10.9863014-28.5449009c0.2743988,0.2705002,0.5878983,0.5887995,1.0498009,1.0594997 c0.5565987,0.5664005,1.3183975,1.3417997,2.4706993,2.4981003c-4.4053001,6.7870998-3.5741997,11.6229992-3.2099991,12.3164005 c0.1728973,0.3290997,0.5273972,0.5508003,0.8984985,0.5508003c6.7236023,0,12.1932983,5.469698,12.1932983,12.1933002 C61.9993629,47.1182671,56.5296669,52.5879669,49.8060646,52.5879669z" />
          <path d="M15.1136675,26.225668c-0.1299-1.3896008-0.0341997-5.1748009,3.5985994-10.4492006 c0.2735004-0.3975,0.2245998-0.9335995-0.1161995-1.2743998c-1.4766006-1.4765997-2.3915997-2.4091997-3.0332003-3.0625 c-0.8476-0.8633003-1.2343998-1.2568998-1.7987995-1.7695999c-0.3769999-0.3388004-0.9473-0.3437004-1.3281002-0.0136003 c-6.3251996,5.5039005-13.3515997,16.875-12.3369999,30.8115005v0.0009995 c0.5977,8.1805992,6.5664001,14.1190987,14.1924,14.1190987c7.8261995,0,14.1934004-6.3661995,14.1934004-14.1923981 C28.4847679,32.8448677,22.5589676,26.6524677,15.1136675,26.225668z M14.2913675,52.5879669 c-6.5478001,0-11.6786995-5.1581993-12.1982002-12.2655983v0.0009995 c-1.1406-15.6748009,8.1747999-25.8516006,10.9892006-28.5459003c0.2754002,0.2705002,0.5899,0.5908003,1.0528002,1.0625 c0.5555992,0.5663996,1.3163996,1.3408003,2.4667988,2.4951c-4.4052992,6.7880993-3.5741997,11.6229992-3.2099991,12.3153992 c0.1729002,0.3291016,0.5283003,0.5518017,0.8993998,0.5518017c6.7237005,0,12.1934004,5.469698,12.1934004,12.1933002 C26.4847679,47.1182671,21.0150681,52.5879669,14.2913675,52.5879669z" />
        </g>
      </g>
    </svg>
  );
}
