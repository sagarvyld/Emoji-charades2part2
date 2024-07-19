import React, { useEffect,useState } from 'react'

const RightGuess = ({right=true}) => {
 
    const colorStyle = !right ? { color: 'var(--Info-Error-Error-Light, #FF4567)' } : { color: '' };
  return (

    <div className="guess_main_container right_guess">
       
        <div className="Upper_tickmark">
        {right?<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4376 4.37728C19.3731 -1.45909 27.6269 -1.45909 30.5624 4.37728C36.5252 1.81231 42.848 7.17125 41.3826 13.5481C47.5827 15.4547 49.0159 23.6651 43.8354 27.5987C47.3716 33.0847 43.2447 40.3048 36.773 39.9545C35.9907 46.453 28.2347 49.3045 23.5 44.8342C18.7653 49.3045 11.0093 46.453 10.227 39.9545C3.7553 40.3048 -0.371583 33.0847 3.16463 27.5987C-2.01593 23.6651 -0.582681 15.4547 5.61737 13.5481C4.15203 7.17125 10.4748 1.81231 16.4376 4.37728Z" fill="#46FF9B"/>
<path d="M17.728 23.7201L22.096 28.0881L30.832 19.3521" stroke="#030406" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>:<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4376 4.37728C19.3731 -1.45909 27.6269 -1.45909 30.5624 4.37728C36.5252 1.81231 42.848 7.17125 41.3826 13.5481C47.5827 15.4547 49.0159 23.6651 43.8354 27.5987C47.3716 33.0847 43.2447 40.3048 36.773 39.9545C35.9907 46.453 28.2347 49.3045 23.5 44.8342C18.7653 49.3045 11.0093 46.453 10.227 39.9545C3.7553 40.3048 -0.371583 33.0847 3.16463 27.5987C-2.01593 23.6651 -0.582681 15.4547 5.61737 13.5481C4.15203 7.17125 10.4748 1.81231 16.4376 4.37728Z" fill="#FF4567"/>
<path d="M17.728 22.7201L22.096 27.0881L30.832 18.3521" stroke="#090909" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}

        </div>
        <div className="Win_status" style={colorStyle}>{!right?"Oops! Wrong guess":"You've Won!"}</div>
        <div className="guess_text">Guess the movie</div>
        <div className="guess_symbol"> <svg width="255" height="60" viewBox="0 0 255 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dii_311_31825)">
<path d="M48.9045 26.2987C48.9045 39.5738 38.146 50.3263 24.873 50.3263C11.6 50.3263 0.849121 39.5662 0.849121 26.2987C0.849121 13.0311 11.6076 2.271 24.873 2.271C38.1385 2.271 48.9045 13.0311 48.9045 26.2987Z" fill="#FFD21F"/>
<path d="M13.9337 27.2763C12.97 27.2763 12.187 26.4933 12.187 25.5296V21.3437C12.187 20.38 12.97 19.597 13.9337 19.597C14.8973 19.597 15.6803 20.38 15.6803 21.3437V25.5296C15.6803 26.4933 14.8973 27.2763 13.9337 27.2763Z" fill="#403408"/>
<path d="M35.8121 27.2761C34.8559 27.2761 34.0654 26.4932 34.0654 25.5295V21.3436C34.0654 20.3799 34.8484 19.5969 35.8121 19.5969C36.7757 19.5969 37.5587 20.3799 37.5587 21.3436V25.5295C37.5587 26.4932 36.7757 27.2761 35.8121 27.2761Z" fill="#403408"/>
<path d="M13.0003 16.2615C11.9162 16.2615 11.0354 15.9077 10.9827 15.8851C10.6288 15.742 10.4557 15.3279 10.6062 14.9741C10.7493 14.6203 11.1558 14.4471 11.5172 14.5901C11.5398 14.5977 12.9326 15.1473 14.0544 14.6654C14.604 14.432 15.003 13.9878 15.274 13.3103C15.417 12.9489 15.8236 12.7757 16.1774 12.9188C16.5388 13.0618 16.712 13.4684 16.5689 13.8222C16.1624 14.8536 15.4923 15.5613 14.5964 15.9453C14.0619 16.1712 13.5123 16.2464 13.0079 16.2464L13.0003 16.2615Z" fill="#403408"/>
<path d="M36.422 16.2607C35.9176 16.2607 35.3604 16.1854 34.8334 15.9596C33.93 15.5756 33.2675 14.8604 32.8609 13.8365C32.7179 13.4751 32.891 13.0761 33.2524 12.9331C33.6063 12.79 34.0128 12.9632 34.1558 13.3245C34.4269 14.0021 34.8259 14.4463 35.3755 14.6797C36.4973 15.154 37.8901 14.6044 37.9051 14.6044C38.2665 14.4538 38.673 14.627 38.8161 14.9809C38.9591 15.3347 38.7935 15.7488 38.4396 15.8918C38.3869 15.9144 37.5061 16.2683 36.422 16.2683V16.2607Z" fill="#403408"/>
<path d="M33.456 39.2282C33.8475 39.6348 34.5627 39.2583 34.4046 38.7086C34.4046 38.7086 34.4046 38.7011 34.4046 38.6936C33.6517 36.1861 31.1447 29.8837 24.9185 29.8837C18.6923 29.8837 16.125 36.2313 15.3496 38.7613C15.3496 38.7613 15.3496 38.7689 15.3496 38.7764C15.1915 39.3261 15.9067 39.7101 16.2982 39.2959C17.5555 37.9782 21.2822 35.8548 24.8809 35.8548C28.4796 35.8548 32.2062 37.9255 33.4635 39.2357L33.456 39.2282Z" fill="#403408"/>
</g>
<g filter="url(#filter1_dii_311_31825)">
<path d="M93.2921 50.3263C106.562 50.3263 117.32 39.5688 117.32 26.2987C117.32 13.0286 106.562 2.271 93.2921 2.271C80.022 2.271 69.2644 13.0286 69.2644 26.2987C69.2644 39.5688 80.022 50.3263 93.2921 50.3263Z" fill="#FFD21F"/>
<path d="M79.0758 24.8535C78.4056 24.8535 77.8635 24.3188 77.856 23.6487C77.856 23.4153 77.871 21.3144 79.2715 19.8913C80.0546 19.1007 81.1163 18.6865 82.3512 18.6865C83.5861 18.6865 84.6554 19.1082 85.431 19.8988C86.8164 21.3144 86.8164 23.4002 86.8164 23.6261C86.8014 24.3038 86.2442 24.8309 85.574 24.8233C84.8963 24.8083 84.3617 24.2511 84.3768 23.5809C84.3768 23.2345 84.2563 22.1804 83.684 21.6006C83.3678 21.2843 82.931 21.1337 82.3512 21.1337C81.7714 21.1337 81.3347 21.2918 81.011 21.6156C80.3182 22.3159 80.2956 23.611 80.2956 23.6261C80.3031 24.3038 79.761 24.8535 79.0908 24.861H79.0758V24.8535Z" fill="#403408"/>
<path d="M100.987 24.8535C100.317 24.8535 99.7751 24.3188 99.7676 23.6487C99.7676 23.4153 99.7826 21.3144 101.183 19.8913C101.966 19.1007 103.028 18.6865 104.263 18.6865C105.498 18.6865 106.567 19.1082 107.343 19.8988C108.728 21.3144 108.728 23.4002 108.728 23.6261C108.713 24.3038 108.156 24.8309 107.486 24.8233C106.808 24.8083 106.273 24.2511 106.288 23.5809C106.288 23.2345 106.168 22.1804 105.596 21.6006C105.279 21.2843 104.843 21.1337 104.263 21.1337C103.683 21.1337 103.246 21.2918 102.923 21.6156C102.23 22.3159 102.207 23.611 102.207 23.6261C102.215 24.3038 101.673 24.8535 101.002 24.861H100.987V24.8535Z" fill="#403408"/>
<path d="M80.9657 30.38C80.4462 30.38 80.0848 30.9071 80.2806 31.389C81.3046 33.8964 84.7307 40.1989 93.2319 40.1989C101.733 40.1989 105.234 33.8512 106.289 31.3212C106.492 30.8393 106.13 30.3047 105.603 30.3047L80.9583 30.3725L80.9657 30.38Z" fill="#403408"/>
<path d="M84.7986 31.8934C84.7986 31.8934 85.785 45.7935 93.5934 45.5902C101.402 45.3944 101.658 31.4642 101.658 31.4642" fill="#D1212D"/>
<mask id="mask0_311_31825"  maskUnits="userSpaceOnUse" x="80" y="30" width="27" height="11">
<path d="M80.9657 30.38C80.4462 30.38 80.0848 30.9071 80.2806 31.389C81.3046 33.8964 84.7307 40.1989 93.2319 40.1989C101.733 40.1989 105.234 33.8512 106.289 31.3212C106.492 30.8393 106.13 30.3047 105.603 30.3047L80.9583 30.3725L80.9657 30.38Z" fill="white"/>
</mask>
<g mask="url(#mask0_311_31825)">
<path d="M82.0649 30.0943C81.5905 30.0943 81.2667 30.2374 81.4399 30.3654C82.3736 31.0355 85.4985 32.7373 93.2391 32.7373C100.98 32.7373 104.172 31.028 105.136 30.3503C105.324 30.2223 104.993 30.0792 104.511 30.0792L82.0649 30.1018V30.0943Z" fill="white"/>
</g>
</g>
<g filter="url(#filter2_dii_311_31825)">
<path d="M161.708 50.3263C174.978 50.3263 185.735 39.5688 185.735 26.2987C185.735 13.0286 174.978 2.271 161.708 2.271C148.437 2.271 137.68 13.0286 137.68 26.2987C137.68 39.5688 148.437 50.3263 161.708 50.3263Z" fill="#FFD21F"/>
<path d="M148.598 26.0656C148.071 26.0656 147.552 25.787 147.273 25.2975C146.859 24.5671 147.115 23.641 147.845 23.2268L151.234 21.3067L147.8 19.3565C147.07 18.9424 146.814 18.0162 147.228 17.2858C147.642 16.5554 148.568 16.2994 149.299 16.7135L155.066 19.989C155.541 20.2601 155.835 20.7646 155.835 21.3143C155.835 21.8639 155.541 22.3684 155.066 22.6395L149.344 25.8849C149.11 26.0204 148.847 26.0806 148.598 26.0806V26.0656Z" fill="#403408"/>
<path d="M174.177 26.0506C173.921 26.0506 173.658 25.9828 173.424 25.8473L167.784 22.5718C167.317 22.3007 167.039 21.8038 167.039 21.2691C167.039 20.7345 167.325 20.2376 167.784 19.9665L173.379 16.7211C174.094 16.307 175.02 16.5479 175.435 17.2708C175.849 17.9861 175.608 18.9123 174.885 19.3264L171.534 21.2691L174.93 23.242C175.645 23.6561 175.894 24.5823 175.472 25.2976C175.194 25.7795 174.689 26.043 174.17 26.043L174.177 26.0506Z" fill="#403408"/>
<path d="M149.382 29.1377C148.862 29.1377 148.501 29.6648 148.696 30.1467C149.72 32.6541 153.146 38.9566 161.648 38.9566C170.149 38.9566 173.65 32.6089 174.704 30.0789C174.908 29.597 174.546 29.0624 174.019 29.0624L149.374 29.1301L149.382 29.1377Z" fill="#403408"/>
<mask id="mask1_311_31825"  maskUnits="userSpaceOnUse" x="148" y="29" width="27" height="10">
<path d="M149.382 29.1377C148.862 29.1377 148.501 29.6648 148.696 30.1467C149.72 32.6541 153.146 38.9566 161.648 38.9566C170.149 38.9566 173.65 32.6089 174.704 30.0789C174.908 29.597 174.546 29.0624 174.019 29.0624L149.374 29.1301L149.382 29.1377Z" fill="white"/>
</mask>
<g mask="url(#mask1_311_31825)">
<path d="M150.481 28.8511C150.006 28.8511 149.683 28.9942 149.856 29.1222C150.79 29.7924 153.914 31.4941 161.655 31.4941C169.396 31.4941 172.588 29.7848 173.552 29.1071C173.74 28.9791 173.409 28.8361 172.927 28.8361L150.481 28.8587V28.8511Z" fill="white"/>
<path d="M170.774 40.9445C170.774 43.7155 166.633 45.9669 161.52 45.9669C156.407 45.9669 152.266 43.723 152.266 40.9445C152.266 38.166 156.407 35.9221 161.52 35.9221C166.633 35.9221 170.774 38.166 170.774 40.9445Z" fill="#D1212D"/>
</g>
</g>
<g filter="url(#filter3_dii_311_31825)">
<path d="M230.123 50.3263C243.393 50.3263 254.151 39.5688 254.151 26.2987C254.151 13.0286 243.393 2.271 230.123 2.271C216.853 2.271 206.095 13.0286 206.095 26.2987C206.095 39.5688 216.853 50.3263 230.123 50.3263Z" fill="#FFD21F"/>
<path d="M217.013 26.0656C216.486 26.0656 215.967 25.787 215.688 25.2975C215.274 24.5671 215.53 23.641 216.26 23.2268L219.649 21.3067L216.215 19.3565C215.485 18.9424 215.229 18.0162 215.643 17.2858C216.057 16.5554 216.983 16.2994 217.714 16.7135L223.482 19.989C223.956 20.2601 224.25 20.7646 224.25 21.3143C224.25 21.8639 223.956 22.3684 223.482 22.6395L217.759 25.8849C217.525 26.0204 217.262 26.0806 217.013 26.0806V26.0656Z" fill="#403408"/>
<path d="M242.592 26.0506C242.336 26.0506 242.073 25.9828 241.839 25.8473L236.199 22.5718C235.732 22.3007 235.454 21.8038 235.454 21.2691C235.454 20.7345 235.74 20.2376 236.199 19.9665L241.794 16.7211C242.509 16.307 243.435 16.5479 243.85 17.2708C244.264 17.9861 244.023 18.9123 243.3 19.3264L239.949 21.2691L243.345 23.242C244.06 23.6561 244.309 24.5823 243.887 25.2976C243.609 25.7795 243.104 26.043 242.585 26.043L242.592 26.0506Z" fill="#403408"/>
<path d="M217.797 29.1377C217.277 29.1377 216.916 29.6648 217.111 30.1467C218.135 32.6541 221.561 38.9566 230.063 38.9566C238.564 38.9566 242.065 32.6089 243.119 30.0789C243.323 29.597 242.961 29.0624 242.434 29.0624L217.789 29.1301L217.797 29.1377Z" fill="#403408"/>
<mask id="mask2_311_31825"  maskUnits="userSpaceOnUse" x="217" y="29" width="27" height="10">
<path d="M217.797 29.1377C217.277 29.1377 216.916 29.6648 217.111 30.1467C218.135 32.6541 221.561 38.9566 230.063 38.9566C238.564 38.9566 242.065 32.6089 243.119 30.0789C243.323 29.597 242.961 29.0624 242.434 29.0624L217.789 29.1301L217.797 29.1377Z" fill="white"/>
</mask>
<g mask="url(#mask2_311_31825)">
<path d="M218.896 28.8511C218.422 28.8511 218.098 28.9942 218.271 29.1222C219.205 29.7924 222.33 31.4941 230.07 31.4941C237.811 31.4941 241.004 29.7848 241.968 29.1071C242.156 28.9791 241.824 28.8361 241.343 28.8361L218.896 28.8587V28.8511Z" fill="white"/>
<path d="M239.189 40.9445C239.189 43.7155 235.048 45.9669 229.935 45.9669C224.823 45.9669 220.681 43.723 220.681 40.9445C220.681 38.166 224.823 35.9221 229.935 35.9221C235.048 35.9221 239.189 38.166 239.189 40.9445Z" fill="#D1212D"/>
</g>
</g>
<defs>
<filter id="filter0_dii_311_31825" x="0.849121" y="0.464994" width="48.0554" height="58.8913" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="9.03001"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_311_31825"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_311_31825" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.612"/>
<feGaussianBlur stdDeviation="1.806"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_311_31825"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1.806"/>
<feGaussianBlur stdDeviation="1.806"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_311_31825" result="effect3_innerShadow_311_31825"/>
</filter>
<filter id="filter1_dii_311_31825" x="69.2644" y="0.464994" width="48.0554" height="58.8913" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="9.03001"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_311_31825"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_311_31825" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.612"/>
<feGaussianBlur stdDeviation="1.806"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_311_31825"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1.806"/>
<feGaussianBlur stdDeviation="1.806"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_311_31825" result="effect3_innerShadow_311_31825"/>
</filter>
<filter id="filter2_dii_311_31825" x="137.68" y="0.464994" width="48.0554" height="58.8913" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="9.03001"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_311_31825"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_311_31825" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.612"/>
<feGaussianBlur stdDeviation="1.806"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_311_31825"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1.806"/>
<feGaussianBlur stdDeviation="1.806"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_311_31825" result="effect3_innerShadow_311_31825"/>
</filter>
<filter id="filter3_dii_311_31825" x="206.095" y="0.464994" width="48.0554" height="58.8913" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="9.03001"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_311_31825"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_311_31825" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.612"/>
<feGaussianBlur stdDeviation="1.806"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_311_31825"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1.806"/>
<feGaussianBlur stdDeviation="1.806"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_311_31825" result="effect3_innerShadow_311_31825"/>
</filter>
</defs>
</svg>
</div>
        <div className="Movie_name">Venom Vs Spiderman</div>
        {!right &&
        <div className="Wrong_div">
            <p className="right_answer_head">The Right answer is</p>
            <div className="Movie_name_wrong">Venom Vs Spiderman</div>
        </div>
}
    </div>
  )
}

export default RightGuess
