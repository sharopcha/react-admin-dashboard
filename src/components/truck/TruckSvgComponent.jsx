import * as React from 'react';
import { useEffect, useState } from 'react';
import { mapNumber } from 'utility/utilityFunctions';

const TruckSvgComponent = (props) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(mapNumber(props?.capacity, 0, 100, 0, 86.565));
  });

  return (
    <svg
      viewBox="9.504 0 142.226 69.607"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <linearGradient
          id="g"
          x1={-369.519}
          y1={526.162}
          x2={-310.429}
          y2={563.107}
          gradientUnits="userSpaceOnUse"
          xlinkHref="#a"
        />
        <linearGradient id="a">
          <stop
            style={{
              stopColor: '#e6e6e6',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#999',
              stopOpacity: 1,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient
          id="i"
          x1={-75.519}
          y1={274.907}
          x2={-56.543}
          y2={263.676}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(3.935 -102.663)"
          xlinkHref="#b"
        />
        <linearGradient id="b">
          <stop
            style={{
              stopColor: '#ccc',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#333',
              stopOpacity: 1,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient
          id="j"
          x1={-64.686}
          y1={271.925}
          x2={-67.596}
          y2={267.22}
          gradientUnits="userSpaceOnUse"
          xlinkHref="#c"
        />
        <linearGradient id="c">
          <stop
            style={{
              stopColor: '#f9f9f9',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#f9f9f9',
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient
          id="k"
          x1={-696.801}
          y1={407.169}
          x2={-651.584}
          y2={407.169}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 -.26458 .26458 0 5.998 -41.242)"
          xlinkHref="#d"
        />
        <linearGradient id="d">
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient
          id="l"
          x1={-716.956}
          y1={407.168}
          x2={-631.428}
          y2={407.168}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 -.26458 .26458 0 5.998 -41.242)"
          xlinkHref="#e"
        />
        <linearGradient id="e">
          <stop
            style={{
              stopColor: '#ccc',
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: '#fff',
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <filter
          style={{
            colorInterpolationFilters: 'sRGB',
          }}
          id="f"
          x={-0.016}
          width={1.032}
          y={-0.046}
          height={1.093}
        >
          <feGaussianBlur stdDeviation={0.098} />
        </filter>
        <filter
          style={{
            colorInterpolationFilters: 'sRGB',
          }}
          id="h"
          x={-0.074}
          width={1.148}
          y={-0.024}
          height={1.048}
        >
          <feGaussianBlur stdDeviation={0.144} />
        </filter>
      </defs>
      <g transform="matrix(1 0 0 .99744 8.361 -92.534)">
        <path
          d="m16.57 135.545-11.492 9.087-1.603 1.336c-.037 1.658-1.23 3.604.534 4.812l2.94 1.068v-1.336l4.276-1.87 44.1 2.672.272 1.063 1.871.006.262-1.069 4.01-.267.267 1.87h2.138l.534-2.137 2.139-1.337 2.672-1.336 2.94-.267 1.87 1.603 1.07-.802 3.474-.534 17.908 2.406 20.045-1.604.534-3.208 2.139.268v2.138l1.87 1.07v7.75l2.94 2.138 1.07-12.027 3.206-.267.535-2.139 1.871-1.069v-3.207zm68.689 10.423 1.336 1.872-10.69-1.604z"
          style={{
            fill: '#000',
            stroke: '#000',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <g
          style={{
            fill: '#000',
          }}
        >
          <g
            style={{
              fill: '#000',
            }}
            transform="scale(.07924) rotate(30 -1943.539 4223.921)"
          >
            <circle
              r={124.016}
              cy={534.583}
              cx={-336.614}
              style={{
                opacity: 1,
                fill: '#000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 8,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
            />
            <circle
              style={{
                opacity: 1,
                fill: '#000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 8,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
              cx={-336.614}
              cy={534.583}
              r={76.032}
            />
            <circle
              style={{
                opacity: 1,
                fill: '#000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 8,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
              cx={-336.614}
              cy={538.583}
              r={124.016}
            />
            <circle
              r={76.032}
              cy={538.583}
              cx={-336.614}
              style={{
                opacity: 1,
                fill: '#000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 8,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
            />
            <circle
              r={68.283}
              cy={538.583}
              cx={-336.614}
              style={{
                opacity: 1,
                fill: '#000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 8,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
            />
            <circle
              style={{
                opacity: 1,
                fill: '#000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 8,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
              cx={-336.614}
              cy={538.583}
              r={44.291}
            />
            <path
              style={{
                opacity: 1,
                fill: '#000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 8,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
              d="m-337.239 492.861-8.604-4.967v-9.936l8.604-4.968 8.605 4.968v9.936z"
            />
            <path
              d="m-337.239 492.861-8.604-4.967v-9.936l8.604-4.968 8.605 4.968v9.936z"
              style={{
                opacity: 1,
                fill: '#000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 8,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
              transform="rotate(-45 -335.942 538.69)"
            />
            <path
              transform="rotate(-90 -335.942 538.69)"
              style={{
                opacity: 1,
                fill: '#000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 8,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
              d="m-337.239 492.861-8.604-4.967v-9.936l8.604-4.968 8.605 4.968v9.936z"
            />
            <path
              d="m-337.239 492.861-8.604-4.967v-9.936l8.604-4.968 8.605 4.968v9.936z"
              style={{
                opacity: 1,
                fill: '#000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 8,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
              transform="rotate(-135 -335.942 538.69)"
            />
            <path
              transform="scale(-1)"
              style={{
                opacity: 1,
                fill: '#000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 8,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
              d="m334.645-584.52-8.604-4.968v-9.935l8.604-4.968 8.604 4.968v9.935z"
            />
            <path
              d="m334.645-584.52-8.604-4.968v-9.935l8.604-4.968 8.604 4.968v9.935z"
              style={{
                opacity: 1,
                fill: '#000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 8,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
              transform="rotate(135 -223.133 -139.152)"
            />
            <path
              transform="rotate(90 -538.69 -335.942)"
              style={{
                opacity: 1,
                fill: '#000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 8,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
              d="m334.645-584.52-8.604-4.968v-9.935l8.604-4.968 8.604 4.968v9.935z"
            />
            <path
              d="m334.645-584.52-8.604-4.968v-9.935l8.604-4.968 8.604 4.968v9.935z"
              style={{
                opacity: 1,
                fill: '#000',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 8,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
              transform="rotate(45 -1300.515 -811.036)"
            />
          </g>
          <g
            style={{
              fill: '#000',
            }}
            transform="scale(.07924) rotate(30 -1374.933 3096.12)"
          >
            <circle
              style={{
                opacity: 1,
                fill: '#000',
                fillOpacity: 1,
                stroke: '#000',
                strokeWidth: 1.39078975,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
                strokeDashoffset: 0,
                strokeOpacity: 1,
              }}
              cx={303.465}
              cy={669.789}
              r={91.085}
            />
            <text
              style={{
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '22.5px',
                lineHeight: '0%',
                fontFamily: 'sans-serif',
                textAlign: 'center',
                letterSpacing: 0,
                wordSpacing: 0,
                textAnchor: 'middle',
                fill: '#000',
                fillOpacity: 1,
                stroke: '#1a1a1a',
                strokeWidth: 1,
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeOpacity: 1,
                whiteSpace: 'pre',
              }}
            >
              <textPath startOffset="50%" xlinkHref="#path3587">
                <tspan
                  style={{
                    fill: '#000',
                    stroke: '#1a1a1a',
                  }}
                >
                  {'Goodgrief'}
                </tspan>
              </textPath>
            </text>
          </g>
        </g>
        <path
          d="m5.345 144.122 3.742.534 1.604-2.94s1.92-2.142 3.207-2.672c1.902-.784 4.147-1.016 6.147-.535 1.635.393 4.277 2.673 4.277 2.673l3.474 5.345 1.07 5.346.266 2.138 2.673.534-.243-10.255 14.725.1 1.287-1.07 2.405-.535v-26.46s-2.044-1.328-3.207-1.603c-3.121-.737-6.438-.392-9.622 0-1.458.18-2.98.376-4.276 1.07-1.168.624-2.94 2.672-2.94 2.672l-5.078 10.156-1.336.802-3.208 1.07s-4.672.917-6.949 1.603c-1.457.44-2.004.773-3.458 1.225-.35.11-1.041.45-1.352.646-.59.37-1.1.949-1.337 1.603-.424 1.173-.534 3.742-.534 3.742z"
          style={{
            fill: '#f2f2f2',
            stroke: '#000',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="m29.934 120.602-3.207 6.415.534 12.294 4.26 4.95 14.717-.14s.729-18.653.534-27.795c-.037-1.742-8.095-1.056-12.027-.267-1.72.345-4.81 2.138-4.81 2.138z"
          style={{
            fill: 'none',
            stroke: '#000',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="M45.147 127.017c-.365-7.341.009-.039-.246-6.95-.023-.641-.189-1.579-.596-2.076-.4-.487-1.22-.64-1.81-.863-2.671-1.01-8.552.534-8.552.534l-3.474 2.673-.802 5.613v4.543l1.87-.534s4.888-.293 7.39-.597c.889-.108 4.093-.32 4.884-.74.614-.326 1.37-.908 1.336-1.603z"
          style={{
            fill: '#b3b3b3',
            stroke: '#000',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="m12.294 135.035 6.682-.268s.657-.337.535-.801c-.146-.552-.788-.914-1.337-1.07-1.382-.39-3.034-.186-4.276.535-.77.447-1.604 1.604-1.604 1.604z"
          style={{
            fill: '#4d4d4d',
            stroke: '#000',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="M7.484 138.776c.775.184 1.902.308 2.138 1.07.27.876-1.337 2.405-1.337 2.405l-2.405-.535s-.27-2.37.456-3.034c.33-.3.714-.008 1.148.094z"
          style={{
            fill: '#999',
            stroke: '#000',
            strokeWidth: 0.1,
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="m31.276 145.186 15.496.005h5.078l-.023 8.4-2.382.152-.802.535-16.838-.535z"
          style={{
            fill: '#b3b3b3',
            stroke: '#000',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="m31.515 146.94 14.589-.145-.4 5.078-1.311.096-.026-3.57-10.885.024-.073 3.57h-1.653z"
          style={{
            fill: '#333',
            stroke: '#000',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
            filter: 'url(#f)',
          }}
        />
        <path
          d="M5.078 144.122Z"
          style={{
            fill: 'none',
            stroke: '#000',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="M142.89 139.991V92.615L54.964 93.93l1.072 45.271 84.726-1.842.528 2.632h1.6Z"
          style={{
            fill: '#f2f2f2',
            stroke: '#000',
            strokeWidth: '.264583px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="M55.86 141.716V95.212l1.068-1.604-4.003.262-2.144 1.342-.267 4.81v42.229z"
          style={{
            fill: '#b3b3b3',
            stroke: '#000',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="m55.726 97.617-3.876.267v44.367h-1.069V96.815Z"
          style={{
            fill: '#666',
            stroke: 'none',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="m56.37 93.618 85.542-.633-.54 1.913-85.541.621.539-1.901Z"
          style={{
            fill: '#e6e6e6',
            stroke: '#000',
            strokeWidth: '.264583px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="m142.063 137.44.031 3.207-86.232 1.069-.136-2.94 86.337-1.336Z"
          style={{
            fill: '#ccc',
            stroke: '#000',
            strokeWidth: '.264583px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="M141.386 93.073ZM24.07 129.152l-.283 8.02-2.138 2.139"
          style={{
            fill: 'none',
            stroke: '#000',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="m31.903 152.116 17.007.024v1.87H32.072z"
          style={{
            fill: '#e6e6e6',
            stroke: '#000',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="M31.805 146.26Z"
          style={{
            fill: 'none',
            stroke: '#000',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="m46.821 145.458-.049 1.07-15.378.267-.123-1.337z"
          style={{
            fill: '#e6e6e6',
            stroke: '#000',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <ellipse
          ry={0.802}
          rx={1.203}
          cy={147.062}
          cx={49.578}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 1,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <path
          d="M45.166 133.103c-.4-.377-1.09.052-1.48.445-.464.47-.643 1.283-.74 2.004-.098.737-.274 1.726.186 2.227.32.348.885.164 1.294 0 .293-.117.602-.336.74-.668.496-1.195.875-3.186 0-4.008z"
          style={{
            fill: '#000',
            stroke: '#000',
            strokeWidth: '.20089504px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 1,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          d="M29.667 118.998h1.871v11.225h-1.871z"
        />
        <g transform="scale(.07924) rotate(30 -2627.136 2275.887)">
          <circle
            r={124.016}
            cy={534.583}
            cx={-336.614}
            style={{
              opacity: 1,
              fill: 'gray',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
          />
          <circle
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx={-336.614}
            cy={534.583}
            r={76.032}
          />
          <circle
            style={{
              opacity: 1,
              fill: '#000',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx={-336.614}
            cy={538.583}
            r={124.016}
          />
          <circle
            r={76.032}
            cy={538.583}
            cx={-336.614}
            style={{
              opacity: 1,
              fill: 'gray',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
          />
          <circle
            r={68.283}
            cy={538.583}
            cx={-336.614}
            style={{
              opacity: 1,
              fill: '#ccc',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
          />
          <circle
            style={{
              opacity: 1,
              fill: 'url(#g)',
              fillOpacity: 1,
              stroke: '#000',
              strokeWidth: 1.26194739,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx={-336.614}
            cy={538.583}
            r={44.291}
          />
          <path
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            d="m-337.239 492.861-8.604-4.967v-9.936l8.604-4.968 8.605 4.968v9.936z"
          />
          <path
            d="m-337.239 492.861-8.604-4.967v-9.936l8.604-4.968 8.605 4.968v9.936z"
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            transform="rotate(-45 -335.942 538.69)"
          />
          <path
            transform="rotate(-90 -335.942 538.69)"
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            d="m-337.239 492.861-8.604-4.967v-9.936l8.604-4.968 8.605 4.968v9.936z"
          />
          <path
            d="m-337.239 492.861-8.604-4.967v-9.936l8.604-4.968 8.605 4.968v9.936z"
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            transform="rotate(-135 -335.942 538.69)"
          />
          <path
            transform="scale(-1)"
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            d="m334.645-584.52-8.604-4.968v-9.935l8.604-4.968 8.604 4.968v9.935z"
          />
          <path
            d="m334.645-584.52-8.604-4.968v-9.935l8.604-4.968 8.604 4.968v9.935z"
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            transform="rotate(135 -223.133 -139.152)"
          />
          <path
            transform="rotate(90 -538.69 -335.942)"
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            d="m334.645-584.52-8.604-4.968v-9.935l8.604-4.968 8.604 4.968v9.935z"
          />
          <path
            d="m334.645-584.52-8.604-4.968v-9.935l8.604-4.968 8.604 4.968v9.935z"
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            transform="rotate(45 -1300.515 -811.036)"
          />
        </g>
        <g transform="scale(.07924) rotate(30 -2052.525 4395.189)">
          <circle
            style={{
              opacity: 1,
              fill: 'gray',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx={-336.614}
            cy={534.583}
            r={124.016}
          />
          <circle
            r={76.032}
            cy={534.583}
            cx={-336.614}
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
          />
          <circle
            r={124.016}
            cy={538.583}
            cx={-336.614}
            style={{
              opacity: 1,
              fill: '#000',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
          />
          <circle
            style={{
              opacity: 1,
              fill: 'gray',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx={-336.614}
            cy={538.583}
            r={76.032}
          />
          <circle
            style={{
              opacity: 1,
              fill: '#ccc',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx={-336.614}
            cy={538.583}
            r={68.283}
          />
          <circle
            r={44.291}
            cy={538.583}
            cx={-336.614}
            style={{
              opacity: 1,
              fill: 'gray',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
          />
          <path
            d="m-337.239 492.861-8.604-4.967v-9.936l8.604-4.968 8.605 4.968v9.936z"
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
          />
          <path
            transform="rotate(-45 -335.942 538.69)"
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            d="m-337.239 492.861-8.604-4.967v-9.936l8.604-4.968 8.605 4.968v9.936z"
          />
          <path
            d="m-337.239 492.861-8.604-4.967v-9.936l8.604-4.968 8.605 4.968v9.936z"
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            transform="rotate(-90 -335.942 538.69)"
          />
          <path
            transform="rotate(-135 -335.942 538.69)"
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            d="m-337.239 492.861-8.604-4.967v-9.936l8.604-4.968 8.605 4.968v9.936z"
          />
          <path
            d="m334.645-584.52-8.604-4.968v-9.935l8.604-4.968 8.604 4.968v9.935z"
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            transform="scale(-1)"
          />
          <path
            transform="rotate(135 -223.133 -139.152)"
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            d="m334.645-584.52-8.604-4.968v-9.935l8.604-4.968 8.604 4.968v9.935z"
          />
          <path
            d="m334.645-584.52-8.604-4.968v-9.935l8.604-4.968 8.604 4.968v9.935z"
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            transform="rotate(90 -538.69 -335.942)"
          />
          <path
            transform="rotate(45 -1300.515 -811.036)"
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            d="m334.645-584.52-8.604-4.968v-9.935l8.604-4.968 8.604 4.968v9.935z"
          />
        </g>
        <g transform="scale(.07924) rotate(30 -1483.92 3267.388)">
          <circle
            r={91.085}
            cy={669.789}
            cx={303.465}
            style={{
              opacity: 1,
              fill: 'none',
              fillOpacity: 1,
              stroke: '#000',
              strokeWidth: 1.39078975,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
          />
          <text
            style={{
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '22.5px',
              lineHeight: '0%',
              fontFamily: 'sans-serif',
              textAlign: 'center',
              letterSpacing: 0,
              wordSpacing: 0,
              textAnchor: 'middle',
              fill: '#fff',
              fillOpacity: 1,
              stroke: '#1a1a1a',
              strokeWidth: 1,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeOpacity: 1,
              whiteSpace: 'pre',
            }}
          >
            <textPath startOffset="50%" xlinkHref="#path3587">
              <tspan
                style={{
                  fill: '#fff',
                  stroke: '#1a1a1a',
                }}
              >
                {'Goodgrief'}
              </tspan>
            </textPath>
          </text>
        </g>
        <circle
          r={0.25}
          cy={94.694}
          cx={57.178}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={59.824}
          cy={94.694}
          r={0.25}
        />
        <circle
          r={0.25}
          cy={94.694}
          cx={62.47}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={65.116}
          cy={94.694}
          r={0.25}
        />
        <circle
          r={0.25}
          cy={94.694}
          cx={67.762}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={70.408}
          cy={94.694}
          r={0.25}
        />
        <circle
          r={0.25}
          cy={94.694}
          cx={73.053}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={75.699}
          cy={94.694}
          r={0.25}
        />
        <circle
          r={0.25}
          cy={94.694}
          cx={78.345}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={80.991}
          cy={94.694}
          r={0.25}
        />
        <circle
          r={0.25}
          cy={94.694}
          cx={83.637}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={86.283}
          cy={94.694}
          r={0.25}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={88.939}
          cy={94.427}
          r={0.25}
        />
        <circle
          r={0.25}
          cy={94.427}
          cx={91.584}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={94.23}
          cy={94.427}
          r={0.25}
        />
        <circle
          r={0.25}
          cy={94.427}
          cx={96.876}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={99.522}
          cy={94.427}
          r={0.25}
        />
        <circle
          r={0.25}
          cy={94.427}
          cx={102.168}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={104.814}
          cy={94.427}
          r={0.25}
        />
        <circle
          r={0.25}
          cy={94.427}
          cx={107.46}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={110.105}
          cy={94.427}
          r={0.25}
        />
        <circle
          r={0.25}
          cy={94.427}
          cx={112.751}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={115.397}
          cy={94.427}
          r={0.25}
        />
        <circle
          r={0.25}
          cy={94.427}
          cx={118.043}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          r={0.25}
          cy={94.294}
          cx={121.747}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={124.393}
          cy={94.294}
          r={0.25}
        />
        <circle
          r={0.25}
          cy={94.294}
          cx={127.039}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={129.684}
          cy={94.294}
          r={0.25}
        />
        <circle
          r={0.25}
          cy={94.294}
          cx={132.33}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={134.976}
          cy={94.294}
          r={0.25}
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={137.622}
          cy={94.294}
          r={0.25}
        />
        <circle
          r={0.25}
          cy={94.294}
          cx={140.268}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <path
          style={{
            fill: 'none',
            stroke: '#000',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
          d="M141.108 137.173Z"
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={55.592}
          cy={140.127}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={140.127}
          cx={58.238}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={60.884}
          cy={140.127}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={140.127}
          cx={63.53}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={66.175}
          cy={140.127}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={140.127}
          cx={68.821}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={71.467}
          cy={140.127}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={140.127}
          cx={74.113}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={76.759}
          cy={140.127}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={140.127}
          cx={79.405}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={82.05}
          cy={140.127}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={140.127}
          cx={84.696}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          r={0.25}
          cy={139.86}
          cx={87.352}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={89.998}
          cy={139.86}
          r={0.25}
          transform="rotate(-.544)"
        />
        <circle
          r={0.25}
          cy={139.86}
          cx={92.644}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={95.29}
          cy={139.86}
          r={0.25}
          transform="rotate(-.544)"
        />
        <circle
          r={0.25}
          cy={139.86}
          cx={97.935}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={100.581}
          cy={139.86}
          r={0.25}
          transform="rotate(-.544)"
        />
        <circle
          r={0.25}
          cy={139.86}
          cx={103.227}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={105.873}
          cy={139.86}
          r={0.25}
          transform="rotate(-.544)"
        />
        <circle
          r={0.25}
          cy={139.86}
          cx={108.519}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={111.165}
          cy={139.86}
          r={0.25}
          transform="rotate(-.544)"
        />
        <circle
          r={0.25}
          cy={139.86}
          cx={113.81}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={116.456}
          cy={139.86}
          r={0.25}
          transform="rotate(-.544)"
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={120.16}
          cy={139.727}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={139.727}
          cx={122.806}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={125.452}
          cy={139.727}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={139.727}
          cx={128.098}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={130.744}
          cy={139.727}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={139.727}
          cx={133.39}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          r={0.25}
          cy={139.727}
          cx={136.035}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={138.681}
          cy={139.727}
          r={0.25}
          transform="rotate(-.544)"
        />
        <path
          d="M141.108 138.499Z"
          style={{
            fill: 'none',
            stroke: '#000',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <circle
          r={0.25}
          cy={141.452}
          cx={55.58}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={58.225}
          cy={141.452}
          r={0.25}
          transform="rotate(-.544)"
        />
        <circle
          r={0.25}
          cy={141.452}
          cx={60.871}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={63.517}
          cy={141.452}
          r={0.25}
          transform="rotate(-.544)"
        />
        <circle
          r={0.25}
          cy={141.452}
          cx={66.163}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={68.809}
          cy={141.452}
          r={0.25}
          transform="rotate(-.544)"
        />
        <circle
          r={0.25}
          cy={141.452}
          cx={71.455}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={74.1}
          cy={141.452}
          r={0.25}
          transform="rotate(-.544)"
        />
        <circle
          r={0.25}
          cy={141.452}
          cx={76.746}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={79.392}
          cy={141.452}
          r={0.25}
          transform="rotate(-.544)"
        />
        <circle
          r={0.25}
          cy={141.452}
          cx={82.038}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={84.684}
          cy={141.452}
          r={0.25}
          transform="rotate(-.544)"
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={87.339}
          cy={141.186}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={141.186}
          cx={89.985}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={92.631}
          cy={141.186}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={141.186}
          cx={95.277}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={97.923}
          cy={141.186}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={141.186}
          cx={100.569}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={103.215}
          cy={141.186}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={141.186}
          cx={105.86}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={108.506}
          cy={141.186}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={141.186}
          cx={111.152}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={113.798}
          cy={141.186}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={141.186}
          cx={116.444}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <circle
          r={0.25}
          cy={141.052}
          cx={120.148}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={122.794}
          cy={141.052}
          r={0.25}
          transform="rotate(-.544)"
        />
        <circle
          r={0.25}
          cy={141.052}
          cx={125.439}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={128.085}
          cy={141.052}
          r={0.25}
          transform="rotate(-.544)"
        />
        <circle
          r={0.25}
          cy={141.052}
          cx={130.731}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          transform="rotate(-.544)"
        />
        <circle
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={133.377}
          cy={141.052}
          r={0.25}
          transform="rotate(-.544)"
        />
        <circle
          transform="rotate(-.544)"
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          cx={136.023}
          cy={141.052}
          r={0.25}
        />
        <circle
          transform="rotate(-.544)"
          r={0.25}
          cy={141.052}
          cx={138.669}
          style={{
            opacity: 1,
            fill: '#000',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.11004534,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <path
          d="m33.141 130.758-.267 1.604h-.802l-.267.668-2.138-.668.134-14.967 1.87-.134 2.005-1.202.535 1.603-2.673.802-.267-.802-1.07.134-.267 14.031h.668l-.267-.801z"
          style={{
            fill: '#333',
            stroke: 'none',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          style={{
            opacity: 1,
            fill: '#999',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
          d="M46.772 122.607h1.336v16.571h-1.336z"
        />
        <path
          d="M47.307 123.008h.4v15.768h-.4z"
          style={{
            opacity: 1,
            fill: '#f2f2f2',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <path
          d="M26.727 139.98s2.06 2.524 2.673 4.008c1.316 3.19 2.004 10.156 2.004 10.156l-1.203.401s-.39-4.21-.801-6.28c-.298-1.495-.732-2.961-1.203-4.41-.427-1.314-1.47-3.876-1.47-3.876z"
          style={{
            fill: '#b3b3b3',
            stroke: 'none',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
            filter: 'url(#h)',
          }}
        />
        <path
          d="m14.08 133.336-.378 1.607.661-.095.284-1.89zM15.667 133.147l-.378 1.796.662-.095.283-2.079zM17.255 133.147l-.378 1.796.661-.095.284-2.079zM18.842 133.147l-.378 1.796.662-.095.189-1.323z"
          style={{
            fill: '#1a1a1a',
            stroke: 'none',
            strokeWidth: '.26458332px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeOpacity: 1,
          }}
        />
        <path
          d="m21.523 136.956.334-.334 2.072 2.071-.335.334z"
          style={{
            opacity: 1,
            fill: '#1a1a1a',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.1,
            strokeLinecap: 'round',
            strokeLinejoin: 'bevel',
            strokeOpacity: 1,
          }}
        />
        <g transform="matrix(.51533 0 0 .51533 49.306 80.938)">
          <circle
            style={{
              opacity: 1,
              fill: 'none',
              fillOpacity: 1,
              stroke: '#000',
              strokeWidth: 0.21386248,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx={167.06}
            cy={61.594}
            r={14.006}
            transform="rotate(30)"
          />
          <circle
            r={19.07}
            cy={61.286}
            cx={167.06}
            style={{
              opacity: 1,
              fill: 'gray',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 1.23016429,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            transform="rotate(30)"
          />
          <circle
            style={{
              opacity: 1,
              fill: '#333',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 1.23016429,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx={167.06}
            cy={61.286}
            r={11.691}
            transform="rotate(30)"
          />
          <circle
            style={{
              opacity: 1,
              fill: '#000',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 1.23016429,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx={167.06}
            cy={61.901}
            r={19.07}
            transform="rotate(30)"
          />
          <circle
            r={11.315}
            cy={61.901}
            cx={167.06}
            style={{
              opacity: 1,
              fill: 'gray',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 1.1905179,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            transform="rotate(30)"
          />
          <circle
            r={10.5}
            cy={167.06}
            cx={-61.901}
            style={{
              opacity: 1,
              fill: 'url(#i)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 1.23016429,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            transform="rotate(-60)"
          />
          <circle
            style={{
              opacity: 1,
              fill: '#4d4d4d',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.5,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
            cx={113.728}
            cy={137.138}
            r={5.982}
          />
          <circle
            style={{
              opacity: 1,
              fill: 'gray',
              fillOpacity: 1,
              stroke: '#333',
              strokeWidth: 0.49999997,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx={167.06}
            cy={61.901}
            r={6.811}
            transform="rotate(30)"
          />
          <circle
            transform="rotate(30 271.353 538.502)"
            r={2.949}
            cy={269.723}
            cx={-65.836}
            style={{
              opacity: 1,
              fill: 'url(#j)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.53256589,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
              filter: 'url(#filter3045)',
            }}
          />
          <path
            style={{
              opacity: 1,
              fill: 'url(#k)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.5,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
              filter: 'url(#filter3025)',
            }}
            d="M107.746 137.138a5.982 5.982 0 0 0 5.981 5.982 5.982 5.982 0 0 0 5.983-5.982 5.982 5.982 0 0 0-5.983-5.982 5.982 5.982 0 0 0-5.981 5.982zm1.413 0a4.569 4.569 0 0 1 4.568-4.569 4.569 4.569 0 0 1 4.57 4.569 4.569 4.569 0 0 1-4.57 4.569 4.569 4.569 0 0 1-4.568-4.57z"
          />
          <path
            transform="rotate(-120 -57.415 80.51)"
            style={{
              opacity: 1,
              fill: '#4d4d4d',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 1.38716912,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
            d="m-191.094 196.65-1.222.2-.784-.957.438-1.159 1.222-.2.784.959z"
          />
          <path
            d="m-112.944-140.812-1.222.2-.784-.958.438-1.158 1.222-.2.784.958z"
            style={{
              opacity: 1,
              fill: '#4d4d4d',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 1.38716912,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
            transform="scale(-1)"
          />
          <path
            transform="rotate(120 55.386 -54.325)"
            style={{
              opacity: 1,
              fill: '#4d4d4d',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 1.38716912,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
            d="m192.662-204.343-1.222.2-.784-.958.438-1.158 1.221-.2.785.958z"
          />
          <path
            d="m192.662-204.343-1.222.2-.784-.958.438-1.158 1.221-.2.785.958z"
            style={{
              opacity: 1,
              fill: '#4d4d4d',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 1.38716912,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
            transform="rotate(60 -139.449 -99.445)"
          />
          <circle
            style={{
              opacity: 1,
              fill: '#000',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.69999999,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
            cx={113.728}
            cy={128.252}
            r={0.989}
          />
          <circle
            r={0.989}
            cy={128.252}
            cx={113.728}
            style={{
              opacity: 1,
              fill: '#000',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.69999999,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
          />
          <circle
            style={{
              opacity: 1,
              fill: '#000',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.69999999,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
            cx={11.363}
            cy={168.897}
            r={0.989}
            transform="rotate(-36)"
          />
          <circle
            transform="rotate(-72)"
            r={0.989}
            cy={141.61}
            cx={-95.342}
            style={{
              opacity: 1,
              fill: '#000',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.69999999,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
          />
          <circle
            style={{
              opacity: 1,
              fill: '#000',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.69999999,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
            cx={-165.63}
            cy={56.815}
            r={0.989}
            transform="rotate(-108)"
          />
          <circle
            transform="rotate(-144)"
            r={0.989}
            cy={-53.1}
            cx={-172.653}
            style={{
              opacity: 1,
              fill: '#000',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.69999999,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
          />
          <circle
            style={{
              opacity: 1,
              fill: '#000',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.69999999,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
            cx={-113.728}
            cy={-146.15}
            r={0.989}
            transform="scale(-1)"
          />
          <circle
            transform="rotate(144)"
            r={0.989}
            cy={-186.795}
            cx={-11.363}
            style={{
              opacity: 1,
              fill: '#000',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.69999999,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
          />
          <circle
            style={{
              opacity: 1,
              fill: '#000',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.69999999,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
            cx={95.342}
            cy={-159.508}
            r={0.989}
            transform="rotate(108)"
          />
          <circle
            transform="rotate(72)"
            r={0.989}
            cy={-74.713}
            cx={165.63}
            style={{
              opacity: 1,
              fill: '#000',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.69999999,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
          />
          <circle
            style={{
              opacity: 1,
              fill: '#000',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.69999999,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
            cx={172.653}
            cy={35.202}
            r={0.989}
            transform="rotate(36)"
          />
          <circle
            style={{
              opacity: 1,
              fill: '#4d4d4d',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.46450752,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx={167.06}
            cy={61.901}
            r={2.572}
            transform="rotate(30)"
          />
          <path
            style={{
              opacity: 1,
              fill: 'url(#l)',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 1.1905179,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            d="M102.426 137.671a11.315 11.315 0 0 0 5.645 9.266 11.315 11.315 0 0 0 15.456-4.142 11.315 11.315 0 0 0-4.142-15.456 11.315 11.315 0 0 0-15.456 4.142 11.315 11.315 0 0 0-1.503 6.19zm.847-.04a10.467 10.467 0 0 1 1.39-5.727 10.467 10.467 0 0 1 14.299-3.83 10.467 10.467 0 0 1 3.83 14.297 10.467 10.467 0 0 1-14.297 3.831 10.467 10.467 0 0 1-5.222-8.57z"
          />
          <circle
            style={{
              opacity: 1,
              fill: '#1a1a1a',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.26033238,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx={167.06}
            cy={61.901}
            r={1.441}
            transform="rotate(30)"
          />
          <path
            d="m-191.094 196.65-1.222.2-.784-.957.438-1.159 1.222-.2.784.959z"
            style={{
              opacity: 1,
              fill: '#4d4d4d',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 1.38716912,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
            transform="rotate(-60 -94.094 -95.93)"
          />
          <path
            style={{
              opacity: 1,
              fill: '#4d4d4d',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 1.38716912,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeOpacity: 1,
            }}
            d="m114.512 133.12-1.222.2-.784-.958.438-1.159 1.222-.2.784.959z"
          />
          <circle
            style={{
              opacity: 1,
              fill: 'none',
              fillOpacity: 1,
              stroke: '#000',
              strokeWidth: 0.21904618,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            cx={16.554}
            cy={-177.389}
            r={14.346}
            transform="rotate(135)"
          />
        </g>
      </g>
      <path
        style={{
          strokeMiterlimit: 1,
          fill: '#9b2828',
          transition: 'all 2s ease-in-out',
        }}
        transform="rotate(-.702 -338.903 -5217.79) skewX(-1.096)"
        d={`M.828 7.67h${width !== NaN ? width : 1}v42.689H.828z`}
      />
    </svg>
  );
};

export default TruckSvgComponent;
