export default {
	"status": 1,
	"type": "info",
	"data": {
		"gameId": 42,
		"gameName_en": "SSL",
		"gameName_cn": "上海时时乐",
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
			"number": "20181102-05",
			"code": "348",
			"time": "2018-11-02 12:27:00"
		}, {
			"number": "20181102-04",
			"code": "248",
			"time": "2018-11-02 11:57:00"
		}, {
			"number": "20181102-03",
			"code": "931",
			"time": "2018-11-02 11:27:00"
		}, {
			"number": "20181102-02",
			"code": "151",
			"time": "2018-11-02 10:57:00"
		}, {
			"number": "20181102-01",
			"code": "825",
			"time": "2018-11-02 10:27:00"
		}, {
			"number": "20181101-23",
			"code": "775",
			"time": "2018-11-01 21:27:00"
		}, {
			"number": "20181101-22",
			"code": "445",
			"time": "2018-11-01 20:57:00"
		}, {
			"number": "20181101-21",
			"code": "226",
			"time": "2018-11-01 20:27:00"
		}, {
			"number": "20181101-20",
			"code": "770",
			"time": "2018-11-01 19:57:00"
		}, {
			"number": "20181101-19",
			"code": "401",
			"time": "2018-11-01 19:27:00"
		}, {
			"number": "20181101-18",
			"code": "473",
			"time": "2018-11-01 18:57:00"
		}, {
			"number": "20181101-17",
			"code": "159",
			"time": "2018-11-01 18:27:00"
		}, {
			"number": "20181101-16",
			"code": "450",
			"time": "2018-11-01 17:57:00"
		}, {
			"number": "20181101-15",
			"code": "895",
			"time": "2018-11-01 17:27:00"
		}, {
			"number": "20181101-14",
			"code": "265",
			"time": "2018-11-01 16:57:00"
		}, {
			"number": "20181101-13",
			"code": "106",
			"time": "2018-11-01 16:27:00"
		}, {
			"number": "20181101-12",
			"code": "945",
			"time": "2018-11-01 15:57:00"
		}, {
			"number": "20181101-11",
			"code": "366",
			"time": "2018-11-01 15:27:00"
		}, {
			"number": "20181101-10",
			"code": "994",
			"time": "2018-11-01 14:57:00"
		}, {
			"number": "20181101-09",
			"code": "473",
			"time": "2018-11-01 14:27:00"
		}, {
			"number": "20181101-08",
			"code": "836",
			"time": "2018-11-01 13:57:00"
		}, {
			"number": "20181101-07",
			"code": "278",
			"time": "2018-11-01 13:27:00"
		}, {
			"number": "20181101-06",
			"code": "010",
			"time": "2018-11-01 12:57:00"
		}, {
			"number": "20181101-05",
			"code": "807",
			"time": "2018-11-01 12:27:00"
		}, {
			"number": "20181101-04",
			"code": "546",
			"time": "2018-11-01 11:57:00"
		}, {
			"number": "20181101-03",
			"code": "465",
			"time": "2018-11-01 11:27:00"
		}, {
			"number": "20181101-02",
			"code": "683",
			"time": "2018-11-01 10:57:00"
		}, {
			"number": "20181101-01",
			"code": "788",
			"time": "2018-11-01 10:27:00"
		}, {
			"number": "20181031-23",
			"code": "809",
			"time": "2018-10-31 21:27:00"
		}, {
			"number": "20181031-22",
			"code": "161",
			"time": "2018-10-31 20:57:00"
		}, {
			"number": "20181031-21",
			"code": "208",
			"time": "2018-10-31 20:27:00"
		}, {
			"number": "20181031-20",
			"code": "972",
			"time": "2018-10-31 19:57:00"
		}, {
			"number": "20181031-19",
			"code": "499",
			"time": "2018-10-31 19:27:00"
		}, {
			"number": "20181031-18",
			"code": "874",
			"time": "2018-10-31 18:57:00"
		}, {
			"number": "20181031-17",
			"code": "394",
			"time": "2018-10-31 18:27:00"
		}, {
			"number": "20181031-16",
			"code": "039",
			"time": "2018-10-31 17:57:00"
		}, {
			"number": "20181031-15",
			"code": "675",
			"time": "2018-10-31 17:27:00"
		}, {
			"number": "20181031-14",
			"code": "670",
			"time": "2018-10-31 16:57:00"
		}, {
			"number": "20181031-13",
			"code": "115",
			"time": "2018-10-31 16:27:00"
		}, {
			"number": "20181031-12",
			"code": "360",
			"time": "2018-10-31 15:57:00"
		}, {
			"number": "20181031-11",
			"code": "139",
			"time": "2018-10-31 15:27:00"
		}, {
			"number": "20181031-10",
			"code": "204",
			"time": "2018-10-31 14:57:00"
		}, {
			"number": "20181031-09",
			"code": "824",
			"time": "2018-10-31 14:27:00"
		}, {
			"number": "20181031-08",
			"code": "490",
			"time": "2018-10-31 13:57:00"
		}, {
			"number": "20181031-07",
			"code": "529",
			"time": "2018-10-31 13:27:00"
		}, {
			"number": "20181031-06",
			"code": "603",
			"time": "2018-10-31 12:57:00"
		}, {
			"number": "20181031-05",
			"code": "038",
			"time": "2018-10-31 12:27:00"
		}, {
			"number": "20181031-04",
			"code": "059",
			"time": "2018-10-31 11:57:00"
		}, {
			"number": "20181031-03",
			"code": "262",
			"time": "2018-10-31 11:27:00"
		}, {
			"number": "20181031-02",
			"code": "611",
			"time": "2018-10-31 10:57:00"
		}, {
			"number": "20181031-01",
			"code": "324",
			"time": "2018-10-31 10:27:00"
		}, {
			"number": "20181030-23",
			"code": "919",
			"time": "2018-10-30 21:27:00"
		}, {
			"number": "20181030-22",
			"code": "994",
			"time": "2018-10-30 20:57:00"
		}, {
			"number": "20181030-21",
			"code": "111",
			"time": "2018-10-30 20:27:00"
		}, {
			"number": "20181030-20",
			"code": "902",
			"time": "2018-10-30 19:57:00"
		}, {
			"number": "20181030-19",
			"code": "495",
			"time": "2018-10-30 19:27:00"
		}, {
			"number": "20181030-18",
			"code": "671",
			"time": "2018-10-30 18:57:00"
		}, {
			"number": "20181030-17",
			"code": "757",
			"time": "2018-10-30 18:27:00"
		}, {
			"number": "20181030-16",
			"code": "303",
			"time": "2018-10-30 17:57:00"
		}, {
			"number": "20181030-15",
			"code": "251",
			"time": "2018-10-30 17:27:00"
		}],
		"currentTime": 1541133776,
		"currentNumber": "20181102-06",
		"gameNumbers": [
            {
			"number": "20181102-06",
			"time": "2018-11-02 12:57:00",
			"wn_number": ""
		}, {
			"number": "20181102-07",
			"time": "2018-11-02 13:27:00",
			"wn_number": ""
		}, {
			"number": "20181102-08",
			"time": "2018-11-02 13:57:00",
			"wn_number": ""
		}, {
			"number": "20181102-09",
			"time": "2018-11-02 14:27:00",
			"wn_number": ""
		}, {
			"number": "20181102-10",
			"time": "2018-11-02 14:57:00",
			"wn_number": ""
		}, {
			"number": "20181102-11",
			"time": "2018-11-02 15:27:00",
			"wn_number": ""
		}, {
			"number": "20181102-12",
			"time": "2018-11-02 15:57:00",
			"wn_number": ""
		}, {
			"number": "20181102-13",
			"time": "2018-11-02 16:27:00",
			"wn_number": ""
		}, {
			"number": "20181102-14",
			"time": "2018-11-02 16:57:00",
			"wn_number": ""
		}, {
			"number": "20181102-15",
			"time": "2018-11-02 17:27:00",
			"wn_number": ""
		}, {
			"number": "20181102-16",
			"time": "2018-11-02 17:57:00",
			"wn_number": ""
		}, {
			"number": "20181102-17",
			"time": "2018-11-02 18:27:00",
			"wn_number": ""
		}, {
			"number": "20181102-18",
			"time": "2018-11-02 18:57:00",
			"wn_number": ""
		}, {
			"number": "20181102-19",
			"time": "2018-11-02 19:27:00",
			"wn_number": ""
		}, {
			"number": "20181102-20",
			"time": "2018-11-02 19:57:00",
			"wn_number": ""
		}, {
			"number": "20181102-21",
			"time": "2018-11-02 20:27:00",
			"wn_number": ""
		}, {
			"number": "20181102-22",
			"time": "2018-11-02 20:57:00",
			"wn_number": ""
		}, {
			"number": "20181102-23",
			"time": "2018-11-02 21:27:00",
			"wn_number": ""
		}, {
			"number": "20181103-01",
			"time": "2018-11-03 10:27:00",
			"wn_number": ""
		}, {
			"number": "20181103-02",
			"time": "2018-11-03 10:57:00",
			"wn_number": ""
		}, {
			"number": "20181103-03",
			"time": "2018-11-03 11:27:00",
			"wn_number": ""
		}, {
			"number": "20181103-04",
			"time": "2018-11-03 11:57:00",
			"wn_number": ""
		}, {
			"number": "20181103-05",
			"time": "2018-11-03 12:27:00",
			"wn_number": ""
		}],
		"traceMaxTimes": 23,
		"currentNumberTime": 1541134620,
		"lastNumber": "20181102-05",
		"lotteryBalls": "348"
	}
}