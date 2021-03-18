var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "47052",
        "ok": "45940",
        "ko": "1112"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "974",
        "ok": "974",
        "ko": "69"
    },
    "meanResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "10"
    },
    "standardDeviation": {
        "total": "31",
        "ok": "32",
        "ko": "8"
    },
    "percentiles1": {
        "total": "4",
        "ok": "3",
        "ko": "8"
    },
    "percentiles2": {
        "total": "5",
        "ok": "4",
        "ko": "11"
    },
    "percentiles3": {
        "total": "9",
        "ok": "8",
        "ko": "22"
    },
    "percentiles4": {
        "total": "31",
        "ok": "31",
        "ko": "46"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 45914,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 26,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1112,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "124.148",
        "ok": "121.214",
        "ko": "2.934"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "47052",
        "ok": "45940",
        "ko": "1112"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "974",
        "ok": "974",
        "ko": "69"
    },
    "meanResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "10"
    },
    "standardDeviation": {
        "total": "31",
        "ok": "32",
        "ko": "8"
    },
    "percentiles1": {
        "total": "4",
        "ok": "3",
        "ko": "8"
    },
    "percentiles2": {
        "total": "5",
        "ok": "4",
        "ko": "11"
    },
    "percentiles3": {
        "total": "9",
        "ok": "8",
        "ko": "22"
    },
    "percentiles4": {
        "total": "31",
        "ok": "30",
        "ko": "46"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 45914,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 26,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1112,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "124.148",
        "ok": "121.214",
        "ko": "2.934"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
