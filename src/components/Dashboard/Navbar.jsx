import { MainDiv, LeftDiv, RightDiv, NameInitial } from "./StyledComponent";

export const Navbar = () => {

  const user_name = JSON.parse(localStorage.getItem("user"))

  return (
    <>
      <MainDiv>
        <LeftDiv style={{}}></LeftDiv>
        <RightDiv>
          <div>
            <svg
              width="35"
              height="47"
              viewBox="0 0 44 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.3376 29.5492L42.3366 29.5462C42.2876 29.5462 42.2566 29.5492 42.2566 29.5492C42.2566 29.5492 42.1066 28.9462 41.9246 28.3622C41.7426 27.7792 41.5516 27.4152 41.5516 27.4152L41.6646 27.2412L41.6626 27.2372C42.2796 26.2172 42.2946 25.3452 42.1976 24.7912C42.0872 24.0918 41.759 23.4451 41.2596 22.9432L41.2326 22.9162C40.4986 22.1972 39.4796 21.6932 37.8246 21.2282C37.6346 21.1752 37.4656 21.1312 37.3166 21.0932C37.1961 21.0594 37.0761 21.0241 36.9566 20.9872L36.9416 20.8582C36.9356 20.4212 36.9106 18.9402 36.8726 18.0762C36.8456 17.4522 36.7916 16.4782 36.4896 15.5182C36.1296 14.2192 35.5016 13.0822 34.7176 12.3552C36.8796 10.1142 38.2296 7.64517 38.2276 5.52617C38.2206 1.45217 33.2176 0.220171 27.0516 2.77317L27.0326 2.78117C26.6011 2.92951 26.1804 3.10761 25.7736 3.31417L25.7456 3.32717C24.9476 2.54381 24.1486 1.76148 23.3486 0.980171C16.3186 -5.15083 -5.65942 19.2782 1.36858 25.2122L2.90358 26.5122C2.50558 27.5442 2.34858 28.7272 2.47658 29.9982C2.64058 31.6312 3.48258 33.1962 4.84758 34.4062C6.14358 35.5542 7.77758 36.2362 9.33758 36.2782L9.47458 36.2802H9.50158C12.2356 42.5802 18.3096 46.2972 25.5176 46.6522L25.8026 46.6642V46.6662H25.8096V46.6642C33.5236 46.9372 40.2636 43.2102 43.0286 36.5862C43.3766 35.6902 45.3186 30.3112 42.3376 29.5502V29.5492ZM10.1056 34.5092C9.86658 34.5492 9.62358 34.5652 9.37758 34.5592C7.00458 34.4962 4.44058 32.3592 4.18558 29.8252C3.90458 27.0252 5.33558 24.8692 7.86958 24.3582C8.21974 24.2889 8.57714 24.2634 8.93358 24.2822C10.3536 24.3602 12.4446 25.4502 12.9236 28.5422C13.3466 31.2822 12.6736 34.0702 10.1056 34.5082V34.5092ZM7.44558 22.6842L7.45558 22.6822C9.40858 17.3352 12.8156 12.3262 17.2536 8.90917C17.3376 8.83917 17.4236 8.76917 17.5136 8.69917C19.7006 6.91417 21.9416 5.39417 24.0986 4.19117C24.0986 4.19117 22.1856 1.97317 21.6086 1.81017C18.0556 0.850171 10.3796 6.14317 5.47858 13.1362C3.49658 15.9662 0.65858 20.9762 2.01558 23.5542C2.18258 23.8742 3.12958 24.6942 3.63758 25.1182C4.48758 23.8832 5.78758 23.0182 7.44558 22.6842ZM16.4856 13.1312C18.2316 11.1082 20.3856 9.34817 22.3146 8.36117C22.3806 8.32717 22.4516 8.39917 22.4146 8.46417C22.2616 8.74417 21.9646 9.34217 21.8736 9.79217C21.8606 9.85817 21.9336 9.90617 21.9896 9.86817C23.1876 9.05017 25.3536 8.32017 27.1846 8.21217C27.2626 8.20717 27.2956 8.31017 27.2296 8.35217C26.9446 8.52917 26.5006 8.83417 26.2976 9.13017C26.29 9.14105 26.2854 9.15372 26.2843 9.16692C26.2831 9.18012 26.2854 9.19339 26.291 9.20542C26.2966 9.21745 26.3052 9.22781 26.316 9.23549C26.3268 9.24316 26.3394 9.24788 26.3526 9.24917C27.6206 9.36617 29.4196 9.69917 30.6776 10.2952C30.7596 10.3342 30.7156 10.4572 30.6276 10.4372C28.8506 10.0272 25.9226 9.71017 22.8816 10.4522C20.1646 11.1152 18.0936 12.1412 16.5866 13.2422C16.5146 13.2952 16.4266 13.1992 16.4856 13.1322V13.1312ZM39.6396 38.0922C41.1166 36.5492 41.9956 34.8712 42.3366 32.8032C42.5046 31.6972 42.2586 31.2692 41.9246 31.0632C41.5706 30.8452 41.1466 30.9212 41.1466 30.9212C41.1466 30.9212 40.9536 29.5972 40.4066 28.3952C38.7836 29.6752 36.6946 30.5752 35.1036 31.0322C33.2676 31.5592 30.7836 31.9642 28.0126 31.7992C27.7106 31.7752 27.4286 31.7382 27.1676 31.7042C26.0996 31.5642 25.3826 31.4702 25.0746 32.4692C25.1708 32.5088 25.2682 32.5455 25.3666 32.5792C25.5096 32.6272 25.6566 32.6722 25.8046 32.7142C26.4024 32.8854 27.0102 33.0193 27.6246 33.1152C27.9326 33.1642 28.2416 33.2082 28.5526 33.2402C29.0183 33.2895 29.4862 33.3162 29.9546 33.3202C30.3264 33.3293 30.6984 33.3227 31.0696 33.3002C31.1676 33.2962 31.2656 33.2922 31.3636 33.2862C31.6766 33.2642 31.9896 33.2362 32.3056 33.2052C32.3363 33.2028 32.3669 33.2113 32.3919 33.2293C32.417 33.2472 32.4349 33.2734 32.4426 33.3033C32.4502 33.3332 32.4471 33.3647 32.4337 33.3925C32.4204 33.4203 32.3977 33.4425 32.3696 33.4552L32.3606 33.4592C32.0586 33.5872 31.7456 33.6892 31.4276 33.7692C30.9495 33.8871 30.4619 33.9628 29.9706 33.9952C29.4789 34.0267 28.9859 34.0331 28.4936 34.0142C28.1651 34.0005 27.8372 33.9752 27.5106 33.9382C27.0203 33.8788 26.5331 33.7964 26.0506 33.6912C25.6872 33.6088 25.3286 33.5063 24.9766 33.3842C25.1016 34.4482 26.1386 34.9252 26.6346 35.1182C27.0583 35.2754 27.4954 35.3939 27.9406 35.4722C33.5606 36.4392 38.8156 33.2262 39.9986 32.4162C40.0866 32.3562 40.1456 32.4152 40.0746 32.5222C40.0388 32.5791 40.0001 32.6342 39.9586 32.6872C38.5106 34.5552 34.6186 36.7172 29.5546 36.7172C27.3446 36.7172 25.1376 35.9382 24.3276 34.7432C23.0696 32.8882 24.2656 30.1802 26.3606 30.4622C26.3626 30.4622 27.0776 30.5422 27.2786 30.5662C31.6866 31.0592 37.0086 29.6072 39.3726 27.4242L39.4886 27.3412C40.3076 26.5692 40.7246 25.7712 40.5906 25.0702C40.5363 24.7026 40.3632 24.363 40.0976 24.1032C39.5846 23.6002 38.7696 23.2092 37.3956 22.8232L37.2816 22.7912L37.1366 22.7512C36.8166 22.6612 36.5666 22.5922 36.3016 22.5052C35.7116 22.3112 35.4196 22.1552 35.3536 21.0452C35.3236 20.5592 35.2396 18.8692 35.2096 18.1702C35.1556 16.9462 35.0086 15.2722 33.9696 14.5822C33.7052 14.4087 33.3986 14.3105 33.0826 14.2982C32.8276 14.2862 32.6776 14.3212 32.5976 14.3402L32.5556 14.3502C31.9956 14.4442 31.6516 14.7322 31.2456 15.0702L31.1756 15.1302C29.8806 16.2092 28.7866 16.3852 27.5716 16.3332C27.1916 16.3172 26.8016 16.2792 26.3886 16.2382C26.0106 16.2012 25.6146 16.1622 25.1916 16.1372L25.0916 16.1312C24.9526 16.1232 24.8146 16.1142 24.6756 16.1072C22.6396 16.0032 20.4556 17.7622 20.0916 20.2602C19.6866 23.0472 21.2246 24.7542 22.2246 25.8652C22.4726 26.1402 22.6866 26.3782 22.8316 26.5872C22.9372 26.7301 22.9891 26.9057 22.9781 27.0831C22.9671 27.2605 22.894 27.4283 22.7716 27.5572L22.7726 27.5582C20.6946 29.6952 20.0306 33.0902 20.8126 35.9182C20.9116 36.2722 21.0346 36.6102 21.1826 36.9322C23.0186 41.2262 28.7176 43.2252 34.2856 41.4062C35.0144 41.1683 35.7219 40.8696 36.4006 40.5132C37.6195 39.9115 38.7177 39.0912 39.6406 38.0932L39.6396 38.0922ZM33.0796 22.0552C33.4196 22.0152 33.7466 22.0132 34.0466 22.0552C34.2196 21.6572 34.2496 20.9712 34.0936 20.2242C33.8616 19.1132 33.5476 18.4412 32.8986 18.5462C32.2486 18.6502 32.2256 19.4552 32.4576 20.5662C32.5876 21.1902 32.8206 21.7252 33.0796 22.0562V22.0552ZM27.5076 22.9352C26.5066 22.5032 25.7306 22.3702 24.2676 22.8412L24.1526 22.8792C23.8616 22.9742 23.6586 23.0402 23.5296 23.0342C23.5161 23.0335 23.5028 23.0319 23.4896 23.0292C23.4206 23.0152 23.3736 22.9722 23.3596 22.9102C23.3176 22.7192 23.6126 22.4032 23.9236 22.1762C24.8636 21.4992 26.0836 21.3532 27.1076 21.7932C27.6076 22.0062 28.0786 22.3862 28.3076 22.7602C28.4186 22.9412 28.4406 23.0812 28.3686 23.1552C28.2566 23.2732 28.0336 23.1722 27.6286 22.9892H27.6276L27.5076 22.9342V22.9352ZM26.5726 23.4672C26.4786 23.4772 26.3916 23.4972 26.3066 23.5172L26.3006 23.5182C26.2756 23.524 26.2506 23.5297 26.2256 23.5352C25.9293 23.6099 25.654 23.7511 25.4206 23.9482C25.2376 24.1082 25.1246 24.2842 25.1256 24.4082C25.1256 24.4682 25.1516 24.5012 25.1716 24.5182C25.1996 24.5432 25.2316 24.5542 25.2716 24.5562C25.3546 24.5602 25.4676 24.5202 25.6226 24.4662L25.7136 24.4342C26.3218 24.2017 26.9797 24.1304 27.6236 24.2272L27.6616 24.2322C27.9406 24.2652 28.1086 24.2852 28.1756 24.1802C28.1956 24.1502 28.2196 24.0852 28.1586 23.9872C28.0166 23.7572 27.4056 23.3692 26.5726 23.4672ZM32.2076 25.2472C32.0606 25.5472 31.6076 25.6262 31.1976 25.4242C30.7876 25.2222 30.5736 24.8162 30.7206 24.5172C30.8676 24.2172 31.3206 24.1372 31.7306 24.3402C32.1406 24.5412 32.3546 24.9482 32.2076 25.2472ZM33.8376 23.1172C33.5046 23.1112 33.2276 23.4772 33.2196 23.9352C33.2116 24.3932 33.4766 24.7682 33.8096 24.7742C34.1436 24.7802 34.4196 24.4142 34.4276 23.9562C34.4356 23.4982 34.1716 23.1232 33.8376 23.1172ZM11.0766 31.3252C11.2086 31.2952 11.3446 31.2632 11.4276 31.3672C11.4576 31.4012 11.5056 31.4802 11.4496 31.6092C11.3546 31.8292 10.9816 32.1292 10.4476 32.1092C9.89758 32.0662 9.28758 31.6662 9.20358 30.6722C9.16358 30.1822 9.34858 29.5832 9.46358 29.2712C9.68358 28.6662 9.48358 28.0332 8.96758 27.6942C8.82025 27.5973 8.65526 27.5305 8.48207 27.4975C8.30887 27.4646 8.13086 27.4661 7.95826 27.5021C7.78566 27.538 7.62184 27.6077 7.47621 27.707C7.33058 27.8064 7.20599 27.9336 7.10958 28.0812C6.95158 28.3282 6.85458 28.6362 6.80358 28.8012C6.78958 28.8462 6.77858 28.8812 6.76958 28.9032C6.65358 29.2162 6.46758 29.3082 6.34258 29.2912C6.28258 29.2832 6.20058 29.2432 6.14858 29.1002C6.00558 28.7082 6.12158 27.6002 6.85858 26.7862C7.10026 26.5276 7.39993 26.3302 7.73289 26.2103C8.06584 26.0903 8.42254 26.0512 8.77358 26.0962C9.51558 26.1902 10.1326 26.6392 10.5106 27.3592C11.0136 28.3172 10.5656 29.3222 10.2986 29.9222L10.2936 29.9322C10.2683 29.9882 10.2436 30.0446 10.2196 30.1012C10.0526 30.4992 10.0436 30.8472 10.1956 31.0812C10.3126 31.2602 10.5196 31.3652 10.7656 31.3692C10.8796 31.3712 10.9836 31.3472 11.0756 31.3262H11.0766V31.3252Z"
                fill="black"
              />
            </svg>
          </div>

          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0002 38.182C30.0417 38.182 38.182 30.0417 38.182 20.0002C38.182 9.95864 30.0417 1.81836 20.0002 1.81836C9.95864 1.81836 1.81836 9.95864 1.81836 20.0002C1.81836 30.0417 9.95864 38.182 20.0002 38.182Z"
                fill="#007C89"
              />
              <path
                d="M11.2109 28.7899L15.12 28.0081L28.8646 14.2636V13.9199L25.7373 11.1372L11.9918 24.8827L11.2109 28.7908V28.7899Z"
                stroke="white"
                stroke-width="1.36364"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.6367 25.4546L14.5458 26.3637L24.5458 16.3637L23.6367 15.4546L13.6367 25.4546Z"
                fill="white"
              />
              <path
                d="M23.6367 12.7271L27.2731 16.3634"
                stroke="white"
                stroke-width="1.36364"
              />
            </svg>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.46586 6.61488C4.53505 6.54473 4.61739 6.48889 4.70816 6.45057C4.79894 6.41225 4.89638 6.39219 4.99491 6.39154C5.09344 6.39089 5.19114 6.40966 5.28241 6.44678C5.37369 6.4839 5.45675 6.53865 5.52686 6.60788C5.85331 6.92828 6.29245 7.10777 6.74986 7.10777C7.20727 7.10777 7.64641 6.92828 7.97286 6.60788C8.04252 6.5368 8.12562 6.4803 8.21733 6.44166C8.30904 6.40302 8.40752 6.38301 8.50704 6.38281C8.60656 6.38261 8.70512 6.40222 8.79698 6.4405C8.88884 6.47877 8.97217 6.53494 9.04211 6.60574C9.11205 6.67654 9.16719 6.76055 9.20434 6.85288C9.24148 6.94521 9.25988 7.044 9.25846 7.14351C9.25704 7.24302 9.23584 7.34125 9.19607 7.43247C9.15631 7.5237 9.09879 7.60611 9.02686 7.67488C8.41967 8.27253 7.60184 8.60749 6.74986 8.60749C5.89788 8.60749 5.08006 8.27253 4.47286 7.67488C4.33148 7.53519 4.25133 7.34508 4.25002 7.14633C4.2487 6.94758 4.32634 6.75643 4.46586 6.61488ZM15.9699 17.4699C16.1105 17.3294 16.3011 17.2505 16.4999 17.2505C16.6986 17.2505 16.8892 17.3294 17.0299 17.4699C17.7369 18.1769 18.7629 18.1769 19.4699 17.4699C19.5385 17.3962 19.6213 17.3371 19.7133 17.2961C19.8053 17.2551 19.9046 17.2331 20.0053 17.2313C20.106 17.2295 20.2061 17.248 20.2995 17.2858C20.3928 17.3235 20.4777 17.3796 20.5489 17.4508C20.6201 17.5221 20.6763 17.6069 20.714 17.7003C20.7517 17.7937 20.7702 17.8937 20.7685 17.9944C20.7667 18.0951 20.7446 18.1944 20.7036 18.2864C20.6627 18.3784 20.6035 18.4612 20.5299 18.5299C19.2369 19.8229 17.2629 19.8229 15.9699 18.5299C15.8294 18.3893 15.7505 18.1986 15.7505 17.9999C15.7505 17.8011 15.8294 17.6105 15.9699 17.4699ZM15.7769 5.60788C15.7072 5.5368 15.6241 5.4803 15.5324 5.44166C15.4407 5.40302 15.3422 5.38301 15.2427 5.38281C15.1432 5.38261 15.0446 5.40222 14.9527 5.4405C14.8609 5.47877 14.7776 5.53494 14.7076 5.60574C14.6377 5.67654 14.5825 5.76055 14.5454 5.85288C14.5082 5.94521 14.4898 6.044 14.4913 6.14351C14.4927 6.24302 14.5139 6.34125 14.5537 6.43247C14.5934 6.5237 14.6509 6.60611 14.7229 6.67488C15.3301 7.27253 16.1479 7.60749 16.9999 7.60749C17.8518 7.60749 18.6697 7.27253 19.2769 6.67488C19.3488 6.60611 19.4063 6.5237 19.4461 6.43247C19.4858 6.34125 19.507 6.24302 19.5085 6.14351C19.5099 6.044 19.4915 5.94521 19.4543 5.85288C19.4172 5.76055 19.362 5.67654 19.2921 5.60574C19.2222 5.53494 19.1388 5.47877 19.047 5.4405C18.9551 5.40222 18.8566 5.38261 18.757 5.38281C18.6575 5.38301 18.559 5.40302 18.4673 5.44166C18.3756 5.4803 18.2925 5.5368 18.2229 5.60788C17.8964 5.92828 17.4573 6.10777 16.9999 6.10777C16.5425 6.10777 16.1033 5.92828 15.7769 5.60788ZM3.71586 18.6149C3.78505 18.5447 3.86739 18.4889 3.95816 18.4506C4.04894 18.4122 4.14638 18.3922 4.24491 18.3915C4.34345 18.3909 4.44114 18.4097 4.53241 18.4468C4.62369 18.4839 4.70675 18.5386 4.77686 18.6079C5.10331 18.9283 5.54245 19.1078 5.99986 19.1078C6.45727 19.1078 6.89641 18.9283 7.22286 18.6079C7.29252 18.5368 7.37562 18.4803 7.46733 18.4417C7.55904 18.403 7.65752 18.383 7.75704 18.3828C7.85656 18.3826 7.95512 18.4022 8.04698 18.4405C8.13884 18.4788 8.22217 18.5349 8.29211 18.6057C8.36205 18.6765 8.41719 18.7606 8.45434 18.8529C8.49148 18.9452 8.50988 19.044 8.50846 19.1435C8.50704 19.243 8.48584 19.3412 8.44607 19.4325C8.40631 19.5237 8.34879 19.6061 8.27686 19.6749C7.66967 20.2725 6.85184 20.6075 5.99986 20.6075C5.14788 20.6075 4.33006 20.2725 3.72286 19.6749C3.58148 19.5352 3.50133 19.3451 3.50002 19.1463C3.4987 18.9476 3.57634 18.7564 3.71586 18.6149Z"
                fill="#241C15"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.267 8.80305C1.88361 8.15168 1.63859 7.42829 1.54723 6.67802C1.45587 5.92774 1.52013 5.16669 1.73599 4.44235C1.95186 3.71802 2.3147 3.04595 2.80187 2.46808C3.28904 1.89022 3.89009 1.41898 4.5675 1.08375C5.24491 0.748524 5.98414 0.556516 6.73906 0.519709C7.49398 0.482903 8.24839 0.602087 8.9552 0.869825C9.662 1.13756 10.306 1.54811 10.8471 2.07583C11.3882 2.60356 11.8147 3.23715 12.1 3.93705C13.04 2.44205 14.963 1.50005 17 1.50005C19.863 1.50005 22.5 3.36005 22.5 6.00005C22.5 6.97505 22.14 7.84305 21.543 8.55005C22.136 9.28505 22.533 10.042 22.728 10.82C22.948 11.7 22.965 12.839 22.79 14.248L22.785 14.286C23.3906 15.3529 23.6222 16.5915 23.4429 17.8051C23.2636 19.0186 22.6838 20.1374 21.7956 20.9835C20.9074 21.8297 19.7618 22.3546 18.541 22.4748C17.3202 22.595 16.0942 22.3037 15.058 21.647C13.7296 21.96 12.3609 22.0666 11 21.963V23H1V13C1 11.484 1.458 10.056 2.267 8.80305ZM3 6.00005C2.99985 5.11143 3.2956 4.24806 3.84058 3.54618C4.38557 2.8443 5.14876 2.34387 6.00971 2.12388C6.87067 1.90388 7.78037 1.97683 8.59527 2.33123C9.41016 2.68563 10.0838 3.30128 10.51 4.08105L10.517 4.09305C10.7605 4.5427 10.9153 5.03496 10.973 5.54305H10.974C11.0857 6.50387 10.8454 7.4726 10.2976 8.26985C9.74987 9.0671 8.93178 9.63887 7.99485 9.87926C7.05791 10.1197 6.0656 10.0124 5.20168 9.57735C4.33775 9.1423 3.66073 8.40893 3.296 7.51305L3.292 7.50005V7.50105C3.09878 7.02423 2.99963 6.51453 3 6.00005ZM21.407 12.682C21.418 12.084 21.372 11.584 21.272 11.184C21.137 10.642 20.852 10.092 20.409 9.53405C19.448 10.148 18.245 10.5 17 10.5C14.963 10.5 13.04 9.55805 12.1 8.06305C11.7662 8.88729 11.2377 9.61834 10.5595 10.1936C9.88143 10.7689 9.07398 11.1712 8.20636 11.3661C7.33874 11.5611 6.43679 11.5428 5.57778 11.3129C4.71876 11.083 3.92827 10.6483 3.274 10.046C2.77086 10.9496 2.5046 11.9658 2.5 13H11V20.459C11.8883 20.5325 12.7821 20.5077 13.665 20.385C12.837 19.3252 12.4261 17.9986 12.5099 16.6563C12.5937 15.3139 13.1665 14.0488 14.12 13.1002C15.0734 12.1516 16.3414 11.5852 17.6841 11.5081C19.0269 11.4311 20.3513 11.8487 21.407 12.682ZM17.219 20.924C17.7342 21.0267 18.2647 21.0268 18.7799 20.9245C19.2952 20.8221 19.7853 20.6192 20.2222 20.3275C20.6591 20.0357 21.0343 19.6608 21.3263 19.224C21.6183 18.7873 21.8214 18.2973 21.924 17.782C22.0266 17.2668 22.0268 16.7364 21.9244 16.2211C21.8221 15.7058 21.6192 15.2157 21.3274 14.7788C21.0357 14.3419 20.6607 13.9668 20.224 13.6748C19.7872 13.3828 19.2972 13.1797 18.782 13.077C17.7414 12.8698 16.6611 13.0844 15.7788 13.6736C14.8964 14.2628 14.2843 15.1785 14.077 16.219C13.8697 17.2596 14.0843 18.3399 14.6736 19.2223C15.2628 20.1046 16.1784 20.7168 17.219 20.924ZM17 3.00005C14.616 3.00005 13 4.49905 13 6.00005C13 7.50105 14.616 9.00005 17 9.00005C19.384 9.00005 21 7.50105 21 6.00005C21 4.49905 19.384 3.00005 17 3.00005ZM2.5 21.5V14.5H9.5V21.5H2.5Z"
                fill="#241C15"
              />
            </svg>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9946 17L13.9846 3L0.819576 15.269C0.672818 15.406 0.570693 15.584 0.526491 15.7798C0.48229 15.9757 0.498058 16.1803 0.571745 16.367C0.645432 16.5538 0.773625 16.714 0.939642 16.8269C1.10566 16.9398 1.30181 17.0001 1.50258 17H19.9946ZM2.77158 15.5L10.8296 7.99L14.2146 15.5H2.77058H2.77158ZM13.4456 5.553L11.9886 6.911L15.8596 15.5H17.7156L13.4456 5.553Z"
                fill="#241C15"
              />
              <path
                d="M8.47566 19.8849V18.4999H6.97266V19.8849L6.97866 20.0169C7.05166 20.8469 7.80666 21.4999 8.72566 21.4999H11.2297L11.3737 21.4949C12.2737 21.4269 12.9827 20.7319 12.9827 19.8849V18.4999H11.4807V19.8849L11.4737 19.9369C11.4584 19.9893 11.4262 20.0353 11.382 20.0675C11.3379 20.0997 11.2843 20.1164 11.2297 20.1149H8.72566L8.66866 20.1089C8.61578 20.0991 8.56783 20.0716 8.53273 20.0308C8.49763 19.9901 8.4775 19.9386 8.47566 19.8849ZM18.4697 7.07685L21.4757 4.57685L20.5157 3.42285L17.5107 5.92285L18.4707 7.07685H18.4697ZM23.3337 8.67085L19.3277 10.6709L18.6577 9.32885L22.6637 7.32885L23.3337 8.67085ZM19.9937 13.7499H23.4997V12.2499H19.9937V13.7499Z"
                fill="#241C15"
              />
            </svg>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.25 5C9.25 5.685 8.174 6 7.132 6C6.092 6 5.25 5.578 5.25 5C5.25 4.422 6.095 4 7.132 4C8.17 4 9.25 4.318 9.25 5Z"
                fill="#241C15"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.729 2.246C4.599 1.605 5.76 1.25 7 1.25C8.194 1.25 9.46 1.506 10.454 2.084C11.468 2.674 12.25 3.641 12.25 5C12.25 6.361 11.472 7.329 10.457 7.919C9.463 8.497 8.197 8.75 7 8.75C5.758 8.75 4.596 8.396 3.725 7.754C2.848 7.108 2.25 6.15 2.25 5C2.25 3.85 2.852 2.891 3.729 2.246ZM4.618 3.454C4.046 3.874 3.75 4.416 3.75 5C3.75 5.585 4.045 6.127 4.615 6.547C5.192 6.972 6.03 7.25 7 7.25C8.015 7.25 9 7.03 9.703 6.622C10.384 6.226 10.75 5.694 10.75 5C10.75 4.312 10.384 3.779 9.7 3.38C8.995 2.97 8.01 2.75 7 2.75C6.034 2.75 5.196 3.028 4.618 3.454Z"
                fill="#241C15"
              />
              <path
                d="M20.748 7.942C20.592 5.917 18.914 4.25 17 4.25H13.5V5.75H17L17.144 5.756C18.196 5.841 19.159 6.846 19.252 8.058C19.366 9.531 18.804 10.401 17.318 10.772C16.717 10.922 15.682 11.009 13.421 11.115L11.005 11.223C8.331 11.35 6.896 11.477 5.987 11.723L5.77 11.786C3.596 12.485 2.75 13.866 2.75 16C2.75 18.011 4.114 19.75 6 19.75H9V22L12.5 19L9 16V18.25H6L5.87 18.244C4.964 18.159 4.25 17.194 4.25 16C4.25 14.475 4.726 13.697 6.23 13.214L6.319 13.187C7.03 12.982 8.355 12.857 10.766 12.737L14.552 12.56C16.065 12.479 16.896 12.399 17.499 12.27L17.682 12.228C19.911 11.671 20.915 10.115 20.748 7.942Z"
                fill="#241C15"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 15H22V23H14V15ZM20.5 16.5H15.5V21.5H20.5V16.5Z"
                fill="#241C15"
              />
            </svg>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.468 9L8.5 3.5L6.72 9H1V16H4.456L3 20.5L22.5 19L19 15.125V9H13.468ZM11.447 9L9.127 6.433L8.298 9H11.448H11.447ZM17.769 16H6.032L5.116 18.833L19.34 17.739L17.768 16H17.769ZM2.5 14.5V10.5H17.5V14.5H2.5Z"
                fill="#241C15"
              />
              <path
                d="M17.5003 5.00001C18.5826 4.99993 19.6409 5.31919 20.5426 5.91779C21.4443 6.51639 22.1494 7.36773 22.5695 8.36518C22.9896 9.36264 23.106 10.4619 22.9043 11.5252C22.7025 12.5885 22.1916 13.5687 21.4353 14.343L20.3953 13.26C21.1055 12.5142 21.5006 11.5232 21.4985 10.4934C21.4964 9.46358 21.0971 8.47425 20.3839 7.73138C19.6707 6.98851 18.6984 6.54935 17.6695 6.50532C16.6406 6.46129 15.6344 6.81579 14.8603 7.49501L13.8203 6.41201C14.8294 5.50121 16.141 4.99796 17.5003 5.00001Z"
                fill="#241C15"
              />
            </svg>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 11V2H11V11H2ZM3.5 3.5H9.5V9.5H3.5V3.5ZM13 22V13H22V22H13ZM14.5 14.5H20.5V20.5H14.5V14.5ZM2 13V22H11V13H2ZM9.5 14.5H3.5V20.5H9.5V14.5ZM13 11V2H22V11H13ZM14.5 3.5H20.5V9.5H14.5V3.5Z"
                fill="#241C15"
              />
            </svg>
          </div>

          <div>
            <svg width="60" height="63" viewBox="0 0 60 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="26.5" cy="36.5" r="25.5" stroke="#02C150" stroke-width="2" />
              <circle cx="26.5" cy="36.5" r="21.5" fill="#FAEEC9" />
              <circle cx="47.5" cy="12.5" r="12.5" fill="#01934F" />
              <path d="M48 6.66683L48 17.3335" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M52.6667 11.3335L48 6.66683L43.3334 11.3335" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <NameInitial><p>{user_name.username[0]}</p>
          </NameInitial>
        </RightDiv>
      </MainDiv>

    </>
  );
};
