(function () {
  const el = document.createElement("link").relList;
  if (el && el.supports && el.supports("modulepreload")) return;
  for (const x of document.querySelectorAll('link[rel="modulepreload"]')) h(x);
  new MutationObserver((x) => {
    for (const L of x)
      if (L.type === "childList")
        for (const K of L.addedNodes)
          K.tagName === "LINK" && K.rel === "modulepreload" && h(K);
  }).observe(document, { childList: !0, subtree: !0 });
  function G(x) {
    const L = {};
    return (
      x.integrity && (L.integrity = x.integrity),
      x.referrerPolicy && (L.referrerPolicy = x.referrerPolicy),
      x.crossOrigin === "use-credentials"
        ? (L.credentials = "include")
        : x.crossOrigin === "anonymous"
        ? (L.credentials = "omit")
        : (L.credentials = "same-origin"),
      L
    );
  }
  function h(x) {
    if (x.ep) return;
    x.ep = !0;
    const L = G(x);
    fetch(x.href, L);
  }
})();
var Wi = { exports: {} },
  gu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wd;
function Uh() {
  if (Wd) return gu;
  Wd = 1;
  var _ = Symbol.for("react.transitional.element"),
    el = Symbol.for("react.fragment");
  function G(h, x, L) {
    var K = null;
    if (
      (L !== void 0 && (K = "" + L),
      x.key !== void 0 && (K = "" + x.key),
      "key" in x)
    ) {
      L = {};
      for (var J in x) J !== "key" && (L[J] = x[J]);
    } else L = x;
    return (
      (x = L.ref),
      { $$typeof: _, type: h, key: K, ref: x !== void 0 ? x : null, props: L }
    );
  }
  return (gu.Fragment = el), (gu.jsx = G), (gu.jsxs = G), gu;
}
var kd;
function xh() {
  return kd || ((kd = 1), (Wi.exports = Uh())), Wi.exports;
}
var v = xh(),
  ki = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fd;
function jh() {
  if (Fd) return W;
  Fd = 1;
  var _ = Symbol.for("react.transitional.element"),
    el = Symbol.for("react.portal"),
    G = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    x = Symbol.for("react.profiler"),
    L = Symbol.for("react.consumer"),
    K = Symbol.for("react.context"),
    J = Symbol.for("react.forward_ref"),
    j = Symbol.for("react.suspense"),
    b = Symbol.for("react.memo"),
    R = Symbol.for("react.lazy"),
    O = Symbol.iterator;
  function w(s) {
    return s === null || typeof s != "object"
      ? null
      : ((s = (O && s[O]) || s["@@iterator"]),
        typeof s == "function" ? s : null);
  }
  var ul = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Nl = Object.assign,
    zl = {};
  function Rl(s, T, M) {
    (this.props = s),
      (this.context = T),
      (this.refs = zl),
      (this.updater = M || ul);
  }
  (Rl.prototype.isReactComponent = {}),
    (Rl.prototype.setState = function (s, T) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, s, T, "setState");
    }),
    (Rl.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    });
  function pa() {}
  pa.prototype = Rl.prototype;
  function za(s, T, M) {
    (this.props = s),
      (this.context = T),
      (this.refs = zl),
      (this.updater = M || ul);
  }
  var Ul = (za.prototype = new pa());
  (Ul.constructor = za), Nl(Ul, Rl.prototype), (Ul.isPureReactComponent = !0);
  var la = Array.isArray,
    nl = { H: null, A: null, T: null, S: null, V: null },
    Ll = Object.prototype.hasOwnProperty;
  function Kl(s, T, M, D, B, ll) {
    return (
      (M = ll.ref),
      { $$typeof: _, type: s, key: T, ref: M !== void 0 ? M : null, props: ll }
    );
  }
  function Jl(s, T) {
    return Kl(s.type, T, void 0, void 0, void 0, s.props);
  }
  function p(s) {
    return typeof s == "object" && s !== null && s.$$typeof === _;
  }
  function C(s) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      s.replace(/[=:]/g, function (M) {
        return T[M];
      })
    );
  }
  var Y = /\/+/g;
  function $(s, T) {
    return typeof s == "object" && s !== null && s.key != null
      ? C("" + s.key)
      : T.toString(36);
  }
  function dl() {}
  function Xl(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (
          (typeof s.status == "string"
            ? s.then(dl, dl)
            : ((s.status = "pending"),
              s.then(
                function (T) {
                  s.status === "pending" &&
                    ((s.status = "fulfilled"), (s.value = T));
                },
                function (T) {
                  s.status === "pending" &&
                    ((s.status = "rejected"), (s.reason = T));
                }
              )),
          s.status)
        ) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function al(s, T, M, D, B) {
    var ll = typeof s;
    (ll === "undefined" || ll === "boolean") && (s = null);
    var Z = !1;
    if (s === null) Z = !0;
    else
      switch (ll) {
        case "bigint":
        case "string":
        case "number":
          Z = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case _:
            case el:
              Z = !0;
              break;
            case R:
              return (Z = s._init), al(Z(s._payload), T, M, D, B);
          }
      }
    if (Z)
      return (
        (B = B(s)),
        (Z = D === "" ? "." + $(s, 0) : D),
        la(B)
          ? ((M = ""),
            Z != null && (M = Z.replace(Y, "$&/") + "/"),
            al(B, T, M, "", function (wl) {
              return wl;
            }))
          : B != null &&
            (p(B) &&
              (B = Jl(
                B,
                M +
                  (B.key == null || (s && s.key === B.key)
                    ? ""
                    : ("" + B.key).replace(Y, "$&/") + "/") +
                  Z
              )),
            T.push(B)),
        1
      );
    Z = 0;
    var Bl = D === "" ? "." : D + ":";
    if (la(s))
      for (var yl = 0; yl < s.length; yl++)
        (D = s[yl]), (ll = Bl + $(D, yl)), (Z += al(D, T, M, ll, B));
    else if (((yl = w(s)), typeof yl == "function"))
      for (s = yl.call(s), yl = 0; !(D = s.next()).done; )
        (D = D.value), (ll = Bl + $(D, yl++)), (Z += al(D, T, M, ll, B));
    else if (ll === "object") {
      if (typeof s.then == "function") return al(Xl(s), T, M, D, B);
      throw (
        ((T = String(s)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return Z;
  }
  function S(s, T, M) {
    if (s == null) return s;
    var D = [],
      B = 0;
    return (
      al(s, D, "", "", function (ll) {
        return T.call(M, ll, B++);
      }),
      D
    );
  }
  function N(s) {
    if (s._status === -1) {
      var T = s._result;
      (T = T()),
        T.then(
          function (M) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 1), (s._result = M));
          },
          function (M) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 2), (s._result = M));
          }
        ),
        s._status === -1 && ((s._status = 0), (s._result = T));
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var H =
    typeof reportError == "function"
      ? reportError
      : function (s) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var T = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof s == "object" &&
                s !== null &&
                typeof s.message == "string"
                  ? String(s.message)
                  : String(s),
              error: s,
            });
            if (!window.dispatchEvent(T)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", s);
            return;
          }
          console.error(s);
        };
  function tl() {}
  return (
    (W.Children = {
      map: S,
      forEach: function (s, T, M) {
        S(
          s,
          function () {
            T.apply(this, arguments);
          },
          M
        );
      },
      count: function (s) {
        var T = 0;
        return (
          S(s, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (s) {
        return (
          S(s, function (T) {
            return T;
          }) || []
        );
      },
      only: function (s) {
        if (!p(s))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return s;
      },
    }),
    (W.Component = Rl),
    (W.Fragment = G),
    (W.Profiler = x),
    (W.PureComponent = za),
    (W.StrictMode = h),
    (W.Suspense = j),
    (W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = nl),
    (W.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (s) {
        return nl.H.useMemoCache(s);
      },
    }),
    (W.cache = function (s) {
      return function () {
        return s.apply(null, arguments);
      };
    }),
    (W.cloneElement = function (s, T, M) {
      if (s == null)
        throw Error(
          "The argument must be a React element, but you passed " + s + "."
        );
      var D = Nl({}, s.props),
        B = s.key,
        ll = void 0;
      if (T != null)
        for (Z in (T.ref !== void 0 && (ll = void 0),
        T.key !== void 0 && (B = "" + T.key),
        T))
          !Ll.call(T, Z) ||
            Z === "key" ||
            Z === "__self" ||
            Z === "__source" ||
            (Z === "ref" && T.ref === void 0) ||
            (D[Z] = T[Z]);
      var Z = arguments.length - 2;
      if (Z === 1) D.children = M;
      else if (1 < Z) {
        for (var Bl = Array(Z), yl = 0; yl < Z; yl++)
          Bl[yl] = arguments[yl + 2];
        D.children = Bl;
      }
      return Kl(s.type, B, void 0, void 0, ll, D);
    }),
    (W.createContext = function (s) {
      return (
        (s = {
          $$typeof: K,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: L, _context: s }),
        s
      );
    }),
    (W.createElement = function (s, T, M) {
      var D,
        B = {},
        ll = null;
      if (T != null)
        for (D in (T.key !== void 0 && (ll = "" + T.key), T))
          Ll.call(T, D) &&
            D !== "key" &&
            D !== "__self" &&
            D !== "__source" &&
            (B[D] = T[D]);
      var Z = arguments.length - 2;
      if (Z === 1) B.children = M;
      else if (1 < Z) {
        for (var Bl = Array(Z), yl = 0; yl < Z; yl++)
          Bl[yl] = arguments[yl + 2];
        B.children = Bl;
      }
      if (s && s.defaultProps)
        for (D in ((Z = s.defaultProps), Z)) B[D] === void 0 && (B[D] = Z[D]);
      return Kl(s, ll, void 0, void 0, null, B);
    }),
    (W.createRef = function () {
      return { current: null };
    }),
    (W.forwardRef = function (s) {
      return { $$typeof: J, render: s };
    }),
    (W.isValidElement = p),
    (W.lazy = function (s) {
      return { $$typeof: R, _payload: { _status: -1, _result: s }, _init: N };
    }),
    (W.memo = function (s, T) {
      return { $$typeof: b, type: s, compare: T === void 0 ? null : T };
    }),
    (W.startTransition = function (s) {
      var T = nl.T,
        M = {};
      nl.T = M;
      try {
        var D = s(),
          B = nl.S;
        B !== null && B(M, D),
          typeof D == "object" &&
            D !== null &&
            typeof D.then == "function" &&
            D.then(tl, H);
      } catch (ll) {
        H(ll);
      } finally {
        nl.T = T;
      }
    }),
    (W.unstable_useCacheRefresh = function () {
      return nl.H.useCacheRefresh();
    }),
    (W.use = function (s) {
      return nl.H.use(s);
    }),
    (W.useActionState = function (s, T, M) {
      return nl.H.useActionState(s, T, M);
    }),
    (W.useCallback = function (s, T) {
      return nl.H.useCallback(s, T);
    }),
    (W.useContext = function (s) {
      return nl.H.useContext(s);
    }),
    (W.useDebugValue = function () {}),
    (W.useDeferredValue = function (s, T) {
      return nl.H.useDeferredValue(s, T);
    }),
    (W.useEffect = function (s, T, M) {
      var D = nl.H;
      if (typeof M == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return D.useEffect(s, T);
    }),
    (W.useId = function () {
      return nl.H.useId();
    }),
    (W.useImperativeHandle = function (s, T, M) {
      return nl.H.useImperativeHandle(s, T, M);
    }),
    (W.useInsertionEffect = function (s, T) {
      return nl.H.useInsertionEffect(s, T);
    }),
    (W.useLayoutEffect = function (s, T) {
      return nl.H.useLayoutEffect(s, T);
    }),
    (W.useMemo = function (s, T) {
      return nl.H.useMemo(s, T);
    }),
    (W.useOptimistic = function (s, T) {
      return nl.H.useOptimistic(s, T);
    }),
    (W.useReducer = function (s, T, M) {
      return nl.H.useReducer(s, T, M);
    }),
    (W.useRef = function (s) {
      return nl.H.useRef(s);
    }),
    (W.useState = function (s) {
      return nl.H.useState(s);
    }),
    (W.useSyncExternalStore = function (s, T, M) {
      return nl.H.useSyncExternalStore(s, T, M);
    }),
    (W.useTransition = function () {
      return nl.H.useTransition();
    }),
    (W.version = "19.1.1"),
    W
  );
}
var Id;
function af() {
  return Id || ((Id = 1), (ki.exports = jh())), ki.exports;
}
var ba = af(),
  Fi = { exports: {} },
  Su = {},
  Ii = { exports: {} },
  Pi = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pd;
function Hh() {
  return (
    Pd ||
      ((Pd = 1),
      (function (_) {
        function el(S, N) {
          var H = S.length;
          S.push(N);
          l: for (; 0 < H; ) {
            var tl = (H - 1) >>> 1,
              s = S[tl];
            if (0 < x(s, N)) (S[tl] = N), (S[H] = s), (H = tl);
            else break l;
          }
        }
        function G(S) {
          return S.length === 0 ? null : S[0];
        }
        function h(S) {
          if (S.length === 0) return null;
          var N = S[0],
            H = S.pop();
          if (H !== N) {
            S[0] = H;
            l: for (var tl = 0, s = S.length, T = s >>> 1; tl < T; ) {
              var M = 2 * (tl + 1) - 1,
                D = S[M],
                B = M + 1,
                ll = S[B];
              if (0 > x(D, H))
                B < s && 0 > x(ll, D)
                  ? ((S[tl] = ll), (S[B] = H), (tl = B))
                  : ((S[tl] = D), (S[M] = H), (tl = M));
              else if (B < s && 0 > x(ll, H))
                (S[tl] = ll), (S[B] = H), (tl = B);
              else break l;
            }
          }
          return N;
        }
        function x(S, N) {
          var H = S.sortIndex - N.sortIndex;
          return H !== 0 ? H : S.id - N.id;
        }
        if (
          ((_.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var L = performance;
          _.unstable_now = function () {
            return L.now();
          };
        } else {
          var K = Date,
            J = K.now();
          _.unstable_now = function () {
            return K.now() - J;
          };
        }
        var j = [],
          b = [],
          R = 1,
          O = null,
          w = 3,
          ul = !1,
          Nl = !1,
          zl = !1,
          Rl = !1,
          pa = typeof setTimeout == "function" ? setTimeout : null,
          za = typeof clearTimeout == "function" ? clearTimeout : null,
          Ul = typeof setImmediate < "u" ? setImmediate : null;
        function la(S) {
          for (var N = G(b); N !== null; ) {
            if (N.callback === null) h(b);
            else if (N.startTime <= S)
              h(b), (N.sortIndex = N.expirationTime), el(j, N);
            else break;
            N = G(b);
          }
        }
        function nl(S) {
          if (((zl = !1), la(S), !Nl))
            if (G(j) !== null) (Nl = !0), Ll || ((Ll = !0), $());
            else {
              var N = G(b);
              N !== null && al(nl, N.startTime - S);
            }
        }
        var Ll = !1,
          Kl = -1,
          Jl = 5,
          p = -1;
        function C() {
          return Rl ? !0 : !(_.unstable_now() - p < Jl);
        }
        function Y() {
          if (((Rl = !1), Ll)) {
            var S = _.unstable_now();
            p = S;
            var N = !0;
            try {
              l: {
                (Nl = !1), zl && ((zl = !1), za(Kl), (Kl = -1)), (ul = !0);
                var H = w;
                try {
                  a: {
                    for (
                      la(S), O = G(j);
                      O !== null && !(O.expirationTime > S && C());

                    ) {
                      var tl = O.callback;
                      if (typeof tl == "function") {
                        (O.callback = null), (w = O.priorityLevel);
                        var s = tl(O.expirationTime <= S);
                        if (((S = _.unstable_now()), typeof s == "function")) {
                          (O.callback = s), la(S), (N = !0);
                          break a;
                        }
                        O === G(j) && h(j), la(S);
                      } else h(j);
                      O = G(j);
                    }
                    if (O !== null) N = !0;
                    else {
                      var T = G(b);
                      T !== null && al(nl, T.startTime - S), (N = !1);
                    }
                  }
                  break l;
                } finally {
                  (O = null), (w = H), (ul = !1);
                }
                N = void 0;
              }
            } finally {
              N ? $() : (Ll = !1);
            }
          }
        }
        var $;
        if (typeof Ul == "function")
          $ = function () {
            Ul(Y);
          };
        else if (typeof MessageChannel < "u") {
          var dl = new MessageChannel(),
            Xl = dl.port2;
          (dl.port1.onmessage = Y),
            ($ = function () {
              Xl.postMessage(null);
            });
        } else
          $ = function () {
            pa(Y, 0);
          };
        function al(S, N) {
          Kl = pa(function () {
            S(_.unstable_now());
          }, N);
        }
        (_.unstable_IdlePriority = 5),
          (_.unstable_ImmediatePriority = 1),
          (_.unstable_LowPriority = 4),
          (_.unstable_NormalPriority = 3),
          (_.unstable_Profiling = null),
          (_.unstable_UserBlockingPriority = 2),
          (_.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (_.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Jl = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (_.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (_.unstable_next = function (S) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var N = 3;
                break;
              default:
                N = w;
            }
            var H = w;
            w = N;
            try {
              return S();
            } finally {
              w = H;
            }
          }),
          (_.unstable_requestPaint = function () {
            Rl = !0;
          }),
          (_.unstable_runWithPriority = function (S, N) {
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
            var H = w;
            w = S;
            try {
              return N();
            } finally {
              w = H;
            }
          }),
          (_.unstable_scheduleCallback = function (S, N, H) {
            var tl = _.unstable_now();
            switch (
              (typeof H == "object" && H !== null
                ? ((H = H.delay),
                  (H = typeof H == "number" && 0 < H ? tl + H : tl))
                : (H = tl),
              S)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (s = H + s),
              (S = {
                id: R++,
                callback: N,
                priorityLevel: S,
                startTime: H,
                expirationTime: s,
                sortIndex: -1,
              }),
              H > tl
                ? ((S.sortIndex = H),
                  el(b, S),
                  G(j) === null &&
                    S === G(b) &&
                    (zl ? (za(Kl), (Kl = -1)) : (zl = !0), al(nl, H - tl)))
                : ((S.sortIndex = s),
                  el(j, S),
                  Nl || ul || ((Nl = !0), Ll || ((Ll = !0), $()))),
              S
            );
          }),
          (_.unstable_shouldYield = C),
          (_.unstable_wrapCallback = function (S) {
            var N = w;
            return function () {
              var H = w;
              w = N;
              try {
                return S.apply(this, arguments);
              } finally {
                w = H;
              }
            };
          });
      })(Pi)),
    Pi
  );
}
var lo;
function qh() {
  return lo || ((lo = 1), (Ii.exports = Hh())), Ii.exports;
}
var lf = { exports: {} },
  Vl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ao;
function Bh() {
  if (ao) return Vl;
  ao = 1;
  var _ = af();
  function el(j) {
    var b = "https://react.dev/errors/" + j;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        b += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return (
      "Minified React error #" +
      j +
      "; visit " +
      b +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function G() {}
  var h = {
      d: {
        f: G,
        r: function () {
          throw Error(el(522));
        },
        D: G,
        C: G,
        L: G,
        m: G,
        X: G,
        S: G,
        M: G,
      },
      p: 0,
      findDOMNode: null,
    },
    x = Symbol.for("react.portal");
  function L(j, b, R) {
    var O =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: x,
      key: O == null ? null : "" + O,
      children: j,
      containerInfo: b,
      implementation: R,
    };
  }
  var K = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function J(j, b) {
    if (j === "font") return "";
    if (typeof b == "string") return b === "use-credentials" ? b : "";
  }
  return (
    (Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
    (Vl.createPortal = function (j, b) {
      var R =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || (b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11))
        throw Error(el(299));
      return L(j, b, null, R);
    }),
    (Vl.flushSync = function (j) {
      var b = K.T,
        R = h.p;
      try {
        if (((K.T = null), (h.p = 2), j)) return j();
      } finally {
        (K.T = b), (h.p = R), h.d.f();
      }
    }),
    (Vl.preconnect = function (j, b) {
      typeof j == "string" &&
        (b
          ? ((b = b.crossOrigin),
            (b =
              typeof b == "string"
                ? b === "use-credentials"
                  ? b
                  : ""
                : void 0))
          : (b = null),
        h.d.C(j, b));
    }),
    (Vl.prefetchDNS = function (j) {
      typeof j == "string" && h.d.D(j);
    }),
    (Vl.preinit = function (j, b) {
      if (typeof j == "string" && b && typeof b.as == "string") {
        var R = b.as,
          O = J(R, b.crossOrigin),
          w = typeof b.integrity == "string" ? b.integrity : void 0,
          ul = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        R === "style"
          ? h.d.S(j, typeof b.precedence == "string" ? b.precedence : void 0, {
              crossOrigin: O,
              integrity: w,
              fetchPriority: ul,
            })
          : R === "script" &&
            h.d.X(j, {
              crossOrigin: O,
              integrity: w,
              fetchPriority: ul,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
      }
    }),
    (Vl.preinitModule = function (j, b) {
      if (typeof j == "string")
        if (typeof b == "object" && b !== null) {
          if (b.as == null || b.as === "script") {
            var R = J(b.as, b.crossOrigin);
            h.d.M(j, {
              crossOrigin: R,
              integrity: typeof b.integrity == "string" ? b.integrity : void 0,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
          }
        } else b == null && h.d.M(j);
    }),
    (Vl.preload = function (j, b) {
      if (
        typeof j == "string" &&
        typeof b == "object" &&
        b !== null &&
        typeof b.as == "string"
      ) {
        var R = b.as,
          O = J(R, b.crossOrigin);
        h.d.L(j, R, {
          crossOrigin: O,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0,
          type: typeof b.type == "string" ? b.type : void 0,
          fetchPriority:
            typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
          referrerPolicy:
            typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
          imageSrcSet:
            typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
          imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
          media: typeof b.media == "string" ? b.media : void 0,
        });
      }
    }),
    (Vl.preloadModule = function (j, b) {
      if (typeof j == "string")
        if (b) {
          var R = J(b.as, b.crossOrigin);
          h.d.m(j, {
            as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
            crossOrigin: R,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          });
        } else h.d.m(j);
    }),
    (Vl.requestFormReset = function (j) {
      h.d.r(j);
    }),
    (Vl.unstable_batchedUpdates = function (j, b) {
      return j(b);
    }),
    (Vl.useFormState = function (j, b, R) {
      return K.H.useFormState(j, b, R);
    }),
    (Vl.useFormStatus = function () {
      return K.H.useHostTransitionStatus();
    }),
    (Vl.version = "19.1.1"),
    Vl
  );
}
var to;
function Ch() {
  if (to) return lf.exports;
  to = 1;
  function _() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (el) {
        console.error(el);
      }
  }
  return _(), (lf.exports = Bh()), lf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eo;
function Yh() {
  if (eo) return Su;
  eo = 1;
  var _ = qh(),
    el = af(),
    G = Ch();
  function h(l) {
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
  function x(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function L(l) {
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
  function K(l) {
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
  function J(l) {
    if (L(l) !== l) throw Error(h(188));
  }
  function j(l) {
    var a = l.alternate;
    if (!a) {
      if (((a = L(l)), a === null)) throw Error(h(188));
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
          if (n === t) return J(u), l;
          if (n === e) return J(u), a;
          n = n.sibling;
        }
        throw Error(h(188));
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
          if (!c) throw Error(h(189));
        }
      }
      if (t.alternate !== e) throw Error(h(190));
    }
    if (t.tag !== 3) throw Error(h(188));
    return t.stateNode.current === t ? l : a;
  }
  function b(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((a = b(l)), a !== null)) return a;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign,
    O = Symbol.for("react.element"),
    w = Symbol.for("react.transitional.element"),
    ul = Symbol.for("react.portal"),
    Nl = Symbol.for("react.fragment"),
    zl = Symbol.for("react.strict_mode"),
    Rl = Symbol.for("react.profiler"),
    pa = Symbol.for("react.provider"),
    za = Symbol.for("react.consumer"),
    Ul = Symbol.for("react.context"),
    la = Symbol.for("react.forward_ref"),
    nl = Symbol.for("react.suspense"),
    Ll = Symbol.for("react.suspense_list"),
    Kl = Symbol.for("react.memo"),
    Jl = Symbol.for("react.lazy"),
    p = Symbol.for("react.activity"),
    C = Symbol.for("react.memo_cache_sentinel"),
    Y = Symbol.iterator;
  function $(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Y && l[Y]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var dl = Symbol.for("react.client.reference");
  function Xl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === dl ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Nl:
        return "Fragment";
      case Rl:
        return "Profiler";
      case zl:
        return "StrictMode";
      case nl:
        return "Suspense";
      case Ll:
        return "SuspenseList";
      case p:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ul:
          return "Portal";
        case Ul:
          return (l.displayName || "Context") + ".Provider";
        case za:
          return (l._context.displayName || "Context") + ".Consumer";
        case la:
          var a = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = a.displayName || a.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Kl:
          return (
            (a = l.displayName || null), a !== null ? a : Xl(l.type) || "Memo"
          );
        case Jl:
          (a = l._payload), (l = l._init);
          try {
            return Xl(l(a));
          } catch {}
      }
    return null;
  }
  var al = Array.isArray,
    S = el.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    N = G.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = { pending: !1, data: null, method: null, action: null },
    tl = [],
    s = -1;
  function T(l) {
    return { current: l };
  }
  function M(l) {
    0 > s || ((l.current = tl[s]), (tl[s] = null), s--);
  }
  function D(l, a) {
    s++, (tl[s] = l.current), (l.current = a);
  }
  var B = T(null),
    ll = T(null),
    Z = T(null),
    Bl = T(null);
  function yl(l, a) {
    switch ((D(Z, a), D(ll, l), D(B, null), a.nodeType)) {
      case 9:
      case 11:
        l = (l = a.documentElement) && (l = l.namespaceURI) ? Td(l) : 0;
        break;
      default:
        if (((l = a.tagName), (a = a.namespaceURI)))
          (a = Td(a)), (l = pd(a, l));
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
    M(B), D(B, l);
  }
  function wl() {
    M(B), M(ll), M(Z);
  }
  function Ht(l) {
    l.memoizedState !== null && D(Bl, l);
    var a = B.current,
      t = pd(a, l.type);
    a !== t && (D(ll, l), D(B, t));
  }
  function bu(l) {
    ll.current === l && (M(B), M(ll)),
      Bl.current === l && (M(Bl), (ou._currentValue = H));
  }
  var qn = Object.prototype.hasOwnProperty,
    Bn = _.unstable_scheduleCallback,
    Cn = _.unstable_cancelCallback,
    fo = _.unstable_shouldYield,
    so = _.unstable_requestPaint,
    Na = _.unstable_now,
    ro = _.unstable_getCurrentPriorityLevel,
    tf = _.unstable_ImmediatePriority,
    ef = _.unstable_UserBlockingPriority,
    zu = _.unstable_NormalPriority,
    oo = _.unstable_LowPriority,
    uf = _.unstable_IdlePriority,
    ho = _.log,
    mo = _.unstable_setDisableYieldValue,
    ze = null,
    aa = null;
  function Ja(l) {
    if (
      (typeof ho == "function" && mo(l),
      aa && typeof aa.setStrictMode == "function")
    )
      try {
        aa.setStrictMode(ze, l);
      } catch {}
  }
  var ta = Math.clz32 ? Math.clz32 : go,
    vo = Math.log,
    yo = Math.LN2;
  function go(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((vo(l) / yo) | 0)) | 0;
  }
  var Eu = 256,
    Au = 4194304;
  function yt(l) {
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
  function Tu(l, a, t) {
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
            ? (u = yt(e))
            : ((c &= i),
              c !== 0
                ? (u = yt(c))
                : t || ((t = i & ~l), t !== 0 && (u = yt(t)))))
        : ((i = e & ~n),
          i !== 0
            ? (u = yt(i))
            : c !== 0
            ? (u = yt(c))
            : t || ((t = e & ~l), t !== 0 && (u = yt(t)))),
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
  function Ee(l, a) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & a) === 0;
  }
  function So(l, a) {
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
  function nf() {
    var l = Eu;
    return (Eu <<= 1), (Eu & 4194048) === 0 && (Eu = 256), l;
  }
  function cf() {
    var l = Au;
    return (Au <<= 1), (Au & 62914560) === 0 && (Au = 4194304), l;
  }
  function Yn(l) {
    for (var a = [], t = 0; 31 > t; t++) a.push(l);
    return a;
  }
  function Ae(l, a) {
    (l.pendingLanes |= a),
      a !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function bo(l, a, t, e, u, n) {
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
      m = l.hiddenUpdates;
    for (t = c & ~t; 0 < t; ) {
      var z = 31 - ta(t),
        A = 1 << z;
      (i[z] = 0), (f[z] = -1);
      var y = m[z];
      if (y !== null)
        for (m[z] = null, z = 0; z < y.length; z++) {
          var g = y[z];
          g !== null && (g.lane &= -536870913);
        }
      t &= ~A;
    }
    e !== 0 && ff(l, e, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~a));
  }
  function ff(l, a, t) {
    (l.pendingLanes |= a), (l.suspendedLanes &= ~a);
    var e = 31 - ta(a);
    (l.entangledLanes |= a),
      (l.entanglements[e] = l.entanglements[e] | 1073741824 | (t & 4194090));
  }
  function sf(l, a) {
    var t = (l.entangledLanes |= a);
    for (l = l.entanglements; t; ) {
      var e = 31 - ta(t),
        u = 1 << e;
      (u & a) | (l[e] & a) && (l[e] |= a), (t &= ~u);
    }
  }
  function Gn(l) {
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
  function Xn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function rf() {
    var l = N.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Vd(l.type));
  }
  function zo(l, a) {
    var t = N.p;
    try {
      return (N.p = l), a();
    } finally {
      N.p = t;
    }
  }
  var wa = Math.random().toString(36).slice(2),
    Ql = "__reactFiber$" + wa,
    Wl = "__reactProps$" + wa,
    qt = "__reactContainer$" + wa,
    Qn = "__reactEvents$" + wa,
    Eo = "__reactListeners$" + wa,
    Ao = "__reactHandles$" + wa,
    df = "__reactResources$" + wa,
    Te = "__reactMarker$" + wa;
  function Zn(l) {
    delete l[Ql], delete l[Wl], delete l[Qn], delete l[Eo], delete l[Ao];
  }
  function Bt(l) {
    var a = l[Ql];
    if (a) return a;
    for (var t = l.parentNode; t; ) {
      if ((a = t[qt] || t[Ql])) {
        if (
          ((t = a.alternate),
          a.child !== null || (t !== null && t.child !== null))
        )
          for (l = _d(l); l !== null; ) {
            if ((t = l[Ql])) return t;
            l = _d(l);
          }
        return a;
      }
      (l = t), (t = l.parentNode);
    }
    return null;
  }
  function Ct(l) {
    if ((l = l[Ql] || l[qt])) {
      var a = l.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3)
        return l;
    }
    return null;
  }
  function pe(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l.stateNode;
    throw Error(h(33));
  }
  function Yt(l) {
    var a = l[df];
    return (
      a ||
        (a = l[df] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      a
    );
  }
  function xl(l) {
    l[Te] = !0;
  }
  var of = new Set(),
    hf = {};
  function gt(l, a) {
    Gt(l, a), Gt(l + "Capture", a);
  }
  function Gt(l, a) {
    for (hf[l] = a, l = 0; l < a.length; l++) of.add(a[l]);
  }
  var To = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    mf = {},
    vf = {};
  function po(l) {
    return qn.call(vf, l)
      ? !0
      : qn.call(mf, l)
      ? !1
      : To.test(l)
      ? (vf[l] = !0)
      : ((mf[l] = !0), !1);
  }
  function pu(l, a, t) {
    if (po(a))
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
  function Nu(l, a, t) {
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
  function Ua(l, a, t, e) {
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
  var Vn, yf;
  function Xt(l) {
    if (Vn === void 0)
      try {
        throw Error();
      } catch (t) {
        var a = t.stack.trim().match(/\n( *(at )?)/);
        (Vn = (a && a[1]) || ""),
          (yf =
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
      Vn +
      l +
      yf
    );
  }
  var Ln = !1;
  function Kn(l, a) {
    if (!l || Ln) return "";
    Ln = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (a) {
              var A = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(A.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(A, []);
                } catch (g) {
                  var y = g;
                }
                Reflect.construct(l, [], A);
              } else {
                try {
                  A.call();
                } catch (g) {
                  y = g;
                }
                l.call(A.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                y = g;
              }
              (A = l()) &&
                typeof A.catch == "function" &&
                A.catch(function () {});
            }
          } catch (g) {
            if (g && y && typeof g.stack == "string") return [g.stack, y.stack];
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
          m = i.split(`
`);
        for (
          u = e = 0;
          e < f.length && !f[e].includes("DetermineComponentFrameRoot");

        )
          e++;
        for (; u < m.length && !m[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (e === f.length || u === m.length)
          for (
            e = f.length - 1, u = m.length - 1;
            1 <= e && 0 <= u && f[e] !== m[u];

          )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== m[u]) {
            if (e !== 1 || u !== 1)
              do
                if ((e--, u--, 0 > u || f[e] !== m[u])) {
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
      (Ln = !1), (Error.prepareStackTrace = t);
    }
    return (t = l ? l.displayName || l.name : "") ? Xt(t) : "";
  }
  function No(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Xt(l.type);
      case 16:
        return Xt("Lazy");
      case 13:
        return Xt("Suspense");
      case 19:
        return Xt("SuspenseList");
      case 0:
      case 15:
        return Kn(l.type, !1);
      case 11:
        return Kn(l.type.render, !1);
      case 1:
        return Kn(l.type, !0);
      case 31:
        return Xt("Activity");
      default:
        return "";
    }
  }
  function gf(l) {
    try {
      var a = "";
      do (a += No(l)), (l = l.return);
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
  function ra(l) {
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
  function Sf(l) {
    var a = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (a === "checkbox" || a === "radio")
    );
  }
  function Oo(l) {
    var a = Sf(l) ? "checked" : "value",
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
  function Ou(l) {
    l._valueTracker || (l._valueTracker = Oo(l));
  }
  function bf(l) {
    if (!l) return !1;
    var a = l._valueTracker;
    if (!a) return !0;
    var t = a.getValue(),
      e = "";
    return (
      l && (e = Sf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = e),
      l !== t ? (a.setValue(l), !0) : !1
    );
  }
  function Du(l) {
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
  var Do = /[\n"\\]/g;
  function da(l) {
    return l.replace(Do, function (a) {
      return "\\" + a.charCodeAt(0).toString(16) + " ";
    });
  }
  function Jn(l, a, t, e, u, n, c, i) {
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
            (l.value = "" + ra(a))
          : l.value !== "" + ra(a) && (l.value = "" + ra(a))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      a != null
        ? wn(l, c, ra(a))
        : t != null
        ? wn(l, c, ra(t))
        : e != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.name = "" + ra(i))
        : l.removeAttribute("name");
  }
  function zf(l, a, t, e, u, n, c, i) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      a != null || t != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || a != null)) return;
      (t = t != null ? "" + ra(t) : ""),
        (a = a != null ? "" + ra(a) : t),
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
  function wn(l, a, t) {
    (a === "number" && Du(l.ownerDocument) === l) ||
      l.defaultValue === "" + t ||
      (l.defaultValue = "" + t);
  }
  function Qt(l, a, t, e) {
    if (((l = l.options), a)) {
      a = {};
      for (var u = 0; u < t.length; u++) a["$" + t[u]] = !0;
      for (t = 0; t < l.length; t++)
        (u = a.hasOwnProperty("$" + l[t].value)),
          l[t].selected !== u && (l[t].selected = u),
          u && e && (l[t].defaultSelected = !0);
    } else {
      for (t = "" + ra(t), a = null, u = 0; u < l.length; u++) {
        if (l[u].value === t) {
          (l[u].selected = !0), e && (l[u].defaultSelected = !0);
          return;
        }
        a !== null || l[u].disabled || (a = l[u]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Ef(l, a, t) {
    if (
      a != null &&
      ((a = "" + ra(a)), a !== l.value && (l.value = a), t == null)
    ) {
      l.defaultValue !== a && (l.defaultValue = a);
      return;
    }
    l.defaultValue = t != null ? "" + ra(t) : "";
  }
  function Af(l, a, t, e) {
    if (a == null) {
      if (e != null) {
        if (t != null) throw Error(h(92));
        if (al(e)) {
          if (1 < e.length) throw Error(h(93));
          e = e[0];
        }
        t = e;
      }
      t == null && (t = ""), (a = t);
    }
    (t = ra(a)),
      (l.defaultValue = t),
      (e = l.textContent),
      e === t && e !== "" && e !== null && (l.value = e);
  }
  function Zt(l, a) {
    if (a) {
      var t = l.firstChild;
      if (t && t === l.lastChild && t.nodeType === 3) {
        t.nodeValue = a;
        return;
      }
    }
    l.textContent = a;
  }
  var _o = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Tf(l, a, t) {
    var e = a.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === ""
      ? e
        ? l.setProperty(a, "")
        : a === "float"
        ? (l.cssFloat = "")
        : (l[a] = "")
      : e
      ? l.setProperty(a, t)
      : typeof t != "number" || t === 0 || _o.has(a)
      ? a === "float"
        ? (l.cssFloat = t)
        : (l[a] = ("" + t).trim())
      : (l[a] = t + "px");
  }
  function pf(l, a, t) {
    if (a != null && typeof a != "object") throw Error(h(62));
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
        (e = a[u]), a.hasOwnProperty(u) && t[u] !== e && Tf(l, u, e);
    } else for (var n in a) a.hasOwnProperty(n) && Tf(l, n, a[n]);
  }
  function $n(l) {
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
  var Mo = new Map([
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
    Ro =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _u(l) {
    return Ro.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var Wn = null;
  function kn(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Vt = null,
    Lt = null;
  function Nf(l) {
    var a = Ct(l);
    if (a && (l = a.stateNode)) {
      var t = l[Wl] || null;
      l: switch (((l = a.stateNode), a.type)) {
        case "input":
          if (
            (Jn(
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
                'input[name="' + da("" + a) + '"][type="radio"]'
              ),
                a = 0;
              a < t.length;
              a++
            ) {
              var e = t[a];
              if (e !== l && e.form === l.form) {
                var u = e[Wl] || null;
                if (!u) throw Error(h(90));
                Jn(
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
              (e = t[a]), e.form === l.form && bf(e);
          }
          break l;
        case "textarea":
          Ef(l, t.value, t.defaultValue);
          break l;
        case "select":
          (a = t.value), a != null && Qt(l, !!t.multiple, a, !1);
      }
    }
  }
  var Fn = !1;
  function Of(l, a, t) {
    if (Fn) return l(a, t);
    Fn = !0;
    try {
      var e = l(a);
      return e;
    } finally {
      if (
        ((Fn = !1),
        (Vt !== null || Lt !== null) &&
          (mn(), Vt && ((a = Vt), (l = Lt), (Lt = Vt = null), Nf(a), l)))
      )
        for (a = 0; a < l.length; a++) Nf(l[a]);
    }
  }
  function Ne(l, a) {
    var t = l.stateNode;
    if (t === null) return null;
    var e = t[Wl] || null;
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
    if (t && typeof t != "function") throw Error(h(231, a, typeof t));
    return t;
  }
  var xa = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    In = !1;
  if (xa)
    try {
      var Oe = {};
      Object.defineProperty(Oe, "passive", {
        get: function () {
          In = !0;
        },
      }),
        window.addEventListener("test", Oe, Oe),
        window.removeEventListener("test", Oe, Oe);
    } catch {
      In = !1;
    }
  var $a = null,
    Pn = null,
    Mu = null;
  function Df() {
    if (Mu) return Mu;
    var l,
      a = Pn,
      t = a.length,
      e,
      u = "value" in $a ? $a.value : $a.textContent,
      n = u.length;
    for (l = 0; l < t && a[l] === u[l]; l++);
    var c = t - l;
    for (e = 1; e <= c && a[t - e] === u[n - e]; e++);
    return (Mu = u.slice(l, 1 < e ? 1 - e : void 0));
  }
  function Ru(l) {
    var a = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && a === 13 && (l = 13))
        : (l = a),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Uu() {
    return !0;
  }
  function _f() {
    return !1;
  }
  function kl(l) {
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
          ? Uu
          : _f),
        (this.isPropagationStopped = _f),
        this
      );
    }
    return (
      R(a.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            (this.isDefaultPrevented = Uu));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            (this.isPropagationStopped = Uu));
        },
        persist: function () {},
        isPersistent: Uu,
      }),
      a
    );
  }
  var St = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    xu = kl(St),
    De = R({}, St, { view: 0, detail: 0 }),
    Uo = kl(De),
    lc,
    ac,
    _e,
    ju = R({}, De, {
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
      getModifierState: ec,
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
          : (l !== _e &&
              (_e && l.type === "mousemove"
                ? ((lc = l.screenX - _e.screenX), (ac = l.screenY - _e.screenY))
                : (ac = lc = 0),
              (_e = l)),
            lc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : ac;
      },
    }),
    Mf = kl(ju),
    xo = R({}, ju, { dataTransfer: 0 }),
    jo = kl(xo),
    Ho = R({}, De, { relatedTarget: 0 }),
    tc = kl(Ho),
    qo = R({}, St, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bo = kl(qo),
    Co = R({}, St, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Yo = kl(Co),
    Go = R({}, St, { data: 0 }),
    Rf = kl(Go),
    Xo = {
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
    Qo = {
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
    Zo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Vo(l) {
    var a = this.nativeEvent;
    return a.getModifierState
      ? a.getModifierState(l)
      : (l = Zo[l])
      ? !!a[l]
      : !1;
  }
  function ec() {
    return Vo;
  }
  var Lo = R({}, De, {
      key: function (l) {
        if (l.key) {
          var a = Xo[l.key] || l.key;
          if (a !== "Unidentified") return a;
        }
        return l.type === "keypress"
          ? ((l = Ru(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? Qo[l.keyCode] || "Unidentified"
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
      getModifierState: ec,
      charCode: function (l) {
        return l.type === "keypress" ? Ru(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Ru(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    Ko = kl(Lo),
    Jo = R({}, ju, {
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
    Uf = kl(Jo),
    wo = R({}, De, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ec,
    }),
    $o = kl(wo),
    Wo = R({}, St, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ko = kl(Wo),
    Fo = R({}, ju, {
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
    Io = kl(Fo),
    Po = R({}, St, { newState: 0, oldState: 0 }),
    l0 = kl(Po),
    a0 = [9, 13, 27, 32],
    uc = xa && "CompositionEvent" in window,
    Me = null;
  xa && "documentMode" in document && (Me = document.documentMode);
  var t0 = xa && "TextEvent" in window && !Me,
    xf = xa && (!uc || (Me && 8 < Me && 11 >= Me)),
    jf = " ",
    Hf = !1;
  function qf(l, a) {
    switch (l) {
      case "keyup":
        return a0.indexOf(a.keyCode) !== -1;
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
  function Bf(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var Kt = !1;
  function e0(l, a) {
    switch (l) {
      case "compositionend":
        return Bf(a);
      case "keypress":
        return a.which !== 32 ? null : ((Hf = !0), jf);
      case "textInput":
        return (l = a.data), l === jf && Hf ? null : l;
      default:
        return null;
    }
  }
  function u0(l, a) {
    if (Kt)
      return l === "compositionend" || (!uc && qf(l, a))
        ? ((l = Df()), (Mu = Pn = $a = null), (Kt = !1), l)
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
        return xf && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var n0 = {
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
  function Cf(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return a === "input" ? !!n0[l.type] : a === "textarea";
  }
  function Yf(l, a, t, e) {
    Vt ? (Lt ? Lt.push(e) : (Lt = [e])) : (Vt = e),
      (a = zn(a, "onChange")),
      0 < a.length &&
        ((t = new xu("onChange", "change", null, t, e)),
        l.push({ event: t, listeners: a }));
  }
  var Re = null,
    Ue = null;
  function c0(l) {
    Sd(l, 0);
  }
  function Hu(l) {
    var a = pe(l);
    if (bf(a)) return l;
  }
  function Gf(l, a) {
    if (l === "change") return a;
  }
  var Xf = !1;
  if (xa) {
    var nc;
    if (xa) {
      var cc = "oninput" in document;
      if (!cc) {
        var Qf = document.createElement("div");
        Qf.setAttribute("oninput", "return;"),
          (cc = typeof Qf.oninput == "function");
      }
      nc = cc;
    } else nc = !1;
    Xf = nc && (!document.documentMode || 9 < document.documentMode);
  }
  function Zf() {
    Re && (Re.detachEvent("onpropertychange", Vf), (Ue = Re = null));
  }
  function Vf(l) {
    if (l.propertyName === "value" && Hu(Ue)) {
      var a = [];
      Yf(a, Ue, l, kn(l)), Of(c0, a);
    }
  }
  function i0(l, a, t) {
    l === "focusin"
      ? (Zf(), (Re = a), (Ue = t), Re.attachEvent("onpropertychange", Vf))
      : l === "focusout" && Zf();
  }
  function f0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Hu(Ue);
  }
  function s0(l, a) {
    if (l === "click") return Hu(a);
  }
  function r0(l, a) {
    if (l === "input" || l === "change") return Hu(a);
  }
  function d0(l, a) {
    return (l === a && (l !== 0 || 1 / l === 1 / a)) || (l !== l && a !== a);
  }
  var ea = typeof Object.is == "function" ? Object.is : d0;
  function xe(l, a) {
    if (ea(l, a)) return !0;
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
      if (!qn.call(a, u) || !ea(l[u], a[u])) return !1;
    }
    return !0;
  }
  function Lf(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Kf(l, a) {
    var t = Lf(l);
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
      t = Lf(t);
    }
  }
  function Jf(l, a) {
    return l && a
      ? l === a
        ? !0
        : l && l.nodeType === 3
        ? !1
        : a && a.nodeType === 3
        ? Jf(l, a.parentNode)
        : "contains" in l
        ? l.contains(a)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(a) & 16)
        : !1
      : !1;
  }
  function wf(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var a = Du(l.document); a instanceof l.HTMLIFrameElement; ) {
      try {
        var t = typeof a.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) l = a.contentWindow;
      else break;
      a = Du(l.document);
    }
    return a;
  }
  function ic(l) {
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
  var o0 = xa && "documentMode" in document && 11 >= document.documentMode,
    Jt = null,
    fc = null,
    je = null,
    sc = !1;
  function $f(l, a, t) {
    var e =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    sc ||
      Jt == null ||
      Jt !== Du(e) ||
      ((e = Jt),
      "selectionStart" in e && ic(e)
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
      (je && xe(je, e)) ||
        ((je = e),
        (e = zn(fc, "onSelect")),
        0 < e.length &&
          ((a = new xu("onSelect", "select", null, a, t)),
          l.push({ event: a, listeners: e }),
          (a.target = Jt))));
  }
  function bt(l, a) {
    var t = {};
    return (
      (t[l.toLowerCase()] = a.toLowerCase()),
      (t["Webkit" + l] = "webkit" + a),
      (t["Moz" + l] = "moz" + a),
      t
    );
  }
  var wt = {
      animationend: bt("Animation", "AnimationEnd"),
      animationiteration: bt("Animation", "AnimationIteration"),
      animationstart: bt("Animation", "AnimationStart"),
      transitionrun: bt("Transition", "TransitionRun"),
      transitionstart: bt("Transition", "TransitionStart"),
      transitioncancel: bt("Transition", "TransitionCancel"),
      transitionend: bt("Transition", "TransitionEnd"),
    },
    rc = {},
    Wf = {};
  xa &&
    ((Wf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete wt.animationend.animation,
      delete wt.animationiteration.animation,
      delete wt.animationstart.animation),
    "TransitionEvent" in window || delete wt.transitionend.transition);
  function zt(l) {
    if (rc[l]) return rc[l];
    if (!wt[l]) return l;
    var a = wt[l],
      t;
    for (t in a) if (a.hasOwnProperty(t) && t in Wf) return (rc[l] = a[t]);
    return l;
  }
  var kf = zt("animationend"),
    Ff = zt("animationiteration"),
    If = zt("animationstart"),
    h0 = zt("transitionrun"),
    m0 = zt("transitionstart"),
    v0 = zt("transitioncancel"),
    Pf = zt("transitionend"),
    ls = new Map(),
    dc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  dc.push("scrollEnd");
  function Ea(l, a) {
    ls.set(l, a), gt(a, [l]);
  }
  var as = new WeakMap();
  function oa(l, a) {
    if (typeof l == "object" && l !== null) {
      var t = as.get(l);
      return t !== void 0
        ? t
        : ((a = { value: l, source: a, stack: gf(a) }), as.set(l, a), a);
    }
    return { value: l, source: a, stack: gf(a) };
  }
  var ha = [],
    $t = 0,
    oc = 0;
  function qu() {
    for (var l = $t, a = (oc = $t = 0); a < l; ) {
      var t = ha[a];
      ha[a++] = null;
      var e = ha[a];
      ha[a++] = null;
      var u = ha[a];
      ha[a++] = null;
      var n = ha[a];
      if (((ha[a++] = null), e !== null && u !== null)) {
        var c = e.pending;
        c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
          (e.pending = u);
      }
      n !== 0 && ts(t, u, n);
    }
  }
  function Bu(l, a, t, e) {
    (ha[$t++] = l),
      (ha[$t++] = a),
      (ha[$t++] = t),
      (ha[$t++] = e),
      (oc |= e),
      (l.lanes |= e),
      (l = l.alternate),
      l !== null && (l.lanes |= e);
  }
  function hc(l, a, t, e) {
    return Bu(l, a, t, e), Cu(l);
  }
  function Wt(l, a) {
    return Bu(l, null, null, a), Cu(l);
  }
  function ts(l, a, t) {
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
          ((u = 31 - ta(t)),
          (l = n.hiddenUpdates),
          (e = l[u]),
          e === null ? (l[u] = [a]) : e.push(a),
          (a.lane = t | 536870912)),
        n)
      : null;
  }
  function Cu(l) {
    if (50 < uu) throw ((uu = 0), (bi = null), Error(h(185)));
    for (var a = l.return; a !== null; ) (l = a), (a = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var kt = {};
  function y0(l, a, t, e) {
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
  function ua(l, a, t, e) {
    return new y0(l, a, t, e);
  }
  function mc(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function ja(l, a) {
    var t = l.alternate;
    return (
      t === null
        ? ((t = ua(l.tag, a, l.key, l.mode)),
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
  function es(l, a) {
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
  function Yu(l, a, t, e, u, n) {
    var c = 0;
    if (((e = l), typeof l == "function")) mc(l) && (c = 1);
    else if (typeof l == "string")
      c = Sh(l, t, B.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case p:
          return (l = ua(31, t, a, u)), (l.elementType = p), (l.lanes = n), l;
        case Nl:
          return Et(t.children, u, n, a);
        case zl:
          (c = 8), (u |= 24);
          break;
        case Rl:
          return (
            (l = ua(12, t, a, u | 2)), (l.elementType = Rl), (l.lanes = n), l
          );
        case nl:
          return (l = ua(13, t, a, u)), (l.elementType = nl), (l.lanes = n), l;
        case Ll:
          return (l = ua(19, t, a, u)), (l.elementType = Ll), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case pa:
              case Ul:
                c = 10;
                break l;
              case za:
                c = 9;
                break l;
              case la:
                c = 11;
                break l;
              case Kl:
                c = 14;
                break l;
              case Jl:
                (c = 16), (e = null);
                break l;
            }
          (c = 29),
            (t = Error(h(130, l === null ? "null" : typeof l, ""))),
            (e = null);
      }
    return (
      (a = ua(c, t, a, u)), (a.elementType = l), (a.type = e), (a.lanes = n), a
    );
  }
  function Et(l, a, t, e) {
    return (l = ua(7, l, e, a)), (l.lanes = t), l;
  }
  function vc(l, a, t) {
    return (l = ua(6, l, null, a)), (l.lanes = t), l;
  }
  function yc(l, a, t) {
    return (
      (a = ua(4, l.children !== null ? l.children : [], l.key, a)),
      (a.lanes = t),
      (a.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      a
    );
  }
  var Ft = [],
    It = 0,
    Gu = null,
    Xu = 0,
    ma = [],
    va = 0,
    At = null,
    Ha = 1,
    qa = "";
  function Tt(l, a) {
    (Ft[It++] = Xu), (Ft[It++] = Gu), (Gu = l), (Xu = a);
  }
  function us(l, a, t) {
    (ma[va++] = Ha), (ma[va++] = qa), (ma[va++] = At), (At = l);
    var e = Ha;
    l = qa;
    var u = 32 - ta(e) - 1;
    (e &= ~(1 << u)), (t += 1);
    var n = 32 - ta(a) + u;
    if (30 < n) {
      var c = u - (u % 5);
      (n = (e & ((1 << c) - 1)).toString(32)),
        (e >>= c),
        (u -= c),
        (Ha = (1 << (32 - ta(a) + u)) | (t << u) | e),
        (qa = n + l);
    } else (Ha = (1 << n) | (t << u) | e), (qa = l);
  }
  function gc(l) {
    l.return !== null && (Tt(l, 1), us(l, 1, 0));
  }
  function Sc(l) {
    for (; l === Gu; )
      (Gu = Ft[--It]), (Ft[It] = null), (Xu = Ft[--It]), (Ft[It] = null);
    for (; l === At; )
      (At = ma[--va]),
        (ma[va] = null),
        (qa = ma[--va]),
        (ma[va] = null),
        (Ha = ma[--va]),
        (ma[va] = null);
  }
  var $l = null,
    El = null,
    fl = !1,
    pt = null,
    Oa = !1,
    bc = Error(h(519));
  function Nt(l) {
    var a = Error(h(418, ""));
    throw (Be(oa(a, l)), bc);
  }
  function ns(l) {
    var a = l.stateNode,
      t = l.type,
      e = l.memoizedProps;
    switch (((a[Ql] = l), (a[Wl] = e), t)) {
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
        for (t = 0; t < cu.length; t++) P(cu[t], a);
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
          zf(
            a,
            e.value,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
            !0
          ),
          Ou(a);
        break;
      case "select":
        P("invalid", a);
        break;
      case "textarea":
        P("invalid", a), Af(a, e.value, e.defaultValue, e.children), Ou(a);
    }
    (t = e.children),
      (typeof t != "string" && typeof t != "number" && typeof t != "bigint") ||
      a.textContent === "" + t ||
      e.suppressHydrationWarning === !0 ||
      Ad(a.textContent, t)
        ? (e.popover != null && (P("beforetoggle", a), P("toggle", a)),
          e.onScroll != null && P("scroll", a),
          e.onScrollEnd != null && P("scrollend", a),
          e.onClick != null && (a.onclick = En),
          (a = !0))
        : (a = !1),
      a || Nt(l);
  }
  function cs(l) {
    for ($l = l.return; $l; )
      switch ($l.tag) {
        case 5:
        case 13:
          Oa = !1;
          return;
        case 27:
        case 3:
          Oa = !0;
          return;
        default:
          $l = $l.return;
      }
  }
  function He(l) {
    if (l !== $l) return !1;
    if (!fl) return cs(l), (fl = !0), !1;
    var a = l.tag,
      t;
    if (
      ((t = a !== 3 && a !== 27) &&
        ((t = a === 5) &&
          ((t = l.type),
          (t =
            !(t !== "form" && t !== "button") || qi(l.type, l.memoizedProps))),
        (t = !t)),
      t && El && Nt(l),
      cs(l),
      a === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(h(317));
      l: {
        for (l = l.nextSibling, a = 0; l; ) {
          if (l.nodeType === 8)
            if (((t = l.data), t === "/$")) {
              if (a === 0) {
                El = Ta(l.nextSibling);
                break l;
              }
              a--;
            } else (t !== "$" && t !== "$!" && t !== "$?") || a++;
          l = l.nextSibling;
        }
        El = null;
      }
    } else
      a === 27
        ? ((a = El), rt(l.type) ? ((l = Gi), (Gi = null), (El = l)) : (El = a))
        : (El = $l ? Ta(l.stateNode.nextSibling) : null);
    return !0;
  }
  function qe() {
    (El = $l = null), (fl = !1);
  }
  function is() {
    var l = pt;
    return (
      l !== null &&
        (Pl === null ? (Pl = l) : Pl.push.apply(Pl, l), (pt = null)),
      l
    );
  }
  function Be(l) {
    pt === null ? (pt = [l]) : pt.push(l);
  }
  var zc = T(null),
    Ot = null,
    Ba = null;
  function Wa(l, a, t) {
    D(zc, a._currentValue), (a._currentValue = t);
  }
  function Ca(l) {
    (l._currentValue = zc.current), M(zc);
  }
  function Ec(l, a, t) {
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
  function Ac(l, a, t, e) {
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
                Ec(n.return, t, l),
                e || (c = null);
              break l;
            }
          n = i.next;
        }
      } else if (u.tag === 18) {
        if (((c = u.return), c === null)) throw Error(h(341));
        (c.lanes |= t),
          (n = c.alternate),
          n !== null && (n.lanes |= t),
          Ec(c, t, l),
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
  function Ce(l, a, t, e) {
    l = null;
    for (var u = a, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(h(387));
        if (((c = c.memoizedProps), c !== null)) {
          var i = u.type;
          ea(u.pendingProps.value, c.value) ||
            (l !== null ? l.push(i) : (l = [i]));
        }
      } else if (u === Bl.current) {
        if (((c = u.alternate), c === null)) throw Error(h(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(ou) : (l = [ou]));
      }
      u = u.return;
    }
    l !== null && Ac(a, l, t, e), (a.flags |= 262144);
  }
  function Qu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ea(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Dt(l) {
    (Ot = l),
      (Ba = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Zl(l) {
    return fs(Ot, l);
  }
  function Zu(l, a) {
    return Ot === null && Dt(l), fs(l, a);
  }
  function fs(l, a) {
    var t = a._currentValue;
    if (((a = { context: a, memoizedValue: t, next: null }), Ba === null)) {
      if (l === null) throw Error(h(308));
      (Ba = a),
        (l.dependencies = { lanes: 0, firstContext: a }),
        (l.flags |= 524288);
    } else Ba = Ba.next = a;
    return t;
  }
  var g0 =
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
    S0 = _.unstable_scheduleCallback,
    b0 = _.unstable_NormalPriority,
    _l = {
      $$typeof: Ul,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Tc() {
    return { controller: new g0(), data: new Map(), refCount: 0 };
  }
  function Ye(l) {
    l.refCount--,
      l.refCount === 0 &&
        S0(b0, function () {
          l.controller.abort();
        });
  }
  var Ge = null,
    pc = 0,
    Pt = 0,
    le = null;
  function z0(l, a) {
    if (Ge === null) {
      var t = (Ge = []);
      (pc = 0),
        (Pt = Oi()),
        (le = {
          status: "pending",
          value: void 0,
          then: function (e) {
            t.push(e);
          },
        });
    }
    return pc++, a.then(ss, ss), a;
  }
  function ss() {
    if (--pc === 0 && Ge !== null) {
      le !== null && (le.status = "fulfilled");
      var l = Ge;
      (Ge = null), (Pt = 0), (le = null);
      for (var a = 0; a < l.length; a++) (0, l[a])();
    }
  }
  function E0(l, a) {
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
  var rs = S.S;
  S.S = function (l, a) {
    typeof a == "object" &&
      a !== null &&
      typeof a.then == "function" &&
      z0(l, a),
      rs !== null && rs(l, a);
  };
  var _t = T(null);
  function Nc() {
    var l = _t.current;
    return l !== null ? l : gl.pooledCache;
  }
  function Vu(l, a) {
    a === null ? D(_t, _t.current) : D(_t, a.pool);
  }
  function ds() {
    var l = Nc();
    return l === null ? null : { parent: _l._currentValue, pool: l };
  }
  var Xe = Error(h(460)),
    os = Error(h(474)),
    Lu = Error(h(542)),
    Oc = { then: function () {} };
  function hs(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function Ku() {}
  function ms(l, a, t) {
    switch (
      ((t = l[t]),
      t === void 0 ? l.push(a) : t !== a && (a.then(Ku, Ku), (a = t)),
      a.status)
    ) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw ((l = a.reason), ys(l), l);
      default:
        if (typeof a.status == "string") a.then(Ku, Ku);
        else {
          if (((l = gl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(h(482));
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
            throw ((l = a.reason), ys(l), l);
        }
        throw ((Qe = a), Xe);
    }
  }
  var Qe = null;
  function vs() {
    if (Qe === null) throw Error(h(459));
    var l = Qe;
    return (Qe = null), l;
  }
  function ys(l) {
    if (l === Xe || l === Lu) throw Error(h(483));
  }
  var ka = !1;
  function Dc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function _c(l, a) {
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
  function Fa(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ia(l, a, t) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (sl & 2) !== 0)) {
      var u = e.pending;
      return (
        u === null ? (a.next = a) : ((a.next = u.next), (u.next = a)),
        (e.pending = a),
        (a = Cu(l)),
        ts(l, null, t),
        a
      );
    }
    return Bu(l, e, a, t), Cu(l);
  }
  function Ze(l, a, t) {
    if (
      ((a = a.updateQueue), a !== null && ((a = a.shared), (t & 4194048) !== 0))
    ) {
      var e = a.lanes;
      (e &= l.pendingLanes), (t |= e), (a.lanes = t), sf(l, t);
    }
  }
  function Mc(l, a) {
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
  var Rc = !1;
  function Ve() {
    if (Rc) {
      var l = le;
      if (l !== null) throw l;
    }
  }
  function Le(l, a, t, e) {
    Rc = !1;
    var u = l.updateQueue;
    ka = !1;
    var n = u.firstBaseUpdate,
      c = u.lastBaseUpdate,
      i = u.shared.pending;
    if (i !== null) {
      u.shared.pending = null;
      var f = i,
        m = f.next;
      (f.next = null), c === null ? (n = m) : (c.next = m), (c = f);
      var z = l.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (i = z.lastBaseUpdate),
        i !== c &&
          (i === null ? (z.firstBaseUpdate = m) : (i.next = m),
          (z.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var A = u.baseState;
      (c = 0), (z = m = f = null), (i = n);
      do {
        var y = i.lane & -536870913,
          g = y !== i.lane;
        if (g ? (cl & y) === y : (e & y) === y) {
          y !== 0 && y === Pt && (Rc = !0),
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
            var V = l,
              X = i;
            y = a;
            var ml = t;
            switch (X.tag) {
              case 1:
                if (((V = X.payload), typeof V == "function")) {
                  A = V.call(ml, A, y);
                  break l;
                }
                A = V;
                break l;
              case 3:
                V.flags = (V.flags & -65537) | 128;
              case 0:
                if (
                  ((V = X.payload),
                  (y = typeof V == "function" ? V.call(ml, A, y) : V),
                  y == null)
                )
                  break l;
                A = R({}, A, y);
                break l;
              case 2:
                ka = !0;
            }
          }
          (y = i.callback),
            y !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = u.callbacks),
              g === null ? (u.callbacks = [y]) : g.push(y));
        } else
          (g = {
            lane: y,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            z === null ? ((m = z = g), (f = A)) : (z = z.next = g),
            (c |= y);
        if (((i = i.next), i === null)) {
          if (((i = u.shared.pending), i === null)) break;
          (g = i),
            (i = g.next),
            (g.next = null),
            (u.lastBaseUpdate = g),
            (u.shared.pending = null);
        }
      } while (!0);
      z === null && (f = A),
        (u.baseState = f),
        (u.firstBaseUpdate = m),
        (u.lastBaseUpdate = z),
        n === null && (u.shared.lanes = 0),
        (ct |= c),
        (l.lanes = c),
        (l.memoizedState = A);
    }
  }
  function gs(l, a) {
    if (typeof l != "function") throw Error(h(191, l));
    l.call(a);
  }
  function Ss(l, a) {
    var t = l.callbacks;
    if (t !== null)
      for (l.callbacks = null, l = 0; l < t.length; l++) gs(t[l], a);
  }
  var ae = T(null),
    Ju = T(0);
  function bs(l, a) {
    (l = La), D(Ju, l), D(ae, a), (La = l | a.baseLanes);
  }
  function Uc() {
    D(Ju, La), D(ae, ae.current);
  }
  function xc() {
    (La = Ju.current), M(ae), M(Ju);
  }
  var Pa = 0,
    k = null,
    ol = null,
    Ol = null,
    wu = !1,
    te = !1,
    Mt = !1,
    $u = 0,
    Ke = 0,
    ee = null,
    A0 = 0;
  function Tl() {
    throw Error(h(321));
  }
  function jc(l, a) {
    if (a === null) return !1;
    for (var t = 0; t < a.length && t < l.length; t++)
      if (!ea(l[t], a[t])) return !1;
    return !0;
  }
  function Hc(l, a, t, e, u, n) {
    return (
      (Pa = n),
      (k = a),
      (a.memoizedState = null),
      (a.updateQueue = null),
      (a.lanes = 0),
      (S.H = l === null || l.memoizedState === null ? tr : er),
      (Mt = !1),
      (n = t(e, u)),
      (Mt = !1),
      te && (n = Es(a, t, e, u)),
      zs(l),
      n
    );
  }
  function zs(l) {
    S.H = ln;
    var a = ol !== null && ol.next !== null;
    if (((Pa = 0), (Ol = ol = k = null), (wu = !1), (Ke = 0), (ee = null), a))
      throw Error(h(300));
    l === null ||
      jl ||
      ((l = l.dependencies), l !== null && Qu(l) && (jl = !0));
  }
  function Es(l, a, t, e) {
    k = l;
    var u = 0;
    do {
      if ((te && (ee = null), (Ke = 0), (te = !1), 25 <= u))
        throw Error(h(301));
      if (((u += 1), (Ol = ol = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (S.H = M0), (n = a(t, e));
    } while (te);
    return n;
  }
  function T0() {
    var l = S.H,
      a = l.useState()[0];
    return (
      (a = typeof a.then == "function" ? Je(a) : a),
      (l = l.useState()[0]),
      (ol !== null ? ol.memoizedState : null) !== l && (k.flags |= 1024),
      a
    );
  }
  function qc() {
    var l = $u !== 0;
    return ($u = 0), l;
  }
  function Bc(l, a, t) {
    (a.updateQueue = l.updateQueue), (a.flags &= -2053), (l.lanes &= ~t);
  }
  function Cc(l) {
    if (wu) {
      for (l = l.memoizedState; l !== null; ) {
        var a = l.queue;
        a !== null && (a.pending = null), (l = l.next);
      }
      wu = !1;
    }
    (Pa = 0), (Ol = ol = k = null), (te = !1), (Ke = $u = 0), (ee = null);
  }
  function Fl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ol === null ? (k.memoizedState = Ol = l) : (Ol = Ol.next = l), Ol;
  }
  function Dl() {
    if (ol === null) {
      var l = k.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ol.next;
    var a = Ol === null ? k.memoizedState : Ol.next;
    if (a !== null) (Ol = a), (ol = l);
    else {
      if (l === null)
        throw k.alternate === null ? Error(h(467)) : Error(h(310));
      (ol = l),
        (l = {
          memoizedState: ol.memoizedState,
          baseState: ol.baseState,
          baseQueue: ol.baseQueue,
          queue: ol.queue,
          next: null,
        }),
        Ol === null ? (k.memoizedState = Ol = l) : (Ol = Ol.next = l);
    }
    return Ol;
  }
  function Yc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Je(l) {
    var a = Ke;
    return (
      (Ke += 1),
      ee === null && (ee = []),
      (l = ms(ee, l, a)),
      (a = k),
      (Ol === null ? a.memoizedState : Ol.next) === null &&
        ((a = a.alternate),
        (S.H = a === null || a.memoizedState === null ? tr : er)),
      l
    );
  }
  function Wu(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Je(l);
      if (l.$$typeof === Ul) return Zl(l);
    }
    throw Error(h(438, String(l)));
  }
  function Gc(l) {
    var a = null,
      t = k.updateQueue;
    if ((t !== null && (a = t.memoCache), a == null)) {
      var e = k.alternate;
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
      t === null && ((t = Yc()), (k.updateQueue = t)),
      (t.memoCache = a),
      (t = a.data[a.index]),
      t === void 0)
    )
      for (t = a.data[a.index] = Array(l), e = 0; e < l; e++) t[e] = C;
    return a.index++, t;
  }
  function Ya(l, a) {
    return typeof a == "function" ? a(l) : a;
  }
  function ku(l) {
    var a = Dl();
    return Xc(a, ol, l);
  }
  function Xc(l, a, t) {
    var e = l.queue;
    if (e === null) throw Error(h(311));
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
        m = a,
        z = !1;
      do {
        var A = m.lane & -536870913;
        if (A !== m.lane ? (cl & A) === A : (Pa & A) === A) {
          var y = m.revertLane;
          if (y === 0)
            f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: m.action,
                  hasEagerState: m.hasEagerState,
                  eagerState: m.eagerState,
                  next: null,
                }),
              A === Pt && (z = !0);
          else if ((Pa & y) === y) {
            (m = m.next), y === Pt && (z = !0);
            continue;
          } else
            (A = {
              lane: 0,
              revertLane: m.revertLane,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
              f === null ? ((i = f = A), (c = n)) : (f = f.next = A),
              (k.lanes |= y),
              (ct |= y);
          (A = m.action),
            Mt && t(n, A),
            (n = m.hasEagerState ? m.eagerState : t(n, A));
        } else
          (y = {
            lane: A,
            revertLane: m.revertLane,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }),
            f === null ? ((i = f = y), (c = n)) : (f = f.next = y),
            (k.lanes |= A),
            (ct |= A);
        m = m.next;
      } while (m !== null && m !== a);
      if (
        (f === null ? (c = n) : (f.next = i),
        !ea(n, l.memoizedState) && ((jl = !0), z && ((t = le), t !== null)))
      )
        throw t;
      (l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = f),
        (e.lastRenderedState = n);
    }
    return u === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
  }
  function Qc(l) {
    var a = Dl(),
      t = a.queue;
    if (t === null) throw Error(h(311));
    t.lastRenderedReducer = l;
    var e = t.dispatch,
      u = t.pending,
      n = a.memoizedState;
    if (u !== null) {
      t.pending = null;
      var c = (u = u.next);
      do (n = l(n, c.action)), (c = c.next);
      while (c !== u);
      ea(n, a.memoizedState) || (jl = !0),
        (a.memoizedState = n),
        a.baseQueue === null && (a.baseState = n),
        (t.lastRenderedState = n);
    }
    return [n, e];
  }
  function As(l, a, t) {
    var e = k,
      u = Dl(),
      n = fl;
    if (n) {
      if (t === void 0) throw Error(h(407));
      t = t();
    } else t = a();
    var c = !ea((ol || u).memoizedState, t);
    c && ((u.memoizedState = t), (jl = !0)), (u = u.queue);
    var i = Ns.bind(null, e, u, l);
    if (
      (we(2048, 8, i, [l]),
      u.getSnapshot !== a || c || (Ol !== null && Ol.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        ue(9, Fu(), ps.bind(null, e, u, t, a), null),
        gl === null)
      )
        throw Error(h(349));
      n || (Pa & 124) !== 0 || Ts(e, a, t);
    }
    return t;
  }
  function Ts(l, a, t) {
    (l.flags |= 16384),
      (l = { getSnapshot: a, value: t }),
      (a = k.updateQueue),
      a === null
        ? ((a = Yc()), (k.updateQueue = a), (a.stores = [l]))
        : ((t = a.stores), t === null ? (a.stores = [l]) : t.push(l));
  }
  function ps(l, a, t, e) {
    (a.value = t), (a.getSnapshot = e), Os(a) && Ds(l);
  }
  function Ns(l, a, t) {
    return t(function () {
      Os(a) && Ds(l);
    });
  }
  function Os(l) {
    var a = l.getSnapshot;
    l = l.value;
    try {
      var t = a();
      return !ea(l, t);
    } catch {
      return !0;
    }
  }
  function Ds(l) {
    var a = Wt(l, 2);
    a !== null && sa(a, l, 2);
  }
  function Zc(l) {
    var a = Fl();
    if (typeof l == "function") {
      var t = l;
      if (((l = t()), Mt)) {
        Ja(!0);
        try {
          t();
        } finally {
          Ja(!1);
        }
      }
    }
    return (
      (a.memoizedState = a.baseState = l),
      (a.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ya,
        lastRenderedState: l,
      }),
      a
    );
  }
  function _s(l, a, t, e) {
    return (l.baseState = t), Xc(l, ol, typeof e == "function" ? e : Ya);
  }
  function p0(l, a, t, e, u) {
    if (Pu(l)) throw Error(h(485));
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
          ? ((n.next = a.pending = n), Ms(a, n))
          : ((n.next = t.next), (a.pending = t.next = n));
    }
  }
  function Ms(l, a) {
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
        f !== null && f(c, i), Rs(l, a, i);
      } catch (m) {
        Vc(l, a, m);
      } finally {
        S.T = n;
      }
    } else
      try {
        (n = t(u, e)), Rs(l, a, n);
      } catch (m) {
        Vc(l, a, m);
      }
  }
  function Rs(l, a, t) {
    t !== null && typeof t == "object" && typeof t.then == "function"
      ? t.then(
          function (e) {
            Us(l, a, e);
          },
          function (e) {
            return Vc(l, a, e);
          }
        )
      : Us(l, a, t);
  }
  function Us(l, a, t) {
    (a.status = "fulfilled"),
      (a.value = t),
      xs(a),
      (l.state = t),
      (a = l.pending),
      a !== null &&
        ((t = a.next),
        t === a ? (l.pending = null) : ((t = t.next), (a.next = t), Ms(l, t)));
  }
  function Vc(l, a, t) {
    var e = l.pending;
    if (((l.pending = null), e !== null)) {
      e = e.next;
      do (a.status = "rejected"), (a.reason = t), xs(a), (a = a.next);
      while (a !== e);
    }
    l.action = null;
  }
  function xs(l) {
    l = l.listeners;
    for (var a = 0; a < l.length; a++) (0, l[a])();
  }
  function js(l, a) {
    return a;
  }
  function Hs(l, a) {
    if (fl) {
      var t = gl.formState;
      if (t !== null) {
        l: {
          var e = k;
          if (fl) {
            if (El) {
              a: {
                for (var u = El, n = Oa; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break a;
                  }
                  if (((u = Ta(u.nextSibling)), u === null)) {
                    u = null;
                    break a;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (El = Ta(u.nextSibling)), (e = u.data === "F!");
                break l;
              }
            }
            Nt(e);
          }
          e = !1;
        }
        e && (a = t[0]);
      }
    }
    return (
      (t = Fl()),
      (t.memoizedState = t.baseState = a),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: js,
        lastRenderedState: a,
      }),
      (t.queue = e),
      (t = Ps.bind(null, k, e)),
      (e.dispatch = t),
      (e = Zc(!1)),
      (n = $c.bind(null, k, !1, e.queue)),
      (e = Fl()),
      (u = { state: a, dispatch: null, action: l, pending: null }),
      (e.queue = u),
      (t = p0.bind(null, k, u, n, t)),
      (u.dispatch = t),
      (e.memoizedState = l),
      [a, t, !1]
    );
  }
  function qs(l) {
    var a = Dl();
    return Bs(a, ol, l);
  }
  function Bs(l, a, t) {
    if (
      ((a = Xc(l, a, js)[0]),
      (l = ku(Ya)[0]),
      typeof a == "object" && a !== null && typeof a.then == "function")
    )
      try {
        var e = Je(a);
      } catch (c) {
        throw c === Xe ? Lu : c;
      }
    else e = a;
    a = Dl();
    var u = a.queue,
      n = u.dispatch;
    return (
      t !== a.memoizedState &&
        ((k.flags |= 2048), ue(9, Fu(), N0.bind(null, u, t), null)),
      [e, n, l]
    );
  }
  function N0(l, a) {
    l.action = a;
  }
  function Cs(l) {
    var a = Dl(),
      t = ol;
    if (t !== null) return Bs(a, t, l);
    Dl(), (a = a.memoizedState), (t = Dl());
    var e = t.queue.dispatch;
    return (t.memoizedState = l), [a, e, !1];
  }
  function ue(l, a, t, e) {
    return (
      (l = { tag: l, create: t, deps: e, inst: a, next: null }),
      (a = k.updateQueue),
      a === null && ((a = Yc()), (k.updateQueue = a)),
      (t = a.lastEffect),
      t === null
        ? (a.lastEffect = l.next = l)
        : ((e = t.next), (t.next = l), (l.next = e), (a.lastEffect = l)),
      l
    );
  }
  function Fu() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ys() {
    return Dl().memoizedState;
  }
  function Iu(l, a, t, e) {
    var u = Fl();
    (e = e === void 0 ? null : e),
      (k.flags |= l),
      (u.memoizedState = ue(1 | a, Fu(), t, e));
  }
  function we(l, a, t, e) {
    var u = Dl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    ol !== null && e !== null && jc(e, ol.memoizedState.deps)
      ? (u.memoizedState = ue(a, n, t, e))
      : ((k.flags |= l), (u.memoizedState = ue(1 | a, n, t, e)));
  }
  function Gs(l, a) {
    Iu(8390656, 8, l, a);
  }
  function Xs(l, a) {
    we(2048, 8, l, a);
  }
  function Qs(l, a) {
    return we(4, 2, l, a);
  }
  function Zs(l, a) {
    return we(4, 4, l, a);
  }
  function Vs(l, a) {
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
  function Ls(l, a, t) {
    (t = t != null ? t.concat([l]) : null), we(4, 4, Vs.bind(null, a, l), t);
  }
  function Lc() {}
  function Ks(l, a) {
    var t = Dl();
    a = a === void 0 ? null : a;
    var e = t.memoizedState;
    return a !== null && jc(a, e[1]) ? e[0] : ((t.memoizedState = [l, a]), l);
  }
  function Js(l, a) {
    var t = Dl();
    a = a === void 0 ? null : a;
    var e = t.memoizedState;
    if (a !== null && jc(a, e[1])) return e[0];
    if (((e = l()), Mt)) {
      Ja(!0);
      try {
        l();
      } finally {
        Ja(!1);
      }
    }
    return (t.memoizedState = [e, a]), e;
  }
  function Kc(l, a, t) {
    return t === void 0 || (Pa & 1073741824) !== 0
      ? (l.memoizedState = a)
      : ((l.memoizedState = t), (l = Wr()), (k.lanes |= l), (ct |= l), t);
  }
  function ws(l, a, t, e) {
    return ea(t, a)
      ? t
      : ae.current !== null
      ? ((l = Kc(l, t, e)), ea(l, a) || (jl = !0), l)
      : (Pa & 42) === 0
      ? ((jl = !0), (l.memoizedState = t))
      : ((l = Wr()), (k.lanes |= l), (ct |= l), a);
  }
  function $s(l, a, t, e, u) {
    var n = N.p;
    N.p = n !== 0 && 8 > n ? n : 8;
    var c = S.T,
      i = {};
    (S.T = i), $c(l, !1, a, t);
    try {
      var f = u(),
        m = S.S;
      if (
        (m !== null && m(i, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var z = E0(f, e);
        $e(l, a, z, fa(l));
      } else $e(l, a, e, fa(l));
    } catch (A) {
      $e(l, a, { then: function () {}, status: "rejected", reason: A }, fa());
    } finally {
      (N.p = n), (S.T = c);
    }
  }
  function O0() {}
  function Jc(l, a, t, e) {
    if (l.tag !== 5) throw Error(h(476));
    var u = Ws(l).queue;
    $s(
      l,
      u,
      a,
      H,
      t === null
        ? O0
        : function () {
            return ks(l), t(e);
          }
    );
  }
  function Ws(l) {
    var a = l.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: H,
      baseState: H,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ya,
        lastRenderedState: H,
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
          lastRenderedReducer: Ya,
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
  function ks(l) {
    var a = Ws(l).next.queue;
    $e(l, a, {}, fa());
  }
  function wc() {
    return Zl(ou);
  }
  function Fs() {
    return Dl().memoizedState;
  }
  function Is() {
    return Dl().memoizedState;
  }
  function D0(l) {
    for (var a = l.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var t = fa();
          l = Fa(t);
          var e = Ia(a, l, t);
          e !== null && (sa(e, a, t), Ze(e, a, t)),
            (a = { cache: Tc() }),
            (l.payload = a);
          return;
      }
      a = a.return;
    }
  }
  function _0(l, a, t) {
    var e = fa();
    (t = {
      lane: e,
      revertLane: 0,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Pu(l)
        ? lr(a, t)
        : ((t = hc(l, a, t, e)), t !== null && (sa(t, l, e), ar(t, a, e)));
  }
  function Ps(l, a, t) {
    var e = fa();
    $e(l, a, t, e);
  }
  function $e(l, a, t, e) {
    var u = {
      lane: e,
      revertLane: 0,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Pu(l)) lr(a, u);
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
          if (((u.hasEagerState = !0), (u.eagerState = i), ea(i, c)))
            return Bu(l, a, u, 0), gl === null && qu(), !1;
        } catch {
        } finally {
        }
      if (((t = hc(l, a, u, e)), t !== null))
        return sa(t, l, e), ar(t, a, e), !0;
    }
    return !1;
  }
  function $c(l, a, t, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: Oi(),
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Pu(l))
    ) {
      if (a) throw Error(h(479));
    } else (a = hc(l, t, e, 2)), a !== null && sa(a, l, 2);
  }
  function Pu(l) {
    var a = l.alternate;
    return l === k || (a !== null && a === k);
  }
  function lr(l, a) {
    te = wu = !0;
    var t = l.pending;
    t === null ? (a.next = a) : ((a.next = t.next), (t.next = a)),
      (l.pending = a);
  }
  function ar(l, a, t) {
    if ((t & 4194048) !== 0) {
      var e = a.lanes;
      (e &= l.pendingLanes), (t |= e), (a.lanes = t), sf(l, t);
    }
  }
  var ln = {
      readContext: Zl,
      use: Wu,
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
    tr = {
      readContext: Zl,
      use: Wu,
      useCallback: function (l, a) {
        return (Fl().memoizedState = [l, a === void 0 ? null : a]), l;
      },
      useContext: Zl,
      useEffect: Gs,
      useImperativeHandle: function (l, a, t) {
        (t = t != null ? t.concat([l]) : null),
          Iu(4194308, 4, Vs.bind(null, a, l), t);
      },
      useLayoutEffect: function (l, a) {
        return Iu(4194308, 4, l, a);
      },
      useInsertionEffect: function (l, a) {
        Iu(4, 2, l, a);
      },
      useMemo: function (l, a) {
        var t = Fl();
        a = a === void 0 ? null : a;
        var e = l();
        if (Mt) {
          Ja(!0);
          try {
            l();
          } finally {
            Ja(!1);
          }
        }
        return (t.memoizedState = [e, a]), e;
      },
      useReducer: function (l, a, t) {
        var e = Fl();
        if (t !== void 0) {
          var u = t(a);
          if (Mt) {
            Ja(!0);
            try {
              t(a);
            } finally {
              Ja(!1);
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
          (l = l.dispatch = _0.bind(null, k, l)),
          [e.memoizedState, l]
        );
      },
      useRef: function (l) {
        var a = Fl();
        return (l = { current: l }), (a.memoizedState = l);
      },
      useState: function (l) {
        l = Zc(l);
        var a = l.queue,
          t = Ps.bind(null, k, a);
        return (a.dispatch = t), [l.memoizedState, t];
      },
      useDebugValue: Lc,
      useDeferredValue: function (l, a) {
        var t = Fl();
        return Kc(t, l, a);
      },
      useTransition: function () {
        var l = Zc(!1);
        return (
          (l = $s.bind(null, k, l.queue, !0, !1)),
          (Fl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, a, t) {
        var e = k,
          u = Fl();
        if (fl) {
          if (t === void 0) throw Error(h(407));
          t = t();
        } else {
          if (((t = a()), gl === null)) throw Error(h(349));
          (cl & 124) !== 0 || Ts(e, a, t);
        }
        u.memoizedState = t;
        var n = { value: t, getSnapshot: a };
        return (
          (u.queue = n),
          Gs(Ns.bind(null, e, n, l), [l]),
          (e.flags |= 2048),
          ue(9, Fu(), ps.bind(null, e, n, t, a), null),
          t
        );
      },
      useId: function () {
        var l = Fl(),
          a = gl.identifierPrefix;
        if (fl) {
          var t = qa,
            e = Ha;
          (t = (e & ~(1 << (32 - ta(e) - 1))).toString(32) + t),
            (a = "«" + a + "R" + t),
            (t = $u++),
            0 < t && (a += "H" + t.toString(32)),
            (a += "»");
        } else (t = A0++), (a = "«" + a + "r" + t.toString(32) + "»");
        return (l.memoizedState = a);
      },
      useHostTransitionStatus: wc,
      useFormState: Hs,
      useActionState: Hs,
      useOptimistic: function (l) {
        var a = Fl();
        a.memoizedState = a.baseState = l;
        var t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (a.queue = t), (a = $c.bind(null, k, !0, t)), (t.dispatch = a), [l, a]
        );
      },
      useMemoCache: Gc,
      useCacheRefresh: function () {
        return (Fl().memoizedState = D0.bind(null, k));
      },
    },
    er = {
      readContext: Zl,
      use: Wu,
      useCallback: Ks,
      useContext: Zl,
      useEffect: Xs,
      useImperativeHandle: Ls,
      useInsertionEffect: Qs,
      useLayoutEffect: Zs,
      useMemo: Js,
      useReducer: ku,
      useRef: Ys,
      useState: function () {
        return ku(Ya);
      },
      useDebugValue: Lc,
      useDeferredValue: function (l, a) {
        var t = Dl();
        return ws(t, ol.memoizedState, l, a);
      },
      useTransition: function () {
        var l = ku(Ya)[0],
          a = Dl().memoizedState;
        return [typeof l == "boolean" ? l : Je(l), a];
      },
      useSyncExternalStore: As,
      useId: Fs,
      useHostTransitionStatus: wc,
      useFormState: qs,
      useActionState: qs,
      useOptimistic: function (l, a) {
        var t = Dl();
        return _s(t, ol, l, a);
      },
      useMemoCache: Gc,
      useCacheRefresh: Is,
    },
    M0 = {
      readContext: Zl,
      use: Wu,
      useCallback: Ks,
      useContext: Zl,
      useEffect: Xs,
      useImperativeHandle: Ls,
      useInsertionEffect: Qs,
      useLayoutEffect: Zs,
      useMemo: Js,
      useReducer: Qc,
      useRef: Ys,
      useState: function () {
        return Qc(Ya);
      },
      useDebugValue: Lc,
      useDeferredValue: function (l, a) {
        var t = Dl();
        return ol === null ? Kc(t, l, a) : ws(t, ol.memoizedState, l, a);
      },
      useTransition: function () {
        var l = Qc(Ya)[0],
          a = Dl().memoizedState;
        return [typeof l == "boolean" ? l : Je(l), a];
      },
      useSyncExternalStore: As,
      useId: Fs,
      useHostTransitionStatus: wc,
      useFormState: Cs,
      useActionState: Cs,
      useOptimistic: function (l, a) {
        var t = Dl();
        return ol !== null
          ? _s(t, ol, l, a)
          : ((t.baseState = l), [l, t.queue.dispatch]);
      },
      useMemoCache: Gc,
      useCacheRefresh: Is,
    },
    ne = null,
    We = 0;
  function an(l) {
    var a = We;
    return (We += 1), ne === null && (ne = []), ms(ne, l, a);
  }
  function ke(l, a) {
    (a = a.props.ref), (l.ref = a !== void 0 ? a : null);
  }
  function tn(l, a) {
    throw a.$$typeof === O
      ? Error(h(525))
      : ((l = Object.prototype.toString.call(a)),
        Error(
          h(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(a).join(", ") + "}"
              : l
          )
        ));
  }
  function ur(l) {
    var a = l._init;
    return a(l._payload);
  }
  function nr(l) {
    function a(d, r) {
      if (l) {
        var o = d.deletions;
        o === null ? ((d.deletions = [r]), (d.flags |= 16)) : o.push(r);
      }
    }
    function t(d, r) {
      if (!l) return null;
      for (; r !== null; ) a(d, r), (r = r.sibling);
      return null;
    }
    function e(d) {
      for (var r = new Map(); d !== null; )
        d.key !== null ? r.set(d.key, d) : r.set(d.index, d), (d = d.sibling);
      return r;
    }
    function u(d, r) {
      return (d = ja(d, r)), (d.index = 0), (d.sibling = null), d;
    }
    function n(d, r, o) {
      return (
        (d.index = o),
        l
          ? ((o = d.alternate),
            o !== null
              ? ((o = o.index), o < r ? ((d.flags |= 67108866), r) : o)
              : ((d.flags |= 67108866), r))
          : ((d.flags |= 1048576), r)
      );
    }
    function c(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function i(d, r, o, E) {
      return r === null || r.tag !== 6
        ? ((r = vc(o, d.mode, E)), (r.return = d), r)
        : ((r = u(r, o)), (r.return = d), r);
    }
    function f(d, r, o, E) {
      var U = o.type;
      return U === Nl
        ? z(d, r, o.props.children, E, o.key)
        : r !== null &&
          (r.elementType === U ||
            (typeof U == "object" &&
              U !== null &&
              U.$$typeof === Jl &&
              ur(U) === r.type))
        ? ((r = u(r, o.props)), ke(r, o), (r.return = d), r)
        : ((r = Yu(o.type, o.key, o.props, null, d.mode, E)),
          ke(r, o),
          (r.return = d),
          r);
    }
    function m(d, r, o, E) {
      return r === null ||
        r.tag !== 4 ||
        r.stateNode.containerInfo !== o.containerInfo ||
        r.stateNode.implementation !== o.implementation
        ? ((r = yc(o, d.mode, E)), (r.return = d), r)
        : ((r = u(r, o.children || [])), (r.return = d), r);
    }
    function z(d, r, o, E, U) {
      return r === null || r.tag !== 7
        ? ((r = Et(o, d.mode, E, U)), (r.return = d), r)
        : ((r = u(r, o)), (r.return = d), r);
    }
    function A(d, r, o) {
      if (
        (typeof r == "string" && r !== "") ||
        typeof r == "number" ||
        typeof r == "bigint"
      )
        return (r = vc("" + r, d.mode, o)), (r.return = d), r;
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case w:
            return (
              (o = Yu(r.type, r.key, r.props, null, d.mode, o)),
              ke(o, r),
              (o.return = d),
              o
            );
          case ul:
            return (r = yc(r, d.mode, o)), (r.return = d), r;
          case Jl:
            var E = r._init;
            return (r = E(r._payload)), A(d, r, o);
        }
        if (al(r) || $(r))
          return (r = Et(r, d.mode, o, null)), (r.return = d), r;
        if (typeof r.then == "function") return A(d, an(r), o);
        if (r.$$typeof === Ul) return A(d, Zu(d, r), o);
        tn(d, r);
      }
      return null;
    }
    function y(d, r, o, E) {
      var U = r !== null ? r.key : null;
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return U !== null ? null : i(d, r, "" + o, E);
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case w:
            return o.key === U ? f(d, r, o, E) : null;
          case ul:
            return o.key === U ? m(d, r, o, E) : null;
          case Jl:
            return (U = o._init), (o = U(o._payload)), y(d, r, o, E);
        }
        if (al(o) || $(o)) return U !== null ? null : z(d, r, o, E, null);
        if (typeof o.then == "function") return y(d, r, an(o), E);
        if (o.$$typeof === Ul) return y(d, r, Zu(d, o), E);
        tn(d, o);
      }
      return null;
    }
    function g(d, r, o, E, U) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return (d = d.get(o) || null), i(r, d, "" + E, U);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case w:
            return (
              (d = d.get(E.key === null ? o : E.key) || null), f(r, d, E, U)
            );
          case ul:
            return (
              (d = d.get(E.key === null ? o : E.key) || null), m(r, d, E, U)
            );
          case Jl:
            var F = E._init;
            return (E = F(E._payload)), g(d, r, o, E, U);
        }
        if (al(E) || $(E)) return (d = d.get(o) || null), z(r, d, E, U, null);
        if (typeof E.then == "function") return g(d, r, o, an(E), U);
        if (E.$$typeof === Ul) return g(d, r, o, Zu(r, E), U);
        tn(r, E);
      }
      return null;
    }
    function V(d, r, o, E) {
      for (
        var U = null, F = null, q = r, Q = (r = 0), ql = null;
        q !== null && Q < o.length;
        Q++
      ) {
        q.index > Q ? ((ql = q), (q = null)) : (ql = q.sibling);
        var il = y(d, q, o[Q], E);
        if (il === null) {
          q === null && (q = ql);
          break;
        }
        l && q && il.alternate === null && a(d, q),
          (r = n(il, r, Q)),
          F === null ? (U = il) : (F.sibling = il),
          (F = il),
          (q = ql);
      }
      if (Q === o.length) return t(d, q), fl && Tt(d, Q), U;
      if (q === null) {
        for (; Q < o.length; Q++)
          (q = A(d, o[Q], E)),
            q !== null &&
              ((r = n(q, r, Q)),
              F === null ? (U = q) : (F.sibling = q),
              (F = q));
        return fl && Tt(d, Q), U;
      }
      for (q = e(q); Q < o.length; Q++)
        (ql = g(q, d, Q, o[Q], E)),
          ql !== null &&
            (l &&
              ql.alternate !== null &&
              q.delete(ql.key === null ? Q : ql.key),
            (r = n(ql, r, Q)),
            F === null ? (U = ql) : (F.sibling = ql),
            (F = ql));
      return (
        l &&
          q.forEach(function (vt) {
            return a(d, vt);
          }),
        fl && Tt(d, Q),
        U
      );
    }
    function X(d, r, o, E) {
      if (o == null) throw Error(h(151));
      for (
        var U = null, F = null, q = r, Q = (r = 0), ql = null, il = o.next();
        q !== null && !il.done;
        Q++, il = o.next()
      ) {
        q.index > Q ? ((ql = q), (q = null)) : (ql = q.sibling);
        var vt = y(d, q, il.value, E);
        if (vt === null) {
          q === null && (q = ql);
          break;
        }
        l && q && vt.alternate === null && a(d, q),
          (r = n(vt, r, Q)),
          F === null ? (U = vt) : (F.sibling = vt),
          (F = vt),
          (q = ql);
      }
      if (il.done) return t(d, q), fl && Tt(d, Q), U;
      if (q === null) {
        for (; !il.done; Q++, il = o.next())
          (il = A(d, il.value, E)),
            il !== null &&
              ((r = n(il, r, Q)),
              F === null ? (U = il) : (F.sibling = il),
              (F = il));
        return fl && Tt(d, Q), U;
      }
      for (q = e(q); !il.done; Q++, il = o.next())
        (il = g(q, d, Q, il.value, E)),
          il !== null &&
            (l &&
              il.alternate !== null &&
              q.delete(il.key === null ? Q : il.key),
            (r = n(il, r, Q)),
            F === null ? (U = il) : (F.sibling = il),
            (F = il));
      return (
        l &&
          q.forEach(function (Rh) {
            return a(d, Rh);
          }),
        fl && Tt(d, Q),
        U
      );
    }
    function ml(d, r, o, E) {
      if (
        (typeof o == "object" &&
          o !== null &&
          o.type === Nl &&
          o.key === null &&
          (o = o.props.children),
        typeof o == "object" && o !== null)
      ) {
        switch (o.$$typeof) {
          case w:
            l: {
              for (var U = o.key; r !== null; ) {
                if (r.key === U) {
                  if (((U = o.type), U === Nl)) {
                    if (r.tag === 7) {
                      t(d, r.sibling),
                        (E = u(r, o.props.children)),
                        (E.return = d),
                        (d = E);
                      break l;
                    }
                  } else if (
                    r.elementType === U ||
                    (typeof U == "object" &&
                      U !== null &&
                      U.$$typeof === Jl &&
                      ur(U) === r.type)
                  ) {
                    t(d, r.sibling),
                      (E = u(r, o.props)),
                      ke(E, o),
                      (E.return = d),
                      (d = E);
                    break l;
                  }
                  t(d, r);
                  break;
                } else a(d, r);
                r = r.sibling;
              }
              o.type === Nl
                ? ((E = Et(o.props.children, d.mode, E, o.key)),
                  (E.return = d),
                  (d = E))
                : ((E = Yu(o.type, o.key, o.props, null, d.mode, E)),
                  ke(E, o),
                  (E.return = d),
                  (d = E));
            }
            return c(d);
          case ul:
            l: {
              for (U = o.key; r !== null; ) {
                if (r.key === U)
                  if (
                    r.tag === 4 &&
                    r.stateNode.containerInfo === o.containerInfo &&
                    r.stateNode.implementation === o.implementation
                  ) {
                    t(d, r.sibling),
                      (E = u(r, o.children || [])),
                      (E.return = d),
                      (d = E);
                    break l;
                  } else {
                    t(d, r);
                    break;
                  }
                else a(d, r);
                r = r.sibling;
              }
              (E = yc(o, d.mode, E)), (E.return = d), (d = E);
            }
            return c(d);
          case Jl:
            return (U = o._init), (o = U(o._payload)), ml(d, r, o, E);
        }
        if (al(o)) return V(d, r, o, E);
        if ($(o)) {
          if (((U = $(o)), typeof U != "function")) throw Error(h(150));
          return (o = U.call(o)), X(d, r, o, E);
        }
        if (typeof o.then == "function") return ml(d, r, an(o), E);
        if (o.$$typeof === Ul) return ml(d, r, Zu(d, o), E);
        tn(d, o);
      }
      return (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
        ? ((o = "" + o),
          r !== null && r.tag === 6
            ? (t(d, r.sibling), (E = u(r, o)), (E.return = d), (d = E))
            : (t(d, r), (E = vc(o, d.mode, E)), (E.return = d), (d = E)),
          c(d))
        : t(d, r);
    }
    return function (d, r, o, E) {
      try {
        We = 0;
        var U = ml(d, r, o, E);
        return (ne = null), U;
      } catch (q) {
        if (q === Xe || q === Lu) throw q;
        var F = ua(29, q, null, d.mode);
        return (F.lanes = E), (F.return = d), F;
      } finally {
      }
    };
  }
  var ce = nr(!0),
    cr = nr(!1),
    ya = T(null),
    Da = null;
  function lt(l) {
    var a = l.alternate;
    D(Ml, Ml.current & 1),
      D(ya, l),
      Da === null &&
        (a === null || ae.current !== null || a.memoizedState !== null) &&
        (Da = l);
  }
  function ir(l) {
    if (l.tag === 22) {
      if ((D(Ml, Ml.current), D(ya, l), Da === null)) {
        var a = l.alternate;
        a !== null && a.memoizedState !== null && (Da = l);
      }
    } else at();
  }
  function at() {
    D(Ml, Ml.current), D(ya, ya.current);
  }
  function Ga(l) {
    M(ya), Da === l && (Da = null), M(Ml);
  }
  var Ml = T(0);
  function en(l) {
    for (var a = l; a !== null; ) {
      if (a.tag === 13) {
        var t = a.memoizedState;
        if (
          t !== null &&
          ((t = t.dehydrated), t === null || t.data === "$?" || Yi(t))
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
  function Wc(l, a, t, e) {
    (a = l.memoizedState),
      (t = t(e, a)),
      (t = t == null ? a : R({}, a, t)),
      (l.memoizedState = t),
      l.lanes === 0 && (l.updateQueue.baseState = t);
  }
  var kc = {
    enqueueSetState: function (l, a, t) {
      l = l._reactInternals;
      var e = fa(),
        u = Fa(e);
      (u.payload = a),
        t != null && (u.callback = t),
        (a = Ia(l, u, e)),
        a !== null && (sa(a, l, e), Ze(a, l, e));
    },
    enqueueReplaceState: function (l, a, t) {
      l = l._reactInternals;
      var e = fa(),
        u = Fa(e);
      (u.tag = 1),
        (u.payload = a),
        t != null && (u.callback = t),
        (a = Ia(l, u, e)),
        a !== null && (sa(a, l, e), Ze(a, l, e));
    },
    enqueueForceUpdate: function (l, a) {
      l = l._reactInternals;
      var t = fa(),
        e = Fa(t);
      (e.tag = 2),
        a != null && (e.callback = a),
        (a = Ia(l, e, t)),
        a !== null && (sa(a, l, t), Ze(a, l, t));
    },
  };
  function fr(l, a, t, e, u, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(e, n, c)
        : a.prototype && a.prototype.isPureReactComponent
        ? !xe(t, e) || !xe(u, n)
        : !0
    );
  }
  function sr(l, a, t, e) {
    (l = a.state),
      typeof a.componentWillReceiveProps == "function" &&
        a.componentWillReceiveProps(t, e),
      typeof a.UNSAFE_componentWillReceiveProps == "function" &&
        a.UNSAFE_componentWillReceiveProps(t, e),
      a.state !== l && kc.enqueueReplaceState(a, a.state, null);
  }
  function Rt(l, a) {
    var t = a;
    if ("ref" in a) {
      t = {};
      for (var e in a) e !== "ref" && (t[e] = a[e]);
    }
    if ((l = l.defaultProps)) {
      t === a && (t = R({}, t));
      for (var u in l) t[u] === void 0 && (t[u] = l[u]);
    }
    return t;
  }
  var un =
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
  function rr(l) {
    un(l);
  }
  function dr(l) {
    console.error(l);
  }
  function or(l) {
    un(l);
  }
  function nn(l, a) {
    try {
      var t = l.onUncaughtError;
      t(a.value, { componentStack: a.stack });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function hr(l, a, t) {
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
  function Fc(l, a, t) {
    return (
      (t = Fa(t)),
      (t.tag = 3),
      (t.payload = { element: null }),
      (t.callback = function () {
        nn(l, a);
      }),
      t
    );
  }
  function mr(l) {
    return (l = Fa(l)), (l.tag = 3), l;
  }
  function vr(l, a, t, e) {
    var u = t.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      (l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          hr(a, t, e);
        });
    }
    var c = t.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        hr(a, t, e),
          typeof u != "function" &&
            (it === null ? (it = new Set([this])) : it.add(this));
        var i = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: i !== null ? i : "",
        });
      });
  }
  function R0(l, a, t, e, u) {
    if (
      ((t.flags |= 32768),
      e !== null && typeof e == "object" && typeof e.then == "function")
    ) {
      if (
        ((a = t.alternate),
        a !== null && Ce(a, t, u, !0),
        (t = ya.current),
        t !== null)
      ) {
        switch (t.tag) {
          case 13:
            return (
              Da === null ? Ei() : t.alternate === null && Al === 0 && (Al = 3),
              (t.flags &= -257),
              (t.flags |= 65536),
              (t.lanes = u),
              e === Oc
                ? (t.flags |= 16384)
                : ((a = t.updateQueue),
                  a === null ? (t.updateQueue = new Set([e])) : a.add(e),
                  Ti(l, e, u)),
              !1
            );
          case 22:
            return (
              (t.flags |= 65536),
              e === Oc
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
                  Ti(l, e, u)),
              !1
            );
        }
        throw Error(h(435, t.tag));
      }
      return Ti(l, e, u), Ei(), !1;
    }
    if (fl)
      return (
        (a = ya.current),
        a !== null
          ? ((a.flags & 65536) === 0 && (a.flags |= 256),
            (a.flags |= 65536),
            (a.lanes = u),
            e !== bc && ((l = Error(h(422), { cause: e })), Be(oa(l, t))))
          : (e !== bc && ((a = Error(h(423), { cause: e })), Be(oa(a, t))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (e = oa(e, t)),
            (u = Fc(l.stateNode, e, u)),
            Mc(l, u),
            Al !== 4 && (Al = 2)),
        !1
      );
    var n = Error(h(520), { cause: e });
    if (
      ((n = oa(n, t)),
      eu === null ? (eu = [n]) : eu.push(n),
      Al !== 4 && (Al = 2),
      a === null)
    )
      return !0;
    (e = oa(e, t)), (t = a);
    do {
      switch (t.tag) {
        case 3:
          return (
            (t.flags |= 65536),
            (l = u & -u),
            (t.lanes |= l),
            (l = Fc(t.stateNode, e, l)),
            Mc(t, l),
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
                  (it === null || !it.has(n)))))
          )
            return (
              (t.flags |= 65536),
              (u &= -u),
              (t.lanes |= u),
              (u = mr(u)),
              vr(u, l, t, e),
              Mc(t, u),
              !1
            );
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var yr = Error(h(461)),
    jl = !1;
  function Cl(l, a, t, e) {
    a.child = l === null ? cr(a, null, t, e) : ce(a, l.child, t, e);
  }
  function gr(l, a, t, e, u) {
    t = t.render;
    var n = a.ref;
    if ("ref" in e) {
      var c = {};
      for (var i in e) i !== "ref" && (c[i] = e[i]);
    } else c = e;
    return (
      Dt(a),
      (e = Hc(l, a, t, c, n, u)),
      (i = qc()),
      l !== null && !jl
        ? (Bc(l, a, u), Xa(l, a, u))
        : (fl && i && gc(a), (a.flags |= 1), Cl(l, a, e, u), a.child)
    );
  }
  function Sr(l, a, t, e, u) {
    if (l === null) {
      var n = t.type;
      return typeof n == "function" &&
        !mc(n) &&
        n.defaultProps === void 0 &&
        t.compare === null
        ? ((a.tag = 15), (a.type = n), br(l, a, n, e, u))
        : ((l = Yu(t.type, null, e, a, a.mode, u)),
          (l.ref = a.ref),
          (l.return = a),
          (a.child = l));
    }
    if (((n = l.child), !ni(l, u))) {
      var c = n.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : xe), t(c, e) && l.ref === a.ref)
      )
        return Xa(l, a, u);
    }
    return (
      (a.flags |= 1),
      (l = ja(n, e)),
      (l.ref = a.ref),
      (l.return = a),
      (a.child = l)
    );
  }
  function br(l, a, t, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (xe(n, e) && l.ref === a.ref)
        if (((jl = !1), (a.pendingProps = e = n), ni(l, u)))
          (l.flags & 131072) !== 0 && (jl = !0);
        else return (a.lanes = l.lanes), Xa(l, a, u);
    }
    return Ic(l, a, t, e, u);
  }
  function zr(l, a, t) {
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
        return Er(l, a, e, t);
      }
      if ((t & 536870912) !== 0)
        (a.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Vu(a, n !== null ? n.cachePool : null),
          n !== null ? bs(a, n) : Uc(),
          ir(a);
      else
        return (
          (a.lanes = a.childLanes = 536870912),
          Er(l, a, n !== null ? n.baseLanes | t : t, t)
        );
    } else
      n !== null
        ? (Vu(a, n.cachePool), bs(a, n), at(), (a.memoizedState = null))
        : (l !== null && Vu(a, null), Uc(), at());
    return Cl(l, a, u, t), a.child;
  }
  function Er(l, a, t, e) {
    var u = Nc();
    return (
      (u = u === null ? null : { parent: _l._currentValue, pool: u }),
      (a.memoizedState = { baseLanes: t, cachePool: u }),
      l !== null && Vu(a, null),
      Uc(),
      ir(a),
      l !== null && Ce(l, a, e, !0),
      null
    );
  }
  function cn(l, a) {
    var t = a.ref;
    if (t === null) l !== null && l.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object") throw Error(h(284));
      (l === null || l.ref !== t) && (a.flags |= 4194816);
    }
  }
  function Ic(l, a, t, e, u) {
    return (
      Dt(a),
      (t = Hc(l, a, t, e, void 0, u)),
      (e = qc()),
      l !== null && !jl
        ? (Bc(l, a, u), Xa(l, a, u))
        : (fl && e && gc(a), (a.flags |= 1), Cl(l, a, t, u), a.child)
    );
  }
  function Ar(l, a, t, e, u, n) {
    return (
      Dt(a),
      (a.updateQueue = null),
      (t = Es(a, e, t, u)),
      zs(l),
      (e = qc()),
      l !== null && !jl
        ? (Bc(l, a, n), Xa(l, a, n))
        : (fl && e && gc(a), (a.flags |= 1), Cl(l, a, t, n), a.child)
    );
  }
  function Tr(l, a, t, e, u) {
    if ((Dt(a), a.stateNode === null)) {
      var n = kt,
        c = t.contextType;
      typeof c == "object" && c !== null && (n = Zl(c)),
        (n = new t(e, n)),
        (a.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = kc),
        (a.stateNode = n),
        (n._reactInternals = a),
        (n = a.stateNode),
        (n.props = e),
        (n.state = a.memoizedState),
        (n.refs = {}),
        Dc(a),
        (c = t.contextType),
        (n.context = typeof c == "object" && c !== null ? Zl(c) : kt),
        (n.state = a.memoizedState),
        (c = t.getDerivedStateFromProps),
        typeof c == "function" && (Wc(a, t, c, e), (n.state = a.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && kc.enqueueReplaceState(n, n.state, null),
          Le(a, e, n, u),
          Ve(),
          (n.state = a.memoizedState)),
        typeof n.componentDidMount == "function" && (a.flags |= 4194308),
        (e = !0);
    } else if (l === null) {
      n = a.stateNode;
      var i = a.memoizedProps,
        f = Rt(t, i);
      n.props = f;
      var m = n.context,
        z = t.contextType;
      (c = kt), typeof z == "object" && z !== null && (c = Zl(z));
      var A = t.getDerivedStateFromProps;
      (z =
        typeof A == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (i = a.pendingProps !== i),
        z ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i || m !== c) && sr(a, n, e, c)),
        (ka = !1);
      var y = a.memoizedState;
      (n.state = y),
        Le(a, e, n, u),
        Ve(),
        (m = a.memoizedState),
        i || y !== m || ka
          ? (typeof A == "function" && (Wc(a, t, A, e), (m = a.memoizedState)),
            (f = ka || fr(a, t, f, e, y, m, c))
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
                (a.memoizedState = m)),
            (n.props = e),
            (n.state = m),
            (n.context = c),
            (e = f))
          : (typeof n.componentDidMount == "function" && (a.flags |= 4194308),
            (e = !1));
    } else {
      (n = a.stateNode),
        _c(l, a),
        (c = a.memoizedProps),
        (z = Rt(t, c)),
        (n.props = z),
        (A = a.pendingProps),
        (y = n.context),
        (m = t.contextType),
        (f = kt),
        typeof m == "object" && m !== null && (f = Zl(m)),
        (i = t.getDerivedStateFromProps),
        (m =
          typeof i == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== A || y !== f) && sr(a, n, e, f)),
        (ka = !1),
        (y = a.memoizedState),
        (n.state = y),
        Le(a, e, n, u),
        Ve();
      var g = a.memoizedState;
      c !== A ||
      y !== g ||
      ka ||
      (l !== null && l.dependencies !== null && Qu(l.dependencies))
        ? (typeof i == "function" && (Wc(a, t, i, e), (g = a.memoizedState)),
          (z =
            ka ||
            fr(a, t, z, e, y, g, f) ||
            (l !== null && l.dependencies !== null && Qu(l.dependencies)))
            ? (m ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(e, g, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(e, g, f)),
              typeof n.componentDidUpdate == "function" && (a.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (a.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && y === l.memoizedState) ||
                (a.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && y === l.memoizedState) ||
                (a.flags |= 1024),
              (a.memoizedProps = e),
              (a.memoizedState = g)),
          (n.props = e),
          (n.state = g),
          (n.context = f),
          (e = z))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && y === l.memoizedState) ||
            (a.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && y === l.memoizedState) ||
            (a.flags |= 1024),
          (e = !1));
    }
    return (
      (n = e),
      cn(l, a),
      (e = (a.flags & 128) !== 0),
      n || e
        ? ((n = a.stateNode),
          (t =
            e && typeof t.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (a.flags |= 1),
          l !== null && e
            ? ((a.child = ce(a, l.child, null, u)),
              (a.child = ce(a, null, t, u)))
            : Cl(l, a, t, u),
          (a.memoizedState = n.state),
          (l = a.child))
        : (l = Xa(l, a, u)),
      l
    );
  }
  function pr(l, a, t, e) {
    return qe(), (a.flags |= 256), Cl(l, a, t, e), a.child;
  }
  var Pc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function li(l) {
    return { baseLanes: l, cachePool: ds() };
  }
  function ai(l, a, t) {
    return (l = l !== null ? l.childLanes & ~t : 0), a && (l |= ga), l;
  }
  function Nr(l, a, t) {
    var e = a.pendingProps,
      u = !1,
      n = (a.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (Ml.current & 2) !== 0),
      c && ((u = !0), (a.flags &= -129)),
      (c = (a.flags & 32) !== 0),
      (a.flags &= -33),
      l === null)
    ) {
      if (fl) {
        if ((u ? lt(a) : at(), fl)) {
          var i = El,
            f;
          if ((f = i)) {
            l: {
              for (f = i, i = Oa; f.nodeType !== 8; ) {
                if (!i) {
                  i = null;
                  break l;
                }
                if (((f = Ta(f.nextSibling)), f === null)) {
                  i = null;
                  break l;
                }
              }
              i = f;
            }
            i !== null
              ? ((a.memoizedState = {
                  dehydrated: i,
                  treeContext: At !== null ? { id: Ha, overflow: qa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (f = ua(18, null, null, 0)),
                (f.stateNode = i),
                (f.return = a),
                (a.child = f),
                ($l = a),
                (El = null),
                (f = !0))
              : (f = !1);
          }
          f || Nt(a);
        }
        if (
          ((i = a.memoizedState),
          i !== null && ((i = i.dehydrated), i !== null))
        )
          return Yi(i) ? (a.lanes = 32) : (a.lanes = 536870912), null;
        Ga(a);
      }
      return (
        (i = e.children),
        (e = e.fallback),
        u
          ? (at(),
            (u = a.mode),
            (i = fn({ mode: "hidden", children: i }, u)),
            (e = Et(e, u, t, null)),
            (i.return = a),
            (e.return = a),
            (i.sibling = e),
            (a.child = i),
            (u = a.child),
            (u.memoizedState = li(t)),
            (u.childLanes = ai(l, c, t)),
            (a.memoizedState = Pc),
            e)
          : (lt(a), ti(a, i))
      );
    }
    if (
      ((f = l.memoizedState), f !== null && ((i = f.dehydrated), i !== null))
    ) {
      if (n)
        a.flags & 256
          ? (lt(a), (a.flags &= -257), (a = ei(l, a, t)))
          : a.memoizedState !== null
          ? (at(), (a.child = l.child), (a.flags |= 128), (a = null))
          : (at(),
            (u = e.fallback),
            (i = a.mode),
            (e = fn({ mode: "visible", children: e.children }, i)),
            (u = Et(u, i, t, null)),
            (u.flags |= 2),
            (e.return = a),
            (u.return = a),
            (e.sibling = u),
            (a.child = e),
            ce(a, l.child, null, t),
            (e = a.child),
            (e.memoizedState = li(t)),
            (e.childLanes = ai(l, c, t)),
            (a.memoizedState = Pc),
            (a = u));
      else if ((lt(a), Yi(i))) {
        if (((c = i.nextSibling && i.nextSibling.dataset), c)) var m = c.dgst;
        (c = m),
          (e = Error(h(419))),
          (e.stack = ""),
          (e.digest = c),
          Be({ value: e, source: null, stack: null }),
          (a = ei(l, a, t));
      } else if (
        (jl || Ce(l, a, t, !1), (c = (t & l.childLanes) !== 0), jl || c)
      ) {
        if (
          ((c = gl),
          c !== null &&
            ((e = t & -t),
            (e = (e & 42) !== 0 ? 1 : Gn(e)),
            (e = (e & (c.suspendedLanes | t)) !== 0 ? 0 : e),
            e !== 0 && e !== f.retryLane))
        )
          throw ((f.retryLane = e), Wt(l, e), sa(c, l, e), yr);
        i.data === "$?" || Ei(), (a = ei(l, a, t));
      } else
        i.data === "$?"
          ? ((a.flags |= 192), (a.child = l.child), (a = null))
          : ((l = f.treeContext),
            (El = Ta(i.nextSibling)),
            ($l = a),
            (fl = !0),
            (pt = null),
            (Oa = !1),
            l !== null &&
              ((ma[va++] = Ha),
              (ma[va++] = qa),
              (ma[va++] = At),
              (Ha = l.id),
              (qa = l.overflow),
              (At = a)),
            (a = ti(a, e.children)),
            (a.flags |= 4096));
      return a;
    }
    return u
      ? (at(),
        (u = e.fallback),
        (i = a.mode),
        (f = l.child),
        (m = f.sibling),
        (e = ja(f, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = f.subtreeFlags & 65011712),
        m !== null ? (u = ja(m, u)) : ((u = Et(u, i, t, null)), (u.flags |= 2)),
        (u.return = a),
        (e.return = a),
        (e.sibling = u),
        (a.child = e),
        (e = u),
        (u = a.child),
        (i = l.child.memoizedState),
        i === null
          ? (i = li(t))
          : ((f = i.cachePool),
            f !== null
              ? ((m = _l._currentValue),
                (f = f.parent !== m ? { parent: m, pool: m } : f))
              : (f = ds()),
            (i = { baseLanes: i.baseLanes | t, cachePool: f })),
        (u.memoizedState = i),
        (u.childLanes = ai(l, c, t)),
        (a.memoizedState = Pc),
        e)
      : (lt(a),
        (t = l.child),
        (l = t.sibling),
        (t = ja(t, { mode: "visible", children: e.children })),
        (t.return = a),
        (t.sibling = null),
        l !== null &&
          ((c = a.deletions),
          c === null ? ((a.deletions = [l]), (a.flags |= 16)) : c.push(l)),
        (a.child = t),
        (a.memoizedState = null),
        t);
  }
  function ti(l, a) {
    return (
      (a = fn({ mode: "visible", children: a }, l.mode)),
      (a.return = l),
      (l.child = a)
    );
  }
  function fn(l, a) {
    return (
      (l = ua(22, l, null, a)),
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
  function ei(l, a, t) {
    return (
      ce(a, l.child, null, t),
      (l = ti(a, a.pendingProps.children)),
      (l.flags |= 2),
      (a.memoizedState = null),
      l
    );
  }
  function Or(l, a, t) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a), Ec(l.return, a, t);
  }
  function ui(l, a, t, e, u) {
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
  function Dr(l, a, t) {
    var e = a.pendingProps,
      u = e.revealOrder,
      n = e.tail;
    if ((Cl(l, a, e.children, t), (e = Ml.current), (e & 2) !== 0))
      (e = (e & 1) | 2), (a.flags |= 128);
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = a.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && Or(l, t, a);
          else if (l.tag === 19) Or(l, t, a);
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
    switch ((D(Ml, e), u)) {
      case "forwards":
        for (t = a.child, u = null; t !== null; )
          (l = t.alternate),
            l !== null && en(l) === null && (u = t),
            (t = t.sibling);
        (t = u),
          t === null
            ? ((u = a.child), (a.child = null))
            : ((u = t.sibling), (t.sibling = null)),
          ui(a, !1, u, t, n);
        break;
      case "backwards":
        for (t = null, u = a.child, a.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && en(l) === null)) {
            a.child = u;
            break;
          }
          (l = u.sibling), (u.sibling = t), (t = u), (u = l);
        }
        ui(a, !0, t, null, n);
        break;
      case "together":
        ui(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function Xa(l, a, t) {
    if (
      (l !== null && (a.dependencies = l.dependencies),
      (ct |= a.lanes),
      (t & a.childLanes) === 0)
    )
      if (l !== null) {
        if ((Ce(l, a, t, !1), (t & a.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && a.child !== l.child) throw Error(h(153));
    if (a.child !== null) {
      for (
        l = a.child, t = ja(l, l.pendingProps), a.child = t, t.return = a;
        l.sibling !== null;

      )
        (l = l.sibling),
          (t = t.sibling = ja(l, l.pendingProps)),
          (t.return = a);
      t.sibling = null;
    }
    return a.child;
  }
  function ni(l, a) {
    return (l.lanes & a) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Qu(l)));
  }
  function U0(l, a, t) {
    switch (a.tag) {
      case 3:
        yl(a, a.stateNode.containerInfo),
          Wa(a, _l, l.memoizedState.cache),
          qe();
        break;
      case 27:
      case 5:
        Ht(a);
        break;
      case 4:
        yl(a, a.stateNode.containerInfo);
        break;
      case 10:
        Wa(a, a.type, a.memoizedProps.value);
        break;
      case 13:
        var e = a.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? (lt(a), (a.flags |= 128), null)
            : (t & a.child.childLanes) !== 0
            ? Nr(l, a, t)
            : (lt(a), (l = Xa(l, a, t)), l !== null ? l.sibling : null);
        lt(a);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((e = (t & a.childLanes) !== 0),
          e || (Ce(l, a, t, !1), (e = (t & a.childLanes) !== 0)),
          u)
        ) {
          if (e) return Dr(l, a, t);
          a.flags |= 128;
        }
        if (
          ((u = a.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          D(Ml, Ml.current),
          e)
        )
          break;
        return null;
      case 22:
      case 23:
        return (a.lanes = 0), zr(l, a, t);
      case 24:
        Wa(a, _l, l.memoizedState.cache);
    }
    return Xa(l, a, t);
  }
  function _r(l, a, t) {
    if (l !== null)
      if (l.memoizedProps !== a.pendingProps) jl = !0;
      else {
        if (!ni(l, t) && (a.flags & 128) === 0) return (jl = !1), U0(l, a, t);
        jl = (l.flags & 131072) !== 0;
      }
    else (jl = !1), fl && (a.flags & 1048576) !== 0 && us(a, Xu, a.index);
    switch (((a.lanes = 0), a.tag)) {
      case 16:
        l: {
          l = a.pendingProps;
          var e = a.elementType,
            u = e._init;
          if (((e = u(e._payload)), (a.type = e), typeof e == "function"))
            mc(e)
              ? ((l = Rt(e, l)), (a.tag = 1), (a = Tr(null, a, e, l, t)))
              : ((a.tag = 0), (a = Ic(null, a, e, l, t)));
          else {
            if (e != null) {
              if (((u = e.$$typeof), u === la)) {
                (a.tag = 11), (a = gr(null, a, e, l, t));
                break l;
              } else if (u === Kl) {
                (a.tag = 14), (a = Sr(null, a, e, l, t));
                break l;
              }
            }
            throw ((a = Xl(e) || e), Error(h(306, a, "")));
          }
        }
        return a;
      case 0:
        return Ic(l, a, a.type, a.pendingProps, t);
      case 1:
        return (e = a.type), (u = Rt(e, a.pendingProps)), Tr(l, a, e, u, t);
      case 3:
        l: {
          if ((yl(a, a.stateNode.containerInfo), l === null))
            throw Error(h(387));
          e = a.pendingProps;
          var n = a.memoizedState;
          (u = n.element), _c(l, a), Le(a, e, null, t);
          var c = a.memoizedState;
          if (
            ((e = c.cache),
            Wa(a, _l, e),
            e !== n.cache && Ac(a, [_l], t, !0),
            Ve(),
            (e = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: c.cache }),
              (a.updateQueue.baseState = n),
              (a.memoizedState = n),
              a.flags & 256)
            ) {
              a = pr(l, a, e, t);
              break l;
            } else if (e !== u) {
              (u = oa(Error(h(424)), a)), Be(u), (a = pr(l, a, e, t));
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
                El = Ta(l.firstChild),
                  $l = a,
                  fl = !0,
                  pt = null,
                  Oa = !0,
                  t = cr(a, null, e, t),
                  a.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
            }
          else {
            if ((qe(), e === u)) {
              a = Xa(l, a, t);
              break l;
            }
            Cl(l, a, e, t);
          }
          a = a.child;
        }
        return a;
      case 26:
        return (
          cn(l, a),
          l === null
            ? (t = xd(a.type, null, a.pendingProps, null))
              ? (a.memoizedState = t)
              : fl ||
                ((t = a.type),
                (l = a.pendingProps),
                (e = An(Z.current).createElement(t)),
                (e[Ql] = a),
                (e[Wl] = l),
                Gl(e, t, l),
                xl(e),
                (a.stateNode = e))
            : (a.memoizedState = xd(
                a.type,
                l.memoizedProps,
                a.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          Ht(a),
          l === null &&
            fl &&
            ((e = a.stateNode = Md(a.type, a.pendingProps, Z.current)),
            ($l = a),
            (Oa = !0),
            (u = El),
            rt(a.type) ? ((Gi = u), (El = Ta(e.firstChild))) : (El = u)),
          Cl(l, a, a.pendingProps.children, t),
          cn(l, a),
          l === null && (a.flags |= 4194304),
          a.child
        );
      case 5:
        return (
          l === null &&
            fl &&
            ((u = e = El) &&
              ((e = nh(e, a.type, a.pendingProps, Oa)),
              e !== null
                ? ((a.stateNode = e),
                  ($l = a),
                  (El = Ta(e.firstChild)),
                  (Oa = !1),
                  (u = !0))
                : (u = !1)),
            u || Nt(a)),
          Ht(a),
          (u = a.type),
          (n = a.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (e = n.children),
          qi(u, n) ? (e = null) : c !== null && qi(u, c) && (a.flags |= 32),
          a.memoizedState !== null &&
            ((u = Hc(l, a, T0, null, null, t)), (ou._currentValue = u)),
          cn(l, a),
          Cl(l, a, e, t),
          a.child
        );
      case 6:
        return (
          l === null &&
            fl &&
            ((l = t = El) &&
              ((t = ch(t, a.pendingProps, Oa)),
              t !== null
                ? ((a.stateNode = t), ($l = a), (El = null), (l = !0))
                : (l = !1)),
            l || Nt(a)),
          null
        );
      case 13:
        return Nr(l, a, t);
      case 4:
        return (
          yl(a, a.stateNode.containerInfo),
          (e = a.pendingProps),
          l === null ? (a.child = ce(a, null, e, t)) : Cl(l, a, e, t),
          a.child
        );
      case 11:
        return gr(l, a, a.type, a.pendingProps, t);
      case 7:
        return Cl(l, a, a.pendingProps, t), a.child;
      case 8:
        return Cl(l, a, a.pendingProps.children, t), a.child;
      case 12:
        return Cl(l, a, a.pendingProps.children, t), a.child;
      case 10:
        return (
          (e = a.pendingProps),
          Wa(a, a.type, e.value),
          Cl(l, a, e.children, t),
          a.child
        );
      case 9:
        return (
          (u = a.type._context),
          (e = a.pendingProps.children),
          Dt(a),
          (u = Zl(u)),
          (e = e(u)),
          (a.flags |= 1),
          Cl(l, a, e, t),
          a.child
        );
      case 14:
        return Sr(l, a, a.type, a.pendingProps, t);
      case 15:
        return br(l, a, a.type, a.pendingProps, t);
      case 19:
        return Dr(l, a, t);
      case 31:
        return (
          (e = a.pendingProps),
          (t = a.mode),
          (e = { mode: e.mode, children: e.children }),
          l === null
            ? ((t = fn(e, t)),
              (t.ref = a.ref),
              (a.child = t),
              (t.return = a),
              (a = t))
            : ((t = ja(l.child, e)),
              (t.ref = a.ref),
              (a.child = t),
              (t.return = a),
              (a = t)),
          a
        );
      case 22:
        return zr(l, a, t);
      case 24:
        return (
          Dt(a),
          (e = Zl(_l)),
          l === null
            ? ((u = Nc()),
              u === null &&
                ((u = gl),
                (n = Tc()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= t),
                (u = n)),
              (a.memoizedState = { parent: e, cache: u }),
              Dc(a),
              Wa(a, _l, u))
            : ((l.lanes & t) !== 0 && (_c(l, a), Le(a, null, null, t), Ve()),
              (u = l.memoizedState),
              (n = a.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (a.memoizedState = u),
                  a.lanes === 0 &&
                    (a.memoizedState = a.updateQueue.baseState = u),
                  Wa(a, _l, e))
                : ((e = n.cache),
                  Wa(a, _l, e),
                  e !== u.cache && Ac(a, [_l], t, !0))),
          Cl(l, a, a.pendingProps.children, t),
          a.child
        );
      case 29:
        throw a.pendingProps;
    }
    throw Error(h(156, a.tag));
  }
  function Qa(l) {
    l.flags |= 4;
  }
  function Mr(l, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Cd(a))) {
      if (
        ((a = ya.current),
        a !== null &&
          ((cl & 4194048) === cl
            ? Da !== null
            : ((cl & 62914560) !== cl && (cl & 536870912) === 0) || a !== Da))
      )
        throw ((Qe = Oc), os);
      l.flags |= 8192;
    }
  }
  function sn(l, a) {
    a !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((a = l.tag !== 22 ? cf() : 536870912), (l.lanes |= a), (re |= a));
  }
  function Fe(l, a) {
    if (!fl)
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
  function bl(l) {
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
  function x0(l, a, t) {
    var e = a.pendingProps;
    switch ((Sc(a), a.tag)) {
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
        return bl(a), null;
      case 1:
        return bl(a), null;
      case 3:
        return (
          (t = a.stateNode),
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          a.memoizedState.cache !== e && (a.flags |= 2048),
          Ca(_l),
          wl(),
          t.pendingContext &&
            ((t.context = t.pendingContext), (t.pendingContext = null)),
          (l === null || l.child === null) &&
            (He(a)
              ? Qa(a)
              : l === null ||
                (l.memoizedState.isDehydrated && (a.flags & 256) === 0) ||
                ((a.flags |= 1024), is())),
          bl(a),
          null
        );
      case 26:
        return (
          (t = a.memoizedState),
          l === null
            ? (Qa(a),
              t !== null ? (bl(a), Mr(a, t)) : (bl(a), (a.flags &= -16777217)))
            : t
            ? t !== l.memoizedState
              ? (Qa(a), bl(a), Mr(a, t))
              : (bl(a), (a.flags &= -16777217))
            : (l.memoizedProps !== e && Qa(a), bl(a), (a.flags &= -16777217)),
          null
        );
      case 27:
        bu(a), (t = Z.current);
        var u = a.type;
        if (l !== null && a.stateNode != null) l.memoizedProps !== e && Qa(a);
        else {
          if (!e) {
            if (a.stateNode === null) throw Error(h(166));
            return bl(a), null;
          }
          (l = B.current),
            He(a) ? ns(a) : ((l = Md(u, e, t)), (a.stateNode = l), Qa(a));
        }
        return bl(a), null;
      case 5:
        if ((bu(a), (t = a.type), l !== null && a.stateNode != null))
          l.memoizedProps !== e && Qa(a);
        else {
          if (!e) {
            if (a.stateNode === null) throw Error(h(166));
            return bl(a), null;
          }
          if (((l = B.current), He(a))) ns(a);
          else {
            switch (((u = An(Z.current)), l)) {
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
            (l[Ql] = a), (l[Wl] = e);
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
            l: switch ((Gl(l, t, e), t)) {
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
            l && Qa(a);
          }
        }
        return bl(a), (a.flags &= -16777217), null;
      case 6:
        if (l && a.stateNode != null) l.memoizedProps !== e && Qa(a);
        else {
          if (typeof e != "string" && a.stateNode === null) throw Error(h(166));
          if (((l = Z.current), He(a))) {
            if (
              ((l = a.stateNode),
              (t = a.memoizedProps),
              (e = null),
              (u = $l),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            (l[Ql] = a),
              (l = !!(
                l.nodeValue === t ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                Ad(l.nodeValue, t)
              )),
              l || Nt(a);
          } else (l = An(l).createTextNode(e)), (l[Ql] = a), (a.stateNode = l);
        }
        return bl(a), null;
      case 13:
        if (
          ((e = a.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = He(a)), e !== null && e.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(h(318));
              if (
                ((u = a.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(h(317));
              u[Ql] = a;
            } else
              qe(),
                (a.flags & 128) === 0 && (a.memoizedState = null),
                (a.flags |= 4);
            bl(a), (u = !1);
          } else
            (u = is()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return a.flags & 256 ? (Ga(a), a) : (Ga(a), null);
        }
        if ((Ga(a), (a.flags & 128) !== 0)) return (a.lanes = t), a;
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
          sn(a, a.updateQueue),
          bl(a),
          null
        );
      case 4:
        return wl(), l === null && Ri(a.stateNode.containerInfo), bl(a), null;
      case 10:
        return Ca(a.type), bl(a), null;
      case 19:
        if ((M(Ml), (u = a.memoizedState), u === null)) return bl(a), null;
        if (((e = (a.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) Fe(u, !1);
          else {
            if (Al !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = a.child; l !== null; ) {
                if (((n = en(l)), n !== null)) {
                  for (
                    a.flags |= 128,
                      Fe(u, !1),
                      l = n.updateQueue,
                      a.updateQueue = l,
                      sn(a, l),
                      a.subtreeFlags = 0,
                      l = t,
                      t = a.child;
                    t !== null;

                  )
                    es(t, l), (t = t.sibling);
                  return D(Ml, (Ml.current & 1) | 2), a.child;
                }
                l = l.sibling;
              }
            u.tail !== null &&
              Na() > on &&
              ((a.flags |= 128), (e = !0), Fe(u, !1), (a.lanes = 4194304));
          }
        else {
          if (!e)
            if (((l = en(n)), l !== null)) {
              if (
                ((a.flags |= 128),
                (e = !0),
                (l = l.updateQueue),
                (a.updateQueue = l),
                sn(a, l),
                Fe(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !fl)
              )
                return bl(a), null;
            } else
              2 * Na() - u.renderingStartTime > on &&
                t !== 536870912 &&
                ((a.flags |= 128), (e = !0), Fe(u, !1), (a.lanes = 4194304));
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
            (u.renderingStartTime = Na()),
            (a.sibling = null),
            (l = Ml.current),
            D(Ml, e ? (l & 1) | 2 : l & 1),
            a)
          : (bl(a), null);
      case 22:
      case 23:
        return (
          Ga(a),
          xc(),
          (e = a.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== e && (a.flags |= 8192)
            : e && (a.flags |= 8192),
          e
            ? (t & 536870912) !== 0 &&
              (a.flags & 128) === 0 &&
              (bl(a), a.subtreeFlags & 6 && (a.flags |= 8192))
            : bl(a),
          (t = a.updateQueue),
          t !== null && sn(a, t.retryQueue),
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
          l !== null && M(_t),
          null
        );
      case 24:
        return (
          (t = null),
          l !== null && (t = l.memoizedState.cache),
          a.memoizedState.cache !== t && (a.flags |= 2048),
          Ca(_l),
          bl(a),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, a.tag));
  }
  function j0(l, a) {
    switch ((Sc(a), a.tag)) {
      case 1:
        return (
          (l = a.flags), l & 65536 ? ((a.flags = (l & -65537) | 128), a) : null
        );
      case 3:
        return (
          Ca(_l),
          wl(),
          (l = a.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((a.flags = (l & -65537) | 128), a)
            : null
        );
      case 26:
      case 27:
      case 5:
        return bu(a), null;
      case 13:
        if (
          (Ga(a), (l = a.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (a.alternate === null) throw Error(h(340));
          qe();
        }
        return (
          (l = a.flags), l & 65536 ? ((a.flags = (l & -65537) | 128), a) : null
        );
      case 19:
        return M(Ml), null;
      case 4:
        return wl(), null;
      case 10:
        return Ca(a.type), null;
      case 22:
      case 23:
        return (
          Ga(a),
          xc(),
          l !== null && M(_t),
          (l = a.flags),
          l & 65536 ? ((a.flags = (l & -65537) | 128), a) : null
        );
      case 24:
        return Ca(_l), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Rr(l, a) {
    switch ((Sc(a), a.tag)) {
      case 3:
        Ca(_l), wl();
        break;
      case 26:
      case 27:
      case 5:
        bu(a);
        break;
      case 4:
        wl();
        break;
      case 13:
        Ga(a);
        break;
      case 19:
        M(Ml);
        break;
      case 10:
        Ca(a.type);
        break;
      case 22:
      case 23:
        Ga(a), xc(), l !== null && M(_t);
        break;
      case 24:
        Ca(_l);
    }
  }
  function Ie(l, a) {
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
      vl(a, a.return, i);
    }
  }
  function tt(l, a, t) {
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
                m = i;
              try {
                m();
              } catch (z) {
                vl(u, f, z);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (z) {
      vl(a, a.return, z);
    }
  }
  function Ur(l) {
    var a = l.updateQueue;
    if (a !== null) {
      var t = l.stateNode;
      try {
        Ss(a, t);
      } catch (e) {
        vl(l, l.return, e);
      }
    }
  }
  function xr(l, a, t) {
    (t.props = Rt(l.type, l.memoizedProps)), (t.state = l.memoizedState);
    try {
      t.componentWillUnmount();
    } catch (e) {
      vl(l, a, e);
    }
  }
  function Pe(l, a) {
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
      vl(l, a, u);
    }
  }
  function _a(l, a) {
    var t = l.ref,
      e = l.refCleanup;
    if (t !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          vl(l, a, u);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (u) {
          vl(l, a, u);
        }
      else t.current = null;
  }
  function jr(l) {
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
      vl(l, l.return, u);
    }
  }
  function ci(l, a, t) {
    try {
      var e = l.stateNode;
      lh(e, l.type, t, a), (e[Wl] = a);
    } catch (u) {
      vl(l, l.return, u);
    }
  }
  function Hr(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && rt(l.type)) ||
      l.tag === 4
    );
  }
  function ii(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Hr(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && rt(l.type)) ||
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
  function fi(l, a, t) {
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
            t != null || a.onclick !== null || (a.onclick = En));
    else if (
      e !== 4 &&
      (e === 27 && rt(l.type) && ((t = l.stateNode), (a = null)),
      (l = l.child),
      l !== null)
    )
      for (fi(l, a, t), l = l.sibling; l !== null; )
        fi(l, a, t), (l = l.sibling);
  }
  function rn(l, a, t) {
    var e = l.tag;
    if (e === 5 || e === 6)
      (l = l.stateNode), a ? t.insertBefore(l, a) : t.appendChild(l);
    else if (
      e !== 4 &&
      (e === 27 && rt(l.type) && (t = l.stateNode), (l = l.child), l !== null)
    )
      for (rn(l, a, t), l = l.sibling; l !== null; )
        rn(l, a, t), (l = l.sibling);
  }
  function qr(l) {
    var a = l.stateNode,
      t = l.memoizedProps;
    try {
      for (var e = l.type, u = a.attributes; u.length; )
        a.removeAttributeNode(u[0]);
      Gl(a, e, t), (a[Ql] = l), (a[Wl] = t);
    } catch (n) {
      vl(l, l.return, n);
    }
  }
  var Za = !1,
    pl = !1,
    si = !1,
    Br = typeof WeakSet == "function" ? WeakSet : Set,
    Hl = null;
  function H0(l, a) {
    if (((l = l.containerInfo), (ji = _n), (l = wf(l)), ic(l))) {
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
              m = 0,
              z = 0,
              A = l,
              y = null;
            a: for (;;) {
              for (
                var g;
                A !== t || (u !== 0 && A.nodeType !== 3) || (i = c + u),
                  A !== n || (e !== 0 && A.nodeType !== 3) || (f = c + e),
                  A.nodeType === 3 && (c += A.nodeValue.length),
                  (g = A.firstChild) !== null;

              )
                (y = A), (A = g);
              for (;;) {
                if (A === l) break a;
                if (
                  (y === t && ++m === u && (i = c),
                  y === n && ++z === e && (f = c),
                  (g = A.nextSibling) !== null)
                )
                  break;
                (A = y), (y = A.parentNode);
              }
              A = g;
            }
            t = i === -1 || f === -1 ? null : { start: i, end: f };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      Hi = { focusedElem: l, selectionRange: t }, _n = !1, Hl = a;
      Hl !== null;

    )
      if (
        ((a = Hl), (l = a.child), (a.subtreeFlags & 1024) !== 0 && l !== null)
      )
        (l.return = a), (Hl = l);
      else
        for (; Hl !== null; ) {
          switch (((a = Hl), (n = a.alternate), (l = a.flags), a.tag)) {
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
                  var V = Rt(t.type, u, t.elementType === t.type);
                  (l = e.getSnapshotBeforeUpdate(V, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = l);
                } catch (X) {
                  vl(t, t.return, X);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = a.stateNode.containerInfo), (t = l.nodeType), t === 9)
                )
                  Ci(l);
                else if (t === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ci(l);
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
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (((l = a.sibling), l !== null)) {
            (l.return = a.return), (Hl = l);
            break;
          }
          Hl = a.return;
        }
  }
  function Cr(l, a, t) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        et(l, t), e & 4 && Ie(5, t);
        break;
      case 1:
        if ((et(l, t), e & 4))
          if (((l = t.stateNode), a === null))
            try {
              l.componentDidMount();
            } catch (c) {
              vl(t, t.return, c);
            }
          else {
            var u = Rt(t.type, a.memoizedProps);
            a = a.memoizedState;
            try {
              l.componentDidUpdate(u, a, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              vl(t, t.return, c);
            }
          }
        e & 64 && Ur(t), e & 512 && Pe(t, t.return);
        break;
      case 3:
        if ((et(l, t), e & 64 && ((l = t.updateQueue), l !== null))) {
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
            Ss(l, a);
          } catch (c) {
            vl(t, t.return, c);
          }
        }
        break;
      case 27:
        a === null && e & 4 && qr(t);
      case 26:
      case 5:
        et(l, t), a === null && e & 4 && jr(t), e & 512 && Pe(t, t.return);
        break;
      case 12:
        et(l, t);
        break;
      case 13:
        et(l, t),
          e & 4 && Xr(l, t),
          e & 64 &&
            ((l = t.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((t = V0.bind(null, t)), ih(l, t))));
        break;
      case 22:
        if (((e = t.memoizedState !== null || Za), !e)) {
          (a = (a !== null && a.memoizedState !== null) || pl), (u = Za);
          var n = pl;
          (Za = e),
            (pl = a) && !n ? ut(l, t, (t.subtreeFlags & 8772) !== 0) : et(l, t),
            (Za = u),
            (pl = n);
        }
        break;
      case 30:
        break;
      default:
        et(l, t);
    }
  }
  function Yr(l) {
    var a = l.alternate;
    a !== null && ((l.alternate = null), Yr(a)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((a = l.stateNode), a !== null && Zn(a)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var Sl = null,
    Il = !1;
  function Va(l, a, t) {
    for (t = t.child; t !== null; ) Gr(l, a, t), (t = t.sibling);
  }
  function Gr(l, a, t) {
    if (aa && typeof aa.onCommitFiberUnmount == "function")
      try {
        aa.onCommitFiberUnmount(ze, t);
      } catch {}
    switch (t.tag) {
      case 26:
        pl || _a(t, a),
          Va(l, a, t),
          t.memoizedState
            ? t.memoizedState.count--
            : t.stateNode && ((t = t.stateNode), t.parentNode.removeChild(t));
        break;
      case 27:
        pl || _a(t, a);
        var e = Sl,
          u = Il;
        rt(t.type) && ((Sl = t.stateNode), (Il = !1)),
          Va(l, a, t),
          fu(t.stateNode),
          (Sl = e),
          (Il = u);
        break;
      case 5:
        pl || _a(t, a);
      case 6:
        if (
          ((e = Sl),
          (u = Il),
          (Sl = null),
          Va(l, a, t),
          (Sl = e),
          (Il = u),
          Sl !== null)
        )
          if (Il)
            try {
              (Sl.nodeType === 9
                ? Sl.body
                : Sl.nodeName === "HTML"
                ? Sl.ownerDocument.body
                : Sl
              ).removeChild(t.stateNode);
            } catch (n) {
              vl(t, a, n);
            }
          else
            try {
              Sl.removeChild(t.stateNode);
            } catch (n) {
              vl(t, a, n);
            }
        break;
      case 18:
        Sl !== null &&
          (Il
            ? ((l = Sl),
              Dd(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                t.stateNode
              ),
              yu(l))
            : Dd(Sl, t.stateNode));
        break;
      case 4:
        (e = Sl),
          (u = Il),
          (Sl = t.stateNode.containerInfo),
          (Il = !0),
          Va(l, a, t),
          (Sl = e),
          (Il = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        pl || tt(2, t, a), pl || tt(4, t, a), Va(l, a, t);
        break;
      case 1:
        pl ||
          (_a(t, a),
          (e = t.stateNode),
          typeof e.componentWillUnmount == "function" && xr(t, a, e)),
          Va(l, a, t);
        break;
      case 21:
        Va(l, a, t);
        break;
      case 22:
        (pl = (e = pl) || t.memoizedState !== null), Va(l, a, t), (pl = e);
        break;
      default:
        Va(l, a, t);
    }
  }
  function Xr(l, a) {
    if (
      a.memoizedState === null &&
      ((l = a.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        yu(l);
      } catch (t) {
        vl(a, a.return, t);
      }
  }
  function q0(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var a = l.stateNode;
        return a === null && (a = l.stateNode = new Br()), a;
      case 22:
        return (
          (l = l.stateNode),
          (a = l._retryCache),
          a === null && (a = l._retryCache = new Br()),
          a
        );
      default:
        throw Error(h(435, l.tag));
    }
  }
  function ri(l, a) {
    var t = q0(l);
    a.forEach(function (e) {
      var u = L0.bind(null, l, e);
      t.has(e) || (t.add(e), e.then(u, u));
    });
  }
  function na(l, a) {
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
              if (rt(i.type)) {
                (Sl = i.stateNode), (Il = !1);
                break l;
              }
              break;
            case 5:
              (Sl = i.stateNode), (Il = !1);
              break l;
            case 3:
            case 4:
              (Sl = i.stateNode.containerInfo), (Il = !0);
              break l;
          }
          i = i.return;
        }
        if (Sl === null) throw Error(h(160));
        Gr(n, c, u),
          (Sl = null),
          (Il = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (a.subtreeFlags & 13878)
      for (a = a.child; a !== null; ) Qr(a, l), (a = a.sibling);
  }
  var Aa = null;
  function Qr(l, a) {
    var t = l.alternate,
      e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        na(a, l),
          ca(l),
          e & 4 && (tt(3, l, l.return), Ie(3, l), tt(5, l, l.return));
        break;
      case 1:
        na(a, l),
          ca(l),
          e & 512 && (pl || t === null || _a(t, t.return)),
          e & 64 &&
            Za &&
            ((l = l.updateQueue),
            l !== null &&
              ((e = l.callbacks),
              e !== null &&
                ((t = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = t === null ? e : t.concat(e)))));
        break;
      case 26:
        var u = Aa;
        if (
          (na(a, l),
          ca(l),
          e & 512 && (pl || t === null || _a(t, t.return)),
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
                          n[Te] ||
                          n[Ql] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        Gl(n, e, t),
                        (n[Ql] = l),
                        xl(n),
                        (e = n);
                      break l;
                    case "link":
                      var c = qd("link", "href", u).get(e + (t.href || ""));
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
                        Gl(n, e, t),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (c = qd("meta", "content", u).get(
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
                        Gl(n, e, t),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(h(468, e));
                  }
                  (n[Ql] = l), xl(n), (e = n);
                }
                l.stateNode = e;
              } else Bd(u, l.type, l.stateNode);
            else l.stateNode = Hd(u, e, l.memoizedProps);
          else
            n !== e
              ? (n === null
                  ? t.stateNode !== null &&
                    ((t = t.stateNode), t.parentNode.removeChild(t))
                  : n.count--,
                e === null
                  ? Bd(u, l.type, l.stateNode)
                  : Hd(u, e, l.memoizedProps))
              : e === null &&
                l.stateNode !== null &&
                ci(l, l.memoizedProps, t.memoizedProps);
        }
        break;
      case 27:
        na(a, l),
          ca(l),
          e & 512 && (pl || t === null || _a(t, t.return)),
          t !== null && e & 4 && ci(l, l.memoizedProps, t.memoizedProps);
        break;
      case 5:
        if (
          (na(a, l),
          ca(l),
          e & 512 && (pl || t === null || _a(t, t.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            Zt(u, "");
          } catch (g) {
            vl(l, l.return, g);
          }
        }
        e & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), ci(l, u, t !== null ? t.memoizedProps : u)),
          e & 1024 && (si = !0);
        break;
      case 6:
        if ((na(a, l), ca(l), e & 4)) {
          if (l.stateNode === null) throw Error(h(162));
          (e = l.memoizedProps), (t = l.stateNode);
          try {
            t.nodeValue = e;
          } catch (g) {
            vl(l, l.return, g);
          }
        }
        break;
      case 3:
        if (
          ((Nn = null),
          (u = Aa),
          (Aa = Tn(a.containerInfo)),
          na(a, l),
          (Aa = u),
          ca(l),
          e & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            yu(a.containerInfo);
          } catch (g) {
            vl(l, l.return, g);
          }
        si && ((si = !1), Zr(l));
        break;
      case 4:
        (e = Aa),
          (Aa = Tn(l.stateNode.containerInfo)),
          na(a, l),
          ca(l),
          (Aa = e);
        break;
      case 12:
        na(a, l), ca(l);
        break;
      case 13:
        na(a, l),
          ca(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (t !== null && t.memoizedState !== null) &&
            (yi = Na()),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), ri(l, e)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = t !== null && t.memoizedState !== null,
          m = Za,
          z = pl;
        if (
          ((Za = m || u),
          (pl = z || f),
          na(a, l),
          (pl = z),
          (Za = m),
          ca(l),
          e & 8192)
        )
          l: for (
            a = l.stateNode,
              a._visibility = u ? a._visibility & -2 : a._visibility | 1,
              u && (t === null || f || Za || pl || Ut(l)),
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
                    var A = f.memoizedProps.style,
                      y =
                        A != null && A.hasOwnProperty("display")
                          ? A.display
                          : null;
                    i.style.display =
                      y == null || typeof y == "boolean" ? "" : ("" + y).trim();
                  }
                } catch (g) {
                  vl(f, f.return, g);
                }
              }
            } else if (a.tag === 6) {
              if (t === null) {
                f = a;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (g) {
                  vl(f, f.return, g);
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
            t !== null && ((e.retryQueue = null), ri(l, t))));
        break;
      case 19:
        na(a, l),
          ca(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), ri(l, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        na(a, l), ca(l);
    }
  }
  function ca(l) {
    var a = l.flags;
    if (a & 2) {
      try {
        for (var t, e = l.return; e !== null; ) {
          if (Hr(e)) {
            t = e;
            break;
          }
          e = e.return;
        }
        if (t == null) throw Error(h(160));
        switch (t.tag) {
          case 27:
            var u = t.stateNode,
              n = ii(l);
            rn(l, n, u);
            break;
          case 5:
            var c = t.stateNode;
            t.flags & 32 && (Zt(c, ""), (t.flags &= -33));
            var i = ii(l);
            rn(l, i, c);
            break;
          case 3:
          case 4:
            var f = t.stateNode.containerInfo,
              m = ii(l);
            fi(l, m, f);
            break;
          default:
            throw Error(h(161));
        }
      } catch (z) {
        vl(l, l.return, z);
      }
      l.flags &= -3;
    }
    a & 4096 && (l.flags &= -4097);
  }
  function Zr(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var a = l;
        Zr(a),
          a.tag === 5 && a.flags & 1024 && a.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function et(l, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; ) Cr(l, a.alternate, a), (a = a.sibling);
  }
  function Ut(l) {
    for (l = l.child; l !== null; ) {
      var a = l;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          tt(4, a, a.return), Ut(a);
          break;
        case 1:
          _a(a, a.return);
          var t = a.stateNode;
          typeof t.componentWillUnmount == "function" && xr(a, a.return, t),
            Ut(a);
          break;
        case 27:
          fu(a.stateNode);
        case 26:
        case 5:
          _a(a, a.return), Ut(a);
          break;
        case 22:
          a.memoizedState === null && Ut(a);
          break;
        case 30:
          Ut(a);
          break;
        default:
          Ut(a);
      }
      l = l.sibling;
    }
  }
  function ut(l, a, t) {
    for (t = t && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var e = a.alternate,
        u = l,
        n = a,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ut(u, n, t), Ie(4, n);
          break;
        case 1:
          if (
            (ut(u, n, t),
            (e = n),
            (u = e.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (m) {
              vl(e, e.return, m);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var i = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  gs(f[u], i);
            } catch (m) {
              vl(e, e.return, m);
            }
          }
          t && c & 64 && Ur(n), Pe(n, n.return);
          break;
        case 27:
          qr(n);
        case 26:
        case 5:
          ut(u, n, t), t && e === null && c & 4 && jr(n), Pe(n, n.return);
          break;
        case 12:
          ut(u, n, t);
          break;
        case 13:
          ut(u, n, t), t && c & 4 && Xr(u, n);
          break;
        case 22:
          n.memoizedState === null && ut(u, n, t), Pe(n, n.return);
          break;
        case 30:
          break;
        default:
          ut(u, n, t);
      }
      a = a.sibling;
    }
  }
  function di(l, a) {
    var t = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (t = l.memoizedState.cachePool.pool),
      (l = null),
      a.memoizedState !== null &&
        a.memoizedState.cachePool !== null &&
        (l = a.memoizedState.cachePool.pool),
      l !== t && (l != null && l.refCount++, t != null && Ye(t));
  }
  function oi(l, a) {
    (l = null),
      a.alternate !== null && (l = a.alternate.memoizedState.cache),
      (a = a.memoizedState.cache),
      a !== l && (a.refCount++, l != null && Ye(l));
  }
  function Ma(l, a, t, e) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) Vr(l, a, t, e), (a = a.sibling);
  }
  function Vr(l, a, t, e) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Ma(l, a, t, e), u & 2048 && Ie(9, a);
        break;
      case 1:
        Ma(l, a, t, e);
        break;
      case 3:
        Ma(l, a, t, e),
          u & 2048 &&
            ((l = null),
            a.alternate !== null && (l = a.alternate.memoizedState.cache),
            (a = a.memoizedState.cache),
            a !== l && (a.refCount++, l != null && Ye(l)));
        break;
      case 12:
        if (u & 2048) {
          Ma(l, a, t, e), (l = a.stateNode);
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
            vl(a, a.return, f);
          }
        } else Ma(l, a, t, e);
        break;
      case 13:
        Ma(l, a, t, e);
        break;
      case 23:
        break;
      case 22:
        (n = a.stateNode),
          (c = a.alternate),
          a.memoizedState !== null
            ? n._visibility & 2
              ? Ma(l, a, t, e)
              : lu(l, a)
            : n._visibility & 2
            ? Ma(l, a, t, e)
            : ((n._visibility |= 2),
              ie(l, a, t, e, (a.subtreeFlags & 10256) !== 0)),
          u & 2048 && di(c, a);
        break;
      case 24:
        Ma(l, a, t, e), u & 2048 && oi(a.alternate, a);
        break;
      default:
        Ma(l, a, t, e);
    }
  }
  function ie(l, a, t, e, u) {
    for (u = u && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null; ) {
      var n = l,
        c = a,
        i = t,
        f = e,
        m = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ie(n, c, i, f, u), Ie(8, c);
          break;
        case 23:
          break;
        case 22:
          var z = c.stateNode;
          c.memoizedState !== null
            ? z._visibility & 2
              ? ie(n, c, i, f, u)
              : lu(n, c)
            : ((z._visibility |= 2), ie(n, c, i, f, u)),
            u && m & 2048 && di(c.alternate, c);
          break;
        case 24:
          ie(n, c, i, f, u), u && m & 2048 && oi(c.alternate, c);
          break;
        default:
          ie(n, c, i, f, u);
      }
      a = a.sibling;
    }
  }
  function lu(l, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var t = l,
          e = a,
          u = e.flags;
        switch (e.tag) {
          case 22:
            lu(t, e), u & 2048 && di(e.alternate, e);
            break;
          case 24:
            lu(t, e), u & 2048 && oi(e.alternate, e);
            break;
          default:
            lu(t, e);
        }
        a = a.sibling;
      }
  }
  var au = 8192;
  function fe(l) {
    if (l.subtreeFlags & au)
      for (l = l.child; l !== null; ) Lr(l), (l = l.sibling);
  }
  function Lr(l) {
    switch (l.tag) {
      case 26:
        fe(l),
          l.flags & au &&
            l.memoizedState !== null &&
            zh(Aa, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        fe(l);
        break;
      case 3:
      case 4:
        var a = Aa;
        (Aa = Tn(l.stateNode.containerInfo)), fe(l), (Aa = a);
        break;
      case 22:
        l.memoizedState === null &&
          ((a = l.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = au), (au = 16777216), fe(l), (au = a))
            : fe(l));
        break;
      default:
        fe(l);
    }
  }
  function Kr(l) {
    var a = l.alternate;
    if (a !== null && ((l = a.child), l !== null)) {
      a.child = null;
      do (a = l.sibling), (l.sibling = null), (l = a);
      while (l !== null);
    }
  }
  function tu(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var e = a[t];
          (Hl = e), wr(e, l);
        }
      Kr(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Jr(l), (l = l.sibling);
  }
  function Jr(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        tu(l), l.flags & 2048 && tt(9, l, l.return);
        break;
      case 3:
        tu(l);
        break;
      case 12:
        tu(l);
        break;
      case 22:
        var a = l.stateNode;
        l.memoizedState !== null &&
        a._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((a._visibility &= -3), dn(l))
          : tu(l);
        break;
      default:
        tu(l);
    }
  }
  function dn(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var e = a[t];
          (Hl = e), wr(e, l);
        }
      Kr(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((a = l), a.tag)) {
        case 0:
        case 11:
        case 15:
          tt(8, a, a.return), dn(a);
          break;
        case 22:
          (t = a.stateNode),
            t._visibility & 2 && ((t._visibility &= -3), dn(a));
          break;
        default:
          dn(a);
      }
      l = l.sibling;
    }
  }
  function wr(l, a) {
    for (; Hl !== null; ) {
      var t = Hl;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          tt(8, t, a);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var e = t.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Ye(t.memoizedState.cache);
      }
      if (((e = t.child), e !== null)) (e.return = t), (Hl = e);
      else
        l: for (t = l; Hl !== null; ) {
          e = Hl;
          var u = e.sibling,
            n = e.return;
          if ((Yr(e), e === t)) {
            Hl = null;
            break l;
          }
          if (u !== null) {
            (u.return = n), (Hl = u);
            break l;
          }
          Hl = n;
        }
    }
  }
  var B0 = {
      getCacheForType: function (l) {
        var a = Zl(_l),
          t = a.data.get(l);
        return t === void 0 && ((t = l()), a.data.set(l, t)), t;
      },
    },
    C0 = typeof WeakMap == "function" ? WeakMap : Map,
    sl = 0,
    gl = null,
    I = null,
    cl = 0,
    rl = 0,
    ia = null,
    nt = !1,
    se = !1,
    hi = !1,
    La = 0,
    Al = 0,
    ct = 0,
    xt = 0,
    mi = 0,
    ga = 0,
    re = 0,
    eu = null,
    Pl = null,
    vi = !1,
    yi = 0,
    on = 1 / 0,
    hn = null,
    it = null,
    Yl = 0,
    ft = null,
    de = null,
    oe = 0,
    gi = 0,
    Si = null,
    $r = null,
    uu = 0,
    bi = null;
  function fa() {
    if ((sl & 2) !== 0 && cl !== 0) return cl & -cl;
    if (S.T !== null) {
      var l = Pt;
      return l !== 0 ? l : Oi();
    }
    return rf();
  }
  function Wr() {
    ga === 0 && (ga = (cl & 536870912) === 0 || fl ? nf() : 536870912);
    var l = ya.current;
    return l !== null && (l.flags |= 32), ga;
  }
  function sa(l, a, t) {
    ((l === gl && (rl === 2 || rl === 9)) || l.cancelPendingCommit !== null) &&
      (he(l, 0), st(l, cl, ga, !1)),
      Ae(l, t),
      ((sl & 2) === 0 || l !== gl) &&
        (l === gl &&
          ((sl & 2) === 0 && (xt |= t), Al === 4 && st(l, cl, ga, !1)),
        Ra(l));
  }
  function kr(l, a, t) {
    if ((sl & 6) !== 0) throw Error(h(327));
    var e = (!t && (a & 124) === 0 && (a & l.expiredLanes) === 0) || Ee(l, a),
      u = e ? X0(l, a) : Ai(l, a, !0),
      n = e;
    do {
      if (u === 0) {
        se && !e && st(l, a, 0, !1);
        break;
      } else {
        if (((t = l.current.alternate), n && !Y0(t))) {
          (u = Ai(l, a, !1)), (n = !1);
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
              u = eu;
              var f = i.current.memoizedState.isDehydrated;
              if ((f && (he(i, c).flags |= 256), (c = Ai(i, c, !1)), c !== 2)) {
                if (hi && !f) {
                  (i.errorRecoveryDisabledLanes |= n), (xt |= n), (u = 4);
                  break l;
                }
                (n = Pl),
                  (Pl = u),
                  n !== null && (Pl === null ? (Pl = n) : Pl.push.apply(Pl, n));
              }
              u = c;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          he(l, 0), st(l, a, 0, !0);
          break;
        }
        l: {
          switch (((e = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              st(e, a, ga, !nt);
              break l;
            case 2:
              Pl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((a & 62914560) === a && ((u = yi + 300 - Na()), 10 < u)) {
            if ((st(e, a, ga, !nt), Tu(e, 0, !0) !== 0)) break l;
            e.timeoutHandle = Nd(
              Fr.bind(null, e, t, Pl, hn, vi, a, ga, xt, re, nt, n, 2, -0, 0),
              u
            );
            break l;
          }
          Fr(e, t, Pl, hn, vi, a, ga, xt, re, nt, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ra(l);
  }
  function Fr(l, a, t, e, u, n, c, i, f, m, z, A, y, g) {
    if (
      ((l.timeoutHandle = -1),
      (A = a.subtreeFlags),
      (A & 8192 || (A & 16785408) === 16785408) &&
        ((du = { stylesheets: null, count: 0, unsuspend: bh }),
        Lr(a),
        (A = Eh()),
        A !== null))
    ) {
      (l.cancelPendingCommit = A(
        ud.bind(null, l, a, n, t, e, u, c, i, f, z, 1, y, g)
      )),
        st(l, n, c, !m);
      return;
    }
    ud(l, a, n, t, e, u, c, i, f);
  }
  function Y0(l) {
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
            if (!ea(n(), u)) return !1;
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
  function st(l, a, t, e) {
    (a &= ~mi),
      (a &= ~xt),
      (l.suspendedLanes |= a),
      (l.pingedLanes &= ~a),
      e && (l.warmLanes |= a),
      (e = l.expirationTimes);
    for (var u = a; 0 < u; ) {
      var n = 31 - ta(u),
        c = 1 << n;
      (e[n] = -1), (u &= ~c);
    }
    t !== 0 && ff(l, t, a);
  }
  function mn() {
    return (sl & 6) === 0 ? (nu(0), !1) : !0;
  }
  function zi() {
    if (I !== null) {
      if (rl === 0) var l = I.return;
      else (l = I), (Ba = Ot = null), Cc(l), (ne = null), (We = 0), (l = I);
      for (; l !== null; ) Rr(l.alternate, l), (l = l.return);
      I = null;
    }
  }
  function he(l, a) {
    var t = l.timeoutHandle;
    t !== -1 && ((l.timeoutHandle = -1), th(t)),
      (t = l.cancelPendingCommit),
      t !== null && ((l.cancelPendingCommit = null), t()),
      zi(),
      (gl = l),
      (I = t = ja(l.current, null)),
      (cl = a),
      (rl = 0),
      (ia = null),
      (nt = !1),
      (se = Ee(l, a)),
      (hi = !1),
      (re = ga = mi = xt = ct = Al = 0),
      (Pl = eu = null),
      (vi = !1),
      (a & 8) !== 0 && (a |= a & 32);
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= a; 0 < e; ) {
        var u = 31 - ta(e),
          n = 1 << u;
        (a |= l[u]), (e &= ~n);
      }
    return (La = a), qu(), t;
  }
  function Ir(l, a) {
    (k = null),
      (S.H = ln),
      a === Xe || a === Lu
        ? ((a = vs()), (rl = 3))
        : a === os
        ? ((a = vs()), (rl = 4))
        : (rl =
            a === yr
              ? 8
              : a !== null &&
                typeof a == "object" &&
                typeof a.then == "function"
              ? 6
              : 1),
      (ia = a),
      I === null && ((Al = 1), nn(l, oa(a, l.current)));
  }
  function Pr() {
    var l = S.H;
    return (S.H = ln), l === null ? ln : l;
  }
  function ld() {
    var l = S.A;
    return (S.A = B0), l;
  }
  function Ei() {
    (Al = 4),
      nt || ((cl & 4194048) !== cl && ya.current !== null) || (se = !0),
      ((ct & 134217727) === 0 && (xt & 134217727) === 0) ||
        gl === null ||
        st(gl, cl, ga, !1);
  }
  function Ai(l, a, t) {
    var e = sl;
    sl |= 2;
    var u = Pr(),
      n = ld();
    (gl !== l || cl !== a) && ((hn = null), he(l, a)), (a = !1);
    var c = Al;
    l: do
      try {
        if (rl !== 0 && I !== null) {
          var i = I,
            f = ia;
          switch (rl) {
            case 8:
              zi(), (c = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ya.current === null && (a = !0);
              var m = rl;
              if (((rl = 0), (ia = null), me(l, i, f, m), t && se)) {
                c = 0;
                break l;
              }
              break;
            default:
              (m = rl), (rl = 0), (ia = null), me(l, i, f, m);
          }
        }
        G0(), (c = Al);
        break;
      } catch (z) {
        Ir(l, z);
      }
    while (!0);
    return (
      a && l.shellSuspendCounter++,
      (Ba = Ot = null),
      (sl = e),
      (S.H = u),
      (S.A = n),
      I === null && ((gl = null), (cl = 0), qu()),
      c
    );
  }
  function G0() {
    for (; I !== null; ) ad(I);
  }
  function X0(l, a) {
    var t = sl;
    sl |= 2;
    var e = Pr(),
      u = ld();
    gl !== l || cl !== a
      ? ((hn = null), (on = Na() + 500), he(l, a))
      : (se = Ee(l, a));
    l: do
      try {
        if (rl !== 0 && I !== null) {
          a = I;
          var n = ia;
          a: switch (rl) {
            case 1:
              (rl = 0), (ia = null), me(l, a, n, 1);
              break;
            case 2:
            case 9:
              if (hs(n)) {
                (rl = 0), (ia = null), td(a);
                break;
              }
              (a = function () {
                (rl !== 2 && rl !== 9) || gl !== l || (rl = 7), Ra(l);
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
              hs(n)
                ? ((rl = 0), (ia = null), td(a))
                : ((rl = 0), (ia = null), me(l, a, n, 7));
              break;
            case 5:
              var c = null;
              switch (I.tag) {
                case 26:
                  c = I.memoizedState;
                case 5:
                case 27:
                  var i = I;
                  if (!c || Cd(c)) {
                    (rl = 0), (ia = null);
                    var f = i.sibling;
                    if (f !== null) I = f;
                    else {
                      var m = i.return;
                      m !== null ? ((I = m), vn(m)) : (I = null);
                    }
                    break a;
                  }
              }
              (rl = 0), (ia = null), me(l, a, n, 5);
              break;
            case 6:
              (rl = 0), (ia = null), me(l, a, n, 6);
              break;
            case 8:
              zi(), (Al = 6);
              break l;
            default:
              throw Error(h(462));
          }
        }
        Q0();
        break;
      } catch (z) {
        Ir(l, z);
      }
    while (!0);
    return (
      (Ba = Ot = null),
      (S.H = e),
      (S.A = u),
      (sl = t),
      I !== null ? 0 : ((gl = null), (cl = 0), qu(), Al)
    );
  }
  function Q0() {
    for (; I !== null && !fo(); ) ad(I);
  }
  function ad(l) {
    var a = _r(l.alternate, l, La);
    (l.memoizedProps = l.pendingProps), a === null ? vn(l) : (I = a);
  }
  function td(l) {
    var a = l,
      t = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = Ar(t, a, a.pendingProps, a.type, void 0, cl);
        break;
      case 11:
        a = Ar(t, a, a.pendingProps, a.type.render, a.ref, cl);
        break;
      case 5:
        Cc(a);
      default:
        Rr(t, a), (a = I = es(a, La)), (a = _r(t, a, La));
    }
    (l.memoizedProps = l.pendingProps), a === null ? vn(l) : (I = a);
  }
  function me(l, a, t, e) {
    (Ba = Ot = null), Cc(a), (ne = null), (We = 0);
    var u = a.return;
    try {
      if (R0(l, u, a, t, cl)) {
        (Al = 1), nn(l, oa(t, l.current)), (I = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((I = u), n);
      (Al = 1), nn(l, oa(t, l.current)), (I = null);
      return;
    }
    a.flags & 32768
      ? (fl || e === 1
          ? (l = !0)
          : se || (cl & 536870912) !== 0
          ? (l = !1)
          : ((nt = l = !0),
            (e === 2 || e === 9 || e === 3 || e === 6) &&
              ((e = ya.current),
              e !== null && e.tag === 13 && (e.flags |= 16384))),
        ed(a, l))
      : vn(a);
  }
  function vn(l) {
    var a = l;
    do {
      if ((a.flags & 32768) !== 0) {
        ed(a, nt);
        return;
      }
      l = a.return;
      var t = x0(a.alternate, a, La);
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
    Al === 0 && (Al = 5);
  }
  function ed(l, a) {
    do {
      var t = j0(l.alternate, l);
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
    (Al = 6), (I = null);
  }
  function ud(l, a, t, e, u, n, c, i, f) {
    l.cancelPendingCommit = null;
    do yn();
    while (Yl !== 0);
    if ((sl & 6) !== 0) throw Error(h(327));
    if (a !== null) {
      if (a === l.current) throw Error(h(177));
      if (
        ((n = a.lanes | a.childLanes),
        (n |= oc),
        bo(l, t, n, c, i, f),
        l === gl && ((I = gl = null), (cl = 0)),
        (de = a),
        (ft = l),
        (oe = t),
        (gi = n),
        (Si = u),
        ($r = e),
        (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            K0(zu, function () {
              return sd(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (e = (a.flags & 13878) !== 0),
        (a.subtreeFlags & 13878) !== 0 || e)
      ) {
        (e = S.T), (S.T = null), (u = N.p), (N.p = 2), (c = sl), (sl |= 4);
        try {
          H0(l, a, t);
        } finally {
          (sl = c), (N.p = u), (S.T = e);
        }
      }
      (Yl = 1), nd(), cd(), id();
    }
  }
  function nd() {
    if (Yl === 1) {
      Yl = 0;
      var l = ft,
        a = de,
        t = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || t) {
        (t = S.T), (S.T = null);
        var e = N.p;
        N.p = 2;
        var u = sl;
        sl |= 4;
        try {
          Qr(a, l);
          var n = Hi,
            c = wf(l.containerInfo),
            i = n.focusedElem,
            f = n.selectionRange;
          if (
            c !== i &&
            i &&
            i.ownerDocument &&
            Jf(i.ownerDocument.documentElement, i)
          ) {
            if (f !== null && ic(i)) {
              var m = f.start,
                z = f.end;
              if ((z === void 0 && (z = m), "selectionStart" in i))
                (i.selectionStart = m),
                  (i.selectionEnd = Math.min(z, i.value.length));
              else {
                var A = i.ownerDocument || document,
                  y = (A && A.defaultView) || window;
                if (y.getSelection) {
                  var g = y.getSelection(),
                    V = i.textContent.length,
                    X = Math.min(f.start, V),
                    ml = f.end === void 0 ? X : Math.min(f.end, V);
                  !g.extend && X > ml && ((c = ml), (ml = X), (X = c));
                  var d = Kf(i, X),
                    r = Kf(i, ml);
                  if (
                    d &&
                    r &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== d.node ||
                      g.anchorOffset !== d.offset ||
                      g.focusNode !== r.node ||
                      g.focusOffset !== r.offset)
                  ) {
                    var o = A.createRange();
                    o.setStart(d.node, d.offset),
                      g.removeAllRanges(),
                      X > ml
                        ? (g.addRange(o), g.extend(r.node, r.offset))
                        : (o.setEnd(r.node, r.offset), g.addRange(o));
                  }
                }
              }
            }
            for (A = [], g = i; (g = g.parentNode); )
              g.nodeType === 1 &&
                A.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof i.focus == "function" && i.focus(), i = 0;
              i < A.length;
              i++
            ) {
              var E = A[i];
              (E.element.scrollLeft = E.left), (E.element.scrollTop = E.top);
            }
          }
          (_n = !!ji), (Hi = ji = null);
        } finally {
          (sl = u), (N.p = e), (S.T = t);
        }
      }
      (l.current = a), (Yl = 2);
    }
  }
  function cd() {
    if (Yl === 2) {
      Yl = 0;
      var l = ft,
        a = de,
        t = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || t) {
        (t = S.T), (S.T = null);
        var e = N.p;
        N.p = 2;
        var u = sl;
        sl |= 4;
        try {
          Cr(l, a.alternate, a);
        } finally {
          (sl = u), (N.p = e), (S.T = t);
        }
      }
      Yl = 3;
    }
  }
  function id() {
    if (Yl === 4 || Yl === 3) {
      (Yl = 0), so();
      var l = ft,
        a = de,
        t = oe,
        e = $r;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
        ? (Yl = 5)
        : ((Yl = 0), (de = ft = null), fd(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (it = null),
        Xn(t),
        (a = a.stateNode),
        aa && typeof aa.onCommitFiberRoot == "function")
      )
        try {
          aa.onCommitFiberRoot(ze, a, void 0, (a.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        (a = S.T), (u = N.p), (N.p = 2), (S.T = null);
        try {
          for (var n = l.onRecoverableError, c = 0; c < e.length; c++) {
            var i = e[c];
            n(i.value, { componentStack: i.stack });
          }
        } finally {
          (S.T = a), (N.p = u);
        }
      }
      (oe & 3) !== 0 && yn(),
        Ra(l),
        (u = l.pendingLanes),
        (t & 4194090) !== 0 && (u & 42) !== 0
          ? l === bi
            ? uu++
            : ((uu = 0), (bi = l))
          : (uu = 0),
        nu(0);
    }
  }
  function fd(l, a) {
    (l.pooledCacheLanes &= a) === 0 &&
      ((a = l.pooledCache), a != null && ((l.pooledCache = null), Ye(a)));
  }
  function yn(l) {
    return nd(), cd(), id(), sd();
  }
  function sd() {
    if (Yl !== 5) return !1;
    var l = ft,
      a = gi;
    gi = 0;
    var t = Xn(oe),
      e = S.T,
      u = N.p;
    try {
      (N.p = 32 > t ? 32 : t), (S.T = null), (t = Si), (Si = null);
      var n = ft,
        c = oe;
      if (((Yl = 0), (de = ft = null), (oe = 0), (sl & 6) !== 0))
        throw Error(h(331));
      var i = sl;
      if (
        ((sl |= 4),
        Jr(n.current),
        Vr(n, n.current, c, t),
        (sl = i),
        nu(0, !1),
        aa && typeof aa.onPostCommitFiberRoot == "function")
      )
        try {
          aa.onPostCommitFiberRoot(ze, n);
        } catch {}
      return !0;
    } finally {
      (N.p = u), (S.T = e), fd(l, a);
    }
  }
  function rd(l, a, t) {
    (a = oa(t, a)),
      (a = Fc(l.stateNode, a, 2)),
      (l = Ia(l, a, 2)),
      l !== null && (Ae(l, 2), Ra(l));
  }
  function vl(l, a, t) {
    if (l.tag === 3) rd(l, l, t);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          rd(a, l, t);
          break;
        } else if (a.tag === 1) {
          var e = a.stateNode;
          if (
            typeof a.type.getDerivedStateFromError == "function" ||
            (typeof e.componentDidCatch == "function" &&
              (it === null || !it.has(e)))
          ) {
            (l = oa(t, l)),
              (t = mr(2)),
              (e = Ia(a, t, 2)),
              e !== null && (vr(t, e, a, l), Ae(e, 2), Ra(e));
            break;
          }
        }
        a = a.return;
      }
  }
  function Ti(l, a, t) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new C0();
      var u = new Set();
      e.set(a, u);
    } else (u = e.get(a)), u === void 0 && ((u = new Set()), e.set(a, u));
    u.has(t) ||
      ((hi = !0), u.add(t), (l = Z0.bind(null, l, a, t)), a.then(l, l));
  }
  function Z0(l, a, t) {
    var e = l.pingCache;
    e !== null && e.delete(a),
      (l.pingedLanes |= l.suspendedLanes & t),
      (l.warmLanes &= ~t),
      gl === l &&
        (cl & t) === t &&
        (Al === 4 || (Al === 3 && (cl & 62914560) === cl && 300 > Na() - yi)
          ? (sl & 2) === 0 && he(l, 0)
          : (mi |= t),
        re === cl && (re = 0)),
      Ra(l);
  }
  function dd(l, a) {
    a === 0 && (a = cf()), (l = Wt(l, a)), l !== null && (Ae(l, a), Ra(l));
  }
  function V0(l) {
    var a = l.memoizedState,
      t = 0;
    a !== null && (t = a.retryLane), dd(l, t);
  }
  function L0(l, a) {
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
        throw Error(h(314));
    }
    e !== null && e.delete(a), dd(l, t);
  }
  function K0(l, a) {
    return Bn(l, a);
  }
  var gn = null,
    ve = null,
    pi = !1,
    Sn = !1,
    Ni = !1,
    jt = 0;
  function Ra(l) {
    l !== ve &&
      l.next === null &&
      (ve === null ? (gn = ve = l) : (ve = ve.next = l)),
      (Sn = !0),
      pi || ((pi = !0), w0());
  }
  function nu(l, a) {
    if (!Ni && Sn) {
      Ni = !0;
      do
        for (var t = !1, e = gn; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = e.suspendedLanes,
                i = e.pingedLanes;
              (n = (1 << (31 - ta(42 | l) + 1)) - 1),
                (n &= u & ~(c & ~i)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((t = !0), vd(e, n));
          } else
            (n = cl),
              (n = Tu(
                e,
                e === gl ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Ee(e, n) || ((t = !0), vd(e, n));
          e = e.next;
        }
      while (t);
      Ni = !1;
    }
  }
  function J0() {
    od();
  }
  function od() {
    Sn = pi = !1;
    var l = 0;
    jt !== 0 && (ah() && (l = jt), (jt = 0));
    for (var a = Na(), t = null, e = gn; e !== null; ) {
      var u = e.next,
        n = hd(e, a);
      n === 0
        ? ((e.next = null),
          t === null ? (gn = u) : (t.next = u),
          u === null && (ve = t))
        : ((t = e), (l !== 0 || (n & 3) !== 0) && (Sn = !0)),
        (e = u);
    }
    nu(l);
  }
  function hd(l, a) {
    for (
      var t = l.suspendedLanes,
        e = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - ta(n),
        i = 1 << c,
        f = u[c];
      f === -1
        ? ((i & t) === 0 || (i & e) !== 0) && (u[c] = So(i, a))
        : f <= a && (l.expiredLanes |= i),
        (n &= ~i);
    }
    if (
      ((a = gl),
      (t = cl),
      (t = Tu(
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
        e !== null && e !== null && Cn(e),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((t & 3) === 0 || Ee(l, t)) {
      if (((a = t & -t), a === l.callbackPriority)) return a;
      switch ((e !== null && Cn(e), Xn(t))) {
        case 2:
        case 8:
          t = ef;
          break;
        case 32:
          t = zu;
          break;
        case 268435456:
          t = uf;
          break;
        default:
          t = zu;
      }
      return (
        (e = md.bind(null, l)),
        (t = Bn(t, e)),
        (l.callbackPriority = a),
        (l.callbackNode = t),
        a
      );
    }
    return (
      e !== null && e !== null && Cn(e),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function md(l, a) {
    if (Yl !== 0 && Yl !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var t = l.callbackNode;
    if (yn() && l.callbackNode !== t) return null;
    var e = cl;
    return (
      (e = Tu(
        l,
        l === gl ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      e === 0
        ? null
        : (kr(l, e, a),
          hd(l, Na()),
          l.callbackNode != null && l.callbackNode === t
            ? md.bind(null, l)
            : null)
    );
  }
  function vd(l, a) {
    if (yn()) return null;
    kr(l, a, !0);
  }
  function w0() {
    eh(function () {
      (sl & 6) !== 0 ? Bn(tf, J0) : od();
    });
  }
  function Oi() {
    return jt === 0 && (jt = nf()), jt;
  }
  function yd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : _u("" + l);
  }
  function gd(l, a) {
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
  function $0(l, a, t, e, u) {
    if (a === "submit" && t && t.stateNode === u) {
      var n = yd((u[Wl] || null).action),
        c = e.submitter;
      c &&
        ((a = (a = c[Wl] || null)
          ? yd(a.formAction)
          : c.getAttribute("formAction")),
        a !== null && ((n = a), (c = null)));
      var i = new xu("action", "action", null, e, u);
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (jt !== 0) {
                  var f = c ? gd(u, c) : new FormData(u);
                  Jc(
                    t,
                    { pending: !0, data: f, method: u.method, action: n },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" &&
                  (i.preventDefault(),
                  (f = c ? gd(u, c) : new FormData(u)),
                  Jc(
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
  for (var Di = 0; Di < dc.length; Di++) {
    var _i = dc[Di],
      W0 = _i.toLowerCase(),
      k0 = _i[0].toUpperCase() + _i.slice(1);
    Ea(W0, "on" + k0);
  }
  Ea(kf, "onAnimationEnd"),
    Ea(Ff, "onAnimationIteration"),
    Ea(If, "onAnimationStart"),
    Ea("dblclick", "onDoubleClick"),
    Ea("focusin", "onFocus"),
    Ea("focusout", "onBlur"),
    Ea(h0, "onTransitionRun"),
    Ea(m0, "onTransitionStart"),
    Ea(v0, "onTransitionCancel"),
    Ea(Pf, "onTransitionEnd"),
    Gt("onMouseEnter", ["mouseout", "mouseover"]),
    Gt("onMouseLeave", ["mouseout", "mouseover"]),
    Gt("onPointerEnter", ["pointerout", "pointerover"]),
    Gt("onPointerLeave", ["pointerout", "pointerover"]),
    gt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    gt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    gt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    gt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    gt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    gt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var cu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    F0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(cu)
    );
  function Sd(l, a) {
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
              m = i.currentTarget;
            if (((i = i.listener), f !== n && u.isPropagationStopped()))
              break l;
            (n = i), (u.currentTarget = m);
            try {
              n(u);
            } catch (z) {
              un(z);
            }
            (u.currentTarget = null), (n = f);
          }
        else
          for (c = 0; c < e.length; c++) {
            if (
              ((i = e[c]),
              (f = i.instance),
              (m = i.currentTarget),
              (i = i.listener),
              f !== n && u.isPropagationStopped())
            )
              break l;
            (n = i), (u.currentTarget = m);
            try {
              n(u);
            } catch (z) {
              un(z);
            }
            (u.currentTarget = null), (n = f);
          }
      }
    }
  }
  function P(l, a) {
    var t = a[Qn];
    t === void 0 && (t = a[Qn] = new Set());
    var e = l + "__bubble";
    t.has(e) || (bd(a, l, 2, !1), t.add(e));
  }
  function Mi(l, a, t) {
    var e = 0;
    a && (e |= 4), bd(t, l, e, a);
  }
  var bn = "_reactListening" + Math.random().toString(36).slice(2);
  function Ri(l) {
    if (!l[bn]) {
      (l[bn] = !0),
        of.forEach(function (t) {
          t !== "selectionchange" && (F0.has(t) || Mi(t, !1, l), Mi(t, !0, l));
        });
      var a = l.nodeType === 9 ? l : l.ownerDocument;
      a === null || a[bn] || ((a[bn] = !0), Mi("selectionchange", !1, a));
    }
  }
  function bd(l, a, t, e) {
    switch (Vd(a)) {
      case 2:
        var u = ph;
        break;
      case 8:
        u = Nh;
        break;
      default:
        u = Li;
    }
    (t = u.bind(null, a, t, l)),
      (u = void 0),
      !In ||
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
  function Ui(l, a, t, e, u) {
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
            if (((c = Bt(i)), c === null)) return;
            if (((f = c.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              e = n = c;
              continue l;
            }
            i = i.parentNode;
          }
        }
        e = e.return;
      }
    Of(function () {
      var m = n,
        z = kn(t),
        A = [];
      l: {
        var y = ls.get(l);
        if (y !== void 0) {
          var g = xu,
            V = l;
          switch (l) {
            case "keypress":
              if (Ru(t) === 0) break l;
            case "keydown":
            case "keyup":
              g = Ko;
              break;
            case "focusin":
              (V = "focus"), (g = tc);
              break;
            case "focusout":
              (V = "blur"), (g = tc);
              break;
            case "beforeblur":
            case "afterblur":
              g = tc;
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
              g = Mf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = jo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = $o;
              break;
            case kf:
            case Ff:
            case If:
              g = Bo;
              break;
            case Pf:
              g = ko;
              break;
            case "scroll":
            case "scrollend":
              g = Uo;
              break;
            case "wheel":
              g = Io;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = Yo;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Uf;
              break;
            case "toggle":
            case "beforetoggle":
              g = l0;
          }
          var X = (a & 4) !== 0,
            ml = !X && (l === "scroll" || l === "scrollend"),
            d = X ? (y !== null ? y + "Capture" : null) : y;
          X = [];
          for (var r = m, o; r !== null; ) {
            var E = r;
            if (
              ((o = E.stateNode),
              (E = E.tag),
              (E !== 5 && E !== 26 && E !== 27) ||
                o === null ||
                d === null ||
                ((E = Ne(r, d)), E != null && X.push(iu(r, E, o))),
              ml)
            )
              break;
            r = r.return;
          }
          0 < X.length &&
            ((y = new g(y, V, null, t, z)), A.push({ event: y, listeners: X }));
        }
      }
      if ((a & 7) === 0) {
        l: {
          if (
            ((y = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            y &&
              t !== Wn &&
              (V = t.relatedTarget || t.fromElement) &&
              (Bt(V) || V[qt]))
          )
            break l;
          if (
            (g || y) &&
            ((y =
              z.window === z
                ? z
                : (y = z.ownerDocument)
                ? y.defaultView || y.parentWindow
                : window),
            g
              ? ((V = t.relatedTarget || t.toElement),
                (g = m),
                (V = V ? Bt(V) : null),
                V !== null &&
                  ((ml = L(V)),
                  (X = V.tag),
                  V !== ml || (X !== 5 && X !== 27 && X !== 6)) &&
                  (V = null))
              : ((g = null), (V = m)),
            g !== V)
          ) {
            if (
              ((X = Mf),
              (E = "onMouseLeave"),
              (d = "onMouseEnter"),
              (r = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((X = Uf),
                (E = "onPointerLeave"),
                (d = "onPointerEnter"),
                (r = "pointer")),
              (ml = g == null ? y : pe(g)),
              (o = V == null ? y : pe(V)),
              (y = new X(E, r + "leave", g, t, z)),
              (y.target = ml),
              (y.relatedTarget = o),
              (E = null),
              Bt(z) === m &&
                ((X = new X(d, r + "enter", V, t, z)),
                (X.target = o),
                (X.relatedTarget = ml),
                (E = X)),
              (ml = E),
              g && V)
            )
              a: {
                for (X = g, d = V, r = 0, o = X; o; o = ye(o)) r++;
                for (o = 0, E = d; E; E = ye(E)) o++;
                for (; 0 < r - o; ) (X = ye(X)), r--;
                for (; 0 < o - r; ) (d = ye(d)), o--;
                for (; r--; ) {
                  if (X === d || (d !== null && X === d.alternate)) break a;
                  (X = ye(X)), (d = ye(d));
                }
                X = null;
              }
            else X = null;
            g !== null && zd(A, y, g, X, !1),
              V !== null && ml !== null && zd(A, ml, V, X, !0);
          }
        }
        l: {
          if (
            ((y = m ? pe(m) : window),
            (g = y.nodeName && y.nodeName.toLowerCase()),
            g === "select" || (g === "input" && y.type === "file"))
          )
            var U = Gf;
          else if (Cf(y))
            if (Xf) U = r0;
            else {
              U = f0;
              var F = i0;
            }
          else
            (g = y.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (y.type !== "checkbox" && y.type !== "radio")
                ? m && $n(m.elementType) && (U = Gf)
                : (U = s0);
          if (U && (U = U(l, m))) {
            Yf(A, U, t, z);
            break l;
          }
          F && F(l, y, m),
            l === "focusout" &&
              m &&
              y.type === "number" &&
              m.memoizedProps.value != null &&
              wn(y, "number", y.value);
        }
        switch (((F = m ? pe(m) : window), l)) {
          case "focusin":
            (Cf(F) || F.contentEditable === "true") &&
              ((Jt = F), (fc = m), (je = null));
            break;
          case "focusout":
            je = fc = Jt = null;
            break;
          case "mousedown":
            sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (sc = !1), $f(A, t, z);
            break;
          case "selectionchange":
            if (o0) break;
          case "keydown":
          case "keyup":
            $f(A, t, z);
        }
        var q;
        if (uc)
          l: {
            switch (l) {
              case "compositionstart":
                var Q = "onCompositionStart";
                break l;
              case "compositionend":
                Q = "onCompositionEnd";
                break l;
              case "compositionupdate":
                Q = "onCompositionUpdate";
                break l;
            }
            Q = void 0;
          }
        else
          Kt
            ? qf(l, t) && (Q = "onCompositionEnd")
            : l === "keydown" &&
              t.keyCode === 229 &&
              (Q = "onCompositionStart");
        Q &&
          (xf &&
            t.locale !== "ko" &&
            (Kt || Q !== "onCompositionStart"
              ? Q === "onCompositionEnd" && Kt && (q = Df())
              : (($a = z),
                (Pn = "value" in $a ? $a.value : $a.textContent),
                (Kt = !0))),
          (F = zn(m, Q)),
          0 < F.length &&
            ((Q = new Rf(Q, l, null, t, z)),
            A.push({ event: Q, listeners: F }),
            q ? (Q.data = q) : ((q = Bf(t)), q !== null && (Q.data = q)))),
          (q = t0 ? e0(l, t) : u0(l, t)) &&
            ((Q = zn(m, "onBeforeInput")),
            0 < Q.length &&
              ((F = new Rf("onBeforeInput", "beforeinput", null, t, z)),
              A.push({ event: F, listeners: Q }),
              (F.data = q))),
          $0(A, l, m, t, z);
      }
      Sd(A, a);
    });
  }
  function iu(l, a, t) {
    return { instance: l, listener: a, currentTarget: t };
  }
  function zn(l, a) {
    for (var t = a + "Capture", e = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ne(l, t)),
          u != null && e.unshift(iu(l, u, n)),
          (u = Ne(l, a)),
          u != null && e.push(iu(l, u, n))),
        l.tag === 3)
      )
        return e;
      l = l.return;
    }
    return [];
  }
  function ye(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function zd(l, a, t, e, u) {
    for (var n = a._reactName, c = []; t !== null && t !== e; ) {
      var i = t,
        f = i.alternate,
        m = i.stateNode;
      if (((i = i.tag), f !== null && f === e)) break;
      (i !== 5 && i !== 26 && i !== 27) ||
        m === null ||
        ((f = m),
        u
          ? ((m = Ne(t, n)), m != null && c.unshift(iu(t, m, f)))
          : u || ((m = Ne(t, n)), m != null && c.push(iu(t, m, f)))),
        (t = t.return);
    }
    c.length !== 0 && l.push({ event: a, listeners: c });
  }
  var I0 = /\r\n?/g,
    P0 = /\u0000|\uFFFD/g;
  function Ed(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        I0,
        `
`
      )
      .replace(P0, "");
  }
  function Ad(l, a) {
    return (a = Ed(a)), Ed(l) === a;
  }
  function En() {}
  function hl(l, a, t, e, u, n) {
    switch (t) {
      case "children":
        typeof e == "string"
          ? a === "body" || (a === "textarea" && e === "") || Zt(l, e)
          : (typeof e == "number" || typeof e == "bigint") &&
            a !== "body" &&
            Zt(l, "" + e);
        break;
      case "className":
        Nu(l, "class", e);
        break;
      case "tabIndex":
        Nu(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Nu(l, t, e);
        break;
      case "style":
        pf(l, e, n);
        break;
      case "data":
        if (a !== "object") {
          Nu(l, "data", e);
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
        (e = _u("" + e)), l.setAttribute(t, e);
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
              ? (a !== "input" && hl(l, a, "name", u.name, u, null),
                hl(l, a, "formEncType", u.formEncType, u, null),
                hl(l, a, "formMethod", u.formMethod, u, null),
                hl(l, a, "formTarget", u.formTarget, u, null))
              : (hl(l, a, "encType", u.encType, u, null),
                hl(l, a, "method", u.method, u, null),
                hl(l, a, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(t);
          break;
        }
        (e = _u("" + e)), l.setAttribute(t, e);
        break;
      case "onClick":
        e != null && (l.onclick = En);
        break;
      case "onScroll":
        e != null && P("scroll", l);
        break;
      case "onScrollEnd":
        e != null && P("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(h(61));
          if (((t = e.__html), t != null)) {
            if (u.children != null) throw Error(h(60));
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
        (t = _u("" + e)),
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
        P("beforetoggle", l), P("toggle", l), pu(l, "popover", e);
        break;
      case "xlinkActuate":
        Ua(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Ua(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Ua(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Ua(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Ua(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Ua(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Ua(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Ua(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Ua(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        pu(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
          ((t = Mo.get(t) || t), pu(l, t, e));
    }
  }
  function xi(l, a, t, e, u, n) {
    switch (t) {
      case "style":
        pf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(h(61));
          if (((t = e.__html), t != null)) {
            if (u.children != null) throw Error(h(60));
            l.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? Zt(l, e)
          : (typeof e == "number" || typeof e == "bigint") && Zt(l, "" + e);
        break;
      case "onScroll":
        e != null && P("scroll", l);
        break;
      case "onScrollEnd":
        e != null && P("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = En);
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
        if (!hf.hasOwnProperty(t))
          l: {
            if (
              t[0] === "o" &&
              t[1] === "n" &&
              ((u = t.endsWith("Capture")),
              (a = t.slice(2, u ? t.length - 7 : void 0)),
              (n = l[Wl] || null),
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
              : pu(l, t, e);
          }
    }
  }
  function Gl(l, a, t) {
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
                  throw Error(h(137, a));
                default:
                  hl(l, a, n, c, t, null);
              }
          }
        u && hl(l, a, "srcSet", t.srcSet, t, null),
          e && hl(l, a, "src", t.src, t, null);
        return;
      case "input":
        P("invalid", l);
        var i = (n = c = u = null),
          f = null,
          m = null;
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
                  m = z;
                  break;
                case "value":
                  n = z;
                  break;
                case "defaultValue":
                  i = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(h(137, a));
                  break;
                default:
                  hl(l, a, e, z, t, null);
              }
          }
        zf(l, n, i, f, m, c, u, !1), Ou(l);
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
                hl(l, a, u, i, t, null);
            }
        (a = n),
          (t = c),
          (l.multiple = !!e),
          a != null ? Qt(l, !!e, a, !1) : t != null && Qt(l, !!e, t, !0);
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
                if (i != null) throw Error(h(91));
                break;
              default:
                hl(l, a, c, i, t, null);
            }
        Af(l, e, u, n), Ou(l);
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
                hl(l, a, f, e, t, null);
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
        for (e = 0; e < cu.length; e++) P(cu[e], l);
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
        for (m in t)
          if (t.hasOwnProperty(m) && ((e = t[m]), e != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, a));
              default:
                hl(l, a, m, e, t, null);
            }
        return;
      default:
        if ($n(a)) {
          for (z in t)
            t.hasOwnProperty(z) &&
              ((e = t[z]), e !== void 0 && xi(l, a, z, e, t, void 0));
          return;
        }
    }
    for (i in t)
      t.hasOwnProperty(i) && ((e = t[i]), e != null && hl(l, a, i, e, t, null));
  }
  function lh(l, a, t, e) {
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
          m = null,
          z = null;
        for (g in t) {
          var A = t[g];
          if (t.hasOwnProperty(g) && A != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = A;
              default:
                e.hasOwnProperty(g) || hl(l, a, g, null, e, A);
            }
        }
        for (var y in e) {
          var g = e[y];
          if (((A = t[y]), e.hasOwnProperty(y) && (g != null || A != null)))
            switch (y) {
              case "type":
                n = g;
                break;
              case "name":
                u = g;
                break;
              case "checked":
                m = g;
                break;
              case "defaultChecked":
                z = g;
                break;
              case "value":
                c = g;
                break;
              case "defaultValue":
                i = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(h(137, a));
                break;
              default:
                g !== A && hl(l, a, y, g, e, A);
            }
        }
        Jn(l, c, i, f, m, z, n, u);
        return;
      case "select":
        g = c = i = y = null;
        for (n in t)
          if (((f = t[n]), t.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = f;
              default:
                e.hasOwnProperty(n) || hl(l, a, n, null, e, f);
            }
        for (u in e)
          if (
            ((n = e[u]),
            (f = t[u]),
            e.hasOwnProperty(u) && (n != null || f != null))
          )
            switch (u) {
              case "value":
                y = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== f && hl(l, a, u, n, e, f);
            }
        (a = i),
          (t = c),
          (e = g),
          y != null
            ? Qt(l, !!t, y, !1)
            : !!e != !!t &&
              (a != null ? Qt(l, !!t, a, !0) : Qt(l, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        g = y = null;
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
                hl(l, a, i, null, e, u);
            }
        for (c in e)
          if (
            ((u = e[c]),
            (n = t[c]),
            e.hasOwnProperty(c) && (u != null || n != null))
          )
            switch (c) {
              case "value":
                y = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(h(91));
                break;
              default:
                u !== n && hl(l, a, c, u, e, n);
            }
        Ef(l, y, g);
        return;
      case "option":
        for (var V in t)
          if (
            ((y = t[V]),
            t.hasOwnProperty(V) && y != null && !e.hasOwnProperty(V))
          )
            switch (V) {
              case "selected":
                l.selected = !1;
                break;
              default:
                hl(l, a, V, null, e, y);
            }
        for (f in e)
          if (
            ((y = e[f]),
            (g = t[f]),
            e.hasOwnProperty(f) && y !== g && (y != null || g != null))
          )
            switch (f) {
              case "selected":
                l.selected =
                  y && typeof y != "function" && typeof y != "symbol";
                break;
              default:
                hl(l, a, f, y, e, g);
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
        for (var X in t)
          (y = t[X]),
            t.hasOwnProperty(X) &&
              y != null &&
              !e.hasOwnProperty(X) &&
              hl(l, a, X, null, e, y);
        for (m in e)
          if (
            ((y = e[m]),
            (g = t[m]),
            e.hasOwnProperty(m) && y !== g && (y != null || g != null))
          )
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(h(137, a));
                break;
              default:
                hl(l, a, m, y, e, g);
            }
        return;
      default:
        if ($n(a)) {
          for (var ml in t)
            (y = t[ml]),
              t.hasOwnProperty(ml) &&
                y !== void 0 &&
                !e.hasOwnProperty(ml) &&
                xi(l, a, ml, void 0, e, y);
          for (z in e)
            (y = e[z]),
              (g = t[z]),
              !e.hasOwnProperty(z) ||
                y === g ||
                (y === void 0 && g === void 0) ||
                xi(l, a, z, y, e, g);
          return;
        }
    }
    for (var d in t)
      (y = t[d]),
        t.hasOwnProperty(d) &&
          y != null &&
          !e.hasOwnProperty(d) &&
          hl(l, a, d, null, e, y);
    for (A in e)
      (y = e[A]),
        (g = t[A]),
        !e.hasOwnProperty(A) ||
          y === g ||
          (y == null && g == null) ||
          hl(l, a, A, y, e, g);
  }
  var ji = null,
    Hi = null;
  function An(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Td(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function pd(l, a) {
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
  function qi(l, a) {
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
  var Bi = null;
  function ah() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Bi
        ? !1
        : ((Bi = l), !0)
      : ((Bi = null), !1);
  }
  var Nd = typeof setTimeout == "function" ? setTimeout : void 0,
    th = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Od = typeof Promise == "function" ? Promise : void 0,
    eh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Od < "u"
        ? function (l) {
            return Od.resolve(null).then(l).catch(uh);
          }
        : Nd;
  function uh(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function rt(l) {
    return l === "head";
  }
  function Dd(l, a) {
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
            if ((t & 1 && fu(c.documentElement), t & 2 && fu(c.body), t & 4))
              for (t = c.head, fu(t), c = t.firstChild; c; ) {
                var i = c.nextSibling,
                  f = c.nodeName;
                c[Te] ||
                  f === "SCRIPT" ||
                  f === "STYLE" ||
                  (f === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  t.removeChild(c),
                  (c = i);
              }
          }
          if (u === 0) {
            l.removeChild(n), yu(a);
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
    yu(a);
  }
  function Ci(l) {
    var a = l.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var t = a;
      switch (((a = a.nextSibling), t.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ci(t), Zn(t);
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
  function nh(l, a, t, e) {
    for (; l.nodeType === 1; ) {
      var u = t;
      if (l.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[Te])
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
      if (((l = Ta(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function ch(l, a, t) {
    if (a === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = Ta(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Yi(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState === "complete")
    );
  }
  function ih(l, a) {
    var t = l.ownerDocument;
    if (l.data !== "$?" || t.readyState === "complete") a();
    else {
      var e = function () {
        a(), t.removeEventListener("DOMContentLoaded", e);
      };
      t.addEventListener("DOMContentLoaded", e), (l._reactRetry = e);
    }
  }
  function Ta(l) {
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
  var Gi = null;
  function _d(l) {
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
  function Md(l, a, t) {
    switch (((a = An(t)), l)) {
      case "html":
        if (((l = a.documentElement), !l)) throw Error(h(452));
        return l;
      case "head":
        if (((l = a.head), !l)) throw Error(h(453));
        return l;
      case "body":
        if (((l = a.body), !l)) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function fu(l) {
    for (var a = l.attributes; a.length; ) l.removeAttributeNode(a[0]);
    Zn(l);
  }
  var Sa = new Map(),
    Rd = new Set();
  function Tn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Ka = N.d;
  N.d = { f: fh, r: sh, D: rh, C: dh, L: oh, m: hh, X: vh, S: mh, M: yh };
  function fh() {
    var l = Ka.f(),
      a = mn();
    return l || a;
  }
  function sh(l) {
    var a = Ct(l);
    a !== null && a.tag === 5 && a.type === "form" ? ks(a) : Ka.r(l);
  }
  var ge = typeof document > "u" ? null : document;
  function Ud(l, a, t) {
    var e = ge;
    if (e && typeof a == "string" && a) {
      var u = da(a);
      (u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof t == "string" && (u += '[crossorigin="' + t + '"]'),
        Rd.has(u) ||
          (Rd.add(u),
          (l = { rel: l, crossOrigin: t, href: a }),
          e.querySelector(u) === null &&
            ((a = e.createElement("link")),
            Gl(a, "link", l),
            xl(a),
            e.head.appendChild(a)));
    }
  }
  function rh(l) {
    Ka.D(l), Ud("dns-prefetch", l, null);
  }
  function dh(l, a) {
    Ka.C(l, a), Ud("preconnect", l, a);
  }
  function oh(l, a, t) {
    Ka.L(l, a, t);
    var e = ge;
    if (e && l && a) {
      var u = 'link[rel="preload"][as="' + da(a) + '"]';
      a === "image" && t && t.imageSrcSet
        ? ((u += '[imagesrcset="' + da(t.imageSrcSet) + '"]'),
          typeof t.imageSizes == "string" &&
            (u += '[imagesizes="' + da(t.imageSizes) + '"]'))
        : (u += '[href="' + da(l) + '"]');
      var n = u;
      switch (a) {
        case "style":
          n = Se(l);
          break;
        case "script":
          n = be(l);
      }
      Sa.has(n) ||
        ((l = R(
          {
            rel: "preload",
            href: a === "image" && t && t.imageSrcSet ? void 0 : l,
            as: a,
          },
          t
        )),
        Sa.set(n, l),
        e.querySelector(u) !== null ||
          (a === "style" && e.querySelector(su(n))) ||
          (a === "script" && e.querySelector(ru(n))) ||
          ((a = e.createElement("link")),
          Gl(a, "link", l),
          xl(a),
          e.head.appendChild(a)));
    }
  }
  function hh(l, a) {
    Ka.m(l, a);
    var t = ge;
    if (t && l) {
      var e = a && typeof a.as == "string" ? a.as : "script",
        u =
          'link[rel="modulepreload"][as="' + da(e) + '"][href="' + da(l) + '"]',
        n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = be(l);
      }
      if (
        !Sa.has(n) &&
        ((l = R({ rel: "modulepreload", href: l }, a)),
        Sa.set(n, l),
        t.querySelector(u) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(ru(n))) return;
        }
        (e = t.createElement("link")),
          Gl(e, "link", l),
          xl(e),
          t.head.appendChild(e);
      }
    }
  }
  function mh(l, a, t) {
    Ka.S(l, a, t);
    var e = ge;
    if (e && l) {
      var u = Yt(e).hoistableStyles,
        n = Se(l);
      a = a || "default";
      var c = u.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if ((c = e.querySelector(su(n)))) i.loading = 5;
        else {
          (l = R({ rel: "stylesheet", href: l, "data-precedence": a }, t)),
            (t = Sa.get(n)) && Xi(l, t);
          var f = (c = e.createElement("link"));
          xl(f),
            Gl(f, "link", l),
            (f._p = new Promise(function (m, z) {
              (f.onload = m), (f.onerror = z);
            })),
            f.addEventListener("load", function () {
              i.loading |= 1;
            }),
            f.addEventListener("error", function () {
              i.loading |= 2;
            }),
            (i.loading |= 4),
            pn(c, a, e);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: i }),
          u.set(n, c);
      }
    }
  }
  function vh(l, a) {
    Ka.X(l, a);
    var t = ge;
    if (t && l) {
      var e = Yt(t).hoistableScripts,
        u = be(l),
        n = e.get(u);
      n ||
        ((n = t.querySelector(ru(u))),
        n ||
          ((l = R({ src: l, async: !0 }, a)),
          (a = Sa.get(u)) && Qi(l, a),
          (n = t.createElement("script")),
          xl(n),
          Gl(n, "link", l),
          t.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function yh(l, a) {
    Ka.M(l, a);
    var t = ge;
    if (t && l) {
      var e = Yt(t).hoistableScripts,
        u = be(l),
        n = e.get(u);
      n ||
        ((n = t.querySelector(ru(u))),
        n ||
          ((l = R({ src: l, async: !0, type: "module" }, a)),
          (a = Sa.get(u)) && Qi(l, a),
          (n = t.createElement("script")),
          xl(n),
          Gl(n, "link", l),
          t.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function xd(l, a, t, e) {
    var u = (u = Z.current) ? Tn(u) : null;
    if (!u) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string"
          ? ((a = Se(t.href)),
            (t = Yt(u).hoistableStyles),
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
          l = Se(t.href);
          var n = Yt(u).hoistableStyles,
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
              (n = u.querySelector(su(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              Sa.has(l) ||
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
                Sa.set(l, t),
                n || gh(u, l, t, c.state))),
            a && e === null)
          )
            throw Error(h(528, ""));
          return c;
        }
        if (a && e !== null) throw Error(h(529, ""));
        return null;
      case "script":
        return (
          (a = t.async),
          (t = t.src),
          typeof t == "string" &&
          a &&
          typeof a != "function" &&
          typeof a != "symbol"
            ? ((a = be(t)),
              (t = Yt(u).hoistableScripts),
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
        throw Error(h(444, l));
    }
  }
  function Se(l) {
    return 'href="' + da(l) + '"';
  }
  function su(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function jd(l) {
    return R({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function gh(l, a, t, e) {
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
        Gl(a, "link", t),
        xl(a),
        l.head.appendChild(a));
  }
  function be(l) {
    return '[src="' + da(l) + '"]';
  }
  function ru(l) {
    return "script[async]" + l;
  }
  function Hd(l, a, t) {
    if ((a.count++, a.instance === null))
      switch (a.type) {
        case "style":
          var e = l.querySelector('style[data-href~="' + da(t.href) + '"]');
          if (e) return (a.instance = e), xl(e), e;
          var u = R({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (l.ownerDocument || l).createElement("style")),
            xl(e),
            Gl(e, "style", u),
            pn(e, t.precedence, l),
            (a.instance = e)
          );
        case "stylesheet":
          u = Se(t.href);
          var n = l.querySelector(su(u));
          if (n) return (a.state.loading |= 4), (a.instance = n), xl(n), n;
          (e = jd(t)),
            (u = Sa.get(u)) && Xi(e, u),
            (n = (l.ownerDocument || l).createElement("link")),
            xl(n);
          var c = n;
          return (
            (c._p = new Promise(function (i, f) {
              (c.onload = i), (c.onerror = f);
            })),
            Gl(n, "link", e),
            (a.state.loading |= 4),
            pn(n, t.precedence, l),
            (a.instance = n)
          );
        case "script":
          return (
            (n = be(t.src)),
            (u = l.querySelector(ru(n)))
              ? ((a.instance = u), xl(u), u)
              : ((e = t),
                (u = Sa.get(n)) && ((e = R({}, t)), Qi(e, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                xl(u),
                Gl(u, "link", e),
                l.head.appendChild(u),
                (a.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(h(443, a.type));
      }
    else
      a.type === "stylesheet" &&
        (a.state.loading & 4) === 0 &&
        ((e = a.instance), (a.state.loading |= 4), pn(e, t.precedence, l));
    return a.instance;
  }
  function pn(l, a, t) {
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
  function Xi(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy),
      l.title == null && (l.title = a.title);
  }
  function Qi(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy),
      l.integrity == null && (l.integrity = a.integrity);
  }
  var Nn = null;
  function qd(l, a, t) {
    if (Nn === null) {
      var e = new Map(),
        u = (Nn = new Map());
      u.set(t, e);
    } else (u = Nn), (e = u.get(t)), e || ((e = new Map()), u.set(t, e));
    if (e.has(l)) return e;
    for (
      e.set(l, null), t = t.getElementsByTagName(l), u = 0;
      u < t.length;
      u++
    ) {
      var n = t[u];
      if (
        !(
          n[Te] ||
          n[Ql] ||
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
  function Bd(l, a, t) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        t,
        a === "title" ? l.querySelector("head > title") : null
      );
  }
  function Sh(l, a, t) {
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
  function Cd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var du = null;
  function bh() {}
  function zh(l, a, t) {
    if (du === null) throw Error(h(475));
    var e = du;
    if (
      a.type === "stylesheet" &&
      (typeof t.media != "string" || matchMedia(t.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = Se(t.href),
          n = l.querySelector(su(u));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (e.count++, (e = On.bind(e)), l.then(e, e)),
            (a.state.loading |= 4),
            (a.instance = n),
            xl(n);
          return;
        }
        (n = l.ownerDocument || l),
          (t = jd(t)),
          (u = Sa.get(u)) && Xi(t, u),
          (n = n.createElement("link")),
          xl(n);
        var c = n;
        (c._p = new Promise(function (i, f) {
          (c.onload = i), (c.onerror = f);
        })),
          Gl(n, "link", t),
          (a.instance = n);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(a, l),
        (l = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (e.count++,
          (a = On.bind(e)),
          l.addEventListener("load", a),
          l.addEventListener("error", a));
    }
  }
  function Eh() {
    if (du === null) throw Error(h(475));
    var l = du;
    return (
      l.stylesheets && l.count === 0 && Zi(l, l.stylesheets),
      0 < l.count
        ? function (a) {
            var t = setTimeout(function () {
              if ((l.stylesheets && Zi(l, l.stylesheets), l.unsuspend)) {
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
  function On() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Zi(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Dn = null;
  function Zi(l, a) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Dn = new Map()),
        a.forEach(Ah, l),
        (Dn = null),
        On.call(l));
  }
  function Ah(l, a) {
    if (!(a.state.loading & 4)) {
      var t = Dn.get(l);
      if (t) var e = t.get(null);
      else {
        (t = new Map()), Dn.set(l, t);
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
        (e = On.bind(this)),
        u.addEventListener("load", e),
        u.addEventListener("error", e),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (a.state.loading |= 4);
    }
  }
  var ou = {
    $$typeof: Ul,
    Provider: null,
    Consumer: null,
    _currentValue: H,
    _currentValue2: H,
    _threadCount: 0,
  };
  function Th(l, a, t, e, u, n, c, i) {
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
      (this.expirationTimes = Yn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Yn(0)),
      (this.hiddenUpdates = Yn(null)),
      (this.identifierPrefix = e),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map());
  }
  function Yd(l, a, t, e, u, n, c, i, f, m, z, A) {
    return (
      (l = new Th(l, a, t, c, i, f, m, A)),
      (a = 1),
      n === !0 && (a |= 24),
      (n = ua(3, null, null, a)),
      (l.current = n),
      (n.stateNode = l),
      (a = Tc()),
      a.refCount++,
      (l.pooledCache = a),
      a.refCount++,
      (n.memoizedState = { element: e, isDehydrated: t, cache: a }),
      Dc(n),
      l
    );
  }
  function Gd(l) {
    return l ? ((l = kt), l) : kt;
  }
  function Xd(l, a, t, e, u, n) {
    (u = Gd(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = Fa(a)),
      (e.payload = { element: t }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (t = Ia(l, e, a)),
      t !== null && (sa(t, l, a), Ze(t, l, a));
  }
  function Qd(l, a) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var t = l.retryLane;
      l.retryLane = t !== 0 && t < a ? t : a;
    }
  }
  function Vi(l, a) {
    Qd(l, a), (l = l.alternate) && Qd(l, a);
  }
  function Zd(l) {
    if (l.tag === 13) {
      var a = Wt(l, 67108864);
      a !== null && sa(a, l, 67108864), Vi(l, 67108864);
    }
  }
  var _n = !0;
  function ph(l, a, t, e) {
    var u = S.T;
    S.T = null;
    var n = N.p;
    try {
      (N.p = 2), Li(l, a, t, e);
    } finally {
      (N.p = n), (S.T = u);
    }
  }
  function Nh(l, a, t, e) {
    var u = S.T;
    S.T = null;
    var n = N.p;
    try {
      (N.p = 8), Li(l, a, t, e);
    } finally {
      (N.p = n), (S.T = u);
    }
  }
  function Li(l, a, t, e) {
    if (_n) {
      var u = Ki(e);
      if (u === null) Ui(l, a, e, Mn, t), Ld(l, e);
      else if (Dh(u, l, a, t, e)) e.stopPropagation();
      else if ((Ld(l, e), a & 4 && -1 < Oh.indexOf(l))) {
        for (; u !== null; ) {
          var n = Ct(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = yt(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var f = 1 << (31 - ta(c));
                      (i.entanglements[1] |= f), (c &= ~f);
                    }
                    Ra(n), (sl & 6) === 0 && ((on = Na() + 500), nu(0));
                  }
                }
                break;
              case 13:
                (i = Wt(n, 2)), i !== null && sa(i, n, 2), mn(), Vi(n, 2);
            }
          if (((n = Ki(e)), n === null && Ui(l, a, e, Mn, t), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else Ui(l, a, e, null, t);
    }
  }
  function Ki(l) {
    return (l = kn(l)), Ji(l);
  }
  var Mn = null;
  function Ji(l) {
    if (((Mn = null), (l = Bt(l)), l !== null)) {
      var a = L(l);
      if (a === null) l = null;
      else {
        var t = a.tag;
        if (t === 13) {
          if (((l = K(a)), l !== null)) return l;
          l = null;
        } else if (t === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          l = null;
        } else a !== l && (l = null);
      }
    }
    return (Mn = l), null;
  }
  function Vd(l) {
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
        switch (ro()) {
          case tf:
            return 2;
          case ef:
            return 8;
          case zu:
          case oo:
            return 32;
          case uf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wi = !1,
    dt = null,
    ot = null,
    ht = null,
    hu = new Map(),
    mu = new Map(),
    mt = [],
    Oh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Ld(l, a) {
    switch (l) {
      case "focusin":
      case "focusout":
        dt = null;
        break;
      case "dragenter":
      case "dragleave":
        ot = null;
        break;
      case "mouseover":
      case "mouseout":
        ht = null;
        break;
      case "pointerover":
      case "pointerout":
        hu.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        mu.delete(a.pointerId);
    }
  }
  function vu(l, a, t, e, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: a,
          domEventName: t,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [u],
        }),
        a !== null && ((a = Ct(a)), a !== null && Zd(a)),
        l)
      : ((l.eventSystemFlags |= e),
        (a = l.targetContainers),
        u !== null && a.indexOf(u) === -1 && a.push(u),
        l);
  }
  function Dh(l, a, t, e, u) {
    switch (a) {
      case "focusin":
        return (dt = vu(dt, l, a, t, e, u)), !0;
      case "dragenter":
        return (ot = vu(ot, l, a, t, e, u)), !0;
      case "mouseover":
        return (ht = vu(ht, l, a, t, e, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return hu.set(n, vu(hu.get(n) || null, l, a, t, e, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), mu.set(n, vu(mu.get(n) || null, l, a, t, e, u)), !0
        );
    }
    return !1;
  }
  function Kd(l) {
    var a = Bt(l.target);
    if (a !== null) {
      var t = L(a);
      if (t !== null) {
        if (((a = t.tag), a === 13)) {
          if (((a = K(t)), a !== null)) {
            (l.blockedOn = a),
              zo(l.priority, function () {
                if (t.tag === 13) {
                  var e = fa();
                  e = Gn(e);
                  var u = Wt(t, e);
                  u !== null && sa(u, t, e), Vi(t, e);
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
  function Rn(l) {
    if (l.blockedOn !== null) return !1;
    for (var a = l.targetContainers; 0 < a.length; ) {
      var t = Ki(l.nativeEvent);
      if (t === null) {
        t = l.nativeEvent;
        var e = new t.constructor(t.type, t);
        (Wn = e), t.target.dispatchEvent(e), (Wn = null);
      } else return (a = Ct(t)), a !== null && Zd(a), (l.blockedOn = t), !1;
      a.shift();
    }
    return !0;
  }
  function Jd(l, a, t) {
    Rn(l) && t.delete(a);
  }
  function _h() {
    (wi = !1),
      dt !== null && Rn(dt) && (dt = null),
      ot !== null && Rn(ot) && (ot = null),
      ht !== null && Rn(ht) && (ht = null),
      hu.forEach(Jd),
      mu.forEach(Jd);
  }
  function Un(l, a) {
    l.blockedOn === a &&
      ((l.blockedOn = null),
      wi ||
        ((wi = !0),
        _.unstable_scheduleCallback(_.unstable_NormalPriority, _h)));
  }
  var xn = null;
  function wd(l) {
    xn !== l &&
      ((xn = l),
      _.unstable_scheduleCallback(_.unstable_NormalPriority, function () {
        xn === l && (xn = null);
        for (var a = 0; a < l.length; a += 3) {
          var t = l[a],
            e = l[a + 1],
            u = l[a + 2];
          if (typeof e != "function") {
            if (Ji(e || t) === null) continue;
            break;
          }
          var n = Ct(t);
          n !== null &&
            (l.splice(a, 3),
            (a -= 3),
            Jc(n, { pending: !0, data: u, method: t.method, action: e }, e, u));
        }
      }));
  }
  function yu(l) {
    function a(f) {
      return Un(f, l);
    }
    dt !== null && Un(dt, l),
      ot !== null && Un(ot, l),
      ht !== null && Un(ht, l),
      hu.forEach(a),
      mu.forEach(a);
    for (var t = 0; t < mt.length; t++) {
      var e = mt[t];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < mt.length && ((t = mt[0]), t.blockedOn === null); )
      Kd(t), t.blockedOn === null && mt.shift();
    if (((t = (l.ownerDocument || l).$$reactFormReplay), t != null))
      for (e = 0; e < t.length; e += 3) {
        var u = t[e],
          n = t[e + 1],
          c = u[Wl] || null;
        if (typeof n == "function") c || wd(t);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (c = n[Wl] || null))) i = c.formAction;
            else if (Ji(u) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? (t[e + 1] = i) : (t.splice(e, 3), (e -= 3)),
            wd(t);
        }
      }
  }
  function $i(l) {
    this._internalRoot = l;
  }
  (jn.prototype.render = $i.prototype.render =
    function (l) {
      var a = this._internalRoot;
      if (a === null) throw Error(h(409));
      var t = a.current,
        e = fa();
      Xd(t, e, l, a, null, null);
    }),
    (jn.prototype.unmount = $i.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var a = l.containerInfo;
          Xd(l.current, 2, null, l, null, null), mn(), (a[qt] = null);
        }
      });
  function jn(l) {
    this._internalRoot = l;
  }
  jn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var a = rf();
      l = { blockedOn: null, target: l, priority: a };
      for (var t = 0; t < mt.length && a !== 0 && a < mt[t].priority; t++);
      mt.splice(t, 0, l), t === 0 && Kd(l);
    }
  };
  var $d = el.version;
  if ($d !== "19.1.1") throw Error(h(527, $d, "19.1.1"));
  N.findDOMNode = function (l) {
    var a = l._reactInternals;
    if (a === void 0)
      throw typeof l.render == "function"
        ? Error(h(188))
        : ((l = Object.keys(l).join(",")), Error(h(268, l)));
    return (
      (l = j(a)),
      (l = l !== null ? b(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Mh = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hn.isDisabled && Hn.supportsFiber)
      try {
        (ze = Hn.inject(Mh)), (aa = Hn);
      } catch {}
  }
  return (
    (Su.createRoot = function (l, a) {
      if (!x(l)) throw Error(h(299));
      var t = !1,
        e = "",
        u = rr,
        n = dr,
        c = or,
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
        (a = Yd(l, 1, !1, null, null, t, e, u, n, c, i, null)),
        (l[qt] = a.current),
        Ri(l),
        new $i(a)
      );
    }),
    (Su.hydrateRoot = function (l, a, t) {
      if (!x(l)) throw Error(h(299));
      var e = !1,
        u = "",
        n = rr,
        c = dr,
        i = or,
        f = null,
        m = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (c = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (f = t.unstable_transitionCallbacks),
          t.formState !== void 0 && (m = t.formState)),
        (a = Yd(l, 1, !0, a, t ?? null, e, u, n, c, i, f, m)),
        (a.context = Gd(null)),
        (t = a.current),
        (e = fa()),
        (e = Gn(e)),
        (u = Fa(e)),
        (u.callback = null),
        Ia(t, u, e),
        (t = e),
        (a.current.lanes = t),
        Ae(a, t),
        Ra(a),
        (l[qt] = a.current),
        Ri(l),
        new jn(a)
      );
    }),
    (Su.version = "19.1.1"),
    Su
  );
}
var uo;
function Gh() {
  if (uo) return Fi.exports;
  uo = 1;
  function _() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (el) {
        console.error(el);
      }
  }
  return _(), (Fi.exports = Yh()), Fi.exports;
}
var Xh = Gh();
const no = {
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
function Qh(_, el) {
  if (!el || el.length === 0) return _;
  const G = { ..._ };
  for (const h of el) {
    let x = h.match(
      /^([\wÁÉÍÓÚÜÑáéíóúüñ]+)\s*([+-]?\d+D\d+|[+-]?\d+D|[+-]?\d+)$/i
    );
    if (
      !x &&
      ((x = h.match(
        /^([+-]?\d+D\d+|[+-]?\d+D|[+-]?\d+)\s+([\wÁÉÍÓÚÜÑáéíóúüñ]+)$/i
      )),
      x)
    ) {
      const R = x[1];
      (x[1] = x[2]), (x[2] = R);
    }
    if (!x) {
      console.log("[Variación ignorada] No coincide:", h);
      continue;
    }
    const L = x[1],
      K = x[2],
      J = no[L.toUpperCase()] || no[L];
    if (!J) {
      console.log("[Atributo ignorado] No normalizado:", L, "de variación", h);
      continue;
    }
    const j = G[J] || "";
    console.log("[Aplicando variación]", {
      atributo: L,
      nombreNormalizado: J,
      cambio: K,
      actual: j,
      variacion: h,
    });
    const b = j.match(/^(\d+)D(\d+)([+-]\d+)?$/);
    if (!K.includes("+") && !K.includes("-")) {
      (G[J] = K), console.log("[Reemplazo directo]", J, "->", K);
      continue;
    }
    if (b) {
      let R = parseInt(b[1], 10),
        O = parseInt(b[2], 10),
        w = b[3] ? parseInt(b[3], 10) : 0;
      if (/^[+-]?\d+D$/.test(K)) {
        const ul = parseInt(K.replace("D", ""), 10);
        (R += ul),
          (G[J] = `${R}D${O}${w !== 0 ? (w > 0 ? "+" : "") + w : ""}`),
          console.log("[Suma dados]", J, "->", G[J]);
      } else if (/^[+-]?\d+D\d+$/.test(K)) {
        const ul = K.match(/([+-]?\d+)D(\d+)/);
        ul && ((R += parseInt(ul[1], 10)), (O = parseInt(ul[2], 10))),
          (G[J] = `${R}D${O}${w !== 0 ? (w > 0 ? "+" : "") + w : ""}`),
          console.log("[Suma dados y caras]", J, "->", G[J]);
      } else
        /^[+-]?\d+$/.test(K) &&
          ((w += parseInt(K, 10)),
          (G[J] = `${R}D${O}${w !== 0 ? (w > 0 ? "+" : "") + w : ""}`),
          console.log("[Suma modificador]", J, "->", G[J]));
    } else if (/^[+-]?\d+$/.test(K)) {
      const R = j.match(/^(\d+)D(\d+)([+-]\d+)?$/);
      if (R) {
        let O = parseInt(R[1], 10),
          w = parseInt(R[2], 10),
          ul = R[3] ? parseInt(R[3], 10) : 0;
        (ul += parseInt(K, 10)),
          (G[J] = `${O}D${w}${ul !== 0 ? (ul > 0 ? "+" : "") + ul : ""}`),
          console.log("[Suma modificador simple]", J, "->", G[J]);
      } else {
        const O = parseInt(j || "0", 10);
        (G[J] = (O + parseInt(K, 10)).toString()),
          console.log("[Suma valor simple]", J, "->", G[J]);
      }
    } else (G[J] = K), console.log("[Reemplazo no dado]", J, "->", K);
  }
  return G;
}
function co(_, el) {
  const G = _.caracteristicas,
    h = el?.variacion_caracteristicas;
  return Qh(G, h);
}
const io = {
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
function Zh(_) {
  const el = io[_.trim()];
  if (el) return el;
  const G = _.replace(/^[+-]?\d+\s*%?\s*/, "")
    .replace(/\s*[+-]?\d+\s*%?$/, "")
    .trim();
  return io[G];
}
function Vh(_) {
  const el = _.trim(),
    G = [/^([+-]?\d+)\s*%?\s*(.+)$/, /^(.+?)\s*([+-]?\d+)\s*%?$/];
  for (const h of G) {
    const x = el.match(h);
    if (x) {
      let L, K;
      h === G[0]
        ? ((L = parseInt(x[1].replace(/[+]/g, ""))), (K = x[2]))
        : ((K = x[1]), (L = parseInt(x[2].replace(/[+]/g, ""))));
      const J = Zh(K);
      if (J && !isNaN(L)) return { habilidad: J, valor: L };
    }
  }
  return null;
}
function Lh() {
  const [_, el] = ba.useState(!0),
    G = () => {
      _ && el(!1);
    },
    [h, x] = ba.useState(null),
    [L, K] = ba.useState([]),
    [J, j] = ba.useState([]),
    [b, R] = ba.useState(null),
    [O, w] = ba.useState(null),
    [ul, Nl] = ba.useState(null),
    [zl, Rl] = ba.useState({}),
    [pa, za] = ba.useState(!0);
  function Ul(p) {
    const C = /(\d+)D(\d+)([+-]\d+)?/i,
      Y = p.match(C);
    if (!Y) return 0;
    const $ = parseInt(Y[1], 10),
      dl = parseInt(Y[2], 10),
      Xl = Y[3] ? parseInt(Y[3], 10) : 0;
    let al = 0;
    for (let S = 0; S < $; S++) {
      let N = Math.floor(Math.random() * dl) + 1;
      pa && N < 2 && (N = 2), (al += N);
    }
    return al + Xl;
  }
  const la = () => {
      if (
        !ul ||
        (Object.values(zl).some((wl) => wl && wl.trim() !== "") &&
          !window.confirm(
            "¿Seguro que quieres generar tiradas aleatorias? Se borrarán los valores que hayas insertado manualmente."
          ))
      )
        return;
      const p = {};
      Object.entries(ul).forEach(([wl, Ht]) => {
        typeof Ht == "string" && (p[wl] = Ul(Ht).toString());
      }),
        Rl(p);
      const C = parseInt(p.Fuerza || "0", 10);
      let Y = "";
      C >= 18 && C <= 23
        ? (Y = "+1")
        : C >= 24 && C <= 30
        ? (Y = "+1D4")
        : C >= 31 && C <= 38
        ? (Y = "+1D6")
        : C >= 39 && C <= 45
        ? (Y = "+1D10")
        : C >= 46
        ? (Y = "+2D6")
        : (Y = "Sin bonus");
      const $ = parseInt(p.Destreza || "0", 10),
        dl = C + $;
      let Xl = "NO TIENE";
      O &&
        ["ARQUERO", "CASACA AZUL", "ILMIONARIO", "GUARDABOSQUES"].some(
          (wl) => O.nombre.toUpperCase() === wl.toUpperCase()
        ) &&
        (dl >= 0 && dl <= 24
          ? (Xl = "Nada")
          : dl >= 25 && dl <= 40
          ? (Xl = "+1D4")
          : dl >= 41 && dl <= 52
          ? (Xl = "+2D4")
          : dl >= 53 && (Xl = "2D4+1"));
      const S = parseInt(p.Inteligencia || "0", 10),
        N = parseInt(p.Constitución || "0", 10),
        H = parseInt(p.Poder || "0", 10),
        tl = parseInt(p.Carisma || "0", 10),
        s = parseInt(p.Tamaño || "0", 10);
      let T = 0;
      S >= 1 && S <= 10
        ? (T = S)
        : S >= 11 && S <= 18
        ? (T = S + 20)
        : S >= 19 && (T = S + 30);
      const M = S + $ + 10,
        D = Math.floor(N / 2) + S + H + tl - 5,
        B = $ * 2 + S + H - s - 5,
        ll = S * 2 + $ + tl - 15,
        Z = S + Math.floor(C / 2) + H + $ - s - 5,
        Bl = H + tl + S + 40 - N,
        yl = Math.max(1, N + s - 12);
      x({
        bonusCC: `Bonus de Fuerza CC: ${Y}`,
        bonusAA: `Bonus de Fuerza AA: ${Xl}`,
        conocimiento: T,
        percepcion: M,
        comunicacion: D,
        agilidad: B,
        manipulacion: ll,
        discrecion: Z,
        saludMental: Bl,
        puntosVida: yl,
      });
    },
    nl = () =>
      b
        ? v.jsx("div", {
            className: "raza-card",
            children: v.jsxs("div", {
              className: "raza-content",
              children: [
                v.jsx("h3", { className: "raza-title", children: b.nombre }),
                v.jsx("p", {
                  className: "raza-description",
                  children: b.descripcion,
                }),
                v.jsx("hr", { className: "raza-divider" }),
                v.jsxs("div", {
                  className: "raza-info-grid",
                  children: [
                    v.jsxs("div", {
                      className: "raza-section",
                      children: [
                        v.jsx("h4", {
                          className: "raza-section-title",
                          children: "Características",
                        }),
                        v.jsx("div", {
                          className: "raza-list",
                          children: Object.entries(b.caracteristicas).map(
                            ([p, C]) =>
                              v.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    v.jsxs("span", {
                                      className: "raza-characteristic-name",
                                      children: [p, ":"],
                                    }),
                                    v.jsx("span", {
                                      className:
                                        "raza-chip raza-chip-secondary",
                                      children: C,
                                    }),
                                  ],
                                },
                                p
                              )
                          ),
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "raza-section",
                      children: [
                        v.jsx("h4", {
                          className: "raza-section-title",
                          children: "Bonificaciones",
                        }),
                        v.jsx("div", {
                          className: "raza-list",
                          children: Object.entries(b.bonificaciones).map(
                            ([p, C]) =>
                              v.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    v.jsxs("span", {
                                      className: "raza-bonus-name",
                                      children: [p, ":"],
                                    }),
                                    v.jsx("span", {
                                      className: "raza-chip raza-chip-success",
                                      children: C,
                                    }),
                                  ],
                                },
                                p
                              )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                v.jsx("hr", { className: "raza-divider" }),
                v.jsxs("div", {
                  className: "raza-additional-info",
                  children: [
                    v.jsxs("div", {
                      className: "raza-info-item",
                      children: [
                        v.jsx("span", {
                          className: "raza-info-label",
                          children: "Rango",
                        }),
                        v.jsx("span", {
                          className: "raza-info-value",
                          children: b.rango,
                        }),
                      ],
                    }),
                    b.armadura &&
                      v.jsxs("div", {
                        className: "raza-info-item",
                        children: [
                          v.jsx("span", {
                            className: "raza-info-label",
                            children: "Armadura",
                          }),
                          v.jsx("span", {
                            className: "raza-info-value",
                            children: b.armadura,
                          }),
                        ],
                      }),
                    b.ataque &&
                      v.jsxs("div", {
                        className: "raza-info-item",
                        children: [
                          v.jsx("span", {
                            className: "raza-info-label",
                            children: "Ataque",
                          }),
                          v.jsx("span", {
                            className: "raza-info-value",
                            children: b.ataque,
                          }),
                        ],
                      }),
                  ],
                }),
                b.notas &&
                  v.jsxs(v.Fragment, {
                    children: [
                      v.jsx("hr", { className: "raza-divider" }),
                      v.jsx("h4", {
                        className: "raza-section-title",
                        children: "Notas",
                      }),
                      v.jsx("div", {
                        className: "raza-notes",
                        children: v.jsx("p", {
                          className: "raza-notes-text",
                          children: b.notas,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          })
        : null,
    Ll = () =>
      O
        ? v.jsx("div", {
            className: "raza-card",
            children: v.jsxs("div", {
              className: "raza-content",
              children: [
                v.jsx("h3", { className: "raza-title", children: O.nombre }),
                v.jsx("p", {
                  className: "raza-description",
                  children: O.descripcion,
                }),
                v.jsx("hr", { className: "raza-divider" }),
                v.jsxs("div", {
                  className: "raza-info-grid",
                  children: [
                    O.variacion_caracteristicas &&
                      Array.isArray(O.variacion_caracteristicas) &&
                      O.variacion_caracteristicas.length > 0 &&
                      v.jsxs("div", {
                        className: "raza-section",
                        children: [
                          v.jsx("h4", {
                            className: "raza-section-title",
                            children: "Variaciones de Características",
                          }),
                          v.jsx("div", {
                            className: "raza-list",
                            children: O.variacion_caracteristicas.map((p, C) =>
                              v.jsx(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: v.jsx("span", {
                                    className: "raza-characteristic-name",
                                    children: p,
                                  }),
                                },
                                C
                              )
                            ),
                          }),
                        ],
                      }),
                    O.variacion_habilidades &&
                      O.variacion_habilidades.length > 0 &&
                      v.jsxs("div", {
                        className: "raza-section",
                        children: [
                          v.jsx("h4", {
                            className: "raza-section-title",
                            children: "Bonificaciones de Habilidades",
                          }),
                          v.jsx("div", {
                            className: "raza-list",
                            children: O.variacion_habilidades.map((p, C) =>
                              v.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    v.jsx("span", {
                                      className: "raza-bonus-name",
                                      children: p,
                                    }),
                                    v.jsx("span", {
                                      className:
                                        "raza-chip raza-chip-secondary",
                                      children: "Habilidad",
                                    }),
                                  ],
                                },
                                C
                              )
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
                O.Bonus_combate &&
                  v.jsxs(v.Fragment, {
                    children: [
                      v.jsx("hr", { className: "raza-divider" }),
                      v.jsxs("div", {
                        className: "raza-section",
                        children: [
                          v.jsx("h4", {
                            className: "raza-section-title",
                            children: "Bonus de Combate",
                          }),
                          v.jsxs("div", {
                            className: "raza-list",
                            children: [
                              v.jsxs("div", {
                                className: "raza-list-item",
                                children: [
                                  v.jsx("span", {
                                    className: "raza-bonus-name",
                                    children: "Ataque:",
                                  }),
                                  v.jsx("span", {
                                    className: "raza-chip raza-chip-secondary",
                                    children: O.Bonus_combate.ataque,
                                  }),
                                ],
                              }),
                              v.jsxs("div", {
                                className: "raza-list-item",
                                children: [
                                  v.jsx("span", {
                                    className: "raza-bonus-name",
                                    children: "Defensa:",
                                  }),
                                  v.jsx("span", {
                                    className: "raza-chip raza-chip-secondary",
                                    children: O.Bonus_combate.defensa,
                                  }),
                                ],
                              }),
                              O.Bonus_combate.armas_arrojadizas &&
                                v.jsxs("div", {
                                  className: "raza-list-item",
                                  children: [
                                    v.jsx("span", {
                                      className: "raza-bonus-name",
                                      children: "Armas Arrojadizas:",
                                    }),
                                    v.jsx("span", {
                                      className:
                                        "raza-chip raza-chip-secondary",
                                      children:
                                        O.Bonus_combate.armas_arrojadizas,
                                    }),
                                  ],
                                }),
                              O.Bonus_combate.montado_a_caballo &&
                                v.jsxs("div", {
                                  className: "raza-list-item",
                                  children: [
                                    v.jsx("span", {
                                      className: "raza-bonus-name",
                                      children: "Montado a Caballo:",
                                    }),
                                    v.jsx("span", {
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
                v.jsx("hr", { className: "raza-divider" }),
                v.jsxs("div", {
                  className: "raza-additional-info",
                  children: [
                    v.jsxs("div", {
                      className: "raza-info-item",
                      children: [
                        v.jsx("span", {
                          className: "raza-info-label",
                          children: "Rango",
                        }),
                        v.jsx("span", {
                          className: "raza-info-value",
                          children: O.rango,
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "raza-info-item",
                      children: [
                        v.jsx("span", {
                          className: "raza-info-label",
                          children: "Cualidades",
                        }),
                        v.jsx("span", {
                          className: "raza-info-value",
                          children: O.cualidades,
                        }),
                      ],
                    }),
                    O.equipo_especial &&
                      v.jsxs("div", {
                        className: "raza-info-item",
                        children: [
                          v.jsx("span", {
                            className: "raza-info-label",
                            children: "Equipo Especial",
                          }),
                          v.jsx("span", {
                            className: "raza-info-value",
                            children: O.equipo_especial,
                          }),
                        ],
                      }),
                  ],
                }),
                O.especial &&
                  v.jsxs(v.Fragment, {
                    children: [
                      v.jsx("hr", { className: "raza-divider" }),
                      v.jsx("h4", {
                        className: "raza-section-title",
                        children: "Habilidades Especiales",
                      }),
                      v.jsx("div", {
                        className: "raza-notes",
                        children: v.jsx("p", {
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
    Kl = () => {
      if (!b && !O) return null;
      const p = {};
      return (
        b &&
          Object.entries(b.bonificaciones).forEach(([C, Y]) => {
            if (typeof Y == "number") p[C] = (p[C] || 0) + Y;
            else if (typeof Y == "string") {
              const $ = parseInt(Y.replace(/[+-]/g, "")) || 0,
                dl = Y.startsWith("-") ? -1 : 1;
              p[C] = (p[C] || 0) + $ * dl;
            }
          }),
        O &&
          O.variacion_habilidades &&
          O.variacion_habilidades.forEach((C) => {
            const Y = C.trim();
            if (
              Y.includes("Regeneración de SM") ||
              Y.includes("al día") ||
              Y.includes("1D6") ||
              Y === ""
            )
              return;
            const $ = Vh(Y);
            if ($) {
              p[$.habilidad] = (p[$.habilidad] || 0) + $.valor;
              return;
            }
            if (Y.includes("100%") || Y.includes("+100")) {
              const dl = Y.replace(/(\+100|100\s*%).*$/, "").trim();
              dl && (p[dl] = 100);
            }
          }),
        p
      );
    },
    Jl = () => {
      const p = Kl();
      return !p || Object.keys(p).length === 0
        ? null
        : v.jsxs("div", {
            className: "ficha-resultado",
            children: [
              v.jsx("h3", {
                className: "ficha-resultado-title",
                children: "Total de Bonificaciones (Raza + Clase):",
              }),
              v.jsx("ul", {
                className: "ficha-resultado-list",
                children: Object.entries(p).map(([C, Y]) =>
                  v.jsxs(
                    "li",
                    {
                      className: "ficha-resultado-item",
                      children: [
                        v.jsxs("b", {
                          className: "ficha-resultado-carac",
                          children: [C, ":"],
                        }),
                        " ",
                        v.jsx("span", {
                          className:
                            "raza-chip raza-chip-success bonificacion-chip",
                          children: Y > 0 ? `+${Y}` : Y,
                        }),
                      ],
                    },
                    C
                  )
                ),
              }),
            ],
          });
    };
  return (
    ba.useEffect(() => {
      fetch("/StromRol/Razas.json")
        .then((p) => p.json())
        .then((p) => K(p.razas)),
        fetch("/StromRol/Clases.json")
          .then((p) => p.json())
          .then((p) => j(p.clases));
    }, []),
    ba.useEffect(() => {
      if (b)
        if (["SELOROK", "DEMONIOS"].includes(b.nombre.toUpperCase())) Nl(co(b));
        else if (O) {
          const p = {
            ...O,
            variacion_caracteristicas: Array.isArray(
              O.variacion_caracteristicas
            )
              ? O.variacion_caracteristicas
              : typeof O.variacion_caracteristicas == "string"
              ? [O.variacion_caracteristicas]
              : void 0,
          };
          Nl(co(b, p));
        } else Nl(null);
      else Nl(null);
    }, [b, O]),
    v.jsxs("div", {
      className: "ficha-container",
      children: [
        _ &&
          v.jsx("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "2rem 0",
            },
            children: v.jsx("img", {
              src: "/StromRol/logo.webp",
              alt: "Logo",
              style: { maxWidth: "320px", width: "100%", height: "auto" },
            }),
          }),
        v.jsx("h2", {
          className: "ficha-title",
          children: "Generador de Fichas",
        }),
        v.jsxs("div", {
          className: "ficha-select-group",
          children: [
            v.jsx("label", {
              htmlFor: "raza-select",
              className: "ficha-label",
              children: "Raza:",
            }),
            v.jsxs("select", {
              id: "raza-select",
              className: "ficha-select",
              value: b?.nombre || "",
              onChange: (p) => {
                const C = L.find((Y) => Y.nombre === p.target.value);
                R(C || null),
                  G(),
                  x(null),
                  C &&
                    ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                      C.nombre.toUpperCase()
                    ) &&
                    w(null);
              },
              children: [
                v.jsx("option", { value: "", children: "Elige una raza" }),
                L.map((p) =>
                  v.jsx(
                    "option",
                    { value: p.nombre, children: p.nombre.toUpperCase() },
                    p.nombre
                  )
                ),
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          className: "ficha-select-group",
          children: [
            v.jsx("label", {
              htmlFor: "clase-select",
              className: "ficha-label",
              children: "Clase:",
            }),
            v.jsxs("select", {
              id: "clase-select",
              className: "ficha-select",
              value: O?.nombre || "",
              onChange: (p) => {
                const C = J.find((Y) => Y.nombre === p.target.value);
                w(C || null), Rl({}), x(null), G();
              },
              disabled: !!(
                b &&
                ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                  b.nombre.toUpperCase()
                )
              ),
              children: [
                v.jsx("option", { value: "", children: "Elige una clase" }),
                J.map((p) =>
                  v.jsx(
                    "option",
                    { value: p.nombre, children: p.nombre.toUpperCase() },
                    p.nombre
                  )
                ),
              ],
            }),
          ],
        }),
        ul &&
          v.jsxs("div", {
            className: "ficha-resultado",
            children: [
              v.jsx("h3", {
                className: "ficha-resultado-title",
                children: "Dados que debe tirar el jugador:",
              }),
              v.jsx("ul", {
                className: "ficha-resultado-list",
                children: Object.entries(ul).map(([p, C]) =>
                  v.jsxs(
                    "li",
                    {
                      className: "ficha-resultado-item",
                      children: [
                        v.jsxs("b", {
                          className: "ficha-resultado-carac",
                          children: [p, ":"],
                        }),
                        " ",
                        v.jsx("span", {
                          className: "ficha-resultado-dado",
                          children: C,
                        }),
                        v.jsx("input", {
                          type: "number",
                          min: "1",
                          className: "ficha-resultado-input",
                          placeholder: "Tirada",
                          value: zl[p] || "",
                          onChange: (Y) => {
                            Rl(($) => ({ ...$, [p]: Y.target.value }));
                          },
                        }),
                      ],
                    },
                    p
                  )
                ),
              }),
              v.jsx("div", {
                className: "ficha-dadosmin2-group",
                children: v.jsxs("label", {
                  className: "ficha-dadosmin-label",
                  children: [
                    v.jsx("input", {
                      type: "checkbox",
                      checked: pa,
                      onChange: (p) => za(p.target.checked),
                      className: "ficha-dadosmin-checkbox",
                    }),
                    "Dados min. 2",
                  ],
                }),
              }),
              v.jsxs("div", {
                className: "ficha-botones-group",
                children: [
                  v.jsx("button", {
                    className: "ficha-calcular-btn",
                    onClick: la,
                    disabled: Object.keys(ul || {}).length === 0,
                    children: "Generar tiradas aleatorias",
                  }),
                  v.jsx("button", {
                    className: "ficha-habilidades-btn",
                    disabled:
                      Object.keys(ul || {}).length === 0 ||
                      Object.entries(ul || {}).some(([p]) => !zl[p]),
                    onClick: () => {
                      const p = parseInt(zl.Fuerza || "0", 10);
                      let C = "";
                      p >= 18 && p <= 23
                        ? (C = "+1")
                        : p >= 24 && p <= 30
                        ? (C = "+1D4")
                        : p >= 31 && p <= 38
                        ? (C = "+1D6")
                        : p >= 39 && p <= 45
                        ? (C = "+1D10")
                        : p >= 46
                        ? (C = "+2D6")
                        : (C = "Sin bonus");
                      const Y = parseInt(zl.Destreza || "0", 10),
                        $ = p + Y;
                      let dl = "NO TIENE";
                      O &&
                        [
                          "ARQUERO",
                          "CASACA AZUL",
                          "ILMIONARIO",
                          "GUARDABOSQUES",
                        ].some(
                          (Bl) => O.nombre.toUpperCase() === Bl.toUpperCase()
                        ) &&
                        ($ >= 0 && $ <= 24
                          ? (dl = "Nada")
                          : $ >= 25 && $ <= 40
                          ? (dl = "+1D4")
                          : $ >= 41 && $ <= 52
                          ? (dl = "+2D4")
                          : $ >= 53 && (dl = "2D4+1"));
                      const al = parseInt(zl.Inteligencia || "0", 10),
                        S = parseInt(zl.Constitución || "0", 10),
                        N = parseInt(zl.Poder || "0", 10),
                        H = parseInt(zl.Carisma || "0", 10),
                        tl = parseInt(zl.Tamaño || "0", 10);
                      let s = 0;
                      al >= 1 && al <= 10
                        ? (s = al)
                        : al >= 11 && al <= 18
                        ? (s = al + 20)
                        : al >= 19 && (s = al + 30);
                      const T = al + Y + 10,
                        M = Math.floor(S / 2) + al + N + H - 5,
                        D = Y * 2 + al + N - tl - 5,
                        B = al * 2 + Y + H - 15,
                        ll = al + Math.floor(p / 2) + N + Y - tl - 5,
                        Z = N + H + al + 40 - S;
                      x({
                        bonusCC: `Bonus de Fuerza CC: ${C}`,
                        bonusAA: `Bonus de Fuerza AA: ${dl}`,
                        conocimiento: s,
                        percepcion: T,
                        comunicacion: M,
                        agilidad: D,
                        manipulacion: B,
                        discrecion: ll,
                        saludMental: Z,
                        puntosVida: Math.max(1, S + tl - 12),
                      });
                    },
                    children: "Calcular habilidades",
                  }),
                ],
              }),
              O?.variacion_carac_info &&
                v.jsxs("div", {
                  className: "ficha-resultado-info",
                  children: [
                    v.jsx("b", { children: "Info adicional de dados:" }),
                    " ",
                    O.variacion_carac_info,
                  ],
                }),
            ],
          }),
        h &&
          v.jsx("div", {
            className: "raza-card",
            children: v.jsxs("div", {
              className: "raza-content",
              children: [
                v.jsx("h4", {
                  className: "raza-section-title",
                  children: "Resultados de habilidades",
                }),
                v.jsxs("div", {
                  className: "raza-list",
                  children: [
                    v.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        v.jsxs("span", {
                          className: "raza-bonus-name",
                          children: [h.bonusCC.split(":")[0], ":"],
                        }),
                        v.jsx("span", {
                          className: "raza-chip raza-chip-secondary",
                          children: h.bonusCC.split(":")[1],
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        v.jsxs("span", {
                          className: "raza-bonus-name",
                          children: [h.bonusAA.split(":")[0], ":"],
                        }),
                        v.jsx("span", {
                          className: "raza-chip raza-chip-secondary",
                          children: h.bonusAA.split(":")[1],
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        v.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Puntos de vida:",
                        }),
                        v.jsx("span", {
                          className: "raza-chip raza-chip-pv",
                          children: h.puntosVida,
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        v.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Conocimiento:",
                        }),
                        v.jsx("span", {
                          className: "raza-chip raza-chip-success",
                          children: h.conocimiento,
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        v.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Percepción:",
                        }),
                        v.jsx("span", {
                          className: "raza-chip raza-chip-success",
                          children: h.percepcion,
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        v.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Comunicación:",
                        }),
                        v.jsx("span", {
                          className: "raza-chip raza-chip-success",
                          children: h.comunicacion,
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        v.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Agilidad:",
                        }),
                        v.jsx("span", {
                          className: "raza-chip raza-chip-success",
                          children: h.agilidad,
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        v.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Manipulación:",
                        }),
                        v.jsx("span", {
                          className: "raza-chip raza-chip-success",
                          children: h.manipulacion,
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        v.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Discreción:",
                        }),
                        v.jsx("span", {
                          className: "raza-chip raza-chip-success",
                          children: h.discrecion,
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        v.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Salud Mental:",
                        }),
                        v.jsx("span", {
                          className: "raza-chip raza-chip-mental",
                          children: h.saludMental,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        Jl(),
        b &&
        ["SELOROK", "DEMONIO", "SELOROKS", "DEMONIOS"].includes(
          b.nombre.toUpperCase()
        )
          ? null
          : Ll(),
        nl(),
      ],
    })
  );
}
Xh.createRoot(document.getElementById("root")).render(
  v.jsx(ba.StrictMode, { children: v.jsx(Lh, {}) })
);
