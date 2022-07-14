
/* 테스트 */
function catchbotTest() {
	return "catchbot-test";
}
exports.catchbotTest = catchbotTest;

/* 본인당행계좌조회 */
function ourBankMyAccountInfo(req) {
	let state = 9
	let money = ''
	const {birthday, account, accountPass} = req.body

	if(birthday==undefined || account==undefined || accountPass==undefined)
	{
		console.log('ourBankMyAccountInfo|arguments is wrong. (birthday:%s | account:%s | accountPass:%s)', birthday, account, accountPass)
		state = 9
	}
	else
	{	
		if(birthday.length>0 && account.length>0 && accountPass.length>0) {
			state = 1
			money = '123,456,789'
		}
		else
		{
			console.log('ourBankMyAccountInfo|arguments is wrong. (birthday:%s | account:%s | accountPass:%s)', birthday, account, accountPass)
			state = 9
		}
	}

	return {state, money}
}
exports.ourBankMyAccountInfo = ourBankMyAccountInfo;

/* 당행계좌조회 */
function ourBankAccountInfo(req) {
	let state = 9
	let name = ''
	const {account} = req.body

	if(account==undefined)
	{
		console.log('ourBankAccountInfo|arguments is wrong. (account:%s)', account)
		state = 9
	}
	else
	{	
		if(account.length>0) {
			state = 1
			name = '김동환'
		}
		else
		{
			console.log('ourBankAccountInfo|arguments is wrong. (account:%s)', account)
			state = 9
		}
	}

	return {state, name}
}
exports.ourBankAccountInfo = ourBankAccountInfo;

/* 당행계좌이체 */
function ourBankTransfer(req) {
	let result = 0
	let reason = ''
	const {outAccount, outAccountPass, inAccount, money} = req.body

	if(outAccount==undefined || outAccountPass==undefined || inAccount==undefined || money==undefined)
	{
		console.log('ourBankTransfer|arguments is wrong. (outAccount:%s | outAccountPass:%s | inAccount:%s | money:%s)', outAccount, outAccountPass, inAccount, money)
		result = 0
		reason = '이체하기위한 정보가 부족합니다.'
	}
	else
	{	
		if(outAccount.length>0 && outAccountPass.length>0 && inAccount.length>0 && money.length>0) {
			result = 1
		}
		else
		{
			console.log('ourBankTransfer|arguments is wrong. (outAccount:%s | outAccountPass:%s | inAccount:%s | money:%s)', outAccount, outAccountPass, inAccount, money)
			reason = '이체하기위한 정보가 부족합니다.'
		}
	}

	return {result, reason}	
}
exports.ourBankTransfer = ourBankTransfer;

/* 타행계좌조회 */
function otherBankAccountInfo(req) {
	let state = 9
	let name = ''
	const {bank, account} = req.body

	if(bank==undefined || account==undefined)
	{
		console.log('otherBankAccountInfo|arguments is wrong. (bank:%s | account:%s)', bank, account)
		state = 9
	}
	else
	{	
		if(account.length>0) {
			state = 1
			name = '정성무'
		}
		else
		{
			console.log('otherBankAccountInfo|arguments is wrong. (bank:%s | account:%s)', bank, account)
			state = 9
		}
	}

	return {state, name}
}
exports.otherBankAccountInfo = otherBankAccountInfo;

/* 타행계좌이체 */
function otherBankTransfer(req) {
	let result = 0
	let reason = ''
	const {outAccount, outAccountPass, inBank, inAccount, money} = req.body

	if(outAccount==undefined || outAccountPass==undefined || inBank==undefined || inAccount==undefined || money==undefined)
	{
		console.log('otherBankTransfer|arguments is wrong. (outAccount:%s | outAccountPass:%s | inBank:%s | inAccount:%s | money:%s)', outAccount, outAccountPass, inBank, inAccount, money)
		result = 0
		reason = '이체하기위한 정보가 부족합니다.'
	}
	else
	{	
		if(outAccount.length>0 && outAccountPass.length>0 && inBank.length>0 && inAccount.length>0 && money.length>0) {
			result = 1
		}
		else
		{
			console.log('otherBankTransfer|arguments is wrong. (outAccount:%s | outAccountPass:%s | inAccount:%s | money:%s)', outAccount, outAccountPass, inAccount, money)
			reason = '이체하기위한 정보가 부족합니다.'
		}
	}

	return {result, reason}
}
exports.otherBankTransfer = otherBankTransfer;

/* 입출금내역조회 */
function inquiry(req) {
	let result = 0
	let reason = ''
	let history = ''
	const {birthday, account, accountPass, type, date} = req.body

	if(birthday==undefined || account==undefined || accountPass==undefined || type==undefined)
	{
		console.log('inquiry|arguments is wrong. (birthday:%s | account:%s | accountPass:%s | type:%d | date:%s)', birthday, account, accountPass, type, date)
		result = 0
		reason = '계좌 정보를 조회하기위한 정보가 부족합니다.'
	}
	else
	{
		if(birthday.length>0 && account.length>0 && accountPass.length>0 && type>=0)
		{
			result = 1
			if(type == 1)
			{
				if(date==undefined || date.length<=0)
				{
					result = 0
					reason = '지정일자조회를 위한 날짜가 필요합니다.'
				}
				else
				{
					history = ['2022년 7월 14일 만랩커피 4,000원 출금']
				}
			}
			else
			{
				history = ['2022년 7월 14일 만랩커피 4,000원 출금']
			}
		}
		else
		{
			console.log('inquiry|arguments is wrong. (outAccount:%s | outAccountPass:%s | inAccount:%s | money:%s)', outAccount, outAccountPass, inAccount, money)
			reason = '계좌 정보를 조회하기위한 정보가 부족합니다.'
		}
	}

	return {result, reason, history}
}
exports.inquiry = inquiry;

/* 콜백등록 */
function registCallBack(req) {
	let result = 0
	let reason = ''
	const {ani, date, time, menu} = req.body

	if(ani==undefined || date==undefined || time==undefined || menu==undefined)
	{
		console.log('registCallBack|arguments is wrong. (ani:%s | date:%s | time:%s | menu:%s)', ani, date, time, menu)
		result = 0
		reason = '콜백등록을 하기위한 정보가 부족합니다.'
	}
	else
	{
		if(ani.length>0 && date.length>0 && time.length>0 && menu.length>0)
		{
			result = 1
		}
		else
		{
			console.log('registCallBack|arguments is wrong. (ani:%s | date:%s | time:%s | menu:%s)', ani, date, time, menu)
			reason = '콜백등록을 하기위한 정보가 부족합니다.'
		}
	}

	return {result, reason}
}
exports.registCallBack = registCallBack;


