const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// search 아이콘 눌러도 포커스가 안되는거 해결
// 클릭 시 html의 input요소가 포커스 되게 만드는함수
// 익명함수로 만듬 focus는 기본함수
searchEl.addEventListener('click', function(){
  // Logic..
  searchInputEl.focus();
});

// input + icon이 포커스되면 클래스(focused)랑 html속성 추가
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
  // [setAttribute]html 속성 추가하는 함수
});

// input + icon이 포커스해제(blur)되면 클래스(focused)랑 html속성 제거
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  // [setAttribute]html 속성 추가하는 함수
});

const badgeEl = document.querySelector('header .badges');

// [lodash - throttle]~초단위로 부하를 줘서 함수가 실행되게 만드는 함수 스크롤작업할때 많이 쓰는 함수
// ._throttle(함수, 시간ms)
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 뱃지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소,지속시간,옵션); 옵션은 보통 객체데이터로 {여러개 씀 여기서 숫자는 그대로, 문자는 '' 사용}
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:'none'
    });
    
  }
  else{
    // 뱃지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    });
  }
}, 300));

// 클래스에 fade-in 들어간거 모두 찾아서 딜레이로 애니메이션효과
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1,{
    delay: (index + 1) * .7,  // 딜레이로 0.7초 1.4초 2.1초 2.7초뒤 순차적 등장
    opacity:1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper.container', {
  direction:'vertical',
  autoplay:true,
  loop:true
});

new Swiper('.promotion .swiper.container',{
  //direction:'horizontal' // 기본값
  slidesPerView: 3,       // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,      // 슬라이드 사이 여백
  centeredSlides: true,    // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  // 몇번째 페이진지 나타내는 스와이프 객체
  pagination:{
    el:'.promotion .swiper-pagination',   //페이지 번호 요소 선택자
    clickable:true      // 사용자의 페이지 번호 요소 클리 가능
  },
  // 다음/이전 페이지 나타내는 스와이프 객체
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    // 숨김 처리
    promotionEl.classList.add('hide');
  }
  else{
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
})