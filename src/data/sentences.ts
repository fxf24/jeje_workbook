import { Sentence } from './types';

export type { Sentence };
export const DAY_NUMBER = 9;

export const sentences: Sentence[] = [
  {
    num: 1,
    sentence: "While the magnificent cathedrals of the Middle Ages contained works by the sculptors of the time, it was the combined skills of the stonemason and the architect which were responsible for the structures themselves.",
    vocab: [
      "magnificent: 웅장한",
      "cathedral: 대성당",
      "sculptor: 조각가",
      "combined: 결합된",
      "stonemason: 석공",
      "architect: 건축가",
      "responsible for: ~에 책임이 있는"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 조각가의 작품(포함) ↔ 구조물 자체 = __________"
    ],
    quiz: [
      "1. 중세 대성당에는 조각가들의 작품이 포함되어 있었다. ( O / X )",
      "2. 구조물 자체는 조각가들의 작품이다. ( O / X )",
      "3. 석공과 건축가의 결합된 기술이 구조물을 만들었다. ( O / X )",
      "4. 'it was A which B'는 강조 구문이다. ( O / X )",
      "5. 'While'은 대조를 나타낸다. ( O / X )"
    ],
    translation: "중세의 웅장한 대성당들이 당시 조각가들의 작품을 포함하고 있었지만, / 구조물 자체에 책임이 있는 것은 / 석공과 건축가의 결합된 기술이었다.\n\n→ 중세의 웅장한 대성당들이 당시 조각가들의 작품을 포함하고 있었지만, 구조물 자체를 만든 것은 석공과 건축가의 결합된 기술이었다.",
    logic_answer: [
      "중심 소재: 대성당 건축의 책임 소재",
      "논리 관계: 조각가의 작품(포함) ↔ 구조물 자체 = 석공 + 건축가의 기술"
    ],
    explanation: "이 문장은 'While A, B' 대조 구조와 'it was A which B' 강조 구문이 결합되어 있어요. 대성당이 조각가의 작품을 '포함'(contained)했지만, 구조물 '자체'(themselves)는 석공과 건축가의 기술로 만들어졌다는 거예요. 강조 구문이 '결합된 기술'이 핵심임을 부각시켜요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'contained works by the sculptors'에서 직접 언급돼요.",
      "2. X - 구조물 자체는 '석공과 건축가의 기술'이 책임이라고 해요.",
      "3. O - 'the combined skills of the stonemason and the architect'에서 직접 언급돼요.",
      "4. O - 'it was A which B'는 A를 강조하는 분열문(cleft sentence)이에요.",
      "5. O - 'While'은 여기서 '~인 반면에'로 대조를 나타내요."
    ],
    tip: "[Tip] 'it was A which/that B'는 강조 구문(분열문)이에요!\n\n일반: The skills were responsible.\n강조: It was the skills which were responsible.\n\n'While'은 양보/대조 모두 가능해요. 여기서는 대조예요!"
  },
  {
    num: 2,
    sentence: "In a sense, the reverse has been true in the digital world.",
    vocab: [
      "in a sense: 어떤 의미에서",
      "reverse: 반대, 역",
      "digital world: 디지털 세계"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 중세 대성당 ↔ 디지털 세계 = __________"
    ],
    quiz: [
      "1. 디지털 세계에서는 반대 현상이 일어났다. ( O / X )",
      "2. 'In a sense'는 '완전히'라는 의미다. ( O / X )",
      "3. 'the reverse'는 앞 문장의 반대 상황을 가리킨다. ( O / X )",
      "4. 이 문장은 1번과 대조를 이룬다. ( O / X )",
      "5. 디지털 세계에서는 구조보다 콘텐츠가 중심일 수 있다. ( O / X )"
    ],
    translation: "어떤 의미에서, / 디지털 세계에서는 그 반대가 사실이었다.\n\n→ 어떤 의미에서, 디지털 세계에서는 그 반대가 사실이었다.",
    logic_answer: [
      "중심 소재: 디지털 세계의 특성",
      "논리 관계: 중세 대성당(구조 중심) ↔ 디지털 세계(반대 = 콘텐츠/작품 중심)"
    ],
    explanation: "이 문장은 1번과 대조를 이뤄요. 1번에서 대성당은 '구조'가 석공/건축가의 기술이고 조각은 '포함'된 것이었는데, 디지털 세계에서는 '반대'(reverse)라는 거예요. 즉, 콘텐츠/작품이 중심이고 구조/플랫폼은 부차적일 수 있다는 뜻이에요. 'In a sense'가 완화된 주장을 나타내요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'the reverse has been true'에서 반대가 사실이라고 해요.",
      "2. X - 'In a sense'는 '어떤 의미에서'로 완화된 표현이에요.",
      "3. O - 'the reverse'는 1번(구조 중심)의 반대 상황이에요.",
      "4. O - 1번(구조 중심) ↔ 2번(반대)으로 대조돼요.",
      "5. O - 1번의 반대이므로 콘텐츠가 중심일 수 있어요."
    ],
    tip: "[Tip] 'the reverse'는 앞 내용의 반대예요!\n\n1번: 구조(석공/건축가) 중심, 작품(조각가) 포함\n2번(reverse): 작품/콘텐츠 중심, 구조/플랫폼 부차적\n\n'In a sense'는 완화된 주장을 나타내요."
  },
  {
    num: 3,
    sentence: "As well as being educated and prodigiously talented, the young reverend left nothing to (A).",
    vocab: [
      "as well as: ~뿐만 아니라",
      "prodigiously: 엄청나게",
      "talented: 재능 있는",
      "reverend: 목사",
      "leave nothing to: ~에 아무것도 남기지 않다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 교육 + 재능 + (A)에 아무것도 맡기지 않음 = __________"
    ],
    quiz: [
      "1. 젊은 목사는 교육받고 재능이 있었다. ( O / X )",
      "2. 'prodigiously'는 '조금'이라는 의미다. ( O / X )",
      "3. 'As well as A, B'는 'A뿐만 아니라 B'라는 의미다. ( O / X )",
      "4. 빈칸 (A)에는 'chance'(우연)가 들어갈 수 있다. ( O / X )",
      "5. 이 문장은 철저한 준비를 강조한다. ( O / X )"
    ],
    translation: "교육받았고 엄청나게 재능이 있었을 뿐만 아니라, / 젊은 목사는 (A)에 아무것도 맡기지 않았다.\n\n→ 젊은 목사는 교육받았고 엄청나게 재능이 있었을 뿐만 아니라, (A)에 아무것도 맡기지 않았다.",
    logic_answer: [
      "중심 소재: 젊은 목사의 성공 요인",
      "논리 관계: 교육 + 재능 + 우연에 맡기지 않음(철저한 준비) = 성공"
    ],
    explanation: "이 문장은 'As well as A, B' 추가 구조예요. 교육과 재능 '뿐만 아니라' 무언가를 더 했다는 거예요. 'leave nothing to (A)'는 '(A)에 아무것도 맡기지 않다'라는 뜻으로, (A)에는 'chance'(우연)가 들어가요. 'leave nothing to chance'는 '우연에 맡기지 않다 = 철저히 준비하다'라는 숙어예요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'being educated and prodigiously talented'에서 직접 언급돼요.",
      "2. X - 'prodigiously'는 '엄청나게, 대단히'예요.",
      "3. O - 'As well as A, B'는 'A뿐만 아니라 B도'예요.",
      "4. O - 'leave nothing to chance'(우연에 맡기지 않다)는 숙어예요.",
      "5. O - 우연에 맡기지 않는다는 것은 철저한 준비를 의미해요."
    ],
    tip: "[Tip] 'leave nothing to chance'는 중요한 숙어예요!\n\nleave nothing to chance = 우연에 맡기지 않다 = 철저히 준비하다\n\n반대: leave it to chance = 우연에 맡기다"
  },
  {
    num: 4,
    sentence: "By contrast, consider the fate of those who do not seem to have prepared.",
    vocab: [
      "by contrast: 대조적으로",
      "consider: 생각해보다",
      "fate: 운명",
      "prepare: 준비하다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 철저히 준비한 사람 ↔ __________________"
    ],
    quiz: [
      "1. 'By contrast'는 앞 내용과의 대조를 나타낸다. ( O / X )",
      "2. 준비하지 않은 것처럼 보이는 사람들의 운명을 생각해보라고 한다. ( O / X )",
      "3. 이 문장은 3번과 대조를 이룬다. ( O / X )",
      "4. 'do not seem to have prepared'는 완료 부정사다. ( O / X )",
      "5. 준비하지 않은 사람들의 운명은 긍정적일 것이다. ( O / X )"
    ],
    translation: "대조적으로, / 준비하지 않은 것처럼 보이는 사람들의 운명을 생각해보라.\n\n→ 대조적으로, 준비하지 않은 것처럼 보이는 사람들의 운명을 생각해보라.",
    logic_answer: [
      "중심 소재: 준비 여부에 따른 운명",
      "논리 관계: 철저히 준비한 사람(성공) ↔ 준비 안 한 사람(실패 암시)"
    ],
    explanation: "이 문장은 'By contrast'로 시작하는 대조 구조예요. 3번에서 '우연에 맡기지 않은'(철저히 준비한) 사람을 다뤘다면, 여기서는 '준비하지 않은 것처럼 보이는' 사람들을 대조해요. 'consider the fate'가 독자에게 생각해보라고 권유하며, 부정적 결과를 암시해요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'By contrast'는 '대조적으로'예요.",
      "2. O - 'consider the fate of those who do not seem to have prepared'에서 직접 언급돼요.",
      "3. O - 3번(준비한 사람) ↔ 4번(준비 안 한 사람)으로 대조돼요.",
      "4. O - 'to have prepared'는 완료 부정사로 과거 사실을 나타내요.",
      "5. X - 대조 맥락상 준비 안 한 사람의 운명은 부정적일 거예요."
    ],
    tip: "[Tip] 'By contrast'는 앞과 반대되는 사례를 도입해요!\n\n3번: 철저히 준비 → 성공 암시\nBy contrast, 4번: 준비 안 함 → 실패 암시\n\n'fate'(운명)를 생각해보라는 것은 부정적 결과를 암시해요."
  },
  {
    num: 5,
    sentence: "His chances ebbed because his performance in debates was (B).",
    vocab: [
      "chance: 기회, 가능성",
      "ebb: 빠지다, 쇠퇴하다",
      "performance: 수행, 성과",
      "debate: 토론"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 토론 성과 (B) → 기회 __________"
    ],
    quiz: [
      "1. 그의 기회가 줄어들었다. ( O / X )",
      "2. 'ebb'는 '증가하다'라는 의미다. ( O / X )",
      "3. 토론에서의 성과가 기회 감소의 원인이다. ( O / X )",
      "4. 빈칸 (B)에는 부정적인 표현이 들어간다. ( O / X )",
      "5. 이 문장은 4번의 '준비 안 한 사람'의 구체적 예시다. ( O / X )"
    ],
    translation: "그의 기회는 줄어들었다 / 그의 토론 성과가 (B)했기 때문에.\n\n→ 그의 기회는 토론 성과가 (B)했기 때문에 줄어들었다.",
    logic_answer: [
      "중심 소재: 준비 부족의 결과",
      "논리 관계: 토론 성과 (B) 부정적 → 기회 감소(ebb)"
    ],
    explanation: "이 문장은 4번의 구체적 예시예요. 'ebb'(썰물처럼 빠지다)가 기회 감소를 나타내요. 'because'가 원인을 제시하는데, 토론 성과가 (B)했기 때문이에요. 빈칸에는 'poor'(형편없는), 'disappointing'(실망스러운), 'lackluster'(활기 없는) 같은 부정적 표현이 들어가요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'chances ebbed'에서 기회가 줄어들었다고 해요.",
      "2. X - 'ebb'는 '(썰물처럼) 빠지다, 쇠퇴하다'예요.",
      "3. O - 'because his performance'에서 토론 성과가 원인이에요.",
      "4. O - 기회가 '줄어든' 원인이므로 부정적 표현이 들어가야 해요.",
      "5. O - 4번(준비 안 한 사람) → 5번(구체적 실패 사례)으로 연결돼요."
    ],
    tip: "[Tip] 'ebb'는 비유적으로 '쇠퇴하다'예요!\n\nebb (원래 뜻): 썰물이 되다\nebb (비유): 힘/기회 등이 빠지다, 쇠퇴하다\n\n빈칸은 'because' 뒤에서 원인을 설명하므로 논리적으로 연결하세요!"
  },
  {
    num: 6,
    sentence: "One of the most important problems is that of modernization, and this operation logically means the use of modern architecture.",
    vocab: [
      "modernization: 현대화",
      "operation: 작업, 운영",
      "logically: 논리적으로",
      "architecture: 건축"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 현대화 문제 → __________________"
    ],
    quiz: [
      "1. 가장 중요한 문제 중 하나가 현대화다. ( O / X )",
      "2. 현대화는 논리적으로 현대 건축의 사용을 의미한다. ( O / X )",
      "3. 'that of modernization'에서 'that'은 'problem'을 가리킨다. ( O / X )",
      "4. 'logically means'는 필연적 연결을 나타낸다. ( O / X )",
      "5. 이 문장은 고건축 보존의 딜레마를 도입한다. ( O / X )"
    ],
    translation: "가장 중요한 문제 중 하나는 현대화의 문제이며, / 이 작업은 논리적으로 현대 건축의 사용을 의미한다.\n\n→ 가장 중요한 문제 중 하나는 현대화의 문제이며, 이 작업은 논리적으로 현대 건축의 사용을 의미한다.",
    logic_answer: [
      "중심 소재: 건축의 현대화 문제",
      "논리 관계: 현대화 문제 → 현대 건축 사용 (필연적)"
    ],
    explanation: "이 문장은 문제 제기 + 논리적 귀결 구조예요. '현대화'가 가장 중요한 문제이고, 이것이 '논리적으로'(logically) 현대 건축 사용을 의미한다고 해요. 'that of modernization'에서 'that'은 'problem'을 대신해요. 다음 문장에서 이 문제의 구체적 딜레마가 나올 거예요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'One of the most important problems is that of modernization'에서 직접 언급돼요.",
      "2. O - 'logically means the use of modern architecture'에서 직접 언급돼요.",
      "3. O - 'that'은 반복을 피하기 위해 'problem'을 대신해요.",
      "4. O - 'logically means'는 논리적/필연적 연결을 나타내요.",
      "5. O - 현대화와 보존 사이의 딜레마를 도입하는 문장이에요."
    ],
    tip: "[Tip] 'that of A'에서 'that'은 앞의 명사를 대신해요!\n\nthe problem of X = that of X\n\n'logically means'는 논리적 필연성을 나타내요. 현대화 → 현대 건축 사용은 피할 수 없다는 뜻이에요."
  },
  {
    num: 7,
    sentence: "The question is, exactly how far, where alterations in the internal structure of ancient buildings are required in order to ensure their survival without __________ those very qualities which make them worth preserving, is it necessary and permissible to make use of modern architectural devices?",
    vocab: [
      "alteration: 변경, 개조",
      "internal structure: 내부 구조",
      "ensure: 보장하다",
      "survival: 생존, 존속",
      "preserve: 보존하다",
      "permissible: 허용되는",
      "device: 장치, 기법"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 생존 보장 + __________ 없이 → 현대 건축 기법 사용 범위?"
    ],
    quiz: [
      "1. 고건축의 내부 구조 변경이 필요할 수 있다. ( O / X )",
      "2. 빈칸에는 '보존 가치를 손상시키다'라는 의미가 들어간다. ( O / X )",
      "3. 현대 건축 기법 사용의 범위가 문제다. ( O / X )",
      "4. 'those very qualities'는 보존할 가치가 있게 만드는 특성이다. ( O / X )",
      "5. 이 문장은 보존과 현대화의 균형 문제를 다룬다. ( O / X )"
    ],
    translation: "문제는, 정확히 얼마나, / 고건축의 내부 구조 변경이 / 그것들의 생존을 보장하기 위해 필요한 경우, / 보존할 가치가 있게 만드는 바로 그 특성들을 __________하지 않으면서, / 현대 건축 기법을 사용하는 것이 필요하고 허용되는가?\n\n→ 문제는, 고건축의 내부 구조 변경이 그것들의 생존을 보장하기 위해 필요한 경우, 보존할 가치가 있게 만드는 바로 그 특성들을 __________하지 않으면서 현대 건축 기법을 사용하는 것이 정확히 어디까지 필요하고 허용되는가이다.",
    logic_answer: [
      "중심 소재: 고건축 보존과 현대화의 딜레마",
      "논리 관계: 생존 보장 + 가치 손상(compromising/destroying) 없이 → 현대 기법 사용 범위?"
    ],
    explanation: "이 문장은 복잡한 질문 구조예요. 핵심 딜레마: 고건축의 '생존'을 위해 현대 기법이 필요하지만, '보존 가치'를 손상시키지 않아야 해요. 빈칸에는 'compromising'(손상시키는), 'destroying'(파괴하는), 'sacrificing'(희생시키는) 등이 들어가요. 'without __-ing'이 조건을 설정해요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'alterations in the internal structure... are required'에서 직접 언급돼요.",
      "2. O - 문맥상 '보존 가치를 손상/파괴'하다는 의미가 들어가야 해요.",
      "3. O - 'exactly how far... is it necessary and permissible'가 범위를 묻고 있어요.",
      "4. O - 'those very qualities which make them worth preserving'에서 직접 언급돼요.",
      "5. O - 생존(현대화 필요) vs 보존 가치(손상 방지)의 균형 문제예요."
    ],
    tip: "[Tip] 'without __-ing'은 조건/제약을 설정해요!\n\nwithout compromising = 손상시키지 않으면서\n\n보존의 딜레마:\n- 생존 보장 = 현대 기법 필요\n- 가치 보존 = 원형 유지 필요\n이 둘의 균형이 핵심 문제예요!"
  },
  {
    num: 8,
    sentence: "Networks are open structures that develop through the addition of new nodes. They tend to have a more informal nature in comparison with the hierarchical and ordered nature of traditional forms of social relations.",
    vocab: [
      "network: 네트워크, 연결망",
      "structure: 구조",
      "node: 노드, 결절점",
      "informal: 비공식적인",
      "hierarchical: 위계적인",
      "ordered: 질서 있는"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 네트워크 = __________ ↔ 전통적 관계 = __________"
    ],
    quiz: [
      "1. 네트워크는 새로운 노드 추가를 통해 발전하는 개방적 구조다. ( O / X )",
      "2. 네트워크는 전통적 사회관계보다 더 공식적이다. ( O / X )",
      "3. 전통적 사회관계는 위계적이고 질서 있는 특성을 가진다. ( O / X )",
      "4. 'in comparison with'는 비교를 나타낸다. ( O / X )",
      "5. 'node'는 '노드, 결절점'을 의미한다. ( O / X )"
    ],
    translation: "네트워크는 새로운 노드의 추가를 통해 발전하는 개방적 구조다. / 그것들은 전통적 사회관계 형태의 위계적이고 질서 있는 특성과 비교하여 / 더 비공식적인 특성을 가지는 경향이 있다.\n\n→ 네트워크는 새로운 노드의 추가를 통해 발전하는 개방적 구조다. 그것들은 전통적 사회관계 형태의 위계적이고 질서 있는 특성과 비교하여 더 비공식적인 특성을 가지는 경향이 있다.",
    logic_answer: [
      "중심 소재: 네트워크 vs 전통적 사회관계",
      "논리 관계: 네트워크 = 개방적, 비공식적 ↔ 전통적 관계 = 위계적, 질서 있는"
    ],
    explanation: "이 문장은 정의 + 대조 구조예요. 네트워크를 '개방적 구조'로 정의하고, 전통적 사회관계와 대조해요. 네트워크는 '비공식적'(informal)인 반면, 전통적 관계는 '위계적'(hierarchical)이고 '질서 있는'(ordered) 특성이 있어요. 'in comparison with'가 대조를 도입해요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'open structures that develop through the addition of new nodes'에서 직접 언급돼요.",
      "2. X - 'more informal nature'에서 더 비공식적이라고 해요.",
      "3. O - 'hierarchical and ordered nature of traditional forms'에서 직접 언급돼요.",
      "4. O - 'in comparison with'는 '~와 비교하여'예요.",
      "5. O - 'node'는 네트워크의 '노드, 결절점'이에요."
    ],
    tip: "[Tip] 'in comparison with A'는 A와의 대조를 도입해요!\n\n네트워크: open, informal\n전통적 관계: hierarchical, ordered\n\n이 대조를 파악하면 네트워크의 특성을 명확히 이해할 수 있어요!"
  },
  {
    num: 9,
    sentence: "Networks are horizontal and reciprocal, more open and flexible, although ultimately they form some more or less stable pattern of social relations.",
    vocab: [
      "horizontal: 수평적인",
      "reciprocal: 상호적인",
      "flexible: 유연한",
      "ultimately: 궁극적으로",
      "more or less: 다소, 어느 정도"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 네트워크 = __________ (양보: __________)"
    ],
    quiz: [
      "1. 네트워크는 수평적이고 상호적이다. ( O / X )",
      "2. 네트워크는 개방적이고 유연하다. ( O / X )",
      "3. 네트워크는 궁극적으로 완전히 불안정한 패턴을 형성한다. ( O / X )",
      "4. 'although'는 양보를 나타낸다. ( O / X )",
      "5. 'more or less'는 '다소, 어느 정도'라는 의미다. ( O / X )"
    ],
    translation: "네트워크는 수평적이고 상호적이며, 더 개방적이고 유연하다, / 비록 궁극적으로는 어느 정도 안정적인 사회관계 패턴을 형성하지만.\n\n→ 네트워크는 수평적이고 상호적이며, 더 개방적이고 유연하다. 비록 궁극적으로는 어느 정도 안정적인 사회관계 패턴을 형성하지만.",
    logic_answer: [
      "중심 소재: 네트워크의 이중적 특성",
      "논리 관계: 네트워크 = 수평적, 상호적, 유연함 (양보: 궁극적으로 안정적 패턴 형성)"
    ],
    explanation: "이 문장은 8번을 보충하면서 양보절을 추가해요. 네트워크가 '수평적'(horizontal), '상호적'(reciprocal), '유연한'(flexible) 특성을 가지지만, 'although'가 양보를 도입해서 '궁극적으로는 안정적 패턴을 형성'한다고 해요. 이것은 네트워크의 이중적 특성을 보여줘요.",
    quiz_answers: "1. O  2. O  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'horizontal and reciprocal'에서 직접 언급돼요.",
      "2. O - 'more open and flexible'에서 직접 언급돼요.",
      "3. X - 'some more or less stable pattern'에서 '어느 정도 안정적'이라고 해요.",
      "4. O - 'although'는 '비록 ~이지만'으로 양보를 나타내요.",
      "5. O - 'more or less'는 '다소, 어느 정도'예요."
    ],
    tip: "[Tip] 'although'는 주장에 대한 양보/제한을 추가해요!\n\n주장: 네트워크는 수평적, 유연함\nalthough: 궁극적으로는 안정적 패턴 형성\n\n양보절은 주장을 완전히 반박하지 않고 균형을 잡아줘요."
  },
  {
    num: 10,
    sentence: "Food aversions are __________ ethnic markers, persisting long after other traditions have been abandoned.",
    vocab: [
      "aversion: 혐오, 거부감",
      "ethnic: 민족의",
      "marker: 표지, 지표",
      "persist: 지속하다",
      "abandon: 버리다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 음식 혐오 = __________ 민족 표지 (다른 전통보다 오래 지속)"
    ],
    quiz: [
      "1. 음식 혐오는 민족 표지의 일종이다. ( O / X )",
      "2. 음식 혐오는 다른 전통이 버려진 후에도 지속된다. ( O / X )",
      "3. 빈칸에는 음식 혐오의 지속성을 강조하는 표현이 들어간다. ( O / X )",
      "4. 'persisting'은 분사구문으로 부연 설명이다. ( O / X )",
      "5. 음식 전통은 다른 문화 전통보다 쉽게 바뀐다. ( O / X )"
    ],
    translation: "음식 혐오는 __________ 민족 표지다, / 다른 전통들이 버려진 후에도 오래 지속되면서.\n\n→ 음식 혐오는 __________ 민족 표지로, 다른 전통들이 버려진 후에도 오래 지속된다.",
    logic_answer: [
      "중심 소재: 음식 혐오의 문화적 지속성",
      "논리 관계: 음식 혐오 = 강력한/지속적인(powerful/enduring) 민족 표지"
    ],
    explanation: "이 문장은 정의 + 부연 구조예요. 음식 혐오가 '민족 표지'(ethnic markers)라고 정의하고, 분사구문 'persisting'이 부연해요: 다른 전통이 버려진 후에도 '오래 지속'한다는 거예요. 빈칸에는 'powerful'(강력한), 'enduring'(지속적인), 'particularly strong'(특히 강한) 같은 표현이 들어가요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. X",
    quiz_explanations: [
      "1. O - 'ethnic markers'에서 민족 표지라고 해요.",
      "2. O - 'persisting long after other traditions have been abandoned'에서 직접 언급돼요.",
      "3. O - 분사구문이 지속성을 설명하므로 빈칸도 지속성을 강조해야 해요.",
      "4. O - 'persisting'은 분사구문으로 음식 혐오에 대해 부연해요.",
      "5. X - 'long after other traditions have been abandoned'에서 다른 것보다 오래 지속돼요."
    ],
    tip: "[Tip] 분사구문은 앞 내용을 부연/설명해요!\n\nFood aversions are __ ethnic markers\n(분사구문) persisting long after...\n\n분사구문이 '지속성'을 설명하므로 빈칸도 그와 연결되는 표현이 들어가요!"
  },
  {
    num: 11,
    sentence: "__________, splendid in itself, cannot be fully reconciled with the need for planning, organization, careful and responsible calculation.",
    vocab: [
      "splendid: 훌륭한",
      "in itself: 그 자체로",
      "reconcile with: ~와 조화시키다",
      "calculation: 계산"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: __________(훌륭함) ≠ 계획/조직/계산"
    ],
    quiz: [
      "1. 빈칸의 것은 그 자체로 훌륭하다. ( O / X )",
      "2. 빈칸의 것은 계획, 조직, 계산과 완전히 조화될 수 있다. ( O / X )",
      "3. 'reconcile with'는 '~와 조화시키다'라는 의미다. ( O / X )",
      "4. 'in itself'는 삽입구로 부연 설명이다. ( O / X )",
      "5. 빈칸에는 자유로움/자발성 관련 개념이 들어갈 수 있다. ( O / X )"
    ],
    translation: "__________은/는 그 자체로 훌륭하지만, / 계획, 조직, 신중하고 책임 있는 계산의 필요와 / 완전히 조화될 수 없다.\n\n→ __________은/는 그 자체로 훌륭하지만, 계획, 조직, 신중하고 책임 있는 계산의 필요와 완전히 조화될 수 없다.",
    logic_answer: [
      "중심 소재: 훌륭함과 계획성의 양립 불가",
      "논리 관계: 자발성/자유(spontaneity/freedom)(훌륭함) ≠ 계획/조직/계산"
    ],
    explanation: "이 문장은 빈칸 주어 + 양보 + 주장 구조예요. 빈칸의 것이 '그 자체로 훌륭'(splendid in itself)하지만, 계획/조직/계산과 '조화될 수 없다'(cannot be reconciled)고 해요. 문맥상 빈칸에는 'spontaneity'(자발성), 'freedom'(자유), 'creativity'(창의성) 같은 개념이 들어가요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'splendid in itself'에서 그 자체로 훌륭하다고 해요.",
      "2. X - 'cannot be fully reconciled'에서 완전히 조화될 수 없다고 해요.",
      "3. O - 'reconcile with'는 '~와 조화시키다, 화해시키다'예요.",
      "4. O - 'splendid in itself'는 삽입구로 주어를 부연해요.",
      "5. O - 계획/조직과 대조되는 것은 자유로움/자발성이에요."
    ],
    tip: "[Tip] ', X in itself,'는 삽입 부연이에요!\n\nA, splendid in itself, cannot B\n= A는 그 자체로 훌륭하지만 B할 수 없다\n\n계획/조직과 대조되는 개념: spontaneity(자발성), freedom(자유)"
  },
  {
    num: 12,
    sentence: "The pursuit of truth—the noblest of aims—cannot be fully reconciled with the happiness that men desire, for even if I know that I have some incurable disease of pursuing truth, this will not make me happier or freer.",
    vocab: [
      "pursuit: 추구",
      "noblest: 가장 고귀한",
      "aim: 목표",
      "reconcile: 조화시키다",
      "incurable: 불치의",
      "disease: 질병"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 진리 추구 ≠ __________________"
    ],
    quiz: [
      "1. 진리 추구는 가장 고귀한 목표 중 하나다. ( O / X )",
      "2. 진리 추구는 인간이 원하는 행복과 완전히 조화될 수 있다. ( O / X )",
      "3. 대시(—)는 부연 설명을 나타낸다. ( O / X )",
      "4. 불치의 병을 알아도 더 행복해지지 않는다는 예시가 있다. ( O / X )",
      "5. 'for'는 이유를 도입한다. ( O / X )"
    ],
    translation: "진리의 추구는—가장 고귀한 목표는—/ 인간이 원하는 행복과 완전히 조화될 수 없다, / 왜냐하면 내가 불치의 병이 있다는 것을 안다 해도, / 진리 추구의, / 이것이 나를 더 행복하게 하거나 자유롭게 하지는 않을 것이기 때문이다.\n\n→ 진리의 추구—가장 고귀한 목표—는 인간이 원하는 행복과 완전히 조화될 수 없다. 왜냐하면 내가 진리를 추구하는 불치의 병이 있다는 것을 안다 해도, 이것이 나를 더 행복하게 하거나 자유롭게 하지는 않을 것이기 때문이다.",
    logic_answer: [
      "중심 소재: 진리와 행복의 양립 불가",
      "논리 관계: 진리 추구 ≠ 행복 (양립 불가)"
    ],
    explanation: "이 문장은 11번과 유사한 구조로 구체적 예시를 제시해요. '진리 추구'가 '행복'과 '조화될 수 없다'고 해요. 대시(—)가 '가장 고귀한 목표'라는 부연을 추가해요. 'for'가 이유를 도입하는데, 불치의 병을 알아도 행복/자유로워지지 않는다는 예시예요. 이것은 Isaiah Berlin의 가치 다원주의와 관련돼요.",
    quiz_answers: "1. O  2. X  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'the noblest of aims'에서 가장 고귀한 목표라고 해요.",
      "2. X - 'cannot be fully reconciled'에서 완전히 조화될 수 없다고 해요.",
      "3. O - '—the noblest of aims—'는 대시로 부연 설명을 추가해요.",
      "4. O - 'even if I know that I have some incurable disease'가 예시예요.",
      "5. O - 'for'는 '왜냐하면'으로 이유를 도입해요."
    ],
    tip: "[Tip] 대시(—A—)는 삽입 부연이에요!\n\nThe pursuit of truth—the noblest of aims—\n= 진리 추구(가장 고귀한 목표)\n\n'cannot be reconciled'가 핵심: 진리 추구와 행복은 양립 불가"
  },
  {
    num: 13,
    sentence: "I must always choose: between peace and excitement, or knowledge and blissful ignorance.",
    vocab: [
      "choose: 선택하다",
      "peace: 평화",
      "excitement: 흥분, 자극",
      "blissful: 행복한, 황홀한",
      "ignorance: 무지"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 선택 = __________ vs __________, __________ vs __________"
    ],
    quiz: [
      "1. 항상 선택해야 한다. ( O / X )",
      "2. 평화와 흥분은 양립할 수 있다. ( O / X )",
      "3. 지식과 행복한 무지는 양립할 수 있다. ( O / X )",
      "4. 'blissful ignorance'는 '행복한 무지'를 의미한다. ( O / X )",
      "5. 이 문장은 가치들 사이의 선택 불가피성을 강조한다. ( O / X )"
    ],
    translation: "나는 항상 선택해야 한다: / 평화와 흥분 사이에서, / 또는 지식과 행복한 무지 사이에서.\n\n→ 나는 항상 선택해야 한다: 평화와 흥분 사이에서, 또는 지식과 행복한 무지 사이에서.",
    logic_answer: [
      "중심 소재: 가치 선택의 불가피성",
      "논리 관계: 선택 = 평화 vs 흥분, 지식 vs 행복한 무지"
    ],
    explanation: "이 문장은 12번의 결론이에요. 진리와 행복이 양립 불가하므로 '항상 선택해야'(must always choose) 한다는 거예요. 두 가지 선택이 제시돼요: 1) 평화 vs 흥분, 2) 지식 vs 행복한 무지. 'blissful ignorance'(행복한 무지)는 '모르는 게 약이다'와 비슷한 개념이에요.",
    quiz_answers: "1. O  2. X  3. X  4. O  5. O",
    quiz_explanations: [
      "1. O - 'I must always choose'에서 직접 언급돼요.",
      "2. X - 'between peace and excitement'에서 둘 중 하나를 선택해야 해요.",
      "3. X - 'between knowledge and blissful ignorance'에서 둘 중 하나를 선택해야 해요.",
      "4. O - 'blissful ignorance'는 '행복한 무지'예요.",
      "5. O - 항상 선택해야 한다는 것이 가치 선택의 불가피성이에요."
    ],
    tip: "[Tip] 'choose between A and B'는 양립 불가를 나타내요!\n\nA와 B 둘 다 가질 수 없으므로 선택해야 함\n\n'blissful ignorance' = 행복한 무지 (아는 것이 때로는 고통)"
  },
  {
    num: 14,
    sentence: "The results of life are uncalculated and uncalculable. The years teach much which the days never know.",
    vocab: [
      "result: 결과",
      "uncalculated: 계산되지 않은",
      "uncalculable: 계산할 수 없는"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 인생의 결과 = __________, 세월 vs 하루 = __________"
    ],
    quiz: [
      "1. 인생의 결과는 계산되지 않고 계산할 수도 없다. ( O / X )",
      "2. 세월은 하루가 모르는 많은 것을 가르친다. ( O / X )",
      "3. 'uncalculable'은 '계산할 수 없는'이라는 의미다. ( O / X )",
      "4. 이 문장은 인생의 예측 불가능성을 강조한다. ( O / X )",
      "5. 'which the days never know'에서 'which'는 관계대명사다. ( O / X )"
    ],
    translation: "인생의 결과는 계산되지 않았고 계산할 수 없다. / 세월은 하루가 결코 알지 못하는 많은 것을 가르친다.\n\n→ 인생의 결과는 계산되지 않았고 계산할 수도 없다. 세월은 하루가 결코 알지 못하는 많은 것을 가르친다.",
    logic_answer: [
      "중심 소재: 인생의 예측 불가능성",
      "논리 관계: 인생의 결과 = 계산 불가, 세월 vs 하루 = 장기적 통찰 vs 단기적 무지"
    ],
    explanation: "이 문장은 인생의 예측 불가능성을 강조해요. 첫 문장은 결과가 '계산되지 않았고'(uncalculated) '계산할 수도 없다'(uncalculable)고 해요. 두 번째 문장은 '세월'(years)이 '하루'(days)가 모르는 것을 가르친다며, 장기적 관점의 중요성을 말해요. 이것은 Emerson의 글이에요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'uncalculated and uncalculable'에서 직접 언급돼요.",
      "2. O - 'The years teach much which the days never know'에서 직접 언급돼요.",
      "3. O - 'uncalculable'은 '계산할 수 없는'이에요.",
      "4. O - '계산 불가'가 예측 불가능성을 강조해요.",
      "5. O - 'which the days never know'에서 'which'는 'much'를 선행사로 하는 관계대명사예요."
    ],
    tip: "[Tip] 'un- + 과거분사' vs 'un- + 형용사'를 구별하세요!\n\nuncalculated: 계산되지 않은 (과거분사)\nuncalculable: 계산할 수 없는 (형용사)\n\n'years vs days'는 장기적 통찰 vs 단기적 무지의 대조예요."
  },
  {
    num: 15,
    sentence: "The individual designed many things, and drew in other persons as coadjutors, quarrelled with some or all, blundered much, and something is done; all are a little advanced, but the individual is always __________.",
    vocab: [
      "draw in: 끌어들이다",
      "coadjutor: 협력자, 조수",
      "quarrel with: ~와 다투다",
      "blunder: 실수하다",
      "advance: 발전하다, 진보하다"
    ],
    logic_blanks: [
      "중심 소재: __________________",
      "논리 관계: 전체 = 조금 발전 ↔ 개인 = __________"
    ],
    quiz: [
      "1. 개인은 많은 것을 설계하고 다른 사람들을 협력자로 끌어들였다. ( O / X )",
      "2. 일부 또는 전부와 다투기도 했다. ( O / X )",
      "3. 무언가가 이루어지고 모두가 조금 발전했다. ( O / X )",
      "4. 빈칸에는 개인의 상태를 나타내는 표현이 들어간다. ( O / X )",
      "5. 빈칸에는 '발전'과 대조되는 부정적 표현이 들어간다. ( O / X )"
    ],
    translation: "개인은 많은 것을 설계했고, / 다른 사람들을 협력자로 끌어들였고, / 일부 또는 전부와 다투었고, / 많이 실수했고, / 그리고 무언가가 이루어진다; / 모두가 조금 발전하지만, / 개인은 항상 __________하다.\n\n→ 개인은 많은 것을 설계하고, 다른 사람들을 협력자로 끌어들이고, 일부 또는 전부와 다투고, 많이 실수하고, 무언가가 이루어진다. 모두가 조금 발전하지만, 개인은 항상 __________하다.",
    logic_answer: [
      "중심 소재: 집단 발전 vs 개인의 한계",
      "논리 관계: 전체 = 조금 발전 ↔ 개인 = 뒤처짐/무시됨(mistaken/overlooked)"
    ],
    explanation: "이 문장은 개인과 집단의 대조예요. 개인이 설계하고, 협력자를 끌어들이고, 다투고, 실수하면서 '무언가가 이루어지고' '모두가 발전'하지만, 'but'이 대조를 도입해서 개인은 '항상' 어떤 상태라고 해요. 빈칸에는 'mistaken'(오해받는), 'overlooked'(간과되는), 'left behind'(뒤처지는) 같은 표현이 들어가요.",
    quiz_answers: "1. O  2. O  3. O  4. O  5. O",
    quiz_explanations: [
      "1. O - 'designed many things, and drew in other persons as coadjutors'에서 직접 언급돼요.",
      "2. O - 'quarrelled with some or all'에서 직접 언급돼요.",
      "3. O - 'something is done; all are a little advanced'에서 직접 언급돼요.",
      "4. O - 빈칸이 'the individual is always __'에서 개인의 상태를 나타내요.",
      "5. O - 'but'이 대조를 도입하고, 전체 '발전'과 대조되는 표현이 필요해요."
    ],
    tip: "[Tip] 'all A, but the individual B'는 집단 vs 개인 대조예요!\n\nall: 모두 조금 발전\nbut individual: 개인은 (반대 상태)\n\n'but'이 대조를 도입하므로 빈칸은 '발전'과 반대되는 표현이 들어가요!"
  }
];