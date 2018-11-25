export default {
	"status": 1,
	"type": "info",
	"data": {
		"gameId": 13,
		"gameName_en": "F3D",
		"gameName_cn": "福彩3D",
		"defaultMethodId": 136,
		"gameMethods": [
            {
			"id": 48,
			"pid": 0,
			"name_cn": "三星",
			"name_en": "housan",
			"children": [{
				"id": 55,
				"pid": 48,
				"name_cn": "直选",
				"name_en": "zhixuan",
				"children": [{
					"id": 136,
					"pid": 55,
					"series_way_id": 136,
					"name_cn": "复式",
					"name_en": "fushi",
					"price": 2,
					"bet_note": "从个、十、百位各选一个号码组成一注",
					"bonus_note": "从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。",
					"extra": [51],
					"extra_prize": ["1926.0000"],
					"prize": "1926.0000",
					"max_multiple": 51
				}, {
					"id": 123,
					"pid": 55,
					"series_way_id": 123,
					"name_cn": "单式",
					"name_en": "danshi",
					"price": 2,
					"bet_note": "手动输入号码，至少输入1个三位数号码组成一注",
					"bonus_note": "手动输入一个3位数号码组成一注，所选号码的百位、十位、个位与开奖号码相同且顺序一致，即为中奖。",
					"extra": [51],
					"extra_prize": ["1926.0000"],
					"prize": "1926.0000",
					"max_multiple": 51
				}, {
					"id": 139,
					"pid": 55,
					"series_way_id": 139,
					"name_cn": "直选和值",
					"name_en": "hezhi",
					"price": 2,
					"bet_note": "从0-27中任意选择1个或1个以上号码",
					"bonus_note": "所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。",
					"extra": [51],
					"extra_prize": ["1926.0000"],
					"prize": "1926.0000",
					"max_multiple": 51
				}]
			}, {
				"id": 56,
				"pid": 48,
				"name_cn": "组选",
				"name_en": "zuxuan",
				"children": [{
					"id": 131,
					"pid": 56,
					"series_way_id": 131,
					"name_cn": "组三",
					"name_en": "zusan",
					"price": 2,
					"bet_note": "从0-9中任意选择2个或2个以上号码",
					"bonus_note": "从0-9中选择2个数字组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。",
					"extra": [155],
					"extra_prize": ["642.0000"],
					"prize": "642.0000",
					"max_multiple": 155
				}, {
					"id": 124,
					"pid": 56,
					"series_way_id": 124,
					"name_cn": "组三单式",
					"name_en": "zusandanshi",
					"price": 2,
					"bet_note": "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同)",
					"bonus_note": "手动输入组三号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
					"extra": [155],
					"extra_prize": ["642.0000"],
					"prize": "642.0000",
					"max_multiple": 155
				}, {
					"id": 132,
					"pid": 56,
					"series_way_id": 132,
					"name_cn": "组六",
					"name_en": "zuliu",
					"price": 2,
					"bet_note": "从0-9中任意选择3个或3个以上号码。",
					"bonus_note": "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
					"extra": [311],
					"extra_prize": ["321.0000"],
					"prize": "321.0000",
					"max_multiple": 311
				}, {
					"id": 125,
					"pid": 56,
					"series_way_id": 125,
					"name_cn": "组六单式",
					"name_en": "zuliudanshi",
					"price": 2,
					"bet_note": "手动输入号码，至少输入 1 个三位数号码。(三个数字全不相同)",
					"bonus_note": "手动输入组六号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
					"extra": [311],
					"extra_prize": ["321.0000"],
					"prize": "321.0000",
					"max_multiple": 311
				}, {
					"id": 130,
					"pid": 56,
					"series_way_id": 130,
					"name_cn": "混合组选",
					"name_en": "hunhezuxuan",
					"price": 2,
					"bet_note": "手动输入号码，至少输入1个三位数号码。",
					"bonus_note": "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
					"extra": [311],
					"extra_prize": ["321.0000"],
					"prize": "642.0000",
					"max_multiple": 155
				}, {
					"id": 140,
					"pid": 56,
					"series_way_id": 140,
					"name_cn": "组选和值",
					"name_en": "hezhi",
					"price": 2,
					"bet_note": "从1-26中选择1个号码",
					"bonus_note": "所选数值等于开奖号码百位、十位、个位三个数字相加之和(不含豹子号)，即为中奖。",
					"extra": [311],
					"extra_prize": ["321.0000"],
					"prize": "642.0000",
					"max_multiple": 155
				}]
			}]
		}, {
			"id": 49,
			"pid": 0,
			"name_cn": "二星",
			"name_en": "erxing",
			"children": [{
				"id": 59,
				"pid": 49,
				"name_cn": "直选",
				"name_en": "zhixuan",
				"children": [{
					"id": 137,
					"pid": 59,
					"series_way_id": 137,
					"name_cn": "前二直选",
					"name_en": "qianerfushi",
					"price": 2,
					"bet_note": "从第一位、第二位中至少各选择1个号码",
					"bonus_note": "从0-9共10个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的3个号码中的前2个号码相同，且顺序一致，即中奖。",
					"extra": [519],
					"extra_prize": ["192.6000"],
					"prize": "192.6000",
					"max_multiple": 519
				}, {
					"id": 126,
					"pid": 59,
					"series_way_id": 126,
					"name_cn": "前二单式",
					"name_en": "qianerdanshi",
					"price": 2,
					"bet_note": "手动输入号码，至少输入1个两位数号码",
					"bonus_note": "手动输入一个2位数号码组成一注，所选号码的百位、十位与开奖号码相同，且顺序一致，即为中奖。",
					"extra": [519],
					"extra_prize": ["192.6000"],
					"prize": "192.6000",
					"max_multiple": 519
				}, {
					"id": 138,
					"pid": 59,
					"series_way_id": 138,
					"name_cn": "后二直选",
					"name_en": "houerfushi",
					"price": 2,
					"bet_note": "从十、个位各选一个号码组成一注",
					"bonus_note": "从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。",
					"extra": [519],
					"extra_prize": ["192.6000"],
					"prize": "192.6000",
					"max_multiple": 519
				}, {
					"id": 128,
					"pid": 59,
					"series_way_id": 128,
					"name_cn": "后二单式",
					"name_en": "houerdanshi",
					"price": 2,
					"bet_note": "手动输入号码，至少输入1个两位数号码",
					"bonus_note": "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。",
					"extra": [519],
					"extra_prize": ["192.6000"],
					"prize": "192.6000",
					"max_multiple": 519
				}]
			}, {
				"id": 60,
				"pid": 49,
				"name_cn": "组选",
				"name_en": "zuxuan",
				"children": [{
					"id": 135,
					"pid": 60,
					"series_way_id": 135,
					"name_cn": "后二复式",
					"name_en": "houerfushi",
					"price": 2,
					"bet_note": "从0-9中任意选择2个或2个以上号码。",
					"bonus_note": "从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限（不含对子号），即为中奖。",
					"extra": [1038],
					"extra_prize": ["96.3000"],
					"prize": "96.3000",
					"max_multiple": 1038
				}, {
					"id": 129,
					"pid": 60,
					"series_way_id": 129,
					"name_cn": "后二单式",
					"name_en": "houerdanshi",
					"price": 2,
					"bet_note": "手动输入号码，至少输入1个两位数号码",
					"bonus_note": "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限（不含对子号），即为中奖。",
					"extra": [1038],
					"extra_prize": ["96.3000"],
					"prize": "96.3000",
					"max_multiple": 1038
				}, {
					"id": 134,
					"pid": 60,
					"series_way_id": 134,
					"name_cn": "前二复式",
					"name_en": "qianerfushi",
					"price": 2,
					"bet_note": "从0-9中任意选择2个或2个以上号码",
					"bonus_note": "从0-9中共10个号码中选择2个号码，所选号码与当期顺序摇出的3个号码中的前2个号码相同，顺序不限，即为中奖。",
					"extra": [1038],
					"extra_prize": ["96.3000"],
					"prize": "96.3000",
					"max_multiple": 1038
				}, {
					"id": 127,
					"pid": 60,
					"series_way_id": 127,
					"name_cn": "前二单式",
					"name_en": "qianerdanshi",
					"price": 2,
					"bet_note": "手动输入号码，至少输入1个两位数号码组成一注",
					"bonus_note": "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的3个号码中的前2个号码相同，顺序不限，即为中奖",
					"extra": [1038],
					"extra_prize": ["96.3000"],
					"prize": "96.3000",
					"max_multiple": 1038
				}]
			}]
		}, {
			"id": 50,
			"pid": 0,
			"name_cn": "定位胆",
			"name_en": "yixing",
			"children": [{
				"id": 58,
				"pid": 50,
				"name_cn": "定位胆",
				"name_en": "dingweidan",
				"children": [{
					"id": 141,
					"pid": 58,
					"series_way_id": 141,
					"name_cn": "定位胆",
					"name_en": "fushi",
					"price": 2,
					"bet_note": "在百位，十位，个位任意位置上任意选择1个或1个以上号码",
					"bonus_note": "从百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。",
					"extra": [5192],
					"extra_prize": ["19.2600"],
					"prize": "19.2600",
					"max_multiple": 5192
				}]
			}]
		}, {
			"id": 51,
			"pid": 0,
			"name_cn": "不定位",
			"name_en": "budingwei",
			"children": [{
				"id": 57,
				"pid": 51,
				"name_cn": "不定位",
				"name_en": "sanxingbudingwei",
				"children": [{
					"id": 133,
					"pid": 57,
					"series_way_id": 133,
					"name_cn": "一码不定位",
					"name_en": "housanyimabudingwei",
					"price": 2,
					"bet_note": "从0-9中任意选择1个以上号码",
					"bonus_note": "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。",
					"extra": [14070],
					"extra_prize": ["7.1070"],
					"prize": "7.1070",
					"max_multiple": 14070
				}, {
					"id": 162,
					"pid": 57,
					"series_way_id": 162,
					"name_cn": "二码不定位",
					"name_en": "housanermabudingwei",
					"price": 2,
					"bet_note": "从0-9中任意选择2个以上号码",
					"bonus_note": "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的2个号码，即为中奖。",
					"extra": [2803],
					"extra_prize": ["35.6666"],
					"prize": "35.6666",
					"max_multiple": 2803
				}]
			}]
		}, {
			"id": 65,
			"pid": 0,
			"name_cn": "大小单双",
			"name_en": "daxiaodanshuang",
			"children": [{
				"id": 66,
				"pid": 65,
				"name_cn": "大小单双",
				"name_en": "daxiaodanshuang",
				"children": [{
					"id": 175,
					"pid": 66,
					"series_way_id": 175,
					"name_cn": "前二大小单双",
					"name_en": "qianerdaxiaodanshuang",
					"price": 2,
					"bet_note": "从百位、十位中的“大、小、单、双”中至少各选一个组成一注",
					"bonus_note": "对百位和十位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
					"extra": [12980],
					"extra_prize": ["7.7040"],
					"prize": "7.7040",
					"max_multiple": 12980
				}, {
					"id": 176,
					"pid": 66,
					"series_way_id": 176,
					"name_cn": "后二大小单双",
					"name_en": "houerdaxiaodanshuang",
					"price": 2,
					"bet_note": "从十位、个位中的“大、小、单、双”中至少各选一个组成一注",
					"bonus_note": "对十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
					"extra": [12980],
					"extra_prize": ["7.7040"],
					"prize": "7.7040",
					"max_multiple": 12980
				}]
			}]
		}],
		"isAgent": 1,
		"historyNumbers": [
            {
			"number": "2018298",
			"code": "111",
			"time": "2018-11-01 20:20:00"
		}, {
			"number": "2018297",
			"code": "289",
			"time": "2018-10-31 20:20:00"
		}, {
			"number": "2018296",
			"code": "881",
			"time": "2018-10-30 20:20:00"
		}, {
			"number": "2018295",
			"code": "513",
			"time": "2018-10-29 20:20:00"
		}, {
			"number": "2018294",
			"code": "537",
			"time": "2018-10-28 20:20:00"
		}, {
			"number": "2018293",
			"code": "895",
			"time": "2018-10-27 20:20:00"
		}, {
			"number": "2018292",
			"code": "922",
			"time": "2018-10-26 20:20:00"
		}, {
			"number": "2018291",
			"code": "935",
			"time": "2018-10-25 20:20:00"
		}, {
			"number": "2018290",
			"code": "036",
			"time": "2018-10-24 20:20:00"
		}, {
			"number": "2018289",
			"code": "954",
			"time": "2018-10-23 20:20:00"
		}, {
			"number": "2018288",
			"code": "344",
			"time": "2018-10-22 20:20:00"
		}, {
			"number": "2018287",
			"code": "387",
			"time": "2018-10-21 20:20:00"
		}, {
			"number": "2018286",
			"code": "691",
			"time": "2018-10-20 20:20:00"
		}, {
			"number": "2018285",
			"code": "982",
			"time": "2018-10-19 20:20:00"
		}, {
			"number": "2018284",
			"code": "634",
			"time": "2018-10-18 20:20:00"
		}, {
			"number": "2018283",
			"code": "558",
			"time": "2018-10-17 20:20:00"
		}, {
			"number": "2018282",
			"code": "617",
			"time": "2018-10-16 20:20:00"
		}, {
			"number": "2018281",
			"code": "947",
			"time": "2018-10-15 20:20:00"
		}, {
			"number": "2018280",
			"code": "669",
			"time": "2018-10-14 20:20:00"
		}, {
			"number": "2018279",
			"code": "375",
			"time": "2018-10-13 20:20:00"
		}, {
			"number": "2018278",
			"code": "563",
			"time": "2018-10-12 20:20:00"
		}, {
			"number": "2018277",
			"code": "709",
			"time": "2018-10-11 20:20:00"
		}, {
			"number": "2018276",
			"code": "261",
			"time": "2018-10-10 20:20:00"
		}, {
			"number": "2018275",
			"code": "264",
			"time": "2018-10-09 20:20:00"
		}, {
			"number": "2018274",
			"code": "557",
			"time": "2018-10-08 20:20:00"
		}, {
			"number": "2018273",
			"code": "457",
			"time": "2018-10-07 20:20:00"
		}, {
			"number": "2018272",
			"code": "085",
			"time": "2018-10-06 20:20:00"
		}, {
			"number": "2018271",
			"code": "536",
			"time": "2018-10-05 20:20:00"
		}, {
			"number": "2018270",
			"code": "349",
			"time": "2018-10-04 20:20:00"
		}, {
			"number": "2018269",
			"code": "659",
			"time": "2018-10-03 20:20:00"
		}, {
			"number": "2018268",
			"code": "728",
			"time": "2018-10-02 20:20:00"
		}, {
			"number": "2018267",
			"code": "001",
			"time": "2018-10-01 20:20:00"
		}, {
			"number": "2018266",
			"code": "621",
			"time": "2018-09-30 20:20:00"
		}, {
			"number": "2018265",
			"code": "648",
			"time": "2018-09-29 20:20:00"
		}, {
			"number": "2018264",
			"code": "004",
			"time": "2018-09-28 20:20:00"
		}, {
			"number": "2018263",
			"code": "813",
			"time": "2018-09-27 20:20:00"
		}, {
			"number": "2018262",
			"code": "532",
			"time": "2018-09-26 20:20:00"
		}, {
			"number": "2018261",
			"code": "809",
			"time": "2018-09-25 20:20:00"
		}, {
			"number": "2018260",
			"code": "474",
			"time": "2018-09-24 20:20:00"
		}, {
			"number": "2018259",
			"code": "010",
			"time": "2018-09-23 20:20:00"
		}, {
			"number": "2018258",
			"code": "300",
			"time": "2018-09-22 20:20:00"
		}, {
			"number": "2018257",
			"code": "094",
			"time": "2018-09-21 20:20:00"
		}, {
			"number": "2018256",
			"code": "087",
			"time": "2018-09-20 20:20:00"
		}, {
			"number": "2018255",
			"code": "289",
			"time": "2018-09-19 20:20:00"
		}, {
			"number": "2018254",
			"code": "657",
			"time": "2018-09-18 20:20:00"
		}, {
			"number": "2018253",
			"code": "098",
			"time": "2018-09-17 20:20:00"
		}, {
			"number": "2018252",
			"code": "067",
			"time": "2018-09-16 20:20:00"
		}, {
			"number": "2018251",
			"code": "983",
			"time": "2018-09-15 20:20:00"
		}, {
			"number": "2018250",
			"code": "551",
			"time": "2018-09-14 20:20:00"
		}, {
			"number": "2018249",
			"code": "636",
			"time": "2018-09-13 20:20:00"
		}, {
			"number": "2018248",
			"code": "251",
			"time": "2018-09-12 20:20:00"
		}, {
			"number": "2018247",
			"code": "626",
			"time": "2018-09-11 20:20:00"
		}, {
			"number": "2018246",
			"code": "603",
			"time": "2018-09-10 20:20:00"
		}, {
			"number": "2018245",
			"code": "351",
			"time": "2018-09-09 20:20:00"
		}, {
			"number": "2018244",
			"code": "364",
			"time": "2018-09-08 20:20:00"
		}, {
			"number": "2018243",
			"code": "639",
			"time": "2018-09-07 20:20:00"
		}, {
			"number": "2018242",
			"code": "623",
			"time": "2018-09-06 20:20:00"
		}, {
			"number": "2018241",
			"code": "215",
			"time": "2018-09-05 20:20:00"
		}, {
			"number": "2018240",
			"code": "506",
			"time": "2018-09-04 20:20:00"
		}, {
			"number": "2018239",
			"code": "749",
			"time": "2018-09-03 20:20:00"
		}],
		"currentTime": 1541133634,
		"currentNumber": "2018299",
		"gameNumbers": [
            {
			"number": "2018299",
			"time": "2018-11-02 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018300",
			"time": "2018-11-03 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018301",
			"time": "2018-11-04 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018302",
			"time": "2018-11-05 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018303",
			"time": "2018-11-06 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018304",
			"time": "2018-11-07 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018305",
			"time": "2018-11-08 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018306",
			"time": "2018-11-09 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018307",
			"time": "2018-11-10 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018308",
			"time": "2018-11-11 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018309",
			"time": "2018-11-12 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018310",
			"time": "2018-11-13 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018311",
			"time": "2018-11-14 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018312",
			"time": "2018-11-15 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018313",
			"time": "2018-11-16 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018314",
			"time": "2018-11-17 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018315",
			"time": "2018-11-18 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018316",
			"time": "2018-11-19 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018317",
			"time": "2018-11-20 20:20:00",
			"wn_number": ""
		}, {
			"number": "2018318",
			"time": "2018-11-21 20:20:00",
			"wn_number": ""
		}],
		"traceMaxTimes": 20,
		"currentNumberTime": 1541161200,
		"lastNumber": "2018298",
		"lotteryBalls": "111"
	}
}