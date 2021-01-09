export const ko = {
    translations: {
        values: {
            one: "일",
            two: "이",
            three: "삼",
            four: "사",
            five: "오",
            six: "육",
            seven: "칠",
            eight: "팔",
            nine: "구",
            redFive: "적오",
            east: "동",
            south: "남",
            west: "서",
            north: "북",
            white: "백",
            green: "발",
            red: "중",
            hidden: "숨겨진 손패",
        },
        suits: {
            characters: "만",
            circles: "통",
            bamboo: "삭"
        },
        shuupai: "{{value}}{{suit}}",
        winds: {
            east: "동",
            south: "남",
            west: "서",
            north: "북"
        },
        roundName: "{{wind}}{{number}}국 {{repeats}}본장",
        trainer: {
            disclaimer: "면책 조항: 이 트레이너는 지금 손패에서 가장 효율적으로 텐파이할 수 있도록 훈련합니다. 즉, 나중에 대기가 넓어지는 선택, 효율성을 무시하는 것이 더 나은 국면, 높은 점수를 얻는 방법을 배우는 데에는 도움이 되지 않습니다. 이 트레이너가 제안하는 방식이 모든 손패에서 최고의 방법은 아니지만, 패 효율성을 바탕으로 선택할 수 있도록 도와줄 것입니다. 고수는 패 효율성만을 고려하여 타패하는 것은 아니지만, 어떤 패가 가장 효율적인 타패인지 알고 있으며, 이러한 방식으로 타패하는 방법을 알고 있습니다. 이 트레이너는 어디까지나 패 효율을 단련하는 보조 도구로서 사용하십시오.",
            instructions: "타패할 패를 클릭하세요.",
            start: "새로운 손패로 시작했습니다: {{hand}}",
            complete: " 텐파이 했습니다. 축하합니다! 당신의 효율성은 {{achieved}}/{{total}}(으)로, {{percent}}% 입니다.",
            newHandButtonLabel: "새 손패",
            loadButtonLabel: "손패 불러오기",
            roundWind: "장풍:",
            seatWind: "자풍:",
            doraIndicator: "도라표시패:",
            copyHand: "손패 복사",
            copied: "복사했습니다!",
            error: {
                load: "오류: 입력한 손패를 이해할 수 없습니다",
                wallEmpty: "오류: 손패의 갯수가 충분하지 않습니다.",
                wallEmptyShuffle: "패산에 남아있는 패가 부족하여 새로운 손패를 만들 수 없습니다. 패를 다시 섞습니다."
            },
            playerNames: {
                you: "당신",
                right: "하가",
                across: "대면",
                left: "상가"
            }
        },
        history: {
            label: "손패 기록",
            tenhouLinkText: "[천봉 패효율(유효패)]",
            concise: {
                discard: "타패: {{tile}}",
                acceptance: " ({{count}} 개).",
                loweredShanten: " (샹텐 수가 되돌아감).",
                optimal: " 최대 패효율:",
                optimalSpoiler: " {{tile}}",
                best: " 가장 좋은 선택이었습니다!",
                exceptionalNoten: " 화료패가 모두 손패에 있어 텐파이하지 못했습니다.",
                furiten: " 후리텐.",
                furitenWarning: " 후리텐을 조심하세요.",
                exhausted: " 패산에 남은 패가 없습니다. 다음 기회를 노려봅시다! ",
                draw: " 쯔모: {{tile}}. "
            },
            verbose: {
                discard: "{{tile}}을(를) 타패하여, ",
                acceptance: "유효패는 {{count}}개 입니다.",
                loweredShanten: " 샹텐 수가 올라가 텐파이에서 멀어졌습니다.",
                optimal: " 가장 효율적인 타패는",
                optimalSpoiler: " {{tile}}(으)로, ",
                best: " 지금 버린 패가 최대 효율이었습니다!",
                exceptionalNoten: " 텐파이했지만, 화료패가 모두 당신의 손패에 있습니다. 대부분의 규칙에서 이러한 형태는 텐파이로 인정하지 않습니다. 대기를 바꿔봅시다.",
                furiten: " 후리텐이 되고 말았습니다 이 손패로는 론 화료가 불가능합니다. 화료패를 이미 버렸기 때문입니다.",
                furitenWarning: " 후리텐을 조심하세요. 텐파이하기 위한 유효패중 일부가 이미 당신의 버림패에 있습니다.",
                exhausted: " 패산에 남은 패가 없습니다. 다음 기회를 노려봅시다! ",
                draw: " 쯔모한 패는 {{tile}}입니다. "
            }
        },
        discards: {
            label: "버림패",
            discardCount: "버림패는 {{count}}개입니다.",
            tilesLeft: "패산에 {{count}}개의 패가 남아 있습니다.",
        },
        settings: {
            buttonLabel: "설정",
            tilesAllowed: "사용하는 패:",
            characters: "만수패",
            circles: "통수패",
            bamboo: "삭수패",
            honors: "자패",
            sanma: "삼인 마작",
            redFives: "적도라의 갯수:",
            verbose: "패 이름을 상세하게 표시 (\"1s\"대신 \"일삭\"으로 표시)",
            showIndexes: "인덱스 보기",
            concise: "손패 기록을 간략하게",
            spoilers: "최선의 패효율 선택이 무엇인지 표시",
            shuffle: "새 손패로 시작한 후 버림패를 섞어 패산 쌓기",
            simulate: "다른 작사의 타패를 시뮬레이션",
            exceptions: "특수 형태의 손패 고려(국사무쌍/치또이츠)",
            minShanten: "시작 손패의 최소 샹텐 수:",
            minShantenLimit: "(최대값은 사용하는 패의 수)",
            sort: "손패 자동 정렬",
            blind: "손패 숨기기",
            useTimer: "타이머 사용",
            time: "결정 당 시간 제한:",
            extraTime: "추가 시간:",
            seconds: "초"
        },
        stats: {
            buttonLabel: "통계",
            info: "통계 데이터는 손패를 텐파이 할때마다 갱신됩니다.",
            ready: "텐파이 횟수: {{count}} 회",
            discards: "타패 횟수: {{count}} 개",
            average: "텐파이까지 타패한 평균 개수: {{average}} 개",
            optimal: "최대 효율로 타패 횟수: {{count}} 개",
            optimalRate: "최대 효율 타패 비율: {{percent}}% ({{achieved}}/{{total}})",
            efficiency: "실제로 받은 유효패 개수: {{count}} 개",
            possible: "이론적으로 받을 수 있는 유효패 개수: {{count}} 개",
            overall: "종합 패효율: {{percent}}% ({{achieved}}/{{total}})",
            reset: "통계 초기화",
            confirmation: "모든 통계 데이터를 초기화하시겠습니까? 이 작업은 취소할 수 없습니다.",
            yes: "네, 초기화해주세요!",
            no: "아니오, 초기화하지 않을래요!"
        },
        credits: {
            label: "Credits",
            tilesPreLink: "Tile images combined from ",
            tilesLinkText: "riichi-mahjong-tiles by FluffyStuff on Github",
            tilesPostLink: ", licensed under the ",
            ccLinkText: "Creative Commons Attribution 4.0 International License.",
            shantenPreLink: "Shanten calculation algorithm adapted from ",
            shantenLinkText: "this C program collection.",
            shantenPostLink: "",
        },
        menu: {
            trainer: "패효율 연습",
            analyzer: "분석기",
            allLast: "오라스 연습",
            explorer: "탐색기",
            utils: "기타 도구",
            language: "언어",
            defense: "베타오리"
        },
        allLast: {
            placements: {
                first: "1위",
                second: "2위",
                third: "3위",
                fourth: "4위"
            },
            title: "오라스 연습",
            maxFu: "최대 부수",
            showDifferences: "점수 차이 표시",
            loadInstructions: "쉼표로 구분하여 동,남,서,북 순서로 점수를 입력해주세요.",
            loadLabel: "점수 상황 불러오기",
            newLabel: "임의의 상황에서 새로 시작",
            info: "현재 오라스에서 당신은 4위입니다. 점수 상황은 다음과 같습니다:",
            escapeHeader: "4위 회피",
            riichiHeader: "리치 선언",
            higherHeader: "순위 상승",
            question: "{{action}} {{placement}}가 되기 위한 최소 점수는?",
            riichiQuestion: "만약 {{player}}가 리치 선언을 한다면, {{action}} {{placement}}가 되기 위한 최소 점수는?",
            ron: "{{target}}가 론으로",
            tsumo: "쯔모로",
            han: "판",
            fu: "부",
            submit: "제출하기",
            wrong: "틀렸습니다! 그 점수로는 {{placement}}가 될 수 없습니다! 제출한 답변: ",
            tooMuch: "그 점수로 {{placement}}가 될 수 있지만 최소 점수가 아닙니다. 제출한 답변: ",
            correct: "정답입니다! {{placement}}가 될 수 있는 최소 점수입니다!",
            score: "{{han}}판 {{fu}}부",
            results: "결과:",
            you: "당신",
            error: {
                few: "오류: 점수가 부족합니다.",
                NaN: "오류: {{seat}}의 점수를 이해할 수 없습니다."
            }
        },
        analyzer: {
            instructions1: "사용법:",
            instructions2: "리플레이 URL을 텍스트 입력 란에 붙여넣으세요.",
            instructions3: '그리고, 아래에 생긴 링크를 우클릭하고 "다른 이름으로 저장" 또는 "링크를 다른 이름으로 저장"을 선택하여 저장하세요.',
            instructions4: '마지막으로 "찾아보기..." 를 클릭하여 저장한 파일을 업로드하세요.',
            instructions5: "다른 방법으로, mjlog 파일을 가지고 있다면, 파일 이름을 .zip으로 끝나도록 변경하세요.",
            instructions6: "그리고, 이름을 바꾼 zip 내부의 파일을 업로드하세요.",
            instructions7: "리플레이 XML 파일을 가져올 수 있는 프로그램이 있는 경우, 리플레이 XML 파일을 직접 업로드할 수 있습니다.",
            instructions8: "패효율 연습의 면책사항은 이곳에도 동일하게 적용됩니다.",
            instructions9: "안전도는 높을수록 좋습니다. 1은 가장 위험한 패고, 15는 가장 안전한 패입니다.",
            URLplaceholder: "리플레이 URL",
            invalidURL: "적합하지 않은 URL",
            downloadInstructions: "이 링크를 우클릭하고 다른 이름으로 저장을 선택하세요!",
            roundSelect: "국 선택",
            playerSelect: "작사 변경",
            previousTurn: "이전 순",
            nextTurn: "다음 순",
            nextIssue: "다음 문제점",
            turn: "{{round}}, {{turn}}순",
            discards: "내 버림패: {{symbols}} ({{tiles}})",
            calls: "내 후로: {{calls}}",
            callsSeparator: ", ",
            tenhouLinkText: "[천봉 유효패 분석기]",
            replayError: "이 리플레이를 저에게 보내주세요. 문제가 발생했습니다.",
            noName: "알 수 없음",
            startingHand: "당신의 시작 손패는 {{hand}}입니다. 텐파이까지 {{count}}개의 패가 필요합니다. 도라표시패는 {{dora}}입니다.",
            unknownAction: "저기요, 이 리플레이는 제가 고려하지 못한 요소가 포함되어 있네요. 이 리플레이를 저에게 보내주시면 추가하겠습니다. {{debugInfo}}",
            call: "당신을 {{tile}}을(를) 울어 {{meld}}을(를) 만들었습니다. ({{hand}})",
            callSameShanten: "이 후로는 샹텐 수에 영향을 주지 못했습니다.",
            ryuukyoku: "유국되었습니다.",
            playerRiichi: "당신은 리치를 선언했습니다. 분석을 끝냅니다.",
            otherRiichi: "작사 {{number}}이(가) 리치를 선언했습니다. ",
            fold: "당신은 아직 텐파이까지 {{shanten}}개의 타일이 필요합니다, 그러므로 베타오리를 해야합니다.",
            probablyFold: "당신은 이샹텐입니다. 베타오리를 고려하십시오.",
            win: "작사 {{number}}이(가) 화료했습니다.",
            kandora: "새로운 도라표시패는 {{tile}}입니다.",
            draw: "당신은 {{tile}}을(를) 쯔모했습니다. ({{hand}})",
            chosenSafety: "{{tile}}의 안전도는 {{rating}}입니다. ({{- explanation}}) ",
            correctSafety: "가장 안전한 타패였습니다.",
            bestSafety: "가장 안전한 패: {{tile}}, 안전도 {{rating}}. ({{- explanation}})",
            safetyExplanations: {
                zero: "이 메시지는 볼 수 없어야 합니다. 만약 보셨다면 저에게 알려주세요.",
                one: "스지가 아닌 4/5/6",
                two: "스지가 아닌 3/7",
                three: "스지가 아닌 2/8",
                four: "원찬스",
                five: "스지가 아닌 1/9",
                six: "첫번째 자패",
                seven: "스지 3/7",
                eight: "스지 2/8",
                nine: "스지 4/5/6",
                ten: "두번째 자패",
                eleven: "첫번째 스지 노두패",
                twelve: "두번째 스지 노두패",
                thirteen: "세번째 스지 노두패 / 세번째 자패",
                fourteen: "네번째 스지 노두패 / 네번째 자패",
                fifteen: "현물, 100% 안전"
            }
        },
        explorer: {
            warning: "주의: 손패를 불러오면 컴퓨터 성능과 손패의 복잡도에 따라 페이지가 약 5-10초 또는 그 이상 멈춘 것 처럼 보일 수 있습니다. 손패를 불러오면 샹텐수가 늘어나는 경우까지 포함하여 모든 타패의 경우에 대한 유효패와 향상 가능성을 보여줍니다. 기본적으로는 다른 경우보다 훨씬 안좋은 타패의 경우에는 표시하지 않지만, 아래의 버튼을 눌러 표시하도록 변경할 수 있습니다. 만약 유효패 정보만 필요하시다면 tenhou.net/2/ 로도 충분할겁니다.",
            shanten: "샹텐: 텐파이까지 남은 패의 갯수입니다.",
            ukeire: "유효패: 샹텐수를 줄일 수 있는 패입니다.",
            notableDiscards: "의미 있는 타패만 표시하기",
            allDiscards: "모든 타패를 표시하기",
            discardInfo: {
                discard: "{{tile}} 타패:",
                shanten: "샹텐: {{count}}",
                ukeire: "유효패: {{count}}개 ({{tiles}})",
                expand: "다음 샹텐의 유효패 표시",
                draw: "{{draw}} 쯔모, {{discard}} 타패: 유효패 수 {{count}}개",
                average: "평균: {{average}}개",
                upgrades: "유효패를 늘리는 패: {{count}}개 ({{tiles}})",
                expandUpgrades: "향상된 결과 표시"
            }
        },
        defense: {
            instructions: "가장 안전한 패를 타패하세요.",
            finalHands: "최종 손패:",
            hand: "{{player}}: {{hand}}",
            safetyRatings: "안전도",
            averagedSafetyRating: "다중 리치의 경우 안전도는 평균으로 계산되며, 평균이 가장 높은 패가 가장 안전한 패로 선택됩니다.",
            safetyRating: "{{rating}}: {{- explanation}}",
            riichiCount: "리치 수: ",
            minTurns: "리치가 선언되기 전의 최소 순: ",
            tilesInHand: "손패에 포함할 패 갯수: "
        },
        utils: {
            convertHeader: "손패 변환기",
            convertButtonLabel: "손패 변환",
            ascii: "ASCII:",
            emoji: "이모지:",
            stateHeader: "임의 대국 상태 생성기",
            playerLabel: "{{seat}}가 {{you}}",
            points: "점수:",
            discards: "버림패:",
            stateButtonLabel: "새 상태 생성",
            info: "{{round}} {{turn}}순 입니다. 당신은 {{seat}}가입니다.",
            dora: "도라표시패는 {{tile}}입니다."
        }
    }
}