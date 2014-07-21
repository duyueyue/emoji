
var Emoji = {

	reg: /\ud83d\ude04|\ud83d\ude03|\ud83d\ude00|\ud83d\ude0a|\u263a\ufe0f|\ud83d\ude09|\ud83d\ude0d|\ud83d\ude18|\ud83d\ude1a|\ud83d\ude17|\ud83d\ude19|\ud83d\ude1c|\ud83d\ude1d|\ud83d\ude1b|\ud83d\ude33|\ud83d\ude01|\ud83d\ude14|\ud83d\ude0c|\ud83d\ude12|\ud83d\ude1e|\ud83d\ude23|\ud83d\ude22|\ud83d\ude02|\ud83d\ude2d|\ud83d\ude2a|\ud83d\ude25|\ud83d\ude30|\ud83d\ude05|\ud83d\ude13|\ud83d\ude29|\ud83d\ude2b|\ud83d\ude28|\ud83d\ude31|\ud83d\ude20|\ud83d\ude21|\ud83d\ude24|\ud83d\ude16|\ud83d\ude06|\ud83d\ude0b|\ud83d\ude37|\ud83d\ude0e|\ud83d\ude34|\ud83d\ude35|\ud83d\ude32|\ud83d\ude1f|\ud83d\ude26|\ud83d\ude27|\ud83d\ude08|\ud83d\udc7f|\ud83d\ude2e|\ud83d\ude2c|\ud83d\ude10|\ud83d\ude15|\ud83d\ude2f|\ud83d\ude36|\ud83d\ude07|\ud83d\ude0f|\ud83d\ude11|\ud83d\udc72|\ud83d\udc73|\ud83d\udc6e|\ud83d\udc77|\ud83d\udc82|\ud83d\udc76|\ud83d\udc66|\ud83d\udc67|\ud83d\udc68|\ud83d\udc69|\ud83d\udc74|\ud83d\udc75|\ud83d\udc71|\ud83d\udc7c|\ud83d\udc78|\ud83d\ude3a|\ud83d\ude38|\ud83d\ude3b|\ud83d\ude3d|\ud83d\ude3c|\ud83d\ude40|\ud83d\ude3f|\ud83d\ude39|\ud83d\ude3e|\ud83d\udc79|\ud83d\udc7a|\ud83d\ude48|\ud83d\ude49|\ud83d\ude4a|\ud83d\udc80|\ud83d\udc7d|\ud83d\udca9|\ud83d\udd25|\u2728|\ud83c\udf1f|\ud83d\udcab|\ud83d\udca5|\ud83d\udca2|\ud83d\udca6|\ud83d\udca7|\ud83d\udca4|\ud83d\udca8|\ud83d\udc42|\ud83d\udc40|\ud83d\udc43|\ud83d\udc45|\ud83d\udc44|\ud83d\udc4d|\ud83d\udc4e|\ud83d\udc4c|\ud83d\udc4a|\u270a|\u270c\ufe0f|\ud83d\udc4b|\u270b|\ud83d\udc50|\ud83d\udc46|\ud83d\udc47|\ud83d\udc49|\ud83d\udc48|\ud83d\ude4c|\ud83d\ude4f|\u261d\ufe0f|\ud83d\udc4f|\ud83d\udcaa|\ud83d\udeb6|\ud83c\udfc3|\ud83d\udc83|\ud83d\udc6b|\ud83d\udc6a|\ud83d\udc6c|\ud83d\udc6d|\ud83d\udc8f|\ud83d\udc91|\ud83d\udc6f|\ud83d\ude46|\ud83d\ude45|\ud83d\udc81|\ud83d\ude4b|\ud83d\udc86|\ud83d\udc87|\ud83d\udc85|\ud83d\udc70|\ud83d\ude4e|\ud83d\ude4d|\ud83d\ude47|\ud83c\udfa9|\ud83d\udc51|\ud83d\udc52|\ud83d\udc5f|\ud83d\udc5e|\ud83d\udc61|\ud83d\udc60|\ud83d\udc62|\ud83d\udc55|\ud83d\udc54|\ud83d\udc5a|\ud83d\udc57|\ud83c\udfbd|\ud83d\udc56|\ud83d\udc58|\ud83d\udc59|\ud83d\udcbc|\ud83d\udc5c|\ud83d\udc5d|\ud83d\udc5b|\ud83d\udc53|\ud83c\udf80|\ud83c\udf02|\ud83d\udc84|\ud83d\udc9b|\ud83d\udc99|\ud83d\udc9c|\ud83d\udc9a|\u2764\ufe0f|\ud83d\udc94|\ud83d\udc97|\ud83d\udc93|\ud83d\udc95|\ud83d\udc96|\ud83d\udc9e|\ud83d\udc98|\ud83d\udc8c|\ud83d\udc8b|\ud83d\udc8d|\ud83d\udc8e|\ud83d\udc64|\ud83d\udc65|\ud83d\udcac|\ud83d\udc63|\ud83d\udcad|\ud83d\udc36|\ud83d\udc3a|\ud83d\udc31|\ud83d\udc2d|\ud83d\udc39|\ud83d\udc30|\ud83d\udc38|\ud83d\udc2f|\ud83d\udc28|\ud83d\udc3b|\ud83d\udc37|\ud83d\udc3d|\ud83d\udc2e|\ud83d\udc17|\ud83d\udc35|\ud83d\udc12|\ud83d\udc34|\ud83d\udc11|\ud83d\udc18|\ud83d\udc3c|\ud83d\udc27|\ud83d\udc26|\ud83d\udc24|\ud83d\udc25|\ud83d\udc23|\ud83d\udc14|\ud83d\udc0d|\ud83d\udc22|\ud83d\udc1b|\ud83d\udc1d|\ud83d\udc1c|\ud83d\udc1e|\ud83d\udc0c|\ud83d\udc19|\ud83d\udc1a|\ud83d\udc20|\ud83d\udc1f|\ud83d\udc2c|\ud83d\udc33|\ud83d\udc0b|\ud83d\udc04|\ud83d\udc0f|\ud83d\udc00|\ud83d\udc03|\ud83d\udc05|\ud83d\udc07|\ud83d\udc09|\ud83d\udc0e|\ud83d\udc10|\ud83d\udc13|\ud83d\udc15|\ud83d\udc16|\ud83d\udc01|\ud83d\udc02|\ud83d\udc32|\ud83d\udc21|\ud83d\udc0a|\ud83d\udc2b|\ud83d\udc2a|\ud83d\udc06|\ud83d\udc08|\ud83d\udc29|\ud83d\udc3e|\ud83d\udc90|\ud83c\udf38|\ud83c\udf37|\ud83c\udf40|\ud83c\udf39|\ud83c\udf3b|\ud83c\udf3a|\ud83c\udf41|\ud83c\udf43|\ud83c\udf42|\ud83c\udf3f|\ud83c\udf3e|\ud83c\udf44|\ud83c\udf35|\ud83c\udf34|\ud83c\udf32|\ud83c\udf33|\ud83c\udf30|\ud83c\udf31|\ud83c\udf3c|\ud83c\udf10|\ud83c\udf1e|\ud83c\udf1d|\ud83c\udf1a|\ud83c\udf11|\ud83c\udf12|\ud83c\udf13|\ud83c\udf14|\ud83c\udf15|\ud83c\udf16|\ud83c\udf17|\ud83c\udf18|\ud83c\udf1c|\ud83c\udf1b|\ud83c\udf19|\ud83c\udf0d|\ud83c\udf0e|\ud83c\udf0f|\ud83c\udf0b|\ud83c\udf0c|\ud83c\udf20|\u2b50\ufe0f|\u2600\ufe0f|\u26c5\ufe0f|\u2601\ufe0f|\u26a1\ufe0f|\u2614\ufe0f|\u2744\ufe0f|\u26c4\ufe0f|\ud83c\udf00|\ud83c\udf01|\ud83c\udf08|\ud83c\udf0a|\ud83c\udf8d|\ud83d\udc9d|\ud83c\udf8e|\ud83c\udf92|\ud83c\udf93|\ud83c\udf8f|\ud83c\udf86|\ud83c\udf87|\ud83c\udf90|\ud83c\udf91|\ud83c\udf83|\ud83d\udc7b|\ud83c\udf85|\ud83c\udf84|\ud83c\udf81|\ud83c\udf8b|\ud83c\udf89|\ud83c\udf8a|\ud83c\udf88|\ud83c\udf8c|\ud83d\udd2e|\ud83c\udfa5|\ud83d\udcf7|\ud83d\udcf9|\ud83d\udcfc|\ud83d\udcbf|\ud83d\udcc0|\ud83d\udcbd|\ud83d\udcbe|\ud83d\udcbb|\ud83d\udcf1|\u260e\ufe0f|\ud83d\udcde|\ud83d\udcdf|\ud83d\udce0|\ud83d\udce1|\ud83d\udcfa|\ud83d\udcfb|\ud83d\udd0a|\ud83d\udd09|\ud83d\udd08|\ud83d\udd07|\ud83d\udd14|\ud83d\udd15|\ud83d\udce2|\ud83d\udce3|\u23f3|\u231b\ufe0f|\u23f0|\u231a\ufe0f|\ud83d\udd13|\ud83d\udd12|\ud83d\udd0f|\ud83d\udd10|\ud83d\udd11|\ud83d\udd0e|\ud83d\udca1|\ud83d\udd26|\ud83d\udd06|\ud83d\udd05|\ud83d\udd0c|\ud83d\udd0b|\ud83d\udd0d|\ud83d\udec1|\ud83d\udec0|\ud83d\udebf|\ud83d\udebd|\ud83d\udd27|\ud83d\udd29|\ud83d\udd28|\ud83d\udeaa|\ud83d\udeac|\ud83d\udca3|\ud83d\udd2b|\ud83d\udd2a|\ud83d\udc8a|\ud83d\udc89|\ud83d\udcb0|\ud83d\udcb4|\ud83d\udcb5|\ud83d\udcb7|\ud83d\udcb6|\ud83d\udcb3|\ud83d\udcb8|\ud83d\udcf2|\ud83d\udce7|\ud83d\udce5|\ud83d\udce4|\u2709\ufe0f|\ud83d\udce9|\ud83d\udce8|\ud83d\udcef|\ud83d\udceb|\ud83d\udcea|\ud83d\udcec|\ud83d\udced|\ud83d\udcee|\ud83d\udce6|\ud83d\udcdd|\ud83d\udcc4|\ud83d\udcc3|\ud83d\udcd1|\ud83d\udcca|\ud83d\udcc8|\ud83d\udcc9|\ud83d\udcdc|\ud83d\udccb|\ud83d\udcc5|\ud83d\udcc6|\ud83d\udcc7|\ud83d\udcc1|\ud83d\udcc2|\u2702\ufe0f|\ud83d\udccc|\ud83d\udcce|\u2712\ufe0f|\u270f\ufe0f|\ud83d\udccf|\ud83d\udcd0|\ud83d\udcd5|\ud83d\udcd7|\ud83d\udcd8|\ud83d\udcd9|\ud83d\udcd3|\ud83d\udcd4|\ud83d\udcd2|\ud83d\udcda|\ud83d\udcd6|\ud83d\udd16|\ud83d\udcdb|\ud83d\udd2c|\ud83d\udd2d|\ud83d\udcf0|\ud83c\udfa8|\ud83c\udfac|\ud83c\udfa4|\ud83c\udfa7|\ud83c\udfbc|\ud83c\udfb5|\ud83c\udfb6|\ud83c\udfb9|\ud83c\udfbb|\ud83c\udfba|\ud83c\udfb7|\ud83c\udfb8|\ud83d\udc7e|\ud83c\udfae|\ud83c\udccf|\ud83c\udfb4|\ud83c\udc04\ufe0f|\ud83c\udfb2|\ud83c\udfaf|\ud83c\udfc8|\ud83c\udfc0|\u26bd\ufe0f|\u26be\ufe0f|\ud83c\udfbe|\ud83c\udfb1|\ud83c\udfc9|\ud83c\udfb3|\u26f3\ufe0f|\ud83d\udeb5|\ud83d\udeb4|\ud83c\udfc1|\ud83c\udfc7|\ud83c\udfc6|\ud83c\udfbf|\ud83c\udfc2|\ud83c\udfca|\ud83c\udfc4|\ud83c\udfa3|\u2615\ufe0f|\ud83c\udf75|\ud83c\udf76|\ud83c\udf7c|\ud83c\udf7a|\ud83c\udf7b|\ud83c\udf78|\ud83c\udf79|\ud83c\udf77|\ud83c\udf74|\ud83c\udf55|\ud83c\udf54|\ud83c\udf5f|\ud83c\udf57|\ud83c\udf56|\ud83c\udf5d|\ud83c\udf5b|\ud83c\udf64|\ud83c\udf71|\ud83c\udf63|\ud83c\udf65|\ud83c\udf59|\ud83c\udf58|\ud83c\udf5a|\ud83c\udf5c|\ud83c\udf72|\ud83c\udf62|\ud83c\udf61|\ud83c\udf73|\ud83c\udf5e|\ud83c\udf69|\ud83c\udf6e|\ud83c\udf66|\ud83c\udf68|\ud83c\udf67|\ud83c\udf82|\ud83c\udf70|\ud83c\udf6a|\ud83c\udf6b|\ud83c\udf6c|\ud83c\udf6d|\ud83c\udf6f|\ud83c\udf4e|\ud83c\udf4f|\ud83c\udf4a|\ud83c\udf4b|\ud83c\udf52|\ud83c\udf47|\ud83c\udf49|\ud83c\udf53|\ud83c\udf51|\ud83c\udf48|\ud83c\udf4c|\ud83c\udf50|\ud83c\udf4d|\ud83c\udf60|\ud83c\udf46|\ud83c\udf45|\ud83c\udf3d|\ud83c\udfe0|\ud83c\udfe1|\ud83c\udfeb|\ud83c\udfe2|\ud83c\udfe3|\ud83c\udfe5|\ud83c\udfe6|\ud83c\udfea|\ud83c\udfe9|\ud83c\udfe8|\ud83d\udc92|\u26ea\ufe0f|\ud83c\udfec|\ud83c\udfe4|\ud83c\udf07|\ud83c\udf06|\ud83c\udfef|\ud83c\udff0|\u26fa\ufe0f|\ud83c\udfed|\ud83d\uddfc|\ud83d\uddfe|\ud83d\uddfb|\ud83c\udf04|\ud83c\udf05|\ud83c\udf03|\ud83d\uddfd|\ud83c\udf09|\ud83c\udfa0|\ud83c\udfa1|\u26f2\ufe0f|\ud83c\udfa2|\ud83d\udea2|\u26f5\ufe0f|\ud83d\udea4|\ud83d\udea3|\u2693\ufe0f|\ud83d\ude80|\u2708\ufe0f|\ud83d\udcba|\ud83d\ude81|\ud83d\ude82|\ud83d\ude8a|\ud83d\ude89|\ud83d\ude9e|\ud83d\ude86|\ud83d\ude84|\ud83d\ude85|\ud83d\ude88|\ud83d\ude87|\ud83d\ude9d|\ud83d\ude8b|\ud83d\ude83|\ud83d\ude8e|\ud83d\ude8c|\ud83d\ude8d|\ud83d\ude99|\ud83d\ude98|\ud83d\ude97|\ud83d\ude95|\ud83d\ude96|\ud83d\ude9b|\ud83d\ude9a|\ud83d\udea8|\ud83d\ude93|\ud83d\ude94|\ud83d\ude92|\ud83d\ude91|\ud83d\ude90|\ud83d\udeb2|\ud83d\udea1|\ud83d\ude9f|\ud83d\udea0|\ud83d\ude9c|\ud83d\udc88|\ud83d\ude8f|\ud83c\udfab|\ud83d\udea6|\ud83d\udea5|\u26a0\ufe0f|\ud83d\udea7|\ud83d\udd30|\u26fd\ufe0f|\ud83c\udfee|\ud83c\udfb0|\u2668\ufe0f|\ud83d\uddff|\ud83c\udfaa|\ud83c\udfad|\ud83d\udccd|\ud83d\udea9|\ud83c\uddef\ud83c\uddf5|\ud83c\uddf0\ud83c\uddf7|\ud83c\udde9\ud83c\uddea|\ud83c\udde8\ud83c\uddf3|\ud83c\uddfa\ud83c\uddf8|\ud83c\uddeb\ud83c\uddf7|\ud83c\uddea\ud83c\uddf8|\ud83c\uddee\ud83c\uddf9|\ud83c\uddf7\ud83c\uddfa|\ud83c\uddec\ud83c\udde7|\u0031\ufe0f\u20e3|\u0032\ufe0f\u20e3|\u0033\ufe0f\u20e3|\u0034\ufe0f\u20e3|\u0035\ufe0f\u20e3|\u0036\ufe0f\u20e3|\u0037\ufe0f\u20e3|\u0038\ufe0f\u20e3|\u0039\ufe0f\u20e3|\u0030\ufe0f\u20e3|\ud83d\udd1f|\ud83d\udd22|\u0023\ufe0f\u20e3|\ud83d\udd23|\u2b06\ufe0f|\u2b07\ufe0f|\u2b05\ufe0f|\u27a1\ufe0f|\ud83d\udd20|\ud83d\udd21|\ud83d\udd24|\u2197\ufe0f|\u2196\ufe0f|\u2198\ufe0f|\u2199\ufe0f|\u2194\ufe0f|\u2195\ufe0f|\ud83d\udd04|\u25c0\ufe0f|\u25b6\ufe0f|\ud83d\udd3c|\ud83d\udd3d|\u21a9\ufe0f|\u21aa\ufe0f|\u2139\ufe0f|\u23ea|\u23e9|\u23eb|\u23ec|\u2935\ufe0f|\u2934\ufe0f|\ud83c\udd97|\ud83d\udd00|\ud83d\udd01|\ud83d\udd02|\ud83c\udd95|\ud83c\udd99|\ud83c\udd92|\ud83c\udd93|\ud83c\udd96|\ud83d\udcf6|\ud83c\udfa6|\ud83c\ude01|\ud83c\ude2f\ufe0f|\ud83c\ude33|\ud83c\ude35|\ud83c\ude34|\ud83c\ude32|\ud83c\ude50|\ud83c\ude39|\ud83c\ude3a|\ud83c\ude36|\ud83c\ude1a\ufe0f|\ud83d\udebb|\ud83d\udeb9|\ud83d\udeba|\ud83d\udebc|\ud83d\udebe|\ud83d\udeb0|\ud83d\udeae|\ud83c\udd7f\ufe0f|\u267f\ufe0f|\ud83d\udead|\ud83c\ude37|\ud83c\ude38|\ud83c\ude02|\u24c2\ufe0f|\ud83d\udec2|\ud83d\udec4|\ud83d\udec5|\ud83d\udec3|\ud83c\ude51|\u3299\ufe0f|\u3297\ufe0f|\ud83c\udd91|\ud83c\udd98|\ud83c\udd94|\ud83d\udeab|\ud83d\udd1e|\ud83d\udcf5|\ud83d\udeaf|\ud83d\udeb1|\ud83d\udeb3|\ud83d\udeb7|\ud83d\udeb8|\u26d4\ufe0f|\u2733\ufe0f|\u2747\ufe0f|\u274e|\u2705|\u2734\ufe0f|\ud83d\udc9f|\ud83c\udd9a|\ud83d\udcf3|\ud83d\udcf4|\ud83c\udd70|\ud83c\udd71|\ud83c\udd8e|\ud83c\udd7e|\ud83d\udca0|\u27bf|\u267b\ufe0f|\u2648\ufe0f|\u2649\ufe0f|\u264a\ufe0f|\u264b\ufe0f|\u264c\ufe0f|\u264d\ufe0f|\u264e\ufe0f|\u264f\ufe0f|\u2650\ufe0f|\u2651\ufe0f|\u2652\ufe0f|\u2653\ufe0f|\u26ce|\ud83d\udd2f|\ud83c\udfe7|\ud83d\udcb9|\ud83d\udcb2|\ud83d\udcb1|\u00a9|\u00ae|\u2122|\u274c|\u203c\ufe0f|\u2049\ufe0f|\u2757\ufe0f|\u2753|\u2755|\u2754|\u2b55\ufe0f|\ud83d\udd1d|\ud83d\udd1a|\ud83d\udd19|\ud83d\udd1b|\ud83d\udd1c|\ud83d\udd03|\ud83d\udd5b|\ud83d\udd67|\ud83d\udd50|\ud83d\udd5c|\ud83d\udd51|\ud83d\udd5d|\ud83d\udd52|\ud83d\udd5e|\ud83d\udd53|\ud83d\udd5f|\ud83d\udd54|\ud83d\udd60|\ud83d\udd55|\ud83d\udd56|\ud83d\udd57|\ud83d\udd58|\ud83d\udd59|\ud83d\udd5a|\ud83d\udd61|\ud83d\udd62|\ud83d\udd63|\ud83d\udd64|\ud83d\udd65|\ud83d\udd66|\u2716\ufe0f|\u2795|\u2796|\u2797|\u2660\ufe0f|\u2665\ufe0f|\u2663\ufe0f|\u2666\ufe0f|\ud83d\udcae|\ud83d\udcaf|\u2714\ufe0f|\u2611\ufe0f|\ud83d\udd18|\ud83d\udd17|\u27b0|\u3030|\u303d\ufe0f|\ud83d\udd31|\u25fc\ufe0f|\u25fb\ufe0f|\u25fe\ufe0f|\u25fd\ufe0f|\u25aa\ufe0f|\u25ab\ufe0f|\ud83d\udd3a|\ud83d\udd32|\ud83d\udd33|\u26ab\ufe0f|\u26aa\ufe0f|\ud83d\udd34|\ud83d\udd35|\ud83d\udd3b|\u2b1c\ufe0f|\u2b1b\ufe0f|\ud83d\udd36|\ud83d\udd37|\ud83d\udd38|\ud83d\udd39/g,

	emojiPath: 'emoji/',

	//表情图片的最大尺寸
	maxSize: 20,

	emoji: function(text) {

		//在第一次调用的时候检查浏览器是否支持emoji符号
		var supportEmoji = false,
			UA = navigator.userAgent;

		if (UA.match(/Mac\s+OS/i) && !UA.match(/(Chrome|Firefox)/i)) {
			supportEmoji = true;
		}

		//如果浏览器支持原生的emoji，无需转换，把转换方法置空
		if (supportEmoji) {
			Emoji.emoji = function() {};

			//置空$().emoji()方法
			if (typeof $ !== 'undefined') {
				$.fn.emoji = function() {};
				return false; //return false是为了终止$().each()循环
			}
		} else {

			//判断屏幕分辨率，如果是高清屏的话使用稍大尺寸的表情图片
			var pixelRatio = parseFloat(window.devicePixelRatio) || 1;
			if (pixelRatio > 1.2) {
				Emoji.emojiPath += '2x/';
			}

			Emoji.emoji = function(text) {
				setTimeout(function() {
					Emoji.trans(text);
				}, 0);
			}

			Emoji.emoji(text);
		}
	},

	trans:  function(text) {
		var isElement, el, fontSize;
		if (text.nodeType) {
			el = text;
			fontSize = (el.currentStyle || window.getComputedStyle(el, ''))['fontSize'];

			//IE浏览器下如果css中的font-size单位不是象素的话，需要转换一下
			if (!/px$/i.test(fontSize)) {
				var left = el.style.left;
					el.style.left = fontSize;

				fontSize = el.style.pixelLeft;
				el.style.left = left;
			}

			fontSize = parseFloat(fontSize);
			text = el.innerHTML;
			isElement = true;
		} else {
			fontSize = fontSize || 14;
		}

		fontSize += 4;
		fontSize = Math.min(fontSize, Emoji.maxSize);

		text = text.replace(Emoji.reg, function(code) {
			return '<img width=' + fontSize + ' class="emoji" style="vertical-align:middle" src="' + Emoji.emojiPath + Emoji._escapeToUtf32(code) + '.png">';
		});

		if (isElement) {
			el.innerHTML = text;
		}
		return text;
	},

	//编码转换
	_escapeToUtf32: function(str) {
		var escaped = [],
			unicodeCodes = Emoji._convertStringToUnicodeCodePoints(str),
			i = 0,
			l = unicodeCodes.length,
			hex;

		for (; i < l; i++) {
			hex = unicodeCodes[i].toString(16);
			escaped.push('0000'.substr(hex.length) + hex);
		}
		return escaped.join('-');
	},

	_convertStringToUnicodeCodePoints: function(str) {
		var surrogate1st = 0,
			unicodeCodes = [],
			i = 0,
			l = str.length;

		for (; i < l; i++) {
			var utf16Code = str.charCodeAt(i);
			if (surrogate1st != 0) {
				if (utf16Code >= 0xDC00 && utf16Code <= 0xDFFF) {
					var surrogate2nd = utf16Code,
						unicodeCode = (surrogate1st - 0xD800) * (1 << 10) + (1 << 16) + (surrogate2nd - 0xDC00);
					unicodeCodes.push(unicodeCode);
				}
				surrogate1st = 0;
			} else if (utf16Code >= 0xD800 && utf16Code <= 0xDBFF) {
				surrogate1st = utf16Code;
			} else {
				unicodeCodes.push(utf16Code);
			}
		}
		return unicodeCodes;
	}
};

if (typeof $ !== 'undefined') {
	$.fn.emoji = function() {
		this.each(function(index, element) {
			Emoji.emoji(element);
		});
	};
}
