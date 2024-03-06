import { Payslip } from "../types";

const payslipsSlice: {[payslipId: string]: Payslip} = {
    "1a2b3c4d5e": {
        id: "1a2b3c4d5e",
        fromDate: 1646332800000, // February 3, 2022
        toDate: 1649007599000, // March 3, 2022
        file: "https://picsum.photos/200/300"
    },
    "6f7g8h9i0j": {
        id: "6f7g8h9i0j",
        fromDate: 1643658000000, // February 1, 2022
        toDate: 1646332799000, // February 2, 2022
        file: "https://picsum.photos/200/300"
    },
    "k1l2m3n4o5": {
        id: "k1l2m3n4o5",
        fromDate: 1651429200000, // May 1, 2022
        toDate: 1654107599000, // May 31, 2022
        file: "https://picsum.photos/200/300"
    },
    "p6q7r8s9t0u": {
        id: "p6q7r8s9t0u",
        fromDate: 1654107600000, // June 1, 2022
        toDate: 1656699599000, // June 30, 2022
        file: "https://picsum.photos/200/300"
    },
    "v1w2x3y4z5": {
        id: "v1w2x3y4z5",
        fromDate: 1656786000000, // July 1, 2022
        toDate: 1659464399000, // July 31, 2022
        file: "https://picsum.photos/200/300"
    },
    "a6b7c8d9e0f": {
        id: "a6b7c8d9e0f",
        fromDate: 1659464400000, // August 1, 2022
        toDate: 1662142799000, // August 31, 2022
        file: "https://picsum.photos/200/300"
    },
    "g1h2i3j4k5l": {
        id: "g1h2i3j4k5l",
        fromDate: 1662142800000, // September 1, 2022
        toDate: 1664734799000, // September 30, 2022
        file: "https://picsum.photos/200/300"
    },
    "m6n7o8p9q0r": {
        id: "m6n7o8p9q0r",
        fromDate: 1664734800000, // October 1, 2022
        toDate: 1667413199000, // October 31, 2022
        file: "payslip8.pdf"
    },
    "s1t2u3v4w5x": {
        id: "s1t2u3v4w5x",
        fromDate: 1667413200000, // November 1, 2022
        toDate: 1670005199000, // November 30, 2022
        file: "https://picsum.photos/200/300"
    },
    "y6z7a8b9c0d": {
        id: "y6z7a8b9c0d",
        fromDate: 1670005200000, // December 1, 2022
        toDate: 1672683599000, // December 31, 2022
        file: "https://picsum.photos/200/300"
    }
};

export default payslipsSlice;