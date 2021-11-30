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
const toTopEl = document.querySelector('#to-top');

// [lodash - throttle]~초단위로 부하를 줘서 함수가 실행되게 만드는 함수 스크롤작업할때 많이 쓰는 함수
// ._throttle(함수, 시간ms)
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 뱃지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소,지속시간,옵션); 옵션은 보통 객체데이터로 {여러개 씀 여기서 숫자는 그대로, 문자는 '' 사용}
    // 요소를 변수에 저장해서 querySelector로 선택해도 되지만 id나 class로 직접 찾아도 가능(ex. gsap.to('#to-top',~~~~))
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:'none'
    });
    // 버튼 보이기
    gsap.to('toTopEl', .2, {
      x:0
    });
  }
  else{
    // 뱃지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    });
    // 버튼 숨기기
    gsap.to('toTopEl', .2, {
      x:100
    });
  }
}, 300));

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {   // 윈도우(화면) 객체
    scrollTo : 0          // scroll을 해당지점으로 이동시켜줌
  });
});

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

new Swiper('.awards .swiper.container', {
  // direction:'horizontal' 기본값
  autoplay:true,
  loop:true,
  spaceBetween:30,
  slidesPerView:5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
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

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector,
    random(1.5, 2.5),
    {  // 1초 대신에 랜덤함수로 시간줌(1.5s ~ 2.5s)
      y: size,
      // y축으로 size만큼 이동(내려감)
      repeat: -1,
      // 무한반복
      yoyo: true,
      // 되감기로 반복
      ease: Power1.easeInOut,
      // gsap easing검색하면 greensock.com에서 다양한 easing함수
      delay: random(0, delay)
      // 몇초 뒤에 애니메이션을 실행할지
      // 뒤에 있는 delay는 함수에서 받아오는 매개변수 delay(selector, delay, size)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  // new ScrollMagic.Scene().setClassToggle().addTo()   // 특정요소를 감시하는 메소드.특정클래스를 지정하는(토글하는) 메소드.컨트롤하는 메소드
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, // 요소 할당(spyEls 객체 여러개중 하나씩 받는거, 감시하는 요소)
    triggerHook: .8,  // 뷰포트 top:0 bottom:1인데 위에서 80%부분 감시판반 부분
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());

});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();   // textContet는 문자 안에 값을 지정하는 메소드
// getFullYear 현재 시스템상 시간의 연도를 가져옴