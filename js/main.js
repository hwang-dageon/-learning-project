

new Swiper('.visual .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: { // 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지 번호 사용 여부
      el: '.visual .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },

});



  new Swiper('.awards .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
      nextEl: '.awards .swiper-next' // 다음 버튼 선택자
    }
  });
