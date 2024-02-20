const i18nCfg = {
    onLocaleChange: (locale) => {
        localStorage.setItem('locale', locale);
    }, locale: (() => {
        const ls_locale = localStorage.getItem('locale');
        if (ls_locale !== null) return ls_locale;
        const default_locale = (() => {
            switch (navigator.language) {
                case 'zh-CN':
                case 'zh-Hans':
                    return 'zhs';
                case 'zh-Hant':
                case 'zh-TW':
                    return 'zht';
                case 'zh-HK':
                    return 'zht';
                default:
                    return 'en';
            }
        })();
        localStorage.setItem('locale', default_locale);
        return default_locale;
    })(),
    fallbackLocale: 'en',
    messages: {
        zhs: {
            locale_name: '简体中文',
            ui: {
                name: "名称",
                damage: "伤害",
                targets: "目标",
                actions: "技能",
                hit: "命中",
                min: "最小值",
                max: "最大值",
                damage_avg: "平均伤害",
                dps_in_minute: "dps/分",
                damage_in_minute: "伤害/分",
                detail: "详情",
                dps: "dps",
            },
            game: {
                actions: {
                    common: {
                        link: "Link",
                        lb: "奥义",
                        bonus: "追击",
                    },
                    "7b5934ad": {//伊欧
                        "100": "x",
                        "110": "(x)x",
                        "120": "(xx)x",
                        "210": "星梦秒蓄力(y)",
                        "211": "一蓄",
                        "212": "二蓄",
                        "213": "三蓄",
                        "214": "四蓄",
                        "300": "空中x",
                        "301": "空中(x)x",
                        "302": "空中(xx)x",
                        "400": "跳跃x",
                        "410": "跳跃y",
                        "3000": "火焰",
                        "2000": "寒冰",
                        "4000": "花耀七闪",
                        "8203": "雷霆",
                    },
                    "2b4aa114": { // 夏洛特
                        "100": "X",
                        "101": "（X）X",
                        "102": "（XX）X",
                        "103": "（XXX）X",
                        "104": "循环X#104",
                        "105": "循环X#105",
                        "106": "循环X#106",
                        "107": "循环X#107",
                        "110": "收招Y",
                        "120": "收招YX",
                        "130": "收招YY",
                        "200": "裸Y",
                        "201": "裸YX",
                        "202": "裸YY",
                        "300": "空中连击1",
                        "301": "空中连击2",
                        "302": "空中连击3",
                        "400": "上挑攻击",
                        "410": "下落攻击（空中Y）",
                        "1100": "耀眼猛攻",
                        "1200": "跳跃反击",
                        "1600": "卢米埃之剑（连斩）",
                        "1610": "卢米埃之剑（收招）",
                        "1700": "神圣阶梯",
                    },
                    "f96a90c2": {// 巴恩
                        "100": "X",
                        "101": "（X）X",
                        "102": "（XX）X",
                        "103": "（XXX）Y",
                        "104": "收招",
                        "110": "（X）Y",
                        "111": "（XY）Y",
                        "120": "（XX）Y",
                        "121": "（XXY）Y",
                        "200": "Y1",
                        "201": "Y2",
                        "202": "Y3",
                        "203": "Y4",
                        "204": "Y5",
                        "300": "（空中）X1",
                        "301": "（空中）X2",
                        "302": "（空中）X3",
                        "400": "上挑攻击",
                        "410": "（空中）Y",
                        "1100": "裂空连斩",
                        "1300": "巨力重击",
                        "1400": "英勇打击",
                        "1600": "活力灭击",
                    }
                },
                actors: {
                    "9498420d": "姬塔",
                    "26a4848a": "古兰",
                    "c3155079": "赛达",
                    "34d4fd8f": "卡塔莉娜",
                    "f8d73d33": "拉卡姆",
                    "7b5934ad": "伊欧",
                    "443d46bb": "欧根",
                    "a9d6569e": "萝赛塔",
                    "2b4aa114": "夏洛特",
                    "bcc238de": "冈达葛萨",
                    "fba6615d": "菲莉",
                    "601aa977": "娜露梅",
                    "63a7c3f0": "兰斯洛特",
                    "f96a90c2": "巴恩",
                    "28ac1108": "珀西瓦尔",
                    "94e2514e": "齐格飞",
                    "6fdd6932": "卡莉奥丝特罗",
                    "c97f3365": "尤达哈拉",
                    "d16cfbde": "巴萨拉卡",
                    "8056abcd": "伊德",
                }
            },
        },
        zht: {
            locale_name: '繁體中文',
            ui: {
                name: "名稱",
                damage: "傷害",
                targets: "目標",
                actions: "技能",
                hit: "命中",
                min: "最小值",
                max: "最大值",
                damage_avg: "平均傷害",
                dps_in_minute: "dps/分",
                damage_in_minute: "傷害/分",
                detail: "詳情",
                dps: "dps",
            },
            game: {
                actions: {
                    common: {
                        link: "Link",
                        lb: "奧義",
                        bonus: "追擊",
                    },
                    "2b4aa114": { // 夏綠蒂
                        "100": "X",
                        "101": "（X）X",
                        "102": "（XX）X",
                        "103": "（XXX）X",
                        "104": "循環X#104",
                        "105": "循環X#105",
                        "106": "循環X#106",
                        "107": "循環X#107",
                        "110": "收招Y",
                        "120": "收招YX",
                        "130": "收招YY",
                        "200": "裸Y",
                        "201": "裸YX",
                        "202": "裸YY",
                        "300": "空中連擊1",
                        "301": "空中連擊2",
                        "302": "空中連擊3",
                        "400": "上挑攻擊",
                        "410": "下落攻擊（空中Y）",
                        "1100": "耀眼猛攻",
                        "1200": "跳躍反擊",
                        "1600": "盧米埃之劍（連斬）",
                        "1610": "盧米埃之劍（收招）",
                        "1700": "神聖階梯",
                    },
                    "f96a90c2": {// 范恩
                        "100": "X",
                        "101": "（X）X",
                        "102": "（XX）X",
                        "103": "（XXX）Y",
                        "104": "收招",
                        "110": "（X）Y",
                        "111": "（XY）Y",
                        "120": "（XX）Y",
                        "121": "（XXY）Y",
                        "200": "Y1",
                        "201": "Y2",
                        "202": "Y3",
                        "203": "Y4",
                        "204": "Y5",
                        "300": "（空中）X1",
                        "301": "（空中）X2",
                        "302": "（空中）X3",
                        "400": "上挑攻擊",
                        "410": "（空中）Y",
                        "1100": "裂空連斬",
                        "1300": "巨力重擊",
                        "1400": "英勇打擊",
                        "1600": "活力滅擊",
                    },
                    "d16cfbde": {//巴薩拉加
                        "100": "X",
                        "110": "（X）X",
                        "112": "（X）蓄Y",
                        "113": "（X）Y",
                        "120": "（XX）X",
                        "121": "（XX）Y",
                        "130": "（XXX）Y",
                        "200": "Y",
                        "251": "（XXY）Y",
                        "252": "（XXXY）Y",
                        "280": "（X 蓄Y）蓄Y",
                        "281": "（XY）Y",
                        "1000": "恐懼營集",
                        "1200": "大鐮格羅諾斯",
                        "1600": "月食",
                    },
                    "94e2514e": { //齊格菲
                        "100": "X",
                        "101": "（X）X",
                        "102": "（XX）X",
                        "103": "（XXX）X",
                        "104": "（XXXX）X",
                        "111": "（X）精準X",
                        "112": "（X 精準X）精準X",
                        "113": "（X 精準X x2）精準X",
                        "122": "（X 精準X）X",
                        "123": "（X 精準X x2）X",
                        "124": "（X 精準X x3）X",
                        "150": "（X 精準X x3）精準X",
                        "162": "（XX）精準X",
                        "163": "（XXX）精準X",
                        "164": "（XXXX）精準X",
                        "170": "精準複合技（登龍斬）",
                        "200": "Y",
                        "201": "（X 精準X）Y",
                        "202": "（X 精準X x2）Y",
                        "203": "（X 精準X x3）Y",
                        "1000": "統馭之刃",
                        "1300": "躡龍破縛",
                    },
                    "601aa977": { //娜魯梅亞
                        "1": "鏡花水月",
                        "5": "泡沫夢幻",
                        "2": "剎那",
                        "100": "藍X",
                        "101": "（藍X）X",
                        "102": "（藍X x2）X",
                        "110": "（藍X x3）X",
                        "111": "（藍X x4）X",
                        "112": "（藍X x5）X",
                        "113": "（藍X x6）X",
                        "114": "（藍X x7）X",
                        "120": "（藍X x8）X",
                        "200": "Y（切紅刀）",
                        "1000": "（藍刀終擊）切紅刀",
                        "1100": "紅X",
                        "1103": "（紅X）X",
                        "1106": "（紅X x2）X",
                        "1108": "（紅X x3）X",
                        "1109": "藍切紅蓄力斬收刀",
                        "1150": "紅蓄X",
                        "1200": "Y（切藍刀）",
                        "2000": "（紅蓄X）Y",
                    },
                },
                actors: {
                    "9498420d": "吉塔",
                    "26a4848a": "葛蘭",
                    "c3155079": "瑟塔",
                    "34d4fd8f": "卡塔莉娜",
                    "f8d73d33": "拉卡姆",
                    "7b5934ad": "伊歐",
                    "443d46bb": "尤金",
                    "a9d6569e": "蘿賽塔",
                    "2b4aa114": "夏綠蒂",
                    "bcc238de": "剛特克澤",
                    "fba6615d": "菲莉",
                    "601aa977": "娜魯梅亞",
                    "63a7c3f0": "蘭斯洛特",
                    "f96a90c2": "范恩",
                    "28ac1108": "帕西瓦爾",
                    "94e2514e": "齊格菲",
                    "6fdd6932": "卡莉歐斯托蘿",
                    "c97f3365": "尤達爾拉哈",
                    "d16cfbde": "巴薩拉加",
                    "8056abcd": "伊度",
                }
            },
        },
        en: {
            locale_name: 'en',
            ui: {
                name: "name",
                damage: "damage",
                targets: "targets",
                actions: "actions",
                hit: "hit",
                min: "min",
                max: "max",
                damage_avg: "damage_avg",
                dps_in_minute: "dps_in_minute",
                damage_in_minute: "damage_in_minute",
                detail: "detail",
                dps: "dps",
            },
            game: {
                "34d4fd8f": { // Katalina
                    "100": "X",
                    "101": "（X）X",
                    "102": "（XX）X",
                    "103": "（XXX）X-X Rapid Input",
                    "104": " (XXX X~X) X",
                    "110": "（X）Y",
                    "120": "（XX）Y",
                    "130": " (XXX) Y",
                    "140": " (XXXX) Y",
                    "200": "Y",
                    "201": "(Y) Y",
                    "202": "(YY) Y",
                    "245": "(Ares) Y1",
                    "250": "(Ares) Y2",
                    "252": "(Ares) Y3",
                    "253": "(Ares) Y4",
                    "254": "(Ares) Y5",
                    "255": "(Ares) Y6",
                    "259": "(Ares) Y7",
                    "300": "(jump)X1",
                    "301": "(jump)X2",
                    "302": "(jump)X3",
                    "303": "(jump)(XXX) Y",
                    "400": "upward attack",
                    "410": "(jump)Y",
                    "1100": "Enchanted Lands",
                    "1200": "Winter's Rain",
                    "1400": "Sacred Winds",
                    "1500": "Azure Sword",
                    "1700": "Frost Blade",
                },
                "f96a90c2": { // Vane
                    "100": "X",
                    "101": "（X）X",
                    "102": "（XX）X",
                    "103": "（XXX）Y",
                    "104": "Y(derive)",
                    "110": "（X）Y",
                    "111": "（XY）Y",
                    "120": "（XX）Y",
                    "121": "（XXY）Y",
                    "200": "Y1",
                    "201": "Y2",
                    "202": "Y3",
                    "203": "Y4",
                    "204": "Y5",
                    "300": "(jump)X1",
                    "301": "(jump)X2",
                    "302": "(jump)X3",
                    "400": "upward attack",
                    "410": "(jump)Y",
                },
                actors: {
                    "9498420d": "Zeta",
                    "26a4848a": "Gran",
                    "c3155079": "Djeeta",
                    "34d4fd8f": "Katalina",
                    "f8d73d33": "Rackam",
                    "7b5934ad": "Io",
                    "443d46bb": "Eugen",
                    "a9d6569e": "Rosetta",
                    "2b4aa114": "Charlotta",
                    "bcc238de": "Ghandagoza",
                    "fba6615d": "Ferry",
                    "601aa977": "Narmaya",
                    "63a7c3f0": "Lancelot",
                    "f96a90c2": "Vane",
                    "28ac1108": "Percival",
                    "94e2514e": "Siegfried",
                    "6fdd6932": "Cagliostro",
                    "c97f3365": "Yodarha",
                    "d16cfbde": "Vaseraga",
                    "8056abcd": "Id",
                }
            }
        }
    }
};
