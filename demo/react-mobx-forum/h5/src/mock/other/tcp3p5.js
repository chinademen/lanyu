export default {
	"statue": 1,
	"type": "info",
	"data": {
		"gameId": 14,
		"gameName_en": "PLW",
		"gameName_cn": "排列3\/5",
		"defaultMethodId": 189,
		"gameMethods": [
            {
			"id": 67,
			"pid": 0,
			"name_cn": "排三",
			"name_en": "qiansan",
			"children": [{
				"id": 72,
				"pid": 67,
				"name_cn": "直选",
				"name_en": "zhixuan",
				"children": [{
					"id": 189,
					"pid": 72,
					"series_way_id": 189,
					"name_cn": "直选复式",
					"name_en": "fushi",
					"price": 2,
					"bet_note": "从万、千、百位各选一个号码组成一注",
					"bonus_note": "从万位、千位、百位中选择一个3位数号码组成一注，所选号码与开奖号码前3位相同，且顺序一致，即为中奖。",
					"extra": [51],
					"extra_prize": ["1926.0000"],
					"prize": "1926.0000",
					"max_multiple": 51
				}, {
					"id": 177,
					"pid": 72,
					"series_way_id": 177,
					"name_cn": "直选单式",
					"name_en": "danshi",
					"price": 2,
					"bet_note": "手动输入号码，至少输入1个三位数号码组成一注",
					"bonus_note": "手动输入一个3位数号码组成一注，所选号码的万位、千位、百位与开奖号码相同且顺序一致，即为中奖。",
					"extra": [51],
					"extra_prize": ["1926.0000"],
					"prize": "1926.0000",
					"max_multiple": 51
				}, {
					"id": 192,
					"pid": 72,
					"series_way_id": 192,
					"name_cn": "直选和值",
					"name_en": "hezhi",
					"price": 2,
					"bet_note": "从0-27中任意选择1个或1个以上号码",
					"bonus_note": "所选数值等于开奖号码的万位、千位、百位三个数字相加之和，即为中奖。",
					"extra": [51],
					"extra_prize": ["1926.0000"],
					"prize": "1926.0000",
					"max_multiple": 51
				}]
			}, {
				"id": 73,
				"pid": 67,
				"name_cn": "组选",
				"name_en": "zuxuan",
				"children": [{
					"id": 184,
					"pid": 73,
					"series_way_id": 184,
					"name_cn": "组三复式",
					"name_en": "zusan",
					"price": 2,
					"bet_note": "从0-9中任意选择2个或2个以上号码",
					"bonus_note": "从0-9中选择2个数字组成两注，所选号码与开奖号码的万位、千位、百位相同，且顺序不限，即为中奖。",
					"extra": [155],
					"extra_prize": ["642.0000"],
					"prize": "642.0000",
					"max_multiple": 155
				}, {
					"id": 178,
					"pid": 73,
					"series_way_id": 178,
					"name_cn": "组三单式",
					"name_en": "zusandanshi",
					"price": 2,
					"bet_note": "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同)",
					"bonus_note": "手动输入组三号码，3个数字为一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
					"extra": [155],
					"extra_prize": ["642.0000"],
					"prize": "642.0000",
					"max_multiple": 155
				}, {
					"id": 185,
					"pid": 73,
					"series_way_id": 185,
					"name_cn": "组六复式",
					"name_en": "zuliu",
					"price": 2,
					"bet_note": "从0-9中任意选择3个或3个以上号码。",
					"bonus_note": "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
					"extra": [311],
					"extra_prize": ["321.0000"],
					"prize": "321.0000",
					"max_multiple": 311
				}, {
					"id": 179,
					"pid": 73,
					"series_way_id": 179,
					"name_cn": "组六单式",
					"name_en": "zuliudanshi",
					"price": 2,
					"bet_note": "手动输入号码，至少输入 1 个三位数号码。",
					"bonus_note": "手动输入组六号码，3个数字为一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
					"extra": [311],
					"extra_prize": ["321.0000"],
					"prize": "321.0000",
					"max_multiple": 311
				}, {
					"id": 195,
					"pid": 73,
					"series_way_id": 195,
					"name_cn": "混合组选",
					"name_en": "hunhezuxuan",
					"price": 2,
					"bet_note": "手动输入号码，至少输入1个三位数号码。",
					"bonus_note": "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
					"extra": [311],
					"extra_prize": ["321.0000"],
					"prize": "642.0000",
					"max_multiple": 155
				}, {
					"id": 193,
					"pid": 73,
					"series_way_id": 193,
					"name_cn": "组选和值",
					"name_en": "hezhi",
					"price": 2,
					"bet_note": "从1-26中选择1个号码",
					"bonus_note": "所选数值等于开奖号码万位、千位、百位三个数字相加之和(不含豹子号)，即为中奖。",
					"extra": [311],
					"extra_prize": ["321.0000"],
					"prize": "642.0000",
					"max_multiple": 155
				}]
			}]
		}, {
			"id": 68,
			"pid": 0,
			"name_cn": "二星",
			"name_en": "erxing",
			"children": [{
				"id": 74,
				"pid": 68,
				"name_cn": "直选",
				"name_en": "zhixuan",
				"children": [{
					"id": 190,
					"pid": 74,
					"series_way_id": 190,
					"name_cn": "（前二）排五直选复式",
					"name_en": "qianerfushi",
					"price": 2,
					"bet_note": "从第一位、第二位中至少各选择1个号码",
					"bonus_note": "从0-9共10个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即中奖。",
					"extra": [519],
					"extra_prize": ["192.6000"],
					"prize": "192.6000",
					"max_multiple": 519
				}, {
					"id": 180,
					"pid": 74,
					"series_way_id": 180,
					"name_cn": "（前二）排五直选单式",
					"name_en": "qianerdanshi",
					"price": 2,
					"bet_note": "手动输入号码，至少输入1个两位数号码",
					"bonus_note": "手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，且顺序一致，即为中奖。",
					"extra": [519],
					"extra_prize": ["192.6000"],
					"prize": "192.6000",
					"max_multiple": 519
				}, {
					"id": 191,
					"pid": 74,
					"series_way_id": 191,
					"name_cn": "（后二）排五直选复式",
					"name_en": "houerfushi",
					"price": 2,
					"bet_note": "从十、个位各选一个号码组成一注",
					"bonus_note": "从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。",
					"extra": [519],
					"extra_prize": ["192.6000"],
					"prize": "192.6000",
					"max_multiple": 519
				}, {
					"id": 182,
					"pid": 74,
					"series_way_id": 182,
					"name_cn": "（后二）排五直选单式",
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
				"id": 75,
				"pid": 68,
				"name_cn": "组选",
				"name_en": "zuxuan",
				"children": [{
					"id": 187,
					"pid": 75,
					"series_way_id": 187,
					"name_cn": "（前二）排五组选复式",
					"name_en": "qianerfushi",
					"price": 2,
					"bet_note": "从0-9中任意选择2个或2个以上号码",
					"bonus_note": "从0-9中共10个号码中选择2个号码，所选号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。",
					"extra": [1038],
					"extra_prize": ["96.3000"],
					"prize": "96.3000",
					"max_multiple": 1038
				}, {
					"id": 181,
					"pid": 75,
					"series_way_id": 181,
					"name_cn": "（前二）排五组选单式",
					"name_en": "qianerdanshi",
					"price": 2,
					"bet_note": "手动输入号码，至少输入1个两位数号码组成一注",
					"bonus_note": "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。",
					"extra": [1038],
					"extra_prize": ["96.3000"],
					"prize": "96.3000",
					"max_multiple": 1038
				}, {
					"id": 188,
					"pid": 75,
					"series_way_id": 188,
					"name_cn": "（后二）排五组选复式",
					"name_en": "houerfushi",
					"price": 2,
					"bet_note": "从0-9中任意选择2个或2个以上号码。",
					"bonus_note": "从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限（不含对子号），即为中奖。",
					"extra": [1038],
					"extra_prize": ["96.3000"],
					"prize": "96.3000",
					"max_multiple": 1038
				}, {
					"id": 183,
					"pid": 75,
					"series_way_id": 183,
					"name_cn": "（后二）排五组选单式",
					"name_en": "houerdanshi",
					"price": 2,
					"bet_note": "手动输入号码，至少输入1个两位数号码",
					"bonus_note": "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限（不含对子号），即为中奖。",
					"extra": [1038],
					"extra_prize": ["96.3000"],
					"prize": "96.3000",
					"max_multiple": 1038
				}]
			}]
		}, {
			"id": 69,
			"pid": 0,
			"name_cn": "定位胆",
			"name_en": "yixing",
			"children": [{
				"id": 76,
				"pid": 69,
				"name_cn": "定位胆",
				"name_en": "dingweidan",
				"children": [{
					"id": 194,
					"pid": 76,
					"series_way_id": 194,
					"name_cn": "定位胆",
					"name_en": "fushi",
					"price": 2,
					"bet_note": "在万位，千位，百位，十位，个位任意位置上任意选择1个或1个以上号码",
					"bonus_note": "从万位，千位，百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。",
					"extra": [5192],
					"extra_prize": ["19.2600"],
					"prize": "19.2600",
					"max_multiple": 5192
				}]
			}]
		}, {
			"id": 70,
			"pid": 0,
			"name_cn": "不定位",
			"name_en": "budingwei",
			"children": [{
				"id": 77,
				"pid": 70,
				"name_cn": "不定位",
				"name_en": "sanxingbudingwei",
				"children": [{
					"id": 186,
					"pid": 77,
					"series_way_id": 186,
					"name_cn": "前三一码不定位",
					"name_en": "qiansanyimabudingwei",
					"price": 2,
					"bet_note": "从0-9中任意选择1个以上号码",
					"bonus_note": "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的万位、千位、百位中包含所选号码，即为中奖。",
					"extra": [14070],
					"extra_prize": ["7.1070"],
					"prize": "7.1070",
					"max_multiple": 14070
				}, {
					"id": 196,
					"pid": 77,
					"series_way_id": 196,
					"name_cn": "前三二码不定位",
					"name_en": "qiansanermabudingwei",
					"price": 2,
					"bet_note": "从0-9中任意选择2个以上号码",
					"bonus_note": "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位中同时包含所选的2个号码，即为中奖。",
					"extra": [2803],
					"extra_prize": ["35.6666"],
					"prize": "35.6666",
					"max_multiple": 2803
				}]
			}]
		}, {
			"id": 71,
			"pid": 0,
			"name_cn": "大小单双",
			"name_en": "daxiaodanshuang",
			"children": [{
				"id": 78,
				"pid": 71,
				"name_cn": "大小单双",
				"name_en": "daxiaodanshuang",
				"children": [{
					"id": 197,
					"pid": 78,
					"series_way_id": 197,
					"name_cn": "前二大小单双",
					"name_en": "qianerdaxiaodanshuang",
					"price": 2,
					"bet_note": "从万位、千位中的“大、小、单、双”中至少各选一个组成一注",
					"bonus_note": "对万位和千位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
					"extra": [12980],
					"extra_prize": ["7.7040"],
					"prize": "7.7040",
					"max_multiple": 12980
				}, {
					"id": 198,
					"pid": 78,
					"series_way_id": 198,
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
			"code": "25323",
			"time": "2018-11-01 20:00:00"
		}, {
			"number": "2018297",
			"code": "46171",
			"time": "2018-10-31 20:00:00"
		}, {
			"number": "2018296",
			"code": "03076",
			"time": "2018-10-30 20:00:00"
		}, {
			"number": "2018295",
			"code": "16807",
			"time": "2018-10-29 20:00:00"
		}, {
			"number": "2018294",
			"code": "83208",
			"time": "2018-10-28 20:00:00"
		}, {
			"number": "2018293",
			"code": "15125",
			"time": "2018-10-27 20:00:00"
		}, {
			"number": "2018292",
			"code": "45932",
			"time": "2018-10-26 20:00:00"
		}, {
			"number": "2018291",
			"code": "63986",
			"time": "2018-10-25 20:00:00"
		}, {
			"number": "2018290",
			"code": "53532",
			"time": "2018-10-24 20:00:00"
		}, {
			"number": "2018289",
			"code": "91301",
			"time": "2018-10-23 20:00:00"
		}, {
			"number": "2018288",
			"code": "27447",
			"time": "2018-10-22 20:00:00"
		}, {
			"number": "2018287",
			"code": "05183",
			"time": "2018-10-21 20:00:00"
		}, {
			"number": "2018286",
			"code": "93135",
			"time": "2018-10-20 20:00:00"
		}, {
			"number": "2018285",
			"code": "08023",
			"time": "2018-10-19 20:00:00"
		}, {
			"number": "2018284",
			"code": "85824",
			"time": "2018-10-18 20:00:00"
		}, {
			"number": "2018283",
			"code": "89986",
			"time": "2018-10-17 20:00:00"
		}, {
			"number": "2018282",
			"code": "78044",
			"time": "2018-10-16 20:00:00"
		}, {
			"number": "2018281",
			"code": "10608",
			"time": "2018-10-15 20:00:00"
		}, {
			"number": "2018280",
			"code": "95129",
			"time": "2018-10-14 20:00:00"
		}, {
			"number": "2018279",
			"code": "64565",
			"time": "2018-10-13 20:00:00"
		}, {
			"number": "2018278",
			"code": "81288",
			"time": "2018-10-12 20:00:00"
		}, {
			"number": "2018277",
			"code": "02527",
			"time": "2018-10-11 20:00:00"
		}, {
			"number": "2018276",
			"code": "41888",
			"time": "2018-10-10 20:00:00"
		}, {
			"number": "2018275",
			"code": "39356",
			"time": "2018-10-09 20:00:00"
		}, {
			"number": "2018274",
			"code": "65616",
			"time": "2018-10-08 20:00:00"
		}, {
			"number": "2018273",
			"code": "62415",
			"time": "2018-10-07 20:00:00"
		}, {
			"number": "2018272",
			"code": "07801",
			"time": "2018-10-06 20:00:00"
		}, {
			"number": "2018271",
			"code": "77571",
			"time": "2018-10-05 20:00:00"
		}, {
			"number": "2018270",
			"code": "95978",
			"time": "2018-10-04 20:00:00"
		}, {
			"number": "2018269",
			"code": "42675",
			"time": "2018-10-03 20:00:00"
		}, {
			"number": "2018268",
			"code": "18771",
			"time": "2018-10-02 20:00:00"
		}, {
			"number": "2018267",
			"code": "10549",
			"time": "2018-10-01 20:00:00"
		}, {
			"number": "2018266",
			"code": "69766",
			"time": "2018-09-30 20:00:00"
		}, {
			"number": "2018265",
			"code": "18036",
			"time": "2018-09-29 20:00:00"
		}, {
			"number": "2018264",
			"code": "19022",
			"time": "2018-09-28 20:00:00"
		}, {
			"number": "2018263",
			"code": "45260",
			"time": "2018-09-27 20:00:00"
		}, {
			"number": "2018262",
			"code": "36704",
			"time": "2018-09-26 20:00:00"
		}, {
			"number": "2018261",
			"code": "35239",
			"time": "2018-09-25 20:00:00"
		}, {
			"number": "2018260",
			"code": "66454",
			"time": "2018-09-24 20:00:00"
		}, {
			"number": "2018259",
			"code": "14908",
			"time": "2018-09-23 20:00:00"
		}, {
			"number": "2018258",
			"code": "04581",
			"time": "2018-09-22 20:00:00"
		}, {
			"number": "2018257",
			"code": "60355",
			"time": "2018-09-21 20:00:00"
		}, {
			"number": "2018256",
			"code": "14717",
			"time": "2018-09-20 20:00:00"
		}, {
			"number": "2018255",
			"code": "71075",
			"time": "2018-09-19 20:00:00"
		}, {
			"number": "2018254",
			"code": "02152",
			"time": "2018-09-18 20:00:00"
		}, {
			"number": "2018253",
			"code": "85282",
			"time": "2018-09-17 20:00:00"
		}, {
			"number": "2018252",
			"code": "57829",
			"time": "2018-09-16 20:00:00"
		}, {
			"number": "2018251",
			"code": "03061",
			"time": "2018-09-15 20:00:00"
		}, {
			"number": "2018250",
			"code": "91738",
			"time": "2018-09-14 20:00:00"
		}, {
			"number": "2018249",
			"code": "28986",
			"time": "2018-09-13 20:00:00"
		}, {
			"number": "2018248",
			"code": "93991",
			"time": "2018-09-12 20:00:00"
		}, {
			"number": "2018247",
			"code": "30365",
			"time": "2018-09-11 20:00:00"
		}, {
			"number": "2018246",
			"code": "91610",
			"time": "2018-09-10 20:00:00"
		}, {
			"number": "2018245",
			"code": "05106",
			"time": "2018-09-09 20:00:00"
		}, {
			"number": "2018244",
			"code": "64985",
			"time": "2018-09-08 20:00:00"
		}, {
			"number": "2018243",
			"code": "79030",
			"time": "2018-09-07 20:00:00"
		}, {
			"number": "2018242",
			"code": "09751",
			"time": "2018-09-06 20:00:00"
		}, {
			"number": "2018241",
			"code": "17002",
			"time": "2018-09-05 20:00:00"
		}, {
			"number": "2018240",
			"code": "49215",
			"time": "2018-09-04 20:00:00"
		}, {
			"number": "2018239",
			"code": "83752",
			"time": "2018-09-03 20:00:00"
		}],
		"currentTime": 1541133707,
		"currentNumber": "2018299",
		"gameNumbers": [{
			"number": "2018299",
			"time": "2018-11-02 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018300",
			"time": "2018-11-03 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018301",
			"time": "2018-11-04 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018302",
			"time": "2018-11-05 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018303",
			"time": "2018-11-06 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018304",
			"time": "2018-11-07 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018305",
			"time": "2018-11-08 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018306",
			"time": "2018-11-09 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018307",
			"time": "2018-11-10 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018308",
			"time": "2018-11-11 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018309",
			"time": "2018-11-12 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018310",
			"time": "2018-11-13 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018311",
			"time": "2018-11-14 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018312",
			"time": "2018-11-15 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018313",
			"time": "2018-11-16 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018314",
			"time": "2018-11-17 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018315",
			"time": "2018-11-18 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018316",
			"time": "2018-11-19 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018317",
			"time": "2018-11-20 20:00:00",
			"wn_number": ""
		}, {
			"number": "2018318",
			"time": "2018-11-21 20:00:00",
			"wn_number": ""
		}],
		"traceMaxTimes": 20,
		"currentNumberTime": 1541160000,
		"lastNumber": "2018298",
		"lotteryBalls": "25323"
	}
}