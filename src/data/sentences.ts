import { Sentence } from './types';

export type { Sentence };
export const DAY_NUMBER = 1;

export const sentences: Sentence[] = [
  {
    num: 1,
    sentence: "The endorsement of our native powers of making sense of our experience according to our own standards of rationality should also make it possible for us to acknowledge the ubiquitous contributions made by sense perception to the tacit components of articulate knowledge.",
    vocab: [
      "endorsement: 인정, 지지",
      "native powers: 타고난 능력",
      "ubiquitous: 어디에나 존재하는, 편재하는",
      "tacit: 암묵적인",
      "articulate knowledge: 명시적 지식"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________"
    ],
    quiz: [
      "1. 이 문장은 인간의 타고난 합리성 능력을 인정해야 한다고 주장한다. ( O / X )",
      "2. 감각 지각은 명시적 지식의 암묵적 요소에 기여한다. ( O / X )",
      "3. 저자는 감각 지각의 역할이 제한적이라고 본다. ( O / X )",
      "4. 'ubiquitous'는 감각 지각의 기여가 광범위함을 나타낸다. ( O / X )",
      "5. 암묵적 요소는 명시적 지식과 무관하다. ( O / X )"
    ],
    translation: "우리 자신의 합리성 기준에 따라 / 경험을 이해하는 우리의 타고난 능력을 인정하는 것은 / 또한 우리가 인정할 수 있게 해줄 것이다 / 감각 지각이 명시적 지식의 암묵적 요소에 / 어디에나 기여한다는 것을.\n\n→ 우리 자신의 합리성 기준에 따라 경험을 이해하는 타고난 능력을 인정하면, 감각 지각이 명시적 지식의 암묵적 요소에 광범위하게 기여한다는 점도 인정할 수 있게 될 것이다.",
    logic_answer: [
      "중심 소재: 합리성과 감각 지각의 관계",
      "논리 관계: 타고난 합리성 능력 인정 → 감각 지각의 기여 인정"
    ],
    explanation: "이 문장은 인과 관계 구조예요. 우리의 타고난 합리성 능력을 인정하면(원인), 감각 지각이 지식에 기여한다는 것도 인정하게 된다(결과)는 논리예요. 'tacit components'(암묵적 요소)와 'articulate knowledge'(명시적 지식)의 대비가 핵심이에요. 지식에는 말로 표현되는 명시적 부분과 말로 표현되지 않는 암묵적 부분이 있는데, 감각 지각은 이 암묵적 부분에 '어디에나(ubiquitous)' 기여한다는 거예요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. X",
    quiz_explanations: [
      "1. O - 'endorsement of our native powers'에서 타고난 능력을 인정해야 한다고 해요.",
      "2. O - 'contributions made by sense perception to the tacit components of articulate knowledge'에서 직접 언급돼요.",
      "3. X - 오히려 반대예요. 'ubiquitous contributions'라고 해서 감각 지각의 역할이 광범위하다고 해요.",
      "4. O - 'ubiquitous'는 '어디에나 존재하는'이라는 뜻으로, 감각 지각의 기여가 편재함을 나타내요.",
      "5. X - 오히려 암묵적 요소는 명시적 지식의 일부예요. 'tacit components of articulate knowledge'라고 해요."
    ],
    tip: "[Tip] 'should also make it possible for us to V' 구문은 인과/조건 관계를 나타내요!\n\n앞 내용(A를 인정하면) → 뒤 내용(B도 인정 가능)\n\n시험에서는 이런 복잡한 명사구(the endorsement of our native powers of making sense...)가 주어로 나올 때, 핵심 명사(endorsement)를 빠르게 파악하는 게 중요해요."
  },
  {
    num: 2,
    sentence: "The main difference between a fictitious mathematical entity, like a complex number, and a fantastic character like Sherlock Holmes, lies in the greater hold which the latter has on our imagination.",
    vocab: [
      "fictitious: 허구적인, 가상의",
      "entity: 실체, 존재",
      "lie in: ~에 있다, ~에 달려 있다",
      "hold: 영향력, 지배력"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ vs __________________ (차이점: __________________)"
    ],
    quiz: [
      "1. 복소수와 셜록 홈즈는 둘 다 허구적 존재라는 공통점이 있다. ( O / X )",
      "2. 두 존재의 주된 차이는 상상력에 대한 영향력에 있다. ( O / X )",
      "3. 복소수가 셜록 홈즈보다 상상력에 더 큰 영향을 미친다. ( O / X )",
      "4. 'the latter'는 셜록 홈즈를 가리킨다. ( O / X )",
      "5. 저자는 수학적 실체와 문학적 캐릭터가 본질적으로 같다고 본다. ( O / X )"
    ],
    translation: "허구적 수학적 실체(예: 복소수)와 / 환상적 캐릭터(예: 셜록 홈즈) 사이의 / 주된 차이점은 / 후자가 우리의 상상력에 미치는 / 더 큰 영향력에 있다.\n\n→ 복소수 같은 허구적 수학적 실체와 셜록 홈즈 같은 환상적 캐릭터의 주된 차이점은, 후자가 우리의 상상력에 더 큰 영향력을 행사한다는 데 있다.",
    logic_answer: [
      "중심 소재: 허구적 존재들의 비교",
      "논리 관계: 수학적 허구 vs 문학적 허구 (차이점: 상상력에 대한 영향력)"
    ],
    explanation: "이 문장은 대조 구조예요. 복소수(수학적 허구)와 셜록 홈즈(문학적 허구)를 비교하면서, 둘의 '주된 차이(main difference)'가 상상력에 대한 영향력에 있다고 해요. 'the latter'(후자)가 셜록 홈즈를 가리키고, 문학적 캐릭터가 수학적 실체보다 상상력에 더 큰 영향을 미친다는 게 핵심이에요. 'lie in'은 '~에 있다/달려 있다'라는 의미로, 핵심이 어디에 있는지를 알려주는 표현이에요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. X",
    quiz_explanations: [
      "1. O - 둘 다 'fictitious'와 'fantastic'이라는 표현에서 허구적 존재임을 알 수 있어요.",
      "2. O - 'lies in the greater hold... on our imagination'에서 직접 언급돼요.",
      "3. X - 반대예요. 'the latter'(셜록 홈즈)가 'greater hold'를 가진다고 해요.",
      "4. O - 'the former/the latter' 구조에서 latter는 뒤에 언급된 것(셜록 홈즈)을 가리켜요.",
      "5. X - 반대예요. 'main difference'라고 해서 둘이 다르다는 점을 강조해요."
    ],
    tip: "[Tip] 'lie in'은 핵심/원인/차이가 어디에 있는지를 나타내는 표현이에요!\n\n'The difference/problem/answer lies in ~' = 차이/문제/답은 ~에 있다\n\n시험에서 'lie in' 뒤에 나오는 내용이 핵심 포인트예요. 또한 'the former/the latter' 구조가 나오면 각각 무엇을 가리키는지 정확히 파악해야 해요."
  },
  {
    num: 3,
    sentence: "'The past' is gone and lost, and a fortiori, through the equivocality of things and the character of society, never existed as a definitive entity 'the present' anyway.",
    vocab: [
      "a fortiori: 더더욱, 하물며",
      "equivocality: 모호함, 다의성",
      "definitive: 확정적인, 최종적인",
      "entity: 실체, 존재"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → (더 나아가) → __________________"
    ],
    quiz: [
      "1. 과거는 이미 사라지고 상실되었다. ( O / X )",
      "2. 'a fortiori'는 논리를 약화시키는 표현이다. ( O / X )",
      "3. 과거는 확정적 실체로서 현재에 존재한 적이 없다. ( O / X )",
      "4. 사물의 모호함과 사회의 특성이 과거의 불확실성에 기여한다. ( O / X )",
      "5. 저자는 과거가 객관적으로 존재한다고 주장한다. ( O / X )"
    ],
    translation: "'과거'는 사라지고 상실되었으며, / 더더욱 / 사물의 모호함과 사회의 특성 때문에, / 확정적 실체로서 '현재'에 존재한 적도 없다.\n\n→ '과거'는 이미 사라지고 상실되었으며, 더 나아가 사물의 모호함과 사회의 특성 때문에 확정적 실체로서 '현재'에 존재한 적조차 없었다.",
    logic_answer: [
      "중심 소재: 과거의 존재론적 지위",
      "논리 관계: 과거는 사라졌다 → (더 나아가) → 애초에 확정적 실체로 존재한 적 없다"
    ],
    explanation: "이 문장은 논리 강화 구조예요. 'a fortiori'는 '더더욱, 하물며'라는 뜻으로, 앞의 주장을 더 강하게 만드는 표현이에요. 과거가 '사라졌다'는 것에서 한 발 더 나아가, 애초에 '확정적 실체로 존재한 적도 없다'고 주장해요. 'equivocality'(모호함)와 'character of society'(사회의 특성)가 이 불확실성의 원인으로 제시돼요. 존재론적으로 과거를 회의하는 철학적 문장이에요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'The past is gone and lost'에서 직접 언급돼요.",
      "2. X - 반대예요. 'a fortiori'는 '더더욱'이라는 뜻으로 논리를 강화해요.",
      "3. O - 'never existed as a definitive entity the present'에서 언급돼요.",
      "4. O - 'through the equivocality of things and the character of society'가 원인으로 제시돼요.",
      "5. X - 반대예요. 저자는 과거가 확정적 실체로 존재하지 않았다고 해요."
    ],
    tip: "[Tip] 'a fortiori'는 논리 강화 표현이에요!\n\n의미: A도 그런데, B는 더더욱 그렇다\n\n시험에서 'a fortiori', 'much less', 'let alone' 같은 표현이 나오면, 앞의 논리가 더 강화된다는 것을 파악해야 해요. 이런 표현 뒤의 내용이 저자의 핵심 주장인 경우가 많아요."
  },
  {
    num: 4,
    sentence: "Social domain theory views emotions and moral judgments as reciprocal processes that cannot be disentangled.",
    vocab: [
      "reciprocal: 상호적인",
      "disentangle: 분리하다, 풀어내다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ = __________________"
    ],
    quiz: [
      "1. 사회 영역 이론은 감정과 도덕 판단의 관계를 다룬다. ( O / X )",
      "2. 이 이론에 따르면 감정과 도덕 판단은 분리 가능하다. ( O / X )",
      "3. 'reciprocal'은 일방적 관계를 의미한다. ( O / X )",
      "4. 감정과 도덕 판단은 서로 영향을 주고받는다. ( O / X )",
      "5. 이 문장은 감정과 도덕 판단을 독립적 현상으로 본다. ( O / X )"
    ],
    translation: "사회 영역 이론은 / 감정과 도덕 판단을 / 분리될 수 없는 상호적 과정으로 본다.\n\n→ 사회 영역 이론은 감정과 도덕 판단을 분리할 수 없는 상호적 과정으로 간주한다.",
    logic_answer: [
      "중심 소재: 감정과 도덕 판단의 관계",
      "논리 관계: 감정 ↔ 도덕 판단 (상호적, 분리 불가)"
    ],
    explanation: "이 문장은 정의/동등 구조예요. 사회 영역 이론이 감정과 도덕 판단을 어떻게 보는지 정의해요. 핵심은 'reciprocal'(상호적)과 'cannot be disentangled'(분리 불가)예요. 감정과 도덕 판단이 서로 영향을 주고받으며, 둘을 분리해서 이해할 수 없다는 거예요. 이는 감정과 이성을 별개로 보는 전통적 관점에 반대하는 입장이에요.",
    quiz_answers: "1. O  2. X  3. X  4. O  5. X",
    quiz_explanations: [
      "1. O - 문장 전체가 감정과 도덕 판단의 관계에 대한 이론을 설명해요.",
      "2. X - 반대예요. 'cannot be disentangled'라고 해서 분리 불가능하다고 해요.",
      "3. X - 'reciprocal'은 '상호적인'이라는 뜻으로, 양방향 관계를 의미해요.",
      "4. O - 'reciprocal processes'에서 서로 영향을 주고받는다는 것을 알 수 있어요.",
      "5. X - 반대예요. 'cannot be disentangled'라고 해서 분리 불가능한 관계로 봐요."
    ],
    tip: "[Tip] 'view A as B' 구조는 A를 B로 간주한다는 정의/관점 표현이에요!\n\nA = 대상 (emotions and moral judgments)\nB = 그것을 어떻게 보는가 (reciprocal processes)\n\n시험에서 이론이나 관점을 묻는 문제가 나오면, 'view A as B', 'regard A as B', 'consider A (to be) B' 뒤의 내용이 핵심이에요."
  },
  {
    num: 5,
    sentence: "From the social domain perspective, this treatment of emotions and reasoning as distinct and opposing influences represents a false dichotomy.",
    vocab: [
      "perspective: 관점, 시각",
      "distinct: 별개의, 구별되는",
      "opposing: 대립하는, 반대되는",
      "dichotomy: 이분법",
      "false dichotomy: 잘못된 이분법"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ = __________________ (저자 평가: __________)"
    ],
    quiz: [
      "1. 사회 영역 관점은 감정과 이성을 별개로 보는 시각을 비판한다. ( O / X )",
      "2. 'false dichotomy'는 올바른 구분을 의미한다. ( O / X )",
      "3. 전통적 관점은 감정과 이성을 대립적으로 본다. ( O / X )",
      "4. 저자는 감정과 이성의 이분법적 구분을 지지한다. ( O / X )",
      "5. 이 문장은 특정 관점에서의 비판을 담고 있다. ( O / X )"
    ],
    translation: "사회 영역의 관점에서 보면, / 감정과 이성을 별개의 대립하는 영향력으로 다루는 것은 / 잘못된 이분법을 나타낸다.\n\n→ 사회 영역의 관점에서 볼 때, 감정과 이성을 별개의 대립하는 영향력으로 취급하는 것은 잘못된 이분법이다.",
    logic_answer: [
      "중심 소재: 감정과 이성의 관계에 대한 관점",
      "논리 관계: 감정-이성 이분법 = 잘못된 구분 (저자 평가: 비판적)"
    ],
    explanation: "이 문장은 비판/평가 구조예요. 'false dichotomy'(잘못된 이분법)라는 표현에서 저자의 비판적 태도가 드러나요. 전통적으로 감정과 이성(reasoning)을 'distinct and opposing'(별개의 대립하는 것)으로 보는 관점이 있는데, 사회 영역 이론은 이를 '잘못됐다'고 비판해요. 앞 문장(4번)에서 감정과 도덕 판단이 분리 불가능하다고 했던 것과 연결되는 내용이에요.",
    quiz_answers: "1. O  2. X  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'false dichotomy'라고 비판하는 것에서 알 수 있어요.",
      "2. X - 'false'가 붙어 있으므로 '잘못된' 구분이에요.",
      "3. O - 'distinct and opposing influences'가 전통적 관점의 입장이에요.",
      "4. X - 반대예요. 'false dichotomy'라고 해서 이분법을 비판해요.",
      "5. O - 'From the social domain perspective'에서 특정 관점임을 밝혀요."
    ],
    tip: "[Tip] 'false dichotomy'는 논리적 오류를 지적하는 핵심 표현이에요!\n\n의미: A와 B를 이분법적으로 나누는 것이 잘못됐다\n\n시험에서 'false dichotomy', 'artificial distinction', 'oversimplification' 같은 표현이 나오면, 저자가 기존의 이분법적 구분을 비판하고 있다는 것을 파악해야 해요."
  },
  {
    num: 6,
    sentence: "To borrow from Kant's famous saying, moral reasoning without emotion is empty; emotions without reasoning are blind.",
    vocab: [
      "borrow from: ~에서 빌려오다, 인용하다",
      "moral reasoning: 도덕적 추론"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ 없는 __________________ = 공허 / __________________ 없는 __________________ = 맹목"
    ],
    quiz: [
      "1. 이 문장은 칸트의 유명한 말을 변형한 것이다. ( O / X )",
      "2. 감정 없는 도덕적 추론은 공허하다. ( O / X )",
      "3. 추론 없는 감정은 효과적이다. ( O / X )",
      "4. 저자는 도덕적 추론과 감정 모두 필요하다고 본다. ( O / X )",
      "5. 이 문장은 이성만이 도덕의 기초라고 주장한다. ( O / X )"
    ],
    translation: "칸트의 유명한 말을 빌리자면, / 감정 없는 도덕적 추론은 공허하고; / 추론 없는 감정은 맹목적이다.\n\n→ 칸트의 유명한 말을 빌려 표현하자면, 감정이 없는 도덕적 추론은 공허하고, 추론이 없는 감정은 맹목적이다.",
    logic_answer: [
      "중심 소재: 도덕적 추론과 감정의 관계",
      "논리 관계: 감정 없는 추론 = 공허 / 추론 없는 감정 = 맹목"
    ],
    explanation: "이 문장은 병렬 대조 구조예요. 칸트의 '개념 없는 직관은 맹목적이고, 직관 없는 개념은 공허하다'를 변형한 거예요. 도덕적 추론과 감정이 서로를 필요로 한다는 점을 강조해요. 'empty'(공허한)와 'blind'(맹목적인)라는 부정적 표현을 통해, 둘 중 하나만으로는 불완전하다는 것을 보여줘요. 앞 문장들(4, 5번)의 논지를 강력하게 지지하는 결론 문장이에요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. X",
    quiz_explanations: [
      "1. O - 'To borrow from Kant's famous saying'에서 칸트의 말을 변형했음을 밝혀요.",
      "2. O - 'moral reasoning without emotion is empty'에서 직접 언급돼요.",
      "3. X - 반대예요. 'emotions without reasoning are blind'라고 해서 맹목적이라고 해요.",
      "4. O - 둘 다 없으면 문제가 생긴다는 점에서 둘 다 필요하다는 것을 알 수 있어요.",
      "5. X - 반대예요. 이성(추론)만으로는 '공허하다'고 비판해요."
    ],
    tip: "[Tip] 'A without B is X; B without A is Y' 구조는 상호 의존성을 나타내요!\n\n의미: A와 B는 서로 없으면 안 되는 관계\n\n시험에서 이런 대칭적 구조가 나오면, 두 요소가 모두 필요하다는 것이 핵심이에요. 한쪽만 강조하는 선지는 오답일 가능성이 높아요."
  },
  {
    num: 7,
    sentence: "Philip Guston's relationship with the work of T. S. Eliot is not only one of shared images; it is what the poet referred to as a 'unified sensibility.'",
    vocab: [
      "relationship with: ~과의 관계",
      "shared images: 공유된 이미지",
      "unified sensibility: 통합된 감수성",
      "refer to A as B: A를 B라고 부르다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ ✕ → __________________ ○"
    ],
    quiz: [
      "1. 거스턴과 엘리엇의 관계는 이미지 공유에 그치지 않는다. ( O / X )",
      "2. 'unified sensibility'는 T. S. 엘리엇이 사용한 표현이다. ( O / X )",
      "3. 거스턴과 엘리엇의 관계는 단순히 시각적 유사성에 국한된다. ( O / X )",
      "4. 저자는 두 예술가의 관계가 더 깊은 수준이라고 본다. ( O / X )",
      "5. 'unified sensibility'는 분리된 감각을 의미한다. ( O / X )"
    ],
    translation: "필립 거스턴과 T. S. 엘리엇 작품의 관계는 / 단지 공유된 이미지의 관계만이 아니다; / 그것은 시인이 '통합된 감수성'이라고 / 부른 것이다.\n\n→ 필립 거스턴과 T. S. 엘리엇 작품의 관계는 단순히 이미지를 공유하는 것에 그치지 않고, 시인이 '통합된 감수성'이라고 부른 것이다.",
    logic_answer: [
      "중심 소재: 거스턴과 엘리엇의 예술적 관계",
      "논리 관계: 단순한 이미지 공유 ✕ → 통합된 감수성 ○"
    ],
    explanation: "이 문장은 'not only A; it is B' 구조로, A를 넘어서 B라는 것을 강조해요. 거스턴(화가)과 엘리엇(시인)의 관계가 '공유된 이미지'라는 표면적 연결을 넘어서 'unified sensibility'(통합된 감수성)라는 더 깊은 수준이라는 거예요. 'what the poet referred to as'에서 'unified sensibility'가 엘리엇이 만든 개념임을 알 수 있어요. 서로 다른 장르의 예술가들이 깊은 예술적 연결을 공유한다는 내용이에요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. X",
    quiz_explanations: [
      "1. O - 'not only one of shared images'에서 이미지 공유에 그치지 않는다고 해요.",
      "2. O - 'what the poet referred to as'에서 엘리엇(시인)이 사용한 표현임을 알 수 있어요.",
      "3. X - 반대예요. 'not only... it is'에서 단순한 유사성을 넘어선다고 해요.",
      "4. O - 'unified sensibility'라는 더 깊은 개념으로 관계를 설명해요.",
      "5. X - 'unified'는 '통합된'이라는 뜻으로, 분리가 아닌 결합을 의미해요."
    ],
    tip: "[Tip] 'not only A; it is B' 구조에서는 B가 핵심이에요!\n\nA = 표면적/부분적 설명\nB = 더 깊은/본질적 설명\n\n시험에서 'not only'가 나오면 그 뒤의 내용(A)은 부차적이고, 'but also/it is' 뒤의 내용(B)이 저자가 강조하고 싶은 핵심이에요."
  },
  {
    num: 8,
    sentence: "Guston's illogical iconography does not speak of a descriptive figuration, but of an underlying figuration in the mythical subconscious, an epiphany or something that manifests itself as something illogically received - a divination.",
    vocab: [
      "iconography: 도상학, 이미지 체계",
      "figuration: 형상화, 묘사",
      "underlying: 근본적인, 기저의",
      "mythical: 신화적인",
      "subconscious: 잠재의식",
      "epiphany: 현현, 깨달음",
      "manifest: 나타내다, 드러내다",
      "divination: 신탁, 예언"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ ✕ → __________________ ○"
    ],
    quiz: [
      "1. 거스턴의 도상학은 서술적 형상화를 다룬다. ( O / X )",
      "2. 거스턴의 작품은 신화적 잠재의식의 형상화와 관련이 있다. ( O / X )",
      "3. 'epiphany'는 일상적인 묘사를 의미한다. ( O / X )",
      "4. 거스턴의 도상학은 비논리적으로 수용되는 것을 표현한다. ( O / X )",
      "5. 저자는 거스턴의 작품이 표면적 묘사에 충실하다고 본다. ( O / X )"
    ],
    translation: "거스턴의 비논리적 도상학은 / 서술적 형상화를 말하는 것이 아니라, / 신화적 잠재의식 속의 근본적 형상화를 말한다, / 현현 또는 비논리적으로 수용되는 무언가로 / 나타나는 것 - 신탁.\n\n→ 거스턴의 비논리적 도상학은 서술적 형상화가 아니라, 신화적 잠재의식 속의 근본적 형상화를 나타내며, 이는 현현이나 비논리적으로 받아들여지는 것 - 즉 신탁이다.",
    logic_answer: [
      "중심 소재: 거스턴 도상학의 본질",
      "논리 관계: 서술적/표면적 형상화 ✕ → 잠재의식적/신화적 형상화 ○"
    ],
    explanation: "이 문장은 'not A but B' 구조의 대조예요. 거스턴의 도상학이 'descriptive figuration'(서술적 형상화)이 아니라 'underlying figuration in the mythical subconscious'(신화적 잠재의식의 근본적 형상화)라는 거예요. 'epiphany'(현현), 'divination'(신탁) 같은 종교적/신비적 어휘를 통해 거스턴 작품의 초월적 성격을 강조해요. 표면적 묘사가 아닌 깊은 무의식적 차원을 다룬다는 게 핵심이에요.",
    quiz_answers: "1. X  2. O  3. X  4. O  5. X",
    quiz_explanations: [
      "1. X - 'does not speak of a descriptive figuration'이라고 명시적으로 부정해요.",
      "2. O - 'underlying figuration in the mythical subconscious'에서 직접 언급돼요.",
      "3. X - 'epiphany'는 현현, 깨달음으로 신비적/초월적 의미예요.",
      "4. O - 'something that manifests itself as something illogically received'에서 언급돼요.",
      "5. X - 반대예요. 'not descriptive'라고 표면적 묘사가 아니라고 해요."
    ],
    tip: "[Tip] 'not A but B' 구조에서는 항상 B가 정답이에요!\n\nA = 표면적/일반적 오해 (descriptive figuration)\nB = 저자의 진짜 주장 (underlying figuration)\n\n시험에서 A를 정답으로 제시하는 선지는 함정이에요! 'not'을 무시하고 A만 보면 틀리게 돼요."
  },
  {
    num: 9,
    sentence: "Property dualists accept that materialists are correct in supposing there is only one sort of substance—physical substance, but they suppose that material substances can have both physical and mental properties.",
    vocab: [
      "property dualist: 속성 이원론자",
      "materialist: 유물론자",
      "substance: 실체",
      "property: 속성"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 유물론과 동의(__________________ = 유일한 실체) + 추가 주장(실체는 __________, __________ 속성 모두 가짐)"
    ],
    quiz: [
      "1. 속성 이원론자는 물리적 실체만 존재한다는 점에서 유물론자와 동의한다. ( O / X )",
      "2. 속성 이원론자는 물질적 실체가 정신적 속성도 가질 수 있다고 본다. ( O / X )",
      "3. 속성 이원론은 두 종류의 실체를 인정한다. ( O / X )",
      "4. 유물론자와 속성 이원론자의 차이는 '속성'에 대한 견해에 있다. ( O / X )",
      "5. 속성 이원론자는 정신적 실체의 독립적 존재를 인정한다. ( O / X )"
    ],
    translation: "속성 이원론자들은 / 유물론자들이 오직 한 종류의 실체 - 물리적 실체만 있다고 / 가정하는 것이 옳다고 받아들인다, / 그러나 그들은 물질적 실체가 / 물리적 속성과 정신적 속성 둘 다 가질 수 있다고 가정한다.\n\n→ 속성 이원론자들은 오직 물리적 실체만 존재한다는 유물론자들의 가정이 옳다고 받아들이지만, 물질적 실체가 물리적 속성과 정신적 속성 모두를 가질 수 있다고 본다.",
    logic_answer: [
      "중심 소재: 속성 이원론의 입장",
      "논리 관계: 유물론과 동의(물리적 실체 = 유일한 실체) + 추가 주장(실체는 물리적, 정신적 속성 모두 가짐)"
    ],
    explanation: "이 문장은 '동의 + 추가' 구조예요. 속성 이원론(property dualism)이 유물론(materialism)과 공유하는 부분과 다른 부분을 설명해요. 공유점은 '실체는 물리적 실체 하나'라는 것이고, 차이점은 '그 실체가 정신적 속성도 가질 수 있다'는 것이에요. 'substance'(실체)와 'property'(속성)의 구별이 핵심이에요. 실체의 종류가 아니라 속성의 종류에서 이원론이 성립한다는 게 포인트예요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. X",
    quiz_explanations: [
      "1. O - 'accept that materialists are correct in supposing there is only one sort of substance'에서 동의함을 알 수 있어요.",
      "2. O - 'material substances can have both physical and mental properties'에서 직접 언급돼요.",
      "3. X - 반대예요. 'only one sort of substance'라고 해서 실체는 하나예요. 속성이 둘이에요.",
      "4. O - 실체에 대해선 동의하고, 속성에 대해선 다른 견해를 가져요.",
      "5. X - 반대예요. 정신적 '속성'은 인정하지만, 정신적 '실체'는 인정하지 않아요."
    ],
    tip: "[Tip] 철학 지문에서 'substance'(실체)와 'property'(속성)의 구별이 중요해요!\n\nSubstance = 존재하는 것 자체\nProperty = 그것이 가진 특성\n\n시험에서 이 둘을 혼동하게 만드는 선지가 자주 나와요. 속성 이원론은 '실체 이원론'이 아니라 '속성 이원론'이라는 점을 기억하세요!"
  },
  {
    num: 10,
    sentence: "The psychological perspective on stress places emphasis on the organism's perception and evaluation of the potential harm posed by a stimulus.",
    vocab: [
      "perspective: 관점, 시각",
      "place emphasis on: ~을 강조하다",
      "organism: 유기체",
      "perception: 인식, 지각",
      "evaluation: 평가",
      "stimulus: 자극"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 심리학적 관점의 핵심 = __________________"
    ],
    quiz: [
      "1. 심리학적 스트레스 관점은 유기체의 인식을 중시한다. ( O / X )",
      "2. 이 관점에서 스트레스는 자극 자체의 객관적 특성에 의해 결정된다. ( O / X )",
      "3. 잠재적 해로움에 대한 평가가 스트레스에 영향을 미친다. ( O / X )",
      "4. 'place emphasis on'은 중요성을 약화시키는 표현이다. ( O / X )",
      "5. 심리학적 관점은 주관적 요인을 강조한다. ( O / X )"
    ],
    translation: "스트레스에 대한 심리학적 관점은 / 유기체의 인식과 평가에 강조점을 둔다 / 자극에 의해 제기되는 잠재적 해로움에 대한.\n\n→ 스트레스에 대한 심리학적 관점은 자극이 야기하는 잠재적 해로움에 대한 유기체의 인식과 평가를 강조한다.",
    logic_answer: [
      "중심 소재: 스트레스의 심리학적 관점",
      "논리 관계: 심리학적 관점의 핵심 = 유기체의 인식과 평가"
    ],
    explanation: "이 문장은 정의/강조 구조예요. 심리학적 관점이 스트레스를 어떻게 보는지 설명해요. 핵심은 'organism's perception and evaluation'(유기체의 인식과 평가)이에요. 자극 자체가 아니라, 그 자극을 어떻게 인식하고 평가하느냐가 스트레스를 결정한다는 거예요. 'places emphasis on'은 '~을 강조하다'라는 의미로, 뒤에 오는 내용이 핵심임을 알려줘요.",
    quiz_answers: "1. O  2. X  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'organism's perception'에 강조점을 둔다고 해요.",
      "2. X - 반대예요. 자극 자체가 아니라 유기체의 '인식과 평가'를 강조해요.",
      "3. O - 'evaluation of the potential harm'에서 평가의 역할이 언급돼요.",
      "4. X - 'place emphasis on'은 '강조하다'라는 뜻이에요.",
      "5. O - 인식과 평가는 주관적 요인이에요."
    ],
    tip: "[Tip] 'place emphasis on'은 핵심을 알려주는 강조 표현이에요!\n\n의미: ~에 초점을 맞추다, ~을 강조하다\n\n시험에서 'emphasis', 'focus', 'highlight' 같은 표현 뒤에 나오는 내용이 저자/이론의 핵심 주장이에요. 이 내용을 놓치면 안 돼요!"
  },
  {
    num: 11,
    sentence: "The perception of threat arises when the demands imposed upon an individual are perceived to exceed his or her felt ability to cope with those demands.",
    vocab: [
      "perception: 인식",
      "arise: 발생하다",
      "impose: 부과하다",
      "exceed: 초과하다",
      "cope with: ~에 대처하다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ > __________________ → 위협 인식 발생"
    ],
    quiz: [
      "1. 위협 인식은 요구가 대처 능력을 초과할 때 발생한다. ( O / X )",
      "2. 객관적인 요구의 크기만이 위협 인식을 결정한다. ( O / X )",
      "3. 'perceived to exceed'에서 주관적 인식의 중요성이 드러난다. ( O / X )",
      "4. 대처 능력이 요구보다 크면 위협을 인식하지 않는다. ( O / X )",
      "5. 이 문장은 위협 인식의 조건을 설명한다. ( O / X )"
    ],
    translation: "위협에 대한 인식은 발생한다 / 개인에게 부과된 요구가 / 그 요구에 대처하는 자신의 능력을 / 초과한다고 인식될 때.\n\n→ 개인에게 부과된 요구가 자신의 대처 능력을 초과한다고 인식될 때 위협에 대한 인식이 발생한다.",
    logic_answer: [
      "중심 소재: 위협 인식의 발생 조건",
      "논리 관계: 인식된 요구 > 인식된 대처 능력 → 위협 인식 발생"
    ],
    explanation: "이 문장은 조건-결과 구조예요. 위협 인식이 '언제' 발생하는지 조건을 설명해요. 핵심은 'perceived to exceed'(초과한다고 인식되다)예요. 객관적으로 요구가 크냐가 아니라, '요구가 능력을 초과한다고 인식되느냐'가 위협 인식을 결정해요. 'felt ability'(느끼는 능력)라는 표현도 주관적 측면을 강조해요. 앞 문장(10번)의 '인식과 평가' 강조와 연결되는 내용이에요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'demands... perceived to exceed... ability to cope'에서 직접 언급돼요.",
      "2. X - 반대예요. 'perceived'(인식된)라고 해서 주관적 인식이 중요해요.",
      "3. O - 'perceived'가 객관적 초과가 아닌 주관적 인식을 나타내요.",
      "4. O - 초과해야 위협을 인식하므로, 초과하지 않으면 인식하지 않아요.",
      "5. O - 'arises when'에서 조건을 설명하는 문장임을 알 수 있어요."
    ],
    tip: "[Tip] 'A arises when B' 구조는 조건-결과 관계를 나타내요!\n\nB = 조건 (요구가 능력 초과로 인식될 때)\nA = 결과 (위협 인식 발생)\n\n시험에서 이런 조건문이 나오면, 조건(B)과 결과(A)를 정확히 파악해야 해요. 조건을 뒤바꾸거나 결과를 바꾸는 선지가 오답으로 나와요."
  },
  {
    num: 12,
    sentence: "Psychological stress then is not defined solely in terms of the stimulus condition or solely in terms of the response variables but rather in terms of the transaction between the person and the environment.",
    vocab: [
      "define: 정의하다",
      "solely: 오직, 단독으로",
      "in terms of: ~의 관점에서",
      "stimulus condition: 자극 조건",
      "response variables: 반응 변수",
      "transaction: 상호작용, 거래"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ ✕ / __________________ ✕ → __________________ ○"
    ],
    quiz: [
      "1. 심리적 스트레스는 자극 조건만으로 정의되지 않는다. ( O / X )",
      "2. 심리적 스트레스는 반응 변수만으로 정의된다. ( O / X )",
      "3. 스트레스는 개인과 환경의 상호작용으로 정의된다. ( O / X )",
      "4. 'transaction'은 일방적 영향을 의미한다. ( O / X )",
      "5. 이 정의는 자극과 반응 모두를 배제한다. ( O / X )"
    ],
    translation: "그러므로 심리적 스트레스는 / 자극 조건의 관점에서만 정의되지 않고 / 반응 변수의 관점에서만 정의되지도 않으며, / 오히려 개인과 환경 사이의 상호작용의 관점에서 / 정의된다.\n\n→ 따라서 심리적 스트레스는 자극 조건만으로도, 반응 변수만으로도 정의되지 않고, 오히려 개인과 환경 사이의 상호작용으로 정의된다.",
    logic_answer: [
      "중심 소재: 심리적 스트레스의 정의",
      "논리 관계: 자극 조건만 ✕ / 반응 변수만 ✕ → 개인-환경 상호작용 ○"
    ],
    explanation: "이 문장은 'not A, not B, but C' 구조의 대조예요. 스트레스를 정의하는 세 가지 방식을 대조해요. A(자극만)와 B(반응만)를 부정하고, C(상호작용)를 긍정해요. 'transaction'(상호작용)이 핵심 개념으로, 자극과 반응의 일방적 관점을 넘어서 개인과 환경의 양방향적 관계를 강조해요. 'then'과 'rather'가 논리적 전환을 나타내요.",
    quiz_answers: "1. O  2. X  3. O  4. X  5. X",
    quiz_explanations: [
      "1. O - 'not defined solely in terms of the stimulus condition'에서 직접 부정해요.",
      "2. X - 'not... solely in terms of the response variables'라고 반응 변수만으로도 안 된다고 해요.",
      "3. O - 'in terms of the transaction between the person and the environment'에서 직접 언급돼요.",
      "4. X - 'transaction'은 '상호작용'으로 양방향적 관계예요.",
      "5. X - 배제하는 게 아니라, '만으로는' 안 된다는 거예요. 둘 다 포함한 상호작용이 핵심이에요."
    ],
    tip: "[Tip] 'not A, not B, but rather C' 구조에서는 C가 핵심이에요!\n\nA, B = 부정되는 관점들\nC = 저자가 지지하는 관점\n\n시험에서 A나 B를 정답으로 제시하면 오답이에요. 'but rather' 뒤의 C가 저자의 입장이에요. 'solely'(오직)라는 표현도 주목하세요 - 완전히 배제가 아니라 '그것만으로는' 안 된다는 뉘앙스예요."
  },
  {
    num: 13,
    sentence: "In so far as our actual knowledge is always limited or fragmentary the desire for coherency and order in our ideas leads to the extension of our knowledge by way of observation and experiment.",
    vocab: [
      "in so far as: ~하는 한, ~인 한에서",
      "fragmentary: 단편적인",
      "coherency: 일관성",
      "extension: 확장",
      "by way of: ~을 통해"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ (원인) → __________________ (결과)"
    ],
    quiz: [
      "1. 우리의 실제 지식은 항상 제한적이거나 단편적이다. ( O / X )",
      "2. 일관성과 질서에 대한 욕구가 지식 확장을 이끈다. ( O / X )",
      "3. 지식 확장은 오직 이론적 사색을 통해 이루어진다. ( O / X )",
      "4. 관찰과 실험은 지식 확장의 수단이다. ( O / X )",
      "5. 완전한 지식을 가지면 확장의 욕구가 없어진다. ( O / X )"
    ],
    translation: "우리의 실제 지식이 항상 제한적이거나 단편적인 한, / 우리 관념에서 일관성과 질서에 대한 욕구는 / 관찰과 실험을 통해 / 지식의 확장으로 이어진다.\n\n→ 우리의 실제 지식이 항상 제한적이거나 단편적이기 때문에, 관념의 일관성과 질서에 대한 욕구가 관찰과 실험을 통한 지식의 확장으로 이어진다.",
    logic_answer: [
      "중심 소재: 지식 확장의 동기",
      "논리 관계: 지식의 제한성 + 일관성 욕구 (원인) → 관찰/실험을 통한 지식 확장 (결과)"
    ],
    explanation: "이 문장은 인과 관계 구조예요. 'in so far as'(~하는 한)가 조건/원인을 도입해요. 지식이 제한적이기 때문에(원인), 일관성 욕구가 관찰과 실험을 통한 지식 확장으로 이어진다(결과)는 논리예요. 'by way of observation and experiment'에서 지식 확장의 구체적 수단이 제시돼요. 이론적 사색이 아니라 경험적 방법을 강조하는 점이 특징이에요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'our actual knowledge is always limited or fragmentary'에서 직접 언급돼요.",
      "2. O - 'desire for coherency and order... leads to the extension'에서 직접 언급돼요.",
      "3. X - 반대예요. 'by way of observation and experiment'라고 해서 경험적 방법을 강조해요.",
      "4. O - 'by way of observation and experiment'에서 수단으로 제시돼요.",
      "5. O - 'in so far as'는 조건이므로, 지식이 완전하면 이 논리가 적용되지 않아요."
    ],
    tip: "[Tip] 'in so far as'는 조건/이유를 나타내는 표현이에요!\n\n의미: ~하는 한, ~이기 때문에\n\n시험에서 'in so far as', 'insofar as', 'to the extent that' 같은 표현은 뒤따르는 내용의 전제나 조건을 설정해요. 이 조건이 충족될 때만 결론이 성립한다는 점을 기억하세요."
  },
  {
    num: 14,
    sentence: "We not only eliminate hypotheses found inconsistent with the facts, but we also employ theoretic arguments to correct the readings of observation or experimental results.",
    vocab: [
      "eliminate: 제거하다",
      "hypothesis: 가설",
      "inconsistent with: ~와 일치하지 않는",
      "employ: 사용하다, 활용하다",
      "theoretic: 이론적인",
      "readings: 판독, 해석"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ + __________________"
    ],
    quiz: [
      "1. 사실과 일치하지 않는 가설은 제거된다. ( O / X )",
      "2. 이론적 논거는 관찰 결과의 해석을 수정하는 데 사용된다. ( O / X )",
      "3. 관찰 결과는 항상 그대로 받아들여진다. ( O / X )",
      "4. 가설 제거와 관찰 수정은 모두 과학적 방법의 일부이다. ( O / X )",
      "5. 이 문장은 이론이 관찰보다 열등하다고 주장한다. ( O / X )"
    ],
    translation: "우리는 사실과 일치하지 않는 가설을 제거할 뿐만 아니라, / 이론적 논거를 사용하여 / 관찰이나 실험 결과의 판독을 / 수정하기도 한다.\n\n→ 우리는 사실과 일치하지 않는 가설을 제거할 뿐만 아니라, 이론적 논거를 사용하여 관찰이나 실험 결과의 해석을 수정하기도 한다.",
    logic_answer: [
      "중심 소재: 과학적 방법의 양면성",
      "논리 관계: 가설 제거 (사실 → 이론) + 관찰 수정 (이론 → 사실)"
    ],
    explanation: "이 문장은 'not only A but also B' 병렬 구조예요. 과학적 방법이 두 가지 방향으로 작동함을 보여줘요. A: 사실이 가설을 검증하여 제거 (사실 → 이론), B: 이론이 관찰 결과의 해석을 수정 (이론 → 사실). 특히 B가 중요한데, 관찰 결과가 절대적이지 않고 이론에 의해 '수정(correct)'될 수 있다는 점을 강조해요. 사실과 이론의 양방향적 관계가 핵심이에요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. X",
    quiz_explanations: [
      "1. O - 'eliminate hypotheses found inconsistent with the facts'에서 직접 언급돼요.",
      "2. O - 'employ theoretic arguments to correct the readings'에서 직접 언급돼요.",
      "3. X - 반대예요. 이론적 논거로 '수정(correct)'된다고 해요.",
      "4. O - 'not only... but also'에서 둘 다 포함된다는 것을 알 수 있어요.",
      "5. X - 반대예요. 이론이 관찰을 수정할 수 있다고 해서 이론의 역할을 인정해요."
    ],
    tip: "[Tip] 'not only A but also B' 구조에서는 B에 더 주목하세요!\n\n이 구조에서 A는 이미 알려진/당연한 것이고, B는 새로운/강조할 내용인 경우가 많아요.\n\n이 문장에서 '가설 제거'는 당연하고, '이론으로 관찰 수정'이 새로운 포인트예요. 시험에서 A만 언급하고 B를 무시하는 선지는 불완전한 답이에요."
  },
  {
    num: 15,
    sentence: "The fantasies of children and grown-ups, sometimes called daydreams, are always concerned with the future—these 'castles in the air' are the goal of their activity, set up in fictional form as models for real activity.",
    vocab: [
      "fantasy: 환상, 공상",
      "grown-up: 어른",
      "daydream: 백일몽",
      "be concerned with: ~과 관련되다",
      "castles in the air: 공중누각, 헛된 꿈",
      "set up: 설정하다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ = __________________ = __________________"
    ],
    quiz: [
      "1. 환상은 아이들과 어른 모두에게 나타난다. ( O / X )",
      "2. 백일몽은 항상 미래와 관련된다. ( O / X )",
      "3. '공중누각'은 현실 활동과 무관한 허무한 것을 의미한다. ( O / X )",
      "4. 환상은 실제 활동의 모델 역할을 한다. ( O / X )",
      "5. 저자는 환상이 실용적 가치가 있다고 본다. ( O / X )"
    ],
    translation: "아이와 어른의 환상은, / 때로 백일몽이라 불리는, / 항상 미래와 관련된다 / —이 '공중누각'은 그들 활동의 목표이다, / 실제 활동의 모델로서 허구적 형태로 설정된.\n\n→ 때로 백일몽이라 불리는 아이와 어른의 환상은 항상 미래와 관련되어 있으며, 이 '공중누각'은 실제 활동의 모델로서 허구적 형태로 설정된 그들 활동의 목표이다.",
    logic_answer: [
      "중심 소재: 환상/백일몽의 기능",
      "논리 관계: 환상/백일몽 = 미래 지향 = 실제 활동의 모델"
    ],
    explanation: "이 문장은 정의/동등 구조예요. 환상(fantasies)/백일몽(daydreams)/'공중누각(castles in the air)'이 모두 같은 것을 가리키며, 이것이 '미래 지향적'이고 '실제 활동의 모델'이라고 정의해요. 흥미로운 점은 '공중누각'이라는 보통 부정적인 표현을 긍정적 기능(활동의 목표, 모델)으로 재해석한다는 거예요. 환상이 단순한 도피가 아니라 실제 행동을 위한 청사진 역할을 한다는 게 핵심이에요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'children and grown-ups'에서 둘 다 언급돼요.",
      "2. O - 'are always concerned with the future'에서 직접 언급돼요.",
      "3. X - 반대예요. 여기서는 '활동의 목표', '실제 활동의 모델'로 긍정적으로 제시돼요.",
      "4. O - 'set up in fictional form as models for real activity'에서 직접 언급돼요.",
      "5. O - 환상이 '실제 활동의 모델'이라고 해서 실용적 가치를 인정해요."
    ],
    tip: "[Tip] 일반적으로 부정적인 표현이 긍정적으로 재해석될 때 주의하세요!\n\n'castles in the air'(공중누각)는 보통 '헛된 꿈'이라는 부정적 의미인데, 이 문장에서는 '활동의 목표', '모델'로 긍정적으로 사용돼요.\n\n시험에서 이런 재해석을 놓치고 일반적 의미로만 이해하면 틀릴 수 있어요. 문맥에서의 의미를 항상 확인하세요!"
  },
  {
    num: 16,
    sentence: "Do we always behave rationally? We certainly strive to, but our efforts may not be enough.",
    vocab: [
      "rationally: 이성적으로, 합리적으로",
      "strive to: ~하려고 노력하다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ (노력) ↔ __________________ (한계)"
    ],
    quiz: [
      "1. 저자는 인간이 항상 이성적으로 행동한다고 주장한다. ( O / X )",
      "2. 인간은 이성적으로 행동하려고 노력한다. ( O / X )",
      "3. 노력만으로 이성적 행동이 충분히 보장된다. ( O / X )",
      "4. 이 문장은 수사적 질문으로 시작한다. ( O / X )",
      "5. 'but'은 앞 내용과의 대조를 나타낸다. ( O / X )"
    ],
    translation: "우리는 항상 이성적으로 행동하는가? / 우리는 분명히 그렇게 하려고 노력하지만, / 우리의 노력은 충분하지 않을 수 있다.\n\n→ 우리는 항상 이성적으로 행동할까? 분명히 그렇게 하려고 노력하지만, 그 노력이 충분하지 않을 수 있다.",
    logic_answer: [
      "중심 소재: 인간의 이성적 행동",
      "논리 관계: 이성적 행동 노력 (노력) ↔ 노력의 불충분함 (한계)"
    ],
    explanation: "이 문장은 양보-대조 구조예요. 수사적 질문으로 시작해서 독자의 주의를 끈 뒤, 'certainly... but'으로 양보와 대조를 만들어요. 노력한다는 점은 인정하지만(양보), 그것이 충분하지 않을 수 있다(대조/한계)는 게 핵심이에요. 이어지는 문장들의 도입부로서, 인간 이성의 한계를 탐구할 것임을 예고해요.",
    quiz_answers: "1. X  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. X - 'may not be enough'에서 항상 이성적이지는 않다고 암시해요.",
      "2. O - 'We certainly strive to'에서 노력한다는 점은 인정해요.",
      "3. X - 반대예요. 'may not be enough'라고 불충분할 수 있다고 해요.",
      "4. O - 'Do we always behave rationally?'는 답을 유도하는 수사적 질문이에요.",
      "5. O - 'certainly... but'에서 but이 대조를 나타내요."
    ],
    tip: "[Tip] 'certainly... but' 구조는 양보-대조를 나타내요!\n\ncertainly = 인정하는 부분 (양보)\nbut = 핵심 주장 (대조)\n\n시험에서 양보절의 내용을 저자의 주장으로 착각하면 안 돼요! 'but' 뒤의 내용이 저자가 강조하고 싶은 핵심이에요."
  },
  {
    num: 17,
    sentence: "Our everyday behaviors mostly rely on fast thinking, which includes intuitive thoughts and entirely automatic mental activities.",
    vocab: [
      "rely on: ~에 의존하다",
      "intuitive: 직관적인",
      "automatic: 자동적인"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 일상 행동 → __________________ (= __________________ + __________________)"
    ],
    quiz: [
      "1. 일상적 행동은 주로 빠른 사고에 의존한다. ( O / X )",
      "2. 빠른 사고에는 직관적 사고가 포함된다. ( O / X )",
      "3. 빠른 사고는 의식적이고 분석적인 활동이다. ( O / X )",
      "4. 자동적 정신 활동은 빠른 사고의 일부이다. ( O / X )",
      "5. 저자는 일상 행동에서 느린 사고가 지배적이라고 본다. ( O / X )"
    ],
    translation: "우리의 일상적 행동은 대부분 빠른 사고에 의존한다, / 이는 직관적 사고와 / 완전히 자동적인 정신 활동을 포함한다.\n\n→ 우리의 일상적 행동은 대부분 직관적 사고와 완전히 자동적인 정신 활동을 포함하는 빠른 사고에 의존한다.",
    logic_answer: [
      "중심 소재: 일상 행동과 빠른 사고",
      "논리 관계: 일상 행동 → 빠른 사고 (= 직관적 사고 + 자동적 정신 활동)"
    ],
    explanation: "이 문장은 정의/설명 구조예요. 'fast thinking'이 무엇인지 정의해요. 핵심은 'mostly rely on'(대부분 의존한다)과 'which includes'(~을 포함한다)예요. 빠른 사고의 구성 요소로 '직관적 사고(intuitive thoughts)'와 '자동적 정신 활동(automatic mental activities)'이 제시돼요. 'entirely automatic'에서 의식적 통제 없이 일어난다는 점을 강조해요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. X",
    quiz_explanations: [
      "1. O - 'mostly rely on fast thinking'에서 직접 언급돼요.",
      "2. O - 'which includes intuitive thoughts'에서 직접 언급돼요.",
      "3. X - 반대예요. 'intuitive'와 'automatic'은 의식적/분석적과 반대예요.",
      "4. O - 'entirely automatic mental activities'가 fast thinking에 포함돼요.",
      "5. X - 반대예요. 'mostly rely on fast thinking'이라고 해요."
    ],
    tip: "[Tip] 'which includes'는 정의나 구성 요소를 설명하는 표현이에요!\n\n앞 개념 = 정의되는 것 (fast thinking)\nwhich includes 뒤 = 구성 요소 (intuitive thoughts, automatic activities)\n\n시험에서 개념의 정의를 묻는 문제가 나오면, 'include', 'consist of', 'comprise' 뒤의 내용을 잘 파악하세요."
  },
  {
    num: 18,
    sentence: "The downside of this is that we tend to fall for traps of fast thinking; we often end up with foolish thoughts and inappropriate impulses.",
    vocab: [
      "downside: 단점, 부정적 측면",
      "fall for: ~에 속다, 빠지다",
      "trap: 함정",
      "end up with: 결국 ~하게 되다",
      "impulse: 충동"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 빠른 사고의 단점 = __________________ → __________________"
    ],
    quiz: [
      "1. 빠른 사고에는 단점이 있다. ( O / X )",
      "2. 우리는 빠른 사고의 함정에 빠지는 경향이 있다. ( O / X )",
      "3. 빠른 사고는 항상 현명한 결과를 낳는다. ( O / X )",
      "4. 부적절한 충동은 빠른 사고의 결과일 수 있다. ( O / X )",
      "5. 저자는 빠른 사고에 대해 긍정적 평가만 한다. ( O / X )"
    ],
    translation: "이것의 단점은 / 우리가 빠른 사고의 함정에 빠지는 경향이 있다는 것이다; / 우리는 종종 어리석은 생각과 / 부적절한 충동으로 끝나게 된다.\n\n→ 이것의 단점은 우리가 빠른 사고의 함정에 빠지는 경향이 있다는 것이며, 결국 어리석은 생각과 부적절한 충동을 갖게 된다는 것이다.",
    logic_answer: [
      "중심 소재: 빠른 사고의 단점",
      "논리 관계: 빠른 사고의 단점 = 함정에 빠짐 → 어리석은 생각/부적절한 충동"
    ],
    explanation: "이 문장은 인과 관계 구조예요. 'downside'(단점)라는 단어가 부정적 측면을 도입해요. 빠른 사고에 의존하면(원인), 함정에 빠져서 어리석은 생각과 부적절한 충동이 생긴다(결과)는 논리예요. 'tend to'(~하는 경향이 있다)와 'often'(종종)에서 빈번하게 일어나는 문제임을 알 수 있어요. 앞 문장(2번)에서 빠른 사고를 설명한 후, 그 단점을 제시하는 구조예요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. X",
    quiz_explanations: [
      "1. O - 'The downside of this'에서 단점이 있음을 명시해요.",
      "2. O - 'tend to fall for traps of fast thinking'에서 직접 언급돼요.",
      "3. X - 반대예요. 'foolish thoughts'라고 해서 어리석은 결과가 나올 수 있어요.",
      "4. O - 'inappropriate impulses'가 결과로 언급돼요.",
      "5. X - 반대예요. 'downside', 'traps', 'foolish'에서 부정적 평가가 드러나요."
    ],
    tip: "[Tip] 'downside'는 단점/부정적 측면을 도입하는 신호예요!\n\n비슷한 표현: drawback, disadvantage, negative aspect, problem\n\n시험에서 이런 표현이 나오면 뒤에 부정적 내용이 온다는 것을 예상하세요. 반대로 'upside', 'advantage'는 긍정적 내용을 도입해요."
  },
  {
    num: 19,
    sentence: "In one psychological study of confirming-evidence bias, two groups read two reports of carefully conducted research on the effectiveness of the death penalty as deterrent to crime.",
    vocab: [
      "confirming-evidence bias: 확증 편향",
      "conduct: 수행하다, 실시하다",
      "effectiveness: 효과성",
      "death penalty: 사형제도",
      "deterrent: 억제책, 억제 수단"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 연구 설계: 두 집단 → __________________ 읽음"
    ],
    quiz: [
      "1. 이 연구는 확증 편향에 관한 것이다. ( O / X )",
      "2. 두 집단이 같은 두 보고서를 읽었다. ( O / X )",
      "3. 연구 보고서는 사형제도의 범죄 억제 효과에 관한 것이다. ( O / X )",
      "4. 연구 보고서는 대충 수행된 연구였다. ( O / X )",
      "5. 이 문장은 연구의 결과를 설명한다. ( O / X )"
    ],
    translation: "확증 편향에 관한 한 심리학 연구에서, / 두 집단이 두 보고서를 읽었다 / 범죄 억제책으로서 사형제도의 효과성에 대해 / 신중하게 수행된 연구의.\n\n→ 확증 편향에 관한 한 심리학 연구에서, 두 집단이 범죄 억제책으로서의 사형제도 효과성에 대해 신중하게 수행된 연구 보고서 두 개를 읽었다.",
    logic_answer: [
      "중심 소재: 확증 편향 연구",
      "논리 관계: 연구 설계: 두 집단 → 사형제도 효과 연구 보고서 두 개 읽음"
    ],
    explanation: "이 문장은 연구 설계/배경 설명 구조예요. 'confirming-evidence bias'(확증 편향)가 연구 주제이고, 두 집단이 사형제도의 억제 효과에 관한 보고서 두 개를 읽었다는 실험 설계를 설명해요. 'carefully conducted'에서 보고서의 질이 좋았음을 강조해요. 이는 다음 문장(결과)을 위한 배경 설정이에요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. X",
    quiz_explanations: [
      "1. O - 'psychological study of confirming-evidence bias'에서 직접 언급돼요.",
      "2. O - 'two groups read two reports'에서 알 수 있어요.",
      "3. O - 'effectiveness of the death penalty as deterrent to crime'에서 직접 언급돼요.",
      "4. X - 반대예요. 'carefully conducted research'라고 해서 신중하게 수행됐어요.",
      "5. X - 이 문장은 연구 설계(방법)를 설명해요. 결과는 다음 문장에서 나와요."
    ],
    tip: "[Tip] 연구 관련 지문에서는 설계-방법-결과-해석의 흐름을 파악하세요!\n\n이 문장 = 연구 설계 (배경, 방법)\n다음 문장 = 연구 결과\n\n시험에서 연구의 '설계'와 '결과'를 혼동하면 안 돼요. 이 문장은 무엇을 했는지(방법)를 설명하고, 어떤 결과가 나왔는지는 아직 안 나왔어요."
  },
  {
    num: 20,
    sentence: "Despite being exposed to solid scientific information supporting counter-arguments, the members of both groups became even more convinced of the validity of their own position after reading both reports.",
    vocab: [
      "despite: ~에도 불구하고",
      "be exposed to: ~에 노출되다",
      "solid: 확실한, 탄탄한",
      "counter-argument: 반론",
      "convinced: 확신하는",
      "validity: 타당성"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ (양보) → __________________ (역설적 결과)"
    ],
    quiz: [
      "1. 참가자들은 반론을 뒷받침하는 과학적 정보에 노출되었다. ( O / X )",
      "2. 반론에 노출된 후 참가자들의 입장이 약해졌다. ( O / X )",
      "3. 두 집단 모두 자신의 입장에 더 확신을 갖게 되었다. ( O / X )",
      "4. 이 결과는 확증 편향을 보여준다. ( O / X )",
      "5. 'despite'는 예상과 일치하는 결과를 나타낸다. ( O / X )"
    ],
    translation: "반론을 뒷받침하는 확실한 과학적 정보에 / 노출되었음에도 불구하고, / 두 집단의 구성원들은 더욱 확신하게 되었다 / 자신의 입장의 타당성에 대해 / 두 보고서를 읽은 후.\n\n→ 반론을 뒷받침하는 확실한 과학적 정보에 노출되었음에도 불구하고, 두 집단의 구성원들은 두 보고서를 모두 읽은 후 자신의 입장의 타당성에 대해 오히려 더 확신하게 되었다.",
    logic_answer: [
      "중심 소재: 확증 편향의 실험 결과",
      "논리 관계: 반론 정보에 노출 (양보) → 오히려 더 확신 (역설적 결과)"
    ],
    explanation: "이 문장은 양보-역설 구조예요. 'Despite'가 양보를 도입해요. 일반적으로 반론에 노출되면 입장이 흔들릴 것 같지만(예상), 오히려 'even more convinced'(더 확신)하게 됐다(역설적 결과)는 게 핵심이에요. 이것이 바로 '확증 편향'의 본질이에요 - 자기 생각과 다른 정보를 봐도 원래 믿음이 강화되는 현상이에요. 'solid scientific information'에서 정보의 질이 좋았음에도 결과가 이랬다는 점을 강조해요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'exposed to solid scientific information supporting counter-arguments'에서 직접 언급돼요.",
      "2. X - 반대예요. 'even more convinced'라고 해서 오히려 강해졌어요.",
      "3. O - 'both groups became even more convinced of the validity of their own position'에서 직접 언급돼요.",
      "4. O - 이 역설적 결과가 확증 편향의 전형적 예시예요.",
      "5. X - 반대예요. 'despite'는 예상과 다른/반대되는 결과를 도입해요."
    ],
    tip: "[Tip] 'Despite + A, B' 구조에서 B가 핵심이에요!\n\nA = 예상되는 원인/조건\nB = 예상과 다른 실제 결과\n\n'despite', 'although', 'even though' 같은 양보 표현이 나오면, 뒤에 나오는 내용이 예상과 다르다는 것을 파악해야 해요. 이 차이가 저자가 강조하는 포인트예요."
  },
  {
    num: 21,
    sentence: "A very large body of work in AI begins with the assumptions that information and knowledge should be represented in first-order logic and that reasoning is theorem proving.",
    vocab: [
      "a large body of work: 방대한 연구",
      "assumption: 가정, 전제",
      "first-order logic: 1차 논리",
      "theorem proving: 정리 증명"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: AI 연구의 전제 = __________________ + __________________"
    ],
    quiz: [
      "1. 많은 AI 연구가 특정 가정에서 출발한다. ( O / X )",
      "2. 이 가정에 따르면 정보는 1차 논리로 표현되어야 한다. ( O / X )",
      "3. 추론은 정리 증명과 동일시된다. ( O / X )",
      "4. 'a very large body of work'은 소수의 연구를 의미한다. ( O / X )",
      "5. 저자는 이 가정들을 무비판적으로 수용한다. ( O / X )"
    ],
    translation: "AI의 매우 방대한 연구는 / 다음의 가정에서 시작한다 / 정보와 지식이 1차 논리로 표현되어야 하고 / 추론이 정리 증명이라는.\n\n→ AI 분야의 매우 방대한 연구가 정보와 지식은 1차 논리로 표현되어야 하고 추론은 정리 증명이라는 가정에서 출발한다.",
    logic_answer: [
      "중심 소재: AI 연구의 기본 가정",
      "논리 관계: AI 연구의 전제 = 1차 논리로 표현 + 추론 = 정리 증명"
    ],
    explanation: "이 문장은 전제/가정 제시 구조예요. 'begins with the assumptions'에서 AI 연구의 출발점(전제)을 설명해요. 두 가지 가정이 제시돼요: (1) 정보/지식은 1차 논리로 표현되어야 한다, (2) 추론은 정리 증명이다. 'a very large body of work'은 이런 접근이 주류임을 보여줘요. 다음 문장에서 이 가정이 비판될 것을 예고하는 배경 설정이에요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. X",
    quiz_explanations: [
      "1. O - 'begins with the assumptions'에서 가정에서 출발함을 알 수 있어요.",
      "2. O - 'information and knowledge should be represented in first-order logic'에서 직접 언급돼요.",
      "3. O - 'reasoning is theorem proving'에서 직접 언급돼요.",
      "4. X - 반대예요. 'a very large body of work'은 방대한/많은 연구를 의미해요.",
      "5. X - 문장 자체는 중립적이지만, 다음 문장(7번)에서 비판이 나와요."
    ],
    tip: "[Tip] 'begins with the assumption(s) that'은 전제를 제시하는 표현이에요!\n\n의미: ~라는 가정에서 출발한다\n\n시험에서 이런 표현이 나오면, 이 가정이 나중에 비판되거나 검토될 가능성이 높아요. '가정'은 '사실'이 아니라 '전제'일 뿐이라는 점을 기억하세요."
  },
  {
    num: 22,
    sentence: "On the face of it, this seems implausible as a model for people—it certainly doesn't seem as if we are using logic when we are thinking.",
    vocab: [
      "on the face of it: 표면적으로, 겉보기에",
      "implausible: 그럴듯하지 않은, 믿기 어려운"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: AI 모델 = 인간 사고의 모델로 __________________ (이유: __________________)"
    ],
    quiz: [
      "1. 저자는 AI 모델이 인간 사고의 모델로 적절하다고 본다. ( O / X )",
      "2. 'implausible'은 그럴듯하지 않다는 의미이다. ( O / X )",
      "3. 우리가 사고할 때 논리를 사용하는 것처럼 보인다. ( O / X )",
      "4. 'on the face of it'은 표면적 판단을 나타낸다. ( O / X )",
      "5. 이 문장은 앞 문장의 가정을 비판한다. ( O / X )"
    ],
    translation: "표면적으로 보면, / 이것은 인간의 모델로서 그럴듯하지 않아 보인다 / —우리가 사고할 때 논리를 사용하고 있는 것처럼 / 보이지 않는다는 점에서.\n\n→ 겉보기에 이것은 인간에 대한 모델로서 그럴듯해 보이지 않는다 — 우리가 사고할 때 논리를 사용하고 있는 것처럼 보이지 않기 때문이다.",
    logic_answer: [
      "중심 소재: AI 모델의 인간 적용 가능성",
      "논리 관계: AI 모델 = 인간 사고의 모델로 부적절 (이유: 인간은 논리 사용하는 것 같지 않음)"
    ],
    explanation: "이 문장은 비판/평가 구조예요. 앞 문장(6번)의 AI 가정을 'implausible'(그럴듯하지 않은)이라고 비판해요. 이유는 '우리가 사고할 때 논리를 사용하는 것 같지 않다'는 거예요. 'on the face of it'(겉보기에)은 저자가 단정짓지 않고 신중하게 말하는 표현이에요. 대시(—) 뒤에 비판의 근거가 제시돼요.",
    quiz_answers: "1. X  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. X - 반대예요. 'implausible'이라고 해서 적절하지 않다고 봐요.",
      "2. O - 'implausible'은 'not plausible', 즉 그럴듯하지 않다는 뜻이에요.",
      "3. X - 반대예요. 'doesn't seem as if we are using logic'이라고 해요.",
      "4. O - 'on the face of it'은 '표면적으로, 겉보기에'라는 의미예요.",
      "5. O - 앞 문장의 AI 가정이 인간 모델로 적절하지 않다고 비판해요."
    ],
    tip: "[Tip] 'on the face of it'은 표면적 판단을 나타내요!\n\n의미: 겉보기에는, 표면적으로는\n\n이 표현 뒤에는 보통 화자의 초기 인상이나 잠정적 판단이 와요. 더 깊은 분석 후에 다른 결론이 나올 수 있다는 뉘앙스가 있어요. 시험에서 이런 표현을 확정적 주장으로 오해하면 안 돼요."
  },
  {
    num: 23,
    sentence: "During the nineteenth century, breakthroughs were made concerning the correlation between the left hemisphere of the brain and language.",
    vocab: [
      "breakthrough: 돌파구, 획기적 발견",
      "concerning: ~에 관한",
      "correlation: 상관관계",
      "hemisphere: 반구"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 19세기 발견 = __________________ ↔ __________________의 상관관계"
    ],
    quiz: [
      "1. 19세기에 뇌와 언어에 관한 발견이 있었다. ( O / X )",
      "2. 발견은 뇌의 오른쪽 반구와 언어의 관계에 관한 것이었다. ( O / X )",
      "3. 'breakthrough'는 획기적인 발견을 의미한다. ( O / X )",
      "4. 왼쪽 반구와 언어 사이에 상관관계가 발견되었다. ( O / X )",
      "5. 이 문장은 구체적인 연구자 이름을 언급한다. ( O / X )"
    ],
    translation: "19세기에, / 획기적인 발견이 이루어졌다 / 뇌의 왼쪽 반구와 언어 사이의 / 상관관계에 관한.\n\n→ 19세기에 뇌의 왼쪽 반구와 언어 사이의 상관관계에 관한 획기적인 발견이 이루어졌다.",
    logic_answer: [
      "중심 소재: 뇌와 언어의 관계 연구",
      "논리 관계: 19세기 발견 = 좌반구 ↔ 언어의 상관관계"
    ],
    explanation: "이 문장은 역사적 배경/도입 구조예요. 19세기에 이루어진 중요한 발견을 소개해요. 핵심은 'left hemisphere'(좌반구)와 'language'(언어)의 'correlation'(상관관계)이에요. 'breakthroughs'(획기적 발견)라는 표현에서 중요한 발견이었음을 알 수 있어요. 다음 문장에서 구체적인 연구자와 내용이 나올 것을 예고하는 도입부예요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'breakthroughs were made concerning the correlation between... brain and language'에서 알 수 있어요.",
      "2. X - 반대예요. 'left hemisphere'(왼쪽 반구)라고 해요.",
      "3. O - 'breakthrough'는 획기적 발견, 돌파구라는 뜻이에요.",
      "4. O - 'correlation between the left hemisphere... and language'에서 직접 언급돼요.",
      "5. X - 이 문장에는 연구자 이름이 없어요. 다음 문장(9번)에서 나와요."
    ],
    tip: "[Tip] 역사적 배경을 제시하는 문장은 도입부 역할을 해요!\n\n'During the [시대]' + 중요한 발견/변화\n\n시험에서 이런 도입부가 나오면, 뒤에 구체적인 내용(연구자, 방법, 결과)이 따라올 것을 예상하세요. 시대적 맥락을 파악하는 것이 중요해요."
  },
  {
    num: 24,
    sentence: "Neurologists Paul Broca and Carl Wernicke undertook research in this area and found that people who had damage to a certain region in the left hemisphere of the brain had difficulties with speech and language.",
    vocab: [
      "neurologist: 신경학자",
      "undertake: 착수하다, 수행하다",
      "damage: 손상",
      "region: 영역",
      "difficulty: 어려움, 장애"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________"
    ],
    quiz: [
      "1. 브로카와 베르니케는 신경학자이다. ( O / X )",
      "2. 그들은 뇌의 오른쪽 반구를 연구했다. ( O / X )",
      "3. 좌반구의 특정 영역 손상은 언어 장애를 유발한다. ( O / X )",
      "4. 이 연구는 뇌와 언어의 관계를 밝혔다. ( O / X )",
      "5. 연구 결과 모든 뇌 영역이 언어와 관련됨이 밝혀졌다. ( O / X )"
    ],
    translation: "신경학자 폴 브로카와 카를 베르니케는 / 이 분야에서 연구를 수행했고 / 발견했다 / 뇌의 왼쪽 반구의 특정 영역에 손상이 있는 사람들이 / 말과 언어에 어려움을 겪는다는 것을.\n\n→ 신경학자 폴 브로카와 카를 베르니케는 이 분야에서 연구를 수행하여, 뇌의 왼쪽 반구의 특정 영역에 손상이 있는 사람들이 말과 언어에 어려움을 겪는다는 것을 발견했다.",
    logic_answer: [
      "중심 소재: 브로카와 베르니케의 연구",
      "논리 관계: 좌반구 특정 영역 손상 → 언어/말 장애"
    ],
    explanation: "이 문장은 연구 결과 제시 구조예요. 앞 문장(8번)의 '19세기 발견'을 구체화해요. 브로카와 베르니케가 발견한 것은 '좌반구의 특정 영역 손상 → 언어 장애'라는 인과관계예요. 'found that'이 연구 결과를 도입해요. 'a certain region'에서 특정 부위가 언어와 관련됨을 알 수 있어요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'Neurologists Paul Broca and Carl Wernicke'에서 직접 언급돼요.",
      "2. X - 반대예요. 'left hemisphere'(왼쪽 반구)를 연구했어요.",
      "3. O - 'damage to a certain region in the left hemisphere... had difficulties with speech and language'에서 직접 언급돼요.",
      "4. O - 좌반구와 언어의 관계를 밝힌 연구예요.",
      "5. X - 반대예요. 'a certain region'(특정 영역)이라고 해서 전체가 아닌 특정 부위예요."
    ],
    tip: "[Tip] 'found that'은 연구 결과를 도입하는 핵심 표현이에요!\n\n연구자 + found that + 결과\n\n시험에서 'found that', 'discovered that', 'revealed that' 뒤에 나오는 내용이 연구의 핵심 발견이에요. 이 내용을 정확히 파악해야 해요."
  },
  {
    num: 25,
    sentence: "Language is often era specific, and historians must be extremely cautious not to read modern definitions into past times and thereby corrupt meaning.",
    vocab: [
      "era specific: 시대 특수적인",
      "cautious: 조심스러운, 신중한",
      "read into: ~을 (잘못) 해석하다",
      "thereby: 그로 인해",
      "corrupt: 왜곡하다, 손상시키다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 언어의 특성(__________________)  → 역사가의 주의사항(__________________)"
    ],
    quiz: [
      "1. 언어는 종종 시대에 따라 다르다. ( O / X )",
      "2. 역사가는 현대적 정의를 과거에 적용해도 된다. ( O / X )",
      "3. 현대적 정의를 과거에 적용하면 의미가 왜곡될 수 있다. ( O / X )",
      "4. 'read into'는 올바르게 해석한다는 의미이다. ( O / X )",
      "5. 역사가에게 신중함이 요구된다. ( O / X )"
    ],
    translation: "언어는 종종 시대 특수적이다, / 그리고 역사가들은 매우 조심해야 한다 / 현대적 정의를 과거에 / 잘못 적용하지 않도록 / 그로 인해 의미를 왜곡하지 않도록.\n\n→ 언어는 종종 시대에 따라 다르기 때문에, 역사가들은 현대적 정의를 과거에 적용하여 의미를 왜곡하지 않도록 매우 조심해야 한다.",
    logic_answer: [
      "중심 소재: 역사 연구에서의 언어 해석",
      "논리 관계: 언어의 특성(시대 특수성) → 역사가의 주의사항(현대 정의 적용 금지)"
    ],
    explanation: "이 문장은 인과-경고 구조예요. '언어가 시대 특수적'(원인)이기 때문에 '역사가는 조심해야 한다'(결과/경고)는 논리예요. 'read modern definitions into past times'는 현대적 의미를 과거에 부당하게 적용하는 것, 즉 시대착오적 해석을 의미해요. 'thereby corrupt meaning'에서 그 결과로 의미 왜곡이 일어난다고 경고해요.",
    quiz_answers: "1. O  2. X  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'Language is often era specific'에서 직접 언급돼요.",
      "2. X - 반대예요. 'must be extremely cautious not to read modern definitions into past times'라고 해서 하면 안 돼요.",
      "3. O - 'thereby corrupt meaning'에서 의미 왜곡이 결과로 제시돼요.",
      "4. X - 반대예요. 'read into'는 (부당하게) 해석하다, 잘못 적용하다는 뜻이에요.",
      "5. O - 'must be extremely cautious'에서 신중함이 요구됨을 알 수 있어요."
    ],
    tip: "[Tip] 'must be cautious not to V'는 경고/주의 표현이에요!\n\n의미: V하지 않도록 조심해야 한다\n\n시험에서 'cautious', 'careful', 'beware' 같은 경고 표현이 나오면, 'not to' 뒤에 피해야 할 행동이 나와요. 이 행동이 문제 상황을 나타내요."
  },
  {
    num: 26,
    sentence: "Words may have had a specific meaning or use in the past that is far different from current usage.",
    vocab: [
      "specific: 특정한, 구체적인",
      "current: 현재의",
      "usage: 용법, 사용"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ ≠ __________________"
    ],
    quiz: [
      "1. 단어의 과거 의미가 현재와 다를 수 있다. ( O / X )",
      "2. 단어의 의미는 시간이 지나도 변하지 않는다. ( O / X )",
      "3. 과거와 현재의 용법 차이가 클 수 있다. ( O / X )",
      "4. 'far different'는 큰 차이를 나타낸다. ( O / X )",
      "5. 이 문장은 앞 문장의 주장을 뒷받침한다. ( O / X )"
    ],
    translation: "단어는 과거에 특정한 의미나 용법을 / 가졌을 수 있다 / 현재 용법과 매우 다른.\n\n→ 단어는 현재 용법과 매우 다른 특정한 의미나 용법을 과거에 가졌을 수 있다.",
    logic_answer: [
      "중심 소재: 단어 의미의 시대적 변화",
      "논리 관계: 과거 의미/용법 ≠ 현재 의미/용법"
    ],
    explanation: "이 문장은 부연/예시 구조예요. 앞 문장(10번)의 'language is era specific'을 구체화해요. 단어의 과거 의미가 현재와 '매우 다를 수 있다(far different)'는 점을 강조해요. 'may have had'에서 가능성을 나타내고, 'far different'에서 차이의 크기를 강조해요. 역사 연구에서 단어의 시대적 의미 변화를 고려해야 하는 이유를 뒷받침해요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'may have had a specific meaning... far different from current usage'에서 알 수 있어요.",
      "2. X - 반대예요. 과거와 현재가 'far different'할 수 있다고 해요.",
      "3. O - 'far different'에서 큰 차이가 있을 수 있음을 알 수 있어요.",
      "4. O - 'far different'는 '매우 다른', 즉 큰 차이를 나타내요.",
      "5. O - 앞 문장의 'era specific'을 구체적으로 뒷받침해요."
    ],
    tip: "[Tip] 'may have + p.p.'는 과거 가능성을 나타내요!\n\n의미: ~했을 수도 있다\n\n시험에서 이런 표현은 확정적 사실이 아닌 가능성을 나타내요. 'may', 'might', 'could' 같은 조동사가 있으면 단정적으로 해석하면 안 돼요."
  },
  {
    num: 27,
    sentence: "Traditionally, many linguists stressed grammatical competence while teaching English, but in recent years, the majority of educators have become more aware of the fallacy of this approach.",
    vocab: [
      "traditionally: 전통적으로",
      "stress: 강조하다",
      "grammatical competence: 문법적 능력",
      "majority: 대다수",
      "fallacy: 오류, 허위"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ (과거) → __________________ (최근)"
    ],
    quiz: [
      "1. 전통적으로 언어학자들은 문법 능력을 강조했다. ( O / X )",
      "2. 최근에는 이 접근법이 오류임이 인식되고 있다. ( O / X )",
      "3. 대다수의 교육자들이 문법 중심 접근을 여전히 지지한다. ( O / X )",
      "4. 'fallacy'는 이 접근법에 대한 비판적 평가를 나타낸다. ( O / X )",
      "5. 이 문장은 시간에 따른 인식 변화를 보여준다. ( O / X )"
    ],
    translation: "전통적으로, / 많은 언어학자들이 영어를 가르치면서 문법적 능력을 강조했다, / 그러나 최근에는, / 대다수의 교육자들이 이 접근법의 오류를 / 더 잘 인식하게 되었다.\n\n→ 전통적으로 많은 언어학자들이 영어를 가르칠 때 문법적 능력을 강조했지만, 최근에는 대다수의 교육자들이 이 접근법의 오류를 더 잘 인식하게 되었다.",
    logic_answer: [
      "중심 소재: 영어 교육의 접근법 변화",
      "논리 관계: 문법 능력 강조 (과거) → 그 오류 인식 (최근)"
    ],
    explanation: "이 문장은 시간적 대조 구조예요. 'Traditionally... but in recent years'로 과거와 현재를 대조해요. 과거에는 문법을 강조했지만, 최근에는 그것이 'fallacy'(오류)임을 인식하게 됐다는 거예요. 'fallacy'라는 강한 비판적 단어에서 저자(또는 최근 교육자들)의 입장이 드러나요. 문법 중심 접근의 문제점이 다음 문장에서 구체화될 거예요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'Traditionally, many linguists stressed grammatical competence'에서 직접 언급돼요.",
      "2. O - 'have become more aware of the fallacy of this approach'에서 직접 언급돼요.",
      "3. X - 반대예요. 'the majority... have become aware of the fallacy'라고 해서 오류를 인식해요.",
      "4. O - 'fallacy'(오류)는 이 접근법에 대한 부정적/비판적 평가예요.",
      "5. O - 'Traditionally... but in recent years'에서 시간에 따른 변화를 보여줘요."
    ],
    tip: "[Tip] 'Traditionally... but in recent years/now' 구조는 변화를 나타내요!\n\nTraditionally = 과거 상태/관점\nbut + recent/now = 현재의 변화된 상태/관점\n\n시험에서 이런 시간 대조 구조가 나오면, 'but' 뒤의 현재 상태가 저자가 강조하는 포인트일 가능성이 높아요."
  },
  {
    num: 28,
    sentence: "It has been found out, without vocabulary to put on top of the grammar system, the learners can actually say very little despite being able to manipulate complex grammatical structures in exercise drills.",
    vocab: [
      "find out: 발견하다, 알아내다",
      "put on top of: ~위에 놓다",
      "manipulate: 다루다, 조작하다",
      "drill: 반복 연습"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ 없이 → __________________ (문법 능력에도 불구하고)"
    ],
    quiz: [
      "1. 어휘 없이는 문법만으로 실제 말하기가 어렵다. ( O / X )",
      "2. 복잡한 문법 구조를 다룰 수 있으면 의사소통이 가능하다. ( O / X )",
      "3. 'despite'는 예상과 다른 결과를 나타낸다. ( O / X )",
      "4. 어휘가 문법 시스템 위에 놓여야 한다. ( O / X )",
      "5. 이 문장은 문법 중심 접근의 한계를 보여준다. ( O / X )"
    ],
    translation: "발견되었다 / 문법 시스템 위에 놓을 어휘 없이는, / 학습자들이 실제로 거의 말할 수 없다 / 연습 훈련에서 복잡한 문법 구조를 다룰 수 있음에도 불구하고.\n\n→ 문법 시스템 위에 놓을 어휘 없이는, 학습자들이 연습 훈련에서 복잡한 문법 구조를 다룰 수 있음에도 불구하고 실제로는 거의 말할 수 없다는 것이 밝혀졌다.",
    logic_answer: [
      "중심 소재: 어휘와 문법의 관계",
      "논리 관계: 어휘 없이 → 실제 말하기 불가 (문법 능력에도 불구하고)"
    ],
    explanation: "이 문장은 양보-결과 구조예요. 앞 문장(12번)의 '문법 중심 접근의 오류'를 구체화해요. 핵심은 'despite being able to manipulate complex grammatical structures'(문법 구조를 다룰 수 있음에도)라는 양보절과 'can actually say very little'(거의 말할 수 없다)이라는 역설적 결과예요. 어휘 없이 문법만 있으면 실제 의사소통이 안 된다는 게 포인트예요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'without vocabulary... can actually say very little'에서 직접 언급돼요.",
      "2. X - 반대예요. 문법 구조를 다룰 수 있어도 'say very little'이라고 해요.",
      "3. O - 'despite'는 '~에도 불구하고'로, 예상과 다른 결과를 도입해요.",
      "4. O - 'vocabulary to put on top of the grammar system'에서 어휘가 문법 위에 있어야 함을 알 수 있어요.",
      "5. O - 문법만으로는 실제 말하기가 어렵다는 점에서 문법 중심 접근의 한계를 보여줘요."
    ],
    tip: "[Tip] 'despite + 긍정적 조건, 부정적 결과' 구조는 역설을 나타내요!\n\n이 문장: 문법 능력 있음(긍정) + 말 못함(부정)\n\n시험에서 이런 역설적 구조가 나오면, 조건과 결과의 불일치가 핵심 메시지예요. '~해도 소용없다'는 논리를 파악하세요."
  },
  {
    num: 29,
    sentence: "Researchers looked at mothers' response to \"primitive\" and to \"well-formed\" constructions uttered by the child and asked whether the response indicated comprehension or failure to comprehend the child's meaning.",
    vocab: [
      "response: 반응",
      "primitive: 초보적인, 원시적인",
      "well-formed: 잘 형성된, 문법적인",
      "construction: 구문",
      "utter: 발화하다",
      "comprehension: 이해",
      "indicate: 나타내다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 연구 대상: 어머니의 반응 (__________________ vs __________________)"
    ],
    quiz: [
      "1. 연구자들은 어머니의 반응을 조사했다. ( O / X )",
      "2. 연구는 아이의 초보적 구문과 잘 형성된 구문 모두를 다뤘다. ( O / X )",
      "3. 연구 질문은 어머니가 아이의 의미를 이해했는지에 관한 것이다. ( O / X )",
      "4. 'primitive constructions'은 문법적으로 완벽한 문장을 의미한다. ( O / X )",
      "5. 이 문장은 연구의 결과를 제시한다. ( O / X )"
    ],
    translation: "연구자들은 살펴보았다 / 아이가 발화한 \"초보적\" 구문과 \"잘 형성된\" 구문에 대한 / 어머니의 반응을 / 그리고 물었다 / 그 반응이 아이의 의미에 대한 이해를 나타내는지 / 아니면 이해 실패를 나타내는지.\n\n→ 연구자들은 아이가 발화한 \"초보적\" 구문과 \"잘 형성된\" 구문에 대한 어머니의 반응을 살펴보고, 그 반응이 아이의 의미를 이해했음을 나타내는지 아니면 이해하지 못했음을 나타내는지를 물었다.",
    logic_answer: [
      "중심 소재: 아이의 발화에 대한 어머니 반응 연구",
      "논리 관계: 연구 대상: 어머니의 반응 (초보적 구문 vs 잘 형성된 구문)"
    ],
    explanation: "이 문장은 연구 설계/방법 설명 구조예요. 연구자들이 무엇을 조사했는지(방법)를 설명해요. 핵심은 'primitive vs well-formed constructions'(초보적 vs 잘 형성된 구문)의 대조예요. 연구 질문은 어머니의 반응이 '이해'를 나타내는지 '이해 실패'를 나타내는지예요. 다음 문장에서 결과가 나올 거예요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. X",
    quiz_explanations: [
      "1. O - 'looked at mothers' response'에서 직접 언급돼요.",
      "2. O - 'primitive and well-formed constructions'에서 둘 다 다뤘음을 알 수 있어요.",
      "3. O - 'whether the response indicated comprehension or failure to comprehend'에서 알 수 있어요.",
      "4. X - 반대예요. 'primitive'는 '초보적인'으로, 'well-formed'와 대조돼요.",
      "5. X - 이 문장은 연구 방법/질문을 설명해요. 결과는 다음 문장에서 나와요."
    ],
    tip: "[Tip] 'asked whether A or B' 구조는 연구 질문을 나타내요!\n\n의미: A인지 B인지 물었다\n\n시험에서 연구 설계(방법)와 결과를 구분해야 해요. 'looked at', 'examined', 'asked whether'는 방법이고, 'found that', 'showed that'은 결과예요."
  },
  {
    num: 30,
    sentence: "Parents pay attention to the truth value of child speech, approving true utterances and criticizing false ones, without regard to grammaticality.",
    vocab: [
      "pay attention to: ~에 주의를 기울이다",
      "truth value: 진리값, 참/거짓",
      "approve: 승인하다, 인정하다",
      "utterance: 발화",
      "criticize: 비판하다",
      "without regard to: ~에 관계없이",
      "grammaticality: 문법성"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 부모의 관심 = __________________ ○ / __________________ ✕"
    ],
    quiz: [
      "1. 부모는 아이 말의 진리값에 주의를 기울인다. ( O / X )",
      "2. 부모는 참인 발화를 승인하고 거짓인 발화를 비판한다. ( O / X )",
      "3. 부모는 문법성을 중요하게 여긴다. ( O / X )",
      "4. 'without regard to'는 ~을 고려하지 않고라는 의미이다. ( O / X )",
      "5. 이 연구 결과는 문법 중심 교육을 지지한다. ( O / X )"
    ],
    translation: "부모는 아이 말의 진리값에 주의를 기울인다, / 참인 발화를 승인하고 / 거짓인 발화를 비판하면서, / 문법성에 관계없이.\n\n→ 부모는 문법성에 관계없이 아이 말의 진리값에 주의를 기울여, 참인 발화는 승인하고 거짓인 발화는 비판한다.",
    logic_answer: [
      "중심 소재: 부모의 아이 발화에 대한 반응",
      "논리 관계: 부모의 관심 = 진리값 ○ / 문법성 ✕"
    ],
    explanation: "이 문장은 대조 구조예요. 앞 문장(14번)의 연구 결과를 제시해요. 핵심은 'truth value vs grammaticality'의 대조예요. 부모는 '진리값'(내용이 맞는지 틀리는지)에 관심을 갖고, '문법성'(문법적으로 맞는지)은 신경 쓰지 않는다는 거예요. 'without regard to grammaticality'가 핵심 발견이에요. 이는 문법 중심 교육에 대한 비판적 시사점을 가져요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. X",
    quiz_explanations: [
      "1. O - 'pay attention to the truth value of child speech'에서 직접 언급돼요.",
      "2. O - 'approving true utterances and criticizing false ones'에서 직접 언급돼요.",
      "3. X - 반대예요. 'without regard to grammaticality'라고 해서 문법성은 고려하지 않아요.",
      "4. O - 'without regard to'는 '~에 관계없이, ~을 고려하지 않고'라는 뜻이에요.",
      "5. X - 반대예요. 부모가 문법성을 무시한다는 결과는 문법 중심 교육을 비판하는 근거가 돼요."
    ],
    tip: "[Tip] 'without regard to'는 무시/배제를 나타내는 핵심 표현이에요!\n\n의미: ~에 관계없이, ~을 고려하지 않고\n\n시험에서 'pay attention to A, without regard to B' 구조가 나오면, A는 중요하고 B는 중요하지 않다는 대조가 핵심이에요. 이 대조를 놓치면 안 돼요!"
  },
  {
    num: 31,
    sentence: "A tag question is appended to a declarative statement, as in \"The light was green, wasn't it?\" Typically, a tag serves as a request for confirmation of the declarative.",
    vocab: [
      "tag question: 부가 의문문",
      "append: 덧붙이다, 첨부하다",
      "declarative statement: 평서문",
      "serve as: ~의 역할을 하다",
      "confirmation: 확인"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 부가 의문문의 구조(__________________)와 기능(__________________)"
    ],
    quiz: [
      "1. 부가 의문문은 평서문에 덧붙여진다. ( O / X )",
      "2. 부가 의문문의 전형적 기능은 확인 요청이다. ( O / X )",
      "3. 'wasn't it?'은 부가 의문문의 예시이다. ( O / X )",
      "4. 부가 의문문은 새로운 정보를 요청한다. ( O / X )",
      "5. 이 문장은 부가 의문문을 정의한다. ( O / X )"
    ],
    translation: "부가 의문문은 평서문에 덧붙여진다, / \"신호등이 초록색이었지, 그렇지 않아?\"에서처럼. / 전형적으로, 부가 의문문은 평서문의 확인 요청 역할을 한다.\n\n→ 부가 의문문은 \"신호등이 초록색이었지, 그렇지 않아?\"에서처럼 평서문에 덧붙여지며, 전형적으로 평서문 내용의 확인을 요청하는 역할을 한다.",
    logic_answer: [
      "중심 소재: 부가 의문문(tag question)",
      "논리 관계: 부가 의문문의 구조(평서문 + 부가 의문)와 기능(확인 요청)"
    ],
    explanation: "이 문장은 정의/설명 구조예요. 부가 의문문이 무엇인지 구조와 기능 두 측면에서 설명해요. 구조: 평서문에 'append'(덧붙여진다), 기능: 'request for confirmation'(확인 요청). 'as in'으로 구체적 예시를 제공하고, 'Typically'로 일반적 기능을 설명해요. 문법 용어를 정의하는 전형적인 학술적 문장이에요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'appended to a declarative statement'에서 직접 언급돼요.",
      "2. O - 'serves as a request for confirmation'에서 직접 언급돼요.",
      "3. O - 예시 문장 'wasn't it?'이 부가 의문문 부분이에요.",
      "4. X - 반대예요. 'confirmation'(확인)이지 새로운 정보 요청이 아니에요.",
      "5. O - 부가 의문문의 구조와 기능을 정의하는 문장이에요."
    ],
    tip: "[Tip] 'serve as'는 기능/역할을 설명하는 표현이에요!\n\n의미: ~의 역할을 하다, ~로 기능하다\n\n시험에서 'serve as', 'function as', 'act as' 뒤에 나오는 내용이 해당 개념의 핵심 기능이에요. 정의를 묻는 문제에서 자주 출제돼요."
  },
  {
    num: 32,
    sentence: "In Brown's words, \"The peculiar beauty of the English tag question is that it is semantically rather trifling, a request for confirmation, and it has such simple equivalents as huh? and right?\"",
    vocab: [
      "peculiar: 독특한, 특이한",
      "semantically: 의미론적으로",
      "trifling: 사소한, 하찮은",
      "equivalent: 동등한 것, 등가물"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 영어 부가 의문문의 특징 = __________________ + __________________"
    ],
    quiz: [
      "1. Brown은 영어 부가 의문문의 아름다움에 대해 말한다. ( O / X )",
      "2. 부가 의문문은 의미론적으로 중요하다. ( O / X )",
      "3. 'huh?'와 'right?'는 부가 의문문의 간단한 등가물이다. ( O / X )",
      "4. 'peculiar beauty'는 부정적 평가를 나타낸다. ( O / X )",
      "5. 부가 의문문의 기능은 확인 요청이다. ( O / X )"
    ],
    translation: "Brown의 말에 따르면, / \"영어 부가 의문문의 독특한 아름다움은 / 그것이 의미론적으로 다소 사소하다는 것, / 확인 요청이라는 것, / 그리고 'huh?'나 'right?' 같은 간단한 등가물을 가진다는 것이다.\"\n\n→ Brown의 말에 따르면, \"영어 부가 의문문의 독특한 아름다움은 의미론적으로 다소 사소하고 확인 요청에 불과하며, 'huh?'나 'right?' 같은 간단한 등가물을 가진다는 것이다.\"",
    logic_answer: [
      "중심 소재: 영어 부가 의문문의 특성",
      "논리 관계: 영어 부가 의문문의 특징 = 의미적으로 사소함 + 간단한 등가물 존재"
    ],
    explanation: "이 문장은 인용/평가 구조예요. Brown의 말을 인용하여 영어 부가 의문문의 '독특한 아름다움(peculiar beauty)'을 설명해요. 핵심은 'semantically rather trifling'(의미적으로 사소함)이에요. 복잡한 형태에도 불구하고 의미는 단순해서 'huh?', 'right?'로 대체 가능하다는 역설적 특성이 '아름다움'으로 표현돼요.",
    quiz_answers: "1. O  2. X  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'The peculiar beauty of the English tag question'에서 아름다움에 대해 말해요.",
      "2. X - 반대예요. 'semantically rather trifling'(의미적으로 사소한)이라고 해요.",
      "3. O - 'such simple equivalents as huh? and right?'에서 직접 언급돼요.",
      "4. X - 'peculiar beauty'는 독특한 아름다움으로, 긍정적 평가예요.",
      "5. O - 'a request for confirmation'에서 직접 언급돼요."
    ],
    tip: "[Tip] 'In X's words'는 직접 인용을 도입하는 표현이에요!\n\n의미: X의 말에 따르면\n\n시험에서 인용문이 나오면, 인용된 사람의 견해가 저자의 견해와 같은지 다른지 파악해야 해요. 여기서는 Brown의 견해를 소개하는 중립적 인용이에요."
  },
  {
    num: 33,
    sentence: "Those speakers of creole languages who had access to education were duly convinced that their speech was wrong, and they often tried to make it more similar to the standard.",
    vocab: [
      "creole language: 크리올어",
      "have access to: ~에 접근하다",
      "duly: 정당하게, 당연히",
      "convinced: 확신하는",
      "standard: 표준어"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________ → __________________"
    ],
    quiz: [
      "1. 교육받은 크리올어 화자들은 자신의 말이 틀렸다고 확신했다. ( O / X )",
      "2. 그들은 자신의 말을 표준어와 비슷하게 만들려고 노력했다. ( O / X )",
      "3. 'duly'는 이 확신이 정당했음을 의미한다. ( O / X )",
      "4. 교육이 크리올어에 대한 인식에 영향을 미쳤다. ( O / X )",
      "5. 저자는 크리올어가 실제로 잘못됐다고 본다. ( O / X )"
    ],
    translation: "교육에 접근할 수 있었던 크리올어 화자들은 / 자신의 말이 틀렸다고 당연히 확신하게 되었고, / 그들은 종종 그것을 표준어에 더 비슷하게 / 만들려고 노력했다.\n\n→ 교육을 받을 수 있었던 크리올어 화자들은 자신의 말이 잘못됐다고 확신하게 되었고, 종종 그것을 표준어에 더 가깝게 만들려고 노력했다.",
    logic_answer: [
      "중심 소재: 크리올어 화자와 표준어",
      "논리 관계: 교육 접근 → 자기 언어가 틀렸다는 확신 → 표준어 지향"
    ],
    explanation: "이 문장은 인과 사슬 구조예요. 교육 접근(원인1) → 자기 말이 틀렸다는 확신(결과1/원인2) → 표준어에 맞추려는 노력(결과2)의 연쇄예요. 'duly'(당연히)라는 표현이 중요한데, 이는 당시 그들의 시각을 반영한 것이지 저자의 입장이 아니에요. 교육이 언어 태도에 미친 영향을 보여주는 사회언어학적 내용이에요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. X",
    quiz_explanations: [
      "1. O - 'were duly convinced that their speech was wrong'에서 직접 언급돼요.",
      "2. O - 'tried to make it more similar to the standard'에서 직접 언급돼요.",
      "3. X - 'duly'는 당시 화자들의 관점을 반영한 것이지, 실제로 정당했다는 저자의 평가가 아니에요.",
      "4. O - 교육 접근이 자기 언어에 대한 부정적 인식을 형성했어요.",
      "5. X - 저자는 객관적으로 서술할 뿐, 크리올어가 틀렸다고 주장하지 않아요."
    ],
    tip: "[Tip] 인용된 관점과 저자의 관점을 구별하세요!\n\n'were convinced that their speech was wrong'은 화자들의 생각이지 저자의 주장이 아니에요.\n\n시험에서 '누구의 관점인가'를 묻는 문제가 자주 나와요. 특히 'believe', 'think', 'be convinced' 뒤의 내용이 사실인지 믿음인지 구별해야 해요."
  },
  {
    num: 34,
    sentence: "We can observe that questions such as \"Which language do you speak?\" may be answered quite differently by people who appear to speak in an identical manner.",
    vocab: [
      "observe: 관찰하다, 주목하다",
      "identical: 동일한",
      "manner: 방식"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ (외형) ↔ __________________ (대답)"
    ],
    quiz: [
      "1. 같은 방식으로 말하는 것처럼 보이는 사람들이 다른 대답을 할 수 있다. ( O / X )",
      "2. 어떤 언어를 쓰는가에 대한 대답은 항상 일관적이다. ( O / X )",
      "3. 'identical manner'는 말하는 방식이 같아 보인다는 의미이다. ( O / X )",
      "4. 이 관찰은 언어 정체성의 복잡성을 시사한다. ( O / X )",
      "5. 외형적으로 같은 말은 항상 같은 언어로 분류된다. ( O / X )"
    ],
    translation: "우리는 관찰할 수 있다 / \"당신은 어떤 언어를 쓰나요?\" 같은 질문이 / 동일한 방식으로 말하는 것처럼 보이는 사람들에 의해 / 매우 다르게 답변될 수 있다는 것을.\n\n→ \"당신은 어떤 언어를 쓰나요?\"와 같은 질문이 동일한 방식으로 말하는 것처럼 보이는 사람들에 의해 매우 다르게 답변될 수 있다는 것을 관찰할 수 있다.",
    logic_answer: [
      "중심 소재: 언어 정체성과 말하기 방식",
      "논리 관계: 동일한 말하기 방식 (외형) ↔ 다른 언어 정체성 대답 (대답)"
    ],
    explanation: "이 문장은 역설/불일치 구조예요. 핵심은 'identical manner'(동일한 방식)와 'answered quite differently'(매우 다르게 답변)의 대조예요. 말하는 방식이 같아 보여도 '어떤 언어를 쓰는가'에 대한 대답이 다를 수 있다는 거예요. 이는 '언어'가 순수히 언어학적 기준이 아닌 사회적/정체성 요인으로 구분된다는 점을 시사해요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'may be answered quite differently by people who appear to speak in an identical manner'에서 직접 언급돼요.",
      "2. X - 반대예요. 'answered quite differently'라고 해서 다를 수 있어요.",
      "3. O - 'appear to speak in an identical manner'는 말하는 방식이 같아 보인다는 뜻이에요.",
      "4. O - 같은 말투여도 다른 언어로 답하는 것은 언어 정체성의 복잡성을 보여줘요.",
      "5. X - 반대예요. 같아 보여도 다른 언어로 답할 수 있어요."
    ],
    tip: "[Tip] 'appear to'는 외형과 실제의 불일치를 암시할 수 있어요!\n\n의미: ~처럼 보이다 (실제와 다를 수 있음)\n\n시험에서 'appear', 'seem', 'look like' 뒤에 but이나 yet이 오면, 외형과 실제의 차이가 핵심이에요. 이 문장에서는 외형적 동일성과 정체성의 차이가 대조돼요."
  },
  {
    num: 35,
    sentence: "Hindi and Urdu in India, Fanti and Twi in West Africa, Kechwa and Aimara in Peru are recognized as discrete languages both popularly and in law, yet they are almost identical at the level of grammar.",
    vocab: [
      "discrete: 별개의, 분리된",
      "popularly: 대중적으로, 일반적으로",
      "in law: 법적으로",
      "identical: 동일한"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ (사회적/법적) ↔ __________________ (언어학적)"
    ],
    quiz: [
      "1. 힌디어와 우르두어는 별개의 언어로 인정된다. ( O / X )",
      "2. 이 언어 쌍들은 문법적으로 거의 동일하다. ( O / X )",
      "3. 'discrete languages'는 같은 언어를 의미한다. ( O / X )",
      "4. 언어 구분은 항상 문법적 차이에 기반한다. ( O / X )",
      "5. 'yet'은 앞뒤 내용의 대조를 나타낸다. ( O / X )"
    ],
    translation: "인도의 힌디어와 우르두어, / 서아프리카의 판티어와 트위어, / 페루의 케추아어와 아이마라어는 / 대중적으로나 법적으로나 별개의 언어로 인정된다, / 그러나 그것들은 문법 수준에서 거의 동일하다.\n\n→ 인도의 힌디어와 우르두어, 서아프리카의 판티어와 트위어, 페루의 케추아어와 아이마라어는 대중적으로나 법적으로 별개의 언어로 인정되지만, 문법적으로는 거의 동일하다.",
    logic_answer: [
      "중심 소재: 언어 구분의 기준",
      "논리 관계: 별개 언어로 인정 (사회적/법적) ↔ 문법적으로 동일 (언어학적)"
    ],
    explanation: "이 문장은 대조 구조예요. 'yet'을 기준으로 사회적/법적 인정과 언어학적 사실이 대조돼요. 여러 언어 쌍이 '별개 언어(discrete languages)'로 인정되지만, 실제로는 '문법적으로 거의 동일(almost identical)'하다는 역설이 핵심이에요. 언어 구분이 순수 언어학적 기준이 아닌 사회적/정치적 요인에 의해 결정된다는 점을 보여줘요.",
    quiz_answers: "1. O  2. O  3. X  4. X  5. O",
    quiz_explanations: [
      "1. O - 'recognized as discrete languages'에서 별개 언어로 인정된다고 해요.",
      "2. O - 'almost identical at the level of grammar'에서 직접 언급돼요.",
      "3. X - 'discrete'는 '별개의, 분리된'이라는 뜻으로, 다른 언어를 의미해요.",
      "4. X - 반대예요. 문법적으로 동일해도 별개 언어로 인정되는 예시를 보여줘요.",
      "5. O - 'yet'은 앞(별개로 인정)과 뒤(문법적 동일)의 대조를 나타내요."
    ],
    tip: "[Tip] 'yet'은 강한 대조를 나타내는 접속사예요!\n\n의미: 그러나, 그럼에도 불구하고\n\n시험에서 'yet', 'however', 'nevertheless' 뒤에 나오는 내용이 앞 내용과 대조되는 핵심 정보예요. 이 대조가 저자의 포인트인 경우가 많아요."
  },
  {
    num: 36,
    sentence: "The literary and colloquial forms of Arabic used in Iraq, Morocco, and Egypt are grammatically quite separate, yet only one language is recognized in each case.",
    vocab: [
      "literary: 문어체의",
      "colloquial: 구어체의",
      "separate: 분리된, 별개인",
      "recognize: 인정하다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ (언어학적) ↔ __________________ (사회적)"
    ],
    quiz: [
      "1. 이라크, 모로코, 이집트의 아랍어 문어체와 구어체는 문법적으로 분리되어 있다. ( O / X )",
      "2. 각 나라에서 여러 언어가 인정된다. ( O / X )",
      "3. 이 문장은 앞 문장(5번)과 반대 예시를 보여준다. ( O / X )",
      "4. 문법적 분리가 언어 구분의 기준이 된다. ( O / X )",
      "5. 언어 인정은 사회적/정치적 요인에 영향받는다. ( O / X )"
    ],
    translation: "이라크, 모로코, 이집트에서 사용되는 / 아랍어의 문어체와 구어체 형태는 / 문법적으로 상당히 분리되어 있다, / 그러나 각 경우에 오직 하나의 언어만 인정된다.\n\n→ 이라크, 모로코, 이집트에서 사용되는 아랍어의 문어체와 구어체는 문법적으로 상당히 다르지만, 각 나라에서는 하나의 언어만 인정된다.",
    logic_answer: [
      "중심 소재: 아랍어의 언어 인정",
      "논리 관계: 문법적으로 분리 (언어학적) ↔ 하나의 언어로 인정 (사회적)"
    ],
    explanation: "이 문장은 앞 문장(5번)과 대칭적 대조를 이뤄요. 5번: 문법적으로 같은데 별개 언어로 인정, 6번: 문법적으로 다른데 하나의 언어로 인정. 'quite separate'(상당히 분리된)과 'only one language'의 대조가 핵심이에요. 언어 구분이 언어학적 기준이 아닌 사회적/정치적 결정임을 보여주는 반대 방향의 예시예요.",
    quiz_answers: "1. O  2. X  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'grammatically quite separate'에서 직접 언급돼요.",
      "2. X - 반대예요. 'only one language is recognized in each case'라고 해서 하나만 인정돼요.",
      "3. O - 5번(같은데 별개로 인정)과 6번(다른데 하나로 인정)은 반대 예시예요.",
      "4. X - 반대예요. 문법적으로 분리돼도 하나의 언어로 인정되는 예시예요.",
      "5. O - 언어학적 사실과 다른 인정 방식은 사회적/정치적 요인 때문이에요."
    ],
    tip: "[Tip] 연속된 문장의 대칭 구조를 파악하세요!\n\n5번: 문법적 동일 → 별개 언어 인정\n6번: 문법적 분리 → 하나의 언어 인정\n\n시험에서 이런 대칭적 예시가 나오면, 두 예시의 공통 메시지(여기서는 '언어 구분은 사회적')를 파악해야 해요."
  },
  {
    num: 37,
    sentence: "Science and reasoning know no language barriers; they are a language of their own, and this language is universal regardless of the tongue in which you normally express yourself.",
    vocab: [
      "barrier: 장벽",
      "universal: 보편적인",
      "regardless of: ~에 관계없이",
      "tongue: 언어"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 과학과 추론 = __________________ (특징: __________________)"
    ],
    quiz: [
      "1. 과학과 추론은 언어 장벽을 모른다. ( O / X )",
      "2. 과학과 추론은 그 자체로 하나의 언어이다. ( O / X )",
      "3. 이 언어는 특정 언어 사용자에게만 적용된다. ( O / X )",
      "4. 'universal'은 보편성을 나타낸다. ( O / X )",
      "5. 모국어에 관계없이 과학의 언어를 이해할 수 있다. ( O / X )"
    ],
    translation: "과학과 추론은 언어 장벽을 모른다; / 그것들은 그 자체로 하나의 언어이다, / 그리고 이 언어는 보편적이다 / 당신이 평소 자신을 표현하는 언어에 관계없이.\n\n→ 과학과 추론은 언어 장벽이 없다; 그것들은 그 자체로 하나의 언어이며, 이 언어는 당신이 평소 사용하는 언어에 관계없이 보편적이다.",
    logic_answer: [
      "중심 소재: 과학과 추론의 언어적 특성",
      "논리 관계: 과학과 추론 = 그 자체로 언어 (특징: 보편적, 장벽 없음)"
    ],
    explanation: "이 문장은 비유/정의 구조예요. 과학과 추론을 '언어(a language of their own)'에 비유해요. 핵심은 'know no language barriers'(언어 장벽이 없다)와 'universal'(보편적)이에요. 자연 언어와 달리 과학/추론의 언어는 모국어에 관계없이 누구나 이해할 수 있다는 점을 강조해요. 'regardless of'가 이 보편성을 뒷받침해요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'know no language barriers'에서 직접 언급돼요.",
      "2. O - 'they are a language of their own'에서 직접 언급돼요.",
      "3. X - 반대예요. 'universal regardless of the tongue'라고 해서 모두에게 적용돼요.",
      "4. O - 'universal'은 '보편적인'이라는 뜻이에요.",
      "5. O - 'regardless of the tongue in which you normally express yourself'에서 알 수 있어요."
    ],
    tip: "[Tip] 'know no X'는 'X가 없다/적용되지 않는다'는 의미예요!\n\n'know no barriers' = 장벽이 없다\n'know no bounds' = 한계가 없다\n\n시험에서 이런 관용적 표현이 나오면 문자 그대로 '모른다'로 해석하면 안 돼요. '~이 적용되지 않는다'는 의미예요."
  },
  {
    num: 38,
    sentence: "Many researchers have found that people who speak Chinese use both sides of their brain to understand the language, compared to English-language speakers who only need to use one side.",
    vocab: [
      "researcher: 연구자",
      "compared to: ~와 비교하여"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 중국어 화자(__________________)  vs 영어 화자(__________________)"
    ],
    quiz: [
      "1. 중국어 화자는 뇌의 양쪽을 사용한다. ( O / X )",
      "2. 영어 화자는 뇌의 한쪽만 사용한다. ( O / X )",
      "3. 이 발견은 단일 연구에 기반한다. ( O / X )",
      "4. 언어에 따라 뇌 사용 방식이 다르다. ( O / X )",
      "5. 'compared to'는 유사성을 강조한다. ( O / X )"
    ],
    translation: "많은 연구자들이 발견했다 / 중국어를 말하는 사람들이 / 그 언어를 이해하기 위해 뇌의 양쪽을 사용한다는 것을, / 뇌의 한쪽만 사용하면 되는 영어 화자와 비교하여.\n\n→ 많은 연구자들이 중국어 화자가 언어를 이해하기 위해 뇌의 양쪽을 사용하는 반면, 영어 화자는 한쪽만 사용한다는 것을 발견했다.",
    logic_answer: [
      "중심 소재: 언어별 뇌 사용 방식",
      "논리 관계: 중국어 화자(뇌 양쪽 사용) vs 영어 화자(뇌 한쪽 사용)"
    ],
    explanation: "이 문장은 비교/대조 구조예요. 중국어 화자와 영어 화자의 뇌 사용 방식을 대조해요. 중국어: 'both sides'(양쪽), 영어: 'one side'(한쪽). 'Many researchers have found'에서 이것이 다수 연구의 발견임을 강조해요. 언어마다 인지 처리 방식이 다를 수 있다는 신경언어학적 연구 결과예요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. X",
    quiz_explanations: [
      "1. O - 'use both sides of their brain'에서 직접 언급돼요.",
      "2. O - 'only need to use one side'에서 직접 언급돼요.",
      "3. X - 반대예요. 'Many researchers have found'에서 다수 연구임을 알 수 있어요.",
      "4. O - 중국어와 영어 화자의 뇌 사용 방식 차이가 이를 보여줘요.",
      "5. X - 'compared to'는 차이점을 강조하는 비교 표현이에요."
    ],
    tip: "[Tip] 'compared to'는 대조적 비교를 나타내요!\n\nA compared to B = A와 B를 비교할 때\n\n시험에서 'compared to', 'in contrast to', 'unlike' 뒤에 나오는 내용은 앞 내용과 대조되는 정보예요. 두 대상의 차이점을 정확히 파악하세요."
  },
  {
    num: 39,
    sentence: "Human language crossed a subtle linguistic threshold that allowed utterly new types of communication—above all, human languages let us share information about abstract entities or about things or possibilities that are not immediately present.",
    vocab: [
      "cross: 넘다, 건너다",
      "subtle: 미묘한",
      "threshold: 문턱, 한계점",
      "utterly: 완전히, 전적으로",
      "abstract: 추상적인",
      "entity: 실체, 존재"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 인간 언어의 특징 = __________________ → __________________"
    ],
    quiz: [
      "1. 인간 언어는 미묘한 언어적 문턱을 넘었다. ( O / X )",
      "2. 인간 언어는 완전히 새로운 유형의 의사소통을 가능하게 했다. ( O / X )",
      "3. 인간 언어는 즉시 존재하는 것에 대해서만 정보를 공유할 수 있다. ( O / X )",
      "4. 추상적 존재에 대한 정보 공유가 인간 언어의 핵심이다. ( O / X )",
      "5. 'above all'은 가장 중요한 점을 강조한다. ( O / X )"
    ],
    translation: "인간 언어는 미묘한 언어적 문턱을 넘었고 / 이것이 완전히 새로운 유형의 의사소통을 가능하게 했다 / —무엇보다도, 인간 언어는 우리가 정보를 공유하게 해준다 / 추상적 존재에 대한 또는 / 즉시 존재하지 않는 것이나 가능성에 대한.\n\n→ 인간 언어는 완전히 새로운 유형의 의사소통을 가능하게 하는 미묘한 언어적 문턱을 넘었다 — 무엇보다도, 인간 언어는 추상적 존재나 즉시 존재하지 않는 것 또는 가능성에 대한 정보를 공유할 수 있게 해준다.",
    logic_answer: [
      "중심 소재: 인간 언어의 고유한 특성",
      "논리 관계: 인간 언어의 특징 = 언어적 문턱 통과 → 추상적/비현존 대상 소통 가능"
    ],
    explanation: "이 문장은 정의/특성 설명 구조예요. 인간 언어의 독특한 특성을 설명해요. 핵심은 'above all'(무엇보다도) 뒤의 내용: 추상적 존재(abstract entities)나 즉시 존재하지 않는 것(not immediately present)에 대해 소통할 수 있다는 점이에요. 이것이 인간 언어가 넘은 '문턱(threshold)'의 내용이에요. 다음 문장(10번)의 동물 언어와 대조될 내용이에요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'crossed a subtle linguistic threshold'에서 직접 언급돼요.",
      "2. O - 'allowed utterly new types of communication'에서 직접 언급돼요.",
      "3. X - 반대예요. 'not immediately present'한 것에 대해서도 공유할 수 있어요.",
      "4. O - 'above all'로 강조된 내용이 추상적 존재에 대한 정보 공유예요.",
      "5. O - 'above all'은 '무엇보다도'로 가장 중요한 점을 강조해요."
    ],
    tip: "[Tip] 'above all'은 핵심을 강조하는 표현이에요!\n\n의미: 무엇보다도, 특히\n\n시험에서 'above all', 'most importantly', 'in particular' 뒤에 나오는 내용이 저자가 가장 강조하는 핵심이에요. 이 내용을 놓치면 안 돼요!"
  },
  {
    num: 40,
    sentence: "Animal languages can share only the simplest of ideas, almost all of them linked to what is immediately present, a bit like mime.",
    vocab: [
      "share: 공유하다",
      "linked to: ~와 연결된",
      "immediately present: 즉시 존재하는",
      "mime: 마임, 무언극"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 동물 언어의 한계 = __________________ (비유: __________________)"
    ],
    quiz: [
      "1. 동물 언어는 가장 단순한 아이디어만 공유할 수 있다. ( O / X )",
      "2. 동물 언어의 내용은 대부분 즉시 존재하는 것과 연결된다. ( O / X )",
      "3. 동물 언어는 추상적 개념을 쉽게 전달할 수 있다. ( O / X )",
      "4. 마임에 비유한 것은 동물 언어의 한계를 보여준다. ( O / X )",
      "5. 이 문장은 앞 문장(9번)의 인간 언어와 대조된다. ( O / X )"
    ],
    translation: "동물 언어는 가장 단순한 아이디어만 공유할 수 있다, / 그것들 거의 전부가 / 즉시 존재하는 것과 연결되어 있으며, / 마임과 약간 비슷하다.\n\n→ 동물 언어는 가장 단순한 아이디어만 공유할 수 있고, 그 내용의 거의 전부가 즉시 존재하는 것과 연결되어 있어서 마임과 약간 비슷하다.",
    logic_answer: [
      "중심 소재: 동물 언어의 한계",
      "논리 관계: 동물 언어의 한계 = 즉시 존재하는 것만 소통 가능 (비유: 마임)"
    ],
    explanation: "이 문장은 앞 문장(9번)과 대조되는 구조예요. 인간 언어가 '추상적/비현존 대상'을 다룰 수 있는 반면, 동물 언어는 'immediately present'(즉시 존재하는 것)에 한정돼요. 'only the simplest'와 'almost all of them'에서 한계가 강조돼요. 'like mime'(마임처럼)이라는 비유가 동물 언어의 구체성과 현재성 한계를 잘 보여줘요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'can share only the simplest of ideas'에서 직접 언급돼요.",
      "2. O - 'almost all of them linked to what is immediately present'에서 직접 언급돼요.",
      "3. X - 반대예요. 'simplest of ideas'와 'immediately present'에서 한계가 드러나요.",
      "4. O - 마임은 현재 보이는 것만 표현할 수 있어서 동물 언어의 한계를 비유해요.",
      "5. O - 9번(인간: 추상적/비현존 가능)과 10번(동물: 현존하는 것만)이 대조돼요."
    ],
    tip: "[Tip] 연속된 문장의 대조 구조를 파악하세요!\n\n9번: 인간 언어 → 추상적/비현존 대상 소통 가능\n10번: 동물 언어 → 즉시 존재하는 것만 소통 가능\n\n시험에서 인간 vs 동물의 언어/인지 능력 비교는 자주 나오는 주제예요. 핵심 차이점을 정확히 파악하세요."
  },
  {
    num: 41,
    sentence: "Natural selection stresses survival in a hostile environment as fundamental to the prehistoric evolution of any adaptation, but if art is an adaptation, mere survival is a completely inadequate explanation for its existence.",
    vocab: [
      "natural selection: 자연선택",
      "hostile: 적대적인",
      "fundamental: 근본적인",
      "prehistoric: 선사시대의",
      "adaptation: 적응",
      "mere: 단순한, 겨우",
      "inadequate: 불충분한"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 자연선택(__________________)  ↔ 예술(__________________)"
    ],
    quiz: [
      "1. 자연선택은 적대적 환경에서의 생존을 강조한다. ( O / X )",
      "2. 저자는 예술이 적응이라면 생존만으로 설명된다고 본다. ( O / X )",
      "3. '단순한 생존'은 예술의 존재를 충분히 설명하지 못한다. ( O / X )",
      "4. 'but'은 앞뒤 내용의 대조를 나타낸다. ( O / X )",
      "5. 예술을 자연선택으로 설명하는 것에 문제가 제기된다. ( O / X )"
    ],
    translation: "자연선택은 적대적 환경에서의 생존을 / 어떤 적응의 선사시대 진화에 근본적인 것으로 강조한다, / 그러나 만약 예술이 적응이라면, / 단순한 생존은 완전히 불충분한 설명이다 / 예술의 존재에 대한.\n\n→ 자연선택은 적대적 환경에서의 생존을 모든 적응의 선사시대 진화에 근본적인 것으로 강조하지만, 예술이 적응이라면 단순한 생존은 예술의 존재를 설명하기에 완전히 불충분하다.",
    logic_answer: [
      "중심 소재: 자연선택과 예술의 관계",
      "논리 관계: 자연선택(생존 강조) ↔ 예술(생존만으론 불충분)"
    ],
    explanation: "이 문장은 양보-대조 구조예요. 자연선택의 일반 원리(생존이 근본)를 인정하지만(양보), 예술에는 적용이 어렵다(대조)는 논리예요. 핵심은 'mere survival is a completely inadequate explanation'(단순한 생존은 완전히 불충분한 설명)이에요. 예술이 생존 이상의 무언가를 필요로 한다는 점에서 자연선택 이론에 도전하는 내용이에요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'stresses survival in a hostile environment as fundamental'에서 직접 언급돼요.",
      "2. X - 반대예요. 'completely inadequate explanation'이라고 해서 불충분하다고 봐요.",
      "3. O - 'mere survival is a completely inadequate explanation'에서 직접 언급돼요.",
      "4. O - 'but'이 자연선택의 원리와 예술에의 적용 한계를 대조해요.",
      "5. O - 예술이 적응이라면 생존만으론 설명 불가능하다는 문제를 제기해요."
    ],
    tip: "[Tip] 'if A, then B is inadequate' 구조는 조건부 비판이에요!\n\n의미: A라고 가정하면, B는 불충분하다\n\n시험에서 이런 조건부 비판은 기존 이론의 한계를 지적하는 데 사용돼요. 'if'의 조건과 그에 따른 문제점을 정확히 파악하세요."
  },
  {
    num: 42,
    sentence: "The arts consume excessively brain power, physical effort, time, and precious resources—natural selection, on the other hand, is parsimonious: it weeds out inefficiency and waste.",
    vocab: [
      "consume: 소비하다",
      "excessively: 과도하게",
      "precious: 귀중한",
      "parsimonious: 절약하는, 인색한",
      "weed out: 제거하다",
      "inefficiency: 비효율",
      "waste: 낭비"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 예술(__________________)  ↔ 자연선택(__________________)"
    ],
    quiz: [
      "1. 예술은 두뇌력, 노력, 시간, 자원을 과도하게 소비한다. ( O / X )",
      "2. 자연선택은 낭비적이다. ( O / X )",
      "3. 'parsimonious'는 절약적임을 의미한다. ( O / X )",
      "4. 자연선택은 비효율과 낭비를 제거한다. ( O / X )",
      "5. 예술과 자연선택의 원리가 서로 충돌한다. ( O / X )"
    ],
    translation: "예술은 과도하게 소비한다 / 두뇌력, 신체적 노력, 시간, 그리고 귀중한 자원을 / —반면에 자연선택은 절약적이다: / 비효율과 낭비를 제거한다.\n\n→ 예술은 두뇌력, 신체적 노력, 시간, 귀중한 자원을 과도하게 소비하는 반면, 자연선택은 절약적이어서 비효율과 낭비를 제거한다.",
    logic_answer: [
      "중심 소재: 예술과 자연선택의 원리",
      "논리 관계: 예술(과도한 소비) ↔ 자연선택(절약/비효율 제거)"
    ],
    explanation: "이 문장은 대조 구조예요. 'on the other hand'(반면에)가 예술과 자연선택을 대조해요. 예술: 'consume excessively'(과도하게 소비), 자연선택: 'parsimonious'(절약적), 'weeds out inefficiency and waste'(비효율과 낭비 제거). 이 대조가 앞 문장(11번)의 '예술을 자연선택으로 설명하기 어렵다'는 논점을 뒷받침해요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'consume excessively brain power, physical effort, time, and precious resources'에서 직접 언급돼요.",
      "2. X - 반대예요. 'parsimonious'(절약적)이라고 해요.",
      "3. O - 'parsimonious'는 '절약하는, 인색한'이라는 뜻이에요.",
      "4. O - 'weeds out inefficiency and waste'에서 직접 언급돼요.",
      "5. O - 예술(낭비적) vs 자연선택(절약적)의 대조가 충돌을 보여줘요."
    ],
    tip: "[Tip] 'on the other hand'는 대조를 명시하는 표현이에요!\n\n의미: 반면에, 다른 한편으로는\n\n시험에서 'on the other hand', 'by contrast', 'conversely' 뒤에 나오는 내용은 앞 내용과 정반대예요. 이 대조가 저자의 논점인 경우가 많아요."
  },
  {
    num: 43,
    sentence: "Evolution by natural selection is a severe accountant in the way it sorts out potential adaptation in terms of costs and benefits.",
    vocab: [
      "severe: 엄격한",
      "accountant: 회계사",
      "sort out: 분류하다, 정리하다",
      "potential: 잠재적인",
      "in terms of: ~의 관점에서"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 자연선택 = __________________ (기준: __________________)"
    ],
    quiz: [
      "1. 자연선택은 '엄격한 회계사'에 비유된다. ( O / X )",
      "2. 자연선택은 비용과 편익으로 적응을 분류한다. ( O / X )",
      "3. 'severe accountant'는 자연선택의 관대함을 나타낸다. ( O / X )",
      "4. 자연선택은 잠재적 적응을 평가한다. ( O / X )",
      "5. 이 비유는 자연선택의 효율성 원리를 강조한다. ( O / X )"
    ],
    translation: "자연선택에 의한 진화는 엄격한 회계사이다 / 그것이 잠재적 적응을 분류하는 방식에서 / 비용과 편익의 관점에서.\n\n→ 자연선택에 의한 진화는 비용과 편익의 관점에서 잠재적 적응을 분류하는 방식에서 엄격한 회계사와 같다.",
    logic_answer: [
      "중심 소재: 자연선택의 작동 원리",
      "논리 관계: 자연선택 = 엄격한 회계사 (기준: 비용 대비 편익)"
    ],
    explanation: "이 문장은 비유 구조예요. 자연선택을 'severe accountant'(엄격한 회계사)에 비유해요. 회계사가 비용과 수익을 엄격하게 계산하듯, 자연선택도 'costs and benefits'(비용과 편익)으로 적응을 평가한다는 거예요. 'severe'에서 자연선택의 냉정한 효율성 원리가 강조돼요. 앞 문장(12번)의 'parsimonious'와 연결되는 개념이에요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'is a severe accountant'에서 직접 비유돼요.",
      "2. O - 'sorts out potential adaptation in terms of costs and benefits'에서 직접 언급돼요.",
      "3. X - 반대예요. 'severe'는 '엄격한'으로, 관대함이 아니라 냉정함을 나타내요.",
      "4. O - 'sorts out potential adaptation'에서 직접 언급돼요.",
      "5. O - 비용-편익 계산이라는 비유가 효율성 원리를 강조해요."
    ],
    tip: "[Tip] 비유(metaphor)는 추상적 개념을 구체화해요!\n\n자연선택 = 엄격한 회계사\n→ 비용-편익을 냉정하게 계산\n\n시험에서 비유가 나오면, 비유 대상(회계사)의 특성이 원래 개념(자연선택)의 어떤 면을 강조하는지 파악해야 해요."
  },
  {
    num: 44,
    sentence: "How strange, therefore, to argue for a Darwinian genesis of the arts of man, which so often tend toward lavish excess, costly far beyond any obvious adaptive benefits for survival.",
    vocab: [
      "therefore: 그러므로",
      "argue for: ~을 주장하다",
      "genesis: 기원, 발생",
      "lavish: 풍부한, 사치스러운",
      "excess: 과잉, 과도함",
      "adaptive: 적응적인"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 예술의 특성(__________________) → 다윈적 기원 주장의 문제(__________________)"
    ],
    quiz: [
      "1. 저자는 예술의 다윈적 기원 주장이 이상하다고 본다. ( O / X )",
      "2. 예술은 종종 사치스러운 과잉으로 향한다. ( O / X )",
      "3. 예술의 비용이 적응적 편익을 훨씬 초과한다. ( O / X )",
      "4. 'therefore'는 앞 내용에서 결론을 도출한다. ( O / X )",
      "5. 저자는 예술이 자연선택으로 쉽게 설명된다고 본다. ( O / X )"
    ],
    translation: "그러므로 얼마나 이상한가, / 인간 예술의 다윈적 기원을 주장하는 것이, / 그것은 너무나 자주 사치스러운 과잉으로 향하며, / 생존을 위한 어떤 명백한 적응적 편익도 훨씬 넘어서는 비용이 든다.\n\n→ 그러므로 인간 예술의 다윈적 기원을 주장하는 것은 얼마나 이상한가, 예술은 너무나 자주 사치스러운 과잉으로 향하며 생존을 위한 명백한 적응적 편익을 훨씬 넘어서는 비용이 드는데.",
    logic_answer: [
      "중심 소재: 예술의 다윈적 기원에 대한 회의",
      "논리 관계: 예술의 특성(과잉/고비용) → 다윈적 기원 주장의 문제(이상함)"
    ],
    explanation: "이 문장은 결론/평가 구조예요. 'therefore'가 앞 문장들(11, 12, 13번)의 결론을 도출해요. 'How strange'라는 수사적 표현으로 예술의 다윈적 기원 주장에 대한 회의를 표현해요. 이유: 예술은 'lavish excess'(사치스러운 과잉)로 향하고, 비용이 적응적 편익을 '훨씬 초과(far beyond)'하기 때문에 절약적인 자연선택 원리와 맞지 않아요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'How strange... to argue for a Darwinian genesis'에서 이상하다고 평가해요.",
      "2. O - 'tend toward lavish excess'에서 직접 언급돼요.",
      "3. O - 'costly far beyond any obvious adaptive benefits'에서 직접 언급돼요.",
      "4. O - 'therefore'는 앞 내용(자연선택의 효율성)에서 결론(예술 설명의 어려움)을 도출해요.",
      "5. X - 반대예요. 'How strange'에서 쉽게 설명되지 않는다고 봐요."
    ],
    tip: "[Tip] 'How + 형용사 + to V'는 감탄/평가를 나타내는 수사적 표현이에요!\n\n'How strange to argue' = 주장하는 것이 얼마나 이상한가\n\n시험에서 이런 수사적 표현은 저자의 평가/태도를 드러내요. 'strange', 'odd', 'ironic' 같은 형용사가 저자의 입장을 보여줘요."
  },
  {
    num: 45,
    sentence: "In the past there was little genetic pressure to stop people from becoming obese—genetic mutations that drove people to consume fewer calories were much less likely to be passed on.",
    vocab: [
      "genetic pressure: 유전적 압력",
      "obese: 비만인",
      "mutation: 돌연변이",
      "drive: 몰다, 유도하다",
      "pass on: 전달하다, 유전되다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 과거 상황 = __________________ (이유: __________________)"
    ],
    quiz: [
      "1. 과거에는 비만을 막는 유전적 압력이 거의 없었다. ( O / X )",
      "2. 적게 먹게 하는 유전자 돌연변이는 잘 유전되었다. ( O / X )",
      "3. 'pass on'은 유전을 의미한다. ( O / X )",
      "4. 칼로리를 적게 소비하게 하는 돌연변이가 불리했다. ( O / X )",
      "5. 이 문장은 현대 비만의 진화적 배경을 설명한다. ( O / X )"
    ],
    translation: "과거에는 / 사람들이 비만이 되는 것을 막는 / 유전적 압력이 거의 없었다 / —사람들이 더 적은 칼로리를 소비하도록 유도하는 / 유전적 돌연변이는 / 유전될 가능성이 훨씬 낮았다.\n\n→ 과거에는 사람들이 비만이 되는 것을 막는 유전적 압력이 거의 없었다 — 더 적은 칼로리를 소비하게 하는 유전적 돌연변이는 유전될 가능성이 훨씬 낮았기 때문이다.",
    logic_answer: [
      "중심 소재: 비만의 진화적 배경",
      "논리 관계: 과거 상황 = 비만 억제 유전 압력 부재 (이유: 소식 유전자가 유전되기 어려움)"
    ],
    explanation: "이 문장은 인과 관계 구조예요. 대시(—) 뒤에 앞 주장의 이유가 제시돼요. 과거에 비만을 막는 유전적 압력이 없었던 이유: 적게 먹게 하는 돌연변이가 유전될 가능성이 낮았기 때문이에요. 반대로, 많이 먹게 하는 유전자가 생존에 유리했다는 함의가 있어요. 현대 비만 문제의 진화적 배경을 설명하는 내용이에요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'little genetic pressure to stop people from becoming obese'에서 직접 언급돼요.",
      "2. X - 반대예요. 'much less likely to be passed on'이라고 해서 잘 유전되지 않았어요.",
      "3. O - 'pass on'은 유전적 맥락에서 '유전되다'를 의미해요.",
      "4. O - 유전될 가능성이 낮았다는 것은 진화적으로 불리했다는 의미예요.",
      "5. O - 과거 유전적 압력 부재가 현대 비만의 진화적 배경을 설명해요."
    ],
    tip: "[Tip] 대시(—)는 부연 설명이나 이유를 도입하는 데 사용돼요!\n\n앞 내용 — 이유/설명\n\n시험에서 대시 뒤의 내용은 앞 주장을 뒷받침하는 근거인 경우가 많아요. 'much less likely'처럼 비교 표현이 나오면 무엇과 비교하는지 파악하세요."
  },
  {
    num: 46,
    sentence: "Mutations that in our environment of abundant food now drive us towards obesity were incorporated into the population.",
    vocab: [
      "mutation: 돌연변이",
      "abundant: 풍부한",
      "obesity: 비만",
      "incorporate: 통합하다, 편입시키다",
      "population: 개체군, 인구"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 과거에 유용했던 돌연변이 → 현재(__________________)"
    ],
    quiz: [
      "1. 특정 돌연변이가 인구에 편입되었다. ( O / X )",
      "2. 이 돌연변이는 현재 풍부한 음식 환경에서 비만을 유발한다. ( O / X )",
      "3. 이 돌연변이는 과거에도 비만을 유발했다. ( O / X )",
      "4. 'incorporated into the population'은 유전적으로 퍼졌음을 의미한다. ( O / X )",
      "5. 이 문장은 DAY 3 마지막 문장과 연결된다. ( O / X )"
    ],
    translation: "우리의 풍부한 음식 환경에서 / 현재 우리를 비만으로 몰아가는 / 돌연변이들이 / 개체군에 편입되었다.\n\n→ 현재의 풍부한 음식 환경에서 우리를 비만으로 몰아가는 돌연변이들이 (과거에) 개체군에 편입되었다.",
    logic_answer: [
      "중심 소재: 비만 관련 유전자의 진화",
      "논리 관계: 과거에 유용했던 돌연변이 → 현재(비만 유발)"
    ],
    explanation: "이 문장은 인과/시간 대조 구조예요. 핵심은 'now'(현재)와 'were incorporated'(과거에 편입되었다)의 시간적 대조예요. 과거에 생존에 유리해서 퍼진 돌연변이가 현재의 풍부한 음식 환경에서는 비만을 유발한다는 역설이에요. DAY 3의 15번 문장(비만 억제 유전 압력 부재)과 연결되는 내용이에요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'were incorporated into the population'에서 직접 언급돼요.",
      "2. O - 'in our environment of abundant food now drive us towards obesity'에서 직접 언급돼요.",
      "3. X - 과거에는 생존에 유리했기에 편입된 것이지, 비만을 유발한 것이 아니에요.",
      "4. O - 'incorporated into the population'은 유전자가 개체군에 퍼졌다는 의미예요.",
      "5. O - DAY 3의 15번(비만 억제 유전 압력 부재)의 후속 내용이에요."
    ],
    tip: "[Tip] 시간 표현의 대조를 주의 깊게 파악하세요!\n\n'now' vs 'were (과거)'\n현재 환경에서의 결과 vs 과거에 일어난 진화적 편입\n\n시험에서 진화/유전 관련 지문은 '과거 환경'과 '현재 환경'의 차이로 인한 역설을 자주 다뤄요."
  },
  {
    num: 47,
    sentence: "It's only in the last century or so, approximately 0.00004 percent of mammalian evolutionary time, that we managed to tweak our environment to such a degree that we can pretty much eat whatever we want.",
    vocab: [
      "approximately: 대략",
      "mammalian: 포유류의",
      "evolutionary: 진화적인",
      "tweak: 조정하다, 수정하다",
      "to such a degree that: ~할 정도로"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 환경 조정 기간(__________________)  vs 진화 시간(__________________)"
    ],
    quiz: [
      "1. 인간이 환경을 조정한 것은 매우 최근의 일이다. ( O / X )",
      "2. 마지막 세기는 포유류 진화 시간의 약 0.00004%이다. ( O / X )",
      "3. 현재 우리는 원하는 것을 거의 먹을 수 있다. ( O / X )",
      "4. 인간의 유전자는 이 새로운 환경에 완전히 적응했다. ( O / X )",
      "5. 'It's only... that' 구조는 강조를 나타낸다. ( O / X )"
    ],
    translation: "오직 지난 세기 정도에서야, / 포유류 진화 시간의 약 0.00004 퍼센트인, / 우리는 환경을 조정할 수 있게 되었다 / 우리가 원하는 것을 거의 뭐든지 먹을 수 있을 정도로.\n\n→ 포유류 진화 시간의 약 0.00004%에 불과한 지난 세기 정도에서야 비로소 우리는 원하는 것을 거의 무엇이든 먹을 수 있을 정도로 환경을 조정할 수 있게 되었다.",
    logic_answer: [
      "중심 소재: 환경 변화의 급격함",
      "논리 관계: 환경 조정 기간(지난 세기 = 0.00004%) vs 진화 시간(포유류 전체)"
    ],
    explanation: "이 문장은 대비/강조 구조예요. 'It's only... that' 강조 구문이 핵심이에요. 지난 세기(환경 변화 시작)가 포유류 진화 시간의 0.00004%에 불과하다는 숫자가 극적인 대비를 만들어요. 진화적 시간 대비 환경 변화가 너무 빨라서 유전자가 적응할 시간이 없었다는 암시예요. 앞 문장(1번)의 '비만 유발 돌연변이'와 연결돼요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'only in the last century or so'에서 매우 최근임을 강조해요.",
      "2. O - 'approximately 0.00004 percent of mammalian evolutionary time'에서 직접 언급돼요.",
      "3. O - 'we can pretty much eat whatever we want'에서 직접 언급돼요.",
      "4. X - 오히려 반대예요. 시간이 너무 짧아서 적응하지 못했다는 게 함의예요.",
      "5. O - 'It's only... that'은 강조 구문이에요."
    ],
    tip: "[Tip] 'It's only + 시간/조건 + that' 구조는 강조 구문이에요!\n\n의미: ~에서야 비로소 ~했다\n\n숫자 데이터(0.00004%)가 나오면 그 의미를 파악하세요. 여기서는 진화 시간 대비 환경 변화의 급격함을 강조해요."
  },
  {
    num: 48,
    sentence: "We are not naturally prosocial, which is evident from the fact that both religious and nonreligious authorities constantly have to command us to fulfill our obligations.",
    vocab: [
      "prosocial: 친사회적인",
      "evident: 분명한, 명백한",
      "authority: 권위, 당국",
      "constantly: 끊임없이",
      "fulfill: 이행하다, 충족시키다",
      "obligation: 의무"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 주장(__________________)  ← 증거(__________________)"
    ],
    quiz: [
      "1. 저자는 인간이 본성적으로 친사회적이라고 주장한다. ( O / X )",
      "2. 종교적, 비종교적 권위 모두 의무 이행을 명령한다. ( O / X )",
      "3. 권위의 명령이 필요하다는 것이 비친사회성의 증거이다. ( O / X )",
      "4. 'constantly'는 명령의 빈번함을 나타낸다. ( O / X )",
      "5. 인간은 명령 없이도 자연스럽게 의무를 이행한다. ( O / X )"
    ],
    translation: "우리는 본성적으로 친사회적이지 않다, / 이는 다음 사실에서 분명하다 / 종교적 권위와 비종교적 권위 모두 / 끊임없이 우리에게 의무를 이행하라고 명령해야 한다는.\n\n→ 우리가 본성적으로 친사회적이지 않다는 것은 종교적, 비종교적 권위 모두가 끊임없이 우리에게 의무를 이행하라고 명령해야 한다는 사실에서 분명하다.",
    logic_answer: [
      "중심 소재: 인간의 친사회성",
      "논리 관계: 주장(인간은 본성적으로 친사회적 아님) ← 증거(권위의 끊임없는 명령 필요)"
    ],
    explanation: "이 문장은 주장-증거 구조예요. 주장: 'not naturally prosocial'(본성적으로 친사회적이지 않다), 증거: 'constantly have to command'(끊임없이 명령해야 한다). 'which is evident from the fact that'이 주장과 증거를 연결해요. 만약 인간이 자연스럽게 친사회적이라면 명령이 필요 없을 텐데, 명령이 필요하다는 것이 비친사회성의 증거라는 논리예요.",
    quiz_answers: "1. X  2. O  3. O  4. O  5. X",
    quiz_explanations: [
      "1. X - 반대예요. 'not naturally prosocial'이라고 해요.",
      "2. O - 'both religious and nonreligious authorities constantly have to command'에서 직접 언급돼요.",
      "3. O - 'which is evident from the fact that'에서 증거 관계가 명시돼요.",
      "4. O - 'constantly'는 '끊임없이'로, 빈번함을 나타내요.",
      "5. X - 반대예요. 명령이 필요하다는 것이 논점이에요."
    ],
    tip: "[Tip] 'which is evident from the fact that'은 증거 제시 표현이에요!\n\n구조: 주장 + which is evident from + 증거\n\n시험에서 이런 증거 제시 구조가 나오면, 주장과 증거를 정확히 파악해야 해요. 증거가 주장을 어떻게 뒷받침하는지 논리를 이해하세요."
  },
  {
    num: 49,
    sentence: "The demands of living in super-large communities have made it necessary to impose demands of generosity—or at least neutrality—in our interactions with those with whom we live.",
    vocab: [
      "demand: 요구",
      "impose: 부과하다",
      "generosity: 관대함",
      "neutrality: 중립성",
      "interaction: 상호작용"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________"
    ],
    quiz: [
      "1. 대규모 공동체 생활이 관대함의 요구를 필요하게 만들었다. ( O / X )",
      "2. 중립성은 관대함의 대안으로 제시된다. ( O / X )",
      "3. 이 요구는 자연스럽게 생겨난 것이다. ( O / X )",
      "4. 'impose'는 자발적 행동을 나타낸다. ( O / X )",
      "5. 이 문장은 앞 문장(3번)의 논점을 뒷받침한다. ( O / X )"
    ],
    translation: "초대형 공동체에서 사는 것의 요구가 / 필요하게 만들었다 / 관대함의 요구를 부과하는 것을 / —또는 적어도 중립성의 요구를— / 우리가 함께 사는 사람들과의 상호작용에서.\n\n→ 초대형 공동체에서 살아야 하는 요구가 함께 사는 사람들과의 상호작용에서 관대함—또는 적어도 중립성—의 요구를 부과하는 것을 필요하게 만들었다.",
    logic_answer: [
      "중심 소재: 대규모 공동체와 친사회적 행동",
      "논리 관계: 대규모 공동체 생활 → 관대함/중립성 요구 부과 필요"
    ],
    explanation: "이 문장은 인과 관계 구조예요. 앞 문장(3번)의 '인간은 본성적으로 친사회적이지 않다'는 주장을 보완해요. 대규모 공동체 생활(원인) → 관대함/중립성 요구 부과 필요(결과)라는 논리예요. 'impose'(부과하다)에서 이것이 자연스러운 것이 아니라 외부에서 강제되는 것임을 알 수 있어요. 'or at least neutrality'에서 최소한의 요구도 제시돼요.",
    quiz_answers: "1. O  2. O  3. X  4. X  5. O",
    quiz_explanations: [
      "1. O - 'have made it necessary to impose demands of generosity'에서 직접 언급돼요.",
      "2. O - 'or at least neutrality'에서 관대함이 어려우면 최소한 중립성이라도 요구돼요.",
      "3. X - 반대예요. 'impose'(부과하다)에서 외부 강제임을 알 수 있어요.",
      "4. X - 'impose'는 '부과하다'로 외부에서 강제하는 것이에요.",
      "5. O - 3번(비친사회적 본성)의 결과로 이런 부과가 필요해졌다는 논리예요."
    ],
    tip: "[Tip] 'make it necessary to V'는 필요성의 인과를 나타내요!\n\n구조: A가 B를 필요하게 만들었다\n\n시험에서 이런 인과 표현이 나오면, 원인(A)과 결과(B)를 정확히 파악하세요. 'impose'처럼 강제성을 나타내는 동사도 주목하세요."
  },
  {
    num: 50,
    sentence: "Scientific evidence suggests that humans have a biological desire to help others, including strangers—altruistic behavior towards strangers is uniquely human and observed at a very young age.",
    vocab: [
      "scientific evidence: 과학적 증거",
      "biological: 생물학적인",
      "desire: 욕구",
      "altruistic: 이타적인",
      "uniquely: 독특하게, 유일하게"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 과학적 증거 = __________________ (특징: __________________)"
    ],
    quiz: [
      "1. 과학적 증거는 인간이 타인을 돕고자 하는 생물학적 욕구가 있음을 시사한다. ( O / X )",
      "2. 낯선 사람에 대한 이타적 행동은 인간에게만 독특하다. ( O / X )",
      "3. 이타적 행동은 성인이 되어서야 나타난다. ( O / X )",
      "4. 이 문장은 3번, 4번 문장과 상반된 주장을 한다. ( O / X )",
      "5. 'including strangers'는 이타성의 범위를 확장한다. ( O / X )"
    ],
    translation: "과학적 증거는 시사한다 / 인간이 타인을 돕고자 하는 생물학적 욕구를 가지고 있다고, / 낯선 사람을 포함하여 / —낯선 사람에 대한 이타적 행동은 / 인간에게만 독특하고 / 매우 어린 나이에 관찰된다.\n\n→ 과학적 증거는 인간이 낯선 사람을 포함한 타인을 돕고자 하는 생물학적 욕구를 가지고 있음을 시사한다 — 낯선 사람에 대한 이타적 행동은 인간에게만 독특하며 매우 어린 나이에 관찰된다.",
    logic_answer: [
      "중심 소재: 인간의 이타적 본성",
      "논리 관계: 과학적 증거 = 이타적 욕구의 생물학적 기반 (특징: 인간 고유, 어린 나이에 발현)"
    ],
    explanation: "이 문장은 증거-주장 구조예요. 3-4번 문장(비친사회적 본성)과 대조되는 관점이에요! 여기서는 과학적 증거가 '생물학적 이타성'을 지지한다고 해요. 'uniquely human'(인간에게만 독특)과 'at a very young age'(매우 어린 나이)가 이타성이 학습이 아닌 본성임을 뒷받침해요. 편입 시험에서 상반된 관점의 지문이 자주 나와요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'humans have a biological desire to help others'에서 직접 언급돼요.",
      "2. O - 'uniquely human'에서 직접 언급돼요.",
      "3. X - 반대예요. 'at a very young age'에 관찰된다고 해요.",
      "4. O - 3-4번(비친사회적)과 5번(이타적 본성)은 상반된 주장이에요.",
      "5. O - 낯선 사람까지 포함해서 이타성의 범위가 넓음을 보여줘요."
    ],
    tip: "[Tip] 상반된 관점의 문장들을 비교하세요!\n\n3-4번: 인간은 본성적으로 친사회적이지 않다\n5번: 과학적 증거는 생물학적 이타성을 시사한다\n\n시험에서 같은 주제에 대한 다른 관점이 나오면, 각 주장의 근거를 정확히 파악해야 해요."
  },
  {
    num: 51,
    sentence: "Because altruistic behavior appears in children so young, the researchers hypothesize that the human brain is designed to be altruistic.",
    vocab: [
      "altruistic: 이타적인",
      "hypothesize: 가설을 세우다",
      "designed: 설계된"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ (증거) → __________________ (가설)"
    ],
    quiz: [
      "1. 이타적 행동이 어린 아이에게 나타나는 것이 증거이다. ( O / X )",
      "2. 연구자들은 인간 뇌가 이타적으로 설계됐다고 가설을 세운다. ( O / X )",
      "3. 'hypothesize'는 확정적 결론을 나타낸다. ( O / X )",
      "4. 어린 나이의 발현은 학습보다 본성을 시사한다. ( O / X )",
      "5. 이 문장은 앞 문장(5번)의 주장을 뒷받침한다. ( O / X )"
    ],
    translation: "이타적 행동이 매우 어린 아이들에게서 나타나기 때문에, / 연구자들은 가설을 세운다 / 인간의 뇌가 이타적으로 설계되어 있다고.\n\n→ 이타적 행동이 매우 어린 아이들에게서 나타나기 때문에, 연구자들은 인간의 뇌가 이타적으로 설계되어 있다고 가설을 세운다.",
    logic_answer: [
      "중심 소재: 이타성의 생물학적 기반",
      "논리 관계: 어린 아이의 이타적 행동 (증거) → 뇌의 이타적 설계 (가설)"
    ],
    explanation: "이 문장은 'Because A, B' 인과 구조예요. 어린 아이에게서 이타적 행동이 나타난다(증거) → 뇌가 이타적으로 설계됐다(가설)는 논리예요. 'so young'이 핵심인데, 어린 나이는 학습의 영향이 적으므로 본성(생물학적 설계)을 시사하기 때문이에요. 'hypothesize'에서 아직 확정이 아닌 가설임을 알 수 있어요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'Because altruistic behavior appears in children so young'이 가설의 근거예요.",
      "2. O - 'hypothesize that the human brain is designed to be altruistic'에서 직접 언급돼요.",
      "3. X - 'hypothesize'는 '가설을 세우다'로, 확정이 아닌 추정이에요.",
      "4. O - 어린 나이에 나타난다는 것은 학습 전이므로 본성을 시사해요.",
      "5. O - 5번의 'at a very young age'를 근거로 가설을 제시해요."
    ],
    tip: "[Tip] 'Because A, researchers hypothesize that B' 구조를 파악하세요!\n\nA = 관찰된 증거 (어린 아이의 이타적 행동)\nB = 도출된 가설 (뇌의 이타적 설계)\n\n시험에서 'hypothesize', 'suggest', 'propose'는 확정적 결론이 아닌 가설/추정임을 나타내요."
  },
  {
    num: 52,
    sentence: "Astronomers can see how this process begins and how it ends, but what comes in the middle is inherently hard to observe, because much of the radiation comes out as far-infrared and submillimeter wavelengths.",
    vocab: [
      "astronomer: 천문학자",
      "inherently: 본질적으로",
      "radiation: 복사, 방사선",
      "far-infrared: 원적외선",
      "submillimeter: 서브밀리미터",
      "wavelength: 파장"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 관찰 가능(__________________)  vs 관찰 어려움(__________________, 이유: __________________)"
    ],
    quiz: [
      "1. 천문학자는 과정의 시작과 끝을 볼 수 있다. ( O / X )",
      "2. 과정의 중간은 본질적으로 관찰하기 어렵다. ( O / X )",
      "3. 관찰이 어려운 이유는 복사가 가시광선으로 나오기 때문이다. ( O / X )",
      "4. 원적외선과 서브밀리미터 파장은 관찰하기 쉽다. ( O / X )",
      "5. 이 문장은 천문학적 관찰의 한계를 설명한다. ( O / X )"
    ],
    translation: "천문학자들은 이 과정이 어떻게 시작하고 / 어떻게 끝나는지 볼 수 있다, / 그러나 중간에 오는 것은 본질적으로 관찰하기 어렵다, / 왜냐하면 복사의 대부분이 / 원적외선과 서브밀리미터 파장으로 나오기 때문이다.\n\n→ 천문학자들은 이 과정이 어떻게 시작하고 끝나는지 볼 수 있지만, 중간 과정은 본질적으로 관찰하기 어려운데, 복사의 대부분이 원적외선과 서브밀리미터 파장으로 나오기 때문이다.",
    logic_answer: [
      "중심 소재: 천문학적 관찰의 한계",
      "논리 관계: 관찰 가능(시작과 끝) vs 관찰 어려움(중간, 이유: 원적외선/서브밀리미터 파장)"
    ],
    explanation: "이 문장은 대조-인과 복합 구조예요. 'but'이 관찰 가능(시작/끝)과 관찰 어려움(중간)을 대조하고, 'because'가 관찰 어려움의 이유를 설명해요. 원적외선과 서브밀리미터 파장은 일반 망원경으로 관찰하기 어려운 파장대예요. 'inherently'(본질적으로)에서 이것이 기술 문제가 아닌 근본적 한계임을 알 수 있어요.",
    quiz_answers: "1. O  2. O  3. X  4. X  5. O",
    quiz_explanations: [
      "1. O - 'can see how this process begins and how it ends'에서 직접 언급돼요.",
      "2. O - 'what comes in the middle is inherently hard to observe'에서 직접 언급돼요.",
      "3. X - 반대예요. 'far-infrared and submillimeter wavelengths'로 나오기 때문에 어려워요.",
      "4. X - 반대예요. 이 파장들이 관찰을 어렵게 만들어요.",
      "5. O - 시작/끝은 가능하지만 중간은 어렵다는 관찰의 한계를 설명해요."
    ],
    tip: "[Tip] 'but... because' 복합 구조를 파악하세요!\n\nbut = 대조 (가능 vs 어려움)\nbecause = 이유 (왜 어려운가)\n\n시험에서 과학 지문은 '관찰/연구의 한계'와 그 이유를 자주 다뤄요. 기술적 한계인지 본질적 한계인지도 구별하세요."
  },
  {
    num: 53,
    sentence: "The dust particles in interstellar clouds block starlight and make them opaque to visible light—consequently, those of us who seek to observe star formation face a fundamental problem; stars cloak their own birth.",
    vocab: [
      "dust particle: 먼지 입자",
      "interstellar: 성간의",
      "block: 차단하다",
      "opaque: 불투명한",
      "consequently: 결과적으로",
      "cloak: 감추다, 가리다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________ → __________________"
    ],
    quiz: [
      "1. 성간 구름의 먼지 입자가 별빛을 차단한다. ( O / X )",
      "2. 성간 구름은 가시광선에 투명하다. ( O / X )",
      "3. 별 형성을 관찰하는 것에 근본적 문제가 있다. ( O / X )",
      "4. 'stars cloak their own birth'는 비유적 표현이다. ( O / X )",
      "5. 이 문장은 앞 문장(7번)의 내용을 구체화한다. ( O / X )"
    ],
    translation: "성간 구름의 먼지 입자들이 / 별빛을 차단하고 / 가시광선에 불투명하게 만든다 / —결과적으로, 별 형성을 관찰하려는 우리들은 / 근본적인 문제에 직면한다; / 별들은 자신의 탄생을 감춘다.\n\n→ 성간 구름의 먼지 입자들이 별빛을 차단하고 가시광선에 불투명하게 만들기 때문에, 별 형성을 관찰하려는 우리는 근본적인 문제에 직면한다 — 별들은 자신의 탄생을 감춘다.",
    logic_answer: [
      "중심 소재: 별 형성 관찰의 어려움",
      "논리 관계: 먼지가 빛 차단 → 가시광선에 불투명 → 별 형성 관찰 불가"
    ],
    explanation: "이 문장은 인과 사슬 구조예요. 먼지 입자 → 빛 차단 → 불투명 → 관찰 문제라는 연쇄예요. 'consequently'가 인과를 명시하고, 세미콜론 뒤의 'stars cloak their own birth'(별들이 자신의 탄생을 감춘다)가 시적으로 문제를 요약해요. 앞 문장(7번)의 '중간 과정 관찰 어려움'을 구체화한 내용이에요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'dust particles... block starlight'에서 직접 언급돼요.",
      "2. X - 반대예요. 'opaque to visible light'(가시광선에 불투명)이에요.",
      "3. O - 'face a fundamental problem'에서 직접 언급돼요.",
      "4. O - 별이 실제로 '감추는' 것이 아니라, 관찰이 어렵다는 것을 비유적으로 표현해요.",
      "5. O - 7번의 '중간 관찰 어려움'을 별 형성의 맥락에서 구체화해요."
    ],
    tip: "[Tip] 세미콜론(;) 뒤의 문장은 앞 내용의 요약이나 결론이에요!\n\n'stars cloak their own birth' = 별 형성 관찰 어려움의 시적 요약\n\n시험에서 비유적/시적 표현이 나오면, 그것이 무엇을 의미하는지 파악해야 해요."
  },
  {
    num: 54,
    sentence: "Many have claimed that, with billions of Earth-like planets, civilizations like ours must be common in our galaxy—however, the more we learn, the more implausible that appears.",
    vocab: [
      "claim: 주장하다",
      "civilization: 문명",
      "galaxy: 은하",
      "implausible: 믿기 어려운, 그럴듯하지 않은"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 기존 주장(__________________) ↔ 현재 견해(__________________)"
    ],
    quiz: [
      "1. 많은 사람들이 지구형 행성이 많으므로 문명도 흔할 것이라고 주장했다. ( O / X )",
      "2. 저자는 이 주장에 동의한다. ( O / X )",
      "3. 더 많이 알수록 그 주장이 더 믿기 어려워 보인다. ( O / X )",
      "4. 'the more... the more' 구문은 비례 관계를 나타낸다. ( O / X )",
      "5. 'however'는 기존 주장과 현재 견해의 대조를 나타낸다. ( O / X )"
    ],
    translation: "많은 사람들이 주장해왔다 / 수십억 개의 지구형 행성이 있으므로, / 우리 같은 문명이 우리 은하에 흔할 것이라고 / —그러나, 우리가 더 많이 알수록, / 그것은 더 믿기 어려워 보인다.\n\n→ 많은 사람들이 수십억 개의 지구형 행성이 있으므로 우리 같은 문명이 우리 은하에 흔할 것이라고 주장해왔다 — 그러나 우리가 더 많이 알수록 그것은 더 믿기 어려워 보인다.",
    logic_answer: [
      "중심 소재: 외계 문명의 존재 가능성",
      "논리 관계: 기존 주장(문명이 흔할 것) ↔ 현재 견해(더 알수록 더 믿기 어려움)"
    ],
    explanation: "이 문장은 주장-반박 구조예요. 'Many have claimed'로 기존 주장(지구형 행성 많음 → 문명 흔함)을 소개하고, 'however'로 반박을 도입해요. 'the more... the more'(더 ~할수록 더 ~하다) 구문이 학습과 회의의 비례 관계를 보여줘요. 더 많이 알수록 오히려 외계 문명이 드물어 보인다는 역설이에요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'Many have claimed that... civilizations like ours must be common'에서 직접 언급돼요.",
      "2. X - 반대예요. 'however'와 'implausible'에서 동의하지 않음을 알 수 있어요.",
      "3. O - 'the more we learn, the more implausible that appears'에서 직접 언급돼요.",
      "4. O - 'the more... the more'는 비례/상관 관계를 나타내요.",
      "5. O - 'however'가 기존 주장과 현재 견해를 대조해요."
    ],
    tip: "[Tip] 'the more A, the more B' 구문은 비례 관계를 나타내요!\n\n의미: A할수록 더 B하다\n\n시험에서 이 구문이 나오면 A와 B가 무엇인지 정확히 파악하세요. 여기서는 '학습'과 '회의(implausible)'가 비례해요."
  },
  {
    num: 55,
    sentence: "Complex biological beings did not evolve to traverse the vastness of interstellar space; if interstellar travelers exist, they will be robots capable of \"sleeping\" over many thousands of years.",
    vocab: [
      "complex: 복잡한",
      "evolve: 진화하다",
      "traverse: 횡단하다, 가로지르다",
      "vastness: 광대함",
      "interstellar: 성간의"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ (불가능) → __________________ (대안)"
    ],
    quiz: [
      "1. 복잡한 생물체는 성간 공간을 횡단하도록 진화하지 않았다. ( O / X )",
      "2. 성간 여행자가 있다면 로봇일 것이다. ( O / X )",
      "3. 생물체는 수천 년 동안 '잠들' 수 있다. ( O / X )",
      "4. 'sleeping'에 따옴표가 쓰인 것은 특수한 의미를 나타낸다. ( O / X )",
      "5. 저자는 성간 여행의 가능성을 완전히 부정한다. ( O / X )"
    ],
    translation: "복잡한 생물체는 / 성간 공간의 광대함을 횡단하도록 / 진화하지 않았다; / 만약 성간 여행자가 존재한다면, / 그들은 수천 년 동안 \"잠들\" 수 있는 / 로봇일 것이다.\n\n→ 복잡한 생물체는 성간 공간의 광대함을 횡단하도록 진화하지 않았다; 성간 여행자가 존재한다면, 그들은 수천 년 동안 \"잠들\" 수 있는 로봇일 것이다.",
    logic_answer: [
      "중심 소재: 성간 여행의 가능성",
      "논리 관계: 생물체의 성간 여행 (불가능) → 로봇이 대안 (대안)"
    ],
    explanation: "이 문장은 부정-조건 구조예요. 세미콜론 앞: 생물체는 성간 여행에 적합하지 않다(부정). 세미콜론 뒤: 성간 여행자가 있다면 로봇일 것이다(조건부 대안). 'sleeping'에 따옴표가 있는 것은 문자적 잠이 아니라 장기간 비활성 상태를 비유적으로 표현한 것이에요. 앞 문장(9번)의 '외계 문명이 드물다'는 논지와 연결돼요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. X",
    quiz_explanations: [
      "1. O - 'did not evolve to traverse the vastness of interstellar space'에서 직접 언급돼요.",
      "2. O - 'if interstellar travelers exist, they will be robots'에서 직접 언급돼요.",
      "3. X - 생물체가 아니라 로봇이 '잠들' 수 있다고 해요.",
      "4. O - 따옴표는 문자적 의미가 아닌 특수/비유적 의미를 나타내요.",
      "5. X - 완전 부정이 아니라 '로봇이라면 가능'이라는 조건부 가능성을 제시해요."
    ],
    tip: "[Tip] 따옴표(\"\")로 감싼 단어는 특수한 의미를 나타내요!\n\n'sleeping' = 문자적 잠이 아닌 장기간 비활성 상태\n\n시험에서 따옴표가 쓰인 단어는 일반적 의미와 다르게 쓰였음을 의미해요. 문맥에서 그 특수 의미를 파악하세요."
  },
  {
    num: 56,
    sentence: "The immune response is as self-sufficient as someone's heartbeat or breathing, yet immunity as a built-in response has a gaping flaw in it.",
    vocab: [
      "immune response: 면역 반응",
      "self-sufficient: 자급자족하는",
      "immunity: 면역",
      "built-in: 내장된",
      "gaping: 벌어진, 큰",
      "flaw: 결함"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 면역 반응의 특성(__________________)  ↔ 한계(__________________)"
    ],
    quiz: [
      "1. 면역 반응은 심장 박동이나 호흡처럼 자급자족적이다. ( O / X )",
      "2. 면역은 내장된 반응으로서 큰 결함이 있다. ( O / X )",
      "3. 'yet'은 앞뒤 내용의 유사성을 나타낸다. ( O / X )",
      "4. 심장 박동과 호흡은 의식적 통제가 필요하다. ( O / X )",
      "5. 저자는 면역 시스템의 한계를 지적한다. ( O / X )"
    ],
    translation: "면역 반응은 / 누군가의 심장 박동이나 호흡만큼 / 자급자족적이다, / 그러나 내장된 반응으로서의 면역은 / 큰 결함을 가지고 있다.\n\n→ 면역 반응은 심장 박동이나 호흡만큼 자급자족적이지만, 내장된 반응으로서의 면역에는 큰 결함이 있다.",
    logic_answer: [
      "중심 소재: 면역 반응의 특성과 한계",
      "논리 관계: 면역 반응의 특성(자급자족적/자동적) ↔ 한계(큰 결함 존재)"
    ],
    explanation: "이 문장은 양보-대조 구조예요. 면역 반응이 심장 박동/호흡처럼 '자급자족적(self-sufficient)', 즉 자동으로 작동한다는 점을 인정하면서(양보), 'yet'으로 '큰 결함(gaping flaw)'이 있다고 대조해요. 'gaping'(벌어진)이라는 강한 형용사가 결함의 심각성을 강조해요. 다음 문장에서 이 결함이 무엇인지 설명될 거예요.",
    quiz_answers: "1. O  2. O  3. X  4. X  5. O",
    quiz_explanations: [
      "1. O - 'as self-sufficient as someone's heartbeat or breathing'에서 직접 비유돼요.",
      "2. O - 'has a gaping flaw in it'에서 직접 언급돼요.",
      "3. X - 반대예요. 'yet'은 대조를 나타내요.",
      "4. X - 반대예요. 심장 박동과 호흡은 자동적/무의식적 활동의 예시예요.",
      "5. O - 'gaping flaw'에서 면역 시스템의 한계를 지적해요."
    ],
    tip: "[Tip] 'as A as B, yet C' 구조는 양보-대조예요!\n\nA as B = 특성 인정 (자급자족적)\nyet C = 그럼에도 불구하고 한계 (결함)\n\n시험에서 'yet', 'but', 'however' 뒤의 내용이 저자가 강조하고 싶은 핵심인 경우가 많아요."
  },
  {
    num: 57,
    sentence: "The dividing line between what happens automatically and what happens voluntarily is not fixed—choices matter, and thus the healing self comes into play.",
    vocab: [
      "dividing line: 경계선",
      "automatically: 자동으로",
      "voluntarily: 자발적으로",
      "fixed: 고정된",
      "come into play: 작용하다, 중요해지다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 경계선(__________________)  → 선택의 중요성 → __________________"
    ],
    quiz: [
      "1. 자동적인 것과 자발적인 것의 경계는 고정되어 있지 않다. ( O / X )",
      "2. 선택은 치유에 영향을 미친다. ( O / X )",
      "3. 'healing self'는 자동적 반응만을 의미한다. ( O / X )",
      "4. 'come into play'는 중요해진다는 의미이다. ( O / X )",
      "5. 이 문장은 앞 문장(11번)의 '결함'에 대한 해결책을 시사한다. ( O / X )"
    ],
    translation: "자동으로 일어나는 것과 / 자발적으로 일어나는 것 사이의 경계선은 / 고정되어 있지 않다 / —선택이 중요하고, / 따라서 치유하는 자아가 작용하게 된다.\n\n→ 자동으로 일어나는 것과 자발적으로 일어나는 것 사이의 경계선은 고정되어 있지 않다 — 선택이 중요하며, 따라서 치유하는 자아가 작용하게 된다.",
    logic_answer: [
      "중심 소재: 자동적 반응과 자발적 선택의 관계",
      "논리 관계: 경계선(유동적) → 선택의 중요성 → 치유하는 자아의 역할"
    ],
    explanation: "이 문장은 주장-결과 구조예요. 핵심 주장: 자동적/자발적 경계가 '고정되지 않았다(not fixed)'. 결과: 선택이 중요하고, 'healing self'(치유하는 자아)가 작용한다. 앞 문장(11번)의 면역 시스템 결함에 대한 해결책을 암시해요 — 자동적 면역 반응만으로는 부족하지만, 자발적 선택이 치유에 기여할 수 있다는 거예요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'is not fixed'에서 직접 언급돼요.",
      "2. O - 'choices matter'에서 선택의 중요성이 언급돼요.",
      "3. X - 반대예요. 'healing self'는 자발적 선택과 연결된 개념이에요.",
      "4. O - 'come into play'는 '작용하다, 중요해지다'라는 뜻이에요.",
      "5. O - 11번의 결함(자동 반응의 한계)에 대해 자발적 선택/치유 자아가 해결책으로 제시돼요."
    ],
    tip: "[Tip] '—' 뒤에 나오는 내용은 앞 주장의 함의나 결과예요!\n\n경계가 고정되지 않음 → 선택이 중요 → 치유 자아 작용\n\n시험에서 대시(—) 뒤의 내용은 앞 내용에서 도출되는 결론이나 시사점인 경우가 많아요."
  },
  {
    num: 58,
    sentence: "Indigenous people who maintain a traditional lifestyle eat a great deal of meat, yet they have a low blood lipid level and enjoy good cardiovascular health.",
    vocab: [
      "indigenous: 토착의, 원주민의",
      "maintain: 유지하다",
      "a great deal of: 많은",
      "blood lipid level: 혈중 지질 수치",
      "cardiovascular: 심혈관의"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ (예상) ↔ __________________ (실제)"
    ],
    quiz: [
      "1. 전통적 생활양식을 유지하는 원주민들은 고기를 많이 먹는다. ( O / X )",
      "2. 그들은 높은 혈중 지질 수치를 가진다. ( O / X )",
      "3. 그들은 좋은 심혈관 건강을 누린다. ( O / X )",
      "4. 이 문장은 역설적 현상을 보여준다. ( O / X )",
      "5. 'yet'은 예상과 실제의 불일치를 나타낸다. ( O / X )"
    ],
    translation: "전통적 생활양식을 유지하는 원주민들은 / 많은 고기를 먹는다, / 그러나 그들은 낮은 혈중 지질 수치를 가지고 / 좋은 심혈관 건강을 누린다.\n\n→ 전통적 생활양식을 유지하는 원주민들은 고기를 많이 먹지만, 낮은 혈중 지질 수치와 좋은 심혈관 건강을 가지고 있다.",
    logic_answer: [
      "중심 소재: 원주민의 식습관과 건강",
      "논리 관계: 고기 많이 먹음 (예상: 높은 지질/나쁜 건강) ↔ 낮은 지질/좋은 건강 (실제)"
    ],
    explanation: "이 문장은 역설/예상 반전 구조예요. 일반적으로 고기를 많이 먹으면 혈중 지질이 높고 심혈관 건강이 나쁠 것으로 예상하지만, 'yet'이 예상과 반대되는 실제 결과를 보여줘요. 이 역설이 다음 문장에서 설명될 핵심 질문이에요. 'indigenous people who maintain a traditional lifestyle'이라는 조건이 중요해요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'eat a great deal of meat'에서 직접 언급돼요.",
      "2. X - 반대예요. 'low blood lipid level'(낮은 혈중 지질 수치)이에요.",
      "3. O - 'enjoy good cardiovascular health'에서 직접 언급돼요.",
      "4. O - 고기를 많이 먹는데 건강하다는 것은 일반적 예상과 반대되는 역설이에요.",
      "5. O - 'yet'이 예상(고기 많이 → 건강 나쁨)과 실제(건강 좋음)의 불일치를 나타내요."
    ],
    tip: "[Tip] 역설적 현상이 제시되면 다음 문장에서 설명이 나와요!\n\n이 문장: 역설 제시 (고기 많이 먹는데 건강함)\n다음 문장: 설명 (왜 그런가?)\n\n시험에서 역설/예상 반전이 나오면, 그 설명이나 이유를 묻는 문제가 자주 나와요."
  },
  {
    num: 59,
    sentence: "The explanation is that their rate of metabolism is raised as a result of vigorous physical activity and in response to their frozen environment.",
    vocab: [
      "explanation: 설명",
      "metabolism: 신진대사",
      "raise: 높이다",
      "vigorous: 활발한",
      "in response to: ~에 반응하여"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 역설의 설명 = __________________ + __________________"
    ],
    quiz: [
      "1. 앞 문장의 역설에 대한 설명이 제시된다. ( O / X )",
      "2. 신진대사율이 높아진 것이 설명이다. ( O / X )",
      "3. 활발한 신체 활동이 신진대사율을 높인다. ( O / X )",
      "4. 추운 환경도 신진대사율에 영향을 미친다. ( O / X )",
      "5. 원주민들은 비활동적인 생활을 한다. ( O / X )"
    ],
    translation: "설명은 다음과 같다 / 그들의 신진대사율이 높아졌다 / 활발한 신체 활동의 결과로 / 그리고 얼어붙은 환경에 반응하여.\n\n→ 그 설명은 활발한 신체 활동의 결과로, 그리고 얼어붙은 환경에 반응하여 그들의 신진대사율이 높아졌다는 것이다.",
    logic_answer: [
      "중심 소재: 원주민 건강의 비밀",
      "논리 관계: 역설의 설명 = 활발한 신체 활동 + 추운 환경 → 높은 신진대사"
    ],
    explanation: "이 문장은 설명/인과 구조예요. 앞 문장(13번)의 역설(고기 많이 먹는데 건강함)에 대한 설명을 제시해요. 두 가지 이유: (1) vigorous physical activity(활발한 신체 활동), (2) frozen environment(추운 환경). 이 두 요인이 신진대사율을 높여서 지방을 효율적으로 연소시킨다는 거예요. 'as a result of'와 'in response to'가 인과를 나타내요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'The explanation is that'으로 시작해서 앞 역설을 설명해요.",
      "2. O - 'rate of metabolism is raised'가 핵심 설명이에요.",
      "3. O - 'as a result of vigorous physical activity'에서 직접 언급돼요.",
      "4. O - 'in response to their frozen environment'에서 직접 언급돼요.",
      "5. X - 반대예요. 'vigorous physical activity'(활발한 신체 활동)를 한다고 해요."
    ],
    tip: "[Tip] 'The explanation is that'은 앞 내용의 이유를 제시해요!\n\n앞 문장: 역설/현상 제시\n이 문장: 그 설명/이유\n\n시험에서 역설이 제시된 후 'explanation', 'reason', 'because' 등이 나오면, 그 내용이 핵심 답안이 될 가능성이 높아요."
  },
  {
    num: 60,
    sentence: "Girls generally speak sooner, learn to read faster and have fewer learning disorders—the reason may be that they use neural regions on both sides of their brain when they read.",
    vocab: [
      "generally: 일반적으로",
      "learning disorder: 학습 장애",
      "neural: 신경의",
      "region: 영역"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 현상(__________________) ← 이유(__________________)"
    ],
    quiz: [
      "1. 여자아이들은 일반적으로 더 일찍 말한다. ( O / X )",
      "2. 여자아이들은 학습 장애가 더 많다. ( O / X )",
      "3. 여자아이들이 읽을 때 뇌의 양쪽을 사용하는 것이 이유로 제시된다. ( O / X )",
      "4. 'may be'는 확정적 결론을 나타낸다. ( O / X )",
      "5. 이 내용은 DAY 3의 8번 문장(중국어/영어 화자)과 관련이 있다. ( O / X )"
    ],
    translation: "여자아이들은 일반적으로 / 더 일찍 말하고, / 더 빨리 읽기를 배우고, / 더 적은 학습 장애를 가진다 / —그 이유는 / 그들이 읽을 때 / 뇌의 양쪽에 있는 신경 영역을 사용하기 때문일 수 있다.\n\n→ 여자아이들은 일반적으로 더 일찍 말하고, 더 빨리 읽기를 배우며, 학습 장애가 더 적다 — 그 이유는 읽을 때 뇌의 양쪽 신경 영역을 사용하기 때문일 수 있다.",
    logic_answer: [
      "중심 소재: 여자아이의 언어 발달 우위",
      "논리 관계: 현상(조기 언어/독서, 적은 장애) ← 이유(뇌 양쪽 사용)"
    ],
    explanation: "이 문장은 현상-이유 구조예요. 현상: 여자아이들의 언어적 우위(조기 발화, 빠른 독서 학습, 적은 학습 장애). 이유: 읽을 때 뇌의 양쪽 신경 영역 사용. 'may be'에서 아직 가설임을 알 수 있어요. DAY 3의 8번(중국어 화자가 뇌 양쪽 사용)과 유사한 신경언어학적 내용이에요.",
    quiz_answers: "1. O  2. X  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'speak sooner'에서 직접 언급돼요.",
      "2. X - 반대예요. 'fewer learning disorders'(더 적은 학습 장애)예요.",
      "3. O - 'use neural regions on both sides of their brain when they read'가 이유로 제시돼요.",
      "4. X - 'may be'는 가능성/추정을 나타내요. 확정이 아니에요.",
      "5. O - 둘 다 '뇌 양쪽 사용'이 언어 처리에 영향을 미친다는 내용이에요."
    ],
    tip: "[Tip] 'the reason may be that'은 가설적 설명을 도입해요!\n\n'may be' = 확정이 아닌 가능성/가설\n\n시험에서 'may', 'might', 'could' 같은 조동사가 있으면 확정적 사실이 아닌 추정임을 기억하세요. 선지에서 '반드시', '확실히' 같은 표현이 있으면 오답일 가능성이 높아요."
  },
   {
    num: 61,
    sentence: "It was principally the influence of Christianity that deprived beauty of the central place it had in classical ideals of human excellence.",
    vocab: [
      "principally: 주로, 주되게",
      "influence: 영향",
      "deprive A of B: A에게서 B를 빼앗다",
      "classical: 고전적인",
      "excellence: 탁월함, 우수함"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________"
    ],
    quiz: [
      "1. 기독교의 영향이 아름다움의 지위를 변화시켰다. ( O / X )",
      "2. 고전적 이상에서 아름다움은 중심적 위치를 차지했다. ( O / X )",
      "3. 기독교는 아름다움의 중요성을 높였다. ( O / X )",
      "4. 'It was... that' 구문은 강조 구문이다. ( O / X )",
      "5. 'deprive A of B'는 A에게 B를 주다는 의미이다. ( O / X )"
    ],
    translation: "주로 기독교의 영향이었다 / 아름다움에게서 중심적 위치를 빼앗은 것은 / 그것이 인간 탁월함의 고전적 이상에서 가졌던.\n\n→ 인간 탁월함의 고전적 이상에서 아름다움이 차지했던 중심적 위치를 빼앗은 것은 주로 기독교의 영향이었다.",
    logic_answer: [
      "중심 소재: 아름다움의 지위 변화",
      "논리 관계: 기독교의 영향 → 아름다움의 중심적 지위 상실"
    ],
    explanation: "이 문장은 강조 구문(It was... that)을 사용한 인과 구조예요. 핵심은 'deprive beauty of the central place'(아름다움에게서 중심적 위치를 빼앗다)예요. 고전 시대에는 아름다움이 인간 탁월함의 핵심이었지만, 기독교의 영향으로 그 지위를 잃었다는 역사적 변화를 설명해요. 'principally'(주로)에서 기독교가 주된 원인임을 강조해요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. X",
    quiz_explanations: [
      "1. O - 'the influence of Christianity that deprived beauty of the central place'에서 직접 언급돼요.",
      "2. O - 'the central place it had in classical ideals'에서 고전적 이상에서의 중심적 위치가 언급돼요.",
      "3. X - 반대예요. 'deprived'(빼앗다)에서 중요성이 낮아졌음을 알 수 있어요.",
      "4. O - 'It was... that'은 강조 구문이에요.",
      "5. X - 반대예요. 'deprive A of B'는 'A에게서 B를 빼앗다'예요."
    ],
    tip: "[Tip] 'It was X that...' 강조 구문에서 X가 핵심이에요!\n\nX = 강조되는 대상 (기독교의 영향)\n\n시험에서 강조 구문이 나오면, 강조되는 요소(X)가 저자가 말하고 싶은 핵심이에요. 또한 'deprive A of B' 구문도 자주 나오니 정확히 외우세요."
  },
  {
    num: 62,
    sentence: "By limiting excellence to moral virtue only, Christianity set beauty adrift as an alienated, arbitrary, superficial enchantment.",
    vocab: [
      "limit A to B: A를 B로 제한하다",
      "moral virtue: 도덕적 덕",
      "set adrift: 표류하게 하다",
      "alienated: 소외된",
      "arbitrary: 자의적인",
      "superficial: 피상적인",
      "enchantment: 매혹, 황홀함"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________"
    ],
    quiz: [
      "1. 기독교는 탁월함을 도덕적 덕으로만 제한했다. ( O / X )",
      "2. 아름다움은 소외되고 피상적인 것으로 여겨지게 되었다. ( O / X )",
      "3. 'set adrift'는 아름다움이 안정된 위치를 얻었음을 의미한다. ( O / X )",
      "4. 기독교는 아름다움을 핵심 가치로 포함시켰다. ( O / X )",
      "5. 이 문장은 앞 문장(1번)의 내용을 구체화한다. ( O / X )"
    ],
    translation: "탁월함을 도덕적 덕으로만 제한함으로써, / 기독교는 아름다움을 표류하게 했다 / 소외되고, 자의적이고, 피상적인 매혹으로서.\n\n→ 탁월함을 도덕적 덕으로만 제한함으로써, 기독교는 아름다움을 소외되고, 자의적이며, 피상적인 매혹으로 표류하게 만들었다.",
    logic_answer: [
      "중심 소재: 기독교와 아름다움의 지위",
      "논리 관계: 탁월함을 도덕적 덕으로 제한 → 아름다움의 소외/평가절하"
    ],
    explanation: "이 문장은 'By V-ing' 인과 구조예요. 앞 문장(1번)을 구체화해요. 기독교가 '탁월함(excellence)'을 '도덕적 덕(moral virtue)'으로만 제한하면서(원인), 아름다움은 'alienated, arbitrary, superficial'(소외된, 자의적인, 피상적인)한 것으로 전락했어요(결과). 'set adrift'(표류하게 하다)라는 비유가 아름다움의 불안정한 지위를 잘 보여줘요.",
    quiz_answers: "1. O  2. O  3. X  4. X  5. O",
    quiz_explanations: [
      "1. O - 'limiting excellence to moral virtue only'에서 직접 언급돼요.",
      "2. O - 'alienated, arbitrary, superficial enchantment'에서 직접 언급돼요.",
      "3. X - 반대예요. 'set adrift'는 '표류하게 하다'로 불안정함을 의미해요.",
      "4. X - 반대예요. 도덕적 덕으로만 제한해서 아름다움은 배제됐어요.",
      "5. O - 1번(아름다움의 지위 상실)의 원인을 구체적으로 설명해요."
    ],
    tip: "[Tip] 'By V-ing, S V' 구조는 수단/방법에 의한 결과를 나타내요!\n\nBy V-ing = 방법/수단 (~함으로써)\nS V = 결과\n\n시험에서 'By V-ing' 뒤에 나오는 결과가 핵심이에요. 여기서는 아름다움의 '표류(set adrift)'가 결과예요."
  },
  {
    num: 63,
    sentence: "For close to two centuries it has become a convention to attribute beauty to only one of the two sexes: the sex which, however fair, is always second.",
    vocab: [
      "close to: 거의",
      "convention: 관습, 관례",
      "attribute A to B: A를 B의 탓으로 돌리다, A를 B에 귀속시키다",
      "fair: 아름다운, 공정한"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 관습 = __________________에게만 아름다움 귀속 (그 성의 특징: __________________)"
    ],
    quiz: [
      "1. 거의 2세기 동안 아름다움을 한 성에만 귀속시키는 것이 관습이 되었다. ( O / X )",
      "2. 아름다움이 귀속되는 성은 항상 '두 번째'로 여겨진다. ( O / X )",
      "3. 'however fair'는 양보의 의미를 담고 있다. ( O / X )",
      "4. 이 문장은 아름다움과 성별의 관계를 다룬다. ( O / X )",
      "5. 저자는 이 관습을 긍정적으로 평가한다. ( O / X )"
    ],
    translation: "거의 2세기 동안 / 아름다움을 두 성 중 하나에만 귀속시키는 것이 / 관습이 되었다: / 아무리 아름다워도 / 항상 두 번째인 성.\n\n→ 거의 2세기 동안 아름다움을 두 성 중 하나에만 귀속시키는 것이 관습이 되었다: 아무리 아름다워도 항상 두 번째로 여겨지는 성.",
    logic_answer: [
      "중심 소재: 아름다움과 성별",
      "논리 관계: 관습 = 여성에게만 아름다움 귀속 (그 성의 특징: 항상 '두 번째')"
    ],
    explanation: "이 문장은 정의/비판 구조예요. 아름다움이 '한 성(여성)'에만 귀속되는 관습을 설명해요. 'however fair, is always second'에서 아무리 아름다워도 그 성이 '두 번째(second)'로 여겨진다는 비판이 담겨있어요. '두 번째 성(second sex)'은 시몬 드 보부아르의 개념으로 여성을 지칭해요. 콜론(:) 뒤에 '한 성'이 무엇인지 부연해요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'it has become a convention to attribute beauty to only one of the two sexes'에서 직접 언급돼요.",
      "2. O - 'is always second'에서 직접 언급돼요.",
      "3. O - 'however fair'(아무리 아름다워도)는 양보의 의미예요.",
      "4. O - 아름다움이 특정 성에만 귀속되는 관습을 다뤄요.",
      "5. X - 'always second'라는 표현에서 비판적 태도가 드러나요."
    ],
    tip: "[Tip] 콜론(:) 뒤에는 앞 내용의 구체화나 설명이 와요!\n\n'one of the two sexes:' → 어떤 성인지 설명\n\n시험에서 'however + 형용사'는 양보(~해도)를 나타내요. 'however fair'는 'no matter how fair'와 같아요."
  },
  {
    num: 64,
    sentence: "Associating beauty with women has put beauty even further on the defensive, morally.",
    vocab: [
      "associate A with B: A를 B와 연관시키다",
      "put on the defensive: 수세에 몰리게 하다",
      "morally: 도덕적으로"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________"
    ],
    quiz: [
      "1. 아름다움을 여성과 연관시키는 것이 아름다움의 지위에 영향을 미쳤다. ( O / X )",
      "2. 아름다움은 도덕적으로 더 수세에 몰리게 되었다. ( O / X )",
      "3. 'even further'는 기존 상태에서 더 악화됨을 나타낸다. ( O / X )",
      "4. 아름다움과 여성의 연관은 아름다움의 지위를 높였다. ( O / X )",
      "5. 이 문장은 앞 문장들(1-3번)의 논지를 이어간다. ( O / X )"
    ],
    translation: "아름다움을 여성과 연관시키는 것이 / 아름다움을 더욱 수세에 몰리게 했다, / 도덕적으로.\n\n→ 아름다움을 여성과 연관시키는 것이 도덕적으로 아름다움을 더욱 수세에 몰리게 했다.",
    logic_answer: [
      "중심 소재: 아름다움과 여성의 연관",
      "논리 관계: 아름다움-여성 연관 → 아름다움의 도덕적 지위 더 하락"
    ],
    explanation: "이 문장은 인과 구조예요. 앞 문장들의 논지를 이어가요. 1-2번: 기독교가 아름다움의 지위를 낮춤, 3번: 아름다움이 여성에만 귀속됨, 4번: 그 연관이 아름다움을 '더욱(even further)' 수세에 몰리게 함. 'even further'가 기존의 하락에 추가적 하락이 있었음을 나타내요. 'morally'에서 도덕적 평가의 문제임을 알 수 있어요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'Associating beauty with women has put beauty... on the defensive'에서 직접 언급돼요.",
      "2. O - 'put beauty even further on the defensive, morally'에서 직접 언급돼요.",
      "3. O - 'even further'는 '더욱'으로, 기존 상태에서 더 악화됨을 나타내요.",
      "4. X - 반대예요. 'on the defensive'(수세에)로 지위가 낮아졌어요.",
      "5. O - 1-3번의 아름다움 평가절하 논지를 이어가요."
    ],
    tip: "[Tip] 'even further'는 정도의 심화를 나타내요!\n\n의미: 이전보다 더, 더욱\n\n시험에서 'even', 'further', 'more'가 결합되면 기존 상태에서 더 강화/악화됨을 나타내요. 앞 맥락과 연결해서 이해해야 해요."
  },
  {
    num: 65,
    sentence: "The shift from a teacher-centered, high-art focus to a more egalitarian, student-centered orientation highlights several issues about musical and educational values.",
    vocab: [
      "shift: 전환, 변화",
      "high-art: 고급 예술",
      "egalitarian: 평등주의적인",
      "orientation: 지향, 방향",
      "highlight: 부각시키다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 전환: __________________ → __________________"
    ],
    quiz: [
      "1. 교사 중심에서 학생 중심으로의 전환이 있었다. ( O / X )",
      "2. 고급 예술 중심에서 평등주의적 방향으로 전환되었다. ( O / X )",
      "3. 이 전환은 음악적, 교육적 가치에 관한 이슈를 부각시킨다. ( O / X )",
      "4. 'egalitarian'은 엘리트주의를 의미한다. ( O / X )",
      "5. 저자는 이 전환에 대해 중립적으로 서술한다. ( O / X )"
    ],
    translation: "교사 중심, 고급 예술 중심에서 / 더 평등주의적이고 학생 중심적인 방향으로의 전환이 / 여러 이슈를 부각시킨다 / 음악적, 교육적 가치에 관한.\n\n→ 교사 중심, 고급 예술 중심에서 더 평등주의적이고 학생 중심적인 방향으로의 전환이 음악적, 교육적 가치에 관한 여러 이슈를 부각시킨다.",
    logic_answer: [
      "중심 소재: 음악 교육의 패러다임 전환",
      "논리 관계: 전환: 교사 중심/고급 예술 → 학생 중심/평등주의"
    ],
    explanation: "이 문장은 변화/전환 구조예요. 'from A to B'로 두 패러다임을 대조해요. A: teacher-centered, high-art(교사 중심, 고급 예술), B: egalitarian, student-centered(평등주의적, 학생 중심). 이 전환이 '여러 이슈를 부각(highlights several issues)'시킨다고 해요. 'egalitarian'(평등주의적)이 핵심 키워드로, 엘리트주의와 반대 개념이에요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'from a teacher-centered... to a... student-centered orientation'에서 직접 언급돼요.",
      "2. O - 'from... high-art focus to a more egalitarian... orientation'에서 직접 언급돼요.",
      "3. O - 'highlights several issues about musical and educational values'에서 직접 언급돼요.",
      "4. X - 반대예요. 'egalitarian'은 '평등주의적인'으로 엘리트주의의 반대예요.",
      "5. O - 'highlights several issues'는 중립적 서술이에요. 긍정/부정 평가가 없어요."
    ],
    tip: "[Tip] 'from A to B' 구조는 변화/전환을 나타내요!\n\nA = 이전 상태 (교사 중심, 고급 예술)\nB = 이후 상태 (학생 중심, 평등주의)\n\n시험에서 이런 전환 구조가 나오면, A와 B의 대조점을 정확히 파악하세요."
  },
  {
    num: 66,
    sentence: "The presence of these various sources is indicative of the breakdown of monolithic value systems, the demise of cultural hegemony, and the emergence of a world-view that acknowledges diverse ways of being musical.",
    vocab: [
      "presence: 존재",
      "indicative of: ~을 나타내는",
      "breakdown: 붕괴",
      "monolithic: 획일적인, 단일체의",
      "demise: 종말, 소멸",
      "hegemony: 패권, 지배",
      "emergence: 출현",
      "acknowledge: 인정하다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 다양한 원천의 존재 = __________________ + __________________ + __________________"
    ],
    quiz: [
      "1. 다양한 원천의 존재는 획일적 가치 체계의 붕괴를 나타낸다. ( O / X )",
      "2. 문화적 패권의 종말이 언급된다. ( O / X )",
      "3. 다양한 음악적 존재 방식을 인정하는 세계관이 출현했다. ( O / X )",
      "4. 'monolithic'은 다양성을 의미한다. ( O / X )",
      "5. 이 문장은 세 가지 변화를 나열한다. ( O / X )"
    ],
    translation: "이러한 다양한 원천의 존재는 / ~을 나타낸다 / 획일적 가치 체계의 붕괴, / 문화적 패권의 종말, / 그리고 다양한 음악적 존재 방식을 인정하는 / 세계관의 출현을.\n\n→ 이러한 다양한 원천의 존재는 획일적 가치 체계의 붕괴, 문화적 패권의 종말, 그리고 다양한 음악적 존재 방식을 인정하는 세계관의 출현을 나타낸다.",
    logic_answer: [
      "중심 소재: 음악 교육의 다원화",
      "논리 관계: 다양한 원천의 존재 = 획일적 가치 붕괴 + 문화 패권 종말 + 다원적 세계관 출현"
    ],
    explanation: "이 문장은 나열/지표 구조예요. 'is indicative of'(~을 나타낸다) 뒤에 세 가지가 나열돼요: (1) breakdown of monolithic value systems(획일적 가치 체계 붕괴), (2) demise of cultural hegemony(문화적 패권 종말), (3) emergence of a world-view(세계관 출현). 모두 다원주의적 변화를 나타내요. 앞 문장(5번)의 '전환'이 무엇을 의미하는지 구체화해요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'indicative of the breakdown of monolithic value systems'에서 직접 언급돼요.",
      "2. O - 'the demise of cultural hegemony'에서 직접 언급돼요.",
      "3. O - 'a world-view that acknowledges diverse ways of being musical'에서 직접 언급돼요.",
      "4. X - 반대예요. 'monolithic'은 '획일적인, 단일체의'로 다양성의 반대예요.",
      "5. O - breakdown, demise, emergence 세 가지가 나열돼요."
    ],
    tip: "[Tip] 'is indicative of'는 지표/증거 관계를 나타내요!\n\nA is indicative of B = A는 B를 나타낸다/보여준다\n\n시험에서 이런 지표 표현 뒤에 나오는 내용이 핵심 현상이에요. 나열되는 항목들의 공통점(여기서는 다원화)을 파악하세요."
  },
  {
    num: 67,
    sentence: "Civilization hangs on the Kantian principle that human beings are to be treated as ends and not means.",
    vocab: [
      "civilization: 문명",
      "hang on: ~에 달려 있다",
      "principle: 원칙",
      "treat: 대하다, 취급하다",
      "end: 목적",
      "means: 수단"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 문명의 기반 = __________________ (내용: __________________)"
    ],
    quiz: [
      "1. 문명은 칸트의 원칙에 달려 있다. ( O / X )",
      "2. 인간은 수단이 아닌 목적으로 대우받아야 한다. ( O / X )",
      "3. 'ends'는 목적을, 'means'는 수단을 의미한다. ( O / X )",
      "4. 칸트의 원칙은 인간을 수단으로 사용하는 것을 지지한다. ( O / X )",
      "5. 이 문장은 윤리적 원칙을 설명한다. ( O / X )"
    ],
    translation: "문명은 ~에 달려 있다 / 칸트의 원칙에 / 인간은 목적으로 대우받아야 하고 / 수단으로 대우받아서는 안 된다는.\n\n→ 문명은 인간이 수단이 아닌 목적으로 대우받아야 한다는 칸트의 원칙에 달려 있다.",
    logic_answer: [
      "중심 소재: 문명의 윤리적 기반",
      "논리 관계: 문명의 기반 = 칸트의 원칙 (내용: 인간 = 목적 ≠ 수단)"
    ],
    explanation: "이 문장은 정의/기반 구조예요. 문명이 '칸트의 원칙(Kantian principle)'에 '달려 있다(hangs on)'고 해요. 그 원칙: 인간은 '목적(ends)'으로 대우받아야 하고 '수단(means)'으로 대우받아서는 안 된다. 이것이 칸트 윤리학의 핵심인 '정언명령'의 일부예요. 다음 문장에서 이 원칙이 어디서 문제가 되는지 나올 거예요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'Civilization hangs on the Kantian principle'에서 직접 언급돼요.",
      "2. O - 'human beings are to be treated as ends and not means'에서 직접 언급돼요.",
      "3. O - 'ends'(목적)와 'means'(수단)는 칸트 윤리학의 핵심 개념이에요.",
      "4. X - 반대예요. 'not means'라고 해서 수단으로 사용을 반대해요.",
      "5. O - 칸트의 윤리적 원칙을 설명하는 문장이에요."
    ],
    tip: "[Tip] 'ends vs means'는 칸트 윤리학의 핵심 개념이에요!\n\nends = 목적 (인간 존엄성)\nmeans = 수단 (도구적 사용)\n\n시험에서 윤리학 관련 지문이 나오면 이 개념이 자주 등장해요. '인간은 목적이지 수단이 아니다'를 기억하세요."
  },
  {
    num: 68,
    sentence: "Medical experimentation, which invokes the claims of the future, necessarily turns people into means—that is why the Nuremberg Code on human experimentation declares that for research to be ethical the subject must give consent.",
    vocab: [
      "experimentation: 실험",
      "invoke: 호소하다, 불러일으키다",
      "claim: 요구, 주장",
      "necessarily: 필연적으로",
      "Nuremberg Code: 뉘른베르크 강령",
      "declare: 선언하다",
      "consent: 동의"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________ → __________________"
    ],
    quiz: [
      "1. 의학 실험은 사람을 수단으로 만든다. ( O / X )",
      "2. 뉘른베르크 강령은 동의를 요구한다. ( O / X )",
      "3. 의학 실험은 미래의 이익을 위해 수행된다. ( O / X )",
      "4. '동의'가 윤리적 연구의 조건이다. ( O / X )",
      "5. 이 문장은 앞 문장(7번)의 원칙이 적용되는 사례를 보여준다. ( O / X )"
    ],
    translation: "의학 실험은, / 미래의 요구를 호소하는, / 필연적으로 사람을 수단으로 만든다 / —그래서 인체 실험에 관한 뉘른베르크 강령은 선언한다 / 연구가 윤리적이려면 / 피험자가 동의해야 한다고.\n\n→ 미래의 요구를 호소하는 의학 실험은 필연적으로 사람을 수단으로 만든다 — 그래서 인체 실험에 관한 뉘른베르크 강령은 연구가 윤리적이려면 피험자가 동의해야 한다고 선언한다.",
    logic_answer: [
      "중심 소재: 의학 실험의 윤리",
      "논리 관계: 의학 실험 = 사람을 수단화 → 윤리적 문제 → 동의 필요(뉘른베르크 강령)"
    ],
    explanation: "이 문장은 인과 사슬 구조예요. 의학 실험이 사람을 '수단(means)'으로 만든다(앞 문장 7번의 칸트 원칙 위반) → 그래서(that is why) 뉘른베르크 강령이 '동의(consent)'를 요구한다. 'invokes the claims of the future'에서 미래 세대를 위해 현재 피험자를 수단으로 사용한다는 점이 드러나요. 동의가 이 윤리적 딜레마의 해결책으로 제시돼요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'necessarily turns people into means'에서 직접 언급돼요.",
      "2. O - 'the subject must give consent'에서 직접 언급돼요.",
      "3. O - 'invokes the claims of the future'에서 미래를 위해 수행됨을 알 수 있어요.",
      "4. O - 'for research to be ethical the subject must give consent'에서 직접 언급돼요.",
      "5. O - 7번(인간은 수단이 아닌 목적)의 원칙이 의학 실험에서 어떻게 적용되는지 보여줘요."
    ],
    tip: "[Tip] 'that is why'는 인과 관계를 명시해요!\n\n앞 내용 = 원인 (사람을 수단으로 만듦)\nthat is why 뒤 = 결과 (동의 필요 선언)\n\n시험에서 'that is why', 'therefore', 'hence' 뒤에 나오는 내용이 핵심 결론이에요."
  },
  {
    num: 69,
    sentence: "The white race divides itself upon economic grounds—the landowning whites look down on everyone else, mostly the working class Cajun whites.",
    vocab: [
      "divide: 나누다",
      "upon: ~에 기반하여",
      "grounds: 근거, 이유",
      "landowning: 토지 소유의",
      "look down on: 깔보다, 무시하다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 백인 내 분열 기준 = __________________ (상위: __________________ / 하위: __________________)"
    ],
    quiz: [
      "1. 백인 인종은 경제적 기반으로 스스로를 나눈다. ( O / X )",
      "2. 토지 소유 백인이 다른 백인을 깔본다. ( O / X )",
      "3. 케이준 백인은 주로 노동자 계급이다. ( O / X )",
      "4. 인종 내 분열이 경제적 요인에 기반한다. ( O / X )",
      "5. 'look down on'은 존경을 나타낸다. ( O / X )"
    ],
    translation: "백인 인종은 경제적 근거로 / 스스로를 나눈다 / —토지 소유 백인들이 다른 모든 사람을 깔본다, / 주로 노동자 계급 케이준 백인들을.\n\n→ 백인 인종은 경제적 근거로 스스로를 나눈다 — 토지 소유 백인들이 다른 모든 사람, 주로 노동자 계급 케이준 백인들을 깔본다.",
    logic_answer: [
      "중심 소재: 백인 내부의 경제적 분열",
      "논리 관계: 백인 내 분열 기준 = 경제적 근거 (상위: 토지 소유 백인 / 하위: 노동자 계급 케이준)"
    ],
    explanation: "이 문장은 구조/분류 구조예요. 백인 인종 내부의 분열을 설명해요. 분열 기준: 'economic grounds'(경제적 근거). 상위: 'landowning whites'(토지 소유 백인), 하위: 'working class Cajun whites'(노동자 계급 케이준 백인). 'look down on'(깔보다)에서 계급적 차별이 드러나요. 인종 내부의 경제적 계층화를 보여주는 예시예요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'divides itself upon economic grounds'에서 직접 언급돼요.",
      "2. O - 'landowning whites look down on everyone else'에서 직접 언급돼요.",
      "3. O - 'working class Cajun whites'에서 직접 언급돼요.",
      "4. O - 'economic grounds'가 분열의 기준이에요.",
      "5. X - 반대예요. 'look down on'은 '깔보다, 무시하다'라는 부정적 의미예요."
    ],
    tip: "[Tip] 대시(—) 뒤에는 앞 내용의 구체화나 예시가 와요!\n\n'divides itself upon economic grounds' → 구체적으로 어떻게?\n→ 토지 소유 백인이 노동자 계급 백인을 깔봄\n\n시험에서 추상적 진술 뒤에 대시가 오면, 그 뒤가 구체적 예시예요."
  },
  {
    num: 70,
    sentence: "The concept of racism within the black community itself suggests the ridiculousness in using skin color as a means of social division.",
    vocab: [
      "concept: 개념",
      "racism: 인종차별",
      "within: ~ 내에서",
      "suggest: 시사하다",
      "ridiculousness: 우스꽝스러움, 어리석음",
      "social division: 사회적 분열"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________ 시사"
    ],
    quiz: [
      "1. 흑인 공동체 내부에도 인종차별 개념이 존재한다. ( O / X )",
      "2. 피부색을 사회적 분열의 수단으로 사용하는 것이 어리석다. ( O / X )",
      "3. 저자는 인종차별의 논리를 비판한다. ( O / X )",
      "4. 흑인 공동체 내 인종차별은 외부 인종차별과 무관하다. ( O / X )",
      "5. 이 문장은 앞 문장(9번)과 유사한 논점을 다룬다. ( O / X )"
    ],
    translation: "흑인 공동체 내부의 인종차별 개념은 / 시사한다 / 피부색을 사회적 분열의 수단으로 사용하는 것의 / 우스꽝스러움을.\n\n→ 흑인 공동체 내부에서의 인종차별 개념은 피부색을 사회적 분열의 수단으로 사용하는 것의 어리석음을 시사한다.",
    logic_answer: [
      "중심 소재: 인종차별의 모순",
      "논리 관계: 흑인 공동체 내 인종차별 존재 → 피부색 기준 분열의 어리석음 시사"
    ],
    explanation: "이 문장은 역설/비판 구조예요. 흑인 공동체 '내부에서도(within)' 인종차별이 존재한다는 것이 역설적이에요. 이 역설이 '피부색으로 사회를 나누는 것의 어리석음(ridiculousness)'을 보여준다는 논리예요. 앞 문장(9번, 백인 내부 분열)과 함께, 단일 집단 내에서도 분열이 존재한다는 점이 분열 기준 자체의 허구성을 드러내요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'racism within the black community itself'에서 직접 언급돼요.",
      "2. O - 'ridiculousness in using skin color as a means of social division'에서 직접 언급돼요.",
      "3. O - 'ridiculousness'(어리석음)에서 비판적 태도가 드러나요.",
      "4. X - 흑인 내부 인종차별의 존재가 인종차별 논리 자체의 문제를 보여줘요.",
      "5. O - 9번(백인 내부 분열)과 10번(흑인 내부 인종차별) 모두 집단 내 분열의 모순을 다뤄요."
    ],
    tip: "[Tip] 'suggests the ridiculousness'에서 저자의 비판적 태도가 드러나요!\n\n'ridiculousness' = 어리석음, 우스꽝스러움\n\n시험에서 'ridiculous', 'absurd', 'ironic' 같은 단어는 저자가 비판하는 대상을 나타내요."
  },
  {
    num: 71,
    sentence: "In its effort at social engineering to build the perfect society, Singapore has, among other things, banned chewing gum, run campaigns encouraging people to smile, and passed edicts to stop children from climbing trees.",
    vocab: [
      "social engineering: 사회 공학",
      "among other things: 무엇보다도, 특히",
      "ban: 금지하다",
      "campaign: 캠페인",
      "edict: 칙령, 법령"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 목표(__________________)  → 수단(__________________, __________________, __________________)"
    ],
    quiz: [
      "1. 싱가포르는 완벽한 사회를 만들기 위해 사회 공학을 시도한다. ( O / X )",
      "2. 껌이 금지되었다. ( O / X )",
      "3. 미소 짓기를 장려하는 캠페인이 진행되었다. ( O / X )",
      "4. 아이들의 나무 타기를 금지하는 법령이 통과되었다. ( O / X )",
      "5. 저자는 이러한 조치들에 대해 중립적이다. ( O / X )"
    ],
    translation: "완벽한 사회를 건설하기 위한 사회 공학의 노력에서, / 싱가포르는, 무엇보다도, / 껌을 금지하고, / 사람들에게 미소 짓기를 장려하는 캠페인을 진행하고, / 아이들이 나무 타는 것을 막는 법령을 통과시켰다.\n\n→ 완벽한 사회를 건설하기 위한 사회 공학의 노력으로, 싱가포르는 특히 껌을 금지하고, 미소 짓기를 장려하는 캠페인을 진행하고, 아이들의 나무 타기를 막는 법령을 통과시켰다.",
    logic_answer: [
      "중심 소재: 싱가포르의 사회 공학",
      "논리 관계: 목표(완벽한 사회 건설) → 수단(껌 금지, 미소 캠페인, 나무 타기 금지)"
    ],
    explanation: "이 문장은 목표-수단 나열 구조예요. 목표: 'to build the perfect society'(완벽한 사회 건설). 수단: 세 가지 예시가 나열돼요 - (1) banned chewing gum, (2) run campaigns encouraging people to smile, (3) passed edicts to stop children from climbing trees. 이 예시들의 사소함이 암묵적 비판을 담고 있어요. 'social engineering'이라는 표현도 부정적 뉘앙스가 있어요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'In its effort at social engineering to build the perfect society'에서 직접 언급돼요.",
      "2. O - 'banned chewing gum'에서 직접 언급돼요.",
      "3. O - 'run campaigns encouraging people to smile'에서 직접 언급돼요.",
      "4. O - 'passed edicts to stop children from climbing trees'에서 직접 언급돼요.",
      "5. X - 사소한 규제들의 나열 자체가 암묵적 비판이에요. 완전히 중립적이지 않아요."
    ],
    tip: "[Tip] 나열된 예시들의 공통점이나 뉘앙스를 파악하세요!\n\n껌 금지, 미소 강요, 나무 타기 금지 → 모두 사소하고 과도한 규제\n\n시험에서 예시가 나열될 때, 그 예시들이 저자의 어떤 태도(긍정/부정/중립)를 반영하는지 파악하세요."
  },
  {
    num: 72,
    sentence: "Since 1984 the Social Development Unit, a government agency, has even attempted to create smarter Singaporeans by playing Cupid, organizing dances for eligible college graduates.",
    vocab: [
      "Social Development Unit: 사회개발부",
      "agency: 기관",
      "attempt: 시도하다",
      "play Cupid: 중매를 서다",
      "eligible: 자격이 있는"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 목표(__________________)  → 방법(__________________)"
    ],
    quiz: [
      "1. 1984년부터 정부 기관이 더 똑똑한 싱가포르인을 만들려고 시도했다. ( O / X )",
      "2. 대학 졸업자들을 위한 댄스 파티가 조직되었다. ( O / X )",
      "3. 'playing Cupid'는 중매를 의미한다. ( O / X )",
      "4. 이것은 우생학적 사회 공학의 예시이다. ( O / X )",
      "5. 'even'은 이 시도가 더 극단적임을 나타낸다. ( O / X )"
    ],
    translation: "1984년 이래로 / 사회개발부라는 정부 기관이 / 심지어 더 똑똑한 싱가포르인을 만들려고 시도해왔다 / 큐피드 역할을 하면서, / 자격 있는 대학 졸업자들을 위한 댄스 파티를 조직하면서.\n\n→ 1984년 이래로, 정부 기관인 사회개발부는 심지어 자격 있는 대학 졸업자들을 위한 댄스 파티를 조직하며 큐피드 역할을 함으로써 더 똑똑한 싱가포르인을 만들려고 시도해왔다.",
    logic_answer: [
      "중심 소재: 싱가포르의 인구 정책",
      "논리 관계: 목표(더 똑똑한 국민 만들기) → 방법(대졸자 중매)"
    ],
    explanation: "이 문장은 앞 문장(11번)의 연장으로, 더 극단적인 예시를 제시해요. 'even'(심지어)이 정도의 강화를 나타내요. 'playing Cupid'(큐피드 역할 = 중매)로 대학 졸업자들끼리 결혼시켜 '더 똑똑한' 후손을 만들려는 시도예요. 이는 일종의 우생학적 정책으로 해석될 수 있어요. 저자의 비판적 뉘앙스가 암시돼요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'attempted to create smarter Singaporeans'에서 직접 언급돼요.",
      "2. O - 'organizing dances for eligible college graduates'에서 직접 언급돼요.",
      "3. O - 'play Cupid'는 중매를 서다, 연애를 주선하다는 의미예요.",
      "4. O - 더 똑똑한 후손을 위해 대졸자 중매는 우생학적 정책의 특성이 있어요.",
      "5. O - 'even'은 11번의 예시들보다 이것이 더 극단적임을 나타내요."
    ],
    tip: "[Tip] 'even'은 정도의 강화/극단을 나타내요!\n\n11번: 껌 금지, 미소 캠페인, 나무 금지\n12번: 심지어(even) 중매까지\n\n시험에서 'even'이 나오면 이전보다 더 강하거나 극단적인 예시가 온다는 신호예요."
  },
  {
    num: 73,
    sentence: "A point often brought up these days is that every young person wants to be famous 'just for fame's sake'—a generation is growing up in a society that embraces the status of celebrity, even when some celebrities do not appear to actually 'do' anything much.",
    vocab: [
      "bring up: 제기하다, 언급하다",
      "for fame's sake: 유명세 자체를 위해",
      "embrace: 받아들이다, 포용하다",
      "celebrity: 유명인"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 현대 사회의 특징 = __________________ (역설: __________________)"
    ],
    quiz: [
      "1. 요즘 젊은이들이 유명세 자체를 위해 유명해지고 싶어 한다는 점이 자주 언급된다. ( O / X )",
      "2. 이 세대는 유명인의 지위를 받아들이는 사회에서 자란다. ( O / X )",
      "3. 모든 유명인은 특별한 재능이 있다. ( O / X )",
      "4. 'just for fame's sake'에서 따옴표는 비판적 뉘앙스를 담고 있다. ( O / X )",
      "5. 이 문장은 현대 유명 문화를 비판한다. ( O / X )"
    ],
    translation: "요즘 자주 제기되는 요점은 / 모든 젊은이가 '유명세 자체를 위해' 유명해지고 싶어 한다는 것이다 / —한 세대가 자라고 있다 / 유명인의 지위를 받아들이는 사회에서, / 심지어 일부 유명인들이 실제로 뭔가를 '하는' 것처럼 보이지 않을 때에도.\n\n→ 요즘 자주 제기되는 요점은 모든 젊은이가 '유명세 자체를 위해' 유명해지고 싶어 한다는 것이다 — 한 세대가 심지어 일부 유명인들이 실제로 뭔가를 '하는' 것처럼 보이지 않을 때에도 유명인의 지위를 받아들이는 사회에서 자라고 있다.",
    logic_answer: [
      "중심 소재: 현대의 유명 문화",
      "논리 관계: 현대 사회의 특징 = 유명세 자체 추구 (역설: 유명인이 아무것도 안 해도)"
    ],
    explanation: "이 문장은 현상-역설 구조예요. 현상: 젊은이들이 '유명세 자체를 위해(for fame's sake)' 유명해지고 싶어 함. 역설: 유명인들이 '실제로 뭔가를 하는 것 같지 않은데도(do not appear to actually do anything)' 그 지위가 받아들여짐. 따옴표(' ')가 'fame's sake'와 'do'에 쓰여 비판적/회의적 뉘앙스를 담아요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'every young person wants to be famous just for fame's sake'에서 직접 언급돼요.",
      "2. O - 'a society that embraces the status of celebrity'에서 직접 언급돼요.",
      "3. X - 반대예요. 'do not appear to actually do anything much'라고 해서 재능 없는 유명인도 있어요.",
      "4. O - 따옴표는 해당 표현에 대한 거리두기/비판적 뉘앙스를 나타내요.",
      "5. O - 'just for fame's sake'와 '실제로 아무것도 안 함'에서 비판적 태도가 드러나요."
    ],
    tip: "[Tip] 따옴표(' ')는 거리두기나 비판적 뉘앙스를 나타낼 수 있어요!\n\n'just for fame's sake' = 이 표현에 동의하지 않거나 비판적\n'do' = 실제로 '한다'고 할 수 있는지 의문\n\n시험에서 따옴표가 쓰인 표현은 저자가 거리를 두거나 비판하는 것일 수 있어요."
  },
  {
    num: 74,
    sentence: "Now, however, we have celebrities gracing the covers of magazines who do not actually seem to possess any particular talent at all.",
    vocab: [
      "grace: 빛내다, 장식하다",
      "cover: 표지",
      "possess: 소유하다, 가지다",
      "particular: 특별한",
      "at all: 전혀"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 현재 상황 = __________________ (특징: __________________)"
    ],
    quiz: [
      "1. 현재 특별한 재능이 없어 보이는 유명인들이 잡지 표지에 나온다. ( O / X )",
      "2. 'however'는 이전 상황과의 대조를 나타낸다. ( O / X )",
      "3. 'grace'는 부정적 의미로 사용되었다. ( O / X )",
      "4. 모든 유명인이 특별한 재능을 가지고 있다. ( O / X )",
      "5. 이 문장은 앞 문장(13번)의 논점을 뒷받침한다. ( O / X )"
    ],
    translation: "그러나 현재, / 우리에게는 유명인들이 있다 / 잡지 표지를 빛내는 / 실제로 어떤 특별한 재능도 / 전혀 가진 것 같지 않은.\n\n→ 그러나 현재, 실제로 어떤 특별한 재능도 전혀 가지고 있지 않은 것 같은 유명인들이 잡지 표지를 장식하고 있다.",
    logic_answer: [
      "중심 소재: 현대 유명인의 특성",
      "논리 관계: 현재 상황 = 무재능 유명인의 잡지 표지 등장 (특징: 재능 없음)"
    ],
    explanation: "이 문장은 대조/현상 서술 구조예요. 'Now, however'가 이전 시대(재능 있는 유명인)와 현재(재능 없는 유명인)를 대조해요. 'do not actually seem to possess any particular talent at all'에서 '전혀(at all)' 재능이 없다고 강하게 부정해요. 'grace'(빛내다)가 아이러니하게 사용됐어요 — 재능 없는 사람이 표지를 '빛낸다'는 역설.",
    quiz_answers: "1. O  2. O  3. X  4. X  5. O",
    quiz_explanations: [
      "1. O - 'celebrities... who do not actually seem to possess any particular talent at all'에서 직접 언급돼요.",
      "2. O - 'Now, however'가 이전 상황과의 대조를 나타내요.",
      "3. X - 'grace'는 문자적으로 긍정적이지만, 맥락상 아이러니하게 사용됐어요.",
      "4. X - 반대예요. 'do not... possess any particular talent at all'이라고 해요.",
      "5. O - 13번의 '아무것도 안 하는 유명인'을 구체화해요."
    ],
    tip: "[Tip] 'at all'은 부정을 강화해요!\n\n'do not possess any... at all' = 전혀 가지고 있지 않다\n\n시험에서 'at all', 'whatsoever', 'in the least'는 부정의 강도를 높여요. 완전한 부정임을 나타내요."
  },
  {
    num: 75,
    sentence: "Brought up on a diet of reality TV and celebrity magazines, many seem to have lost both the ambition and the desire to work hard towards a credible goal.",
    vocab: [
      "bring up: 양육하다",
      "a diet of: ~을 먹고 자란, ~에 노출된",
      "ambition: 야망",
      "credible: 믿을 만한, 신뢰할 수 있는"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________"
    ],
    quiz: [
      "1. 리얼리티 TV와 유명인 잡지를 보며 자란 사람들이 언급된다. ( O / X )",
      "2. 많은 사람들이 야망과 열심히 일하려는 욕구를 잃은 것 같다. ( O / X )",
      "3. '믿을 만한 목표'를 향해 노력하지 않는다. ( O / X )",
      "4. 'a diet of'는 문자적으로 음식을 의미한다. ( O / X )",
      "5. 저자는 리얼리티 TV와 유명인 잡지의 영향을 긍정적으로 본다. ( O / X )"
    ],
    translation: "리얼리티 TV와 유명인 잡지를 먹고 자란, / 많은 사람들이 잃은 것 같다 / 야망과 / 믿을 만한 목표를 향해 열심히 일하려는 욕구 둘 다를.\n\n→ 리얼리티 TV와 유명인 잡지를 보며 자란 많은 사람들이 야망과 믿을 만한 목표를 향해 열심히 일하려는 욕구 둘 다를 잃은 것 같다.",
    logic_answer: [
      "중심 소재: 미디어가 젊은 세대에 미친 영향",
      "논리 관계: 리얼리티 TV/유명인 잡지 노출 → 야망/노력 욕구 상실"
    ],
    explanation: "이 문장은 인과 관계 구조예요. 원인: 'Brought up on a diet of reality TV and celebrity magazines'(리얼리티 TV와 유명인 잡지를 보며 자람). 결과: 'lost both the ambition and the desire to work hard towards a credible goal'(야망과 노력 욕구 상실). 'a diet of'는 비유적 표현으로 '~에 노출되어 자란'을 의미해요. 앞 문장들(13-14번)의 유명 문화 비판을 결론짓는 문장이에요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. X",
    quiz_explanations: [
      "1. O - 'Brought up on a diet of reality TV and celebrity magazines'에서 직접 언급돼요.",
      "2. O - 'seem to have lost both the ambition and the desire to work hard'에서 직접 언급돼요.",
      "3. O - 'towards a credible goal'을 향한 노력이 사라졌다고 해요.",
      "4. X - 'a diet of'는 비유적 표현으로 '~을 많이 접하며 자란'을 의미해요.",
      "5. X - 반대예요. 야망과 노력 욕구 상실이라는 부정적 결과를 제시해요."
    ],
    tip: "[Tip] 'a diet of X'는 비유적 표현이에요!\n\n의미: X를 많이 접하며 자란, X에 노출된\n\n시험에서 'diet'가 음식이 아닌 맥락에서 쓰이면 '주로 접한 것, 노출된 것'을 의미해요. 비유적 표현을 문자 그대로 해석하면 안 돼요."
  },
  {
    num: 76,
    sentence: "The uncertain economic conditions of recent years have caused union and management representatives to explore many ways of handling labor problems.",
    vocab: [
      "uncertain: 불확실한",
      "economic conditions: 경제 상황",
      "union: 노동조합",
      "management: 경영진",
      "representative: 대표",
      "explore: 탐색하다",
      "handle: 다루다, 처리하다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________"
    ],
    quiz: [
      "1. 최근 몇 년간 경제 상황이 불확실했다. ( O / X )",
      "2. 노동조합과 경영진 대표들이 노동 문제 해결 방법을 탐색하고 있다. ( O / X )",
      "3. 경제적 불확실성이 노사 협력의 원인이다. ( O / X )",
      "4. 'have caused A to V'는 인과 관계를 나타낸다. ( O / X )",
      "5. 노동 문제 해결 방법은 하나뿐이다. ( O / X )"
    ],
    translation: "최근 몇 년간의 불확실한 경제 상황이 / 노동조합과 경영진 대표들로 하여금 / 노동 문제를 다루는 많은 방법을 / 탐색하게 했다.\n\n→ 최근 몇 년간의 불확실한 경제 상황이 노동조합과 경영진 대표들로 하여금 노동 문제를 다루는 많은 방법을 탐색하게 했다.",
    logic_answer: [
      "중심 소재: 경제 불확실성과 노사 관계",
      "논리 관계: 불확실한 경제 상황 → 노사 대표의 문제 해결 방법 탐색"
    ],
    explanation: "이 문장은 인과 관계 구조예요. 'have caused A to V'(A로 하여금 V하게 했다)가 인과를 명시해요. 원인: 'uncertain economic conditions'(불확실한 경제 상황), 결과: 노사 대표들이 'explore many ways'(많은 방법 탐색). 'many ways'에서 다양한 해결책이 모색되고 있음을 알 수 있어요. 이어지는 문장들에서 구체적인 내용이 나올 거예요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'uncertain economic conditions of recent years'에서 직접 언급돼요.",
      "2. O - 'union and management representatives to explore many ways'에서 직접 언급돼요.",
      "3. O - 'have caused'가 경제적 불확실성이 원인임을 나타내요.",
      "4. O - 'have caused A to V'는 'A로 하여금 V하게 하다'로 인과 관계예요.",
      "5. X - 반대예요. 'many ways'(많은 방법)라고 해요."
    ],
    tip: "[Tip] 'have caused A to V'는 인과를 명시하는 구문이에요!\n\n주어 + have caused + A + to V\n= 주어가 A로 하여금 V하게 했다\n\n시험에서 'cause', 'lead', 'prompt', 'force' + to V 구문은 모두 인과 관계를 나타내요."
  },
  {
    num: 77,
    sentence: "Workers are having to decide whether they are willing to take the chance of salary and benefit cuts in bad times, and whether job security is more important than other benefits.",
    vocab: [
      "willing: 기꺼이 ~하는",
      "take the chance: 위험을 감수하다",
      "salary cut: 급여 삭감",
      "benefit: 혜택, 복리후생",
      "job security: 고용 안정"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 노동자의 결정 = __________________ vs __________________"
    ],
    quiz: [
      "1. 노동자들이 어려운 결정을 내려야 한다. ( O / X )",
      "2. 급여와 혜택 삭감의 위험을 감수할 것인지 결정해야 한다. ( O / X )",
      "3. 고용 안정과 다른 혜택 중 무엇이 중요한지 결정해야 한다. ( O / X )",
      "4. 'whether... and whether'는 두 가지 선택지를 제시한다. ( O / X )",
      "5. 모든 노동자가 같은 결정을 내린다. ( O / X )"
    ],
    translation: "노동자들은 결정해야 한다 / 어려운 시기에 급여와 혜택 삭감의 / 위험을 감수할 의향이 있는지, / 그리고 고용 안정이 다른 혜택보다 / 더 중요한지.\n\n→ 노동자들은 어려운 시기에 급여와 혜택 삭감의 위험을 감수할 의향이 있는지, 그리고 고용 안정이 다른 혜택보다 더 중요한지 결정해야 한다.",
    logic_answer: [
      "중심 소재: 노동자의 선택",
      "논리 관계: 노동자의 결정 = 급여/혜택 삭감 감수 vs 고용 안정 우선"
    ],
    explanation: "이 문장은 선택/결정 구조예요. 노동자들이 두 가지를 결정해야 해요: (1) 급여/혜택 삭감 위험을 감수할 것인가, (2) 고용 안정이 다른 혜택보다 중요한가. 'whether... and whether' 구조가 두 결정을 병렬로 제시해요. 'in bad times'(어려운 시기)가 경제적 불확실성 상황을 반영해요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'are having to decide'에서 결정해야 함을 알 수 있어요.",
      "2. O - 'willing to take the chance of salary and benefit cuts'에서 직접 언급돼요.",
      "3. O - 'whether job security is more important than other benefits'에서 직접 언급돼요.",
      "4. O - 'whether... and whether' 구조가 두 가지 결정 사항을 나열해요.",
      "5. X - 개별 노동자들이 각자 결정해야 하는 상황이에요."
    ],
    tip: "[Tip] 'whether A and whether B' 구조는 두 가지 결정/선택을 나타내요!\n\nwhether A = 첫 번째 결정 사항\nwhether B = 두 번째 결정 사항\n\n시험에서 이런 병렬 구조가 나오면, 두 항목의 관계(독립적? 연결된?)를 파악하세요."
  },
  {
    num: 78,
    sentence: "In effect, they are having to decide whether they are willing and able to pay the cost of sharing.",
    vocab: [
      "in effect: 사실상, 결국",
      "willing: 기꺼이 ~하는",
      "able: ~할 수 있는",
      "pay the cost: 비용을 치르다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 앞 문장의 요약 = __________________"
    ],
    quiz: [
      "1. 이 문장은 앞 문장들의 요점을 요약한다. ( O / X )",
      "2. '공유의 비용'을 치를 의향과 능력이 있는지 결정해야 한다. ( O / X )",
      "3. 'in effect'는 결론적으로라는 의미이다. ( O / X )",
      "4. 'willing and able'은 의지와 능력 둘 다를 의미한다. ( O / X )",
      "5. '공유의 비용'은 급여 삭감 등을 포함한다. ( O / X )"
    ],
    translation: "사실상, / 그들은 결정해야 한다 / 공유의 비용을 치를 / 의향이 있고 능력이 있는지.\n\n→ 사실상, 그들은 공유의 비용을 치를 의향이 있고 능력이 있는지 결정해야 한다.",
    logic_answer: [
      "중심 소재: 공유의 비용",
      "논리 관계: 앞 문장의 요약 = 공유의 비용을 치를 의지와 능력"
    ],
    explanation: "이 문장은 요약/결론 구조예요. 'In effect'(사실상, 결국)가 앞 문장들의 요점을 정리해요. 앞 문장(2번)의 '급여 삭감 감수'와 '고용 안정 vs 다른 혜택'을 'the cost of sharing'(공유의 비용)으로 추상화해요. 'willing and able'에서 의지(willing)와 능력(able) 둘 다 필요함을 강조해요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'In effect'가 앞 내용을 요약/결론짓는 신호예요.",
      "2. O - 'willing and able to pay the cost of sharing'에서 직접 언급돼요.",
      "3. O - 'in effect'는 '사실상, 결국, 결론적으로'라는 의미예요.",
      "4. O - 'willing'(의지)과 'able'(능력)이 병렬로 연결돼요.",
      "5. O - 앞 문장의 급여/혜택 삭감이 '공유의 비용'에 해당해요."
    ],
    tip: "[Tip] 'In effect'는 요약이나 결론을 도입해요!\n\n의미: 사실상, 결국, 결론적으로\n\n시험에서 'In effect', 'In short', 'In sum' 같은 표현 뒤에는 핵심 요약이 나와요. 이 문장이 단락의 주제문일 가능성이 높아요."
  },
  {
    num: 79,
    sentence: "The problems we face in conserving natural resources are laborious and complex—the preservation of even small bits of marshlands representing the last standards of irreplaceable biotic communities is interwoven with the red tape of law.",
    vocab: [
      "conserve: 보존하다",
      "laborious: 힘든, 고된",
      "preservation: 보존",
      "marshland: 습지",
      "irreplaceable: 대체 불가능한",
      "biotic: 생물의",
      "interweave: 얽히다",
      "red tape: 관료적 형식주의, 번문욕례"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 문제의 특성(__________________)  → 예시(__________________)"
    ],
    quiz: [
      "1. 자연자원 보존 문제는 힘들고 복잡하다. ( O / X )",
      "2. 작은 습지 보존도 법적 절차와 얽혀 있다. ( O / X )",
      "3. 'red tape'는 효율적인 절차를 의미한다. ( O / X )",
      "4. 'irreplaceable biotic communities'는 대체 불가능한 생물 군집을 의미한다. ( O / X )",
      "5. 대시(—) 뒤에 앞 내용의 구체적 예시가 나온다. ( O / X )"
    ],
    translation: "자연자원 보존에서 우리가 직면하는 문제는 / 힘들고 복잡하다 / —대체 불가능한 생물 군집의 마지막 기준을 대표하는 / 작은 습지 조각의 보존조차도 / 법의 관료적 형식주의와 얽혀 있다.\n\n→ 자연자원 보존에서 우리가 직면하는 문제는 힘들고 복잡하다 — 대체 불가능한 생물 군집의 마지막 기준을 대표하는 작은 습지 조각의 보존조차도 법의 관료적 형식주의와 얽혀 있다.",
    logic_answer: [
      "중심 소재: 자연자원 보존의 어려움",
      "논리 관계: 문제의 특성(힘들고 복잡함) → 예시(습지 보존과 법적 절차의 얽힘)"
    ],
    explanation: "이 문장은 주장-예시 구조예요. 주장: 자연자원 보존 문제가 'laborious and complex'(힘들고 복잡). 대시 뒤에 예시: 'even small bits of marshlands'(작은 습지 조각조차)가 'red tape of law'(법의 관료적 형식주의)와 얽혀 있다. 'even'(~조차)이 작은 것도 어렵다는 점을 강조해요. 'red tape'는 부정적 뉘앙스의 관료주의를 나타내요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'laborious and complex'에서 직접 언급돼요.",
      "2. O - 'interwoven with the red tape of law'에서 직접 언급돼요.",
      "3. X - 반대예요. 'red tape'는 번거롭고 비효율적인 관료적 절차예요.",
      "4. O - 'irreplaceable biotic communities'는 대체 불가능한 생물 군집이에요.",
      "5. O - 대시 뒤에 '습지 보존과 법적 절차'라는 구체적 예시가 나와요."
    ],
    tip: "[Tip] 'red tape'는 비효율적 관료주의를 비판하는 표현이에요!\n\n의미: 번문욕례, 관료적 형식주의\n유래: 영국에서 공문서를 빨간 끈으로 묶은 데서 유래\n\n시험에서 'red tape'는 부정적 뉘앙스로 행정적 장애물을 나타내요."
  },
  {
    num: 80,
    sentence: "During the time spent in resolving these factors, it often happens that the area to be preserved is swallowed up.",
    vocab: [
      "resolve: 해결하다",
      "factor: 요인",
      "preserve: 보존하다",
      "swallow up: 삼키다, 집어삼키다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________"
    ],
    quiz: [
      "1. 요인들을 해결하는 데 시간이 걸린다. ( O / X )",
      "2. 해결하는 동안 보존할 지역이 사라지는 일이 자주 일어난다. ( O / X )",
      "3. 'swallowed up'은 보존에 성공했음을 의미한다. ( O / X )",
      "4. 시간 지연이 보존 실패의 원인이다. ( O / X )",
      "5. 이 문장은 앞 문장(4번)의 결과를 보여준다. ( O / X )"
    ],
    translation: "이러한 요인들을 해결하는 데 / 소요되는 시간 동안, / 종종 일어난다 / 보존될 지역이 삼켜지는 일이.\n\n→ 이러한 요인들을 해결하는 데 소요되는 시간 동안, 보존될 지역이 삼켜지는 일이 종종 일어난다.",
    logic_answer: [
      "중심 소재: 보존 지연의 결과",
      "논리 관계: 해결에 시간 소요 → 보존 대상 지역 소실"
    ],
    explanation: "이 문장은 인과/결과 구조예요. 앞 문장(4번)의 '관료적 절차'로 인해 시간이 걸리고(원인), 그 사이에 보존할 지역이 'swallowed up'(삼켜진다/사라진다)(결과). 'it often happens that'에서 이것이 드문 일이 아니라 빈번하게 일어남을 알 수 있어요. 자연 보존의 시간적 긴급성을 강조하는 문장이에요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'time spent in resolving these factors'에서 시간이 걸림을 알 수 있어요.",
      "2. O - 'it often happens that the area to be preserved is swallowed up'에서 직접 언급돼요.",
      "3. X - 반대예요. 'swallowed up'(삼켜지다)은 사라짐/소실을 의미해요.",
      "4. O - 해결에 시간이 걸리는 동안 지역이 사라진다는 인과 관계예요.",
      "5. O - 4번(관료적 절차)의 결과로 5번(보존 실패)이 일어나요."
    ],
    tip: "[Tip] 'it often happens that'은 빈번한 현상을 나타내요!\n\n의미: ~하는 일이 종종 일어난다\n\n시험에서 'often', 'frequently', 'commonly' 같은 부사가 나오면, 그것이 예외가 아닌 일반적 현상임을 강조해요."
  },
  {
    num: 81,
    sentence: "Inspired by psychoanalysis and various \"life reform\" movements, exposing inner lives, psychological chasms and passions became a central concern to artists.",
    vocab: [
      "inspire: 영감을 주다",
      "psychoanalysis: 정신분석학",
      "life reform: 생활 개혁",
      "expose: 드러내다, 노출시키다",
      "chasm: 깊은 틈, 심연",
      "passion: 열정",
      "concern: 관심사"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 영향(__________________)  → 예술가의 관심사(__________________)"
    ],
    quiz: [
      "1. 정신분석학이 예술가들에게 영감을 주었다. ( O / X )",
      "2. '생활 개혁' 운동도 영향을 미쳤다. ( O / X )",
      "3. 내면, 심리적 심연, 열정을 드러내는 것이 예술가의 핵심 관심사가 되었다. ( O / X )",
      "4. 분사구문 'Inspired by'는 이유/원인을 나타낸다. ( O / X )",
      "5. 예술가들은 외적 현실만 표현하려 했다. ( O / X )"
    ],
    translation: "정신분석학과 다양한 \"생활 개혁\" 운동에 영감을 받아, / 내면의 삶, 심리적 심연과 열정을 / 드러내는 것이 / 예술가들에게 핵심 관심사가 되었다.\n\n→ 정신분석학과 다양한 \"생활 개혁\" 운동에 영감을 받아, 내면의 삶, 심리적 심연과 열정을 드러내는 것이 예술가들에게 핵심 관심사가 되었다.",
    logic_answer: [
      "중심 소재: 예술가의 새로운 관심사",
      "논리 관계: 영향(정신분석학, 생활 개혁 운동) → 예술가의 관심사(내면/심리 표현)"
    ],
    explanation: "이 문장은 원인-결과 구조예요. 'Inspired by'(~에 영감을 받아) 분사구문이 원인을 나타내요. 원인: 정신분석학과 '생활 개혁' 운동. 결과: 'inner lives, psychological chasms and passions'(내면, 심리적 심연, 열정)을 드러내는 것이 핵심 관심사가 됨. 외적 현실보다 내면 심리에 초점을 맞추게 된 예술적 전환을 설명해요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'Inspired by psychoanalysis'에서 직접 언급돼요.",
      "2. O - 'and various life reform movements'에서 직접 언급돼요.",
      "3. O - 'exposing inner lives... became a central concern'에서 직접 언급돼요.",
      "4. O - 'Inspired by'는 '~에 영감을 받아서'로 이유/원인을 나타내요.",
      "5. X - 반대예요. 'inner lives'(내면의 삶)를 드러내려 했어요."
    ],
    tip: "[Tip] 'Inspired by X, S V' 구조는 원인-결과예요!\n\nInspired by X = X에 영감을 받아서 (원인)\nS V = 결과\n\n시험에서 과거분사로 시작하는 분사구문(Inspired, Motivated, Influenced)은 원인/이유를 나타내요."
  },
  {
    num: 82,
    sentence: "Hans Makart exploited the potential of theatrical spectacle and swept his audiences into opulent fantasy worlds.",
    vocab: [
      "exploit: 활용하다, 이용하다",
      "potential: 잠재력",
      "theatrical: 연극적인",
      "spectacle: 구경거리, 장관",
      "sweep: 휩쓸다",
      "opulent: 화려한, 풍요로운"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 한스 마카르트의 예술 = __________________ → __________________"
    ],
    quiz: [
      "1. 한스 마카르트는 연극적 스펙터클의 잠재력을 활용했다. ( O / X )",
      "2. 그는 관객을 화려한 환상 세계로 휩쓸었다. ( O / X )",
      "3. 'exploit'은 부정적 의미로만 사용된다. ( O / X )",
      "4. 'opulent fantasy worlds'는 검소한 현실 세계를 의미한다. ( O / X )",
      "5. 이 문장은 앞 문장(6번)의 경향을 보여주는 예시이다. ( O / X )"
    ],
    translation: "한스 마카르트는 / 연극적 스펙터클의 잠재력을 활용하고 / 관객을 / 화려한 환상 세계로 휩쓸었다.\n\n→ 한스 마카르트는 연극적 스펙터클의 잠재력을 활용하여 관객을 화려한 환상 세계로 휩쓸었다.",
    logic_answer: [
      "중심 소재: 한스 마카르트의 예술 스타일",
      "논리 관계: 한스 마카르트의 예술 = 연극적 스펙터클 활용 → 관객을 환상 세계로 이끔"
    ],
    explanation: "이 문장은 예시/묘사 구조예요. 앞 문장(6번)에서 언급한 '내면과 열정 표현'의 구체적 예시로 한스 마카르트를 소개해요. 'exploited the potential of theatrical spectacle'(연극적 스펙터클의 잠재력 활용)과 'swept... into opulent fantasy worlds'(화려한 환상 세계로 휩쓸다)에서 그의 화려하고 감각적인 예술 스타일이 드러나요.",
    quiz_answers: "1. O  2. O  3. X  4. X  5. O",
    quiz_explanations: [
      "1. O - 'exploited the potential of theatrical spectacle'에서 직접 언급돼요.",
      "2. O - 'swept his audiences into opulent fantasy worlds'에서 직접 언급돼요.",
      "3. X - 'exploit'은 '활용하다'라는 중립적/긍정적 의미로도 쓰여요.",
      "4. X - 반대예요. 'opulent'는 '화려한, 풍요로운'이에요.",
      "5. O - 6번(내면/열정 표현)의 구체적 예술가 예시예요."
    ],
    tip: "[Tip] 'exploit'은 맥락에 따라 긍정/부정 의미가 달라요!\n\n긍정: 활용하다, 개발하다 (exploit potential)\n부정: 착취하다 (exploit workers)\n\n시험에서 다의어의 문맥적 의미를 파악하는 것이 중요해요."
  },
  {
    num: 83,
    sentence: "Stories are the secret reservoir of values: Change the stories that individuals or nations live by and you change the individuals and nations themselves.",
    vocab: [
      "reservoir: 저장소",
      "value: 가치",
      "live by: ~에 따라 살다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 이야기 = __________________ → 이야기 변화 = __________________"
    ],
    quiz: [
      "1. 이야기는 가치의 비밀 저장소이다. ( O / X )",
      "2. 개인이나 국가가 따르는 이야기를 바꾸면 그들 자체가 바뀐다. ( O / X )",
      "3. 'live by'는 ~에 따라 살다는 의미이다. ( O / X )",
      "4. 이 문장은 명령문과 평서문의 조합이다. ( O / X )",
      "5. 이야기는 가치와 무관하다. ( O / X )"
    ],
    translation: "이야기는 가치의 비밀 저장소이다: / 개인이나 국가가 따라 사는 이야기를 바꾸면 / 개인과 국가 자체를 바꾸게 된다.\n\n→ 이야기는 가치의 비밀 저장소이다: 개인이나 국가가 따라 사는 이야기를 바꾸면 그 개인과 국가 자체를 바꾸게 된다.",
    logic_answer: [
      "중심 소재: 이야기의 힘",
      "논리 관계: 이야기 = 가치의 저장소 → 이야기 변화 = 개인/국가 변화"
    ],
    explanation: "이 문장은 정의-조건 구조예요. 콜론 앞: 정의('이야기 = 가치의 비밀 저장소'). 콜론 뒤: 'Change X and you change Y'(X를 바꾸면 Y도 바뀐다) 조건문. 이야기가 가치를 담고 있으므로, 이야기를 바꾸면 그 가치에 따라 사는 개인/국가도 변한다는 논리예요. 이야기의 사회적 힘을 강조해요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'Stories are the secret reservoir of values'에서 직접 언급돼요.",
      "2. O - 'Change the stories... and you change the individuals and nations themselves'에서 직접 언급돼요.",
      "3. O - 'live by'는 '~에 따라 살다, ~을 지침으로 삼다'예요.",
      "4. O - 'Change'(명령문) + 'and you change'(결과 평서문) 구조예요.",
      "5. X - 반대예요. 이야기가 가치의 '저장소(reservoir)'라고 해요."
    ],
    tip: "[Tip] '명령문 + and + 평서문'은 조건-결과를 나타내요!\n\n'Change X and you change Y' = 'If you change X, you will change Y'\n\n시험에서 이 구조는 'If 조건문'과 같은 의미예요. 명령문이 조건, and 뒤가 결과예요."
  },
  {
    num: 84,
    sentence: "Risk plays an interesting role in terms of creative practice—pushing the boundaries or breaking rules may entail risks, and the results may be fruitful and invigorating but they may also be disastrous or wasteful.",
    vocab: [
      "in terms of: ~의 관점에서",
      "creative practice: 창작 활동",
      "push the boundaries: 경계를 밀어붙이다",
      "entail: 수반하다",
      "fruitful: 결실 있는",
      "invigorating: 활력을 주는",
      "disastrous: 재앙적인",
      "wasteful: 낭비적인"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 위험 감수 → __________________ 또는 __________________"
    ],
    quiz: [
      "1. 위험은 창작 활동에서 흥미로운 역할을 한다. ( O / X )",
      "2. 경계를 밀어붙이거나 규칙을 깨는 것은 위험을 수반할 수 있다. ( O / X )",
      "3. 결과는 항상 결실 있고 활력을 준다. ( O / X )",
      "4. 결과가 재앙적이거나 낭비적일 수도 있다. ( O / X )",
      "5. 'but... also'는 양면성을 나타낸다. ( O / X )"
    ],
    translation: "위험은 흥미로운 역할을 한다 / 창작 활동의 관점에서 / —경계를 밀어붙이거나 규칙을 깨는 것은 / 위험을 수반할 수 있고, / 결과는 결실 있고 활력을 줄 수 있지만 / 재앙적이거나 낭비적일 수도 있다.\n\n→ 창작 활동의 관점에서 위험은 흥미로운 역할을 한다 — 경계를 밀어붙이거나 규칙을 깨는 것은 위험을 수반할 수 있고, 그 결과는 결실 있고 활력을 줄 수 있지만 재앙적이거나 낭비적일 수도 있다.",
    logic_answer: [
      "중심 소재: 창작에서의 위험",
      "논리 관계: 위험 감수 → 긍정적 결과(fruitful, invigorating) 또는 부정적 결과(disastrous, wasteful)"
    ],
    explanation: "이 문장은 양면성 구조예요. 창작에서 위험을 감수하면 결과가 양쪽으로 갈 수 있어요: (1) 'fruitful and invigorating'(결실 있고 활력을 줌) - 긍정적, (2) 'disastrous or wasteful'(재앙적이거나 낭비적) - 부정적. 'may... but... may also'가 이 양면성을 나타내요. 창작에서 위험 감수의 불확실성을 인정해요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'Risk plays an interesting role in terms of creative practice'에서 직접 언급돼요.",
      "2. O - 'pushing the boundaries or breaking rules may entail risks'에서 직접 언급돼요.",
      "3. X - 반대예요. 'may be'와 'but they may also be'에서 불확실성이 나타나요.",
      "4. O - 'may also be disastrous or wasteful'에서 직접 언급돼요.",
      "5. O - 'may be A but may also be B'가 양면성(긍정/부정 가능성)을 나타내요."
    ],
    tip: "[Tip] 'may... but may also'는 양면성/불확실성을 나타내요!\n\nmay be A = A일 수 있다 (긍정적 가능성)\nbut may also be B = B일 수도 있다 (부정적 가능성)\n\n시험에서 이런 양면성 구조가 나오면, 저자가 한쪽만 주장하지 않음을 파악하세요."
  },
  {
    num: 85,
    sentence: "Flirting with risk means that the outcome is not guaranteed but also that aspirations go beyond the known and familiar, beyond the ordinary.",
    vocab: [
      "flirt with: ~을 가볍게 다루다, ~에 손대다",
      "outcome: 결과",
      "guarantee: 보장하다",
      "aspiration: 열망, 포부",
      "beyond: ~을 넘어서"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 위험과 유희 = __________________ + __________________"
    ],
    quiz: [
      "1. 위험과 유희한다는 것은 결과가 보장되지 않음을 의미한다. ( O / X )",
      "2. 열망이 알려진 것과 익숙한 것을 넘어선다. ( O / X )",
      "3. 'flirting with risk'는 위험을 완전히 피하는 것을 의미한다. ( O / X )",
      "4. 'beyond the ordinary'는 평범함을 초월함을 의미한다. ( O / X )",
      "5. 이 문장은 앞 문장(9번)의 '위험'을 더 설명한다. ( O / X )"
    ],
    translation: "위험과 유희한다는 것은 / 결과가 보장되지 않음을 의미하지만 / 또한 열망이 / 알려진 것과 익숙한 것을 넘어서, / 평범한 것을 넘어섬을 의미한다.\n\n→ 위험과 유희한다는 것은 결과가 보장되지 않음을 의미하지만, 또한 열망이 알려지고 익숙한 것, 평범한 것을 넘어섬을 의미한다.",
    logic_answer: [
      "중심 소재: 위험 감수의 의미",
      "논리 관계: 위험과 유희 = 결과 불보장 + 열망의 초월(익숙함/평범함 넘어섬)"
    ],
    explanation: "이 문장은 정의/의미 구조예요. 'Flirting with risk means'가 위험 감수의 의미를 정의해요. 두 가지 의미: (1) 'outcome is not guaranteed'(결과 불보장) - 부정적 측면, (2) 'aspirations go beyond the known and familiar'(열망이 익숙함을 넘어섬) - 긍정적 측면. 'but also'가 두 측면을 연결해요. 위험 감수가 단순히 나쁜 것이 아니라 도전적 열망을 의미함을 강조해요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'the outcome is not guaranteed'에서 직접 언급돼요.",
      "2. O - 'aspirations go beyond the known and familiar'에서 직접 언급돼요.",
      "3. X - 반대예요. 'flirting with risk'는 위험에 손대는/다루는 것이에요.",
      "4. O - 'beyond the ordinary'는 평범함을 넘어섬/초월함이에요.",
      "5. O - 9번의 위험 개념을 구체적으로 설명해요."
    ],
    tip: "[Tip] 'flirt with'는 비유적으로 '가볍게 다루다, 손대다'를 의미해요!\n\nflirt with risk = 위험에 손대다, 위험을 감수하다\nflirt with an idea = 아이디어를 가볍게 고려하다\n\n시험에서 'flirt with'가 나오면 문자적 의미(유혹하다)가 아닌 비유적 의미를 파악하세요."
  },
  {
    num: 86,
    sentence: "This pushing of boundaries takes place at many different levels from the production of single objects to a broader kind of experimentation with materials themselves.",
    vocab: [
      "pushing of boundaries: 경계 밀어붙이기",
      "take place: 일어나다",
      "level: 수준, 단계",
      "production: 생산",
      "experimentation: 실험"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 경계 밀어붙이기의 범위 = __________________ ~ __________________"
    ],
    quiz: [
      "1. 경계 밀어붙이기는 여러 다른 수준에서 일어난다. ( O / X )",
      "2. 단일 물체 생산부터 재료 실험까지 범위가 넓다. ( O / X )",
      "3. 'from A to B' 구조는 범위를 나타낸다. ( O / X )",
      "4. 이 문장은 앞 문장들(9-10번)의 개념을 적용한다. ( O / X )",
      "5. 경계 밀어붙이기는 한 가지 수준에서만 일어난다. ( O / X )"
    ],
    translation: "이 경계 밀어붙이기는 / 많은 다른 수준에서 일어난다 / 단일 물체의 생산부터 / 재료 자체에 대한 더 넓은 종류의 실험까지.\n\n→ 이 경계 밀어붙이기는 단일 물체의 생산부터 재료 자체에 대한 더 넓은 종류의 실험까지 많은 다른 수준에서 일어난다.",
    logic_answer: [
      "중심 소재: 경계 밀어붙이기의 적용 범위",
      "논리 관계: 경계 밀어붙이기의 범위 = 단일 물체 생산 ~ 재료 실험"
    ],
    explanation: "이 문장은 범위/적용 구조예요. 앞 문장들(9-10번)에서 논의한 '경계 밀어붙이기(pushing of boundaries)'가 어디서 일어나는지 설명해요. 'from A to B'(A부터 B까지) 구조로 범위를 나타내요: (1) production of single objects(단일 물체 생산) - 작은 규모, (2) experimentation with materials(재료 실험) - 넓은 규모. 'many different levels'에서 다양한 수준임을 강조해요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'takes place at many different levels'에서 직접 언급돼요.",
      "2. O - 'from the production of single objects to... experimentation with materials'에서 직접 언급돼요.",
      "3. O - 'from A to B'는 범위를 나타내는 구조예요.",
      "4. O - 9-10번의 '경계 밀어붙이기' 개념이 어디서 적용되는지 설명해요.",
      "5. X - 반대예요. 'many different levels'라고 해요."
    ],
    tip: "[Tip] 'from A to B'는 범위나 스펙트럼을 나타내요!\n\nfrom 작은 것 to 큰 것\nfrom 구체적 to 추상적\n\n시험에서 이 구조가 나오면 양 끝점(A와 B)이 무엇인지 파악하고, 그 범위가 의미하는 바를 이해하세요."
  },
  {
    num: 87,
    sentence: "One unspoken truth about creativity—it isn't about wild talent so much as it is about productivity.",
    vocab: [
      "unspoken: 말해지지 않은, 암묵적인",
      "truth: 진실",
      "wild: 야생의, 타고난",
      "talent: 재능",
      "productivity: 생산성"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 창의성 = __________________ ✕ → __________________ ○"
    ],
    quiz: [
      "1. 창의성에 대한 말해지지 않은 진실이 있다. ( O / X )",
      "2. 창의성은 타고난 재능보다 생산성에 관한 것이다. ( O / X )",
      "3. 'not so much A as B'는 A보다 B가 중요하다는 의미이다. ( O / X )",
      "4. 'wild talent'만 있으면 창의적이 된다. ( O / X )",
      "5. 이 문장은 창의성에 대한 통념을 반박한다. ( O / X )"
    ],
    translation: "창의성에 대한 말해지지 않은 진실 하나 / —그것은 타고난 재능에 관한 것이 아니라 / 생산성에 관한 것이다.\n\n→ 창의성에 대한 말해지지 않은 진실 하나 — 창의성은 타고난 재능보다는 생산성에 관한 것이다.",
    logic_answer: [
      "중심 소재: 창의성의 본질",
      "논리 관계: 창의성 = 타고난 재능 ✕ → 생산성 ○"
    ],
    explanation: "이 문장은 'not so much A as B'(A라기보다 B) 구조예요. 창의성에 대한 '암묵적 진실(unspoken truth)'을 제시해요: 'wild talent'(타고난 재능)가 아니라 'productivity'(생산성)가 핵심. 일반적 통념(재능이 중요)을 반박하고 생산성의 중요성을 강조해요. 대시(—)가 핵심 주장을 도입해요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'One unspoken truth about creativity'에서 직접 언급돼요.",
      "2. O - 'isn't about wild talent so much as it is about productivity'에서 직접 언급돼요.",
      "3. O - 'not so much A as B'는 'A라기보다는 B'로 B가 더 중요해요.",
      "4. X - 반대예요. 재능보다 생산성이 중요하다고 해요.",
      "5. O - '재능이 핵심'이라는 통념을 '생산성이 핵심'으로 반박해요."
    ],
    tip: "[Tip] 'not so much A as B'는 대조/반박 구조예요!\n\n의미: A라기보다는 B이다\nA = 표면적/일반적 생각 (wild talent)\nB = 저자의 주장 (productivity)\n\n시험에서 이 구조가 나오면 B가 저자가 강조하는 핵심이에요."
  },
  {
    num: 88,
    sentence: "To find a few ideas that work, you need to try a lot that don't—it's a pure numbers game.",
    vocab: [
      "work: 작동하다, 효과가 있다",
      "pure: 순수한",
      "numbers game: 숫자 게임"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________ (= 숫자 게임)"
    ],
    quiz: [
      "1. 효과 있는 아이디어를 찾으려면 많은 시도가 필요하다. ( O / X )",
      "2. 실패하는 아이디어도 많이 시도해야 한다. ( O / X )",
      "3. 이것은 순수한 숫자 게임이다. ( O / X )",
      "4. 좋은 아이디어는 한 번에 나온다. ( O / X )",
      "5. 이 문장은 앞 문장(12번)의 '생산성'을 구체화한다. ( O / X )"
    ],
    translation: "효과 있는 몇 개의 아이디어를 찾으려면, / 효과 없는 많은 것을 시도해야 한다 / —그것은 순수한 숫자 게임이다.\n\n→ 효과 있는 몇 개의 아이디어를 찾으려면, 효과 없는 많은 것을 시도해야 한다 — 그것은 순수한 숫자 게임이다.",
    logic_answer: [
      "중심 소재: 창의성과 시도의 양",
      "논리 관계: 많은 실패 시도 → 소수의 성공 (= 숫자 게임)"
    ],
    explanation: "이 문장은 조건-결과 구조예요. 앞 문장(12번)의 '생산성'을 구체화해요. 'a few ideas that work'(효과 있는 소수) vs 'a lot that don't'(효과 없는 다수)의 대비가 핵심이에요. 'a pure numbers game'(순수한 숫자 게임)이라는 비유가 양이 중요함을 강조해요. 성공하려면 많이 시도해야 한다는 메시지예요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'To find a few ideas that work, you need to try a lot'에서 직접 언급돼요.",
      "2. O - 'try a lot that don't'에서 실패하는 시도의 필요성이 언급돼요.",
      "3. O - 'it's a pure numbers game'에서 직접 언급돼요.",
      "4. X - 반대예요. 많은 시도 후에 소수의 좋은 아이디어가 나온다고 해요.",
      "5. O - 12번의 'productivity'(생산성)가 왜 중요한지 설명해요."
    ],
    tip: "[Tip] 비유적 표현의 의미를 파악하세요!\n\n'a numbers game' = 양이 중요한 게임, 확률 게임\n\n시험에서 비유가 나오면 그것이 무엇을 의미하는지 파악해야 해요. 여기서는 '많이 시도해야 성공'이라는 의미예요."
  },
  {
    num: 89,
    sentence: "Geniuses don't necessarily have a higher success rate than other creators; they simply do more—and they do a range of different things.",
    vocab: [
      "genius: 천재",
      "necessarily: 반드시",
      "success rate: 성공률",
      "creator: 창작자",
      "a range of: 다양한"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 천재의 비밀 = __________________ ✕ → __________________ ○"
    ],
    quiz: [
      "1. 천재가 반드시 더 높은 성공률을 가지는 것은 아니다. ( O / X )",
      "2. 천재는 단순히 더 많이 한다. ( O / X )",
      "3. 천재는 다양한 것을 한다. ( O / X )",
      "4. 성공률이 천재를 결정한다. ( O / X )",
      "5. 이 문장은 앞 문장들(12-13번)의 논점을 확장한다. ( O / X )"
    ],
    translation: "천재가 다른 창작자보다 / 반드시 더 높은 성공률을 가지는 것은 아니다; / 그들은 단순히 더 많이 한다 / —그리고 다양한 것을 한다.\n\n→ 천재가 다른 창작자보다 반드시 더 높은 성공률을 가지는 것은 아니다; 그들은 단순히 더 많이 하고, 다양한 것을 한다.",
    logic_answer: [
      "중심 소재: 천재의 비밀",
      "논리 관계: 천재의 비밀 = 높은 성공률 ✕ → 더 많이 + 다양하게 ○"
    ],
    explanation: "이 문장은 반박-제시 구조예요. 반박: 천재가 '반드시 더 높은 성공률'을 가지는 것은 아님. 제시: 천재는 (1) 'do more'(더 많이 함), (2) 'do a range of different things'(다양하게 함). 앞 문장들의 '생산성'과 '숫자 게임' 논점을 천재에게 적용해요. 천재의 비밀이 질보다 양과 다양성에 있다는 주장이에요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'don't necessarily have a higher success rate'에서 직접 언급돼요.",
      "2. O - 'they simply do more'에서 직접 언급돼요.",
      "3. O - 'they do a range of different things'에서 직접 언급돼요.",
      "4. X - 반대예요. 성공률이 아니라 양과 다양성이 중요하다고 해요.",
      "5. O - 12-13번의 '생산성/숫자 게임'을 천재에게 적용해요."
    ],
    tip: "[Tip] 'don't necessarily'는 '반드시 ~한 것은 아니다'예요!\n\n의미: 일반적 생각과 달리, 항상 그런 것은 아니다\n\n시험에서 'not necessarily'는 통념을 반박하는 신호예요. 뒤에 저자의 대안적 주장이 나와요."
  },
  {
    num: 90,
    sentence: "The mark of genius is the willingness to explore all alternatives, not just the most likely solution.",
    vocab: [
      "mark: 표시, 특징",
      "willingness: 기꺼이 하려는 마음",
      "explore: 탐구하다",
      "alternative: 대안",
      "likely: 가능성 있는"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 천재의 특징 = __________________ ○ / __________________ ✕"
    ],
    quiz: [
      "1. 천재의 특징은 모든 대안을 탐구하려는 의지이다. ( O / X )",
      "2. 가장 가능성 있는 해결책만 탐구하면 천재가 된다. ( O / X )",
      "3. 'not just A'는 A만으로는 부족함을 나타낸다. ( O / X )",
      "4. 이 문장은 앞 문장들(12-14번)의 결론을 제시한다. ( O / X )",
      "5. 'willingness'는 능력보다 태도를 강조한다. ( O / X )"
    ],
    translation: "천재의 특징은 / 모든 대안을 탐구하려는 의지이다, / 가장 가능성 있는 해결책만이 아니라.\n\n→ 천재의 특징은 가장 가능성 있는 해결책만이 아니라 모든 대안을 탐구하려는 의지이다.",
    logic_answer: [
      "중심 소재: 천재의 정의",
      "논리 관계: 천재의 특징 = 모든 대안 탐구 ○ / 가능성 높은 것만 ✕"
    ],
    explanation: "이 문장은 정의/결론 구조예요. 'The mark of genius is'(천재의 특징은)로 정의를 제시해요. 핵심: 'all alternatives'(모든 대안) vs 'just the most likely solution'(가장 가능성 있는 해결책만). 앞 문장들의 논점(생산성, 양, 다양성)을 '모든 대안 탐구'로 종합해요. 'willingness'(의지)에서 능력보다 태도가 중요함을 강조해요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'the willingness to explore all alternatives'에서 직접 언급돼요.",
      "2. X - 반대예요. 'not just the most likely solution'이라고 해서 그것만으론 부족해요.",
      "3. O - 'not just A'는 'A만으로는 부족하고 그 이상이 필요함'을 나타내요.",
      "4. O - 12-14번의 생산성/다양성 논점을 '모든 대안 탐구'로 결론지어요.",
      "5. O - 'willingness'(의지)는 능력이 아닌 태도/마음가짐이에요."
    ],
    tip: "[Tip] 'not just A, (but) B'는 A 이상이 필요함을 나타내요!\n\nnot just A = A만으로는 부족\nB = 더 포괄적인 것\n\n시험에서 이 구조가 나오면, A(제한적)와 B(포괄적)의 대비가 핵심이에요. B가 저자의 주장이에요."
  },
  {
    num: 91,
    sentence: "Reproductive thinking fosters rigidity—this is why we often fail when we're confronted with a new problem that appears on the surface to be similar to others we've solved, but is, in fact, significantly different.",
    vocab: [
      "reproductive thinking: 재생산적 사고",
      "foster: 조장하다, 기르다",
      "rigidity: 경직성",
      "confront: 직면하다",
      "on the surface: 표면적으로",
      "significantly: 상당히"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________ → __________________"
    ],
    quiz: [
      "1. 재생산적 사고는 경직성을 조장한다. ( O / X )",
      "2. 표면적으로 비슷해 보이지만 실제로 다른 문제에서 실패한다. ( O / X )",
      "3. 'this is why'는 인과 관계를 나타낸다. ( O / X )",
      "4. 새로운 문제는 항상 이전 문제와 동일하다. ( O / X )",
      "5. 경직성이 문제 해결 실패의 원인이다. ( O / X )"
    ],
    translation: "재생산적 사고는 경직성을 조장한다 / —이것이 우리가 종종 실패하는 이유이다 / 새로운 문제에 직면할 때 / 표면적으로 우리가 해결한 다른 문제들과 비슷해 보이지만, / 실제로는 상당히 다른.\n\n→ 재생산적 사고는 경직성을 조장한다 — 이것이 우리가 표면적으로 이전에 해결한 문제들과 비슷해 보이지만 실제로는 상당히 다른 새로운 문제에 직면할 때 종종 실패하는 이유이다.",
    logic_answer: [
      "중심 소재: 재생산적 사고의 문제점",
      "논리 관계: 재생산적 사고 → 경직성 → 새로운 문제에서 실패"
    ],
    explanation: "이 문장은 인과 사슬 구조예요. 재생산적 사고(reproductive thinking) → 경직성(rigidity) → 실패(fail)의 연쇄예요. 'this is why'가 인과를 명시해요. 핵심은 'appears on the surface to be similar... but is, in fact, significantly different'(표면적으로 비슷해 보이지만 실제로 다른)라는 대조예요. 과거 경험에 의존하는 사고의 함정을 지적해요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'Reproductive thinking fosters rigidity'에서 직접 언급돼요.",
      "2. O - 'appears on the surface to be similar... but is, in fact, significantly different'에서 직접 언급돼요.",
      "3. O - 'this is why'는 '이것이 ~한 이유이다'로 인과 관계예요.",
      "4. X - 반대예요. 'significantly different'(상당히 다르다)고 해요.",
      "5. O - 경직성이 새로운 문제 해결 실패의 원인으로 제시돼요."
    ],
    tip: "[Tip] 'appears to be A, but is in fact B' 구조는 겉-속 대조예요!\n\nappears to be A = 표면적으로 A로 보임\nbut is in fact B = 실제로는 B임\n\n시험에서 이런 겉-속 대조가 나오면, 'in fact' 뒤의 B가 진짜 핵심이에요."
  },
  {
    num: 92,
    sentence: "Interpreting a problem through your past experience will inevitably lead you astray—if you think the way you've always thought, you'll get what you've always gotten.",
    vocab: [
      "interpret: 해석하다",
      "inevitably: 필연적으로",
      "lead astray: 잘못된 길로 이끌다",
      "the way: ~하는 방식으로"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________ (격언으로 요약)"
    ],
    quiz: [
      "1. 과거 경험으로 문제를 해석하면 필연적으로 잘못된 길로 간다. ( O / X )",
      "2. 항상 생각하던 방식으로 생각하면 항상 얻던 것을 얻는다. ( O / X )",
      "3. 'lead astray'는 올바른 방향으로 이끈다는 의미이다. ( O / X )",
      "4. 대시 뒤의 문장은 앞 주장을 격언으로 요약한다. ( O / X )",
      "5. 새로운 결과를 얻으려면 새로운 사고가 필요하다는 함의가 있다. ( O / X )"
    ],
    translation: "과거 경험을 통해 문제를 해석하면 / 필연적으로 잘못된 길로 이끌릴 것이다 / —항상 생각하던 방식으로 생각하면, / 항상 얻던 것을 얻게 될 것이다.\n\n→ 과거 경험을 통해 문제를 해석하면 필연적으로 잘못된 길로 이끌릴 것이다 — 항상 생각하던 방식으로 생각하면, 항상 얻던 것을 얻게 될 것이다.",
    logic_answer: [
      "중심 소재: 과거 경험 의존의 문제",
      "논리 관계: 과거 경험에 의존한 해석 → 잘못된 결과 (격언으로 요약)"
    ],
    explanation: "이 문장은 주장-격언 구조예요. 앞 문장(1번)의 논점을 이어가요. 주장: 과거 경험으로 해석하면 'lead astray'(잘못된 길로 감). 대시 뒤: 격언으로 요약('생각하던 대로 생각하면 얻던 대로 얻는다'). 'inevitably'(필연적으로)에서 이것이 피할 수 없는 결과임을 강조해요. 새로운 사고의 필요성이 함의돼요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'will inevitably lead you astray'에서 직접 언급돼요.",
      "2. O - 'if you think the way you've always thought, you'll get what you've always gotten'에서 직접 언급돼요.",
      "3. X - 반대예요. 'lead astray'는 '잘못된 길로 이끌다'예요.",
      "4. O - 대시 뒤의 격언이 앞 주장을 기억하기 쉽게 요약해요.",
      "5. O - 반대로 해석하면 '새롭게 생각해야 새로운 결과를 얻는다'는 함의예요."
    ],
    tip: "[Tip] 대시(—) 뒤에 격언/명언이 오면 앞 내용의 요약이에요!\n\n'if you think X, you'll get X' 형태는 기억하기 쉬운 격언 형식이에요.\n\n시험에서 이런 격언은 앞 주장의 핵심을 담고 있어요. 주제문으로 활용될 수 있어요."
  },
  {
    num: 93,
    sentence: "The ability to pay attention is considered such an essential life skill that the lack of it has become a widespread medical problem.",
    vocab: [
      "pay attention: 주의를 기울이다",
      "essential: 필수적인",
      "lack: 부족, 결핍",
      "widespread: 널리 퍼진",
      "medical problem: 의학적 문제"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 주의력 = __________________ → 부족 = __________________"
    ],
    quiz: [
      "1. 주의를 기울이는 능력은 필수적인 삶의 기술로 여겨진다. ( O / X )",
      "2. 주의력 부족이 널리 퍼진 의학적 문제가 되었다. ( O / X )",
      "3. 'such A that B' 구조는 정도를 강조한다. ( O / X )",
      "4. 모든 사람이 충분한 주의력을 가지고 있다. ( O / X )",
      "5. ADHD 같은 질환이 암시된다. ( O / X )"
    ],
    translation: "주의를 기울이는 능력은 / 너무나 필수적인 삶의 기술로 여겨져서 / 그것의 부족이 / 널리 퍼진 의학적 문제가 되었다.\n\n→ 주의를 기울이는 능력은 너무나 필수적인 삶의 기술로 여겨져서 그 부족이 널리 퍼진 의학적 문제가 되었다.",
    logic_answer: [
      "중심 소재: 주의력의 중요성",
      "논리 관계: 주의력 = 필수적 기술 → 부족 = 의학적 문제"
    ],
    explanation: "이 문장은 'such A that B'(너무 A해서 B하다) 정도 강조 구조예요. 주의력이 '필수적 기술(essential life skill)'로 여겨지는 정도가 너무 커서, 그 부족이 '의학적 문제(medical problem)'가 됐다는 논리예요. ADHD 같은 주의력 결핍 장애를 암시해요. 다음 문장들에서 이 주제가 반전될 가능성이 있어요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'considered such an essential life skill'에서 직접 언급돼요.",
      "2. O - 'the lack of it has become a widespread medical problem'에서 직접 언급돼요.",
      "3. O - 'such A that B'는 '너무 A해서 B하다'로 정도를 강조해요.",
      "4. X - 반대예요. 부족이 '널리 퍼진 문제'라고 해서 많은 사람에게 해당돼요.",
      "5. O - 주의력 부족이 의학적 문제라는 것은 ADHD 등을 암시해요."
    ],
    tip: "[Tip] 'such A that B' 구조는 정도/결과를 강조해요!\n\nsuch + 형용사 + 명사 + that = 너무 ~해서 ~하다\n\n시험에서 이 구조가 나오면, A의 정도가 B라는 결과를 낳을 만큼 크다는 것이 핵심이에요."
  },
  {
    num: 94,
    sentence: "Researchers have found a surprising link between daydreaming and creativity—people who daydream more are also better at generating new ideas.",
    vocab: [
      "researcher: 연구자",
      "surprising: 놀라운",
      "link: 연결, 관련성",
      "daydreaming: 백일몽, 공상",
      "generate: 생성하다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 연구 발견 = __________________ ↔ __________________"
    ],
    quiz: [
      "1. 백일몽과 창의성 사이에 놀라운 연관이 발견되었다. ( O / X )",
      "2. 백일몽을 더 많이 꾸는 사람들이 새로운 아이디어 생성에 더 뛰어나다. ( O / X )",
      "3. 이 발견은 예상된 것이었다. ( O / X )",
      "4. 이 문장은 앞 문장(3번)의 관점에 도전한다. ( O / X )",
      "5. '대시' 뒤에 연구 결과의 구체적 내용이 나온다. ( O / X )"
    ],
    translation: "연구자들이 발견했다 / 백일몽과 창의성 사이의 놀라운 연관을 / —더 많이 백일몽을 꾸는 사람들이 / 새로운 아이디어 생성에도 더 뛰어나다.\n\n→ 연구자들이 백일몽과 창의성 사이의 놀라운 연관을 발견했다 — 더 많이 백일몽을 꾸는 사람들이 새로운 아이디어 생성에도 더 뛰어나다.",
    logic_answer: [
      "중심 소재: 백일몽과 창의성의 관계",
      "논리 관계: 연구 발견 = 백일몽 ↔ 창의성 (정적 상관)"
    ],
    explanation: "이 문장은 연구 결과 제시 구조예요. 앞 문장(3번)에서 '주의력이 필수'라고 했는데, 이 문장은 '백일몽(주의 분산)이 창의성과 연결'된다는 반전을 제시해요. 'surprising'에서 이것이 예상과 다른 발견임을 알 수 있어요. 대시 뒤에 구체적 연구 결과(백일몽 많이 → 아이디어 생성 뛰어남)가 나와요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'a surprising link between daydreaming and creativity'에서 직접 언급돼요.",
      "2. O - 'people who daydream more are also better at generating new ideas'에서 직접 언급돼요.",
      "3. X - 반대예요. 'surprising'(놀라운)에서 예상 밖이었음을 알 수 있어요.",
      "4. O - 3번(주의력 필수)에 대해 4번(백일몽=창의성)이 반전/도전을 제시해요.",
      "5. O - 대시 뒤에 '백일몽 많이 → 아이디어 생성 뛰어남'이라는 구체적 결과가 나와요."
    ],
    tip: "[Tip] 'surprising'은 예상과 다른 발견을 암시해요!\n\nsurprising link = 예상 밖의 연관\n\n시험에서 'surprising', 'unexpected', 'counterintuitive' 같은 표현이 나오면, 일반적 통념과 다른 내용이 나온다는 신호예요."
  },
  {
    num: 95,
    sentence: "The inability to focus helps ensure a richer mixture of thoughts in consciousness—because these people struggle to filter the world, they end up letting everything in.",
    vocab: [
      "inability: 무능력, 불능",
      "ensure: 보장하다",
      "mixture: 혼합",
      "consciousness: 의식",
      "struggle: 애쓰다, 힘들어하다",
      "filter: 걸러내다",
      "let in: 들여보내다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________________ → __________________ (이유: __________________)"
    ],
    quiz: [
      "1. 집중 불능이 의식에서 더 풍부한 생각 혼합을 보장한다. ( O / X )",
      "2. 이 사람들은 세상을 걸러내는 데 어려움을 겪는다. ( O / X )",
      "3. 그들은 모든 것을 들여보내게 된다. ( O / X )",
      "4. 집중 불능이 여기서 긍정적으로 묘사된다. ( O / X )",
      "5. 'because'가 앞 주장의 이유를 설명한다. ( O / X )"
    ],
    translation: "집중할 수 없는 무능력이 / 의식에서 더 풍부한 생각의 혼합을 보장하는 데 도움이 된다 / —이 사람들이 세상을 걸러내는 데 애쓰기 때문에, / 결국 모든 것을 들여보내게 된다.\n\n→ 집중할 수 없는 무능력이 의식에서 더 풍부한 생각의 혼합을 보장하는 데 도움이 된다 — 이 사람들이 세상을 걸러내는 데 애쓰기 때문에, 결국 모든 것을 들여보내게 된다.",
    logic_answer: [
      "중심 소재: 집중 불능의 긍정적 측면",
      "논리 관계: 집중 불능 → 풍부한 생각 혼합 (이유: 걸러내지 못해서 모든 것 수용)"
    ],
    explanation: "이 문장은 역설적 이점 구조예요. '집중 불능(inability to focus)'이라는 부정적인 것이 '풍부한 생각 혼합(richer mixture of thoughts)'이라는 긍정적 결과를 낳아요. 대시 뒤 'because'가 이유를 설명해요: 걸러내지 못하기 때문에 모든 것을 받아들여 생각이 풍부해진다. 4번 문장의 '백일몽-창의성' 연결을 메커니즘으로 설명해요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'The inability to focus helps ensure a richer mixture of thoughts'에서 직접 언급돼요.",
      "2. O - 'struggle to filter the world'에서 직접 언급돼요.",
      "3. O - 'end up letting everything in'에서 직접 언급돼요.",
      "4. O - 'helps ensure', 'richer'에서 집중 불능이 긍정적으로 묘사돼요.",
      "5. O - 'because'가 앞의 '풍부한 생각 혼합'의 이유를 설명해요."
    ],
    tip: "[Tip] 부정적인 것의 긍정적 측면을 제시하는 역설에 주목하세요!\n\ninability to focus (부정적) → richer mixture (긍정적)\n\n시험에서 이런 역설적 이점이 나오면, 일반적 통념과 다른 관점을 제시하는 것이 핵심이에요."
  },
  {
    num: 96,
    sentence: "When we are faced with a difficult problem, the most obvious solution is probably wrong—at such moments, it often helps to consider farfetched possibilities.",
    vocab: [
      "face: 직면하다",
      "obvious: 명백한",
      "probably: 아마도",
      "farfetched: 억지스러운, 있을 법하지 않은",
      "possibility: 가능성"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 어려운 문제에서: __________________ ✕ → __________________ ○"
    ],
    quiz: [
      "1. 어려운 문제에 직면했을 때 가장 명백한 해결책은 아마 틀렸다. ( O / X )",
      "2. 그런 순간에 억지스러운 가능성을 고려하는 것이 도움이 된다. ( O / X )",
      "3. 'farfetched'는 현실적이고 가능성 높은 것을 의미한다. ( O / X )",
      "4. 명백한 해결책이 항상 최선이다. ( O / X )",
      "5. 이 문장은 앞 문장들(4-5번)의 논점과 연결된다. ( O / X )"
    ],
    translation: "어려운 문제에 직면했을 때, / 가장 명백한 해결책은 아마 틀렸다 / —그런 순간에, / 억지스러운 가능성들을 고려하는 것이 / 종종 도움이 된다.\n\n→ 어려운 문제에 직면했을 때, 가장 명백한 해결책은 아마 틀렸다 — 그런 순간에, 억지스러운 가능성들을 고려하는 것이 종종 도움이 된다.",
    logic_answer: [
      "중심 소재: 어려운 문제 해결 전략",
      "논리 관계: 어려운 문제에서: 명백한 해결책 ✕ → 억지스러운 가능성 ○"
    ],
    explanation: "이 문장은 반전/권고 구조예요. 반전: 'most obvious solution is probably wrong'(명백한 해결책은 틀렸다). 권고: 'consider farfetched possibilities'(억지스러운 가능성 고려). 앞 문장들의 논점(백일몽, 집중 불능의 이점)과 연결돼요 — 명백하지 않은, 엉뚱한 생각이 창의적 해결에 도움이 된다는 메시지예요.",
    quiz_answers: "1. O  2. O  3. X  4. X  5. O",
    quiz_explanations: [
      "1. O - 'the most obvious solution is probably wrong'에서 직접 언급돼요.",
      "2. O - 'it often helps to consider farfetched possibilities'에서 직접 언급돼요.",
      "3. X - 반대예요. 'farfetched'는 '억지스러운, 있을 법하지 않은'이에요.",
      "4. X - 반대예요. 명백한 해결책이 '틀렸다(wrong)'고 해요.",
      "5. O - 백일몽/집중 불능의 창의적 이점과 연결되는 논점이에요."
    ],
    tip: "[Tip] 'farfetched'는 '억지스러운, 터무니없는'을 의미해요!\n\nfar(멀리) + fetched(가져온) = 멀리서 억지로 가져온 → 비현실적인\n\n시험에서 이 단어가 긍정적으로 쓰이면, 창의적 사고의 중요성을 강조하는 맥락이에요."
  },
  {
    num: 97,
    sentence: "There is a widespread belief that creativity is best served through inner peace, stillness, and calmness, but this assumption is often wrong.",
    vocab: [
      "widespread: 널리 퍼진",
      "belief: 믿음",
      "serve: 도움이 되다",
      "inner peace: 내면의 평화",
      "stillness: 고요함",
      "calmness: 차분함",
      "assumption: 가정"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 널리 퍼진 믿음(__________________)  ↔ 저자의 주장(__________________)"
    ],
    quiz: [
      "1. 창의성이 내면의 평화와 고요함을 통해 가장 잘 발휘된다는 믿음이 널리 퍼져 있다. ( O / X )",
      "2. 저자는 이 가정이 종종 틀렸다고 주장한다. ( O / X )",
      "3. 'but'은 앞 믿음에 대한 반박을 도입한다. ( O / X )",
      "4. 저자는 내면의 평화가 창의성에 필수적이라고 본다. ( O / X )",
      "5. 이 문장은 일반적 통념에 도전한다. ( O / X )"
    ],
    translation: "널리 퍼진 믿음이 있다 / 창의성이 내면의 평화, 고요함, 차분함을 통해 / 가장 잘 발휘된다는, / 그러나 이 가정은 종종 틀렸다.\n\n→ 창의성이 내면의 평화, 고요함, 차분함을 통해 가장 잘 발휘된다는 널리 퍼진 믿음이 있지만, 이 가정은 종종 틀렸다.",
    logic_answer: [
      "중심 소재: 창의성과 마음 상태",
      "논리 관계: 널리 퍼진 믿음(평화/고요함 → 창의성) ↔ 저자의 주장(이 가정은 틀림)"
    ],
    explanation: "이 문장은 통념-반박 구조예요. 통념: 창의성에 'inner peace, stillness, calmness'(평화, 고요, 차분)가 좋다. 반박: 'this assumption is often wrong'(이 가정은 종종 틀림). 'widespread belief'(널리 퍼진 믿음)이 일반적 통념임을 나타내고, 'but'이 반박을 도입해요. 앞 문장들(백일몽, 집중 불능의 이점)과 연결돼요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'widespread belief that creativity is best served through inner peace, stillness, and calmness'에서 직접 언급돼요.",
      "2. O - 'this assumption is often wrong'에서 직접 언급돼요.",
      "3. O - 'but'이 앞의 널리 퍼진 믿음에 대한 반박을 도입해요.",
      "4. X - 반대예요. 저자는 이 가정이 '틀렸다'고 해요.",
      "5. O - '널리 퍼진 믿음'에 도전하는 구조예요."
    ],
    tip: "[Tip] 'There is a widespread belief that A, but B' 구조는 통념 반박이에요!\n\nA = 널리 퍼진 믿음 (통념)\nbut B = 저자의 반박\n\n시험에서 이 구조가 나오면, B가 저자의 실제 주장이에요. A는 반박 대상일 뿐이에요."
  },
  {
    num: 98,
    sentence: "Visual attention works something like a spotlight, highlighting a part of a scene while leaving the rest obscured in darkness.",
    vocab: [
      "visual attention: 시각적 주의",
      "spotlight: 스포트라이트",
      "highlight: 강조하다, 비추다",
      "scene: 장면",
      "obscure: 가리다, 어둡게 하다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 시각적 주의 = __________________ (특징: __________________)"
    ],
    quiz: [
      "1. 시각적 주의는 스포트라이트처럼 작동한다. ( O / X )",
      "2. 장면의 일부를 강조하고 나머지는 어둠 속에 남긴다. ( O / X )",
      "3. 'something like'는 비유를 도입한다. ( O / X )",
      "4. 시각적 주의는 모든 것을 동시에 본다. ( O / X )",
      "5. 이 비유는 주의의 선택성을 설명한다. ( O / X )"
    ],
    translation: "시각적 주의는 / 스포트라이트와 비슷하게 작동한다, / 장면의 일부를 강조하면서 / 나머지는 어둠 속에 가려둔 채로.\n\n→ 시각적 주의는 스포트라이트와 비슷하게 작동하여, 장면의 일부를 강조하면서 나머지는 어둠 속에 가려둔다.",
    logic_answer: [
      "중심 소재: 시각적 주의의 작동 방식",
      "논리 관계: 시각적 주의 = 스포트라이트 (특징: 일부 강조, 나머지 차단)"
    ],
    explanation: "이 문장은 비유/정의 구조예요. 시각적 주의를 'spotlight'(스포트라이트)에 비유해요. 특징: 'highlighting a part'(일부 강조) + 'leaving the rest obscured'(나머지 차단). 'something like'가 비유를 도입해요. 주의의 선택성(일부만 집중)을 설명하는 비유로, 다음 문장에서 이것의 장단점이 나올 거예요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'works something like a spotlight'에서 직접 비유돼요.",
      "2. O - 'highlighting a part... while leaving the rest obscured'에서 직접 언급돼요.",
      "3. O - 'something like'는 '~와 비슷한'으로 비유를 도입해요.",
      "4. X - 반대예요. 일부만 강조하고 나머지는 차단한다고 해요.",
      "5. O - 스포트라이트 비유가 '선택적 집중'이라는 주의의 특성을 설명해요."
    ],
    tip: "[Tip] 'works like X'는 비유를 통한 설명이에요!\n\nworks like a spotlight = 스포트라이트처럼 작동한다\n\n시험에서 비유가 나오면, 비유 대상(스포트라이트)의 특성이 원래 개념(시각적 주의)의 어떤 면을 설명하는지 파악하세요."
  },
  {
    num: 99,
    sentence: "Anxiety causes tunnel vision making it easier to focus on a threatening stimulus like a weapon—from an evolutionary perspective, this is adaptive.",
    vocab: [
      "anxiety: 불안",
      "tunnel vision: 터널 시야, 좁은 시야",
      "threatening: 위협적인",
      "stimulus: 자극",
      "evolutionary: 진화적인",
      "adaptive: 적응적인"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 불안 → __________________ → __________________ (진화적으로 적응적)"
    ],
    quiz: [
      "1. 불안은 터널 시야를 유발한다. ( O / X )",
      "2. 터널 시야는 무기 같은 위협적 자극에 집중하기 쉽게 만든다. ( O / X )",
      "3. 진화적 관점에서 이것은 적응적이다. ( O / X )",
      "4. 'adaptive'는 생존에 불리함을 의미한다. ( O / X )",
      "5. 이 문장은 불안의 긍정적 기능을 설명한다. ( O / X )"
    ],
    translation: "불안은 터널 시야를 유발하여 / 무기와 같은 위협적 자극에 / 집중하기 쉽게 만든다 / —진화적 관점에서, / 이것은 적응적이다.\n\n→ 불안은 터널 시야를 유발하여 무기와 같은 위협적 자극에 집중하기 쉽게 만든다 — 진화적 관점에서, 이것은 적응적이다.",
    logic_answer: [
      "중심 소재: 불안과 터널 시야",
      "논리 관계: 불안 → 터널 시야 → 위협에 집중 (진화적으로 적응적)"
    ],
    explanation: "이 문장은 인과-평가 구조예요. 인과: 불안(anxiety) → 터널 시야(tunnel vision) → 위협에 집중. 평가: 'from an evolutionary perspective, this is adaptive'(진화적으로 적응적). 위험 상황에서 위협에 집중하는 것이 생존에 유리했다는 진화적 설명이에요. 앞 문장(8번)의 '스포트라이트' 비유를 불안 상황에 적용해요.",
    quiz_answers: "1. O  2. O  3. O  4. X  5. O",
    quiz_explanations: [
      "1. O - 'Anxiety causes tunnel vision'에서 직접 언급돼요.",
      "2. O - 'making it easier to focus on a threatening stimulus like a weapon'에서 직접 언급돼요.",
      "3. O - 'from an evolutionary perspective, this is adaptive'에서 직접 언급돼요.",
      "4. X - 반대예요. 'adaptive'는 '적응적인'으로 생존에 유리함을 의미해요.",
      "5. O - 불안이 위협에 집중하게 해서 생존에 도움이 된다는 긍정적 기능이에요."
    ],
    tip: "[Tip] 'from an evolutionary perspective'는 진화적 설명을 도입해요!\n\n의미: 진화적 관점에서 보면\n\n시험에서 이 표현이 나오면, 해당 특성이 생존/번식에 어떤 이점이 있었는지 설명하는 내용이 나와요."
  },
  {
    num: 100,
    sentence: "If there is useful information outside of the spotlight of attention, then this narrowness comes at a cost—focusing on a gun will lead you to the wrong conclusion if you can't broaden your attention enough to notice that it's a toy.",
    vocab: [
      "spotlight: 스포트라이트",
      "narrowness: 좁음",
      "come at a cost: 대가를 치르다",
      "broaden: 넓히다",
      "notice: 알아채다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 조건(__________________)  → 좁은 주의의 비용 = __________________"
    ],
    quiz: [
      "1. 주의의 스포트라이트 바깥에 유용한 정보가 있을 수 있다. ( O / X )",
      "2. 좁은 주의는 대가를 치를 수 있다. ( O / X )",
      "3. 총에 집중하면 그것이 장난감임을 놓칠 수 있다. ( O / X )",
      "4. 주의를 넓히는 것이 중요할 수 있다. ( O / X )",
      "5. 이 문장은 앞 문장(9번)의 '적응적' 터널 시야의 한계를 지적한다. ( O / X )"
    ],
    translation: "만약 주의의 스포트라이트 바깥에 / 유용한 정보가 있다면, / 이 좁음은 대가를 치르게 된다 / —총에 집중하면 / 잘못된 결론으로 이끌릴 것이다 / 주의를 충분히 넓혀서 / 그것이 장난감임을 알아챌 수 없다면.\n\n→ 주의의 스포트라이트 바깥에 유용한 정보가 있다면, 이 좁음은 대가를 치르게 된다 — 주의를 충분히 넓혀서 그것이 장난감임을 알아챌 수 없다면, 총에 집중하는 것은 잘못된 결론으로 이끌 것이다.",
    logic_answer: [
      "중심 소재: 좁은 주의의 비용",
      "논리 관계: 조건(스포트라이트 밖에 유용한 정보) → 좁은 주의의 비용 = 잘못된 결론"
    ],
    explanation: "이 문장은 조건-결과/한계 구조예요. 앞 문장(9번)에서 터널 시야가 '적응적'이라고 했는데, 이 문장은 그 한계를 지적해요. 조건: 스포트라이트 밖에 유용한 정보가 있을 때. 결과: 'comes at a cost'(대가를 치름). 예시: 총에 집중해서 장난감임을 놓치면 잘못된 결론. 주의의 양면성(이점과 한계)을 균형 있게 제시해요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'useful information outside of the spotlight of attention'에서 직접 언급돼요.",
      "2. O - 'this narrowness comes at a cost'에서 직접 언급돼요.",
      "3. O - 'focusing on a gun will lead you to the wrong conclusion if you can't... notice that it's a toy'에서 직접 언급돼요.",
      "4. O - 'broaden your attention enough to notice'에서 주의 확장의 필요성이 언급돼요.",
      "5. O - 9번(터널 시야의 적응적 이점)의 한계를 10번이 지적해요."
    ],
    tip: "[Tip] 'comes at a cost'는 대가/한계를 나타내요!\n\n의미: 대가를 치른다, 비용이 든다\n\n시험에서 이 표현이 나오면, 앞에서 언급된 이점의 한계나 부정적 측면이 제시되는 신호예요."
  }
];
