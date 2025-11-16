(function () {
  const J = document.createElement("link").relList;
  if (J && J.supports && J.supports("modulepreload")) return;
  for (const j of document.querySelectorAll('link[rel="modulepreload"]')) h(j);
  new MutationObserver((j) => {
    for (const R of j)
      if (R.type === "childList")
        for (const Q of R.addedNodes)
          Q.tagName === "LINK" && Q.rel === "modulepreload" && h(Q);
  }).observe(document, { childList: !0, subtree: !0 });
  function X(j) {
    const R = {};
    return (
      j.integrity && (R.integrity = j.integrity),
      j.referrerPolicy && (R.referrerPolicy = j.referrerPolicy),
      j.crossOrigin === "use-credentials"
        ? (R.credentials = "include")
        : j.crossOrigin === "anonymous"
        ? (R.credentials = "omit")
        : (R.credentials = "same-origin"),
      R
    );
  }
  function h(j) {
    if (j.ep) return;
    j.ep = !0;
    const R = X(j);
    fetch(j.href, R);
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
function Hh() {
  if (ed) return Du;
  ed = 1;
  var M = Symbol.for("react.transitional.element"),
    J = Symbol.for("react.fragment");
  function X(h, j, R) {
    var Q = null;
    if (
      (R !== void 0 && (Q = "" + R),
      j.key !== void 0 && (Q = "" + j.key),
      "key" in j)
    ) {
      R = {};
      for (var ta in j) ta !== "key" && (R[ta] = j[ta]);
    } else R = j;
    return (
      (j = R.ref),
      { $$typeof: M, type: h, key: Q, ref: j !== void 0 ? j : null, props: R }
    );
  }
  return (Du.Fragment = J), (Du.jsx = X), (Du.jsxs = X), Du;
}
var ud;
function Ch() {
  return ud || ((ud = 1), (nf.exports = Hh())), nf.exports;
}
var s = Ch(),
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
function qh() {
  if (nd) return $;
  nd = 1;
  var M = Symbol.for("react.transitional.element"),
    J = Symbol.for("react.portal"),
    X = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    R = Symbol.for("react.consumer"),
    Q = Symbol.for("react.context"),
    ta = Symbol.for("react.forward_ref"),
    B = Symbol.for("react.suspense"),
    N = Symbol.for("react.memo"),
    Y = Symbol.for("react.lazy"),
    W = Symbol.iterator;
  function ea(r) {
    return r === null || typeof r != "object"
      ? null
      : ((r = (W && r[W]) || r["@@iterator"]),
        typeof r == "function" ? r : null);
  }
  var fa = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ma = Object.assign,
    Ka = {};
  function Ua(r, _, U) {
    (this.props = r),
      (this.context = _),
      (this.refs = Ka),
      (this.updater = U || fa);
  }
  (Ua.prototype.isReactComponent = {}),
    (Ua.prototype.setState = function (r, _) {
      if (typeof r != "object" && typeof r != "function" && r != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, r, _, "setState");
    }),
    (Ua.prototype.forceUpdate = function (r) {
      this.updater.enqueueForceUpdate(this, r, "forceUpdate");
    });
  function na() {}
  na.prototype = Ua.prototype;
  function pa(r, _, U) {
    (this.props = r),
      (this.context = _),
      (this.refs = Ka),
      (this.updater = U || fa);
  }
  var w = (pa.prototype = new na());
  (w.constructor = pa), Ma(w, Ua.prototype), (w.isPureReactComponent = !0);
  var cl = Array.isArray,
    O = { H: null, A: null, T: null, S: null, V: null },
    ka = Object.prototype.hasOwnProperty;
  function P(r, _, U, D, d, p) {
    return (
      (U = p.ref),
      { $$typeof: M, type: r, key: _, ref: U !== void 0 ? U : null, props: p }
    );
  }
  function Xa(r, _) {
    return P(r.type, _, void 0, void 0, void 0, r.props);
  }
  function Ga(r) {
    return typeof r == "object" && r !== null && r.$$typeof === M;
  }
  function Cl(r) {
    var _ = { "=": "=0", ":": "=2" };
    return (
      "$" +
      r.replace(/[=:]/g, function (U) {
        return _[U];
      })
    );
  }
  var Ra = /\/+/g;
  function ga(r, _) {
    return typeof r == "object" && r !== null && r.key != null
      ? Cl("" + r.key)
      : _.toString(36);
  }
  function Ml() {}
  function ql(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (
          (typeof r.status == "string"
            ? r.then(Ml, Ml)
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
  function Da(r, _, U, D, d) {
    var p = typeof r;
    (p === "undefined" || p === "boolean") && (r = null);
    var S = !1;
    if (r === null) S = !0;
    else
      switch (p) {
        case "bigint":
        case "string":
        case "number":
          S = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case M:
            case J:
              S = !0;
              break;
            case Y:
              return (S = r._init), Da(S(r._payload), _, U, D, d);
          }
      }
    if (S)
      return (
        (d = d(r)),
        (S = D === "" ? "." + ga(r, 0) : D),
        cl(d)
          ? ((U = ""),
            S != null && (U = S.replace(Ra, "$&/") + "/"),
            Da(d, _, U, "", function (Ea) {
              return Ea;
            }))
          : d != null &&
            (Ga(d) &&
              (d = Xa(
                d,
                U +
                  (d.key == null || (r && r.key === d.key)
                    ? ""
                    : ("" + d.key).replace(Ra, "$&/") + "/") +
                  S
              )),
            _.push(d)),
        1
      );
    S = 0;
    var H = D === "" ? "." : D + ":";
    if (cl(r))
      for (var C = 0; C < r.length; C++)
        (D = r[C]), (p = H + ga(D, C)), (S += Da(D, _, U, p, d));
    else if (((C = ea(r)), typeof C == "function"))
      for (r = C.call(r), C = 0; !(D = r.next()).done; )
        (D = D.value), (p = H + ga(D, C++)), (S += Da(D, _, U, p, d));
    else if (p === "object") {
      if (typeof r.then == "function") return Da(ql(r), _, U, D, d);
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
    return S;
  }
  function z(r, _, U) {
    if (r == null) return r;
    var D = [],
      d = 0;
    return (
      Da(r, D, "", "", function (p) {
        return _.call(U, p, d++);
      }),
      D
    );
  }
  function x(r) {
    if (r._status === -1) {
      var _ = r._result;
      (_ = _()),
        _.then(
          function (U) {
            (r._status === 0 || r._status === -1) &&
              ((r._status = 1), (r._result = U));
          },
          function (U) {
            (r._status === 0 || r._status === -1) &&
              ((r._status = 2), (r._result = U));
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
  function ra() {}
  return (
    ($.Children = {
      map: z,
      forEach: function (r, _, U) {
        z(
          r,
          function () {
            _.apply(this, arguments);
          },
          U
        );
      },
      count: function (r) {
        var _ = 0;
        return (
          z(r, function () {
            _++;
          }),
          _
        );
      },
      toArray: function (r) {
        return (
          z(r, function (_) {
            return _;
          }) || []
        );
      },
      only: function (r) {
        if (!Ga(r))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return r;
      },
    }),
    ($.Component = Ua),
    ($.Fragment = X),
    ($.Profiler = j),
    ($.PureComponent = pa),
    ($.StrictMode = h),
    ($.Suspense = B),
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
    ($.cloneElement = function (r, _, U) {
      if (r == null)
        throw Error(
          "The argument must be a React element, but you passed " + r + "."
        );
      var D = Ma({}, r.props),
        d = r.key,
        p = void 0;
      if (_ != null)
        for (S in (_.ref !== void 0 && (p = void 0),
        _.key !== void 0 && (d = "" + _.key),
        _))
          !ka.call(_, S) ||
            S === "key" ||
            S === "__self" ||
            S === "__source" ||
            (S === "ref" && _.ref === void 0) ||
            (D[S] = _[S]);
      var S = arguments.length - 2;
      if (S === 1) D.children = U;
      else if (1 < S) {
        for (var H = Array(S), C = 0; C < S; C++) H[C] = arguments[C + 2];
        D.children = H;
      }
      return P(r.type, d, void 0, void 0, p, D);
    }),
    ($.createContext = function (r) {
      return (
        (r = {
          $$typeof: Q,
          _currentValue: r,
          _currentValue2: r,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (r.Provider = r),
        (r.Consumer = { $$typeof: R, _context: r }),
        r
      );
    }),
    ($.createElement = function (r, _, U) {
      var D,
        d = {},
        p = null;
      if (_ != null)
        for (D in (_.key !== void 0 && (p = "" + _.key), _))
          ka.call(_, D) &&
            D !== "key" &&
            D !== "__self" &&
            D !== "__source" &&
            (d[D] = _[D]);
      var S = arguments.length - 2;
      if (S === 1) d.children = U;
      else if (1 < S) {
        for (var H = Array(S), C = 0; C < S; C++) H[C] = arguments[C + 2];
        d.children = H;
      }
      if (r && r.defaultProps)
        for (D in ((S = r.defaultProps), S)) d[D] === void 0 && (d[D] = S[D]);
      return P(r, p, void 0, void 0, null, d);
    }),
    ($.createRef = function () {
      return { current: null };
    }),
    ($.forwardRef = function (r) {
      return { $$typeof: ta, render: r };
    }),
    ($.isValidElement = Ga),
    ($.lazy = function (r) {
      return { $$typeof: Y, _payload: { _status: -1, _result: r }, _init: x };
    }),
    ($.memo = function (r, _) {
      return { $$typeof: N, type: r, compare: _ === void 0 ? null : _ };
    }),
    ($.startTransition = function (r) {
      var _ = O.T,
        U = {};
      O.T = U;
      try {
        var D = r(),
          d = O.S;
        d !== null && d(U, D),
          typeof D == "object" &&
            D !== null &&
            typeof D.then == "function" &&
            D.then(ra, Z);
      } catch (p) {
        Z(p);
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
    ($.useActionState = function (r, _, U) {
      return O.H.useActionState(r, _, U);
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
    ($.useEffect = function (r, _, U) {
      var D = O.H;
      if (typeof U == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return D.useEffect(r, _);
    }),
    ($.useId = function () {
      return O.H.useId();
    }),
    ($.useImperativeHandle = function (r, _, U) {
      return O.H.useImperativeHandle(r, _, U);
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
    ($.useReducer = function (r, _, U) {
      return O.H.useReducer(r, _, U);
    }),
    ($.useRef = function (r) {
      return O.H.useRef(r);
    }),
    ($.useState = function (r) {
      return O.H.useState(r);
    }),
    ($.useSyncExternalStore = function (r, _, U) {
      return O.H.useSyncExternalStore(r, _, U);
    }),
    ($.useTransition = function () {
      return O.H.useTransition();
    }),
    ($.version = "19.1.1"),
    $
  );
}
var id;
function df() {
  return id || ((id = 1), (cf.exports = qh())), cf.exports;
}
var qa = df(),
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
 */ var cd;
function Bh() {
  return (
    cd ||
      ((cd = 1),
      (function (M) {
        function J(z, x) {
          var Z = z.length;
          z.push(x);
          a: for (; 0 < Z; ) {
            var ra = (Z - 1) >>> 1,
              r = z[ra];
            if (0 < j(r, x)) (z[ra] = x), (z[Z] = r), (Z = ra);
            else break a;
          }
        }
        function X(z) {
          return z.length === 0 ? null : z[0];
        }
        function h(z) {
          if (z.length === 0) return null;
          var x = z[0],
            Z = z.pop();
          if (Z !== x) {
            z[0] = Z;
            a: for (var ra = 0, r = z.length, _ = r >>> 1; ra < _; ) {
              var U = 2 * (ra + 1) - 1,
                D = z[U],
                d = U + 1,
                p = z[d];
              if (0 > j(D, Z))
                d < r && 0 > j(p, D)
                  ? ((z[ra] = p), (z[d] = Z), (ra = d))
                  : ((z[ra] = D), (z[U] = Z), (ra = U));
              else if (d < r && 0 > j(p, Z)) (z[ra] = p), (z[d] = Z), (ra = d);
              else break a;
            }
          }
          return x;
        }
        function j(z, x) {
          var Z = z.sortIndex - x.sortIndex;
          return Z !== 0 ? Z : z.id - x.id;
        }
        if (
          ((M.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var R = performance;
          M.unstable_now = function () {
            return R.now();
          };
        } else {
          var Q = Date,
            ta = Q.now();
          M.unstable_now = function () {
            return Q.now() - ta;
          };
        }
        var B = [],
          N = [],
          Y = 1,
          W = null,
          ea = 3,
          fa = !1,
          Ma = !1,
          Ka = !1,
          Ua = !1,
          na = typeof setTimeout == "function" ? setTimeout : null,
          pa = typeof clearTimeout == "function" ? clearTimeout : null,
          w = typeof setImmediate < "u" ? setImmediate : null;
        function cl(z) {
          for (var x = X(N); x !== null; ) {
            if (x.callback === null) h(N);
            else if (x.startTime <= z)
              h(N), (x.sortIndex = x.expirationTime), J(B, x);
            else break;
            x = X(N);
          }
        }
        function O(z) {
          if (((Ka = !1), cl(z), !Ma))
            if (X(B) !== null) (Ma = !0), ka || ((ka = !0), ga());
            else {
              var x = X(N);
              x !== null && Da(O, x.startTime - z);
            }
        }
        var ka = !1,
          P = -1,
          Xa = 5,
          Ga = -1;
        function Cl() {
          return Ua ? !0 : !(M.unstable_now() - Ga < Xa);
        }
        function Ra() {
          if (((Ua = !1), ka)) {
            var z = M.unstable_now();
            Ga = z;
            var x = !0;
            try {
              a: {
                (Ma = !1), Ka && ((Ka = !1), pa(P), (P = -1)), (fa = !0);
                var Z = ea;
                try {
                  l: {
                    for (
                      cl(z), W = X(B);
                      W !== null && !(W.expirationTime > z && Cl());

                    ) {
                      var ra = W.callback;
                      if (typeof ra == "function") {
                        (W.callback = null), (ea = W.priorityLevel);
                        var r = ra(W.expirationTime <= z);
                        if (((z = M.unstable_now()), typeof r == "function")) {
                          (W.callback = r), cl(z), (x = !0);
                          break l;
                        }
                        W === X(B) && h(B), cl(z);
                      } else h(B);
                      W = X(B);
                    }
                    if (W !== null) x = !0;
                    else {
                      var _ = X(N);
                      _ !== null && Da(O, _.startTime - z), (x = !1);
                    }
                  }
                  break a;
                } finally {
                  (W = null), (ea = Z), (fa = !1);
                }
                x = void 0;
              }
            } finally {
              x ? ga() : (ka = !1);
            }
          }
        }
        var ga;
        if (typeof w == "function")
          ga = function () {
            w(Ra);
          };
        else if (typeof MessageChannel < "u") {
          var Ml = new MessageChannel(),
            ql = Ml.port2;
          (Ml.port1.onmessage = Ra),
            (ga = function () {
              ql.postMessage(null);
            });
        } else
          ga = function () {
            na(Ra, 0);
          };
        function Da(z, x) {
          P = na(function () {
            z(M.unstable_now());
          }, x);
        }
        (M.unstable_IdlePriority = 5),
          (M.unstable_ImmediatePriority = 1),
          (M.unstable_LowPriority = 4),
          (M.unstable_NormalPriority = 3),
          (M.unstable_Profiling = null),
          (M.unstable_UserBlockingPriority = 2),
          (M.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (M.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Xa = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (M.unstable_getCurrentPriorityLevel = function () {
            return ea;
          }),
          (M.unstable_next = function (z) {
            switch (ea) {
              case 1:
              case 2:
              case 3:
                var x = 3;
                break;
              default:
                x = ea;
            }
            var Z = ea;
            ea = x;
            try {
              return z();
            } finally {
              ea = Z;
            }
          }),
          (M.unstable_requestPaint = function () {
            Ua = !0;
          }),
          (M.unstable_runWithPriority = function (z, x) {
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
            var Z = ea;
            ea = z;
            try {
              return x();
            } finally {
              ea = Z;
            }
          }),
          (M.unstable_scheduleCallback = function (z, x, Z) {
            var ra = M.unstable_now();
            switch (
              (typeof Z == "object" && Z !== null
                ? ((Z = Z.delay),
                  (Z = typeof Z == "number" && 0 < Z ? ra + Z : ra))
                : (Z = ra),
              z)
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
              (z = {
                id: Y++,
                callback: x,
                priorityLevel: z,
                startTime: Z,
                expirationTime: r,
                sortIndex: -1,
              }),
              Z > ra
                ? ((z.sortIndex = Z),
                  J(N, z),
                  X(B) === null &&
                    z === X(N) &&
                    (Ka ? (pa(P), (P = -1)) : (Ka = !0), Da(O, Z - ra)))
                : ((z.sortIndex = r),
                  J(B, z),
                  Ma || fa || ((Ma = !0), ka || ((ka = !0), ga()))),
              z
            );
          }),
          (M.unstable_shouldYield = Cl),
          (M.unstable_wrapCallback = function (z) {
            var x = ea;
            return function () {
              var Z = ea;
              ea = x;
              try {
                return z.apply(this, arguments);
              } finally {
                ea = Z;
              }
            };
          });
      })(rf)),
    rf
  );
}
var fd;
function Yh() {
  return fd || ((fd = 1), (sf.exports = Bh())), sf.exports;
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
function Xh() {
  if (sd) return Pa;
  sd = 1;
  var M = df();
  function J(B) {
    var N = "https://react.dev/errors/" + B;
    if (1 < arguments.length) {
      N += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Y = 2; Y < arguments.length; Y++)
        N += "&args[]=" + encodeURIComponent(arguments[Y]);
    }
    return (
      "Minified React error #" +
      B +
      "; visit " +
      N +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function X() {}
  var h = {
      d: {
        f: X,
        r: function () {
          throw Error(J(522));
        },
        D: X,
        C: X,
        L: X,
        m: X,
        X,
        S: X,
        M: X,
      },
      p: 0,
      findDOMNode: null,
    },
    j = Symbol.for("react.portal");
  function R(B, N, Y) {
    var W =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: j,
      key: W == null ? null : "" + W,
      children: B,
      containerInfo: N,
      implementation: Y,
    };
  }
  var Q = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ta(B, N) {
    if (B === "font") return "";
    if (typeof N == "string") return N === "use-credentials" ? N : "";
  }
  return (
    (Pa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
    (Pa.createPortal = function (B, N) {
      var Y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!N || (N.nodeType !== 1 && N.nodeType !== 9 && N.nodeType !== 11))
        throw Error(J(299));
      return R(B, N, null, Y);
    }),
    (Pa.flushSync = function (B) {
      var N = Q.T,
        Y = h.p;
      try {
        if (((Q.T = null), (h.p = 2), B)) return B();
      } finally {
        (Q.T = N), (h.p = Y), h.d.f();
      }
    }),
    (Pa.preconnect = function (B, N) {
      typeof B == "string" &&
        (N
          ? ((N = N.crossOrigin),
            (N =
              typeof N == "string"
                ? N === "use-credentials"
                  ? N
                  : ""
                : void 0))
          : (N = null),
        h.d.C(B, N));
    }),
    (Pa.prefetchDNS = function (B) {
      typeof B == "string" && h.d.D(B);
    }),
    (Pa.preinit = function (B, N) {
      if (typeof B == "string" && N && typeof N.as == "string") {
        var Y = N.as,
          W = ta(Y, N.crossOrigin),
          ea = typeof N.integrity == "string" ? N.integrity : void 0,
          fa = typeof N.fetchPriority == "string" ? N.fetchPriority : void 0;
        Y === "style"
          ? h.d.S(B, typeof N.precedence == "string" ? N.precedence : void 0, {
              crossOrigin: W,
              integrity: ea,
              fetchPriority: fa,
            })
          : Y === "script" &&
            h.d.X(B, {
              crossOrigin: W,
              integrity: ea,
              fetchPriority: fa,
              nonce: typeof N.nonce == "string" ? N.nonce : void 0,
            });
      }
    }),
    (Pa.preinitModule = function (B, N) {
      if (typeof B == "string")
        if (typeof N == "object" && N !== null) {
          if (N.as == null || N.as === "script") {
            var Y = ta(N.as, N.crossOrigin);
            h.d.M(B, {
              crossOrigin: Y,
              integrity: typeof N.integrity == "string" ? N.integrity : void 0,
              nonce: typeof N.nonce == "string" ? N.nonce : void 0,
            });
          }
        } else N == null && h.d.M(B);
    }),
    (Pa.preload = function (B, N) {
      if (
        typeof B == "string" &&
        typeof N == "object" &&
        N !== null &&
        typeof N.as == "string"
      ) {
        var Y = N.as,
          W = ta(Y, N.crossOrigin);
        h.d.L(B, Y, {
          crossOrigin: W,
          integrity: typeof N.integrity == "string" ? N.integrity : void 0,
          nonce: typeof N.nonce == "string" ? N.nonce : void 0,
          type: typeof N.type == "string" ? N.type : void 0,
          fetchPriority:
            typeof N.fetchPriority == "string" ? N.fetchPriority : void 0,
          referrerPolicy:
            typeof N.referrerPolicy == "string" ? N.referrerPolicy : void 0,
          imageSrcSet:
            typeof N.imageSrcSet == "string" ? N.imageSrcSet : void 0,
          imageSizes: typeof N.imageSizes == "string" ? N.imageSizes : void 0,
          media: typeof N.media == "string" ? N.media : void 0,
        });
      }
    }),
    (Pa.preloadModule = function (B, N) {
      if (typeof B == "string")
        if (N) {
          var Y = ta(N.as, N.crossOrigin);
          h.d.m(B, {
            as: typeof N.as == "string" && N.as !== "script" ? N.as : void 0,
            crossOrigin: Y,
            integrity: typeof N.integrity == "string" ? N.integrity : void 0,
          });
        } else h.d.m(B);
    }),
    (Pa.requestFormReset = function (B) {
      h.d.r(B);
    }),
    (Pa.unstable_batchedUpdates = function (B, N) {
      return B(N);
    }),
    (Pa.useFormState = function (B, N, Y) {
      return Q.H.useFormState(B, N, Y);
    }),
    (Pa.useFormStatus = function () {
      return Q.H.useHostTransitionStatus();
    }),
    (Pa.version = "19.1.1"),
    Pa
  );
}
var rd;
function Gh() {
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
  return M(), (of.exports = Xh()), of.exports;
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
function Qh() {
  if (od) return xu;
  od = 1;
  var M = Yh(),
    J = df(),
    X = Gh();
  function h(a) {
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
  function j(a) {
    return !(!a || (a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11));
  }
  function R(a) {
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
  function Q(a) {
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
  function ta(a) {
    if (R(a) !== a) throw Error(h(188));
  }
  function B(a) {
    var l = a.alternate;
    if (!l) {
      if (((l = R(a)), l === null)) throw Error(h(188));
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
          if (n === t) return ta(u), a;
          if (n === e) return ta(u), l;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (t.return !== e.return) (t = u), (e = n);
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === t) {
            (i = !0), (t = u), (e = n);
            break;
          }
          if (c === e) {
            (i = !0), (e = u), (t = n);
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === t) {
              (i = !0), (t = n), (e = u);
              break;
            }
            if (c === e) {
              (i = !0), (e = n), (t = u);
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(h(189));
        }
      }
      if (t.alternate !== e) throw Error(h(190));
    }
    if (t.tag !== 3) throw Error(h(188));
    return t.stateNode.current === t ? a : l;
  }
  function N(a) {
    var l = a.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return a;
    for (a = a.child; a !== null; ) {
      if (((l = N(a)), l !== null)) return l;
      a = a.sibling;
    }
    return null;
  }
  var Y = Object.assign,
    W = Symbol.for("react.element"),
    ea = Symbol.for("react.transitional.element"),
    fa = Symbol.for("react.portal"),
    Ma = Symbol.for("react.fragment"),
    Ka = Symbol.for("react.strict_mode"),
    Ua = Symbol.for("react.profiler"),
    na = Symbol.for("react.provider"),
    pa = Symbol.for("react.consumer"),
    w = Symbol.for("react.context"),
    cl = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    ka = Symbol.for("react.suspense_list"),
    P = Symbol.for("react.memo"),
    Xa = Symbol.for("react.lazy"),
    Ga = Symbol.for("react.activity"),
    Cl = Symbol.for("react.memo_cache_sentinel"),
    Ra = Symbol.iterator;
  function ga(a) {
    return a === null || typeof a != "object"
      ? null
      : ((a = (Ra && a[Ra]) || a["@@iterator"]),
        typeof a == "function" ? a : null);
  }
  var Ml = Symbol.for("react.client.reference");
  function ql(a) {
    if (a == null) return null;
    if (typeof a == "function")
      return a.$$typeof === Ml ? null : a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case Ma:
        return "Fragment";
      case Ua:
        return "Profiler";
      case Ka:
        return "StrictMode";
      case O:
        return "Suspense";
      case ka:
        return "SuspenseList";
      case Ga:
        return "Activity";
    }
    if (typeof a == "object")
      switch (a.$$typeof) {
        case fa:
          return "Portal";
        case w:
          return (a.displayName || "Context") + ".Provider";
        case pa:
          return (a._context.displayName || "Context") + ".Consumer";
        case cl:
          var l = a.render;
          return (
            (a = a.displayName),
            a ||
              ((a = l.displayName || l.name || ""),
              (a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef")),
            a
          );
        case P:
          return (
            (l = a.displayName || null), l !== null ? l : ql(a.type) || "Memo"
          );
        case Xa:
          (l = a._payload), (a = a._init);
          try {
            return ql(a(l));
          } catch {}
      }
    return null;
  }
  var Da = Array.isArray,
    z = J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    x = X.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = { pending: !1, data: null, method: null, action: null },
    ra = [],
    r = -1;
  function _(a) {
    return { current: a };
  }
  function U(a) {
    0 > r || ((a.current = ra[r]), (ra[r] = null), r--);
  }
  function D(a, l) {
    r++, (ra[r] = a.current), (a.current = l);
  }
  var d = _(null),
    p = _(null),
    S = _(null),
    H = _(null);
  function C(a, l) {
    switch ((D(S, l), D(p, a), D(d, null), l.nodeType)) {
      case 9:
      case 11:
        a = (a = l.documentElement) && (a = a.namespaceURI) ? jo(a) : 0;
        break;
      default:
        if (((a = l.tagName), (l = l.namespaceURI)))
          (l = jo(l)), (a = Uo(l, a));
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
    U(d), D(d, a);
  }
  function Ea() {
    U(d), U(p), U(S);
  }
  function ia(a) {
    a.memoizedState !== null && D(H, a);
    var l = d.current,
      t = Uo(l, a.type);
    l !== t && (D(p, a), D(d, t));
  }
  function F(a) {
    p.current === a && (U(d), U(p)),
      H.current === a && (U(H), (Eu._currentValue = Z));
  }
  var Ta = Object.prototype.hasOwnProperty,
    Aa = M.unstable_scheduleCallback,
    ba = M.unstable_cancelCallback,
    Dl = M.unstable_shouldYield,
    at = M.unstable_requestPaint,
    ll = M.unstable_now,
    je = M.unstable_getCurrentPriorityLevel,
    Lt = M.unstable_ImmediatePriority,
    Kt = M.unstable_UserBlockingPriority,
    lt = M.unstable_NormalPriority,
    Ue = M.unstable_LowPriority,
    ju = M.unstable_IdlePriority,
    Bl = M.log,
    Uu = M.unstable_setDisableYieldValue,
    Yl = null,
    Ja = null;
  function tt(a) {
    if (
      (typeof Bl == "function" && Uu(a),
      Ja && typeof Ja.setStrictMode == "function")
    )
      try {
        Ja.setStrictMode(Yl, a);
      } catch {}
  }
  var fl = Math.clz32 ? Math.clz32 : zd,
    bd = Math.log,
    Sd = Math.LN2;
  function zd(a) {
    return (a >>>= 0), a === 0 ? 32 : (31 - ((bd(a) / Sd) | 0)) | 0;
  }
  var Ru = 256,
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
  function Cu(a, l, t) {
    var e = a.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      n = a.suspendedLanes,
      i = a.pingedLanes;
    a = a.warmLanes;
    var c = e & 134217727;
    return (
      c !== 0
        ? ((e = c & ~n),
          e !== 0
            ? (u = _t(e))
            : ((i &= c),
              i !== 0
                ? (u = _t(i))
                : t || ((t = c & ~a), t !== 0 && (u = _t(t)))))
        : ((c = e & ~n),
          c !== 0
            ? (u = _t(c))
            : i !== 0
            ? (u = _t(i))
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
  function Re(a, l) {
    return (a.pendingLanes & ~(a.suspendedLanes & ~a.pingedLanes) & l) === 0;
  }
  function pd(a, l) {
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
  function mf() {
    var a = Ru;
    return (Ru <<= 1), (Ru & 4194048) === 0 && (Ru = 256), a;
  }
  function hf() {
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
  function Ad(a, l, t, e, u, n) {
    var i = a.pendingLanes;
    (a.pendingLanes = t),
      (a.suspendedLanes = 0),
      (a.pingedLanes = 0),
      (a.warmLanes = 0),
      (a.expiredLanes &= t),
      (a.entangledLanes &= t),
      (a.errorRecoveryDisabledLanes &= t),
      (a.shellSuspendCounter = 0);
    var c = a.entanglements,
      f = a.expirationTimes,
      y = a.hiddenUpdates;
    for (t = i & ~t; 0 < t; ) {
      var A = 31 - fl(t),
        T = 1 << A;
      (c[A] = 0), (f[A] = -1);
      var g = y[A];
      if (g !== null)
        for (y[A] = null, A = 0; A < g.length; A++) {
          var b = g[A];
          b !== null && (b.lane &= -536870913);
        }
      t &= ~T;
    }
    e !== 0 && vf(a, e, 0),
      n !== 0 && u === 0 && a.tag !== 0 && (a.suspendedLanes |= n & ~(i & ~l));
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
    var a = x.p;
    return a !== 0 ? a : ((a = window.event), a === void 0 ? 32 : Fo(a.type));
  }
  function Nd(a, l) {
    var t = x.p;
    try {
      return (x.p = a), l();
    } finally {
      x.p = t;
    }
  }
  var et = Math.random().toString(36).slice(2),
    Fa = "__reactFiber$" + et,
    tl = "__reactProps$" + et,
    Jt = "__reactContainer$" + et,
    Fn = "__reactEvents$" + et,
    Ed = "__reactListeners$" + et,
    Td = "__reactHandles$" + et,
    bf = "__reactResources$" + et,
    Ce = "__reactMarker$" + et;
  function In(a) {
    delete a[Fa], delete a[tl], delete a[Fn], delete a[Ed], delete a[Td];
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
          for (a = qo(a); a !== null; ) {
            if ((t = a[Fa])) return t;
            a = qo(a);
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
  function qe(a) {
    var l = a.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return a.stateNode;
    throw Error(h(33));
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
  function Qa(a) {
    a[Ce] = !0;
  }
  var Sf = new Set(),
    zf = {};
  function Ot(a, l) {
    kt(a, l), kt(a + "Capture", l);
  }
  function kt(a, l) {
    for (zf[a] = l, a = 0; a < l.length; a++) Sf.add(l[a]);
  }
  var _d = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    pf = {},
    Af = {};
  function Od(a) {
    return Ta.call(Af, a)
      ? !0
      : Ta.call(pf, a)
      ? !1
      : _d.test(a)
      ? (Af[a] = !0)
      : ((pf[a] = !0), !1);
  }
  function qu(a, l, t) {
    if (Od(l))
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
  var Pn, Nf;
  function Ft(a) {
    if (Pn === void 0)
      try {
        throw Error();
      } catch (t) {
        var l = t.stack.trim().match(/\n( *(at )?)/);
        (Pn = (l && l[1]) || ""),
          (Nf =
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
      Nf
    );
  }
  var ai = !1;
  function li(a, l) {
    if (!a || ai) return "";
    ai = !0;
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
        i = n[0],
        c = n[1];
      if (i && c) {
        var f = i.split(`
`),
          y = c.split(`
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
                    a.displayName &&
                      A.includes("<anonymous>") &&
                      (A = A.replace("<anonymous>", a.displayName)),
                    A
                  );
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      (ai = !1), (Error.prepareStackTrace = t);
    }
    return (t = a ? a.displayName || a.name : "") ? Ft(t) : "";
  }
  function Md(a) {
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
        return li(a.type, !1);
      case 11:
        return li(a.type.render, !1);
      case 1:
        return li(a.type, !0);
      case 31:
        return Ft("Activity");
      default:
        return "";
    }
  }
  function Ef(a) {
    try {
      var l = "";
      do (l += Md(a)), (a = a.return);
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
  function Dd(a) {
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
          set: function (i) {
            (e = "" + i), n.call(this, i);
          },
        }),
        Object.defineProperty(a, l, { enumerable: t.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (i) {
            e = "" + i;
          },
          stopTracking: function () {
            (a._valueTracker = null), delete a[l];
          },
        }
      );
    }
  }
  function Yu(a) {
    a._valueTracker || (a._valueTracker = Dd(a));
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
  function ti(a, l, t, e, u, n, i, c) {
    (a.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (a.type = i)
        : a.removeAttribute("type"),
      l != null
        ? i === "number"
          ? ((l === 0 && a.value === "") || a.value != l) &&
            (a.value = "" + yl(l))
          : a.value !== "" + yl(l) && (a.value = "" + yl(l))
        : (i !== "submit" && i !== "reset") || a.removeAttribute("value"),
      l != null
        ? ei(a, i, yl(l))
        : t != null
        ? ei(a, i, yl(t))
        : e != null && a.removeAttribute("value"),
      u == null && n != null && (a.defaultChecked = !!n),
      u != null &&
        (a.checked = u && typeof u != "function" && typeof u != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (a.name = "" + yl(c))
        : a.removeAttribute("name");
  }
  function Of(a, l, t, e, u, n, i, c) {
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
        c || l === a.value || (a.value = l),
        (a.defaultValue = l);
    }
    (e = e ?? u),
      (e = typeof e != "function" && typeof e != "symbol" && !!e),
      (a.checked = c ? a.checked : !!e),
      (a.defaultChecked = !!e),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (a.name = i);
  }
  function ei(a, l, t) {
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
        if (t != null) throw Error(h(92));
        if (Da(e)) {
          if (1 < e.length) throw Error(h(93));
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
  var jd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function xf(a, l, t) {
    var e = l.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === ""
      ? e
        ? a.setProperty(l, "")
        : l === "float"
        ? (a.cssFloat = "")
        : (a[l] = "")
      : e
      ? a.setProperty(l, t)
      : typeof t != "number" || t === 0 || jd.has(l)
      ? l === "float"
        ? (a.cssFloat = t)
        : (a[l] = ("" + t).trim())
      : (a[l] = t + "px");
  }
  function jf(a, l, t) {
    if (l != null && typeof l != "object") throw Error(h(62));
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
        (e = l[u]), l.hasOwnProperty(u) && t[u] !== e && xf(a, u, e);
    } else for (var n in l) l.hasOwnProperty(n) && xf(a, n, l[n]);
  }
  function ui(a) {
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
    Rd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Gu(a) {
    return Rd.test("" + a)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : a;
  }
  var ni = null;
  function ii(a) {
    return (
      (a = a.target || a.srcElement || window),
      a.correspondingUseElement && (a = a.correspondingUseElement),
      a.nodeType === 3 ? a.parentNode : a
    );
  }
  var ae = null,
    le = null;
  function Uf(a) {
    var l = $t(a);
    if (l && (a = l.stateNode)) {
      var t = a[tl] || null;
      a: switch (((a = l.stateNode), l.type)) {
        case "input":
          if (
            (ti(
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
                if (!u) throw Error(h(90));
                ti(
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
  var ci = !1;
  function Rf(a, l, t) {
    if (ci) return a(l, t);
    ci = !0;
    try {
      var e = a(l);
      return e;
    } finally {
      if (
        ((ci = !1),
        (ae !== null || le !== null) &&
          (_n(), ae && ((l = ae), (a = le), (le = ae = null), Uf(l), a)))
      )
        for (l = 0; l < a.length; l++) Uf(a[l]);
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
    if (t && typeof t != "function") throw Error(h(231, l, typeof t));
    return t;
  }
  var Gl = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    fi = !1;
  if (Gl)
    try {
      var Ye = {};
      Object.defineProperty(Ye, "passive", {
        get: function () {
          fi = !0;
        },
      }),
        window.addEventListener("test", Ye, Ye),
        window.removeEventListener("test", Ye, Ye);
    } catch {
      fi = !1;
    }
  var ut = null,
    si = null,
    Qu = null;
  function Hf() {
    if (Qu) return Qu;
    var a,
      l = si,
      t = l.length,
      e,
      u = "value" in ut ? ut.value : ut.textContent,
      n = u.length;
    for (a = 0; a < t && l[a] === u[a]; a++);
    var i = t - a;
    for (e = 1; e <= i && l[t - e] === u[n - e]; e++);
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
  function Cf() {
    return !1;
  }
  function el(a) {
    function l(t, e, u, n, i) {
      (this._reactName = t),
        (this._targetInst = u),
        (this.type = e),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null);
      for (var c in a)
        a.hasOwnProperty(c) && ((t = a[c]), (this[c] = t ? t(n) : n[c]));
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
      Y(l.prototype, {
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
    Xe = Y({}, Mt, { view: 0, detail: 0 }),
    Hd = el(Xe),
    ri,
    oi,
    Ge,
    Ku = Y({}, Xe, {
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
      getModifierState: mi,
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
                ? ((ri = a.screenX - Ge.screenX), (oi = a.screenY - Ge.screenY))
                : (oi = ri = 0),
              (Ge = a)),
            ri);
      },
      movementY: function (a) {
        return "movementY" in a ? a.movementY : oi;
      },
    }),
    qf = el(Ku),
    Cd = Y({}, Ku, { dataTransfer: 0 }),
    qd = el(Cd),
    Bd = Y({}, Xe, { relatedTarget: 0 }),
    di = el(Bd),
    Yd = Y({}, Mt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xd = el(Yd),
    Gd = Y({}, Mt, {
      clipboardData: function (a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      },
    }),
    Qd = el(Gd),
    Zd = Y({}, Mt, { data: 0 }),
    Bf = el(Zd),
    Vd = {
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
    Ld = {
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
    Kd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Jd(a) {
    var l = this.nativeEvent;
    return l.getModifierState
      ? l.getModifierState(a)
      : (a = Kd[a])
      ? !!l[a]
      : !1;
  }
  function mi() {
    return Jd;
  }
  var wd = Y({}, Xe, {
      key: function (a) {
        if (a.key) {
          var l = Vd[a.key] || a.key;
          if (l !== "Unidentified") return l;
        }
        return a.type === "keypress"
          ? ((a = Zu(a)), a === 13 ? "Enter" : String.fromCharCode(a))
          : a.type === "keydown" || a.type === "keyup"
          ? Ld[a.keyCode] || "Unidentified"
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
      getModifierState: mi,
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
    $d = el(wd),
    Wd = Y({}, Ku, {
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
    Yf = el(Wd),
    kd = Y({}, Xe, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: mi,
    }),
    Fd = el(kd),
    Id = Y({}, Mt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pd = el(Id),
    am = Y({}, Ku, {
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
    lm = el(am),
    tm = Y({}, Mt, { newState: 0, oldState: 0 }),
    em = el(tm),
    um = [9, 13, 27, 32],
    hi = Gl && "CompositionEvent" in window,
    Qe = null;
  Gl && "documentMode" in document && (Qe = document.documentMode);
  var nm = Gl && "TextEvent" in window && !Qe,
    Xf = Gl && (!hi || (Qe && 8 < Qe && 11 >= Qe)),
    Gf = " ",
    Qf = !1;
  function Zf(a, l) {
    switch (a) {
      case "keyup":
        return um.indexOf(l.keyCode) !== -1;
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
  function im(a, l) {
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
  function cm(a, l) {
    if (te)
      return a === "compositionend" || (!hi && Zf(a, l))
        ? ((a = Hf()), (Qu = si = ut = null), (te = !1), a)
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
  var fm = {
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
    return l === "input" ? !!fm[a.type] : l === "textarea";
  }
  function Kf(a, l, t, e) {
    ae ? (le ? le.push(e) : (le = [e])) : (ae = e),
      (l = Un(l, "onChange")),
      0 < l.length &&
        ((t = new Lu("onChange", "change", null, t, e)),
        a.push({ event: t, listeners: l }));
  }
  var Ze = null,
    Ve = null;
  function sm(a) {
    _o(a, 0);
  }
  function Ju(a) {
    var l = qe(a);
    if (_f(l)) return a;
  }
  function Jf(a, l) {
    if (a === "change") return l;
  }
  var wf = !1;
  if (Gl) {
    var vi;
    if (Gl) {
      var yi = "oninput" in document;
      if (!yi) {
        var $f = document.createElement("div");
        $f.setAttribute("oninput", "return;"),
          (yi = typeof $f.oninput == "function");
      }
      vi = yi;
    } else vi = !1;
    wf = vi && (!document.documentMode || 9 < document.documentMode);
  }
  function Wf() {
    Ze && (Ze.detachEvent("onpropertychange", kf), (Ve = Ze = null));
  }
  function kf(a) {
    if (a.propertyName === "value" && Ju(Ve)) {
      var l = [];
      Kf(l, Ve, a, ii(a)), Rf(sm, l);
    }
  }
  function rm(a, l, t) {
    a === "focusin"
      ? (Wf(), (Ze = l), (Ve = t), Ze.attachEvent("onpropertychange", kf))
      : a === "focusout" && Wf();
  }
  function om(a) {
    if (a === "selectionchange" || a === "keyup" || a === "keydown")
      return Ju(Ve);
  }
  function dm(a, l) {
    if (a === "click") return Ju(l);
  }
  function mm(a, l) {
    if (a === "input" || a === "change") return Ju(l);
  }
  function hm(a, l) {
    return (a === l && (a !== 0 || 1 / a === 1 / l)) || (a !== a && l !== l);
  }
  var sl = typeof Object.is == "function" ? Object.is : hm;
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
      if (!Ta.call(l, u) || !sl(a[u], l[u])) return !1;
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
  function gi(a) {
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
  var vm = Gl && "documentMode" in document && 11 >= document.documentMode,
    ee = null,
    bi = null,
    Ke = null,
    Si = !1;
  function ls(a, l, t) {
    var e =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    Si ||
      ee == null ||
      ee !== Xu(e) ||
      ((e = ee),
      "selectionStart" in e && gi(e)
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
        (e = Un(bi, "onSelect")),
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
    zi = {},
    ts = {};
  Gl &&
    ((ts = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ue.animationend.animation,
      delete ue.animationiteration.animation,
      delete ue.animationstart.animation),
    "TransitionEvent" in window || delete ue.transitionend.transition);
  function xt(a) {
    if (zi[a]) return zi[a];
    if (!ue[a]) return a;
    var l = ue[a],
      t;
    for (t in l) if (l.hasOwnProperty(t) && t in ts) return (zi[a] = l[t]);
    return a;
  }
  var es = xt("animationend"),
    us = xt("animationiteration"),
    ns = xt("animationstart"),
    ym = xt("transitionrun"),
    gm = xt("transitionstart"),
    bm = xt("transitioncancel"),
    is = xt("transitionend"),
    cs = new Map(),
    pi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  pi.push("scrollEnd");
  function Tl(a, l) {
    cs.set(a, l), Ot(l, [a]);
  }
  var fs = new WeakMap();
  function bl(a, l) {
    if (typeof a == "object" && a !== null) {
      var t = fs.get(a);
      return t !== void 0
        ? t
        : ((l = { value: a, source: l, stack: Ef(l) }), fs.set(a, l), l);
    }
    return { value: a, source: l, stack: Ef(l) };
  }
  var Sl = [],
    ne = 0,
    Ai = 0;
  function wu() {
    for (var a = ne, l = (Ai = ne = 0); l < a; ) {
      var t = Sl[l];
      Sl[l++] = null;
      var e = Sl[l];
      Sl[l++] = null;
      var u = Sl[l];
      Sl[l++] = null;
      var n = Sl[l];
      if (((Sl[l++] = null), e !== null && u !== null)) {
        var i = e.pending;
        i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
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
      (Ai |= e),
      (a.lanes |= e),
      (a = a.alternate),
      a !== null && (a.lanes |= e);
  }
  function Ni(a, l, t, e) {
    return $u(a, l, t, e), Wu(a);
  }
  function ie(a, l) {
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
    if (50 < yu) throw ((yu = 0), (Dc = null), Error(h(185)));
    for (var l = a.return; l !== null; ) (a = l), (l = a.return);
    return a.tag === 3 ? a.stateNode : null;
  }
  var ce = {};
  function Sm(a, l, t, e) {
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
    return new Sm(a, l, t, e);
  }
  function Ei(a) {
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
    var i = 0;
    if (((e = a), typeof a == "function")) Ei(a) && (i = 1);
    else if (typeof a == "string")
      i = ph(a, t, d.current)
        ? 26
        : a === "html" || a === "head" || a === "body"
        ? 27
        : 5;
    else
      a: switch (a) {
        case Ga:
          return (a = rl(31, t, l, u)), (a.elementType = Ga), (a.lanes = n), a;
        case Ma:
          return jt(t.children, u, n, l);
        case Ka:
          (i = 8), (u |= 24);
          break;
        case Ua:
          return (
            (a = rl(12, t, l, u | 2)), (a.elementType = Ua), (a.lanes = n), a
          );
        case O:
          return (a = rl(13, t, l, u)), (a.elementType = O), (a.lanes = n), a;
        case ka:
          return (a = rl(19, t, l, u)), (a.elementType = ka), (a.lanes = n), a;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case na:
              case w:
                i = 10;
                break a;
              case pa:
                i = 9;
                break a;
              case cl:
                i = 11;
                break a;
              case P:
                i = 14;
                break a;
              case Xa:
                (i = 16), (e = null);
                break a;
            }
          (i = 29),
            (t = Error(h(130, a === null ? "null" : typeof a, ""))),
            (e = null);
      }
    return (
      (l = rl(i, t, l, u)), (l.elementType = a), (l.type = e), (l.lanes = n), l
    );
  }
  function jt(a, l, t, e) {
    return (a = rl(7, a, e, l)), (a.lanes = t), a;
  }
  function Ti(a, l, t) {
    return (a = rl(6, a, null, l)), (a.lanes = t), a;
  }
  function _i(a, l, t) {
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
    Ut = null,
    Zl = 1,
    Vl = "";
  function Rt(a, l) {
    (fe[se++] = Iu), (fe[se++] = Fu), (Fu = a), (Iu = l);
  }
  function os(a, l, t) {
    (zl[pl++] = Zl), (zl[pl++] = Vl), (zl[pl++] = Ut), (Ut = a);
    var e = Zl;
    a = Vl;
    var u = 32 - fl(e) - 1;
    (e &= ~(1 << u)), (t += 1);
    var n = 32 - fl(l) + u;
    if (30 < n) {
      var i = u - (u % 5);
      (n = (e & ((1 << i) - 1)).toString(32)),
        (e >>= i),
        (u -= i),
        (Zl = (1 << (32 - fl(l) + u)) | (t << u) | e),
        (Vl = n + a);
    } else (Zl = (1 << n) | (t << u) | e), (Vl = a);
  }
  function Oi(a) {
    a.return !== null && (Rt(a, 1), os(a, 1, 0));
  }
  function Mi(a) {
    for (; a === Fu; )
      (Fu = fe[--se]), (fe[se] = null), (Iu = fe[--se]), (fe[se] = null);
    for (; a === Ut; )
      (Ut = zl[--pl]),
        (zl[pl] = null),
        (Vl = zl[--pl]),
        (zl[pl] = null),
        (Zl = zl[--pl]),
        (zl[pl] = null);
  }
  var al = null,
    _a = null,
    sa = !1,
    Ht = null,
    xl = !1,
    Di = Error(h(519));
  function Ct(a) {
    var l = Error(h(418, ""));
    throw ($e(bl(l, a)), Di);
  }
  function ds(a) {
    var l = a.stateNode,
      t = a.type,
      e = a.memoizedProps;
    switch (((l[Fa] = a), (l[tl] = e), t)) {
      case "dialog":
        la("cancel", l), la("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        la("load", l);
        break;
      case "video":
      case "audio":
        for (t = 0; t < bu.length; t++) la(bu[t], l);
        break;
      case "source":
        la("error", l);
        break;
      case "img":
      case "image":
      case "link":
        la("error", l), la("load", l);
        break;
      case "details":
        la("toggle", l);
        break;
      case "input":
        la("invalid", l),
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
        la("invalid", l);
        break;
      case "textarea":
        la("invalid", l), Df(l, e.value, e.defaultValue, e.children), Yu(l);
    }
    (t = e.children),
      (typeof t != "string" && typeof t != "number" && typeof t != "bigint") ||
      l.textContent === "" + t ||
      e.suppressHydrationWarning === !0 ||
      xo(l.textContent, t)
        ? (e.popover != null && (la("beforetoggle", l), la("toggle", l)),
          e.onScroll != null && la("scroll", l),
          e.onScrollEnd != null && la("scrollend", l),
          e.onClick != null && (l.onclick = Rn),
          (l = !0))
        : (l = !1),
      l || Ct(a);
  }
  function ms(a) {
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
    if (!sa) return ms(a), (sa = !0), !1;
    var l = a.tag,
      t;
    if (
      ((t = l !== 3 && l !== 27) &&
        ((t = l === 5) &&
          ((t = a.type),
          (t =
            !(t !== "form" && t !== "button") || Kc(a.type, a.memoizedProps))),
        (t = !t)),
      t && _a && Ct(a),
      ms(a),
      l === 13)
    ) {
      if (((a = a.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
        throw Error(h(317));
      a: {
        for (a = a.nextSibling, l = 0; a; ) {
          if (a.nodeType === 8)
            if (((t = a.data), t === "/$")) {
              if (l === 0) {
                _a = Ol(a.nextSibling);
                break a;
              }
              l--;
            } else (t !== "$" && t !== "$!" && t !== "$?") || l++;
          a = a.nextSibling;
        }
        _a = null;
      }
    } else
      l === 27
        ? ((l = _a), zt(a.type) ? ((a = Wc), (Wc = null), (_a = a)) : (_a = l))
        : (_a = al ? Ol(a.stateNode.nextSibling) : null);
    return !0;
  }
  function we() {
    (_a = al = null), (sa = !1);
  }
  function hs() {
    var a = Ht;
    return (
      a !== null &&
        (il === null ? (il = a) : il.push.apply(il, a), (Ht = null)),
      a
    );
  }
  function $e(a) {
    Ht === null ? (Ht = [a]) : Ht.push(a);
  }
  var xi = _(null),
    qt = null,
    Ll = null;
  function nt(a, l, t) {
    D(xi, l._currentValue), (l._currentValue = t);
  }
  function Kl(a) {
    (a._currentValue = xi.current), U(xi);
  }
  function ji(a, l, t) {
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
  function Ui(a, l, t, e) {
    var u = a.child;
    for (u !== null && (u.return = a); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        a: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < l.length; f++)
            if (c.context === l[f]) {
              (n.lanes |= t),
                (c = n.alternate),
                c !== null && (c.lanes |= t),
                ji(n.return, t, a),
                e || (i = null);
              break a;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(h(341));
        (i.lanes |= t),
          (n = i.alternate),
          n !== null && (n.lanes |= t),
          ji(i, t, a),
          (i = null);
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === a) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            (u.return = i.return), (i = u);
            break;
          }
          i = i.return;
        }
      u = i;
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
        var i = u.alternate;
        if (i === null) throw Error(h(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type;
          sl(u.pendingProps.value, i.value) ||
            (a !== null ? a.push(c) : (a = [c]));
        }
      } else if (u === H.current) {
        if (((i = u.alternate), i === null)) throw Error(h(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (a !== null ? a.push(Eu) : (a = [Eu]));
      }
      u = u.return;
    }
    a !== null && Ui(l, a, t, e), (l.flags |= 262144);
  }
  function Pu(a) {
    for (a = a.firstContext; a !== null; ) {
      if (!sl(a.context._currentValue, a.memoizedValue)) return !0;
      a = a.next;
    }
    return !1;
  }
  function Bt(a) {
    (qt = a),
      (Ll = null),
      (a = a.dependencies),
      a !== null && (a.firstContext = null);
  }
  function Ia(a) {
    return vs(qt, a);
  }
  function an(a, l) {
    return qt === null && Bt(a), vs(a, l);
  }
  function vs(a, l) {
    var t = l._currentValue;
    if (((l = { context: l, memoizedValue: t, next: null }), Ll === null)) {
      if (a === null) throw Error(h(308));
      (Ll = l),
        (a.dependencies = { lanes: 0, firstContext: l }),
        (a.flags |= 524288);
    } else Ll = Ll.next = l;
    return t;
  }
  var zm =
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
    pm = M.unstable_scheduleCallback,
    Am = M.unstable_NormalPriority,
    Ba = {
      $$typeof: w,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ri() {
    return { controller: new zm(), data: new Map(), refCount: 0 };
  }
  function ke(a) {
    a.refCount--,
      a.refCount === 0 &&
        pm(Am, function () {
          a.controller.abort();
        });
  }
  var Fe = null,
    Hi = 0,
    re = 0,
    oe = null;
  function Nm(a, l) {
    if (Fe === null) {
      var t = (Fe = []);
      (Hi = 0),
        (re = qc()),
        (oe = {
          status: "pending",
          value: void 0,
          then: function (e) {
            t.push(e);
          },
        });
    }
    return Hi++, l.then(ys, ys), l;
  }
  function ys() {
    if (--Hi === 0 && Fe !== null) {
      oe !== null && (oe.status = "fulfilled");
      var a = Fe;
      (Fe = null), (re = 0), (oe = null);
      for (var l = 0; l < a.length; l++) (0, a[l])();
    }
  }
  function Em(a, l) {
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
  var gs = z.S;
  z.S = function (a, l) {
    typeof l == "object" &&
      l !== null &&
      typeof l.then == "function" &&
      Nm(a, l),
      gs !== null && gs(a, l);
  };
  var Yt = _(null);
  function Ci() {
    var a = Yt.current;
    return a !== null ? a : Sa.pooledCache;
  }
  function ln(a, l) {
    l === null ? D(Yt, Yt.current) : D(Yt, l.pool);
  }
  function bs() {
    var a = Ci();
    return a === null ? null : { parent: Ba._currentValue, pool: a };
  }
  var Ie = Error(h(460)),
    Ss = Error(h(474)),
    tn = Error(h(542)),
    qi = { then: function () {} };
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
        throw ((a = l.reason), Ns(a), a);
      default:
        if (typeof l.status == "string") l.then(en, en);
        else {
          if (((a = Sa), a !== null && 100 < a.shellSuspendCounter))
            throw Error(h(482));
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
            throw ((a = l.reason), Ns(a), a);
        }
        throw ((Pe = l), Ie);
    }
  }
  var Pe = null;
  function As() {
    if (Pe === null) throw Error(h(459));
    var a = Pe;
    return (Pe = null), a;
  }
  function Ns(a) {
    if (a === Ie || a === tn) throw Error(h(483));
  }
  var it = !1;
  function Bi(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Yi(a, l) {
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
  function ct(a) {
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
  function Xi(a, l) {
    var t = a.updateQueue,
      e = a.alternate;
    if (e !== null && ((e = e.updateQueue), t === e)) {
      var u = null,
        n = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var i = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null,
          };
          n === null ? (u = n = i) : (n = n.next = i), (t = t.next);
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
  var Gi = !1;
  function lu() {
    if (Gi) {
      var a = oe;
      if (a !== null) throw a;
    }
  }
  function tu(a, l, t, e) {
    Gi = !1;
    var u = a.updateQueue;
    it = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c,
        y = f.next;
      (f.next = null), i === null ? (n = y) : (i.next = y), (i = f);
      var A = a.alternate;
      A !== null &&
        ((A = A.updateQueue),
        (c = A.lastBaseUpdate),
        c !== i &&
          (c === null ? (A.firstBaseUpdate = y) : (c.next = y),
          (A.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var T = u.baseState;
      (i = 0), (A = y = f = null), (c = n);
      do {
        var g = c.lane & -536870913,
          b = g !== c.lane;
        if (b ? (ua & g) === g : (e & g) === g) {
          g !== 0 && g === re && (Gi = !0),
            A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                });
          a: {
            var K = a,
              V = c;
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
                T = Y({}, T, g);
                break a;
              case 2:
                it = !0;
            }
          }
          (g = c.callback),
            g !== null &&
              ((a.flags |= 64),
              b && (a.flags |= 8192),
              (b = u.callbacks),
              b === null ? (u.callbacks = [g]) : b.push(g));
        } else
          (b = {
            lane: g,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            A === null ? ((y = A = b), (f = T)) : (A = A.next = b),
            (i |= g);
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break;
          (b = c),
            (c = b.next),
            (b.next = null),
            (u.lastBaseUpdate = b),
            (u.shared.pending = null);
        }
      } while (!0);
      A === null && (f = T),
        (u.baseState = f),
        (u.firstBaseUpdate = y),
        (u.lastBaseUpdate = A),
        n === null && (u.shared.lanes = 0),
        (yt |= i),
        (a.lanes = i),
        (a.memoizedState = T);
    }
  }
  function Es(a, l) {
    if (typeof a != "function") throw Error(h(191, a));
    a.call(l);
  }
  function Ts(a, l) {
    var t = a.callbacks;
    if (t !== null)
      for (a.callbacks = null, a = 0; a < t.length; a++) Es(t[a], l);
  }
  var de = _(null),
    un = _(0);
  function _s(a, l) {
    (a = Il), D(un, a), D(de, l), (Il = a | l.baseLanes);
  }
  function Qi() {
    D(un, Il), D(de, de.current);
  }
  function Zi() {
    (Il = un.current), U(de), U(un);
  }
  var st = 0,
    k = null,
    ma = null,
    Ha = null,
    nn = !1,
    me = !1,
    Xt = !1,
    cn = 0,
    eu = 0,
    he = null,
    Tm = 0;
  function xa() {
    throw Error(h(321));
  }
  function Vi(a, l) {
    if (l === null) return !1;
    for (var t = 0; t < l.length && t < a.length; t++)
      if (!sl(a[t], l[t])) return !1;
    return !0;
  }
  function Li(a, l, t, e, u, n) {
    return (
      (st = n),
      (k = l),
      (l.memoizedState = null),
      (l.updateQueue = null),
      (l.lanes = 0),
      (z.H = a === null || a.memoizedState === null ? sr : rr),
      (Xt = !1),
      (n = t(e, u)),
      (Xt = !1),
      me && (n = Ms(l, t, e, u)),
      Os(a),
      n
    );
  }
  function Os(a) {
    z.H = mn;
    var l = ma !== null && ma.next !== null;
    if (((st = 0), (Ha = ma = k = null), (nn = !1), (eu = 0), (he = null), l))
      throw Error(h(300));
    a === null ||
      Za ||
      ((a = a.dependencies), a !== null && Pu(a) && (Za = !0));
  }
  function Ms(a, l, t, e) {
    k = a;
    var u = 0;
    do {
      if ((me && (he = null), (eu = 0), (me = !1), 25 <= u))
        throw Error(h(301));
      if (((u += 1), (Ha = ma = null), a.updateQueue != null)) {
        var n = a.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (z.H = Um), (n = l(t, e));
    } while (me);
    return n;
  }
  function _m() {
    var a = z.H,
      l = a.useState()[0];
    return (
      (l = typeof l.then == "function" ? uu(l) : l),
      (a = a.useState()[0]),
      (ma !== null ? ma.memoizedState : null) !== a && (k.flags |= 1024),
      l
    );
  }
  function Ki() {
    var a = cn !== 0;
    return (cn = 0), a;
  }
  function Ji(a, l, t) {
    (l.updateQueue = a.updateQueue), (l.flags &= -2053), (a.lanes &= ~t);
  }
  function wi(a) {
    if (nn) {
      for (a = a.memoizedState; a !== null; ) {
        var l = a.queue;
        l !== null && (l.pending = null), (a = a.next);
      }
      nn = !1;
    }
    (st = 0), (Ha = ma = k = null), (me = !1), (eu = cn = 0), (he = null);
  }
  function ul() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ha === null ? (k.memoizedState = Ha = a) : (Ha = Ha.next = a), Ha;
  }
  function Ca() {
    if (ma === null) {
      var a = k.alternate;
      a = a !== null ? a.memoizedState : null;
    } else a = ma.next;
    var l = Ha === null ? k.memoizedState : Ha.next;
    if (l !== null) (Ha = l), (ma = a);
    else {
      if (a === null)
        throw k.alternate === null ? Error(h(467)) : Error(h(310));
      (ma = a),
        (a = {
          memoizedState: ma.memoizedState,
          baseState: ma.baseState,
          baseQueue: ma.baseQueue,
          queue: ma.queue,
          next: null,
        }),
        Ha === null ? (k.memoizedState = Ha = a) : (Ha = Ha.next = a);
    }
    return Ha;
  }
  function $i() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function uu(a) {
    var l = eu;
    return (
      (eu += 1),
      he === null && (he = []),
      (a = ps(he, a, l)),
      (l = k),
      (Ha === null ? l.memoizedState : Ha.next) === null &&
        ((l = l.alternate),
        (z.H = l === null || l.memoizedState === null ? sr : rr)),
      a
    );
  }
  function fn(a) {
    if (a !== null && typeof a == "object") {
      if (typeof a.then == "function") return uu(a);
      if (a.$$typeof === w) return Ia(a);
    }
    throw Error(h(438, String(a)));
  }
  function Wi(a) {
    var l = null,
      t = k.updateQueue;
    if ((t !== null && (l = t.memoCache), l == null)) {
      var e = k.alternate;
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
      t === null && ((t = $i()), (k.updateQueue = t)),
      (t.memoCache = l),
      (t = l.data[l.index]),
      t === void 0)
    )
      for (t = l.data[l.index] = Array(a), e = 0; e < a; e++) t[e] = Cl;
    return l.index++, t;
  }
  function Jl(a, l) {
    return typeof l == "function" ? l(a) : l;
  }
  function sn(a) {
    var l = Ca();
    return ki(l, ma, a);
  }
  function ki(a, l, t) {
    var e = a.queue;
    if (e === null) throw Error(h(311));
    e.lastRenderedReducer = t;
    var u = a.baseQueue,
      n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        (u.next = n.next), (n.next = i);
      }
      (l.baseQueue = u = n), (e.pending = null);
    }
    if (((n = a.baseState), u === null)) a.memoizedState = n;
    else {
      l = u.next;
      var c = (i = null),
        f = null,
        y = l,
        A = !1;
      do {
        var T = y.lane & -536870913;
        if (T !== y.lane ? (ua & T) === T : (st & T) === T) {
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
              T === re && (A = !0);
          else if ((st & g) === g) {
            (y = y.next), g === re && (A = !0);
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
              f === null ? ((c = f = T), (i = n)) : (f = f.next = T),
              (k.lanes |= g),
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
            f === null ? ((c = f = g), (i = n)) : (f = f.next = g),
            (k.lanes |= T),
            (yt |= T);
        y = y.next;
      } while (y !== null && y !== l);
      if (
        (f === null ? (i = n) : (f.next = c),
        !sl(n, a.memoizedState) && ((Za = !0), A && ((t = oe), t !== null)))
      )
        throw t;
      (a.memoizedState = n),
        (a.baseState = i),
        (a.baseQueue = f),
        (e.lastRenderedState = n);
    }
    return u === null && (e.lanes = 0), [a.memoizedState, e.dispatch];
  }
  function Fi(a) {
    var l = Ca(),
      t = l.queue;
    if (t === null) throw Error(h(311));
    t.lastRenderedReducer = a;
    var e = t.dispatch,
      u = t.pending,
      n = l.memoizedState;
    if (u !== null) {
      t.pending = null;
      var i = (u = u.next);
      do (n = a(n, i.action)), (i = i.next);
      while (i !== u);
      sl(n, l.memoizedState) || (Za = !0),
        (l.memoizedState = n),
        l.baseQueue === null && (l.baseState = n),
        (t.lastRenderedState = n);
    }
    return [n, e];
  }
  function Ds(a, l, t) {
    var e = k,
      u = Ca(),
      n = sa;
    if (n) {
      if (t === void 0) throw Error(h(407));
      t = t();
    } else t = l();
    var i = !sl((ma || u).memoizedState, t);
    i && ((u.memoizedState = t), (Za = !0)), (u = u.queue);
    var c = Us.bind(null, e, u, a);
    if (
      (nu(2048, 8, c, [a]),
      u.getSnapshot !== l || i || (Ha !== null && Ha.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        ve(9, rn(), js.bind(null, e, u, t, l), null),
        Sa === null)
      )
        throw Error(h(349));
      n || (st & 124) !== 0 || xs(e, l, t);
    }
    return t;
  }
  function xs(a, l, t) {
    (a.flags |= 16384),
      (a = { getSnapshot: l, value: t }),
      (l = k.updateQueue),
      l === null
        ? ((l = $i()), (k.updateQueue = l), (l.stores = [a]))
        : ((t = l.stores), t === null ? (l.stores = [a]) : t.push(a));
  }
  function js(a, l, t, e) {
    (l.value = t), (l.getSnapshot = e), Rs(l) && Hs(a);
  }
  function Us(a, l, t) {
    return t(function () {
      Rs(l) && Hs(a);
    });
  }
  function Rs(a) {
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
    var l = ie(a, 2);
    l !== null && vl(l, a, 2);
  }
  function Ii(a) {
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
  function Cs(a, l, t, e) {
    return (a.baseState = t), ki(a, ma, typeof e == "function" ? e : Jl);
  }
  function Om(a, l, t, e, u) {
    if (dn(a)) throw Error(h(485));
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
        then: function (i) {
          n.listeners.push(i);
        },
      };
      z.T !== null ? t(!0) : (n.isTransition = !1),
        e(n),
        (t = l.pending),
        t === null
          ? ((n.next = l.pending = n), qs(l, n))
          : ((n.next = t.next), (l.pending = t.next = n));
    }
  }
  function qs(a, l) {
    var t = l.action,
      e = l.payload,
      u = a.state;
    if (l.isTransition) {
      var n = z.T,
        i = {};
      z.T = i;
      try {
        var c = t(u, e),
          f = z.S;
        f !== null && f(i, c), Bs(a, l, c);
      } catch (y) {
        Pi(a, l, y);
      } finally {
        z.T = n;
      }
    } else
      try {
        (n = t(u, e)), Bs(a, l, n);
      } catch (y) {
        Pi(a, l, y);
      }
  }
  function Bs(a, l, t) {
    t !== null && typeof t == "object" && typeof t.then == "function"
      ? t.then(
          function (e) {
            Ys(a, l, e);
          },
          function (e) {
            return Pi(a, l, e);
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
        t === l ? (a.pending = null) : ((t = t.next), (l.next = t), qs(a, t)));
  }
  function Pi(a, l, t) {
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
    if (sa) {
      var t = Sa.formState;
      if (t !== null) {
        a: {
          var e = k;
          if (sa) {
            if (_a) {
              l: {
                for (var u = _a, n = xl; u.nodeType !== 8; ) {
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
                (_a = Ol(u.nextSibling)), (e = u.data === "F!");
                break a;
              }
            }
            Ct(e);
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
      (t = ir.bind(null, k, e)),
      (e.dispatch = t),
      (e = Ii(!1)),
      (n = uc.bind(null, k, !1, e.queue)),
      (e = ul()),
      (u = { state: l, dispatch: null, action: a, pending: null }),
      (e.queue = u),
      (t = Om.bind(null, k, u, n, t)),
      (u.dispatch = t),
      (e.memoizedState = a),
      [l, t, !1]
    );
  }
  function Zs(a) {
    var l = Ca();
    return Vs(l, ma, a);
  }
  function Vs(a, l, t) {
    if (
      ((l = ki(a, l, Gs)[0]),
      (a = sn(Jl)[0]),
      typeof l == "object" && l !== null && typeof l.then == "function")
    )
      try {
        var e = uu(l);
      } catch (i) {
        throw i === Ie ? tn : i;
      }
    else e = l;
    l = Ca();
    var u = l.queue,
      n = u.dispatch;
    return (
      t !== l.memoizedState &&
        ((k.flags |= 2048), ve(9, rn(), Mm.bind(null, u, t), null)),
      [e, n, a]
    );
  }
  function Mm(a, l) {
    a.action = l;
  }
  function Ls(a) {
    var l = Ca(),
      t = ma;
    if (t !== null) return Vs(l, t, a);
    Ca(), (l = l.memoizedState), (t = Ca());
    var e = t.queue.dispatch;
    return (t.memoizedState = a), [l, e, !1];
  }
  function ve(a, l, t, e) {
    return (
      (a = { tag: a, create: t, deps: e, inst: l, next: null }),
      (l = k.updateQueue),
      l === null && ((l = $i()), (k.updateQueue = l)),
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
    return Ca().memoizedState;
  }
  function on(a, l, t, e) {
    var u = ul();
    (e = e === void 0 ? null : e),
      (k.flags |= a),
      (u.memoizedState = ve(1 | l, rn(), t, e));
  }
  function nu(a, l, t, e) {
    var u = Ca();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    ma !== null && e !== null && Vi(e, ma.memoizedState.deps)
      ? (u.memoizedState = ve(l, n, t, e))
      : ((k.flags |= a), (u.memoizedState = ve(1 | l, n, t, e)));
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
  function ac() {}
  function Is(a, l) {
    var t = Ca();
    l = l === void 0 ? null : l;
    var e = t.memoizedState;
    return l !== null && Vi(l, e[1]) ? e[0] : ((t.memoizedState = [a, l]), a);
  }
  function Ps(a, l) {
    var t = Ca();
    l = l === void 0 ? null : l;
    var e = t.memoizedState;
    if (l !== null && Vi(l, e[1])) return e[0];
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
  function lc(a, l, t) {
    return t === void 0 || (st & 1073741824) !== 0
      ? (a.memoizedState = l)
      : ((a.memoizedState = t), (a = to()), (k.lanes |= a), (yt |= a), t);
  }
  function ar(a, l, t, e) {
    return sl(t, l)
      ? t
      : de.current !== null
      ? ((a = lc(a, t, e)), sl(a, l) || (Za = !0), a)
      : (st & 42) === 0
      ? ((Za = !0), (a.memoizedState = t))
      : ((a = to()), (k.lanes |= a), (yt |= a), l);
  }
  function lr(a, l, t, e, u) {
    var n = x.p;
    x.p = n !== 0 && 8 > n ? n : 8;
    var i = z.T,
      c = {};
    (z.T = c), uc(a, !1, l, t);
    try {
      var f = u(),
        y = z.S;
      if (
        (y !== null && y(c, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var A = Em(f, e);
        iu(a, l, A, hl(a));
      } else iu(a, l, e, hl(a));
    } catch (T) {
      iu(a, l, { then: function () {}, status: "rejected", reason: T }, hl());
    } finally {
      (x.p = n), (z.T = i);
    }
  }
  function Dm() {}
  function tc(a, l, t, e) {
    if (a.tag !== 5) throw Error(h(476));
    var u = tr(a).queue;
    lr(
      a,
      u,
      l,
      Z,
      t === null
        ? Dm
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
    iu(a, l, {}, hl());
  }
  function ec() {
    return Ia(Eu);
  }
  function ur() {
    return Ca().memoizedState;
  }
  function nr() {
    return Ca().memoizedState;
  }
  function xm(a) {
    for (var l = a.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var t = hl();
          a = ct(t);
          var e = ft(l, a, t);
          e !== null && (vl(e, l, t), au(e, l, t)),
            (l = { cache: Ri() }),
            (a.payload = l);
          return;
      }
      l = l.return;
    }
  }
  function jm(a, l, t) {
    var e = hl();
    (t = {
      lane: e,
      revertLane: 0,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      dn(a)
        ? cr(l, t)
        : ((t = Ni(a, l, t, e)), t !== null && (vl(t, a, e), fr(t, l, e)));
  }
  function ir(a, l, t) {
    var e = hl();
    iu(a, l, t, e);
  }
  function iu(a, l, t, e) {
    var u = {
      lane: e,
      revertLane: 0,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (dn(a)) cr(l, u);
    else {
      var n = a.alternate;
      if (
        a.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = l.lastRenderedReducer), n !== null)
      )
        try {
          var i = l.lastRenderedState,
            c = n(i, t);
          if (((u.hasEagerState = !0), (u.eagerState = c), sl(c, i)))
            return $u(a, l, u, 0), Sa === null && wu(), !1;
        } catch {
        } finally {
        }
      if (((t = Ni(a, l, u, e)), t !== null))
        return vl(t, a, e), fr(t, l, e), !0;
    }
    return !1;
  }
  function uc(a, l, t, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: qc(),
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      dn(a))
    ) {
      if (l) throw Error(h(479));
    } else (l = Ni(a, t, e, 2)), l !== null && vl(l, a, 2);
  }
  function dn(a) {
    var l = a.alternate;
    return a === k || (l !== null && l === k);
  }
  function cr(a, l) {
    me = nn = !0;
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
  var mn = {
      readContext: Ia,
      use: fn,
      useCallback: xa,
      useContext: xa,
      useEffect: xa,
      useImperativeHandle: xa,
      useLayoutEffect: xa,
      useInsertionEffect: xa,
      useMemo: xa,
      useReducer: xa,
      useRef: xa,
      useState: xa,
      useDebugValue: xa,
      useDeferredValue: xa,
      useTransition: xa,
      useSyncExternalStore: xa,
      useId: xa,
      useHostTransitionStatus: xa,
      useFormState: xa,
      useActionState: xa,
      useOptimistic: xa,
      useMemoCache: xa,
      useCacheRefresh: xa,
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
          (a = a.dispatch = jm.bind(null, k, a)),
          [e.memoizedState, a]
        );
      },
      useRef: function (a) {
        var l = ul();
        return (a = { current: a }), (l.memoizedState = a);
      },
      useState: function (a) {
        a = Ii(a);
        var l = a.queue,
          t = ir.bind(null, k, l);
        return (l.dispatch = t), [a.memoizedState, t];
      },
      useDebugValue: ac,
      useDeferredValue: function (a, l) {
        var t = ul();
        return lc(t, a, l);
      },
      useTransition: function () {
        var a = Ii(!1);
        return (
          (a = lr.bind(null, k, a.queue, !0, !1)),
          (ul().memoizedState = a),
          [!1, a]
        );
      },
      useSyncExternalStore: function (a, l, t) {
        var e = k,
          u = ul();
        if (sa) {
          if (t === void 0) throw Error(h(407));
          t = t();
        } else {
          if (((t = l()), Sa === null)) throw Error(h(349));
          (ua & 124) !== 0 || xs(e, l, t);
        }
        u.memoizedState = t;
        var n = { value: t, getSnapshot: l };
        return (
          (u.queue = n),
          Js(Us.bind(null, e, n, a), [a]),
          (e.flags |= 2048),
          ve(9, rn(), js.bind(null, e, n, t, l), null),
          t
        );
      },
      useId: function () {
        var a = ul(),
          l = Sa.identifierPrefix;
        if (sa) {
          var t = Vl,
            e = Zl;
          (t = (e & ~(1 << (32 - fl(e) - 1))).toString(32) + t),
            (l = "«" + l + "R" + t),
            (t = cn++),
            0 < t && (l += "H" + t.toString(32)),
            (l += "»");
        } else (t = Tm++), (l = "«" + l + "r" + t.toString(32) + "»");
        return (a.memoizedState = l);
      },
      useHostTransitionStatus: ec,
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
          (l.queue = t), (l = uc.bind(null, k, !0, t)), (t.dispatch = l), [a, l]
        );
      },
      useMemoCache: Wi,
      useCacheRefresh: function () {
        return (ul().memoizedState = xm.bind(null, k));
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
      useDebugValue: ac,
      useDeferredValue: function (a, l) {
        var t = Ca();
        return ar(t, ma.memoizedState, a, l);
      },
      useTransition: function () {
        var a = sn(Jl)[0],
          l = Ca().memoizedState;
        return [typeof a == "boolean" ? a : uu(a), l];
      },
      useSyncExternalStore: Ds,
      useId: ur,
      useHostTransitionStatus: ec,
      useFormState: Zs,
      useActionState: Zs,
      useOptimistic: function (a, l) {
        var t = Ca();
        return Cs(t, ma, a, l);
      },
      useMemoCache: Wi,
      useCacheRefresh: nr,
    },
    Um = {
      readContext: Ia,
      use: fn,
      useCallback: Is,
      useContext: Ia,
      useEffect: ws,
      useImperativeHandle: Fs,
      useInsertionEffect: $s,
      useLayoutEffect: Ws,
      useMemo: Ps,
      useReducer: Fi,
      useRef: Ks,
      useState: function () {
        return Fi(Jl);
      },
      useDebugValue: ac,
      useDeferredValue: function (a, l) {
        var t = Ca();
        return ma === null ? lc(t, a, l) : ar(t, ma.memoizedState, a, l);
      },
      useTransition: function () {
        var a = Fi(Jl)[0],
          l = Ca().memoizedState;
        return [typeof a == "boolean" ? a : uu(a), l];
      },
      useSyncExternalStore: Ds,
      useId: ur,
      useHostTransitionStatus: ec,
      useFormState: Ls,
      useActionState: Ls,
      useOptimistic: function (a, l) {
        var t = Ca();
        return ma !== null
          ? Cs(t, ma, a, l)
          : ((t.baseState = a), [a, t.queue.dispatch]);
      },
      useMemoCache: Wi,
      useCacheRefresh: nr,
    },
    ye = null,
    cu = 0;
  function hn(a) {
    var l = cu;
    return (cu += 1), ye === null && (ye = []), ps(ye, a, l);
  }
  function fu(a, l) {
    (l = l.props.ref), (a.ref = l !== void 0 ? l : null);
  }
  function vn(a, l) {
    throw l.$$typeof === W
      ? Error(h(525))
      : ((a = Object.prototype.toString.call(l)),
        Error(
          h(
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
    function l(m, o) {
      if (a) {
        var v = m.deletions;
        v === null ? ((m.deletions = [o]), (m.flags |= 16)) : v.push(o);
      }
    }
    function t(m, o) {
      if (!a) return null;
      for (; o !== null; ) l(m, o), (o = o.sibling);
      return null;
    }
    function e(m) {
      for (var o = new Map(); m !== null; )
        m.key !== null ? o.set(m.key, m) : o.set(m.index, m), (m = m.sibling);
      return o;
    }
    function u(m, o) {
      return (m = Ql(m, o)), (m.index = 0), (m.sibling = null), m;
    }
    function n(m, o, v) {
      return (
        (m.index = v),
        a
          ? ((v = m.alternate),
            v !== null
              ? ((v = v.index), v < o ? ((m.flags |= 67108866), o) : v)
              : ((m.flags |= 67108866), o))
          : ((m.flags |= 1048576), o)
      );
    }
    function i(m) {
      return a && m.alternate === null && (m.flags |= 67108866), m;
    }
    function c(m, o, v, E) {
      return o === null || o.tag !== 6
        ? ((o = Ti(v, m.mode, E)), (o.return = m), o)
        : ((o = u(o, v)), (o.return = m), o);
    }
    function f(m, o, v, E) {
      var q = v.type;
      return q === Ma
        ? A(m, o, v.props.children, E, v.key)
        : o !== null &&
          (o.elementType === q ||
            (typeof q == "object" &&
              q !== null &&
              q.$$typeof === Xa &&
              or(q) === o.type))
        ? ((o = u(o, v.props)), fu(o, v), (o.return = m), o)
        : ((o = ku(v.type, v.key, v.props, null, m.mode, E)),
          fu(o, v),
          (o.return = m),
          o);
    }
    function y(m, o, v, E) {
      return o === null ||
        o.tag !== 4 ||
        o.stateNode.containerInfo !== v.containerInfo ||
        o.stateNode.implementation !== v.implementation
        ? ((o = _i(v, m.mode, E)), (o.return = m), o)
        : ((o = u(o, v.children || [])), (o.return = m), o);
    }
    function A(m, o, v, E, q) {
      return o === null || o.tag !== 7
        ? ((o = jt(v, m.mode, E, q)), (o.return = m), o)
        : ((o = u(o, v)), (o.return = m), o);
    }
    function T(m, o, v) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return (o = Ti("" + o, m.mode, v)), (o.return = m), o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case ea:
            return (
              (v = ku(o.type, o.key, o.props, null, m.mode, v)),
              fu(v, o),
              (v.return = m),
              v
            );
          case fa:
            return (o = _i(o, m.mode, v)), (o.return = m), o;
          case Xa:
            var E = o._init;
            return (o = E(o._payload)), T(m, o, v);
        }
        if (Da(o) || ga(o))
          return (o = jt(o, m.mode, v, null)), (o.return = m), o;
        if (typeof o.then == "function") return T(m, hn(o), v);
        if (o.$$typeof === w) return T(m, an(m, o), v);
        vn(m, o);
      }
      return null;
    }
    function g(m, o, v, E) {
      var q = o !== null ? o.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return q !== null ? null : c(m, o, "" + v, E);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ea:
            return v.key === q ? f(m, o, v, E) : null;
          case fa:
            return v.key === q ? y(m, o, v, E) : null;
          case Xa:
            return (q = v._init), (v = q(v._payload)), g(m, o, v, E);
        }
        if (Da(v) || ga(v)) return q !== null ? null : A(m, o, v, E, null);
        if (typeof v.then == "function") return g(m, o, hn(v), E);
        if (v.$$typeof === w) return g(m, o, an(m, v), E);
        vn(m, v);
      }
      return null;
    }
    function b(m, o, v, E, q) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return (m = m.get(v) || null), c(o, m, "" + E, q);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case ea:
            return (
              (m = m.get(E.key === null ? v : E.key) || null), f(o, m, E, q)
            );
          case fa:
            return (
              (m = m.get(E.key === null ? v : E.key) || null), y(o, m, E, q)
            );
          case Xa:
            var I = E._init;
            return (E = I(E._payload)), b(m, o, v, E, q);
        }
        if (Da(E) || ga(E)) return (m = m.get(v) || null), A(o, m, E, q, null);
        if (typeof E.then == "function") return b(m, o, v, hn(E), q);
        if (E.$$typeof === w) return b(m, o, v, an(o, E), q);
        vn(o, E);
      }
      return null;
    }
    function K(m, o, v, E) {
      for (
        var q = null, I = null, G = o, L = (o = 0), La = null;
        G !== null && L < v.length;
        L++
      ) {
        G.index > L ? ((La = G), (G = null)) : (La = G.sibling);
        var ca = g(m, G, v[L], E);
        if (ca === null) {
          G === null && (G = La);
          break;
        }
        a && G && ca.alternate === null && l(m, G),
          (o = n(ca, o, L)),
          I === null ? (q = ca) : (I.sibling = ca),
          (I = ca),
          (G = La);
      }
      if (L === v.length) return t(m, G), sa && Rt(m, L), q;
      if (G === null) {
        for (; L < v.length; L++)
          (G = T(m, v[L], E)),
            G !== null &&
              ((o = n(G, o, L)),
              I === null ? (q = G) : (I.sibling = G),
              (I = G));
        return sa && Rt(m, L), q;
      }
      for (G = e(G); L < v.length; L++)
        (La = b(G, m, L, v[L], E)),
          La !== null &&
            (a &&
              La.alternate !== null &&
              G.delete(La.key === null ? L : La.key),
            (o = n(La, o, L)),
            I === null ? (q = La) : (I.sibling = La),
            (I = La));
      return (
        a &&
          G.forEach(function (Tt) {
            return l(m, Tt);
          }),
        sa && Rt(m, L),
        q
      );
    }
    function V(m, o, v, E) {
      if (v == null) throw Error(h(151));
      for (
        var q = null, I = null, G = o, L = (o = 0), La = null, ca = v.next();
        G !== null && !ca.done;
        L++, ca = v.next()
      ) {
        G.index > L ? ((La = G), (G = null)) : (La = G.sibling);
        var Tt = g(m, G, ca.value, E);
        if (Tt === null) {
          G === null && (G = La);
          break;
        }
        a && G && Tt.alternate === null && l(m, G),
          (o = n(Tt, o, L)),
          I === null ? (q = Tt) : (I.sibling = Tt),
          (I = Tt),
          (G = La);
      }
      if (ca.done) return t(m, G), sa && Rt(m, L), q;
      if (G === null) {
        for (; !ca.done; L++, ca = v.next())
          (ca = T(m, ca.value, E)),
            ca !== null &&
              ((o = n(ca, o, L)),
              I === null ? (q = ca) : (I.sibling = ca),
              (I = ca));
        return sa && Rt(m, L), q;
      }
      for (G = e(G); !ca.done; L++, ca = v.next())
        (ca = b(G, m, L, ca.value, E)),
          ca !== null &&
            (a &&
              ca.alternate !== null &&
              G.delete(ca.key === null ? L : ca.key),
            (o = n(ca, o, L)),
            I === null ? (q = ca) : (I.sibling = ca),
            (I = ca));
      return (
        a &&
          G.forEach(function (Rh) {
            return l(m, Rh);
          }),
        sa && Rt(m, L),
        q
      );
    }
    function va(m, o, v, E) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === Ma &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case ea:
            a: {
              for (var q = v.key; o !== null; ) {
                if (o.key === q) {
                  if (((q = v.type), q === Ma)) {
                    if (o.tag === 7) {
                      t(m, o.sibling),
                        (E = u(o, v.props.children)),
                        (E.return = m),
                        (m = E);
                      break a;
                    }
                  } else if (
                    o.elementType === q ||
                    (typeof q == "object" &&
                      q !== null &&
                      q.$$typeof === Xa &&
                      or(q) === o.type)
                  ) {
                    t(m, o.sibling),
                      (E = u(o, v.props)),
                      fu(E, v),
                      (E.return = m),
                      (m = E);
                    break a;
                  }
                  t(m, o);
                  break;
                } else l(m, o);
                o = o.sibling;
              }
              v.type === Ma
                ? ((E = jt(v.props.children, m.mode, E, v.key)),
                  (E.return = m),
                  (m = E))
                : ((E = ku(v.type, v.key, v.props, null, m.mode, E)),
                  fu(E, v),
                  (E.return = m),
                  (m = E));
            }
            return i(m);
          case fa:
            a: {
              for (q = v.key; o !== null; ) {
                if (o.key === q)
                  if (
                    o.tag === 4 &&
                    o.stateNode.containerInfo === v.containerInfo &&
                    o.stateNode.implementation === v.implementation
                  ) {
                    t(m, o.sibling),
                      (E = u(o, v.children || [])),
                      (E.return = m),
                      (m = E);
                    break a;
                  } else {
                    t(m, o);
                    break;
                  }
                else l(m, o);
                o = o.sibling;
              }
              (E = _i(v, m.mode, E)), (E.return = m), (m = E);
            }
            return i(m);
          case Xa:
            return (q = v._init), (v = q(v._payload)), va(m, o, v, E);
        }
        if (Da(v)) return K(m, o, v, E);
        if (ga(v)) {
          if (((q = ga(v)), typeof q != "function")) throw Error(h(150));
          return (v = q.call(v)), V(m, o, v, E);
        }
        if (typeof v.then == "function") return va(m, o, hn(v), E);
        if (v.$$typeof === w) return va(m, o, an(m, v), E);
        vn(m, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          o !== null && o.tag === 6
            ? (t(m, o.sibling), (E = u(o, v)), (E.return = m), (m = E))
            : (t(m, o), (E = Ti(v, m.mode, E)), (E.return = m), (m = E)),
          i(m))
        : t(m, o);
    }
    return function (m, o, v, E) {
      try {
        cu = 0;
        var q = va(m, o, v, E);
        return (ye = null), q;
      } catch (G) {
        if (G === Ie || G === tn) throw G;
        var I = rl(29, G, null, m.mode);
        return (I.lanes = E), (I.return = m), I;
      } finally {
      }
    };
  }
  var ge = dr(!0),
    mr = dr(!1),
    Al = _(null),
    jl = null;
  function rt(a) {
    var l = a.alternate;
    D(Ya, Ya.current & 1),
      D(Al, a),
      jl === null &&
        (l === null || de.current !== null || l.memoizedState !== null) &&
        (jl = a);
  }
  function hr(a) {
    if (a.tag === 22) {
      if ((D(Ya, Ya.current), D(Al, a), jl === null)) {
        var l = a.alternate;
        l !== null && l.memoizedState !== null && (jl = a);
      }
    } else ot();
  }
  function ot() {
    D(Ya, Ya.current), D(Al, Al.current);
  }
  function wl(a) {
    U(Al), jl === a && (jl = null), U(Ya);
  }
  var Ya = _(0);
  function yn(a) {
    for (var l = a; l !== null; ) {
      if (l.tag === 13) {
        var t = l.memoizedState;
        if (
          t !== null &&
          ((t = t.dehydrated), t === null || t.data === "$?" || $c(t))
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
  function nc(a, l, t, e) {
    (l = a.memoizedState),
      (t = t(e, l)),
      (t = t == null ? l : Y({}, l, t)),
      (a.memoizedState = t),
      a.lanes === 0 && (a.updateQueue.baseState = t);
  }
  var ic = {
    enqueueSetState: function (a, l, t) {
      a = a._reactInternals;
      var e = hl(),
        u = ct(e);
      (u.payload = l),
        t != null && (u.callback = t),
        (l = ft(a, u, e)),
        l !== null && (vl(l, a, e), au(l, a, e));
    },
    enqueueReplaceState: function (a, l, t) {
      a = a._reactInternals;
      var e = hl(),
        u = ct(e);
      (u.tag = 1),
        (u.payload = l),
        t != null && (u.callback = t),
        (l = ft(a, u, e)),
        l !== null && (vl(l, a, e), au(l, a, e));
    },
    enqueueForceUpdate: function (a, l) {
      a = a._reactInternals;
      var t = hl(),
        e = ct(t);
      (e.tag = 2),
        l != null && (e.callback = l),
        (l = ft(a, e, t)),
        l !== null && (vl(l, a, t), au(l, a, t));
    },
  };
  function vr(a, l, t, e, u, n, i) {
    return (
      (a = a.stateNode),
      typeof a.shouldComponentUpdate == "function"
        ? a.shouldComponentUpdate(e, n, i)
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
      l.state !== a && ic.enqueueReplaceState(l, l.state, null);
  }
  function Gt(a, l) {
    var t = l;
    if ("ref" in l) {
      t = {};
      for (var e in l) e !== "ref" && (t[e] = l[e]);
    }
    if ((a = a.defaultProps)) {
      t === l && (t = Y({}, t));
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
  function cc(a, l, t) {
    return (
      (t = ct(t)),
      (t.tag = 3),
      (t.payload = { element: null }),
      (t.callback = function () {
        bn(a, l);
      }),
      t
    );
  }
  function pr(a) {
    return (a = ct(a)), (a.tag = 3), a;
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
    var i = t.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (a.callback = function () {
        zr(l, t, e),
          typeof u != "function" &&
            (gt === null ? (gt = new Set([this])) : gt.add(this));
        var c = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function Rm(a, l, t, e, u) {
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
              jl === null ? jc() : t.alternate === null && Oa === 0 && (Oa = 3),
              (t.flags &= -257),
              (t.flags |= 65536),
              (t.lanes = u),
              e === qi
                ? (t.flags |= 16384)
                : ((l = t.updateQueue),
                  l === null ? (t.updateQueue = new Set([e])) : l.add(e),
                  Rc(a, e, u)),
              !1
            );
          case 22:
            return (
              (t.flags |= 65536),
              e === qi
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
                  Rc(a, e, u)),
              !1
            );
        }
        throw Error(h(435, t.tag));
      }
      return Rc(a, e, u), jc(), !1;
    }
    if (sa)
      return (
        (l = Al.current),
        l !== null
          ? ((l.flags & 65536) === 0 && (l.flags |= 256),
            (l.flags |= 65536),
            (l.lanes = u),
            e !== Di && ((a = Error(h(422), { cause: e })), $e(bl(a, t))))
          : (e !== Di && ((l = Error(h(423), { cause: e })), $e(bl(l, t))),
            (a = a.current.alternate),
            (a.flags |= 65536),
            (u &= -u),
            (a.lanes |= u),
            (e = bl(e, t)),
            (u = cc(a.stateNode, e, u)),
            Xi(a, u),
            Oa !== 4 && (Oa = 2)),
        !1
      );
    var n = Error(h(520), { cause: e });
    if (
      ((n = bl(n, t)),
      vu === null ? (vu = [n]) : vu.push(n),
      Oa !== 4 && (Oa = 2),
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
            (a = cc(t.stateNode, e, a)),
            Xi(t, a),
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
              Xi(t, u),
              !1
            );
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var Nr = Error(h(461)),
    Za = !1;
  function wa(a, l, t, e) {
    l.child = a === null ? mr(l, null, t, e) : ge(l, a.child, t, e);
  }
  function Er(a, l, t, e, u) {
    t = t.render;
    var n = l.ref;
    if ("ref" in e) {
      var i = {};
      for (var c in e) c !== "ref" && (i[c] = e[c]);
    } else i = e;
    return (
      Bt(l),
      (e = Li(a, l, t, i, n, u)),
      (c = Ki()),
      a !== null && !Za
        ? (Ji(a, l, u), $l(a, l, u))
        : (sa && c && Oi(l), (l.flags |= 1), wa(a, l, e, u), l.child)
    );
  }
  function Tr(a, l, t, e, u) {
    if (a === null) {
      var n = t.type;
      return typeof n == "function" &&
        !Ei(n) &&
        n.defaultProps === void 0 &&
        t.compare === null
        ? ((l.tag = 15), (l.type = n), _r(a, l, n, e, u))
        : ((a = ku(t.type, null, e, l, l.mode, u)),
          (a.ref = l.ref),
          (a.return = l),
          (l.child = a));
    }
    if (((n = a.child), !vc(a, u))) {
      var i = n.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : Le), t(i, e) && a.ref === l.ref)
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
        if (((Za = !1), (l.pendingProps = e = n), vc(a, u)))
          (a.flags & 131072) !== 0 && (Za = !0);
        else return (l.lanes = a.lanes), $l(a, l, u);
    }
    return fc(a, l, t, e, u);
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
          n !== null ? _s(l, n) : Qi(),
          hr(l);
      else
        return (
          (l.lanes = l.childLanes = 536870912),
          Mr(a, l, n !== null ? n.baseLanes | t : t, t)
        );
    } else
      n !== null
        ? (ln(l, n.cachePool), _s(l, n), ot(), (l.memoizedState = null))
        : (a !== null && ln(l, null), Qi(), ot());
    return wa(a, l, u, t), l.child;
  }
  function Mr(a, l, t, e) {
    var u = Ci();
    return (
      (u = u === null ? null : { parent: Ba._currentValue, pool: u }),
      (l.memoizedState = { baseLanes: t, cachePool: u }),
      a !== null && ln(l, null),
      Qi(),
      hr(l),
      a !== null && We(a, l, e, !0),
      null
    );
  }
  function Sn(a, l) {
    var t = l.ref;
    if (t === null) a !== null && a.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object") throw Error(h(284));
      (a === null || a.ref !== t) && (l.flags |= 4194816);
    }
  }
  function fc(a, l, t, e, u) {
    return (
      Bt(l),
      (t = Li(a, l, t, e, void 0, u)),
      (e = Ki()),
      a !== null && !Za
        ? (Ji(a, l, u), $l(a, l, u))
        : (sa && e && Oi(l), (l.flags |= 1), wa(a, l, t, u), l.child)
    );
  }
  function Dr(a, l, t, e, u, n) {
    return (
      Bt(l),
      (l.updateQueue = null),
      (t = Ms(l, e, t, u)),
      Os(a),
      (e = Ki()),
      a !== null && !Za
        ? (Ji(a, l, n), $l(a, l, n))
        : (sa && e && Oi(l), (l.flags |= 1), wa(a, l, t, n), l.child)
    );
  }
  function xr(a, l, t, e, u) {
    if ((Bt(l), l.stateNode === null)) {
      var n = ce,
        i = t.contextType;
      typeof i == "object" && i !== null && (n = Ia(i)),
        (n = new t(e, n)),
        (l.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = ic),
        (l.stateNode = n),
        (n._reactInternals = l),
        (n = l.stateNode),
        (n.props = e),
        (n.state = l.memoizedState),
        (n.refs = {}),
        Bi(l),
        (i = t.contextType),
        (n.context = typeof i == "object" && i !== null ? Ia(i) : ce),
        (n.state = l.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (nc(l, t, i, e), (n.state = l.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && ic.enqueueReplaceState(n, n.state, null),
          tu(l, e, n, u),
          lu(),
          (n.state = l.memoizedState)),
        typeof n.componentDidMount == "function" && (l.flags |= 4194308),
        (e = !0);
    } else if (a === null) {
      n = l.stateNode;
      var c = l.memoizedProps,
        f = Gt(t, c);
      n.props = f;
      var y = n.context,
        A = t.contextType;
      (i = ce), typeof A == "object" && A !== null && (i = Ia(A));
      var T = t.getDerivedStateFromProps;
      (A =
        typeof T == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = l.pendingProps !== c),
        A ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || y !== i) && yr(l, n, e, i)),
        (it = !1);
      var g = l.memoizedState;
      (n.state = g),
        tu(l, e, n, u),
        lu(),
        (y = l.memoizedState),
        c || g !== y || it
          ? (typeof T == "function" && (nc(l, t, T, e), (y = l.memoizedState)),
            (f = it || vr(l, t, f, e, g, y, i))
              ? (A ||
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
            (n.context = i),
            (e = f))
          : (typeof n.componentDidMount == "function" && (l.flags |= 4194308),
            (e = !1));
    } else {
      (n = l.stateNode),
        Yi(a, l),
        (i = l.memoizedProps),
        (A = Gt(t, i)),
        (n.props = A),
        (T = l.pendingProps),
        (g = n.context),
        (y = t.contextType),
        (f = ce),
        typeof y == "object" && y !== null && (f = Ia(y)),
        (c = t.getDerivedStateFromProps),
        (y =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== T || g !== f) && yr(l, n, e, f)),
        (it = !1),
        (g = l.memoizedState),
        (n.state = g),
        tu(l, e, n, u),
        lu();
      var b = l.memoizedState;
      i !== T ||
      g !== b ||
      it ||
      (a !== null && a.dependencies !== null && Pu(a.dependencies))
        ? (typeof c == "function" && (nc(l, t, c, e), (b = l.memoizedState)),
          (A =
            it ||
            vr(l, t, A, e, g, b, f) ||
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
                (i === a.memoizedProps && g === a.memoizedState) ||
                (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === a.memoizedProps && g === a.memoizedState) ||
                (l.flags |= 1024),
              (l.memoizedProps = e),
              (l.memoizedState = b)),
          (n.props = e),
          (n.state = b),
          (n.context = f),
          (e = A))
        : (typeof n.componentDidUpdate != "function" ||
            (i === a.memoizedProps && g === a.memoizedState) ||
            (l.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === a.memoizedProps && g === a.memoizedState) ||
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
            : wa(a, l, t, u),
          (l.memoizedState = n.state),
          (a = l.child))
        : (a = $l(a, l, u)),
      a
    );
  }
  function jr(a, l, t, e) {
    return we(), (l.flags |= 256), wa(a, l, t, e), l.child;
  }
  var sc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function rc(a) {
    return { baseLanes: a, cachePool: bs() };
  }
  function oc(a, l, t) {
    return (a = a !== null ? a.childLanes & ~t : 0), l && (a |= Nl), a;
  }
  function Ur(a, l, t) {
    var e = l.pendingProps,
      u = !1,
      n = (l.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          a !== null && a.memoizedState === null ? !1 : (Ya.current & 2) !== 0),
      i && ((u = !0), (l.flags &= -129)),
      (i = (l.flags & 32) !== 0),
      (l.flags &= -33),
      a === null)
    ) {
      if (sa) {
        if ((u ? rt(l) : ot(), sa)) {
          var c = _a,
            f;
          if ((f = c)) {
            a: {
              for (f = c, c = xl; f.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break a;
                }
                if (((f = Ol(f.nextSibling)), f === null)) {
                  c = null;
                  break a;
                }
              }
              c = f;
            }
            c !== null
              ? ((l.memoizedState = {
                  dehydrated: c,
                  treeContext: Ut !== null ? { id: Zl, overflow: Vl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (f = rl(18, null, null, 0)),
                (f.stateNode = c),
                (f.return = l),
                (l.child = f),
                (al = l),
                (_a = null),
                (f = !0))
              : (f = !1);
          }
          f || Ct(l);
        }
        if (
          ((c = l.memoizedState),
          c !== null && ((c = c.dehydrated), c !== null))
        )
          return $c(c) ? (l.lanes = 32) : (l.lanes = 536870912), null;
        wl(l);
      }
      return (
        (c = e.children),
        (e = e.fallback),
        u
          ? (ot(),
            (u = l.mode),
            (c = zn({ mode: "hidden", children: c }, u)),
            (e = jt(e, u, t, null)),
            (c.return = l),
            (e.return = l),
            (c.sibling = e),
            (l.child = c),
            (u = l.child),
            (u.memoizedState = rc(t)),
            (u.childLanes = oc(a, i, t)),
            (l.memoizedState = sc),
            e)
          : (rt(l), dc(l, c))
      );
    }
    if (
      ((f = a.memoizedState), f !== null && ((c = f.dehydrated), c !== null))
    ) {
      if (n)
        l.flags & 256
          ? (rt(l), (l.flags &= -257), (l = mc(a, l, t)))
          : l.memoizedState !== null
          ? (ot(), (l.child = a.child), (l.flags |= 128), (l = null))
          : (ot(),
            (u = e.fallback),
            (c = l.mode),
            (e = zn({ mode: "visible", children: e.children }, c)),
            (u = jt(u, c, t, null)),
            (u.flags |= 2),
            (e.return = l),
            (u.return = l),
            (e.sibling = u),
            (l.child = e),
            ge(l, a.child, null, t),
            (e = l.child),
            (e.memoizedState = rc(t)),
            (e.childLanes = oc(a, i, t)),
            (l.memoizedState = sc),
            (l = u));
      else if ((rt(l), $c(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var y = i.dgst;
        (i = y),
          (e = Error(h(419))),
          (e.stack = ""),
          (e.digest = i),
          $e({ value: e, source: null, stack: null }),
          (l = mc(a, l, t));
      } else if (
        (Za || We(a, l, t, !1), (i = (t & a.childLanes) !== 0), Za || i)
      ) {
        if (
          ((i = Sa),
          i !== null &&
            ((e = t & -t),
            (e = (e & 42) !== 0 ? 1 : Wn(e)),
            (e = (e & (i.suspendedLanes | t)) !== 0 ? 0 : e),
            e !== 0 && e !== f.retryLane))
        )
          throw ((f.retryLane = e), ie(a, e), vl(i, a, e), Nr);
        c.data === "$?" || jc(), (l = mc(a, l, t));
      } else
        c.data === "$?"
          ? ((l.flags |= 192), (l.child = a.child), (l = null))
          : ((a = f.treeContext),
            (_a = Ol(c.nextSibling)),
            (al = l),
            (sa = !0),
            (Ht = null),
            (xl = !1),
            a !== null &&
              ((zl[pl++] = Zl),
              (zl[pl++] = Vl),
              (zl[pl++] = Ut),
              (Zl = a.id),
              (Vl = a.overflow),
              (Ut = l)),
            (l = dc(l, e.children)),
            (l.flags |= 4096));
      return l;
    }
    return u
      ? (ot(),
        (u = e.fallback),
        (c = l.mode),
        (f = a.child),
        (y = f.sibling),
        (e = Ql(f, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = f.subtreeFlags & 65011712),
        y !== null ? (u = Ql(y, u)) : ((u = jt(u, c, t, null)), (u.flags |= 2)),
        (u.return = l),
        (e.return = l),
        (e.sibling = u),
        (l.child = e),
        (e = u),
        (u = l.child),
        (c = a.child.memoizedState),
        c === null
          ? (c = rc(t))
          : ((f = c.cachePool),
            f !== null
              ? ((y = Ba._currentValue),
                (f = f.parent !== y ? { parent: y, pool: y } : f))
              : (f = bs()),
            (c = { baseLanes: c.baseLanes | t, cachePool: f })),
        (u.memoizedState = c),
        (u.childLanes = oc(a, i, t)),
        (l.memoizedState = sc),
        e)
      : (rt(l),
        (t = a.child),
        (a = t.sibling),
        (t = Ql(t, { mode: "visible", children: e.children })),
        (t.return = l),
        (t.sibling = null),
        a !== null &&
          ((i = l.deletions),
          i === null ? ((l.deletions = [a]), (l.flags |= 16)) : i.push(a)),
        (l.child = t),
        (l.memoizedState = null),
        t);
  }
  function dc(a, l) {
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
  function mc(a, l, t) {
    return (
      ge(l, a.child, null, t),
      (a = dc(l, l.pendingProps.children)),
      (a.flags |= 2),
      (l.memoizedState = null),
      a
    );
  }
  function Rr(a, l, t) {
    a.lanes |= l;
    var e = a.alternate;
    e !== null && (e.lanes |= l), ji(a.return, l, t);
  }
  function hc(a, l, t, e, u) {
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
    if ((wa(a, l, e.children, t), (e = Ya.current), (e & 2) !== 0))
      (e = (e & 1) | 2), (l.flags |= 128);
    else {
      if (a !== null && (a.flags & 128) !== 0)
        a: for (a = l.child; a !== null; ) {
          if (a.tag === 13) a.memoizedState !== null && Rr(a, t, l);
          else if (a.tag === 19) Rr(a, t, l);
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
    switch ((D(Ya, e), u)) {
      case "forwards":
        for (t = l.child, u = null; t !== null; )
          (a = t.alternate),
            a !== null && yn(a) === null && (u = t),
            (t = t.sibling);
        (t = u),
          t === null
            ? ((u = l.child), (l.child = null))
            : ((u = t.sibling), (t.sibling = null)),
          hc(l, !1, u, t, n);
        break;
      case "backwards":
        for (t = null, u = l.child, l.child = null; u !== null; ) {
          if (((a = u.alternate), a !== null && yn(a) === null)) {
            l.child = u;
            break;
          }
          (a = u.sibling), (u.sibling = t), (t = u), (u = a);
        }
        hc(l, !0, t, null, n);
        break;
      case "together":
        hc(l, !1, null, null, void 0);
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
    if (a !== null && l.child !== a.child) throw Error(h(153));
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
  function vc(a, l) {
    return (a.lanes & l) !== 0
      ? !0
      : ((a = a.dependencies), !!(a !== null && Pu(a)));
  }
  function Hm(a, l, t) {
    switch (l.tag) {
      case 3:
        C(l, l.stateNode.containerInfo), nt(l, Ba, a.memoizedState.cache), we();
        break;
      case 27:
      case 5:
        ia(l);
        break;
      case 4:
        C(l, l.stateNode.containerInfo);
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
            ? Ur(a, l, t)
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
          D(Ya, Ya.current),
          e)
        )
          break;
        return null;
      case 22:
      case 23:
        return (l.lanes = 0), Or(a, l, t);
      case 24:
        nt(l, Ba, a.memoizedState.cache);
    }
    return $l(a, l, t);
  }
  function Cr(a, l, t) {
    if (a !== null)
      if (a.memoizedProps !== l.pendingProps) Za = !0;
      else {
        if (!vc(a, t) && (l.flags & 128) === 0) return (Za = !1), Hm(a, l, t);
        Za = (a.flags & 131072) !== 0;
      }
    else (Za = !1), sa && (l.flags & 1048576) !== 0 && os(l, Iu, l.index);
    switch (((l.lanes = 0), l.tag)) {
      case 16:
        a: {
          a = l.pendingProps;
          var e = l.elementType,
            u = e._init;
          if (((e = u(e._payload)), (l.type = e), typeof e == "function"))
            Ei(e)
              ? ((a = Gt(e, a)), (l.tag = 1), (l = xr(null, l, e, a, t)))
              : ((l.tag = 0), (l = fc(null, l, e, a, t)));
          else {
            if (e != null) {
              if (((u = e.$$typeof), u === cl)) {
                (l.tag = 11), (l = Er(null, l, e, a, t));
                break a;
              } else if (u === P) {
                (l.tag = 14), (l = Tr(null, l, e, a, t));
                break a;
              }
            }
            throw ((l = ql(e) || e), Error(h(306, l, "")));
          }
        }
        return l;
      case 0:
        return fc(a, l, l.type, l.pendingProps, t);
      case 1:
        return (e = l.type), (u = Gt(e, l.pendingProps)), xr(a, l, e, u, t);
      case 3:
        a: {
          if ((C(l, l.stateNode.containerInfo), a === null))
            throw Error(h(387));
          e = l.pendingProps;
          var n = l.memoizedState;
          (u = n.element), Yi(a, l), tu(l, e, null, t);
          var i = l.memoizedState;
          if (
            ((e = i.cache),
            nt(l, Ba, e),
            e !== n.cache && Ui(l, [Ba], t, !0),
            lu(),
            (e = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: i.cache }),
              (l.updateQueue.baseState = n),
              (l.memoizedState = n),
              l.flags & 256)
            ) {
              l = jr(a, l, e, t);
              break a;
            } else if (e !== u) {
              (u = bl(Error(h(424)), l)), $e(u), (l = jr(a, l, e, t));
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
                _a = Ol(a.firstChild),
                  al = l,
                  sa = !0,
                  Ht = null,
                  xl = !0,
                  t = mr(l, null, e, t),
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
            wa(a, l, e, t);
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
              : sa ||
                ((t = l.type),
                (a = l.pendingProps),
                (e = Hn(S.current).createElement(t)),
                (e[Fa] = l),
                (e[tl] = a),
                Wa(e, t, a),
                Qa(e),
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
          ia(l),
          a === null &&
            sa &&
            ((e = l.stateNode = Bo(l.type, l.pendingProps, S.current)),
            (al = l),
            (xl = !0),
            (u = _a),
            zt(l.type) ? ((Wc = u), (_a = Ol(e.firstChild))) : (_a = u)),
          wa(a, l, l.pendingProps.children, t),
          Sn(a, l),
          a === null && (l.flags |= 4194304),
          l.child
        );
      case 5:
        return (
          a === null &&
            sa &&
            ((u = e = _a) &&
              ((e = fh(e, l.type, l.pendingProps, xl)),
              e !== null
                ? ((l.stateNode = e),
                  (al = l),
                  (_a = Ol(e.firstChild)),
                  (xl = !1),
                  (u = !0))
                : (u = !1)),
            u || Ct(l)),
          ia(l),
          (u = l.type),
          (n = l.pendingProps),
          (i = a !== null ? a.memoizedProps : null),
          (e = n.children),
          Kc(u, n) ? (e = null) : i !== null && Kc(u, i) && (l.flags |= 32),
          l.memoizedState !== null &&
            ((u = Li(a, l, _m, null, null, t)), (Eu._currentValue = u)),
          Sn(a, l),
          wa(a, l, e, t),
          l.child
        );
      case 6:
        return (
          a === null &&
            sa &&
            ((a = t = _a) &&
              ((t = sh(t, l.pendingProps, xl)),
              t !== null
                ? ((l.stateNode = t), (al = l), (_a = null), (a = !0))
                : (a = !1)),
            a || Ct(l)),
          null
        );
      case 13:
        return Ur(a, l, t);
      case 4:
        return (
          C(l, l.stateNode.containerInfo),
          (e = l.pendingProps),
          a === null ? (l.child = ge(l, null, e, t)) : wa(a, l, e, t),
          l.child
        );
      case 11:
        return Er(a, l, l.type, l.pendingProps, t);
      case 7:
        return wa(a, l, l.pendingProps, t), l.child;
      case 8:
        return wa(a, l, l.pendingProps.children, t), l.child;
      case 12:
        return wa(a, l, l.pendingProps.children, t), l.child;
      case 10:
        return (
          (e = l.pendingProps),
          nt(l, l.type, e.value),
          wa(a, l, e.children, t),
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
          wa(a, l, e, t),
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
          (e = Ia(Ba)),
          a === null
            ? ((u = Ci()),
              u === null &&
                ((u = Sa),
                (n = Ri()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= t),
                (u = n)),
              (l.memoizedState = { parent: e, cache: u }),
              Bi(l),
              nt(l, Ba, u))
            : ((a.lanes & t) !== 0 && (Yi(a, l), tu(l, null, null, t), lu()),
              (u = a.memoizedState),
              (n = l.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (l.memoizedState = u),
                  l.lanes === 0 &&
                    (l.memoizedState = l.updateQueue.baseState = u),
                  nt(l, Ba, e))
                : ((e = n.cache),
                  nt(l, Ba, e),
                  e !== u.cache && Ui(l, [Ba], t, !0))),
          wa(a, l, l.pendingProps.children, t),
          l.child
        );
      case 29:
        throw l.pendingProps;
    }
    throw Error(h(156, l.tag));
  }
  function Wl(a) {
    a.flags |= 4;
  }
  function qr(a, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      a.flags &= -16777217;
    else if (((a.flags |= 16777216), !Ko(l))) {
      if (
        ((l = Al.current),
        l !== null &&
          ((ua & 4194048) === ua
            ? jl !== null
            : ((ua & 62914560) !== ua && (ua & 536870912) === 0) || l !== jl))
      )
        throw ((Pe = qi), Ss);
      a.flags |= 8192;
    }
  }
  function pn(a, l) {
    l !== null && (a.flags |= 4),
      a.flags & 16384 &&
        ((l = a.tag !== 22 ? hf() : 536870912), (a.lanes |= l), (pe |= l));
  }
  function su(a, l) {
    if (!sa)
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
  function Na(a) {
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
  function Cm(a, l, t) {
    var e = l.pendingProps;
    switch ((Mi(l), l.tag)) {
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
        return Na(l), null;
      case 1:
        return Na(l), null;
      case 3:
        return (
          (t = l.stateNode),
          (e = null),
          a !== null && (e = a.memoizedState.cache),
          l.memoizedState.cache !== e && (l.flags |= 2048),
          Kl(Ba),
          Ea(),
          t.pendingContext &&
            ((t.context = t.pendingContext), (t.pendingContext = null)),
          (a === null || a.child === null) &&
            (Je(l)
              ? Wl(l)
              : a === null ||
                (a.memoizedState.isDehydrated && (l.flags & 256) === 0) ||
                ((l.flags |= 1024), hs())),
          Na(l),
          null
        );
      case 26:
        return (
          (t = l.memoizedState),
          a === null
            ? (Wl(l),
              t !== null ? (Na(l), qr(l, t)) : (Na(l), (l.flags &= -16777217)))
            : t
            ? t !== a.memoizedState
              ? (Wl(l), Na(l), qr(l, t))
              : (Na(l), (l.flags &= -16777217))
            : (a.memoizedProps !== e && Wl(l), Na(l), (l.flags &= -16777217)),
          null
        );
      case 27:
        F(l), (t = S.current);
        var u = l.type;
        if (a !== null && l.stateNode != null) a.memoizedProps !== e && Wl(l);
        else {
          if (!e) {
            if (l.stateNode === null) throw Error(h(166));
            return Na(l), null;
          }
          (a = d.current),
            Je(l) ? ds(l) : ((a = Bo(u, e, t)), (l.stateNode = a), Wl(l));
        }
        return Na(l), null;
      case 5:
        if ((F(l), (t = l.type), a !== null && l.stateNode != null))
          a.memoizedProps !== e && Wl(l);
        else {
          if (!e) {
            if (l.stateNode === null) throw Error(h(166));
            return Na(l), null;
          }
          if (((a = d.current), Je(l))) ds(l);
          else {
            switch (((u = Hn(S.current)), a)) {
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
            a: switch ((Wa(a, t, e), t)) {
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
        return Na(l), (l.flags &= -16777217), null;
      case 6:
        if (a && l.stateNode != null) a.memoizedProps !== e && Wl(l);
        else {
          if (typeof e != "string" && l.stateNode === null) throw Error(h(166));
          if (((a = S.current), Je(l))) {
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
                xo(a.nodeValue, t)
              )),
              a || Ct(l);
          } else (a = Hn(a).createTextNode(e)), (a[Fa] = l), (l.stateNode = a);
        }
        return Na(l), null;
      case 13:
        if (
          ((e = l.memoizedState),
          a === null ||
            (a.memoizedState !== null && a.memoizedState.dehydrated !== null))
        ) {
          if (((u = Je(l)), e !== null && e.dehydrated !== null)) {
            if (a === null) {
              if (!u) throw Error(h(318));
              if (
                ((u = l.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(h(317));
              u[Fa] = l;
            } else
              we(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4);
            Na(l), (u = !1);
          } else
            (u = hs()),
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
          Na(l),
          null
        );
      case 4:
        return Ea(), a === null && Gc(l.stateNode.containerInfo), Na(l), null;
      case 10:
        return Kl(l.type), Na(l), null;
      case 19:
        if ((U(Ya), (u = l.memoizedState), u === null)) return Na(l), null;
        if (((e = (l.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) su(u, !1);
          else {
            if (Oa !== 0 || (a !== null && (a.flags & 128) !== 0))
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
                  return D(Ya, (Ya.current & 1) | 2), l.child;
                }
                a = a.sibling;
              }
            u.tail !== null &&
              ll() > En &&
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
                  !sa)
              )
                return Na(l), null;
            } else
              2 * ll() - u.renderingStartTime > En &&
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
            (a = Ya.current),
            D(Ya, e ? (a & 1) | 2 : a & 1),
            l)
          : (Na(l), null);
      case 22:
      case 23:
        return (
          wl(l),
          Zi(),
          (e = l.memoizedState !== null),
          a !== null
            ? (a.memoizedState !== null) !== e && (l.flags |= 8192)
            : e && (l.flags |= 8192),
          e
            ? (t & 536870912) !== 0 &&
              (l.flags & 128) === 0 &&
              (Na(l), l.subtreeFlags & 6 && (l.flags |= 8192))
            : Na(l),
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
          a !== null && U(Yt),
          null
        );
      case 24:
        return (
          (t = null),
          a !== null && (t = a.memoizedState.cache),
          l.memoizedState.cache !== t && (l.flags |= 2048),
          Kl(Ba),
          Na(l),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, l.tag));
  }
  function qm(a, l) {
    switch ((Mi(l), l.tag)) {
      case 1:
        return (
          (a = l.flags), a & 65536 ? ((l.flags = (a & -65537) | 128), l) : null
        );
      case 3:
        return (
          Kl(Ba),
          Ea(),
          (a = l.flags),
          (a & 65536) !== 0 && (a & 128) === 0
            ? ((l.flags = (a & -65537) | 128), l)
            : null
        );
      case 26:
      case 27:
      case 5:
        return F(l), null;
      case 13:
        if (
          (wl(l), (a = l.memoizedState), a !== null && a.dehydrated !== null)
        ) {
          if (l.alternate === null) throw Error(h(340));
          we();
        }
        return (
          (a = l.flags), a & 65536 ? ((l.flags = (a & -65537) | 128), l) : null
        );
      case 19:
        return U(Ya), null;
      case 4:
        return Ea(), null;
      case 10:
        return Kl(l.type), null;
      case 22:
      case 23:
        return (
          wl(l),
          Zi(),
          a !== null && U(Yt),
          (a = l.flags),
          a & 65536 ? ((l.flags = (a & -65537) | 128), l) : null
        );
      case 24:
        return Kl(Ba), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Br(a, l) {
    switch ((Mi(l), l.tag)) {
      case 3:
        Kl(Ba), Ea();
        break;
      case 26:
      case 27:
      case 5:
        F(l);
        break;
      case 4:
        Ea();
        break;
      case 13:
        wl(l);
        break;
      case 19:
        U(Ya);
        break;
      case 10:
        Kl(l.type);
        break;
      case 22:
      case 23:
        wl(l), Zi(), a !== null && U(Yt);
        break;
      case 24:
        Kl(Ba);
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
              i = t.inst;
            (e = n()), (i.destroy = e);
          }
          t = t.next;
        } while (t !== u);
      }
    } catch (c) {
      ya(l, l.return, c);
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
            var i = e.inst,
              c = i.destroy;
            if (c !== void 0) {
              (i.destroy = void 0), (u = l);
              var f = t,
                y = c;
              try {
                y();
              } catch (A) {
                ya(u, f, A);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (A) {
      ya(l, l.return, A);
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
  function yc(a, l, t) {
    try {
      var e = a.stateNode;
      eh(e, a.type, t, l), (e[tl] = l);
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
  function gc(a) {
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
  function bc(a, l, t) {
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
            t != null || l.onclick !== null || (l.onclick = Rn));
    else if (
      e !== 4 &&
      (e === 27 && zt(a.type) && ((t = a.stateNode), (l = null)),
      (a = a.child),
      a !== null)
    )
      for (bc(a, l, t), a = a.sibling; a !== null; )
        bc(a, l, t), (a = a.sibling);
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
      Wa(l, e, t), (l[Fa] = a), (l[tl] = t);
    } catch (n) {
      ya(a, a.return, n);
    }
  }
  var kl = !1,
    ja = !1,
    Sc = !1,
    Vr = typeof WeakSet == "function" ? WeakSet : Set,
    Va = null;
  function Bm(a, l) {
    if (((a = a.containerInfo), (Vc = Gn), (a = as(a)), gi(a))) {
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
            var i = 0,
              c = -1,
              f = -1,
              y = 0,
              A = 0,
              T = a,
              g = null;
            l: for (;;) {
              for (
                var b;
                T !== t || (u !== 0 && T.nodeType !== 3) || (c = i + u),
                  T !== n || (e !== 0 && T.nodeType !== 3) || (f = i + e),
                  T.nodeType === 3 && (i += T.nodeValue.length),
                  (b = T.firstChild) !== null;

              )
                (g = T), (T = b);
              for (;;) {
                if (T === a) break l;
                if (
                  (g === t && ++y === u && (c = i),
                  g === n && ++A === e && (f = i),
                  (b = T.nextSibling) !== null)
                )
                  break;
                (T = g), (g = T.parentNode);
              }
              T = b;
            }
            t = c === -1 || f === -1 ? null : { start: c, end: f };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      Lc = { focusedElem: a, selectionRange: t }, Gn = !1, Va = l;
      Va !== null;

    )
      if (
        ((l = Va), (a = l.child), (l.subtreeFlags & 1024) !== 0 && a !== null)
      )
        (a.return = l), (Va = a);
      else
        for (; Va !== null; ) {
          switch (((l = Va), (n = l.alternate), (a = l.flags), l.tag)) {
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
                  wc(a);
                else if (t === 1)
                  switch (a.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      wc(a);
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
              if ((a & 1024) !== 0) throw Error(h(163));
          }
          if (((a = l.sibling), a !== null)) {
            (a.return = l.return), (Va = a);
            break;
          }
          Va = l.return;
        }
  }
  function Lr(a, l, t) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        mt(a, t), e & 4 && ru(5, t);
        break;
      case 1:
        if ((mt(a, t), e & 4))
          if (((a = t.stateNode), l === null))
            try {
              a.componentDidMount();
            } catch (i) {
              ya(t, t.return, i);
            }
          else {
            var u = Gt(t.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              a.componentDidUpdate(u, l, a.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              ya(t, t.return, i);
            }
          }
        e & 64 && Yr(t), e & 512 && ou(t, t.return);
        break;
      case 3:
        if ((mt(a, t), e & 64 && ((a = t.updateQueue), a !== null))) {
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
          } catch (i) {
            ya(t, t.return, i);
          }
        }
        break;
      case 27:
        l === null && e & 4 && Zr(t);
      case 26:
      case 5:
        mt(a, t), l === null && e & 4 && Gr(t), e & 512 && ou(t, t.return);
        break;
      case 12:
        mt(a, t);
        break;
      case 13:
        mt(a, t),
          e & 4 && wr(a, t),
          e & 64 &&
            ((a = t.memoizedState),
            a !== null &&
              ((a = a.dehydrated),
              a !== null && ((t = Jm.bind(null, t)), rh(a, t))));
        break;
      case 22:
        if (((e = t.memoizedState !== null || kl), !e)) {
          (l = (l !== null && l.memoizedState !== null) || ja), (u = kl);
          var n = ja;
          (kl = e),
            (ja = l) && !n ? ht(a, t, (t.subtreeFlags & 8772) !== 0) : mt(a, t),
            (kl = u),
            (ja = n);
        }
        break;
      case 30:
        break;
      default:
        mt(a, t);
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
  var za = null,
    nl = !1;
  function Fl(a, l, t) {
    for (t = t.child; t !== null; ) Jr(a, l, t), (t = t.sibling);
  }
  function Jr(a, l, t) {
    if (Ja && typeof Ja.onCommitFiberUnmount == "function")
      try {
        Ja.onCommitFiberUnmount(Yl, t);
      } catch {}
    switch (t.tag) {
      case 26:
        ja || Ul(t, l),
          Fl(a, l, t),
          t.memoizedState
            ? t.memoizedState.count--
            : t.stateNode && ((t = t.stateNode), t.parentNode.removeChild(t));
        break;
      case 27:
        ja || Ul(t, l);
        var e = za,
          u = nl;
        zt(t.type) && ((za = t.stateNode), (nl = !1)),
          Fl(a, l, t),
          zu(t.stateNode),
          (za = e),
          (nl = u);
        break;
      case 5:
        ja || Ul(t, l);
      case 6:
        if (
          ((e = za),
          (u = nl),
          (za = null),
          Fl(a, l, t),
          (za = e),
          (nl = u),
          za !== null)
        )
          if (nl)
            try {
              (za.nodeType === 9
                ? za.body
                : za.nodeName === "HTML"
                ? za.ownerDocument.body
                : za
              ).removeChild(t.stateNode);
            } catch (n) {
              ya(t, l, n);
            }
          else
            try {
              za.removeChild(t.stateNode);
            } catch (n) {
              ya(t, l, n);
            }
        break;
      case 18:
        za !== null &&
          (nl
            ? ((a = za),
              Co(
                a.nodeType === 9
                  ? a.body
                  : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a,
                t.stateNode
              ),
              Mu(a))
            : Co(za, t.stateNode));
        break;
      case 4:
        (e = za),
          (u = nl),
          (za = t.stateNode.containerInfo),
          (nl = !0),
          Fl(a, l, t),
          (za = e),
          (nl = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ja || dt(2, t, l), ja || dt(4, t, l), Fl(a, l, t);
        break;
      case 1:
        ja ||
          (Ul(t, l),
          (e = t.stateNode),
          typeof e.componentWillUnmount == "function" && Xr(t, l, e)),
          Fl(a, l, t);
        break;
      case 21:
        Fl(a, l, t);
        break;
      case 22:
        (ja = (e = ja) || t.memoizedState !== null), Fl(a, l, t), (ja = e);
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
  function Ym(a) {
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
        throw Error(h(435, a.tag));
    }
  }
  function zc(a, l) {
    var t = Ym(a);
    l.forEach(function (e) {
      var u = wm.bind(null, a, e);
      t.has(e) || (t.add(e), e.then(u, u));
    });
  }
  function ol(a, l) {
    var t = l.deletions;
    if (t !== null)
      for (var e = 0; e < t.length; e++) {
        var u = t[e],
          n = a,
          i = l,
          c = i;
        a: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (zt(c.type)) {
                (za = c.stateNode), (nl = !1);
                break a;
              }
              break;
            case 5:
              (za = c.stateNode), (nl = !1);
              break a;
            case 3:
            case 4:
              (za = c.stateNode.containerInfo), (nl = !0);
              break a;
          }
          c = c.return;
        }
        if (za === null) throw Error(h(160));
        Jr(n, i, u),
          (za = null),
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
          e & 512 && (ja || t === null || Ul(t, t.return)),
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
          e & 512 && (ja || t === null || Ul(t, t.return)),
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
                          n[Ce] ||
                          n[Fa] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        Wa(n, e, t),
                        (n[Fa] = a),
                        Qa(n),
                        (e = n);
                      break a;
                    case "link":
                      var i = Vo("link", "href", u).get(e + (t.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
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
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      (n = u.createElement(e)),
                        Wa(n, e, t),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (i = Vo("meta", "content", u).get(
                          e + (t.content || "")
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
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
                            i.splice(c, 1);
                            break l;
                          }
                      }
                      (n = u.createElement(e)),
                        Wa(n, e, t),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(h(468, e));
                  }
                  (n[Fa] = a), Qa(n), (e = n);
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
                yc(a, a.memoizedProps, t.memoizedProps);
        }
        break;
      case 27:
        ol(l, a),
          dl(a),
          e & 512 && (ja || t === null || Ul(t, t.return)),
          t !== null && e & 4 && yc(a, a.memoizedProps, t.memoizedProps);
        break;
      case 5:
        if (
          (ol(l, a),
          dl(a),
          e & 512 && (ja || t === null || Ul(t, t.return)),
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
          ((u = a.memoizedProps), yc(a, u, t !== null ? t.memoizedProps : u)),
          e & 1024 && (Sc = !0);
        break;
      case 6:
        if ((ol(l, a), dl(a), e & 4)) {
          if (a.stateNode === null) throw Error(h(162));
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
          (_l = Cn(l.containerInfo)),
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
        Sc && ((Sc = !1), Wr(a));
        break;
      case 4:
        (e = _l),
          (_l = Cn(a.stateNode.containerInfo)),
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
            (_c = ll()),
          e & 4 &&
            ((e = a.updateQueue),
            e !== null && ((a.updateQueue = null), zc(a, e)));
        break;
      case 22:
        u = a.memoizedState !== null;
        var f = t !== null && t.memoizedState !== null,
          y = kl,
          A = ja;
        if (
          ((kl = y || u),
          (ja = A || f),
          ol(l, a),
          (ja = A),
          (kl = y),
          dl(a),
          e & 8192)
        )
          a: for (
            l = a.stateNode,
              l._visibility = u ? l._visibility & -2 : l._visibility | 1,
              u && (t === null || f || kl || ja || Qt(a)),
              t = null,
              l = a;
            ;

          ) {
            if (l.tag === 5 || l.tag === 26) {
              if (t === null) {
                f = t = l;
                try {
                  if (((n = f.stateNode), u))
                    (i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    c = f.stateNode;
                    var T = f.memoizedProps.style,
                      g =
                        T != null && T.hasOwnProperty("display")
                          ? T.display
                          : null;
                    c.style.display =
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
            t !== null && ((e.retryQueue = null), zc(a, t))));
        break;
      case 19:
        ol(l, a),
          dl(a),
          e & 4 &&
            ((e = a.updateQueue),
            e !== null && ((a.updateQueue = null), zc(a, e)));
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
        if (t == null) throw Error(h(160));
        switch (t.tag) {
          case 27:
            var u = t.stateNode,
              n = gc(a);
            An(a, n, u);
            break;
          case 5:
            var i = t.stateNode;
            t.flags & 32 && (Pt(i, ""), (t.flags &= -33));
            var c = gc(a);
            An(a, c, i);
            break;
          case 3:
          case 4:
            var f = t.stateNode.containerInfo,
              y = gc(a);
            bc(a, y, f);
            break;
          default:
            throw Error(h(161));
        }
      } catch (A) {
        ya(a, a.return, A);
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
  function mt(a, l) {
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
  function ht(a, l, t) {
    for (t = t && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var e = l.alternate,
        u = a,
        n = l,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ht(u, n, t), ru(4, n);
          break;
        case 1:
          if (
            (ht(u, n, t),
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
            var c = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  Es(f[u], c);
            } catch (y) {
              ya(e, e.return, y);
            }
          }
          t && i & 64 && Yr(n), ou(n, n.return);
          break;
        case 27:
          Zr(n);
        case 26:
        case 5:
          ht(u, n, t), t && e === null && i & 4 && Gr(n), ou(n, n.return);
          break;
        case 12:
          ht(u, n, t);
          break;
        case 13:
          ht(u, n, t), t && i & 4 && wr(u, n);
          break;
        case 22:
          n.memoizedState === null && ht(u, n, t), ou(n, n.return);
          break;
        case 30:
          break;
        default:
          ht(u, n, t);
      }
      l = l.sibling;
    }
  }
  function pc(a, l) {
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
  function Ac(a, l) {
    (a = null),
      l.alternate !== null && (a = l.alternate.memoizedState.cache),
      (l = l.memoizedState.cache),
      l !== a && (l.refCount++, a != null && ke(a));
  }
  function Rl(a, l, t, e) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) kr(a, l, t, e), (l = l.sibling);
  }
  function kr(a, l, t, e) {
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Rl(a, l, t, e), u & 2048 && ru(9, l);
        break;
      case 1:
        Rl(a, l, t, e);
        break;
      case 3:
        Rl(a, l, t, e),
          u & 2048 &&
            ((a = null),
            l.alternate !== null && (a = l.alternate.memoizedState.cache),
            (l = l.memoizedState.cache),
            l !== a && (l.refCount++, a != null && ke(a)));
        break;
      case 12:
        if (u & 2048) {
          Rl(a, l, t, e), (a = l.stateNode);
          try {
            var n = l.memoizedProps,
              i = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                l.alternate === null ? "mount" : "update",
                a.passiveEffectDuration,
                -0
              );
          } catch (f) {
            ya(l, l.return, f);
          }
        } else Rl(a, l, t, e);
        break;
      case 13:
        Rl(a, l, t, e);
        break;
      case 23:
        break;
      case 22:
        (n = l.stateNode),
          (i = l.alternate),
          l.memoizedState !== null
            ? n._visibility & 2
              ? Rl(a, l, t, e)
              : du(a, l)
            : n._visibility & 2
            ? Rl(a, l, t, e)
            : ((n._visibility |= 2),
              be(a, l, t, e, (l.subtreeFlags & 10256) !== 0)),
          u & 2048 && pc(i, l);
        break;
      case 24:
        Rl(a, l, t, e), u & 2048 && Ac(l.alternate, l);
        break;
      default:
        Rl(a, l, t, e);
    }
  }
  function be(a, l, t, e, u) {
    for (u = u && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = a,
        i = l,
        c = t,
        f = e,
        y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          be(n, i, c, f, u), ru(8, i);
          break;
        case 23:
          break;
        case 22:
          var A = i.stateNode;
          i.memoizedState !== null
            ? A._visibility & 2
              ? be(n, i, c, f, u)
              : du(n, i)
            : ((A._visibility |= 2), be(n, i, c, f, u)),
            u && y & 2048 && pc(i.alternate, i);
          break;
        case 24:
          be(n, i, c, f, u), u && y & 2048 && Ac(i.alternate, i);
          break;
        default:
          be(n, i, c, f, u);
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
            du(t, e), u & 2048 && pc(e.alternate, e);
            break;
          case 24:
            du(t, e), u & 2048 && Ac(e.alternate, e);
            break;
          default:
            du(t, e);
        }
        l = l.sibling;
      }
  }
  var mu = 8192;
  function Se(a) {
    if (a.subtreeFlags & mu)
      for (a = a.child; a !== null; ) Fr(a), (a = a.sibling);
  }
  function Fr(a) {
    switch (a.tag) {
      case 26:
        Se(a),
          a.flags & mu &&
            a.memoizedState !== null &&
            Nh(_l, a.memoizedState, a.memoizedProps);
        break;
      case 5:
        Se(a);
        break;
      case 3:
      case 4:
        var l = _l;
        (_l = Cn(a.stateNode.containerInfo)), Se(a), (_l = l);
        break;
      case 22:
        a.memoizedState === null &&
          ((l = a.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = mu), (mu = 16777216), Se(a), (mu = l))
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
  function hu(a) {
    var l = a.deletions;
    if ((a.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var e = l[t];
          (Va = e), ao(e, a);
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
        hu(a), a.flags & 2048 && dt(9, a, a.return);
        break;
      case 3:
        hu(a);
        break;
      case 12:
        hu(a);
        break;
      case 22:
        var l = a.stateNode;
        a.memoizedState !== null &&
        l._visibility & 2 &&
        (a.return === null || a.return.tag !== 13)
          ? ((l._visibility &= -3), Nn(a))
          : hu(a);
        break;
      default:
        hu(a);
    }
  }
  function Nn(a) {
    var l = a.deletions;
    if ((a.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var e = l[t];
          (Va = e), ao(e, a);
        }
      Ir(a);
    }
    for (a = a.child; a !== null; ) {
      switch (((l = a), l.tag)) {
        case 0:
        case 11:
        case 15:
          dt(8, l, l.return), Nn(l);
          break;
        case 22:
          (t = l.stateNode),
            t._visibility & 2 && ((t._visibility &= -3), Nn(l));
          break;
        default:
          Nn(l);
      }
      a = a.sibling;
    }
  }
  function ao(a, l) {
    for (; Va !== null; ) {
      var t = Va;
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
      if (((e = t.child), e !== null)) (e.return = t), (Va = e);
      else
        a: for (t = a; Va !== null; ) {
          e = Va;
          var u = e.sibling,
            n = e.return;
          if ((Kr(e), e === t)) {
            Va = null;
            break a;
          }
          if (u !== null) {
            (u.return = n), (Va = u);
            break a;
          }
          Va = n;
        }
    }
  }
  var Xm = {
      getCacheForType: function (a) {
        var l = Ia(Ba),
          t = l.data.get(a);
        return t === void 0 && ((t = a()), l.data.set(a, t)), t;
      },
    },
    Gm = typeof WeakMap == "function" ? WeakMap : Map,
    oa = 0,
    Sa = null,
    aa = null,
    ua = 0,
    da = 0,
    ml = null,
    vt = !1,
    ze = !1,
    Nc = !1,
    Il = 0,
    Oa = 0,
    yt = 0,
    Zt = 0,
    Ec = 0,
    Nl = 0,
    pe = 0,
    vu = null,
    il = null,
    Tc = !1,
    _c = 0,
    En = 1 / 0,
    Tn = null,
    gt = null,
    $a = 0,
    bt = null,
    Ae = null,
    Ne = 0,
    Oc = 0,
    Mc = null,
    lo = null,
    yu = 0,
    Dc = null;
  function hl() {
    if ((oa & 2) !== 0 && ua !== 0) return ua & -ua;
    if (z.T !== null) {
      var a = re;
      return a !== 0 ? a : qc();
    }
    return gf();
  }
  function to() {
    Nl === 0 && (Nl = (ua & 536870912) === 0 || sa ? mf() : 536870912);
    var a = Al.current;
    return a !== null && (a.flags |= 32), Nl;
  }
  function vl(a, l, t) {
    ((a === Sa && (da === 2 || da === 9)) || a.cancelPendingCommit !== null) &&
      (Ee(a, 0), St(a, ua, Nl, !1)),
      He(a, t),
      ((oa & 2) === 0 || a !== Sa) &&
        (a === Sa &&
          ((oa & 2) === 0 && (Zt |= t), Oa === 4 && St(a, ua, Nl, !1)),
        Hl(a));
  }
  function eo(a, l, t) {
    if ((oa & 6) !== 0) throw Error(h(327));
    var e = (!t && (l & 124) === 0 && (l & a.expiredLanes) === 0) || Re(a, l),
      u = e ? Vm(a, l) : Uc(a, l, !0),
      n = e;
    do {
      if (u === 0) {
        ze && !e && St(a, l, 0, !1);
        break;
      } else {
        if (((t = a.current.alternate), n && !Qm(t))) {
          (u = Uc(a, l, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = l), a.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            (i = a.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            l = i;
            a: {
              var c = a;
              u = vu;
              var f = c.current.memoizedState.isDehydrated;
              if ((f && (Ee(c, i).flags |= 256), (i = Uc(c, i, !1)), i !== 2)) {
                if (Nc && !f) {
                  (c.errorRecoveryDisabledLanes |= n), (Zt |= n), (u = 4);
                  break a;
                }
                (n = il),
                  (il = u),
                  n !== null && (il === null ? (il = n) : il.push.apply(il, n));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Ee(a, 0), St(a, l, 0, !0);
          break;
        }
        a: {
          switch (((e = a), (n = u), n)) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              St(e, l, Nl, !vt);
              break a;
            case 2:
              il = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((l & 62914560) === l && ((u = _c + 300 - ll()), 10 < u)) {
            if ((St(e, l, Nl, !vt), Cu(e, 0, !0) !== 0)) break a;
            e.timeoutHandle = Ro(
              uo.bind(null, e, t, il, Tn, Tc, l, Nl, Zt, pe, vt, n, 2, -0, 0),
              u
            );
            break a;
          }
          uo(e, t, il, Tn, Tc, l, Nl, Zt, pe, vt, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Hl(a);
  }
  function uo(a, l, t, e, u, n, i, c, f, y, A, T, g, b) {
    if (
      ((a.timeoutHandle = -1),
      (T = l.subtreeFlags),
      (T & 8192 || (T & 16785408) === 16785408) &&
        ((Nu = { stylesheets: null, count: 0, unsuspend: Ah }),
        Fr(l),
        (T = Eh()),
        T !== null))
    ) {
      (a.cancelPendingCommit = T(
        oo.bind(null, a, l, n, t, e, u, i, c, f, A, 1, g, b)
      )),
        St(a, n, i, !y);
      return;
    }
    oo(a, l, n, t, e, u, i, c, f);
  }
  function Qm(a) {
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
    (l &= ~Ec),
      (l &= ~Zt),
      (a.suspendedLanes |= l),
      (a.pingedLanes &= ~l),
      e && (a.warmLanes |= l),
      (e = a.expirationTimes);
    for (var u = l; 0 < u; ) {
      var n = 31 - fl(u),
        i = 1 << n;
      (e[n] = -1), (u &= ~i);
    }
    t !== 0 && vf(a, t, l);
  }
  function _n() {
    return (oa & 6) === 0 ? (gu(0), !1) : !0;
  }
  function xc() {
    if (aa !== null) {
      if (da === 0) var a = aa.return;
      else (a = aa), (Ll = qt = null), wi(a), (ye = null), (cu = 0), (a = aa);
      for (; a !== null; ) Br(a.alternate, a), (a = a.return);
      aa = null;
    }
  }
  function Ee(a, l) {
    var t = a.timeoutHandle;
    t !== -1 && ((a.timeoutHandle = -1), nh(t)),
      (t = a.cancelPendingCommit),
      t !== null && ((a.cancelPendingCommit = null), t()),
      xc(),
      (Sa = a),
      (aa = t = Ql(a.current, null)),
      (ua = l),
      (da = 0),
      (ml = null),
      (vt = !1),
      (ze = Re(a, l)),
      (Nc = !1),
      (pe = Nl = Ec = Zt = yt = Oa = 0),
      (il = vu = null),
      (Tc = !1),
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
    (k = null),
      (z.H = mn),
      l === Ie || l === tn
        ? ((l = As()), (da = 3))
        : l === Ss
        ? ((l = As()), (da = 4))
        : (da =
            l === Nr
              ? 8
              : l !== null &&
                typeof l == "object" &&
                typeof l.then == "function"
              ? 6
              : 1),
      (ml = l),
      aa === null && ((Oa = 1), bn(a, bl(l, a.current)));
  }
  function io() {
    var a = z.H;
    return (z.H = mn), a === null ? mn : a;
  }
  function co() {
    var a = z.A;
    return (z.A = Xm), a;
  }
  function jc() {
    (Oa = 4),
      vt || ((ua & 4194048) !== ua && Al.current !== null) || (ze = !0),
      ((yt & 134217727) === 0 && (Zt & 134217727) === 0) ||
        Sa === null ||
        St(Sa, ua, Nl, !1);
  }
  function Uc(a, l, t) {
    var e = oa;
    oa |= 2;
    var u = io(),
      n = co();
    (Sa !== a || ua !== l) && ((Tn = null), Ee(a, l)), (l = !1);
    var i = Oa;
    a: do
      try {
        if (da !== 0 && aa !== null) {
          var c = aa,
            f = ml;
          switch (da) {
            case 8:
              xc(), (i = 6);
              break a;
            case 3:
            case 2:
            case 9:
            case 6:
              Al.current === null && (l = !0);
              var y = da;
              if (((da = 0), (ml = null), Te(a, c, f, y), t && ze)) {
                i = 0;
                break a;
              }
              break;
            default:
              (y = da), (da = 0), (ml = null), Te(a, c, f, y);
          }
        }
        Zm(), (i = Oa);
        break;
      } catch (A) {
        no(a, A);
      }
    while (!0);
    return (
      l && a.shellSuspendCounter++,
      (Ll = qt = null),
      (oa = e),
      (z.H = u),
      (z.A = n),
      aa === null && ((Sa = null), (ua = 0), wu()),
      i
    );
  }
  function Zm() {
    for (; aa !== null; ) fo(aa);
  }
  function Vm(a, l) {
    var t = oa;
    oa |= 2;
    var e = io(),
      u = co();
    Sa !== a || ua !== l
      ? ((Tn = null), (En = ll() + 500), Ee(a, l))
      : (ze = Re(a, l));
    a: do
      try {
        if (da !== 0 && aa !== null) {
          l = aa;
          var n = ml;
          l: switch (da) {
            case 1:
              (da = 0), (ml = null), Te(a, l, n, 1);
              break;
            case 2:
            case 9:
              if (zs(n)) {
                (da = 0), (ml = null), so(l);
                break;
              }
              (l = function () {
                (da !== 2 && da !== 9) || Sa !== a || (da = 7), Hl(a);
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
                ? ((da = 0), (ml = null), so(l))
                : ((da = 0), (ml = null), Te(a, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (aa.tag) {
                case 26:
                  i = aa.memoizedState;
                case 5:
                case 27:
                  var c = aa;
                  if (!i || Ko(i)) {
                    (da = 0), (ml = null);
                    var f = c.sibling;
                    if (f !== null) aa = f;
                    else {
                      var y = c.return;
                      y !== null ? ((aa = y), On(y)) : (aa = null);
                    }
                    break l;
                  }
              }
              (da = 0), (ml = null), Te(a, l, n, 5);
              break;
            case 6:
              (da = 0), (ml = null), Te(a, l, n, 6);
              break;
            case 8:
              xc(), (Oa = 6);
              break a;
            default:
              throw Error(h(462));
          }
        }
        Lm();
        break;
      } catch (A) {
        no(a, A);
      }
    while (!0);
    return (
      (Ll = qt = null),
      (z.H = e),
      (z.A = u),
      (oa = t),
      aa !== null ? 0 : ((Sa = null), (ua = 0), wu(), Oa)
    );
  }
  function Lm() {
    for (; aa !== null && !Dl(); ) fo(aa);
  }
  function fo(a) {
    var l = Cr(a.alternate, a, Il);
    (a.memoizedProps = a.pendingProps), l === null ? On(a) : (aa = l);
  }
  function so(a) {
    var l = a,
      t = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Dr(t, l, l.pendingProps, l.type, void 0, ua);
        break;
      case 11:
        l = Dr(t, l, l.pendingProps, l.type.render, l.ref, ua);
        break;
      case 5:
        wi(l);
      default:
        Br(t, l), (l = aa = rs(l, Il)), (l = Cr(t, l, Il));
    }
    (a.memoizedProps = a.pendingProps), l === null ? On(a) : (aa = l);
  }
  function Te(a, l, t, e) {
    (Ll = qt = null), wi(l), (ye = null), (cu = 0);
    var u = l.return;
    try {
      if (Rm(a, u, l, t, ua)) {
        (Oa = 1), bn(a, bl(t, a.current)), (aa = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((aa = u), n);
      (Oa = 1), bn(a, bl(t, a.current)), (aa = null);
      return;
    }
    l.flags & 32768
      ? (sa || e === 1
          ? (a = !0)
          : ze || (ua & 536870912) !== 0
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
      var t = Cm(l.alternate, l, Il);
      if (t !== null) {
        aa = t;
        return;
      }
      if (((l = l.sibling), l !== null)) {
        aa = l;
        return;
      }
      aa = l = a;
    } while (l !== null);
    Oa === 0 && (Oa = 5);
  }
  function ro(a, l) {
    do {
      var t = qm(a.alternate, a);
      if (t !== null) {
        (t.flags &= 32767), (aa = t);
        return;
      }
      if (
        ((t = a.return),
        t !== null &&
          ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)),
        !l && ((a = a.sibling), a !== null))
      ) {
        aa = a;
        return;
      }
      aa = a = t;
    } while (a !== null);
    (Oa = 6), (aa = null);
  }
  function oo(a, l, t, e, u, n, i, c, f) {
    a.cancelPendingCommit = null;
    do Mn();
    while ($a !== 0);
    if ((oa & 6) !== 0) throw Error(h(327));
    if (l !== null) {
      if (l === a.current) throw Error(h(177));
      if (
        ((n = l.lanes | l.childLanes),
        (n |= Ai),
        Ad(a, t, n, i, c, f),
        a === Sa && ((aa = Sa = null), (ua = 0)),
        (Ae = l),
        (bt = a),
        (Ne = t),
        (Oc = n),
        (Mc = u),
        (lo = e),
        (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
          ? ((a.callbackNode = null),
            (a.callbackPriority = 0),
            $m(lt, function () {
              return go(), null;
            }))
          : ((a.callbackNode = null), (a.callbackPriority = 0)),
        (e = (l.flags & 13878) !== 0),
        (l.subtreeFlags & 13878) !== 0 || e)
      ) {
        (e = z.T), (z.T = null), (u = x.p), (x.p = 2), (i = oa), (oa |= 4);
        try {
          Bm(a, l, t);
        } finally {
          (oa = i), (x.p = u), (z.T = e);
        }
      }
      ($a = 1), mo(), ho(), vo();
    }
  }
  function mo() {
    if ($a === 1) {
      $a = 0;
      var a = bt,
        l = Ae,
        t = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || t) {
        (t = z.T), (z.T = null);
        var e = x.p;
        x.p = 2;
        var u = oa;
        oa |= 4;
        try {
          $r(l, a);
          var n = Lc,
            i = as(a.containerInfo),
            c = n.focusedElem,
            f = n.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            Pf(c.ownerDocument.documentElement, c)
          ) {
            if (f !== null && gi(c)) {
              var y = f.start,
                A = f.end;
              if ((A === void 0 && (A = y), "selectionStart" in c))
                (c.selectionStart = y),
                  (c.selectionEnd = Math.min(A, c.value.length));
              else {
                var T = c.ownerDocument || document,
                  g = (T && T.defaultView) || window;
                if (g.getSelection) {
                  var b = g.getSelection(),
                    K = c.textContent.length,
                    V = Math.min(f.start, K),
                    va = f.end === void 0 ? V : Math.min(f.end, K);
                  !b.extend && V > va && ((i = va), (va = V), (V = i));
                  var m = If(c, V),
                    o = If(c, va);
                  if (
                    m &&
                    o &&
                    (b.rangeCount !== 1 ||
                      b.anchorNode !== m.node ||
                      b.anchorOffset !== m.offset ||
                      b.focusNode !== o.node ||
                      b.focusOffset !== o.offset)
                  ) {
                    var v = T.createRange();
                    v.setStart(m.node, m.offset),
                      b.removeAllRanges(),
                      V > va
                        ? (b.addRange(v), b.extend(o.node, o.offset))
                        : (v.setEnd(o.node, o.offset), b.addRange(v));
                  }
                }
              }
            }
            for (T = [], b = c; (b = b.parentNode); )
              b.nodeType === 1 &&
                T.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < T.length;
              c++
            ) {
              var E = T[c];
              (E.element.scrollLeft = E.left), (E.element.scrollTop = E.top);
            }
          }
          (Gn = !!Vc), (Lc = Vc = null);
        } finally {
          (oa = u), (x.p = e), (z.T = t);
        }
      }
      (a.current = l), ($a = 2);
    }
  }
  function ho() {
    if ($a === 2) {
      $a = 0;
      var a = bt,
        l = Ae,
        t = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || t) {
        (t = z.T), (z.T = null);
        var e = x.p;
        x.p = 2;
        var u = oa;
        oa |= 4;
        try {
          Lr(a, l.alternate, l);
        } finally {
          (oa = u), (x.p = e), (z.T = t);
        }
      }
      $a = 3;
    }
  }
  function vo() {
    if ($a === 4 || $a === 3) {
      ($a = 0), at();
      var a = bt,
        l = Ae,
        t = Ne,
        e = lo;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
        ? ($a = 5)
        : (($a = 0), (Ae = bt = null), yo(a, a.pendingLanes));
      var u = a.pendingLanes;
      if (
        (u === 0 && (gt = null),
        kn(t),
        (l = l.stateNode),
        Ja && typeof Ja.onCommitFiberRoot == "function")
      )
        try {
          Ja.onCommitFiberRoot(Yl, l, void 0, (l.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        (l = z.T), (u = x.p), (x.p = 2), (z.T = null);
        try {
          for (var n = a.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          (z.T = l), (x.p = u);
        }
      }
      (Ne & 3) !== 0 && Mn(),
        Hl(a),
        (u = a.pendingLanes),
        (t & 4194090) !== 0 && (u & 42) !== 0
          ? a === Dc
            ? yu++
            : ((yu = 0), (Dc = a))
          : (yu = 0),
        gu(0);
    }
  }
  function yo(a, l) {
    (a.pooledCacheLanes &= l) === 0 &&
      ((l = a.pooledCache), l != null && ((a.pooledCache = null), ke(l)));
  }
  function Mn(a) {
    return mo(), ho(), vo(), go();
  }
  function go() {
    if ($a !== 5) return !1;
    var a = bt,
      l = Oc;
    Oc = 0;
    var t = kn(Ne),
      e = z.T,
      u = x.p;
    try {
      (x.p = 32 > t ? 32 : t), (z.T = null), (t = Mc), (Mc = null);
      var n = bt,
        i = Ne;
      if ((($a = 0), (Ae = bt = null), (Ne = 0), (oa & 6) !== 0))
        throw Error(h(331));
      var c = oa;
      if (
        ((oa |= 4),
        Pr(n.current),
        kr(n, n.current, i, t),
        (oa = c),
        gu(0, !1),
        Ja && typeof Ja.onPostCommitFiberRoot == "function")
      )
        try {
          Ja.onPostCommitFiberRoot(Yl, n);
        } catch {}
      return !0;
    } finally {
      (x.p = u), (z.T = e), yo(a, l);
    }
  }
  function bo(a, l, t) {
    (l = bl(t, l)),
      (l = cc(a.stateNode, l, 2)),
      (a = ft(a, l, 2)),
      a !== null && (He(a, 2), Hl(a));
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
              e !== null && (Ar(t, e, l, a), He(e, 2), Hl(e));
            break;
          }
        }
        l = l.return;
      }
  }
  function Rc(a, l, t) {
    var e = a.pingCache;
    if (e === null) {
      e = a.pingCache = new Gm();
      var u = new Set();
      e.set(l, u);
    } else (u = e.get(l)), u === void 0 && ((u = new Set()), e.set(l, u));
    u.has(t) ||
      ((Nc = !0), u.add(t), (a = Km.bind(null, a, l, t)), l.then(a, a));
  }
  function Km(a, l, t) {
    var e = a.pingCache;
    e !== null && e.delete(l),
      (a.pingedLanes |= a.suspendedLanes & t),
      (a.warmLanes &= ~t),
      Sa === a &&
        (ua & t) === t &&
        (Oa === 4 || (Oa === 3 && (ua & 62914560) === ua && 300 > ll() - _c)
          ? (oa & 2) === 0 && Ee(a, 0)
          : (Ec |= t),
        pe === ua && (pe = 0)),
      Hl(a);
  }
  function So(a, l) {
    l === 0 && (l = hf()), (a = ie(a, l)), a !== null && (He(a, l), Hl(a));
  }
  function Jm(a) {
    var l = a.memoizedState,
      t = 0;
    l !== null && (t = l.retryLane), So(a, t);
  }
  function wm(a, l) {
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
        throw Error(h(314));
    }
    e !== null && e.delete(l), So(a, t);
  }
  function $m(a, l) {
    return Aa(a, l);
  }
  var Dn = null,
    _e = null,
    Hc = !1,
    xn = !1,
    Cc = !1,
    Vt = 0;
  function Hl(a) {
    a !== _e &&
      a.next === null &&
      (_e === null ? (Dn = _e = a) : (_e = _e.next = a)),
      (xn = !0),
      Hc || ((Hc = !0), km());
  }
  function gu(a, l) {
    if (!Cc && xn) {
      Cc = !0;
      do
        for (var t = !1, e = Dn; e !== null; ) {
          if (a !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = e.suspendedLanes,
                c = e.pingedLanes;
              (n = (1 << (31 - fl(42 | a) + 1)) - 1),
                (n &= u & ~(i & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((t = !0), No(e, n));
          } else
            (n = ua),
              (n = Cu(
                e,
                e === Sa ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Re(e, n) || ((t = !0), No(e, n));
          e = e.next;
        }
      while (t);
      Cc = !1;
    }
  }
  function Wm() {
    zo();
  }
  function zo() {
    xn = Hc = !1;
    var a = 0;
    Vt !== 0 && (uh() && (a = Vt), (Vt = 0));
    for (var l = ll(), t = null, e = Dn; e !== null; ) {
      var u = e.next,
        n = po(e, l);
      n === 0
        ? ((e.next = null),
          t === null ? (Dn = u) : (t.next = u),
          u === null && (_e = t))
        : ((t = e), (a !== 0 || (n & 3) !== 0) && (xn = !0)),
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
      var i = 31 - fl(n),
        c = 1 << i,
        f = u[i];
      f === -1
        ? ((c & t) === 0 || (c & e) !== 0) && (u[i] = pd(c, l))
        : f <= l && (a.expiredLanes |= c),
        (n &= ~c);
    }
    if (
      ((l = Sa),
      (t = ua),
      (t = Cu(
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
        e !== null && e !== null && ba(e),
        (a.callbackNode = null),
        (a.callbackPriority = 0)
      );
    if ((t & 3) === 0 || Re(a, t)) {
      if (((l = t & -t), l === a.callbackPriority)) return l;
      switch ((e !== null && ba(e), kn(t))) {
        case 2:
        case 8:
          t = Kt;
          break;
        case 32:
          t = lt;
          break;
        case 268435456:
          t = ju;
          break;
        default:
          t = lt;
      }
      return (
        (e = Ao.bind(null, a)),
        (t = Aa(t, e)),
        (a.callbackPriority = l),
        (a.callbackNode = t),
        l
      );
    }
    return (
      e !== null && e !== null && ba(e),
      (a.callbackPriority = 2),
      (a.callbackNode = null),
      2
    );
  }
  function Ao(a, l) {
    if ($a !== 0 && $a !== 5)
      return (a.callbackNode = null), (a.callbackPriority = 0), null;
    var t = a.callbackNode;
    if (Mn() && a.callbackNode !== t) return null;
    var e = ua;
    return (
      (e = Cu(
        a,
        a === Sa ? e : 0,
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
  function No(a, l) {
    if (Mn()) return null;
    eo(a, l, !0);
  }
  function km() {
    ih(function () {
      (oa & 6) !== 0 ? Aa(Lt, Wm) : zo();
    });
  }
  function qc() {
    return Vt === 0 && (Vt = mf()), Vt;
  }
  function Eo(a) {
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
  function Fm(a, l, t, e, u) {
    if (l === "submit" && t && t.stateNode === u) {
      var n = Eo((u[tl] || null).action),
        i = e.submitter;
      i &&
        ((l = (l = i[tl] || null)
          ? Eo(l.formAction)
          : i.getAttribute("formAction")),
        l !== null && ((n = l), (i = null)));
      var c = new Lu("action", "action", null, e, u);
      a.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (Vt !== 0) {
                  var f = i ? To(u, i) : new FormData(u);
                  tc(
                    t,
                    { pending: !0, data: f, method: u.method, action: n },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (f = i ? To(u, i) : new FormData(u)),
                  tc(
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
  for (var Bc = 0; Bc < pi.length; Bc++) {
    var Yc = pi[Bc],
      Im = Yc.toLowerCase(),
      Pm = Yc[0].toUpperCase() + Yc.slice(1);
    Tl(Im, "on" + Pm);
  }
  Tl(es, "onAnimationEnd"),
    Tl(us, "onAnimationIteration"),
    Tl(ns, "onAnimationStart"),
    Tl("dblclick", "onDoubleClick"),
    Tl("focusin", "onFocus"),
    Tl("focusout", "onBlur"),
    Tl(ym, "onTransitionRun"),
    Tl(gm, "onTransitionStart"),
    Tl(bm, "onTransitionCancel"),
    Tl(is, "onTransitionEnd"),
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
    ah = new Set(
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
          for (var i = e.length - 1; 0 <= i; i--) {
            var c = e[i],
              f = c.instance,
              y = c.currentTarget;
            if (((c = c.listener), f !== n && u.isPropagationStopped()))
              break a;
            (n = c), (u.currentTarget = y);
            try {
              n(u);
            } catch (A) {
              gn(A);
            }
            (u.currentTarget = null), (n = f);
          }
        else
          for (i = 0; i < e.length; i++) {
            if (
              ((c = e[i]),
              (f = c.instance),
              (y = c.currentTarget),
              (c = c.listener),
              f !== n && u.isPropagationStopped())
            )
              break a;
            (n = c), (u.currentTarget = y);
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
  function la(a, l) {
    var t = l[Fn];
    t === void 0 && (t = l[Fn] = new Set());
    var e = a + "__bubble";
    t.has(e) || (Oo(l, a, 2, !1), t.add(e));
  }
  function Xc(a, l, t) {
    var e = 0;
    l && (e |= 4), Oo(t, a, e, l);
  }
  var jn = "_reactListening" + Math.random().toString(36).slice(2);
  function Gc(a) {
    if (!a[jn]) {
      (a[jn] = !0),
        Sf.forEach(function (t) {
          t !== "selectionchange" && (ah.has(t) || Xc(t, !1, a), Xc(t, !0, a));
        });
      var l = a.nodeType === 9 ? a : a.ownerDocument;
      l === null || l[jn] || ((l[jn] = !0), Xc("selectionchange", !1, l));
    }
  }
  function Oo(a, l, t, e) {
    switch (Fo(l)) {
      case 2:
        var u = Oh;
        break;
      case 8:
        u = Mh;
        break;
      default:
        u = af;
    }
    (t = u.bind(null, l, t, a)),
      (u = void 0),
      !fi ||
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
  function Qc(a, l, t, e, u) {
    var n = e;
    if ((l & 1) === 0 && (l & 2) === 0 && e !== null)
      a: for (;;) {
        if (e === null) return;
        var i = e.tag;
        if (i === 3 || i === 4) {
          var c = e.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = e.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = wt(c)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              e = n = i;
              continue a;
            }
            c = c.parentNode;
          }
        }
        e = e.return;
      }
    Rf(function () {
      var y = n,
        A = ii(t),
        T = [];
      a: {
        var g = cs.get(a);
        if (g !== void 0) {
          var b = Lu,
            K = a;
          switch (a) {
            case "keypress":
              if (Zu(t) === 0) break a;
            case "keydown":
            case "keyup":
              b = $d;
              break;
            case "focusin":
              (K = "focus"), (b = di);
              break;
            case "focusout":
              (K = "blur"), (b = di);
              break;
            case "beforeblur":
            case "afterblur":
              b = di;
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
              b = qd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = Fd;
              break;
            case es:
            case us:
            case ns:
              b = Xd;
              break;
            case is:
              b = Pd;
              break;
            case "scroll":
            case "scrollend":
              b = Hd;
              break;
            case "wheel":
              b = lm;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = Qd;
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
              b = em;
          }
          var V = (l & 4) !== 0,
            va = !V && (a === "scroll" || a === "scrollend"),
            m = V ? (g !== null ? g + "Capture" : null) : g;
          V = [];
          for (var o = y, v; o !== null; ) {
            var E = o;
            if (
              ((v = E.stateNode),
              (E = E.tag),
              (E !== 5 && E !== 26 && E !== 27) ||
                v === null ||
                m === null ||
                ((E = Be(o, m)), E != null && V.push(Su(o, E, v))),
              va)
            )
              break;
            o = o.return;
          }
          0 < V.length &&
            ((g = new b(g, K, null, t, A)), T.push({ event: g, listeners: V }));
        }
      }
      if ((l & 7) === 0) {
        a: {
          if (
            ((g = a === "mouseover" || a === "pointerover"),
            (b = a === "mouseout" || a === "pointerout"),
            g &&
              t !== ni &&
              (K = t.relatedTarget || t.fromElement) &&
              (wt(K) || K[Jt]))
          )
            break a;
          if (
            (b || g) &&
            ((g =
              A.window === A
                ? A
                : (g = A.ownerDocument)
                ? g.defaultView || g.parentWindow
                : window),
            b
              ? ((K = t.relatedTarget || t.toElement),
                (b = y),
                (K = K ? wt(K) : null),
                K !== null &&
                  ((va = R(K)),
                  (V = K.tag),
                  K !== va || (V !== 5 && V !== 27 && V !== 6)) &&
                  (K = null))
              : ((b = null), (K = y)),
            b !== K)
          ) {
            if (
              ((V = qf),
              (E = "onMouseLeave"),
              (m = "onMouseEnter"),
              (o = "mouse"),
              (a === "pointerout" || a === "pointerover") &&
                ((V = Yf),
                (E = "onPointerLeave"),
                (m = "onPointerEnter"),
                (o = "pointer")),
              (va = b == null ? g : qe(b)),
              (v = K == null ? g : qe(K)),
              (g = new V(E, o + "leave", b, t, A)),
              (g.target = va),
              (g.relatedTarget = v),
              (E = null),
              wt(A) === y &&
                ((V = new V(m, o + "enter", K, t, A)),
                (V.target = v),
                (V.relatedTarget = va),
                (E = V)),
              (va = E),
              b && K)
            )
              l: {
                for (V = b, m = K, o = 0, v = V; v; v = Oe(v)) o++;
                for (v = 0, E = m; E; E = Oe(E)) v++;
                for (; 0 < o - v; ) (V = Oe(V)), o--;
                for (; 0 < v - o; ) (m = Oe(m)), v--;
                for (; o--; ) {
                  if (V === m || (m !== null && V === m.alternate)) break l;
                  (V = Oe(V)), (m = Oe(m));
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
            ((g = y ? qe(y) : window),
            (b = g.nodeName && g.nodeName.toLowerCase()),
            b === "select" || (b === "input" && g.type === "file"))
          )
            var q = Jf;
          else if (Lf(g))
            if (wf) q = mm;
            else {
              q = om;
              var I = rm;
            }
          else
            (b = g.nodeName),
              !b ||
              b.toLowerCase() !== "input" ||
              (g.type !== "checkbox" && g.type !== "radio")
                ? y && ui(y.elementType) && (q = Jf)
                : (q = dm);
          if (q && (q = q(a, y))) {
            Kf(T, q, t, A);
            break a;
          }
          I && I(a, g, y),
            a === "focusout" &&
              y &&
              g.type === "number" &&
              y.memoizedProps.value != null &&
              ei(g, "number", g.value);
        }
        switch (((I = y ? qe(y) : window), a)) {
          case "focusin":
            (Lf(I) || I.contentEditable === "true") &&
              ((ee = I), (bi = y), (Ke = null));
            break;
          case "focusout":
            Ke = bi = ee = null;
            break;
          case "mousedown":
            Si = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Si = !1), ls(T, t, A);
            break;
          case "selectionchange":
            if (vm) break;
          case "keydown":
          case "keyup":
            ls(T, t, A);
        }
        var G;
        if (hi)
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
              ? L === "onCompositionEnd" && te && (G = Hf())
              : ((ut = A),
                (si = "value" in ut ? ut.value : ut.textContent),
                (te = !0))),
          (I = Un(y, L)),
          0 < I.length &&
            ((L = new Bf(L, a, null, t, A)),
            T.push({ event: L, listeners: I }),
            G ? (L.data = G) : ((G = Vf(t)), G !== null && (L.data = G)))),
          (G = nm ? im(a, t) : cm(a, t)) &&
            ((L = Un(y, "onBeforeInput")),
            0 < L.length &&
              ((I = new Bf("onBeforeInput", "beforeinput", null, t, A)),
              T.push({ event: I, listeners: L }),
              (I.data = G))),
          Fm(T, a, y, t, A);
      }
      _o(T, l);
    });
  }
  function Su(a, l, t) {
    return { instance: a, listener: l, currentTarget: t };
  }
  function Un(a, l) {
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
    for (var n = l._reactName, i = []; t !== null && t !== e; ) {
      var c = t,
        f = c.alternate,
        y = c.stateNode;
      if (((c = c.tag), f !== null && f === e)) break;
      (c !== 5 && c !== 26 && c !== 27) ||
        y === null ||
        ((f = y),
        u
          ? ((y = Be(t, n)), y != null && i.unshift(Su(t, y, f)))
          : u || ((y = Be(t, n)), y != null && i.push(Su(t, y, f)))),
        (t = t.return);
    }
    i.length !== 0 && a.push({ event: l, listeners: i });
  }
  var lh = /\r\n?/g,
    th = /\u0000|\uFFFD/g;
  function Do(a) {
    return (typeof a == "string" ? a : "" + a)
      .replace(
        lh,
        `
`
      )
      .replace(th, "");
  }
  function xo(a, l) {
    return (l = Do(l)), Do(a) === l;
  }
  function Rn() {}
  function ha(a, l, t, e, u, n) {
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
        jf(a, e, n);
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
              ? (l !== "input" && ha(a, l, "name", u.name, u, null),
                ha(a, l, "formEncType", u.formEncType, u, null),
                ha(a, l, "formMethod", u.formMethod, u, null),
                ha(a, l, "formTarget", u.formTarget, u, null))
              : (ha(a, l, "encType", u.encType, u, null),
                ha(a, l, "method", u.method, u, null),
                ha(a, l, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          a.removeAttribute(t);
          break;
        }
        (e = Gu("" + e)), a.setAttribute(t, e);
        break;
      case "onClick":
        e != null && (a.onclick = Rn);
        break;
      case "onScroll":
        e != null && la("scroll", a);
        break;
      case "onScrollEnd":
        e != null && la("scrollend", a);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(h(61));
          if (((t = e.__html), t != null)) {
            if (u.children != null) throw Error(h(60));
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
        la("beforetoggle", a), la("toggle", a), qu(a, "popover", e);
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
        qu(a, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
          ((t = Ud.get(t) || t), qu(a, t, e));
    }
  }
  function Zc(a, l, t, e, u, n) {
    switch (t) {
      case "style":
        jf(a, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(h(61));
          if (((t = e.__html), t != null)) {
            if (u.children != null) throw Error(h(60));
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
        e != null && la("scroll", a);
        break;
      case "onScrollEnd":
        e != null && la("scrollend", a);
        break;
      case "onClick":
        e != null && (a.onclick = Rn);
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
              : qu(a, t, e);
          }
    }
  }
  function Wa(a, l, t) {
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
        la("error", a), la("load", a);
        var e = !1,
          u = !1,
          n;
        for (n in t)
          if (t.hasOwnProperty(n)) {
            var i = t[n];
            if (i != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, l));
                default:
                  ha(a, l, n, i, t, null);
              }
          }
        u && ha(a, l, "srcSet", t.srcSet, t, null),
          e && ha(a, l, "src", t.src, t, null);
        return;
      case "input":
        la("invalid", a);
        var c = (n = i = u = null),
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
                  i = A;
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
                  c = A;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (A != null) throw Error(h(137, l));
                  break;
                default:
                  ha(a, l, e, A, t, null);
              }
          }
        Of(a, n, c, f, y, i, u, !1), Yu(a);
        return;
      case "select":
        la("invalid", a), (e = i = n = null);
        for (u in t)
          if (t.hasOwnProperty(u) && ((c = t[u]), c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                e = c;
              default:
                ha(a, l, u, c, t, null);
            }
        (l = n),
          (t = i),
          (a.multiple = !!e),
          l != null ? It(a, !!e, l, !1) : t != null && It(a, !!e, t, !0);
        return;
      case "textarea":
        la("invalid", a), (n = u = e = null);
        for (i in t)
          if (t.hasOwnProperty(i) && ((c = t[i]), c != null))
            switch (i) {
              case "value":
                e = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(h(91));
                break;
              default:
                ha(a, l, i, c, t, null);
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
                ha(a, l, f, e, t, null);
            }
        return;
      case "dialog":
        la("beforetoggle", a), la("toggle", a), la("cancel", a), la("close", a);
        break;
      case "iframe":
      case "object":
        la("load", a);
        break;
      case "video":
      case "audio":
        for (e = 0; e < bu.length; e++) la(bu[e], a);
        break;
      case "image":
        la("error", a), la("load", a);
        break;
      case "details":
        la("toggle", a);
        break;
      case "embed":
      case "source":
      case "link":
        la("error", a), la("load", a);
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
                throw Error(h(137, l));
              default:
                ha(a, l, y, e, t, null);
            }
        return;
      default:
        if (ui(l)) {
          for (A in t)
            t.hasOwnProperty(A) &&
              ((e = t[A]), e !== void 0 && Zc(a, l, A, e, t, void 0));
          return;
        }
    }
    for (c in t)
      t.hasOwnProperty(c) && ((e = t[c]), e != null && ha(a, l, c, e, t, null));
  }
  function eh(a, l, t, e) {
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
          i = null,
          c = null,
          f = null,
          y = null,
          A = null;
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
                e.hasOwnProperty(b) || ha(a, l, b, null, e, T);
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
                A = b;
                break;
              case "value":
                i = b;
                break;
              case "defaultValue":
                c = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(h(137, l));
                break;
              default:
                b !== T && ha(a, l, g, b, e, T);
            }
        }
        ti(a, i, c, f, y, A, n, u);
        return;
      case "select":
        b = i = c = g = null;
        for (n in t)
          if (((f = t[n]), t.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                b = f;
              default:
                e.hasOwnProperty(n) || ha(a, l, n, null, e, f);
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
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && ha(a, l, u, n, e, f);
            }
        (l = c),
          (t = i),
          (e = b),
          g != null
            ? It(a, !!t, g, !1)
            : !!e != !!t &&
              (l != null ? It(a, !!t, l, !0) : It(a, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        b = g = null;
        for (c in t)
          if (
            ((u = t[c]),
            t.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                ha(a, l, c, null, e, u);
            }
        for (i in e)
          if (
            ((u = e[i]),
            (n = t[i]),
            e.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                g = u;
                break;
              case "defaultValue":
                b = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(h(91));
                break;
              default:
                u !== n && ha(a, l, i, u, e, n);
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
                ha(a, l, K, null, e, g);
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
                ha(a, l, f, g, e, b);
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
              ha(a, l, V, null, e, g);
        for (y in e)
          if (
            ((g = e[y]),
            (b = t[y]),
            e.hasOwnProperty(y) && g !== b && (g != null || b != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(h(137, l));
                break;
              default:
                ha(a, l, y, g, e, b);
            }
        return;
      default:
        if (ui(l)) {
          for (var va in t)
            (g = t[va]),
              t.hasOwnProperty(va) &&
                g !== void 0 &&
                !e.hasOwnProperty(va) &&
                Zc(a, l, va, void 0, e, g);
          for (A in e)
            (g = e[A]),
              (b = t[A]),
              !e.hasOwnProperty(A) ||
                g === b ||
                (g === void 0 && b === void 0) ||
                Zc(a, l, A, g, e, b);
          return;
        }
    }
    for (var m in t)
      (g = t[m]),
        t.hasOwnProperty(m) &&
          g != null &&
          !e.hasOwnProperty(m) &&
          ha(a, l, m, null, e, g);
    for (T in e)
      (g = e[T]),
        (b = t[T]),
        !e.hasOwnProperty(T) ||
          g === b ||
          (g == null && b == null) ||
          ha(a, l, T, g, e, b);
  }
  var Vc = null,
    Lc = null;
  function Hn(a) {
    return a.nodeType === 9 ? a : a.ownerDocument;
  }
  function jo(a) {
    switch (a) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Uo(a, l) {
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
  function Kc(a, l) {
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
  var Jc = null;
  function uh() {
    var a = window.event;
    return a && a.type === "popstate"
      ? a === Jc
        ? !1
        : ((Jc = a), !0)
      : ((Jc = null), !1);
  }
  var Ro = typeof setTimeout == "function" ? setTimeout : void 0,
    nh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ho = typeof Promise == "function" ? Promise : void 0,
    ih =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ho < "u"
        ? function (a) {
            return Ho.resolve(null).then(a).catch(ch);
          }
        : Ro;
  function ch(a) {
    setTimeout(function () {
      throw a;
    });
  }
  function zt(a) {
    return a === "head";
  }
  function Co(a, l) {
    var t = l,
      e = 0,
      u = 0;
    do {
      var n = t.nextSibling;
      if ((a.removeChild(t), n && n.nodeType === 8))
        if (((t = n.data), t === "/$")) {
          if (0 < e && 8 > e) {
            t = e;
            var i = a.ownerDocument;
            if ((t & 1 && zu(i.documentElement), t & 2 && zu(i.body), t & 4))
              for (t = i.head, zu(t), i = t.firstChild; i; ) {
                var c = i.nextSibling,
                  f = i.nodeName;
                i[Ce] ||
                  f === "SCRIPT" ||
                  f === "STYLE" ||
                  (f === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
                  t.removeChild(i),
                  (i = c);
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
  function wc(a) {
    var l = a.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var t = l;
      switch (((l = l.nextSibling), t.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          wc(t), In(t);
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
  function fh(a, l, t, e) {
    for (; a.nodeType === 1; ) {
      var u = t;
      if (a.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!e && (a.nodeName !== "INPUT" || a.type !== "hidden")) break;
      } else if (e) {
        if (!a[Ce])
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
  function sh(a, l, t) {
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
  function $c(a) {
    return (
      a.data === "$!" ||
      (a.data === "$?" && a.ownerDocument.readyState === "complete")
    );
  }
  function rh(a, l) {
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
  var Wc = null;
  function qo(a) {
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
        if (((a = l.documentElement), !a)) throw Error(h(452));
        return a;
      case "head":
        if (((a = l.head), !a)) throw Error(h(453));
        return a;
      case "body":
        if (((a = l.body), !a)) throw Error(h(454));
        return a;
      default:
        throw Error(h(451));
    }
  }
  function zu(a) {
    for (var l = a.attributes; l.length; ) a.removeAttributeNode(l[0]);
    In(a);
  }
  var El = new Map(),
    Yo = new Set();
  function Cn(a) {
    return typeof a.getRootNode == "function"
      ? a.getRootNode()
      : a.nodeType === 9
      ? a
      : a.ownerDocument;
  }
  var Pl = x.d;
  x.d = { f: oh, r: dh, D: mh, C: hh, L: vh, m: yh, X: bh, S: gh, M: Sh };
  function oh() {
    var a = Pl.f(),
      l = _n();
    return a || l;
  }
  function dh(a) {
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
            Wa(l, "link", a),
            Qa(l),
            e.head.appendChild(l)));
    }
  }
  function mh(a) {
    Pl.D(a), Xo("dns-prefetch", a, null);
  }
  function hh(a, l) {
    Pl.C(a, l), Xo("preconnect", a, l);
  }
  function vh(a, l, t) {
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
          n = xe(a);
      }
      El.has(n) ||
        ((a = Y(
          {
            rel: "preload",
            href: l === "image" && t && t.imageSrcSet ? void 0 : a,
            as: l,
          },
          t
        )),
        El.set(n, a),
        e.querySelector(u) !== null ||
          (l === "style" && e.querySelector(pu(n))) ||
          (l === "script" && e.querySelector(Au(n))) ||
          ((l = e.createElement("link")),
          Wa(l, "link", a),
          Qa(l),
          e.head.appendChild(l)));
    }
  }
  function yh(a, l) {
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
          n = xe(a);
      }
      if (
        !El.has(n) &&
        ((a = Y({ rel: "modulepreload", href: a }, l)),
        El.set(n, a),
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
          Wa(e, "link", a),
          Qa(e),
          t.head.appendChild(e);
      }
    }
  }
  function gh(a, l, t) {
    Pl.S(a, l, t);
    var e = Me;
    if (e && a) {
      var u = Wt(e).hoistableStyles,
        n = De(a);
      l = l || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = e.querySelector(pu(n)))) c.loading = 5;
        else {
          (a = Y({ rel: "stylesheet", href: a, "data-precedence": l }, t)),
            (t = El.get(n)) && kc(a, t);
          var f = (i = e.createElement("link"));
          Qa(f),
            Wa(f, "link", a),
            (f._p = new Promise(function (y, A) {
              (f.onload = y), (f.onerror = A);
            })),
            f.addEventListener("load", function () {
              c.loading |= 1;
            }),
            f.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            qn(i, l, e);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: c }),
          u.set(n, i);
      }
    }
  }
  function bh(a, l) {
    Pl.X(a, l);
    var t = Me;
    if (t && a) {
      var e = Wt(t).hoistableScripts,
        u = xe(a),
        n = e.get(u);
      n ||
        ((n = t.querySelector(Au(u))),
        n ||
          ((a = Y({ src: a, async: !0 }, l)),
          (l = El.get(u)) && Fc(a, l),
          (n = t.createElement("script")),
          Qa(n),
          Wa(n, "link", a),
          t.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Sh(a, l) {
    Pl.M(a, l);
    var t = Me;
    if (t && a) {
      var e = Wt(t).hoistableScripts,
        u = xe(a),
        n = e.get(u);
      n ||
        ((n = t.querySelector(Au(u))),
        n ||
          ((a = Y({ src: a, async: !0, type: "module" }, l)),
          (l = El.get(u)) && Fc(a, l),
          (n = t.createElement("script")),
          Qa(n),
          Wa(n, "link", a),
          t.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Go(a, l, t, e) {
    var u = (u = S.current) ? Cn(u) : null;
    if (!u) throw Error(h(446));
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
            i = n.get(a);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(a, i),
              (n = u.querySelector(pu(a))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              El.has(a) ||
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
                El.set(a, t),
                n || zh(u, a, t, i.state))),
            l && e === null)
          )
            throw Error(h(528, ""));
          return i;
        }
        if (l && e !== null) throw Error(h(529, ""));
        return null;
      case "script":
        return (
          (l = t.async),
          (t = t.src),
          typeof t == "string" &&
          l &&
          typeof l != "function" &&
          typeof l != "symbol"
            ? ((l = xe(t)),
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
        throw Error(h(444, a));
    }
  }
  function De(a) {
    return 'href="' + gl(a) + '"';
  }
  function pu(a) {
    return 'link[rel="stylesheet"][' + a + "]";
  }
  function Qo(a) {
    return Y({}, a, { "data-precedence": a.precedence, precedence: null });
  }
  function zh(a, l, t, e) {
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
        Wa(l, "link", t),
        Qa(l),
        a.head.appendChild(l));
  }
  function xe(a) {
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
          if (e) return (l.instance = e), Qa(e), e;
          var u = Y({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (a.ownerDocument || a).createElement("style")),
            Qa(e),
            Wa(e, "style", u),
            qn(e, t.precedence, a),
            (l.instance = e)
          );
        case "stylesheet":
          u = De(t.href);
          var n = a.querySelector(pu(u));
          if (n) return (l.state.loading |= 4), (l.instance = n), Qa(n), n;
          (e = Qo(t)),
            (u = El.get(u)) && kc(e, u),
            (n = (a.ownerDocument || a).createElement("link")),
            Qa(n);
          var i = n;
          return (
            (i._p = new Promise(function (c, f) {
              (i.onload = c), (i.onerror = f);
            })),
            Wa(n, "link", e),
            (l.state.loading |= 4),
            qn(n, t.precedence, a),
            (l.instance = n)
          );
        case "script":
          return (
            (n = xe(t.src)),
            (u = a.querySelector(Au(n)))
              ? ((l.instance = u), Qa(u), u)
              : ((e = t),
                (u = El.get(n)) && ((e = Y({}, t)), Fc(e, u)),
                (a = a.ownerDocument || a),
                (u = a.createElement("script")),
                Qa(u),
                Wa(u, "link", e),
                a.head.appendChild(u),
                (l.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(h(443, l.type));
      }
    else
      l.type === "stylesheet" &&
        (l.state.loading & 4) === 0 &&
        ((e = l.instance), (l.state.loading |= 4), qn(e, t.precedence, a));
    return l.instance;
  }
  function qn(a, l, t) {
    for (
      var e = t.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = e.length ? e[e.length - 1] : null,
        n = u,
        i = 0;
      i < e.length;
      i++
    ) {
      var c = e[i];
      if (c.dataset.precedence === l) n = c;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(a, n.nextSibling)
      : ((l = t.nodeType === 9 ? t.head : t), l.insertBefore(a, l.firstChild));
  }
  function kc(a, l) {
    a.crossOrigin == null && (a.crossOrigin = l.crossOrigin),
      a.referrerPolicy == null && (a.referrerPolicy = l.referrerPolicy),
      a.title == null && (a.title = l.title);
  }
  function Fc(a, l) {
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
          n[Ce] ||
          n[Fa] ||
          (a === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(l) || "";
        i = a + i;
        var c = e.get(i);
        c ? c.push(n) : e.set(i, [n]);
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
  function ph(a, l, t) {
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
  var Nu = null;
  function Ah() {}
  function Nh(a, l, t) {
    if (Nu === null) throw Error(h(475));
    var e = Nu;
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
            Qa(n);
          return;
        }
        (n = a.ownerDocument || a),
          (t = Qo(t)),
          (u = El.get(u)) && kc(t, u),
          (n = n.createElement("link")),
          Qa(n);
        var i = n;
        (i._p = new Promise(function (c, f) {
          (i.onload = c), (i.onerror = f);
        })),
          Wa(n, "link", t),
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
  function Eh() {
    if (Nu === null) throw Error(h(475));
    var a = Nu;
    return (
      a.stylesheets && a.count === 0 && Ic(a, a.stylesheets),
      0 < a.count
        ? function (l) {
            var t = setTimeout(function () {
              if ((a.stylesheets && Ic(a, a.stylesheets), a.unsuspend)) {
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
      if (this.stylesheets) Ic(this, this.stylesheets);
      else if (this.unsuspend) {
        var a = this.unsuspend;
        (this.unsuspend = null), a();
      }
    }
  }
  var Xn = null;
  function Ic(a, l) {
    (a.stylesheets = null),
      a.unsuspend !== null &&
        (a.count++,
        (Xn = new Map()),
        l.forEach(Th, a),
        (Xn = null),
        Yn.call(a));
  }
  function Th(a, l) {
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
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (t.set(i.dataset.precedence, i), (e = i));
        }
        e && t.set(null, e);
      }
      (u = l.instance),
        (i = u.getAttribute("data-precedence")),
        (n = t.get(i) || e),
        n === e && t.set(null, u),
        t.set(i, u),
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
  var Eu = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0,
  };
  function _h(a, l, t, e, u, n, i, c) {
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
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.incompleteTransitions = new Map());
  }
  function Jo(a, l, t, e, u, n, i, c, f, y, A, T) {
    return (
      (a = new _h(a, l, t, i, c, f, y, T)),
      (l = 1),
      n === !0 && (l |= 24),
      (n = rl(3, null, null, l)),
      (a.current = n),
      (n.stateNode = a),
      (l = Ri()),
      l.refCount++,
      (a.pooledCache = l),
      l.refCount++,
      (n.memoizedState = { element: e, isDehydrated: t, cache: l }),
      Bi(n),
      a
    );
  }
  function wo(a) {
    return a ? ((a = ce), a) : ce;
  }
  function $o(a, l, t, e, u, n) {
    (u = wo(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = ct(l)),
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
  function Pc(a, l) {
    Wo(a, l), (a = a.alternate) && Wo(a, l);
  }
  function ko(a) {
    if (a.tag === 13) {
      var l = ie(a, 67108864);
      l !== null && vl(l, a, 67108864), Pc(a, 67108864);
    }
  }
  var Gn = !0;
  function Oh(a, l, t, e) {
    var u = z.T;
    z.T = null;
    var n = x.p;
    try {
      (x.p = 2), af(a, l, t, e);
    } finally {
      (x.p = n), (z.T = u);
    }
  }
  function Mh(a, l, t, e) {
    var u = z.T;
    z.T = null;
    var n = x.p;
    try {
      (x.p = 8), af(a, l, t, e);
    } finally {
      (x.p = n), (z.T = u);
    }
  }
  function af(a, l, t, e) {
    if (Gn) {
      var u = lf(e);
      if (u === null) Qc(a, l, e, Qn, t), Io(a, e);
      else if (xh(u, a, l, t, e)) e.stopPropagation();
      else if ((Io(a, e), l & 4 && -1 < Dh.indexOf(a))) {
        for (; u !== null; ) {
          var n = $t(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = _t(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - fl(i));
                      (c.entanglements[1] |= f), (i &= ~f);
                    }
                    Hl(n), (oa & 6) === 0 && ((En = ll() + 500), gu(0));
                  }
                }
                break;
              case 13:
                (c = ie(n, 2)), c !== null && vl(c, n, 2), _n(), Pc(n, 2);
            }
          if (((n = lf(e)), n === null && Qc(a, l, e, Qn, t), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else Qc(a, l, e, null, t);
    }
  }
  function lf(a) {
    return (a = ii(a)), tf(a);
  }
  var Qn = null;
  function tf(a) {
    if (((Qn = null), (a = wt(a)), a !== null)) {
      var l = R(a);
      if (l === null) a = null;
      else {
        var t = l.tag;
        if (t === 13) {
          if (((a = Q(l)), a !== null)) return a;
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
        switch (je()) {
          case Lt:
            return 2;
          case Kt:
            return 8;
          case lt:
          case Ue:
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
    pt = null,
    At = null,
    Nt = null,
    Tu = new Map(),
    _u = new Map(),
    Et = [],
    Dh =
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
        Nt = null;
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
  function xh(a, l, t, e, u) {
    switch (l) {
      case "focusin":
        return (pt = Ou(pt, a, l, t, e, u)), !0;
      case "dragenter":
        return (At = Ou(At, a, l, t, e, u)), !0;
      case "mouseover":
        return (Nt = Ou(Nt, a, l, t, e, u)), !0;
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
      var t = R(l);
      if (t !== null) {
        if (((l = t.tag), l === 13)) {
          if (((l = Q(t)), l !== null)) {
            (a.blockedOn = l),
              Nd(a.priority, function () {
                if (t.tag === 13) {
                  var e = hl();
                  e = Wn(e);
                  var u = ie(t, e);
                  u !== null && vl(u, t, e), Pc(t, e);
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
        (ni = e), t.target.dispatchEvent(e), (ni = null);
      } else return (l = $t(t)), l !== null && ko(l), (a.blockedOn = t), !1;
      l.shift();
    }
    return !0;
  }
  function ad(a, l, t) {
    Zn(a) && t.delete(l);
  }
  function jh() {
    (ef = !1),
      pt !== null && Zn(pt) && (pt = null),
      At !== null && Zn(At) && (At = null),
      Nt !== null && Zn(Nt) && (Nt = null),
      Tu.forEach(ad),
      _u.forEach(ad);
  }
  function Vn(a, l) {
    a.blockedOn === l &&
      ((a.blockedOn = null),
      ef ||
        ((ef = !0),
        M.unstable_scheduleCallback(M.unstable_NormalPriority, jh)));
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
            tc(n, { pending: !0, data: u, method: t.method, action: e }, e, u));
        }
      }));
  }
  function Mu(a) {
    function l(f) {
      return Vn(f, a);
    }
    pt !== null && Vn(pt, a),
      At !== null && Vn(At, a),
      Nt !== null && Vn(Nt, a),
      Tu.forEach(l),
      _u.forEach(l);
    for (var t = 0; t < Et.length; t++) {
      var e = Et[t];
      e.blockedOn === a && (e.blockedOn = null);
    }
    for (; 0 < Et.length && ((t = Et[0]), t.blockedOn === null); )
      Po(t), t.blockedOn === null && Et.shift();
    if (((t = (a.ownerDocument || a).$$reactFormReplay), t != null))
      for (e = 0; e < t.length; e += 3) {
        var u = t[e],
          n = t[e + 1],
          i = u[tl] || null;
        if (typeof n == "function") i || ld(t);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[tl] || null))) c = i.formAction;
            else if (tf(u) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? (t[e + 1] = c) : (t.splice(e, 3), (e -= 3)),
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
      if (l === null) throw Error(h(409));
      var t = l.current,
        e = hl();
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
      for (var t = 0; t < Et.length && l !== 0 && l < Et[t].priority; t++);
      Et.splice(t, 0, a), t === 0 && Po(a);
    }
  };
  var td = J.version;
  if (td !== "19.1.1") throw Error(h(527, td, "19.1.1"));
  x.findDOMNode = function (a) {
    var l = a._reactInternals;
    if (l === void 0)
      throw typeof a.render == "function"
        ? Error(h(188))
        : ((a = Object.keys(a).join(",")), Error(h(268, a)));
    return (
      (a = B(l)),
      (a = a !== null ? N(a) : null),
      (a = a === null ? null : a.stateNode),
      a
    );
  };
  var Uh = {
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
        (Yl = Jn.inject(Uh)), (Ja = Jn);
      } catch {}
  }
  return (
    (xu.createRoot = function (a, l) {
      if (!j(a)) throw Error(h(299));
      var t = !1,
        e = "",
        u = gr,
        n = br,
        i = Sr,
        c = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (t = !0),
          l.identifierPrefix !== void 0 && (e = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (n = l.onCaughtError),
          l.onRecoverableError !== void 0 && (i = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (c = l.unstable_transitionCallbacks)),
        (l = Jo(a, 1, !1, null, null, t, e, u, n, i, c, null)),
        (a[Jt] = l.current),
        Gc(a),
        new uf(l)
      );
    }),
    (xu.hydrateRoot = function (a, l, t) {
      if (!j(a)) throw Error(h(299));
      var e = !1,
        u = "",
        n = gr,
        i = br,
        c = Sr,
        f = null,
        y = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (f = t.unstable_transitionCallbacks),
          t.formState !== void 0 && (y = t.formState)),
        (l = Jo(a, 1, !0, l, t ?? null, e, u, n, i, c, f, y)),
        (l.context = wo(null)),
        (t = l.current),
        (e = hl()),
        (e = Wn(e)),
        (u = ct(e)),
        (u.callback = null),
        ft(t, u, e),
        (t = e),
        (l.current.lanes = t),
        He(l, t),
        Hl(l),
        (a[Jt] = l.current),
        Gc(a),
        new Kn(l)
      );
    }),
    (xu.version = "19.1.1"),
    xu
  );
}
var dd;
function Zh() {
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
  return M(), (ff.exports = Qh()), ff.exports;
}
var Vh = Zh();
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
function yd(M, J) {
  if (!J || J.length === 0) return M;
  const X = { ...M };
  for (const h of J) {
    let j = h.match(
      /^([\wÁÉÍÓÚÜÑáéíóúüñ]+)\s*([+-]?\d+D\d+|[+-]?\d+D|[+-]?\d+)$/i
    );
    if (
      !j &&
      ((j = h.match(
        /^([+-]?\d+D\d+|[+-]?\d+D|[+-]?\d+)\s+([\wÁÉÍÓÚÜÑáéíóúüñ]+)$/i
      )),
      j)
    ) {
      const W = j[1];
      (j[1] = j[2]), (j[2] = W);
    }
    if (!j) continue;
    const R = j[1],
      Q = j[2],
      ta = wn[R.toUpperCase()] || wn[R];
    if (!ta) continue;
    const B = X[ta] || "";
    if (!Q.includes("+") && !Q.includes("-")) {
      X[ta] = Q;
      continue;
    }
    const N = B.match(/^(\d+)D(\d+)([+-]\d+)?$/),
      Y = Q.match(/^[+-]?(\d+)D(\d+)([+-]\d+)?$/);
    if (N && Y) {
      const W = parseInt(N[1], 10),
        ea = parseInt(N[2], 10),
        fa = N[3] ? parseInt(N[3], 10) : 0,
        Ma = parseInt(Y[1], 10),
        Ka = parseInt(Y[2], 10),
        Ua = Y[3] ? parseInt(Y[3], 10) : 0;
      if (ea === Ka) {
        const na = W + Ma,
          pa = fa + Ua;
        X[ta] = `${na}D${ea}${pa !== 0 ? (pa > 0 ? "+" : "") + pa : ""}`;
      } else {
        const na = B.trim(),
          pa = Q.trim().replace(/^\+/, "");
        na.includes(pa) || (X[ta] = `${na}+${pa}`);
      }
      continue;
    }
    if (N && /^[+-]?\d+D$/.test(Q)) {
      const W = parseInt(N[1], 10),
        ea = parseInt(N[2], 10),
        fa = N[3] ? parseInt(N[3], 10) : 0,
        Ma = parseInt(Q.replace("D", ""), 10);
      X[ta] = `${W + Ma}D${ea}${fa !== 0 ? (fa > 0 ? "+" : "") + fa : ""}`;
      continue;
    }
    if (N && /^[+-]?\d+$/.test(Q)) {
      const W = parseInt(N[1], 10),
        ea = parseInt(N[2], 10);
      let fa = N[3] ? parseInt(N[3], 10) : 0;
      (fa += parseInt(Q, 10)),
        (X[ta] = `${W}D${ea}${fa !== 0 ? (fa > 0 ? "+" : "") + fa : ""}`);
      continue;
    }
    if (/^[+-]?\d+$/.test(Q)) {
      const W = parseInt(B || "0", 10);
      X[ta] = (W + parseInt(Q, 10)).toString();
      continue;
    }
    X[ta] = Q;
  }
  return X;
}
function Lh(M, J) {
  const X = M.caracteristicas,
    h = J?.variacion_caracteristicas;
  let j = yd(X, h);
  if (J?.variacion_caracMINMAX && J.variacion_caracMINMAX.length > 0) {
    const R = gd(J.variacion_caracMINMAX);
    j = Kh(j, R);
  }
  return j;
}
function gd(M) {
  const J = [];
  for (const X of M) {
    const h = X.match(/^MIN\s+(\w+)\s+(\d+)D$/i);
    if (h) {
      const R = wn[h[1].toUpperCase()];
      if (R) {
        const Q = parseInt(h[2], 10);
        J.push({ caracteristica: R, tipo: "MIN", valor: 0, dados: Q });
      }
      continue;
    }
    const j = X.match(/^MAX\s+(\w+)\s+(\d+)$/i);
    if (j) {
      const R = wn[j[1].toUpperCase()];
      if (R) {
        const Q = parseInt(j[2], 10);
        J.push({ caracteristica: R, tipo: "MAX", valor: Q });
      }
    }
  }
  return J;
}
function Kh(M, J) {
  const X = { ...M };
  for (const h of J) {
    const j = X[h.caracteristica];
    if (j && h.tipo === "MIN" && h.dados) {
      const R = j.match(/^(\d+)D(\d+)([+-]\d+)?$/);
      if (R) {
        const Q = parseInt(R[1], 10),
          ta = parseInt(R[2], 10),
          B = R[3] ? R[3] : "";
        Q < h.dados &&
          ((X[h.caracteristica] = `${h.dados}D${ta}${B}`),
          console.log(
            "[Aplicando límite MIN]",
            h.caracteristica,
            `${Q}D${ta}${B} -> ${h.dados}D${ta}${B}`
          ));
      }
    }
  }
  return X;
}
function md(M, J, X) {
  for (const h of X)
    if (h.caracteristica === M && h.tipo === "MAX" && J > h.valor)
      return {
        valido: !1,
        mensaje: `El valor máximo para ${M} es ${h.valor}`,
        valorCorregido: h.valor,
      };
  return { valido: !0 };
}
function Jh(M) {
  return !M?.variacion_caracMINMAX || M.variacion_caracMINMAX.length === 0
    ? []
    : gd(M.variacion_caracMINMAX);
}
const hd = {
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
function wh(M) {
  const J = hd[M.trim()];
  if (J) return J;
  const X = M.replace(/^[+-]?\d+\s*%?\s*/, "")
    .replace(/\s*[+-]?\d+\s*%?$/, "")
    .trim();
  return hd[X];
}
function vd(M) {
  const J = M.trim(),
    X = [/^([+-]?\d+)\s*%?\s*(.+)$/, /^(.+?)\s*([+-]?\d+)\s*%?$/];
  for (const h of X) {
    const j = J.match(h);
    if (j) {
      let R, Q;
      h === X[0]
        ? ((R = parseInt(j[1].replace(/[+]/g, ""))), (Q = j[2]))
        : ((Q = j[1]), (R = parseInt(j[2].replace(/[+]/g, ""))));
      const ta = wh(Q);
      if (ta && !isNaN(R)) return { habilidad: ta, valor: R };
    }
  }
  return null;
}
function $h() {
  const M = () =>
      P
        ? s.jsx("div", {
            className: "raza-card",
            children: s.jsxs("div", {
              className: "raza-content",
              children: [
                s.jsxs("h3", {
                  className: "raza-title",
                  children: ["Nacionalidad: ", P.nombre],
                }),
                s.jsx("hr", { className: "raza-divider" }),
                P.variacion_caracteristicas &&
                  P.variacion_caracteristicas.length > 0 &&
                  s.jsxs("div", {
                    className: "raza-section",
                    children: [
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Variaciones de Características",
                      }),
                      s.jsx("div", {
                        className: "raza-list",
                        children: P.variacion_caracteristicas.map((d, p) =>
                          s.jsx(
                            "div",
                            {
                              className: "raza-list-item",
                              children: s.jsx("span", {
                                className: "raza-characteristic-name",
                                children: d,
                              }),
                            },
                            p
                          )
                        ),
                      }),
                    ],
                  }),
                P.origen_social &&
                  s.jsxs("div", {
                    className: "raza-section",
                    children: [
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Origen social",
                      }),
                      s.jsx("div", {
                        className: "raza-list",
                        children: Array.isArray(P.origen_social)
                          ? P.origen_social.map((d, p) =>
                              s.jsx(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: s.jsx("span", {
                                    className: "raza-characteristic-name",
                                    children: d,
                                  }),
                                },
                                p
                              )
                            )
                          : s.jsx("div", {
                              className: "raza-list-item",
                              children: s.jsx("span", {
                                className: "raza-characteristic-name",
                                children: P.origen_social,
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
      na
        ? s.jsx("div", {
            className: "raza-card",
            children: s.jsxs("div", {
              className: "raza-content",
              children: [
                s.jsxs("h3", {
                  className: "raza-title",
                  children: ["Origen: ", na.nombre],
                }),
                na.info_Origen &&
                  na.info_Origen.trim() !== "" &&
                  s.jsx("p", {
                    className: "raza-description",
                    children: na.info_Origen,
                  }),
                s.jsx("hr", { className: "raza-divider" }),
                na.variacion_habilidades &&
                  na.variacion_habilidades.length > 0 &&
                  s.jsxs("div", {
                    className: "raza-section",
                    children: [
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Bonificaciones de Habilidades",
                      }),
                      s.jsx("div", {
                        className: "raza-list",
                        children: na.variacion_habilidades.map((d, p) =>
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
                            p
                          )
                        ),
                      }),
                    ],
                  }),
                na.variacion_bonus_combate &&
                  Object.keys(na.variacion_bonus_combate).length > 0 &&
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
                          na.variacion_bonus_combate
                        ).map(([d, p], S) =>
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
                                  children: p,
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
          })
        : null,
    [X, h] = qa.useState(!0),
    j = () => {
      X && h(!1);
    },
    [R, Q] = qa.useState(null),
    [ta, B] = qa.useState([]),
    [N, Y] = qa.useState([]),
    [W, ea] = qa.useState([]),
    [fa, Ma] = qa.useState([]),
    [Ka, Ua] = qa.useState([]),
    [na, pa] = qa.useState(null),
    [w, cl] = qa.useState(null),
    [O, ka] = qa.useState(null),
    [P, Xa] = qa.useState(null);
  qa.useEffect(() => {
    if (!P) {
      Ua(fa);
      return;
    }
    let d = [];
    if (Array.isArray(P.origen_social))
      d = P.origen_social.map((S) => {
        const H = S.split(":");
        return H.length > 1
          ? H[1].trim().toUpperCase()
          : S.trim().toUpperCase();
      });
    else if (typeof P.origen_social == "string") {
      Ua(fa);
      return;
    }
    const p = fa.filter((S) => d.includes(S.nombre.trim().toUpperCase()));
    Ua(p);
  }, [P, fa]);
  const [Ga, Cl] = qa.useState(null),
    [Ra, ga] = qa.useState({}),
    [Ml, ql] = qa.useState(!0),
    [Da, z] = qa.useState([]),
    x = (d, p) => {
      const S = parseInt(p, 10);
      if (!isNaN(S) && Da.length > 0) {
        const H = md(d, S, Da);
        if (!H.valido && H.valorCorregido !== void 0) {
          ga((C) => ({ ...C, [d]: H.valorCorregido.toString() }));
          return;
        }
      }
      ga((H) => ({ ...H, [d]: p }));
    };
  function Z(d) {
    let p = 0;
    const S = /([+-]?\d+)D(\d+)/gi;
    let H;
    for (; (H = S.exec(d)) !== null; ) {
      const ia = parseInt(H[1], 10),
        F = parseInt(H[2], 10),
        Ta = Math.sign(ia);
      for (let Aa = 0; Aa < Math.abs(ia); Aa++) {
        let ba = Math.floor(Math.random() * F) + 1;
        Ml && ba < 2 && (ba = 2), (p += Ta * ba);
      }
    }
    const C = /([+-]\d+)(?!D)/g;
    let Ea;
    for (; (Ea = C.exec(d)) !== null; ) p += parseInt(Ea[1], 10);
    return p;
  }
  const ra = () => {
      if (
        !Ga ||
        (Object.values(Ra).some((Bl) => Bl && Bl.trim() !== "") &&
          !window.confirm(
            "¿Seguro que quieres generar tiradas aleatorias? Se borrarán los valores que hayas insertado manualmente."
          ))
      )
        return;
      const d = {};
      Object.entries(Ga).forEach(([Bl, Uu]) => {
        if (typeof Uu == "string") {
          let Yl = Z(Uu);
          if (Da.length > 0) {
            const Ja = md(Bl, Yl, Da);
            !Ja.valido &&
              Ja.valorCorregido !== void 0 &&
              (Yl = Ja.valorCorregido);
          }
          d[Bl] = Yl.toString();
        }
      }),
        ga(d);
      const p = parseInt(d.Fuerza || "0", 10);
      let S = "";
      p >= 18 && p <= 23
        ? (S = "+1")
        : p >= 24 && p <= 30
        ? (S = "+1D4")
        : p >= 31 && p <= 38
        ? (S = "+1D6")
        : p >= 39 && p <= 45
        ? (S = "+1D10")
        : p >= 46
        ? (S = "+2D6")
        : (S = "Sin bonus");
      const H = parseInt(d.Destreza || "0", 10),
        C = p + H;
      let Ea = "NO TIENE";
      O &&
        ["ARQUERO", "CASACA AZUL", "ILMIONARIO", "GUARDABOSQUES"].some(
          (Bl) => O.nombre.toUpperCase() === Bl.toUpperCase()
        ) &&
        (C >= 0 && C <= 24
          ? (Ea = "Nada")
          : C >= 25 && C <= 40
          ? (Ea = "+1D4")
          : C >= 41 && C <= 52
          ? (Ea = "+2D4")
          : C >= 53 && (Ea = "2D4+1"));
      const F = parseInt(d.Inteligencia || "0", 10),
        Ta = parseInt(d.Constitución || "0", 10),
        Aa = parseInt(d.Poder || "0", 10),
        ba = parseInt(d.Carisma || "0", 10),
        Dl = parseInt(d.Tamaño || "0", 10);
      let at = 0;
      F >= 1 && F <= 10
        ? (at = F)
        : F >= 11 && F <= 18
        ? (at = F + 20)
        : F >= 19 && (at = F + 30);
      const ll = F + H + 10,
        je = Math.floor(Ta / 2) + F + Aa + ba - 5,
        Lt = H * 2 + F + Aa - Dl - 5,
        Kt = F * 2 + H + ba - 15,
        lt = F + Math.floor(p / 2) + Aa + H - Dl - 5,
        Ue = Aa + ba + F + 40 - Ta,
        ju = Math.max(1, Ta + Dl - 12);
      Q({
        bonusCC: `Bonus de Fuerza CC: ${S}`,
        bonusAA: `Bonus de Fuerza AA: ${Ea}`,
        conocimiento: at,
        percepcion: ll,
        comunicacion: je,
        agilidad: Lt,
        manipulacion: Kt,
        discrecion: lt,
        saludMental: Ue,
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
                            ([d, p]) =>
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
                                      children: p,
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
                            ([d, p]) =>
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
                                      children: p,
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
                            children: O.variacion_caracteristicas.map((d, p) =>
                              s.jsx(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: s.jsx("span", {
                                    className: "raza-characteristic-name",
                                    children: d,
                                  }),
                                },
                                p
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
                            children: O.variacion_caracMINMAX.map((d, p) =>
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
                                p
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
                            children: O.variacion_habilidades.map((d, p) =>
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
                                p
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
    U = () => {
      if (!w && !O && !na) return null;
      const d = {};
      return (
        w &&
          Object.entries(w.bonificaciones).forEach(([p, S]) => {
            if (typeof S == "number") d[p] = (d[p] || 0) + S;
            else if (typeof S == "string") {
              const H = parseInt(S.replace(/[+-]/g, "")) || 0,
                C = S.startsWith("-") ? -1 : 1;
              d[p] = (d[p] || 0) + H * C;
            }
          }),
        O &&
          O.variacion_habilidades &&
          O.variacion_habilidades.forEach((p) => {
            const S = p.trim();
            if (
              S.includes("Regeneración de SM") ||
              S.includes("al día") ||
              S.includes("1D6") ||
              S === ""
            )
              return;
            const H = vd(S);
            if (H) {
              d[H.habilidad] = (d[H.habilidad] || 0) + H.valor;
              return;
            }
            if (S.includes("100%") || S.includes("+100")) {
              const C = S.replace(/(\+100|100\s*%).*$/, "").trim();
              C && (d[C] = 100);
            }
          }),
        na &&
          na.variacion_habilidades &&
          na.variacion_habilidades.forEach((p) => {
            const S = p.trim();
            if (
              S.includes("Regeneración de SM") ||
              S.includes("al día") ||
              S.includes("1D6") ||
              S === ""
            )
              return;
            const H = vd(S);
            if (H) {
              d[H.habilidad] = (d[H.habilidad] || 0) + H.valor;
              return;
            }
            if (S.includes("100%") || S.includes("+100")) {
              const C = S.replace(/(\+100|100\s*%).*$/, "").trim();
              C && (d[C] = 100);
            }
          }),
        d
      );
    },
    D = () => {
      const d = U();
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
                children: Object.entries(d).map(([p, S]) =>
                  s.jsxs(
                    "li",
                    {
                      className: "ficha-resultado-item",
                      children: [
                        s.jsxs("b", {
                          className: "ficha-resultado-carac",
                          children: [p, ":"],
                        }),
                        " ",
                        s.jsx("span", {
                          className:
                            "raza-chip raza-chip-success bonificacion-chip",
                          children: S > 0 ? `+${S}` : S,
                        }),
                      ],
                    },
                    p
                  )
                ),
              }),
            ],
          });
    };
  return (
    qa.useEffect(() => {
      fetch("/StromRol/Razas.json")
        .then((d) => d.json())
        .then((d) => B(d.razas)),
        fetch("/StromRol/Clases.json")
          .then((d) => d.json())
          .then((d) => Y(d.clases)),
        fetch("/StromRol/Nacionalidad.json")
          .then((d) => d.json())
          .then((d) => ea(d.nacionalidades)),
        fetch("/StromRol/Origen.json")
          .then((d) => d.json())
          .then((d) => Ma(d.origenes));
    }, []),
    qa.useEffect(() => {
      if ((ga({}), w)) {
        let d = Lh(
          w,
          O
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
            : void 0
        );
        P &&
          P.variacion_caracteristicas &&
          (d = yd(d, P.variacion_caracteristicas)),
          Cl(d);
      } else Cl(null);
    }, [w, O, P]),
    qa.useEffect(() => {
      if (O) {
        const d = Jh(O);
        z(d);
      } else z([]);
    }, [O]),
    s.jsxs("div", {
      className: "ficha-container",
      children: [
        X &&
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
                const p = ta.find((S) => S.nombre === d.target.value);
                cl(p || null),
                  j(),
                  Q(null),
                  Xa(null),
                  p &&
                    ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                      p.nombre.toUpperCase()
                    ) &&
                    ka(null);
              },
              children: [
                s.jsx("option", { value: "", children: "Elige una raza" }),
                ta.map((d) =>
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
                const p = N.find((S) => S.nombre === d.target.value);
                ka(p || null),
                  ga({}),
                  Q(null),
                  Xa(null),
                  pa(null),
                  j(),
                  na && p && pa(na);
              },
              disabled: !!(
                w &&
                ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                  w.nombre.toUpperCase()
                )
              ),
              children: [
                s.jsx("option", { value: "", children: "Elige una clase" }),
                N.map((d) =>
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
            s.jsxs("div", {
              className: "ficha-combo-col",
              children: [
                s.jsxs("select", {
                  id: "nacionalidad-select",
                  className: "ficha-select",
                  value: P?.nombre || "",
                  onChange: (d) => {
                    const p = W.find((S) => S.nombre === d.target.value);
                    Xa(p || null), ga({}), Q(null), pa(null), j();
                  },
                  disabled: !w,
                  children: [
                    s.jsx("option", {
                      value: "",
                      children: "Elige una nacionalidad",
                    }),
                    W.map((d) =>
                      s.jsx(
                        "option",
                        { value: d.nombre, children: d.nombre },
                        d.nombre
                      )
                    ),
                  ],
                }),
                s.jsx("button", {
                  type: "button",
                  className: "ficha-dado-btn",
                  title: "Tirar dado de nacionalidad",
                  disabled: !w,
                  onClick: () => {
                    const d = Math.floor(Math.random() * 100) + 1;
                    let p = null;
                    for (const S of W) {
                      let H = parseInt(S.minimo, 10),
                        C = parseInt(S.maximo, 10);
                      if (
                        (S.minimo === "00" && (H = 100),
                        S.maximo === "00" && (C = 100),
                        H > C && ([H, C] = [C, H]),
                        d >= H && d <= C)
                      ) {
                        p = S;
                        break;
                      }
                      if (
                        d === 100 &&
                        (S.minimo === "00" || S.maximo === "00")
                      ) {
                        p = S;
                        break;
                      }
                    }
                    p
                      ? (Xa(p),
                        ga({}),
                        Q(null),
                        pa(null),
                        j(),
                        alert(`Tirada: ${d} → Nacionalidad: ${p.nombre}`))
                      : alert(`Tirada: ${d} → No se encontró nacionalidad.`);
                  },
                  children: "🎲",
                }),
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
            s.jsxs("div", {
              className: "ficha-combo-col",
              children: [
                s.jsxs("select", {
                  id: "origen-select",
                  className: "ficha-select",
                  value: na?.nombre || "",
                  onChange: (d) => {
                    const p = Ka.find((S) => S.nombre === d.target.value);
                    pa(p || null), ga({}), Q(null), j();
                  },
                  disabled: !P,
                  children: [
                    s.jsx("option", { value: "", children: "Elige un origen" }),
                    Ka.map((d) =>
                      s.jsx(
                        "option",
                        { value: d.nombre, children: d.nombre },
                        d.nombre
                      )
                    ),
                  ],
                }),
                s.jsx("button", {
                  type: "button",
                  className: "ficha-dado-btn",
                  title: "Tirar dado de origen",
                  disabled: !P,
                  onClick: () => {
                    if (!P) return;
                    const d = Math.floor(Math.random() * 100) + 1,
                      p = P.origen_social;
                    if (!Array.isArray(p)) {
                      alert(
                        "La nacionalidad seleccionada no tiene tabla de origen social válida."
                      );
                      return;
                    }
                    let S = null;
                    for (const H of p) {
                      const C = H.split(":");
                      if (C.length < 2) continue;
                      const Ea = C[0].trim(),
                        ia = C[1].trim();
                      let [F, Ta] = Ea.split("-");
                      (F = F.trim()), (Ta = Ta.trim());
                      let Aa = parseInt(F, 10),
                        ba = parseInt(Ta, 10);
                      if (
                        (F === "00" && (Aa = 100),
                        Ta === "00" && (ba = 100),
                        Aa > ba && ([Aa, ba] = [ba, Aa]),
                        d >= Aa && d <= ba)
                      ) {
                        S = ia.toUpperCase();
                        break;
                      }
                      if (d === 100 && (F === "00" || Ta === "00")) {
                        S = ia.toUpperCase();
                        break;
                      }
                    }
                    if (S) {
                      const H = Ka.find(
                        (C) => C.nombre.trim().toUpperCase() === S
                      );
                      H
                        ? (pa(H),
                          ga({}),
                          Q(null),
                          alert(`Tirada: ${d} → Origen: ${H.nombre}`))
                        : alert(
                            `Tirada: ${d} → Origen encontrado en tabla: ${S}, pero no existe en el combo.`
                          );
                    } else alert(`Tirada: ${d} → No se encontró origen.`);
                  },
                  children: "🎲",
                }),
              ],
            }),
          ],
        }),
        Ga &&
          s.jsxs("div", {
            className: "ficha-resultado",
            children: [
              s.jsx("h3", {
                className: "ficha-resultado-title",
                children: "Dados que debe tirar el jugador:",
              }),
              s.jsx("ul", {
                className: "ficha-resultado-list",
                children: Object.entries(Ga).map(([d, p]) =>
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
                          children: p,
                        }),
                        s.jsx("input", {
                          type: "number",
                          min: "1",
                          className: "ficha-resultado-input",
                          placeholder: "Tirada",
                          value: Ra[d] || "",
                          onChange: (S) => {
                            x(d, S.target.value);
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
                      checked: Ml,
                      onChange: (d) => ql(d.target.checked),
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
                    onClick: ra,
                    disabled: Object.keys(Ga || {}).length === 0,
                    children: "Generar tiradas aleatorias",
                  }),
                  s.jsx("button", {
                    className: "ficha-habilidades-btn",
                    disabled:
                      Object.keys(Ga || {}).length === 0 ||
                      Object.entries(Ga || {}).some(([d]) => !Ra[d]),
                    onClick: () => {
                      const d = parseInt(Ra.Fuerza || "0", 10);
                      let p = "";
                      d >= 18 && d <= 23
                        ? (p = "+1")
                        : d >= 24 && d <= 30
                        ? (p = "+1D4")
                        : d >= 31 && d <= 38
                        ? (p = "+1D6")
                        : d >= 39 && d <= 45
                        ? (p = "+1D10")
                        : d >= 46
                        ? (p = "+2D6")
                        : (p = "Sin bonus");
                      const S = parseInt(Ra.Destreza || "0", 10),
                        H = d + S;
                      let C = "NO TIENE";
                      O &&
                        [
                          "ARQUERO",
                          "CASACA AZUL",
                          "ILMIONARIO",
                          "GUARDABOSQUES",
                        ].some(
                          (Ue) => O.nombre.toUpperCase() === Ue.toUpperCase()
                        ) &&
                        (H >= 0 && H <= 24
                          ? (C = "Nada")
                          : H >= 25 && H <= 40
                          ? (C = "+1D4")
                          : H >= 41 && H <= 52
                          ? (C = "+2D4")
                          : H >= 53 && (C = "2D4+1"));
                      const ia = parseInt(Ra.Inteligencia || "0", 10),
                        F = parseInt(Ra.Constitución || "0", 10),
                        Ta = parseInt(Ra.Poder || "0", 10),
                        Aa = parseInt(Ra.Carisma || "0", 10),
                        ba = parseInt(Ra.Tamaño || "0", 10);
                      let Dl = 0;
                      ia >= 1 && ia <= 10
                        ? (Dl = ia)
                        : ia >= 11 && ia <= 18
                        ? (Dl = ia + 20)
                        : ia >= 19 && (Dl = ia + 30);
                      const at = ia + S + 10,
                        ll = Math.floor(F / 2) + ia + Ta + Aa - 5,
                        je = S * 2 + ia + Ta - ba - 5,
                        Lt = ia * 2 + S + Aa - 15,
                        Kt = ia + Math.floor(d / 2) + Ta + S - ba - 5,
                        lt = Ta + Aa + ia + 40 - F;
                      Q({
                        bonusCC: `Bonus de Fuerza CC: ${p}`,
                        bonusAA: `Bonus de Fuerza AA: ${C}`,
                        conocimiento: Dl,
                        percepcion: at,
                        comunicacion: ll,
                        agilidad: je,
                        manipulacion: Lt,
                        discrecion: Kt,
                        saludMental: lt,
                        puntosVida: Math.max(1, F + ba - 12),
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
        R &&
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
                              children: [R.bonusCC.split(":")[0], ":"],
                            }),
                            s.jsx("span", {
                              className: "raza-chip raza-chip-secondary",
                              children: R.bonusCC.split(":")[1],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "raza-list-item",
                          children: [
                            s.jsxs("span", {
                              className: "raza-bonus-name",
                              children: [R.bonusAA.split(":")[0], ":"],
                            }),
                            s.jsx("span", {
                              className: "raza-chip raza-chip-secondary",
                              children: R.bonusAA.split(":")[1],
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
                              children: R.puntosVida,
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
                              children: R.conocimiento,
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
                              children: R.percepcion,
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
                              children: R.comunicacion,
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
                              children: R.agilidad,
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
                              children: R.manipulacion,
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
                              children: R.discrecion,
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
                              children: R.saludMental,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              na &&
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
                            p = na.variacion_bonus_combate || {};
                          function S(ia, F) {
                            const Ta =
                                typeof ia == "string"
                                  ? parseInt(ia)
                                  : typeof ia == "number"
                                  ? ia
                                  : 0,
                              Aa =
                                typeof F == "string"
                                  ? parseInt(F)
                                  : typeof F == "number"
                                  ? F
                                  : 0,
                              ba = Ta + Aa;
                            return (typeof ia == "string" &&
                              ia.includes("%")) ||
                              (typeof F == "string" && F.includes("%"))
                              ? `${ba > 0 ? "+" : ""}${ba}%`
                              : `${ba > 0 ? "+" : ""}${ba}`;
                          }
                          const H = S(
                              d && "ataque" in d ? d.ataque : void 0,
                              p && "ataque" in p ? p.ataque : void 0
                            ),
                            C = S(
                              d && "defensa" in d ? d.defensa : void 0,
                              p && "defensa" in p ? p.defensa : void 0
                            ),
                            Ea = S(
                              d && "armas_arrojadizas" in d
                                ? d.armas_arrojadizas
                                : void 0,
                              p && "armas_arrojadizas" in p
                                ? p.armas_arrojadizas
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
                                    children: H,
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
                                    children: C,
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
                                    children: Ea,
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
Vh.createRoot(document.getElementById("root")).render(
  s.jsx(qa.StrictMode, { children: s.jsx($h, {}) })
);
