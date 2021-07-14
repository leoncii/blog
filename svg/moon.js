export default function Moon(props) {

  return (<>
    <div>
      <div className='shading'></div>
      <svg
        viewBox="0 0 243 264"
        {...props}
        fill="none">
        <path id='star' d="M167.92 108C163.424 108.003 162.469 102.272 166.774 101.13C168.537 100.662 170.701 101.497 171.578 102.982C172.914 105.247 170.91 107.998 167.92 108Z" fill="#222" />
        
        <path id='star' d="M199.43 222C195.496 222.003 194.66 217.091 198.428 216.111C199.97 215.711 201.863 216.426 202.631 217.699C203.8 219.641 202.046 221.998 199.43 222Z" fill="#222" />
        <path id='star' d="M146.92 187C142.424 187.003 141.469 181.272 145.774 180.13C147.537 179.662 149.701 180.497 150.578 181.982C151.914 184.247 149.91 186.998 146.92 187Z" fill="#222" />
        <path id='star' d="M35.4297 129C31.4964 129.003 30.66 124.091 34.4276 123.111C35.9701 122.711 37.8633 123.426 38.6307 124.699C39.7999 126.641 38.0461 128.998 35.4297 129Z" fill="#222" />
        <path id='star' d="M61.9397 236C58.5684 236.002 57.8514 231.909 61.0808 231.093C62.4029 230.759 64.0256 231.355 64.6835 232.416C65.6856 234.034 64.1824 235.998 61.9397 236Z" fill="#222" />

        <path id='star' d="M52.4297 27C48.4964 27.0026 47.66 22.0907 51.4276 21.1114C52.9701 20.7106 54.8633 21.4261 55.6307 22.6987C56.7999 24.6406 55.0461 26.9981 52.4297 27Z" fill="#222" />
        <path id='star' d="M116.972 35.1493C111.27 35.1533 110.057 27.6632 115.519 26.1699C117.755 25.5587 120.5 26.6497 121.613 28.5904C123.308 31.5515 120.765 35.1464 116.972 35.1493Z" fill="#222" />
        <path id='star' d="M221.92 180C217.424 180.003 216.469 174.272 220.774 173.13C222.537 172.662 224.701 173.497 225.578 174.982C226.914 177.247 224.91 179.998 221.92 180Z" fill="#222" />
        <path id='star' d="M185.9 201C180.281 201.004 179.086 193.636 184.468 192.167C186.672 191.566 189.376 192.639 190.472 194.548C192.143 197.461 189.637 200.997 185.9 201Z" fill="#222" />
        <path id='star' d="M4.40961 155C-0.647444 155.003 -1.72285 148.454 3.12125 147.149C5.10437 146.614 7.53847 147.568 8.52522 149.265C10.0285 151.854 7.7736 154.997 4.40961 155Z" fill="#222" />
        <path id='star' d="M15.9397 177C12.5684 177.003 11.8514 171.272 15.0808 170.13C16.4029 169.662 18.0256 170.497 18.6835 171.982C19.6856 174.247 18.1824 176.998 15.9397 177Z" fill="#222" />
        <path id='star' d="M96.4096 8C91.3526 8.00343 90.2772 1.45428 95.1213 0.148571C97.1044 -0.385896 99.5385 0.568079 100.525 2.26499C102.028 4.85411 99.7736 7.99743 96.4096 8Z" fill="#222" />


        //big
        <path id='starl' d="M12.8242 62.1185C25.7961 61.2246 27.4868 59.3085 28.6841 44.139C28.7395 43.4434 29.0459 45.2987 29.8282 51.0541C30.9408 59.2447 33.8266 61.3738 44.8244 62.1204C50.0636 62.4766 49.8789 63.1928 44.5234 63.289C33.2703 63.4891 30.4051 66.4865 29.1741 79.3493C28.8731 82.4919 28.7667 82.2407 28.2495 77.1633C27.1575 66.4443 23.9273 63.4813 13.1251 63.289C7.76969 63.1928 7.58607 62.4785 12.8242 62.1185Z" fill="#222" />
        <path id='starl' d="M206.824 142.118C219.796 141.225 221.487 139.308 222.684 124.139C222.74 123.443 223.046 125.299 223.828 131.054C224.941 139.245 227.827 141.374 238.824 142.12C244.064 142.477 243.879 143.193 238.523 143.289C227.27 143.489 224.405 146.487 223.174 159.349C222.873 162.492 222.767 162.241 222.249 157.163C221.158 146.444 217.927 143.481 207.125 143.289C201.77 143.193 201.586 142.479 206.824 142.118Z" fill="#222" />

        //small
        <path id='star' className='zero' d="M37.929 201.203C44.4724 200.749 45.3252 199.776 45.9292 192.071C45.9571 191.717 46.1117 192.66 46.5063 195.583C47.0675 199.743 48.5232 200.825 54.0708 201.204C56.7136 201.385 56.6204 201.748 53.919 201.797C48.2426 201.899 46.7973 203.421 46.1764 209.955C46.0245 211.551 45.9708 211.423 45.7099 208.844C45.1591 203.4 43.5297 201.895 38.0808 201.797C35.3794 201.748 35.2868 201.386 37.929 201.203Z" fill="#222" />
        <path id='star one' d="M175.157 128.328C179.083 128.065 179.595 127.502 179.958 123.041C179.974 122.836 180.067 123.382 180.304 125.074C180.641 127.483 181.514 128.109 184.842 128.329C186.428 128.433 186.372 128.644 184.751 128.672C181.346 128.731 180.478 129.612 180.106 133.395C180.015 134.319 179.982 134.245 179.826 132.752C179.495 129.6 178.518 128.729 175.248 128.672C173.628 128.644 173.572 128.434 175.157 128.328Z" fill="#222"/>
        <path id='star two' d="M72.929 44.2028C79.4724 43.7488 80.3252 42.7755 80.9292 35.0706C80.9571 34.7173 81.1117 35.6597 81.5063 38.583C82.0675 42.7432 83.5232 43.8246 89.0708 44.2038C91.7136 44.3847 91.6204 44.7485 88.919 44.7973C83.2426 44.899 81.7973 46.4214 81.1764 52.9548C81.0245 54.551 80.9708 54.4234 80.7099 51.8445C80.1591 46.4 78.5297 44.895 73.0808 44.7973C70.3794 44.7485 70.2868 44.3857 72.929 44.2028Z" fill="#222" />
        <path id='star three' d="M45.1574 161.328C49.0834 161.065 49.5951 160.502 49.9575 156.041C49.9743 155.836 50.067 156.382 50.3038 158.074C50.6405 160.483 51.5139 161.109 54.8425 161.329C56.4281 161.433 56.3722 161.644 54.7514 161.672C51.3456 161.731 50.4784 162.612 50.1058 166.395C50.0147 167.319 49.9825 167.245 49.826 165.752C49.4955 162.6 48.5178 161.729 45.2485 161.672C43.6276 161.644 43.5721 161.434 45.1574 161.328Z" fill="#222" />
        <path id='star four' d="M219.929 95.2028C226.472 94.7488 227.325 93.7755 227.929 86.0706C227.957 85.7173 228.112 86.6597 228.506 89.583C229.068 93.7432 230.523 94.8246 236.071 95.2038C238.714 95.3847 238.62 95.7485 235.919 95.7973C230.243 95.899 228.797 97.4214 228.176 103.955C228.025 105.551 227.971 105.423 227.71 102.844C227.159 97.4 225.53 95.895 220.081 95.7973C217.379 95.7485 217.287 95.3857 219.929 95.2028Z" fill="#222" />
        <path id='star five' d="M4.92902 108.203C11.4724 107.749 12.3252 106.776 12.9292 99.0706C12.9571 98.7173 13.1117 99.6597 13.5063 102.583C14.0675 106.743 15.5232 107.825 21.0708 108.204C23.7136 108.385 23.6204 108.748 20.919 108.797C15.2426 108.899 13.7973 110.421 13.1764 116.955C13.0245 118.551 12.9708 118.423 12.7099 115.844C12.1591 110.4 10.5297 108.895 5.08083 108.797C2.3794 108.748 2.28678 108.386 4.92902 108.203Z" fill="#222" />
        <path id='star six' d="M72.1574 216.328C76.0834 216.065 76.5951 215.502 76.9575 211.041C76.9743 210.836 77.067 211.382 77.3038 213.074C77.6405 215.483 78.5139 216.109 81.8425 216.329C83.4281 216.433 83.3722 216.644 81.7514 216.672C78.3456 216.731 77.4784 217.612 77.1058 221.395C77.0147 222.319 76.9825 222.245 76.826 220.752C76.4955 217.6 75.5178 216.729 72.2485 216.672C70.6276 216.644 70.5721 216.434 72.1574 216.328Z" fill="#222" />
      </svg>
    </div>
    <style jsx>{`
      div {
        position: absolute;
        width: 100%;
        text-align: center;
        opacity: .17;
      }
      svg {
        width: 70%;
        transform: rotate(90deg);
      }
      path {
        fill: transparent;
        stroke-width: .35;
        stroke: #222;
      }
      #star {
        opacity: .2;
        animation: star 8s infinite  alternate forwards;
      }
      @keyframes star {
        0% {
          stroke-dashoffset: 0;
          fill: transparent;
        }
        40% {
          stroke-dashoffset: 19;
          fill: transparent;
        }
        80% {
          stroke-dashoffset: 39;
          fill: transparent;
        }
        100% {
          stroke-dashoffset: 39;
          fill: #222;
        }
      }
      
      #starl {
        fill: transparent;
        stroke-width: .2;
        stroke: #222;
        stroke-dashoffset: 0;  
        stroke-dasharray: 129;
        opacity: .25;
        animation: starl 10s infinite  alternate forwards;
      }
      @keyframes starl {
        0% {
          stroke-dashoffset: 0;
          fill: transparent;
        }
        40% {
          stroke-dashoffset: 65;
          fill: transparent;
        }
        80% {
          stroke-dashoffset: 129;
          fill: transparent;
        }
        100% {
          stroke-dashoffset: 129;
          fill: #222;
        }
      }

      path:nth-of-type(18) {
        stroke-dashoffset: 0;
        stroke-dasharray: 65;
        animation: starzero 10s infinite alternate linear;
      }
      path:nth-of-type(19) {
        stroke-dashoffset: 0;
        stroke-dasharray: 65;
        animation: starzero 6s infinite alternate linear;
      }
      path:nth-of-type(20) {
        stroke-dashoffset: 0;
        stroke-dasharray: 65;
        animation: starzero 9s infinite alternate linear;
      }
      path:nth-of-type(21) {
        stroke-dashoffset: 0;
        stroke-dasharray: 65;
        animation: starzero 8s infinite alternate linear;
      }
      path:nth-of-type(22) {
        stroke-dashoffset: 0;
        stroke-dasharray: 65;
        animation: starzero 7s infinite alternate linear;
      }

      @keyframes starzero {
        0% {
          stroke-dashoffset: 0%;
          fill: transparent;
        }
        40% {
          stroke-dashoffset: 40%;
          fill: transparent;
        }
        80% {
          stroke-dashoffset: 50%;
          fill: transparent;
        }
        100% {
          stroke-dashoffset: 100%;
          fill: #222;
        }
      }

      @media only screen and (max-width: 768px) {
        div {
          top: 42%;
          height: 100%;
          z-index: 99;
        }
      @media only screen and (min-width: 468px) {
        div {
          top: 7%;
        }
      }
      }

    `}</style>
  </>
  )
}

