module.exports = {
    test() {
        var nem = require("../src/index.js");
        var nis = new nem("http://bob.nem.ninja:8765");
        nis.get("/account/get", {"address": "TDADSXXYDXV76YS5KBJZHGHSKDSDEKS3Q2UNLZAC"}, function (response) {
            console.log(response.body);
        });
        nis.post("/account/unlocked/info", {}, function (response) {
            console.log(response.body);
        });
        console.log("It works!");
    }
};
