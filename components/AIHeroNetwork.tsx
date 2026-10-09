export default function AIHeroNetwork() {
  return (
    <div className="aip-network" aria-hidden="true">
      <style>{`
        .aip-network {
          width: 100%;
          max-width: none;
          aspect-ratio: 1200 / 440;
          background: transparent;
          overflow: hidden;
          position: relative;
          pointer-events: none;
        }

        .aip-network svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .aip-network .wire {
          fill: none;
          stroke: #000;
          stroke-width: 1.2;
          stroke-opacity: .21;
        }

        .aip-network .node {
          fill: #fff;
          stroke: #111;
          stroke-width: 1.1;
        }

        .aip-network .inner {
          fill: #111;
        }

        .aip-network .outer {
          fill: none;
          stroke: #000;
          stroke-width: 1;
          stroke-opacity: .27;
        }

        .aip-network .center {
          fill: #000;
          animation: aip-pulse 7s ease-in-out infinite;
        }

        .aip-network .ring {
          fill: none;
          stroke: #000;
          stroke-width: 1;
          stroke-opacity: .23;
          animation: aip-ring 8s ease-in-out infinite;
        }

        .aip-network .ring.secondary {
          animation-delay: -4s;
        }

        .aip-network .signal {
          fill: #000;
        }

        .aip-network .ambient {
          fill: #777;
          animation: aip-ambient 9s ease-in-out infinite;
        }

        @keyframes aip-pulse {
          0%, 100% { opacity: .55; }
          50% { opacity: 1; }
        }

        @keyframes aip-ring {
          0%, 100% { opacity: .28; }
          50% { opacity: .85; }
        }

        @keyframes aip-ambient {
          0%, 100% { opacity: .16; }
          50% { opacity: .65; }
        }

        @media (prefers-reduced-motion: reduce) {
          .aip-network .center,
          .aip-network .ring,
          .aip-network .ambient {
            animation: none;
          }

          .aip-network .signal {
            display: none;
          }
        }
      `}</style>

      <svg
        viewBox="0 0 1200 440"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <g className="wire">
          <path d="M118 76 C299 76 442 177 600 220" />
          <path d="M185 145 C342 145 446 198 600 220" />
          <path d="M104 220 C300 220 450 220 600 220" />
          <path d="M185 295 C342 295 446 242 600 220" />
          <path d="M118 364 C299 364 442 263 600 220" />

          <path d="M600 220 C777 167 873 75 1050 75" />
          <path d="M600 220 C790 192 885 145 1010 145" />
          <path d="M600 220 L1090 220" />
          <path d="M600 220 C790 248 885 295 1010 295" />
          <path d="M600 220 C777 273 873 365 1050 365" />
        </g>

        <g>
          {[
            [118, 76],
            [185, 145],
            [104, 220],
            [185, 295],
            [118, 364],
          ].map(([x, y], index) => (
            <g key={`input-${index}`}>
              <rect
                className="node"
                x={x - 7}
                y={y - 7}
                width="14"
                height="14"
                rx="1"
              />
              <circle className="inner" cx={x} cy={y} r="1.8" />
            </g>
          ))}
        </g>

        <g>
          <circle className="ring" cx="600" cy="220" r="61" />
          <circle
            className="ring secondary"
            cx="600"
            cy="220"
            r="46"
            strokeDasharray="3 6"
          />
          <circle className="outer" cx="600" cy="220" r="24" />

          <path
            d="M600 170V185 M600 255V270 M550 220H565 M635 220H650"
            fill="none"
            stroke="#111"
            strokeWidth=".85"
            strokeOpacity=".35"
          />

          <rect
            x="590"
            y="210"
            width="20"
            height="20"
            rx="1"
            fill="white"
            stroke="#111"
            strokeWidth="1.15"
          />

          <circle className="center" cx="600" cy="220" r="4" />
        </g>

        <g>
          {[
            [1050, 75],
            [1010, 145],
            [1090, 220],
            [1010, 295],
            [1050, 365],
          ].map(([x, y], index) => (
            <g key={`output-${index}`}>
              <circle className="outer" cx={x} cy={y} r="10" />
              <circle className="inner" cx={x} cy={y} r="3.4" opacity=".55" />
            </g>
          ))}
        </g>

        <g>
          <circle className="signal" r="3.6">
            <animateMotion
              dur="13s"
              begin="-5s"
              repeatCount="indefinite"
              path="M118 76 C299 76 442 177 600 220 C777 167 873 75 1050 75"
            />
          </circle>

          <circle className="signal" r="2.8">
            <animateMotion
              dur="17s"
              begin="-12s"
              repeatCount="indefinite"
              path="M185 145 C342 145 446 198 600 220 C790 248 885 295 1010 295"
            />
          </circle>

          <circle className="signal" r="3.4">
            <animateMotion
              dur="14s"
              begin="-8s"
              repeatCount="indefinite"
              path="M104 220 C300 220 450 220 600 220 L1090 220"
            />
          </circle>

          <circle className="signal" r="2.6">
            <animateMotion
              dur="16s"
              begin="-3s"
              repeatCount="indefinite"
              path="M185 295 C342 295 446 242 600 220 C790 192 885 145 1010 145"
            />
          </circle>

          <circle className="signal" r="3.1">
            <animateMotion
              dur="15s"
              begin="-11s"
              repeatCount="indefinite"
              path="M118 364 C299 364 442 263 600 220 C777 273 873 365 1050 365"
            />
          </circle>
        </g>

        <g>
          <circle className="ambient" cx="302" cy="121" r="1.2" />
          <circle
            className="ambient"
            cx="330"
            cy="348"
            r="1.2"
            style={{ animationDelay: "-4s" }}
          />
          <circle
            className="ambient"
            cx="758"
            cy="112"
            r="1.1"
            style={{ animationDelay: "-2s" }}
          />
          <circle
            className="ambient"
            cx="863"
            cy="322"
            r="1.2"
            style={{ animationDelay: "-6s" }}
          />
        </g>
      </svg>
    </div>
  );
}
