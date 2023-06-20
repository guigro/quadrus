var Ke = (e, s) => () => (s || e((s = {
    exports: {}
}).exports, s), s.exports);
var Ce = (e, s, t) => new Promise((l, i) => {
    var n = a => {
            try {
                c(t.next(a))
            } catch (r) {
                i(r)
            }
        },
        o = a => {
            try {
                c(t.throw(a))
            } catch (r) {
                i(r)
            }
        },
        c = a => a.done ? l(a.value) : Promise.resolve(a.value).then(n, o);
    c((t = t.apply(e, s)).next())
});
import {
    c as g,
    a as Ue,
    b as we,
    d as Qe,
    p as K,
    m as Ve,
    u as Ae,
    t as k,
    s as de,
    e as $,
    f as N,
    g as oe,
    h as _,
    i as ee,
    o as ve,
    j as d,
    k as Q,
    l as F,
    n as se,
    q as Ye,
    N as Se,
    D as Xe,
    r as Je,
    R as Ze,
    v as es,
    L as ss,
    w as be,
    x as as,
    y as ts,
    z as rs,
    A as os
} from "./vendor.92a689d9.js";
import {
    lang,
    keyboardLayout,
    keyboardLayoutReversed,
    wordList,
    wordPick,
    examples,
    rules,
    supporters
} from "/assets/lang/af.js";
var et = Ke(Fe => {
    const is = function() {
        const s = document.createElement("link").relList;
        if (s && s.supports && s.supports("modulepreload")) return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]')) l(i);
        new MutationObserver(i => {
            for (const n of i)
                if (n.type === "childList")
                    for (const o of n.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && l(o)
        }).observe(document, {
            childList: !0,
            subtree: !0
        });

        function t(i) {
            const n = {};
            return i.integrity && (n.integrity = i.integrity), i.referrerpolicy && (n.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? n.credentials = "include" : i.crossorigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
        }

        function l(i) {
            if (i.ep) return;
            i.ep = !0;
            const n = t(i);
            fetch(i.href, n)
        }
    };
    is();
    const xe = 2,
        Te = 2,
        J = xe * Te,
        M = 9,
        Z = 5,
        re = {
            year: 24 * 60 * 60 * 1e3 * 365,
            month: 24 * 60 * 60 * 1e3 * 365 / 12,
            day: 24 * 60 * 60 * 1e3,
            hour: 60 * 60 * 1e3,
            minute: 60 * 1e3,
            second: 1e3
        },
        ze = new Date("01/24/2022"),
        _e = re.day,
        Ne = "abcdefghijklmnopqrstuvwxyz",
        ls = keyboardLayout,
        ns = keyboardLayoutReversed,
        Ie = !!navigator.vibrate,
        ds = ["ipad simulator", "iphone simulator", "ipod simulator", "ipad", "iphone", "ipod"].indexOf(navigator.platform.toLowerCase()) >= 0 || navigator.userAgent.toLowerCase().includes("mac") && "ontouchend" in document,
        qe = "standalone" in window.navigator && window.navigator.standalone === !0;
    /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
    window.matchMedia("(display-mode: standalone)").matches;
    const us = navigator.share && navigator.canShare && navigator.canShare({
            text: "test share text"
        }),
        cs = navigator.share && navigator.canShare && navigator.canShare({
            text: "test share text",
            files: [new File([new Blob], "test.png", {
                type: "image/png"
            })]
        }),
        ms = ["gypsy", "gipsy", "mammy", "agora", "slave", "hussy"],
        ce = new Set(ms),
        X = wordPick,
        Le = new Set(X),
        gs = wordList,
        Ee = new Set(gs),
        L = (e, s, t) => {
            window.gtag && gtag(e, s, t)
        },
        S = e => {
            Ie && e && navigator.vibrate(1)
        },
        hs = (e, s) => {
            if ("RelativeTimeFormat" in Intl) {
                const i = new Intl.RelativeTimeFormat("en", {
                        numeric: "auto"
                    }),
                    n = s.valueOf() - e.valueOf();
                for (const o in re) {
                    const c = o;
                    if (Math.abs(n) > re[c] || o === "second") return i.format(Math.round(n / re[c]), c)
                }
                return `${n} ms`
            }
            const t = s.getTime() - e.getTime();
            let l = Math.floor(t / re.hour);
            return l > 1 ? + lang.in + " " + l + " " + lang.hours : (l = Math.floor(t / re.minute), l > 1 ? + lang.in + " " + l + " " + lang.minutes : + lang.in + " " + Math.floor(t / re.second) + " " + lang.seconds)
        },
        ys = e => {
            let s = e.length;
            for (; s--;) {
                const t = Math.floor(Math.random() * s);
                [e[s], e[t]] = [e[t], e[s]]
            }
            return e
        },
        Oe = (e, s) => {
            const t = s.split(""),
                l = e.split(""),
                i = new Array(Z).fill("none"),
                n = {};
            for (let o = 0; o < Z; o++) n[l[o]] = 0;
            for (let o = 0; o < Z; o++) t[o] === l[o] && (t[o] = " ", n[l[o]] = 2, l[o] = " ", i[o] = "correct");
            for (let o = 0; o < Z; o++) t.indexOf(l[o]) !== -1 && t[o] !== l[o] && l[o] !== " " && (n[l[o]] != 2 && (n[l[o]] = 1), t[t.indexOf(l[o])] = " ", i[o] = "diff");
            return i
        },
        pe = (e, s) => {
            const t = [
                [],
                [],
                [],
                []
            ];
            for (let l = 0; l < s.length; l++) {
                const i = e.indexOf(s[l]);
                for (let n = 0; n < e.length; n++)(n <= i || i === -1) && t[l].push(Oe(e[n], s[l]))
            }
            return t
        },
        ne = e => {
            let s;
            const t = new Ve(e);
            t.random_int31(), t.random_int31(), t.random_int31(), t.random_int31();
            do s = [X[t.random_int31() % X.length], X[t.random_int31() % X.length], X[t.random_int31() % X.length], X[t.random_int31() % X.length]]; while (s[0] === s[1] || s[0] === s[2] || s[0] === s[3] || s[1] === s[2] || s[1] === s[3] || s[2] === s[3] || ce.has(s[0]) || ce.has(s[1]) || ce.has(s[2]) || ce.has(s[3]));
            return s
        };

    function bs() {
        const e = new Date,
            s = (e.getTime() - ze.getTime()) / _e >> 0,
            t = {
                daily: {
                    seed: 0,
                    guesses: [],
                    answers: [],
                    current: "",
                    states: [
                        [],
                        [],
                        [],
                        []
                    ],
                    answersCorrect: [-1, -1, -1, -1],
                    history: new Array(M + 4).fill(0),
                    currentStreak: 0,
                    maxStreak: 0
                },
                free: {
                    seed: 0,
                    guesses: [],
                    answers: [],
                    current: "",
                    states: [
                        [],
                        [],
                        [],
                        []
                    ],
                    answersCorrect: [-1, -1, -1, -1],
                    history: new Array(M + 4).fill(0),
                    currentStreak: 0,
                    maxStreak: 0
                },
                darkMode: !0,
                colorblind: !1,
                vibration: !0,
                enterBsReversed: !1,
                keyboardHeight: 1,
                gameSize: "compact"
            },
            l = window.matchMedia("(prefers-color-scheme: dark)").matches;
        try {
            const o = window.localStorage.getItem("dark_mode");
            o === null ? t.darkMode = l : t.darkMode = o === "true"
        } catch (o) {
            t.darkMode = l
        }
        try {
            const o = window.localStorage.getItem("colorblind");
            o === null ? t.colorblind = !1 : t.colorblind = o === "true"
        } catch (o) {
            t.colorblind = !1
        }
        try {
            const o = window.localStorage.getItem("vibration");
            o === null ? t.vibration = !0 : t.vibration = o === "true"
        } catch (o) {
            t.vibration = !0
        }
        try {
            const o = window.localStorage.getItem("enter_bs_reversed");
            o === null ? t.enterBsReversed = !1 : t.enterBsReversed = o === "true"
        } catch (o) {
            t.enterBsReversed = !1
        }
        try {
            const o = window.localStorage.getItem("keyboard_height");
            o === null ? t.keyboardHeight = 1 : t.keyboardHeight = Number(o)
        } catch (o) {
            t.keyboardHeight = 1
        }
        try {
            const o = window.localStorage.getItem("game_size");
            o === null || o !== "minimal" && o !== "compact" && o !== "full" ? t.gameSize = "compact" : t.gameSize = o
        } catch (o) {
            t.gameSize = "compact"
        }["daily", "free"].forEach(o => {
            let c;
            try {
                const a = Number(window.localStorage.getItem("last_" + o)),
                    r = window.localStorage.getItem(o + "_guesses") || "",
                    u = window.localStorage.getItem(o + "_history"),
                    m = u ? u.split(",").map(Number) : new Array(M + 4).fill(0),
                    h = Number(window.localStorage.getItem(o + "_current_streak") || 0),
                    y = Number(window.localStorage.getItem(o + "_max_streak") || 0);
                if (a && (o === "free" || a === s)) {
                    const p = r ? r.split(",") : [],
                        f = ne(a);
                    c = {
                        seed: a,
                        guesses: p,
                        answers: f,
                        current: "",
                        states: pe(p, f),
                        answersCorrect: [0, 1, 2, 3].map(j => p.indexOf(f[j])),
                        history: m,
                        currentStreak: h,
                        maxStreak: y
                    }, L("event", "restore", {
                        mode: o,
                        daily_seed: o === "daily" ? a : void 0
                    })
                } else {
                    const p = o === "daily" ? s : e.getTime(),
                        f = ne(p);
                    c = {
                        seed: p,
                        guesses: [],
                        answers: f,
                        current: "",
                        states: pe([], f),
                        answersCorrect: [-1, -1, -1, -1],
                        history: m,
                        currentStreak: h,
                        maxStreak: y
                    }, L("event", "start", {
                        mode: o,
                        daily_seed: o === "daily" ? p : void 0
                    })
                }
            } catch (a) {
                const r = o === "daily" ? s : e.getTime(),
                    u = ne(r);
                c = {
                    seed: r,
                    guesses: [],
                    answers: u,
                    current: "",
                    states: pe([], u),
                    answersCorrect: [-1, -1, -1, -1],
                    history: new Array(M + 4).fill(0),
                    currentStreak: 0,
                    maxStreak: 0
                }, L("event", "start", {
                    mode: o,
                    daily_seed: o === "daily" ? r : void 0
                })
            }
            t[o] = c
        });
        const [i, n] = Ue(t);
        return we(() => {
            try {
                window.localStorage.setItem("dark_mode", String(i.darkMode)), window.localStorage.setItem("colorblind", String(i.colorblind)), window.localStorage.setItem("vibration", String(i.vibration)), window.localStorage.setItem("enter_bs_reversed", String(i.enterBsReversed)), window.localStorage.setItem("keyboard_height", String(i.keyboardHeight)), window.localStorage.setItem("game_size", i.gameSize), ["daily", "free"].forEach(o => {
                    window.localStorage.setItem("last_" + o, String(i[o].seed)), window.localStorage.setItem(o + "_guesses", i[o].guesses.join(",")), window.localStorage.setItem(o + "_history", i[o].history.join(",")), window.localStorage.setItem(o + "_current_streak", String(i[o].currentStreak)), window.localStorage.setItem(o + "_max_streak", String(i[o].maxStreak))
                })
            } catch (o) {}
        }), [i, n]
    }
    const $e = Qe(),
        ps = e => {
            const [s, t] = bs(), l = a => s[a].guesses.length === M || s[a].answers.filter(r => s[a].guesses.indexOf(r) >= 0).length === 4, i = (a, r) => {
                t(K(u => {
                    u[a].current.length < 5 && !l(a) && (u[a].current += r)
                }))
            }, n = a => {
                t(K(r => {
                    r[a].current.length > 0 && !l(a) && (r[a].current = r[a].current.slice(0, -1))
                }))
            }, o = a => {
                t(K(r => {
                    if (r[a].current.length === 5 && (Le.has(r[a].current) || Ee.has(r[a].current)) && !l(a)) {
                        const u = r[a].current;
                        r[a].guesses.push(u), r[a].current = "";
                        for (let m = 0; m < J; m++) {
                            const h = r[a].guesses.indexOf(r[a].answers[m]);
                            (h === -1 || h === r[a].guesses.length - 1) && r[a].states[m].push(Oe(u, r[a].answers[m])), r[a].answersCorrect[m] = r[a].guesses.indexOf(r[a].answers[m])
                        }
                        if (L("event", "guess", {
                                mode: a,
                                daily_seed: a === "daily" ? r[a].seed : void 0,
                                word: u
                            }), l(a)) {
                            const m = r[a].answersCorrect.reduce((h, y) => h += y >= 0 ? 1 : 0, 0);
                            if (m === 4) {
                                const h = Math.max(...r[a].answersCorrect);
                                r[a].history[h]++, r[a].currentStreak++, r[a].currentStreak > r[a].maxStreak && (r[a].maxStreak = r[a].currentStreak), L("event", "win", {
                                    mode: a,
                                    daily_seed: a === "daily" ? r[a].seed : void 0,
                                    guesses: r[a].guesses,
                                    num_guesses: h + 1
                                })
                            } else r[a].history[M + m]++, r[a].currentStreak > 0 && L("event", "streak_reset", {
                                mode: a,
                                daily_seed: a === "daily" ? r[a].seed : void 0,
                                current_streak: r[a].currentStreak,
                                max_streak: r[a].maxStreak
                            }), r[a].currentStreak = 0, L("event", "loss", {
                                mode: a,
                                daily_seed: a === "daily" ? r[a].seed : void 0,
                                guesses: r[a].guesses,
                                total_correct: m
                            })
                        }
                    } else r[a].current = ""
                }))
            }, c = [s, {
                setDarkMode(a) {
                    t(K(r => {
                        r.darkMode = a
                    }))
                },
                setColorblind(a) {
                    t(K(r => {
                        r.colorblind = a
                    }))
                },
                setVibration(a) {
                    t(K(r => {
                        r.vibration = a
                    }))
                },
                setEnterBsReversed(a) {
                    t(K(r => {
                        r.enterBsReversed = a
                    }))
                },
                setKeyboardHeight(a) {
                    t(K(r => {
                        r.keyboardHeight = a
                    }))
                },
                setGameSize(a) {
                    t(K(r => {
                        r.gameSize = a
                    }))
                },
                sendKey(a, r) {
                    if (!r.ctrlKey)
                        if (r.key === "Backspace") n(a);
                        else if (r.key === "Enter") o(a);
                    else {
                        const u = r.key.toLowerCase();
                        if (Ne.indexOf(u) == -1) return;
                        i(a, u)
                    }
                },
                isGameComplete: l,
                addLetter: i,
                deleteLetter: n,
                submitCurrent: o,
                resetDailyIfOld() {
                    const r = (new Date().getTime() - ze.getTime()) / _e >> 0;
                    r !== s.daily.seed && t(K(u => {
                        u.daily.seed = r, u.daily.guesses = [], u.daily.answers = ne(r), u.daily.current = "", u.daily.states = [
                            [],
                            [],
                            [],
                            []
                        ], u.daily.answersCorrect = [-1, -1, -1, -1]
                    }))
                },
                resetFree() {
                    const a = new Date().getTime();
                    t(K(r => {
                        if (!l("free")) {
                            const u = r.free.answersCorrect.reduce((m, h) => m += h >= 0 ? 1 : 0, 0);
                            r.free.history[M + u]++, r.free.currentStreak > 0 && L("event", "streak_reset", {
                                mode: "free",
                                daily_seed: void 0,
                                current_streak: r.free.currentStreak,
                                max_streak: r.free.maxStreak
                            }), r.free.currentStreak = 0, L("event", "loss", {
                                mode: "free",
                                daily_seed: void 0,
                                guesses: r.free.guesses,
                                total_correct: u
                            }), L("event", "reset", {
                                mode: "free",
                                daily_seed: void 0,
                                guesses: r.free.guesses,
                                total_correct: u
                            })
                        }
                        r.free.seed = a, r.free.guesses = [], r.free.answers = ne(a), r.free.current = "", r.free.states = [
                            [],
                            [],
                            [],
                            []
                        ], r.free.answersCorrect = [-1, -1, -1, -1]
                    }))
                }
            }];
            return setInterval(() => {
                c[1].resetDailyIfOld()
            }, 1e3), g($e.Provider, {
                value: c,
                get children() {
                    return e.children
                }
            })
        },
        V = () => {
            const e = Ae($e);
            if (!e || !e.length) throw new Error("GamesDataContext has been used outside provider");
            return e
        },
        ks = k('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24px" height="24px"><rect x="0" y="0" width="12" height="12" fill="#919191"></rect><rect x="12" y="0" width="12" height="12"></rect><rect x="0" y="12" width="12" height="12"></rect><rect x="12" y="12" width="12" height="12"></rect></svg>'),
        fs = k('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"></path></svg>'),
        ws = k('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg>'),
        vs = k(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" fill="currentColor"><g><path d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"></path></g></svg>`),
        xs = k('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>'),
        zs = k('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path></svg>'),
        _s = k('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z"></path></svg>'),
        $s = k('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>'),
        js = k('<svg viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"></path></g></svg>'),
        Cs = k('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'),
        Ss = k('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>'),
        qs = k('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>'),
        Ms = k('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>'),
        Rs = k('<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M124 7408.71c0-8.08 10.32-13.186 16.916-6.892 3.532 3.36 4.143 8.902 1.248 12.951-3.591 4.92-8.282 4.193-12.76 4.193v-9.588c.041-2.117.747-3.943 3.324-4.816 2.245-.664 4.863.581 5.653 2.947.832 2.533-.374 4.234-1.787 5.272-1.413 1.039-3.616 1.039-5.07.042v3.279c3.138 1.5 8.105-.303 9.684-4.4 1.08-2.864.332-6.185-1.912-8.26-2.701-2.2-5.653-2.74-8.811-1.204-2.204 1.12-3.741 3.404-4.116 5.894v10.834h-2.327L124 7408.71z" transform="translate(-124 -7399)"></path></svg>'),
        Bs = k('<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>'),
        As = k('<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" class="h-[20px] w-[20px]" viewBox="0 0 24 24" fill="currentColor"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M16,5l-1.42,1.42l-1.59-1.59V16h-1.98V4.83L9.42,6.42L8,5l4-4L16,5z M20,10v11c0,1.1-0.9,2-2,2H6c-1.11,0-2-0.9-2-2V10 c0-1.11,0.89-2,2-2h3v2H6v11h12V10h-3V8h3C19.1,8,20,8.89,20,10z"></path></g></svg>'),
        Ts = k('<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>'),
        Ns = k('<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>'),
        Is = k('<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>'),
        Ls = k('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>'),
        Es = e => (() => {
            const s = ks.cloneNode(!0),
                t = s.firstChild,
                l = t.nextSibling,
                i = l.nextSibling,
                n = i.nextSibling;
            return de(s, e, !0, !0), $(o => {
                const c = e.colorblind ? "#fb923c" : "#00cc88",
                    a = e.colorblind ? "#fb923c" : "#00cc88",
                    r = e.colorblind ? "#60a5fa" : "#ffcc00";
                return c !== o._v$ && N(l, "fill", o._v$ = c), a !== o._v$2 && N(i, "fill", o._v$2 = a), r !== o._v$3 && N(n, "fill", o._v$3 = r), o
            }, {
                _v$: void 0,
                _v$2: void 0,
                _v$3: void 0
            }), s
        })(),
        Os = e => (() => {
            const s = fs.cloneNode(!0);
            return $(() => N(s, "height", (e.height ? e.height : 16) + "px")), s
        })(),
        Ds = e => (() => {
            const s = ws.cloneNode(!0);
            return $(() => N(s, "height", (e.height ? e.height : 16) + "px")), s
        })(),
        De = e => (() => {
            const s = vs.cloneNode(!0);
            return $(() => N(s, "height", (e.height ? e.height : 16) + "px")), s
        })(),
        Gs = e => (() => {
            const s = xs.cloneNode(!0);
            return $(t => {
                const l = (e.height ? e.height : 24) + "px",
                    i = (e.height ? e.height : 24) + "px";
                return l !== t._v$4 && N(s, "height", t._v$4 = l), i !== t._v$5 && N(s, "width", t._v$5 = i), t
            }, {
                _v$4: void 0,
                _v$5: void 0
            }), s
        })(),
        Ps = e => (() => {
            const s = zs.cloneNode(!0);
            return $(t => {
                const l = (e.height ? e.height : 24) + "px",
                    i = (e.height ? e.height : 24) + "px";
                return l !== t._v$6 && N(s, "height", t._v$6 = l), i !== t._v$7 && N(s, "width", t._v$7 = i), t
            }, {
                _v$6: void 0,
                _v$7: void 0
            }), s
        })(),
        Hs = e => (() => {
            const s = _s.cloneNode(!0);
            return $(t => {
                const l = (e.height ? e.height : 24) + "px",
                    i = (e.height ? e.height : 24) + "px";
                return l !== t._v$8 && N(s, "height", t._v$8 = l), i !== t._v$9 && N(s, "width", t._v$9 = i), t
            }, {
                _v$8: void 0,
                _v$9: void 0
            }), s
        })(),
        Fs = e => (() => {
            const s = $s.cloneNode(!0);
            return $(t => {
                const l = (e.height ? e.height : 24) + "px",
                    i = (e.height ? e.height : 24) + "px";
                return l !== t._v$10 && N(s, "height", t._v$10 = l), i !== t._v$11 && N(s, "width", t._v$11 = i), t
            }, {
                _v$10: void 0,
                _v$11: void 0
            }), s
        })(),
        Ws = e => (() => {
            const s = js.cloneNode(!0);
            return $(() => N(s, "height", (e.height ? e.height : 24) + "px")), s
        })(),
        Ks = () => Cs.cloneNode(!0),
        Us = e => (() => {
            const s = Ss.cloneNode(!0);
            return de(s, e, !0, !0), s
        })(),
        Qs = e => (() => {
            const s = qs.cloneNode(!0);
            return de(s, e, !0, !0), s
        })(),
        Vs = e => (() => {
            const s = Ms.cloneNode(!0);
            return de(s, e, !0, !0), s
        })(),
        Ys = e => (() => {
            const s = Rs.cloneNode(!0);
            return de(s, e, !0, !0), s
        })(),
        Xs = () => Bs.cloneNode(!0),
        Js = () => As.cloneNode(!0),
        Zs = () => Ts.cloneNode(!0),
        Me = () => Ns.cloneNode(!0),
        ea = () => Is.cloneNode(!0),
        sa = () => Ls.cloneNode(!0),
        aa = k('<button type="button"></button>'),
        ta = k('<div class="p-4 rounded-b-lg text-center bg-gray-300 dark:bg-gray-900 border-b-2 border-white dark:border-gray-800"><div class="text-3xl pb-2"></div></div>'),
        ra = k('<div class="flex items-center justify-center"><div class="ml-2">' + lang.newpractice + '</div></div>'),
        oa = k("<div>" + lang.nextdaily + " </div>"),
        ia = e => (() => {
            const s = aa.cloneNode(!0);
            return se(s, "click", e.onClick, !0), d(s, () => e.children), $(() => s.className = `text-lg min-h-[50px] text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 text-center dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:border-gray-800 dark:focus:ring-gray-900 ${e.class}`), s
        })(),
        la = e => {
            const [s, t] = V(), l = _(() => s[e.mode].answersCorrect.reduce((a, r) => a += r >= 0 ? 1 : 0, 0)), i = _(() => new Date(ze.getTime() + (s[e.mode].seed + 1) * _e)), [n, o] = ee(new Date), c = setInterval(() => o(new Date), 1e3);
            return ve(() => clearInterval(c)), (() => {
                const a = ta.cloneNode(!0),
                    r = a.firstChild;
                return d(r, (() => {
                    const u = Q(() => l() === 4, !0);
                    return () => u() ? lang.appname + lang.complete  : l() === 3 ? lang.soclose : lang.betterluck
                })()), d(a, (() => {
                    const u = Q(() => e.mode === "free", !0);
                    return () => u() ? g(ia, {
                        onClick: () => {
                            S(s.vibration), t.resetFree()
                        },
                        get children() {
                            const m = ra.cloneNode(!0),
                                h = m.firstChild;
                            return d(m, g(ea, {}), h), m
                        }
                    }) : (() => {
                        const m = oa.cloneNode(!0);
                        return m.firstChild, d(m, () => hs(n(), i()), null), m
                    })()
                })(), null), $(u => F(r, {
                    "text-green-600 dark:text-green-500": l() === 4,
                    "text-amber-600 dark:text-amber-400": l() === 3,
                    "text-orange-600 dark:text-orange-500": l() === 2,
                    "text-rose-600": l() <= 1
                }, u)), a
            })()
        };
    oe(["click"]);
    const H = e => {
            if (e < 0) return "\u{1F7E5}";
            if (e === 0) return "1\uFE0F\u20E3";
            if (e === 1) return "2\uFE0F\u20E3";
            if (e === 2) return "3\uFE0F\u20E3";
            if (e === 3) return "4\uFE0F\u20E3";
            if (e === 4) return "5\uFE0F\u20E3";
            if (e === 5) return "6\uFE0F\u20E3";
            if (e === 6) return "7\uFE0F\u20E3";
            if (e === 7) return "8\uFE0F\u20E3";
            if (e === 8) return "9\uFE0F\u20E3"
        },
        me = e => {
            let s = "";
            if (!e || e.length === 0) return "\u2B1B\u2B1B\u2B1B\u2B1B\u2B1B";
            for (let t = 0; t < e.length; t++) e[t] === "correct" ? s += "\u{1F7E9}" : e[t] === "diff" ? s += "\u{1F7E8}" : e[t] === "none" && (s += "\u2B1C");
            return s
        },
        ge = e => e ? e === "correct" ? "#00cc88" : e === "diff" ? "#ffcc00" : e === "none" ? "#e0e0e0" : "#2d2d2d" : "#2d2d2d";

    function le(e, s, t, l, i, n) {
        const o = {
            tl: n,
            tr: n,
            br: n,
            bl: n
        };
        e.beginPath(), e.moveTo(s + o.tl, t), e.lineTo(s + l - o.tr, t), e.quadraticCurveTo(s + l, t, s + l, t + o.tr), e.lineTo(s + l, t + i - o.br), e.quadraticCurveTo(s + l, t + i, s + l - o.br, t + i), e.lineTo(s + o.bl, t + i), e.quadraticCurveTo(s, t + i, s, t + i - o.bl), e.lineTo(s, t + o.tl), e.quadraticCurveTo(s, t, s + o.tl, t), e.closePath(), e.fill()
    }
    const Ge = (e, s) => {
            let t = "";
            e === "daily" ? t = lang.daily + lang.appname + s.seed.toString(10) + `
` + H(s.answersCorrect[0]) + H(s.answersCorrect[1]) + `
` + H(s.answersCorrect[2]) + H(s.answersCorrect[3]) : t = lang.practice + lang.appname + `
` + H(s.answersCorrect[0]) + H(s.answersCorrect[1]) + (" " + s.answers[0].toUpperCase() + " - " + s.answers[1].toUpperCase()) + `
` + H(s.answersCorrect[2]) + H(s.answersCorrect[3]) + (" " + s.answers[2].toUpperCase() + " - " + s.answers[3].toUpperCase()), t += lang.webaddress;
            const l = t;
            t += `
`;
            let i = M - 1;
            s.answersCorrect[0] >= 0 && s.answersCorrect[1] >= 0 && (i = Math.max(s.answersCorrect[0], s.answersCorrect[1]));
            let n = M - 1;
            s.answersCorrect[2] >= 0 && s.answersCorrect[3] >= 0 && (n = Math.max(s.answersCorrect[2], s.answersCorrect[3]));
            for (let o = 0; o <= i; o++) t += me(s.states[0][o]) + " " + me(s.states[1][o]) + `
`;
            t += `
`;
            for (let o = 0; o <= n; o++) t += me(s.states[2][o]) + " " + me(s.states[3][o]) + `
`;
            return [t, l]
        },
        he = (e, s, t) => Ce(Fe, null, function*() {
            const [l, i] = Ge(e, s);
            if (L("event", "share", {
                    mode: e,
                    share_type: t,
                    daily_seed: e === "daily" ? s.seed : void 0
                }), t === "clipboard") navigator.clipboard.writeText(l).then(() => alert(lang.copiedresults)).catch(n => {
                console.error(n), alert(lang.errorcopy)
            });
            else if (t === "share") navigator.share({
                text: l
            }).catch(n => console.error(n));
            else if (t === "image" || t === "image_save") {
                const n = document.createElement("canvas");
                n.style.display = "none";
                let o = M - 1;
                s.answersCorrect[0] >= 0 && s.answersCorrect[1] >= 0 && (o = Math.max(s.answersCorrect[0], s.answersCorrect[1]));
                let c = M - 1;
                s.answersCorrect[2] >= 0 && s.answersCorrect[3] >= 0 && (c = Math.max(s.answersCorrect[2], s.answersCorrect[3]));
                const a = 64,
                    r = a / 16,
                    u = a / 8,
                    m = .75,
                    h = a / 4;
                n.width = (a + r) * 11 - r, n.height = (a + r) * (o + 1 + c + 1 + 4) - r;
                const y = n.getContext("2d");
                if (!y) return;
                y.fillStyle = "black", y.fillRect(0, 0, n.width, n.height);
                let p = 0,
                    f = 0;
                for (let z = 0; z <= o; z++) {
                    let w = s.states[0][z];
                    for (p = 0; p < Z; p++) y.fillStyle = ge(w == null ? void 0 : w[p]), le(y, p * (a + r), f * (a + r), a, a, u);
                    for (w = s.states[1][z], p = 6; p < Z + 6; p++) y.fillStyle = ge(w == null ? void 0 : w[p - 6]), le(y, p * (a + r), f * (a + r), a, a, u);
                    f++
                }
                y.font = a * m + "px Arial", y.textAlign = "center", y.textBaseline = "alphabetic", y.fillStyle = "#ffffff";
                const j = e === "daily" ? lang.daily + lang.appname + " #" + s.seed.toString(10) : lang.practice + lang.appname;
                let b = y.measureText(j),
                    x = b.actualBoundingBoxAscent;
                y.fillText(j, n.width / 2, f * (a + r) + a - (a - x) / 2, n.width - h * 2), f++;
                for (let z = 0; z < 2; z++) {
                    for (let w = 0; w < 2; w++) {
                        y.fillStyle = s.answersCorrect[w + z * 2] >= 0 ? "#00a6ed" : "#f8312f";
                        const E = w * 2 - 1,
                            v = n.width / 2 + E * (r / 2) + E * (a / 2);
                        if (le(y, v - a / 2, f * (a + r), a, a, u), s.answersCorrect[w + z * 2] >= 0) {
                            y.textAlign = "center", y.fillStyle = "#ffffff";
                            const q = String(s.answersCorrect[w + z * 2] + 1);
                            b = y.measureText(q), x = b.actualBoundingBoxAscent + b.actualBoundingBoxDescent, y.fillText(q, v, f * (a + r) + a - (a - x) / 2, a)
                        }
                    }
                    if (e === "free") {
                        y.textAlign = "right", y.fillStyle = "#ffffff";
                        let w = s.answers[0 + z * 2].toUpperCase();
                        b = y.measureText(w), x = b.actualBoundingBoxAscent + b.actualBoundingBoxDescent, y.fillText(w, n.width / 2 - r / 2 - a - h, f * (a + r) + a - (a - x) / 2, n.width / 2 - r - a - h * 2), y.textAlign = "left", w = s.answers[1 + z * 2].toUpperCase(), b = y.measureText(w), x = b.actualBoundingBoxAscent + b.actualBoundingBoxDescent, y.fillText(w, n.width / 2 + r / 2 + a + h, f * (a + r) + a - (a - x) / 2, n.width / 2 - r - a - h * 2)
                    }
                    f++
                }
                y.textAlign = "center", y.textBaseline = "middle", y.fillStyle = "#ffffff", y.fillText(lang.webaddress, n.width / 2, f * (a + r) + a / 2, n.width), f++;
                for (let z = 0; z <= c; z++) {
                    p = 0;
                    let w = s.states[2][z];
                    for (p = 0; p < Z; p++) y.fillStyle = ge(w == null ? void 0 : w[p]), le(y, p * (a + r), f * (a + r), a, a, u);
                    for (w = s.states[3][z], p = 6; p < Z + 6; p++) y.fillStyle = ge(w == null ? void 0 : w[p - 6]), le(y, p * (a + r), f * (a + r), a, a, u);
                    f++
                }
                const C = yield new Promise(z => n.toBlob(z));
                if (!C) return;
                const I = lang.appname`-${e==="daily"?"daily":"practice"}-${s.seed}.png`,
                    A = new File([C], I, {
                        type: "image/png"
                    });
                t === "image" ? navigator.share({
                    files: [A],
                    text: i
                }).catch(z => console.error(z)) : t === "image_save" && Ye.saveAs(A, I)
            }
        }),
        na = k('<button type="button"></button>'),
        da = k('<div class="flex flex-col rounded-t-lg text-center bg-gray-300 dark:bg-gray-900 border-t-2 p-4 border-white dark:border-gray-800"><div class="text-2xl flex"><div class="flex flex-1 justify-end items-center"><span class="mr-4"></span><span class="font-[Arial]"></span></div><div class="flex flex-1 justify-start items-center"><span class="font-[Arial]"></span><span class="ml-4"></span></div></div><div class="text-2xl flex"><div class="flex flex-1 justify-end items-center"><span class="mr-4"></span><span class="font-[Arial]"></span></div><div class="flex flex-1 justify-start items-center"><span class="font-[Arial]"></span><span class="ml-4"></span></div></div><div class="flex items-center justify-center mt-2"></div><textarea class="font-[Courier] w-[100%] text-sm text-black dark:text-white bg-white dark:bg-gray-800 text-center rounded-lg mt-2 resize-none" rows="8" readonly></textarea></div>'),
        ua = k('<div class="flex items-center justify-center"><div class="ml-2">' + lang.share + '</div></div>'),
        ca = k('<div class="inline-flex" role="group"><button type="button" class="ml-2 text-lg min-h-[50px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-l-lg px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-r-[1px] border-gray-400"><div class="flex items-center justify-center"><div class="ml-2">' + lang.shareimage + '</div></div></button><button type="button" class="text-lg min-h-[50px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-r-lg px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"></button></div>'),
        ma = k('<div class="flex items-center justify-center"><div class="ml-2">' + lang.saveimage + '</div></div>'),
        ga = k('<div class="flex items-center justify-center"><div class="ml-2">' + lang.copyclipboard + '</div></div>'),
        ha = k('<div class="flex items-center justify-center mt-2"></div>'),
        ke = e => (() => {
            const s = na.cloneNode(!0);
            return se(s, "click", e.onClick, !0), d(s, () => e.children), $(() => s.className = `text-lg min-h-[50px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${e.class}`), s
        })(),
        ya = e => {
            const [s, t] = V(), [l, i] = ee(void 0), [n, o] = ee(!1), c = _(() => Ge(e.mode, s[e.mode])[0]);
            return (() => {
                const a = da.cloneNode(!0),
                    r = a.firstChild,
                    u = r.firstChild,
                    m = u.firstChild,
                    h = m.nextSibling,
                    y = u.nextSibling,
                    p = y.firstChild,
                    f = p.nextSibling,
                    j = r.nextSibling,
                    b = j.firstChild,
                    x = b.firstChild,
                    C = x.nextSibling,
                    I = b.nextSibling,
                    A = I.firstChild,
                    z = A.nextSibling,
                    w = j.nextSibling,
                    E = w.nextSibling;
                return d(m, () => s[e.mode].answers[0].toUpperCase()), d(h, () => H(s[e.mode].answersCorrect[0])), d(p, () => H(s[e.mode].answersCorrect[1])), d(f, () => s[e.mode].answers[1].toUpperCase()), d(x, () => s[e.mode].answers[2].toUpperCase()), d(C, () => H(s[e.mode].answersCorrect[2])), d(A, () => H(s[e.mode].answersCorrect[3])), d(z, () => s[e.mode].answers[3].toUpperCase()), d(w, us && g(ke, {
                    onClick: () => {
                        S(s.vibration), he(e.mode, s[e.mode], "share")
                    },
                    get children() {
                        const v = ua.cloneNode(!0),
                            q = v.firstChild;
                        return d(v, ds ? g(Js, {}) : g(Xs, {}), q), v
                    }
                }), null), d(w, cs ? (() => {
                    const v = ca.cloneNode(!0),
                        q = v.firstChild,
                        R = q.firstChild,
                        D = R.firstChild,
                        Y = q.nextSibling;
                    return q.$$click = () => {
                        S(s.vibration), he(e.mode, s[e.mode], "image")
                    }, d(R, g(De, {}), D), Y.$$click = () => {
                        S(s.vibration), he(e.mode, s[e.mode], "image_save")
                    }, d(Y, g(Me, {})), v
                })() : g(ke, {
                    class: "ml-2",
                    onClick: () => {
                        S(s.vibration), he(e.mode, s[e.mode], "image_save")
                    },
                    get children() {
                        const v = ma.cloneNode(!0),
                            q = v.firstChild;
                        return d(v, g(Me, {}), q), v
                    }
                }), null), d(a, (() => {
                    const v = Q(() => !!l(), !0);
                    return () => v() && (() => {
                        const q = ha.cloneNode(!0);
                        return d(q, g(ke, {
                            onClick: () => {
                                S(s.vibration), L("event", "share", {
                                    mode: e.mode,
                                    share_type: "clipboard",
                                    daily_seed: e.mode === "daily" ? s[e.mode].seed : void 0
                                }), o(!0);
                                const R = l();
                                if (R) {
                                    R.select(), document.execCommand("copy");
                                    const D = window.getSelection && window.getSelection();
                                    D && D.removeAllRanges(), R.blur()
                                }
                                alert(lang.copiedresults)
                            },
                            get children() {
                                const R = ga.cloneNode(!0),
                                    D = R.firstChild;
                                return d(R, g(Zs, {}), D), R
                            }
                        })), q
                    })()
                })(), E), i(E), d(E, c), $(v => {
                    const q = {
                            "text-green-600 dark:text-green-500": s[e.mode].answersCorrect[0] >= 0,
                            "text-rose-600": s[e.mode].answersCorrect[0] < 0
                        },
                        R = {
                            "text-green-600 dark:text-green-500": s[e.mode].answersCorrect[1] >= 0,
                            "text-rose-600": s[e.mode].answersCorrect[1] < 0
                        },
                        D = {
                            "text-green-600 dark:text-green-500": s[e.mode].answersCorrect[2] >= 0,
                            "text-rose-600": s[e.mode].answersCorrect[2] < 0
                        },
                        Y = {
                            "text-green-600 dark:text-green-500": s[e.mode].answersCorrect[3] >= 0,
                            "text-rose-600": s[e.mode].answersCorrect[3] < 0
                        },
                        ie = {
                            "absolute top-[100%]": !n()
                        };
                    return v._v$ = F(m, q, v._v$), v._v$2 = F(f, R, v._v$2), v._v$3 = F(x, D, v._v$3), v._v$4 = F(z, Y, v._v$4), v._v$5 = F(E, ie, v._v$5), v
                }, {
                    _v$: void 0,
                    _v$2: void 0,
                    _v$3: void 0,
                    _v$4: void 0,
                    _v$5: void 0
                }), a
            })()
        };
    oe(["click"]);
    const ba = k('<div class="quordle-box quordle-box-animate w-[20%]"><div class="quordle-box-content"> </div></div>'),
        Pe = e => (() => {
            const s = ba.cloneNode(!0),
                t = s.firstChild,
                l = t.firstChild;
            return $(i => {
                const n = {
                        "bg-box-correct": e.state === "correct" && !e.colorblind,
                        "bg-box-correct-alt": e.state === "correct" && e.colorblind,
                        "bg-box-diff": e.state === "diff" && !e.colorblind,
                        "bg-box-diff-alt": e.state === "diff" && e.colorblind,
                        "bg-gray-200 dark:bg-gray-700": e.state === "none" && e.rowTemporalState === "past",
                        "bg-gray-300 dark:bg-gray-600": e.rowTemporalState === "present",
                        "bg-gray-100 dark:bg-gray-900": e.rowTemporalState === "future" || e.rowTemporalState === "never",
                        "text-black": e.state === "correct" || e.state === "diff",
                        "text-rose-600": e.state === "invalid",
                        "text-black dark:text-white": e.state === "none",
                        "quordle-heartbeat-anim dark:quordle-heartbeat-anim-dark": e.activeCol === e.gameCol && e.rowTemporalState === "present",
                        "quordle-letter-anim": e.letter !== "" && e.rowTemporalState === "present",
                        "text-[0.75em]": e.rowTemporalState !== "present" && e.gameSize === "compact",
                        "text-[0.5em]": e.rowTemporalState !== "present" && e.gameSize === "minimal",
                        "pb-[calc(20%-0.25rem)]": e.gameRow === e.currentRow || e.gameSize === "full",
                        "pb-[calc(15%-0.25rem)]": e.gameRow !== e.currentRow && e.gameSize === "compact",
                        "pb-[calc(10%-0.25rem)]": e.gameRow !== e.currentRow && e.gameSize === "minimal"
                    },
                    o = e.letter;
                return i._v$ = F(s, n, i._v$), o !== i._v$2 && (l.data = i._v$2 = o), i
            }, {
                _v$: void 0,
                _v$2: void 0
            }), s
        })(),
        pa = e => {
            const s = e.gameX + e.gameY * xe,
                [t] = V(),
                l = _(() => t[e.mode].current.length),
                i = _(() => {
                    const a = t[e.mode],
                        r = a.current,
                        u = a.guesses,
                        m = a.answers[s],
                        h = u.indexOf(m);
                    return e.gameRow <= h || h === -1 && e.gameRow < u.length || h === -1 && e.gameRow === u.length && e.gameCol < r.length
                }),
                n = _(() => {
                    const a = t[e.mode],
                        r = a.guesses,
                        u = a.current;
                    let m = "";
                    if (i()) e.gameRow < r.length ? m = r[e.gameRow][e.gameCol] : e.gameRow === r.length && (m = u[e.gameCol]);
                    else return m;
                    return m.toUpperCase()
                }),
                o = _(() => {
                    var h;
                    const a = t[e.mode],
                        r = a.guesses,
                        u = a.states,
                        m = a.current;
                    if (i()) {
                        if (e.gameRow < r.length) return ((h = u[s][e.gameRow]) == null ? void 0 : h[e.gameCol]) || "none";
                        if (e.gameRow === r.length && m.length === 5 && !Ee.has(m) && !Le.has(m)) return "invalid"
                    }
                    return "none"
                }),
                c = _(() => {
                    const a = t[e.mode],
                        r = a.guesses,
                        u = a.answersCorrect[s];
                    return u !== -1 && u < e.gameRow ? "never" : r.length > e.gameRow ? "past" : e.gameRow === r.length ? "present" : "future"
                });
            return g(Pe, {
                get state() {
                    return o()
                },
                get letter() {
                    return n()
                },
                get gameRow() {
                    return e.gameRow
                },
                get gameCol() {
                    return e.gameCol
                },
                get rowTemporalState() {
                    return c()
                },
                get activeCol() {
                    return l()
                },
                get colorblind() {
                    return t.colorblind
                },
                get currentRow() {
                    return t[e.mode].guesses.length
                },
                get gameSize() {
                    return t.gameSize
                }
            })
        },
        ka = k('<div class="absolute flex flex-col bg-gray-100 dark:bg-gray-800 text-black dark:text-white z-20 right-4 rounded-lg border-2 border-gray-400"><button type="button" class="flex flex-row-reverse items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all my-4"><div class="mr-3 text-black dark:text-white">' + lang.settings + '</div></button><button type="button" class="flex flex-row-reverse items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4"><div class="mr-3 text-black dark:text-white"> ' + lang.stats + '</div></button><button type="button" class="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4"><a class="flex flex-row-reverse items-center " href="' + lang.donatelink + '" target="_blank"><div class="mr-3 text-black dark:text-white">' + lang.donate + '</div></a></button><button type="button" class="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4"><a class="flex flex-row-reverse items-center " href="' + lang.patreonlink + '" target="_blank"><div class="mr-3 text-black dark:text-white">' + lang.patreon + '</div></a></button></div>'),
        fa = k('<nav class="bg-slate-300 dark:bg-gray-900 w-screen border-b-2 border-white dark:border-gray-800"><div class="flex items-center max-w-[550px] m-auto px-4 py-2 relative"><span class="ml-3 text-black dark:text-white">' + lang.appname + '</span><div class="flex-1"><div class="flex mx-2"></div></div><div class="flex items-center"><button type="button" class="bg-indigo-500 dark:bg-gray-800 p-1 rounded-full text-white hover:text-gray-200 dark:text-gray-400 dark:hover:text-white transition-colors"></button><button type="button" class="bg-indigo-500 dark:bg-gray-800 p-1 rounded-full text-white hover:text-gray-200 dark:text-gray-400 dark:hover:text-white ml-2 transition"></button></div></div></nav>'),
        wa = e => {
            const [s, t] = V(), [l, i] = ee(!1), [n, o] = ee();
            return (() => {
                const c = fa.cloneNode(!0),
                    a = c.firstChild,
                    r = a.firstChild,
                    u = r.nextSibling,
                    m = u.firstChild,
                    h = u.nextSibling,
                    y = h.firstChild,
                    p = y.nextSibling;
                return d(a, g(Es, {
                    get colorblind() {
                        return s.colorblind
                    }
                }), r), d(m, g(Se, {
                    href: "/",
                    activeClass: "quordle-nav-active",
                    class: "quordle-nav",
                    onClick: () => S(s.vibration),
                    end: !0,
                    children: lang.daily
                }), null), d(m, g(Se, {
                    href: "/practice",
                    activeClass: "quordle-nav-active",
                    class: "quordle-nav",
                    onClick: () => S(s.vibration),
                    end: !0,
                    children: lang.practice
                }), null), se(y, "click", e.onOpenTutorial, !0), d(y, g(Ks, {})), p.$$click = () => S(s.vibration), (f => o(f))(p), d(p, g(Us, {})), d(a, g(Xe, {
                    class: "z-30",
                    menuButton: n,
                    open: l,
                    setOpen: i,
                    animation: {
                        name: "quordle-fade"
                    },
                    get children() {
                        const f = ka.cloneNode(!0),
                            j = f.firstChild,
                            b = j.firstChild,
                            x = j.nextSibling,
                            C = x.firstChild,
                            I = C.firstChild,
                            A = x.nextSibling,
                            z = A.firstChild,
                            w = z.firstChild,
                            E = A.nextSibling,
                            v = E.firstChild,
                            q = v.firstChild;
                        return j.$$click = () => {
                            i(!1), e.onOpenSettings()
                        }, d(j, g(Qs, {}), b), x.$$click = () => {
                            i(!1), e.onOpenStatistics()
                        }, d(x, g(sa, {}), C), d(C, () => e.mode === "daily" ? lang.daily : lang.practice, I), A.$$click = () => {
                            S(s.vibration), i(!1)
                        }, d(z, g(Vs, {}), w), E.$$click = () => {
                            S(s.vibration), i(!1)
                        }, d(v, g(Ys, {}), q), $(() => {
                            var R;
                            return f.style.setProperty("top", (((R = n()) == null ? void 0 : R.getBoundingClientRect().bottom) || 0) + 12 + "px")
                        }), f
                    }
                }), null), $(() => p.classList.toggle("rotate-180", l())), c
            })()
        };
    oe(["click"]);
    const va = k('<button class="quordle-key border-gray-300 dark:border-gray-700"><div class="quordle-box-content"></div></button>'),
        xa = k('<div class="w-full flex-col p-1 pb-1.5 bg-blue-200 dark:bg-cyan-900 rounded-t shadow"></div>'),
        za = k('<div class="flex w-full justify-center"></div>'),
        _a = e => {
            const [s, t] = V(), l = _(() => e.key.toLowerCase()), i = _(() => {
                if (e.key === "bs" || e.key === "enter") return !1;
                const o = s[e.mode].guesses;
                let c = !1;
                for (let a = 0; a < o.length; a++)
                    if (o[a].indexOf(l()) >= 0) {
                        c = !0;
                        break
                    }
                return c
            }), n = _(() => {
                const o = s[e.mode].guesses;
                if (!i()) return "";
                const c = {
                        none: s.darkMode ? "#9ca3af" : "#d1d5db",
                        diff: s.colorblind ? "#60a5fa" : "#ffcc00",
                        correct: s.colorblind ? "#fb923c" : "#00cc88"
                    },
                    a = [c.none, c.none, c.none, c.none];
                for (let r = 0; r < a.length; r++) {
                    const u = s[e.mode].states[r];
                    if (!(s[e.mode].answersCorrect[r] >= 0))
                        for (let m = 0; m < u.length; m++)
                            for (let h = 0; h < u[m].length; h++) l() === o[m][h] && (u[m][h] === "correct" || u[m][h] === "diff") && (u[m][h] === "correct" ? a[r] = c.correct : u[m][h] === "diff" && a[r] !== c.correct && (a[r] = c.diff))
                }
                return a.every(r => r === c.none) ? "" : "background: conic-gradient(" + a[1] + " 0deg 90deg, " + a[3] + " 90deg 180deg, " + a[2] + " 180deg 270deg, " + a[0] + " 270deg 360deg);"
            });
            return (() => {
                const o = va.cloneNode(!0),
                    c = o.firstChild;
                return o.$$click = () => {
                    S(s.vibration), t.sendKey(e.mode, new KeyboardEvent("keydown", {
                        keyCode: e.key === "enter" ? 13 : e.key === "bs" ? 8 : Ne.indexOf(e.key.toLowerCase()) + 65,
                        key: e.key === "enter" ? "Enter" : e.key === "bs" ? "Backspace" : e.key.toLowerCase()
                    }))
                }, d(c, (() => {
                    const a = Q(() => e.key === "enter", !0);
                    return () => a() ? g(Os, {
                        get height() {
                            return e.fontSize * .8
                        }
                    }) : (() => {
                        const r = Q(() => e.key === "bs", !0);
                        return () => r() ? g(Ds, {
                            get height() {
                                return e.fontSize * .8
                            }
                        }) : e.key
                    })()
                })()), $(a => {
                    const r = {
                            "w-[calc(10%-0.25rem)]": e.key !== "enter" && e.key !== "bs",
                            "w-[calc(15%-0.5rem)]": e.key === "enter" || e.key === "bs",
                            "text-black dark:text-black border-gray-400": !!n(),
                            "text-black dark:text-white bg-white dark:bg-gray-500": !n() && !i(),
                            "text-blue-300 dark:text-cyan-600 bg-blue-100 dark:bg-cyan-800 border-blue-200 dark:border-cyan-900": !n() && i()
                        },
                        u = "padding-bottom: calc(" + 10 * s.keyboardHeight + "% - 0.25rem);" + n();
                    return a._v$ = F(o, r, a._v$), a._v$2 = Je(o, u, a._v$2), a
                }, {
                    _v$: void 0,
                    _v$2: void 0
                }), o
            })()
        },
        $a = e => {
            const [s, t] = V();
            return (() => {
                const l = xa.cloneNode(!0);
                return d(l, () => (s.enterBsReversed ? ns : ls).map((i, n) => (() => {
                    const o = za.cloneNode(!0);
                    return d(o, () => i.map((c, a) => g(_a, {
                        get mode() {
                            return e.mode
                        },
                        x: a,
                        y: n,
                        key: c,
                        get fontSize() {
                            return e.fontSize
                        }
                    }))), o
                })())), l
            })()
        };
    oe(["click"]);

    function ja(e) {
        const [s, t] = ee([]), l = o => t(c => c.concat(o)), i = new Map, n = new Ze(o => {
            if (!!Array.isArray(o))
                for (const c of o) {
                    const a = Math.round(c.contentRect.width),
                        r = Math.round(c.contentRect.height),
                        u = i.get(c.target);
                    if (!u || u.width !== a || u.height !== r) {
                        const m = {
                            width: a,
                            height: r
                        };
                        e.onResize(m, c.target), i.set(c.target, {
                            width: a,
                            height: r
                        })
                    }
                }
        });
        return we(o => {
            let c = [];
            if (e.refs) {
                const a = typeof e.refs == "function" ? e.refs() : e.refs;
                Array.isArray(a) ? c = c.concat(a) : c.push(a)
            }
            return c = c.concat(s()), o = o || [], o.forEach(a => {
                a in c || (n.unobserve(a), i.delete(a))
            }), c.forEach(a => {
                a in o || n.observe(a)
            }), c
        }), ve(() => n.disconnect()), l
    }
    const Ca = k('<div class="flex items-center m-4"><label class="flex items-center cursor-pointer"><div class="relative"><input type="checkbox" class="sr-only"><div class="block bg-gray-500 dark:bg-gray-600 w-14 h-8 rounded-full"></div><div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div></div><div class="ml-3 text-black dark:text-white"></div></label></div>'),
        Sa = k('<div class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="max-w-[550px] m-auto w-full px-6 mb-8"><div class="text-4xl mt-2 mb-4 text-center">' + lang.settings + '</div><div class="flex flex-col text-base"><div class="m-4"><label for="keyboardHeightRange">' + lang.keyboardheight + '</label><input type="range" class="appearance-none w-full h-2 rounded bg-gray-300 dark:bg-gray-600 cursor-pointer" min="0.7" max="1.3" step="0.1" id="keyboardHeightRange"></div><div class="m-4"><label for="gameSizeSelect" class="block text-black dark:text-white mb-1">' + lang.gamesize + '</label><select id="gameSizeSelect" class="bg-gray-50 border border-gray-400 text-black rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"><option value="minimal">' + lang.minimal + '</option><option value="compact">' + lang.compact + '</option><option value="full">' + lang.full + '</option></select></div></div></div></div>'),
        qa = k('<div class="text-center mt-6"><button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">' + lang.resetpractice + '</button><div class="text-center text-base">' + lang.resetwarning + '</div></div>'),
        ye = e => (() => {
            const s = Ca.cloneNode(!0),
                t = s.firstChild,
                l = t.firstChild,
                i = l.firstChild,
                n = i.nextSibling,
                o = n.nextSibling,
                c = l.nextSibling;
            return se(i, "change", e.onChange), se(i, "click", e.onClick, !0), d(c, () => e.text), $(a => {
                const r = e.id,
                    u = e.id,
                    m = e.checked,
                    h = e.checked,
                    y = e.checked && !e.colorblind,
                    p = e.checked && e.colorblind;
                return r !== a._v$ && N(t, "for", a._v$ = r), u !== a._v$2 && N(i, "id", a._v$2 = u), m !== a._v$3 && (i.checked = a._v$3 = m), h !== a._v$4 && o.classList.toggle("translate-x-[100%]", a._v$4 = h), y !== a._v$5 && o.classList.toggle("bg-box-correct", a._v$5 = y), p !== a._v$6 && o.classList.toggle("bg-box-correct-alt", a._v$6 = p), a
            }, {
                _v$: void 0,
                _v$2: void 0,
                _v$3: void 0,
                _v$4: void 0,
                _v$5: void 0,
                _v$6: void 0
            }), s
        })(),
        Ma = e => {
            const [s, t] = V();
            return (() => {
                const l = Sa.cloneNode(!0),
                    i = l.firstChild,
                    n = i.firstChild,
                    o = i.nextSibling,
                    c = o.firstChild,
                    a = c.nextSibling,
                    r = a.firstChild,
                    u = r.firstChild,
                    m = u.firstChild,
                    h = m.nextSibling;
                h.nextSibling;
                const y = u.nextSibling,
                    p = r.nextSibling,
                    f = p.firstChild,
                    j = f.nextSibling;
                return se(n, "click", e.onCloseSettings, !0), d(a, g(ye, {
                    id: "toggleDarkMode",
                    text: lang.darkmode,
                    get checked() {
                        return s.darkMode
                    },
                    get colorblind() {
                        return s.colorblind
                    },
                    onClick: () => S(s.vibration),
                    onChange: b => t.setDarkMode(b.currentTarget.checked)
                }), r), d(a, g(ye, {
                    id: "toggleColorblind",
                    text: lang.colorblindmode,
                    get checked() {
                        return s.colorblind
                    },
                    get colorblind() {
                        return s.colorblind
                    },
                    onClick: () => S(s.vibration),
                    onChange: b => t.setColorblind(b.currentTarget.checked)
                }), r), d(a, Ie && g(ye, {
                    id: "toggleVibration",
                    text: lang.vibration,
                    get checked() {
                        return s.vibration
                    },
                    get colorblind() {
                        return s.colorblind
                    },
                    onClick: () => S(s.vibration),
                    onChange: b => t.setVibration(b.currentTarget.checked)
                }), r), d(a, g(ye, {
                    id: "toggleEnterBsReversed",
                    get text() {
                        return lang.switchkeys + ` (${s.enterBsReversed?"\u23CE":"\u232B"} . . . ${s.enterBsReversed?"\u232B":"\u23CE"})`
                    },
                    get checked() {
                        return s.enterBsReversed
                    },
                    get colorblind() {
                        return s.colorblind
                    },
                    onClick: () => S(s.vibration),
                    onChange: b => t.setEnterBsReversed(b.currentTarget.checked)
                }), r), d(u, () => s.keyboardHeight.toFixed(1), h), y.addEventListener("change", b => t.setKeyboardHeight(Number(b.currentTarget.value))), y.$$input = b => t.setKeyboardHeight(Number(b.currentTarget.value)), j.addEventListener("change", b => t.setGameSize(b.currentTarget.value)), d(o, (() => {
                    const b = Q(() => e.mode === "free" && s.free.guesses.length > 0 && !t.isGameComplete(e.mode), !0);
                    return () => b() && (() => {
                        const x = qa.cloneNode(!0),
                            C = x.firstChild;
                        return C.$$click = () => t.resetFree(), x
                    })()
                })(), null), $(b => {
                    const x = s.keyboardHeight,
                        C = s.gameSize;
                    return x !== b._v$7 && (y.value = b._v$7 = x), C !== b._v$8 && (j.value = b._v$8 = C), b
                }, {
                    _v$7: void 0,
                    _v$8: void 0
                }), l
            })()
        };
    oe(["click", "input"]);
    const Ra = k('<div class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="max-w-[550px] m-auto w-full px-6 mb-8"><div class="text-4xl mt-2 mb-4 text-center"> ' + lang.statistics + '</div><div class="flex flex-row"><div class="flex flex-col text-center flex-1"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300">' + lang.played + '</span></div><div class="flex flex-col text-center flex-1"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300">' + lang.winpercent + '</span></div><div class="flex flex-col text-center flex-1"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300">' + lang.currentstreak + '</span></div><div class="flex flex-col text-center flex-1"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300">' + lang.maxstreak + '</span></div></div><div class="text-4xl mt-8 text-center">' + lang.windistribution + '</div><div class="text-lg mb-4 text-center">' + lang.windistrexplain + '</div><div class="text-lg"></div></div></div>'),
        Re = k('<div class="flex flex-row mb-1"><div class="mr-2"></div><div class="min-w-min text-right px-2"></div></div>'),
        Ba = k('<div class="flex flex-row text-base mt-6 mb-1 px-2"><div class="flex-1">' + lang.win + ' - </div><div class="flex-1 text-right"> - ' + lang.loss + '</div></div>'),
        Aa = k('<div class="text-base font-bold flex flex-row items-center cursor-pointer rounded-l-xl rounded-r-xl overflow-hidden"><div class="bg-box-correct h-6"></div><div class="bg-rose-600 dark:bg-rose-800 text-right h-6"></div></div>'),
        Ta = k('<div class="text-4xl mt-8 text-center">' + lang.lossdistribution + '</div>'),
        Na = k('<div class="text-lg mb-4 text-center">' + lang.lossdistrexplain + '</div>'),
        Ia = k('<div class="text-lg"></div>'),
        La = [...Array(M - (J - 1)).keys()].map(e => e + (J - 1)),
        Ea = [...Array(J).keys()].map(e => e + M).reverse(),
        Oa = e => {
            const [s, t] = V(), [l, i] = ee(!1), n = _(() => Math.max(...s[e.mode].history.slice(J - 1, M), 1)), o = _(() => Math.max(...s[e.mode].history.slice(M), 1)), c = _(() => s[e.mode].history.slice(J - 1, M).reduce((p, f) => p + f, 0)), a = _(() => s[e.mode].history.slice(M).reduce((p, f) => p + f, 0)), r = _(() => c() + a()), u = _(() => s[e.mode].answersCorrect.reduce((p, f) => p += f >= 0 ? 1 : 0, 0)), m = _(() => Math.max(...s[e.mode].answersCorrect)), h = _(() => t.isGameComplete(e.mode) && u() === J), y = _(() => t.isGameComplete(e.mode) && u() < J);
            return (() => {
                const p = Ra.cloneNode(!0),
                    f = p.firstChild,
                    j = f.firstChild,
                    b = f.nextSibling,
                    x = b.firstChild,
                    C = x.firstChild,
                    I = x.nextSibling,
                    A = I.firstChild,
                    z = A.firstChild,
                    w = A.nextSibling,
                    E = w.firstChild,
                    v = w.nextSibling,
                    q = v.firstChild,
                    R = v.nextSibling,
                    D = R.firstChild,
                    Y = I.nextSibling,
                    ie = Y.nextSibling,
                    ue = ie.nextSibling;
                return se(j, "click", e.onCloseStatistics, !0), d(x, () => e.mode === "daily" ? lang.daily : lang.practice, C), d(z, () => c() + a()), d(E, () => Math.round((r() > 0 ? c() / r() : 0) * 100)), d(q, () => s[e.mode].currentStreak), d(D, () => s[e.mode].maxStreak), d(ue, () => La.map(P => (() => {
                    const O = Re.cloneNode(!0),
                        T = O.firstChild,
                        G = T.nextSibling;
                    return d(T, P + 1), d(G, () => s[e.mode].history[P]), $(B => {
                        const U = {
                                " text-black bg-box-correct": h() && m() === P,
                                "text-black bg-gray-300 dark:text-white dark:bg-gray-700": !(h() && m() === P)
                            },
                            W = s[e.mode].history[P] / n() * 100 + "%";
                        return B._v$ = F(G, U, B._v$), W !== B._v$2 && G.style.setProperty("width", B._v$2 = W), B
                    }, {
                        _v$: void 0,
                        _v$2: void 0
                    }), O
                })())), d(b, (() => {
                    const P = Q(() => a() > 0, !0);
                    return () => P() && [(() => {
                        const O = Ba.cloneNode(!0),
                            T = O.firstChild;
                        T.firstChild;
                        const G = T.nextSibling,
                            B = G.firstChild;
                        return d(T, c, null), d(G, a, B), O
                    })(), (() => {
                        const O = Aa.cloneNode(!0),
                            T = O.firstChild,
                            G = T.nextSibling;
                        return O.$$click = () => {
                            S(s.vibration), i(!l())
                        }, $(B => {
                            const U = c() / r() * 100 + "%",
                                W = a() / r() * 100 + "%";
                            return U !== B._v$3 && T.style.setProperty("width", B._v$3 = U), W !== B._v$4 && G.style.setProperty("width", B._v$4 = W), B
                        }, {
                            _v$3: void 0,
                            _v$4: void 0
                        }), O
                    })()]
                })(), null), d(b, (() => {
                    const P = Q(() => !!l(), !0);
                    return () => P() && [Ta.cloneNode(!0), Na.cloneNode(!0), (() => {
                        const O = Ia.cloneNode(!0);
                        return d(O, () => Ea.map(T => (() => {
                            const G = Re.cloneNode(!0),
                                B = G.firstChild,
                                U = B.nextSibling;
                            return d(B, J - (T - M)), d(U, () => s[e.mode].history[T]), $(W => {
                                const We = {
                                        "text-white bg-rose-600 dark:bg-rose-800": y() && u() === T - M,
                                        "text-black bg-gray-300 dark:bg-gray-700 dark:text-white": !(y() && u() === T - M)
                                    },
                                    je = s[e.mode].history[T] / o() * 100 + "%";
                                return W._v$5 = F(U, We, W._v$5), je !== W._v$6 && U.style.setProperty("width", W._v$6 = je), W
                            }, {
                                _v$5: void 0,
                                _v$6: void 0
                            }), G
                        })())), O
                    })()]
                })(), null), p
            })()
        };
    oe(["click"]);
    const Da = k(rules),
        Ga = ys(supporters),
        ae = examples,
        te = e => e.word[0].split("").map((s, t) => g(Pe, {
            get state() {
                return e.word[1][t]
            },
            letter: s,
            gameRow: 0,
            gameCol: t,
            rowTemporalState: "past",
            activeCol: 0,
            get colorblind() {
                return e.colorblind
            },
            currentRow: 0,
            gameSize: "full"
        })),
        Pa = e => {
            const [s, t] = V();
            return (() => {
                const l = Da.cloneNode(!0),
                    i = l.firstChild,
                    n = i.firstChild,
                    o = i.nextSibling,
                    c = o.firstChild,
                    a = c.nextSibling,
                    r = a.nextSibling,
                    u = r.nextSibling,
                    m = u.nextSibling,
                    h = m.nextSibling,
                    y = h.nextSibling,
                    p = y.nextSibling,
                    f = p.nextSibling,
                    j = f.nextSibling,
                    b = j.firstChild,
                    x = b.nextSibling,
                    C = j.nextSibling,
                    I = C.firstChild,
                    A = I.nextSibling,
                    z = C.nextSibling,
                    w = z.nextSibling,
                    E = w.nextSibling,
                    v = E.nextSibling,
                    q = v.nextSibling,
                    R = q.nextSibling,
                    D = R.firstChild,
                    Y = D.nextSibling,
                    ie = Y.nextSibling,
                    ue = ie.nextSibling,
                    P = ue.nextSibling,
                    O = P.nextSibling,
                    T = R.nextSibling,
                    G = T.nextSibling,
                    B = G.nextSibling;
                return se(n, "click", e.onCloseTutorial, !0), d(u, g(te, {
                    get word() {
                        return ae[0]
                    },
                    get colorblind() {
                        return s.colorblind
                    }
                })), d(h, g(te, {
                    get word() {
                        return ae[1]
                    },
                    get colorblind() {
                        return s.colorblind
                    }
                })), d(p, g(te, {
                    get word() {
                        return ae[2]
                    },
                    get colorblind() {
                        return s.colorblind
                    }
                })), d(b, g(te, {
                    get word() {
                        return ae[3]
                    },
                    get colorblind() {
                        return s.colorblind
                    }
                })), d(x, g(te, {
                    get word() {
                        return ae[4]
                    },
                    get colorblind() {
                        return s.colorblind
                    }
                })), d(I, g(te, {
                    get word() {
                        return ae[5]
                    },
                    get colorblind() {
                        return s.colorblind
                    }
                })), d(A, g(te, {
                    get word() {
                        return ae[6]
                    },
                    get colorblind() {
                        return s.colorblind
                    }
                })), d(D, g(De, {
                    height: 30
                })), d(Y, g(Ps, {
                    height: 40
                })), d(ie, g(Fs, {
                    height: 36
                })), d(ue, g(Hs, {
                    height: 36
                })), d(P, g(Ws, {
                    height: 30
                })), d(O, g(Gs, {
                    height: 40
                })), d(B, () => Ga.map(U => U.replace(/ /g, "\xA0")).join(", ")), l
            })()
        };
    oe(["click"]);
    const Ha = k('<div class="absolute w-full h-full text-black dark:text-white bg-white dark:bg-gray-800 overflow-auto transition-all ease-in-out duration-500"></div>'),
        Fa = k('<div class="flex flex-col flex-auto p-1"></div>'),
        He = k('<div class="flex w-full"></div>'),
        Wa = k('<div class="w-full absolute flex flex-col overflow-hidden"><div class="max-w-[550px] m-auto w-full"></div><div class="quordle-desktop-scrollbar max-w-[550px] m-auto w-full flex-auto"><div class="w-full flex-col"></div></div><div class="max-w-[550px] m-auto w-full"></div></div>'),
        fe = e => (() => {
            const s = Ha.cloneNode(!0);
            return d(s, () => e.children), $(t => {
                const l = {
                        "opacity-100 top-0": e.open,
                        "opacity-0 top-[100%]": !e.open
                    },
                    i = e.fontSize + "px";
                return t._v$ = F(s, l, t._v$), i !== t._v$2 && s.style.setProperty("font-size", t._v$2 = i), t
            }, {
                _v$: void 0,
                _v$2: void 0
            }), s
        })(),
        Ka = [...Array(xe).keys()],
        Ua = [...Array(Te).keys()],
        Qa = [...Array(M).keys()],
        Va = [...Array(Z).keys()],
        Ya = e => (() => {
            const s = Fa.cloneNode(!0);
            return d(s, () => Qa.map(t => (() => {
                const l = He.cloneNode(!0);
                return d(l, () => Va.map(i => g(pa, {
                    get mode() {
                        return e.mode
                    },
                    get gameX() {
                        return e.gameX
                    },
                    get gameY() {
                        return e.gameY
                    },
                    gameRow: t,
                    gameCol: i
                }))), l
            })())), s
        })(),
        Be = e => {
            const [s, t] = V(), [l, i] = es(), [n, o] = ee(35), c = h => {
                t.sendKey(e.mode, h)
            };
            document.addEventListener("keydown", c), ve(() => document.removeEventListener("keydown", c));
            const a = _(() => l.overlay === "tutorial"),
                r = _(() => l.overlay === "statistics"),
                u = _(() => l.overlay === "settings"),
                m = ja({
                    onResize: ({
                        width: h
                    }) => {
                        h && o(h / 17)
                    }
                });
            return (() => {
                const h = Wa.cloneNode(!0),
                    y = h.firstChild,
                    p = y.nextSibling,
                    f = p.firstChild,
                    j = p.nextSibling;
                return F(h, {
                    "h-full": !qe,
                    "h-[calc(100%-25px)] bottom-[25px]": qe
                }), d(h, g(wa, {
                    get mode() {
                        return e.mode
                    },
                    onOpenTutorial: () => {
                        S(s.vibration), L("event", "tutorial", {
                            mode: e.mode
                        }), i({
                            overlay: "tutorial"
                        })
                    },
                    onOpenStatistics: () => {
                        S(s.vibration), L("event", "statistics", {
                            mode: e.mode
                        }), i({
                            overlay: "statistics"
                        })
                    },
                    onOpenSettings: () => {
                        S(s.vibration), L("event", "settings", {
                            mode: e.mode
                        }), i({
                            overlay: "settings"
                        })
                    }
                }), y), d(y, (() => {
                    const b = Q(() => !!t.isGameComplete(e.mode), !0);
                    return () => b() && g(la, {
                        get mode() {
                            return e.mode
                        }
                    })
                })()), m(p), d(f, () => Ua.map(b => (() => {
                    const x = He.cloneNode(!0);
                    return d(x, () => Ka.map(C => g(Ya, {
                        get mode() {
                            return e.mode
                        },
                        gameX: C,
                        gameY: b
                    }))), x
                })())), d(j, (() => {
                    const b = Q(() => !!t.isGameComplete(e.mode), !0);
                    return () => b() ? g(ya, {
                        get mode() {
                            return e.mode
                        }
                    }) : g($a, {
                        get mode() {
                            return e.mode
                        },
                        get fontSize() {
                            return n()
                        }
                    })
                })()), d(h, g(fe, {
                    get open() {
                        return u()
                    },
                    get fontSize() {
                        return n()
                    },
                    get children() {
                        return g(Ma, {
                            get mode() {
                                return e.mode
                            },
                            onCloseSettings: () => {
                                S(s.vibration), i({
                                    overlay: void 0
                                })
                            }
                        })
                    }
                }), null), d(h, g(fe, {
                    get open() {
                        return r()
                    },
                    get fontSize() {
                        return n()
                    },
                    get children() {
                        return g(Oa, {
                            get mode() {
                                return e.mode
                            },
                            onCloseStatistics: () => {
                                S(s.vibration), i({
                                    overlay: void 0
                                })
                            }
                        })
                    }
                }), null), d(h, g(fe, {
                    get open() {
                        return a()
                    },
                    get fontSize() {
                        return n()
                    },
                    get children() {
                        return g(Pa, {
                            onCloseTutorial: () => {
                                S(s.vibration), i({
                                    overlay: void 0
                                })
                            }
                        })
                    }
                }), null), $(b => {
                    const x = n() + "px",
                        C = a() || r(),
                        I = !(a() || r()),
                        A = n() + "px",
                        z = n() + "px";
                    return x !== b._v$3 && y.style.setProperty("font-size", b._v$3 = x), C !== b._v$4 && p.classList.toggle("overflow-hidden", b._v$4 = C), I !== b._v$5 && p.classList.toggle("overflow-auto", b._v$5 = I), A !== b._v$6 && p.style.setProperty("font-size", b._v$6 = A), z !== b._v$7 && j.style.setProperty("font-size", b._v$7 = z), b
                }, {
                    _v$3: void 0,
                    _v$4: void 0,
                    _v$5: void 0,
                    _v$6: void 0,
                    _v$7: void 0
                }), h
            })()
        },
        Xa = k('<div class="px-5 absolute flex items-center justify-center w-full h-full bg-gradient-to-r from-indigo-600 to-blue-400"><div class="p-10 bg-white rounded-md shadow-xl"><div class="flex flex-col items-center"><h1 class="font-bold text-blue-600 text-9xl">404</h1><h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"><span class="text-red-500">Oops!</span> ' + lang.pagenotfound + '</h6><p class="mb-8 text-center text-gray-500 md:text-lg">' + lang.notfoundtext + '</p></div></div></div>'),
        Ja = e => (() => {
            const s = Xa.cloneNode(!0),
                t = s.firstChild,
                l = t.firstChild;
            return l.firstChild.nextSibling.nextSibling, d(l, g(ss, {
                href: "/",
                class: "px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100",
                children: lang.backtodaily
            }), null), s
        })(),
        Za = () => {
            const e = _(() => Ae($e));
            return we(() => {
                var s;
                ((s = e()) == null ? void 0 : s[0].darkMode) ? document.documentElement.classList.add("dark"): document.documentElement.classList.remove("dark")
            }), e() ? g(as, {
                get children() {
                    return [g(be, {
                        path: "/",
                        get element() {
                            return g(Be, {
                                mode: "daily"
                            })
                        }
                    }), g(be, {
                        path: "/practice",
                        get element() {
                            return g(Be, {
                                mode: "free"
                            })
                        }
                    }), g(be, {
                        path: "/*all",
                        get element() {
                            return g(Ja, {})
                        }
                    })]
                }
            }) : null
        };
    ts(() => g(rs, {
        get source() {
            return os()
        },
        get children() {
            return g(ps, {
                get children() {
                    return g(Za, {})
                }
            })
        }
    }), document.getElementById("root"))
});
export default et();
//# sourceMappingURL=index.0244bb65.js.map