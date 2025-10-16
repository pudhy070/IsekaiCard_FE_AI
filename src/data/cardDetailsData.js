export const cardDetailsData = {
    daily: {
        name: '데일리 카드',
        description: '매일의 소비를 더 스마트하게, 일상 속 특별한 혜택을 만나보세요.',
        imageUrl: '/images/card2.jpg',
        theme: { primary: '#5a3a91' },
        benefits: {
            cashback: [
                { title: '대중교통 10% 캐쉬백', description: '매일 이용하는 버스/지하철 요금을 돌려받으세요.' },
                { title: '점심값 5% 캐쉬백', description: '오전 11시 ~ 오후 2시, 모든 식당에서 혜택 적용' },
                { title: '통신요금 3,000원 캐쉬백', description: 'SKT, KT, LGU+ 통신요금 자동이체 시 제공' },
            ],
            discount: [
                { title: '편의점 10% 현장 할인', description: 'GS25, CU, 세븐일레븐에서 즉시 할인' },
                { title: '온라인 쇼핑 5% 할인', description: '쿠팡, G마켓, 11번가에서 5만원 이상 결제 시' },
                { title: '카페/베이커리 1,000원 할인', description: '스타벅스, 투썸플레이스에서 1만원 이상 결제 시' },
            ],
            points: [
                { title: '모든 가맹점 0.5% 적립', description: '언제 어디서나 한도 없이 포인트를 쌓아보세요.' },
                { title: '주말 2배 적립', description: '주말(토/일)에는 모든 가맹점에서 1% 특별 적립' },
                { title: '생일 주간 10배 적립', description: '생일이 포함된 주에는 최대 5%까지 적립' },
            ]
        },
        events: [
            { id: 1, title: '[데일리] 10월, 택시비 50% 할인 이벤트', date: '2025-10-01', content: '가을을 맞아 데일리 카드 고객님들께 택시비 할인 혜택을 드립니다.' },
            { id: 2, title: '[데일리] 친구 추천하고 커피 쿠폰 받자!', date: '2025-09-15', content: '친구에게 데일리 카드를 추천하면 스타벅스 아메리카노 쿠폰 2매 증정!' },
            { id: 3, title: '[공통] 가을맞이 제주도 여행 특가', date: '2025-09-05', content: '모든 카드 고객 대상 제주도 항공권 및 숙박 할인 프로모션 진행 중' },
        ]
    },
    weekend: {
        name: '위켄드 카드',
        description: '주말의 즐거움을 두 배로! 여가와 쇼핑에 특화된 혜택을 누리세요.',
        imageUrl: '/images/card3.jpg',
        theme: { primary: '#2a6a9b' },
        benefits: {
            cashback: [
                { title: 'OTT 서비스 20% 캐쉬백', description: '넷플릭스, 유튜브 프리미엄, 디즈니+ 정기결제 시' },
                { title: '배달 앱 10% 캐쉬백', description: '배달의민족, 요기요, 쿠팡이츠 주말 주문 시' },
                { title: '온라인 게임 5% 캐쉬백', description: 'Steam, Riot Points 등 온라인 게임 결제 시' },
            ],
            discount: [
                { title: '영화관 5,000원 할인', description: 'CGV, 롯데시네마, 메가박스 주말 관람권 할인' },
                { title: '대형마트 10% 할인', description: '이마트, 롯데마트, 홈플러스 주말 10만원 이상 결제 시' },
                { title: '놀이공원/레저 50% 할인', description: '에버랜드, 롯데월드 등 주요 놀이공원 자유이용권 할인' },
            ],
            points: [
                { title: '주말 모든 가맹점 1.5% 적립', description: '주말에는 어디서나 더 강력한 포인트 적립' },
                { title: '해외 가맹점 3% 특별 적립', description: '주말 해외 여행지에서 더 큰 혜택을 누리세요.' },
                { title: '면세점 5% 추가 적립', description: '주말 출국 시 모든 면세점에서 추가 포인트 적립' },
            ]
        },
        events: [
            { id: 1, title: '[위켄드] 주말 백화점 10% 추가 할인 쿠폰', date: '2025-10-05', content: '위켄드 카드 고객님께 주말 백화점 쇼핑 지원금을 드립니다.' },
            { id: 2, title: '[위켄드] 가을 캠핑 용품 특가전', date: '2025-09-20', content: '주말 캠핑을 떠나는 고객님들을 위해 캠핑 용품 할인 이벤트를 진행합니다.' },
            { id: 3, title: '[공통] 가을맞이 제주도 여행 특가', date: '2025-09-05', content: '모든 카드 고객 대상 제주도 항공권 및 숙박 할인 프로모션 진행 중' },
        ]
    },
    platinum: {
        name: '플래티넘 카드',
        description: '최고의 당신을 위한 프리미엄 서비스, 상상 이상의 가치를 경험하세요.',
        imageUrl: '/images/card11.jpg',
        theme: { primary: '#a7a7a7' },
        benefits: {
            cashback: [
                { title: '연회비 10만원 캐쉬백', description: '연간 1,000만원 이상 사용 시 차년도 연회비 전액 캐쉬백' },
                { title: '해외 이용금액 2% 캐쉬백', description: '한도 없이 모든 해외 온/오프라인 결제 캐쉬백' },
                { title: '골프/호텔 5% 캐쉬백', description: '국내 특급호텔 및 골프장 결제 시 캐쉬백' },
            ],
            discount: [
                { title: '공항 라운지 무료 이용', description: '전 세계 공항 라운지 본인 및 동반 1인 무료 (연 12회)' },
                { title: '호텔/공항 발렛파킹 무료', description: '국내 특급호텔 및 인천/김포공항 발렛파킹 월 3회 무료' },
                { title: '프리미엄 레스토랑 할인', description: '지정된 프리미엄 레스토랑에서 10% 할인' },
            ],
            points: [
                { title: '모든 가맹점 1.2% 무제한 적립', description: '전월 실적, 적립 한도 없이 모든 결제에 대해 적립' },
                { title: '항공 마일리지 전환', description: '적립된 포인트를 대한항공/아시아나 마일리지로 전환 가능' },
                { title: '백화점/면세점 5% 특별 적립', description: '주요 백화점 및 면세점에서 특별 포인트 적립' },
            ]
        },
        events: [
            { id: 1, title: '[플래티넘] 프리미엄 F&B 바우처 증정', date: '2025-10-10', content: '플래티넘 카드 신규 고객님께 10만원 상당의 F&B 바우처를 드립니다.' },
            { id: 2, title: '[플래티넘] KLPGA 대회 초청 이벤트', date: '2025-09-25', content: '플래티넘 고객님을 위한 KLPGA 프로암 대회에 초대합니다.' },
            { id: 3, title: '[공통] 가을맞이 제주도 여행 특가', date: '2025-09-05', content: '모든 카드 고객 대상 제주도 항공권 및 숙박 할인 프로모션 진행 중' },
        ]
    },
    ai: {
        name: '나에게 맞는 카드 찾기',
        description: '특별한 당신을 위한 서비스! 자신에게 맞는 카드를 찾아봐요!',
        imageUrl: '/images/card11.jpg',
        theme: { primary: '#a7a7a7' },
        benefits: {
            cashback: [
                { title: '데일리 카드', description: '매일 이용하는 버스/지하철 요금을 돌려받으세요.' },
                { title: '위켄드 카드', description: 'OTT 서비스 20% 캐쉬백' },
                { title: '플레티넘 카드', description: '연간 1,000만원 이상 사용 시 차년도 연회비 전액 캐쉬백' },
            ],
            discount: [
                { title: '데일리 카드', description: '편의점 10% 현장 할인' },
                { title: '위켄드 카드', description: '영화관 5,000원 할인' },
                { title: '플레티넘 카드', description: '공항 라운지 무료 이용' },
            ],
            points: [
                { title: '데일리 카드', description: '모든 가맹점 0.5% 적립' },
                { title: '위켄드 카드', description: '주말 모든 가맹점 1.5% 적립' },
                { title: '플레티넘 카드', description: '모든 가맹점 1.2% 무제한 적립' },

            ]
        },
        events: [
            { id: 1, title: '[공통] 내 카드 찾기 신청 이벤트', date: '2025-10-14', content: '내 카드 찾기로 카드를 신청하신분께 소정의 상품권을 증정합니다.' },
            { id: 2, title: '[공통] 10월 실적 이벤트', date: '2025-10-01', content: '10월에 카드 신청 하시고 누적 100만원 사용하신분께 감사 인사를 드립니다' },
            { id: 3, title: '[공통] 11월 실적 이벤트(예정)', date: '2025-10-04', content: '11월에 내 카드 찾기로 신청하신후 11월 카드 사용량이 300만원 넘으실경우 10% 캐쉬백 해드립니다.' },
        ]
    },
    aiGuide: {
        name: 'AI 카드 찾기 가이드',
        description: 'AI 챗봇에게 당신의 소비 습관을 알려주세요. 수많은 카드 중에서 당신에게 꼭 맞는 최고의 카드를 찾아드립니다.',
        imageUrl: '/images/card_ai_guide.png',
        theme: {
            primary: '#5A67D8', // 테마 색상
        },
    }
};
