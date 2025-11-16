(function () {
  const J = document.createElement("link").relList;
  if (J && J.supports && J.supports("modulepreload")) return;
  for (const j of document.querySelectorAll('link[rel="modulepreload"]')) m(j);
  new MutationObserver((j) => {
    for (const U of j)
      if (U.type === "childList")
        for (const G of U.addedNodes)
          G.tagName === "LINK" && G.rel === "modulepreload" && m(G);
  }).observe(document, { childList: !0, subtree: !0 });
  function B(j) {
    const U = {};
    return (
      j.integrity && (U.integrity = j.integrity),
      j.referrerPolicy && (U.referrerPolicy = j.referrerPolicy),
      j.crossOrigin === "use-credentials"
        ? (U.credentials = "include")
        : j.crossOrigin === "anonymous"
        ? (U.credentials = "omit")
        : (U.credentials = "same-origin"),
      U
    );
  }
  function m(j) {
    if (j.ep) return;
    j.ep = !0;
    const U = B(j);
    fetch(j.href, U);
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
function Cm() {
  if (ed) return Du;
  ed = 1;
  var M = Symbol.for("react.transitional.element"),
    J = Symbol.for("react.fragment");
  function B(m, j, U) {
    var G = null;
    if (
      (U !== void 0 && (G = "" + U),
      j.key !== void 0 && (G = "" + j.key),
      "key" in j)
    ) {
      U = {};
      for (var ll in j) ll !== "key" && (U[ll] = j[ll]);
    } else U = j;
    return (
      (j = U.ref),
      { $$typeof: M, type: m, key: G, ref: j !== void 0 ? j : null, props: U }
    );
  }
  return (Du.Fragment = J), (Du.jsx = B), (Du.jsxs = B), Du;
}
var ud;
function qm() {
  return ud || ((ud = 1), (nf.exports = Cm())), nf.exports;
}
var s = qm(),
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
    j = Symbol.for("react.profiler"),
    U = Symbol.for("react.consumer"),
    G = Symbol.for("react.context"),
    ll = Symbol.for("react.forward_ref"),
    C = Symbol.for("react.suspense"),
    A = Symbol.for("react.memo"),
    q = Symbol.for("react.lazy"),
    k = Symbol.iterator;
  function al(r) {
    return r === null || typeof r != "object"
      ? null
      : ((r = (k && r[k]) || r["@@iterator"]),
        typeof r == "function" ? r : null);
  }
  var nl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    El = Object.assign,
    Kl = {};
  function Ol(r, _, R) {
    (this.props = r),
      (this.context = _),
      (this.refs = Kl),
      (this.updater = R || nl);
  }
  (Ol.prototype.isReactComponent = {}),
    (Ol.prototype.setState = function (r, _) {
      if (typeof r != "object" && typeof r != "function" && r != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, r, _, "setState");
    }),
    (Ol.prototype.forceUpdate = function (r) {
      this.updater.enqueueForceUpdate(this, r, "forceUpdate");
    });
  function il() {}
  il.prototype = Ol.prototype;
  function Rl(r, _, R) {
    (this.props = r),
      (this.context = _),
      (this.refs = Kl),
      (this.updater = R || nl);
  }
  var w = (Rl.prototype = new il());
  (w.constructor = Rl), El(w, Ol.prototype), (w.isPureReactComponent = !0);
  var ia = Array.isArray,
    O = { H: null, A: null, T: null, S: null, V: null },
    Jl = Object.prototype.hasOwnProperty;
  function tl(r, _, R, D, h, T) {
    return (
      (R = T.ref),
      { $$typeof: M, type: r, key: _, ref: R !== void 0 ? R : null, props: T }
    );
  }
  function wl(r, _) {
    return tl(r.type, _, void 0, void 0, void 0, r.props);
  }
  function Cl(r) {
    return typeof r == "object" && r !== null && r.$$typeof === M;
  }
  function Ma(r) {
    var _ = { "=": "=0", ":": "=2" };
    return (
      "$" +
      r.replace(/[=:]/g, function (R) {
        return _[R];
      })
    );
  }
  var Ml = /\/+/g;
  function bl(r, _) {
    return typeof r == "object" && r !== null && r.key != null
      ? Ma("" + r.key)
      : _.toString(36);
  }
  function Da() {}
  function qa(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (
          (typeof r.status == "string"
            ? r.then(Da, Da)
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
  function Nl(r, _, R, D, h) {
    var T = typeof r;
    (T === "undefined" || T === "boolean") && (r = null);
    var N = !1;
    if (r === null) N = !0;
    else
      switch (T) {
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
            case q:
              return (N = r._init), Nl(N(r._payload), _, R, D, h);
          }
      }
    if (N)
      return (
        (h = h(r)),
        (N = D === "" ? "." + bl(r, 0) : D),
        ia(h)
          ? ((R = ""),
            N != null && (R = N.replace(Ml, "$&/") + "/"),
            Nl(h, _, R, "", function (ql) {
              return ql;
            }))
          : h != null &&
            (Cl(h) &&
              (h = wl(
                h,
                R +
                  (h.key == null || (r && r.key === h.key)
                    ? ""
                    : ("" + h.key).replace(Ml, "$&/") + "/") +
                  N
              )),
            _.push(h)),
        1
      );
    N = 0;
    var X = D === "" ? "." : D + ":";
    if (ia(r))
      for (var V = 0; V < r.length; V++)
        (D = r[V]), (T = X + bl(D, V)), (N += Nl(D, _, R, T, h));
    else if (((V = al(r)), typeof V == "function"))
      for (r = V.call(r), V = 0; !(D = r.next()).done; )
        (D = D.value), (T = X + bl(D, V++)), (N += Nl(D, _, R, T, h));
    else if (T === "object") {
      if (typeof r.then == "function") return Nl(qa(r), _, R, D, h);
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
      h = 0;
    return (
      Nl(r, D, "", "", function (T) {
        return _.call(R, T, h++);
      }),
      D
    );
  }
  function x(r) {
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
  var Q =
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
  function fl() {}
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
        if (!Cl(r))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return r;
      },
    }),
    ($.Component = Ol),
    ($.Fragment = B),
    ($.Profiler = j),
    ($.PureComponent = Rl),
    ($.StrictMode = m),
    ($.Suspense = C),
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
      var D = El({}, r.props),
        h = r.key,
        T = void 0;
      if (_ != null)
        for (N in (_.ref !== void 0 && (T = void 0),
        _.key !== void 0 && (h = "" + _.key),
        _))
          !Jl.call(_, N) ||
            N === "key" ||
            N === "__self" ||
            N === "__source" ||
            (N === "ref" && _.ref === void 0) ||
            (D[N] = _[N]);
      var N = arguments.length - 2;
      if (N === 1) D.children = R;
      else if (1 < N) {
        for (var X = Array(N), V = 0; V < N; V++) X[V] = arguments[V + 2];
        D.children = X;
      }
      return tl(r.type, h, void 0, void 0, T, D);
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
        h = {},
        T = null;
      if (_ != null)
        for (D in (_.key !== void 0 && (T = "" + _.key), _))
          Jl.call(_, D) &&
            D !== "key" &&
            D !== "__self" &&
            D !== "__source" &&
            (h[D] = _[D]);
      var N = arguments.length - 2;
      if (N === 1) h.children = R;
      else if (1 < N) {
        for (var X = Array(N), V = 0; V < N; V++) X[V] = arguments[V + 2];
        h.children = X;
      }
      if (r && r.defaultProps)
        for (D in ((N = r.defaultProps), N)) h[D] === void 0 && (h[D] = N[D]);
      return tl(r, T, void 0, void 0, null, h);
    }),
    ($.createRef = function () {
      return { current: null };
    }),
    ($.forwardRef = function (r) {
      return { $$typeof: ll, render: r };
    }),
    ($.isValidElement = Cl),
    ($.lazy = function (r) {
      return { $$typeof: q, _payload: { _status: -1, _result: r }, _init: x };
    }),
    ($.memo = function (r, _) {
      return { $$typeof: A, type: r, compare: _ === void 0 ? null : _ };
    }),
    ($.startTransition = function (r) {
      var _ = O.T,
        R = {};
      O.T = R;
      try {
        var D = r(),
          h = O.S;
        h !== null && h(R, D),
          typeof D == "object" &&
            D !== null &&
            typeof D.then == "function" &&
            D.then(fl, Q);
      } catch (T) {
        Q(T);
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
var jl = df(),
  ff = { exports: {} },
  xu = {},
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
        function J(S, x) {
          var Q = S.length;
          S.push(x);
          l: for (; 0 < Q; ) {
            var fl = (Q - 1) >>> 1,
              r = S[fl];
            if (0 < j(r, x)) (S[fl] = x), (S[Q] = r), (Q = fl);
            else break l;
          }
        }
        function B(S) {
          return S.length === 0 ? null : S[0];
        }
        function m(S) {
          if (S.length === 0) return null;
          var x = S[0],
            Q = S.pop();
          if (Q !== x) {
            S[0] = Q;
            l: for (var fl = 0, r = S.length, _ = r >>> 1; fl < _; ) {
              var R = 2 * (fl + 1) - 1,
                D = S[R],
                h = R + 1,
                T = S[h];
              if (0 > j(D, Q))
                h < r && 0 > j(T, D)
                  ? ((S[fl] = T), (S[h] = Q), (fl = h))
                  : ((S[fl] = D), (S[R] = Q), (fl = R));
              else if (h < r && 0 > j(T, Q)) (S[fl] = T), (S[h] = Q), (fl = h);
              else break l;
            }
          }
          return x;
        }
        function j(S, x) {
          var Q = S.sortIndex - x.sortIndex;
          return Q !== 0 ? Q : S.id - x.id;
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
            ll = G.now();
          M.unstable_now = function () {
            return G.now() - ll;
          };
        }
        var C = [],
          A = [],
          q = 1,
          k = null,
          al = 3,
          nl = !1,
          El = !1,
          Kl = !1,
          Ol = !1,
          il = typeof setTimeout == "function" ? setTimeout : null,
          Rl = typeof clearTimeout == "function" ? clearTimeout : null,
          w = typeof setImmediate < "u" ? setImmediate : null;
        function ia(S) {
          for (var x = B(A); x !== null; ) {
            if (x.callback === null) m(A);
            else if (x.startTime <= S)
              m(A), (x.sortIndex = x.expirationTime), J(C, x);
            else break;
            x = B(A);
          }
        }
        function O(S) {
          if (((Kl = !1), ia(S), !El))
            if (B(C) !== null) (El = !0), Jl || ((Jl = !0), bl());
            else {
              var x = B(A);
              x !== null && Nl(O, x.startTime - S);
            }
        }
        var Jl = !1,
          tl = -1,
          wl = 5,
          Cl = -1;
        function Ma() {
          return Ol ? !0 : !(M.unstable_now() - Cl < wl);
        }
        function Ml() {
          if (((Ol = !1), Jl)) {
            var S = M.unstable_now();
            Cl = S;
            var x = !0;
            try {
              l: {
                (El = !1), Kl && ((Kl = !1), Rl(tl), (tl = -1)), (nl = !0);
                var Q = al;
                try {
                  a: {
                    for (
                      ia(S), k = B(C);
                      k !== null && !(k.expirationTime > S && Ma());

                    ) {
                      var fl = k.callback;
                      if (typeof fl == "function") {
                        (k.callback = null), (al = k.priorityLevel);
                        var r = fl(k.expirationTime <= S);
                        if (((S = M.unstable_now()), typeof r == "function")) {
                          (k.callback = r), ia(S), (x = !0);
                          break a;
                        }
                        k === B(C) && m(C), ia(S);
                      } else m(C);
                      k = B(C);
                    }
                    if (k !== null) x = !0;
                    else {
                      var _ = B(A);
                      _ !== null && Nl(O, _.startTime - S), (x = !1);
                    }
                  }
                  break l;
                } finally {
                  (k = null), (al = Q), (nl = !1);
                }
                x = void 0;
              }
            } finally {
              x ? bl() : (Jl = !1);
            }
          }
        }
        var bl;
        if (typeof w == "function")
          bl = function () {
            w(Ml);
          };
        else if (typeof MessageChannel < "u") {
          var Da = new MessageChannel(),
            qa = Da.port2;
          (Da.port1.onmessage = Ml),
            (bl = function () {
              qa.postMessage(null);
            });
        } else
          bl = function () {
            il(Ml, 0);
          };
        function Nl(S, x) {
          tl = il(function () {
            S(M.unstable_now());
          }, x);
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
              : (wl = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (M.unstable_getCurrentPriorityLevel = function () {
            return al;
          }),
          (M.unstable_next = function (S) {
            switch (al) {
              case 1:
              case 2:
              case 3:
                var x = 3;
                break;
              default:
                x = al;
            }
            var Q = al;
            al = x;
            try {
              return S();
            } finally {
              al = Q;
            }
          }),
          (M.unstable_requestPaint = function () {
            Ol = !0;
          }),
          (M.unstable_runWithPriority = function (S, x) {
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
            var Q = al;
            al = S;
            try {
              return x();
            } finally {
              al = Q;
            }
          }),
          (M.unstable_scheduleCallback = function (S, x, Q) {
            var fl = M.unstable_now();
            switch (
              (typeof Q == "object" && Q !== null
                ? ((Q = Q.delay),
                  (Q = typeof Q == "number" && 0 < Q ? fl + Q : fl))
                : (Q = fl),
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
              (r = Q + r),
              (S = {
                id: q++,
                callback: x,
                priorityLevel: S,
                startTime: Q,
                expirationTime: r,
                sortIndex: -1,
              }),
              Q > fl
                ? ((S.sortIndex = Q),
                  J(A, S),
                  B(C) === null &&
                    S === B(A) &&
                    (Kl ? (Rl(tl), (tl = -1)) : (Kl = !0), Nl(O, Q - fl)))
                : ((S.sortIndex = r),
                  J(C, S),
                  El || nl || ((El = !0), Jl || ((Jl = !0), bl()))),
              S
            );
          }),
          (M.unstable_shouldYield = Ma),
          (M.unstable_wrapCallback = function (S) {
            var x = al;
            return function () {
              var Q = al;
              al = x;
              try {
                return S.apply(this, arguments);
              } finally {
                al = Q;
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
  kl = {};
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
  if (sd) return kl;
  sd = 1;
  var M = df();
  function J(C) {
    var A = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var q = 2; q < arguments.length; q++)
        A += "&args[]=" + encodeURIComponent(arguments[q]);
    }
    return (
      "Minified React error #" +
      C +
      "; visit " +
      A +
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
    j = Symbol.for("react.portal");
  function U(C, A, q) {
    var k =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: j,
      key: k == null ? null : "" + k,
      children: C,
      containerInfo: A,
      implementation: q,
    };
  }
  var G = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ll(C, A) {
    if (C === "font") return "";
    if (typeof A == "string") return A === "use-credentials" ? A : "";
  }
  return (
    (kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m),
    (kl.createPortal = function (C, A) {
      var q =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!A || (A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11))
        throw Error(J(299));
      return U(C, A, null, q);
    }),
    (kl.flushSync = function (C) {
      var A = G.T,
        q = m.p;
      try {
        if (((G.T = null), (m.p = 2), C)) return C();
      } finally {
        (G.T = A), (m.p = q), m.d.f();
      }
    }),
    (kl.preconnect = function (C, A) {
      typeof C == "string" &&
        (A
          ? ((A = A.crossOrigin),
            (A =
              typeof A == "string"
                ? A === "use-credentials"
                  ? A
                  : ""
                : void 0))
          : (A = null),
        m.d.C(C, A));
    }),
    (kl.prefetchDNS = function (C) {
      typeof C == "string" && m.d.D(C);
    }),
    (kl.preinit = function (C, A) {
      if (typeof C == "string" && A && typeof A.as == "string") {
        var q = A.as,
          k = ll(q, A.crossOrigin),
          al = typeof A.integrity == "string" ? A.integrity : void 0,
          nl = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
        q === "style"
          ? m.d.S(C, typeof A.precedence == "string" ? A.precedence : void 0, {
              crossOrigin: k,
              integrity: al,
              fetchPriority: nl,
            })
          : q === "script" &&
            m.d.X(C, {
              crossOrigin: k,
              integrity: al,
              fetchPriority: nl,
              nonce: typeof A.nonce == "string" ? A.nonce : void 0,
            });
      }
    }),
    (kl.preinitModule = function (C, A) {
      if (typeof C == "string")
        if (typeof A == "object" && A !== null) {
          if (A.as == null || A.as === "script") {
            var q = ll(A.as, A.crossOrigin);
            m.d.M(C, {
              crossOrigin: q,
              integrity: typeof A.integrity == "string" ? A.integrity : void 0,
              nonce: typeof A.nonce == "string" ? A.nonce : void 0,
            });
          }
        } else A == null && m.d.M(C);
    }),
    (kl.preload = function (C, A) {
      if (
        typeof C == "string" &&
        typeof A == "object" &&
        A !== null &&
        typeof A.as == "string"
      ) {
        var q = A.as,
          k = ll(q, A.crossOrigin);
        m.d.L(C, q, {
          crossOrigin: k,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0,
          nonce: typeof A.nonce == "string" ? A.nonce : void 0,
          type: typeof A.type == "string" ? A.type : void 0,
          fetchPriority:
            typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
          referrerPolicy:
            typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
          imageSrcSet:
            typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
          imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
          media: typeof A.media == "string" ? A.media : void 0,
        });
      }
    }),
    (kl.preloadModule = function (C, A) {
      if (typeof C == "string")
        if (A) {
          var q = ll(A.as, A.crossOrigin);
          m.d.m(C, {
            as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
            crossOrigin: q,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
          });
        } else m.d.m(C);
    }),
    (kl.requestFormReset = function (C) {
      m.d.r(C);
    }),
    (kl.unstable_batchedUpdates = function (C, A) {
      return C(A);
    }),
    (kl.useFormState = function (C, A, q) {
      return G.H.useFormState(C, A, q);
    }),
    (kl.useFormStatus = function () {
      return G.H.useHostTransitionStatus();
    }),
    (kl.version = "19.1.1"),
    kl
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
  if (od) return xu;
  od = 1;
  var M = Xm(),
    J = df(),
    B = Qm();
  function m(l) {
    var a = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        a += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      a +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function j(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function U(l) {
    var a = l,
      t = l;
    if (l.alternate) for (; a.return; ) a = a.return;
    else {
      l = a;
      do (a = l), (a.flags & 4098) !== 0 && (t = a.return), (l = a.return);
      while (l);
    }
    return a.tag === 3 ? t : null;
  }
  function G(l) {
    if (l.tag === 13) {
      var a = l.memoizedState;
      if (
        (a === null && ((l = l.alternate), l !== null && (a = l.memoizedState)),
        a !== null)
      )
        return a.dehydrated;
    }
    return null;
  }
  function ll(l) {
    if (U(l) !== l) throw Error(m(188));
  }
  function C(l) {
    var a = l.alternate;
    if (!a) {
      if (((a = U(l)), a === null)) throw Error(m(188));
      return a !== l ? null : l;
    }
    for (var t = l, e = a; ; ) {
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
          if (n === t) return ll(u), l;
          if (n === e) return ll(u), a;
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
    return t.stateNode.current === t ? l : a;
  }
  function A(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((a = A(l)), a !== null)) return a;
      l = l.sibling;
    }
    return null;
  }
  var q = Object.assign,
    k = Symbol.for("react.element"),
    al = Symbol.for("react.transitional.element"),
    nl = Symbol.for("react.portal"),
    El = Symbol.for("react.fragment"),
    Kl = Symbol.for("react.strict_mode"),
    Ol = Symbol.for("react.profiler"),
    il = Symbol.for("react.provider"),
    Rl = Symbol.for("react.consumer"),
    w = Symbol.for("react.context"),
    ia = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    Jl = Symbol.for("react.suspense_list"),
    tl = Symbol.for("react.memo"),
    wl = Symbol.for("react.lazy"),
    Cl = Symbol.for("react.activity"),
    Ma = Symbol.for("react.memo_cache_sentinel"),
    Ml = Symbol.iterator;
  function bl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Ml && l[Ml]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Da = Symbol.for("react.client.reference");
  function qa(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Da ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case El:
        return "Fragment";
      case Ol:
        return "Profiler";
      case Kl:
        return "StrictMode";
      case O:
        return "Suspense";
      case Jl:
        return "SuspenseList";
      case Cl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case nl:
          return "Portal";
        case w:
          return (l.displayName || "Context") + ".Provider";
        case Rl:
          return (l._context.displayName || "Context") + ".Consumer";
        case ia:
          var a = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = a.displayName || a.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case tl:
          return (
            (a = l.displayName || null), a !== null ? a : qa(l.type) || "Memo"
          );
        case wl:
          (a = l._payload), (l = l._init);
          try {
            return qa(l(a));
          } catch {}
      }
    return null;
  }
  var Nl = Array.isArray,
    S = J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    x = B.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = { pending: !1, data: null, method: null, action: null },
    fl = [],
    r = -1;
  function _(l) {
    return { current: l };
  }
  function R(l) {
    0 > r || ((l.current = fl[r]), (fl[r] = null), r--);
  }
  function D(l, a) {
    r++, (fl[r] = l.current), (l.current = a);
  }
  var h = _(null),
    T = _(null),
    N = _(null),
    X = _(null);
  function V(l, a) {
    switch ((D(N, a), D(T, l), D(h, null), a.nodeType)) {
      case 9:
      case 11:
        l = (l = a.documentElement) && (l = l.namespaceURI) ? jo(l) : 0;
        break;
      default:
        if (((l = a.tagName), (a = a.namespaceURI)))
          (a = jo(a)), (l = Ro(a, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    R(h), D(h, l);
  }
  function ql() {
    R(h), R(T), R(N);
  }
  function zl(l) {
    l.memoizedState !== null && D(X, l);
    var a = h.current,
      t = Ro(a, l.type);
    a !== t && (D(T, l), D(h, t));
  }
  function yl(l) {
    T.current === l && (R(h), R(T)),
      X.current === l && (R(X), (Nu._currentValue = Q));
  }
  var la = Object.prototype.hasOwnProperty,
    Fl = M.unstable_scheduleCallback,
    Il = M.unstable_cancelCallback,
    xa = M.unstable_shouldYield,
    lt = M.unstable_requestPaint,
    aa = M.unstable_now,
    je = M.unstable_getCurrentPriorityLevel,
    Lt = M.unstable_ImmediatePriority,
    Kt = M.unstable_UserBlockingPriority,
    at = M.unstable_NormalPriority,
    Re = M.unstable_LowPriority,
    ju = M.unstable_IdlePriority,
    Ba = M.log,
    Ru = M.unstable_setDisableYieldValue,
    Ya = null,
    Ql = null;
  function tt(l) {
    if (
      (typeof Ba == "function" && Ru(l),
      Ql && typeof Ql.setStrictMode == "function")
    )
      try {
        Ql.setStrictMode(Ya, l);
      } catch {}
  }
  var fa = Math.clz32 ? Math.clz32 : Ad,
    Sd = Math.log,
    zd = Math.LN2;
  function Ad(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((Sd(l) / zd) | 0)) | 0;
  }
  var Uu = 256,
    Hu = 4194304;
  function _t(l) {
    var a = l & 42;
    if (a !== 0) return a;
    switch (l & -l) {
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
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function Cu(l, a, t) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var i = e & 134217727;
    return (
      i !== 0
        ? ((e = i & ~n),
          e !== 0
            ? (u = _t(e))
            : ((c &= i),
              c !== 0
                ? (u = _t(c))
                : t || ((t = i & ~l), t !== 0 && (u = _t(t)))))
        : ((i = e & ~n),
          i !== 0
            ? (u = _t(i))
            : c !== 0
            ? (u = _t(c))
            : t || ((t = e & ~l), t !== 0 && (u = _t(t)))),
      u === 0
        ? 0
        : a !== 0 &&
          a !== u &&
          (a & n) === 0 &&
          ((n = u & -u),
          (t = a & -a),
          n >= t || (n === 32 && (t & 4194048) !== 0))
        ? a
        : u
    );
  }
  function Ue(l, a) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & a) === 0;
  }
  function pd(l, a) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
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
        return a + 5e3;
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
    var l = Uu;
    return (Uu <<= 1), (Uu & 4194048) === 0 && (Uu = 256), l;
  }
  function mf() {
    var l = Hu;
    return (Hu <<= 1), (Hu & 62914560) === 0 && (Hu = 4194304), l;
  }
  function $n(l) {
    for (var a = [], t = 0; 31 > t; t++) a.push(l);
    return a;
  }
  function He(l, a) {
    (l.pendingLanes |= a),
      a !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function Ed(l, a, t, e, u, n) {
    var c = l.pendingLanes;
    (l.pendingLanes = t),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= t),
      (l.entangledLanes &= t),
      (l.errorRecoveryDisabledLanes &= t),
      (l.shellSuspendCounter = 0);
    var i = l.entanglements,
      f = l.expirationTimes,
      y = l.hiddenUpdates;
    for (t = c & ~t; 0 < t; ) {
      var z = 31 - fa(t),
        E = 1 << z;
      (i[z] = 0), (f[z] = -1);
      var g = y[z];
      if (g !== null)
        for (y[z] = null, z = 0; z < g.length; z++) {
          var b = g[z];
          b !== null && (b.lane &= -536870913);
        }
      t &= ~E;
    }
    e !== 0 && vf(l, e, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~a));
  }
  function vf(l, a, t) {
    (l.pendingLanes |= a), (l.suspendedLanes &= ~a);
    var e = 31 - fa(a);
    (l.entangledLanes |= a),
      (l.entanglements[e] = l.entanglements[e] | 1073741824 | (t & 4194090));
  }
  function yf(l, a) {
    var t = (l.entangledLanes |= a);
    for (l = l.entanglements; t; ) {
      var e = 31 - fa(t),
        u = 1 << e;
      (u & a) | (l[e] & a) && (l[e] |= a), (t &= ~u);
    }
  }
  function Wn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function kn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function gf() {
    var l = x.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Fo(l.type));
  }
  function Nd(l, a) {
    var t = x.p;
    try {
      return (x.p = l), a();
    } finally {
      x.p = t;
    }
  }
  var et = Math.random().toString(36).slice(2),
    $l = "__reactFiber$" + et,
    ta = "__reactProps$" + et,
    Jt = "__reactContainer$" + et,
    Fn = "__reactEvents$" + et,
    Td = "__reactListeners$" + et,
    _d = "__reactHandles$" + et,
    bf = "__reactResources$" + et,
    Ce = "__reactMarker$" + et;
  function In(l) {
    delete l[$l], delete l[ta], delete l[Fn], delete l[Td], delete l[_d];
  }
  function wt(l) {
    var a = l[$l];
    if (a) return a;
    for (var t = l.parentNode; t; ) {
      if ((a = t[Jt] || t[$l])) {
        if (
          ((t = a.alternate),
          a.child !== null || (t !== null && t.child !== null))
        )
          for (l = qo(l); l !== null; ) {
            if ((t = l[$l])) return t;
            l = qo(l);
          }
        return a;
      }
      (l = t), (t = l.parentNode);
    }
    return null;
  }
  function $t(l) {
    if ((l = l[$l] || l[Jt])) {
      var a = l.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3)
        return l;
    }
    return null;
  }
  function qe(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l.stateNode;
    throw Error(m(33));
  }
  function Wt(l) {
    var a = l[bf];
    return (
      a ||
        (a = l[bf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      a
    );
  }
  function Bl(l) {
    l[Ce] = !0;
  }
  var Sf = new Set(),
    zf = {};
  function Ot(l, a) {
    kt(l, a), kt(l + "Capture", a);
  }
  function kt(l, a) {
    for (zf[l] = a, l = 0; l < a.length; l++) Sf.add(a[l]);
  }
  var Od = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Af = {},
    pf = {};
  function Md(l) {
    return la.call(pf, l)
      ? !0
      : la.call(Af, l)
      ? !1
      : Od.test(l)
      ? (pf[l] = !0)
      : ((Af[l] = !0), !1);
  }
  function qu(l, a, t) {
    if (Md(a))
      if (t === null) l.removeAttribute(a);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(a);
            return;
          case "boolean":
            var e = a.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(a);
              return;
            }
        }
        l.setAttribute(a, "" + t);
      }
  }
  function Bu(l, a, t) {
    if (t === null) l.removeAttribute(a);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttribute(a, "" + t);
    }
  }
  function Xa(l, a, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttributeNS(a, t, "" + e);
    }
  }
  var Pn, Ef;
  function Ft(l) {
    if (Pn === void 0)
      try {
        throw Error();
      } catch (t) {
        var a = t.stack.trim().match(/\n( *(at )?)/);
        (Pn = (a && a[1]) || ""),
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
      l +
      Ef
    );
  }
  var lc = !1;
  function ac(l, a) {
    if (!l || lc) return "";
    lc = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (a) {
              var E = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(E.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(E, []);
                } catch (b) {
                  var g = b;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (b) {
                  g = b;
                }
                l.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                g = b;
              }
              (E = l()) &&
                typeof E.catch == "function" &&
                E.catch(function () {});
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
                    l.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", l.displayName)),
                    z
                  );
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      (lc = !1), (Error.prepareStackTrace = t);
    }
    return (t = l ? l.displayName || l.name : "") ? Ft(t) : "";
  }
  function Dd(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ft(l.type);
      case 16:
        return Ft("Lazy");
      case 13:
        return Ft("Suspense");
      case 19:
        return Ft("SuspenseList");
      case 0:
      case 15:
        return ac(l.type, !1);
      case 11:
        return ac(l.type.render, !1);
      case 1:
        return ac(l.type, !0);
      case 31:
        return Ft("Activity");
      default:
        return "";
    }
  }
  function Nf(l) {
    try {
      var a = "";
      do (a += Dd(l)), (l = l.return);
      while (l);
      return a;
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
  function ya(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Tf(l) {
    var a = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (a === "checkbox" || a === "radio")
    );
  }
  function xd(l) {
    var a = Tf(l) ? "checked" : "value",
      t = Object.getOwnPropertyDescriptor(l.constructor.prototype, a),
      e = "" + l[a];
    if (
      !l.hasOwnProperty(a) &&
      typeof t < "u" &&
      typeof t.get == "function" &&
      typeof t.set == "function"
    ) {
      var u = t.get,
        n = t.set;
      return (
        Object.defineProperty(l, a, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (c) {
            (e = "" + c), n.call(this, c);
          },
        }),
        Object.defineProperty(l, a, { enumerable: t.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (c) {
            e = "" + c;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[a];
          },
        }
      );
    }
  }
  function Yu(l) {
    l._valueTracker || (l._valueTracker = xd(l));
  }
  function _f(l) {
    if (!l) return !1;
    var a = l._valueTracker;
    if (!a) return !0;
    var t = a.getValue(),
      e = "";
    return (
      l && (e = Tf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = e),
      l !== t ? (a.setValue(l), !0) : !1
    );
  }
  function Xu(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var jd = /[\n"\\]/g;
  function ga(l) {
    return l.replace(jd, function (a) {
      return "\\" + a.charCodeAt(0).toString(16) + " ";
    });
  }
  function tc(l, a, t, e, u, n, c, i) {
    (l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      a != null
        ? c === "number"
          ? ((a === 0 && l.value === "") || l.value != a) &&
            (l.value = "" + ya(a))
          : l.value !== "" + ya(a) && (l.value = "" + ya(a))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      a != null
        ? ec(l, c, ya(a))
        : t != null
        ? ec(l, c, ya(t))
        : e != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.name = "" + ya(i))
        : l.removeAttribute("name");
  }
  function Of(l, a, t, e, u, n, c, i) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      a != null || t != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || a != null)) return;
      (t = t != null ? "" + ya(t) : ""),
        (a = a != null ? "" + ya(a) : t),
        i || a === l.value || (l.value = a),
        (l.defaultValue = a);
    }
    (e = e ?? u),
      (e = typeof e != "function" && typeof e != "symbol" && !!e),
      (l.checked = i ? l.checked : !!e),
      (l.defaultChecked = !!e),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c);
  }
  function ec(l, a, t) {
    (a === "number" && Xu(l.ownerDocument) === l) ||
      l.defaultValue === "" + t ||
      (l.defaultValue = "" + t);
  }
  function It(l, a, t, e) {
    if (((l = l.options), a)) {
      a = {};
      for (var u = 0; u < t.length; u++) a["$" + t[u]] = !0;
      for (t = 0; t < l.length; t++)
        (u = a.hasOwnProperty("$" + l[t].value)),
          l[t].selected !== u && (l[t].selected = u),
          u && e && (l[t].defaultSelected = !0);
    } else {
      for (t = "" + ya(t), a = null, u = 0; u < l.length; u++) {
        if (l[u].value === t) {
          (l[u].selected = !0), e && (l[u].defaultSelected = !0);
          return;
        }
        a !== null || l[u].disabled || (a = l[u]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Mf(l, a, t) {
    if (
      a != null &&
      ((a = "" + ya(a)), a !== l.value && (l.value = a), t == null)
    ) {
      l.defaultValue !== a && (l.defaultValue = a);
      return;
    }
    l.defaultValue = t != null ? "" + ya(t) : "";
  }
  function Df(l, a, t, e) {
    if (a == null) {
      if (e != null) {
        if (t != null) throw Error(m(92));
        if (Nl(e)) {
          if (1 < e.length) throw Error(m(93));
          e = e[0];
        }
        t = e;
      }
      t == null && (t = ""), (a = t);
    }
    (t = ya(a)),
      (l.defaultValue = t),
      (e = l.textContent),
      e === t && e !== "" && e !== null && (l.value = e);
  }
  function Pt(l, a) {
    if (a) {
      var t = l.firstChild;
      if (t && t === l.lastChild && t.nodeType === 3) {
        t.nodeValue = a;
        return;
      }
    }
    l.textContent = a;
  }
  var Rd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function xf(l, a, t) {
    var e = a.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === ""
      ? e
        ? l.setProperty(a, "")
        : a === "float"
        ? (l.cssFloat = "")
        : (l[a] = "")
      : e
      ? l.setProperty(a, t)
      : typeof t != "number" || t === 0 || Rd.has(a)
      ? a === "float"
        ? (l.cssFloat = t)
        : (l[a] = ("" + t).trim())
      : (l[a] = t + "px");
  }
  function jf(l, a, t) {
    if (a != null && typeof a != "object") throw Error(m(62));
    if (((l = l.style), t != null)) {
      for (var e in t)
        !t.hasOwnProperty(e) ||
          (a != null && a.hasOwnProperty(e)) ||
          (e.indexOf("--") === 0
            ? l.setProperty(e, "")
            : e === "float"
            ? (l.cssFloat = "")
            : (l[e] = ""));
      for (var u in a)
        (e = a[u]), a.hasOwnProperty(u) && t[u] !== e && xf(l, u, e);
    } else for (var n in a) a.hasOwnProperty(n) && xf(l, n, a[n]);
  }
  function uc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  function Gu(l) {
    return Hd.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var nc = null;
  function cc(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var le = null,
    ae = null;
  function Rf(l) {
    var a = $t(l);
    if (a && (l = a.stateNode)) {
      var t = l[ta] || null;
      l: switch (((l = a.stateNode), a.type)) {
        case "input":
          if (
            (tc(
              l,
              t.value,
              t.defaultValue,
              t.defaultValue,
              t.checked,
              t.defaultChecked,
              t.type,
              t.name
            ),
            (a = t.name),
            t.type === "radio" && a != null)
          ) {
            for (t = l; t.parentNode; ) t = t.parentNode;
            for (
              t = t.querySelectorAll(
                'input[name="' + ga("" + a) + '"][type="radio"]'
              ),
                a = 0;
              a < t.length;
              a++
            ) {
              var e = t[a];
              if (e !== l && e.form === l.form) {
                var u = e[ta] || null;
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
            for (a = 0; a < t.length; a++)
              (e = t[a]), e.form === l.form && _f(e);
          }
          break l;
        case "textarea":
          Mf(l, t.value, t.defaultValue);
          break l;
        case "select":
          (a = t.value), a != null && It(l, !!t.multiple, a, !1);
      }
    }
  }
  var ic = !1;
  function Uf(l, a, t) {
    if (ic) return l(a, t);
    ic = !0;
    try {
      var e = l(a);
      return e;
    } finally {
      if (
        ((ic = !1),
        (le !== null || ae !== null) &&
          (_n(), le && ((a = le), (l = ae), (ae = le = null), Rf(a), l)))
      )
        for (a = 0; a < l.length; a++) Rf(l[a]);
    }
  }
  function Be(l, a) {
    var t = l.stateNode;
    if (t === null) return null;
    var e = t[ta] || null;
    if (e === null) return null;
    t = e[a];
    l: switch (a) {
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
          ((l = l.type),
          (e = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !e);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (t && typeof t != "function") throw Error(m(231, a, typeof t));
    return t;
  }
  var Ga = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    fc = !1;
  if (Ga)
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
    var l,
      a = sc,
      t = a.length,
      e,
      u = "value" in ut ? ut.value : ut.textContent,
      n = u.length;
    for (l = 0; l < t && a[l] === u[l]; l++);
    var c = t - l;
    for (e = 1; e <= c && a[t - e] === u[n - e]; e++);
    return (Qu = u.slice(l, 1 < e ? 1 - e : void 0));
  }
  function Zu(l) {
    var a = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && a === 13 && (l = 13))
        : (l = a),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Vu() {
    return !0;
  }
  function Cf() {
    return !1;
  }
  function ea(l) {
    function a(t, e, u, n, c) {
      (this._reactName = t),
        (this._targetInst = u),
        (this.type = e),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null);
      for (var i in l)
        l.hasOwnProperty(i) && ((t = l[i]), (this[i] = t ? t(n) : n[i]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Vu
          : Cf),
        (this.isPropagationStopped = Cf),
        this
      );
    }
    return (
      q(a.prototype, {
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
      a
    );
  }
  var Mt = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Lu = ea(Mt),
    Xe = q({}, Mt, { view: 0, detail: 0 }),
    Cd = ea(Xe),
    rc,
    oc,
    Ge,
    Ku = q({}, Xe, {
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
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Ge &&
              (Ge && l.type === "mousemove"
                ? ((rc = l.screenX - Ge.screenX), (oc = l.screenY - Ge.screenY))
                : (oc = rc = 0),
              (Ge = l)),
            rc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : oc;
      },
    }),
    qf = ea(Ku),
    qd = q({}, Ku, { dataTransfer: 0 }),
    Bd = ea(qd),
    Yd = q({}, Xe, { relatedTarget: 0 }),
    dc = ea(Yd),
    Xd = q({}, Mt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Gd = ea(Xd),
    Qd = q({}, Mt, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Zd = ea(Qd),
    Vd = q({}, Mt, { data: 0 }),
    Bf = ea(Vd),
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
  function wd(l) {
    var a = this.nativeEvent;
    return a.getModifierState
      ? a.getModifierState(l)
      : (l = Jd[l])
      ? !!a[l]
      : !1;
  }
  function hc() {
    return wd;
  }
  var $d = q({}, Xe, {
      key: function (l) {
        if (l.key) {
          var a = Ld[l.key] || l.key;
          if (a !== "Unidentified") return a;
        }
        return l.type === "keypress"
          ? ((l = Zu(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? Kd[l.keyCode] || "Unidentified"
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
      charCode: function (l) {
        return l.type === "keypress" ? Zu(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Zu(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    Wd = ea($d),
    kd = q({}, Ku, {
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
    Yf = ea(kd),
    Fd = q({}, Xe, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hc,
    }),
    Id = ea(Fd),
    Pd = q({}, Mt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lh = ea(Pd),
    ah = q({}, Ku, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    th = ea(ah),
    eh = q({}, Mt, { newState: 0, oldState: 0 }),
    uh = ea(eh),
    nh = [9, 13, 27, 32],
    mc = Ga && "CompositionEvent" in window,
    Qe = null;
  Ga && "documentMode" in document && (Qe = document.documentMode);
  var ch = Ga && "TextEvent" in window && !Qe,
    Xf = Ga && (!mc || (Qe && 8 < Qe && 11 >= Qe)),
    Gf = " ",
    Qf = !1;
  function Zf(l, a) {
    switch (l) {
      case "keyup":
        return nh.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Vf(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var te = !1;
  function ih(l, a) {
    switch (l) {
      case "compositionend":
        return Vf(a);
      case "keypress":
        return a.which !== 32 ? null : ((Qf = !0), Gf);
      case "textInput":
        return (l = a.data), l === Gf && Qf ? null : l;
      default:
        return null;
    }
  }
  function fh(l, a) {
    if (te)
      return l === "compositionend" || (!mc && Zf(l, a))
        ? ((l = Hf()), (Qu = sc = ut = null), (te = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || (a.ctrlKey && a.altKey)) {
          if (a.char && 1 < a.char.length) return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return Xf && a.locale !== "ko" ? null : a.data;
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
  function Lf(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return a === "input" ? !!sh[l.type] : a === "textarea";
  }
  function Kf(l, a, t, e) {
    le ? (ae ? ae.push(e) : (ae = [e])) : (le = e),
      (a = Rn(a, "onChange")),
      0 < a.length &&
        ((t = new Lu("onChange", "change", null, t, e)),
        l.push({ event: t, listeners: a }));
  }
  var Ze = null,
    Ve = null;
  function rh(l) {
    _o(l, 0);
  }
  function Ju(l) {
    var a = qe(l);
    if (_f(a)) return l;
  }
  function Jf(l, a) {
    if (l === "change") return a;
  }
  var wf = !1;
  if (Ga) {
    var vc;
    if (Ga) {
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
  function kf(l) {
    if (l.propertyName === "value" && Ju(Ve)) {
      var a = [];
      Kf(a, Ve, l, cc(l)), Uf(rh, a);
    }
  }
  function oh(l, a, t) {
    l === "focusin"
      ? (Wf(), (Ze = a), (Ve = t), Ze.attachEvent("onpropertychange", kf))
      : l === "focusout" && Wf();
  }
  function dh(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ju(Ve);
  }
  function hh(l, a) {
    if (l === "click") return Ju(a);
  }
  function mh(l, a) {
    if (l === "input" || l === "change") return Ju(a);
  }
  function vh(l, a) {
    return (l === a && (l !== 0 || 1 / l === 1 / a)) || (l !== l && a !== a);
  }
  var sa = typeof Object.is == "function" ? Object.is : vh;
  function Le(l, a) {
    if (sa(l, a)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof a != "object" ||
      a === null
    )
      return !1;
    var t = Object.keys(l),
      e = Object.keys(a);
    if (t.length !== e.length) return !1;
    for (e = 0; e < t.length; e++) {
      var u = t[e];
      if (!la.call(a, u) || !sa(l[u], a[u])) return !1;
    }
    return !0;
  }
  function Ff(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function If(l, a) {
    var t = Ff(l);
    l = 0;
    for (var e; t; ) {
      if (t.nodeType === 3) {
        if (((e = l + t.textContent.length), l <= a && e >= a))
          return { node: t, offset: a - l };
        l = e;
      }
      l: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break l;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Ff(t);
    }
  }
  function Pf(l, a) {
    return l && a
      ? l === a
        ? !0
        : l && l.nodeType === 3
        ? !1
        : a && a.nodeType === 3
        ? Pf(l, a.parentNode)
        : "contains" in l
        ? l.contains(a)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(a) & 16)
        : !1
      : !1;
  }
  function ls(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var a = Xu(l.document); a instanceof l.HTMLIFrameElement; ) {
      try {
        var t = typeof a.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) l = a.contentWindow;
      else break;
      a = Xu(l.document);
    }
    return a;
  }
  function gc(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      a &&
      ((a === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        a === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var yh = Ga && "documentMode" in document && 11 >= document.documentMode,
    ee = null,
    bc = null,
    Ke = null,
    Sc = !1;
  function as(l, a, t) {
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
          ((a = new Lu("onSelect", "select", null, a, t)),
          l.push({ event: a, listeners: e }),
          (a.target = ee))));
  }
  function Dt(l, a) {
    var t = {};
    return (
      (t[l.toLowerCase()] = a.toLowerCase()),
      (t["Webkit" + l] = "webkit" + a),
      (t["Moz" + l] = "moz" + a),
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
  Ga &&
    ((ts = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ue.animationend.animation,
      delete ue.animationiteration.animation,
      delete ue.animationstart.animation),
    "TransitionEvent" in window || delete ue.transitionend.transition);
  function xt(l) {
    if (zc[l]) return zc[l];
    if (!ue[l]) return l;
    var a = ue[l],
      t;
    for (t in a) if (a.hasOwnProperty(t) && t in ts) return (zc[l] = a[t]);
    return l;
  }
  var es = xt("animationend"),
    us = xt("animationiteration"),
    ns = xt("animationstart"),
    gh = xt("transitionrun"),
    bh = xt("transitionstart"),
    Sh = xt("transitioncancel"),
    cs = xt("transitionend"),
    is = new Map(),
    Ac =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Ac.push("scrollEnd");
  function Ta(l, a) {
    is.set(l, a), Ot(a, [l]);
  }
  var fs = new WeakMap();
  function ba(l, a) {
    if (typeof l == "object" && l !== null) {
      var t = fs.get(l);
      return t !== void 0
        ? t
        : ((a = { value: l, source: a, stack: Nf(a) }), fs.set(l, a), a);
    }
    return { value: l, source: a, stack: Nf(a) };
  }
  var Sa = [],
    ne = 0,
    pc = 0;
  function wu() {
    for (var l = ne, a = (pc = ne = 0); a < l; ) {
      var t = Sa[a];
      Sa[a++] = null;
      var e = Sa[a];
      Sa[a++] = null;
      var u = Sa[a];
      Sa[a++] = null;
      var n = Sa[a];
      if (((Sa[a++] = null), e !== null && u !== null)) {
        var c = e.pending;
        c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
          (e.pending = u);
      }
      n !== 0 && ss(t, u, n);
    }
  }
  function $u(l, a, t, e) {
    (Sa[ne++] = l),
      (Sa[ne++] = a),
      (Sa[ne++] = t),
      (Sa[ne++] = e),
      (pc |= e),
      (l.lanes |= e),
      (l = l.alternate),
      l !== null && (l.lanes |= e);
  }
  function Ec(l, a, t, e) {
    return $u(l, a, t, e), Wu(l);
  }
  function ce(l, a) {
    return $u(l, null, null, a), Wu(l);
  }
  function ss(l, a, t) {
    l.lanes |= t;
    var e = l.alternate;
    e !== null && (e.lanes |= t);
    for (var u = !1, n = l.return; n !== null; )
      (n.childLanes |= t),
        (e = n.alternate),
        e !== null && (e.childLanes |= t),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return);
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          a !== null &&
          ((u = 31 - fa(t)),
          (l = n.hiddenUpdates),
          (e = l[u]),
          e === null ? (l[u] = [a]) : e.push(a),
          (a.lane = t | 536870912)),
        n)
      : null;
  }
  function Wu(l) {
    if (50 < yu) throw ((yu = 0), (Di = null), Error(m(185)));
    for (var a = l.return; a !== null; ) (l = a), (a = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var ie = {};
  function zh(l, a, t, e) {
    (this.tag = l),
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
      (this.pendingProps = a),
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
  function ra(l, a, t, e) {
    return new zh(l, a, t, e);
  }
  function Nc(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Qa(l, a) {
    var t = l.alternate;
    return (
      t === null
        ? ((t = ra(l.tag, a, l.key, l.mode)),
          (t.elementType = l.elementType),
          (t.type = l.type),
          (t.stateNode = l.stateNode),
          (t.alternate = l),
          (l.alternate = t))
        : ((t.pendingProps = a),
          (t.type = l.type),
          (t.flags = 0),
          (t.subtreeFlags = 0),
          (t.deletions = null)),
      (t.flags = l.flags & 65011712),
      (t.childLanes = l.childLanes),
      (t.lanes = l.lanes),
      (t.child = l.child),
      (t.memoizedProps = l.memoizedProps),
      (t.memoizedState = l.memoizedState),
      (t.updateQueue = l.updateQueue),
      (a = l.dependencies),
      (t.dependencies =
        a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }),
      (t.sibling = l.sibling),
      (t.index = l.index),
      (t.ref = l.ref),
      (t.refCleanup = l.refCleanup),
      t
    );
  }
  function rs(l, a) {
    l.flags &= 65011714;
    var t = l.alternate;
    return (
      t === null
        ? ((l.childLanes = 0),
          (l.lanes = a),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = t.childLanes),
          (l.lanes = t.lanes),
          (l.child = t.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = t.memoizedProps),
          (l.memoizedState = t.memoizedState),
          (l.updateQueue = t.updateQueue),
          (l.type = t.type),
          (a = t.dependencies),
          (l.dependencies =
            a === null
              ? null
              : { lanes: a.lanes, firstContext: a.firstContext })),
      l
    );
  }
  function ku(l, a, t, e, u, n) {
    var c = 0;
    if (((e = l), typeof l == "function")) Nc(l) && (c = 1);
    else if (typeof l == "string")
      c = pm(l, t, h.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case Cl:
          return (l = ra(31, t, a, u)), (l.elementType = Cl), (l.lanes = n), l;
        case El:
          return jt(t.children, u, n, a);
        case Kl:
          (c = 8), (u |= 24);
          break;
        case Ol:
          return (
            (l = ra(12, t, a, u | 2)), (l.elementType = Ol), (l.lanes = n), l
          );
        case O:
          return (l = ra(13, t, a, u)), (l.elementType = O), (l.lanes = n), l;
        case Jl:
          return (l = ra(19, t, a, u)), (l.elementType = Jl), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case il:
              case w:
                c = 10;
                break l;
              case Rl:
                c = 9;
                break l;
              case ia:
                c = 11;
                break l;
              case tl:
                c = 14;
                break l;
              case wl:
                (c = 16), (e = null);
                break l;
            }
          (c = 29),
            (t = Error(m(130, l === null ? "null" : typeof l, ""))),
            (e = null);
      }
    return (
      (a = ra(c, t, a, u)), (a.elementType = l), (a.type = e), (a.lanes = n), a
    );
  }
  function jt(l, a, t, e) {
    return (l = ra(7, l, e, a)), (l.lanes = t), l;
  }
  function Tc(l, a, t) {
    return (l = ra(6, l, null, a)), (l.lanes = t), l;
  }
  function _c(l, a, t) {
    return (
      (a = ra(4, l.children !== null ? l.children : [], l.key, a)),
      (a.lanes = t),
      (a.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      a
    );
  }
  var fe = [],
    se = 0,
    Fu = null,
    Iu = 0,
    za = [],
    Aa = 0,
    Rt = null,
    Za = 1,
    Va = "";
  function Ut(l, a) {
    (fe[se++] = Iu), (fe[se++] = Fu), (Fu = l), (Iu = a);
  }
  function os(l, a, t) {
    (za[Aa++] = Za), (za[Aa++] = Va), (za[Aa++] = Rt), (Rt = l);
    var e = Za;
    l = Va;
    var u = 32 - fa(e) - 1;
    (e &= ~(1 << u)), (t += 1);
    var n = 32 - fa(a) + u;
    if (30 < n) {
      var c = u - (u % 5);
      (n = (e & ((1 << c) - 1)).toString(32)),
        (e >>= c),
        (u -= c),
        (Za = (1 << (32 - fa(a) + u)) | (t << u) | e),
        (Va = n + l);
    } else (Za = (1 << n) | (t << u) | e), (Va = l);
  }
  function Oc(l) {
    l.return !== null && (Ut(l, 1), os(l, 1, 0));
  }
  function Mc(l) {
    for (; l === Fu; )
      (Fu = fe[--se]), (fe[se] = null), (Iu = fe[--se]), (fe[se] = null);
    for (; l === Rt; )
      (Rt = za[--Aa]),
        (za[Aa] = null),
        (Va = za[--Aa]),
        (za[Aa] = null),
        (Za = za[--Aa]),
        (za[Aa] = null);
  }
  var Pl = null,
    Al = null,
    cl = !1,
    Ht = null,
    ja = !1,
    Dc = Error(m(519));
  function Ct(l) {
    var a = Error(m(418, ""));
    throw ($e(ba(a, l)), Dc);
  }
  function ds(l) {
    var a = l.stateNode,
      t = l.type,
      e = l.memoizedProps;
    switch (((a[$l] = l), (a[ta] = e), t)) {
      case "dialog":
        P("cancel", a), P("close", a);
        break;
      case "iframe":
      case "object":
      case "embed":
        P("load", a);
        break;
      case "video":
      case "audio":
        for (t = 0; t < bu.length; t++) P(bu[t], a);
        break;
      case "source":
        P("error", a);
        break;
      case "img":
      case "image":
      case "link":
        P("error", a), P("load", a);
        break;
      case "details":
        P("toggle", a);
        break;
      case "input":
        P("invalid", a),
          Of(
            a,
            e.value,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
            !0
          ),
          Yu(a);
        break;
      case "select":
        P("invalid", a);
        break;
      case "textarea":
        P("invalid", a), Df(a, e.value, e.defaultValue, e.children), Yu(a);
    }
    (t = e.children),
      (typeof t != "string" && typeof t != "number" && typeof t != "bigint") ||
      a.textContent === "" + t ||
      e.suppressHydrationWarning === !0 ||
      xo(a.textContent, t)
        ? (e.popover != null && (P("beforetoggle", a), P("toggle", a)),
          e.onScroll != null && P("scroll", a),
          e.onScrollEnd != null && P("scrollend", a),
          e.onClick != null && (a.onclick = Un),
          (a = !0))
        : (a = !1),
      a || Ct(l);
  }
  function hs(l) {
    for (Pl = l.return; Pl; )
      switch (Pl.tag) {
        case 5:
        case 13:
          ja = !1;
          return;
        case 27:
        case 3:
          ja = !0;
          return;
        default:
          Pl = Pl.return;
      }
  }
  function Je(l) {
    if (l !== Pl) return !1;
    if (!cl) return hs(l), (cl = !0), !1;
    var a = l.tag,
      t;
    if (
      ((t = a !== 3 && a !== 27) &&
        ((t = a === 5) &&
          ((t = l.type),
          (t =
            !(t !== "form" && t !== "button") || Ki(l.type, l.memoizedProps))),
        (t = !t)),
      t && Al && Ct(l),
      hs(l),
      a === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(m(317));
      l: {
        for (l = l.nextSibling, a = 0; l; ) {
          if (l.nodeType === 8)
            if (((t = l.data), t === "/$")) {
              if (a === 0) {
                Al = Oa(l.nextSibling);
                break l;
              }
              a--;
            } else (t !== "$" && t !== "$!" && t !== "$?") || a++;
          l = l.nextSibling;
        }
        Al = null;
      }
    } else
      a === 27
        ? ((a = Al), zt(l.type) ? ((l = Wi), (Wi = null), (Al = l)) : (Al = a))
        : (Al = Pl ? Oa(l.stateNode.nextSibling) : null);
    return !0;
  }
  function we() {
    (Al = Pl = null), (cl = !1);
  }
  function ms() {
    var l = Ht;
    return (
      l !== null &&
        (ca === null ? (ca = l) : ca.push.apply(ca, l), (Ht = null)),
      l
    );
  }
  function $e(l) {
    Ht === null ? (Ht = [l]) : Ht.push(l);
  }
  var xc = _(null),
    qt = null,
    La = null;
  function nt(l, a, t) {
    D(xc, a._currentValue), (a._currentValue = t);
  }
  function Ka(l) {
    (l._currentValue = xc.current), R(xc);
  }
  function jc(l, a, t) {
    for (; l !== null; ) {
      var e = l.alternate;
      if (
        ((l.childLanes & a) !== a
          ? ((l.childLanes |= a), e !== null && (e.childLanes |= a))
          : e !== null && (e.childLanes & a) !== a && (e.childLanes |= a),
        l === t)
      )
        break;
      l = l.return;
    }
  }
  function Rc(l, a, t, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = u;
          for (var f = 0; f < a.length; f++)
            if (i.context === a[f]) {
              (n.lanes |= t),
                (i = n.alternate),
                i !== null && (i.lanes |= t),
                jc(n.return, t, l),
                e || (c = null);
              break l;
            }
          n = i.next;
        }
      } else if (u.tag === 18) {
        if (((c = u.return), c === null)) throw Error(m(341));
        (c.lanes |= t),
          (n = c.alternate),
          n !== null && (n.lanes |= t),
          jc(c, t, l),
          (c = null);
      } else c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === l) {
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
  function We(l, a, t, e) {
    l = null;
    for (var u = a, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(m(387));
        if (((c = c.memoizedProps), c !== null)) {
          var i = u.type;
          sa(u.pendingProps.value, c.value) ||
            (l !== null ? l.push(i) : (l = [i]));
        }
      } else if (u === X.current) {
        if (((c = u.alternate), c === null)) throw Error(m(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(Nu) : (l = [Nu]));
      }
      u = u.return;
    }
    l !== null && Rc(a, l, t, e), (a.flags |= 262144);
  }
  function Pu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!sa(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Bt(l) {
    (qt = l),
      (La = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Wl(l) {
    return vs(qt, l);
  }
  function ln(l, a) {
    return qt === null && Bt(l), vs(l, a);
  }
  function vs(l, a) {
    var t = a._currentValue;
    if (((a = { context: a, memoizedValue: t, next: null }), La === null)) {
      if (l === null) throw Error(m(308));
      (La = a),
        (l.dependencies = { lanes: 0, firstContext: a }),
        (l.flags |= 524288);
    } else La = La.next = a;
    return t;
  }
  var Ah =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              a = (this.signal = {
                aborted: !1,
                addEventListener: function (t, e) {
                  l.push(e);
                },
              });
            this.abort = function () {
              (a.aborted = !0),
                l.forEach(function (t) {
                  return t();
                });
            };
          },
    ph = M.unstable_scheduleCallback,
    Eh = M.unstable_NormalPriority,
    Ul = {
      $$typeof: w,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Uc() {
    return { controller: new Ah(), data: new Map(), refCount: 0 };
  }
  function ke(l) {
    l.refCount--,
      l.refCount === 0 &&
        ph(Eh, function () {
          l.controller.abort();
        });
  }
  var Fe = null,
    Hc = 0,
    re = 0,
    oe = null;
  function Nh(l, a) {
    if (Fe === null) {
      var t = (Fe = []);
      (Hc = 0),
        (re = qi()),
        (oe = {
          status: "pending",
          value: void 0,
          then: function (e) {
            t.push(e);
          },
        });
    }
    return Hc++, a.then(ys, ys), a;
  }
  function ys() {
    if (--Hc === 0 && Fe !== null) {
      oe !== null && (oe.status = "fulfilled");
      var l = Fe;
      (Fe = null), (re = 0), (oe = null);
      for (var a = 0; a < l.length; a++) (0, l[a])();
    }
  }
  function Th(l, a) {
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
      l.then(
        function () {
          (e.status = "fulfilled"), (e.value = a);
          for (var u = 0; u < t.length; u++) (0, t[u])(a);
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
  S.S = function (l, a) {
    typeof a == "object" &&
      a !== null &&
      typeof a.then == "function" &&
      Nh(l, a),
      gs !== null && gs(l, a);
  };
  var Yt = _(null);
  function Cc() {
    var l = Yt.current;
    return l !== null ? l : vl.pooledCache;
  }
  function an(l, a) {
    a === null ? D(Yt, Yt.current) : D(Yt, a.pool);
  }
  function bs() {
    var l = Cc();
    return l === null ? null : { parent: Ul._currentValue, pool: l };
  }
  var Ie = Error(m(460)),
    Ss = Error(m(474)),
    tn = Error(m(542)),
    qc = { then: function () {} };
  function zs(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function en() {}
  function As(l, a, t) {
    switch (
      ((t = l[t]),
      t === void 0 ? l.push(a) : t !== a && (a.then(en, en), (a = t)),
      a.status)
    ) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw ((l = a.reason), Es(l), l);
      default:
        if (typeof a.status == "string") a.then(en, en);
        else {
          if (((l = vl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(m(482));
          (l = a),
            (l.status = "pending"),
            l.then(
              function (e) {
                if (a.status === "pending") {
                  var u = a;
                  (u.status = "fulfilled"), (u.value = e);
                }
              },
              function (e) {
                if (a.status === "pending") {
                  var u = a;
                  (u.status = "rejected"), (u.reason = e);
                }
              }
            );
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw ((l = a.reason), Es(l), l);
        }
        throw ((Pe = a), Ie);
    }
  }
  var Pe = null;
  function ps() {
    if (Pe === null) throw Error(m(459));
    var l = Pe;
    return (Pe = null), l;
  }
  function Es(l) {
    if (l === Ie || l === tn) throw Error(m(483));
  }
  var ct = !1;
  function Bc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Yc(l, a) {
    (l = l.updateQueue),
      a.updateQueue === l &&
        (a.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function it(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ft(l, a, t) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (sl & 2) !== 0)) {
      var u = e.pending;
      return (
        u === null ? (a.next = a) : ((a.next = u.next), (u.next = a)),
        (e.pending = a),
        (a = Wu(l)),
        ss(l, null, t),
        a
      );
    }
    return $u(l, e, a, t), Wu(l);
  }
  function lu(l, a, t) {
    if (
      ((a = a.updateQueue), a !== null && ((a = a.shared), (t & 4194048) !== 0))
    ) {
      var e = a.lanes;
      (e &= l.pendingLanes), (t |= e), (a.lanes = t), yf(l, t);
    }
  }
  function Xc(l, a) {
    var t = l.updateQueue,
      e = l.alternate;
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
        n === null ? (u = n = a) : (n = n.next = a);
      } else u = n = a;
      (t = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks,
      }),
        (l.updateQueue = t);
      return;
    }
    (l = t.lastBaseUpdate),
      l === null ? (t.firstBaseUpdate = a) : (l.next = a),
      (t.lastBaseUpdate = a);
  }
  var Gc = !1;
  function au() {
    if (Gc) {
      var l = oe;
      if (l !== null) throw l;
    }
  }
  function tu(l, a, t, e) {
    Gc = !1;
    var u = l.updateQueue;
    ct = !1;
    var n = u.firstBaseUpdate,
      c = u.lastBaseUpdate,
      i = u.shared.pending;
    if (i !== null) {
      u.shared.pending = null;
      var f = i,
        y = f.next;
      (f.next = null), c === null ? (n = y) : (c.next = y), (c = f);
      var z = l.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (i = z.lastBaseUpdate),
        i !== c &&
          (i === null ? (z.firstBaseUpdate = y) : (i.next = y),
          (z.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var E = u.baseState;
      (c = 0), (z = y = f = null), (i = n);
      do {
        var g = i.lane & -536870913,
          b = g !== i.lane;
        if (b ? (el & g) === g : (e & g) === g) {
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
          l: {
            var K = l,
              Z = i;
            g = a;
            var hl = t;
            switch (Z.tag) {
              case 1:
                if (((K = Z.payload), typeof K == "function")) {
                  E = K.call(hl, E, g);
                  break l;
                }
                E = K;
                break l;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = Z.payload),
                  (g = typeof K == "function" ? K.call(hl, E, g) : K),
                  g == null)
                )
                  break l;
                E = q({}, E, g);
                break l;
              case 2:
                ct = !0;
            }
          }
          (g = i.callback),
            g !== null &&
              ((l.flags |= 64),
              b && (l.flags |= 8192),
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
            z === null ? ((y = z = b), (f = E)) : (z = z.next = b),
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
      z === null && (f = E),
        (u.baseState = f),
        (u.firstBaseUpdate = y),
        (u.lastBaseUpdate = z),
        n === null && (u.shared.lanes = 0),
        (yt |= c),
        (l.lanes = c),
        (l.memoizedState = E);
    }
  }
  function Ns(l, a) {
    if (typeof l != "function") throw Error(m(191, l));
    l.call(a);
  }
  function Ts(l, a) {
    var t = l.callbacks;
    if (t !== null)
      for (l.callbacks = null, l = 0; l < t.length; l++) Ns(t[l], a);
  }
  var de = _(null),
    un = _(0);
  function _s(l, a) {
    (l = Ia), D(un, l), D(de, a), (Ia = l | a.baseLanes);
  }
  function Qc() {
    D(un, Ia), D(de, de.current);
  }
  function Zc() {
    (Ia = un.current), R(de), R(un);
  }
  var st = 0,
    W = null,
    ol = null,
    Dl = null,
    nn = !1,
    he = !1,
    Xt = !1,
    cn = 0,
    eu = 0,
    me = null,
    _h = 0;
  function Tl() {
    throw Error(m(321));
  }
  function Vc(l, a) {
    if (a === null) return !1;
    for (var t = 0; t < a.length && t < l.length; t++)
      if (!sa(l[t], a[t])) return !1;
    return !0;
  }
  function Lc(l, a, t, e, u, n) {
    return (
      (st = n),
      (W = a),
      (a.memoizedState = null),
      (a.updateQueue = null),
      (a.lanes = 0),
      (S.H = l === null || l.memoizedState === null ? sr : rr),
      (Xt = !1),
      (n = t(e, u)),
      (Xt = !1),
      he && (n = Ms(a, t, e, u)),
      Os(l),
      n
    );
  }
  function Os(l) {
    S.H = hn;
    var a = ol !== null && ol.next !== null;
    if (((st = 0), (Dl = ol = W = null), (nn = !1), (eu = 0), (me = null), a))
      throw Error(m(300));
    l === null ||
      Yl ||
      ((l = l.dependencies), l !== null && Pu(l) && (Yl = !0));
  }
  function Ms(l, a, t, e) {
    W = l;
    var u = 0;
    do {
      if ((he && (me = null), (eu = 0), (he = !1), 25 <= u))
        throw Error(m(301));
      if (((u += 1), (Dl = ol = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (S.H = Uh), (n = a(t, e));
    } while (he);
    return n;
  }
  function Oh() {
    var l = S.H,
      a = l.useState()[0];
    return (
      (a = typeof a.then == "function" ? uu(a) : a),
      (l = l.useState()[0]),
      (ol !== null ? ol.memoizedState : null) !== l && (W.flags |= 1024),
      a
    );
  }
  function Kc() {
    var l = cn !== 0;
    return (cn = 0), l;
  }
  function Jc(l, a, t) {
    (a.updateQueue = l.updateQueue), (a.flags &= -2053), (l.lanes &= ~t);
  }
  function wc(l) {
    if (nn) {
      for (l = l.memoizedState; l !== null; ) {
        var a = l.queue;
        a !== null && (a.pending = null), (l = l.next);
      }
      nn = !1;
    }
    (st = 0), (Dl = ol = W = null), (he = !1), (eu = cn = 0), (me = null);
  }
  function ua() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Dl === null ? (W.memoizedState = Dl = l) : (Dl = Dl.next = l), Dl;
  }
  function xl() {
    if (ol === null) {
      var l = W.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ol.next;
    var a = Dl === null ? W.memoizedState : Dl.next;
    if (a !== null) (Dl = a), (ol = l);
    else {
      if (l === null)
        throw W.alternate === null ? Error(m(467)) : Error(m(310));
      (ol = l),
        (l = {
          memoizedState: ol.memoizedState,
          baseState: ol.baseState,
          baseQueue: ol.baseQueue,
          queue: ol.queue,
          next: null,
        }),
        Dl === null ? (W.memoizedState = Dl = l) : (Dl = Dl.next = l);
    }
    return Dl;
  }
  function $c() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function uu(l) {
    var a = eu;
    return (
      (eu += 1),
      me === null && (me = []),
      (l = As(me, l, a)),
      (a = W),
      (Dl === null ? a.memoizedState : Dl.next) === null &&
        ((a = a.alternate),
        (S.H = a === null || a.memoizedState === null ? sr : rr)),
      l
    );
  }
  function fn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return uu(l);
      if (l.$$typeof === w) return Wl(l);
    }
    throw Error(m(438, String(l)));
  }
  function Wc(l) {
    var a = null,
      t = W.updateQueue;
    if ((t !== null && (a = t.memoCache), a == null)) {
      var e = W.alternate;
      e !== null &&
        ((e = e.updateQueue),
        e !== null &&
          ((e = e.memoCache),
          e != null &&
            (a = {
              data: e.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (a == null && (a = { data: [], index: 0 }),
      t === null && ((t = $c()), (W.updateQueue = t)),
      (t.memoCache = a),
      (t = a.data[a.index]),
      t === void 0)
    )
      for (t = a.data[a.index] = Array(l), e = 0; e < l; e++) t[e] = Ma;
    return a.index++, t;
  }
  function Ja(l, a) {
    return typeof a == "function" ? a(l) : a;
  }
  function sn(l) {
    var a = xl();
    return kc(a, ol, l);
  }
  function kc(l, a, t) {
    var e = l.queue;
    if (e === null) throw Error(m(311));
    e.lastRenderedReducer = t;
    var u = l.baseQueue,
      n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        (u.next = n.next), (n.next = c);
      }
      (a.baseQueue = u = n), (e.pending = null);
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      a = u.next;
      var i = (c = null),
        f = null,
        y = a,
        z = !1;
      do {
        var E = y.lane & -536870913;
        if (E !== y.lane ? (el & E) === E : (st & E) === E) {
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
              E === re && (z = !0);
          else if ((st & g) === g) {
            (y = y.next), g === re && (z = !0);
            continue;
          } else
            (E = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              f === null ? ((i = f = E), (c = n)) : (f = f.next = E),
              (W.lanes |= g),
              (yt |= g);
          (E = y.action),
            Xt && t(n, E),
            (n = y.hasEagerState ? y.eagerState : t(n, E));
        } else
          (g = {
            lane: E,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            f === null ? ((i = f = g), (c = n)) : (f = f.next = g),
            (W.lanes |= E),
            (yt |= E);
        y = y.next;
      } while (y !== null && y !== a);
      if (
        (f === null ? (c = n) : (f.next = i),
        !sa(n, l.memoizedState) && ((Yl = !0), z && ((t = oe), t !== null)))
      )
        throw t;
      (l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = f),
        (e.lastRenderedState = n);
    }
    return u === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
  }
  function Fc(l) {
    var a = xl(),
      t = a.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = l;
    var e = t.dispatch,
      u = t.pending,
      n = a.memoizedState;
    if (u !== null) {
      t.pending = null;
      var c = (u = u.next);
      do (n = l(n, c.action)), (c = c.next);
      while (c !== u);
      sa(n, a.memoizedState) || (Yl = !0),
        (a.memoizedState = n),
        a.baseQueue === null && (a.baseState = n),
        (t.lastRenderedState = n);
    }
    return [n, e];
  }
  function Ds(l, a, t) {
    var e = W,
      u = xl(),
      n = cl;
    if (n) {
      if (t === void 0) throw Error(m(407));
      t = t();
    } else t = a();
    var c = !sa((ol || u).memoizedState, t);
    c && ((u.memoizedState = t), (Yl = !0)), (u = u.queue);
    var i = Rs.bind(null, e, u, l);
    if (
      (nu(2048, 8, i, [l]),
      u.getSnapshot !== a || c || (Dl !== null && Dl.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        ve(9, rn(), js.bind(null, e, u, t, a), null),
        vl === null)
      )
        throw Error(m(349));
      n || (st & 124) !== 0 || xs(e, a, t);
    }
    return t;
  }
  function xs(l, a, t) {
    (l.flags |= 16384),
      (l = { getSnapshot: a, value: t }),
      (a = W.updateQueue),
      a === null
        ? ((a = $c()), (W.updateQueue = a), (a.stores = [l]))
        : ((t = a.stores), t === null ? (a.stores = [l]) : t.push(l));
  }
  function js(l, a, t, e) {
    (a.value = t), (a.getSnapshot = e), Us(a) && Hs(l);
  }
  function Rs(l, a, t) {
    return t(function () {
      Us(a) && Hs(l);
    });
  }
  function Us(l) {
    var a = l.getSnapshot;
    l = l.value;
    try {
      var t = a();
      return !sa(l, t);
    } catch {
      return !0;
    }
  }
  function Hs(l) {
    var a = ce(l, 2);
    a !== null && va(a, l, 2);
  }
  function Ic(l) {
    var a = ua();
    if (typeof l == "function") {
      var t = l;
      if (((l = t()), Xt)) {
        tt(!0);
        try {
          t();
        } finally {
          tt(!1);
        }
      }
    }
    return (
      (a.memoizedState = a.baseState = l),
      (a.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ja,
        lastRenderedState: l,
      }),
      a
    );
  }
  function Cs(l, a, t, e) {
    return (l.baseState = t), kc(l, ol, typeof e == "function" ? e : Ja);
  }
  function Mh(l, a, t, e, u) {
    if (dn(l)) throw Error(m(485));
    if (((l = a.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
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
        (t = a.pending),
        t === null
          ? ((n.next = a.pending = n), qs(a, n))
          : ((n.next = t.next), (a.pending = t.next = n));
    }
  }
  function qs(l, a) {
    var t = a.action,
      e = a.payload,
      u = l.state;
    if (a.isTransition) {
      var n = S.T,
        c = {};
      S.T = c;
      try {
        var i = t(u, e),
          f = S.S;
        f !== null && f(c, i), Bs(l, a, i);
      } catch (y) {
        Pc(l, a, y);
      } finally {
        S.T = n;
      }
    } else
      try {
        (n = t(u, e)), Bs(l, a, n);
      } catch (y) {
        Pc(l, a, y);
      }
  }
  function Bs(l, a, t) {
    t !== null && typeof t == "object" && typeof t.then == "function"
      ? t.then(
          function (e) {
            Ys(l, a, e);
          },
          function (e) {
            return Pc(l, a, e);
          }
        )
      : Ys(l, a, t);
  }
  function Ys(l, a, t) {
    (a.status = "fulfilled"),
      (a.value = t),
      Xs(a),
      (l.state = t),
      (a = l.pending),
      a !== null &&
        ((t = a.next),
        t === a ? (l.pending = null) : ((t = t.next), (a.next = t), qs(l, t)));
  }
  function Pc(l, a, t) {
    var e = l.pending;
    if (((l.pending = null), e !== null)) {
      e = e.next;
      do (a.status = "rejected"), (a.reason = t), Xs(a), (a = a.next);
      while (a !== e);
    }
    l.action = null;
  }
  function Xs(l) {
    l = l.listeners;
    for (var a = 0; a < l.length; a++) (0, l[a])();
  }
  function Gs(l, a) {
    return a;
  }
  function Qs(l, a) {
    if (cl) {
      var t = vl.formState;
      if (t !== null) {
        l: {
          var e = W;
          if (cl) {
            if (Al) {
              a: {
                for (var u = Al, n = ja; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break a;
                  }
                  if (((u = Oa(u.nextSibling)), u === null)) {
                    u = null;
                    break a;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (Al = Oa(u.nextSibling)), (e = u.data === "F!");
                break l;
              }
            }
            Ct(e);
          }
          e = !1;
        }
        e && (a = t[0]);
      }
    }
    return (
      (t = ua()),
      (t.memoizedState = t.baseState = a),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gs,
        lastRenderedState: a,
      }),
      (t.queue = e),
      (t = cr.bind(null, W, e)),
      (e.dispatch = t),
      (e = Ic(!1)),
      (n = ui.bind(null, W, !1, e.queue)),
      (e = ua()),
      (u = { state: a, dispatch: null, action: l, pending: null }),
      (e.queue = u),
      (t = Mh.bind(null, W, u, n, t)),
      (u.dispatch = t),
      (e.memoizedState = l),
      [a, t, !1]
    );
  }
  function Zs(l) {
    var a = xl();
    return Vs(a, ol, l);
  }
  function Vs(l, a, t) {
    if (
      ((a = kc(l, a, Gs)[0]),
      (l = sn(Ja)[0]),
      typeof a == "object" && a !== null && typeof a.then == "function")
    )
      try {
        var e = uu(a);
      } catch (c) {
        throw c === Ie ? tn : c;
      }
    else e = a;
    a = xl();
    var u = a.queue,
      n = u.dispatch;
    return (
      t !== a.memoizedState &&
        ((W.flags |= 2048), ve(9, rn(), Dh.bind(null, u, t), null)),
      [e, n, l]
    );
  }
  function Dh(l, a) {
    l.action = a;
  }
  function Ls(l) {
    var a = xl(),
      t = ol;
    if (t !== null) return Vs(a, t, l);
    xl(), (a = a.memoizedState), (t = xl());
    var e = t.queue.dispatch;
    return (t.memoizedState = l), [a, e, !1];
  }
  function ve(l, a, t, e) {
    return (
      (l = { tag: l, create: t, deps: e, inst: a, next: null }),
      (a = W.updateQueue),
      a === null && ((a = $c()), (W.updateQueue = a)),
      (t = a.lastEffect),
      t === null
        ? (a.lastEffect = l.next = l)
        : ((e = t.next), (t.next = l), (l.next = e), (a.lastEffect = l)),
      l
    );
  }
  function rn() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ks() {
    return xl().memoizedState;
  }
  function on(l, a, t, e) {
    var u = ua();
    (e = e === void 0 ? null : e),
      (W.flags |= l),
      (u.memoizedState = ve(1 | a, rn(), t, e));
  }
  function nu(l, a, t, e) {
    var u = xl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    ol !== null && e !== null && Vc(e, ol.memoizedState.deps)
      ? (u.memoizedState = ve(a, n, t, e))
      : ((W.flags |= l), (u.memoizedState = ve(1 | a, n, t, e)));
  }
  function Js(l, a) {
    on(8390656, 8, l, a);
  }
  function ws(l, a) {
    nu(2048, 8, l, a);
  }
  function $s(l, a) {
    return nu(4, 2, l, a);
  }
  function Ws(l, a) {
    return nu(4, 4, l, a);
  }
  function ks(l, a) {
    if (typeof a == "function") {
      l = l();
      var t = a(l);
      return function () {
        typeof t == "function" ? t() : a(null);
      };
    }
    if (a != null)
      return (
        (l = l()),
        (a.current = l),
        function () {
          a.current = null;
        }
      );
  }
  function Fs(l, a, t) {
    (t = t != null ? t.concat([l]) : null), nu(4, 4, ks.bind(null, a, l), t);
  }
  function li() {}
  function Is(l, a) {
    var t = xl();
    a = a === void 0 ? null : a;
    var e = t.memoizedState;
    return a !== null && Vc(a, e[1]) ? e[0] : ((t.memoizedState = [l, a]), l);
  }
  function Ps(l, a) {
    var t = xl();
    a = a === void 0 ? null : a;
    var e = t.memoizedState;
    if (a !== null && Vc(a, e[1])) return e[0];
    if (((e = l()), Xt)) {
      tt(!0);
      try {
        l();
      } finally {
        tt(!1);
      }
    }
    return (t.memoizedState = [e, a]), e;
  }
  function ai(l, a, t) {
    return t === void 0 || (st & 1073741824) !== 0
      ? (l.memoizedState = a)
      : ((l.memoizedState = t), (l = to()), (W.lanes |= l), (yt |= l), t);
  }
  function lr(l, a, t, e) {
    return sa(t, a)
      ? t
      : de.current !== null
      ? ((l = ai(l, t, e)), sa(l, a) || (Yl = !0), l)
      : (st & 42) === 0
      ? ((Yl = !0), (l.memoizedState = t))
      : ((l = to()), (W.lanes |= l), (yt |= l), a);
  }
  function ar(l, a, t, e, u) {
    var n = x.p;
    x.p = n !== 0 && 8 > n ? n : 8;
    var c = S.T,
      i = {};
    (S.T = i), ui(l, !1, a, t);
    try {
      var f = u(),
        y = S.S;
      if (
        (y !== null && y(i, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var z = Th(f, e);
        cu(l, a, z, ma(l));
      } else cu(l, a, e, ma(l));
    } catch (E) {
      cu(l, a, { then: function () {}, status: "rejected", reason: E }, ma());
    } finally {
      (x.p = n), (S.T = c);
    }
  }
  function xh() {}
  function ti(l, a, t, e) {
    if (l.tag !== 5) throw Error(m(476));
    var u = tr(l).queue;
    ar(
      l,
      u,
      a,
      Q,
      t === null
        ? xh
        : function () {
            return er(l), t(e);
          }
    );
  }
  function tr(l) {
    var a = l.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ja,
        lastRenderedState: Q,
      },
      next: null,
    };
    var t = {};
    return (
      (a.next = {
        memoizedState: t,
        baseState: t,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ja,
          lastRenderedState: t,
        },
        next: null,
      }),
      (l.memoizedState = a),
      (l = l.alternate),
      l !== null && (l.memoizedState = a),
      a
    );
  }
  function er(l) {
    var a = tr(l).next.queue;
    cu(l, a, {}, ma());
  }
  function ei() {
    return Wl(Nu);
  }
  function ur() {
    return xl().memoizedState;
  }
  function nr() {
    return xl().memoizedState;
  }
  function jh(l) {
    for (var a = l.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var t = ma();
          l = it(t);
          var e = ft(a, l, t);
          e !== null && (va(e, a, t), lu(e, a, t)),
            (a = { cache: Uc() }),
            (l.payload = a);
          return;
      }
      a = a.return;
    }
  }
  function Rh(l, a, t) {
    var e = ma();
    (t = {
      lane: e,
      revertLane: 0,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      dn(l)
        ? ir(a, t)
        : ((t = Ec(l, a, t, e)), t !== null && (va(t, l, e), fr(t, a, e)));
  }
  function cr(l, a, t) {
    var e = ma();
    cu(l, a, t, e);
  }
  function cu(l, a, t, e) {
    var u = {
      lane: e,
      revertLane: 0,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (dn(l)) ir(a, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = a.lastRenderedReducer), n !== null)
      )
        try {
          var c = a.lastRenderedState,
            i = n(c, t);
          if (((u.hasEagerState = !0), (u.eagerState = i), sa(i, c)))
            return $u(l, a, u, 0), vl === null && wu(), !1;
        } catch {
        } finally {
        }
      if (((t = Ec(l, a, u, e)), t !== null))
        return va(t, l, e), fr(t, a, e), !0;
    }
    return !1;
  }
  function ui(l, a, t, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: qi(),
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      dn(l))
    ) {
      if (a) throw Error(m(479));
    } else (a = Ec(l, t, e, 2)), a !== null && va(a, l, 2);
  }
  function dn(l) {
    var a = l.alternate;
    return l === W || (a !== null && a === W);
  }
  function ir(l, a) {
    he = nn = !0;
    var t = l.pending;
    t === null ? (a.next = a) : ((a.next = t.next), (t.next = a)),
      (l.pending = a);
  }
  function fr(l, a, t) {
    if ((t & 4194048) !== 0) {
      var e = a.lanes;
      (e &= l.pendingLanes), (t |= e), (a.lanes = t), yf(l, t);
    }
  }
  var hn = {
      readContext: Wl,
      use: fn,
      useCallback: Tl,
      useContext: Tl,
      useEffect: Tl,
      useImperativeHandle: Tl,
      useLayoutEffect: Tl,
      useInsertionEffect: Tl,
      useMemo: Tl,
      useReducer: Tl,
      useRef: Tl,
      useState: Tl,
      useDebugValue: Tl,
      useDeferredValue: Tl,
      useTransition: Tl,
      useSyncExternalStore: Tl,
      useId: Tl,
      useHostTransitionStatus: Tl,
      useFormState: Tl,
      useActionState: Tl,
      useOptimistic: Tl,
      useMemoCache: Tl,
      useCacheRefresh: Tl,
    },
    sr = {
      readContext: Wl,
      use: fn,
      useCallback: function (l, a) {
        return (ua().memoizedState = [l, a === void 0 ? null : a]), l;
      },
      useContext: Wl,
      useEffect: Js,
      useImperativeHandle: function (l, a, t) {
        (t = t != null ? t.concat([l]) : null),
          on(4194308, 4, ks.bind(null, a, l), t);
      },
      useLayoutEffect: function (l, a) {
        return on(4194308, 4, l, a);
      },
      useInsertionEffect: function (l, a) {
        on(4, 2, l, a);
      },
      useMemo: function (l, a) {
        var t = ua();
        a = a === void 0 ? null : a;
        var e = l();
        if (Xt) {
          tt(!0);
          try {
            l();
          } finally {
            tt(!1);
          }
        }
        return (t.memoizedState = [e, a]), e;
      },
      useReducer: function (l, a, t) {
        var e = ua();
        if (t !== void 0) {
          var u = t(a);
          if (Xt) {
            tt(!0);
            try {
              t(a);
            } finally {
              tt(!1);
            }
          }
        } else u = a;
        return (
          (e.memoizedState = e.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (e.queue = l),
          (l = l.dispatch = Rh.bind(null, W, l)),
          [e.memoizedState, l]
        );
      },
      useRef: function (l) {
        var a = ua();
        return (l = { current: l }), (a.memoizedState = l);
      },
      useState: function (l) {
        l = Ic(l);
        var a = l.queue,
          t = cr.bind(null, W, a);
        return (a.dispatch = t), [l.memoizedState, t];
      },
      useDebugValue: li,
      useDeferredValue: function (l, a) {
        var t = ua();
        return ai(t, l, a);
      },
      useTransition: function () {
        var l = Ic(!1);
        return (
          (l = ar.bind(null, W, l.queue, !0, !1)),
          (ua().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, a, t) {
        var e = W,
          u = ua();
        if (cl) {
          if (t === void 0) throw Error(m(407));
          t = t();
        } else {
          if (((t = a()), vl === null)) throw Error(m(349));
          (el & 124) !== 0 || xs(e, a, t);
        }
        u.memoizedState = t;
        var n = { value: t, getSnapshot: a };
        return (
          (u.queue = n),
          Js(Rs.bind(null, e, n, l), [l]),
          (e.flags |= 2048),
          ve(9, rn(), js.bind(null, e, n, t, a), null),
          t
        );
      },
      useId: function () {
        var l = ua(),
          a = vl.identifierPrefix;
        if (cl) {
          var t = Va,
            e = Za;
          (t = (e & ~(1 << (32 - fa(e) - 1))).toString(32) + t),
            (a = "«" + a + "R" + t),
            (t = cn++),
            0 < t && (a += "H" + t.toString(32)),
            (a += "»");
        } else (t = _h++), (a = "«" + a + "r" + t.toString(32) + "»");
        return (l.memoizedState = a);
      },
      useHostTransitionStatus: ei,
      useFormState: Qs,
      useActionState: Qs,
      useOptimistic: function (l) {
        var a = ua();
        a.memoizedState = a.baseState = l;
        var t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (a.queue = t), (a = ui.bind(null, W, !0, t)), (t.dispatch = a), [l, a]
        );
      },
      useMemoCache: Wc,
      useCacheRefresh: function () {
        return (ua().memoizedState = jh.bind(null, W));
      },
    },
    rr = {
      readContext: Wl,
      use: fn,
      useCallback: Is,
      useContext: Wl,
      useEffect: ws,
      useImperativeHandle: Fs,
      useInsertionEffect: $s,
      useLayoutEffect: Ws,
      useMemo: Ps,
      useReducer: sn,
      useRef: Ks,
      useState: function () {
        return sn(Ja);
      },
      useDebugValue: li,
      useDeferredValue: function (l, a) {
        var t = xl();
        return lr(t, ol.memoizedState, l, a);
      },
      useTransition: function () {
        var l = sn(Ja)[0],
          a = xl().memoizedState;
        return [typeof l == "boolean" ? l : uu(l), a];
      },
      useSyncExternalStore: Ds,
      useId: ur,
      useHostTransitionStatus: ei,
      useFormState: Zs,
      useActionState: Zs,
      useOptimistic: function (l, a) {
        var t = xl();
        return Cs(t, ol, l, a);
      },
      useMemoCache: Wc,
      useCacheRefresh: nr,
    },
    Uh = {
      readContext: Wl,
      use: fn,
      useCallback: Is,
      useContext: Wl,
      useEffect: ws,
      useImperativeHandle: Fs,
      useInsertionEffect: $s,
      useLayoutEffect: Ws,
      useMemo: Ps,
      useReducer: Fc,
      useRef: Ks,
      useState: function () {
        return Fc(Ja);
      },
      useDebugValue: li,
      useDeferredValue: function (l, a) {
        var t = xl();
        return ol === null ? ai(t, l, a) : lr(t, ol.memoizedState, l, a);
      },
      useTransition: function () {
        var l = Fc(Ja)[0],
          a = xl().memoizedState;
        return [typeof l == "boolean" ? l : uu(l), a];
      },
      useSyncExternalStore: Ds,
      useId: ur,
      useHostTransitionStatus: ei,
      useFormState: Ls,
      useActionState: Ls,
      useOptimistic: function (l, a) {
        var t = xl();
        return ol !== null
          ? Cs(t, ol, l, a)
          : ((t.baseState = l), [l, t.queue.dispatch]);
      },
      useMemoCache: Wc,
      useCacheRefresh: nr,
    },
    ye = null,
    iu = 0;
  function mn(l) {
    var a = iu;
    return (iu += 1), ye === null && (ye = []), As(ye, l, a);
  }
  function fu(l, a) {
    (a = a.props.ref), (l.ref = a !== void 0 ? a : null);
  }
  function vn(l, a) {
    throw a.$$typeof === k
      ? Error(m(525))
      : ((l = Object.prototype.toString.call(a)),
        Error(
          m(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(a).join(", ") + "}"
              : l
          )
        ));
  }
  function or(l) {
    var a = l._init;
    return a(l._payload);
  }
  function dr(l) {
    function a(d, o) {
      if (l) {
        var v = d.deletions;
        v === null ? ((d.deletions = [o]), (d.flags |= 16)) : v.push(o);
      }
    }
    function t(d, o) {
      if (!l) return null;
      for (; o !== null; ) a(d, o), (o = o.sibling);
      return null;
    }
    function e(d) {
      for (var o = new Map(); d !== null; )
        d.key !== null ? o.set(d.key, d) : o.set(d.index, d), (d = d.sibling);
      return o;
    }
    function u(d, o) {
      return (d = Qa(d, o)), (d.index = 0), (d.sibling = null), d;
    }
    function n(d, o, v) {
      return (
        (d.index = v),
        l
          ? ((v = d.alternate),
            v !== null
              ? ((v = v.index), v < o ? ((d.flags |= 67108866), o) : v)
              : ((d.flags |= 67108866), o))
          : ((d.flags |= 1048576), o)
      );
    }
    function c(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function i(d, o, v, p) {
      return o === null || o.tag !== 6
        ? ((o = Tc(v, d.mode, p)), (o.return = d), o)
        : ((o = u(o, v)), (o.return = d), o);
    }
    function f(d, o, v, p) {
      var H = v.type;
      return H === El
        ? z(d, o, v.props.children, p, v.key)
        : o !== null &&
          (o.elementType === H ||
            (typeof H == "object" &&
              H !== null &&
              H.$$typeof === wl &&
              or(H) === o.type))
        ? ((o = u(o, v.props)), fu(o, v), (o.return = d), o)
        : ((o = ku(v.type, v.key, v.props, null, d.mode, p)),
          fu(o, v),
          (o.return = d),
          o);
    }
    function y(d, o, v, p) {
      return o === null ||
        o.tag !== 4 ||
        o.stateNode.containerInfo !== v.containerInfo ||
        o.stateNode.implementation !== v.implementation
        ? ((o = _c(v, d.mode, p)), (o.return = d), o)
        : ((o = u(o, v.children || [])), (o.return = d), o);
    }
    function z(d, o, v, p, H) {
      return o === null || o.tag !== 7
        ? ((o = jt(v, d.mode, p, H)), (o.return = d), o)
        : ((o = u(o, v)), (o.return = d), o);
    }
    function E(d, o, v) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return (o = Tc("" + o, d.mode, v)), (o.return = d), o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case al:
            return (
              (v = ku(o.type, o.key, o.props, null, d.mode, v)),
              fu(v, o),
              (v.return = d),
              v
            );
          case nl:
            return (o = _c(o, d.mode, v)), (o.return = d), o;
          case wl:
            var p = o._init;
            return (o = p(o._payload)), E(d, o, v);
        }
        if (Nl(o) || bl(o))
          return (o = jt(o, d.mode, v, null)), (o.return = d), o;
        if (typeof o.then == "function") return E(d, mn(o), v);
        if (o.$$typeof === w) return E(d, ln(d, o), v);
        vn(d, o);
      }
      return null;
    }
    function g(d, o, v, p) {
      var H = o !== null ? o.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return H !== null ? null : i(d, o, "" + v, p);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case al:
            return v.key === H ? f(d, o, v, p) : null;
          case nl:
            return v.key === H ? y(d, o, v, p) : null;
          case wl:
            return (H = v._init), (v = H(v._payload)), g(d, o, v, p);
        }
        if (Nl(v) || bl(v)) return H !== null ? null : z(d, o, v, p, null);
        if (typeof v.then == "function") return g(d, o, mn(v), p);
        if (v.$$typeof === w) return g(d, o, ln(d, v), p);
        vn(d, v);
      }
      return null;
    }
    function b(d, o, v, p, H) {
      if (
        (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
      )
        return (d = d.get(v) || null), i(o, d, "" + p, H);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case al:
            return (
              (d = d.get(p.key === null ? v : p.key) || null), f(o, d, p, H)
            );
          case nl:
            return (
              (d = d.get(p.key === null ? v : p.key) || null), y(o, d, p, H)
            );
          case wl:
            var F = p._init;
            return (p = F(p._payload)), b(d, o, v, p, H);
        }
        if (Nl(p) || bl(p)) return (d = d.get(v) || null), z(o, d, p, H, null);
        if (typeof p.then == "function") return b(d, o, v, mn(p), H);
        if (p.$$typeof === w) return b(d, o, v, ln(o, p), H);
        vn(o, p);
      }
      return null;
    }
    function K(d, o, v, p) {
      for (
        var H = null, F = null, Y = o, L = (o = 0), Gl = null;
        Y !== null && L < v.length;
        L++
      ) {
        Y.index > L ? ((Gl = Y), (Y = null)) : (Gl = Y.sibling);
        var ul = g(d, Y, v[L], p);
        if (ul === null) {
          Y === null && (Y = Gl);
          break;
        }
        l && Y && ul.alternate === null && a(d, Y),
          (o = n(ul, o, L)),
          F === null ? (H = ul) : (F.sibling = ul),
          (F = ul),
          (Y = Gl);
      }
      if (L === v.length) return t(d, Y), cl && Ut(d, L), H;
      if (Y === null) {
        for (; L < v.length; L++)
          (Y = E(d, v[L], p)),
            Y !== null &&
              ((o = n(Y, o, L)),
              F === null ? (H = Y) : (F.sibling = Y),
              (F = Y));
        return cl && Ut(d, L), H;
      }
      for (Y = e(Y); L < v.length; L++)
        (Gl = b(Y, d, L, v[L], p)),
          Gl !== null &&
            (l &&
              Gl.alternate !== null &&
              Y.delete(Gl.key === null ? L : Gl.key),
            (o = n(Gl, o, L)),
            F === null ? (H = Gl) : (F.sibling = Gl),
            (F = Gl));
      return (
        l &&
          Y.forEach(function (Tt) {
            return a(d, Tt);
          }),
        cl && Ut(d, L),
        H
      );
    }
    function Z(d, o, v, p) {
      if (v == null) throw Error(m(151));
      for (
        var H = null, F = null, Y = o, L = (o = 0), Gl = null, ul = v.next();
        Y !== null && !ul.done;
        L++, ul = v.next()
      ) {
        Y.index > L ? ((Gl = Y), (Y = null)) : (Gl = Y.sibling);
        var Tt = g(d, Y, ul.value, p);
        if (Tt === null) {
          Y === null && (Y = Gl);
          break;
        }
        l && Y && Tt.alternate === null && a(d, Y),
          (o = n(Tt, o, L)),
          F === null ? (H = Tt) : (F.sibling = Tt),
          (F = Tt),
          (Y = Gl);
      }
      if (ul.done) return t(d, Y), cl && Ut(d, L), H;
      if (Y === null) {
        for (; !ul.done; L++, ul = v.next())
          (ul = E(d, ul.value, p)),
            ul !== null &&
              ((o = n(ul, o, L)),
              F === null ? (H = ul) : (F.sibling = ul),
              (F = ul));
        return cl && Ut(d, L), H;
      }
      for (Y = e(Y); !ul.done; L++, ul = v.next())
        (ul = b(Y, d, L, ul.value, p)),
          ul !== null &&
            (l &&
              ul.alternate !== null &&
              Y.delete(ul.key === null ? L : ul.key),
            (o = n(ul, o, L)),
            F === null ? (H = ul) : (F.sibling = ul),
            (F = ul));
      return (
        l &&
          Y.forEach(function (Hm) {
            return a(d, Hm);
          }),
        cl && Ut(d, L),
        H
      );
    }
    function hl(d, o, v, p) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === El &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case al:
            l: {
              for (var H = v.key; o !== null; ) {
                if (o.key === H) {
                  if (((H = v.type), H === El)) {
                    if (o.tag === 7) {
                      t(d, o.sibling),
                        (p = u(o, v.props.children)),
                        (p.return = d),
                        (d = p);
                      break l;
                    }
                  } else if (
                    o.elementType === H ||
                    (typeof H == "object" &&
                      H !== null &&
                      H.$$typeof === wl &&
                      or(H) === o.type)
                  ) {
                    t(d, o.sibling),
                      (p = u(o, v.props)),
                      fu(p, v),
                      (p.return = d),
                      (d = p);
                    break l;
                  }
                  t(d, o);
                  break;
                } else a(d, o);
                o = o.sibling;
              }
              v.type === El
                ? ((p = jt(v.props.children, d.mode, p, v.key)),
                  (p.return = d),
                  (d = p))
                : ((p = ku(v.type, v.key, v.props, null, d.mode, p)),
                  fu(p, v),
                  (p.return = d),
                  (d = p));
            }
            return c(d);
          case nl:
            l: {
              for (H = v.key; o !== null; ) {
                if (o.key === H)
                  if (
                    o.tag === 4 &&
                    o.stateNode.containerInfo === v.containerInfo &&
                    o.stateNode.implementation === v.implementation
                  ) {
                    t(d, o.sibling),
                      (p = u(o, v.children || [])),
                      (p.return = d),
                      (d = p);
                    break l;
                  } else {
                    t(d, o);
                    break;
                  }
                else a(d, o);
                o = o.sibling;
              }
              (p = _c(v, d.mode, p)), (p.return = d), (d = p);
            }
            return c(d);
          case wl:
            return (H = v._init), (v = H(v._payload)), hl(d, o, v, p);
        }
        if (Nl(v)) return K(d, o, v, p);
        if (bl(v)) {
          if (((H = bl(v)), typeof H != "function")) throw Error(m(150));
          return (v = H.call(v)), Z(d, o, v, p);
        }
        if (typeof v.then == "function") return hl(d, o, mn(v), p);
        if (v.$$typeof === w) return hl(d, o, ln(d, v), p);
        vn(d, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          o !== null && o.tag === 6
            ? (t(d, o.sibling), (p = u(o, v)), (p.return = d), (d = p))
            : (t(d, o), (p = Tc(v, d.mode, p)), (p.return = d), (d = p)),
          c(d))
        : t(d, o);
    }
    return function (d, o, v, p) {
      try {
        iu = 0;
        var H = hl(d, o, v, p);
        return (ye = null), H;
      } catch (Y) {
        if (Y === Ie || Y === tn) throw Y;
        var F = ra(29, Y, null, d.mode);
        return (F.lanes = p), (F.return = d), F;
      } finally {
      }
    };
  }
  var ge = dr(!0),
    hr = dr(!1),
    pa = _(null),
    Ra = null;
  function rt(l) {
    var a = l.alternate;
    D(Hl, Hl.current & 1),
      D(pa, l),
      Ra === null &&
        (a === null || de.current !== null || a.memoizedState !== null) &&
        (Ra = l);
  }
  function mr(l) {
    if (l.tag === 22) {
      if ((D(Hl, Hl.current), D(pa, l), Ra === null)) {
        var a = l.alternate;
        a !== null && a.memoizedState !== null && (Ra = l);
      }
    } else ot();
  }
  function ot() {
    D(Hl, Hl.current), D(pa, pa.current);
  }
  function wa(l) {
    R(pa), Ra === l && (Ra = null), R(Hl);
  }
  var Hl = _(0);
  function yn(l) {
    for (var a = l; a !== null; ) {
      if (a.tag === 13) {
        var t = a.memoizedState;
        if (
          t !== null &&
          ((t = t.dehydrated), t === null || t.data === "$?" || $i(t))
        )
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        (a.child.return = a), (a = a.child);
        continue;
      }
      if (a === l) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === l) return null;
        a = a.return;
      }
      (a.sibling.return = a.return), (a = a.sibling);
    }
    return null;
  }
  function ni(l, a, t, e) {
    (a = l.memoizedState),
      (t = t(e, a)),
      (t = t == null ? a : q({}, a, t)),
      (l.memoizedState = t),
      l.lanes === 0 && (l.updateQueue.baseState = t);
  }
  var ci = {
    enqueueSetState: function (l, a, t) {
      l = l._reactInternals;
      var e = ma(),
        u = it(e);
      (u.payload = a),
        t != null && (u.callback = t),
        (a = ft(l, u, e)),
        a !== null && (va(a, l, e), lu(a, l, e));
    },
    enqueueReplaceState: function (l, a, t) {
      l = l._reactInternals;
      var e = ma(),
        u = it(e);
      (u.tag = 1),
        (u.payload = a),
        t != null && (u.callback = t),
        (a = ft(l, u, e)),
        a !== null && (va(a, l, e), lu(a, l, e));
    },
    enqueueForceUpdate: function (l, a) {
      l = l._reactInternals;
      var t = ma(),
        e = it(t);
      (e.tag = 2),
        a != null && (e.callback = a),
        (a = ft(l, e, t)),
        a !== null && (va(a, l, t), lu(a, l, t));
    },
  };
  function vr(l, a, t, e, u, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(e, n, c)
        : a.prototype && a.prototype.isPureReactComponent
        ? !Le(t, e) || !Le(u, n)
        : !0
    );
  }
  function yr(l, a, t, e) {
    (l = a.state),
      typeof a.componentWillReceiveProps == "function" &&
        a.componentWillReceiveProps(t, e),
      typeof a.UNSAFE_componentWillReceiveProps == "function" &&
        a.UNSAFE_componentWillReceiveProps(t, e),
      a.state !== l && ci.enqueueReplaceState(a, a.state, null);
  }
  function Gt(l, a) {
    var t = a;
    if ("ref" in a) {
      t = {};
      for (var e in a) e !== "ref" && (t[e] = a[e]);
    }
    if ((l = l.defaultProps)) {
      t === a && (t = q({}, t));
      for (var u in l) t[u] === void 0 && (t[u] = l[u]);
    }
    return t;
  }
  var gn =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var a = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(a)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function gr(l) {
    gn(l);
  }
  function br(l) {
    console.error(l);
  }
  function Sr(l) {
    gn(l);
  }
  function bn(l, a) {
    try {
      var t = l.onUncaughtError;
      t(a.value, { componentStack: a.stack });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function zr(l, a, t) {
    try {
      var e = l.onCaughtError;
      e(t.value, {
        componentStack: t.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function ii(l, a, t) {
    return (
      (t = it(t)),
      (t.tag = 3),
      (t.payload = { element: null }),
      (t.callback = function () {
        bn(l, a);
      }),
      t
    );
  }
  function Ar(l) {
    return (l = it(l)), (l.tag = 3), l;
  }
  function pr(l, a, t, e) {
    var u = t.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      (l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          zr(a, t, e);
        });
    }
    var c = t.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        zr(a, t, e),
          typeof u != "function" &&
            (gt === null ? (gt = new Set([this])) : gt.add(this));
        var i = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: i !== null ? i : "",
        });
      });
  }
  function Hh(l, a, t, e, u) {
    if (
      ((t.flags |= 32768),
      e !== null && typeof e == "object" && typeof e.then == "function")
    ) {
      if (
        ((a = t.alternate),
        a !== null && We(a, t, u, !0),
        (t = pa.current),
        t !== null)
      ) {
        switch (t.tag) {
          case 13:
            return (
              Ra === null ? ji() : t.alternate === null && pl === 0 && (pl = 3),
              (t.flags &= -257),
              (t.flags |= 65536),
              (t.lanes = u),
              e === qc
                ? (t.flags |= 16384)
                : ((a = t.updateQueue),
                  a === null ? (t.updateQueue = new Set([e])) : a.add(e),
                  Ui(l, e, u)),
              !1
            );
          case 22:
            return (
              (t.flags |= 65536),
              e === qc
                ? (t.flags |= 16384)
                : ((a = t.updateQueue),
                  a === null
                    ? ((a = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([e]),
                      }),
                      (t.updateQueue = a))
                    : ((t = a.retryQueue),
                      t === null ? (a.retryQueue = new Set([e])) : t.add(e)),
                  Ui(l, e, u)),
              !1
            );
        }
        throw Error(m(435, t.tag));
      }
      return Ui(l, e, u), ji(), !1;
    }
    if (cl)
      return (
        (a = pa.current),
        a !== null
          ? ((a.flags & 65536) === 0 && (a.flags |= 256),
            (a.flags |= 65536),
            (a.lanes = u),
            e !== Dc && ((l = Error(m(422), { cause: e })), $e(ba(l, t))))
          : (e !== Dc && ((a = Error(m(423), { cause: e })), $e(ba(a, t))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (e = ba(e, t)),
            (u = ii(l.stateNode, e, u)),
            Xc(l, u),
            pl !== 4 && (pl = 2)),
        !1
      );
    var n = Error(m(520), { cause: e });
    if (
      ((n = ba(n, t)),
      vu === null ? (vu = [n]) : vu.push(n),
      pl !== 4 && (pl = 2),
      a === null)
    )
      return !0;
    (e = ba(e, t)), (t = a);
    do {
      switch (t.tag) {
        case 3:
          return (
            (t.flags |= 65536),
            (l = u & -u),
            (t.lanes |= l),
            (l = ii(t.stateNode, e, l)),
            Xc(t, l),
            !1
          );
        case 1:
          if (
            ((a = t.type),
            (n = t.stateNode),
            (t.flags & 128) === 0 &&
              (typeof a.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (gt === null || !gt.has(n)))))
          )
            return (
              (t.flags |= 65536),
              (u &= -u),
              (t.lanes |= u),
              (u = Ar(u)),
              pr(u, l, t, e),
              Xc(t, u),
              !1
            );
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var Er = Error(m(461)),
    Yl = !1;
  function Zl(l, a, t, e) {
    a.child = l === null ? hr(a, null, t, e) : ge(a, l.child, t, e);
  }
  function Nr(l, a, t, e, u) {
    t = t.render;
    var n = a.ref;
    if ("ref" in e) {
      var c = {};
      for (var i in e) i !== "ref" && (c[i] = e[i]);
    } else c = e;
    return (
      Bt(a),
      (e = Lc(l, a, t, c, n, u)),
      (i = Kc()),
      l !== null && !Yl
        ? (Jc(l, a, u), $a(l, a, u))
        : (cl && i && Oc(a), (a.flags |= 1), Zl(l, a, e, u), a.child)
    );
  }
  function Tr(l, a, t, e, u) {
    if (l === null) {
      var n = t.type;
      return typeof n == "function" &&
        !Nc(n) &&
        n.defaultProps === void 0 &&
        t.compare === null
        ? ((a.tag = 15), (a.type = n), _r(l, a, n, e, u))
        : ((l = ku(t.type, null, e, a, a.mode, u)),
          (l.ref = a.ref),
          (l.return = a),
          (a.child = l));
    }
    if (((n = l.child), !vi(l, u))) {
      var c = n.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : Le), t(c, e) && l.ref === a.ref)
      )
        return $a(l, a, u);
    }
    return (
      (a.flags |= 1),
      (l = Qa(n, e)),
      (l.ref = a.ref),
      (l.return = a),
      (a.child = l)
    );
  }
  function _r(l, a, t, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Le(n, e) && l.ref === a.ref)
        if (((Yl = !1), (a.pendingProps = e = n), vi(l, u)))
          (l.flags & 131072) !== 0 && (Yl = !0);
        else return (a.lanes = l.lanes), $a(l, a, u);
    }
    return fi(l, a, t, e, u);
  }
  function Or(l, a, t) {
    var e = a.pendingProps,
      u = e.children,
      n = l !== null ? l.memoizedState : null;
    if (e.mode === "hidden") {
      if ((a.flags & 128) !== 0) {
        if (((e = n !== null ? n.baseLanes | t : t), l !== null)) {
          for (u = a.child = l.child, n = 0; u !== null; )
            (n = n | u.lanes | u.childLanes), (u = u.sibling);
          a.childLanes = n & ~e;
        } else (a.childLanes = 0), (a.child = null);
        return Mr(l, a, e, t);
      }
      if ((t & 536870912) !== 0)
        (a.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && an(a, n !== null ? n.cachePool : null),
          n !== null ? _s(a, n) : Qc(),
          mr(a);
      else
        return (
          (a.lanes = a.childLanes = 536870912),
          Mr(l, a, n !== null ? n.baseLanes | t : t, t)
        );
    } else
      n !== null
        ? (an(a, n.cachePool), _s(a, n), ot(), (a.memoizedState = null))
        : (l !== null && an(a, null), Qc(), ot());
    return Zl(l, a, u, t), a.child;
  }
  function Mr(l, a, t, e) {
    var u = Cc();
    return (
      (u = u === null ? null : { parent: Ul._currentValue, pool: u }),
      (a.memoizedState = { baseLanes: t, cachePool: u }),
      l !== null && an(a, null),
      Qc(),
      mr(a),
      l !== null && We(l, a, e, !0),
      null
    );
  }
  function Sn(l, a) {
    var t = a.ref;
    if (t === null) l !== null && l.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object") throw Error(m(284));
      (l === null || l.ref !== t) && (a.flags |= 4194816);
    }
  }
  function fi(l, a, t, e, u) {
    return (
      Bt(a),
      (t = Lc(l, a, t, e, void 0, u)),
      (e = Kc()),
      l !== null && !Yl
        ? (Jc(l, a, u), $a(l, a, u))
        : (cl && e && Oc(a), (a.flags |= 1), Zl(l, a, t, u), a.child)
    );
  }
  function Dr(l, a, t, e, u, n) {
    return (
      Bt(a),
      (a.updateQueue = null),
      (t = Ms(a, e, t, u)),
      Os(l),
      (e = Kc()),
      l !== null && !Yl
        ? (Jc(l, a, n), $a(l, a, n))
        : (cl && e && Oc(a), (a.flags |= 1), Zl(l, a, t, n), a.child)
    );
  }
  function xr(l, a, t, e, u) {
    if ((Bt(a), a.stateNode === null)) {
      var n = ie,
        c = t.contextType;
      typeof c == "object" && c !== null && (n = Wl(c)),
        (n = new t(e, n)),
        (a.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = ci),
        (a.stateNode = n),
        (n._reactInternals = a),
        (n = a.stateNode),
        (n.props = e),
        (n.state = a.memoizedState),
        (n.refs = {}),
        Bc(a),
        (c = t.contextType),
        (n.context = typeof c == "object" && c !== null ? Wl(c) : ie),
        (n.state = a.memoizedState),
        (c = t.getDerivedStateFromProps),
        typeof c == "function" && (ni(a, t, c, e), (n.state = a.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && ci.enqueueReplaceState(n, n.state, null),
          tu(a, e, n, u),
          au(),
          (n.state = a.memoizedState)),
        typeof n.componentDidMount == "function" && (a.flags |= 4194308),
        (e = !0);
    } else if (l === null) {
      n = a.stateNode;
      var i = a.memoizedProps,
        f = Gt(t, i);
      n.props = f;
      var y = n.context,
        z = t.contextType;
      (c = ie), typeof z == "object" && z !== null && (c = Wl(z));
      var E = t.getDerivedStateFromProps;
      (z =
        typeof E == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (i = a.pendingProps !== i),
        z ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i || y !== c) && yr(a, n, e, c)),
        (ct = !1);
      var g = a.memoizedState;
      (n.state = g),
        tu(a, e, n, u),
        au(),
        (y = a.memoizedState),
        i || g !== y || ct
          ? (typeof E == "function" && (ni(a, t, E, e), (y = a.memoizedState)),
            (f = ct || vr(a, t, f, e, g, y, c))
              ? (z ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (a.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (a.flags |= 4194308),
                (a.memoizedProps = e),
                (a.memoizedState = y)),
            (n.props = e),
            (n.state = y),
            (n.context = c),
            (e = f))
          : (typeof n.componentDidMount == "function" && (a.flags |= 4194308),
            (e = !1));
    } else {
      (n = a.stateNode),
        Yc(l, a),
        (c = a.memoizedProps),
        (z = Gt(t, c)),
        (n.props = z),
        (E = a.pendingProps),
        (g = n.context),
        (y = t.contextType),
        (f = ie),
        typeof y == "object" && y !== null && (f = Wl(y)),
        (i = t.getDerivedStateFromProps),
        (y =
          typeof i == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== E || g !== f) && yr(a, n, e, f)),
        (ct = !1),
        (g = a.memoizedState),
        (n.state = g),
        tu(a, e, n, u),
        au();
      var b = a.memoizedState;
      c !== E ||
      g !== b ||
      ct ||
      (l !== null && l.dependencies !== null && Pu(l.dependencies))
        ? (typeof i == "function" && (ni(a, t, i, e), (b = a.memoizedState)),
          (z =
            ct ||
            vr(a, t, z, e, g, b, f) ||
            (l !== null && l.dependencies !== null && Pu(l.dependencies)))
            ? (y ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(e, b, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(e, b, f)),
              typeof n.componentDidUpdate == "function" && (a.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (a.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && g === l.memoizedState) ||
                (a.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && g === l.memoizedState) ||
                (a.flags |= 1024),
              (a.memoizedProps = e),
              (a.memoizedState = b)),
          (n.props = e),
          (n.state = b),
          (n.context = f),
          (e = z))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && g === l.memoizedState) ||
            (a.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && g === l.memoizedState) ||
            (a.flags |= 1024),
          (e = !1));
    }
    return (
      (n = e),
      Sn(l, a),
      (e = (a.flags & 128) !== 0),
      n || e
        ? ((n = a.stateNode),
          (t =
            e && typeof t.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (a.flags |= 1),
          l !== null && e
            ? ((a.child = ge(a, l.child, null, u)),
              (a.child = ge(a, null, t, u)))
            : Zl(l, a, t, u),
          (a.memoizedState = n.state),
          (l = a.child))
        : (l = $a(l, a, u)),
      l
    );
  }
  function jr(l, a, t, e) {
    return we(), (a.flags |= 256), Zl(l, a, t, e), a.child;
  }
  var si = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ri(l) {
    return { baseLanes: l, cachePool: bs() };
  }
  function oi(l, a, t) {
    return (l = l !== null ? l.childLanes & ~t : 0), a && (l |= Ea), l;
  }
  function Rr(l, a, t) {
    var e = a.pendingProps,
      u = !1,
      n = (a.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (Hl.current & 2) !== 0),
      c && ((u = !0), (a.flags &= -129)),
      (c = (a.flags & 32) !== 0),
      (a.flags &= -33),
      l === null)
    ) {
      if (cl) {
        if ((u ? rt(a) : ot(), cl)) {
          var i = Al,
            f;
          if ((f = i)) {
            l: {
              for (f = i, i = ja; f.nodeType !== 8; ) {
                if (!i) {
                  i = null;
                  break l;
                }
                if (((f = Oa(f.nextSibling)), f === null)) {
                  i = null;
                  break l;
                }
              }
              i = f;
            }
            i !== null
              ? ((a.memoizedState = {
                  dehydrated: i,
                  treeContext: Rt !== null ? { id: Za, overflow: Va } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (f = ra(18, null, null, 0)),
                (f.stateNode = i),
                (f.return = a),
                (a.child = f),
                (Pl = a),
                (Al = null),
                (f = !0))
              : (f = !1);
          }
          f || Ct(a);
        }
        if (
          ((i = a.memoizedState),
          i !== null && ((i = i.dehydrated), i !== null))
        )
          return $i(i) ? (a.lanes = 32) : (a.lanes = 536870912), null;
        wa(a);
      }
      return (
        (i = e.children),
        (e = e.fallback),
        u
          ? (ot(),
            (u = a.mode),
            (i = zn({ mode: "hidden", children: i }, u)),
            (e = jt(e, u, t, null)),
            (i.return = a),
            (e.return = a),
            (i.sibling = e),
            (a.child = i),
            (u = a.child),
            (u.memoizedState = ri(t)),
            (u.childLanes = oi(l, c, t)),
            (a.memoizedState = si),
            e)
          : (rt(a), di(a, i))
      );
    }
    if (
      ((f = l.memoizedState), f !== null && ((i = f.dehydrated), i !== null))
    ) {
      if (n)
        a.flags & 256
          ? (rt(a), (a.flags &= -257), (a = hi(l, a, t)))
          : a.memoizedState !== null
          ? (ot(), (a.child = l.child), (a.flags |= 128), (a = null))
          : (ot(),
            (u = e.fallback),
            (i = a.mode),
            (e = zn({ mode: "visible", children: e.children }, i)),
            (u = jt(u, i, t, null)),
            (u.flags |= 2),
            (e.return = a),
            (u.return = a),
            (e.sibling = u),
            (a.child = e),
            ge(a, l.child, null, t),
            (e = a.child),
            (e.memoizedState = ri(t)),
            (e.childLanes = oi(l, c, t)),
            (a.memoizedState = si),
            (a = u));
      else if ((rt(a), $i(i))) {
        if (((c = i.nextSibling && i.nextSibling.dataset), c)) var y = c.dgst;
        (c = y),
          (e = Error(m(419))),
          (e.stack = ""),
          (e.digest = c),
          $e({ value: e, source: null, stack: null }),
          (a = hi(l, a, t));
      } else if (
        (Yl || We(l, a, t, !1), (c = (t & l.childLanes) !== 0), Yl || c)
      ) {
        if (
          ((c = vl),
          c !== null &&
            ((e = t & -t),
            (e = (e & 42) !== 0 ? 1 : Wn(e)),
            (e = (e & (c.suspendedLanes | t)) !== 0 ? 0 : e),
            e !== 0 && e !== f.retryLane))
        )
          throw ((f.retryLane = e), ce(l, e), va(c, l, e), Er);
        i.data === "$?" || ji(), (a = hi(l, a, t));
      } else
        i.data === "$?"
          ? ((a.flags |= 192), (a.child = l.child), (a = null))
          : ((l = f.treeContext),
            (Al = Oa(i.nextSibling)),
            (Pl = a),
            (cl = !0),
            (Ht = null),
            (ja = !1),
            l !== null &&
              ((za[Aa++] = Za),
              (za[Aa++] = Va),
              (za[Aa++] = Rt),
              (Za = l.id),
              (Va = l.overflow),
              (Rt = a)),
            (a = di(a, e.children)),
            (a.flags |= 4096));
      return a;
    }
    return u
      ? (ot(),
        (u = e.fallback),
        (i = a.mode),
        (f = l.child),
        (y = f.sibling),
        (e = Qa(f, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = f.subtreeFlags & 65011712),
        y !== null ? (u = Qa(y, u)) : ((u = jt(u, i, t, null)), (u.flags |= 2)),
        (u.return = a),
        (e.return = a),
        (e.sibling = u),
        (a.child = e),
        (e = u),
        (u = a.child),
        (i = l.child.memoizedState),
        i === null
          ? (i = ri(t))
          : ((f = i.cachePool),
            f !== null
              ? ((y = Ul._currentValue),
                (f = f.parent !== y ? { parent: y, pool: y } : f))
              : (f = bs()),
            (i = { baseLanes: i.baseLanes | t, cachePool: f })),
        (u.memoizedState = i),
        (u.childLanes = oi(l, c, t)),
        (a.memoizedState = si),
        e)
      : (rt(a),
        (t = l.child),
        (l = t.sibling),
        (t = Qa(t, { mode: "visible", children: e.children })),
        (t.return = a),
        (t.sibling = null),
        l !== null &&
          ((c = a.deletions),
          c === null ? ((a.deletions = [l]), (a.flags |= 16)) : c.push(l)),
        (a.child = t),
        (a.memoizedState = null),
        t);
  }
  function di(l, a) {
    return (
      (a = zn({ mode: "visible", children: a }, l.mode)),
      (a.return = l),
      (l.child = a)
    );
  }
  function zn(l, a) {
    return (
      (l = ra(22, l, null, a)),
      (l.lanes = 0),
      (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      l
    );
  }
  function hi(l, a, t) {
    return (
      ge(a, l.child, null, t),
      (l = di(a, a.pendingProps.children)),
      (l.flags |= 2),
      (a.memoizedState = null),
      l
    );
  }
  function Ur(l, a, t) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a), jc(l.return, a, t);
  }
  function mi(l, a, t, e, u) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = {
          isBackwards: a,
          rendering: null,
          renderingStartTime: 0,
          last: e,
          tail: t,
          tailMode: u,
        })
      : ((n.isBackwards = a),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = e),
        (n.tail = t),
        (n.tailMode = u));
  }
  function Hr(l, a, t) {
    var e = a.pendingProps,
      u = e.revealOrder,
      n = e.tail;
    if ((Zl(l, a, e.children, t), (e = Hl.current), (e & 2) !== 0))
      (e = (e & 1) | 2), (a.flags |= 128);
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = a.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && Ur(l, t, a);
          else if (l.tag === 19) Ur(l, t, a);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === a) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === a) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      e &= 1;
    }
    switch ((D(Hl, e), u)) {
      case "forwards":
        for (t = a.child, u = null; t !== null; )
          (l = t.alternate),
            l !== null && yn(l) === null && (u = t),
            (t = t.sibling);
        (t = u),
          t === null
            ? ((u = a.child), (a.child = null))
            : ((u = t.sibling), (t.sibling = null)),
          mi(a, !1, u, t, n);
        break;
      case "backwards":
        for (t = null, u = a.child, a.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && yn(l) === null)) {
            a.child = u;
            break;
          }
          (l = u.sibling), (u.sibling = t), (t = u), (u = l);
        }
        mi(a, !0, t, null, n);
        break;
      case "together":
        mi(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function $a(l, a, t) {
    if (
      (l !== null && (a.dependencies = l.dependencies),
      (yt |= a.lanes),
      (t & a.childLanes) === 0)
    )
      if (l !== null) {
        if ((We(l, a, t, !1), (t & a.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && a.child !== l.child) throw Error(m(153));
    if (a.child !== null) {
      for (
        l = a.child, t = Qa(l, l.pendingProps), a.child = t, t.return = a;
        l.sibling !== null;

      )
        (l = l.sibling),
          (t = t.sibling = Qa(l, l.pendingProps)),
          (t.return = a);
      t.sibling = null;
    }
    return a.child;
  }
  function vi(l, a) {
    return (l.lanes & a) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Pu(l)));
  }
  function Ch(l, a, t) {
    switch (a.tag) {
      case 3:
        V(a, a.stateNode.containerInfo), nt(a, Ul, l.memoizedState.cache), we();
        break;
      case 27:
      case 5:
        zl(a);
        break;
      case 4:
        V(a, a.stateNode.containerInfo);
        break;
      case 10:
        nt(a, a.type, a.memoizedProps.value);
        break;
      case 13:
        var e = a.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? (rt(a), (a.flags |= 128), null)
            : (t & a.child.childLanes) !== 0
            ? Rr(l, a, t)
            : (rt(a), (l = $a(l, a, t)), l !== null ? l.sibling : null);
        rt(a);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((e = (t & a.childLanes) !== 0),
          e || (We(l, a, t, !1), (e = (t & a.childLanes) !== 0)),
          u)
        ) {
          if (e) return Hr(l, a, t);
          a.flags |= 128;
        }
        if (
          ((u = a.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          D(Hl, Hl.current),
          e)
        )
          break;
        return null;
      case 22:
      case 23:
        return (a.lanes = 0), Or(l, a, t);
      case 24:
        nt(a, Ul, l.memoizedState.cache);
    }
    return $a(l, a, t);
  }
  function Cr(l, a, t) {
    if (l !== null)
      if (l.memoizedProps !== a.pendingProps) Yl = !0;
      else {
        if (!vi(l, t) && (a.flags & 128) === 0) return (Yl = !1), Ch(l, a, t);
        Yl = (l.flags & 131072) !== 0;
      }
    else (Yl = !1), cl && (a.flags & 1048576) !== 0 && os(a, Iu, a.index);
    switch (((a.lanes = 0), a.tag)) {
      case 16:
        l: {
          l = a.pendingProps;
          var e = a.elementType,
            u = e._init;
          if (((e = u(e._payload)), (a.type = e), typeof e == "function"))
            Nc(e)
              ? ((l = Gt(e, l)), (a.tag = 1), (a = xr(null, a, e, l, t)))
              : ((a.tag = 0), (a = fi(null, a, e, l, t)));
          else {
            if (e != null) {
              if (((u = e.$$typeof), u === ia)) {
                (a.tag = 11), (a = Nr(null, a, e, l, t));
                break l;
              } else if (u === tl) {
                (a.tag = 14), (a = Tr(null, a, e, l, t));
                break l;
              }
            }
            throw ((a = qa(e) || e), Error(m(306, a, "")));
          }
        }
        return a;
      case 0:
        return fi(l, a, a.type, a.pendingProps, t);
      case 1:
        return (e = a.type), (u = Gt(e, a.pendingProps)), xr(l, a, e, u, t);
      case 3:
        l: {
          if ((V(a, a.stateNode.containerInfo), l === null))
            throw Error(m(387));
          e = a.pendingProps;
          var n = a.memoizedState;
          (u = n.element), Yc(l, a), tu(a, e, null, t);
          var c = a.memoizedState;
          if (
            ((e = c.cache),
            nt(a, Ul, e),
            e !== n.cache && Rc(a, [Ul], t, !0),
            au(),
            (e = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: c.cache }),
              (a.updateQueue.baseState = n),
              (a.memoizedState = n),
              a.flags & 256)
            ) {
              a = jr(l, a, e, t);
              break l;
            } else if (e !== u) {
              (u = ba(Error(m(424)), a)), $e(u), (a = jr(l, a, e, t));
              break l;
            } else {
              switch (((l = a.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                Al = Oa(l.firstChild),
                  Pl = a,
                  cl = !0,
                  Ht = null,
                  ja = !0,
                  t = hr(a, null, e, t),
                  a.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
            }
          else {
            if ((we(), e === u)) {
              a = $a(l, a, t);
              break l;
            }
            Zl(l, a, e, t);
          }
          a = a.child;
        }
        return a;
      case 26:
        return (
          Sn(l, a),
          l === null
            ? (t = Go(a.type, null, a.pendingProps, null))
              ? (a.memoizedState = t)
              : cl ||
                ((t = a.type),
                (l = a.pendingProps),
                (e = Hn(N.current).createElement(t)),
                (e[$l] = a),
                (e[ta] = l),
                Ll(e, t, l),
                Bl(e),
                (a.stateNode = e))
            : (a.memoizedState = Go(
                a.type,
                l.memoizedProps,
                a.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          zl(a),
          l === null &&
            cl &&
            ((e = a.stateNode = Bo(a.type, a.pendingProps, N.current)),
            (Pl = a),
            (ja = !0),
            (u = Al),
            zt(a.type) ? ((Wi = u), (Al = Oa(e.firstChild))) : (Al = u)),
          Zl(l, a, a.pendingProps.children, t),
          Sn(l, a),
          l === null && (a.flags |= 4194304),
          a.child
        );
      case 5:
        return (
          l === null &&
            cl &&
            ((u = e = Al) &&
              ((e = sm(e, a.type, a.pendingProps, ja)),
              e !== null
                ? ((a.stateNode = e),
                  (Pl = a),
                  (Al = Oa(e.firstChild)),
                  (ja = !1),
                  (u = !0))
                : (u = !1)),
            u || Ct(a)),
          zl(a),
          (u = a.type),
          (n = a.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (e = n.children),
          Ki(u, n) ? (e = null) : c !== null && Ki(u, c) && (a.flags |= 32),
          a.memoizedState !== null &&
            ((u = Lc(l, a, Oh, null, null, t)), (Nu._currentValue = u)),
          Sn(l, a),
          Zl(l, a, e, t),
          a.child
        );
      case 6:
        return (
          l === null &&
            cl &&
            ((l = t = Al) &&
              ((t = rm(t, a.pendingProps, ja)),
              t !== null
                ? ((a.stateNode = t), (Pl = a), (Al = null), (l = !0))
                : (l = !1)),
            l || Ct(a)),
          null
        );
      case 13:
        return Rr(l, a, t);
      case 4:
        return (
          V(a, a.stateNode.containerInfo),
          (e = a.pendingProps),
          l === null ? (a.child = ge(a, null, e, t)) : Zl(l, a, e, t),
          a.child
        );
      case 11:
        return Nr(l, a, a.type, a.pendingProps, t);
      case 7:
        return Zl(l, a, a.pendingProps, t), a.child;
      case 8:
        return Zl(l, a, a.pendingProps.children, t), a.child;
      case 12:
        return Zl(l, a, a.pendingProps.children, t), a.child;
      case 10:
        return (
          (e = a.pendingProps),
          nt(a, a.type, e.value),
          Zl(l, a, e.children, t),
          a.child
        );
      case 9:
        return (
          (u = a.type._context),
          (e = a.pendingProps.children),
          Bt(a),
          (u = Wl(u)),
          (e = e(u)),
          (a.flags |= 1),
          Zl(l, a, e, t),
          a.child
        );
      case 14:
        return Tr(l, a, a.type, a.pendingProps, t);
      case 15:
        return _r(l, a, a.type, a.pendingProps, t);
      case 19:
        return Hr(l, a, t);
      case 31:
        return (
          (e = a.pendingProps),
          (t = a.mode),
          (e = { mode: e.mode, children: e.children }),
          l === null
            ? ((t = zn(e, t)),
              (t.ref = a.ref),
              (a.child = t),
              (t.return = a),
              (a = t))
            : ((t = Qa(l.child, e)),
              (t.ref = a.ref),
              (a.child = t),
              (t.return = a),
              (a = t)),
          a
        );
      case 22:
        return Or(l, a, t);
      case 24:
        return (
          Bt(a),
          (e = Wl(Ul)),
          l === null
            ? ((u = Cc()),
              u === null &&
                ((u = vl),
                (n = Uc()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= t),
                (u = n)),
              (a.memoizedState = { parent: e, cache: u }),
              Bc(a),
              nt(a, Ul, u))
            : ((l.lanes & t) !== 0 && (Yc(l, a), tu(a, null, null, t), au()),
              (u = l.memoizedState),
              (n = a.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (a.memoizedState = u),
                  a.lanes === 0 &&
                    (a.memoizedState = a.updateQueue.baseState = u),
                  nt(a, Ul, e))
                : ((e = n.cache),
                  nt(a, Ul, e),
                  e !== u.cache && Rc(a, [Ul], t, !0))),
          Zl(l, a, a.pendingProps.children, t),
          a.child
        );
      case 29:
        throw a.pendingProps;
    }
    throw Error(m(156, a.tag));
  }
  function Wa(l) {
    l.flags |= 4;
  }
  function qr(l, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Ko(a))) {
      if (
        ((a = pa.current),
        a !== null &&
          ((el & 4194048) === el
            ? Ra !== null
            : ((el & 62914560) !== el && (el & 536870912) === 0) || a !== Ra))
      )
        throw ((Pe = qc), Ss);
      l.flags |= 8192;
    }
  }
  function An(l, a) {
    a !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((a = l.tag !== 22 ? mf() : 536870912), (l.lanes |= a), (Ae |= a));
  }
  function su(l, a) {
    if (!cl)
      switch (l.tailMode) {
        case "hidden":
          a = l.tail;
          for (var t = null; a !== null; )
            a.alternate !== null && (t = a), (a = a.sibling);
          t === null ? (l.tail = null) : (t.sibling = null);
          break;
        case "collapsed":
          t = l.tail;
          for (var e = null; t !== null; )
            t.alternate !== null && (e = t), (t = t.sibling);
          e === null
            ? a || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (e.sibling = null);
      }
  }
  function Sl(l) {
    var a = l.alternate !== null && l.alternate.child === l.child,
      t = 0,
      e = 0;
    if (a)
      for (var u = l.child; u !== null; )
        (t |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags & 65011712),
          (e |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling);
    else
      for (u = l.child; u !== null; )
        (t |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags),
          (e |= u.flags),
          (u.return = l),
          (u = u.sibling);
    return (l.subtreeFlags |= e), (l.childLanes = t), a;
  }
  function qh(l, a, t) {
    var e = a.pendingProps;
    switch ((Mc(a), a.tag)) {
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
        return Sl(a), null;
      case 1:
        return Sl(a), null;
      case 3:
        return (
          (t = a.stateNode),
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          a.memoizedState.cache !== e && (a.flags |= 2048),
          Ka(Ul),
          ql(),
          t.pendingContext &&
            ((t.context = t.pendingContext), (t.pendingContext = null)),
          (l === null || l.child === null) &&
            (Je(a)
              ? Wa(a)
              : l === null ||
                (l.memoizedState.isDehydrated && (a.flags & 256) === 0) ||
                ((a.flags |= 1024), ms())),
          Sl(a),
          null
        );
      case 26:
        return (
          (t = a.memoizedState),
          l === null
            ? (Wa(a),
              t !== null ? (Sl(a), qr(a, t)) : (Sl(a), (a.flags &= -16777217)))
            : t
            ? t !== l.memoizedState
              ? (Wa(a), Sl(a), qr(a, t))
              : (Sl(a), (a.flags &= -16777217))
            : (l.memoizedProps !== e && Wa(a), Sl(a), (a.flags &= -16777217)),
          null
        );
      case 27:
        yl(a), (t = N.current);
        var u = a.type;
        if (l !== null && a.stateNode != null) l.memoizedProps !== e && Wa(a);
        else {
          if (!e) {
            if (a.stateNode === null) throw Error(m(166));
            return Sl(a), null;
          }
          (l = h.current),
            Je(a) ? ds(a) : ((l = Bo(u, e, t)), (a.stateNode = l), Wa(a));
        }
        return Sl(a), null;
      case 5:
        if ((yl(a), (t = a.type), l !== null && a.stateNode != null))
          l.memoizedProps !== e && Wa(a);
        else {
          if (!e) {
            if (a.stateNode === null) throw Error(m(166));
            return Sl(a), null;
          }
          if (((l = h.current), Je(a))) ds(a);
          else {
            switch (((u = Hn(N.current)), l)) {
              case 1:
                l = u.createElementNS("http://www.w3.org/2000/svg", t);
                break;
              case 2:
                l = u.createElementNS("http://www.w3.org/1998/Math/MathML", t);
                break;
              default:
                switch (t) {
                  case "svg":
                    l = u.createElementNS("http://www.w3.org/2000/svg", t);
                    break;
                  case "math":
                    l = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      t
                    );
                    break;
                  case "script":
                    (l = u.createElement("div")),
                      (l.innerHTML = "<script></script>"),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case "select":
                    (l =
                      typeof e.is == "string"
                        ? u.createElement("select", { is: e.is })
                        : u.createElement("select")),
                      e.multiple
                        ? (l.multiple = !0)
                        : e.size && (l.size = e.size);
                    break;
                  default:
                    l =
                      typeof e.is == "string"
                        ? u.createElement(t, { is: e.is })
                        : u.createElement(t);
                }
            }
            (l[$l] = a), (l[ta] = e);
            l: for (u = a.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) l.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === a) break l;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === a) break l;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            a.stateNode = l;
            l: switch ((Ll(l, t, e), t)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!e.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Wa(a);
          }
        }
        return Sl(a), (a.flags &= -16777217), null;
      case 6:
        if (l && a.stateNode != null) l.memoizedProps !== e && Wa(a);
        else {
          if (typeof e != "string" && a.stateNode === null) throw Error(m(166));
          if (((l = N.current), Je(a))) {
            if (
              ((l = a.stateNode),
              (t = a.memoizedProps),
              (e = null),
              (u = Pl),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            (l[$l] = a),
              (l = !!(
                l.nodeValue === t ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                xo(l.nodeValue, t)
              )),
              l || Ct(a);
          } else (l = Hn(l).createTextNode(e)), (l[$l] = a), (a.stateNode = l);
        }
        return Sl(a), null;
      case 13:
        if (
          ((e = a.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = Je(a)), e !== null && e.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(m(318));
              if (
                ((u = a.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(m(317));
              u[$l] = a;
            } else
              we(),
                (a.flags & 128) === 0 && (a.memoizedState = null),
                (a.flags |= 4);
            Sl(a), (u = !1);
          } else
            (u = ms()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return a.flags & 256 ? (wa(a), a) : (wa(a), null);
        }
        if ((wa(a), (a.flags & 128) !== 0)) return (a.lanes = t), a;
        if (
          ((t = e !== null), (l = l !== null && l.memoizedState !== null), t)
        ) {
          (e = a.child),
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
          t !== l && t && (a.child.flags |= 8192),
          An(a, a.updateQueue),
          Sl(a),
          null
        );
      case 4:
        return ql(), l === null && Gi(a.stateNode.containerInfo), Sl(a), null;
      case 10:
        return Ka(a.type), Sl(a), null;
      case 19:
        if ((R(Hl), (u = a.memoizedState), u === null)) return Sl(a), null;
        if (((e = (a.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) su(u, !1);
          else {
            if (pl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = a.child; l !== null; ) {
                if (((n = yn(l)), n !== null)) {
                  for (
                    a.flags |= 128,
                      su(u, !1),
                      l = n.updateQueue,
                      a.updateQueue = l,
                      An(a, l),
                      a.subtreeFlags = 0,
                      l = t,
                      t = a.child;
                    t !== null;

                  )
                    rs(t, l), (t = t.sibling);
                  return D(Hl, (Hl.current & 1) | 2), a.child;
                }
                l = l.sibling;
              }
            u.tail !== null &&
              aa() > Nn &&
              ((a.flags |= 128), (e = !0), su(u, !1), (a.lanes = 4194304));
          }
        else {
          if (!e)
            if (((l = yn(n)), l !== null)) {
              if (
                ((a.flags |= 128),
                (e = !0),
                (l = l.updateQueue),
                (a.updateQueue = l),
                An(a, l),
                su(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !cl)
              )
                return Sl(a), null;
            } else
              2 * aa() - u.renderingStartTime > Nn &&
                t !== 536870912 &&
                ((a.flags |= 128), (e = !0), su(u, !1), (a.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = a.child), (a.child = n))
            : ((l = u.last),
              l !== null ? (l.sibling = n) : (a.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((a = u.tail),
            (u.rendering = a),
            (u.tail = a.sibling),
            (u.renderingStartTime = aa()),
            (a.sibling = null),
            (l = Hl.current),
            D(Hl, e ? (l & 1) | 2 : l & 1),
            a)
          : (Sl(a), null);
      case 22:
      case 23:
        return (
          wa(a),
          Zc(),
          (e = a.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== e && (a.flags |= 8192)
            : e && (a.flags |= 8192),
          e
            ? (t & 536870912) !== 0 &&
              (a.flags & 128) === 0 &&
              (Sl(a), a.subtreeFlags & 6 && (a.flags |= 8192))
            : Sl(a),
          (t = a.updateQueue),
          t !== null && An(a, t.retryQueue),
          (t = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (t = l.memoizedState.cachePool.pool),
          (e = null),
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (e = a.memoizedState.cachePool.pool),
          e !== t && (a.flags |= 2048),
          l !== null && R(Yt),
          null
        );
      case 24:
        return (
          (t = null),
          l !== null && (t = l.memoizedState.cache),
          a.memoizedState.cache !== t && (a.flags |= 2048),
          Ka(Ul),
          Sl(a),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, a.tag));
  }
  function Bh(l, a) {
    switch ((Mc(a), a.tag)) {
      case 1:
        return (
          (l = a.flags), l & 65536 ? ((a.flags = (l & -65537) | 128), a) : null
        );
      case 3:
        return (
          Ka(Ul),
          ql(),
          (l = a.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((a.flags = (l & -65537) | 128), a)
            : null
        );
      case 26:
      case 27:
      case 5:
        return yl(a), null;
      case 13:
        if (
          (wa(a), (l = a.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (a.alternate === null) throw Error(m(340));
          we();
        }
        return (
          (l = a.flags), l & 65536 ? ((a.flags = (l & -65537) | 128), a) : null
        );
      case 19:
        return R(Hl), null;
      case 4:
        return ql(), null;
      case 10:
        return Ka(a.type), null;
      case 22:
      case 23:
        return (
          wa(a),
          Zc(),
          l !== null && R(Yt),
          (l = a.flags),
          l & 65536 ? ((a.flags = (l & -65537) | 128), a) : null
        );
      case 24:
        return Ka(Ul), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Br(l, a) {
    switch ((Mc(a), a.tag)) {
      case 3:
        Ka(Ul), ql();
        break;
      case 26:
      case 27:
      case 5:
        yl(a);
        break;
      case 4:
        ql();
        break;
      case 13:
        wa(a);
        break;
      case 19:
        R(Hl);
        break;
      case 10:
        Ka(a.type);
        break;
      case 22:
      case 23:
        wa(a), Zc(), l !== null && R(Yt);
        break;
      case 24:
        Ka(Ul);
    }
  }
  function ru(l, a) {
    try {
      var t = a.updateQueue,
        e = t !== null ? t.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        t = u;
        do {
          if ((t.tag & l) === l) {
            e = void 0;
            var n = t.create,
              c = t.inst;
            (e = n()), (c.destroy = e);
          }
          t = t.next;
        } while (t !== u);
      }
    } catch (i) {
      ml(a, a.return, i);
    }
  }
  function dt(l, a, t) {
    try {
      var e = a.updateQueue,
        u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var c = e.inst,
              i = c.destroy;
            if (i !== void 0) {
              (c.destroy = void 0), (u = a);
              var f = t,
                y = i;
              try {
                y();
              } catch (z) {
                ml(u, f, z);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (z) {
      ml(a, a.return, z);
    }
  }
  function Yr(l) {
    var a = l.updateQueue;
    if (a !== null) {
      var t = l.stateNode;
      try {
        Ts(a, t);
      } catch (e) {
        ml(l, l.return, e);
      }
    }
  }
  function Xr(l, a, t) {
    (t.props = Gt(l.type, l.memoizedProps)), (t.state = l.memoizedState);
    try {
      t.componentWillUnmount();
    } catch (e) {
      ml(l, a, e);
    }
  }
  function ou(l, a) {
    try {
      var t = l.ref;
      if (t !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof t == "function" ? (l.refCleanup = t(e)) : (t.current = e);
      }
    } catch (u) {
      ml(l, a, u);
    }
  }
  function Ua(l, a) {
    var t = l.ref,
      e = l.refCleanup;
    if (t !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          ml(l, a, u);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (u) {
          ml(l, a, u);
        }
      else t.current = null;
  }
  function Gr(l) {
    var a = l.type,
      t = l.memoizedProps,
      e = l.stateNode;
    try {
      l: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && e.focus();
          break l;
        case "img":
          t.src ? (e.src = t.src) : t.srcSet && (e.srcset = t.srcSet);
      }
    } catch (u) {
      ml(l, l.return, u);
    }
  }
  function yi(l, a, t) {
    try {
      var e = l.stateNode;
      um(e, l.type, t, a), (e[ta] = a);
    } catch (u) {
      ml(l, l.return, u);
    }
  }
  function Qr(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && zt(l.type)) ||
      l.tag === 4
    );
  }
  function gi(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Qr(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && zt(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function bi(l, a, t) {
    var e = l.tag;
    if (e === 5 || e === 6)
      (l = l.stateNode),
        a
          ? (t.nodeType === 9
              ? t.body
              : t.nodeName === "HTML"
              ? t.ownerDocument.body
              : t
            ).insertBefore(l, a)
          : ((a =
              t.nodeType === 9
                ? t.body
                : t.nodeName === "HTML"
                ? t.ownerDocument.body
                : t),
            a.appendChild(l),
            (t = t._reactRootContainer),
            t != null || a.onclick !== null || (a.onclick = Un));
    else if (
      e !== 4 &&
      (e === 27 && zt(l.type) && ((t = l.stateNode), (a = null)),
      (l = l.child),
      l !== null)
    )
      for (bi(l, a, t), l = l.sibling; l !== null; )
        bi(l, a, t), (l = l.sibling);
  }
  function pn(l, a, t) {
    var e = l.tag;
    if (e === 5 || e === 6)
      (l = l.stateNode), a ? t.insertBefore(l, a) : t.appendChild(l);
    else if (
      e !== 4 &&
      (e === 27 && zt(l.type) && (t = l.stateNode), (l = l.child), l !== null)
    )
      for (pn(l, a, t), l = l.sibling; l !== null; )
        pn(l, a, t), (l = l.sibling);
  }
  function Zr(l) {
    var a = l.stateNode,
      t = l.memoizedProps;
    try {
      for (var e = l.type, u = a.attributes; u.length; )
        a.removeAttributeNode(u[0]);
      Ll(a, e, t), (a[$l] = l), (a[ta] = t);
    } catch (n) {
      ml(l, l.return, n);
    }
  }
  var ka = !1,
    _l = !1,
    Si = !1,
    Vr = typeof WeakSet == "function" ? WeakSet : Set,
    Xl = null;
  function Yh(l, a) {
    if (((l = l.containerInfo), (Vi = Gn), (l = ls(l)), gc(l))) {
      if ("selectionStart" in l)
        var t = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          t = ((t = l.ownerDocument) && t.defaultView) || window;
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
              break l;
            }
            var c = 0,
              i = -1,
              f = -1,
              y = 0,
              z = 0,
              E = l,
              g = null;
            a: for (;;) {
              for (
                var b;
                E !== t || (u !== 0 && E.nodeType !== 3) || (i = c + u),
                  E !== n || (e !== 0 && E.nodeType !== 3) || (f = c + e),
                  E.nodeType === 3 && (c += E.nodeValue.length),
                  (b = E.firstChild) !== null;

              )
                (g = E), (E = b);
              for (;;) {
                if (E === l) break a;
                if (
                  (g === t && ++y === u && (i = c),
                  g === n && ++z === e && (f = c),
                  (b = E.nextSibling) !== null)
                )
                  break;
                (E = g), (g = E.parentNode);
              }
              E = b;
            }
            t = i === -1 || f === -1 ? null : { start: i, end: f };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      Li = { focusedElem: l, selectionRange: t }, Gn = !1, Xl = a;
      Xl !== null;

    )
      if (
        ((a = Xl), (l = a.child), (a.subtreeFlags & 1024) !== 0 && l !== null)
      )
        (l.return = a), (Xl = l);
      else
        for (; Xl !== null; ) {
          switch (((a = Xl), (n = a.alternate), (l = a.flags), a.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                (l = void 0),
                  (t = a),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (e = t.stateNode);
                try {
                  var K = Gt(t.type, u, t.elementType === t.type);
                  (l = e.getSnapshotBeforeUpdate(K, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = l);
                } catch (Z) {
                  ml(t, t.return, Z);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = a.stateNode.containerInfo), (t = l.nodeType), t === 9)
                )
                  wi(l);
                else if (t === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      wi(l);
                      break;
                    default:
                      l.textContent = "";
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
              if ((l & 1024) !== 0) throw Error(m(163));
          }
          if (((l = a.sibling), l !== null)) {
            (l.return = a.return), (Xl = l);
            break;
          }
          Xl = a.return;
        }
  }
  function Lr(l, a, t) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ht(l, t), e & 4 && ru(5, t);
        break;
      case 1:
        if ((ht(l, t), e & 4))
          if (((l = t.stateNode), a === null))
            try {
              l.componentDidMount();
            } catch (c) {
              ml(t, t.return, c);
            }
          else {
            var u = Gt(t.type, a.memoizedProps);
            a = a.memoizedState;
            try {
              l.componentDidUpdate(u, a, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              ml(t, t.return, c);
            }
          }
        e & 64 && Yr(t), e & 512 && ou(t, t.return);
        break;
      case 3:
        if ((ht(l, t), e & 64 && ((l = t.updateQueue), l !== null))) {
          if (((a = null), t.child !== null))
            switch (t.child.tag) {
              case 27:
              case 5:
                a = t.child.stateNode;
                break;
              case 1:
                a = t.child.stateNode;
            }
          try {
            Ts(l, a);
          } catch (c) {
            ml(t, t.return, c);
          }
        }
        break;
      case 27:
        a === null && e & 4 && Zr(t);
      case 26:
      case 5:
        ht(l, t), a === null && e & 4 && Gr(t), e & 512 && ou(t, t.return);
        break;
      case 12:
        ht(l, t);
        break;
      case 13:
        ht(l, t),
          e & 4 && wr(l, t),
          e & 64 &&
            ((l = t.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((t = wh.bind(null, t)), om(l, t))));
        break;
      case 22:
        if (((e = t.memoizedState !== null || ka), !e)) {
          (a = (a !== null && a.memoizedState !== null) || _l), (u = ka);
          var n = _l;
          (ka = e),
            (_l = a) && !n ? mt(l, t, (t.subtreeFlags & 8772) !== 0) : ht(l, t),
            (ka = u),
            (_l = n);
        }
        break;
      case 30:
        break;
      default:
        ht(l, t);
    }
  }
  function Kr(l) {
    var a = l.alternate;
    a !== null && ((l.alternate = null), Kr(a)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((a = l.stateNode), a !== null && In(a)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var gl = null,
    na = !1;
  function Fa(l, a, t) {
    for (t = t.child; t !== null; ) Jr(l, a, t), (t = t.sibling);
  }
  function Jr(l, a, t) {
    if (Ql && typeof Ql.onCommitFiberUnmount == "function")
      try {
        Ql.onCommitFiberUnmount(Ya, t);
      } catch {}
    switch (t.tag) {
      case 26:
        _l || Ua(t, a),
          Fa(l, a, t),
          t.memoizedState
            ? t.memoizedState.count--
            : t.stateNode && ((t = t.stateNode), t.parentNode.removeChild(t));
        break;
      case 27:
        _l || Ua(t, a);
        var e = gl,
          u = na;
        zt(t.type) && ((gl = t.stateNode), (na = !1)),
          Fa(l, a, t),
          zu(t.stateNode),
          (gl = e),
          (na = u);
        break;
      case 5:
        _l || Ua(t, a);
      case 6:
        if (
          ((e = gl),
          (u = na),
          (gl = null),
          Fa(l, a, t),
          (gl = e),
          (na = u),
          gl !== null)
        )
          if (na)
            try {
              (gl.nodeType === 9
                ? gl.body
                : gl.nodeName === "HTML"
                ? gl.ownerDocument.body
                : gl
              ).removeChild(t.stateNode);
            } catch (n) {
              ml(t, a, n);
            }
          else
            try {
              gl.removeChild(t.stateNode);
            } catch (n) {
              ml(t, a, n);
            }
        break;
      case 18:
        gl !== null &&
          (na
            ? ((l = gl),
              Co(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                t.stateNode
              ),
              Mu(l))
            : Co(gl, t.stateNode));
        break;
      case 4:
        (e = gl),
          (u = na),
          (gl = t.stateNode.containerInfo),
          (na = !0),
          Fa(l, a, t),
          (gl = e),
          (na = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _l || dt(2, t, a), _l || dt(4, t, a), Fa(l, a, t);
        break;
      case 1:
        _l ||
          (Ua(t, a),
          (e = t.stateNode),
          typeof e.componentWillUnmount == "function" && Xr(t, a, e)),
          Fa(l, a, t);
        break;
      case 21:
        Fa(l, a, t);
        break;
      case 22:
        (_l = (e = _l) || t.memoizedState !== null), Fa(l, a, t), (_l = e);
        break;
      default:
        Fa(l, a, t);
    }
  }
  function wr(l, a) {
    if (
      a.memoizedState === null &&
      ((l = a.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Mu(l);
      } catch (t) {
        ml(a, a.return, t);
      }
  }
  function Xh(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var a = l.stateNode;
        return a === null && (a = l.stateNode = new Vr()), a;
      case 22:
        return (
          (l = l.stateNode),
          (a = l._retryCache),
          a === null && (a = l._retryCache = new Vr()),
          a
        );
      default:
        throw Error(m(435, l.tag));
    }
  }
  function zi(l, a) {
    var t = Xh(l);
    a.forEach(function (e) {
      var u = $h.bind(null, l, e);
      t.has(e) || (t.add(e), e.then(u, u));
    });
  }
  function oa(l, a) {
    var t = a.deletions;
    if (t !== null)
      for (var e = 0; e < t.length; e++) {
        var u = t[e],
          n = l,
          c = a,
          i = c;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (zt(i.type)) {
                (gl = i.stateNode), (na = !1);
                break l;
              }
              break;
            case 5:
              (gl = i.stateNode), (na = !1);
              break l;
            case 3:
            case 4:
              (gl = i.stateNode.containerInfo), (na = !0);
              break l;
          }
          i = i.return;
        }
        if (gl === null) throw Error(m(160));
        Jr(n, c, u),
          (gl = null),
          (na = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (a.subtreeFlags & 13878)
      for (a = a.child; a !== null; ) $r(a, l), (a = a.sibling);
  }
  var _a = null;
  function $r(l, a) {
    var t = l.alternate,
      e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        oa(a, l),
          da(l),
          e & 4 && (dt(3, l, l.return), ru(3, l), dt(5, l, l.return));
        break;
      case 1:
        oa(a, l),
          da(l),
          e & 512 && (_l || t === null || Ua(t, t.return)),
          e & 64 &&
            ka &&
            ((l = l.updateQueue),
            l !== null &&
              ((e = l.callbacks),
              e !== null &&
                ((t = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = t === null ? e : t.concat(e)))));
        break;
      case 26:
        var u = _a;
        if (
          (oa(a, l),
          da(l),
          e & 512 && (_l || t === null || Ua(t, t.return)),
          e & 4)
        ) {
          var n = t !== null ? t.memoizedState : null;
          if (((e = l.memoizedState), t === null))
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  (e = l.type),
                    (t = l.memoizedProps),
                    (u = u.ownerDocument || u);
                  a: switch (e) {
                    case "title":
                      (n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ce] ||
                          n[$l] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        Ll(n, e, t),
                        (n[$l] = l),
                        Bl(n),
                        (e = n);
                      break l;
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
                            break a;
                          }
                      }
                      (n = u.createElement(e)),
                        Ll(n, e, t),
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
                            break a;
                          }
                      }
                      (n = u.createElement(e)),
                        Ll(n, e, t),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, e));
                  }
                  (n[$l] = l), Bl(n), (e = n);
                }
                l.stateNode = e;
              } else Lo(u, l.type, l.stateNode);
            else l.stateNode = Zo(u, e, l.memoizedProps);
          else
            n !== e
              ? (n === null
                  ? t.stateNode !== null &&
                    ((t = t.stateNode), t.parentNode.removeChild(t))
                  : n.count--,
                e === null
                  ? Lo(u, l.type, l.stateNode)
                  : Zo(u, e, l.memoizedProps))
              : e === null &&
                l.stateNode !== null &&
                yi(l, l.memoizedProps, t.memoizedProps);
        }
        break;
      case 27:
        oa(a, l),
          da(l),
          e & 512 && (_l || t === null || Ua(t, t.return)),
          t !== null && e & 4 && yi(l, l.memoizedProps, t.memoizedProps);
        break;
      case 5:
        if (
          (oa(a, l),
          da(l),
          e & 512 && (_l || t === null || Ua(t, t.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            Pt(u, "");
          } catch (b) {
            ml(l, l.return, b);
          }
        }
        e & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), yi(l, u, t !== null ? t.memoizedProps : u)),
          e & 1024 && (Si = !0);
        break;
      case 6:
        if ((oa(a, l), da(l), e & 4)) {
          if (l.stateNode === null) throw Error(m(162));
          (e = l.memoizedProps), (t = l.stateNode);
          try {
            t.nodeValue = e;
          } catch (b) {
            ml(l, l.return, b);
          }
        }
        break;
      case 3:
        if (
          ((Bn = null),
          (u = _a),
          (_a = Cn(a.containerInfo)),
          oa(a, l),
          (_a = u),
          da(l),
          e & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Mu(a.containerInfo);
          } catch (b) {
            ml(l, l.return, b);
          }
        Si && ((Si = !1), Wr(l));
        break;
      case 4:
        (e = _a),
          (_a = Cn(l.stateNode.containerInfo)),
          oa(a, l),
          da(l),
          (_a = e);
        break;
      case 12:
        oa(a, l), da(l);
        break;
      case 13:
        oa(a, l),
          da(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (t !== null && t.memoizedState !== null) &&
            (_i = aa()),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), zi(l, e)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = t !== null && t.memoizedState !== null,
          y = ka,
          z = _l;
        if (
          ((ka = y || u),
          (_l = z || f),
          oa(a, l),
          (_l = z),
          (ka = y),
          da(l),
          e & 8192)
        )
          l: for (
            a = l.stateNode,
              a._visibility = u ? a._visibility & -2 : a._visibility | 1,
              u && (t === null || f || ka || _l || Qt(l)),
              t = null,
              a = l;
            ;

          ) {
            if (a.tag === 5 || a.tag === 26) {
              if (t === null) {
                f = t = a;
                try {
                  if (((n = f.stateNode), u))
                    (c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    i = f.stateNode;
                    var E = f.memoizedProps.style,
                      g =
                        E != null && E.hasOwnProperty("display")
                          ? E.display
                          : null;
                    i.style.display =
                      g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (b) {
                  ml(f, f.return, b);
                }
              }
            } else if (a.tag === 6) {
              if (t === null) {
                f = a;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (b) {
                  ml(f, f.return, b);
                }
              }
            } else if (
              ((a.tag !== 22 && a.tag !== 23) ||
                a.memoizedState === null ||
                a === l) &&
              a.child !== null
            ) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === l) break l;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === l) break l;
              t === a && (t = null), (a = a.return);
            }
            t === a && (t = null),
              (a.sibling.return = a.return),
              (a = a.sibling);
          }
        e & 4 &&
          ((e = l.updateQueue),
          e !== null &&
            ((t = e.retryQueue),
            t !== null && ((e.retryQueue = null), zi(l, t))));
        break;
      case 19:
        oa(a, l),
          da(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), zi(l, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        oa(a, l), da(l);
    }
  }
  function da(l) {
    var a = l.flags;
    if (a & 2) {
      try {
        for (var t, e = l.return; e !== null; ) {
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
              n = gi(l);
            pn(l, n, u);
            break;
          case 5:
            var c = t.stateNode;
            t.flags & 32 && (Pt(c, ""), (t.flags &= -33));
            var i = gi(l);
            pn(l, i, c);
            break;
          case 3:
          case 4:
            var f = t.stateNode.containerInfo,
              y = gi(l);
            bi(l, y, f);
            break;
          default:
            throw Error(m(161));
        }
      } catch (z) {
        ml(l, l.return, z);
      }
      l.flags &= -3;
    }
    a & 4096 && (l.flags &= -4097);
  }
  function Wr(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var a = l;
        Wr(a),
          a.tag === 5 && a.flags & 1024 && a.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function ht(l, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; ) Lr(l, a.alternate, a), (a = a.sibling);
  }
  function Qt(l) {
    for (l = l.child; l !== null; ) {
      var a = l;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          dt(4, a, a.return), Qt(a);
          break;
        case 1:
          Ua(a, a.return);
          var t = a.stateNode;
          typeof t.componentWillUnmount == "function" && Xr(a, a.return, t),
            Qt(a);
          break;
        case 27:
          zu(a.stateNode);
        case 26:
        case 5:
          Ua(a, a.return), Qt(a);
          break;
        case 22:
          a.memoizedState === null && Qt(a);
          break;
        case 30:
          Qt(a);
          break;
        default:
          Qt(a);
      }
      l = l.sibling;
    }
  }
  function mt(l, a, t) {
    for (t = t && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var e = a.alternate,
        u = l,
        n = a,
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
              ml(e, e.return, y);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var i = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  Ns(f[u], i);
            } catch (y) {
              ml(e, e.return, y);
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
      a = a.sibling;
    }
  }
  function Ai(l, a) {
    var t = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (t = l.memoizedState.cachePool.pool),
      (l = null),
      a.memoizedState !== null &&
        a.memoizedState.cachePool !== null &&
        (l = a.memoizedState.cachePool.pool),
      l !== t && (l != null && l.refCount++, t != null && ke(t));
  }
  function pi(l, a) {
    (l = null),
      a.alternate !== null && (l = a.alternate.memoizedState.cache),
      (a = a.memoizedState.cache),
      a !== l && (a.refCount++, l != null && ke(l));
  }
  function Ha(l, a, t, e) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) kr(l, a, t, e), (a = a.sibling);
  }
  function kr(l, a, t, e) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Ha(l, a, t, e), u & 2048 && ru(9, a);
        break;
      case 1:
        Ha(l, a, t, e);
        break;
      case 3:
        Ha(l, a, t, e),
          u & 2048 &&
            ((l = null),
            a.alternate !== null && (l = a.alternate.memoizedState.cache),
            (a = a.memoizedState.cache),
            a !== l && (a.refCount++, l != null && ke(l)));
        break;
      case 12:
        if (u & 2048) {
          Ha(l, a, t, e), (l = a.stateNode);
          try {
            var n = a.memoizedProps,
              c = n.id,
              i = n.onPostCommit;
            typeof i == "function" &&
              i(
                c,
                a.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (f) {
            ml(a, a.return, f);
          }
        } else Ha(l, a, t, e);
        break;
      case 13:
        Ha(l, a, t, e);
        break;
      case 23:
        break;
      case 22:
        (n = a.stateNode),
          (c = a.alternate),
          a.memoizedState !== null
            ? n._visibility & 2
              ? Ha(l, a, t, e)
              : du(l, a)
            : n._visibility & 2
            ? Ha(l, a, t, e)
            : ((n._visibility |= 2),
              be(l, a, t, e, (a.subtreeFlags & 10256) !== 0)),
          u & 2048 && Ai(c, a);
        break;
      case 24:
        Ha(l, a, t, e), u & 2048 && pi(a.alternate, a);
        break;
      default:
        Ha(l, a, t, e);
    }
  }
  function be(l, a, t, e, u) {
    for (u = u && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null; ) {
      var n = l,
        c = a,
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
            u && y & 2048 && Ai(c.alternate, c);
          break;
        case 24:
          be(n, c, i, f, u), u && y & 2048 && pi(c.alternate, c);
          break;
        default:
          be(n, c, i, f, u);
      }
      a = a.sibling;
    }
  }
  function du(l, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var t = l,
          e = a,
          u = e.flags;
        switch (e.tag) {
          case 22:
            du(t, e), u & 2048 && Ai(e.alternate, e);
            break;
          case 24:
            du(t, e), u & 2048 && pi(e.alternate, e);
            break;
          default:
            du(t, e);
        }
        a = a.sibling;
      }
  }
  var hu = 8192;
  function Se(l) {
    if (l.subtreeFlags & hu)
      for (l = l.child; l !== null; ) Fr(l), (l = l.sibling);
  }
  function Fr(l) {
    switch (l.tag) {
      case 26:
        Se(l),
          l.flags & hu &&
            l.memoizedState !== null &&
            Nm(_a, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        Se(l);
        break;
      case 3:
      case 4:
        var a = _a;
        (_a = Cn(l.stateNode.containerInfo)), Se(l), (_a = a);
        break;
      case 22:
        l.memoizedState === null &&
          ((a = l.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = hu), (hu = 16777216), Se(l), (hu = a))
            : Se(l));
        break;
      default:
        Se(l);
    }
  }
  function Ir(l) {
    var a = l.alternate;
    if (a !== null && ((l = a.child), l !== null)) {
      a.child = null;
      do (a = l.sibling), (l.sibling = null), (l = a);
      while (l !== null);
    }
  }
  function mu(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var e = a[t];
          (Xl = e), lo(e, l);
        }
      Ir(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Pr(l), (l = l.sibling);
  }
  function Pr(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        mu(l), l.flags & 2048 && dt(9, l, l.return);
        break;
      case 3:
        mu(l);
        break;
      case 12:
        mu(l);
        break;
      case 22:
        var a = l.stateNode;
        l.memoizedState !== null &&
        a._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((a._visibility &= -3), En(l))
          : mu(l);
        break;
      default:
        mu(l);
    }
  }
  function En(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var e = a[t];
          (Xl = e), lo(e, l);
        }
      Ir(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((a = l), a.tag)) {
        case 0:
        case 11:
        case 15:
          dt(8, a, a.return), En(a);
          break;
        case 22:
          (t = a.stateNode),
            t._visibility & 2 && ((t._visibility &= -3), En(a));
          break;
        default:
          En(a);
      }
      l = l.sibling;
    }
  }
  function lo(l, a) {
    for (; Xl !== null; ) {
      var t = Xl;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          dt(8, t, a);
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
      if (((e = t.child), e !== null)) (e.return = t), (Xl = e);
      else
        l: for (t = l; Xl !== null; ) {
          e = Xl;
          var u = e.sibling,
            n = e.return;
          if ((Kr(e), e === t)) {
            Xl = null;
            break l;
          }
          if (u !== null) {
            (u.return = n), (Xl = u);
            break l;
          }
          Xl = n;
        }
    }
  }
  var Gh = {
      getCacheForType: function (l) {
        var a = Wl(Ul),
          t = a.data.get(l);
        return t === void 0 && ((t = l()), a.data.set(l, t)), t;
      },
    },
    Qh = typeof WeakMap == "function" ? WeakMap : Map,
    sl = 0,
    vl = null,
    I = null,
    el = 0,
    rl = 0,
    ha = null,
    vt = !1,
    ze = !1,
    Ei = !1,
    Ia = 0,
    pl = 0,
    yt = 0,
    Zt = 0,
    Ni = 0,
    Ea = 0,
    Ae = 0,
    vu = null,
    ca = null,
    Ti = !1,
    _i = 0,
    Nn = 1 / 0,
    Tn = null,
    gt = null,
    Vl = 0,
    bt = null,
    pe = null,
    Ee = 0,
    Oi = 0,
    Mi = null,
    ao = null,
    yu = 0,
    Di = null;
  function ma() {
    if ((sl & 2) !== 0 && el !== 0) return el & -el;
    if (S.T !== null) {
      var l = re;
      return l !== 0 ? l : qi();
    }
    return gf();
  }
  function to() {
    Ea === 0 && (Ea = (el & 536870912) === 0 || cl ? hf() : 536870912);
    var l = pa.current;
    return l !== null && (l.flags |= 32), Ea;
  }
  function va(l, a, t) {
    ((l === vl && (rl === 2 || rl === 9)) || l.cancelPendingCommit !== null) &&
      (Ne(l, 0), St(l, el, Ea, !1)),
      He(l, t),
      ((sl & 2) === 0 || l !== vl) &&
        (l === vl &&
          ((sl & 2) === 0 && (Zt |= t), pl === 4 && St(l, el, Ea, !1)),
        Ca(l));
  }
  function eo(l, a, t) {
    if ((sl & 6) !== 0) throw Error(m(327));
    var e = (!t && (a & 124) === 0 && (a & l.expiredLanes) === 0) || Ue(l, a),
      u = e ? Lh(l, a) : Ri(l, a, !0),
      n = e;
    do {
      if (u === 0) {
        ze && !e && St(l, a, 0, !1);
        break;
      } else {
        if (((t = l.current.alternate), n && !Zh(t))) {
          (u = Ri(l, a, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = a), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            (c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            a = c;
            l: {
              var i = l;
              u = vu;
              var f = i.current.memoizedState.isDehydrated;
              if ((f && (Ne(i, c).flags |= 256), (c = Ri(i, c, !1)), c !== 2)) {
                if (Ei && !f) {
                  (i.errorRecoveryDisabledLanes |= n), (Zt |= n), (u = 4);
                  break l;
                }
                (n = ca),
                  (ca = u),
                  n !== null && (ca === null ? (ca = n) : ca.push.apply(ca, n));
              }
              u = c;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Ne(l, 0), St(l, a, 0, !0);
          break;
        }
        l: {
          switch (((e = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              St(e, a, Ea, !vt);
              break l;
            case 2:
              ca = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((a & 62914560) === a && ((u = _i + 300 - aa()), 10 < u)) {
            if ((St(e, a, Ea, !vt), Cu(e, 0, !0) !== 0)) break l;
            e.timeoutHandle = Uo(
              uo.bind(null, e, t, ca, Tn, Ti, a, Ea, Zt, Ae, vt, n, 2, -0, 0),
              u
            );
            break l;
          }
          uo(e, t, ca, Tn, Ti, a, Ea, Zt, Ae, vt, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ca(l);
  }
  function uo(l, a, t, e, u, n, c, i, f, y, z, E, g, b) {
    if (
      ((l.timeoutHandle = -1),
      (E = a.subtreeFlags),
      (E & 8192 || (E & 16785408) === 16785408) &&
        ((Eu = { stylesheets: null, count: 0, unsuspend: Em }),
        Fr(a),
        (E = Tm()),
        E !== null))
    ) {
      (l.cancelPendingCommit = E(
        oo.bind(null, l, a, n, t, e, u, c, i, f, z, 1, g, b)
      )),
        St(l, n, c, !y);
      return;
    }
    oo(l, a, n, t, e, u, c, i, f);
  }
  function Zh(l) {
    for (var a = l; ; ) {
      var t = a.tag;
      if (
        (t === 0 || t === 11 || t === 15) &&
        a.flags & 16384 &&
        ((t = a.updateQueue), t !== null && ((t = t.stores), t !== null))
      )
        for (var e = 0; e < t.length; e++) {
          var u = t[e],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!sa(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((t = a.child), a.subtreeFlags & 16384 && t !== null))
        (t.return = a), (a = t);
      else {
        if (a === l) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === l) return !0;
          a = a.return;
        }
        (a.sibling.return = a.return), (a = a.sibling);
      }
    }
    return !0;
  }
  function St(l, a, t, e) {
    (a &= ~Ni),
      (a &= ~Zt),
      (l.suspendedLanes |= a),
      (l.pingedLanes &= ~a),
      e && (l.warmLanes |= a),
      (e = l.expirationTimes);
    for (var u = a; 0 < u; ) {
      var n = 31 - fa(u),
        c = 1 << n;
      (e[n] = -1), (u &= ~c);
    }
    t !== 0 && vf(l, t, a);
  }
  function _n() {
    return (sl & 6) === 0 ? (gu(0), !1) : !0;
  }
  function xi() {
    if (I !== null) {
      if (rl === 0) var l = I.return;
      else (l = I), (La = qt = null), wc(l), (ye = null), (iu = 0), (l = I);
      for (; l !== null; ) Br(l.alternate, l), (l = l.return);
      I = null;
    }
  }
  function Ne(l, a) {
    var t = l.timeoutHandle;
    t !== -1 && ((l.timeoutHandle = -1), cm(t)),
      (t = l.cancelPendingCommit),
      t !== null && ((l.cancelPendingCommit = null), t()),
      xi(),
      (vl = l),
      (I = t = Qa(l.current, null)),
      (el = a),
      (rl = 0),
      (ha = null),
      (vt = !1),
      (ze = Ue(l, a)),
      (Ei = !1),
      (Ae = Ea = Ni = Zt = yt = pl = 0),
      (ca = vu = null),
      (Ti = !1),
      (a & 8) !== 0 && (a |= a & 32);
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= a; 0 < e; ) {
        var u = 31 - fa(e),
          n = 1 << u;
        (a |= l[u]), (e &= ~n);
      }
    return (Ia = a), wu(), t;
  }
  function no(l, a) {
    (W = null),
      (S.H = hn),
      a === Ie || a === tn
        ? ((a = ps()), (rl = 3))
        : a === Ss
        ? ((a = ps()), (rl = 4))
        : (rl =
            a === Er
              ? 8
              : a !== null &&
                typeof a == "object" &&
                typeof a.then == "function"
              ? 6
              : 1),
      (ha = a),
      I === null && ((pl = 1), bn(l, ba(a, l.current)));
  }
  function co() {
    var l = S.H;
    return (S.H = hn), l === null ? hn : l;
  }
  function io() {
    var l = S.A;
    return (S.A = Gh), l;
  }
  function ji() {
    (pl = 4),
      vt || ((el & 4194048) !== el && pa.current !== null) || (ze = !0),
      ((yt & 134217727) === 0 && (Zt & 134217727) === 0) ||
        vl === null ||
        St(vl, el, Ea, !1);
  }
  function Ri(l, a, t) {
    var e = sl;
    sl |= 2;
    var u = co(),
      n = io();
    (vl !== l || el !== a) && ((Tn = null), Ne(l, a)), (a = !1);
    var c = pl;
    l: do
      try {
        if (rl !== 0 && I !== null) {
          var i = I,
            f = ha;
          switch (rl) {
            case 8:
              xi(), (c = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              pa.current === null && (a = !0);
              var y = rl;
              if (((rl = 0), (ha = null), Te(l, i, f, y), t && ze)) {
                c = 0;
                break l;
              }
              break;
            default:
              (y = rl), (rl = 0), (ha = null), Te(l, i, f, y);
          }
        }
        Vh(), (c = pl);
        break;
      } catch (z) {
        no(l, z);
      }
    while (!0);
    return (
      a && l.shellSuspendCounter++,
      (La = qt = null),
      (sl = e),
      (S.H = u),
      (S.A = n),
      I === null && ((vl = null), (el = 0), wu()),
      c
    );
  }
  function Vh() {
    for (; I !== null; ) fo(I);
  }
  function Lh(l, a) {
    var t = sl;
    sl |= 2;
    var e = co(),
      u = io();
    vl !== l || el !== a
      ? ((Tn = null), (Nn = aa() + 500), Ne(l, a))
      : (ze = Ue(l, a));
    l: do
      try {
        if (rl !== 0 && I !== null) {
          a = I;
          var n = ha;
          a: switch (rl) {
            case 1:
              (rl = 0), (ha = null), Te(l, a, n, 1);
              break;
            case 2:
            case 9:
              if (zs(n)) {
                (rl = 0), (ha = null), so(a);
                break;
              }
              (a = function () {
                (rl !== 2 && rl !== 9) || vl !== l || (rl = 7), Ca(l);
              }),
                n.then(a, a);
              break l;
            case 3:
              rl = 7;
              break l;
            case 4:
              rl = 5;
              break l;
            case 7:
              zs(n)
                ? ((rl = 0), (ha = null), so(a))
                : ((rl = 0), (ha = null), Te(l, a, n, 7));
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
                    (rl = 0), (ha = null);
                    var f = i.sibling;
                    if (f !== null) I = f;
                    else {
                      var y = i.return;
                      y !== null ? ((I = y), On(y)) : (I = null);
                    }
                    break a;
                  }
              }
              (rl = 0), (ha = null), Te(l, a, n, 5);
              break;
            case 6:
              (rl = 0), (ha = null), Te(l, a, n, 6);
              break;
            case 8:
              xi(), (pl = 6);
              break l;
            default:
              throw Error(m(462));
          }
        }
        Kh();
        break;
      } catch (z) {
        no(l, z);
      }
    while (!0);
    return (
      (La = qt = null),
      (S.H = e),
      (S.A = u),
      (sl = t),
      I !== null ? 0 : ((vl = null), (el = 0), wu(), pl)
    );
  }
  function Kh() {
    for (; I !== null && !xa(); ) fo(I);
  }
  function fo(l) {
    var a = Cr(l.alternate, l, Ia);
    (l.memoizedProps = l.pendingProps), a === null ? On(l) : (I = a);
  }
  function so(l) {
    var a = l,
      t = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = Dr(t, a, a.pendingProps, a.type, void 0, el);
        break;
      case 11:
        a = Dr(t, a, a.pendingProps, a.type.render, a.ref, el);
        break;
      case 5:
        wc(a);
      default:
        Br(t, a), (a = I = rs(a, Ia)), (a = Cr(t, a, Ia));
    }
    (l.memoizedProps = l.pendingProps), a === null ? On(l) : (I = a);
  }
  function Te(l, a, t, e) {
    (La = qt = null), wc(a), (ye = null), (iu = 0);
    var u = a.return;
    try {
      if (Hh(l, u, a, t, el)) {
        (pl = 1), bn(l, ba(t, l.current)), (I = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((I = u), n);
      (pl = 1), bn(l, ba(t, l.current)), (I = null);
      return;
    }
    a.flags & 32768
      ? (cl || e === 1
          ? (l = !0)
          : ze || (el & 536870912) !== 0
          ? (l = !1)
          : ((vt = l = !0),
            (e === 2 || e === 9 || e === 3 || e === 6) &&
              ((e = pa.current),
              e !== null && e.tag === 13 && (e.flags |= 16384))),
        ro(a, l))
      : On(a);
  }
  function On(l) {
    var a = l;
    do {
      if ((a.flags & 32768) !== 0) {
        ro(a, vt);
        return;
      }
      l = a.return;
      var t = qh(a.alternate, a, Ia);
      if (t !== null) {
        I = t;
        return;
      }
      if (((a = a.sibling), a !== null)) {
        I = a;
        return;
      }
      I = a = l;
    } while (a !== null);
    pl === 0 && (pl = 5);
  }
  function ro(l, a) {
    do {
      var t = Bh(l.alternate, l);
      if (t !== null) {
        (t.flags &= 32767), (I = t);
        return;
      }
      if (
        ((t = l.return),
        t !== null &&
          ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)),
        !a && ((l = l.sibling), l !== null))
      ) {
        I = l;
        return;
      }
      I = l = t;
    } while (l !== null);
    (pl = 6), (I = null);
  }
  function oo(l, a, t, e, u, n, c, i, f) {
    l.cancelPendingCommit = null;
    do Mn();
    while (Vl !== 0);
    if ((sl & 6) !== 0) throw Error(m(327));
    if (a !== null) {
      if (a === l.current) throw Error(m(177));
      if (
        ((n = a.lanes | a.childLanes),
        (n |= pc),
        Ed(l, t, n, c, i, f),
        l === vl && ((I = vl = null), (el = 0)),
        (pe = a),
        (bt = l),
        (Ee = t),
        (Oi = n),
        (Mi = u),
        (ao = e),
        (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            Wh(at, function () {
              return go(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (e = (a.flags & 13878) !== 0),
        (a.subtreeFlags & 13878) !== 0 || e)
      ) {
        (e = S.T), (S.T = null), (u = x.p), (x.p = 2), (c = sl), (sl |= 4);
        try {
          Yh(l, a, t);
        } finally {
          (sl = c), (x.p = u), (S.T = e);
        }
      }
      (Vl = 1), ho(), mo(), vo();
    }
  }
  function ho() {
    if (Vl === 1) {
      Vl = 0;
      var l = bt,
        a = pe,
        t = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || t) {
        (t = S.T), (S.T = null);
        var e = x.p;
        x.p = 2;
        var u = sl;
        sl |= 4;
        try {
          $r(a, l);
          var n = Li,
            c = ls(l.containerInfo),
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
                var E = i.ownerDocument || document,
                  g = (E && E.defaultView) || window;
                if (g.getSelection) {
                  var b = g.getSelection(),
                    K = i.textContent.length,
                    Z = Math.min(f.start, K),
                    hl = f.end === void 0 ? Z : Math.min(f.end, K);
                  !b.extend && Z > hl && ((c = hl), (hl = Z), (Z = c));
                  var d = If(i, Z),
                    o = If(i, hl);
                  if (
                    d &&
                    o &&
                    (b.rangeCount !== 1 ||
                      b.anchorNode !== d.node ||
                      b.anchorOffset !== d.offset ||
                      b.focusNode !== o.node ||
                      b.focusOffset !== o.offset)
                  ) {
                    var v = E.createRange();
                    v.setStart(d.node, d.offset),
                      b.removeAllRanges(),
                      Z > hl
                        ? (b.addRange(v), b.extend(o.node, o.offset))
                        : (v.setEnd(o.node, o.offset), b.addRange(v));
                  }
                }
              }
            }
            for (E = [], b = i; (b = b.parentNode); )
              b.nodeType === 1 &&
                E.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
            for (
              typeof i.focus == "function" && i.focus(), i = 0;
              i < E.length;
              i++
            ) {
              var p = E[i];
              (p.element.scrollLeft = p.left), (p.element.scrollTop = p.top);
            }
          }
          (Gn = !!Vi), (Li = Vi = null);
        } finally {
          (sl = u), (x.p = e), (S.T = t);
        }
      }
      (l.current = a), (Vl = 2);
    }
  }
  function mo() {
    if (Vl === 2) {
      Vl = 0;
      var l = bt,
        a = pe,
        t = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || t) {
        (t = S.T), (S.T = null);
        var e = x.p;
        x.p = 2;
        var u = sl;
        sl |= 4;
        try {
          Lr(l, a.alternate, a);
        } finally {
          (sl = u), (x.p = e), (S.T = t);
        }
      }
      Vl = 3;
    }
  }
  function vo() {
    if (Vl === 4 || Vl === 3) {
      (Vl = 0), lt();
      var l = bt,
        a = pe,
        t = Ee,
        e = ao;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
        ? (Vl = 5)
        : ((Vl = 0), (pe = bt = null), yo(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (gt = null),
        kn(t),
        (a = a.stateNode),
        Ql && typeof Ql.onCommitFiberRoot == "function")
      )
        try {
          Ql.onCommitFiberRoot(Ya, a, void 0, (a.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        (a = S.T), (u = x.p), (x.p = 2), (S.T = null);
        try {
          for (var n = l.onRecoverableError, c = 0; c < e.length; c++) {
            var i = e[c];
            n(i.value, { componentStack: i.stack });
          }
        } finally {
          (S.T = a), (x.p = u);
        }
      }
      (Ee & 3) !== 0 && Mn(),
        Ca(l),
        (u = l.pendingLanes),
        (t & 4194090) !== 0 && (u & 42) !== 0
          ? l === Di
            ? yu++
            : ((yu = 0), (Di = l))
          : (yu = 0),
        gu(0);
    }
  }
  function yo(l, a) {
    (l.pooledCacheLanes &= a) === 0 &&
      ((a = l.pooledCache), a != null && ((l.pooledCache = null), ke(a)));
  }
  function Mn(l) {
    return ho(), mo(), vo(), go();
  }
  function go() {
    if (Vl !== 5) return !1;
    var l = bt,
      a = Oi;
    Oi = 0;
    var t = kn(Ee),
      e = S.T,
      u = x.p;
    try {
      (x.p = 32 > t ? 32 : t), (S.T = null), (t = Mi), (Mi = null);
      var n = bt,
        c = Ee;
      if (((Vl = 0), (pe = bt = null), (Ee = 0), (sl & 6) !== 0))
        throw Error(m(331));
      var i = sl;
      if (
        ((sl |= 4),
        Pr(n.current),
        kr(n, n.current, c, t),
        (sl = i),
        gu(0, !1),
        Ql && typeof Ql.onPostCommitFiberRoot == "function")
      )
        try {
          Ql.onPostCommitFiberRoot(Ya, n);
        } catch {}
      return !0;
    } finally {
      (x.p = u), (S.T = e), yo(l, a);
    }
  }
  function bo(l, a, t) {
    (a = ba(t, a)),
      (a = ii(l.stateNode, a, 2)),
      (l = ft(l, a, 2)),
      l !== null && (He(l, 2), Ca(l));
  }
  function ml(l, a, t) {
    if (l.tag === 3) bo(l, l, t);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          bo(a, l, t);
          break;
        } else if (a.tag === 1) {
          var e = a.stateNode;
          if (
            typeof a.type.getDerivedStateFromError == "function" ||
            (typeof e.componentDidCatch == "function" &&
              (gt === null || !gt.has(e)))
          ) {
            (l = ba(t, l)),
              (t = Ar(2)),
              (e = ft(a, t, 2)),
              e !== null && (pr(t, e, a, l), He(e, 2), Ca(e));
            break;
          }
        }
        a = a.return;
      }
  }
  function Ui(l, a, t) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new Qh();
      var u = new Set();
      e.set(a, u);
    } else (u = e.get(a)), u === void 0 && ((u = new Set()), e.set(a, u));
    u.has(t) ||
      ((Ei = !0), u.add(t), (l = Jh.bind(null, l, a, t)), a.then(l, l));
  }
  function Jh(l, a, t) {
    var e = l.pingCache;
    e !== null && e.delete(a),
      (l.pingedLanes |= l.suspendedLanes & t),
      (l.warmLanes &= ~t),
      vl === l &&
        (el & t) === t &&
        (pl === 4 || (pl === 3 && (el & 62914560) === el && 300 > aa() - _i)
          ? (sl & 2) === 0 && Ne(l, 0)
          : (Ni |= t),
        Ae === el && (Ae = 0)),
      Ca(l);
  }
  function So(l, a) {
    a === 0 && (a = mf()), (l = ce(l, a)), l !== null && (He(l, a), Ca(l));
  }
  function wh(l) {
    var a = l.memoizedState,
      t = 0;
    a !== null && (t = a.retryLane), So(l, t);
  }
  function $h(l, a) {
    var t = 0;
    switch (l.tag) {
      case 13:
        var e = l.stateNode,
          u = l.memoizedState;
        u !== null && (t = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    e !== null && e.delete(a), So(l, t);
  }
  function Wh(l, a) {
    return Fl(l, a);
  }
  var Dn = null,
    _e = null,
    Hi = !1,
    xn = !1,
    Ci = !1,
    Vt = 0;
  function Ca(l) {
    l !== _e &&
      l.next === null &&
      (_e === null ? (Dn = _e = l) : (_e = _e.next = l)),
      (xn = !0),
      Hi || ((Hi = !0), Fh());
  }
  function gu(l, a) {
    if (!Ci && xn) {
      Ci = !0;
      do
        for (var t = !1, e = Dn; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = e.suspendedLanes,
                i = e.pingedLanes;
              (n = (1 << (31 - fa(42 | l) + 1)) - 1),
                (n &= u & ~(c & ~i)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((t = !0), Eo(e, n));
          } else
            (n = el),
              (n = Cu(
                e,
                e === vl ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Ue(e, n) || ((t = !0), Eo(e, n));
          e = e.next;
        }
      while (t);
      Ci = !1;
    }
  }
  function kh() {
    zo();
  }
  function zo() {
    xn = Hi = !1;
    var l = 0;
    Vt !== 0 && (nm() && (l = Vt), (Vt = 0));
    for (var a = aa(), t = null, e = Dn; e !== null; ) {
      var u = e.next,
        n = Ao(e, a);
      n === 0
        ? ((e.next = null),
          t === null ? (Dn = u) : (t.next = u),
          u === null && (_e = t))
        : ((t = e), (l !== 0 || (n & 3) !== 0) && (xn = !0)),
        (e = u);
    }
    gu(l);
  }
  function Ao(l, a) {
    for (
      var t = l.suspendedLanes,
        e = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - fa(n),
        i = 1 << c,
        f = u[c];
      f === -1
        ? ((i & t) === 0 || (i & e) !== 0) && (u[c] = pd(i, a))
        : f <= a && (l.expiredLanes |= i),
        (n &= ~i);
    }
    if (
      ((a = vl),
      (t = el),
      (t = Cu(
        l,
        l === a ? t : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (e = l.callbackNode),
      t === 0 ||
        (l === a && (rl === 2 || rl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        e !== null && e !== null && Il(e),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((t & 3) === 0 || Ue(l, t)) {
      if (((a = t & -t), a === l.callbackPriority)) return a;
      switch ((e !== null && Il(e), kn(t))) {
        case 2:
        case 8:
          t = Kt;
          break;
        case 32:
          t = at;
          break;
        case 268435456:
          t = ju;
          break;
        default:
          t = at;
      }
      return (
        (e = po.bind(null, l)),
        (t = Fl(t, e)),
        (l.callbackPriority = a),
        (l.callbackNode = t),
        a
      );
    }
    return (
      e !== null && e !== null && Il(e),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function po(l, a) {
    if (Vl !== 0 && Vl !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var t = l.callbackNode;
    if (Mn() && l.callbackNode !== t) return null;
    var e = el;
    return (
      (e = Cu(
        l,
        l === vl ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      e === 0
        ? null
        : (eo(l, e, a),
          Ao(l, aa()),
          l.callbackNode != null && l.callbackNode === t
            ? po.bind(null, l)
            : null)
    );
  }
  function Eo(l, a) {
    if (Mn()) return null;
    eo(l, a, !0);
  }
  function Fh() {
    im(function () {
      (sl & 6) !== 0 ? Fl(Lt, kh) : zo();
    });
  }
  function qi() {
    return Vt === 0 && (Vt = hf()), Vt;
  }
  function No(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : Gu("" + l);
  }
  function To(l, a) {
    var t = a.ownerDocument.createElement("input");
    return (
      (t.name = a.name),
      (t.value = a.value),
      l.id && t.setAttribute("form", l.id),
      a.parentNode.insertBefore(t, a),
      (l = new FormData(l)),
      t.parentNode.removeChild(t),
      l
    );
  }
  function Ih(l, a, t, e, u) {
    if (a === "submit" && t && t.stateNode === u) {
      var n = No((u[ta] || null).action),
        c = e.submitter;
      c &&
        ((a = (a = c[ta] || null)
          ? No(a.formAction)
          : c.getAttribute("formAction")),
        a !== null && ((n = a), (c = null)));
      var i = new Lu("action", "action", null, e, u);
      l.push({
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
  for (var Bi = 0; Bi < Ac.length; Bi++) {
    var Yi = Ac[Bi],
      Ph = Yi.toLowerCase(),
      lm = Yi[0].toUpperCase() + Yi.slice(1);
    Ta(Ph, "on" + lm);
  }
  Ta(es, "onAnimationEnd"),
    Ta(us, "onAnimationIteration"),
    Ta(ns, "onAnimationStart"),
    Ta("dblclick", "onDoubleClick"),
    Ta("focusin", "onFocus"),
    Ta("focusout", "onBlur"),
    Ta(gh, "onTransitionRun"),
    Ta(bh, "onTransitionStart"),
    Ta(Sh, "onTransitionCancel"),
    Ta(cs, "onTransitionEnd"),
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
    am = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(bu)
    );
  function _o(l, a) {
    a = (a & 4) !== 0;
    for (var t = 0; t < l.length; t++) {
      var e = l[t],
        u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (a)
          for (var c = e.length - 1; 0 <= c; c--) {
            var i = e[c],
              f = i.instance,
              y = i.currentTarget;
            if (((i = i.listener), f !== n && u.isPropagationStopped()))
              break l;
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
              break l;
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
  function P(l, a) {
    var t = a[Fn];
    t === void 0 && (t = a[Fn] = new Set());
    var e = l + "__bubble";
    t.has(e) || (Oo(a, l, 2, !1), t.add(e));
  }
  function Xi(l, a, t) {
    var e = 0;
    a && (e |= 4), Oo(t, l, e, a);
  }
  var jn = "_reactListening" + Math.random().toString(36).slice(2);
  function Gi(l) {
    if (!l[jn]) {
      (l[jn] = !0),
        Sf.forEach(function (t) {
          t !== "selectionchange" && (am.has(t) || Xi(t, !1, l), Xi(t, !0, l));
        });
      var a = l.nodeType === 9 ? l : l.ownerDocument;
      a === null || a[jn] || ((a[jn] = !0), Xi("selectionchange", !1, a));
    }
  }
  function Oo(l, a, t, e) {
    switch (Fo(a)) {
      case 2:
        var u = Mm;
        break;
      case 8:
        u = Dm;
        break;
      default:
        u = lf;
    }
    (t = u.bind(null, a, t, l)),
      (u = void 0),
      !fc ||
        (a !== "touchstart" && a !== "touchmove" && a !== "wheel") ||
        (u = !0),
      e
        ? u !== void 0
          ? l.addEventListener(a, t, { capture: !0, passive: u })
          : l.addEventListener(a, t, !0)
        : u !== void 0
        ? l.addEventListener(a, t, { passive: u })
        : l.addEventListener(a, t, !1);
  }
  function Qi(l, a, t, e, u) {
    var n = e;
    if ((a & 1) === 0 && (a & 2) === 0 && e !== null)
      l: for (;;) {
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
              continue l;
            }
            i = i.parentNode;
          }
        }
        e = e.return;
      }
    Uf(function () {
      var y = n,
        z = cc(t),
        E = [];
      l: {
        var g = is.get(l);
        if (g !== void 0) {
          var b = Lu,
            K = l;
          switch (l) {
            case "keypress":
              if (Zu(t) === 0) break l;
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
              if (t.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = qf;
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
              b = lh;
              break;
            case "scroll":
            case "scrollend":
              b = Cd;
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
          var Z = (a & 4) !== 0,
            hl = !Z && (l === "scroll" || l === "scrollend"),
            d = Z ? (g !== null ? g + "Capture" : null) : g;
          Z = [];
          for (var o = y, v; o !== null; ) {
            var p = o;
            if (
              ((v = p.stateNode),
              (p = p.tag),
              (p !== 5 && p !== 26 && p !== 27) ||
                v === null ||
                d === null ||
                ((p = Be(o, d)), p != null && Z.push(Su(o, p, v))),
              hl)
            )
              break;
            o = o.return;
          }
          0 < Z.length &&
            ((g = new b(g, K, null, t, z)), E.push({ event: g, listeners: Z }));
        }
      }
      if ((a & 7) === 0) {
        l: {
          if (
            ((g = l === "mouseover" || l === "pointerover"),
            (b = l === "mouseout" || l === "pointerout"),
            g &&
              t !== nc &&
              (K = t.relatedTarget || t.fromElement) &&
              (wt(K) || K[Jt]))
          )
            break l;
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
                  ((hl = U(K)),
                  (Z = K.tag),
                  K !== hl || (Z !== 5 && Z !== 27 && Z !== 6)) &&
                  (K = null))
              : ((b = null), (K = y)),
            b !== K)
          ) {
            if (
              ((Z = qf),
              (p = "onMouseLeave"),
              (d = "onMouseEnter"),
              (o = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((Z = Yf),
                (p = "onPointerLeave"),
                (d = "onPointerEnter"),
                (o = "pointer")),
              (hl = b == null ? g : qe(b)),
              (v = K == null ? g : qe(K)),
              (g = new Z(p, o + "leave", b, t, z)),
              (g.target = hl),
              (g.relatedTarget = v),
              (p = null),
              wt(z) === y &&
                ((Z = new Z(d, o + "enter", K, t, z)),
                (Z.target = v),
                (Z.relatedTarget = hl),
                (p = Z)),
              (hl = p),
              b && K)
            )
              a: {
                for (Z = b, d = K, o = 0, v = Z; v; v = Oe(v)) o++;
                for (v = 0, p = d; p; p = Oe(p)) v++;
                for (; 0 < o - v; ) (Z = Oe(Z)), o--;
                for (; 0 < v - o; ) (d = Oe(d)), v--;
                for (; o--; ) {
                  if (Z === d || (d !== null && Z === d.alternate)) break a;
                  (Z = Oe(Z)), (d = Oe(d));
                }
                Z = null;
              }
            else Z = null;
            b !== null && Mo(E, g, b, Z, !1),
              K !== null && hl !== null && Mo(E, hl, K, Z, !0);
          }
        }
        l: {
          if (
            ((g = y ? qe(y) : window),
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
          if (H && (H = H(l, y))) {
            Kf(E, H, t, z);
            break l;
          }
          F && F(l, g, y),
            l === "focusout" &&
              y &&
              g.type === "number" &&
              y.memoizedProps.value != null &&
              ec(g, "number", g.value);
        }
        switch (((F = y ? qe(y) : window), l)) {
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
            (Sc = !1), as(E, t, z);
            break;
          case "selectionchange":
            if (yh) break;
          case "keydown":
          case "keyup":
            as(E, t, z);
        }
        var Y;
        if (mc)
          l: {
            switch (l) {
              case "compositionstart":
                var L = "onCompositionStart";
                break l;
              case "compositionend":
                L = "onCompositionEnd";
                break l;
              case "compositionupdate":
                L = "onCompositionUpdate";
                break l;
            }
            L = void 0;
          }
        else
          te
            ? Zf(l, t) && (L = "onCompositionEnd")
            : l === "keydown" &&
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
            ((L = new Bf(L, l, null, t, z)),
            E.push({ event: L, listeners: F }),
            Y ? (L.data = Y) : ((Y = Vf(t)), Y !== null && (L.data = Y)))),
          (Y = ch ? ih(l, t) : fh(l, t)) &&
            ((L = Rn(y, "onBeforeInput")),
            0 < L.length &&
              ((F = new Bf("onBeforeInput", "beforeinput", null, t, z)),
              E.push({ event: F, listeners: L }),
              (F.data = Y))),
          Ih(E, l, y, t, z);
      }
      _o(E, a);
    });
  }
  function Su(l, a, t) {
    return { instance: l, listener: a, currentTarget: t };
  }
  function Rn(l, a) {
    for (var t = a + "Capture", e = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Be(l, t)),
          u != null && e.unshift(Su(l, u, n)),
          (u = Be(l, a)),
          u != null && e.push(Su(l, u, n))),
        l.tag === 3)
      )
        return e;
      l = l.return;
    }
    return [];
  }
  function Oe(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Mo(l, a, t, e, u) {
    for (var n = a._reactName, c = []; t !== null && t !== e; ) {
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
    c.length !== 0 && l.push({ event: a, listeners: c });
  }
  var tm = /\r\n?/g,
    em = /\u0000|\uFFFD/g;
  function Do(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        tm,
        `
`
      )
      .replace(em, "");
  }
  function xo(l, a) {
    return (a = Do(a)), Do(l) === a;
  }
  function Un() {}
  function dl(l, a, t, e, u, n) {
    switch (t) {
      case "children":
        typeof e == "string"
          ? a === "body" || (a === "textarea" && e === "") || Pt(l, e)
          : (typeof e == "number" || typeof e == "bigint") &&
            a !== "body" &&
            Pt(l, "" + e);
        break;
      case "className":
        Bu(l, "class", e);
        break;
      case "tabIndex":
        Bu(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Bu(l, t, e);
        break;
      case "style":
        jf(l, e, n);
        break;
      case "data":
        if (a !== "object") {
          Bu(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (a !== "a" || t !== "href")) {
          l.removeAttribute(t);
          break;
        }
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "symbol" ||
          typeof e == "boolean"
        ) {
          l.removeAttribute(t);
          break;
        }
        (e = Gu("" + e)), l.setAttribute(t, e);
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (t === "formAction"
              ? (a !== "input" && dl(l, a, "name", u.name, u, null),
                dl(l, a, "formEncType", u.formEncType, u, null),
                dl(l, a, "formMethod", u.formMethod, u, null),
                dl(l, a, "formTarget", u.formTarget, u, null))
              : (dl(l, a, "encType", u.encType, u, null),
                dl(l, a, "method", u.method, u, null),
                dl(l, a, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(t);
          break;
        }
        (e = Gu("" + e)), l.setAttribute(t, e);
        break;
      case "onClick":
        e != null && (l.onclick = Un);
        break;
      case "onScroll":
        e != null && P("scroll", l);
        break;
      case "onScrollEnd":
        e != null && P("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(m(61));
          if (((t = e.__html), t != null)) {
            if (u.children != null) throw Error(m(60));
            l.innerHTML = t;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
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
          l.removeAttribute("xlink:href");
          break;
        }
        (t = Gu("" + e)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t);
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
          ? l.setAttribute(t, "" + e)
          : l.removeAttribute(t);
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
          ? l.setAttribute(t, "")
          : l.removeAttribute(t);
        break;
      case "capture":
      case "download":
        e === !0
          ? l.setAttribute(t, "")
          : e !== !1 &&
            e != null &&
            typeof e != "function" &&
            typeof e != "symbol"
          ? l.setAttribute(t, e)
          : l.removeAttribute(t);
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
          ? l.setAttribute(t, e)
          : l.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
          ? l.removeAttribute(t)
          : l.setAttribute(t, e);
        break;
      case "popover":
        P("beforetoggle", l), P("toggle", l), qu(l, "popover", e);
        break;
      case "xlinkActuate":
        Xa(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Xa(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Xa(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Xa(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Xa(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Xa(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Xa(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Xa(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Xa(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        qu(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
          ((t = Ud.get(t) || t), qu(l, t, e));
    }
  }
  function Zi(l, a, t, e, u, n) {
    switch (t) {
      case "style":
        jf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(m(61));
          if (((t = e.__html), t != null)) {
            if (u.children != null) throw Error(m(60));
            l.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? Pt(l, e)
          : (typeof e == "number" || typeof e == "bigint") && Pt(l, "" + e);
        break;
      case "onScroll":
        e != null && P("scroll", l);
        break;
      case "onScrollEnd":
        e != null && P("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = Un);
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
          l: {
            if (
              t[0] === "o" &&
              t[1] === "n" &&
              ((u = t.endsWith("Capture")),
              (a = t.slice(2, u ? t.length - 7 : void 0)),
              (n = l[ta] || null),
              (n = n != null ? n[t] : null),
              typeof n == "function" && l.removeEventListener(a, n, u),
              typeof e == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (t in l
                  ? (l[t] = null)
                  : l.hasAttribute(t) && l.removeAttribute(t)),
                l.addEventListener(a, e, u);
              break l;
            }
            t in l
              ? (l[t] = e)
              : e === !0
              ? l.setAttribute(t, "")
              : qu(l, t, e);
          }
    }
  }
  function Ll(l, a, t) {
    switch (a) {
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
        P("error", l), P("load", l);
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
                  throw Error(m(137, a));
                default:
                  dl(l, a, n, c, t, null);
              }
          }
        u && dl(l, a, "srcSet", t.srcSet, t, null),
          e && dl(l, a, "src", t.src, t, null);
        return;
      case "input":
        P("invalid", l);
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
                  if (z != null) throw Error(m(137, a));
                  break;
                default:
                  dl(l, a, e, z, t, null);
              }
          }
        Of(l, n, i, f, y, c, u, !1), Yu(l);
        return;
      case "select":
        P("invalid", l), (e = c = n = null);
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
                dl(l, a, u, i, t, null);
            }
        (a = n),
          (t = c),
          (l.multiple = !!e),
          a != null ? It(l, !!e, a, !1) : t != null && It(l, !!e, t, !0);
        return;
      case "textarea":
        P("invalid", l), (n = u = e = null);
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
                dl(l, a, c, i, t, null);
            }
        Df(l, e, u, n), Yu(l);
        return;
      case "option":
        for (f in t)
          if (t.hasOwnProperty(f) && ((e = t[f]), e != null))
            switch (f) {
              case "selected":
                l.selected =
                  e && typeof e != "function" && typeof e != "symbol";
                break;
              default:
                dl(l, a, f, e, t, null);
            }
        return;
      case "dialog":
        P("beforetoggle", l), P("toggle", l), P("cancel", l), P("close", l);
        break;
      case "iframe":
      case "object":
        P("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < bu.length; e++) P(bu[e], l);
        break;
      case "image":
        P("error", l), P("load", l);
        break;
      case "details":
        P("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        P("error", l), P("load", l);
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
                throw Error(m(137, a));
              default:
                dl(l, a, y, e, t, null);
            }
        return;
      default:
        if (uc(a)) {
          for (z in t)
            t.hasOwnProperty(z) &&
              ((e = t[z]), e !== void 0 && Zi(l, a, z, e, t, void 0));
          return;
        }
    }
    for (i in t)
      t.hasOwnProperty(i) && ((e = t[i]), e != null && dl(l, a, i, e, t, null));
  }
  function um(l, a, t, e) {
    switch (a) {
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
          var E = t[b];
          if (t.hasOwnProperty(b) && E != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = E;
              default:
                e.hasOwnProperty(b) || dl(l, a, b, null, e, E);
            }
        }
        for (var g in e) {
          var b = e[g];
          if (((E = t[g]), e.hasOwnProperty(g) && (b != null || E != null)))
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
                if (b != null) throw Error(m(137, a));
                break;
              default:
                b !== E && dl(l, a, g, b, e, E);
            }
        }
        tc(l, c, i, f, y, z, n, u);
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
                e.hasOwnProperty(n) || dl(l, a, n, null, e, f);
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
                n !== f && dl(l, a, u, n, e, f);
            }
        (a = i),
          (t = c),
          (e = b),
          g != null
            ? It(l, !!t, g, !1)
            : !!e != !!t &&
              (a != null ? It(l, !!t, a, !0) : It(l, !!t, t ? [] : "", !1));
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
                dl(l, a, i, null, e, u);
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
                u !== n && dl(l, a, c, u, e, n);
            }
        Mf(l, g, b);
        return;
      case "option":
        for (var K in t)
          if (
            ((g = t[K]),
            t.hasOwnProperty(K) && g != null && !e.hasOwnProperty(K))
          )
            switch (K) {
              case "selected":
                l.selected = !1;
                break;
              default:
                dl(l, a, K, null, e, g);
            }
        for (f in e)
          if (
            ((g = e[f]),
            (b = t[f]),
            e.hasOwnProperty(f) && g !== b && (g != null || b != null))
          )
            switch (f) {
              case "selected":
                l.selected =
                  g && typeof g != "function" && typeof g != "symbol";
                break;
              default:
                dl(l, a, f, g, e, b);
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
        for (var Z in t)
          (g = t[Z]),
            t.hasOwnProperty(Z) &&
              g != null &&
              !e.hasOwnProperty(Z) &&
              dl(l, a, Z, null, e, g);
        for (y in e)
          if (
            ((g = e[y]),
            (b = t[y]),
            e.hasOwnProperty(y) && g !== b && (g != null || b != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(m(137, a));
                break;
              default:
                dl(l, a, y, g, e, b);
            }
        return;
      default:
        if (uc(a)) {
          for (var hl in t)
            (g = t[hl]),
              t.hasOwnProperty(hl) &&
                g !== void 0 &&
                !e.hasOwnProperty(hl) &&
                Zi(l, a, hl, void 0, e, g);
          for (z in e)
            (g = e[z]),
              (b = t[z]),
              !e.hasOwnProperty(z) ||
                g === b ||
                (g === void 0 && b === void 0) ||
                Zi(l, a, z, g, e, b);
          return;
        }
    }
    for (var d in t)
      (g = t[d]),
        t.hasOwnProperty(d) &&
          g != null &&
          !e.hasOwnProperty(d) &&
          dl(l, a, d, null, e, g);
    for (E in e)
      (g = e[E]),
        (b = t[E]),
        !e.hasOwnProperty(E) ||
          g === b ||
          (g == null && b == null) ||
          dl(l, a, E, g, e, b);
  }
  var Vi = null,
    Li = null;
  function Hn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function jo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ro(l, a) {
    if (l === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && a === "foreignObject" ? 0 : l;
  }
  function Ki(l, a) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof a.children == "string" ||
      typeof a.children == "number" ||
      typeof a.children == "bigint" ||
      (typeof a.dangerouslySetInnerHTML == "object" &&
        a.dangerouslySetInnerHTML !== null &&
        a.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ji = null;
  function nm() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Ji
        ? !1
        : ((Ji = l), !0)
      : ((Ji = null), !1);
  }
  var Uo = typeof setTimeout == "function" ? setTimeout : void 0,
    cm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ho = typeof Promise == "function" ? Promise : void 0,
    im =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ho < "u"
        ? function (l) {
            return Ho.resolve(null).then(l).catch(fm);
          }
        : Uo;
  function fm(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function zt(l) {
    return l === "head";
  }
  function Co(l, a) {
    var t = a,
      e = 0,
      u = 0;
    do {
      var n = t.nextSibling;
      if ((l.removeChild(t), n && n.nodeType === 8))
        if (((t = n.data), t === "/$")) {
          if (0 < e && 8 > e) {
            t = e;
            var c = l.ownerDocument;
            if ((t & 1 && zu(c.documentElement), t & 2 && zu(c.body), t & 4))
              for (t = c.head, zu(t), c = t.firstChild; c; ) {
                var i = c.nextSibling,
                  f = c.nodeName;
                c[Ce] ||
                  f === "SCRIPT" ||
                  f === "STYLE" ||
                  (f === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  t.removeChild(c),
                  (c = i);
              }
          }
          if (u === 0) {
            l.removeChild(n), Mu(a);
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
    Mu(a);
  }
  function wi(l) {
    var a = l.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var t = a;
      switch (((a = a.nextSibling), t.nodeName)) {
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
      l.removeChild(t);
    }
  }
  function sm(l, a, t, e) {
    for (; l.nodeType === 1; ) {
      var u = t;
      if (l.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[Ce])
          switch (a) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (a === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = Oa(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function rm(l, a, t) {
    if (a === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = Oa(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function $i(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState === "complete")
    );
  }
  function om(l, a) {
    var t = l.ownerDocument;
    if (l.data !== "$?" || t.readyState === "complete") a();
    else {
      var e = function () {
        a(), t.removeEventListener("DOMContentLoaded", e);
      };
      t.addEventListener("DOMContentLoaded", e), (l._reactRetry = e);
    }
  }
  function Oa(l) {
    for (; l != null; l = l.nextSibling) {
      var a = l.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (
          ((a = l.data),
          a === "$" || a === "$!" || a === "$?" || a === "F!" || a === "F")
        )
          break;
        if (a === "/$") return null;
      }
    }
    return l;
  }
  var Wi = null;
  function qo(l) {
    l = l.previousSibling;
    for (var a = 0; l; ) {
      if (l.nodeType === 8) {
        var t = l.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (a === 0) return l;
          a--;
        } else t === "/$" && a++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Bo(l, a, t) {
    switch (((a = Hn(t)), l)) {
      case "html":
        if (((l = a.documentElement), !l)) throw Error(m(452));
        return l;
      case "head":
        if (((l = a.head), !l)) throw Error(m(453));
        return l;
      case "body":
        if (((l = a.body), !l)) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  function zu(l) {
    for (var a = l.attributes; a.length; ) l.removeAttributeNode(a[0]);
    In(l);
  }
  var Na = new Map(),
    Yo = new Set();
  function Cn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Pa = x.d;
  x.d = { f: dm, r: hm, D: mm, C: vm, L: ym, m: gm, X: Sm, S: bm, M: zm };
  function dm() {
    var l = Pa.f(),
      a = _n();
    return l || a;
  }
  function hm(l) {
    var a = $t(l);
    a !== null && a.tag === 5 && a.type === "form" ? er(a) : Pa.r(l);
  }
  var Me = typeof document > "u" ? null : document;
  function Xo(l, a, t) {
    var e = Me;
    if (e && typeof a == "string" && a) {
      var u = ga(a);
      (u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof t == "string" && (u += '[crossorigin="' + t + '"]'),
        Yo.has(u) ||
          (Yo.add(u),
          (l = { rel: l, crossOrigin: t, href: a }),
          e.querySelector(u) === null &&
            ((a = e.createElement("link")),
            Ll(a, "link", l),
            Bl(a),
            e.head.appendChild(a)));
    }
  }
  function mm(l) {
    Pa.D(l), Xo("dns-prefetch", l, null);
  }
  function vm(l, a) {
    Pa.C(l, a), Xo("preconnect", l, a);
  }
  function ym(l, a, t) {
    Pa.L(l, a, t);
    var e = Me;
    if (e && l && a) {
      var u = 'link[rel="preload"][as="' + ga(a) + '"]';
      a === "image" && t && t.imageSrcSet
        ? ((u += '[imagesrcset="' + ga(t.imageSrcSet) + '"]'),
          typeof t.imageSizes == "string" &&
            (u += '[imagesizes="' + ga(t.imageSizes) + '"]'))
        : (u += '[href="' + ga(l) + '"]');
      var n = u;
      switch (a) {
        case "style":
          n = De(l);
          break;
        case "script":
          n = xe(l);
      }
      Na.has(n) ||
        ((l = q(
          {
            rel: "preload",
            href: a === "image" && t && t.imageSrcSet ? void 0 : l,
            as: a,
          },
          t
        )),
        Na.set(n, l),
        e.querySelector(u) !== null ||
          (a === "style" && e.querySelector(Au(n))) ||
          (a === "script" && e.querySelector(pu(n))) ||
          ((a = e.createElement("link")),
          Ll(a, "link", l),
          Bl(a),
          e.head.appendChild(a)));
    }
  }
  function gm(l, a) {
    Pa.m(l, a);
    var t = Me;
    if (t && l) {
      var e = a && typeof a.as == "string" ? a.as : "script",
        u =
          'link[rel="modulepreload"][as="' + ga(e) + '"][href="' + ga(l) + '"]',
        n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = xe(l);
      }
      if (
        !Na.has(n) &&
        ((l = q({ rel: "modulepreload", href: l }, a)),
        Na.set(n, l),
        t.querySelector(u) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(pu(n))) return;
        }
        (e = t.createElement("link")),
          Ll(e, "link", l),
          Bl(e),
          t.head.appendChild(e);
      }
    }
  }
  function bm(l, a, t) {
    Pa.S(l, a, t);
    var e = Me;
    if (e && l) {
      var u = Wt(e).hoistableStyles,
        n = De(l);
      a = a || "default";
      var c = u.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if ((c = e.querySelector(Au(n)))) i.loading = 5;
        else {
          (l = q({ rel: "stylesheet", href: l, "data-precedence": a }, t)),
            (t = Na.get(n)) && ki(l, t);
          var f = (c = e.createElement("link"));
          Bl(f),
            Ll(f, "link", l),
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
            qn(c, a, e);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: i }),
          u.set(n, c);
      }
    }
  }
  function Sm(l, a) {
    Pa.X(l, a);
    var t = Me;
    if (t && l) {
      var e = Wt(t).hoistableScripts,
        u = xe(l),
        n = e.get(u);
      n ||
        ((n = t.querySelector(pu(u))),
        n ||
          ((l = q({ src: l, async: !0 }, a)),
          (a = Na.get(u)) && Fi(l, a),
          (n = t.createElement("script")),
          Bl(n),
          Ll(n, "link", l),
          t.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function zm(l, a) {
    Pa.M(l, a);
    var t = Me;
    if (t && l) {
      var e = Wt(t).hoistableScripts,
        u = xe(l),
        n = e.get(u);
      n ||
        ((n = t.querySelector(pu(u))),
        n ||
          ((l = q({ src: l, async: !0, type: "module" }, a)),
          (a = Na.get(u)) && Fi(l, a),
          (n = t.createElement("script")),
          Bl(n),
          Ll(n, "link", l),
          t.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Go(l, a, t, e) {
    var u = (u = N.current) ? Cn(u) : null;
    if (!u) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string"
          ? ((a = De(t.href)),
            (t = Wt(u).hoistableStyles),
            (e = t.get(a)),
            e ||
              ((e = { type: "style", instance: null, count: 0, state: null }),
              t.set(a, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          t.rel === "stylesheet" &&
          typeof t.href == "string" &&
          typeof t.precedence == "string"
        ) {
          l = De(t.href);
          var n = Wt(u).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((u = u.ownerDocument || u),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = u.querySelector(Au(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              Na.has(l) ||
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
                Na.set(l, t),
                n || Am(u, l, t, c.state))),
            a && e === null)
          )
            throw Error(m(528, ""));
          return c;
        }
        if (a && e !== null) throw Error(m(529, ""));
        return null;
      case "script":
        return (
          (a = t.async),
          (t = t.src),
          typeof t == "string" &&
          a &&
          typeof a != "function" &&
          typeof a != "symbol"
            ? ((a = xe(t)),
              (t = Wt(u).hoistableScripts),
              (e = t.get(a)),
              e ||
                ((e = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                t.set(a, e)),
              e)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(m(444, l));
    }
  }
  function De(l) {
    return 'href="' + ga(l) + '"';
  }
  function Au(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Qo(l) {
    return q({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Am(l, a, t, e) {
    l.querySelector('link[rel="preload"][as="style"][' + a + "]")
      ? (e.loading = 1)
      : ((a = l.createElement("link")),
        (e.preload = a),
        a.addEventListener("load", function () {
          return (e.loading |= 1);
        }),
        a.addEventListener("error", function () {
          return (e.loading |= 2);
        }),
        Ll(a, "link", t),
        Bl(a),
        l.head.appendChild(a));
  }
  function xe(l) {
    return '[src="' + ga(l) + '"]';
  }
  function pu(l) {
    return "script[async]" + l;
  }
  function Zo(l, a, t) {
    if ((a.count++, a.instance === null))
      switch (a.type) {
        case "style":
          var e = l.querySelector('style[data-href~="' + ga(t.href) + '"]');
          if (e) return (a.instance = e), Bl(e), e;
          var u = q({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (l.ownerDocument || l).createElement("style")),
            Bl(e),
            Ll(e, "style", u),
            qn(e, t.precedence, l),
            (a.instance = e)
          );
        case "stylesheet":
          u = De(t.href);
          var n = l.querySelector(Au(u));
          if (n) return (a.state.loading |= 4), (a.instance = n), Bl(n), n;
          (e = Qo(t)),
            (u = Na.get(u)) && ki(e, u),
            (n = (l.ownerDocument || l).createElement("link")),
            Bl(n);
          var c = n;
          return (
            (c._p = new Promise(function (i, f) {
              (c.onload = i), (c.onerror = f);
            })),
            Ll(n, "link", e),
            (a.state.loading |= 4),
            qn(n, t.precedence, l),
            (a.instance = n)
          );
        case "script":
          return (
            (n = xe(t.src)),
            (u = l.querySelector(pu(n)))
              ? ((a.instance = u), Bl(u), u)
              : ((e = t),
                (u = Na.get(n)) && ((e = q({}, t)), Fi(e, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                Bl(u),
                Ll(u, "link", e),
                l.head.appendChild(u),
                (a.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(m(443, a.type));
      }
    else
      a.type === "stylesheet" &&
        (a.state.loading & 4) === 0 &&
        ((e = a.instance), (a.state.loading |= 4), qn(e, t.precedence, l));
    return a.instance;
  }
  function qn(l, a, t) {
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
      if (i.dataset.precedence === a) n = i;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((a = t.nodeType === 9 ? t.head : t), a.insertBefore(l, a.firstChild));
  }
  function ki(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy),
      l.title == null && (l.title = a.title);
  }
  function Fi(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy),
      l.integrity == null && (l.integrity = a.integrity);
  }
  var Bn = null;
  function Vo(l, a, t) {
    if (Bn === null) {
      var e = new Map(),
        u = (Bn = new Map());
      u.set(t, e);
    } else (u = Bn), (e = u.get(t)), e || ((e = new Map()), u.set(t, e));
    if (e.has(l)) return e;
    for (
      e.set(l, null), t = t.getElementsByTagName(l), u = 0;
      u < t.length;
      u++
    ) {
      var n = t[u];
      if (
        !(
          n[Ce] ||
          n[$l] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(a) || "";
        c = l + c;
        var i = e.get(c);
        i ? i.push(n) : e.set(c, [n]);
      }
    }
    return e;
  }
  function Lo(l, a, t) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        t,
        a === "title" ? l.querySelector("head > title") : null
      );
  }
  function pm(l, a, t) {
    if (t === 1 || a.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof a.precedence != "string" ||
          typeof a.href != "string" ||
          a.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof a.rel != "string" ||
          typeof a.href != "string" ||
          a.href === "" ||
          a.onLoad ||
          a.onError
        )
          break;
        switch (a.rel) {
          case "stylesheet":
            return (
              (l = a.disabled), typeof a.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          a.async &&
          typeof a.async != "function" &&
          typeof a.async != "symbol" &&
          !a.onLoad &&
          !a.onError &&
          a.src &&
          typeof a.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Ko(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var Eu = null;
  function Em() {}
  function Nm(l, a, t) {
    if (Eu === null) throw Error(m(475));
    var e = Eu;
    if (
      a.type === "stylesheet" &&
      (typeof t.media != "string" || matchMedia(t.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = De(t.href),
          n = l.querySelector(Au(u));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (e.count++, (e = Yn.bind(e)), l.then(e, e)),
            (a.state.loading |= 4),
            (a.instance = n),
            Bl(n);
          return;
        }
        (n = l.ownerDocument || l),
          (t = Qo(t)),
          (u = Na.get(u)) && ki(t, u),
          (n = n.createElement("link")),
          Bl(n);
        var c = n;
        (c._p = new Promise(function (i, f) {
          (c.onload = i), (c.onerror = f);
        })),
          Ll(n, "link", t),
          (a.instance = n);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(a, l),
        (l = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (e.count++,
          (a = Yn.bind(e)),
          l.addEventListener("load", a),
          l.addEventListener("error", a));
    }
  }
  function Tm() {
    if (Eu === null) throw Error(m(475));
    var l = Eu;
    return (
      l.stylesheets && l.count === 0 && Ii(l, l.stylesheets),
      0 < l.count
        ? function (a) {
            var t = setTimeout(function () {
              if ((l.stylesheets && Ii(l, l.stylesheets), l.unsuspend)) {
                var e = l.unsuspend;
                (l.unsuspend = null), e();
              }
            }, 6e4);
            return (
              (l.unsuspend = a),
              function () {
                (l.unsuspend = null), clearTimeout(t);
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
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Xn = null;
  function Ii(l, a) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Xn = new Map()),
        a.forEach(_m, l),
        (Xn = null),
        Yn.call(l));
  }
  function _m(l, a) {
    if (!(a.state.loading & 4)) {
      var t = Xn.get(l);
      if (t) var e = t.get(null);
      else {
        (t = new Map()), Xn.set(l, t);
        for (
          var u = l.querySelectorAll(
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
      (u = a.instance),
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
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (a.state.loading |= 4);
    }
  }
  var Nu = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0,
  };
  function Om(l, a, t, e, u, n, c, i) {
    (this.tag = 1),
      (this.containerInfo = l),
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
  function Jo(l, a, t, e, u, n, c, i, f, y, z, E) {
    return (
      (l = new Om(l, a, t, c, i, f, y, E)),
      (a = 1),
      n === !0 && (a |= 24),
      (n = ra(3, null, null, a)),
      (l.current = n),
      (n.stateNode = l),
      (a = Uc()),
      a.refCount++,
      (l.pooledCache = a),
      a.refCount++,
      (n.memoizedState = { element: e, isDehydrated: t, cache: a }),
      Bc(n),
      l
    );
  }
  function wo(l) {
    return l ? ((l = ie), l) : ie;
  }
  function $o(l, a, t, e, u, n) {
    (u = wo(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = it(a)),
      (e.payload = { element: t }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (t = ft(l, e, a)),
      t !== null && (va(t, l, a), lu(t, l, a));
  }
  function Wo(l, a) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var t = l.retryLane;
      l.retryLane = t !== 0 && t < a ? t : a;
    }
  }
  function Pi(l, a) {
    Wo(l, a), (l = l.alternate) && Wo(l, a);
  }
  function ko(l) {
    if (l.tag === 13) {
      var a = ce(l, 67108864);
      a !== null && va(a, l, 67108864), Pi(l, 67108864);
    }
  }
  var Gn = !0;
  function Mm(l, a, t, e) {
    var u = S.T;
    S.T = null;
    var n = x.p;
    try {
      (x.p = 2), lf(l, a, t, e);
    } finally {
      (x.p = n), (S.T = u);
    }
  }
  function Dm(l, a, t, e) {
    var u = S.T;
    S.T = null;
    var n = x.p;
    try {
      (x.p = 8), lf(l, a, t, e);
    } finally {
      (x.p = n), (S.T = u);
    }
  }
  function lf(l, a, t, e) {
    if (Gn) {
      var u = af(e);
      if (u === null) Qi(l, a, e, Qn, t), Io(l, e);
      else if (jm(u, l, a, t, e)) e.stopPropagation();
      else if ((Io(l, e), a & 4 && -1 < xm.indexOf(l))) {
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
                      var f = 1 << (31 - fa(c));
                      (i.entanglements[1] |= f), (c &= ~f);
                    }
                    Ca(n), (sl & 6) === 0 && ((Nn = aa() + 500), gu(0));
                  }
                }
                break;
              case 13:
                (i = ce(n, 2)), i !== null && va(i, n, 2), _n(), Pi(n, 2);
            }
          if (((n = af(e)), n === null && Qi(l, a, e, Qn, t), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else Qi(l, a, e, null, t);
    }
  }
  function af(l) {
    return (l = cc(l)), tf(l);
  }
  var Qn = null;
  function tf(l) {
    if (((Qn = null), (l = wt(l)), l !== null)) {
      var a = U(l);
      if (a === null) l = null;
      else {
        var t = a.tag;
        if (t === 13) {
          if (((l = G(a)), l !== null)) return l;
          l = null;
        } else if (t === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          l = null;
        } else a !== l && (l = null);
      }
    }
    return (Qn = l), null;
  }
  function Fo(l) {
    switch (l) {
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
        switch (je()) {
          case Lt:
            return 2;
          case Kt:
            return 8;
          case at:
          case Re:
            return 32;
          case ju:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ef = !1,
    At = null,
    pt = null,
    Et = null,
    Tu = new Map(),
    _u = new Map(),
    Nt = [],
    xm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Io(l, a) {
    switch (l) {
      case "focusin":
      case "focusout":
        At = null;
        break;
      case "dragenter":
      case "dragleave":
        pt = null;
        break;
      case "mouseover":
      case "mouseout":
        Et = null;
        break;
      case "pointerover":
      case "pointerout":
        Tu.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _u.delete(a.pointerId);
    }
  }
  function Ou(l, a, t, e, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: a,
          domEventName: t,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [u],
        }),
        a !== null && ((a = $t(a)), a !== null && ko(a)),
        l)
      : ((l.eventSystemFlags |= e),
        (a = l.targetContainers),
        u !== null && a.indexOf(u) === -1 && a.push(u),
        l);
  }
  function jm(l, a, t, e, u) {
    switch (a) {
      case "focusin":
        return (At = Ou(At, l, a, t, e, u)), !0;
      case "dragenter":
        return (pt = Ou(pt, l, a, t, e, u)), !0;
      case "mouseover":
        return (Et = Ou(Et, l, a, t, e, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return Tu.set(n, Ou(Tu.get(n) || null, l, a, t, e, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), _u.set(n, Ou(_u.get(n) || null, l, a, t, e, u)), !0
        );
    }
    return !1;
  }
  function Po(l) {
    var a = wt(l.target);
    if (a !== null) {
      var t = U(a);
      if (t !== null) {
        if (((a = t.tag), a === 13)) {
          if (((a = G(t)), a !== null)) {
            (l.blockedOn = a),
              Nd(l.priority, function () {
                if (t.tag === 13) {
                  var e = ma();
                  e = Wn(e);
                  var u = ce(t, e);
                  u !== null && va(u, t, e), Pi(t, e);
                }
              });
            return;
          }
        } else if (a === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Zn(l) {
    if (l.blockedOn !== null) return !1;
    for (var a = l.targetContainers; 0 < a.length; ) {
      var t = af(l.nativeEvent);
      if (t === null) {
        t = l.nativeEvent;
        var e = new t.constructor(t.type, t);
        (nc = e), t.target.dispatchEvent(e), (nc = null);
      } else return (a = $t(t)), a !== null && ko(a), (l.blockedOn = t), !1;
      a.shift();
    }
    return !0;
  }
  function ld(l, a, t) {
    Zn(l) && t.delete(a);
  }
  function Rm() {
    (ef = !1),
      At !== null && Zn(At) && (At = null),
      pt !== null && Zn(pt) && (pt = null),
      Et !== null && Zn(Et) && (Et = null),
      Tu.forEach(ld),
      _u.forEach(ld);
  }
  function Vn(l, a) {
    l.blockedOn === a &&
      ((l.blockedOn = null),
      ef ||
        ((ef = !0),
        M.unstable_scheduleCallback(M.unstable_NormalPriority, Rm)));
  }
  var Ln = null;
  function ad(l) {
    Ln !== l &&
      ((Ln = l),
      M.unstable_scheduleCallback(M.unstable_NormalPriority, function () {
        Ln === l && (Ln = null);
        for (var a = 0; a < l.length; a += 3) {
          var t = l[a],
            e = l[a + 1],
            u = l[a + 2];
          if (typeof e != "function") {
            if (tf(e || t) === null) continue;
            break;
          }
          var n = $t(t);
          n !== null &&
            (l.splice(a, 3),
            (a -= 3),
            ti(n, { pending: !0, data: u, method: t.method, action: e }, e, u));
        }
      }));
  }
  function Mu(l) {
    function a(f) {
      return Vn(f, l);
    }
    At !== null && Vn(At, l),
      pt !== null && Vn(pt, l),
      Et !== null && Vn(Et, l),
      Tu.forEach(a),
      _u.forEach(a);
    for (var t = 0; t < Nt.length; t++) {
      var e = Nt[t];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < Nt.length && ((t = Nt[0]), t.blockedOn === null); )
      Po(t), t.blockedOn === null && Nt.shift();
    if (((t = (l.ownerDocument || l).$$reactFormReplay), t != null))
      for (e = 0; e < t.length; e += 3) {
        var u = t[e],
          n = t[e + 1],
          c = u[ta] || null;
        if (typeof n == "function") c || ad(t);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (c = n[ta] || null))) i = c.formAction;
            else if (tf(u) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? (t[e + 1] = i) : (t.splice(e, 3), (e -= 3)),
            ad(t);
        }
      }
  }
  function uf(l) {
    this._internalRoot = l;
  }
  (Kn.prototype.render = uf.prototype.render =
    function (l) {
      var a = this._internalRoot;
      if (a === null) throw Error(m(409));
      var t = a.current,
        e = ma();
      $o(t, e, l, a, null, null);
    }),
    (Kn.prototype.unmount = uf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var a = l.containerInfo;
          $o(l.current, 2, null, l, null, null), _n(), (a[Jt] = null);
        }
      });
  function Kn(l) {
    this._internalRoot = l;
  }
  Kn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var a = gf();
      l = { blockedOn: null, target: l, priority: a };
      for (var t = 0; t < Nt.length && a !== 0 && a < Nt[t].priority; t++);
      Nt.splice(t, 0, l), t === 0 && Po(l);
    }
  };
  var td = J.version;
  if (td !== "19.1.1") throw Error(m(527, td, "19.1.1"));
  x.findDOMNode = function (l) {
    var a = l._reactInternals;
    if (a === void 0)
      throw typeof l.render == "function"
        ? Error(m(188))
        : ((l = Object.keys(l).join(",")), Error(m(268, l)));
    return (
      (l = C(a)),
      (l = l !== null ? A(l) : null),
      (l = l === null ? null : l.stateNode),
      l
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
        (Ya = Jn.inject(Um)), (Ql = Jn);
      } catch {}
  }
  return (
    (xu.createRoot = function (l, a) {
      if (!j(l)) throw Error(m(299));
      var t = !1,
        e = "",
        u = gr,
        n = br,
        c = Sr,
        i = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (t = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
          a.onCaughtError !== void 0 && (n = a.onCaughtError),
          a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (i = a.unstable_transitionCallbacks)),
        (a = Jo(l, 1, !1, null, null, t, e, u, n, c, i, null)),
        (l[Jt] = a.current),
        Gi(l),
        new uf(a)
      );
    }),
    (xu.hydrateRoot = function (l, a, t) {
      if (!j(l)) throw Error(m(299));
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
        (a = Jo(l, 1, !0, a, t ?? null, e, u, n, c, i, f, y)),
        (a.context = wo(null)),
        (t = a.current),
        (e = ma()),
        (e = Wn(e)),
        (u = it(e)),
        (u.callback = null),
        ft(t, u, e),
        (t = e),
        (a.current.lanes = t),
        He(a, t),
        Ca(a),
        (l[Jt] = a.current),
        Gi(l),
        new Kn(a)
      );
    }),
    (xu.version = "19.1.1"),
    xu
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
    let j = m.match(
      /^([\wÁÉÍÓÚÜÑáéíóúüñ]+)\s*([+-]?\d+D\d+|[+-]?\d+D|[+-]?\d+)$/i
    );
    if (
      !j &&
      ((j = m.match(
        /^([+-]?\d+D\d+|[+-]?\d+D|[+-]?\d+)\s+([\wÁÉÍÓÚÜÑáéíóúüñ]+)$/i
      )),
      j)
    ) {
      const k = j[1];
      (j[1] = j[2]), (j[2] = k);
    }
    if (!j) continue;
    const U = j[1],
      G = j[2],
      ll = wn[U.toUpperCase()] || wn[U];
    if (!ll) continue;
    const C = B[ll] || "";
    if (!G.includes("+") && !G.includes("-")) {
      B[ll] = G;
      continue;
    }
    const A = C.match(/^(\d+)D(\d+)([+-]\d+)?$/),
      q = G.match(/^[+-]?(\d+)D(\d+)([+-]\d+)?$/);
    if (A && q) {
      const k = parseInt(A[1], 10),
        al = parseInt(A[2], 10),
        nl = A[3] ? parseInt(A[3], 10) : 0,
        El = parseInt(q[1], 10),
        Kl = parseInt(q[2], 10),
        Ol = q[3] ? parseInt(q[3], 10) : 0;
      if (al === Kl) {
        const il = k + El,
          Rl = nl + Ol;
        B[ll] = `${il}D${al}${Rl !== 0 ? (Rl > 0 ? "+" : "") + Rl : ""}`;
      } else {
        const il = C.trim(),
          Rl = G.trim().replace(/^\+/, "");
        il.includes(Rl) || (B[ll] = `${il}+${Rl}`);
      }
      continue;
    }
    if (A && /^[+-]?\d+D$/.test(G)) {
      const k = parseInt(A[1], 10),
        al = parseInt(A[2], 10),
        nl = A[3] ? parseInt(A[3], 10) : 0,
        El = parseInt(G.replace("D", ""), 10);
      B[ll] = `${k + El}D${al}${nl !== 0 ? (nl > 0 ? "+" : "") + nl : ""}`;
      continue;
    }
    if (A && /^[+-]?\d+$/.test(G)) {
      const k = parseInt(A[1], 10),
        al = parseInt(A[2], 10);
      let nl = A[3] ? parseInt(A[3], 10) : 0;
      (nl += parseInt(G, 10)),
        (B[ll] = `${k}D${al}${nl !== 0 ? (nl > 0 ? "+" : "") + nl : ""}`);
      continue;
    }
    if (/^[+-]?\d+$/.test(G)) {
      const k = parseInt(C || "0", 10);
      B[ll] = (k + parseInt(G, 10)).toString();
      continue;
    }
    B[ll] = G;
  }
  return B;
}
function hd(M, J) {
  const B = M.caracteristicas,
    m = J?.variacion_caracteristicas;
  let j = gd(B, m);
  if (J?.variacion_caracMINMAX && J.variacion_caracMINMAX.length > 0) {
    const U = bd(J.variacion_caracMINMAX);
    j = Km(j, U);
  }
  return j;
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
    const j = B.match(/^MAX\s+(\w+)\s+(\d+)$/i);
    if (j) {
      const U = wn[j[1].toUpperCase()];
      if (U) {
        const G = parseInt(j[2], 10);
        J.push({ caracteristica: U, tipo: "MAX", valor: G });
      }
    }
  }
  return J;
}
function Km(M, J) {
  const B = { ...M };
  for (const m of J) {
    const j = B[m.caracteristica];
    if (j && m.tipo === "MIN" && m.dados) {
      const U = j.match(/^(\d+)D(\d+)([+-]\d+)?$/);
      if (U) {
        const G = parseInt(U[1], 10),
          ll = parseInt(U[2], 10),
          C = U[3] ? U[3] : "";
        G < m.dados &&
          ((B[m.caracteristica] = `${m.dados}D${ll}${C}`),
          console.log(
            "[Aplicando límite MIN]",
            m.caracteristica,
            `${G}D${ll}${C} -> ${m.dados}D${ll}${C}`
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
    const j = J.match(m);
    if (j) {
      let U, G;
      m === B[0]
        ? ((U = parseInt(j[1].replace(/[+]/g, ""))), (G = j[2]))
        : ((G = j[1]), (U = parseInt(j[2].replace(/[+]/g, ""))));
      const ll = wm(G);
      if (ll && !isNaN(U)) return { habilidad: ll, valor: U };
    }
  }
  return null;
}
function $m() {
  const M = () =>
      tl
        ? s.jsx("div", {
            className: "raza-card",
            children: s.jsxs("div", {
              className: "raza-content",
              children: [
                s.jsxs("h3", {
                  className: "raza-title",
                  children: ["Nacionalidad: ", tl.nombre],
                }),
                s.jsx("hr", { className: "raza-divider" }),
                tl.variacion_caracteristicas &&
                  tl.variacion_caracteristicas.length > 0 &&
                  s.jsxs("div", {
                    className: "raza-section",
                    children: [
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Variaciones de Características",
                      }),
                      s.jsx("div", {
                        className: "raza-list",
                        children: tl.variacion_caracteristicas.map((h, T) =>
                          s.jsx(
                            "div",
                            {
                              className: "raza-list-item",
                              children: s.jsx("span", {
                                className: "raza-characteristic-name",
                                children: h,
                              }),
                            },
                            T
                          )
                        ),
                      }),
                    ],
                  }),
                tl.origen_social &&
                  s.jsxs("div", {
                    className: "raza-section",
                    children: [
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Origen social",
                      }),
                      s.jsx("div", {
                        className: "raza-list",
                        children: Array.isArray(tl.origen_social)
                          ? tl.origen_social.map((h, T) =>
                              s.jsx(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: s.jsx("span", {
                                    className: "raza-characteristic-name",
                                    children: h,
                                  }),
                                },
                                T
                              )
                            )
                          : s.jsx("div", {
                              className: "raza-list-item",
                              children: s.jsx("span", {
                                className: "raza-characteristic-name",
                                children: tl.origen_social,
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
      il
        ? s.jsx("div", {
            className: "raza-card",
            children: s.jsxs("div", {
              className: "raza-content",
              children: [
                s.jsxs("h3", {
                  className: "raza-title",
                  children: ["Origen: ", il.nombre],
                }),
                il.info_Origen &&
                  il.info_Origen.trim() !== "" &&
                  s.jsx("p", {
                    className: "raza-description",
                    children: il.info_Origen,
                  }),
                s.jsx("hr", { className: "raza-divider" }),
                il.variacion_habilidades &&
                  il.variacion_habilidades.length > 0 &&
                  s.jsxs("div", {
                    className: "raza-section",
                    children: [
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Bonificaciones de Habilidades",
                      }),
                      s.jsx("div", {
                        className: "raza-list",
                        children: il.variacion_habilidades.map((h, T) =>
                          s.jsxs(
                            "div",
                            {
                              className: "raza-list-item",
                              children: [
                                s.jsx("span", {
                                  className: "raza-bonus-name",
                                  children: h,
                                }),
                                s.jsx("span", {
                                  className: "raza-chip raza-chip-secondary",
                                  children: "Habilidad",
                                }),
                              ],
                            },
                            T
                          )
                        ),
                      }),
                    ],
                  }),
                il.variacion_bonus_combate &&
                  Object.keys(il.variacion_bonus_combate).length > 0 &&
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
                          il.variacion_bonus_combate
                        ).map(([h, T], N) =>
                          s.jsxs(
                            "div",
                            {
                              className: "raza-list-item",
                              children: [
                                s.jsxs("span", {
                                  className: "raza-bonus-name",
                                  children: [h, ":"],
                                }),
                                s.jsx("span", {
                                  className: "raza-chip raza-chip-secondary",
                                  children: T,
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
    [B, m] = jl.useState(!0),
    j = () => {
      B && m(!1);
    },
    [U, G] = jl.useState(null),
    [ll, C] = jl.useState([]),
    [A, q] = jl.useState([]),
    [k, al] = jl.useState([]),
    [nl, El] = jl.useState([]),
    [Kl, Ol] = jl.useState([]),
    [il, Rl] = jl.useState(null),
    [w, ia] = jl.useState(null),
    [O, Jl] = jl.useState(null),
    [tl, wl] = jl.useState(null);
  jl.useEffect(() => {
    if (!tl) {
      Ol(nl);
      return;
    }
    let h = [];
    if (Array.isArray(tl.origen_social))
      h = tl.origen_social.map((N) => {
        const X = N.split(":");
        return X.length > 1
          ? X[1].trim().toUpperCase()
          : N.trim().toUpperCase();
      });
    else if (typeof tl.origen_social == "string") {
      Ol(nl);
      return;
    }
    const T = nl.filter((N) => h.includes(N.nombre.trim().toUpperCase()));
    Ol(T);
  }, [tl, nl]);
  const [Cl, Ma] = jl.useState(null),
    [Ml, bl] = jl.useState({}),
    [Da, qa] = jl.useState(!0),
    [Nl, S] = jl.useState([]),
    x = (h, T) => {
      const N = parseInt(T, 10);
      if (!isNaN(N) && Nl.length > 0) {
        const X = md(h, N, Nl);
        if (!X.valido && X.valorCorregido !== void 0) {
          bl((V) => ({ ...V, [h]: X.valorCorregido.toString() }));
          return;
        }
      }
      bl((X) => ({ ...X, [h]: T }));
    };
  function Q(h) {
    let T = 0;
    const N = /([+-]?\d+)D(\d+)/gi;
    let X;
    for (; (X = N.exec(h)) !== null; ) {
      const zl = parseInt(X[1], 10),
        yl = parseInt(X[2], 10),
        la = Math.sign(zl);
      for (let Fl = 0; Fl < Math.abs(zl); Fl++) {
        let Il = Math.floor(Math.random() * yl) + 1;
        Da && Il < 2 && (Il = 2), (T += la * Il);
      }
    }
    const V = /([+-]\d+)(?!D)/g;
    let ql;
    for (; (ql = V.exec(h)) !== null; ) T += parseInt(ql[1], 10);
    return T;
  }
  const fl = () => {
      if (
        !Cl ||
        (Object.values(Ml).some((Ba) => Ba && Ba.trim() !== "") &&
          !window.confirm(
            "¿Seguro que quieres generar tiradas aleatorias? Se borrarán los valores que hayas insertado manualmente."
          ))
      )
        return;
      const h = {};
      Object.entries(Cl).forEach(([Ba, Ru]) => {
        if (typeof Ru == "string") {
          let Ya = Q(Ru);
          if (Nl.length > 0) {
            const Ql = md(Ba, Ya, Nl);
            !Ql.valido &&
              Ql.valorCorregido !== void 0 &&
              (Ya = Ql.valorCorregido);
          }
          h[Ba] = Ya.toString();
        }
      }),
        bl(h);
      const T = parseInt(h.Fuerza || "0", 10);
      let N = "";
      T >= 18 && T <= 23
        ? (N = "+1")
        : T >= 24 && T <= 30
        ? (N = "+1D4")
        : T >= 31 && T <= 38
        ? (N = "+1D6")
        : T >= 39 && T <= 45
        ? (N = "+1D10")
        : T >= 46
        ? (N = "+2D6")
        : (N = "Sin bonus");
      const X = parseInt(h.Destreza || "0", 10),
        V = T + X;
      let ql = "NO TIENE";
      O &&
        ["ARQUERO", "CASACA AZUL", "ILMIONARIO", "GUARDABOSQUES"].some(
          (Ba) => O.nombre.toUpperCase() === Ba.toUpperCase()
        ) &&
        (V >= 0 && V <= 24
          ? (ql = "Nada")
          : V >= 25 && V <= 40
          ? (ql = "+1D4")
          : V >= 41 && V <= 52
          ? (ql = "+2D4")
          : V >= 53 && (ql = "2D4+1"));
      const yl = parseInt(h.Inteligencia || "0", 10),
        la = parseInt(h.Constitución || "0", 10),
        Fl = parseInt(h.Poder || "0", 10),
        Il = parseInt(h.Carisma || "0", 10),
        xa = parseInt(h.Tamaño || "0", 10);
      let lt = 0;
      yl >= 1 && yl <= 10
        ? (lt = yl)
        : yl >= 11 && yl <= 18
        ? (lt = yl + 20)
        : yl >= 19 && (lt = yl + 30);
      const aa = yl + X + 10,
        je = Math.floor(la / 2) + yl + Fl + Il - 5,
        Lt = X * 2 + yl + Fl - xa - 5,
        Kt = yl * 2 + X + Il - 15,
        at = yl + Math.floor(T / 2) + Fl + X - xa - 5,
        Re = Fl + Il + yl + 40 - la,
        ju = Math.max(1, la + xa - 12);
      G({
        bonusCC: `Bonus de Fuerza CC: ${N}`,
        bonusAA: `Bonus de Fuerza AA: ${ql}`,
        conocimiento: lt,
        percepcion: aa,
        comunicacion: je,
        agilidad: Lt,
        manipulacion: Kt,
        discrecion: at,
        saludMental: Re,
        puntosVida: ju,
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
                            ([h, T]) =>
                              s.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    s.jsxs("span", {
                                      className: "raza-characteristic-name",
                                      children: [h, ":"],
                                    }),
                                    s.jsx("span", {
                                      className:
                                        "raza-chip raza-chip-secondary",
                                      children: T,
                                    }),
                                  ],
                                },
                                h
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
                            ([h, T]) =>
                              s.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    s.jsxs("span", {
                                      className: "raza-bonus-name",
                                      children: [h, ":"],
                                    }),
                                    s.jsx("span", {
                                      className: "raza-chip raza-chip-success",
                                      children: T,
                                    }),
                                  ],
                                },
                                h
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
                            children: O.variacion_caracteristicas.map((h, T) =>
                              s.jsx(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: s.jsx("span", {
                                    className: "raza-characteristic-name",
                                    children: h,
                                  }),
                                },
                                T
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
                            children: O.variacion_caracMINMAX.map((h, T) =>
                              s.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    s.jsx("span", {
                                      className: "raza-characteristic-name",
                                      children: h,
                                    }),
                                    s.jsx("span", {
                                      className: "raza-chip raza-chip-warning",
                                      children: "Límite",
                                    }),
                                  ],
                                },
                                T
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
                            children: O.variacion_habilidades.map((h, T) =>
                              s.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    s.jsx("span", {
                                      className: "raza-bonus-name",
                                      children: h,
                                    }),
                                    s.jsx("span", {
                                      className:
                                        "raza-chip raza-chip-secondary",
                                      children: "Habilidad",
                                    }),
                                  ],
                                },
                                T
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
      if (!w && !O && !il) return null;
      const h = {};
      return (
        w &&
          Object.entries(w.bonificaciones).forEach(([T, N]) => {
            if (typeof N == "number") h[T] = (h[T] || 0) + N;
            else if (typeof N == "string") {
              const X = parseInt(N.replace(/[+-]/g, "")) || 0,
                V = N.startsWith("-") ? -1 : 1;
              h[T] = (h[T] || 0) + X * V;
            }
          }),
        O &&
          O.variacion_habilidades &&
          O.variacion_habilidades.forEach((T) => {
            const N = T.trim();
            if (
              N.includes("Regeneración de SM") ||
              N.includes("al día") ||
              N.includes("1D6") ||
              N === ""
            )
              return;
            const X = yd(N);
            if (X) {
              h[X.habilidad] = (h[X.habilidad] || 0) + X.valor;
              return;
            }
            if (N.includes("100%") || N.includes("+100")) {
              const V = N.replace(/(\+100|100\s*%).*$/, "").trim();
              V && (h[V] = 100);
            }
          }),
        il &&
          il.variacion_habilidades &&
          il.variacion_habilidades.forEach((T) => {
            const N = T.trim();
            if (
              N.includes("Regeneración de SM") ||
              N.includes("al día") ||
              N.includes("1D6") ||
              N === ""
            )
              return;
            const X = yd(N);
            if (X) {
              h[X.habilidad] = (h[X.habilidad] || 0) + X.valor;
              return;
            }
            if (N.includes("100%") || N.includes("+100")) {
              const V = N.replace(/(\+100|100\s*%).*$/, "").trim();
              V && (h[V] = 100);
            }
          }),
        h
      );
    },
    D = () => {
      const h = R();
      return !h || Object.keys(h).length === 0
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
                children: Object.entries(h).map(([T, N]) =>
                  s.jsxs(
                    "li",
                    {
                      className: "ficha-resultado-item",
                      children: [
                        s.jsxs("b", {
                          className: "ficha-resultado-carac",
                          children: [T, ":"],
                        }),
                        " ",
                        s.jsx("span", {
                          className:
                            "raza-chip raza-chip-success bonificacion-chip",
                          children: N > 0 ? `+${N}` : N,
                        }),
                      ],
                    },
                    T
                  )
                ),
              }),
            ],
          });
    };
  return (
    jl.useEffect(() => {
      fetch("/StromRol/Razas.json")
        .then((h) => h.json())
        .then((h) => C(h.razas)),
        fetch("/StromRol/Clases.json")
          .then((h) => h.json())
          .then((h) => q(h.clases)),
        fetch("/StromRol/Nacionalidad.json")
          .then((h) => h.json())
          .then((h) => al(h.nacionalidades)),
        fetch("/StromRol/Origen.json")
          .then((h) => h.json())
          .then((h) => El(h.origenes));
    }, []),
    jl.useEffect(() => {
      if ((bl({}), w))
        if (["SELOROK", "DEMONIOS"].includes(w.nombre.toUpperCase())) Ma(hd(w));
        else {
          const h = O
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
          let T = hd(w, h);
          tl &&
            tl.variacion_caracteristicas &&
            (T = gd(T, tl.variacion_caracteristicas)),
            Ma(T);
        }
      else Ma(null);
    }, [w, O, tl]),
    jl.useEffect(() => {
      if (O) {
        const h = Jm(O);
        S(h);
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
              onChange: (h) => {
                const T = ll.find((N) => N.nombre === h.target.value);
                ia(T || null),
                  j(),
                  G(null),
                  T &&
                    ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                      T.nombre.toUpperCase()
                    ) &&
                    Jl(null);
              },
              children: [
                s.jsx("option", { value: "", children: "Elige una raza" }),
                ll.map((h) =>
                  s.jsx(
                    "option",
                    { value: h.nombre, children: h.nombre.toUpperCase() },
                    h.nombre
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
              onChange: (h) => {
                const T = A.find((N) => N.nombre === h.target.value);
                Jl(T || null), bl({}), G(null), wl(null), Rl(null), j();
              },
              disabled: !!(
                w &&
                ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                  w.nombre.toUpperCase()
                )
              ),
              children: [
                s.jsx("option", { value: "", children: "Elige una clase" }),
                A.map((h) =>
                  s.jsx(
                    "option",
                    { value: h.nombre, children: h.nombre.toUpperCase() },
                    h.nombre
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
              value: tl?.nombre || "",
              onChange: (h) => {
                const T = k.find((N) => N.nombre === h.target.value);
                wl(T || null), bl({}), G(null), j();
              },
              disabled: !w,
              children: [
                s.jsx("option", {
                  value: "",
                  children: "Elige una nacionalidad",
                }),
                k.map((h) =>
                  s.jsx(
                    "option",
                    { value: h.nombre, children: h.nombre },
                    h.nombre
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
              value: il?.nombre || "",
              onChange: (h) => {
                const T = Kl.find((N) => N.nombre === h.target.value);
                Rl(T || null), j();
              },
              disabled: !tl,
              children: [
                s.jsx("option", { value: "", children: "Elige un origen" }),
                Kl.map((h) =>
                  s.jsx(
                    "option",
                    { value: h.nombre, children: h.nombre },
                    h.nombre
                  )
                ),
              ],
            }),
          ],
        }),
        Cl &&
          s.jsxs("div", {
            className: "ficha-resultado",
            children: [
              s.jsx("h3", {
                className: "ficha-resultado-title",
                children: "Dados que debe tirar el jugador:",
              }),
              s.jsx("ul", {
                className: "ficha-resultado-list",
                children: Object.entries(Cl).map(([h, T]) =>
                  s.jsxs(
                    "li",
                    {
                      className: "ficha-resultado-item",
                      children: [
                        s.jsxs("b", {
                          className: "ficha-resultado-carac",
                          children: [h, ":"],
                        }),
                        " ",
                        s.jsx("span", {
                          className: "ficha-resultado-dado",
                          children: T,
                        }),
                        s.jsx("input", {
                          type: "number",
                          min: "1",
                          className: "ficha-resultado-input",
                          placeholder: "Tirada",
                          value: Ml[h] || "",
                          onChange: (N) => {
                            x(h, N.target.value);
                          },
                        }),
                      ],
                    },
                    h
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
                      checked: Da,
                      onChange: (h) => qa(h.target.checked),
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
                    onClick: fl,
                    disabled: Object.keys(Cl || {}).length === 0,
                    children: "Generar tiradas aleatorias",
                  }),
                  s.jsx("button", {
                    className: "ficha-habilidades-btn",
                    disabled:
                      Object.keys(Cl || {}).length === 0 ||
                      Object.entries(Cl || {}).some(([h]) => !Ml[h]),
                    onClick: () => {
                      const h = parseInt(Ml.Fuerza || "0", 10);
                      let T = "";
                      h >= 18 && h <= 23
                        ? (T = "+1")
                        : h >= 24 && h <= 30
                        ? (T = "+1D4")
                        : h >= 31 && h <= 38
                        ? (T = "+1D6")
                        : h >= 39 && h <= 45
                        ? (T = "+1D10")
                        : h >= 46
                        ? (T = "+2D6")
                        : (T = "Sin bonus");
                      const N = parseInt(Ml.Destreza || "0", 10),
                        X = h + N;
                      let V = "NO TIENE";
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
                          ? (V = "Nada")
                          : X >= 25 && X <= 40
                          ? (V = "+1D4")
                          : X >= 41 && X <= 52
                          ? (V = "+2D4")
                          : X >= 53 && (V = "2D4+1"));
                      const zl = parseInt(Ml.Inteligencia || "0", 10),
                        yl = parseInt(Ml.Constitución || "0", 10),
                        la = parseInt(Ml.Poder || "0", 10),
                        Fl = parseInt(Ml.Carisma || "0", 10),
                        Il = parseInt(Ml.Tamaño || "0", 10);
                      let xa = 0;
                      zl >= 1 && zl <= 10
                        ? (xa = zl)
                        : zl >= 11 && zl <= 18
                        ? (xa = zl + 20)
                        : zl >= 19 && (xa = zl + 30);
                      const lt = zl + N + 10,
                        aa = Math.floor(yl / 2) + zl + la + Fl - 5,
                        je = N * 2 + zl + la - Il - 5,
                        Lt = zl * 2 + N + Fl - 15,
                        Kt = zl + Math.floor(h / 2) + la + N - Il - 5,
                        at = la + Fl + zl + 40 - yl;
                      G({
                        bonusCC: `Bonus de Fuerza CC: ${T}`,
                        bonusAA: `Bonus de Fuerza AA: ${V}`,
                        conocimiento: xa,
                        percepcion: lt,
                        comunicacion: aa,
                        agilidad: je,
                        manipulacion: Lt,
                        discrecion: Kt,
                        saludMental: at,
                        puntosVida: Math.max(1, yl + Il - 12),
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
  s.jsx(jl.StrictMode, { children: s.jsx($m, {}) })
);
