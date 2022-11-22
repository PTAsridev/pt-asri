(function (e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var a = (n[i] = { i: i, l: !1, exports: {} });
    return e[i].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, i) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: i });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (t.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var a in e)
          t.d(
            i,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return i;
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ""),
    t((t.s = 129));
})([
  function (e, t, n) {
    (function (t) {
      var n = function (e) {
        return e && e.Math == Math && e;
      };
      e.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof t && t) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }.call(this, n(26)));
  },
  function (e, t) {
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    e.exports = n;
  },
  function (e, t) {
    var n = Array.isArray;
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      d.env() &&
        (I(e.design) && g.on("__wf_design", e.design),
        I(e.preview) && g.on("__wf_preview", e.preview)),
        I(e.destroy) && g.on("__wf_destroy", e.destroy),
        e.ready && I(e.ready) && a(e);
    }
    function a(e) {
      h ? e.ready() : m.contains(p, e.ready) || p.push(e.ready);
    }
    function r(e) {
      I(e.design) && g.off("__wf_design", e.design),
        I(e.preview) && g.off("__wf_preview", e.preview),
        I(e.destroy) && g.off("__wf_destroy", e.destroy),
        e.ready && I(e.ready) && o(e);
    }
    function o(e) {
      p = m.filter(p, function (t) {
        return t !== e.ready;
      });
    }
    function c(e, t) {
      var n = [],
        i = {};
      return (
        (i.up = m.throttle(function (e) {
          m.each(n, function (t) {
            t(e);
          });
        })),
        e && t && e.on(t, i.up),
        (i.on = function (e) {
          "function" == typeof e && (m.contains(n, e) || n.push(e));
        }),
        (i.off = function (e) {
          n = arguments.length
            ? m.filter(n, function (t) {
                return t !== e;
              })
            : [];
        }),
        i
      );
    }
    function u(e) {
      I(e) && e();
    }
    function s() {
      (_ = !1), m.each(f, i);
    }
    function l() {
      L && (L.reject(), g.off("load", L.resolve)),
        (L = new E.Deferred()),
        g.on("load", L.resolve);
    }
    var d = {},
      f = {},
      p = [],
      v = window.Webflow || [],
      E = window.jQuery,
      g = E(window),
      y = E(document),
      I = E.isFunction,
      m = (d._ = n(131)),
      T = (d.tram = n(69) && E.tram),
      h = !1,
      _ = !1;
    (T.config.hideBackface = !1),
      (T.config.keepInherited = !0),
      (d.define = function (e, t, n) {
        f[e] && r(f[e]);
        var a = (f[e] = t(E, m, n) || {});
        return i(a), a;
      }),
      (d.require = function (e) {
        return f[e];
      }),
      (d.push = function (e) {
        h ? I(e) && e() : v.push(e);
      }),
      (d.env = function (e) {
        var t = window.__wf_design,
          n = void 0 !== t;
        return e
          ? "design" === e
            ? n && t
            : "preview" === e
            ? n && !t
            : "slug" === e
            ? n && window.__wf_slug
            : "editor" === e
            ? window.WebflowEditor
            : "test" === e
            ? window.__wf_test
            : "frame" === e
            ? window !== window.top
            : void 0
          : n;
      });
    var b,
      O = navigator.userAgent.toLowerCase(),
      R = (d.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      A = (d.env.chrome =
        /chrome/.test(O) &&
        /Google/.test(navigator.vendor) &&
        parseInt(O.match(/chrome\/(\d+)\./)[1], 10)),
      S = (d.env.ios = /(ipod|iphone|ipad)/.test(O));
    (d.env.safari = /safari/.test(O) && !A && !S),
      R &&
        y.on("touchstart mousedown", function (e) {
          b = e.target;
        }),
      (d.validClick = R
        ? function (e) {
            return e === b || E.contains(e, b);
          }
        : function () {
            return !0;
          });
    var L,
      N = "resize.webflow orientationchange.webflow load.webflow",
      w = "scroll.webflow " + N;
    (d.resize = c(g, N)),
      (d.scroll = c(g, w)),
      (d.redraw = c()),
      (d.location = function (e) {
        window.location = e;
      }),
      d.env() && (d.location = function () {}),
      (d.ready = function () {
        (h = !0), _ ? s() : m.each(p, u), m.each(v, u), d.resize.up();
      }),
      (d.load = function (e) {
        L.then(e);
      }),
      (d.destroy = function (e) {
        (e = e || {}),
          (_ = !0),
          g.triggerHandler("__wf_destroy"),
          null != e.domready && (h = e.domready),
          m.each(f, r),
          d.resize.off(),
          d.scroll.off(),
          d.redraw.off(),
          (p = []),
          (v = []),
          "pending" === L.state() && l();
      }),
      E(d.ready),
      l(),
      (e.exports = window.Webflow = d);
  },
  function (e, t, n) {
    "use strict";
    var i = n(18);
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    t.IX2EngineConstants = t.IX2EngineActionTypes = void 0;
    var r = n(188);
    Object.keys(r).forEach(function (e) {
      "default" !== e &&
        "__esModule" !== e &&
        (Object.prototype.hasOwnProperty.call(a, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e];
            },
          }));
    });
    var o = n(94);
    Object.keys(o).forEach(function (e) {
      "default" !== e &&
        "__esModule" !== e &&
        (Object.prototype.hasOwnProperty.call(a, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e];
            },
          }));
    });
    var c = n(189);
    Object.keys(c).forEach(function (e) {
      "default" !== e &&
        "__esModule" !== e &&
        (Object.prototype.hasOwnProperty.call(a, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return c[e];
            },
          }));
    });
    var u = n(190);
    Object.keys(u).forEach(function (e) {
      "default" !== e &&
        "__esModule" !== e &&
        (Object.prototype.hasOwnProperty.call(a, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return u[e];
            },
          }));
    });
    var s = i(n(191));
    t.IX2EngineActionTypes = s;
    var l = i(n(192));
    t.IX2EngineConstants = l;
  },
  function (e, t) {
    var n = Function.prototype,
      i = n.bind,
      a = n.call,
      r = i && i.bind(a);
    e.exports = i
      ? function (e) {
          return e && r(a, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return a.apply(e, arguments);
            }
          );
        };
  },
  function (e, t, n) {
    var i = n(99),
      a = "object" == typeof self && self && self.Object === Object && self,
      r = i || a || Function("return this")();
    e.exports = r;
  },
  function (e, t) {
    e.exports = function (e) {
      return "function" == typeof e;
    };
  },
  function (e, t) {
    function n(e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    }
    e.exports = n;
  },
  function (e, t, n) {
    var i = n(5),
      a = n(156),
      r = i({}.hasOwnProperty);
    e.exports =
      Object.hasOwn ||
      function (e, t) {
        return r(a(e), t);
      };
  },
  function (e, t, n) {
    function i(e) {
      return "function" == typeof e
        ? e
        : null == e
        ? o
        : "object" == typeof e
        ? c(e)
          ? r(e[0], e[1])
          : a(e)
        : u(e);
    }
    var a = n(195),
      r = n(249),
      o = n(63),
      c = n(2),
      u = n(258);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t) {
      var n = r(e, t);
      return a(n) ? n : void 0;
    }
    var a = n(207),
      r = n(212);
    e.exports = i;
  },
  function (e, t) {
    function n(e) {
      return null != e && "object" == typeof e;
    }
    e.exports = n;
  },
  function (e, t, n) {
    var i = n(19);
    e.exports = !i(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (e, t, n) {
    "use strict";
    var i = n(18);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.IX2VanillaUtils =
        t.IX2VanillaPlugins =
        t.IX2ElementsReducer =
        t.IX2EasingUtils =
        t.IX2Easings =
        t.IX2BrowserSupport =
          void 0);
    var a = i(n(48));
    t.IX2BrowserSupport = a;
    var r = i(n(116));
    t.IX2Easings = r;
    var o = i(n(118));
    t.IX2EasingUtils = o;
    var c = i(n(267));
    t.IX2ElementsReducer = c;
    var u = i(n(120));
    t.IX2VanillaPlugins = u;
    var s = i(n(269));
    t.IX2VanillaUtils = s;
  },
  function (e, t, n) {
    function i(e) {
      return null == e
        ? void 0 === e
          ? u
          : c
        : s && s in Object(e)
        ? r(e)
        : o(e);
    }
    var a = n(23),
      r = n(208),
      o = n(209),
      c = "[object Null]",
      u = "[object Undefined]",
      s = a ? a.toStringTag : void 0;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      return null != e && r(e.length) && !a(e);
    }
    var a = n(98),
      r = n(56);
    e.exports = i;
  },
  function (e, t) {
    function n(e) {
      return (
        (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        n(e)
      );
    }
    function i(t) {
      return (
        "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
          ? (e.exports = i =
              function (e) {
                return n(e);
              })
          : (e.exports = i =
              function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : n(e);
              }),
        i(t)
      );
    }
    e.exports = i;
  },
  function (e, t) {
    function n(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var i =
              Object.defineProperty && Object.getOwnPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(e, n)
                : {};
            i.get || i.set ? Object.defineProperty(t, n, i) : (t[n] = e[n]);
          }
      return (t.default = e), t;
    }
    e.exports = n;
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t, n) {
    var i = n(7);
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : i(e);
    };
  },
  function (e, t) {
    function n(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      throw new Error(e);
    }
    function a(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    function r(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = a(e), n = {}, i = 0; i < t.length; i++) {
        var r = t[i];
        n[r] = e[r];
      }
      return n;
    }
    function o(e, t, n) {
      var u = n;
      null == u && i(S);
      for (
        var s = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), f = 3;
        f < l;
        f++
      )
        d[f - 3] = arguments[f];
      for (var p = 0; p < d.length; p++) {
        var v = d[p];
        if (null != v) {
          var E = a(v);
          if (E.length)
            for (var g = 0; g <= E.length; g++) {
              var y = E[g];
              if (!e || void 0 === u[y]) {
                var I = v[y];
                t && c(u[y]) && c(I) && (I = o(e, t, u[y], I)),
                  void 0 !== I &&
                    I !== u[y] &&
                    (s || ((s = !0), (u = r(u))), (u[y] = I));
              }
            }
        }
      }
      return u;
    }
    function c(e) {
      var t = void 0 === e ? "undefined" : A(e);
      return null != e && ("object" === t || "function" === t);
    }
    function u(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function s(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function l(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function d(e) {
      return e.length ? e.slice(1) : e;
    }
    function f(e, t, n) {
      return e
        .slice(0, t)
        .concat(Array.isArray(n) ? n : [n])
        .concat(e.slice(t));
    }
    function p(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function v(e, t, n) {
      if (e[t] === n) return e;
      for (var i = e.length, a = Array(i), r = 0; r < i; r++) a[r] = e[r];
      return (a[t] = n), a;
    }
    function E(e, t) {
      if ((!Array.isArray(t) && i(S), null != e)) {
        for (var n = e, a = 0; a < t.length; a++) {
          var r = t[a];
          if (((n = null != n ? n[r] : void 0), void 0 === n)) return n;
        }
        return n;
      }
    }
    function g(e, t, n) {
      var i = "number" == typeof t ? [] : {},
        a = null == e ? i : e;
      if (a[t] === n) return a;
      var o = r(a);
      return (o[t] = n), o;
    }
    function y(e, t, n, i) {
      var a = void 0,
        r = t[i];
      if (i === t.length - 1) a = n;
      else {
        var o = c(e) && c(e[r]) ? e[r] : "number" == typeof t[i + 1] ? [] : {};
        a = y(o, t, n, i + 1);
      }
      return g(e, r, a);
    }
    function I(e, t, n) {
      return t.length ? y(e, t, n, 0) : n;
    }
    function m(e, t, n) {
      var i = null == e ? void 0 : e[t],
        a = n(i);
      return g(e, t, a);
    }
    function T(e, t, n) {
      var i = E(e, t),
        a = n(i);
      return I(e, t, a);
    }
    function h(e, t, n, i, a, r) {
      for (
        var c = arguments.length, u = Array(c > 6 ? c - 6 : 0), s = 6;
        s < c;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? o.call.apply(o, [null, !1, !1, e, t, n, i, a, r].concat(u))
        : o(!1, !1, e, t, n, i, a, r);
    }
    function _(e, t, n, i, a, r) {
      for (
        var c = arguments.length, u = Array(c > 6 ? c - 6 : 0), s = 6;
        s < c;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? o.call.apply(o, [null, !1, !0, e, t, n, i, a, r].concat(u))
        : o(!1, !0, e, t, n, i, a, r);
    }
    function b(e, t, n, i, a, r, c) {
      var u = E(e, t);
      null == u && (u = {});
      for (
        var s = void 0,
          l = arguments.length,
          d = Array(l > 7 ? l - 7 : 0),
          f = 7;
        f < l;
        f++
      )
        d[f - 7] = arguments[f];
      return (
        (s = d.length
          ? o.call.apply(o, [null, !1, !1, u, n, i, a, r, c].concat(d))
          : o(!1, !1, u, n, i, a, r, c)),
        I(e, t, s)
      );
    }
    function O(e, t) {
      for (var n = Array.isArray(t) ? t : [t], i = !1, r = 0; r < n.length; r++)
        if (L.call(e, n[r])) {
          i = !0;
          break;
        }
      if (!i) return e;
      for (var o = {}, c = a(e), u = 0; u < c.length; u++) {
        var s = c[u];
        n.indexOf(s) >= 0 || (o[s] = e[s]);
      }
      return o;
    }
    function R(e, t, n, i, a, r) {
      for (
        var c = arguments.length, u = Array(c > 6 ? c - 6 : 0), s = 6;
        s < c;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? o.call.apply(o, [null, !0, !1, e, t, n, i, a, r].concat(u))
        : o(!0, !1, e, t, n, i, a, r);
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var A =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    (t.clone = r),
      (t.addLast = u),
      (t.addFirst = s),
      (t.removeLast = l),
      (t.removeFirst = d),
      (t.insert = f),
      (t.removeAt = p),
      (t.replaceAt = v),
      (t.getIn = E),
      (t.set = g),
      (t.setIn = I),
      (t.update = m),
      (t.updateIn = T),
      (t.merge = h),
      (t.mergeDeep = _),
      (t.mergeIn = b),
      (t.omit = O),
      (t.addDefaults = R);
    var S = "INVALID_ARGS",
      L = {}.hasOwnProperty,
      N = {
        clone: r,
        addLast: u,
        addFirst: s,
        removeLast: l,
        removeFirst: d,
        insert: f,
        removeAt: p,
        replaceAt: v,
        getIn: E,
        set: g,
        setIn: I,
        update: m,
        updateIn: T,
        merge: h,
        mergeDeep: _,
        mergeIn: b,
        omit: O,
        addDefaults: R,
      };
    t.default = N;
  },
  function (e, t, n) {
    var i = n(6),
      a = i.Symbol;
    e.exports = a;
  },
  function (e, t, n) {
    function i(e) {
      if ("string" == typeof e || a(e)) return e;
      var t = e + "";
      return "0" == t && 1 / e == -r ? "-0" : t;
    }
    var a = n(39),
      r = 1 / 0;
    e.exports = i;
  },
  function (e, t, n) {
    "use strict";
    function i(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
    }
    var a = n(136),
      r = window.jQuery,
      o = {},
      c = ".w-ix",
      u = {
        reset: function (e, t) {
          a.triggers.reset(e, t);
        },
        intro: function (e, t) {
          a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
        },
      };
    (o.triggers = {}),
      (o.types = { INTRO: "w-ix-intro" + c, OUTRO: "w-ix-outro" + c }),
      r.extend(o.triggers, u),
      (e.exports = o);
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    var i = n(145),
      a = n(72);
    e.exports = function (e) {
      return i(a(e));
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(7),
      r = function (e) {
        return a(e) ? e : void 0;
      };
    e.exports = function (e, t) {
      return arguments.length < 2 ? r(i[e]) : i[e] && i[e][t];
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(13),
      r = n(80),
      o = n(30),
      c = n(73),
      u = i.TypeError,
      s = Object.defineProperty;
    t.f = a
      ? s
      : function (e, t, n) {
          if ((o(e), (t = c(t)), o(n), r))
            try {
              return s(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n) throw u("Accessors not supported");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(20),
      r = i.String,
      o = i.TypeError;
    e.exports = function (e) {
      if (a(e)) return e;
      throw o(r(e) + " is not an object");
    };
  },
  function (e, t) {
    function n() {
      return (
        (e.exports = n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }),
        n.apply(this, arguments)
      );
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var i = e[t];
        this.set(i[0], i[1]);
      }
    }
    var a = n(197),
      r = n(198),
      o = n(199),
      c = n(200),
      u = n(201);
    (i.prototype.clear = a),
      (i.prototype.delete = r),
      (i.prototype.get = o),
      (i.prototype.has = c),
      (i.prototype.set = u),
      (e.exports = i);
  },
  function (e, t, n) {
    function i(e, t) {
      for (var n = e.length; n--; ) if (a(e[n][0], t)) return n;
      return -1;
    }
    var a = n(49);
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(11),
      a = i(Object, "create");
    e.exports = a;
  },
  function (e, t, n) {
    function i(e, t) {
      var n = e.__data__;
      return a(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
    }
    var a = n(221);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      return o(e) ? a(e) : r(e);
    }
    var a = n(106),
      r = n(57),
      o = n(16);
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(239),
      a = n(12),
      r = Object.prototype,
      o = r.hasOwnProperty,
      c = r.propertyIsEnumerable,
      u = i(
        (function () {
          return arguments;
        })()
      )
        ? i
        : function (e) {
            return a(e) && o.call(e, "callee") && !c.call(e, "callee");
          };
    e.exports = u;
  },
  function (e, t, n) {
    function i(e, t) {
      return a(e) ? e : r(e, t) ? [e] : o(c(e));
    }
    var a = n(2),
      r = n(62),
      o = n(250),
      c = n(253);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      return "symbol" == typeof e || (r(e) && a(e) == o);
    }
    var a = n(15),
      r = n(12),
      o = "[object Symbol]";
    e.exports = i;
  },
  function (e, t) {
    var n = Function.prototype.call;
    e.exports = n.bind
      ? n.bind(n)
      : function () {
          return n.apply(n, arguments);
        };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(42),
      r = "__core-js_shared__",
      o = i[r] || a(r, {});
    e.exports = o;
  },
  function (e, t, n) {
    var i = n(0),
      a = Object.defineProperty;
    e.exports = function (e, t) {
      try {
        a(i, e, { value: t, configurable: !0, writable: !0 });
      } catch (n) {
        i[e] = t;
      }
      return t;
    };
  },
  function (e, t, n) {
    var i = n(13),
      a = n(29),
      r = n(71);
    e.exports = i
      ? function (e, t, n) {
          return a.f(e, t, r(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t) {
    e.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (e, t, n) {
    "use strict";
    function i(e, t, n) {
      function c() {
        y === g && (y = g.slice());
      }
      function u() {
        return E;
      }
      function s(e) {
        if ("function" != typeof e)
          throw new Error("Expected listener to be a function.");
        var t = !0;
        return (
          c(),
          y.push(e),
          function () {
            if (t) {
              (t = !1), c();
              var n = y.indexOf(e);
              y.splice(n, 1);
            }
          }
        );
      }
      function l(e) {
        if (!Object(a.default)(e))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (void 0 === e.type)
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (I) throw new Error("Reducers may not dispatch actions.");
        try {
          (I = !0), (E = v(E, e));
        } finally {
          I = !1;
        }
        for (var t = (g = y), n = 0; n < t.length; n++) t[n]();
        return e;
      }
      function d(e) {
        if ("function" != typeof e)
          throw new Error("Expected the nextReducer to be a function.");
        (v = e), l({ type: o.INIT });
      }
      function f() {
        var e,
          t = s;
        return (
          (e = {
            subscribe: function (e) {
              function n() {
                e.next && e.next(u());
              }
              if ("object" != typeof e)
                throw new TypeError("Expected the observer to be an object.");
              n();
              var i = t(n);
              return { unsubscribe: i };
            },
          }),
          (e[r.default] = function () {
            return this;
          }),
          e
        );
      }
      var p;
      if (
        ("function" == typeof t && void 0 === n && ((n = t), (t = void 0)),
        void 0 !== n)
      ) {
        if ("function" != typeof n)
          throw new Error("Expected the enhancer to be a function.");
        return n(i)(e, t);
      }
      if ("function" != typeof e)
        throw new Error("Expected the reducer to be a function.");
      var v = e,
        E = t,
        g = [],
        y = g,
        I = !1;
      return (
        l({ type: o.INIT }),
        (p = { dispatch: l, subscribe: s, getState: u, replaceReducer: d }),
        (p[r.default] = f),
        p
      );
    }
    n.r(t),
      n.d(t, "ActionTypes", function () {
        return o;
      }),
      n.d(t, "default", function () {
        return i;
      });
    var a = n(88),
      r = n(183),
      o = { INIT: "@@redux/INIT" };
  },
  function (e, t, n) {
    "use strict";
    function i() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      if (0 === t.length)
        return function (e) {
          return e;
        };
      if (1 === t.length) return t[0];
      var i = t[t.length - 1],
        a = t.slice(0, -1);
      return function () {
        return a.reduceRight(function (e, t) {
          return t(e);
        }, i.apply(void 0, arguments));
      };
    }
    n.r(t),
      n.d(t, "default", function () {
        return i;
      });
  },
  function (e, t, n) {
    "use strict";
    var i = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.TRANSFORM_STYLE_PREFIXED =
        t.TRANSFORM_PREFIXED =
        t.FLEX_PREFIXED =
        t.ELEMENT_MATCHES =
        t.withBrowser =
        t.IS_BROWSER_ENV =
          void 0);
    var a = i(n(95)),
      r = "undefined" != typeof window;
    t.IS_BROWSER_ENV = r;
    var o = function (e, t) {
      return r ? e() : t;
    };
    t.withBrowser = o;
    var c = o(function () {
      return (0,
      a.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (e) {
        return e in Element.prototype;
      });
    });
    t.ELEMENT_MATCHES = c;
    var u = o(function () {
      var e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        n = "";
      try {
        for (var i = t.length, a = 0; a < i; a++) {
          var r = t[a];
          if (((e.style.display = r), e.style.display === r)) return r;
        }
        return n;
      } catch (e) {
        return n;
      }
    }, "flex");
    t.FLEX_PREFIXED = u;
    var s = o(function () {
      var e = document.createElement("i");
      if (null == e.style.transform)
        for (
          var t = ["Webkit", "Moz", "ms"], n = "Transform", i = t.length, a = 0;
          a < i;
          a++
        ) {
          var r = t[a] + n;
          if (void 0 !== e.style[r]) return r;
        }
      return "transform";
    }, "transform");
    t.TRANSFORM_PREFIXED = s;
    var l = s.split("transform")[0],
      d = l ? l + "TransformStyle" : "transformStyle";
    t.TRANSFORM_STYLE_PREFIXED = d;
  },
  function (e, t) {
    function n(e, t) {
      return e === t || (e != e && t != t);
    }
    e.exports = n;
  },
  function (e, t, n) {
    var i = n(11),
      a = n(6),
      r = i(a, "Map");
    e.exports = r;
  },
  function (e, t, n) {
    function i(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var i = e[t];
        this.set(i[0], i[1]);
      }
    }
    var a = n(213),
      r = n(220),
      o = n(222),
      c = n(223),
      u = n(224);
    (i.prototype.clear = a),
      (i.prototype.delete = r),
      (i.prototype.get = o),
      (i.prototype.has = c),
      (i.prototype.set = u),
      (e.exports = i);
  },
  function (e, t) {
    function n(e, t) {
      for (var n = -1, i = t.length, a = e.length; ++n < i; ) e[a + n] = t[n];
      return e;
    }
    e.exports = n;
  },
  function (e, t, n) {
    (function (e) {
      var i = n(6),
        a = n(240),
        r = t && !t.nodeType && t,
        o = r && "object" == typeof e && e && !e.nodeType && e,
        c = o && o.exports === r,
        u = c ? i.Buffer : void 0,
        s = u ? u.isBuffer : void 0,
        l = s || a;
      e.exports = l;
    }.call(this, n(107)(e)));
  },
  function (e, t) {
    function n(e, t) {
      var n = typeof e;
      return (
        (t = null == t ? i : t),
        !!t &&
          ("number" == n || ("symbol" != n && a.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    var i = 9007199254740991,
      a = /^(?:0|[1-9]\d*)$/;
    e.exports = n;
  },
  function (e, t, n) {
    var i = n(241),
      a = n(242),
      r = n(243),
      o = r && r.isTypedArray,
      c = o ? a(o) : i;
    e.exports = c;
  },
  function (e, t) {
    function n(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i;
    }
    var i = 9007199254740991;
    e.exports = n;
  },
  function (e, t, n) {
    function i(e) {
      if (!a(e)) return r(e);
      var t = [];
      for (var n in Object(e)) c.call(e, n) && "constructor" != n && t.push(n);
      return t;
    }
    var a = n(58),
      r = n(244),
      o = Object.prototype,
      c = o.hasOwnProperty;
    e.exports = i;
  },
  function (e, t) {
    function n(e) {
      var t = e && e.constructor,
        n = ("function" == typeof t && t.prototype) || i;
      return e === n;
    }
    var i = Object.prototype;
    e.exports = n;
  },
  function (e, t, n) {
    var i = n(245),
      a = n(50),
      r = n(246),
      o = n(247),
      c = n(109),
      u = n(15),
      s = n(100),
      l = "[object Map]",
      d = "[object Object]",
      f = "[object Promise]",
      p = "[object Set]",
      v = "[object WeakMap]",
      E = "[object DataView]",
      g = s(i),
      y = s(a),
      I = s(r),
      m = s(o),
      T = s(c),
      h = u;
    ((i && h(new i(new ArrayBuffer(1))) != E) ||
      (a && h(new a()) != l) ||
      (r && h(r.resolve()) != f) ||
      (o && h(new o()) != p) ||
      (c && h(new c()) != v)) &&
      (h = function (e) {
        var t = u(e),
          n = t == d ? e.constructor : void 0,
          i = n ? s(n) : "";
        if (i)
          switch (i) {
            case g:
              return E;
            case y:
              return l;
            case I:
              return f;
            case m:
              return p;
            case T:
              return v;
          }
        return t;
      }),
      (e.exports = h);
  },
  function (e, t, n) {
    function i(e, t, n) {
      var i = null == e ? void 0 : a(e, t);
      return void 0 === i ? n : i;
    }
    var a = n(61);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t) {
      t = a(t, e);
      for (var n = 0, i = t.length; null != e && n < i; ) e = e[r(t[n++])];
      return n && n == i ? e : void 0;
    }
    var a = n(38),
      r = n(24);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t) {
      if (a(e)) return !1;
      var n = typeof e;
      return (
        !(
          "number" != n &&
          "symbol" != n &&
          "boolean" != n &&
          null != e &&
          !r(e)
        ) ||
        c.test(e) ||
        !o.test(e) ||
        (null != t && e in Object(t))
      );
    }
    var a = n(2),
      r = n(39),
      o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      c = /^\w*$/;
    e.exports = i;
  },
  function (e, t) {
    function n(e) {
      return e;
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e) {
      if ("number" == typeof e) return e;
      if (o(e)) return c;
      if (r(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = r(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = a(e);
      var n = s.test(e);
      return n || l.test(e) ? d(e.slice(2), n ? 2 : 8) : u.test(e) ? c : +e;
    }
    var a = n(262),
      r = n(8),
      o = n(39),
      c = NaN,
      u = /^[-+]0x[0-9a-f]+$/i,
      s = /^0b[01]+$/i,
      l = /^0o[0-7]+$/i,
      d = parseInt;
    e.exports = i;
  },
  function (e, t, n) {
    "use strict";
    var i = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.mediaQueriesDefined =
        t.viewportWidthChanged =
        t.actionListPlaybackChanged =
        t.elementStateChanged =
        t.instanceRemoved =
        t.instanceStarted =
        t.instanceAdded =
        t.parameterChanged =
        t.animationFrameChanged =
        t.eventStateChanged =
        t.testFrameRendered =
        t.eventListenerAdded =
        t.clearRequested =
        t.stopRequested =
        t.playbackRequested =
        t.previewRequested =
        t.sessionStopped =
        t.sessionStarted =
        t.sessionInitialized =
        t.rawDataImported =
          void 0);
    var a = i(n(31)),
      r = n(4),
      o = n(14),
      c = r.IX2EngineActionTypes,
      u = c.IX2_RAW_DATA_IMPORTED,
      s = c.IX2_SESSION_INITIALIZED,
      l = c.IX2_SESSION_STARTED,
      d = c.IX2_SESSION_STOPPED,
      f = c.IX2_PREVIEW_REQUESTED,
      p = c.IX2_PLAYBACK_REQUESTED,
      v = c.IX2_STOP_REQUESTED,
      E = c.IX2_CLEAR_REQUESTED,
      g = c.IX2_EVENT_LISTENER_ADDED,
      y = c.IX2_TEST_FRAME_RENDERED,
      I = c.IX2_EVENT_STATE_CHANGED,
      m = c.IX2_ANIMATION_FRAME_CHANGED,
      T = c.IX2_PARAMETER_CHANGED,
      h = c.IX2_INSTANCE_ADDED,
      _ = c.IX2_INSTANCE_STARTED,
      b = c.IX2_INSTANCE_REMOVED,
      O = c.IX2_ELEMENT_STATE_CHANGED,
      R = c.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      A = c.IX2_VIEWPORT_WIDTH_CHANGED,
      S = c.IX2_MEDIA_QUERIES_DEFINED,
      L = o.IX2VanillaUtils.reifyState,
      N = function (e) {
        return { type: u, payload: (0, a.default)({}, L(e)) };
      };
    t.rawDataImported = N;
    var w = function (e) {
      var t = e.hasBoundaryNodes,
        n = e.reducedMotion;
      return { type: s, payload: { hasBoundaryNodes: t, reducedMotion: n } };
    };
    t.sessionInitialized = w;
    var C = function () {
      return { type: l };
    };
    t.sessionStarted = C;
    var x = function () {
      return { type: d };
    };
    t.sessionStopped = x;
    var M = function (e) {
      var t = e.rawData,
        n = e.defer;
      return { type: f, payload: { defer: n, rawData: t } };
    };
    t.previewRequested = M;
    var P = function (e) {
      var t = e.actionTypeId,
        n = void 0 === t ? r.ActionTypeConsts.GENERAL_START_ACTION : t,
        i = e.actionListId,
        a = e.actionItemId,
        o = e.eventId,
        c = e.allowEvents,
        u = e.immediate,
        s = e.testManual,
        l = e.verbose,
        d = e.rawData;
      return {
        type: p,
        payload: {
          actionTypeId: n,
          actionListId: i,
          actionItemId: a,
          testManual: s,
          eventId: o,
          allowEvents: c,
          immediate: u,
          verbose: l,
          rawData: d,
        },
      };
    };
    t.playbackRequested = P;
    var D = function (e) {
      return { type: v, payload: { actionListId: e } };
    };
    t.stopRequested = D;
    var V = function () {
      return { type: E };
    };
    t.clearRequested = V;
    var k = function (e, t) {
      return { type: g, payload: { target: e, listenerParams: t } };
    };
    t.eventListenerAdded = k;
    var G = function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
      return { type: y, payload: { step: e } };
    };
    t.testFrameRendered = G;
    var F = function (e, t) {
      return { type: I, payload: { stateKey: e, newState: t } };
    };
    t.eventStateChanged = F;
    var U = function (e, t) {
      return { type: m, payload: { now: e, parameters: t } };
    };
    t.animationFrameChanged = U;
    var j = function (e, t) {
      return { type: T, payload: { key: e, value: t } };
    };
    t.parameterChanged = j;
    var X = function (e) {
      return { type: h, payload: (0, a.default)({}, e) };
    };
    t.instanceAdded = X;
    var B = function (e, t) {
      return { type: _, payload: { instanceId: e, time: t } };
    };
    t.instanceStarted = B;
    var W = function (e) {
      return { type: b, payload: { instanceId: e } };
    };
    t.instanceRemoved = W;
    var H = function (e, t, n, i) {
      return {
        type: O,
        payload: { elementId: e, actionTypeId: t, current: n, actionItem: i },
      };
    };
    t.elementStateChanged = H;
    var Q = function (e) {
      var t = e.actionListId,
        n = e.isPlaying;
      return { type: R, payload: { actionListId: t, isPlaying: n } };
    };
    t.actionListPlaybackChanged = Q;
    var z = function (e) {
      var t = e.width,
        n = e.mediaQueries;
      return { type: A, payload: { width: t, mediaQueries: n } };
    };
    t.viewportWidthChanged = z;
    var Y = function () {
      return { type: S };
    };
    t.mediaQueriesDefined = Y;
  },
  function (e, t, n) {
    function i(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    var a = n(126),
      r = n(67);
    (i.prototype = a(r.prototype)),
      (i.prototype.constructor = i),
      (e.exports = i);
  },
  function (e, t) {
    function n() {}
    e.exports = n;
  },
  function (e, t, n) {
    function i(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = o),
        (this.__views__ = []);
    }
    var a = n(126),
      r = n(67),
      o = 4294967295;
    (i.prototype = a(r.prototype)),
      (i.prototype.constructor = i),
      (e.exports = i);
  },
  function (e, t, n) {
    "use strict";
    var i = n(1),
      a = i(n(17));
    window.tram = (function (e) {
      function t(e, t) {
        var n = new F.Bare();
        return n.init(e, t);
      }
      function n(e) {
        return e.replace(/[A-Z]/g, function (e) {
          return "-" + e.toLowerCase();
        });
      }
      function i(e) {
        var t = parseInt(e.slice(1), 16),
          n = (t >> 16) & 255,
          i = (t >> 8) & 255,
          a = 255 & t;
        return [n, i, a];
      }
      function r(e, t, n) {
        return (
          "#" + ((1 << 24) | (e << 16) | (t << 8) | n).toString(16).slice(1)
        );
      }
      function o() {}
      function c(e, t) {
        l(
          "Type warning: Expected: [" +
            e +
            "] Got: [" +
            (0, a.default)(t) +
            "] " +
            t
        );
      }
      function u(e, t, n) {
        l("Units do not match [" + e + "]: " + t + ", " + n);
      }
      function s(e, t, n) {
        if ((void 0 !== t && (n = t), void 0 === e)) return n;
        var i = n;
        return (
          J.test(e) || !ee.test(e)
            ? (i = parseInt(e, 10))
            : ee.test(e) && (i = 1e3 * parseFloat(e)),
          0 > i && (i = 0),
          i == i ? i : n
        );
      }
      function l(e) {
        z.debug && window && window.console.warn(e);
      }
      function d(e) {
        for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
          var a = e[t];
          a && i.push(a);
        }
        return i;
      }
      var f = (function (e, t, n) {
          function i(e) {
            return "object" == (0, a.default)(e);
          }
          function r(e) {
            return "function" == typeof e;
          }
          function o() {}
          function c(a, u) {
            function s() {
              var e = new l();
              return r(e.init) && e.init.apply(e, arguments), e;
            }
            function l() {}
            u === n && ((u = a), (a = Object)), (s.Bare = l);
            var d,
              f = (o[e] = a[e]),
              p = (l[e] = s[e] = new o());
            return (
              (p.constructor = s),
              (s.mixin = function (t) {
                return (l[e] = s[e] = c(s, t)[e]), s;
              }),
              (s.open = function (e) {
                if (
                  ((d = {}),
                  r(e) ? (d = e.call(s, p, f, s, a)) : i(e) && (d = e),
                  i(d))
                )
                  for (var n in d) t.call(d, n) && (p[n] = d[n]);
                return r(p.init) || (p.init = a), s;
              }),
              s.open(u)
            );
          }
          return c;
        })("prototype", {}.hasOwnProperty),
        p = {
          ease: [
            "ease",
            function (e, t, n, i) {
              var a = (e /= i) * e,
                r = a * e;
              return (
                t +
                n * (-2.75 * r * a + 11 * a * a + -15.5 * r + 8 * a + 0.25 * e)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (e, t, n, i) {
              var a = (e /= i) * e,
                r = a * e;
              return t + n * (-1 * r * a + 3 * a * a + -3 * r + 2 * a);
            },
          ],
          "ease-out": [
            "ease-out",
            function (e, t, n, i) {
              var a = (e /= i) * e,
                r = a * e;
              return (
                t +
                n * (0.3 * r * a + -1.6 * a * a + 2.2 * r + -1.8 * a + 1.9 * e)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (e, t, n, i) {
              var a = (e /= i) * e,
                r = a * e;
              return t + n * (2 * r * a + -5 * a * a + 2 * r + 2 * a);
            },
          ],
          linear: [
            "linear",
            function (e, t, n, i) {
              return (n * e) / i + t;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (e, t, n, i) {
              return n * (e /= i) * e + t;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (e, t, n, i) {
              return -n * (e /= i) * (e - 2) + t;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (e, t, n, i) {
              return (e /= i / 2) < 1
                ? (n / 2) * e * e + t
                : (-n / 2) * (--e * (e - 2) - 1) + t;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (e, t, n, i) {
              return n * (e /= i) * e * e + t;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (e, t, n, i) {
              return n * ((e = e / i - 1) * e * e + 1) + t;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (e, t, n, i) {
              return (e /= i / 2) < 1
                ? (n / 2) * e * e * e + t
                : (n / 2) * ((e -= 2) * e * e + 2) + t;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (e, t, n, i) {
              return n * (e /= i) * e * e * e + t;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (e, t, n, i) {
              return -n * ((e = e / i - 1) * e * e * e - 1) + t;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (e, t, n, i) {
              return (e /= i / 2) < 1
                ? (n / 2) * e * e * e * e + t
                : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (e, t, n, i) {
              return n * (e /= i) * e * e * e * e + t;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (e, t, n, i) {
              return n * ((e = e / i - 1) * e * e * e * e + 1) + t;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (e, t, n, i) {
              return (e /= i / 2) < 1
                ? (n / 2) * e * e * e * e * e + t
                : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (e, t, n, i) {
              return -n * Math.cos((e / i) * (Math.PI / 2)) + n + t;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (e, t, n, i) {
              return n * Math.sin((e / i) * (Math.PI / 2)) + t;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (e, t, n, i) {
              return (-n / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (e, t, n, i) {
              return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (e, t, n, i) {
              return e === i ? t + n : n * (1 - Math.pow(2, (-10 * e) / i)) + t;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (e, t, n, i) {
              return 0 === e
                ? t
                : e === i
                ? t + n
                : (e /= i / 2) < 1
                ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                : (n / 2) * (2 - Math.pow(2, -10 * --e)) + t;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (e, t, n, i) {
              return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (e, t, n, i) {
              return n * Math.sqrt(1 - (e = e / i - 1) * e) + t;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (e, t, n, i) {
              return (e /= i / 2) < 1
                ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (e, t, n, i, a) {
              return (
                void 0 === a && (a = 1.70158),
                n * (e /= i) * e * ((a + 1) * e - a) + t
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (e, t, n, i, a) {
              return (
                void 0 === a && (a = 1.70158),
                n * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (e, t, n, i, a) {
              return (
                void 0 === a && (a = 1.70158),
                (e /= i / 2) < 1
                  ? (n / 2) * e * e * ((1 + (a *= 1.525)) * e - a) + t
                  : (n / 2) *
                      ((e -= 2) * e * ((1 + (a *= 1.525)) * e + a) + 2) +
                    t
              );
            },
          ],
        },
        v = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        E = document,
        g = window,
        y = "bkwld-tram",
        I = /[\-\.0-9]/g,
        m = /[A-Z]/,
        T = "number",
        h = /^(rgb|#)/,
        _ = /(em|cm|mm|in|pt|pc|px)$/,
        b = /(em|cm|mm|in|pt|pc|px|%)$/,
        O = /(deg|rad|turn)$/,
        R = "unitless",
        A = /(all|none) 0s ease 0s/,
        S = /^(width|height)$/,
        L = " ",
        N = E.createElement("a"),
        w = ["Webkit", "Moz", "O", "ms"],
        C = ["-webkit-", "-moz-", "-o-", "-ms-"],
        x = function (e) {
          if (e in N.style) return { dom: e, css: e };
          var t,
            n,
            i = "",
            a = e.split("-");
          for (t = 0; t < a.length; t++)
            i += a[t].charAt(0).toUpperCase() + a[t].slice(1);
          for (t = 0; t < w.length; t++)
            if (((n = w[t] + i), n in N.style))
              return { dom: n, css: C[t] + e };
        },
        M = (t.support = {
          bind: Function.prototype.bind,
          transform: x("transform"),
          transition: x("transition"),
          backface: x("backface-visibility"),
          timing: x("transition-timing-function"),
        });
      if (M.transition) {
        var P = M.timing.dom;
        if (((N.style[P] = p["ease-in-back"][0]), !N.style[P]))
          for (var D in v) p[D][0] = v[D];
      }
      var V = (t.frame = (function () {
          var e =
            g.requestAnimationFrame ||
            g.webkitRequestAnimationFrame ||
            g.mozRequestAnimationFrame ||
            g.oRequestAnimationFrame ||
            g.msRequestAnimationFrame;
          return e && M.bind
            ? e.bind(g)
            : function (e) {
                g.setTimeout(e, 16);
              };
        })()),
        k = (t.now = (function () {
          var e = g.performance,
            t = e && (e.now || e.webkitNow || e.msNow || e.mozNow);
          return t && M.bind
            ? t.bind(e)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        G = f(function (t) {
          function i(e, t) {
            var n = d(("" + e).split(L)),
              i = n[0];
            t = t || {};
            var a = $[i];
            if (!a) return l("Unsupported property: " + i);
            if (!t.weak || !this.props[i]) {
              var r = a[0],
                o = this.props[i];
              return (
                o || (o = this.props[i] = new r.Bare()),
                o.init(this.$el, n, a, t),
                o
              );
            }
          }
          function r(e, t, n) {
            if (e) {
              var r = (0, a.default)(e);
              if (
                (t ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                "number" == r && t)
              )
                return (
                  (this.timer = new H({
                    duration: e,
                    context: this,
                    complete: u,
                  })),
                  void (this.active = !0)
                );
              if ("string" == r && t) {
                switch (e) {
                  case "hide":
                    E.call(this);
                    break;
                  case "stop":
                    f.call(this);
                    break;
                  case "redraw":
                    g.call(this);
                    break;
                  default:
                    i.call(this, e, n && n[1]);
                }
                return u.call(this);
              }
              if ("function" == r) return void e.call(this, this);
              if ("object" == r) {
                var o = 0;
                h.call(
                  this,
                  e,
                  function (e, t) {
                    e.span > o && (o = e.span), e.stop(), e.animate(t);
                  },
                  function (e) {
                    "wait" in e && (o = s(e.wait, 0));
                  }
                ),
                  T.call(this),
                  o > 0 &&
                    ((this.timer = new H({ duration: o, context: this })),
                    (this.active = !0),
                    t && (this.timer.complete = u));
                var c = this,
                  l = !1,
                  d = {};
                V(function () {
                  h.call(c, e, function (e) {
                    e.active && ((l = !0), (d[e.name] = e.nextStyle));
                  }),
                    l && c.$el.css(d);
                });
              }
            }
          }
          function o(e) {
            (e = s(e, 0)),
              this.active
                ? this.queue.push({ options: e })
                : ((this.timer = new H({
                    duration: e,
                    context: this,
                    complete: u,
                  })),
                  (this.active = !0));
          }
          function c(e) {
            return this.active
              ? (this.queue.push({ options: e, args: arguments }),
                void (this.timer.complete = u))
              : l(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function u() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var e = this.queue.shift();
              r.call(this, e.options, !0, e.args);
            }
          }
          function f(e) {
            var t;
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1),
              "string" == typeof e
                ? ((t = {}), (t[e] = 1))
                : (t =
                    "object" == (0, a.default)(e) && null != e
                      ? e
                      : this.props),
              h.call(this, t, _),
              T.call(this);
          }
          function p(e) {
            f.call(this, e), h.call(this, e, b, O);
          }
          function v(e) {
            "string" != typeof e && (e = "block"), (this.el.style.display = e);
          }
          function E() {
            f.call(this), (this.el.style.display = "none");
          }
          function g() {
            this.el.offsetHeight;
          }
          function I() {
            f.call(this), e.removeData(this.el, y), (this.$el = this.el = null);
          }
          function T() {
            var e,
              t,
              n = [];
            for (e in (this.upstream && n.push(this.upstream), this.props))
              (t = this.props[e]), t.active && n.push(t.string);
            (n = n.join(",")),
              this.style !== n &&
                ((this.style = n), (this.el.style[M.transition.dom] = n));
          }
          function h(e, t, a) {
            var r,
              o,
              c,
              u,
              s = t !== _,
              l = {};
            for (r in e)
              (c = e[r]),
                r in Z
                  ? (l.transform || (l.transform = {}), (l.transform[r] = c))
                  : (m.test(r) && (r = n(r)),
                    r in $ ? (l[r] = c) : (u || (u = {}), (u[r] = c)));
            for (r in l) {
              if (((c = l[r]), (o = this.props[r]), !o)) {
                if (!s) continue;
                o = i.call(this, r);
              }
              t.call(this, o, c);
            }
            a && u && a.call(this, u);
          }
          function _(e) {
            e.stop();
          }
          function b(e, t) {
            e.set(t);
          }
          function O(e) {
            this.$el.css(e);
          }
          function R(e, n) {
            t[e] = function () {
              return this.children
                ? S.call(this, n, arguments)
                : (this.el && n.apply(this, arguments), this);
            };
          }
          function S(e, t) {
            var n,
              i = this.children.length;
            for (n = 0; i > n; n++) e.apply(this.children[n], t);
            return this;
          }
          (t.init = function (t) {
            if (
              ((this.$el = e(t)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              z.keepInherited && !z.fallback)
            ) {
              var n = K(this.el, "transition");
              n && !A.test(n) && (this.upstream = n);
            }
            M.backface &&
              z.hideBackface &&
              Y(this.el, M.backface.css, "hidden");
          }),
            R("add", i),
            R("start", r),
            R("wait", o),
            R("then", c),
            R("next", u),
            R("stop", f),
            R("set", p),
            R("show", v),
            R("hide", E),
            R("redraw", g),
            R("destroy", I);
        }),
        F = f(G, function (t) {
          function n(t, n) {
            var i = e.data(t, y) || e.data(t, y, new G.Bare());
            return i.el || i.init(t), n ? i.start(n) : i;
          }
          t.init = function (t, i) {
            var a = e(t);
            if (!a.length) return this;
            if (1 === a.length) return n(a[0], i);
            var r = [];
            return (
              a.each(function (e, t) {
                r.push(n(t, i));
              }),
              (this.children = r),
              this
            );
          };
        }),
        U = f(function (e) {
          function t() {
            var e = this.get();
            this.update("auto");
            var t = this.get();
            return this.update(e), t;
          }
          function n(e, t, n) {
            return void 0 !== t && (n = t), e in p ? e : n;
          }
          function i(e) {
            var t = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e);
            return (t ? r(t[1], t[2], t[3]) : e).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var a = { duration: 500, ease: "ease", delay: 0 };
          (e.init = function (e, t, i, r) {
            (this.$el = e), (this.el = e[0]);
            var o = t[0];
            i[2] && (o = i[2]),
              q[o] && (o = q[o]),
              (this.name = o),
              (this.type = i[1]),
              (this.duration = s(t[1], this.duration, a.duration)),
              (this.ease = n(t[2], this.ease, a.ease)),
              (this.delay = s(t[3], this.delay, a.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = S.test(this.name)),
              (this.unit = r.unit || this.unit || z.defaultUnit),
              (this.angle = r.angle || this.angle || z.defaultAngle),
              z.fallback || r.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    L +
                    this.duration +
                    "ms" +
                    ("ease" != this.ease ? L + p[this.ease][0] : "") +
                    (this.delay ? L + this.delay + "ms" : "")));
          }),
            (e.set = function (e) {
              (e = this.convert(e, this.type)), this.update(e), this.redraw();
            }),
            (e.transition = function (e) {
              (this.active = !0),
                (e = this.convert(e, this.type)),
                this.auto &&
                  ("auto" == this.el.style[this.name] &&
                    (this.update(this.get()), this.redraw()),
                  "auto" == e && (e = t.call(this))),
                (this.nextStyle = e);
            }),
            (e.fallback = function (e) {
              var n =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (e = this.convert(e, this.type)),
                this.auto &&
                  ("auto" == n && (n = this.convert(this.get(), this.type)),
                  "auto" == e && (e = t.call(this))),
                (this.tween = new W({
                  from: n,
                  to: e,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (e.get = function () {
              return K(this.el, this.name);
            }),
            (e.update = function (e) {
              Y(this.el, this.name, e);
            }),
            (e.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                Y(this.el, this.name, this.get()));
              var e = this.tween;
              e && e.context && e.destroy();
            }),
            (e.convert = function (e, t) {
              if ("auto" == e && this.auto) return e;
              var n,
                a = "number" == typeof e,
                r = "string" == typeof e;
              switch (t) {
                case T:
                  if (a) return e;
                  if (r && "" === e.replace(I, "")) return +e;
                  n = "number(unitless)";
                  break;
                case h:
                  if (r) {
                    if ("" === e && this.original) return this.original;
                    if (t.test(e))
                      return "#" == e.charAt(0) && 7 == e.length ? e : i(e);
                  }
                  n = "hex or rgb string";
                  break;
                case _:
                  if (a) return e + this.unit;
                  if (r && t.test(e)) return e;
                  n = "number(px) or string(unit)";
                  break;
                case b:
                  if (a) return e + this.unit;
                  if (r && t.test(e)) return e;
                  n = "number(px) or string(unit or %)";
                  break;
                case O:
                  if (a) return e + this.angle;
                  if (r && t.test(e)) return e;
                  n = "number(deg) or string(angle)";
                  break;
                case R:
                  if (a) return e;
                  if (r && b.test(e)) return e;
                  n = "number(unitless) or string(unit or %)";
              }
              return c(n, e), e;
            }),
            (e.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        j = f(U, function (e, t) {
          e.init = function () {
            t.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), h));
          };
        }),
        X = f(U, function (e, t) {
          (e.init = function () {
            t.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (e.get = function () {
              return this.$el[this.name]();
            }),
            (e.update = function (e) {
              this.$el[this.name](e);
            });
        }),
        B = f(U, function (e, t) {
          function n(e, t) {
            var n, i, a, r, o;
            for (n in e)
              (r = Z[n]),
                (a = r[0]),
                (i = r[1] || n),
                (o = this.convert(e[n], a)),
                t.call(this, i, o, a);
          }
          (e.init = function () {
            t.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                Z.perspective &&
                  z.perspective &&
                  ((this.current.perspective = z.perspective),
                  Y(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (e.set = function (e) {
              n.call(this, e, function (e, t) {
                this.current[e] = t;
              }),
                Y(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (e.transition = function (e) {
              var t = this.values(e);
              this.tween = new Q({
                current: this.current,
                values: t,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var n,
                i = {};
              for (n in this.current) i[n] = n in t ? t[n] : this.current[n];
              (this.active = !0), (this.nextStyle = this.style(i));
            }),
            (e.fallback = function (e) {
              var t = this.values(e);
              this.tween = new Q({
                current: this.current,
                values: t,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (e.update = function () {
              Y(this.el, this.name, this.style(this.current));
            }),
            (e.style = function (e) {
              var t,
                n = "";
              for (t in e) n += t + "(" + e[t] + ") ";
              return n;
            }),
            (e.values = function (e) {
              var t,
                i = {};
              return (
                n.call(this, e, function (e, n, a) {
                  (i[e] = n),
                    void 0 === this.current[e] &&
                      ((t = 0),
                      ~e.indexOf("scale") && (t = 1),
                      (this.current[e] = this.convert(t, a)));
                }),
                i
              );
            });
        }),
        W = f(function (t) {
          function n(e) {
            1 === f.push(e) && V(a);
          }
          function a() {
            var e,
              t,
              n,
              i = f.length;
            if (i)
              for (V(a), t = k(), e = i; e--; ) (n = f[e]), n && n.render(t);
          }
          function c(t) {
            var n,
              i = e.inArray(t, f);
            i >= 0 &&
              ((n = f.slice(i + 1)),
              (f.length = i),
              n.length && (f = f.concat(n)));
          }
          function s(e) {
            return Math.round(e * v) / v;
          }
          function l(e, t, n) {
            return r(
              e[0] + n * (t[0] - e[0]),
              e[1] + n * (t[1] - e[1]),
              e[2] + n * (t[2] - e[2])
            );
          }
          var d = { ease: p.ease[1], from: 0, to: 1 };
          (t.init = function (e) {
            (this.duration = e.duration || 0), (this.delay = e.delay || 0);
            var t = e.ease || d.ease;
            p[t] && (t = p[t][1]),
              "function" != typeof t && (t = d.ease),
              (this.ease = t),
              (this.update = e.update || o),
              (this.complete = e.complete || o),
              (this.context = e.context || this),
              (this.name = e.name);
            var n = e.from,
              i = e.to;
            void 0 === n && (n = d.from),
              void 0 === i && (i = d.to),
              (this.unit = e.unit || ""),
              "number" == typeof n && "number" == typeof i
                ? ((this.begin = n), (this.change = i - n))
                : this.format(i, n),
              (this.value = this.begin + this.unit),
              (this.start = k()),
              !1 !== e.autoplay && this.play();
          }),
            (t.play = function () {
              this.active ||
                (this.start || (this.start = k()), (this.active = !0), n(this));
            }),
            (t.stop = function () {
              this.active && ((this.active = !1), c(this));
            }),
            (t.render = function (e) {
              var t,
                n = e - this.start;
              if (this.delay) {
                if (n <= this.delay) return;
                n -= this.delay;
              }
              if (n < this.duration) {
                var i = this.ease(n, 0, 1, this.duration);
                return (
                  (t = this.startRGB
                    ? l(this.startRGB, this.endRGB, i)
                    : s(this.begin + i * this.change)),
                  (this.value = t + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (t = this.endHex || this.begin + this.change),
                (this.value = t + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (t.format = function (e, t) {
              if (((t += ""), (e += ""), "#" == e.charAt(0)))
                return (
                  (this.startRGB = i(t)),
                  (this.endRGB = i(e)),
                  (this.endHex = e),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var n = t.replace(I, ""),
                  a = e.replace(I, "");
                n !== a && u("tween", t, e), (this.unit = n);
              }
              (t = parseFloat(t)),
                (e = parseFloat(e)),
                (this.begin = this.value = t),
                (this.change = e - t);
            }),
            (t.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var f = [],
            v = 1e3;
        }),
        H = f(W, function (e) {
          (e.init = function (e) {
            (this.duration = e.duration || 0),
              (this.complete = e.complete || o),
              (this.context = e.context),
              this.play();
          }),
            (e.render = function (e) {
              var t = e - this.start;
              t < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Q = f(W, function (e, t) {
          (e.init = function (e) {
            var t, n;
            for (t in ((this.context = e.context),
            (this.update = e.update),
            (this.tweens = []),
            (this.current = e.current),
            e.values))
              (n = e.values[t]),
                this.current[t] !== n &&
                  this.tweens.push(
                    new W({
                      name: t,
                      from: this.current[t],
                      to: n,
                      duration: e.duration,
                      delay: e.delay,
                      ease: e.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (e.render = function (e) {
              var t,
                n,
                i = this.tweens.length,
                a = !1;
              for (t = i; t--; )
                (n = this.tweens[t]),
                  n.context &&
                    (n.render(e), (this.current[n.name] = n.value), (a = !0));
              return a
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (e.destroy = function () {
              if ((t.destroy.call(this), this.tweens)) {
                var e,
                  n = this.tweens.length;
                for (e = n; e--; ) this.tweens[e].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        z = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !M.transition,
          agentTests: [],
        });
      (t.fallback = function (e) {
        if (!M.transition) return (z.fallback = !0);
        z.agentTests.push("(" + e + ")");
        var t = new RegExp(z.agentTests.join("|"), "i");
        z.fallback = t.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (e) {
          return new W(e);
        }),
        (t.delay = function (e, t, n) {
          return new H({ complete: t, duration: e, context: n });
        }),
        (e.fn.tram = function (e) {
          return t.call(null, this, e);
        });
      var Y = e.style,
        K = e.css,
        q = { transform: M.transform && M.transform.css },
        $ = {
          color: [j, h],
          background: [j, h, "background-color"],
          "outline-color": [j, h],
          "border-color": [j, h],
          "border-top-color": [j, h],
          "border-right-color": [j, h],
          "border-bottom-color": [j, h],
          "border-left-color": [j, h],
          "border-width": [U, _],
          "border-top-width": [U, _],
          "border-right-width": [U, _],
          "border-bottom-width": [U, _],
          "border-left-width": [U, _],
          "border-spacing": [U, _],
          "letter-spacing": [U, _],
          margin: [U, _],
          "margin-top": [U, _],
          "margin-right": [U, _],
          "margin-bottom": [U, _],
          "margin-left": [U, _],
          padding: [U, _],
          "padding-top": [U, _],
          "padding-right": [U, _],
          "padding-bottom": [U, _],
          "padding-left": [U, _],
          "outline-width": [U, _],
          opacity: [U, T],
          top: [U, b],
          right: [U, b],
          bottom: [U, b],
          left: [U, b],
          "font-size": [U, b],
          "text-indent": [U, b],
          "word-spacing": [U, b],
          width: [U, b],
          "min-width": [U, b],
          "max-width": [U, b],
          height: [U, b],
          "min-height": [U, b],
          "max-height": [U, b],
          "line-height": [U, R],
          "scroll-top": [X, T, "scrollTop"],
          "scroll-left": [X, T, "scrollLeft"],
        },
        Z = {};
      M.transform &&
        (($.transform = [B]),
        (Z = {
          x: [b, "translateX"],
          y: [b, "translateY"],
          rotate: [O],
          rotateX: [O],
          rotateY: [O],
          scale: [T],
          scaleX: [T],
          scaleY: [T],
          skew: [O],
          skewX: [O],
          skewY: [O],
        })),
        M.transform &&
          M.backface &&
          ((Z.z = [b, "translateZ"]),
          (Z.rotateZ = [O]),
          (Z.scaleZ = [T]),
          (Z.perspective = [_]));
      var J = /ms/,
        ee = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  },
  function (e, t, n) {
    var i = n(13),
      a = n(40),
      r = n(144),
      o = n(71),
      c = n(27),
      u = n(73),
      s = n(9),
      l = n(80),
      d = Object.getOwnPropertyDescriptor;
    t.f = i
      ? d
      : function (e, t) {
          if (((e = c(e)), (t = u(t)), l))
            try {
              return d(e, t);
            } catch (e) {}
          if (s(e, t)) return o(!a(r.f, e, t), e[t]);
        };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = i.TypeError;
    e.exports = function (e) {
      if (null == e) throw a("Can't call method on " + e);
      return e;
    };
  },
  function (e, t, n) {
    var i = n(147),
      a = n(74);
    e.exports = function (e) {
      var t = i(e, "string");
      return a(t) ? t : t + "";
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(28),
      r = n(7),
      o = n(148),
      c = n(75),
      u = i.Object;
    e.exports = c
      ? function (e) {
          return "symbol" == typeof e;
        }
      : function (e) {
          var t = a("Symbol");
          return r(t) && o(t.prototype, u(e));
        };
  },
  function (e, t, n) {
    var i = n(76);
    e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (e, t, n) {
    var i = n(149),
      a = n(19);
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !a(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && i && i < 41)
        );
      });
  },
  function (e, t, n) {
    var i = n(0),
      a = n(78),
      r = n(9),
      o = n(79),
      c = n(76),
      u = n(75),
      s = a("wks"),
      l = i.Symbol,
      d = l && l.for,
      f = u ? l : (l && l.withoutSetter) || o;
    e.exports = function (e) {
      if (!r(s, e) || (!c && "string" != typeof s[e])) {
        var t = "Symbol." + e;
        c && r(l, e) ? (s[e] = l[e]) : (s[e] = u && d ? d(t) : f(t));
      }
      return s[e];
    };
  },
  function (e, t, n) {
    var i = n(155),
      a = n(41);
    (e.exports = function (e, t) {
      return a[e] || (a[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: i ? "pure" : "global",
      copyright: "Â© 2021 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (e, t, n) {
    var i = n(5),
      a = 0,
      r = Math.random(),
      o = i((1).toString);
    e.exports = function (e) {
      return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++a + r, 36);
    };
  },
  function (e, t, n) {
    var i = n(13),
      a = n(19),
      r = n(81);
    e.exports =
      !i &&
      !a(function () {
        return (
          7 !=
          Object.defineProperty(r("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, n) {
    var i = n(0),
      a = n(20),
      r = i.document,
      o = a(r) && a(r.createElement);
    e.exports = function (e) {
      return o ? r.createElement(e) : {};
    };
  },
  function (e, t, n) {
    var i = n(5),
      a = n(7),
      r = n(41),
      o = i(Function.toString);
    a(r.inspectSource) ||
      (r.inspectSource = function (e) {
        return o(e);
      }),
      (e.exports = r.inspectSource);
  },
  function (e, t, n) {
    var i = n(78),
      a = n(79),
      r = i("keys");
    e.exports = function (e) {
      return r[e] || (r[e] = a(e));
    };
  },
  function (e, t, n) {
    var i = n(5),
      a = n(9),
      r = n(27),
      o = n(85).indexOf,
      c = n(44),
      u = i([].push);
    e.exports = function (e, t) {
      var n,
        i = r(e),
        s = 0,
        l = [];
      for (n in i) !a(c, n) && a(i, n) && u(l, n);
      for (; t.length > s; ) a(i, (n = t[s++])) && (~o(l, n) || u(l, n));
      return l;
    };
  },
  function (e, t, n) {
    var i = n(27),
      a = n(164),
      r = n(165),
      o = function (e) {
        return function (t, n, o) {
          var c,
            u = i(t),
            s = r(u),
            l = a(o, s);
          if (e && n != n) {
            for (; s > l; ) if (((c = u[l++]), c != c)) return !0;
          } else
            for (; s > l; l++)
              if ((e || l in u) && u[l] === n) return e || l || 0;
          return !e && -1;
        };
      };
    e.exports = { includes: o(!0), indexOf: o(!1) };
  },
  function (e, t) {
    var n = Math.ceil,
      i = Math.floor;
    e.exports = function (e) {
      var t = +e;
      return t != t || 0 === t ? 0 : (t > 0 ? i : n)(t);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(46);
    n.d(t, "createStore", function () {
      return i.default;
    });
    var a = n(90);
    n.d(t, "combineReducers", function () {
      return a.default;
    });
    var r = n(92);
    n.d(t, "bindActionCreators", function () {
      return r.default;
    });
    var o = n(93);
    n.d(t, "applyMiddleware", function () {
      return o.default;
    });
    var c = n(47);
    n.d(t, "compose", function () {
      return c.default;
    });
    n(91);
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      if (!Object(o.default)(e) || Object(a.default)(e) != c) return !1;
      var t = Object(r.default)(e);
      if (null === t) return !0;
      var n = d.call(t, "constructor") && t.constructor;
      return "function" == typeof n && n instanceof n && l.call(n) == f;
    }
    n.r(t);
    var a = n(175),
      r = n(180),
      o = n(182),
      c = "[object Object]",
      u = Function.prototype,
      s = Object.prototype,
      l = u.toString,
      d = s.hasOwnProperty,
      f = l.call(Object);
    t.default = i;
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(176),
      a = i.default.Symbol;
    t.default = a;
  },
  function (e, t, n) {
    "use strict";
    function i(e, t) {
      var n = t && t.type,
        i = (n && '"' + n.toString() + '"') || "an action";
      return (
        "Given action " +
        i +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function a(e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t],
          i = n(void 0, { type: o.ActionTypes.INIT });
        if (void 0 === i)
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var a =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (void 0 === n(void 0, { type: a }))
          throw new Error(
            'Reducer "' +
              t +
              "\" returned undefined when probed with a random type. Don't try to handle " +
              o.ActionTypes.INIT +
              ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
          );
      });
    }
    function r(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var o = t[r];
        0, "function" == typeof e[o] && (n[o] = e[o]);
      }
      var c,
        u = Object.keys(n);
      try {
        a(n);
      } catch (e) {
        c = e;
      }
      return function () {
        var e =
            arguments.length <= 0 || void 0 === arguments[0]
              ? {}
              : arguments[0],
          t = arguments[1];
        if (c) throw c;
        for (var a = !1, r = {}, o = 0; o < u.length; o++) {
          var s = u[o],
            l = n[s],
            d = e[s],
            f = l(d, t);
          if (void 0 === f) {
            var p = i(s, t);
            throw new Error(p);
          }
          (r[s] = f), (a = a || f !== d);
        }
        return a ? r : e;
      };
    }
    n.r(t),
      n.d(t, "default", function () {
        return r;
      });
    var o = n(46);
    n(88), n(91);
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      "undefined" != typeof console &&
        "function" == typeof console.error &&
        console.error(e);
      try {
        throw new Error(e);
      } catch (e) {}
    }
    n.r(t),
      n.d(t, "default", function () {
        return i;
      });
  },
  function (e, t, n) {
    "use strict";
    function i(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function a(e, t) {
      if ("function" == typeof e) return i(e, t);
      if ("object" != typeof e || null === e)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (null === e ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(e), a = {}, r = 0; r < n.length; r++) {
        var o = n[r],
          c = e[o];
        "function" == typeof c && (a[o] = i(c, t));
      }
      return a;
    }
    n.r(t),
      n.d(t, "default", function () {
        return a;
      });
  },
  function (e, t, n) {
    "use strict";
    function i() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e) {
        return function (n, i, o) {
          var c = e(n, i, o),
            u = c.dispatch,
            s = [],
            l = {
              getState: c.getState,
              dispatch: function (e) {
                return u(e);
              },
            };
          return (
            (s = t.map(function (e) {
              return e(l);
            })),
            (u = a.default.apply(void 0, s)(c.dispatch)),
            r({}, c, { dispatch: u })
          );
        };
      };
    }
    n.r(t),
      n.d(t, "default", function () {
        return i;
      });
    var a = n(47),
      r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ActionAppliesTo = t.ActionTypeConsts = void 0);
    var i = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    t.ActionTypeConsts = i;
    var a = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    t.ActionAppliesTo = a;
  },
  function (e, t, n) {
    var i = n(96),
      a = n(260),
      r = i(a);
    e.exports = r;
  },
  function (e, t, n) {
    function i(e) {
      return function (t, n, i) {
        var c = Object(t);
        if (!r(t)) {
          var u = a(n, 3);
          (t = o(t)),
            (n = function (e) {
              return u(c[e], e, c);
            });
        }
        var s = e(t, n, i);
        return s > -1 ? c[u ? t[s] : s] : void 0;
      };
    }
    var a = n(10),
      r = n(16),
      o = n(36);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      var t = (this.__data__ = new a(e));
      this.size = t.size;
    }
    var a = n(32),
      r = n(202),
      o = n(203),
      c = n(204),
      u = n(205),
      s = n(206);
    (i.prototype.clear = r),
      (i.prototype.delete = o),
      (i.prototype.get = c),
      (i.prototype.has = u),
      (i.prototype.set = s),
      (e.exports = i);
  },
  function (e, t, n) {
    function i(e) {
      if (!r(e)) return !1;
      var t = a(e);
      return t == c || t == u || t == o || t == s;
    }
    var a = n(15),
      r = n(8),
      o = "[object AsyncFunction]",
      c = "[object Function]",
      u = "[object GeneratorFunction]",
      s = "[object Proxy]";
    e.exports = i;
  },
  function (e, t, n) {
    (function (t) {
      var n = "object" == typeof t && t && t.Object === Object && t;
      e.exports = n;
    }.call(this, n(26)));
  },
  function (e, t) {
    function n(e) {
      if (null != e) {
        try {
          return a.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    }
    var i = Function.prototype,
      a = i.toString;
    e.exports = n;
  },
  function (e, t, n) {
    function i(e, t, n, o, c) {
      return (
        e === t ||
        (null == e || null == t || (!r(e) && !r(t))
          ? e != e && t != t
          : a(e, t, n, o, i, c))
      );
    }
    var a = n(225),
      r = n(12);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t, n, i, s, l) {
      var d = n & c,
        f = e.length,
        p = t.length;
      if (f != p && !(d && p > f)) return !1;
      var v = l.get(e),
        E = l.get(t);
      if (v && E) return v == t && E == e;
      var g = -1,
        y = !0,
        I = n & u ? new a() : void 0;
      for (l.set(e, t), l.set(t, e); ++g < f; ) {
        var m = e[g],
          T = t[g];
        if (i) var h = d ? i(T, m, g, t, e, l) : i(m, T, g, e, t, l);
        if (void 0 !== h) {
          if (h) continue;
          y = !1;
          break;
        }
        if (I) {
          if (
            !r(t, function (e, t) {
              if (!o(I, t) && (m === e || s(m, e, n, i, l))) return I.push(t);
            })
          ) {
            y = !1;
            break;
          }
        } else if (m !== T && !s(m, T, n, i, l)) {
          y = !1;
          break;
        }
      }
      return l.delete(e), l.delete(t), y;
    }
    var a = n(226),
      r = n(229),
      o = n(230),
      c = 1,
      u = 2;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t, n) {
      var i = t(e);
      return r(e) ? i : a(i, n(e));
    }
    var a = n(52),
      r = n(2);
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(237),
      a = n(105),
      r = Object.prototype,
      o = r.propertyIsEnumerable,
      c = Object.getOwnPropertySymbols,
      u = c
        ? function (e) {
            return null == e
              ? []
              : ((e = Object(e)),
                i(c(e), function (t) {
                  return o.call(e, t);
                }));
          }
        : a;
    e.exports = u;
  },
  function (e, t) {
    function n() {
      return [];
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e, t) {
      var n = o(e),
        i = !n && r(e),
        l = !n && !i && c(e),
        f = !n && !i && !l && s(e),
        p = n || i || l || f,
        v = p ? a(e.length, String) : [],
        E = v.length;
      for (var g in e)
        (!t && !d.call(e, g)) ||
          (p &&
            ("length" == g ||
              (l && ("offset" == g || "parent" == g)) ||
              (f &&
                ("buffer" == g || "byteLength" == g || "byteOffset" == g)) ||
              u(g, E))) ||
          v.push(g);
      return v;
    }
    var a = n(238),
      r = n(37),
      o = n(2),
      c = n(53),
      u = n(54),
      s = n(55),
      l = Object.prototype,
      d = l.hasOwnProperty;
    e.exports = i;
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t) {
    function n(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    e.exports = n;
  },
  function (e, t, n) {
    var i = n(11),
      a = n(6),
      r = i(a, "WeakMap");
    e.exports = r;
  },
  function (e, t, n) {
    function i(e) {
      return e == e && !a(e);
    }
    var a = n(8);
    e.exports = i;
  },
  function (e, t) {
    function n(e, t) {
      return function (n) {
        return null != n && n[e] === t && (void 0 !== t || e in Object(n));
      };
    }
    e.exports = n;
  },
  function (e, t) {
    function n(e, t) {
      for (var n = -1, i = null == e ? 0 : e.length, a = Array(i); ++n < i; )
        a[n] = t(e[n], n, e);
      return a;
    }
    e.exports = n;
  },
  function (e, t) {
    function n(e) {
      return function (t) {
        return null == t ? void 0 : t[e];
      };
    }
    e.exports = n;
  },
  function (e, t) {
    function n(e, t, n, i) {
      for (var a = e.length, r = n + (i ? 1 : -1); i ? r-- : ++r < a; )
        if (t(e[r], r, e)) return r;
      return -1;
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e) {
      var t = a(e),
        n = t % 1;
      return t == t ? (n ? t - n : t) : 0;
    }
    var a = n(261);
    e.exports = i;
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      return Math.pow(e, 2);
    }
    function a(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function r(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function o(e) {
      return Math.pow(e, 3);
    }
    function c(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function u(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function s(e) {
      return Math.pow(e, 4);
    }
    function l(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function d(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function f(e) {
      return Math.pow(e, 5);
    }
    function p(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function v(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function E(e) {
      return 1 - Math.cos(e * (Math.PI / 2));
    }
    function g(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function y(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function I(e) {
      return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function m(e) {
      return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
    }
    function T(e) {
      return 0 === e
        ? 0
        : 1 === e
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (2 - Math.pow(2, -10 * --e));
    }
    function h(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function _(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function b(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function O(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function R(e) {
      var t = G;
      return e * e * ((t + 1) * e - t);
    }
    function A(e) {
      var t = G;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function S(e) {
      var t = G;
      return (e /= 0.5) < 1
        ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
        : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
    }
    function L(e) {
      var t = G,
        n = 0,
        i = 1;
      return 0 === e
        ? 0
        : 1 === e
        ? 1
        : (n || (n = 0.3),
          i < 1
            ? ((i = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
          -i *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / n));
    }
    function N(e) {
      var t = G,
        n = 0,
        i = 1;
      return 0 === e
        ? 0
        : 1 === e
        ? 1
        : (n || (n = 0.3),
          i < 1
            ? ((i = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
          i * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) +
            1);
    }
    function w(e) {
      var t = G,
        n = 0,
        i = 1;
      return 0 === e
        ? 0
        : 2 == (e /= 0.5)
        ? 1
        : (n || (n = 0.3 * 1.5),
          i < 1
            ? ((i = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
          e < 1
            ? i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / n) *
              -0.5
            : i *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n) *
                0.5 +
              1);
    }
    function C(e) {
      var t = G;
      return (e /= 0.5) < 1
        ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
        : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
    }
    function x(e) {
      var t = G;
      return e * e * ((t + 1) * e - t);
    }
    function M(e) {
      var t = G;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function P(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function D(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
    var V = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.inQuad = i),
      (t.outQuad = a),
      (t.inOutQuad = r),
      (t.inCubic = o),
      (t.outCubic = c),
      (t.inOutCubic = u),
      (t.inQuart = s),
      (t.outQuart = l),
      (t.inOutQuart = d),
      (t.inQuint = f),
      (t.outQuint = p),
      (t.inOutQuint = v),
      (t.inSine = E),
      (t.outSine = g),
      (t.inOutSine = y),
      (t.inExpo = I),
      (t.outExpo = m),
      (t.inOutExpo = T),
      (t.inCirc = h),
      (t.outCirc = _),
      (t.inOutCirc = b),
      (t.outBounce = O),
      (t.inBack = R),
      (t.outBack = A),
      (t.inOutBack = S),
      (t.inElastic = L),
      (t.outElastic = N),
      (t.inOutElastic = w),
      (t.swingFromTo = C),
      (t.swingFrom = x),
      (t.swingTo = M),
      (t.bounce = P),
      (t.bouncePast = D),
      (t.easeInOut = t.easeOut = t.easeIn = t.ease = void 0);
    var k = V(n(117)),
      G = 1.70158,
      F = (0, k.default)(0.25, 0.1, 0.25, 1);
    t.ease = F;
    var U = (0, k.default)(0.42, 0, 1, 1);
    t.easeIn = U;
    var j = (0, k.default)(0, 0, 0.58, 1);
    t.easeOut = j;
    var X = (0, k.default)(0.42, 0, 0.58, 1);
    t.easeInOut = X;
  },
  function (e, t) {
    function n(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function i(e, t) {
      return 3 * t - 6 * e;
    }
    function a(e) {
      return 3 * e;
    }
    function r(e, t, r) {
      return ((n(t, r) * e + i(t, r)) * e + a(t)) * e;
    }
    function o(e, t, r) {
      return 3 * n(t, r) * e * e + 2 * i(t, r) * e + a(t);
    }
    function c(e, t, n, i, a) {
      var o,
        c,
        u = 0;
      do {
        (c = t + (n - t) / 2), (o = r(c, i, a) - e), o > 0 ? (n = c) : (t = c);
      } while (Math.abs(o) > d && ++u < f);
      return c;
    }
    function u(e, t, n, i) {
      for (var a = 0; a < s; ++a) {
        var c = o(t, n, i);
        if (0 === c) return t;
        var u = r(t, n, i) - e;
        t -= u / c;
      }
      return t;
    }
    var s = 4,
      l = 0.001,
      d = 1e-7,
      f = 10,
      p = 11,
      v = 1 / (p - 1),
      E = "function" == typeof Float32Array;
    e.exports = function (e, t, n, i) {
      function a(t) {
        for (var i = 0, a = 1, r = p - 1; a !== r && s[a] <= t; ++a) i += v;
        --a;
        var d = (t - s[a]) / (s[a + 1] - s[a]),
          f = i + d * v,
          E = o(f, e, n);
        return E >= l ? u(t, f, e, n) : 0 === E ? f : c(t, i, i + v, e, n);
      }
      if (!(0 <= e && e <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var s = E ? new Float32Array(p) : new Array(p);
      if (e !== t || n !== i) for (var d = 0; d < p; ++d) s[d] = r(d * v, e, n);
      return function (o) {
        return e === t && n === i
          ? o
          : 0 === o
          ? 0
          : 1 === o
          ? 1
          : r(a(o), t, i);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        i = Math.pow(n, t),
        a = Number(Math.round(e * i) / i);
      return Math.abs(a) > 1e-4 ? a : 0;
    }
    function a(e) {
      return d.default.apply(void 0, (0, c.default)(e));
    }
    function r(e, t, n) {
      return 0 === t
        ? 0
        : 1 === t
        ? 1
        : i(n ? (t > 0 ? n(t) : t) : t > 0 && e && l[e] ? l[e](t) : t);
    }
    var o = n(1),
      c = o(n(119)),
      u = n(1),
      s = n(18);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.optimizeFloat = i),
      (t.createBezierEasing = a),
      (t.applyEasing = r);
    var l = s(n(116)),
      d = u(n(117));
  },
  function (e, t, n) {
    function i(e) {
      return a(e) || r(e) || o();
    }
    var a = n(264),
      r = n(265),
      o = n(266);
    e.exports = i;
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      return e === c.ActionTypeConsts.PLUGIN_LOTTIE;
    }
    var a = n(1),
      r = a(n(21));
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isPluginType = i),
      (t.clearPlugin =
        t.renderPlugin =
        t.createPluginInstance =
        t.getPluginDestination =
        t.getPluginDuration =
        t.getPluginOrigin =
        t.getPluginConfig =
          void 0);
    var o = n(268),
      c = n(4),
      u = n(48),
      s = (0, r.default)({}, c.ActionTypeConsts.PLUGIN_LOTTIE, {
        getConfig: o.getPluginConfig,
        getOrigin: o.getPluginOrigin,
        getDuration: o.getPluginDuration,
        getDestination: o.getPluginDestination,
        createInstance: o.createPluginInstance,
        render: o.renderPlugin,
        clear: o.clearPlugin,
      }),
      l = function (e) {
        return function (t) {
          if (!u.IS_BROWSER_ENV)
            return function () {
              return null;
            };
          var n = s[t];
          if (!n) throw new Error("IX2 no plugin configured for: ".concat(t));
          var i = n[e];
          if (!i) throw new Error("IX2 invalid plugin method: ".concat(e));
          return i;
        };
      },
      d = l("getConfig");
    t.getPluginConfig = d;
    var f = l("getOrigin");
    t.getPluginOrigin = f;
    var p = l("getDuration");
    t.getPluginDuration = p;
    var v = l("getDestination");
    t.getPluginDestination = v;
    var E = l("createInstance");
    t.createPluginInstance = E;
    var g = l("render");
    t.renderPlugin = g;
    var y = l("clear");
    t.clearPlugin = y;
  },
  function (e, t, n) {
    var i = n(122),
      a = n(275),
      r = a(i);
    e.exports = r;
  },
  function (e, t, n) {
    function i(e, t) {
      return e && a(e, t, r);
    }
    var a = n(273),
      r = n(36);
    e.exports = i;
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      se({
        store: e,
        select: function (e) {
          var t = e.ixRequest;
          return t.preview;
        },
        onChange: o,
      }),
        se({
          store: e,
          select: function (e) {
            var t = e.ixRequest;
            return t.playback;
          },
          onChange: u,
        }),
        se({
          store: e,
          select: function (e) {
            var t = e.ixRequest;
            return t.stop;
          },
          onChange: s,
        }),
        se({
          store: e,
          select: function (e) {
            var t = e.ixRequest;
            return t.clear;
          },
          onChange: l,
        });
    }
    function a(e) {
      se({
        store: e,
        select: function (e) {
          var t = e.ixSession;
          return t.mediaQueryKey;
        },
        onChange: function () {
          v(e),
            fe({ store: e, elementApi: K }),
            d({ store: e, allowEvents: !0 }),
            c();
        },
      });
    }
    function r(e, t) {
      var n = se({
        store: e,
        select: function (e) {
          var t = e.ixSession;
          return t.tick;
        },
        onChange: function (e) {
          t(e), n();
        },
      });
    }
    function o(e, t) {
      var n = e.rawData,
        i = e.defer,
        a = function () {
          d({ store: t, rawData: n, allowEvents: !0 }), c();
        };
      i ? setTimeout(a, 0) : a();
    }
    function c() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function u(e, t) {
      var n = e.actionTypeId,
        i = e.actionListId,
        a = e.actionItemId,
        r = e.eventId,
        o = e.allowEvents,
        c = e.immediate,
        u = e.testManual,
        s = e.verbose,
        l = void 0 === s || s,
        f = e.rawData;
      if (i && a && f && c) {
        var p = f.actionLists[i];
        p && (f = ge({ actionList: p, actionItemId: a, rawData: f }));
      }
      if (
        (d({ store: t, rawData: f, allowEvents: o, testManual: u }),
        (i && n === Q.ActionTypeConsts.GENERAL_START_ACTION) || Z(n))
      ) {
        R({ store: t, actionListId: i }),
          b({ store: t, actionListId: i, eventId: r });
        var v = A({
          store: t,
          eventId: r,
          actionListId: i,
          immediate: c,
          verbose: l,
        });
        l &&
          v &&
          t.dispatch(
            (0, Y.actionListPlaybackChanged)({ actionListId: i, isPlaying: !c })
          );
      }
    }
    function s(e, t) {
      var n = e.actionListId;
      n ? R({ store: t, actionListId: n }) : O({ store: t }), v(t);
    }
    function l(e, t) {
      v(t), fe({ store: t, elementApi: K });
    }
    function d(e) {
      var t = e.store,
        n = e.rawData,
        i = e.allowEvents,
        r = e.testManual,
        o = t.getState(),
        c = o.ixSession;
      n && t.dispatch((0, Y.rawDataImported)(n)),
        c.active ||
          (t.dispatch(
            (0, Y.sessionInitialized)({
              hasBoundaryNodes: Boolean(document.querySelector(te)),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          i &&
            (I(t), f(), t.getState().ixSession.hasDefinedMediaQueries && a(t)),
          t.dispatch((0, Y.sessionStarted)()),
          p(t, r));
    }
    function f() {
      var e = document,
        t = e.documentElement;
      -1 === t.className.indexOf(ae) && (t.className += " ".concat(ae));
    }
    function p(e, t) {
      var n = function n(i) {
        var a = e.getState(),
          o = a.ixSession,
          c = a.ixParameters;
        o.active &&
          (e.dispatch((0, Y.animationFrameChanged)(i, c)),
          t ? r(e, n) : requestAnimationFrame(n));
      };
      n(window.performance.now());
    }
    function v(e) {
      var t = e.getState(),
        n = t.ixSession;
      if (n.active) {
        var i = n.eventListeners;
        i.forEach(E), e.dispatch((0, Y.sessionStopped)());
      }
    }
    function E(e) {
      var t = e.target,
        n = e.listenerParams;
      t.removeEventListener.apply(t, n);
    }
    function g(e) {
      var t = e.store,
        n = e.eventStateKey,
        i = e.eventTarget,
        a = e.eventId,
        r = e.eventConfig,
        o = e.actionListId,
        c = e.parameterGroup,
        u = e.smoothing,
        s = e.restingValue,
        l = t.getState(),
        d = l.ixData,
        f = l.ixSession,
        p = d.events,
        v = p[a],
        E = v.eventTypeId,
        g = {},
        I = {},
        m = [],
        T = c.continuousActionGroups,
        h = c.id;
      ye(E, r) && (h = Ie(n, h));
      var _ = f.hasBoundaryNodes && i ? K.getClosestElement(i, te) : null;
      T.forEach(function (e) {
        var t = e.keyframe,
          n = e.actionItems;
        n.forEach(function (e) {
          var n = e.actionTypeId,
            a = e.config.target;
          if (a) {
            var r = a.boundaryMode ? _ : null,
              o = he(a) + ee + n;
            if (((I[o] = y(I[o], t, e)), !g[o])) {
              g[o] = !0;
              var c = e.config;
              oe({
                config: c,
                event: v,
                eventTarget: i,
                elementRoot: r,
                elementApi: K,
              }).forEach(function (e) {
                m.push({ element: e, key: o });
              });
            }
          }
        });
      }),
        m.forEach(function (e) {
          var n = e.element,
            i = e.key,
            r = I[i],
            c = (0, F.default)(r, "[0].actionItems[0]", {}),
            l = c.actionTypeId,
            d = Re(l) ? Ae(l)(n, c) : null,
            f = ue({ element: n, actionItem: c, elementApi: K }, d);
          S({
            store: t,
            element: n,
            eventId: a,
            actionListId: o,
            actionItem: c,
            destination: f,
            continuous: !0,
            parameterId: h,
            actionGroups: r,
            smoothing: u,
            restingValue: s,
            pluginInstance: d,
          });
        });
    }
    function y() {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        n = arguments.length > 1 ? arguments[1] : void 0,
        i = arguments.length > 2 ? arguments[2] : void 0,
        a = (0, M.default)(t);
      return (
        a.some(function (t, i) {
          return t.keyframe === n && ((e = i), !0);
        }),
        null == e && ((e = a.length), a.push({ keyframe: n, actionItems: [] })),
        a[e].actionItems.push(i),
        a
      );
    }
    function I(e) {
      var t = e.getState(),
        n = t.ixData,
        i = n.eventTypeMap;
      T(e),
        (0, W.default)(i, function (t, n) {
          var i = q.default[n];
          i
            ? h({ logic: i, store: e, events: t })
            : console.warn("IX2 event type not configured: ".concat(n));
        });
      var a = e.getState(),
        r = a.ixSession;
      r.eventListeners.length && m(e);
    }
    function m(e) {
      var t = function () {
        T(e);
      };
      Ce.forEach(function (n) {
        window.addEventListener(n, t),
          e.dispatch((0, Y.eventListenerAdded)(window, [n, t]));
      }),
        t();
    }
    function T(e) {
      var t = e.getState(),
        n = t.ixSession,
        i = t.ixData,
        a = window.innerWidth;
      if (a !== n.viewportWidth) {
        var r = i.mediaQueries;
        e.dispatch((0, Y.viewportWidthChanged)({ width: a, mediaQueries: r }));
      }
    }
    function h(e) {
      var t = e.logic,
        n = e.store,
        i = e.events;
      _(i);
      var a = t.types,
        r = t.handler,
        o = n.getState(),
        c = o.ixData,
        u = c.actionLists,
        s = xe(i, Pe);
      if ((0, U.default)(s)) {
        (0, W.default)(s, function (e, t) {
          var a = i[t],
            r = a.action,
            o = a.id,
            s = a.mediaQueries,
            l = void 0 === s ? c.mediaQueryKeys : s,
            d = r.config.actionListId;
          if (
            (_e(l, c.mediaQueryKeys) ||
              n.dispatch((0, Y.mediaQueriesDefined)()),
            r.actionTypeId === Q.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION)
          ) {
            var f = Array.isArray(a.config) ? a.config : [a.config];
            f.forEach(function (t) {
              var i = t.continuousParameterGroupId,
                a = (0, F.default)(
                  u,
                  "".concat(d, ".continuousParameterGroups"),
                  []
                ),
                r = (0, G.default)(a, function (e) {
                  var t = e.id;
                  return t === i;
                }),
                c = (t.smoothing || 0) / 100,
                s = (t.restingState || 0) / 100;
              r &&
                e.forEach(function (e, i) {
                  var a = o + ee + i;
                  g({
                    store: n,
                    eventStateKey: a,
                    eventTarget: e,
                    eventId: o,
                    eventConfig: t,
                    actionListId: d,
                    parameterGroup: r,
                    smoothing: c,
                    restingValue: s,
                  });
                });
            });
          }
          (r.actionTypeId === Q.ActionTypeConsts.GENERAL_START_ACTION ||
            Z(r.actionTypeId)) &&
            b({ store: n, actionListId: d, eventId: o });
        });
        var l = function (e) {
            var t = n.getState(),
              a = t.ixSession;
            Me(s, function (t, o, u) {
              var s = i[o],
                l = a.eventState[u],
                d = s.action,
                f = s.mediaQueries,
                p = void 0 === f ? c.mediaQueryKeys : f;
              if (me(p, a.mediaQueryKey)) {
                var v = function () {
                  var i =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    a = r(
                      {
                        store: n,
                        element: t,
                        event: s,
                        eventConfig: i,
                        nativeEvent: e,
                        eventStateKey: u,
                      },
                      l
                    );
                  be(a, l) || n.dispatch((0, Y.eventStateChanged)(u, a));
                };
                if (
                  d.actionTypeId ===
                  Q.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                ) {
                  var E = Array.isArray(s.config) ? s.config : [s.config];
                  E.forEach(v);
                } else v();
              }
            });
          },
          d = (0, H.default)(l, we),
          f = function (e) {
            var t = e.target,
              i = void 0 === t ? document : t,
              a = e.types,
              r = e.throttle;
            a.split(" ")
              .filter(Boolean)
              .forEach(function (e) {
                var t = r ? d : l;
                i.addEventListener(e, t),
                  n.dispatch((0, Y.eventListenerAdded)(i, [e, t]));
              });
          };
        Array.isArray(a) ? a.forEach(f) : "string" == typeof a && f(t);
      }
    }
    function _(e) {
      if (Ne) {
        var t = {},
          n = "";
        for (var i in e) {
          var a = e[i],
            r = a.eventTypeId,
            o = a.target,
            c = K.getQuerySelector(o);
          t[c] ||
            (r !== Q.EventTypeConsts.MOUSE_CLICK &&
              r !== Q.EventTypeConsts.MOUSE_SECOND_CLICK) ||
            ((t[c] = !0),
            (n += c + "{cursor: pointer;touch-action: manipulation;}"));
        }
        if (n) {
          var u = document.createElement("style");
          (u.textContent = n), document.body.appendChild(u);
        }
      }
    }
    function b(e) {
      var t = e.store,
        n = e.actionListId,
        i = e.eventId,
        a = t.getState(),
        r = a.ixData,
        o = a.ixSession,
        c = r.actionLists,
        u = r.events,
        s = u[i],
        l = c[n];
      if (l && l.useFirstGroupAsInitialState) {
        var d = (0, F.default)(l, "actionItemGroups[0].actionItems", []),
          f = (0, F.default)(s, "mediaQueries", r.mediaQueryKeys);
        if (!me(f, o.mediaQueryKey)) return;
        d.forEach(function (e) {
          var a,
            r = e.config,
            o = e.actionTypeId,
            c =
              !0 ===
              (null == r
                ? void 0
                : null === (a = r.target) || void 0 === a
                ? void 0
                : a.useEventTarget)
                ? { target: s.target, targets: s.targets }
                : r,
            u = oe({ config: c, event: s, elementApi: K }),
            l = Re(o);
          u.forEach(function (a) {
            var r = l ? Ae(o)(a, e) : null;
            S({
              destination: ue({ element: a, actionItem: e, elementApi: K }, r),
              immediate: !0,
              store: t,
              element: a,
              eventId: i,
              actionItem: e,
              actionListId: n,
              pluginInstance: r,
            });
          });
        });
      }
    }
    function O(e) {
      var t = e.store,
        n = t.getState(),
        i = n.ixInstances;
      (0, W.default)(i, function (e) {
        if (!e.continuous) {
          var n = e.actionListId,
            i = e.verbose;
          L(e, t),
            i &&
              t.dispatch(
                (0, Y.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function R(e) {
      var t = e.store,
        n = e.eventId,
        i = e.eventTarget,
        a = e.eventStateKey,
        r = e.actionListId,
        o = t.getState(),
        c = o.ixInstances,
        u = o.ixSession,
        s = u.hasBoundaryNodes && i ? K.getClosestElement(i, te) : null;
      (0, W.default)(c, function (e) {
        var i = (0, F.default)(e, "actionItem.config.target.boundaryMode"),
          o = !a || e.eventStateKey === a;
        if (e.actionListId === r && e.eventId === n && o) {
          if (s && i && !K.elementContains(s, e.element)) return;
          L(e, t),
            e.verbose &&
              t.dispatch(
                (0, Y.actionListPlaybackChanged)({
                  actionListId: r,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function A(e) {
      var t,
        n = e.store,
        i = e.eventId,
        a = e.eventTarget,
        r = e.eventStateKey,
        o = e.actionListId,
        c = e.groupIndex,
        u = void 0 === c ? 0 : c,
        s = e.immediate,
        l = e.verbose,
        d = n.getState(),
        f = d.ixData,
        p = d.ixSession,
        v = f.events,
        E = v[i] || {},
        g = E.mediaQueries,
        y = void 0 === g ? f.mediaQueryKeys : g,
        I = (0, F.default)(f, "actionLists.".concat(o), {}),
        m = I.actionItemGroups,
        T = I.useFirstGroupAsInitialState;
      if (!m || !m.length) return !1;
      u >= m.length && (0, F.default)(E, "config.loop") && (u = 0),
        0 === u && T && u++;
      var h = 0 === u || (1 === u && T),
        _ =
          h &&
          Z(null === (t = E.action) || void 0 === t ? void 0 : t.actionTypeId)
            ? E.config.delay
            : void 0,
        b = (0, F.default)(m, [u, "actionItems"], []);
      if (!b.length) return !1;
      if (!me(y, p.mediaQueryKey)) return !1;
      var O = p.hasBoundaryNodes && a ? K.getClosestElement(a, te) : null,
        R = pe(b),
        A = !1;
      return (
        b.forEach(function (e, t) {
          var c = e.config,
            d = e.actionTypeId,
            f = Re(d),
            p = c.target;
          if (p) {
            var v = p.boundaryMode ? O : null,
              g = oe({
                config: c,
                event: E,
                eventTarget: a,
                elementRoot: v,
                elementApi: K,
              });
            g.forEach(function (c, p) {
              var v = f ? Ae(d)(c, e) : null,
                E = f ? Se(d)(c, e) : null;
              A = !0;
              var g = R === t && 0 === p,
                y = ve({ element: c, actionItem: e }),
                I = ue({ element: c, actionItem: e, elementApi: K }, v);
              S({
                store: n,
                element: c,
                actionItem: e,
                eventId: i,
                eventTarget: a,
                eventStateKey: r,
                actionListId: o,
                groupIndex: u,
                isCarrier: g,
                computedStyle: y,
                destination: I,
                immediate: s,
                verbose: l,
                pluginInstance: v,
                pluginDuration: E,
                instanceDelay: _,
              });
            });
          }
        }),
        A
      );
    }
    function S(e) {
      var t,
        n,
        i = e.store,
        a = e.computedStyle,
        r = (0, k.default)(e, ["store", "computedStyle"]),
        o = r.element,
        c = r.actionItem,
        u = r.immediate,
        s = r.pluginInstance,
        l = r.continuous,
        d = r.restingValue,
        f = r.eventId,
        p = !l,
        v = le(),
        E = i.getState(),
        g = E.ixElements,
        y = E.ixSession,
        I = E.ixData,
        m = ce(g, o),
        T = g[m] || {},
        h = T.refState,
        _ = K.getRefType(o),
        b = y.reducedMotion && Q.ReducedMotionTypes[c.actionTypeId];
      if (b && l)
        switch (
          null === (t = I.events[f]) || void 0 === t ? void 0 : t.eventTypeId
        ) {
          case Q.EventTypeConsts.MOUSE_MOVE:
          case Q.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            n = d;
            break;
          default:
            n = 0.5;
        }
      var O = Ee(o, h, a, c, K, s);
      i.dispatch(
        (0, Y.instanceAdded)(
          (0, V.default)(
            {
              instanceId: v,
              elementId: m,
              origin: O,
              refType: _,
              skipMotion: b,
              skipToValue: n,
            },
            r
          )
        )
      ),
        N(document.body, "ix2-animation-started", v),
        u
          ? w(i, v)
          : (se({
              store: i,
              select: function (e) {
                var t = e.ixInstances;
                return t[v];
              },
              onChange: C,
            }),
            p && i.dispatch((0, Y.instanceStarted)(v, y.tick)));
    }
    function L(e, t) {
      N(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      var n = e.elementId,
        i = e.actionItem,
        a = t.getState(),
        r = a.ixElements,
        o = r[n] || {},
        c = o.ref,
        u = o.refType;
      u === ne && Te(c, i, K), t.dispatch((0, Y.instanceRemoved)(e.id));
    }
    function N(e, t, n) {
      var i = document.createEvent("CustomEvent");
      i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i);
    }
    function w(e, t) {
      var n = e.getState(),
        i = n.ixParameters;
      e.dispatch((0, Y.instanceStarted)(t, 0)),
        e.dispatch((0, Y.animationFrameChanged)(performance.now(), i));
      var a = e.getState(),
        r = a.ixInstances;
      C(r[t], e);
    }
    function C(e, t) {
      var n = e.active,
        i = e.continuous,
        a = e.complete,
        r = e.elementId,
        o = e.actionItem,
        c = e.actionTypeId,
        u = e.renderType,
        s = e.current,
        l = e.groupIndex,
        d = e.eventId,
        f = e.eventTarget,
        p = e.eventStateKey,
        v = e.actionListId,
        E = e.isCarrier,
        g = e.styleProp,
        y = e.verbose,
        I = e.pluginInstance,
        m = t.getState(),
        T = m.ixData,
        h = m.ixSession,
        _ = T.events,
        b = _[d] || {},
        O = b.mediaQueries,
        R = void 0 === O ? T.mediaQueryKeys : O;
      if (me(R, h.mediaQueryKey) && (i || n || a)) {
        if (s || (u === ie && a)) {
          t.dispatch((0, Y.elementStateChanged)(r, c, s, o));
          var S = t.getState(),
            N = S.ixElements,
            w = N[r] || {},
            C = w.ref,
            x = w.refType,
            M = w.refState,
            P = M && M[c];
          switch (x) {
            case ne:
              de(C, M, P, d, o, g, K, u, I);
          }
        }
        if (a) {
          if (E) {
            var D = A({
              store: t,
              eventId: d,
              eventTarget: f,
              eventStateKey: p,
              actionListId: v,
              groupIndex: l + 1,
              verbose: y,
            });
            y &&
              !D &&
              t.dispatch(
                (0, Y.actionListPlaybackChanged)({
                  actionListId: v,
                  isPlaying: !1,
                })
              );
          }
          L(e, t);
        }
      }
    }
    var x = n(1),
      M = x(n(119)),
      P = n(18),
      D = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.observeRequests = i),
      (t.startEngine = d),
      (t.stopEngine = v),
      (t.stopAllActionGroups = O),
      (t.stopActionGroup = R),
      (t.startActionGroup = A);
    var V = D(n(31)),
      k = D(n(282)),
      G = D(n(95)),
      F = D(n(60)),
      U = D(n(283)),
      j = D(n(289)),
      X = D(n(301)),
      B = D(n(302)),
      W = D(n(303)),
      H = D(n(306)),
      Q = n(4),
      z = n(14),
      Y = n(65),
      K = P(n(309)),
      q = D(n(310)),
      $ = Object.keys(Q.QuickEffectIds),
      Z = function (e) {
        return $.includes(e);
      },
      J = Q.IX2EngineConstants,
      ee = J.COLON_DELIMITER,
      te = J.BOUNDARY_SELECTOR,
      ne = J.HTML_ELEMENT,
      ie = J.RENDER_GENERAL,
      ae = J.W_MOD_IX,
      re = z.IX2VanillaUtils,
      oe = re.getAffectedElements,
      ce = re.getElementId,
      ue = re.getDestinationValues,
      se = re.observeStore,
      le = re.getInstanceId,
      de = re.renderHTMLElement,
      fe = re.clearAllStyles,
      pe = re.getMaxDurationItemIndex,
      ve = re.getComputedStyle,
      Ee = re.getInstanceOrigin,
      ge = re.reduceListToGroup,
      ye = re.shouldNamespaceEventParameter,
      Ie = re.getNamespacedParameterId,
      me = re.shouldAllowMediaQuery,
      Te = re.cleanupHTMLElement,
      he = re.stringifyTarget,
      _e = re.mediaQueriesEqual,
      be = re.shallowEqual,
      Oe = z.IX2VanillaPlugins,
      Re = Oe.isPluginType,
      Ae = Oe.createPluginInstance,
      Se = Oe.getPluginDuration,
      Le = navigator.userAgent,
      Ne = Le.match(/iPad/i) || Le.match(/iPhone/),
      we = 12,
      Ce = ["resize", "orientationchange"],
      xe = function (e, t) {
        return (0, j.default)((0, B.default)(e, t), X.default);
      },
      Me = function (e, t) {
        (0, W.default)(e, function (e, n) {
          e.forEach(function (e, i) {
            var a = n + ee + i;
            t(e, n, a);
          });
        });
      },
      Pe = function (e) {
        var t = { target: e.target, targets: e.targets };
        return oe({ config: t, elementApi: K });
      };
  },
  function (e, t, n) {
    function i(e, t, n) {
      "__proto__" == t && a
        ? a(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (e[t] = n);
    }
    var a = n(125);
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(11),
      a = (function () {
        try {
          var e = i(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch (e) {}
      })();
    e.exports = a;
  },
  function (e, t, n) {
    var i = n(8),
      a = Object.create,
      r = (function () {
        function e() {}
        return function (t) {
          if (!i(t)) return {};
          if (a) return a(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
    e.exports = r;
  },
  function (e, t, n) {
    var i = n(323),
      a = n(324),
      r = i
        ? function (e) {
            return i.get(e);
          }
        : a;
    e.exports = r;
  },
  function (e, t, n) {
    function i(e) {
      for (
        var t = e.name + "", n = a[t], i = o.call(a, t) ? n.length : 0;
        i--;

      ) {
        var r = n[i],
          c = r.func;
        if (null == c || c == e) return r.name;
      }
      return t;
    }
    var a = n(325),
      r = Object.prototype,
      o = r.hasOwnProperty;
    e.exports = i;
  },
  function (e, t, n) {
    n(130),
      n(132),
      n(133),
      n(134),
      n(135),
      n(25),
      n(137),
      n(332),
      n(333),
      n(334),
      n(335),
      n(336),
      n(341),
      (e.exports = n(342));
  },
  function (e, t, n) {
    "use strict";
    var i = n(3);
    i.define(
      "brand",
      (e.exports = function (e) {
        function t() {
          var t =
            c.fullScreen ||
            c.mozFullScreen ||
            c.webkitIsFullScreen ||
            c.msFullscreenElement ||
            Boolean(c.webkitFullscreenElement);
          e(r).attr("style", t ? "display: none !important;" : "");
        }
        function n() {
          var t = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            n = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "8px", width: "16px" }),
            i = e("<img>")
              .attr(
                "src",
                "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
              )
              .attr("alt", "Made in Webflow");
          return t.append(n, i), t[0];
        }
        function a() {
          var e = s.children(l),
            t = e.length && e.get(0) === r,
            n = i.env("editor");
          t ? n && e.remove() : (e.length && e.remove(), n || s.append(r));
        }
        var r,
          o = {},
          c = document,
          u = e("html"),
          s = e("body"),
          l = ".w-webflow-badge",
          d = window.location,
          f = /PhantomJS/i.test(navigator.userAgent),
          p =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        return (
          (o.ready = function () {
            var i = u.attr("data-wf-status"),
              o = u.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(o) && d.hostname !== o && (i = !0),
              i &&
                !f &&
                ((r = r || n()),
                a(),
                setTimeout(a, 500),
                e(c).off(p, t).on(p, t));
          }),
          o
        );
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var i = window.$,
      a = n(69) && i.tram;
    e.exports = (function () {
      var e = { VERSION: "1.6.0-Webflow" },
        t = {},
        n = Array.prototype,
        i = Object.prototype,
        r = Function.prototype,
        o = (n.push, n.slice),
        c = (n.concat, i.toString, i.hasOwnProperty),
        u = n.forEach,
        s = n.map,
        l = (n.reduce, n.reduceRight, n.filter),
        d = (n.every, n.some),
        f = n.indexOf,
        p = (n.lastIndexOf, Array.isArray, Object.keys),
        v =
          (r.bind,
          (e.each = e.forEach =
            function (n, i, a) {
              if (null == n) return n;
              if (u && n.forEach === u) n.forEach(i, a);
              else if (n.length === +n.length) {
                for (var r = 0, o = n.length; r < o; r++)
                  if (i.call(a, n[r], r, n) === t) return;
              } else {
                var c = e.keys(n);
                for (r = 0, o = c.length; r < o; r++)
                  if (i.call(a, n[c[r]], c[r], n) === t) return;
              }
              return n;
            }));
      (e.map = e.collect =
        function (e, t, n) {
          var i = [];
          return null == e
            ? i
            : s && e.map === s
            ? e.map(t, n)
            : (v(e, function (e, a, r) {
                i.push(t.call(n, e, a, r));
              }),
              i);
        }),
        (e.find = e.detect =
          function (e, t, n) {
            var i;
            return (
              E(e, function (e, a, r) {
                if (t.call(n, e, a, r)) return (i = e), !0;
              }),
              i
            );
          }),
        (e.filter = e.select =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : l && e.filter === l
              ? e.filter(t, n)
              : (v(e, function (e, a, r) {
                  t.call(n, e, a, r) && i.push(e);
                }),
                i);
          });
      var E =
        (e.some =
        e.any =
          function (n, i, a) {
            i || (i = e.identity);
            var r = !1;
            return null == n
              ? r
              : d && n.some === d
              ? n.some(i, a)
              : (v(n, function (e, n, o) {
                  if (r || (r = i.call(a, e, n, o))) return t;
                }),
                !!r);
          });
      (e.contains = e.include =
        function (e, t) {
          return (
            null != e &&
            (f && e.indexOf === f
              ? -1 != e.indexOf(t)
              : E(e, function (e) {
                  return e === t;
                }))
          );
        }),
        (e.delay = function (e, t) {
          var n = o.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (e.defer = function (t) {
          return e.delay.apply(e, [t, 1].concat(o.call(arguments, 1)));
        }),
        (e.throttle = function (e) {
          var t, n, i;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (i = this),
              a.frame(function () {
                (t = !1), e.apply(i, n);
              }));
          };
        }),
        (e.debounce = function (t, n, i) {
          var a,
            r,
            o,
            c,
            u,
            s = function s() {
              var l = e.now() - c;
              l < n
                ? (a = setTimeout(s, n - l))
                : ((a = null), i || ((u = t.apply(o, r)), (o = r = null)));
            };
          return function () {
            (o = this), (r = arguments), (c = e.now());
            var l = i && !a;
            return (
              a || (a = setTimeout(s, n)),
              l && ((u = t.apply(o, r)), (o = r = null)),
              u
            );
          };
        }),
        (e.defaults = function (t) {
          if (!e.isObject(t)) return t;
          for (var n = 1, i = arguments.length; n < i; n++) {
            var a = arguments[n];
            for (var r in a) void 0 === t[r] && (t[r] = a[r]);
          }
          return t;
        }),
        (e.keys = function (t) {
          if (!e.isObject(t)) return [];
          if (p) return p(t);
          var n = [];
          for (var i in t) e.has(t, i) && n.push(i);
          return n;
        }),
        (e.has = function (e, t) {
          return c.call(e, t);
        }),
        (e.isObject = function (e) {
          return e === Object(e);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var g = /(.)^/,
        y = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        I = /\\|'|\r|\n|\u2028|\u2029/g,
        m = function (e) {
          return "\\" + y[e];
        };
      return (
        (e.template = function (t, n, i) {
          !n && i && (n = i), (n = e.defaults({}, n, e.templateSettings));
          var a = RegExp(
              [
                (n.escape || g).source,
                (n.interpolate || g).source,
                (n.evaluate || g).source,
              ].join("|") + "|$",
              "g"
            ),
            r = 0,
            o = "__p+='";
          t.replace(a, function (e, n, i, a, c) {
            return (
              (o += t.slice(r, c).replace(I, m)),
              (r = c + e.length),
              n
                ? (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : i
                ? (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                : a && (o += "';\n" + a + "\n__p+='"),
              e
            );
          }),
            (o += "';\n"),
            n.variable || (o = "with(obj||{}){\n" + o + "}\n"),
            (o =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              o +
              "return __p;\n");
          try {
            var c = new Function(n.variable || "obj", "_", o);
          } catch (e) {
            throw ((e.source = o), e);
          }
          var u = function (t) {
              return c.call(this, t, e);
            },
            s = n.variable || "obj";
          return (u.source = "function(" + s + "){\n" + o + "}"), u;
        }),
        e
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    function i() {
      try {
        return window.top.__Cypress__;
      } catch (e) {
        return !1;
      }
    }
    var a = n(3);
    a.define(
      "edit",
      (e.exports = function (e, t, n) {
        function r() {
          v || (/\?edit/.test(I.hash) && T());
        }
        function o() {
          (v = !0),
            (window.WebflowEditor = !0),
            g.off(m, r),
            f(function (t) {
              e.ajax({
                url: d("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: y.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: c(t),
              });
            });
        }
        function c(e) {
          return function (t) {
            t
              ? ((t.thirdPartyCookiesSupported = e),
                u(l(t.bugReporterScriptPath), function () {
                  u(l(t.scriptPath), function () {
                    window.WebflowEditor(t);
                  });
                }))
              : console.error("Could not load editor data");
          };
        }
        function u(t, n) {
          e.ajax({ type: "GET", url: t, dataType: "script", cache: !0 }).then(
            n,
            s
          );
        }
        function s(e, t, n) {
          throw (console.error("Could not load editor script: " + t), n);
        }
        function l(e) {
          return e.indexOf("//") >= 0
            ? e
            : d("https://editor-api.webflow.com" + e);
        }
        function d(e) {
          return e.replace(/([^:])\/\//g, "$1/");
        }
        function f(e) {
          var t = window.document.createElement("iframe");
          (t.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (t.style.display = "none"),
            (t.sandbox = "allow-scripts allow-same-origin");
          var n = function n(i) {
            "WF_third_party_cookies_unsupported" === i.data
              ? (p(t, n), e(!1))
              : "WF_third_party_cookies_supported" === i.data &&
                (p(t, n), e(!0));
          };
          (t.onerror = function () {
            p(t, n), e(!1);
          }),
            window.addEventListener("message", n, !1),
            window.document.body.appendChild(t);
        }
        function p(e, t) {
          window.removeEventListener("message", t, !1), e.remove();
        }
        if (
          ((n = n || {}),
          (a.env("test") || a.env("frame")) && !n.fixture && !i())
        )
          return { exit: 1 };
        var v,
          E = {},
          g = e(window),
          y = e(document.documentElement),
          I = document.location,
          m = "hashchange",
          T = n.load || o,
          h = !1;
        try {
          h =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch (e) {}
        return (
          h
            ? T()
            : I.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(I.search) ||
                /\?edit$/.test(I.href)) &&
              T()
            : g.on(m, r).triggerHandler(m),
          E
        );
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var i = n(3);
    i.define(
      "focus-visible",
      (e.exports = function () {
        function e(e) {
          function t(e) {
            return !!(
              e &&
              e !== document &&
              "HTML" !== e.nodeName &&
              "BODY" !== e.nodeName &&
              "classList" in e &&
              "contains" in e.classList
            );
          }
          function n(e) {
            var t = e.type,
              n = e.tagName;
            return (
              !("INPUT" !== n || !g[t] || e.readOnly) ||
              ("TEXTAREA" === n && !e.readOnly) ||
              !!e.isContentEditable
            );
          }
          function i(e) {
            e.getAttribute("data-wf-focus-visible") ||
              e.setAttribute("data-wf-focus-visible", "true");
          }
          function a(e) {
            e.getAttribute("data-wf-focus-visible") &&
              e.removeAttribute("data-wf-focus-visible");
          }
          function r(n) {
            n.metaKey ||
              n.altKey ||
              n.ctrlKey ||
              (t(e.activeElement) && i(e.activeElement), (p = !0));
          }
          function o() {
            p = !1;
          }
          function c(e) {
            t(e.target) && (p || n(e.target)) && i(e.target);
          }
          function u(e) {
            t(e.target) &&
              e.target.hasAttribute("data-wf-focus-visible") &&
              ((v = !0),
              window.clearTimeout(E),
              (E = window.setTimeout(function () {
                v = !1;
              }, 100)),
              a(e.target));
          }
          function s() {
            "hidden" === document.visibilityState && (v && (p = !0), l());
          }
          function l() {
            document.addEventListener("mousemove", f),
              document.addEventListener("mousedown", f),
              document.addEventListener("mouseup", f),
              document.addEventListener("pointermove", f),
              document.addEventListener("pointerdown", f),
              document.addEventListener("pointerup", f),
              document.addEventListener("touchmove", f),
              document.addEventListener("touchstart", f),
              document.addEventListener("touchend", f);
          }
          function d() {
            document.removeEventListener("mousemove", f),
              document.removeEventListener("mousedown", f),
              document.removeEventListener("mouseup", f),
              document.removeEventListener("pointermove", f),
              document.removeEventListener("pointerdown", f),
              document.removeEventListener("pointerup", f),
              document.removeEventListener("touchmove", f),
              document.removeEventListener("touchstart", f),
              document.removeEventListener("touchend", f);
          }
          function f(e) {
            (e.target.nodeName && "html" === e.target.nodeName.toLowerCase()) ||
              ((p = !1), d());
          }
          var p = !0,
            v = !1,
            E = null,
            g = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          document.addEventListener("keydown", r, !0),
            document.addEventListener("mousedown", o, !0),
            document.addEventListener("pointerdown", o, !0),
            document.addEventListener("touchstart", o, !0),
            document.addEventListener("visibilitychange", s, !0),
            l(),
            e.addEventListener("focus", c, !0),
            e.addEventListener("blur", u, !0);
        }
        function t() {
          if ("undefined" != typeof document)
            try {
              document.querySelector(":focus-visible");
            } catch (t) {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var i = n(3);
    i.define(
      "focus-within",
      (e.exports = function () {
        function e(e) {
          for (
            var t = [e], n = null;
            (n = e.parentNode || e.host || e.defaultView);

          )
            t.push(n), (e = n);
          return t;
        }
        function t(e) {
          "function" != typeof e.getAttribute ||
            e.getAttribute("data-wf-focus-within") ||
            e.setAttribute("data-wf-focus-within", "true");
        }
        function n(e) {
          "function" == typeof e.getAttribute &&
            e.getAttribute("data-wf-focus-within") &&
            e.removeAttribute("data-wf-focus-within");
        }
        function i() {
          var i = function (i) {
            function a() {
              (r = !1),
                "blur" === i.type &&
                  Array.prototype.slice.call(e(i.target)).forEach(n),
                "focus" === i.type &&
                  Array.prototype.slice.call(e(i.target)).forEach(t);
            }
            var r;
            r || (window.requestAnimationFrame(a), (r = !0));
          };
          return (
            document.addEventListener("focus", i, !0),
            document.addEventListener("blur", i, !0),
            t(document.body),
            !0
          );
        }
        function a() {
          if (
            "undefined" != typeof document &&
            document.body.hasAttribute("data-wf-focus-within")
          )
            try {
              document.querySelector(":focus-within");
            } catch (e) {
              i();
            }
        }
        return { ready: a };
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var i = n(3);
    i.define(
      "focus",
      (e.exports = function () {
        function e(e) {
          o &&
            (e.preventDefault(),
            e.stopPropagation(),
            e.stopImmediatePropagation(),
            r.unshift(e));
        }
        function t(e) {
          var t = e.target,
            n = t.tagName;
          return (
            (/^a$/i.test(n) && null != t.href) ||
            (/^(button|textarea)$/i.test(n) && !0 !== t.disabled) ||
            (/^input$/i.test(n) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(t.type) &&
              !t.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(n) &&
              !Number.isNaN(Number.parseFloat(t.tabIndex))) ||
            /^audio$/i.test(n) ||
            (/^video$/i.test(n) && !0 === t.controls)
          );
        }
        function n(e) {
          t(e) &&
            ((o = !0),
            setTimeout(function () {
              for (o = !1, e.target.focus(); r.length > 0; ) {
                var t = r.pop();
                t.target.dispatchEvent(new MouseEvent(t.type, t));
              }
            }, 0));
        }
        function a() {
          "undefined" != typeof document &&
            document.body.hasAttribute("data-wf-focus-within") &&
            i.env.safari &&
            (document.addEventListener("mousedown", n, !0),
            document.addEventListener("mouseup", e, !0),
            document.addEventListener("click", e, !0));
        }
        var r = [],
          o = !1;
        return { ready: a };
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var i = window.jQuery,
      a = {},
      r = [],
      o = ".w-ix",
      c = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), i(t).triggerHandler(a.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), i(t).triggerHandler(a.types.OUTRO));
        },
      };
    (a.triggers = {}),
      (a.types = { INTRO: "w-ix-intro" + o, OUTRO: "w-ix-outro" + o }),
      (a.init = function () {
        for (var e = r.length, t = 0; t < e; t++) {
          var n = r[t];
          n[0](0, n[1]);
        }
        (r = []), i.extend(a.triggers, c);
      }),
      (a.async = function () {
        for (var e in c) {
          var t = c[e];
          c.hasOwnProperty(e) &&
            (a.triggers[e] = function (e, n) {
              r.push([t, n]);
            });
        }
      }),
      a.async(),
      (e.exports = a);
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      a = n(138);
    a.setEnv(i.env),
      i.define(
        "ix2",
        (e.exports = function () {
          return a;
        })
      );
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      e() && (0, l.observeRequests)(f);
    }
    function a(e) {
      r(), (0, l.startEngine)({ store: f, rawData: e, allowEvents: !0 });
    }
    function r() {
      (0, l.stopEngine)(f);
    }
    var o = n(18),
      c = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.setEnv = i),
      (t.init = a),
      (t.destroy = r),
      (t.actions = t.store = void 0),
      n(139);
    var u = n(87),
      s = c(n(186)),
      l = n(123),
      d = o(n(65));
    t.actions = d;
    var f = (0, u.createStore)(s.default);
    t.store = f;
  },
  function (e, t, n) {
    var i = n(140);
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(141);
    e.exports = i;
  },
  function (e, t, n) {
    n(142);
    var i = n(174);
    e.exports = i("Array", "includes");
  },
  function (e, t, n) {
    "use strict";
    var i = n(143),
      a = n(85).includes,
      r = n(169);
    i(
      { target: "Array", proto: !0 },
      {
        includes: function (e) {
          return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      r("includes");
  },
  function (e, t, n) {
    var i = n(0),
      a = n(70).f,
      r = n(43),
      o = n(157),
      c = n(42),
      u = n(161),
      s = n(168);
    e.exports = function (e, t) {
      var n,
        l,
        d,
        f,
        p,
        v,
        E = e.target,
        g = e.global,
        y = e.stat;
      if (((l = g ? i : y ? i[E] || c(E, {}) : (i[E] || {}).prototype), l))
        for (d in t) {
          if (
            ((p = t[d]),
            e.noTargetGet ? ((v = a(l, d)), (f = v && v.value)) : (f = l[d]),
            (n = s(g ? d : E + (y ? "." : "#") + d, e.forced)),
            !n && void 0 !== f)
          ) {
            if (typeof p == typeof f) continue;
            u(p, f);
          }
          (e.sham || (f && f.sham)) && r(p, "sham", !0), o(l, d, p, e);
        }
    };
  },
  function (e, t, n) {
    "use strict";
    var i = {}.propertyIsEnumerable,
      a = Object.getOwnPropertyDescriptor,
      r = a && !i.call({ 1: 2 }, 1);
    t.f = r
      ? function (e) {
          var t = a(this, e);
          return !!t && t.enumerable;
        }
      : i;
  },
  function (e, t, n) {
    var i = n(0),
      a = n(5),
      r = n(19),
      o = n(146),
      c = i.Object,
      u = a("".split);
    e.exports = r(function () {
      return !c("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == o(e) ? u(e, "") : c(e);
        }
      : c;
  },
  function (e, t, n) {
    var i = n(5),
      a = i({}.toString),
      r = i("".slice);
    e.exports = function (e) {
      return r(a(e), 8, -1);
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(40),
      r = n(20),
      o = n(74),
      c = n(151),
      u = n(154),
      s = n(77),
      l = i.TypeError,
      d = s("toPrimitive");
    e.exports = function (e, t) {
      if (!r(e) || o(e)) return e;
      var n,
        i = c(e, d);
      if (i) {
        if ((void 0 === t && (t = "default"), (n = a(i, e, t)), !r(n) || o(n)))
          return n;
        throw l("Can't convert object to primitive value");
      }
      return void 0 === t && (t = "number"), u(e, t);
    };
  },
  function (e, t, n) {
    var i = n(5);
    e.exports = i({}.isPrototypeOf);
  },
  function (e, t, n) {
    var i,
      a,
      r = n(0),
      o = n(150),
      c = r.process,
      u = r.Deno,
      s = (c && c.versions) || (u && u.version),
      l = s && s.v8;
    l && ((i = l.split(".")), (a = i[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1]))),
      !a &&
        o &&
        ((i = o.match(/Edge\/(\d+)/)),
        (!i || i[1] >= 74) &&
          ((i = o.match(/Chrome\/(\d+)/)), i && (a = +i[1]))),
      (e.exports = a);
  },
  function (e, t, n) {
    var i = n(28);
    e.exports = i("navigator", "userAgent") || "";
  },
  function (e, t, n) {
    var i = n(152);
    e.exports = function (e, t) {
      var n = e[t];
      return null == n ? void 0 : i(n);
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(7),
      r = n(153),
      o = i.TypeError;
    e.exports = function (e) {
      if (a(e)) return e;
      throw o(r(e) + " is not a function");
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = i.String;
    e.exports = function (e) {
      try {
        return a(e);
      } catch (e) {
        return "Object";
      }
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(40),
      r = n(7),
      o = n(20),
      c = i.TypeError;
    e.exports = function (e, t) {
      var n, i;
      if ("string" === t && r((n = e.toString)) && !o((i = a(n, e)))) return i;
      if (r((n = e.valueOf)) && !o((i = a(n, e)))) return i;
      if ("string" !== t && r((n = e.toString)) && !o((i = a(n, e)))) return i;
      throw c("Can't convert object to primitive value");
    };
  },
  function (e, t) {
    e.exports = !1;
  },
  function (e, t, n) {
    var i = n(0),
      a = n(72),
      r = i.Object;
    e.exports = function (e) {
      return r(a(e));
    };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(7),
      r = n(9),
      o = n(43),
      c = n(42),
      u = n(82),
      s = n(158),
      l = n(160).CONFIGURABLE,
      d = s.get,
      f = s.enforce,
      p = String(String).split("String");
    (e.exports = function (e, t, n, u) {
      var s,
        d = !!u && !!u.unsafe,
        v = !!u && !!u.enumerable,
        E = !!u && !!u.noTargetGet,
        g = u && void 0 !== u.name ? u.name : t;
      a(n) &&
        ("Symbol(" === String(g).slice(0, 7) &&
          (g = "[" + String(g).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
        (!r(n, "name") || (l && n.name !== g)) && o(n, "name", g),
        (s = f(n)),
        s.source || (s.source = p.join("string" == typeof g ? g : ""))),
        e !== i
          ? (d ? !E && e[t] && (v = !0) : delete e[t],
            v ? (e[t] = n) : o(e, t, n))
          : v
          ? (e[t] = n)
          : c(t, n);
    })(Function.prototype, "toString", function () {
      return (a(this) && d(this).source) || u(this);
    });
  },
  function (e, t, n) {
    var i,
      a,
      r,
      o = n(159),
      c = n(0),
      u = n(5),
      s = n(20),
      l = n(43),
      d = n(9),
      f = n(41),
      p = n(83),
      v = n(44),
      E = "Object already initialized",
      g = c.TypeError,
      y = c.WeakMap,
      I = function (e) {
        return r(e) ? a(e) : i(e, {});
      },
      m = function (e) {
        return function (t) {
          var n;
          if (!s(t) || (n = a(t)).type !== e)
            throw g("Incompatible receiver, " + e + " required");
          return n;
        };
      };
    if (o || f.state) {
      var T = f.state || (f.state = new y()),
        h = u(T.get),
        _ = u(T.has),
        b = u(T.set);
      (i = function (e, t) {
        if (_(T, e)) throw new g(E);
        return (t.facade = e), b(T, e, t), t;
      }),
        (a = function (e) {
          return h(T, e) || {};
        }),
        (r = function (e) {
          return _(T, e);
        });
    } else {
      var O = p("state");
      (v[O] = !0),
        (i = function (e, t) {
          if (d(e, O)) throw new g(E);
          return (t.facade = e), l(e, O, t), t;
        }),
        (a = function (e) {
          return d(e, O) ? e[O] : {};
        }),
        (r = function (e) {
          return d(e, O);
        });
    }
    e.exports = { set: i, get: a, has: r, enforce: I, getterFor: m };
  },
  function (e, t, n) {
    var i = n(0),
      a = n(7),
      r = n(82),
      o = i.WeakMap;
    e.exports = a(o) && /native code/.test(r(o));
  },
  function (e, t, n) {
    var i = n(13),
      a = n(9),
      r = Function.prototype,
      o = i && Object.getOwnPropertyDescriptor,
      c = a(r, "name"),
      u = c && "something" === function () {}.name,
      s = c && (!i || (i && o(r, "name").configurable));
    e.exports = { EXISTS: c, PROPER: u, CONFIGURABLE: s };
  },
  function (e, t, n) {
    var i = n(9),
      a = n(162),
      r = n(70),
      o = n(29);
    e.exports = function (e, t) {
      for (var n = a(t), c = o.f, u = r.f, s = 0; s < n.length; s++) {
        var l = n[s];
        i(e, l) || c(e, l, u(t, l));
      }
    };
  },
  function (e, t, n) {
    var i = n(28),
      a = n(5),
      r = n(163),
      o = n(167),
      c = n(30),
      u = a([].concat);
    e.exports =
      i("Reflect", "ownKeys") ||
      function (e) {
        var t = r.f(c(e)),
          n = o.f;
        return n ? u(t, n(e)) : t;
      };
  },
  function (e, t, n) {
    var i = n(84),
      a = n(45),
      r = a.concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return i(e, r);
      };
  },
  function (e, t, n) {
    var i = n(86),
      a = Math.max,
      r = Math.min;
    e.exports = function (e, t) {
      var n = i(e);
      return n < 0 ? a(n + t, 0) : r(n, t);
    };
  },
  function (e, t, n) {
    var i = n(166);
    e.exports = function (e) {
      return i(e.length);
    };
  },
  function (e, t, n) {
    var i = n(86),
      a = Math.min;
    e.exports = function (e) {
      return e > 0 ? a(i(e), 9007199254740991) : 0;
    };
  },
  function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function (e, t, n) {
    var i = n(19),
      a = n(7),
      r = /#|\.prototype\./,
      o = function (e, t) {
        var n = u[c(e)];
        return n == l || (n != s && (a(t) ? i(t) : !!t));
      },
      c = (o.normalize = function (e) {
        return String(e).replace(r, ".").toLowerCase();
      }),
      u = (o.data = {}),
      s = (o.NATIVE = "N"),
      l = (o.POLYFILL = "P");
    e.exports = o;
  },
  function (e, t, n) {
    var i = n(77),
      a = n(170),
      r = n(29),
      o = i("unscopables"),
      c = Array.prototype;
    null == c[o] && r.f(c, o, { configurable: !0, value: a(null) }),
      (e.exports = function (e) {
        c[o][e] = !0;
      });
  },
  function (e, t, n) {
    var i,
      a = n(30),
      r = n(171),
      o = n(45),
      c = n(44),
      u = n(173),
      s = n(81),
      l = n(83),
      d = ">",
      f = "<",
      p = "prototype",
      v = "script",
      E = l("IE_PROTO"),
      g = function () {},
      y = function (e) {
        return f + v + d + e + f + "/" + v + d;
      },
      I = function (e) {
        e.write(y("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      m = function () {
        var e,
          t = s("iframe"),
          n = "java" + v + ":";
        return (
          (t.style.display = "none"),
          u.appendChild(t),
          (t.src = String(n)),
          (e = t.contentWindow.document),
          e.open(),
          e.write(y("document.F=Object")),
          e.close(),
          e.F
        );
      },
      T = function () {
        try {
          i = new ActiveXObject("htmlfile");
        } catch (e) {}
        T =
          "undefined" != typeof document
            ? document.domain && i
              ? I(i)
              : m()
            : I(i);
        for (var e = o.length; e--; ) delete T[p][o[e]];
        return T();
      };
    (c[E] = !0),
      (e.exports =
        Object.create ||
        function (e, t) {
          var n;
          return (
            null !== e
              ? ((g[p] = a(e)), (n = new g()), (g[p] = null), (n[E] = e))
              : (n = T()),
            void 0 === t ? n : r(n, t)
          );
        });
  },
  function (e, t, n) {
    var i = n(13),
      a = n(29),
      r = n(30),
      o = n(27),
      c = n(172);
    e.exports = i
      ? Object.defineProperties
      : function (e, t) {
          r(e);
          for (var n, i = o(t), u = c(t), s = u.length, l = 0; s > l; )
            a.f(e, (n = u[l++]), i[n]);
          return e;
        };
  },
  function (e, t, n) {
    var i = n(84),
      a = n(45);
    e.exports =
      Object.keys ||
      function (e) {
        return i(e, a);
      };
  },
  function (e, t, n) {
    var i = n(28);
    e.exports = i("document", "documentElement");
  },
  function (e, t, n) {
    var i = n(0),
      a = n(5);
    e.exports = function (e, t) {
      return a(i[e].prototype[t]);
    };
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      return null == e
        ? void 0 === e
          ? u
          : c
        : s && s in Object(e)
        ? Object(r.default)(e)
        : Object(o.default)(e);
    }
    n.r(t);
    var a = n(89),
      r = n(178),
      o = n(179),
      c = "[object Null]",
      u = "[object Undefined]",
      s = a.default ? a.default.toStringTag : void 0;
    t.default = i;
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(177),
      a = "object" == typeof self && self && self.Object === Object && self,
      r = i.default || a || Function("return this")();
    t.default = r;
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.default = n;
      }.call(this, n(26));
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      var t = o.call(e, u),
        n = e[u];
      try {
        e[u] = void 0;
        var i = !0;
      } catch (e) {}
      var a = c.call(e);
      return i && (t ? (e[u] = n) : delete e[u]), a;
    }
    n.r(t);
    var a = n(89),
      r = Object.prototype,
      o = r.hasOwnProperty,
      c = r.toString,
      u = a.default ? a.default.toStringTag : void 0;
    t.default = i;
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      return r.call(e);
    }
    n.r(t);
    var a = Object.prototype,
      r = a.toString;
    t.default = i;
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(181),
      a = Object(i.default)(Object.getPrototypeOf, Object);
    t.default = a;
  },
  function (e, t, n) {
    "use strict";
    function i(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    n.r(t), (t.default = i);
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      return null != e && "object" == typeof e;
    }
    n.r(t), (t.default = i);
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e, i) {
        var a,
          r = n(185);
        a =
          "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : void 0 !== e
            ? e
            : i;
        var o = Object(r.default)(a);
        t.default = o;
      }.call(this, n(26), n(184)(e));
  },
  function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          Object.defineProperty(t, "exports", { enumerable: !0 }),
          (t.webpackPolyfill = 1);
      }
      return t;
    };
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      var t,
        n = e.Symbol;
      return (
        "function" == typeof n
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
    n.r(t),
      n.d(t, "default", function () {
        return i;
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var i = n(87),
      a = n(187),
      r = n(193),
      o = n(194),
      c = n(14),
      u = n(280),
      s = n(281),
      l = c.IX2ElementsReducer.ixElements,
      d = (0, i.combineReducers)({
        ixData: a.ixData,
        ixRequest: r.ixRequest,
        ixSession: o.ixSession,
        ixElements: l,
        ixInstances: u.ixInstances,
        ixParameters: s.ixParameters,
      });
    t.default = d;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.ixData = void 0);
    var i = n(4),
      a = i.IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED,
      r = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Object.freeze({}),
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case a:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    t.ixData = r;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.QuickEffectDirectionConsts =
        t.QuickEffectIds =
        t.EventLimitAffectedElements =
        t.EventContinuousMouseAxes =
        t.EventBasedOn =
        t.EventAppliesTo =
        t.EventTypeConsts =
          void 0);
    var i = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    t.EventTypeConsts = i;
    var a = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    t.EventAppliesTo = a;
    var r = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    t.EventBasedOn = r;
    var o = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    t.EventContinuousMouseAxes = o;
    var c = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    t.EventLimitAffectedElements = c;
    var u = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    t.QuickEffectIds = u;
    var s = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    t.QuickEffectDirectionConsts = s;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.InteractionTypeConsts = void 0);
    var i = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    t.InteractionTypeConsts = i;
  },
  function (e, t, n) {
    "use strict";
    var i,
      a = n(1),
      r = a(n(21));
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ReducedMotionTypes = void 0);
    var o = n(94),
      c = o.ActionTypeConsts,
      u = c.TRANSFORM_MOVE,
      s = c.TRANSFORM_SCALE,
      l = c.TRANSFORM_ROTATE,
      d = c.TRANSFORM_SKEW,
      f = c.STYLE_SIZE,
      p = c.STYLE_FILTER,
      v =
        ((i = {}),
        (0, r.default)(i, u, !0),
        (0, r.default)(i, s, !0),
        (0, r.default)(i, l, !0),
        (0, r.default)(i, d, !0),
        (0, r.default)(i, f, !0),
        (0, r.default)(i, p, !0),
        i);
    t.ReducedMotionTypes = v;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.IX2_TEST_FRAME_RENDERED =
        t.IX2_MEDIA_QUERIES_DEFINED =
        t.IX2_VIEWPORT_WIDTH_CHANGED =
        t.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        t.IX2_ELEMENT_STATE_CHANGED =
        t.IX2_INSTANCE_REMOVED =
        t.IX2_INSTANCE_STARTED =
        t.IX2_INSTANCE_ADDED =
        t.IX2_PARAMETER_CHANGED =
        t.IX2_ANIMATION_FRAME_CHANGED =
        t.IX2_EVENT_STATE_CHANGED =
        t.IX2_EVENT_LISTENER_ADDED =
        t.IX2_CLEAR_REQUESTED =
        t.IX2_STOP_REQUESTED =
        t.IX2_PLAYBACK_REQUESTED =
        t.IX2_PREVIEW_REQUESTED =
        t.IX2_SESSION_STOPPED =
        t.IX2_SESSION_STARTED =
        t.IX2_SESSION_INITIALIZED =
        t.IX2_RAW_DATA_IMPORTED =
          void 0);
    var i = "IX2_RAW_DATA_IMPORTED";
    t.IX2_RAW_DATA_IMPORTED = i;
    var a = "IX2_SESSION_INITIALIZED";
    t.IX2_SESSION_INITIALIZED = a;
    var r = "IX2_SESSION_STARTED";
    t.IX2_SESSION_STARTED = r;
    var o = "IX2_SESSION_STOPPED";
    t.IX2_SESSION_STOPPED = o;
    var c = "IX2_PREVIEW_REQUESTED";
    t.IX2_PREVIEW_REQUESTED = c;
    var u = "IX2_PLAYBACK_REQUESTED";
    t.IX2_PLAYBACK_REQUESTED = u;
    var s = "IX2_STOP_REQUESTED";
    t.IX2_STOP_REQUESTED = s;
    var l = "IX2_CLEAR_REQUESTED";
    t.IX2_CLEAR_REQUESTED = l;
    var d = "IX2_EVENT_LISTENER_ADDED";
    t.IX2_EVENT_LISTENER_ADDED = d;
    var f = "IX2_EVENT_STATE_CHANGED";
    t.IX2_EVENT_STATE_CHANGED = f;
    var p = "IX2_ANIMATION_FRAME_CHANGED";
    t.IX2_ANIMATION_FRAME_CHANGED = p;
    var v = "IX2_PARAMETER_CHANGED";
    t.IX2_PARAMETER_CHANGED = v;
    var E = "IX2_INSTANCE_ADDED";
    t.IX2_INSTANCE_ADDED = E;
    var g = "IX2_INSTANCE_STARTED";
    t.IX2_INSTANCE_STARTED = g;
    var y = "IX2_INSTANCE_REMOVED";
    t.IX2_INSTANCE_REMOVED = y;
    var I = "IX2_ELEMENT_STATE_CHANGED";
    t.IX2_ELEMENT_STATE_CHANGED = I;
    var m = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    t.IX2_ACTION_LIST_PLAYBACK_CHANGED = m;
    var T = "IX2_VIEWPORT_WIDTH_CHANGED";
    t.IX2_VIEWPORT_WIDTH_CHANGED = T;
    var h = "IX2_MEDIA_QUERIES_DEFINED";
    t.IX2_MEDIA_QUERIES_DEFINED = h;
    var _ = "IX2_TEST_FRAME_RENDERED";
    t.IX2_TEST_FRAME_RENDERED = _;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.RENDER_PLUGIN =
        t.RENDER_STYLE =
        t.RENDER_GENERAL =
        t.RENDER_TRANSFORM =
        t.ABSTRACT_NODE =
        t.PLAIN_OBJECT =
        t.HTML_ELEMENT =
        t.PRESERVE_3D =
        t.PARENT =
        t.SIBLINGS =
        t.IMMEDIATE_CHILDREN =
        t.CHILDREN =
        t.BAR_DELIMITER =
        t.COLON_DELIMITER =
        t.COMMA_DELIMITER =
        t.AUTO =
        t.WILL_CHANGE =
        t.FLEX =
        t.DISPLAY =
        t.COLOR =
        t.BORDER_COLOR =
        t.BACKGROUND =
        t.BACKGROUND_COLOR =
        t.HEIGHT =
        t.WIDTH =
        t.FILTER =
        t.OPACITY =
        t.SKEW_Y =
        t.SKEW_X =
        t.SKEW =
        t.ROTATE_Z =
        t.ROTATE_Y =
        t.ROTATE_X =
        t.SCALE_3D =
        t.SCALE_Z =
        t.SCALE_Y =
        t.SCALE_X =
        t.TRANSLATE_3D =
        t.TRANSLATE_Z =
        t.TRANSLATE_Y =
        t.TRANSLATE_X =
        t.TRANSFORM =
        t.CONFIG_UNIT =
        t.CONFIG_Z_UNIT =
        t.CONFIG_Y_UNIT =
        t.CONFIG_X_UNIT =
        t.CONFIG_VALUE =
        t.CONFIG_Z_VALUE =
        t.CONFIG_Y_VALUE =
        t.CONFIG_X_VALUE =
        t.BOUNDARY_SELECTOR =
        t.W_MOD_IX =
        t.W_MOD_JS =
        t.WF_PAGE =
        t.IX2_ID_DELIMITER =
          void 0);
    var i = "|";
    t.IX2_ID_DELIMITER = i;
    var a = "data-wf-page";
    t.WF_PAGE = a;
    var r = "w-mod-js";
    t.W_MOD_JS = r;
    var o = "w-mod-ix";
    t.W_MOD_IX = o;
    var c = ".w-dyn-item";
    t.BOUNDARY_SELECTOR = c;
    var u = "xValue";
    t.CONFIG_X_VALUE = u;
    var s = "yValue";
    t.CONFIG_Y_VALUE = s;
    var l = "zValue";
    t.CONFIG_Z_VALUE = l;
    var d = "value";
    t.CONFIG_VALUE = d;
    var f = "xUnit";
    t.CONFIG_X_UNIT = f;
    var p = "yUnit";
    t.CONFIG_Y_UNIT = p;
    var v = "zUnit";
    t.CONFIG_Z_UNIT = v;
    var E = "unit";
    t.CONFIG_UNIT = E;
    var g = "transform";
    t.TRANSFORM = g;
    var y = "translateX";
    t.TRANSLATE_X = y;
    var I = "translateY";
    t.TRANSLATE_Y = I;
    var m = "translateZ";
    t.TRANSLATE_Z = m;
    var T = "translate3d";
    t.TRANSLATE_3D = T;
    var h = "scaleX";
    t.SCALE_X = h;
    var _ = "scaleY";
    t.SCALE_Y = _;
    var b = "scaleZ";
    t.SCALE_Z = b;
    var O = "scale3d";
    t.SCALE_3D = O;
    var R = "rotateX";
    t.ROTATE_X = R;
    var A = "rotateY";
    t.ROTATE_Y = A;
    var S = "rotateZ";
    t.ROTATE_Z = S;
    var L = "skew";
    t.SKEW = L;
    var N = "skewX";
    t.SKEW_X = N;
    var w = "skewY";
    t.SKEW_Y = w;
    var C = "opacity";
    t.OPACITY = C;
    var x = "filter";
    t.FILTER = x;
    var M = "width";
    t.WIDTH = M;
    var P = "height";
    t.HEIGHT = P;
    var D = "backgroundColor";
    t.BACKGROUND_COLOR = D;
    var V = "background";
    t.BACKGROUND = V;
    var k = "borderColor";
    t.BORDER_COLOR = k;
    var G = "color";
    t.COLOR = G;
    var F = "display";
    t.DISPLAY = F;
    var U = "flex";
    t.FLEX = U;
    var j = "willChange";
    t.WILL_CHANGE = j;
    var X = "AUTO";
    t.AUTO = X;
    var B = ",";
    t.COMMA_DELIMITER = B;
    var W = ":";
    t.COLON_DELIMITER = W;
    var H = "|";
    t.BAR_DELIMITER = H;
    var Q = "CHILDREN";
    t.CHILDREN = Q;
    var z = "IMMEDIATE_CHILDREN";
    t.IMMEDIATE_CHILDREN = z;
    var Y = "SIBLINGS";
    t.SIBLINGS = Y;
    var K = "PARENT";
    t.PARENT = K;
    var q = "preserve-3d";
    t.PRESERVE_3D = q;
    var $ = "HTML_ELEMENT";
    t.HTML_ELEMENT = $;
    var Z = "PLAIN_OBJECT";
    t.PLAIN_OBJECT = Z;
    var J = "ABSTRACT_NODE";
    t.ABSTRACT_NODE = J;
    var ee = "RENDER_TRANSFORM";
    t.RENDER_TRANSFORM = ee;
    var te = "RENDER_GENERAL";
    t.RENDER_GENERAL = te;
    var ne = "RENDER_STYLE";
    t.RENDER_STYLE = ne;
    var ie = "RENDER_PLUGIN";
    t.RENDER_PLUGIN = ie;
  },
  function (e, t, n) {
    "use strict";
    var i,
      a = n(1),
      r = a(n(21)),
      o = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ixRequest = void 0);
    var c = o(n(31)),
      u = n(4),
      s = n(22),
      l = u.IX2EngineActionTypes,
      d = l.IX2_PREVIEW_REQUESTED,
      f = l.IX2_PLAYBACK_REQUESTED,
      p = l.IX2_STOP_REQUESTED,
      v = l.IX2_CLEAR_REQUESTED,
      E = { preview: {}, playback: {}, stop: {}, clear: {} },
      g = Object.create(
        null,
        ((i = {}),
        (0, r.default)(i, d, { value: "preview" }),
        (0, r.default)(i, f, { value: "playback" }),
        (0, r.default)(i, p, { value: "stop" }),
        (0, r.default)(i, v, { value: "clear" }),
        i)
      ),
      y = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
          t = arguments.length > 1 ? arguments[1] : void 0;
        if (t.type in g) {
          var n = [g[t.type]];
          return (0, s.setIn)(e, [n], (0, c.default)({}, t.payload));
        }
        return e;
      };
    t.ixRequest = y;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ixSession = void 0);
    var i = n(4),
      a = n(22),
      r = i.IX2EngineActionTypes,
      o = r.IX2_SESSION_INITIALIZED,
      c = r.IX2_SESSION_STARTED,
      u = r.IX2_TEST_FRAME_RENDERED,
      s = r.IX2_SESSION_STOPPED,
      l = r.IX2_EVENT_LISTENER_ADDED,
      d = r.IX2_EVENT_STATE_CHANGED,
      f = r.IX2_ANIMATION_FRAME_CHANGED,
      p = r.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      v = r.IX2_VIEWPORT_WIDTH_CHANGED,
      E = r.IX2_MEDIA_QUERIES_DEFINED,
      g = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      y = 20,
      I = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case o:
            var n = t.payload,
              i = n.hasBoundaryNodes,
              r = n.reducedMotion;
            return (0, a.merge)(e, { hasBoundaryNodes: i, reducedMotion: r });
          case c:
            return (0, a.set)(e, "active", !0);
          case u:
            var I = t.payload.step,
              m = void 0 === I ? y : I;
            return (0, a.set)(e, "tick", e.tick + m);
          case s:
            return g;
          case f:
            var T = t.payload.now;
            return (0, a.set)(e, "tick", T);
          case l:
            var h = (0, a.addLast)(e.eventListeners, t.payload);
            return (0, a.set)(e, "eventListeners", h);
          case d:
            var _ = t.payload,
              b = _.stateKey,
              O = _.newState;
            return (0, a.setIn)(e, ["eventState", b], O);
          case p:
            var R = t.payload,
              A = R.actionListId,
              S = R.isPlaying;
            return (0, a.setIn)(e, ["playbackState", A], S);
          case v:
            for (
              var L = t.payload,
                N = L.width,
                w = L.mediaQueries,
                C = w.length,
                x = null,
                M = 0;
              M < C;
              M++
            ) {
              var P = w[M],
                D = P.key,
                V = P.min,
                k = P.max;
              if (N >= V && N <= k) {
                x = D;
                break;
              }
            }
            return (0, a.merge)(e, { viewportWidth: N, mediaQueryKey: x });
          case E:
            return (0, a.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    t.ixSession = I;
  },
  function (e, t, n) {
    function i(e) {
      var t = r(e);
      return 1 == t.length && t[0][2]
        ? o(t[0][0], t[0][1])
        : function (n) {
            return n === e || a(n, e, t);
          };
    }
    var a = n(196),
      r = n(248),
      o = n(111);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t, n, i) {
      var u = n.length,
        s = u,
        l = !i;
      if (null == e) return !s;
      for (e = Object(e); u--; ) {
        var d = n[u];
        if (l && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1;
      }
      for (; ++u < s; ) {
        d = n[u];
        var f = d[0],
          p = e[f],
          v = d[1];
        if (l && d[2]) {
          if (void 0 === p && !(f in e)) return !1;
        } else {
          var E = new a();
          if (i) var g = i(p, v, f, e, t, E);
          if (!(void 0 === g ? r(v, p, o | c, i, E) : g)) return !1;
        }
      }
      return !0;
    }
    var a = n(97),
      r = n(101),
      o = 1,
      c = 2;
    e.exports = i;
  },
  function (e, t) {
    function n() {
      (this.__data__ = []), (this.size = 0);
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e) {
      var t = this.__data__,
        n = a(t, e);
      if (n < 0) return !1;
      var i = t.length - 1;
      return n == i ? t.pop() : o.call(t, n, 1), --this.size, !0;
    }
    var a = n(33),
      r = Array.prototype,
      o = r.splice;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      var t = this.__data__,
        n = a(t, e);
      return n < 0 ? void 0 : t[n][1];
    }
    var a = n(33);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      return a(this.__data__, e) > -1;
    }
    var a = n(33);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t) {
      var n = this.__data__,
        i = a(n, e);
      return i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this;
    }
    var a = n(33);
    e.exports = i;
  },
  function (e, t, n) {
    function i() {
      (this.__data__ = new a()), (this.size = 0);
    }
    var a = n(32);
    e.exports = i;
  },
  function (e, t) {
    function n(e) {
      var t = this.__data__,
        n = t.delete(e);
      return (this.size = t.size), n;
    }
    e.exports = n;
  },
  function (e, t) {
    function n(e) {
      return this.__data__.get(e);
    }
    e.exports = n;
  },
  function (e, t) {
    function n(e) {
      return this.__data__.has(e);
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e, t) {
      var n = this.__data__;
      if (n instanceof a) {
        var i = n.__data__;
        if (!r || i.length < c - 1)
          return i.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new o(i);
      }
      return n.set(e, t), (this.size = n.size), this;
    }
    var a = n(32),
      r = n(50),
      o = n(51),
      c = 200;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      if (!o(e) || r(e)) return !1;
      var t = a(e) ? v : s;
      return t.test(c(e));
    }
    var a = n(98),
      r = n(210),
      o = n(8),
      c = n(100),
      u = /[\\^$.*+?()[\]{}|]/g,
      s = /^\[object .+?Constructor\]$/,
      l = Function.prototype,
      d = Object.prototype,
      f = l.toString,
      p = d.hasOwnProperty,
      v = RegExp(
        "^" +
          f
            .call(p)
            .replace(u, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      var t = o.call(e, u),
        n = e[u];
      try {
        e[u] = void 0;
        var i = !0;
      } catch (e) {}
      var a = c.call(e);
      return i && (t ? (e[u] = n) : delete e[u]), a;
    }
    var a = n(23),
      r = Object.prototype,
      o = r.hasOwnProperty,
      c = r.toString,
      u = a ? a.toStringTag : void 0;
    e.exports = i;
  },
  function (e, t) {
    function n(e) {
      return a.call(e);
    }
    var i = Object.prototype,
      a = i.toString;
    e.exports = n;
  },
  function (e, t, n) {
    function i(e) {
      return !!o && o in e;
    }
    var a,
      r = n(211),
      o =
        ((a = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || "")),
        a ? "Symbol(src)_1." + a : "");
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(6),
      a = i["__core-js_shared__"];
    e.exports = a;
  },
  function (e, t) {
    function n(e, t) {
      return null == e ? void 0 : e[t];
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i() {
      (this.size = 0),
        (this.__data__ = {
          hash: new a(),
          map: new (o || r)(),
          string: new a(),
        });
    }
    var a = n(214),
      r = n(32),
      o = n(50);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var i = e[t];
        this.set(i[0], i[1]);
      }
    }
    var a = n(215),
      r = n(216),
      o = n(217),
      c = n(218),
      u = n(219);
    (i.prototype.clear = a),
      (i.prototype.delete = r),
      (i.prototype.get = o),
      (i.prototype.has = c),
      (i.prototype.set = u),
      (e.exports = i);
  },
  function (e, t, n) {
    function i() {
      (this.__data__ = a ? a(null) : {}), (this.size = 0);
    }
    var a = n(34);
    e.exports = i;
  },
  function (e, t) {
    function n(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e) {
      var t = this.__data__;
      if (a) {
        var n = t[e];
        return n === r ? void 0 : n;
      }
      return c.call(t, e) ? t[e] : void 0;
    }
    var a = n(34),
      r = "__lodash_hash_undefined__",
      o = Object.prototype,
      c = o.hasOwnProperty;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      var t = this.__data__;
      return a ? void 0 !== t[e] : o.call(t, e);
    }
    var a = n(34),
      r = Object.prototype,
      o = r.hasOwnProperty;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t) {
      var n = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = a && void 0 === t ? r : t),
        this
      );
    }
    var a = n(34),
      r = "__lodash_hash_undefined__";
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      var t = a(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    var a = n(35);
    e.exports = i;
  },
  function (e, t) {
    function n(e) {
      var t = typeof e;
      return "string" == t || "number" == t || "symbol" == t || "boolean" == t
        ? "__proto__" !== e
        : null === e;
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e) {
      return a(this, e).get(e);
    }
    var a = n(35);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      return a(this, e).has(e);
    }
    var a = n(35);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t) {
      var n = a(this, e),
        i = n.size;
      return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
    }
    var a = n(35);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t, n, i, g, I) {
      var m = s(e),
        T = s(t),
        h = m ? v : u(e),
        _ = T ? v : u(t);
      (h = h == p ? E : h), (_ = _ == p ? E : _);
      var b = h == E,
        O = _ == E,
        R = h == _;
      if (R && l(e)) {
        if (!l(t)) return !1;
        (m = !0), (b = !1);
      }
      if (R && !b)
        return (
          I || (I = new a()),
          m || d(e) ? r(e, t, n, i, g, I) : o(e, t, h, n, i, g, I)
        );
      if (!(n & f)) {
        var A = b && y.call(e, "__wrapped__"),
          S = O && y.call(t, "__wrapped__");
        if (A || S) {
          var L = A ? e.value() : e,
            N = S ? t.value() : t;
          return I || (I = new a()), g(L, N, n, i, I);
        }
      }
      return !!R && (I || (I = new a()), c(e, t, n, i, g, I));
    }
    var a = n(97),
      r = n(102),
      o = n(231),
      c = n(235),
      u = n(59),
      s = n(2),
      l = n(53),
      d = n(55),
      f = 1,
      p = "[object Arguments]",
      v = "[object Array]",
      E = "[object Object]",
      g = Object.prototype,
      y = g.hasOwnProperty;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.__data__ = new a(); ++t < n; ) this.add(e[t]);
    }
    var a = n(51),
      r = n(227),
      o = n(228);
    (i.prototype.add = i.prototype.push = r),
      (i.prototype.has = o),
      (e.exports = i);
  },
  function (e, t) {
    function n(e) {
      return this.__data__.set(e, i), this;
    }
    var i = "__lodash_hash_undefined__";
    e.exports = n;
  },
  function (e, t) {
    function n(e) {
      return this.__data__.has(e);
    }
    e.exports = n;
  },
  function (e, t) {
    function n(e, t) {
      for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
        if (t(e[n], n, e)) return !0;
      return !1;
    }
    e.exports = n;
  },
  function (e, t) {
    function n(e, t) {
      return e.has(t);
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e, t, n, i, a, b, R) {
      switch (n) {
        case _:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case h:
          return !(e.byteLength != t.byteLength || !b(new r(e), new r(t)));
        case f:
        case p:
        case g:
          return o(+e, +t);
        case v:
          return e.name == t.name && e.message == t.message;
        case y:
        case m:
          return e == t + "";
        case E:
          var A = u;
        case I:
          var S = i & l;
          if ((A || (A = s), e.size != t.size && !S)) return !1;
          var L = R.get(e);
          if (L) return L == t;
          (i |= d), R.set(e, t);
          var N = c(A(e), A(t), i, a, b, R);
          return R.delete(e), N;
        case T:
          if (O) return O.call(e) == O.call(t);
      }
      return !1;
    }
    var a = n(23),
      r = n(232),
      o = n(49),
      c = n(102),
      u = n(233),
      s = n(234),
      l = 1,
      d = 2,
      f = "[object Boolean]",
      p = "[object Date]",
      v = "[object Error]",
      E = "[object Map]",
      g = "[object Number]",
      y = "[object RegExp]",
      I = "[object Set]",
      m = "[object String]",
      T = "[object Symbol]",
      h = "[object ArrayBuffer]",
      _ = "[object DataView]",
      b = a ? a.prototype : void 0,
      O = b ? b.valueOf : void 0;
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(6),
      a = i.Uint8Array;
    e.exports = a;
  },
  function (e, t) {
    function n(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (e, i) {
          n[++t] = [i, e];
        }),
        n
      );
    }
    e.exports = n;
  },
  function (e, t) {
    function n(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (e) {
          n[++t] = e;
        }),
        n
      );
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e, t, n, i, o, u) {
      var s = n & r,
        l = a(e),
        d = l.length,
        f = a(t),
        p = f.length;
      if (d != p && !s) return !1;
      for (var v = d; v--; ) {
        var E = l[v];
        if (!(s ? E in t : c.call(t, E))) return !1;
      }
      var g = u.get(e),
        y = u.get(t);
      if (g && y) return g == t && y == e;
      var I = !0;
      u.set(e, t), u.set(t, e);
      for (var m = s; ++v < d; ) {
        E = l[v];
        var T = e[E],
          h = t[E];
        if (i) var _ = s ? i(h, T, E, t, e, u) : i(T, h, E, e, t, u);
        if (!(void 0 === _ ? T === h || o(T, h, n, i, u) : _)) {
          I = !1;
          break;
        }
        m || (m = "constructor" == E);
      }
      if (I && !m) {
        var b = e.constructor,
          O = t.constructor;
        b != O &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            "function" == typeof b &&
            b instanceof b &&
            "function" == typeof O &&
            O instanceof O
          ) &&
          (I = !1);
      }
      return u.delete(e), u.delete(t), I;
    }
    var a = n(236),
      r = 1,
      o = Object.prototype,
      c = o.hasOwnProperty;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      return a(e, o, r);
    }
    var a = n(103),
      r = n(104),
      o = n(36);
    e.exports = i;
  },
  function (e, t) {
    function n(e, t) {
      for (var n = -1, i = null == e ? 0 : e.length, a = 0, r = []; ++n < i; ) {
        var o = e[n];
        t(o, n, e) && (r[a++] = o);
      }
      return r;
    }
    e.exports = n;
  },
  function (e, t) {
    function n(e, t) {
      for (var n = -1, i = Array(e); ++n < e; ) i[n] = t(n);
      return i;
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e) {
      return r(e) && a(e) == o;
    }
    var a = n(15),
      r = n(12),
      o = "[object Arguments]";
    e.exports = i;
  },
  function (e, t) {
    function n() {
      return !1;
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e) {
      return o(e) && r(e.length) && !!C[a(e)];
    }
    var a = n(15),
      r = n(56),
      o = n(12),
      c = "[object Arguments]",
      u = "[object Array]",
      s = "[object Boolean]",
      l = "[object Date]",
      d = "[object Error]",
      f = "[object Function]",
      p = "[object Map]",
      v = "[object Number]",
      E = "[object Object]",
      g = "[object RegExp]",
      y = "[object Set]",
      I = "[object String]",
      m = "[object WeakMap]",
      T = "[object ArrayBuffer]",
      h = "[object DataView]",
      _ = "[object Float32Array]",
      b = "[object Float64Array]",
      O = "[object Int8Array]",
      R = "[object Int16Array]",
      A = "[object Int32Array]",
      S = "[object Uint8Array]",
      L = "[object Uint8ClampedArray]",
      N = "[object Uint16Array]",
      w = "[object Uint32Array]",
      C = {};
    (C[_] = C[b] = C[O] = C[R] = C[A] = C[S] = C[L] = C[N] = C[w] = !0),
      (C[c] =
        C[u] =
        C[T] =
        C[s] =
        C[h] =
        C[l] =
        C[d] =
        C[f] =
        C[p] =
        C[v] =
        C[E] =
        C[g] =
        C[y] =
        C[I] =
        C[m] =
          !1),
      (e.exports = i);
  },
  function (e, t) {
    function n(e) {
      return function (t) {
        return e(t);
      };
    }
    e.exports = n;
  },
  function (e, t, n) {
    (function (e) {
      var i = n(99),
        a = t && !t.nodeType && t,
        r = a && "object" == typeof e && e && !e.nodeType && e,
        o = r && r.exports === a,
        c = o && i.process,
        u = (function () {
          try {
            var e = r && r.require && r.require("util").types;
            return e || (c && c.binding && c.binding("util"));
          } catch (e) {}
        })();
      e.exports = u;
    }.call(this, n(107)(e)));
  },
  function (e, t, n) {
    var i = n(108),
      a = i(Object.keys, Object);
    e.exports = a;
  },
  function (e, t, n) {
    var i = n(11),
      a = n(6),
      r = i(a, "DataView");
    e.exports = r;
  },
  function (e, t, n) {
    var i = n(11),
      a = n(6),
      r = i(a, "Promise");
    e.exports = r;
  },
  function (e, t, n) {
    var i = n(11),
      a = n(6),
      r = i(a, "Set");
    e.exports = r;
  },
  function (e, t, n) {
    function i(e) {
      for (var t = r(e), n = t.length; n--; ) {
        var i = t[n],
          o = e[i];
        t[n] = [i, o, a(o)];
      }
      return t;
    }
    var a = n(110),
      r = n(36);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t) {
      return c(e) && u(t)
        ? s(l(e), t)
        : function (n) {
            var i = r(n, e);
            return void 0 === i && i === t ? o(n, e) : a(t, i, d | f);
          };
    }
    var a = n(101),
      r = n(60),
      o = n(255),
      c = n(62),
      u = n(110),
      s = n(111),
      l = n(24),
      d = 1,
      f = 2;
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(251),
      a =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      r = /\\(\\)?/g,
      o = i(function (e) {
        var t = [];
        return (
          46 === e.charCodeAt(0) && t.push(""),
          e.replace(a, function (e, n, i, a) {
            t.push(i ? a.replace(r, "$1") : n || e);
          }),
          t
        );
      });
    e.exports = o;
  },
  function (e, t, n) {
    function i(e) {
      var t = a(e, function (e) {
          return n.size === r && n.clear(), e;
        }),
        n = t.cache;
      return t;
    }
    var a = n(252),
      r = 500;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t) {
      if ("function" != typeof e || (null != t && "function" != typeof t))
        throw new TypeError(r);
      var n = function () {
        var i = arguments,
          a = t ? t.apply(this, i) : i[0],
          r = n.cache;
        if (r.has(a)) return r.get(a);
        var o = e.apply(this, i);
        return (n.cache = r.set(a, o) || r), o;
      };
      return (n.cache = new (i.Cache || a)()), n;
    }
    var a = n(51),
      r = "Expected a function";
    (i.Cache = a), (e.exports = i);
  },
  function (e, t, n) {
    function i(e) {
      return null == e ? "" : a(e);
    }
    var a = n(254);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      if ("string" == typeof e) return e;
      if (o(e)) return r(e, i) + "";
      if (c(e)) return l ? l.call(e) : "";
      var t = e + "";
      return "0" == t && 1 / e == -u ? "-0" : t;
    }
    var a = n(23),
      r = n(112),
      o = n(2),
      c = n(39),
      u = 1 / 0,
      s = a ? a.prototype : void 0,
      l = s ? s.toString : void 0;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t) {
      return null != e && r(e, t, a);
    }
    var a = n(256),
      r = n(257);
    e.exports = i;
  },
  function (e, t) {
    function n(e, t) {
      return null != e && t in Object(e);
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e, t, n) {
      t = a(t, e);
      for (var i = -1, l = t.length, d = !1; ++i < l; ) {
        var f = s(t[i]);
        if (!(d = null != e && n(e, f))) break;
        e = e[f];
      }
      return d || ++i != l
        ? d
        : ((l = null == e ? 0 : e.length),
          !!l && u(l) && c(f, l) && (o(e) || r(e)));
    }
    var a = n(38),
      r = n(37),
      o = n(2),
      c = n(54),
      u = n(56),
      s = n(24);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      return o(e) ? a(c(e)) : r(e);
    }
    var a = n(113),
      r = n(259),
      o = n(62),
      c = n(24);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      return function (t) {
        return a(t, e);
      };
    }
    var a = n(61);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t, n) {
      var i = null == e ? 0 : e.length;
      if (!i) return -1;
      var u = null == n ? 0 : o(n);
      return u < 0 && (u = c(i + u, 0)), a(e, r(t, 3), u);
    }
    var a = n(114),
      r = n(10),
      o = n(115),
      c = Math.max;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      if (!e) return 0 === e ? e : 0;
      if (((e = a(e)), e === r || e === -r)) {
        var t = e < 0 ? -1 : 1;
        return t * o;
      }
      return e == e ? e : 0;
    }
    var a = n(64),
      r = 1 / 0,
      o = 1.7976931348623157e308;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      return e ? e.slice(0, a(e) + 1).replace(r, "") : e;
    }
    var a = n(263),
      r = /^\s+/;
    e.exports = i;
  },
  function (e, t) {
    function n(e) {
      for (var t = e.length; t-- && i.test(e.charAt(t)); );
      return t;
    }
    var i = /\s/;
    e.exports = n;
  },
  function (e, t) {
    function n(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
    }
    e.exports = n;
  },
  function (e, t) {
    function n(e) {
      if (
        Symbol.iterator in Object(e) ||
        "[object Arguments]" === Object.prototype.toString.call(e)
      )
        return Array.from(e);
    }
    e.exports = n;
  },
  function (e, t) {
    function n() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    function i(e, t, n, i, a) {
      var r =
        n === s ? (0, o.getIn)(a, ["config", "target", "objectId"]) : null;
      return (0, o.mergeIn)(e, [i], { id: i, ref: t, refId: r, refType: n });
    }
    function a(e, t, n, i, a) {
      var c = r(a),
        u = [t, b, n];
      return (0, o.mergeIn)(e, u, i, c);
    }
    function r(e) {
      var t = e.config;
      return R.reduce(function (e, n) {
        var i = n[0],
          a = n[1],
          r = t[i],
          o = t[a];
        return null != r && null != o && (e[a] = o), e;
      }, {});
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createElementState = i),
      (t.mergeActionState = a),
      (t.ixElements = void 0);
    var o = n(22),
      c = n(4),
      u = c.IX2EngineConstants,
      s = (u.HTML_ELEMENT, u.PLAIN_OBJECT),
      l = (u.ABSTRACT_NODE, u.CONFIG_X_VALUE),
      d = u.CONFIG_Y_VALUE,
      f = u.CONFIG_Z_VALUE,
      p = u.CONFIG_VALUE,
      v = u.CONFIG_X_UNIT,
      E = u.CONFIG_Y_UNIT,
      g = u.CONFIG_Z_UNIT,
      y = u.CONFIG_UNIT,
      I = c.IX2EngineActionTypes,
      m = I.IX2_SESSION_STOPPED,
      T = I.IX2_INSTANCE_ADDED,
      h = I.IX2_ELEMENT_STATE_CHANGED,
      _ = {},
      b = "refState",
      O = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
          case m:
            return _;
          case T:
            var n = t.payload,
              r = n.elementId,
              c = n.element,
              u = n.origin,
              s = n.actionItem,
              l = n.refType,
              d = s.actionTypeId,
              f = e;
            return (
              (0, o.getIn)(f, [r, c]) !== c && (f = i(f, c, l, r, s)),
              a(f, r, d, u, s)
            );
          case h:
            var p = t.payload,
              v = p.elementId,
              E = p.actionTypeId,
              g = p.current,
              y = p.actionItem;
            return a(e, v, E, g, y);
          default:
            return e;
        }
      };
    t.ixElements = O;
    var R = [
      [l, v],
      [d, E],
      [f, g],
      [p, y],
    ];
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.clearPlugin =
        t.renderPlugin =
        t.createPluginInstance =
        t.getPluginDestination =
        t.getPluginOrigin =
        t.getPluginDuration =
        t.getPluginConfig =
          void 0);
    var i = function (e) {
      return e.value;
    };
    t.getPluginConfig = i;
    var a = function (e, t) {
      if ("auto" !== t.config.duration) return null;
      var n = parseFloat(e.getAttribute("data-duration"));
      return n > 0
        ? 1e3 * n
        : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
    };
    t.getPluginDuration = a;
    var r = function (e) {
      return e || { value: 0 };
    };
    t.getPluginOrigin = r;
    var o = function (e) {
      return { value: e.value };
    };
    t.getPluginDestination = o;
    var c = function (e) {
      var t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    t.createPluginInstance = c;
    var u = function (e, t, n) {
      if (e) {
        var i = t[n.actionTypeId].value / 100;
        e.goToFrame(e.frames * i);
      }
    };
    t.renderPlugin = u;
    var s = function (e) {
      var t = window.Webflow.require("lottie").createInstance(e);
      t.stop();
    };
    t.clearPlugin = s;
  },
  function (e, t, n) {
    "use strict";
    function i() {
      return "i" + Ye++;
    }
    function a(e, t) {
      for (var n in e) {
        var i = e[n];
        if (i && i.ref === t) return i.id;
      }
      return "e" + Ke++;
    }
    function r() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.events,
        n = e.actionLists,
        i = e.site,
        a = (0, H.default)(
          t,
          function (e, t) {
            var n = t.eventTypeId;
            return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
          },
          {}
        ),
        r = i && i.mediaQueries,
        o = [];
      return (
        r
          ? (o = r.map(function (e) {
              return e.key;
            }))
          : ((r = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: t,
            actionLists: n,
            eventTypeMap: a,
            mediaQueries: r,
            mediaQueryKeys: o,
          },
        }
      );
    }
    function o(e) {
      function t() {
        var e = i(c());
        null != e ? o(e, l) || ((l = e), a(l, n)) : s();
      }
      var n = e.store,
        i = e.select,
        a = e.onChange,
        r = e.comparator,
        o = void 0 === r ? qe : r,
        c = n.getState,
        u = n.subscribe,
        s = u(t),
        l = i(c());
      return s;
    }
    function c(e) {
      var t = (0, j.default)(e);
      if ("string" === t) return { id: e };
      if (null != e && "object" === t) {
        var n = e.id,
          i = e.objectId,
          a = e.selector,
          r = e.selectorGuids,
          o = e.appliesTo,
          c = e.useEventTarget;
        return {
          id: n,
          objectId: i,
          selector: a,
          selectorGuids: r,
          appliesTo: o,
          useEventTarget: c,
        };
      }
      return {};
    }
    function u(e) {
      var t,
        n,
        i,
        a = e.config,
        r = e.event,
        o = e.eventTarget,
        s = e.elementRoot,
        l = e.elementApi;
      if (!l) throw new Error("IX2 missing elementApi");
      var d = a.targets;
      if (Array.isArray(d) && d.length > 0)
        return d.reduce(function (e, t) {
          return e.concat(
            u({
              config: { target: t },
              event: r,
              eventTarget: o,
              elementRoot: s,
              elementApi: l,
            })
          );
        }, []);
      var f = l.getValidDocument,
        p = l.getQuerySelector,
        v = l.queryDocument,
        E = l.getChildElements,
        g = l.getSiblingElements,
        y = l.matchSelector,
        I = l.elementContains,
        m = l.isSiblingNode,
        T = a.target;
      if (!T) return [];
      var h = c(T),
        _ = h.id,
        b = h.objectId,
        O = h.selector,
        R = h.selectorGuids,
        A = h.appliesTo,
        S = h.useEventTarget;
      if (b) {
        var L = ze[b] || (ze[b] = {});
        return [L];
      }
      if (A === Y.EventAppliesTo.PAGE) {
        var N = f(_);
        return N ? [N] : [];
      }
      var w,
        C,
        x,
        M =
          null !==
            (t =
              null == r
                ? void 0
                : null === (n = r.action) || void 0 === n
                ? void 0
                : null === (i = n.config) || void 0 === i
                ? void 0
                : i.affectedElements) && void 0 !== t
            ? t
            : {},
        P = M[_ || O] || {},
        D = Boolean(P.id || P.selector),
        V = r && p(c(r.target));
      if (
        (D
          ? ((w = P.limitAffectedElements), (C = V), (x = p(P)))
          : (C = x = p({ id: _, selector: O, selectorGuids: R })),
        r && S)
      ) {
        var k = o && (x || !0 === S) ? [o] : v(V);
        if (x) {
          if (S === Te)
            return v(x).filter(function (e) {
              return k.some(function (t) {
                return I(e, t);
              });
            });
          if (S === ye)
            return v(x).filter(function (e) {
              return k.some(function (t) {
                return I(t, e);
              });
            });
          if (S === me)
            return v(x).filter(function (e) {
              return k.some(function (t) {
                return m(t, e);
              });
            });
        }
        return k;
      }
      return null == C || null == x
        ? []
        : Z.IS_BROWSER_ENV && s
        ? v(x).filter(function (e) {
            return s.contains(e);
          })
        : w === ye
        ? v(C, x)
        : w === Ie
        ? E(v(C)).filter(y(x))
        : w === me
        ? g(v(C)).filter(y(x))
        : v(x);
    }
    function s(e) {
      var t = e.element,
        n = e.actionItem;
      if (!Z.IS_BROWSER_ENV) return {};
      var i = n.actionTypeId;
      switch (i) {
        case Ge:
        case Fe:
        case Ue:
        case je:
        case Xe:
          return window.getComputedStyle(t);
        default:
          return {};
      }
    }
    function l(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0,
        r = a.getStyle,
        o = i.actionTypeId,
        c = i.config;
      if ((0, $.isPluginType)(o)) return (0, $.getPluginOrigin)(o)(t[o]);
      switch (o) {
        case xe:
        case Me:
        case Pe:
        case De:
          return t[o] || tt[o];
        case ke:
          return Ze(t[o], i.config.filters);
        case Ve:
          return { value: (0, W.default)(parseFloat(r(e, le)), 1) };
        case Ge:
          var u,
            s,
            l = r(e, fe),
            d = r(e, pe);
          return (
            (u =
              c.widthUnit === be
                ? $e.test(l)
                  ? parseFloat(l)
                  : parseFloat(n.width)
                : (0, W.default)(parseFloat(l), parseFloat(n.width))),
            (s =
              c.heightUnit === be
                ? $e.test(d)
                  ? parseFloat(d)
                  : parseFloat(n.height)
                : (0, W.default)(parseFloat(d), parseFloat(n.height))),
            { widthValue: u, heightValue: s }
          );
        case Fe:
        case Ue:
        case je:
          return m({
            element: e,
            actionTypeId: o,
            computedStyle: n,
            getStyle: r,
          });
        case Xe:
          return { value: (0, W.default)(r(e, he), n.display) };
        case Be:
          return t[o] || { value: 0 };
        default:
          return;
      }
    }
    function d(e) {
      var t = e.element,
        n = e.actionItem,
        i = e.elementApi,
        a = n.actionTypeId;
      if ((0, $.isPluginType)(a))
        return (0, $.getPluginDestination)(a)(n.config);
      switch (a) {
        case xe:
        case Me:
        case Pe:
        case De:
          var r = n.config,
            o = r.xValue,
            c = r.yValue,
            u = r.zValue;
          return { xValue: o, yValue: c, zValue: u };
        case Ge:
          var s = i.getStyle,
            l = i.setStyle,
            d = i.getProperty,
            f = n.config,
            p = f.widthUnit,
            v = f.heightUnit,
            E = n.config,
            g = E.widthValue,
            y = E.heightValue;
          if (!Z.IS_BROWSER_ENV) return { widthValue: g, heightValue: y };
          if (p === be) {
            var I = s(t, fe);
            l(t, fe, ""), (g = d(t, "offsetWidth")), l(t, fe, I);
          }
          if (v === be) {
            var m = s(t, pe);
            l(t, pe, ""), (y = d(t, "offsetHeight")), l(t, pe, m);
          }
          return { widthValue: g, heightValue: y };
        case Fe:
        case Ue:
        case je:
          var T = n.config,
            h = T.rValue,
            _ = T.gValue,
            b = T.bValue,
            O = T.aValue;
          return { rValue: h, gValue: _, bValue: b, aValue: O };
        case ke:
          return n.config.filters.reduce(Je, {});
        default:
          var R = n.config.value;
          return { value: R };
      }
    }
    function f(e) {
      return /^TRANSFORM_/.test(e)
        ? Se
        : /^STYLE_/.test(e)
        ? Ne
        : /^GENERAL_/.test(e)
        ? Le
        : /^PLUGIN_/.test(e)
        ? we
        : void 0;
    }
    function p(e, t) {
      return e === Ne ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function v(e, t, n, i, a, r, o, c, u) {
      switch (c) {
        case Se:
          return E(e, t, n, a, o);
        case Ne:
          return T(e, t, n, a, r, o);
        case Le:
          return h(e, a, o);
        case we:
          var s = a.actionTypeId;
          if ((0, $.isPluginType)(s)) return (0, $.renderPlugin)(s)(u, t, a);
      }
    }
    function E(e, t, n, i, a) {
      var r = at
          .map(function (e) {
            var n = tt[e],
              i = t[e] || {},
              a = i.xValue,
              r = void 0 === a ? n.xValue : a,
              o = i.yValue,
              c = void 0 === o ? n.yValue : o,
              u = i.zValue,
              s = void 0 === u ? n.zValue : u,
              l = i.xUnit,
              d = void 0 === l ? "" : l,
              f = i.yUnit,
              p = void 0 === f ? "" : f,
              v = i.zUnit,
              E = void 0 === v ? "" : v;
            switch (e) {
              case xe:
                return ""
                  .concat(ne, "(")
                  .concat(r)
                  .concat(d, ", ")
                  .concat(c)
                  .concat(p, ", ")
                  .concat(s)
                  .concat(E, ")");
              case Me:
                return ""
                  .concat(ie, "(")
                  .concat(r)
                  .concat(d, ", ")
                  .concat(c)
                  .concat(p, ", ")
                  .concat(s)
                  .concat(E, ")");
              case Pe:
                return ""
                  .concat(ae, "(")
                  .concat(r)
                  .concat(d, ") ")
                  .concat(re, "(")
                  .concat(c)
                  .concat(p, ") ")
                  .concat(oe, "(")
                  .concat(s)
                  .concat(E, ")");
              case De:
                return ""
                  .concat(ce, "(")
                  .concat(r)
                  .concat(d, ", ")
                  .concat(c)
                  .concat(p, ")");
              default:
                return "";
            }
          })
          .join(" "),
        o = a.setStyle;
      _(e, Z.TRANSFORM_PREFIXED, a),
        o(e, Z.TRANSFORM_PREFIXED, r),
        y(i, n) && o(e, Z.TRANSFORM_STYLE_PREFIXED, ue);
    }
    function g(e, t, n, i) {
      var a = (0, H.default)(
          t,
          function (e, t, i) {
            return ""
              .concat(e, " ")
              .concat(i, "(")
              .concat(t)
              .concat(it(i, n), ")");
          },
          ""
        ),
        r = i.setStyle;
      _(e, de, i), r(e, de, a);
    }
    function y(e, t) {
      var n = e.actionTypeId,
        i = t.xValue,
        a = t.yValue,
        r = t.zValue;
      return (
        (n === xe && void 0 !== r) ||
        (n === Me && void 0 !== r) ||
        (n === Pe && (void 0 !== i || void 0 !== a))
      );
    }
    function I(e, t) {
      var n = e.exec(t);
      return n ? n[1] : "";
    }
    function m(e) {
      var t = e.element,
        n = e.actionTypeId,
        i = e.computedStyle,
        a = e.getStyle,
        r = He[n],
        o = a(t, r),
        c = ot.test(o) ? o : i[r],
        u = I(ct, c).split(Oe);
      return {
        rValue: (0, W.default)(parseInt(u[0], 10), 255),
        gValue: (0, W.default)(parseInt(u[1], 10), 255),
        bValue: (0, W.default)(parseInt(u[2], 10), 255),
        aValue: (0, W.default)(parseFloat(u[3]), 1),
      };
    }
    function T(e, t, n, i, a, r) {
      var o = r.setStyle,
        c = i.actionTypeId,
        u = i.config;
      switch (c) {
        case Ge:
          var s = i.config,
            l = s.widthUnit,
            d = void 0 === l ? "" : l,
            f = s.heightUnit,
            p = void 0 === f ? "" : f,
            v = n.widthValue,
            E = n.heightValue;
          void 0 !== v &&
            (d === be && (d = "px"), _(e, fe, r), o(e, fe, v + d)),
            void 0 !== E &&
              (p === be && (p = "px"), _(e, pe, r), o(e, pe, E + p));
          break;
        case ke:
          g(e, n, u, r);
          break;
        case Fe:
        case Ue:
        case je:
          var y = He[c],
            I = Math.round(n.rValue),
            m = Math.round(n.gValue),
            T = Math.round(n.bValue),
            h = n.aValue;
          _(e, y, r),
            o(
              e,
              y,
              h >= 1
                ? "rgb(".concat(I, ",").concat(m, ",").concat(T, ")")
                : "rgba("
                    .concat(I, ",")
                    .concat(m, ",")
                    .concat(T, ",")
                    .concat(h, ")")
            );
          break;
        default:
          var b = u.unit,
            O = void 0 === b ? "" : b;
          _(e, a, r), o(e, a, n.value + O);
      }
    }
    function h(e, t, n) {
      var i = n.setStyle;
      switch (t.actionTypeId) {
        case Xe:
          var a = t.config.value;
          return void (a === se && Z.IS_BROWSER_ENV
            ? i(e, he, Z.FLEX_PREFIXED)
            : i(e, he, a));
      }
    }
    function _(e, t, n) {
      if (Z.IS_BROWSER_ENV) {
        var i = Qe[t];
        if (i) {
          var a = n.getStyle,
            r = n.setStyle,
            o = a(e, _e);
          if (o) {
            var c = o.split(Oe).map(We);
            -1 === c.indexOf(i) && r(e, _e, c.concat(i).join(Oe));
          } else r(e, _e, i);
        }
      }
    }
    function b(e, t, n) {
      if (Z.IS_BROWSER_ENV) {
        var i = Qe[t];
        if (i) {
          var a = n.getStyle,
            r = n.setStyle,
            o = a(e, _e);
          o &&
            -1 !== o.indexOf(i) &&
            r(
              e,
              _e,
              o
                .split(Oe)
                .map(We)
                .filter(function (e) {
                  return e !== i;
                })
                .join(Oe)
            );
        }
      }
    }
    function O(e) {
      var t = e.store,
        n = e.elementApi,
        i = t.getState(),
        a = i.ixData,
        r = a.events,
        o = void 0 === r ? {} : r,
        c = a.actionLists,
        u = void 0 === c ? {} : c;
      Object.keys(o).forEach(function (e) {
        var t = o[e],
          i = t.action.config,
          a = i.actionListId,
          r = u[a];
        r && R({ actionList: r, event: t, elementApi: n });
      }),
        Object.keys(u).forEach(function (e) {
          R({ actionList: u[e], elementApi: n });
        });
    }
    function R(e) {
      var t = e.actionList,
        n = void 0 === t ? {} : t,
        i = e.event,
        a = e.elementApi,
        r = n.actionItemGroups,
        o = n.continuousParameterGroups;
      r &&
        r.forEach(function (e) {
          A({ actionGroup: e, event: i, elementApi: a });
        }),
        o &&
          o.forEach(function (e) {
            var t = e.continuousActionGroups;
            t.forEach(function (e) {
              A({ actionGroup: e, event: i, elementApi: a });
            });
          });
    }
    function A(e) {
      var t = e.actionGroup,
        n = e.event,
        i = e.elementApi,
        a = t.actionItems;
      a.forEach(function (e) {
        var t,
          a = e.actionTypeId,
          r = e.config;
        (t = (0, $.isPluginType)(a)
          ? (0, $.clearPlugin)(a)
          : ut({ effect: L, actionTypeId: a, elementApi: i })),
          u({ config: r, event: n, elementApi: i }).forEach(t);
      });
    }
    function S(e, t, n) {
      var i = n.setStyle,
        a = n.getStyle,
        r = t.actionTypeId;
      if (r === Ge) {
        var o = t.config;
        o.widthUnit === be && i(e, fe, ""), o.heightUnit === be && i(e, pe, "");
      }
      a(e, _e) && ut({ effect: b, actionTypeId: r, elementApi: n })(e);
    }
    function L(e, t, n) {
      var i = n.setStyle;
      b(e, t, n),
        i(e, t, ""),
        t === Z.TRANSFORM_PREFIXED && i(e, Z.TRANSFORM_STYLE_PREFIXED, "");
    }
    function N(e) {
      var t = 0,
        n = 0;
      return (
        e.forEach(function (e, i) {
          var a = e.config,
            r = a.delay + a.duration;
          r >= t && ((t = r), (n = i));
        }),
        n
      );
    }
    function w(e, t) {
      var n = e.actionItemGroups,
        i = e.useFirstGroupAsInitialState,
        a = t.actionItem,
        r = t.verboseTimeElapsed,
        o = void 0 === r ? 0 : r,
        c = 0,
        u = 0;
      return (
        n.forEach(function (e, t) {
          if (!i || 0 !== t) {
            var n = e.actionItems,
              r = n[N(n)],
              s = r.config,
              l = r.actionTypeId;
            a.id === r.id && (u = c + o);
            var d = f(l) === Le ? 0 : s.duration;
            c += s.delay + d;
          }
        }),
        c > 0 ? (0, q.optimizeFloat)(u / c) : 0
      );
    }
    function C(e) {
      var t = e.actionList,
        n = e.actionItemId,
        i = e.rawData,
        a = t.actionItemGroups,
        r = t.continuousParameterGroups,
        o = [],
        c = function (e) {
          return (
            o.push((0, z.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === n
          );
        };
      return (
        a &&
          a.some(function (e) {
            var t = e.actionItems;
            return t.some(c);
          }),
        r &&
          r.some(function (e) {
            var t = e.continuousActionGroups;
            return t.some(function (e) {
              var t = e.actionItems;
              return t.some(c);
            });
          }),
        (0, z.setIn)(
          i,
          ["actionLists"],
          (0, X.default)({}, t.id, {
            id: t.id,
            actionItemGroups: [{ actionItems: o }],
          })
        )
      );
    }
    function x(e, t) {
      var n = t.basedOn;
      return (
        (e === Y.EventTypeConsts.SCROLLING_IN_VIEW &&
          (n === Y.EventBasedOn.ELEMENT || null == n)) ||
        (e === Y.EventTypeConsts.MOUSE_MOVE && n === Y.EventBasedOn.ELEMENT)
      );
    }
    function M(e, t) {
      var n = e + Re + t;
      return n;
    }
    function P(e, t) {
      return null == t || -1 !== e.indexOf(t);
    }
    function D(e, t) {
      return (0, K.default)(e && e.sort(), t && t.sort());
    }
    function V(e) {
      if ("string" == typeof e) return e;
      var t = e.id,
        n = void 0 === t ? "" : t,
        i = e.selector,
        a = void 0 === i ? "" : i,
        r = e.useEventTarget,
        o = void 0 === r ? "" : r;
      return n + Ae + a + Ae + o;
    }
    var k,
      G,
      F,
      U = n(1),
      j = U(n(17)),
      X = U(n(21)),
      B = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getInstanceId = i),
      (t.getElementId = a),
      (t.reifyState = r),
      (t.observeStore = o),
      (t.getAffectedElements = u),
      (t.getComputedStyle = s),
      (t.getInstanceOrigin = l),
      (t.getDestinationValues = d),
      (t.getRenderType = f),
      (t.getStyleProp = p),
      (t.renderHTMLElement = v),
      (t.clearAllStyles = O),
      (t.cleanupHTMLElement = S),
      (t.getMaxDurationItemIndex = N),
      (t.getActionListProgress = w),
      (t.reduceListToGroup = C),
      (t.shouldNamespaceEventParameter = x),
      (t.getNamespacedParameterId = M),
      (t.shouldAllowMediaQuery = P),
      (t.mediaQueriesEqual = D),
      (t.stringifyTarget = V),
      Object.defineProperty(t, "shallowEqual", {
        enumerable: !0,
        get: function () {
          return K.default;
        },
      }),
      (t.getItemConfigByKey = void 0);
    var W = B(n(270)),
      H = B(n(271)),
      Q = B(n(277)),
      z = n(22),
      Y = n(4),
      K = B(n(279)),
      q = n(118),
      $ = n(120),
      Z = n(48),
      J = Y.IX2EngineConstants,
      ee = J.BACKGROUND,
      te = J.TRANSFORM,
      ne = J.TRANSLATE_3D,
      ie = J.SCALE_3D,
      ae = J.ROTATE_X,
      re = J.ROTATE_Y,
      oe = J.ROTATE_Z,
      ce = J.SKEW,
      ue = J.PRESERVE_3D,
      se = J.FLEX,
      le = J.OPACITY,
      de = J.FILTER,
      fe = J.WIDTH,
      pe = J.HEIGHT,
      ve = J.BACKGROUND_COLOR,
      Ee = J.BORDER_COLOR,
      ge = J.COLOR,
      ye = J.CHILDREN,
      Ie = J.IMMEDIATE_CHILDREN,
      me = J.SIBLINGS,
      Te = J.PARENT,
      he = J.DISPLAY,
      _e = J.WILL_CHANGE,
      be = J.AUTO,
      Oe = J.COMMA_DELIMITER,
      Re = J.COLON_DELIMITER,
      Ae = J.BAR_DELIMITER,
      Se = J.RENDER_TRANSFORM,
      Le = J.RENDER_GENERAL,
      Ne = J.RENDER_STYLE,
      we = J.RENDER_PLUGIN,
      Ce = Y.ActionTypeConsts,
      xe = Ce.TRANSFORM_MOVE,
      Me = Ce.TRANSFORM_SCALE,
      Pe = Ce.TRANSFORM_ROTATE,
      De = Ce.TRANSFORM_SKEW,
      Ve = Ce.STYLE_OPACITY,
      ke = Ce.STYLE_FILTER,
      Ge = Ce.STYLE_SIZE,
      Fe = Ce.STYLE_BACKGROUND_COLOR,
      Ue = Ce.STYLE_BORDER,
      je = Ce.STYLE_TEXT_COLOR,
      Xe = Ce.GENERAL_DISPLAY,
      Be = "OBJECT_VALUE",
      We = function (e) {
        return e.trim();
      },
      He = Object.freeze(
        ((k = {}),
        (0, X.default)(k, Fe, ve),
        (0, X.default)(k, Ue, Ee),
        (0, X.default)(k, je, ge),
        k)
      ),
      Qe = Object.freeze(
        ((G = {}),
        (0, X.default)(G, Z.TRANSFORM_PREFIXED, te),
        (0, X.default)(G, ve, ee),
        (0, X.default)(G, le, le),
        (0, X.default)(G, de, de),
        (0, X.default)(G, fe, fe),
        (0, X.default)(G, pe, pe),
        G)
      ),
      ze = {},
      Ye = 1,
      Ke = 1,
      qe = function (e, t) {
        return e === t;
      },
      $e = /px/,
      Ze = function (e, t) {
        return t.reduce(function (e, t) {
          return null == e[t.type] && (e[t.type] = nt[t.type]), e;
        }, e || {});
      },
      Je = function (e, t) {
        return t && (e[t.type] = t.value || 0), e;
      },
      et = function (e, t, n) {
        if ((0, $.isPluginType)(e)) return (0, $.getPluginConfig)(e)(n, t);
        switch (e) {
          case ke:
            var i = (0, Q.default)(n.filters, function (e) {
              var n = e.type;
              return n === t;
            });
            return i ? i.value : 0;
          default:
            return n[t];
        }
      };
    t.getItemConfigByKey = et;
    var tt =
        ((F = {}),
        (0, X.default)(
          F,
          xe,
          Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
        ),
        (0, X.default)(
          F,
          Me,
          Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })
        ),
        (0, X.default)(
          F,
          Pe,
          Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
        ),
        (0, X.default)(F, De, Object.freeze({ xValue: 0, yValue: 0 })),
        F),
      nt = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      it = function (e, t) {
        var n = (0, Q.default)(t.filters, function (t) {
          var n = t.type;
          return n === e;
        });
        if (n && n.unit) return n.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      at = Object.keys(tt),
      rt = "\\(([^)]+)\\)",
      ot = /^rgb/,
      ct = RegExp("rgba?".concat(rt)),
      ut = function (e) {
        var t = e.effect,
          n = e.actionTypeId,
          i = e.elementApi;
        return function (e) {
          switch (n) {
            case xe:
            case Me:
            case Pe:
            case De:
              t(e, Z.TRANSFORM_PREFIXED, i);
              break;
            case ke:
              t(e, de, i);
              break;
            case Ve:
              t(e, le, i);
              break;
            case Ge:
              t(e, fe, i), t(e, pe, i);
              break;
            case Fe:
            case Ue:
            case je:
              t(e, He[n], i);
              break;
            case Xe:
              t(e, he, i);
          }
        };
      };
  },
  function (e, t) {
    function n(e, t) {
      return null == e || e != e ? t : e;
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e, t, n) {
      var i = u(e) ? a : c,
        s = arguments.length < 3;
      return i(e, o(t, 4), n, s, r);
    }
    var a = n(272),
      r = n(121),
      o = n(10),
      c = n(276),
      u = n(2);
    e.exports = i;
  },
  function (e, t) {
    function n(e, t, n, i) {
      var a = -1,
        r = null == e ? 0 : e.length;
      for (i && r && (n = e[++a]); ++a < r; ) n = t(n, e[a], a, e);
      return n;
    }
    e.exports = n;
  },
  function (e, t, n) {
    var i = n(274),
      a = i();
    e.exports = a;
  },
  function (e, t) {
    function n(e) {
      return function (t, n, i) {
        for (var a = -1, r = Object(t), o = i(t), c = o.length; c--; ) {
          var u = o[e ? c : ++a];
          if (!1 === n(r[u], u, r)) break;
        }
        return t;
      };
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e, t) {
      return function (n, i) {
        if (null == n) return n;
        if (!a(n)) return e(n, i);
        for (
          var r = n.length, o = t ? r : -1, c = Object(n);
          (t ? o-- : ++o < r) && !1 !== i(c[o], o, c);

        );
        return n;
      };
    }
    var a = n(16);
    e.exports = i;
  },
  function (e, t) {
    function n(e, t, n, i, a) {
      return (
        a(e, function (e, a, r) {
          n = i ? ((i = !1), e) : t(n, e, a, r);
        }),
        n
      );
    }
    e.exports = n;
  },
  function (e, t, n) {
    var i = n(96),
      a = n(278),
      r = i(a);
    e.exports = r;
  },
  function (e, t, n) {
    function i(e, t, n) {
      var i = null == e ? 0 : e.length;
      if (!i) return -1;
      var s = i - 1;
      return (
        void 0 !== n && ((s = o(n)), (s = n < 0 ? c(i + s, 0) : u(s, i - 1))),
        a(e, r(t, 3), s, !0)
      );
    }
    var a = n(114),
      r = n(10),
      o = n(115),
      c = Math.max,
      u = Math.min;
    e.exports = i;
  },
  function (e, t, n) {
    "use strict";
    function i(e, t) {
      return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
    }
    function a(e, t) {
      if (i(e, t)) return !0;
      if (
        "object" !== (0, o.default)(e) ||
        null === e ||
        "object" !== (0, o.default)(t) ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        a = Object.keys(t);
      if (n.length !== a.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!c.call(t, n[r]) || !i(e[n[r]], t[n[r]])) return !1;
      return !0;
    }
    var r = n(1),
      o = r(n(17));
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var c = Object.prototype.hasOwnProperty,
      u = a;
    t.default = u;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ixInstances = void 0);
    var i = n(4),
      a = n(14),
      r = n(22),
      o = i.IX2EngineActionTypes,
      c = o.IX2_RAW_DATA_IMPORTED,
      u = o.IX2_SESSION_STOPPED,
      s = o.IX2_INSTANCE_ADDED,
      l = o.IX2_INSTANCE_STARTED,
      d = o.IX2_INSTANCE_REMOVED,
      f = o.IX2_ANIMATION_FRAME_CHANGED,
      p = a.IX2EasingUtils,
      v = p.optimizeFloat,
      E = p.applyEasing,
      g = p.createBezierEasing,
      y = i.IX2EngineConstants.RENDER_GENERAL,
      I = a.IX2VanillaUtils,
      m = I.getItemConfigByKey,
      T = I.getRenderType,
      h = I.getStyleProp,
      _ = function (e, t) {
        var n = e.position,
          i = e.parameterId,
          a = e.actionGroups,
          o = e.destinationKeys,
          c = e.smoothing,
          u = e.restingValue,
          s = e.actionTypeId,
          l = e.customEasingFn,
          d = e.skipMotion,
          f = e.skipToValue,
          p = t.payload.parameters,
          g = Math.max(1 - c, 0.01),
          y = p[i];
        null == y && ((g = 1), (y = u));
        var I,
          T,
          h,
          _,
          b = Math.max(y, 0) || 0,
          O = v(b - n),
          R = d ? f : v(n + O * g),
          A = 100 * R;
        if (R === n && e.current) return e;
        for (var S = 0, L = a.length; S < L; S++) {
          var N = a[S],
            w = N.keyframe,
            C = N.actionItems;
          if ((0 === S && (I = C[0]), A >= w)) {
            I = C[0];
            var x = a[S + 1],
              M = x && A !== w;
            (T = M ? x.actionItems[0] : null),
              M && ((h = w / 100), (_ = (x.keyframe - w) / 100));
          }
        }
        var P = {};
        if (I && !T)
          for (var D = 0, V = o.length; D < V; D++) {
            var k = o[D];
            P[k] = m(s, k, I.config);
          }
        else if (I && T && void 0 !== h && void 0 !== _)
          for (
            var G = (R - h) / _,
              F = I.config.easing,
              U = E(F, G, l),
              j = 0,
              X = o.length;
            j < X;
            j++
          ) {
            var B = o[j],
              W = m(s, B, I.config),
              H = m(s, B, T.config),
              Q = H - W,
              z = Q * U + W;
            P[B] = z;
          }
        return (0, r.merge)(e, { position: R, current: P });
      },
      b = function (e, t) {
        var n = e,
          i = n.active,
          a = n.origin,
          o = n.start,
          c = n.immediate,
          u = n.renderType,
          s = n.verbose,
          l = n.actionItem,
          d = n.destination,
          f = n.destinationKeys,
          p = n.pluginDuration,
          g = n.instanceDelay,
          I = n.customEasingFn,
          m = n.skipMotion,
          T = l.config.easing,
          h = l.config,
          _ = h.duration,
          b = h.delay;
        null != p && (_ = p),
          (b = null != g ? g : b),
          u === y ? (_ = 0) : (c || m) && (_ = b = 0);
        var O = t.payload.now;
        if (i && a) {
          var R = O - (o + b);
          if (s) {
            var A = O - o,
              S = _ + b,
              L = v(Math.min(Math.max(0, A / S), 1));
            e = (0, r.set)(e, "verboseTimeElapsed", S * L);
          }
          if (R < 0) return e;
          var N = v(Math.min(Math.max(0, R / _), 1)),
            w = E(T, N, I),
            C = {},
            x = null;
          return (
            f.length &&
              (x = f.reduce(function (e, t) {
                var n = d[t],
                  i = parseFloat(a[t]) || 0,
                  r = parseFloat(n) - i,
                  o = r * w + i;
                return (e[t] = o), e;
              }, {})),
            (C.current = x),
            (C.position = N),
            1 === N && ((C.active = !1), (C.complete = !0)),
            (0, r.merge)(e, C)
          );
        }
        return e;
      },
      O = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Object.freeze({}),
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case c:
            return t.payload.ixInstances || Object.freeze({});
          case u:
            return Object.freeze({});
          case s:
            var n = t.payload,
              i = n.instanceId,
              a = n.elementId,
              o = n.actionItem,
              p = n.eventId,
              v = n.eventTarget,
              E = n.eventStateKey,
              y = n.actionListId,
              I = n.groupIndex,
              m = n.isCarrier,
              O = n.origin,
              R = n.destination,
              A = n.immediate,
              S = n.verbose,
              L = n.continuous,
              N = n.parameterId,
              w = n.actionGroups,
              C = n.smoothing,
              x = n.restingValue,
              M = n.pluginInstance,
              P = n.pluginDuration,
              D = n.instanceDelay,
              V = n.skipMotion,
              k = n.skipToValue,
              G = o.actionTypeId,
              F = T(G),
              U = h(F, G),
              j = Object.keys(R).filter(function (e) {
                return null != R[e];
              }),
              X = o.config.easing;
            return (0, r.set)(e, i, {
              id: i,
              elementId: a,
              active: !1,
              position: 0,
              start: 0,
              origin: O,
              destination: R,
              destinationKeys: j,
              immediate: A,
              verbose: S,
              current: null,
              actionItem: o,
              actionTypeId: G,
              eventId: p,
              eventTarget: v,
              eventStateKey: E,
              actionListId: y,
              groupIndex: I,
              renderType: F,
              isCarrier: m,
              styleProp: U,
              continuous: L,
              parameterId: N,
              actionGroups: w,
              smoothing: C,
              restingValue: x,
              pluginInstance: M,
              pluginDuration: P,
              instanceDelay: D,
              skipMotion: V,
              skipToValue: k,
              customEasingFn:
                Array.isArray(X) && 4 === X.length ? g(X) : void 0,
            });
          case l:
            var B = t.payload,
              W = B.instanceId,
              H = B.time;
            return (0, r.mergeIn)(e, [W], {
              active: !0,
              complete: !1,
              start: H,
            });
          case d:
            var Q = t.payload.instanceId;
            if (!e[Q]) return e;
            for (
              var z = {}, Y = Object.keys(e), K = Y.length, q = 0;
              q < K;
              q++
            ) {
              var $ = Y[q];
              $ !== Q && (z[$] = e[$]);
            }
            return z;
          case f:
            for (
              var Z = e, J = Object.keys(e), ee = J.length, te = 0;
              te < ee;
              te++
            ) {
              var ne = J[te],
                ie = e[ne],
                ae = ie.continuous ? _ : b;
              Z = (0, r.set)(Z, ne, ae(ie, t));
            }
            return Z;
          default:
            return e;
        }
      };
    t.ixInstances = O;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ixParameters = void 0);
    var i = n(4),
      a = i.IX2EngineActionTypes,
      r = a.IX2_RAW_DATA_IMPORTED,
      o = a.IX2_SESSION_STOPPED,
      c = a.IX2_PARAMETER_CHANGED,
      u = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case r:
            return t.payload.ixParameters || {};
          case o:
            return {};
          case c:
            var n = t.payload,
              i = n.key,
              a = n.value;
            return (e[i] = a), e;
          default:
            return e;
        }
      };
    t.ixParameters = u;
  },
  function (e, t) {
    function n(e, t) {
      if (null == e) return {};
      var n,
        i,
        a = {},
        r = Object.keys(e);
      for (i = 0; i < r.length; i++)
        (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e) {
      if (null == e) return 0;
      if (o(e)) return c(e) ? u(e) : e.length;
      var t = r(e);
      return t == s || t == l ? e.size : a(e).length;
    }
    var a = n(57),
      r = n(59),
      o = n(16),
      c = n(284),
      u = n(285),
      s = "[object Map]",
      l = "[object Set]";
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      return "string" == typeof e || (!r(e) && o(e) && a(e) == c);
    }
    var a = n(15),
      r = n(2),
      o = n(12),
      c = "[object String]";
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      return r(e) ? o(e) : a(e);
    }
    var a = n(286),
      r = n(287),
      o = n(288);
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(113),
      a = i("length");
    e.exports = a;
  },
  function (e, t) {
    function n(e) {
      return l.test(e);
    }
    var i = "\\ud800-\\udfff",
      a = "\\u0300-\\u036f",
      r = "\\ufe20-\\ufe2f",
      o = "\\u20d0-\\u20ff",
      c = a + r + o,
      u = "\\ufe0e\\ufe0f",
      s = "\\u200d",
      l = RegExp("[" + s + i + c + u + "]");
    e.exports = n;
  },
  function (e, t) {
    function n(e) {
      for (var t = (_.lastIndex = 0); _.test(e); ) ++t;
      return t;
    }
    var i = "\\ud800-\\udfff",
      a = "\\u0300-\\u036f",
      r = "\\ufe20-\\ufe2f",
      o = "\\u20d0-\\u20ff",
      c = a + r + o,
      u = "\\ufe0e\\ufe0f",
      s = "[" + i + "]",
      l = "[" + c + "]",
      d = "\\ud83c[\\udffb-\\udfff]",
      f = "(?:" + l + "|" + d + ")",
      p = "[^" + i + "]",
      v = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      E = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      g = "\\u200d",
      y = f + "?",
      I = "[" + u + "]?",
      m = "(?:" + g + "(?:" + [p, v, E].join("|") + ")" + I + y + ")*",
      T = I + y + m,
      h = "(?:" + [p + l + "?", l, v, E, s].join("|") + ")",
      _ = RegExp(d + "(?=" + d + ")|" + h + T, "g");
    e.exports = n;
  },
  function (e, t, n) {
    function i(e, t) {
      return o(e, r(a(t)));
    }
    var a = n(10),
      r = n(290),
      o = n(291);
    e.exports = i;
  },
  function (e, t) {
    function n(e) {
      if ("function" != typeof e) throw new TypeError(i);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    var i = "Expected a function";
    e.exports = n;
  },
  function (e, t, n) {
    function i(e, t) {
      if (null == e) return {};
      var n = a(c(e), function (e) {
        return [e];
      });
      return (
        (t = r(t)),
        o(e, n, function (e, n) {
          return t(e, n[0]);
        })
      );
    }
    var a = n(112),
      r = n(10),
      o = n(292),
      c = n(295);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t, n) {
      for (var i = -1, c = t.length, u = {}; ++i < c; ) {
        var s = t[i],
          l = a(e, s);
        n(l, s) && r(u, o(s, e), l);
      }
      return u;
    }
    var a = n(61),
      r = n(293),
      o = n(38);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t, n, i) {
      if (!c(e)) return e;
      t = r(t, e);
      for (var s = -1, l = t.length, d = l - 1, f = e; null != f && ++s < l; ) {
        var p = u(t[s]),
          v = n;
        if ("__proto__" === p || "constructor" === p || "prototype" === p)
          return e;
        if (s != d) {
          var E = f[p];
          (v = i ? i(E, p, f) : void 0),
            void 0 === v && (v = c(E) ? E : o(t[s + 1]) ? [] : {});
        }
        a(f, p, v), (f = f[p]);
      }
      return e;
    }
    var a = n(294),
      r = n(38),
      o = n(54),
      c = n(8),
      u = n(24);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t, n) {
      var i = e[t];
      (c.call(e, t) && r(i, n) && (void 0 !== n || t in e)) || a(e, t, n);
    }
    var a = n(124),
      r = n(49),
      o = Object.prototype,
      c = o.hasOwnProperty;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      return a(e, o, r);
    }
    var a = n(103),
      r = n(296),
      o = n(298);
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(52),
      a = n(297),
      r = n(104),
      o = n(105),
      c = Object.getOwnPropertySymbols,
      u = c
        ? function (e) {
            for (var t = []; e; ) i(t, r(e)), (e = a(e));
            return t;
          }
        : o;
    e.exports = u;
  },
  function (e, t, n) {
    var i = n(108),
      a = i(Object.getPrototypeOf, Object);
    e.exports = a;
  },
  function (e, t, n) {
    function i(e) {
      return o(e) ? a(e, !0) : r(e);
    }
    var a = n(106),
      r = n(299),
      o = n(16);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      if (!a(e)) return o(e);
      var t = r(e),
        n = [];
      for (var i in e)
        ("constructor" != i || (!t && u.call(e, i))) && n.push(i);
      return n;
    }
    var a = n(8),
      r = n(58),
      o = n(300),
      c = Object.prototype,
      u = c.hasOwnProperty;
    e.exports = i;
  },
  function (e, t) {
    function n(e) {
      var t = [];
      if (null != e) for (var n in Object(e)) t.push(n);
      return t;
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e) {
      if (null == e) return !0;
      if (
        u(e) &&
        (c(e) ||
          "string" == typeof e ||
          "function" == typeof e.splice ||
          s(e) ||
          d(e) ||
          o(e))
      )
        return !e.length;
      var t = r(e);
      if (t == f || t == p) return !e.size;
      if (l(e)) return !a(e).length;
      for (var n in e) if (E.call(e, n)) return !1;
      return !0;
    }
    var a = n(57),
      r = n(59),
      o = n(37),
      c = n(2),
      u = n(16),
      s = n(53),
      l = n(58),
      d = n(55),
      f = "[object Map]",
      p = "[object Set]",
      v = Object.prototype,
      E = v.hasOwnProperty;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t) {
      var n = {};
      return (
        (t = o(t, 3)),
        r(e, function (e, i, r) {
          a(n, i, t(e, i, r));
        }),
        n
      );
    }
    var a = n(124),
      r = n(122),
      o = n(10);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t) {
      var n = c(e) ? a : r;
      return n(e, o(t));
    }
    var a = n(304),
      r = n(121),
      o = n(305),
      c = n(2);
    e.exports = i;
  },
  function (e, t) {
    function n(e, t) {
      for (
        var n = -1, i = null == e ? 0 : e.length;
        ++n < i && !1 !== t(e[n], n, e);

      );
      return e;
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e) {
      return "function" == typeof e ? e : a;
    }
    var a = n(63);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t, n) {
      var i = !0,
        c = !0;
      if ("function" != typeof e) throw new TypeError(o);
      return (
        r(n) &&
          ((i = "leading" in n ? !!n.leading : i),
          (c = "trailing" in n ? !!n.trailing : c)),
        a(e, t, { leading: i, maxWait: t, trailing: c })
      );
    }
    var a = n(307),
      r = n(8),
      o = "Expected a function";
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t, n) {
      function i(t) {
        var n = I,
          i = m;
        return (I = m = void 0), (O = t), (h = e.apply(i, n)), h;
      }
      function l(e) {
        return (O = e), (_ = setTimeout(p, t)), R ? i(e) : h;
      }
      function d(e) {
        var n = e - b,
          i = e - O,
          a = t - n;
        return A ? s(a, T - i) : a;
      }
      function f(e) {
        var n = e - b,
          i = e - O;
        return void 0 === b || n >= t || n < 0 || (A && i >= T);
      }
      function p() {
        var e = r();
        if (f(e)) return v(e);
        _ = setTimeout(p, d(e));
      }
      function v(e) {
        return (_ = void 0), S && I ? i(e) : ((I = m = void 0), h);
      }
      function E() {
        void 0 !== _ && clearTimeout(_), (O = 0), (I = b = m = _ = void 0);
      }
      function g() {
        return void 0 === _ ? h : v(r());
      }
      function y() {
        var e = r(),
          n = f(e);
        if (((I = arguments), (m = this), (b = e), n)) {
          if (void 0 === _) return l(b);
          if (A) return clearTimeout(_), (_ = setTimeout(p, t)), i(b);
        }
        return void 0 === _ && (_ = setTimeout(p, t)), h;
      }
      var I,
        m,
        T,
        h,
        _,
        b,
        O = 0,
        R = !1,
        A = !1,
        S = !0;
      if ("function" != typeof e) throw new TypeError(c);
      return (
        (t = o(t) || 0),
        a(n) &&
          ((R = !!n.leading),
          (A = "maxWait" in n),
          (T = A ? u(o(n.maxWait) || 0, t) : T),
          (S = "trailing" in n ? !!n.trailing : S)),
        (y.cancel = E),
        (y.flush = g),
        y
      );
    }
    var a = n(8),
      r = n(308),
      o = n(64),
      c = "Expected a function",
      u = Math.max,
      s = Math.min;
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(6),
      a = function () {
        return i.Date.now();
      };
    e.exports = a;
  },
  function (e, t, n) {
    "use strict";
    function i(e, t, n) {
      e.style[t] = n;
    }
    function a(e, t) {
      return e.style[t];
    }
    function r(e, t) {
      return e[t];
    }
    function o(e) {
      return function (t) {
        return t[m](e);
      };
    }
    function c(e) {
      var t = e.id,
        n = e.selector;
      if (t) {
        var i = t;
        if (-1 !== t.indexOf(h)) {
          var a = t.split(h),
            r = a[0];
          if (((i = a[1]), r !== document.documentElement.getAttribute(O)))
            return null;
        }
        return '[data-w-id="'
          .concat(i, '"], [data-w-id^="')
          .concat(i, '_instance"]');
      }
      return n;
    }
    function u(e) {
      return null == e || e === document.documentElement.getAttribute(O)
        ? document
        : null;
    }
    function s(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function l(e, t) {
      return e.contains(t);
    }
    function d(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function f(e) {
      for (var t = [], n = 0, i = e || [], a = i.length; n < a; n++) {
        var r = e[n].children,
          o = r.length;
        if (o) for (var c = 0; c < o; c++) t.push(r[c]);
      }
      return t;
    }
    function p() {
      for (
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = [],
          n = [],
          i = 0,
          a = e.length;
        i < a;
        i++
      ) {
        var r = e[i].parentNode;
        if (r && r.children && r.children.length && -1 === n.indexOf(r)) {
          n.push(r);
          for (var o = r.firstElementChild; null != o; )
            -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
        }
      }
      return t;
    }
    function v(e) {
      return null != e && "object" == (0, g.default)(e)
        ? e instanceof Element
          ? _
          : b
        : null;
    }
    var E = n(1),
      g = E(n(17));
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.setStyle = i),
      (t.getStyle = a),
      (t.getProperty = r),
      (t.matchSelector = o),
      (t.getQuerySelector = c),
      (t.getValidDocument = u),
      (t.queryDocument = s),
      (t.elementContains = l),
      (t.isSiblingNode = d),
      (t.getChildElements = f),
      (t.getSiblingElements = p),
      (t.getRefType = v),
      (t.getClosestElement = void 0);
    var y = n(14),
      I = n(4),
      m = y.IX2BrowserSupport.ELEMENT_MATCHES,
      T = I.IX2EngineConstants,
      h = T.IX2_ID_DELIMITER,
      _ = T.HTML_ELEMENT,
      b = T.PLAIN_OBJECT,
      O = T.WF_PAGE,
      R = Element.prototype.closest
        ? function (e, t) {
            return document.documentElement.contains(e) ? e.closest(t) : null;
          }
        : function (e, t) {
            if (!document.documentElement.contains(e)) return null;
            var n = e;
            do {
              if (n[m] && n[m](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
    t.getClosestElement = R;
  },
  function (e, t, n) {
    "use strict";
    var i,
      a = n(1),
      r = a(n(21)),
      o = a(n(17)),
      c = n(1);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var u,
      s,
      l,
      d = c(n(31)),
      f = c(n(311)),
      p = c(n(60)),
      v = c(n(330)),
      E = n(4),
      g = n(123),
      y = n(65),
      I = n(14),
      m = E.EventTypeConsts,
      T = m.MOUSE_CLICK,
      h = m.MOUSE_SECOND_CLICK,
      _ = m.MOUSE_DOWN,
      b = m.MOUSE_UP,
      O = m.MOUSE_OVER,
      R = m.MOUSE_OUT,
      A = m.DROPDOWN_CLOSE,
      S = m.DROPDOWN_OPEN,
      L = m.SLIDER_ACTIVE,
      N = m.SLIDER_INACTIVE,
      w = m.TAB_ACTIVE,
      C = m.TAB_INACTIVE,
      x = m.NAVBAR_CLOSE,
      M = m.NAVBAR_OPEN,
      P = m.MOUSE_MOVE,
      D = m.PAGE_SCROLL_DOWN,
      V = m.SCROLL_INTO_VIEW,
      k = m.SCROLL_OUT_OF_VIEW,
      G = m.PAGE_SCROLL_UP,
      F = m.SCROLLING_IN_VIEW,
      U = m.PAGE_FINISH,
      j = m.ECOMMERCE_CART_CLOSE,
      X = m.ECOMMERCE_CART_OPEN,
      B = m.PAGE_START,
      W = m.PAGE_SCROLL,
      H = "COMPONENT_ACTIVE",
      Q = "COMPONENT_INACTIVE",
      z = E.IX2EngineConstants.COLON_DELIMITER,
      Y = I.IX2VanillaUtils.getNamespacedParameterId,
      K = function (e) {
        return function (t) {
          return !("object" !== (0, o.default)(t) || !e(t)) || t;
        };
      },
      q = K(function (e) {
        var t = e.element,
          n = e.nativeEvent;
        return t === n.target;
      }),
      $ = K(function (e) {
        var t = e.element,
          n = e.nativeEvent;
        return t.contains(n.target);
      }),
      Z = (0, f.default)([q, $]),
      J = function (e, t) {
        if (t) {
          var n = e.getState(),
            i = n.ixData,
            a = i.events,
            r = a[t];
          if (r && !ue[r.eventTypeId]) return r;
        }
        return null;
      },
      ee = function (e) {
        var t = e.store,
          n = e.event,
          i = n.action,
          a = i.config.autoStopEventId;
        return Boolean(J(t, a));
      },
      te = function (e, t) {
        var n = e.store,
          i = e.event,
          a = e.element,
          r = e.eventStateKey,
          o = i.action,
          c = i.id,
          u = o.config,
          s = u.actionListId,
          l = u.autoStopEventId,
          d = J(n, l);
        return (
          d &&
            (0, g.stopActionGroup)({
              store: n,
              eventId: l,
              eventTarget: a,
              eventStateKey: l + z + r.split(z)[1],
              actionListId: (0, p.default)(d, "action.config.actionListId"),
            }),
          (0, g.stopActionGroup)({
            store: n,
            eventId: c,
            eventTarget: a,
            eventStateKey: r,
            actionListId: s,
          }),
          (0, g.startActionGroup)({
            store: n,
            eventId: c,
            eventTarget: a,
            eventStateKey: r,
            actionListId: s,
          }),
          t
        );
      },
      ne = function (e, t) {
        return function (n, i) {
          return !0 === e(n, i) ? t(n, i) : i;
        };
      },
      ie = { handler: ne(Z, te) },
      ae = (0, d.default)({}, ie, { types: [H, Q].join(" ") }),
      re = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      oe = "mouseover mouseout",
      ce = { types: re },
      ue = { PAGE_START: B, PAGE_FINISH: U },
      se =
        ((u = void 0 !== window.pageXOffset),
        (s = "CSS1Compat" === document.compatMode),
        (l = s ? document.documentElement : document.body),
        function () {
          return {
            scrollLeft: u ? window.pageXOffset : l.scrollLeft,
            scrollTop: u ? window.pageYOffset : l.scrollTop,
            stiffScrollTop: (0, v.default)(
              u ? window.pageYOffset : l.scrollTop,
              0,
              l.scrollHeight - window.innerHeight
            ),
            scrollWidth: l.scrollWidth,
            scrollHeight: l.scrollHeight,
            clientWidth: l.clientWidth,
            clientHeight: l.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          };
        }),
      le = function (e, t) {
        return !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        );
      },
      de = function (e) {
        var t = e.element,
          n = e.nativeEvent,
          i = n.type,
          a = n.target,
          r = n.relatedTarget,
          o = t.contains(a);
        if ("mouseover" === i && o) return !0;
        var c = t.contains(r);
        return !("mouseout" !== i || !o || !c);
      },
      fe = function (e) {
        var t = e.element,
          n = e.event.config,
          i = se(),
          a = i.clientWidth,
          r = i.clientHeight,
          o = n.scrollOffsetValue,
          c = n.scrollOffsetUnit,
          u = "PX" === c,
          s = u ? o : (r * (o || 0)) / 100;
        return le(t.getBoundingClientRect(), {
          left: 0,
          top: s,
          right: a,
          bottom: r - s,
        });
      },
      pe = function (e) {
        return function (t, n) {
          var i = t.nativeEvent.type,
            a = -1 !== [H, Q].indexOf(i) ? i === H : n.isActive,
            r = (0, d.default)({}, n, { isActive: a });
          return n && r.isActive === n.isActive ? r : e(t, r) || r;
        };
      },
      ve = function (e) {
        return function (t, n) {
          var i = { elementHovered: de(t) };
          return (
            ((n ? i.elementHovered !== n.elementHovered : i.elementHovered) &&
              e(t, i)) ||
            i
          );
        };
      },
      Ee = function (e) {
        return function (t, n) {
          var i = (0, d.default)({}, n, { elementVisible: fe(t) });
          return (
            ((n ? i.elementVisible !== n.elementVisible : i.elementVisible) &&
              e(t, i)) ||
            i
          );
        };
      },
      ge = function (e) {
        return function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = se(),
            a = i.stiffScrollTop,
            r = i.scrollHeight,
            o = i.innerHeight,
            c = t.event,
            u = c.config,
            s = c.eventTypeId,
            l = u.scrollOffsetValue,
            f = u.scrollOffsetUnit,
            p = "PX" === f,
            v = r - o,
            E = Number((a / v).toFixed(2));
          if (n && n.percentTop === E) return n;
          var g,
            y,
            I = (p ? l : (o * (l || 0)) / 100) / v,
            m = 0;
          n &&
            ((g = E > n.percentTop),
            (y = n.scrollingDown !== g),
            (m = y ? E : n.anchorTop));
          var T = s === D ? E >= m + I : E <= m - I,
            h = (0, d.default)({}, n, {
              percentTop: E,
              inBounds: T,
              anchorTop: m,
              scrollingDown: g,
            });
          return (n && T && (y || h.inBounds !== n.inBounds) && e(t, h)) || h;
        };
      },
      ye = function (e, t) {
        return (
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom
        );
      },
      Ie = function (e) {
        return function (t, n) {
          var i = { finished: "complete" === document.readyState };
          return !i.finished || (n && n.finshed) || e(t), i;
        };
      },
      me = function (e) {
        return function (t, n) {
          var i = { started: !0 };
          return n || e(t), i;
        };
      },
      Te = function (e) {
        return function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { clickCount: 0 },
            i = { clickCount: (n.clickCount % 2) + 1 };
          return (i.clickCount !== n.clickCount && e(t, i)) || i;
        };
      },
      he = function () {
        var e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (0, d.default)({}, ae, {
          handler: ne(
            e ? Z : q,
            pe(function (e, t) {
              return t.isActive ? ie.handler(e, t) : t;
            })
          ),
        });
      },
      _e = function () {
        var e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (0, d.default)({}, ae, {
          handler: ne(
            e ? Z : q,
            pe(function (e, t) {
              return t.isActive ? t : ie.handler(e, t);
            })
          ),
        });
      },
      be = (0, d.default)({}, ce, {
        handler: Ee(function (e, t) {
          var n = t.elementVisible,
            i = e.event,
            a = e.store,
            r = a.getState(),
            o = r.ixData,
            c = o.events;
          return !c[i.action.config.autoStopEventId] && t.triggered
            ? t
            : (i.eventTypeId === V) === n
            ? (te(e), (0, d.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      Oe = 0.05,
      Re =
        ((i = {}),
        (0, r.default)(i, L, he()),
        (0, r.default)(i, N, _e()),
        (0, r.default)(i, S, he()),
        (0, r.default)(i, A, _e()),
        (0, r.default)(i, M, he(!1)),
        (0, r.default)(i, x, _e(!1)),
        (0, r.default)(i, w, he()),
        (0, r.default)(i, C, _e()),
        (0, r.default)(i, X, {
          types: "ecommerce-cart-open",
          handler: ne(Z, te),
        }),
        (0, r.default)(i, j, {
          types: "ecommerce-cart-close",
          handler: ne(Z, te),
        }),
        (0, r.default)(i, T, {
          types: "click",
          handler: ne(
            Z,
            Te(function (e, t) {
              var n = t.clickCount;
              ee(e) ? 1 === n && te(e) : te(e);
            })
          ),
        }),
        (0, r.default)(i, h, {
          types: "click",
          handler: ne(
            Z,
            Te(function (e, t) {
              var n = t.clickCount;
              2 === n && te(e);
            })
          ),
        }),
        (0, r.default)(i, _, (0, d.default)({}, ie, { types: "mousedown" })),
        (0, r.default)(i, b, (0, d.default)({}, ie, { types: "mouseup" })),
        (0, r.default)(i, O, {
          types: oe,
          handler: ne(
            Z,
            ve(function (e, t) {
              t.elementHovered && te(e);
            })
          ),
        }),
        (0, r.default)(i, R, {
          types: oe,
          handler: ne(
            Z,
            ve(function (e, t) {
              t.elementHovered || te(e);
            })
          ),
        }),
        (0, r.default)(i, P, {
          types: "mousemove mouseout scroll",
          handler: function (e) {
            var t = e.store,
              n = e.element,
              i = e.eventConfig,
              a = e.nativeEvent,
              r = e.eventStateKey,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
              c = i.basedOn,
              u = i.selectedAxis,
              s = i.continuousParameterGroupId,
              l = i.reverse,
              d = i.restingState,
              f = void 0 === d ? 0 : d,
              p = a.clientX,
              v = void 0 === p ? o.clientX : p,
              g = a.clientY,
              I = void 0 === g ? o.clientY : g,
              m = a.pageX,
              T = void 0 === m ? o.pageX : m,
              h = a.pageY,
              _ = void 0 === h ? o.pageY : h,
              b = "X_AXIS" === u,
              O = "mouseout" === a.type,
              R = f / 100,
              A = s,
              S = !1;
            switch (c) {
              case E.EventBasedOn.VIEWPORT:
                R = b
                  ? Math.min(v, window.innerWidth) / window.innerWidth
                  : Math.min(I, window.innerHeight) / window.innerHeight;
                break;
              case E.EventBasedOn.PAGE:
                var L = se(),
                  N = L.scrollLeft,
                  w = L.scrollTop,
                  C = L.scrollWidth,
                  x = L.scrollHeight;
                R = b ? Math.min(N + T, C) / C : Math.min(w + _, x) / x;
                break;
              case E.EventBasedOn.ELEMENT:
              default:
                A = Y(r, s);
                var M = 0 === a.type.indexOf("mouse");
                if (M && !0 !== Z({ element: n, nativeEvent: a })) break;
                var P = n.getBoundingClientRect(),
                  D = P.left,
                  V = P.top,
                  k = P.width,
                  G = P.height;
                if (!M && !ye({ left: v, top: I }, P)) break;
                (S = !0), (R = b ? (v - D) / k : (I - V) / G);
            }
            return (
              O && (R > 1 - Oe || R < Oe) && (R = Math.round(R)),
              (c !== E.EventBasedOn.ELEMENT || S || S !== o.elementHovered) &&
                ((R = l ? 1 - R : R),
                t.dispatch((0, y.parameterChanged)(A, R))),
              { elementHovered: S, clientX: v, clientY: I, pageX: T, pageY: _ }
            );
          },
        }),
        (0, r.default)(i, W, {
          types: re,
          handler: function (e) {
            var t = e.store,
              n = e.eventConfig,
              i = n.continuousParameterGroupId,
              a = n.reverse,
              r = se(),
              o = r.scrollTop,
              c = r.scrollHeight,
              u = r.clientHeight,
              s = o / (c - u);
            (s = a ? 1 - s : s), t.dispatch((0, y.parameterChanged)(i, s));
          },
        }),
        (0, r.default)(i, F, {
          types: re,
          handler: function (e) {
            var t = e.element,
              n = e.store,
              i = e.eventConfig,
              a = e.eventStateKey,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { scrollPercent: 0 },
              o = se(),
              c = o.scrollLeft,
              u = o.scrollTop,
              s = o.scrollWidth,
              l = o.scrollHeight,
              d = o.clientHeight,
              f = i.basedOn,
              p = i.selectedAxis,
              v = i.continuousParameterGroupId,
              g = i.startsEntering,
              I = i.startsExiting,
              m = i.addEndOffset,
              T = i.addStartOffset,
              h = i.addOffsetValue,
              _ = void 0 === h ? 0 : h,
              b = i.endOffsetValue,
              O = void 0 === b ? 0 : b,
              R = "X_AXIS" === p;
            if (f === E.EventBasedOn.VIEWPORT) {
              var A = R ? c / s : u / l;
              return (
                A !== r.scrollPercent &&
                  n.dispatch((0, y.parameterChanged)(v, A)),
                { scrollPercent: A }
              );
            }
            var S = Y(a, v),
              L = t.getBoundingClientRect(),
              N = (T ? _ : 0) / 100,
              w = (m ? O : 0) / 100;
            (N = g ? N : 1 - N), (w = I ? w : 1 - w);
            var C = L.top + Math.min(L.height * N, d),
              x = L.top + L.height * w,
              M = x - C,
              P = Math.min(d + M, l),
              D = Math.min(Math.max(0, d - C), P),
              V = D / P;
            return (
              V !== r.scrollPercent &&
                n.dispatch((0, y.parameterChanged)(S, V)),
              { scrollPercent: V }
            );
          },
        }),
        (0, r.default)(i, V, be),
        (0, r.default)(i, k, be),
        (0, r.default)(
          i,
          D,
          (0, d.default)({}, ce, {
            handler: ge(function (e, t) {
              t.scrollingDown && te(e);
            }),
          })
        ),
        (0, r.default)(
          i,
          G,
          (0, d.default)({}, ce, {
            handler: ge(function (e, t) {
              t.scrollingDown || te(e);
            }),
          })
        ),
        (0, r.default)(i, U, {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: ne(q, Ie(te)),
        }),
        (0, r.default)(i, B, {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: ne(q, me(te)),
        }),
        i);
    t.default = Re;
  },
  function (e, t, n) {
    var i = n(312),
      a = i();
    e.exports = a;
  },
  function (e, t, n) {
    function i(e) {
      return r(function (t) {
        var n = t.length,
          i = n,
          r = a.prototype.thru;
        for (e && t.reverse(); i--; ) {
          var E = t[i];
          if ("function" != typeof E) throw new TypeError(l);
          if (r && !g && "wrapper" == c(E)) var g = new a([], !0);
        }
        for (i = g ? i : n; ++i < n; ) {
          E = t[i];
          var y = c(E),
            I = "wrapper" == y ? o(E) : void 0;
          g =
            I && s(I[0]) && I[1] == (p | d | f | v) && !I[4].length && 1 == I[9]
              ? g[c(I[0])].apply(g, I[3])
              : 1 == E.length && s(E)
              ? g[y]()
              : g.thru(E);
        }
        return function () {
          var e = arguments,
            i = e[0];
          if (g && 1 == e.length && u(i)) return g.plant(i).value();
          for (var a = 0, r = n ? t[a].apply(this, e) : i; ++a < n; )
            r = t[a].call(this, r);
          return r;
        };
      });
    }
    var a = n(66),
      r = n(313),
      o = n(127),
      c = n(128),
      u = n(2),
      s = n(326),
      l = "Expected a function",
      d = 8,
      f = 32,
      p = 128,
      v = 256;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      return o(r(e, void 0, a), e + "");
    }
    var a = n(314),
      r = n(317),
      o = n(319);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      var t = null == e ? 0 : e.length;
      return t ? a(e, 1) : [];
    }
    var a = n(315);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t, n, o, c) {
      var u = -1,
        s = e.length;
      for (n || (n = r), c || (c = []); ++u < s; ) {
        var l = e[u];
        t > 0 && n(l)
          ? t > 1
            ? i(l, t - 1, n, o, c)
            : a(c, l)
          : o || (c[c.length] = l);
      }
      return c;
    }
    var a = n(52),
      r = n(316);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      return o(e) || r(e) || !!(c && e && e[c]);
    }
    var a = n(23),
      r = n(37),
      o = n(2),
      c = a ? a.isConcatSpreadable : void 0;
    e.exports = i;
  },
  function (e, t, n) {
    function i(e, t, n) {
      return (
        (t = r(void 0 === t ? e.length - 1 : t, 0)),
        function () {
          for (
            var i = arguments, o = -1, c = r(i.length - t, 0), u = Array(c);
            ++o < c;

          )
            u[o] = i[t + o];
          o = -1;
          for (var s = Array(t + 1); ++o < t; ) s[o] = i[o];
          return (s[t] = n(u)), a(e, this, s);
        }
      );
    }
    var a = n(318),
      r = Math.max;
    e.exports = i;
  },
  function (e, t) {
    function n(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    e.exports = n;
  },
  function (e, t, n) {
    var i = n(320),
      a = n(322),
      r = a(i);
    e.exports = r;
  },
  function (e, t, n) {
    var i = n(321),
      a = n(125),
      r = n(63),
      o = a
        ? function (e, t) {
            return a(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: i(t),
              writable: !0,
            });
          }
        : r;
    e.exports = o;
  },
  function (e, t) {
    function n(e) {
      return function () {
        return e;
      };
    }
    e.exports = n;
  },
  function (e, t) {
    function n(e) {
      var t = 0,
        n = 0;
      return function () {
        var o = r(),
          c = a - (o - n);
        if (((n = o), c > 0)) {
          if (++t >= i) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    var i = 800,
      a = 16,
      r = Date.now;
    e.exports = n;
  },
  function (e, t, n) {
    var i = n(109),
      a = i && new i();
    e.exports = a;
  },
  function (e, t) {
    function n() {}
    e.exports = n;
  },
  function (e, t) {
    var n = {};
    e.exports = n;
  },
  function (e, t, n) {
    function i(e) {
      var t = o(e),
        n = c[t];
      if ("function" != typeof n || !(t in a.prototype)) return !1;
      if (e === n) return !0;
      var i = r(n);
      return !!i && e === i[0];
    }
    var a = n(68),
      r = n(127),
      o = n(128),
      c = n(327);
    e.exports = i;
  },
  function (e, t, n) {
    function i(e) {
      if (u(e) && !c(e) && !(e instanceof a)) {
        if (e instanceof r) return e;
        if (d.call(e, "__wrapped__")) return s(e);
      }
      return new r(e);
    }
    var a = n(68),
      r = n(66),
      o = n(67),
      c = n(2),
      u = n(12),
      s = n(328),
      l = Object.prototype,
      d = l.hasOwnProperty;
    (i.prototype = o.prototype), (i.prototype.constructor = i), (e.exports = i);
  },
  function (e, t, n) {
    function i(e) {
      if (e instanceof a) return e.clone();
      var t = new r(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = o(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    var a = n(68),
      r = n(66),
      o = n(329);
    e.exports = i;
  },
  function (e, t) {
    function n(e, t) {
      var n = -1,
        i = e.length;
      for (t || (t = Array(i)); ++n < i; ) t[n] = e[n];
      return t;
    }
    e.exports = n;
  },
  function (e, t, n) {
    function i(e, t, n) {
      return (
        void 0 === n && ((n = t), (t = void 0)),
        void 0 !== n && ((n = r(n)), (n = n == n ? n : 0)),
        void 0 !== t && ((t = r(t)), (t = t == t ? t : 0)),
        a(r(e), t, n)
      );
    }
    var a = n(331),
      r = n(64);
    e.exports = i;
  },
  function (e, t) {
    function n(e, t, n) {
      return (
        e == e &&
          (void 0 !== n && (e = e <= n ? e : n),
          void 0 !== t && (e = e >= t ? e : t)),
        e
      );
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    var i = n(3);
    i.define(
      "links",
      (e.exports = function (e, t) {
        function n() {
          (c = f && i.env("design")),
            (s = i.env("slug") || p.pathname || ""),
            i.scroll.off(r),
            (u = []);
          for (var e = document.links, t = 0; t < e.length; ++t) a(e[t]);
          u.length && (i.scroll.on(r), r());
        }
        function a(t) {
          var n =
            (c && t.getAttribute("href-disabled")) || t.getAttribute("href");
          if (((v.href = n), !(n.indexOf(":") >= 0))) {
            var i = e(t);
            if (
              v.hash.length > 1 &&
              v.host + v.pathname === p.host + p.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(v.hash)) return;
              var a = e(v.hash);
              a.length && u.push({ link: i, sec: a, active: !1 });
            } else if ("#" !== n && "" !== n) {
              var r = v.href === p.href || n === s || (g.test(n) && y.test(s));
              o(i, E, r);
            }
          }
        }
        function r() {
          var e = d.scrollTop(),
            n = d.height();
          t.each(u, function (t) {
            var i = t.link,
              a = t.sec,
              r = a.offset().top,
              c = a.outerHeight(),
              u = 0.5 * n,
              s = a.is(":visible") && r + c - u >= e && r + u <= e + n;
            t.active !== s && ((t.active = s), o(i, E, s));
          });
        }
        function o(e, t, n) {
          var i = e.hasClass(t);
          (n && i) || ((n || i) && (n ? e.addClass(t) : e.removeClass(t)));
        }
        var c,
          u,
          s,
          l = {},
          d = e(window),
          f = i.env(),
          p = window.location,
          v = document.createElement("a"),
          E = "w--current",
          g = /index\.(html|php)$/,
          y = /\/$/;
        return (l.ready = l.design = l.preview = n), l;
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var i = n(3);
    i.define(
      "scroll",
      (e.exports = function (e) {
        function t() {
          try {
            return Boolean(window.frameElement);
          } catch (e) {
            return !0;
          }
        }
        function n(e) {
          return S.test(e.hash) && e.host + e.pathname === E.host + E.pathname;
        }
        function a() {
          return (
            "none" === document.body.getAttribute("data-wf-scroll-motion") ||
            L.matches
          );
        }
        function r(e, t) {
          var n;
          switch (t) {
            case "add":
              (n = e.attr("tabindex")),
                n
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
              break;
            case "remove":
              (n = e.attr("data-wf-tabindex-swap")),
                n
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
          }
          e.toggleClass("wf-force-outline-none", "add" === t);
        }
        function o(t) {
          var a = t.currentTarget;
          if (
            !(
              i.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))
            )
          ) {
            var o = n(a) ? a.hash : "";
            if ("" !== o) {
              var s = e(o);
              s.length &&
                (t && (t.preventDefault(), t.stopPropagation()),
                c(o, t),
                window.setTimeout(
                  function () {
                    u(s, function () {
                      r(s, "add"),
                        s.get(0).focus({ preventScroll: !0 }),
                        r(s, "remove");
                    });
                  },
                  t ? 0 : 300
                ));
            }
          }
        }
        function c(e) {
          if (
            E.hash !== e &&
            g &&
            g.pushState &&
            (!i.env.chrome || "file:" !== E.protocol)
          ) {
            var t = g.state && g.state.hash;
            t !== e && g.pushState({ hash: e }, "", e);
          }
        }
        function u(e, t) {
          var n = y.scrollTop(),
            i = s(e);
          if (n !== i) {
            var a = l(e, n, i),
              r = Date.now(),
              o = function e() {
                var o = Date.now() - r;
                window.scroll(0, d(n, i, o, a)),
                  o <= a ? T(e) : "function" == typeof t && t();
              };
            T(o);
          }
        }
        function s(t) {
          var n = e(_),
            i = "fixed" === n.css("position") ? n.outerHeight() : 0,
            a = t.offset().top - i;
          if ("mid" === t.data("scroll")) {
            var r = y.height() - i,
              o = t.outerHeight();
            o < r && (a -= Math.round((r - o) / 2));
          }
          return a;
        }
        function l(e, t, n) {
          if (a()) return 0;
          var i = 1;
          return (
            m.add(e).each(function (e, t) {
              var n = parseFloat(t.getAttribute("data-scroll-time"));
              !isNaN(n) && n >= 0 && (i = n);
            }),
            (472.143 * Math.log(Math.abs(t - n) + 125) - 2e3) * i
          );
        }
        function d(e, t, n, i) {
          return n > i ? t : e + (t - e) * f(n / i);
        }
        function f(e) {
          return e < 0.5
            ? 4 * e * e * e
            : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
        }
        function p() {
          var e = v.WF_CLICK_EMPTY,
            t = v.WF_CLICK_SCROLL;
          I.on(t, O, o),
            I.on(e, b, function (e) {
              e.preventDefault();
            }),
            document.head.insertBefore(A, document.head.firstChild);
        }
        var v = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          E = window.location,
          g = t() ? null : window.history,
          y = e(window),
          I = e(document),
          m = e(document.body),
          T =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (e) {
              window.setTimeout(e, 15);
            },
          h = i.env("editor") ? ".w-editor-body" : "body",
          _ =
            "header, " +
            h +
            " > .header, " +
            h +
            " > .w-nav:not([data-no-scroll])",
          b = 'a[href="#"]',
          O = 'a[href*="#"]:not(.w-tab-link):not(' + b + ")",
          R = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          A = document.createElement("style");
        A.appendChild(document.createTextNode(R));
        var S = /^#[a-zA-Z0-9][\w:.-]*$/,
          L =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
        return { ready: p };
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var i = n(3);
    i.define(
      "touch",
      (e.exports = function (e) {
        function t(e) {
          function t(e) {
            var t = e.touches;
            (t && t.length > 1) ||
              ((l = !0),
              t ? ((d = !0), (u = t[0].clientX)) : (u = e.clientX),
              (s = u));
          }
          function i(e) {
            if (l) {
              if (d && "mousemove" === e.type)
                return e.preventDefault(), void e.stopPropagation();
              var t = e.touches,
                i = t ? t[0].clientX : e.clientX,
                r = i - s;
              (s = i),
                Math.abs(r) > f &&
                  a &&
                  "" === String(a()) &&
                  (n("swipe", e, { direction: r > 0 ? "right" : "left" }), o());
            }
          }
          function r(e) {
            if (l)
              return (
                (l = !1),
                d && "mouseup" === e.type
                  ? (e.preventDefault(), e.stopPropagation(), void (d = !1))
                  : void 0
              );
          }
          function o() {
            l = !1;
          }
          function c() {
            e.removeEventListener("touchstart", t, !1),
              e.removeEventListener("touchmove", i, !1),
              e.removeEventListener("touchend", r, !1),
              e.removeEventListener("touchcancel", o, !1),
              e.removeEventListener("mousedown", t, !1),
              e.removeEventListener("mousemove", i, !1),
              e.removeEventListener("mouseup", r, !1),
              e.removeEventListener("mouseout", o, !1),
              (e = null);
          }
          var u,
            s,
            l = !1,
            d = !1,
            f = Math.min(Math.round(0.04 * window.innerWidth), 40);
          e.addEventListener("touchstart", t, !1),
            e.addEventListener("touchmove", i, !1),
            e.addEventListener("touchend", r, !1),
            e.addEventListener("touchcancel", o, !1),
            e.addEventListener("mousedown", t, !1),
            e.addEventListener("mousemove", i, !1),
            e.addEventListener("mouseup", r, !1),
            e.addEventListener("mouseout", o, !1),
            (this.destroy = c);
        }
        function n(t, n, i) {
          var a = e.Event(t, { originalEvent: n });
          e(n.target).trigger(a, i);
        }
        var i = {},
          a = window.getSelection;
        return (
          (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (i.init = function (n) {
            return (
              (n = "string" == typeof n ? e(n).get(0) : n), n ? new t(n) : null
            );
          }),
          (i.instance = i.init(document)),
          i
        );
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      a = n(25),
      r = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      o = !0,
      c = /^#[a-zA-Z0-9\-_]+$/;
    i.define(
      "dropdown",
      (e.exports = function (e, t) {
        function n() {
          (R = N && i.env("design")), (A = W.find(x)), A.each(u);
        }
        function u(t, n) {
          var i = e(n),
            a = e.data(n, x);
          a ||
            (a = e.data(n, x, {
              open: !1,
              el: i,
              config: {},
              selectedIdx: -1,
            })),
            (a.toggle = a.el.children(".w-dropdown-toggle")),
            (a.list = a.el.children(".w-dropdown-list")),
            (a.links = a.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (a.complete = y(a)),
            (a.mouseLeave = m(a)),
            (a.mouseUpOutside = g(a)),
            (a.mouseMoveOutside = T(a)),
            s(a);
          var r = a.toggle.attr("id"),
            u = a.list.attr("id");
          r || (r = "w-dropdown-toggle-" + t),
            u || (u = "w-dropdown-list-" + t),
            a.toggle.attr("id", r),
            a.toggle.attr("aria-controls", u),
            a.toggle.attr("aria-haspopup", "menu"),
            a.toggle.attr("aria-expanded", "false"),
            a.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            "BUTTON" !== a.toggle.prop("tagName") &&
              (a.toggle.attr("role", "button"),
              a.toggle.attr("tabindex") || a.toggle.attr("tabindex", "0")),
            a.list.attr("id", u),
            a.list.attr("aria-labelledby", r),
            a.links.each(function (e, t) {
              t.hasAttribute("tabindex") || t.setAttribute("tabindex", "0"),
                c.test(t.hash) && t.addEventListener("click", p.bind(null, a));
            }),
            a.el.off(x),
            a.toggle.off(x),
            a.nav && a.nav.off(x);
          var f = d(a, o);
          R && a.el.on(B, l(a)),
            R ||
              (N && ((a.hovering = !1), p(a)),
              a.config.hover && a.toggle.on(G, I(a)),
              a.el.on(X, f),
              a.el.on(k, h(a)),
              a.el.on(V, O(a)),
              a.toggle.on(j, f),
              a.toggle.on(k, b(a)),
              (a.nav = a.el.closest(".w-nav")),
              a.nav.on(X, f));
        }
        function s(e) {
          var t = Number(e.el.css("z-index"));
          (e.manageZ = t === D || t === D + 1),
            (e.config = {
              hover: "true" === e.el.attr("data-hover") && !C,
              delay: e.el.attr("data-delay"),
            });
        }
        function l(e) {
          return function (t, n) {
            (n = n || {}),
              s(e),
              !0 === n.open && f(e, !0),
              !1 === n.open && p(e, { immediate: !0 });
          };
        }
        function d(e, t) {
          return S(function (n) {
            if (e.open || (n && "w-close" === n.type))
              return p(e, { forceClose: t });
            f(e);
          });
        }
        function f(e) {
          if (!e.open) {
            E(e),
              (e.open = !0),
              e.list.addClass(M),
              e.toggle.addClass(M),
              e.toggle.attr("aria-expanded", "true"),
              P.intro(0, e.el[0]),
              i.redraw.up(),
              e.manageZ && e.el.css("z-index", D + 1);
            var t = i.env("editor");
            R || W.on(j, e.mouseUpOutside),
              e.hovering && !t && e.el.on(U, e.mouseLeave),
              e.hovering && t && W.on(F, e.mouseMoveOutside),
              window.clearTimeout(e.delayId);
          }
        }
        function p(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.immediate,
            i = t.forceClose;
          if (e.open && (!e.config.hover || !e.hovering || i)) {
            e.toggle.attr("aria-expanded", "false"), (e.open = !1);
            var a = e.config;
            if (
              (P.outro(0, e.el[0]),
              W.off(j, e.mouseUpOutside),
              W.off(F, e.mouseMoveOutside),
              e.el.off(U, e.mouseLeave),
              window.clearTimeout(e.delayId),
              !a.delay || n)
            )
              return e.complete();
            e.delayId = window.setTimeout(e.complete, a.delay);
          }
        }
        function v() {
          W.find(x).each(function (t, n) {
            e(n).triggerHandler(X);
          });
        }
        function E(t) {
          var n = t.el[0];
          A.each(function (t, i) {
            var a = e(i);
            a.is(n) || a.has(n).length || a.triggerHandler(X);
          });
        }
        function g(t) {
          return (
            t.mouseUpOutside && W.off(j, t.mouseUpOutside),
            S(function (n) {
              if (t.open) {
                var a = e(n.target);
                if (!a.closest(".w-dropdown-toggle").length) {
                  var r = -1 === e.inArray(t.el[0], a.parents(x)),
                    o = i.env("editor");
                  if (r) {
                    if (o) {
                      var c =
                          1 === a.parents().length &&
                          1 === a.parents("svg").length,
                        u = a.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (c || u) return;
                    }
                    p(t);
                  }
                }
              }
            })
          );
        }
        function y(e) {
          return function () {
            e.list.removeClass(M),
              e.toggle.removeClass(M),
              e.manageZ && e.el.css("z-index", "");
          };
        }
        function I(e) {
          return function () {
            (e.hovering = !0), f(e);
          };
        }
        function m(e) {
          return function () {
            (e.hovering = !1), e.links.is(":focus") || p(e);
          };
        }
        function T(t) {
          return S(function (n) {
            if (t.open) {
              var i = e(n.target),
                a = -1 === e.inArray(t.el[0], i.parents(x));
              if (a) {
                var r = i.parents(".w-editor-bem-EditorHoverControls").length,
                  o = i.parents(".w-editor-bem-RTToolbar").length,
                  c = e(".w-editor-bem-EditorOverlay"),
                  u =
                    c.find(".w-editor-edit-outline").length ||
                    c.find(".w-editor-bem-RTToolbar").length;
                if (r || o || u) return;
                (t.hovering = !1), p(t);
              }
            }
          });
        }
        function h(e) {
          return function (t) {
            if (!R && e.open)
              switch (
                ((e.selectedIdx = e.links.index(document.activeElement)),
                t.keyCode)
              ) {
                case r.HOME:
                  if (!e.open) return;
                  return (e.selectedIdx = 0), _(e), t.preventDefault();
                case r.END:
                  if (!e.open) return;
                  return (
                    (e.selectedIdx = e.links.length - 1),
                    _(e),
                    t.preventDefault()
                  );
                case r.ESCAPE:
                  return p(e), e.toggle.focus(), t.stopPropagation();
                case r.ARROW_RIGHT:
                case r.ARROW_DOWN:
                  return (
                    (e.selectedIdx = Math.min(
                      e.links.length - 1,
                      e.selectedIdx + 1
                    )),
                    _(e),
                    t.preventDefault()
                  );
                case r.ARROW_LEFT:
                case r.ARROW_UP:
                  return (
                    (e.selectedIdx = Math.max(-1, e.selectedIdx - 1)),
                    _(e),
                    t.preventDefault()
                  );
              }
          };
        }
        function _(e) {
          e.links[e.selectedIdx] && e.links[e.selectedIdx].focus();
        }
        function b(e) {
          var t = d(e, o);
          return function (n) {
            if (!R) {
              if (!e.open)
                switch (n.keyCode) {
                  case r.ARROW_UP:
                  case r.ARROW_DOWN:
                    return n.stopPropagation();
                }
              switch (n.keyCode) {
                case r.SPACE:
                case r.ENTER:
                  return t(), n.stopPropagation(), n.preventDefault();
              }
            }
          };
        }
        function O(e) {
          return S(function (t) {
            var n = t.relatedTarget,
              i = t.target,
              a = e.el[0],
              r = a.contains(n) || a.contains(i);
            return r || p(e), t.stopPropagation();
          });
        }
        var R,
          A,
          S = t.debounce,
          L = {},
          N = i.env(),
          w = !1,
          C = i.env.touch,
          x = ".w-dropdown",
          M = "w--open",
          P = a.triggers,
          D = 900,
          V = "focusout" + x,
          k = "keydown" + x,
          G = "mouseenter" + x,
          F = "mousemove" + x,
          U = "mouseleave" + x,
          j = (C ? "click" : "mouseup") + x,
          X = "w-close" + x,
          B = "setting" + x,
          W = e(document);
        return (
          (L.ready = n),
          (L.design = function () {
            w && v(), (w = !1), n();
          }),
          (L.preview = function () {
            (w = !0), n();
          }),
          L
        );
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var i = n(1),
      a = i(n(337)),
      r = n(3);
    r.define(
      "forms",
      (e.exports = function (e, t) {
        function n() {
          (_ = e("html").attr("data-wf-site")),
            (O = "https://webflow.com/api/v1/form/" + _),
            N &&
              O.indexOf("https://webflow.com") >= 0 &&
              (O = O.replace(
                "https://webflow.com",
                "http://formdata.webflow.com"
              )),
            (R = "".concat(O, "/signFile")),
            (h = e(w + " form")),
            h.length && h.each(i);
        }
        function i(t, n) {
          var i = e(n),
            a = e.data(n, w);
          a || (a = e.data(n, w, { form: i })), c(a);
          var r = i.closest("div.w-form");
          (a.done = r.find("> .w-form-done")),
            (a.fail = r.find("> .w-form-fail")),
            (a.fileUploads = r.find(".w-file-upload")),
            a.fileUploads.each(function (e) {
              I(e, a);
            });
          var o =
            a.form.attr("aria-label") || a.form.attr("data-name") || "Form";
          a.done.attr("aria-label") || a.form.attr("aria-label", o),
            a.done.attr("tabindex", "-1"),
            a.done.attr("role", "region"),
            a.done.attr("aria-label") ||
              a.done.attr("aria-label", o + " success"),
            a.fail.attr("tabindex", "-1"),
            a.fail.attr("role", "region"),
            a.fail.attr("aria-label") ||
              a.fail.attr("aria-label", o + " failure");
          var u = (a.action = i.attr("action"));
          (a.handler = null),
            (a.redirect = i.attr("data-redirect")),
            D.test(u)
              ? (a.handler = E)
              : u || (_ ? (a.handler = "function" == typeof v ? v : p) : V());
        }
        function o() {
          (b = !0),
            S.on("submit", w + " form", function (t) {
              var n = e.data(this, w);
              n.handler && ((n.evt = t), n.handler(n));
            });
          var t = ".w-checkbox-input",
            n = ".w-radio-input",
            i = "w--redirected-checked",
            r = "w--redirected-focus",
            o = "w--redirected-focus-visible",
            c = ":focus-visible, [data-wf-focus-visible]",
            u = [
              ["checkbox", t],
              ["radio", n],
            ];
          S.on(
            "change",
            w + ' form input[type="checkbox"]:not(' + t + ")",
            function (n) {
              e(n.target).siblings(t).toggleClass(i);
            }
          ),
            S.on("change", w + ' form input[type="radio"]', function (a) {
              e(
                'input[name="'.concat(a.target.name, '"]:not(').concat(t, ")")
              ).map(function (t, a) {
                return e(a).siblings(n).removeClass(i);
              });
              var r = e(a.target);
              r.hasClass("w-radio-input") || r.siblings(n).addClass(i);
            }),
            u.forEach(function (t) {
              var n = (0, a.default)(t, 2),
                i = n[0],
                u = n[1];
              S.on(
                "focus",
                w + ' form input[type="'.concat(i, '"]:not(') + u + ")",
                function (t) {
                  e(t.target).siblings(u).addClass(r),
                    e(t.target).filter(c).siblings(u).addClass(o);
                }
              ),
                S.on(
                  "blur",
                  w + ' form input[type="'.concat(i, '"]:not(') + u + ")",
                  function (t) {
                    e(t.target)
                      .siblings(u)
                      .removeClass("".concat(r, " ").concat(o));
                  }
                );
            });
        }
        function c(e) {
          var t = (e.btn = e.form.find(':input[type="submit"]'));
          (e.wait = e.btn.attr("data-wait") || null),
            (e.success = !1),
            t.prop("disabled", !1),
            e.label && t.val(e.label);
        }
        function u(e) {
          var t = e.btn,
            n = e.wait;
          t.prop("disabled", !0), n && ((e.label = t.val()), t.val(n));
        }
        function s(t, n) {
          var i = null;
          return (
            (n = n || {}),
            t
              .find(':input:not([type="submit"]):not([type="file"])')
              .each(function (a, r) {
                var o = e(r),
                  c = o.attr("type"),
                  u =
                    o.attr("data-name") || o.attr("name") || "Field " + (a + 1),
                  s = o.val();
                if ("checkbox" === c) s = o.is(":checked");
                else if ("radio" === c) {
                  if (null === n[u] || "string" == typeof n[u]) return;
                  s =
                    t
                      .find('input[name="' + o.attr("name") + '"]:checked')
                      .val() || null;
                }
                "string" == typeof s && (s = e.trim(s)),
                  (n[u] = s),
                  (i = i || f(o, c, u, s));
              }),
            i
          );
        }
        function l(t) {
          var n = {};
          return (
            t.find(':input[type="file"]').each(function (t, i) {
              var a = e(i),
                r = a.attr("data-name") || a.attr("name") || "File " + (t + 1),
                o = a.attr("data-value");
              "string" == typeof o && (o = e.trim(o)), (n[r] = o);
            }),
            n
          );
        }
        function d() {
          var e = document.cookie.split("; ").reduce(function (e, t) {
            var n = t.split("="),
              i = n[0];
            if (i in k) {
              var a = k[i],
                r = n.slice(1).join("=");
              e[a] = r;
            }
            return e;
          }, {});
          return e;
        }
        function f(e, t, n, i) {
          var a = null;
          return (
            "password" === t
              ? (a = "Passwords cannot be submitted.")
              : e.attr("required")
              ? i
                ? C.test(e.attr("type")) &&
                  (x.test(i) ||
                    (a = "Please enter a valid email address for: " + n))
                : (a = "Please fill out the required field: " + n)
              : "g-recaptcha-response" !== n ||
                i ||
                (a = "Please confirm youâ€™re not a robot."),
            a
          );
        }
        function p(e) {
          y(e), g(e);
        }
        function v(t) {
          c(t);
          var n = t.form,
            i = {
              name: n.attr("data-name") || n.attr("name") || "Untitled Form",
              source: L.href,
              test: r.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                n.html()
              ),
              trackingCookies: d(),
            },
            a = n.attr("data-wf-flow");
          a && (i.wfFlow = a), y(t);
          var o = s(n, i.fields);
          if (o) return M(o);
          (i.fileUploads = l(n)),
            u(t),
            _
              ? e
                  .ajax({
                    url: O,
                    type: "POST",
                    data: i,
                    dataType: "json",
                    crossDomain: !0,
                  })
                  .done(function (e) {
                    e && 200 === e.code && (t.success = !0), g(t);
                  })
                  .fail(function () {
                    g(t);
                  })
              : g(t);
        }
        function E(n) {
          c(n);
          var i = n.form,
            a = {};
          if (!/^https/.test(L.href) || /^https/.test(n.action)) {
            y(n);
            var r,
              o = s(i, a);
            if (o) return M(o);
            u(n),
              t.each(a, function (e, t) {
                C.test(t) && (a.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (r = e),
                  /^(first[ _-]?name)$/i.test(t) && (a.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (a.LNAME = e);
              }),
              r &&
                !a.FNAME &&
                ((r = r.split(" ")),
                (a.FNAME = r[0]),
                (a.LNAME = a.LNAME || r[1]));
            var l = n.action.replace("/post?", "/post-json?") + "&c=?",
              d = l.indexOf("u=") + 2;
            d = l.substring(d, l.indexOf("&", d));
            var f = l.indexOf("id=") + 3;
            (f = l.substring(f, l.indexOf("&", f))),
              (a["b_" + d + "_" + f] = ""),
              e
                .ajax({ url: l, data: a, dataType: "jsonp" })
                .done(function (e) {
                  (n.success = "success" === e.result || /already/.test(e.msg)),
                    n.success || console.info("MailChimp error: " + e.msg),
                    g(n);
                })
                .fail(function () {
                  g(n);
                });
          } else i.attr("method", "post");
        }
        function g(e) {
          var t = e.form,
            n = e.redirect,
            i = e.success;
          i && n
            ? r.location(n)
            : (e.done.toggle(i),
              e.fail.toggle(!i),
              i ? e.done.focus() : e.fail.focus(),
              t.toggle(!i),
              c(e));
        }
        function y(e) {
          e.evt && e.evt.preventDefault(), (e.evt = null);
        }
        function I(t, n) {
          function i(e) {
            var i = e.responseJSON && e.responseJSON.msg,
              a = A;
            "string" == typeof i && 0 === i.indexOf("InvalidFileTypeError")
              ? (a = R)
              : "string" == typeof i &&
                0 === i.indexOf("MaxFileSizeError") &&
                (a = O),
              I.text(a),
              E.removeAttr("data-value"),
              E.val(""),
              f.toggle(!1),
              d.toggle(!0),
              v.toggle(!0),
              v.focus(),
              (n.fileUploads[t].uploading = !1),
              o() || c(n);
          }
          function a(e, t) {
            if (e) return i(e);
            var n = t.fileName,
              a = t.postData,
              o = t.fileId,
              c = t.s3Url;
            E.attr("data-value", o), T(c, a, s, n, r);
          }
          function r(e) {
            if (e) return i(e);
            f.toggle(!1),
              p.css("display", "inline-block"),
              p.focus(),
              (n.fileUploads[t].uploading = !1),
              o() || c(n);
          }
          function o() {
            var e = (n.fileUploads && n.fileUploads.toArray()) || [];
            return e.some(function (e) {
              return e.uploading;
            });
          }
          if (n.fileUploads && n.fileUploads[t]) {
            var s,
              l = e(n.fileUploads[t]),
              d = l.find("> .w-file-upload-default"),
              f = l.find("> .w-file-upload-uploading"),
              p = l.find("> .w-file-upload-success"),
              v = l.find("> .w-file-upload-error"),
              E = d.find(".w-file-upload-input"),
              g = d.find(".w-file-upload-label"),
              y = g.children(),
              I = v.find(".w-file-upload-error-msg"),
              h = p.find(".w-file-upload-file"),
              _ = p.find(".w-file-remove-link"),
              b = h.find(".w-file-upload-file-name"),
              O = I.attr("data-w-size-error"),
              R = I.attr("data-w-type-error"),
              A = I.attr("data-w-generic-error");
            if (
              (P ||
                g.on("click keydown", function (e) {
                  ("keydown" === e.type && 13 !== e.which && 32 !== e.which) ||
                    (e.preventDefault(), E.click());
                }),
              g.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
              _.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
              P)
            )
              E.on("click", function (e) {
                e.preventDefault();
              }),
                g.on("click", function (e) {
                  e.preventDefault();
                }),
                y.on("click", function (e) {
                  e.preventDefault();
                });
            else {
              _.on("click keydown", function (e) {
                if ("keydown" === e.type) {
                  if (13 !== e.which && 32 !== e.which) return;
                  e.preventDefault();
                }
                E.removeAttr("data-value"),
                  E.val(""),
                  b.html(""),
                  d.toggle(!0),
                  p.toggle(!1),
                  g.focus();
              }),
                E.on("change", function (e) {
                  (s = e.target && e.target.files && e.target.files[0]),
                    s &&
                      (d.toggle(!1),
                      v.toggle(!1),
                      f.toggle(!0),
                      f.focus(),
                      b.text(s.name),
                      o() || u(n),
                      (n.fileUploads[t].uploading = !0),
                      m(s, a));
                });
              var S = g.outerHeight();
              E.height(S), E.width(1);
            }
          }
        }
        function m(t, n) {
          var i = new URLSearchParams({ name: t.name, size: t.size });
          e.ajax({
            type: "GET",
            url: "".concat(R, "?").concat(i),
            crossDomain: !0,
          })
            .done(function (e) {
              n(null, e);
            })
            .fail(function (e) {
              n(e);
            });
        }
        function T(t, n, i, a, r) {
          var o = new FormData();
          for (var c in n) o.append(c, n[c]);
          o.append("file", i, a),
            e
              .ajax({
                type: "POST",
                url: t,
                data: o,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                r(null);
              })
              .fail(function (e) {
                r(e);
              });
        }
        var h,
          _,
          b,
          O,
          R,
          A = {},
          S = e(document),
          L = window.location,
          N = window.XDomainRequest && !window.atob,
          w = ".w-form",
          C = /e(-)?mail/i,
          x = /^\S+@\S+$/,
          M = window.alert,
          P = r.env(),
          D = /list-manage[1-9]?.com/i,
          V = t.debounce(function () {
            M(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        A.ready =
          A.design =
          A.preview =
            function () {
              n(), P || b || o();
            };
        var k = { _mkto_trk: "marketo" };
        return A;
      })
    );
  },
  function (e, t, n) {
    function i(e, t) {
      return a(e) || r(e, t) || o();
    }
    var a = n(338),
      r = n(339),
      o = n(340);
    e.exports = i;
  },
  function (e, t) {
    function n(e) {
      if (Array.isArray(e)) return e;
    }
    e.exports = n;
  },
  function (e, t) {
    function n(e, t) {
      var n = [],
        i = !0,
        a = !1,
        r = void 0;
      try {
        for (
          var o, c = e[Symbol.iterator]();
          !(i = (o = c.next()).done) && (n.push(o.value), !t || n.length !== t);
          i = !0
        );
      } catch (e) {
        (a = !0), (r = e);
      } finally {
        try {
          i || null == c.return || c.return();
        } finally {
          if (a) throw r;
        }
      }
      return n;
    }
    e.exports = n;
  },
  function (e, t) {
    function n() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      a = n(25),
      r = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    i.define(
      "navbar",
      (e.exports = function (e, t) {
        function n() {
          (C = G && i.env("design")),
            (x = i.env("editor")),
            (N = e(document.body)),
            (w = V.find(U)),
            w.length && (w.each(s), o(), c());
        }
        function o() {
          i.resize.off(u);
        }
        function c() {
          i.resize.on(u);
        }
        function u() {
          w.each(_);
        }
        function s(t, n) {
          var i = e(n),
            a = e.data(n, U);
          a ||
            (a = e.data(n, U, {
              open: !1,
              el: i,
              config: {},
              selectedIdx: -1,
            })),
            (a.menu = i.find(".w-nav-menu")),
            (a.links = a.menu.find(".w-nav-link")),
            (a.dropdowns = a.menu.find(".w-dropdown")),
            (a.dropdownToggle = a.menu.find(".w-dropdown-toggle")),
            (a.dropdownList = a.menu.find(".w-dropdown-list")),
            (a.button = i.find(".w-nav-button")),
            (a.container = i.find(".w-container")),
            (a.overlayContainerId = "w-nav-overlay-" + t),
            (a.outside = h(a));
          var r = i.find(".w-nav-brand");
          r &&
            "/" === r.attr("href") &&
            null == r.attr("aria-label") &&
            r.attr("aria-label", "home"),
            a.button.attr("style", "-webkit-user-select: text;"),
            null == a.button.attr("aria-label") &&
              a.button.attr("aria-label", "menu"),
            a.button.attr("role", "button"),
            a.button.attr("tabindex", "0"),
            a.button.attr("aria-controls", a.overlayContainerId),
            a.button.attr("aria-haspopup", "menu"),
            a.button.attr("aria-expanded", "false"),
            a.el.off(U),
            a.button.off(U),
            a.menu.off(U),
            p(a),
            C
              ? (d(a), a.el.on("setting" + U, v(a)))
              : (f(a),
                a.button.on("click" + U, m(a)),
                a.menu.on("click" + U, "a", T(a)),
                a.button.on("keydown" + U, E(a)),
                a.el.on("keydown" + U, g(a))),
            _(t, n);
        }
        function l(t, n) {
          var i = e.data(n, U);
          i && (d(i), e.removeData(n, U));
        }
        function d(e) {
          e.overlay && (L(e, !0), e.overlay.remove(), (e.overlay = null));
        }
        function f(t) {
          t.overlay ||
            ((t.overlay = e(F).appendTo(t.el)),
            t.overlay.attr("id", t.overlayContainerId),
            (t.parent = t.menu.parent()),
            L(t, !0));
        }
        function p(e) {
          var n = {},
            i = e.config || {},
            a = (n.animation = e.el.attr("data-animation") || "default");
          (n.animOver = /^over/.test(a)),
            (n.animDirect = /left$/.test(a) ? -1 : 1),
            i.animation !== a && e.open && t.defer(I, e),
            (n.easing = e.el.attr("data-easing") || "ease"),
            (n.easing2 = e.el.attr("data-easing2") || "ease");
          var r = e.el.attr("data-duration");
          (n.duration = null != r ? Number(r) : 400),
            (n.docHeight = e.el.attr("data-doc-height")),
            (e.config = n);
        }
        function v(e) {
          return function (n, i) {
            i = i || {};
            var a = D.width();
            p(e),
              !0 === i.open && A(e, !0),
              !1 === i.open && L(e, !0),
              e.open &&
                t.defer(function () {
                  a !== D.width() && I(e);
                });
          };
        }
        function E(e) {
          return function (t) {
            switch (t.keyCode) {
              case r.SPACE:
              case r.ENTER:
                return m(e)(), t.preventDefault(), t.stopPropagation();
              case r.ESCAPE:
                return L(e), t.preventDefault(), t.stopPropagation();
              case r.ARROW_RIGHT:
              case r.ARROW_DOWN:
              case r.HOME:
              case r.END:
                return e.open
                  ? (t.keyCode === r.END
                      ? (e.selectedIdx = e.links.length - 1)
                      : (e.selectedIdx = 0),
                    y(e),
                    t.preventDefault(),
                    t.stopPropagation())
                  : (t.preventDefault(), t.stopPropagation());
            }
          };
        }
        function g(e) {
          return function (t) {
            if (e.open)
              switch (
                ((e.selectedIdx = e.links.index(document.activeElement)),
                t.keyCode)
              ) {
                case r.HOME:
                case r.END:
                  return (
                    t.keyCode === r.END
                      ? (e.selectedIdx = e.links.length - 1)
                      : (e.selectedIdx = 0),
                    y(e),
                    t.preventDefault(),
                    t.stopPropagation()
                  );
                case r.ESCAPE:
                  return (
                    L(e),
                    e.button.focus(),
                    t.preventDefault(),
                    t.stopPropagation()
                  );
                case r.ARROW_LEFT:
                case r.ARROW_UP:
                  return (
                    (e.selectedIdx = Math.max(-1, e.selectedIdx - 1)),
                    y(e),
                    t.preventDefault(),
                    t.stopPropagation()
                  );
                case r.ARROW_RIGHT:
                case r.ARROW_DOWN:
                  return (
                    (e.selectedIdx = Math.min(
                      e.links.length - 1,
                      e.selectedIdx + 1
                    )),
                    y(e),
                    t.preventDefault(),
                    t.stopPropagation()
                  );
              }
          };
        }
        function y(e) {
          if (e.links[e.selectedIdx]) {
            var t = e.links[e.selectedIdx];
            t.focus(), T(t);
          }
        }
        function I(e) {
          e.open && (L(e, !0), A(e, !0));
        }
        function m(e) {
          return k(function () {
            e.open ? L(e) : A(e);
          });
        }
        function T(t) {
          return function (n) {
            var a = e(this),
              r = a.attr("href");
            i.validClick(n.currentTarget)
              ? r && 0 === r.indexOf("#") && t.open && L(t)
              : n.preventDefault();
          };
        }
        function h(t) {
          return (
            t.outside && V.off("click" + U, t.outside),
            function (n) {
              var i = e(n.target);
              (x && i.closest(".w-editor-bem-EditorOverlay").length) || Y(t, i);
            }
          );
        }
        function _(t, n) {
          var i = e.data(n, U),
            a = (i.collapsed = "none" !== i.button.css("display"));
          if ((!i.open || a || C || L(i, !0), i.container.length)) {
            var r = b(i);
            i.links.each(r), i.dropdowns.each(r);
          }
          i.open && S(i);
        }
        function b(t) {
          var n = t.container.css(K);
          return (
            "none" === n && (n = ""),
            function (t, i) {
              (i = e(i)), i.css(K, ""), "none" === i.css(K) && i.css(K, n);
            }
          );
        }
        function O(e, t) {
          t.setAttribute("data-nav-menu-open", "");
        }
        function R(e, t) {
          t.removeAttribute("data-nav-menu-open");
        }
        function A(e, t) {
          function n() {
            e.button.attr("aria-expanded", "true");
          }
          if (!e.open) {
            (e.open = !0),
              e.menu.each(O),
              e.links.addClass(H),
              e.dropdowns.addClass(X),
              e.dropdownToggle.addClass(B),
              e.dropdownList.addClass(W),
              e.button.addClass(j);
            var a = e.config,
              r = a.animation;
            ("none" === r || !P.support.transform || a.duration <= 0) &&
              (t = !0);
            var o = S(e),
              c = e.menu.outerHeight(!0),
              u = e.menu.outerWidth(!0),
              s = e.el.height(),
              l = e.el[0];
            if (
              (_(0, l),
              Q.intro(0, l),
              i.redraw.up(),
              C || V.on("click" + U, e.outside),
              t)
            )
              n();
            else {
              var d = "transform " + a.duration + "ms " + a.easing;
              if (
                (e.overlay &&
                  ((z = e.menu.prev()), e.overlay.show().append(e.menu)),
                a.animOver)
              )
                return (
                  P(e.menu)
                    .add(d)
                    .set({ x: a.animDirect * u, height: o })
                    .start({ x: 0 })
                    .then(n),
                  void (e.overlay && e.overlay.width(u))
                );
              var f = s + c;
              P(e.menu).add(d).set({ y: -f }).start({ y: 0 }).then(n);
            }
          }
        }
        function S(e) {
          var t = e.config,
            n = t.docHeight ? V.height() : N.height();
          return (
            t.animOver
              ? e.menu.height(n)
              : "fixed" !== e.el.css("position") && (n -= e.el.outerHeight(!0)),
            e.overlay && e.overlay.height(n),
            n
          );
        }
        function L(e, t) {
          function n() {
            e.menu.height(""),
              P(e.menu).set({ x: 0, y: 0 }),
              e.menu.each(R),
              e.links.removeClass(H),
              e.dropdowns.removeClass(X),
              e.dropdownToggle.removeClass(B),
              e.dropdownList.removeClass(W),
              e.overlay &&
                e.overlay.children().length &&
                (z.length ? e.menu.insertAfter(z) : e.menu.prependTo(e.parent),
                e.overlay.attr("style", "").hide()),
              e.el.triggerHandler("w-close"),
              e.button.attr("aria-expanded", "false");
          }
          if (e.open) {
            (e.open = !1), e.button.removeClass(j);
            var i = e.config;
            if (
              (("none" === i.animation ||
                !P.support.transform ||
                i.duration <= 0) &&
                (t = !0),
              Q.outro(0, e.el[0]),
              V.off("click" + U, e.outside),
              t)
            )
              return P(e.menu).stop(), void n();
            var a = "transform " + i.duration + "ms " + i.easing2,
              r = e.menu.outerHeight(!0),
              o = e.menu.outerWidth(!0),
              c = e.el.height();
            if (i.animOver)
              P(e.menu)
                .add(a)
                .start({ x: o * i.animDirect })
                .then(n);
            else {
              var u = c + r;
              P(e.menu).add(a).start({ y: -u }).then(n);
            }
          }
        }
        var N,
          w,
          C,
          x,
          M = {},
          P = e.tram,
          D = e(window),
          V = e(document),
          k = t.debounce,
          G = i.env(),
          F = '<div class="w-nav-overlay" data-wf-ignore />',
          U = ".w-nav",
          j = "w--open",
          X = "w--nav-dropdown-open",
          B = "w--nav-dropdown-toggle-open",
          W = "w--nav-dropdown-list-open",
          H = "w--nav-link-open",
          Q = a.triggers,
          z = e();
        (M.ready = M.design = M.preview = n),
          (M.destroy = function () {
            (z = e()), o(), w && w.length && w.each(l);
          });
        var Y = k(function (e, t) {
            if (e.open) {
              var n = t.closest(".w-nav-menu");
              e.menu.is(n) || L(e);
            }
          }),
          K = "max-width";
        return M;
      })
    );
  },
  function (e, t, n) {
    "use strict";
    var i = n(3),
      a = n(25),
      r = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      o =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    i.define(
      "slider",
      (e.exports = function (e, t) {
        function n() {
          (L = M.find(D)), L.length && (L.each(l), w || (c(), u()));
        }
        function c() {
          i.resize.off(s), i.redraw.off(C.redraw);
        }
        function u() {
          i.resize.on(s), i.redraw.on(C.redraw);
        }
        function s() {
          L.filter(":visible").each(b);
        }
        function l(t, n) {
          var i = e(n),
            a = e.data(n, D);
          a ||
            (a = e.data(n, D, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: i,
              config: {},
            })),
            (a.mask = i.children(".w-slider-mask")),
            (a.left = i.children(".w-slider-arrow-left")),
            (a.right = i.children(".w-slider-arrow-right")),
            (a.nav = i.children(".w-slider-nav")),
            (a.slides = a.mask.children(".w-slide")),
            a.slides.each(F.reset),
            U && (a.maskWidth = 0),
            void 0 === i.attr("role") && i.attr("role", "region"),
            void 0 === i.attr("aria-label") && i.attr("aria-label", "carousel");
          var r = a.mask.attr("id");
          if (
            (r || ((r = "w-slider-mask-" + t), a.mask.attr("id", r)),
            N || a.ariaLiveLabel || (a.ariaLiveLabel = e(k).appendTo(a.mask)),
            a.left.attr("role", "button"),
            a.left.attr("tabindex", "0"),
            a.left.attr("aria-controls", r),
            void 0 === a.left.attr("aria-label") &&
              a.left.attr("aria-label", "previous slide"),
            a.right.attr("role", "button"),
            a.right.attr("tabindex", "0"),
            a.right.attr("aria-controls", r),
            void 0 === a.right.attr("aria-label") &&
              a.right.attr("aria-label", "next slide"),
            !x.support.transform)
          )
            return a.left.hide(), a.right.hide(), a.nav.hide(), void (w = !0);
          a.el.off(D),
            a.left.off(D),
            a.right.off(D),
            a.nav.off(D),
            d(a),
            N
              ? (a.el.on("setting" + D, T(a)), m(a), (a.hasTimer = !1))
              : (a.el.on("swipe" + D, T(a)),
                a.left.on("click" + D, E(a)),
                a.right.on("click" + D, g(a)),
                a.left.on("keydown" + D, v(a, E)),
                a.right.on("keydown" + D, v(a, g)),
                a.nav.on("keydown" + D, "> div", T(a)),
                a.config.autoplay &&
                  !a.hasTimer &&
                  ((a.hasTimer = !0), (a.timerCount = 1), I(a)),
                a.el.on("mouseenter" + D, p(a, !0, "mouse")),
                a.el.on("focusin" + D, p(a, !0, "keyboard")),
                a.el.on("mouseleave" + D, p(a, !1, "mouse")),
                a.el.on("focusout" + D, p(a, !1, "keyboard"))),
            a.nav.on("click" + D, "> div", T(a)),
            P ||
              a.mask
                .contents()
                .filter(function () {
                  return 3 === this.nodeType;
                })
                .remove();
          var o = i.filter(":hidden");
          o.addClass(G);
          var c = i.parents(":hidden");
          c.addClass(G), U || b(t, n), o.removeClass(G), c.removeClass(G);
        }
        function d(e) {
          var t = { crossOver: 0 };
          (t.animation = e.el.attr("data-animation") || "slide"),
            "outin" === t.animation &&
              ((t.animation = "cross"), (t.crossOver = 0.5)),
            (t.easing = e.el.attr("data-easing") || "ease");
          var n = e.el.attr("data-duration");
          if (
            ((t.duration = null != n ? parseInt(n, 10) : 500),
            f(e.el.attr("data-infinite")) && (t.infinite = !0),
            f(e.el.attr("data-disable-swipe")) && (t.disableSwipe = !0),
            f(e.el.attr("data-hide-arrows"))
              ? (t.hideArrows = !0)
              : e.config.hideArrows && (e.left.show(), e.right.show()),
            f(e.el.attr("data-autoplay")))
          ) {
            (t.autoplay = !0),
              (t.delay = parseInt(e.el.attr("data-delay"), 10) || 2e3),
              (t.timerMax = parseInt(e.el.attr("data-autoplay-limit"), 10));
            var i = "mousedown" + D + " touchstart" + D;
            N ||
              e.el.off(i).one(i, function () {
                m(e);
              });
          }
          var a = e.right.width();
          (t.edge = a ? a + 40 : 100), (e.config = t);
        }
        function f(e) {
          return "1" === e || "true" === e;
        }
        function p(t, n, i) {
          return function (a) {
            if (n) t.hasFocus[i] = n;
            else {
              if (e.contains(t.el.get(0), a.relatedTarget)) return;
              if (
                ((t.hasFocus[i] = n),
                (t.hasFocus.mouse && "keyboard" === i) ||
                  (t.hasFocus.keyboard && "mouse" === i))
              )
                return;
            }
            n
              ? (t.ariaLiveLabel.attr("aria-live", "polite"),
                t.hasTimer && m(t))
              : (t.ariaLiveLabel.attr("aria-live", "off"), t.hasTimer && I(t));
          };
        }
        function v(e, t) {
          return function (n) {
            switch (n.keyCode) {
              case r.SPACE:
              case r.ENTER:
                return t(e)(), n.preventDefault(), n.stopPropagation();
            }
          };
        }
        function E(e) {
          return function () {
            _(e, { index: e.index - 1, vector: -1 });
          };
        }
        function g(e) {
          return function () {
            _(e, { index: e.index + 1, vector: 1 });
          };
        }
        function y(i, a) {
          var r = null;
          a === i.slides.length && (n(), O(i)),
            t.each(i.anchors, function (t, n) {
              e(t.els).each(function (t, i) {
                e(i).index() === a && (r = n);
              });
            }),
            null != r && _(i, { index: r, immediate: !0 });
        }
        function I(e) {
          m(e);
          var t = e.config,
            n = t.timerMax;
          (n && e.timerCount++ > n) ||
            (e.timerId = window.setTimeout(function () {
              null == e.timerId || N || (g(e)(), I(e));
            }, t.delay));
        }
        function m(e) {
          window.clearTimeout(e.timerId), (e.timerId = null);
        }
        function T(t) {
          return function (n, a) {
            a = a || {};
            var o = t.config;
            if (N && "setting" === n.type) {
              if ("prev" === a.select) return E(t)();
              if ("next" === a.select) return g(t)();
              if ((d(t), O(t), null == a.select)) return;
              y(t, a.select);
            } else {
              if ("swipe" === n.type) {
                if (o.disableSwipe) return;
                if (i.env("editor")) return;
                return "left" === a.direction
                  ? g(t)()
                  : "right" === a.direction
                  ? E(t)()
                  : void 0;
              }
              if (t.nav.has(n.target).length) {
                var c = e(n.target).index();
                if (
                  ("click" === n.type && _(t, { index: c }),
                  "keydown" === n.type)
                )
                  switch (n.keyCode) {
                    case r.ENTER:
                    case r.SPACE:
                      _(t, { index: c }), n.preventDefault();
                      break;
                    case r.ARROW_LEFT:
                    case r.ARROW_UP:
                      h(t.nav, Math.max(c - 1, 0)), n.preventDefault();
                      break;
                    case r.ARROW_RIGHT:
                    case r.ARROW_DOWN:
                      h(t.nav, Math.min(c + 1, t.pages)), n.preventDefault();
                      break;
                    case r.HOME:
                      h(t.nav, 0), n.preventDefault();
                      break;
                    case r.END:
                      h(t.nav, t.pages), n.preventDefault();
                      break;
                    default:
                      return;
                  }
              }
            }
          };
        }
        function h(e, t) {
          var n = e.children().eq(t).focus();
          e.children().not(n);
        }
        function _(t, n) {
          function i() {
            (p = e(r[t.index].els)),
              (E = t.slides.not(p)),
              "slide" !== g && (f.visibility = "hidden"),
              x(E).set(f);
          }
          n = n || {};
          var a = t.config,
            r = t.anchors;
          t.previous = t.index;
          var c = n.index,
            u = {};
          c < 0
            ? ((c = r.length - 1),
              a.infinite &&
                ((u.x = -t.endX), (u.from = 0), (u.to = r[0].width)))
            : c >= r.length &&
              ((c = 0),
              a.infinite &&
                ((u.x = r[r.length - 1].width),
                (u.from = -r[r.length - 1].x),
                (u.to = u.from - u.x))),
            (t.index = c);
          var s = t.nav
            .children()
            .eq(c)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          t.nav
            .children()
            .not(s)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            a.hideArrows &&
              (t.index === r.length - 1 ? t.right.hide() : t.right.show(),
              0 === t.index ? t.left.hide() : t.left.show());
          var l = t.offsetX || 0,
            d = (t.offsetX = -r[t.index].x),
            f = { x: d, opacity: 1, visibility: "" },
            p = e(r[t.index].els),
            v = e(r[t.previous] && r[t.previous].els),
            E = t.slides.not(p),
            g = a.animation,
            y = a.easing,
            I = Math.round(a.duration),
            m = n.vector || (t.index > t.previous ? 1 : -1),
            T = "opacity " + I + "ms " + y,
            h = "transform " + I + "ms " + y;
          if (
            (p.find(o).removeAttr("tabindex"),
            p.removeAttr("aria-hidden"),
            p.find("*").removeAttr("aria-hidden"),
            E.find(o).attr("tabindex", "-1"),
            E.attr("aria-hidden", "true"),
            E.find("*").attr("aria-hidden", "true"),
            N || (p.each(F.intro), E.each(F.outro)),
            n.immediate && !U)
          )
            return x(p).set(f), void i();
          if (t.index !== t.previous) {
            if (
              (N ||
                t.ariaLiveLabel.text(
                  "Slide ".concat(c + 1, " of ").concat(r.length, ".")
                ),
              "cross" === g)
            ) {
              var _ = Math.round(I - I * a.crossOver),
                b = Math.round(I - _);
              return (
                (T = "opacity " + _ + "ms " + y),
                x(v).set({ visibility: "" }).add(T).start({ opacity: 0 }),
                void x(p)
                  .set({ visibility: "", x: d, opacity: 0, zIndex: t.depth++ })
                  .add(T)
                  .wait(b)
                  .then({ opacity: 1 })
                  .then(i)
              );
            }
            return "fade" === g
              ? (x(v).set({ visibility: "" }).stop(),
                void x(p)
                  .set({ visibility: "", x: d, opacity: 0, zIndex: t.depth++ })
                  .add(T)
                  .start({ opacity: 1 })
                  .then(i))
              : "over" === g
              ? ((f = { x: t.endX }),
                x(v).set({ visibility: "" }).stop(),
                void x(p)
                  .set({
                    visibility: "",
                    zIndex: t.depth++,
                    x: d + r[t.index].width * m,
                  })
                  .add(h)
                  .start({ x: d })
                  .then(i))
              : void (a.infinite && u.x
                  ? (x(t.slides.not(v))
                      .set({ visibility: "", x: u.x })
                      .add(h)
                      .start({ x: d }),
                    x(v)
                      .set({ visibility: "", x: u.from })
                      .add(h)
                      .start({ x: u.to }),
                    (t.shifted = v))
                  : (a.infinite &&
                      t.shifted &&
                      (x(t.shifted).set({ visibility: "", x: l }),
                      (t.shifted = null)),
                    x(t.slides)
                      .set({ visibility: "" })
                      .add(h)
                      .start({ x: d })));
          }
        }
        function b(t, n) {
          var i = e.data(n, D);
          if (i) return A(i) ? O(i) : void (N && S(i) && O(i));
        }
        function O(t) {
          var n = 1,
            i = 0,
            a = 0,
            r = 0,
            o = t.maskWidth,
            c = o - t.config.edge;
          c < 0 && (c = 0),
            (t.anchors = [{ els: [], x: 0, width: 0 }]),
            t.slides.each(function (u, s) {
              a - i > c &&
                (n++,
                (i += o),
                (t.anchors[n - 1] = { els: [], x: a, width: 0 })),
                (r = e(s).outerWidth(!0)),
                (a += r),
                (t.anchors[n - 1].width += r),
                t.anchors[n - 1].els.push(s);
              var l = u + 1 + " of " + t.slides.length;
              e(s).attr("aria-label", l), e(s).attr("role", "group");
            }),
            (t.endX = a),
            N && (t.pages = null),
            t.nav.length && t.pages !== n && ((t.pages = n), R(t));
          var u = t.index;
          u >= n && (u = n - 1), _(t, { immediate: !0, index: u });
        }
        function R(t) {
          var n,
            i = [],
            a = t.el.attr("data-nav-spacing");
          a && (a = parseFloat(a) + "px");
          for (var r = 0, o = t.pages; r < o; r++)
            (n = e(V)),
              n
                .attr("aria-label", "Show slide " + (r + 1) + " of " + o)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              t.nav.hasClass("w-num") && n.text(r + 1),
              null != a && n.css({ "margin-left": a, "margin-right": a }),
              i.push(n);
          t.nav.empty().append(i);
        }
        function A(e) {
          var t = e.mask.width();
          return e.maskWidth !== t && ((e.maskWidth = t), !0);
        }
        function S(t) {
          var n = 0;
          return (
            t.slides.each(function (t, i) {
              n += e(i).outerWidth(!0);
            }),
            t.slidesWidth !== n && ((t.slidesWidth = n), !0)
          );
        }
        var L,
          N,
          w,
          C = {},
          x = e.tram,
          M = e(document),
          P = i.env(),
          D = ".w-slider",
          V = '<div class="w-slider-dot" data-wf-ignore />',
          k =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          G = "w-slider-force-show",
          F = a.triggers,
          U = !1;
        return (
          (C.ready = function () {
            (N = i.env("design")), n();
          }),
          (C.design = function () {
            (N = !0), setTimeout(n, 1e3);
          }),
          (C.preview = function () {
            (N = !1), n();
          }),
          (C.redraw = function () {
            (U = !0), n(), (U = !1);
          }),
          (C.destroy = c),
          C
        );
      })
    );
  },
]),
  Webflow.require("ix2").init({
    events: {
      e: {
        id: "e",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-42",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".service-card",
          originalId:
            "631ec895f354017c63573bfb|1f59b9c7-fefb-e97e-7701-a5e513b053d8",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".service-card",
            originalId:
              "631ec895f354017c63573bfb|1f59b9c7-fefb-e97e-7701-a5e513b053d8",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1630897862080,
      },
      "e-2": {
        id: "e-2",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-2",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-38",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".service-card",
          originalId:
            "631ec895f354017c63573bfb|1f59b9c7-fefb-e97e-7701-a5e513b053d8",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".service-card",
            originalId:
              "631ec895f354017c63573bfb|1f59b9c7-fefb-e97e-7701-a5e513b053d8",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1630897862081,
      },
      "e-4": {
        id: "e-4",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-28",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-44",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f354017c63573bfb",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f354017c63573bfb",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1630901252132,
      },
      "e-7": {
        id: "e-7",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-40",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "684cf77d-a9a2-1e43-195a-96f7ab64edd1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "684cf77d-a9a2-1e43-195a-96f7ab64edd1",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1631095689810,
      },
      "e-23": {
        id: "e-23",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-24",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "8d5387fe-f6d0-b300-ae8e-7a5d1bd1677e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "8d5387fe-f6d0-b300-ae8e-7a5d1bd1677e",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1631661327585,
      },
      "e-25": {
        id: "e-25",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-9",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-26",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".faq-question-wrap",
          originalId:
            "631ec895f354014e4a573c03|d83fa78e-dcc1-17f1-934d-ce5a00630259",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".faq-question-wrap",
            originalId:
              "631ec895f354014e4a573c03|d83fa78e-dcc1-17f1-934d-ce5a00630259",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1623375566374,
      },
      "e-26": {
        id: "e-26",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-10",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-25",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".faq-question-wrap",
          originalId:
            "631ec895f354014e4a573c03|d83fa78e-dcc1-17f1-934d-ce5a00630259",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".faq-question-wrap",
            originalId:
              "631ec895f354014e4a573c03|d83fa78e-dcc1-17f1-934d-ce5a00630259",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1623375566374,
      },
      "e-27": {
        id: "e-27",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-28",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "83fa9c0f-9f58-1bc0-9017-625d808b4544",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "83fa9c0f-9f58-1bc0-9017-625d808b4544",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1632794259483,
      },
      "e-29": {
        id: "e-29",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-30",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "a2a600f4-d8ef-f683-ff91-a6bdb723d09f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "a2a600f4-d8ef-f683-ff91-a6bdb723d09f",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1632872370673,
      },
      "e-33": {
        id: "e-33",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-11",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-34",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".hero-card",
          originalId:
            "631ec895f354017c63573bfb|a2606948-494f-bd98-6ed5-14ae39b797b2",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".hero-card",
            originalId:
              "631ec895f354017c63573bfb|a2606948-494f-bd98-6ed5-14ae39b797b2",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633052725708,
      },
      "e-51": {
        id: "e-51",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-17",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-52",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f354017c63573bfb|8727bc98-5fe6-0968-4e49-25236dedb824",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f354017c63573bfb|8727bc98-5fe6-0968-4e49-25236dedb824",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633053183534,
      },
      "e-53": {
        id: "e-53",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-54",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f354017c63573bfb|0afba1a1-7275-cf80-3fcf-e6c723623db6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f354017c63573bfb|0afba1a1-7275-cf80-3fcf-e6c723623db6",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633053198428,
      },
      "e-55": {
        id: "e-55",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-56",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f354017c63573bfb|1f59b9c7-fefb-e97e-7701-a5e513b053d7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f354017c63573bfb|1f59b9c7-fefb-e97e-7701-a5e513b053d7",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633053207127,
      },
      "e-57": {
        id: "e-57",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-58",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "684cf77d-a9a2-1e43-195a-96f7ab64edcf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "684cf77d-a9a2-1e43-195a-96f7ab64edcf",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633053214954,
      },
      "e-61": {
        id: "e-61",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-62",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f354017c63573bfb|0afba1a1-7275-cf80-3fcf-e6c723623db7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f354017c63573bfb|0afba1a1-7275-cf80-3fcf-e6c723623db7",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633053275752,
      },
      "e-67": {
        id: "e-67",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-68",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f35401bfd0573c06|2ea50c96-61d1-5ee0-2844-0a8fd2bd9583",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f35401bfd0573c06|2ea50c96-61d1-5ee0-2844-0a8fd2bd9583",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633154425342,
      },
      "e-69": {
        id: "e-69",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-70",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f35401bfd0573c06|9f693fcd-ee17-fff3-da22-210ea55cd919",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f35401bfd0573c06|9f693fcd-ee17-fff3-da22-210ea55cd919",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633154438275,
      },
      "e-71": {
        id: "e-71",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-72",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".project-content-wrapper",
          originalId:
            "631ec895f35401bfd0573c06|5130fe83-6574-718f-1383-86dd49b2edfe",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".project-content-wrapper",
            originalId:
              "631ec895f35401bfd0573c06|5130fe83-6574-718f-1383-86dd49b2edfe",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633154450976,
      },
      "e-73": {
        id: "e-73",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-74",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f35401bfd0573c06|4e9ba01d-d89c-84d7-8c9f-fb07002ae793",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f35401bfd0573c06|4e9ba01d-d89c-84d7-8c9f-fb07002ae793",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633154471450,
      },
      "e-75": {
        id: "e-75",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-76",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f35401bfd0573c06|5f490ac9-9a0b-1eca-99f9-e64a6f4ac4ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f35401bfd0573c06|5f490ac9-9a0b-1eca-99f9-e64a6f4ac4ac",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633154480927,
      },
      "e-77": {
        id: "e-77",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-78",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f35401bfd0573c06|5f490ac9-9a0b-1eca-99f9-e64a6f4ac4ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f35401bfd0573c06|5f490ac9-9a0b-1eca-99f9-e64a6f4ac4ae",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633154487342,
      },
      "e-79": {
        id: "e-79",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-14",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-80",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f35401bfd0573c06|5f490ac9-9a0b-1eca-99f9-e64a6f4ac4b0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f35401bfd0573c06|5f490ac9-9a0b-1eca-99f9-e64a6f4ac4b0",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633154492989,
      },
      "e-81": {
        id: "e-81",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-82",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "a6c090e4-ebab-65b6-5989-a803a20e41b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "a6c090e4-ebab-65b6-5989-a803a20e41b8",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633154507788,
      },
      "e-83": {
        id: "e-83",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-84",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f35401b25b573c05|d0ff4a2e-974a-440f-a447-50cecdd30eb6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f35401b25b573c05|d0ff4a2e-974a-440f-a447-50cecdd30eb6",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633154807050,
      },
      "e-85": {
        id: "e-85",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-86",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f35401b25b573c05|48f033ca-ecff-ab9d-9859-861e7f493d6d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f35401b25b573c05|48f033ca-ecff-ab9d-9859-861e7f493d6d",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633154813846,
      },
      "e-87": {
        id: "e-87",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-88",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f35401b25b573c05|4c3311c1-8332-b9ce-04b8-95d719c5876a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f35401b25b573c05|4c3311c1-8332-b9ce-04b8-95d719c5876a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633154824745,
      },
      "e-91": {
        id: "e-91",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-92",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f354011994573c0b|d011debb-002e-160e-3bbf-e25d49f73fdc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f354011994573c0b|d011debb-002e-160e-3bbf-e25d49f73fdc",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633155884834,
      },
      "e-95": {
        id: "e-95",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-96",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "d2d139ae-264b-8c3c-4ba7-00e67db289e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "d2d139ae-264b-8c3c-4ba7-00e67db289e6",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633155905931,
      },
      "e-107": {
        id: "e-107",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-108",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f354011994573c0b|07308b2b-7e38-9541-9d76-38759f143d2a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f354011994573c0b|07308b2b-7e38-9541-9d76-38759f143d2a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633156329280,
      },
      "e-109": {
        id: "e-109",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-110",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "83fa9c0f-9f58-1bc0-9017-625d808b454d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "83fa9c0f-9f58-1bc0-9017-625d808b454d",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633156680200,
      },
      "e-110": {
        id: "e-110",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-109",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "83fa9c0f-9f58-1bc0-9017-625d808b454d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "83fa9c0f-9f58-1bc0-9017-625d808b454d",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: "LEFT",
          effectIn: !0,
        },
        createdOn: 1633156680203,
      },
      "e-111": {
        id: "e-111",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-112",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f3540101e4573c02|802b7301-bf4d-5c95-1da2-f3db3dbeeec0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f3540101e4573c02|802b7301-bf4d-5c95-1da2-f3db3dbeeec0",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633157203271,
      },
      "e-117": {
        id: "e-117",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-118",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "83fa9c0f-9f58-1bc0-9017-625d808b4542",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "83fa9c0f-9f58-1bc0-9017-625d808b4542",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633164444786,
      },
      "e-119": {
        id: "e-119",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-120",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "83fa9c0f-9f58-1bc0-9017-625d808b454a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "83fa9c0f-9f58-1bc0-9017-625d808b454a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633164452861,
      },
      "e-121": {
        id: "e-121",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-122",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f3540101e4573c02|c19727b2-3b97-65c7-b36f-939a537ce06c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f3540101e4573c02|c19727b2-3b97-65c7-b36f-939a537ce06c",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633231060623,
      },
      "e-131": {
        id: "e-131",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-132",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f3540101e4573c02|984823bb-d969-0d30-457a-0756f2e31bf9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f3540101e4573c02|984823bb-d969-0d30-457a-0756f2e31bf9",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1633232206280,
      },
      "e-159": {
        id: "e-159",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-160",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".team-wrapper",
          originalId:
            "631ec895f3540101e4573c02|8833f803-bf43-2662-f04b-2a615336002a",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".team-wrapper",
            originalId:
              "631ec895f3540101e4573c02|8833f803-bf43-2662-f04b-2a615336002a",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1634091512756,
      },
      "e-160": {
        id: "e-160",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-24",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-159",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".team-wrapper",
          originalId:
            "631ec895f3540101e4573c02|8833f803-bf43-2662-f04b-2a615336002a",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".team-wrapper",
            originalId:
              "631ec895f3540101e4573c02|8833f803-bf43-2662-f04b-2a615336002a",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1634091512760,
      },
      "e-187": {
        id: "e-187",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-188",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".star-standard",
          originalId:
            "631ec895f354011994573c0b|1bedc593-4e76-3d90-16e0-d35bee1f4f18",
          appliesTo: "CLASS",
        },
        targets: [
          {
            id: "631ec895f354011994573c0b|1bedc593-4e76-3d90-16e0-d35bee1f4f18",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1634110973261,
      },
      "e-193": {
        id: "e-193",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-26",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-194",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".button-text",
          originalId:
            "631ec895f354017c63573bfb|a3edabb5-bef8-c6bd-6ba3-5f626f521458",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".button-text",
            originalId:
              "631ec895f354017c63573bfb|a3edabb5-bef8-c6bd-6ba3-5f626f521458",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1634190295937,
      },
      "e-194": {
        id: "e-194",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-27",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-193",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".button-text",
          originalId:
            "631ec895f354017c63573bfb|a3edabb5-bef8-c6bd-6ba3-5f626f521458",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".button-text",
            originalId:
              "631ec895f354017c63573bfb|a3edabb5-bef8-c6bd-6ba3-5f626f521458",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1634190295943,
      },
      "e-195": {
        id: "e-195",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-26",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-196",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".button-text-annual",
          originalId: "684cf77d-a9a2-1e43-195a-96f7ab64ede1",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".button-text-annual",
            originalId: "684cf77d-a9a2-1e43-195a-96f7ab64ede1",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1634190538961,
      },
      "e-196": {
        id: "e-196",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-27",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-195",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".button-text-annual",
          originalId: "684cf77d-a9a2-1e43-195a-96f7ab64ede1",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".button-text-annual",
            originalId: "684cf77d-a9a2-1e43-195a-96f7ab64ede1",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1634190538967,
      },
      "e-197": {
        id: "e-197",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-198",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f35401a399573c04|8ff57614-404f-9b05-4000-d00d879ed594",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f35401a399573c04|8ff57614-404f-9b05-4000-d00d879ed594",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1634257602579,
      },
      "e-201": {
        id: "e-201",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-202",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f35401a399573c04|8ff57614-404f-9b05-4000-d00d879ed593",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f35401a399573c04|8ff57614-404f-9b05-4000-d00d879ed593",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1634258177921,
      },
      "e-213": {
        id: "e-213",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-18",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-214",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "8d5387fe-f6d0-b300-ae8e-7a5d1bd1677b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "8d5387fe-f6d0-b300-ae8e-7a5d1bd1677b",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1634258232066,
      },
      "e-215": {
        id: "e-215",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-216",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "8d5387fe-f6d0-b300-ae8e-7a5d1bd1677d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "8d5387fe-f6d0-b300-ae8e-7a5d1bd1677d",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1634260358450,
      },
      "e-225": {
        id: "e-225",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-226",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "a2a600f4-d8ef-f683-ff91-a6bdb723d0a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "a2a600f4-d8ef-f683-ff91-a6bdb723d0a4",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1634260458231,
      },
      "e-227": {
        id: "e-227",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-228",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f35401a399573c04|e7cd25e2-8504-78ab-0d95-40ab5e85665d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f35401a399573c04|e7cd25e2-8504-78ab-0d95-40ab5e85665d",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1634265542241,
      },
      "e-237": {
        id: "e-237",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-238",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "a03bb5ac-c1be-a2dd-1d0c-3495f363b58f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "a03bb5ac-c1be-a2dd-1d0c-3495f363b58f",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1634266375600,
      },
      "e-245": {
        id: "e-245",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-246",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f35401a399573c04|b0662f5e-6dd2-9ff4-8ce6-4480e735195f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f35401a399573c04|b0662f5e-6dd2-9ff4-8ce6-4480e735195f",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1634267788903,
      },
      "e-253": {
        id: "e-253",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-254",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "a2a600f4-d8ef-f683-ff91-a6bdb723d09e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "a2a600f4-d8ef-f683-ff91-a6bdb723d09e",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1635138204364,
      },
      "e-255": {
        id: "e-255",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-256",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f354011994573c0b|70681d57-e14c-725f-250e-bcdbad6a72d5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f354011994573c0b|70681d57-e14c-725f-250e-bcdbad6a72d5",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662965676494,
      },
      "e-257": {
        id: "e-257",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-258",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f354011994573c0b|70681d57-e14c-725f-250e-bcdbad6a72d6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f354011994573c0b|70681d57-e14c-725f-250e-bcdbad6a72d6",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662965676494,
      },
      "e-259": {
        id: "e-259",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-260",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f354011994573c0b|70681d57-e14c-725f-250e-bcdbad6a72d9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f354011994573c0b|70681d57-e14c-725f-250e-bcdbad6a72d9",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662965676494,
      },
      "e-261": {
        id: "e-261",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-17",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-262",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f354011994573c0b|70681d57-e14c-725f-250e-bcdbad6a72fa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "631ec895f354011994573c0b|70681d57-e14c-725f-250e-bcdbad6a72fa",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662965676494,
      },
      "e-263": {
        id: "e-263",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-264",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f35401a399573c04|5e1bd987-2655-fe13-98c7-7be3bcc2e68d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662967757190,
      },
      "e-265": {
        id: "e-265",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-266",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f35401a399573c04|2879c79d-1a4a-d09c-1616-0902a154f810",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662967817308,
      },
      "e-267": {
        id: "e-267",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-268",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f3540101e4573c02|8db5ff88-aac7-390e-f042-166a8cf0f2f2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662969580645,
      },
      "e-269": {
        id: "e-269",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-270",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f3540101e4573c02|d16d21e7-bb7e-b027-3d0b-73fed75b9acd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662969581111,
      },
      "e-271": {
        id: "e-271",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-272",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f3540101e4573c02|6b73ff81-9b2a-9ff6-896d-0145c018c9bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662969582114,
      },
      "e-273": {
        id: "e-273",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-274",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f3540101e4573c02|e575a36e-aeee-340f-ca46-efb67a95a2b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662969582350,
      },
      "e-275": {
        id: "e-275",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-276",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f3540101e4573c02|d52abecf-c290-0677-9654-73aa8aee425d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662969582792,
      },
      "e-277": {
        id: "e-277",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-278",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "631ec895f3540101e4573c02|ba787d5a-7143-9e43-2e29-d0671a0cd28f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1662969836436,
      },
    },
    actionLists: {
      a: {
        id: "a",
        title: "Project â†’ Hover",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".service-star",
                    selectorGuids: ["d917ceb6-0b36-fb08-2e1c-ec85ccce06a6"],
                  },
                  xValue: 40,
                  yValue: -40,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".service-star",
                    selectorGuids: ["d917ceb6-0b36-fb08-2e1c-ec85ccce06a6"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-n",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354017c63573bfb|1f59b9c7-fefb-e97e-7701-a5e513b053d8",
                  },
                  globalSwatchId: "7a51e4e4",
                  rValue: 31,
                  bValue: 89,
                  gValue: 75,
                  aValue: 1,
                },
              },
              {
                id: "a-n-2",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".card-title",
                    selectorGuids: ["15262bb2-97a0-b7c0-b95b-b233bccf5b23"],
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1,
                },
              },
              {
                id: "a-n-3",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".service-paragraph",
                    selectorGuids: ["33b56425-1a1c-ae47-5dd2-a0f36532ed4d"],
                  },
                  globalSwatchId: "3488fc8e",
                  rValue: 221,
                  bValue: 228,
                  gValue: 227,
                  aValue: 1,
                },
              },
              {
                id: "a-n-4",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-text-remove",
                    selectorGuids: ["d8e25832-510d-8a8d-cfb3-69c6209b9169"],
                  },
                  globalSwatchId: "cf0aa01c",
                  rValue: 236,
                  bValue: 217,
                  gValue: 232,
                  aValue: 1,
                },
              },
              {
                id: "a-n-7",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "easeOut",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".service-star",
                    selectorGuids: ["d917ceb6-0b36-fb08-2e1c-ec85ccce06a6"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-n-8",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "easeOut",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".service-star",
                    selectorGuids: ["d917ceb6-0b36-fb08-2e1c-ec85ccce06a6"],
                  },
                  xValue: 0,
                  yValue: 0,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-n-9",
                actionTypeId: "STYLE_FILTER",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-arrow-small",
                    selectorGuids: ["3d0eb2ae-2650-badf-a1bb-b2f6db1896d7"],
                  },
                  filters: [
                    { type: "invert", filterId: "8fca", value: 100, unit: "%" },
                  ],
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1630897864870,
      },
      "a-2": {
        id: "a-2",
        title: "Project â†’ Hover Out",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-2-n-3",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354017c63573bfb|1f59b9c7-fefb-e97e-7701-a5e513b053d8",
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1,
                },
              },
              {
                id: "a-2-n-4",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".card-title",
                    selectorGuids: ["15262bb2-97a0-b7c0-b95b-b233bccf5b23"],
                  },
                  globalSwatchId: "3aab2cf5",
                  rValue: 16,
                  bValue: 38,
                  gValue: 34,
                  aValue: 1,
                },
              },
              {
                id: "a-2-n-5",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".service-paragraph",
                    selectorGuids: ["33b56425-1a1c-ae47-5dd2-a0f36532ed4d"],
                  },
                  globalSwatchId: "d6e59d17",
                  rValue: 72,
                  bValue: 96,
                  gValue: 91,
                  aValue: 1,
                },
              },
              {
                id: "a-2-n-6",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-text-remove",
                    selectorGuids: ["d8e25832-510d-8a8d-cfb3-69c6209b9169"],
                  },
                  globalSwatchId: "3aab2cf5",
                  rValue: 16,
                  bValue: 38,
                  gValue: 34,
                  aValue: 1,
                },
              },
              {
                id: "a-2-n-7",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "easeOut",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".service-star",
                    selectorGuids: ["d917ceb6-0b36-fb08-2e1c-ec85ccce06a6"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-2-n-8",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "easeOut",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".service-star",
                    selectorGuids: ["d917ceb6-0b36-fb08-2e1c-ec85ccce06a6"],
                  },
                  xValue: 40,
                  yValue: -40,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-2-n-9",
                actionTypeId: "STYLE_FILTER",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-arrow-small",
                    selectorGuids: ["3d0eb2ae-2650-badf-a1bb-b2f6db1896d7"],
                  },
                  filters: [
                    { type: "invert", filterId: "e482", value: 0, unit: "%" },
                  ],
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1630897864870,
      },
      "a-28": {
        id: "a-28",
        title: "Home Page Load",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-28-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "631ec895f354017c63573bfb|a2606948-494f-bd98-6ed5-14ae39b7979e",
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-28-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "631ec895f354017c63573bfb|a2606948-494f-bd98-6ed5-14ae39b7979e",
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1634268206702,
      },
      "a-4": {
        id: "a-4",
        title: "Star Spinner",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-4-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 400,
                  easing: "inOutQuint",
                  duration: 3e3,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354017c63573bfb|0afba1a1-7275-cf80-3fcf-e6c723623db7",
                  },
                  zValue: 180,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-4-n-3",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 400,
                  easing: "inOutQuint",
                  duration: 2e3,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354017c63573bfb|0afba1a1-7275-cf80-3fcf-e6c723623db7",
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1630910032620,
      },
      "a-9": {
        id: "a-9",
        title: "FAQ â†’ Open",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-9-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-content",
                    selectorGuids: ["4d0b156e-037e-6239-f99b-0388d8de9ebc"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-9-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-content",
                    selectorGuids: ["4d0b156e-037e-6239-f99b-0388d8de9ebc"],
                  },
                  widthUnit: "PX",
                  heightUnit: "AUTO",
                  locked: !1,
                },
              },
              {
                id: "a-9-n-3",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-question-wrap",
                    selectorGuids: ["4d0b156e-037e-6239-f99b-0388d8de9eb8"],
                  },
                  globalSwatchId: "3aab2cf5",
                  rValue: 16,
                  bValue: 38,
                  gValue: 34,
                  aValue: 1,
                },
              },
              {
                id: "a-9-n-4",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-title",
                    selectorGuids: ["4d0b156e-037e-6239-f99b-0388d8de9eba"],
                  },
                  globalSwatchId: "9b0d7288",
                  rValue: 241,
                  bValue: 243,
                  gValue: 243,
                  aValue: 1,
                },
              },
              {
                id: "a-9-n-5",
                actionTypeId: "STYLE_FILTER",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-plus",
                    selectorGuids: ["4d0b156e-037e-6239-f99b-0388d8de9ebb"],
                  },
                  filters: [
                    { type: "invert", filterId: "ee61", value: 100, unit: "%" },
                  ],
                },
              },
              {
                id: "a-9-n-6",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-plus",
                    selectorGuids: ["4d0b156e-037e-6239-f99b-0388d8de9ebb"],
                  },
                  zValue: 45,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1546944883191,
      },
      "a-10": {
        id: "a-10",
        title: "FAQ â†’ Close",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-10-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-content",
                    selectorGuids: ["4d0b156e-037e-6239-f99b-0388d8de9ebc"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "PX",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-10-n-2",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-question-wrap",
                    selectorGuids: ["4d0b156e-037e-6239-f99b-0388d8de9eb8"],
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1,
                },
              },
              {
                id: "a-10-n-3",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-title",
                    selectorGuids: ["4d0b156e-037e-6239-f99b-0388d8de9eba"],
                  },
                  globalSwatchId: "c2ada2d6",
                  rValue: 10,
                  bValue: 27,
                  gValue: 7,
                  aValue: 1,
                },
              },
              {
                id: "a-10-n-4",
                actionTypeId: "STYLE_FILTER",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-plus",
                    selectorGuids: ["4d0b156e-037e-6239-f99b-0388d8de9ebb"],
                  },
                  filters: [
                    { type: "invert", filterId: "ee61", value: 0, unit: "%" },
                  ],
                },
              },
              {
                id: "a-10-n-5",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-plus",
                    selectorGuids: ["4d0b156e-037e-6239-f99b-0388d8de9ebb"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1546944883191,
      },
      "a-11": {
        id: "a-11",
        title: "Hero Card Loop",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-11-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outSine",
                  duration: 1e3,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354017c63573bfb|a2606948-494f-bd98-6ed5-14ae39b797b2",
                  },
                  yValue: 14,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-11-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outSine",
                  duration: 1500,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354017c63573bfb|a2606948-494f-bd98-6ed5-14ae39b797b2",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1633052733034,
      },
      "a-17": {
        id: "a-17",
        title: "Interaction Right / 1",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-17-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "6136c18553f5f13886fb5d36|09056def-fae7-7241-e42a-d4d6f5af5f21",
                  },
                  xValue: 35,
                  yValue: null,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-17-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "6136c18553f5f13886fb5d36|09056def-fae7-7241-e42a-d4d6f5af5f21",
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-17-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 200,
                  easing: "outQuint",
                  duration: 1e3,
                  target: {
                    useEventTarget: !0,
                    id: "6136c18553f5f13886fb5d36|09056def-fae7-7241-e42a-d4d6f5af5f21",
                  },
                  xValue: 0,
                  yValue: null,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-17-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 200,
                  easing: "outQuint",
                  duration: 1e3,
                  target: {
                    useEventTarget: !0,
                    id: "6136c18553f5f13886fb5d36|09056def-fae7-7241-e42a-d4d6f5af5f21",
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1616730555397,
      },
      "a-12": {
        id: "a-12",
        title: "Interaction / 1",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-12-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354015f68573c08|487dbb90-6fdc-47c4-28a3-318684e1cae2",
                  },
                  yValue: 55,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-12-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354015f68573c08|487dbb90-6fdc-47c4-28a3-318684e1cae2",
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-12-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 200,
                  easing: "outQuint",
                  duration: 1e3,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354015f68573c08|487dbb90-6fdc-47c4-28a3-318684e1cae2",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-12-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 200,
                  easing: "outQuint",
                  duration: 1e3,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354015f68573c08|487dbb90-6fdc-47c4-28a3-318684e1cae2",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1616730555397,
      },
      "a-13": {
        id: "a-13",
        title: "Interaction / 2",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-13-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354015f68573c08|487dbb90-6fdc-47c4-28a3-318684e1cae2",
                  },
                  yValue: 55,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-13-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354015f68573c08|487dbb90-6fdc-47c4-28a3-318684e1cae2",
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-13-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 400,
                  easing: "outQuint",
                  duration: 1e3,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354015f68573c08|487dbb90-6fdc-47c4-28a3-318684e1cae2",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-13-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 400,
                  easing: "outQuint",
                  duration: 1e3,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354015f68573c08|487dbb90-6fdc-47c4-28a3-318684e1cae2",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1616730555397,
      },
      "a-14": {
        id: "a-14",
        title: "Interaction / 3",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-14-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354015f68573c08|487dbb90-6fdc-47c4-28a3-318684e1cae2",
                  },
                  yValue: 55,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-14-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354015f68573c08|487dbb90-6fdc-47c4-28a3-318684e1cae2",
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-14-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 600,
                  easing: "outQuint",
                  duration: 1e3,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354015f68573c08|487dbb90-6fdc-47c4-28a3-318684e1cae2",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-14-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 600,
                  easing: "outQuint",
                  duration: 1e3,
                  target: {
                    useEventTarget: !0,
                    id: "631ec895f354015f68573c08|487dbb90-6fdc-47c4-28a3-318684e1cae2",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1616730555397,
      },
      "a-21": {
        id: "a-21",
        title: "Blog â†’ Hover",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-21-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 1e3,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".blog-thumbnail",
                    selectorGuids: ["e591bc6f-618a-9d2d-12aa-3b60075ea0ae"],
                  },
                  xValue: 1.1,
                  yValue: 1.1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1633156684507,
      },
      "a-22": {
        id: "a-22",
        title: "Blog â†’ Hover Out",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-22-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 1e3,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".blog-thumbnail",
                    selectorGuids: ["e591bc6f-618a-9d2d-12aa-3b60075ea0ae"],
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1633156684507,
      },
      "a-23": {
        id: "a-23",
        title: "Team â†’ Hover",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-23-n",
                actionTypeId: "STYLE_FILTER",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".team-member",
                    selectorGuids: ["d27f3f8d-9935-724f-9ff1-e5cd253b250e"],
                  },
                  filters: [
                    {
                      type: "saturate",
                      filterId: "490f",
                      value: 100,
                      unit: "%",
                    },
                  ],
                },
              },
              {
                id: "a-23-n-2",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".team-image-wrapper",
                    selectorGuids: ["78e0ba33-a006-36cb-d5bd-77d854f853f6"],
                  },
                  globalSwatchId: "cf0aa01c",
                  rValue: 236,
                  bValue: 217,
                  gValue: 232,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1634091517027,
      },
      "a-24": {
        id: "a-24",
        title: "Team â†’ Hover Out",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-24-n",
                actionTypeId: "STYLE_FILTER",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".team-member",
                    selectorGuids: ["d27f3f8d-9935-724f-9ff1-e5cd253b250e"],
                  },
                  filters: [
                    { type: "saturate", filterId: "490f", value: 0, unit: "%" },
                  ],
                },
              },
              {
                id: "a-24-n-2",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".team-image-wrapper",
                    selectorGuids: ["78e0ba33-a006-36cb-d5bd-77d854f853f6"],
                  },
                  globalSwatchId: "9b0d7288",
                  rValue: 241,
                  bValue: 243,
                  gValue: 243,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1634091517027,
      },
      "a-26": {
        id: "a-26",
        title: "Button â†’ Hover",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-26-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-arrow-small",
                    selectorGuids: ["3d0eb2ae-2650-badf-a1bb-b2f6db1896d7"],
                  },
                  xValue: 4,
                  xUnit: "px",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1546944883191,
      },
      "a-27": {
        id: "a-27",
        title: "Button â†’ Hover Out",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-27-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".button-arrow-small",
                    selectorGuids: ["3d0eb2ae-2650-badf-a1bb-b2f6db1896d7"],
                  },
                  xValue: 0,
                  xUnit: "px",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1546944883191,
      },
      "a-18": {
        id: "a-18",
        title: "Interaction Right / 2",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-18-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "6136c18553f5f13886fb5d36|09056def-fae7-7241-e42a-d4d6f5af5f21",
                  },
                  xValue: 35,
                  yValue: null,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-18-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "6136c18553f5f13886fb5d36|09056def-fae7-7241-e42a-d4d6f5af5f21",
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-18-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 400,
                  easing: "outQuint",
                  duration: 1e3,
                  target: {
                    useEventTarget: !0,
                    id: "6136c18553f5f13886fb5d36|09056def-fae7-7241-e42a-d4d6f5af5f21",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-18-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 400,
                  easing: "outQuint",
                  duration: 1e3,
                  target: {
                    useEventTarget: !0,
                    id: "6136c18553f5f13886fb5d36|09056def-fae7-7241-e42a-d4d6f5af5f21",
                  },
                  xValue: 0,
                  yValue: null,
                  xUnit: "px",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1616730555397,
      },
    },
    site: {
      mediaQueries: [
        { key: "main", min: 992, max: 1e4 },
        { key: "medium", min: 768, max: 991 },
        { key: "small", min: 480, max: 767 },
        { key: "tiny", min: 0, max: 479 },
      ],
    },
  });
