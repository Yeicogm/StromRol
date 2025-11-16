(function () {
  const J = document.createElement("link").relList;
  if (J && J.supports && J.supports("modulepreload")) return;
  for (const x of document.querySelectorAll('link[rel="modulepreload"]')) m(x);
  new MutationObserver((x) => {
    for (const U of x)
      if (U.type === "childList")
        for (const G of U.addedNodes)
          G.tagName === "LINK" && G.rel === "modulepreload" && m(G);
  }).observe(document, { childList: !0, subtree: !0 });
  function B(x) {
    const U = {};
    return (
      x.integrity && (U.integrity = x.integrity),
      x.referrerPolicy && (U.referrerPolicy = x.referrerPolicy),
      x.crossOrigin === "use-credentials"
        ? (U.credentials = "include")
        : x.crossOrigin === "anonymous"
        ? (U.credentials = "omit")
        : (U.credentials = "same-origin"),
      U
    );
  }
  function m(x) {
    if (x.ep) return;
    x.ep = !0;
    const U = B(x);
    fetch(x.href, U);
  }
})();
var nf = { exports: {} },
  Du = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed;
function qm() {
  if (ed) return Du;
  ed = 1;
  var M = Symbol.for("react.transitional.element"),
    J = Symbol.for("react.fragment");
  function B(m, x, U) {
    var G = null;
    if (
      (U !== void 0 && (G = "" + U),
      x.key !== void 0 && (G = "" + x.key),
      "key" in x)
    ) {
      U = {};
      for (var aa in x) aa !== "key" && (U[aa] = x[aa]);
    } else U = x;
    return (
      (x = U.ref),
      { $$typeof: M, type: m, key: G, ref: x !== void 0 ? x : null, props: U }
    );
  }
  return (Du.Fragment = J), (Du.jsx = B), (Du.jsxs = B), Du;
}
var ud;
function Cm() {
  return ud || ((ud = 1), (nf.exports = qm())), nf.exports;
}
var s = Cm(),
  cf = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd;
function Bm() {
  if (nd) return $;
  nd = 1;
  var M = Symbol.for("react.transitional.element"),
    J = Symbol.for("react.portal"),
    B = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    x = Symbol.for("react.profiler"),
    U = Symbol.for("react.consumer"),
    G = Symbol.for("react.context"),
    aa = Symbol.for("react.forward_ref"),
    q = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    k = Symbol.iterator;
  function la(r) {
    return r === null || typeof r != "object"
      ? null
      : ((r = (k && r[k]) || r["@@iterator"]),
        typeof r == "function" ? r : null);
  }
  var ca = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ea = Object.assign,
    wa = {};
  function Oa(r, _, R) {
    (this.props = r),
      (this.context = _),
      (this.refs = wa),
      (this.updater = R || ca);
  }
  (Oa.prototype.isReactComponent = {}),
    (Oa.prototype.setState = function (r, _) {
      if (typeof r != "object" && typeof r != "function" && r != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, r, _, "setState");
    }),
    (Oa.prototype.forceUpdate = function (r) {
      this.updater.enqueueForceUpdate(this, r, "forceUpdate");
    });
  function ia() {}
  ia.prototype = Oa.prototype;
  function Ma(r, _, R) {
    (this.props = r),
      (this.context = _),
      (this.refs = wa),
      (this.updater = R || ca);
  }
  var w = (Ma.prototype = new ia());
  (w.constructor = Ma), Ea(w, Oa.prototype), (w.isPureReactComponent = !0);
  var il = Array.isArray,
    O = { H: null, A: null, T: null, S: null, V: null },
    $a = Object.prototype.hasOwnProperty;
  function ta(r, _, R, D, d, A) {
    return (
      (R = A.ref),
      { $$typeof: M, type: r, key: _, ref: R !== void 0 ? R : null, props: A }
    );
  }
  function Wa(r, _) {
    return ta(r.type, _, void 0, void 0, void 0, r.props);
  }
  function Ba(r) {
    return typeof r == "object" && r !== null && r.$$typeof === M;
  }
  function Ml(r) {
    var _ = { "=": "=0", ":": "=2" };
    return (
      "$" +
      r.replace(/[=:]/g, function (R) {
        return _[R];
      })
    );
  }
  var Da = /\/+/g;
  function ba(r, _) {
    return typeof r == "object" && r !== null && r.key != null
      ? Ml("" + r.key)
      : _.toString(36);
  }
  function Dl() {}
  function Cl(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (
          (typeof r.status == "string"
            ? r.then(Dl, Dl)
            : ((r.status = "pending"),
              r.then(
                function (_) {
                  r.status === "pending" &&
                    ((r.status = "fulfilled"), (r.value = _));
                },
                function (_) {
                  r.status === "pending" &&
                    ((r.status = "rejected"), (r.reason = _));
                }
              )),
          r.status)
        ) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason;
        }
    }
    throw r;
  }
  function Na(r, _, R, D, d) {
    var A = typeof r;
    (A === "undefined" || A === "boolean") && (r = null);
    var N = !1;
    if (r === null) N = !0;
    else
      switch (A) {
        case "bigint":
        case "string":
        case "number":
          N = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case M:
            case J:
              N = !0;
              break;
            case C:
              return (N = r._init), Na(N(r._payload), _, R, D, d);
          }
      }
    if (N)
      return (
        (d = d(r)),
        (N = D === "" ? "." + ba(r, 0) : D),
        il(d)
          ? ((R = ""),
            N != null && (R = N.replace(Da, "$&/") + "/"),
            Na(d, _, R, "", function (ja) {
              return ja;
            }))
          : d != null &&
            (Ba(d) &&
              (d = Wa(
                d,
                R +
                  (d.key == null || (r && r.key === d.key)
                    ? ""
                    : ("" + d.key).replace(Da, "$&/") + "/") +
                  N
              )),
            _.push(d)),
        1
      );
    N = 0;
    var X = D === "" ? "." : D + ":";
    if (il(r))
      for (var Q = 0; Q < r.length; Q++)
        (D = r[Q]), (A = X + ba(D, Q)), (N += Na(D, _, R, A, d));
    else if (((Q = la(r)), typeof Q == "function"))
      for (r = Q.call(r), Q = 0; !(D = r.next()).done; )
        (D = D.value), (A = X + ba(D, Q++)), (N += Na(D, _, R, A, d));
    else if (A === "object") {
      if (typeof r.then == "function") return Na(Cl(r), _, R, D, d);
      throw (
        ((_ = String(r)),
        Error(
          "Objects are not valid as a React child (found: " +
            (_ === "[object Object]"
              ? "object with keys {" + Object.keys(r).join(", ") + "}"
              : _) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return N;
  }
  function S(r, _, R) {
    if (r == null) return r;
    var D = [],
      d = 0;
    return (
      Na(r, D, "", "", function (A) {
        return _.call(R, A, d++);
      }),
      D
    );
  }
  function j(r) {
    if (r._status === -1) {
      var _ = r._result;
      (_ = _()),
        _.then(
          function (R) {
            (r._status === 0 || r._status === -1) &&
              ((r._status = 1), (r._result = R));
          },
          function (R) {
            (r._status === 0 || r._status === -1) &&
              ((r._status = 2), (r._result = R));
          }
        ),
        r._status === -1 && ((r._status = 0), (r._result = _));
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var Z =
    typeof reportError == "function"
      ? reportError
      : function (r) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var _ = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof r == "object" &&
                r !== null &&
                typeof r.message == "string"
                  ? String(r.message)
                  : String(r),
              error: r,
            });
            if (!window.dispatchEvent(_)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", r);
            return;
          }
          console.error(r);
        };
  function sa() {}
  return (
    ($.Children = {
      map: S,
      forEach: function (r, _, R) {
        S(
          r,
          function () {
            _.apply(this, arguments);
          },
          R
        );
      },
      count: function (r) {
        var _ = 0;
        return (
          S(r, function () {
            _++;
          }),
          _
        );
      },
      toArray: function (r) {
        return (
          S(r, function (_) {
            return _;
          }) || []
        );
      },
      only: function (r) {
        if (!Ba(r))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return r;
      },
    }),
    ($.Component = Oa),
    ($.Fragment = B),
    ($.Profiler = x),
    ($.PureComponent = Ma),
    ($.StrictMode = m),
    ($.Suspense = q),
    ($.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O),
    ($.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (r) {
        return O.H.useMemoCache(r);
      },
    }),
    ($.cache = function (r) {
      return function () {
        return r.apply(null, arguments);
      };
    }),
    ($.cloneElement = function (r, _, R) {
      if (r == null)
        throw Error(
          "The argument must be a React element, but you passed " + r + "."
        );
      var D = Ea({}, r.props),
        d = r.key,
        A = void 0;
      if (_ != null)
        for (N in (_.ref !== void 0 && (A = void 0),
        _.key !== void 0 && (d = "" + _.key),
        _))
          !$a.call(_, N) ||
            N === "key" ||
            N === "__self" ||
            N === "__source" ||
            (N === "ref" && _.ref === void 0) ||
            (D[N] = _[N]);
      var N = arguments.length - 2;
      if (N === 1) D.children = R;
      else if (1 < N) {
        for (var X = Array(N), Q = 0; Q < N; Q++) X[Q] = arguments[Q + 2];
        D.children = X;
      }
      return ta(r.type, d, void 0, void 0, A, D);
    }),
    ($.createContext = function (r) {
      return (
        (r = {
          $$typeof: G,
          _currentValue: r,
          _currentValue2: r,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (r.Provider = r),
        (r.Consumer = { $$typeof: U, _context: r }),
        r
      );
    }),
    ($.createElement = function (r, _, R) {
      var D,
        d = {},
        A = null;
      if (_ != null)
        for (D in (_.key !== void 0 && (A = "" + _.key), _))
          $a.call(_, D) &&
            D !== "key" &&
            D !== "__self" &&
            D !== "__source" &&
            (d[D] = _[D]);
      var N = arguments.length - 2;
      if (N === 1) d.children = R;
      else if (1 < N) {
        for (var X = Array(N), Q = 0; Q < N; Q++) X[Q] = arguments[Q + 2];
        d.children = X;
      }
      if (r && r.defaultProps)
        for (D in ((N = r.defaultProps), N)) d[D] === void 0 && (d[D] = N[D]);
      return ta(r, A, void 0, void 0, null, d);
    }),
    ($.createRef = function () {
      return { current: null };
    }),
    ($.forwardRef = function (r) {
      return { $$typeof: aa, render: r };
    }),
    ($.isValidElement = Ba),
    ($.lazy = function (r) {
      return { $$typeof: C, _payload: { _status: -1, _result: r }, _init: j };
    }),
    ($.memo = function (r, _) {
      return { $$typeof: p, type: r, compare: _ === void 0 ? null : _ };
    }),
    ($.startTransition = function (r) {
      var _ = O.T,
        R = {};
      O.T = R;
      try {
        var D = r(),
          d = O.S;
        d !== null && d(R, D),
          typeof D == "object" &&
            D !== null &&
            typeof D.then == "function" &&
            D.then(sa, Z);
      } catch (A) {
        Z(A);
      } finally {
        O.T = _;
      }
    }),
    ($.unstable_useCacheRefresh = function () {
      return O.H.useCacheRefresh();
    }),
    ($.use = function (r) {
      return O.H.use(r);
    }),
    ($.useActionState = function (r, _, R) {
      return O.H.useActionState(r, _, R);
    }),
    ($.useCallback = function (r, _) {
      return O.H.useCallback(r, _);
    }),
    ($.useContext = function (r) {
      return O.H.useContext(r);
    }),
    ($.useDebugValue = function () {}),
    ($.useDeferredValue = function (r, _) {
      return O.H.useDeferredValue(r, _);
    }),
    ($.useEffect = function (r, _, R) {
      var D = O.H;
      if (typeof R == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return D.useEffect(r, _);
    }),
    ($.useId = function () {
      return O.H.useId();
    }),
    ($.useImperativeHandle = function (r, _, R) {
      return O.H.useImperativeHandle(r, _, R);
    }),
    ($.useInsertionEffect = function (r, _) {
      return O.H.useInsertionEffect(r, _);
    }),
    ($.useLayoutEffect = function (r, _) {
      return O.H.useLayoutEffect(r, _);
    }),
    ($.useMemo = function (r, _) {
      return O.H.useMemo(r, _);
    }),
    ($.useOptimistic = function (r, _) {
      return O.H.useOptimistic(r, _);
    }),
    ($.useReducer = function (r, _, R) {
      return O.H.useReducer(r, _, R);
    }),
    ($.useRef = function (r) {
      return O.H.useRef(r);
    }),
    ($.useState = function (r) {
      return O.H.useState(r);
    }),
    ($.useSyncExternalStore = function (r, _, R) {
      return O.H.useSyncExternalStore(r, _, R);
    }),
    ($.useTransition = function () {
      return O.H.useTransition();
    }),
    ($.version = "19.1.1"),
    $
  );
}
var cd;
function df() {
  return cd || ((cd = 1), (cf.exports = Bm())), cf.exports;
}
var Ha = df(),
  ff = { exports: {} },
  ju = {},
  sf = { exports: {} },
  rf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var id;
function Ym() {
  return (
    id ||
      ((id = 1),
      (function (M) {
        function J(S, j) {
          var Z = S.length;
          S.push(j);
          a: for (; 0 < Z; ) {
            var sa = (Z - 1) >>> 1,
              r = S[sa];
            if (0 < x(r, j)) (S[sa] = j), (S[Z] = r), (Z = sa);
            else break a;
          }
        }
        function B(S) {
          return S.length === 0 ? null : S[0];
        }
        function m(S) {
          if (S.length === 0) return null;
          var j = S[0],
            Z = S.pop();
          if (Z !== j) {
            S[0] = Z;
            a: for (var sa = 0, r = S.length, _ = r >>> 1; sa < _; ) {
              var R = 2 * (sa + 1) - 1,
                D = S[R],
                d = R + 1,
                A = S[d];
              if (0 > x(D, Z))
                d < r && 0 > x(A, D)
                  ? ((S[sa] = A), (S[d] = Z), (sa = d))
                  : ((S[sa] = D), (S[R] = Z), (sa = R));
              else if (d < r && 0 > x(A, Z)) (S[sa] = A), (S[d] = Z), (sa = d);
              else break a;
            }
          }
          return j;
        }
        function x(S, j) {
          var Z = S.sortIndex - j.sortIndex;
          return Z !== 0 ? Z : S.id - j.id;
        }
        if (
          ((M.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var U = performance;
          M.unstable_now = function () {
            return U.now();
          };
        } else {
          var G = Date,
            aa = G.now();
          M.unstable_now = function () {
            return G.now() - aa;
          };
        }
        var q = [],
          p = [],
          C = 1,
          k = null,
          la = 3,
          ca = !1,
          Ea = !1,
          wa = !1,
          Oa = !1,
          ia = typeof setTimeout == "function" ? setTimeout : null,
          Ma = typeof clearTimeout == "function" ? clearTimeout : null,
          w = typeof setImmediate < "u" ? setImmediate : null;
        function il(S) {
          for (var j = B(p); j !== null; ) {
            if (j.callback === null) m(p);
            else if (j.startTime <= S)
              m(p), (j.sortIndex = j.expirationTime), J(q, j);
            else break;
            j = B(p);
          }
        }
        function O(S) {
          if (((wa = !1), il(S), !Ea))
            if (B(q) !== null) (Ea = !0), $a || (($a = !0), ba());
            else {
              var j = B(p);
              j !== null && Na(O, j.startTime - S);
            }
        }
        var $a = !1,
          ta = -1,
          Wa = 5,
          Ba = -1;
        function Ml() {
          return Oa ? !0 : !(M.unstable_now() - Ba < Wa);
        }
        function Da() {
          if (((Oa = !1), $a)) {
            var S = M.unstable_now();
            Ba = S;
            var j = !0;
            try {
              a: {
                (Ea = !1), wa && ((wa = !1), Ma(ta), (ta = -1)), (ca = !0);
                var Z = la;
                try {
                  l: {
                    for (
                      il(S), k = B(q);
                      k !== null && !(k.expirationTime > S && Ml());

                    ) {
                      var sa = k.callback;
                      if (typeof sa == "function") {
                        (k.callback = null), (la = k.priorityLevel);
                        var r = sa(k.expirationTime <= S);
                        if (((S = M.unstable_now()), typeof r == "function")) {
                          (k.callback = r), il(S), (j = !0);
                          break l;
                        }
                        k === B(q) && m(q), il(S);
                      } else m(q);
                      k = B(q);
                    }
                    if (k !== null) j = !0;
                    else {
                      var _ = B(p);
                      _ !== null && Na(O, _.startTime - S), (j = !1);
                    }
                  }
                  break a;
                } finally {
                  (k = null), (la = Z), (ca = !1);
                }
                j = void 0;
              }
            } finally {
              j ? ba() : ($a = !1);
            }
          }
        }
        var ba;
        if (typeof w == "function")
          ba = function () {
            w(Da);
          };
        else if (typeof MessageChannel < "u") {
          var Dl = new MessageChannel(),
            Cl = Dl.port2;
          (Dl.port1.onmessage = Da),
            (ba = function () {
              Cl.postMessage(null);
            });
        } else
          ba = function () {
            ia(Da, 0);
          };
        function Na(S, j) {
          ta = ia(function () {
            S(M.unstable_now());
          }, j);
        }
        (M.unstable_IdlePriority = 5),
          (M.unstable_ImmediatePriority = 1),
          (M.unstable_LowPriority = 4),
          (M.unstable_NormalPriority = 3),
          (M.unstable_Profiling = null),
          (M.unstable_UserBlockingPriority = 2),
          (M.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (M.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Wa = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (M.unstable_getCurrentPriorityLevel = function () {
            return la;
          }),
          (M.unstable_next = function (S) {
            switch (la) {
              case 1:
              case 2:
              case 3:
                var j = 3;
                break;
              default:
                j = la;
            }
            var Z = la;
            la = j;
            try {
              return S();
            } finally {
              la = Z;
            }
          }),
          (M.unstable_requestPaint = function () {
            Oa = !0;
          }),
          (M.unstable_runWithPriority = function (S, j) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var Z = la;
            la = S;
            try {
              return j();
            } finally {
              la = Z;
            }
          }),
          (M.unstable_scheduleCallback = function (S, j, Z) {
            var sa = M.unstable_now();
            switch (
              (typeof Z == "object" && Z !== null
                ? ((Z = Z.delay),
                  (Z = typeof Z == "number" && 0 < Z ? sa + Z : sa))
                : (Z = sa),
              S)
            ) {
              case 1:
                var r = -1;
                break;
              case 2:
                r = 250;
                break;
              case 5:
                r = 1073741823;
                break;
              case 4:
                r = 1e4;
                break;
              default:
                r = 5e3;
            }
            return (
              (r = Z + r),
              (S = {
                id: C++,
                callback: j,
                priorityLevel: S,
                startTime: Z,
                expirationTime: r,
                sortIndex: -1,
              }),
              Z > sa
                ? ((S.sortIndex = Z),
                  J(p, S),
                  B(q) === null &&
                    S === B(p) &&
                    (wa ? (Ma(ta), (ta = -1)) : (wa = !0), Na(O, Z - sa)))
                : ((S.sortIndex = r),
                  J(q, S),
                  Ea || ca || ((Ea = !0), $a || (($a = !0), ba()))),
              S
            );
          }),
          (M.unstable_shouldYield = Ml),
          (M.unstable_wrapCallback = function (S) {
            var j = la;
            return function () {
              var Z = la;
              la = j;
              try {
                return S.apply(this, arguments);
              } finally {
                la = Z;
              }
            };
          });
      })(rf)),
    rf
  );
}
var fd;
function Xm() {
  return fd || ((fd = 1), (sf.exports = Ym())), sf.exports;
}
var of = { exports: {} },
  Pa = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sd;
function Gm() {
  if (sd) return Pa;
  sd = 1;
  var M = df();
  function J(q) {
    var p = "https://react.dev/errors/" + q;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        p += "&args[]=" + encodeURIComponent(arguments[C]);
    }
    return (
      "Minified React error #" +
      q +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function B() {}
  var m = {
      d: {
        f: B,
        r: function () {
          throw Error(J(522));
        },
        D: B,
        C: B,
        L: B,
        m: B,
        X: B,
        S: B,
        M: B,
      },
      p: 0,
      findDOMNode: null,
    },
    x = Symbol.for("react.portal");
  function U(q, p, C) {
    var k =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: x,
      key: k == null ? null : "" + k,
      children: q,
      containerInfo: p,
      implementation: C,
    };
  }
  var G = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function aa(q, p) {
    if (q === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (Pa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m),
    (Pa.createPortal = function (q, p) {
      var C =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(J(299));
      return U(q, p, null, C);
    }),
    (Pa.flushSync = function (q) {
      var p = G.T,
        C = m.p;
      try {
        if (((G.T = null), (m.p = 2), q)) return q();
      } finally {
        (G.T = p), (m.p = C), m.d.f();
      }
    }),
    (Pa.preconnect = function (q, p) {
      typeof q == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        m.d.C(q, p));
    }),
    (Pa.prefetchDNS = function (q) {
      typeof q == "string" && m.d.D(q);
    }),
    (Pa.preinit = function (q, p) {
      if (typeof q == "string" && p && typeof p.as == "string") {
        var C = p.as,
          k = aa(C, p.crossOrigin),
          la = typeof p.integrity == "string" ? p.integrity : void 0,
          ca = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        C === "style"
          ? m.d.S(q, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: k,
              integrity: la,
              fetchPriority: ca,
            })
          : C === "script" &&
            m.d.X(q, {
              crossOrigin: k,
              integrity: la,
              fetchPriority: ca,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (Pa.preinitModule = function (q, p) {
      if (typeof q == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var C = aa(p.as, p.crossOrigin);
            m.d.M(q, {
              crossOrigin: C,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && m.d.M(q);
    }),
    (Pa.preload = function (q, p) {
      if (
        typeof q == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var C = p.as,
          k = aa(C, p.crossOrigin);
        m.d.L(q, C, {
          crossOrigin: k,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (Pa.preloadModule = function (q, p) {
      if (typeof q == "string")
        if (p) {
          var C = aa(p.as, p.crossOrigin);
          m.d.m(q, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: C,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else m.d.m(q);
    }),
    (Pa.requestFormReset = function (q) {
      m.d.r(q);
    }),
    (Pa.unstable_batchedUpdates = function (q, p) {
      return q(p);
    }),
    (Pa.useFormState = function (q, p, C) {
      return G.H.useFormState(q, p, C);
    }),
    (Pa.useFormStatus = function () {
      return G.H.useHostTransitionStatus();
    }),
    (Pa.version = "19.1.1"),
    Pa
  );
}
var rd;
function Qm() {
  if (rd) return of.exports;
  rd = 1;
  function M() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M);
      } catch (J) {
        console.error(J);
      }
  }
  return M(), (of.exports = Gm()), of.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var od;
function Zm() {
  if (od) return ju;
  od = 1;
  var M = Xm(),
    J = df(),
    B = Qm();
  function m(a) {
    var l = "https://react.dev/errors/" + a;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        l += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return (
      "Minified React error #" +
      a +
      "; visit " +
      l +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function x(a) {
    return !(!a || (a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11));
  }
  function U(a) {
    var l = a,
      t = a;
    if (a.alternate) for (; l.return; ) l = l.return;
    else {
      a = l;
      do (l = a), (l.flags & 4098) !== 0 && (t = l.return), (a = l.return);
      while (a);
    }
    return l.tag === 3 ? t : null;
  }
  function G(a) {
    if (a.tag === 13) {
      var l = a.memoizedState;
      if (
        (l === null && ((a = a.alternate), a !== null && (l = a.memoizedState)),
        l !== null)
      )
        return l.dehydrated;
    }
    return null;
  }
  function aa(a) {
    if (U(a) !== a) throw Error(m(188));
  }
  function q(a) {
    var l = a.alternate;
    if (!l) {
      if (((l = U(a)), l === null)) throw Error(m(188));
      return l !== a ? null : a;
    }
    for (var t = a, e = l; ; ) {
      var u = t.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((e = u.return), e !== null)) {
          t = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === t) return aa(u), a;
          if (n === e) return aa(u), l;
          n = n.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== e.return) (t = u), (e = n);
      else {
        for (var c = !1, i = u.child; i; ) {
          if (i === t) {
            (c = !0), (t = u), (e = n);
            break;
          }
          if (i === e) {
            (c = !0), (e = u), (t = n);
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = n.child; i; ) {
            if (i === t) {
              (c = !0), (t = n), (e = u);
              break;
            }
            if (i === e) {
              (c = !0), (e = n), (t = u);
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(m(189));
        }
      }
      if (t.alternate !== e) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? a : l;
  }
  function p(a) {
    var l = a.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return a;
    for (a = a.child; a !== null; ) {
      if (((l = p(a)), l !== null)) return l;
      a = a.sibling;
    }
    return null;
  }
  var C = Object.assign,
    k = Symbol.for("react.element"),
    la = Symbol.for("react.transitional.element"),
    ca = Symbol.for("react.portal"),
    Ea = Symbol.for("react.fragment"),
    wa = Symbol.for("react.strict_mode"),
    Oa = Symbol.for("react.profiler"),
    ia = Symbol.for("react.provider"),
    Ma = Symbol.for("react.consumer"),
    w = Symbol.for("react.context"),
    il = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    $a = Symbol.for("react.suspense_list"),
    ta = Symbol.for("react.memo"),
    Wa = Symbol.for("react.lazy"),
    Ba = Symbol.for("react.activity"),
    Ml = Symbol.for("react.memo_cache_sentinel"),
    Da = Symbol.iterator;
  function ba(a) {
    return a === null || typeof a != "object"
      ? null
      : ((a = (Da && a[Da]) || a["@@iterator"]),
        typeof a == "function" ? a : null);
  }
  var Dl = Symbol.for("react.client.reference");
  function Cl(a) {
    if (a == null) return null;
    if (typeof a == "function")
      return a.$$typeof === Dl ? null : a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case Ea:
        return "Fragment";
      case Oa:
        return "Profiler";
      case wa:
        return "StrictMode";
      case O:
        return "Suspense";
      case $a:
        return "SuspenseList";
      case Ba:
        return "Activity";
    }
    if (typeof a == "object")
      switch (a.$$typeof) {
        case ca:
          return "Portal";
        case w:
          return (a.displayName || "Context") + ".Provider";
        case Ma:
          return (a._context.displayName || "Context") + ".Consumer";
        case il:
          var l = a.render;
          return (
            (a = a.displayName),
            a ||
              ((a = l.displayName || l.name || ""),
              (a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef")),
            a
          );
        case ta:
          return (
            (l = a.displayName || null), l !== null ? l : Cl(a.type) || "Memo"
          );
        case Wa:
          (l = a._payload), (a = a._init);
          try {
            return Cl(a(l));
          } catch {}
      }
    return null;
  }
  var Na = Array.isArray,
    S = J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    j = B.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = { pending: !1, data: null, method: null, action: null },
    sa = [],
    r = -1;
  function _(a) {
    return { current: a };
  }
  function R(a) {
    0 > r || ((a.current = sa[r]), (sa[r] = null), r--);
  }
  function D(a, l) {
    r++, (sa[r] = a.current), (a.current = l);
  }
  var d = _(null),
    A = _(null),
    N = _(null),
    X = _(null);
  function Q(a, l) {
    switch ((D(N, l), D(A, a), D(d, null), l.nodeType)) {
      case 9:
      case 11:
        a = (a = l.documentElement) && (a = a.namespaceURI) ? xo(a) : 0;
        break;
      default:
        if (((a = l.tagName), (l = l.namespaceURI)))
          (l = xo(l)), (a = Ro(l, a));
        else
          switch (a) {
            case "svg":
              a = 1;
              break;
            case "math":
              a = 2;
              break;
            default:
              a = 0;
          }
    }
    R(d), D(d, a);
  }
  function ja() {
    R(d), R(A), R(N);
  }
  function ra(a) {
    a.memoizedState !== null && D(X, a);
    var l = d.current,
      t = Ro(l, a.type);
    l !== t && (D(A, a), D(d, t));
  }
  function ua(a) {
    A.current === a && (R(d), R(A)),
      X.current === a && (R(X), (Nu._currentValue = Z));
  }
  var ka = Object.prototype.hasOwnProperty,
    Za = M.unstable_scheduleCallback,
    xa = M.unstable_cancelCallback,
    jl = M.unstable_shouldYield,
    at = M.unstable_requestPaint,
    ll = M.unstable_now,
    xe = M.unstable_getCurrentPriorityLevel,
    Lt = M.unstable_ImmediatePriority,
    Kt = M.unstable_UserBlockingPriority,
    lt = M.unstable_NormalPriority,
    Re = M.unstable_LowPriority,
    xu = M.unstable_IdlePriority,
    Bl = M.log,
    Ru = M.unstable_setDisableYieldValue,
    Yl = null,
    Va = null;
  function tt(a) {
    if (
      (typeof Bl == "function" && Ru(a),
      Va && typeof Va.setStrictMode == "function")
    )
      try {
        Va.setStrictMode(Yl, a);
      } catch {}
  }
  var fl = Math.clz32 ? Math.clz32 : pd,
    Sd = Math.log,
    zd = Math.LN2;
  function pd(a) {
    return (a >>>= 0), a === 0 ? 32 : (31 - ((Sd(a) / zd) | 0)) | 0;
  }
  var Uu = 256,
    Hu = 4194304;
  function _t(a) {
    var l = a & 42;
    if (l !== 0) return l;
    switch (a & -a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return a & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return a;
    }
  }
  function qu(a, l, t) {
    var e = a.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      n = a.suspendedLanes,
      c = a.pingedLanes;
    a = a.warmLanes;
    var i = e & 134217727;
    return (
      i !== 0
        ? ((e = i & ~n),
          e !== 0
            ? (u = _t(e))
            : ((c &= i),
              c !== 0
                ? (u = _t(c))
                : t || ((t = i & ~a), t !== 0 && (u = _t(t)))))
        : ((i = e & ~n),
          i !== 0
            ? (u = _t(i))
            : c !== 0
            ? (u = _t(c))
            : t || ((t = e & ~a), t !== 0 && (u = _t(t)))),
      u === 0
        ? 0
        : l !== 0 &&
          l !== u &&
          (l & n) === 0 &&
          ((n = u & -u),
          (t = l & -l),
          n >= t || (n === 32 && (t & 4194048) !== 0))
        ? l
        : u
    );
  }
  function Ue(a, l) {
    return (a.pendingLanes & ~(a.suspendedLanes & ~a.pingedLanes) & l) === 0;
  }
  function Ad(a, l) {
    switch (a) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function hf() {
    var a = Uu;
    return (Uu <<= 1), (Uu & 4194048) === 0 && (Uu = 256), a;
  }
  function mf() {
    var a = Hu;
    return (Hu <<= 1), (Hu & 62914560) === 0 && (Hu = 4194304), a;
  }
  function $n(a) {
    for (var l = [], t = 0; 31 > t; t++) l.push(a);
    return l;
  }
  function He(a, l) {
    (a.pendingLanes |= l),
      l !== 268435456 &&
        ((a.suspendedLanes = 0), (a.pingedLanes = 0), (a.warmLanes = 0));
  }
  function Ed(a, l, t, e, u, n) {
    var c = a.pendingLanes;
    (a.pendingLanes = t),
      (a.suspendedLanes = 0),
      (a.pingedLanes = 0),
      (a.warmLanes = 0),
      (a.expiredLanes &= t),
      (a.entangledLanes &= t),
      (a.errorRecoveryDisabledLanes &= t),
      (a.shellSuspendCounter = 0);
    var i = a.entanglements,
      f = a.expirationTimes,
      y = a.hiddenUpdates;
    for (t = c & ~t; 0 < t; ) {
      var z = 31 - fl(t),
        T = 1 << z;
      (i[z] = 0), (f[z] = -1);
      var g = y[z];
      if (g !== null)
        for (y[z] = null, z = 0; z < g.length; z++) {
          var b = g[z];
          b !== null && (b.lane &= -536870913);
        }
      t &= ~T;
    }
    e !== 0 && vf(a, e, 0),
      n !== 0 && u === 0 && a.tag !== 0 && (a.suspendedLanes |= n & ~(c & ~l));
  }
  function vf(a, l, t) {
    (a.pendingLanes |= l), (a.suspendedLanes &= ~l);
    var e = 31 - fl(l);
    (a.entangledLanes |= l),
      (a.entanglements[e] = a.entanglements[e] | 1073741824 | (t & 4194090));
  }
  function yf(a, l) {
    var t = (a.entangledLanes |= l);
    for (a = a.entanglements; t; ) {
      var e = 31 - fl(t),
        u = 1 << e;
      (u & l) | (a[e] & l) && (a[e] |= l), (t &= ~u);
    }
  }
  function Wn(a) {
    switch (a) {
      case 2:
        a = 1;
        break;
      case 8:
        a = 4;
        break;
      case 32:
        a = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        a = 128;
        break;
      case 268435456:
        a = 134217728;
        break;
      default:
        a = 0;
    }
    return a;
  }
  function kn(a) {
    return (
      (a &= -a),
      2 < a ? (8 < a ? ((a & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function gf() {
    var a = j.p;
    return a !== 0 ? a : ((a = window.event), a === void 0 ? 32 : Fo(a.type));
  }
  function Nd(a, l) {
    var t = j.p;
    try {
      return (j.p = a), l();
    } finally {
      j.p = t;
    }
  }
  var et = Math.random().toString(36).slice(2),
    Fa = "__reactFiber$" + et,
    tl = "__reactProps$" + et,
    Jt = "__reactContainer$" + et,
    Fn = "__reactEvents$" + et,
    Td = "__reactListeners$" + et,
    _d = "__reactHandles$" + et,
    bf = "__reactResources$" + et,
    qe = "__reactMarker$" + et;
  function In(a) {
    delete a[Fa], delete a[tl], delete a[Fn], delete a[Td], delete a[_d];
  }
  function wt(a) {
    var l = a[Fa];
    if (l) return l;
    for (var t = a.parentNode; t; ) {
      if ((l = t[Jt] || t[Fa])) {
        if (
          ((t = l.alternate),
          l.child !== null || (t !== null && t.child !== null))
        )
          for (a = Co(a); a !== null; ) {
            if ((t = a[Fa])) return t;
            a = Co(a);
          }
        return l;
      }
      (a = t), (t = a.parentNode);
    }
    return null;
  }
  function $t(a) {
    if ((a = a[Fa] || a[Jt])) {
      var l = a.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return a;
    }
    return null;
  }
  function Ce(a) {
    var l = a.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return a.stateNode;
    throw Error(m(33));
  }
  function Wt(a) {
    var l = a[bf];
    return (
      l ||
        (l = a[bf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      l
    );
  }
  function Ya(a) {
    a[qe] = !0;
  }
  var Sf = new Set(),
    zf = {};
  function Ot(a, l) {
    kt(a, l), kt(a + "Capture", l);
  }
  function kt(a, l) {
    for (zf[a] = l, a = 0; a < l.length; a++) Sf.add(l[a]);
  }
  var Od = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    pf = {},
    Af = {};
  function Md(a) {
    return ka.call(Af, a)
      ? !0
      : ka.call(pf, a)
      ? !1
      : Od.test(a)
      ? (Af[a] = !0)
      : ((pf[a] = !0), !1);
  }
  function Cu(a, l, t) {
    if (Md(l))
      if (t === null) a.removeAttribute(l);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            a.removeAttribute(l);
            return;
          case "boolean":
            var e = l.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              a.removeAttribute(l);
              return;
            }
        }
        a.setAttribute(l, "" + t);
      }
  }
  function Bu(a, l, t) {
    if (t === null) a.removeAttribute(l);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          a.removeAttribute(l);
          return;
      }
      a.setAttribute(l, "" + t);
    }
  }
  function Xl(a, l, t, e) {
    if (e === null) a.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          a.removeAttribute(t);
          return;
      }
      a.setAttributeNS(l, t, "" + e);
    }
  }
  var Pn, Ef;
  function Ft(a) {
    if (Pn === void 0)
      try {
        throw Error();
      } catch (t) {
        var l = t.stack.trim().match(/\n( *(at )?)/);
        (Pn = (l && l[1]) || ""),
          (Ef =
            -1 <
            t.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < t.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Pn +
      a +
      Ef
    );
  }
  var ac = !1;
  function lc(a, l) {
    if (!a || ac) return "";
    ac = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (l) {
              var T = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(T.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(T, []);
                } catch (b) {
                  var g = b;
                }
                Reflect.construct(a, [], T);
              } else {
                try {
                  T.call();
                } catch (b) {
                  g = b;
                }
                a.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                g = b;
              }
              (T = a()) &&
                typeof T.catch == "function" &&
                T.catch(function () {});
            }
          } catch (b) {
            if (b && g && typeof b.stack == "string") return [b.stack, g.stack];
          }
          return [null, null];
        },
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = e.DetermineComponentFrameRoot(),
        c = n[0],
        i = n[1];
      if (c && i) {
        var f = c.split(`
`),
          y = i.split(`
`);
        for (
          u = e = 0;
          e < f.length && !f[e].includes("DetermineComponentFrameRoot");

        )
          e++;
        for (; u < y.length && !y[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (e === f.length || u === y.length)
          for (
            e = f.length - 1, u = y.length - 1;
            1 <= e && 0 <= u && f[e] !== y[u];

          )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== y[u]) {
            if (e !== 1 || u !== 1)
              do
                if ((e--, u--, 0 > u || f[e] !== y[u])) {
                  var z =
                    `
` + f[e].replace(" at new ", " at ");
                  return (
                    a.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", a.displayName)),
                    z
                  );
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      (ac = !1), (Error.prepareStackTrace = t);
    }
    return (t = a ? a.displayName || a.name : "") ? Ft(t) : "";
  }
  function Dd(a) {
    switch (a.tag) {
      case 26:
      case 27:
      case 5:
        return Ft(a.type);
      case 16:
        return Ft("Lazy");
      case 13:
        return Ft("Suspense");
      case 19:
        return Ft("SuspenseList");
      case 0:
      case 15:
        return lc(a.type, !1);
      case 11:
        return lc(a.type.render, !1);
      case 1:
        return lc(a.type, !0);
      case 31:
        return Ft("Activity");
      default:
        return "";
    }
  }
  function Nf(a) {
    try {
      var l = "";
      do (l += Dd(a)), (a = a.return);
      while (a);
      return l;
    } catch (t) {
      return (
        `
Error generating stack: ` +
        t.message +
        `
` +
        t.stack
      );
    }
  }
  function yl(a) {
    switch (typeof a) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a;
      case "object":
        return a;
      default:
        return "";
    }
  }
  function Tf(a) {
    var l = a.type;
    return (
      (a = a.nodeName) &&
      a.toLowerCase() === "input" &&
      (l === "checkbox" || l === "radio")
    );
  }
  function jd(a) {
    var l = Tf(a) ? "checked" : "value",
      t = Object.getOwnPropertyDescriptor(a.constructor.prototype, l),
      e = "" + a[l];
    if (
      !a.hasOwnProperty(l) &&
      typeof t < "u" &&
      typeof t.get == "function" &&
      typeof t.set == "function"
    ) {
      var u = t.get,
        n = t.set;
      return (
        Object.defineProperty(a, l, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (c) {
            (e = "" + c), n.call(this, c);
          },
        }),
        Object.defineProperty(a, l, { enumerable: t.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (c) {
            e = "" + c;
          },
          stopTracking: function () {
            (a._valueTracker = null), delete a[l];
          },
        }
      );
    }
  }
  function Yu(a) {
    a._valueTracker || (a._valueTracker = jd(a));
  }
  function _f(a) {
    if (!a) return !1;
    var l = a._valueTracker;
    if (!l) return !0;
    var t = l.getValue(),
      e = "";
    return (
      a && (e = Tf(a) ? (a.checked ? "true" : "false") : a.value),
      (a = e),
      a !== t ? (l.setValue(a), !0) : !1
    );
  }
  function Xu(a) {
    if (
      ((a = a || (typeof document < "u" ? document : void 0)), typeof a > "u")
    )
      return null;
    try {
      return a.activeElement || a.body;
    } catch {
      return a.body;
    }
  }
  var xd = /[\n"\\]/g;
  function gl(a) {
    return a.replace(xd, function (l) {
      return "\\" + l.charCodeAt(0).toString(16) + " ";
    });
  }
  function tc(a, l, t, e, u, n, c, i) {
    (a.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (a.type = c)
        : a.removeAttribute("type"),
      l != null
        ? c === "number"
          ? ((l === 0 && a.value === "") || a.value != l) &&
            (a.value = "" + yl(l))
          : a.value !== "" + yl(l) && (a.value = "" + yl(l))
        : (c !== "submit" && c !== "reset") || a.removeAttribute("value"),
      l != null
        ? ec(a, c, yl(l))
        : t != null
        ? ec(a, c, yl(t))
        : e != null && a.removeAttribute("value"),
      u == null && n != null && (a.defaultChecked = !!n),
      u != null &&
        (a.checked = u && typeof u != "function" && typeof u != "symbol"),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (a.name = "" + yl(i))
        : a.removeAttribute("name");
  }
  function Of(a, l, t, e, u, n, c, i) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (a.type = n),
      l != null || t != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || l != null)) return;
      (t = t != null ? "" + yl(t) : ""),
        (l = l != null ? "" + yl(l) : t),
        i || l === a.value || (a.value = l),
        (a.defaultValue = l);
    }
    (e = e ?? u),
      (e = typeof e != "function" && typeof e != "symbol" && !!e),
      (a.checked = i ? a.checked : !!e),
      (a.defaultChecked = !!e),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (a.name = c);
  }
  function ec(a, l, t) {
    (l === "number" && Xu(a.ownerDocument) === a) ||
      a.defaultValue === "" + t ||
      (a.defaultValue = "" + t);
  }
  function It(a, l, t, e) {
    if (((a = a.options), l)) {
      l = {};
      for (var u = 0; u < t.length; u++) l["$" + t[u]] = !0;
      for (t = 0; t < a.length; t++)
        (u = l.hasOwnProperty("$" + a[t].value)),
          a[t].selected !== u && (a[t].selected = u),
          u && e && (a[t].defaultSelected = !0);
    } else {
      for (t = "" + yl(t), l = null, u = 0; u < a.length; u++) {
        if (a[u].value === t) {
          (a[u].selected = !0), e && (a[u].defaultSelected = !0);
          return;
        }
        l !== null || a[u].disabled || (l = a[u]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Mf(a, l, t) {
    if (
      l != null &&
      ((l = "" + yl(l)), l !== a.value && (a.value = l), t == null)
    ) {
      a.defaultValue !== l && (a.defaultValue = l);
      return;
    }
    a.defaultValue = t != null ? "" + yl(t) : "";
  }
  function Df(a, l, t, e) {
    if (l == null) {
      if (e != null) {
        if (t != null) throw Error(m(92));
        if (Na(e)) {
          if (1 < e.length) throw Error(m(93));
          e = e[0];
        }
        t = e;
      }
      t == null && (t = ""), (l = t);
    }
    (t = yl(l)),
      (a.defaultValue = t),
      (e = a.textContent),
      e === t && e !== "" && e !== null && (a.value = e);
  }
  function Pt(a, l) {
    if (l) {
      var t = a.firstChild;
      if (t && t === a.lastChild && t.nodeType === 3) {
        t.nodeValue = l;
        return;
      }
    }
    a.textContent = l;
  }
  var Rd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function jf(a, l, t) {
    var e = l.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === ""
      ? e
        ? a.setProperty(l, "")
        : l === "float"
        ? (a.cssFloat = "")
        : (a[l] = "")
      : e
      ? a.setProperty(l, t)
      : typeof t != "number" || t === 0 || Rd.has(l)
      ? l === "float"
        ? (a.cssFloat = t)
        : (a[l] = ("" + t).trim())
      : (a[l] = t + "px");
  }
  function xf(a, l, t) {
    if (l != null && typeof l != "object") throw Error(m(62));
    if (((a = a.style), t != null)) {
      for (var e in t)
        !t.hasOwnProperty(e) ||
          (l != null && l.hasOwnProperty(e)) ||
          (e.indexOf("--") === 0
            ? a.setProperty(e, "")
            : e === "float"
            ? (a.cssFloat = "")
            : (a[e] = ""));
      for (var u in l)
        (e = l[u]), l.hasOwnProperty(u) && t[u] !== e && jf(a, u, e);
    } else for (var n in l) l.hasOwnProperty(n) && jf(a, n, l[n]);
  }
  function uc(a) {
    if (a.indexOf("-") === -1) return !1;
    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ud = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Hd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Gu(a) {
    return Hd.test("" + a)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : a;
  }
  var nc = null;
  function cc(a) {
    return (
      (a = a.target || a.srcElement || window),
      a.correspondingUseElement && (a = a.correspondingUseElement),
      a.nodeType === 3 ? a.parentNode : a
    );
  }
  var ae = null,
    le = null;
  function Rf(a) {
    var l = $t(a);
    if (l && (a = l.stateNode)) {
      var t = a[tl] || null;
      a: switch (((a = l.stateNode), l.type)) {
        case "input":
          if (
            (tc(
              a,
              t.value,
              t.defaultValue,
              t.defaultValue,
              t.checked,
              t.defaultChecked,
              t.type,
              t.name
            ),
            (l = t.name),
            t.type === "radio" && l != null)
          ) {
            for (t = a; t.parentNode; ) t = t.parentNode;
            for (
              t = t.querySelectorAll(
                'input[name="' + gl("" + l) + '"][type="radio"]'
              ),
                l = 0;
              l < t.length;
              l++
            ) {
              var e = t[l];
              if (e !== a && e.form === a.form) {
                var u = e[tl] || null;
                if (!u) throw Error(m(90));
                tc(
                  e,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (l = 0; l < t.length; l++)
              (e = t[l]), e.form === a.form && _f(e);
          }
          break a;
        case "textarea":
          Mf(a, t.value, t.defaultValue);
          break a;
        case "select":
          (l = t.value), l != null && It(a, !!t.multiple, l, !1);
      }
    }
  }
  var ic = !1;
  function Uf(a, l, t) {
    if (ic) return a(l, t);
    ic = !0;
    try {
      var e = a(l);
      return e;
    } finally {
      if (
        ((ic = !1),
        (ae !== null || le !== null) &&
          (_n(), ae && ((l = ae), (a = le), (le = ae = null), Rf(l), a)))
      )
        for (l = 0; l < a.length; l++) Rf(a[l]);
    }
  }
  function Be(a, l) {
    var t = a.stateNode;
    if (t === null) return null;
    var e = t[tl] || null;
    if (e === null) return null;
    t = e[l];
    a: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (e = !e.disabled) ||
          ((a = a.type),
          (e = !(
            a === "button" ||
            a === "input" ||
            a === "select" ||
            a === "textarea"
          ))),
          (a = !e);
        break a;
      default:
        a = !1;
    }
    if (a) return null;
    if (t && typeof t != "function") throw Error(m(231, l, typeof t));
    return t;
  }
  var Gl = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    fc = !1;
  if (Gl)
    try {
      var Ye = {};
      Object.defineProperty(Ye, "passive", {
        get: function () {
          fc = !0;
        },
      }),
        window.addEventListener("test", Ye, Ye),
        window.removeEventListener("test", Ye, Ye);
    } catch {
      fc = !1;
    }
  var ut = null,
    sc = null,
    Qu = null;
  function Hf() {
    if (Qu) return Qu;
    var a,
      l = sc,
      t = l.length,
      e,
      u = "value" in ut ? ut.value : ut.textContent,
      n = u.length;
    for (a = 0; a < t && l[a] === u[a]; a++);
    var c = t - a;
    for (e = 1; e <= c && l[t - e] === u[n - e]; e++);
    return (Qu = u.slice(a, 1 < e ? 1 - e : void 0));
  }
  function Zu(a) {
    var l = a.keyCode;
    return (
      "charCode" in a
        ? ((a = a.charCode), a === 0 && l === 13 && (a = 13))
        : (a = l),
      a === 10 && (a = 13),
      32 <= a || a === 13 ? a : 0
    );
  }
  function Vu() {
    return !0;
  }
  function qf() {
    return !1;
  }
  function el(a) {
    function l(t, e, u, n, c) {
      (this._reactName = t),
        (this._targetInst = u),
        (this.type = e),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null);
      for (var i in a)
        a.hasOwnProperty(i) && ((t = a[i]), (this[i] = t ? t(n) : n[i]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Vu
          : qf),
        (this.isPropagationStopped = qf),
        this
      );
    }
    return (
      C(l.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            (this.isDefaultPrevented = Vu));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            (this.isPropagationStopped = Vu));
        },
        persist: function () {},
        isPersistent: Vu,
      }),
      l
    );
  }
  var Mt = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (a) {
        return a.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Lu = el(Mt),
    Xe = C({}, Mt, { view: 0, detail: 0 }),
    qd = el(Xe),
    rc,
    oc,
    Ge,
    Ku = C({}, Xe, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: hc,
      button: 0,
      buttons: 0,
      relatedTarget: function (a) {
        return a.relatedTarget === void 0
          ? a.fromElement === a.srcElement
            ? a.toElement
            : a.fromElement
          : a.relatedTarget;
      },
      movementX: function (a) {
        return "movementX" in a
          ? a.movementX
          : (a !== Ge &&
              (Ge && a.type === "mousemove"
                ? ((rc = a.screenX - Ge.screenX), (oc = a.screenY - Ge.screenY))
                : (oc = rc = 0),
              (Ge = a)),
            rc);
      },
      movementY: function (a) {
        return "movementY" in a ? a.movementY : oc;
      },
    }),
    Cf = el(Ku),
    Cd = C({}, Ku, { dataTransfer: 0 }),
    Bd = el(Cd),
    Yd = C({}, Xe, { relatedTarget: 0 }),
    dc = el(Yd),
    Xd = C({}, Mt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Gd = el(Xd),
    Qd = C({}, Mt, {
      clipboardData: function (a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      },
    }),
    Zd = el(Qd),
    Vd = C({}, Mt, { data: 0 }),
    Bf = el(Vd),
    Ld = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Kd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Jd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function wd(a) {
    var l = this.nativeEvent;
    return l.getModifierState
      ? l.getModifierState(a)
      : (a = Jd[a])
      ? !!l[a]
      : !1;
  }
  function hc() {
    return wd;
  }
  var $d = C({}, Xe, {
      key: function (a) {
        if (a.key) {
          var l = Ld[a.key] || a.key;
          if (l !== "Unidentified") return l;
        }
        return a.type === "keypress"
          ? ((a = Zu(a)), a === 13 ? "Enter" : String.fromCharCode(a))
          : a.type === "keydown" || a.type === "keyup"
          ? Kd[a.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: hc,
      charCode: function (a) {
        return a.type === "keypress" ? Zu(a) : 0;
      },
      keyCode: function (a) {
        return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
      },
      which: function (a) {
        return a.type === "keypress"
          ? Zu(a)
          : a.type === "keydown" || a.type === "keyup"
          ? a.keyCode
          : 0;
      },
    }),
    Wd = el($d),
    kd = C({}, Ku, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Yf = el(kd),
    Fd = C({}, Xe, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hc,
    }),
    Id = el(Fd),
    Pd = C({}, Mt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ah = el(Pd),
    lh = C({}, Ku, {
      deltaX: function (a) {
        return "deltaX" in a
          ? a.deltaX
          : "wheelDeltaX" in a
          ? -a.wheelDeltaX
          : 0;
      },
      deltaY: function (a) {
        return "deltaY" in a
          ? a.deltaY
          : "wheelDeltaY" in a
          ? -a.wheelDeltaY
          : "wheelDelta" in a
          ? -a.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    th = el(lh),
    eh = C({}, Mt, { newState: 0, oldState: 0 }),
    uh = el(eh),
    nh = [9, 13, 27, 32],
    mc = Gl && "CompositionEvent" in window,
    Qe = null;
  Gl && "documentMode" in document && (Qe = document.documentMode);
  var ch = Gl && "TextEvent" in window && !Qe,
    Xf = Gl && (!mc || (Qe && 8 < Qe && 11 >= Qe)),
    Gf = " ",
    Qf = !1;
  function Zf(a, l) {
    switch (a) {
      case "keyup":
        return nh.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Vf(a) {
    return (a = a.detail), typeof a == "object" && "data" in a ? a.data : null;
  }
  var te = !1;
  function ih(a, l) {
    switch (a) {
      case "compositionend":
        return Vf(l);
      case "keypress":
        return l.which !== 32 ? null : ((Qf = !0), Gf);
      case "textInput":
        return (a = l.data), a === Gf && Qf ? null : a;
      default:
        return null;
    }
  }
  function fh(a, l) {
    if (te)
      return a === "compositionend" || (!mc && Zf(a, l))
        ? ((a = Hf()), (Qu = sc = ut = null), (te = !1), a)
        : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || (l.ctrlKey && l.altKey)) {
          if (l.char && 1 < l.char.length) return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return Xf && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var sh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Lf(a) {
    var l = a && a.nodeName && a.nodeName.toLowerCase();
    return l === "input" ? !!sh[a.type] : l === "textarea";
  }
  function Kf(a, l, t, e) {
    ae ? (le ? le.push(e) : (le = [e])) : (ae = e),
      (l = Rn(l, "onChange")),
      0 < l.length &&
        ((t = new Lu("onChange", "change", null, t, e)),
        a.push({ event: t, listeners: l }));
  }
  var Ze = null,
    Ve = null;
  function rh(a) {
    _o(a, 0);
  }
  function Ju(a) {
    var l = Ce(a);
    if (_f(l)) return a;
  }
  function Jf(a, l) {
    if (a === "change") return l;
  }
  var wf = !1;
  if (Gl) {
    var vc;
    if (Gl) {
      var yc = "oninput" in document;
      if (!yc) {
        var $f = document.createElement("div");
        $f.setAttribute("oninput", "return;"),
          (yc = typeof $f.oninput == "function");
      }
      vc = yc;
    } else vc = !1;
    wf = vc && (!document.documentMode || 9 < document.documentMode);
  }
  function Wf() {
    Ze && (Ze.detachEvent("onpropertychange", kf), (Ve = Ze = null));
  }
  function kf(a) {
    if (a.propertyName === "value" && Ju(Ve)) {
      var l = [];
      Kf(l, Ve, a, cc(a)), Uf(rh, l);
    }
  }
  function oh(a, l, t) {
    a === "focusin"
      ? (Wf(), (Ze = l), (Ve = t), Ze.attachEvent("onpropertychange", kf))
      : a === "focusout" && Wf();
  }
  function dh(a) {
    if (a === "selectionchange" || a === "keyup" || a === "keydown")
      return Ju(Ve);
  }
  function hh(a, l) {
    if (a === "click") return Ju(l);
  }
  function mh(a, l) {
    if (a === "input" || a === "change") return Ju(l);
  }
  function vh(a, l) {
    return (a === l && (a !== 0 || 1 / a === 1 / l)) || (a !== a && l !== l);
  }
  var sl = typeof Object.is == "function" ? Object.is : vh;
  function Le(a, l) {
    if (sl(a, l)) return !0;
    if (
      typeof a != "object" ||
      a === null ||
      typeof l != "object" ||
      l === null
    )
      return !1;
    var t = Object.keys(a),
      e = Object.keys(l);
    if (t.length !== e.length) return !1;
    for (e = 0; e < t.length; e++) {
      var u = t[e];
      if (!ka.call(l, u) || !sl(a[u], l[u])) return !1;
    }
    return !0;
  }
  function Ff(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }
  function If(a, l) {
    var t = Ff(a);
    a = 0;
    for (var e; t; ) {
      if (t.nodeType === 3) {
        if (((e = a + t.textContent.length), a <= l && e >= l))
          return { node: t, offset: l - a };
        a = e;
      }
      a: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break a;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Ff(t);
    }
  }
  function Pf(a, l) {
    return a && l
      ? a === l
        ? !0
        : a && a.nodeType === 3
        ? !1
        : l && l.nodeType === 3
        ? Pf(a, l.parentNode)
        : "contains" in a
        ? a.contains(l)
        : a.compareDocumentPosition
        ? !!(a.compareDocumentPosition(l) & 16)
        : !1
      : !1;
  }
  function as(a) {
    a =
      a != null &&
      a.ownerDocument != null &&
      a.ownerDocument.defaultView != null
        ? a.ownerDocument.defaultView
        : window;
    for (var l = Xu(a.document); l instanceof a.HTMLIFrameElement; ) {
      try {
        var t = typeof l.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) a = l.contentWindow;
      else break;
      l = Xu(a.document);
    }
    return l;
  }
  function gc(a) {
    var l = a && a.nodeName && a.nodeName.toLowerCase();
    return (
      l &&
      ((l === "input" &&
        (a.type === "text" ||
          a.type === "search" ||
          a.type === "tel" ||
          a.type === "url" ||
          a.type === "password")) ||
        l === "textarea" ||
        a.contentEditable === "true")
    );
  }
  var yh = Gl && "documentMode" in document && 11 >= document.documentMode,
    ee = null,
    bc = null,
    Ke = null,
    Sc = !1;
  function ls(a, l, t) {
    var e =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    Sc ||
      ee == null ||
      ee !== Xu(e) ||
      ((e = ee),
      "selectionStart" in e && gc(e)
        ? (e = { start: e.selectionStart, end: e.selectionEnd })
        : ((e = (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset,
          })),
      (Ke && Le(Ke, e)) ||
        ((Ke = e),
        (e = Rn(bc, "onSelect")),
        0 < e.length &&
          ((l = new Lu("onSelect", "select", null, l, t)),
          a.push({ event: l, listeners: e }),
          (l.target = ee))));
  }
  function Dt(a, l) {
    var t = {};
    return (
      (t[a.toLowerCase()] = l.toLowerCase()),
      (t["Webkit" + a] = "webkit" + l),
      (t["Moz" + a] = "moz" + l),
      t
    );
  }
  var ue = {
      animationend: Dt("Animation", "AnimationEnd"),
      animationiteration: Dt("Animation", "AnimationIteration"),
      animationstart: Dt("Animation", "AnimationStart"),
      transitionrun: Dt("Transition", "TransitionRun"),
      transitionstart: Dt("Transition", "TransitionStart"),
      transitioncancel: Dt("Transition", "TransitionCancel"),
      transitionend: Dt("Transition", "TransitionEnd"),
    },
    zc = {},
    ts = {};
  Gl &&
    ((ts = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ue.animationend.animation,
      delete ue.animationiteration.animation,
      delete ue.animationstart.animation),
    "TransitionEvent" in window || delete ue.transitionend.transition);
  function jt(a) {
    if (zc[a]) return zc[a];
    if (!ue[a]) return a;
    var l = ue[a],
      t;
    for (t in l) if (l.hasOwnProperty(t) && t in ts) return (zc[a] = l[t]);
    return a;
  }
  var es = jt("animationend"),
    us = jt("animationiteration"),
    ns = jt("animationstart"),
    gh = jt("transitionrun"),
    bh = jt("transitionstart"),
    Sh = jt("transitioncancel"),
    cs = jt("transitionend"),
    is = new Map(),
    pc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  pc.push("scrollEnd");
  function Tl(a, l) {
    is.set(a, l), Ot(l, [a]);
  }
  var fs = new WeakMap();
  function bl(a, l) {
    if (typeof a == "object" && a !== null) {
      var t = fs.get(a);
      return t !== void 0
        ? t
        : ((l = { value: a, source: l, stack: Nf(l) }), fs.set(a, l), l);
    }
    return { value: a, source: l, stack: Nf(l) };
  }
  var Sl = [],
    ne = 0,
    Ac = 0;
  function wu() {
    for (var a = ne, l = (Ac = ne = 0); l < a; ) {
      var t = Sl[l];
      Sl[l++] = null;
      var e = Sl[l];
      Sl[l++] = null;
      var u = Sl[l];
      Sl[l++] = null;
      var n = Sl[l];
      if (((Sl[l++] = null), e !== null && u !== null)) {
        var c = e.pending;
        c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
          (e.pending = u);
      }
      n !== 0 && ss(t, u, n);
    }
  }
  function $u(a, l, t, e) {
    (Sl[ne++] = a),
      (Sl[ne++] = l),
      (Sl[ne++] = t),
      (Sl[ne++] = e),
      (Ac |= e),
      (a.lanes |= e),
      (a = a.alternate),
      a !== null && (a.lanes |= e);
  }
  function Ec(a, l, t, e) {
    return $u(a, l, t, e), Wu(a);
  }
  function ce(a, l) {
    return $u(a, null, null, l), Wu(a);
  }
  function ss(a, l, t) {
    a.lanes |= t;
    var e = a.alternate;
    e !== null && (e.lanes |= t);
    for (var u = !1, n = a.return; n !== null; )
      (n.childLanes |= t),
        (e = n.alternate),
        e !== null && (e.childLanes |= t),
        n.tag === 22 &&
          ((a = n.stateNode), a === null || a._visibility & 1 || (u = !0)),
        (a = n),
        (n = n.return);
    return a.tag === 3
      ? ((n = a.stateNode),
        u &&
          l !== null &&
          ((u = 31 - fl(t)),
          (a = n.hiddenUpdates),
          (e = a[u]),
          e === null ? (a[u] = [l]) : e.push(l),
          (l.lane = t | 536870912)),
        n)
      : null;
  }
  function Wu(a) {
    if (50 < yu) throw ((yu = 0), (Di = null), Error(m(185)));
    for (var l = a.return; l !== null; ) (a = l), (l = a.return);
    return a.tag === 3 ? a.stateNode : null;
  }
  var ie = {};
  function zh(a, l, t, e) {
    (this.tag = a),
      (this.key = t),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = l),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = e),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function rl(a, l, t, e) {
    return new zh(a, l, t, e);
  }
  function Nc(a) {
    return (a = a.prototype), !(!a || !a.isReactComponent);
  }
  function Ql(a, l) {
    var t = a.alternate;
    return (
      t === null
        ? ((t = rl(a.tag, l, a.key, a.mode)),
          (t.elementType = a.elementType),
          (t.type = a.type),
          (t.stateNode = a.stateNode),
          (t.alternate = a),
          (a.alternate = t))
        : ((t.pendingProps = l),
          (t.type = a.type),
          (t.flags = 0),
          (t.subtreeFlags = 0),
          (t.deletions = null)),
      (t.flags = a.flags & 65011712),
      (t.childLanes = a.childLanes),
      (t.lanes = a.lanes),
      (t.child = a.child),
      (t.memoizedProps = a.memoizedProps),
      (t.memoizedState = a.memoizedState),
      (t.updateQueue = a.updateQueue),
      (l = a.dependencies),
      (t.dependencies =
        l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }),
      (t.sibling = a.sibling),
      (t.index = a.index),
      (t.ref = a.ref),
      (t.refCleanup = a.refCleanup),
      t
    );
  }
  function rs(a, l) {
    a.flags &= 65011714;
    var t = a.alternate;
    return (
      t === null
        ? ((a.childLanes = 0),
          (a.lanes = l),
          (a.child = null),
          (a.subtreeFlags = 0),
          (a.memoizedProps = null),
          (a.memoizedState = null),
          (a.updateQueue = null),
          (a.dependencies = null),
          (a.stateNode = null))
        : ((a.childLanes = t.childLanes),
          (a.lanes = t.lanes),
          (a.child = t.child),
          (a.subtreeFlags = 0),
          (a.deletions = null),
          (a.memoizedProps = t.memoizedProps),
          (a.memoizedState = t.memoizedState),
          (a.updateQueue = t.updateQueue),
          (a.type = t.type),
          (l = t.dependencies),
          (a.dependencies =
            l === null
              ? null
              : { lanes: l.lanes, firstContext: l.firstContext })),
      a
    );
  }
  function ku(a, l, t, e, u, n) {
    var c = 0;
    if (((e = a), typeof a == "function")) Nc(a) && (c = 1);
    else if (typeof a == "string")
      c = Am(a, t, d.current)
        ? 26
        : a === "html" || a === "head" || a === "body"
        ? 27
        : 5;
    else
      a: switch (a) {
        case Ba:
          return (a = rl(31, t, l, u)), (a.elementType = Ba), (a.lanes = n), a;
        case Ea:
          return xt(t.children, u, n, l);
        case wa:
          (c = 8), (u |= 24);
          break;
        case Oa:
          return (
            (a = rl(12, t, l, u | 2)), (a.elementType = Oa), (a.lanes = n), a
          );
        case O:
          return (a = rl(13, t, l, u)), (a.elementType = O), (a.lanes = n), a;
        case $a:
          return (a = rl(19, t, l, u)), (a.elementType = $a), (a.lanes = n), a;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case ia:
              case w:
                c = 10;
                break a;
              case Ma:
                c = 9;
                break a;
              case il:
                c = 11;
                break a;
              case ta:
                c = 14;
                break a;
              case Wa:
                (c = 16), (e = null);
                break a;
            }
          (c = 29),
            (t = Error(m(130, a === null ? "null" : typeof a, ""))),
            (e = null);
      }
    return (
      (l = rl(c, t, l, u)), (l.elementType = a), (l.type = e), (l.lanes = n), l
    );
  }
  function xt(a, l, t, e) {
    return (a = rl(7, a, e, l)), (a.lanes = t), a;
  }
  function Tc(a, l, t) {
    return (a = rl(6, a, null, l)), (a.lanes = t), a;
  }
  function _c(a, l, t) {
    return (
      (l = rl(4, a.children !== null ? a.children : [], a.key, l)),
      (l.lanes = t),
      (l.stateNode = {
        containerInfo: a.containerInfo,
        pendingChildren: null,
        implementation: a.implementation,
      }),
      l
    );
  }
  var fe = [],
    se = 0,
    Fu = null,
    Iu = 0,
    zl = [],
    pl = 0,
    Rt = null,
    Zl = 1,
    Vl = "";
  function Ut(a, l) {
    (fe[se++] = Iu), (fe[se++] = Fu), (Fu = a), (Iu = l);
  }
  function os(a, l, t) {
    (zl[pl++] = Zl), (zl[pl++] = Vl), (zl[pl++] = Rt), (Rt = a);
    var e = Zl;
    a = Vl;
    var u = 32 - fl(e) - 1;
    (e &= ~(1 << u)), (t += 1);
    var n = 32 - fl(l) + u;
    if (30 < n) {
      var c = u - (u % 5);
      (n = (e & ((1 << c) - 1)).toString(32)),
        (e >>= c),
        (u -= c),
        (Zl = (1 << (32 - fl(l) + u)) | (t << u) | e),
        (Vl = n + a);
    } else (Zl = (1 << n) | (t << u) | e), (Vl = a);
  }
  function Oc(a) {
    a.return !== null && (Ut(a, 1), os(a, 1, 0));
  }
  function Mc(a) {
    for (; a === Fu; )
      (Fu = fe[--se]), (fe[se] = null), (Iu = fe[--se]), (fe[se] = null);
    for (; a === Rt; )
      (Rt = zl[--pl]),
        (zl[pl] = null),
        (Vl = zl[--pl]),
        (zl[pl] = null),
        (Zl = zl[--pl]),
        (zl[pl] = null);
  }
  var al = null,
    pa = null,
    fa = !1,
    Ht = null,
    xl = !1,
    Dc = Error(m(519));
  function qt(a) {
    var l = Error(m(418, ""));
    throw ($e(bl(l, a)), Dc);
  }
  function ds(a) {
    var l = a.stateNode,
      t = a.type,
      e = a.memoizedProps;
    switch (((l[Fa] = a), (l[tl] = e), t)) {
      case "dialog":
        P("cancel", l), P("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        P("load", l);
        break;
      case "video":
      case "audio":
        for (t = 0; t < bu.length; t++) P(bu[t], l);
        break;
      case "source":
        P("error", l);
        break;
      case "img":
      case "image":
      case "link":
        P("error", l), P("load", l);
        break;
      case "details":
        P("toggle", l);
        break;
      case "input":
        P("invalid", l),
          Of(
            l,
            e.value,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
            !0
          ),
          Yu(l);
        break;
      case "select":
        P("invalid", l);
        break;
      case "textarea":
        P("invalid", l), Df(l, e.value, e.defaultValue, e.children), Yu(l);
    }
    (t = e.children),
      (typeof t != "string" && typeof t != "number" && typeof t != "bigint") ||
      l.textContent === "" + t ||
      e.suppressHydrationWarning === !0 ||
      jo(l.textContent, t)
        ? (e.popover != null && (P("beforetoggle", l), P("toggle", l)),
          e.onScroll != null && P("scroll", l),
          e.onScrollEnd != null && P("scrollend", l),
          e.onClick != null && (l.onclick = Un),
          (l = !0))
        : (l = !1),
      l || qt(a);
  }
  function hs(a) {
    for (al = a.return; al; )
      switch (al.tag) {
        case 5:
        case 13:
          xl = !1;
          return;
        case 27:
        case 3:
          xl = !0;
          return;
        default:
          al = al.return;
      }
  }
  function Je(a) {
    if (a !== al) return !1;
    if (!fa) return hs(a), (fa = !0), !1;
    var l = a.tag,
      t;
    if (
      ((t = l !== 3 && l !== 27) &&
        ((t = l === 5) &&
          ((t = a.type),
          (t =
            !(t !== "form" && t !== "button") || Ki(a.type, a.memoizedProps))),
        (t = !t)),
      t && pa && qt(a),
      hs(a),
      l === 13)
    ) {
      if (((a = a.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
        throw Error(m(317));
      a: {
        for (a = a.nextSibling, l = 0; a; ) {
          if (a.nodeType === 8)
            if (((t = a.data), t === "/$")) {
              if (l === 0) {
                pa = Ol(a.nextSibling);
                break a;
              }
              l--;
            } else (t !== "$" && t !== "$!" && t !== "$?") || l++;
          a = a.nextSibling;
        }
        pa = null;
      }
    } else
      l === 27
        ? ((l = pa), zt(a.type) ? ((a = Wi), (Wi = null), (pa = a)) : (pa = l))
        : (pa = al ? Ol(a.stateNode.nextSibling) : null);
    return !0;
  }
  function we() {
    (pa = al = null), (fa = !1);
  }
  function ms() {
    var a = Ht;
    return (
      a !== null &&
        (cl === null ? (cl = a) : cl.push.apply(cl, a), (Ht = null)),
      a
    );
  }
  function $e(a) {
    Ht === null ? (Ht = [a]) : Ht.push(a);
  }
  var jc = _(null),
    Ct = null,
    Ll = null;
  function nt(a, l, t) {
    D(jc, l._currentValue), (l._currentValue = t);
  }
  function Kl(a) {
    (a._currentValue = jc.current), R(jc);
  }
  function xc(a, l, t) {
    for (; a !== null; ) {
      var e = a.alternate;
      if (
        ((a.childLanes & l) !== l
          ? ((a.childLanes |= l), e !== null && (e.childLanes |= l))
          : e !== null && (e.childLanes & l) !== l && (e.childLanes |= l),
        a === t)
      )
        break;
      a = a.return;
    }
  }
  function Rc(a, l, t, e) {
    var u = a.child;
    for (u !== null && (u.return = a); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        a: for (; n !== null; ) {
          var i = n;
          n = u;
          for (var f = 0; f < l.length; f++)
            if (i.context === l[f]) {
              (n.lanes |= t),
                (i = n.alternate),
                i !== null && (i.lanes |= t),
                xc(n.return, t, a),
                e || (c = null);
              break a;
            }
          n = i.next;
        }
      } else if (u.tag === 18) {
        if (((c = u.return), c === null)) throw Error(m(341));
        (c.lanes |= t),
          (n = c.alternate),
          n !== null && (n.lanes |= t),
          xc(c, t, a),
          (c = null);
      } else c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === a) {
            c = null;
            break;
          }
          if (((u = c.sibling), u !== null)) {
            (u.return = c.return), (c = u);
            break;
          }
          c = c.return;
        }
      u = c;
    }
  }
  function We(a, l, t, e) {
    a = null;
    for (var u = l, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(m(387));
        if (((c = c.memoizedProps), c !== null)) {
          var i = u.type;
          sl(u.pendingProps.value, c.value) ||
            (a !== null ? a.push(i) : (a = [i]));
        }
      } else if (u === X.current) {
        if (((c = u.alternate), c === null)) throw Error(m(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (a !== null ? a.push(Nu) : (a = [Nu]));
      }
      u = u.return;
    }
    a !== null && Rc(l, a, t, e), (l.flags |= 262144);
  }
  function Pu(a) {
    for (a = a.firstContext; a !== null; ) {
      if (!sl(a.context._currentValue, a.memoizedValue)) return !0;
      a = a.next;
    }
    return !1;
  }
  function Bt(a) {
    (Ct = a),
      (Ll = null),
      (a = a.dependencies),
      a !== null && (a.firstContext = null);
  }
  function Ia(a) {
    return vs(Ct, a);
  }
  function an(a, l) {
    return Ct === null && Bt(a), vs(a, l);
  }
  function vs(a, l) {
    var t = l._currentValue;
    if (((l = { context: l, memoizedValue: t, next: null }), Ll === null)) {
      if (a === null) throw Error(m(308));
      (Ll = l),
        (a.dependencies = { lanes: 0, firstContext: l }),
        (a.flags |= 524288);
    } else Ll = Ll.next = l;
    return t;
  }
  var ph =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var a = [],
              l = (this.signal = {
                aborted: !1,
                addEventListener: function (t, e) {
                  a.push(e);
                },
              });
            this.abort = function () {
              (l.aborted = !0),
                a.forEach(function (t) {
                  return t();
                });
            };
          },
    Ah = M.unstable_scheduleCallback,
    Eh = M.unstable_NormalPriority,
    qa = {
      $$typeof: w,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Uc() {
    return { controller: new ph(), data: new Map(), refCount: 0 };
  }
  function ke(a) {
    a.refCount--,
      a.refCount === 0 &&
        Ah(Eh, function () {
          a.controller.abort();
        });
  }
  var Fe = null,
    Hc = 0,
    re = 0,
    oe = null;
  function Nh(a, l) {
    if (Fe === null) {
      var t = (Fe = []);
      (Hc = 0),
        (re = Ci()),
        (oe = {
          status: "pending",
          value: void 0,
          then: function (e) {
            t.push(e);
          },
        });
    }
    return Hc++, l.then(ys, ys), l;
  }
  function ys() {
    if (--Hc === 0 && Fe !== null) {
      oe !== null && (oe.status = "fulfilled");
      var a = Fe;
      (Fe = null), (re = 0), (oe = null);
      for (var l = 0; l < a.length; l++) (0, a[l])();
    }
  }
  function Th(a, l) {
    var t = [],
      e = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          t.push(u);
        },
      };
    return (
      a.then(
        function () {
          (e.status = "fulfilled"), (e.value = l);
          for (var u = 0; u < t.length; u++) (0, t[u])(l);
        },
        function (u) {
          for (e.status = "rejected", e.reason = u, u = 0; u < t.length; u++)
            (0, t[u])(void 0);
        }
      ),
      e
    );
  }
  var gs = S.S;
  S.S = function (a, l) {
    typeof l == "object" &&
      l !== null &&
      typeof l.then == "function" &&
      Nh(a, l),
      gs !== null && gs(a, l);
  };
  var Yt = _(null);
  function qc() {
    var a = Yt.current;
    return a !== null ? a : ga.pooledCache;
  }
  function ln(a, l) {
    l === null ? D(Yt, Yt.current) : D(Yt, l.pool);
  }
  function bs() {
    var a = qc();
    return a === null ? null : { parent: qa._currentValue, pool: a };
  }
  var Ie = Error(m(460)),
    Ss = Error(m(474)),
    tn = Error(m(542)),
    Cc = { then: function () {} };
  function zs(a) {
    return (a = a.status), a === "fulfilled" || a === "rejected";
  }
  function en() {}
  function ps(a, l, t) {
    switch (
      ((t = a[t]),
      t === void 0 ? a.push(l) : t !== l && (l.then(en, en), (l = t)),
      l.status)
    ) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw ((a = l.reason), Es(a), a);
      default:
        if (typeof l.status == "string") l.then(en, en);
        else {
          if (((a = ga), a !== null && 100 < a.shellSuspendCounter))
            throw Error(m(482));
          (a = l),
            (a.status = "pending"),
            a.then(
              function (e) {
                if (l.status === "pending") {
                  var u = l;
                  (u.status = "fulfilled"), (u.value = e);
                }
              },
              function (e) {
                if (l.status === "pending") {
                  var u = l;
                  (u.status = "rejected"), (u.reason = e);
                }
              }
            );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw ((a = l.reason), Es(a), a);
        }
        throw ((Pe = l), Ie);
    }
  }
  var Pe = null;
  function As() {
    if (Pe === null) throw Error(m(459));
    var a = Pe;
    return (Pe = null), a;
  }
  function Es(a) {
    if (a === Ie || a === tn) throw Error(m(483));
  }
  var ct = !1;
  function Bc(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Yc(a, l) {
    (a = a.updateQueue),
      l.updateQueue === a &&
        (l.updateQueue = {
          baseState: a.baseState,
          firstBaseUpdate: a.firstBaseUpdate,
          lastBaseUpdate: a.lastBaseUpdate,
          shared: a.shared,
          callbacks: null,
        });
  }
  function it(a) {
    return { lane: a, tag: 0, payload: null, callback: null, next: null };
  }
  function ft(a, l, t) {
    var e = a.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (oa & 2) !== 0)) {
      var u = e.pending;
      return (
        u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
        (e.pending = l),
        (l = Wu(a)),
        ss(a, null, t),
        l
      );
    }
    return $u(a, e, l, t), Wu(a);
  }
  function au(a, l, t) {
    if (
      ((l = l.updateQueue), l !== null && ((l = l.shared), (t & 4194048) !== 0))
    ) {
      var e = l.lanes;
      (e &= a.pendingLanes), (t |= e), (l.lanes = t), yf(a, t);
    }
  }
  function Xc(a, l) {
    var t = a.updateQueue,
      e = a.alternate;
    if (e !== null && ((e = e.updateQueue), t === e)) {
      var u = null,
        n = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var c = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null,
          };
          n === null ? (u = n = c) : (n = n.next = c), (t = t.next);
        } while (t !== null);
        n === null ? (u = n = l) : (n = n.next = l);
      } else u = n = l;
      (t = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks,
      }),
        (a.updateQueue = t);
      return;
    }
    (a = t.lastBaseUpdate),
      a === null ? (t.firstBaseUpdate = l) : (a.next = l),
      (t.lastBaseUpdate = l);
  }
  var Gc = !1;
  function lu() {
    if (Gc) {
      var a = oe;
      if (a !== null) throw a;
    }
  }
  function tu(a, l, t, e) {
    Gc = !1;
    var u = a.updateQueue;
    ct = !1;
    var n = u.firstBaseUpdate,
      c = u.lastBaseUpdate,
      i = u.shared.pending;
    if (i !== null) {
      u.shared.pending = null;
      var f = i,
        y = f.next;
      (f.next = null), c === null ? (n = y) : (c.next = y), (c = f);
      var z = a.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (i = z.lastBaseUpdate),
        i !== c &&
          (i === null ? (z.firstBaseUpdate = y) : (i.next = y),
          (z.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var T = u.baseState;
      (c = 0), (z = y = f = null), (i = n);
      do {
        var g = i.lane & -536870913,
          b = g !== i.lane;
        if (b ? (ea & g) === g : (e & g) === g) {
          g !== 0 && g === re && (Gc = !0),
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: null,
                  next: null,
                });
          a: {
            var K = a,
              V = i;
            g = l;
            var va = t;
            switch (V.tag) {
              case 1:
                if (((K = V.payload), typeof K == "function")) {
                  T = K.call(va, T, g);
                  break a;
                }
                T = K;
                break a;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = V.payload),
                  (g = typeof K == "function" ? K.call(va, T, g) : K),
                  g == null)
                )
                  break a;
                T = C({}, T, g);
                break a;
              case 2:
                ct = !0;
            }
          }
          (g = i.callback),
            g !== null &&
              ((a.flags |= 64),
              b && (a.flags |= 8192),
              (b = u.callbacks),
              b === null ? (u.callbacks = [g]) : b.push(g));
        } else
          (b = {
            lane: g,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            z === null ? ((y = z = b), (f = T)) : (z = z.next = b),
            (c |= g);
        if (((i = i.next), i === null)) {
          if (((i = u.shared.pending), i === null)) break;
          (b = i),
            (i = b.next),
            (b.next = null),
            (u.lastBaseUpdate = b),
            (u.shared.pending = null);
        }
      } while (!0);
      z === null && (f = T),
        (u.baseState = f),
        (u.firstBaseUpdate = y),
        (u.lastBaseUpdate = z),
        n === null && (u.shared.lanes = 0),
        (yt |= c),
        (a.lanes = c),
        (a.memoizedState = T);
    }
  }
  function Ns(a, l) {
    if (typeof a != "function") throw Error(m(191, a));
    a.call(l);
  }
  function Ts(a, l) {
    var t = a.callbacks;
    if (t !== null)
      for (a.callbacks = null, a = 0; a < t.length; a++) Ns(t[a], l);
  }
  var de = _(null),
    un = _(0);
  function _s(a, l) {
    (a = Il), D(un, a), D(de, l), (Il = a | l.baseLanes);
  }
  function Qc() {
    D(un, Il), D(de, de.current);
  }
  function Zc() {
    (Il = un.current), R(de), R(un);
  }
  var st = 0,
    W = null,
    ha = null,
    Ra = null,
    nn = !1,
    he = !1,
    Xt = !1,
    cn = 0,
    eu = 0,
    me = null,
    _h = 0;
  function Ta() {
    throw Error(m(321));
  }
  function Vc(a, l) {
    if (l === null) return !1;
    for (var t = 0; t < l.length && t < a.length; t++)
      if (!sl(a[t], l[t])) return !1;
    return !0;
  }
  function Lc(a, l, t, e, u, n) {
    return (
      (st = n),
      (W = l),
      (l.memoizedState = null),
      (l.updateQueue = null),
      (l.lanes = 0),
      (S.H = a === null || a.memoizedState === null ? sr : rr),
      (Xt = !1),
      (n = t(e, u)),
      (Xt = !1),
      he && (n = Ms(l, t, e, u)),
      Os(a),
      n
    );
  }
  function Os(a) {
    S.H = hn;
    var l = ha !== null && ha.next !== null;
    if (((st = 0), (Ra = ha = W = null), (nn = !1), (eu = 0), (me = null), l))
      throw Error(m(300));
    a === null ||
      Xa ||
      ((a = a.dependencies), a !== null && Pu(a) && (Xa = !0));
  }
  function Ms(a, l, t, e) {
    W = a;
    var u = 0;
    do {
      if ((he && (me = null), (eu = 0), (he = !1), 25 <= u))
        throw Error(m(301));
      if (((u += 1), (Ra = ha = null), a.updateQueue != null)) {
        var n = a.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (S.H = Uh), (n = l(t, e));
    } while (he);
    return n;
  }
  function Oh() {
    var a = S.H,
      l = a.useState()[0];
    return (
      (l = typeof l.then == "function" ? uu(l) : l),
      (a = a.useState()[0]),
      (ha !== null ? ha.memoizedState : null) !== a && (W.flags |= 1024),
      l
    );
  }
  function Kc() {
    var a = cn !== 0;
    return (cn = 0), a;
  }
  function Jc(a, l, t) {
    (l.updateQueue = a.updateQueue), (l.flags &= -2053), (a.lanes &= ~t);
  }
  function wc(a) {
    if (nn) {
      for (a = a.memoizedState; a !== null; ) {
        var l = a.queue;
        l !== null && (l.pending = null), (a = a.next);
      }
      nn = !1;
    }
    (st = 0), (Ra = ha = W = null), (he = !1), (eu = cn = 0), (me = null);
  }
  function ul() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ra === null ? (W.memoizedState = Ra = a) : (Ra = Ra.next = a), Ra;
  }
  function Ua() {
    if (ha === null) {
      var a = W.alternate;
      a = a !== null ? a.memoizedState : null;
    } else a = ha.next;
    var l = Ra === null ? W.memoizedState : Ra.next;
    if (l !== null) (Ra = l), (ha = a);
    else {
      if (a === null)
        throw W.alternate === null ? Error(m(467)) : Error(m(310));
      (ha = a),
        (a = {
          memoizedState: ha.memoizedState,
          baseState: ha.baseState,
          baseQueue: ha.baseQueue,
          queue: ha.queue,
          next: null,
        }),
        Ra === null ? (W.memoizedState = Ra = a) : (Ra = Ra.next = a);
    }
    return Ra;
  }
  function $c() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function uu(a) {
    var l = eu;
    return (
      (eu += 1),
      me === null && (me = []),
      (a = ps(me, a, l)),
      (l = W),
      (Ra === null ? l.memoizedState : Ra.next) === null &&
        ((l = l.alternate),
        (S.H = l === null || l.memoizedState === null ? sr : rr)),
      a
    );
  }
  function fn(a) {
    if (a !== null && typeof a == "object") {
      if (typeof a.then == "function") return uu(a);
      if (a.$$typeof === w) return Ia(a);
    }
    throw Error(m(438, String(a)));
  }
  function Wc(a) {
    var l = null,
      t = W.updateQueue;
    if ((t !== null && (l = t.memoCache), l == null)) {
      var e = W.alternate;
      e !== null &&
        ((e = e.updateQueue),
        e !== null &&
          ((e = e.memoCache),
          e != null &&
            (l = {
              data: e.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (l == null && (l = { data: [], index: 0 }),
      t === null && ((t = $c()), (W.updateQueue = t)),
      (t.memoCache = l),
      (t = l.data[l.index]),
      t === void 0)
    )
      for (t = l.data[l.index] = Array(a), e = 0; e < a; e++) t[e] = Ml;
    return l.index++, t;
  }
  function Jl(a, l) {
    return typeof l == "function" ? l(a) : l;
  }
  function sn(a) {
    var l = Ua();
    return kc(l, ha, a);
  }
  function kc(a, l, t) {
    var e = a.queue;
    if (e === null) throw Error(m(311));
    e.lastRenderedReducer = t;
    var u = a.baseQueue,
      n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        (u.next = n.next), (n.next = c);
      }
      (l.baseQueue = u = n), (e.pending = null);
    }
    if (((n = a.baseState), u === null)) a.memoizedState = n;
    else {
      l = u.next;
      var i = (c = null),
        f = null,
        y = l,
        z = !1;
      do {
        var T = y.lane & -536870913;
        if (T !== y.lane ? (ea & T) === T : (st & T) === T) {
          var g = y.revertLane;
          if (g === 0)
            f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              T === re && (z = !0);
          else if ((st & g) === g) {
            (y = y.next), g === re && (z = !0);
            continue;
          } else
            (T = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              f === null ? ((i = f = T), (c = n)) : (f = f.next = T),
              (W.lanes |= g),
              (yt |= g);
          (T = y.action),
            Xt && t(n, T),
            (n = y.hasEagerState ? y.eagerState : t(n, T));
        } else
          (g = {
            lane: T,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            f === null ? ((i = f = g), (c = n)) : (f = f.next = g),
            (W.lanes |= T),
            (yt |= T);
        y = y.next;
      } while (y !== null && y !== l);
      if (
        (f === null ? (c = n) : (f.next = i),
        !sl(n, a.memoizedState) && ((Xa = !0), z && ((t = oe), t !== null)))
      )
        throw t;
      (a.memoizedState = n),
        (a.baseState = c),
        (a.baseQueue = f),
        (e.lastRenderedState = n);
    }
    return u === null && (e.lanes = 0), [a.memoizedState, e.dispatch];
  }
  function Fc(a) {
    var l = Ua(),
      t = l.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = a;
    var e = t.dispatch,
      u = t.pending,
      n = l.memoizedState;
    if (u !== null) {
      t.pending = null;
      var c = (u = u.next);
      do (n = a(n, c.action)), (c = c.next);
      while (c !== u);
      sl(n, l.memoizedState) || (Xa = !0),
        (l.memoizedState = n),
        l.baseQueue === null && (l.baseState = n),
        (t.lastRenderedState = n);
    }
    return [n, e];
  }
  function Ds(a, l, t) {
    var e = W,
      u = Ua(),
      n = fa;
    if (n) {
      if (t === void 0) throw Error(m(407));
      t = t();
    } else t = l();
    var c = !sl((ha || u).memoizedState, t);
    c && ((u.memoizedState = t), (Xa = !0)), (u = u.queue);
    var i = Rs.bind(null, e, u, a);
    if (
      (nu(2048, 8, i, [a]),
      u.getSnapshot !== l || c || (Ra !== null && Ra.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        ve(9, rn(), xs.bind(null, e, u, t, l), null),
        ga === null)
      )
        throw Error(m(349));
      n || (st & 124) !== 0 || js(e, l, t);
    }
    return t;
  }
  function js(a, l, t) {
    (a.flags |= 16384),
      (a = { getSnapshot: l, value: t }),
      (l = W.updateQueue),
      l === null
        ? ((l = $c()), (W.updateQueue = l), (l.stores = [a]))
        : ((t = l.stores), t === null ? (l.stores = [a]) : t.push(a));
  }
  function xs(a, l, t, e) {
    (l.value = t), (l.getSnapshot = e), Us(l) && Hs(a);
  }
  function Rs(a, l, t) {
    return t(function () {
      Us(l) && Hs(a);
    });
  }
  function Us(a) {
    var l = a.getSnapshot;
    a = a.value;
    try {
      var t = l();
      return !sl(a, t);
    } catch {
      return !0;
    }
  }
  function Hs(a) {
    var l = ce(a, 2);
    l !== null && vl(l, a, 2);
  }
  function Ic(a) {
    var l = ul();
    if (typeof a == "function") {
      var t = a;
      if (((a = t()), Xt)) {
        tt(!0);
        try {
          t();
        } finally {
          tt(!1);
        }
      }
    }
    return (
      (l.memoizedState = l.baseState = a),
      (l.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jl,
        lastRenderedState: a,
      }),
      l
    );
  }
  function qs(a, l, t, e) {
    return (a.baseState = t), kc(a, ha, typeof e == "function" ? e : Jl);
  }
  function Mh(a, l, t, e, u) {
    if (dn(a)) throw Error(m(485));
    if (((a = l.action), a !== null)) {
      var n = {
        payload: u,
        action: a,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      S.T !== null ? t(!0) : (n.isTransition = !1),
        e(n),
        (t = l.pending),
        t === null
          ? ((n.next = l.pending = n), Cs(l, n))
          : ((n.next = t.next), (l.pending = t.next = n));
    }
  }
  function Cs(a, l) {
    var t = l.action,
      e = l.payload,
      u = a.state;
    if (l.isTransition) {
      var n = S.T,
        c = {};
      S.T = c;
      try {
        var i = t(u, e),
          f = S.S;
        f !== null && f(c, i), Bs(a, l, i);
      } catch (y) {
        Pc(a, l, y);
      } finally {
        S.T = n;
      }
    } else
      try {
        (n = t(u, e)), Bs(a, l, n);
      } catch (y) {
        Pc(a, l, y);
      }
  }
  function Bs(a, l, t) {
    t !== null && typeof t == "object" && typeof t.then == "function"
      ? t.then(
          function (e) {
            Ys(a, l, e);
          },
          function (e) {
            return Pc(a, l, e);
          }
        )
      : Ys(a, l, t);
  }
  function Ys(a, l, t) {
    (l.status = "fulfilled"),
      (l.value = t),
      Xs(l),
      (a.state = t),
      (l = a.pending),
      l !== null &&
        ((t = l.next),
        t === l ? (a.pending = null) : ((t = t.next), (l.next = t), Cs(a, t)));
  }
  function Pc(a, l, t) {
    var e = a.pending;
    if (((a.pending = null), e !== null)) {
      e = e.next;
      do (l.status = "rejected"), (l.reason = t), Xs(l), (l = l.next);
      while (l !== e);
    }
    a.action = null;
  }
  function Xs(a) {
    a = a.listeners;
    for (var l = 0; l < a.length; l++) (0, a[l])();
  }
  function Gs(a, l) {
    return l;
  }
  function Qs(a, l) {
    if (fa) {
      var t = ga.formState;
      if (t !== null) {
        a: {
          var e = W;
          if (fa) {
            if (pa) {
              l: {
                for (var u = pa, n = xl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (((u = Ol(u.nextSibling)), u === null)) {
                    u = null;
                    break l;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (pa = Ol(u.nextSibling)), (e = u.data === "F!");
                break a;
              }
            }
            qt(e);
          }
          e = !1;
        }
        e && (l = t[0]);
      }
    }
    return (
      (t = ul()),
      (t.memoizedState = t.baseState = l),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gs,
        lastRenderedState: l,
      }),
      (t.queue = e),
      (t = cr.bind(null, W, e)),
      (e.dispatch = t),
      (e = Ic(!1)),
      (n = ui.bind(null, W, !1, e.queue)),
      (e = ul()),
      (u = { state: l, dispatch: null, action: a, pending: null }),
      (e.queue = u),
      (t = Mh.bind(null, W, u, n, t)),
      (u.dispatch = t),
      (e.memoizedState = a),
      [l, t, !1]
    );
  }
  function Zs(a) {
    var l = Ua();
    return Vs(l, ha, a);
  }
  function Vs(a, l, t) {
    if (
      ((l = kc(a, l, Gs)[0]),
      (a = sn(Jl)[0]),
      typeof l == "object" && l !== null && typeof l.then == "function")
    )
      try {
        var e = uu(l);
      } catch (c) {
        throw c === Ie ? tn : c;
      }
    else e = l;
    l = Ua();
    var u = l.queue,
      n = u.dispatch;
    return (
      t !== l.memoizedState &&
        ((W.flags |= 2048), ve(9, rn(), Dh.bind(null, u, t), null)),
      [e, n, a]
    );
  }
  function Dh(a, l) {
    a.action = l;
  }
  function Ls(a) {
    var l = Ua(),
      t = ha;
    if (t !== null) return Vs(l, t, a);
    Ua(), (l = l.memoizedState), (t = Ua());
    var e = t.queue.dispatch;
    return (t.memoizedState = a), [l, e, !1];
  }
  function ve(a, l, t, e) {
    return (
      (a = { tag: a, create: t, deps: e, inst: l, next: null }),
      (l = W.updateQueue),
      l === null && ((l = $c()), (W.updateQueue = l)),
      (t = l.lastEffect),
      t === null
        ? (l.lastEffect = a.next = a)
        : ((e = t.next), (t.next = a), (a.next = e), (l.lastEffect = a)),
      a
    );
  }
  function rn() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ks() {
    return Ua().memoizedState;
  }
  function on(a, l, t, e) {
    var u = ul();
    (e = e === void 0 ? null : e),
      (W.flags |= a),
      (u.memoizedState = ve(1 | l, rn(), t, e));
  }
  function nu(a, l, t, e) {
    var u = Ua();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    ha !== null && e !== null && Vc(e, ha.memoizedState.deps)
      ? (u.memoizedState = ve(l, n, t, e))
      : ((W.flags |= a), (u.memoizedState = ve(1 | l, n, t, e)));
  }
  function Js(a, l) {
    on(8390656, 8, a, l);
  }
  function ws(a, l) {
    nu(2048, 8, a, l);
  }
  function $s(a, l) {
    return nu(4, 2, a, l);
  }
  function Ws(a, l) {
    return nu(4, 4, a, l);
  }
  function ks(a, l) {
    if (typeof l == "function") {
      a = a();
      var t = l(a);
      return function () {
        typeof t == "function" ? t() : l(null);
      };
    }
    if (l != null)
      return (
        (a = a()),
        (l.current = a),
        function () {
          l.current = null;
        }
      );
  }
  function Fs(a, l, t) {
    (t = t != null ? t.concat([a]) : null), nu(4, 4, ks.bind(null, l, a), t);
  }
  function ai() {}
  function Is(a, l) {
    var t = Ua();
    l = l === void 0 ? null : l;
    var e = t.memoizedState;
    return l !== null && Vc(l, e[1]) ? e[0] : ((t.memoizedState = [a, l]), a);
  }
  function Ps(a, l) {
    var t = Ua();
    l = l === void 0 ? null : l;
    var e = t.memoizedState;
    if (l !== null && Vc(l, e[1])) return e[0];
    if (((e = a()), Xt)) {
      tt(!0);
      try {
        a();
      } finally {
        tt(!1);
      }
    }
    return (t.memoizedState = [e, l]), e;
  }
  function li(a, l, t) {
    return t === void 0 || (st & 1073741824) !== 0
      ? (a.memoizedState = l)
      : ((a.memoizedState = t), (a = to()), (W.lanes |= a), (yt |= a), t);
  }
  function ar(a, l, t, e) {
    return sl(t, l)
      ? t
      : de.current !== null
      ? ((a = li(a, t, e)), sl(a, l) || (Xa = !0), a)
      : (st & 42) === 0
      ? ((Xa = !0), (a.memoizedState = t))
      : ((a = to()), (W.lanes |= a), (yt |= a), l);
  }
  function lr(a, l, t, e, u) {
    var n = j.p;
    j.p = n !== 0 && 8 > n ? n : 8;
    var c = S.T,
      i = {};
    (S.T = i), ui(a, !1, l, t);
    try {
      var f = u(),
        y = S.S;
      if (
        (y !== null && y(i, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var z = Th(f, e);
        cu(a, l, z, ml(a));
      } else cu(a, l, e, ml(a));
    } catch (T) {
      cu(a, l, { then: function () {}, status: "rejected", reason: T }, ml());
    } finally {
      (j.p = n), (S.T = c);
    }
  }
  function jh() {}
  function ti(a, l, t, e) {
    if (a.tag !== 5) throw Error(m(476));
    var u = tr(a).queue;
    lr(
      a,
      u,
      l,
      Z,
      t === null
        ? jh
        : function () {
            return er(a), t(e);
          }
    );
  }
  function tr(a) {
    var l = a.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jl,
        lastRenderedState: Z,
      },
      next: null,
    };
    var t = {};
    return (
      (l.next = {
        memoizedState: t,
        baseState: t,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Jl,
          lastRenderedState: t,
        },
        next: null,
      }),
      (a.memoizedState = l),
      (a = a.alternate),
      a !== null && (a.memoizedState = l),
      l
    );
  }
  function er(a) {
    var l = tr(a).next.queue;
    cu(a, l, {}, ml());
  }
  function ei() {
    return Ia(Nu);
  }
  function ur() {
    return Ua().memoizedState;
  }
  function nr() {
    return Ua().memoizedState;
  }
  function xh(a) {
    for (var l = a.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var t = ml();
          a = it(t);
          var e = ft(l, a, t);
          e !== null && (vl(e, l, t), au(e, l, t)),
            (l = { cache: Uc() }),
            (a.payload = l);
          return;
      }
      l = l.return;
    }
  }
  function Rh(a, l, t) {
    var e = ml();
    (t = {
      lane: e,
      revertLane: 0,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      dn(a)
        ? ir(l, t)
        : ((t = Ec(a, l, t, e)), t !== null && (vl(t, a, e), fr(t, l, e)));
  }
  function cr(a, l, t) {
    var e = ml();
    cu(a, l, t, e);
  }
  function cu(a, l, t, e) {
    var u = {
      lane: e,
      revertLane: 0,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (dn(a)) ir(l, u);
    else {
      var n = a.alternate;
      if (
        a.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = l.lastRenderedReducer), n !== null)
      )
        try {
          var c = l.lastRenderedState,
            i = n(c, t);
          if (((u.hasEagerState = !0), (u.eagerState = i), sl(i, c)))
            return $u(a, l, u, 0), ga === null && wu(), !1;
        } catch {
        } finally {
        }
      if (((t = Ec(a, l, u, e)), t !== null))
        return vl(t, a, e), fr(t, l, e), !0;
    }
    return !1;
  }
  function ui(a, l, t, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: Ci(),
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      dn(a))
    ) {
      if (l) throw Error(m(479));
    } else (l = Ec(a, t, e, 2)), l !== null && vl(l, a, 2);
  }
  function dn(a) {
    var l = a.alternate;
    return a === W || (l !== null && l === W);
  }
  function ir(a, l) {
    he = nn = !0;
    var t = a.pending;
    t === null ? (l.next = l) : ((l.next = t.next), (t.next = l)),
      (a.pending = l);
  }
  function fr(a, l, t) {
    if ((t & 4194048) !== 0) {
      var e = l.lanes;
      (e &= a.pendingLanes), (t |= e), (l.lanes = t), yf(a, t);
    }
  }
  var hn = {
      readContext: Ia,
      use: fn,
      useCallback: Ta,
      useContext: Ta,
      useEffect: Ta,
      useImperativeHandle: Ta,
      useLayoutEffect: Ta,
      useInsertionEffect: Ta,
      useMemo: Ta,
      useReducer: Ta,
      useRef: Ta,
      useState: Ta,
      useDebugValue: Ta,
      useDeferredValue: Ta,
      useTransition: Ta,
      useSyncExternalStore: Ta,
      useId: Ta,
      useHostTransitionStatus: Ta,
      useFormState: Ta,
      useActionState: Ta,
      useOptimistic: Ta,
      useMemoCache: Ta,
      useCacheRefresh: Ta,
    },
    sr = {
      readContext: Ia,
      use: fn,
      useCallback: function (a, l) {
        return (ul().memoizedState = [a, l === void 0 ? null : l]), a;
      },
      useContext: Ia,
      useEffect: Js,
      useImperativeHandle: function (a, l, t) {
        (t = t != null ? t.concat([a]) : null),
          on(4194308, 4, ks.bind(null, l, a), t);
      },
      useLayoutEffect: function (a, l) {
        return on(4194308, 4, a, l);
      },
      useInsertionEffect: function (a, l) {
        on(4, 2, a, l);
      },
      useMemo: function (a, l) {
        var t = ul();
        l = l === void 0 ? null : l;
        var e = a();
        if (Xt) {
          tt(!0);
          try {
            a();
          } finally {
            tt(!1);
          }
        }
        return (t.memoizedState = [e, l]), e;
      },
      useReducer: function (a, l, t) {
        var e = ul();
        if (t !== void 0) {
          var u = t(l);
          if (Xt) {
            tt(!0);
            try {
              t(l);
            } finally {
              tt(!1);
            }
          }
        } else u = l;
        return (
          (e.memoizedState = e.baseState = u),
          (a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: a,
            lastRenderedState: u,
          }),
          (e.queue = a),
          (a = a.dispatch = Rh.bind(null, W, a)),
          [e.memoizedState, a]
        );
      },
      useRef: function (a) {
        var l = ul();
        return (a = { current: a }), (l.memoizedState = a);
      },
      useState: function (a) {
        a = Ic(a);
        var l = a.queue,
          t = cr.bind(null, W, l);
        return (l.dispatch = t), [a.memoizedState, t];
      },
      useDebugValue: ai,
      useDeferredValue: function (a, l) {
        var t = ul();
        return li(t, a, l);
      },
      useTransition: function () {
        var a = Ic(!1);
        return (
          (a = lr.bind(null, W, a.queue, !0, !1)),
          (ul().memoizedState = a),
          [!1, a]
        );
      },
      useSyncExternalStore: function (a, l, t) {
        var e = W,
          u = ul();
        if (fa) {
          if (t === void 0) throw Error(m(407));
          t = t();
        } else {
          if (((t = l()), ga === null)) throw Error(m(349));
          (ea & 124) !== 0 || js(e, l, t);
        }
        u.memoizedState = t;
        var n = { value: t, getSnapshot: l };
        return (
          (u.queue = n),
          Js(Rs.bind(null, e, n, a), [a]),
          (e.flags |= 2048),
          ve(9, rn(), xs.bind(null, e, n, t, l), null),
          t
        );
      },
      useId: function () {
        var a = ul(),
          l = ga.identifierPrefix;
        if (fa) {
          var t = Vl,
            e = Zl;
          (t = (e & ~(1 << (32 - fl(e) - 1))).toString(32) + t),
            (l = "«" + l + "R" + t),
            (t = cn++),
            0 < t && (l += "H" + t.toString(32)),
            (l += "»");
        } else (t = _h++), (l = "«" + l + "r" + t.toString(32) + "»");
        return (a.memoizedState = l);
      },
      useHostTransitionStatus: ei,
      useFormState: Qs,
      useActionState: Qs,
      useOptimistic: function (a) {
        var l = ul();
        l.memoizedState = l.baseState = a;
        var t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (l.queue = t), (l = ui.bind(null, W, !0, t)), (t.dispatch = l), [a, l]
        );
      },
      useMemoCache: Wc,
      useCacheRefresh: function () {
        return (ul().memoizedState = xh.bind(null, W));
      },
    },
    rr = {
      readContext: Ia,
      use: fn,
      useCallback: Is,
      useContext: Ia,
      useEffect: ws,
      useImperativeHandle: Fs,
      useInsertionEffect: $s,
      useLayoutEffect: Ws,
      useMemo: Ps,
      useReducer: sn,
      useRef: Ks,
      useState: function () {
        return sn(Jl);
      },
      useDebugValue: ai,
      useDeferredValue: function (a, l) {
        var t = Ua();
        return ar(t, ha.memoizedState, a, l);
      },
      useTransition: function () {
        var a = sn(Jl)[0],
          l = Ua().memoizedState;
        return [typeof a == "boolean" ? a : uu(a), l];
      },
      useSyncExternalStore: Ds,
      useId: ur,
      useHostTransitionStatus: ei,
      useFormState: Zs,
      useActionState: Zs,
      useOptimistic: function (a, l) {
        var t = Ua();
        return qs(t, ha, a, l);
      },
      useMemoCache: Wc,
      useCacheRefresh: nr,
    },
    Uh = {
      readContext: Ia,
      use: fn,
      useCallback: Is,
      useContext: Ia,
      useEffect: ws,
      useImperativeHandle: Fs,
      useInsertionEffect: $s,
      useLayoutEffect: Ws,
      useMemo: Ps,
      useReducer: Fc,
      useRef: Ks,
      useState: function () {
        return Fc(Jl);
      },
      useDebugValue: ai,
      useDeferredValue: function (a, l) {
        var t = Ua();
        return ha === null ? li(t, a, l) : ar(t, ha.memoizedState, a, l);
      },
      useTransition: function () {
        var a = Fc(Jl)[0],
          l = Ua().memoizedState;
        return [typeof a == "boolean" ? a : uu(a), l];
      },
      useSyncExternalStore: Ds,
      useId: ur,
      useHostTransitionStatus: ei,
      useFormState: Ls,
      useActionState: Ls,
      useOptimistic: function (a, l) {
        var t = Ua();
        return ha !== null
          ? qs(t, ha, a, l)
          : ((t.baseState = a), [a, t.queue.dispatch]);
      },
      useMemoCache: Wc,
      useCacheRefresh: nr,
    },
    ye = null,
    iu = 0;
  function mn(a) {
    var l = iu;
    return (iu += 1), ye === null && (ye = []), ps(ye, a, l);
  }
  function fu(a, l) {
    (l = l.props.ref), (a.ref = l !== void 0 ? l : null);
  }
  function vn(a, l) {
    throw l.$$typeof === k
      ? Error(m(525))
      : ((a = Object.prototype.toString.call(l)),
        Error(
          m(
            31,
            a === "[object Object]"
              ? "object with keys {" + Object.keys(l).join(", ") + "}"
              : a
          )
        ));
  }
  function or(a) {
    var l = a._init;
    return l(a._payload);
  }
  function dr(a) {
    function l(h, o) {
      if (a) {
        var v = h.deletions;
        v === null ? ((h.deletions = [o]), (h.flags |= 16)) : v.push(o);
      }
    }
    function t(h, o) {
      if (!a) return null;
      for (; o !== null; ) l(h, o), (o = o.sibling);
      return null;
    }
    function e(h) {
      for (var o = new Map(); h !== null; )
        h.key !== null ? o.set(h.key, h) : o.set(h.index, h), (h = h.sibling);
      return o;
    }
    function u(h, o) {
      return (h = Ql(h, o)), (h.index = 0), (h.sibling = null), h;
    }
    function n(h, o, v) {
      return (
        (h.index = v),
        a
          ? ((v = h.alternate),
            v !== null
              ? ((v = v.index), v < o ? ((h.flags |= 67108866), o) : v)
              : ((h.flags |= 67108866), o))
          : ((h.flags |= 1048576), o)
      );
    }
    function c(h) {
      return a && h.alternate === null && (h.flags |= 67108866), h;
    }
    function i(h, o, v, E) {
      return o === null || o.tag !== 6
        ? ((o = Tc(v, h.mode, E)), (o.return = h), o)
        : ((o = u(o, v)), (o.return = h), o);
    }
    function f(h, o, v, E) {
      var H = v.type;
      return H === Ea
        ? z(h, o, v.props.children, E, v.key)
        : o !== null &&
          (o.elementType === H ||
            (typeof H == "object" &&
              H !== null &&
              H.$$typeof === Wa &&
              or(H) === o.type))
        ? ((o = u(o, v.props)), fu(o, v), (o.return = h), o)
        : ((o = ku(v.type, v.key, v.props, null, h.mode, E)),
          fu(o, v),
          (o.return = h),
          o);
    }
    function y(h, o, v, E) {
      return o === null ||
        o.tag !== 4 ||
        o.stateNode.containerInfo !== v.containerInfo ||
        o.stateNode.implementation !== v.implementation
        ? ((o = _c(v, h.mode, E)), (o.return = h), o)
        : ((o = u(o, v.children || [])), (o.return = h), o);
    }
    function z(h, o, v, E, H) {
      return o === null || o.tag !== 7
        ? ((o = xt(v, h.mode, E, H)), (o.return = h), o)
        : ((o = u(o, v)), (o.return = h), o);
    }
    function T(h, o, v) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return (o = Tc("" + o, h.mode, v)), (o.return = h), o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case la:
            return (
              (v = ku(o.type, o.key, o.props, null, h.mode, v)),
              fu(v, o),
              (v.return = h),
              v
            );
          case ca:
            return (o = _c(o, h.mode, v)), (o.return = h), o;
          case Wa:
            var E = o._init;
            return (o = E(o._payload)), T(h, o, v);
        }
        if (Na(o) || ba(o))
          return (o = xt(o, h.mode, v, null)), (o.return = h), o;
        if (typeof o.then == "function") return T(h, mn(o), v);
        if (o.$$typeof === w) return T(h, an(h, o), v);
        vn(h, o);
      }
      return null;
    }
    function g(h, o, v, E) {
      var H = o !== null ? o.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return H !== null ? null : i(h, o, "" + v, E);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case la:
            return v.key === H ? f(h, o, v, E) : null;
          case ca:
            return v.key === H ? y(h, o, v, E) : null;
          case Wa:
            return (H = v._init), (v = H(v._payload)), g(h, o, v, E);
        }
        if (Na(v) || ba(v)) return H !== null ? null : z(h, o, v, E, null);
        if (typeof v.then == "function") return g(h, o, mn(v), E);
        if (v.$$typeof === w) return g(h, o, an(h, v), E);
        vn(h, v);
      }
      return null;
    }
    function b(h, o, v, E, H) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return (h = h.get(v) || null), i(o, h, "" + E, H);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case la:
            return (
              (h = h.get(E.key === null ? v : E.key) || null), f(o, h, E, H)
            );
          case ca:
            return (
              (h = h.get(E.key === null ? v : E.key) || null), y(o, h, E, H)
            );
          case Wa:
            var F = E._init;
            return (E = F(E._payload)), b(h, o, v, E, H);
        }
        if (Na(E) || ba(E)) return (h = h.get(v) || null), z(o, h, E, H, null);
        if (typeof E.then == "function") return b(h, o, v, mn(E), H);
        if (E.$$typeof === w) return b(h, o, v, an(o, E), H);
        vn(o, E);
      }
      return null;
    }
    function K(h, o, v, E) {
      for (
        var H = null, F = null, Y = o, L = (o = 0), Qa = null;
        Y !== null && L < v.length;
        L++
      ) {
        Y.index > L ? ((Qa = Y), (Y = null)) : (Qa = Y.sibling);
        var na = g(h, Y, v[L], E);
        if (na === null) {
          Y === null && (Y = Qa);
          break;
        }
        a && Y && na.alternate === null && l(h, Y),
          (o = n(na, o, L)),
          F === null ? (H = na) : (F.sibling = na),
          (F = na),
          (Y = Qa);
      }
      if (L === v.length) return t(h, Y), fa && Ut(h, L), H;
      if (Y === null) {
        for (; L < v.length; L++)
          (Y = T(h, v[L], E)),
            Y !== null &&
              ((o = n(Y, o, L)),
              F === null ? (H = Y) : (F.sibling = Y),
              (F = Y));
        return fa && Ut(h, L), H;
      }
      for (Y = e(Y); L < v.length; L++)
        (Qa = b(Y, h, L, v[L], E)),
          Qa !== null &&
            (a &&
              Qa.alternate !== null &&
              Y.delete(Qa.key === null ? L : Qa.key),
            (o = n(Qa, o, L)),
            F === null ? (H = Qa) : (F.sibling = Qa),
            (F = Qa));
      return (
        a &&
          Y.forEach(function (Tt) {
            return l(h, Tt);
          }),
        fa && Ut(h, L),
        H
      );
    }
    function V(h, o, v, E) {
      if (v == null) throw Error(m(151));
      for (
        var H = null, F = null, Y = o, L = (o = 0), Qa = null, na = v.next();
        Y !== null && !na.done;
        L++, na = v.next()
      ) {
        Y.index > L ? ((Qa = Y), (Y = null)) : (Qa = Y.sibling);
        var Tt = g(h, Y, na.value, E);
        if (Tt === null) {
          Y === null && (Y = Qa);
          break;
        }
        a && Y && Tt.alternate === null && l(h, Y),
          (o = n(Tt, o, L)),
          F === null ? (H = Tt) : (F.sibling = Tt),
          (F = Tt),
          (Y = Qa);
      }
      if (na.done) return t(h, Y), fa && Ut(h, L), H;
      if (Y === null) {
        for (; !na.done; L++, na = v.next())
          (na = T(h, na.value, E)),
            na !== null &&
              ((o = n(na, o, L)),
              F === null ? (H = na) : (F.sibling = na),
              (F = na));
        return fa && Ut(h, L), H;
      }
      for (Y = e(Y); !na.done; L++, na = v.next())
        (na = b(Y, h, L, na.value, E)),
          na !== null &&
            (a &&
              na.alternate !== null &&
              Y.delete(na.key === null ? L : na.key),
            (o = n(na, o, L)),
            F === null ? (H = na) : (F.sibling = na),
            (F = na));
      return (
        a &&
          Y.forEach(function (Hm) {
            return l(h, Hm);
          }),
        fa && Ut(h, L),
        H
      );
    }
    function va(h, o, v, E) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === Ea &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case la:
            a: {
              for (var H = v.key; o !== null; ) {
                if (o.key === H) {
                  if (((H = v.type), H === Ea)) {
                    if (o.tag === 7) {
                      t(h, o.sibling),
                        (E = u(o, v.props.children)),
                        (E.return = h),
                        (h = E);
                      break a;
                    }
                  } else if (
                    o.elementType === H ||
                    (typeof H == "object" &&
                      H !== null &&
                      H.$$typeof === Wa &&
                      or(H) === o.type)
                  ) {
                    t(h, o.sibling),
                      (E = u(o, v.props)),
                      fu(E, v),
                      (E.return = h),
                      (h = E);
                    break a;
                  }
                  t(h, o);
                  break;
                } else l(h, o);
                o = o.sibling;
              }
              v.type === Ea
                ? ((E = xt(v.props.children, h.mode, E, v.key)),
                  (E.return = h),
                  (h = E))
                : ((E = ku(v.type, v.key, v.props, null, h.mode, E)),
                  fu(E, v),
                  (E.return = h),
                  (h = E));
            }
            return c(h);
          case ca:
            a: {
              for (H = v.key; o !== null; ) {
                if (o.key === H)
                  if (
                    o.tag === 4 &&
                    o.stateNode.containerInfo === v.containerInfo &&
                    o.stateNode.implementation === v.implementation
                  ) {
                    t(h, o.sibling),
                      (E = u(o, v.children || [])),
                      (E.return = h),
                      (h = E);
                    break a;
                  } else {
                    t(h, o);
                    break;
                  }
                else l(h, o);
                o = o.sibling;
              }
              (E = _c(v, h.mode, E)), (E.return = h), (h = E);
            }
            return c(h);
          case Wa:
            return (H = v._init), (v = H(v._payload)), va(h, o, v, E);
        }
        if (Na(v)) return K(h, o, v, E);
        if (ba(v)) {
          if (((H = ba(v)), typeof H != "function")) throw Error(m(150));
          return (v = H.call(v)), V(h, o, v, E);
        }
        if (typeof v.then == "function") return va(h, o, mn(v), E);
        if (v.$$typeof === w) return va(h, o, an(h, v), E);
        vn(h, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          o !== null && o.tag === 6
            ? (t(h, o.sibling), (E = u(o, v)), (E.return = h), (h = E))
            : (t(h, o), (E = Tc(v, h.mode, E)), (E.return = h), (h = E)),
          c(h))
        : t(h, o);
    }
    return function (h, o, v, E) {
      try {
        iu = 0;
        var H = va(h, o, v, E);
        return (ye = null), H;
      } catch (Y) {
        if (Y === Ie || Y === tn) throw Y;
        var F = rl(29, Y, null, h.mode);
        return (F.lanes = E), (F.return = h), F;
      } finally {
      }
    };
  }
  var ge = dr(!0),
    hr = dr(!1),
    Al = _(null),
    Rl = null;
  function rt(a) {
    var l = a.alternate;
    D(Ca, Ca.current & 1),
      D(Al, a),
      Rl === null &&
        (l === null || de.current !== null || l.memoizedState !== null) &&
        (Rl = a);
  }
  function mr(a) {
    if (a.tag === 22) {
      if ((D(Ca, Ca.current), D(Al, a), Rl === null)) {
        var l = a.alternate;
        l !== null && l.memoizedState !== null && (Rl = a);
      }
    } else ot();
  }
  function ot() {
    D(Ca, Ca.current), D(Al, Al.current);
  }
  function wl(a) {
    R(Al), Rl === a && (Rl = null), R(Ca);
  }
  var Ca = _(0);
  function yn(a) {
    for (var l = a; l !== null; ) {
      if (l.tag === 13) {
        var t = l.memoizedState;
        if (
          t !== null &&
          ((t = t.dehydrated), t === null || t.data === "$?" || $i(t))
        )
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        (l.child.return = l), (l = l.child);
        continue;
      }
      if (l === a) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === a) return null;
        l = l.return;
      }
      (l.sibling.return = l.return), (l = l.sibling);
    }
    return null;
  }
  function ni(a, l, t, e) {
    (l = a.memoizedState),
      (t = t(e, l)),
      (t = t == null ? l : C({}, l, t)),
      (a.memoizedState = t),
      a.lanes === 0 && (a.updateQueue.baseState = t);
  }
  var ci = {
    enqueueSetState: function (a, l, t) {
      a = a._reactInternals;
      var e = ml(),
        u = it(e);
      (u.payload = l),
        t != null && (u.callback = t),
        (l = ft(a, u, e)),
        l !== null && (vl(l, a, e), au(l, a, e));
    },
    enqueueReplaceState: function (a, l, t) {
      a = a._reactInternals;
      var e = ml(),
        u = it(e);
      (u.tag = 1),
        (u.payload = l),
        t != null && (u.callback = t),
        (l = ft(a, u, e)),
        l !== null && (vl(l, a, e), au(l, a, e));
    },
    enqueueForceUpdate: function (a, l) {
      a = a._reactInternals;
      var t = ml(),
        e = it(t);
      (e.tag = 2),
        l != null && (e.callback = l),
        (l = ft(a, e, t)),
        l !== null && (vl(l, a, t), au(l, a, t));
    },
  };
  function vr(a, l, t, e, u, n, c) {
    return (
      (a = a.stateNode),
      typeof a.shouldComponentUpdate == "function"
        ? a.shouldComponentUpdate(e, n, c)
        : l.prototype && l.prototype.isPureReactComponent
        ? !Le(t, e) || !Le(u, n)
        : !0
    );
  }
  function yr(a, l, t, e) {
    (a = l.state),
      typeof l.componentWillReceiveProps == "function" &&
        l.componentWillReceiveProps(t, e),
      typeof l.UNSAFE_componentWillReceiveProps == "function" &&
        l.UNSAFE_componentWillReceiveProps(t, e),
      l.state !== a && ci.enqueueReplaceState(l, l.state, null);
  }
  function Gt(a, l) {
    var t = l;
    if ("ref" in l) {
      t = {};
      for (var e in l) e !== "ref" && (t[e] = l[e]);
    }
    if ((a = a.defaultProps)) {
      t === l && (t = C({}, t));
      for (var u in a) t[u] === void 0 && (t[u] = a[u]);
    }
    return t;
  }
  var gn =
    typeof reportError == "function"
      ? reportError
      : function (a) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var l = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof a == "object" &&
                a !== null &&
                typeof a.message == "string"
                  ? String(a.message)
                  : String(a),
              error: a,
            });
            if (!window.dispatchEvent(l)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", a);
            return;
          }
          console.error(a);
        };
  function gr(a) {
    gn(a);
  }
  function br(a) {
    console.error(a);
  }
  function Sr(a) {
    gn(a);
  }
  function bn(a, l) {
    try {
      var t = a.onUncaughtError;
      t(l.value, { componentStack: l.stack });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function zr(a, l, t) {
    try {
      var e = a.onCaughtError;
      e(t.value, {
        componentStack: t.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function ii(a, l, t) {
    return (
      (t = it(t)),
      (t.tag = 3),
      (t.payload = { element: null }),
      (t.callback = function () {
        bn(a, l);
      }),
      t
    );
  }
  function pr(a) {
    return (a = it(a)), (a.tag = 3), a;
  }
  function Ar(a, l, t, e) {
    var u = t.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      (a.payload = function () {
        return u(n);
      }),
        (a.callback = function () {
          zr(l, t, e);
        });
    }
    var c = t.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (a.callback = function () {
        zr(l, t, e),
          typeof u != "function" &&
            (gt === null ? (gt = new Set([this])) : gt.add(this));
        var i = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: i !== null ? i : "",
        });
      });
  }
  function Hh(a, l, t, e, u) {
    if (
      ((t.flags |= 32768),
      e !== null && typeof e == "object" && typeof e.then == "function")
    ) {
      if (
        ((l = t.alternate),
        l !== null && We(l, t, u, !0),
        (t = Al.current),
        t !== null)
      ) {
        switch (t.tag) {
          case 13:
            return (
              Rl === null ? xi() : t.alternate === null && Aa === 0 && (Aa = 3),
              (t.flags &= -257),
              (t.flags |= 65536),
              (t.lanes = u),
              e === Cc
                ? (t.flags |= 16384)
                : ((l = t.updateQueue),
                  l === null ? (t.updateQueue = new Set([e])) : l.add(e),
                  Ui(a, e, u)),
              !1
            );
          case 22:
            return (
              (t.flags |= 65536),
              e === Cc
                ? (t.flags |= 16384)
                : ((l = t.updateQueue),
                  l === null
                    ? ((l = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([e]),
                      }),
                      (t.updateQueue = l))
                    : ((t = l.retryQueue),
                      t === null ? (l.retryQueue = new Set([e])) : t.add(e)),
                  Ui(a, e, u)),
              !1
            );
        }
        throw Error(m(435, t.tag));
      }
      return Ui(a, e, u), xi(), !1;
    }
    if (fa)
      return (
        (l = Al.current),
        l !== null
          ? ((l.flags & 65536) === 0 && (l.flags |= 256),
            (l.flags |= 65536),
            (l.lanes = u),
            e !== Dc && ((a = Error(m(422), { cause: e })), $e(bl(a, t))))
          : (e !== Dc && ((l = Error(m(423), { cause: e })), $e(bl(l, t))),
            (a = a.current.alternate),
            (a.flags |= 65536),
            (u &= -u),
            (a.lanes |= u),
            (e = bl(e, t)),
            (u = ii(a.stateNode, e, u)),
            Xc(a, u),
            Aa !== 4 && (Aa = 2)),
        !1
      );
    var n = Error(m(520), { cause: e });
    if (
      ((n = bl(n, t)),
      vu === null ? (vu = [n]) : vu.push(n),
      Aa !== 4 && (Aa = 2),
      l === null)
    )
      return !0;
    (e = bl(e, t)), (t = l);
    do {
      switch (t.tag) {
        case 3:
          return (
            (t.flags |= 65536),
            (a = u & -u),
            (t.lanes |= a),
            (a = ii(t.stateNode, e, a)),
            Xc(t, a),
            !1
          );
        case 1:
          if (
            ((l = t.type),
            (n = t.stateNode),
            (t.flags & 128) === 0 &&
              (typeof l.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (gt === null || !gt.has(n)))))
          )
            return (
              (t.flags |= 65536),
              (u &= -u),
              (t.lanes |= u),
              (u = pr(u)),
              Ar(u, a, t, e),
              Xc(t, u),
              !1
            );
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var Er = Error(m(461)),
    Xa = !1;
  function La(a, l, t, e) {
    l.child = a === null ? hr(l, null, t, e) : ge(l, a.child, t, e);
  }
  function Nr(a, l, t, e, u) {
    t = t.render;
    var n = l.ref;
    if ("ref" in e) {
      var c = {};
      for (var i in e) i !== "ref" && (c[i] = e[i]);
    } else c = e;
    return (
      Bt(l),
      (e = Lc(a, l, t, c, n, u)),
      (i = Kc()),
      a !== null && !Xa
        ? (Jc(a, l, u), $l(a, l, u))
        : (fa && i && Oc(l), (l.flags |= 1), La(a, l, e, u), l.child)
    );
  }
  function Tr(a, l, t, e, u) {
    if (a === null) {
      var n = t.type;
      return typeof n == "function" &&
        !Nc(n) &&
        n.defaultProps === void 0 &&
        t.compare === null
        ? ((l.tag = 15), (l.type = n), _r(a, l, n, e, u))
        : ((a = ku(t.type, null, e, l, l.mode, u)),
          (a.ref = l.ref),
          (a.return = l),
          (l.child = a));
    }
    if (((n = a.child), !vi(a, u))) {
      var c = n.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : Le), t(c, e) && a.ref === l.ref)
      )
        return $l(a, l, u);
    }
    return (
      (l.flags |= 1),
      (a = Ql(n, e)),
      (a.ref = l.ref),
      (a.return = l),
      (l.child = a)
    );
  }
  function _r(a, l, t, e, u) {
    if (a !== null) {
      var n = a.memoizedProps;
      if (Le(n, e) && a.ref === l.ref)
        if (((Xa = !1), (l.pendingProps = e = n), vi(a, u)))
          (a.flags & 131072) !== 0 && (Xa = !0);
        else return (l.lanes = a.lanes), $l(a, l, u);
    }
    return fi(a, l, t, e, u);
  }
  function Or(a, l, t) {
    var e = l.pendingProps,
      u = e.children,
      n = a !== null ? a.memoizedState : null;
    if (e.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (((e = n !== null ? n.baseLanes | t : t), a !== null)) {
          for (u = l.child = a.child, n = 0; u !== null; )
            (n = n | u.lanes | u.childLanes), (u = u.sibling);
          l.childLanes = n & ~e;
        } else (l.childLanes = 0), (l.child = null);
        return Mr(a, l, e, t);
      }
      if ((t & 536870912) !== 0)
        (l.memoizedState = { baseLanes: 0, cachePool: null }),
          a !== null && ln(l, n !== null ? n.cachePool : null),
          n !== null ? _s(l, n) : Qc(),
          mr(l);
      else
        return (
          (l.lanes = l.childLanes = 536870912),
          Mr(a, l, n !== null ? n.baseLanes | t : t, t)
        );
    } else
      n !== null
        ? (ln(l, n.cachePool), _s(l, n), ot(), (l.memoizedState = null))
        : (a !== null && ln(l, null), Qc(), ot());
    return La(a, l, u, t), l.child;
  }
  function Mr(a, l, t, e) {
    var u = qc();
    return (
      (u = u === null ? null : { parent: qa._currentValue, pool: u }),
      (l.memoizedState = { baseLanes: t, cachePool: u }),
      a !== null && ln(l, null),
      Qc(),
      mr(l),
      a !== null && We(a, l, e, !0),
      null
    );
  }
  function Sn(a, l) {
    var t = l.ref;
    if (t === null) a !== null && a.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object") throw Error(m(284));
      (a === null || a.ref !== t) && (l.flags |= 4194816);
    }
  }
  function fi(a, l, t, e, u) {
    return (
      Bt(l),
      (t = Lc(a, l, t, e, void 0, u)),
      (e = Kc()),
      a !== null && !Xa
        ? (Jc(a, l, u), $l(a, l, u))
        : (fa && e && Oc(l), (l.flags |= 1), La(a, l, t, u), l.child)
    );
  }
  function Dr(a, l, t, e, u, n) {
    return (
      Bt(l),
      (l.updateQueue = null),
      (t = Ms(l, e, t, u)),
      Os(a),
      (e = Kc()),
      a !== null && !Xa
        ? (Jc(a, l, n), $l(a, l, n))
        : (fa && e && Oc(l), (l.flags |= 1), La(a, l, t, n), l.child)
    );
  }
  function jr(a, l, t, e, u) {
    if ((Bt(l), l.stateNode === null)) {
      var n = ie,
        c = t.contextType;
      typeof c == "object" && c !== null && (n = Ia(c)),
        (n = new t(e, n)),
        (l.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = ci),
        (l.stateNode = n),
        (n._reactInternals = l),
        (n = l.stateNode),
        (n.props = e),
        (n.state = l.memoizedState),
        (n.refs = {}),
        Bc(l),
        (c = t.contextType),
        (n.context = typeof c == "object" && c !== null ? Ia(c) : ie),
        (n.state = l.memoizedState),
        (c = t.getDerivedStateFromProps),
        typeof c == "function" && (ni(l, t, c, e), (n.state = l.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && ci.enqueueReplaceState(n, n.state, null),
          tu(l, e, n, u),
          lu(),
          (n.state = l.memoizedState)),
        typeof n.componentDidMount == "function" && (l.flags |= 4194308),
        (e = !0);
    } else if (a === null) {
      n = l.stateNode;
      var i = l.memoizedProps,
        f = Gt(t, i);
      n.props = f;
      var y = n.context,
        z = t.contextType;
      (c = ie), typeof z == "object" && z !== null && (c = Ia(z));
      var T = t.getDerivedStateFromProps;
      (z =
        typeof T == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (i = l.pendingProps !== i),
        z ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i || y !== c) && yr(l, n, e, c)),
        (ct = !1);
      var g = l.memoizedState;
      (n.state = g),
        tu(l, e, n, u),
        lu(),
        (y = l.memoizedState),
        i || g !== y || ct
          ? (typeof T == "function" && (ni(l, t, T, e), (y = l.memoizedState)),
            (f = ct || vr(l, t, f, e, g, y, c))
              ? (z ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308),
                (l.memoizedProps = e),
                (l.memoizedState = y)),
            (n.props = e),
            (n.state = y),
            (n.context = c),
            (e = f))
          : (typeof n.componentDidMount == "function" && (l.flags |= 4194308),
            (e = !1));
    } else {
      (n = l.stateNode),
        Yc(a, l),
        (c = l.memoizedProps),
        (z = Gt(t, c)),
        (n.props = z),
        (T = l.pendingProps),
        (g = n.context),
        (y = t.contextType),
        (f = ie),
        typeof y == "object" && y !== null && (f = Ia(y)),
        (i = t.getDerivedStateFromProps),
        (y =
          typeof i == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== T || g !== f) && yr(l, n, e, f)),
        (ct = !1),
        (g = l.memoizedState),
        (n.state = g),
        tu(l, e, n, u),
        lu();
      var b = l.memoizedState;
      c !== T ||
      g !== b ||
      ct ||
      (a !== null && a.dependencies !== null && Pu(a.dependencies))
        ? (typeof i == "function" && (ni(l, t, i, e), (b = l.memoizedState)),
          (z =
            ct ||
            vr(l, t, z, e, g, b, f) ||
            (a !== null && a.dependencies !== null && Pu(a.dependencies)))
            ? (y ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(e, b, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(e, b, f)),
              typeof n.componentDidUpdate == "function" && (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (l.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === a.memoizedProps && g === a.memoizedState) ||
                (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === a.memoizedProps && g === a.memoizedState) ||
                (l.flags |= 1024),
              (l.memoizedProps = e),
              (l.memoizedState = b)),
          (n.props = e),
          (n.state = b),
          (n.context = f),
          (e = z))
        : (typeof n.componentDidUpdate != "function" ||
            (c === a.memoizedProps && g === a.memoizedState) ||
            (l.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === a.memoizedProps && g === a.memoizedState) ||
            (l.flags |= 1024),
          (e = !1));
    }
    return (
      (n = e),
      Sn(a, l),
      (e = (l.flags & 128) !== 0),
      n || e
        ? ((n = l.stateNode),
          (t =
            e && typeof t.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (l.flags |= 1),
          a !== null && e
            ? ((l.child = ge(l, a.child, null, u)),
              (l.child = ge(l, null, t, u)))
            : La(a, l, t, u),
          (l.memoizedState = n.state),
          (a = l.child))
        : (a = $l(a, l, u)),
      a
    );
  }
  function xr(a, l, t, e) {
    return we(), (l.flags |= 256), La(a, l, t, e), l.child;
  }
  var si = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ri(a) {
    return { baseLanes: a, cachePool: bs() };
  }
  function oi(a, l, t) {
    return (a = a !== null ? a.childLanes & ~t : 0), l && (a |= El), a;
  }
  function Rr(a, l, t) {
    var e = l.pendingProps,
      u = !1,
      n = (l.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          a !== null && a.memoizedState === null ? !1 : (Ca.current & 2) !== 0),
      c && ((u = !0), (l.flags &= -129)),
      (c = (l.flags & 32) !== 0),
      (l.flags &= -33),
      a === null)
    ) {
      if (fa) {
        if ((u ? rt(l) : ot(), fa)) {
          var i = pa,
            f;
          if ((f = i)) {
            a: {
              for (f = i, i = xl; f.nodeType !== 8; ) {
                if (!i) {
                  i = null;
                  break a;
                }
                if (((f = Ol(f.nextSibling)), f === null)) {
                  i = null;
                  break a;
                }
              }
              i = f;
            }
            i !== null
              ? ((l.memoizedState = {
                  dehydrated: i,
                  treeContext: Rt !== null ? { id: Zl, overflow: Vl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (f = rl(18, null, null, 0)),
                (f.stateNode = i),
                (f.return = l),
                (l.child = f),
                (al = l),
                (pa = null),
                (f = !0))
              : (f = !1);
          }
          f || qt(l);
        }
        if (
          ((i = l.memoizedState),
          i !== null && ((i = i.dehydrated), i !== null))
        )
          return $i(i) ? (l.lanes = 32) : (l.lanes = 536870912), null;
        wl(l);
      }
      return (
        (i = e.children),
        (e = e.fallback),
        u
          ? (ot(),
            (u = l.mode),
            (i = zn({ mode: "hidden", children: i }, u)),
            (e = xt(e, u, t, null)),
            (i.return = l),
            (e.return = l),
            (i.sibling = e),
            (l.child = i),
            (u = l.child),
            (u.memoizedState = ri(t)),
            (u.childLanes = oi(a, c, t)),
            (l.memoizedState = si),
            e)
          : (rt(l), di(l, i))
      );
    }
    if (
      ((f = a.memoizedState), f !== null && ((i = f.dehydrated), i !== null))
    ) {
      if (n)
        l.flags & 256
          ? (rt(l), (l.flags &= -257), (l = hi(a, l, t)))
          : l.memoizedState !== null
          ? (ot(), (l.child = a.child), (l.flags |= 128), (l = null))
          : (ot(),
            (u = e.fallback),
            (i = l.mode),
            (e = zn({ mode: "visible", children: e.children }, i)),
            (u = xt(u, i, t, null)),
            (u.flags |= 2),
            (e.return = l),
            (u.return = l),
            (e.sibling = u),
            (l.child = e),
            ge(l, a.child, null, t),
            (e = l.child),
            (e.memoizedState = ri(t)),
            (e.childLanes = oi(a, c, t)),
            (l.memoizedState = si),
            (l = u));
      else if ((rt(l), $i(i))) {
        if (((c = i.nextSibling && i.nextSibling.dataset), c)) var y = c.dgst;
        (c = y),
          (e = Error(m(419))),
          (e.stack = ""),
          (e.digest = c),
          $e({ value: e, source: null, stack: null }),
          (l = hi(a, l, t));
      } else if (
        (Xa || We(a, l, t, !1), (c = (t & a.childLanes) !== 0), Xa || c)
      ) {
        if (
          ((c = ga),
          c !== null &&
            ((e = t & -t),
            (e = (e & 42) !== 0 ? 1 : Wn(e)),
            (e = (e & (c.suspendedLanes | t)) !== 0 ? 0 : e),
            e !== 0 && e !== f.retryLane))
        )
          throw ((f.retryLane = e), ce(a, e), vl(c, a, e), Er);
        i.data === "$?" || xi(), (l = hi(a, l, t));
      } else
        i.data === "$?"
          ? ((l.flags |= 192), (l.child = a.child), (l = null))
          : ((a = f.treeContext),
            (pa = Ol(i.nextSibling)),
            (al = l),
            (fa = !0),
            (Ht = null),
            (xl = !1),
            a !== null &&
              ((zl[pl++] = Zl),
              (zl[pl++] = Vl),
              (zl[pl++] = Rt),
              (Zl = a.id),
              (Vl = a.overflow),
              (Rt = l)),
            (l = di(l, e.children)),
            (l.flags |= 4096));
      return l;
    }
    return u
      ? (ot(),
        (u = e.fallback),
        (i = l.mode),
        (f = a.child),
        (y = f.sibling),
        (e = Ql(f, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = f.subtreeFlags & 65011712),
        y !== null ? (u = Ql(y, u)) : ((u = xt(u, i, t, null)), (u.flags |= 2)),
        (u.return = l),
        (e.return = l),
        (e.sibling = u),
        (l.child = e),
        (e = u),
        (u = l.child),
        (i = a.child.memoizedState),
        i === null
          ? (i = ri(t))
          : ((f = i.cachePool),
            f !== null
              ? ((y = qa._currentValue),
                (f = f.parent !== y ? { parent: y, pool: y } : f))
              : (f = bs()),
            (i = { baseLanes: i.baseLanes | t, cachePool: f })),
        (u.memoizedState = i),
        (u.childLanes = oi(a, c, t)),
        (l.memoizedState = si),
        e)
      : (rt(l),
        (t = a.child),
        (a = t.sibling),
        (t = Ql(t, { mode: "visible", children: e.children })),
        (t.return = l),
        (t.sibling = null),
        a !== null &&
          ((c = l.deletions),
          c === null ? ((l.deletions = [a]), (l.flags |= 16)) : c.push(a)),
        (l.child = t),
        (l.memoizedState = null),
        t);
  }
  function di(a, l) {
    return (
      (l = zn({ mode: "visible", children: l }, a.mode)),
      (l.return = a),
      (a.child = l)
    );
  }
  function zn(a, l) {
    return (
      (a = rl(22, a, null, l)),
      (a.lanes = 0),
      (a.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      a
    );
  }
  function hi(a, l, t) {
    return (
      ge(l, a.child, null, t),
      (a = di(l, l.pendingProps.children)),
      (a.flags |= 2),
      (l.memoizedState = null),
      a
    );
  }
  function Ur(a, l, t) {
    a.lanes |= l;
    var e = a.alternate;
    e !== null && (e.lanes |= l), xc(a.return, l, t);
  }
  function mi(a, l, t, e, u) {
    var n = a.memoizedState;
    n === null
      ? (a.memoizedState = {
          isBackwards: l,
          rendering: null,
          renderingStartTime: 0,
          last: e,
          tail: t,
          tailMode: u,
        })
      : ((n.isBackwards = l),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = e),
        (n.tail = t),
        (n.tailMode = u));
  }
  function Hr(a, l, t) {
    var e = l.pendingProps,
      u = e.revealOrder,
      n = e.tail;
    if ((La(a, l, e.children, t), (e = Ca.current), (e & 2) !== 0))
      (e = (e & 1) | 2), (l.flags |= 128);
    else {
      if (a !== null && (a.flags & 128) !== 0)
        a: for (a = l.child; a !== null; ) {
          if (a.tag === 13) a.memoizedState !== null && Ur(a, t, l);
          else if (a.tag === 19) Ur(a, t, l);
          else if (a.child !== null) {
            (a.child.return = a), (a = a.child);
            continue;
          }
          if (a === l) break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === l) break a;
            a = a.return;
          }
          (a.sibling.return = a.return), (a = a.sibling);
        }
      e &= 1;
    }
    switch ((D(Ca, e), u)) {
      case "forwards":
        for (t = l.child, u = null; t !== null; )
          (a = t.alternate),
            a !== null && yn(a) === null && (u = t),
            (t = t.sibling);
        (t = u),
          t === null
            ? ((u = l.child), (l.child = null))
            : ((u = t.sibling), (t.sibling = null)),
          mi(l, !1, u, t, n);
        break;
      case "backwards":
        for (t = null, u = l.child, l.child = null; u !== null; ) {
          if (((a = u.alternate), a !== null && yn(a) === null)) {
            l.child = u;
            break;
          }
          (a = u.sibling), (u.sibling = t), (t = u), (u = a);
        }
        mi(l, !0, t, null, n);
        break;
      case "together":
        mi(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function $l(a, l, t) {
    if (
      (a !== null && (l.dependencies = a.dependencies),
      (yt |= l.lanes),
      (t & l.childLanes) === 0)
    )
      if (a !== null) {
        if ((We(a, l, t, !1), (t & l.childLanes) === 0)) return null;
      } else return null;
    if (a !== null && l.child !== a.child) throw Error(m(153));
    if (l.child !== null) {
      for (
        a = l.child, t = Ql(a, a.pendingProps), l.child = t, t.return = l;
        a.sibling !== null;

      )
        (a = a.sibling),
          (t = t.sibling = Ql(a, a.pendingProps)),
          (t.return = l);
      t.sibling = null;
    }
    return l.child;
  }
  function vi(a, l) {
    return (a.lanes & l) !== 0
      ? !0
      : ((a = a.dependencies), !!(a !== null && Pu(a)));
  }
  function qh(a, l, t) {
    switch (l.tag) {
      case 3:
        Q(l, l.stateNode.containerInfo), nt(l, qa, a.memoizedState.cache), we();
        break;
      case 27:
      case 5:
        ra(l);
        break;
      case 4:
        Q(l, l.stateNode.containerInfo);
        break;
      case 10:
        nt(l, l.type, l.memoizedProps.value);
        break;
      case 13:
        var e = l.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? (rt(l), (l.flags |= 128), null)
            : (t & l.child.childLanes) !== 0
            ? Rr(a, l, t)
            : (rt(l), (a = $l(a, l, t)), a !== null ? a.sibling : null);
        rt(l);
        break;
      case 19:
        var u = (a.flags & 128) !== 0;
        if (
          ((e = (t & l.childLanes) !== 0),
          e || (We(a, l, t, !1), (e = (t & l.childLanes) !== 0)),
          u)
        ) {
          if (e) return Hr(a, l, t);
          l.flags |= 128;
        }
        if (
          ((u = l.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          D(Ca, Ca.current),
          e)
        )
          break;
        return null;
      case 22:
      case 23:
        return (l.lanes = 0), Or(a, l, t);
      case 24:
        nt(l, qa, a.memoizedState.cache);
    }
    return $l(a, l, t);
  }
  function qr(a, l, t) {
    if (a !== null)
      if (a.memoizedProps !== l.pendingProps) Xa = !0;
      else {
        if (!vi(a, t) && (l.flags & 128) === 0) return (Xa = !1), qh(a, l, t);
        Xa = (a.flags & 131072) !== 0;
      }
    else (Xa = !1), fa && (l.flags & 1048576) !== 0 && os(l, Iu, l.index);
    switch (((l.lanes = 0), l.tag)) {
      case 16:
        a: {
          a = l.pendingProps;
          var e = l.elementType,
            u = e._init;
          if (((e = u(e._payload)), (l.type = e), typeof e == "function"))
            Nc(e)
              ? ((a = Gt(e, a)), (l.tag = 1), (l = jr(null, l, e, a, t)))
              : ((l.tag = 0), (l = fi(null, l, e, a, t)));
          else {
            if (e != null) {
              if (((u = e.$$typeof), u === il)) {
                (l.tag = 11), (l = Nr(null, l, e, a, t));
                break a;
              } else if (u === ta) {
                (l.tag = 14), (l = Tr(null, l, e, a, t));
                break a;
              }
            }
            throw ((l = Cl(e) || e), Error(m(306, l, "")));
          }
        }
        return l;
      case 0:
        return fi(a, l, l.type, l.pendingProps, t);
      case 1:
        return (e = l.type), (u = Gt(e, l.pendingProps)), jr(a, l, e, u, t);
      case 3:
        a: {
          if ((Q(l, l.stateNode.containerInfo), a === null))
            throw Error(m(387));
          e = l.pendingProps;
          var n = l.memoizedState;
          (u = n.element), Yc(a, l), tu(l, e, null, t);
          var c = l.memoizedState;
          if (
            ((e = c.cache),
            nt(l, qa, e),
            e !== n.cache && Rc(l, [qa], t, !0),
            lu(),
            (e = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: c.cache }),
              (l.updateQueue.baseState = n),
              (l.memoizedState = n),
              l.flags & 256)
            ) {
              l = xr(a, l, e, t);
              break a;
            } else if (e !== u) {
              (u = bl(Error(m(424)), l)), $e(u), (l = xr(a, l, e, t));
              break a;
            } else {
              switch (((a = l.stateNode.containerInfo), a.nodeType)) {
                case 9:
                  a = a.body;
                  break;
                default:
                  a = a.nodeName === "HTML" ? a.ownerDocument.body : a;
              }
              for (
                pa = Ol(a.firstChild),
                  al = l,
                  fa = !0,
                  Ht = null,
                  xl = !0,
                  t = hr(l, null, e, t),
                  l.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
            }
          else {
            if ((we(), e === u)) {
              l = $l(a, l, t);
              break a;
            }
            La(a, l, e, t);
          }
          l = l.child;
        }
        return l;
      case 26:
        return (
          Sn(a, l),
          a === null
            ? (t = Go(l.type, null, l.pendingProps, null))
              ? (l.memoizedState = t)
              : fa ||
                ((t = l.type),
                (a = l.pendingProps),
                (e = Hn(N.current).createElement(t)),
                (e[Fa] = l),
                (e[tl] = a),
                Ja(e, t, a),
                Ya(e),
                (l.stateNode = e))
            : (l.memoizedState = Go(
                l.type,
                a.memoizedProps,
                l.pendingProps,
                a.memoizedState
              )),
          null
        );
      case 27:
        return (
          ra(l),
          a === null &&
            fa &&
            ((e = l.stateNode = Bo(l.type, l.pendingProps, N.current)),
            (al = l),
            (xl = !0),
            (u = pa),
            zt(l.type) ? ((Wi = u), (pa = Ol(e.firstChild))) : (pa = u)),
          La(a, l, l.pendingProps.children, t),
          Sn(a, l),
          a === null && (l.flags |= 4194304),
          l.child
        );
      case 5:
        return (
          a === null &&
            fa &&
            ((u = e = pa) &&
              ((e = sm(e, l.type, l.pendingProps, xl)),
              e !== null
                ? ((l.stateNode = e),
                  (al = l),
                  (pa = Ol(e.firstChild)),
                  (xl = !1),
                  (u = !0))
                : (u = !1)),
            u || qt(l)),
          ra(l),
          (u = l.type),
          (n = l.pendingProps),
          (c = a !== null ? a.memoizedProps : null),
          (e = n.children),
          Ki(u, n) ? (e = null) : c !== null && Ki(u, c) && (l.flags |= 32),
          l.memoizedState !== null &&
            ((u = Lc(a, l, Oh, null, null, t)), (Nu._currentValue = u)),
          Sn(a, l),
          La(a, l, e, t),
          l.child
        );
      case 6:
        return (
          a === null &&
            fa &&
            ((a = t = pa) &&
              ((t = rm(t, l.pendingProps, xl)),
              t !== null
                ? ((l.stateNode = t), (al = l), (pa = null), (a = !0))
                : (a = !1)),
            a || qt(l)),
          null
        );
      case 13:
        return Rr(a, l, t);
      case 4:
        return (
          Q(l, l.stateNode.containerInfo),
          (e = l.pendingProps),
          a === null ? (l.child = ge(l, null, e, t)) : La(a, l, e, t),
          l.child
        );
      case 11:
        return Nr(a, l, l.type, l.pendingProps, t);
      case 7:
        return La(a, l, l.pendingProps, t), l.child;
      case 8:
        return La(a, l, l.pendingProps.children, t), l.child;
      case 12:
        return La(a, l, l.pendingProps.children, t), l.child;
      case 10:
        return (
          (e = l.pendingProps),
          nt(l, l.type, e.value),
          La(a, l, e.children, t),
          l.child
        );
      case 9:
        return (
          (u = l.type._context),
          (e = l.pendingProps.children),
          Bt(l),
          (u = Ia(u)),
          (e = e(u)),
          (l.flags |= 1),
          La(a, l, e, t),
          l.child
        );
      case 14:
        return Tr(a, l, l.type, l.pendingProps, t);
      case 15:
        return _r(a, l, l.type, l.pendingProps, t);
      case 19:
        return Hr(a, l, t);
      case 31:
        return (
          (e = l.pendingProps),
          (t = l.mode),
          (e = { mode: e.mode, children: e.children }),
          a === null
            ? ((t = zn(e, t)),
              (t.ref = l.ref),
              (l.child = t),
              (t.return = l),
              (l = t))
            : ((t = Ql(a.child, e)),
              (t.ref = l.ref),
              (l.child = t),
              (t.return = l),
              (l = t)),
          l
        );
      case 22:
        return Or(a, l, t);
      case 24:
        return (
          Bt(l),
          (e = Ia(qa)),
          a === null
            ? ((u = qc()),
              u === null &&
                ((u = ga),
                (n = Uc()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= t),
                (u = n)),
              (l.memoizedState = { parent: e, cache: u }),
              Bc(l),
              nt(l, qa, u))
            : ((a.lanes & t) !== 0 && (Yc(a, l), tu(l, null, null, t), lu()),
              (u = a.memoizedState),
              (n = l.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (l.memoizedState = u),
                  l.lanes === 0 &&
                    (l.memoizedState = l.updateQueue.baseState = u),
                  nt(l, qa, e))
                : ((e = n.cache),
                  nt(l, qa, e),
                  e !== u.cache && Rc(l, [qa], t, !0))),
          La(a, l, l.pendingProps.children, t),
          l.child
        );
      case 29:
        throw l.pendingProps;
    }
    throw Error(m(156, l.tag));
  }
  function Wl(a) {
    a.flags |= 4;
  }
  function Cr(a, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      a.flags &= -16777217;
    else if (((a.flags |= 16777216), !Ko(l))) {
      if (
        ((l = Al.current),
        l !== null &&
          ((ea & 4194048) === ea
            ? Rl !== null
            : ((ea & 62914560) !== ea && (ea & 536870912) === 0) || l !== Rl))
      )
        throw ((Pe = Cc), Ss);
      a.flags |= 8192;
    }
  }
  function pn(a, l) {
    l !== null && (a.flags |= 4),
      a.flags & 16384 &&
        ((l = a.tag !== 22 ? mf() : 536870912), (a.lanes |= l), (pe |= l));
  }
  function su(a, l) {
    if (!fa)
      switch (a.tailMode) {
        case "hidden":
          l = a.tail;
          for (var t = null; l !== null; )
            l.alternate !== null && (t = l), (l = l.sibling);
          t === null ? (a.tail = null) : (t.sibling = null);
          break;
        case "collapsed":
          t = a.tail;
          for (var e = null; t !== null; )
            t.alternate !== null && (e = t), (t = t.sibling);
          e === null
            ? l || a.tail === null
              ? (a.tail = null)
              : (a.tail.sibling = null)
            : (e.sibling = null);
      }
  }
  function za(a) {
    var l = a.alternate !== null && a.alternate.child === a.child,
      t = 0,
      e = 0;
    if (l)
      for (var u = a.child; u !== null; )
        (t |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags & 65011712),
          (e |= u.flags & 65011712),
          (u.return = a),
          (u = u.sibling);
    else
      for (u = a.child; u !== null; )
        (t |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags),
          (e |= u.flags),
          (u.return = a),
          (u = u.sibling);
    return (a.subtreeFlags |= e), (a.childLanes = t), l;
  }
  function Ch(a, l, t) {
    var e = l.pendingProps;
    switch ((Mc(l), l.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return za(l), null;
      case 1:
        return za(l), null;
      case 3:
        return (
          (t = l.stateNode),
          (e = null),
          a !== null && (e = a.memoizedState.cache),
          l.memoizedState.cache !== e && (l.flags |= 2048),
          Kl(qa),
          ja(),
          t.pendingContext &&
            ((t.context = t.pendingContext), (t.pendingContext = null)),
          (a === null || a.child === null) &&
            (Je(l)
              ? Wl(l)
              : a === null ||
                (a.memoizedState.isDehydrated && (l.flags & 256) === 0) ||
                ((l.flags |= 1024), ms())),
          za(l),
          null
        );
      case 26:
        return (
          (t = l.memoizedState),
          a === null
            ? (Wl(l),
              t !== null ? (za(l), Cr(l, t)) : (za(l), (l.flags &= -16777217)))
            : t
            ? t !== a.memoizedState
              ? (Wl(l), za(l), Cr(l, t))
              : (za(l), (l.flags &= -16777217))
            : (a.memoizedProps !== e && Wl(l), za(l), (l.flags &= -16777217)),
          null
        );
      case 27:
        ua(l), (t = N.current);
        var u = l.type;
        if (a !== null && l.stateNode != null) a.memoizedProps !== e && Wl(l);
        else {
          if (!e) {
            if (l.stateNode === null) throw Error(m(166));
            return za(l), null;
          }
          (a = d.current),
            Je(l) ? ds(l) : ((a = Bo(u, e, t)), (l.stateNode = a), Wl(l));
        }
        return za(l), null;
      case 5:
        if ((ua(l), (t = l.type), a !== null && l.stateNode != null))
          a.memoizedProps !== e && Wl(l);
        else {
          if (!e) {
            if (l.stateNode === null) throw Error(m(166));
            return za(l), null;
          }
          if (((a = d.current), Je(l))) ds(l);
          else {
            switch (((u = Hn(N.current)), a)) {
              case 1:
                a = u.createElementNS("http://www.w3.org/2000/svg", t);
                break;
              case 2:
                a = u.createElementNS("http://www.w3.org/1998/Math/MathML", t);
                break;
              default:
                switch (t) {
                  case "svg":
                    a = u.createElementNS("http://www.w3.org/2000/svg", t);
                    break;
                  case "math":
                    a = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      t
                    );
                    break;
                  case "script":
                    (a = u.createElement("div")),
                      (a.innerHTML = "<script></script>"),
                      (a = a.removeChild(a.firstChild));
                    break;
                  case "select":
                    (a =
                      typeof e.is == "string"
                        ? u.createElement("select", { is: e.is })
                        : u.createElement("select")),
                      e.multiple
                        ? (a.multiple = !0)
                        : e.size && (a.size = e.size);
                    break;
                  default:
                    a =
                      typeof e.is == "string"
                        ? u.createElement(t, { is: e.is })
                        : u.createElement(t);
                }
            }
            (a[Fa] = l), (a[tl] = e);
            a: for (u = l.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) a.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === l) break a;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === l) break a;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            l.stateNode = a;
            a: switch ((Ja(a, t, e), t)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!e.autoFocus;
                break a;
              case "img":
                a = !0;
                break a;
              default:
                a = !1;
            }
            a && Wl(l);
          }
        }
        return za(l), (l.flags &= -16777217), null;
      case 6:
        if (a && l.stateNode != null) a.memoizedProps !== e && Wl(l);
        else {
          if (typeof e != "string" && l.stateNode === null) throw Error(m(166));
          if (((a = N.current), Je(l))) {
            if (
              ((a = l.stateNode),
              (t = l.memoizedProps),
              (e = null),
              (u = al),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            (a[Fa] = l),
              (a = !!(
                a.nodeValue === t ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                jo(a.nodeValue, t)
              )),
              a || qt(l);
          } else (a = Hn(a).createTextNode(e)), (a[Fa] = l), (l.stateNode = a);
        }
        return za(l), null;
      case 13:
        if (
          ((e = l.memoizedState),
          a === null ||
            (a.memoizedState !== null && a.memoizedState.dehydrated !== null))
        ) {
          if (((u = Je(l)), e !== null && e.dehydrated !== null)) {
            if (a === null) {
              if (!u) throw Error(m(318));
              if (
                ((u = l.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(m(317));
              u[Fa] = l;
            } else
              we(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4);
            za(l), (u = !1);
          } else
            (u = ms()),
              a !== null &&
                a.memoizedState !== null &&
                (a.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return l.flags & 256 ? (wl(l), l) : (wl(l), null);
        }
        if ((wl(l), (l.flags & 128) !== 0)) return (l.lanes = t), l;
        if (
          ((t = e !== null), (a = a !== null && a.memoizedState !== null), t)
        ) {
          (e = l.child),
            (u = null),
            e.alternate !== null &&
              e.alternate.memoizedState !== null &&
              e.alternate.memoizedState.cachePool !== null &&
              (u = e.alternate.memoizedState.cachePool.pool);
          var n = null;
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
            n !== u && (e.flags |= 2048);
        }
        return (
          t !== a && t && (l.child.flags |= 8192),
          pn(l, l.updateQueue),
          za(l),
          null
        );
      case 4:
        return ja(), a === null && Gi(l.stateNode.containerInfo), za(l), null;
      case 10:
        return Kl(l.type), za(l), null;
      case 19:
        if ((R(Ca), (u = l.memoizedState), u === null)) return za(l), null;
        if (((e = (l.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) su(u, !1);
          else {
            if (Aa !== 0 || (a !== null && (a.flags & 128) !== 0))
              for (a = l.child; a !== null; ) {
                if (((n = yn(a)), n !== null)) {
                  for (
                    l.flags |= 128,
                      su(u, !1),
                      a = n.updateQueue,
                      l.updateQueue = a,
                      pn(l, a),
                      l.subtreeFlags = 0,
                      a = t,
                      t = l.child;
                    t !== null;

                  )
                    rs(t, a), (t = t.sibling);
                  return D(Ca, (Ca.current & 1) | 2), l.child;
                }
                a = a.sibling;
              }
            u.tail !== null &&
              ll() > Nn &&
              ((l.flags |= 128), (e = !0), su(u, !1), (l.lanes = 4194304));
          }
        else {
          if (!e)
            if (((a = yn(n)), a !== null)) {
              if (
                ((l.flags |= 128),
                (e = !0),
                (a = a.updateQueue),
                (l.updateQueue = a),
                pn(l, a),
                su(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !fa)
              )
                return za(l), null;
            } else
              2 * ll() - u.renderingStartTime > Nn &&
                t !== 536870912 &&
                ((l.flags |= 128), (e = !0), su(u, !1), (l.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = l.child), (l.child = n))
            : ((a = u.last),
              a !== null ? (a.sibling = n) : (l.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((l = u.tail),
            (u.rendering = l),
            (u.tail = l.sibling),
            (u.renderingStartTime = ll()),
            (l.sibling = null),
            (a = Ca.current),
            D(Ca, e ? (a & 1) | 2 : a & 1),
            l)
          : (za(l), null);
      case 22:
      case 23:
        return (
          wl(l),
          Zc(),
          (e = l.memoizedState !== null),
          a !== null
            ? (a.memoizedState !== null) !== e && (l.flags |= 8192)
            : e && (l.flags |= 8192),
          e
            ? (t & 536870912) !== 0 &&
              (l.flags & 128) === 0 &&
              (za(l), l.subtreeFlags & 6 && (l.flags |= 8192))
            : za(l),
          (t = l.updateQueue),
          t !== null && pn(l, t.retryQueue),
          (t = null),
          a !== null &&
            a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (t = a.memoizedState.cachePool.pool),
          (e = null),
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
          e !== t && (l.flags |= 2048),
          a !== null && R(Yt),
          null
        );
      case 24:
        return (
          (t = null),
          a !== null && (t = a.memoizedState.cache),
          l.memoizedState.cache !== t && (l.flags |= 2048),
          Kl(qa),
          za(l),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, l.tag));
  }
  function Bh(a, l) {
    switch ((Mc(l), l.tag)) {
      case 1:
        return (
          (a = l.flags), a & 65536 ? ((l.flags = (a & -65537) | 128), l) : null
        );
      case 3:
        return (
          Kl(qa),
          ja(),
          (a = l.flags),
          (a & 65536) !== 0 && (a & 128) === 0
            ? ((l.flags = (a & -65537) | 128), l)
            : null
        );
      case 26:
      case 27:
      case 5:
        return ua(l), null;
      case 13:
        if (
          (wl(l), (a = l.memoizedState), a !== null && a.dehydrated !== null)
        ) {
          if (l.alternate === null) throw Error(m(340));
          we();
        }
        return (
          (a = l.flags), a & 65536 ? ((l.flags = (a & -65537) | 128), l) : null
        );
      case 19:
        return R(Ca), null;
      case 4:
        return ja(), null;
      case 10:
        return Kl(l.type), null;
      case 22:
      case 23:
        return (
          wl(l),
          Zc(),
          a !== null && R(Yt),
          (a = l.flags),
          a & 65536 ? ((l.flags = (a & -65537) | 128), l) : null
        );
      case 24:
        return Kl(qa), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Br(a, l) {
    switch ((Mc(l), l.tag)) {
      case 3:
        Kl(qa), ja();
        break;
      case 26:
      case 27:
      case 5:
        ua(l);
        break;
      case 4:
        ja();
        break;
      case 13:
        wl(l);
        break;
      case 19:
        R(Ca);
        break;
      case 10:
        Kl(l.type);
        break;
      case 22:
      case 23:
        wl(l), Zc(), a !== null && R(Yt);
        break;
      case 24:
        Kl(qa);
    }
  }
  function ru(a, l) {
    try {
      var t = l.updateQueue,
        e = t !== null ? t.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        t = u;
        do {
          if ((t.tag & a) === a) {
            e = void 0;
            var n = t.create,
              c = t.inst;
            (e = n()), (c.destroy = e);
          }
          t = t.next;
        } while (t !== u);
      }
    } catch (i) {
      ya(l, l.return, i);
    }
  }
  function dt(a, l, t) {
    try {
      var e = l.updateQueue,
        u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & a) === a) {
            var c = e.inst,
              i = c.destroy;
            if (i !== void 0) {
              (c.destroy = void 0), (u = l);
              var f = t,
                y = i;
              try {
                y();
              } catch (z) {
                ya(u, f, z);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (z) {
      ya(l, l.return, z);
    }
  }
  function Yr(a) {
    var l = a.updateQueue;
    if (l !== null) {
      var t = a.stateNode;
      try {
        Ts(l, t);
      } catch (e) {
        ya(a, a.return, e);
      }
    }
  }
  function Xr(a, l, t) {
    (t.props = Gt(a.type, a.memoizedProps)), (t.state = a.memoizedState);
    try {
      t.componentWillUnmount();
    } catch (e) {
      ya(a, l, e);
    }
  }
  function ou(a, l) {
    try {
      var t = a.ref;
      if (t !== null) {
        switch (a.tag) {
          case 26:
          case 27:
          case 5:
            var e = a.stateNode;
            break;
          case 30:
            e = a.stateNode;
            break;
          default:
            e = a.stateNode;
        }
        typeof t == "function" ? (a.refCleanup = t(e)) : (t.current = e);
      }
    } catch (u) {
      ya(a, l, u);
    }
  }
  function Ul(a, l) {
    var t = a.ref,
      e = a.refCleanup;
    if (t !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          ya(a, l, u);
        } finally {
          (a.refCleanup = null),
            (a = a.alternate),
            a != null && (a.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (u) {
          ya(a, l, u);
        }
      else t.current = null;
  }
  function Gr(a) {
    var l = a.type,
      t = a.memoizedProps,
      e = a.stateNode;
    try {
      a: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && e.focus();
          break a;
        case "img":
          t.src ? (e.src = t.src) : t.srcSet && (e.srcset = t.srcSet);
      }
    } catch (u) {
      ya(a, a.return, u);
    }
  }
  function yi(a, l, t) {
    try {
      var e = a.stateNode;
      um(e, a.type, t, l), (e[tl] = l);
    } catch (u) {
      ya(a, a.return, u);
    }
  }
  function Qr(a) {
    return (
      a.tag === 5 ||
      a.tag === 3 ||
      a.tag === 26 ||
      (a.tag === 27 && zt(a.type)) ||
      a.tag === 4
    );
  }
  function gi(a) {
    a: for (;;) {
      for (; a.sibling === null; ) {
        if (a.return === null || Qr(a.return)) return null;
        a = a.return;
      }
      for (
        a.sibling.return = a.return, a = a.sibling;
        a.tag !== 5 && a.tag !== 6 && a.tag !== 18;

      ) {
        if (
          (a.tag === 27 && zt(a.type)) ||
          a.flags & 2 ||
          a.child === null ||
          a.tag === 4
        )
          continue a;
        (a.child.return = a), (a = a.child);
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function bi(a, l, t) {
    var e = a.tag;
    if (e === 5 || e === 6)
      (a = a.stateNode),
        l
          ? (t.nodeType === 9
              ? t.body
              : t.nodeName === "HTML"
              ? t.ownerDocument.body
              : t
            ).insertBefore(a, l)
          : ((l =
              t.nodeType === 9
                ? t.body
                : t.nodeName === "HTML"
                ? t.ownerDocument.body
                : t),
            l.appendChild(a),
            (t = t._reactRootContainer),
            t != null || l.onclick !== null || (l.onclick = Un));
    else if (
      e !== 4 &&
      (e === 27 && zt(a.type) && ((t = a.stateNode), (l = null)),
      (a = a.child),
      a !== null)
    )
      for (bi(a, l, t), a = a.sibling; a !== null; )
        bi(a, l, t), (a = a.sibling);
  }
  function An(a, l, t) {
    var e = a.tag;
    if (e === 5 || e === 6)
      (a = a.stateNode), l ? t.insertBefore(a, l) : t.appendChild(a);
    else if (
      e !== 4 &&
      (e === 27 && zt(a.type) && (t = a.stateNode), (a = a.child), a !== null)
    )
      for (An(a, l, t), a = a.sibling; a !== null; )
        An(a, l, t), (a = a.sibling);
  }
  function Zr(a) {
    var l = a.stateNode,
      t = a.memoizedProps;
    try {
      for (var e = a.type, u = l.attributes; u.length; )
        l.removeAttributeNode(u[0]);
      Ja(l, e, t), (l[Fa] = a), (l[tl] = t);
    } catch (n) {
      ya(a, a.return, n);
    }
  }
  var kl = !1,
    _a = !1,
    Si = !1,
    Vr = typeof WeakSet == "function" ? WeakSet : Set,
    Ga = null;
  function Yh(a, l) {
    if (((a = a.containerInfo), (Vi = Gn), (a = as(a)), gc(a))) {
      if ("selectionStart" in a)
        var t = { start: a.selectionStart, end: a.selectionEnd };
      else
        a: {
          t = ((t = a.ownerDocument) && t.defaultView) || window;
          var e = t.getSelection && t.getSelection();
          if (e && e.rangeCount !== 0) {
            t = e.anchorNode;
            var u = e.anchorOffset,
              n = e.focusNode;
            e = e.focusOffset;
            try {
              t.nodeType, n.nodeType;
            } catch {
              t = null;
              break a;
            }
            var c = 0,
              i = -1,
              f = -1,
              y = 0,
              z = 0,
              T = a,
              g = null;
            l: for (;;) {
              for (
                var b;
                T !== t || (u !== 0 && T.nodeType !== 3) || (i = c + u),
                  T !== n || (e !== 0 && T.nodeType !== 3) || (f = c + e),
                  T.nodeType === 3 && (c += T.nodeValue.length),
                  (b = T.firstChild) !== null;

              )
                (g = T), (T = b);
              for (;;) {
                if (T === a) break l;
                if (
                  (g === t && ++y === u && (i = c),
                  g === n && ++z === e && (f = c),
                  (b = T.nextSibling) !== null)
                )
                  break;
                (T = g), (g = T.parentNode);
              }
              T = b;
            }
            t = i === -1 || f === -1 ? null : { start: i, end: f };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      Li = { focusedElem: a, selectionRange: t }, Gn = !1, Ga = l;
      Ga !== null;

    )
      if (
        ((l = Ga), (a = l.child), (l.subtreeFlags & 1024) !== 0 && a !== null)
      )
        (a.return = l), (Ga = a);
      else
        for (; Ga !== null; ) {
          switch (((l = Ga), (n = l.alternate), (a = l.flags), l.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((a & 1024) !== 0 && n !== null) {
                (a = void 0),
                  (t = l),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (e = t.stateNode);
                try {
                  var K = Gt(t.type, u, t.elementType === t.type);
                  (a = e.getSnapshotBeforeUpdate(K, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = a);
                } catch (V) {
                  ya(t, t.return, V);
                }
              }
              break;
            case 3:
              if ((a & 1024) !== 0) {
                if (
                  ((a = l.stateNode.containerInfo), (t = a.nodeType), t === 9)
                )
                  wi(a);
                else if (t === 1)
                  switch (a.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      wi(a);
                      break;
                    default:
                      a.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((a & 1024) !== 0) throw Error(m(163));
          }
          if (((a = l.sibling), a !== null)) {
            (a.return = l.return), (Ga = a);
            break;
          }
          Ga = l.return;
        }
  }
  function Lr(a, l, t) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ht(a, t), e & 4 && ru(5, t);
        break;
      case 1:
        if ((ht(a, t), e & 4))
          if (((a = t.stateNode), l === null))
            try {
              a.componentDidMount();
            } catch (c) {
              ya(t, t.return, c);
            }
          else {
            var u = Gt(t.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              a.componentDidUpdate(u, l, a.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              ya(t, t.return, c);
            }
          }
        e & 64 && Yr(t), e & 512 && ou(t, t.return);
        break;
      case 3:
        if ((ht(a, t), e & 64 && ((a = t.updateQueue), a !== null))) {
          if (((l = null), t.child !== null))
            switch (t.child.tag) {
              case 27:
              case 5:
                l = t.child.stateNode;
                break;
              case 1:
                l = t.child.stateNode;
            }
          try {
            Ts(a, l);
          } catch (c) {
            ya(t, t.return, c);
          }
        }
        break;
      case 27:
        l === null && e & 4 && Zr(t);
      case 26:
      case 5:
        ht(a, t), l === null && e & 4 && Gr(t), e & 512 && ou(t, t.return);
        break;
      case 12:
        ht(a, t);
        break;
      case 13:
        ht(a, t),
          e & 4 && wr(a, t),
          e & 64 &&
            ((a = t.memoizedState),
            a !== null &&
              ((a = a.dehydrated),
              a !== null && ((t = wh.bind(null, t)), om(a, t))));
        break;
      case 22:
        if (((e = t.memoizedState !== null || kl), !e)) {
          (l = (l !== null && l.memoizedState !== null) || _a), (u = kl);
          var n = _a;
          (kl = e),
            (_a = l) && !n ? mt(a, t, (t.subtreeFlags & 8772) !== 0) : ht(a, t),
            (kl = u),
            (_a = n);
        }
        break;
      case 30:
        break;
      default:
        ht(a, t);
    }
  }
  function Kr(a) {
    var l = a.alternate;
    l !== null && ((a.alternate = null), Kr(l)),
      (a.child = null),
      (a.deletions = null),
      (a.sibling = null),
      a.tag === 5 && ((l = a.stateNode), l !== null && In(l)),
      (a.stateNode = null),
      (a.return = null),
      (a.dependencies = null),
      (a.memoizedProps = null),
      (a.memoizedState = null),
      (a.pendingProps = null),
      (a.stateNode = null),
      (a.updateQueue = null);
  }
  var Sa = null,
    nl = !1;
  function Fl(a, l, t) {
    for (t = t.child; t !== null; ) Jr(a, l, t), (t = t.sibling);
  }
  function Jr(a, l, t) {
    if (Va && typeof Va.onCommitFiberUnmount == "function")
      try {
        Va.onCommitFiberUnmount(Yl, t);
      } catch {}
    switch (t.tag) {
      case 26:
        _a || Ul(t, l),
          Fl(a, l, t),
          t.memoizedState
            ? t.memoizedState.count--
            : t.stateNode && ((t = t.stateNode), t.parentNode.removeChild(t));
        break;
      case 27:
        _a || Ul(t, l);
        var e = Sa,
          u = nl;
        zt(t.type) && ((Sa = t.stateNode), (nl = !1)),
          Fl(a, l, t),
          zu(t.stateNode),
          (Sa = e),
          (nl = u);
        break;
      case 5:
        _a || Ul(t, l);
      case 6:
        if (
          ((e = Sa),
          (u = nl),
          (Sa = null),
          Fl(a, l, t),
          (Sa = e),
          (nl = u),
          Sa !== null)
        )
          if (nl)
            try {
              (Sa.nodeType === 9
                ? Sa.body
                : Sa.nodeName === "HTML"
                ? Sa.ownerDocument.body
                : Sa
              ).removeChild(t.stateNode);
            } catch (n) {
              ya(t, l, n);
            }
          else
            try {
              Sa.removeChild(t.stateNode);
            } catch (n) {
              ya(t, l, n);
            }
        break;
      case 18:
        Sa !== null &&
          (nl
            ? ((a = Sa),
              qo(
                a.nodeType === 9
                  ? a.body
                  : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a,
                t.stateNode
              ),
              Mu(a))
            : qo(Sa, t.stateNode));
        break;
      case 4:
        (e = Sa),
          (u = nl),
          (Sa = t.stateNode.containerInfo),
          (nl = !0),
          Fl(a, l, t),
          (Sa = e),
          (nl = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _a || dt(2, t, l), _a || dt(4, t, l), Fl(a, l, t);
        break;
      case 1:
        _a ||
          (Ul(t, l),
          (e = t.stateNode),
          typeof e.componentWillUnmount == "function" && Xr(t, l, e)),
          Fl(a, l, t);
        break;
      case 21:
        Fl(a, l, t);
        break;
      case 22:
        (_a = (e = _a) || t.memoizedState !== null), Fl(a, l, t), (_a = e);
        break;
      default:
        Fl(a, l, t);
    }
  }
  function wr(a, l) {
    if (
      l.memoizedState === null &&
      ((a = l.alternate),
      a !== null &&
        ((a = a.memoizedState), a !== null && ((a = a.dehydrated), a !== null)))
    )
      try {
        Mu(a);
      } catch (t) {
        ya(l, l.return, t);
      }
  }
  function Xh(a) {
    switch (a.tag) {
      case 13:
      case 19:
        var l = a.stateNode;
        return l === null && (l = a.stateNode = new Vr()), l;
      case 22:
        return (
          (a = a.stateNode),
          (l = a._retryCache),
          l === null && (l = a._retryCache = new Vr()),
          l
        );
      default:
        throw Error(m(435, a.tag));
    }
  }
  function zi(a, l) {
    var t = Xh(a);
    l.forEach(function (e) {
      var u = $h.bind(null, a, e);
      t.has(e) || (t.add(e), e.then(u, u));
    });
  }
  function ol(a, l) {
    var t = l.deletions;
    if (t !== null)
      for (var e = 0; e < t.length; e++) {
        var u = t[e],
          n = a,
          c = l,
          i = c;
        a: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (zt(i.type)) {
                (Sa = i.stateNode), (nl = !1);
                break a;
              }
              break;
            case 5:
              (Sa = i.stateNode), (nl = !1);
              break a;
            case 3:
            case 4:
              (Sa = i.stateNode.containerInfo), (nl = !0);
              break a;
          }
          i = i.return;
        }
        if (Sa === null) throw Error(m(160));
        Jr(n, c, u),
          (Sa = null),
          (nl = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; ) $r(l, a), (l = l.sibling);
  }
  var _l = null;
  function $r(a, l) {
    var t = a.alternate,
      e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ol(l, a),
          dl(a),
          e & 4 && (dt(3, a, a.return), ru(3, a), dt(5, a, a.return));
        break;
      case 1:
        ol(l, a),
          dl(a),
          e & 512 && (_a || t === null || Ul(t, t.return)),
          e & 64 &&
            kl &&
            ((a = a.updateQueue),
            a !== null &&
              ((e = a.callbacks),
              e !== null &&
                ((t = a.shared.hiddenCallbacks),
                (a.shared.hiddenCallbacks = t === null ? e : t.concat(e)))));
        break;
      case 26:
        var u = _l;
        if (
          (ol(l, a),
          dl(a),
          e & 512 && (_a || t === null || Ul(t, t.return)),
          e & 4)
        ) {
          var n = t !== null ? t.memoizedState : null;
          if (((e = a.memoizedState), t === null))
            if (e === null)
              if (a.stateNode === null) {
                a: {
                  (e = a.type),
                    (t = a.memoizedProps),
                    (u = u.ownerDocument || u);
                  l: switch (e) {
                    case "title":
                      (n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[qe] ||
                          n[Fa] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        Ja(n, e, t),
                        (n[Fa] = a),
                        Ya(n),
                        (e = n);
                      break a;
                    case "link":
                      var c = Vo("link", "href", u).get(e + (t.href || ""));
                      if (c) {
                        for (var i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("href") ===
                              (t.href == null || t.href === ""
                                ? null
                                : t.href) &&
                              n.getAttribute("rel") ===
                                (t.rel == null ? null : t.rel) &&
                              n.getAttribute("title") ===
                                (t.title == null ? null : t.title) &&
                              n.getAttribute("crossorigin") ===
                                (t.crossOrigin == null ? null : t.crossOrigin))
                          ) {
                            c.splice(i, 1);
                            break l;
                          }
                      }
                      (n = u.createElement(e)),
                        Ja(n, e, t),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (c = Vo("meta", "content", u).get(
                          e + (t.content || "")
                        ))
                      ) {
                        for (i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("content") ===
                              (t.content == null ? null : "" + t.content) &&
                              n.getAttribute("name") ===
                                (t.name == null ? null : t.name) &&
                              n.getAttribute("property") ===
                                (t.property == null ? null : t.property) &&
                              n.getAttribute("http-equiv") ===
                                (t.httpEquiv == null ? null : t.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (t.charSet == null ? null : t.charSet))
                          ) {
                            c.splice(i, 1);
                            break l;
                          }
                      }
                      (n = u.createElement(e)),
                        Ja(n, e, t),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, e));
                  }
                  (n[Fa] = a), Ya(n), (e = n);
                }
                a.stateNode = e;
              } else Lo(u, a.type, a.stateNode);
            else a.stateNode = Zo(u, e, a.memoizedProps);
          else
            n !== e
              ? (n === null
                  ? t.stateNode !== null &&
                    ((t = t.stateNode), t.parentNode.removeChild(t))
                  : n.count--,
                e === null
                  ? Lo(u, a.type, a.stateNode)
                  : Zo(u, e, a.memoizedProps))
              : e === null &&
                a.stateNode !== null &&
                yi(a, a.memoizedProps, t.memoizedProps);
        }
        break;
      case 27:
        ol(l, a),
          dl(a),
          e & 512 && (_a || t === null || Ul(t, t.return)),
          t !== null && e & 4 && yi(a, a.memoizedProps, t.memoizedProps);
        break;
      case 5:
        if (
          (ol(l, a),
          dl(a),
          e & 512 && (_a || t === null || Ul(t, t.return)),
          a.flags & 32)
        ) {
          u = a.stateNode;
          try {
            Pt(u, "");
          } catch (b) {
            ya(a, a.return, b);
          }
        }
        e & 4 &&
          a.stateNode != null &&
          ((u = a.memoizedProps), yi(a, u, t !== null ? t.memoizedProps : u)),
          e & 1024 && (Si = !0);
        break;
      case 6:
        if ((ol(l, a), dl(a), e & 4)) {
          if (a.stateNode === null) throw Error(m(162));
          (e = a.memoizedProps), (t = a.stateNode);
          try {
            t.nodeValue = e;
          } catch (b) {
            ya(a, a.return, b);
          }
        }
        break;
      case 3:
        if (
          ((Bn = null),
          (u = _l),
          (_l = qn(l.containerInfo)),
          ol(l, a),
          (_l = u),
          dl(a),
          e & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Mu(l.containerInfo);
          } catch (b) {
            ya(a, a.return, b);
          }
        Si && ((Si = !1), Wr(a));
        break;
      case 4:
        (e = _l),
          (_l = qn(a.stateNode.containerInfo)),
          ol(l, a),
          dl(a),
          (_l = e);
        break;
      case 12:
        ol(l, a), dl(a);
        break;
      case 13:
        ol(l, a),
          dl(a),
          a.child.flags & 8192 &&
            (a.memoizedState !== null) !=
              (t !== null && t.memoizedState !== null) &&
            (_i = ll()),
          e & 4 &&
            ((e = a.updateQueue),
            e !== null && ((a.updateQueue = null), zi(a, e)));
        break;
      case 22:
        u = a.memoizedState !== null;
        var f = t !== null && t.memoizedState !== null,
          y = kl,
          z = _a;
        if (
          ((kl = y || u),
          (_a = z || f),
          ol(l, a),
          (_a = z),
          (kl = y),
          dl(a),
          e & 8192)
        )
          a: for (
            l = a.stateNode,
              l._visibility = u ? l._visibility & -2 : l._visibility | 1,
              u && (t === null || f || kl || _a || Qt(a)),
              t = null,
              l = a;
            ;

          ) {
            if (l.tag === 5 || l.tag === 26) {
              if (t === null) {
                f = t = l;
                try {
                  if (((n = f.stateNode), u))
                    (c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    i = f.stateNode;
                    var T = f.memoizedProps.style,
                      g =
                        T != null && T.hasOwnProperty("display")
                          ? T.display
                          : null;
                    i.style.display =
                      g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (b) {
                  ya(f, f.return, b);
                }
              }
            } else if (l.tag === 6) {
              if (t === null) {
                f = l;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (b) {
                  ya(f, f.return, b);
                }
              }
            } else if (
              ((l.tag !== 22 && l.tag !== 23) ||
                l.memoizedState === null ||
                l === a) &&
              l.child !== null
            ) {
              (l.child.return = l), (l = l.child);
              continue;
            }
            if (l === a) break a;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === a) break a;
              t === l && (t = null), (l = l.return);
            }
            t === l && (t = null),
              (l.sibling.return = l.return),
              (l = l.sibling);
          }
        e & 4 &&
          ((e = a.updateQueue),
          e !== null &&
            ((t = e.retryQueue),
            t !== null && ((e.retryQueue = null), zi(a, t))));
        break;
      case 19:
        ol(l, a),
          dl(a),
          e & 4 &&
            ((e = a.updateQueue),
            e !== null && ((a.updateQueue = null), zi(a, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ol(l, a), dl(a);
    }
  }
  function dl(a) {
    var l = a.flags;
    if (l & 2) {
      try {
        for (var t, e = a.return; e !== null; ) {
          if (Qr(e)) {
            t = e;
            break;
          }
          e = e.return;
        }
        if (t == null) throw Error(m(160));
        switch (t.tag) {
          case 27:
            var u = t.stateNode,
              n = gi(a);
            An(a, n, u);
            break;
          case 5:
            var c = t.stateNode;
            t.flags & 32 && (Pt(c, ""), (t.flags &= -33));
            var i = gi(a);
            An(a, i, c);
            break;
          case 3:
          case 4:
            var f = t.stateNode.containerInfo,
              y = gi(a);
            bi(a, y, f);
            break;
          default:
            throw Error(m(161));
        }
      } catch (z) {
        ya(a, a.return, z);
      }
      a.flags &= -3;
    }
    l & 4096 && (a.flags &= -4097);
  }
  function Wr(a) {
    if (a.subtreeFlags & 1024)
      for (a = a.child; a !== null; ) {
        var l = a;
        Wr(l),
          l.tag === 5 && l.flags & 1024 && l.stateNode.reset(),
          (a = a.sibling);
      }
  }
  function ht(a, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; ) Lr(a, l.alternate, l), (l = l.sibling);
  }
  function Qt(a) {
    for (a = a.child; a !== null; ) {
      var l = a;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          dt(4, l, l.return), Qt(l);
          break;
        case 1:
          Ul(l, l.return);
          var t = l.stateNode;
          typeof t.componentWillUnmount == "function" && Xr(l, l.return, t),
            Qt(l);
          break;
        case 27:
          zu(l.stateNode);
        case 26:
        case 5:
          Ul(l, l.return), Qt(l);
          break;
        case 22:
          l.memoizedState === null && Qt(l);
          break;
        case 30:
          Qt(l);
          break;
        default:
          Qt(l);
      }
      a = a.sibling;
    }
  }
  function mt(a, l, t) {
    for (t = t && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var e = l.alternate,
        u = a,
        n = l,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          mt(u, n, t), ru(4, n);
          break;
        case 1:
          if (
            (mt(u, n, t),
            (e = n),
            (u = e.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (y) {
              ya(e, e.return, y);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var i = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  Ns(f[u], i);
            } catch (y) {
              ya(e, e.return, y);
            }
          }
          t && c & 64 && Yr(n), ou(n, n.return);
          break;
        case 27:
          Zr(n);
        case 26:
        case 5:
          mt(u, n, t), t && e === null && c & 4 && Gr(n), ou(n, n.return);
          break;
        case 12:
          mt(u, n, t);
          break;
        case 13:
          mt(u, n, t), t && c & 4 && wr(u, n);
          break;
        case 22:
          n.memoizedState === null && mt(u, n, t), ou(n, n.return);
          break;
        case 30:
          break;
        default:
          mt(u, n, t);
      }
      l = l.sibling;
    }
  }
  function pi(a, l) {
    var t = null;
    a !== null &&
      a.memoizedState !== null &&
      a.memoizedState.cachePool !== null &&
      (t = a.memoizedState.cachePool.pool),
      (a = null),
      l.memoizedState !== null &&
        l.memoizedState.cachePool !== null &&
        (a = l.memoizedState.cachePool.pool),
      a !== t && (a != null && a.refCount++, t != null && ke(t));
  }
  function Ai(a, l) {
    (a = null),
      l.alternate !== null && (a = l.alternate.memoizedState.cache),
      (l = l.memoizedState.cache),
      l !== a && (l.refCount++, a != null && ke(a));
  }
  function Hl(a, l, t, e) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) kr(a, l, t, e), (l = l.sibling);
  }
  function kr(a, l, t, e) {
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Hl(a, l, t, e), u & 2048 && ru(9, l);
        break;
      case 1:
        Hl(a, l, t, e);
        break;
      case 3:
        Hl(a, l, t, e),
          u & 2048 &&
            ((a = null),
            l.alternate !== null && (a = l.alternate.memoizedState.cache),
            (l = l.memoizedState.cache),
            l !== a && (l.refCount++, a != null && ke(a)));
        break;
      case 12:
        if (u & 2048) {
          Hl(a, l, t, e), (a = l.stateNode);
          try {
            var n = l.memoizedProps,
              c = n.id,
              i = n.onPostCommit;
            typeof i == "function" &&
              i(
                c,
                l.alternate === null ? "mount" : "update",
                a.passiveEffectDuration,
                -0
              );
          } catch (f) {
            ya(l, l.return, f);
          }
        } else Hl(a, l, t, e);
        break;
      case 13:
        Hl(a, l, t, e);
        break;
      case 23:
        break;
      case 22:
        (n = l.stateNode),
          (c = l.alternate),
          l.memoizedState !== null
            ? n._visibility & 2
              ? Hl(a, l, t, e)
              : du(a, l)
            : n._visibility & 2
            ? Hl(a, l, t, e)
            : ((n._visibility |= 2),
              be(a, l, t, e, (l.subtreeFlags & 10256) !== 0)),
          u & 2048 && pi(c, l);
        break;
      case 24:
        Hl(a, l, t, e), u & 2048 && Ai(l.alternate, l);
        break;
      default:
        Hl(a, l, t, e);
    }
  }
  function be(a, l, t, e, u) {
    for (u = u && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = a,
        c = l,
        i = t,
        f = e,
        y = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          be(n, c, i, f, u), ru(8, c);
          break;
        case 23:
          break;
        case 22:
          var z = c.stateNode;
          c.memoizedState !== null
            ? z._visibility & 2
              ? be(n, c, i, f, u)
              : du(n, c)
            : ((z._visibility |= 2), be(n, c, i, f, u)),
            u && y & 2048 && pi(c.alternate, c);
          break;
        case 24:
          be(n, c, i, f, u), u && y & 2048 && Ai(c.alternate, c);
          break;
        default:
          be(n, c, i, f, u);
      }
      l = l.sibling;
    }
  }
  function du(a, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var t = a,
          e = l,
          u = e.flags;
        switch (e.tag) {
          case 22:
            du(t, e), u & 2048 && pi(e.alternate, e);
            break;
          case 24:
            du(t, e), u & 2048 && Ai(e.alternate, e);
            break;
          default:
            du(t, e);
        }
        l = l.sibling;
      }
  }
  var hu = 8192;
  function Se(a) {
    if (a.subtreeFlags & hu)
      for (a = a.child; a !== null; ) Fr(a), (a = a.sibling);
  }
  function Fr(a) {
    switch (a.tag) {
      case 26:
        Se(a),
          a.flags & hu &&
            a.memoizedState !== null &&
            Nm(_l, a.memoizedState, a.memoizedProps);
        break;
      case 5:
        Se(a);
        break;
      case 3:
      case 4:
        var l = _l;
        (_l = qn(a.stateNode.containerInfo)), Se(a), (_l = l);
        break;
      case 22:
        a.memoizedState === null &&
          ((l = a.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = hu), (hu = 16777216), Se(a), (hu = l))
            : Se(a));
        break;
      default:
        Se(a);
    }
  }
  function Ir(a) {
    var l = a.alternate;
    if (l !== null && ((a = l.child), a !== null)) {
      l.child = null;
      do (l = a.sibling), (a.sibling = null), (a = l);
      while (a !== null);
    }
  }
  function mu(a) {
    var l = a.deletions;
    if ((a.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var e = l[t];
          (Ga = e), ao(e, a);
        }
      Ir(a);
    }
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) Pr(a), (a = a.sibling);
  }
  function Pr(a) {
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        mu(a), a.flags & 2048 && dt(9, a, a.return);
        break;
      case 3:
        mu(a);
        break;
      case 12:
        mu(a);
        break;
      case 22:
        var l = a.stateNode;
        a.memoizedState !== null &&
        l._visibility & 2 &&
        (a.return === null || a.return.tag !== 13)
          ? ((l._visibility &= -3), En(a))
          : mu(a);
        break;
      default:
        mu(a);
    }
  }
  function En(a) {
    var l = a.deletions;
    if ((a.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var e = l[t];
          (Ga = e), ao(e, a);
        }
      Ir(a);
    }
    for (a = a.child; a !== null; ) {
      switch (((l = a), l.tag)) {
        case 0:
        case 11:
        case 15:
          dt(8, l, l.return), En(l);
          break;
        case 22:
          (t = l.stateNode),
            t._visibility & 2 && ((t._visibility &= -3), En(l));
          break;
        default:
          En(l);
      }
      a = a.sibling;
    }
  }
  function ao(a, l) {
    for (; Ga !== null; ) {
      var t = Ga;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          dt(8, t, l);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var e = t.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          ke(t.memoizedState.cache);
      }
      if (((e = t.child), e !== null)) (e.return = t), (Ga = e);
      else
        a: for (t = a; Ga !== null; ) {
          e = Ga;
          var u = e.sibling,
            n = e.return;
          if ((Kr(e), e === t)) {
            Ga = null;
            break a;
          }
          if (u !== null) {
            (u.return = n), (Ga = u);
            break a;
          }
          Ga = n;
        }
    }
  }
  var Gh = {
      getCacheForType: function (a) {
        var l = Ia(qa),
          t = l.data.get(a);
        return t === void 0 && ((t = a()), l.data.set(a, t)), t;
      },
    },
    Qh = typeof WeakMap == "function" ? WeakMap : Map,
    oa = 0,
    ga = null,
    I = null,
    ea = 0,
    da = 0,
    hl = null,
    vt = !1,
    ze = !1,
    Ei = !1,
    Il = 0,
    Aa = 0,
    yt = 0,
    Zt = 0,
    Ni = 0,
    El = 0,
    pe = 0,
    vu = null,
    cl = null,
    Ti = !1,
    _i = 0,
    Nn = 1 / 0,
    Tn = null,
    gt = null,
    Ka = 0,
    bt = null,
    Ae = null,
    Ee = 0,
    Oi = 0,
    Mi = null,
    lo = null,
    yu = 0,
    Di = null;
  function ml() {
    if ((oa & 2) !== 0 && ea !== 0) return ea & -ea;
    if (S.T !== null) {
      var a = re;
      return a !== 0 ? a : Ci();
    }
    return gf();
  }
  function to() {
    El === 0 && (El = (ea & 536870912) === 0 || fa ? hf() : 536870912);
    var a = Al.current;
    return a !== null && (a.flags |= 32), El;
  }
  function vl(a, l, t) {
    ((a === ga && (da === 2 || da === 9)) || a.cancelPendingCommit !== null) &&
      (Ne(a, 0), St(a, ea, El, !1)),
      He(a, t),
      ((oa & 2) === 0 || a !== ga) &&
        (a === ga &&
          ((oa & 2) === 0 && (Zt |= t), Aa === 4 && St(a, ea, El, !1)),
        ql(a));
  }
  function eo(a, l, t) {
    if ((oa & 6) !== 0) throw Error(m(327));
    var e = (!t && (l & 124) === 0 && (l & a.expiredLanes) === 0) || Ue(a, l),
      u = e ? Lh(a, l) : Ri(a, l, !0),
      n = e;
    do {
      if (u === 0) {
        ze && !e && St(a, l, 0, !1);
        break;
      } else {
        if (((t = a.current.alternate), n && !Zh(t))) {
          (u = Ri(a, l, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = l), a.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            (c = a.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            l = c;
            a: {
              var i = a;
              u = vu;
              var f = i.current.memoizedState.isDehydrated;
              if ((f && (Ne(i, c).flags |= 256), (c = Ri(i, c, !1)), c !== 2)) {
                if (Ei && !f) {
                  (i.errorRecoveryDisabledLanes |= n), (Zt |= n), (u = 4);
                  break a;
                }
                (n = cl),
                  (cl = u),
                  n !== null && (cl === null ? (cl = n) : cl.push.apply(cl, n));
              }
              u = c;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Ne(a, 0), St(a, l, 0, !0);
          break;
        }
        a: {
          switch (((e = a), (n = u), n)) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              St(e, l, El, !vt);
              break a;
            case 2:
              cl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((l & 62914560) === l && ((u = _i + 300 - ll()), 10 < u)) {
            if ((St(e, l, El, !vt), qu(e, 0, !0) !== 0)) break a;
            e.timeoutHandle = Uo(
              uo.bind(null, e, t, cl, Tn, Ti, l, El, Zt, pe, vt, n, 2, -0, 0),
              u
            );
            break a;
          }
          uo(e, t, cl, Tn, Ti, l, El, Zt, pe, vt, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    ql(a);
  }
  function uo(a, l, t, e, u, n, c, i, f, y, z, T, g, b) {
    if (
      ((a.timeoutHandle = -1),
      (T = l.subtreeFlags),
      (T & 8192 || (T & 16785408) === 16785408) &&
        ((Eu = { stylesheets: null, count: 0, unsuspend: Em }),
        Fr(l),
        (T = Tm()),
        T !== null))
    ) {
      (a.cancelPendingCommit = T(
        oo.bind(null, a, l, n, t, e, u, c, i, f, z, 1, g, b)
      )),
        St(a, n, c, !y);
      return;
    }
    oo(a, l, n, t, e, u, c, i, f);
  }
  function Zh(a) {
    for (var l = a; ; ) {
      var t = l.tag;
      if (
        (t === 0 || t === 11 || t === 15) &&
        l.flags & 16384 &&
        ((t = l.updateQueue), t !== null && ((t = t.stores), t !== null))
      )
        for (var e = 0; e < t.length; e++) {
          var u = t[e],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!sl(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((t = l.child), l.subtreeFlags & 16384 && t !== null))
        (t.return = l), (l = t);
      else {
        if (l === a) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === a) return !0;
          l = l.return;
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    }
    return !0;
  }
  function St(a, l, t, e) {
    (l &= ~Ni),
      (l &= ~Zt),
      (a.suspendedLanes |= l),
      (a.pingedLanes &= ~l),
      e && (a.warmLanes |= l),
      (e = a.expirationTimes);
    for (var u = l; 0 < u; ) {
      var n = 31 - fl(u),
        c = 1 << n;
      (e[n] = -1), (u &= ~c);
    }
    t !== 0 && vf(a, t, l);
  }
  function _n() {
    return (oa & 6) === 0 ? (gu(0), !1) : !0;
  }
  function ji() {
    if (I !== null) {
      if (da === 0) var a = I.return;
      else (a = I), (Ll = Ct = null), wc(a), (ye = null), (iu = 0), (a = I);
      for (; a !== null; ) Br(a.alternate, a), (a = a.return);
      I = null;
    }
  }
  function Ne(a, l) {
    var t = a.timeoutHandle;
    t !== -1 && ((a.timeoutHandle = -1), cm(t)),
      (t = a.cancelPendingCommit),
      t !== null && ((a.cancelPendingCommit = null), t()),
      ji(),
      (ga = a),
      (I = t = Ql(a.current, null)),
      (ea = l),
      (da = 0),
      (hl = null),
      (vt = !1),
      (ze = Ue(a, l)),
      (Ei = !1),
      (pe = El = Ni = Zt = yt = Aa = 0),
      (cl = vu = null),
      (Ti = !1),
      (l & 8) !== 0 && (l |= l & 32);
    var e = a.entangledLanes;
    if (e !== 0)
      for (a = a.entanglements, e &= l; 0 < e; ) {
        var u = 31 - fl(e),
          n = 1 << u;
        (l |= a[u]), (e &= ~n);
      }
    return (Il = l), wu(), t;
  }
  function no(a, l) {
    (W = null),
      (S.H = hn),
      l === Ie || l === tn
        ? ((l = As()), (da = 3))
        : l === Ss
        ? ((l = As()), (da = 4))
        : (da =
            l === Er
              ? 8
              : l !== null &&
                typeof l == "object" &&
                typeof l.then == "function"
              ? 6
              : 1),
      (hl = l),
      I === null && ((Aa = 1), bn(a, bl(l, a.current)));
  }
  function co() {
    var a = S.H;
    return (S.H = hn), a === null ? hn : a;
  }
  function io() {
    var a = S.A;
    return (S.A = Gh), a;
  }
  function xi() {
    (Aa = 4),
      vt || ((ea & 4194048) !== ea && Al.current !== null) || (ze = !0),
      ((yt & 134217727) === 0 && (Zt & 134217727) === 0) ||
        ga === null ||
        St(ga, ea, El, !1);
  }
  function Ri(a, l, t) {
    var e = oa;
    oa |= 2;
    var u = co(),
      n = io();
    (ga !== a || ea !== l) && ((Tn = null), Ne(a, l)), (l = !1);
    var c = Aa;
    a: do
      try {
        if (da !== 0 && I !== null) {
          var i = I,
            f = hl;
          switch (da) {
            case 8:
              ji(), (c = 6);
              break a;
            case 3:
            case 2:
            case 9:
            case 6:
              Al.current === null && (l = !0);
              var y = da;
              if (((da = 0), (hl = null), Te(a, i, f, y), t && ze)) {
                c = 0;
                break a;
              }
              break;
            default:
              (y = da), (da = 0), (hl = null), Te(a, i, f, y);
          }
        }
        Vh(), (c = Aa);
        break;
      } catch (z) {
        no(a, z);
      }
    while (!0);
    return (
      l && a.shellSuspendCounter++,
      (Ll = Ct = null),
      (oa = e),
      (S.H = u),
      (S.A = n),
      I === null && ((ga = null), (ea = 0), wu()),
      c
    );
  }
  function Vh() {
    for (; I !== null; ) fo(I);
  }
  function Lh(a, l) {
    var t = oa;
    oa |= 2;
    var e = co(),
      u = io();
    ga !== a || ea !== l
      ? ((Tn = null), (Nn = ll() + 500), Ne(a, l))
      : (ze = Ue(a, l));
    a: do
      try {
        if (da !== 0 && I !== null) {
          l = I;
          var n = hl;
          l: switch (da) {
            case 1:
              (da = 0), (hl = null), Te(a, l, n, 1);
              break;
            case 2:
            case 9:
              if (zs(n)) {
                (da = 0), (hl = null), so(l);
                break;
              }
              (l = function () {
                (da !== 2 && da !== 9) || ga !== a || (da = 7), ql(a);
              }),
                n.then(l, l);
              break a;
            case 3:
              da = 7;
              break a;
            case 4:
              da = 5;
              break a;
            case 7:
              zs(n)
                ? ((da = 0), (hl = null), so(l))
                : ((da = 0), (hl = null), Te(a, l, n, 7));
              break;
            case 5:
              var c = null;
              switch (I.tag) {
                case 26:
                  c = I.memoizedState;
                case 5:
                case 27:
                  var i = I;
                  if (!c || Ko(c)) {
                    (da = 0), (hl = null);
                    var f = i.sibling;
                    if (f !== null) I = f;
                    else {
                      var y = i.return;
                      y !== null ? ((I = y), On(y)) : (I = null);
                    }
                    break l;
                  }
              }
              (da = 0), (hl = null), Te(a, l, n, 5);
              break;
            case 6:
              (da = 0), (hl = null), Te(a, l, n, 6);
              break;
            case 8:
              ji(), (Aa = 6);
              break a;
            default:
              throw Error(m(462));
          }
        }
        Kh();
        break;
      } catch (z) {
        no(a, z);
      }
    while (!0);
    return (
      (Ll = Ct = null),
      (S.H = e),
      (S.A = u),
      (oa = t),
      I !== null ? 0 : ((ga = null), (ea = 0), wu(), Aa)
    );
  }
  function Kh() {
    for (; I !== null && !jl(); ) fo(I);
  }
  function fo(a) {
    var l = qr(a.alternate, a, Il);
    (a.memoizedProps = a.pendingProps), l === null ? On(a) : (I = l);
  }
  function so(a) {
    var l = a,
      t = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Dr(t, l, l.pendingProps, l.type, void 0, ea);
        break;
      case 11:
        l = Dr(t, l, l.pendingProps, l.type.render, l.ref, ea);
        break;
      case 5:
        wc(l);
      default:
        Br(t, l), (l = I = rs(l, Il)), (l = qr(t, l, Il));
    }
    (a.memoizedProps = a.pendingProps), l === null ? On(a) : (I = l);
  }
  function Te(a, l, t, e) {
    (Ll = Ct = null), wc(l), (ye = null), (iu = 0);
    var u = l.return;
    try {
      if (Hh(a, u, l, t, ea)) {
        (Aa = 1), bn(a, bl(t, a.current)), (I = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((I = u), n);
      (Aa = 1), bn(a, bl(t, a.current)), (I = null);
      return;
    }
    l.flags & 32768
      ? (fa || e === 1
          ? (a = !0)
          : ze || (ea & 536870912) !== 0
          ? (a = !1)
          : ((vt = a = !0),
            (e === 2 || e === 9 || e === 3 || e === 6) &&
              ((e = Al.current),
              e !== null && e.tag === 13 && (e.flags |= 16384))),
        ro(l, a))
      : On(l);
  }
  function On(a) {
    var l = a;
    do {
      if ((l.flags & 32768) !== 0) {
        ro(l, vt);
        return;
      }
      a = l.return;
      var t = Ch(l.alternate, l, Il);
      if (t !== null) {
        I = t;
        return;
      }
      if (((l = l.sibling), l !== null)) {
        I = l;
        return;
      }
      I = l = a;
    } while (l !== null);
    Aa === 0 && (Aa = 5);
  }
  function ro(a, l) {
    do {
      var t = Bh(a.alternate, a);
      if (t !== null) {
        (t.flags &= 32767), (I = t);
        return;
      }
      if (
        ((t = a.return),
        t !== null &&
          ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)),
        !l && ((a = a.sibling), a !== null))
      ) {
        I = a;
        return;
      }
      I = a = t;
    } while (a !== null);
    (Aa = 6), (I = null);
  }
  function oo(a, l, t, e, u, n, c, i, f) {
    a.cancelPendingCommit = null;
    do Mn();
    while (Ka !== 0);
    if ((oa & 6) !== 0) throw Error(m(327));
    if (l !== null) {
      if (l === a.current) throw Error(m(177));
      if (
        ((n = l.lanes | l.childLanes),
        (n |= Ac),
        Ed(a, t, n, c, i, f),
        a === ga && ((I = ga = null), (ea = 0)),
        (Ae = l),
        (bt = a),
        (Ee = t),
        (Oi = n),
        (Mi = u),
        (lo = e),
        (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
          ? ((a.callbackNode = null),
            (a.callbackPriority = 0),
            Wh(lt, function () {
              return go(), null;
            }))
          : ((a.callbackNode = null), (a.callbackPriority = 0)),
        (e = (l.flags & 13878) !== 0),
        (l.subtreeFlags & 13878) !== 0 || e)
      ) {
        (e = S.T), (S.T = null), (u = j.p), (j.p = 2), (c = oa), (oa |= 4);
        try {
          Yh(a, l, t);
        } finally {
          (oa = c), (j.p = u), (S.T = e);
        }
      }
      (Ka = 1), ho(), mo(), vo();
    }
  }
  function ho() {
    if (Ka === 1) {
      Ka = 0;
      var a = bt,
        l = Ae,
        t = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || t) {
        (t = S.T), (S.T = null);
        var e = j.p;
        j.p = 2;
        var u = oa;
        oa |= 4;
        try {
          $r(l, a);
          var n = Li,
            c = as(a.containerInfo),
            i = n.focusedElem,
            f = n.selectionRange;
          if (
            c !== i &&
            i &&
            i.ownerDocument &&
            Pf(i.ownerDocument.documentElement, i)
          ) {
            if (f !== null && gc(i)) {
              var y = f.start,
                z = f.end;
              if ((z === void 0 && (z = y), "selectionStart" in i))
                (i.selectionStart = y),
                  (i.selectionEnd = Math.min(z, i.value.length));
              else {
                var T = i.ownerDocument || document,
                  g = (T && T.defaultView) || window;
                if (g.getSelection) {
                  var b = g.getSelection(),
                    K = i.textContent.length,
                    V = Math.min(f.start, K),
                    va = f.end === void 0 ? V : Math.min(f.end, K);
                  !b.extend && V > va && ((c = va), (va = V), (V = c));
                  var h = If(i, V),
                    o = If(i, va);
                  if (
                    h &&
                    o &&
                    (b.rangeCount !== 1 ||
                      b.anchorNode !== h.node ||
                      b.anchorOffset !== h.offset ||
                      b.focusNode !== o.node ||
                      b.focusOffset !== o.offset)
                  ) {
                    var v = T.createRange();
                    v.setStart(h.node, h.offset),
                      b.removeAllRanges(),
                      V > va
                        ? (b.addRange(v), b.extend(o.node, o.offset))
                        : (v.setEnd(o.node, o.offset), b.addRange(v));
                  }
                }
              }
            }
            for (T = [], b = i; (b = b.parentNode); )
              b.nodeType === 1 &&
                T.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
            for (
              typeof i.focus == "function" && i.focus(), i = 0;
              i < T.length;
              i++
            ) {
              var E = T[i];
              (E.element.scrollLeft = E.left), (E.element.scrollTop = E.top);
            }
          }
          (Gn = !!Vi), (Li = Vi = null);
        } finally {
          (oa = u), (j.p = e), (S.T = t);
        }
      }
      (a.current = l), (Ka = 2);
    }
  }
  function mo() {
    if (Ka === 2) {
      Ka = 0;
      var a = bt,
        l = Ae,
        t = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || t) {
        (t = S.T), (S.T = null);
        var e = j.p;
        j.p = 2;
        var u = oa;
        oa |= 4;
        try {
          Lr(a, l.alternate, l);
        } finally {
          (oa = u), (j.p = e), (S.T = t);
        }
      }
      Ka = 3;
    }
  }
  function vo() {
    if (Ka === 4 || Ka === 3) {
      (Ka = 0), at();
      var a = bt,
        l = Ae,
        t = Ee,
        e = lo;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
        ? (Ka = 5)
        : ((Ka = 0), (Ae = bt = null), yo(a, a.pendingLanes));
      var u = a.pendingLanes;
      if (
        (u === 0 && (gt = null),
        kn(t),
        (l = l.stateNode),
        Va && typeof Va.onCommitFiberRoot == "function")
      )
        try {
          Va.onCommitFiberRoot(Yl, l, void 0, (l.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        (l = S.T), (u = j.p), (j.p = 2), (S.T = null);
        try {
          for (var n = a.onRecoverableError, c = 0; c < e.length; c++) {
            var i = e[c];
            n(i.value, { componentStack: i.stack });
          }
        } finally {
          (S.T = l), (j.p = u);
        }
      }
      (Ee & 3) !== 0 && Mn(),
        ql(a),
        (u = a.pendingLanes),
        (t & 4194090) !== 0 && (u & 42) !== 0
          ? a === Di
            ? yu++
            : ((yu = 0), (Di = a))
          : (yu = 0),
        gu(0);
    }
  }
  function yo(a, l) {
    (a.pooledCacheLanes &= l) === 0 &&
      ((l = a.pooledCache), l != null && ((a.pooledCache = null), ke(l)));
  }
  function Mn(a) {
    return ho(), mo(), vo(), go();
  }
  function go() {
    if (Ka !== 5) return !1;
    var a = bt,
      l = Oi;
    Oi = 0;
    var t = kn(Ee),
      e = S.T,
      u = j.p;
    try {
      (j.p = 32 > t ? 32 : t), (S.T = null), (t = Mi), (Mi = null);
      var n = bt,
        c = Ee;
      if (((Ka = 0), (Ae = bt = null), (Ee = 0), (oa & 6) !== 0))
        throw Error(m(331));
      var i = oa;
      if (
        ((oa |= 4),
        Pr(n.current),
        kr(n, n.current, c, t),
        (oa = i),
        gu(0, !1),
        Va && typeof Va.onPostCommitFiberRoot == "function")
      )
        try {
          Va.onPostCommitFiberRoot(Yl, n);
        } catch {}
      return !0;
    } finally {
      (j.p = u), (S.T = e), yo(a, l);
    }
  }
  function bo(a, l, t) {
    (l = bl(t, l)),
      (l = ii(a.stateNode, l, 2)),
      (a = ft(a, l, 2)),
      a !== null && (He(a, 2), ql(a));
  }
  function ya(a, l, t) {
    if (a.tag === 3) bo(a, a, t);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          bo(l, a, t);
          break;
        } else if (l.tag === 1) {
          var e = l.stateNode;
          if (
            typeof l.type.getDerivedStateFromError == "function" ||
            (typeof e.componentDidCatch == "function" &&
              (gt === null || !gt.has(e)))
          ) {
            (a = bl(t, a)),
              (t = pr(2)),
              (e = ft(l, t, 2)),
              e !== null && (Ar(t, e, l, a), He(e, 2), ql(e));
            break;
          }
        }
        l = l.return;
      }
  }
  function Ui(a, l, t) {
    var e = a.pingCache;
    if (e === null) {
      e = a.pingCache = new Qh();
      var u = new Set();
      e.set(l, u);
    } else (u = e.get(l)), u === void 0 && ((u = new Set()), e.set(l, u));
    u.has(t) ||
      ((Ei = !0), u.add(t), (a = Jh.bind(null, a, l, t)), l.then(a, a));
  }
  function Jh(a, l, t) {
    var e = a.pingCache;
    e !== null && e.delete(l),
      (a.pingedLanes |= a.suspendedLanes & t),
      (a.warmLanes &= ~t),
      ga === a &&
        (ea & t) === t &&
        (Aa === 4 || (Aa === 3 && (ea & 62914560) === ea && 300 > ll() - _i)
          ? (oa & 2) === 0 && Ne(a, 0)
          : (Ni |= t),
        pe === ea && (pe = 0)),
      ql(a);
  }
  function So(a, l) {
    l === 0 && (l = mf()), (a = ce(a, l)), a !== null && (He(a, l), ql(a));
  }
  function wh(a) {
    var l = a.memoizedState,
      t = 0;
    l !== null && (t = l.retryLane), So(a, t);
  }
  function $h(a, l) {
    var t = 0;
    switch (a.tag) {
      case 13:
        var e = a.stateNode,
          u = a.memoizedState;
        u !== null && (t = u.retryLane);
        break;
      case 19:
        e = a.stateNode;
        break;
      case 22:
        e = a.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    e !== null && e.delete(l), So(a, t);
  }
  function Wh(a, l) {
    return Za(a, l);
  }
  var Dn = null,
    _e = null,
    Hi = !1,
    jn = !1,
    qi = !1,
    Vt = 0;
  function ql(a) {
    a !== _e &&
      a.next === null &&
      (_e === null ? (Dn = _e = a) : (_e = _e.next = a)),
      (jn = !0),
      Hi || ((Hi = !0), Fh());
  }
  function gu(a, l) {
    if (!qi && jn) {
      qi = !0;
      do
        for (var t = !1, e = Dn; e !== null; ) {
          if (a !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = e.suspendedLanes,
                i = e.pingedLanes;
              (n = (1 << (31 - fl(42 | a) + 1)) - 1),
                (n &= u & ~(c & ~i)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((t = !0), Eo(e, n));
          } else
            (n = ea),
              (n = qu(
                e,
                e === ga ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Ue(e, n) || ((t = !0), Eo(e, n));
          e = e.next;
        }
      while (t);
      qi = !1;
    }
  }
  function kh() {
    zo();
  }
  function zo() {
    jn = Hi = !1;
    var a = 0;
    Vt !== 0 && (nm() && (a = Vt), (Vt = 0));
    for (var l = ll(), t = null, e = Dn; e !== null; ) {
      var u = e.next,
        n = po(e, l);
      n === 0
        ? ((e.next = null),
          t === null ? (Dn = u) : (t.next = u),
          u === null && (_e = t))
        : ((t = e), (a !== 0 || (n & 3) !== 0) && (jn = !0)),
        (e = u);
    }
    gu(a);
  }
  function po(a, l) {
    for (
      var t = a.suspendedLanes,
        e = a.pingedLanes,
        u = a.expirationTimes,
        n = a.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - fl(n),
        i = 1 << c,
        f = u[c];
      f === -1
        ? ((i & t) === 0 || (i & e) !== 0) && (u[c] = Ad(i, l))
        : f <= l && (a.expiredLanes |= i),
        (n &= ~i);
    }
    if (
      ((l = ga),
      (t = ea),
      (t = qu(
        a,
        a === l ? t : 0,
        a.cancelPendingCommit !== null || a.timeoutHandle !== -1
      )),
      (e = a.callbackNode),
      t === 0 ||
        (a === l && (da === 2 || da === 9)) ||
        a.cancelPendingCommit !== null)
    )
      return (
        e !== null && e !== null && xa(e),
        (a.callbackNode = null),
        (a.callbackPriority = 0)
      );
    if ((t & 3) === 0 || Ue(a, t)) {
      if (((l = t & -t), l === a.callbackPriority)) return l;
      switch ((e !== null && xa(e), kn(t))) {
        case 2:
        case 8:
          t = Kt;
          break;
        case 32:
          t = lt;
          break;
        case 268435456:
          t = xu;
          break;
        default:
          t = lt;
      }
      return (
        (e = Ao.bind(null, a)),
        (t = Za(t, e)),
        (a.callbackPriority = l),
        (a.callbackNode = t),
        l
      );
    }
    return (
      e !== null && e !== null && xa(e),
      (a.callbackPriority = 2),
      (a.callbackNode = null),
      2
    );
  }
  function Ao(a, l) {
    if (Ka !== 0 && Ka !== 5)
      return (a.callbackNode = null), (a.callbackPriority = 0), null;
    var t = a.callbackNode;
    if (Mn() && a.callbackNode !== t) return null;
    var e = ea;
    return (
      (e = qu(
        a,
        a === ga ? e : 0,
        a.cancelPendingCommit !== null || a.timeoutHandle !== -1
      )),
      e === 0
        ? null
        : (eo(a, e, l),
          po(a, ll()),
          a.callbackNode != null && a.callbackNode === t
            ? Ao.bind(null, a)
            : null)
    );
  }
  function Eo(a, l) {
    if (Mn()) return null;
    eo(a, l, !0);
  }
  function Fh() {
    im(function () {
      (oa & 6) !== 0 ? Za(Lt, kh) : zo();
    });
  }
  function Ci() {
    return Vt === 0 && (Vt = hf()), Vt;
  }
  function No(a) {
    return a == null || typeof a == "symbol" || typeof a == "boolean"
      ? null
      : typeof a == "function"
      ? a
      : Gu("" + a);
  }
  function To(a, l) {
    var t = l.ownerDocument.createElement("input");
    return (
      (t.name = l.name),
      (t.value = l.value),
      a.id && t.setAttribute("form", a.id),
      l.parentNode.insertBefore(t, l),
      (a = new FormData(a)),
      t.parentNode.removeChild(t),
      a
    );
  }
  function Ih(a, l, t, e, u) {
    if (l === "submit" && t && t.stateNode === u) {
      var n = No((u[tl] || null).action),
        c = e.submitter;
      c &&
        ((l = (l = c[tl] || null)
          ? No(l.formAction)
          : c.getAttribute("formAction")),
        l !== null && ((n = l), (c = null)));
      var i = new Lu("action", "action", null, e, u);
      a.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (Vt !== 0) {
                  var f = c ? To(u, c) : new FormData(u);
                  ti(
                    t,
                    { pending: !0, data: f, method: u.method, action: n },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" &&
                  (i.preventDefault(),
                  (f = c ? To(u, c) : new FormData(u)),
                  ti(
                    t,
                    { pending: !0, data: f, method: u.method, action: n },
                    n,
                    f
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Bi = 0; Bi < pc.length; Bi++) {
    var Yi = pc[Bi],
      Ph = Yi.toLowerCase(),
      am = Yi[0].toUpperCase() + Yi.slice(1);
    Tl(Ph, "on" + am);
  }
  Tl(es, "onAnimationEnd"),
    Tl(us, "onAnimationIteration"),
    Tl(ns, "onAnimationStart"),
    Tl("dblclick", "onDoubleClick"),
    Tl("focusin", "onFocus"),
    Tl("focusout", "onBlur"),
    Tl(gh, "onTransitionRun"),
    Tl(bh, "onTransitionStart"),
    Tl(Sh, "onTransitionCancel"),
    Tl(cs, "onTransitionEnd"),
    kt("onMouseEnter", ["mouseout", "mouseover"]),
    kt("onMouseLeave", ["mouseout", "mouseover"]),
    kt("onPointerEnter", ["pointerout", "pointerover"]),
    kt("onPointerLeave", ["pointerout", "pointerover"]),
    Ot(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ot(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ot(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ot(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ot(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var bu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    lm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(bu)
    );
  function _o(a, l) {
    l = (l & 4) !== 0;
    for (var t = 0; t < a.length; t++) {
      var e = a[t],
        u = e.event;
      e = e.listeners;
      a: {
        var n = void 0;
        if (l)
          for (var c = e.length - 1; 0 <= c; c--) {
            var i = e[c],
              f = i.instance,
              y = i.currentTarget;
            if (((i = i.listener), f !== n && u.isPropagationStopped()))
              break a;
            (n = i), (u.currentTarget = y);
            try {
              n(u);
            } catch (z) {
              gn(z);
            }
            (u.currentTarget = null), (n = f);
          }
        else
          for (c = 0; c < e.length; c++) {
            if (
              ((i = e[c]),
              (f = i.instance),
              (y = i.currentTarget),
              (i = i.listener),
              f !== n && u.isPropagationStopped())
            )
              break a;
            (n = i), (u.currentTarget = y);
            try {
              n(u);
            } catch (z) {
              gn(z);
            }
            (u.currentTarget = null), (n = f);
          }
      }
    }
  }
  function P(a, l) {
    var t = l[Fn];
    t === void 0 && (t = l[Fn] = new Set());
    var e = a + "__bubble";
    t.has(e) || (Oo(l, a, 2, !1), t.add(e));
  }
  function Xi(a, l, t) {
    var e = 0;
    l && (e |= 4), Oo(t, a, e, l);
  }
  var xn = "_reactListening" + Math.random().toString(36).slice(2);
  function Gi(a) {
    if (!a[xn]) {
      (a[xn] = !0),
        Sf.forEach(function (t) {
          t !== "selectionchange" && (lm.has(t) || Xi(t, !1, a), Xi(t, !0, a));
        });
      var l = a.nodeType === 9 ? a : a.ownerDocument;
      l === null || l[xn] || ((l[xn] = !0), Xi("selectionchange", !1, l));
    }
  }
  function Oo(a, l, t, e) {
    switch (Fo(l)) {
      case 2:
        var u = Mm;
        break;
      case 8:
        u = Dm;
        break;
      default:
        u = af;
    }
    (t = u.bind(null, l, t, a)),
      (u = void 0),
      !fc ||
        (l !== "touchstart" && l !== "touchmove" && l !== "wheel") ||
        (u = !0),
      e
        ? u !== void 0
          ? a.addEventListener(l, t, { capture: !0, passive: u })
          : a.addEventListener(l, t, !0)
        : u !== void 0
        ? a.addEventListener(l, t, { passive: u })
        : a.addEventListener(l, t, !1);
  }
  function Qi(a, l, t, e, u) {
    var n = e;
    if ((l & 1) === 0 && (l & 2) === 0 && e !== null)
      a: for (;;) {
        if (e === null) return;
        var c = e.tag;
        if (c === 3 || c === 4) {
          var i = e.stateNode.containerInfo;
          if (i === u) break;
          if (c === 4)
            for (c = e.return; c !== null; ) {
              var f = c.tag;
              if ((f === 3 || f === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; i !== null; ) {
            if (((c = wt(i)), c === null)) return;
            if (((f = c.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              e = n = c;
              continue a;
            }
            i = i.parentNode;
          }
        }
        e = e.return;
      }
    Uf(function () {
      var y = n,
        z = cc(t),
        T = [];
      a: {
        var g = is.get(a);
        if (g !== void 0) {
          var b = Lu,
            K = a;
          switch (a) {
            case "keypress":
              if (Zu(t) === 0) break a;
            case "keydown":
            case "keyup":
              b = Wd;
              break;
            case "focusin":
              (K = "focus"), (b = dc);
              break;
            case "focusout":
              (K = "blur"), (b = dc);
              break;
            case "beforeblur":
            case "afterblur":
              b = dc;
              break;
            case "click":
              if (t.button === 2) break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = Cf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = Bd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = Id;
              break;
            case es:
            case us:
            case ns:
              b = Gd;
              break;
            case cs:
              b = ah;
              break;
            case "scroll":
            case "scrollend":
              b = qd;
              break;
            case "wheel":
              b = th;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = Zd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = Yf;
              break;
            case "toggle":
            case "beforetoggle":
              b = uh;
          }
          var V = (l & 4) !== 0,
            va = !V && (a === "scroll" || a === "scrollend"),
            h = V ? (g !== null ? g + "Capture" : null) : g;
          V = [];
          for (var o = y, v; o !== null; ) {
            var E = o;
            if (
              ((v = E.stateNode),
              (E = E.tag),
              (E !== 5 && E !== 26 && E !== 27) ||
                v === null ||
                h === null ||
                ((E = Be(o, h)), E != null && V.push(Su(o, E, v))),
              va)
            )
              break;
            o = o.return;
          }
          0 < V.length &&
            ((g = new b(g, K, null, t, z)), T.push({ event: g, listeners: V }));
        }
      }
      if ((l & 7) === 0) {
        a: {
          if (
            ((g = a === "mouseover" || a === "pointerover"),
            (b = a === "mouseout" || a === "pointerout"),
            g &&
              t !== nc &&
              (K = t.relatedTarget || t.fromElement) &&
              (wt(K) || K[Jt]))
          )
            break a;
          if (
            (b || g) &&
            ((g =
              z.window === z
                ? z
                : (g = z.ownerDocument)
                ? g.defaultView || g.parentWindow
                : window),
            b
              ? ((K = t.relatedTarget || t.toElement),
                (b = y),
                (K = K ? wt(K) : null),
                K !== null &&
                  ((va = U(K)),
                  (V = K.tag),
                  K !== va || (V !== 5 && V !== 27 && V !== 6)) &&
                  (K = null))
              : ((b = null), (K = y)),
            b !== K)
          ) {
            if (
              ((V = Cf),
              (E = "onMouseLeave"),
              (h = "onMouseEnter"),
              (o = "mouse"),
              (a === "pointerout" || a === "pointerover") &&
                ((V = Yf),
                (E = "onPointerLeave"),
                (h = "onPointerEnter"),
                (o = "pointer")),
              (va = b == null ? g : Ce(b)),
              (v = K == null ? g : Ce(K)),
              (g = new V(E, o + "leave", b, t, z)),
              (g.target = va),
              (g.relatedTarget = v),
              (E = null),
              wt(z) === y &&
                ((V = new V(h, o + "enter", K, t, z)),
                (V.target = v),
                (V.relatedTarget = va),
                (E = V)),
              (va = E),
              b && K)
            )
              l: {
                for (V = b, h = K, o = 0, v = V; v; v = Oe(v)) o++;
                for (v = 0, E = h; E; E = Oe(E)) v++;
                for (; 0 < o - v; ) (V = Oe(V)), o--;
                for (; 0 < v - o; ) (h = Oe(h)), v--;
                for (; o--; ) {
                  if (V === h || (h !== null && V === h.alternate)) break l;
                  (V = Oe(V)), (h = Oe(h));
                }
                V = null;
              }
            else V = null;
            b !== null && Mo(T, g, b, V, !1),
              K !== null && va !== null && Mo(T, va, K, V, !0);
          }
        }
        a: {
          if (
            ((g = y ? Ce(y) : window),
            (b = g.nodeName && g.nodeName.toLowerCase()),
            b === "select" || (b === "input" && g.type === "file"))
          )
            var H = Jf;
          else if (Lf(g))
            if (wf) H = mh;
            else {
              H = dh;
              var F = oh;
            }
          else
            (b = g.nodeName),
              !b ||
              b.toLowerCase() !== "input" ||
              (g.type !== "checkbox" && g.type !== "radio")
                ? y && uc(y.elementType) && (H = Jf)
                : (H = hh);
          if (H && (H = H(a, y))) {
            Kf(T, H, t, z);
            break a;
          }
          F && F(a, g, y),
            a === "focusout" &&
              y &&
              g.type === "number" &&
              y.memoizedProps.value != null &&
              ec(g, "number", g.value);
        }
        switch (((F = y ? Ce(y) : window), a)) {
          case "focusin":
            (Lf(F) || F.contentEditable === "true") &&
              ((ee = F), (bc = y), (Ke = null));
            break;
          case "focusout":
            Ke = bc = ee = null;
            break;
          case "mousedown":
            Sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Sc = !1), ls(T, t, z);
            break;
          case "selectionchange":
            if (yh) break;
          case "keydown":
          case "keyup":
            ls(T, t, z);
        }
        var Y;
        if (mc)
          a: {
            switch (a) {
              case "compositionstart":
                var L = "onCompositionStart";
                break a;
              case "compositionend":
                L = "onCompositionEnd";
                break a;
              case "compositionupdate":
                L = "onCompositionUpdate";
                break a;
            }
            L = void 0;
          }
        else
          te
            ? Zf(a, t) && (L = "onCompositionEnd")
            : a === "keydown" &&
              t.keyCode === 229 &&
              (L = "onCompositionStart");
        L &&
          (Xf &&
            t.locale !== "ko" &&
            (te || L !== "onCompositionStart"
              ? L === "onCompositionEnd" && te && (Y = Hf())
              : ((ut = z),
                (sc = "value" in ut ? ut.value : ut.textContent),
                (te = !0))),
          (F = Rn(y, L)),
          0 < F.length &&
            ((L = new Bf(L, a, null, t, z)),
            T.push({ event: L, listeners: F }),
            Y ? (L.data = Y) : ((Y = Vf(t)), Y !== null && (L.data = Y)))),
          (Y = ch ? ih(a, t) : fh(a, t)) &&
            ((L = Rn(y, "onBeforeInput")),
            0 < L.length &&
              ((F = new Bf("onBeforeInput", "beforeinput", null, t, z)),
              T.push({ event: F, listeners: L }),
              (F.data = Y))),
          Ih(T, a, y, t, z);
      }
      _o(T, l);
    });
  }
  function Su(a, l, t) {
    return { instance: a, listener: l, currentTarget: t };
  }
  function Rn(a, l) {
    for (var t = l + "Capture", e = []; a !== null; ) {
      var u = a,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Be(a, t)),
          u != null && e.unshift(Su(a, u, n)),
          (u = Be(a, l)),
          u != null && e.push(Su(a, u, n))),
        a.tag === 3)
      )
        return e;
      a = a.return;
    }
    return [];
  }
  function Oe(a) {
    if (a === null) return null;
    do a = a.return;
    while (a && a.tag !== 5 && a.tag !== 27);
    return a || null;
  }
  function Mo(a, l, t, e, u) {
    for (var n = l._reactName, c = []; t !== null && t !== e; ) {
      var i = t,
        f = i.alternate,
        y = i.stateNode;
      if (((i = i.tag), f !== null && f === e)) break;
      (i !== 5 && i !== 26 && i !== 27) ||
        y === null ||
        ((f = y),
        u
          ? ((y = Be(t, n)), y != null && c.unshift(Su(t, y, f)))
          : u || ((y = Be(t, n)), y != null && c.push(Su(t, y, f)))),
        (t = t.return);
    }
    c.length !== 0 && a.push({ event: l, listeners: c });
  }
  var tm = /\r\n?/g,
    em = /\u0000|\uFFFD/g;
  function Do(a) {
    return (typeof a == "string" ? a : "" + a)
      .replace(
        tm,
        `
`
      )
      .replace(em, "");
  }
  function jo(a, l) {
    return (l = Do(l)), Do(a) === l;
  }
  function Un() {}
  function ma(a, l, t, e, u, n) {
    switch (t) {
      case "children":
        typeof e == "string"
          ? l === "body" || (l === "textarea" && e === "") || Pt(a, e)
          : (typeof e == "number" || typeof e == "bigint") &&
            l !== "body" &&
            Pt(a, "" + e);
        break;
      case "className":
        Bu(a, "class", e);
        break;
      case "tabIndex":
        Bu(a, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Bu(a, t, e);
        break;
      case "style":
        xf(a, e, n);
        break;
      case "data":
        if (l !== "object") {
          Bu(a, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (l !== "a" || t !== "href")) {
          a.removeAttribute(t);
          break;
        }
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "symbol" ||
          typeof e == "boolean"
        ) {
          a.removeAttribute(t);
          break;
        }
        (e = Gu("" + e)), a.setAttribute(t, e);
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          a.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (t === "formAction"
              ? (l !== "input" && ma(a, l, "name", u.name, u, null),
                ma(a, l, "formEncType", u.formEncType, u, null),
                ma(a, l, "formMethod", u.formMethod, u, null),
                ma(a, l, "formTarget", u.formTarget, u, null))
              : (ma(a, l, "encType", u.encType, u, null),
                ma(a, l, "method", u.method, u, null),
                ma(a, l, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          a.removeAttribute(t);
          break;
        }
        (e = Gu("" + e)), a.setAttribute(t, e);
        break;
      case "onClick":
        e != null && (a.onclick = Un);
        break;
      case "onScroll":
        e != null && P("scroll", a);
        break;
      case "onScrollEnd":
        e != null && P("scrollend", a);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(m(61));
          if (((t = e.__html), t != null)) {
            if (u.children != null) throw Error(m(60));
            a.innerHTML = t;
          }
        }
        break;
      case "multiple":
        a.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        a.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "boolean" ||
          typeof e == "symbol"
        ) {
          a.removeAttribute("xlink:href");
          break;
        }
        (t = Gu("" + e)),
          a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol"
          ? a.setAttribute(t, "" + e)
          : a.removeAttribute(t);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol"
          ? a.setAttribute(t, "")
          : a.removeAttribute(t);
        break;
      case "capture":
      case "download":
        e === !0
          ? a.setAttribute(t, "")
          : e !== !1 &&
            e != null &&
            typeof e != "function" &&
            typeof e != "symbol"
          ? a.setAttribute(t, e)
          : a.removeAttribute(t);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null &&
        typeof e != "function" &&
        typeof e != "symbol" &&
        !isNaN(e) &&
        1 <= e
          ? a.setAttribute(t, e)
          : a.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
          ? a.removeAttribute(t)
          : a.setAttribute(t, e);
        break;
      case "popover":
        P("beforetoggle", a), P("toggle", a), Cu(a, "popover", e);
        break;
      case "xlinkActuate":
        Xl(a, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Xl(a, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Xl(a, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Xl(a, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Xl(a, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Xl(a, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Xl(a, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Xl(a, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Xl(a, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        Cu(a, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
          ((t = Ud.get(t) || t), Cu(a, t, e));
    }
  }
  function Zi(a, l, t, e, u, n) {
    switch (t) {
      case "style":
        xf(a, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(m(61));
          if (((t = e.__html), t != null)) {
            if (u.children != null) throw Error(m(60));
            a.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? Pt(a, e)
          : (typeof e == "number" || typeof e == "bigint") && Pt(a, "" + e);
        break;
      case "onScroll":
        e != null && P("scroll", a);
        break;
      case "onScrollEnd":
        e != null && P("scrollend", a);
        break;
      case "onClick":
        e != null && (a.onclick = Un);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!zf.hasOwnProperty(t))
          a: {
            if (
              t[0] === "o" &&
              t[1] === "n" &&
              ((u = t.endsWith("Capture")),
              (l = t.slice(2, u ? t.length - 7 : void 0)),
              (n = a[tl] || null),
              (n = n != null ? n[t] : null),
              typeof n == "function" && a.removeEventListener(l, n, u),
              typeof e == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (t in a
                  ? (a[t] = null)
                  : a.hasAttribute(t) && a.removeAttribute(t)),
                a.addEventListener(l, e, u);
              break a;
            }
            t in a
              ? (a[t] = e)
              : e === !0
              ? a.setAttribute(t, "")
              : Cu(a, t, e);
          }
    }
  }
  function Ja(a, l, t) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        P("error", a), P("load", a);
        var e = !1,
          u = !1,
          n;
        for (n in t)
          if (t.hasOwnProperty(n)) {
            var c = t[n];
            if (c != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, l));
                default:
                  ma(a, l, n, c, t, null);
              }
          }
        u && ma(a, l, "srcSet", t.srcSet, t, null),
          e && ma(a, l, "src", t.src, t, null);
        return;
      case "input":
        P("invalid", a);
        var i = (n = c = u = null),
          f = null,
          y = null;
        for (e in t)
          if (t.hasOwnProperty(e)) {
            var z = t[e];
            if (z != null)
              switch (e) {
                case "name":
                  u = z;
                  break;
                case "type":
                  c = z;
                  break;
                case "checked":
                  f = z;
                  break;
                case "defaultChecked":
                  y = z;
                  break;
                case "value":
                  n = z;
                  break;
                case "defaultValue":
                  i = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(m(137, l));
                  break;
                default:
                  ma(a, l, e, z, t, null);
              }
          }
        Of(a, n, i, f, y, c, u, !1), Yu(a);
        return;
      case "select":
        P("invalid", a), (e = c = n = null);
        for (u in t)
          if (t.hasOwnProperty(u) && ((i = t[u]), i != null))
            switch (u) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                e = i;
              default:
                ma(a, l, u, i, t, null);
            }
        (l = n),
          (t = c),
          (a.multiple = !!e),
          l != null ? It(a, !!e, l, !1) : t != null && It(a, !!e, t, !0);
        return;
      case "textarea":
        P("invalid", a), (n = u = e = null);
        for (c in t)
          if (t.hasOwnProperty(c) && ((i = t[c]), i != null))
            switch (c) {
              case "value":
                e = i;
                break;
              case "defaultValue":
                u = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(m(91));
                break;
              default:
                ma(a, l, c, i, t, null);
            }
        Df(a, e, u, n), Yu(a);
        return;
      case "option":
        for (f in t)
          if (t.hasOwnProperty(f) && ((e = t[f]), e != null))
            switch (f) {
              case "selected":
                a.selected =
                  e && typeof e != "function" && typeof e != "symbol";
                break;
              default:
                ma(a, l, f, e, t, null);
            }
        return;
      case "dialog":
        P("beforetoggle", a), P("toggle", a), P("cancel", a), P("close", a);
        break;
      case "iframe":
      case "object":
        P("load", a);
        break;
      case "video":
      case "audio":
        for (e = 0; e < bu.length; e++) P(bu[e], a);
        break;
      case "image":
        P("error", a), P("load", a);
        break;
      case "details":
        P("toggle", a);
        break;
      case "embed":
      case "source":
      case "link":
        P("error", a), P("load", a);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in t)
          if (t.hasOwnProperty(y) && ((e = t[y]), e != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, l));
              default:
                ma(a, l, y, e, t, null);
            }
        return;
      default:
        if (uc(l)) {
          for (z in t)
            t.hasOwnProperty(z) &&
              ((e = t[z]), e !== void 0 && Zi(a, l, z, e, t, void 0));
          return;
        }
    }
    for (i in t)
      t.hasOwnProperty(i) && ((e = t[i]), e != null && ma(a, l, i, e, t, null));
  }
  function um(a, l, t, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          c = null,
          i = null,
          f = null,
          y = null,
          z = null;
        for (b in t) {
          var T = t[b];
          if (t.hasOwnProperty(b) && T != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = T;
              default:
                e.hasOwnProperty(b) || ma(a, l, b, null, e, T);
            }
        }
        for (var g in e) {
          var b = e[g];
          if (((T = t[g]), e.hasOwnProperty(g) && (b != null || T != null)))
            switch (g) {
              case "type":
                n = b;
                break;
              case "name":
                u = b;
                break;
              case "checked":
                y = b;
                break;
              case "defaultChecked":
                z = b;
                break;
              case "value":
                c = b;
                break;
              case "defaultValue":
                i = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(m(137, l));
                break;
              default:
                b !== T && ma(a, l, g, b, e, T);
            }
        }
        tc(a, c, i, f, y, z, n, u);
        return;
      case "select":
        b = c = i = g = null;
        for (n in t)
          if (((f = t[n]), t.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                b = f;
              default:
                e.hasOwnProperty(n) || ma(a, l, n, null, e, f);
            }
        for (u in e)
          if (
            ((n = e[u]),
            (f = t[u]),
            e.hasOwnProperty(u) && (n != null || f != null))
          )
            switch (u) {
              case "value":
                g = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== f && ma(a, l, u, n, e, f);
            }
        (l = i),
          (t = c),
          (e = b),
          g != null
            ? It(a, !!t, g, !1)
            : !!e != !!t &&
              (l != null ? It(a, !!t, l, !0) : It(a, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        b = g = null;
        for (i in t)
          if (
            ((u = t[i]),
            t.hasOwnProperty(i) && u != null && !e.hasOwnProperty(i))
          )
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                ma(a, l, i, null, e, u);
            }
        for (c in e)
          if (
            ((u = e[c]),
            (n = t[c]),
            e.hasOwnProperty(c) && (u != null || n != null))
          )
            switch (c) {
              case "value":
                g = u;
                break;
              case "defaultValue":
                b = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(m(91));
                break;
              default:
                u !== n && ma(a, l, c, u, e, n);
            }
        Mf(a, g, b);
        return;
      case "option":
        for (var K in t)
          if (
            ((g = t[K]),
            t.hasOwnProperty(K) && g != null && !e.hasOwnProperty(K))
          )
            switch (K) {
              case "selected":
                a.selected = !1;
                break;
              default:
                ma(a, l, K, null, e, g);
            }
        for (f in e)
          if (
            ((g = e[f]),
            (b = t[f]),
            e.hasOwnProperty(f) && g !== b && (g != null || b != null))
          )
            switch (f) {
              case "selected":
                a.selected =
                  g && typeof g != "function" && typeof g != "symbol";
                break;
              default:
                ma(a, l, f, g, e, b);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var V in t)
          (g = t[V]),
            t.hasOwnProperty(V) &&
              g != null &&
              !e.hasOwnProperty(V) &&
              ma(a, l, V, null, e, g);
        for (y in e)
          if (
            ((g = e[y]),
            (b = t[y]),
            e.hasOwnProperty(y) && g !== b && (g != null || b != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(m(137, l));
                break;
              default:
                ma(a, l, y, g, e, b);
            }
        return;
      default:
        if (uc(l)) {
          for (var va in t)
            (g = t[va]),
              t.hasOwnProperty(va) &&
                g !== void 0 &&
                !e.hasOwnProperty(va) &&
                Zi(a, l, va, void 0, e, g);
          for (z in e)
            (g = e[z]),
              (b = t[z]),
              !e.hasOwnProperty(z) ||
                g === b ||
                (g === void 0 && b === void 0) ||
                Zi(a, l, z, g, e, b);
          return;
        }
    }
    for (var h in t)
      (g = t[h]),
        t.hasOwnProperty(h) &&
          g != null &&
          !e.hasOwnProperty(h) &&
          ma(a, l, h, null, e, g);
    for (T in e)
      (g = e[T]),
        (b = t[T]),
        !e.hasOwnProperty(T) ||
          g === b ||
          (g == null && b == null) ||
          ma(a, l, T, g, e, b);
  }
  var Vi = null,
    Li = null;
  function Hn(a) {
    return a.nodeType === 9 ? a : a.ownerDocument;
  }
  function xo(a) {
    switch (a) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ro(a, l) {
    if (a === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return a === 1 && l === "foreignObject" ? 0 : a;
  }
  function Ki(a, l) {
    return (
      a === "textarea" ||
      a === "noscript" ||
      typeof l.children == "string" ||
      typeof l.children == "number" ||
      typeof l.children == "bigint" ||
      (typeof l.dangerouslySetInnerHTML == "object" &&
        l.dangerouslySetInnerHTML !== null &&
        l.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ji = null;
  function nm() {
    var a = window.event;
    return a && a.type === "popstate"
      ? a === Ji
        ? !1
        : ((Ji = a), !0)
      : ((Ji = null), !1);
  }
  var Uo = typeof setTimeout == "function" ? setTimeout : void 0,
    cm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ho = typeof Promise == "function" ? Promise : void 0,
    im =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ho < "u"
        ? function (a) {
            return Ho.resolve(null).then(a).catch(fm);
          }
        : Uo;
  function fm(a) {
    setTimeout(function () {
      throw a;
    });
  }
  function zt(a) {
    return a === "head";
  }
  function qo(a, l) {
    var t = l,
      e = 0,
      u = 0;
    do {
      var n = t.nextSibling;
      if ((a.removeChild(t), n && n.nodeType === 8))
        if (((t = n.data), t === "/$")) {
          if (0 < e && 8 > e) {
            t = e;
            var c = a.ownerDocument;
            if ((t & 1 && zu(c.documentElement), t & 2 && zu(c.body), t & 4))
              for (t = c.head, zu(t), c = t.firstChild; c; ) {
                var i = c.nextSibling,
                  f = c.nodeName;
                c[qe] ||
                  f === "SCRIPT" ||
                  f === "STYLE" ||
                  (f === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  t.removeChild(c),
                  (c = i);
              }
          }
          if (u === 0) {
            a.removeChild(n), Mu(l);
            return;
          }
          u--;
        } else
          t === "$" || t === "$?" || t === "$!"
            ? u++
            : (e = t.charCodeAt(0) - 48);
      else e = 0;
      t = n;
    } while (t);
    Mu(l);
  }
  function wi(a) {
    var l = a.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var t = l;
      switch (((l = l.nextSibling), t.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          wi(t), In(t);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (t.rel.toLowerCase() === "stylesheet") continue;
      }
      a.removeChild(t);
    }
  }
  function sm(a, l, t, e) {
    for (; a.nodeType === 1; ) {
      var u = t;
      if (a.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!e && (a.nodeName !== "INPUT" || a.type !== "hidden")) break;
      } else if (e) {
        if (!a[qe])
          switch (l) {
            case "meta":
              if (!a.hasAttribute("itemprop")) break;
              return a;
            case "link":
              if (
                ((n = a.getAttribute("rel")),
                n === "stylesheet" && a.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                a.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                a.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                a.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return a;
            case "style":
              if (a.hasAttribute("data-precedence")) break;
              return a;
            case "script":
              if (
                ((n = a.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  a.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  a.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  a.hasAttribute("async") &&
                  !a.hasAttribute("itemprop"))
              )
                break;
              return a;
            default:
              return a;
          }
      } else if (l === "input" && a.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && a.getAttribute("name") === n) return a;
      } else return a;
      if (((a = Ol(a.nextSibling)), a === null)) break;
    }
    return null;
  }
  function rm(a, l, t) {
    if (l === "") return null;
    for (; a.nodeType !== 3; )
      if (
        ((a.nodeType !== 1 || a.nodeName !== "INPUT" || a.type !== "hidden") &&
          !t) ||
        ((a = Ol(a.nextSibling)), a === null)
      )
        return null;
    return a;
  }
  function $i(a) {
    return (
      a.data === "$!" ||
      (a.data === "$?" && a.ownerDocument.readyState === "complete")
    );
  }
  function om(a, l) {
    var t = a.ownerDocument;
    if (a.data !== "$?" || t.readyState === "complete") l();
    else {
      var e = function () {
        l(), t.removeEventListener("DOMContentLoaded", e);
      };
      t.addEventListener("DOMContentLoaded", e), (a._reactRetry = e);
    }
  }
  function Ol(a) {
    for (; a != null; a = a.nextSibling) {
      var l = a.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (
          ((l = a.data),
          l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F")
        )
          break;
        if (l === "/$") return null;
      }
    }
    return a;
  }
  var Wi = null;
  function Co(a) {
    a = a.previousSibling;
    for (var l = 0; a; ) {
      if (a.nodeType === 8) {
        var t = a.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (l === 0) return a;
          l--;
        } else t === "/$" && l++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  function Bo(a, l, t) {
    switch (((l = Hn(t)), a)) {
      case "html":
        if (((a = l.documentElement), !a)) throw Error(m(452));
        return a;
      case "head":
        if (((a = l.head), !a)) throw Error(m(453));
        return a;
      case "body":
        if (((a = l.body), !a)) throw Error(m(454));
        return a;
      default:
        throw Error(m(451));
    }
  }
  function zu(a) {
    for (var l = a.attributes; l.length; ) a.removeAttributeNode(l[0]);
    In(a);
  }
  var Nl = new Map(),
    Yo = new Set();
  function qn(a) {
    return typeof a.getRootNode == "function"
      ? a.getRootNode()
      : a.nodeType === 9
      ? a
      : a.ownerDocument;
  }
  var Pl = j.d;
  j.d = { f: dm, r: hm, D: mm, C: vm, L: ym, m: gm, X: Sm, S: bm, M: zm };
  function dm() {
    var a = Pl.f(),
      l = _n();
    return a || l;
  }
  function hm(a) {
    var l = $t(a);
    l !== null && l.tag === 5 && l.type === "form" ? er(l) : Pl.r(a);
  }
  var Me = typeof document > "u" ? null : document;
  function Xo(a, l, t) {
    var e = Me;
    if (e && typeof l == "string" && l) {
      var u = gl(l);
      (u = 'link[rel="' + a + '"][href="' + u + '"]'),
        typeof t == "string" && (u += '[crossorigin="' + t + '"]'),
        Yo.has(u) ||
          (Yo.add(u),
          (a = { rel: a, crossOrigin: t, href: l }),
          e.querySelector(u) === null &&
            ((l = e.createElement("link")),
            Ja(l, "link", a),
            Ya(l),
            e.head.appendChild(l)));
    }
  }
  function mm(a) {
    Pl.D(a), Xo("dns-prefetch", a, null);
  }
  function vm(a, l) {
    Pl.C(a, l), Xo("preconnect", a, l);
  }
  function ym(a, l, t) {
    Pl.L(a, l, t);
    var e = Me;
    if (e && a && l) {
      var u = 'link[rel="preload"][as="' + gl(l) + '"]';
      l === "image" && t && t.imageSrcSet
        ? ((u += '[imagesrcset="' + gl(t.imageSrcSet) + '"]'),
          typeof t.imageSizes == "string" &&
            (u += '[imagesizes="' + gl(t.imageSizes) + '"]'))
        : (u += '[href="' + gl(a) + '"]');
      var n = u;
      switch (l) {
        case "style":
          n = De(a);
          break;
        case "script":
          n = je(a);
      }
      Nl.has(n) ||
        ((a = C(
          {
            rel: "preload",
            href: l === "image" && t && t.imageSrcSet ? void 0 : a,
            as: l,
          },
          t
        )),
        Nl.set(n, a),
        e.querySelector(u) !== null ||
          (l === "style" && e.querySelector(pu(n))) ||
          (l === "script" && e.querySelector(Au(n))) ||
          ((l = e.createElement("link")),
          Ja(l, "link", a),
          Ya(l),
          e.head.appendChild(l)));
    }
  }
  function gm(a, l) {
    Pl.m(a, l);
    var t = Me;
    if (t && a) {
      var e = l && typeof l.as == "string" ? l.as : "script",
        u =
          'link[rel="modulepreload"][as="' + gl(e) + '"][href="' + gl(a) + '"]',
        n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = je(a);
      }
      if (
        !Nl.has(n) &&
        ((a = C({ rel: "modulepreload", href: a }, l)),
        Nl.set(n, a),
        t.querySelector(u) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(Au(n))) return;
        }
        (e = t.createElement("link")),
          Ja(e, "link", a),
          Ya(e),
          t.head.appendChild(e);
      }
    }
  }
  function bm(a, l, t) {
    Pl.S(a, l, t);
    var e = Me;
    if (e && a) {
      var u = Wt(e).hoistableStyles,
        n = De(a);
      l = l || "default";
      var c = u.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if ((c = e.querySelector(pu(n)))) i.loading = 5;
        else {
          (a = C({ rel: "stylesheet", href: a, "data-precedence": l }, t)),
            (t = Nl.get(n)) && ki(a, t);
          var f = (c = e.createElement("link"));
          Ya(f),
            Ja(f, "link", a),
            (f._p = new Promise(function (y, z) {
              (f.onload = y), (f.onerror = z);
            })),
            f.addEventListener("load", function () {
              i.loading |= 1;
            }),
            f.addEventListener("error", function () {
              i.loading |= 2;
            }),
            (i.loading |= 4),
            Cn(c, l, e);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: i }),
          u.set(n, c);
      }
    }
  }
  function Sm(a, l) {
    Pl.X(a, l);
    var t = Me;
    if (t && a) {
      var e = Wt(t).hoistableScripts,
        u = je(a),
        n = e.get(u);
      n ||
        ((n = t.querySelector(Au(u))),
        n ||
          ((a = C({ src: a, async: !0 }, l)),
          (l = Nl.get(u)) && Fi(a, l),
          (n = t.createElement("script")),
          Ya(n),
          Ja(n, "link", a),
          t.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function zm(a, l) {
    Pl.M(a, l);
    var t = Me;
    if (t && a) {
      var e = Wt(t).hoistableScripts,
        u = je(a),
        n = e.get(u);
      n ||
        ((n = t.querySelector(Au(u))),
        n ||
          ((a = C({ src: a, async: !0, type: "module" }, l)),
          (l = Nl.get(u)) && Fi(a, l),
          (n = t.createElement("script")),
          Ya(n),
          Ja(n, "link", a),
          t.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Go(a, l, t, e) {
    var u = (u = N.current) ? qn(u) : null;
    if (!u) throw Error(m(446));
    switch (a) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string"
          ? ((l = De(t.href)),
            (t = Wt(u).hoistableStyles),
            (e = t.get(l)),
            e ||
              ((e = { type: "style", instance: null, count: 0, state: null }),
              t.set(l, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          t.rel === "stylesheet" &&
          typeof t.href == "string" &&
          typeof t.precedence == "string"
        ) {
          a = De(t.href);
          var n = Wt(u).hoistableStyles,
            c = n.get(a);
          if (
            (c ||
              ((u = u.ownerDocument || u),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(a, c),
              (n = u.querySelector(pu(a))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              Nl.has(a) ||
                ((t = {
                  rel: "preload",
                  as: "style",
                  href: t.href,
                  crossOrigin: t.crossOrigin,
                  integrity: t.integrity,
                  media: t.media,
                  hrefLang: t.hrefLang,
                  referrerPolicy: t.referrerPolicy,
                }),
                Nl.set(a, t),
                n || pm(u, a, t, c.state))),
            l && e === null)
          )
            throw Error(m(528, ""));
          return c;
        }
        if (l && e !== null) throw Error(m(529, ""));
        return null;
      case "script":
        return (
          (l = t.async),
          (t = t.src),
          typeof t == "string" &&
          l &&
          typeof l != "function" &&
          typeof l != "symbol"
            ? ((l = je(t)),
              (t = Wt(u).hoistableScripts),
              (e = t.get(l)),
              e ||
                ((e = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                t.set(l, e)),
              e)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(m(444, a));
    }
  }
  function De(a) {
    return 'href="' + gl(a) + '"';
  }
  function pu(a) {
    return 'link[rel="stylesheet"][' + a + "]";
  }
  function Qo(a) {
    return C({}, a, { "data-precedence": a.precedence, precedence: null });
  }
  function pm(a, l, t, e) {
    a.querySelector('link[rel="preload"][as="style"][' + l + "]")
      ? (e.loading = 1)
      : ((l = a.createElement("link")),
        (e.preload = l),
        l.addEventListener("load", function () {
          return (e.loading |= 1);
        }),
        l.addEventListener("error", function () {
          return (e.loading |= 2);
        }),
        Ja(l, "link", t),
        Ya(l),
        a.head.appendChild(l));
  }
  function je(a) {
    return '[src="' + gl(a) + '"]';
  }
  function Au(a) {
    return "script[async]" + a;
  }
  function Zo(a, l, t) {
    if ((l.count++, l.instance === null))
      switch (l.type) {
        case "style":
          var e = a.querySelector('style[data-href~="' + gl(t.href) + '"]');
          if (e) return (l.instance = e), Ya(e), e;
          var u = C({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (a.ownerDocument || a).createElement("style")),
            Ya(e),
            Ja(e, "style", u),
            Cn(e, t.precedence, a),
            (l.instance = e)
          );
        case "stylesheet":
          u = De(t.href);
          var n = a.querySelector(pu(u));
          if (n) return (l.state.loading |= 4), (l.instance = n), Ya(n), n;
          (e = Qo(t)),
            (u = Nl.get(u)) && ki(e, u),
            (n = (a.ownerDocument || a).createElement("link")),
            Ya(n);
          var c = n;
          return (
            (c._p = new Promise(function (i, f) {
              (c.onload = i), (c.onerror = f);
            })),
            Ja(n, "link", e),
            (l.state.loading |= 4),
            Cn(n, t.precedence, a),
            (l.instance = n)
          );
        case "script":
          return (
            (n = je(t.src)),
            (u = a.querySelector(Au(n)))
              ? ((l.instance = u), Ya(u), u)
              : ((e = t),
                (u = Nl.get(n)) && ((e = C({}, t)), Fi(e, u)),
                (a = a.ownerDocument || a),
                (u = a.createElement("script")),
                Ya(u),
                Ja(u, "link", e),
                a.head.appendChild(u),
                (l.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(m(443, l.type));
      }
    else
      l.type === "stylesheet" &&
        (l.state.loading & 4) === 0 &&
        ((e = l.instance), (l.state.loading |= 4), Cn(e, t.precedence, a));
    return l.instance;
  }
  function Cn(a, l, t) {
    for (
      var e = t.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = e.length ? e[e.length - 1] : null,
        n = u,
        c = 0;
      c < e.length;
      c++
    ) {
      var i = e[c];
      if (i.dataset.precedence === l) n = i;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(a, n.nextSibling)
      : ((l = t.nodeType === 9 ? t.head : t), l.insertBefore(a, l.firstChild));
  }
  function ki(a, l) {
    a.crossOrigin == null && (a.crossOrigin = l.crossOrigin),
      a.referrerPolicy == null && (a.referrerPolicy = l.referrerPolicy),
      a.title == null && (a.title = l.title);
  }
  function Fi(a, l) {
    a.crossOrigin == null && (a.crossOrigin = l.crossOrigin),
      a.referrerPolicy == null && (a.referrerPolicy = l.referrerPolicy),
      a.integrity == null && (a.integrity = l.integrity);
  }
  var Bn = null;
  function Vo(a, l, t) {
    if (Bn === null) {
      var e = new Map(),
        u = (Bn = new Map());
      u.set(t, e);
    } else (u = Bn), (e = u.get(t)), e || ((e = new Map()), u.set(t, e));
    if (e.has(a)) return e;
    for (
      e.set(a, null), t = t.getElementsByTagName(a), u = 0;
      u < t.length;
      u++
    ) {
      var n = t[u];
      if (
        !(
          n[qe] ||
          n[Fa] ||
          (a === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(l) || "";
        c = a + c;
        var i = e.get(c);
        i ? i.push(n) : e.set(c, [n]);
      }
    }
    return e;
  }
  function Lo(a, l, t) {
    (a = a.ownerDocument || a),
      a.head.insertBefore(
        t,
        l === "title" ? a.querySelector("head > title") : null
      );
  }
  function Am(a, l, t) {
    if (t === 1 || l.itemProp != null) return !1;
    switch (a) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof l.precedence != "string" ||
          typeof l.href != "string" ||
          l.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof l.rel != "string" ||
          typeof l.href != "string" ||
          l.href === "" ||
          l.onLoad ||
          l.onError
        )
          break;
        switch (l.rel) {
          case "stylesheet":
            return (
              (a = l.disabled), typeof l.precedence == "string" && a == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          l.async &&
          typeof l.async != "function" &&
          typeof l.async != "symbol" &&
          !l.onLoad &&
          !l.onError &&
          l.src &&
          typeof l.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Ko(a) {
    return !(a.type === "stylesheet" && (a.state.loading & 3) === 0);
  }
  var Eu = null;
  function Em() {}
  function Nm(a, l, t) {
    if (Eu === null) throw Error(m(475));
    var e = Eu;
    if (
      l.type === "stylesheet" &&
      (typeof t.media != "string" || matchMedia(t.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var u = De(t.href),
          n = a.querySelector(pu(u));
        if (n) {
          (a = n._p),
            a !== null &&
              typeof a == "object" &&
              typeof a.then == "function" &&
              (e.count++, (e = Yn.bind(e)), a.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = n),
            Ya(n);
          return;
        }
        (n = a.ownerDocument || a),
          (t = Qo(t)),
          (u = Nl.get(u)) && ki(t, u),
          (n = n.createElement("link")),
          Ya(n);
        var c = n;
        (c._p = new Promise(function (i, f) {
          (c.onload = i), (c.onerror = f);
        })),
          Ja(n, "link", t),
          (l.instance = n);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, a),
        (a = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = Yn.bind(e)),
          a.addEventListener("load", l),
          a.addEventListener("error", l));
    }
  }
  function Tm() {
    if (Eu === null) throw Error(m(475));
    var a = Eu;
    return (
      a.stylesheets && a.count === 0 && Ii(a, a.stylesheets),
      0 < a.count
        ? function (l) {
            var t = setTimeout(function () {
              if ((a.stylesheets && Ii(a, a.stylesheets), a.unsuspend)) {
                var e = a.unsuspend;
                (a.unsuspend = null), e();
              }
            }, 6e4);
            return (
              (a.unsuspend = l),
              function () {
                (a.unsuspend = null), clearTimeout(t);
              }
            );
          }
        : null
    );
  }
  function Yn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Ii(this, this.stylesheets);
      else if (this.unsuspend) {
        var a = this.unsuspend;
        (this.unsuspend = null), a();
      }
    }
  }
  var Xn = null;
  function Ii(a, l) {
    (a.stylesheets = null),
      a.unsuspend !== null &&
        (a.count++,
        (Xn = new Map()),
        l.forEach(_m, a),
        (Xn = null),
        Yn.call(a));
  }
  function _m(a, l) {
    if (!(l.state.loading & 4)) {
      var t = Xn.get(a);
      if (t) var e = t.get(null);
      else {
        (t = new Map()), Xn.set(a, t);
        for (
          var u = a.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (t.set(c.dataset.precedence, c), (e = c));
        }
        e && t.set(null, e);
      }
      (u = l.instance),
        (c = u.getAttribute("data-precedence")),
        (n = t.get(c) || e),
        n === e && t.set(null, u),
        t.set(c, u),
        this.count++,
        (e = Yn.bind(this)),
        u.addEventListener("load", e),
        u.addEventListener("error", e),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((a = a.nodeType === 9 ? a.head : a),
            a.insertBefore(u, a.firstChild)),
        (l.state.loading |= 4);
    }
  }
  var Nu = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0,
  };
  function Om(a, l, t, e, u, n, c, i) {
    (this.tag = 1),
      (this.containerInfo = a),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = $n(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $n(0)),
      (this.hiddenUpdates = $n(null)),
      (this.identifierPrefix = e),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map());
  }
  function Jo(a, l, t, e, u, n, c, i, f, y, z, T) {
    return (
      (a = new Om(a, l, t, c, i, f, y, T)),
      (l = 1),
      n === !0 && (l |= 24),
      (n = rl(3, null, null, l)),
      (a.current = n),
      (n.stateNode = a),
      (l = Uc()),
      l.refCount++,
      (a.pooledCache = l),
      l.refCount++,
      (n.memoizedState = { element: e, isDehydrated: t, cache: l }),
      Bc(n),
      a
    );
  }
  function wo(a) {
    return a ? ((a = ie), a) : ie;
  }
  function $o(a, l, t, e, u, n) {
    (u = wo(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = it(l)),
      (e.payload = { element: t }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (t = ft(a, e, l)),
      t !== null && (vl(t, a, l), au(t, a, l));
  }
  function Wo(a, l) {
    if (((a = a.memoizedState), a !== null && a.dehydrated !== null)) {
      var t = a.retryLane;
      a.retryLane = t !== 0 && t < l ? t : l;
    }
  }
  function Pi(a, l) {
    Wo(a, l), (a = a.alternate) && Wo(a, l);
  }
  function ko(a) {
    if (a.tag === 13) {
      var l = ce(a, 67108864);
      l !== null && vl(l, a, 67108864), Pi(a, 67108864);
    }
  }
  var Gn = !0;
  function Mm(a, l, t, e) {
    var u = S.T;
    S.T = null;
    var n = j.p;
    try {
      (j.p = 2), af(a, l, t, e);
    } finally {
      (j.p = n), (S.T = u);
    }
  }
  function Dm(a, l, t, e) {
    var u = S.T;
    S.T = null;
    var n = j.p;
    try {
      (j.p = 8), af(a, l, t, e);
    } finally {
      (j.p = n), (S.T = u);
    }
  }
  function af(a, l, t, e) {
    if (Gn) {
      var u = lf(e);
      if (u === null) Qi(a, l, e, Qn, t), Io(a, e);
      else if (xm(u, a, l, t, e)) e.stopPropagation();
      else if ((Io(a, e), l & 4 && -1 < jm.indexOf(a))) {
        for (; u !== null; ) {
          var n = $t(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = _t(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var f = 1 << (31 - fl(c));
                      (i.entanglements[1] |= f), (c &= ~f);
                    }
                    ql(n), (oa & 6) === 0 && ((Nn = ll() + 500), gu(0));
                  }
                }
                break;
              case 13:
                (i = ce(n, 2)), i !== null && vl(i, n, 2), _n(), Pi(n, 2);
            }
          if (((n = lf(e)), n === null && Qi(a, l, e, Qn, t), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else Qi(a, l, e, null, t);
    }
  }
  function lf(a) {
    return (a = cc(a)), tf(a);
  }
  var Qn = null;
  function tf(a) {
    if (((Qn = null), (a = wt(a)), a !== null)) {
      var l = U(a);
      if (l === null) a = null;
      else {
        var t = l.tag;
        if (t === 13) {
          if (((a = G(l)), a !== null)) return a;
          a = null;
        } else if (t === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          a = null;
        } else l !== a && (a = null);
      }
    }
    return (Qn = a), null;
  }
  function Fo(a) {
    switch (a) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (xe()) {
          case Lt:
            return 2;
          case Kt:
            return 8;
          case lt:
          case Re:
            return 32;
          case xu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ef = !1,
    pt = null,
    At = null,
    Et = null,
    Tu = new Map(),
    _u = new Map(),
    Nt = [],
    jm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Io(a, l) {
    switch (a) {
      case "focusin":
      case "focusout":
        pt = null;
        break;
      case "dragenter":
      case "dragleave":
        At = null;
        break;
      case "mouseover":
      case "mouseout":
        Et = null;
        break;
      case "pointerover":
      case "pointerout":
        Tu.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _u.delete(l.pointerId);
    }
  }
  function Ou(a, l, t, e, u, n) {
    return a === null || a.nativeEvent !== n
      ? ((a = {
          blockedOn: l,
          domEventName: t,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [u],
        }),
        l !== null && ((l = $t(l)), l !== null && ko(l)),
        a)
      : ((a.eventSystemFlags |= e),
        (l = a.targetContainers),
        u !== null && l.indexOf(u) === -1 && l.push(u),
        a);
  }
  function xm(a, l, t, e, u) {
    switch (l) {
      case "focusin":
        return (pt = Ou(pt, a, l, t, e, u)), !0;
      case "dragenter":
        return (At = Ou(At, a, l, t, e, u)), !0;
      case "mouseover":
        return (Et = Ou(Et, a, l, t, e, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return Tu.set(n, Ou(Tu.get(n) || null, a, l, t, e, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), _u.set(n, Ou(_u.get(n) || null, a, l, t, e, u)), !0
        );
    }
    return !1;
  }
  function Po(a) {
    var l = wt(a.target);
    if (l !== null) {
      var t = U(l);
      if (t !== null) {
        if (((l = t.tag), l === 13)) {
          if (((l = G(t)), l !== null)) {
            (a.blockedOn = l),
              Nd(a.priority, function () {
                if (t.tag === 13) {
                  var e = ml();
                  e = Wn(e);
                  var u = ce(t, e);
                  u !== null && vl(u, t, e), Pi(t, e);
                }
              });
            return;
          }
        } else if (l === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          a.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  }
  function Zn(a) {
    if (a.blockedOn !== null) return !1;
    for (var l = a.targetContainers; 0 < l.length; ) {
      var t = lf(a.nativeEvent);
      if (t === null) {
        t = a.nativeEvent;
        var e = new t.constructor(t.type, t);
        (nc = e), t.target.dispatchEvent(e), (nc = null);
      } else return (l = $t(t)), l !== null && ko(l), (a.blockedOn = t), !1;
      l.shift();
    }
    return !0;
  }
  function ad(a, l, t) {
    Zn(a) && t.delete(l);
  }
  function Rm() {
    (ef = !1),
      pt !== null && Zn(pt) && (pt = null),
      At !== null && Zn(At) && (At = null),
      Et !== null && Zn(Et) && (Et = null),
      Tu.forEach(ad),
      _u.forEach(ad);
  }
  function Vn(a, l) {
    a.blockedOn === l &&
      ((a.blockedOn = null),
      ef ||
        ((ef = !0),
        M.unstable_scheduleCallback(M.unstable_NormalPriority, Rm)));
  }
  var Ln = null;
  function ld(a) {
    Ln !== a &&
      ((Ln = a),
      M.unstable_scheduleCallback(M.unstable_NormalPriority, function () {
        Ln === a && (Ln = null);
        for (var l = 0; l < a.length; l += 3) {
          var t = a[l],
            e = a[l + 1],
            u = a[l + 2];
          if (typeof e != "function") {
            if (tf(e || t) === null) continue;
            break;
          }
          var n = $t(t);
          n !== null &&
            (a.splice(l, 3),
            (l -= 3),
            ti(n, { pending: !0, data: u, method: t.method, action: e }, e, u));
        }
      }));
  }
  function Mu(a) {
    function l(f) {
      return Vn(f, a);
    }
    pt !== null && Vn(pt, a),
      At !== null && Vn(At, a),
      Et !== null && Vn(Et, a),
      Tu.forEach(l),
      _u.forEach(l);
    for (var t = 0; t < Nt.length; t++) {
      var e = Nt[t];
      e.blockedOn === a && (e.blockedOn = null);
    }
    for (; 0 < Nt.length && ((t = Nt[0]), t.blockedOn === null); )
      Po(t), t.blockedOn === null && Nt.shift();
    if (((t = (a.ownerDocument || a).$$reactFormReplay), t != null))
      for (e = 0; e < t.length; e += 3) {
        var u = t[e],
          n = t[e + 1],
          c = u[tl] || null;
        if (typeof n == "function") c || ld(t);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (c = n[tl] || null))) i = c.formAction;
            else if (tf(u) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? (t[e + 1] = i) : (t.splice(e, 3), (e -= 3)),
            ld(t);
        }
      }
  }
  function uf(a) {
    this._internalRoot = a;
  }
  (Kn.prototype.render = uf.prototype.render =
    function (a) {
      var l = this._internalRoot;
      if (l === null) throw Error(m(409));
      var t = l.current,
        e = ml();
      $o(t, e, a, l, null, null);
    }),
    (Kn.prototype.unmount = uf.prototype.unmount =
      function () {
        var a = this._internalRoot;
        if (a !== null) {
          this._internalRoot = null;
          var l = a.containerInfo;
          $o(a.current, 2, null, a, null, null), _n(), (l[Jt] = null);
        }
      });
  function Kn(a) {
    this._internalRoot = a;
  }
  Kn.prototype.unstable_scheduleHydration = function (a) {
    if (a) {
      var l = gf();
      a = { blockedOn: null, target: a, priority: l };
      for (var t = 0; t < Nt.length && l !== 0 && l < Nt[t].priority; t++);
      Nt.splice(t, 0, a), t === 0 && Po(a);
    }
  };
  var td = J.version;
  if (td !== "19.1.1") throw Error(m(527, td, "19.1.1"));
  j.findDOMNode = function (a) {
    var l = a._reactInternals;
    if (l === void 0)
      throw typeof a.render == "function"
        ? Error(m(188))
        : ((a = Object.keys(a).join(",")), Error(m(268, a)));
    return (
      (a = q(l)),
      (a = a !== null ? p(a) : null),
      (a = a === null ? null : a.stateNode),
      a
    );
  };
  var Um = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jn.isDisabled && Jn.supportsFiber)
      try {
        (Yl = Jn.inject(Um)), (Va = Jn);
      } catch {}
  }
  return (
    (ju.createRoot = function (a, l) {
      if (!x(a)) throw Error(m(299));
      var t = !1,
        e = "",
        u = gr,
        n = br,
        c = Sr,
        i = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (t = !0),
          l.identifierPrefix !== void 0 && (e = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (n = l.onCaughtError),
          l.onRecoverableError !== void 0 && (c = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (i = l.unstable_transitionCallbacks)),
        (l = Jo(a, 1, !1, null, null, t, e, u, n, c, i, null)),
        (a[Jt] = l.current),
        Gi(a),
        new uf(l)
      );
    }),
    (ju.hydrateRoot = function (a, l, t) {
      if (!x(a)) throw Error(m(299));
      var e = !1,
        u = "",
        n = gr,
        c = br,
        i = Sr,
        f = null,
        y = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (c = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (f = t.unstable_transitionCallbacks),
          t.formState !== void 0 && (y = t.formState)),
        (l = Jo(a, 1, !0, l, t ?? null, e, u, n, c, i, f, y)),
        (l.context = wo(null)),
        (t = l.current),
        (e = ml()),
        (e = Wn(e)),
        (u = it(e)),
        (u.callback = null),
        ft(t, u, e),
        (t = e),
        (l.current.lanes = t),
        He(l, t),
        ql(l),
        (a[Jt] = l.current),
        Gi(a),
        new Kn(l)
      );
    }),
    (ju.version = "19.1.1"),
    ju
  );
}
var dd;
function Vm() {
  if (dd) return ff.exports;
  dd = 1;
  function M() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M);
      } catch (J) {
        console.error(J);
      }
  }
  return M(), (ff.exports = Zm()), ff.exports;
}
var Lm = Vm();
const wn = {
  Fuerza: "Fuerza",
  Constitución: "Constitución",
  Tamaño: "Tamaño",
  Inteligencia: "Inteligencia",
  Poder: "Poder",
  Destreza: "Destreza",
  Carisma: "Carisma",
  FUERZA: "Fuerza",
  CONSTITUCIÓN: "Constitución",
  TAMAÑO: "Tamaño",
  INTELIGENCIA: "Inteligencia",
  PODER: "Poder",
  DESTREZA: "Destreza",
  CARISMA: "Carisma",
  fuerza: "Fuerza",
  constitución: "Constitución",
  tamaño: "Tamaño",
  inteligencia: "Inteligencia",
  poder: "Poder",
  destreza: "Destreza",
  carisma: "Carisma",
  FUE: "Fuerza",
  CON: "Constitución",
  TAM: "Tamaño",
  INT: "Inteligencia",
  POD: "Poder",
  DES: "Destreza",
  CAR: "Carisma",
};
function gd(M, J) {
  if (!J || J.length === 0) return M;
  const B = { ...M };
  for (const m of J) {
    let x = m.match(
      /^([\wÁÉÍÓÚÜÑáéíóúüñ]+)\s*([+-]?\d+D\d+|[+-]?\d+D|[+-]?\d+)$/i
    );
    if (
      !x &&
      ((x = m.match(
        /^([+-]?\d+D\d+|[+-]?\d+D|[+-]?\d+)\s+([\wÁÉÍÓÚÜÑáéíóúüñ]+)$/i
      )),
      x)
    ) {
      const k = x[1];
      (x[1] = x[2]), (x[2] = k);
    }
    if (!x) continue;
    const U = x[1],
      G = x[2],
      aa = wn[U.toUpperCase()] || wn[U];
    if (!aa) continue;
    const q = B[aa] || "";
    if (!G.includes("+") && !G.includes("-")) {
      B[aa] = G;
      continue;
    }
    const p = q.match(/^(\d+)D(\d+)([+-]\d+)?$/),
      C = G.match(/^[+-]?(\d+)D(\d+)([+-]\d+)?$/);
    if (p && C) {
      const k = parseInt(p[1], 10),
        la = parseInt(p[2], 10),
        ca = p[3] ? parseInt(p[3], 10) : 0,
        Ea = parseInt(C[1], 10),
        wa = parseInt(C[2], 10),
        Oa = C[3] ? parseInt(C[3], 10) : 0;
      if (la === wa) {
        const ia = k + Ea,
          Ma = ca + Oa;
        B[aa] = `${ia}D${la}${Ma !== 0 ? (Ma > 0 ? "+" : "") + Ma : ""}`;
      } else {
        const ia = q.trim(),
          Ma = G.trim().replace(/^\+/, "");
        ia.includes(Ma) || (B[aa] = `${ia}+${Ma}`);
      }
      continue;
    }
    if (p && /^[+-]?\d+D$/.test(G)) {
      const k = parseInt(p[1], 10),
        la = parseInt(p[2], 10),
        ca = p[3] ? parseInt(p[3], 10) : 0,
        Ea = parseInt(G.replace("D", ""), 10);
      B[aa] = `${k + Ea}D${la}${ca !== 0 ? (ca > 0 ? "+" : "") + ca : ""}`;
      continue;
    }
    if (p && /^[+-]?\d+$/.test(G)) {
      const k = parseInt(p[1], 10),
        la = parseInt(p[2], 10);
      let ca = p[3] ? parseInt(p[3], 10) : 0;
      (ca += parseInt(G, 10)),
        (B[aa] = `${k}D${la}${ca !== 0 ? (ca > 0 ? "+" : "") + ca : ""}`);
      continue;
    }
    if (/^[+-]?\d+$/.test(G)) {
      const k = parseInt(q || "0", 10);
      B[aa] = (k + parseInt(G, 10)).toString();
      continue;
    }
    B[aa] = G;
  }
  return B;
}
function hd(M, J) {
  const B = M.caracteristicas,
    m = J?.variacion_caracteristicas;
  let x = gd(B, m);
  if (J?.variacion_caracMINMAX && J.variacion_caracMINMAX.length > 0) {
    const U = bd(J.variacion_caracMINMAX);
    x = Km(x, U);
  }
  return x;
}
function bd(M) {
  const J = [];
  for (const B of M) {
    const m = B.match(/^MIN\s+(\w+)\s+(\d+)D$/i);
    if (m) {
      const U = wn[m[1].toUpperCase()];
      if (U) {
        const G = parseInt(m[2], 10);
        J.push({ caracteristica: U, tipo: "MIN", valor: 0, dados: G });
      }
      continue;
    }
    const x = B.match(/^MAX\s+(\w+)\s+(\d+)$/i);
    if (x) {
      const U = wn[x[1].toUpperCase()];
      if (U) {
        const G = parseInt(x[2], 10);
        J.push({ caracteristica: U, tipo: "MAX", valor: G });
      }
    }
  }
  return J;
}
function Km(M, J) {
  const B = { ...M };
  for (const m of J) {
    const x = B[m.caracteristica];
    if (x && m.tipo === "MIN" && m.dados) {
      const U = x.match(/^(\d+)D(\d+)([+-]\d+)?$/);
      if (U) {
        const G = parseInt(U[1], 10),
          aa = parseInt(U[2], 10),
          q = U[3] ? U[3] : "";
        G < m.dados &&
          ((B[m.caracteristica] = `${m.dados}D${aa}${q}`),
          console.log(
            "[Aplicando límite MIN]",
            m.caracteristica,
            `${G}D${aa}${q} -> ${m.dados}D${aa}${q}`
          ));
      }
    }
  }
  return B;
}
function md(M, J, B) {
  for (const m of B)
    if (m.caracteristica === M && m.tipo === "MAX" && J > m.valor)
      return {
        valido: !1,
        mensaje: `El valor máximo para ${M} es ${m.valor}`,
        valorCorregido: m.valor,
      };
  return { valido: !0 };
}
function Jm(M) {
  return !M?.variacion_caracMINMAX || M.variacion_caracMINMAX.length === 0
    ? []
    : bd(M.variacion_caracMINMAX);
}
const vd = {
  Equilibrio: "Equilibrio",
  Agilidad: "Agilidad",
  Saltar: "Saltar",
  Trepar: "Trepar",
  Nadar: "Nadar",
  Equitación: "Equitación",
  Emboscada: "Emboscada",
  Evitar: "Evitar",
  deslizarse: "deslizarse",
  Esconderse: "Esconderse",
  Disimular: "Disimular",
  "Desli Y Esconderse": "Desli Y Esconderse",
  Percepción: "Percepción",
  Ver: "Ver",
  Escuchar: "Escuchar",
  Olfatear: "Olfatear",
  Degustar: "Degustar",
  Buscar: "Buscar",
  Persuadir: "Persuadir",
  Comunicación: "Comunicación",
  Cantar: "Cantar",
  "Conocimiento de plantas y venenos": "Conocimiento de plantas y venenos",
  "Música y Leyendas": "Música y Leyendas",
  Cartografía: "Cartografía",
  "Primeros Auxilios": "Primeros Auxilios",
  "Evaluar un tesoro": "Evaluar un tesoro",
  "Evaluar T.": "Evaluar T.",
  Discreción: "Discreción",
  Manipulación: "Manipulación",
  "Forzar C.": "Forzar C.",
  "Robar Bolsas": "Robar Bolsas",
  "Hacer V.": "Hacer V.",
  equilibrio: "Equilibrio",
  agilidad: "Agilidad",
  saltar: "Saltar",
  trepar: "Trepar",
  nadar: "Nadar",
  equitación: "Equitación",
  emboscada: "Emboscada",
  evitar: "Evitar",
  deslizarse: "deslizarse",
  esconderse: "Esconderse",
  disimular: "Disimular",
  percepción: "Percepción",
  ver: "Ver",
  escuchar: "Escuchar",
  olfatear: "Olfatear",
  degustar: "Degustar",
  buscar: "Buscar",
  persuadir: "Persuadir",
  comunicación: "Comunicación",
  cantar: "Cantar",
  discreción: "Discreción",
  manipulación: "Manipulación",
  "plantas y venenos": "Conocimiento de plantas y venenos",
  "+50 plantas y venenos": "Conocimiento de plantas y venenos",
  "+10 Percepción": "Percepción",
  "+5 Percepción": "Percepción",
};
function wm(M) {
  const J = vd[M.trim()];
  if (J) return J;
  const B = M.replace(/^[+-]?\d+\s*%?\s*/, "")
    .replace(/\s*[+-]?\d+\s*%?$/, "")
    .trim();
  return vd[B];
}
function yd(M) {
  const J = M.trim(),
    B = [/^([+-]?\d+)\s*%?\s*(.+)$/, /^(.+?)\s*([+-]?\d+)\s*%?$/];
  for (const m of B) {
    const x = J.match(m);
    if (x) {
      let U, G;
      m === B[0]
        ? ((U = parseInt(x[1].replace(/[+]/g, ""))), (G = x[2]))
        : ((G = x[1]), (U = parseInt(x[2].replace(/[+]/g, ""))));
      const aa = wm(G);
      if (aa && !isNaN(U)) return { habilidad: aa, valor: U };
    }
  }
  return null;
}
function $m() {
  const M = () =>
      ta
        ? s.jsx("div", {
            className: "raza-card",
            children: s.jsxs("div", {
              className: "raza-content",
              children: [
                s.jsxs("h3", {
                  className: "raza-title",
                  children: ["Nacionalidad: ", ta.nombre],
                }),
                s.jsx("hr", { className: "raza-divider" }),
                ta.variacion_caracteristicas &&
                  ta.variacion_caracteristicas.length > 0 &&
                  s.jsxs("div", {
                    className: "raza-section",
                    children: [
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Variaciones de Características",
                      }),
                      s.jsx("div", {
                        className: "raza-list",
                        children: ta.variacion_caracteristicas.map((d, A) =>
                          s.jsx(
                            "div",
                            {
                              className: "raza-list-item",
                              children: s.jsx("span", {
                                className: "raza-characteristic-name",
                                children: d,
                              }),
                            },
                            A
                          )
                        ),
                      }),
                    ],
                  }),
                ta.origen_social &&
                  s.jsxs("div", {
                    className: "raza-section",
                    children: [
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Origen social",
                      }),
                      s.jsx("div", {
                        className: "raza-list",
                        children: Array.isArray(ta.origen_social)
                          ? ta.origen_social.map((d, A) =>
                              s.jsx(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: s.jsx("span", {
                                    className: "raza-characteristic-name",
                                    children: d,
                                  }),
                                },
                                A
                              )
                            )
                          : s.jsx("div", {
                              className: "raza-list-item",
                              children: s.jsx("span", {
                                className: "raza-characteristic-name",
                                children: ta.origen_social,
                              }),
                            }),
                      }),
                    ],
                  }),
              ],
            }),
          })
        : null,
    J = () =>
      ia
        ? s.jsx("div", {
            className: "raza-card",
            children: s.jsxs("div", {
              className: "raza-content",
              children: [
                s.jsxs("h3", {
                  className: "raza-title",
                  children: ["Origen: ", ia.nombre],
                }),
                ia.info_Origen &&
                  ia.info_Origen.trim() !== "" &&
                  s.jsx("p", {
                    className: "raza-description",
                    children: ia.info_Origen,
                  }),
                s.jsx("hr", { className: "raza-divider" }),
                ia.variacion_habilidades &&
                  ia.variacion_habilidades.length > 0 &&
                  s.jsxs("div", {
                    className: "raza-section",
                    children: [
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Bonificaciones de Habilidades",
                      }),
                      s.jsx("div", {
                        className: "raza-list",
                        children: ia.variacion_habilidades.map((d, A) =>
                          s.jsxs(
                            "div",
                            {
                              className: "raza-list-item",
                              children: [
                                s.jsx("span", {
                                  className: "raza-bonus-name",
                                  children: d,
                                }),
                                s.jsx("span", {
                                  className: "raza-chip raza-chip-secondary",
                                  children: "Habilidad",
                                }),
                              ],
                            },
                            A
                          )
                        ),
                      }),
                    ],
                  }),
                ia.variacion_bonus_combate &&
                  Object.keys(ia.variacion_bonus_combate).length > 0 &&
                  s.jsxs("div", {
                    className: "raza-section",
                    children: [
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Bonus de Combate",
                      }),
                      s.jsx("div", {
                        className: "raza-list",
                        children: Object.entries(
                          ia.variacion_bonus_combate
                        ).map(([d, A], N) =>
                          s.jsxs(
                            "div",
                            {
                              className: "raza-list-item",
                              children: [
                                s.jsxs("span", {
                                  className: "raza-bonus-name",
                                  children: [d, ":"],
                                }),
                                s.jsx("span", {
                                  className: "raza-chip raza-chip-secondary",
                                  children: A,
                                }),
                              ],
                            },
                            N
                          )
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          })
        : null,
    [B, m] = Ha.useState(!0),
    x = () => {
      B && m(!1);
    },
    [U, G] = Ha.useState(null),
    [aa, q] = Ha.useState([]),
    [p, C] = Ha.useState([]),
    [k, la] = Ha.useState([]),
    [ca, Ea] = Ha.useState([]),
    [wa, Oa] = Ha.useState([]),
    [ia, Ma] = Ha.useState(null),
    [w, il] = Ha.useState(null),
    [O, $a] = Ha.useState(null),
    [ta, Wa] = Ha.useState(null);
  Ha.useEffect(() => {
    if (!ta) {
      Oa(ca);
      return;
    }
    let d = [];
    if (Array.isArray(ta.origen_social))
      d = ta.origen_social.map((N) => {
        const X = N.split(":");
        return X.length > 1
          ? X[1].trim().toUpperCase()
          : N.trim().toUpperCase();
      });
    else if (typeof ta.origen_social == "string") {
      Oa(ca);
      return;
    }
    const A = ca.filter((N) => d.includes(N.nombre.trim().toUpperCase()));
    Oa(A);
  }, [ta, ca]);
  const [Ba, Ml] = Ha.useState(null),
    [Da, ba] = Ha.useState({}),
    [Dl, Cl] = Ha.useState(!0),
    [Na, S] = Ha.useState([]),
    j = (d, A) => {
      const N = parseInt(A, 10);
      if (!isNaN(N) && Na.length > 0) {
        const X = md(d, N, Na);
        if (!X.valido && X.valorCorregido !== void 0) {
          ba((Q) => ({ ...Q, [d]: X.valorCorregido.toString() }));
          return;
        }
      }
      ba((X) => ({ ...X, [d]: A }));
    };
  function Z(d) {
    let A = 0;
    const N = /([+-]?\d+)D(\d+)/gi;
    let X;
    for (; (X = N.exec(d)) !== null; ) {
      const ra = parseInt(X[1], 10),
        ua = parseInt(X[2], 10),
        ka = Math.sign(ra);
      for (let Za = 0; Za < Math.abs(ra); Za++) {
        let xa = Math.floor(Math.random() * ua) + 1;
        Dl && xa < 2 && (xa = 2), (A += ka * xa);
      }
    }
    const Q = /([+-]\d+)(?!D)/g;
    let ja;
    for (; (ja = Q.exec(d)) !== null; ) A += parseInt(ja[1], 10);
    return A;
  }
  const sa = () => {
      if (
        !Ba ||
        (Object.values(Da).some((Bl) => Bl && Bl.trim() !== "") &&
          !window.confirm(
            "¿Seguro que quieres generar tiradas aleatorias? Se borrarán los valores que hayas insertado manualmente."
          ))
      )
        return;
      const d = {};
      Object.entries(Ba).forEach(([Bl, Ru]) => {
        if (typeof Ru == "string") {
          let Yl = Z(Ru);
          if (Na.length > 0) {
            const Va = md(Bl, Yl, Na);
            !Va.valido &&
              Va.valorCorregido !== void 0 &&
              (Yl = Va.valorCorregido);
          }
          d[Bl] = Yl.toString();
        }
      }),
        ba(d);
      const A = parseInt(d.Fuerza || "0", 10);
      let N = "";
      A >= 18 && A <= 23
        ? (N = "+1")
        : A >= 24 && A <= 30
        ? (N = "+1D4")
        : A >= 31 && A <= 38
        ? (N = "+1D6")
        : A >= 39 && A <= 45
        ? (N = "+1D10")
        : A >= 46
        ? (N = "+2D6")
        : (N = "Sin bonus");
      const X = parseInt(d.Destreza || "0", 10),
        Q = A + X;
      let ja = "NO TIENE";
      O &&
        ["ARQUERO", "CASACA AZUL", "ILMIONARIO", "GUARDABOSQUES"].some(
          (Bl) => O.nombre.toUpperCase() === Bl.toUpperCase()
        ) &&
        (Q >= 0 && Q <= 24
          ? (ja = "Nada")
          : Q >= 25 && Q <= 40
          ? (ja = "+1D4")
          : Q >= 41 && Q <= 52
          ? (ja = "+2D4")
          : Q >= 53 && (ja = "2D4+1"));
      const ua = parseInt(d.Inteligencia || "0", 10),
        ka = parseInt(d.Constitución || "0", 10),
        Za = parseInt(d.Poder || "0", 10),
        xa = parseInt(d.Carisma || "0", 10),
        jl = parseInt(d.Tamaño || "0", 10);
      let at = 0;
      ua >= 1 && ua <= 10
        ? (at = ua)
        : ua >= 11 && ua <= 18
        ? (at = ua + 20)
        : ua >= 19 && (at = ua + 30);
      const ll = ua + X + 10,
        xe = Math.floor(ka / 2) + ua + Za + xa - 5,
        Lt = X * 2 + ua + Za - jl - 5,
        Kt = ua * 2 + X + xa - 15,
        lt = ua + Math.floor(A / 2) + Za + X - jl - 5,
        Re = Za + xa + ua + 40 - ka,
        xu = Math.max(1, ka + jl - 12);
      G({
        bonusCC: `Bonus de Fuerza CC: ${N}`,
        bonusAA: `Bonus de Fuerza AA: ${ja}`,
        conocimiento: at,
        percepcion: ll,
        comunicacion: xe,
        agilidad: Lt,
        manipulacion: Kt,
        discrecion: lt,
        saludMental: Re,
        puntosVida: xu,
      });
    },
    r = () =>
      w
        ? s.jsx("div", {
            className: "raza-card",
            children: s.jsxs("div", {
              className: "raza-content",
              children: [
                s.jsx("h3", { className: "raza-title", children: w.nombre }),
                s.jsx("p", {
                  className: "raza-description",
                  children: w.descripcion,
                }),
                s.jsx("hr", { className: "raza-divider" }),
                s.jsxs("div", {
                  className: "raza-info-grid",
                  children: [
                    s.jsxs("div", {
                      className: "raza-section",
                      children: [
                        s.jsx("h4", {
                          className: "raza-section-title",
                          children: "Características",
                        }),
                        s.jsx("div", {
                          className: "raza-list",
                          children: Object.entries(w.caracteristicas).map(
                            ([d, A]) =>
                              s.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    s.jsxs("span", {
                                      className: "raza-characteristic-name",
                                      children: [d, ":"],
                                    }),
                                    s.jsx("span", {
                                      className:
                                        "raza-chip raza-chip-secondary",
                                      children: A,
                                    }),
                                  ],
                                },
                                d
                              )
                          ),
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "raza-section",
                      children: [
                        s.jsx("h4", {
                          className: "raza-section-title",
                          children: "Bonificaciones",
                        }),
                        s.jsx("div", {
                          className: "raza-list",
                          children: Object.entries(w.bonificaciones).map(
                            ([d, A]) =>
                              s.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    s.jsxs("span", {
                                      className: "raza-bonus-name",
                                      children: [d, ":"],
                                    }),
                                    s.jsx("span", {
                                      className: "raza-chip raza-chip-success",
                                      children: A,
                                    }),
                                  ],
                                },
                                d
                              )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsx("hr", { className: "raza-divider" }),
                s.jsxs("div", {
                  className: "raza-additional-info",
                  children: [
                    s.jsxs("div", {
                      className: "raza-info-item",
                      children: [
                        s.jsx("span", {
                          className: "raza-info-label",
                          children: "Rango",
                        }),
                        s.jsx("span", {
                          className: "raza-info-value",
                          children: w.rango,
                        }),
                      ],
                    }),
                    w.armadura &&
                      s.jsxs("div", {
                        className: "raza-info-item",
                        children: [
                          s.jsx("span", {
                            className: "raza-info-label",
                            children: "Armadura",
                          }),
                          s.jsx("span", {
                            className: "raza-info-value",
                            children: w.armadura,
                          }),
                        ],
                      }),
                    w.ataque &&
                      s.jsxs("div", {
                        className: "raza-info-item",
                        children: [
                          s.jsx("span", {
                            className: "raza-info-label",
                            children: "Ataque",
                          }),
                          s.jsx("span", {
                            className: "raza-info-value",
                            children: w.ataque,
                          }),
                        ],
                      }),
                  ],
                }),
                w.notas &&
                  s.jsxs(s.Fragment, {
                    children: [
                      s.jsx("hr", { className: "raza-divider" }),
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Notas",
                      }),
                      s.jsx("div", {
                        className: "raza-notes",
                        children: s.jsx("p", {
                          className: "raza-notes-text",
                          children: w.notas,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          })
        : null,
    _ = () =>
      O
        ? s.jsx("div", {
            className: "raza-card",
            children: s.jsxs("div", {
              className: "raza-content",
              children: [
                s.jsx("h3", { className: "raza-title", children: O.nombre }),
                s.jsx("p", {
                  className: "raza-description",
                  children: O.descripcion,
                }),
                s.jsx("hr", { className: "raza-divider" }),
                s.jsxs("div", {
                  className: "raza-info-grid",
                  children: [
                    O.variacion_caracteristicas &&
                      Array.isArray(O.variacion_caracteristicas) &&
                      O.variacion_caracteristicas.length > 0 &&
                      s.jsxs("div", {
                        className: "raza-section",
                        children: [
                          s.jsx("h4", {
                            className: "raza-section-title",
                            children: "Variaciones de Características",
                          }),
                          s.jsx("div", {
                            className: "raza-list",
                            children: O.variacion_caracteristicas.map((d, A) =>
                              s.jsx(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: s.jsx("span", {
                                    className: "raza-characteristic-name",
                                    children: d,
                                  }),
                                },
                                A
                              )
                            ),
                          }),
                        ],
                      }),
                    O.variacion_caracMINMAX &&
                      O.variacion_caracMINMAX.length > 0 &&
                      s.jsxs("div", {
                        className: "raza-section",
                        children: [
                          s.jsx("h4", {
                            className: "raza-section-title",
                            children: "Limitaciones de Características",
                          }),
                          s.jsx("div", {
                            className: "raza-list",
                            children: O.variacion_caracMINMAX.map((d, A) =>
                              s.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    s.jsx("span", {
                                      className: "raza-characteristic-name",
                                      children: d,
                                    }),
                                    s.jsx("span", {
                                      className: "raza-chip raza-chip-warning",
                                      children: "Límite",
                                    }),
                                  ],
                                },
                                A
                              )
                            ),
                          }),
                        ],
                      }),
                    O.variacion_habilidades &&
                      O.variacion_habilidades.length > 0 &&
                      s.jsxs("div", {
                        className: "raza-section",
                        children: [
                          s.jsx("h4", {
                            className: "raza-section-title",
                            children: "Bonificaciones de Habilidades",
                          }),
                          s.jsx("div", {
                            className: "raza-list",
                            children: O.variacion_habilidades.map((d, A) =>
                              s.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    s.jsx("span", {
                                      className: "raza-bonus-name",
                                      children: d,
                                    }),
                                    s.jsx("span", {
                                      className:
                                        "raza-chip raza-chip-secondary",
                                      children: "Habilidad",
                                    }),
                                  ],
                                },
                                A
                              )
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
                O.Bonus_combate &&
                  s.jsxs(s.Fragment, {
                    children: [
                      s.jsx("hr", { className: "raza-divider" }),
                      s.jsxs("div", {
                        className: "raza-section",
                        children: [
                          s.jsx("h4", {
                            className: "raza-section-title",
                            children: "Bonus de Combate",
                          }),
                          s.jsxs("div", {
                            className: "raza-list",
                            children: [
                              s.jsxs("div", {
                                className: "raza-list-item",
                                children: [
                                  s.jsx("span", {
                                    className: "raza-bonus-name",
                                    children: "Ataque:",
                                  }),
                                  s.jsx("span", {
                                    className: "raza-chip raza-chip-secondary",
                                    children: O.Bonus_combate.ataque,
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "raza-list-item",
                                children: [
                                  s.jsx("span", {
                                    className: "raza-bonus-name",
                                    children: "Defensa:",
                                  }),
                                  s.jsx("span", {
                                    className: "raza-chip raza-chip-secondary",
                                    children: O.Bonus_combate.defensa,
                                  }),
                                ],
                              }),
                              O.Bonus_combate.armas_arrojadizas &&
                                s.jsxs("div", {
                                  className: "raza-list-item",
                                  children: [
                                    s.jsx("span", {
                                      className: "raza-bonus-name",
                                      children: "Armas Arrojadizas:",
                                    }),
                                    s.jsx("span", {
                                      className:
                                        "raza-chip raza-chip-secondary",
                                      children:
                                        O.Bonus_combate.armas_arrojadizas,
                                    }),
                                  ],
                                }),
                              O.Bonus_combate.montado_a_caballo &&
                                s.jsxs("div", {
                                  className: "raza-list-item",
                                  children: [
                                    s.jsx("span", {
                                      className: "raza-bonus-name",
                                      children: "Montado a Caballo:",
                                    }),
                                    s.jsx("span", {
                                      className:
                                        "raza-chip raza-chip-secondary",
                                      children:
                                        O.Bonus_combate.montado_a_caballo,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                s.jsx("hr", { className: "raza-divider" }),
                s.jsxs("div", {
                  className: "raza-additional-info",
                  children: [
                    s.jsxs("div", {
                      className: "raza-info-item",
                      children: [
                        s.jsx("span", {
                          className: "raza-info-label",
                          children: "Rango",
                        }),
                        s.jsx("span", {
                          className: "raza-info-value",
                          children: O.rango,
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "raza-info-item",
                      children: [
                        s.jsx("span", {
                          className: "raza-info-label",
                          children: "Cualidades",
                        }),
                        s.jsx("span", {
                          className: "raza-info-value",
                          children: O.cualidades,
                        }),
                      ],
                    }),
                    O.equipo_especial &&
                      s.jsxs("div", {
                        className: "raza-info-item",
                        children: [
                          s.jsx("span", {
                            className: "raza-info-label",
                            children: "Equipo Especial",
                          }),
                          s.jsx("span", {
                            className: "raza-info-value",
                            children: O.equipo_especial,
                          }),
                        ],
                      }),
                  ],
                }),
                O.especial &&
                  s.jsxs(s.Fragment, {
                    children: [
                      s.jsx("hr", { className: "raza-divider" }),
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Habilidades Especiales",
                      }),
                      s.jsx("div", {
                        className: "raza-notes",
                        children: s.jsx("p", {
                          className: "raza-notes-text",
                          children: O.especial,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          })
        : null,
    R = () => {
      if (!w && !O && !ia) return null;
      const d = {};
      return (
        w &&
          Object.entries(w.bonificaciones).forEach(([A, N]) => {
            if (typeof N == "number") d[A] = (d[A] || 0) + N;
            else if (typeof N == "string") {
              const X = parseInt(N.replace(/[+-]/g, "")) || 0,
                Q = N.startsWith("-") ? -1 : 1;
              d[A] = (d[A] || 0) + X * Q;
            }
          }),
        O &&
          O.variacion_habilidades &&
          O.variacion_habilidades.forEach((A) => {
            const N = A.trim();
            if (
              N.includes("Regeneración de SM") ||
              N.includes("al día") ||
              N.includes("1D6") ||
              N === ""
            )
              return;
            const X = yd(N);
            if (X) {
              d[X.habilidad] = (d[X.habilidad] || 0) + X.valor;
              return;
            }
            if (N.includes("100%") || N.includes("+100")) {
              const Q = N.replace(/(\+100|100\s*%).*$/, "").trim();
              Q && (d[Q] = 100);
            }
          }),
        ia &&
          ia.variacion_habilidades &&
          ia.variacion_habilidades.forEach((A) => {
            const N = A.trim();
            if (
              N.includes("Regeneración de SM") ||
              N.includes("al día") ||
              N.includes("1D6") ||
              N === ""
            )
              return;
            const X = yd(N);
            if (X) {
              d[X.habilidad] = (d[X.habilidad] || 0) + X.valor;
              return;
            }
            if (N.includes("100%") || N.includes("+100")) {
              const Q = N.replace(/(\+100|100\s*%).*$/, "").trim();
              Q && (d[Q] = 100);
            }
          }),
        d
      );
    },
    D = () => {
      const d = R();
      return !d || Object.keys(d).length === 0
        ? null
        : s.jsxs("div", {
            className: "ficha-resultado",
            children: [
              s.jsx("h3", {
                className: "ficha-resultado-title",
                children: "Total de Bonificaciones (Raza + Clase):",
              }),
              s.jsx("ul", {
                className: "ficha-resultado-list",
                children: Object.entries(d).map(([A, N]) =>
                  s.jsxs(
                    "li",
                    {
                      className: "ficha-resultado-item",
                      children: [
                        s.jsxs("b", {
                          className: "ficha-resultado-carac",
                          children: [A, ":"],
                        }),
                        " ",
                        s.jsx("span", {
                          className:
                            "raza-chip raza-chip-success bonificacion-chip",
                          children: N > 0 ? `+${N}` : N,
                        }),
                      ],
                    },
                    A
                  )
                ),
              }),
            ],
          });
    };
  return (
    Ha.useEffect(() => {
      fetch("/StromRol/Razas.json")
        .then((d) => d.json())
        .then((d) => q(d.razas)),
        fetch("/StromRol/Clases.json")
          .then((d) => d.json())
          .then((d) => C(d.clases)),
        fetch("/StromRol/Nacionalidad.json")
          .then((d) => d.json())
          .then((d) => la(d.nacionalidades)),
        fetch("/StromRol/Origen.json")
          .then((d) => d.json())
          .then((d) => Ea(d.origenes));
    }, []),
    Ha.useEffect(() => {
      if ((ba({}), w))
        if (["SELOROK", "DEMONIOS"].includes(w.nombre.toUpperCase())) Ml(hd(w));
        else {
          const d = O
            ? {
                ...O,
                variacion_caracteristicas: Array.isArray(
                  O.variacion_caracteristicas
                )
                  ? O.variacion_caracteristicas
                  : typeof O.variacion_caracteristicas == "string"
                  ? [O.variacion_caracteristicas]
                  : void 0,
              }
            : void 0;
          let A = hd(w, d);
          ta &&
            ta.variacion_caracteristicas &&
            (A = gd(A, ta.variacion_caracteristicas)),
            Ml(A);
        }
      else Ml(null);
    }, [w, O, ta]),
    Ha.useEffect(() => {
      if (O) {
        const d = Jm(O);
        S(d);
      } else S([]);
    }, [O]),
    s.jsxs("div", {
      className: "ficha-container",
      children: [
        B &&
          s.jsx("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "2rem 0",
            },
            children: s.jsx("img", {
              src: "/StromRol/logo.webp",
              alt: "Logo",
              style: { maxWidth: "320px", width: "100%", height: "auto" },
            }),
          }),
        s.jsx("h2", {
          className: "ficha-title",
          children: "Generador de Fichas",
        }),
        s.jsxs("div", {
          className: "ficha-select-group",
          children: [
            s.jsx("label", {
              htmlFor: "raza-select",
              className: "ficha-label",
              children: "Raza:",
            }),
            s.jsxs("select", {
              id: "raza-select",
              className: "ficha-select",
              value: w?.nombre || "",
              onChange: (d) => {
                const A = aa.find((N) => N.nombre === d.target.value);
                il(A || null),
                  x(),
                  G(null),
                  A &&
                    ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                      A.nombre.toUpperCase()
                    ) &&
                    $a(null);
              },
              children: [
                s.jsx("option", { value: "", children: "Elige una raza" }),
                aa.map((d) =>
                  s.jsx(
                    "option",
                    { value: d.nombre, children: d.nombre.toUpperCase() },
                    d.nombre
                  )
                ),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className: "ficha-select-group",
          children: [
            s.jsx("label", {
              htmlFor: "clase-select",
              className: "ficha-label",
              children: "Clase:",
            }),
            s.jsxs("select", {
              id: "clase-select",
              className: "ficha-select",
              value: O?.nombre || "",
              onChange: (d) => {
                const A = p.find((N) => N.nombre === d.target.value);
                $a(A || null), ba({}), G(null), Wa(null), Ma(null), x();
              },
              disabled: !!(
                w &&
                ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                  w.nombre.toUpperCase()
                )
              ),
              children: [
                s.jsx("option", { value: "", children: "Elige una clase" }),
                p.map((d) =>
                  s.jsx(
                    "option",
                    { value: d.nombre, children: d.nombre.toUpperCase() },
                    d.nombre
                  )
                ),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className: "ficha-select-group",
          children: [
            s.jsx("label", {
              htmlFor: "nacionalidad-select",
              className: "ficha-label",
              children: "Nacionalidad:",
            }),
            s.jsxs("select", {
              id: "nacionalidad-select",
              className: "ficha-select",
              value: ta?.nombre || "",
              onChange: (d) => {
                const A = k.find((N) => N.nombre === d.target.value);
                Wa(A || null), ba({}), G(null), Ma(null), x();
              },
              disabled: !w,
              children: [
                s.jsx("option", {
                  value: "",
                  children: "Elige una nacionalidad",
                }),
                k.map((d) =>
                  s.jsx(
                    "option",
                    { value: d.nombre, children: d.nombre },
                    d.nombre
                  )
                ),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className: "ficha-select-group",
          children: [
            s.jsx("label", {
              htmlFor: "origen-select",
              className: "ficha-label",
              children: "Origen:",
            }),
            s.jsxs("select", {
              id: "origen-select",
              className: "ficha-select",
              value: ia?.nombre || "",
              onChange: (d) => {
                const A = wa.find((N) => N.nombre === d.target.value);
                Ma(A || null), ba({}), G(null), x();
              },
              disabled: !ta,
              children: [
                s.jsx("option", { value: "", children: "Elige un origen" }),
                wa.map((d) =>
                  s.jsx(
                    "option",
                    { value: d.nombre, children: d.nombre },
                    d.nombre
                  )
                ),
              ],
            }),
          ],
        }),
        Ba &&
          s.jsxs("div", {
            className: "ficha-resultado",
            children: [
              s.jsx("h3", {
                className: "ficha-resultado-title",
                children: "Dados que debe tirar el jugador:",
              }),
              s.jsx("ul", {
                className: "ficha-resultado-list",
                children: Object.entries(Ba).map(([d, A]) =>
                  s.jsxs(
                    "li",
                    {
                      className: "ficha-resultado-item",
                      children: [
                        s.jsxs("b", {
                          className: "ficha-resultado-carac",
                          children: [d, ":"],
                        }),
                        " ",
                        s.jsx("span", {
                          className: "ficha-resultado-dado",
                          children: A,
                        }),
                        s.jsx("input", {
                          type: "number",
                          min: "1",
                          className: "ficha-resultado-input",
                          placeholder: "Tirada",
                          value: Da[d] || "",
                          onChange: (N) => {
                            j(d, N.target.value);
                          },
                        }),
                      ],
                    },
                    d
                  )
                ),
              }),
              s.jsx("div", {
                className: "ficha-dadosmin2-group",
                children: s.jsxs("label", {
                  className: "ficha-dadosmin-label",
                  children: [
                    s.jsx("input", {
                      type: "checkbox",
                      checked: Dl,
                      onChange: (d) => Cl(d.target.checked),
                      className: "ficha-dadosmin-checkbox",
                    }),
                    "Dados min. 2",
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "ficha-botones-group",
                children: [
                  s.jsx("button", {
                    className: "ficha-calcular-btn",
                    onClick: sa,
                    disabled: Object.keys(Ba || {}).length === 0,
                    children: "Generar tiradas aleatorias",
                  }),
                  s.jsx("button", {
                    className: "ficha-habilidades-btn",
                    disabled:
                      Object.keys(Ba || {}).length === 0 ||
                      Object.entries(Ba || {}).some(([d]) => !Da[d]),
                    onClick: () => {
                      const d = parseInt(Da.Fuerza || "0", 10);
                      let A = "";
                      d >= 18 && d <= 23
                        ? (A = "+1")
                        : d >= 24 && d <= 30
                        ? (A = "+1D4")
                        : d >= 31 && d <= 38
                        ? (A = "+1D6")
                        : d >= 39 && d <= 45
                        ? (A = "+1D10")
                        : d >= 46
                        ? (A = "+2D6")
                        : (A = "Sin bonus");
                      const N = parseInt(Da.Destreza || "0", 10),
                        X = d + N;
                      let Q = "NO TIENE";
                      O &&
                        [
                          "ARQUERO",
                          "CASACA AZUL",
                          "ILMIONARIO",
                          "GUARDABOSQUES",
                        ].some(
                          (Re) => O.nombre.toUpperCase() === Re.toUpperCase()
                        ) &&
                        (X >= 0 && X <= 24
                          ? (Q = "Nada")
                          : X >= 25 && X <= 40
                          ? (Q = "+1D4")
                          : X >= 41 && X <= 52
                          ? (Q = "+2D4")
                          : X >= 53 && (Q = "2D4+1"));
                      const ra = parseInt(Da.Inteligencia || "0", 10),
                        ua = parseInt(Da.Constitución || "0", 10),
                        ka = parseInt(Da.Poder || "0", 10),
                        Za = parseInt(Da.Carisma || "0", 10),
                        xa = parseInt(Da.Tamaño || "0", 10);
                      let jl = 0;
                      ra >= 1 && ra <= 10
                        ? (jl = ra)
                        : ra >= 11 && ra <= 18
                        ? (jl = ra + 20)
                        : ra >= 19 && (jl = ra + 30);
                      const at = ra + N + 10,
                        ll = Math.floor(ua / 2) + ra + ka + Za - 5,
                        xe = N * 2 + ra + ka - xa - 5,
                        Lt = ra * 2 + N + Za - 15,
                        Kt = ra + Math.floor(d / 2) + ka + N - xa - 5,
                        lt = ka + Za + ra + 40 - ua;
                      G({
                        bonusCC: `Bonus de Fuerza CC: ${A}`,
                        bonusAA: `Bonus de Fuerza AA: ${Q}`,
                        conocimiento: jl,
                        percepcion: at,
                        comunicacion: ll,
                        agilidad: xe,
                        manipulacion: Lt,
                        discrecion: Kt,
                        saludMental: lt,
                        puntosVida: Math.max(1, ua + xa - 12),
                      });
                    },
                    children: "Calcular habilidades",
                  }),
                ],
              }),
              O?.variacion_carac_info &&
                ((typeof O.variacion_carac_info == "string" &&
                  O.variacion_carac_info.trim() !== "") ||
                  (Array.isArray(O.variacion_carac_info) &&
                    O.variacion_carac_info.length > 0) ||
                  (typeof O.variacion_carac_info == "number" &&
                    !isNaN(O.variacion_carac_info))) &&
                s.jsxs("div", {
                  className: "ficha-resultado-info",
                  children: [
                    s.jsx("b", { children: "Info adicional de dados:" }),
                    " ",
                    Array.isArray(O.variacion_carac_info)
                      ? O.variacion_carac_info.join(", ")
                      : O.variacion_carac_info,
                  ],
                }),
            ],
          }),
        U &&
          s.jsxs(s.Fragment, {
            children: [
              s.jsx("div", {
                className: "raza-card",
                children: s.jsxs("div", {
                  className: "raza-content",
                  children: [
                    s.jsx("h4", {
                      className: "raza-section-title",
                      children: "Resultados de habilidades",
                    }),
                    s.jsxs("div", {
                      className: "raza-list",
                      children: [
                        s.jsxs("div", {
                          className: "raza-list-item",
                          children: [
                            s.jsxs("span", {
                              className: "raza-bonus-name",
                              children: [U.bonusCC.split(":")[0], ":"],
                            }),
                            s.jsx("span", {
                              className: "raza-chip raza-chip-secondary",
                              children: U.bonusCC.split(":")[1],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "raza-list-item",
                          children: [
                            s.jsxs("span", {
                              className: "raza-bonus-name",
                              children: [U.bonusAA.split(":")[0], ":"],
                            }),
                            s.jsx("span", {
                              className: "raza-chip raza-chip-secondary",
                              children: U.bonusAA.split(":")[1],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "raza-list-item",
                          children: [
                            s.jsx("span", {
                              className: "raza-bonus-name",
                              children: "Puntos de vida:",
                            }),
                            s.jsx("span", {
                              className: "raza-chip raza-chip-pv",
                              children: U.puntosVida,
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "raza-list-item",
                          children: [
                            s.jsx("span", {
                              className: "raza-bonus-name",
                              children: "Conocimiento:",
                            }),
                            s.jsx("span", {
                              className: "raza-chip raza-chip-success",
                              children: U.conocimiento,
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "raza-list-item",
                          children: [
                            s.jsx("span", {
                              className: "raza-bonus-name",
                              children: "Percepción:",
                            }),
                            s.jsx("span", {
                              className: "raza-chip raza-chip-success",
                              children: U.percepcion,
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "raza-list-item",
                          children: [
                            s.jsx("span", {
                              className: "raza-bonus-name",
                              children: "Comunicación:",
                            }),
                            s.jsx("span", {
                              className: "raza-chip raza-chip-success",
                              children: U.comunicacion,
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "raza-list-item",
                          children: [
                            s.jsx("span", {
                              className: "raza-bonus-name",
                              children: "Agilidad:",
                            }),
                            s.jsx("span", {
                              className: "raza-chip raza-chip-success",
                              children: U.agilidad,
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "raza-list-item",
                          children: [
                            s.jsx("span", {
                              className: "raza-bonus-name",
                              children: "Manipulación:",
                            }),
                            s.jsx("span", {
                              className: "raza-chip raza-chip-success",
                              children: U.manipulacion,
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "raza-list-item",
                          children: [
                            s.jsx("span", {
                              className: "raza-bonus-name",
                              children: "Discreción:",
                            }),
                            s.jsx("span", {
                              className: "raza-chip raza-chip-success",
                              children: U.discrecion,
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "raza-list-item",
                          children: [
                            s.jsx("span", {
                              className: "raza-bonus-name",
                              children: "Salud Mental:",
                            }),
                            s.jsx("span", {
                              className: "raza-chip raza-chip-mental",
                              children: U.saludMental,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              ia &&
                s.jsx("div", {
                  className: "raza-card",
                  children: s.jsxs("div", {
                    className: "raza-content",
                    children: [
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Bonus de combate",
                      }),
                      s.jsx("div", {
                        className: "raza-list",
                        children: (() => {
                          const d = O?.Bonus_combate || {},
                            A = ia.variacion_bonus_combate || {};
                          function N(ra, ua) {
                            const ka =
                                typeof ra == "string"
                                  ? parseInt(ra)
                                  : typeof ra == "number"
                                  ? ra
                                  : 0,
                              Za =
                                typeof ua == "string"
                                  ? parseInt(ua)
                                  : typeof ua == "number"
                                  ? ua
                                  : 0,
                              xa = ka + Za;
                            return (typeof ra == "string" &&
                              ra.includes("%")) ||
                              (typeof ua == "string" && ua.includes("%"))
                              ? `${xa > 0 ? "+" : ""}${xa}%`
                              : `${xa > 0 ? "+" : ""}${xa}`;
                          }
                          const X = N(
                              d && "ataque" in d ? d.ataque : void 0,
                              A && "ataque" in A ? A.ataque : void 0
                            ),
                            Q = N(
                              d && "defensa" in d ? d.defensa : void 0,
                              A && "defensa" in A ? A.defensa : void 0
                            ),
                            ja = N(
                              d && "armas_arrojadizas" in d
                                ? d.armas_arrojadizas
                                : void 0,
                              A && "armas_arrojadizas" in A
                                ? A.armas_arrojadizas
                                : void 0
                            );
                          return s.jsxs(s.Fragment, {
                            children: [
                              s.jsxs("div", {
                                className: "raza-list-item",
                                children: [
                                  s.jsx("span", {
                                    className: "raza-bonus-name",
                                    children: "Ataque:",
                                  }),
                                  s.jsx("span", {
                                    className: "raza-chip raza-chip-secondary",
                                    children: X,
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "raza-list-item",
                                children: [
                                  s.jsx("span", {
                                    className: "raza-bonus-name",
                                    children: "Defensa:",
                                  }),
                                  s.jsx("span", {
                                    className: "raza-chip raza-chip-secondary",
                                    children: Q,
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "raza-list-item",
                                children: [
                                  s.jsx("span", {
                                    className: "raza-bonus-name",
                                    children: "Armas Arrojadizas:",
                                  }),
                                  s.jsx("span", {
                                    className: "raza-chip raza-chip-secondary",
                                    children: ja,
                                  }),
                                ],
                              }),
                            ],
                          });
                        })(),
                      }),
                    ],
                  }),
                }),
            ],
          }),
        D(),
        w &&
        ["SELOROK", "DEMONIO", "SELOROKS", "DEMONIOS"].includes(
          w.nombre.toUpperCase()
        )
          ? null
          : _(),
        r(),
        M(),
        J(),
      ],
    })
  );
}
Lm.createRoot(document.getElementById("root")).render(
  s.jsx(Ha.StrictMode, { children: s.jsx($m, {}) })
);
