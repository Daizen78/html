$(function() {
	$('#fullName, #age, #sex, #postalCode, #prefecture, #municipality, #address, #phoneNumber').on('change blur', function() {
		$('#registExe').prop('disabled', registJudge());
	});

	// 郵便番号検索ボタン活性
	$('#postalCode').on('blur', function() {
		var bool = true;
		var v = $('#postalCode').val();
		if( $('#postalCode').val()) bool = false;
		$('#searchPostCode').prop('disabled', bool);
	});

	// 生年月日から自動算出
	$('#birthDay_y, #birthDay_m, #birthDay_d').on('blur', function() {
		// 年齢、星座、十二支
		var age = " ";
		if( $('#birthDay_y').val() && $('#birthDay_m').val() && $('#birthDay_d').val()) {
			var birthDay = dateNumber(new Date($('#birthDay_y').val(), $('#birthDay_m').val()-1, $('#birthDay_d').val()));
			var date = dateNumber();
			age = Math.floor((dateNumber() - birthDay) /10000);
		}
		$('#age').text(age);

		if ($('#birthDay_m').val() && $('#birthDay_d').val()) {
			$('#sign').text(signCalc(toStringPadStart($('#birthDay_m').val(), 2) + toStringPadStart($('#birthDay_d').val(), 2)));
		} else {
			$('#sign').text(signCalc(""));
		}
		$('#zodiac').text(zodiacCalc($('#birthDay_y').val()));
	});

	function dateNumber(date) {
		var d = date;
		if (!date) d = new Date();
		return d.getFullYear() + toStringPadStart(d.getMonth()+1, 2) + toStringPadStart(d.getDate(), 2);
	}
	function toStringPadStart(val, targetLength) {
		return val.toString().padStart(targetLength, '0')
	}

	// 星座
	function signCalc(val) {
		const list = ["牡羊座","牡牛座","双子座","蟹座","獅子座","乙女座","天秤座","蠍座","射手座","山羊座","水瓶座","魚座"];
		var num = -1
		     if ("0321" <= val && val <= "0419") num = 0
		else if ("0420" <= val && val <= "0520") num = 1
		else if ("0521" <= val && val <= "0621") num = 2
		else if ("0622" <= val && val <= "0722") num = 3
		else if ("0723" <= val && val <= "0822") num = 4
		else if ("0823" <= val && val <= "0922") num = 5
		else if ("0923" <= val && val <= "1023") num = 6
		else if ("1024" <= val && val <= "1122") num = 7
		else if ("1123" <= val && val <= "1221") num = 8
		else if ("1222" <= val &&(val >= "0101" && val <= "0119")) num = 9
		else if ("0120" <= val && val <= "0218") num = 10
		else if ("0219" <= val && val <= "0320") num = 11
		return list[num]
	}

	function zodiacCalc(val) {
		var zodiac = "";
		if (val) {
			const list= ["申","酉","戌","亥","子","丑","寅","卯","辰","巳","午","未"];
			zodiac = list[val % 12];
		}
		return zodiac;
	}

	function registJudge() {
		var bool = true;
		if( $('#fullName').val() && $('#fullNameKana').val()
			&& $('#age').text() && $('#sex').val()
			&& $('#postalCode').val() && $('#prefecture').val() && $('#municipality').val()
			&& $('#address').val() && $('#phoneNumber').val()
			) bool = false;
		return bool;
	}

	// 必須項目設定
	$('#inputR').on('click', function() {
		$('#fullName').val('山田　太郎');
		$('#fullNameKana').val('ヤマダ　タロウ')
		$('#birthDay_y').val('1983')
		$('#birthDay_m').val('07')
		$('#birthDay_d').val('08')
		$('#age').text(37);
		$('#sign').text('蟹座');
		$('#zodiac').text('亥');
		$('#sex').val('1')
		$('#bloodType').val('1')
		$('#postalCode').val('111-2222')
		$('#prefecture').val('13')
		$('#municipality').val('千代田区')
		$('#address').val('永田町')
		$('#phoneNumber').val('080-1111-2222')

		$('#searchPostCode').prop('disabled', false);
		$('#registExe').prop('disabled', false);
	});
	
});


// jquery.autoKana.js
$(document).ready(
    function() {
        $.fn.autoKana('#fullName', '#fullNameKana', {
            katakana : true  //true：カタカナ、false：ひらがな（デフォルト）
    });
});
