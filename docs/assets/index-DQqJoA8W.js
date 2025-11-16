(function () {
  const w = document.createElement("link").relList;
  if (w && w.supports && w.supports("modulepreload")) return;
  for (const x of document.querySelectorAll('link[rel="modulepreload"]')) h(x);
  new MutationObserver((x) => {
    for (const C of x)
      if (C.type === "childList")
        for (const X of C.addedNodes)
          X.tagName === "LINK" && X.rel === "modulepreload" && h(X);
  }).observe(document, { childList: !0, subtree: !0 });
  function G(x) {
    const C = {};
    return (
      x.integrity && (C.integrity = x.integrity),
      x.referrerPolicy && (C.referrerPolicy = x.referrerPolicy),
      x.crossOrigin === "use-credentials"
        ? (C.credentials = "include")
        : x.crossOrigin === "anonymous"
        ? (C.credentials = "omit")
        : (C.credentials = "same-origin"),
      C
    );
  }
  function h(x) {
    if (x.ep) return;
    x.ep = !0;
    const C = G(x);
    fetch(x.href, C);
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
function H0() {
  if (ed) return Du;
  ed = 1;
  var M = Symbol.for("react.transitional.element"),
    w = Symbol.for("react.fragment");
  function G(h, x, C) {
    var X = null;
    if (
      (C !== void 0 && (X = "" + C),
      x.key !== void 0 && (X = "" + x.key),
      "key" in x)
    ) {
      C = {};
      for (var I in x) I !== "key" && (C[I] = x[I]);
    } else C = x;
    return (
      (x = C.ref),
      { $$typeof: M, type: h, key: X, ref: x !== void 0 ? x : null, props: C }
    );
  }
  return (Du.Fragment = w), (Du.jsx = G), (Du.jsxs = G), Du;
}
var ud;
function C0() {
  return ud || ((ud = 1), (nf.exports = H0())), nf.exports;
}
var s = C0(),
  cf = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd;
function q0() {
  if (nd) return W;
  nd = 1;
  var M = Symbol.for("react.transitional.element"),
    w = Symbol.for("react.portal"),
    G = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    x = Symbol.for("react.profiler"),
    C = Symbol.for("react.consumer"),
    X = Symbol.for("react.context"),
    I = Symbol.for("react.forward_ref"),
    B = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    Y = Symbol.for("react.lazy"),
    k = Symbol.iterator;
  function ea(o) {
    return o === null || typeof o != "object"
      ? null
      : ((o = (k && o[k]) || o["@@iterator"]),
        typeof o == "function" ? o : null);
  }
  var ra = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ma = Object.assign,
    Ga = {};
  function Ra(o, O, H) {
    (this.props = o),
      (this.context = O),
      (this.refs = Ga),
      (this.updater = H || ra);
  }
  (Ra.prototype.isReactComponent = {}),
    (Ra.prototype.setState = function (o, O) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, o, O, "setState");
    }),
    (Ra.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate");
    });
  function ca() {}
  ca.prototype = Ra.prototype;
  function Na(o, O, H) {
    (this.props = o),
      (this.context = O),
      (this.refs = Ga),
      (this.updater = H || ra);
  }
  var J = (Na.prototype = new ca());
  (J.constructor = Na), Ma(J, Ra.prototype), (J.isPureReactComponent = !0);
  var tl = Array.isArray,
    _ = { H: null, A: null, T: null, S: null, V: null },
    Qa = Object.prototype.hasOwnProperty;
  function F(o, O, H, j, r, S) {
    return (
      (H = S.ref),
      { $$typeof: M, type: o, key: O, ref: H !== void 0 ? H : null, props: S }
    );
  }
  function Da(o, O) {
    return F(o.type, O, void 0, void 0, void 0, o.props);
  }
  function Za(o) {
    return typeof o == "object" && o !== null && o.$$typeof === M;
  }
  function Cl(o) {
    var O = { "=": "=0", ":": "=2" };
    return (
      "$" +
      o.replace(/[=:]/g, function (H) {
        return O[H];
      })
    );
  }
  var Ha = /\/+/g;
  function da(o, O) {
    return typeof o == "object" && o !== null && o.key != null
      ? Cl("" + o.key)
      : O.toString(36);
  }
  function Dl() {}
  function ql(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (
          (typeof o.status == "string"
            ? o.then(Dl, Dl)
            : ((o.status = "pending"),
              o.then(
                function (O) {
                  o.status === "pending" &&
                    ((o.status = "fulfilled"), (o.value = O));
                },
                function (O) {
                  o.status === "pending" &&
                    ((o.status = "rejected"), (o.reason = O));
                }
              )),
          o.status)
        ) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function xa(o, O, H, j, r) {
    var S = typeof o;
    (S === "undefined" || S === "boolean") && (o = null);
    var z = !1;
    if (o === null) z = !0;
    else
      switch (S) {
        case "bigint":
        case "string":
        case "number":
          z = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case M:
            case w:
              z = !0;
              break;
            case Y:
              return (z = o._init), xa(z(o._payload), O, H, j, r);
          }
      }
    if (z)
      return (
        (r = r(o)),
        (z = j === "" ? "." + da(o, 0) : j),
        tl(r)
          ? ((H = ""),
            z != null && (H = z.replace(Ha, "$&/") + "/"),
            xa(r, O, H, "", function (ua) {
              return ua;
            }))
          : r != null &&
            (Za(r) &&
              (r = Da(
                r,
                H +
                  (r.key == null || (o && o.key === r.key)
                    ? ""
                    : ("" + r.key).replace(Ha, "$&/") + "/") +
                  z
              )),
            O.push(r)),
        1
      );
    z = 0;
    var D = j === "" ? "." : j + ":";
    if (tl(o))
      for (var U = 0; U < o.length; U++)
        (j = o[U]), (S = D + da(j, U)), (z += xa(j, O, H, S, r));
    else if (((U = ea(o)), typeof U == "function"))
      for (o = U.call(o), U = 0; !(j = o.next()).done; )
        (j = j.value), (S = D + da(j, U++)), (z += xa(j, O, H, S, r));
    else if (S === "object") {
      if (typeof o.then == "function") return xa(ql(o), O, H, j, r);
      throw (
        ((O = String(o)),
        Error(
          "Objects are not valid as a React child (found: " +
            (O === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : O) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return z;
  }
  function N(o, O, H) {
    if (o == null) return o;
    var j = [],
      r = 0;
    return (
      xa(o, j, "", "", function (S) {
        return O.call(H, S, r++);
      }),
      j
    );
  }
  function R(o) {
    if (o._status === -1) {
      var O = o._result;
      (O = O()),
        O.then(
          function (H) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 1), (o._result = H));
          },
          function (H) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 2), (o._result = H));
          }
        ),
        o._status === -1 && ((o._status = 0), (o._result = O));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var Z =
    typeof reportError == "function"
      ? reportError
      : function (o) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var O = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof o == "object" &&
                o !== null &&
                typeof o.message == "string"
                  ? String(o.message)
                  : String(o),
              error: o,
            });
            if (!window.dispatchEvent(O)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", o);
            return;
          }
          console.error(o);
        };
  function ma() {}
  return (
    (W.Children = {
      map: N,
      forEach: function (o, O, H) {
        N(
          o,
          function () {
            O.apply(this, arguments);
          },
          H
        );
      },
      count: function (o) {
        var O = 0;
        return (
          N(o, function () {
            O++;
          }),
          O
        );
      },
      toArray: function (o) {
        return (
          N(o, function (O) {
            return O;
          }) || []
        );
      },
      only: function (o) {
        if (!Za(o))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return o;
      },
    }),
    (W.Component = Ra),
    (W.Fragment = G),
    (W.Profiler = x),
    (W.PureComponent = Na),
    (W.StrictMode = h),
    (W.Suspense = B),
    (W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _),
    (W.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (o) {
        return _.H.useMemoCache(o);
      },
    }),
    (W.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (W.cloneElement = function (o, O, H) {
      if (o == null)
        throw Error(
          "The argument must be a React element, but you passed " + o + "."
        );
      var j = Ma({}, o.props),
        r = o.key,
        S = void 0;
      if (O != null)
        for (z in (O.ref !== void 0 && (S = void 0),
        O.key !== void 0 && (r = "" + O.key),
        O))
          !Qa.call(O, z) ||
            z === "key" ||
            z === "__self" ||
            z === "__source" ||
            (z === "ref" && O.ref === void 0) ||
            (j[z] = O[z]);
      var z = arguments.length - 2;
      if (z === 1) j.children = H;
      else if (1 < z) {
        for (var D = Array(z), U = 0; U < z; U++) D[U] = arguments[U + 2];
        j.children = D;
      }
      return F(o.type, r, void 0, void 0, S, j);
    }),
    (W.createContext = function (o) {
      return (
        (o = {
          $$typeof: X,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: C, _context: o }),
        o
      );
    }),
    (W.createElement = function (o, O, H) {
      var j,
        r = {},
        S = null;
      if (O != null)
        for (j in (O.key !== void 0 && (S = "" + O.key), O))
          Qa.call(O, j) &&
            j !== "key" &&
            j !== "__self" &&
            j !== "__source" &&
            (r[j] = O[j]);
      var z = arguments.length - 2;
      if (z === 1) r.children = H;
      else if (1 < z) {
        for (var D = Array(z), U = 0; U < z; U++) D[U] = arguments[U + 2];
        r.children = D;
      }
      if (o && o.defaultProps)
        for (j in ((z = o.defaultProps), z)) r[j] === void 0 && (r[j] = z[j]);
      return F(o, S, void 0, void 0, null, r);
    }),
    (W.createRef = function () {
      return { current: null };
    }),
    (W.forwardRef = function (o) {
      return { $$typeof: I, render: o };
    }),
    (W.isValidElement = Za),
    (W.lazy = function (o) {
      return { $$typeof: Y, _payload: { _status: -1, _result: o }, _init: R };
    }),
    (W.memo = function (o, O) {
      return { $$typeof: p, type: o, compare: O === void 0 ? null : O };
    }),
    (W.startTransition = function (o) {
      var O = _.T,
        H = {};
      _.T = H;
      try {
        var j = o(),
          r = _.S;
        r !== null && r(H, j),
          typeof j == "object" &&
            j !== null &&
            typeof j.then == "function" &&
            j.then(ma, Z);
      } catch (S) {
        Z(S);
      } finally {
        _.T = O;
      }
    }),
    (W.unstable_useCacheRefresh = function () {
      return _.H.useCacheRefresh();
    }),
    (W.use = function (o) {
      return _.H.use(o);
    }),
    (W.useActionState = function (o, O, H) {
      return _.H.useActionState(o, O, H);
    }),
    (W.useCallback = function (o, O) {
      return _.H.useCallback(o, O);
    }),
    (W.useContext = function (o) {
      return _.H.useContext(o);
    }),
    (W.useDebugValue = function () {}),
    (W.useDeferredValue = function (o, O) {
      return _.H.useDeferredValue(o, O);
    }),
    (W.useEffect = function (o, O, H) {
      var j = _.H;
      if (typeof H == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return j.useEffect(o, O);
    }),
    (W.useId = function () {
      return _.H.useId();
    }),
    (W.useImperativeHandle = function (o, O, H) {
      return _.H.useImperativeHandle(o, O, H);
    }),
    (W.useInsertionEffect = function (o, O) {
      return _.H.useInsertionEffect(o, O);
    }),
    (W.useLayoutEffect = function (o, O) {
      return _.H.useLayoutEffect(o, O);
    }),
    (W.useMemo = function (o, O) {
      return _.H.useMemo(o, O);
    }),
    (W.useOptimistic = function (o, O) {
      return _.H.useOptimistic(o, O);
    }),
    (W.useReducer = function (o, O, H) {
      return _.H.useReducer(o, O, H);
    }),
    (W.useRef = function (o) {
      return _.H.useRef(o);
    }),
    (W.useState = function (o) {
      return _.H.useState(o);
    }),
    (W.useSyncExternalStore = function (o, O, H) {
      return _.H.useSyncExternalStore(o, O, H);
    }),
    (W.useTransition = function () {
      return _.H.useTransition();
    }),
    (W.version = "19.1.1"),
    W
  );
}
var id;
function df() {
  return id || ((id = 1), (cf.exports = q0())), cf.exports;
}
var Ba = df(),
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
function B0() {
  return (
    cd ||
      ((cd = 1),
      (function (M) {
        function w(N, R) {
          var Z = N.length;
          N.push(R);
          a: for (; 0 < Z; ) {
            var ma = (Z - 1) >>> 1,
              o = N[ma];
            if (0 < x(o, R)) (N[ma] = R), (N[Z] = o), (Z = ma);
            else break a;
          }
        }
        function G(N) {
          return N.length === 0 ? null : N[0];
        }
        function h(N) {
          if (N.length === 0) return null;
          var R = N[0],
            Z = N.pop();
          if (Z !== R) {
            N[0] = Z;
            a: for (var ma = 0, o = N.length, O = o >>> 1; ma < O; ) {
              var H = 2 * (ma + 1) - 1,
                j = N[H],
                r = H + 1,
                S = N[r];
              if (0 > x(j, Z))
                r < o && 0 > x(S, j)
                  ? ((N[ma] = S), (N[r] = Z), (ma = r))
                  : ((N[ma] = j), (N[H] = Z), (ma = H));
              else if (r < o && 0 > x(S, Z)) (N[ma] = S), (N[r] = Z), (ma = r);
              else break a;
            }
          }
          return R;
        }
        function x(N, R) {
          var Z = N.sortIndex - R.sortIndex;
          return Z !== 0 ? Z : N.id - R.id;
        }
        if (
          ((M.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var C = performance;
          M.unstable_now = function () {
            return C.now();
          };
        } else {
          var X = Date,
            I = X.now();
          M.unstable_now = function () {
            return X.now() - I;
          };
        }
        var B = [],
          p = [],
          Y = 1,
          k = null,
          ea = 3,
          ra = !1,
          Ma = !1,
          Ga = !1,
          Ra = !1,
          ca = typeof setTimeout == "function" ? setTimeout : null,
          Na = typeof clearTimeout == "function" ? clearTimeout : null,
          J = typeof setImmediate < "u" ? setImmediate : null;
        function tl(N) {
          for (var R = G(p); R !== null; ) {
            if (R.callback === null) h(p);
            else if (R.startTime <= N)
              h(p), (R.sortIndex = R.expirationTime), w(B, R);
            else break;
            R = G(p);
          }
        }
        function _(N) {
          if (((Ga = !1), tl(N), !Ma))
            if (G(B) !== null) (Ma = !0), Qa || ((Qa = !0), da());
            else {
              var R = G(p);
              R !== null && xa(_, R.startTime - N);
            }
        }
        var Qa = !1,
          F = -1,
          Da = 5,
          Za = -1;
        function Cl() {
          return Ra ? !0 : !(M.unstable_now() - Za < Da);
        }
        function Ha() {
          if (((Ra = !1), Qa)) {
            var N = M.unstable_now();
            Za = N;
            var R = !0;
            try {
              a: {
                (Ma = !1), Ga && ((Ga = !1), Na(F), (F = -1)), (ra = !0);
                var Z = ea;
                try {
                  l: {
                    for (
                      tl(N), k = G(B);
                      k !== null && !(k.expirationTime > N && Cl());

                    ) {
                      var ma = k.callback;
                      if (typeof ma == "function") {
                        (k.callback = null), (ea = k.priorityLevel);
                        var o = ma(k.expirationTime <= N);
                        if (((N = M.unstable_now()), typeof o == "function")) {
                          (k.callback = o), tl(N), (R = !0);
                          break l;
                        }
                        k === G(B) && h(B), tl(N);
                      } else h(B);
                      k = G(B);
                    }
                    if (k !== null) R = !0;
                    else {
                      var O = G(p);
                      O !== null && xa(_, O.startTime - N), (R = !1);
                    }
                  }
                  break a;
                } finally {
                  (k = null), (ea = Z), (ra = !1);
                }
                R = void 0;
              }
            } finally {
              R ? da() : (Qa = !1);
            }
          }
        }
        var da;
        if (typeof J == "function")
          da = function () {
            J(Ha);
          };
        else if (typeof MessageChannel < "u") {
          var Dl = new MessageChannel(),
            ql = Dl.port2;
          (Dl.port1.onmessage = Ha),
            (da = function () {
              ql.postMessage(null);
            });
        } else
          da = function () {
            ca(Ha, 0);
          };
        function xa(N, R) {
          F = ca(function () {
            N(M.unstable_now());
          }, R);
        }
        (M.unstable_IdlePriority = 5),
          (M.unstable_ImmediatePriority = 1),
          (M.unstable_LowPriority = 4),
          (M.unstable_NormalPriority = 3),
          (M.unstable_Profiling = null),
          (M.unstable_UserBlockingPriority = 2),
          (M.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (M.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Da = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (M.unstable_getCurrentPriorityLevel = function () {
            return ea;
          }),
          (M.unstable_next = function (N) {
            switch (ea) {
              case 1:
              case 2:
              case 3:
                var R = 3;
                break;
              default:
                R = ea;
            }
            var Z = ea;
            ea = R;
            try {
              return N();
            } finally {
              ea = Z;
            }
          }),
          (M.unstable_requestPaint = function () {
            Ra = !0;
          }),
          (M.unstable_runWithPriority = function (N, R) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var Z = ea;
            ea = N;
            try {
              return R();
            } finally {
              ea = Z;
            }
          }),
          (M.unstable_scheduleCallback = function (N, R, Z) {
            var ma = M.unstable_now();
            switch (
              (typeof Z == "object" && Z !== null
                ? ((Z = Z.delay),
                  (Z = typeof Z == "number" && 0 < Z ? ma + Z : ma))
                : (Z = ma),
              N)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (o = Z + o),
              (N = {
                id: Y++,
                callback: R,
                priorityLevel: N,
                startTime: Z,
                expirationTime: o,
                sortIndex: -1,
              }),
              Z > ma
                ? ((N.sortIndex = Z),
                  w(p, N),
                  G(B) === null &&
                    N === G(p) &&
                    (Ga ? (Na(F), (F = -1)) : (Ga = !0), xa(_, Z - ma)))
                : ((N.sortIndex = o),
                  w(B, N),
                  Ma || ra || ((Ma = !0), Qa || ((Qa = !0), da()))),
              N
            );
          }),
          (M.unstable_shouldYield = Cl),
          (M.unstable_wrapCallback = function (N) {
            var R = ea;
            return function () {
              var Z = ea;
              ea = R;
              try {
                return N.apply(this, arguments);
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
function Y0() {
  return fd || ((fd = 1), (sf.exports = B0())), sf.exports;
}
var of = { exports: {} },
  al = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sd;
function X0() {
  if (sd) return al;
  sd = 1;
  var M = df();
  function w(B) {
    var p = "https://react.dev/errors/" + B;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Y = 2; Y < arguments.length; Y++)
        p += "&args[]=" + encodeURIComponent(arguments[Y]);
    }
    return (
      "Minified React error #" +
      B +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function G() {}
  var h = {
      d: {
        f: G,
        r: function () {
          throw Error(w(522));
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
  function C(B, p, Y) {
    var k =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: x,
      key: k == null ? null : "" + k,
      children: B,
      containerInfo: p,
      implementation: Y,
    };
  }
  var X = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function I(B, p) {
    if (B === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (al.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
    (al.createPortal = function (B, p) {
      var Y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(w(299));
      return C(B, p, null, Y);
    }),
    (al.flushSync = function (B) {
      var p = X.T,
        Y = h.p;
      try {
        if (((X.T = null), (h.p = 2), B)) return B();
      } finally {
        (X.T = p), (h.p = Y), h.d.f();
      }
    }),
    (al.preconnect = function (B, p) {
      typeof B == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        h.d.C(B, p));
    }),
    (al.prefetchDNS = function (B) {
      typeof B == "string" && h.d.D(B);
    }),
    (al.preinit = function (B, p) {
      if (typeof B == "string" && p && typeof p.as == "string") {
        var Y = p.as,
          k = I(Y, p.crossOrigin),
          ea = typeof p.integrity == "string" ? p.integrity : void 0,
          ra = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        Y === "style"
          ? h.d.S(B, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: k,
              integrity: ea,
              fetchPriority: ra,
            })
          : Y === "script" &&
            h.d.X(B, {
              crossOrigin: k,
              integrity: ea,
              fetchPriority: ra,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (al.preinitModule = function (B, p) {
      if (typeof B == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var Y = I(p.as, p.crossOrigin);
            h.d.M(B, {
              crossOrigin: Y,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && h.d.M(B);
    }),
    (al.preload = function (B, p) {
      if (
        typeof B == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var Y = p.as,
          k = I(Y, p.crossOrigin);
        h.d.L(B, Y, {
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
    (al.preloadModule = function (B, p) {
      if (typeof B == "string")
        if (p) {
          var Y = I(p.as, p.crossOrigin);
          h.d.m(B, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: Y,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else h.d.m(B);
    }),
    (al.requestFormReset = function (B) {
      h.d.r(B);
    }),
    (al.unstable_batchedUpdates = function (B, p) {
      return B(p);
    }),
    (al.useFormState = function (B, p, Y) {
      return X.H.useFormState(B, p, Y);
    }),
    (al.useFormStatus = function () {
      return X.H.useHostTransitionStatus();
    }),
    (al.version = "19.1.1"),
    al
  );
}
var rd;
function G0() {
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
      } catch (w) {
        console.error(w);
      }
  }
  return M(), (of.exports = X0()), of.exports;
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
function Q0() {
  if (od) return xu;
  od = 1;
  var M = Y0(),
    w = df(),
    G = G0();
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
  function x(a) {
    return !(!a || (a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11));
  }
  function C(a) {
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
  function X(a) {
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
  function I(a) {
    if (C(a) !== a) throw Error(h(188));
  }
  function B(a) {
    var l = a.alternate;
    if (!l) {
      if (((l = C(a)), l === null)) throw Error(h(188));
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
          if (n === t) return I(u), a;
          if (n === e) return I(u), l;
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
  function p(a) {
    var l = a.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return a;
    for (a = a.child; a !== null; ) {
      if (((l = p(a)), l !== null)) return l;
      a = a.sibling;
    }
    return null;
  }
  var Y = Object.assign,
    k = Symbol.for("react.element"),
    ea = Symbol.for("react.transitional.element"),
    ra = Symbol.for("react.portal"),
    Ma = Symbol.for("react.fragment"),
    Ga = Symbol.for("react.strict_mode"),
    Ra = Symbol.for("react.profiler"),
    ca = Symbol.for("react.provider"),
    Na = Symbol.for("react.consumer"),
    J = Symbol.for("react.context"),
    tl = Symbol.for("react.forward_ref"),
    _ = Symbol.for("react.suspense"),
    Qa = Symbol.for("react.suspense_list"),
    F = Symbol.for("react.memo"),
    Da = Symbol.for("react.lazy"),
    Za = Symbol.for("react.activity"),
    Cl = Symbol.for("react.memo_cache_sentinel"),
    Ha = Symbol.iterator;
  function da(a) {
    return a === null || typeof a != "object"
      ? null
      : ((a = (Ha && a[Ha]) || a["@@iterator"]),
        typeof a == "function" ? a : null);
  }
  var Dl = Symbol.for("react.client.reference");
  function ql(a) {
    if (a == null) return null;
    if (typeof a == "function")
      return a.$$typeof === Dl ? null : a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case Ma:
        return "Fragment";
      case Ra:
        return "Profiler";
      case Ga:
        return "StrictMode";
      case _:
        return "Suspense";
      case Qa:
        return "SuspenseList";
      case Za:
        return "Activity";
    }
    if (typeof a == "object")
      switch (a.$$typeof) {
        case ra:
          return "Portal";
        case J:
          return (a.displayName || "Context") + ".Provider";
        case Na:
          return (a._context.displayName || "Context") + ".Consumer";
        case tl:
          var l = a.render;
          return (
            (a = a.displayName),
            a ||
              ((a = l.displayName || l.name || ""),
              (a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef")),
            a
          );
        case F:
          return (
            (l = a.displayName || null), l !== null ? l : ql(a.type) || "Memo"
          );
        case Da:
          (l = a._payload), (a = a._init);
          try {
            return ql(a(l));
          } catch {}
      }
    return null;
  }
  var xa = Array.isArray,
    N = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    R = G.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = { pending: !1, data: null, method: null, action: null },
    ma = [],
    o = -1;
  function O(a) {
    return { current: a };
  }
  function H(a) {
    0 > o || ((a.current = ma[o]), (ma[o] = null), o--);
  }
  function j(a, l) {
    o++, (ma[o] = a.current), (a.current = l);
  }
  var r = O(null),
    S = O(null),
    z = O(null),
    D = O(null);
  function U(a, l) {
    switch ((j(z, l), j(S, a), j(r, null), l.nodeType)) {
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
    H(r), j(r, a);
  }
  function ua() {
    H(r), H(S), H(z);
  }
  function na(a) {
    a.memoizedState !== null && j(D, a);
    var l = r.current,
      t = Uo(l, a.type);
    l !== t && (j(S, a), j(r, t));
  }
  function $(a) {
    S.current === a && (H(r), H(S)),
      D.current === a && (H(D), (Eu._currentValue = Z));
  }
  var ga = Object.prototype.hasOwnProperty,
    ha = M.unstable_scheduleCallback,
    fa = M.unstable_cancelCallback,
    Fa = M.unstable_shouldYield,
    at = M.unstable_requestPaint,
    el = M.unstable_now,
    je = M.unstable_getCurrentPriorityLevel,
    Vt = M.unstable_ImmediatePriority,
    Kt = M.unstable_UserBlockingPriority,
    lt = M.unstable_NormalPriority,
    Ue = M.unstable_LowPriority,
    ju = M.unstable_IdlePriority,
    Bl = M.log,
    Uu = M.unstable_setDisableYieldValue,
    Yl = null,
    wa = null;
  function tt(a) {
    if (
      (typeof Bl == "function" && Uu(a),
      wa && typeof wa.setStrictMode == "function")
    )
      try {
        wa.setStrictMode(Yl, a);
      } catch {}
  }
  var sl = Math.clz32 ? Math.clz32 : zd,
    bd = Math.log,
    Sd = Math.LN2;
  function zd(a) {
    return (a >>>= 0), a === 0 ? 32 : (31 - ((bd(a) / Sd) | 0)) | 0;
  }
  var Ru = 256,
    Hu = 4194304;
  function Ot(a) {
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
            ? (u = Ot(e))
            : ((i &= c),
              i !== 0
                ? (u = Ot(i))
                : t || ((t = c & ~a), t !== 0 && (u = Ot(t)))))
        : ((c = e & ~n),
          c !== 0
            ? (u = Ot(c))
            : i !== 0
            ? (u = Ot(i))
            : t || ((t = e & ~a), t !== 0 && (u = Ot(t)))),
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
  function Nd(a, l, t, e, u, n) {
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
      var A = 31 - sl(t),
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
    var e = 31 - sl(l);
    (a.entangledLanes |= l),
      (a.entanglements[e] = a.entanglements[e] | 1073741824 | (t & 4194090));
  }
  function yf(a, l) {
    var t = (a.entangledLanes |= l);
    for (a = a.entanglements; t; ) {
      var e = 31 - sl(t),
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
    var a = R.p;
    return a !== 0 ? a : ((a = window.event), a === void 0 ? 32 : Fo(a.type));
  }
  function Ad(a, l) {
    var t = R.p;
    try {
      return (R.p = a), l();
    } finally {
      R.p = t;
    }
  }
  var et = Math.random().toString(36).slice(2),
    Ia = "__reactFiber$" + et,
    ul = "__reactProps$" + et,
    Jt = "__reactContainer$" + et,
    Fn = "__reactEvents$" + et,
    Ed = "__reactListeners$" + et,
    Td = "__reactHandles$" + et,
    bf = "__reactResources$" + et,
    Ce = "__reactMarker$" + et;
  function In(a) {
    delete a[Ia], delete a[ul], delete a[Fn], delete a[Ed], delete a[Td];
  }
  function wt(a) {
    var l = a[Ia];
    if (l) return l;
    for (var t = a.parentNode; t; ) {
      if ((l = t[Jt] || t[Ia])) {
        if (
          ((t = l.alternate),
          l.child !== null || (t !== null && t.child !== null))
        )
          for (a = qo(a); a !== null; ) {
            if ((t = a[Ia])) return t;
            a = qo(a);
          }
        return l;
      }
      (a = t), (t = a.parentNode);
    }
    return null;
  }
  function $t(a) {
    if ((a = a[Ia] || a[Jt])) {
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
  function La(a) {
    a[Ce] = !0;
  }
  var Sf = new Set(),
    zf = {};
  function _t(a, l) {
    kt(a, l), kt(a + "Capture", l);
  }
  function kt(a, l) {
    for (zf[a] = l, a = 0; a < l.length; a++) Sf.add(l[a]);
  }
  var Od = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    pf = {},
    Nf = {};
  function _d(a) {
    return ga.call(Nf, a)
      ? !0
      : ga.call(pf, a)
      ? !1
      : Od.test(a)
      ? (Nf[a] = !0)
      : ((pf[a] = !0), !1);
  }
  function qu(a, l, t) {
    if (_d(l))
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
  var Pn, Af;
  function Ft(a) {
    if (Pn === void 0)
      try {
        throw Error();
      } catch (t) {
        var l = t.stack.trim().match(/\n( *(at )?)/);
        (Pn = (l && l[1]) || ""),
          (Af =
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
      Af
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
  function gl(a) {
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
  function Of(a) {
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
  function bl(a) {
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
            (a.value = "" + gl(l))
          : a.value !== "" + gl(l) && (a.value = "" + gl(l))
        : (i !== "submit" && i !== "reset") || a.removeAttribute("value"),
      l != null
        ? ei(a, i, gl(l))
        : t != null
        ? ei(a, i, gl(t))
        : e != null && a.removeAttribute("value"),
      u == null && n != null && (a.defaultChecked = !!n),
      u != null &&
        (a.checked = u && typeof u != "function" && typeof u != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (a.name = "" + gl(c))
        : a.removeAttribute("name");
  }
  function _f(a, l, t, e, u, n, i, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (a.type = n),
      l != null || t != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || l != null)) return;
      (t = t != null ? "" + gl(t) : ""),
        (l = l != null ? "" + gl(l) : t),
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
      for (t = "" + gl(t), l = null, u = 0; u < a.length; u++) {
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
      ((l = "" + gl(l)), l !== a.value && (a.value = l), t == null)
    ) {
      a.defaultValue !== l && (a.defaultValue = l);
      return;
    }
    a.defaultValue = t != null ? "" + gl(t) : "";
  }
  function Df(a, l, t, e) {
    if (l == null) {
      if (e != null) {
        if (t != null) throw Error(h(92));
        if (xa(e)) {
          if (1 < e.length) throw Error(h(93));
          e = e[0];
        }
        t = e;
      }
      t == null && (t = ""), (l = t);
    }
    (t = gl(l)),
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
      var t = a[ul] || null;
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
                'input[name="' + bl("" + l) + '"][type="radio"]'
              ),
                l = 0;
              l < t.length;
              l++
            ) {
              var e = t[l];
              if (e !== a && e.form === a.form) {
                var u = e[ul] || null;
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
              (e = t[l]), e.form === a.form && Of(e);
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
          (On(), ae && ((l = ae), (a = le), (le = ae = null), Uf(l), a)))
      )
        for (l = 0; l < a.length; l++) Uf(a[l]);
    }
  }
  function Be(a, l) {
    var t = a.stateNode;
    if (t === null) return null;
    var e = t[ul] || null;
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
  function Lu() {
    return !0;
  }
  function Cf() {
    return !1;
  }
  function nl(a) {
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
          ? Lu
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
            (this.isDefaultPrevented = Lu));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            (this.isPropagationStopped = Lu));
        },
        persist: function () {},
        isPersistent: Lu,
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
    Vu = nl(Mt),
    Xe = Y({}, Mt, { view: 0, detail: 0 }),
    Hd = nl(Xe),
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
    qf = nl(Ku),
    Cd = Y({}, Ku, { dataTransfer: 0 }),
    qd = nl(Cd),
    Bd = Y({}, Xe, { relatedTarget: 0 }),
    di = nl(Bd),
    Yd = Y({}, Mt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xd = nl(Yd),
    Gd = Y({}, Mt, {
      clipboardData: function (a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      },
    }),
    Qd = nl(Gd),
    Zd = Y({}, Mt, { data: 0 }),
    Bf = nl(Zd),
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
    Vd = {
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
          var l = Ld[a.key] || a.key;
          if (l !== "Unidentified") return l;
        }
        return a.type === "keypress"
          ? ((a = Zu(a)), a === 13 ? "Enter" : String.fromCharCode(a))
          : a.type === "keydown" || a.type === "keyup"
          ? Vd[a.keyCode] || "Unidentified"
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
    $d = nl(wd),
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
    Yf = nl(Wd),
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
    Fd = nl(kd),
    Id = Y({}, Mt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pd = nl(Id),
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
    lm = nl(am),
    tm = Y({}, Mt, { newState: 0, oldState: 0 }),
    em = nl(tm),
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
  function Lf(a) {
    return (a = a.detail), typeof a == "object" && "data" in a ? a.data : null;
  }
  var te = !1;
  function im(a, l) {
    switch (a) {
      case "compositionend":
        return Lf(l);
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
  function Vf(a) {
    var l = a && a.nodeName && a.nodeName.toLowerCase();
    return l === "input" ? !!fm[a.type] : l === "textarea";
  }
  function Kf(a, l, t, e) {
    ae ? (le ? le.push(e) : (le = [e])) : (ae = e),
      (l = Un(l, "onChange")),
      0 < l.length &&
        ((t = new Vu("onChange", "change", null, t, e)),
        a.push({ event: t, listeners: l }));
  }
  var Ze = null,
    Le = null;
  function sm(a) {
    Oo(a, 0);
  }
  function Ju(a) {
    var l = qe(a);
    if (Of(l)) return a;
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
    Ze && (Ze.detachEvent("onpropertychange", kf), (Le = Ze = null));
  }
  function kf(a) {
    if (a.propertyName === "value" && Ju(Le)) {
      var l = [];
      Kf(l, Le, a, ii(a)), Rf(sm, l);
    }
  }
  function rm(a, l, t) {
    a === "focusin"
      ? (Wf(), (Ze = l), (Le = t), Ze.attachEvent("onpropertychange", kf))
      : a === "focusout" && Wf();
  }
  function om(a) {
    if (a === "selectionchange" || a === "keyup" || a === "keydown")
      return Ju(Le);
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
  var rl = typeof Object.is == "function" ? Object.is : hm;
  function Ve(a, l) {
    if (rl(a, l)) return !0;
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
      if (!ga.call(l, u) || !rl(a[u], l[u])) return !1;
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
      (Ke && Ve(Ke, e)) ||
        ((Ke = e),
        (e = Un(bi, "onSelect")),
        0 < e.length &&
          ((l = new Vu("onSelect", "select", null, l, t)),
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
  function Ol(a, l) {
    cs.set(a, l), _t(l, [a]);
  }
  var fs = new WeakMap();
  function Sl(a, l) {
    if (typeof a == "object" && a !== null) {
      var t = fs.get(a);
      return t !== void 0
        ? t
        : ((l = { value: a, source: l, stack: Ef(l) }), fs.set(a, l), l);
    }
    return { value: a, source: l, stack: Ef(l) };
  }
  var zl = [],
    ne = 0,
    Ni = 0;
  function wu() {
    for (var a = ne, l = (Ni = ne = 0); l < a; ) {
      var t = zl[l];
      zl[l++] = null;
      var e = zl[l];
      zl[l++] = null;
      var u = zl[l];
      zl[l++] = null;
      var n = zl[l];
      if (((zl[l++] = null), e !== null && u !== null)) {
        var i = e.pending;
        i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (e.pending = u);
      }
      n !== 0 && ss(t, u, n);
    }
  }
  function $u(a, l, t, e) {
    (zl[ne++] = a),
      (zl[ne++] = l),
      (zl[ne++] = t),
      (zl[ne++] = e),
      (Ni |= e),
      (a.lanes |= e),
      (a = a.alternate),
      a !== null && (a.lanes |= e);
  }
  function Ai(a, l, t, e) {
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
          ((u = 31 - sl(t)),
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
  function ol(a, l, t, e) {
    return new Sm(a, l, t, e);
  }
  function Ei(a) {
    return (a = a.prototype), !(!a || !a.isReactComponent);
  }
  function Ql(a, l) {
    var t = a.alternate;
    return (
      t === null
        ? ((t = ol(a.tag, l, a.key, a.mode)),
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
      i = p0(a, t, r.current)
        ? 26
        : a === "html" || a === "head" || a === "body"
        ? 27
        : 5;
    else
      a: switch (a) {
        case Za:
          return (a = ol(31, t, l, u)), (a.elementType = Za), (a.lanes = n), a;
        case Ma:
          return jt(t.children, u, n, l);
        case Ga:
          (i = 8), (u |= 24);
          break;
        case Ra:
          return (
            (a = ol(12, t, l, u | 2)), (a.elementType = Ra), (a.lanes = n), a
          );
        case _:
          return (a = ol(13, t, l, u)), (a.elementType = _), (a.lanes = n), a;
        case Qa:
          return (a = ol(19, t, l, u)), (a.elementType = Qa), (a.lanes = n), a;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case ca:
              case J:
                i = 10;
                break a;
              case Na:
                i = 9;
                break a;
              case tl:
                i = 11;
                break a;
              case F:
                i = 14;
                break a;
              case Da:
                (i = 16), (e = null);
                break a;
            }
          (i = 29),
            (t = Error(h(130, a === null ? "null" : typeof a, ""))),
            (e = null);
      }
    return (
      (l = ol(i, t, l, u)), (l.elementType = a), (l.type = e), (l.lanes = n), l
    );
  }
  function jt(a, l, t, e) {
    return (a = ol(7, a, e, l)), (a.lanes = t), a;
  }
  function Ti(a, l, t) {
    return (a = ol(6, a, null, l)), (a.lanes = t), a;
  }
  function Oi(a, l, t) {
    return (
      (l = ol(4, a.children !== null ? a.children : [], a.key, l)),
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
    pl = [],
    Nl = 0,
    Ut = null,
    Zl = 1,
    Ll = "";
  function Rt(a, l) {
    (fe[se++] = Iu), (fe[se++] = Fu), (Fu = a), (Iu = l);
  }
  function os(a, l, t) {
    (pl[Nl++] = Zl), (pl[Nl++] = Ll), (pl[Nl++] = Ut), (Ut = a);
    var e = Zl;
    a = Ll;
    var u = 32 - sl(e) - 1;
    (e &= ~(1 << u)), (t += 1);
    var n = 32 - sl(l) + u;
    if (30 < n) {
      var i = u - (u % 5);
      (n = (e & ((1 << i) - 1)).toString(32)),
        (e >>= i),
        (u -= i),
        (Zl = (1 << (32 - sl(l) + u)) | (t << u) | e),
        (Ll = n + a);
    } else (Zl = (1 << n) | (t << u) | e), (Ll = a);
  }
  function _i(a) {
    a.return !== null && (Rt(a, 1), os(a, 1, 0));
  }
  function Mi(a) {
    for (; a === Fu; )
      (Fu = fe[--se]), (fe[se] = null), (Iu = fe[--se]), (fe[se] = null);
    for (; a === Ut; )
      (Ut = pl[--Nl]),
        (pl[Nl] = null),
        (Ll = pl[--Nl]),
        (pl[Nl] = null),
        (Zl = pl[--Nl]),
        (pl[Nl] = null);
  }
  var ll = null,
    Oa = null,
    oa = !1,
    Ht = null,
    xl = !1,
    Di = Error(h(519));
  function Ct(a) {
    var l = Error(h(418, ""));
    throw ($e(Sl(l, a)), Di);
  }
  function ds(a) {
    var l = a.stateNode,
      t = a.type,
      e = a.memoizedProps;
    switch (((l[Ia] = a), (l[ul] = e), t)) {
      case "dialog":
        ta("cancel", l), ta("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        ta("load", l);
        break;
      case "video":
      case "audio":
        for (t = 0; t < bu.length; t++) ta(bu[t], l);
        break;
      case "source":
        ta("error", l);
        break;
      case "img":
      case "image":
      case "link":
        ta("error", l), ta("load", l);
        break;
      case "details":
        ta("toggle", l);
        break;
      case "input":
        ta("invalid", l),
          _f(
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
        ta("invalid", l);
        break;
      case "textarea":
        ta("invalid", l), Df(l, e.value, e.defaultValue, e.children), Yu(l);
    }
    (t = e.children),
      (typeof t != "string" && typeof t != "number" && typeof t != "bigint") ||
      l.textContent === "" + t ||
      e.suppressHydrationWarning === !0 ||
      xo(l.textContent, t)
        ? (e.popover != null && (ta("beforetoggle", l), ta("toggle", l)),
          e.onScroll != null && ta("scroll", l),
          e.onScrollEnd != null && ta("scrollend", l),
          e.onClick != null && (l.onclick = Rn),
          (l = !0))
        : (l = !1),
      l || Ct(a);
  }
  function ms(a) {
    for (ll = a.return; ll; )
      switch (ll.tag) {
        case 5:
        case 13:
          xl = !1;
          return;
        case 27:
        case 3:
          xl = !0;
          return;
        default:
          ll = ll.return;
      }
  }
  function Je(a) {
    if (a !== ll) return !1;
    if (!oa) return ms(a), (oa = !0), !1;
    var l = a.tag,
      t;
    if (
      ((t = l !== 3 && l !== 27) &&
        ((t = l === 5) &&
          ((t = a.type),
          (t =
            !(t !== "form" && t !== "button") || Kc(a.type, a.memoizedProps))),
        (t = !t)),
      t && Oa && Ct(a),
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
                Oa = Ml(a.nextSibling);
                break a;
              }
              l--;
            } else (t !== "$" && t !== "$!" && t !== "$?") || l++;
          a = a.nextSibling;
        }
        Oa = null;
      }
    } else
      l === 27
        ? ((l = Oa), zt(a.type) ? ((a = Wc), (Wc = null), (Oa = a)) : (Oa = l))
        : (Oa = ll ? Ml(a.stateNode.nextSibling) : null);
    return !0;
  }
  function we() {
    (Oa = ll = null), (oa = !1);
  }
  function hs() {
    var a = Ht;
    return (
      a !== null &&
        (fl === null ? (fl = a) : fl.push.apply(fl, a), (Ht = null)),
      a
    );
  }
  function $e(a) {
    Ht === null ? (Ht = [a]) : Ht.push(a);
  }
  var xi = O(null),
    qt = null,
    Vl = null;
  function nt(a, l, t) {
    j(xi, l._currentValue), (l._currentValue = t);
  }
  function Kl(a) {
    (a._currentValue = xi.current), H(xi);
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
          rl(u.pendingProps.value, i.value) ||
            (a !== null ? a.push(c) : (a = [c]));
        }
      } else if (u === D.current) {
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
      if (!rl(a.context._currentValue, a.memoizedValue)) return !0;
      a = a.next;
    }
    return !1;
  }
  function Bt(a) {
    (qt = a),
      (Vl = null),
      (a = a.dependencies),
      a !== null && (a.firstContext = null);
  }
  function Pa(a) {
    return vs(qt, a);
  }
  function an(a, l) {
    return qt === null && Bt(a), vs(a, l);
  }
  function vs(a, l) {
    var t = l._currentValue;
    if (((l = { context: l, memoizedValue: t, next: null }), Vl === null)) {
      if (a === null) throw Error(h(308));
      (Vl = l),
        (a.dependencies = { lanes: 0, firstContext: l }),
        (a.flags |= 524288);
    } else Vl = Vl.next = l;
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
    Nm = M.unstable_NormalPriority,
    Ya = {
      $$typeof: J,
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
        pm(Nm, function () {
          a.controller.abort();
        });
  }
  var Fe = null,
    Hi = 0,
    re = 0,
    oe = null;
  function Am(a, l) {
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
  var gs = N.S;
  N.S = function (a, l) {
    typeof l == "object" &&
      l !== null &&
      typeof l.then == "function" &&
      Am(a, l),
      gs !== null && gs(a, l);
  };
  var Yt = O(null);
  function Ci() {
    var a = Yt.current;
    return a !== null ? a : Aa.pooledCache;
  }
  function ln(a, l) {
    l === null ? j(Yt, Yt.current) : j(Yt, l.pool);
  }
  function bs() {
    var a = Ci();
    return a === null ? null : { parent: Ya._currentValue, pool: a };
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
        throw ((a = l.reason), As(a), a);
      default:
        if (typeof l.status == "string") l.then(en, en);
        else {
          if (((a = Aa), a !== null && 100 < a.shellSuspendCounter))
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
            throw ((a = l.reason), As(a), a);
        }
        throw ((Pe = l), Ie);
    }
  }
  var Pe = null;
  function Ns() {
    if (Pe === null) throw Error(h(459));
    var a = Pe;
    return (Pe = null), a;
  }
  function As(a) {
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
    if (((e = e.shared), (va & 2) !== 0)) {
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
        if (b ? (ia & g) === g : (e & g) === g) {
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
              L = c;
            g = l;
            var za = t;
            switch (L.tag) {
              case 1:
                if (((K = L.payload), typeof K == "function")) {
                  T = K.call(za, T, g);
                  break a;
                }
                T = K;
                break a;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = L.payload),
                  (g = typeof K == "function" ? K.call(za, T, g) : K),
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
  var de = O(null),
    un = O(0);
  function Os(a, l) {
    (a = Il), j(un, a), j(de, l), (Il = a | l.baseLanes);
  }
  function Qi() {
    j(un, Il), j(de, de.current);
  }
  function Zi() {
    (Il = un.current), H(de), H(un);
  }
  var st = 0,
    P = null,
    ba = null,
    Ca = null,
    nn = !1,
    me = !1,
    Xt = !1,
    cn = 0,
    eu = 0,
    he = null,
    Tm = 0;
  function ja() {
    throw Error(h(321));
  }
  function Li(a, l) {
    if (l === null) return !1;
    for (var t = 0; t < l.length && t < a.length; t++)
      if (!rl(a[t], l[t])) return !1;
    return !0;
  }
  function Vi(a, l, t, e, u, n) {
    return (
      (st = n),
      (P = l),
      (l.memoizedState = null),
      (l.updateQueue = null),
      (l.lanes = 0),
      (N.H = a === null || a.memoizedState === null ? sr : rr),
      (Xt = !1),
      (n = t(e, u)),
      (Xt = !1),
      me && (n = Ms(l, t, e, u)),
      _s(a),
      n
    );
  }
  function _s(a) {
    N.H = mn;
    var l = ba !== null && ba.next !== null;
    if (((st = 0), (Ca = ba = P = null), (nn = !1), (eu = 0), (he = null), l))
      throw Error(h(300));
    a === null ||
      Va ||
      ((a = a.dependencies), a !== null && Pu(a) && (Va = !0));
  }
  function Ms(a, l, t, e) {
    P = a;
    var u = 0;
    do {
      if ((me && (he = null), (eu = 0), (me = !1), 25 <= u))
        throw Error(h(301));
      if (((u += 1), (Ca = ba = null), a.updateQueue != null)) {
        var n = a.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (N.H = Um), (n = l(t, e));
    } while (me);
    return n;
  }
  function Om() {
    var a = N.H,
      l = a.useState()[0];
    return (
      (l = typeof l.then == "function" ? uu(l) : l),
      (a = a.useState()[0]),
      (ba !== null ? ba.memoizedState : null) !== a && (P.flags |= 1024),
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
    (st = 0), (Ca = ba = P = null), (me = !1), (eu = cn = 0), (he = null);
  }
  function il() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ca === null ? (P.memoizedState = Ca = a) : (Ca = Ca.next = a), Ca;
  }
  function qa() {
    if (ba === null) {
      var a = P.alternate;
      a = a !== null ? a.memoizedState : null;
    } else a = ba.next;
    var l = Ca === null ? P.memoizedState : Ca.next;
    if (l !== null) (Ca = l), (ba = a);
    else {
      if (a === null)
        throw P.alternate === null ? Error(h(467)) : Error(h(310));
      (ba = a),
        (a = {
          memoizedState: ba.memoizedState,
          baseState: ba.baseState,
          baseQueue: ba.baseQueue,
          queue: ba.queue,
          next: null,
        }),
        Ca === null ? (P.memoizedState = Ca = a) : (Ca = Ca.next = a);
    }
    return Ca;
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
      (l = P),
      (Ca === null ? l.memoizedState : Ca.next) === null &&
        ((l = l.alternate),
        (N.H = l === null || l.memoizedState === null ? sr : rr)),
      a
    );
  }
  function fn(a) {
    if (a !== null && typeof a == "object") {
      if (typeof a.then == "function") return uu(a);
      if (a.$$typeof === J) return Pa(a);
    }
    throw Error(h(438, String(a)));
  }
  function Wi(a) {
    var l = null,
      t = P.updateQueue;
    if ((t !== null && (l = t.memoCache), l == null)) {
      var e = P.alternate;
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
      t === null && ((t = $i()), (P.updateQueue = t)),
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
    var l = qa();
    return ki(l, ba, a);
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
        if (T !== y.lane ? (ia & T) === T : (st & T) === T) {
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
              (P.lanes |= g),
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
            (P.lanes |= T),
            (yt |= T);
        y = y.next;
      } while (y !== null && y !== l);
      if (
        (f === null ? (i = n) : (f.next = c),
        !rl(n, a.memoizedState) && ((Va = !0), A && ((t = oe), t !== null)))
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
    var l = qa(),
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
      rl(n, l.memoizedState) || (Va = !0),
        (l.memoizedState = n),
        l.baseQueue === null && (l.baseState = n),
        (t.lastRenderedState = n);
    }
    return [n, e];
  }
  function Ds(a, l, t) {
    var e = P,
      u = qa(),
      n = oa;
    if (n) {
      if (t === void 0) throw Error(h(407));
      t = t();
    } else t = l();
    var i = !rl((ba || u).memoizedState, t);
    i && ((u.memoizedState = t), (Va = !0)), (u = u.queue);
    var c = Us.bind(null, e, u, a);
    if (
      (nu(2048, 8, c, [a]),
      u.getSnapshot !== l || i || (Ca !== null && Ca.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        ve(9, rn(), js.bind(null, e, u, t, l), null),
        Aa === null)
      )
        throw Error(h(349));
      n || (st & 124) !== 0 || xs(e, l, t);
    }
    return t;
  }
  function xs(a, l, t) {
    (a.flags |= 16384),
      (a = { getSnapshot: l, value: t }),
      (l = P.updateQueue),
      l === null
        ? ((l = $i()), (P.updateQueue = l), (l.stores = [a]))
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
      return !rl(a, t);
    } catch {
      return !0;
    }
  }
  function Hs(a) {
    var l = ie(a, 2);
    l !== null && yl(l, a, 2);
  }
  function Ii(a) {
    var l = il();
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
    return (a.baseState = t), ki(a, ba, typeof e == "function" ? e : Jl);
  }
  function _m(a, l, t, e, u) {
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
      N.T !== null ? t(!0) : (n.isTransition = !1),
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
      var n = N.T,
        i = {};
      N.T = i;
      try {
        var c = t(u, e),
          f = N.S;
        f !== null && f(i, c), Bs(a, l, c);
      } catch (y) {
        Pi(a, l, y);
      } finally {
        N.T = n;
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
    if (oa) {
      var t = Aa.formState;
      if (t !== null) {
        a: {
          var e = P;
          if (oa) {
            if (Oa) {
              l: {
                for (var u = Oa, n = xl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (((u = Ml(u.nextSibling)), u === null)) {
                    u = null;
                    break l;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (Oa = Ml(u.nextSibling)), (e = u.data === "F!");
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
      (t = il()),
      (t.memoizedState = t.baseState = l),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gs,
        lastRenderedState: l,
      }),
      (t.queue = e),
      (t = ir.bind(null, P, e)),
      (e.dispatch = t),
      (e = Ii(!1)),
      (n = uc.bind(null, P, !1, e.queue)),
      (e = il()),
      (u = { state: l, dispatch: null, action: a, pending: null }),
      (e.queue = u),
      (t = _m.bind(null, P, u, n, t)),
      (u.dispatch = t),
      (e.memoizedState = a),
      [l, t, !1]
    );
  }
  function Zs(a) {
    var l = qa();
    return Ls(l, ba, a);
  }
  function Ls(a, l, t) {
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
    l = qa();
    var u = l.queue,
      n = u.dispatch;
    return (
      t !== l.memoizedState &&
        ((P.flags |= 2048), ve(9, rn(), Mm.bind(null, u, t), null)),
      [e, n, a]
    );
  }
  function Mm(a, l) {
    a.action = l;
  }
  function Vs(a) {
    var l = qa(),
      t = ba;
    if (t !== null) return Ls(l, t, a);
    qa(), (l = l.memoizedState), (t = qa());
    var e = t.queue.dispatch;
    return (t.memoizedState = a), [l, e, !1];
  }
  function ve(a, l, t, e) {
    return (
      (a = { tag: a, create: t, deps: e, inst: l, next: null }),
      (l = P.updateQueue),
      l === null && ((l = $i()), (P.updateQueue = l)),
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
    return qa().memoizedState;
  }
  function on(a, l, t, e) {
    var u = il();
    (e = e === void 0 ? null : e),
      (P.flags |= a),
      (u.memoizedState = ve(1 | l, rn(), t, e));
  }
  function nu(a, l, t, e) {
    var u = qa();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    ba !== null && e !== null && Li(e, ba.memoizedState.deps)
      ? (u.memoizedState = ve(l, n, t, e))
      : ((P.flags |= a), (u.memoizedState = ve(1 | l, n, t, e)));
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
    var t = qa();
    l = l === void 0 ? null : l;
    var e = t.memoizedState;
    return l !== null && Li(l, e[1]) ? e[0] : ((t.memoizedState = [a, l]), a);
  }
  function Ps(a, l) {
    var t = qa();
    l = l === void 0 ? null : l;
    var e = t.memoizedState;
    if (l !== null && Li(l, e[1])) return e[0];
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
      : ((a.memoizedState = t), (a = to()), (P.lanes |= a), (yt |= a), t);
  }
  function ar(a, l, t, e) {
    return rl(t, l)
      ? t
      : de.current !== null
      ? ((a = lc(a, t, e)), rl(a, l) || (Va = !0), a)
      : (st & 42) === 0
      ? ((Va = !0), (a.memoizedState = t))
      : ((a = to()), (P.lanes |= a), (yt |= a), l);
  }
  function lr(a, l, t, e, u) {
    var n = R.p;
    R.p = n !== 0 && 8 > n ? n : 8;
    var i = N.T,
      c = {};
    (N.T = c), uc(a, !1, l, t);
    try {
      var f = u(),
        y = N.S;
      if (
        (y !== null && y(c, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var A = Em(f, e);
        iu(a, l, A, vl(a));
      } else iu(a, l, e, vl(a));
    } catch (T) {
      iu(a, l, { then: function () {}, status: "rejected", reason: T }, vl());
    } finally {
      (R.p = n), (N.T = i);
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
    iu(a, l, {}, vl());
  }
  function ec() {
    return Pa(Eu);
  }
  function ur() {
    return qa().memoizedState;
  }
  function nr() {
    return qa().memoizedState;
  }
  function xm(a) {
    for (var l = a.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var t = vl();
          a = ct(t);
          var e = ft(l, a, t);
          e !== null && (yl(e, l, t), au(e, l, t)),
            (l = { cache: Ri() }),
            (a.payload = l);
          return;
      }
      l = l.return;
    }
  }
  function jm(a, l, t) {
    var e = vl();
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
        : ((t = Ai(a, l, t, e)), t !== null && (yl(t, a, e), fr(t, l, e)));
  }
  function ir(a, l, t) {
    var e = vl();
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
          if (((u.hasEagerState = !0), (u.eagerState = c), rl(c, i)))
            return $u(a, l, u, 0), Aa === null && wu(), !1;
        } catch {
        } finally {
        }
      if (((t = Ai(a, l, u, e)), t !== null))
        return yl(t, a, e), fr(t, l, e), !0;
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
    } else (l = Ai(a, t, e, 2)), l !== null && yl(l, a, 2);
  }
  function dn(a) {
    var l = a.alternate;
    return a === P || (l !== null && l === P);
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
      readContext: Pa,
      use: fn,
      useCallback: ja,
      useContext: ja,
      useEffect: ja,
      useImperativeHandle: ja,
      useLayoutEffect: ja,
      useInsertionEffect: ja,
      useMemo: ja,
      useReducer: ja,
      useRef: ja,
      useState: ja,
      useDebugValue: ja,
      useDeferredValue: ja,
      useTransition: ja,
      useSyncExternalStore: ja,
      useId: ja,
      useHostTransitionStatus: ja,
      useFormState: ja,
      useActionState: ja,
      useOptimistic: ja,
      useMemoCache: ja,
      useCacheRefresh: ja,
    },
    sr = {
      readContext: Pa,
      use: fn,
      useCallback: function (a, l) {
        return (il().memoizedState = [a, l === void 0 ? null : l]), a;
      },
      useContext: Pa,
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
        var t = il();
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
        var e = il();
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
          (a = a.dispatch = jm.bind(null, P, a)),
          [e.memoizedState, a]
        );
      },
      useRef: function (a) {
        var l = il();
        return (a = { current: a }), (l.memoizedState = a);
      },
      useState: function (a) {
        a = Ii(a);
        var l = a.queue,
          t = ir.bind(null, P, l);
        return (l.dispatch = t), [a.memoizedState, t];
      },
      useDebugValue: ac,
      useDeferredValue: function (a, l) {
        var t = il();
        return lc(t, a, l);
      },
      useTransition: function () {
        var a = Ii(!1);
        return (
          (a = lr.bind(null, P, a.queue, !0, !1)),
          (il().memoizedState = a),
          [!1, a]
        );
      },
      useSyncExternalStore: function (a, l, t) {
        var e = P,
          u = il();
        if (oa) {
          if (t === void 0) throw Error(h(407));
          t = t();
        } else {
          if (((t = l()), Aa === null)) throw Error(h(349));
          (ia & 124) !== 0 || xs(e, l, t);
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
        var a = il(),
          l = Aa.identifierPrefix;
        if (oa) {
          var t = Ll,
            e = Zl;
          (t = (e & ~(1 << (32 - sl(e) - 1))).toString(32) + t),
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
        var l = il();
        l.memoizedState = l.baseState = a;
        var t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (l.queue = t), (l = uc.bind(null, P, !0, t)), (t.dispatch = l), [a, l]
        );
      },
      useMemoCache: Wi,
      useCacheRefresh: function () {
        return (il().memoizedState = xm.bind(null, P));
      },
    },
    rr = {
      readContext: Pa,
      use: fn,
      useCallback: Is,
      useContext: Pa,
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
        var t = qa();
        return ar(t, ba.memoizedState, a, l);
      },
      useTransition: function () {
        var a = sn(Jl)[0],
          l = qa().memoizedState;
        return [typeof a == "boolean" ? a : uu(a), l];
      },
      useSyncExternalStore: Ds,
      useId: ur,
      useHostTransitionStatus: ec,
      useFormState: Zs,
      useActionState: Zs,
      useOptimistic: function (a, l) {
        var t = qa();
        return Cs(t, ba, a, l);
      },
      useMemoCache: Wi,
      useCacheRefresh: nr,
    },
    Um = {
      readContext: Pa,
      use: fn,
      useCallback: Is,
      useContext: Pa,
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
        var t = qa();
        return ba === null ? lc(t, a, l) : ar(t, ba.memoizedState, a, l);
      },
      useTransition: function () {
        var a = Fi(Jl)[0],
          l = qa().memoizedState;
        return [typeof a == "boolean" ? a : uu(a), l];
      },
      useSyncExternalStore: Ds,
      useId: ur,
      useHostTransitionStatus: ec,
      useFormState: Vs,
      useActionState: Vs,
      useOptimistic: function (a, l) {
        var t = qa();
        return ba !== null
          ? Cs(t, ba, a, l)
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
    throw l.$$typeof === k
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
    function l(m, d) {
      if (a) {
        var v = m.deletions;
        v === null ? ((m.deletions = [d]), (m.flags |= 16)) : v.push(d);
      }
    }
    function t(m, d) {
      if (!a) return null;
      for (; d !== null; ) l(m, d), (d = d.sibling);
      return null;
    }
    function e(m) {
      for (var d = new Map(); m !== null; )
        m.key !== null ? d.set(m.key, m) : d.set(m.index, m), (m = m.sibling);
      return d;
    }
    function u(m, d) {
      return (m = Ql(m, d)), (m.index = 0), (m.sibling = null), m;
    }
    function n(m, d, v) {
      return (
        (m.index = v),
        a
          ? ((v = m.alternate),
            v !== null
              ? ((v = v.index), v < d ? ((m.flags |= 67108866), d) : v)
              : ((m.flags |= 67108866), d))
          : ((m.flags |= 1048576), d)
      );
    }
    function i(m) {
      return a && m.alternate === null && (m.flags |= 67108866), m;
    }
    function c(m, d, v, E) {
      return d === null || d.tag !== 6
        ? ((d = Ti(v, m.mode, E)), (d.return = m), d)
        : ((d = u(d, v)), (d.return = m), d);
    }
    function f(m, d, v, E) {
      var q = v.type;
      return q === Ma
        ? A(m, d, v.props.children, E, v.key)
        : d !== null &&
          (d.elementType === q ||
            (typeof q == "object" &&
              q !== null &&
              q.$$typeof === Da &&
              or(q) === d.type))
        ? ((d = u(d, v.props)), fu(d, v), (d.return = m), d)
        : ((d = ku(v.type, v.key, v.props, null, m.mode, E)),
          fu(d, v),
          (d.return = m),
          d);
    }
    function y(m, d, v, E) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== v.containerInfo ||
        d.stateNode.implementation !== v.implementation
        ? ((d = Oi(v, m.mode, E)), (d.return = m), d)
        : ((d = u(d, v.children || [])), (d.return = m), d);
    }
    function A(m, d, v, E, q) {
      return d === null || d.tag !== 7
        ? ((d = jt(v, m.mode, E, q)), (d.return = m), d)
        : ((d = u(d, v)), (d.return = m), d);
    }
    function T(m, d, v) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return (d = Ti("" + d, m.mode, v)), (d.return = m), d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case ea:
            return (
              (v = ku(d.type, d.key, d.props, null, m.mode, v)),
              fu(v, d),
              (v.return = m),
              v
            );
          case ra:
            return (d = Oi(d, m.mode, v)), (d.return = m), d;
          case Da:
            var E = d._init;
            return (d = E(d._payload)), T(m, d, v);
        }
        if (xa(d) || da(d))
          return (d = jt(d, m.mode, v, null)), (d.return = m), d;
        if (typeof d.then == "function") return T(m, hn(d), v);
        if (d.$$typeof === J) return T(m, an(m, d), v);
        vn(m, d);
      }
      return null;
    }
    function g(m, d, v, E) {
      var q = d !== null ? d.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return q !== null ? null : c(m, d, "" + v, E);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ea:
            return v.key === q ? f(m, d, v, E) : null;
          case ra:
            return v.key === q ? y(m, d, v, E) : null;
          case Da:
            return (q = v._init), (v = q(v._payload)), g(m, d, v, E);
        }
        if (xa(v) || da(v)) return q !== null ? null : A(m, d, v, E, null);
        if (typeof v.then == "function") return g(m, d, hn(v), E);
        if (v.$$typeof === J) return g(m, d, an(m, v), E);
        vn(m, v);
      }
      return null;
    }
    function b(m, d, v, E, q) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return (m = m.get(v) || null), c(d, m, "" + E, q);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case ea:
            return (
              (m = m.get(E.key === null ? v : E.key) || null), f(d, m, E, q)
            );
          case ra:
            return (
              (m = m.get(E.key === null ? v : E.key) || null), y(d, m, E, q)
            );
          case Da:
            var aa = E._init;
            return (E = aa(E._payload)), b(m, d, v, E, q);
        }
        if (xa(E) || da(E)) return (m = m.get(v) || null), A(d, m, E, q, null);
        if (typeof E.then == "function") return b(m, d, v, hn(E), q);
        if (E.$$typeof === J) return b(m, d, v, an(d, E), q);
        vn(d, E);
      }
      return null;
    }
    function K(m, d, v, E) {
      for (
        var q = null, aa = null, Q = d, V = (d = 0), Ja = null;
        Q !== null && V < v.length;
        V++
      ) {
        Q.index > V ? ((Ja = Q), (Q = null)) : (Ja = Q.sibling);
        var sa = g(m, Q, v[V], E);
        if (sa === null) {
          Q === null && (Q = Ja);
          break;
        }
        a && Q && sa.alternate === null && l(m, Q),
          (d = n(sa, d, V)),
          aa === null ? (q = sa) : (aa.sibling = sa),
          (aa = sa),
          (Q = Ja);
      }
      if (V === v.length) return t(m, Q), oa && Rt(m, V), q;
      if (Q === null) {
        for (; V < v.length; V++)
          (Q = T(m, v[V], E)),
            Q !== null &&
              ((d = n(Q, d, V)),
              aa === null ? (q = Q) : (aa.sibling = Q),
              (aa = Q));
        return oa && Rt(m, V), q;
      }
      for (Q = e(Q); V < v.length; V++)
        (Ja = b(Q, m, V, v[V], E)),
          Ja !== null &&
            (a &&
              Ja.alternate !== null &&
              Q.delete(Ja.key === null ? V : Ja.key),
            (d = n(Ja, d, V)),
            aa === null ? (q = Ja) : (aa.sibling = Ja),
            (aa = Ja));
      return (
        a &&
          Q.forEach(function (Tt) {
            return l(m, Tt);
          }),
        oa && Rt(m, V),
        q
      );
    }
    function L(m, d, v, E) {
      if (v == null) throw Error(h(151));
      for (
        var q = null, aa = null, Q = d, V = (d = 0), Ja = null, sa = v.next();
        Q !== null && !sa.done;
        V++, sa = v.next()
      ) {
        Q.index > V ? ((Ja = Q), (Q = null)) : (Ja = Q.sibling);
        var Tt = g(m, Q, sa.value, E);
        if (Tt === null) {
          Q === null && (Q = Ja);
          break;
        }
        a && Q && Tt.alternate === null && l(m, Q),
          (d = n(Tt, d, V)),
          aa === null ? (q = Tt) : (aa.sibling = Tt),
          (aa = Tt),
          (Q = Ja);
      }
      if (sa.done) return t(m, Q), oa && Rt(m, V), q;
      if (Q === null) {
        for (; !sa.done; V++, sa = v.next())
          (sa = T(m, sa.value, E)),
            sa !== null &&
              ((d = n(sa, d, V)),
              aa === null ? (q = sa) : (aa.sibling = sa),
              (aa = sa));
        return oa && Rt(m, V), q;
      }
      for (Q = e(Q); !sa.done; V++, sa = v.next())
        (sa = b(Q, m, V, sa.value, E)),
          sa !== null &&
            (a &&
              sa.alternate !== null &&
              Q.delete(sa.key === null ? V : sa.key),
            (d = n(sa, d, V)),
            aa === null ? (q = sa) : (aa.sibling = sa),
            (aa = sa));
      return (
        a &&
          Q.forEach(function (R0) {
            return l(m, R0);
          }),
        oa && Rt(m, V),
        q
      );
    }
    function za(m, d, v, E) {
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
              for (var q = v.key; d !== null; ) {
                if (d.key === q) {
                  if (((q = v.type), q === Ma)) {
                    if (d.tag === 7) {
                      t(m, d.sibling),
                        (E = u(d, v.props.children)),
                        (E.return = m),
                        (m = E);
                      break a;
                    }
                  } else if (
                    d.elementType === q ||
                    (typeof q == "object" &&
                      q !== null &&
                      q.$$typeof === Da &&
                      or(q) === d.type)
                  ) {
                    t(m, d.sibling),
                      (E = u(d, v.props)),
                      fu(E, v),
                      (E.return = m),
                      (m = E);
                    break a;
                  }
                  t(m, d);
                  break;
                } else l(m, d);
                d = d.sibling;
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
          case ra:
            a: {
              for (q = v.key; d !== null; ) {
                if (d.key === q)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === v.containerInfo &&
                    d.stateNode.implementation === v.implementation
                  ) {
                    t(m, d.sibling),
                      (E = u(d, v.children || [])),
                      (E.return = m),
                      (m = E);
                    break a;
                  } else {
                    t(m, d);
                    break;
                  }
                else l(m, d);
                d = d.sibling;
              }
              (E = Oi(v, m.mode, E)), (E.return = m), (m = E);
            }
            return i(m);
          case Da:
            return (q = v._init), (v = q(v._payload)), za(m, d, v, E);
        }
        if (xa(v)) return K(m, d, v, E);
        if (da(v)) {
          if (((q = da(v)), typeof q != "function")) throw Error(h(150));
          return (v = q.call(v)), L(m, d, v, E);
        }
        if (typeof v.then == "function") return za(m, d, hn(v), E);
        if (v.$$typeof === J) return za(m, d, an(m, v), E);
        vn(m, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          d !== null && d.tag === 6
            ? (t(m, d.sibling), (E = u(d, v)), (E.return = m), (m = E))
            : (t(m, d), (E = Ti(v, m.mode, E)), (E.return = m), (m = E)),
          i(m))
        : t(m, d);
    }
    return function (m, d, v, E) {
      try {
        cu = 0;
        var q = za(m, d, v, E);
        return (ye = null), q;
      } catch (Q) {
        if (Q === Ie || Q === tn) throw Q;
        var aa = ol(29, Q, null, m.mode);
        return (aa.lanes = E), (aa.return = m), aa;
      } finally {
      }
    };
  }
  var ge = dr(!0),
    mr = dr(!1),
    Al = O(null),
    jl = null;
  function rt(a) {
    var l = a.alternate;
    j(Xa, Xa.current & 1),
      j(Al, a),
      jl === null &&
        (l === null || de.current !== null || l.memoizedState !== null) &&
        (jl = a);
  }
  function hr(a) {
    if (a.tag === 22) {
      if ((j(Xa, Xa.current), j(Al, a), jl === null)) {
        var l = a.alternate;
        l !== null && l.memoizedState !== null && (jl = a);
      }
    } else ot();
  }
  function ot() {
    j(Xa, Xa.current), j(Al, Al.current);
  }
  function wl(a) {
    H(Al), jl === a && (jl = null), H(Xa);
  }
  var Xa = O(0);
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
      var e = vl(),
        u = ct(e);
      (u.payload = l),
        t != null && (u.callback = t),
        (l = ft(a, u, e)),
        l !== null && (yl(l, a, e), au(l, a, e));
    },
    enqueueReplaceState: function (a, l, t) {
      a = a._reactInternals;
      var e = vl(),
        u = ct(e);
      (u.tag = 1),
        (u.payload = l),
        t != null && (u.callback = t),
        (l = ft(a, u, e)),
        l !== null && (yl(l, a, e), au(l, a, e));
    },
    enqueueForceUpdate: function (a, l) {
      a = a._reactInternals;
      var t = vl(),
        e = ct(t);
      (e.tag = 2),
        l != null && (e.callback = l),
        (l = ft(a, e, t)),
        l !== null && (yl(l, a, t), au(l, a, t));
    },
  };
  function vr(a, l, t, e, u, n, i) {
    return (
      (a = a.stateNode),
      typeof a.shouldComponentUpdate == "function"
        ? a.shouldComponentUpdate(e, n, i)
        : l.prototype && l.prototype.isPureReactComponent
        ? !Ve(t, e) || !Ve(u, n)
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
  function Nr(a, l, t, e) {
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
              jl === null ? jc() : t.alternate === null && _a === 0 && (_a = 3),
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
    if (oa)
      return (
        (l = Al.current),
        l !== null
          ? ((l.flags & 65536) === 0 && (l.flags |= 256),
            (l.flags |= 65536),
            (l.lanes = u),
            e !== Di && ((a = Error(h(422), { cause: e })), $e(Sl(a, t))))
          : (e !== Di && ((l = Error(h(423), { cause: e })), $e(Sl(l, t))),
            (a = a.current.alternate),
            (a.flags |= 65536),
            (u &= -u),
            (a.lanes |= u),
            (e = Sl(e, t)),
            (u = cc(a.stateNode, e, u)),
            Xi(a, u),
            _a !== 4 && (_a = 2)),
        !1
      );
    var n = Error(h(520), { cause: e });
    if (
      ((n = Sl(n, t)),
      vu === null ? (vu = [n]) : vu.push(n),
      _a !== 4 && (_a = 2),
      l === null)
    )
      return !0;
    (e = Sl(e, t)), (t = l);
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
              Nr(u, a, t, e),
              Xi(t, u),
              !1
            );
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var Ar = Error(h(461)),
    Va = !1;
  function $a(a, l, t, e) {
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
      (e = Vi(a, l, t, i, n, u)),
      (c = Ki()),
      a !== null && !Va
        ? (Ji(a, l, u), $l(a, l, u))
        : (oa && c && _i(l), (l.flags |= 1), $a(a, l, e, u), l.child)
    );
  }
  function Tr(a, l, t, e, u) {
    if (a === null) {
      var n = t.type;
      return typeof n == "function" &&
        !Ei(n) &&
        n.defaultProps === void 0 &&
        t.compare === null
        ? ((l.tag = 15), (l.type = n), Or(a, l, n, e, u))
        : ((a = ku(t.type, null, e, l, l.mode, u)),
          (a.ref = l.ref),
          (a.return = l),
          (l.child = a));
    }
    if (((n = a.child), !vc(a, u))) {
      var i = n.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : Ve), t(i, e) && a.ref === l.ref)
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
  function Or(a, l, t, e, u) {
    if (a !== null) {
      var n = a.memoizedProps;
      if (Ve(n, e) && a.ref === l.ref)
        if (((Va = !1), (l.pendingProps = e = n), vc(a, u)))
          (a.flags & 131072) !== 0 && (Va = !0);
        else return (l.lanes = a.lanes), $l(a, l, u);
    }
    return fc(a, l, t, e, u);
  }
  function _r(a, l, t) {
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
          n !== null ? Os(l, n) : Qi(),
          hr(l);
      else
        return (
          (l.lanes = l.childLanes = 536870912),
          Mr(a, l, n !== null ? n.baseLanes | t : t, t)
        );
    } else
      n !== null
        ? (ln(l, n.cachePool), Os(l, n), ot(), (l.memoizedState = null))
        : (a !== null && ln(l, null), Qi(), ot());
    return $a(a, l, u, t), l.child;
  }
  function Mr(a, l, t, e) {
    var u = Ci();
    return (
      (u = u === null ? null : { parent: Ya._currentValue, pool: u }),
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
      (t = Vi(a, l, t, e, void 0, u)),
      (e = Ki()),
      a !== null && !Va
        ? (Ji(a, l, u), $l(a, l, u))
        : (oa && e && _i(l), (l.flags |= 1), $a(a, l, t, u), l.child)
    );
  }
  function Dr(a, l, t, e, u, n) {
    return (
      Bt(l),
      (l.updateQueue = null),
      (t = Ms(l, e, t, u)),
      _s(a),
      (e = Ki()),
      a !== null && !Va
        ? (Ji(a, l, n), $l(a, l, n))
        : (oa && e && _i(l), (l.flags |= 1), $a(a, l, t, n), l.child)
    );
  }
  function xr(a, l, t, e, u) {
    if ((Bt(l), l.stateNode === null)) {
      var n = ce,
        i = t.contextType;
      typeof i == "object" && i !== null && (n = Pa(i)),
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
        (n.context = typeof i == "object" && i !== null ? Pa(i) : ce),
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
      (i = ce), typeof A == "object" && A !== null && (i = Pa(A));
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
        typeof y == "object" && y !== null && (f = Pa(y)),
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
            : $a(a, l, t, u),
          (l.memoizedState = n.state),
          (a = l.child))
        : (a = $l(a, l, u)),
      a
    );
  }
  function jr(a, l, t, e) {
    return we(), (l.flags |= 256), $a(a, l, t, e), l.child;
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
    return (a = a !== null ? a.childLanes & ~t : 0), l && (a |= El), a;
  }
  function Ur(a, l, t) {
    var e = l.pendingProps,
      u = !1,
      n = (l.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          a !== null && a.memoizedState === null ? !1 : (Xa.current & 2) !== 0),
      i && ((u = !0), (l.flags &= -129)),
      (i = (l.flags & 32) !== 0),
      (l.flags &= -33),
      a === null)
    ) {
      if (oa) {
        if ((u ? rt(l) : ot(), oa)) {
          var c = Oa,
            f;
          if ((f = c)) {
            a: {
              for (f = c, c = xl; f.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break a;
                }
                if (((f = Ml(f.nextSibling)), f === null)) {
                  c = null;
                  break a;
                }
              }
              c = f;
            }
            c !== null
              ? ((l.memoizedState = {
                  dehydrated: c,
                  treeContext: Ut !== null ? { id: Zl, overflow: Ll } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (f = ol(18, null, null, 0)),
                (f.stateNode = c),
                (f.return = l),
                (l.child = f),
                (ll = l),
                (Oa = null),
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
        (Va || We(a, l, t, !1), (i = (t & a.childLanes) !== 0), Va || i)
      ) {
        if (
          ((i = Aa),
          i !== null &&
            ((e = t & -t),
            (e = (e & 42) !== 0 ? 1 : Wn(e)),
            (e = (e & (i.suspendedLanes | t)) !== 0 ? 0 : e),
            e !== 0 && e !== f.retryLane))
        )
          throw ((f.retryLane = e), ie(a, e), yl(i, a, e), Ar);
        c.data === "$?" || jc(), (l = mc(a, l, t));
      } else
        c.data === "$?"
          ? ((l.flags |= 192), (l.child = a.child), (l = null))
          : ((a = f.treeContext),
            (Oa = Ml(c.nextSibling)),
            (ll = l),
            (oa = !0),
            (Ht = null),
            (xl = !1),
            a !== null &&
              ((pl[Nl++] = Zl),
              (pl[Nl++] = Ll),
              (pl[Nl++] = Ut),
              (Zl = a.id),
              (Ll = a.overflow),
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
              ? ((y = Ya._currentValue),
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
      (a = ol(22, a, null, l)),
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
    if (($a(a, l, e.children, t), (e = Xa.current), (e & 2) !== 0))
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
    switch ((j(Xa, e), u)) {
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
        U(l, l.stateNode.containerInfo), nt(l, Ya, a.memoizedState.cache), we();
        break;
      case 27:
      case 5:
        na(l);
        break;
      case 4:
        U(l, l.stateNode.containerInfo);
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
          j(Xa, Xa.current),
          e)
        )
          break;
        return null;
      case 22:
      case 23:
        return (l.lanes = 0), _r(a, l, t);
      case 24:
        nt(l, Ya, a.memoizedState.cache);
    }
    return $l(a, l, t);
  }
  function Cr(a, l, t) {
    if (a !== null)
      if (a.memoizedProps !== l.pendingProps) Va = !0;
      else {
        if (!vc(a, t) && (l.flags & 128) === 0) return (Va = !1), Hm(a, l, t);
        Va = (a.flags & 131072) !== 0;
      }
    else (Va = !1), oa && (l.flags & 1048576) !== 0 && os(l, Iu, l.index);
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
              if (((u = e.$$typeof), u === tl)) {
                (l.tag = 11), (l = Er(null, l, e, a, t));
                break a;
              } else if (u === F) {
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
          if ((U(l, l.stateNode.containerInfo), a === null))
            throw Error(h(387));
          e = l.pendingProps;
          var n = l.memoizedState;
          (u = n.element), Yi(a, l), tu(l, e, null, t);
          var i = l.memoizedState;
          if (
            ((e = i.cache),
            nt(l, Ya, e),
            e !== n.cache && Ui(l, [Ya], t, !0),
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
              (u = Sl(Error(h(424)), l)), $e(u), (l = jr(a, l, e, t));
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
                Oa = Ml(a.firstChild),
                  ll = l,
                  oa = !0,
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
            $a(a, l, e, t);
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
              : oa ||
                ((t = l.type),
                (a = l.pendingProps),
                (e = Hn(z.current).createElement(t)),
                (e[Ia] = l),
                (e[ul] = a),
                ka(e, t, a),
                La(e),
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
          na(l),
          a === null &&
            oa &&
            ((e = l.stateNode = Bo(l.type, l.pendingProps, z.current)),
            (ll = l),
            (xl = !0),
            (u = Oa),
            zt(l.type) ? ((Wc = u), (Oa = Ml(e.firstChild))) : (Oa = u)),
          $a(a, l, l.pendingProps.children, t),
          Sn(a, l),
          a === null && (l.flags |= 4194304),
          l.child
        );
      case 5:
        return (
          a === null &&
            oa &&
            ((u = e = Oa) &&
              ((e = f0(e, l.type, l.pendingProps, xl)),
              e !== null
                ? ((l.stateNode = e),
                  (ll = l),
                  (Oa = Ml(e.firstChild)),
                  (xl = !1),
                  (u = !0))
                : (u = !1)),
            u || Ct(l)),
          na(l),
          (u = l.type),
          (n = l.pendingProps),
          (i = a !== null ? a.memoizedProps : null),
          (e = n.children),
          Kc(u, n) ? (e = null) : i !== null && Kc(u, i) && (l.flags |= 32),
          l.memoizedState !== null &&
            ((u = Vi(a, l, Om, null, null, t)), (Eu._currentValue = u)),
          Sn(a, l),
          $a(a, l, e, t),
          l.child
        );
      case 6:
        return (
          a === null &&
            oa &&
            ((a = t = Oa) &&
              ((t = s0(t, l.pendingProps, xl)),
              t !== null
                ? ((l.stateNode = t), (ll = l), (Oa = null), (a = !0))
                : (a = !1)),
            a || Ct(l)),
          null
        );
      case 13:
        return Ur(a, l, t);
      case 4:
        return (
          U(l, l.stateNode.containerInfo),
          (e = l.pendingProps),
          a === null ? (l.child = ge(l, null, e, t)) : $a(a, l, e, t),
          l.child
        );
      case 11:
        return Er(a, l, l.type, l.pendingProps, t);
      case 7:
        return $a(a, l, l.pendingProps, t), l.child;
      case 8:
        return $a(a, l, l.pendingProps.children, t), l.child;
      case 12:
        return $a(a, l, l.pendingProps.children, t), l.child;
      case 10:
        return (
          (e = l.pendingProps),
          nt(l, l.type, e.value),
          $a(a, l, e.children, t),
          l.child
        );
      case 9:
        return (
          (u = l.type._context),
          (e = l.pendingProps.children),
          Bt(l),
          (u = Pa(u)),
          (e = e(u)),
          (l.flags |= 1),
          $a(a, l, e, t),
          l.child
        );
      case 14:
        return Tr(a, l, l.type, l.pendingProps, t);
      case 15:
        return Or(a, l, l.type, l.pendingProps, t);
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
        return _r(a, l, t);
      case 24:
        return (
          Bt(l),
          (e = Pa(Ya)),
          a === null
            ? ((u = Ci()),
              u === null &&
                ((u = Aa),
                (n = Ri()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= t),
                (u = n)),
              (l.memoizedState = { parent: e, cache: u }),
              Bi(l),
              nt(l, Ya, u))
            : ((a.lanes & t) !== 0 && (Yi(a, l), tu(l, null, null, t), lu()),
              (u = a.memoizedState),
              (n = l.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (l.memoizedState = u),
                  l.lanes === 0 &&
                    (l.memoizedState = l.updateQueue.baseState = u),
                  nt(l, Ya, e))
                : ((e = n.cache),
                  nt(l, Ya, e),
                  e !== u.cache && Ui(l, [Ya], t, !0))),
          $a(a, l, l.pendingProps.children, t),
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
          ((ia & 4194048) === ia
            ? jl !== null
            : ((ia & 62914560) !== ia && (ia & 536870912) === 0) || l !== jl))
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
    if (!oa)
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
  function Ta(a) {
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
        return Ta(l), null;
      case 1:
        return Ta(l), null;
      case 3:
        return (
          (t = l.stateNode),
          (e = null),
          a !== null && (e = a.memoizedState.cache),
          l.memoizedState.cache !== e && (l.flags |= 2048),
          Kl(Ya),
          ua(),
          t.pendingContext &&
            ((t.context = t.pendingContext), (t.pendingContext = null)),
          (a === null || a.child === null) &&
            (Je(l)
              ? Wl(l)
              : a === null ||
                (a.memoizedState.isDehydrated && (l.flags & 256) === 0) ||
                ((l.flags |= 1024), hs())),
          Ta(l),
          null
        );
      case 26:
        return (
          (t = l.memoizedState),
          a === null
            ? (Wl(l),
              t !== null ? (Ta(l), qr(l, t)) : (Ta(l), (l.flags &= -16777217)))
            : t
            ? t !== a.memoizedState
              ? (Wl(l), Ta(l), qr(l, t))
              : (Ta(l), (l.flags &= -16777217))
            : (a.memoizedProps !== e && Wl(l), Ta(l), (l.flags &= -16777217)),
          null
        );
      case 27:
        $(l), (t = z.current);
        var u = l.type;
        if (a !== null && l.stateNode != null) a.memoizedProps !== e && Wl(l);
        else {
          if (!e) {
            if (l.stateNode === null) throw Error(h(166));
            return Ta(l), null;
          }
          (a = r.current),
            Je(l) ? ds(l) : ((a = Bo(u, e, t)), (l.stateNode = a), Wl(l));
        }
        return Ta(l), null;
      case 5:
        if (($(l), (t = l.type), a !== null && l.stateNode != null))
          a.memoizedProps !== e && Wl(l);
        else {
          if (!e) {
            if (l.stateNode === null) throw Error(h(166));
            return Ta(l), null;
          }
          if (((a = r.current), Je(l))) ds(l);
          else {
            switch (((u = Hn(z.current)), a)) {
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
            (a[Ia] = l), (a[ul] = e);
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
            a: switch ((ka(a, t, e), t)) {
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
        return Ta(l), (l.flags &= -16777217), null;
      case 6:
        if (a && l.stateNode != null) a.memoizedProps !== e && Wl(l);
        else {
          if (typeof e != "string" && l.stateNode === null) throw Error(h(166));
          if (((a = z.current), Je(l))) {
            if (
              ((a = l.stateNode),
              (t = l.memoizedProps),
              (e = null),
              (u = ll),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            (a[Ia] = l),
              (a = !!(
                a.nodeValue === t ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                xo(a.nodeValue, t)
              )),
              a || Ct(l);
          } else (a = Hn(a).createTextNode(e)), (a[Ia] = l), (l.stateNode = a);
        }
        return Ta(l), null;
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
              u[Ia] = l;
            } else
              we(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4);
            Ta(l), (u = !1);
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
          Ta(l),
          null
        );
      case 4:
        return ua(), a === null && Gc(l.stateNode.containerInfo), Ta(l), null;
      case 10:
        return Kl(l.type), Ta(l), null;
      case 19:
        if ((H(Xa), (u = l.memoizedState), u === null)) return Ta(l), null;
        if (((e = (l.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) su(u, !1);
          else {
            if (_a !== 0 || (a !== null && (a.flags & 128) !== 0))
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
                  return j(Xa, (Xa.current & 1) | 2), l.child;
                }
                a = a.sibling;
              }
            u.tail !== null &&
              el() > En &&
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
                  !oa)
              )
                return Ta(l), null;
            } else
              2 * el() - u.renderingStartTime > En &&
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
            (u.renderingStartTime = el()),
            (l.sibling = null),
            (a = Xa.current),
            j(Xa, e ? (a & 1) | 2 : a & 1),
            l)
          : (Ta(l), null);
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
              (Ta(l), l.subtreeFlags & 6 && (l.flags |= 8192))
            : Ta(l),
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
          a !== null && H(Yt),
          null
        );
      case 24:
        return (
          (t = null),
          a !== null && (t = a.memoizedState.cache),
          l.memoizedState.cache !== t && (l.flags |= 2048),
          Kl(Ya),
          Ta(l),
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
          Kl(Ya),
          ua(),
          (a = l.flags),
          (a & 65536) !== 0 && (a & 128) === 0
            ? ((l.flags = (a & -65537) | 128), l)
            : null
        );
      case 26:
      case 27:
      case 5:
        return $(l), null;
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
        return H(Xa), null;
      case 4:
        return ua(), null;
      case 10:
        return Kl(l.type), null;
      case 22:
      case 23:
        return (
          wl(l),
          Zi(),
          a !== null && H(Yt),
          (a = l.flags),
          a & 65536 ? ((l.flags = (a & -65537) | 128), l) : null
        );
      case 24:
        return Kl(Ya), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Br(a, l) {
    switch ((Mi(l), l.tag)) {
      case 3:
        Kl(Ya), ua();
        break;
      case 26:
      case 27:
      case 5:
        $(l);
        break;
      case 4:
        ua();
        break;
      case 13:
        wl(l);
        break;
      case 19:
        H(Xa);
        break;
      case 10:
        Kl(l.type);
        break;
      case 22:
      case 23:
        wl(l), Zi(), a !== null && H(Yt);
        break;
      case 24:
        Kl(Ya);
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
      pa(l, l.return, c);
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
                pa(u, f, A);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (A) {
      pa(l, l.return, A);
    }
  }
  function Yr(a) {
    var l = a.updateQueue;
    if (l !== null) {
      var t = a.stateNode;
      try {
        Ts(l, t);
      } catch (e) {
        pa(a, a.return, e);
      }
    }
  }
  function Xr(a, l, t) {
    (t.props = Gt(a.type, a.memoizedProps)), (t.state = a.memoizedState);
    try {
      t.componentWillUnmount();
    } catch (e) {
      pa(a, l, e);
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
      pa(a, l, u);
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
          pa(a, l, u);
        } finally {
          (a.refCleanup = null),
            (a = a.alternate),
            a != null && (a.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (u) {
          pa(a, l, u);
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
      pa(a, a.return, u);
    }
  }
  function yc(a, l, t) {
    try {
      var e = a.stateNode;
      e0(e, a.type, t, l), (e[ul] = l);
    } catch (u) {
      pa(a, a.return, u);
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
  function Nn(a, l, t) {
    var e = a.tag;
    if (e === 5 || e === 6)
      (a = a.stateNode), l ? t.insertBefore(a, l) : t.appendChild(a);
    else if (
      e !== 4 &&
      (e === 27 && zt(a.type) && (t = a.stateNode), (a = a.child), a !== null)
    )
      for (Nn(a, l, t), a = a.sibling; a !== null; )
        Nn(a, l, t), (a = a.sibling);
  }
  function Zr(a) {
    var l = a.stateNode,
      t = a.memoizedProps;
    try {
      for (var e = a.type, u = l.attributes; u.length; )
        l.removeAttributeNode(u[0]);
      ka(l, e, t), (l[Ia] = a), (l[ul] = t);
    } catch (n) {
      pa(a, a.return, n);
    }
  }
  var kl = !1,
    Ua = !1,
    Sc = !1,
    Lr = typeof WeakSet == "function" ? WeakSet : Set,
    Ka = null;
  function Bm(a, l) {
    if (((a = a.containerInfo), (Lc = Gn), (a = as(a)), gi(a))) {
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
      Vc = { focusedElem: a, selectionRange: t }, Gn = !1, Ka = l;
      Ka !== null;

    )
      if (
        ((l = Ka), (a = l.child), (l.subtreeFlags & 1024) !== 0 && a !== null)
      )
        (a.return = l), (Ka = a);
      else
        for (; Ka !== null; ) {
          switch (((l = Ka), (n = l.alternate), (a = l.flags), l.tag)) {
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
                } catch (L) {
                  pa(t, t.return, L);
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
            (a.return = l.return), (Ka = a);
            break;
          }
          Ka = l.return;
        }
  }
  function Vr(a, l, t) {
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
              pa(t, t.return, i);
            }
          else {
            var u = Gt(t.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              a.componentDidUpdate(u, l, a.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              pa(t, t.return, i);
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
            pa(t, t.return, i);
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
              a !== null && ((t = Jm.bind(null, t)), r0(a, t))));
        break;
      case 22:
        if (((e = t.memoizedState !== null || kl), !e)) {
          (l = (l !== null && l.memoizedState !== null) || Ua), (u = kl);
          var n = Ua;
          (kl = e),
            (Ua = l) && !n ? ht(a, t, (t.subtreeFlags & 8772) !== 0) : mt(a, t),
            (kl = u),
            (Ua = n);
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
  var Ea = null,
    cl = !1;
  function Fl(a, l, t) {
    for (t = t.child; t !== null; ) Jr(a, l, t), (t = t.sibling);
  }
  function Jr(a, l, t) {
    if (wa && typeof wa.onCommitFiberUnmount == "function")
      try {
        wa.onCommitFiberUnmount(Yl, t);
      } catch {}
    switch (t.tag) {
      case 26:
        Ua || Ul(t, l),
          Fl(a, l, t),
          t.memoizedState
            ? t.memoizedState.count--
            : t.stateNode && ((t = t.stateNode), t.parentNode.removeChild(t));
        break;
      case 27:
        Ua || Ul(t, l);
        var e = Ea,
          u = cl;
        zt(t.type) && ((Ea = t.stateNode), (cl = !1)),
          Fl(a, l, t),
          zu(t.stateNode),
          (Ea = e),
          (cl = u);
        break;
      case 5:
        Ua || Ul(t, l);
      case 6:
        if (
          ((e = Ea),
          (u = cl),
          (Ea = null),
          Fl(a, l, t),
          (Ea = e),
          (cl = u),
          Ea !== null)
        )
          if (cl)
            try {
              (Ea.nodeType === 9
                ? Ea.body
                : Ea.nodeName === "HTML"
                ? Ea.ownerDocument.body
                : Ea
              ).removeChild(t.stateNode);
            } catch (n) {
              pa(t, l, n);
            }
          else
            try {
              Ea.removeChild(t.stateNode);
            } catch (n) {
              pa(t, l, n);
            }
        break;
      case 18:
        Ea !== null &&
          (cl
            ? ((a = Ea),
              Co(
                a.nodeType === 9
                  ? a.body
                  : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a,
                t.stateNode
              ),
              Mu(a))
            : Co(Ea, t.stateNode));
        break;
      case 4:
        (e = Ea),
          (u = cl),
          (Ea = t.stateNode.containerInfo),
          (cl = !0),
          Fl(a, l, t),
          (Ea = e),
          (cl = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ua || dt(2, t, l), Ua || dt(4, t, l), Fl(a, l, t);
        break;
      case 1:
        Ua ||
          (Ul(t, l),
          (e = t.stateNode),
          typeof e.componentWillUnmount == "function" && Xr(t, l, e)),
          Fl(a, l, t);
        break;
      case 21:
        Fl(a, l, t);
        break;
      case 22:
        (Ua = (e = Ua) || t.memoizedState !== null), Fl(a, l, t), (Ua = e);
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
        pa(l, l.return, t);
      }
  }
  function Ym(a) {
    switch (a.tag) {
      case 13:
      case 19:
        var l = a.stateNode;
        return l === null && (l = a.stateNode = new Lr()), l;
      case 22:
        return (
          (a = a.stateNode),
          (l = a._retryCache),
          l === null && (l = a._retryCache = new Lr()),
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
  function dl(a, l) {
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
                (Ea = c.stateNode), (cl = !1);
                break a;
              }
              break;
            case 5:
              (Ea = c.stateNode), (cl = !1);
              break a;
            case 3:
            case 4:
              (Ea = c.stateNode.containerInfo), (cl = !0);
              break a;
          }
          c = c.return;
        }
        if (Ea === null) throw Error(h(160));
        Jr(n, i, u),
          (Ea = null),
          (cl = !1),
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
        dl(l, a),
          ml(a),
          e & 4 && (dt(3, a, a.return), ru(3, a), dt(5, a, a.return));
        break;
      case 1:
        dl(l, a),
          ml(a),
          e & 512 && (Ua || t === null || Ul(t, t.return)),
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
          (dl(l, a),
          ml(a),
          e & 512 && (Ua || t === null || Ul(t, t.return)),
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
                          n[Ia] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        ka(n, e, t),
                        (n[Ia] = a),
                        La(n),
                        (e = n);
                      break a;
                    case "link":
                      var i = Lo("link", "href", u).get(e + (t.href || ""));
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
                        ka(n, e, t),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (i = Lo("meta", "content", u).get(
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
                        ka(n, e, t),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(h(468, e));
                  }
                  (n[Ia] = a), La(n), (e = n);
                }
                a.stateNode = e;
              } else Vo(u, a.type, a.stateNode);
            else a.stateNode = Zo(u, e, a.memoizedProps);
          else
            n !== e
              ? (n === null
                  ? t.stateNode !== null &&
                    ((t = t.stateNode), t.parentNode.removeChild(t))
                  : n.count--,
                e === null
                  ? Vo(u, a.type, a.stateNode)
                  : Zo(u, e, a.memoizedProps))
              : e === null &&
                a.stateNode !== null &&
                yc(a, a.memoizedProps, t.memoizedProps);
        }
        break;
      case 27:
        dl(l, a),
          ml(a),
          e & 512 && (Ua || t === null || Ul(t, t.return)),
          t !== null && e & 4 && yc(a, a.memoizedProps, t.memoizedProps);
        break;
      case 5:
        if (
          (dl(l, a),
          ml(a),
          e & 512 && (Ua || t === null || Ul(t, t.return)),
          a.flags & 32)
        ) {
          u = a.stateNode;
          try {
            Pt(u, "");
          } catch (b) {
            pa(a, a.return, b);
          }
        }
        e & 4 &&
          a.stateNode != null &&
          ((u = a.memoizedProps), yc(a, u, t !== null ? t.memoizedProps : u)),
          e & 1024 && (Sc = !0);
        break;
      case 6:
        if ((dl(l, a), ml(a), e & 4)) {
          if (a.stateNode === null) throw Error(h(162));
          (e = a.memoizedProps), (t = a.stateNode);
          try {
            t.nodeValue = e;
          } catch (b) {
            pa(a, a.return, b);
          }
        }
        break;
      case 3:
        if (
          ((Bn = null),
          (u = _l),
          (_l = Cn(l.containerInfo)),
          dl(l, a),
          (_l = u),
          ml(a),
          e & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Mu(l.containerInfo);
          } catch (b) {
            pa(a, a.return, b);
          }
        Sc && ((Sc = !1), Wr(a));
        break;
      case 4:
        (e = _l),
          (_l = Cn(a.stateNode.containerInfo)),
          dl(l, a),
          ml(a),
          (_l = e);
        break;
      case 12:
        dl(l, a), ml(a);
        break;
      case 13:
        dl(l, a),
          ml(a),
          a.child.flags & 8192 &&
            (a.memoizedState !== null) !=
              (t !== null && t.memoizedState !== null) &&
            (Oc = el()),
          e & 4 &&
            ((e = a.updateQueue),
            e !== null && ((a.updateQueue = null), zc(a, e)));
        break;
      case 22:
        u = a.memoizedState !== null;
        var f = t !== null && t.memoizedState !== null,
          y = kl,
          A = Ua;
        if (
          ((kl = y || u),
          (Ua = A || f),
          dl(l, a),
          (Ua = A),
          (kl = y),
          ml(a),
          e & 8192)
        )
          a: for (
            l = a.stateNode,
              l._visibility = u ? l._visibility & -2 : l._visibility | 1,
              u && (t === null || f || kl || Ua || Qt(a)),
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
                  pa(f, f.return, b);
                }
              }
            } else if (l.tag === 6) {
              if (t === null) {
                f = l;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (b) {
                  pa(f, f.return, b);
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
        dl(l, a),
          ml(a),
          e & 4 &&
            ((e = a.updateQueue),
            e !== null && ((a.updateQueue = null), zc(a, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        dl(l, a), ml(a);
    }
  }
  function ml(a) {
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
            Nn(a, n, u);
            break;
          case 5:
            var i = t.stateNode;
            t.flags & 32 && (Pt(i, ""), (t.flags &= -33));
            var c = gc(a);
            Nn(a, c, i);
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
        pa(a, a.return, A);
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
      for (l = l.child; l !== null; ) Vr(a, l.alternate, l), (l = l.sibling);
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
              pa(e, e.return, y);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var c = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  Es(f[u], c);
            } catch (y) {
              pa(e, e.return, y);
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
  function Nc(a, l) {
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
            pa(l, l.return, f);
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
        Rl(a, l, t, e), u & 2048 && Nc(l.alternate, l);
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
          be(n, i, c, f, u), u && y & 2048 && Nc(i.alternate, i);
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
            du(t, e), u & 2048 && Nc(e.alternate, e);
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
            A0(_l, a.memoizedState, a.memoizedProps);
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
          (Ka = e), ao(e, a);
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
          ? ((l._visibility &= -3), An(a))
          : hu(a);
        break;
      default:
        hu(a);
    }
  }
  function An(a) {
    var l = a.deletions;
    if ((a.flags & 16) !== 0) {
      if (l !== null)
        for (var t = 0; t < l.length; t++) {
          var e = l[t];
          (Ka = e), ao(e, a);
        }
      Ir(a);
    }
    for (a = a.child; a !== null; ) {
      switch (((l = a), l.tag)) {
        case 0:
        case 11:
        case 15:
          dt(8, l, l.return), An(l);
          break;
        case 22:
          (t = l.stateNode),
            t._visibility & 2 && ((t._visibility &= -3), An(l));
          break;
        default:
          An(l);
      }
      a = a.sibling;
    }
  }
  function ao(a, l) {
    for (; Ka !== null; ) {
      var t = Ka;
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
      if (((e = t.child), e !== null)) (e.return = t), (Ka = e);
      else
        a: for (t = a; Ka !== null; ) {
          e = Ka;
          var u = e.sibling,
            n = e.return;
          if ((Kr(e), e === t)) {
            Ka = null;
            break a;
          }
          if (u !== null) {
            (u.return = n), (Ka = u);
            break a;
          }
          Ka = n;
        }
    }
  }
  var Xm = {
      getCacheForType: function (a) {
        var l = Pa(Ya),
          t = l.data.get(a);
        return t === void 0 && ((t = a()), l.data.set(a, t)), t;
      },
    },
    Gm = typeof WeakMap == "function" ? WeakMap : Map,
    va = 0,
    Aa = null,
    la = null,
    ia = 0,
    ya = 0,
    hl = null,
    vt = !1,
    ze = !1,
    Ac = !1,
    Il = 0,
    _a = 0,
    yt = 0,
    Zt = 0,
    Ec = 0,
    El = 0,
    pe = 0,
    vu = null,
    fl = null,
    Tc = !1,
    Oc = 0,
    En = 1 / 0,
    Tn = null,
    gt = null,
    Wa = 0,
    bt = null,
    Ne = null,
    Ae = 0,
    _c = 0,
    Mc = null,
    lo = null,
    yu = 0,
    Dc = null;
  function vl() {
    if ((va & 2) !== 0 && ia !== 0) return ia & -ia;
    if (N.T !== null) {
      var a = re;
      return a !== 0 ? a : qc();
    }
    return gf();
  }
  function to() {
    El === 0 && (El = (ia & 536870912) === 0 || oa ? mf() : 536870912);
    var a = Al.current;
    return a !== null && (a.flags |= 32), El;
  }
  function yl(a, l, t) {
    ((a === Aa && (ya === 2 || ya === 9)) || a.cancelPendingCommit !== null) &&
      (Ee(a, 0), St(a, ia, El, !1)),
      He(a, t),
      ((va & 2) === 0 || a !== Aa) &&
        (a === Aa &&
          ((va & 2) === 0 && (Zt |= t), _a === 4 && St(a, ia, El, !1)),
        Hl(a));
  }
  function eo(a, l, t) {
    if ((va & 6) !== 0) throw Error(h(327));
    var e = (!t && (l & 124) === 0 && (l & a.expiredLanes) === 0) || Re(a, l),
      u = e ? Lm(a, l) : Uc(a, l, !0),
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
                if (Ac && !f) {
                  (c.errorRecoveryDisabledLanes |= n), (Zt |= n), (u = 4);
                  break a;
                }
                (n = fl),
                  (fl = u),
                  n !== null && (fl === null ? (fl = n) : fl.push.apply(fl, n));
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
              St(e, l, El, !vt);
              break a;
            case 2:
              fl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((l & 62914560) === l && ((u = Oc + 300 - el()), 10 < u)) {
            if ((St(e, l, El, !vt), Cu(e, 0, !0) !== 0)) break a;
            e.timeoutHandle = Ro(
              uo.bind(null, e, t, fl, Tn, Tc, l, El, Zt, pe, vt, n, 2, -0, 0),
              u
            );
            break a;
          }
          uo(e, t, fl, Tn, Tc, l, El, Zt, pe, vt, n, 0, -0, 0);
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
        ((Au = { stylesheets: null, count: 0, unsuspend: N0 }),
        Fr(l),
        (T = E0()),
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
            if (!rl(n(), u)) return !1;
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
      var n = 31 - sl(u),
        i = 1 << n;
      (e[n] = -1), (u &= ~i);
    }
    t !== 0 && vf(a, t, l);
  }
  function On() {
    return (va & 6) === 0 ? (gu(0), !1) : !0;
  }
  function xc() {
    if (la !== null) {
      if (ya === 0) var a = la.return;
      else (a = la), (Vl = qt = null), wi(a), (ye = null), (cu = 0), (a = la);
      for (; a !== null; ) Br(a.alternate, a), (a = a.return);
      la = null;
    }
  }
  function Ee(a, l) {
    var t = a.timeoutHandle;
    t !== -1 && ((a.timeoutHandle = -1), n0(t)),
      (t = a.cancelPendingCommit),
      t !== null && ((a.cancelPendingCommit = null), t()),
      xc(),
      (Aa = a),
      (la = t = Ql(a.current, null)),
      (ia = l),
      (ya = 0),
      (hl = null),
      (vt = !1),
      (ze = Re(a, l)),
      (Ac = !1),
      (pe = El = Ec = Zt = yt = _a = 0),
      (fl = vu = null),
      (Tc = !1),
      (l & 8) !== 0 && (l |= l & 32);
    var e = a.entangledLanes;
    if (e !== 0)
      for (a = a.entanglements, e &= l; 0 < e; ) {
        var u = 31 - sl(e),
          n = 1 << u;
        (l |= a[u]), (e &= ~n);
      }
    return (Il = l), wu(), t;
  }
  function no(a, l) {
    (P = null),
      (N.H = mn),
      l === Ie || l === tn
        ? ((l = Ns()), (ya = 3))
        : l === Ss
        ? ((l = Ns()), (ya = 4))
        : (ya =
            l === Ar
              ? 8
              : l !== null &&
                typeof l == "object" &&
                typeof l.then == "function"
              ? 6
              : 1),
      (hl = l),
      la === null && ((_a = 1), bn(a, Sl(l, a.current)));
  }
  function io() {
    var a = N.H;
    return (N.H = mn), a === null ? mn : a;
  }
  function co() {
    var a = N.A;
    return (N.A = Xm), a;
  }
  function jc() {
    (_a = 4),
      vt || ((ia & 4194048) !== ia && Al.current !== null) || (ze = !0),
      ((yt & 134217727) === 0 && (Zt & 134217727) === 0) ||
        Aa === null ||
        St(Aa, ia, El, !1);
  }
  function Uc(a, l, t) {
    var e = va;
    va |= 2;
    var u = io(),
      n = co();
    (Aa !== a || ia !== l) && ((Tn = null), Ee(a, l)), (l = !1);
    var i = _a;
    a: do
      try {
        if (ya !== 0 && la !== null) {
          var c = la,
            f = hl;
          switch (ya) {
            case 8:
              xc(), (i = 6);
              break a;
            case 3:
            case 2:
            case 9:
            case 6:
              Al.current === null && (l = !0);
              var y = ya;
              if (((ya = 0), (hl = null), Te(a, c, f, y), t && ze)) {
                i = 0;
                break a;
              }
              break;
            default:
              (y = ya), (ya = 0), (hl = null), Te(a, c, f, y);
          }
        }
        Zm(), (i = _a);
        break;
      } catch (A) {
        no(a, A);
      }
    while (!0);
    return (
      l && a.shellSuspendCounter++,
      (Vl = qt = null),
      (va = e),
      (N.H = u),
      (N.A = n),
      la === null && ((Aa = null), (ia = 0), wu()),
      i
    );
  }
  function Zm() {
    for (; la !== null; ) fo(la);
  }
  function Lm(a, l) {
    var t = va;
    va |= 2;
    var e = io(),
      u = co();
    Aa !== a || ia !== l
      ? ((Tn = null), (En = el() + 500), Ee(a, l))
      : (ze = Re(a, l));
    a: do
      try {
        if (ya !== 0 && la !== null) {
          l = la;
          var n = hl;
          l: switch (ya) {
            case 1:
              (ya = 0), (hl = null), Te(a, l, n, 1);
              break;
            case 2:
            case 9:
              if (zs(n)) {
                (ya = 0), (hl = null), so(l);
                break;
              }
              (l = function () {
                (ya !== 2 && ya !== 9) || Aa !== a || (ya = 7), Hl(a);
              }),
                n.then(l, l);
              break a;
            case 3:
              ya = 7;
              break a;
            case 4:
              ya = 5;
              break a;
            case 7:
              zs(n)
                ? ((ya = 0), (hl = null), so(l))
                : ((ya = 0), (hl = null), Te(a, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (la.tag) {
                case 26:
                  i = la.memoizedState;
                case 5:
                case 27:
                  var c = la;
                  if (!i || Ko(i)) {
                    (ya = 0), (hl = null);
                    var f = c.sibling;
                    if (f !== null) la = f;
                    else {
                      var y = c.return;
                      y !== null ? ((la = y), _n(y)) : (la = null);
                    }
                    break l;
                  }
              }
              (ya = 0), (hl = null), Te(a, l, n, 5);
              break;
            case 6:
              (ya = 0), (hl = null), Te(a, l, n, 6);
              break;
            case 8:
              xc(), (_a = 6);
              break a;
            default:
              throw Error(h(462));
          }
        }
        Vm();
        break;
      } catch (A) {
        no(a, A);
      }
    while (!0);
    return (
      (Vl = qt = null),
      (N.H = e),
      (N.A = u),
      (va = t),
      la !== null ? 0 : ((Aa = null), (ia = 0), wu(), _a)
    );
  }
  function Vm() {
    for (; la !== null && !Fa(); ) fo(la);
  }
  function fo(a) {
    var l = Cr(a.alternate, a, Il);
    (a.memoizedProps = a.pendingProps), l === null ? _n(a) : (la = l);
  }
  function so(a) {
    var l = a,
      t = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Dr(t, l, l.pendingProps, l.type, void 0, ia);
        break;
      case 11:
        l = Dr(t, l, l.pendingProps, l.type.render, l.ref, ia);
        break;
      case 5:
        wi(l);
      default:
        Br(t, l), (l = la = rs(l, Il)), (l = Cr(t, l, Il));
    }
    (a.memoizedProps = a.pendingProps), l === null ? _n(a) : (la = l);
  }
  function Te(a, l, t, e) {
    (Vl = qt = null), wi(l), (ye = null), (cu = 0);
    var u = l.return;
    try {
      if (Rm(a, u, l, t, ia)) {
        (_a = 1), bn(a, Sl(t, a.current)), (la = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((la = u), n);
      (_a = 1), bn(a, Sl(t, a.current)), (la = null);
      return;
    }
    l.flags & 32768
      ? (oa || e === 1
          ? (a = !0)
          : ze || (ia & 536870912) !== 0
          ? (a = !1)
          : ((vt = a = !0),
            (e === 2 || e === 9 || e === 3 || e === 6) &&
              ((e = Al.current),
              e !== null && e.tag === 13 && (e.flags |= 16384))),
        ro(l, a))
      : _n(l);
  }
  function _n(a) {
    var l = a;
    do {
      if ((l.flags & 32768) !== 0) {
        ro(l, vt);
        return;
      }
      a = l.return;
      var t = Cm(l.alternate, l, Il);
      if (t !== null) {
        la = t;
        return;
      }
      if (((l = l.sibling), l !== null)) {
        la = l;
        return;
      }
      la = l = a;
    } while (l !== null);
    _a === 0 && (_a = 5);
  }
  function ro(a, l) {
    do {
      var t = qm(a.alternate, a);
      if (t !== null) {
        (t.flags &= 32767), (la = t);
        return;
      }
      if (
        ((t = a.return),
        t !== null &&
          ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)),
        !l && ((a = a.sibling), a !== null))
      ) {
        la = a;
        return;
      }
      la = a = t;
    } while (a !== null);
    (_a = 6), (la = null);
  }
  function oo(a, l, t, e, u, n, i, c, f) {
    a.cancelPendingCommit = null;
    do Mn();
    while (Wa !== 0);
    if ((va & 6) !== 0) throw Error(h(327));
    if (l !== null) {
      if (l === a.current) throw Error(h(177));
      if (
        ((n = l.lanes | l.childLanes),
        (n |= Ni),
        Nd(a, t, n, i, c, f),
        a === Aa && ((la = Aa = null), (ia = 0)),
        (Ne = l),
        (bt = a),
        (Ae = t),
        (_c = n),
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
        (e = N.T), (N.T = null), (u = R.p), (R.p = 2), (i = va), (va |= 4);
        try {
          Bm(a, l, t);
        } finally {
          (va = i), (R.p = u), (N.T = e);
        }
      }
      (Wa = 1), mo(), ho(), vo();
    }
  }
  function mo() {
    if (Wa === 1) {
      Wa = 0;
      var a = bt,
        l = Ne,
        t = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || t) {
        (t = N.T), (N.T = null);
        var e = R.p;
        R.p = 2;
        var u = va;
        va |= 4;
        try {
          $r(l, a);
          var n = Vc,
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
                    L = Math.min(f.start, K),
                    za = f.end === void 0 ? L : Math.min(f.end, K);
                  !b.extend && L > za && ((i = za), (za = L), (L = i));
                  var m = If(c, L),
                    d = If(c, za);
                  if (
                    m &&
                    d &&
                    (b.rangeCount !== 1 ||
                      b.anchorNode !== m.node ||
                      b.anchorOffset !== m.offset ||
                      b.focusNode !== d.node ||
                      b.focusOffset !== d.offset)
                  ) {
                    var v = T.createRange();
                    v.setStart(m.node, m.offset),
                      b.removeAllRanges(),
                      L > za
                        ? (b.addRange(v), b.extend(d.node, d.offset))
                        : (v.setEnd(d.node, d.offset), b.addRange(v));
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
          (Gn = !!Lc), (Vc = Lc = null);
        } finally {
          (va = u), (R.p = e), (N.T = t);
        }
      }
      (a.current = l), (Wa = 2);
    }
  }
  function ho() {
    if (Wa === 2) {
      Wa = 0;
      var a = bt,
        l = Ne,
        t = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || t) {
        (t = N.T), (N.T = null);
        var e = R.p;
        R.p = 2;
        var u = va;
        va |= 4;
        try {
          Vr(a, l.alternate, l);
        } finally {
          (va = u), (R.p = e), (N.T = t);
        }
      }
      Wa = 3;
    }
  }
  function vo() {
    if (Wa === 4 || Wa === 3) {
      (Wa = 0), at();
      var a = bt,
        l = Ne,
        t = Ae,
        e = lo;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
        ? (Wa = 5)
        : ((Wa = 0), (Ne = bt = null), yo(a, a.pendingLanes));
      var u = a.pendingLanes;
      if (
        (u === 0 && (gt = null),
        kn(t),
        (l = l.stateNode),
        wa && typeof wa.onCommitFiberRoot == "function")
      )
        try {
          wa.onCommitFiberRoot(Yl, l, void 0, (l.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        (l = N.T), (u = R.p), (R.p = 2), (N.T = null);
        try {
          for (var n = a.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          (N.T = l), (R.p = u);
        }
      }
      (Ae & 3) !== 0 && Mn(),
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
    if (Wa !== 5) return !1;
    var a = bt,
      l = _c;
    _c = 0;
    var t = kn(Ae),
      e = N.T,
      u = R.p;
    try {
      (R.p = 32 > t ? 32 : t), (N.T = null), (t = Mc), (Mc = null);
      var n = bt,
        i = Ae;
      if (((Wa = 0), (Ne = bt = null), (Ae = 0), (va & 6) !== 0))
        throw Error(h(331));
      var c = va;
      if (
        ((va |= 4),
        Pr(n.current),
        kr(n, n.current, i, t),
        (va = c),
        gu(0, !1),
        wa && typeof wa.onPostCommitFiberRoot == "function")
      )
        try {
          wa.onPostCommitFiberRoot(Yl, n);
        } catch {}
      return !0;
    } finally {
      (R.p = u), (N.T = e), yo(a, l);
    }
  }
  function bo(a, l, t) {
    (l = Sl(t, l)),
      (l = cc(a.stateNode, l, 2)),
      (a = ft(a, l, 2)),
      a !== null && (He(a, 2), Hl(a));
  }
  function pa(a, l, t) {
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
            (a = Sl(t, a)),
              (t = pr(2)),
              (e = ft(l, t, 2)),
              e !== null && (Nr(t, e, l, a), He(e, 2), Hl(e));
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
      ((Ac = !0), u.add(t), (a = Km.bind(null, a, l, t)), l.then(a, a));
  }
  function Km(a, l, t) {
    var e = a.pingCache;
    e !== null && e.delete(l),
      (a.pingedLanes |= a.suspendedLanes & t),
      (a.warmLanes &= ~t),
      Aa === a &&
        (ia & t) === t &&
        (_a === 4 || (_a === 3 && (ia & 62914560) === ia && 300 > el() - Oc)
          ? (va & 2) === 0 && Ee(a, 0)
          : (Ec |= t),
        pe === ia && (pe = 0)),
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
    return ha(a, l);
  }
  var Dn = null,
    Oe = null,
    Hc = !1,
    xn = !1,
    Cc = !1,
    Lt = 0;
  function Hl(a) {
    a !== Oe &&
      a.next === null &&
      (Oe === null ? (Dn = Oe = a) : (Oe = Oe.next = a)),
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
              (n = (1 << (31 - sl(42 | a) + 1)) - 1),
                (n &= u & ~(i & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((t = !0), Ao(e, n));
          } else
            (n = ia),
              (n = Cu(
                e,
                e === Aa ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Re(e, n) || ((t = !0), Ao(e, n));
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
    Lt !== 0 && (u0() && (a = Lt), (Lt = 0));
    for (var l = el(), t = null, e = Dn; e !== null; ) {
      var u = e.next,
        n = po(e, l);
      n === 0
        ? ((e.next = null),
          t === null ? (Dn = u) : (t.next = u),
          u === null && (Oe = t))
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
      var i = 31 - sl(n),
        c = 1 << i,
        f = u[i];
      f === -1
        ? ((c & t) === 0 || (c & e) !== 0) && (u[i] = pd(c, l))
        : f <= l && (a.expiredLanes |= c),
        (n &= ~c);
    }
    if (
      ((l = Aa),
      (t = ia),
      (t = Cu(
        a,
        a === l ? t : 0,
        a.cancelPendingCommit !== null || a.timeoutHandle !== -1
      )),
      (e = a.callbackNode),
      t === 0 ||
        (a === l && (ya === 2 || ya === 9)) ||
        a.cancelPendingCommit !== null)
    )
      return (
        e !== null && e !== null && fa(e),
        (a.callbackNode = null),
        (a.callbackPriority = 0)
      );
    if ((t & 3) === 0 || Re(a, t)) {
      if (((l = t & -t), l === a.callbackPriority)) return l;
      switch ((e !== null && fa(e), kn(t))) {
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
        (e = No.bind(null, a)),
        (t = ha(t, e)),
        (a.callbackPriority = l),
        (a.callbackNode = t),
        l
      );
    }
    return (
      e !== null && e !== null && fa(e),
      (a.callbackPriority = 2),
      (a.callbackNode = null),
      2
    );
  }
  function No(a, l) {
    if (Wa !== 0 && Wa !== 5)
      return (a.callbackNode = null), (a.callbackPriority = 0), null;
    var t = a.callbackNode;
    if (Mn() && a.callbackNode !== t) return null;
    var e = ia;
    return (
      (e = Cu(
        a,
        a === Aa ? e : 0,
        a.cancelPendingCommit !== null || a.timeoutHandle !== -1
      )),
      e === 0
        ? null
        : (eo(a, e, l),
          po(a, el()),
          a.callbackNode != null && a.callbackNode === t
            ? No.bind(null, a)
            : null)
    );
  }
  function Ao(a, l) {
    if (Mn()) return null;
    eo(a, l, !0);
  }
  function km() {
    i0(function () {
      (va & 6) !== 0 ? ha(Vt, Wm) : zo();
    });
  }
  function qc() {
    return Lt === 0 && (Lt = mf()), Lt;
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
      var n = Eo((u[ul] || null).action),
        i = e.submitter;
      i &&
        ((l = (l = i[ul] || null)
          ? Eo(l.formAction)
          : i.getAttribute("formAction")),
        l !== null && ((n = l), (i = null)));
      var c = new Vu("action", "action", null, e, u);
      a.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (Lt !== 0) {
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
    Ol(Im, "on" + Pm);
  }
  Ol(es, "onAnimationEnd"),
    Ol(us, "onAnimationIteration"),
    Ol(ns, "onAnimationStart"),
    Ol("dblclick", "onDoubleClick"),
    Ol("focusin", "onFocus"),
    Ol("focusout", "onBlur"),
    Ol(ym, "onTransitionRun"),
    Ol(gm, "onTransitionStart"),
    Ol(bm, "onTransitionCancel"),
    Ol(is, "onTransitionEnd"),
    kt("onMouseEnter", ["mouseout", "mouseover"]),
    kt("onMouseLeave", ["mouseout", "mouseover"]),
    kt("onPointerEnter", ["pointerout", "pointerover"]),
    kt("onPointerLeave", ["pointerout", "pointerover"]),
    _t(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    _t(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    _t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    _t(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    _t(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    _t(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var bu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    a0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(bu)
    );
  function Oo(a, l) {
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
  function ta(a, l) {
    var t = l[Fn];
    t === void 0 && (t = l[Fn] = new Set());
    var e = a + "__bubble";
    t.has(e) || (_o(l, a, 2, !1), t.add(e));
  }
  function Xc(a, l, t) {
    var e = 0;
    l && (e |= 4), _o(t, a, e, l);
  }
  var jn = "_reactListening" + Math.random().toString(36).slice(2);
  function Gc(a) {
    if (!a[jn]) {
      (a[jn] = !0),
        Sf.forEach(function (t) {
          t !== "selectionchange" && (a0.has(t) || Xc(t, !1, a), Xc(t, !0, a));
        });
      var l = a.nodeType === 9 ? a : a.ownerDocument;
      l === null || l[jn] || ((l[jn] = !0), Xc("selectionchange", !1, l));
    }
  }
  function _o(a, l, t, e) {
    switch (Fo(l)) {
      case 2:
        var u = _0;
        break;
      case 8:
        u = M0;
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
          var b = Vu,
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
          var L = (l & 4) !== 0,
            za = !L && (a === "scroll" || a === "scrollend"),
            m = L ? (g !== null ? g + "Capture" : null) : g;
          L = [];
          for (var d = y, v; d !== null; ) {
            var E = d;
            if (
              ((v = E.stateNode),
              (E = E.tag),
              (E !== 5 && E !== 26 && E !== 27) ||
                v === null ||
                m === null ||
                ((E = Be(d, m)), E != null && L.push(Su(d, E, v))),
              za)
            )
              break;
            d = d.return;
          }
          0 < L.length &&
            ((g = new b(g, K, null, t, A)), T.push({ event: g, listeners: L }));
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
                  ((za = C(K)),
                  (L = K.tag),
                  K !== za || (L !== 5 && L !== 27 && L !== 6)) &&
                  (K = null))
              : ((b = null), (K = y)),
            b !== K)
          ) {
            if (
              ((L = qf),
              (E = "onMouseLeave"),
              (m = "onMouseEnter"),
              (d = "mouse"),
              (a === "pointerout" || a === "pointerover") &&
                ((L = Yf),
                (E = "onPointerLeave"),
                (m = "onPointerEnter"),
                (d = "pointer")),
              (za = b == null ? g : qe(b)),
              (v = K == null ? g : qe(K)),
              (g = new L(E, d + "leave", b, t, A)),
              (g.target = za),
              (g.relatedTarget = v),
              (E = null),
              wt(A) === y &&
                ((L = new L(m, d + "enter", K, t, A)),
                (L.target = v),
                (L.relatedTarget = za),
                (E = L)),
              (za = E),
              b && K)
            )
              l: {
                for (L = b, m = K, d = 0, v = L; v; v = _e(v)) d++;
                for (v = 0, E = m; E; E = _e(E)) v++;
                for (; 0 < d - v; ) (L = _e(L)), d--;
                for (; 0 < v - d; ) (m = _e(m)), v--;
                for (; d--; ) {
                  if (L === m || (m !== null && L === m.alternate)) break l;
                  (L = _e(L)), (m = _e(m));
                }
                L = null;
              }
            else L = null;
            b !== null && Mo(T, g, b, L, !1),
              K !== null && za !== null && Mo(T, za, K, L, !0);
          }
        }
        a: {
          if (
            ((g = y ? qe(y) : window),
            (b = g.nodeName && g.nodeName.toLowerCase()),
            b === "select" || (b === "input" && g.type === "file"))
          )
            var q = Jf;
          else if (Vf(g))
            if (wf) q = mm;
            else {
              q = om;
              var aa = rm;
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
          aa && aa(a, g, y),
            a === "focusout" &&
              y &&
              g.type === "number" &&
              y.memoizedProps.value != null &&
              ei(g, "number", g.value);
        }
        switch (((aa = y ? qe(y) : window), a)) {
          case "focusin":
            (Vf(aa) || aa.contentEditable === "true") &&
              ((ee = aa), (bi = y), (Ke = null));
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
        var Q;
        if (hi)
          a: {
            switch (a) {
              case "compositionstart":
                var V = "onCompositionStart";
                break a;
              case "compositionend":
                V = "onCompositionEnd";
                break a;
              case "compositionupdate":
                V = "onCompositionUpdate";
                break a;
            }
            V = void 0;
          }
        else
          te
            ? Zf(a, t) && (V = "onCompositionEnd")
            : a === "keydown" &&
              t.keyCode === 229 &&
              (V = "onCompositionStart");
        V &&
          (Xf &&
            t.locale !== "ko" &&
            (te || V !== "onCompositionStart"
              ? V === "onCompositionEnd" && te && (Q = Hf())
              : ((ut = A),
                (si = "value" in ut ? ut.value : ut.textContent),
                (te = !0))),
          (aa = Un(y, V)),
          0 < aa.length &&
            ((V = new Bf(V, a, null, t, A)),
            T.push({ event: V, listeners: aa }),
            Q ? (V.data = Q) : ((Q = Lf(t)), Q !== null && (V.data = Q)))),
          (Q = nm ? im(a, t) : cm(a, t)) &&
            ((V = Un(y, "onBeforeInput")),
            0 < V.length &&
              ((aa = new Bf("onBeforeInput", "beforeinput", null, t, A)),
              T.push({ event: aa, listeners: V }),
              (aa.data = Q))),
          Fm(T, a, y, t, A);
      }
      Oo(T, l);
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
  function _e(a) {
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
  var l0 = /\r\n?/g,
    t0 = /\u0000|\uFFFD/g;
  function Do(a) {
    return (typeof a == "string" ? a : "" + a)
      .replace(
        l0,
        `
`
      )
      .replace(t0, "");
  }
  function xo(a, l) {
    return (l = Do(l)), Do(a) === l;
  }
  function Rn() {}
  function Sa(a, l, t, e, u, n) {
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
              ? (l !== "input" && Sa(a, l, "name", u.name, u, null),
                Sa(a, l, "formEncType", u.formEncType, u, null),
                Sa(a, l, "formMethod", u.formMethod, u, null),
                Sa(a, l, "formTarget", u.formTarget, u, null))
              : (Sa(a, l, "encType", u.encType, u, null),
                Sa(a, l, "method", u.method, u, null),
                Sa(a, l, "target", u.target, u, null)));
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
        e != null && ta("scroll", a);
        break;
      case "onScrollEnd":
        e != null && ta("scrollend", a);
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
        ta("beforetoggle", a), ta("toggle", a), qu(a, "popover", e);
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
        e != null && ta("scroll", a);
        break;
      case "onScrollEnd":
        e != null && ta("scrollend", a);
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
              (n = a[ul] || null),
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
  function ka(a, l, t) {
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
        ta("error", a), ta("load", a);
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
                  Sa(a, l, n, i, t, null);
              }
          }
        u && Sa(a, l, "srcSet", t.srcSet, t, null),
          e && Sa(a, l, "src", t.src, t, null);
        return;
      case "input":
        ta("invalid", a);
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
                  Sa(a, l, e, A, t, null);
              }
          }
        _f(a, n, c, f, y, i, u, !1), Yu(a);
        return;
      case "select":
        ta("invalid", a), (e = i = n = null);
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
                Sa(a, l, u, c, t, null);
            }
        (l = n),
          (t = i),
          (a.multiple = !!e),
          l != null ? It(a, !!e, l, !1) : t != null && It(a, !!e, t, !0);
        return;
      case "textarea":
        ta("invalid", a), (n = u = e = null);
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
                Sa(a, l, i, c, t, null);
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
                Sa(a, l, f, e, t, null);
            }
        return;
      case "dialog":
        ta("beforetoggle", a), ta("toggle", a), ta("cancel", a), ta("close", a);
        break;
      case "iframe":
      case "object":
        ta("load", a);
        break;
      case "video":
      case "audio":
        for (e = 0; e < bu.length; e++) ta(bu[e], a);
        break;
      case "image":
        ta("error", a), ta("load", a);
        break;
      case "details":
        ta("toggle", a);
        break;
      case "embed":
      case "source":
      case "link":
        ta("error", a), ta("load", a);
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
                Sa(a, l, y, e, t, null);
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
      t.hasOwnProperty(c) && ((e = t[c]), e != null && Sa(a, l, c, e, t, null));
  }
  function e0(a, l, t, e) {
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
                e.hasOwnProperty(b) || Sa(a, l, b, null, e, T);
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
                b !== T && Sa(a, l, g, b, e, T);
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
                e.hasOwnProperty(n) || Sa(a, l, n, null, e, f);
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
                n !== f && Sa(a, l, u, n, e, f);
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
                Sa(a, l, c, null, e, u);
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
                u !== n && Sa(a, l, i, u, e, n);
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
                Sa(a, l, K, null, e, g);
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
                Sa(a, l, f, g, e, b);
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
        for (var L in t)
          (g = t[L]),
            t.hasOwnProperty(L) &&
              g != null &&
              !e.hasOwnProperty(L) &&
              Sa(a, l, L, null, e, g);
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
                Sa(a, l, y, g, e, b);
            }
        return;
      default:
        if (ui(l)) {
          for (var za in t)
            (g = t[za]),
              t.hasOwnProperty(za) &&
                g !== void 0 &&
                !e.hasOwnProperty(za) &&
                Zc(a, l, za, void 0, e, g);
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
          Sa(a, l, m, null, e, g);
    for (T in e)
      (g = e[T]),
        (b = t[T]),
        !e.hasOwnProperty(T) ||
          g === b ||
          (g == null && b == null) ||
          Sa(a, l, T, g, e, b);
  }
  var Lc = null,
    Vc = null;
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
  function u0() {
    var a = window.event;
    return a && a.type === "popstate"
      ? a === Jc
        ? !1
        : ((Jc = a), !0)
      : ((Jc = null), !1);
  }
  var Ro = typeof setTimeout == "function" ? setTimeout : void 0,
    n0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ho = typeof Promise == "function" ? Promise : void 0,
    i0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ho < "u"
        ? function (a) {
            return Ho.resolve(null).then(a).catch(c0);
          }
        : Ro;
  function c0(a) {
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
  function f0(a, l, t, e) {
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
      if (((a = Ml(a.nextSibling)), a === null)) break;
    }
    return null;
  }
  function s0(a, l, t) {
    if (l === "") return null;
    for (; a.nodeType !== 3; )
      if (
        ((a.nodeType !== 1 || a.nodeName !== "INPUT" || a.type !== "hidden") &&
          !t) ||
        ((a = Ml(a.nextSibling)), a === null)
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
  function r0(a, l) {
    var t = a.ownerDocument;
    if (a.data !== "$?" || t.readyState === "complete") l();
    else {
      var e = function () {
        l(), t.removeEventListener("DOMContentLoaded", e);
      };
      t.addEventListener("DOMContentLoaded", e), (a._reactRetry = e);
    }
  }
  function Ml(a) {
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
  var Tl = new Map(),
    Yo = new Set();
  function Cn(a) {
    return typeof a.getRootNode == "function"
      ? a.getRootNode()
      : a.nodeType === 9
      ? a
      : a.ownerDocument;
  }
  var Pl = R.d;
  R.d = { f: o0, r: d0, D: m0, C: h0, L: v0, m: y0, X: b0, S: g0, M: S0 };
  function o0() {
    var a = Pl.f(),
      l = On();
    return a || l;
  }
  function d0(a) {
    var l = $t(a);
    l !== null && l.tag === 5 && l.type === "form" ? er(l) : Pl.r(a);
  }
  var Me = typeof document > "u" ? null : document;
  function Xo(a, l, t) {
    var e = Me;
    if (e && typeof l == "string" && l) {
      var u = bl(l);
      (u = 'link[rel="' + a + '"][href="' + u + '"]'),
        typeof t == "string" && (u += '[crossorigin="' + t + '"]'),
        Yo.has(u) ||
          (Yo.add(u),
          (a = { rel: a, crossOrigin: t, href: l }),
          e.querySelector(u) === null &&
            ((l = e.createElement("link")),
            ka(l, "link", a),
            La(l),
            e.head.appendChild(l)));
    }
  }
  function m0(a) {
    Pl.D(a), Xo("dns-prefetch", a, null);
  }
  function h0(a, l) {
    Pl.C(a, l), Xo("preconnect", a, l);
  }
  function v0(a, l, t) {
    Pl.L(a, l, t);
    var e = Me;
    if (e && a && l) {
      var u = 'link[rel="preload"][as="' + bl(l) + '"]';
      l === "image" && t && t.imageSrcSet
        ? ((u += '[imagesrcset="' + bl(t.imageSrcSet) + '"]'),
          typeof t.imageSizes == "string" &&
            (u += '[imagesizes="' + bl(t.imageSizes) + '"]'))
        : (u += '[href="' + bl(a) + '"]');
      var n = u;
      switch (l) {
        case "style":
          n = De(a);
          break;
        case "script":
          n = xe(a);
      }
      Tl.has(n) ||
        ((a = Y(
          {
            rel: "preload",
            href: l === "image" && t && t.imageSrcSet ? void 0 : a,
            as: l,
          },
          t
        )),
        Tl.set(n, a),
        e.querySelector(u) !== null ||
          (l === "style" && e.querySelector(pu(n))) ||
          (l === "script" && e.querySelector(Nu(n))) ||
          ((l = e.createElement("link")),
          ka(l, "link", a),
          La(l),
          e.head.appendChild(l)));
    }
  }
  function y0(a, l) {
    Pl.m(a, l);
    var t = Me;
    if (t && a) {
      var e = l && typeof l.as == "string" ? l.as : "script",
        u =
          'link[rel="modulepreload"][as="' + bl(e) + '"][href="' + bl(a) + '"]',
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
        !Tl.has(n) &&
        ((a = Y({ rel: "modulepreload", href: a }, l)),
        Tl.set(n, a),
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
          ka(e, "link", a),
          La(e),
          t.head.appendChild(e);
      }
    }
  }
  function g0(a, l, t) {
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
            (t = Tl.get(n)) && kc(a, t);
          var f = (i = e.createElement("link"));
          La(f),
            ka(f, "link", a),
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
  function b0(a, l) {
    Pl.X(a, l);
    var t = Me;
    if (t && a) {
      var e = Wt(t).hoistableScripts,
        u = xe(a),
        n = e.get(u);
      n ||
        ((n = t.querySelector(Nu(u))),
        n ||
          ((a = Y({ src: a, async: !0 }, l)),
          (l = Tl.get(u)) && Fc(a, l),
          (n = t.createElement("script")),
          La(n),
          ka(n, "link", a),
          t.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function S0(a, l) {
    Pl.M(a, l);
    var t = Me;
    if (t && a) {
      var e = Wt(t).hoistableScripts,
        u = xe(a),
        n = e.get(u);
      n ||
        ((n = t.querySelector(Nu(u))),
        n ||
          ((a = Y({ src: a, async: !0, type: "module" }, l)),
          (l = Tl.get(u)) && Fc(a, l),
          (n = t.createElement("script")),
          La(n),
          ka(n, "link", a),
          t.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Go(a, l, t, e) {
    var u = (u = z.current) ? Cn(u) : null;
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
              Tl.has(a) ||
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
                Tl.set(a, t),
                n || z0(u, a, t, i.state))),
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
    return 'href="' + bl(a) + '"';
  }
  function pu(a) {
    return 'link[rel="stylesheet"][' + a + "]";
  }
  function Qo(a) {
    return Y({}, a, { "data-precedence": a.precedence, precedence: null });
  }
  function z0(a, l, t, e) {
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
        ka(l, "link", t),
        La(l),
        a.head.appendChild(l));
  }
  function xe(a) {
    return '[src="' + bl(a) + '"]';
  }
  function Nu(a) {
    return "script[async]" + a;
  }
  function Zo(a, l, t) {
    if ((l.count++, l.instance === null))
      switch (l.type) {
        case "style":
          var e = a.querySelector('style[data-href~="' + bl(t.href) + '"]');
          if (e) return (l.instance = e), La(e), e;
          var u = Y({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (a.ownerDocument || a).createElement("style")),
            La(e),
            ka(e, "style", u),
            qn(e, t.precedence, a),
            (l.instance = e)
          );
        case "stylesheet":
          u = De(t.href);
          var n = a.querySelector(pu(u));
          if (n) return (l.state.loading |= 4), (l.instance = n), La(n), n;
          (e = Qo(t)),
            (u = Tl.get(u)) && kc(e, u),
            (n = (a.ownerDocument || a).createElement("link")),
            La(n);
          var i = n;
          return (
            (i._p = new Promise(function (c, f) {
              (i.onload = c), (i.onerror = f);
            })),
            ka(n, "link", e),
            (l.state.loading |= 4),
            qn(n, t.precedence, a),
            (l.instance = n)
          );
        case "script":
          return (
            (n = xe(t.src)),
            (u = a.querySelector(Nu(n)))
              ? ((l.instance = u), La(u), u)
              : ((e = t),
                (u = Tl.get(n)) && ((e = Y({}, t)), Fc(e, u)),
                (a = a.ownerDocument || a),
                (u = a.createElement("script")),
                La(u),
                ka(u, "link", e),
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
  function Lo(a, l, t) {
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
          n[Ia] ||
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
  function Vo(a, l, t) {
    (a = a.ownerDocument || a),
      a.head.insertBefore(
        t,
        l === "title" ? a.querySelector("head > title") : null
      );
  }
  function p0(a, l, t) {
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
  var Au = null;
  function N0() {}
  function A0(a, l, t) {
    if (Au === null) throw Error(h(475));
    var e = Au;
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
            La(n);
          return;
        }
        (n = a.ownerDocument || a),
          (t = Qo(t)),
          (u = Tl.get(u)) && kc(t, u),
          (n = n.createElement("link")),
          La(n);
        var i = n;
        (i._p = new Promise(function (c, f) {
          (i.onload = c), (i.onerror = f);
        })),
          ka(n, "link", t),
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
  function E0() {
    if (Au === null) throw Error(h(475));
    var a = Au;
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
        l.forEach(T0, a),
        (Xn = null),
        Yn.call(a));
  }
  function T0(a, l) {
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
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0,
  };
  function O0(a, l, t, e, u, n, i, c) {
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
      (a = new O0(a, l, t, i, c, f, y, T)),
      (l = 1),
      n === !0 && (l |= 24),
      (n = ol(3, null, null, l)),
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
      t !== null && (yl(t, a, l), au(t, a, l));
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
      l !== null && yl(l, a, 67108864), Pc(a, 67108864);
    }
  }
  var Gn = !0;
  function _0(a, l, t, e) {
    var u = N.T;
    N.T = null;
    var n = R.p;
    try {
      (R.p = 2), af(a, l, t, e);
    } finally {
      (R.p = n), (N.T = u);
    }
  }
  function M0(a, l, t, e) {
    var u = N.T;
    N.T = null;
    var n = R.p;
    try {
      (R.p = 8), af(a, l, t, e);
    } finally {
      (R.p = n), (N.T = u);
    }
  }
  function af(a, l, t, e) {
    if (Gn) {
      var u = lf(e);
      if (u === null) Qc(a, l, e, Qn, t), Io(a, e);
      else if (x0(u, a, l, t, e)) e.stopPropagation();
      else if ((Io(a, e), l & 4 && -1 < D0.indexOf(a))) {
        for (; u !== null; ) {
          var n = $t(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Ot(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - sl(i));
                      (c.entanglements[1] |= f), (i &= ~f);
                    }
                    Hl(n), (va & 6) === 0 && ((En = el() + 500), gu(0));
                  }
                }
                break;
              case 13:
                (c = ie(n, 2)), c !== null && yl(c, n, 2), On(), Pc(n, 2);
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
      var l = C(a);
      if (l === null) a = null;
      else {
        var t = l.tag;
        if (t === 13) {
          if (((a = X(l)), a !== null)) return a;
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
          case Vt:
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
    Nt = null,
    At = null,
    Tu = new Map(),
    Ou = new Map(),
    Et = [],
    D0 =
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
        Nt = null;
        break;
      case "mouseover":
      case "mouseout":
        At = null;
        break;
      case "pointerover":
      case "pointerout":
        Tu.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ou.delete(l.pointerId);
    }
  }
  function _u(a, l, t, e, u, n) {
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
  function x0(a, l, t, e, u) {
    switch (l) {
      case "focusin":
        return (pt = _u(pt, a, l, t, e, u)), !0;
      case "dragenter":
        return (Nt = _u(Nt, a, l, t, e, u)), !0;
      case "mouseover":
        return (At = _u(At, a, l, t, e, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return Tu.set(n, _u(Tu.get(n) || null, a, l, t, e, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), Ou.set(n, _u(Ou.get(n) || null, a, l, t, e, u)), !0
        );
    }
    return !1;
  }
  function Po(a) {
    var l = wt(a.target);
    if (l !== null) {
      var t = C(l);
      if (t !== null) {
        if (((l = t.tag), l === 13)) {
          if (((l = X(t)), l !== null)) {
            (a.blockedOn = l),
              Ad(a.priority, function () {
                if (t.tag === 13) {
                  var e = vl();
                  e = Wn(e);
                  var u = ie(t, e);
                  u !== null && yl(u, t, e), Pc(t, e);
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
  function j0() {
    (ef = !1),
      pt !== null && Zn(pt) && (pt = null),
      Nt !== null && Zn(Nt) && (Nt = null),
      At !== null && Zn(At) && (At = null),
      Tu.forEach(ad),
      Ou.forEach(ad);
  }
  function Ln(a, l) {
    a.blockedOn === l &&
      ((a.blockedOn = null),
      ef ||
        ((ef = !0),
        M.unstable_scheduleCallback(M.unstable_NormalPriority, j0)));
  }
  var Vn = null;
  function ld(a) {
    Vn !== a &&
      ((Vn = a),
      M.unstable_scheduleCallback(M.unstable_NormalPriority, function () {
        Vn === a && (Vn = null);
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
      return Ln(f, a);
    }
    pt !== null && Ln(pt, a),
      Nt !== null && Ln(Nt, a),
      At !== null && Ln(At, a),
      Tu.forEach(l),
      Ou.forEach(l);
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
          i = u[ul] || null;
        if (typeof n == "function") i || ld(t);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[ul] || null))) c = i.formAction;
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
        e = vl();
      $o(t, e, a, l, null, null);
    }),
    (Kn.prototype.unmount = uf.prototype.unmount =
      function () {
        var a = this._internalRoot;
        if (a !== null) {
          this._internalRoot = null;
          var l = a.containerInfo;
          $o(a.current, 2, null, a, null, null), On(), (l[Jt] = null);
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
  var td = w.version;
  if (td !== "19.1.1") throw Error(h(527, td, "19.1.1"));
  R.findDOMNode = function (a) {
    var l = a._reactInternals;
    if (l === void 0)
      throw typeof a.render == "function"
        ? Error(h(188))
        : ((a = Object.keys(a).join(",")), Error(h(268, a)));
    return (
      (a = B(l)),
      (a = a !== null ? p(a) : null),
      (a = a === null ? null : a.stateNode),
      a
    );
  };
  var U0 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jn.isDisabled && Jn.supportsFiber)
      try {
        (Yl = Jn.inject(U0)), (wa = Jn);
      } catch {}
  }
  return (
    (xu.createRoot = function (a, l) {
      if (!x(a)) throw Error(h(299));
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
      if (!x(a)) throw Error(h(299));
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
        (e = vl()),
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
function Z0() {
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
      } catch (w) {
        console.error(w);
      }
  }
  return M(), (ff.exports = Q0()), ff.exports;
}
var L0 = Z0();
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
function yd(M, w) {
  if (!w || w.length === 0) return M;
  const G = { ...M };
  for (const h of w) {
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
      const k = x[1];
      (x[1] = x[2]), (x[2] = k);
    }
    if (!x) continue;
    const C = x[1],
      X = x[2],
      I = wn[C.toUpperCase()] || wn[C];
    if (!I) continue;
    const B = G[I] || "";
    if (!X.includes("+") && !X.includes("-")) {
      G[I] = X;
      continue;
    }
    const p = B.match(/^(\d+)D(\d+)([+-]\d+)?$/),
      Y = X.match(/^[+-]?(\d+)D(\d+)([+-]\d+)?$/);
    if (p && Y) {
      const k = parseInt(p[1], 10),
        ea = parseInt(p[2], 10),
        ra = p[3] ? parseInt(p[3], 10) : 0,
        Ma = parseInt(Y[1], 10),
        Ga = parseInt(Y[2], 10),
        Ra = Y[3] ? parseInt(Y[3], 10) : 0;
      if (ea === Ga) {
        const ca = k + Ma,
          Na = ra + Ra;
        G[I] = `${ca}D${ea}${Na !== 0 ? (Na > 0 ? "+" : "") + Na : ""}`;
      } else {
        const ca = B.trim(),
          Na = X.trim().replace(/^\+/, "");
        ca.includes(Na) || (G[I] = `${ca}+${Na}`);
      }
      continue;
    }
    if (p && /^[+-]?\d+D$/.test(X)) {
      const k = parseInt(p[1], 10),
        ea = parseInt(p[2], 10),
        ra = p[3] ? parseInt(p[3], 10) : 0,
        Ma = parseInt(X.replace("D", ""), 10);
      G[I] = `${k + Ma}D${ea}${ra !== 0 ? (ra > 0 ? "+" : "") + ra : ""}`;
      continue;
    }
    if (p && /^[+-]?\d+$/.test(X)) {
      const k = parseInt(p[1], 10),
        ea = parseInt(p[2], 10);
      let ra = p[3] ? parseInt(p[3], 10) : 0;
      (ra += parseInt(X, 10)),
        (G[I] = `${k}D${ea}${ra !== 0 ? (ra > 0 ? "+" : "") + ra : ""}`);
      continue;
    }
    if (/^[+-]?\d+$/.test(X)) {
      const k = parseInt(B || "0", 10);
      G[I] = (k + parseInt(X, 10)).toString();
      continue;
    }
    G[I] = X;
  }
  return G;
}
function V0(M, w) {
  const G = M.caracteristicas,
    h = w?.variacion_caracteristicas;
  let x = yd(G, h);
  if (w?.variacion_caracMINMAX && w.variacion_caracMINMAX.length > 0) {
    const C = gd(w.variacion_caracMINMAX);
    x = K0(x, C);
  }
  return x;
}
function gd(M) {
  const w = [];
  for (const G of M) {
    const h = G.match(/^MIN\s+(\w+)\s+(\d+)D$/i);
    if (h) {
      const C = wn[h[1].toUpperCase()];
      if (C) {
        const X = parseInt(h[2], 10);
        w.push({ caracteristica: C, tipo: "MIN", valor: 0, dados: X });
      }
      continue;
    }
    const x = G.match(/^MAX\s+(\w+)\s+(\d+)$/i);
    if (x) {
      const C = wn[x[1].toUpperCase()];
      if (C) {
        const X = parseInt(x[2], 10);
        w.push({ caracteristica: C, tipo: "MAX", valor: X });
      }
    }
  }
  return w;
}
function K0(M, w) {
  const G = { ...M };
  for (const h of w) {
    const x = G[h.caracteristica];
    if (x && h.tipo === "MIN" && h.dados) {
      const C = x.match(/^(\d+)D(\d+)([+-]\d+)?$/);
      if (C) {
        const X = parseInt(C[1], 10),
          I = parseInt(C[2], 10),
          B = C[3] ? C[3] : "";
        X < h.dados &&
          ((G[h.caracteristica] = `${h.dados}D${I}${B}`),
          console.log(
            "[Aplicando límite MIN]",
            h.caracteristica,
            `${X}D${I}${B} -> ${h.dados}D${I}${B}`
          ));
      }
    }
  }
  return G;
}
function md(M, w, G) {
  for (const h of G)
    if (h.caracteristica === M && h.tipo === "MAX" && w > h.valor)
      return {
        valido: !1,
        mensaje: `El valor máximo para ${M} es ${h.valor}`,
        valorCorregido: h.valor,
      };
  return { valido: !0 };
}
function J0(M) {
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
function w0(M) {
  const w = hd[M.trim()];
  if (w) return w;
  const G = M.replace(/^[+-]?\d+\s*%?\s*/, "")
    .replace(/\s*[+-]?\d+\s*%?$/, "")
    .trim();
  return hd[G];
}
function vd(M) {
  const w = M.trim(),
    G = [/^([+-]?\d+)\s*%?\s*(.+)$/, /^(.+?)\s*([+-]?\d+)\s*%?$/];
  for (const h of G) {
    const x = w.match(h);
    if (x) {
      let C, X;
      h === G[0]
        ? ((C = parseInt(x[1].replace(/[+]/g, ""))), (X = x[2]))
        : ((X = x[1]), (C = parseInt(x[2].replace(/[+]/g, ""))));
      const I = w0(X);
      if (I && !isNaN(C)) return { habilidad: I, valor: C };
    }
  }
  return null;
}
function $0() {
  const M = () =>
      F
        ? s.jsx("div", {
            className: "raza-card",
            children: s.jsxs("div", {
              className: "raza-content",
              children: [
                s.jsxs("h3", {
                  className: "raza-title",
                  children: ["Nacionalidad: ", F.nombre],
                }),
                s.jsx("hr", { className: "raza-divider" }),
                F.variacion_caracteristicas &&
                  F.variacion_caracteristicas.length > 0 &&
                  s.jsxs("div", {
                    className: "raza-section",
                    children: [
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Variaciones de Características",
                      }),
                      s.jsx("div", {
                        className: "raza-list",
                        children: F.variacion_caracteristicas.map((r, S) =>
                          s.jsx(
                            "div",
                            {
                              className: "raza-list-item",
                              children: s.jsx("span", {
                                className: "raza-characteristic-name",
                                children: r,
                              }),
                            },
                            S
                          )
                        ),
                      }),
                    ],
                  }),
                F.origen_social &&
                  s.jsxs("div", {
                    className: "raza-section",
                    children: [
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Origen social",
                      }),
                      s.jsx("div", {
                        className: "raza-list",
                        children: Array.isArray(F.origen_social)
                          ? F.origen_social.map((r, S) =>
                              s.jsx(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: s.jsx("span", {
                                    className: "raza-characteristic-name",
                                    children: r,
                                  }),
                                },
                                S
                              )
                            )
                          : s.jsx("div", {
                              className: "raza-list-item",
                              children: s.jsx("span", {
                                className: "raza-characteristic-name",
                                children: F.origen_social,
                              }),
                            }),
                      }),
                    ],
                  }),
              ],
            }),
          })
        : null,
    w = () =>
      ca
        ? s.jsx("div", {
            className: "raza-card",
            children: s.jsxs("div", {
              className: "raza-content",
              children: [
                s.jsxs("h3", {
                  className: "raza-title",
                  children: ["Origen: ", ca.nombre],
                }),
                ca.info_Origen &&
                  ca.info_Origen.trim() !== "" &&
                  s.jsx("p", {
                    className: "raza-description",
                    children: ca.info_Origen,
                  }),
                s.jsx("hr", { className: "raza-divider" }),
                ca.variacion_habilidades &&
                  ca.variacion_habilidades.length > 0 &&
                  s.jsxs("div", {
                    className: "raza-section",
                    children: [
                      s.jsx("h4", {
                        className: "raza-section-title",
                        children: "Bonificaciones de Habilidades",
                      }),
                      s.jsx("div", {
                        className: "raza-list",
                        children: ca.variacion_habilidades.map((r, S) =>
                          s.jsxs(
                            "div",
                            {
                              className: "raza-list-item",
                              children: [
                                s.jsx("span", {
                                  className: "raza-bonus-name",
                                  children: r,
                                }),
                                s.jsx("span", {
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
                ca.variacion_bonus_combate &&
                  Object.keys(ca.variacion_bonus_combate).length > 0 &&
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
                          ca.variacion_bonus_combate
                        ).map(([r, S], z) =>
                          s.jsxs(
                            "div",
                            {
                              className: "raza-list-item",
                              children: [
                                s.jsxs("span", {
                                  className: "raza-bonus-name",
                                  children: [r, ":"],
                                }),
                                s.jsx("span", {
                                  className: "raza-chip raza-chip-secondary",
                                  children: S,
                                }),
                              ],
                            },
                            z
                          )
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          })
        : null,
    [G, h] = Ba.useState(!0),
    x = () => {
      G && h(!1);
    },
    [C, X] = Ba.useState(null),
    [I, B] = Ba.useState([]),
    [p, Y] = Ba.useState([]),
    [k, ea] = Ba.useState([]),
    [ra, Ma] = Ba.useState([]),
    [Ga, Ra] = Ba.useState([]),
    [ca, Na] = Ba.useState(null),
    [J, tl] = Ba.useState(null),
    [_, Qa] = Ba.useState(null),
    [F, Da] = Ba.useState(null);
  Ba.useEffect(() => {
    if (!F) {
      Ra(ra);
      return;
    }
    let r = [];
    if (Array.isArray(F.origen_social))
      r = F.origen_social.map((z) => {
        const D = z.split(":");
        return D.length > 1
          ? D[1].trim().toUpperCase()
          : z.trim().toUpperCase();
      });
    else if (typeof F.origen_social == "string") {
      Ra(ra);
      return;
    }
    const S = ra.filter((z) => r.includes(z.nombre.trim().toUpperCase()));
    Ra(S);
  }, [F, ra]);
  const [Za, Cl] = Ba.useState(null),
    [Ha, da] = Ba.useState({}),
    [Dl, ql] = Ba.useState(!0),
    [xa, N] = Ba.useState([]),
    R = (r, S) => {
      const z = parseInt(S, 10);
      if (!isNaN(z) && xa.length > 0) {
        const D = md(r, z, xa);
        if (!D.valido && D.valorCorregido !== void 0) {
          da((U) => ({ ...U, [r]: D.valorCorregido.toString() }));
          return;
        }
      }
      da((D) => ({ ...D, [r]: S }));
    };
  function Z(r) {
    let S = 0;
    const z = /([+-]?\d+)D(\d+)/gi;
    let D;
    for (; (D = z.exec(r)) !== null; ) {
      const na = parseInt(D[1], 10),
        $ = parseInt(D[2], 10),
        ga = Math.sign(na);
      for (let ha = 0; ha < Math.abs(na); ha++) {
        let fa = Math.floor(Math.random() * $) + 1;
        Dl && fa < 2 && (fa = 2), (S += ga * fa);
      }
    }
    const U = /([+-]\d+)(?!D)/g;
    let ua;
    for (; (ua = U.exec(r)) !== null; ) S += parseInt(ua[1], 10);
    return S;
  }
  const ma = () => {
      if (
        !Za ||
        (Object.values(Ha).some((Bl) => Bl && Bl.trim() !== "") &&
          !window.confirm(
            "¿Seguro que quieres generar tiradas aleatorias? Se borrarán los valores que hayas insertado manualmente."
          ))
      )
        return;
      const r = {};
      Object.entries(Za).forEach(([Bl, Uu]) => {
        if (typeof Uu == "string") {
          let Yl = Z(Uu);
          if (xa.length > 0) {
            const wa = md(Bl, Yl, xa);
            !wa.valido &&
              wa.valorCorregido !== void 0 &&
              (Yl = wa.valorCorregido);
          }
          r[Bl] = Yl.toString();
        }
      }),
        da(r);
      const S = parseInt(r.Fuerza || "0", 10);
      let z = "";
      S >= 18 && S <= 23
        ? (z = "+1")
        : S >= 24 && S <= 30
        ? (z = "+1D4")
        : S >= 31 && S <= 38
        ? (z = "+1D6")
        : S >= 39 && S <= 45
        ? (z = "+1D10")
        : S >= 46
        ? (z = "+2D6")
        : (z = "Sin bonus");
      const D = parseInt(r.Destreza || "0", 10),
        U = S + D;
      let ua = "NO TIENE";
      _ &&
        ["ARQUERO", "CASACA AZUL", "ILMIONARIO", "GUARDABOSQUES"].some(
          (Bl) => _.nombre.toUpperCase() === Bl.toUpperCase()
        ) &&
        (U >= 0 && U <= 24
          ? (ua = "Nada")
          : U >= 25 && U <= 40
          ? (ua = "+1D4")
          : U >= 41 && U <= 52
          ? (ua = "+2D4")
          : U >= 53 && (ua = "2D4+1"));
      const $ = parseInt(r.Inteligencia || "0", 10),
        ga = parseInt(r.Constitución || "0", 10),
        ha = parseInt(r.Poder || "0", 10),
        fa = parseInt(r.Carisma || "0", 10),
        Fa = parseInt(r.Tamaño || "0", 10);
      let at = 0;
      $ >= 1 && $ <= 10
        ? (at = $)
        : $ >= 11 && $ <= 18
        ? (at = $ + 20)
        : $ >= 19 && (at = $ + 30);
      const el = $ + D + 10,
        je = Math.floor(ga / 2) + $ + ha + fa - 5,
        Vt = D * 2 + $ + ha - Fa - 5,
        Kt = $ * 2 + D + fa - 15,
        lt = $ + Math.floor(S / 2) + ha + D - Fa - 5,
        Ue = ha + fa + $ + 40 - ga,
        ju = Math.max(1, ga + Fa - 12);
      X({
        bonusCC: `Bonus de Fuerza CC: ${z}`,
        bonusAA: `Bonus de Fuerza AA: ${ua}`,
        conocimiento: at,
        percepcion: el,
        comunicacion: je,
        agilidad: Vt,
        manipulacion: Kt,
        discrecion: lt,
        saludMental: Ue,
        puntosVida: ju,
      });
    },
    o = () =>
      J
        ? s.jsx("div", {
            className: "raza-card",
            children: s.jsxs("div", {
              className: "raza-content",
              children: [
                s.jsx("h3", { className: "raza-title", children: J.nombre }),
                s.jsx("p", {
                  className: "raza-description",
                  children: J.descripcion,
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
                          children: Object.entries(J.caracteristicas).map(
                            ([r, S]) =>
                              s.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    s.jsxs("span", {
                                      className: "raza-characteristic-name",
                                      children: [r, ":"],
                                    }),
                                    s.jsx("span", {
                                      className:
                                        "raza-chip raza-chip-secondary",
                                      children: S,
                                    }),
                                  ],
                                },
                                r
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
                          children: Object.entries(J.bonificaciones).map(
                            ([r, S]) =>
                              s.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    s.jsxs("span", {
                                      className: "raza-bonus-name",
                                      children: [r, ":"],
                                    }),
                                    s.jsx("span", {
                                      className: "raza-chip raza-chip-success",
                                      children: S,
                                    }),
                                  ],
                                },
                                r
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
                          children: J.rango,
                        }),
                      ],
                    }),
                    J.armadura &&
                      s.jsxs("div", {
                        className: "raza-info-item",
                        children: [
                          s.jsx("span", {
                            className: "raza-info-label",
                            children: "Armadura",
                          }),
                          s.jsx("span", {
                            className: "raza-info-value",
                            children: J.armadura,
                          }),
                        ],
                      }),
                    J.ataque &&
                      s.jsxs("div", {
                        className: "raza-info-item",
                        children: [
                          s.jsx("span", {
                            className: "raza-info-label",
                            children: "Ataque",
                          }),
                          s.jsx("span", {
                            className: "raza-info-value",
                            children: J.ataque,
                          }),
                        ],
                      }),
                  ],
                }),
                J.notas &&
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
                          children: J.notas,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          })
        : null,
    O = () =>
      _
        ? s.jsx("div", {
            className: "raza-card",
            children: s.jsxs("div", {
              className: "raza-content",
              children: [
                s.jsx("h3", { className: "raza-title", children: _.nombre }),
                s.jsx("p", {
                  className: "raza-description",
                  children: _.descripcion,
                }),
                s.jsx("hr", { className: "raza-divider" }),
                s.jsxs("div", {
                  className: "raza-info-grid",
                  children: [
                    _.variacion_caracteristicas &&
                      Array.isArray(_.variacion_caracteristicas) &&
                      _.variacion_caracteristicas.length > 0 &&
                      s.jsxs("div", {
                        className: "raza-section",
                        children: [
                          s.jsx("h4", {
                            className: "raza-section-title",
                            children: "Variaciones de Características",
                          }),
                          s.jsx("div", {
                            className: "raza-list",
                            children: _.variacion_caracteristicas.map((r, S) =>
                              s.jsx(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: s.jsx("span", {
                                    className: "raza-characteristic-name",
                                    children: r,
                                  }),
                                },
                                S
                              )
                            ),
                          }),
                        ],
                      }),
                    _.variacion_caracMINMAX &&
                      _.variacion_caracMINMAX.length > 0 &&
                      s.jsxs("div", {
                        className: "raza-section",
                        children: [
                          s.jsx("h4", {
                            className: "raza-section-title",
                            children: "Limitaciones de Características",
                          }),
                          s.jsx("div", {
                            className: "raza-list",
                            children: _.variacion_caracMINMAX.map((r, S) =>
                              s.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    s.jsx("span", {
                                      className: "raza-characteristic-name",
                                      children: r,
                                    }),
                                    s.jsx("span", {
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
                    _.variacion_habilidades &&
                      _.variacion_habilidades.length > 0 &&
                      s.jsxs("div", {
                        className: "raza-section",
                        children: [
                          s.jsx("h4", {
                            className: "raza-section-title",
                            children: "Bonificaciones de Habilidades",
                          }),
                          s.jsx("div", {
                            className: "raza-list",
                            children: _.variacion_habilidades.map((r, S) =>
                              s.jsxs(
                                "div",
                                {
                                  className: "raza-list-item",
                                  children: [
                                    s.jsx("span", {
                                      className: "raza-bonus-name",
                                      children: r,
                                    }),
                                    s.jsx("span", {
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
                _.Bonus_combate &&
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
                                    children: _.Bonus_combate.ataque,
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
                                    children: _.Bonus_combate.defensa,
                                  }),
                                ],
                              }),
                              _.Bonus_combate.armas_arrojadizas &&
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
                                        _.Bonus_combate.armas_arrojadizas,
                                    }),
                                  ],
                                }),
                              _.Bonus_combate.montado_a_caballo &&
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
                                        _.Bonus_combate.montado_a_caballo,
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
                          children: _.rango,
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
                          children: _.cualidades,
                        }),
                      ],
                    }),
                    _.equipo_especial &&
                      s.jsxs("div", {
                        className: "raza-info-item",
                        children: [
                          s.jsx("span", {
                            className: "raza-info-label",
                            children: "Equipo Especial",
                          }),
                          s.jsx("span", {
                            className: "raza-info-value",
                            children: _.equipo_especial,
                          }),
                        ],
                      }),
                  ],
                }),
                _.especial &&
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
                          children: _.especial,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          })
        : null,
    H = () => {
      if (!J && !_ && !ca) return null;
      const r = {};
      return (
        J &&
          Object.entries(J.bonificaciones).forEach(([S, z]) => {
            if (typeof z == "number") r[S] = (r[S] || 0) + z;
            else if (typeof z == "string") {
              const D = parseInt(z.replace(/[+-]/g, "")) || 0,
                U = z.startsWith("-") ? -1 : 1;
              r[S] = (r[S] || 0) + D * U;
            }
          }),
        _ &&
          _.variacion_habilidades &&
          _.variacion_habilidades.forEach((S) => {
            const z = S.trim();
            if (
              z.includes("Regeneración de SM") ||
              z.includes("al día") ||
              z.includes("1D6") ||
              z === ""
            )
              return;
            const D = vd(z);
            if (D) {
              r[D.habilidad] = (r[D.habilidad] || 0) + D.valor;
              return;
            }
            if (z.includes("100%") || z.includes("+100")) {
              const U = z.replace(/(\+100|100\s*%).*$/, "").trim();
              U && (r[U] = 100);
            }
          }),
        ca &&
          ca.variacion_habilidades &&
          ca.variacion_habilidades.forEach((S) => {
            const z = S.trim();
            if (
              z.includes("Regeneración de SM") ||
              z.includes("al día") ||
              z.includes("1D6") ||
              z === ""
            )
              return;
            const D = vd(z);
            if (D) {
              r[D.habilidad] = (r[D.habilidad] || 0) + D.valor;
              return;
            }
            if (z.includes("100%") || z.includes("+100")) {
              const U = z.replace(/(\+100|100\s*%).*$/, "").trim();
              U && (r[U] = 100);
            }
          }),
        r
      );
    },
    j = () => {
      const r = H();
      return !r || Object.keys(r).length === 0
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
                children: Object.entries(r).map(([S, z]) =>
                  s.jsxs(
                    "li",
                    {
                      className: "ficha-resultado-item",
                      children: [
                        s.jsxs("b", {
                          className: "ficha-resultado-carac",
                          children: [S, ":"],
                        }),
                        " ",
                        s.jsx("span", {
                          className:
                            "raza-chip raza-chip-success bonificacion-chip",
                          children: z > 0 ? `+${z}` : z,
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
    Ba.useEffect(() => {
      fetch("/StromRol/Razas.json")
        .then((r) => r.json())
        .then((r) => B(r.razas)),
        fetch("/StromRol/Clases.json")
          .then((r) => r.json())
          .then((r) => Y(r.clases)),
        fetch("/StromRol/Nacionalidad.json")
          .then((r) => r.json())
          .then((r) => ea(r.nacionalidades)),
        fetch("/StromRol/Origen.json")
          .then((r) => r.json())
          .then((r) => Ma(r.origenes));
    }, []),
    Ba.useEffect(() => {
      if ((da({}), J)) {
        let r = V0(
          J,
          _
            ? {
                ..._,
                variacion_caracteristicas: Array.isArray(
                  _.variacion_caracteristicas
                )
                  ? _.variacion_caracteristicas
                  : typeof _.variacion_caracteristicas == "string"
                  ? [_.variacion_caracteristicas]
                  : void 0,
              }
            : void 0
        );
        F &&
          F.variacion_caracteristicas &&
          (r = yd(r, F.variacion_caracteristicas)),
          Cl(r);
      } else Cl(null);
    }, [J, _, F]),
    Ba.useEffect(() => {
      if (_) {
        const r = J0(_);
        N(r);
      } else N([]);
    }, [_]),
    s.jsxs("div", {
      className: "ficha-container",
      children: [
        G &&
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
        s.jsx("div", {
          className: "ficha-select-group",
          children: s.jsxs("div", {
            className: "ficha-combo-row",
            children: [
              s.jsx("button", {
                type: "button",
                className: "ficha-dado-btn",
                title: "Seleccionar raza aleatoria",
                disabled: I.length === 0,
                onClick: () => {
                  if (I.length === 0) return;
                  const r = Math.floor(Math.random() * I.length),
                    S = I[r];
                  tl(S),
                    x(),
                    X(null),
                    Da(null),
                    S &&
                      ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                        S.nombre.toUpperCase()
                      ) &&
                      Qa(null),
                    alert(`Raza aleatoria: ${S.nombre}`);
                },
                children: "🎲",
              }),
              s.jsxs("select", {
                id: "raza-select",
                className: "ficha-select",
                title: "Selecciona una raza",
                value: J?.nombre || "",
                onChange: (r) => {
                  const S = I.find((z) => z.nombre === r.target.value);
                  tl(S || null),
                    x(),
                    X(null),
                    Da(null),
                    S &&
                      ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                        S.nombre.toUpperCase()
                      ) &&
                      Qa(null);
                },
                children: [
                  s.jsx("option", { value: "", children: "Elige una raza" }),
                  I.map((r) =>
                    s.jsx(
                      "option",
                      { value: r.nombre, children: r.nombre.toUpperCase() },
                      r.nombre
                    )
                  ),
                ],
              }),
              s.jsx("input", {
                type: "number",
                maxLength: 3,
                className: "combo-mini-input",
                placeholder: "###",
                disabled: !0,
              }),
            ],
          }),
        }),
        s.jsx("div", {
          className: "ficha-select-group",
          children: s.jsxs("div", {
            className: "ficha-combo-row",
            children: [
              s.jsx("button", {
                type: "button",
                className: "ficha-dado-btn",
                title: "Seleccionar clase aleatoria",
                disabled:
                  p.length === 0 ||
                  (!!J &&
                    ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                      J.nombre.toUpperCase()
                    )),
                onClick: () => {
                  if (
                    p.length === 0 ||
                    (J &&
                      ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                        J.nombre.toUpperCase()
                      ))
                  )
                    return;
                  const r = Math.floor(Math.random() * p.length),
                    S = p[r];
                  Qa(S),
                    da({}),
                    X(null),
                    Da(null),
                    Na(null),
                    x(),
                    alert(`Clase aleatoria: ${S.nombre}`);
                },
                children: "🎲",
              }),
              s.jsxs("select", {
                id: "clase-select",
                className: "ficha-select",
                title: "Selecciona una clase",
                value: _?.nombre || "",
                onChange: (r) => {
                  const S = p.find((z) => z.nombre === r.target.value);
                  Qa(S || null),
                    da({}),
                    X(null),
                    Da(null),
                    Na(null),
                    x(),
                    ca && S && Na(ca);
                },
                disabled: !!(
                  J &&
                  ["SELOROK", "DEMONIOS", "DEMONIO", "SELEROK"].includes(
                    J.nombre.toUpperCase()
                  )
                ),
                children: [
                  s.jsx("option", { value: "", children: "Elige una clase" }),
                  p.map((r) =>
                    s.jsx(
                      "option",
                      { value: r.nombre, children: r.nombre.toUpperCase() },
                      r.nombre
                    )
                  ),
                ],
              }),
              s.jsx("input", {
                type: "number",
                maxLength: 3,
                className: "combo-mini-input",
                placeholder: "###",
                disabled: !0,
              }),
            ],
          }),
        }),
        s.jsx("div", {
          className: "ficha-select-group",
          children: s.jsxs("div", {
            className: "ficha-combo-row",
            children: [
              s.jsx("button", {
                type: "button",
                className: "ficha-dado-btn",
                title: "Tirar dado de nacionalidad",
                disabled: !J,
                onClick: () => {
                  const r = Math.floor(Math.random() * 100) + 1;
                  let S = null;
                  for (const z of k) {
                    let D = parseInt(z.minimo, 10),
                      U = parseInt(z.maximo, 10);
                    if (
                      (z.minimo === "00" && (D = 100),
                      z.maximo === "00" && (U = 100),
                      D > U && ([D, U] = [U, D]),
                      r >= D && r <= U)
                    ) {
                      S = z;
                      break;
                    }
                    if (r === 100 && (z.minimo === "00" || z.maximo === "00")) {
                      S = z;
                      break;
                    }
                  }
                  S
                    ? (Da(S),
                      da({}),
                      X(null),
                      Na(null),
                      x(),
                      alert(`Tirada: ${r} → Nacionalidad: ${S.nombre}`))
                    : alert(`Tirada: ${r} → No se encontró nacionalidad.`);
                },
                children: "🎲",
              }),
              s.jsxs("select", {
                id: "nacionalidad-select",
                className: "ficha-select",
                title: "Selecciona una nacionalidad",
                value: F?.nombre || "",
                onChange: (r) => {
                  const S = k.find((z) => z.nombre === r.target.value);
                  Da(S || null), da({}), X(null), Na(null), x();
                },
                disabled: !J,
                children: [
                  s.jsx("option", {
                    value: "",
                    children: "Elige una nacionalidad",
                  }),
                  k.map((r) =>
                    s.jsx(
                      "option",
                      { value: r.nombre, children: r.nombre },
                      r.nombre
                    )
                  ),
                ],
              }),
              s.jsx("input", {
                type: "number",
                maxLength: 3,
                className: "combo-mini-input",
                placeholder: "###",
                disabled: !J,
                onChange: (r) => {
                  const S = parseInt(r.target.value, 10);
                  if (isNaN(S)) return;
                  let z = null;
                  for (const D of k) {
                    let U = parseInt(D.minimo, 10),
                      ua = parseInt(D.maximo, 10);
                    if (
                      (D.minimo === "00" && (U = 100),
                      D.maximo === "00" && (ua = 100),
                      U > ua && ([U, ua] = [ua, U]),
                      S >= U && S <= ua)
                    ) {
                      z = D;
                      break;
                    }
                    if (S === 100 && (D.minimo === "00" || D.maximo === "00")) {
                      z = D;
                      break;
                    }
                  }
                  Da(z || null), da({}), X(null), Na(null), x();
                },
              }),
            ],
          }),
        }),
        s.jsx("div", {
          className: "ficha-select-group",
          children: s.jsxs("div", {
            className: "ficha-combo-row",
            children: [
              s.jsx("button", {
                type: "button",
                className: "ficha-dado-btn",
                title: "Tirar dado de origen",
                disabled: !F,
                onClick: () => {
                  if (!F) return;
                  const r = Math.floor(Math.random() * 100) + 1,
                    S = F.origen_social;
                  if (!Array.isArray(S)) {
                    alert(
                      "La nacionalidad seleccionada no tiene tabla de origen social válida."
                    );
                    return;
                  }
                  let z = null;
                  for (const D of S) {
                    const U = D.split(":");
                    if (U.length < 2) continue;
                    const ua = U[0].trim(),
                      na = U[1].trim();
                    let [$, ga] = ua.split("-");
                    ($ = $.trim()), (ga = ga.trim());
                    let ha = parseInt($, 10),
                      fa = parseInt(ga, 10);
                    if (
                      ($ === "00" && (ha = 100),
                      ga === "00" && (fa = 100),
                      ha > fa && ([ha, fa] = [fa, ha]),
                      r >= ha && r <= fa)
                    ) {
                      z = na.toUpperCase();
                      break;
                    }
                    if (r === 100 && ($ === "00" || ga === "00")) {
                      z = na.toUpperCase();
                      break;
                    }
                  }
                  if (z) {
                    const D = Ga.find(
                      (U) => U.nombre.trim().toUpperCase() === z
                    );
                    D
                      ? (Na(D),
                        da({}),
                        X(null),
                        alert(`Tirada: ${r} → Origen: ${D.nombre}`))
                      : alert(
                          `Tirada: ${r} → Origen encontrado en tabla: ${z}, pero no existe en el combo.`
                        );
                  } else alert(`Tirada: ${r} → No se encontró origen.`);
                },
                children: "🎲",
              }),
              s.jsxs("select", {
                id: "origen-select",
                className: "ficha-select",
                title: "Selecciona un origen",
                value: ca?.nombre || "",
                onChange: (r) => {
                  const S = Ga.find((z) => z.nombre === r.target.value);
                  Na(S || null), da({}), X(null), x();
                },
                disabled: !F,
                children: [
                  s.jsx("option", { value: "", children: "Elige un origen" }),
                  Ga.map((r) =>
                    s.jsx(
                      "option",
                      { value: r.nombre, children: r.nombre },
                      r.nombre
                    )
                  ),
                ],
              }),
              s.jsx("input", {
                type: "number",
                maxLength: 3,
                className: "combo-mini-input",
                placeholder: "###",
                disabled: !F,
                onChange: (r) => {
                  if (!F) return;
                  const S = parseInt(r.target.value, 10);
                  if (isNaN(S)) return;
                  const z = F.origen_social;
                  if (!Array.isArray(z)) return;
                  let D = null;
                  for (const U of z) {
                    const ua = U.split(":");
                    if (ua.length < 2) continue;
                    const na = ua[0].trim(),
                      $ = ua[1].trim();
                    let [ga, ha] = na.split("-");
                    (ga = ga.trim()), (ha = ha.trim());
                    let fa = parseInt(ga, 10),
                      Fa = parseInt(ha, 10);
                    if (
                      (ga === "00" && (fa = 100),
                      ha === "00" && (Fa = 100),
                      fa > Fa && ([fa, Fa] = [Fa, fa]),
                      S >= fa && S <= Fa)
                    ) {
                      D = $.toUpperCase();
                      break;
                    }
                    if (S === 100 && (ga === "00" || ha === "00")) {
                      D = $.toUpperCase();
                      break;
                    }
                  }
                  if (D) {
                    const U = Ga.find(
                      (ua) => ua.nombre.trim().toUpperCase() === D
                    );
                    Na(U || null), da({}), X(null), x();
                  }
                },
              }),
            ],
          }),
        }),
        Za &&
          s.jsxs("div", {
            className: "ficha-resultado",
            children: [
              s.jsx("h3", {
                className: "ficha-resultado-title",
                children: "Dados que debe tirar el jugador:",
              }),
              s.jsx("ul", {
                className: "ficha-resultado-list",
                children: Object.entries(Za).map(([r, S]) =>
                  s.jsxs(
                    "li",
                    {
                      className: "ficha-resultado-item",
                      children: [
                        s.jsxs("b", {
                          className: "ficha-resultado-carac",
                          children: [r, ":"],
                        }),
                        " ",
                        s.jsx("span", {
                          className: "ficha-resultado-dado",
                          children: S,
                        }),
                        s.jsx("input", {
                          type: "number",
                          min: "1",
                          className: "ficha-resultado-input",
                          placeholder: "Tirada",
                          value: Ha[r] || "",
                          onChange: (z) => {
                            R(r, z.target.value);
                          },
                        }),
                      ],
                    },
                    r
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
                      onChange: (r) => ql(r.target.checked),
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
                    onClick: ma,
                    disabled: Object.keys(Za || {}).length === 0,
                    children: "Generar tiradas aleatorias",
                  }),
                  s.jsx("button", {
                    className: "ficha-habilidades-btn",
                    disabled:
                      Object.keys(Za || {}).length === 0 ||
                      Object.entries(Za || {}).some(([r]) => !Ha[r]),
                    onClick: () => {
                      const r = parseInt(Ha.Fuerza || "0", 10);
                      let S = "";
                      r >= 18 && r <= 23
                        ? (S = "+1")
                        : r >= 24 && r <= 30
                        ? (S = "+1D4")
                        : r >= 31 && r <= 38
                        ? (S = "+1D6")
                        : r >= 39 && r <= 45
                        ? (S = "+1D10")
                        : r >= 46
                        ? (S = "+2D6")
                        : (S = "Sin bonus");
                      const z = parseInt(Ha.Destreza || "0", 10),
                        D = r + z;
                      let U = "NO TIENE";
                      _ &&
                        [
                          "ARQUERO",
                          "CASACA AZUL",
                          "ILMIONARIO",
                          "GUARDABOSQUES",
                        ].some(
                          (Ue) => _.nombre.toUpperCase() === Ue.toUpperCase()
                        ) &&
                        (D >= 0 && D <= 24
                          ? (U = "Nada")
                          : D >= 25 && D <= 40
                          ? (U = "+1D4")
                          : D >= 41 && D <= 52
                          ? (U = "+2D4")
                          : D >= 53 && (U = "2D4+1"));
                      const na = parseInt(Ha.Inteligencia || "0", 10),
                        $ = parseInt(Ha.Constitución || "0", 10),
                        ga = parseInt(Ha.Poder || "0", 10),
                        ha = parseInt(Ha.Carisma || "0", 10),
                        fa = parseInt(Ha.Tamaño || "0", 10);
                      let Fa = 0;
                      na >= 1 && na <= 10
                        ? (Fa = na)
                        : na >= 11 && na <= 18
                        ? (Fa = na + 20)
                        : na >= 19 && (Fa = na + 30);
                      const at = na + z + 10,
                        el = Math.floor($ / 2) + na + ga + ha - 5,
                        je = z * 2 + na + ga - fa - 5,
                        Vt = na * 2 + z + ha - 15,
                        Kt = na + Math.floor(r / 2) + ga + z - fa - 5,
                        lt = ga + ha + na + 40 - $;
                      X({
                        bonusCC: `Bonus de Fuerza CC: ${S}`,
                        bonusAA: `Bonus de Fuerza AA: ${U}`,
                        conocimiento: Fa,
                        percepcion: at,
                        comunicacion: el,
                        agilidad: je,
                        manipulacion: Vt,
                        discrecion: Kt,
                        saludMental: lt,
                        puntosVida: Math.max(1, $ + fa - 12),
                      });
                    },
                    children: "Calcular habilidades",
                  }),
                ],
              }),
              _?.variacion_carac_info &&
                ((typeof _.variacion_carac_info == "string" &&
                  _.variacion_carac_info.trim() !== "") ||
                  (Array.isArray(_.variacion_carac_info) &&
                    _.variacion_carac_info.length > 0) ||
                  (typeof _.variacion_carac_info == "number" &&
                    !isNaN(_.variacion_carac_info))) &&
                s.jsxs("div", {
                  className: "ficha-resultado-info",
                  children: [
                    s.jsx("b", { children: "Info adicional de dados:" }),
                    " ",
                    Array.isArray(_.variacion_carac_info)
                      ? _.variacion_carac_info.join(", ")
                      : _.variacion_carac_info,
                  ],
                }),
            ],
          }),
        C &&
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
                              children: [C.bonusCC.split(":")[0], ":"],
                            }),
                            s.jsx("span", {
                              className: "raza-chip raza-chip-secondary",
                              children: C.bonusCC.split(":")[1],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "raza-list-item",
                          children: [
                            s.jsxs("span", {
                              className: "raza-bonus-name",
                              children: [C.bonusAA.split(":")[0], ":"],
                            }),
                            s.jsx("span", {
                              className: "raza-chip raza-chip-secondary",
                              children: C.bonusAA.split(":")[1],
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
                              children: C.puntosVida,
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
                              children: C.conocimiento,
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
                              children: C.percepcion,
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
                              children: C.comunicacion,
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
                              children: C.agilidad,
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
                              children: C.manipulacion,
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
                              children: C.discrecion,
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
                              children: C.saludMental,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              ca &&
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
                          const r = _?.Bonus_combate || {},
                            S = ca.variacion_bonus_combate || {};
                          function z(na, $) {
                            const ga =
                                typeof na == "string"
                                  ? parseInt(na)
                                  : typeof na == "number"
                                  ? na
                                  : 0,
                              ha =
                                typeof $ == "string"
                                  ? parseInt($)
                                  : typeof $ == "number"
                                  ? $
                                  : 0,
                              fa = ga + ha;
                            return (typeof na == "string" &&
                              na.includes("%")) ||
                              (typeof $ == "string" && $.includes("%"))
                              ? `${fa > 0 ? "+" : ""}${fa}%`
                              : `${fa > 0 ? "+" : ""}${fa}`;
                          }
                          const D = z(
                              r && "ataque" in r ? r.ataque : void 0,
                              S && "ataque" in S ? S.ataque : void 0
                            ),
                            U = z(
                              r && "defensa" in r ? r.defensa : void 0,
                              S && "defensa" in S ? S.defensa : void 0
                            ),
                            ua = z(
                              r && "armas_arrojadizas" in r
                                ? r.armas_arrojadizas
                                : void 0,
                              S && "armas_arrojadizas" in S
                                ? S.armas_arrojadizas
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
                                    children: D,
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
                                    children: U,
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
                                    children: ua,
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
        j(),
        J &&
        ["SELOROK", "DEMONIO", "SELOROKS", "DEMONIOS"].includes(
          J.nombre.toUpperCase()
        )
          ? null
          : O(),
        o(),
        M(),
        w(),
      ],
    })
  );
}
L0.createRoot(document.getElementById("root")).render(
  s.jsx(Ba.StrictMode, { children: s.jsx($0, {}) })
);
