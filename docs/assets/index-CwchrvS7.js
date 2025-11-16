(function () {
  const L = document.createElement("link").relList;
  if (L && L.supports && L.supports("modulepreload")) return;
  for (const x of document.querySelectorAll('link[rel="modulepreload"]')) m(x);
  new MutationObserver((x) => {
    for (const U of x)
      if (U.type === "childList")
        for (const X of U.addedNodes)
          X.tagName === "LINK" && X.rel === "modulepreload" && m(X);
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
  ju = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed;
function C0() {
  if (ed) return ju;
  ed = 1;
  var O = Symbol.for("react.transitional.element"),
    L = Symbol.for("react.fragment");
  function B(m, x, U) {
    var X = null;
    if (
      (U !== void 0 && (X = "" + U),
      x.key !== void 0 && (X = "" + x.key),
      "key" in x)
    ) {
      U = {};
      for (var ll in x) ll !== "key" && (U[ll] = x[ll]);
    } else U = x;
    return (
      (x = U.ref),
      { $$typeof: O, type: m, key: X, ref: x !== void 0 ? x : null, props: U }
    );
  }
  return (ju.Fragment = L), (ju.jsx = B), (ju.jsxs = B), ju;
}
var ud;
function q0() {
  return ud || ((ud = 1), (nf.exports = C0())), nf.exports;
}
var o = q0(),
  cf = { exports: {} },
  w = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd;
function B0() {
  if (nd) return w;
  nd = 1;
  var O = Symbol.for("react.transitional.element"),
    L = Symbol.for("react.portal"),
    B = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    x = Symbol.for("react.profiler"),
    U = Symbol.for("react.consumer"),
    X = Symbol.for("react.context"),
    ll = Symbol.for("react.forward_ref"),
    C = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    q = Symbol.for("react.lazy"),
    k = Symbol.iterator;
  function al(s) {
    return s === null || typeof s != "object"
      ? null
      : ((s = (k && s[k]) || s["@@iterator"]),
        typeof s == "function" ? s : null);
  }
  var cl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Al = Object.assign,
    nl = {};
  function Ml(s, _, d) {
    (this.props = s),
      (this.context = _),
      (this.refs = nl),
      (this.updater = d || cl);
  }
  (Ml.prototype.isReactComponent = {}),
    (Ml.prototype.setState = function (s, _) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, s, _, "setState");
    }),
    (Ml.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    });
  function $() {}
  $.prototype = Ml.prototype;
  function jl(s, _, d) {
    (this.props = s),
      (this.context = _),
      (this.refs = nl),
      (this.updater = d || cl);
  }
  var D = (jl.prototype = new $());
  (D.constructor = jl), Al(D, Ml.prototype), (D.isPureReactComponent = !0);
  var kl = Array.isArray,
    K = { H: null, A: null, T: null, S: null, V: null },
    Vl = Object.prototype.hasOwnProperty;
  function El(s, _, d, S, T, R) {
    return (
      (d = R.ref),
      { $$typeof: O, type: s, key: _, ref: d !== void 0 ? d : null, props: R }
    );
  }
  function Xl(s, _) {
    return El(s.type, _, void 0, void 0, void 0, s.props);
  }
  function pl(s) {
    return typeof s == "object" && s !== null && s.$$typeof === O;
  }
  function ua(s) {
    var _ = { "=": "=0", ":": "=2" };
    return (
      "$" +
      s.replace(/[=:]/g, function (d) {
        return _[d];
      })
    );
  }
  var ma = /\/+/g;
  function Rl(s, _) {
    return typeof s == "object" && s !== null && s.key != null
      ? ua("" + s.key)
      : _.toString(36);
  }
  function va() {}
  function Da(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (
          (typeof s.status == "string"
            ? s.then(va, va)
            : ((s.status = "pending"),
              s.then(
                function (_) {
                  s.status === "pending" &&
                    ((s.status = "fulfilled"), (s.value = _));
                },
                function (_) {
                  s.status === "pending" &&
                    ((s.status = "rejected"), (s.reason = _));
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
  function Ul(s, _, d, S, T) {
    var R = typeof s;
    (R === "undefined" || R === "boolean") && (s = null);
    var j = !1;
    if (s === null) j = !0;
    else
      switch (R) {
        case "bigint":
        case "string":
        case "number":
          j = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case O:
            case L:
              j = !0;
              break;
            case q:
              return (j = s._init), Ul(j(s._payload), _, d, S, T);
          }
      }
    if (j)
      return (
        (T = T(s)),
        (j = S === "" ? "." + Rl(s, 0) : S),
        kl(T)
          ? ((d = ""),
            j != null && (d = j.replace(ma, "$&/") + "/"),
            Ul(T, _, d, "", function (fl) {
              return fl;
            }))
          : T != null &&
            (pl(T) &&
              (T = Xl(
                T,
                d +
                  (T.key == null || (s && s.key === T.key)
                    ? ""
                    : ("" + T.key).replace(ma, "$&/") + "/") +
                  j
              )),
            _.push(T)),
        1
      );
    j = 0;
    var gl = S === "" ? "." : S + ":";
    if (kl(s))
      for (var J = 0; J < s.length; J++)
        (S = s[J]), (R = gl + Rl(S, J)), (j += Ul(S, _, d, R, T));
    else if (((J = al(s)), typeof J == "function"))
      for (s = J.call(s), J = 0; !(S = s.next()).done; )
        (S = S.value), (R = gl + Rl(S, J++)), (j += Ul(S, _, d, R, T));
    else if (R === "object") {
      if (typeof s.then == "function") return Ul(Da(s), _, d, S, T);
      throw (
        ((_ = String(s)),
        Error(
          "Objects are not valid as a React child (found: " +
            (_ === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : _) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return j;
  }
  function z(s, _, d) {
    if (s == null) return s;
    var S = [],
      T = 0;
    return (
      Ul(s, S, "", "", function (R) {
        return _.call(d, R, T++);
      }),
      S
    );
  }
  function M(s) {
    if (s._status === -1) {
      var _ = s._result;
      (_ = _()),
        _.then(
          function (d) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 1), (s._result = d));
          },
          function (d) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 2), (s._result = d));
          }
        ),
        s._status === -1 && ((s._status = 0), (s._result = _));
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var G =
    typeof reportError == "function"
      ? reportError
      : function (s) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var _ = new window.ErrorEvent("error", {
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
            if (!window.dispatchEvent(_)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", s);
            return;
          }
          console.error(s);
        };
  function il() {}
  return (
    (w.Children = {
      map: z,
      forEach: function (s, _, d) {
        z(
          s,
          function () {
            _.apply(this, arguments);
          },
          d
        );
      },
      count: function (s) {
        var _ = 0;
        return (
          z(s, function () {
            _++;
          }),
          _
        );
      },
      toArray: function (s) {
        return (
          z(s, function (_) {
            return _;
          }) || []
        );
      },
      only: function (s) {
        if (!pl(s))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return s;
      },
    }),
    (w.Component = Ml),
    (w.Fragment = B),
    (w.Profiler = x),
    (w.PureComponent = jl),
    (w.StrictMode = m),
    (w.Suspense = C),
    (w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (w.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (s) {
        return K.H.useMemoCache(s);
      },
    }),
    (w.cache = function (s) {
      return function () {
        return s.apply(null, arguments);
      };
    }),
    (w.cloneElement = function (s, _, d) {
      if (s == null)
        throw Error(
          "The argument must be a React element, but you passed " + s + "."
        );
      var S = Al({}, s.props),
        T = s.key,
        R = void 0;
      if (_ != null)
        for (j in (_.ref !== void 0 && (R = void 0),
        _.key !== void 0 && (T = "" + _.key),
        _))
          !Vl.call(_, j) ||
            j === "key" ||
            j === "__self" ||
            j === "__source" ||
            (j === "ref" && _.ref === void 0) ||
            (S[j] = _[j]);
      var j = arguments.length - 2;
      if (j === 1) S.children = d;
      else if (1 < j) {
        for (var gl = Array(j), J = 0; J < j; J++) gl[J] = arguments[J + 2];
        S.children = gl;
      }
      return El(s.type, T, void 0, void 0, R, S);
    }),
    (w.createContext = function (s) {
      return (
        (s = {
          $$typeof: X,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: U, _context: s }),
        s
      );
    }),
    (w.createElement = function (s, _, d) {
      var S,
        T = {},
        R = null;
      if (_ != null)
        for (S in (_.key !== void 0 && (R = "" + _.key), _))
          Vl.call(_, S) &&
            S !== "key" &&
            S !== "__self" &&
            S !== "__source" &&
            (T[S] = _[S]);
      var j = arguments.length - 2;
      if (j === 1) T.children = d;
      else if (1 < j) {
        for (var gl = Array(j), J = 0; J < j; J++) gl[J] = arguments[J + 2];
        T.children = gl;
      }
      if (s && s.defaultProps)
        for (S in ((j = s.defaultProps), j)) T[S] === void 0 && (T[S] = j[S]);
      return El(s, R, void 0, void 0, null, T);
    }),
    (w.createRef = function () {
      return { current: null };
    }),
    (w.forwardRef = function (s) {
      return { $$typeof: ll, render: s };
    }),
    (w.isValidElement = pl),
    (w.lazy = function (s) {
      return { $$typeof: q, _payload: { _status: -1, _result: s }, _init: M };
    }),
    (w.memo = function (s, _) {
      return { $$typeof: E, type: s, compare: _ === void 0 ? null : _ };
    }),
    (w.startTransition = function (s) {
      var _ = K.T,
        d = {};
      K.T = d;
      try {
        var S = s(),
          T = K.S;
        T !== null && T(d, S),
          typeof S == "object" &&
            S !== null &&
            typeof S.then == "function" &&
            S.then(il, G);
      } catch (R) {
        G(R);
      } finally {
        K.T = _;
      }
    }),
    (w.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (w.use = function (s) {
      return K.H.use(s);
    }),
    (w.useActionState = function (s, _, d) {
      return K.H.useActionState(s, _, d);
    }),
    (w.useCallback = function (s, _) {
      return K.H.useCallback(s, _);
    }),
    (w.useContext = function (s) {
      return K.H.useContext(s);
    }),
    (w.useDebugValue = function () {}),
    (w.useDeferredValue = function (s, _) {
      return K.H.useDeferredValue(s, _);
    }),
    (w.useEffect = function (s, _, d) {
      var S = K.H;
      if (typeof d == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return S.useEffect(s, _);
    }),
    (w.useId = function () {
      return K.H.useId();
    }),
    (w.useImperativeHandle = function (s, _, d) {
      return K.H.useImperativeHandle(s, _, d);
    }),
    (w.useInsertionEffect = function (s, _) {
      return K.H.useInsertionEffect(s, _);
    }),
    (w.useLayoutEffect = function (s, _) {
      return K.H.useLayoutEffect(s, _);
    }),
    (w.useMemo = function (s, _) {
      return K.H.useMemo(s, _);
    }),
    (w.useOptimistic = function (s, _) {
      return K.H.useOptimistic(s, _);
    }),
    (w.useReducer = function (s, _, d) {
      return K.H.useReducer(s, _, d);
    }),
    (w.useRef = function (s) {
      return K.H.useRef(s);
    }),
    (w.useState = function (s) {
      return K.H.useState(s);
    }),
    (w.useSyncExternalStore = function (s, _, d) {
      return K.H.useSyncExternalStore(s, _, d);
    }),
    (w.useTransition = function () {
      return K.H.useTransition();
    }),
    (w.version = "19.1.1"),
    w
  );
}
var cd;
function df() {
  return cd || ((cd = 1), (cf.exports = B0())), cf.exports;
}
var Yl = df(),
  ff = { exports: {} },
  Ru = {},
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
function Y0() {
  return (
    id ||
      ((id = 1),
      (function (O) {
        function L(z, M) {
          var G = z.length;
          z.push(M);
          l: for (; 0 < G; ) {
            var il = (G - 1) >>> 1,
              s = z[il];
            if (0 < x(s, M)) (z[il] = M), (z[G] = s), (G = il);
            else break l;
          }
        }
        function B(z) {
          return z.length === 0 ? null : z[0];
        }
        function m(z) {
          if (z.length === 0) return null;
          var M = z[0],
            G = z.pop();
          if (G !== M) {
            z[0] = G;
            l: for (var il = 0, s = z.length, _ = s >>> 1; il < _; ) {
              var d = 2 * (il + 1) - 1,
                S = z[d],
                T = d + 1,
                R = z[T];
              if (0 > x(S, G))
                T < s && 0 > x(R, S)
                  ? ((z[il] = R), (z[T] = G), (il = T))
                  : ((z[il] = S), (z[d] = G), (il = d));
              else if (T < s && 0 > x(R, G)) (z[il] = R), (z[T] = G), (il = T);
              else break l;
            }
          }
          return M;
        }
        function x(z, M) {
          var G = z.sortIndex - M.sortIndex;
          return G !== 0 ? G : z.id - M.id;
        }
        if (
          ((O.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var U = performance;
          O.unstable_now = function () {
            return U.now();
          };
        } else {
          var X = Date,
            ll = X.now();
          O.unstable_now = function () {
            return X.now() - ll;
          };
        }
        var C = [],
          E = [],
          q = 1,
          k = null,
          al = 3,
          cl = !1,
          Al = !1,
          nl = !1,
          Ml = !1,
          $ = typeof setTimeout == "function" ? setTimeout : null,
          jl = typeof clearTimeout == "function" ? clearTimeout : null,
          D = typeof setImmediate < "u" ? setImmediate : null;
        function kl(z) {
          for (var M = B(E); M !== null; ) {
            if (M.callback === null) m(E);
            else if (M.startTime <= z)
              m(E), (M.sortIndex = M.expirationTime), L(C, M);
            else break;
            M = B(E);
          }
        }
        function K(z) {
          if (((nl = !1), kl(z), !Al))
            if (B(C) !== null) (Al = !0), Vl || ((Vl = !0), Rl());
            else {
              var M = B(E);
              M !== null && Ul(K, M.startTime - z);
            }
        }
        var Vl = !1,
          El = -1,
          Xl = 5,
          pl = -1;
        function ua() {
          return Ml ? !0 : !(O.unstable_now() - pl < Xl);
        }
        function ma() {
          if (((Ml = !1), Vl)) {
            var z = O.unstable_now();
            pl = z;
            var M = !0;
            try {
              l: {
                (Al = !1), nl && ((nl = !1), jl(El), (El = -1)), (cl = !0);
                var G = al;
                try {
                  a: {
                    for (
                      kl(z), k = B(C);
                      k !== null && !(k.expirationTime > z && ua());

                    ) {
                      var il = k.callback;
                      if (typeof il == "function") {
                        (k.callback = null), (al = k.priorityLevel);
                        var s = il(k.expirationTime <= z);
                        if (((z = O.unstable_now()), typeof s == "function")) {
                          (k.callback = s), kl(z), (M = !0);
                          break a;
                        }
                        k === B(C) && m(C), kl(z);
                      } else m(C);
                      k = B(C);
                    }
                    if (k !== null) M = !0;
                    else {
                      var _ = B(E);
                      _ !== null && Ul(K, _.startTime - z), (M = !1);
                    }
                  }
                  break l;
                } finally {
                  (k = null), (al = G), (cl = !1);
                }
                M = void 0;
              }
            } finally {
              M ? Rl() : (Vl = !1);
            }
          }
        }
        var Rl;
        if (typeof D == "function")
          Rl = function () {
            D(ma);
          };
        else if (typeof MessageChannel < "u") {
          var va = new MessageChannel(),
            Da = va.port2;
          (va.port1.onmessage = ma),
            (Rl = function () {
              Da.postMessage(null);
            });
        } else
          Rl = function () {
            $(ma, 0);
          };
        function Ul(z, M) {
          El = $(function () {
            z(O.unstable_now());
          }, M);
        }
        (O.unstable_IdlePriority = 5),
          (O.unstable_ImmediatePriority = 1),
          (O.unstable_LowPriority = 4),
          (O.unstable_NormalPriority = 3),
          (O.unstable_Profiling = null),
          (O.unstable_UserBlockingPriority = 2),
          (O.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (O.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Xl = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (O.unstable_getCurrentPriorityLevel = function () {
            return al;
          }),
          (O.unstable_next = function (z) {
            switch (al) {
              case 1:
              case 2:
              case 3:
                var M = 3;
                break;
              default:
                M = al;
            }
            var G = al;
            al = M;
            try {
              return z();
            } finally {
              al = G;
            }
          }),
          (O.unstable_requestPaint = function () {
            Ml = !0;
          }),
          (O.unstable_runWithPriority = function (z, M) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var G = al;
            al = z;
            try {
              return M();
            } finally {
              al = G;
            }
          }),
          (O.unstable_scheduleCallback = function (z, M, G) {
            var il = O.unstable_now();
            switch (
              (typeof G == "object" && G !== null
                ? ((G = G.delay),
                  (G = typeof G == "number" && 0 < G ? il + G : il))
                : (G = il),
              z)
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
              (s = G + s),
              (z = {
                id: q++,
                callback: M,
                priorityLevel: z,
                startTime: G,
                expirationTime: s,
                sortIndex: -1,
              }),
              G > il
                ? ((z.sortIndex = G),
                  L(E, z),
                  B(C) === null &&
                    z === B(E) &&
                    (nl ? (jl(El), (El = -1)) : (nl = !0), Ul(K, G - il)))
                : ((z.sortIndex = s),
                  L(C, z),
                  Al || cl || ((Al = !0), Vl || ((Vl = !0), Rl()))),
              z
            );
          }),
          (O.unstable_shouldYield = ua),
          (O.unstable_wrapCallback = function (z) {
            var M = al;
            return function () {
              var G = al;
              al = M;
              try {
                return z.apply(this, arguments);
              } finally {
                al = G;
              }
            };
          });
      })(rf)),
    rf
  );
}
var fd;
function X0() {
  return fd || ((fd = 1), (sf.exports = Y0())), sf.exports;
}
var of = { exports: {} },
  wl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sd;
function G0() {
  if (sd) return wl;
  sd = 1;
  var O = df();
  function L(C) {
    var E = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var q = 2; q < arguments.length; q++)
        E += "&args[]=" + encodeURIComponent(arguments[q]);
    }
    return (
      "Minified React error #" +
      C +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function B() {}
  var m = {
      d: {
        f: B,
        r: function () {
          throw Error(L(522));
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
  function U(C, E, q) {
    var k =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: x,
      key: k == null ? null : "" + k,
      children: C,
      containerInfo: E,
      implementation: q,
    };
  }
  var X = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ll(C, E) {
    if (C === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (wl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m),
    (wl.createPortal = function (C, E) {
      var q =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(L(299));
      return U(C, E, null, q);
    }),
    (wl.flushSync = function (C) {
      var E = X.T,
        q = m.p;
      try {
        if (((X.T = null), (m.p = 2), C)) return C();
      } finally {
        (X.T = E), (m.p = q), m.d.f();
      }
    }),
    (wl.preconnect = function (C, E) {
      typeof C == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == "string"
                ? E === "use-credentials"
                  ? E
                  : ""
                : void 0))
          : (E = null),
        m.d.C(C, E));
    }),
    (wl.prefetchDNS = function (C) {
      typeof C == "string" && m.d.D(C);
    }),
    (wl.preinit = function (C, E) {
      if (typeof C == "string" && E && typeof E.as == "string") {
        var q = E.as,
          k = ll(q, E.crossOrigin),
          al = typeof E.integrity == "string" ? E.integrity : void 0,
          cl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        q === "style"
          ? m.d.S(C, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: k,
              integrity: al,
              fetchPriority: cl,
            })
          : q === "script" &&
            m.d.X(C, {
              crossOrigin: k,
              integrity: al,
              fetchPriority: cl,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (wl.preinitModule = function (C, E) {
      if (typeof C == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var q = ll(E.as, E.crossOrigin);
            m.d.M(C, {
              crossOrigin: q,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && m.d.M(C);
    }),
    (wl.preload = function (C, E) {
      if (
        typeof C == "string" &&
        typeof E == "object" &&
        E !== null &&
        typeof E.as == "string"
      ) {
        var q = E.as,
          k = ll(q, E.crossOrigin);
        m.d.L(C, q, {
          crossOrigin: k,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    (wl.preloadModule = function (C, E) {
      if (typeof C == "string")
        if (E) {
          var q = ll(E.as, E.crossOrigin);
          m.d.m(C, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: q,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else m.d.m(C);
    }),
    (wl.requestFormReset = function (C) {
      m.d.r(C);
    }),
    (wl.unstable_batchedUpdates = function (C, E) {
      return C(E);
    }),
    (wl.useFormState = function (C, E, q) {
      return X.H.useFormState(C, E, q);
    }),
    (wl.useFormStatus = function () {
      return X.H.useHostTransitionStatus();
    }),
    (wl.version = "19.1.1"),
    wl
  );
}
var rd;
function Q0() {
  if (rd) return of.exports;
  rd = 1;
  function O() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (L) {
        console.error(L);
      }
  }
  return O(), (of.exports = G0()), of.exports;
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
function Z0() {
  if (od) return Ru;
  od = 1;
  var O = X0(),
    L = df(),
    B = Q0();
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
  function x(l) {
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
  function X(l) {
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
  function E(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((a = E(l)), a !== null)) return a;
      l = l.sibling;
    }
    return null;
  }
  var q = Object.assign,
    k = Symbol.for("react.element"),
    al = Symbol.for("react.transitional.element"),
    cl = Symbol.for("react.portal"),
    Al = Symbol.for("react.fragment"),
    nl = Symbol.for("react.strict_mode"),
    Ml = Symbol.for("react.profiler"),
    $ = Symbol.for("react.provider"),
    jl = Symbol.for("react.consumer"),
    D = Symbol.for("react.context"),
    kl = Symbol.for("react.forward_ref"),
    K = Symbol.for("react.suspense"),
    Vl = Symbol.for("react.suspense_list"),
    El = Symbol.for("react.memo"),
    Xl = Symbol.for("react.lazy"),
    pl = Symbol.for("react.activity"),
    ua = Symbol.for("react.memo_cache_sentinel"),
    ma = Symbol.iterator;
  function Rl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (ma && l[ma]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var va = Symbol.for("react.client.reference");
  function Da(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === va ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Al:
        return "Fragment";
      case Ml:
        return "Profiler";
      case nl:
        return "StrictMode";
      case K:
        return "Suspense";
      case Vl:
        return "SuspenseList";
      case pl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case cl:
          return "Portal";
        case D:
          return (l.displayName || "Context") + ".Provider";
        case jl:
          return (l._context.displayName || "Context") + ".Consumer";
        case kl:
          var a = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = a.displayName || a.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case El:
          return (
            (a = l.displayName || null), a !== null ? a : Da(l.type) || "Memo"
          );
        case Xl:
          (a = l._payload), (l = l._init);
          try {
            return Da(l(a));
          } catch {}
      }
    return null;
  }
  var Ul = Array.isArray,
    z = L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    M = B.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = { pending: !1, data: null, method: null, action: null },
    il = [],
    s = -1;
  function _(l) {
    return { current: l };
  }
  function d(l) {
    0 > s || ((l.current = il[s]), (il[s] = null), s--);
  }
  function S(l, a) {
    s++, (il[s] = l.current), (l.current = a);
  }
  var T = _(null),
    R = _(null),
    j = _(null),
    gl = _(null);
  function J(l, a) {
    switch ((S(j, a), S(R, l), S(T, null), a.nodeType)) {
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
    d(T), S(T, l);
  }
  function fl() {
    d(T), d(R), d(j);
  }
  function Fl(l) {
    l.memoizedState !== null && S(gl, l);
    var a = T.current,
      t = Ro(a, l.type);
    a !== t && (S(R, l), S(T, t));
  }
  function Ll(l) {
    R.current === l && (d(T), d(R)),
      gl.current === l && (d(gl), (_u._currentValue = G));
  }
  var $l = Object.prototype.hasOwnProperty,
    ya = O.unstable_scheduleCallback,
    xa = O.unstable_cancelCallback,
    Me = O.unstable_shouldYield,
    De = O.unstable_requestPaint,
    Il = O.unstable_now,
    xe = O.unstable_getCurrentPriorityLevel,
    Gt = O.unstable_ImmediatePriority,
    Qt = O.unstable_UserBlockingPriority,
    Zt = O.unstable_NormalPriority,
    qa = O.unstable_LowPriority,
    je = O.unstable_IdlePriority,
    Re = O.log,
    Ue = O.unstable_setDisableYieldValue,
    He = null,
    na = null;
  function Ia(l) {
    if (
      (typeof Re == "function" && Ue(l),
      na && typeof na.setStrictMode == "function")
    )
      try {
        na.setStrictMode(He, l);
      } catch {}
  }
  var ca = Math.clz32 ? Math.clz32 : Ad,
    Sd = Math.log,
    zd = Math.LN2;
  function Ad(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((Sd(l) / zd) | 0)) | 0;
  }
  var Uu = 256,
    Hu = 4194304;
  function Et(l) {
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
            ? (u = Et(e))
            : ((c &= i),
              c !== 0
                ? (u = Et(c))
                : t || ((t = i & ~l), t !== 0 && (u = Et(t)))))
        : ((i = e & ~n),
          i !== 0
            ? (u = Et(i))
            : c !== 0
            ? (u = Et(c))
            : t || ((t = e & ~l), t !== 0 && (u = Et(t)))),
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
  function Ce(l, a) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & a) === 0;
  }
  function Ed(l, a) {
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
  function qe(l, a) {
    (l.pendingLanes |= a),
      a !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function pd(l, a, t, e, u, n) {
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
      var A = 31 - ca(t),
        N = 1 << A;
      (i[A] = 0), (f[A] = -1);
      var g = y[A];
      if (g !== null)
        for (y[A] = null, A = 0; A < g.length; A++) {
          var b = g[A];
          b !== null && (b.lane &= -536870913);
        }
      t &= ~N;
    }
    e !== 0 && vf(l, e, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~a));
  }
  function vf(l, a, t) {
    (l.pendingLanes |= a), (l.suspendedLanes &= ~a);
    var e = 31 - ca(a);
    (l.entangledLanes |= a),
      (l.entanglements[e] = l.entanglements[e] | 1073741824 | (t & 4194090));
  }
  function yf(l, a) {
    var t = (l.entangledLanes |= a);
    for (l = l.entanglements; t; ) {
      var e = 31 - ca(t),
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
    var l = M.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Fo(l.type));
  }
  function Nd(l, a) {
    var t = M.p;
    try {
      return (M.p = l), a();
    } finally {
      M.p = t;
    }
  }
  var Pa = Math.random().toString(36).slice(2),
    Kl = "__reactFiber$" + Pa,
    Pl = "__reactProps$" + Pa,
    Vt = "__reactContainer$" + Pa,
    Fn = "__reactEvents$" + Pa,
    Td = "__reactListeners$" + Pa,
    _d = "__reactHandles$" + Pa,
    bf = "__reactResources$" + Pa,
    Be = "__reactMarker$" + Pa;
  function In(l) {
    delete l[Kl], delete l[Pl], delete l[Fn], delete l[Td], delete l[_d];
  }
  function Lt(l) {
    var a = l[Kl];
    if (a) return a;
    for (var t = l.parentNode; t; ) {
      if ((a = t[Vt] || t[Kl])) {
        if (
          ((t = a.alternate),
          a.child !== null || (t !== null && t.child !== null))
        )
          for (l = qo(l); l !== null; ) {
            if ((t = l[Kl])) return t;
            l = qo(l);
          }
        return a;
      }
      (l = t), (t = l.parentNode);
    }
    return null;
  }
  function Kt(l) {
    if ((l = l[Kl] || l[Vt])) {
      var a = l.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3)
        return l;
    }
    return null;
  }
  function Ye(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l.stateNode;
    throw Error(m(33));
  }
  function Jt(l) {
    var a = l[bf];
    return (
      a ||
        (a = l[bf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      a
    );
  }
  function Hl(l) {
    l[Be] = !0;
  }
  var Sf = new Set(),
    zf = {};
  function pt(l, a) {
    wt(l, a), wt(l + "Capture", a);
  }
  function wt(l, a) {
    for (zf[l] = a, l = 0; l < a.length; l++) Sf.add(a[l]);
  }
  var Od = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Af = {},
    Ef = {};
  function Md(l) {
    return $l.call(Ef, l)
      ? !0
      : $l.call(Af, l)
      ? !1
      : Od.test(l)
      ? (Ef[l] = !0)
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
  function Ba(l, a, t, e) {
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
  var Pn, pf;
  function $t(l) {
    if (Pn === void 0)
      try {
        throw Error();
      } catch (t) {
        var a = t.stack.trim().match(/\n( *(at )?)/);
        (Pn = (a && a[1]) || ""),
          (pf =
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
      pf
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
              var N = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(N.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(N, []);
                } catch (b) {
                  var g = b;
                }
                Reflect.construct(l, [], N);
              } else {
                try {
                  N.call();
                } catch (b) {
                  g = b;
                }
                l.call(N.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                g = b;
              }
              (N = l()) &&
                typeof N.catch == "function" &&
                N.catch(function () {});
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
                  var A =
                    `
` + f[e].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      A.includes("<anonymous>") &&
                      (A = A.replace("<anonymous>", l.displayName)),
                    A
                  );
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      (lc = !1), (Error.prepareStackTrace = t);
    }
    return (t = l ? l.displayName || l.name : "") ? $t(t) : "";
  }
  function Dd(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return $t(l.type);
      case 16:
        return $t("Lazy");
      case 13:
        return $t("Suspense");
      case 19:
        return $t("SuspenseList");
      case 0:
      case 15:
        return ac(l.type, !1);
      case 11:
        return ac(l.type.render, !1);
      case 1:
        return ac(l.type, !0);
      case 31:
        return $t("Activity");
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
  function ga(l) {
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
  function ba(l) {
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
            (l.value = "" + ga(a))
          : l.value !== "" + ga(a) && (l.value = "" + ga(a))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      a != null
        ? ec(l, c, ga(a))
        : t != null
        ? ec(l, c, ga(t))
        : e != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.name = "" + ga(i))
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
      (t = t != null ? "" + ga(t) : ""),
        (a = a != null ? "" + ga(a) : t),
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
  function Wt(l, a, t, e) {
    if (((l = l.options), a)) {
      a = {};
      for (var u = 0; u < t.length; u++) a["$" + t[u]] = !0;
      for (t = 0; t < l.length; t++)
        (u = a.hasOwnProperty("$" + l[t].value)),
          l[t].selected !== u && (l[t].selected = u),
          u && e && (l[t].defaultSelected = !0);
    } else {
      for (t = "" + ga(t), a = null, u = 0; u < l.length; u++) {
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
      ((a = "" + ga(a)), a !== l.value && (l.value = a), t == null)
    ) {
      l.defaultValue !== a && (l.defaultValue = a);
      return;
    }
    l.defaultValue = t != null ? "" + ga(t) : "";
  }
  function Df(l, a, t, e) {
    if (a == null) {
      if (e != null) {
        if (t != null) throw Error(m(92));
        if (Ul(e)) {
          if (1 < e.length) throw Error(m(93));
          e = e[0];
        }
        t = e;
      }
      t == null && (t = ""), (a = t);
    }
    (t = ga(a)),
      (l.defaultValue = t),
      (e = l.textContent),
      e === t && e !== "" && e !== null && (l.value = e);
  }
  function kt(l, a) {
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
  var Ft = null,
    It = null;
  function Rf(l) {
    var a = Kt(l);
    if (a && (l = a.stateNode)) {
      var t = l[Pl] || null;
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
                'input[name="' + ba("" + a) + '"][type="radio"]'
              ),
                a = 0;
              a < t.length;
              a++
            ) {
              var e = t[a];
              if (e !== l && e.form === l.form) {
                var u = e[Pl] || null;
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
          (a = t.value), a != null && Wt(l, !!t.multiple, a, !1);
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
        (Ft !== null || It !== null) &&
          (_n(), Ft && ((a = Ft), (l = It), (It = Ft = null), Rf(a), l)))
      )
        for (a = 0; a < l.length; a++) Rf(l[a]);
    }
  }
  function Xe(l, a) {
    var t = l.stateNode;
    if (t === null) return null;
    var e = t[Pl] || null;
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
  var Ya = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    fc = !1;
  if (Ya)
    try {
      var Ge = {};
      Object.defineProperty(Ge, "passive", {
        get: function () {
          fc = !0;
        },
      }),
        window.addEventListener("test", Ge, Ge),
        window.removeEventListener("test", Ge, Ge);
    } catch {
      fc = !1;
    }
  var lt = null,
    sc = null,
    Qu = null;
  function Hf() {
    if (Qu) return Qu;
    var l,
      a = sc,
      t = a.length,
      e,
      u = "value" in lt ? lt.value : lt.textContent,
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
  function la(l) {
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
  var Nt = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Lu = la(Nt),
    Qe = q({}, Nt, { view: 0, detail: 0 }),
    Cd = la(Qe),
    rc,
    oc,
    Ze,
    Ku = q({}, Qe, {
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
          : (l !== Ze &&
              (Ze && l.type === "mousemove"
                ? ((rc = l.screenX - Ze.screenX), (oc = l.screenY - Ze.screenY))
                : (oc = rc = 0),
              (Ze = l)),
            rc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : oc;
      },
    }),
    qf = la(Ku),
    qd = q({}, Ku, { dataTransfer: 0 }),
    Bd = la(qd),
    Yd = q({}, Qe, { relatedTarget: 0 }),
    dc = la(Yd),
    Xd = q({}, Nt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Gd = la(Xd),
    Qd = q({}, Nt, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Zd = la(Qd),
    Vd = q({}, Nt, { data: 0 }),
    Bf = la(Vd),
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
  var $d = q({}, Qe, {
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
    Wd = la($d),
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
    Yf = la(kd),
    Fd = q({}, Qe, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hc,
    }),
    Id = la(Fd),
    Pd = q({}, Nt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lh = la(Pd),
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
    th = la(ah),
    eh = q({}, Nt, { newState: 0, oldState: 0 }),
    uh = la(eh),
    nh = [9, 13, 27, 32],
    mc = Ya && "CompositionEvent" in window,
    Ve = null;
  Ya && "documentMode" in document && (Ve = document.documentMode);
  var ch = Ya && "TextEvent" in window && !Ve,
    Xf = Ya && (!mc || (Ve && 8 < Ve && 11 >= Ve)),
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
  var Pt = !1;
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
    if (Pt)
      return l === "compositionend" || (!mc && Zf(l, a))
        ? ((l = Hf()), (Qu = sc = lt = null), (Pt = !1), l)
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
    Ft ? (It ? It.push(e) : (It = [e])) : (Ft = e),
      (a = Rn(a, "onChange")),
      0 < a.length &&
        ((t = new Lu("onChange", "change", null, t, e)),
        l.push({ event: t, listeners: a }));
  }
  var Le = null,
    Ke = null;
  function rh(l) {
    _o(l, 0);
  }
  function Ju(l) {
    var a = Ye(l);
    if (_f(a)) return l;
  }
  function Jf(l, a) {
    if (l === "change") return a;
  }
  var wf = !1;
  if (Ya) {
    var vc;
    if (Ya) {
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
    Le && (Le.detachEvent("onpropertychange", kf), (Ke = Le = null));
  }
  function kf(l) {
    if (l.propertyName === "value" && Ju(Ke)) {
      var a = [];
      Kf(a, Ke, l, cc(l)), Uf(rh, a);
    }
  }
  function oh(l, a, t) {
    l === "focusin"
      ? (Wf(), (Le = a), (Ke = t), Le.attachEvent("onpropertychange", kf))
      : l === "focusout" && Wf();
  }
  function dh(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ju(Ke);
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
  var ia = typeof Object.is == "function" ? Object.is : vh;
  function Je(l, a) {
    if (ia(l, a)) return !0;
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
      if (!$l.call(a, u) || !ia(l[u], a[u])) return !1;
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
  var yh = Ya && "documentMode" in document && 11 >= document.documentMode,
    le = null,
    bc = null,
    we = null,
    Sc = !1;
  function as(l, a, t) {
    var e =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    Sc ||
      le == null ||
      le !== Xu(e) ||
      ((e = le),
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
      (we && Je(we, e)) ||
        ((we = e),
        (e = Rn(bc, "onSelect")),
        0 < e.length &&
          ((a = new Lu("onSelect", "select", null, a, t)),
          l.push({ event: a, listeners: e }),
          (a.target = le))));
  }
  function Tt(l, a) {
    var t = {};
    return (
      (t[l.toLowerCase()] = a.toLowerCase()),
      (t["Webkit" + l] = "webkit" + a),
      (t["Moz" + l] = "moz" + a),
      t
    );
  }
  var ae = {
      animationend: Tt("Animation", "AnimationEnd"),
      animationiteration: Tt("Animation", "AnimationIteration"),
      animationstart: Tt("Animation", "AnimationStart"),
      transitionrun: Tt("Transition", "TransitionRun"),
      transitionstart: Tt("Transition", "TransitionStart"),
      transitioncancel: Tt("Transition", "TransitionCancel"),
      transitionend: Tt("Transition", "TransitionEnd"),
    },
    zc = {},
    ts = {};
  Ya &&
    ((ts = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ae.animationend.animation,
      delete ae.animationiteration.animation,
      delete ae.animationstart.animation),
    "TransitionEvent" in window || delete ae.transitionend.transition);
  function _t(l) {
    if (zc[l]) return zc[l];
    if (!ae[l]) return l;
    var a = ae[l],
      t;
    for (t in a) if (a.hasOwnProperty(t) && t in ts) return (zc[l] = a[t]);
    return l;
  }
  var es = _t("animationend"),
    us = _t("animationiteration"),
    ns = _t("animationstart"),
    gh = _t("transitionrun"),
    bh = _t("transitionstart"),
    Sh = _t("transitioncancel"),
    cs = _t("transitionend"),
    is = new Map(),
    Ac =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Ac.push("scrollEnd");
  function _a(l, a) {
    is.set(l, a), pt(a, [l]);
  }
  var fs = new WeakMap();
  function Sa(l, a) {
    if (typeof l == "object" && l !== null) {
      var t = fs.get(l);
      return t !== void 0
        ? t
        : ((a = { value: l, source: a, stack: Nf(a) }), fs.set(l, a), a);
    }
    return { value: l, source: a, stack: Nf(a) };
  }
  var za = [],
    te = 0,
    Ec = 0;
  function wu() {
    for (var l = te, a = (Ec = te = 0); a < l; ) {
      var t = za[a];
      za[a++] = null;
      var e = za[a];
      za[a++] = null;
      var u = za[a];
      za[a++] = null;
      var n = za[a];
      if (((za[a++] = null), e !== null && u !== null)) {
        var c = e.pending;
        c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
          (e.pending = u);
      }
      n !== 0 && ss(t, u, n);
    }
  }
  function $u(l, a, t, e) {
    (za[te++] = l),
      (za[te++] = a),
      (za[te++] = t),
      (za[te++] = e),
      (Ec |= e),
      (l.lanes |= e),
      (l = l.alternate),
      l !== null && (l.lanes |= e);
  }
  function pc(l, a, t, e) {
    return $u(l, a, t, e), Wu(l);
  }
  function ee(l, a) {
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
          ((u = 31 - ca(t)),
          (l = n.hiddenUpdates),
          (e = l[u]),
          e === null ? (l[u] = [a]) : e.push(a),
          (a.lane = t | 536870912)),
        n)
      : null;
  }
  function Wu(l) {
    if (50 < bu) throw ((bu = 0), (Di = null), Error(m(185)));
    for (var a = l.return; a !== null; ) (l = a), (a = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var ue = {};
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
  function fa(l, a, t, e) {
    return new zh(l, a, t, e);
  }
  function Nc(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Xa(l, a) {
    var t = l.alternate;
    return (
      t === null
        ? ((t = fa(l.tag, a, l.key, l.mode)),
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
      c = E0(l, t, T.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case pl:
          return (l = fa(31, t, a, u)), (l.elementType = pl), (l.lanes = n), l;
        case Al:
          return Ot(t.children, u, n, a);
        case nl:
          (c = 8), (u |= 24);
          break;
        case Ml:
          return (
            (l = fa(12, t, a, u | 2)), (l.elementType = Ml), (l.lanes = n), l
          );
        case K:
          return (l = fa(13, t, a, u)), (l.elementType = K), (l.lanes = n), l;
        case Vl:
          return (l = fa(19, t, a, u)), (l.elementType = Vl), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case $:
              case D:
                c = 10;
                break l;
              case jl:
                c = 9;
                break l;
              case kl:
                c = 11;
                break l;
              case El:
                c = 14;
                break l;
              case Xl:
                (c = 16), (e = null);
                break l;
            }
          (c = 29),
            (t = Error(m(130, l === null ? "null" : typeof l, ""))),
            (e = null);
      }
    return (
      (a = fa(c, t, a, u)), (a.elementType = l), (a.type = e), (a.lanes = n), a
    );
  }
  function Ot(l, a, t, e) {
    return (l = fa(7, l, e, a)), (l.lanes = t), l;
  }
  function Tc(l, a, t) {
    return (l = fa(6, l, null, a)), (l.lanes = t), l;
  }
  function _c(l, a, t) {
    return (
      (a = fa(4, l.children !== null ? l.children : [], l.key, a)),
      (a.lanes = t),
      (a.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      a
    );
  }
  var ne = [],
    ce = 0,
    Fu = null,
    Iu = 0,
    Aa = [],
    Ea = 0,
    Mt = null,
    Ga = 1,
    Qa = "";
  function Dt(l, a) {
    (ne[ce++] = Iu), (ne[ce++] = Fu), (Fu = l), (Iu = a);
  }
  function os(l, a, t) {
    (Aa[Ea++] = Ga), (Aa[Ea++] = Qa), (Aa[Ea++] = Mt), (Mt = l);
    var e = Ga;
    l = Qa;
    var u = 32 - ca(e) - 1;
    (e &= ~(1 << u)), (t += 1);
    var n = 32 - ca(a) + u;
    if (30 < n) {
      var c = u - (u % 5);
      (n = (e & ((1 << c) - 1)).toString(32)),
        (e >>= c),
        (u -= c),
        (Ga = (1 << (32 - ca(a) + u)) | (t << u) | e),
        (Qa = n + l);
    } else (Ga = (1 << n) | (t << u) | e), (Qa = l);
  }
  function Oc(l) {
    l.return !== null && (Dt(l, 1), os(l, 1, 0));
  }
  function Mc(l) {
    for (; l === Fu; )
      (Fu = ne[--ce]), (ne[ce] = null), (Iu = ne[--ce]), (ne[ce] = null);
    for (; l === Mt; )
      (Mt = Aa[--Ea]),
        (Aa[Ea] = null),
        (Qa = Aa[--Ea]),
        (Aa[Ea] = null),
        (Ga = Aa[--Ea]),
        (Aa[Ea] = null);
  }
  var Wl = null,
    Sl = null,
    ul = !1,
    xt = null,
    ja = !1,
    Dc = Error(m(519));
  function jt(l) {
    var a = Error(m(418, ""));
    throw (ke(Sa(a, l)), Dc);
  }
  function ds(l) {
    var a = l.stateNode,
      t = l.type,
      e = l.memoizedProps;
    switch (((a[Kl] = l), (a[Pl] = e), t)) {
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
        for (t = 0; t < zu.length; t++) P(zu[t], a);
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
      a || jt(l);
  }
  function hs(l) {
    for (Wl = l.return; Wl; )
      switch (Wl.tag) {
        case 5:
        case 13:
          ja = !1;
          return;
        case 27:
        case 3:
          ja = !0;
          return;
        default:
          Wl = Wl.return;
      }
  }
  function $e(l) {
    if (l !== Wl) return !1;
    if (!ul) return hs(l), (ul = !0), !1;
    var a = l.tag,
      t;
    if (
      ((t = a !== 3 && a !== 27) &&
        ((t = a === 5) &&
          ((t = l.type),
          (t =
            !(t !== "form" && t !== "button") || Ki(l.type, l.memoizedProps))),
        (t = !t)),
      t && Sl && jt(l),
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
                Sl = Ma(l.nextSibling);
                break l;
              }
              a--;
            } else (t !== "$" && t !== "$!" && t !== "$?") || a++;
          l = l.nextSibling;
        }
        Sl = null;
      }
    } else
      a === 27
        ? ((a = Sl), yt(l.type) ? ((l = Wi), (Wi = null), (Sl = l)) : (Sl = a))
        : (Sl = Wl ? Ma(l.stateNode.nextSibling) : null);
    return !0;
  }
  function We() {
    (Sl = Wl = null), (ul = !1);
  }
  function ms() {
    var l = xt;
    return (
      l !== null &&
        (ea === null ? (ea = l) : ea.push.apply(ea, l), (xt = null)),
      l
    );
  }
  function ke(l) {
    xt === null ? (xt = [l]) : xt.push(l);
  }
  var xc = _(null),
    Rt = null,
    Za = null;
  function at(l, a, t) {
    S(xc, a._currentValue), (a._currentValue = t);
  }
  function Va(l) {
    (l._currentValue = xc.current), d(xc);
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
  function Fe(l, a, t, e) {
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
          ia(u.pendingProps.value, c.value) ||
            (l !== null ? l.push(i) : (l = [i]));
        }
      } else if (u === gl.current) {
        if (((c = u.alternate), c === null)) throw Error(m(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(_u) : (l = [_u]));
      }
      u = u.return;
    }
    l !== null && Rc(a, l, t, e), (a.flags |= 262144);
  }
  function Pu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ia(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ut(l) {
    (Rt = l),
      (Za = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Jl(l) {
    return vs(Rt, l);
  }
  function ln(l, a) {
    return Rt === null && Ut(l), vs(l, a);
  }
  function vs(l, a) {
    var t = a._currentValue;
    if (((a = { context: a, memoizedValue: t, next: null }), Za === null)) {
      if (l === null) throw Error(m(308));
      (Za = a),
        (l.dependencies = { lanes: 0, firstContext: a }),
        (l.flags |= 524288);
    } else Za = Za.next = a;
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
    Eh = O.unstable_scheduleCallback,
    ph = O.unstable_NormalPriority,
    Dl = {
      $$typeof: D,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Uc() {
    return { controller: new Ah(), data: new Map(), refCount: 0 };
  }
  function Ie(l) {
    l.refCount--,
      l.refCount === 0 &&
        Eh(ph, function () {
          l.controller.abort();
        });
  }
  var Pe = null,
    Hc = 0,
    ie = 0,
    fe = null;
  function Nh(l, a) {
    if (Pe === null) {
      var t = (Pe = []);
      (Hc = 0),
        (ie = qi()),
        (fe = {
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
    if (--Hc === 0 && Pe !== null) {
      fe !== null && (fe.status = "fulfilled");
      var l = Pe;
      (Pe = null), (ie = 0), (fe = null);
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
  var gs = z.S;
  z.S = function (l, a) {
    typeof a == "object" &&
      a !== null &&
      typeof a.then == "function" &&
      Nh(l, a),
      gs !== null && gs(l, a);
  };
  var Ht = _(null);
  function Cc() {
    var l = Ht.current;
    return l !== null ? l : vl.pooledCache;
  }
  function an(l, a) {
    a === null ? S(Ht, Ht.current) : S(Ht, a.pool);
  }
  function bs() {
    var l = Cc();
    return l === null ? null : { parent: Dl._currentValue, pool: l };
  }
  var lu = Error(m(460)),
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
        throw ((l = a.reason), ps(l), l);
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
            throw ((l = a.reason), ps(l), l);
        }
        throw ((au = a), lu);
    }
  }
  var au = null;
  function Es() {
    if (au === null) throw Error(m(459));
    var l = au;
    return (au = null), l;
  }
  function ps(l) {
    if (l === lu || l === tn) throw Error(m(483));
  }
  var tt = !1;
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
  function et(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ut(l, a, t) {
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
  function tu(l, a, t) {
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
  function eu() {
    if (Gc) {
      var l = fe;
      if (l !== null) throw l;
    }
  }
  function uu(l, a, t, e) {
    Gc = !1;
    var u = l.updateQueue;
    tt = !1;
    var n = u.firstBaseUpdate,
      c = u.lastBaseUpdate,
      i = u.shared.pending;
    if (i !== null) {
      u.shared.pending = null;
      var f = i,
        y = f.next;
      (f.next = null), c === null ? (n = y) : (c.next = y), (c = f);
      var A = l.alternate;
      A !== null &&
        ((A = A.updateQueue),
        (i = A.lastBaseUpdate),
        i !== c &&
          (i === null ? (A.firstBaseUpdate = y) : (i.next = y),
          (A.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var N = u.baseState;
      (c = 0), (A = y = f = null), (i = n);
      do {
        var g = i.lane & -536870913,
          b = g !== i.lane;
        if (b ? (tl & g) === g : (e & g) === g) {
          g !== 0 && g === ie && (Gc = !0),
            A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var V = l,
              Q = i;
            g = a;
            var hl = t;
            switch (Q.tag) {
              case 1:
                if (((V = Q.payload), typeof V == "function")) {
                  N = V.call(hl, N, g);
                  break l;
                }
                N = V;
                break l;
              case 3:
                V.flags = (V.flags & -65537) | 128;
              case 0:
                if (
                  ((V = Q.payload),
                  (g = typeof V == "function" ? V.call(hl, N, g) : V),
                  g == null)
                )
                  break l;
                N = q({}, N, g);
                break l;
              case 2:
                tt = !0;
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
            A === null ? ((y = A = b), (f = N)) : (A = A.next = b),
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
      A === null && (f = N),
        (u.baseState = f),
        (u.firstBaseUpdate = y),
        (u.lastBaseUpdate = A),
        n === null && (u.shared.lanes = 0),
        (dt |= c),
        (l.lanes = c),
        (l.memoizedState = N);
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
  var se = _(null),
    un = _(0);
  function _s(l, a) {
    (l = ka), S(un, l), S(se, a), (ka = l | a.baseLanes);
  }
  function Qc() {
    S(un, ka), S(se, se.current);
  }
  function Zc() {
    (ka = un.current), d(se), d(un);
  }
  var nt = 0,
    W = null,
    ol = null,
    _l = null,
    nn = !1,
    re = !1,
    Ct = !1,
    cn = 0,
    nu = 0,
    oe = null,
    _h = 0;
  function Nl() {
    throw Error(m(321));
  }
  function Vc(l, a) {
    if (a === null) return !1;
    for (var t = 0; t < a.length && t < l.length; t++)
      if (!ia(l[t], a[t])) return !1;
    return !0;
  }
  function Lc(l, a, t, e, u, n) {
    return (
      (nt = n),
      (W = a),
      (a.memoizedState = null),
      (a.updateQueue = null),
      (a.lanes = 0),
      (z.H = l === null || l.memoizedState === null ? sr : rr),
      (Ct = !1),
      (n = t(e, u)),
      (Ct = !1),
      re && (n = Ms(a, t, e, u)),
      Os(l),
      n
    );
  }
  function Os(l) {
    z.H = hn;
    var a = ol !== null && ol.next !== null;
    if (((nt = 0), (_l = ol = W = null), (nn = !1), (nu = 0), (oe = null), a))
      throw Error(m(300));
    l === null ||
      Cl ||
      ((l = l.dependencies), l !== null && Pu(l) && (Cl = !0));
  }
  function Ms(l, a, t, e) {
    W = l;
    var u = 0;
    do {
      if ((re && (oe = null), (nu = 0), (re = !1), 25 <= u))
        throw Error(m(301));
      if (((u += 1), (_l = ol = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (z.H = Uh), (n = a(t, e));
    } while (re);
    return n;
  }
  function Oh() {
    var l = z.H,
      a = l.useState()[0];
    return (
      (a = typeof a.then == "function" ? cu(a) : a),
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
    (nt = 0), (_l = ol = W = null), (re = !1), (nu = cn = 0), (oe = null);
  }
  function aa() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return _l === null ? (W.memoizedState = _l = l) : (_l = _l.next = l), _l;
  }
  function Ol() {
    if (ol === null) {
      var l = W.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ol.next;
    var a = _l === null ? W.memoizedState : _l.next;
    if (a !== null) (_l = a), (ol = l);
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
        _l === null ? (W.memoizedState = _l = l) : (_l = _l.next = l);
    }
    return _l;
  }
  function $c() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cu(l) {
    var a = nu;
    return (
      (nu += 1),
      oe === null && (oe = []),
      (l = As(oe, l, a)),
      (a = W),
      (_l === null ? a.memoizedState : _l.next) === null &&
        ((a = a.alternate),
        (z.H = a === null || a.memoizedState === null ? sr : rr)),
      l
    );
  }
  function fn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return cu(l);
      if (l.$$typeof === D) return Jl(l);
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
      for (t = a.data[a.index] = Array(l), e = 0; e < l; e++) t[e] = ua;
    return a.index++, t;
  }
  function La(l, a) {
    return typeof a == "function" ? a(l) : a;
  }
  function sn(l) {
    var a = Ol();
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
        A = !1;
      do {
        var N = y.lane & -536870913;
        if (N !== y.lane ? (tl & N) === N : (nt & N) === N) {
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
              N === ie && (A = !0);
          else if ((nt & g) === g) {
            (y = y.next), g === ie && (A = !0);
            continue;
          } else
            (N = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              f === null ? ((i = f = N), (c = n)) : (f = f.next = N),
              (W.lanes |= g),
              (dt |= g);
          (N = y.action),
            Ct && t(n, N),
            (n = y.hasEagerState ? y.eagerState : t(n, N));
        } else
          (g = {
            lane: N,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            f === null ? ((i = f = g), (c = n)) : (f = f.next = g),
            (W.lanes |= N),
            (dt |= N);
        y = y.next;
      } while (y !== null && y !== a);
      if (
        (f === null ? (c = n) : (f.next = i),
        !ia(n, l.memoizedState) && ((Cl = !0), A && ((t = fe), t !== null)))
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
    var a = Ol(),
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
      ia(n, a.memoizedState) || (Cl = !0),
        (a.memoizedState = n),
        a.baseQueue === null && (a.baseState = n),
        (t.lastRenderedState = n);
    }
    return [n, e];
  }
  function Ds(l, a, t) {
    var e = W,
      u = Ol(),
      n = ul;
    if (n) {
      if (t === void 0) throw Error(m(407));
      t = t();
    } else t = a();
    var c = !ia((ol || u).memoizedState, t);
    c && ((u.memoizedState = t), (Cl = !0)), (u = u.queue);
    var i = Rs.bind(null, e, u, l);
    if (
      (iu(2048, 8, i, [l]),
      u.getSnapshot !== a || c || (_l !== null && _l.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        de(9, rn(), js.bind(null, e, u, t, a), null),
        vl === null)
      )
        throw Error(m(349));
      n || (nt & 124) !== 0 || xs(e, a, t);
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
      return !ia(l, t);
    } catch {
      return !0;
    }
  }
  function Hs(l) {
    var a = ee(l, 2);
    a !== null && ha(a, l, 2);
  }
  function Ic(l) {
    var a = aa();
    if (typeof l == "function") {
      var t = l;
      if (((l = t()), Ct)) {
        Ia(!0);
        try {
          t();
        } finally {
          Ia(!1);
        }
      }
    }
    return (
      (a.memoizedState = a.baseState = l),
      (a.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: La,
        lastRenderedState: l,
      }),
      a
    );
  }
  function Cs(l, a, t, e) {
    return (l.baseState = t), kc(l, ol, typeof e == "function" ? e : La);
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
      z.T !== null ? t(!0) : (n.isTransition = !1),
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
      var n = z.T,
        c = {};
      z.T = c;
      try {
        var i = t(u, e),
          f = z.S;
        f !== null && f(c, i), Bs(l, a, i);
      } catch (y) {
        Pc(l, a, y);
      } finally {
        z.T = n;
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
    if (ul) {
      var t = vl.formState;
      if (t !== null) {
        l: {
          var e = W;
          if (ul) {
            if (Sl) {
              a: {
                for (var u = Sl, n = ja; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break a;
                  }
                  if (((u = Ma(u.nextSibling)), u === null)) {
                    u = null;
                    break a;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (Sl = Ma(u.nextSibling)), (e = u.data === "F!");
                break l;
              }
            }
            jt(e);
          }
          e = !1;
        }
        e && (a = t[0]);
      }
    }
    return (
      (t = aa()),
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
      (e = aa()),
      (u = { state: a, dispatch: null, action: l, pending: null }),
      (e.queue = u),
      (t = Mh.bind(null, W, u, n, t)),
      (u.dispatch = t),
      (e.memoizedState = l),
      [a, t, !1]
    );
  }
  function Zs(l) {
    var a = Ol();
    return Vs(a, ol, l);
  }
  function Vs(l, a, t) {
    if (
      ((a = kc(l, a, Gs)[0]),
      (l = sn(La)[0]),
      typeof a == "object" && a !== null && typeof a.then == "function")
    )
      try {
        var e = cu(a);
      } catch (c) {
        throw c === lu ? tn : c;
      }
    else e = a;
    a = Ol();
    var u = a.queue,
      n = u.dispatch;
    return (
      t !== a.memoizedState &&
        ((W.flags |= 2048), de(9, rn(), Dh.bind(null, u, t), null)),
      [e, n, l]
    );
  }
  function Dh(l, a) {
    l.action = a;
  }
  function Ls(l) {
    var a = Ol(),
      t = ol;
    if (t !== null) return Vs(a, t, l);
    Ol(), (a = a.memoizedState), (t = Ol());
    var e = t.queue.dispatch;
    return (t.memoizedState = l), [a, e, !1];
  }
  function de(l, a, t, e) {
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
    return Ol().memoizedState;
  }
  function on(l, a, t, e) {
    var u = aa();
    (e = e === void 0 ? null : e),
      (W.flags |= l),
      (u.memoizedState = de(1 | a, rn(), t, e));
  }
  function iu(l, a, t, e) {
    var u = Ol();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    ol !== null && e !== null && Vc(e, ol.memoizedState.deps)
      ? (u.memoizedState = de(a, n, t, e))
      : ((W.flags |= l), (u.memoizedState = de(1 | a, n, t, e)));
  }
  function Js(l, a) {
    on(8390656, 8, l, a);
  }
  function ws(l, a) {
    iu(2048, 8, l, a);
  }
  function $s(l, a) {
    return iu(4, 2, l, a);
  }
  function Ws(l, a) {
    return iu(4, 4, l, a);
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
    (t = t != null ? t.concat([l]) : null), iu(4, 4, ks.bind(null, a, l), t);
  }
  function li() {}
  function Is(l, a) {
    var t = Ol();
    a = a === void 0 ? null : a;
    var e = t.memoizedState;
    return a !== null && Vc(a, e[1]) ? e[0] : ((t.memoizedState = [l, a]), l);
  }
  function Ps(l, a) {
    var t = Ol();
    a = a === void 0 ? null : a;
    var e = t.memoizedState;
    if (a !== null && Vc(a, e[1])) return e[0];
    if (((e = l()), Ct)) {
      Ia(!0);
      try {
        l();
      } finally {
        Ia(!1);
      }
    }
    return (t.memoizedState = [e, a]), e;
  }
  function ai(l, a, t) {
    return t === void 0 || (nt & 1073741824) !== 0
      ? (l.memoizedState = a)
      : ((l.memoizedState = t), (l = to()), (W.lanes |= l), (dt |= l), t);
  }
  function lr(l, a, t, e) {
    return ia(t, a)
      ? t
      : se.current !== null
      ? ((l = ai(l, t, e)), ia(l, a) || (Cl = !0), l)
      : (nt & 42) === 0
      ? ((Cl = !0), (l.memoizedState = t))
      : ((l = to()), (W.lanes |= l), (dt |= l), a);
  }
  function ar(l, a, t, e, u) {
    var n = M.p;
    M.p = n !== 0 && 8 > n ? n : 8;
    var c = z.T,
      i = {};
    (z.T = i), ui(l, !1, a, t);
    try {
      var f = u(),
        y = z.S;
      if (
        (y !== null && y(i, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var A = Th(f, e);
        fu(l, a, A, da(l));
      } else fu(l, a, e, da(l));
    } catch (N) {
      fu(l, a, { then: function () {}, status: "rejected", reason: N }, da());
    } finally {
      (M.p = n), (z.T = c);
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
      G,
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
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: La,
        lastRenderedState: G,
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
          lastRenderedReducer: La,
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
    fu(l, a, {}, da());
  }
  function ei() {
    return Jl(_u);
  }
  function ur() {
    return Ol().memoizedState;
  }
  function nr() {
    return Ol().memoizedState;
  }
  function jh(l) {
    for (var a = l.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var t = da();
          l = et(t);
          var e = ut(a, l, t);
          e !== null && (ha(e, a, t), tu(e, a, t)),
            (a = { cache: Uc() }),
            (l.payload = a);
          return;
      }
      a = a.return;
    }
  }
  function Rh(l, a, t) {
    var e = da();
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
        : ((t = pc(l, a, t, e)), t !== null && (ha(t, l, e), fr(t, a, e)));
  }
  function cr(l, a, t) {
    var e = da();
    fu(l, a, t, e);
  }
  function fu(l, a, t, e) {
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
          if (((u.hasEagerState = !0), (u.eagerState = i), ia(i, c)))
            return $u(l, a, u, 0), vl === null && wu(), !1;
        } catch {
        } finally {
        }
      if (((t = pc(l, a, u, e)), t !== null))
        return ha(t, l, e), fr(t, a, e), !0;
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
    } else (a = pc(l, t, e, 2)), a !== null && ha(a, l, 2);
  }
  function dn(l) {
    var a = l.alternate;
    return l === W || (a !== null && a === W);
  }
  function ir(l, a) {
    re = nn = !0;
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
      readContext: Jl,
      use: fn,
      useCallback: Nl,
      useContext: Nl,
      useEffect: Nl,
      useImperativeHandle: Nl,
      useLayoutEffect: Nl,
      useInsertionEffect: Nl,
      useMemo: Nl,
      useReducer: Nl,
      useRef: Nl,
      useState: Nl,
      useDebugValue: Nl,
      useDeferredValue: Nl,
      useTransition: Nl,
      useSyncExternalStore: Nl,
      useId: Nl,
      useHostTransitionStatus: Nl,
      useFormState: Nl,
      useActionState: Nl,
      useOptimistic: Nl,
      useMemoCache: Nl,
      useCacheRefresh: Nl,
    },
    sr = {
      readContext: Jl,
      use: fn,
      useCallback: function (l, a) {
        return (aa().memoizedState = [l, a === void 0 ? null : a]), l;
      },
      useContext: Jl,
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
        var t = aa();
        a = a === void 0 ? null : a;
        var e = l();
        if (Ct) {
          Ia(!0);
          try {
            l();
          } finally {
            Ia(!1);
          }
        }
        return (t.memoizedState = [e, a]), e;
      },
      useReducer: function (l, a, t) {
        var e = aa();
        if (t !== void 0) {
          var u = t(a);
          if (Ct) {
            Ia(!0);
            try {
              t(a);
            } finally {
              Ia(!1);
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
        var a = aa();
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
        var t = aa();
        return ai(t, l, a);
      },
      useTransition: function () {
        var l = Ic(!1);
        return (
          (l = ar.bind(null, W, l.queue, !0, !1)),
          (aa().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, a, t) {
        var e = W,
          u = aa();
        if (ul) {
          if (t === void 0) throw Error(m(407));
          t = t();
        } else {
          if (((t = a()), vl === null)) throw Error(m(349));
          (tl & 124) !== 0 || xs(e, a, t);
        }
        u.memoizedState = t;
        var n = { value: t, getSnapshot: a };
        return (
          (u.queue = n),
          Js(Rs.bind(null, e, n, l), [l]),
          (e.flags |= 2048),
          de(9, rn(), js.bind(null, e, n, t, a), null),
          t
        );
      },
      useId: function () {
        var l = aa(),
          a = vl.identifierPrefix;
        if (ul) {
          var t = Qa,
            e = Ga;
          (t = (e & ~(1 << (32 - ca(e) - 1))).toString(32) + t),
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
        var a = aa();
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
        return (aa().memoizedState = jh.bind(null, W));
      },
    },
    rr = {
      readContext: Jl,
      use: fn,
      useCallback: Is,
      useContext: Jl,
      useEffect: ws,
      useImperativeHandle: Fs,
      useInsertionEffect: $s,
      useLayoutEffect: Ws,
      useMemo: Ps,
      useReducer: sn,
      useRef: Ks,
      useState: function () {
        return sn(La);
      },
      useDebugValue: li,
      useDeferredValue: function (l, a) {
        var t = Ol();
        return lr(t, ol.memoizedState, l, a);
      },
      useTransition: function () {
        var l = sn(La)[0],
          a = Ol().memoizedState;
        return [typeof l == "boolean" ? l : cu(l), a];
      },
      useSyncExternalStore: Ds,
      useId: ur,
      useHostTransitionStatus: ei,
      useFormState: Zs,
      useActionState: Zs,
      useOptimistic: function (l, a) {
        var t = Ol();
        return Cs(t, ol, l, a);
      },
      useMemoCache: Wc,
      useCacheRefresh: nr,
    },
    Uh = {
      readContext: Jl,
      use: fn,
      useCallback: Is,
      useContext: Jl,
      useEffect: ws,
      useImperativeHandle: Fs,
      useInsertionEffect: $s,
      useLayoutEffect: Ws,
      useMemo: Ps,
      useReducer: Fc,
      useRef: Ks,
      useState: function () {
        return Fc(La);
      },
      useDebugValue: li,
      useDeferredValue: function (l, a) {
        var t = Ol();
        return ol === null ? ai(t, l, a) : lr(t, ol.memoizedState, l, a);
      },
      useTransition: function () {
        var l = Fc(La)[0],
          a = Ol().memoizedState;
        return [typeof l == "boolean" ? l : cu(l), a];
      },
      useSyncExternalStore: Ds,
      useId: ur,
      useHostTransitionStatus: ei,
      useFormState: Ls,
      useActionState: Ls,
      useOptimistic: function (l, a) {
        var t = Ol();
        return ol !== null
          ? Cs(t, ol, l, a)
          : ((t.baseState = l), [l, t.queue.dispatch]);
      },
      useMemoCache: Wc,
      useCacheRefresh: nr,
    },
    he = null,
    su = 0;
  function mn(l) {
    var a = su;
    return (su += 1), he === null && (he = []), As(he, l, a);
  }
  function ru(l, a) {
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
    function a(h, r) {
      if (l) {
        var v = h.deletions;
        v === null ? ((h.deletions = [r]), (h.flags |= 16)) : v.push(r);
      }
    }
    function t(h, r) {
      if (!l) return null;
      for (; r !== null; ) a(h, r), (r = r.sibling);
      return null;
    }
    function e(h) {
      for (var r = new Map(); h !== null; )
        h.key !== null ? r.set(h.key, h) : r.set(h.index, h), (h = h.sibling);
      return r;
    }
    function u(h, r) {
      return (h = Xa(h, r)), (h.index = 0), (h.sibling = null), h;
    }
    function n(h, r, v) {
      return (
        (h.index = v),
        l
          ? ((v = h.alternate),
            v !== null
              ? ((v = v.index), v < r ? ((h.flags |= 67108866), r) : v)
              : ((h.flags |= 67108866), r))
          : ((h.flags |= 1048576), r)
      );
    }
    function c(h) {
      return l && h.alternate === null && (h.flags |= 67108866), h;
    }
    function i(h, r, v, p) {
      return r === null || r.tag !== 6
        ? ((r = Tc(v, h.mode, p)), (r.return = h), r)
        : ((r = u(r, v)), (r.return = h), r);
    }
    function f(h, r, v, p) {
      var H = v.type;
      return H === Al
        ? A(h, r, v.props.children, p, v.key)
        : r !== null &&
          (r.elementType === H ||
            (typeof H == "object" &&
              H !== null &&
              H.$$typeof === Xl &&
              or(H) === r.type))
        ? ((r = u(r, v.props)), ru(r, v), (r.return = h), r)
        : ((r = ku(v.type, v.key, v.props, null, h.mode, p)),
          ru(r, v),
          (r.return = h),
          r);
    }
    function y(h, r, v, p) {
      return r === null ||
        r.tag !== 4 ||
        r.stateNode.containerInfo !== v.containerInfo ||
        r.stateNode.implementation !== v.implementation
        ? ((r = _c(v, h.mode, p)), (r.return = h), r)
        : ((r = u(r, v.children || [])), (r.return = h), r);
    }
    function A(h, r, v, p, H) {
      return r === null || r.tag !== 7
        ? ((r = Ot(v, h.mode, p, H)), (r.return = h), r)
        : ((r = u(r, v)), (r.return = h), r);
    }
    function N(h, r, v) {
      if (
        (typeof r == "string" && r !== "") ||
        typeof r == "number" ||
        typeof r == "bigint"
      )
        return (r = Tc("" + r, h.mode, v)), (r.return = h), r;
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case al:
            return (
              (v = ku(r.type, r.key, r.props, null, h.mode, v)),
              ru(v, r),
              (v.return = h),
              v
            );
          case cl:
            return (r = _c(r, h.mode, v)), (r.return = h), r;
          case Xl:
            var p = r._init;
            return (r = p(r._payload)), N(h, r, v);
        }
        if (Ul(r) || Rl(r))
          return (r = Ot(r, h.mode, v, null)), (r.return = h), r;
        if (typeof r.then == "function") return N(h, mn(r), v);
        if (r.$$typeof === D) return N(h, ln(h, r), v);
        vn(h, r);
      }
      return null;
    }
    function g(h, r, v, p) {
      var H = r !== null ? r.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return H !== null ? null : i(h, r, "" + v, p);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case al:
            return v.key === H ? f(h, r, v, p) : null;
          case cl:
            return v.key === H ? y(h, r, v, p) : null;
          case Xl:
            return (H = v._init), (v = H(v._payload)), g(h, r, v, p);
        }
        if (Ul(v) || Rl(v)) return H !== null ? null : A(h, r, v, p, null);
        if (typeof v.then == "function") return g(h, r, mn(v), p);
        if (v.$$typeof === D) return g(h, r, ln(h, v), p);
        vn(h, v);
      }
      return null;
    }
    function b(h, r, v, p, H) {
      if (
        (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
      )
        return (h = h.get(v) || null), i(r, h, "" + p, H);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case al:
            return (
              (h = h.get(p.key === null ? v : p.key) || null), f(r, h, p, H)
            );
          case cl:
            return (
              (h = h.get(p.key === null ? v : p.key) || null), y(r, h, p, H)
            );
          case Xl:
            var F = p._init;
            return (p = F(p._payload)), b(h, r, v, p, H);
        }
        if (Ul(p) || Rl(p)) return (h = h.get(v) || null), A(r, h, p, H, null);
        if (typeof p.then == "function") return b(h, r, v, mn(p), H);
        if (p.$$typeof === D) return b(h, r, v, ln(r, p), H);
        vn(r, p);
      }
      return null;
    }
    function V(h, r, v, p) {
      for (
        var H = null, F = null, Y = r, Z = (r = 0), Bl = null;
        Y !== null && Z < v.length;
        Z++
      ) {
        Y.index > Z ? ((Bl = Y), (Y = null)) : (Bl = Y.sibling);
        var el = g(h, Y, v[Z], p);
        if (el === null) {
          Y === null && (Y = Bl);
          break;
        }
        l && Y && el.alternate === null && a(h, Y),
          (r = n(el, r, Z)),
          F === null ? (H = el) : (F.sibling = el),
          (F = el),
          (Y = Bl);
      }
      if (Z === v.length) return t(h, Y), ul && Dt(h, Z), H;
      if (Y === null) {
        for (; Z < v.length; Z++)
          (Y = N(h, v[Z], p)),
            Y !== null &&
              ((r = n(Y, r, Z)),
              F === null ? (H = Y) : (F.sibling = Y),
              (F = Y));
        return ul && Dt(h, Z), H;
      }
      for (Y = e(Y); Z < v.length; Z++)
        (Bl = b(Y, h, Z, v[Z], p)),
          Bl !== null &&
            (l &&
              Bl.alternate !== null &&
              Y.delete(Bl.key === null ? Z : Bl.key),
            (r = n(Bl, r, Z)),
            F === null ? (H = Bl) : (F.sibling = Bl),
            (F = Bl));
      return (
        l &&
          Y.forEach(function (At) {
            return a(h, At);
          }),
        ul && Dt(h, Z),
        H
      );
    }
    function Q(h, r, v, p) {
      if (v == null) throw Error(m(151));
      for (
        var H = null, F = null, Y = r, Z = (r = 0), Bl = null, el = v.next();
        Y !== null && !el.done;
        Z++, el = v.next()
      ) {
        Y.index > Z ? ((Bl = Y), (Y = null)) : (Bl = Y.sibling);
        var At = g(h, Y, el.value, p);
        if (At === null) {
          Y === null && (Y = Bl);
          break;
        }
        l && Y && At.alternate === null && a(h, Y),
          (r = n(At, r, Z)),
          F === null ? (H = At) : (F.sibling = At),
          (F = At),
          (Y = Bl);
      }
      if (el.done) return t(h, Y), ul && Dt(h, Z), H;
      if (Y === null) {
        for (; !el.done; Z++, el = v.next())
          (el = N(h, el.value, p)),
            el !== null &&
              ((r = n(el, r, Z)),
              F === null ? (H = el) : (F.sibling = el),
              (F = el));
        return ul && Dt(h, Z), H;
      }
      for (Y = e(Y); !el.done; Z++, el = v.next())
        (el = b(Y, h, Z, el.value, p)),
          el !== null &&
            (l &&
              el.alternate !== null &&
              Y.delete(el.key === null ? Z : el.key),
            (r = n(el, r, Z)),
            F === null ? (H = el) : (F.sibling = el),
            (F = el));
      return (
        l &&
          Y.forEach(function (H0) {
            return a(h, H0);
          }),
        ul && Dt(h, Z),
        H
      );
    }
    function hl(h, r, v, p) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === Al &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case al:
            l: {
              for (var H = v.key; r !== null; ) {
                if (r.key === H) {
                  if (((H = v.type), H === Al)) {
                    if (r.tag === 7) {
                      t(h, r.sibling),
                        (p = u(r, v.props.children)),
                        (p.return = h),
                        (h = p);
                      break l;
                    }
                  } else if (
                    r.elementType === H ||
                    (typeof H == "object" &&
                      H !== null &&
                      H.$$typeof === Xl &&
                      or(H) === r.type)
                  ) {
                    t(h, r.sibling),
                      (p = u(r, v.props)),
                      ru(p, v),
                      (p.return = h),
                      (h = p);
                    break l;
                  }
                  t(h, r);
                  break;
                } else a(h, r);
                r = r.sibling;
              }
              v.type === Al
                ? ((p = Ot(v.props.children, h.mode, p, v.key)),
                  (p.return = h),
                  (h = p))
                : ((p = ku(v.type, v.key, v.props, null, h.mode, p)),
                  ru(p, v),
                  (p.return = h),
                  (h = p));
            }
            return c(h);
          case cl:
            l: {
              for (H = v.key; r !== null; ) {
                if (r.key === H)
                  if (
                    r.tag === 4 &&
                    r.stateNode.containerInfo === v.containerInfo &&
                    r.stateNode.implementation === v.implementation
                  ) {
                    t(h, r.sibling),
                      (p = u(r, v.children || [])),
                      (p.return = h),
                      (h = p);
                    break l;
                  } else {
                    t(h, r);
                    break;
                  }
                else a(h, r);
                r = r.sibling;
              }
              (p = _c(v, h.mode, p)), (p.return = h), (h = p);
            }
            return c(h);
          case Xl:
            return (H = v._init), (v = H(v._payload)), hl(h, r, v, p);
        }
        if (Ul(v)) return V(h, r, v, p);
        if (Rl(v)) {
          if (((H = Rl(v)), typeof H != "function")) throw Error(m(150));
          return (v = H.call(v)), Q(h, r, v, p);
        }
        if (typeof v.then == "function") return hl(h, r, mn(v), p);
        if (v.$$typeof === D) return hl(h, r, ln(h, v), p);
        vn(h, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          r !== null && r.tag === 6
            ? (t(h, r.sibling), (p = u(r, v)), (p.return = h), (h = p))
            : (t(h, r), (p = Tc(v, h.mode, p)), (p.return = h), (h = p)),
          c(h))
        : t(h, r);
    }
    return function (h, r, v, p) {
      try {
        su = 0;
        var H = hl(h, r, v, p);
        return (he = null), H;
      } catch (Y) {
        if (Y === lu || Y === tn) throw Y;
        var F = fa(29, Y, null, h.mode);
        return (F.lanes = p), (F.return = h), F;
      } finally {
      }
    };
  }
  var me = dr(!0),
    hr = dr(!1),
    pa = _(null),
    Ra = null;
  function ct(l) {
    var a = l.alternate;
    S(xl, xl.current & 1),
      S(pa, l),
      Ra === null &&
        (a === null || se.current !== null || a.memoizedState !== null) &&
        (Ra = l);
  }
  function mr(l) {
    if (l.tag === 22) {
      if ((S(xl, xl.current), S(pa, l), Ra === null)) {
        var a = l.alternate;
        a !== null && a.memoizedState !== null && (Ra = l);
      }
    } else it();
  }
  function it() {
    S(xl, xl.current), S(pa, pa.current);
  }
  function Ka(l) {
    d(pa), Ra === l && (Ra = null), d(xl);
  }
  var xl = _(0);
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
      var e = da(),
        u = et(e);
      (u.payload = a),
        t != null && (u.callback = t),
        (a = ut(l, u, e)),
        a !== null && (ha(a, l, e), tu(a, l, e));
    },
    enqueueReplaceState: function (l, a, t) {
      l = l._reactInternals;
      var e = da(),
        u = et(e);
      (u.tag = 1),
        (u.payload = a),
        t != null && (u.callback = t),
        (a = ut(l, u, e)),
        a !== null && (ha(a, l, e), tu(a, l, e));
    },
    enqueueForceUpdate: function (l, a) {
      l = l._reactInternals;
      var t = da(),
        e = et(t);
      (e.tag = 2),
        a != null && (e.callback = a),
        (a = ut(l, e, t)),
        a !== null && (ha(a, l, t), tu(a, l, t));
    },
  };
  function vr(l, a, t, e, u, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(e, n, c)
        : a.prototype && a.prototype.isPureReactComponent
        ? !Je(t, e) || !Je(u, n)
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
  function qt(l, a) {
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
      (t = et(t)),
      (t.tag = 3),
      (t.payload = { element: null }),
      (t.callback = function () {
        bn(l, a);
      }),
      t
    );
  }
  function Ar(l) {
    return (l = et(l)), (l.tag = 3), l;
  }
  function Er(l, a, t, e) {
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
            (ht === null ? (ht = new Set([this])) : ht.add(this));
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
        a !== null && Fe(a, t, u, !0),
        (t = pa.current),
        t !== null)
      ) {
        switch (t.tag) {
          case 13:
            return (
              Ra === null ? ji() : t.alternate === null && zl === 0 && (zl = 3),
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
    if (ul)
      return (
        (a = pa.current),
        a !== null
          ? ((a.flags & 65536) === 0 && (a.flags |= 256),
            (a.flags |= 65536),
            (a.lanes = u),
            e !== Dc && ((l = Error(m(422), { cause: e })), ke(Sa(l, t))))
          : (e !== Dc && ((a = Error(m(423), { cause: e })), ke(Sa(a, t))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (e = Sa(e, t)),
            (u = ii(l.stateNode, e, u)),
            Xc(l, u),
            zl !== 4 && (zl = 2)),
        !1
      );
    var n = Error(m(520), { cause: e });
    if (
      ((n = Sa(n, t)),
      gu === null ? (gu = [n]) : gu.push(n),
      zl !== 4 && (zl = 2),
      a === null)
    )
      return !0;
    (e = Sa(e, t)), (t = a);
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
                  (ht === null || !ht.has(n)))))
          )
            return (
              (t.flags |= 65536),
              (u &= -u),
              (t.lanes |= u),
              (u = Ar(u)),
              Er(u, l, t, e),
              Xc(t, u),
              !1
            );
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var pr = Error(m(461)),
    Cl = !1;
  function Gl(l, a, t, e) {
    a.child = l === null ? hr(a, null, t, e) : me(a, l.child, t, e);
  }
  function Nr(l, a, t, e, u) {
    t = t.render;
    var n = a.ref;
    if ("ref" in e) {
      var c = {};
      for (var i in e) i !== "ref" && (c[i] = e[i]);
    } else c = e;
    return (
      Ut(a),
      (e = Lc(l, a, t, c, n, u)),
      (i = Kc()),
      l !== null && !Cl
        ? (Jc(l, a, u), Ja(l, a, u))
        : (ul && i && Oc(a), (a.flags |= 1), Gl(l, a, e, u), a.child)
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
        ((t = t.compare), (t = t !== null ? t : Je), t(c, e) && l.ref === a.ref)
      )
        return Ja(l, a, u);
    }
    return (
      (a.flags |= 1),
      (l = Xa(n, e)),
      (l.ref = a.ref),
      (l.return = a),
      (a.child = l)
    );
  }
  function _r(l, a, t, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Je(n, e) && l.ref === a.ref)
        if (((Cl = !1), (a.pendingProps = e = n), vi(l, u)))
          (l.flags & 131072) !== 0 && (Cl = !0);
        else return (a.lanes = l.lanes), Ja(l, a, u);
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
        ? (an(a, n.cachePool), _s(a, n), it(), (a.memoizedState = null))
        : (l !== null && an(a, null), Qc(), it());
    return Gl(l, a, u, t), a.child;
  }
  function Mr(l, a, t, e) {
    var u = Cc();
    return (
      (u = u === null ? null : { parent: Dl._currentValue, pool: u }),
      (a.memoizedState = { baseLanes: t, cachePool: u }),
      l !== null && an(a, null),
      Qc(),
      mr(a),
      l !== null && Fe(l, a, e, !0),
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
      Ut(a),
      (t = Lc(l, a, t, e, void 0, u)),
      (e = Kc()),
      l !== null && !Cl
        ? (Jc(l, a, u), Ja(l, a, u))
        : (ul && e && Oc(a), (a.flags |= 1), Gl(l, a, t, u), a.child)
    );
  }
  function Dr(l, a, t, e, u, n) {
    return (
      Ut(a),
      (a.updateQueue = null),
      (t = Ms(a, e, t, u)),
      Os(l),
      (e = Kc()),
      l !== null && !Cl
        ? (Jc(l, a, n), Ja(l, a, n))
        : (ul && e && Oc(a), (a.flags |= 1), Gl(l, a, t, n), a.child)
    );
  }
  function xr(l, a, t, e, u) {
    if ((Ut(a), a.stateNode === null)) {
      var n = ue,
        c = t.contextType;
      typeof c == "object" && c !== null && (n = Jl(c)),
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
        (n.context = typeof c == "object" && c !== null ? Jl(c) : ue),
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
          uu(a, e, n, u),
          eu(),
          (n.state = a.memoizedState)),
        typeof n.componentDidMount == "function" && (a.flags |= 4194308),
        (e = !0);
    } else if (l === null) {
      n = a.stateNode;
      var i = a.memoizedProps,
        f = qt(t, i);
      n.props = f;
      var y = n.context,
        A = t.contextType;
      (c = ue), typeof A == "object" && A !== null && (c = Jl(A));
      var N = t.getDerivedStateFromProps;
      (A =
        typeof N == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (i = a.pendingProps !== i),
        A ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i || y !== c) && yr(a, n, e, c)),
        (tt = !1);
      var g = a.memoizedState;
      (n.state = g),
        uu(a, e, n, u),
        eu(),
        (y = a.memoizedState),
        i || g !== y || tt
          ? (typeof N == "function" && (ni(a, t, N, e), (y = a.memoizedState)),
            (f = tt || vr(a, t, f, e, g, y, c))
              ? (A ||
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
        (A = qt(t, c)),
        (n.props = A),
        (N = a.pendingProps),
        (g = n.context),
        (y = t.contextType),
        (f = ue),
        typeof y == "object" && y !== null && (f = Jl(y)),
        (i = t.getDerivedStateFromProps),
        (y =
          typeof i == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== N || g !== f) && yr(a, n, e, f)),
        (tt = !1),
        (g = a.memoizedState),
        (n.state = g),
        uu(a, e, n, u),
        eu();
      var b = a.memoizedState;
      c !== N ||
      g !== b ||
      tt ||
      (l !== null && l.dependencies !== null && Pu(l.dependencies))
        ? (typeof i == "function" && (ni(a, t, i, e), (b = a.memoizedState)),
          (A =
            tt ||
            vr(a, t, A, e, g, b, f) ||
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
          (e = A))
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
            ? ((a.child = me(a, l.child, null, u)),
              (a.child = me(a, null, t, u)))
            : Gl(l, a, t, u),
          (a.memoizedState = n.state),
          (l = a.child))
        : (l = Ja(l, a, u)),
      l
    );
  }
  function jr(l, a, t, e) {
    return We(), (a.flags |= 256), Gl(l, a, t, e), a.child;
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
    return (l = l !== null ? l.childLanes & ~t : 0), a && (l |= Na), l;
  }
  function Rr(l, a, t) {
    var e = a.pendingProps,
      u = !1,
      n = (a.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (xl.current & 2) !== 0),
      c && ((u = !0), (a.flags &= -129)),
      (c = (a.flags & 32) !== 0),
      (a.flags &= -33),
      l === null)
    ) {
      if (ul) {
        if ((u ? ct(a) : it(), ul)) {
          var i = Sl,
            f;
          if ((f = i)) {
            l: {
              for (f = i, i = ja; f.nodeType !== 8; ) {
                if (!i) {
                  i = null;
                  break l;
                }
                if (((f = Ma(f.nextSibling)), f === null)) {
                  i = null;
                  break l;
                }
              }
              i = f;
            }
            i !== null
              ? ((a.memoizedState = {
                  dehydrated: i,
                  treeContext: Mt !== null ? { id: Ga, overflow: Qa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (f = fa(18, null, null, 0)),
                (f.stateNode = i),
                (f.return = a),
                (a.child = f),
                (Wl = a),
                (Sl = null),
                (f = !0))
              : (f = !1);
          }
          f || jt(a);
        }
        if (
          ((i = a.memoizedState),
          i !== null && ((i = i.dehydrated), i !== null))
        )
          return $i(i) ? (a.lanes = 32) : (a.lanes = 536870912), null;
        Ka(a);
      }
      return (
        (i = e.children),
        (e = e.fallback),
        u
          ? (it(),
            (u = a.mode),
            (i = zn({ mode: "hidden", children: i }, u)),
            (e = Ot(e, u, t, null)),
            (i.return = a),
            (e.return = a),
            (i.sibling = e),
            (a.child = i),
            (u = a.child),
            (u.memoizedState = ri(t)),
            (u.childLanes = oi(l, c, t)),
            (a.memoizedState = si),
            e)
          : (ct(a), di(a, i))
      );
    }
    if (
      ((f = l.memoizedState), f !== null && ((i = f.dehydrated), i !== null))
    ) {
      if (n)
        a.flags & 256
          ? (ct(a), (a.flags &= -257), (a = hi(l, a, t)))
          : a.memoizedState !== null
          ? (it(), (a.child = l.child), (a.flags |= 128), (a = null))
          : (it(),
            (u = e.fallback),
            (i = a.mode),
            (e = zn({ mode: "visible", children: e.children }, i)),
            (u = Ot(u, i, t, null)),
            (u.flags |= 2),
            (e.return = a),
            (u.return = a),
            (e.sibling = u),
            (a.child = e),
            me(a, l.child, null, t),
            (e = a.child),
            (e.memoizedState = ri(t)),
            (e.childLanes = oi(l, c, t)),
            (a.memoizedState = si),
            (a = u));
      else if ((ct(a), $i(i))) {
        if (((c = i.nextSibling && i.nextSibling.dataset), c)) var y = c.dgst;
        (c = y),
          (e = Error(m(419))),
          (e.stack = ""),
          (e.digest = c),
          ke({ value: e, source: null, stack: null }),
          (a = hi(l, a, t));
      } else if (
        (Cl || Fe(l, a, t, !1), (c = (t & l.childLanes) !== 0), Cl || c)
      ) {
        if (
          ((c = vl),
          c !== null &&
            ((e = t & -t),
            (e = (e & 42) !== 0 ? 1 : Wn(e)),
            (e = (e & (c.suspendedLanes | t)) !== 0 ? 0 : e),
            e !== 0 && e !== f.retryLane))
        )
          throw ((f.retryLane = e), ee(l, e), ha(c, l, e), pr);
        i.data === "$?" || ji(), (a = hi(l, a, t));
      } else
        i.data === "$?"
          ? ((a.flags |= 192), (a.child = l.child), (a = null))
          : ((l = f.treeContext),
            (Sl = Ma(i.nextSibling)),
            (Wl = a),
            (ul = !0),
            (xt = null),
            (ja = !1),
            l !== null &&
              ((Aa[Ea++] = Ga),
              (Aa[Ea++] = Qa),
              (Aa[Ea++] = Mt),
              (Ga = l.id),
              (Qa = l.overflow),
              (Mt = a)),
            (a = di(a, e.children)),
            (a.flags |= 4096));
      return a;
    }
    return u
      ? (it(),
        (u = e.fallback),
        (i = a.mode),
        (f = l.child),
        (y = f.sibling),
        (e = Xa(f, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = f.subtreeFlags & 65011712),
        y !== null ? (u = Xa(y, u)) : ((u = Ot(u, i, t, null)), (u.flags |= 2)),
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
              ? ((y = Dl._currentValue),
                (f = f.parent !== y ? { parent: y, pool: y } : f))
              : (f = bs()),
            (i = { baseLanes: i.baseLanes | t, cachePool: f })),
        (u.memoizedState = i),
        (u.childLanes = oi(l, c, t)),
        (a.memoizedState = si),
        e)
      : (ct(a),
        (t = l.child),
        (l = t.sibling),
        (t = Xa(t, { mode: "visible", children: e.children })),
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
      (l = fa(22, l, null, a)),
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
      me(a, l.child, null, t),
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
    if ((Gl(l, a, e.children, t), (e = xl.current), (e & 2) !== 0))
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
    switch ((S(xl, e), u)) {
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
  function Ja(l, a, t) {
    if (
      (l !== null && (a.dependencies = l.dependencies),
      (dt |= a.lanes),
      (t & a.childLanes) === 0)
    )
      if (l !== null) {
        if ((Fe(l, a, t, !1), (t & a.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && a.child !== l.child) throw Error(m(153));
    if (a.child !== null) {
      for (
        l = a.child, t = Xa(l, l.pendingProps), a.child = t, t.return = a;
        l.sibling !== null;

      )
        (l = l.sibling),
          (t = t.sibling = Xa(l, l.pendingProps)),
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
        J(a, a.stateNode.containerInfo), at(a, Dl, l.memoizedState.cache), We();
        break;
      case 27:
      case 5:
        Fl(a);
        break;
      case 4:
        J(a, a.stateNode.containerInfo);
        break;
      case 10:
        at(a, a.type, a.memoizedProps.value);
        break;
      case 13:
        var e = a.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? (ct(a), (a.flags |= 128), null)
            : (t & a.child.childLanes) !== 0
            ? Rr(l, a, t)
            : (ct(a), (l = Ja(l, a, t)), l !== null ? l.sibling : null);
        ct(a);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((e = (t & a.childLanes) !== 0),
          e || (Fe(l, a, t, !1), (e = (t & a.childLanes) !== 0)),
          u)
        ) {
          if (e) return Hr(l, a, t);
          a.flags |= 128;
        }
        if (
          ((u = a.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          S(xl, xl.current),
          e)
        )
          break;
        return null;
      case 22:
      case 23:
        return (a.lanes = 0), Or(l, a, t);
      case 24:
        at(a, Dl, l.memoizedState.cache);
    }
    return Ja(l, a, t);
  }
  function Cr(l, a, t) {
    if (l !== null)
      if (l.memoizedProps !== a.pendingProps) Cl = !0;
      else {
        if (!vi(l, t) && (a.flags & 128) === 0) return (Cl = !1), Ch(l, a, t);
        Cl = (l.flags & 131072) !== 0;
      }
    else (Cl = !1), ul && (a.flags & 1048576) !== 0 && os(a, Iu, a.index);
    switch (((a.lanes = 0), a.tag)) {
      case 16:
        l: {
          l = a.pendingProps;
          var e = a.elementType,
            u = e._init;
          if (((e = u(e._payload)), (a.type = e), typeof e == "function"))
            Nc(e)
              ? ((l = qt(e, l)), (a.tag = 1), (a = xr(null, a, e, l, t)))
              : ((a.tag = 0), (a = fi(null, a, e, l, t)));
          else {
            if (e != null) {
              if (((u = e.$$typeof), u === kl)) {
                (a.tag = 11), (a = Nr(null, a, e, l, t));
                break l;
              } else if (u === El) {
                (a.tag = 14), (a = Tr(null, a, e, l, t));
                break l;
              }
            }
            throw ((a = Da(e) || e), Error(m(306, a, "")));
          }
        }
        return a;
      case 0:
        return fi(l, a, a.type, a.pendingProps, t);
      case 1:
        return (e = a.type), (u = qt(e, a.pendingProps)), xr(l, a, e, u, t);
      case 3:
        l: {
          if ((J(a, a.stateNode.containerInfo), l === null))
            throw Error(m(387));
          e = a.pendingProps;
          var n = a.memoizedState;
          (u = n.element), Yc(l, a), uu(a, e, null, t);
          var c = a.memoizedState;
          if (
            ((e = c.cache),
            at(a, Dl, e),
            e !== n.cache && Rc(a, [Dl], t, !0),
            eu(),
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
              (u = Sa(Error(m(424)), a)), ke(u), (a = jr(l, a, e, t));
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
                Sl = Ma(l.firstChild),
                  Wl = a,
                  ul = !0,
                  xt = null,
                  ja = !0,
                  t = hr(a, null, e, t),
                  a.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
            }
          else {
            if ((We(), e === u)) {
              a = Ja(l, a, t);
              break l;
            }
            Gl(l, a, e, t);
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
              : ul ||
                ((t = a.type),
                (l = a.pendingProps),
                (e = Hn(j.current).createElement(t)),
                (e[Kl] = a),
                (e[Pl] = l),
                Zl(e, t, l),
                Hl(e),
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
          Fl(a),
          l === null &&
            ul &&
            ((e = a.stateNode = Bo(a.type, a.pendingProps, j.current)),
            (Wl = a),
            (ja = !0),
            (u = Sl),
            yt(a.type) ? ((Wi = u), (Sl = Ma(e.firstChild))) : (Sl = u)),
          Gl(l, a, a.pendingProps.children, t),
          Sn(l, a),
          l === null && (a.flags |= 4194304),
          a.child
        );
      case 5:
        return (
          l === null &&
            ul &&
            ((u = e = Sl) &&
              ((e = s0(e, a.type, a.pendingProps, ja)),
              e !== null
                ? ((a.stateNode = e),
                  (Wl = a),
                  (Sl = Ma(e.firstChild)),
                  (ja = !1),
                  (u = !0))
                : (u = !1)),
            u || jt(a)),
          Fl(a),
          (u = a.type),
          (n = a.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (e = n.children),
          Ki(u, n) ? (e = null) : c !== null && Ki(u, c) && (a.flags |= 32),
          a.memoizedState !== null &&
            ((u = Lc(l, a, Oh, null, null, t)), (_u._currentValue = u)),
          Sn(l, a),
          Gl(l, a, e, t),
          a.child
        );
      case 6:
        return (
          l === null &&
            ul &&
            ((l = t = Sl) &&
              ((t = r0(t, a.pendingProps, ja)),
              t !== null
                ? ((a.stateNode = t), (Wl = a), (Sl = null), (l = !0))
                : (l = !1)),
            l || jt(a)),
          null
        );
      case 13:
        return Rr(l, a, t);
      case 4:
        return (
          J(a, a.stateNode.containerInfo),
          (e = a.pendingProps),
          l === null ? (a.child = me(a, null, e, t)) : Gl(l, a, e, t),
          a.child
        );
      case 11:
        return Nr(l, a, a.type, a.pendingProps, t);
      case 7:
        return Gl(l, a, a.pendingProps, t), a.child;
      case 8:
        return Gl(l, a, a.pendingProps.children, t), a.child;
      case 12:
        return Gl(l, a, a.pendingProps.children, t), a.child;
      case 10:
        return (
          (e = a.pendingProps),
          at(a, a.type, e.value),
          Gl(l, a, e.children, t),
          a.child
        );
      case 9:
        return (
          (u = a.type._context),
          (e = a.pendingProps.children),
          Ut(a),
          (u = Jl(u)),
          (e = e(u)),
          (a.flags |= 1),
          Gl(l, a, e, t),
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
            : ((t = Xa(l.child, e)),
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
          Ut(a),
          (e = Jl(Dl)),
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
              at(a, Dl, u))
            : ((l.lanes & t) !== 0 && (Yc(l, a), uu(a, null, null, t), eu()),
              (u = l.memoizedState),
              (n = a.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (a.memoizedState = u),
                  a.lanes === 0 &&
                    (a.memoizedState = a.updateQueue.baseState = u),
                  at(a, Dl, e))
                : ((e = n.cache),
                  at(a, Dl, e),
                  e !== u.cache && Rc(a, [Dl], t, !0))),
          Gl(l, a, a.pendingProps.children, t),
          a.child
        );
      case 29:
        throw a.pendingProps;
    }
    throw Error(m(156, a.tag));
  }
  function wa(l) {
    l.flags |= 4;
  }
  function qr(l, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Ko(a))) {
      if (
        ((a = pa.current),
        a !== null &&
          ((tl & 4194048) === tl
            ? Ra !== null
            : ((tl & 62914560) !== tl && (tl & 536870912) === 0) || a !== Ra))
      )
        throw ((au = qc), Ss);
      l.flags |= 8192;
    }
  }
  function An(l, a) {
    a !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((a = l.tag !== 22 ? mf() : 536870912), (l.lanes |= a), (be |= a));
  }
  function ou(l, a) {
    if (!ul)
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
        return bl(a), null;
      case 1:
        return bl(a), null;
      case 3:
        return (
          (t = a.stateNode),
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          a.memoizedState.cache !== e && (a.flags |= 2048),
          Va(Dl),
          fl(),
          t.pendingContext &&
            ((t.context = t.pendingContext), (t.pendingContext = null)),
          (l === null || l.child === null) &&
            ($e(a)
              ? wa(a)
              : l === null ||
                (l.memoizedState.isDehydrated && (a.flags & 256) === 0) ||
                ((a.flags |= 1024), ms())),
          bl(a),
          null
        );
      case 26:
        return (
          (t = a.memoizedState),
          l === null
            ? (wa(a),
              t !== null ? (bl(a), qr(a, t)) : (bl(a), (a.flags &= -16777217)))
            : t
            ? t !== l.memoizedState
              ? (wa(a), bl(a), qr(a, t))
              : (bl(a), (a.flags &= -16777217))
            : (l.memoizedProps !== e && wa(a), bl(a), (a.flags &= -16777217)),
          null
        );
      case 27:
        Ll(a), (t = j.current);
        var u = a.type;
        if (l !== null && a.stateNode != null) l.memoizedProps !== e && wa(a);
        else {
          if (!e) {
            if (a.stateNode === null) throw Error(m(166));
            return bl(a), null;
          }
          (l = T.current),
            $e(a) ? ds(a) : ((l = Bo(u, e, t)), (a.stateNode = l), wa(a));
        }
        return bl(a), null;
      case 5:
        if ((Ll(a), (t = a.type), l !== null && a.stateNode != null))
          l.memoizedProps !== e && wa(a);
        else {
          if (!e) {
            if (a.stateNode === null) throw Error(m(166));
            return bl(a), null;
          }
          if (((l = T.current), $e(a))) ds(a);
          else {
            switch (((u = Hn(j.current)), l)) {
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
            (l[Kl] = a), (l[Pl] = e);
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
            l: switch ((Zl(l, t, e), t)) {
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
            l && wa(a);
          }
        }
        return bl(a), (a.flags &= -16777217), null;
      case 6:
        if (l && a.stateNode != null) l.memoizedProps !== e && wa(a);
        else {
          if (typeof e != "string" && a.stateNode === null) throw Error(m(166));
          if (((l = j.current), $e(a))) {
            if (
              ((l = a.stateNode),
              (t = a.memoizedProps),
              (e = null),
              (u = Wl),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            (l[Kl] = a),
              (l = !!(
                l.nodeValue === t ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                xo(l.nodeValue, t)
              )),
              l || jt(a);
          } else (l = Hn(l).createTextNode(e)), (l[Kl] = a), (a.stateNode = l);
        }
        return bl(a), null;
      case 13:
        if (
          ((e = a.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = $e(a)), e !== null && e.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(m(318));
              if (
                ((u = a.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(m(317));
              u[Kl] = a;
            } else
              We(),
                (a.flags & 128) === 0 && (a.memoizedState = null),
                (a.flags |= 4);
            bl(a), (u = !1);
          } else
            (u = ms()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return a.flags & 256 ? (Ka(a), a) : (Ka(a), null);
        }
        if ((Ka(a), (a.flags & 128) !== 0)) return (a.lanes = t), a;
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
          bl(a),
          null
        );
      case 4:
        return fl(), l === null && Gi(a.stateNode.containerInfo), bl(a), null;
      case 10:
        return Va(a.type), bl(a), null;
      case 19:
        if ((d(xl), (u = a.memoizedState), u === null)) return bl(a), null;
        if (((e = (a.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) ou(u, !1);
          else {
            if (zl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = a.child; l !== null; ) {
                if (((n = yn(l)), n !== null)) {
                  for (
                    a.flags |= 128,
                      ou(u, !1),
                      l = n.updateQueue,
                      a.updateQueue = l,
                      An(a, l),
                      a.subtreeFlags = 0,
                      l = t,
                      t = a.child;
                    t !== null;

                  )
                    rs(t, l), (t = t.sibling);
                  return S(xl, (xl.current & 1) | 2), a.child;
                }
                l = l.sibling;
              }
            u.tail !== null &&
              Il() > Nn &&
              ((a.flags |= 128), (e = !0), ou(u, !1), (a.lanes = 4194304));
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
                ou(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !ul)
              )
                return bl(a), null;
            } else
              2 * Il() - u.renderingStartTime > Nn &&
                t !== 536870912 &&
                ((a.flags |= 128), (e = !0), ou(u, !1), (a.lanes = 4194304));
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
            (u.renderingStartTime = Il()),
            (a.sibling = null),
            (l = xl.current),
            S(xl, e ? (l & 1) | 2 : l & 1),
            a)
          : (bl(a), null);
      case 22:
      case 23:
        return (
          Ka(a),
          Zc(),
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
          l !== null && d(Ht),
          null
        );
      case 24:
        return (
          (t = null),
          l !== null && (t = l.memoizedState.cache),
          a.memoizedState.cache !== t && (a.flags |= 2048),
          Va(Dl),
          bl(a),
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
          Va(Dl),
          fl(),
          (l = a.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((a.flags = (l & -65537) | 128), a)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ll(a), null;
      case 13:
        if (
          (Ka(a), (l = a.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (a.alternate === null) throw Error(m(340));
          We();
        }
        return (
          (l = a.flags), l & 65536 ? ((a.flags = (l & -65537) | 128), a) : null
        );
      case 19:
        return d(xl), null;
      case 4:
        return fl(), null;
      case 10:
        return Va(a.type), null;
      case 22:
      case 23:
        return (
          Ka(a),
          Zc(),
          l !== null && d(Ht),
          (l = a.flags),
          l & 65536 ? ((a.flags = (l & -65537) | 128), a) : null
        );
      case 24:
        return Va(Dl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Br(l, a) {
    switch ((Mc(a), a.tag)) {
      case 3:
        Va(Dl), fl();
        break;
      case 26:
      case 27:
      case 5:
        Ll(a);
        break;
      case 4:
        fl();
        break;
      case 13:
        Ka(a);
        break;
      case 19:
        d(xl);
        break;
      case 10:
        Va(a.type);
        break;
      case 22:
      case 23:
        Ka(a), Zc(), l !== null && d(Ht);
        break;
      case 24:
        Va(Dl);
    }
  }
  function du(l, a) {
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
  function ft(l, a, t) {
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
              } catch (A) {
                ml(u, f, A);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (A) {
      ml(a, a.return, A);
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
    (t.props = qt(l.type, l.memoizedProps)), (t.state = l.memoizedState);
    try {
      t.componentWillUnmount();
    } catch (e) {
      ml(l, a, e);
    }
  }
  function hu(l, a) {
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
      u0(e, l.type, t, a), (e[Pl] = a);
    } catch (u) {
      ml(l, l.return, u);
    }
  }
  function Qr(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && yt(l.type)) ||
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
          (l.tag === 27 && yt(l.type)) ||
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
      (e === 27 && yt(l.type) && ((t = l.stateNode), (a = null)),
      (l = l.child),
      l !== null)
    )
      for (bi(l, a, t), l = l.sibling; l !== null; )
        bi(l, a, t), (l = l.sibling);
  }
  function En(l, a, t) {
    var e = l.tag;
    if (e === 5 || e === 6)
      (l = l.stateNode), a ? t.insertBefore(l, a) : t.appendChild(l);
    else if (
      e !== 4 &&
      (e === 27 && yt(l.type) && (t = l.stateNode), (l = l.child), l !== null)
    )
      for (En(l, a, t), l = l.sibling; l !== null; )
        En(l, a, t), (l = l.sibling);
  }
  function Zr(l) {
    var a = l.stateNode,
      t = l.memoizedProps;
    try {
      for (var e = l.type, u = a.attributes; u.length; )
        a.removeAttributeNode(u[0]);
      Zl(a, e, t), (a[Kl] = l), (a[Pl] = t);
    } catch (n) {
      ml(l, l.return, n);
    }
  }
  var $a = !1,
    Tl = !1,
    Si = !1,
    Vr = typeof WeakSet == "function" ? WeakSet : Set,
    ql = null;
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
              A = 0,
              N = l,
              g = null;
            a: for (;;) {
              for (
                var b;
                N !== t || (u !== 0 && N.nodeType !== 3) || (i = c + u),
                  N !== n || (e !== 0 && N.nodeType !== 3) || (f = c + e),
                  N.nodeType === 3 && (c += N.nodeValue.length),
                  (b = N.firstChild) !== null;

              )
                (g = N), (N = b);
              for (;;) {
                if (N === l) break a;
                if (
                  (g === t && ++y === u && (i = c),
                  g === n && ++A === e && (f = c),
                  (b = N.nextSibling) !== null)
                )
                  break;
                (N = g), (g = N.parentNode);
              }
              N = b;
            }
            t = i === -1 || f === -1 ? null : { start: i, end: f };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      Li = { focusedElem: l, selectionRange: t }, Gn = !1, ql = a;
      ql !== null;

    )
      if (
        ((a = ql), (l = a.child), (a.subtreeFlags & 1024) !== 0 && l !== null)
      )
        (l.return = a), (ql = l);
      else
        for (; ql !== null; ) {
          switch (((a = ql), (n = a.alternate), (l = a.flags), a.tag)) {
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
                  var V = qt(t.type, u, t.elementType === t.type);
                  (l = e.getSnapshotBeforeUpdate(V, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = l);
                } catch (Q) {
                  ml(t, t.return, Q);
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
            (l.return = a.return), (ql = l);
            break;
          }
          ql = a.return;
        }
  }
  function Lr(l, a, t) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        st(l, t), e & 4 && du(5, t);
        break;
      case 1:
        if ((st(l, t), e & 4))
          if (((l = t.stateNode), a === null))
            try {
              l.componentDidMount();
            } catch (c) {
              ml(t, t.return, c);
            }
          else {
            var u = qt(t.type, a.memoizedProps);
            a = a.memoizedState;
            try {
              l.componentDidUpdate(u, a, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              ml(t, t.return, c);
            }
          }
        e & 64 && Yr(t), e & 512 && hu(t, t.return);
        break;
      case 3:
        if ((st(l, t), e & 64 && ((l = t.updateQueue), l !== null))) {
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
        st(l, t), a === null && e & 4 && Gr(t), e & 512 && hu(t, t.return);
        break;
      case 12:
        st(l, t);
        break;
      case 13:
        st(l, t),
          e & 4 && wr(l, t),
          e & 64 &&
            ((l = t.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((t = wh.bind(null, t)), o0(l, t))));
        break;
      case 22:
        if (((e = t.memoizedState !== null || $a), !e)) {
          (a = (a !== null && a.memoizedState !== null) || Tl), (u = $a);
          var n = Tl;
          ($a = e),
            (Tl = a) && !n ? rt(l, t, (t.subtreeFlags & 8772) !== 0) : st(l, t),
            ($a = u),
            (Tl = n);
        }
        break;
      case 30:
        break;
      default:
        st(l, t);
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
  var yl = null,
    ta = !1;
  function Wa(l, a, t) {
    for (t = t.child; t !== null; ) Jr(l, a, t), (t = t.sibling);
  }
  function Jr(l, a, t) {
    if (na && typeof na.onCommitFiberUnmount == "function")
      try {
        na.onCommitFiberUnmount(He, t);
      } catch {}
    switch (t.tag) {
      case 26:
        Tl || Ua(t, a),
          Wa(l, a, t),
          t.memoizedState
            ? t.memoizedState.count--
            : t.stateNode && ((t = t.stateNode), t.parentNode.removeChild(t));
        break;
      case 27:
        Tl || Ua(t, a);
        var e = yl,
          u = ta;
        yt(t.type) && ((yl = t.stateNode), (ta = !1)),
          Wa(l, a, t),
          Eu(t.stateNode),
          (yl = e),
          (ta = u);
        break;
      case 5:
        Tl || Ua(t, a);
      case 6:
        if (
          ((e = yl),
          (u = ta),
          (yl = null),
          Wa(l, a, t),
          (yl = e),
          (ta = u),
          yl !== null)
        )
          if (ta)
            try {
              (yl.nodeType === 9
                ? yl.body
                : yl.nodeName === "HTML"
                ? yl.ownerDocument.body
                : yl
              ).removeChild(t.stateNode);
            } catch (n) {
              ml(t, a, n);
            }
          else
            try {
              yl.removeChild(t.stateNode);
            } catch (n) {
              ml(t, a, n);
            }
        break;
      case 18:
        yl !== null &&
          (ta
            ? ((l = yl),
              Co(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                t.stateNode
              ),
              xu(l))
            : Co(yl, t.stateNode));
        break;
      case 4:
        (e = yl),
          (u = ta),
          (yl = t.stateNode.containerInfo),
          (ta = !0),
          Wa(l, a, t),
          (yl = e),
          (ta = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Tl || ft(2, t, a), Tl || ft(4, t, a), Wa(l, a, t);
        break;
      case 1:
        Tl ||
          (Ua(t, a),
          (e = t.stateNode),
          typeof e.componentWillUnmount == "function" && Xr(t, a, e)),
          Wa(l, a, t);
        break;
      case 21:
        Wa(l, a, t);
        break;
      case 22:
        (Tl = (e = Tl) || t.memoizedState !== null), Wa(l, a, t), (Tl = e);
        break;
      default:
        Wa(l, a, t);
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
        xu(l);
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
  function sa(l, a) {
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
              if (yt(i.type)) {
                (yl = i.stateNode), (ta = !1);
                break l;
              }
              break;
            case 5:
              (yl = i.stateNode), (ta = !1);
              break l;
            case 3:
            case 4:
              (yl = i.stateNode.containerInfo), (ta = !0);
              break l;
          }
          i = i.return;
        }
        if (yl === null) throw Error(m(160));
        Jr(n, c, u),
          (yl = null),
          (ta = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (a.subtreeFlags & 13878)
      for (a = a.child; a !== null; ) $r(a, l), (a = a.sibling);
  }
  var Oa = null;
  function $r(l, a) {
    var t = l.alternate,
      e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        sa(a, l),
          ra(l),
          e & 4 && (ft(3, l, l.return), du(3, l), ft(5, l, l.return));
        break;
      case 1:
        sa(a, l),
          ra(l),
          e & 512 && (Tl || t === null || Ua(t, t.return)),
          e & 64 &&
            $a &&
            ((l = l.updateQueue),
            l !== null &&
              ((e = l.callbacks),
              e !== null &&
                ((t = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = t === null ? e : t.concat(e)))));
        break;
      case 26:
        var u = Oa;
        if (
          (sa(a, l),
          ra(l),
          e & 512 && (Tl || t === null || Ua(t, t.return)),
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
                          n[Be] ||
                          n[Kl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        Zl(n, e, t),
                        (n[Kl] = l),
                        Hl(n),
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
                        Zl(n, e, t),
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
                        Zl(n, e, t),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, e));
                  }
                  (n[Kl] = l), Hl(n), (e = n);
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
        sa(a, l),
          ra(l),
          e & 512 && (Tl || t === null || Ua(t, t.return)),
          t !== null && e & 4 && yi(l, l.memoizedProps, t.memoizedProps);
        break;
      case 5:
        if (
          (sa(a, l),
          ra(l),
          e & 512 && (Tl || t === null || Ua(t, t.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            kt(u, "");
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
        if ((sa(a, l), ra(l), e & 4)) {
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
          (u = Oa),
          (Oa = Cn(a.containerInfo)),
          sa(a, l),
          (Oa = u),
          ra(l),
          e & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            xu(a.containerInfo);
          } catch (b) {
            ml(l, l.return, b);
          }
        Si && ((Si = !1), Wr(l));
        break;
      case 4:
        (e = Oa),
          (Oa = Cn(l.stateNode.containerInfo)),
          sa(a, l),
          ra(l),
          (Oa = e);
        break;
      case 12:
        sa(a, l), ra(l);
        break;
      case 13:
        sa(a, l),
          ra(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (t !== null && t.memoizedState !== null) &&
            (_i = Il()),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), zi(l, e)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = t !== null && t.memoizedState !== null,
          y = $a,
          A = Tl;
        if (
          (($a = y || u),
          (Tl = A || f),
          sa(a, l),
          (Tl = A),
          ($a = y),
          ra(l),
          e & 8192)
        )
          l: for (
            a = l.stateNode,
              a._visibility = u ? a._visibility & -2 : a._visibility | 1,
              u && (t === null || f || $a || Tl || Bt(l)),
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
                    var N = f.memoizedProps.style,
                      g =
                        N != null && N.hasOwnProperty("display")
                          ? N.display
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
        sa(a, l),
          ra(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), zi(l, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        sa(a, l), ra(l);
    }
  }
  function ra(l) {
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
            En(l, n, u);
            break;
          case 5:
            var c = t.stateNode;
            t.flags & 32 && (kt(c, ""), (t.flags &= -33));
            var i = gi(l);
            En(l, i, c);
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
      } catch (A) {
        ml(l, l.return, A);
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
  function st(l, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; ) Lr(l, a.alternate, a), (a = a.sibling);
  }
  function Bt(l) {
    for (l = l.child; l !== null; ) {
      var a = l;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ft(4, a, a.return), Bt(a);
          break;
        case 1:
          Ua(a, a.return);
          var t = a.stateNode;
          typeof t.componentWillUnmount == "function" && Xr(a, a.return, t),
            Bt(a);
          break;
        case 27:
          Eu(a.stateNode);
        case 26:
        case 5:
          Ua(a, a.return), Bt(a);
          break;
        case 22:
          a.memoizedState === null && Bt(a);
          break;
        case 30:
          Bt(a);
          break;
        default:
          Bt(a);
      }
      l = l.sibling;
    }
  }
  function rt(l, a, t) {
    for (t = t && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var e = a.alternate,
        u = l,
        n = a,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          rt(u, n, t), du(4, n);
          break;
        case 1:
          if (
            (rt(u, n, t),
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
          t && c & 64 && Yr(n), hu(n, n.return);
          break;
        case 27:
          Zr(n);
        case 26:
        case 5:
          rt(u, n, t), t && e === null && c & 4 && Gr(n), hu(n, n.return);
          break;
        case 12:
          rt(u, n, t);
          break;
        case 13:
          rt(u, n, t), t && c & 4 && wr(u, n);
          break;
        case 22:
          n.memoizedState === null && rt(u, n, t), hu(n, n.return);
          break;
        case 30:
          break;
        default:
          rt(u, n, t);
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
      l !== t && (l != null && l.refCount++, t != null && Ie(t));
  }
  function Ei(l, a) {
    (l = null),
      a.alternate !== null && (l = a.alternate.memoizedState.cache),
      (a = a.memoizedState.cache),
      a !== l && (a.refCount++, l != null && Ie(l));
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
        Ha(l, a, t, e), u & 2048 && du(9, a);
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
            a !== l && (a.refCount++, l != null && Ie(l)));
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
              : mu(l, a)
            : n._visibility & 2
            ? Ha(l, a, t, e)
            : ((n._visibility |= 2),
              ve(l, a, t, e, (a.subtreeFlags & 10256) !== 0)),
          u & 2048 && Ai(c, a);
        break;
      case 24:
        Ha(l, a, t, e), u & 2048 && Ei(a.alternate, a);
        break;
      default:
        Ha(l, a, t, e);
    }
  }
  function ve(l, a, t, e, u) {
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
          ve(n, c, i, f, u), du(8, c);
          break;
        case 23:
          break;
        case 22:
          var A = c.stateNode;
          c.memoizedState !== null
            ? A._visibility & 2
              ? ve(n, c, i, f, u)
              : mu(n, c)
            : ((A._visibility |= 2), ve(n, c, i, f, u)),
            u && y & 2048 && Ai(c.alternate, c);
          break;
        case 24:
          ve(n, c, i, f, u), u && y & 2048 && Ei(c.alternate, c);
          break;
        default:
          ve(n, c, i, f, u);
      }
      a = a.sibling;
    }
  }
  function mu(l, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var t = l,
          e = a,
          u = e.flags;
        switch (e.tag) {
          case 22:
            mu(t, e), u & 2048 && Ai(e.alternate, e);
            break;
          case 24:
            mu(t, e), u & 2048 && Ei(e.alternate, e);
            break;
          default:
            mu(t, e);
        }
        a = a.sibling;
      }
  }
  var vu = 8192;
  function ye(l) {
    if (l.subtreeFlags & vu)
      for (l = l.child; l !== null; ) Fr(l), (l = l.sibling);
  }
  function Fr(l) {
    switch (l.tag) {
      case 26:
        ye(l),
          l.flags & vu &&
            l.memoizedState !== null &&
            N0(Oa, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        ye(l);
        break;
      case 3:
      case 4:
        var a = Oa;
        (Oa = Cn(l.stateNode.containerInfo)), ye(l), (Oa = a);
        break;
      case 22:
        l.memoizedState === null &&
          ((a = l.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = vu), (vu = 16777216), ye(l), (vu = a))
            : ye(l));
        break;
      default:
        ye(l);
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
  function yu(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var e = a[t];
          (ql = e), lo(e, l);
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
        yu(l), l.flags & 2048 && ft(9, l, l.return);
        break;
      case 3:
        yu(l);
        break;
      case 12:
        yu(l);
        break;
      case 22:
        var a = l.stateNode;
        l.memoizedState !== null &&
        a._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((a._visibility &= -3), pn(l))
          : yu(l);
        break;
      default:
        yu(l);
    }
  }
  function pn(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var e = a[t];
          (ql = e), lo(e, l);
        }
      Ir(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((a = l), a.tag)) {
        case 0:
        case 11:
        case 15:
          ft(8, a, a.return), pn(a);
          break;
        case 22:
          (t = a.stateNode),
            t._visibility & 2 && ((t._visibility &= -3), pn(a));
          break;
        default:
          pn(a);
      }
      l = l.sibling;
    }
  }
  function lo(l, a) {
    for (; ql !== null; ) {
      var t = ql;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ft(8, t, a);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var e = t.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Ie(t.memoizedState.cache);
      }
      if (((e = t.child), e !== null)) (e.return = t), (ql = e);
      else
        l: for (t = l; ql !== null; ) {
          e = ql;
          var u = e.sibling,
            n = e.return;
          if ((Kr(e), e === t)) {
            ql = null;
            break l;
          }
          if (u !== null) {
            (u.return = n), (ql = u);
            break l;
          }
          ql = n;
        }
    }
  }
  var Gh = {
      getCacheForType: function (l) {
        var a = Jl(Dl),
          t = a.data.get(l);
        return t === void 0 && ((t = l()), a.data.set(l, t)), t;
      },
    },
    Qh = typeof WeakMap == "function" ? WeakMap : Map,
    sl = 0,
    vl = null,
    I = null,
    tl = 0,
    rl = 0,
    oa = null,
    ot = !1,
    ge = !1,
    pi = !1,
    ka = 0,
    zl = 0,
    dt = 0,
    Yt = 0,
    Ni = 0,
    Na = 0,
    be = 0,
    gu = null,
    ea = null,
    Ti = !1,
    _i = 0,
    Nn = 1 / 0,
    Tn = null,
    ht = null,
    Ql = 0,
    mt = null,
    Se = null,
    ze = 0,
    Oi = 0,
    Mi = null,
    ao = null,
    bu = 0,
    Di = null;
  function da() {
    if ((sl & 2) !== 0 && tl !== 0) return tl & -tl;
    if (z.T !== null) {
      var l = ie;
      return l !== 0 ? l : qi();
    }
    return gf();
  }
  function to() {
    Na === 0 && (Na = (tl & 536870912) === 0 || ul ? hf() : 536870912);
    var l = pa.current;
    return l !== null && (l.flags |= 32), Na;
  }
  function ha(l, a, t) {
    ((l === vl && (rl === 2 || rl === 9)) || l.cancelPendingCommit !== null) &&
      (Ae(l, 0), vt(l, tl, Na, !1)),
      qe(l, t),
      ((sl & 2) === 0 || l !== vl) &&
        (l === vl &&
          ((sl & 2) === 0 && (Yt |= t), zl === 4 && vt(l, tl, Na, !1)),
        Ca(l));
  }
  function eo(l, a, t) {
    if ((sl & 6) !== 0) throw Error(m(327));
    var e = (!t && (a & 124) === 0 && (a & l.expiredLanes) === 0) || Ce(l, a),
      u = e ? Lh(l, a) : Ri(l, a, !0),
      n = e;
    do {
      if (u === 0) {
        ge && !e && vt(l, a, 0, !1);
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
              u = gu;
              var f = i.current.memoizedState.isDehydrated;
              if ((f && (Ae(i, c).flags |= 256), (c = Ri(i, c, !1)), c !== 2)) {
                if (pi && !f) {
                  (i.errorRecoveryDisabledLanes |= n), (Yt |= n), (u = 4);
                  break l;
                }
                (n = ea),
                  (ea = u),
                  n !== null && (ea === null ? (ea = n) : ea.push.apply(ea, n));
              }
              u = c;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Ae(l, 0), vt(l, a, 0, !0);
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
              vt(e, a, Na, !ot);
              break l;
            case 2:
              ea = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((a & 62914560) === a && ((u = _i + 300 - Il()), 10 < u)) {
            if ((vt(e, a, Na, !ot), Cu(e, 0, !0) !== 0)) break l;
            e.timeoutHandle = Uo(
              uo.bind(null, e, t, ea, Tn, Ti, a, Na, Yt, be, ot, n, 2, -0, 0),
              u
            );
            break l;
          }
          uo(e, t, ea, Tn, Ti, a, Na, Yt, be, ot, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ca(l);
  }
  function uo(l, a, t, e, u, n, c, i, f, y, A, N, g, b) {
    if (
      ((l.timeoutHandle = -1),
      (N = a.subtreeFlags),
      (N & 8192 || (N & 16785408) === 16785408) &&
        ((Tu = { stylesheets: null, count: 0, unsuspend: p0 }),
        Fr(a),
        (N = T0()),
        N !== null))
    ) {
      (l.cancelPendingCommit = N(
        oo.bind(null, l, a, n, t, e, u, c, i, f, A, 1, g, b)
      )),
        vt(l, n, c, !y);
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
            if (!ia(n(), u)) return !1;
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
  function vt(l, a, t, e) {
    (a &= ~Ni),
      (a &= ~Yt),
      (l.suspendedLanes |= a),
      (l.pingedLanes &= ~a),
      e && (l.warmLanes |= a),
      (e = l.expirationTimes);
    for (var u = a; 0 < u; ) {
      var n = 31 - ca(u),
        c = 1 << n;
      (e[n] = -1), (u &= ~c);
    }
    t !== 0 && vf(l, t, a);
  }
  function _n() {
    return (sl & 6) === 0 ? (Su(0), !1) : !0;
  }
  function xi() {
    if (I !== null) {
      if (rl === 0) var l = I.return;
      else (l = I), (Za = Rt = null), wc(l), (he = null), (su = 0), (l = I);
      for (; l !== null; ) Br(l.alternate, l), (l = l.return);
      I = null;
    }
  }
  function Ae(l, a) {
    var t = l.timeoutHandle;
    t !== -1 && ((l.timeoutHandle = -1), c0(t)),
      (t = l.cancelPendingCommit),
      t !== null && ((l.cancelPendingCommit = null), t()),
      xi(),
      (vl = l),
      (I = t = Xa(l.current, null)),
      (tl = a),
      (rl = 0),
      (oa = null),
      (ot = !1),
      (ge = Ce(l, a)),
      (pi = !1),
      (be = Na = Ni = Yt = dt = zl = 0),
      (ea = gu = null),
      (Ti = !1),
      (a & 8) !== 0 && (a |= a & 32);
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= a; 0 < e; ) {
        var u = 31 - ca(e),
          n = 1 << u;
        (a |= l[u]), (e &= ~n);
      }
    return (ka = a), wu(), t;
  }
  function no(l, a) {
    (W = null),
      (z.H = hn),
      a === lu || a === tn
        ? ((a = Es()), (rl = 3))
        : a === Ss
        ? ((a = Es()), (rl = 4))
        : (rl =
            a === pr
              ? 8
              : a !== null &&
                typeof a == "object" &&
                typeof a.then == "function"
              ? 6
              : 1),
      (oa = a),
      I === null && ((zl = 1), bn(l, Sa(a, l.current)));
  }
  function co() {
    var l = z.H;
    return (z.H = hn), l === null ? hn : l;
  }
  function io() {
    var l = z.A;
    return (z.A = Gh), l;
  }
  function ji() {
    (zl = 4),
      ot || ((tl & 4194048) !== tl && pa.current !== null) || (ge = !0),
      ((dt & 134217727) === 0 && (Yt & 134217727) === 0) ||
        vl === null ||
        vt(vl, tl, Na, !1);
  }
  function Ri(l, a, t) {
    var e = sl;
    sl |= 2;
    var u = co(),
      n = io();
    (vl !== l || tl !== a) && ((Tn = null), Ae(l, a)), (a = !1);
    var c = zl;
    l: do
      try {
        if (rl !== 0 && I !== null) {
          var i = I,
            f = oa;
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
              if (((rl = 0), (oa = null), Ee(l, i, f, y), t && ge)) {
                c = 0;
                break l;
              }
              break;
            default:
              (y = rl), (rl = 0), (oa = null), Ee(l, i, f, y);
          }
        }
        Vh(), (c = zl);
        break;
      } catch (A) {
        no(l, A);
      }
    while (!0);
    return (
      a && l.shellSuspendCounter++,
      (Za = Rt = null),
      (sl = e),
      (z.H = u),
      (z.A = n),
      I === null && ((vl = null), (tl = 0), wu()),
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
    vl !== l || tl !== a
      ? ((Tn = null), (Nn = Il() + 500), Ae(l, a))
      : (ge = Ce(l, a));
    l: do
      try {
        if (rl !== 0 && I !== null) {
          a = I;
          var n = oa;
          a: switch (rl) {
            case 1:
              (rl = 0), (oa = null), Ee(l, a, n, 1);
              break;
            case 2:
            case 9:
              if (zs(n)) {
                (rl = 0), (oa = null), so(a);
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
                ? ((rl = 0), (oa = null), so(a))
                : ((rl = 0), (oa = null), Ee(l, a, n, 7));
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
                    (rl = 0), (oa = null);
                    var f = i.sibling;
                    if (f !== null) I = f;
                    else {
                      var y = i.return;
                      y !== null ? ((I = y), On(y)) : (I = null);
                    }
                    break a;
                  }
              }
              (rl = 0), (oa = null), Ee(l, a, n, 5);
              break;
            case 6:
              (rl = 0), (oa = null), Ee(l, a, n, 6);
              break;
            case 8:
              xi(), (zl = 6);
              break l;
            default:
              throw Error(m(462));
          }
        }
        Kh();
        break;
      } catch (A) {
        no(l, A);
      }
    while (!0);
    return (
      (Za = Rt = null),
      (z.H = e),
      (z.A = u),
      (sl = t),
      I !== null ? 0 : ((vl = null), (tl = 0), wu(), zl)
    );
  }
  function Kh() {
    for (; I !== null && !Me(); ) fo(I);
  }
  function fo(l) {
    var a = Cr(l.alternate, l, ka);
    (l.memoizedProps = l.pendingProps), a === null ? On(l) : (I = a);
  }
  function so(l) {
    var a = l,
      t = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = Dr(t, a, a.pendingProps, a.type, void 0, tl);
        break;
      case 11:
        a = Dr(t, a, a.pendingProps, a.type.render, a.ref, tl);
        break;
      case 5:
        wc(a);
      default:
        Br(t, a), (a = I = rs(a, ka)), (a = Cr(t, a, ka));
    }
    (l.memoizedProps = l.pendingProps), a === null ? On(l) : (I = a);
  }
  function Ee(l, a, t, e) {
    (Za = Rt = null), wc(a), (he = null), (su = 0);
    var u = a.return;
    try {
      if (Hh(l, u, a, t, tl)) {
        (zl = 1), bn(l, Sa(t, l.current)), (I = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((I = u), n);
      (zl = 1), bn(l, Sa(t, l.current)), (I = null);
      return;
    }
    a.flags & 32768
      ? (ul || e === 1
          ? (l = !0)
          : ge || (tl & 536870912) !== 0
          ? (l = !1)
          : ((ot = l = !0),
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
        ro(a, ot);
        return;
      }
      l = a.return;
      var t = qh(a.alternate, a, ka);
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
    zl === 0 && (zl = 5);
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
    (zl = 6), (I = null);
  }
  function oo(l, a, t, e, u, n, c, i, f) {
    l.cancelPendingCommit = null;
    do Mn();
    while (Ql !== 0);
    if ((sl & 6) !== 0) throw Error(m(327));
    if (a !== null) {
      if (a === l.current) throw Error(m(177));
      if (
        ((n = a.lanes | a.childLanes),
        (n |= Ec),
        pd(l, t, n, c, i, f),
        l === vl && ((I = vl = null), (tl = 0)),
        (Se = a),
        (mt = l),
        (ze = t),
        (Oi = n),
        (Mi = u),
        (ao = e),
        (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            Wh(Zt, function () {
              return go(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (e = (a.flags & 13878) !== 0),
        (a.subtreeFlags & 13878) !== 0 || e)
      ) {
        (e = z.T), (z.T = null), (u = M.p), (M.p = 2), (c = sl), (sl |= 4);
        try {
          Yh(l, a, t);
        } finally {
          (sl = c), (M.p = u), (z.T = e);
        }
      }
      (Ql = 1), ho(), mo(), vo();
    }
  }
  function ho() {
    if (Ql === 1) {
      Ql = 0;
      var l = mt,
        a = Se,
        t = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || t) {
        (t = z.T), (z.T = null);
        var e = M.p;
        M.p = 2;
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
                A = f.end;
              if ((A === void 0 && (A = y), "selectionStart" in i))
                (i.selectionStart = y),
                  (i.selectionEnd = Math.min(A, i.value.length));
              else {
                var N = i.ownerDocument || document,
                  g = (N && N.defaultView) || window;
                if (g.getSelection) {
                  var b = g.getSelection(),
                    V = i.textContent.length,
                    Q = Math.min(f.start, V),
                    hl = f.end === void 0 ? Q : Math.min(f.end, V);
                  !b.extend && Q > hl && ((c = hl), (hl = Q), (Q = c));
                  var h = If(i, Q),
                    r = If(i, hl);
                  if (
                    h &&
                    r &&
                    (b.rangeCount !== 1 ||
                      b.anchorNode !== h.node ||
                      b.anchorOffset !== h.offset ||
                      b.focusNode !== r.node ||
                      b.focusOffset !== r.offset)
                  ) {
                    var v = N.createRange();
                    v.setStart(h.node, h.offset),
                      b.removeAllRanges(),
                      Q > hl
                        ? (b.addRange(v), b.extend(r.node, r.offset))
                        : (v.setEnd(r.node, r.offset), b.addRange(v));
                  }
                }
              }
            }
            for (N = [], b = i; (b = b.parentNode); )
              b.nodeType === 1 &&
                N.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
            for (
              typeof i.focus == "function" && i.focus(), i = 0;
              i < N.length;
              i++
            ) {
              var p = N[i];
              (p.element.scrollLeft = p.left), (p.element.scrollTop = p.top);
            }
          }
          (Gn = !!Vi), (Li = Vi = null);
        } finally {
          (sl = u), (M.p = e), (z.T = t);
        }
      }
      (l.current = a), (Ql = 2);
    }
  }
  function mo() {
    if (Ql === 2) {
      Ql = 0;
      var l = mt,
        a = Se,
        t = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || t) {
        (t = z.T), (z.T = null);
        var e = M.p;
        M.p = 2;
        var u = sl;
        sl |= 4;
        try {
          Lr(l, a.alternate, a);
        } finally {
          (sl = u), (M.p = e), (z.T = t);
        }
      }
      Ql = 3;
    }
  }
  function vo() {
    if (Ql === 4 || Ql === 3) {
      (Ql = 0), De();
      var l = mt,
        a = Se,
        t = ze,
        e = ao;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
        ? (Ql = 5)
        : ((Ql = 0), (Se = mt = null), yo(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (ht = null),
        kn(t),
        (a = a.stateNode),
        na && typeof na.onCommitFiberRoot == "function")
      )
        try {
          na.onCommitFiberRoot(He, a, void 0, (a.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        (a = z.T), (u = M.p), (M.p = 2), (z.T = null);
        try {
          for (var n = l.onRecoverableError, c = 0; c < e.length; c++) {
            var i = e[c];
            n(i.value, { componentStack: i.stack });
          }
        } finally {
          (z.T = a), (M.p = u);
        }
      }
      (ze & 3) !== 0 && Mn(),
        Ca(l),
        (u = l.pendingLanes),
        (t & 4194090) !== 0 && (u & 42) !== 0
          ? l === Di
            ? bu++
            : ((bu = 0), (Di = l))
          : (bu = 0),
        Su(0);
    }
  }
  function yo(l, a) {
    (l.pooledCacheLanes &= a) === 0 &&
      ((a = l.pooledCache), a != null && ((l.pooledCache = null), Ie(a)));
  }
  function Mn(l) {
    return ho(), mo(), vo(), go();
  }
  function go() {
    if (Ql !== 5) return !1;
    var l = mt,
      a = Oi;
    Oi = 0;
    var t = kn(ze),
      e = z.T,
      u = M.p;
    try {
      (M.p = 32 > t ? 32 : t), (z.T = null), (t = Mi), (Mi = null);
      var n = mt,
        c = ze;
      if (((Ql = 0), (Se = mt = null), (ze = 0), (sl & 6) !== 0))
        throw Error(m(331));
      var i = sl;
      if (
        ((sl |= 4),
        Pr(n.current),
        kr(n, n.current, c, t),
        (sl = i),
        Su(0, !1),
        na && typeof na.onPostCommitFiberRoot == "function")
      )
        try {
          na.onPostCommitFiberRoot(He, n);
        } catch {}
      return !0;
    } finally {
      (M.p = u), (z.T = e), yo(l, a);
    }
  }
  function bo(l, a, t) {
    (a = Sa(t, a)),
      (a = ii(l.stateNode, a, 2)),
      (l = ut(l, a, 2)),
      l !== null && (qe(l, 2), Ca(l));
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
              (ht === null || !ht.has(e)))
          ) {
            (l = Sa(t, l)),
              (t = Ar(2)),
              (e = ut(a, t, 2)),
              e !== null && (Er(t, e, a, l), qe(e, 2), Ca(e));
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
      ((pi = !0), u.add(t), (l = Jh.bind(null, l, a, t)), a.then(l, l));
  }
  function Jh(l, a, t) {
    var e = l.pingCache;
    e !== null && e.delete(a),
      (l.pingedLanes |= l.suspendedLanes & t),
      (l.warmLanes &= ~t),
      vl === l &&
        (tl & t) === t &&
        (zl === 4 || (zl === 3 && (tl & 62914560) === tl && 300 > Il() - _i)
          ? (sl & 2) === 0 && Ae(l, 0)
          : (Ni |= t),
        be === tl && (be = 0)),
      Ca(l);
  }
  function So(l, a) {
    a === 0 && (a = mf()), (l = ee(l, a)), l !== null && (qe(l, a), Ca(l));
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
    return ya(l, a);
  }
  var Dn = null,
    pe = null,
    Hi = !1,
    xn = !1,
    Ci = !1,
    Xt = 0;
  function Ca(l) {
    l !== pe &&
      l.next === null &&
      (pe === null ? (Dn = pe = l) : (pe = pe.next = l)),
      (xn = !0),
      Hi || ((Hi = !0), Fh());
  }
  function Su(l, a) {
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
              (n = (1 << (31 - ca(42 | l) + 1)) - 1),
                (n &= u & ~(c & ~i)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((t = !0), po(e, n));
          } else
            (n = tl),
              (n = Cu(
                e,
                e === vl ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Ce(e, n) || ((t = !0), po(e, n));
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
    Xt !== 0 && (n0() && (l = Xt), (Xt = 0));
    for (var a = Il(), t = null, e = Dn; e !== null; ) {
      var u = e.next,
        n = Ao(e, a);
      n === 0
        ? ((e.next = null),
          t === null ? (Dn = u) : (t.next = u),
          u === null && (pe = t))
        : ((t = e), (l !== 0 || (n & 3) !== 0) && (xn = !0)),
        (e = u);
    }
    Su(l);
  }
  function Ao(l, a) {
    for (
      var t = l.suspendedLanes,
        e = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - ca(n),
        i = 1 << c,
        f = u[c];
      f === -1
        ? ((i & t) === 0 || (i & e) !== 0) && (u[c] = Ed(i, a))
        : f <= a && (l.expiredLanes |= i),
        (n &= ~i);
    }
    if (
      ((a = vl),
      (t = tl),
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
        e !== null && e !== null && xa(e),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((t & 3) === 0 || Ce(l, t)) {
      if (((a = t & -t), a === l.callbackPriority)) return a;
      switch ((e !== null && xa(e), kn(t))) {
        case 2:
        case 8:
          t = Qt;
          break;
        case 32:
          t = Zt;
          break;
        case 268435456:
          t = je;
          break;
        default:
          t = Zt;
      }
      return (
        (e = Eo.bind(null, l)),
        (t = ya(t, e)),
        (l.callbackPriority = a),
        (l.callbackNode = t),
        a
      );
    }
    return (
      e !== null && e !== null && xa(e),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function Eo(l, a) {
    if (Ql !== 0 && Ql !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var t = l.callbackNode;
    if (Mn() && l.callbackNode !== t) return null;
    var e = tl;
    return (
      (e = Cu(
        l,
        l === vl ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      e === 0
        ? null
        : (eo(l, e, a),
          Ao(l, Il()),
          l.callbackNode != null && l.callbackNode === t
            ? Eo.bind(null, l)
            : null)
    );
  }
  function po(l, a) {
    if (Mn()) return null;
    eo(l, a, !0);
  }
  function Fh() {
    i0(function () {
      (sl & 6) !== 0 ? ya(Gt, kh) : zo();
    });
  }
  function qi() {
    return Xt === 0 && (Xt = hf()), Xt;
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
      var n = No((u[Pl] || null).action),
        c = e.submitter;
      c &&
        ((a = (a = c[Pl] || null)
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
                if (Xt !== 0) {
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
      l0 = Yi[0].toUpperCase() + Yi.slice(1);
    _a(Ph, "on" + l0);
  }
  _a(es, "onAnimationEnd"),
    _a(us, "onAnimationIteration"),
    _a(ns, "onAnimationStart"),
    _a("dblclick", "onDoubleClick"),
    _a("focusin", "onFocus"),
    _a("focusout", "onBlur"),
    _a(gh, "onTransitionRun"),
    _a(bh, "onTransitionStart"),
    _a(Sh, "onTransitionCancel"),
    _a(cs, "onTransitionEnd"),
    wt("onMouseEnter", ["mouseout", "mouseover"]),
    wt("onMouseLeave", ["mouseout", "mouseover"]),
    wt("onPointerEnter", ["pointerout", "pointerover"]),
    wt("onPointerLeave", ["pointerout", "pointerover"]),
    pt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    pt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    pt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    pt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    pt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    pt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var zu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    a0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(zu)
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
            } catch (A) {
              gn(A);
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
            } catch (A) {
              gn(A);
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
          t !== "selectionchange" && (a0.has(t) || Xi(t, !1, l), Xi(t, !0, l));
        });
      var a = l.nodeType === 9 ? l : l.ownerDocument;
      a === null || a[jn] || ((a[jn] = !0), Xi("selectionchange", !1, a));
    }
  }
  function Oo(l, a, t, e) {
    switch (Fo(a)) {
      case 2:
        var u = M0;
        break;
      case 8:
        u = D0;
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
            if (((c = Lt(i)), c === null)) return;
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
        A = cc(t),
        N = [];
      l: {
        var g = is.get(l);
        if (g !== void 0) {
          var b = Lu,
            V = l;
          switch (l) {
            case "keypress":
              if (Zu(t) === 0) break l;
            case "keydown":
            case "keyup":
              b = Wd;
              break;
            case "focusin":
              (V = "focus"), (b = dc);
              break;
            case "focusout":
              (V = "blur"), (b = dc);
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
          var Q = (a & 4) !== 0,
            hl = !Q && (l === "scroll" || l === "scrollend"),
            h = Q ? (g !== null ? g + "Capture" : null) : g;
          Q = [];
          for (var r = y, v; r !== null; ) {
            var p = r;
            if (
              ((v = p.stateNode),
              (p = p.tag),
              (p !== 5 && p !== 26 && p !== 27) ||
                v === null ||
                h === null ||
                ((p = Xe(r, h)), p != null && Q.push(Au(r, p, v))),
              hl)
            )
              break;
            r = r.return;
          }
          0 < Q.length &&
            ((g = new b(g, V, null, t, A)), N.push({ event: g, listeners: Q }));
        }
      }
      if ((a & 7) === 0) {
        l: {
          if (
            ((g = l === "mouseover" || l === "pointerover"),
            (b = l === "mouseout" || l === "pointerout"),
            g &&
              t !== nc &&
              (V = t.relatedTarget || t.fromElement) &&
              (Lt(V) || V[Vt]))
          )
            break l;
          if (
            (b || g) &&
            ((g =
              A.window === A
                ? A
                : (g = A.ownerDocument)
                ? g.defaultView || g.parentWindow
                : window),
            b
              ? ((V = t.relatedTarget || t.toElement),
                (b = y),
                (V = V ? Lt(V) : null),
                V !== null &&
                  ((hl = U(V)),
                  (Q = V.tag),
                  V !== hl || (Q !== 5 && Q !== 27 && Q !== 6)) &&
                  (V = null))
              : ((b = null), (V = y)),
            b !== V)
          ) {
            if (
              ((Q = qf),
              (p = "onMouseLeave"),
              (h = "onMouseEnter"),
              (r = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((Q = Yf),
                (p = "onPointerLeave"),
                (h = "onPointerEnter"),
                (r = "pointer")),
              (hl = b == null ? g : Ye(b)),
              (v = V == null ? g : Ye(V)),
              (g = new Q(p, r + "leave", b, t, A)),
              (g.target = hl),
              (g.relatedTarget = v),
              (p = null),
              Lt(A) === y &&
                ((Q = new Q(h, r + "enter", V, t, A)),
                (Q.target = v),
                (Q.relatedTarget = hl),
                (p = Q)),
              (hl = p),
              b && V)
            )
              a: {
                for (Q = b, h = V, r = 0, v = Q; v; v = Ne(v)) r++;
                for (v = 0, p = h; p; p = Ne(p)) v++;
                for (; 0 < r - v; ) (Q = Ne(Q)), r--;
                for (; 0 < v - r; ) (h = Ne(h)), v--;
                for (; r--; ) {
                  if (Q === h || (h !== null && Q === h.alternate)) break a;
                  (Q = Ne(Q)), (h = Ne(h));
                }
                Q = null;
              }
            else Q = null;
            b !== null && Mo(N, g, b, Q, !1),
              V !== null && hl !== null && Mo(N, hl, V, Q, !0);
          }
        }
        l: {
          if (
            ((g = y ? Ye(y) : window),
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
            Kf(N, H, t, A);
            break l;
          }
          F && F(l, g, y),
            l === "focusout" &&
              y &&
              g.type === "number" &&
              y.memoizedProps.value != null &&
              ec(g, "number", g.value);
        }
        switch (((F = y ? Ye(y) : window), l)) {
          case "focusin":
            (Lf(F) || F.contentEditable === "true") &&
              ((le = F), (bc = y), (we = null));
            break;
          case "focusout":
            we = bc = le = null;
            break;
          case "mousedown":
            Sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Sc = !1), as(N, t, A);
            break;
          case "selectionchange":
            if (yh) break;
          case "keydown":
          case "keyup":
            as(N, t, A);
        }
        var Y;
        if (mc)
          l: {
            switch (l) {
              case "compositionstart":
                var Z = "onCompositionStart";
                break l;
              case "compositionend":
                Z = "onCompositionEnd";
                break l;
              case "compositionupdate":
                Z = "onCompositionUpdate";
                break l;
            }
            Z = void 0;
          }
        else
          Pt
            ? Zf(l, t) && (Z = "onCompositionEnd")
            : l === "keydown" &&
              t.keyCode === 229 &&
              (Z = "onCompositionStart");
        Z &&
          (Xf &&
            t.locale !== "ko" &&
            (Pt || Z !== "onCompositionStart"
              ? Z === "onCompositionEnd" && Pt && (Y = Hf())
              : ((lt = A),
                (sc = "value" in lt ? lt.value : lt.textContent),
                (Pt = !0))),
          (F = Rn(y, Z)),
          0 < F.length &&
            ((Z = new Bf(Z, l, null, t, A)),
            N.push({ event: Z, listeners: F }),
            Y ? (Z.data = Y) : ((Y = Vf(t)), Y !== null && (Z.data = Y)))),
          (Y = ch ? ih(l, t) : fh(l, t)) &&
            ((Z = Rn(y, "onBeforeInput")),
            0 < Z.length &&
              ((F = new Bf("onBeforeInput", "beforeinput", null, t, A)),
              N.push({ event: F, listeners: Z }),
              (F.data = Y))),
          Ih(N, l, y, t, A);
      }
      _o(N, a);
    });
  }
  function Au(l, a, t) {
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
          ((u = Xe(l, t)),
          u != null && e.unshift(Au(l, u, n)),
          (u = Xe(l, a)),
          u != null && e.push(Au(l, u, n))),
        l.tag === 3)
      )
        return e;
      l = l.return;
    }
    return [];
  }
  function Ne(l) {
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
          ? ((y = Xe(t, n)), y != null && c.unshift(Au(t, y, f)))
          : u || ((y = Xe(t, n)), y != null && c.push(Au(t, y, f)))),
        (t = t.return);
    }
    c.length !== 0 && l.push({ event: a, listeners: c });
  }
  var t0 = /\r\n?/g,
    e0 = /\u0000|\uFFFD/g;
  function Do(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        t0,
        `
`
      )
      .replace(e0, "");
  }
  function xo(l, a) {
    return (a = Do(a)), Do(l) === a;
  }
  function Un() {}
  function dl(l, a, t, e, u, n) {
    switch (t) {
      case "children":
        typeof e == "string"
          ? a === "body" || (a === "textarea" && e === "") || kt(l, e)
          : (typeof e == "number" || typeof e == "bigint") &&
            a !== "body" &&
            kt(l, "" + e);
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
        Ba(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Ba(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Ba(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Ba(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Ba(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Ba(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Ba(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Ba(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Ba(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
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
          ? kt(l, e)
          : (typeof e == "number" || typeof e == "bigint") && kt(l, "" + e);
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
              (n = l[Pl] || null),
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
  function Zl(l, a, t) {
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
            var A = t[e];
            if (A != null)
              switch (e) {
                case "name":
                  u = A;
                  break;
                case "type":
                  c = A;
                  break;
                case "checked":
                  f = A;
                  break;
                case "defaultChecked":
                  y = A;
                  break;
                case "value":
                  n = A;
                  break;
                case "defaultValue":
                  i = A;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (A != null) throw Error(m(137, a));
                  break;
                default:
                  dl(l, a, e, A, t, null);
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
          a != null ? Wt(l, !!e, a, !1) : t != null && Wt(l, !!e, t, !0);
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
        for (e = 0; e < zu.length; e++) P(zu[e], l);
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
          for (A in t)
            t.hasOwnProperty(A) &&
              ((e = t[A]), e !== void 0 && Zi(l, a, A, e, t, void 0));
          return;
        }
    }
    for (i in t)
      t.hasOwnProperty(i) && ((e = t[i]), e != null && dl(l, a, i, e, t, null));
  }
  function u0(l, a, t, e) {
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
          A = null;
        for (b in t) {
          var N = t[b];
          if (t.hasOwnProperty(b) && N != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = N;
              default:
                e.hasOwnProperty(b) || dl(l, a, b, null, e, N);
            }
        }
        for (var g in e) {
          var b = e[g];
          if (((N = t[g]), e.hasOwnProperty(g) && (b != null || N != null)))
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
                A = b;
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
                b !== N && dl(l, a, g, b, e, N);
            }
        }
        tc(l, c, i, f, y, A, n, u);
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
            ? Wt(l, !!t, g, !1)
            : !!e != !!t &&
              (a != null ? Wt(l, !!t, a, !0) : Wt(l, !!t, t ? [] : "", !1));
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
        for (var V in t)
          if (
            ((g = t[V]),
            t.hasOwnProperty(V) && g != null && !e.hasOwnProperty(V))
          )
            switch (V) {
              case "selected":
                l.selected = !1;
                break;
              default:
                dl(l, a, V, null, e, g);
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
        for (var Q in t)
          (g = t[Q]),
            t.hasOwnProperty(Q) &&
              g != null &&
              !e.hasOwnProperty(Q) &&
              dl(l, a, Q, null, e, g);
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
          for (A in e)
            (g = e[A]),
              (b = t[A]),
              !e.hasOwnProperty(A) ||
                g === b ||
                (g === void 0 && b === void 0) ||
                Zi(l, a, A, g, e, b);
          return;
        }
    }
    for (var h in t)
      (g = t[h]),
        t.hasOwnProperty(h) &&
          g != null &&
          !e.hasOwnProperty(h) &&
          dl(l, a, h, null, e, g);
    for (N in e)
      (g = e[N]),
        (b = t[N]),
        !e.hasOwnProperty(N) ||
          g === b ||
          (g == null && b == null) ||
          dl(l, a, N, g, e, b);
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
  function n0() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Ji
        ? !1
        : ((Ji = l), !0)
      : ((Ji = null), !1);
  }
  var Uo = typeof setTimeout == "function" ? setTimeout : void 0,
    c0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ho = typeof Promise == "function" ? Promise : void 0,
    i0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ho < "u"
        ? function (l) {
            return Ho.resolve(null).then(l).catch(f0);
          }
        : Uo;
  function f0(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function yt(l) {
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
            if ((t & 1 && Eu(c.documentElement), t & 2 && Eu(c.body), t & 4))
              for (t = c.head, Eu(t), c = t.firstChild; c; ) {
                var i = c.nextSibling,
                  f = c.nodeName;
                c[Be] ||
                  f === "SCRIPT" ||
                  f === "STYLE" ||
                  (f === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  t.removeChild(c),
                  (c = i);
              }
          }
          if (u === 0) {
            l.removeChild(n), xu(a);
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
    xu(a);
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
  function s0(l, a, t, e) {
    for (; l.nodeType === 1; ) {
      var u = t;
      if (l.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[Be])
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
      if (((l = Ma(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function r0(l, a, t) {
    if (a === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = Ma(l.nextSibling)), l === null)
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
  function o0(l, a) {
    var t = l.ownerDocument;
    if (l.data !== "$?" || t.readyState === "complete") a();
    else {
      var e = function () {
        a(), t.removeEventListener("DOMContentLoaded", e);
      };
      t.addEventListener("DOMContentLoaded", e), (l._reactRetry = e);
    }
  }
  function Ma(l) {
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
  function Eu(l) {
    for (var a = l.attributes; a.length; ) l.removeAttributeNode(a[0]);
    In(l);
  }
  var Ta = new Map(),
    Yo = new Set();
  function Cn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Fa = M.d;
  M.d = { f: d0, r: h0, D: m0, C: v0, L: y0, m: g0, X: S0, S: b0, M: z0 };
  function d0() {
    var l = Fa.f(),
      a = _n();
    return l || a;
  }
  function h0(l) {
    var a = Kt(l);
    a !== null && a.tag === 5 && a.type === "form" ? er(a) : Fa.r(l);
  }
  var Te = typeof document > "u" ? null : document;
  function Xo(l, a, t) {
    var e = Te;
    if (e && typeof a == "string" && a) {
      var u = ba(a);
      (u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof t == "string" && (u += '[crossorigin="' + t + '"]'),
        Yo.has(u) ||
          (Yo.add(u),
          (l = { rel: l, crossOrigin: t, href: a }),
          e.querySelector(u) === null &&
            ((a = e.createElement("link")),
            Zl(a, "link", l),
            Hl(a),
            e.head.appendChild(a)));
    }
  }
  function m0(l) {
    Fa.D(l), Xo("dns-prefetch", l, null);
  }
  function v0(l, a) {
    Fa.C(l, a), Xo("preconnect", l, a);
  }
  function y0(l, a, t) {
    Fa.L(l, a, t);
    var e = Te;
    if (e && l && a) {
      var u = 'link[rel="preload"][as="' + ba(a) + '"]';
      a === "image" && t && t.imageSrcSet
        ? ((u += '[imagesrcset="' + ba(t.imageSrcSet) + '"]'),
          typeof t.imageSizes == "string" &&
            (u += '[imagesizes="' + ba(t.imageSizes) + '"]'))
        : (u += '[href="' + ba(l) + '"]');
      var n = u;
      switch (a) {
        case "style":
          n = _e(l);
          break;
        case "script":
          n = Oe(l);
      }
      Ta.has(n) ||
        ((l = q(
          {
            rel: "preload",
            href: a === "image" && t && t.imageSrcSet ? void 0 : l,
            as: a,
          },
          t
        )),
        Ta.set(n, l),
        e.querySelector(u) !== null ||
          (a === "style" && e.querySelector(pu(n))) ||
          (a === "script" && e.querySelector(Nu(n))) ||
          ((a = e.createElement("link")),
          Zl(a, "link", l),
          Hl(a),
          e.head.appendChild(a)));
    }
  }
  function g0(l, a) {
    Fa.m(l, a);
    var t = Te;
    if (t && l) {
      var e = a && typeof a.as == "string" ? a.as : "script",
        u =
          'link[rel="modulepreload"][as="' + ba(e) + '"][href="' + ba(l) + '"]',
        n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Oe(l);
      }
      if (
        !Ta.has(n) &&
        ((l = q({ rel: "modulepreload", href: l }, a)),
        Ta.set(n, l),
        t.querySelector(u) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(Nu(n))) return;
        }
        (e = t.createElement("link")),
          Zl(e, "link", l),
          Hl(e),
          t.head.appendChild(e);
      }
    }
  }
  function b0(l, a, t) {
    Fa.S(l, a, t);
    var e = Te;
    if (e && l) {
      var u = Jt(e).hoistableStyles,
        n = _e(l);
      a = a || "default";
      var c = u.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if ((c = e.querySelector(pu(n)))) i.loading = 5;
        else {
          (l = q({ rel: "stylesheet", href: l, "data-precedence": a }, t)),
            (t = Ta.get(n)) && ki(l, t);
          var f = (c = e.createElement("link"));
          Hl(f),
            Zl(f, "link", l),
            (f._p = new Promise(function (y, A) {
              (f.onload = y), (f.onerror = A);
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
  function S0(l, a) {
    Fa.X(l, a);
    var t = Te;
    if (t && l) {
      var e = Jt(t).hoistableScripts,
        u = Oe(l),
        n = e.get(u);
      n ||
        ((n = t.querySelector(Nu(u))),
        n ||
          ((l = q({ src: l, async: !0 }, a)),
          (a = Ta.get(u)) && Fi(l, a),
          (n = t.createElement("script")),
          Hl(n),
          Zl(n, "link", l),
          t.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function z0(l, a) {
    Fa.M(l, a);
    var t = Te;
    if (t && l) {
      var e = Jt(t).hoistableScripts,
        u = Oe(l),
        n = e.get(u);
      n ||
        ((n = t.querySelector(Nu(u))),
        n ||
          ((l = q({ src: l, async: !0, type: "module" }, a)),
          (a = Ta.get(u)) && Fi(l, a),
          (n = t.createElement("script")),
          Hl(n),
          Zl(n, "link", l),
          t.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Go(l, a, t, e) {
    var u = (u = j.current) ? Cn(u) : null;
    if (!u) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string"
          ? ((a = _e(t.href)),
            (t = Jt(u).hoistableStyles),
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
          l = _e(t.href);
          var n = Jt(u).hoistableStyles,
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
              (n = u.querySelector(pu(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              Ta.has(l) ||
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
                Ta.set(l, t),
                n || A0(u, l, t, c.state))),
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
            ? ((a = Oe(t)),
              (t = Jt(u).hoistableScripts),
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
  function _e(l) {
    return 'href="' + ba(l) + '"';
  }
  function pu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Qo(l) {
    return q({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function A0(l, a, t, e) {
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
        Zl(a, "link", t),
        Hl(a),
        l.head.appendChild(a));
  }
  function Oe(l) {
    return '[src="' + ba(l) + '"]';
  }
  function Nu(l) {
    return "script[async]" + l;
  }
  function Zo(l, a, t) {
    if ((a.count++, a.instance === null))
      switch (a.type) {
        case "style":
          var e = l.querySelector('style[data-href~="' + ba(t.href) + '"]');
          if (e) return (a.instance = e), Hl(e), e;
          var u = q({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (l.ownerDocument || l).createElement("style")),
            Hl(e),
            Zl(e, "style", u),
            qn(e, t.precedence, l),
            (a.instance = e)
          );
        case "stylesheet":
          u = _e(t.href);
          var n = l.querySelector(pu(u));
          if (n) return (a.state.loading |= 4), (a.instance = n), Hl(n), n;
          (e = Qo(t)),
            (u = Ta.get(u)) && ki(e, u),
            (n = (l.ownerDocument || l).createElement("link")),
            Hl(n);
          var c = n;
          return (
            (c._p = new Promise(function (i, f) {
              (c.onload = i), (c.onerror = f);
            })),
            Zl(n, "link", e),
            (a.state.loading |= 4),
            qn(n, t.precedence, l),
            (a.instance = n)
          );
        case "script":
          return (
            (n = Oe(t.src)),
            (u = l.querySelector(Nu(n)))
              ? ((a.instance = u), Hl(u), u)
              : ((e = t),
                (u = Ta.get(n)) && ((e = q({}, t)), Fi(e, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                Hl(u),
                Zl(u, "link", e),
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
          n[Be] ||
          n[Kl] ||
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
  function E0(l, a, t) {
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
  var Tu = null;
  function p0() {}
  function N0(l, a, t) {
    if (Tu === null) throw Error(m(475));
    var e = Tu;
    if (
      a.type === "stylesheet" &&
      (typeof t.media != "string" || matchMedia(t.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = _e(t.href),
          n = l.querySelector(pu(u));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (e.count++, (e = Yn.bind(e)), l.then(e, e)),
            (a.state.loading |= 4),
            (a.instance = n),
            Hl(n);
          return;
        }
        (n = l.ownerDocument || l),
          (t = Qo(t)),
          (u = Ta.get(u)) && ki(t, u),
          (n = n.createElement("link")),
          Hl(n);
        var c = n;
        (c._p = new Promise(function (i, f) {
          (c.onload = i), (c.onerror = f);
        })),
          Zl(n, "link", t),
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
  function T0() {
    if (Tu === null) throw Error(m(475));
    var l = Tu;
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
        a.forEach(_0, l),
        (Xn = null),
        Yn.call(l));
  }
  function _0(l, a) {
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
  var _u = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0,
  };
  function O0(l, a, t, e, u, n, c, i) {
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
  function Jo(l, a, t, e, u, n, c, i, f, y, A, N) {
    return (
      (l = new O0(l, a, t, c, i, f, y, N)),
      (a = 1),
      n === !0 && (a |= 24),
      (n = fa(3, null, null, a)),
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
    return l ? ((l = ue), l) : ue;
  }
  function $o(l, a, t, e, u, n) {
    (u = wo(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = et(a)),
      (e.payload = { element: t }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (t = ut(l, e, a)),
      t !== null && (ha(t, l, a), tu(t, l, a));
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
      var a = ee(l, 67108864);
      a !== null && ha(a, l, 67108864), Pi(l, 67108864);
    }
  }
  var Gn = !0;
  function M0(l, a, t, e) {
    var u = z.T;
    z.T = null;
    var n = M.p;
    try {
      (M.p = 2), lf(l, a, t, e);
    } finally {
      (M.p = n), (z.T = u);
    }
  }
  function D0(l, a, t, e) {
    var u = z.T;
    z.T = null;
    var n = M.p;
    try {
      (M.p = 8), lf(l, a, t, e);
    } finally {
      (M.p = n), (z.T = u);
    }
  }
  function lf(l, a, t, e) {
    if (Gn) {
      var u = af(e);
      if (u === null) Qi(l, a, e, Qn, t), Io(l, e);
      else if (j0(u, l, a, t, e)) e.stopPropagation();
      else if ((Io(l, e), a & 4 && -1 < x0.indexOf(l))) {
        for (; u !== null; ) {
          var n = Kt(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = Et(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var f = 1 << (31 - ca(c));
                      (i.entanglements[1] |= f), (c &= ~f);
                    }
                    Ca(n), (sl & 6) === 0 && ((Nn = Il() + 500), Su(0));
                  }
                }
                break;
              case 13:
                (i = ee(n, 2)), i !== null && ha(i, n, 2), _n(), Pi(n, 2);
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
    if (((Qn = null), (l = Lt(l)), l !== null)) {
      var a = U(l);
      if (a === null) l = null;
      else {
        var t = a.tag;
        if (t === 13) {
          if (((l = X(a)), l !== null)) return l;
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
        switch (xe()) {
          case Gt:
            return 2;
          case Qt:
            return 8;
          case Zt:
          case qa:
            return 32;
          case je:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ef = !1,
    gt = null,
    bt = null,
    St = null,
    Ou = new Map(),
    Mu = new Map(),
    zt = [],
    x0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Io(l, a) {
    switch (l) {
      case "focusin":
      case "focusout":
        gt = null;
        break;
      case "dragenter":
      case "dragleave":
        bt = null;
        break;
      case "mouseover":
      case "mouseout":
        St = null;
        break;
      case "pointerover":
      case "pointerout":
        Ou.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Mu.delete(a.pointerId);
    }
  }
  function Du(l, a, t, e, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: a,
          domEventName: t,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [u],
        }),
        a !== null && ((a = Kt(a)), a !== null && ko(a)),
        l)
      : ((l.eventSystemFlags |= e),
        (a = l.targetContainers),
        u !== null && a.indexOf(u) === -1 && a.push(u),
        l);
  }
  function j0(l, a, t, e, u) {
    switch (a) {
      case "focusin":
        return (gt = Du(gt, l, a, t, e, u)), !0;
      case "dragenter":
        return (bt = Du(bt, l, a, t, e, u)), !0;
      case "mouseover":
        return (St = Du(St, l, a, t, e, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return Ou.set(n, Du(Ou.get(n) || null, l, a, t, e, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), Mu.set(n, Du(Mu.get(n) || null, l, a, t, e, u)), !0
        );
    }
    return !1;
  }
  function Po(l) {
    var a = Lt(l.target);
    if (a !== null) {
      var t = U(a);
      if (t !== null) {
        if (((a = t.tag), a === 13)) {
          if (((a = X(t)), a !== null)) {
            (l.blockedOn = a),
              Nd(l.priority, function () {
                if (t.tag === 13) {
                  var e = da();
                  e = Wn(e);
                  var u = ee(t, e);
                  u !== null && ha(u, t, e), Pi(t, e);
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
      } else return (a = Kt(t)), a !== null && ko(a), (l.blockedOn = t), !1;
      a.shift();
    }
    return !0;
  }
  function ld(l, a, t) {
    Zn(l) && t.delete(a);
  }
  function R0() {
    (ef = !1),
      gt !== null && Zn(gt) && (gt = null),
      bt !== null && Zn(bt) && (bt = null),
      St !== null && Zn(St) && (St = null),
      Ou.forEach(ld),
      Mu.forEach(ld);
  }
  function Vn(l, a) {
    l.blockedOn === a &&
      ((l.blockedOn = null),
      ef ||
        ((ef = !0),
        O.unstable_scheduleCallback(O.unstable_NormalPriority, R0)));
  }
  var Ln = null;
  function ad(l) {
    Ln !== l &&
      ((Ln = l),
      O.unstable_scheduleCallback(O.unstable_NormalPriority, function () {
        Ln === l && (Ln = null);
        for (var a = 0; a < l.length; a += 3) {
          var t = l[a],
            e = l[a + 1],
            u = l[a + 2];
          if (typeof e != "function") {
            if (tf(e || t) === null) continue;
            break;
          }
          var n = Kt(t);
          n !== null &&
            (l.splice(a, 3),
            (a -= 3),
            ti(n, { pending: !0, data: u, method: t.method, action: e }, e, u));
        }
      }));
  }
  function xu(l) {
    function a(f) {
      return Vn(f, l);
    }
    gt !== null && Vn(gt, l),
      bt !== null && Vn(bt, l),
      St !== null && Vn(St, l),
      Ou.forEach(a),
      Mu.forEach(a);
    for (var t = 0; t < zt.length; t++) {
      var e = zt[t];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < zt.length && ((t = zt[0]), t.blockedOn === null); )
      Po(t), t.blockedOn === null && zt.shift();
    if (((t = (l.ownerDocument || l).$$reactFormReplay), t != null))
      for (e = 0; e < t.length; e += 3) {
        var u = t[e],
          n = t[e + 1],
          c = u[Pl] || null;
        if (typeof n == "function") c || ad(t);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (c = n[Pl] || null))) i = c.formAction;
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
        e = da();
      $o(t, e, l, a, null, null);
    }),
    (Kn.prototype.unmount = uf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var a = l.containerInfo;
          $o(l.current, 2, null, l, null, null), _n(), (a[Vt] = null);
        }
      });
  function Kn(l) {
    this._internalRoot = l;
  }
  Kn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var a = gf();
      l = { blockedOn: null, target: l, priority: a };
      for (var t = 0; t < zt.length && a !== 0 && a < zt[t].priority; t++);
      zt.splice(t, 0, l), t === 0 && Po(l);
    }
  };
  var td = L.version;
  if (td !== "19.1.1") throw Error(m(527, td, "19.1.1"));
  M.findDOMNode = function (l) {
    var a = l._reactInternals;
    if (a === void 0)
      throw typeof l.render == "function"
        ? Error(m(188))
        : ((l = Object.keys(l).join(",")), Error(m(268, l)));
    return (
      (l = C(a)),
      (l = l !== null ? E(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var U0 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jn.isDisabled && Jn.supportsFiber)
      try {
        (He = Jn.inject(U0)), (na = Jn);
      } catch {}
  }
  return (
    (Ru.createRoot = function (l, a) {
      if (!x(l)) throw Error(m(299));
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
        (l[Vt] = a.current),
        Gi(l),
        new uf(a)
      );
    }),
    (Ru.hydrateRoot = function (l, a, t) {
      if (!x(l)) throw Error(m(299));
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
        (e = da()),
        (e = Wn(e)),
        (u = et(e)),
        (u.callback = null),
        ut(t, u, e),
        (t = e),
        (a.current.lanes = t),
        qe(a, t),
        Ca(a),
        (l[Vt] = a.current),
        Gi(l),
        new Kn(a)
      );
    }),
    (Ru.version = "19.1.1"),
    Ru
  );
}
var dd;
function V0() {
  if (dd) return ff.exports;
  dd = 1;
  function O() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (L) {
        console.error(L);
      }
  }
  return O(), (ff.exports = Z0()), ff.exports;
}
var L0 = V0();
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
function gd(O, L) {
  if (!L || L.length === 0) return O;
  const B = { ...O };
  for (const m of L) {
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
      X = x[2],
      ll = wn[U.toUpperCase()] || wn[U];
    if (!ll) continue;
    const C = B[ll] || "";
    if (!X.includes("+") && !X.includes("-")) {
      B[ll] = X;
      continue;
    }
    const E = C.match(/^(\d+)D(\d+)([+-]\d+)?$/),
      q = X.match(/^[+-]?(\d+)D(\d+)([+-]\d+)?$/);
    if (E && q) {
      const k = parseInt(E[1], 10),
        al = parseInt(E[2], 10),
        cl = E[3] ? parseInt(E[3], 10) : 0,
        Al = parseInt(q[1], 10),
        nl = parseInt(q[2], 10),
        Ml = q[3] ? parseInt(q[3], 10) : 0;
      if (al === nl) {
        const $ = k + Al,
          jl = cl + Ml;
        B[ll] = `${$}D${al}${jl !== 0 ? (jl > 0 ? "+" : "") + jl : ""}`;
      } else {
        const $ = C.trim(),
          jl = X.trim().replace(/^\+/, "");
        $.includes(jl) || (B[ll] = `${$}+${jl}`);
      }
      continue;
    }
    if (E && /^[+-]?\d+D$/.test(X)) {
      const k = parseInt(E[1], 10),
        al = parseInt(E[2], 10),
        cl = E[3] ? parseInt(E[3], 10) : 0,
        Al = parseInt(X.replace("D", ""), 10);
      B[ll] = `${k + Al}D${al}${cl !== 0 ? (cl > 0 ? "+" : "") + cl : ""}`;
      continue;
    }
    if (E && /^[+-]?\d+$/.test(X)) {
      const k = parseInt(E[1], 10),
        al = parseInt(E[2], 10);
      let cl = E[3] ? parseInt(E[3], 10) : 0;
      (cl += parseInt(X, 10)),
        (B[ll] = `${k}D${al}${cl !== 0 ? (cl > 0 ? "+" : "") + cl : ""}`);
      continue;
    }
    if (/^[+-]?\d+$/.test(X)) {
      const k = parseInt(C || "0", 10);
      B[ll] = (k + parseInt(X, 10)).toString();
      continue;
    }
    B[ll] = X;
  }
  return B;
}
function hd(O, L) {
  const B = O.caracteristicas,
    m = L?.variacion_caracteristicas;
  let x = gd(B, m);
  if (L?.variacion_caracMINMAX && L.variacion_caracMINMAX.length > 0) {
    const U = bd(L.variacion_caracMINMAX);
    x = K0(x, U);
  }
  return x;
}
function bd(O) {
  const L = [];
  for (const B of O) {
    const m = B.match(/^MIN\s+(\w+)\s+(\d+)D$/i);
    if (m) {
      const U = wn[m[1].toUpperCase()];
      if (U) {
        const X = parseInt(m[2], 10);
        L.push({ caracteristica: U, tipo: "MIN", valor: 0, dados: X });
      }
      continue;
    }
    const x = B.match(/^MAX\s+(\w+)\s+(\d+)$/i);
    if (x) {
      const U = wn[x[1].toUpperCase()];
      if (U) {
        const X = parseInt(x[2], 10);
        L.push({ caracteristica: U, tipo: "MAX", valor: X });
      }
    }
  }
  return L;
}
function K0(O, L) {
  const B = { ...O };
  for (const m of L) {
    const x = B[m.caracteristica];
    if (x && m.tipo === "MIN" && m.dados) {
      const U = x.match(/^(\d+)D(\d+)([+-]\d+)?$/);
      if (U) {
        const X = parseInt(U[1], 10),
          ll = parseInt(U[2], 10),
          C = U[3] ? U[3] : "";
        X < m.dados &&
          ((B[m.caracteristica] = `${m.dados}D${ll}${C}`),
          console.log(
            "[Aplicando límite MIN]",
            m.caracteristica,
            `${X}D${ll}${C} -> ${m.dados}D${ll}${C}`
          ));
      }
    }
  }
  return B;
}
function md(O, L, B) {
  for (const m of B)
    if (m.caracteristica === O && m.tipo === "MAX" && L > m.valor)
      return {
        valido: !1,
        mensaje: `El valor máximo para ${O} es ${m.valor}`,
        valorCorregido: m.valor,
      };
  return { valido: !0 };
}
function J0(O) {
  return !O?.variacion_caracMINMAX || O.variacion_caracMINMAX.length === 0
    ? []
    : bd(O.variacion_caracMINMAX);
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
function w0(O) {
  const L = vd[O.trim()];
  if (L) return L;
  const B = O.replace(/^[+-]?\d+\s*%?\s*/, "")
    .replace(/\s*[+-]?\d+\s*%?$/, "")
    .trim();
  return vd[B];
}
function yd(O) {
  const L = O.trim(),
    B = [/^([+-]?\d+)\s*%?\s*(.+)$/, /^(.+?)\s*([+-]?\d+)\s*%?$/];
  for (const m of B) {
    const x = L.match(m);
    if (x) {
      let U, X;
      m === B[0]
        ? ((U = parseInt(x[1].replace(/[+]/g, ""))), (X = x[2]))
        : ((X = x[1]), (U = parseInt(x[2].replace(/[+]/g, ""))));
      const ll = w0(X);
      if (ll && !isNaN(U)) return { habilidad: ll, valor: U };
    }
  }
  return null;
}
function $0() {
  const O = () =>
      K
        ? o.jsx("div", {
            className: "raza-card",
            children: o.jsxs("div", {
              className: "raza-content",
              children: [
                o.jsxs("h3", {
                  className: "raza-title",
                  children: ["Nacionalidad: ", K.nombre],
                }),
                o.jsx("hr", { className: "raza-divider" }),
                K.variacion_caracteristicas &&
                  K.variacion_caracteristicas.length > 0 &&
                  o.jsxs("div", {
                    className: "raza-section",
                    children: [
                      o.jsx("h4", {
                        className: "raza-section-title",
                        children: "Variaciones de Características",
                      }),
                      o.jsx("div", {
                        className: "raza-list",
                        children: K.variacion_caracteristicas.map((d, S) =>
                          o.jsx(
                            "div",
                            {
                              className: "raza-list-item",
                              children: o.jsx("span", {
                                className: "raza-characteristic-name",
                                children: d,
                              }),
                            },
                            S
                          )
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          })
        : null,
    L = () =>
      nl
        ? o.jsx("div", {
            className: "raza-card",
            children: o.jsxs("div", {
              className: "raza-content",
              children: [
                o.jsxs("h3", {
                  className: "raza-title",
                  children: ["Origen: ", nl.nombre],
                }),
                nl.info_Origen &&
                  nl.info_Origen.trim() !== "" &&
                  o.jsx("p", {
                    className: "raza-description",
                    children: nl.info_Origen,
                  }),
                o.jsx("hr", { className: "raza-divider" }),
                nl.variacion_habilidades &&
                  nl.variacion_habilidades.length > 0 &&
                  o.jsxs("div", {
                    className: "raza-section",
                    children: [
                      o.jsx("h4", {
                        className: "raza-section-title",
                        children: "Bonificaciones de Habilidades",
                      }),
                      o.jsx("div", {
                        className: "raza-list",
                        children: nl.variacion_habilidades.map((d, S) =>
                          o.jsxs(
                            "div",
                            {
                              className: "raza-list-item",
                              children: [
                                o.jsx("span", {
                                  className: "raza-bonus-name",
                                  children: d,
                                }),
                                o.jsx("span", {
                                  className: "raza-chip raza-chip-secondary",
                                  children: "Habilidad",
                                }),
                              ],
                            },
                            S
                          )
                        ),
                      }),
                    ],
                  }),
                nl.variacion_bonus_combate &&
                  Object.keys(nl.variacion_bonus_combate).length > 0 &&
                  o.jsxs("div", {
                    className: "raza-section",
                    children: [
                      o.jsx("h4", {
                        className: "raza-section-title",
                        children: "Bonus de Combate",
                      }),
                      o.jsx("div", {
                        className: "raza-list",
                        children: Object.entries(
                          nl.variacion_bonus_combate
                        ).map(([d, S], T) =>
                          o.jsxs(
                            "div",
                            {
                              className: "raza-list-item",
                              children: [
                                o.jsxs("span", {
                                  className: "raza-bonus-name",
                                  children: [d, ":"],
                                }),
                                o.jsx("span", {
                                  className: "raza-chip raza-chip-secondary",
                                  children: S,
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
          })
        : null,
    [B, m] = Yl.useState(!0),
    x = () => {
      B && m(!1);
    },
    [U, X] = Yl.useState(null),
    [ll, C] = Yl.useState([]),
    [E, q] = Yl.useState([]),
    [k, al] = Yl.useState([]),
    [cl, Al] = Yl.useState([]),
    [nl, Ml] = Yl.useState(null),
    [$, jl] = Yl.useState(null),
    [D, kl] = Yl.useState(null),
    [K, Vl] = Yl.useState(null),
    [El, Xl] = Yl.useState(null),
    [pl, ua] = Yl.useState({}),
    [ma, Rl] = Yl.useState(!0),
    [va, Da] = Yl.useState([]),
    Ul = (d, S) => {
      const T = parseInt(S, 10);
      if (!isNaN(T) && va.length > 0) {
        const R = md(d, T, va);
        if (!R.valido && R.valorCorregido !== void 0) {
          ua((j) => ({ ...j, [d]: R.valorCorregido.toString() }));
          return;
        }
      }
      ua((R) => ({ ...R, [d]: S }));
    };
  function z(d) {
    let S = 0;
    const T = /([+-]?\d+)D(\d+)/gi;
    let R;
    for (; (R = T.exec(d)) !== null; ) {
      const J = parseInt(R[1], 10),
        fl = parseInt(R[2], 10),
        Fl = Math.sign(J);
      for (let Ll = 0; Ll < Math.abs(J); Ll++) {
        let $l = Math.floor(Math.random() * fl) + 1;
        ma && $l < 2 && ($l = 2), (S += Fl * $l);
      }
    }
    const j = /([+-]\d+)(?!D)/g;
    let gl;
    for (; (gl = j.exec(d)) !== null; ) S += parseInt(gl[1], 10);
    return S;
  }
  const M = () => {
      if (
        !El ||
        (Object.values(pl).some((qa) => qa && qa.trim() !== "") &&
          !window.confirm(
            "¿Seguro que quieres generar tiradas aleatorias? Se borrarán los valores que hayas insertado manualmente."
          ))
      )
        return;
      const d = {};
      Object.entries(El).forEach(([qa, je]) => {
        if (typeof je == "string") {
          let Re = z(je);
          if (va.length > 0) {
            const Ue = md(qa, Re, va);
            !Ue.valido &&
              Ue.valorCorregido !== void 0 &&
              (Re = Ue.valorCorregido);
          }
          d[qa] = Re.toString();
        }
      }),
        ua(d);
      const S = parseInt(d.Fuerza || "0", 10);
      let T = "";
      S >= 18 && S <= 23
        ? (T = "+1")
        : S >= 24 && S <= 30
        ? (T = "+1D4")
        : S >= 31 && S <= 38
        ? (T = "+1D6")
        : S >= 39 && S <= 45
        ? (T = "+1D10")
        : S >= 46
        ? (T = "+2D6")
        : (T = "Sin bonus");
      const R = parseInt(d.Destreza || "0", 10),
        j = S + R;
      let gl = "NO TIENE";
      D &&
        ["ARQUERO", "CASACA AZUL", "ILMIONARIO", "GUARDABOSQUES"].some(
          (qa) => D.nombre.toUpperCase() === qa.toUpperCase()
        ) &&
        (j >= 0 && j <= 24
          ? (gl = "Nada")
          : j >= 25 && j <= 40
          ? (gl = "+1D4")
          : j >= 41 && j <= 52
          ? (gl = "+2D4")
          : j >= 53 && (gl = "2D4+1"));
      const fl = parseInt(d.Inteligencia || "0", 10),
        Fl = parseInt(d.Constitución || "0", 10),
        Ll = parseInt(d.Poder || "0", 10),
        $l = parseInt(d.Carisma || "0", 10),
        ya = parseInt(d.Tamaño || "0", 10);
      let xa = 0;
      fl >= 1 && fl <= 10
        ? (xa = fl)
        : fl >= 11 && fl <= 18
        ? (xa = fl + 20)
        : fl >= 19 && (xa = fl + 30);
      const Me = fl + R + 10,
        De = Math.floor(Fl / 2) + fl + Ll + $l - 5,
        Il = R * 2 + fl + Ll - ya - 5,
        xe = fl * 2 + R + $l - 15,
        Gt = fl + Math.floor(S / 2) + Ll + R - ya - 5,
        Qt = Ll + $l + fl + 40 - Fl,
        Zt = Math.max(1, Fl + ya - 12);
      X({
        bonusCC: `Bonus de Fuerza CC: ${T}`,
        bonusAA: `Bonus de Fuerza AA: ${gl}`,
        conocimiento: xa,
        percepcion: Me,
        comunicacion: De,
        agilidad: Il,
        manipulacion: xe,
        discrecion: Gt,
        saludMental: Qt,
        puntosVida: Zt,
      });
    },
    G = () =>
      $
        ? o.jsx("div", {
            className: "raza-card",
            children: o.jsxs("div", {
              className: "raza-content",
              children: [
                o.jsx("h3", { className: "raza-title", children: $.nombre }),
                o.jsx("p", {
                  className: "raza-description",
                  children: $.descripcion,
                }),
                o.jsx("hr", { className: "raza-divider" }),
                o.jsxs("div", {
                  className: "raza-info-grid",
                  children: [
                    o.jsxs("div", {
                      className: "raza-section",
                      children: [
                        o.jsx("h4", {
                          className: "raza-section-title",
                          children: "Características",
                        }),
                        o.jsx("div", {
                          className: "raza-list",
                          children: Object.entries($.caracteristicas).map(
                            ([d, S]) =>
                              o.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    o.jsxs("span", {
                                      className: "raza-characteristic-name",
                                      children: [d, ":"],
                                    }),
                                    o.jsx("span", {
                                      className:
                                        "raza-chip raza-chip-secondary",
                                      children: S,
                                    }),
                                  ],
                                },
                                d
                              )
                          ),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "raza-section",
                      children: [
                        o.jsx("h4", {
                          className: "raza-section-title",
                          children: "Bonificaciones",
                        }),
                        o.jsx("div", {
                          className: "raza-list",
                          children: Object.entries($.bonificaciones).map(
                            ([d, S]) =>
                              o.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    o.jsxs("span", {
                                      className: "raza-bonus-name",
                                      children: [d, ":"],
                                    }),
                                    o.jsx("span", {
                                      className: "raza-chip raza-chip-success",
                                      children: S,
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
                o.jsx("hr", { className: "raza-divider" }),
                o.jsxs("div", {
                  className: "raza-additional-info",
                  children: [
                    o.jsxs("div", {
                      className: "raza-info-item",
                      children: [
                        o.jsx("span", {
                          className: "raza-info-label",
                          children: "Rango",
                        }),
                        o.jsx("span", {
                          className: "raza-info-value",
                          children: $.rango,
                        }),
                      ],
                    }),
                    $.armadura &&
                      o.jsxs("div", {
                        className: "raza-info-item",
                        children: [
                          o.jsx("span", {
                            className: "raza-info-label",
                            children: "Armadura",
                          }),
                          o.jsx("span", {
                            className: "raza-info-value",
                            children: $.armadura,
                          }),
                        ],
                      }),
                    $.ataque &&
                      o.jsxs("div", {
                        className: "raza-info-item",
                        children: [
                          o.jsx("span", {
                            className: "raza-info-label",
                            children: "Ataque",
                          }),
                          o.jsx("span", {
                            className: "raza-info-value",
                            children: $.ataque,
                          }),
                        ],
                      }),
                  ],
                }),
                $.notas &&
                  o.jsxs(o.Fragment, {
                    children: [
                      o.jsx("hr", { className: "raza-divider" }),
                      o.jsx("h4", {
                        className: "raza-section-title",
                        children: "Notas",
                      }),
                      o.jsx("div", {
                        className: "raza-notes",
                        children: o.jsx("p", {
                          className: "raza-notes-text",
                          children: $.notas,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          })
        : null,
    il = () =>
      D
        ? o.jsx("div", {
            className: "raza-card",
            children: o.jsxs("div", {
              className: "raza-content",
              children: [
                o.jsx("h3", { className: "raza-title", children: D.nombre }),
                o.jsx("p", {
                  className: "raza-description",
                  children: D.descripcion,
                }),
                o.jsx("hr", { className: "raza-divider" }),
                o.jsxs("div", {
                  className: "raza-info-grid",
                  children: [
                    D.variacion_caracteristicas &&
                      Array.isArray(D.variacion_caracteristicas) &&
                      D.variacion_caracteristicas.length > 0 &&
                      o.jsxs("div", {
                        className: "raza-section",
                        children: [
                          o.jsx("h4", {
                            className: "raza-section-title",
                            children: "Variaciones de Características",
                          }),
                          o.jsx("div", {
                            className: "raza-list",
                            children: D.variacion_caracteristicas.map((d, S) =>
                              o.jsx(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: o.jsx("span", {
                                    className: "raza-characteristic-name",
                                    children: d,
                                  }),
                                },
                                S
                              )
                            ),
                          }),
                        ],
                      }),
                    D.variacion_caracMINMAX &&
                      D.variacion_caracMINMAX.length > 0 &&
                      o.jsxs("div", {
                        className: "raza-section",
                        children: [
                          o.jsx("h4", {
                            className: "raza-section-title",
                            children: "Limitaciones de Características",
                          }),
                          o.jsx("div", {
                            className: "raza-list",
                            children: D.variacion_caracMINMAX.map((d, S) =>
                              o.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    o.jsx("span", {
                                      className: "raza-characteristic-name",
                                      children: d,
                                    }),
                                    o.jsx("span", {
                                      className: "raza-chip raza-chip-warning",
                                      children: "Límite",
                                    }),
                                  ],
                                },
                                S
                              )
                            ),
                          }),
                        ],
                      }),
                    D.variacion_habilidades &&
                      D.variacion_habilidades.length > 0 &&
                      o.jsxs("div", {
                        className: "raza-section",
                        children: [
                          o.jsx("h4", {
                            className: "raza-section-title",
                            children: "Bonificaciones de Habilidades",
                          }),
                          o.jsx("div", {
                            className: "raza-list",
                            children: D.variacion_habilidades.map((d, S) =>
                              o.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    o.jsx("span", {
                                      className: "raza-bonus-name",
                                      children: d,
                                    }),
                                    o.jsx("span", {
                                      className:
                                        "raza-chip raza-chip-secondary",
                                      children: "Habilidad",
                                    }),
                                  ],
                                },
                                S
                              )
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
                D.Bonus_combate &&
                  o.jsxs(o.Fragment, {
                    children: [
                      o.jsx("hr", { className: "raza-divider" }),
                      o.jsxs("div", {
                        className: "raza-section",
                        children: [
                          o.jsx("h4", {
                            className: "raza-section-title",
                            children: "Bonus de Combate",
                          }),
                          o.jsxs("div", {
                            className: "raza-list",
                            children: [
                              o.jsxs("div", {
                                className: "raza-list-item",
                                children: [
                                  o.jsx("span", {
                                    className: "raza-bonus-name",
                                    children: "Ataque:",
                                  }),
                                  o.jsx("span", {
                                    className: "raza-chip raza-chip-secondary",
                                    children: D.Bonus_combate.ataque,
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                className: "raza-list-item",
                                children: [
                                  o.jsx("span", {
                                    className: "raza-bonus-name",
                                    children: "Defensa:",
                                  }),
                                  o.jsx("span", {
                                    className: "raza-chip raza-chip-secondary",
                                    children: D.Bonus_combate.defensa,
                                  }),
                                ],
                              }),
                              D.Bonus_combate.armas_arrojadizas &&
                                o.jsxs("div", {
                                  className: "raza-list-item",
                                  children: [
                                    o.jsx("span", {
                                      className: "raza-bonus-name",
                                      children: "Armas Arrojadizas:",
                                    }),
                                    o.jsx("span", {
                                      className:
                                        "raza-chip raza-chip-secondary",
                                      children:
                                        D.Bonus_combate.armas_arrojadizas,
                                    }),
                                  ],
                                }),
                              D.Bonus_combate.montado_a_caballo &&
                                o.jsxs("div", {
                                  className: "raza-list-item",
                                  children: [
                                    o.jsx("span", {
                                      className: "raza-bonus-name",
                                      children: "Montado a Caballo:",
                                    }),
                                    o.jsx("span", {
                                      className:
                                        "raza-chip raza-chip-secondary",
                                      children:
                                        D.Bonus_combate.montado_a_caballo,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                o.jsx("hr", { className: "raza-divider" }),
                o.jsxs("div", {
                  className: "raza-additional-info",
                  children: [
                    o.jsxs("div", {
                      className: "raza-info-item",
                      children: [
                        o.jsx("span", {
                          className: "raza-info-label",
                          children: "Rango",
                        }),
                        o.jsx("span", {
                          className: "raza-info-value",
                          children: D.rango,
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "raza-info-item",
                      children: [
                        o.jsx("span", {
                          className: "raza-info-label",
                          children: "Cualidades",
                        }),
                        o.jsx("span", {
                          className: "raza-info-value",
                          children: D.cualidades,
                        }),
                      ],
                    }),
                    D.equipo_especial &&
                      o.jsxs("div", {
                        className: "raza-info-item",
                        children: [
                          o.jsx("span", {
                            className: "raza-info-label",
                            children: "Equipo Especial",
                          }),
                          o.jsx("span", {
                            className: "raza-info-value",
                            children: D.equipo_especial,
                          }),
                        ],
                      }),
                  ],
                }),
                D.especial &&
                  o.jsxs(o.Fragment, {
                    children: [
                      o.jsx("hr", { className: "raza-divider" }),
                      o.jsx("h4", {
                        className: "raza-section-title",
                        children: "Habilidades Especiales",
                      }),
                      o.jsx("div", {
                        className: "raza-notes",
                        children: o.jsx("p", {
                          className: "raza-notes-text",
                          children: D.especial,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          })
        : null,
    s = () => {
      if (!$ && !D && !nl) return null;
      const d = {};
      return (
        $ &&
          Object.entries($.bonificaciones).forEach(([S, T]) => {
            if (typeof T == "number") d[S] = (d[S] || 0) + T;
            else if (typeof T == "string") {
              const R = parseInt(T.replace(/[+-]/g, "")) || 0,
                j = T.startsWith("-") ? -1 : 1;
              d[S] = (d[S] || 0) + R * j;
            }
          }),
        D &&
          D.variacion_habilidades &&
          D.variacion_habilidades.forEach((S) => {
            const T = S.trim();
            if (
              T.includes("Regeneración de SM") ||
              T.includes("al día") ||
              T.includes("1D6") ||
              T === ""
            )
              return;
            const R = yd(T);
            if (R) {
              d[R.habilidad] = (d[R.habilidad] || 0) + R.valor;
              return;
            }
            if (T.includes("100%") || T.includes("+100")) {
              const j = T.replace(/(\+100|100\s*%).*$/, "").trim();
              j && (d[j] = 100);
            }
          }),
        nl &&
          nl.variacion_habilidades &&
          nl.variacion_habilidades.forEach((S) => {
            const T = S.trim();
            if (
              T.includes("Regeneración de SM") ||
              T.includes("al día") ||
              T.includes("1D6") ||
              T === ""
            )
              return;
            const R = yd(T);
            if (R) {
              d[R.habilidad] = (d[R.habilidad] || 0) + R.valor;
              return;
            }
            if (T.includes("100%") || T.includes("+100")) {
              const j = T.replace(/(\+100|100\s*%).*$/, "").trim();
              j && (d[j] = 100);
            }
          }),
        d
      );
    },
    _ = () => {
      const d = s();
      return !d || Object.keys(d).length === 0
        ? null
        : o.jsxs("div", {
            className: "ficha-resultado",
            children: [
              o.jsx("h3", {
                className: "ficha-resultado-title",
                children: "Total de Bonificaciones (Raza + Clase):",
              }),
              o.jsx("ul", {
                className: "ficha-resultado-list",
                children: Object.entries(d).map(([S, T]) =>
                  o.jsxs(
                    "li",
                    {
                      className: "ficha-resultado-item",
                      children: [
                        o.jsxs("b", {
                          className: "ficha-resultado-carac",
                          children: [S, ":"],
                        }),
                        " ",
                        o.jsx("span", {
                          className:
                            "raza-chip raza-chip-success bonificacion-chip",
                          children: T > 0 ? `+${T}` : T,
                        }),
                      ],
                    },
                    S
                  )
                ),
              }),
            ],
          });
    };
  return (
    Yl.useEffect(() => {
      fetch("/StromRol/Razas.json")
        .then((d) => d.json())
        .then((d) => C(d.razas)),
        fetch("/StromRol/Clases.json")
          .then((d) => d.json())
          .then((d) => q(d.clases)),
        fetch("/StromRol/Nacionalidad.json")
          .then((d) => d.json())
          .then((d) => al(d.nacionalidades)),
        fetch("/StromRol/Origen.json")
          .then((d) => d.json())
          .then((d) => Al(d.origenes));
    }, []),
    Yl.useEffect(() => {
      if ((ua({}), $))
        if (["SELOROK", "DEMONIOS"].includes($.nombre.toUpperCase())) Xl(hd($));
        else {
          const d = D
            ? {
                ...D,
                variacion_caracteristicas: Array.isArray(
                  D.variacion_caracteristicas
                )
                  ? D.variacion_caracteristicas
                  : typeof D.variacion_caracteristicas == "string"
                  ? [D.variacion_caracteristicas]
                  : void 0,
              }
            : void 0;
          let S = hd($, d);
          K &&
            K.variacion_caracteristicas &&
            (S = gd(S, K.variacion_caracteristicas)),
            Xl(S);
        }
      else Xl(null);
    }, [$, D, K]),
    Yl.useEffect(() => {
      if (D) {
        const d = J0(D);
        Da(d);
      } else Da([]);
    }, [D]),
    o.jsxs("div", {
      className: "ficha-container",
      children: [
        B &&
          o.jsx("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "2rem 0",
            },
            children: o.jsx("img", {
              src: "/StromRol/logo.webp",
              alt: "Logo",
              style: { maxWidth: "320px", width: "100%", height: "auto" },
            }),
          }),
        o.jsx("h2", {
          className: "ficha-title",
          children: "Generador de Fichas",
        }),
        o.jsxs("div", {
          className: "ficha-select-group",
          children: [
            o.jsx("label", {
              htmlFor: "raza-select",
              className: "ficha-label",
              children: "Raza:",
            }),
            o.jsxs("select", {
              id: "raza-select",
              className: "ficha-select",
              value: $?.nombre || "",
              onChange: (d) => {
                const S = ll.find((T) => T.nombre === d.target.value);
                jl(S || null),
                  x(),
                  X(null),
                  S &&
                    ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                      S.nombre.toUpperCase()
                    ) &&
                    kl(null);
              },
              children: [
                o.jsx("option", { value: "", children: "Elige una raza" }),
                ll.map((d) =>
                  o.jsx(
                    "option",
                    { value: d.nombre, children: d.nombre.toUpperCase() },
                    d.nombre
                  )
                ),
              ],
            }),
          ],
        }),
        o.jsxs("div", {
          className: "ficha-select-group",
          children: [
            o.jsx("label", {
              htmlFor: "clase-select",
              className: "ficha-label",
              children: "Clase:",
            }),
            o.jsxs("select", {
              id: "clase-select",
              className: "ficha-select",
              value: D?.nombre || "",
              onChange: (d) => {
                const S = E.find((T) => T.nombre === d.target.value);
                kl(S || null), ua({}), X(null), Vl(null), Ml(null), x();
              },
              disabled: !!(
                $ &&
                ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                  $.nombre.toUpperCase()
                )
              ),
              children: [
                o.jsx("option", { value: "", children: "Elige una clase" }),
                E.map((d) =>
                  o.jsx(
                    "option",
                    { value: d.nombre, children: d.nombre.toUpperCase() },
                    d.nombre
                  )
                ),
              ],
            }),
          ],
        }),
        o.jsxs("div", {
          className: "ficha-select-group",
          children: [
            o.jsx("label", {
              htmlFor: "nacionalidad-select",
              className: "ficha-label",
              children: "Nacionalidad:",
            }),
            o.jsxs("select", {
              id: "nacionalidad-select",
              className: "ficha-select",
              value: K?.nombre || "",
              onChange: (d) => {
                const S = k.find((T) => T.nombre === d.target.value);
                Vl(S || null), ua({}), X(null), x();
              },
              disabled: !$,
              children: [
                o.jsx("option", {
                  value: "",
                  children: "Elige una nacionalidad",
                }),
                k.map((d) =>
                  o.jsx(
                    "option",
                    { value: d.nombre, children: d.nombre },
                    d.nombre
                  )
                ),
              ],
            }),
          ],
        }),
        o.jsxs("div", {
          className: "ficha-select-group",
          children: [
            o.jsx("label", {
              htmlFor: "origen-select",
              className: "ficha-label",
              children: "Origen:",
            }),
            o.jsxs("select", {
              id: "origen-select",
              className: "ficha-select",
              value: nl?.nombre || "",
              onChange: (d) => {
                const S = cl.find((T) => T.nombre === d.target.value);
                Ml(S || null), x();
              },
              disabled: !K,
              children: [
                o.jsx("option", { value: "", children: "Elige un origen" }),
                cl.map((d) =>
                  o.jsx(
                    "option",
                    { value: d.nombre, children: d.nombre },
                    d.nombre
                  )
                ),
              ],
            }),
          ],
        }),
        El &&
          o.jsxs("div", {
            className: "ficha-resultado",
            children: [
              o.jsx("h3", {
                className: "ficha-resultado-title",
                children: "Dados que debe tirar el jugador:",
              }),
              o.jsx("ul", {
                className: "ficha-resultado-list",
                children: Object.entries(El).map(([d, S]) =>
                  o.jsxs(
                    "li",
                    {
                      className: "ficha-resultado-item",
                      children: [
                        o.jsxs("b", {
                          className: "ficha-resultado-carac",
                          children: [d, ":"],
                        }),
                        " ",
                        o.jsx("span", {
                          className: "ficha-resultado-dado",
                          children: S,
                        }),
                        o.jsx("input", {
                          type: "number",
                          min: "1",
                          className: "ficha-resultado-input",
                          placeholder: "Tirada",
                          value: pl[d] || "",
                          onChange: (T) => {
                            Ul(d, T.target.value);
                          },
                        }),
                      ],
                    },
                    d
                  )
                ),
              }),
              o.jsx("div", {
                className: "ficha-dadosmin2-group",
                children: o.jsxs("label", {
                  className: "ficha-dadosmin-label",
                  children: [
                    o.jsx("input", {
                      type: "checkbox",
                      checked: ma,
                      onChange: (d) => Rl(d.target.checked),
                      className: "ficha-dadosmin-checkbox",
                    }),
                    "Dados min. 2",
                  ],
                }),
              }),
              o.jsxs("div", {
                className: "ficha-botones-group",
                children: [
                  o.jsx("button", {
                    className: "ficha-calcular-btn",
                    onClick: M,
                    disabled: Object.keys(El || {}).length === 0,
                    children: "Generar tiradas aleatorias",
                  }),
                  o.jsx("button", {
                    className: "ficha-habilidades-btn",
                    disabled:
                      Object.keys(El || {}).length === 0 ||
                      Object.entries(El || {}).some(([d]) => !pl[d]),
                    onClick: () => {
                      const d = parseInt(pl.Fuerza || "0", 10);
                      let S = "";
                      d >= 18 && d <= 23
                        ? (S = "+1")
                        : d >= 24 && d <= 30
                        ? (S = "+1D4")
                        : d >= 31 && d <= 38
                        ? (S = "+1D6")
                        : d >= 39 && d <= 45
                        ? (S = "+1D10")
                        : d >= 46
                        ? (S = "+2D6")
                        : (S = "Sin bonus");
                      const T = parseInt(pl.Destreza || "0", 10),
                        R = d + T;
                      let j = "NO TIENE";
                      D &&
                        [
                          "ARQUERO",
                          "CASACA AZUL",
                          "ILMIONARIO",
                          "GUARDABOSQUES",
                        ].some(
                          (Qt) => D.nombre.toUpperCase() === Qt.toUpperCase()
                        ) &&
                        (R >= 0 && R <= 24
                          ? (j = "Nada")
                          : R >= 25 && R <= 40
                          ? (j = "+1D4")
                          : R >= 41 && R <= 52
                          ? (j = "+2D4")
                          : R >= 53 && (j = "2D4+1"));
                      const J = parseInt(pl.Inteligencia || "0", 10),
                        fl = parseInt(pl.Constitución || "0", 10),
                        Fl = parseInt(pl.Poder || "0", 10),
                        Ll = parseInt(pl.Carisma || "0", 10),
                        $l = parseInt(pl.Tamaño || "0", 10);
                      let ya = 0;
                      J >= 1 && J <= 10
                        ? (ya = J)
                        : J >= 11 && J <= 18
                        ? (ya = J + 20)
                        : J >= 19 && (ya = J + 30);
                      const xa = J + T + 10,
                        Me = Math.floor(fl / 2) + J + Fl + Ll - 5,
                        De = T * 2 + J + Fl - $l - 5,
                        Il = J * 2 + T + Ll - 15,
                        xe = J + Math.floor(d / 2) + Fl + T - $l - 5,
                        Gt = Fl + Ll + J + 40 - fl;
                      X({
                        bonusCC: `Bonus de Fuerza CC: ${S}`,
                        bonusAA: `Bonus de Fuerza AA: ${j}`,
                        conocimiento: ya,
                        percepcion: xa,
                        comunicacion: Me,
                        agilidad: De,
                        manipulacion: Il,
                        discrecion: xe,
                        saludMental: Gt,
                        puntosVida: Math.max(1, fl + $l - 12),
                      });
                    },
                    children: "Calcular habilidades",
                  }),
                ],
              }),
              D?.variacion_carac_info &&
                ((typeof D.variacion_carac_info == "string" &&
                  D.variacion_carac_info.trim() !== "") ||
                  (Array.isArray(D.variacion_carac_info) &&
                    D.variacion_carac_info.length > 0) ||
                  (typeof D.variacion_carac_info == "number" &&
                    !isNaN(D.variacion_carac_info))) &&
                o.jsxs("div", {
                  className: "ficha-resultado-info",
                  children: [
                    o.jsx("b", { children: "Info adicional de dados:" }),
                    " ",
                    Array.isArray(D.variacion_carac_info)
                      ? D.variacion_carac_info.join(", ")
                      : D.variacion_carac_info,
                  ],
                }),
            ],
          }),
        U &&
          o.jsx("div", {
            className: "raza-card",
            children: o.jsxs("div", {
              className: "raza-content",
              children: [
                o.jsx("h4", {
                  className: "raza-section-title",
                  children: "Resultados de habilidades",
                }),
                o.jsxs("div", {
                  className: "raza-list",
                  children: [
                    o.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        o.jsxs("span", {
                          className: "raza-bonus-name",
                          children: [U.bonusCC.split(":")[0], ":"],
                        }),
                        o.jsx("span", {
                          className: "raza-chip raza-chip-secondary",
                          children: U.bonusCC.split(":")[1],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        o.jsxs("span", {
                          className: "raza-bonus-name",
                          children: [U.bonusAA.split(":")[0], ":"],
                        }),
                        o.jsx("span", {
                          className: "raza-chip raza-chip-secondary",
                          children: U.bonusAA.split(":")[1],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        o.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Puntos de vida:",
                        }),
                        o.jsx("span", {
                          className: "raza-chip raza-chip-pv",
                          children: U.puntosVida,
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        o.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Conocimiento:",
                        }),
                        o.jsx("span", {
                          className: "raza-chip raza-chip-success",
                          children: U.conocimiento,
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        o.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Percepción:",
                        }),
                        o.jsx("span", {
                          className: "raza-chip raza-chip-success",
                          children: U.percepcion,
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        o.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Comunicación:",
                        }),
                        o.jsx("span", {
                          className: "raza-chip raza-chip-success",
                          children: U.comunicacion,
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        o.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Agilidad:",
                        }),
                        o.jsx("span", {
                          className: "raza-chip raza-chip-success",
                          children: U.agilidad,
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        o.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Manipulación:",
                        }),
                        o.jsx("span", {
                          className: "raza-chip raza-chip-success",
                          children: U.manipulacion,
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        o.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Discreción:",
                        }),
                        o.jsx("span", {
                          className: "raza-chip raza-chip-success",
                          children: U.discrecion,
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "raza-list-item",
                      children: [
                        o.jsx("span", {
                          className: "raza-bonus-name",
                          children: "Salud Mental:",
                        }),
                        o.jsx("span", {
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
        _(),
        $ &&
        ["SELOROK", "DEMONIO", "SELOROKS", "DEMONIOS"].includes(
          $.nombre.toUpperCase()
        )
          ? null
          : il(),
        G(),
        O(),
        L(),
      ],
    })
  );
}
L0.createRoot(document.getElementById("root")).render(
  o.jsx(Yl.StrictMode, { children: o.jsx($0, {}) })
);
