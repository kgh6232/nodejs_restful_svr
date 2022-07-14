const express = require("express");
const catchbot = require("./catchbot/catchbot")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* 테스트 */
app.post("/catchbot/test", function(req, res) {
  res.json({ok:true, message: catchbot.catchbotTest()})
});

/* 본인당행계좌조회 */
app.post("/catchbot/ourBankMyAccountInfo", function(req, res) {
	res.json(catchbot.ourBankMyAccountInfo(req))
});

/* 타인당행계좌조회 */
app.post("/catchbot/ourBankAccountInfo", function(req, res) {
	res.json(catchbot.ourBankAccountInfo(req))
});

/* 당행계좌이체 */
app.post("/catchbot/ourBankTransfer", function(req, res) {
	res.json(catchbot.ourBankTransfer(req))
});

/* 타행계좌조회 */
app.post("/catchbot/otherBankAccountInfo", function(req, res) {
	res.json(catchbot.otherBankAccountInfo(req))
});

/* 타행계좌이체 */
app.post("/catchbot/otherBankTransfer", function(req, res) {
	res.json(catchbot.otherBankTransfer(req))
});

/* 입출금내역조회 */
app.post("/catchbot/inquiry", function(req, res) {
	res.json(catchbot.inquiry(req))
});

/* 콜백등록 */
app.post("/catchbot/regiCallback", function(req, res) {
	res.json(catchbot.registCallBack(req))
});



app.listen(3000, () => console.log("Listening on port 3000..."));

