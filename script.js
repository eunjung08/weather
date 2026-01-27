const API_KEY = '0a2e6cc34bec4c2bb8420416262701';
const API_BASE_URL = 'https://api.weatherapi.com/v1/current.json';
const SEARCH_API_URL = 'https://api.weatherapi.com/v1/search.json';

// 한국어 도시명을 영어로 변환하는 매핑
const koreanCityMap = {
    '서울': 'Seoul',
    '부산': 'Busan',
    '대구': 'Daegu',
    '인천': 'Incheon',
    '광주': 'Gwangju',
    '대전': 'Daejeon',
    '울산': 'Ulsan',
    '세종': 'Sejong',
    '수원': 'Suwon',
    '고양': 'Goyang',
    '용인': 'Yongin',
    '성남': 'Seongnam',
    '부천': 'Bucheon',
    '화성': 'Hwaseong',
    '안산': 'Ansan',
    '안양': 'Anyang',
    '평택': 'Pyeongtaek',
    '시흥': 'Siheung',
    '김포': 'Gimpo',
    '의정부': 'Uijeongbu',
    '광명': 'Gwangmyeong',
    '파주': 'Paju',
    '이천': 'Icheon',
    '오산': 'Osan',
    '구리': 'Guri',
    '안성': 'Anseong',
    '포천': 'Pocheon',
    '의왕': 'Uiwang',
    '하남': 'Hanam',
    '양주': 'Yangju',
    '구리': 'Guri',
    '남양주': 'Namyangju',
    '동두천': 'Dongducheon',
    '과천': 'Gwacheon',
    '가평': 'Gapyeong',
    '양평': 'Yangpyeong',
    '여주': 'Yeoju',
    '연천': 'Yeoncheon',
    '포천': 'Pocheon',
    '제주': 'Jeju',
    '제주도': 'Jeju',
    '제주시': 'Jeju',
    '서귀포': 'Seogwipo',
    '서귀포시': 'Seogwipo',
    '춘천': 'Chuncheon',
    '원주': 'Wonju',
    '강릉': 'Gangneung',
    '동해': 'Donghae',
    '태백': 'Taebaek',
    '속초': 'Sokcho',
    '삼척': 'Samcheok',
    '홍천': 'Hongcheon',
    '횡성': 'Hoengseong',
    '영월': 'Yeongwol',
    '평창': 'Pyeongchang',
    '정선': 'Jeongseon',
    '철원': 'Cheorwon',
    '화천': 'Hwacheon',
    '양구': 'Yanggu',
    '인제': 'Inje',
    '고성': 'Goseong',
    '양양': 'Yangyang',
    '청주': 'Cheongju',
    '충주': 'Chungju',
    '제천': 'Jecheon',
    '보은': 'Boeun',
    '옥천': 'Okcheon',
    '영동': 'Yeongdong',
    '증평': 'Jeungpyeong',
    '진천': 'Jincheon',
    '괴산': 'Goesan',
    '음성': 'Eumseong',
    '단양': 'Danyang',
    '전주': 'Jeonju',
    '군산': 'Gunsan',
    '익산': 'Iksan',
    '정읍': 'Jeongeup',
    '남원': 'Namwon',
    '김제': 'Gimje',
    '완주': 'Wanju',
    '진안': 'Jinan',
    '무주': 'Muju',
    '장수': 'Jangsu',
    '임실': 'Imsil',
    '순창': 'Sunchang',
    '고창': 'Gochang',
    '부안': 'Buan',
    '목포': 'Mokpo',
    '여수': 'Yeosu',
    '순천': 'Suncheon',
    '나주': 'Naju',
    '광양': 'Gwangyang',
    '담양': 'Damyang',
    '곡성': 'Gokseong',
    '구례': 'Gurye',
    '고흥': 'Goheung',
    '보성': 'Boseong',
    '화순': 'Hwasun',
    '장흥': 'Jangheung',
    '강진': 'Gangjin',
    '해남': 'Haenam',
    '영암': 'Yeongam',
    '무안': 'Muan',
    '함평': 'Hampyeong',
    '영광': 'Yeonggwang',
    '장성': 'Jangseong',
    '완도': 'Wando',
    '진도': 'Jindo',
    '신안': 'Sinan',
    '창원': 'Changwon',
    '마산': 'Masan',
    '진해': 'Jinhae',
    '통영': 'Tongyeong',
    '사천': 'Sacheon',
    '김해': 'Gimhae',
    '밀양': 'Miryang',
    '거제': 'Geoje',
    '양산': 'Yangsan',
    '의령': 'Uiryeong',
    '함안': 'Haman',
    '창녕': 'Changnyeong',
    '고성': 'Goseong',
    '남해': 'Namhae',
    '하동': 'Hadong',
    '산청': 'Sancheong',
    '함양': 'Hamyang',
    '거창': 'Geochang',
    '합천': 'Hapcheon',
    '양산': 'Yangsan',
    '울산': 'Ulsan',
    '울주': 'Ulju',
    '경주': 'Gyeongju',
    '구미': 'Gumi',
    '영주': 'Yeongju',
    '영천': 'Yeongcheon',
    '상주': 'Sangju',
    '문경': 'Mungyeong',
    '경산': 'Gyeongsan',
    '군위': 'Gunwi',
    '의성': 'Uiseong',
    '청송': 'Cheongsong',
    '영양': 'Yeongyang',
    '영덕': 'Yeongdeok',
    '청도': 'Cheongdo',
    '고령': 'Goryeong',
    '성주': 'Seongju',
    '칠곡': 'Chilgok',
    '예천': 'Yecheon',
    '봉화': 'Bonghwa',
    '울진': 'Uljin',
    '울릉': 'Ulleung'
};

// DOM 요소들
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const weatherCard = document.getElementById('weatherCard');
const autocomplete = document.getElementById('autocomplete');

// 날씨 정보 표시 요소들
const locationName = document.getElementById('locationName');
const locationDetails = document.getElementById('locationDetails');
const currentTime = document.getElementById('currentTime');
const weatherIcon = document.getElementById('weatherIcon');
const tempC = document.getElementById('tempC');
const tempF = document.getElementById('tempF');
const conditionText = document.getElementById('conditionText');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const pressure = document.getElementById('pressure');
const precipitation = document.getElementById('precipitation');
const uvIndex = document.getElementById('uvIndex');
const visibility = document.getElementById('visibility');
const cloud = document.getElementById('cloud');

// 검색 버튼 클릭 이벤트
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        showError('도시 이름을 입력해주세요.');
    }
});

// Enter 키 이벤트
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const firstItem = autocomplete.querySelector('.autocomplete-item');
        if (firstItem && !autocomplete.classList.contains('hidden')) {
            firstItem.click();
        } else {
            searchBtn.click();
        }
    }
});

// 입력 시 자동완성
let autocompleteTimeout;
cityInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    
    clearTimeout(autocompleteTimeout);
    
    if (query.length < 2) {
        autocomplete.classList.add('hidden');
        return;
    }
    
    autocompleteTimeout = setTimeout(() => {
        fetchAutocomplete(query);
    }, 300);
});

// 외부 클릭 시 자동완성 닫기
document.addEventListener('click', (e) => {
    if (!e.target.closest('.input-wrapper')) {
        autocomplete.classList.add('hidden');
    }
});

// 한국어 도시명을 영어로 변환
function translateKoreanCity(koreanName) {
    // 정확한 매칭
    if (koreanCityMap[koreanName]) {
        return koreanCityMap[koreanName];
    }
    
    // 부분 매칭 (예: "서울시" -> "서울")
    for (const [korean, english] of Object.entries(koreanCityMap)) {
        if (koreanName.includes(korean) || korean.includes(koreanName)) {
            return english;
        }
    }
    
    return null;
}

// 날씨 정보 가져오기
async function fetchWeather(query) {
    // UI 초기화
    hideAll();
    showLoading();

    try {
        // 한국어 도시명인지 확인하고 변환
        let searchQuery = query;
        const translated = translateKoreanCity(query);
        if (translated) {
            searchQuery = translated;
        }
        
        const url = `${API_BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(searchQuery)}&lang=ko`;
        const response = await fetch(url);

        if (!response.ok) {
            const errorData = await response.json();
            
            // 첫 번째 시도가 실패하면 자동완성 API로 검색 시도
            if (errorData.error?.code === 1006) {
                const searchResults = await searchCity(query);
                if (searchResults && searchResults.length > 0) {
                    // 첫 번째 결과 사용
                    const firstResult = searchResults[0];
                    const retryUrl = `${API_BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(firstResult.name)}&lang=ko`;
                    const retryResponse = await fetch(retryUrl);
                    
                    if (retryResponse.ok) {
                        const retryData = await retryResponse.json();
                        displayWeather(retryData);
                        return;
                    }
                }
            }
            
            throw new Error(errorData.error?.message || '날씨 정보를 가져올 수 없습니다.');
        }

        const data = await response.json();
        displayWeather(data);
    } catch (err) {
        showError(err.message || '날씨 정보를 불러오는 중 오류가 발생했습니다.');
    }
}

// 도시 검색 (자동완성 API 사용)
async function searchCity(query) {
    try {
        const url = `${SEARCH_API_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            return null;
        }
        
        const data = await response.json();
        return data;
    } catch (err) {
        return null;
    }
}

// 날씨 정보 표시
function displayWeather(data) {
    hideAll();
    
    const location = data.location;
    const current = data.current;

    // 위치 정보
    locationName.textContent = location.name;
    locationDetails.textContent = `${location.region ? location.region + ', ' : ''}${location.country}`;
    currentTime.textContent = `현재 시간: ${location.localtime}`;

    // 날씨 아이콘
    weatherIcon.src = current.condition.icon.startsWith('//') 
        ? `https:${current.condition.icon}` 
        : current.condition.icon;
    weatherIcon.alt = current.condition.text;

    // 온도
    tempC.textContent = `${Math.round(current.temp_c)}°C`;
    tempF.textContent = `(${Math.round(current.temp_f)}°F)`;

    // 날씨 상태
    conditionText.textContent = current.condition.text;

    // 상세 정보
    feelsLike.textContent = `${Math.round(current.feelslike_c)}°C`;
    humidity.textContent = `${current.humidity}%`;
    windSpeed.textContent = `${current.wind_kph} km/h (${current.wind_dir})`;
    pressure.textContent = `${current.pressure_mb} mb`;
    precipitation.textContent = `${current.precip_mm} mm`;
    uvIndex.textContent = current.uv;
    visibility.textContent = `${current.vis_km} km`;
    cloud.textContent = `${current.cloud}%`;

    showWeatherCard();
}

// UI 표시/숨김 함수들
function showLoading() {
    loading.classList.remove('hidden');
}

function hideLoading() {
    loading.classList.add('hidden');
}

function showError(message) {
    hideAll();
    error.textContent = message;
    error.classList.remove('hidden');
}

function showWeatherCard() {
    weatherCard.classList.remove('hidden');
}

function hideAll() {
    loading.classList.add('hidden');
    error.classList.add('hidden');
    weatherCard.classList.add('hidden');
}

// 자동완성 검색
async function fetchAutocomplete(query) {
    try {
        // 한국어 도시명인 경우 영어로 변환하여 검색
        let searchQuery = query;
        const translated = translateKoreanCity(query);
        if (translated) {
            // 한국어와 영어 모두 검색
            searchQuery = `${query},${translated}`;
        }
        
        const url = `${SEARCH_API_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            return;
        }
        
        const data = await response.json();
        displayAutocomplete(data);
    } catch (err) {
        // 자동완성 실패는 무시
    }
}

// 자동완성 결과 표시
function displayAutocomplete(results) {
    if (!results || results.length === 0) {
        autocomplete.classList.add('hidden');
        return;
    }
    
    autocomplete.innerHTML = '';
    
    // 최대 5개까지만 표시
    results.slice(0, 5).forEach(location => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        
        const name = document.createElement('div');
        name.className = 'autocomplete-item-name';
        name.textContent = location.name;
        
        const details = document.createElement('div');
        details.className = 'autocomplete-item-details';
        details.textContent = `${location.region ? location.region + ', ' : ''}${location.country}`;
        
        item.appendChild(name);
        item.appendChild(details);
        
        item.addEventListener('click', () => {
            // 자동완성 결과를 클릭하면 정확한 위치 정보 사용
            cityInput.value = location.name;
            autocomplete.classList.add('hidden');
            
            // location.id가 있으면 id를 사용, 없으면 name 사용
            const searchQuery = location.id ? `id:${location.id}` : location.name;
            fetchWeather(searchQuery);
        });
        
        autocomplete.appendChild(item);
    });
    
    autocomplete.classList.remove('hidden');
}

// 페이지 로드 시 기본 위치로 날씨 가져오기 (IP 기반)
window.addEventListener('load', () => {
    fetchWeather('auto:ip');
});
