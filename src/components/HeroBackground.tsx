export default function HeroBackground() {
  return (
    <svg
      aria-hidden="true"
      role="presentation"
      focusable="false"
      className="bg-paper-svg"
      viewBox="0 0 1500 917"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="paperTexture" x="-2%" y="-2%" width="104%" height="104%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035"
            numOctaves="5"
            result="noise"
          />

          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="12"
            xChannelSelector="R"
            yChannelSelector="G"
            result="distorted"
          />

          <feDiffuseLighting
            in="noise"
            lightingColor="#fff5d7"
            surfaceScale="2"
          >
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>

          <feComposite operator="in" in2="distorted" result="textured" />
          <feBlend in="distorted" in2="textured" mode="multiply" />

          <feGaussianBlur stdDeviation="0.6" />
        </filter>

        <radialGradient id="burnGradient" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stopColor="#f6e6c3" />
          <stop offset="35%" stopColor="#e4c892" />
          <stop offset="60%" stopColor="#d7a354" />
          <stop offset="85%" stopColor="#b8792f" />
          <stop offset="100%" stopColor="#8f5a1f" />
        </radialGradient>
      </defs>

      <path
        d="M25.5736 11.3221C25.5736 11.3221 496.685 24.7936 971.479 13.1094C981.643 12.8592 990.556 21.3602 1000.68 21.0241C1008.79 20.7548 1018.11 11.6641 1026.19 11.3376C1136.9 6.8623 1244.13 20.9357 1340.63 3.31867C1405.91 -8.59742 1499.8 15.4071 1499.8 15.4071C1499.8 15.4071 1487.14 171.278 1483.01 301.625C1480.84 370.06 1482 449.734 1484.72 528.166C1485.04 537.312 1468.76 540.89 1468.76 555.116C1469.15 564.96 1486.54 575.181 1486.96 584.914C1489.34 639.114 1492.28 701.641 1495.17 747.28C1495.42 751.208 1464.88 743.45 1465.13 747.28C1465.38 751.167 1496.41 756.2 1496.66 759.98C1499.46 802.58 1471.06 907.988 1471.06 907.988C1471.06 907.988 1314.19 917.74 1142.02 915.907C1097.23 915.431 1011.08 912.005 1011.08 912.005C1011.08 912.005 995.15 889.246 975.911 889.246C959.798 889.246 945.609 908.244 945.609 908.244C945.609 908.244 486.536 909.444 215.383 909.444C114.303 909.444 10.547 866.796 10.547 866.796C10.547 866.796 -7.53012 715.126 3.64813 678.925C4.94929 663.471 24.2009 653.287 25.5736 634.869C26.9429 616.498 9.56558 602.038 10.547 587.089C14.708 523.708 19.9167 417.471 21.5151 350.875C21.6076 347.021 23.2035 348.562 26.2369 348.961C27.8763 349.177 29.187 348.961 29.187 348.961C29.187 348.961 28.3294 348.667 27.0507 348.351C24.8706 347.812 21.5136 347.666 21.5151 343.745C21.5364 289.596 18.9555 237.198 11.8147 189.76C3.64813 135.507 25.5736 11.3221 25.5736 11.3221Z"
        fill="url(#burnGradient)"
        filter="url(#paperTexture)"
      />
    </svg>
  );
}
