import React from "react";
import { useState,useEffect,useRef } from "react";
const GuessBox = ({setIsEmpty, isEmpty ,setword , forward , send , right , word}) => {
  const textareaRef = useRef(null);
  const [class_set, setclass]=useState("");
  const colorStyle = !right ? { color: 'var(--Info-Error-Error-Light, #FF4567)' } : { color: '' };
  const [kill, setKill] = useState(false);

  useEffect(() => {
    setword('');
    const timer = setTimeout(() => {
      setKill(true);

    }, 100);

    return () => clearTimeout(timer); 
  }, []);
  const handleFocus = () => {
    if (textareaRef.current) {
      textareaRef.current.setAttribute('inputmode', 'text');
      textareaRef.current.setAttribute('enterkeyhint', 'done');
    }
  };

  const handleBlur = () => {
    if (textareaRef.current) {
      textareaRef.current.removeAttribute('inputmode');
      textareaRef.current.removeAttribute('enterkeyhint');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (textareaRef.current) {
        textareaRef.current.blur();
      }
    }
  };

    useEffect(()=>{
setIsEmpty(true);
    },[])
    const handleTextareaChange = (event) => {
        const value = event.target.value.trim(); 
       setword(value);
        if (value === '') {
          setIsEmpty(true);
        } else {
          setIsEmpty(false);
        }
      };
  return (
    <div className={`guess_main_container ${send?'answer_box':''}`}>
      {send && <div className={`Upper_tickmark ${kill?'Animation_div2':''}`} style={{marginTop:right &&'-4px'}}>
        {right?<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4376 4.37728C19.3731 -1.45909 27.6269 -1.45909 30.5624 4.37728C36.5252 1.81231 42.848 7.17125 41.3826 13.5481C47.5827 15.4547 49.0159 23.6651 43.8354 27.5987C47.3716 33.0847 43.2447 40.3048 36.773 39.9545C35.9907 46.453 28.2347 49.3045 23.5 44.8342C18.7653 49.3045 11.0093 46.453 10.227 39.9545C3.7553 40.3048 -0.371583 33.0847 3.16463 27.5987C-2.01593 23.6651 -0.582681 15.4547 5.61737 13.5481C4.15203 7.17125 10.4748 1.81231 16.4376 4.37728Z" fill="#00D562"/>
<path d="M17.728 23.7201L22.096 28.0881L30.832 19.3521" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
:<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4376 4.37728C19.3731 -1.45909 27.6269 -1.45909 30.5624 4.37728C36.5252 1.81231 42.848 7.17125 41.3826 13.5481C47.5827 15.4547 49.0159 23.6651 43.8354 27.5987C47.3716 33.0847 43.2447 40.3048 36.773 39.9545C35.9907 46.453 28.2347 49.3045 23.5 44.8342C18.7653 49.3045 11.0093 46.453 10.227 39.9545C3.7553 40.3048 -0.371583 33.0847 3.16463 27.5987C-2.01593 23.6651 -0.582681 15.4547 5.61737 13.5481C4.15203 7.17125 10.4748 1.81231 16.4376 4.37728Z" fill="#FF406A"/>
<path d="M18.64 29.2L29.64 18.2" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.64 29.2L18.64 18.2" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

}

        </div>}
        {send && <div className={`Win_status `} >{!right?"Oops! Wrong guess":"You've Won!"}</div>}
      <div className={`guess_svg ${send && 'svg_answer'}`}>
      <div className={`_realsvg ${send?'_send_width':'_notsend_width'} `}>
      <svg width="82" height="74" viewBox="0 0 82 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" d="M55.2797 52.6374L54.3243 52.4143C54.2488 52.5816 53.9131 53.1643 53.3693 54.0294C52.8348 54.8799 52.1183 55.9732 51.3013 57.1437C49.6605 59.4945 47.6391 62.1208 45.8822 63.7313L45.8816 63.7318C42.3601 66.9688 37.6142 69.1264 32.9817 68.4551L32.9807 68.4549C27.816 67.7171 23.5505 63.4995 21.6571 58.5415C20.7224 56.0938 20.43 52.3487 20.4425 49.0681C20.4487 47.4379 20.5299 45.943 20.6387 44.8107C20.6931 44.2439 20.7539 43.7736 20.8145 43.4254C20.8448 43.2509 20.874 43.1134 20.9006 43.0128C20.9254 42.9193 20.941 42.8851 20.9403 42.8848C20.9402 42.8848 20.9392 42.8864 20.9373 42.8895L20.0876 42.3624C17.8174 45.9469 15.4174 49.267 12.6186 52.1944C10.5594 54.343 8.16925 56.2706 5.38243 56.5422C2.75002 56.7933 0.0715408 55.4409 -1.66616 53.3595C-3.40422 51.2776 -4.30033 48.5612 -4.62326 45.7927C-4.77867 44.4173 -4.7702 42.3024 -4.71026 40.5192C-4.68044 39.6319 -4.63822 38.8361 -4.59869 38.2684C-4.57886 37.9837 -4.56 37.7606 -4.54412 37.6135C-4.54259 37.5994 -4.54113 37.5863 -4.53974 37.5742C-4.53004 37.5265 -4.52026 37.479 -4.51042 37.4315L-4.4511 37.1458L-4.67073 36.9536C-4.76369 36.8723 -4.92623 36.7962 -5.12035 36.8436C-5.27702 36.8818 -5.36426 36.9811 -5.39354 37.0175C-5.45428 37.093 -5.47832 37.1693 -5.48197 37.1801C-5.49772 37.2267 -5.50619 37.2723 -5.51028 37.2953C-5.51641 37.3297 -5.52223 37.3703 -5.52781 37.4151C-5.74365 38.4821 -5.92887 39.6286 -6.11907 40.806C-6.22692 41.4736 -6.33636 42.1511 -6.45389 42.8296C-6.7937 44.7913 -7.20612 46.797 -7.85408 48.7311C-9.14954 52.5978 -11.5084 56.206 -14.978 58.1958C-18.4509 60.1774 -23.1264 60.2124 -26.1304 57.7154C-28.9477 55.3706 -29.8943 51.4346 -30.4043 47.5941L-30.4044 47.5937C-32.1938 34.2029 -30.7241 20.4899 -27.3063 7.37642C-26.5131 4.35446 -25.5326 1.34268 -23.2649 -0.501842C-20.6256 -2.63706 -16.6011 -2.64702 -13.5261 -0.999371C-10.4548 0.646314 -8.27864 3.70082 -6.97544 7.02252C-5.6707 10.3481 -5.16663 13.9386 -4.66525 17.5585L-4.43876 19.1938L-3.71987 17.7076C0.990639 7.96927 8.38372 -0.329911 17.5557 -5.50462C21.2607 -7.59045 25.4584 -9.14897 29.4478 -8.23284C33.6624 -7.26243 36.9569 -3.52894 38.1487 0.705379L38.149 0.706398C39.35 4.93912 38.6789 9.56336 37.0638 13.7292C35.4838 17.8044 33.0828 21.5101 30.5152 25.4727C30.4537 25.5677 30.3921 25.6628 30.3304 25.7581L30.9892 26.469C31.325 26.2861 31.8002 25.9028 32.3285 25.441C32.8698 24.9679 33.5075 24.3755 34.1804 23.7413C34.4806 23.4584 34.7878 23.1672 35.0973 22.8739C36.1823 21.8455 37.2946 20.7911 38.2286 19.9768C40.6134 17.8974 43.6164 16.3263 46.5335 16.9005L46.5348 16.9008C49.5807 17.4915 51.8551 20.358 52.6659 23.495C53.0695 25.0565 53.2151 27.4976 53.2526 29.5988C53.2712 30.6412 53.2631 31.586 53.2492 32.2754C53.2422 32.6201 53.2338 32.9002 53.2265 33.0961C53.2253 33.1293 53.2241 33.1599 53.2229 33.188C53.2207 33.2429 53.2186 33.2879 53.2169 33.3223C53.2156 33.3486 53.2145 33.367 53.2137 33.3784C53.2133 33.3843 53.2131 33.3861 53.2132 33.385L53.2142 33.3758C53.2143 33.3754 53.2146 33.3723 53.2153 33.3672L54.1981 33.5484C54.2028 33.5275 54.2053 33.5095 54.2064 33.5014C55.5058 24.6758 58.9838 16.1667 64.2531 8.9658C66.1039 6.44472 68.3759 4.07724 71.2527 3.82808C73.9706 3.59969 76.6127 5.43991 78.0808 7.89642C79.5408 10.3561 80.0235 13.2892 80.3735 16.2486L80.3735 16.2488C82.2561 32.126 81.0491 48.4591 75.8671 63.5576L75.8668 63.5585C74.9988 66.1027 73.9947 68.588 72.2769 70.517C70.5507 72.4342 67.994 73.6871 65.5691 73.2479C63.1417 72.8064 61.2418 70.8108 59.7774 68.6046C56.6842 63.9107 55.0834 58.2529 55.2797 52.6374Z" stroke="#BCC9DA"/>
</svg>

      <svg width="27" height="27" className="svg_star" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M13.38 26.76C13.38 19.37 7.39 13.38 0 13.38C7.39 13.38 13.38 7.39 13.38 0C13.38 7.39 19.37 13.38 26.76 13.38C19.37 13.38 13.38 19.37 13.38 26.76Z" stroke="#B398FF"/>
</svg>

      </div>
      </div>
      <div className="guess_text">Guess the movie</div>
      {!send &&<div className="guess_heading">3 words</div>}
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
{!send &&<div className="guess_answer">
  <textarea
        ref={textareaRef}
        onChange={handleTextareaChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
        inputMode="text"
        enterKeyHint="done"
        placeholder="Type answer here"
      ></textarea>
      </div>
}
{send && <div className={`Movie_name ${right?'margin_it':''}`} style={colorStyle}>{right?"Venom vs Spiderman":word}</div>}
       {(send && !right &&
        <div className={`Wrong_div ${kill?'Animation_div':''}`}>
            <p className="right_answer_head">The Right answer is</p>
            <div className="Movie_name_wrong">Venom Vs Spiderman</div>
        </div>
)}
    </div>
  );
};

export default GuessBox;
