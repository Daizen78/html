new Vue({
	el: '#regist',
	data: {
		fullName: '',
		fullNameKana: '',
		birthDay_y: [
			{ text: '1983', value: '1983' },
			{ text: '1984', value: '1984' },
			{ text: '1985', value: '1985' },
			{ text: '1986', value: '1986' },
			{ text: '1987', value: '1987' },
			{ text: '1988', value: '1988' },
			{ text: '1989', value: '1989' },
			{ text: '1990', value: '1990' },
			{ text: '1991', value: '1991' },
			{ text: '1992', value: '1992' },
			{ text: '1993', value: '1993' },
			{ text: '1994', value: '1994' },
			{ text: '1995', value: '1995' },
			{ text: '1996', value: '1996' },
			{ text: '1997', value: '1997' },
			{ text: '1998', value: '1998' },
			{ text: '1999', value: '1999' },
			{ text: '2000', value: '2000' },
			{ text: '2001', value: '2001' },
			{ text: '2002', value: '2002' },
			{ text: '2003', value: '2003' },
			{ text: '2004', value: '2004' },
			{ text: '2005', value: '2005' },
			{ text: '2006', value: '2006' },
			{ text: '2007', value: '2007' },
			{ text: '2008', value: '2008' },
			{ text: '2009', value: '2009' },
			{ text: '2010', value: '2010' },
			{ text: '2011', value: '2011' },
			{ text: '2012', value: '2012' },
			{ text: '2013', value: '2013' },
			{ text: '2014', value: '2014' },
			{ text: '2015', value: '2015' },
			{ text: '2016', value: '2016' },
			{ text: '2017', value: '2017' },
			{ text: '2018', value: '2018' },
			{ text: '2019', value: '2019' },
			{ text: '2020', value: '2020' },
			{ text: '2021', value: '2021' }
			],
		birthDay_m: [
			{ text: '1', value: '1' },
			{ text: '2', value: '2' },
			{ text: '3', value: '3' },
			{ text: '4', value: '4' },
			{ text: '5', value: '5' },
			{ text: '6', value: '6' },
			{ text: '7', value: '7' },
			{ text: '8', value: '8' },
			{ text: '9', value: '9' },
			{ text: '10', value: '10' },
			{ text: '11', value: '11' },
			{ text: '12', value: '12' }
		],
	    birthDay_d: [
			{ text: '1', value: '1' },
			{ text: '2', value: '2' },
			{ text: '3', value: '3' },
			{ text: '4', value: '4' },
			{ text: '5', value: '5' },
			{ text: '6', value: '6' },
			{ text: '7', value: '7' },
			{ text: '8', value: '8' },
			{ text: '9', value: '9' },
			{ text: '10', value: '10' },
			{ text: '11', value: '11' },
			{ text: '12', value: '12' },
			{ text: '13', value: '13' },
			{ text: '14', value: '14' },
			{ text: '15', value: '15' },
			{ text: '16', value: '16' },
			{ text: '17', value: '17' },
			{ text: '18', value: '18' },
			{ text: '19', value: '19' },
			{ text: '20', value: '20' },
			{ text: '21', value: '21' },
			{ text: '22', value: '22' },
			{ text: '23', value: '23' },
			{ text: '24', value: '24' },
			{ text: '25', value: '25' },
			{ text: '26', value: '26' },
			{ text: '27', value: '27' },
			{ text: '28', value: '28' },
			{ text: '29', value: '29' },
			{ text: '30', value: '30' },
			{ text: '31', value: '31' }
		],
		birthDay_d_slice: '',
		age: '',
		sign: '',
		zodiac: '',
		sex: [
			{ text: '男',     value: '1' },
			{ text: '女',     value: '2' },
			{ text: '非選択', value: '3' }
		],
		bloodType: [
			{ text: 'A',  value: '1' },
			{ text: 'B',  value: '2' },
			{ text: 'O',  value: '3' },
			{ text: 'AB', value: '4' }
		],
		postalCode: '',
		searchPostCode: '郵便番号検索',
		prefecture: [
			{ text: '北海道', value: '1' },
			{ text: '青森県', value: '2' },
			{ text: '岩手県', value: '3' },
			{ text: '宮城県', value: '4' },
			{ text: '秋田県', value: '5' },
			{ text: '山形県', value: '6' },
			{ text: '福島県', value: '7' },
			{ text: '茨城県', value: '8' },
			{ text: '栃木県', value: '9' },
			{ text: '群馬県', value: '10' },
			{ text: '埼玉県', value: '11' },
			{ text: '千葉県', value: '12' },
			{ text: '東京都', value: '13' },
			{ text: '神奈川県', value: '14' },
			{ text: '新潟県', value: '15' },
			{ text: '富山県', value: '16' },
			{ text: '石川県', value: '17' },
			{ text: '福井県', value: '18' },
			{ text: '山梨県', value: '19' },
			{ text: '長野県', value: '20' },
			{ text: '岐阜県', value: '21' },
			{ text: '静岡県', value: '22' },
			{ text: '愛知県', value: '23' },
			{ text: '三重県', value: '24' },
			{ text: '滋賀県', value: '25' },
			{ text: '京都府', value: '26' },
			{ text: '大阪府', value: '27' },
			{ text: '兵庫県', value: '28' },
			{ text: '奈良県', value: '29' },
			{ text: '和歌山県', value: '30' },
			{ text: '鳥取県', value: '31' },
			{ text: '島根県', value: '32' },
			{ text: '岡山県', value: '33' },
			{ text: '広島県', value: '34' },
			{ text: '山口県', value: '35' },
			{ text: '徳島県', value: '36' },
			{ text: '香川県', value: '37' },
			{ text: '愛媛県', value: '38' },
			{ text: '高知県', value: '39' },
			{ text: '福岡県', value: '40' },
			{ text: '佐賀県', value: '41' },
			{ text: '長崎県', value: '42' },
			{ text: '熊本県', value: '43' },
			{ text: '大分県', value: '44' },
			{ text: '宮崎県', value: '45' },
			{ text: '鹿児島県', value: '46' },
			{ text: '沖縄県', value: '47' }
		],
		municipality: '',
		address: '',
		apartment: '',
		phoneNumber: '',
		profession: [
			{ text: '学生', value: '1' },
			{ text: '会社員', value: '2' },
			{ text: '個人事業主', value: '3' },
			{ text: '主婦・主夫', value: '4' },
			{ text: '無職', value: '5' },
			{ text: 'その他', value: '6' }
		],
		registExe: '登録する',
		isRegist: true,
	},
	methods: {
		checkRegist: function() {
			this.isRegist = (
				this.fullName == '' 
				|| this.fullNameKana == ''
				|| this.birthDay_y == ''
				|| this.birthDay_m == ''
				|| this.birthDay_d == ''
				|| this.age == ''
				|| this.sex == ''
				|| this.postalCode == ''
				|| this.prefecture == ''
				|| this.municipality == ''
				|| this.address == ''
				|| this.phoneNumber == ''
			)
		},

		setRequired: function() {
				this.fullName = '山田　花子' 
				this.fullNameKana = 'ヤマダ　ハナコ'
				this.birthDay_y.text = '1983'
				this.birthDay_m.text = '7'
				this.birthDay_d.text = '8'
				this.age = '37'
				this.sign = '蟹座'
				this.zodiac = '亥'
				this.sex.text = '1'
				this.postalCode = '111-2222'
				this.prefecture.text = '13'
				this.municipality = '千代田区'
				this.address = '永田町'
				this.phoneNumber = '080-1111-2222'
				this.isRegist = false
		},

		automaticCalculation: function() {
			let y = birthDay_y.value
			let m = birthDay_m.value
			let d = birthDay_d.value
			this.age = this.ageCalc(y, m, d)
			this.sign = this.signCalc(this.toStringPadStart2(m) + this.toStringPadStart2(d))
			this.zodiac = this.zodiacCalc(y)

			let preLength = this.birthDay_d_slice.length
			this.birthDay_d_slice = this.birthDay_d.slice(0, this.dayCalc(y, m))
			// 設定してある日が変更後の月に存在しない場合、日をリセットする
			if (preLength < this.birthDay_d.value) {
				this.birthDay_d.value = "";
			}
		},

		dayCalc: function(y, m) {
			return new Date(y, m, 0).getDate();
		},

		ageCalc: function(y, m, d) {
			if(y && m && d) {
				birthDay = this.dateFormat_yyyyMMdd(new Date(y, m-1, d));
				return Math.floor((this.dateFormat_yyyyMMdd() - birthDay) /10000);
			}
			return ""
		},

		signCalc: function(md) {
			if (md) {
				const list = ["牡羊座","牡牛座","双子座","蟹座","獅子座","乙女座","天秤座","蠍座","射手座","山羊座","水瓶座","魚座"];
				num = -1
				if ("0321" <= md && md <= "0419") num = 0
				else if ("0420" <= md && md <= "0520") num = 1
				else if ("0521" <= md && md <= "0621") num = 2
				else if ("0622" <= md && md <= "0722") num = 3
				else if ("0723" <= md && md <= "0822") num = 4
				else if ("0823" <= md && md <= "0922") num = 5
				else if ("0923" <= md && md <= "1023") num = 6
				else if ("1024" <= md && md <= "1122") num = 7
				else if ("1123" <= md && md <= "1221") num = 8
				else if ("1222" <= md || (md >= "0101" && md <= "0119")) num = 9
				else if ("0120" <= md && md <= "0218") num = 10
				else if ("0219" <= md && md <= "0320") num = 11
				return list[num]
			}
			return "";
		},

		zodiacCalc: function(y) {
			if (y) {
				const list= ["申","酉","戌","亥","子","丑","寅","卯","辰","巳","午","未"];
				return list[y % 12];
			}
			return "";
		},

		dateFormat_yyyyMMdd: function(date) {
			if (date) {
				return date.getFullYear() + this.toStringPadStart2(date.getMonth()) + this.toStringPadStart2(date.getDate());
			}
			let d = new Date();
			return d.getFullYear() + this.toStringPadStart2(d.getMonth()+1) + this.toStringPadStart2(d.getDate());
		},

		toStringPadStart2: function(val) {
			return val.toString().padStart(2, '0')
		},
	}
});

