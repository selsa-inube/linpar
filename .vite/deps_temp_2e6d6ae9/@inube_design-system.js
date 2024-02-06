import { Link, useLocation } from "./chunk-MKGIUE3J.js";
import "./chunk-D5SJRT53.js";
import {
  Ae,
  We,
  styled_components_browser_esm_default,
} from "./chunk-SET54HPE.js";
import "./chunk-EU6QCHT3.js";
import { require_react } from "./chunk-ZAUFE7H7.js";
import { __toESM } from "./chunk-UXIASGQL.js";

// node_modules/@inube/design-system/dist/index.es.js
var import_react = __toESM(require_react());
var _1 = { exports: {} };
var $p = {};
var gE;
function A2() {
  return (
    gE ||
      ((gE = 1),
      (function () {
        var c = import_react.default,
          v = Symbol.for("react.element"),
          p = Symbol.for("react.portal"),
          m = Symbol.for("react.fragment"),
          b = Symbol.for("react.strict_mode"),
          R = Symbol.for("react.profiler"),
          S = Symbol.for("react.provider"),
          O = Symbol.for("react.context"),
          j = Symbol.for("react.forward_ref"),
          L = Symbol.for("react.suspense"),
          Y = Symbol.for("react.suspense_list"),
          U = Symbol.for("react.memo"),
          W = Symbol.for("react.lazy"),
          X = Symbol.for("react.offscreen"),
          le = Symbol.iterator,
          Ce = "@@iterator";
        function Pe(D) {
          if (D === null || typeof D != "object") return null;
          var te = (le && D[le]) || D[Ce];
          return typeof te == "function" ? te : null;
        }
        var ct = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function Ue(D) {
          {
            for (
              var te = arguments.length,
                ce = new Array(te > 1 ? te - 1 : 0),
                Me = 1;
              Me < te;
              Me++
            )
              ce[Me - 1] = arguments[Me];
            Ne("error", D, ce);
          }
        }
        function Ne(D, te, ce) {
          {
            var Me = ct.ReactDebugCurrentFrame,
              Ze = Me.getStackAddendum();
            Ze !== "" && ((te += "%s"), (ce = ce.concat([Ze])));
            var ft = ce.map(function (Je) {
              return String(Je);
            });
            ft.unshift("Warning: " + te),
              Function.prototype.apply.call(console[D], console, ft);
          }
        }
        var et = false,
          Fe = false,
          Ie = false,
          $e = false,
          dn = false,
          pn;
        pn = Symbol.for("react.module.reference");
        function Bt(D) {
          return !!(
            typeof D == "string" ||
            typeof D == "function" ||
            D === m ||
            D === R ||
            dn ||
            D === b ||
            D === L ||
            D === Y ||
            $e ||
            D === X ||
            et ||
            Fe ||
            Ie ||
            (typeof D == "object" &&
              D !== null &&
              (D.$$typeof === W ||
                D.$$typeof === U ||
                D.$$typeof === S ||
                D.$$typeof === O ||
                D.$$typeof === j || // This needs to include all possible module reference object
                // types supported by any Flight configuration anywhere since
                // we don't know which Flight build this will end up being used
                // with.
                D.$$typeof === pn ||
                D.getModuleId !== void 0))
          );
        }
        function xt(D, te, ce) {
          var Me = D.displayName;
          if (Me) return Me;
          var Ze = te.displayName || te.name || "";
          return Ze !== "" ? ce + "(" + Ze + ")" : ce;
        }
        function Dt(D) {
          return D.displayName || "Context";
        }
        function Qe(D) {
          if (D == null) return null;
          if (
            (typeof D.tag == "number" &&
              Ue(
                "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
              ),
            typeof D == "function")
          )
            return D.displayName || D.name || null;
          if (typeof D == "string") return D;
          switch (D) {
            case m:
              return "Fragment";
            case p:
              return "Portal";
            case R:
              return "Profiler";
            case b:
              return "StrictMode";
            case L:
              return "Suspense";
            case Y:
              return "SuspenseList";
          }
          if (typeof D == "object")
            switch (D.$$typeof) {
              case O:
                var te = D;
                return Dt(te) + ".Consumer";
              case S:
                var ce = D;
                return Dt(ce._context) + ".Provider";
              case j:
                return xt(D, D.render, "ForwardRef");
              case U:
                var Me = D.displayName || null;
                return Me !== null ? Me : Qe(D.type) || "Memo";
              case W: {
                var Ze = D,
                  ft = Ze._payload,
                  Je = Ze._init;
                try {
                  return Qe(Je(ft));
                } catch {
                  return null;
                }
              }
            }
          return null;
        }
        var lt = Object.assign,
          En = 0,
          jt,
          lr,
          ie,
          ze,
          ve,
          vt,
          mt;
        function jn() {}
        jn.__reactDisabledLog = true;
        function or() {
          {
            if (En === 0) {
              (jt = console.log),
                (lr = console.info),
                (ie = console.warn),
                (ze = console.error),
                (ve = console.group),
                (vt = console.groupCollapsed),
                (mt = console.groupEnd);
              var D = {
                configurable: true,
                enumerable: true,
                value: jn,
                writable: true,
              };
              Object.defineProperties(console, {
                info: D,
                log: D,
                warn: D,
                error: D,
                group: D,
                groupCollapsed: D,
                groupEnd: D,
              });
            }
            En++;
          }
        }
        function Ba() {
          {
            if ((En--, En === 0)) {
              var D = {
                configurable: true,
                enumerable: true,
                writable: true,
              };
              Object.defineProperties(console, {
                log: lt({}, D, {
                  value: jt,
                }),
                info: lt({}, D, {
                  value: lr,
                }),
                warn: lt({}, D, {
                  value: ie,
                }),
                error: lt({}, D, {
                  value: ze,
                }),
                group: lt({}, D, {
                  value: ve,
                }),
                groupCollapsed: lt({}, D, {
                  value: vt,
                }),
                groupEnd: lt({}, D, {
                  value: mt,
                }),
              });
            }
            En < 0 &&
              Ue(
                "disabledDepth fell below zero. This is a bug in React. Please file an issue."
              );
          }
        }
        var vn = ct.ReactCurrentDispatcher,
          Jr;
        function Wn(D, te, ce) {
          {
            if (Jr === void 0)
              try {
                throw Error();
              } catch (Ze) {
                var Me = Ze.stack.trim().match(/\n( *(at )?)/);
                Jr = (Me && Me[1]) || "";
              }
            return (
              `
` +
              Jr +
              D
            );
          }
        }
        var Sr = false,
          Va;
        {
          var xr = typeof WeakMap == "function" ? WeakMap : Map;
          Va = new xr();
        }
        function ea(D, te) {
          if (!D || Sr) return "";
          {
            var ce = Va.get(D);
            if (ce !== void 0) return ce;
          }
          var Me;
          Sr = true;
          var Ze = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var ft;
          (ft = vn.current), (vn.current = null), or();
          try {
            if (te) {
              var Je = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Je.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Je, []);
                } catch (ht) {
                  Me = ht;
                }
                Reflect.construct(D, [], Je);
              } else {
                try {
                  Je.call();
                } catch (ht) {
                  Me = ht;
                }
                D.call(Je.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (ht) {
                Me = ht;
              }
              D();
            }
          } catch (ht) {
            if (ht && Me && typeof ht.stack == "string") {
              for (
                var Oe = ht.stack.split(`
`),
                  Tn = Me.stack.split(`
`),
                  Vt = Oe.length - 1,
                  Pt = Tn.length - 1;
                Vt >= 1 && Pt >= 0 && Oe[Vt] !== Tn[Pt];

              )
                Pt--;
              for (; Vt >= 1 && Pt >= 0; Vt--, Pt--)
                if (Oe[Vt] !== Tn[Pt]) {
                  if (Vt !== 1 || Pt !== 1)
                    do
                      if ((Vt--, Pt--, Pt < 0 || Oe[Vt] !== Tn[Pt])) {
                        var ur =
                          `
` + Oe[Vt].replace(" at new ", " at ");
                        return (
                          D.displayName &&
                            ur.includes("<anonymous>") &&
                            (ur = ur.replace("<anonymous>", D.displayName)),
                          typeof D == "function" && Va.set(D, ur),
                          ur
                        );
                      }
                    while (Vt >= 1 && Pt >= 0);
                  break;
                }
            }
          } finally {
            (Sr = false),
              (vn.current = ft),
              Ba(),
              (Error.prepareStackTrace = Ze);
          }
          var $i = D ? D.displayName || D.name : "",
            Rs = $i ? Wn($i) : "";
          return typeof D == "function" && Va.set(D, Rs), Rs;
        }
        function bn(D, te, ce) {
          return ea(D, false);
        }
        function Xn(D) {
          var te = D.prototype;
          return !!(te && te.isReactComponent);
        }
        function An(D, te, ce) {
          if (D == null) return "";
          if (typeof D == "function") return ea(D, Xn(D));
          if (typeof D == "string") return Wn(D);
          switch (D) {
            case L:
              return Wn("Suspense");
            case Y:
              return Wn("SuspenseList");
          }
          if (typeof D == "object")
            switch (D.$$typeof) {
              case j:
                return bn(D.render);
              case U:
                return An(D.type, te, ce);
              case W: {
                var Me = D,
                  Ze = Me._payload,
                  ft = Me._init;
                try {
                  return An(ft(Ze), te, ce);
                } catch {}
              }
            }
          return "";
        }
        var qn = Object.prototype.hasOwnProperty,
          Kn = {},
          ta = ct.ReactDebugCurrentFrame;
        function wa(D) {
          if (D) {
            var te = D._owner,
              ce = An(D.type, D._source, te ? te.type : null);
            ta.setExtraStackFrame(ce);
          } else ta.setExtraStackFrame(null);
        }
        function li(D, te, ce, Me, Ze) {
          {
            var ft = Function.call.bind(qn);
            for (var Je in D)
              if (ft(D, Je)) {
                var Oe = void 0;
                try {
                  if (typeof D[Je] != "function") {
                    var Tn = Error(
                      (Me || "React class") +
                        ": " +
                        ce +
                        " type `" +
                        Je +
                        "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                        typeof D[Je] +
                        "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                    );
                    throw ((Tn.name = "Invariant Violation"), Tn);
                  }
                  Oe = D[Je](
                    te,
                    Je,
                    Me,
                    ce,
                    null,
                    "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                  );
                } catch (Vt) {
                  Oe = Vt;
                }
                Oe &&
                  !(Oe instanceof Error) &&
                  (wa(Ze),
                  Ue(
                    "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                    Me || "React class",
                    ce,
                    Je,
                    typeof Oe
                  ),
                  wa(null)),
                  Oe instanceof Error &&
                    !(Oe.message in Kn) &&
                    ((Kn[Oe.message] = true),
                    wa(Ze),
                    Ue("Failed %s type: %s", ce, Oe.message),
                    wa(null));
              }
          }
        }
        var Pa = Array.isArray;
        function Ta(D) {
          return Pa(D);
        }
        function Ar(D) {
          {
            var te = typeof Symbol == "function" && Symbol.toStringTag,
              ce =
                (te && D[Symbol.toStringTag]) || D.constructor.name || "Object";
            return ce;
          }
        }
        function Ya(D) {
          try {
            return Ur(D), false;
          } catch {
            return true;
          }
        }
        function Ur(D) {
          return "" + D;
        }
        function Ra(D) {
          if (Ya(D))
            return (
              Ue(
                "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
                Ar(D)
              ),
              Ur(D)
            );
        }
        var ln = ct.ReactCurrentOwner,
          Fr = {
            key: true,
            ref: true,
            __self: true,
            __source: true,
          },
          Ai,
          ka,
          se;
        se = {};
        function ke(D) {
          if (qn.call(D, "ref")) {
            var te = Object.getOwnPropertyDescriptor(D, "ref").get;
            if (te && te.isReactWarning) return false;
          }
          return D.ref !== void 0;
        }
        function tt(D) {
          if (qn.call(D, "key")) {
            var te = Object.getOwnPropertyDescriptor(D, "key").get;
            if (te && te.isReactWarning) return false;
          }
          return D.key !== void 0;
        }
        function bt(D, te) {
          if (
            typeof D.ref == "string" &&
            ln.current &&
            te &&
            ln.current.stateNode !== te
          ) {
            var ce = Qe(ln.current.type);
            se[ce] ||
              (Ue(
                'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                Qe(ln.current.type),
                D.ref
              ),
              (se[ce] = true));
          }
        }
        function Qt(D, te) {
          {
            var ce = function () {
              Ai ||
                ((Ai = true),
                Ue(
                  "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                  te
                ));
            };
            (ce.isReactWarning = true),
              Object.defineProperty(D, "key", {
                get: ce,
                configurable: true,
              });
          }
        }
        function wn(D, te) {
          {
            var ce = function () {
              ka ||
                ((ka = true),
                Ue(
                  "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                  te
                ));
            };
            (ce.isReactWarning = true),
              Object.defineProperty(D, "ref", {
                get: ce,
                configurable: true,
              });
          }
        }
        var tn = function (D, te, ce, Me, Ze, ft, Je) {
          var Oe = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: v,
            // Built-in properties that belong on the element
            type: D,
            key: te,
            ref: ce,
            props: Je,
            // Record the component responsible for creating this element.
            _owner: ft,
          };
          return (
            (Oe._store = {}),
            Object.defineProperty(Oe._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false,
            }),
            Object.defineProperty(Oe, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: Me,
            }),
            Object.defineProperty(Oe, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: Ze,
            }),
            Object.freeze && (Object.freeze(Oe.props), Object.freeze(Oe)),
            Oe
          );
        };
        function Cr(D, te, ce, Me, Ze) {
          {
            var ft,
              Je = {},
              Oe = null,
              Tn = null;
            ce !== void 0 && (Ra(ce), (Oe = "" + ce)),
              tt(te) && (Ra(te.key), (Oe = "" + te.key)),
              ke(te) && ((Tn = te.ref), bt(te, Ze));
            for (ft in te)
              qn.call(te, ft) && !Fr.hasOwnProperty(ft) && (Je[ft] = te[ft]);
            if (D && D.defaultProps) {
              var Vt = D.defaultProps;
              for (ft in Vt) Je[ft] === void 0 && (Je[ft] = Vt[ft]);
            }
            if (Oe || Tn) {
              var Pt =
                typeof D == "function"
                  ? D.displayName || D.name || "Unknown"
                  : D;
              Oe && Qt(Je, Pt), Tn && wn(Je, Pt);
            }
            return tn(D, Oe, Tn, Ze, Me, ln.current, Je);
          }
        }
        var Lt = ct.ReactCurrentOwner,
          $r = ct.ReactDebugCurrentFrame;
        function Nt(D) {
          if (D) {
            var te = D._owner,
              ce = An(D.type, D._source, te ? te.type : null);
            $r.setExtraStackFrame(ce);
          } else $r.setExtraStackFrame(null);
        }
        var Ot;
        Ot = false;
        function po(D) {
          return typeof D == "object" && D !== null && D.$$typeof === v;
        }
        function xl() {
          {
            if (Lt.current) {
              var D = Qe(Lt.current.type);
              if (D)
                return (
                  `

Check the render method of \`` +
                  D +
                  "`."
                );
            }
            return "";
          }
        }
        function vo(D) {
          {
            if (D !== void 0) {
              var te = D.fileName.replace(/^.*[\\\/]/, ""),
                ce = D.lineNumber;
              return (
                `

Check your code at ` +
                te +
                ":" +
                ce +
                "."
              );
            }
            return "";
          }
        }
        var gu = {};
        function Ts(D) {
          {
            var te = xl();
            if (!te) {
              var ce = typeof D == "string" ? D : D.displayName || D.name;
              ce &&
                (te =
                  `

Check the top-level render call using <` +
                  ce +
                  ">.");
            }
            return te;
          }
        }
        function Cl(D, te) {
          {
            if (!D._store || D._store.validated || D.key != null) return;
            D._store.validated = true;
            var ce = Ts(te);
            if (gu[ce]) return;
            gu[ce] = true;
            var Me = "";
            D &&
              D._owner &&
              D._owner !== Lt.current &&
              (Me = " It was passed a child from " + Qe(D._owner.type) + "."),
              Nt(D),
              Ue(
                'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                ce,
                Me
              ),
              Nt(null);
          }
        }
        function ho(D, te) {
          {
            if (typeof D != "object") return;
            if (Ta(D))
              for (var ce = 0; ce < D.length; ce++) {
                var Me = D[ce];
                po(Me) && Cl(Me, te);
              }
            else if (po(D)) D._store && (D._store.validated = true);
            else if (D) {
              var Ze = Pe(D);
              if (typeof Ze == "function" && Ze !== D.entries)
                for (var ft = Ze.call(D), Je; !(Je = ft.next()).done; )
                  po(Je.value) && Cl(Je.value, te);
            }
          }
        }
        function El(D) {
          {
            var te = D.type;
            if (te == null || typeof te == "string") return;
            var ce;
            if (typeof te == "function") ce = te.propTypes;
            else if (
              typeof te == "object" &&
              (te.$$typeof === j || // Note: Memo only checks outer props here.
                // Inner props are checked in the reconciler.
                te.$$typeof === U)
            )
              ce = te.propTypes;
            else return;
            if (ce) {
              var Me = Qe(te);
              li(ce, D.props, "prop", Me, D);
            } else if (te.PropTypes !== void 0 && !Ot) {
              Ot = true;
              var Ze = Qe(te);
              Ue(
                "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
                Ze || "Unknown"
              );
            }
            typeof te.getDefaultProps == "function" &&
              !te.getDefaultProps.isReactClassApproved &&
              Ue(
                "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
              );
          }
        }
        function go(D) {
          {
            for (var te = Object.keys(D.props), ce = 0; ce < te.length; ce++) {
              var Me = te[ce];
              if (Me !== "children" && Me !== "key") {
                Nt(D),
                  Ue(
                    "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                    Me
                  ),
                  Nt(null);
                break;
              }
            }
            D.ref !== null &&
              (Nt(D),
              Ue("Invalid attribute `ref` supplied to `React.Fragment`."),
              Nt(null));
          }
        }
        function Ia(D, te, ce, Me, Ze, ft) {
          {
            var Je = Bt(D);
            if (!Je) {
              var Oe = "";
              (D === void 0 ||
                (typeof D == "object" &&
                  D !== null &&
                  Object.keys(D).length === 0)) &&
                (Oe +=
                  " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var Tn = vo(Ze);
              Tn ? (Oe += Tn) : (Oe += xl());
              var Vt;
              D === null
                ? (Vt = "null")
                : Ta(D)
                ? (Vt = "array")
                : D !== void 0 && D.$$typeof === v
                ? ((Vt = "<" + (Qe(D.type) || "Unknown") + " />"),
                  (Oe =
                    " Did you accidentally export a JSX literal instead of a component?"))
                : (Vt = typeof D),
                Ue(
                  "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                  Vt,
                  Oe
                );
            }
            var Pt = Cr(D, te, ce, Ze, ft);
            if (Pt == null) return Pt;
            if (Je) {
              var ur = te.children;
              if (ur !== void 0)
                if (Me)
                  if (Ta(ur)) {
                    for (var $i = 0; $i < ur.length; $i++) ho(ur[$i], D);
                    Object.freeze && Object.freeze(ur);
                  } else
                    Ue(
                      "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                    );
                else ho(ur, D);
            }
            return D === m ? go(Pt) : El(Pt), Pt;
          }
        }
        function Ui(D, te, ce) {
          return Ia(D, te, ce, true);
        }
        function Hr(D, te, ce) {
          return Ia(D, te, ce, false);
        }
        var Da = Hr,
          Fi = Ui;
        ($p.Fragment = m), ($p.jsx = Da), ($p.jsxs = Fi);
      })()),
    $p
  );
}
false ? (_1.exports = j2()) : (_1.exports = A2());
var w = _1.exports;
var OE = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0,
};
var yE =
  import_react.default.createContext && import_react.default.createContext(OE);
var hu =
  (globalThis && globalThis.__assign) ||
  function () {
    return (
      (hu =
        Object.assign ||
        function (c) {
          for (var v, p = 1, m = arguments.length; p < m; p++) {
            v = arguments[p];
            for (var b in v)
              Object.prototype.hasOwnProperty.call(v, b) && (c[b] = v[b]);
          }
          return c;
        }),
      hu.apply(this, arguments)
    );
  };
var U2 =
  (globalThis && globalThis.__rest) ||
  function (c, v) {
    var p = {};
    for (var m in c)
      Object.prototype.hasOwnProperty.call(c, m) &&
        v.indexOf(m) < 0 &&
        (p[m] = c[m]);
    if (c != null && typeof Object.getOwnPropertySymbols == "function")
      for (var b = 0, m = Object.getOwnPropertySymbols(c); b < m.length; b++)
        v.indexOf(m[b]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(c, m[b]) &&
          (p[m[b]] = c[m[b]]);
    return p;
  };
function jE(c) {
  return (
    c &&
    c.map(function (v, p) {
      return import_react.default.createElement(
        v.tag,
        hu(
          {
            key: p,
          },
          v.attr
        ),
        jE(v.child)
      );
    })
  );
}
function On(c) {
  return function (v) {
    return import_react.default.createElement(
      F2,
      hu(
        {
          attr: hu({}, c.attr),
        },
        v
      ),
      jE(c.child)
    );
  };
}
function F2(c) {
  var v = function (p) {
    var m = c.attr,
      b = c.size,
      R = c.title,
      S = U2(c, ["attr", "size", "title"]),
      O = b || p.size || "1em",
      j;
    return (
      p.className && (j = p.className),
      c.className && (j = (j ? j + " " : "") + c.className),
      import_react.default.createElement(
        "svg",
        hu(
          {
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0",
          },
          p.attr,
          m,
          S,
          {
            className: j,
            style: hu(
              hu(
                {
                  color: c.color || p.color,
                },
                p.style
              ),
              c.style
            ),
            height: O,
            width: O,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        R && import_react.default.createElement("title", null, R),
        c.children
      )
    );
  };
  return yE !== void 0
    ? import_react.default.createElement(yE.Consumer, null, function (p) {
        return v(p);
      })
    : v(OE);
}
function Gg(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
        },
      },
    ],
  })(c);
}
function $2(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" },
      },
    ],
  })(c);
}
function AE(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",
        },
      },
    ],
  })(c);
}
function H2(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",
        },
      },
    ],
  })(c);
}
function B2(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        },
      },
    ],
  })(c);
}
function V2(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
      {
        tag: "path",
        attr: { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" },
      },
    ],
  })(c);
}
function P2(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
      {
        tag: "path",
        attr: { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" },
      },
    ],
  })(c);
}
function Y2(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" },
      },
    ],
  })(c);
}
function I2(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" },
      },
    ],
  })(c);
}
function mE(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
        },
      },
    ],
  })(c);
}
function SE(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
        },
      },
    ],
  })(c);
}
function UE(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        },
      },
    ],
  })(c);
}
function Q2(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z",
        },
      },
      { tag: "path", attr: { fill: "none", d: "M24 24H0V0h24v24z" } },
    ],
  })(c);
}
function G2(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
      {
        tag: "path",
        attr: {
          d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z",
        },
      },
    ],
  })(c);
}
function W2(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" },
      },
    ],
  })(c);
}
function X2(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M12 5.9a2.1 2.1 0 110 4.2 2.1 2.1 0 010-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z",
        },
      },
    ],
  })(c);
}
function FE(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
        },
      },
    ],
  })(c);
}
function q2(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" },
      },
    ],
  })(c);
}
function $E(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
      { tag: "path", attr: { d: "M7 10l5 5 5-5H7z" } },
    ],
  })(c);
}
function K2(c) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
      { tag: "path", attr: { d: "M7 14l5-5 5 5H7z" } },
    ],
  })(c);
}
var K = {
  neutral: {
    N900: "#091E42",
    N800: "#172B4D",
    N700: "#253858",
    N600: "#344563",
    N500: "#42526E",
    N400: "#505F79",
    N300: "#5E6C84",
    N200: "#6B778C",
    N100: "#7A869A",
    N90: "#8993A4",
    N80: "#97A0AF",
    N70: "#A5ADBA",
    N60: "#B3BAC5",
    N50: "#C1C7D0",
    N40: "#DFE1E6",
    N30: "#EBECF0",
    N20: "#F4F5F7",
    N10: "#FAFBFC",
    N0: "#FFFFFF",
  },
  neutralAlpha: {
    N900A: "rgba(9, 30, 66, 1)",
    N800A: "rgba(9, 30, 66, 0.95)",
    N700A: "rgba(9, 30, 66, 0.89)",
    N600A: "rgba(9, 30, 66, 0.82)",
    N500A: "rgba(9, 30, 66, 0.77)",
    N400A: "rgba(9, 30, 66, 0.71)",
    N300A: "rgba(9, 30, 66, 0.66)",
    N200A: "rgba(9, 30, 66, 0.60)",
    N100A: "rgba(9, 30, 66, 0.54)",
    N90A: "rgba(9, 30, 66, 0.48)",
    N80A: "rgba(9, 30, 66, 0.42)",
    N70A: "rgba(9, 30, 66, 0.36)",
    N60A: "rgba(9, 30, 66, 0.31)",
    N50A: "rgba(9, 30, 66, 0.25)",
    N40A: "rgba(9, 30, 66, 0.13)",
    N30A: "rgba(9, 30, 66, 0.08)",
    N20A: "rgba(9, 30, 66, 0.04)",
    N10A: "rgba(9, 30, 66, 0.02)",
    N0A: "rgba(9, 30, 66, 0)",
  },
  red: {
    R500: "#BF2600",
    R400: "#DE350B",
    R300: "#FF5630",
    R200: "#FF7452",
    R100: "#FF8F73",
    R75: "#FFBDAD",
    R50: "#FFEBE6",
  },
  yellow: {
    Y500: "#FF8B00",
    Y400: "#FF991F",
    Y300: "#FFAB00",
    Y200: "#FFC400",
    Y100: "#FFE380",
    Y75: "#FFF0B3",
    Y50: "#FFFAE6",
  },
  green: {
    G500: "#006644",
    G400: "#00875A",
    G300: "#36B37E",
    G200: "#57D9A3",
    G100: "#79F2C0",
    G75: "#ABF5D1",
    G50: "#E3FCEF",
  },
  blue: {
    B500: "#0747A6",
    B400: "#0052CC",
    B300: "#0065FF",
    B200: "#2684FF",
    B100: "#4C9AFF",
    B75: "#B3D4FF",
    B50: "#DEEBFF",
  },
  teal: {
    T500: "#008DA6",
    T400: "#00A3BF",
    T300: "#00B8D9",
    T200: "#00C7E6",
    T100: "#79E2F2",
    T75: "#B3F5FF",
    T50: "#E6FCFF",
  },
  purple: {
    P500: "#403294",
    P400: "#5243AA",
    P300: "#6554C0",
    P200: "#8777D9",
    P100: "#998DD9",
    P75: "#C0B6F2",
    P50: "#EAE6FF",
  },
};
var Z2 = {
  primary: {
    regular: K.blue.B400,
    hover: K.blue.B300,
    focus: K.blue.B300,
    disabled: K.neutral.N70,
  },
  error: {
    regular: K.red.R400,
    hover: K.red.R300,
    disabled: K.neutral.N70,
  },
  warning: {
    regular: K.yellow.Y400,
    hover: K.yellow.Y300,
    disabled: K.neutral.N70,
  },
  success: {
    regular: K.green.G400,
    hover: K.green.G300,
    disabled: K.neutral.N70,
  },
  information: {
    regular: K.blue.B400,
    hover: K.blue.B300,
    disabled: K.neutral.N70,
  },
  help: {
    regular: K.purple.P400,
    hover: K.purple.P300,
    disabled: K.neutral.N70,
  },
  divider: {
    regular: K.neutral.N40,
  },
  spinner: {
    regular: K.neutral.N30,
    transparent: K.neutralAlpha.N0A,
  },
  dark: {
    regular: K.neutral.N900,
    hover: K.neutral.N500,
    disabled: K.neutral.N70,
  },
  gray: {
    regular: K.neutral.N200,
    hover: K.neutral.N90,
    disabled: K.neutral.N70,
  },
  light: {
    regular: K.neutral.N10,
    hover: K.neutral.N0,
    disabled: K.neutral.N70,
  },
  link: {
    regular: K.blue.B400,
    hover: K.blue.B300,
    disabled: K.neutral.N70,
  },
};
var J2 = {
  primary: {
    regular: K.blue.B400,
    hover: K.blue.B300,
    clear: K.blue.B50,
    disabled: K.neutral.N20,
  },
  error: {
    regular: K.red.R400,
    hover: K.red.R300,
    clear: K.red.R50,
    disabled: K.neutral.N20,
  },
  warning: {
    regular: K.yellow.Y400,
    hover: K.yellow.Y300,
    clear: K.yellow.Y50,
    disabled: K.neutral.N20,
  },
  success: {
    regular: K.green.G400,
    hover: K.green.G300,
    clear: K.green.G50,
    disabled: K.neutral.N20,
  },
  information: {
    regular: K.blue.B400,
    hover: K.blue.B300,
    clear: K.blue.B50,
    disabled: K.neutral.N20,
  },
  help: {
    regular: K.purple.P400,
    hover: K.purple.P300,
    clear: K.purple.P50,
    disabled: K.neutral.N20,
  },
  nav: {
    regular: K.neutral.N10,
  },
  navLink: {
    regular: K.neutralAlpha.N0A,
    selected: K.neutral.N30,
    hover: K.neutral.N30,
  },
  blanket: {
    regular: K.neutralAlpha.N100A,
  },
  dark: {
    regular: K.neutral.N900,
    hover: K.neutral.N500,
    clear: K.neutral.N30,
    disabled: K.neutral.N20,
  },
  gray: {
    regular: K.neutral.N30,
    hover: K.neutral.N20,
    clear: K.neutral.N10,
    disabled: K.neutral.N20,
  },
  light: {
    regular: K.neutral.N10,
    hover: K.neutral.N0,
    clear: K.neutral.N0,
    disabled: K.neutral.N20,
  },
};
var eD = {
  primary: {
    regular: K.blue.B400,
    hover: K.blue.B300,
    disabled: K.neutral.N70,
  },
  error: {
    regular: K.red.R400,
    hover: K.red.R300,
    disabled: K.neutral.N70,
  },
  warning: {
    regular: K.yellow.Y400,
    hover: K.yellow.Y300,
    disabled: K.neutral.N70,
  },
  success: {
    regular: K.green.G400,
    hover: K.green.G300,
    disabled: K.neutral.N70,
  },
  help: {
    regular: K.purple.P400,
    hover: K.purple.P300,
    disabled: K.neutral.N70,
  },
  information: {
    regular: K.blue.B400,
    hover: K.blue.B300,
    disabled: K.neutral.N70,
  },
  dark: {
    regular: K.neutral.N900,
    hover: K.neutral.N500,
    disabled: K.neutral.N70,
  },
  gray: {
    regular: K.neutral.N300,
    hover: K.neutral.N100,
    disabled: K.neutral.N70,
  },
  light: {
    regular: K.neutral.N10,
    hover: K.neutral.N0,
    disabled: K.neutral.N70,
  },
  link: {
    regular: K.blue.B400,
    hover: K.blue.B300,
    disabled: K.neutral.N70,
  },
};
var tD = {
  palette: K,
  text: eD,
  stroke: Z2,
  surface: J2,
};
var z1 = {
  s0: "0px",
  s025: "2px",
  s050: "4px",
  s075: "6px",
  s100: "8px",
  s150: "12px",
  s200: "16px",
  s250: "20px",
  s300: "24px",
  s350: "28px",
  s400: "32px",
  s450: "36px",
  s500: "40px",
  s600: "48px",
  s800: "64px",
  s1000: "80px",
};
var nD = {
  large: {
    font: "Roboto",
    lineHeight: "24px",
    size: "16px",
    tracking: "0.5px",
    weight: "400",
  },
  medium: {
    font: "Roboto",
    lineHeight: "20px",
    size: "14px",
    tracking: "0.25px",
    weight: "400",
  },
  small: {
    font: "Roboto",
    lineHeight: "16px",
    size: "12px",
    tracking: "0.4px",
    weight: "400",
  },
};
var rD = {
  large: {
    font: "Roboto",
    lineHeight: "64px",
    size: "57px",
    tracking: "-0.25px",
    weight: "400",
  },
  medium: {
    font: "Roboto",
    lineHeight: "52px",
    size: "45px",
    tracking: "0px",
    weight: "400",
  },
  small: {
    font: "Roboto",
    lineHeight: "44px",
    size: "36px",
    tracking: "0px",
    weight: "400",
  },
};
var aD = {
  large: {
    font: "Roboto",
    lineHeight: "40px",
    size: "32px",
    tracking: "0px",
    weight: "400",
  },
  medium: {
    font: "Roboto",
    lineHeight: "36px",
    size: "28px",
    tracking: "0px",
    weight: "400",
  },
  small: {
    font: "Roboto",
    lineHeight: "32px",
    size: "24px",
    tracking: "0px",
    weight: "400",
  },
};
var iD = {
  large: {
    font: "Roboto",
    lineHeight: "20px",
    size: "14px",
    tracking: "0.1px",
    weight: "500",
  },
  medium: {
    font: "Roboto",
    lineHeight: "16px",
    size: "12px",
    tracking: "0.5px",
    weight: "500",
  },
  small: {
    font: "Roboto",
    lineHeight: "16px",
    size: "11px",
    tracking: "0.5px",
    weight: "500",
  },
};
var lD = {
  large: {
    font: "Roboto",
    lineHeight: "28px",
    size: "22px",
    tracking: "0px",
    weight: "400",
  },
  medium: {
    font: "Roboto",
    lineHeight: "24px",
    size: "16px",
    tracking: "0.15px",
    weight: "500",
  },
  small: {
    font: "Roboto",
    lineHeight: "20px",
    size: "14px",
    tracking: "0.1px",
    weight: "500",
  },
};
var oD = {
  display: rD,
  headline: aD,
  title: lD,
  label: iD,
  body: nD,
};
var k = {
  color: tD,
  spacing: z1,
  typography: oD,
};
var uD = ["gray", "light"];
var sD = styled_components_browser_esm_default.figure`
  display: inline-block;

  padding: ${k.spacing.s0};
  margin: ${k.spacing.s0};
  border-radius: ${({ shape: c }) => (c === "circle" ? "50%" : "8px")};
  border-width: ${({ variant: c }) => (c === "outlined" ? "1px" : "0px")};
  border-style: solid;
  border-color: ${({
    theme: c,
    appearance: v,
    parentHover: p,
    disabled: m,
    variant: b,
  }) => {
    var R, S, O, j, L, Y, U, W, X;
    return m
      ? ((O =
          (S =
            (R = c == null ? void 0 : c.color) == null ? void 0 : R.stroke) ==
          null
            ? void 0
            : S[v]) == null
          ? void 0
          : O.disabled) || k.color.stroke[v].disabled
      : p && b !== "filled"
      ? ((Y =
          (L =
            (j = c == null ? void 0 : c.color) == null ? void 0 : j.stroke) ==
          null
            ? void 0
            : L[v]) == null
          ? void 0
          : Y.hover) || k.color.stroke[v].hover
      : ((X =
          (W =
            (U = c == null ? void 0 : c.color) == null ? void 0 : U.stroke) ==
          null
            ? void 0
            : W[v]) == null
          ? void 0
          : X.regular) || k.color.stroke[v].regular;
  }};

  background-color: ${({
    theme: c,
    variant: v,
    appearance: p,
    parentHover: m,
    disabled: b,
  }) => {
    var R, S, O, j, L, Y, U, W, X;
    if (v === "filled")
      return b
        ? ((O =
            (S =
              (R = c == null ? void 0 : c.color) == null
                ? void 0
                : R.surface) == null
              ? void 0
              : S[p]) == null
            ? void 0
            : O.disabled) || k.color.surface[p].disabled
        : m
        ? ((Y =
            (L =
              (j = c == null ? void 0 : c.color) == null
                ? void 0
                : j.surface) == null
              ? void 0
              : L[p]) == null
            ? void 0
            : Y.hover) || k.color.surface[p].hover
        : ((X =
            (W =
              (U = c == null ? void 0 : c.color) == null
                ? void 0
                : U.surface) == null
              ? void 0
              : W[p]) == null
            ? void 0
            : X.regular) || k.color.surface[p].regular;
  }};

  color: ${({
    theme: c,
    variant: v,
    appearance: p,
    parentHover: m,
    disabled: b,
  }) => {
    var R, S, O, j, L, Y, U, W, X, le, Ce, Pe, ct, Ue, Ne;
    return b
      ? ((O =
          (S = (R = c == null ? void 0 : c.color) == null ? void 0 : R.text) ==
          null
            ? void 0
            : S[p]) == null
          ? void 0
          : O.disabled) || k.color.text[p].disabled
      : v !== "filled"
      ? m
        ? ((Y =
            (L =
              (j = c == null ? void 0 : c.color) == null ? void 0 : j.text) ==
            null
              ? void 0
              : L[p]) == null
            ? void 0
            : Y.hover) || k.color.text[p].hover
        : ((X =
            (W =
              (U = c == null ? void 0 : c.color) == null ? void 0 : U.text) ==
            null
              ? void 0
              : W[p]) == null
            ? void 0
            : X.regular) || k.color.text[p].regular
      : uD.includes(p)
      ? ((Ne =
          (Ue =
            (ct = c == null ? void 0 : c.color) == null ? void 0 : ct.text) ==
          null
            ? void 0
            : Ue.gray) == null
          ? void 0
          : Ne.regular) || k.color.text.gray.regular
      : ((Pe =
          (Ce =
            (le = c == null ? void 0 : c.color) == null ? void 0 : le.text) ==
          null
            ? void 0
            : Ce.light) == null
          ? void 0
          : Pe.regular) || k.color.text.light.regular;
  }};

  & svg {
    display: block;
    width: ${({ size: c }) => c};
    height: ${({ size: c }) => c};
    padding: ${({ spacing: c }) =>
      c === "wide"
        ? k.spacing.s100
        : c === "compact"
        ? k.spacing.s050
        : k.spacing.s025};
  }

  &:hover {
    cursor: ${({ cursorHover: c, disabled: v, variant: p }) => {
      if (!v && c && p !== "filled") return "pointer";
    }};

    border-color: ${({
      theme: c,
      cursorHover: v,
      appearance: p,
      disabled: m,
      variant: b,
    }) => {
      var R, S, O;
      if (!m && v && b !== "filled")
        return (
          ((O =
            (S =
              (R = c == null ? void 0 : c.color) == null ? void 0 : R.text) ==
            null
              ? void 0
              : S[p]) == null
            ? void 0
            : O.hover) || k.color.text[p].hover
        );
    }};

    color: ${({
      theme: c,
      cursorHover: v,
      appearance: p,
      disabled: m,
      variant: b,
    }) => {
      var R, S, O;
      if (!m && v && b !== "filled")
        return (
          ((O =
            (S =
              (R = c == null ? void 0 : c.color) == null ? void 0 : R.stroke) ==
            null
              ? void 0
              : S[p]) == null
            ? void 0
            : O.hover) || k.color.stroke[p].hover
        );
    }};

    background-color: ${({
      theme: c,
      variant: v,
      appearance: p,
      cursorHover: m,
      disabled: b,
    }) => {
      var R, S, O;
      if (!b && v === "filled" && m)
        return (
          ((O =
            (S =
              (R = c == null ? void 0 : c.color) == null
                ? void 0
                : R.surface) == null
              ? void 0
              : S[p]) == null
            ? void 0
            : O.hover) || k.color.surface[p].hover
        );
    }};
  }
`;
var en = (c) => {
  const {
    appearance: v,
    cursorHover: p,
    parentHover: m,
    icon: b,
    disabled: R,
    spacing: S,
    variant: O,
    shape: j,
    size: L,
    onClick: Y,
  } = c;
  return w.jsx(sD, {
    appearance: v,
    cursorHover: p,
    parentHover: m,
    disabled: R,
    spacing: S,
    variant: O,
    shape: j,
    size: L,
    onClick: R ? null : Y,
    children: b,
  });
};
var cD = w.jsx(X2, {});
var fD = (c) => {
  const { icon: v = cD } = c;
  return w.jsx(en, {
    appearance: "primary",
    cursorHover: true,
    variant: "filled",
    shape: "circle",
    icon: v,
    spacing: "wide",
    size: "24px",
  });
};
var dD = styled_components_browser_esm_default.p`
  font-family: ${({ type: c, size: v, theme: p }) => {
    var m, b, R;
    return (
      ((R =
        (b = (m = p == null ? void 0 : p.typography) == null ? void 0 : m[c]) ==
        null
          ? void 0
          : b[v]) == null
        ? void 0
        : R.font) || k.typography[c][v].font
    );
  }};
  line-height: ${({ type: c, size: v }) => k.typography[c][v].lineHeight};
  font-size: ${({ type: c, size: v, theme: p }) => {
    var m, b, R;
    return (
      ((R =
        (b = (m = p == null ? void 0 : p.typography) == null ? void 0 : m[c]) ==
        null
          ? void 0
          : b[v]) == null
        ? void 0
        : R.size) || k.typography[c][v].size
    );
  }};
  letter-spacing: ${({ type: c, size: v, theme: p }) => {
    var m, b, R;
    return (
      ((R =
        (b = (m = p == null ? void 0 : p.typography) == null ? void 0 : m[c]) ==
        null
          ? void 0
          : b[v]) == null
        ? void 0
        : R.tracking) || k.typography[c][v].tracking
    );
  }};
  font-weight: ${({ type: c, size: v, theme: p }) => {
    var m, b, R;
    return (
      ((R =
        (b = (m = p == null ? void 0 : p.typography) == null ? void 0 : m[c]) ==
        null
          ? void 0
          : b[v]) == null
        ? void 0
        : R.weight) || k.typography[c][v].weight
    );
  }};
  margin: ${({ margin: c }) => c};
  padding: ${({ padding: c }) => c};
  text-align: ${({ textAlign: c }) => c};
  color: ${({ appearance: c, disabled: v, parentHover: p, theme: m }) => {
    var b, R, S, O, j, L, Y, U, W;
    return v
      ? ((S =
          (R = (b = m == null ? void 0 : m.color) == null ? void 0 : b.text) ==
          null
            ? void 0
            : R[c]) == null
          ? void 0
          : S.disabled) || k.color.text[c].disabled
      : p
      ? ((L =
          (j = (O = m == null ? void 0 : m.color) == null ? void 0 : O.text) ==
          null
            ? void 0
            : j[c]) == null
          ? void 0
          : L.hover) || k.color.text[c].hover
      : ((W =
          (U = (Y = m == null ? void 0 : m.color) == null ? void 0 : Y.text) ==
          null
            ? void 0
            : U[c]) == null
          ? void 0
          : W.regular) || k.color.text[c].regular;
  }};

  white-space: ${({ ellipsis: c }) => c && "nowrap"};
  overflow: ${({ ellipsis: c }) => c && "hidden"};
  text-overflow: ${({ ellipsis: c }) => c && "ellipsis"};
  cursor: ${({ cursorHover: c, parentHover: v }) => (c || v) && "pointer"};

  &:hover {
    color: ${({ appearance: c, disabled: v, cursorHover: p, theme: m }) => {
      var b, R, S;
      return (
        !v &&
        p &&
        (((S =
          (R = (b = m == null ? void 0 : m.color) == null ? void 0 : b.text) ==
          null
            ? void 0
            : R[c]) == null
          ? void 0
          : S.hover) ||
          k.color.text[c].hover)
      );
    }};
  }
`;
var pt = (c) => {
  const {
    children: v,
    textAlign: p = "start",
    margin: m = "0px",
    padding: b = "0px",
    as: R = "p",
    appearance: S = "dark",
    type: O = "body",
    size: j = "large",
    cursorHover: L = false,
    parentHover: Y = false,
    ellipsis: U = false,
    disabled: W = false,
  } = c;
  return w.jsx(dD, {
    as: R,
    textAlign: p,
    appearance: S,
    type: O,
    size: j,
    margin: m,
    padding: b,
    cursorHover: L,
    parentHover: Y,
    ellipsis: U,
    disabled: W,
    children: v,
  });
};
var pD = styled_components_browser_esm_default.div`
  display: flex;
  justify-content: ${({ justifyContent: c }) => c};
  align-items: ${({ alignItems: c }) => c};
  align-content: ${({ alignContent: c }) => c};
  flex-direction: ${({ direction: c }) => c};
  flex-wrap: ${({ wrap: c }) => c};
  height: ${({ height: c }) => c};
  width: ${({ width: c }) => c};
  gap: ${({ gap: c }) => c};
  margin: ${({ margin: c }) =>
    c
      .split(" ")
      .map((p) => {
        var m;
        return (m = k == null ? void 0 : k.spacing) == null ? void 0 : m[p];
      })
      .join(" ")};
  padding: ${({ padding: c }) =>
    c
      .split(" ")
      .map((p) => {
        var m;
        return (m = k == null ? void 0 : k.spacing) == null ? void 0 : m[p];
      })
      .join(" ")};
`;
var Ke = (c) => {
  const {
    children: v,
    wrap: p,
    direction: m,
    justifyContent: b,
    alignItems: R,
    alignContent: S,
    height: O,
    width: j,
    gap: L,
    margin: Y = "s0",
    padding: U = "s0",
  } = c;
  return w.jsx(pD, {
    direction: m,
    justifyContent: b,
    alignItems: R,
    alignContent: S,
    height: O,
    width: j,
    wrap: p,
    gap: L,
    margin: Y,
    padding: U,
    children: v,
  });
};
var vD = (c) => {
  const {
    firstEntryInPage: v,
    lastEntryInPage: p,
    totalRecords: m,
    handleStartPage: b,
    handlePrevPage: R,
    handleNextPage: S,
    handleEndPage: O,
  } = c;
  return w.jsxs(Ke, {
    justifyContent: "flex-end",
    alignItems: "center",
    children: [
      w.jsxs(pt, {
        type: "body",
        size: "small",
        padding: "16px 0px",
        appearance: "dark",
        children: [v + 1, " - ", p, " of ", m],
      }),
      w.jsxs(Ke, {
        alignItems: "center",
        padding: "s0 s300",
        margin: "s0 s0 s0 s200",
        gap: "8px",
        children: [
          w.jsx(en, {
            cursorHover: true,
            appearance: "dark",
            icon: w.jsx(Q2, {}),
            onClick: b,
          }),
          w.jsx(en, {
            cursorHover: true,
            appearance: "dark",
            icon: w.jsx(Y2, {}),
            onClick: R,
          }),
          w.jsx(en, {
            cursorHover: true,
            appearance: "dark",
            icon: w.jsx(I2, {}),
            onClick: S,
          }),
          w.jsx(en, {
            cursorHover: true,
            appearance: "dark",
            icon: w.jsx(G2, {}),
            onClick: O,
          }),
        ],
      }),
    ],
  });
};
var Bp = (c) => {
  const [v, p] = (0, import_react.useState)(false),
    m = (b) => p(b.matches);
  return (
    (0, import_react.useEffect)(() => {
      const b = window.matchMedia(c);
      return (
        m(b),
        b.addEventListener("change", (R) => m(R.target)),
        () => b.removeEventListener("change", (R) => m(R.target))
      );
    }, [c]),
    v
  );
};
var hD = (c) => {
  if (!Array.isArray(c))
    throw new Error("Invalid parameter: queries must be an array");
};
var gD = (c) => {
  if (c.length <= 0)
    throw new Error("Invalid parameter: queries must not be an empty array");
};
var yD = (c) => {
  if (typeof c != "string")
    throw new Error("Invalid queries: must be a string");
  if (c.trim().length === 0)
    throw new Error("Invalid queries: must not be an empty string");
};
var mD = (c) => {
  c.forEach((v) => {
    try {
      yD(v);
    } catch (p) {
      throw new Error(`Invalid queries: ${p}`);
    }
  });
};
var SD = (c) => {
  const v = {};
  return (
    c.forEach((p) => {
      v[p.media] = p.matches;
    }),
    v
  );
};
var HE = (c) => {
  hD(c), mD(c), gD(c);
  const v = c.map((R) => window.matchMedia(R)),
    [p, m] = (0, import_react.useState)(() => SD(v)),
    b = (R) => {
      m((S) => ({ ...S, [R.media]: R.matches }));
    };
  return (
    (0, import_react.useEffect)(
      () => (
        v.forEach((R) => {
          R.addEventListener("change", b);
        }),
        () => {
          v.forEach((R) => {
            R.removeEventListener("change", b);
          });
        }
      ),
      [v]
    ),
    p
  );
};
var xD = ({ content: c }) => {
  const [v, p] = (0, import_react.useState)(false),
    m = () => {
      p(!v);
    };
  return w.jsxs(w.Fragment, { children: [w.jsx(H2, { onClick: m }), v && c] });
};
var CD = styled_components_browser_esm_default.table`
  box-sizing: border-box;
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;
`;
var ED = styled_components_browser_esm_default.thead`
  border-bottom: solid 1px
    ${({ theme: c }) => {
      var v, p, m;
      return (
        ((m =
          (p =
            (v = c == null ? void 0 : c.color) == null ? void 0 : v.stroke) ==
          null
            ? void 0
            : p.divider) == null
          ? void 0
          : m.regular) || k.color.stroke.divider.regular
      );
    }};
  background-color: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.surface) ==
        null
          ? void 0
          : p.light) == null
        ? void 0
        : m.clear) || k.color.surface.light.clear
    );
  }};
`;
var bD = styled_components_browser_esm_default.tbody`
  background-color: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.surface) ==
        null
          ? void 0
          : p.light) == null
        ? void 0
        : m.clear) || k.color.surface.light.clear
    );
  }};
`;
var xE = styled_components_browser_esm_default.tr`
  border-bottom: solid 1px
    ${({ theme: c }) => {
      var v, p, m;
      return (
        ((m =
          (p =
            (v = c == null ? void 0 : c.color) == null ? void 0 : v.stroke) ==
          null
            ? void 0
            : p.divider) == null
          ? void 0
          : m.regular) || k.color.stroke.divider.regular
      );
    }};
  height: 40px;
`;
var wD = styled_components_browser_esm_default.th`
  padding: ${({ theme: c }) => {
    var v, p, m;
    return (
      `${(v = c == null ? void 0 : c.spacing) == null ? void 0 : v.s150} ${
        (p = c == null ? void 0 : c.spacing) == null ? void 0 : p.s200
      }` || `${(m = k.spacing) == null ? void 0 : m.s150} ${k.spacing.s200}`
    );
  }}; ;
`;
var CE = styled_components_browser_esm_default.th`
  background-color: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.surface) ==
        null
          ? void 0
          : p.dark) == null
        ? void 0
        : m.clear) || k.color.surface.dark.clear
    );
  }};
  width: 80px;
  padding: ${({ theme: c }) => {
    var v, p;
    return (
      `${(v = c == null ? void 0 : c.spacing) == null ? void 0 : v.s150} ${
        (p = c == null ? void 0 : c.spacing) == null ? void 0 : p.s0
      }` || `${k.spacing.s150} ${k.spacing.s0}`
    );
  }};
`;
var M1 = styled_components_browser_esm_default.td`
  padding: ${({ theme: c }) => {
    var v, p;
    return (
      `${(v = c == null ? void 0 : c.spacing) == null ? void 0 : v.s0} ${
        (p = c == null ? void 0 : c.spacing) == null ? void 0 : p.s200
      }` || `${k.spacing.s0} ${k.spacing.s200}`
    );
  }};
  text-align: center;
`;
function TD(c) {
  const v = Object.values(c).lastIndexOf(true);
  return v !== -1 ? v : 0;
}
function RD(c, v) {
  const p = v - 1;
  return c.filter((m) => m.priority <= p);
}
function kD(c, v, p) {
  const m = v[TD(p)].totalColumns;
  return m >= c.length ? c : RD(c, m);
}
function DD(c, v) {
  return v
    ? w.jsx(CE, {
        children: w.jsx(pt, {
          type: "label",
          size: "medium",
          textAlign: "center",
          appearance: "dark",
          children: "Open",
        }),
      })
    : c.map((p) =>
        w.jsx(
          CE,
          {
            children: w.jsx(pt, {
              type: "label",
              size: "medium",
              textAlign: "center",
              appearance: "dark",
              children: p.actionName,
            }),
          },
          `action-${p.id}`
        )
      );
}
function ND(c, v, p, m) {
  return p
    ? w.jsx(M1, { children: w.jsx(xD, { content: m }) })
    : w.jsx(w.Fragment, {
        children: c.map((b) =>
          w.jsx(M1, { children: b.content(v) }, `${v.id}-${b.id}`)
        ),
      });
}
var _D = (c) => {
  const { titles: v, actions: p, entries: m, breakpoints: b, content: R } = c,
    S = Bp("(max-width: 850px)"),
    O = (0, import_react.useMemo)(() => b.map((Y) => Y.breakpoint), [b]),
    j = HE(O),
    L = (0, import_react.useMemo)(() => kD(v, b, j), [v, b, j]);
  return w.jsxs(CD, {
    children: [
      w.jsx(ED, {
        children: w.jsxs(xE, {
          children: [
            L.map((Y) =>
              w.jsx(
                wD,
                {
                  "aria-label": Y.titleName,
                  children: w.jsx(pt, {
                    type: "label",
                    size: "medium",
                    appearance: "dark",
                    children: Y.titleName,
                  }),
                },
                `title-${Y.id}`
              )
            ),
            DD(p, S),
          ],
        }),
      }),
      w.jsx(bD, {
        children: m.map((Y) =>
          w.jsxs(
            xE,
            {
              "aria-labelledby": `entry-${Y.id}`,
              children: [
                L.map((U) =>
                  w.jsx(
                    M1,
                    {
                      children: w.jsx(pt, {
                        type: "body",
                        size: "small",
                        appearance: "dark",
                        children: Y[U.id],
                      }),
                    },
                    `e-${Y[U.id]}`
                  )
                ),
                ND(p, Y, S, R),
              ],
            },
            `entry-${Y.id}`
          )
        ),
      }),
    ],
  });
};
var k_ = (c) => {
  const {
      id: v,
      titles: p,
      actions: m,
      entries: b,
      filter: R = "",
      pageLength: S = 10,
      breakpoints: O,
      content: j,
      infoTitle: L,
    } = c,
    Y = (0, import_react.useMemo)(() => {
      const Fe = p.map((Ie) => Ie.id);
      return b.filter((Ie) => {
        for (const $e in Ie)
          if (
            Fe.includes($e) &&
            Ie[$e].toString().toLowerCase().includes(R.toLowerCase())
          )
            return true;
        return false;
      });
    }, [b, R, p]),
    [U, W] = (0, import_react.useState)(1),
    X = Math.ceil(Y.length / S),
    le = (U - 1) * S,
    Ce = Math.min(le + S, Y.length);
  function Pe() {
    return Y.slice(le, Ce);
  }
  function ct() {
    W(1);
  }
  function Ue() {
    W(X);
  }
  function Ne() {
    U !== X && W(U + 1);
  }
  function et() {
    U > 1 && W(U - 1);
  }
  return w.jsx("div", {
    id: v,
    children: w.jsxs(Ke, {
      direction: "column",
      children: [
        w.jsx(_D, {
          titles: p,
          actions: m,
          entries: Pe(),
          breakpoints: O,
          content: j,
          infoTitle: L,
        }),
        Y.length > S &&
          w.jsx(vD, {
            firstEntryInPage: le,
            lastEntryInPage: Ce,
            totalRecords: Y.length,
            handleStartPage: ct,
            handlePrevPage: et,
            handleNextPage: Ne,
            handleEndPage: Ue,
          }),
      ],
    }),
  });
};
var zD = styled_components_browser_esm_default.div`
  display: inline-block;
  padding: 0 ${k.spacing.s050};
  background-color: ${({ theme: c, appearance: v }) => {
    var p, m, b;
    return (
      ((b =
        (m = (p = c == null ? void 0 : c.color) == null ? void 0 : p.surface) ==
        null
          ? void 0
          : m[v]) == null
        ? void 0
        : b.regular) || k.color.surface[v].regular
    );
  }};

  border-radius: 4px;
`;
var MD = ["warning", "gray", "light"];
var D_ = (c) => {
  const { appearance: v, label: p } = c;
  return w.jsx(zD, {
    appearance: v,
    children: w.jsx(pt, {
      type: "label",
      appearance: MD.includes(v) ? "dark" : "light",
      size: "small",
      children: p,
    }),
  });
};
var LD = (c) => {
  const { userName: v, client: p, size: m = "large" } = c;
  return w.jsxs(Ke, {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: z1.s200,
    children: [
      m === "large" &&
        w.jsxs(Ke, {
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: z1.s050,
          children: [
            w.jsx(pt, {
              as: "span",
              appearance: "dark",
              type: "label",
              size: "medium",
              children: v,
            }),
            p &&
              w.jsx(pt, {
                as: "span",
                appearance: "gray",
                type: "body",
                size: "small",
                children: p,
              }),
          ],
        }),
      w.jsx(fD, {}),
    ],
  });
};
var OD = {
  large: {
    width: "40px",
    height: "40px",
  },
  medium: {
    width: "32px",
    height: "32px",
  },
  small: {
    width: "24px",
    height: "24px",
  },
};
var jD = We`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
var AD = styled_components_browser_esm_default.div`
  display: inline-block;
  animation: 0.8s linear infinite ${jD};
  border: solid 4px;
  border-color: ${({ transparent: c, theme: v }) => {
    var p, m, b, R, S, O;
    return c === true
      ? ((b =
          (m =
            (p = v == null ? void 0 : v.color) == null ? void 0 : p.stroke) ==
          null
            ? void 0
            : m.spinner) == null
          ? void 0
          : b.transparent) || k.color.stroke.spinner.transparent
      : ((O =
          (S =
            (R = v == null ? void 0 : v.color) == null ? void 0 : R.stroke) ==
          null
            ? void 0
            : S.spinner) == null
          ? void 0
          : O.regular) || k.color.stroke.spinner.regular;
  }};
  border-bottom-color: ${({ appearance: c, theme: v }) => {
    var p, m, b, R, S, O;
    return (
      c &&
      (((b =
        (m = (p = v == null ? void 0 : v.color) == null ? void 0 : p.stroke) ==
        null
          ? void 0
          : m[c]) == null
        ? void 0
        : b.regular) ||
        ((O =
          (S =
            (R = k == null ? void 0 : k.color) == null ? void 0 : R.stroke) ==
          null
            ? void 0
            : S[c]) == null
          ? void 0
          : O.regular))
    );
  }};
  border-radius: 50%;
  ${(c) => c.size && OD[c.size]}
  box-sizing: border-box;
`;
var UD = (c) => {
  const {
    size: v = "medium",
    appearance: p = "primary",
    transparent: m = false,
  } = c;
  return w.jsx(AD, {
    appearance: p,
    size: v,
    transparent: m,
  });
};
var FD = {
  compact: {
    height: "28px",
  },
  wide: {
    height: "36px",
  },
};
var $D = styled_components_browser_esm_default.button`
  padding: ${k.spacing.s0} ${k.spacing.s200};
  transition: all 0.3s ease;
  border-radius: 8px;
  border: none;
  border-width: 1px;
  min-width: 100px;
  width: ${({ fullwidth: c }) => (c ? "100%" : "fit-content")};
  max-width: ${({ fullwidth: c }) => (c ? "none" : "300px")};
  ${(c) => FD[c.spacing]};
  border-style: ${(c) => (c.variant === "outlined" ? "solid" : "none")};

  background-color: ${({
    theme: c,
    appearance: v,
    variant: p,
    disabled: m,
    parentHover: b,
  }) => {
    var R, S, O, j, L, Y, U, W, X;
    return p === "filled"
      ? m
        ? ((O =
            (S =
              (R = c == null ? void 0 : c.color) == null
                ? void 0
                : R.surface) == null
              ? void 0
              : S[v]) == null
            ? void 0
            : O.disabled) || k.color.surface[v].disabled
        : b
        ? ((Y =
            (L =
              (j = c == null ? void 0 : c.color) == null
                ? void 0
                : j.surface) == null
              ? void 0
              : L[v]) == null
            ? void 0
            : Y.hover) || k.color.surface[v].hover
        : ((X =
            (W =
              (U = c == null ? void 0 : c.color) == null
                ? void 0
                : U.surface) == null
              ? void 0
              : W[v]) == null
            ? void 0
            : X.regular) || k.color.surface[v].regular
      : "transparent";
  }};

  border-color: ${({
    theme: c,
    appearance: v,
    variant: p,
    disabled: m,
    parentHover: b,
  }) => {
    var R, S, O, j, L, Y, U, W, X;
    return m
      ? p !== "outlined"
        ? "transparent"
        : ((O =
            (S =
              (R = c == null ? void 0 : c.color) == null ? void 0 : R.stroke) ==
            null
              ? void 0
              : S[v]) == null
            ? void 0
            : O.disabled) || k.color.stroke[v].disabled
      : b && p !== "none"
      ? ((Y =
          (L =
            (j = c == null ? void 0 : c.color) == null ? void 0 : j.stroke) ==
          null
            ? void 0
            : L[v]) == null
          ? void 0
          : Y.hover) || k.color.stroke[v].hover
      : p === "none"
      ? "transparent"
      : ((X =
          (W =
            (U = c == null ? void 0 : c.color) == null ? void 0 : U.stroke) ==
          null
            ? void 0
            : W[v]) == null
          ? void 0
          : X.regular) || k.color.stroke[v].regular;
  }};

  cursor: ${({ disabled: c, loading: v }) =>
    c ? "not-allowed" : v.toString() === "true" ? "progress" : "pointer"};

  &:hover {
    border-color: ${({
      theme: c,
      appearance: v,
      variant: p,
      disabled: m,
      cursorHover: b,
    }) => {
      var R, S, O;
      if (!m && b)
        return p === "none"
          ? "transparent"
          : ((O =
              (S =
                (R = c == null ? void 0 : c.color) == null
                  ? void 0
                  : R.stroke) == null
                ? void 0
                : S[v]) == null
              ? void 0
              : O.hover) || k.color.stroke[v].hover;
    }};

    background-color: ${({
      theme: c,
      appearance: v,
      variant: p,
      disabled: m,
      cursorHover: b,
    }) => {
      var R, S, O;
      if (!m && b && p === "filled")
        return (
          ((O =
            (S =
              (R = c == null ? void 0 : c.color) == null
                ? void 0
                : R.surface) == null
              ? void 0
              : S[v]) == null
            ? void 0
            : O.hover) || k.color.surface[v].hover
        );
      if (!m && b && p === "none") return "transparent";
    }};
  }
`;
var HD = styled_components_browser_esm_default(Link)`
  text-decoration: none;
`;
function Bg(c, v) {
  return c === "filled"
    ? v === "warning" || v === "light" || v === "gray"
      ? "dark"
      : "light"
    : v;
}
var EE = (c) => {
  const {
    children: v,
    appearance: p = "primary",
    loading: m = false,
    disabled: b = false,
    iconBefore: R,
    iconAfter: S,
    type: O = "button",
    spacing: j = "wide",
    variant: L = "filled",
    fullwidth: Y = false,
    onClick: U,
    cursorHover: W = false,
    parentHover: X = false,
  } = c;
  return w.jsx($D, {
    appearance: p,
    loading: m.toString(),
    disabled: b,
    iconBefore: R,
    iconAfter: S,
    type: O,
    spacing: j,
    variant: L,
    fullwidth: Y,
    onClick: b ? null : U,
    cursorHover: W,
    parentHover: X,
    children:
      m && !b
        ? w.jsx(UD, {
            appearance: Bg(L, p),
            transparent: L === "filled",
            size: "small",
          })
        : w.jsxs(Ke, {
            alignItems: "center",
            justifyContent: "center",
            children: [
              R &&
                w.jsx(en, {
                  icon: R,
                  spacing: "none",
                  size: "18px",
                  appearance: Bg(L, p),
                  disabled: b,
                  cursorHover: W,
                  parentHover: X,
                }),
              w.jsx(pt, {
                type: "label",
                size: "large",
                appearance: Bg(L, p),
                disabled: b,
                ellipsis: true,
                cursorHover: W,
                parentHover: X,
                children: v,
              }),
              S &&
                w.jsx(en, {
                  icon: S,
                  spacing: "none",
                  size: "18px",
                  appearance: Bg(L, p),
                  disabled: b,
                  cursorHover: W,
                  parentHover: X,
                }),
            ],
          }),
  });
};
var bE = (c) => {
  const { type: v = "button", path: p } = c;
  return (
    v === "link" &&
      !p &&
      console.warn("You must provide a path to use a link button"),
    v === "link"
      ? w.jsx(HD, { to: p, children: w.jsx(EE, { ...c }) })
      : w.jsx(EE, { ...c })
  );
};
var BD = styled_components_browser_esm_default.div`
  display: grid;
  grid-template-columns: ${({ templateColumns: c }) => c};
  grid-template-rows: ${({ templateRows: c }) => c};
  gap: ${({ gap: c }) =>
    c
      .split(" ")
      .map((p) => {
        var m;
        return (m = k == null ? void 0 : k.spacing) == null ? void 0 : m[p];
      })
      .join(" ")};
  justify-items: ${({ justifyItems: c }) => c};
  align-items: ${({ alignItems: c }) => c};
  justify-content: ${({ justifyContent: c }) => c};
  align-content: ${({ alignContent: c }) => c};
  grid-auto-columns: ${({ autoColumns: c }) => c};
  grid-auto-rows: ${({ autoRows: c }) => c};
  grid-auto-flow: ${({ autoFlow: c }) => c};
  margin: ${({ margin: c }) =>
    c
      .split(" ")
      .map((p) => {
        var m;
        return (m = k == null ? void 0 : k.spacing) == null ? void 0 : m[p];
      })
      .join(" ")};
  padding: ${({ padding: c }) =>
    c
      .split(" ")
      .map((p) => {
        var m;
        return (m = k == null ? void 0 : k.spacing) == null ? void 0 : m[p];
      })
      .join(" ")};
  height: ${({ height: c }) => c};
  width: ${({ width: c }) => c};
`;
var Yg = (c) => {
  const {
    templateColumns: v = "auto",
    templateRows: p = "auto",
    gap: m = "s0",
    justifyItems: b = "stretch",
    alignItems: R = "stretch",
    justifyContent: S = "start",
    alignContent: O = "start",
    autoColumns: j = "0px",
    autoRows: L = "0px",
    autoFlow: Y = "row",
    margin: U = "s0",
    padding: W = "s0",
    height: X = "auto",
    width: le = "auto",
    children: Ce,
  } = c;
  return w.jsx(BD, {
    templateColumns: v,
    templateRows: p,
    gap: m,
    justifyItems: b,
    alignItems: R,
    justifyContent: S,
    alignContent: O,
    autoColumns: j,
    autoRows: L,
    autoFlow: Y,
    margin: U,
    padding: W,
    height: X,
    width: le,
    children: Ce,
  });
};
var VD = styled_components_browser_esm_default.div`
  border-radius: 10px;
  transition: width 0.5s;
  height: 16px;
  width: 100%;
  background-color: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.surface) ==
        null
          ? void 0
          : p.dark) == null
        ? void 0
        : m.clear) || k.color.surface.dark.clear
    );
  }};
`;
var PD = styled_components_browser_esm_default.div`
  border-radius: 8px;
  transition: width 0.5s;
  height: 16px;
  width: ${({ arrayLength: c, currentStep: v }) => `${(v / c) * 100}%`};
  background: ${({ theme: c }) => {
    var v, p, m, b;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.surface) ==
        null
          ? void 0
          : p.primary) == null
        ? void 0
        : m.regular) ||
      ((b = k.color.surface.primary) == null ? void 0 : b.regular)
    );
  }};
`;
var YD = styled_components_browser_esm_default.div`
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
  align-items: center;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  margin-bottom: ${k.spacing.s100};
  border-color: ${({ theme: c }) => {
    var v, p, m, b;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.stroke) ==
        null
          ? void 0
          : p.primary) == null
        ? void 0
        : m.regular) ||
      ((b = k.color.stroke.primary) == null ? void 0 : b.regular)
    );
  }};
`;
var ID = (c) => {
  const { currentStep: v, arrayLength: p } = c;
  return w.jsx(VD, {
    children: w.jsx(PD, {
      currentStep: v,
      arrayLength: p,
    }),
  });
};
var N_ = (c) => {
  const {
      steps: v,
      currentStepId: p,
      handlePrev: m,
      handleNext: b,
      titleButtonText: { before: R, after: S, finish: O } = {
        before: "Prev",
        after: "Next",
        finish: "Send",
      },
    } = c,
    j = Bp("(min-width: 600px)"),
    L = v.find((U) => (U == null ? void 0 : U.id) === p),
    Y = v.findIndex((U) => (U == null ? void 0 : U.id) === p);
  return w.jsxs(Yg, {
    templateColumns: j ? "auto 1fr auto" : "1fr",
    children: [
      j &&
        w.jsx(Ke, {
          alignItems: "center",
          children: w.jsx(bE, {
            spacing: "wide",
            variant: "none",
            iconBefore: w.jsx(mE, {}),
            onClick: () => m(L == null ? void 0 : L.id),
            appearance: "primary",
            disabled: Y === 0,
            children: R,
          }),
        }),
      w.jsxs(Ke, {
        direction: "column",
        margin: "s0 s0 s075 s0",
        children: [
          w.jsxs(Yg, {
            templateColumns: "auto auto 1fr auto",
            gap: "s100",
            children: [
              !j &&
                w.jsx(en, {
                  appearance: "primary",
                  icon: w.jsx(mE, { style: { padding: "2px 0px" } }),
                  size: "20px",
                  onClick: () => m(L == null ? void 0 : L.id),
                  disabled: Y === 0,
                }),
              w.jsx(YD, {
                children:
                  p !== v.length
                    ? w.jsx(pt, {
                        type: "label",
                        size: "medium",
                        appearance: "primary",
                        children: p,
                      })
                    : w.jsx(en, {
                        appearance: "primary",
                        icon: w.jsx(Gg, {}),
                        size: "20px",
                        spacing: "compact",
                      }),
              }),
              w.jsx(pt, {
                type: "title",
                size: j ? "medium" : "small",
                ellipsis: true,
                children: L == null ? void 0 : L.label,
              }),
              !j &&
                w.jsx(en, {
                  appearance: "primary",
                  icon: w.jsx(SE, { style: { padding: "0px 2px" } }),
                  size: "20px",
                  onClick: () => b(L == null ? void 0 : L.id),
                }),
            ],
          }),
          w.jsxs(Ke, {
            alignItems: "center",
            gap: k.spacing.s100,
            children: [
              w.jsx(ID, {
                currentStep: Y + 1,
                arrayLength: v.length,
              }),
              j &&
                w.jsxs(pt, { type: "label", children: [Y + 1, "/", v.length] }),
            ],
          }),
          w.jsx(pt, {
            type: "label",
            appearance: "gray",
            size: "medium",
            margin: "12px 0px 0px 0px",
            children: L == null ? void 0 : L.description,
          }),
        ],
      }),
      j &&
        w.jsx(Ke, {
          alignItems: "center",
          children: w.jsx(bE, {
            spacing: "wide",
            variant: "none",
            iconAfter: w.jsx(SE, {}),
            onClick: () => b(L == null ? void 0 : L.id),
            children: (L == null ? void 0 : L.id) === v.length ? O : S,
          }),
        }),
    ],
  });
};
var QD = We`
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`;
var GD = styled_components_browser_esm_default.div`
  width: 100%;
  height: ${(c) => c.height};
  transform-origin: left;
  animation: ${QD}
    ${(c) => c.duration}ms linear;
  background-color: ${({ theme: c, appearance: v }) => {
    var p, m, b;
    return (
      ((b =
        (m = (p = c == null ? void 0 : c.color) == null ? void 0 : p.stroke) ==
        null
          ? void 0
          : m[v]) == null
        ? void 0
        : b.regular) || k.color.stroke[v].regular
    );
  }};
  animation-fill-mode: forwards;
  animation-play-state: ${(c) => (c.paused ? "paused" : "running")};
`;
var WD = ({
  height: c = "4px",
  appearance: v = "primary",
  duration: p = 3e3,
  paused: m = false,
  onCountdown: b,
}) =>
  w.jsx(GD, {
    id: "progress-bar",
    appearance: v,
    height: c,
    duration: p,
    paused: m,
    onAnimationEnd: b,
  });
var XD = styled_components_browser_esm_default.div`
  background-color: ${({ theme: c, appearance: v }) => {
    var p, m, b;
    return (
      ((b =
        (m = (p = c == null ? void 0 : c.color) == null ? void 0 : p.surface) ==
        null
          ? void 0
          : m[v]) == null
        ? void 0
        : b.clear) || k.color.surface[v].clear
    );
  }};
  width: ${(c) => (c.isMessageResponsive ? "auto" : "400px")};
  height: auto;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  overflow-wrap: anywhere;
`;
var __ = (c) => {
  const {
      icon: v,
      title: p,
      description: m,
      appearance: b = "primary",
      duration: R,
      closeSectionMessage: S,
    } = c,
    [O, j] = (0, import_react.useState)(false),
    L = Bp("(max-width: 565px)"),
    Y = m.substring(0, 240);
  return w.jsxs(XD, {
    appearance: b,
    onMouseEnter: () => j(true),
    onMouseLeave: () => j(false),
    isMessageResponsive: L,
    children: [
      w.jsxs(Ke, {
        justifyContent: "space-between",
        padding: "s200",
        children: [
          w.jsx(Ke, {
            gap: "16px",
            alignItems: L ? "center" : void 0,
            children: w.jsxs(Ke, {
              alignItems: "center",
              gap: "16px",
              children: [
                w.jsx(en, {
                  size: "24px",
                  spacing: "wide",
                  appearance: b,
                  icon: v,
                }),
                w.jsxs(Ke, {
                  direction: "column",
                  gap: "6px",
                  children: [
                    w.jsx(pt, { size: "large", children: p }),
                    !L &&
                      w.jsx(pt, {
                        size: "small",
                        appearance: "gray",
                        children: Y,
                      }),
                  ],
                }),
              ],
            }),
          }),
          w.jsx(Ke, {
            alignItems: L ? "center" : void 0,
            children: w.jsx(en, {
              size: "16px",
              onClick: S,
              appearance: b,
              icon: w.jsx(B2, {}),
            }),
          }),
        ],
      }),
      R &&
        w.jsx(WD, {
          paused: O,
          appearance: b,
          duration: R,
          onCountdown: S,
        }),
    ],
  });
};
var qD = We`
0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;
var KD = styled_components_browser_esm_default.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  width: ${({ size: c }) => c};
  height: ${({ size: c }) => c};
  background: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.surface) ==
        null
          ? void 0
          : p.dark) == null
        ? void 0
        : m.clear) || k.color.surface.dark.clear
    );
  }};

  ${({ animated: c }) =>
    c &&
    Ae`
      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background: ${({ theme: v }) => {
          var p, m, b, R, S, O, j, L, Y;
          return `linear-gradient(
      100deg,
      ${
        ((b =
          (m =
            (p = v == null ? void 0 : v.color) == null ? void 0 : p.surface) ==
          null
            ? void 0
            : m.dark) == null
          ? void 0
          : b.clear) || k.color.surface.dark.clear
      } 20%,
      ${
        ((O =
          (S =
            (R = v == null ? void 0 : v.color) == null ? void 0 : R.surface) ==
          null
            ? void 0
            : S.gray) == null
          ? void 0
          : O.clear) || k.color.surface.gray.clear
      } 50%,
      ${
        ((Y =
          (L =
            (j = v == null ? void 0 : v.color) == null ? void 0 : j.surface) ==
          null
            ? void 0
            : L.dark) == null
          ? void 0
          : Y.clear) || k.color.surface.dark.clear
      } 80%
    );`;
        }};
        animation: ${({ animated: v }) => v && qD}
          2s linear infinite;
      }
    `}
`;
var z_ = (c) => {
  const { size: v = "24px", animated: p = false } = c;
  return w.jsx(KD, { size: v, animated: p });
};
var ZD = We`
0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;
var JD = styled_components_browser_esm_default.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  height: 16px;
  width: ${({ width: c }) => c};
  background: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.surface) ==
        null
          ? void 0
          : p.dark) == null
        ? void 0
        : m.clear) || k.color.surface.dark.clear
    );
  }};

  ${({ animated: c }) =>
    c &&
    Ae`
      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background: ${({ theme: v }) => {
          var p, m, b, R, S, O, j, L, Y;
          return `linear-gradient(
      100deg,
      ${
        ((b =
          (m =
            (p = v == null ? void 0 : v.color) == null ? void 0 : p.surface) ==
          null
            ? void 0
            : m.dark) == null
          ? void 0
          : b.clear) || k.color.surface.dark.clear
      } 20%,
      ${
        ((O =
          (S =
            (R = v == null ? void 0 : v.color) == null ? void 0 : R.surface) ==
          null
            ? void 0
            : S.gray) == null
          ? void 0
          : O.clear) || k.color.surface.gray.clear
      } 50%,
      ${
        ((Y =
          (L =
            (j = v == null ? void 0 : v.color) == null ? void 0 : j.surface) ==
          null
            ? void 0
            : L.dark) == null
          ? void 0
          : Y.clear) || k.color.surface.dark.clear
      } 80%
    );`;
        }};
        animation: ${({ animated: v }) => v && ZD}
          2s linear infinite;
      }
    `}
`;
var M_ = (c) => {
  const { width: v = "100%", animated: p = false } = c;
  return w.jsx(JD, { width: v, animated: p });
};
var eN = styled_components_browser_esm_default.label`
  font-family: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p =
          (v = c == null ? void 0 : c.typography) == null ? void 0 : v.label) ==
        null
          ? void 0
          : p.large) == null
        ? void 0
        : m.font) || k.typography.label.large.font
    );
  }};
  font-size: ${({ size: c, theme: v }) => {
    var p, m, b;
    return (
      c &&
      (((b =
        (m =
          (p = v == null ? void 0 : v.typography) == null ? void 0 : p.label) ==
        null
          ? void 0
          : m[c]) == null
        ? void 0
        : b.size) ||
        k.typography.label[c].size)
    );
  }};
  font-weight: ${({ size: c, theme: v }) => {
    var p, m, b;
    return (
      c &&
      (((b =
        (m =
          (p = v == null ? void 0 : v.typography) == null ? void 0 : p.label) ==
        null
          ? void 0
          : m[c]) == null
        ? void 0
        : b.weight) ||
        k.typography.label[c].weight)
    );
  }};
  letter-spacing: ${({ size: c, theme: v }) => {
    var p, m, b;
    return (
      c &&
      (((b =
        (m =
          (p = v == null ? void 0 : v.typography) == null ? void 0 : p.label) ==
        null
          ? void 0
          : m[c]) == null
        ? void 0
        : b.tracking) ||
        k.typography.label[c].tracking)
    );
  }};
  line-height: ${({ size: c, theme: v }) => {
    var p, m, b;
    return (
      c &&
      (((b =
        (m =
          (p = v == null ? void 0 : v.typography) == null ? void 0 : p.label) ==
        null
          ? void 0
          : m[c]) == null
        ? void 0
        : b.lineHeight) ||
        k.typography.label[c].lineHeight)
    );
  }};
  margin: ${({ margin: c }) => c};
  padding: ${({ padding: c }) => c};
  color: ${({ theme: c, disabled: v, focused: p, invalid: m }) => {
    var b, R, S, O, j, L, Y, U, W, X, le, Ce;
    return v
      ? ((S =
          (R = (b = c == null ? void 0 : c.color) == null ? void 0 : b.text) ==
          null
            ? void 0
            : R.dark) == null
          ? void 0
          : S.disabled) || k.color.text.dark.disabled
      : m
      ? ((L =
          (j = (O = c == null ? void 0 : c.color) == null ? void 0 : O.text) ==
          null
            ? void 0
            : j.error) == null
          ? void 0
          : L.regular) || k.color.text.error.regular
      : p
      ? ((W =
          (U = (Y = c == null ? void 0 : c.color) == null ? void 0 : Y.text) ==
          null
            ? void 0
            : U.primary) == null
          ? void 0
          : W.hover) || k.color.text.primary.hover
      : ((Ce =
          (le = (X = c == null ? void 0 : c.color) == null ? void 0 : X.text) ==
          null
            ? void 0
            : le.dark) == null
          ? void 0
          : Ce.regular) || k.color.text.dark.regular;
  }};
`;
var Wg = (c) => {
  const {
    disabled: v = false,
    focused: p = false,
    htmlFor: m,
    invalid: b = false,
    margin: R = "0px",
    padding: S = "0px",
    size: O = "large",
    children: j,
  } = c;
  return w.jsx(eN, {
    disabled: v,
    focused: p,
    htmlFor: m,
    invalid: b,
    margin: R,
    padding: S,
    size: O,
    children: j,
  });
};
var tN = styled_components_browser_esm_default.ul`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  padding: 4px 0px;
  position: absolute;
  z-index: 1;
  border-radius: 4px;
  background: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.surface) ==
        null
          ? void 0
          : p.light) == null
        ? void 0
        : m.clear) || k.color.surface.light.clear
    );
  }};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px rgba(0, 0, 0, 0.15);
`;
var BE = (c) => {
  const { children: v, onClick: p } = c;
  return w.jsx(tN, { onClick: p, children: v });
};
var nN = {
  compact: {
    height: "40px",
  },
  wide: {
    height: "48px",
  },
};
var rN = styled_components_browser_esm_default.div`
  position: relative;
  cursor: ${({ disabled: c }) => c && "not-allowed"};
  width: ${({ fullwidth: c }) => (c ? "100%" : "300px")};

  & > label {
    cursor: ${({ disabled: c }) => c && "not-allowed"};
  }
`;
var aN = styled_components_browser_esm_default.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  background-color: ${({ theme: c, readonly: v }) => {
    var p, m, b;
    return (
      v &&
      (((b =
        (m = (p = c == null ? void 0 : c.color) == null ? void 0 : p.surface) ==
        null
          ? void 0
          : m.light) == null
        ? void 0
        : b.clear) ||
        k.color.surface.light.clear)
    );
  }};
  border-color: ${({
    theme: c,
    disabled: v,
    readonly: p,
    status: m,
    focused: b,
  }) => {
    var R, S, O, j, L, Y, U, W, X, le, Ce, Pe;
    return v
      ? (((O =
          (S = (R = c == null ? void 0 : c.color) == null ? void 0 : R.text) ==
          null
            ? void 0
            : S.dark) == null
          ? void 0
          : O.disabled) || k.color.text.dark.disabled) +
          "; pointer-events: none; opacity: 0.5;"
      : b && !p
      ? ((Y =
          (L = (j = c == null ? void 0 : c.color) == null ? void 0 : j.text) ==
          null
            ? void 0
            : L.primary) == null
          ? void 0
          : Y.hover) || k.color.text.primary.hover
      : m === "invalid" && !p
      ? ((X =
          (W = (U = c == null ? void 0 : c.color) == null ? void 0 : U.text) ==
          null
            ? void 0
            : W.error) == null
          ? void 0
          : X.regular) || k.color.text.error.regular
      : ((Pe =
          (Ce =
            (le = c == null ? void 0 : c.color) == null ? void 0 : le.stroke) ==
          null
            ? void 0
            : Ce.divider) == null
          ? void 0
          : Pe.regular) || k.color.stroke.divider.regular;
  }};

  opacity: ${({ disabled: c }) => (c ? "0.5" : "none")};
  cursor: ${({ disabled: c }) => (c ? "not-allowed" : "pointer")};
`;
var iN = styled_components_browser_esm_default.input`
  outline: none;
  border-radius: 8px;
  padding: 0px 12px 0px 16px;
  border-width: none;
  border-style: none;
  border-color: none;
  font-family: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p =
          (v = c == null ? void 0 : c.typography) == null ? void 0 : v.body) ==
        null
          ? void 0
          : p.large) == null
        ? void 0
        : m.font) || k.typography.body.large.font
    );
  }};
  font-size: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p =
          (v = c == null ? void 0 : c.typography) == null ? void 0 : v.body) ==
        null
          ? void 0
          : p.large) == null
        ? void 0
        : m.font) || k.typography.body.large.size
    );
  }};
  font-weight: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p =
          (v = c == null ? void 0 : c.typography) == null ? void 0 : v.body) ==
        null
          ? void 0
          : p.large) == null
        ? void 0
        : m.font) || k.typography.body.large.weight
    );
  }};
  line-height: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p =
          (v = c == null ? void 0 : c.typography) == null ? void 0 : v.body) ==
        null
          ? void 0
          : p.large) == null
        ? void 0
        : m.font) || k.typography.body.large.lineHeight
    );
  }};
  letter-spacing: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p =
          (v = c == null ? void 0 : c.typography) == null ? void 0 : v.body) ==
        null
          ? void 0
          : p.large) == null
        ? void 0
        : m.font) || k.typography.body.large.tracking
    );
  }};
  color: ${({ theme: c, disabled: v }) => {
    var p, m, b, R, S, O;
    return v
      ? ((b =
          (m = (p = c == null ? void 0 : c.color) == null ? void 0 : p.text) ==
          null
            ? void 0
            : m.dark) == null
          ? void 0
          : b.disabled) || k.color.text.dark.disabled
      : ((O =
          (S = (R = c == null ? void 0 : c.color) == null ? void 0 : R.text) ==
          null
            ? void 0
            : S.dark) == null
          ? void 0
          : O.regular) || k.color.text.dark.regular;
  }};
  background-color: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.surface) ==
        null
          ? void 0
          : p.light) == null
        ? void 0
        : m.clear) || k.color.surface.light.clear
    );
  }};
  cursor: ${({ disabled: c }) => (c ? "not-allowed" : "pointer")};

  ${({ size: c }) => nN[c]};

  ::placeholder {
    color: ${({ theme: c }) => {
      var v, p, m;
      return (
        ((m =
          (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.text) ==
          null
            ? void 0
            : p.dark) == null
          ? void 0
          : m.disabled) || k.color.text.dark.disabled
      );
    }};
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-moz-search-cancel-button {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }
`;
var lN = styled_components_browser_esm_default.li`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: ${k.spacing.s500};
  border-left: ${k.spacing.s050} solid transparent;
  padding: ${() =>
    `${k.spacing.s050} ${k.spacing.s200} ${k.spacing.s050} ${k.spacing.s150}`};
  cursor: pointer;

  border-left-width: ${k.spacing.s050};
  border-left-style: solid;
  border-left-color: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.stroke) ==
        null
          ? void 0
          : p.light) == null
        ? void 0
        : m.regular) || k.color.stroke.light.regular
    );
  }};

  p {
    color: ${({ theme: c }) => {
      var v, p, m;
      return (
        ((m =
          (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.text) ==
          null
            ? void 0
            : p.dark) == null
          ? void 0
          : m.regular) || k.color.text.dark.regular
      );
    }};
  }

  &:hover {
    border-left-color: ${({ theme: c }) => {
      var v, p, m;
      return (
        ((m =
          (p =
            (v = c == null ? void 0 : c.color) == null ? void 0 : v.stroke) ==
          null
            ? void 0
            : p.primary) == null
          ? void 0
          : m.regular) || k.color.stroke.primary.regular
      );
    }};

    background-color: ${({ theme: c }) => {
      var v, p, m;
      return (
        ((m =
          (p =
            (v = c == null ? void 0 : c.color) == null ? void 0 : v.surface) ==
          null
            ? void 0
            : p.gray) == null
          ? void 0
          : m.hover) || k.color.surface.gray.hover
      );
    }};

    p {
      color: ${({ theme: c }) => {
        var v, p, m;
        return (
          ((m =
            (p =
              (v = c == null ? void 0 : c.color) == null ? void 0 : v.text) ==
            null
              ? void 0
              : p.primary) == null
            ? void 0
            : m.regular) || k.color.text.primary.regular
        );
      }};
    }
  }
`;
var VE = (c) => {
  const { id: v, label: p } = c;
  return w.jsx(lN, {
    id: v,
    children: w.jsx(pt, { size: "medium", children: p }),
  });
};
var oN = (c) => (c === "compact" ? "medium" : "large");
var uN = (c) => {
  const { disabled: v, status: p, message: m } = c;
  return p !== "pending"
    ? w.jsxs(Ke, {
        alignItems: "center",
        gap: "4px",
        margin: "s050 s0 s0 s200",
        children: [
          w.jsx(en, {
            appearance: p === "invalid" ? "error" : "success",
            disabled: v,
            icon: p === "invalid" ? w.jsx(FE, {}) : w.jsx(Gg, {}),
            size: "14px",
          }),
          w.jsx(pt, {
            type: "body",
            size: "small",
            appearance: p === "invalid" ? "error" : "success",
            disabled: v,
            children: m && `${m}`,
          }),
        ],
      })
    : w.jsx(w.Fragment, {});
};
var sN = (0, import_react.forwardRef)((c, v) => {
  const {
    label: p,
    name: m,
    id: b,
    placeholder: R,
    disabled: S,
    readonly: O,
    required: j,
    status: L,
    message: Y,
    size: U,
    value: W,
    fullwidth: X,
    options: le,
    focused: Ce,
    onFocus: Pe,
    onBlur: ct,
    onClick: Ue,
    onChange: Ne,
    onOptionClick: et,
    displayList: Fe,
  } = c;
  return w.jsxs(rN, {
    fullwidth: X,
    disabled: S,
    ref: v,
    children: [
      w.jsxs(Ke, {
        alignItems: "center",
        margin: "s0 s0 s050 s0",
        padding: "s0 s0 s0 s200",
        gap: "2px",
        children: [
          p &&
            w.jsx(Wg, {
              htmlFor: b,
              disabled: S,
              focused: !O && Ce,
              invalid: L === "invalid" && !O,
              size: oN(U),
              margin: "0px 0px 0px 2px",
              children: p,
            }),
          j &&
            !S &&
            w.jsx(pt, {
              type: "body",
              size: "small",
              appearance: "dark",
              children: "(Requerido)",
            }),
        ],
      }),
      w.jsxs(aN, {
        disabled: S,
        focused: Ce,
        status: L,
        onClick: Ue,
        readonly: O,
        children: [
          w.jsx(iN, {
            autoComplete: "off",
            readOnly: true,
            value: W,
            name: m,
            id: b,
            placeholder: R,
            disabled: S,
            required: j,
            size: U,
            status: L,
            fullwidth: X,
            focused: Ce,
            onFocus: Pe,
            onBlur: ct,
            onChange: Ne,
            onClick: Ue,
          }),
          !O &&
            w.jsx(en, {
              appearance: "dark",
              icon: w.jsx($E, {}),
              size: "24px",
              spacing: "none",
              disabled: S,
            }),
        ],
      }),
      L && !O && w.jsx(uN, { disabled: S, status: L, message: Y }),
      Fe &&
        !S &&
        w.jsx(BE, {
          onClick: et,
          children: le.map((Ie) =>
            w.jsx(
              VE,
              {
                id: Ie.id,
                label: Ie.label,
              },
              Ie.id
            )
          ),
        }),
    ],
  });
});
var L_ = (c) => {
  const {
      label: v,
      name: p,
      id: m,
      placeholder: b,
      disabled: R = false,
      readonly: S = false,
      value: O,
      required: j = false,
      status: L = "pending",
      message: Y,
      size: U = "wide",
      fullwidth: W = false,
      options: X,
      onBlur: le,
      onFocus: Ce,
      onChange: Pe,
      onClick: ct,
    } = c,
    [Ue, Ne] = (0, import_react.useState)(false),
    [et, Fe] = (0, import_react.useState)(false),
    Ie = (0, import_react.useRef)(null),
    $e = (Dt) => {
      Ne(true), Ce && Ce(Dt);
    },
    dn = (Dt) => {
      Ne(false), le && le(Dt);
    },
    pn = (Dt) => {
      Ie.current && !Ie.current.contains(Dt.target) && Fe(false);
    };
  (0, import_react.useEffect)(
    () => (
      document.addEventListener("click", pn),
      () => {
        document.removeEventListener("click", pn);
      }
    ),
    [Ie]
  );
  const Bt = (Dt) => {
      Pe(Dt, p), Fe(false);
    },
    xt = (Dt) => {
      S || (ct && ct(Dt), Fe(!et));
    };
  return w.jsx(sN, {
    ref: Ie,
    label: v,
    name: p,
    id: m,
    placeholder: b,
    disabled: R,
    readonly: S,
    value: O,
    required: j,
    size: U,
    status: L,
    message: Y,
    fullwidth: W,
    focused: Ue,
    options: X,
    onFocus: $e,
    onBlur: dn,
    onChange: Pe,
    onClick: xt,
    displayList: et,
    onOptionClick: Bt,
  });
};
var cN = {
  large: {
    width: "40px",
    height: "20px",
  },
  small: {
    width: "32px",
    height: "16px",
  },
};
var fN = styled_components_browser_esm_default.span`
  position: absolute;
  top: ${k.spacing.s0};
  left: ${k.spacing.s0};
  right: ${k.spacing.s0};
  bottom: ${k.spacing.s0};
  transition: 0.1s;
  border-radius: 30px;
  cursor: ${(c) => (c.disabled ? "not-allowed" : "pointer")};
  background: ${({ disabled: c, theme: v }) => {
    var p, m, b, R, S, O;
    return c
      ? ((b =
          (m =
            (p = v == null ? void 0 : v.color) == null ? void 0 : p.surface) ==
          null
            ? void 0
            : m.gray) == null
          ? void 0
          : b.disabled) || k.color.surface.gray.disabled
      : ((O =
          (S =
            (R = v == null ? void 0 : v.color) == null ? void 0 : R.surface) ==
          null
            ? void 0
            : S.gray) == null
          ? void 0
          : O.regular) || k.color.surface.gray.regular;
  }};

  &:hover {
    background-color: ${({ disabled: c, theme: v }) => {
      var p, m, b, R, S, O;
      return c
        ? ((b =
            (m =
              (p = v == null ? void 0 : v.color) == null
                ? void 0
                : p.surface) == null
              ? void 0
              : m.gray) == null
            ? void 0
            : b.disabled) || k.color.surface.gray.disabled
        : ((O =
            (S =
              (R = v == null ? void 0 : v.color) == null
                ? void 0
                : R.surface) == null
              ? void 0
              : S.gray) == null
            ? void 0
            : O.hover) || k.color.surface.gray.hover;
    }};
  }

  &:before {
    position: absolute;
    content: "";
    left: ${k.spacing.s025};
    border-radius: 50%;
    transition: 0.3s;
    background-color: ${({ theme: c }) => {
      var v, p, m;
      return (
        ((m =
          (p =
            (v = c == null ? void 0 : c.color) == null ? void 0 : v.surface) ==
          null
            ? void 0
            : p.light) == null
          ? void 0
          : m.clear) || k.color.surface.light.clear
      );
    }};
    box-sizing: border-box;
    border: ${({ disabled: c, theme: v }) => {
      var p, m, b;
      return (
        c &&
        `0.5px solid ${
          ((b =
            (m =
              (p = v == null ? void 0 : v.color) == null ? void 0 : p.stroke) ==
            null
              ? void 0
              : m.light) == null
            ? void 0
            : b.disabled) || k.color.stroke.gray.disabled
        }`
      );
    }};
    ${(c) =>
      c.size === "small"
        ? Ae`
            width: 12px;
            height: 12px;
            bottom: calc((${k.spacing.s200} - ${k.spacing.s150}) / 2);
          `
        : Ae`
            width: 16px;
            height: 16px;
            bottom: calc((${k.spacing.s250} - ${k.spacing.s200}) / 2);
          `};
  }
`;
var dN = styled_components_browser_esm_default.label`
  position: relative;
  display: inline-block;
  ${(c) => c.size && cN[c.size]};
`;
var pN = styled_components_browser_esm_default.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ disabled: c, theme: v }) => {
      var p, m, b, R, S, O;
      return c
        ? ((b =
            (m =
              (p = v == null ? void 0 : v.color) == null
                ? void 0
                : p.surface) == null
              ? void 0
              : m.gray) == null
            ? void 0
            : b.disabled) || k.color.surface.gray.disabled
        : ((O =
            (S =
              (R = v == null ? void 0 : v.color) == null
                ? void 0
                : R.surface) == null
              ? void 0
              : S.success) == null
            ? void 0
            : O.regular) || k.color.surface.success.regular;
    }};

    &:hover {
      background-color: ${({ disabled: c, theme: v }) => {
        var p, m, b, R, S, O;
        return c
          ? ((b =
              (m =
                (p = v == null ? void 0 : v.color) == null
                  ? void 0
                  : p.surface) == null
                ? void 0
                : m.gray) == null
              ? void 0
              : b.disabled) || k.color.surface.gray.disabled
          : ((O =
              (S =
                (R = v == null ? void 0 : v.color) == null
                  ? void 0
                  : R.surface) == null
                ? void 0
                : S.success) == null
              ? void 0
              : O.hover) || k.color.surface.success.hover;
      }};
    }
  }

  &:checked + span:before {
    left: ${({ size: c }) =>
      c === "small" ? `-${k.spacing.s025}` : `${k.spacing.s025}`};
    ${(c) =>
      c === "small"
        ? "transform: translateX(16px);"
        : "transform: translateX(20px);"};
  }
`;
var wE = styled_components_browser_esm_default.div`
  & > #mdIcon {
    position: absolute;
    color: ${({ disabled: c }) =>
      c ? k.color.stroke.gray.disabled : k.color.surface.light.regular};
    ${(c) =>
      c.size === "small"
        ? Ae`
            width: 10px;
            height: 10px;
            padding-left ${k.spacing.s025};
            top: calc(${k.spacing.s075} / 2);
            left: ${(v) =>
              v.checked ? `calc(${k.spacing.s075} / 2)` : `${k.spacing.s200}`};
          `
        : Ae`
            width: 14px;
            height: 14px;
            top: calc(${k.spacing.s075} / 2);
            left: ${(v) =>
              v.checked ? `${k.spacing.s050}` : `${k.spacing.s250}`};
          `};
  }
`;
var O_ = (c) => {
  const {
    disabled: v = false,
    id: p,
    name: m,
    value: b,
    size: R = "small",
    checked: S = false,
    onChange: O,
    label: j,
    margin: L = "s0",
    padding: Y = "s0",
  } = c;
  return w.jsxs(Ke, {
    direction: "row",
    justifyContent: j ? "space-between" : "flex-start",
    alignItems: "center",
    gap: j ? "10px" : "0px",
    margin: L,
    padding: Y,
    children: [
      w.jsxs(dN, {
        size: R,
        children: [
          w.jsx(pN, {
            id: p,
            type: "checkbox",
            size: R,
            value: b,
            checked: S,
            onChange: O,
            disabled: v,
            name: m,
          }),
          w.jsx(fN, {
            size: R,
            disabled: v,
            checked: S,
            children: S
              ? w.jsx(wE, {
                  checked: S,
                  size: R,
                  disabled: v,
                  children: w.jsx($2, { id: "mdIcon" }),
                })
              : w.jsx(wE, {
                  checked: S,
                  size: R,
                  disabled: v,
                  children: w.jsx(UE, { id: "mdIcon" }),
                }),
          }),
        ],
      }),
      j && w.jsx(Wg, { htmlFor: p, disabled: v, children: j }),
    ],
  });
};
var vN = styled_components_browser_esm_default.div`
  cursor: ${({ disabled: c }) => c && "not-allowed"};
  width: ${({ fullwidth: c }) => (c ? "100%" : "fit-content")};
`;
var hN = styled_components_browser_esm_default.textarea`
  border-radius: 8px;
  padding: ${() => `${k.spacing.s100} ${k.spacing.s150} ${k.spacing.s100}
    ${k.spacing.s200}`};
  font-family: ${k.typography.body.large.font};
  font-size: ${k.typography.body.large.size};
  font-weight: ${k.typography.body.large.weight};
  line-height: ${k.typography.body.large.lineHeight};
  letter-spacing: ${k.typography.body.large.tracking};
  width: ${({ fullwidth: c }) => (c ? "calc(100% - 32px)" : "452px")};
  height: 120px;
  color: ${({ disabled: c, theme: v }) => {
    var p, m, b, R, S, O;
    return c
      ? ((b =
          (m = (p = v == null ? void 0 : v.color) == null ? void 0 : p.text) ==
          null
            ? void 0
            : m.gray) == null
          ? void 0
          : b.disabled) || k.color.text.gray.disabled
      : ((O =
          (S = (R = v == null ? void 0 : v.color) == null ? void 0 : R.text) ==
          null
            ? void 0
            : S.dark) == null
          ? void 0
          : O.regular) || k.color.text.dark.regular;
  }};
  border: 2px solid
    ${({ disabled: c, status: v, isFocused: p, theme: m }) => {
      var b, R, S, O, j, L, Y, U, W, X, le, Ce;
      return c
        ? ((S =
            (R =
              (b = m == null ? void 0 : m.color) == null ? void 0 : b.stroke) ==
            null
              ? void 0
              : R.gray) == null
            ? void 0
            : S.disabled) || k.color.stroke.gray.disabled
        : v === "invalid"
        ? ((L =
            (j =
              (O = m == null ? void 0 : m.color) == null ? void 0 : O.stroke) ==
            null
              ? void 0
              : j.error) == null
            ? void 0
            : L.regular) || k.color.stroke.error.regular
        : p
        ? ((W =
            (U =
              (Y = m == null ? void 0 : m.color) == null ? void 0 : Y.stroke) ==
            null
              ? void 0
              : U.primary) == null
            ? void 0
            : W.hover) || k.color.stroke.primary.hover
        : ((Ce =
            (le =
              (X = m == null ? void 0 : m.color) == null ? void 0 : X.stroke) ==
            null
              ? void 0
              : le.divider) == null
            ? void 0
            : Ce.regular) || k.color.stroke.divider.regular;
    }};
  ${({ disabled: c }) => c && "pointer-events: none; opacity: 0.5;"}

  ::placeholder {
    color: ${({ theme: c }) => {
      var v, p, m;
      return (
        ((m =
          (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.text) ==
          null
            ? void 0
            : p.gray) == null
          ? void 0
          : m.regular) || k.color.text.gray.regular
      );
    }};
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }
`;
var gN = styled_components_browser_esm_default.div`
  display: flex;
  align-items: center;
  margin-left: ${k.spacing.s200};
  pointer-events: none;
  color: ${({ disabled: c, status: v, theme: p }) => {
    var m, b, R, S, O, j, L, Y, U;
    if (c)
      return (
        ((R =
          (b = (m = p == null ? void 0 : p.color) == null ? void 0 : m.text) ==
          null
            ? void 0
            : b.gray) == null
          ? void 0
          : R.disabled) || k.color.text.gray.disabled
      );
    if (v === "valid")
      return (
        ((j =
          (O = (S = p == null ? void 0 : p.color) == null ? void 0 : S.text) ==
          null
            ? void 0
            : O.success) == null
          ? void 0
          : j.regular) || k.color.text.success.regular
      );
    if (v === "invalid")
      return (
        ((U =
          (Y = (L = p == null ? void 0 : p.color) == null ? void 0 : L.text) ==
          null
            ? void 0
            : Y.error) == null
          ? void 0
          : U.regular) || k.color.text.error.regular
      );
  }};

  & svg {
    width: 14px;
    height: 14px;
    margin-top: ${k.spacing.s100};
  }
`;
var yN = (c) => {
  const { maxLength: v, appearance: p, disabled: m, valueLength: b } = c;
  return w.jsx(pt, {
    type: "body",
    size: "small",
    disabled: m,
    appearance: p,
    children: `${b}/${v}`,
  });
};
var mN = (c) => {
  const { disabled: v, status: p, message: m } = c;
  return p !== "pending"
    ? w.jsxs(gN, {
        disabled: v,
        status: p,
        children: [
          w.jsx(en, {
            appearance: p === "invalid" ? "error" : "success",
            disabled: v,
            icon: p === "invalid" ? w.jsx(FE, {}) : w.jsx(Gg, {}),
          }),
          w.jsx(pt, {
            type: "body",
            size: "small",
            margin: "8px 0px 0px 4px",
            appearance: p === "invalid" ? "error" : "success",
            disabled: v,
            children: m && `${m}`,
          }),
        ],
      })
    : w.jsx(w.Fragment, {});
};
var j_ = (c) => {
  const {
      label: v,
      name: p,
      id: m,
      placeholder: b,
      disabled: R,
      value: S = "",
      maxLength: O = 0,
      required: j,
      status: L = "pending",
      message: Y,
      fullwidth: U,
      onChange: W,
      onFocus: X,
      onBlur: le,
      readOnly: Ce,
      lengthThreshold: Pe = 0,
    } = c,
    [ct, Ue] = (0, import_react.useState)(false);
  let Ne =
    O - S.length <= Pe && S.length <= O
      ? "warning"
      : (S == null ? void 0 : S.length) > O
      ? "error"
      : "gray";
  const et = (Ie) => {
      Ce || Ue(true), typeof X == "function" && X(Ie);
    },
    Fe = (Ie) => {
      Ue(false), typeof le == "function" && le(Ie);
    };
  return w.jsxs(vN, {
    fullwidth: U,
    disabled: R,
    children: [
      w.jsxs(Ke, {
        width: "100%",
        margin: "s0 s0 s050 s0",
        children: [
          (v || j) &&
            w.jsxs(Ke, {
              gap: "4px",
              alignItems: "center",
              padding: "s0 s0 s0 s200",
              children: [
                v &&
                  w.jsx(Wg, {
                    htmlFor: m,
                    disabled: R,
                    focused: ct,
                    invalid: L === "invalid",
                    children: v,
                  }),
                j &&
                  !R &&
                  w.jsx(pt, {
                    type: "body",
                    size: "small",
                    appearance: "dark",
                    children: "(Requerido)",
                  }),
              ],
            }),
          !R &&
            w.jsx(Ke, {
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
              children: w.jsx(yN, {
                appearance: Ne,
                maxLength: O,
                lengthThreshold: Pe,
                disabled: R,
                valueLength: S.length,
              }),
            }),
        ],
      }),
      w.jsx(hN, {
        name: p,
        id: m,
        placeholder: b,
        disabled: R,
        required: j,
        status: L,
        fullwidth: U,
        isFocused: ct,
        onChange: W,
        onFocus: et,
        onBlur: Fe,
        readOnly: Ce,
        value: S,
      }),
      L && w.jsx(mN, { disabled: R, status: L, message: Y }),
    ],
  });
};
var PE = ({ readOnly: c }) => c && k.color.surface.gray.clear;
var SN = styled_components_browser_esm_default.div`
  cursor: ${({ disabled: c }) => c && "not-allowed"};
  width: ${({ fullwidth: c }) => (c ? "100%" : "280px")};
`;
var xN = styled_components_browser_esm_default.div`
  display: flex;
  align-items: center;
  margin-bottom: ${k.spacing.s050};
  pointer-events: ${({ disabled: c }) => c && "none"};
`;
var CN = styled_components_browser_esm_default.div`
  display: grid;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  user-select: none;
  padding-left: ${k.spacing.s200};
  padding-right: ${k.spacing.s200};
  pointer-events: ${({ disabled: c }) => c && "none"};
  opacity: ${({ disabled: c }) => c && "0.5"};
  background-color: ${PE};
  grid-template-columns: ${({ iconBefore: c, iconAfter: v }) =>
    c && v
      ? "auto 1fr auto"
      : c && !v
      ? "auto 1fr"
      : !c && v
      ? "1fr auto"
      : "1fr"};
  border: 1px solid
    ${({ disabled: c, status: v, focused: p, theme: m }) => {
      var b, R, S, O, j, L, Y, U, W, X, le, Ce;
      return c
        ? ((S =
            (R =
              (b = m == null ? void 0 : m.color) == null ? void 0 : b.stroke) ==
            null
              ? void 0
              : R.gray) == null
            ? void 0
            : S.disabled) || k.color.stroke.gray.disabled
        : v === "invalid"
        ? ((L =
            (j =
              (O = m == null ? void 0 : m.color) == null ? void 0 : O.stroke) ==
            null
              ? void 0
              : j.error) == null
            ? void 0
            : L.regular) || k.color.stroke.error.regular
        : p
        ? ((W =
            (U =
              (Y = m == null ? void 0 : m.color) == null ? void 0 : Y.stroke) ==
            null
              ? void 0
              : U.primary) == null
            ? void 0
            : W.hover) || k.color.stroke.primary.hover
        : ((Ce =
            (le =
              (X = m == null ? void 0 : m.color) == null ? void 0 : X.stroke) ==
            null
              ? void 0
              : le.divider) == null
            ? void 0
            : Ce.regular) || k.color.stroke.divider.regular;
    }};
`;
var EN = styled_components_browser_esm_default.input`
  outline: none;
  border-radius: 8px;
  font-family: ${k.typography.body.large.font};
  font-size: ${k.typography.body.large.size};
  font-weight: ${k.typography.body.large.weight};
  line-height: ${k.typography.body.large.lineHeight};
  letter-spacing: ${k.typography.body.large.tracking};
  background-color: ${PE};
  color: ${({ disabled: c, theme: v }) => {
    var p, m, b, R, S, O;
    return c
      ? ((b =
          (m = (p = v == null ? void 0 : v.color) == null ? void 0 : p.text) ==
          null
            ? void 0
            : m.gray) == null
          ? void 0
          : b.disabled) || k.color.text.gray.disabled
      : ((O =
          (S = (R = v == null ? void 0 : v.color) == null ? void 0 : R.text) ==
          null
            ? void 0
            : S.dark) == null
          ? void 0
          : O.regular) || k.color.text.dark.regular;
  }};

  width: ${({ fullwidth: c }) => c && "100%"};
  height: ${({ size: c }) => (c === "compact" ? "40px" : "48px")};

  border: none;
  &[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
  }
  ::placeholder {
    color: ${({ theme: c }) => {
      var v, p, m;
      return (
        ((m =
          (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.text) ==
          null
            ? void 0
            : p.gray) == null
          ? void 0
          : m.regular) || k.color.text.gray.regular
      );
    }};
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-moz-search-cancel-button {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
var bN = styled_components_browser_esm_default.div`
  pointer-events: none;
  color: ${({ disabled: c, status: v, theme: p }) => {
    var m, b, R, S, O, j, L, Y, U;
    if (c)
      return (
        ((R =
          (b = (m = p == null ? void 0 : p.color) == null ? void 0 : m.text) ==
          null
            ? void 0
            : b.gray) == null
          ? void 0
          : R.disabled) || k.color.text.gray.disabled
      );
    if (v === "valid")
      return (
        ((j =
          (O = (S = p == null ? void 0 : p.color) == null ? void 0 : S.text) ==
          null
            ? void 0
            : O.success) == null
          ? void 0
          : j.regular) || k.color.text.success.regular
      );
    if (v === "invalid")
      return (
        ((U =
          (Y = (L = p == null ? void 0 : p.color) == null ? void 0 : L.text) ==
          null
            ? void 0
            : Y.error) == null
          ? void 0
          : U.regular) || k.color.text.error.regular
      );
  }};
`;
var wN = (c) => {
  const { disabled: v, status: p, message: m } = c;
  return p !== "pending"
    ? w.jsx(bN, {
        disabled: v,
        status: p,
        children: w.jsxs(Ke, {
          alignItems: "center",
          gap: "4px",
          margin: "s050 s0 s0 s200",
          children: [
            w.jsx(en, {
              appearance: p === "invalid" ? "error" : "success",
              disabled: v,
              icon: p === "invalid" ? w.jsx(q2, {}) : w.jsx(Gg, {}),
              size: "14px",
            }),
            w.jsx(pt, {
              type: "body",
              size: "small",
              appearance: p === "invalid" ? "error" : "success",
              disabled: v,
              children: m && `${m}`,
            }),
          ],
        }),
      })
    : w.jsx(w.Fragment, {});
};
var A_ = (c) => {
  const {
      label: v,
      name: p,
      id: m,
      placeholder: b,
      disabled: R = false,
      type: S = "text",
      value: O,
      onChange: j,
      iconBefore: L,
      iconAfter: Y,
      required: U = false,
      status: W = "pending",
      message: X,
      size: le = "wide",
      fullwidth: Ce = false,
      onFocus: Pe,
      onBlur: ct,
      readOnly: Ue,
    } = c,
    [Ne, et] = (0, import_react.useState)(false),
    Fe = ($e) => {
      Ue || et(true), typeof Pe == "function" && Pe($e);
    },
    Ie = ($e) => {
      et(false), typeof ct == "function" && ct($e);
    };
  return w.jsxs(SN, {
    fullwidth: Ce,
    disabled: R,
    size: le,
    children: [
      w.jsxs(xN, {
        alignItems: "center",
        wrap: "wrap",
        size: le,
        disabled: R,
        children: [
          v &&
            w.jsx(Wg, {
              htmlFor: m,
              disabled: R,
              focused: Ne,
              invalid: W === "invalid",
              size: le === "compact" ? "medium" : "large",
              margin: "0px 0px 0px 16px",
              children: v,
            }),
          U &&
            !R &&
            w.jsx(pt, {
              type: "body",
              size: "small",
              appearance: "dark",
              margin: "0px 0px 0px 4px",
              children: "(Requerido)",
            }),
        ],
      }),
      w.jsxs(CN, {
        disabled: R,
        focused: Ne,
        status: W,
        iconBefore: L,
        iconAfter: Y,
        readOnly: Ue,
        children: [
          L &&
            w.jsx(en, {
              appearance: "gray",
              disabled: R,
              icon: L,
              size: le === "compact" ? "18px" : "24px",
              spacing: "none",
            }),
          w.jsx(EN, {
            label: v,
            name: p,
            id: m,
            placeholder: b,
            disabled: R,
            type: S,
            value: O,
            iconBefore: L,
            iconAfter: Y,
            required: U,
            size: le,
            status: W,
            fullwidth: Ce,
            focused: Ne,
            onChange: j,
            onFocus: Fe,
            onBlur: Ie,
            readOnly: Ue,
          }),
          Y &&
            w.jsx(en, {
              appearance: "gray",
              disabled: R,
              icon: Y,
              size: le === "compact" ? "18px" : "24px",
              spacing: "none",
            }),
        ],
      }),
      W && w.jsx(wN, { disabled: R, status: W, message: X }),
    ],
  });
};
var TN = styled_components_browser_esm_default.li`
  display: inline-block;
`;
var RN = styled_components_browser_esm_default(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ themed: c }) => {
      var v, p, m;
      return (
        ((m =
          (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.text) ==
          null
            ? void 0
            : p.gray) == null
          ? void 0
          : m.regular) || k.color.text.gray.regular
      );
    }};
  }
`;
var Pg = (c) => {
  const {
    label: v,
    path: p,
    id: m,
    size: b = "large",
    appearance: R = "gray",
    onClick: S,
  } = c;
  return w.jsx(TN, {
    id: m,
    onClick: S,
    children: w.jsx(RN, {
      to: p,
      children: w.jsx(pt, {
        type: "label",
        size: b,
        appearance: R,
        children: v,
      }),
    }),
  });
};
var kN = styled_components_browser_esm_default.li`
  display: inline-block;
  > * {
    height: 32px;
    > label {
      color: ${({ theme: c }) => {
        var v, p, m;
        return (
          ((m =
            (p =
              (v = c == null ? void 0 : c.color) == null ? void 0 : v.text) ==
            null
              ? void 0
              : p.gray) == null
            ? void 0
            : m.regular) || k.color.text.gray.regular
        );
      }};
      cursor: pointer;
      padding: ${({ theme: c }) => {
        var v, p;
        return `${
          ((v = c == null ? void 0 : c.spacing) == null ? void 0 : v.s100) ||
          k.spacing.s100
        } ${
          ((p = c == null ? void 0 : c.spacing) == null ? void 0 : p.s150) ||
          k.spacing.s150
        }`;
      }};
    }
  }
`;
var DN = styled_components_browser_esm_default(Link)`
  text-decoration: none;
  color: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.text) ==
        null
          ? void 0
          : p.gray) == null
        ? void 0
        : m.regular) || k.color.text.gray.regular
    );
  }};
`;
var NN = (c) => {
  const { label: v, path: p, id: m, size: b = "large" } = c;
  return w.jsx(DN, {
    to: p,
    children: w.jsx(kN, {
      id: m,
      children: w.jsx(Ke, {
        alignItems: "center",
        children: w.jsx(pt, {
          type: "label",
          size: b,
          appearance: "gray",
          padding: "8px 12px",
          children: v,
        }),
      }),
    }),
  });
};
var _N = styled_components_browser_esm_default.div`
  position: absolute;
  width: fit-content;
  max-width: 160px;
  min-width: 100px;
  box-shadow: ${({ theme: c }) => {
    var v, p, m, b, R, S;
    return `${
      ((v = c == null ? void 0 : c.spacing) == null ? void 0 : v.s0) ||
      k.spacing.s0
    } 
     ${
       ((p = c == null ? void 0 : c.spacing) == null ? void 0 : p.s025) ||
       k.spacing.s025
     } 
     ${
       ((m = c == null ? void 0 : c.spacing) == null ? void 0 : m.s050) ||
       k.spacing.s050
     } 
     ${
       ((S =
         (R = (b = c == null ? void 0 : c.color) == null ? void 0 : b.stroke) ==
         null
           ? void 0
           : R.light) == null
         ? void 0
         : S.disabled) || k.color.stroke.light.disabled
     }`;
  }};
  background-color: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.stroke) ==
        null
          ? void 0
          : p.light) == null
        ? void 0
        : m.hover) || k.color.stroke.light.hover
    );
  }};
  border-radius: ${({ theme: c }) => {
    var v;
    return `${
      ((v = c == null ? void 0 : c.spacing) == null ? void 0 : v.s050) ||
      k.spacing.s050
    }`;
  }};
  a {
    &:hover {
      cursor: pointer;
      background-color: ${({ theme: c }) => {
        var v, p, m;
        return (
          ((m =
            (p =
              (v = c == null ? void 0 : c.color) == null
                ? void 0
                : v.surface) == null
              ? void 0
              : p.dark) == null
            ? void 0
            : m.clear) || k.color.surface.dark.clear
        );
      }};
    }
  }
`;
var zN = (c) => {
  const { routes: v } = c;
  return w.jsx(_N, {
    children: w.jsx(Ke, {
      direction: "column",
      justifyContent: "space-between",
      children: v.map((p) =>
        w.jsx(
          NN,
          {
            id: p.id,
            path: p.path,
            label: p.label,
          },
          p.id
        )
      ),
    }),
  });
};
var MN = styled_components_browser_esm_default.li`
  display: inline-block;
`;
var LN = styled_components_browser_esm_default.span`
  user-select: none;
  text-decoration: none;
  color: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.stroke) ==
        null
          ? void 0
          : p.gray) == null
        ? void 0
        : m.regular) || k.color.stroke.gray.regular
    );
  }};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${({ theme: c }) => {
      var v, p, m;
      return (
        ((m =
          (p =
            (v = c == null ? void 0 : c.color) == null ? void 0 : v.stroke) ==
          null
            ? void 0
            : p.gray) == null
          ? void 0
          : m.regular) || k.color.stroke.gray.regular
      );
    }};
  }
`;
var ON = styled_components_browser_esm_default.div`
  position: relative;
  display: inline-block;
`;
var jN = (c) => {
  const { size: v = "large", routes: p } = c,
    [m, b] = (0, import_react.useState)(false),
    R = (0, import_react.useRef)(null),
    S = (j) => {
      R.current && !R.current.contains(j.target) && b(false);
    };
  (0, import_react.useEffect)(
    () => (
      document.addEventListener("click", S),
      () => {
        document.removeEventListener("click", S);
      }
    ),
    [R]
  );
  const O = () => {
    b(!m);
  };
  return w.jsxs(ON, {
    ref: R,
    onClick: O,
    children: [
      w.jsx(MN, {
        children: w.jsx(pt, {
          type: "label",
          size: v,
          appearance: "dark",
          children: w.jsx(LN, { children: "..." }),
        }),
      }),
      m && w.jsx(zN, { routes: p }),
    ],
  });
};
var TE = styled_components_browser_esm_default.ul`
  padding: ${({ theme: c }) => {
    var v;
    return `${
      ((v = c == null ? void 0 : c.spacing) == null ? void 0 : v.s0) ||
      k.spacing.s0
    } `;
  }};
  margin: ${({ theme: c }) => {
    var v;
    return `${
      ((v = c == null ? void 0 : c.spacing) == null ? void 0 : v.s0) ||
      k.spacing.s0
    } `;
  }};
  & > li {
    display: inline-flex;
  }
  & > li:not(:last-child)::after,
  & > div:not(:last-child)::after {
    pointer-events: none;
    content: "/";
    margin: ${({ theme: c }) => {
      var v, p;
      return `${
        ((v = c == null ? void 0 : c.spacing) == null ? void 0 : v.s0) ||
        k.spacing.s0
      } ${
        ((p = c == null ? void 0 : c.spacing) == null ? void 0 : p.s100) ||
        k.spacing.s100
      }`;
    }};
  }
  & li > p {
    display: inherit;
  }
`;
function R1(c) {
  return c.charAt(0).toUpperCase() + c.slice(1);
}
var U_ = (c) => {
  const { crumbs: v } = c,
    p = Bp("(min-width: 768px)"),
    m = p ? 5 : 3;
  if (v.length > m) {
    const b = v[v.length - 1];
    return w.jsxs(TE, {
      children: [
        w.jsx(
          Pg,
          {
            path: v[0].path,
            id: v[0].path,
            label: R1(v[0].label),
          },
          v[0].path
        ),
        w.jsx(
          jN,
          {
            size: p ? "large" : "small",
            routes: v.slice(1, -1),
          },
          "breadcrumb-ellipsis"
        ),
        w.jsx(
          Pg,
          {
            path: b.path,
            id: b.path,
            label: R1(b.label),
            appearance: "dark",
          },
          b.path
        ),
      ],
    });
  }
  return w.jsx(TE, {
    children: v.map(({ path: b, label: R }, S) =>
      w.jsx(
        Pg,
        {
          path: b,
          id: b,
          label: R1(R),
          appearance: S === v.length - 1 ? "dark" : "gray",
        },
        b
      )
    ),
  });
};
var L1 = { exports: {} };
var Vg = { exports: {} };
var D1 = {};
var kE;
function UN() {
  return (
    kE ||
      ((kE = 1),
      (function (c) {
        (function () {
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
              "function" &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(
              new Error()
            );
          var v = false,
            p = false,
            m = 5;
          function b(se, ke) {
            var tt = se.length;
            se.push(ke), O(se, ke, tt);
          }
          function R(se) {
            return se.length === 0 ? null : se[0];
          }
          function S(se) {
            if (se.length === 0) return null;
            var ke = se[0],
              tt = se.pop();
            return tt !== ke && ((se[0] = tt), j(se, tt, 0)), ke;
          }
          function O(se, ke, tt) {
            for (var bt = tt; bt > 0; ) {
              var Qt = (bt - 1) >>> 1,
                wn = se[Qt];
              if (L(wn, ke) > 0) (se[Qt] = ke), (se[bt] = wn), (bt = Qt);
              else return;
            }
          }
          function j(se, ke, tt) {
            for (var bt = tt, Qt = se.length, wn = Qt >>> 1; bt < wn; ) {
              var tn = (bt + 1) * 2 - 1,
                Cr = se[tn],
                Lt = tn + 1,
                $r = se[Lt];
              if (L(Cr, ke) < 0)
                Lt < Qt && L($r, Cr) < 0
                  ? ((se[bt] = $r), (se[Lt] = ke), (bt = Lt))
                  : ((se[bt] = Cr), (se[tn] = ke), (bt = tn));
              else if (Lt < Qt && L($r, ke) < 0)
                (se[bt] = $r), (se[Lt] = ke), (bt = Lt);
              else return;
            }
          }
          function L(se, ke) {
            var tt = se.sortIndex - ke.sortIndex;
            return tt !== 0 ? tt : se.id - ke.id;
          }
          var Y = 1,
            U = 2,
            W = 3,
            X = 4,
            le = 5;
          function Ce(se, ke) {}
          var Pe =
            typeof performance == "object" &&
            typeof performance.now == "function";
          if (Pe) {
            var ct = performance;
            c.unstable_now = function () {
              return ct.now();
            };
          } else {
            var Ue = Date,
              Ne = Ue.now();
            c.unstable_now = function () {
              return Ue.now() - Ne;
            };
          }
          var et = 1073741823,
            Fe = -1,
            Ie = 250,
            $e = 5e3,
            dn = 1e4,
            pn = et,
            Bt = [],
            xt = [],
            Dt = 1,
            Qe = null,
            lt = W,
            En = false,
            jt = false,
            lr = false,
            ie = typeof setTimeout == "function" ? setTimeout : null,
            ze = typeof clearTimeout == "function" ? clearTimeout : null,
            ve = typeof setImmediate < "u" ? setImmediate : null;
          typeof navigator < "u" &&
            navigator.scheduling !== void 0 &&
            navigator.scheduling.isInputPending !== void 0 &&
            navigator.scheduling.isInputPending.bind(navigator.scheduling);
          function vt(se) {
            for (var ke = R(xt); ke !== null; ) {
              if (ke.callback === null) S(xt);
              else if (ke.startTime <= se)
                S(xt), (ke.sortIndex = ke.expirationTime), b(Bt, ke);
              else return;
              ke = R(xt);
            }
          }
          function mt(se) {
            if (((lr = false), vt(se), !jt))
              if (R(Bt) !== null) (jt = true), Ra(jn);
              else {
                var ke = R(xt);
                ke !== null && ln(mt, ke.startTime - se);
              }
          }
          function jn(se, ke) {
            (jt = false), lr && ((lr = false), Fr()), (En = true);
            var tt = lt;
            try {
              var bt;
              if (!p) return or(se, ke);
            } finally {
              (Qe = null), (lt = tt), (En = false);
            }
          }
          function or(se, ke) {
            var tt = ke;
            for (
              vt(tt), Qe = R(Bt);
              Qe !== null && !v && !(Qe.expirationTime > tt && (!se || wa()));

            ) {
              var bt = Qe.callback;
              if (typeof bt == "function") {
                (Qe.callback = null), (lt = Qe.priorityLevel);
                var Qt = Qe.expirationTime <= tt,
                  wn = bt(Qt);
                (tt = c.unstable_now()),
                  typeof wn == "function"
                    ? (Qe.callback = wn)
                    : Qe === R(Bt) && S(Bt),
                  vt(tt);
              } else S(Bt);
              Qe = R(Bt);
            }
            if (Qe !== null) return true;
            var tn = R(xt);
            return tn !== null && ln(mt, tn.startTime - tt), false;
          }
          function Ba(se, ke) {
            switch (se) {
              case Y:
              case U:
              case W:
              case X:
              case le:
                break;
              default:
                se = W;
            }
            var tt = lt;
            lt = se;
            try {
              return ke();
            } finally {
              lt = tt;
            }
          }
          function vn(se) {
            var ke;
            switch (lt) {
              case Y:
              case U:
              case W:
                ke = W;
                break;
              default:
                ke = lt;
                break;
            }
            var tt = lt;
            lt = ke;
            try {
              return se();
            } finally {
              lt = tt;
            }
          }
          function Jr(se) {
            var ke = lt;
            return function () {
              var tt = lt;
              lt = ke;
              try {
                return se.apply(this, arguments);
              } finally {
                lt = tt;
              }
            };
          }
          function Wn(se, ke, tt) {
            var bt = c.unstable_now(),
              Qt;
            if (typeof tt == "object" && tt !== null) {
              var wn = tt.delay;
              typeof wn == "number" && wn > 0 ? (Qt = bt + wn) : (Qt = bt);
            } else Qt = bt;
            var tn;
            switch (se) {
              case Y:
                tn = Fe;
                break;
              case U:
                tn = Ie;
                break;
              case le:
                tn = pn;
                break;
              case X:
                tn = dn;
                break;
              case W:
              default:
                tn = $e;
                break;
            }
            var Cr = Qt + tn,
              Lt = {
                id: Dt++,
                callback: ke,
                priorityLevel: se,
                startTime: Qt,
                expirationTime: Cr,
                sortIndex: -1,
              };
            return (
              Qt > bt
                ? ((Lt.sortIndex = Qt),
                  b(xt, Lt),
                  R(Bt) === null &&
                    Lt === R(xt) &&
                    (lr ? Fr() : (lr = true), ln(mt, Qt - bt)))
                : ((Lt.sortIndex = Cr),
                  b(Bt, Lt),
                  !jt && !En && ((jt = true), Ra(jn))),
              Lt
            );
          }
          function Sr() {}
          function Va() {
            !jt && !En && ((jt = true), Ra(jn));
          }
          function xr() {
            return R(Bt);
          }
          function ea(se) {
            se.callback = null;
          }
          function bn() {
            return lt;
          }
          var Xn = false,
            An = null,
            qn = -1,
            Kn = m,
            ta = -1;
          function wa() {
            var se = c.unstable_now() - ta;
            return !(se < Kn);
          }
          function li() {}
          function Pa(se) {
            if (se < 0 || se > 125) {
              console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              );
              return;
            }
            se > 0 ? (Kn = Math.floor(1e3 / se)) : (Kn = m);
          }
          var Ta = function () {
              if (An !== null) {
                var se = c.unstable_now();
                ta = se;
                var ke = true,
                  tt = true;
                try {
                  tt = An(ke, se);
                } finally {
                  tt ? Ar() : ((Xn = false), (An = null));
                }
              } else Xn = false;
            },
            Ar;
          if (typeof ve == "function")
            Ar = function () {
              ve(Ta);
            };
          else if (typeof MessageChannel < "u") {
            var Ya = new MessageChannel(),
              Ur = Ya.port2;
            (Ya.port1.onmessage = Ta),
              (Ar = function () {
                Ur.postMessage(null);
              });
          } else
            Ar = function () {
              ie(Ta, 0);
            };
          function Ra(se) {
            (An = se), Xn || ((Xn = true), Ar());
          }
          function ln(se, ke) {
            qn = ie(function () {
              se(c.unstable_now());
            }, ke);
          }
          function Fr() {
            ze(qn), (qn = -1);
          }
          var Ai = li,
            ka = null;
          (c.unstable_IdlePriority = le),
            (c.unstable_ImmediatePriority = Y),
            (c.unstable_LowPriority = X),
            (c.unstable_NormalPriority = W),
            (c.unstable_Profiling = ka),
            (c.unstable_UserBlockingPriority = U),
            (c.unstable_cancelCallback = ea),
            (c.unstable_continueExecution = Va),
            (c.unstable_forceFrameRate = Pa),
            (c.unstable_getCurrentPriorityLevel = bn),
            (c.unstable_getFirstCallbackNode = xr),
            (c.unstable_next = vn),
            (c.unstable_pauseExecution = Sr),
            (c.unstable_requestPaint = Ai),
            (c.unstable_runWithPriority = Ba),
            (c.unstable_scheduleCallback = Wn),
            (c.unstable_shouldYield = wa),
            (c.unstable_wrapCallback = Jr),
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
                "function" &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
                new Error()
              );
        })();
      })(D1)),
    D1
  );
}
var DE;
function YE() {
  return (
    DE || ((DE = 1), false ? (Vg.exports = AN()) : (Vg.exports = UN())),
    Vg.exports
  );
}
var ba = {};
var _E;
function $N() {
  return (
    _E ||
      ((_E = 1),
      (function () {
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
            "function" &&
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(
            new Error()
          );
        var c = import_react.default,
          v = YE(),
          p = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          m = false;
        function b(e) {
          m = e;
        }
        function R(e) {
          if (!m) {
            for (
              var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              a[i - 1] = arguments[i];
            O("warn", e, a);
          }
        }
        function S(e) {
          if (!m) {
            for (
              var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              a[i - 1] = arguments[i];
            O("error", e, a);
          }
        }
        function O(e, t, a) {
          {
            var i = p.ReactDebugCurrentFrame,
              o = i.getStackAddendum();
            o !== "" && ((t += "%s"), (a = a.concat([o])));
            var s = a.map(function (d) {
              return String(d);
            });
            s.unshift("Warning: " + t),
              Function.prototype.apply.call(console[e], console, s);
          }
        }
        var j = 0,
          L = 1,
          Y = 2,
          U = 3,
          W = 4,
          X = 5,
          le = 6,
          Ce = 7,
          Pe = 8,
          ct = 9,
          Ue = 10,
          Ne = 11,
          et = 12,
          Fe = 13,
          Ie = 14,
          $e = 15,
          dn = 16,
          pn = 17,
          Bt = 18,
          xt = 19,
          Dt = 21,
          Qe = 22,
          lt = 23,
          En = 24,
          jt = 25,
          lr = true,
          ie = false,
          ze = false,
          ve = false,
          vt = false,
          mt = true,
          jn = false,
          or = false,
          Ba = true,
          vn = true,
          Jr = true,
          Wn = /* @__PURE__ */ new Set(),
          Sr = {},
          Va = {};
        function xr(e, t) {
          ea(e, t), ea(e + "Capture", t);
        }
        function ea(e, t) {
          Sr[e] &&
            S(
              "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
              e
            ),
            (Sr[e] = t);
          {
            var a = e.toLowerCase();
            (Va[a] = e), e === "onDoubleClick" && (Va.ondblclick = e);
          }
          for (var i = 0; i < t.length; i++) Wn.add(t[i]);
        }
        var bn =
            typeof window < "u" &&
            typeof window.document < "u" &&
            typeof window.document.createElement < "u",
          Xn = Object.prototype.hasOwnProperty;
        function An(e) {
          {
            var t = typeof Symbol == "function" && Symbol.toStringTag,
              a =
                (t && e[Symbol.toStringTag]) || e.constructor.name || "Object";
            return a;
          }
        }
        function qn(e) {
          try {
            return Kn(e), false;
          } catch {
            return true;
          }
        }
        function Kn(e) {
          return "" + e;
        }
        function ta(e, t) {
          if (qn(e))
            return (
              S(
                "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",
                t,
                An(e)
              ),
              Kn(e)
            );
        }
        function wa(e) {
          if (qn(e))
            return (
              S(
                "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
                An(e)
              ),
              Kn(e)
            );
        }
        function li(e, t) {
          if (qn(e))
            return (
              S(
                "The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.",
                t,
                An(e)
              ),
              Kn(e)
            );
        }
        function Pa(e, t) {
          if (qn(e))
            return (
              S(
                "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",
                t,
                An(e)
              ),
              Kn(e)
            );
        }
        function Ta(e) {
          if (qn(e))
            return (
              S(
                "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",
                An(e)
              ),
              Kn(e)
            );
        }
        function Ar(e) {
          if (qn(e))
            return (
              S(
                "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.",
                An(e)
              ),
              Kn(e)
            );
        }
        var Ya = 0,
          Ur = 1,
          Ra = 2,
          ln = 3,
          Fr = 4,
          Ai = 5,
          ka = 6,
          se =
            ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
          ke = se + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
          tt = new RegExp("^[" + se + "][" + ke + "]*$"),
          bt = {},
          Qt = {};
        function wn(e) {
          return Xn.call(Qt, e)
            ? true
            : Xn.call(bt, e)
            ? false
            : tt.test(e)
            ? ((Qt[e] = true), true)
            : ((bt[e] = true), S("Invalid attribute name: `%s`", e), false);
        }
        function tn(e, t, a) {
          return t !== null
            ? t.type === Ya
            : a
            ? false
            : e.length > 2 &&
              (e[0] === "o" || e[0] === "O") &&
              (e[1] === "n" || e[1] === "N");
        }
        function Cr(e, t, a, i) {
          if (a !== null && a.type === Ya) return false;
          switch (typeof t) {
            case "function":
            case "symbol":
              return true;
            case "boolean": {
              if (i) return false;
              if (a !== null) return !a.acceptsBooleans;
              var o = e.toLowerCase().slice(0, 5);
              return o !== "data-" && o !== "aria-";
            }
            default:
              return false;
          }
        }
        function Lt(e, t, a, i) {
          if (t === null || typeof t > "u" || Cr(e, t, a, i)) return true;
          if (i) return false;
          if (a !== null)
            switch (a.type) {
              case ln:
                return !t;
              case Fr:
                return t === false;
              case Ai:
                return isNaN(t);
              case ka:
                return isNaN(t) || t < 1;
            }
          return false;
        }
        function $r(e) {
          return Ot.hasOwnProperty(e) ? Ot[e] : null;
        }
        function Nt(e, t, a, i, o, s, d) {
          (this.acceptsBooleans = t === Ra || t === ln || t === Fr),
            (this.attributeName = i),
            (this.attributeNamespace = o),
            (this.mustUseProperty = a),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = s),
            (this.removeEmptyString = d);
        }
        var Ot = {},
          po = [
            "children",
            "dangerouslySetInnerHTML",
            // TODO: This prevents the assignment of defaultValue to regular
            // elements (not just inputs). Now that ReactDOMInput assigns to the
            // defaultValue property -- do we need this?
            "defaultValue",
            "defaultChecked",
            "innerHTML",
            "suppressContentEditableWarning",
            "suppressHydrationWarning",
            "style",
          ];
        po.forEach(function (e) {
          Ot[e] = new Nt(
            e,
            Ya,
            false,
            // mustUseProperty
            e,
            // attributeName
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0],
              a = e[1];
            Ot[t] = new Nt(
              t,
              Ur,
              false,
              // mustUseProperty
              a,
              // attributeName
              null,
              // attributeNamespace
              false,
              // sanitizeURL
              false
            );
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              Ot[e] = new Nt(
                e,
                Ra,
                false,
                // mustUseProperty
                e.toLowerCase(),
                // attributeName
                null,
                // attributeNamespace
                false,
                // sanitizeURL
                false
              );
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            Ot[e] = new Nt(
              e,
              Ra,
              false,
              // mustUseProperty
              e,
              // attributeName
              null,
              // attributeNamespace
              false,
              // sanitizeURL
              false
            );
          }),
          [
            "allowFullScreen",
            "async",
            // Note: there is a special case that prevents it from being written to the DOM
            // on the client side because the browsers are inconsistent. Instead we call focus().
            "autoFocus",
            "autoPlay",
            "controls",
            "default",
            "defer",
            "disabled",
            "disablePictureInPicture",
            "disableRemotePlayback",
            "formNoValidate",
            "hidden",
            "loop",
            "noModule",
            "noValidate",
            "open",
            "playsInline",
            "readOnly",
            "required",
            "reversed",
            "scoped",
            "seamless",
            // Microdata
            "itemScope",
          ].forEach(function (e) {
            Ot[e] = new Nt(
              e,
              ln,
              false,
              // mustUseProperty
              e.toLowerCase(),
              // attributeName
              null,
              // attributeNamespace
              false,
              // sanitizeURL
              false
            );
          }),
          [
            "checked",
            // Note: `option.selected` is not updated if `select.multiple` is
            // disabled with `removeAttribute`. We have special logic for handling this.
            "multiple",
            "muted",
            "selected",
            // NOTE: if you add a camelCased prop to this list,
            // you'll need to set attributeName to name.toLowerCase()
            // instead in the assignment below.
          ].forEach(function (e) {
            Ot[e] = new Nt(
              e,
              ln,
              true,
              // mustUseProperty
              e,
              // attributeName
              null,
              // attributeNamespace
              false,
              // sanitizeURL
              false
            );
          }),
          [
            "capture",
            "download",
            // NOTE: if you add a camelCased prop to this list,
            // you'll need to set attributeName to name.toLowerCase()
            // instead in the assignment below.
          ].forEach(function (e) {
            Ot[e] = new Nt(
              e,
              Fr,
              false,
              // mustUseProperty
              e,
              // attributeName
              null,
              // attributeNamespace
              false,
              // sanitizeURL
              false
            );
          }),
          [
            "cols",
            "rows",
            "size",
            "span",
            // NOTE: if you add a camelCased prop to this list,
            // you'll need to set attributeName to name.toLowerCase()
            // instead in the assignment below.
          ].forEach(function (e) {
            Ot[e] = new Nt(
              e,
              ka,
              false,
              // mustUseProperty
              e,
              // attributeName
              null,
              // attributeNamespace
              false,
              // sanitizeURL
              false
            );
          }),
          ["rowSpan", "start"].forEach(function (e) {
            Ot[e] = new Nt(
              e,
              Ai,
              false,
              // mustUseProperty
              e.toLowerCase(),
              // attributeName
              null,
              // attributeNamespace
              false,
              // sanitizeURL
              false
            );
          });
        var xl = /[\-\:]([a-z])/g,
          vo = function (e) {
            return e[1].toUpperCase();
          };
        [
          "accent-height",
          "alignment-baseline",
          "arabic-form",
          "baseline-shift",
          "cap-height",
          "clip-path",
          "clip-rule",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "dominant-baseline",
          "enable-background",
          "fill-opacity",
          "fill-rule",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "glyph-name",
          "glyph-orientation-horizontal",
          "glyph-orientation-vertical",
          "horiz-adv-x",
          "horiz-origin-x",
          "image-rendering",
          "letter-spacing",
          "lighting-color",
          "marker-end",
          "marker-mid",
          "marker-start",
          "overline-position",
          "overline-thickness",
          "paint-order",
          "panose-1",
          "pointer-events",
          "rendering-intent",
          "shape-rendering",
          "stop-color",
          "stop-opacity",
          "strikethrough-position",
          "strikethrough-thickness",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke-width",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "underline-position",
          "underline-thickness",
          "unicode-bidi",
          "unicode-range",
          "units-per-em",
          "v-alphabetic",
          "v-hanging",
          "v-ideographic",
          "v-mathematical",
          "vector-effect",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "word-spacing",
          "writing-mode",
          "xmlns:xlink",
          "x-height",
          // NOTE: if you add a camelCased prop to this list,
          // you'll need to set attributeName to name.toLowerCase()
          // instead in the assignment below.
        ].forEach(function (e) {
          var t = e.replace(xl, vo);
          Ot[t] = new Nt(
            t,
            Ur,
            false,
            // mustUseProperty
            e,
            null,
            // attributeNamespace
            false,
            // sanitizeURL
            false
          );
        }),
          [
            "xlink:actuate",
            "xlink:arcrole",
            "xlink:role",
            "xlink:show",
            "xlink:title",
            "xlink:type",
            // NOTE: if you add a camelCased prop to this list,
            // you'll need to set attributeName to name.toLowerCase()
            // instead in the assignment below.
          ].forEach(function (e) {
            var t = e.replace(xl, vo);
            Ot[t] = new Nt(
              t,
              Ur,
              false,
              // mustUseProperty
              e,
              "http://www.w3.org/1999/xlink",
              false,
              // sanitizeURL
              false
            );
          }),
          [
            "xml:base",
            "xml:lang",
            "xml:space",
            // NOTE: if you add a camelCased prop to this list,
            // you'll need to set attributeName to name.toLowerCase()
            // instead in the assignment below.
          ].forEach(function (e) {
            var t = e.replace(xl, vo);
            Ot[t] = new Nt(
              t,
              Ur,
              false,
              // mustUseProperty
              e,
              "http://www.w3.org/XML/1998/namespace",
              false,
              // sanitizeURL
              false
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            Ot[e] = new Nt(
              e,
              Ur,
              false,
              // mustUseProperty
              e.toLowerCase(),
              // attributeName
              null,
              // attributeNamespace
              false,
              // sanitizeURL
              false
            );
          });
        var gu = "xlinkHref";
        (Ot[gu] = new Nt(
          "xlinkHref",
          Ur,
          false,
          // mustUseProperty
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          true,
          // sanitizeURL
          false
        )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            Ot[e] = new Nt(
              e,
              Ur,
              false,
              // mustUseProperty
              e.toLowerCase(),
              // attributeName
              null,
              // attributeNamespace
              true,
              // sanitizeURL
              true
            );
          });
        var Ts =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
          Cl = false;
        function ho(e) {
          !Cl &&
            Ts.test(e) &&
            ((Cl = true),
            S(
              "A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",
              JSON.stringify(e)
            ));
        }
        function El(e, t, a, i) {
          if (i.mustUseProperty) {
            var o = i.propertyName;
            return e[o];
          } else {
            ta(a, t), i.sanitizeURL && ho("" + a);
            var s = i.attributeName,
              d = null;
            if (i.type === Fr) {
              if (e.hasAttribute(s)) {
                var g = e.getAttribute(s);
                return g === ""
                  ? true
                  : Lt(t, a, i, false)
                  ? g
                  : g === "" + a
                  ? a
                  : g;
              }
            } else if (e.hasAttribute(s)) {
              if (Lt(t, a, i, false)) return e.getAttribute(s);
              if (i.type === ln) return a;
              d = e.getAttribute(s);
            }
            return Lt(t, a, i, false)
              ? d === null
                ? a
                : d
              : d === "" + a
              ? a
              : d;
          }
        }
        function go(e, t, a, i) {
          {
            if (!wn(t)) return;
            if (!e.hasAttribute(t)) return a === void 0 ? void 0 : null;
            var o = e.getAttribute(t);
            return ta(a, t), o === "" + a ? a : o;
          }
        }
        function Ia(e, t, a, i) {
          var o = $r(t);
          if (!tn(t, o, i)) {
            if ((Lt(t, a, o, i) && (a = null), i || o === null)) {
              if (wn(t)) {
                var s = t;
                a === null
                  ? e.removeAttribute(s)
                  : (ta(a, t), e.setAttribute(s, "" + a));
              }
              return;
            }
            var d = o.mustUseProperty;
            if (d) {
              var g = o.propertyName;
              if (a === null) {
                var y = o.type;
                e[g] = y === ln ? false : "";
              } else e[g] = a;
              return;
            }
            var C = o.attributeName,
              E = o.attributeNamespace;
            if (a === null) e.removeAttribute(C);
            else {
              var M = o.type,
                _;
              M === ln || (M === Fr && a === true)
                ? (_ = "")
                : (ta(a, C), (_ = "" + a), o.sanitizeURL && ho(_.toString())),
                E ? e.setAttributeNS(E, C, _) : e.setAttribute(C, _);
            }
          }
        }
        var Ui = Symbol.for("react.element"),
          Hr = Symbol.for("react.portal"),
          Da = Symbol.for("react.fragment"),
          Fi = Symbol.for("react.strict_mode"),
          D = Symbol.for("react.profiler"),
          te = Symbol.for("react.provider"),
          ce = Symbol.for("react.context"),
          Me = Symbol.for("react.forward_ref"),
          Ze = Symbol.for("react.suspense"),
          ft = Symbol.for("react.suspense_list"),
          Je = Symbol.for("react.memo"),
          Oe = Symbol.for("react.lazy"),
          Tn = Symbol.for("react.scope"),
          Vt = Symbol.for("react.debug_trace_mode"),
          Pt = Symbol.for("react.offscreen"),
          ur = Symbol.for("react.legacy_hidden"),
          $i = Symbol.for("react.cache"),
          Rs = Symbol.for("react.tracing_marker"),
          ht = Symbol.iterator,
          Xg = "@@iterator";
        function oi(e) {
          if (e === null || typeof e != "object") return null;
          var t = (ht && e[ht]) || e[Xg];
          return typeof t == "function" ? t : null;
        }
        var rt = Object.assign,
          Hi = 0,
          Vp,
          Ef,
          yu,
          Na,
          Pp,
          na,
          Yp;
        function Ip() {}
        Ip.__reactDisabledLog = true;
        function qg() {
          {
            if (Hi === 0) {
              (Vp = console.log),
                (Ef = console.info),
                (yu = console.warn),
                (Na = console.error),
                (Pp = console.group),
                (na = console.groupCollapsed),
                (Yp = console.groupEnd);
              var e = {
                configurable: true,
                enumerable: true,
                value: Ip,
                writable: true,
              };
              Object.defineProperties(console, {
                info: e,
                log: e,
                warn: e,
                error: e,
                group: e,
                groupCollapsed: e,
                groupEnd: e,
              });
            }
            Hi++;
          }
        }
        function ks() {
          {
            if ((Hi--, Hi === 0)) {
              var e = {
                configurable: true,
                enumerable: true,
                writable: true,
              };
              Object.defineProperties(console, {
                log: rt({}, e, {
                  value: Vp,
                }),
                info: rt({}, e, {
                  value: Ef,
                }),
                warn: rt({}, e, {
                  value: yu,
                }),
                error: rt({}, e, {
                  value: Na,
                }),
                group: rt({}, e, {
                  value: Pp,
                }),
                groupCollapsed: rt({}, e, {
                  value: na,
                }),
                groupEnd: rt({}, e, {
                  value: Yp,
                }),
              });
            }
            Hi < 0 &&
              S(
                "disabledDepth fell below zero. This is a bug in React. Please file an issue."
              );
          }
        }
        var yo = p.ReactCurrentDispatcher,
          bl;
        function _a(e, t, a) {
          {
            if (bl === void 0)
              try {
                throw Error();
              } catch (o) {
                var i = o.stack.trim().match(/\n( *(at )?)/);
                bl = (i && i[1]) || "";
              }
            return (
              `
` +
              bl +
              e
            );
          }
        }
        var bf = false,
          Ds;
        {
          var wf = typeof WeakMap == "function" ? WeakMap : Map;
          Ds = new wf();
        }
        function Ns(e, t) {
          if (!e || bf) return "";
          {
            var a = Ds.get(e);
            if (a !== void 0) return a;
          }
          var i;
          bf = true;
          var o = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var s;
          (s = yo.current), (yo.current = null), qg();
          try {
            if (t) {
              var d = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(d.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(d, []);
                } catch (V) {
                  i = V;
                }
                Reflect.construct(e, [], d);
              } else {
                try {
                  d.call();
                } catch (V) {
                  i = V;
                }
                e.call(d.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                i = V;
              }
              e();
            }
          } catch (V) {
            if (V && i && typeof V.stack == "string") {
              for (
                var g = V.stack.split(`
`),
                  y = i.stack.split(`
`),
                  C = g.length - 1,
                  E = y.length - 1;
                C >= 1 && E >= 0 && g[C] !== y[E];

              )
                E--;
              for (; C >= 1 && E >= 0; C--, E--)
                if (g[C] !== y[E]) {
                  if (C !== 1 || E !== 1)
                    do
                      if ((C--, E--, E < 0 || g[C] !== y[E])) {
                        var M =
                          `
` + g[C].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            M.includes("<anonymous>") &&
                            (M = M.replace("<anonymous>", e.displayName)),
                          typeof e == "function" && Ds.set(e, M),
                          M
                        );
                      }
                    while (C >= 1 && E >= 0);
                  break;
                }
            }
          } finally {
            (bf = false), (yo.current = s), ks(), (Error.prepareStackTrace = o);
          }
          var _ = e ? e.displayName || e.name : "",
            B = _ ? _a(_) : "";
          return typeof e == "function" && Ds.set(e, B), B;
        }
        function Tf(e, t, a) {
          return Ns(e, true);
        }
        function wl(e, t, a) {
          return Ns(e, false);
        }
        function Kg(e) {
          var t = e.prototype;
          return !!(t && t.isReactComponent);
        }
        function mu(e, t, a) {
          if (e == null) return "";
          if (typeof e == "function") return Ns(e, Kg(e));
          if (typeof e == "string") return _a(e);
          switch (e) {
            case Ze:
              return _a("Suspense");
            case ft:
              return _a("SuspenseList");
          }
          if (typeof e == "object")
            switch (e.$$typeof) {
              case Me:
                return wl(e.render);
              case Je:
                return mu(e.type, t, a);
              case Oe: {
                var i = e,
                  o = i._payload,
                  s = i._init;
                try {
                  return mu(s(o), t, a);
                } catch {}
              }
            }
          return "";
        }
        function wt(e) {
          switch (
            (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag)
          ) {
            case X:
              return _a(e.type);
            case dn:
              return _a("Lazy");
            case Fe:
              return _a("Suspense");
            case xt:
              return _a("SuspenseList");
            case j:
            case Y:
            case $e:
              return wl(e.type);
            case Ne:
              return wl(e.type.render);
            case L:
              return Tf(e.type);
            default:
              return "";
          }
        }
        function Rf(e) {
          try {
            var t = "",
              a = e;
            do (t += wt(a)), (a = a.return);
            while (a);
            return t;
          } catch (i) {
            return (
              `
Error generating stack: ` +
              i.message +
              `
` +
              i.stack
            );
          }
        }
        function Qp(e, t, a) {
          var i = e.displayName;
          if (i) return i;
          var o = t.displayName || t.name || "";
          return o !== "" ? a + "(" + o + ")" : a;
        }
        function _s(e) {
          return e.displayName || "Context";
        }
        function _t(e) {
          if (e == null) return null;
          if (
            (typeof e.tag == "number" &&
              S(
                "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
              ),
            typeof e == "function")
          )
            return e.displayName || e.name || null;
          if (typeof e == "string") return e;
          switch (e) {
            case Da:
              return "Fragment";
            case Hr:
              return "Portal";
            case D:
              return "Profiler";
            case Fi:
              return "StrictMode";
            case Ze:
              return "Suspense";
            case ft:
              return "SuspenseList";
          }
          if (typeof e == "object")
            switch (e.$$typeof) {
              case ce:
                var t = e;
                return _s(t) + ".Consumer";
              case te:
                var a = e;
                return _s(a._context) + ".Provider";
              case Me:
                return Qp(e, e.render, "ForwardRef");
              case Je:
                var i = e.displayName || null;
                return i !== null ? i : _t(e.type) || "Memo";
              case Oe: {
                var o = e,
                  s = o._payload,
                  d = o._init;
                try {
                  return _t(d(s));
                } catch {
                  return null;
                }
              }
            }
          return null;
        }
        function Gp(e, t, a) {
          var i = t.displayName || t.name || "";
          return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
        }
        function kf(e) {
          return e.displayName || "Context";
        }
        function We2(e) {
          var t = e.tag,
            a = e.type;
          switch (t) {
            case En:
              return "Cache";
            case ct:
              var i = a;
              return kf(i) + ".Consumer";
            case Ue:
              var o = a;
              return kf(o._context) + ".Provider";
            case Bt:
              return "DehydratedFragment";
            case Ne:
              return Gp(a, a.render, "ForwardRef");
            case Ce:
              return "Fragment";
            case X:
              return a;
            case W:
              return "Portal";
            case U:
              return "Root";
            case le:
              return "Text";
            case dn:
              return _t(a);
            case Pe:
              return a === Fi ? "StrictMode" : "Mode";
            case Qe:
              return "Offscreen";
            case et:
              return "Profiler";
            case Dt:
              return "Scope";
            case Fe:
              return "Suspense";
            case xt:
              return "SuspenseList";
            case jt:
              return "TracingMarker";
            case L:
            case j:
            case pn:
            case Y:
            case Ie:
            case $e:
              if (typeof a == "function")
                return a.displayName || a.name || null;
              if (typeof a == "string") return a;
              break;
          }
          return null;
        }
        var Su = p.ReactDebugCurrentFrame,
          on = null,
          ra = false;
        function aa() {
          {
            if (on === null) return null;
            var e = on._debugOwner;
            if (e !== null && typeof e < "u") return We2(e);
          }
          return null;
        }
        function xu() {
          return on === null ? "" : Rf(on);
        }
        function hn() {
          (Su.getCurrentStack = null), (on = null), (ra = false);
        }
        function Tt(e) {
          (Su.getCurrentStack = e === null ? null : xu), (on = e), (ra = false);
        }
        function Zg() {
          return on;
        }
        function za(e) {
          ra = e;
        }
        function Zn(e) {
          return "" + e;
        }
        function Bi(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return e;
            case "object":
              return Ar(e), e;
            default:
              return "";
          }
        }
        var Wp = {
          button: true,
          checkbox: true,
          image: true,
          hidden: true,
          radio: true,
          reset: true,
          submit: true,
        };
        function mo(e, t) {
          Wp[t.type] ||
            t.onChange ||
            t.onInput ||
            t.readOnly ||
            t.disabled ||
            t.value == null ||
            S(
              "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
            ),
            t.onChange ||
              t.readOnly ||
              t.disabled ||
              t.checked == null ||
              S(
                "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
              );
        }
        function Df(e) {
          var t = e.type,
            a = e.nodeName;
          return (
            a &&
            a.toLowerCase() === "input" &&
            (t === "checkbox" || t === "radio")
          );
        }
        function Xp(e) {
          return e._valueTracker;
        }
        function Cu(e) {
          e._valueTracker = null;
        }
        function Eu(e) {
          var t = "";
          return (
            e && (Df(e) ? (t = e.checked ? "true" : "false") : (t = e.value)), t
          );
        }
        function So(e) {
          var t = Df(e) ? "checked" : "value",
            a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
          Ar(e[t]);
          var i = "" + e[t];
          if (
            !(
              e.hasOwnProperty(t) ||
              typeof a > "u" ||
              typeof a.get != "function" ||
              typeof a.set != "function"
            )
          ) {
            var o = a.get,
              s = a.set;
            Object.defineProperty(e, t, {
              configurable: true,
              get: function () {
                return o.call(this);
              },
              set: function (g) {
                Ar(g), (i = "" + g), s.call(this, g);
              },
            }),
              Object.defineProperty(e, t, {
                enumerable: a.enumerable,
              });
            var d = {
              getValue: function () {
                return i;
              },
              setValue: function (g) {
                Ar(g), (i = "" + g);
              },
              stopTracking: function () {
                Cu(e), delete e[t];
              },
            };
            return d;
          }
        }
        function Tl(e) {
          Xp(e) || (e._valueTracker = So(e));
        }
        function qp(e) {
          if (!e) return false;
          var t = Xp(e);
          if (!t) return true;
          var a = t.getValue(),
            i = Eu(e);
          return i !== a ? (t.setValue(i), true) : false;
        }
        function zs(e) {
          if (
            ((e = e || (typeof document < "u" ? document : void 0)),
            typeof e > "u")
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch {
            return e.body;
          }
        }
        var Ms = false,
          bu = false,
          Ls = false,
          Nf = false;
        function ui(e) {
          var t = e.type === "checkbox" || e.type === "radio";
          return t ? e.checked != null : e.value != null;
        }
        function wu(e, t) {
          var a = e,
            i = t.checked,
            o = rt({}, t, {
              defaultChecked: void 0,
              defaultValue: void 0,
              value: void 0,
              checked: i ?? a._wrapperState.initialChecked,
            });
          return o;
        }
        function Tu(e, t) {
          mo("input", t),
            t.checked !== void 0 &&
              t.defaultChecked !== void 0 &&
              !bu &&
              (S(
                "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
                aa() || "A component",
                t.type
              ),
              (bu = true)),
            t.value !== void 0 &&
              t.defaultValue !== void 0 &&
              !Ms &&
              (S(
                "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
                aa() || "A component",
                t.type
              ),
              (Ms = true));
          var a = e,
            i = t.defaultValue == null ? "" : t.defaultValue;
          a._wrapperState = {
            initialChecked: t.checked != null ? t.checked : t.defaultChecked,
            initialValue: Bi(t.value != null ? t.value : i),
            controlled: ui(t),
          };
        }
        function _f(e, t) {
          var a = e,
            i = t.checked;
          i != null && Ia(a, "checked", i, false);
        }
        function xo(e, t) {
          var a = e;
          {
            var i = ui(t);
            !a._wrapperState.controlled &&
              i &&
              !Nf &&
              (S(
                "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"
              ),
              (Nf = true)),
              a._wrapperState.controlled &&
                !i &&
                !Ls &&
                (S(
                  "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"
                ),
                (Ls = true));
          }
          _f(e, t);
          var o = Bi(t.value),
            s = t.type;
          if (o != null)
            s === "number"
              ? ((o === 0 && a.value === "") || // We explicitly want to coerce to number here if possible.
                  // eslint-disable-next-line
                  a.value != o) &&
                (a.value = Zn(o))
              : a.value !== Zn(o) && (a.value = Zn(o));
          else if (s === "submit" || s === "reset") {
            a.removeAttribute("value");
            return;
          }
          t.hasOwnProperty("value")
            ? Vi(a, t.type, o)
            : t.hasOwnProperty("defaultValue") &&
              Vi(a, t.type, Bi(t.defaultValue)),
            t.checked == null &&
              t.defaultChecked != null &&
              (a.defaultChecked = !!t.defaultChecked);
        }
        function Ru(e, t, a) {
          var i = e;
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var o = t.type,
              s = o === "submit" || o === "reset";
            if (s && (t.value === void 0 || t.value === null)) return;
            var d = Zn(i._wrapperState.initialValue);
            a || (d !== i.value && (i.value = d)), (i.defaultValue = d);
          }
          var g = i.name;
          g !== "" && (i.name = ""),
            (i.defaultChecked = !i.defaultChecked),
            (i.defaultChecked = !!i._wrapperState.initialChecked),
            g !== "" && (i.name = g);
        }
        function Kp(e, t) {
          var a = e;
          xo(a, t), Br(a, t);
        }
        function Br(e, t) {
          var a = t.name;
          if (t.type === "radio" && a != null) {
            for (var i = e; i.parentNode; ) i = i.parentNode;
            ta(a, "name");
            for (
              var o = i.querySelectorAll(
                  "input[name=" + JSON.stringify("" + a) + '][type="radio"]'
                ),
                s = 0;
              s < o.length;
              s++
            ) {
              var d = o[s];
              if (!(d === e || d.form !== e.form)) {
                var g = kh(d);
                if (!g)
                  throw new Error(
                    "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                  );
                qp(d), xo(d, g);
              }
            }
          }
        }
        function Vi(e, t, a) {
          (t !== "number" || zs(e.ownerDocument) !== e) &&
            (a == null
              ? (e.defaultValue = Zn(e._wrapperState.initialValue))
              : e.defaultValue !== Zn(a) && (e.defaultValue = Zn(a)));
        }
        var Os = false,
          Co = false,
          Zp = false;
        function js(e, t) {
          t.value == null &&
            (typeof t.children == "object" && t.children !== null
              ? c.Children.forEach(t.children, function (a) {
                  a != null &&
                    (typeof a == "string" ||
                      typeof a == "number" ||
                      Co ||
                      ((Co = true),
                      S(
                        "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
                      )));
                })
              : t.dangerouslySetInnerHTML != null &&
                (Zp ||
                  ((Zp = true),
                  S(
                    "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
                  )))),
            t.selected != null &&
              !Os &&
              (S(
                "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
              ),
              (Os = true));
        }
        function zf(e, t) {
          t.value != null && e.setAttribute("value", Zn(Bi(t.value)));
        }
        var ku = Array.isArray;
        function Rn(e) {
          return ku(e);
        }
        var As;
        As = false;
        function Jp() {
          var e = aa();
          return e
            ? `

Check the render method of \`` +
                e +
                "`."
            : "";
        }
        var ev = ["value", "defaultValue"];
        function Jg(e) {
          {
            mo("select", e);
            for (var t = 0; t < ev.length; t++) {
              var a = ev[t];
              if (e[a] != null) {
                var i = Rn(e[a]);
                e.multiple && !i
                  ? S(
                      "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
                      a,
                      Jp()
                    )
                  : !e.multiple &&
                    i &&
                    S(
                      "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
                      a,
                      Jp()
                    );
              }
            }
          }
        }
        function Pi(e, t, a, i) {
          var o = e.options;
          if (t) {
            for (var s = a, d = {}, g = 0; g < s.length; g++)
              d["$" + s[g]] = true;
            for (var y = 0; y < o.length; y++) {
              var C = d.hasOwnProperty("$" + o[y].value);
              o[y].selected !== C && (o[y].selected = C),
                C && i && (o[y].defaultSelected = true);
            }
          } else {
            for (var E = Zn(Bi(a)), M = null, _ = 0; _ < o.length; _++) {
              if (o[_].value === E) {
                (o[_].selected = true), i && (o[_].defaultSelected = true);
                return;
              }
              M === null && !o[_].disabled && (M = o[_]);
            }
            M !== null && (M.selected = true);
          }
        }
        function Mf(e, t) {
          return rt({}, t, {
            value: void 0,
          });
        }
        function tv(e, t) {
          var a = e;
          Jg(t),
            (a._wrapperState = {
              wasMultiple: !!t.multiple,
            }),
            t.value !== void 0 &&
              t.defaultValue !== void 0 &&
              !As &&
              (S(
                "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"
              ),
              (As = true));
        }
        function ey(e, t) {
          var a = e;
          a.multiple = !!t.multiple;
          var i = t.value;
          i != null
            ? Pi(a, !!t.multiple, i, false)
            : t.defaultValue != null &&
              Pi(a, !!t.multiple, t.defaultValue, true);
        }
        function ty(e, t) {
          var a = e,
            i = a._wrapperState.wasMultiple;
          a._wrapperState.wasMultiple = !!t.multiple;
          var o = t.value;
          o != null
            ? Pi(a, !!t.multiple, o, false)
            : i !== !!t.multiple &&
              (t.defaultValue != null
                ? Pi(a, !!t.multiple, t.defaultValue, true)
                : Pi(a, !!t.multiple, t.multiple ? [] : "", false));
        }
        function ny(e, t) {
          var a = e,
            i = t.value;
          i != null && Pi(a, !!t.multiple, i, false);
        }
        var Lf = false;
        function Of(e, t) {
          var a = e;
          if (t.dangerouslySetInnerHTML != null)
            throw new Error(
              "`dangerouslySetInnerHTML` does not make sense on <textarea>."
            );
          var i = rt({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: Zn(a._wrapperState.initialValue),
          });
          return i;
        }
        function nv(e, t) {
          var a = e;
          mo("textarea", t),
            t.value !== void 0 &&
              t.defaultValue !== void 0 &&
              !Lf &&
              (S(
                "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",
                aa() || "A component"
              ),
              (Lf = true));
          var i = t.value;
          if (i == null) {
            var o = t.children,
              s = t.defaultValue;
            if (o != null) {
              S(
                "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
              );
              {
                if (s != null)
                  throw new Error(
                    "If you supply `defaultValue` on a <textarea>, do not pass children."
                  );
                if (Rn(o)) {
                  if (o.length > 1)
                    throw new Error(
                      "<textarea> can only have at most one child."
                    );
                  o = o[0];
                }
                s = o;
              }
            }
            s == null && (s = ""), (i = s);
          }
          a._wrapperState = {
            initialValue: Bi(i),
          };
        }
        function rv(e, t) {
          var a = e,
            i = Bi(t.value),
            o = Bi(t.defaultValue);
          if (i != null) {
            var s = Zn(i);
            s !== a.value && (a.value = s),
              t.defaultValue == null &&
                a.defaultValue !== s &&
                (a.defaultValue = s);
          }
          o != null && (a.defaultValue = Zn(o));
        }
        function av(e, t) {
          var a = e,
            i = a.textContent;
          i === a._wrapperState.initialValue &&
            i !== "" &&
            i !== null &&
            (a.value = i);
        }
        function jf(e, t) {
          rv(e, t);
        }
        var si = "http://www.w3.org/1999/xhtml",
          ry = "http://www.w3.org/1998/Math/MathML",
          Af = "http://www.w3.org/2000/svg";
        function Us(e) {
          switch (e) {
            case "svg":
              return Af;
            case "math":
              return ry;
            default:
              return si;
          }
        }
        function Uf(e, t) {
          return e == null || e === si
            ? Us(t)
            : e === Af && t === "foreignObject"
            ? si
            : e;
        }
        var ay = function (e) {
            return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
              ? function (t, a, i, o) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return e(t, a, i, o);
                  });
                }
              : e;
          },
          Fs,
          iv = ay(function (e, t) {
            if (e.namespaceURI === Af && !("innerHTML" in e)) {
              (Fs = Fs || document.createElement("div")),
                (Fs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>");
              for (var a = Fs.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
              for (; a.firstChild; ) e.appendChild(a.firstChild);
              return;
            }
            e.innerHTML = t;
          }),
          Er = 1,
          ci = 3,
          un = 8,
          Ma = 9,
          Rl = 11,
          $s = function (e, t) {
            if (t) {
              var a = e.firstChild;
              if (a && a === e.lastChild && a.nodeType === ci) {
                a.nodeValue = t;
                return;
              }
            }
            e.textContent = t;
          },
          lv = {
            animation: [
              "animationDelay",
              "animationDirection",
              "animationDuration",
              "animationFillMode",
              "animationIterationCount",
              "animationName",
              "animationPlayState",
              "animationTimingFunction",
            ],
            background: [
              "backgroundAttachment",
              "backgroundClip",
              "backgroundColor",
              "backgroundImage",
              "backgroundOrigin",
              "backgroundPositionX",
              "backgroundPositionY",
              "backgroundRepeat",
              "backgroundSize",
            ],
            backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
            border: [
              "borderBottomColor",
              "borderBottomStyle",
              "borderBottomWidth",
              "borderImageOutset",
              "borderImageRepeat",
              "borderImageSlice",
              "borderImageSource",
              "borderImageWidth",
              "borderLeftColor",
              "borderLeftStyle",
              "borderLeftWidth",
              "borderRightColor",
              "borderRightStyle",
              "borderRightWidth",
              "borderTopColor",
              "borderTopStyle",
              "borderTopWidth",
            ],
            borderBlockEnd: [
              "borderBlockEndColor",
              "borderBlockEndStyle",
              "borderBlockEndWidth",
            ],
            borderBlockStart: [
              "borderBlockStartColor",
              "borderBlockStartStyle",
              "borderBlockStartWidth",
            ],
            borderBottom: [
              "borderBottomColor",
              "borderBottomStyle",
              "borderBottomWidth",
            ],
            borderColor: [
              "borderBottomColor",
              "borderLeftColor",
              "borderRightColor",
              "borderTopColor",
            ],
            borderImage: [
              "borderImageOutset",
              "borderImageRepeat",
              "borderImageSlice",
              "borderImageSource",
              "borderImageWidth",
            ],
            borderInlineEnd: [
              "borderInlineEndColor",
              "borderInlineEndStyle",
              "borderInlineEndWidth",
            ],
            borderInlineStart: [
              "borderInlineStartColor",
              "borderInlineStartStyle",
              "borderInlineStartWidth",
            ],
            borderLeft: [
              "borderLeftColor",
              "borderLeftStyle",
              "borderLeftWidth",
            ],
            borderRadius: [
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
              "borderTopLeftRadius",
              "borderTopRightRadius",
            ],
            borderRight: [
              "borderRightColor",
              "borderRightStyle",
              "borderRightWidth",
            ],
            borderStyle: [
              "borderBottomStyle",
              "borderLeftStyle",
              "borderRightStyle",
              "borderTopStyle",
            ],
            borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
            borderWidth: [
              "borderBottomWidth",
              "borderLeftWidth",
              "borderRightWidth",
              "borderTopWidth",
            ],
            columnRule: [
              "columnRuleColor",
              "columnRuleStyle",
              "columnRuleWidth",
            ],
            columns: ["columnCount", "columnWidth"],
            flex: ["flexBasis", "flexGrow", "flexShrink"],
            flexFlow: ["flexDirection", "flexWrap"],
            font: [
              "fontFamily",
              "fontFeatureSettings",
              "fontKerning",
              "fontLanguageOverride",
              "fontSize",
              "fontSizeAdjust",
              "fontStretch",
              "fontStyle",
              "fontVariant",
              "fontVariantAlternates",
              "fontVariantCaps",
              "fontVariantEastAsian",
              "fontVariantLigatures",
              "fontVariantNumeric",
              "fontVariantPosition",
              "fontWeight",
              "lineHeight",
            ],
            fontVariant: [
              "fontVariantAlternates",
              "fontVariantCaps",
              "fontVariantEastAsian",
              "fontVariantLigatures",
              "fontVariantNumeric",
              "fontVariantPosition",
            ],
            gap: ["columnGap", "rowGap"],
            grid: [
              "gridAutoColumns",
              "gridAutoFlow",
              "gridAutoRows",
              "gridTemplateAreas",
              "gridTemplateColumns",
              "gridTemplateRows",
            ],
            gridArea: [
              "gridColumnEnd",
              "gridColumnStart",
              "gridRowEnd",
              "gridRowStart",
            ],
            gridColumn: ["gridColumnEnd", "gridColumnStart"],
            gridColumnGap: ["columnGap"],
            gridGap: ["columnGap", "rowGap"],
            gridRow: ["gridRowEnd", "gridRowStart"],
            gridRowGap: ["rowGap"],
            gridTemplate: [
              "gridTemplateAreas",
              "gridTemplateColumns",
              "gridTemplateRows",
            ],
            listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
            margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
            marker: ["markerEnd", "markerMid", "markerStart"],
            mask: [
              "maskClip",
              "maskComposite",
              "maskImage",
              "maskMode",
              "maskOrigin",
              "maskPositionX",
              "maskPositionY",
              "maskRepeat",
              "maskSize",
            ],
            maskPosition: ["maskPositionX", "maskPositionY"],
            outline: ["outlineColor", "outlineStyle", "outlineWidth"],
            overflow: ["overflowX", "overflowY"],
            padding: [
              "paddingBottom",
              "paddingLeft",
              "paddingRight",
              "paddingTop",
            ],
            placeContent: ["alignContent", "justifyContent"],
            placeItems: ["alignItems", "justifyItems"],
            placeSelf: ["alignSelf", "justifySelf"],
            textDecoration: [
              "textDecorationColor",
              "textDecorationLine",
              "textDecorationStyle",
            ],
            textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
            transition: [
              "transitionDelay",
              "transitionDuration",
              "transitionProperty",
              "transitionTimingFunction",
            ],
            wordWrap: ["overflowWrap"],
          },
          Eo = {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageOutset: true,
            borderImageSlice: true,
            borderImageWidth: true,
            boxFlex: true,
            boxFlexGroup: true,
            boxOrdinalGroup: true,
            columnCount: true,
            columns: true,
            flex: true,
            flexGrow: true,
            flexPositive: true,
            flexShrink: true,
            flexNegative: true,
            flexOrder: true,
            gridArea: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowSpan: true,
            gridRowStart: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnSpan: true,
            gridColumnStart: true,
            fontWeight: true,
            lineClamp: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            tabSize: true,
            widows: true,
            zIndex: true,
            zoom: true,
            // SVG-related properties
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeDasharray: true,
            strokeDashoffset: true,
            strokeMiterlimit: true,
            strokeOpacity: true,
            strokeWidth: true,
          };
        function ov(e, t) {
          return e + t.charAt(0).toUpperCase() + t.substring(1);
        }
        var uv = ["Webkit", "ms", "Moz", "O"];
        Object.keys(Eo).forEach(function (e) {
          uv.forEach(function (t) {
            Eo[ov(t, e)] = Eo[e];
          });
        });
        function Hs(e, t, a) {
          var i = t == null || typeof t == "boolean" || t === "";
          return i
            ? ""
            : !a &&
              typeof t == "number" &&
              t !== 0 &&
              !(Eo.hasOwnProperty(e) && Eo[e])
            ? t + "px"
            : (Pa(t, e), ("" + t).trim());
        }
        var bo = /([A-Z])/g,
          iy = /^ms-/;
        function ly(e) {
          return e.replace(bo, "-$1").toLowerCase().replace(iy, "-ms-");
        }
        var sv = function () {};
        {
          var cv = /^(?:webkit|moz|o)[A-Z]/,
            fv = /^-ms-/,
            Du = /-(.)/g,
            wo = /;\s*$/,
            To = {},
            Ro = {},
            dv = false,
            Ff = false,
            $f = function (e) {
              return e.replace(Du, function (t, a) {
                return a.toUpperCase();
              });
            },
            Hf = function (e) {
              (To.hasOwnProperty(e) && To[e]) ||
                ((To[e] = true),
                S(
                  "Unsupported style property %s. Did you mean %s?",
                  e,
                  // As Andi Smith suggests
                  // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
                  // is converted to lowercase `ms`.
                  $f(e.replace(fv, "ms-"))
                ));
            },
            pv = function (e) {
              (To.hasOwnProperty(e) && To[e]) ||
                ((To[e] = true),
                S(
                  "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                  e,
                  e.charAt(0).toUpperCase() + e.slice(1)
                ));
            },
            vv = function (e, t) {
              (Ro.hasOwnProperty(t) && Ro[t]) ||
                ((Ro[t] = true),
                S(
                  `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                  e,
                  t.replace(wo, "")
                ));
            },
            hv = function (e, t) {
              dv ||
                ((dv = true),
                S(
                  "`NaN` is an invalid value for the `%s` css style property.",
                  e
                ));
            },
            oy = function (e, t) {
              Ff ||
                ((Ff = true),
                S(
                  "`Infinity` is an invalid value for the `%s` css style property.",
                  e
                ));
            };
          sv = function (e, t) {
            e.indexOf("-") > -1
              ? Hf(e)
              : cv.test(e)
              ? pv(e)
              : wo.test(t) && vv(e, t),
              typeof t == "number" &&
                (isNaN(t) ? hv(e, t) : isFinite(t) || oy(e, t));
          };
        }
        var uy = sv;
        function sy(e) {
          {
            var t = "",
              a = "";
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = e[i];
                if (o != null) {
                  var s = i.indexOf("--") === 0;
                  (t += a + (s ? i : ly(i)) + ":"),
                    (t += Hs(i, o, s)),
                    (a = ";");
                }
              }
            return t || null;
          }
        }
        function gv(e, t) {
          var a = e.style;
          for (var i in t)
            if (t.hasOwnProperty(i)) {
              var o = i.indexOf("--") === 0;
              o || uy(i, t[i]);
              var s = Hs(i, t[i], o);
              i === "float" && (i = "cssFloat"),
                o ? a.setProperty(i, s) : (a[i] = s);
            }
        }
        function cy(e) {
          return e == null || typeof e == "boolean" || e === "";
        }
        function ia(e) {
          var t = {};
          for (var a in e)
            for (var i = lv[a] || [a], o = 0; o < i.length; o++) t[i[o]] = a;
          return t;
        }
        function Nu(e, t) {
          {
            if (!t) return;
            var a = ia(e),
              i = ia(t),
              o = {};
            for (var s in a) {
              var d = a[s],
                g = i[s];
              if (g && d !== g) {
                var y = d + "," + g;
                if (o[y]) continue;
                (o[y] = true),
                  S(
                    "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                    cy(e[d]) ? "Removing" : "Updating",
                    d,
                    g
                  );
              }
            }
          }
        }
        var yv = {
            area: true,
            base: true,
            br: true,
            col: true,
            embed: true,
            hr: true,
            img: true,
            input: true,
            keygen: true,
            link: true,
            meta: true,
            param: true,
            source: true,
            track: true,
            wbr: true,
            // NOTE: menuitem's close tag should be omitted, but that causes problems.
          },
          mv = rt(
            {
              menuitem: true,
            },
            yv
          ),
          Sv = "__html";
        function Bs(e, t) {
          if (t) {
            if (
              mv[e] &&
              (t.children != null || t.dangerouslySetInnerHTML != null)
            )
              throw new Error(
                e +
                  " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
              );
            if (t.dangerouslySetInnerHTML != null) {
              if (t.children != null)
                throw new Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !(Sv in t.dangerouslySetInnerHTML)
              )
                throw new Error(
                  "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
                );
            }
            if (
              (!t.suppressContentEditableWarning &&
                t.contentEditable &&
                t.children != null &&
                S(
                  "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
                ),
              t.style != null && typeof t.style != "object")
            )
              throw new Error(
                "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
              );
          }
        }
        function fi(e, t) {
          if (e.indexOf("-") === -1) return typeof t.is == "string";
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var Vs = {
            // HTML
            accept: "accept",
            acceptcharset: "acceptCharset",
            "accept-charset": "acceptCharset",
            accesskey: "accessKey",
            action: "action",
            allowfullscreen: "allowFullScreen",
            alt: "alt",
            as: "as",
            async: "async",
            autocapitalize: "autoCapitalize",
            autocomplete: "autoComplete",
            autocorrect: "autoCorrect",
            autofocus: "autoFocus",
            autoplay: "autoPlay",
            autosave: "autoSave",
            capture: "capture",
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            challenge: "challenge",
            charset: "charSet",
            checked: "checked",
            children: "children",
            cite: "cite",
            class: "className",
            classid: "classID",
            classname: "className",
            cols: "cols",
            colspan: "colSpan",
            content: "content",
            contenteditable: "contentEditable",
            contextmenu: "contextMenu",
            controls: "controls",
            controlslist: "controlsList",
            coords: "coords",
            crossorigin: "crossOrigin",
            dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
            data: "data",
            datetime: "dateTime",
            default: "default",
            defaultchecked: "defaultChecked",
            defaultvalue: "defaultValue",
            defer: "defer",
            dir: "dir",
            disabled: "disabled",
            disablepictureinpicture: "disablePictureInPicture",
            disableremoteplayback: "disableRemotePlayback",
            download: "download",
            draggable: "draggable",
            enctype: "encType",
            enterkeyhint: "enterKeyHint",
            for: "htmlFor",
            form: "form",
            formmethod: "formMethod",
            formaction: "formAction",
            formenctype: "formEncType",
            formnovalidate: "formNoValidate",
            formtarget: "formTarget",
            frameborder: "frameBorder",
            headers: "headers",
            height: "height",
            hidden: "hidden",
            high: "high",
            href: "href",
            hreflang: "hrefLang",
            htmlfor: "htmlFor",
            httpequiv: "httpEquiv",
            "http-equiv": "httpEquiv",
            icon: "icon",
            id: "id",
            imagesizes: "imageSizes",
            imagesrcset: "imageSrcSet",
            innerhtml: "innerHTML",
            inputmode: "inputMode",
            integrity: "integrity",
            is: "is",
            itemid: "itemID",
            itemprop: "itemProp",
            itemref: "itemRef",
            itemscope: "itemScope",
            itemtype: "itemType",
            keyparams: "keyParams",
            keytype: "keyType",
            kind: "kind",
            label: "label",
            lang: "lang",
            list: "list",
            loop: "loop",
            low: "low",
            manifest: "manifest",
            marginwidth: "marginWidth",
            marginheight: "marginHeight",
            max: "max",
            maxlength: "maxLength",
            media: "media",
            mediagroup: "mediaGroup",
            method: "method",
            min: "min",
            minlength: "minLength",
            multiple: "multiple",
            muted: "muted",
            name: "name",
            nomodule: "noModule",
            nonce: "nonce",
            novalidate: "noValidate",
            open: "open",
            optimum: "optimum",
            pattern: "pattern",
            placeholder: "placeholder",
            playsinline: "playsInline",
            poster: "poster",
            preload: "preload",
            profile: "profile",
            radiogroup: "radioGroup",
            readonly: "readOnly",
            referrerpolicy: "referrerPolicy",
            rel: "rel",
            required: "required",
            reversed: "reversed",
            role: "role",
            rows: "rows",
            rowspan: "rowSpan",
            sandbox: "sandbox",
            scope: "scope",
            scoped: "scoped",
            scrolling: "scrolling",
            seamless: "seamless",
            selected: "selected",
            shape: "shape",
            size: "size",
            sizes: "sizes",
            span: "span",
            spellcheck: "spellCheck",
            src: "src",
            srcdoc: "srcDoc",
            srclang: "srcLang",
            srcset: "srcSet",
            start: "start",
            step: "step",
            style: "style",
            summary: "summary",
            tabindex: "tabIndex",
            target: "target",
            title: "title",
            type: "type",
            usemap: "useMap",
            value: "value",
            width: "width",
            wmode: "wmode",
            wrap: "wrap",
            // SVG
            about: "about",
            accentheight: "accentHeight",
            "accent-height": "accentHeight",
            accumulate: "accumulate",
            additive: "additive",
            alignmentbaseline: "alignmentBaseline",
            "alignment-baseline": "alignmentBaseline",
            allowreorder: "allowReorder",
            alphabetic: "alphabetic",
            amplitude: "amplitude",
            arabicform: "arabicForm",
            "arabic-form": "arabicForm",
            ascent: "ascent",
            attributename: "attributeName",
            attributetype: "attributeType",
            autoreverse: "autoReverse",
            azimuth: "azimuth",
            basefrequency: "baseFrequency",
            baselineshift: "baselineShift",
            "baseline-shift": "baselineShift",
            baseprofile: "baseProfile",
            bbox: "bbox",
            begin: "begin",
            bias: "bias",
            by: "by",
            calcmode: "calcMode",
            capheight: "capHeight",
            "cap-height": "capHeight",
            clip: "clip",
            clippath: "clipPath",
            "clip-path": "clipPath",
            clippathunits: "clipPathUnits",
            cliprule: "clipRule",
            "clip-rule": "clipRule",
            color: "color",
            colorinterpolation: "colorInterpolation",
            "color-interpolation": "colorInterpolation",
            colorinterpolationfilters: "colorInterpolationFilters",
            "color-interpolation-filters": "colorInterpolationFilters",
            colorprofile: "colorProfile",
            "color-profile": "colorProfile",
            colorrendering: "colorRendering",
            "color-rendering": "colorRendering",
            contentscripttype: "contentScriptType",
            contentstyletype: "contentStyleType",
            cursor: "cursor",
            cx: "cx",
            cy: "cy",
            d: "d",
            datatype: "datatype",
            decelerate: "decelerate",
            descent: "descent",
            diffuseconstant: "diffuseConstant",
            direction: "direction",
            display: "display",
            divisor: "divisor",
            dominantbaseline: "dominantBaseline",
            "dominant-baseline": "dominantBaseline",
            dur: "dur",
            dx: "dx",
            dy: "dy",
            edgemode: "edgeMode",
            elevation: "elevation",
            enablebackground: "enableBackground",
            "enable-background": "enableBackground",
            end: "end",
            exponent: "exponent",
            externalresourcesrequired: "externalResourcesRequired",
            fill: "fill",
            fillopacity: "fillOpacity",
            "fill-opacity": "fillOpacity",
            fillrule: "fillRule",
            "fill-rule": "fillRule",
            filter: "filter",
            filterres: "filterRes",
            filterunits: "filterUnits",
            floodopacity: "floodOpacity",
            "flood-opacity": "floodOpacity",
            floodcolor: "floodColor",
            "flood-color": "floodColor",
            focusable: "focusable",
            fontfamily: "fontFamily",
            "font-family": "fontFamily",
            fontsize: "fontSize",
            "font-size": "fontSize",
            fontsizeadjust: "fontSizeAdjust",
            "font-size-adjust": "fontSizeAdjust",
            fontstretch: "fontStretch",
            "font-stretch": "fontStretch",
            fontstyle: "fontStyle",
            "font-style": "fontStyle",
            fontvariant: "fontVariant",
            "font-variant": "fontVariant",
            fontweight: "fontWeight",
            "font-weight": "fontWeight",
            format: "format",
            from: "from",
            fx: "fx",
            fy: "fy",
            g1: "g1",
            g2: "g2",
            glyphname: "glyphName",
            "glyph-name": "glyphName",
            glyphorientationhorizontal: "glyphOrientationHorizontal",
            "glyph-orientation-horizontal": "glyphOrientationHorizontal",
            glyphorientationvertical: "glyphOrientationVertical",
            "glyph-orientation-vertical": "glyphOrientationVertical",
            glyphref: "glyphRef",
            gradienttransform: "gradientTransform",
            gradientunits: "gradientUnits",
            hanging: "hanging",
            horizadvx: "horizAdvX",
            "horiz-adv-x": "horizAdvX",
            horizoriginx: "horizOriginX",
            "horiz-origin-x": "horizOriginX",
            ideographic: "ideographic",
            imagerendering: "imageRendering",
            "image-rendering": "imageRendering",
            in2: "in2",
            in: "in",
            inlist: "inlist",
            intercept: "intercept",
            k1: "k1",
            k2: "k2",
            k3: "k3",
            k4: "k4",
            k: "k",
            kernelmatrix: "kernelMatrix",
            kernelunitlength: "kernelUnitLength",
            kerning: "kerning",
            keypoints: "keyPoints",
            keysplines: "keySplines",
            keytimes: "keyTimes",
            lengthadjust: "lengthAdjust",
            letterspacing: "letterSpacing",
            "letter-spacing": "letterSpacing",
            lightingcolor: "lightingColor",
            "lighting-color": "lightingColor",
            limitingconeangle: "limitingConeAngle",
            local: "local",
            markerend: "markerEnd",
            "marker-end": "markerEnd",
            markerheight: "markerHeight",
            markermid: "markerMid",
            "marker-mid": "markerMid",
            markerstart: "markerStart",
            "marker-start": "markerStart",
            markerunits: "markerUnits",
            markerwidth: "markerWidth",
            mask: "mask",
            maskcontentunits: "maskContentUnits",
            maskunits: "maskUnits",
            mathematical: "mathematical",
            mode: "mode",
            numoctaves: "numOctaves",
            offset: "offset",
            opacity: "opacity",
            operator: "operator",
            order: "order",
            orient: "orient",
            orientation: "orientation",
            origin: "origin",
            overflow: "overflow",
            overlineposition: "overlinePosition",
            "overline-position": "overlinePosition",
            overlinethickness: "overlineThickness",
            "overline-thickness": "overlineThickness",
            paintorder: "paintOrder",
            "paint-order": "paintOrder",
            panose1: "panose1",
            "panose-1": "panose1",
            pathlength: "pathLength",
            patterncontentunits: "patternContentUnits",
            patterntransform: "patternTransform",
            patternunits: "patternUnits",
            pointerevents: "pointerEvents",
            "pointer-events": "pointerEvents",
            points: "points",
            pointsatx: "pointsAtX",
            pointsaty: "pointsAtY",
            pointsatz: "pointsAtZ",
            prefix: "prefix",
            preservealpha: "preserveAlpha",
            preserveaspectratio: "preserveAspectRatio",
            primitiveunits: "primitiveUnits",
            property: "property",
            r: "r",
            radius: "radius",
            refx: "refX",
            refy: "refY",
            renderingintent: "renderingIntent",
            "rendering-intent": "renderingIntent",
            repeatcount: "repeatCount",
            repeatdur: "repeatDur",
            requiredextensions: "requiredExtensions",
            requiredfeatures: "requiredFeatures",
            resource: "resource",
            restart: "restart",
            result: "result",
            results: "results",
            rotate: "rotate",
            rx: "rx",
            ry: "ry",
            scale: "scale",
            security: "security",
            seed: "seed",
            shaperendering: "shapeRendering",
            "shape-rendering": "shapeRendering",
            slope: "slope",
            spacing: "spacing",
            specularconstant: "specularConstant",
            specularexponent: "specularExponent",
            speed: "speed",
            spreadmethod: "spreadMethod",
            startoffset: "startOffset",
            stddeviation: "stdDeviation",
            stemh: "stemh",
            stemv: "stemv",
            stitchtiles: "stitchTiles",
            stopcolor: "stopColor",
            "stop-color": "stopColor",
            stopopacity: "stopOpacity",
            "stop-opacity": "stopOpacity",
            strikethroughposition: "strikethroughPosition",
            "strikethrough-position": "strikethroughPosition",
            strikethroughthickness: "strikethroughThickness",
            "strikethrough-thickness": "strikethroughThickness",
            string: "string",
            stroke: "stroke",
            strokedasharray: "strokeDasharray",
            "stroke-dasharray": "strokeDasharray",
            strokedashoffset: "strokeDashoffset",
            "stroke-dashoffset": "strokeDashoffset",
            strokelinecap: "strokeLinecap",
            "stroke-linecap": "strokeLinecap",
            strokelinejoin: "strokeLinejoin",
            "stroke-linejoin": "strokeLinejoin",
            strokemiterlimit: "strokeMiterlimit",
            "stroke-miterlimit": "strokeMiterlimit",
            strokewidth: "strokeWidth",
            "stroke-width": "strokeWidth",
            strokeopacity: "strokeOpacity",
            "stroke-opacity": "strokeOpacity",
            suppresscontenteditablewarning: "suppressContentEditableWarning",
            suppresshydrationwarning: "suppressHydrationWarning",
            surfacescale: "surfaceScale",
            systemlanguage: "systemLanguage",
            tablevalues: "tableValues",
            targetx: "targetX",
            targety: "targetY",
            textanchor: "textAnchor",
            "text-anchor": "textAnchor",
            textdecoration: "textDecoration",
            "text-decoration": "textDecoration",
            textlength: "textLength",
            textrendering: "textRendering",
            "text-rendering": "textRendering",
            to: "to",
            transform: "transform",
            typeof: "typeof",
            u1: "u1",
            u2: "u2",
            underlineposition: "underlinePosition",
            "underline-position": "underlinePosition",
            underlinethickness: "underlineThickness",
            "underline-thickness": "underlineThickness",
            unicode: "unicode",
            unicodebidi: "unicodeBidi",
            "unicode-bidi": "unicodeBidi",
            unicoderange: "unicodeRange",
            "unicode-range": "unicodeRange",
            unitsperem: "unitsPerEm",
            "units-per-em": "unitsPerEm",
            unselectable: "unselectable",
            valphabetic: "vAlphabetic",
            "v-alphabetic": "vAlphabetic",
            values: "values",
            vectoreffect: "vectorEffect",
            "vector-effect": "vectorEffect",
            version: "version",
            vertadvy: "vertAdvY",
            "vert-adv-y": "vertAdvY",
            vertoriginx: "vertOriginX",
            "vert-origin-x": "vertOriginX",
            vertoriginy: "vertOriginY",
            "vert-origin-y": "vertOriginY",
            vhanging: "vHanging",
            "v-hanging": "vHanging",
            videographic: "vIdeographic",
            "v-ideographic": "vIdeographic",
            viewbox: "viewBox",
            viewtarget: "viewTarget",
            visibility: "visibility",
            vmathematical: "vMathematical",
            "v-mathematical": "vMathematical",
            vocab: "vocab",
            widths: "widths",
            wordspacing: "wordSpacing",
            "word-spacing": "wordSpacing",
            writingmode: "writingMode",
            "writing-mode": "writingMode",
            x1: "x1",
            x2: "x2",
            x: "x",
            xchannelselector: "xChannelSelector",
            xheight: "xHeight",
            "x-height": "xHeight",
            xlinkactuate: "xlinkActuate",
            "xlink:actuate": "xlinkActuate",
            xlinkarcrole: "xlinkArcrole",
            "xlink:arcrole": "xlinkArcrole",
            xlinkhref: "xlinkHref",
            "xlink:href": "xlinkHref",
            xlinkrole: "xlinkRole",
            "xlink:role": "xlinkRole",
            xlinkshow: "xlinkShow",
            "xlink:show": "xlinkShow",
            xlinktitle: "xlinkTitle",
            "xlink:title": "xlinkTitle",
            xlinktype: "xlinkType",
            "xlink:type": "xlinkType",
            xmlbase: "xmlBase",
            "xml:base": "xmlBase",
            xmllang: "xmlLang",
            "xml:lang": "xmlLang",
            xmlns: "xmlns",
            "xml:space": "xmlSpace",
            xmlnsxlink: "xmlnsXlink",
            "xmlns:xlink": "xmlnsXlink",
            xmlspace: "xmlSpace",
            y1: "y1",
            y2: "y2",
            y: "y",
            ychannelselector: "yChannelSelector",
            z: "z",
            zoomandpan: "zoomAndPan",
          },
          xv = {
            "aria-current": 0,
            // state
            "aria-description": 0,
            "aria-details": 0,
            "aria-disabled": 0,
            // state
            "aria-hidden": 0,
            // state
            "aria-invalid": 0,
            // state
            "aria-keyshortcuts": 0,
            "aria-label": 0,
            "aria-roledescription": 0,
            // Widget Attributes
            "aria-autocomplete": 0,
            "aria-checked": 0,
            "aria-expanded": 0,
            "aria-haspopup": 0,
            "aria-level": 0,
            "aria-modal": 0,
            "aria-multiline": 0,
            "aria-multiselectable": 0,
            "aria-orientation": 0,
            "aria-placeholder": 0,
            "aria-pressed": 0,
            "aria-readonly": 0,
            "aria-required": 0,
            "aria-selected": 0,
            "aria-sort": 0,
            "aria-valuemax": 0,
            "aria-valuemin": 0,
            "aria-valuenow": 0,
            "aria-valuetext": 0,
            // Live Region Attributes
            "aria-atomic": 0,
            "aria-busy": 0,
            "aria-live": 0,
            "aria-relevant": 0,
            // Drag-and-Drop Attributes
            "aria-dropeffect": 0,
            "aria-grabbed": 0,
            // Relationship Attributes
            "aria-activedescendant": 0,
            "aria-colcount": 0,
            "aria-colindex": 0,
            "aria-colspan": 0,
            "aria-controls": 0,
            "aria-describedby": 0,
            "aria-errormessage": 0,
            "aria-flowto": 0,
            "aria-labelledby": 0,
            "aria-owns": 0,
            "aria-posinset": 0,
            "aria-rowcount": 0,
            "aria-rowindex": 0,
            "aria-rowspan": 0,
            "aria-setsize": 0,
          },
          La = {},
          Bf = new RegExp("^(aria)-[" + ke + "]*$"),
          _u = new RegExp("^(aria)[A-Z][" + ke + "]*$");
        function Vf(e, t) {
          {
            if (Xn.call(La, t) && La[t]) return true;
            if (_u.test(t)) {
              var a = "aria-" + t.slice(4).toLowerCase(),
                i = xv.hasOwnProperty(a) ? a : null;
              if (i == null)
                return (
                  S(
                    "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
                    t
                  ),
                  (La[t] = true),
                  true
                );
              if (t !== i)
                return (
                  S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i),
                  (La[t] = true),
                  true
                );
            }
            if (Bf.test(t)) {
              var o = t.toLowerCase(),
                s = xv.hasOwnProperty(o) ? o : null;
              if (s == null) return (La[t] = true), false;
              if (t !== s)
                return (
                  S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s),
                  (La[t] = true),
                  true
                );
            }
          }
          return true;
        }
        function Cv(e, t) {
          {
            var a = [];
            for (var i in t) {
              var o = Vf(e, i);
              o || a.push(i);
            }
            var s = a
              .map(function (d) {
                return "`" + d + "`";
              })
              .join(", ");
            a.length === 1
              ? S(
                  "Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
                  s,
                  e
                )
              : a.length > 1 &&
                S(
                  "Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
                  s,
                  e
                );
          }
        }
        function Ps(e, t) {
          fi(e, t) || Cv(e, t);
        }
        var kl = false;
        function Pf(e, t) {
          {
            if (e !== "input" && e !== "textarea" && e !== "select") return;
            t != null &&
              t.value === null &&
              !kl &&
              ((kl = true),
              e === "select" && t.multiple
                ? S(
                    "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
                    e
                  )
                : S(
                    "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
                    e
                  ));
          }
        }
        var Yf = function () {};
        {
          var kn = {},
            If = /^on./,
            Ev = /^on[^A-Z]/,
            bv = new RegExp("^(aria)-[" + ke + "]*$"),
            wv = new RegExp("^(aria)[A-Z][" + ke + "]*$");
          Yf = function (e, t, a, i) {
            if (Xn.call(kn, t) && kn[t]) return true;
            var o = t.toLowerCase();
            if (o === "onfocusin" || o === "onfocusout")
              return (
                S(
                  "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
                ),
                (kn[t] = true),
                true
              );
            if (i != null) {
              var s = i.registrationNameDependencies,
                d = i.possibleRegistrationNames;
              if (s.hasOwnProperty(t)) return true;
              var g = d.hasOwnProperty(o) ? d[o] : null;
              if (g != null)
                return (
                  S(
                    "Invalid event handler property `%s`. Did you mean `%s`?",
                    t,
                    g
                  ),
                  (kn[t] = true),
                  true
                );
              if (If.test(t))
                return (
                  S(
                    "Unknown event handler property `%s`. It will be ignored.",
                    t
                  ),
                  (kn[t] = true),
                  true
                );
            } else if (If.test(t))
              return (
                Ev.test(t) &&
                  S(
                    "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
                    t
                  ),
                (kn[t] = true),
                true
              );
            if (bv.test(t) || wv.test(t)) return true;
            if (o === "innerhtml")
              return (
                S(
                  "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
                ),
                (kn[t] = true),
                true
              );
            if (o === "aria")
              return (
                S(
                  "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
                ),
                (kn[t] = true),
                true
              );
            if (
              o === "is" &&
              a !== null &&
              a !== void 0 &&
              typeof a != "string"
            )
              return (
                S(
                  "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
                  typeof a
                ),
                (kn[t] = true),
                true
              );
            if (typeof a == "number" && isNaN(a))
              return (
                S(
                  "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
                  t
                ),
                (kn[t] = true),
                true
              );
            var y = $r(t),
              C = y !== null && y.type === Ya;
            if (Vs.hasOwnProperty(o)) {
              var E = Vs[o];
              if (E !== t)
                return (
                  S("Invalid DOM property `%s`. Did you mean `%s`?", t, E),
                  (kn[t] = true),
                  true
                );
            } else if (!C && t !== o)
              return (
                S(
                  "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
                  t,
                  o
                ),
                (kn[t] = true),
                true
              );
            return typeof a == "boolean" && Cr(t, a, y, false)
              ? (a
                  ? S(
                      'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                      a,
                      t,
                      t,
                      a,
                      t
                    )
                  : S(
                      'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                      a,
                      t,
                      t,
                      a,
                      t,
                      t,
                      t
                    ),
                (kn[t] = true),
                true)
              : C
              ? true
              : Cr(t, a, y, false)
              ? ((kn[t] = true), false)
              : ((a === "false" || a === "true") &&
                  y !== null &&
                  y.type === ln &&
                  (S(
                    "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
                    a,
                    t,
                    a === "false"
                      ? "The browser will interpret it as a truthy value."
                      : 'Although this works, it will not work as expected if you pass the string "false".',
                    t,
                    a
                  ),
                  (kn[t] = true)),
                true);
          };
        }
        var Tv = function (e, t, a) {
          {
            var i = [];
            for (var o in t) {
              var s = Yf(e, o, t[o], a);
              s || i.push(o);
            }
            var d = i
              .map(function (g) {
                return "`" + g + "`";
              })
              .join(", ");
            i.length === 1
              ? S(
                  "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
                  d,
                  e
                )
              : i.length > 1 &&
                S(
                  "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
                  d,
                  e
                );
          }
        };
        function Rv(e, t, a) {
          fi(e, t) || Tv(e, t, a);
        }
        var di = 1,
          zu = 2,
          Dl = 4,
          fy = di | zu | Dl,
          Mu = null;
        function Lu(e) {
          Mu !== null &&
            S(
              "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
            ),
            (Mu = e);
        }
        function dy() {
          Mu === null &&
            S(
              "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
            ),
            (Mu = null);
        }
        function kv(e) {
          return e === Mu;
        }
        function Ys(e) {
          var t = e.target || e.srcElement || window;
          return (
            t.correspondingUseElement && (t = t.correspondingUseElement),
            t.nodeType === ci ? t.parentNode : t
          );
        }
        var zt = null,
          Yi = null,
          pi = null;
        function ko(e) {
          var t = Jo(e);
          if (t) {
            if (typeof zt != "function")
              throw new Error(
                "setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue."
              );
            var a = t.stateNode;
            if (a) {
              var i = kh(a);
              zt(t.stateNode, t.type, i);
            }
          }
        }
        function Dv(e) {
          zt = e;
        }
        function Is(e) {
          Yi ? (pi ? pi.push(e) : (pi = [e])) : (Yi = e);
        }
        function Ou() {
          return Yi !== null || pi !== null;
        }
        function ju() {
          if (Yi) {
            var e = Yi,
              t = pi;
            if (((Yi = null), (pi = null), ko(e), t))
              for (var a = 0; a < t.length; a++) ko(t[a]);
          }
        }
        var Nl = function (e, t) {
            return e(t);
          },
          Qf = function () {},
          Gf = false;
        function py() {
          var e = Ou();
          e && (Qf(), ju());
        }
        function Wf(e, t, a) {
          if (Gf) return e(t, a);
          Gf = true;
          try {
            return Nl(e, t, a);
          } finally {
            (Gf = false), py();
          }
        }
        function Qs(e, t, a) {
          (Nl = e), (Qf = a);
        }
        function Gs(e) {
          return (
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          );
        }
        function Xf(e, t, a) {
          switch (e) {
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
              return !!(a.disabled && Gs(t));
            default:
              return false;
          }
        }
        function _l(e, t) {
          var a = e.stateNode;
          if (a === null) return null;
          var i = kh(a);
          if (i === null) return null;
          var o = i[t];
          if (Xf(t, e.type, i)) return null;
          if (o && typeof o != "function")
            throw new Error(
              "Expected `" +
                t +
                "` listener to be a function, instead got a value of `" +
                typeof o +
                "` type."
            );
          return o;
        }
        var Au = false;
        if (bn)
          try {
            var zl = {};
            Object.defineProperty(zl, "passive", {
              get: function () {
                Au = true;
              },
            }),
              window.addEventListener("test", zl, zl),
              window.removeEventListener("test", zl, zl);
          } catch {
            Au = false;
          }
        function Nv(e, t, a, i, o, s, d, g, y) {
          var C = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(a, C);
          } catch (E) {
            this.onError(E);
          }
        }
        var qf = Nv;
        if (
          typeof window < "u" &&
          typeof window.dispatchEvent == "function" &&
          typeof document < "u" &&
          typeof document.createEvent == "function"
        ) {
          var Kf = document.createElement("react");
          qf = function (t, a, i, o, s, d, g, y, C) {
            if (typeof document > "u" || document === null)
              throw new Error(
                "The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous."
              );
            var E = document.createEvent("Event"),
              M = false,
              _ = true,
              B = window.event,
              V = Object.getOwnPropertyDescriptor(window, "event");
            function I() {
              Kf.removeEventListener(Q, _e, false),
                typeof window.event < "u" &&
                  window.hasOwnProperty("event") &&
                  (window.event = B);
            }
            var he = Array.prototype.slice.call(arguments, 3);
            function _e() {
              (M = true), I(), a.apply(i, he), (_ = false);
            }
            var Te,
              st = false,
              it = false;
            function F($) {
              if (
                ((Te = $.error),
                (st = true),
                Te === null && $.colno === 0 && $.lineno === 0 && (it = true),
                $.defaultPrevented && Te != null && typeof Te == "object")
              )
                try {
                  Te._suppressLogging = true;
                } catch {}
            }
            var Q = "react-" + (t || "invokeguardedcallback");
            if (
              (window.addEventListener("error", F),
              Kf.addEventListener(Q, _e, false),
              E.initEvent(Q, false, false),
              Kf.dispatchEvent(E),
              V && Object.defineProperty(window, "event", V),
              M &&
                _ &&
                (st
                  ? it &&
                    (Te = new Error(
                      "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information."
                    ))
                  : (Te = new Error(
                      `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`
                    )),
                this.onError(Te)),
              window.removeEventListener("error", F),
              !M)
            )
              return I(), Nv.apply(this, arguments);
          };
        }
        var vy = qf,
          Ii = false,
          Oa = null,
          Uu = false,
          Qi = null,
          Qa = {
            onError: function (e) {
              (Ii = true), (Oa = e);
            },
          };
        function Ml(e, t, a, i, o, s, d, g, y) {
          (Ii = false), (Oa = null), vy.apply(Qa, arguments);
        }
        function vi(e, t, a, i, o, s, d, g, y) {
          if ((Ml.apply(this, arguments), Ii)) {
            var C = Jf();
            Uu || ((Uu = true), (Qi = C));
          }
        }
        function Zf() {
          if (Uu) {
            var e = Qi;
            throw ((Uu = false), (Qi = null), e);
          }
        }
        function hy() {
          return Ii;
        }
        function Jf() {
          if (Ii) {
            var e = Oa;
            return (Ii = false), (Oa = null), e;
          } else
            throw new Error(
              "clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue."
            );
        }
        function la(e) {
          return e._reactInternals;
        }
        function Fu(e) {
          return e._reactInternals !== void 0;
        }
        function Do(e, t) {
          e._reactInternals = t;
        }
        var De =
            /*                      */
            0,
          Gi =
            /*                */
            1,
          At =
            /*                    */
            2,
          Xe =
            /*                       */
            4,
          St =
            /*                */
            16,
          Ct =
            /*                 */
            32,
          Ga =
            /*                     */
            64,
          Be =
            /*                   */
            128,
          Kt =
            /*            */
            256,
          br =
            /*                          */
            512,
          oa =
            /*                     */
            1024,
          Yt =
            /*                      */
            2048,
          ua =
            /*                    */
            4096,
          Wi =
            /*                   */
            8192,
          $u =
            /*             */
            16384,
          Ws = Yt | Xe | Ga | br | oa | $u,
          _v =
            /*               */
            32767,
          Vr =
            /*                   */
            32768,
          Dn =
            /*                */
            65536,
          Hu =
            /* */
            131072,
          ed =
            /*                       */
            1048576,
          td =
            /*                    */
            2097152,
          wr =
            /*                 */
            4194304,
          Xi =
            /*                */
            8388608,
          Tr =
            /*               */
            16777216,
          Ll =
            /*              */
            33554432,
          No =
            // TODO: Remove Update flag from before mutation phase by re-landing Visibility
            // flag logic (see #20043)
            Xe | oa | 0,
          Rr = At | Xe | St | Ct | br | ua | Wi,
          Jn = Xe | Ga | br | Wi,
          sa = Yt | St,
          Un = wr | Xi | td,
          hi = p.ReactCurrentOwner;
        function Pr(e) {
          var t = e,
            a = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            var i = t;
            do
              (t = i),
                (t.flags & (At | ua)) !== De && (a = t.return),
                (i = t.return);
            while (i);
          }
          return t.tag === U ? a : null;
        }
        function nd(e) {
          if (e.tag === Fe) {
            var t = e.memoizedState;
            if (t === null) {
              var a = e.alternate;
              a !== null && (t = a.memoizedState);
            }
            if (t !== null) return t.dehydrated;
          }
          return null;
        }
        function Xs(e) {
          return e.tag === U ? e.stateNode.containerInfo : null;
        }
        function rd(e) {
          return Pr(e) === e;
        }
        function Yr(e) {
          {
            var t = hi.current;
            if (t !== null && t.tag === L) {
              var a = t,
                i = a.stateNode;
              i._warnedAboutRefsInRender ||
                S(
                  "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
                  We2(a) || "A component"
                ),
                (i._warnedAboutRefsInRender = true);
            }
          }
          var o = la(e);
          return o ? Pr(o) === o : false;
        }
        function kr(e) {
          if (Pr(e) !== e)
            throw new Error("Unable to find node on an unmounted component.");
        }
        function Ut(e) {
          var t = e.alternate;
          if (!t) {
            var a = Pr(e);
            if (a === null)
              throw new Error("Unable to find node on an unmounted component.");
            return a !== e ? null : e;
          }
          for (var i = e, o = t; ; ) {
            var s = i.return;
            if (s === null) break;
            var d = s.alternate;
            if (d === null) {
              var g = s.return;
              if (g !== null) {
                i = o = g;
                continue;
              }
              break;
            }
            if (s.child === d.child) {
              for (var y = s.child; y; ) {
                if (y === i) return kr(s), e;
                if (y === o) return kr(s), t;
                y = y.sibling;
              }
              throw new Error("Unable to find node on an unmounted component.");
            }
            if (i.return !== o.return) (i = s), (o = d);
            else {
              for (var C = false, E = s.child; E; ) {
                if (E === i) {
                  (C = true), (i = s), (o = d);
                  break;
                }
                if (E === o) {
                  (C = true), (o = s), (i = d);
                  break;
                }
                E = E.sibling;
              }
              if (!C) {
                for (E = d.child; E; ) {
                  if (E === i) {
                    (C = true), (i = d), (o = s);
                    break;
                  }
                  if (E === o) {
                    (C = true), (o = d), (i = s);
                    break;
                  }
                  E = E.sibling;
                }
                if (!C)
                  throw new Error(
                    "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
                  );
              }
            }
            if (i.alternate !== o)
              throw new Error(
                "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
              );
          }
          if (i.tag !== U)
            throw new Error("Unable to find node on an unmounted component.");
          return i.stateNode.current === i ? e : t;
        }
        function ca(e) {
          var t = Ut(e);
          return t !== null ? ad(t) : null;
        }
        function ad(e) {
          if (e.tag === X || e.tag === le) return e;
          for (var t = e.child; t !== null; ) {
            var a = ad(t);
            if (a !== null) return a;
            t = t.sibling;
          }
          return null;
        }
        function zv(e) {
          var t = Ut(e);
          return t !== null ? qs(t) : null;
        }
        function qs(e) {
          if (e.tag === X || e.tag === le) return e;
          for (var t = e.child; t !== null; ) {
            if (t.tag !== W) {
              var a = qs(t);
              if (a !== null) return a;
            }
            t = t.sibling;
          }
          return null;
        }
        var Ks = v.unstable_scheduleCallback,
          Mv = v.unstable_cancelCallback,
          Zs = v.unstable_shouldYield,
          Lv = v.unstable_requestPaint,
          Gt = v.unstable_now,
          id = v.unstable_getCurrentPriorityLevel,
          Js = v.unstable_ImmediatePriority,
          Ir = v.unstable_UserBlockingPriority,
          Wa = v.unstable_NormalPriority,
          ec = v.unstable_LowPriority,
          qi = v.unstable_IdlePriority,
          ld = v.unstable_yieldValue,
          od = v.unstable_setDisableYieldValue,
          Ki = null,
          Nn = null,
          oe = null,
          nn = false,
          Fn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
        function ud(e) {
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return false;
          var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (t.isDisabled) return true;
          if (!t.supportsFiber)
            return (
              S(
                "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"
              ),
              true
            );
          try {
            Ba &&
              (e = rt({}, e, {
                getLaneLabelMap: Ji,
                injectProfilingHooks: yi,
              })),
              (Ki = t.inject(e)),
              (Nn = t);
          } catch (a) {
            S("React instrumentation encountered an error: %s.", a);
          }
          return !!t.checkDCE;
        }
        function Ov(e, t) {
          if (Nn && typeof Nn.onScheduleFiberRoot == "function")
            try {
              Nn.onScheduleFiberRoot(Ki, e, t);
            } catch (a) {
              nn ||
                ((nn = true),
                S("React instrumentation encountered an error: %s", a));
            }
        }
        function gi(e, t) {
          if (Nn && typeof Nn.onCommitFiberRoot == "function")
            try {
              var a = (e.current.flags & Be) === Be;
              if (vn) {
                var i;
                switch (t) {
                  case er:
                    i = Js;
                    break;
                  case $n:
                    i = Ir;
                    break;
                  case Si:
                    i = Wa;
                    break;
                  case Xu:
                    i = qi;
                    break;
                  default:
                    i = Wa;
                    break;
                }
                Nn.onCommitFiberRoot(Ki, e, i, a);
              }
            } catch (o) {
              nn ||
                ((nn = true),
                S("React instrumentation encountered an error: %s", o));
            }
        }
        function Zi(e) {
          if (Nn && typeof Nn.onPostCommitFiberRoot == "function")
            try {
              Nn.onPostCommitFiberRoot(Ki, e);
            } catch (t) {
              nn ||
                ((nn = true),
                S("React instrumentation encountered an error: %s", t));
            }
        }
        function sd(e) {
          if (Nn && typeof Nn.onCommitFiberUnmount == "function")
            try {
              Nn.onCommitFiberUnmount(Ki, e);
            } catch (t) {
              nn ||
                ((nn = true),
                S("React instrumentation encountered an error: %s", t));
            }
        }
        function gn(e) {
          if (
            (typeof ld == "function" && (od(e), b(e)),
            Nn && typeof Nn.setStrictMode == "function")
          )
            try {
              Nn.setStrictMode(Ki, e);
            } catch (t) {
              nn ||
                ((nn = true),
                S("React instrumentation encountered an error: %s", t));
            }
        }
        function yi(e) {
          oe = e;
        }
        function Ji() {
          {
            for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ft; a++) {
              var i = gy(t);
              e.set(t, i), (t *= 2);
            }
            return e;
          }
        }
        function tc(e) {
          oe !== null &&
            typeof oe.markCommitStarted == "function" &&
            oe.markCommitStarted(e);
        }
        function cd() {
          oe !== null &&
            typeof oe.markCommitStopped == "function" &&
            oe.markCommitStopped();
        }
        function el(e) {
          oe !== null &&
            typeof oe.markComponentRenderStarted == "function" &&
            oe.markComponentRenderStarted(e);
        }
        function Ol() {
          oe !== null &&
            typeof oe.markComponentRenderStopped == "function" &&
            oe.markComponentRenderStopped();
        }
        function jv(e) {
          oe !== null &&
            typeof oe.markComponentPassiveEffectMountStarted == "function" &&
            oe.markComponentPassiveEffectMountStarted(e);
        }
        function fd() {
          oe !== null &&
            typeof oe.markComponentPassiveEffectMountStopped == "function" &&
            oe.markComponentPassiveEffectMountStopped();
        }
        function nc(e) {
          oe !== null &&
            typeof oe.markComponentPassiveEffectUnmountStarted == "function" &&
            oe.markComponentPassiveEffectUnmountStarted(e);
        }
        function Av() {
          oe !== null &&
            typeof oe.markComponentPassiveEffectUnmountStopped == "function" &&
            oe.markComponentPassiveEffectUnmountStopped();
        }
        function Uv(e) {
          oe !== null &&
            typeof oe.markComponentLayoutEffectMountStarted == "function" &&
            oe.markComponentLayoutEffectMountStarted(e);
        }
        function Fv() {
          oe !== null &&
            typeof oe.markComponentLayoutEffectMountStopped == "function" &&
            oe.markComponentLayoutEffectMountStopped();
        }
        function rc(e) {
          oe !== null &&
            typeof oe.markComponentLayoutEffectUnmountStarted == "function" &&
            oe.markComponentLayoutEffectUnmountStarted(e);
        }
        function _o() {
          oe !== null &&
            typeof oe.markComponentLayoutEffectUnmountStopped == "function" &&
            oe.markComponentLayoutEffectUnmountStopped();
        }
        function ac(e, t, a) {
          oe !== null &&
            typeof oe.markComponentErrored == "function" &&
            oe.markComponentErrored(e, t, a);
        }
        function $v(e, t, a) {
          oe !== null &&
            typeof oe.markComponentSuspended == "function" &&
            oe.markComponentSuspended(e, t, a);
        }
        function Hv(e) {
          oe !== null &&
            typeof oe.markLayoutEffectsStarted == "function" &&
            oe.markLayoutEffectsStarted(e);
        }
        function zo() {
          oe !== null &&
            typeof oe.markLayoutEffectsStopped == "function" &&
            oe.markLayoutEffectsStopped();
        }
        function Bv(e) {
          oe !== null &&
            typeof oe.markPassiveEffectsStarted == "function" &&
            oe.markPassiveEffectsStarted(e);
        }
        function Bu() {
          oe !== null &&
            typeof oe.markPassiveEffectsStopped == "function" &&
            oe.markPassiveEffectsStopped();
        }
        function ja(e) {
          oe !== null &&
            typeof oe.markRenderStarted == "function" &&
            oe.markRenderStarted(e);
        }
        function Vu() {
          oe !== null &&
            typeof oe.markRenderYielded == "function" &&
            oe.markRenderYielded();
        }
        function Mo() {
          oe !== null &&
            typeof oe.markRenderStopped == "function" &&
            oe.markRenderStopped();
        }
        function jl(e) {
          oe !== null &&
            typeof oe.markRenderScheduled == "function" &&
            oe.markRenderScheduled(e);
        }
        function dd(e, t) {
          oe !== null &&
            typeof oe.markForceUpdateScheduled == "function" &&
            oe.markForceUpdateScheduled(e, t);
        }
        function tl(e, t) {
          oe !== null &&
            typeof oe.markStateUpdateScheduled == "function" &&
            oe.markStateUpdateScheduled(e, t);
        }
        var Le =
            /*                         */
            0,
          nt =
            /*                 */
            1,
          je =
            /*                    */
            2,
          Wt =
            /*               */
            8,
          fa =
            /*              */
            16,
          ic = Math.clz32 ? Math.clz32 : Al,
          lc = Math.log,
          pd = Math.LN2;
        function Al(e) {
          var t = e >>> 0;
          return t === 0 ? 32 : (31 - ((lc(t) / pd) | 0)) | 0;
        }
        var Ft = 31,
          G =
            /*                        */
            0,
          ot =
            /*                          */
            0,
          Ae2 =
            /*                        */
            1,
          Xa =
            /*    */
            2,
          Qr =
            /*             */
            4,
          Ul =
            /*            */
            8,
          $t =
            /*                     */
            16,
          Fl =
            /*                */
            32,
          nl =
            /*                       */
            4194240,
          $l =
            /*                        */
            64,
          da =
            /*                        */
            128,
          Dr =
            /*                        */
            256,
          Hl =
            /*                        */
            512,
          Pu =
            /*                        */
            1024,
          Yu =
            /*                        */
            2048,
          oc =
            /*                        */
            4096,
          uc =
            /*                        */
            8192,
          sc =
            /*                        */
            16384,
          cc =
            /*                       */
            32768,
          fc =
            /*                       */
            65536,
          dc =
            /*                       */
            131072,
          pc =
            /*                       */
            262144,
          vc =
            /*                       */
            524288,
          Bl =
            /*                       */
            1048576,
          hc =
            /*                       */
            2097152,
          Vl =
            /*                            */
            130023424,
          mi =
            /*                             */
            4194304,
          gc =
            /*                             */
            8388608,
          Iu =
            /*                             */
            16777216,
          yc =
            /*                             */
            33554432,
          mc =
            /*                             */
            67108864,
          vd = mi,
          Lo =
            /*          */
            134217728,
          Sc =
            /*                          */
            268435455,
          Oo =
            /*               */
            268435456,
          rl =
            /*                        */
            536870912,
          Nr =
            /*                   */
            1073741824;
        function gy(e) {
          {
            if (e & Ae2) return "Sync";
            if (e & Xa) return "InputContinuousHydration";
            if (e & Qr) return "InputContinuous";
            if (e & Ul) return "DefaultHydration";
            if (e & $t) return "Default";
            if (e & Fl) return "TransitionHydration";
            if (e & nl) return "Transition";
            if (e & Vl) return "Retry";
            if (e & Lo) return "SelectiveHydration";
            if (e & Oo) return "IdleHydration";
            if (e & rl) return "Idle";
            if (e & Nr) return "Offscreen";
          }
        }
        var Mt = -1,
          xc = $l,
          Cc = mi;
        function jo(e) {
          switch (sn(e)) {
            case Ae2:
              return Ae2;
            case Xa:
              return Xa;
            case Qr:
              return Qr;
            case Ul:
              return Ul;
            case $t:
              return $t;
            case Fl:
              return Fl;
            case $l:
            case da:
            case Dr:
            case Hl:
            case Pu:
            case Yu:
            case oc:
            case uc:
            case sc:
            case cc:
            case fc:
            case dc:
            case pc:
            case vc:
            case Bl:
            case hc:
              return e & nl;
            case mi:
            case gc:
            case Iu:
            case yc:
            case mc:
              return e & Vl;
            case Lo:
              return Lo;
            case Oo:
              return Oo;
            case rl:
              return rl;
            case Nr:
              return Nr;
            default:
              return (
                S("Should have found matching lanes. This is a bug in React."),
                e
              );
          }
        }
        function Qu(e, t) {
          var a = e.pendingLanes;
          if (a === G) return G;
          var i = G,
            o = e.suspendedLanes,
            s = e.pingedLanes,
            d = a & Sc;
          if (d !== G) {
            var g = d & ~o;
            if (g !== G) i = jo(g);
            else {
              var y = d & s;
              y !== G && (i = jo(y));
            }
          } else {
            var C = a & ~o;
            C !== G ? (i = jo(C)) : s !== G && (i = jo(s));
          }
          if (i === G) return G;
          if (
            t !== G &&
            t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
            // bother waiting until the root is complete.
            (t & o) === G
          ) {
            var E = sn(i),
              M = sn(t);
            if (
              // Tests whether the next lane is equal or lower priority than the wip
              // one. This works because the bits decrease in priority as you go left.
              E >= M || // Default priority updates should not interrupt transition updates. The
              // only difference between default updates and transition updates is that
              // default updates do not support refresh transitions.
              (E === $t && (M & nl) !== G)
            )
              return t;
          }
          (i & Qr) !== G && (i |= a & $t);
          var _ = e.entangledLanes;
          if (_ !== G)
            for (var B = e.entanglements, V = i & _; V > 0; ) {
              var I = al(V),
                he = 1 << I;
              (i |= B[I]), (V &= ~he);
            }
          return i;
        }
        function Vv(e, t) {
          for (var a = e.eventTimes, i = Mt; t > 0; ) {
            var o = al(t),
              s = 1 << o,
              d = a[o];
            d > i && (i = d), (t &= ~s);
          }
          return i;
        }
        function Ec(e, t) {
          switch (e) {
            case Ae2:
            case Xa:
            case Qr:
              return t + 250;
            case Ul:
            case $t:
            case Fl:
            case $l:
            case da:
            case Dr:
            case Hl:
            case Pu:
            case Yu:
            case oc:
            case uc:
            case sc:
            case cc:
            case fc:
            case dc:
            case pc:
            case vc:
            case Bl:
            case hc:
              return t + 5e3;
            case mi:
            case gc:
            case Iu:
            case yc:
            case mc:
              return Mt;
            case Lo:
            case Oo:
            case rl:
            case Nr:
              return Mt;
            default:
              return (
                S("Should have found matching lanes. This is a bug in React."),
                Mt
              );
          }
        }
        function yy(e, t) {
          for (
            var a = e.pendingLanes,
              i = e.suspendedLanes,
              o = e.pingedLanes,
              s = e.expirationTimes,
              d = a;
            d > 0;

          ) {
            var g = al(d),
              y = 1 << g,
              C = s[g];
            C === Mt
              ? ((y & i) === G || (y & o) !== G) && (s[g] = Ec(y, t))
              : C <= t && (e.expiredLanes |= y),
              (d &= ~y);
          }
        }
        function my(e) {
          return jo(e.pendingLanes);
        }
        function hd(e) {
          var t = e.pendingLanes & ~Nr;
          return t !== G ? t : t & Nr ? Nr : G;
        }
        function Ao(e) {
          return (e & Ae2) !== G;
        }
        function Gu(e) {
          return (e & Sc) !== G;
        }
        function bc(e) {
          return (e & Vl) === e;
        }
        function Sy(e) {
          var t = Ae2 | Qr | $t;
          return (e & t) === G;
        }
        function Pv(e) {
          return (e & nl) === e;
        }
        function Wu(e, t) {
          var a = Xa | Qr | Ul | $t;
          return (t & a) !== G;
        }
        function Yv(e, t) {
          return (t & e.expiredLanes) !== G;
        }
        function gd(e) {
          return (e & nl) !== G;
        }
        function yd() {
          var e = xc;
          return (xc <<= 1), (xc & nl) === G && (xc = $l), e;
        }
        function xy() {
          var e = Cc;
          return (Cc <<= 1), (Cc & Vl) === G && (Cc = mi), e;
        }
        function sn(e) {
          return e & -e;
        }
        function yn(e) {
          return sn(e);
        }
        function al(e) {
          return 31 - ic(e);
        }
        function wc(e) {
          return al(e);
        }
        function _r(e, t) {
          return (e & t) !== G;
        }
        function Pl(e, t) {
          return (e & t) === t;
        }
        function qe(e, t) {
          return e | t;
        }
        function Uo(e, t) {
          return e & ~t;
        }
        function md(e, t) {
          return e & t;
        }
        function Iv(e) {
          return e;
        }
        function Qv(e, t) {
          return e !== ot && e < t ? e : t;
        }
        function Tc(e) {
          for (var t = [], a = 0; a < Ft; a++) t.push(e);
          return t;
        }
        function Yl(e, t, a) {
          (e.pendingLanes |= t),
            t !== rl && ((e.suspendedLanes = G), (e.pingedLanes = G));
          var i = e.eventTimes,
            o = wc(t);
          i[o] = a;
        }
        function Sd(e, t) {
          (e.suspendedLanes |= t), (e.pingedLanes &= ~t);
          for (var a = e.expirationTimes, i = t; i > 0; ) {
            var o = al(i),
              s = 1 << o;
            (a[o] = Mt), (i &= ~s);
          }
        }
        function xd(e, t, a) {
          e.pingedLanes |= e.suspendedLanes & t;
        }
        function Cd(e, t) {
          var a = e.pendingLanes & ~t;
          (e.pendingLanes = t),
            (e.suspendedLanes = G),
            (e.pingedLanes = G),
            (e.expiredLanes &= t),
            (e.mutableReadLanes &= t),
            (e.entangledLanes &= t);
          for (
            var i = e.entanglements,
              o = e.eventTimes,
              s = e.expirationTimes,
              d = a;
            d > 0;

          ) {
            var g = al(d),
              y = 1 << g;
            (i[g] = G), (o[g] = Mt), (s[g] = Mt), (d &= ~y);
          }
        }
        function Fo(e, t) {
          for (
            var a = (e.entangledLanes |= t), i = e.entanglements, o = a;
            o;

          ) {
            var s = al(o),
              d = 1 << s;
            (d & t) | // Is this lane transitively entangled with the newly entangled lanes?
              (i[s] & t) && (i[s] |= t),
              (o &= ~d);
          }
        }
        function Cy(e, t) {
          var a = sn(t),
            i;
          switch (a) {
            case Qr:
              i = Xa;
              break;
            case $t:
              i = Ul;
              break;
            case $l:
            case da:
            case Dr:
            case Hl:
            case Pu:
            case Yu:
            case oc:
            case uc:
            case sc:
            case cc:
            case fc:
            case dc:
            case pc:
            case vc:
            case Bl:
            case hc:
            case mi:
            case gc:
            case Iu:
            case yc:
            case mc:
              i = Fl;
              break;
            case rl:
              i = Oo;
              break;
            default:
              i = ot;
              break;
          }
          return (i & (e.suspendedLanes | t)) !== ot ? ot : i;
        }
        function Ed(e, t, a) {
          if (Fn)
            for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
              var o = wc(a),
                s = 1 << o,
                d = i[o];
              d.add(t), (a &= ~s);
            }
        }
        function Rc(e, t) {
          if (Fn)
            for (
              var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters;
              t > 0;

            ) {
              var o = wc(t),
                s = 1 << o,
                d = a[o];
              d.size > 0 &&
                (d.forEach(function (g) {
                  var y = g.alternate;
                  (y === null || !i.has(y)) && i.add(g);
                }),
                d.clear()),
                (t &= ~s);
            }
        }
        function bd(e, t) {
          return null;
        }
        var er = Ae2,
          $n = Qr,
          Si = $t,
          Xu = rl,
          Il = ot;
        function pa() {
          return Il;
        }
        function mn(e) {
          Il = e;
        }
        function qu(e, t) {
          var a = Il;
          try {
            return (Il = e), t();
          } finally {
            Il = a;
          }
        }
        function tr(e, t) {
          return e !== 0 && e < t ? e : t;
        }
        function Ey(e, t) {
          return e === 0 || e > t ? e : t;
        }
        function wd(e, t) {
          return e !== 0 && e < t;
        }
        function Ku(e) {
          var t = sn(e);
          return wd(er, t) ? (wd($n, t) ? (Gu(t) ? Si : Xu) : $n) : er;
        }
        function Sn(e) {
          var t = e.current.memoizedState;
          return t.isDehydrated;
        }
        var Gv;
        function ye(e) {
          Gv = e;
        }
        function $o(e) {
          Gv(e);
        }
        var Zu;
        function Wv(e) {
          Zu = e;
        }
        var Xv;
        function Ju(e) {
          Xv = e;
        }
        var es;
        function Td(e) {
          es = e;
        }
        var Rd;
        function qv(e) {
          Rd = e;
        }
        var kc = false,
          Ho = [],
          qa = null,
          It = null,
          _n = null,
          va = /* @__PURE__ */ new Map(),
          Bo = /* @__PURE__ */ new Map(),
          xi = [],
          Aa = [
            "mousedown",
            "mouseup",
            "touchcancel",
            "touchend",
            "touchstart",
            "auxclick",
            "dblclick",
            "pointercancel",
            "pointerdown",
            "pointerup",
            "dragend",
            "dragstart",
            "drop",
            "compositionend",
            "compositionstart",
            "keydown",
            "keypress",
            "keyup",
            "input",
            "textInput",
            // Intentionally camelCase
            "copy",
            "cut",
            "paste",
            "click",
            "change",
            "contextmenu",
            "reset",
            "submit",
          ];
        function Kv(e) {
          return Aa.indexOf(e) > -1;
        }
        function Ka(e, t, a, i, o) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: a,
            nativeEvent: o,
            targetContainers: [i],
          };
        }
        function Zv(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              qa = null;
              break;
            case "dragenter":
            case "dragleave":
              It = null;
              break;
            case "mouseover":
            case "mouseout":
              _n = null;
              break;
            case "pointerover":
            case "pointerout": {
              var a = t.pointerId;
              va.delete(a);
              break;
            }
            case "gotpointercapture":
            case "lostpointercapture": {
              var i = t.pointerId;
              Bo.delete(i);
              break;
            }
          }
        }
        function Vo(e, t, a, i, o, s) {
          if (e === null || e.nativeEvent !== s) {
            var d = Ka(t, a, i, o, s);
            if (t !== null) {
              var g = Jo(t);
              g !== null && Zu(g);
            }
            return d;
          }
          e.eventSystemFlags |= i;
          var y = e.targetContainers;
          return o !== null && y.indexOf(o) === -1 && y.push(o), e;
        }
        function Jv(e, t, a, i, o) {
          switch (t) {
            case "focusin": {
              var s = o;
              return (qa = Vo(qa, e, t, a, i, s)), true;
            }
            case "dragenter": {
              var d = o;
              return (It = Vo(It, e, t, a, i, d)), true;
            }
            case "mouseover": {
              var g = o;
              return (_n = Vo(_n, e, t, a, i, g)), true;
            }
            case "pointerover": {
              var y = o,
                C = y.pointerId;
              return va.set(C, Vo(va.get(C) || null, e, t, a, i, y)), true;
            }
            case "gotpointercapture": {
              var E = o,
                M = E.pointerId;
              return Bo.set(M, Vo(Bo.get(M) || null, e, t, a, i, E)), true;
            }
          }
          return false;
        }
        function kd(e) {
          var t = ss(e.target);
          if (t !== null) {
            var a = Pr(t);
            if (a !== null) {
              var i = a.tag;
              if (i === Fe) {
                var o = nd(a);
                if (o !== null) {
                  (e.blockedOn = o),
                    Rd(e.priority, function () {
                      Xv(a);
                    });
                  return;
                }
              } else if (i === U) {
                var s = a.stateNode;
                if (Sn(s)) {
                  e.blockedOn = Xs(a);
                  return;
                }
              }
            }
          }
          e.blockedOn = null;
        }
        function eh(e) {
          for (
            var t = es(),
              a = {
                blockedOn: null,
                target: e,
                priority: t,
              },
              i = 0;
            i < xi.length && wd(t, xi[i].priority);
            i++
          );
          xi.splice(i, 0, a), i === 0 && kd(a);
        }
        function Dc(e) {
          if (e.blockedOn !== null) return false;
          for (var t = e.targetContainers; t.length > 0; ) {
            var a = t[0],
              i = Ql(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
            if (i === null) {
              var o = e.nativeEvent,
                s = new o.constructor(o.type, o);
              Lu(s), o.target.dispatchEvent(s), dy();
            } else {
              var d = Jo(i);
              return d !== null && Zu(d), (e.blockedOn = i), false;
            }
            t.shift();
          }
          return true;
        }
        function ts(e, t, a) {
          Dc(e) && a.delete(t);
        }
        function Dd() {
          (kc = false),
            qa !== null && Dc(qa) && (qa = null),
            It !== null && Dc(It) && (It = null),
            _n !== null && Dc(_n) && (_n = null),
            va.forEach(ts),
            Bo.forEach(ts);
        }
        function nr(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            kc ||
              ((kc = true),
              v.unstable_scheduleCallback(v.unstable_NormalPriority, Dd)));
        }
        function at(e) {
          if (Ho.length > 0) {
            nr(Ho[0], e);
            for (var t = 1; t < Ho.length; t++) {
              var a = Ho[t];
              a.blockedOn === e && (a.blockedOn = null);
            }
          }
          qa !== null && nr(qa, e),
            It !== null && nr(It, e),
            _n !== null && nr(_n, e);
          var i = function (g) {
            return nr(g, e);
          };
          va.forEach(i), Bo.forEach(i);
          for (var o = 0; o < xi.length; o++) {
            var s = xi[o];
            s.blockedOn === e && (s.blockedOn = null);
          }
          for (; xi.length > 0; ) {
            var d = xi[0];
            if (d.blockedOn !== null) break;
            kd(d), d.blockedOn === null && xi.shift();
          }
        }
        var Xt = p.ReactCurrentBatchConfig,
          Zt = true;
        function zn(e) {
          Zt = !!e;
        }
        function Gr() {
          return Zt;
        }
        function Po(e, t, a) {
          var i = sr(t),
            o;
          switch (i) {
            case er:
              o = xn;
              break;
            case $n:
              o = ns;
              break;
            case Si:
            default:
              o = Ci;
              break;
          }
          return o.bind(null, t, a, e);
        }
        function xn(e, t, a, i) {
          var o = pa(),
            s = Xt.transition;
          Xt.transition = null;
          try {
            mn(er), Ci(e, t, a, i);
          } finally {
            mn(o), (Xt.transition = s);
          }
        }
        function ns(e, t, a, i) {
          var o = pa(),
            s = Xt.transition;
          Xt.transition = null;
          try {
            mn($n), Ci(e, t, a, i);
          } finally {
            mn(o), (Xt.transition = s);
          }
        }
        function Ci(e, t, a, i) {
          Zt && Nc(e, t, a, i);
        }
        function Nc(e, t, a, i) {
          var o = Ql(e, t, a, i);
          if (o === null) {
            Vy(e, t, i, Yo, a), Zv(e, i);
            return;
          }
          if (Jv(o, e, t, a, i)) {
            i.stopPropagation();
            return;
          }
          if ((Zv(e, i), t & Dl && Kv(e))) {
            for (; o !== null; ) {
              var s = Jo(o);
              s !== null && $o(s);
              var d = Ql(e, t, a, i);
              if ((d === null && Vy(e, t, i, Yo, a), d === o)) break;
              o = d;
            }
            o !== null && i.stopPropagation();
            return;
          }
          Vy(e, t, i, null, a);
        }
        var Yo = null;
        function Ql(e, t, a, i) {
          Yo = null;
          var o = Ys(i),
            s = ss(o);
          if (s !== null) {
            var d = Pr(s);
            if (d === null) s = null;
            else {
              var g = d.tag;
              if (g === Fe) {
                var y = nd(d);
                if (y !== null) return y;
                s = null;
              } else if (g === U) {
                var C = d.stateNode;
                if (Sn(C)) return Xs(d);
                s = null;
              } else d !== s && (s = null);
            }
          }
          return (Yo = s), null;
        }
        function sr(e) {
          switch (e) {
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
              return er;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return $n;
            case "message": {
              var t = id();
              switch (t) {
                case Js:
                  return er;
                case Ir:
                  return $n;
                case Wa:
                case ec:
                  return Si;
                case qi:
                  return Xu;
                default:
                  return Si;
              }
            }
            default:
              return Si;
          }
        }
        function Nd(e, t, a) {
          return e.addEventListener(t, a, false), a;
        }
        function Io(e, t, a) {
          return e.addEventListener(t, a, true), a;
        }
        function Ei(e, t, a, i) {
          return (
            e.addEventListener(t, a, {
              capture: true,
              passive: i,
            }),
            a
          );
        }
        function _c(e, t, a, i) {
          return (
            e.addEventListener(t, a, {
              passive: i,
            }),
            a
          );
        }
        var Gl = null,
          Za = null,
          il = null;
        function ll(e) {
          return (Gl = e), (Za = Mc()), true;
        }
        function zc() {
          (Gl = null), (Za = null), (il = null);
        }
        function Qo() {
          if (il) return il;
          var e,
            t = Za,
            a = t.length,
            i,
            o = Mc(),
            s = o.length;
          for (e = 0; e < a && t[e] === o[e]; e++);
          var d = a - e;
          for (i = 1; i <= d && t[a - i] === o[s - i]; i++);
          var g = i > 1 ? 1 - i : void 0;
          return (il = o.slice(e, g)), il;
        }
        function Mc() {
          return "value" in Gl ? Gl.value : Gl.textContent;
        }
        function Wl(e) {
          var t,
            a = e.keyCode;
          return (
            "charCode" in e
              ? ((t = e.charCode), t === 0 && a === 13 && (t = 13))
              : (t = a),
            t === 10 && (t = 13),
            t >= 32 || t === 13 ? t : 0
          );
        }
        function Xl() {
          return true;
        }
        function rr() {
          return false;
        }
        function cn(e) {
          function t(a, i, o, s, d) {
            (this._reactName = a),
              (this._targetInst = o),
              (this.type = i),
              (this.nativeEvent = s),
              (this.target = d),
              (this.currentTarget = null);
            for (var g in e)
              if (e.hasOwnProperty(g)) {
                var y = e[g];
                y ? (this[g] = y(s)) : (this[g] = s[g]);
              }
            var C =
              s.defaultPrevented != null
                ? s.defaultPrevented
                : s.returnValue === false;
            return (
              C
                ? (this.isDefaultPrevented = Xl)
                : (this.isDefaultPrevented = rr),
              (this.isPropagationStopped = rr),
              this
            );
          }
          return (
            rt(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = true;
                var a = this.nativeEvent;
                a &&
                  (a.preventDefault
                    ? a.preventDefault()
                    : typeof a.returnValue != "unknown" &&
                      (a.returnValue = false),
                  (this.isDefaultPrevented = Xl));
              },
              stopPropagation: function () {
                var a = this.nativeEvent;
                a &&
                  (a.stopPropagation
                    ? a.stopPropagation()
                    : typeof a.cancelBubble != "unknown" &&
                      (a.cancelBubble = true),
                  (this.isPropagationStopped = Xl));
              },
              /**
               * We release all dispatched `SyntheticEvent`s after each event loop, adding
               * them back into the pool. This allows a way to hold onto a reference that
               * won't be added back into the pool.
               */
              persist: function () {},
              /**
               * Checks if this event should be released back into the pool.
               *
               * @return {boolean} True if this should not be released, false otherwise.
               */
              isPersistent: Xl,
            }),
            t
          );
        }
        var ar = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          ir = cn(ar),
          Go = rt({}, ar, {
            view: 0,
            detail: 0,
          }),
          _d = cn(Go),
          rs,
          zd,
          ha;
        function th(e) {
          e !== ha &&
            (ha && e.type === "mousemove"
              ? ((rs = e.screenX - ha.screenX), (zd = e.screenY - ha.screenY))
              : ((rs = 0), (zd = 0)),
            (ha = e));
        }
        var Wo = rt({}, Go, {
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
            getModifierState: jc,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e ? e.movementX : (th(e), rs);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : zd;
            },
          }),
          ol = cn(Wo),
          Md = rt({}, Wo, {
            dataTransfer: 0,
          }),
          ql = cn(Md),
          nh = rt({}, Go, {
            relatedTarget: 0,
          }),
          Lc = cn(nh),
          Ld = rt({}, ar, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0,
          }),
          Oc = cn(Ld),
          by = rt({}, ar, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          wy = cn(by),
          rh = rt({}, ar, {
            data: 0,
          }),
          Od = cn(rh),
          Kl = Od,
          Ty = {
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
          Xo = {
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
          };
        function ah(e) {
          if (e.key) {
            var t = Ty[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          if (e.type === "keypress") {
            var a = Wl(e);
            return a === 13 ? "Enter" : String.fromCharCode(a);
          }
          return e.type === "keydown" || e.type === "keyup"
            ? Xo[e.keyCode] || "Unidentified"
            : "";
        }
        var Jt = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
        function Ry(e) {
          var t = this,
            a = t.nativeEvent;
          if (a.getModifierState) return a.getModifierState(e);
          var i = Jt[e];
          return i ? !!a[i] : false;
        }
        function jc(e) {
          return Ry;
        }
        var ky = rt({}, Go, {
            key: ah,
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: jc,
            // Legacy Interface
            charCode: function (e) {
              return e.type === "keypress" ? Wl(e) : 0;
            },
            keyCode: function (e) {
              return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function (e) {
              return e.type === "keypress"
                ? Wl(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
            },
          }),
          Dy = cn(ky),
          ih = rt({}, Wo, {
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
          jd = cn(ih),
          Ny = rt({}, Go, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: jc,
          }),
          ga = cn(Ny),
          Ad = rt({}, ar, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0,
          }),
          _y = cn(Ad),
          ul = rt({}, Wo, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
                "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
                "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
                "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            // Browsers without "deltaMode" is reporting in raw wheel delta where one
            // notch on the scroll is always +/- 120, roughly equivalent to pixels.
            // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
            // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
            deltaMode: 0,
          }),
          Ac = cn(ul),
          Zl = [9, 13, 27, 32],
          as = 229,
          is = bn && "CompositionEvent" in window,
          Jl = null;
        bn && "documentMode" in document && (Jl = document.documentMode);
        var zy = bn && "TextEvent" in window && !Jl,
          Uc = bn && (!is || (Jl && Jl > 8 && Jl <= 11)),
          lh = 32,
          Ud = String.fromCharCode(lh);
        function oh() {
          xr("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
            xr("onCompositionEnd", [
              "compositionend",
              "focusout",
              "keydown",
              "keypress",
              "keyup",
              "mousedown",
            ]),
            xr("onCompositionStart", [
              "compositionstart",
              "focusout",
              "keydown",
              "keypress",
              "keyup",
              "mousedown",
            ]),
            xr("onCompositionUpdate", [
              "compositionupdate",
              "focusout",
              "keydown",
              "keypress",
              "keyup",
              "mousedown",
            ]);
        }
        var ls = false;
        function Fc(e) {
          return (
            (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
            !(e.ctrlKey && e.altKey)
          );
        }
        function uh(e) {
          switch (e) {
            case "compositionstart":
              return "onCompositionStart";
            case "compositionend":
              return "onCompositionEnd";
            case "compositionupdate":
              return "onCompositionUpdate";
          }
        }
        function Fd(e, t) {
          return e === "keydown" && t.keyCode === as;
        }
        function sh(e, t) {
          switch (e) {
            case "keyup":
              return Zl.indexOf(t.keyCode) !== -1;
            case "keydown":
              return t.keyCode !== as;
            case "keypress":
            case "mousedown":
            case "focusout":
              return true;
            default:
              return false;
          }
        }
        function $d(e) {
          var t = e.detail;
          return typeof t == "object" && "data" in t ? t.data : null;
        }
        function $c(e) {
          return e.locale === "ko";
        }
        var bi = false;
        function Hd(e, t, a, i, o) {
          var s, d;
          if (
            (is
              ? (s = uh(t))
              : bi
              ? sh(t, i) && (s = "onCompositionEnd")
              : Fd(t, i) && (s = "onCompositionStart"),
            !s)
          )
            return null;
          Uc &&
            !$c(i) &&
            (!bi && s === "onCompositionStart"
              ? (bi = ll(o))
              : s === "onCompositionEnd" && bi && (d = Qo()));
          var g = vh(a, s);
          if (g.length > 0) {
            var y = new Od(s, t, null, i, o);
            if (
              (e.push({
                event: y,
                listeners: g,
              }),
              d)
            )
              y.data = d;
            else {
              var C = $d(i);
              C !== null && (y.data = C);
            }
          }
        }
        function Hc(e, t) {
          switch (e) {
            case "compositionend":
              return $d(t);
            case "keypress":
              var a = t.which;
              return a !== lh ? null : ((ls = true), Ud);
            case "textInput":
              var i = t.data;
              return i === Ud && ls ? null : i;
            default:
              return null;
          }
        }
        function ch(e, t) {
          if (bi) {
            if (e === "compositionend" || (!is && sh(e, t))) {
              var a = Qo();
              return zc(), (bi = false), a;
            }
            return null;
          }
          switch (e) {
            case "paste":
              return null;
            case "keypress":
              if (!Fc(t)) {
                if (t.char && t.char.length > 1) return t.char;
                if (t.which) return String.fromCharCode(t.which);
              }
              return null;
            case "compositionend":
              return Uc && !$c(t) ? null : t.data;
            default:
              return null;
          }
        }
        function My(e, t, a, i, o) {
          var s;
          if ((zy ? (s = Hc(t, i)) : (s = ch(t, i)), !s)) return null;
          var d = vh(a, "onBeforeInput");
          if (d.length > 0) {
            var g = new Kl("onBeforeInput", "beforeinput", null, i, o);
            e.push({
              event: g,
              listeners: d,
            }),
              (g.data = s);
          }
        }
        function Bc(e, t, a, i, o, s, d) {
          Hd(e, t, a, i, o), My(e, t, a, i, o);
        }
        var Ly = {
          color: true,
          date: true,
          datetime: true,
          "datetime-local": true,
          email: true,
          month: true,
          number: true,
          password: true,
          range: true,
          search: true,
          tel: true,
          text: true,
          time: true,
          url: true,
          week: true,
        };
        function qo(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return t === "input" ? !!Ly[e.type] : t === "textarea";
        }
        function Oy(e) {
          if (!bn) return false;
          var t = "on" + e,
            a = t in document;
          if (!a) {
            var i = document.createElement("div");
            i.setAttribute(t, "return;"), (a = typeof i[t] == "function");
          }
          return a;
        }
        function Vc() {
          xr("onChange", [
            "change",
            "click",
            "focusin",
            "focusout",
            "input",
            "keydown",
            "keyup",
            "selectionchange",
          ]);
        }
        function n(e, t, a, i) {
          Is(i);
          var o = vh(t, "onChange");
          if (o.length > 0) {
            var s = new ir("onChange", "change", null, a, i);
            e.push({
              event: s,
              listeners: o,
            });
          }
        }
        var r = null,
          l = null;
        function u(e) {
          var t = e.nodeName && e.nodeName.toLowerCase();
          return t === "select" || (t === "input" && e.type === "file");
        }
        function f(e) {
          var t = [];
          n(t, l, e, Ys(e)), Wf(h, t);
        }
        function h(e) {
          G1(e, 0);
        }
        function x(e) {
          var t = Wc(e);
          if (qp(t)) return e;
        }
        function T(e, t) {
          if (e === "change") return t;
        }
        var N = false;
        bn &&
          (N =
            Oy("input") &&
            (!document.documentMode || document.documentMode > 9));
        function P(e, t) {
          (r = e), (l = t), r.attachEvent("onpropertychange", ne);
        }
        function ee() {
          r && (r.detachEvent("onpropertychange", ne), (r = null), (l = null));
        }
        function ne(e) {
          e.propertyName === "value" && x(l) && f(e);
        }
        function J(e, t, a) {
          e === "focusin" ? (ee(), P(t, a)) : e === "focusout" && ee();
        }
        function de(e, t) {
          if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return x(l);
        }
        function me(e) {
          var t = e.nodeName;
          return (
            t &&
            t.toLowerCase() === "input" &&
            (e.type === "checkbox" || e.type === "radio")
          );
        }
        function Ee(e, t) {
          if (e === "click") return x(t);
        }
        function rn(e, t) {
          if (e === "input" || e === "change") return x(t);
        }
        function A(e) {
          var t = e._wrapperState;
          !t ||
            !t.controlled ||
            e.type !== "number" ||
            Vi(e, "number", e.value);
        }
        function z(e, t, a, i, o, s, d) {
          var g = a ? Wc(a) : window,
            y,
            C;
          if (
            (u(g)
              ? (y = T)
              : qo(g)
              ? N
                ? (y = rn)
                : ((y = de), (C = J))
              : me(g) && (y = Ee),
            y)
          ) {
            var E = y(t, a);
            if (E) {
              n(e, E, i, o);
              return;
            }
          }
          C && C(t, g, a), t === "focusout" && A(g);
        }
        function H() {
          ea("onMouseEnter", ["mouseout", "mouseover"]),
            ea("onMouseLeave", ["mouseout", "mouseover"]),
            ea("onPointerEnter", ["pointerout", "pointerover"]),
            ea("onPointerLeave", ["pointerout", "pointerover"]);
        }
        function ae(e, t, a, i, o, s, d) {
          var g = t === "mouseover" || t === "pointerover",
            y = t === "mouseout" || t === "pointerout";
          if (g && !kv(i)) {
            var C = i.relatedTarget || i.fromElement;
            if (C && (ss(C) || ep(C))) return;
          }
          if (!(!y && !g)) {
            var E;
            if (o.window === o) E = o;
            else {
              var M = o.ownerDocument;
              M ? (E = M.defaultView || M.parentWindow) : (E = window);
            }
            var _, B;
            if (y) {
              var V = i.relatedTarget || i.toElement;
              if (((_ = a), (B = V ? ss(V) : null), B !== null)) {
                var I = Pr(B);
                (B !== I || (B.tag !== X && B.tag !== le)) && (B = null);
              }
            } else (_ = null), (B = a);
            if (_ !== B) {
              var he = ol,
                _e = "onMouseLeave",
                Te = "onMouseEnter",
                st = "mouse";
              (t === "pointerout" || t === "pointerover") &&
                ((he = jd),
                (_e = "onPointerLeave"),
                (Te = "onPointerEnter"),
                (st = "pointer"));
              var it = _ == null ? E : Wc(_),
                F = B == null ? E : Wc(B),
                Q = new he(_e, st + "leave", _, i, o);
              (Q.target = it), (Q.relatedTarget = F);
              var $ = null,
                re = ss(o);
              if (re === a) {
                var ge = new he(Te, st + "enter", B, i, o);
                (ge.target = F), (ge.relatedTarget = it), ($ = ge);
              }
              db(e, Q, $, _, B);
            }
          }
        }
        function we(e, t) {
          return (
            (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
          );
        }
        var Se = typeof Object.is == "function" ? Object.is : we;
        function Re(e, t) {
          if (Se(e, t)) return true;
          if (
            typeof e != "object" ||
            e === null ||
            typeof t != "object" ||
            t === null
          )
            return false;
          var a = Object.keys(e),
            i = Object.keys(t);
          if (a.length !== i.length) return false;
          for (var o = 0; o < a.length; o++) {
            var s = a[o];
            if (!Xn.call(t, s) || !Se(e[s], t[s])) return false;
          }
          return true;
        }
        function Ve(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function Mn(e) {
          for (; e; ) {
            if (e.nextSibling) return e.nextSibling;
            e = e.parentNode;
          }
        }
        function dt(e, t) {
          for (var a = Ve(e), i = 0, o = 0; a; ) {
            if (a.nodeType === ci) {
              if (((o = i + a.textContent.length), i <= t && o >= t))
                return {
                  node: a,
                  offset: t - i,
                };
              i = o;
            }
            a = Ve(Mn(a));
          }
        }
        function sl(e) {
          var t = e.ownerDocument,
            a = (t && t.defaultView) || window,
            i = a.getSelection && a.getSelection();
          if (!i || i.rangeCount === 0) return null;
          var o = i.anchorNode,
            s = i.anchorOffset,
            d = i.focusNode,
            g = i.focusOffset;
          try {
            o.nodeType, d.nodeType;
          } catch {
            return null;
          }
          return jy(e, o, s, d, g);
        }
        function jy(e, t, a, i, o) {
          var s = 0,
            d = -1,
            g = -1,
            y = 0,
            C = 0,
            E = e,
            M = null;
          e: for (;;) {
            for (
              var _ = null;
              E === t && (a === 0 || E.nodeType === ci) && (d = s + a),
                E === i && (o === 0 || E.nodeType === ci) && (g = s + o),
                E.nodeType === ci && (s += E.nodeValue.length),
                (_ = E.firstChild) !== null;

            )
              (M = E), (E = _);
            for (;;) {
              if (E === e) break e;
              if (
                (M === t && ++y === a && (d = s),
                M === i && ++C === o && (g = s),
                (_ = E.nextSibling) !== null)
              )
                break;
              (E = M), (M = E.parentNode);
            }
            E = _;
          }
          return d === -1 || g === -1
            ? null
            : {
                start: d,
                end: g,
              };
        }
        function GE(e, t) {
          var a = e.ownerDocument || document,
            i = (a && a.defaultView) || window;
          if (i.getSelection) {
            var o = i.getSelection(),
              s = e.textContent.length,
              d = Math.min(t.start, s),
              g = t.end === void 0 ? d : Math.min(t.end, s);
            if (!o.extend && d > g) {
              var y = g;
              (g = d), (d = y);
            }
            var C = dt(e, d),
              E = dt(e, g);
            if (C && E) {
              if (
                o.rangeCount === 1 &&
                o.anchorNode === C.node &&
                o.anchorOffset === C.offset &&
                o.focusNode === E.node &&
                o.focusOffset === E.offset
              )
                return;
              var M = a.createRange();
              M.setStart(C.node, C.offset),
                o.removeAllRanges(),
                d > g
                  ? (o.addRange(M), o.extend(E.node, E.offset))
                  : (M.setEnd(E.node, E.offset), o.addRange(M));
            }
          }
        }
        function j1(e) {
          return e && e.nodeType === ci;
        }
        function A1(e, t) {
          return !e || !t
            ? false
            : e === t
            ? true
            : j1(e)
            ? false
            : j1(t)
            ? A1(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : false;
        }
        function WE(e) {
          return e && e.ownerDocument && A1(e.ownerDocument.documentElement, e);
        }
        function XE(e) {
          try {
            return typeof e.contentWindow.location.href == "string";
          } catch {
            return false;
          }
        }
        function U1() {
          for (var e = window, t = zs(); t instanceof e.HTMLIFrameElement; ) {
            if (XE(t)) e = t.contentWindow;
            else return t;
            t = zs(e.document);
          }
          return t;
        }
        function Ay(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            ((t === "input" &&
              (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
              t === "textarea" ||
              e.contentEditable === "true")
          );
        }
        function qE() {
          var e = U1();
          return {
            focusedElem: e,
            selectionRange: Ay(e) ? ZE(e) : null,
          };
        }
        function KE(e) {
          var t = U1(),
            a = e.focusedElem,
            i = e.selectionRange;
          if (t !== a && WE(a)) {
            i !== null && Ay(a) && JE(a, i);
            for (var o = [], s = a; (s = s.parentNode); )
              s.nodeType === Er &&
                o.push({
                  element: s,
                  left: s.scrollLeft,
                  top: s.scrollTop,
                });
            typeof a.focus == "function" && a.focus();
            for (var d = 0; d < o.length; d++) {
              var g = o[d];
              (g.element.scrollLeft = g.left), (g.element.scrollTop = g.top);
            }
          }
        }
        function ZE(e) {
          var t;
          return (
            "selectionStart" in e
              ? (t = {
                  start: e.selectionStart,
                  end: e.selectionEnd,
                })
              : (t = sl(e)),
            t || {
              start: 0,
              end: 0,
            }
          );
        }
        function JE(e, t) {
          var a = t.start,
            i = t.end;
          i === void 0 && (i = a),
            "selectionStart" in e
              ? ((e.selectionStart = a),
                (e.selectionEnd = Math.min(i, e.value.length)))
              : GE(e, t);
        }
        var eb =
          bn && "documentMode" in document && document.documentMode <= 11;
        function tb() {
          xr("onSelect", [
            "focusout",
            "contextmenu",
            "dragend",
            "focusin",
            "keydown",
            "keyup",
            "mousedown",
            "mouseup",
            "selectionchange",
          ]);
        }
        var Pc = null,
          Uy = null,
          Bd = null,
          Fy = false;
        function nb(e) {
          if ("selectionStart" in e && Ay(e))
            return {
              start: e.selectionStart,
              end: e.selectionEnd,
            };
          var t = (e.ownerDocument && e.ownerDocument.defaultView) || window,
            a = t.getSelection();
          return {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          };
        }
        function rb(e) {
          return e.window === e
            ? e.document
            : e.nodeType === Ma
            ? e
            : e.ownerDocument;
        }
        function F1(e, t, a) {
          var i = rb(a);
          if (!(Fy || Pc == null || Pc !== zs(i))) {
            var o = nb(Pc);
            if (!Bd || !Re(Bd, o)) {
              Bd = o;
              var s = vh(Uy, "onSelect");
              if (s.length > 0) {
                var d = new ir("onSelect", "select", null, t, a);
                e.push({
                  event: d,
                  listeners: s,
                }),
                  (d.target = Pc);
              }
            }
          }
        }
        function ab(e, t, a, i, o, s, d) {
          var g = a ? Wc(a) : window;
          switch (t) {
            case "focusin":
              (qo(g) || g.contentEditable === "true") &&
                ((Pc = g), (Uy = a), (Bd = null));
              break;
            case "focusout":
              (Pc = null), (Uy = null), (Bd = null);
              break;
            case "mousedown":
              Fy = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (Fy = false), F1(e, i, o);
              break;
            case "selectionchange":
              if (eb) break;
            case "keydown":
            case "keyup":
              F1(e, i, o);
          }
        }
        function fh(e, t) {
          var a = {};
          return (
            (a[e.toLowerCase()] = t.toLowerCase()),
            (a["Webkit" + e] = "webkit" + t),
            (a["Moz" + e] = "moz" + t),
            a
          );
        }
        var Yc = {
            animationend: fh("Animation", "AnimationEnd"),
            animationiteration: fh("Animation", "AnimationIteration"),
            animationstart: fh("Animation", "AnimationStart"),
            transitionend: fh("Transition", "TransitionEnd"),
          },
          $y = {},
          $1 = {};
        bn &&
          (($1 = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Yc.animationend.animation,
            delete Yc.animationiteration.animation,
            delete Yc.animationstart.animation),
          "TransitionEvent" in window || delete Yc.transitionend.transition);
        function dh(e) {
          if ($y[e]) return $y[e];
          if (!Yc[e]) return e;
          var t = Yc[e];
          for (var a in t)
            if (t.hasOwnProperty(a) && a in $1) return ($y[e] = t[a]);
          return e;
        }
        var H1 = dh("animationend"),
          B1 = dh("animationiteration"),
          V1 = dh("animationstart"),
          P1 = dh("transitionend"),
          Y1 = /* @__PURE__ */ new Map(),
          I1 = [
            "abort",
            "auxClick",
            "cancel",
            "canPlay",
            "canPlayThrough",
            "click",
            "close",
            "contextMenu",
            "copy",
            "cut",
            "drag",
            "dragEnd",
            "dragEnter",
            "dragExit",
            "dragLeave",
            "dragOver",
            "dragStart",
            "drop",
            "durationChange",
            "emptied",
            "encrypted",
            "ended",
            "error",
            "gotPointerCapture",
            "input",
            "invalid",
            "keyDown",
            "keyPress",
            "keyUp",
            "load",
            "loadedData",
            "loadedMetadata",
            "loadStart",
            "lostPointerCapture",
            "mouseDown",
            "mouseMove",
            "mouseOut",
            "mouseOver",
            "mouseUp",
            "paste",
            "pause",
            "play",
            "playing",
            "pointerCancel",
            "pointerDown",
            "pointerMove",
            "pointerOut",
            "pointerOver",
            "pointerUp",
            "progress",
            "rateChange",
            "reset",
            "resize",
            "seeked",
            "seeking",
            "stalled",
            "submit",
            "suspend",
            "timeUpdate",
            "touchCancel",
            "touchEnd",
            "touchStart",
            "volumeChange",
            "scroll",
            "toggle",
            "touchMove",
            "waiting",
            "wheel",
          ];
        function Ko(e, t) {
          Y1.set(e, t), xr(t, [e]);
        }
        function ib() {
          for (var e = 0; e < I1.length; e++) {
            var t = I1[e],
              a = t.toLowerCase(),
              i = t[0].toUpperCase() + t.slice(1);
            Ko(a, "on" + i);
          }
          Ko(H1, "onAnimationEnd"),
            Ko(B1, "onAnimationIteration"),
            Ko(V1, "onAnimationStart"),
            Ko("dblclick", "onDoubleClick"),
            Ko("focusin", "onFocus"),
            Ko("focusout", "onBlur"),
            Ko(P1, "onTransitionEnd");
        }
        function lb(e, t, a, i, o, s, d) {
          var g = Y1.get(t);
          if (g !== void 0) {
            var y = ir,
              C = t;
            switch (t) {
              case "keypress":
                if (Wl(i) === 0) return;
              case "keydown":
              case "keyup":
                y = Dy;
                break;
              case "focusin":
                (C = "focus"), (y = Lc);
                break;
              case "focusout":
                (C = "blur"), (y = Lc);
                break;
              case "beforeblur":
              case "afterblur":
                y = Lc;
                break;
              case "click":
                if (i.button === 2) return;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                y = ol;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                y = ql;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                y = ga;
                break;
              case H1:
              case B1:
              case V1:
                y = Oc;
                break;
              case P1:
                y = _y;
                break;
              case "scroll":
                y = _d;
                break;
              case "wheel":
                y = Ac;
                break;
              case "copy":
              case "cut":
              case "paste":
                y = wy;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                y = jd;
                break;
            }
            var E = (s & Dl) !== 0;
            {
              var M =
                  !E && // TODO: ideally, we'd eventually add all events from
                  // nonDelegatedEvents list in DOMPluginEventSystem.
                  // Then we can remove this special list.
                  // This is a breaking change that can wait until React 18.
                  t === "scroll",
                _ = cb(a, g, i.type, E, M);
              if (_.length > 0) {
                var B = new y(g, C, null, i, o);
                e.push({
                  event: B,
                  listeners: _,
                });
              }
            }
          }
        }
        ib(), H(), Vc(), tb(), oh();
        function ob(e, t, a, i, o, s, d) {
          lb(e, t, a, i, o, s);
          var g = (s & fy) === 0;
          g &&
            (ae(e, t, a, i, o),
            z(e, t, a, i, o),
            ab(e, t, a, i, o),
            Bc(e, t, a, i, o));
        }
        var Vd = [
            "abort",
            "canplay",
            "canplaythrough",
            "durationchange",
            "emptied",
            "encrypted",
            "ended",
            "error",
            "loadeddata",
            "loadedmetadata",
            "loadstart",
            "pause",
            "play",
            "playing",
            "progress",
            "ratechange",
            "resize",
            "seeked",
            "seeking",
            "stalled",
            "suspend",
            "timeupdate",
            "volumechange",
            "waiting",
          ],
          Hy = new Set(
            ["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(
              Vd
            )
          );
        function Q1(e, t, a) {
          var i = e.type || "unknown-event";
          (e.currentTarget = a), vi(i, t, void 0, e), (e.currentTarget = null);
        }
        function ub(e, t, a) {
          var i;
          if (a)
            for (var o = t.length - 1; o >= 0; o--) {
              var s = t[o],
                d = s.instance,
                g = s.currentTarget,
                y = s.listener;
              if (d !== i && e.isPropagationStopped()) return;
              Q1(e, y, g), (i = d);
            }
          else
            for (var C = 0; C < t.length; C++) {
              var E = t[C],
                M = E.instance,
                _ = E.currentTarget,
                B = E.listener;
              if (M !== i && e.isPropagationStopped()) return;
              Q1(e, B, _), (i = M);
            }
        }
        function G1(e, t) {
          for (var a = (t & Dl) !== 0, i = 0; i < e.length; i++) {
            var o = e[i],
              s = o.event,
              d = o.listeners;
            ub(s, d, a);
          }
          Zf();
        }
        function sb(e, t, a, i, o) {
          var s = Ys(a),
            d = [];
          ob(d, e, i, a, s, t), G1(d, t);
        }
        function qt(e, t) {
          Hy.has(e) ||
            S(
              'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
              e
            );
          var a = false,
            i = $w(t),
            o = pb(e, a);
          i.has(o) || (W1(t, e, zu, a), i.add(o));
        }
        function By(e, t, a) {
          Hy.has(e) &&
            !t &&
            S(
              'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
              e
            );
          var i = 0;
          t && (i |= Dl), W1(a, e, i, t);
        }
        var ph = "_reactListening" + Math.random().toString(36).slice(2);
        function Pd(e) {
          if (!e[ph]) {
            (e[ph] = true),
              Wn.forEach(function (a) {
                a !== "selectionchange" &&
                  (Hy.has(a) || By(a, false, e), By(a, true, e));
              });
            var t = e.nodeType === Ma ? e : e.ownerDocument;
            t !== null &&
              (t[ph] || ((t[ph] = true), By("selectionchange", false, t)));
          }
        }
        function W1(e, t, a, i, o) {
          var s = Po(e, t, a),
            d = void 0;
          Au &&
            (t === "touchstart" || t === "touchmove" || t === "wheel") &&
            (d = true),
            (e = e),
            i
              ? d !== void 0
                ? Ei(e, t, s, d)
                : Io(e, t, s)
              : d !== void 0
              ? _c(e, t, s, d)
              : Nd(e, t, s);
        }
        function X1(e, t) {
          return e === t || (e.nodeType === un && e.parentNode === t);
        }
        function Vy(e, t, a, i, o) {
          var s = i;
          if (!(t & di) && !(t & zu)) {
            var d = o;
            if (i !== null) {
              var g = i;
              e: for (;;) {
                if (g === null) return;
                var y = g.tag;
                if (y === U || y === W) {
                  var C = g.stateNode.containerInfo;
                  if (X1(C, d)) break;
                  if (y === W)
                    for (var E = g.return; E !== null; ) {
                      var M = E.tag;
                      if (M === U || M === W) {
                        var _ = E.stateNode.containerInfo;
                        if (X1(_, d)) return;
                      }
                      E = E.return;
                    }
                  for (; C !== null; ) {
                    var B = ss(C);
                    if (B === null) return;
                    var V = B.tag;
                    if (V === X || V === le) {
                      g = s = B;
                      continue e;
                    }
                    C = C.parentNode;
                  }
                }
                g = g.return;
              }
            }
          }
          Wf(function () {
            return sb(e, t, a, s);
          });
        }
        function Yd(e, t, a) {
          return {
            instance: e,
            listener: t,
            currentTarget: a,
          };
        }
        function cb(e, t, a, i, o, s) {
          for (
            var d = t !== null ? t + "Capture" : null,
              g = i ? d : t,
              y = [],
              C = e,
              E = null;
            C !== null;

          ) {
            var M = C,
              _ = M.stateNode,
              B = M.tag;
            if (B === X && _ !== null && ((E = _), g !== null)) {
              var V = _l(C, g);
              V != null && y.push(Yd(C, V, E));
            }
            if (o) break;
            C = C.return;
          }
          return y;
        }
        function vh(e, t) {
          for (var a = t + "Capture", i = [], o = e; o !== null; ) {
            var s = o,
              d = s.stateNode,
              g = s.tag;
            if (g === X && d !== null) {
              var y = d,
                C = _l(o, a);
              C != null && i.unshift(Yd(o, C, y));
              var E = _l(o, t);
              E != null && i.push(Yd(o, E, y));
            }
            o = o.return;
          }
          return i;
        }
        function Ic(e) {
          if (e === null) return null;
          do e = e.return;
          while (e && e.tag !== X);
          return e || null;
        }
        function fb(e, t) {
          for (var a = e, i = t, o = 0, s = a; s; s = Ic(s)) o++;
          for (var d = 0, g = i; g; g = Ic(g)) d++;
          for (; o - d > 0; ) (a = Ic(a)), o--;
          for (; d - o > 0; ) (i = Ic(i)), d--;
          for (var y = o; y--; ) {
            if (a === i || (i !== null && a === i.alternate)) return a;
            (a = Ic(a)), (i = Ic(i));
          }
          return null;
        }
        function q1(e, t, a, i, o) {
          for (var s = t._reactName, d = [], g = a; g !== null && g !== i; ) {
            var y = g,
              C = y.alternate,
              E = y.stateNode,
              M = y.tag;
            if (C !== null && C === i) break;
            if (M === X && E !== null) {
              var _ = E;
              if (o) {
                var B = _l(g, s);
                B != null && d.unshift(Yd(g, B, _));
              } else if (!o) {
                var V = _l(g, s);
                V != null && d.push(Yd(g, V, _));
              }
            }
            g = g.return;
          }
          d.length !== 0 &&
            e.push({
              event: t,
              listeners: d,
            });
        }
        function db(e, t, a, i, o) {
          var s = i && o ? fb(i, o) : null;
          i !== null && q1(e, t, i, s, false),
            o !== null && a !== null && q1(e, a, o, s, true);
        }
        function pb(e, t) {
          return e + "__" + (t ? "capture" : "bubble");
        }
        var ya = false,
          Id = "dangerouslySetInnerHTML",
          hh = "suppressContentEditableWarning",
          Zo = "suppressHydrationWarning",
          K1 = "autoFocus",
          os = "children",
          us = "style",
          gh = "__html",
          Py,
          yh,
          Qd,
          Z1,
          mh,
          J1,
          eS;
        (Py = {
          // There are working polyfills for <dialog>. Let people use it.
          dialog: true,
          // Electron ships a custom <webview> tag to display external web content in
          // an isolated frame and process.
          // This tag is not present in non Electron environments such as JSDom which
          // is often used for testing purposes.
          // @see https://electronjs.org/docs/api/webview-tag
          webview: true,
        }),
          (yh = function (e, t) {
            Ps(e, t),
              Pf(e, t),
              Rv(e, t, {
                registrationNameDependencies: Sr,
                possibleRegistrationNames: Va,
              });
          }),
          (J1 = bn && !document.documentMode),
          (Qd = function (e, t, a) {
            if (!ya) {
              var i = Sh(a),
                o = Sh(t);
              o !== i &&
                ((ya = true),
                S(
                  "Prop `%s` did not match. Server: %s Client: %s",
                  e,
                  JSON.stringify(o),
                  JSON.stringify(i)
                ));
            }
          }),
          (Z1 = function (e) {
            if (!ya) {
              ya = true;
              var t = [];
              e.forEach(function (a) {
                t.push(a);
              }),
                S("Extra attributes from the server: %s", t);
            }
          }),
          (mh = function (e, t) {
            t === false
              ? S(
                  "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
                  e,
                  e,
                  e
                )
              : S(
                  "Expected `%s` listener to be a function, instead got a value of `%s` type.",
                  e,
                  typeof t
                );
          }),
          (eS = function (e, t) {
            var a =
              e.namespaceURI === si
                ? e.ownerDocument.createElement(e.tagName)
                : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
            return (a.innerHTML = t), a.innerHTML;
          });
        var vb = /\r\n?/g,
          hb = /\u0000|\uFFFD/g;
        function Sh(e) {
          Ta(e);
          var t = typeof e == "string" ? e : "" + e;
          return t
            .replace(
              vb,
              `
`
            )
            .replace(hb, "");
        }
        function xh(e, t, a, i) {
          var o = Sh(t),
            s = Sh(e);
          if (
            s !== o &&
            (i &&
              (ya ||
                ((ya = true),
                S(
                  'Text content did not match. Server: "%s" Client: "%s"',
                  s,
                  o
                ))),
            a && lr)
          )
            throw new Error(
              "Text content does not match server-rendered HTML."
            );
        }
        function tS(e) {
          return e.nodeType === Ma ? e : e.ownerDocument;
        }
        function gb() {}
        function Ch(e) {
          e.onclick = gb;
        }
        function yb(e, t, a, i, o) {
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var d = i[s];
              if (s === us) d && Object.freeze(d), gv(t, d);
              else if (s === Id) {
                var g = d ? d[gh] : void 0;
                g != null && iv(t, g);
              } else if (s === os)
                if (typeof d == "string") {
                  var y = e !== "textarea" || d !== "";
                  y && $s(t, d);
                } else typeof d == "number" && $s(t, "" + d);
              else
                s === hh ||
                  s === Zo ||
                  s === K1 ||
                  (Sr.hasOwnProperty(s)
                    ? d != null &&
                      (typeof d != "function" && mh(s, d),
                      s === "onScroll" && qt("scroll", t))
                    : d != null && Ia(t, s, d, o));
            }
        }
        function mb(e, t, a, i) {
          for (var o = 0; o < t.length; o += 2) {
            var s = t[o],
              d = t[o + 1];
            s === us
              ? gv(e, d)
              : s === Id
              ? iv(e, d)
              : s === os
              ? $s(e, d)
              : Ia(e, s, d, i);
          }
        }
        function Sb(e, t, a, i) {
          var o,
            s = tS(a),
            d,
            g = i;
          if ((g === si && (g = Us(e)), g === si)) {
            if (
              ((o = fi(e, t)),
              !o &&
                e !== e.toLowerCase() &&
                S(
                  "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                  e
                ),
              e === "script")
            ) {
              var y = s.createElement("div");
              y.innerHTML = "<script></script>";
              var C = y.firstChild;
              d = y.removeChild(C);
            } else if (typeof t.is == "string")
              d = s.createElement(e, {
                is: t.is,
              });
            else if (((d = s.createElement(e)), e === "select")) {
              var E = d;
              t.multiple ? (E.multiple = true) : t.size && (E.size = t.size);
            }
          } else d = s.createElementNS(g, e);
          return (
            g === si &&
              !o &&
              Object.prototype.toString.call(d) ===
                "[object HTMLUnknownElement]" &&
              !Xn.call(Py, e) &&
              ((Py[e] = true),
              S(
                "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                e
              )),
            d
          );
        }
        function xb(e, t) {
          return tS(t).createTextNode(e);
        }
        function Cb(e, t, a, i) {
          var o = fi(t, a);
          yh(t, a);
          var s;
          switch (t) {
            case "dialog":
              qt("cancel", e), qt("close", e), (s = a);
              break;
            case "iframe":
            case "object":
            case "embed":
              qt("load", e), (s = a);
              break;
            case "video":
            case "audio":
              for (var d = 0; d < Vd.length; d++) qt(Vd[d], e);
              s = a;
              break;
            case "source":
              qt("error", e), (s = a);
              break;
            case "img":
            case "image":
            case "link":
              qt("error", e), qt("load", e), (s = a);
              break;
            case "details":
              qt("toggle", e), (s = a);
              break;
            case "input":
              Tu(e, a), (s = wu(e, a)), qt("invalid", e);
              break;
            case "option":
              js(e, a), (s = a);
              break;
            case "select":
              tv(e, a), (s = Mf(e, a)), qt("invalid", e);
              break;
            case "textarea":
              nv(e, a), (s = Of(e, a)), qt("invalid", e);
              break;
            default:
              s = a;
          }
          switch ((Bs(t, s), yb(t, e, i, s, o), t)) {
            case "input":
              Tl(e), Ru(e, a, false);
              break;
            case "textarea":
              Tl(e), av(e);
              break;
            case "option":
              zf(e, a);
              break;
            case "select":
              ey(e, a);
              break;
            default:
              typeof s.onClick == "function" && Ch(e);
              break;
          }
        }
        function Eb(e, t, a, i, o) {
          yh(t, i);
          var s = null,
            d,
            g;
          switch (t) {
            case "input":
              (d = wu(e, a)), (g = wu(e, i)), (s = []);
              break;
            case "select":
              (d = Mf(e, a)), (g = Mf(e, i)), (s = []);
              break;
            case "textarea":
              (d = Of(e, a)), (g = Of(e, i)), (s = []);
              break;
            default:
              (d = a),
                (g = i),
                typeof d.onClick != "function" &&
                  typeof g.onClick == "function" &&
                  Ch(e);
              break;
          }
          Bs(t, g);
          var y,
            C,
            E = null;
          for (y in d)
            if (!(g.hasOwnProperty(y) || !d.hasOwnProperty(y) || d[y] == null))
              if (y === us) {
                var M = d[y];
                for (C in M)
                  M.hasOwnProperty(C) && (E || (E = {}), (E[C] = ""));
              } else
                y === Id ||
                  y === os ||
                  y === hh ||
                  y === Zo ||
                  y === K1 ||
                  (Sr.hasOwnProperty(y)
                    ? s || (s = [])
                    : (s = s || []).push(y, null));
          for (y in g) {
            var _ = g[y],
              B = d != null ? d[y] : void 0;
            if (!(!g.hasOwnProperty(y) || _ === B || (_ == null && B == null)))
              if (y === us)
                if ((_ && Object.freeze(_), B)) {
                  for (C in B)
                    B.hasOwnProperty(C) &&
                      (!_ || !_.hasOwnProperty(C)) &&
                      (E || (E = {}), (E[C] = ""));
                  for (C in _)
                    _.hasOwnProperty(C) &&
                      B[C] !== _[C] &&
                      (E || (E = {}), (E[C] = _[C]));
                } else E || (s || (s = []), s.push(y, E)), (E = _);
              else if (y === Id) {
                var V = _ ? _[gh] : void 0,
                  I = B ? B[gh] : void 0;
                V != null && I !== V && (s = s || []).push(y, V);
              } else
                y === os
                  ? (typeof _ == "string" || typeof _ == "number") &&
                    (s = s || []).push(y, "" + _)
                  : y === hh ||
                    y === Zo ||
                    (Sr.hasOwnProperty(y)
                      ? (_ != null &&
                          (typeof _ != "function" && mh(y, _),
                          y === "onScroll" && qt("scroll", e)),
                        !s && B !== _ && (s = []))
                      : (s = s || []).push(y, _));
          }
          return E && (Nu(E, g[us]), (s = s || []).push(us, E)), s;
        }
        function bb(e, t, a, i, o) {
          a === "input" && o.type === "radio" && o.name != null && _f(e, o);
          var s = fi(a, i),
            d = fi(a, o);
          switch ((mb(e, t, s, d), a)) {
            case "input":
              xo(e, o);
              break;
            case "textarea":
              rv(e, o);
              break;
            case "select":
              ty(e, o);
              break;
          }
        }
        function wb(e) {
          {
            var t = e.toLowerCase();
            return (Vs.hasOwnProperty(t) && Vs[t]) || null;
          }
        }
        function Tb(e, t, a, i, o, s, d) {
          var g, y;
          switch (((g = fi(t, a)), yh(t, a), t)) {
            case "dialog":
              qt("cancel", e), qt("close", e);
              break;
            case "iframe":
            case "object":
            case "embed":
              qt("load", e);
              break;
            case "video":
            case "audio":
              for (var C = 0; C < Vd.length; C++) qt(Vd[C], e);
              break;
            case "source":
              qt("error", e);
              break;
            case "img":
            case "image":
            case "link":
              qt("error", e), qt("load", e);
              break;
            case "details":
              qt("toggle", e);
              break;
            case "input":
              Tu(e, a), qt("invalid", e);
              break;
            case "option":
              js(e, a);
              break;
            case "select":
              tv(e, a), qt("invalid", e);
              break;
            case "textarea":
              nv(e, a), qt("invalid", e);
              break;
          }
          Bs(t, a);
          {
            y = /* @__PURE__ */ new Set();
            for (var E = e.attributes, M = 0; M < E.length; M++) {
              var _ = E[M].name.toLowerCase();
              switch (_) {
                case "value":
                  break;
                case "checked":
                  break;
                case "selected":
                  break;
                default:
                  y.add(E[M].name);
              }
            }
          }
          var B = null;
          for (var V in a)
            if (a.hasOwnProperty(V)) {
              var I = a[V];
              if (V === os)
                typeof I == "string"
                  ? e.textContent !== I &&
                    (a[Zo] !== true && xh(e.textContent, I, s, d),
                    (B = [os, I]))
                  : typeof I == "number" &&
                    e.textContent !== "" + I &&
                    (a[Zo] !== true && xh(e.textContent, I, s, d),
                    (B = [os, "" + I]));
              else if (Sr.hasOwnProperty(V))
                I != null &&
                  (typeof I != "function" && mh(V, I),
                  V === "onScroll" && qt("scroll", e));
              else if (
                d && // Convince Flow we've calculated it (it's DEV-only in this method.)
                typeof g == "boolean"
              ) {
                var he = void 0,
                  _e = g && jn ? null : $r(V);
                if (a[Zo] !== true) {
                  if (
                    !(
                      V === hh ||
                      V === Zo || // Controlled attributes are not validated
                      // TODO: Only ignore them on controlled tags.
                      V === "value" ||
                      V === "checked" ||
                      V === "selected"
                    )
                  ) {
                    if (V === Id) {
                      var Te = e.innerHTML,
                        st = I ? I[gh] : void 0;
                      if (st != null) {
                        var it = eS(e, st);
                        it !== Te && Qd(V, Te, it);
                      }
                    } else if (V === us) {
                      if ((y.delete(V), J1)) {
                        var F = sy(I);
                        (he = e.getAttribute("style")),
                          F !== he && Qd(V, he, F);
                      }
                    } else if (g && !jn)
                      y.delete(V.toLowerCase()),
                        (he = go(e, V, I)),
                        I !== he && Qd(V, he, I);
                    else if (!tn(V, _e, g) && !Lt(V, I, _e, g)) {
                      var Q = false;
                      if (_e !== null)
                        y.delete(_e.attributeName), (he = El(e, V, I, _e));
                      else {
                        var $ = i;
                        if (($ === si && ($ = Us(t)), $ === si))
                          y.delete(V.toLowerCase());
                        else {
                          var re = wb(V);
                          re !== null && re !== V && ((Q = true), y.delete(re)),
                            y.delete(V);
                        }
                        he = go(e, V, I);
                      }
                      var ge = jn;
                      !ge && I !== he && !Q && Qd(V, he, I);
                    }
                  }
                }
              }
            }
          switch (
            (d && // $FlowFixMe - Should be inferred as not undefined.
              y.size > 0 &&
              a[Zo] !== true &&
              Z1(y),
            t)
          ) {
            case "input":
              Tl(e), Ru(e, a, true);
              break;
            case "textarea":
              Tl(e), av(e);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && Ch(e);
              break;
          }
          return B;
        }
        function Rb(e, t, a) {
          var i = e.nodeValue !== t;
          return i;
        }
        function Yy(e, t) {
          {
            if (ya) return;
            (ya = true),
              S(
                "Did not expect server HTML to contain a <%s> in <%s>.",
                t.nodeName.toLowerCase(),
                e.nodeName.toLowerCase()
              );
          }
        }
        function Iy(e, t) {
          {
            if (ya) return;
            (ya = true),
              S(
                'Did not expect server HTML to contain the text node "%s" in <%s>.',
                t.nodeValue,
                e.nodeName.toLowerCase()
              );
          }
        }
        function Qy(e, t, a) {
          {
            if (ya) return;
            (ya = true),
              S(
                "Expected server HTML to contain a matching <%s> in <%s>.",
                t,
                e.nodeName.toLowerCase()
              );
          }
        }
        function Gy(e, t) {
          {
            if (t === "" || ya) return;
            (ya = true),
              S(
                'Expected server HTML to contain a matching text node for "%s" in <%s>.',
                t,
                e.nodeName.toLowerCase()
              );
          }
        }
        function kb(e, t, a) {
          switch (t) {
            case "input":
              Kp(e, a);
              return;
            case "textarea":
              jf(e, a);
              return;
            case "select":
              ny(e, a);
              return;
          }
        }
        var Gd = function () {},
          Wd = function () {};
        {
          var Db = [
              "address",
              "applet",
              "area",
              "article",
              "aside",
              "base",
              "basefont",
              "bgsound",
              "blockquote",
              "body",
              "br",
              "button",
              "caption",
              "center",
              "col",
              "colgroup",
              "dd",
              "details",
              "dir",
              "div",
              "dl",
              "dt",
              "embed",
              "fieldset",
              "figcaption",
              "figure",
              "footer",
              "form",
              "frame",
              "frameset",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "head",
              "header",
              "hgroup",
              "hr",
              "html",
              "iframe",
              "img",
              "input",
              "isindex",
              "li",
              "link",
              "listing",
              "main",
              "marquee",
              "menu",
              "menuitem",
              "meta",
              "nav",
              "noembed",
              "noframes",
              "noscript",
              "object",
              "ol",
              "p",
              "param",
              "plaintext",
              "pre",
              "script",
              "section",
              "select",
              "source",
              "style",
              "summary",
              "table",
              "tbody",
              "td",
              "template",
              "textarea",
              "tfoot",
              "th",
              "thead",
              "title",
              "tr",
              "track",
              "ul",
              "wbr",
              "xmp",
            ],
            nS = [
              "applet",
              "caption",
              "html",
              "table",
              "td",
              "th",
              "marquee",
              "object",
              "template",
              // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
              // TODO: Distinguish by namespace here -- for <title>, including it here
              // errs on the side of fewer warnings
              "foreignObject",
              "desc",
              "title",
            ],
            Nb = nS.concat(["button"]),
            _b = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"],
            rS = {
              current: null,
              formTag: null,
              aTagInScope: null,
              buttonTagInScope: null,
              nobrTagInScope: null,
              pTagInButtonScope: null,
              listItemTagAutoclosing: null,
              dlItemTagAutoclosing: null,
            };
          Wd = function (e, t) {
            var a = rt({}, e || rS),
              i = {
                tag: t,
              };
            return (
              nS.indexOf(t) !== -1 &&
                ((a.aTagInScope = null),
                (a.buttonTagInScope = null),
                (a.nobrTagInScope = null)),
              Nb.indexOf(t) !== -1 && (a.pTagInButtonScope = null),
              Db.indexOf(t) !== -1 &&
                t !== "address" &&
                t !== "div" &&
                t !== "p" &&
                ((a.listItemTagAutoclosing = null),
                (a.dlItemTagAutoclosing = null)),
              (a.current = i),
              t === "form" && (a.formTag = i),
              t === "a" && (a.aTagInScope = i),
              t === "button" && (a.buttonTagInScope = i),
              t === "nobr" && (a.nobrTagInScope = i),
              t === "p" && (a.pTagInButtonScope = i),
              t === "li" && (a.listItemTagAutoclosing = i),
              (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i),
              a
            );
          };
          var zb = function (e, t) {
              switch (t) {
                case "select":
                  return e === "option" || e === "optgroup" || e === "#text";
                case "optgroup":
                  return e === "option" || e === "#text";
                case "option":
                  return e === "#text";
                case "tr":
                  return (
                    e === "th" ||
                    e === "td" ||
                    e === "style" ||
                    e === "script" ||
                    e === "template"
                  );
                case "tbody":
                case "thead":
                case "tfoot":
                  return (
                    e === "tr" ||
                    e === "style" ||
                    e === "script" ||
                    e === "template"
                  );
                case "colgroup":
                  return e === "col" || e === "template";
                case "table":
                  return (
                    e === "caption" ||
                    e === "colgroup" ||
                    e === "tbody" ||
                    e === "tfoot" ||
                    e === "thead" ||
                    e === "style" ||
                    e === "script" ||
                    e === "template"
                  );
                case "head":
                  return (
                    e === "base" ||
                    e === "basefont" ||
                    e === "bgsound" ||
                    e === "link" ||
                    e === "meta" ||
                    e === "title" ||
                    e === "noscript" ||
                    e === "noframes" ||
                    e === "style" ||
                    e === "script" ||
                    e === "template"
                  );
                case "html":
                  return e === "head" || e === "body" || e === "frameset";
                case "frameset":
                  return e === "frame";
                case "#document":
                  return e === "html";
              }
              switch (e) {
                case "h1":
                case "h2":
                case "h3":
                case "h4":
                case "h5":
                case "h6":
                  return (
                    t !== "h1" &&
                    t !== "h2" &&
                    t !== "h3" &&
                    t !== "h4" &&
                    t !== "h5" &&
                    t !== "h6"
                  );
                case "rp":
                case "rt":
                  return _b.indexOf(t) === -1;
                case "body":
                case "caption":
                case "col":
                case "colgroup":
                case "frameset":
                case "frame":
                case "head":
                case "html":
                case "tbody":
                case "td":
                case "tfoot":
                case "th":
                case "thead":
                case "tr":
                  return t == null;
              }
              return true;
            },
            Mb = function (e, t) {
              switch (e) {
                case "address":
                case "article":
                case "aside":
                case "blockquote":
                case "center":
                case "details":
                case "dialog":
                case "dir":
                case "div":
                case "dl":
                case "fieldset":
                case "figcaption":
                case "figure":
                case "footer":
                case "header":
                case "hgroup":
                case "main":
                case "menu":
                case "nav":
                case "ol":
                case "p":
                case "section":
                case "summary":
                case "ul":
                case "pre":
                case "listing":
                case "table":
                case "hr":
                case "xmp":
                case "h1":
                case "h2":
                case "h3":
                case "h4":
                case "h5":
                case "h6":
                  return t.pTagInButtonScope;
                case "form":
                  return t.formTag || t.pTagInButtonScope;
                case "li":
                  return t.listItemTagAutoclosing;
                case "dd":
                case "dt":
                  return t.dlItemTagAutoclosing;
                case "button":
                  return t.buttonTagInScope;
                case "a":
                  return t.aTagInScope;
                case "nobr":
                  return t.nobrTagInScope;
              }
              return null;
            },
            aS = {};
          Gd = function (e, t, a) {
            a = a || rS;
            var i = a.current,
              o = i && i.tag;
            t != null &&
              (e != null &&
                S(
                  "validateDOMNesting: when childText is passed, childTag should be null"
                ),
              (e = "#text"));
            var s = zb(e, o) ? null : i,
              d = s ? null : Mb(e, a),
              g = s || d;
            if (g) {
              var y = g.tag,
                C = !!s + "|" + e + "|" + y;
              if (!aS[C]) {
                aS[C] = true;
                var E = e,
                  M = "";
                if (
                  (e === "#text"
                    ? /\S/.test(t)
                      ? (E = "Text nodes")
                      : ((E = "Whitespace text nodes"),
                        (M =
                          " Make sure you don't have any extra whitespace between tags on each line of your source code."))
                    : (E = "<" + e + ">"),
                  s)
                ) {
                  var _ = "";
                  y === "table" &&
                    e === "tr" &&
                    (_ +=
                      " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),
                    S(
                      "validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",
                      E,
                      y,
                      M,
                      _
                    );
                } else
                  S(
                    "validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",
                    E,
                    y
                  );
              }
            }
          };
        }
        var Eh = "suppressHydrationWarning",
          bh = "$",
          wh = "/$",
          Xd = "$?",
          qd = "$!",
          Lb = "style",
          Wy = null,
          Xy = null;
        function Ob(e) {
          var t,
            a,
            i = e.nodeType;
          switch (i) {
            case Ma:
            case Rl: {
              t = i === Ma ? "#document" : "#fragment";
              var o = e.documentElement;
              a = o ? o.namespaceURI : Uf(null, "");
              break;
            }
            default: {
              var s = i === un ? e.parentNode : e,
                d = s.namespaceURI || null;
              (t = s.tagName), (a = Uf(d, t));
              break;
            }
          }
          {
            var g = t.toLowerCase(),
              y = Wd(null, g);
            return {
              namespace: a,
              ancestorInfo: y,
            };
          }
        }
        function jb(e, t, a) {
          {
            var i = e,
              o = Uf(i.namespace, t),
              s = Wd(i.ancestorInfo, t);
            return {
              namespace: o,
              ancestorInfo: s,
            };
          }
        }
        function C_(e) {
          return e;
        }
        function Ab(e) {
          (Wy = Gr()), (Xy = qE());
          var t = null;
          return zn(false), t;
        }
        function Ub(e) {
          KE(Xy), zn(Wy), (Wy = null), (Xy = null);
        }
        function Fb(e, t, a, i, o) {
          var s;
          {
            var d = i;
            if (
              (Gd(e, null, d.ancestorInfo),
              typeof t.children == "string" || typeof t.children == "number")
            ) {
              var g = "" + t.children,
                y = Wd(d.ancestorInfo, e);
              Gd(null, g, y);
            }
            s = d.namespace;
          }
          var C = Sb(e, t, a, s);
          return Jd(o, C), rm(C, t), C;
        }
        function $b(e, t) {
          e.appendChild(t);
        }
        function Hb(e, t, a, i, o) {
          switch ((Cb(e, t, a, i), t)) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!a.autoFocus;
            case "img":
              return true;
            default:
              return false;
          }
        }
        function Bb(e, t, a, i, o, s) {
          {
            var d = s;
            if (
              typeof i.children != typeof a.children &&
              (typeof i.children == "string" || typeof i.children == "number")
            ) {
              var g = "" + i.children,
                y = Wd(d.ancestorInfo, t);
              Gd(null, g, y);
            }
          }
          return Eb(e, t, a, i);
        }
        function qy(e, t) {
          return (
            e === "textarea" ||
            e === "noscript" ||
            typeof t.children == "string" ||
            typeof t.children == "number" ||
            (typeof t.dangerouslySetInnerHTML == "object" &&
              t.dangerouslySetInnerHTML !== null &&
              t.dangerouslySetInnerHTML.__html != null)
          );
        }
        function Vb(e, t, a, i) {
          {
            var o = a;
            Gd(null, e, o.ancestorInfo);
          }
          var s = xb(e, t);
          return Jd(i, s), s;
        }
        function Pb() {
          var e = window.event;
          return e === void 0 ? Si : sr(e.type);
        }
        var Ky = typeof setTimeout == "function" ? setTimeout : void 0,
          Yb = typeof clearTimeout == "function" ? clearTimeout : void 0,
          Zy = -1,
          iS = typeof Promise == "function" ? Promise : void 0,
          Ib =
            typeof queueMicrotask == "function"
              ? queueMicrotask
              : typeof iS < "u"
              ? function (e) {
                  return iS.resolve(null).then(e).catch(Qb);
                }
              : Ky;
        function Qb(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function Gb(e, t, a, i) {
          switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              a.autoFocus && e.focus();
              return;
            case "img": {
              a.src && (e.src = a.src);
              return;
            }
          }
        }
        function Wb(e, t, a, i, o, s) {
          bb(e, t, a, i, o), rm(e, o);
        }
        function lS(e) {
          $s(e, "");
        }
        function Xb(e, t, a) {
          e.nodeValue = a;
        }
        function qb(e, t) {
          e.appendChild(t);
        }
        function Kb(e, t) {
          var a;
          e.nodeType === un
            ? ((a = e.parentNode), a.insertBefore(t, e))
            : ((a = e), a.appendChild(t));
          var i = e._reactRootContainer;
          i == null && a.onclick === null && Ch(a);
        }
        function Zb(e, t, a) {
          e.insertBefore(t, a);
        }
        function Jb(e, t, a) {
          e.nodeType === un
            ? e.parentNode.insertBefore(t, a)
            : e.insertBefore(t, a);
        }
        function ew(e, t) {
          e.removeChild(t);
        }
        function tw(e, t) {
          e.nodeType === un ? e.parentNode.removeChild(t) : e.removeChild(t);
        }
        function Jy(e, t) {
          var a = t,
            i = 0;
          do {
            var o = a.nextSibling;
            if ((e.removeChild(a), o && o.nodeType === un)) {
              var s = o.data;
              if (s === wh)
                if (i === 0) {
                  e.removeChild(o), at(t);
                  return;
                } else i--;
              else (s === bh || s === Xd || s === qd) && i++;
            }
            a = o;
          } while (a);
          at(t);
        }
        function nw(e, t) {
          e.nodeType === un
            ? Jy(e.parentNode, t)
            : e.nodeType === Er && Jy(e, t),
            at(e);
        }
        function rw(e) {
          e = e;
          var t = e.style;
          typeof t.setProperty == "function"
            ? t.setProperty("display", "none", "important")
            : (t.display = "none");
        }
        function aw(e) {
          e.nodeValue = "";
        }
        function iw(e, t) {
          e = e;
          var a = t[Lb],
            i = a != null && a.hasOwnProperty("display") ? a.display : null;
          e.style.display = Hs("display", i);
        }
        function lw(e, t) {
          e.nodeValue = t;
        }
        function ow(e) {
          e.nodeType === Er
            ? (e.textContent = "")
            : e.nodeType === Ma &&
              e.documentElement &&
              e.removeChild(e.documentElement);
        }
        function uw(e, t, a) {
          return e.nodeType !== Er ||
            t.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e;
        }
        function sw(e, t) {
          return t === "" || e.nodeType !== ci ? null : e;
        }
        function cw(e) {
          return e.nodeType !== un ? null : e;
        }
        function oS(e) {
          return e.data === Xd;
        }
        function em(e) {
          return e.data === qd;
        }
        function fw(e) {
          var t = e.nextSibling && e.nextSibling.dataset,
            a,
            i,
            o;
          return (
            t && ((a = t.dgst), (i = t.msg), (o = t.stck)),
            {
              message: i,
              digest: a,
              stack: o,
            }
          );
        }
        function dw(e, t) {
          e._reactRetry = t;
        }
        function Th(e) {
          for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === Er || t === ci) break;
            if (t === un) {
              var a = e.data;
              if (a === bh || a === qd || a === Xd) break;
              if (a === wh) return null;
            }
          }
          return e;
        }
        function Kd(e) {
          return Th(e.nextSibling);
        }
        function pw(e) {
          return Th(e.firstChild);
        }
        function vw(e) {
          return Th(e.firstChild);
        }
        function hw(e) {
          return Th(e.nextSibling);
        }
        function gw(e, t, a, i, o, s, d) {
          Jd(s, e), rm(e, a);
          var g;
          {
            var y = o;
            g = y.namespace;
          }
          var C = (s.mode & nt) !== Le;
          return Tb(e, t, a, g, i, C, d);
        }
        function yw(e, t, a, i) {
          return Jd(a, e), a.mode & nt, Rb(e, t);
        }
        function mw(e, t) {
          Jd(t, e);
        }
        function Sw(e) {
          for (var t = e.nextSibling, a = 0; t; ) {
            if (t.nodeType === un) {
              var i = t.data;
              if (i === wh) {
                if (a === 0) return Kd(t);
                a--;
              } else (i === bh || i === qd || i === Xd) && a++;
            }
            t = t.nextSibling;
          }
          return null;
        }
        function uS(e) {
          for (var t = e.previousSibling, a = 0; t; ) {
            if (t.nodeType === un) {
              var i = t.data;
              if (i === bh || i === qd || i === Xd) {
                if (a === 0) return t;
                a--;
              } else i === wh && a++;
            }
            t = t.previousSibling;
          }
          return null;
        }
        function xw(e) {
          at(e);
        }
        function Cw(e) {
          at(e);
        }
        function Ew(e) {
          return e !== "head" && e !== "body";
        }
        function bw(e, t, a, i) {
          var o = true;
          xh(t.nodeValue, a, i, o);
        }
        function ww(e, t, a, i, o, s) {
          if (t[Eh] !== true) {
            var d = true;
            xh(i.nodeValue, o, s, d);
          }
        }
        function Tw(e, t) {
          t.nodeType === Er ? Yy(e, t) : t.nodeType === un || Iy(e, t);
        }
        function Rw(e, t) {
          {
            var a = e.parentNode;
            a !== null &&
              (t.nodeType === Er ? Yy(a, t) : t.nodeType === un || Iy(a, t));
          }
        }
        function kw(e, t, a, i, o) {
          (o || t[Eh] !== true) &&
            (i.nodeType === Er ? Yy(a, i) : i.nodeType === un || Iy(a, i));
        }
        function Dw(e, t, a) {
          Qy(e, t);
        }
        function Nw(e, t) {
          Gy(e, t);
        }
        function _w(e, t, a) {
          {
            var i = e.parentNode;
            i !== null && Qy(i, t);
          }
        }
        function zw(e, t) {
          {
            var a = e.parentNode;
            a !== null && Gy(a, t);
          }
        }
        function Mw(e, t, a, i, o, s) {
          (s || t[Eh] !== true) && Qy(a, i);
        }
        function Lw(e, t, a, i, o) {
          (o || t[Eh] !== true) && Gy(a, i);
        }
        function Ow(e) {
          S(
            "An error occurred during hydration. The server HTML was replaced with client content in <%s>.",
            e.nodeName.toLowerCase()
          );
        }
        function jw(e) {
          Pd(e);
        }
        var Qc = Math.random().toString(36).slice(2),
          Gc = "__reactFiber$" + Qc,
          tm = "__reactProps$" + Qc,
          Zd = "__reactContainer$" + Qc,
          nm = "__reactEvents$" + Qc,
          Aw = "__reactListeners$" + Qc,
          Uw = "__reactHandles$" + Qc;
        function Fw(e) {
          delete e[Gc], delete e[tm], delete e[nm], delete e[Aw], delete e[Uw];
        }
        function Jd(e, t) {
          t[Gc] = e;
        }
        function Rh(e, t) {
          t[Zd] = e;
        }
        function sS(e) {
          e[Zd] = null;
        }
        function ep(e) {
          return !!e[Zd];
        }
        function ss(e) {
          var t = e[Gc];
          if (t) return t;
          for (var a = e.parentNode; a; ) {
            if (((t = a[Zd] || a[Gc]), t)) {
              var i = t.alternate;
              if (t.child !== null || (i !== null && i.child !== null))
                for (var o = uS(e); o !== null; ) {
                  var s = o[Gc];
                  if (s) return s;
                  o = uS(o);
                }
              return t;
            }
            (e = a), (a = e.parentNode);
          }
          return null;
        }
        function Jo(e) {
          var t = e[Gc] || e[Zd];
          return t &&
            (t.tag === X || t.tag === le || t.tag === Fe || t.tag === U)
            ? t
            : null;
        }
        function Wc(e) {
          if (e.tag === X || e.tag === le) return e.stateNode;
          throw new Error("getNodeFromInstance: Invalid argument.");
        }
        function kh(e) {
          return e[tm] || null;
        }
        function rm(e, t) {
          e[tm] = t;
        }
        function $w(e) {
          var t = e[nm];
          return t === void 0 && (t = e[nm] = /* @__PURE__ */ new Set()), t;
        }
        var cS = {},
          fS = p.ReactDebugCurrentFrame;
        function Dh(e) {
          if (e) {
            var t = e._owner,
              a = mu(e.type, e._source, t ? t.type : null);
            fS.setExtraStackFrame(a);
          } else fS.setExtraStackFrame(null);
        }
        function wi(e, t, a, i, o) {
          {
            var s = Function.call.bind(Xn);
            for (var d in e)
              if (s(e, d)) {
                var g = void 0;
                try {
                  if (typeof e[d] != "function") {
                    var y = Error(
                      (i || "React class") +
                        ": " +
                        a +
                        " type `" +
                        d +
                        "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                        typeof e[d] +
                        "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                    );
                    throw ((y.name = "Invariant Violation"), y);
                  }
                  g = e[d](
                    t,
                    d,
                    i,
                    a,
                    null,
                    "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                  );
                } catch (C) {
                  g = C;
                }
                g &&
                  !(g instanceof Error) &&
                  (Dh(o),
                  S(
                    "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                    i || "React class",
                    a,
                    d,
                    typeof g
                  ),
                  Dh(null)),
                  g instanceof Error &&
                    !(g.message in cS) &&
                    ((cS[g.message] = true),
                    Dh(o),
                    S("Failed %s type: %s", a, g.message),
                    Dh(null));
              }
          }
        }
        var am = [],
          Nh;
        Nh = [];
        var eo = -1;
        function eu(e) {
          return {
            current: e,
          };
        }
        function zr(e, t) {
          if (eo < 0) {
            S("Unexpected pop.");
            return;
          }
          t !== Nh[eo] && S("Unexpected Fiber popped."),
            (e.current = am[eo]),
            (am[eo] = null),
            (Nh[eo] = null),
            eo--;
        }
        function Mr(e, t, a) {
          eo++, (am[eo] = e.current), (Nh[eo] = a), (e.current = t);
        }
        var im;
        im = {};
        var Ua = {};
        Object.freeze(Ua);
        var to = eu(Ua),
          cl = eu(false),
          lm = Ua;
        function Xc(e, t, a) {
          return a && fl(t) ? lm : to.current;
        }
        function dS(e, t, a) {
          {
            var i = e.stateNode;
            (i.__reactInternalMemoizedUnmaskedChildContext = t),
              (i.__reactInternalMemoizedMaskedChildContext = a);
          }
        }
        function qc(e, t) {
          {
            var a = e.type,
              i = a.contextTypes;
            if (!i) return Ua;
            var o = e.stateNode;
            if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
              return o.__reactInternalMemoizedMaskedChildContext;
            var s = {};
            for (var d in i) s[d] = t[d];
            {
              var g = We2(e) || "Unknown";
              wi(i, s, "context", g);
            }
            return o && dS(e, t, s), s;
          }
        }
        function _h() {
          return cl.current;
        }
        function fl(e) {
          {
            var t = e.childContextTypes;
            return t != null;
          }
        }
        function zh(e) {
          zr(cl, e), zr(to, e);
        }
        function om(e) {
          zr(cl, e), zr(to, e);
        }
        function pS(e, t, a) {
          {
            if (to.current !== Ua)
              throw new Error(
                "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue."
              );
            Mr(to, t, e), Mr(cl, a, e);
          }
        }
        function vS(e, t, a) {
          {
            var i = e.stateNode,
              o = t.childContextTypes;
            if (typeof i.getChildContext != "function") {
              {
                var s = We2(e) || "Unknown";
                im[s] ||
                  ((im[s] = true),
                  S(
                    "%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",
                    s,
                    s
                  ));
              }
              return a;
            }
            var d = i.getChildContext();
            for (var g in d)
              if (!(g in o))
                throw new Error(
                  (We2(e) || "Unknown") +
                    '.getChildContext(): key "' +
                    g +
                    '" is not defined in childContextTypes.'
                );
            {
              var y = We2(e) || "Unknown";
              wi(o, d, "child context", y);
            }
            return rt({}, a, d);
          }
        }
        function Mh(e) {
          {
            var t = e.stateNode,
              a = (t && t.__reactInternalMemoizedMergedChildContext) || Ua;
            return (lm = to.current), Mr(to, a, e), Mr(cl, cl.current, e), true;
          }
        }
        function hS(e, t, a) {
          {
            var i = e.stateNode;
            if (!i)
              throw new Error(
                "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue."
              );
            if (a) {
              var o = vS(e, t, lm);
              (i.__reactInternalMemoizedMergedChildContext = o),
                zr(cl, e),
                zr(to, e),
                Mr(to, o, e),
                Mr(cl, a, e);
            } else zr(cl, e), Mr(cl, a, e);
          }
        }
        function Hw(e) {
          {
            if (!rd(e) || e.tag !== L)
              throw new Error(
                "Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue."
              );
            var t = e;
            do {
              switch (t.tag) {
                case U:
                  return t.stateNode.context;
                case L: {
                  var a = t.type;
                  if (fl(a))
                    return t.stateNode
                      .__reactInternalMemoizedMergedChildContext;
                  break;
                }
              }
              t = t.return;
            } while (t !== null);
            throw new Error(
              "Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue."
            );
          }
        }
        var tu = 0,
          Lh = 1,
          no = null,
          um = false,
          sm = false;
        function gS(e) {
          no === null ? (no = [e]) : no.push(e);
        }
        function Bw(e) {
          (um = true), gS(e);
        }
        function yS() {
          um && nu();
        }
        function nu() {
          if (!sm && no !== null) {
            sm = true;
            var e = 0,
              t = pa();
            try {
              var a = true,
                i = no;
              for (mn(er); e < i.length; e++) {
                var o = i[e];
                do o = o(a);
                while (o !== null);
              }
              (no = null), (um = false);
            } catch (s) {
              throw (no !== null && (no = no.slice(e + 1)), Ks(Js, nu), s);
            } finally {
              mn(t), (sm = false);
            }
          }
          return null;
        }
        var Kc = [],
          Zc = 0,
          Oh = null,
          jh = 0,
          Ja = [],
          ei = 0,
          cs = null,
          ro = 1,
          ao = "";
        function Vw(e) {
          return ds(), (e.flags & ed) !== De;
        }
        function Pw(e) {
          return ds(), jh;
        }
        function Yw() {
          var e = ao,
            t = ro,
            a = t & ~Iw(t);
          return a.toString(32) + e;
        }
        function fs(e, t) {
          ds(), (Kc[Zc++] = jh), (Kc[Zc++] = Oh), (Oh = e), (jh = t);
        }
        function mS(e, t, a) {
          ds(), (Ja[ei++] = ro), (Ja[ei++] = ao), (Ja[ei++] = cs), (cs = e);
          var i = ro,
            o = ao,
            s = Ah(i) - 1,
            d = i & ~(1 << s),
            g = a + 1,
            y = Ah(t) + s;
          if (y > 30) {
            var C = s - (s % 5),
              E = (1 << C) - 1,
              M = (d & E).toString(32),
              _ = d >> C,
              B = s - C,
              V = Ah(t) + B,
              I = g << B,
              he = I | _,
              _e = M + o;
            (ro = (1 << V) | he), (ao = _e);
          } else {
            var Te = g << s,
              st = Te | d,
              it = o;
            (ro = (1 << y) | st), (ao = it);
          }
        }
        function cm(e) {
          ds();
          var t = e.return;
          if (t !== null) {
            var a = 1,
              i = 0;
            fs(e, a), mS(e, a, i);
          }
        }
        function Ah(e) {
          return 32 - ic(e);
        }
        function Iw(e) {
          return 1 << (Ah(e) - 1);
        }
        function fm(e) {
          for (; e === Oh; )
            (Oh = Kc[--Zc]), (Kc[Zc] = null), (jh = Kc[--Zc]), (Kc[Zc] = null);
          for (; e === cs; )
            (cs = Ja[--ei]),
              (Ja[ei] = null),
              (ao = Ja[--ei]),
              (Ja[ei] = null),
              (ro = Ja[--ei]),
              (Ja[ei] = null);
        }
        function Qw() {
          return (
            ds(),
            cs !== null
              ? {
                  id: ro,
                  overflow: ao,
                }
              : null
          );
        }
        function Gw(e, t) {
          ds(),
            (Ja[ei++] = ro),
            (Ja[ei++] = ao),
            (Ja[ei++] = cs),
            (ro = t.id),
            (ao = t.overflow),
            (cs = e);
        }
        function ds() {
          fr() ||
            S(
              "Expected to be hydrating. This is a bug in React. Please file an issue."
            );
        }
        var cr = null,
          ti = null,
          Ti = false,
          ps = false,
          ru = null;
        function Ww() {
          Ti &&
            S(
              "We should not be hydrating here. This is a bug in React. Please file a bug."
            );
        }
        function SS() {
          ps = true;
        }
        function Xw() {
          return ps;
        }
        function qw(e) {
          var t = e.stateNode.containerInfo;
          return (
            (ti = vw(t)), (cr = e), (Ti = true), (ru = null), (ps = false), true
          );
        }
        function Kw(e, t, a) {
          return (
            (ti = hw(t)),
            (cr = e),
            (Ti = true),
            (ru = null),
            (ps = false),
            a !== null && Gw(e, a),
            true
          );
        }
        function xS(e, t) {
          switch (e.tag) {
            case U: {
              Tw(e.stateNode.containerInfo, t);
              break;
            }
            case X: {
              var a = (e.mode & nt) !== Le;
              kw(
                e.type,
                e.memoizedProps,
                e.stateNode,
                t,
                // TODO: Delete this argument when we remove the legacy root API.
                a
              );
              break;
            }
            case Fe: {
              var i = e.memoizedState;
              i.dehydrated !== null && Rw(i.dehydrated, t);
              break;
            }
          }
        }
        function CS(e, t) {
          xS(e, t);
          var a = e2();
          (a.stateNode = t), (a.return = e);
          var i = e.deletions;
          i === null ? ((e.deletions = [a]), (e.flags |= St)) : i.push(a);
        }
        function dm(e, t) {
          {
            if (ps) return;
            switch (e.tag) {
              case U: {
                var a = e.stateNode.containerInfo;
                switch (t.tag) {
                  case X:
                    var i = t.type;
                    t.pendingProps, Dw(a, i);
                    break;
                  case le:
                    var o = t.pendingProps;
                    Nw(a, o);
                    break;
                }
                break;
              }
              case X: {
                var s = e.type,
                  d = e.memoizedProps,
                  g = e.stateNode;
                switch (t.tag) {
                  case X: {
                    var y = t.type,
                      C = t.pendingProps,
                      E = (e.mode & nt) !== Le;
                    Mw(
                      s,
                      d,
                      g,
                      y,
                      C,
                      // TODO: Delete this argument when we remove the legacy root API.
                      E
                    );
                    break;
                  }
                  case le: {
                    var M = t.pendingProps,
                      _ = (e.mode & nt) !== Le;
                    Lw(
                      s,
                      d,
                      g,
                      M,
                      // TODO: Delete this argument when we remove the legacy root API.
                      _
                    );
                    break;
                  }
                }
                break;
              }
              case Fe: {
                var B = e.memoizedState,
                  V = B.dehydrated;
                if (V !== null)
                  switch (t.tag) {
                    case X:
                      var I = t.type;
                      t.pendingProps, _w(V, I);
                      break;
                    case le:
                      var he = t.pendingProps;
                      zw(V, he);
                      break;
                  }
                break;
              }
              default:
                return;
            }
          }
        }
        function ES(e, t) {
          (t.flags = (t.flags & ~ua) | At), dm(e, t);
        }
        function bS(e, t) {
          switch (e.tag) {
            case X: {
              var a = e.type;
              e.pendingProps;
              var i = uw(t, a);
              return i !== null
                ? ((e.stateNode = i), (cr = e), (ti = pw(i)), true)
                : false;
            }
            case le: {
              var o = e.pendingProps,
                s = sw(t, o);
              return s !== null
                ? ((e.stateNode = s), (cr = e), (ti = null), true)
                : false;
            }
            case Fe: {
              var d = cw(t);
              if (d !== null) {
                var g = {
                  dehydrated: d,
                  treeContext: Qw(),
                  retryLane: Nr,
                };
                e.memoizedState = g;
                var y = t2(d);
                return (
                  (y.return = e), (e.child = y), (cr = e), (ti = null), true
                );
              }
              return false;
            }
            default:
              return false;
          }
        }
        function pm(e) {
          return (e.mode & nt) !== Le && (e.flags & Be) === De;
        }
        function vm(e) {
          throw new Error(
            "Hydration failed because the initial UI does not match what was rendered on the server."
          );
        }
        function hm(e) {
          if (Ti) {
            var t = ti;
            if (!t) {
              pm(e) && (dm(cr, e), vm()), ES(cr, e), (Ti = false), (cr = e);
              return;
            }
            var a = t;
            if (!bS(e, t)) {
              pm(e) && (dm(cr, e), vm()), (t = Kd(a));
              var i = cr;
              if (!t || !bS(e, t)) {
                ES(cr, e), (Ti = false), (cr = e);
                return;
              }
              CS(i, a);
            }
          }
        }
        function Zw(e, t, a) {
          var i = e.stateNode,
            o = !ps,
            s = gw(i, e.type, e.memoizedProps, t, a, e, o);
          return (e.updateQueue = s), s !== null;
        }
        function Jw(e) {
          var t = e.stateNode,
            a = e.memoizedProps,
            i = yw(t, a, e);
          if (i) {
            var o = cr;
            if (o !== null)
              switch (o.tag) {
                case U: {
                  var s = o.stateNode.containerInfo,
                    d = (o.mode & nt) !== Le;
                  bw(
                    s,
                    t,
                    a,
                    // TODO: Delete this argument when we remove the legacy root API.
                    d
                  );
                  break;
                }
                case X: {
                  var g = o.type,
                    y = o.memoizedProps,
                    C = o.stateNode,
                    E = (o.mode & nt) !== Le;
                  ww(
                    g,
                    y,
                    C,
                    t,
                    a,
                    // TODO: Delete this argument when we remove the legacy root API.
                    E
                  );
                  break;
                }
              }
          }
          return i;
        }
        function eT(e) {
          var t = e.memoizedState,
            a = t !== null ? t.dehydrated : null;
          if (!a)
            throw new Error(
              "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
            );
          mw(a, e);
        }
        function tT(e) {
          var t = e.memoizedState,
            a = t !== null ? t.dehydrated : null;
          if (!a)
            throw new Error(
              "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
            );
          return Sw(a);
        }
        function wS(e) {
          for (
            var t = e.return;
            t !== null && t.tag !== X && t.tag !== U && t.tag !== Fe;

          )
            t = t.return;
          cr = t;
        }
        function Uh(e) {
          if (e !== cr) return false;
          if (!Ti) return wS(e), (Ti = true), false;
          if (
            e.tag !== U &&
            (e.tag !== X || (Ew(e.type) && !qy(e.type, e.memoizedProps)))
          ) {
            var t = ti;
            if (t)
              if (pm(e)) TS(e), vm();
              else for (; t; ) CS(e, t), (t = Kd(t));
          }
          return (
            wS(e),
            e.tag === Fe ? (ti = tT(e)) : (ti = cr ? Kd(e.stateNode) : null),
            true
          );
        }
        function nT() {
          return Ti && ti !== null;
        }
        function TS(e) {
          for (var t = ti; t; ) xS(e, t), (t = Kd(t));
        }
        function Jc() {
          (cr = null), (ti = null), (Ti = false), (ps = false);
        }
        function RS() {
          ru !== null && (xC(ru), (ru = null));
        }
        function fr() {
          return Ti;
        }
        function gm(e) {
          ru === null ? (ru = [e]) : ru.push(e);
        }
        var rT = p.ReactCurrentBatchConfig,
          aT = null;
        function iT() {
          return rT.transition;
        }
        var Ri = {
          recordUnsafeLifecycleWarnings: function (e, t) {},
          flushPendingUnsafeLifecycleWarnings: function () {},
          recordLegacyContextWarning: function (e, t) {},
          flushLegacyContextWarning: function () {},
          discardPendingWarnings: function () {},
        };
        {
          var lT = function (e) {
              for (var t = null, a = e; a !== null; )
                a.mode & Wt && (t = a), (a = a.return);
              return t;
            },
            vs = function (e) {
              var t = [];
              return (
                e.forEach(function (a) {
                  t.push(a);
                }),
                t.sort().join(", ")
              );
            },
            tp = [],
            np = [],
            rp = [],
            ap = [],
            ip = [],
            lp = [],
            hs = /* @__PURE__ */ new Set();
          (Ri.recordUnsafeLifecycleWarnings = function (e, t) {
            hs.has(e.type) ||
              (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
                t.componentWillMount.__suppressDeprecationWarning !== true &&
                tp.push(e),
              e.mode & Wt &&
                typeof t.UNSAFE_componentWillMount == "function" &&
                np.push(e),
              typeof t.componentWillReceiveProps == "function" &&
                t.componentWillReceiveProps.__suppressDeprecationWarning !==
                  true &&
                rp.push(e),
              e.mode & Wt &&
                typeof t.UNSAFE_componentWillReceiveProps == "function" &&
                ap.push(e),
              typeof t.componentWillUpdate == "function" &&
                t.componentWillUpdate.__suppressDeprecationWarning !== true &&
                ip.push(e),
              e.mode & Wt &&
                typeof t.UNSAFE_componentWillUpdate == "function" &&
                lp.push(e));
          }),
            (Ri.flushPendingUnsafeLifecycleWarnings = function () {
              var e = /* @__PURE__ */ new Set();
              tp.length > 0 &&
                (tp.forEach(function (_) {
                  e.add(We2(_) || "Component"), hs.add(_.type);
                }),
                (tp = []));
              var t = /* @__PURE__ */ new Set();
              np.length > 0 &&
                (np.forEach(function (_) {
                  t.add(We2(_) || "Component"), hs.add(_.type);
                }),
                (np = []));
              var a = /* @__PURE__ */ new Set();
              rp.length > 0 &&
                (rp.forEach(function (_) {
                  a.add(We2(_) || "Component"), hs.add(_.type);
                }),
                (rp = []));
              var i = /* @__PURE__ */ new Set();
              ap.length > 0 &&
                (ap.forEach(function (_) {
                  i.add(We2(_) || "Component"), hs.add(_.type);
                }),
                (ap = []));
              var o = /* @__PURE__ */ new Set();
              ip.length > 0 &&
                (ip.forEach(function (_) {
                  o.add(We2(_) || "Component"), hs.add(_.type);
                }),
                (ip = []));
              var s = /* @__PURE__ */ new Set();
              if (
                (lp.length > 0 &&
                  (lp.forEach(function (_) {
                    s.add(We2(_) || "Component"), hs.add(_.type);
                  }),
                  (lp = [])),
                t.size > 0)
              ) {
                var d = vs(t);
                S(
                  `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
                  d
                );
              }
              if (i.size > 0) {
                var g = vs(i);
                S(
                  `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,
                  g
                );
              }
              if (s.size > 0) {
                var y = vs(s);
                S(
                  `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
                  y
                );
              }
              if (e.size > 0) {
                var C = vs(e);
                R(
                  `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                  C
                );
              }
              if (a.size > 0) {
                var E = vs(a);
                R(
                  `componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                  E
                );
              }
              if (o.size > 0) {
                var M = vs(o);
                R(
                  `componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                  M
                );
              }
            });
          var Fh = /* @__PURE__ */ new Map(),
            kS = /* @__PURE__ */ new Set();
          (Ri.recordLegacyContextWarning = function (e, t) {
            var a = lT(e);
            if (a === null) {
              S(
                "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
              );
              return;
            }
            if (!kS.has(e.type)) {
              var i = Fh.get(a);
              (e.type.contextTypes != null ||
                e.type.childContextTypes != null ||
                (t !== null && typeof t.getChildContext == "function")) &&
                (i === void 0 && ((i = []), Fh.set(a, i)), i.push(e));
            }
          }),
            (Ri.flushLegacyContextWarning = function () {
              Fh.forEach(function (e, t) {
                if (e.length !== 0) {
                  var a = e[0],
                    i = /* @__PURE__ */ new Set();
                  e.forEach(function (s) {
                    i.add(We2(s) || "Component"), kS.add(s.type);
                  });
                  var o = vs(i);
                  try {
                    Tt(a),
                      S(
                        `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                        o
                      );
                  } finally {
                    hn();
                  }
                }
              });
            }),
            (Ri.discardPendingWarnings = function () {
              (tp = []),
                (np = []),
                (rp = []),
                (ap = []),
                (ip = []),
                (lp = []),
                (Fh = /* @__PURE__ */ new Map());
            });
        }
        function ki(e, t) {
          if (e && e.defaultProps) {
            var a = rt({}, t),
              i = e.defaultProps;
            for (var o in i) a[o] === void 0 && (a[o] = i[o]);
            return a;
          }
          return t;
        }
        var ym = eu(null),
          mm;
        mm = {};
        var $h = null,
          ef = null,
          Sm = null,
          Hh = false;
        function Bh() {
          ($h = null), (ef = null), (Sm = null), (Hh = false);
        }
        function DS() {
          Hh = true;
        }
        function NS() {
          Hh = false;
        }
        function _S(e, t, a) {
          Mr(ym, t._currentValue, e),
            (t._currentValue = a),
            t._currentRenderer !== void 0 &&
              t._currentRenderer !== null &&
              t._currentRenderer !== mm &&
              S(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ),
            (t._currentRenderer = mm);
        }
        function xm(e, t) {
          var a = ym.current;
          zr(ym, t), (e._currentValue = a);
        }
        function Cm(e, t, a) {
          for (var i = e; i !== null; ) {
            var o = i.alternate;
            if (
              (Pl(i.childLanes, t)
                ? o !== null &&
                  !Pl(o.childLanes, t) &&
                  (o.childLanes = qe(o.childLanes, t))
                : ((i.childLanes = qe(i.childLanes, t)),
                  o !== null && (o.childLanes = qe(o.childLanes, t))),
              i === a)
            )
              break;
            i = i.return;
          }
          i !== a &&
            S(
              "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
            );
        }
        function oT(e, t, a) {
          uT(e, t, a);
        }
        function uT(e, t, a) {
          var i = e.child;
          for (i !== null && (i.return = e); i !== null; ) {
            var o = void 0,
              s = i.dependencies;
            if (s !== null) {
              o = i.child;
              for (var d = s.firstContext; d !== null; ) {
                if (d.context === t) {
                  if (i.tag === L) {
                    var g = yn(a),
                      y = io(Mt, g);
                    y.tag = Ph;
                    var C = i.updateQueue;
                    if (C !== null) {
                      var E = C.shared,
                        M = E.pending;
                      M === null
                        ? (y.next = y)
                        : ((y.next = M.next), (M.next = y)),
                        (E.pending = y);
                    }
                  }
                  i.lanes = qe(i.lanes, a);
                  var _ = i.alternate;
                  _ !== null && (_.lanes = qe(_.lanes, a)),
                    Cm(i.return, a, e),
                    (s.lanes = qe(s.lanes, a));
                  break;
                }
                d = d.next;
              }
            } else if (i.tag === Ue) o = i.type === e.type ? null : i.child;
            else if (i.tag === Bt) {
              var B = i.return;
              if (B === null)
                throw new Error(
                  "We just came from a parent so we must have had a parent. This is a bug in React."
                );
              B.lanes = qe(B.lanes, a);
              var V = B.alternate;
              V !== null && (V.lanes = qe(V.lanes, a)),
                Cm(B, a, e),
                (o = i.sibling);
            } else o = i.child;
            if (o !== null) o.return = i;
            else
              for (o = i; o !== null; ) {
                if (o === e) {
                  o = null;
                  break;
                }
                var I = o.sibling;
                if (I !== null) {
                  (I.return = o.return), (o = I);
                  break;
                }
                o = o.return;
              }
            i = o;
          }
        }
        function tf(e, t) {
          ($h = e), (ef = null), (Sm = null);
          var a = e.dependencies;
          if (a !== null) {
            var i = a.firstContext;
            i !== null && (_r(a.lanes, t) && xp(), (a.firstContext = null));
          }
        }
        function Ln(e) {
          Hh &&
            S(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
            );
          var t = e._currentValue;
          if (Sm !== e) {
            var a = {
              context: e,
              memoizedValue: t,
              next: null,
            };
            if (ef === null) {
              if ($h === null)
                throw new Error(
                  "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
                );
              (ef = a),
                ($h.dependencies = {
                  lanes: G,
                  firstContext: a,
                });
            } else ef = ef.next = a;
          }
          return t;
        }
        var gs = null;
        function Em(e) {
          gs === null ? (gs = [e]) : gs.push(e);
        }
        function sT() {
          if (gs !== null) {
            for (var e = 0; e < gs.length; e++) {
              var t = gs[e],
                a = t.interleaved;
              if (a !== null) {
                t.interleaved = null;
                var i = a.next,
                  o = t.pending;
                if (o !== null) {
                  var s = o.next;
                  (o.next = i), (a.next = s);
                }
                t.pending = a;
              }
            }
            gs = null;
          }
        }
        function zS(e, t, a, i) {
          var o = t.interleaved;
          return (
            o === null
              ? ((a.next = a), Em(t))
              : ((a.next = o.next), (o.next = a)),
            (t.interleaved = a),
            Vh(e, i)
          );
        }
        function cT(e, t, a, i) {
          var o = t.interleaved;
          o === null
            ? ((a.next = a), Em(t))
            : ((a.next = o.next), (o.next = a)),
            (t.interleaved = a);
        }
        function fT(e, t, a, i) {
          var o = t.interleaved;
          return (
            o === null
              ? ((a.next = a), Em(t))
              : ((a.next = o.next), (o.next = a)),
            (t.interleaved = a),
            Vh(e, i)
          );
        }
        function ma(e, t) {
          return Vh(e, t);
        }
        var dT = Vh;
        function Vh(e, t) {
          e.lanes = qe(e.lanes, t);
          var a = e.alternate;
          a !== null && (a.lanes = qe(a.lanes, t)),
            a === null && (e.flags & (At | ua)) !== De && MC(e);
          for (var i = e, o = e.return; o !== null; )
            (o.childLanes = qe(o.childLanes, t)),
              (a = o.alternate),
              a !== null
                ? (a.childLanes = qe(a.childLanes, t))
                : (o.flags & (At | ua)) !== De && MC(e),
              (i = o),
              (o = o.return);
          if (i.tag === U) {
            var s = i.stateNode;
            return s;
          } else return null;
        }
        var MS = 0,
          LS = 1,
          Ph = 2,
          bm = 3,
          Yh = false,
          wm,
          Ih;
        (wm = false), (Ih = null);
        function Tm(e) {
          var t = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
              pending: null,
              interleaved: null,
              lanes: G,
            },
            effects: null,
          };
          e.updateQueue = t;
        }
        function OS(e, t) {
          var a = t.updateQueue,
            i = e.updateQueue;
          if (a === i) {
            var o = {
              baseState: i.baseState,
              firstBaseUpdate: i.firstBaseUpdate,
              lastBaseUpdate: i.lastBaseUpdate,
              shared: i.shared,
              effects: i.effects,
            };
            t.updateQueue = o;
          }
        }
        function io(e, t) {
          var a = {
            eventTime: e,
            lane: t,
            tag: MS,
            payload: null,
            callback: null,
            next: null,
          };
          return a;
        }
        function au(e, t, a) {
          var i = e.updateQueue;
          if (i === null) return null;
          var o = i.shared;
          if (
            (Ih === o &&
              !wm &&
              (S(
                "An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."
              ),
              (wm = true)),
            dk())
          ) {
            var s = o.pending;
            return (
              s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
              (o.pending = t),
              dT(e, a)
            );
          } else return fT(e, o, t, a);
        }
        function Qh(e, t, a) {
          var i = t.updateQueue;
          if (i !== null) {
            var o = i.shared;
            if (gd(a)) {
              var s = o.lanes;
              s = md(s, e.pendingLanes);
              var d = qe(s, a);
              (o.lanes = d), Fo(e, d);
            }
          }
        }
        function Rm(e, t) {
          var a = e.updateQueue,
            i = e.alternate;
          if (i !== null) {
            var o = i.updateQueue;
            if (a === o) {
              var s = null,
                d = null,
                g = a.firstBaseUpdate;
              if (g !== null) {
                var y = g;
                do {
                  var C = {
                    eventTime: y.eventTime,
                    lane: y.lane,
                    tag: y.tag,
                    payload: y.payload,
                    callback: y.callback,
                    next: null,
                  };
                  d === null ? (s = d = C) : ((d.next = C), (d = C)),
                    (y = y.next);
                } while (y !== null);
                d === null ? (s = d = t) : ((d.next = t), (d = t));
              } else s = d = t;
              (a = {
                baseState: o.baseState,
                firstBaseUpdate: s,
                lastBaseUpdate: d,
                shared: o.shared,
                effects: o.effects,
              }),
                (e.updateQueue = a);
              return;
            }
          }
          var E = a.lastBaseUpdate;
          E === null ? (a.firstBaseUpdate = t) : (E.next = t),
            (a.lastBaseUpdate = t);
        }
        function pT(e, t, a, i, o, s) {
          switch (a.tag) {
            case LS: {
              var d = a.payload;
              if (typeof d == "function") {
                DS();
                var g = d.call(s, i, o);
                {
                  if (e.mode & Wt) {
                    gn(true);
                    try {
                      d.call(s, i, o);
                    } finally {
                      gn(false);
                    }
                  }
                  NS();
                }
                return g;
              }
              return d;
            }
            case bm:
              e.flags = (e.flags & ~Dn) | Be;
            case MS: {
              var y = a.payload,
                C;
              if (typeof y == "function") {
                DS(), (C = y.call(s, i, o));
                {
                  if (e.mode & Wt) {
                    gn(true);
                    try {
                      y.call(s, i, o);
                    } finally {
                      gn(false);
                    }
                  }
                  NS();
                }
              } else C = y;
              return C == null ? i : rt({}, i, C);
            }
            case Ph:
              return (Yh = true), i;
          }
          return i;
        }
        function Gh(e, t, a, i) {
          var o = e.updateQueue;
          (Yh = false), (Ih = o.shared);
          var s = o.firstBaseUpdate,
            d = o.lastBaseUpdate,
            g = o.shared.pending;
          if (g !== null) {
            o.shared.pending = null;
            var y = g,
              C = y.next;
            (y.next = null), d === null ? (s = C) : (d.next = C), (d = y);
            var E = e.alternate;
            if (E !== null) {
              var M = E.updateQueue,
                _ = M.lastBaseUpdate;
              _ !== d &&
                (_ === null ? (M.firstBaseUpdate = C) : (_.next = C),
                (M.lastBaseUpdate = y));
            }
          }
          if (s !== null) {
            var B = o.baseState,
              V = G,
              I = null,
              he = null,
              _e = null,
              Te = s;
            do {
              var st = Te.lane,
                it = Te.eventTime;
              if (Pl(i, st)) {
                if (_e !== null) {
                  var Q = {
                    eventTime: it,
                    // This update is going to be committed so we never want uncommit
                    // it. Using NoLane works because 0 is a subset of all bitmasks, so
                    // this will never be skipped by the check above.
                    lane: ot,
                    tag: Te.tag,
                    payload: Te.payload,
                    callback: Te.callback,
                    next: null,
                  };
                  _e = _e.next = Q;
                }
                B = pT(e, o, Te, B, t, a);
                var $ = Te.callback;
                if (
                  $ !== null && // If the update was already committed, we should not queue its
                  // callback again.
                  Te.lane !== ot
                ) {
                  e.flags |= Ga;
                  var re = o.effects;
                  re === null ? (o.effects = [Te]) : re.push(Te);
                }
              } else {
                var F = {
                  eventTime: it,
                  lane: st,
                  tag: Te.tag,
                  payload: Te.payload,
                  callback: Te.callback,
                  next: null,
                };
                _e === null ? ((he = _e = F), (I = B)) : (_e = _e.next = F),
                  (V = qe(V, st));
              }
              if (((Te = Te.next), Te === null)) {
                if (((g = o.shared.pending), g === null)) break;
                var ge = g,
                  fe = ge.next;
                (ge.next = null),
                  (Te = fe),
                  (o.lastBaseUpdate = ge),
                  (o.shared.pending = null);
              }
            } while (true);
            _e === null && (I = B),
              (o.baseState = I),
              (o.firstBaseUpdate = he),
              (o.lastBaseUpdate = _e);
            var He = o.shared.interleaved;
            if (He !== null) {
              var Ge = He;
              do (V = qe(V, Ge.lane)), (Ge = Ge.next);
              while (Ge !== He);
            } else s === null && (o.shared.lanes = G);
            Mp(V), (e.lanes = V), (e.memoizedState = B);
          }
          Ih = null;
        }
        function vT(e, t) {
          if (typeof e != "function")
            throw new Error(
              "Invalid argument passed as callback. Expected a function. Instead " +
                ("received: " + e)
            );
          e.call(t);
        }
        function jS() {
          Yh = false;
        }
        function Wh() {
          return Yh;
        }
        function AS(e, t, a) {
          var i = t.effects;
          if (((t.effects = null), i !== null))
            for (var o = 0; o < i.length; o++) {
              var s = i[o],
                d = s.callback;
              d !== null && ((s.callback = null), vT(d, a));
            }
        }
        var km = {},
          US = new c.Component().refs,
          Dm,
          Nm,
          _m,
          zm,
          Mm,
          FS,
          Xh,
          Lm,
          Om,
          jm;
        {
          (Dm = /* @__PURE__ */ new Set()),
            (Nm = /* @__PURE__ */ new Set()),
            (_m = /* @__PURE__ */ new Set()),
            (zm = /* @__PURE__ */ new Set()),
            (Lm = /* @__PURE__ */ new Set()),
            (Mm = /* @__PURE__ */ new Set()),
            (Om = /* @__PURE__ */ new Set()),
            (jm = /* @__PURE__ */ new Set());
          var $S = /* @__PURE__ */ new Set();
          (Xh = function (e, t) {
            if (!(e === null || typeof e == "function")) {
              var a = t + "_" + e;
              $S.has(a) ||
                ($S.add(a),
                S(
                  "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                  t,
                  e
                ));
            }
          }),
            (FS = function (e, t) {
              if (t === void 0) {
                var a = _t(e) || "Component";
                Mm.has(a) ||
                  (Mm.add(a),
                  S(
                    "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                    a
                  ));
              }
            }),
            Object.defineProperty(km, "_processChildContext", {
              enumerable: false,
              value: function () {
                throw new Error(
                  "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."
                );
              },
            }),
            Object.freeze(km);
        }
        function Am(e, t, a, i) {
          var o = e.memoizedState,
            s = a(i, o);
          {
            if (e.mode & Wt) {
              gn(true);
              try {
                s = a(i, o);
              } finally {
                gn(false);
              }
            }
            FS(t, s);
          }
          var d = s == null ? o : rt({}, o, s);
          if (((e.memoizedState = d), e.lanes === G)) {
            var g = e.updateQueue;
            g.baseState = d;
          }
        }
        var Um = {
          isMounted: Yr,
          enqueueSetState: function (e, t, a) {
            var i = la(e),
              o = qr(),
              s = du(i),
              d = io(o, s);
            (d.payload = t), a != null && (Xh(a, "setState"), (d.callback = a));
            var g = au(i, d, s);
            g !== null && (Gn(g, i, s, o), Qh(g, i, s)), tl(i, s);
          },
          enqueueReplaceState: function (e, t, a) {
            var i = la(e),
              o = qr(),
              s = du(i),
              d = io(o, s);
            (d.tag = LS),
              (d.payload = t),
              a != null && (Xh(a, "replaceState"), (d.callback = a));
            var g = au(i, d, s);
            g !== null && (Gn(g, i, s, o), Qh(g, i, s)), tl(i, s);
          },
          enqueueForceUpdate: function (e, t) {
            var a = la(e),
              i = qr(),
              o = du(a),
              s = io(i, o);
            (s.tag = Ph), t != null && (Xh(t, "forceUpdate"), (s.callback = t));
            var d = au(a, s, o);
            d !== null && (Gn(d, a, o, i), Qh(d, a, o)), dd(a, o);
          },
        };
        function HS(e, t, a, i, o, s, d) {
          var g = e.stateNode;
          if (typeof g.shouldComponentUpdate == "function") {
            var y = g.shouldComponentUpdate(i, s, d);
            {
              if (e.mode & Wt) {
                gn(true);
                try {
                  y = g.shouldComponentUpdate(i, s, d);
                } finally {
                  gn(false);
                }
              }
              y === void 0 &&
                S(
                  "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
                  _t(t) || "Component"
                );
            }
            return y;
          }
          return t.prototype && t.prototype.isPureReactComponent
            ? !Re(a, i) || !Re(o, s)
            : true;
        }
        function hT(e, t, a) {
          var i = e.stateNode;
          {
            var o = _t(t) || "Component",
              s = i.render;
            s ||
              (t.prototype && typeof t.prototype.render == "function"
                ? S(
                    "%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",
                    o
                  )
                : S(
                    "%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",
                    o
                  )),
              i.getInitialState &&
                !i.getInitialState.isReactClassApproved &&
                !i.state &&
                S(
                  "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
                  o
                ),
              i.getDefaultProps &&
                !i.getDefaultProps.isReactClassApproved &&
                S(
                  "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
                  o
                ),
              i.propTypes &&
                S(
                  "propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",
                  o
                ),
              i.contextType &&
                S(
                  "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
                  o
                ),
              i.contextTypes &&
                S(
                  "contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",
                  o
                ),
              t.contextType &&
                t.contextTypes &&
                !Om.has(t) &&
                (Om.add(t),
                S(
                  "%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",
                  o
                )),
              typeof i.componentShouldUpdate == "function" &&
                S(
                  "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
                  o
                ),
              t.prototype &&
                t.prototype.isPureReactComponent &&
                typeof i.shouldComponentUpdate < "u" &&
                S(
                  "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
                  _t(t) || "A pure component"
                ),
              typeof i.componentDidUnmount == "function" &&
                S(
                  "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
                  o
                ),
              typeof i.componentDidReceiveProps == "function" &&
                S(
                  "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
                  o
                ),
              typeof i.componentWillRecieveProps == "function" &&
                S(
                  "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
                  o
                ),
              typeof i.UNSAFE_componentWillRecieveProps == "function" &&
                S(
                  "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
                  o
                );
            var d = i.props !== a;
            i.props !== void 0 &&
              d &&
              S(
                "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
                o,
                o
              ),
              i.defaultProps &&
                S(
                  "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
                  o,
                  o
                ),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                typeof i.componentDidUpdate != "function" &&
                !_m.has(t) &&
                (_m.add(t),
                S(
                  "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
                  _t(t)
                )),
              typeof i.getDerivedStateFromProps == "function" &&
                S(
                  "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                  o
                ),
              typeof i.getDerivedStateFromError == "function" &&
                S(
                  "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                  o
                ),
              typeof t.getSnapshotBeforeUpdate == "function" &&
                S(
                  "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
                  o
                );
            var g = i.state;
            g &&
              (typeof g != "object" || Rn(g)) &&
              S("%s.state: must be set to an object or null", o),
              typeof i.getChildContext == "function" &&
                typeof t.childContextTypes != "object" &&
                S(
                  "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
                  o
                );
          }
        }
        function BS(e, t) {
          (t.updater = Um),
            (e.stateNode = t),
            Do(t, e),
            (t._reactInternalInstance = km);
        }
        function VS(e, t, a) {
          var i = false,
            o = Ua,
            s = Ua,
            d = t.contextType;
          if ("contextType" in t) {
            var g =
              // Allow null for conditional declaration
              d === null ||
              (d !== void 0 && d.$$typeof === ce && d._context === void 0);
            if (!g && !jm.has(t)) {
              jm.add(t);
              var y = "";
              d === void 0
                ? (y =
                    " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.")
                : typeof d != "object"
                ? (y = " However, it is set to a " + typeof d + ".")
                : d.$$typeof === te
                ? (y =
                    " Did you accidentally pass the Context.Provider instead?")
                : d._context !== void 0
                ? (y =
                    " Did you accidentally pass the Context.Consumer instead?")
                : (y =
                    " However, it is set to an object with keys {" +
                    Object.keys(d).join(", ") +
                    "}."),
                S(
                  "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
                  _t(t) || "Component",
                  y
                );
            }
          }
          if (typeof d == "object" && d !== null) s = Ln(d);
          else {
            o = Xc(e, t, true);
            var C = t.contextTypes;
            (i = C != null), (s = i ? qc(e, o) : Ua);
          }
          var E = new t(a, s);
          if (e.mode & Wt) {
            gn(true);
            try {
              E = new t(a, s);
            } finally {
              gn(false);
            }
          }
          var M = (e.memoizedState =
            E.state !== null && E.state !== void 0 ? E.state : null);
          BS(e, E);
          {
            if (typeof t.getDerivedStateFromProps == "function" && M === null) {
              var _ = _t(t) || "Component";
              Nm.has(_) ||
                (Nm.add(_),
                S(
                  "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
                  _,
                  E.state === null ? "null" : "undefined",
                  _
                ));
            }
            if (
              typeof t.getDerivedStateFromProps == "function" ||
              typeof E.getSnapshotBeforeUpdate == "function"
            ) {
              var B = null,
                V = null,
                I = null;
              if (
                (typeof E.componentWillMount == "function" &&
                E.componentWillMount.__suppressDeprecationWarning !== true
                  ? (B = "componentWillMount")
                  : typeof E.UNSAFE_componentWillMount == "function" &&
                    (B = "UNSAFE_componentWillMount"),
                typeof E.componentWillReceiveProps == "function" &&
                E.componentWillReceiveProps.__suppressDeprecationWarning !==
                  true
                  ? (V = "componentWillReceiveProps")
                  : typeof E.UNSAFE_componentWillReceiveProps == "function" &&
                    (V = "UNSAFE_componentWillReceiveProps"),
                typeof E.componentWillUpdate == "function" &&
                E.componentWillUpdate.__suppressDeprecationWarning !== true
                  ? (I = "componentWillUpdate")
                  : typeof E.UNSAFE_componentWillUpdate == "function" &&
                    (I = "UNSAFE_componentWillUpdate"),
                B !== null || V !== null || I !== null)
              ) {
                var he = _t(t) || "Component",
                  _e =
                    typeof t.getDerivedStateFromProps == "function"
                      ? "getDerivedStateFromProps()"
                      : "getSnapshotBeforeUpdate()";
                zm.has(he) ||
                  (zm.add(he),
                  S(
                    `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
                    he,
                    _e,
                    B !== null
                      ? `
  ` + B
                      : "",
                    V !== null
                      ? `
  ` + V
                      : "",
                    I !== null
                      ? `
  ` + I
                      : ""
                  ));
              }
            }
          }
          return i && dS(e, o, s), E;
        }
        function gT(e, t) {
          var a = t.state;
          typeof t.componentWillMount == "function" && t.componentWillMount(),
            typeof t.UNSAFE_componentWillMount == "function" &&
              t.UNSAFE_componentWillMount(),
            a !== t.state &&
              (S(
                "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                We2(e) || "Component"
              ),
              Um.enqueueReplaceState(t, t.state, null));
        }
        function PS(e, t, a, i) {
          var o = t.state;
          if (
            (typeof t.componentWillReceiveProps == "function" &&
              t.componentWillReceiveProps(a, i),
            typeof t.UNSAFE_componentWillReceiveProps == "function" &&
              t.UNSAFE_componentWillReceiveProps(a, i),
            t.state !== o)
          ) {
            {
              var s = We2(e) || "Component";
              Dm.has(s) ||
                (Dm.add(s),
                S(
                  "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                  s
                ));
            }
            Um.enqueueReplaceState(t, t.state, null);
          }
        }
        function Fm(e, t, a, i) {
          hT(e, t, a);
          var o = e.stateNode;
          (o.props = a), (o.state = e.memoizedState), (o.refs = US), Tm(e);
          var s = t.contextType;
          if (typeof s == "object" && s !== null) o.context = Ln(s);
          else {
            var d = Xc(e, t, true);
            o.context = qc(e, d);
          }
          {
            if (o.state === a) {
              var g = _t(t) || "Component";
              Lm.has(g) ||
                (Lm.add(g),
                S(
                  "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
                  g
                ));
            }
            e.mode & Wt && Ri.recordLegacyContextWarning(e, o),
              Ri.recordUnsafeLifecycleWarnings(e, o);
          }
          o.state = e.memoizedState;
          var y = t.getDerivedStateFromProps;
          if (
            (typeof y == "function" &&
              (Am(e, t, y, a), (o.state = e.memoizedState)),
            typeof t.getDerivedStateFromProps != "function" &&
              typeof o.getSnapshotBeforeUpdate != "function" &&
              (typeof o.UNSAFE_componentWillMount == "function" ||
                typeof o.componentWillMount == "function") &&
              (gT(e, o), Gh(e, a, o, i), (o.state = e.memoizedState)),
            typeof o.componentDidMount == "function")
          ) {
            var C = Xe;
            (C |= wr), (e.mode & fa) !== Le && (C |= Tr), (e.flags |= C);
          }
        }
        function yT(e, t, a, i) {
          var o = e.stateNode,
            s = e.memoizedProps;
          o.props = s;
          var d = o.context,
            g = t.contextType,
            y = Ua;
          if (typeof g == "object" && g !== null) y = Ln(g);
          else {
            var C = Xc(e, t, true);
            y = qc(e, C);
          }
          var E = t.getDerivedStateFromProps,
            M =
              typeof E == "function" ||
              typeof o.getSnapshotBeforeUpdate == "function";
          !M &&
            (typeof o.UNSAFE_componentWillReceiveProps == "function" ||
              typeof o.componentWillReceiveProps == "function") &&
            (s !== a || d !== y) &&
            PS(e, o, a, y),
            jS();
          var _ = e.memoizedState,
            B = (o.state = _);
          if (
            (Gh(e, a, o, i),
            (B = e.memoizedState),
            s === a && _ === B && !_h() && !Wh())
          ) {
            if (typeof o.componentDidMount == "function") {
              var V = Xe;
              (V |= wr), (e.mode & fa) !== Le && (V |= Tr), (e.flags |= V);
            }
            return false;
          }
          typeof E == "function" && (Am(e, t, E, a), (B = e.memoizedState));
          var I = Wh() || HS(e, t, s, a, _, B, y);
          if (I) {
            if (
              (!M &&
                (typeof o.UNSAFE_componentWillMount == "function" ||
                  typeof o.componentWillMount == "function") &&
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function")
            ) {
              var he = Xe;
              (he |= wr), (e.mode & fa) !== Le && (he |= Tr), (e.flags |= he);
            }
          } else {
            if (typeof o.componentDidMount == "function") {
              var _e = Xe;
              (_e |= wr), (e.mode & fa) !== Le && (_e |= Tr), (e.flags |= _e);
            }
            (e.memoizedProps = a), (e.memoizedState = B);
          }
          return (o.props = a), (o.state = B), (o.context = y), I;
        }
        function mT(e, t, a, i, o) {
          var s = t.stateNode;
          OS(e, t);
          var d = t.memoizedProps,
            g = t.type === t.elementType ? d : ki(t.type, d);
          s.props = g;
          var y = t.pendingProps,
            C = s.context,
            E = a.contextType,
            M = Ua;
          if (typeof E == "object" && E !== null) M = Ln(E);
          else {
            var _ = Xc(t, a, true);
            M = qc(t, _);
          }
          var B = a.getDerivedStateFromProps,
            V =
              typeof B == "function" ||
              typeof s.getSnapshotBeforeUpdate == "function";
          !V &&
            (typeof s.UNSAFE_componentWillReceiveProps == "function" ||
              typeof s.componentWillReceiveProps == "function") &&
            (d !== y || C !== M) &&
            PS(t, s, i, M),
            jS();
          var I = t.memoizedState,
            he = (s.state = I);
          if (
            (Gh(t, i, s, o),
            (he = t.memoizedState),
            d === y && I === he && !_h() && !Wh() && !ze)
          )
            return (
              typeof s.componentDidUpdate == "function" &&
                (d !== e.memoizedProps || I !== e.memoizedState) &&
                (t.flags |= Xe),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (d !== e.memoizedProps || I !== e.memoizedState) &&
                (t.flags |= oa),
              false
            );
          typeof B == "function" && (Am(t, a, B, i), (he = t.memoizedState));
          var _e =
            Wh() ||
            HS(t, a, g, i, I, he, M) || // TODO: In some cases, we'll end up checking if context has changed twice,
            // both before and after `shouldComponentUpdate` has been called. Not ideal,
            // but I'm loath to refactor this function. This only happens for memoized
            // components so it's not that common.
            ze;
          return (
            _e
              ? (!V &&
                  (typeof s.UNSAFE_componentWillUpdate == "function" ||
                    typeof s.componentWillUpdate == "function") &&
                  (typeof s.componentWillUpdate == "function" &&
                    s.componentWillUpdate(i, he, M),
                  typeof s.UNSAFE_componentWillUpdate == "function" &&
                    s.UNSAFE_componentWillUpdate(i, he, M)),
                typeof s.componentDidUpdate == "function" && (t.flags |= Xe),
                typeof s.getSnapshotBeforeUpdate == "function" &&
                  (t.flags |= oa))
              : (typeof s.componentDidUpdate == "function" &&
                  (d !== e.memoizedProps || I !== e.memoizedState) &&
                  (t.flags |= Xe),
                typeof s.getSnapshotBeforeUpdate == "function" &&
                  (d !== e.memoizedProps || I !== e.memoizedState) &&
                  (t.flags |= oa),
                (t.memoizedProps = i),
                (t.memoizedState = he)),
            (s.props = i),
            (s.state = he),
            (s.context = M),
            _e
          );
        }
        var $m,
          Hm,
          Bm,
          Vm,
          Pm,
          YS = function (e, t) {};
        ($m = false),
          (Hm = false),
          (Bm = {}),
          (Vm = {}),
          (Pm = {}),
          (YS = function (e, t) {
            if (
              !(e === null || typeof e != "object") &&
              !(!e._store || e._store.validated || e.key != null)
            ) {
              if (typeof e._store != "object")
                throw new Error(
                  "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
                );
              e._store.validated = true;
              var a = We2(t) || "Component";
              Vm[a] ||
                ((Vm[a] = true),
                S(
                  'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'
                ));
            }
          });
        function op(e, t, a) {
          var i = a.ref;
          if (i !== null && typeof i != "function" && typeof i != "object") {
            if (
              (e.mode & Wt || or) && // We warn in ReactElement.js if owner and self are equal for string refs
              // because these cannot be automatically converted to an arrow function
              // using a codemod. Therefore, we don't have to warn about string refs again.
              !(a._owner && a._self && a._owner.stateNode !== a._self)
            ) {
              var o = We2(e) || "Component";
              Bm[o] ||
                (S(
                  'A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  i
                ),
                (Bm[o] = true));
            }
            if (a._owner) {
              var s = a._owner,
                d;
              if (s) {
                var g = s;
                if (g.tag !== L)
                  throw new Error(
                    "Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref"
                  );
                d = g.stateNode;
              }
              if (!d)
                throw new Error(
                  "Missing owner for string ref " +
                    i +
                    ". This error is likely caused by a bug in React. Please file an issue."
                );
              var y = d;
              li(i, "ref");
              var C = "" + i;
              if (
                t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === C
              )
                return t.ref;
              var E = function (M) {
                var _ = y.refs;
                _ === US && (_ = y.refs = {}),
                  M === null ? delete _[C] : (_[C] = M);
              };
              return (E._stringRef = C), E;
            } else {
              if (typeof i != "string")
                throw new Error(
                  "Expected ref to be a function, a string, an object returned by React.createRef(), or null."
                );
              if (!a._owner)
                throw new Error(
                  "Element ref was specified as a string (" +
                    i +
                    `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`
                );
            }
          }
          return i;
        }
        function qh(e, t) {
          var a = Object.prototype.toString.call(t);
          throw new Error(
            "Objects are not valid as a React child (found: " +
              (a === "[object Object]"
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : a) +
              "). If you meant to render a collection of children, use an array instead."
          );
        }
        function Kh(e) {
          {
            var t = We2(e) || "Component";
            if (Pm[t]) return;
            (Pm[t] = true),
              S(
                "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."
              );
          }
        }
        function IS(e) {
          var t = e._payload,
            a = e._init;
          return a(t);
        }
        function QS(e) {
          function t(F, Q) {
            if (e) {
              var $ = F.deletions;
              $ === null ? ((F.deletions = [Q]), (F.flags |= St)) : $.push(Q);
            }
          }
          function a(F, Q) {
            if (!e) return null;
            for (var $ = Q; $ !== null; ) t(F, $), ($ = $.sibling);
            return null;
          }
          function i(F, Q) {
            for (var $ = /* @__PURE__ */ new Map(), re = Q; re !== null; )
              re.key !== null ? $.set(re.key, re) : $.set(re.index, re),
                (re = re.sibling);
            return $;
          }
          function o(F, Q) {
            var $ = ws(F, Q);
            return ($.index = 0), ($.sibling = null), $;
          }
          function s(F, Q, $) {
            if (((F.index = $), !e)) return (F.flags |= ed), Q;
            var re = F.alternate;
            if (re !== null) {
              var ge = re.index;
              return ge < Q ? ((F.flags |= At), Q) : ge;
            } else return (F.flags |= At), Q;
          }
          function d(F) {
            return e && F.alternate === null && (F.flags |= At), F;
          }
          function g(F, Q, $, re) {
            if (Q === null || Q.tag !== le) {
              var ge = g1($, F.mode, re);
              return (ge.return = F), ge;
            } else {
              var fe = o(Q, $);
              return (fe.return = F), fe;
            }
          }
          function y(F, Q, $, re) {
            var ge = $.type;
            if (ge === Da) return E(F, Q, $.props.children, re, $.key);
            if (
              Q !== null &&
              (Q.elementType === ge || // Keep this check inline so it only runs on the false path:
                AC(Q, $) || // Lazy types should reconcile their resolved type.
                // We need to do this after the Hot Reloading check above,
                // because hot reloading has different semantics than prod because
                // it doesn't resuspend. So we can't let the call below suspend.
                (typeof ge == "object" &&
                  ge !== null &&
                  ge.$$typeof === Oe &&
                  IS(ge) === Q.type))
            ) {
              var fe = o(Q, $.props);
              return (
                (fe.ref = op(F, Q, $)),
                (fe.return = F),
                (fe._debugSource = $._source),
                (fe._debugOwner = $._owner),
                fe
              );
            }
            var He = h1($, F.mode, re);
            return (He.ref = op(F, Q, $)), (He.return = F), He;
          }
          function C(F, Q, $, re) {
            if (
              Q === null ||
              Q.tag !== W ||
              Q.stateNode.containerInfo !== $.containerInfo ||
              Q.stateNode.implementation !== $.implementation
            ) {
              var ge = y1($, F.mode, re);
              return (ge.return = F), ge;
            } else {
              var fe = o(Q, $.children || []);
              return (fe.return = F), fe;
            }
          }
          function E(F, Q, $, re, ge) {
            if (Q === null || Q.tag !== Ce) {
              var fe = vu($, F.mode, re, ge);
              return (fe.return = F), fe;
            } else {
              var He = o(Q, $);
              return (He.return = F), He;
            }
          }
          function M(F, Q, $) {
            if ((typeof Q == "string" && Q !== "") || typeof Q == "number") {
              var re = g1("" + Q, F.mode, $);
              return (re.return = F), re;
            }
            if (typeof Q == "object" && Q !== null) {
              switch (Q.$$typeof) {
                case Ui: {
                  var ge = h1(Q, F.mode, $);
                  return (ge.ref = op(F, null, Q)), (ge.return = F), ge;
                }
                case Hr: {
                  var fe = y1(Q, F.mode, $);
                  return (fe.return = F), fe;
                }
                case Oe: {
                  var He = Q._payload,
                    Ge = Q._init;
                  return M(F, Ge(He), $);
                }
              }
              if (Rn(Q) || oi(Q)) {
                var kt = vu(Q, F.mode, $, null);
                return (kt.return = F), kt;
              }
              qh(F, Q);
            }
            return typeof Q == "function" && Kh(F), null;
          }
          function _(F, Q, $, re) {
            var ge = Q !== null ? Q.key : null;
            if ((typeof $ == "string" && $ !== "") || typeof $ == "number")
              return ge !== null ? null : g(F, Q, "" + $, re);
            if (typeof $ == "object" && $ !== null) {
              switch ($.$$typeof) {
                case Ui:
                  return $.key === ge ? y(F, Q, $, re) : null;
                case Hr:
                  return $.key === ge ? C(F, Q, $, re) : null;
                case Oe: {
                  var fe = $._payload,
                    He = $._init;
                  return _(F, Q, He(fe), re);
                }
              }
              if (Rn($) || oi($))
                return ge !== null ? null : E(F, Q, $, re, null);
              qh(F, $);
            }
            return typeof $ == "function" && Kh(F), null;
          }
          function B(F, Q, $, re, ge) {
            if ((typeof re == "string" && re !== "") || typeof re == "number") {
              var fe = F.get($) || null;
              return g(Q, fe, "" + re, ge);
            }
            if (typeof re == "object" && re !== null) {
              switch (re.$$typeof) {
                case Ui: {
                  var He = F.get(re.key === null ? $ : re.key) || null;
                  return y(Q, He, re, ge);
                }
                case Hr: {
                  var Ge = F.get(re.key === null ? $ : re.key) || null;
                  return C(Q, Ge, re, ge);
                }
                case Oe:
                  var kt = re._payload,
                    gt = re._init;
                  return B(F, Q, $, gt(kt), ge);
              }
              if (Rn(re) || oi(re)) {
                var Cn = F.get($) || null;
                return E(Q, Cn, re, ge, null);
              }
              qh(Q, re);
            }
            return typeof re == "function" && Kh(Q), null;
          }
          function V(F, Q, $) {
            {
              if (typeof F != "object" || F === null) return Q;
              switch (F.$$typeof) {
                case Ui:
                case Hr:
                  YS(F, $);
                  var re = F.key;
                  if (typeof re != "string") break;
                  if (Q === null) {
                    (Q = /* @__PURE__ */ new Set()), Q.add(re);
                    break;
                  }
                  if (!Q.has(re)) {
                    Q.add(re);
                    break;
                  }
                  S(
                    "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                    re
                  );
                  break;
                case Oe:
                  var ge = F._payload,
                    fe = F._init;
                  V(fe(ge), Q, $);
                  break;
              }
            }
            return Q;
          }
          function I(F, Q, $, re) {
            for (var ge = null, fe = 0; fe < $.length; fe++) {
              var He = $[fe];
              ge = V(He, ge, F);
            }
            for (
              var Ge = null, kt = null, gt = Q, Cn = 0, yt = 0, fn = null;
              gt !== null && yt < $.length;
              yt++
            ) {
              gt.index > yt ? ((fn = gt), (gt = null)) : (fn = gt.sibling);
              var Or = _(F, gt, $[yt], re);
              if (Or === null) {
                gt === null && (gt = fn);
                break;
              }
              e && gt && Or.alternate === null && t(F, gt),
                (Cn = s(Or, Cn, yt)),
                kt === null ? (Ge = Or) : (kt.sibling = Or),
                (kt = Or),
                (gt = fn);
            }
            if (yt === $.length) {
              if ((a(F, gt), fr())) {
                var mr = yt;
                fs(F, mr);
              }
              return Ge;
            }
            if (gt === null) {
              for (; yt < $.length; yt++) {
                var $a = M(F, $[yt], re);
                $a !== null &&
                  ((Cn = s($a, Cn, yt)),
                  kt === null ? (Ge = $a) : (kt.sibling = $a),
                  (kt = $a));
              }
              if (fr()) {
                var Kr = yt;
                fs(F, Kr);
              }
              return Ge;
            }
            for (var Zr = i(F, gt); yt < $.length; yt++) {
              var jr = B(Zr, F, yt, $[yt], re);
              jr !== null &&
                (e &&
                  jr.alternate !== null &&
                  Zr.delete(jr.key === null ? yt : jr.key),
                (Cn = s(jr, Cn, yt)),
                kt === null ? (Ge = jr) : (kt.sibling = jr),
                (kt = jr));
            }
            if (
              (e &&
                Zr.forEach(function (Sf) {
                  return t(F, Sf);
                }),
              fr())
            ) {
              var fo = yt;
              fs(F, fo);
            }
            return Ge;
          }
          function he(F, Q, $, re) {
            var ge = oi($);
            if (typeof ge != "function")
              throw new Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            {
              typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
                $[Symbol.toStringTag] === "Generator" &&
                (Hm ||
                  S(
                    "Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."
                  ),
                (Hm = true)),
                $.entries === ge &&
                  ($m ||
                    S(
                      "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
                    ),
                  ($m = true));
              var fe = ge.call($);
              if (fe)
                for (var He = null, Ge = fe.next(); !Ge.done; Ge = fe.next()) {
                  var kt = Ge.value;
                  He = V(kt, He, F);
                }
            }
            var gt = ge.call($);
            if (gt == null)
              throw new Error("An iterable object provided no iterator.");
            for (
              var Cn = null,
                yt = null,
                fn = Q,
                Or = 0,
                mr = 0,
                $a = null,
                Kr = gt.next();
              fn !== null && !Kr.done;
              mr++, Kr = gt.next()
            ) {
              fn.index > mr ? (($a = fn), (fn = null)) : ($a = fn.sibling);
              var Zr = _(F, fn, Kr.value, re);
              if (Zr === null) {
                fn === null && (fn = $a);
                break;
              }
              e && fn && Zr.alternate === null && t(F, fn),
                (Or = s(Zr, Or, mr)),
                yt === null ? (Cn = Zr) : (yt.sibling = Zr),
                (yt = Zr),
                (fn = $a);
            }
            if (Kr.done) {
              if ((a(F, fn), fr())) {
                var jr = mr;
                fs(F, jr);
              }
              return Cn;
            }
            if (fn === null) {
              for (; !Kr.done; mr++, Kr = gt.next()) {
                var fo = M(F, Kr.value, re);
                fo !== null &&
                  ((Or = s(fo, Or, mr)),
                  yt === null ? (Cn = fo) : (yt.sibling = fo),
                  (yt = fo));
              }
              if (fr()) {
                var Sf = mr;
                fs(F, Sf);
              }
              return Cn;
            }
            for (var Up = i(F, fn); !Kr.done; mr++, Kr = gt.next()) {
              var Sl = B(Up, F, mr, Kr.value, re);
              Sl !== null &&
                (e &&
                  Sl.alternate !== null &&
                  Up.delete(Sl.key === null ? mr : Sl.key),
                (Or = s(Sl, Or, mr)),
                yt === null ? (Cn = Sl) : (yt.sibling = Sl),
                (yt = Sl));
            }
            if (
              (e &&
                Up.forEach(function (M2) {
                  return t(F, M2);
                }),
              fr())
            ) {
              var z2 = mr;
              fs(F, z2);
            }
            return Cn;
          }
          function _e(F, Q, $, re) {
            if (Q !== null && Q.tag === le) {
              a(F, Q.sibling);
              var ge = o(Q, $);
              return (ge.return = F), ge;
            }
            a(F, Q);
            var fe = g1($, F.mode, re);
            return (fe.return = F), fe;
          }
          function Te(F, Q, $, re) {
            for (var ge = $.key, fe = Q; fe !== null; ) {
              if (fe.key === ge) {
                var He = $.type;
                if (He === Da) {
                  if (fe.tag === Ce) {
                    a(F, fe.sibling);
                    var Ge = o(fe, $.props.children);
                    return (
                      (Ge.return = F),
                      (Ge._debugSource = $._source),
                      (Ge._debugOwner = $._owner),
                      Ge
                    );
                  }
                } else if (
                  fe.elementType === He || // Keep this check inline so it only runs on the false path:
                  AC(fe, $) || // Lazy types should reconcile their resolved type.
                  // We need to do this after the Hot Reloading check above,
                  // because hot reloading has different semantics than prod because
                  // it doesn't resuspend. So we can't let the call below suspend.
                  (typeof He == "object" &&
                    He !== null &&
                    He.$$typeof === Oe &&
                    IS(He) === fe.type)
                ) {
                  a(F, fe.sibling);
                  var kt = o(fe, $.props);
                  return (
                    (kt.ref = op(F, fe, $)),
                    (kt.return = F),
                    (kt._debugSource = $._source),
                    (kt._debugOwner = $._owner),
                    kt
                  );
                }
                a(F, fe);
                break;
              } else t(F, fe);
              fe = fe.sibling;
            }
            if ($.type === Da) {
              var gt = vu($.props.children, F.mode, re, $.key);
              return (gt.return = F), gt;
            } else {
              var Cn = h1($, F.mode, re);
              return (Cn.ref = op(F, Q, $)), (Cn.return = F), Cn;
            }
          }
          function st(F, Q, $, re) {
            for (var ge = $.key, fe = Q; fe !== null; ) {
              if (fe.key === ge)
                if (
                  fe.tag === W &&
                  fe.stateNode.containerInfo === $.containerInfo &&
                  fe.stateNode.implementation === $.implementation
                ) {
                  a(F, fe.sibling);
                  var He = o(fe, $.children || []);
                  return (He.return = F), He;
                } else {
                  a(F, fe);
                  break;
                }
              else t(F, fe);
              fe = fe.sibling;
            }
            var Ge = y1($, F.mode, re);
            return (Ge.return = F), Ge;
          }
          function it(F, Q, $, re) {
            var ge =
              typeof $ == "object" &&
              $ !== null &&
              $.type === Da &&
              $.key === null;
            if (
              (ge && ($ = $.props.children), typeof $ == "object" && $ !== null)
            ) {
              switch ($.$$typeof) {
                case Ui:
                  return d(Te(F, Q, $, re));
                case Hr:
                  return d(st(F, Q, $, re));
                case Oe:
                  var fe = $._payload,
                    He = $._init;
                  return it(F, Q, He(fe), re);
              }
              if (Rn($)) return I(F, Q, $, re);
              if (oi($)) return he(F, Q, $, re);
              qh(F, $);
            }
            return (typeof $ == "string" && $ !== "") || typeof $ == "number"
              ? d(_e(F, Q, "" + $, re))
              : (typeof $ == "function" && Kh(F), a(F, Q));
          }
          return it;
        }
        var nf = QS(true),
          GS = QS(false);
        function ST(e, t) {
          if (e !== null && t.child !== e.child)
            throw new Error("Resuming work not yet implemented.");
          if (t.child !== null) {
            var a = t.child,
              i = ws(a, a.pendingProps);
            for (t.child = i, i.return = t; a.sibling !== null; )
              (a = a.sibling),
                (i = i.sibling = ws(a, a.pendingProps)),
                (i.return = t);
            i.sibling = null;
          }
        }
        function xT(e, t) {
          for (var a = e.child; a !== null; ) Xk(a, t), (a = a.sibling);
        }
        var up = {},
          iu = eu(up),
          sp = eu(up),
          Zh = eu(up);
        function Jh(e) {
          if (e === up)
            throw new Error(
              "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
            );
          return e;
        }
        function WS() {
          var e = Jh(Zh.current);
          return e;
        }
        function Ym(e, t) {
          Mr(Zh, t, e), Mr(sp, e, e), Mr(iu, up, e);
          var a = Ob(t);
          zr(iu, e), Mr(iu, a, e);
        }
        function rf(e) {
          zr(iu, e), zr(sp, e), zr(Zh, e);
        }
        function Im() {
          var e = Jh(iu.current);
          return e;
        }
        function XS(e) {
          Jh(Zh.current);
          var t = Jh(iu.current),
            a = jb(t, e.type);
          t !== a && (Mr(sp, e, e), Mr(iu, a, e));
        }
        function Qm(e) {
          sp.current === e && (zr(iu, e), zr(sp, e));
        }
        var CT = 0,
          qS = 1,
          KS = 1,
          cp = 2,
          Di = eu(CT);
        function Gm(e, t) {
          return (e & t) !== 0;
        }
        function af(e) {
          return e & qS;
        }
        function Wm(e, t) {
          return (e & qS) | t;
        }
        function ET(e, t) {
          return e | t;
        }
        function lu(e, t) {
          Mr(Di, t, e);
        }
        function lf(e) {
          zr(Di, e);
        }
        function bT(e, t) {
          var a = e.memoizedState;
          return a !== null ? a.dehydrated !== null : (e.memoizedProps, true);
        }
        function eg(e) {
          for (var t = e; t !== null; ) {
            if (t.tag === Fe) {
              var a = t.memoizedState;
              if (a !== null) {
                var i = a.dehydrated;
                if (i === null || oS(i) || em(i)) return t;
              }
            } else if (
              t.tag === xt && // revealOrder undefined can't be trusted because it don't
              // keep track of whether it suspended or not.
              t.memoizedProps.revealOrder !== void 0
            ) {
              var o = (t.flags & Be) !== De;
              if (o) return t;
            } else if (t.child !== null) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) return null;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Sa =
            /*   */
            0,
          Hn =
            /* */
            1,
          dl =
            /*  */
            2,
          Bn =
            /*    */
            4,
          dr =
            /*   */
            8,
          Xm = [];
        function qm() {
          for (var e = 0; e < Xm.length; e++) {
            var t = Xm[e];
            t._workInProgressVersionPrimary = null;
          }
          Xm.length = 0;
        }
        function wT(e, t) {
          var a = t._getVersion,
            i = a(t._source);
          e.mutableSourceEagerHydrationData == null
            ? (e.mutableSourceEagerHydrationData = [t, i])
            : e.mutableSourceEagerHydrationData.push(t, i);
        }
        var pe = p.ReactCurrentDispatcher,
          fp = p.ReactCurrentBatchConfig,
          Km,
          of;
        Km = /* @__PURE__ */ new Set();
        var ys = G,
          Rt = null,
          Vn = null,
          Pn = null,
          tg = false,
          dp = false,
          pp = 0,
          TT = 0,
          RT = 25,
          q = null,
          ni = null,
          ou = -1,
          Zm = false;
        function Et() {
          {
            var e = q;
            ni === null ? (ni = [e]) : ni.push(e);
          }
        }
        function ue() {
          {
            var e = q;
            ni !== null && (ou++, ni[ou] !== e && kT(e));
          }
        }
        function uf(e) {
          e != null &&
            !Rn(e) &&
            S(
              "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
              q,
              typeof e
            );
        }
        function kT(e) {
          {
            var t = We2(Rt);
            if (!Km.has(t) && (Km.add(t), ni !== null)) {
              for (var a = "", i = 30, o = 0; o <= ou; o++) {
                for (
                  var s = ni[o], d = o === ou ? e : s, g = o + 1 + ". " + s;
                  g.length < i;

                )
                  g += " ";
                (g +=
                  d +
                  `
`),
                  (a += g);
              }
              S(
                `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
                t,
                a
              );
            }
          }
        }
        function Lr() {
          throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
        }
        function Jm(e, t) {
          if (Zm) return false;
          if (t === null)
            return (
              S(
                "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
                q
              ),
              false
            );
          e.length !== t.length &&
            S(
              `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
              q,
              "[" + t.join(", ") + "]",
              "[" + e.join(", ") + "]"
            );
          for (var a = 0; a < t.length && a < e.length; a++)
            if (!Se(e[a], t[a])) return false;
          return true;
        }
        function sf(e, t, a, i, o, s) {
          (ys = s),
            (Rt = t),
            (ni = e !== null ? e._debugHookTypes : null),
            (ou = -1),
            (Zm = e !== null && e.type !== t.type),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = G),
            e !== null && e.memoizedState !== null
              ? (pe.current = Sx)
              : ni !== null
              ? (pe.current = mx)
              : (pe.current = yx);
          var d = a(i, o);
          if (dp) {
            var g = 0;
            do {
              if (((dp = false), (pp = 0), g >= RT))
                throw new Error(
                  "Too many re-renders. React limits the number of renders to prevent an infinite loop."
                );
              (g += 1),
                (Zm = false),
                (Vn = null),
                (Pn = null),
                (t.updateQueue = null),
                (ou = -1),
                (pe.current = xx),
                (d = a(i, o));
            } while (dp);
          }
          (pe.current = vg), (t._debugHookTypes = ni);
          var y = Vn !== null && Vn.next !== null;
          if (
            ((ys = G),
            (Rt = null),
            (Vn = null),
            (Pn = null),
            (q = null),
            (ni = null),
            (ou = -1),
            e !== null &&
              (e.flags & Un) !== (t.flags & Un) && // Disable this warning in legacy mode, because legacy Suspense is weird
              // and creates false positives. To make this work in legacy mode, we'd
              // need to mark fibers that commit in an incomplete state, somehow. For
              // now I'll disable the warning that most of the bugs that would trigger
              // it are either exclusive to concurrent mode or exist in both.
              (e.mode & nt) !== Le &&
              S(
                "Internal React error: Expected static flag was missing. Please notify the React team."
              ),
            (tg = false),
            y)
          )
            throw new Error(
              "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
            );
          return d;
        }
        function cf() {
          var e = pp !== 0;
          return (pp = 0), e;
        }
        function ZS(e, t, a) {
          (t.updateQueue = e.updateQueue),
            (t.mode & fa) !== Le
              ? (t.flags &= ~(Ll | Tr | Yt | Xe))
              : (t.flags &= ~(Yt | Xe)),
            (e.lanes = Uo(e.lanes, a));
        }
        function JS() {
          if (((pe.current = vg), tg)) {
            for (var e = Rt.memoizedState; e !== null; ) {
              var t = e.queue;
              t !== null && (t.pending = null), (e = e.next);
            }
            tg = false;
          }
          (ys = G),
            (Rt = null),
            (Vn = null),
            (Pn = null),
            (ni = null),
            (ou = -1),
            (q = null),
            (dx = false),
            (dp = false),
            (pp = 0);
        }
        function pl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            Pn === null ? (Rt.memoizedState = Pn = e) : (Pn = Pn.next = e), Pn
          );
        }
        function ri() {
          var e;
          if (Vn === null) {
            var t = Rt.alternate;
            t !== null ? (e = t.memoizedState) : (e = null);
          } else e = Vn.next;
          var a;
          if (
            (Pn === null ? (a = Rt.memoizedState) : (a = Pn.next), a !== null)
          )
            (Pn = a), (a = Pn.next), (Vn = e);
          else {
            if (e === null)
              throw new Error(
                "Rendered more hooks than during the previous render."
              );
            Vn = e;
            var i = {
              memoizedState: Vn.memoizedState,
              baseState: Vn.baseState,
              baseQueue: Vn.baseQueue,
              queue: Vn.queue,
              next: null,
            };
            Pn === null ? (Rt.memoizedState = Pn = i) : (Pn = Pn.next = i);
          }
          return Pn;
        }
        function ex() {
          return {
            lastEffect: null,
            stores: null,
          };
        }
        function e0(e, t) {
          return typeof t == "function" ? t(e) : t;
        }
        function t0(e, t, a) {
          var i = pl(),
            o;
          a !== void 0 ? (o = a(t)) : (o = t),
            (i.memoizedState = i.baseState = o);
          var s = {
            pending: null,
            interleaved: null,
            lanes: G,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: o,
          };
          i.queue = s;
          var d = (s.dispatch = zT.bind(null, Rt, s));
          return [i.memoizedState, d];
        }
        function n0(e, t, a) {
          var i = ri(),
            o = i.queue;
          if (o === null)
            throw new Error(
              "Should have a queue. This is likely a bug in React. Please file an issue."
            );
          o.lastRenderedReducer = e;
          var s = Vn,
            d = s.baseQueue,
            g = o.pending;
          if (g !== null) {
            if (d !== null) {
              var y = d.next,
                C = g.next;
              (d.next = C), (g.next = y);
            }
            s.baseQueue !== d &&
              S(
                "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
              ),
              (s.baseQueue = d = g),
              (o.pending = null);
          }
          if (d !== null) {
            var E = d.next,
              M = s.baseState,
              _ = null,
              B = null,
              V = null,
              I = E;
            do {
              var he = I.lane;
              if (Pl(ys, he)) {
                if (V !== null) {
                  var Te = {
                    // This update is going to be committed so we never want uncommit
                    // it. Using NoLane works because 0 is a subset of all bitmasks, so
                    // this will never be skipped by the check above.
                    lane: ot,
                    action: I.action,
                    hasEagerState: I.hasEagerState,
                    eagerState: I.eagerState,
                    next: null,
                  };
                  V = V.next = Te;
                }
                if (I.hasEagerState) M = I.eagerState;
                else {
                  var st = I.action;
                  M = e(M, st);
                }
              } else {
                var _e = {
                  lane: he,
                  action: I.action,
                  hasEagerState: I.hasEagerState,
                  eagerState: I.eagerState,
                  next: null,
                };
                V === null ? ((B = V = _e), (_ = M)) : (V = V.next = _e),
                  (Rt.lanes = qe(Rt.lanes, he)),
                  Mp(he);
              }
              I = I.next;
            } while (I !== null && I !== E);
            V === null ? (_ = M) : (V.next = B),
              Se(M, i.memoizedState) || xp(),
              (i.memoizedState = M),
              (i.baseState = _),
              (i.baseQueue = V),
              (o.lastRenderedState = M);
          }
          var it = o.interleaved;
          if (it !== null) {
            var F = it;
            do {
              var Q = F.lane;
              (Rt.lanes = qe(Rt.lanes, Q)), Mp(Q), (F = F.next);
            } while (F !== it);
          } else d === null && (o.lanes = G);
          var $ = o.dispatch;
          return [i.memoizedState, $];
        }
        function r0(e, t, a) {
          var i = ri(),
            o = i.queue;
          if (o === null)
            throw new Error(
              "Should have a queue. This is likely a bug in React. Please file an issue."
            );
          o.lastRenderedReducer = e;
          var s = o.dispatch,
            d = o.pending,
            g = i.memoizedState;
          if (d !== null) {
            o.pending = null;
            var y = d.next,
              C = y;
            do {
              var E = C.action;
              (g = e(g, E)), (C = C.next);
            } while (C !== y);
            Se(g, i.memoizedState) || xp(),
              (i.memoizedState = g),
              i.baseQueue === null && (i.baseState = g),
              (o.lastRenderedState = g);
          }
          return [g, s];
        }
        function E_(e, t, a) {}
        function b_(e, t, a) {}
        function a0(e, t, a) {
          var i = Rt,
            o = pl(),
            s,
            d = fr();
          if (d) {
            if (a === void 0)
              throw new Error(
                "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
              );
            (s = a()),
              of ||
                (s !== a() &&
                  (S(
                    "The result of getServerSnapshot should be cached to avoid an infinite loop"
                  ),
                  (of = true)));
          } else {
            if (((s = t()), !of)) {
              var g = t();
              Se(s, g) ||
                (S(
                  "The result of getSnapshot should be cached to avoid an infinite loop"
                ),
                (of = true));
            }
            var y = Mg();
            if (y === null)
              throw new Error(
                "Expected a work-in-progress root. This is a bug in React. Please file an issue."
              );
            Wu(y, ys) || tx(i, t, s);
          }
          o.memoizedState = s;
          var C = {
            value: s,
            getSnapshot: t,
          };
          return (
            (o.queue = C),
            lg(rx.bind(null, i, C, e), [e]),
            (i.flags |= Yt),
            vp(Hn | dr, nx.bind(null, i, C, s, t), void 0, null),
            s
          );
        }
        function ng(e, t, a) {
          var i = Rt,
            o = ri(),
            s = t();
          if (!of) {
            var d = t();
            Se(s, d) ||
              (S(
                "The result of getSnapshot should be cached to avoid an infinite loop"
              ),
              (of = true));
          }
          var g = o.memoizedState,
            y = !Se(g, s);
          y && ((o.memoizedState = s), xp());
          var C = o.queue;
          if (
            (gp(rx.bind(null, i, C, e), [e]),
            C.getSnapshot !== t ||
              y || // Check if the susbcribe function changed. We can save some memory by
              // checking whether we scheduled a subscription effect above.
              (Pn !== null && Pn.memoizedState.tag & Hn))
          ) {
            (i.flags |= Yt),
              vp(Hn | dr, nx.bind(null, i, C, s, t), void 0, null);
            var E = Mg();
            if (E === null)
              throw new Error(
                "Expected a work-in-progress root. This is a bug in React. Please file an issue."
              );
            Wu(E, ys) || tx(i, t, s);
          }
          return s;
        }
        function tx(e, t, a) {
          e.flags |= $u;
          var i = {
              getSnapshot: t,
              value: a,
            },
            o = Rt.updateQueue;
          if (o === null) (o = ex()), (Rt.updateQueue = o), (o.stores = [i]);
          else {
            var s = o.stores;
            s === null ? (o.stores = [i]) : s.push(i);
          }
        }
        function nx(e, t, a, i) {
          (t.value = a), (t.getSnapshot = i), ax(t) && ix(e);
        }
        function rx(e, t, a) {
          var i = function () {
            ax(t) && ix(e);
          };
          return a(i);
        }
        function ax(e) {
          var t = e.getSnapshot,
            a = e.value;
          try {
            var i = t();
            return !Se(a, i);
          } catch {
            return true;
          }
        }
        function ix(e) {
          var t = ma(e, Ae2);
          t !== null && Gn(t, e, Ae2, Mt);
        }
        function rg(e) {
          var t = pl();
          typeof e == "function" && (e = e()),
            (t.memoizedState = t.baseState = e);
          var a = {
            pending: null,
            interleaved: null,
            lanes: G,
            dispatch: null,
            lastRenderedReducer: e0,
            lastRenderedState: e,
          };
          t.queue = a;
          var i = (a.dispatch = MT.bind(null, Rt, a));
          return [t.memoizedState, i];
        }
        function i0(e) {
          return n0(e0);
        }
        function l0(e) {
          return r0(e0);
        }
        function vp(e, t, a, i) {
          var o = {
              tag: e,
              create: t,
              destroy: a,
              deps: i,
              // Circular
              next: null,
            },
            s = Rt.updateQueue;
          if (s === null)
            (s = ex()), (Rt.updateQueue = s), (s.lastEffect = o.next = o);
          else {
            var d = s.lastEffect;
            if (d === null) s.lastEffect = o.next = o;
            else {
              var g = d.next;
              (d.next = o), (o.next = g), (s.lastEffect = o);
            }
          }
          return o;
        }
        function o0(e) {
          var t = pl();
          {
            var a = {
              current: e,
            };
            return (t.memoizedState = a), a;
          }
        }
        function ag(e) {
          var t = ri();
          return t.memoizedState;
        }
        function hp(e, t, a, i) {
          var o = pl(),
            s = i === void 0 ? null : i;
          (Rt.flags |= e), (o.memoizedState = vp(Hn | t, a, void 0, s));
        }
        function ig(e, t, a, i) {
          var o = ri(),
            s = i === void 0 ? null : i,
            d = void 0;
          if (Vn !== null) {
            var g = Vn.memoizedState;
            if (((d = g.destroy), s !== null)) {
              var y = g.deps;
              if (Jm(s, y)) {
                o.memoizedState = vp(t, a, d, s);
                return;
              }
            }
          }
          (Rt.flags |= e), (o.memoizedState = vp(Hn | t, a, d, s));
        }
        function lg(e, t) {
          return (Rt.mode & fa) !== Le
            ? hp(Ll | Yt | Xi, dr, e, t)
            : hp(Yt | Xi, dr, e, t);
        }
        function gp(e, t) {
          return ig(Yt, dr, e, t);
        }
        function u0(e, t) {
          return hp(Xe, dl, e, t);
        }
        function og(e, t) {
          return ig(Xe, dl, e, t);
        }
        function s0(e, t) {
          var a = Xe;
          return (a |= wr), (Rt.mode & fa) !== Le && (a |= Tr), hp(a, Bn, e, t);
        }
        function ug(e, t) {
          return ig(Xe, Bn, e, t);
        }
        function lx(e, t) {
          if (typeof t == "function") {
            var a = t,
              i = e();
            return (
              a(i),
              function () {
                a(null);
              }
            );
          } else if (t != null) {
            var o = t;
            o.hasOwnProperty("current") ||
              S(
                "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
                "an object with keys {" + Object.keys(o).join(", ") + "}"
              );
            var s = e();
            return (
              (o.current = s),
              function () {
                o.current = null;
              }
            );
          }
        }
        function c0(e, t, a) {
          typeof t != "function" &&
            S(
              "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
              t !== null ? typeof t : "null"
            );
          var i = a != null ? a.concat([e]) : null,
            o = Xe;
          return (
            (o |= wr),
            (Rt.mode & fa) !== Le && (o |= Tr),
            hp(o, Bn, lx.bind(null, t, e), i)
          );
        }
        function sg(e, t, a) {
          typeof t != "function" &&
            S(
              "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
              t !== null ? typeof t : "null"
            );
          var i = a != null ? a.concat([e]) : null;
          return ig(Xe, Bn, lx.bind(null, t, e), i);
        }
        function DT(e, t) {}
        var cg = DT;
        function f0(e, t) {
          var a = pl(),
            i = t === void 0 ? null : t;
          return (a.memoizedState = [e, i]), e;
        }
        function fg(e, t) {
          var a = ri(),
            i = t === void 0 ? null : t,
            o = a.memoizedState;
          if (o !== null && i !== null) {
            var s = o[1];
            if (Jm(i, s)) return o[0];
          }
          return (a.memoizedState = [e, i]), e;
        }
        function d0(e, t) {
          var a = pl(),
            i = t === void 0 ? null : t,
            o = e();
          return (a.memoizedState = [o, i]), o;
        }
        function dg(e, t) {
          var a = ri(),
            i = t === void 0 ? null : t,
            o = a.memoizedState;
          if (o !== null && i !== null) {
            var s = o[1];
            if (Jm(i, s)) return o[0];
          }
          var d = e();
          return (a.memoizedState = [d, i]), d;
        }
        function p0(e) {
          var t = pl();
          return (t.memoizedState = e), e;
        }
        function ox(e) {
          var t = ri(),
            a = Vn,
            i = a.memoizedState;
          return sx(t, i, e);
        }
        function ux(e) {
          var t = ri();
          if (Vn === null) return (t.memoizedState = e), e;
          var a = Vn.memoizedState;
          return sx(t, a, e);
        }
        function sx(e, t, a) {
          var i = !Sy(ys);
          if (i) {
            if (!Se(a, t)) {
              var o = yd();
              (Rt.lanes = qe(Rt.lanes, o)), Mp(o), (e.baseState = true);
            }
            return t;
          } else
            return (
              e.baseState && ((e.baseState = false), xp()),
              (e.memoizedState = a),
              a
            );
        }
        function NT(e, t, a) {
          var i = pa();
          mn(tr(i, $n)), e(true);
          var o = fp.transition;
          fp.transition = {};
          var s = fp.transition;
          fp.transition._updatedFibers = /* @__PURE__ */ new Set();
          try {
            e(false), t();
          } finally {
            if ((mn(i), (fp.transition = o), o === null && s._updatedFibers)) {
              var d = s._updatedFibers.size;
              d > 10 &&
                R(
                  "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
                ),
                s._updatedFibers.clear();
            }
          }
        }
        function v0() {
          var e = rg(false),
            t = e[0],
            a = e[1],
            i = NT.bind(null, a),
            o = pl();
          return (o.memoizedState = i), [t, i];
        }
        function cx() {
          var e = i0(),
            t = e[0],
            a = ri(),
            i = a.memoizedState;
          return [t, i];
        }
        function fx() {
          var e = l0(),
            t = e[0],
            a = ri(),
            i = a.memoizedState;
          return [t, i];
        }
        var dx = false;
        function _T() {
          return dx;
        }
        function h0() {
          var e = pl(),
            t = Mg(),
            a = t.identifierPrefix,
            i;
          if (fr()) {
            var o = Yw();
            i = ":" + a + "R" + o;
            var s = pp++;
            s > 0 && (i += "H" + s.toString(32)), (i += ":");
          } else {
            var d = TT++;
            i = ":" + a + "r" + d.toString(32) + ":";
          }
          return (e.memoizedState = i), i;
        }
        function pg() {
          var e = ri(),
            t = e.memoizedState;
          return t;
        }
        function zT(e, t, a) {
          typeof arguments[3] == "function" &&
            S(
              "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
            );
          var i = du(e),
            o = {
              lane: i,
              action: a,
              hasEagerState: false,
              eagerState: null,
              next: null,
            };
          if (px(e)) vx(t, o);
          else {
            var s = zS(e, t, o, i);
            if (s !== null) {
              var d = qr();
              Gn(s, e, i, d), hx(s, t, i);
            }
          }
          gx(e, i);
        }
        function MT(e, t, a) {
          typeof arguments[3] == "function" &&
            S(
              "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
            );
          var i = du(e),
            o = {
              lane: i,
              action: a,
              hasEagerState: false,
              eagerState: null,
              next: null,
            };
          if (px(e)) vx(t, o);
          else {
            var s = e.alternate;
            if (e.lanes === G && (s === null || s.lanes === G)) {
              var d = t.lastRenderedReducer;
              if (d !== null) {
                var g;
                (g = pe.current), (pe.current = Ni);
                try {
                  var y = t.lastRenderedState,
                    C = d(y, a);
                  if (
                    ((o.hasEagerState = true), (o.eagerState = C), Se(C, y))
                  ) {
                    cT(e, t, o, i);
                    return;
                  }
                } catch {
                } finally {
                  pe.current = g;
                }
              }
            }
            var E = zS(e, t, o, i);
            if (E !== null) {
              var M = qr();
              Gn(E, e, i, M), hx(E, t, i);
            }
          }
          gx(e, i);
        }
        function px(e) {
          var t = e.alternate;
          return e === Rt || (t !== null && t === Rt);
        }
        function vx(e, t) {
          dp = tg = true;
          var a = e.pending;
          a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
            (e.pending = t);
        }
        function hx(e, t, a) {
          if (gd(a)) {
            var i = t.lanes;
            i = md(i, e.pendingLanes);
            var o = qe(i, a);
            (t.lanes = o), Fo(e, o);
          }
        }
        function gx(e, t, a) {
          tl(e, t);
        }
        var vg = {
            readContext: Ln,
            useCallback: Lr,
            useContext: Lr,
            useEffect: Lr,
            useImperativeHandle: Lr,
            useInsertionEffect: Lr,
            useLayoutEffect: Lr,
            useMemo: Lr,
            useReducer: Lr,
            useRef: Lr,
            useState: Lr,
            useDebugValue: Lr,
            useDeferredValue: Lr,
            useTransition: Lr,
            useMutableSource: Lr,
            useSyncExternalStore: Lr,
            useId: Lr,
            unstable_isNewReconciler: ie,
          },
          yx = null,
          mx = null,
          Sx = null,
          xx = null,
          vl = null,
          Ni = null,
          hg = null;
        {
          var g0 = function () {
              S(
                "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
              );
            },
            Ye = function () {
              S(
                "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"
              );
            };
          (yx = {
            readContext: function (e) {
              return Ln(e);
            },
            useCallback: function (e, t) {
              return (q = "useCallback"), Et(), uf(t), f0(e, t);
            },
            useContext: function (e) {
              return (q = "useContext"), Et(), Ln(e);
            },
            useEffect: function (e, t) {
              return (q = "useEffect"), Et(), uf(t), lg(e, t);
            },
            useImperativeHandle: function (e, t, a) {
              return (q = "useImperativeHandle"), Et(), uf(a), c0(e, t, a);
            },
            useInsertionEffect: function (e, t) {
              return (q = "useInsertionEffect"), Et(), uf(t), u0(e, t);
            },
            useLayoutEffect: function (e, t) {
              return (q = "useLayoutEffect"), Et(), uf(t), s0(e, t);
            },
            useMemo: function (e, t) {
              (q = "useMemo"), Et(), uf(t);
              var a = pe.current;
              pe.current = vl;
              try {
                return d0(e, t);
              } finally {
                pe.current = a;
              }
            },
            useReducer: function (e, t, a) {
              (q = "useReducer"), Et();
              var i = pe.current;
              pe.current = vl;
              try {
                return t0(e, t, a);
              } finally {
                pe.current = i;
              }
            },
            useRef: function (e) {
              return (q = "useRef"), Et(), o0(e);
            },
            useState: function (e) {
              (q = "useState"), Et();
              var t = pe.current;
              pe.current = vl;
              try {
                return rg(e);
              } finally {
                pe.current = t;
              }
            },
            useDebugValue: function (e, t) {
              return (q = "useDebugValue"), Et(), void 0;
            },
            useDeferredValue: function (e) {
              return (q = "useDeferredValue"), Et(), p0(e);
            },
            useTransition: function () {
              return (q = "useTransition"), Et(), v0();
            },
            useMutableSource: function (e, t, a) {
              return (q = "useMutableSource"), Et(), void 0;
            },
            useSyncExternalStore: function (e, t, a) {
              return (q = "useSyncExternalStore"), Et(), a0(e, t, a);
            },
            useId: function () {
              return (q = "useId"), Et(), h0();
            },
            unstable_isNewReconciler: ie,
          }),
            (mx = {
              readContext: function (e) {
                return Ln(e);
              },
              useCallback: function (e, t) {
                return (q = "useCallback"), ue(), f0(e, t);
              },
              useContext: function (e) {
                return (q = "useContext"), ue(), Ln(e);
              },
              useEffect: function (e, t) {
                return (q = "useEffect"), ue(), lg(e, t);
              },
              useImperativeHandle: function (e, t, a) {
                return (q = "useImperativeHandle"), ue(), c0(e, t, a);
              },
              useInsertionEffect: function (e, t) {
                return (q = "useInsertionEffect"), ue(), u0(e, t);
              },
              useLayoutEffect: function (e, t) {
                return (q = "useLayoutEffect"), ue(), s0(e, t);
              },
              useMemo: function (e, t) {
                (q = "useMemo"), ue();
                var a = pe.current;
                pe.current = vl;
                try {
                  return d0(e, t);
                } finally {
                  pe.current = a;
                }
              },
              useReducer: function (e, t, a) {
                (q = "useReducer"), ue();
                var i = pe.current;
                pe.current = vl;
                try {
                  return t0(e, t, a);
                } finally {
                  pe.current = i;
                }
              },
              useRef: function (e) {
                return (q = "useRef"), ue(), o0(e);
              },
              useState: function (e) {
                (q = "useState"), ue();
                var t = pe.current;
                pe.current = vl;
                try {
                  return rg(e);
                } finally {
                  pe.current = t;
                }
              },
              useDebugValue: function (e, t) {
                return (q = "useDebugValue"), ue(), void 0;
              },
              useDeferredValue: function (e) {
                return (q = "useDeferredValue"), ue(), p0(e);
              },
              useTransition: function () {
                return (q = "useTransition"), ue(), v0();
              },
              useMutableSource: function (e, t, a) {
                return (q = "useMutableSource"), ue(), void 0;
              },
              useSyncExternalStore: function (e, t, a) {
                return (q = "useSyncExternalStore"), ue(), a0(e, t, a);
              },
              useId: function () {
                return (q = "useId"), ue(), h0();
              },
              unstable_isNewReconciler: ie,
            }),
            (Sx = {
              readContext: function (e) {
                return Ln(e);
              },
              useCallback: function (e, t) {
                return (q = "useCallback"), ue(), fg(e, t);
              },
              useContext: function (e) {
                return (q = "useContext"), ue(), Ln(e);
              },
              useEffect: function (e, t) {
                return (q = "useEffect"), ue(), gp(e, t);
              },
              useImperativeHandle: function (e, t, a) {
                return (q = "useImperativeHandle"), ue(), sg(e, t, a);
              },
              useInsertionEffect: function (e, t) {
                return (q = "useInsertionEffect"), ue(), og(e, t);
              },
              useLayoutEffect: function (e, t) {
                return (q = "useLayoutEffect"), ue(), ug(e, t);
              },
              useMemo: function (e, t) {
                (q = "useMemo"), ue();
                var a = pe.current;
                pe.current = Ni;
                try {
                  return dg(e, t);
                } finally {
                  pe.current = a;
                }
              },
              useReducer: function (e, t, a) {
                (q = "useReducer"), ue();
                var i = pe.current;
                pe.current = Ni;
                try {
                  return n0(e, t, a);
                } finally {
                  pe.current = i;
                }
              },
              useRef: function (e) {
                return (q = "useRef"), ue(), ag();
              },
              useState: function (e) {
                (q = "useState"), ue();
                var t = pe.current;
                pe.current = Ni;
                try {
                  return i0(e);
                } finally {
                  pe.current = t;
                }
              },
              useDebugValue: function (e, t) {
                return (q = "useDebugValue"), ue(), cg();
              },
              useDeferredValue: function (e) {
                return (q = "useDeferredValue"), ue(), ox(e);
              },
              useTransition: function () {
                return (q = "useTransition"), ue(), cx();
              },
              useMutableSource: function (e, t, a) {
                return (q = "useMutableSource"), ue(), void 0;
              },
              useSyncExternalStore: function (e, t, a) {
                return (q = "useSyncExternalStore"), ue(), ng(e, t);
              },
              useId: function () {
                return (q = "useId"), ue(), pg();
              },
              unstable_isNewReconciler: ie,
            }),
            (xx = {
              readContext: function (e) {
                return Ln(e);
              },
              useCallback: function (e, t) {
                return (q = "useCallback"), ue(), fg(e, t);
              },
              useContext: function (e) {
                return (q = "useContext"), ue(), Ln(e);
              },
              useEffect: function (e, t) {
                return (q = "useEffect"), ue(), gp(e, t);
              },
              useImperativeHandle: function (e, t, a) {
                return (q = "useImperativeHandle"), ue(), sg(e, t, a);
              },
              useInsertionEffect: function (e, t) {
                return (q = "useInsertionEffect"), ue(), og(e, t);
              },
              useLayoutEffect: function (e, t) {
                return (q = "useLayoutEffect"), ue(), ug(e, t);
              },
              useMemo: function (e, t) {
                (q = "useMemo"), ue();
                var a = pe.current;
                pe.current = hg;
                try {
                  return dg(e, t);
                } finally {
                  pe.current = a;
                }
              },
              useReducer: function (e, t, a) {
                (q = "useReducer"), ue();
                var i = pe.current;
                pe.current = hg;
                try {
                  return r0(e, t, a);
                } finally {
                  pe.current = i;
                }
              },
              useRef: function (e) {
                return (q = "useRef"), ue(), ag();
              },
              useState: function (e) {
                (q = "useState"), ue();
                var t = pe.current;
                pe.current = hg;
                try {
                  return l0(e);
                } finally {
                  pe.current = t;
                }
              },
              useDebugValue: function (e, t) {
                return (q = "useDebugValue"), ue(), cg();
              },
              useDeferredValue: function (e) {
                return (q = "useDeferredValue"), ue(), ux(e);
              },
              useTransition: function () {
                return (q = "useTransition"), ue(), fx();
              },
              useMutableSource: function (e, t, a) {
                return (q = "useMutableSource"), ue(), void 0;
              },
              useSyncExternalStore: function (e, t, a) {
                return (q = "useSyncExternalStore"), ue(), ng(e, t);
              },
              useId: function () {
                return (q = "useId"), ue(), pg();
              },
              unstable_isNewReconciler: ie,
            }),
            (vl = {
              readContext: function (e) {
                return g0(), Ln(e);
              },
              useCallback: function (e, t) {
                return (q = "useCallback"), Ye(), Et(), f0(e, t);
              },
              useContext: function (e) {
                return (q = "useContext"), Ye(), Et(), Ln(e);
              },
              useEffect: function (e, t) {
                return (q = "useEffect"), Ye(), Et(), lg(e, t);
              },
              useImperativeHandle: function (e, t, a) {
                return (q = "useImperativeHandle"), Ye(), Et(), c0(e, t, a);
              },
              useInsertionEffect: function (e, t) {
                return (q = "useInsertionEffect"), Ye(), Et(), u0(e, t);
              },
              useLayoutEffect: function (e, t) {
                return (q = "useLayoutEffect"), Ye(), Et(), s0(e, t);
              },
              useMemo: function (e, t) {
                (q = "useMemo"), Ye(), Et();
                var a = pe.current;
                pe.current = vl;
                try {
                  return d0(e, t);
                } finally {
                  pe.current = a;
                }
              },
              useReducer: function (e, t, a) {
                (q = "useReducer"), Ye(), Et();
                var i = pe.current;
                pe.current = vl;
                try {
                  return t0(e, t, a);
                } finally {
                  pe.current = i;
                }
              },
              useRef: function (e) {
                return (q = "useRef"), Ye(), Et(), o0(e);
              },
              useState: function (e) {
                (q = "useState"), Ye(), Et();
                var t = pe.current;
                pe.current = vl;
                try {
                  return rg(e);
                } finally {
                  pe.current = t;
                }
              },
              useDebugValue: function (e, t) {
                return (q = "useDebugValue"), Ye(), Et(), void 0;
              },
              useDeferredValue: function (e) {
                return (q = "useDeferredValue"), Ye(), Et(), p0(e);
              },
              useTransition: function () {
                return (q = "useTransition"), Ye(), Et(), v0();
              },
              useMutableSource: function (e, t, a) {
                return (q = "useMutableSource"), Ye(), Et(), void 0;
              },
              useSyncExternalStore: function (e, t, a) {
                return (q = "useSyncExternalStore"), Ye(), Et(), a0(e, t, a);
              },
              useId: function () {
                return (q = "useId"), Ye(), Et(), h0();
              },
              unstable_isNewReconciler: ie,
            }),
            (Ni = {
              readContext: function (e) {
                return g0(), Ln(e);
              },
              useCallback: function (e, t) {
                return (q = "useCallback"), Ye(), ue(), fg(e, t);
              },
              useContext: function (e) {
                return (q = "useContext"), Ye(), ue(), Ln(e);
              },
              useEffect: function (e, t) {
                return (q = "useEffect"), Ye(), ue(), gp(e, t);
              },
              useImperativeHandle: function (e, t, a) {
                return (q = "useImperativeHandle"), Ye(), ue(), sg(e, t, a);
              },
              useInsertionEffect: function (e, t) {
                return (q = "useInsertionEffect"), Ye(), ue(), og(e, t);
              },
              useLayoutEffect: function (e, t) {
                return (q = "useLayoutEffect"), Ye(), ue(), ug(e, t);
              },
              useMemo: function (e, t) {
                (q = "useMemo"), Ye(), ue();
                var a = pe.current;
                pe.current = Ni;
                try {
                  return dg(e, t);
                } finally {
                  pe.current = a;
                }
              },
              useReducer: function (e, t, a) {
                (q = "useReducer"), Ye(), ue();
                var i = pe.current;
                pe.current = Ni;
                try {
                  return n0(e, t, a);
                } finally {
                  pe.current = i;
                }
              },
              useRef: function (e) {
                return (q = "useRef"), Ye(), ue(), ag();
              },
              useState: function (e) {
                (q = "useState"), Ye(), ue();
                var t = pe.current;
                pe.current = Ni;
                try {
                  return i0(e);
                } finally {
                  pe.current = t;
                }
              },
              useDebugValue: function (e, t) {
                return (q = "useDebugValue"), Ye(), ue(), cg();
              },
              useDeferredValue: function (e) {
                return (q = "useDeferredValue"), Ye(), ue(), ox(e);
              },
              useTransition: function () {
                return (q = "useTransition"), Ye(), ue(), cx();
              },
              useMutableSource: function (e, t, a) {
                return (q = "useMutableSource"), Ye(), ue(), void 0;
              },
              useSyncExternalStore: function (e, t, a) {
                return (q = "useSyncExternalStore"), Ye(), ue(), ng(e, t);
              },
              useId: function () {
                return (q = "useId"), Ye(), ue(), pg();
              },
              unstable_isNewReconciler: ie,
            }),
            (hg = {
              readContext: function (e) {
                return g0(), Ln(e);
              },
              useCallback: function (e, t) {
                return (q = "useCallback"), Ye(), ue(), fg(e, t);
              },
              useContext: function (e) {
                return (q = "useContext"), Ye(), ue(), Ln(e);
              },
              useEffect: function (e, t) {
                return (q = "useEffect"), Ye(), ue(), gp(e, t);
              },
              useImperativeHandle: function (e, t, a) {
                return (q = "useImperativeHandle"), Ye(), ue(), sg(e, t, a);
              },
              useInsertionEffect: function (e, t) {
                return (q = "useInsertionEffect"), Ye(), ue(), og(e, t);
              },
              useLayoutEffect: function (e, t) {
                return (q = "useLayoutEffect"), Ye(), ue(), ug(e, t);
              },
              useMemo: function (e, t) {
                (q = "useMemo"), Ye(), ue();
                var a = pe.current;
                pe.current = Ni;
                try {
                  return dg(e, t);
                } finally {
                  pe.current = a;
                }
              },
              useReducer: function (e, t, a) {
                (q = "useReducer"), Ye(), ue();
                var i = pe.current;
                pe.current = Ni;
                try {
                  return r0(e, t, a);
                } finally {
                  pe.current = i;
                }
              },
              useRef: function (e) {
                return (q = "useRef"), Ye(), ue(), ag();
              },
              useState: function (e) {
                (q = "useState"), Ye(), ue();
                var t = pe.current;
                pe.current = Ni;
                try {
                  return l0(e);
                } finally {
                  pe.current = t;
                }
              },
              useDebugValue: function (e, t) {
                return (q = "useDebugValue"), Ye(), ue(), cg();
              },
              useDeferredValue: function (e) {
                return (q = "useDeferredValue"), Ye(), ue(), ux(e);
              },
              useTransition: function () {
                return (q = "useTransition"), Ye(), ue(), fx();
              },
              useMutableSource: function (e, t, a) {
                return (q = "useMutableSource"), Ye(), ue(), void 0;
              },
              useSyncExternalStore: function (e, t, a) {
                return (q = "useSyncExternalStore"), Ye(), ue(), ng(e, t);
              },
              useId: function () {
                return (q = "useId"), Ye(), ue(), pg();
              },
              unstable_isNewReconciler: ie,
            });
        }
        var uu = v.unstable_now,
          Cx = 0,
          gg = -1,
          yp = -1,
          yg = -1,
          y0 = false,
          mg = false;
        function Ex() {
          return y0;
        }
        function LT() {
          mg = true;
        }
        function OT() {
          (y0 = false), (mg = false);
        }
        function jT() {
          (y0 = mg), (mg = false);
        }
        function bx() {
          return Cx;
        }
        function wx() {
          Cx = uu();
        }
        function m0(e) {
          (yp = uu()), e.actualStartTime < 0 && (e.actualStartTime = uu());
        }
        function Tx(e) {
          yp = -1;
        }
        function Sg(e, t) {
          if (yp >= 0) {
            var a = uu() - yp;
            (e.actualDuration += a), t && (e.selfBaseDuration = a), (yp = -1);
          }
        }
        function hl(e) {
          if (gg >= 0) {
            var t = uu() - gg;
            gg = -1;
            for (var a = e.return; a !== null; ) {
              switch (a.tag) {
                case U:
                  var i = a.stateNode;
                  i.effectDuration += t;
                  return;
                case et:
                  var o = a.stateNode;
                  o.effectDuration += t;
                  return;
              }
              a = a.return;
            }
          }
        }
        function S0(e) {
          if (yg >= 0) {
            var t = uu() - yg;
            yg = -1;
            for (var a = e.return; a !== null; ) {
              switch (a.tag) {
                case U:
                  var i = a.stateNode;
                  i !== null && (i.passiveEffectDuration += t);
                  return;
                case et:
                  var o = a.stateNode;
                  o !== null && (o.passiveEffectDuration += t);
                  return;
              }
              a = a.return;
            }
          }
        }
        function gl() {
          gg = uu();
        }
        function x0() {
          yg = uu();
        }
        function C0(e) {
          for (var t = e.child; t; )
            (e.actualDuration += t.actualDuration), (t = t.sibling);
        }
        function ms(e, t) {
          return {
            value: e,
            source: t,
            stack: Rf(t),
            digest: null,
          };
        }
        function E0(e, t, a) {
          return {
            value: e,
            source: null,
            stack: a ?? null,
            digest: t ?? null,
          };
        }
        function AT(e, t) {
          return true;
        }
        function b0(e, t) {
          try {
            var a = AT(e, t);
            if (a === false) return;
            var i = t.value,
              o = t.source,
              s = t.stack,
              d = s !== null ? s : "";
            if (i != null && i._suppressLogging) {
              if (e.tag === L) return;
              console.error(i);
            }
            var g = o ? We2(o) : null,
              y = g
                ? "The above error occurred in the <" + g + "> component:"
                : "The above error occurred in one of your React components:",
              C;
            if (e.tag === U)
              C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
            else {
              var E = We2(e) || "Anonymous";
              C =
                "React will try to recreate this component tree from scratch " +
                ("using the error boundary you provided, " + E + ".");
            }
            var M =
              y +
              `
` +
              d +
              `

` +
              ("" + C);
            console.error(M);
          } catch (_) {
            setTimeout(function () {
              throw _;
            });
          }
        }
        var UT = typeof WeakMap == "function" ? WeakMap : Map;
        function Rx(e, t, a) {
          var i = io(Mt, a);
          (i.tag = bm),
            (i.payload = {
              element: null,
            });
          var o = t.value;
          return (
            (i.callback = function () {
              Nk(o), b0(e, t);
            }),
            i
          );
        }
        function w0(e, t, a) {
          var i = io(Mt, a);
          i.tag = bm;
          var o = e.type.getDerivedStateFromError;
          if (typeof o == "function") {
            var s = t.value;
            (i.payload = function () {
              return o(s);
            }),
              (i.callback = function () {
                UC(e), b0(e, t);
              });
          }
          var d = e.stateNode;
          return (
            d !== null &&
              typeof d.componentDidCatch == "function" &&
              (i.callback = function () {
                UC(e), b0(e, t), typeof o != "function" && kk(this);
                var y = t.value,
                  C = t.stack;
                this.componentDidCatch(y, {
                  componentStack: C !== null ? C : "",
                }),
                  typeof o != "function" &&
                    (_r(e.lanes, Ae2) ||
                      S(
                        "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
                        We2(e) || "Unknown"
                      ));
              }),
            i
          );
        }
        function kx(e, t, a) {
          var i = e.pingCache,
            o;
          if (
            (i === null
              ? ((i = e.pingCache = new UT()),
                (o = /* @__PURE__ */ new Set()),
                i.set(t, o))
              : ((o = i.get(t)),
                o === void 0 && ((o = /* @__PURE__ */ new Set()), i.set(t, o))),
            !o.has(a))
          ) {
            o.add(a);
            var s = _k.bind(null, e, t, a);
            Fn && Lp(e, a), t.then(s, s);
          }
        }
        function FT(e, t, a, i) {
          var o = e.updateQueue;
          if (o === null) {
            var s = /* @__PURE__ */ new Set();
            s.add(a), (e.updateQueue = s);
          } else o.add(a);
        }
        function $T(e, t) {
          var a = e.tag;
          if ((e.mode & nt) === Le && (a === j || a === Ne || a === $e)) {
            var i = e.alternate;
            i
              ? ((e.updateQueue = i.updateQueue),
                (e.memoizedState = i.memoizedState),
                (e.lanes = i.lanes))
              : ((e.updateQueue = null), (e.memoizedState = null));
          }
        }
        function Dx(e) {
          var t = e;
          do {
            if (t.tag === Fe && bT(t)) return t;
            t = t.return;
          } while (t !== null);
          return null;
        }
        function Nx(e, t, a, i, o) {
          if ((e.mode & nt) === Le) {
            if (e === t) e.flags |= Dn;
            else {
              if (
                ((e.flags |= Be),
                (a.flags |= Hu),
                (a.flags &= ~(Ws | Vr)),
                a.tag === L)
              ) {
                var s = a.alternate;
                if (s === null) a.tag = pn;
                else {
                  var d = io(Mt, Ae2);
                  (d.tag = Ph), au(a, d, Ae2);
                }
              }
              a.lanes = qe(a.lanes, Ae2);
            }
            return e;
          }
          return (e.flags |= Dn), (e.lanes = o), e;
        }
        function HT(e, t, a, i, o) {
          if (
            ((a.flags |= Vr),
            Fn && Lp(e, o),
            i !== null && typeof i == "object" && typeof i.then == "function")
          ) {
            var s = i;
            $T(a), fr() && a.mode & nt && SS();
            var d = Dx(t);
            if (d !== null) {
              (d.flags &= ~Kt),
                Nx(d, t, a, e, o),
                d.mode & nt && kx(e, s, o),
                FT(d, e, s);
              return;
            } else {
              if (!Ao(o)) {
                kx(e, s, o), r1();
                return;
              }
              var g = new Error(
                "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition."
              );
              i = g;
            }
          } else if (fr() && a.mode & nt) {
            SS();
            var y = Dx(t);
            if (y !== null) {
              (y.flags & Dn) === De && (y.flags |= Kt),
                Nx(y, t, a, e, o),
                gm(ms(i, a));
              return;
            }
          }
          (i = ms(i, a)), Sk(i);
          var C = t;
          do {
            switch (C.tag) {
              case U: {
                var E = i;
                C.flags |= Dn;
                var M = yn(o);
                C.lanes = qe(C.lanes, M);
                var _ = Rx(C, E, M);
                Rm(C, _);
                return;
              }
              case L:
                var B = i,
                  V = C.type,
                  I = C.stateNode;
                if (
                  (C.flags & Be) === De &&
                  (typeof V.getDerivedStateFromError == "function" ||
                    (I !== null &&
                      typeof I.componentDidCatch == "function" &&
                      !DC(I)))
                ) {
                  C.flags |= Dn;
                  var he = yn(o);
                  C.lanes = qe(C.lanes, he);
                  var _e = w0(C, B, he);
                  Rm(C, _e);
                  return;
                }
                break;
            }
            C = C.return;
          } while (C !== null);
        }
        function BT() {
          return null;
        }
        var mp = p.ReactCurrentOwner,
          _i = false,
          T0,
          Sp,
          R0,
          k0,
          D0,
          Ss,
          N0,
          xg;
        (T0 = {}),
          (Sp = {}),
          (R0 = {}),
          (k0 = {}),
          (D0 = {}),
          (Ss = false),
          (N0 = {}),
          (xg = {});
        function Wr(e, t, a, i) {
          e === null
            ? (t.child = GS(t, null, a, i))
            : (t.child = nf(t, e.child, a, i));
        }
        function VT(e, t, a, i) {
          (t.child = nf(t, e.child, null, i)), (t.child = nf(t, null, a, i));
        }
        function _x(e, t, a, i, o) {
          if (t.type !== t.elementType) {
            var s = a.propTypes;
            s &&
              wi(
                s,
                i,
                // Resolved props
                "prop",
                _t(a)
              );
          }
          var d = a.render,
            g = t.ref,
            y,
            C;
          tf(t, o), el(t);
          {
            if (
              ((mp.current = t),
              za(true),
              (y = sf(e, t, d, i, g, o)),
              (C = cf()),
              t.mode & Wt)
            ) {
              gn(true);
              try {
                (y = sf(e, t, d, i, g, o)), (C = cf());
              } finally {
                gn(false);
              }
            }
            za(false);
          }
          return (
            Ol(),
            e !== null && !_i
              ? (ZS(e, t, o), lo(e, t, o))
              : (fr() && C && cm(t), (t.flags |= Gi), Wr(e, t, y, o), t.child)
          );
        }
        function zx(e, t, a, i, o) {
          if (e === null) {
            var s = a.type;
            if (
              Gk(s) &&
              a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
              a.defaultProps === void 0
            ) {
              var d = s;
              return (
                (d = mf(s)),
                (t.tag = $e),
                (t.type = d),
                M0(t, s),
                Mx(e, t, d, i, o)
              );
            }
            {
              var g = s.propTypes;
              g &&
                wi(
                  g,
                  i,
                  // Resolved props
                  "prop",
                  _t(s)
                );
            }
            var y = v1(a.type, null, i, t, t.mode, o);
            return (y.ref = t.ref), (y.return = t), (t.child = y), y;
          }
          {
            var C = a.type,
              E = C.propTypes;
            E &&
              wi(
                E,
                i,
                // Resolved props
                "prop",
                _t(C)
              );
          }
          var M = e.child,
            _ = F0(e, o);
          if (!_) {
            var B = M.memoizedProps,
              V = a.compare;
            if (((V = V !== null ? V : Re), V(B, i) && e.ref === t.ref))
              return lo(e, t, o);
          }
          t.flags |= Gi;
          var I = ws(M, i);
          return (I.ref = t.ref), (I.return = t), (t.child = I), I;
        }
        function Mx(e, t, a, i, o) {
          if (t.type !== t.elementType) {
            var s = t.elementType;
            if (s.$$typeof === Oe) {
              var d = s,
                g = d._payload,
                y = d._init;
              try {
                s = y(g);
              } catch {
                s = null;
              }
              var C = s && s.propTypes;
              C &&
                wi(
                  C,
                  i,
                  // Resolved (SimpleMemoComponent has no defaultProps)
                  "prop",
                  _t(s)
                );
            }
          }
          if (e !== null) {
            var E = e.memoizedProps;
            if (
              Re(E, i) &&
              e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
              t.type === e.type
            )
              if (((_i = false), (t.pendingProps = i = E), F0(e, o)))
                (e.flags & Hu) !== De && (_i = true);
              else return (t.lanes = e.lanes), lo(e, t, o);
          }
          return _0(e, t, a, i, o);
        }
        function Lx(e, t, a) {
          var i = t.pendingProps,
            o = i.children,
            s = e !== null ? e.memoizedState : null;
          if (i.mode === "hidden" || ve)
            if ((t.mode & nt) === Le) {
              var d = {
                baseLanes: G,
                cachePool: null,
                transitions: null,
              };
              (t.memoizedState = d), Lg(t, a);
            } else if (_r(a, Nr)) {
              var M = {
                baseLanes: G,
                cachePool: null,
                transitions: null,
              };
              t.memoizedState = M;
              var _ = s !== null ? s.baseLanes : a;
              Lg(t, _);
            } else {
              var g = null,
                y;
              if (s !== null) {
                var C = s.baseLanes;
                y = qe(C, a);
              } else y = a;
              t.lanes = t.childLanes = Nr;
              var E = {
                baseLanes: y,
                cachePool: g,
                transitions: null,
              };
              return (
                (t.memoizedState = E), (t.updateQueue = null), Lg(t, y), null
              );
            }
          else {
            var B;
            s !== null
              ? ((B = qe(s.baseLanes, a)), (t.memoizedState = null))
              : (B = a),
              Lg(t, B);
          }
          return Wr(e, t, o, a), t.child;
        }
        function PT(e, t, a) {
          var i = t.pendingProps;
          return Wr(e, t, i, a), t.child;
        }
        function YT(e, t, a) {
          var i = t.pendingProps.children;
          return Wr(e, t, i, a), t.child;
        }
        function IT(e, t, a) {
          {
            t.flags |= Xe;
            {
              var i = t.stateNode;
              (i.effectDuration = 0), (i.passiveEffectDuration = 0);
            }
          }
          var o = t.pendingProps,
            s = o.children;
          return Wr(e, t, s, a), t.child;
        }
        function Ox(e, t) {
          var a = t.ref;
          ((e === null && a !== null) || (e !== null && e.ref !== a)) &&
            ((t.flags |= br), (t.flags |= td));
        }
        function _0(e, t, a, i, o) {
          if (t.type !== t.elementType) {
            var s = a.propTypes;
            s &&
              wi(
                s,
                i,
                // Resolved props
                "prop",
                _t(a)
              );
          }
          var d;
          {
            var g = Xc(t, a, true);
            d = qc(t, g);
          }
          var y, C;
          tf(t, o), el(t);
          {
            if (
              ((mp.current = t),
              za(true),
              (y = sf(e, t, a, i, d, o)),
              (C = cf()),
              t.mode & Wt)
            ) {
              gn(true);
              try {
                (y = sf(e, t, a, i, d, o)), (C = cf());
              } finally {
                gn(false);
              }
            }
            za(false);
          }
          return (
            Ol(),
            e !== null && !_i
              ? (ZS(e, t, o), lo(e, t, o))
              : (fr() && C && cm(t), (t.flags |= Gi), Wr(e, t, y, o), t.child)
          );
        }
        function jx(e, t, a, i, o) {
          {
            switch (u2(t)) {
              case false: {
                var s = t.stateNode,
                  d = t.type,
                  g = new d(t.memoizedProps, s.context),
                  y = g.state;
                s.updater.enqueueSetState(s, y, null);
                break;
              }
              case true: {
                (t.flags |= Be), (t.flags |= Dn);
                var C = new Error("Simulated error coming from DevTools"),
                  E = yn(o);
                t.lanes = qe(t.lanes, E);
                var M = w0(t, ms(C, t), E);
                Rm(t, M);
                break;
              }
            }
            if (t.type !== t.elementType) {
              var _ = a.propTypes;
              _ &&
                wi(
                  _,
                  i,
                  // Resolved props
                  "prop",
                  _t(a)
                );
            }
          }
          var B;
          fl(a) ? ((B = true), Mh(t)) : (B = false), tf(t, o);
          var V = t.stateNode,
            I;
          V === null
            ? (Eg(e, t), VS(t, a, i), Fm(t, a, i, o), (I = true))
            : e === null
            ? (I = yT(t, a, i, o))
            : (I = mT(e, t, a, i, o));
          var he = z0(e, t, a, I, B, o);
          {
            var _e = t.stateNode;
            I &&
              _e.props !== i &&
              (Ss ||
                S(
                  "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
                  We2(t) || "a component"
                ),
              (Ss = true));
          }
          return he;
        }
        function z0(e, t, a, i, o, s) {
          Ox(e, t);
          var d = (t.flags & Be) !== De;
          if (!i && !d) return o && hS(t, a, false), lo(e, t, s);
          var g = t.stateNode;
          mp.current = t;
          var y;
          if (d && typeof a.getDerivedStateFromError != "function")
            (y = null), Tx();
          else {
            el(t);
            {
              if ((za(true), (y = g.render()), t.mode & Wt)) {
                gn(true);
                try {
                  g.render();
                } finally {
                  gn(false);
                }
              }
              za(false);
            }
            Ol();
          }
          return (
            (t.flags |= Gi),
            e !== null && d ? VT(e, t, y, s) : Wr(e, t, y, s),
            (t.memoizedState = g.state),
            o && hS(t, a, true),
            t.child
          );
        }
        function Ax(e) {
          var t = e.stateNode;
          t.pendingContext
            ? pS(e, t.pendingContext, t.pendingContext !== t.context)
            : t.context && pS(e, t.context, false),
            Ym(e, t.containerInfo);
        }
        function QT(e, t, a) {
          if ((Ax(t), e === null))
            throw new Error(
              "Should have a current fiber. This is a bug in React."
            );
          var i = t.pendingProps,
            o = t.memoizedState,
            s = o.element;
          OS(e, t), Gh(t, i, null, a);
          var d = t.memoizedState;
          t.stateNode;
          var g = d.element;
          if (o.isDehydrated) {
            var y = {
                element: g,
                isDehydrated: false,
                cache: d.cache,
                pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
                transitions: d.transitions,
              },
              C = t.updateQueue;
            if (((C.baseState = y), (t.memoizedState = y), t.flags & Kt)) {
              var E = ms(
                new Error(
                  "There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."
                ),
                t
              );
              return Ux(e, t, g, a, E);
            } else if (g !== s) {
              var M = ms(
                new Error(
                  "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                ),
                t
              );
              return Ux(e, t, g, a, M);
            } else {
              qw(t);
              var _ = GS(t, null, g, a);
              t.child = _;
              for (var B = _; B; )
                (B.flags = (B.flags & ~At) | ua), (B = B.sibling);
            }
          } else {
            if ((Jc(), g === s)) return lo(e, t, a);
            Wr(e, t, g, a);
          }
          return t.child;
        }
        function Ux(e, t, a, i, o) {
          return Jc(), gm(o), (t.flags |= Kt), Wr(e, t, a, i), t.child;
        }
        function GT(e, t, a) {
          XS(t), e === null && hm(t);
          var i = t.type,
            o = t.pendingProps,
            s = e !== null ? e.memoizedProps : null,
            d = o.children,
            g = qy(i, o);
          return (
            g ? (d = null) : s !== null && qy(i, s) && (t.flags |= Ct),
            Ox(e, t),
            Wr(e, t, d, a),
            t.child
          );
        }
        function WT(e, t) {
          return e === null && hm(t), null;
        }
        function XT(e, t, a, i) {
          Eg(e, t);
          var o = t.pendingProps,
            s = a,
            d = s._payload,
            g = s._init,
            y = g(d);
          t.type = y;
          var C = (t.tag = Wk(y)),
            E = ki(y, o),
            M;
          switch (C) {
            case j:
              return (
                M0(t, y), (t.type = y = mf(y)), (M = _0(null, t, y, E, i)), M
              );
            case L:
              return (t.type = y = u1(y)), (M = jx(null, t, y, E, i)), M;
            case Ne:
              return (t.type = y = s1(y)), (M = _x(null, t, y, E, i)), M;
            case Ie: {
              if (t.type !== t.elementType) {
                var _ = y.propTypes;
                _ &&
                  wi(
                    _,
                    E,
                    // Resolved for outer only
                    "prop",
                    _t(y)
                  );
              }
              return (
                (M = zx(
                  null,
                  t,
                  y,
                  ki(y.type, E),
                  // The inner type can have defaults too
                  i
                )),
                M
              );
            }
          }
          var B = "";
          throw (
            (y !== null &&
              typeof y == "object" &&
              y.$$typeof === Oe &&
              (B = " Did you wrap a component in React.lazy() more than once?"),
            new Error(
              "Element type is invalid. Received a promise that resolves to: " +
                y +
                ". " +
                ("Lazy element type must resolve to a class or function." + B)
            ))
          );
        }
        function qT(e, t, a, i, o) {
          Eg(e, t), (t.tag = L);
          var s;
          return (
            fl(a) ? ((s = true), Mh(t)) : (s = false),
            tf(t, o),
            VS(t, a, i),
            Fm(t, a, i, o),
            z0(null, t, a, true, s, o)
          );
        }
        function KT(e, t, a, i) {
          Eg(e, t);
          var o = t.pendingProps,
            s;
          {
            var d = Xc(t, a, false);
            s = qc(t, d);
          }
          tf(t, i);
          var g, y;
          el(t);
          {
            if (a.prototype && typeof a.prototype.render == "function") {
              var C = _t(a) || "Unknown";
              T0[C] ||
                (S(
                  "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
                  C,
                  C
                ),
                (T0[C] = true));
            }
            t.mode & Wt && Ri.recordLegacyContextWarning(t, null),
              za(true),
              (mp.current = t),
              (g = sf(null, t, a, o, s, i)),
              (y = cf()),
              za(false);
          }
          if (
            (Ol(),
            (t.flags |= Gi),
            typeof g == "object" &&
              g !== null &&
              typeof g.render == "function" &&
              g.$$typeof === void 0)
          ) {
            var E = _t(a) || "Unknown";
            Sp[E] ||
              (S(
                "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
                E,
                E,
                E
              ),
              (Sp[E] = true));
          }
          if (
            // Run these checks in production only if the flag is off.
            // Eventually we'll delete this branch altogether.
            typeof g == "object" &&
            g !== null &&
            typeof g.render == "function" &&
            g.$$typeof === void 0
          ) {
            {
              var M = _t(a) || "Unknown";
              Sp[M] ||
                (S(
                  "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
                  M,
                  M,
                  M
                ),
                (Sp[M] = true));
            }
            (t.tag = L), (t.memoizedState = null), (t.updateQueue = null);
            var _ = false;
            return (
              fl(a) ? ((_ = true), Mh(t)) : (_ = false),
              (t.memoizedState =
                g.state !== null && g.state !== void 0 ? g.state : null),
              Tm(t),
              BS(t, g),
              Fm(t, a, o, i),
              z0(null, t, a, true, _, i)
            );
          } else {
            if (((t.tag = j), t.mode & Wt)) {
              gn(true);
              try {
                (g = sf(null, t, a, o, s, i)), (y = cf());
              } finally {
                gn(false);
              }
            }
            return fr() && y && cm(t), Wr(null, t, g, i), M0(t, a), t.child;
          }
        }
        function M0(e, t) {
          {
            if (
              (t &&
                t.childContextTypes &&
                S(
                  "%s(...): childContextTypes cannot be defined on a function component.",
                  t.displayName || t.name || "Component"
                ),
              e.ref !== null)
            ) {
              var a = "",
                i = aa();
              i &&
                (a +=
                  `

Check the render method of \`` +
                  i +
                  "`.");
              var o = i || "",
                s = e._debugSource;
              s && (o = s.fileName + ":" + s.lineNumber),
                D0[o] ||
                  ((D0[o] = true),
                  S(
                    "Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",
                    a
                  ));
            }
            if (typeof t.getDerivedStateFromProps == "function") {
              var d = _t(t) || "Unknown";
              k0[d] ||
                (S(
                  "%s: Function components do not support getDerivedStateFromProps.",
                  d
                ),
                (k0[d] = true));
            }
            if (typeof t.contextType == "object" && t.contextType !== null) {
              var g = _t(t) || "Unknown";
              R0[g] ||
                (S("%s: Function components do not support contextType.", g),
                (R0[g] = true));
            }
          }
        }
        var L0 = {
          dehydrated: null,
          treeContext: null,
          retryLane: ot,
        };
        function O0(e) {
          return {
            baseLanes: e,
            cachePool: BT(),
            transitions: null,
          };
        }
        function ZT(e, t) {
          var a = null;
          return {
            baseLanes: qe(e.baseLanes, t),
            cachePool: a,
            transitions: e.transitions,
          };
        }
        function JT(e, t, a, i) {
          if (t !== null) {
            var o = t.memoizedState;
            if (o === null) return false;
          }
          return Gm(e, cp);
        }
        function eR(e, t) {
          return Uo(e.childLanes, t);
        }
        function Fx(e, t, a) {
          var i = t.pendingProps;
          s2(t) && (t.flags |= Be);
          var o = Di.current,
            s = false,
            d = (t.flags & Be) !== De;
          if (
            (d || JT(o, e)
              ? ((s = true), (t.flags &= ~Be))
              : (e === null || e.memoizedState !== null) && (o = ET(o, KS)),
            (o = af(o)),
            lu(t, o),
            e === null)
          ) {
            hm(t);
            var g = t.memoizedState;
            if (g !== null) {
              var y = g.dehydrated;
              if (y !== null) return iR(t, y);
            }
            var C = i.children,
              E = i.fallback;
            if (s) {
              var M = tR(t, C, E, a),
                _ = t.child;
              return (_.memoizedState = O0(a)), (t.memoizedState = L0), M;
            } else return j0(t, C);
          } else {
            var B = e.memoizedState;
            if (B !== null) {
              var V = B.dehydrated;
              if (V !== null) return lR(e, t, d, i, V, B, a);
            }
            if (s) {
              var I = i.fallback,
                he = i.children,
                _e = rR(e, t, he, I, a),
                Te = t.child,
                st = e.child.memoizedState;
              return (
                (Te.memoizedState = st === null ? O0(a) : ZT(st, a)),
                (Te.childLanes = eR(e, a)),
                (t.memoizedState = L0),
                _e
              );
            } else {
              var it = i.children,
                F = nR(e, t, it, a);
              return (t.memoizedState = null), F;
            }
          }
        }
        function j0(e, t, a) {
          var i = e.mode,
            o = {
              mode: "visible",
              children: t,
            },
            s = A0(o, i);
          return (s.return = e), (e.child = s), s;
        }
        function tR(e, t, a, i) {
          var o = e.mode,
            s = e.child,
            d = {
              mode: "hidden",
              children: t,
            },
            g,
            y;
          return (
            (o & nt) === Le && s !== null
              ? ((g = s),
                (g.childLanes = G),
                (g.pendingProps = d),
                e.mode & je &&
                  ((g.actualDuration = 0),
                  (g.actualStartTime = -1),
                  (g.selfBaseDuration = 0),
                  (g.treeBaseDuration = 0)),
                (y = vu(a, o, i, null)))
              : ((g = A0(d, o)), (y = vu(a, o, i, null))),
            (g.return = e),
            (y.return = e),
            (g.sibling = y),
            (e.child = g),
            y
          );
        }
        function A0(e, t, a) {
          return $C(e, t, G, null);
        }
        function $x(e, t) {
          return ws(e, t);
        }
        function nR(e, t, a, i) {
          var o = e.child,
            s = o.sibling,
            d = $x(o, {
              mode: "visible",
              children: a,
            });
          if (
            ((t.mode & nt) === Le && (d.lanes = i),
            (d.return = t),
            (d.sibling = null),
            s !== null)
          ) {
            var g = t.deletions;
            g === null ? ((t.deletions = [s]), (t.flags |= St)) : g.push(s);
          }
          return (t.child = d), d;
        }
        function rR(e, t, a, i, o) {
          var s = t.mode,
            d = e.child,
            g = d.sibling,
            y = {
              mode: "hidden",
              children: a,
            },
            C;
          if (
            // In legacy mode, we commit the primary tree as if it successfully
            // completed, even though it's in an inconsistent state.
            (s & nt) === Le && // Make sure we're on the second pass, i.e. the primary child fragment was
            // already cloned. In legacy mode, the only case where this isn't true is
            // when DevTools forces us to display a fallback; we skip the first render
            // pass entirely and go straight to rendering the fallback. (In Concurrent
            // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
            // only codepath.)
            t.child !== d
          ) {
            var E = t.child;
            (C = E),
              (C.childLanes = G),
              (C.pendingProps = y),
              t.mode & je &&
                ((C.actualDuration = 0),
                (C.actualStartTime = -1),
                (C.selfBaseDuration = d.selfBaseDuration),
                (C.treeBaseDuration = d.treeBaseDuration)),
              (t.deletions = null);
          } else (C = $x(d, y)), (C.subtreeFlags = d.subtreeFlags & Un);
          var M;
          return (
            g !== null
              ? (M = ws(g, i))
              : ((M = vu(i, s, o, null)), (M.flags |= At)),
            (M.return = t),
            (C.return = t),
            (C.sibling = M),
            (t.child = C),
            M
          );
        }
        function Cg(e, t, a, i) {
          i !== null && gm(i), nf(t, e.child, null, a);
          var o = t.pendingProps,
            s = o.children,
            d = j0(t, s);
          return (d.flags |= At), (t.memoizedState = null), d;
        }
        function aR(e, t, a, i, o) {
          var s = t.mode,
            d = {
              mode: "visible",
              children: a,
            },
            g = A0(d, s),
            y = vu(i, s, o, null);
          return (
            (y.flags |= At),
            (g.return = t),
            (y.return = t),
            (g.sibling = y),
            (t.child = g),
            (t.mode & nt) !== Le && nf(t, e.child, null, o),
            y
          );
        }
        function iR(e, t, a) {
          return (
            (e.mode & nt) === Le
              ? (S(
                  "Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."
                ),
                (e.lanes = Ae2))
              : em(t)
              ? (e.lanes = Ul)
              : (e.lanes = Nr),
            null
          );
        }
        function lR(e, t, a, i, o, s, d) {
          if (a)
            if (t.flags & Kt) {
              t.flags &= ~Kt;
              var F = E0(
                new Error(
                  "There was an error while hydrating this Suspense boundary. Switched to client rendering."
                )
              );
              return Cg(e, t, d, F);
            } else {
              if (t.memoizedState !== null)
                return (t.child = e.child), (t.flags |= Be), null;
              var Q = i.children,
                $ = i.fallback,
                re = aR(e, t, Q, $, d),
                ge = t.child;
              return (ge.memoizedState = O0(d)), (t.memoizedState = L0), re;
            }
          else {
            if ((Ww(), (t.mode & nt) === Le))
              return Cg(
                e,
                t,
                d,
                // TODO: When we delete legacy mode, we should make this error argument
                // required — every concurrent mode path that causes hydration to
                // de-opt to client rendering should have an error message.
                null
              );
            if (em(o)) {
              var g, y, C;
              {
                var E = fw(o);
                (g = E.digest), (y = E.message), (C = E.stack);
              }
              var M;
              y
                ? (M = new Error(y))
                : (M = new Error(
                    "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."
                  ));
              var _ = E0(M, g, C);
              return Cg(e, t, d, _);
            }
            var B = _r(d, e.childLanes);
            if (_i || B) {
              var V = Mg();
              if (V !== null) {
                var I = Cy(V, d);
                if (I !== ot && I !== s.retryLane) {
                  s.retryLane = I;
                  var he = Mt;
                  ma(e, I), Gn(V, e, I, he);
                }
              }
              r1();
              var _e = E0(
                new Error(
                  "This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."
                )
              );
              return Cg(e, t, d, _e);
            } else if (oS(o)) {
              (t.flags |= Be), (t.child = e.child);
              var Te = zk.bind(null, e);
              return dw(o, Te), null;
            } else {
              Kw(t, o, s.treeContext);
              var st = i.children,
                it = j0(t, st);
              return (it.flags |= ua), it;
            }
          }
        }
        function Hx(e, t, a) {
          e.lanes = qe(e.lanes, t);
          var i = e.alternate;
          i !== null && (i.lanes = qe(i.lanes, t)), Cm(e.return, t, a);
        }
        function oR(e, t, a) {
          for (var i = t; i !== null; ) {
            if (i.tag === Fe) {
              var o = i.memoizedState;
              o !== null && Hx(i, a, e);
            } else if (i.tag === xt) Hx(i, a, e);
            else if (i.child !== null) {
              (i.child.return = i), (i = i.child);
              continue;
            }
            if (i === e) return;
            for (; i.sibling === null; ) {
              if (i.return === null || i.return === e) return;
              i = i.return;
            }
            (i.sibling.return = i.return), (i = i.sibling);
          }
        }
        function uR(e) {
          for (var t = e, a = null; t !== null; ) {
            var i = t.alternate;
            i !== null && eg(i) === null && (a = t), (t = t.sibling);
          }
          return a;
        }
        function sR(e) {
          if (
            e !== void 0 &&
            e !== "forwards" &&
            e !== "backwards" &&
            e !== "together" &&
            !N0[e]
          )
            if (((N0[e] = true), typeof e == "string"))
              switch (e.toLowerCase()) {
                case "together":
                case "forwards":
                case "backwards": {
                  S(
                    '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                    e,
                    e.toLowerCase()
                  );
                  break;
                }
                case "forward":
                case "backward": {
                  S(
                    '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                    e,
                    e.toLowerCase()
                  );
                  break;
                }
                default:
                  S(
                    '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                    e
                  );
                  break;
              }
            else
              S(
                '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                e
              );
        }
        function cR(e, t) {
          e !== void 0 &&
            !xg[e] &&
            (e !== "collapsed" && e !== "hidden"
              ? ((xg[e] = true),
                S(
                  '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
                  e
                ))
              : t !== "forwards" &&
                t !== "backwards" &&
                ((xg[e] = true),
                S(
                  '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
                  e
                )));
        }
        function Bx(e, t) {
          {
            var a = Rn(e),
              i = !a && typeof oi(e) == "function";
            if (a || i) {
              var o = a ? "array" : "iterable";
              return (
                S(
                  "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
                  o,
                  t,
                  o
                ),
                false
              );
            }
          }
          return true;
        }
        function fR(e, t) {
          if (
            (t === "forwards" || t === "backwards") &&
            e !== void 0 &&
            e !== null &&
            e !== false
          )
            if (Rn(e)) {
              for (var a = 0; a < e.length; a++) if (!Bx(e[a], a)) return;
            } else {
              var i = oi(e);
              if (typeof i == "function") {
                var o = i.call(e);
                if (o)
                  for (var s = o.next(), d = 0; !s.done; s = o.next()) {
                    if (!Bx(s.value, d)) return;
                    d++;
                  }
              } else
                S(
                  'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
                  t
                );
            }
        }
        function U0(e, t, a, i, o) {
          var s = e.memoizedState;
          s === null
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: i,
                tail: a,
                tailMode: o,
              })
            : ((s.isBackwards = t),
              (s.rendering = null),
              (s.renderingStartTime = 0),
              (s.last = i),
              (s.tail = a),
              (s.tailMode = o));
        }
        function Vx(e, t, a) {
          var i = t.pendingProps,
            o = i.revealOrder,
            s = i.tail,
            d = i.children;
          sR(o), cR(s, o), fR(d, o), Wr(e, t, d, a);
          var g = Di.current,
            y = Gm(g, cp);
          if (y) (g = Wm(g, cp)), (t.flags |= Be);
          else {
            var C = e !== null && (e.flags & Be) !== De;
            C && oR(t, t.child, a), (g = af(g));
          }
          if ((lu(t, g), (t.mode & nt) === Le)) t.memoizedState = null;
          else
            switch (o) {
              case "forwards": {
                var E = uR(t.child),
                  M;
                E === null
                  ? ((M = t.child), (t.child = null))
                  : ((M = E.sibling), (E.sibling = null)),
                  U0(
                    t,
                    false,
                    // isBackwards
                    M,
                    E,
                    s
                  );
                break;
              }
              case "backwards": {
                var _ = null,
                  B = t.child;
                for (t.child = null; B !== null; ) {
                  var V = B.alternate;
                  if (V !== null && eg(V) === null) {
                    t.child = B;
                    break;
                  }
                  var I = B.sibling;
                  (B.sibling = _), (_ = B), (B = I);
                }
                U0(
                  t,
                  true,
                  // isBackwards
                  _,
                  null,
                  // last
                  s
                );
                break;
              }
              case "together": {
                U0(
                  t,
                  false,
                  // isBackwards
                  null,
                  // tail
                  null,
                  // last
                  void 0
                );
                break;
              }
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function dR(e, t, a) {
          Ym(t, t.stateNode.containerInfo);
          var i = t.pendingProps;
          return (
            e === null ? (t.child = nf(t, null, i, a)) : Wr(e, t, i, a), t.child
          );
        }
        var Px = false;
        function pR(e, t, a) {
          var i = t.type,
            o = i._context,
            s = t.pendingProps,
            d = t.memoizedProps,
            g = s.value;
          {
            "value" in s ||
              Px ||
              ((Px = true),
              S(
                "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
              ));
            var y = t.type.propTypes;
            y && wi(y, s, "prop", "Context.Provider");
          }
          if ((_S(t, o, g), d !== null)) {
            var C = d.value;
            if (Se(C, g)) {
              if (d.children === s.children && !_h()) return lo(e, t, a);
            } else oT(t, o, a);
          }
          var E = s.children;
          return Wr(e, t, E, a), t.child;
        }
        var Yx = false;
        function vR(e, t, a) {
          var i = t.type;
          i._context === void 0
            ? i !== i.Consumer &&
              (Yx ||
                ((Yx = true),
                S(
                  "Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
                )))
            : (i = i._context);
          var o = t.pendingProps,
            s = o.children;
          typeof s != "function" &&
            S(
              "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
            ),
            tf(t, a);
          var d = Ln(i);
          el(t);
          var g;
          return (
            (mp.current = t),
            za(true),
            (g = s(d)),
            za(false),
            Ol(),
            (t.flags |= Gi),
            Wr(e, t, g, a),
            t.child
          );
        }
        function xp() {
          _i = true;
        }
        function Eg(e, t) {
          (t.mode & nt) === Le &&
            e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= At));
        }
        function lo(e, t, a) {
          return (
            e !== null && (t.dependencies = e.dependencies),
            Tx(),
            Mp(t.lanes),
            _r(a, t.childLanes) ? (ST(e, t), t.child) : null
          );
        }
        function hR(e, t, a) {
          {
            var i = t.return;
            if (i === null) throw new Error("Cannot swap the root fiber.");
            if (
              ((e.alternate = null),
              (t.alternate = null),
              (a.index = t.index),
              (a.sibling = t.sibling),
              (a.return = t.return),
              (a.ref = t.ref),
              t === i.child)
            )
              i.child = a;
            else {
              var o = i.child;
              if (o === null)
                throw new Error("Expected parent to have a child.");
              for (; o.sibling !== t; )
                if (((o = o.sibling), o === null))
                  throw new Error("Expected to find the previous sibling.");
              o.sibling = a;
            }
            var s = i.deletions;
            return (
              s === null ? ((i.deletions = [e]), (i.flags |= St)) : s.push(e),
              (a.flags |= At),
              a
            );
          }
        }
        function F0(e, t) {
          var a = e.lanes;
          return !!_r(a, t);
        }
        function gR(e, t, a) {
          switch (t.tag) {
            case U:
              Ax(t), t.stateNode, Jc();
              break;
            case X:
              XS(t);
              break;
            case L: {
              var i = t.type;
              fl(i) && Mh(t);
              break;
            }
            case W:
              Ym(t, t.stateNode.containerInfo);
              break;
            case Ue: {
              var o = t.memoizedProps.value,
                s = t.type._context;
              _S(t, s, o);
              break;
            }
            case et:
              {
                var d = _r(a, t.childLanes);
                d && (t.flags |= Xe);
                {
                  var g = t.stateNode;
                  (g.effectDuration = 0), (g.passiveEffectDuration = 0);
                }
              }
              break;
            case Fe: {
              var y = t.memoizedState;
              if (y !== null) {
                if (y.dehydrated !== null)
                  return lu(t, af(Di.current)), (t.flags |= Be), null;
                var C = t.child,
                  E = C.childLanes;
                if (_r(a, E)) return Fx(e, t, a);
                lu(t, af(Di.current));
                var M = lo(e, t, a);
                return M !== null ? M.sibling : null;
              } else lu(t, af(Di.current));
              break;
            }
            case xt: {
              var _ = (e.flags & Be) !== De,
                B = _r(a, t.childLanes);
              if (_) {
                if (B) return Vx(e, t, a);
                t.flags |= Be;
              }
              var V = t.memoizedState;
              if (
                (V !== null &&
                  ((V.rendering = null),
                  (V.tail = null),
                  (V.lastEffect = null)),
                lu(t, Di.current),
                B)
              )
                break;
              return null;
            }
            case Qe:
            case lt:
              return (t.lanes = G), Lx(e, t, a);
          }
          return lo(e, t, a);
        }
        function Ix(e, t, a) {
          if (t._debugNeedsRemount && e !== null)
            return hR(
              e,
              t,
              v1(
                t.type,
                t.key,
                t.pendingProps,
                t._debugOwner || null,
                t.mode,
                t.lanes
              )
            );
          if (e !== null) {
            var i = e.memoizedProps,
              o = t.pendingProps;
            if (
              i !== o ||
              _h() || // Force a re-render if the implementation changed due to hot reload:
              t.type !== e.type
            )
              _i = true;
            else {
              var s = F0(e, a);
              if (
                !s && // If this is the second pass of an error or suspense boundary, there
                // may not be work scheduled on `current`, so we check for this flag.
                (t.flags & Be) === De
              )
                return (_i = false), gR(e, t, a);
              (e.flags & Hu) !== De ? (_i = true) : (_i = false);
            }
          } else if (((_i = false), fr() && Vw(t))) {
            var d = t.index,
              g = Pw();
            mS(t, g, d);
          }
          switch (((t.lanes = G), t.tag)) {
            case Y:
              return KT(e, t, t.type, a);
            case dn: {
              var y = t.elementType;
              return XT(e, t, y, a);
            }
            case j: {
              var C = t.type,
                E = t.pendingProps,
                M = t.elementType === C ? E : ki(C, E);
              return _0(e, t, C, M, a);
            }
            case L: {
              var _ = t.type,
                B = t.pendingProps,
                V = t.elementType === _ ? B : ki(_, B);
              return jx(e, t, _, V, a);
            }
            case U:
              return QT(e, t, a);
            case X:
              return GT(e, t, a);
            case le:
              return WT(e, t);
            case Fe:
              return Fx(e, t, a);
            case W:
              return dR(e, t, a);
            case Ne: {
              var I = t.type,
                he = t.pendingProps,
                _e = t.elementType === I ? he : ki(I, he);
              return _x(e, t, I, _e, a);
            }
            case Ce:
              return PT(e, t, a);
            case Pe:
              return YT(e, t, a);
            case et:
              return IT(e, t, a);
            case Ue:
              return pR(e, t, a);
            case ct:
              return vR(e, t, a);
            case Ie: {
              var Te = t.type,
                st = t.pendingProps,
                it = ki(Te, st);
              if (t.type !== t.elementType) {
                var F = Te.propTypes;
                F &&
                  wi(
                    F,
                    it,
                    // Resolved for outer only
                    "prop",
                    _t(Te)
                  );
              }
              return (it = ki(Te.type, it)), zx(e, t, Te, it, a);
            }
            case $e:
              return Mx(e, t, t.type, t.pendingProps, a);
            case pn: {
              var Q = t.type,
                $ = t.pendingProps,
                re = t.elementType === Q ? $ : ki(Q, $);
              return qT(e, t, Q, re, a);
            }
            case xt:
              return Vx(e, t, a);
            case Dt:
              break;
            case Qe:
              return Lx(e, t, a);
          }
          throw new Error(
            "Unknown unit of work tag (" +
              t.tag +
              "). This error is likely caused by a bug in React. Please file an issue."
          );
        }
        function ff(e) {
          e.flags |= Xe;
        }
        function Qx(e) {
          (e.flags |= br), (e.flags |= td);
        }
        var Gx, $0, Wx, Xx;
        (Gx = function (e, t, a, i) {
          for (var o = t.child; o !== null; ) {
            if (o.tag === X || o.tag === le) $b(e, o.stateNode);
            else if (o.tag !== W) {
              if (o.child !== null) {
                (o.child.return = o), (o = o.child);
                continue;
              }
            }
            if (o === t) return;
            for (; o.sibling === null; ) {
              if (o.return === null || o.return === t) return;
              o = o.return;
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }),
          ($0 = function (e, t) {}),
          (Wx = function (e, t, a, i, o) {
            var s = e.memoizedProps;
            if (s !== i) {
              var d = t.stateNode,
                g = Im(),
                y = Bb(d, a, s, i, o, g);
              (t.updateQueue = y), y && ff(t);
            }
          }),
          (Xx = function (e, t, a, i) {
            a !== i && ff(t);
          });
        function Cp(e, t) {
          if (!fr())
            switch (e.tailMode) {
              case "hidden": {
                for (var a = e.tail, i = null; a !== null; )
                  a.alternate !== null && (i = a), (a = a.sibling);
                i === null ? (e.tail = null) : (i.sibling = null);
                break;
              }
              case "collapsed": {
                for (var o = e.tail, s = null; o !== null; )
                  o.alternate !== null && (s = o), (o = o.sibling);
                s === null
                  ? !t && e.tail !== null
                    ? (e.tail.sibling = null)
                    : (e.tail = null)
                  : (s.sibling = null);
                break;
              }
            }
        }
        function pr(e) {
          var t = e.alternate !== null && e.alternate.child === e.child,
            a = G,
            i = De;
          if (t) {
            if ((e.mode & je) !== Le) {
              for (var y = e.selfBaseDuration, C = e.child; C !== null; )
                (a = qe(a, qe(C.lanes, C.childLanes))),
                  (i |= C.subtreeFlags & Un),
                  (i |= C.flags & Un),
                  (y += C.treeBaseDuration),
                  (C = C.sibling);
              e.treeBaseDuration = y;
            } else
              for (var E = e.child; E !== null; )
                (a = qe(a, qe(E.lanes, E.childLanes))),
                  (i |= E.subtreeFlags & Un),
                  (i |= E.flags & Un),
                  (E.return = e),
                  (E = E.sibling);
            e.subtreeFlags |= i;
          } else {
            if ((e.mode & je) !== Le) {
              for (
                var o = e.actualDuration, s = e.selfBaseDuration, d = e.child;
                d !== null;

              )
                (a = qe(a, qe(d.lanes, d.childLanes))),
                  (i |= d.subtreeFlags),
                  (i |= d.flags),
                  (o += d.actualDuration),
                  (s += d.treeBaseDuration),
                  (d = d.sibling);
              (e.actualDuration = o), (e.treeBaseDuration = s);
            } else
              for (var g = e.child; g !== null; )
                (a = qe(a, qe(g.lanes, g.childLanes))),
                  (i |= g.subtreeFlags),
                  (i |= g.flags),
                  (g.return = e),
                  (g = g.sibling);
            e.subtreeFlags |= i;
          }
          return (e.childLanes = a), t;
        }
        function yR(e, t, a) {
          if (nT() && (t.mode & nt) !== Le && (t.flags & Be) === De)
            return TS(t), Jc(), (t.flags |= Kt | Vr | Dn), false;
          var i = Uh(t);
          if (a !== null && a.dehydrated !== null)
            if (e === null) {
              if (!i)
                throw new Error(
                  "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                );
              if ((eT(t), pr(t), (t.mode & je) !== Le)) {
                var o = a !== null;
                if (o) {
                  var s = t.child;
                  s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
                }
              }
              return false;
            } else {
              if (
                (Jc(),
                (t.flags & Be) === De && (t.memoizedState = null),
                (t.flags |= Xe),
                pr(t),
                (t.mode & je) !== Le)
              ) {
                var d = a !== null;
                if (d) {
                  var g = t.child;
                  g !== null && (t.treeBaseDuration -= g.treeBaseDuration);
                }
              }
              return false;
            }
          else return RS(), true;
        }
        function qx(e, t, a) {
          var i = t.pendingProps;
          switch ((fm(t), t.tag)) {
            case Y:
            case dn:
            case $e:
            case j:
            case Ne:
            case Ce:
            case Pe:
            case et:
            case ct:
            case Ie:
              return pr(t), null;
            case L: {
              var o = t.type;
              return fl(o) && zh(t), pr(t), null;
            }
            case U: {
              var s = t.stateNode;
              if (
                (rf(t),
                om(t),
                qm(),
                s.pendingContext &&
                  ((s.context = s.pendingContext), (s.pendingContext = null)),
                e === null || e.child === null)
              ) {
                var d = Uh(t);
                if (d) ff(t);
                else if (e !== null) {
                  var g = e.memoizedState;
                  (!g.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
                    (t.flags & Kt) !== De) &&
                    ((t.flags |= oa), RS());
                }
              }
              return $0(e, t), pr(t), null;
            }
            case X: {
              Qm(t);
              var y = WS(),
                C = t.type;
              if (e !== null && t.stateNode != null)
                Wx(e, t, C, i, y), e.ref !== t.ref && Qx(t);
              else {
                if (!i) {
                  if (t.stateNode === null)
                    throw new Error(
                      "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                    );
                  return pr(t), null;
                }
                var E = Im(),
                  M = Uh(t);
                if (M) Zw(t, y, E) && ff(t);
                else {
                  var _ = Fb(C, i, y, E, t);
                  Gx(_, t, false, false),
                    (t.stateNode = _),
                    Hb(_, C, i, y) && ff(t);
                }
                t.ref !== null && Qx(t);
              }
              return pr(t), null;
            }
            case le: {
              var B = i;
              if (e && t.stateNode != null) {
                var V = e.memoizedProps;
                Xx(e, t, V, B);
              } else {
                if (typeof B != "string" && t.stateNode === null)
                  throw new Error(
                    "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                  );
                var I = WS(),
                  he = Im(),
                  _e = Uh(t);
                _e ? Jw(t) && ff(t) : (t.stateNode = Vb(B, I, he, t));
              }
              return pr(t), null;
            }
            case Fe: {
              lf(t);
              var Te = t.memoizedState;
              if (
                e === null ||
                (e.memoizedState !== null &&
                  e.memoizedState.dehydrated !== null)
              ) {
                var st = yR(e, t, Te);
                if (!st) return t.flags & Dn ? t : null;
              }
              if ((t.flags & Be) !== De)
                return (t.lanes = a), (t.mode & je) !== Le && C0(t), t;
              var it = Te !== null,
                F = e !== null && e.memoizedState !== null;
              if (it !== F && it) {
                var Q = t.child;
                if (((Q.flags |= Wi), (t.mode & nt) !== Le)) {
                  var $ =
                    e === null &&
                    (t.memoizedProps.unstable_avoidThisFallback !== true ||
                      !vt);
                  $ || Gm(Di.current, KS) ? mk() : r1();
                }
              }
              var re = t.updateQueue;
              if (
                (re !== null && (t.flags |= Xe),
                pr(t),
                (t.mode & je) !== Le && it)
              ) {
                var ge = t.child;
                ge !== null && (t.treeBaseDuration -= ge.treeBaseDuration);
              }
              return null;
            }
            case W:
              return (
                rf(t),
                $0(e, t),
                e === null && jw(t.stateNode.containerInfo),
                pr(t),
                null
              );
            case Ue:
              var fe = t.type._context;
              return xm(fe, t), pr(t), null;
            case pn: {
              var He = t.type;
              return fl(He) && zh(t), pr(t), null;
            }
            case xt: {
              lf(t);
              var Ge = t.memoizedState;
              if (Ge === null) return pr(t), null;
              var kt = (t.flags & Be) !== De,
                gt = Ge.rendering;
              if (gt === null)
                if (kt) Cp(Ge, false);
                else {
                  var Cn = xk() && (e === null || (e.flags & Be) === De);
                  if (!Cn)
                    for (var yt = t.child; yt !== null; ) {
                      var fn = eg(yt);
                      if (fn !== null) {
                        (kt = true), (t.flags |= Be), Cp(Ge, false);
                        var Or = fn.updateQueue;
                        return (
                          Or !== null &&
                            ((t.updateQueue = Or), (t.flags |= Xe)),
                          (t.subtreeFlags = De),
                          xT(t, a),
                          lu(t, Wm(Di.current, cp)),
                          t.child
                        );
                      }
                      yt = yt.sibling;
                    }
                  Ge.tail !== null &&
                    Gt() > yC() &&
                    ((t.flags |= Be),
                    (kt = true),
                    Cp(Ge, false),
                    (t.lanes = vd));
                }
              else {
                if (!kt) {
                  var mr = eg(gt);
                  if (mr !== null) {
                    (t.flags |= Be), (kt = true);
                    var $a = mr.updateQueue;
                    if (
                      ($a !== null && ((t.updateQueue = $a), (t.flags |= Xe)),
                      Cp(Ge, true),
                      Ge.tail === null &&
                        Ge.tailMode === "hidden" &&
                        !gt.alternate &&
                        !fr())
                    )
                      return pr(t), null;
                  } else
                    Gt() * 2 - Ge.renderingStartTime > yC() &&
                      a !== Nr &&
                      ((t.flags |= Be),
                      (kt = true),
                      Cp(Ge, false),
                      (t.lanes = vd));
                }
                if (Ge.isBackwards) (gt.sibling = t.child), (t.child = gt);
                else {
                  var Kr = Ge.last;
                  Kr !== null ? (Kr.sibling = gt) : (t.child = gt),
                    (Ge.last = gt);
                }
              }
              if (Ge.tail !== null) {
                var Zr = Ge.tail;
                (Ge.rendering = Zr),
                  (Ge.tail = Zr.sibling),
                  (Ge.renderingStartTime = Gt()),
                  (Zr.sibling = null);
                var jr = Di.current;
                return kt ? (jr = Wm(jr, cp)) : (jr = af(jr)), lu(t, jr), Zr;
              }
              return pr(t), null;
            }
            case Dt:
              break;
            case Qe:
            case lt: {
              n1(t);
              var fo = t.memoizedState,
                Sf = fo !== null;
              if (e !== null) {
                var Up = e.memoizedState,
                  Sl = Up !== null;
                Sl !== Sf && // LegacyHidden doesn't do any hiding — it only pre-renders.
                  !ve &&
                  (t.flags |= Wi);
              }
              return (
                !Sf || (t.mode & nt) === Le
                  ? pr(t)
                  : _r(ml, Nr) &&
                    (pr(t), t.subtreeFlags & (At | Xe) && (t.flags |= Wi)),
                null
              );
            }
            case En:
              return null;
            case jt:
              return null;
          }
          throw new Error(
            "Unknown unit of work tag (" +
              t.tag +
              "). This error is likely caused by a bug in React. Please file an issue."
          );
        }
        function mR(e, t, a) {
          switch ((fm(t), t.tag)) {
            case L: {
              var i = t.type;
              fl(i) && zh(t);
              var o = t.flags;
              return o & Dn
                ? ((t.flags = (o & ~Dn) | Be), (t.mode & je) !== Le && C0(t), t)
                : null;
            }
            case U: {
              t.stateNode, rf(t), om(t), qm();
              var s = t.flags;
              return (s & Dn) !== De && (s & Be) === De
                ? ((t.flags = (s & ~Dn) | Be), t)
                : null;
            }
            case X:
              return Qm(t), null;
            case Fe: {
              lf(t);
              var d = t.memoizedState;
              if (d !== null && d.dehydrated !== null) {
                if (t.alternate === null)
                  throw new Error(
                    "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
                  );
                Jc();
              }
              var g = t.flags;
              return g & Dn
                ? ((t.flags = (g & ~Dn) | Be), (t.mode & je) !== Le && C0(t), t)
                : null;
            }
            case xt:
              return lf(t), null;
            case W:
              return rf(t), null;
            case Ue:
              var y = t.type._context;
              return xm(y, t), null;
            case Qe:
            case lt:
              return n1(t), null;
            case En:
              return null;
            default:
              return null;
          }
        }
        function Kx(e, t, a) {
          switch ((fm(t), t.tag)) {
            case L: {
              var i = t.type.childContextTypes;
              i != null && zh(t);
              break;
            }
            case U: {
              t.stateNode, rf(t), om(t), qm();
              break;
            }
            case X: {
              Qm(t);
              break;
            }
            case W:
              rf(t);
              break;
            case Fe:
              lf(t);
              break;
            case xt:
              lf(t);
              break;
            case Ue:
              var o = t.type._context;
              xm(o, t);
              break;
            case Qe:
            case lt:
              n1(t);
              break;
          }
        }
        var Zx = null;
        Zx = /* @__PURE__ */ new Set();
        var bg = false,
          vr = false,
          SR = typeof WeakSet == "function" ? WeakSet : Set,
          xe = null,
          df = null,
          pf = null;
        function xR(e) {
          Ml(null, function () {
            throw e;
          }),
            Jf();
        }
        var CR = function (e, t) {
          if (
            ((t.props = e.memoizedProps),
            (t.state = e.memoizedState),
            e.mode & je)
          )
            try {
              gl(), t.componentWillUnmount();
            } finally {
              hl(e);
            }
          else t.componentWillUnmount();
        };
        function Jx(e, t) {
          try {
            su(Bn, e);
          } catch (a) {
            Ht(e, t, a);
          }
        }
        function H0(e, t, a) {
          try {
            CR(e, a);
          } catch (i) {
            Ht(e, t, i);
          }
        }
        function ER(e, t, a) {
          try {
            a.componentDidMount();
          } catch (i) {
            Ht(e, t, i);
          }
        }
        function eC(e, t) {
          try {
            nC(e);
          } catch (a) {
            Ht(e, t, a);
          }
        }
        function vf(e, t) {
          var a = e.ref;
          if (a !== null)
            if (typeof a == "function") {
              var i;
              try {
                if (vn && Jr && e.mode & je)
                  try {
                    gl(), (i = a(null));
                  } finally {
                    hl(e);
                  }
                else i = a(null);
              } catch (o) {
                Ht(e, t, o);
              }
              typeof i == "function" &&
                S(
                  "Unexpected return value from a callback ref in %s. A callback ref should not return a function.",
                  We2(e)
                );
            } else a.current = null;
        }
        function wg(e, t, a) {
          try {
            a();
          } catch (i) {
            Ht(e, t, i);
          }
        }
        var tC = false;
        function bR(e, t) {
          Ab(e.containerInfo), (xe = t), wR();
          var a = tC;
          return (tC = false), a;
        }
        function wR() {
          for (; xe !== null; ) {
            var e = xe,
              t = e.child;
            (e.subtreeFlags & No) !== De && t !== null
              ? ((t.return = e), (xe = t))
              : TR();
          }
        }
        function TR() {
          for (; xe !== null; ) {
            var e = xe;
            Tt(e);
            try {
              RR(e);
            } catch (a) {
              Ht(e, e.return, a);
            }
            hn();
            var t = e.sibling;
            if (t !== null) {
              (t.return = e.return), (xe = t);
              return;
            }
            xe = e.return;
          }
        }
        function RR(e) {
          var t = e.alternate,
            a = e.flags;
          if ((a & oa) !== De) {
            switch ((Tt(e), e.tag)) {
              case j:
              case Ne:
              case $e:
                break;
              case L: {
                if (t !== null) {
                  var i = t.memoizedProps,
                    o = t.memoizedState,
                    s = e.stateNode;
                  e.type === e.elementType &&
                    !Ss &&
                    (s.props !== e.memoizedProps &&
                      S(
                        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                        We2(e) || "instance"
                      ),
                    s.state !== e.memoizedState &&
                      S(
                        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                        We2(e) || "instance"
                      ));
                  var d = s.getSnapshotBeforeUpdate(
                    e.elementType === e.type ? i : ki(e.type, i),
                    o
                  );
                  {
                    var g = Zx;
                    d === void 0 &&
                      !g.has(e.type) &&
                      (g.add(e.type),
                      S(
                        "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
                        We2(e)
                      ));
                  }
                  s.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              }
              case U: {
                {
                  var y = e.stateNode;
                  ow(y.containerInfo);
                }
                break;
              }
              case X:
              case le:
              case W:
              case pn:
                break;
              default:
                throw new Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                );
            }
            hn();
          }
        }
        function zi(e, t, a) {
          var i = t.updateQueue,
            o = i !== null ? i.lastEffect : null;
          if (o !== null) {
            var s = o.next,
              d = s;
            do {
              if ((d.tag & e) === e) {
                var g = d.destroy;
                (d.destroy = void 0),
                  g !== void 0 &&
                    ((e & dr) !== Sa ? nc(t) : (e & Bn) !== Sa && rc(t),
                    (e & dl) !== Sa && Op(true),
                    wg(t, a, g),
                    (e & dl) !== Sa && Op(false),
                    (e & dr) !== Sa ? Av() : (e & Bn) !== Sa && _o());
              }
              d = d.next;
            } while (d !== s);
          }
        }
        function su(e, t) {
          var a = t.updateQueue,
            i = a !== null ? a.lastEffect : null;
          if (i !== null) {
            var o = i.next,
              s = o;
            do {
              if ((s.tag & e) === e) {
                (e & dr) !== Sa ? jv(t) : (e & Bn) !== Sa && Uv(t);
                var d = s.create;
                (e & dl) !== Sa && Op(true),
                  (s.destroy = d()),
                  (e & dl) !== Sa && Op(false),
                  (e & dr) !== Sa ? fd() : (e & Bn) !== Sa && Fv();
                {
                  var g = s.destroy;
                  if (g !== void 0 && typeof g != "function") {
                    var y = void 0;
                    (s.tag & Bn) !== De
                      ? (y = "useLayoutEffect")
                      : (s.tag & dl) !== De
                      ? (y = "useInsertionEffect")
                      : (y = "useEffect");
                    var C = void 0;
                    g === null
                      ? (C =
                          " You returned null. If your effect does not require clean up, return undefined (or nothing).")
                      : typeof g.then == "function"
                      ? (C =
                          `

It looks like you wrote ` +
                          y +
                          `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` +
                          y +
                          `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`)
                      : (C = " You returned: " + g),
                      S(
                        "%s must not return anything besides a function, which is used for clean-up.%s",
                        y,
                        C
                      );
                  }
                }
              }
              s = s.next;
            } while (s !== o);
          }
        }
        function kR(e, t) {
          if ((t.flags & Xe) !== De)
            switch (t.tag) {
              case et: {
                var a = t.stateNode.passiveEffectDuration,
                  i = t.memoizedProps,
                  o = i.id,
                  s = i.onPostCommit,
                  d = bx(),
                  g = t.alternate === null ? "mount" : "update";
                Ex() && (g = "nested-update"),
                  typeof s == "function" && s(o, g, a, d);
                var y = t.return;
                e: for (; y !== null; ) {
                  switch (y.tag) {
                    case U:
                      var C = y.stateNode;
                      C.passiveEffectDuration += a;
                      break e;
                    case et:
                      var E = y.stateNode;
                      E.passiveEffectDuration += a;
                      break e;
                  }
                  y = y.return;
                }
                break;
              }
            }
        }
        function DR(e, t, a, i) {
          if ((a.flags & Jn) !== De)
            switch (a.tag) {
              case j:
              case Ne:
              case $e: {
                if (!vr)
                  if (a.mode & je)
                    try {
                      gl(), su(Bn | Hn, a);
                    } finally {
                      hl(a);
                    }
                  else su(Bn | Hn, a);
                break;
              }
              case L: {
                var o = a.stateNode;
                if (a.flags & Xe && !vr)
                  if (t === null)
                    if (
                      (a.type === a.elementType &&
                        !Ss &&
                        (o.props !== a.memoizedProps &&
                          S(
                            "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                            We2(a) || "instance"
                          ),
                        o.state !== a.memoizedState &&
                          S(
                            "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                            We2(a) || "instance"
                          )),
                      a.mode & je)
                    )
                      try {
                        gl(), o.componentDidMount();
                      } finally {
                        hl(a);
                      }
                    else o.componentDidMount();
                  else {
                    var s =
                        a.elementType === a.type
                          ? t.memoizedProps
                          : ki(a.type, t.memoizedProps),
                      d = t.memoizedState;
                    if (
                      (a.type === a.elementType &&
                        !Ss &&
                        (o.props !== a.memoizedProps &&
                          S(
                            "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                            We2(a) || "instance"
                          ),
                        o.state !== a.memoizedState &&
                          S(
                            "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                            We2(a) || "instance"
                          )),
                      a.mode & je)
                    )
                      try {
                        gl(),
                          o.componentDidUpdate(
                            s,
                            d,
                            o.__reactInternalSnapshotBeforeUpdate
                          );
                      } finally {
                        hl(a);
                      }
                    else
                      o.componentDidUpdate(
                        s,
                        d,
                        o.__reactInternalSnapshotBeforeUpdate
                      );
                  }
                var g = a.updateQueue;
                g !== null &&
                  (a.type === a.elementType &&
                    !Ss &&
                    (o.props !== a.memoizedProps &&
                      S(
                        "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                        We2(a) || "instance"
                      ),
                    o.state !== a.memoizedState &&
                      S(
                        "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                        We2(a) || "instance"
                      )),
                  AS(a, g, o));
                break;
              }
              case U: {
                var y = a.updateQueue;
                if (y !== null) {
                  var C = null;
                  if (a.child !== null)
                    switch (a.child.tag) {
                      case X:
                        C = a.child.stateNode;
                        break;
                      case L:
                        C = a.child.stateNode;
                        break;
                    }
                  AS(a, y, C);
                }
                break;
              }
              case X: {
                var E = a.stateNode;
                if (t === null && a.flags & Xe) {
                  var M = a.type,
                    _ = a.memoizedProps;
                  Gb(E, M, _);
                }
                break;
              }
              case le:
                break;
              case W:
                break;
              case et: {
                {
                  var B = a.memoizedProps,
                    V = B.onCommit,
                    I = B.onRender,
                    he = a.stateNode.effectDuration,
                    _e = bx(),
                    Te = t === null ? "mount" : "update";
                  Ex() && (Te = "nested-update"),
                    typeof I == "function" &&
                      I(
                        a.memoizedProps.id,
                        Te,
                        a.actualDuration,
                        a.treeBaseDuration,
                        a.actualStartTime,
                        _e
                      );
                  {
                    typeof V == "function" && V(a.memoizedProps.id, Te, he, _e),
                      Tk(a);
                    var st = a.return;
                    e: for (; st !== null; ) {
                      switch (st.tag) {
                        case U:
                          var it = st.stateNode;
                          it.effectDuration += he;
                          break e;
                        case et:
                          var F = st.stateNode;
                          F.effectDuration += he;
                          break e;
                      }
                      st = st.return;
                    }
                  }
                }
                break;
              }
              case Fe: {
                AR(e, a);
                break;
              }
              case xt:
              case pn:
              case Dt:
              case Qe:
              case lt:
              case jt:
                break;
              default:
                throw new Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                );
            }
          vr || (a.flags & br && nC(a));
        }
        function NR(e) {
          switch (e.tag) {
            case j:
            case Ne:
            case $e: {
              if (e.mode & je)
                try {
                  gl(), Jx(e, e.return);
                } finally {
                  hl(e);
                }
              else Jx(e, e.return);
              break;
            }
            case L: {
              var t = e.stateNode;
              typeof t.componentDidMount == "function" && ER(e, e.return, t),
                eC(e, e.return);
              break;
            }
            case X: {
              eC(e, e.return);
              break;
            }
          }
        }
        function _R(e, t) {
          for (var a = null, i = e; ; ) {
            if (i.tag === X) {
              if (a === null) {
                a = i;
                try {
                  var o = i.stateNode;
                  t ? rw(o) : iw(i.stateNode, i.memoizedProps);
                } catch (d) {
                  Ht(e, e.return, d);
                }
              }
            } else if (i.tag === le) {
              if (a === null)
                try {
                  var s = i.stateNode;
                  t ? aw(s) : lw(s, i.memoizedProps);
                } catch (d) {
                  Ht(e, e.return, d);
                }
            } else if (
              !(
                (i.tag === Qe || i.tag === lt) &&
                i.memoizedState !== null &&
                i !== e
              )
            ) {
              if (i.child !== null) {
                (i.child.return = i), (i = i.child);
                continue;
              }
            }
            if (i === e) return;
            for (; i.sibling === null; ) {
              if (i.return === null || i.return === e) return;
              a === i && (a = null), (i = i.return);
            }
            a === i && (a = null),
              (i.sibling.return = i.return),
              (i = i.sibling);
          }
        }
        function nC(e) {
          var t = e.ref;
          if (t !== null) {
            var a = e.stateNode,
              i;
            switch (e.tag) {
              case X:
                i = a;
                break;
              default:
                i = a;
            }
            if (typeof t == "function") {
              var o;
              if (e.mode & je)
                try {
                  gl(), (o = t(i));
                } finally {
                  hl(e);
                }
              else o = t(i);
              typeof o == "function" &&
                S(
                  "Unexpected return value from a callback ref in %s. A callback ref should not return a function.",
                  We2(e)
                );
            } else
              t.hasOwnProperty("current") ||
                S(
                  "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
                  We2(e)
                ),
                (t.current = i);
          }
        }
        function zR(e) {
          var t = e.alternate;
          t !== null && (t.return = null), (e.return = null);
        }
        function rC(e) {
          var t = e.alternate;
          t !== null && ((e.alternate = null), rC(t));
          {
            if (
              ((e.child = null),
              (e.deletions = null),
              (e.sibling = null),
              e.tag === X)
            ) {
              var a = e.stateNode;
              a !== null && Fw(a);
            }
            (e.stateNode = null),
              (e._debugOwner = null),
              (e.return = null),
              (e.dependencies = null),
              (e.memoizedProps = null),
              (e.memoizedState = null),
              (e.pendingProps = null),
              (e.stateNode = null),
              (e.updateQueue = null);
          }
        }
        function MR(e) {
          for (var t = e.return; t !== null; ) {
            if (aC(t)) return t;
            t = t.return;
          }
          throw new Error(
            "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
          );
        }
        function aC(e) {
          return e.tag === X || e.tag === U || e.tag === W;
        }
        function iC(e) {
          var t = e;
          e: for (;;) {
            for (; t.sibling === null; ) {
              if (t.return === null || aC(t.return)) return null;
              t = t.return;
            }
            for (
              t.sibling.return = t.return, t = t.sibling;
              t.tag !== X && t.tag !== le && t.tag !== Bt;

            ) {
              if (t.flags & At || t.child === null || t.tag === W) continue e;
              (t.child.return = t), (t = t.child);
            }
            if (!(t.flags & At)) return t.stateNode;
          }
        }
        function LR(e) {
          var t = MR(e);
          switch (t.tag) {
            case X: {
              var a = t.stateNode;
              t.flags & Ct && (lS(a), (t.flags &= ~Ct));
              var i = iC(e);
              V0(e, i, a);
              break;
            }
            case U:
            case W: {
              var o = t.stateNode.containerInfo,
                s = iC(e);
              B0(e, s, o);
              break;
            }
            default:
              throw new Error(
                "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
              );
          }
        }
        function B0(e, t, a) {
          var i = e.tag,
            o = i === X || i === le;
          if (o) {
            var s = e.stateNode;
            t ? Jb(a, s, t) : Kb(a, s);
          } else if (i !== W) {
            var d = e.child;
            if (d !== null) {
              B0(d, t, a);
              for (var g = d.sibling; g !== null; )
                B0(g, t, a), (g = g.sibling);
            }
          }
        }
        function V0(e, t, a) {
          var i = e.tag,
            o = i === X || i === le;
          if (o) {
            var s = e.stateNode;
            t ? Zb(a, s, t) : qb(a, s);
          } else if (i !== W) {
            var d = e.child;
            if (d !== null) {
              V0(d, t, a);
              for (var g = d.sibling; g !== null; )
                V0(g, t, a), (g = g.sibling);
            }
          }
        }
        var hr = null,
          Mi = false;
        function OR(e, t, a) {
          {
            var i = t;
            e: for (; i !== null; ) {
              switch (i.tag) {
                case X: {
                  (hr = i.stateNode), (Mi = false);
                  break e;
                }
                case U: {
                  (hr = i.stateNode.containerInfo), (Mi = true);
                  break e;
                }
                case W: {
                  (hr = i.stateNode.containerInfo), (Mi = true);
                  break e;
                }
              }
              i = i.return;
            }
            if (hr === null)
              throw new Error(
                "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
              );
            lC(e, t, a), (hr = null), (Mi = false);
          }
          zR(a);
        }
        function cu(e, t, a) {
          for (var i = a.child; i !== null; ) lC(e, t, i), (i = i.sibling);
        }
        function lC(e, t, a) {
          switch ((sd(a), a.tag)) {
            case X:
              vr || vf(a, t);
            case le: {
              {
                var i = hr,
                  o = Mi;
                (hr = null),
                  cu(e, t, a),
                  (hr = i),
                  (Mi = o),
                  hr !== null &&
                    (Mi ? tw(hr, a.stateNode) : ew(hr, a.stateNode));
              }
              return;
            }
            case Bt: {
              hr !== null && (Mi ? nw(hr, a.stateNode) : Jy(hr, a.stateNode));
              return;
            }
            case W: {
              {
                var s = hr,
                  d = Mi;
                (hr = a.stateNode.containerInfo),
                  (Mi = true),
                  cu(e, t, a),
                  (hr = s),
                  (Mi = d);
              }
              return;
            }
            case j:
            case Ne:
            case Ie:
            case $e: {
              if (!vr) {
                var g = a.updateQueue;
                if (g !== null) {
                  var y = g.lastEffect;
                  if (y !== null) {
                    var C = y.next,
                      E = C;
                    do {
                      var M = E,
                        _ = M.destroy,
                        B = M.tag;
                      _ !== void 0 &&
                        ((B & dl) !== Sa
                          ? wg(a, t, _)
                          : (B & Bn) !== Sa &&
                            (rc(a),
                            a.mode & je
                              ? (gl(), wg(a, t, _), hl(a))
                              : wg(a, t, _),
                            _o())),
                        (E = E.next);
                    } while (E !== C);
                  }
                }
              }
              cu(e, t, a);
              return;
            }
            case L: {
              if (!vr) {
                vf(a, t);
                var V = a.stateNode;
                typeof V.componentWillUnmount == "function" && H0(a, t, V);
              }
              cu(e, t, a);
              return;
            }
            case Dt: {
              cu(e, t, a);
              return;
            }
            case Qe: {
              if (
                // TODO: Remove this dead flag
                a.mode & nt
              ) {
                var I = vr;
                (vr = I || a.memoizedState !== null), cu(e, t, a), (vr = I);
              } else cu(e, t, a);
              break;
            }
            default: {
              cu(e, t, a);
              return;
            }
          }
        }
        function jR(e) {
          e.memoizedState;
        }
        function AR(e, t) {
          var a = t.memoizedState;
          if (a === null) {
            var i = t.alternate;
            if (i !== null) {
              var o = i.memoizedState;
              if (o !== null) {
                var s = o.dehydrated;
                s !== null && Cw(s);
              }
            }
          }
        }
        function oC(e) {
          var t = e.updateQueue;
          if (t !== null) {
            e.updateQueue = null;
            var a = e.stateNode;
            a === null && (a = e.stateNode = new SR()),
              t.forEach(function (i) {
                var o = Mk.bind(null, e, i);
                if (!a.has(i)) {
                  if ((a.add(i), Fn))
                    if (df !== null && pf !== null) Lp(pf, df);
                    else
                      throw Error(
                        "Expected finished root and lanes to be set. This is a bug in React."
                      );
                  i.then(o, o);
                }
              });
          }
        }
        function UR(e, t, a) {
          (df = a), (pf = e), Tt(t), uC(t, e), Tt(t), (df = null), (pf = null);
        }
        function Li(e, t, a) {
          var i = t.deletions;
          if (i !== null)
            for (var o = 0; o < i.length; o++) {
              var s = i[o];
              try {
                OR(e, t, s);
              } catch (y) {
                Ht(s, t, y);
              }
            }
          var d = Zg();
          if (t.subtreeFlags & Rr)
            for (var g = t.child; g !== null; )
              Tt(g), uC(g, e), (g = g.sibling);
          Tt(d);
        }
        function uC(e, t, a) {
          var i = e.alternate,
            o = e.flags;
          switch (e.tag) {
            case j:
            case Ne:
            case Ie:
            case $e: {
              if ((Li(t, e), yl(e), o & Xe)) {
                try {
                  zi(dl | Hn, e, e.return), su(dl | Hn, e);
                } catch (He) {
                  Ht(e, e.return, He);
                }
                if (e.mode & je) {
                  try {
                    gl(), zi(Bn | Hn, e, e.return);
                  } catch (He) {
                    Ht(e, e.return, He);
                  }
                  hl(e);
                } else
                  try {
                    zi(Bn | Hn, e, e.return);
                  } catch (He) {
                    Ht(e, e.return, He);
                  }
              }
              return;
            }
            case L: {
              Li(t, e), yl(e), o & br && i !== null && vf(i, i.return);
              return;
            }
            case X: {
              Li(t, e), yl(e), o & br && i !== null && vf(i, i.return);
              {
                if (e.flags & Ct) {
                  var s = e.stateNode;
                  try {
                    lS(s);
                  } catch (He) {
                    Ht(e, e.return, He);
                  }
                }
                if (o & Xe) {
                  var d = e.stateNode;
                  if (d != null) {
                    var g = e.memoizedProps,
                      y = i !== null ? i.memoizedProps : g,
                      C = e.type,
                      E = e.updateQueue;
                    if (((e.updateQueue = null), E !== null))
                      try {
                        Wb(d, E, C, y, g, e);
                      } catch (He) {
                        Ht(e, e.return, He);
                      }
                  }
                }
              }
              return;
            }
            case le: {
              if ((Li(t, e), yl(e), o & Xe)) {
                if (e.stateNode === null)
                  throw new Error(
                    "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
                  );
                var M = e.stateNode,
                  _ = e.memoizedProps,
                  B = i !== null ? i.memoizedProps : _;
                try {
                  Xb(M, B, _);
                } catch (He) {
                  Ht(e, e.return, He);
                }
              }
              return;
            }
            case U: {
              if ((Li(t, e), yl(e), o & Xe && i !== null)) {
                var V = i.memoizedState;
                if (V.isDehydrated)
                  try {
                    xw(t.containerInfo);
                  } catch (He) {
                    Ht(e, e.return, He);
                  }
              }
              return;
            }
            case W: {
              Li(t, e), yl(e);
              return;
            }
            case Fe: {
              Li(t, e), yl(e);
              var I = e.child;
              if (I.flags & Wi) {
                var he = I.stateNode,
                  _e = I.memoizedState,
                  Te = _e !== null;
                if (((he.isHidden = Te), Te)) {
                  var st =
                    I.alternate !== null && I.alternate.memoizedState !== null;
                  st || yk();
                }
              }
              if (o & Xe) {
                try {
                  jR(e);
                } catch (He) {
                  Ht(e, e.return, He);
                }
                oC(e);
              }
              return;
            }
            case Qe: {
              var it = i !== null && i.memoizedState !== null;
              if (
                // TODO: Remove this dead flag
                e.mode & nt
              ) {
                var F = vr;
                (vr = F || it), Li(t, e), (vr = F);
              } else Li(t, e);
              if ((yl(e), o & Wi)) {
                var Q = e.stateNode,
                  $ = e.memoizedState,
                  re = $ !== null,
                  ge = e;
                if (((Q.isHidden = re), re && !it && (ge.mode & nt) !== Le)) {
                  xe = ge;
                  for (var fe = ge.child; fe !== null; )
                    (xe = fe), $R(fe), (fe = fe.sibling);
                }
                _R(ge, re);
              }
              return;
            }
            case xt: {
              Li(t, e), yl(e), o & Xe && oC(e);
              return;
            }
            case Dt:
              return;
            default: {
              Li(t, e), yl(e);
              return;
            }
          }
        }
        function yl(e) {
          var t = e.flags;
          if (t & At) {
            try {
              LR(e);
            } catch (a) {
              Ht(e, e.return, a);
            }
            e.flags &= ~At;
          }
          t & ua && (e.flags &= ~ua);
        }
        function FR(e, t, a) {
          (df = a), (pf = t), (xe = e), sC(e, t, a), (df = null), (pf = null);
        }
        function sC(e, t, a) {
          for (var i = (e.mode & nt) !== Le; xe !== null; ) {
            var o = xe,
              s = o.child;
            if (o.tag === Qe && i) {
              var d = o.memoizedState !== null,
                g = d || bg;
              if (g) {
                P0(e, t, a);
                continue;
              } else {
                var y = o.alternate,
                  C = y !== null && y.memoizedState !== null,
                  E = C || vr,
                  M = bg,
                  _ = vr;
                (bg = g), (vr = E), vr && !_ && ((xe = o), HR(o));
                for (var B = s; B !== null; )
                  (xe = B),
                    sC(
                      B,
                      // New root; bubble back up to here and stop.
                      t,
                      a
                    ),
                    (B = B.sibling);
                (xe = o), (bg = M), (vr = _), P0(e, t, a);
                continue;
              }
            }
            (o.subtreeFlags & Jn) !== De && s !== null
              ? ((s.return = o), (xe = s))
              : P0(e, t, a);
          }
        }
        function P0(e, t, a) {
          for (; xe !== null; ) {
            var i = xe;
            if ((i.flags & Jn) !== De) {
              var o = i.alternate;
              Tt(i);
              try {
                DR(t, o, i, a);
              } catch (d) {
                Ht(i, i.return, d);
              }
              hn();
            }
            if (i === e) {
              xe = null;
              return;
            }
            var s = i.sibling;
            if (s !== null) {
              (s.return = i.return), (xe = s);
              return;
            }
            xe = i.return;
          }
        }
        function $R(e) {
          for (; xe !== null; ) {
            var t = xe,
              a = t.child;
            switch (t.tag) {
              case j:
              case Ne:
              case Ie:
              case $e: {
                if (t.mode & je)
                  try {
                    gl(), zi(Bn, t, t.return);
                  } finally {
                    hl(t);
                  }
                else zi(Bn, t, t.return);
                break;
              }
              case L: {
                vf(t, t.return);
                var i = t.stateNode;
                typeof i.componentWillUnmount == "function" &&
                  H0(t, t.return, i);
                break;
              }
              case X: {
                vf(t, t.return);
                break;
              }
              case Qe: {
                var o = t.memoizedState !== null;
                if (o) {
                  cC(e);
                  continue;
                }
                break;
              }
            }
            a !== null ? ((a.return = t), (xe = a)) : cC(e);
          }
        }
        function cC(e) {
          for (; xe !== null; ) {
            var t = xe;
            if (t === e) {
              xe = null;
              return;
            }
            var a = t.sibling;
            if (a !== null) {
              (a.return = t.return), (xe = a);
              return;
            }
            xe = t.return;
          }
        }
        function HR(e) {
          for (; xe !== null; ) {
            var t = xe,
              a = t.child;
            if (t.tag === Qe) {
              var i = t.memoizedState !== null;
              if (i) {
                fC(e);
                continue;
              }
            }
            a !== null ? ((a.return = t), (xe = a)) : fC(e);
          }
        }
        function fC(e) {
          for (; xe !== null; ) {
            var t = xe;
            Tt(t);
            try {
              NR(t);
            } catch (i) {
              Ht(t, t.return, i);
            }
            if ((hn(), t === e)) {
              xe = null;
              return;
            }
            var a = t.sibling;
            if (a !== null) {
              (a.return = t.return), (xe = a);
              return;
            }
            xe = t.return;
          }
        }
        function BR(e, t, a, i) {
          (xe = t), VR(t, e, a, i);
        }
        function VR(e, t, a, i) {
          for (; xe !== null; ) {
            var o = xe,
              s = o.child;
            (o.subtreeFlags & sa) !== De && s !== null
              ? ((s.return = o), (xe = s))
              : PR(e, t, a, i);
          }
        }
        function PR(e, t, a, i) {
          for (; xe !== null; ) {
            var o = xe;
            if ((o.flags & Yt) !== De) {
              Tt(o);
              try {
                YR(t, o, a, i);
              } catch (d) {
                Ht(o, o.return, d);
              }
              hn();
            }
            if (o === e) {
              xe = null;
              return;
            }
            var s = o.sibling;
            if (s !== null) {
              (s.return = o.return), (xe = s);
              return;
            }
            xe = o.return;
          }
        }
        function YR(e, t, a, i) {
          switch (t.tag) {
            case j:
            case Ne:
            case $e: {
              if (t.mode & je) {
                x0();
                try {
                  su(dr | Hn, t);
                } finally {
                  S0(t);
                }
              } else su(dr | Hn, t);
              break;
            }
          }
        }
        function IR(e) {
          (xe = e), QR();
        }
        function QR() {
          for (; xe !== null; ) {
            var e = xe,
              t = e.child;
            if ((xe.flags & St) !== De) {
              var a = e.deletions;
              if (a !== null) {
                for (var i = 0; i < a.length; i++) {
                  var o = a[i];
                  (xe = o), XR(o, e);
                }
                {
                  var s = e.alternate;
                  if (s !== null) {
                    var d = s.child;
                    if (d !== null) {
                      s.child = null;
                      do {
                        var g = d.sibling;
                        (d.sibling = null), (d = g);
                      } while (d !== null);
                    }
                  }
                }
                xe = e;
              }
            }
            (e.subtreeFlags & sa) !== De && t !== null
              ? ((t.return = e), (xe = t))
              : GR();
          }
        }
        function GR() {
          for (; xe !== null; ) {
            var e = xe;
            (e.flags & Yt) !== De && (Tt(e), WR(e), hn());
            var t = e.sibling;
            if (t !== null) {
              (t.return = e.return), (xe = t);
              return;
            }
            xe = e.return;
          }
        }
        function WR(e) {
          switch (e.tag) {
            case j:
            case Ne:
            case $e: {
              e.mode & je
                ? (x0(), zi(dr | Hn, e, e.return), S0(e))
                : zi(dr | Hn, e, e.return);
              break;
            }
          }
        }
        function XR(e, t) {
          for (; xe !== null; ) {
            var a = xe;
            Tt(a), KR(a, t), hn();
            var i = a.child;
            i !== null ? ((i.return = a), (xe = i)) : qR(e);
          }
        }
        function qR(e) {
          for (; xe !== null; ) {
            var t = xe,
              a = t.sibling,
              i = t.return;
            if ((rC(t), t === e)) {
              xe = null;
              return;
            }
            if (a !== null) {
              (a.return = i), (xe = a);
              return;
            }
            xe = i;
          }
        }
        function KR(e, t) {
          switch (e.tag) {
            case j:
            case Ne:
            case $e: {
              e.mode & je ? (x0(), zi(dr, e, t), S0(e)) : zi(dr, e, t);
              break;
            }
          }
        }
        function ZR(e) {
          switch (e.tag) {
            case j:
            case Ne:
            case $e: {
              try {
                su(Bn | Hn, e);
              } catch (a) {
                Ht(e, e.return, a);
              }
              break;
            }
            case L: {
              var t = e.stateNode;
              try {
                t.componentDidMount();
              } catch (a) {
                Ht(e, e.return, a);
              }
              break;
            }
          }
        }
        function JR(e) {
          switch (e.tag) {
            case j:
            case Ne:
            case $e: {
              try {
                su(dr | Hn, e);
              } catch (t) {
                Ht(e, e.return, t);
              }
              break;
            }
          }
        }
        function ek(e) {
          switch (e.tag) {
            case j:
            case Ne:
            case $e: {
              try {
                zi(Bn | Hn, e, e.return);
              } catch (a) {
                Ht(e, e.return, a);
              }
              break;
            }
            case L: {
              var t = e.stateNode;
              typeof t.componentWillUnmount == "function" && H0(e, e.return, t);
              break;
            }
          }
        }
        function tk(e) {
          switch (e.tag) {
            case j:
            case Ne:
            case $e:
              try {
                zi(dr | Hn, e, e.return);
              } catch (t) {
                Ht(e, e.return, t);
              }
          }
        }
        if (typeof Symbol == "function" && Symbol.for) {
          var Ep = Symbol.for;
          Ep("selector.component"),
            Ep("selector.has_pseudo_class"),
            Ep("selector.role"),
            Ep("selector.test_id"),
            Ep("selector.text");
        }
        var nk = [];
        function rk() {
          nk.forEach(function (e) {
            return e();
          });
        }
        var ak = p.ReactCurrentActQueue;
        function ik(e) {
          {
            var t =
                // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
                typeof IS_REACT_ACT_ENVIRONMENT < "u"
                  ? IS_REACT_ACT_ENVIRONMENT
                  : void 0,
              a = typeof jest < "u";
            return a && t !== false;
          }
        }
        function dC() {
          {
            var e =
              // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
              typeof IS_REACT_ACT_ENVIRONMENT < "u"
                ? IS_REACT_ACT_ENVIRONMENT
                : void 0;
            return (
              !e &&
                ak.current !== null &&
                S(
                  "The current testing environment is not configured to support act(...)"
                ),
              e
            );
          }
        }
        var lk = Math.ceil,
          Y0 = p.ReactCurrentDispatcher,
          I0 = p.ReactCurrentOwner,
          gr = p.ReactCurrentBatchConfig,
          Oi = p.ReactCurrentActQueue,
          Yn =
            /*             */
            0,
          pC =
            /*               */
            1,
          yr =
            /*                */
            2,
          ai =
            /*                */
            4,
          oo = 0,
          bp = 1,
          xs = 2,
          Tg = 3,
          wp = 4,
          vC = 5,
          Q0 = 6,
          ut = Yn,
          Xr = null,
          an = null,
          In = G,
          ml = G,
          G0 = eu(G),
          Qn = oo,
          Tp = null,
          Rg = G,
          Rp = G,
          kg = G,
          kp = null,
          xa = null,
          W0 = 0,
          hC = 500,
          gC = 1 / 0,
          ok = 500,
          uo = null;
        function Dp() {
          gC = Gt() + ok;
        }
        function yC() {
          return gC;
        }
        var Dg = false,
          X0 = null,
          hf = null,
          Cs = false,
          fu = null,
          Np = G,
          q0 = [],
          K0 = null,
          uk = 50,
          _p = 0,
          Z0 = null,
          J0 = false,
          Ng = false,
          sk = 50,
          gf = 0,
          _g = null,
          zp = Mt,
          zg = G,
          mC = false;
        function Mg() {
          return Xr;
        }
        function qr() {
          return (ut & (yr | ai)) !== Yn
            ? Gt()
            : (zp !== Mt || (zp = Gt()), zp);
        }
        function du(e) {
          var t = e.mode;
          if ((t & nt) === Le) return Ae2;
          if ((ut & yr) !== Yn && In !== G) return yn(In);
          var a = iT() !== aT;
          if (a) {
            if (gr.transition !== null) {
              var i = gr.transition;
              i._updatedFibers ||
                (i._updatedFibers = /* @__PURE__ */ new Set()),
                i._updatedFibers.add(e);
            }
            return zg === ot && (zg = yd()), zg;
          }
          var o = pa();
          if (o !== ot) return o;
          var s = Pb();
          return s;
        }
        function ck(e) {
          var t = e.mode;
          return (t & nt) === Le ? Ae2 : xy();
        }
        function Gn(e, t, a, i) {
          Ok(),
            mC && S("useInsertionEffect must not schedule updates."),
            J0 && (Ng = true),
            Yl(e, a, i),
            (ut & yr) !== G && e === Xr
              ? Uk(t)
              : (Fn && Ed(e, t, a),
                Fk(t),
                e === Xr &&
                  ((ut & yr) === Yn && (Rp = qe(Rp, a)),
                  Qn === wp && pu(e, In)),
                Ca(e, i),
                a === Ae2 &&
                  ut === Yn &&
                  (t.mode & nt) === Le && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
                  !Oi.isBatchingLegacy &&
                  (Dp(), yS()));
        }
        function fk(e, t, a) {
          var i = e.current;
          (i.lanes = t), Yl(e, t, a), Ca(e, a);
        }
        function dk(e) {
          return (
            // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
            // decided not to enable it.
            (ut & yr) !== Yn
          );
        }
        function Ca(e, t) {
          var a = e.callbackNode;
          yy(e, t);
          var i = Qu(e, e === Xr ? In : G);
          if (i === G) {
            a !== null && OC(a),
              (e.callbackNode = null),
              (e.callbackPriority = ot);
            return;
          }
          var o = sn(i),
            s = e.callbackPriority;
          if (
            s === o && // Special case related to `act`. If the currently scheduled task is a
            // Scheduler task, rather than an `act` task, cancel it and re-scheduled
            // on the `act` queue.
            !(Oi.current !== null && a !== l1)
          ) {
            a == null &&
              s !== Ae2 &&
              S(
                "Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue."
              );
            return;
          }
          a != null && OC(a);
          var d;
          if (o === Ae2)
            e.tag === tu
              ? (Oi.isBatchingLegacy !== null &&
                  (Oi.didScheduleLegacyUpdate = true),
                Bw(CC.bind(null, e)))
              : gS(CC.bind(null, e)),
              Oi.current !== null
                ? Oi.current.push(nu)
                : Ib(function () {
                    (ut & (yr | ai)) === Yn && nu();
                  }),
              (d = null);
          else {
            var g;
            switch (Ku(i)) {
              case er:
                g = Js;
                break;
              case $n:
                g = Ir;
                break;
              case Si:
                g = Wa;
                break;
              case Xu:
                g = qi;
                break;
              default:
                g = Wa;
                break;
            }
            d = o1(g, SC.bind(null, e));
          }
          (e.callbackPriority = o), (e.callbackNode = d);
        }
        function SC(e, t) {
          if ((OT(), (zp = Mt), (zg = G), (ut & (yr | ai)) !== Yn))
            throw new Error("Should not already be working.");
          var a = e.callbackNode,
            i = co();
          if (i && e.callbackNode !== a) return null;
          var o = Qu(e, e === Xr ? In : G);
          if (o === G) return null;
          var s = !Wu(e, o) && !Yv(e, o) && !t,
            d = s ? Ek(e, o) : Og(e, o);
          if (d !== oo) {
            if (d === xs) {
              var g = hd(e);
              g !== G && ((o = g), (d = e1(e, g)));
            }
            if (d === bp) {
              var y = Tp;
              throw (Es(e, G), pu(e, o), Ca(e, Gt()), y);
            }
            if (d === Q0) pu(e, o);
            else {
              var C = !Wu(e, o),
                E = e.current.alternate;
              if (C && !vk(E)) {
                if (((d = Og(e, o)), d === xs)) {
                  var M = hd(e);
                  M !== G && ((o = M), (d = e1(e, M)));
                }
                if (d === bp) {
                  var _ = Tp;
                  throw (Es(e, G), pu(e, o), Ca(e, Gt()), _);
                }
              }
              (e.finishedWork = E), (e.finishedLanes = o), pk(e, d, o);
            }
          }
          return Ca(e, Gt()), e.callbackNode === a ? SC.bind(null, e) : null;
        }
        function e1(e, t) {
          var a = kp;
          if (Sn(e)) {
            var i = Es(e, t);
            (i.flags |= Kt), Ow(e.containerInfo);
          }
          var o = Og(e, t);
          if (o !== xs) {
            var s = xa;
            (xa = a), s !== null && xC(s);
          }
          return o;
        }
        function xC(e) {
          xa === null ? (xa = e) : xa.push.apply(xa, e);
        }
        function pk(e, t, a) {
          switch (t) {
            case oo:
            case bp:
              throw new Error("Root did not complete. This is a bug in React.");
            case xs: {
              bs(e, xa, uo);
              break;
            }
            case Tg: {
              if (
                (pu(e, a),
                bc(a) && // do not delay if we're inside an act() scope
                  !jC())
              ) {
                var i = W0 + hC - Gt();
                if (i > 10) {
                  var o = Qu(e, G);
                  if (o !== G) break;
                  var s = e.suspendedLanes;
                  if (!Pl(s, a)) {
                    qr(), xd(e, s);
                    break;
                  }
                  e.timeoutHandle = Ky(bs.bind(null, e, xa, uo), i);
                  break;
                }
              }
              bs(e, xa, uo);
              break;
            }
            case wp: {
              if ((pu(e, a), Pv(a))) break;
              if (!jC()) {
                var d = Vv(e, a),
                  g = d,
                  y = Gt() - g,
                  C = Lk(y) - y;
                if (C > 10) {
                  e.timeoutHandle = Ky(bs.bind(null, e, xa, uo), C);
                  break;
                }
              }
              bs(e, xa, uo);
              break;
            }
            case vC: {
              bs(e, xa, uo);
              break;
            }
            default:
              throw new Error("Unknown root exit status.");
          }
        }
        function vk(e) {
          for (var t = e; ; ) {
            if (t.flags & $u) {
              var a = t.updateQueue;
              if (a !== null) {
                var i = a.stores;
                if (i !== null)
                  for (var o = 0; o < i.length; o++) {
                    var s = i[o],
                      d = s.getSnapshot,
                      g = s.value;
                    try {
                      if (!Se(d(), g)) return false;
                    } catch {
                      return false;
                    }
                  }
              }
            }
            var y = t.child;
            if (t.subtreeFlags & $u && y !== null) {
              (y.return = t), (t = y);
              continue;
            }
            if (t === e) return true;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) return true;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return true;
        }
        function pu(e, t) {
          (t = Uo(t, kg)), (t = Uo(t, Rp)), Sd(e, t);
        }
        function CC(e) {
          if ((jT(), (ut & (yr | ai)) !== Yn))
            throw new Error("Should not already be working.");
          co();
          var t = Qu(e, G);
          if (!_r(t, Ae2)) return Ca(e, Gt()), null;
          var a = Og(e, t);
          if (e.tag !== tu && a === xs) {
            var i = hd(e);
            i !== G && ((t = i), (a = e1(e, i)));
          }
          if (a === bp) {
            var o = Tp;
            throw (Es(e, G), pu(e, t), Ca(e, Gt()), o);
          }
          if (a === Q0)
            throw new Error("Root did not complete. This is a bug in React.");
          var s = e.current.alternate;
          return (
            (e.finishedWork = s),
            (e.finishedLanes = t),
            bs(e, xa, uo),
            Ca(e, Gt()),
            null
          );
        }
        function hk(e, t) {
          t !== G &&
            (Fo(e, qe(t, Ae2)),
            Ca(e, Gt()),
            (ut & (yr | ai)) === Yn && (Dp(), nu()));
        }
        function t1(e, t) {
          var a = ut;
          ut |= pC;
          try {
            return e(t);
          } finally {
            (ut = a),
              ut === Yn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
                !Oi.isBatchingLegacy &&
                (Dp(), yS());
          }
        }
        function gk(e, t, a, i, o) {
          var s = pa(),
            d = gr.transition;
          try {
            return (gr.transition = null), mn(er), e(t, a, i, o);
          } finally {
            mn(s), (gr.transition = d), ut === Yn && Dp();
          }
        }
        function so(e) {
          fu !== null && fu.tag === tu && (ut & (yr | ai)) === Yn && co();
          var t = ut;
          ut |= pC;
          var a = gr.transition,
            i = pa();
          try {
            return (gr.transition = null), mn(er), e ? e() : void 0;
          } finally {
            mn(i),
              (gr.transition = a),
              (ut = t),
              (ut & (yr | ai)) === Yn && nu();
          }
        }
        function EC() {
          return (ut & (yr | ai)) !== Yn;
        }
        function Lg(e, t) {
          Mr(G0, ml, e), (ml = qe(ml, t));
        }
        function n1(e) {
          (ml = G0.current), zr(G0, e);
        }
        function Es(e, t) {
          (e.finishedWork = null), (e.finishedLanes = G);
          var a = e.timeoutHandle;
          if ((a !== Zy && ((e.timeoutHandle = Zy), Yb(a)), an !== null))
            for (var i = an.return; i !== null; ) {
              var o = i.alternate;
              Kx(o, i), (i = i.return);
            }
          Xr = e;
          var s = ws(e.current, null);
          return (
            (an = s),
            (In = ml = t),
            (Qn = oo),
            (Tp = null),
            (Rg = G),
            (Rp = G),
            (kg = G),
            (kp = null),
            (xa = null),
            sT(),
            Ri.discardPendingWarnings(),
            s
          );
        }
        function bC(e, t) {
          do {
            var a = an;
            try {
              if (
                (Bh(),
                JS(),
                hn(),
                (I0.current = null),
                a === null || a.return === null)
              ) {
                (Qn = bp), (Tp = t), (an = null);
                return;
              }
              if ((vn && a.mode & je && Sg(a, true), Ba))
                if (
                  (Ol(),
                  t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function")
                ) {
                  var i = t;
                  $v(a, i, In);
                } else ac(a, t, In);
              HT(e, a.return, a, t, In), kC(a);
            } catch (o) {
              (t = o),
                an === a && a !== null ? ((a = a.return), (an = a)) : (a = an);
              continue;
            }
            return;
          } while (true);
        }
        function wC() {
          var e = Y0.current;
          return (Y0.current = vg), e === null ? vg : e;
        }
        function TC(e) {
          Y0.current = e;
        }
        function yk() {
          W0 = Gt();
        }
        function Mp(e) {
          Rg = qe(e, Rg);
        }
        function mk() {
          Qn === oo && (Qn = Tg);
        }
        function r1() {
          (Qn === oo || Qn === Tg || Qn === xs) && (Qn = wp),
            Xr !== null && (Gu(Rg) || Gu(Rp)) && pu(Xr, In);
        }
        function Sk(e) {
          Qn !== wp && (Qn = xs), kp === null ? (kp = [e]) : kp.push(e);
        }
        function xk() {
          return Qn === oo;
        }
        function Og(e, t) {
          var a = ut;
          ut |= yr;
          var i = wC();
          if (Xr !== e || In !== t) {
            if (Fn) {
              var o = e.memoizedUpdaters;
              o.size > 0 && (Lp(e, In), o.clear()), Rc(e, t);
            }
            (uo = bd()), Es(e, t);
          }
          ja(t);
          do
            try {
              Ck();
              break;
            } catch (s) {
              bC(e, s);
            }
          while (true);
          if ((Bh(), (ut = a), TC(i), an !== null))
            throw new Error(
              "Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue."
            );
          return Mo(), (Xr = null), (In = G), Qn;
        }
        function Ck() {
          for (; an !== null; ) RC(an);
        }
        function Ek(e, t) {
          var a = ut;
          ut |= yr;
          var i = wC();
          if (Xr !== e || In !== t) {
            if (Fn) {
              var o = e.memoizedUpdaters;
              o.size > 0 && (Lp(e, In), o.clear()), Rc(e, t);
            }
            (uo = bd()), Dp(), Es(e, t);
          }
          ja(t);
          do
            try {
              bk();
              break;
            } catch (s) {
              bC(e, s);
            }
          while (true);
          return (
            Bh(),
            TC(i),
            (ut = a),
            an !== null ? (Vu(), oo) : (Mo(), (Xr = null), (In = G), Qn)
          );
        }
        function bk() {
          for (; an !== null && !Zs(); ) RC(an);
        }
        function RC(e) {
          var t = e.alternate;
          Tt(e);
          var a;
          (e.mode & je) !== Le
            ? (m0(e), (a = a1(t, e, ml)), Sg(e, true))
            : (a = a1(t, e, ml)),
            hn(),
            (e.memoizedProps = e.pendingProps),
            a === null ? kC(e) : (an = a),
            (I0.current = null);
        }
        function kC(e) {
          var t = e;
          do {
            var a = t.alternate,
              i = t.return;
            if ((t.flags & Vr) === De) {
              Tt(t);
              var o = void 0;
              if (
                ((t.mode & je) === Le
                  ? (o = qx(a, t, ml))
                  : (m0(t), (o = qx(a, t, ml)), Sg(t, false)),
                hn(),
                o !== null)
              ) {
                an = o;
                return;
              }
            } else {
              var s = mR(a, t);
              if (s !== null) {
                (s.flags &= _v), (an = s);
                return;
              }
              if ((t.mode & je) !== Le) {
                Sg(t, false);
                for (var d = t.actualDuration, g = t.child; g !== null; )
                  (d += g.actualDuration), (g = g.sibling);
                t.actualDuration = d;
              }
              if (i !== null)
                (i.flags |= Vr), (i.subtreeFlags = De), (i.deletions = null);
              else {
                (Qn = Q0), (an = null);
                return;
              }
            }
            var y = t.sibling;
            if (y !== null) {
              an = y;
              return;
            }
            (t = i), (an = t);
          } while (t !== null);
          Qn === oo && (Qn = vC);
        }
        function bs(e, t, a) {
          var i = pa(),
            o = gr.transition;
          try {
            (gr.transition = null), mn(er), wk(e, t, a, i);
          } finally {
            (gr.transition = o), mn(i);
          }
          return null;
        }
        function wk(e, t, a, i) {
          do co();
          while (fu !== null);
          if ((jk(), (ut & (yr | ai)) !== Yn))
            throw new Error("Should not already be working.");
          var o = e.finishedWork,
            s = e.finishedLanes;
          if ((tc(s), o === null)) return cd(), null;
          if (
            (s === G &&
              S(
                "root.finishedLanes should not be empty during a commit. This is a bug in React."
              ),
            (e.finishedWork = null),
            (e.finishedLanes = G),
            o === e.current)
          )
            throw new Error(
              "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
            );
          (e.callbackNode = null), (e.callbackPriority = ot);
          var d = qe(o.lanes, o.childLanes);
          Cd(e, d),
            e === Xr && ((Xr = null), (an = null), (In = G)),
            ((o.subtreeFlags & sa) !== De || (o.flags & sa) !== De) &&
              (Cs ||
                ((Cs = true),
                (K0 = a),
                o1(Wa, function () {
                  return co(), null;
                })));
          var g = (o.subtreeFlags & (No | Rr | Jn | sa)) !== De,
            y = (o.flags & (No | Rr | Jn | sa)) !== De;
          if (g || y) {
            var C = gr.transition;
            gr.transition = null;
            var E = pa();
            mn(er);
            var M = ut;
            (ut |= ai),
              (I0.current = null),
              bR(e, o),
              wx(),
              UR(e, o, s),
              Ub(e.containerInfo),
              (e.current = o),
              Hv(s),
              FR(o, e, s),
              zo(),
              Lv(),
              (ut = M),
              mn(E),
              (gr.transition = C);
          } else (e.current = o), wx();
          var _ = Cs;
          if (
            (Cs ? ((Cs = false), (fu = e), (Np = s)) : ((gf = 0), (_g = null)),
            (d = e.pendingLanes),
            d === G && (hf = null),
            _ || zC(e.current, false),
            gi(o.stateNode, i),
            Fn && e.memoizedUpdaters.clear(),
            rk(),
            Ca(e, Gt()),
            t !== null)
          )
            for (var B = e.onRecoverableError, V = 0; V < t.length; V++) {
              var I = t[V],
                he = I.stack,
                _e = I.digest;
              B(I.value, {
                componentStack: he,
                digest: _e,
              });
            }
          if (Dg) {
            Dg = false;
            var Te = X0;
            throw ((X0 = null), Te);
          }
          return (
            _r(Np, Ae2) && e.tag !== tu && co(),
            (d = e.pendingLanes),
            _r(d, Ae2)
              ? (LT(), e === Z0 ? _p++ : ((_p = 0), (Z0 = e)))
              : (_p = 0),
            nu(),
            cd(),
            null
          );
        }
        function co() {
          if (fu !== null) {
            var e = Ku(Np),
              t = Ey(Si, e),
              a = gr.transition,
              i = pa();
            try {
              return (gr.transition = null), mn(t), Rk();
            } finally {
              mn(i), (gr.transition = a);
            }
          }
          return false;
        }
        function Tk(e) {
          q0.push(e),
            Cs ||
              ((Cs = true),
              o1(Wa, function () {
                return co(), null;
              }));
        }
        function Rk() {
          if (fu === null) return false;
          var e = K0;
          K0 = null;
          var t = fu,
            a = Np;
          if (((fu = null), (Np = G), (ut & (yr | ai)) !== Yn))
            throw new Error(
              "Cannot flush passive effects while already rendering."
            );
          (J0 = true), (Ng = false), Bv(a);
          var i = ut;
          (ut |= ai), IR(t.current), BR(t, t.current, a, e);
          {
            var o = q0;
            q0 = [];
            for (var s = 0; s < o.length; s++) {
              var d = o[s];
              kR(t, d);
            }
          }
          Bu(),
            zC(t.current, true),
            (ut = i),
            nu(),
            Ng ? (t === _g ? gf++ : ((gf = 0), (_g = t))) : (gf = 0),
            (J0 = false),
            (Ng = false),
            Zi(t);
          {
            var g = t.current.stateNode;
            (g.effectDuration = 0), (g.passiveEffectDuration = 0);
          }
          return true;
        }
        function DC(e) {
          return hf !== null && hf.has(e);
        }
        function kk(e) {
          hf === null ? (hf = /* @__PURE__ */ new Set([e])) : hf.add(e);
        }
        function Dk(e) {
          Dg || ((Dg = true), (X0 = e));
        }
        var Nk = Dk;
        function NC(e, t, a) {
          var i = ms(a, t),
            o = Rx(e, i, Ae2),
            s = au(e, o, Ae2),
            d = qr();
          s !== null && (Yl(s, Ae2, d), Ca(s, d));
        }
        function Ht(e, t, a) {
          if ((xR(a), Op(false), e.tag === U)) {
            NC(e, e, a);
            return;
          }
          var i = null;
          for (i = t; i !== null; ) {
            if (i.tag === U) {
              NC(i, e, a);
              return;
            } else if (i.tag === L) {
              var o = i.type,
                s = i.stateNode;
              if (
                typeof o.getDerivedStateFromError == "function" ||
                (typeof s.componentDidCatch == "function" && !DC(s))
              ) {
                var d = ms(a, e),
                  g = w0(i, d, Ae2),
                  y = au(i, g, Ae2),
                  C = qr();
                y !== null && (Yl(y, Ae2, C), Ca(y, C));
                return;
              }
            }
            i = i.return;
          }
          S(
            `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
            a
          );
        }
        function _k(e, t, a) {
          var i = e.pingCache;
          i !== null && i.delete(t);
          var o = qr();
          xd(e, a),
            $k(e),
            Xr === e &&
              Pl(In, a) &&
              (Qn === wp || (Qn === Tg && bc(In) && Gt() - W0 < hC)
                ? Es(e, G)
                : (kg = qe(kg, a))),
            Ca(e, o);
        }
        function _C(e, t) {
          t === ot && (t = ck(e));
          var a = qr(),
            i = ma(e, t);
          i !== null && (Yl(i, t, a), Ca(i, a));
        }
        function zk(e) {
          var t = e.memoizedState,
            a = ot;
          t !== null && (a = t.retryLane), _C(e, a);
        }
        function Mk(e, t) {
          var a = ot,
            i;
          switch (e.tag) {
            case Fe:
              i = e.stateNode;
              var o = e.memoizedState;
              o !== null && (a = o.retryLane);
              break;
            case xt:
              i = e.stateNode;
              break;
            default:
              throw new Error(
                "Pinged unknown suspense boundary type. This is probably a bug in React."
              );
          }
          i !== null && i.delete(t), _C(e, a);
        }
        function Lk(e) {
          return e < 120
            ? 120
            : e < 480
            ? 480
            : e < 1080
            ? 1080
            : e < 1920
            ? 1920
            : e < 3e3
            ? 3e3
            : e < 4320
            ? 4320
            : lk(e / 1960) * 1960;
        }
        function Ok() {
          if (_p > uk)
            throw (
              ((_p = 0),
              (Z0 = null),
              new Error(
                "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
              ))
            );
          gf > sk &&
            ((gf = 0),
            (_g = null),
            S(
              "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
            ));
        }
        function jk() {
          Ri.flushLegacyContextWarning(),
            Ri.flushPendingUnsafeLifecycleWarnings();
        }
        function zC(e, t) {
          Tt(e),
            jg(e, Tr, ek),
            t && jg(e, Ll, tk),
            jg(e, Tr, ZR),
            t && jg(e, Ll, JR),
            hn();
        }
        function jg(e, t, a) {
          for (var i = e, o = null; i !== null; ) {
            var s = i.subtreeFlags & t;
            i !== o && i.child !== null && s !== De
              ? (i = i.child)
              : ((i.flags & t) !== De && a(i),
                i.sibling !== null ? (i = i.sibling) : (i = o = i.return));
          }
        }
        var Ag = null;
        function MC(e) {
          {
            if ((ut & yr) !== Yn || !(e.mode & nt)) return;
            var t = e.tag;
            if (
              t !== Y &&
              t !== U &&
              t !== L &&
              t !== j &&
              t !== Ne &&
              t !== Ie &&
              t !== $e
            )
              return;
            var a = We2(e) || "ReactComponent";
            if (Ag !== null) {
              if (Ag.has(a)) return;
              Ag.add(a);
            } else Ag = /* @__PURE__ */ new Set([a]);
            var i = on;
            try {
              Tt(e),
                S(
                  "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
                );
            } finally {
              i ? Tt(e) : hn();
            }
          }
        }
        var a1;
        {
          var Ak = null;
          a1 = function (e, t, a) {
            var i = HC(Ak, t);
            try {
              return Ix(e, t, a);
            } catch (s) {
              if (
                Xw() ||
                (s !== null &&
                  typeof s == "object" &&
                  typeof s.then == "function")
              )
                throw s;
              if (
                (Bh(),
                JS(),
                Kx(e, t),
                HC(t, i),
                t.mode & je && m0(t),
                Ml(null, Ix, null, e, t, a),
                hy())
              ) {
                var o = Jf();
                typeof o == "object" &&
                  o !== null &&
                  o._suppressLogging &&
                  typeof s == "object" &&
                  s !== null &&
                  !s._suppressLogging &&
                  (s._suppressLogging = true);
              }
              throw s;
            }
          };
        }
        var LC = false,
          i1;
        i1 = /* @__PURE__ */ new Set();
        function Uk(e) {
          if (ra && !_T())
            switch (e.tag) {
              case j:
              case Ne:
              case $e: {
                var t = (an && We2(an)) || "Unknown",
                  a = t;
                if (!i1.has(a)) {
                  i1.add(a);
                  var i = We2(e) || "Unknown";
                  S(
                    "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render",
                    i,
                    t,
                    t
                  );
                }
                break;
              }
              case L: {
                LC ||
                  (S(
                    "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
                  ),
                  (LC = true));
                break;
              }
            }
        }
        function Lp(e, t) {
          if (Fn) {
            var a = e.memoizedUpdaters;
            a.forEach(function (i) {
              Ed(e, i, t);
            });
          }
        }
        var l1 = {};
        function o1(e, t) {
          {
            var a = Oi.current;
            return a !== null ? (a.push(t), l1) : Ks(e, t);
          }
        }
        function OC(e) {
          if (e !== l1) return Mv(e);
        }
        function jC() {
          return Oi.current !== null;
        }
        function Fk(e) {
          {
            if (e.mode & nt) {
              if (!dC()) return;
            } else if (
              !ik() ||
              ut !== Yn ||
              (e.tag !== j && e.tag !== Ne && e.tag !== $e)
            )
              return;
            if (Oi.current === null) {
              var t = on;
              try {
                Tt(e),
                  S(
                    `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,
                    We2(e)
                  );
              } finally {
                t ? Tt(e) : hn();
              }
            }
          }
        }
        function $k(e) {
          e.tag !== tu &&
            dC() &&
            Oi.current === null &&
            S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
        }
        function Op(e) {
          mC = e;
        }
        var ii = null,
          yf = null,
          Hk = function (e) {
            ii = e;
          };
        function mf(e) {
          {
            if (ii === null) return e;
            var t = ii(e);
            return t === void 0 ? e : t.current;
          }
        }
        function u1(e) {
          return mf(e);
        }
        function s1(e) {
          {
            if (ii === null) return e;
            var t = ii(e);
            if (t === void 0) {
              if (e != null && typeof e.render == "function") {
                var a = mf(e.render);
                if (e.render !== a) {
                  var i = {
                    $$typeof: Me,
                    render: a,
                  };
                  return (
                    e.displayName !== void 0 && (i.displayName = e.displayName),
                    i
                  );
                }
              }
              return e;
            }
            return t.current;
          }
        }
        function AC(e, t) {
          {
            if (ii === null) return false;
            var a = e.elementType,
              i = t.type,
              o = false,
              s = typeof i == "object" && i !== null ? i.$$typeof : null;
            switch (e.tag) {
              case L: {
                typeof i == "function" && (o = true);
                break;
              }
              case j: {
                (typeof i == "function" || s === Oe) && (o = true);
                break;
              }
              case Ne: {
                (s === Me || s === Oe) && (o = true);
                break;
              }
              case Ie:
              case $e: {
                (s === Je || s === Oe) && (o = true);
                break;
              }
              default:
                return false;
            }
            if (o) {
              var d = ii(a);
              if (d !== void 0 && d === ii(i)) return true;
            }
            return false;
          }
        }
        function UC(e) {
          {
            if (ii === null || typeof WeakSet != "function") return;
            yf === null && (yf = /* @__PURE__ */ new WeakSet()), yf.add(e);
          }
        }
        var Bk = function (e, t) {
            {
              if (ii === null) return;
              var a = t.staleFamilies,
                i = t.updatedFamilies;
              co(),
                so(function () {
                  c1(e.current, i, a);
                });
            }
          },
          Vk = function (e, t) {
            {
              if (e.context !== Ua) return;
              co(),
                so(function () {
                  jp(t, e, null, null);
                });
            }
          };
        function c1(e, t, a) {
          {
            var i = e.alternate,
              o = e.child,
              s = e.sibling,
              d = e.tag,
              g = e.type,
              y = null;
            switch (d) {
              case j:
              case $e:
              case L:
                y = g;
                break;
              case Ne:
                y = g.render;
                break;
            }
            if (ii === null)
              throw new Error(
                "Expected resolveFamily to be set during hot reload."
              );
            var C = false,
              E = false;
            if (y !== null) {
              var M = ii(y);
              M !== void 0 &&
                (a.has(M)
                  ? (E = true)
                  : t.has(M) && (d === L ? (E = true) : (C = true)));
            }
            if (
              (yf !== null &&
                (yf.has(e) || (i !== null && yf.has(i))) &&
                (E = true),
              E && (e._debugNeedsRemount = true),
              E || C)
            ) {
              var _ = ma(e, Ae2);
              _ !== null && Gn(_, e, Ae2, Mt);
            }
            o !== null && !E && c1(o, t, a), s !== null && c1(s, t, a);
          }
        }
        var Pk = function (e, t) {
          {
            var a = /* @__PURE__ */ new Set(),
              i = new Set(
                t.map(function (o) {
                  return o.current;
                })
              );
            return f1(e.current, i, a), a;
          }
        };
        function f1(e, t, a) {
          {
            var i = e.child,
              o = e.sibling,
              s = e.tag,
              d = e.type,
              g = null;
            switch (s) {
              case j:
              case $e:
              case L:
                g = d;
                break;
              case Ne:
                g = d.render;
                break;
            }
            var y = false;
            g !== null && t.has(g) && (y = true),
              y ? Yk(e, a) : i !== null && f1(i, t, a),
              o !== null && f1(o, t, a);
          }
        }
        function Yk(e, t) {
          {
            var a = Ik(e, t);
            if (a) return;
            for (var i = e; ; ) {
              switch (i.tag) {
                case X:
                  t.add(i.stateNode);
                  return;
                case W:
                  t.add(i.stateNode.containerInfo);
                  return;
                case U:
                  t.add(i.stateNode.containerInfo);
                  return;
              }
              if (i.return === null)
                throw new Error("Expected to reach root first.");
              i = i.return;
            }
          }
        }
        function Ik(e, t) {
          for (var a = e, i = false; ; ) {
            if (a.tag === X) (i = true), t.add(a.stateNode);
            else if (a.child !== null) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === e) return i;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === e) return i;
              a = a.return;
            }
            (a.sibling.return = a.return), (a = a.sibling);
          }
          return false;
        }
        var d1;
        {
          d1 = false;
          try {
            var FC = Object.preventExtensions({});
          } catch {
            d1 = true;
          }
        }
        function Qk(e, t, a, i) {
          (this.tag = e),
            (this.key = a),
            (this.elementType = null),
            (this.type = null),
            (this.stateNode = null),
            (this.return = null),
            (this.child = null),
            (this.sibling = null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.memoizedProps = null),
            (this.updateQueue = null),
            (this.memoizedState = null),
            (this.dependencies = null),
            (this.mode = i),
            (this.flags = De),
            (this.subtreeFlags = De),
            (this.deletions = null),
            (this.lanes = G),
            (this.childLanes = G),
            (this.alternate = null),
            (this.actualDuration = Number.NaN),
            (this.actualStartTime = Number.NaN),
            (this.selfBaseDuration = Number.NaN),
            (this.treeBaseDuration = Number.NaN),
            (this.actualDuration = 0),
            (this.actualStartTime = -1),
            (this.selfBaseDuration = 0),
            (this.treeBaseDuration = 0),
            (this._debugSource = null),
            (this._debugOwner = null),
            (this._debugNeedsRemount = false),
            (this._debugHookTypes = null),
            !d1 &&
              typeof Object.preventExtensions == "function" &&
              Object.preventExtensions(this);
        }
        var Fa = function (e, t, a, i) {
          return new Qk(e, t, a, i);
        };
        function p1(e) {
          var t = e.prototype;
          return !!(t && t.isReactComponent);
        }
        function Gk(e) {
          return typeof e == "function" && !p1(e) && e.defaultProps === void 0;
        }
        function Wk(e) {
          if (typeof e == "function") return p1(e) ? L : j;
          if (e != null) {
            var t = e.$$typeof;
            if (t === Me) return Ne;
            if (t === Je) return Ie;
          }
          return Y;
        }
        function ws(e, t) {
          var a = e.alternate;
          a === null
            ? ((a = Fa(e.tag, t, e.key, e.mode)),
              (a.elementType = e.elementType),
              (a.type = e.type),
              (a.stateNode = e.stateNode),
              (a._debugSource = e._debugSource),
              (a._debugOwner = e._debugOwner),
              (a._debugHookTypes = e._debugHookTypes),
              (a.alternate = e),
              (e.alternate = a))
            : ((a.pendingProps = t),
              (a.type = e.type),
              (a.flags = De),
              (a.subtreeFlags = De),
              (a.deletions = null),
              (a.actualDuration = 0),
              (a.actualStartTime = -1)),
            (a.flags = e.flags & Un),
            (a.childLanes = e.childLanes),
            (a.lanes = e.lanes),
            (a.child = e.child),
            (a.memoizedProps = e.memoizedProps),
            (a.memoizedState = e.memoizedState),
            (a.updateQueue = e.updateQueue);
          var i = e.dependencies;
          switch (
            ((a.dependencies =
              i === null
                ? null
                : {
                    lanes: i.lanes,
                    firstContext: i.firstContext,
                  }),
            (a.sibling = e.sibling),
            (a.index = e.index),
            (a.ref = e.ref),
            (a.selfBaseDuration = e.selfBaseDuration),
            (a.treeBaseDuration = e.treeBaseDuration),
            (a._debugNeedsRemount = e._debugNeedsRemount),
            a.tag)
          ) {
            case Y:
            case j:
            case $e:
              a.type = mf(e.type);
              break;
            case L:
              a.type = u1(e.type);
              break;
            case Ne:
              a.type = s1(e.type);
              break;
          }
          return a;
        }
        function Xk(e, t) {
          e.flags &= Un | At;
          var a = e.alternate;
          if (a === null)
            (e.childLanes = G),
              (e.lanes = t),
              (e.child = null),
              (e.subtreeFlags = De),
              (e.memoizedProps = null),
              (e.memoizedState = null),
              (e.updateQueue = null),
              (e.dependencies = null),
              (e.stateNode = null),
              (e.selfBaseDuration = 0),
              (e.treeBaseDuration = 0);
          else {
            (e.childLanes = a.childLanes),
              (e.lanes = a.lanes),
              (e.child = a.child),
              (e.subtreeFlags = De),
              (e.deletions = null),
              (e.memoizedProps = a.memoizedProps),
              (e.memoizedState = a.memoizedState),
              (e.updateQueue = a.updateQueue),
              (e.type = a.type);
            var i = a.dependencies;
            (e.dependencies =
              i === null
                ? null
                : {
                    lanes: i.lanes,
                    firstContext: i.firstContext,
                  }),
              (e.selfBaseDuration = a.selfBaseDuration),
              (e.treeBaseDuration = a.treeBaseDuration);
          }
          return e;
        }
        function qk(e, t, a) {
          var i;
          return (
            e === Lh
              ? ((i = nt), t === true && ((i |= Wt), (i |= fa)))
              : (i = Le),
            Fn && (i |= je),
            Fa(U, null, null, i)
          );
        }
        function v1(e, t, a, i, o, s) {
          var d = Y,
            g = e;
          if (typeof e == "function")
            p1(e) ? ((d = L), (g = u1(g))) : (g = mf(g));
          else if (typeof e == "string") d = X;
          else
            e: switch (e) {
              case Da:
                return vu(a.children, o, s, t);
              case Fi:
                (d = Pe), (o |= Wt), (o & nt) !== Le && (o |= fa);
                break;
              case D:
                return Kk(a, o, s, t);
              case Ze:
                return Zk(a, o, s, t);
              case ft:
                return Jk(a, o, s, t);
              case Pt:
                return $C(a, o, s, t);
              case ur:
              case Tn:
              case $i:
              case Rs:
              case Vt:
              default: {
                if (typeof e == "object" && e !== null)
                  switch (e.$$typeof) {
                    case te:
                      d = Ue;
                      break e;
                    case ce:
                      d = ct;
                      break e;
                    case Me:
                      (d = Ne), (g = s1(g));
                      break e;
                    case Je:
                      d = Ie;
                      break e;
                    case Oe:
                      (d = dn), (g = null);
                      break e;
                  }
                var y = "";
                {
                  (e === void 0 ||
                    (typeof e == "object" &&
                      e !== null &&
                      Object.keys(e).length === 0)) &&
                    (y +=
                      " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                  var C = i ? We2(i) : null;
                  C &&
                    (y +=
                      `

Check the render method of \`` +
                      C +
                      "`.");
                }
                throw new Error(
                  "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " +
                    ("but got: " + (e == null ? e : typeof e) + "." + y)
                );
              }
            }
          var E = Fa(d, a, t, o);
          return (
            (E.elementType = e),
            (E.type = g),
            (E.lanes = s),
            (E._debugOwner = i),
            E
          );
        }
        function h1(e, t, a) {
          var i = null;
          i = e._owner;
          var o = e.type,
            s = e.key,
            d = e.props,
            g = v1(o, s, d, i, t, a);
          return (g._debugSource = e._source), (g._debugOwner = e._owner), g;
        }
        function vu(e, t, a, i) {
          var o = Fa(Ce, e, i, t);
          return (o.lanes = a), o;
        }
        function Kk(e, t, a, i) {
          typeof e.id != "string" &&
            S(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            );
          var o = Fa(et, e, i, t | je);
          return (
            (o.elementType = D),
            (o.lanes = a),
            (o.stateNode = {
              effectDuration: 0,
              passiveEffectDuration: 0,
            }),
            o
          );
        }
        function Zk(e, t, a, i) {
          var o = Fa(Fe, e, i, t);
          return (o.elementType = Ze), (o.lanes = a), o;
        }
        function Jk(e, t, a, i) {
          var o = Fa(xt, e, i, t);
          return (o.elementType = ft), (o.lanes = a), o;
        }
        function $C(e, t, a, i) {
          var o = Fa(Qe, e, i, t);
          (o.elementType = Pt), (o.lanes = a);
          var s = {
            isHidden: false,
          };
          return (o.stateNode = s), o;
        }
        function g1(e, t, a) {
          var i = Fa(le, e, null, t);
          return (i.lanes = a), i;
        }
        function e2() {
          var e = Fa(X, null, null, Le);
          return (e.elementType = "DELETED"), e;
        }
        function t2(e) {
          var t = Fa(Bt, null, null, Le);
          return (t.stateNode = e), t;
        }
        function y1(e, t, a) {
          var i = e.children !== null ? e.children : [],
            o = Fa(W, i, e.key, t);
          return (
            (o.lanes = a),
            (o.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              // Used by persistent updates
              implementation: e.implementation,
            }),
            o
          );
        }
        function HC(e, t) {
          return (
            e === null && (e = Fa(Y, null, null, Le)),
            (e.tag = t.tag),
            (e.key = t.key),
            (e.elementType = t.elementType),
            (e.type = t.type),
            (e.stateNode = t.stateNode),
            (e.return = t.return),
            (e.child = t.child),
            (e.sibling = t.sibling),
            (e.index = t.index),
            (e.ref = t.ref),
            (e.pendingProps = t.pendingProps),
            (e.memoizedProps = t.memoizedProps),
            (e.updateQueue = t.updateQueue),
            (e.memoizedState = t.memoizedState),
            (e.dependencies = t.dependencies),
            (e.mode = t.mode),
            (e.flags = t.flags),
            (e.subtreeFlags = t.subtreeFlags),
            (e.deletions = t.deletions),
            (e.lanes = t.lanes),
            (e.childLanes = t.childLanes),
            (e.alternate = t.alternate),
            (e.actualDuration = t.actualDuration),
            (e.actualStartTime = t.actualStartTime),
            (e.selfBaseDuration = t.selfBaseDuration),
            (e.treeBaseDuration = t.treeBaseDuration),
            (e._debugSource = t._debugSource),
            (e._debugOwner = t._debugOwner),
            (e._debugNeedsRemount = t._debugNeedsRemount),
            (e._debugHookTypes = t._debugHookTypes),
            e
          );
        }
        function n2(e, t, a, i, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.pendingChildren = null),
            (this.current = null),
            (this.pingCache = null),
            (this.finishedWork = null),
            (this.timeoutHandle = Zy),
            (this.context = null),
            (this.pendingContext = null),
            (this.callbackNode = null),
            (this.callbackPriority = ot),
            (this.eventTimes = Tc(G)),
            (this.expirationTimes = Tc(Mt)),
            (this.pendingLanes = G),
            (this.suspendedLanes = G),
            (this.pingedLanes = G),
            (this.expiredLanes = G),
            (this.mutableReadLanes = G),
            (this.finishedLanes = G),
            (this.entangledLanes = G),
            (this.entanglements = Tc(G)),
            (this.identifierPrefix = i),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null),
            (this.effectDuration = 0),
            (this.passiveEffectDuration = 0);
          {
            this.memoizedUpdaters = /* @__PURE__ */ new Set();
            for (var s = (this.pendingUpdatersLaneMap = []), d = 0; d < Ft; d++)
              s.push(/* @__PURE__ */ new Set());
          }
          switch (t) {
            case Lh:
              this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
              break;
            case tu:
              this._debugRootType = a ? "hydrate()" : "render()";
              break;
          }
        }
        function BC(e, t, a, i, o, s, d, g, y, C) {
          var E = new n2(e, t, a, g, y),
            M = qk(t, s);
          (E.current = M), (M.stateNode = E);
          {
            var _ = {
              element: i,
              isDehydrated: a,
              cache: null,
              // not enabled yet
              transitions: null,
              pendingSuspenseBoundaries: null,
            };
            M.memoizedState = _;
          }
          return Tm(M), E;
        }
        var m1 = "18.2.0";
        function r2(e, t, a) {
          var i =
            arguments.length > 3 && arguments[3] !== void 0
              ? arguments[3]
              : null;
          return (
            wa(i),
            {
              // This tag allow us to uniquely identify this as a React Portal
              $$typeof: Hr,
              key: i == null ? null : "" + i,
              children: e,
              containerInfo: t,
              implementation: a,
            }
          );
        }
        var S1, x1;
        (S1 = false), (x1 = {});
        function VC(e) {
          if (!e) return Ua;
          var t = la(e),
            a = Hw(t);
          if (t.tag === L) {
            var i = t.type;
            if (fl(i)) return vS(t, i, a);
          }
          return a;
        }
        function a2(e, t) {
          {
            var a = la(e);
            if (a === void 0) {
              if (typeof e.render == "function")
                throw new Error(
                  "Unable to find node on an unmounted component."
                );
              var i = Object.keys(e).join(",");
              throw new Error(
                "Argument appears to not be a ReactComponent. Keys: " + i
              );
            }
            var o = ca(a);
            if (o === null) return null;
            if (o.mode & Wt) {
              var s = We2(a) || "Component";
              if (!x1[s]) {
                x1[s] = true;
                var d = on;
                try {
                  Tt(o),
                    a.mode & Wt
                      ? S(
                          "%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",
                          t,
                          t,
                          s
                        )
                      : S(
                          "%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",
                          t,
                          t,
                          s
                        );
                } finally {
                  d ? Tt(d) : hn();
                }
              }
            }
            return o.stateNode;
          }
        }
        function PC(e, t, a, i, o, s, d, g) {
          var y = false,
            C = null;
          return BC(e, t, y, C, a, i, o, s, d);
        }
        function YC(e, t, a, i, o, s, d, g, y, C) {
          var E = true,
            M = BC(a, i, E, e, o, s, d, g, y);
          M.context = VC(null);
          var _ = M.current,
            B = qr(),
            V = du(_),
            I = io(B, V);
          return (I.callback = t ?? null), au(_, I, V), fk(M, V, B), M;
        }
        function jp(e, t, a, i) {
          Ov(t, e);
          var o = t.current,
            s = qr(),
            d = du(o);
          jl(d);
          var g = VC(a);
          t.context === null ? (t.context = g) : (t.pendingContext = g),
            ra &&
              on !== null &&
              !S1 &&
              ((S1 = true),
              S(
                `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
                We2(on) || "Unknown"
              ));
          var y = io(s, d);
          (y.payload = {
            element: e,
          }),
            (i = i === void 0 ? null : i),
            i !== null &&
              (typeof i != "function" &&
                S(
                  "render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                  i
                ),
              (y.callback = i));
          var C = au(o, y, d);
          return C !== null && (Gn(C, o, d, s), Qh(C, o, d)), d;
        }
        function Ug(e) {
          var t = e.current;
          if (!t.child) return null;
          switch (t.child.tag) {
            case X:
              return t.child.stateNode;
            default:
              return t.child.stateNode;
          }
        }
        function i2(e) {
          switch (e.tag) {
            case U: {
              var t = e.stateNode;
              if (Sn(t)) {
                var a = my(t);
                hk(t, a);
              }
              break;
            }
            case Fe: {
              so(function () {
                var o = ma(e, Ae2);
                if (o !== null) {
                  var s = qr();
                  Gn(o, e, Ae2, s);
                }
              });
              var i = Ae2;
              C1(e, i);
              break;
            }
          }
        }
        function IC(e, t) {
          var a = e.memoizedState;
          a !== null &&
            a.dehydrated !== null &&
            (a.retryLane = Qv(a.retryLane, t));
        }
        function C1(e, t) {
          IC(e, t);
          var a = e.alternate;
          a && IC(a, t);
        }
        function l2(e) {
          if (e.tag === Fe) {
            var t = Lo,
              a = ma(e, t);
            if (a !== null) {
              var i = qr();
              Gn(a, e, t, i);
            }
            C1(e, t);
          }
        }
        function o2(e) {
          if (e.tag === Fe) {
            var t = du(e),
              a = ma(e, t);
            if (a !== null) {
              var i = qr();
              Gn(a, e, t, i);
            }
            C1(e, t);
          }
        }
        function QC(e) {
          var t = zv(e);
          return t === null ? null : t.stateNode;
        }
        var GC = function (e) {
          return null;
        };
        function u2(e) {
          return GC(e);
        }
        var WC = function (e) {
          return false;
        };
        function s2(e) {
          return WC(e);
        }
        var XC = null,
          qC = null,
          KC = null,
          ZC = null,
          JC = null,
          eE = null,
          tE = null,
          nE = null,
          rE = null;
        {
          var aE = function (e, t, a) {
              var i = t[a],
                o = Rn(e) ? e.slice() : rt({}, e);
              return a + 1 === t.length
                ? (Rn(o) ? o.splice(i, 1) : delete o[i], o)
                : ((o[i] = aE(e[i], t, a + 1)), o);
            },
            iE = function (e, t) {
              return aE(e, t, 0);
            },
            lE = function (e, t, a, i) {
              var o = t[i],
                s = Rn(e) ? e.slice() : rt({}, e);
              if (i + 1 === t.length) {
                var d = a[i];
                (s[d] = s[o]), Rn(s) ? s.splice(o, 1) : delete s[o];
              } else
                s[o] = lE(
                  // $FlowFixMe number or string is fine here
                  e[o],
                  t,
                  a,
                  i + 1
                );
              return s;
            },
            oE = function (e, t, a) {
              if (t.length !== a.length) {
                R("copyWithRename() expects paths of the same length");
                return;
              } else
                for (var i = 0; i < a.length - 1; i++)
                  if (t[i] !== a[i]) {
                    R(
                      "copyWithRename() expects paths to be the same except for the deepest key"
                    );
                    return;
                  }
              return lE(e, t, a, 0);
            },
            uE = function (e, t, a, i) {
              if (a >= t.length) return i;
              var o = t[a],
                s = Rn(e) ? e.slice() : rt({}, e);
              return (s[o] = uE(e[o], t, a + 1, i)), s;
            },
            sE = function (e, t, a) {
              return uE(e, t, 0, a);
            },
            E1 = function (e, t) {
              for (var a = e.memoizedState; a !== null && t > 0; )
                (a = a.next), t--;
              return a;
            };
          (XC = function (e, t, a, i) {
            var o = E1(e, t);
            if (o !== null) {
              var s = sE(o.memoizedState, a, i);
              (o.memoizedState = s),
                (o.baseState = s),
                (e.memoizedProps = rt({}, e.memoizedProps));
              var d = ma(e, Ae2);
              d !== null && Gn(d, e, Ae2, Mt);
            }
          }),
            (qC = function (e, t, a) {
              var i = E1(e, t);
              if (i !== null) {
                var o = iE(i.memoizedState, a);
                (i.memoizedState = o),
                  (i.baseState = o),
                  (e.memoizedProps = rt({}, e.memoizedProps));
                var s = ma(e, Ae2);
                s !== null && Gn(s, e, Ae2, Mt);
              }
            }),
            (KC = function (e, t, a, i) {
              var o = E1(e, t);
              if (o !== null) {
                var s = oE(o.memoizedState, a, i);
                (o.memoizedState = s),
                  (o.baseState = s),
                  (e.memoizedProps = rt({}, e.memoizedProps));
                var d = ma(e, Ae2);
                d !== null && Gn(d, e, Ae2, Mt);
              }
            }),
            (ZC = function (e, t, a) {
              (e.pendingProps = sE(e.memoizedProps, t, a)),
                e.alternate && (e.alternate.pendingProps = e.pendingProps);
              var i = ma(e, Ae2);
              i !== null && Gn(i, e, Ae2, Mt);
            }),
            (JC = function (e, t) {
              (e.pendingProps = iE(e.memoizedProps, t)),
                e.alternate && (e.alternate.pendingProps = e.pendingProps);
              var a = ma(e, Ae2);
              a !== null && Gn(a, e, Ae2, Mt);
            }),
            (eE = function (e, t, a) {
              (e.pendingProps = oE(e.memoizedProps, t, a)),
                e.alternate && (e.alternate.pendingProps = e.pendingProps);
              var i = ma(e, Ae2);
              i !== null && Gn(i, e, Ae2, Mt);
            }),
            (tE = function (e) {
              var t = ma(e, Ae2);
              t !== null && Gn(t, e, Ae2, Mt);
            }),
            (nE = function (e) {
              GC = e;
            }),
            (rE = function (e) {
              WC = e;
            });
        }
        function c2(e) {
          var t = ca(e);
          return t === null ? null : t.stateNode;
        }
        function f2(e) {
          return null;
        }
        function d2() {
          return on;
        }
        function p2(e) {
          var t = e.findFiberByHostInstance,
            a = p.ReactCurrentDispatcher;
          return ud({
            bundleType: e.bundleType,
            version: e.version,
            rendererPackageName: e.rendererPackageName,
            rendererConfig: e.rendererConfig,
            overrideHookState: XC,
            overrideHookStateDeletePath: qC,
            overrideHookStateRenamePath: KC,
            overrideProps: ZC,
            overridePropsDeletePath: JC,
            overridePropsRenamePath: eE,
            setErrorHandler: nE,
            setSuspenseHandler: rE,
            scheduleUpdate: tE,
            currentDispatcherRef: a,
            findHostInstanceByFiber: c2,
            findFiberByHostInstance: t || f2,
            // React Refresh
            findHostInstancesForRefresh: Pk,
            scheduleRefresh: Bk,
            scheduleRoot: Vk,
            setRefreshHandler: Hk,
            // Enables DevTools to append owner stacks to error messages in DEV mode.
            getCurrentFiber: d2,
            // Enables DevTools to detect reconciler version rather than renderer version
            // which may not match for third party renderers.
            reconcilerVersion: m1,
          });
        }
        var cE =
          typeof reportError == "function"
            ? // In modern browsers, reportError will dispatch an error event,
              // emulating an uncaught JavaScript error.
              reportError
            : function (e) {
                console.error(e);
              };
        function b1(e) {
          this._internalRoot = e;
        }
        (Fg.prototype.render = b1.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (t === null) throw new Error("Cannot update an unmounted root.");
            {
              typeof arguments[1] == "function"
                ? S(
                    "render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
                  )
                : $g(arguments[1])
                ? S(
                    "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
                  )
                : typeof arguments[1] < "u" &&
                  S(
                    "You passed a second argument to root.render(...) but it only accepts one argument."
                  );
              var a = t.containerInfo;
              if (a.nodeType !== un) {
                var i = QC(t.current);
                i &&
                  i.parentNode !== a &&
                  S(
                    "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container."
                  );
              }
            }
            jp(e, t, null, null);
          }),
          (Fg.prototype.unmount = b1.prototype.unmount =
            function () {
              typeof arguments[0] == "function" &&
                S(
                  "unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
                );
              var e = this._internalRoot;
              if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                EC() &&
                  S(
                    "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
                  ),
                  so(function () {
                    jp(null, e, null, null);
                  }),
                  sS(t);
              }
            });
        function v2(e, t) {
          if (!$g(e))
            throw new Error(
              "createRoot(...): Target container is not a DOM element."
            );
          fE(e);
          var a = false,
            i = false,
            o = "",
            s = cE;
          t != null &&
            (t.hydrate
              ? R(
                  "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
                )
              : typeof t == "object" &&
                t !== null &&
                t.$$typeof === Ui &&
                S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),
            t.unstable_strictMode === true && (a = true),
            t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (s = t.onRecoverableError),
            t.transitionCallbacks !== void 0 && t.transitionCallbacks);
          var d = PC(e, Lh, null, a, i, o, s);
          Rh(d.current, e);
          var g = e.nodeType === un ? e.parentNode : e;
          return Pd(g), new b1(d);
        }
        function Fg(e) {
          this._internalRoot = e;
        }
        function h2(e) {
          e && eh(e);
        }
        Fg.prototype.unstable_scheduleHydration = h2;
        function g2(e, t, a) {
          if (!$g(e))
            throw new Error(
              "hydrateRoot(...): Target container is not a DOM element."
            );
          fE(e),
            t === void 0 &&
              S(
                "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
              );
          var i = a ?? null,
            o = (a != null && a.hydratedSources) || null,
            s = false,
            d = false,
            g = "",
            y = cE;
          a != null &&
            (a.unstable_strictMode === true && (s = true),
            a.identifierPrefix !== void 0 && (g = a.identifierPrefix),
            a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
          var C = YC(t, null, e, Lh, i, s, d, g, y);
          if ((Rh(C.current, e), Pd(e), o))
            for (var E = 0; E < o.length; E++) {
              var M = o[E];
              wT(C, M);
            }
          return new Fg(C);
        }
        function $g(e) {
          return !!(
            e &&
            (e.nodeType === Er || e.nodeType === Ma || e.nodeType === Rl || !mt)
          );
        }
        function Ap(e) {
          return !!(
            e &&
            (e.nodeType === Er ||
              e.nodeType === Ma ||
              e.nodeType === Rl ||
              (e.nodeType === un &&
                e.nodeValue === " react-mount-point-unstable "))
          );
        }
        function fE(e) {
          e.nodeType === Er &&
            e.tagName &&
            e.tagName.toUpperCase() === "BODY" &&
            S(
              "createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."
            ),
            ep(e) &&
              (e._reactRootContainer
                ? S(
                    "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
                  )
                : S(
                    "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
                  ));
        }
        var y2 = p.ReactCurrentOwner,
          dE;
        dE = function (e) {
          if (e._reactRootContainer && e.nodeType !== un) {
            var t = QC(e._reactRootContainer.current);
            t &&
              t.parentNode !== e &&
              S(
                "render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container."
              );
          }
          var a = !!e._reactRootContainer,
            i = w1(e),
            o = !!(i && Jo(i));
          o &&
            !a &&
            S(
              "render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."
            ),
            e.nodeType === Er &&
              e.tagName &&
              e.tagName.toUpperCase() === "BODY" &&
              S(
                "render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app."
              );
        };
        function w1(e) {
          return e
            ? e.nodeType === Ma
              ? e.documentElement
              : e.firstChild
            : null;
        }
        function pE() {}
        function m2(e, t, a, i, o) {
          if (o) {
            if (typeof i == "function") {
              var s = i;
              i = function () {
                var _ = Ug(d);
                s.call(_);
              };
            }
            var d = YC(
              t,
              i,
              e,
              tu,
              null,
              // hydrationCallbacks
              false,
              // isStrictMode
              false,
              // concurrentUpdatesByDefaultOverride,
              "",
              // identifierPrefix
              pE
            );
            (e._reactRootContainer = d), Rh(d.current, e);
            var g = e.nodeType === un ? e.parentNode : e;
            return Pd(g), so(), d;
          } else {
            for (var y; (y = e.lastChild); ) e.removeChild(y);
            if (typeof i == "function") {
              var C = i;
              i = function () {
                var _ = Ug(E);
                C.call(_);
              };
            }
            var E = PC(
              e,
              tu,
              null,
              // hydrationCallbacks
              false,
              // isStrictMode
              false,
              // concurrentUpdatesByDefaultOverride,
              "",
              // identifierPrefix
              pE
            );
            (e._reactRootContainer = E), Rh(E.current, e);
            var M = e.nodeType === un ? e.parentNode : e;
            return (
              Pd(M),
              so(function () {
                jp(t, E, a, i);
              }),
              E
            );
          }
        }
        function S2(e, t) {
          e !== null &&
            typeof e != "function" &&
            S(
              "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
              t,
              e
            );
        }
        function Hg(e, t, a, i, o) {
          dE(a), S2(o === void 0 ? null : o, "render");
          var s = a._reactRootContainer,
            d;
          if (!s) d = m2(a, t, e, o, i);
          else {
            if (((d = s), typeof o == "function")) {
              var g = o;
              o = function () {
                var y = Ug(d);
                g.call(y);
              };
            }
            jp(t, d, e, o);
          }
          return Ug(d);
        }
        function x2(e) {
          {
            var t = y2.current;
            if (t !== null && t.stateNode !== null) {
              var a = t.stateNode._warnedAboutRefsInRender;
              a ||
                S(
                  "%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
                  _t(t.type) || "A component"
                ),
                (t.stateNode._warnedAboutRefsInRender = true);
            }
          }
          return e == null
            ? null
            : e.nodeType === Er
            ? e
            : a2(e, "findDOMNode");
        }
        function C2(e, t, a) {
          if (
            (S(
              "ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
            ),
            !Ap(t))
          )
            throw new Error("Target container is not a DOM element.");
          {
            var i = ep(t) && t._reactRootContainer === void 0;
            i &&
              S(
                "You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?"
              );
          }
          return Hg(null, e, t, true, a);
        }
        function E2(e, t, a) {
          if (
            (S(
              "ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
            ),
            !Ap(t))
          )
            throw new Error("Target container is not a DOM element.");
          {
            var i = ep(t) && t._reactRootContainer === void 0;
            i &&
              S(
                "You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?"
              );
          }
          return Hg(null, e, t, false, a);
        }
        function b2(e, t, a, i) {
          if (
            (S(
              "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
            ),
            !Ap(a))
          )
            throw new Error("Target container is not a DOM element.");
          if (e == null || !Fu(e))
            throw new Error("parentComponent must be a valid React Component");
          return Hg(e, t, a, false, i);
        }
        function w2(e) {
          if (!Ap(e))
            throw new Error(
              "unmountComponentAtNode(...): Target container is not a DOM element."
            );
          {
            var t = ep(e) && e._reactRootContainer === void 0;
            t &&
              S(
                "You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?"
              );
          }
          if (e._reactRootContainer) {
            {
              var a = w1(e),
                i = a && !Jo(a);
              i &&
                S(
                  "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."
                );
            }
            return (
              so(function () {
                Hg(null, null, e, false, function () {
                  (e._reactRootContainer = null), sS(e);
                });
              }),
              true
            );
          } else {
            {
              var o = w1(e),
                s = !!(o && Jo(o)),
                d =
                  e.nodeType === Er &&
                  Ap(e.parentNode) &&
                  !!e.parentNode._reactRootContainer;
              s &&
                S(
                  "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",
                  d
                    ? "You may have accidentally passed in a React root node instead of its container."
                    : "Instead, have the parent component update its state and rerender in order to remove this component."
                );
            }
            return false;
          }
        }
        ye(i2),
          Wv(l2),
          Ju(o2),
          Td(pa),
          qv(qu),
          (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
            Map.prototype == null ||
            typeof Map.prototype.forEach != "function" ||
            typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
            Set.prototype == null ||
            typeof Set.prototype.clear != "function" ||
            typeof Set.prototype.forEach != "function") &&
            S(
              "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            ),
          Dv(kb),
          Qs(t1, gk, so);
        function T2(e, t) {
          var a =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : null;
          if (!$g(t)) throw new Error("Target container is not a DOM element.");
          return r2(e, t, null, a);
        }
        function R2(e, t, a, i) {
          return b2(e, t, a, i);
        }
        var T1 = {
          usingClientEntryPoint: false,
          // Keep in sync with ReactTestUtils.js.
          // This is an array for better minification.
          Events: [Jo, Wc, kh, Is, ju, t1],
        };
        function k2(e, t) {
          return (
            T1.usingClientEntryPoint ||
              S(
                'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
              ),
            v2(e, t)
          );
        }
        function D2(e, t, a) {
          return (
            T1.usingClientEntryPoint ||
              S(
                'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
              ),
            g2(e, t, a)
          );
        }
        function N2(e) {
          return (
            EC() &&
              S(
                "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
              ),
            so(e)
          );
        }
        var _2 = p2({
          findFiberByHostInstance: ss,
          bundleType: 1,
          version: m1,
          rendererPackageName: "react-dom",
        });
        if (
          !_2 &&
          bn &&
          window.top === window.self &&
          ((navigator.userAgent.indexOf("Chrome") > -1 &&
            navigator.userAgent.indexOf("Edge") === -1) ||
            navigator.userAgent.indexOf("Firefox") > -1)
        ) {
          var vE = window.location.protocol;
          /^(https?|file):$/.test(vE) &&
            console.info(
              "%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" +
                (vE === "file:"
                  ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`
                  : ""),
              "font-weight:bold"
            );
        }
        (ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T1),
          (ba.createPortal = T2),
          (ba.createRoot = k2),
          (ba.findDOMNode = x2),
          (ba.flushSync = N2),
          (ba.hydrate = C2),
          (ba.hydrateRoot = D2),
          (ba.render = E2),
          (ba.unmountComponentAtNode = w2),
          (ba.unstable_batchedUpdates = t1),
          (ba.unstable_renderSubtreeIntoContainer = R2),
          (ba.version = m1),
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
              "function" &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
              new Error()
            );
      })()),
    ba
  );
}
false ? (IE(), (L1.exports = FN())) : (L1.exports = $N());
var HN = L1.exports;
var BN = styled_components_browser_esm_default.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  width: 100%;
  min-width: 180px;
  min-height: 40px;
  box-sizing: border-box;
  border-left: ${({ disabled: c, selected: v, theme: p }) => {
    var m, b, R;
    return v && !c
      ? `5px solid ${
          ((R =
            (b =
              (m = p == null ? void 0 : p.color) == null ? void 0 : m.stroke) ==
            null
              ? void 0
              : b.dark) == null
            ? void 0
            : R.regular) || k.color.stroke.dark.regular
        }`
      : "0px";
  }};
  background-color: ${({ selected: c, disabled: v, theme: p }) => {
    var m, b, R, S, O, j, L, Y, U;
    return v
      ? ((R =
          (b =
            (m = p == null ? void 0 : p.color) == null ? void 0 : m.surface) ==
          null
            ? void 0
            : b.navLink) == null
          ? void 0
          : R.regular) || k.color.surface.navLink.regular
      : c && !v
      ? ((j =
          (O =
            (S = p == null ? void 0 : p.color) == null ? void 0 : S.surface) ==
          null
            ? void 0
            : O.navLink) == null
          ? void 0
          : j.selected) || k.color.surface.navLink.selected
      : ((U =
          (Y =
            (L = p == null ? void 0 : p.color) == null ? void 0 : L.surface) ==
          null
            ? void 0
            : Y.navLink) == null
          ? void 0
          : U.regular) || k.color.surface.navLink.regular;
  }};

  ${({ disabled: c, theme: v }) => {
    var p, m, b;
    return (
      !c &&
      `
      &:hover {
        background-color: ${
          ((b =
            (m =
              (p = v == null ? void 0 : v.color) == null
                ? void 0
                : p.surface) == null
              ? void 0
              : m.navLink) == null
            ? void 0
            : b.hover) || k.color.surface.navLink.hover
        };     
      }
  `
    );
  }};
`;
var VN = styled_components_browser_esm_default(Link)`
  box-sizing: border-box;
  text-decoration: none;
  width: 100%;
  cursor: ${({ disabled: c }) => c && "not-allowed"};
`;
var Cf = (c) => {
  const {
    id: v,
    label: p,
    path: m,
    disabled: b = false,
    selected: R = false,
    icon: S,
    onClick: O,
  } = c;
  return w.jsx(BN, {
    id: v,
    disabled: b,
    selected: R,
    onClick: O,
    children: w.jsx(VN, {
      to: m,
      disabled: +b,
      children: w.jsxs(Yg, {
        templateColumns: S ? "auto 1fr auto" : "1fr auto",
        gap: "s300",
        padding: "s0 s200",
        alignItems: "center",
        children: [
          w.jsx(en, {
            icon: S,
            appearance: R ? "primary" : "dark",
            disabled: b,
            size: "24px",
            parentHover: !b && true,
          }),
          w.jsx(pt, { type: "label", disabled: b, children: p }),
          !b &&
            R &&
            w.jsx(en, {
              icon: w.jsx(P2, {}),
              appearance: "dark",
              size: "24px",
              parentHover: !b && true,
            }),
        ],
      }),
    }),
  });
};
var PN = styled_components_browser_esm_default.div`
  position: absolute;
  width: fit-content;
`;
var YN = styled_components_browser_esm_default.nav`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${k.color.surface.nav.regular};
  padding: 0px 16px;
  z-index: 2;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`;
var IN = styled_components_browser_esm_default.div`
  width: calc(100% - 32px);
  margin: 16px 16px 16px;
  height: 1px;
  background-color: ${k.color.stroke.divider.regular};
`;
var QN = styled_components_browser_esm_default.footer`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;
  gap: 24px;
`;
var GN = styled_components_browser_esm_default.details`
  width: 100%;
  margin: ${k.spacing.s0} ${k.spacing.s300};
  list-style: none;
`;
var WN = styled_components_browser_esm_default.summary`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
    background-color: ${k.color.surface.navLink.hover};
  }
`;
var XN = (c) => {
  const { navigation: v } = c,
    p = Object.keys(v.sections),
    [m, b] = (0, import_react.useState)(null),
    R = (S) => {
      if (S === m) {
        b("");
        return;
      }
      b(S);
    };
  return w.jsx(Ke, {
    direction: "column",
    children: p.map((S) =>
      w.jsx(
        Ke,
        {
          children: w.jsxs(GN, {
            id: S,
            open: S === m,
            onClick: (O) => {
              O.preventDefault(), R(S);
            },
            children: [
              w.jsxs(WN, {
                children: [
                  w.jsx(pt, {
                    margin: "0px 16px",
                    type: "title",
                    size: "small",
                    appearance: S === m ? "primary" : "gray",
                    children: S.toUpperCase(),
                  }),
                  w.jsx("span", {
                    children: w.jsx(en, {
                      appearance: "dark",
                      icon: S === m ? w.jsx(K2, {}) : w.jsx($E, {}),
                      size: "24px",
                    }),
                  }),
                ],
              }),
              w.jsx(Ke, {
                direction: "column",
                children: Object.values(v.sections[S].links).map((O) =>
                  w.jsx(
                    Cf,
                    {
                      id: O.id,
                      label: O.label,
                      icon: O.icon,
                      path: O.path,
                      onClick: (j) => j.stopPropagation(),
                    },
                    O.id
                  )
                ),
              }),
            ],
          }),
        },
        S
      )
    ),
  });
};
var qN = ({ navigation: c }) => {
  const v = Object.values(c.sections);
  return w.jsx(Ke, {
    direction: "column",
    children: v.map((p) =>
      w.jsxs(
        Ke,
        {
          direction: "column",
          margin: "s0 s0 s300 s0",
          children: [
            w.jsx(pt, {
              as: "h2",
              type: "title",
              size: "small",
              appearance: "gray",
              padding: "16px",
              children: p.name,
            }),
            w.jsx(Ke, {
              direction: "column",
              children: Object.values(p.links).map((m) =>
                w.jsx(
                  Cf,
                  {
                    id: m.id,
                    label: m.label,
                    icon: m.icon,
                    path: m.path,
                  },
                  m.id
                )
              ),
            }),
          ],
        },
        p.name
      )
    ),
  });
};
var KN = ({ navigation: c }) => {
  const v = Object.values(c.sections)[0];
  return w.jsx(Ke, {
    direction: "column",
    children: Object.values(v.links).map((p) =>
      w.jsx(
        Cf,
        {
          id: p.id,
          label: p.label,
          icon: p.icon,
          path: p.path,
        },
        p.id
      )
    ),
  });
};
var zE = {
  1: KN,
  2: qN,
  default: XN,
};
var ZN = (c) => {
  const { navigation: v, logoutTitle: p, logoutPath: m, onClose: b } = c,
    R = Object.keys(v.sections),
    S = zE[R.length] || zE.default;
  return w.jsxs(YN, {
    children: [
      w.jsxs(Yg, {
        templateColumns: "1fr auto",
        padding: "s400 s300 s200 s200",
        children: [
          w.jsx(pt, {
            type: "title",
            size: "small",
            appearance: "gray",
            children: v.title,
          }),
          w.jsx(en, {
            appearance: "dark",
            icon: w.jsx(UE, {}),
            onClick: () => b(),
            size: "24px",
            cursorHover: true,
          }),
        ],
      }),
      w.jsx(S, { navigation: v }),
      w.jsx(IN, {}),
      w.jsx(Cf, {
        id: "logoutPath",
        label: p,
        icon: w.jsx(AE, {}),
        path: m,
      }),
      w.jsx(QN, {
        children: w.jsx(pt, {
          type: "label",
          size: "medium",
          appearance: "gray",
          children: "©2023 - Inube",
        }),
      }),
    ],
  });
};
var JN = (c) => {
  const { portalId: v, navigation: p, logoutTitle: m, logoutPath: b } = c,
    [R, S] = (0, import_react.useState)(false),
    O = document.getElementById(v);
  if (O === null)
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  return w.jsxs(w.Fragment, {
    children: [
      w.jsx(PN, {
        children: w.jsx(en, {
          appearance: "dark",
          icon: w.jsx(W2, {}),
          onClick: () => S(true),
          size: "24px",
          cursorHover: true,
        }),
      }),
      R &&
        HN.createPortal(
          w.jsx(ZN, {
            navigation: p,
            logoutPath: b,
            logoutTitle: m,
            onClose: () => S(false),
          }),
          O
        ),
    ],
  });
};
var e_ = styled_components_browser_esm_default.header`
  box-shadow: 0px 1px 3px 1px
      ${({ theme: c }) => {
        var v, p, m;
        return (
          ((m =
            (p =
              (v = c == null ? void 0 : c.color) == null ? void 0 : v.stroke) ==
            null
              ? void 0
              : p.divider) == null
            ? void 0
            : m.regular) || k.color.stroke.divider.regular
        );
      }},
    0px 1px 2px 0px
      ${({ theme: c }) => {
        var v;
        return (
          ((v = c == null ? void 0 : c.color) == null
            ? void 0
            : v.surface.light.disabled) || k.color.surface.light.disabled
        );
      }};

  & > div > div > div {
    position: unset;
    display: flex;
    align-items: center;
  }
  & li {
    display: flex;
    align-items: center;
    padding: ${k.spacing.s0} ${k.spacing.s500};
  }
  & > div > div:first-child {
    padding-left: ${k.spacing.s150};
  }
  & > div > div > div:last-child {
    padding: ${k.spacing.s100} ${k.spacing.s200};
    border-left: 1px solid
      ${({ theme: c }) => {
        var v, p, m;
        return (
          ((m =
            (p =
              (v = c == null ? void 0 : c.color) == null ? void 0 : v.stroke) ==
            null
              ? void 0
              : p.divider) == null
            ? void 0
            : m.regular) || k.color.stroke.divider.regular
        );
      }};
  }
`;
var F_ = (c) => {
  const {
      portalId: v,
      navigation: p,
      logoURL: m,
      userName: b,
      client: R,
      links: S,
    } = c,
    [O, j] = Object.values(HE(["(max-width: 420px)", "(max-width: 944px) "]));
  return w.jsx(e_, {
    children: w.jsxs(Ke, {
      alignItems: "center",
      justifyContent: "space-between",
      children: [
        w.jsxs(Ke, {
          justifyContent: "space-between",
          gap: "23px",
          children: [
            j &&
              w.jsx(JN, {
                portalId: v,
                navigation: p,
                logoutPath: "/logout",
                logoutTitle: "Logout",
              }),
            m,
          ],
        }),
        w.jsxs(Ke, {
          justifyContent: "space-between",
          gap: "23px",
          children: [
            S &&
              !j &&
              Object.values(S).map((L) =>
                w.jsx(
                  Pg,
                  {
                    label: L.label,
                    path: L.path,
                    id: L.id,
                  },
                  L.id
                )
              ),
            w.jsx(LD, {
              userName: b,
              client: R,
              size: O ? "small" : "large",
            }),
          ],
        }),
      ],
    }),
  });
};
var t_ = styled_components_browser_esm_default.div`
  width: 248px;
  box-sizing: border-box;
  background-color: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.surface) ==
        null
          ? void 0
          : p.nav) == null
        ? void 0
        : m.regular) || k.color.surface.nav.regular
    );
  }};
  border-right: 1px solid
    ${({ theme: c }) => {
      var v, p, m;
      return (
        ((m =
          (p =
            (v = c == null ? void 0 : c.color) == null ? void 0 : v.stroke) ==
          null
            ? void 0
            : p.divider) == null
          ? void 0
          : m.regular) || k.color.stroke.divider.regular
      );
    }};
`;
var n_ = styled_components_browser_esm_default.footer`
  width: 100%;
`;
var r_ = styled_components_browser_esm_default.div`
  width: calc(100% - 32px);
  margin: ${({ theme: c }) => {
    var v, p;
    return `${
      ((v = c == null ? void 0 : c.spacing) == null ? void 0 : v.s100) ||
      k.spacing.s100
    } ${
      ((p = c == null ? void 0 : c.spacing) == null ? void 0 : p.s200) ||
      k.spacing.s200
    }`;
  }};
  height: 1px;
  padding: ${({ theme: c }) => {
    var v;
    return (
      ((v = c == null ? void 0 : c.spacing) == null ? void 0 : v.s0) ||
      k.spacing.s0
    );
  }};
  background-color: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.stroke) ==
        null
          ? void 0
          : p.divider) == null
        ? void 0
        : m.regular) || k.color.stroke.divider.regular
    );
  }};
`;
var a_ = /* @__PURE__ */ new Date().getFullYear();
var QE = (c) => {
  const { section: v } = c,
    m = useLocation().pathname,
    b = v.map((R) =>
      w.jsx(
        Cf,
        {
          id: R.id,
          label: R.label,
          icon: R.icon,
          path: R.path,
          selected: m.startsWith(R.path),
        },
        R.id
      )
    );
  return w.jsxs(w.Fragment, { children: [b, " "] });
};
var i_ = ({ navigation: c }) => {
  const v = Object.keys(c.sections);
  return w.jsx(Ke, {
    direction: "column",
    children: v.map((p) =>
      w.jsxs(
        Ke,
        {
          direction: "column",
          justifyContent: "center",
          children: [
            w.jsx(pt, {
              padding: "16px",
              as: "h2",
              appearance: "gray",
              type: "title",
              size: "small",
              children: c.sections[p].name,
            }),
            w.jsx(Ke, {
              direction: "column",
              children: w.jsx(QE, {
                section: Object.values(c.sections[p].links),
              }),
            }),
          ],
        },
        c.sections[p].name
      )
    ),
  });
};
var l_ = ({ navigation: c }) => {
  const v = Object.keys(c.sections).join();
  return w.jsx(Ke, {
    direction: "column",
    children: w.jsx(Ke, {
      direction: "column",
      justifyContent: "center",
      children: w.jsx(QE, { section: Object.values(c.sections[v].links) }),
    }),
  });
};
var $_ = (c) => {
  const { navigation: v, logoutTitle: p, logoutPath: m } = c;
  return w.jsx(t_, {
    children: w.jsxs(Ke, {
      direction: "column",
      justifyContent: "space-between",
      height: "100dvh",
      children: [
        w.jsxs(Ke, {
          direction: "column",
          children: [
            w.jsx(pt, {
              padding: "32px 16px 16px 16px",
              as: "h2",
              appearance: "gray",
              type: "title",
              size: "small",
              children: v.title,
            }),
            Object.keys(v.sections).length > 1
              ? w.jsx(i_, { navigation: v })
              : w.jsx(l_, { navigation: v }),
            w.jsx(r_, {}),
            w.jsx(Cf, {
              id: "logout",
              label: p,
              icon: w.jsx(AE, {}),
              path: m,
            }),
          ],
        }),
        w.jsx(n_, {
          children: w.jsx(Ke, {
            justifyContent: "center",
            children: w.jsxs(pt, {
              type: "label",
              size: "medium",
              appearance: "gray",
              padding: "24px",
              children: [a_, " - Inube"],
            }),
          }),
        }),
      ],
    }),
  });
};
var o_ = styled_components_browser_esm_default.li`
  width: fit-content;
  user-select: none;
  list-style-type: none;
  border-bottom: ${({ selected: c, disabled: v, theme: p }) => {
    var m, b, R;
    return (
      c &&
      !v &&
      `4px solid ${
        ((R =
          (b =
            (m = p == null ? void 0 : p.color) == null ? void 0 : m.stroke) ==
          null
            ? void 0
            : b.primary) == null
          ? void 0
          : R.regular) || k.color.stroke.primary.regular
      }`
    );
  }};

  & > p {
    cursor: ${({ disabled: c }) => (c ? "not-allowed" : "pointer")};
  }
`;
var ME = (c) => {
  const { disabled: v = false, selected: p = false, id: m, label: b } = c;
  return w.jsx(o_, {
    disabled: v,
    selected: p,
    id: m,
    children: w.jsx(pt, {
      type: "label",
      size: "medium",
      appearance: p ? "primary" : "dark",
      disabled: v,
      children: b,
    }),
  });
};
var LE = styled_components_browser_esm_default.div`
  box-sizing: border-box;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  border-bottom: 2px solid
    ${({ theme: c }) => {
      var v, p, m;
      return (
        ((m =
          (p =
            (v = c == null ? void 0 : c.color) == null ? void 0 : v.stroke) ==
          null
            ? void 0
            : p.divider) == null
          ? void 0
          : m.regular) || k.color.stroke.divider.regular
      );
    }};
  padding: ${k.spacing.s0} ${k.spacing.s200};

  & > div {
    width: fit-content;
    ${(c) =>
      c.type === "select" &&
      `
        & > li > p {
          position: relative;
          top: 0.5rem;
        }
      `}
  }
  & > div > ul {
    position: absolute;
    z-index: 1;
  }
`;
var H_ = ({ tabs: c, type: v = "tabs", selectedTab: p, onChange: m }) => {
  var Y;
  const [b, R] = (0, import_react.useState)(false),
    S = (0, import_react.useRef)(null),
    O = (U) => {
      var X;
      const W =
        (X = U.target.closest("li")) == null ? void 0 : X.getAttribute("id");
      W && (m(W), R(false));
    },
    j = (U) => {
      S.current && !S.current.contains(U.target) && R(false);
    },
    L = (U) => {
      const W = U.target;
      if (W instanceof HTMLElement) {
        const X = W.closest("[id]");
        if (X && X.tagName.toLowerCase() === "li") {
          const le = X.getAttribute("id");
          le && X.getAttribute("disabled") === null && m(le);
        }
      }
    };
  return (
    (0, import_react.useEffect)(
      () => (
        document.addEventListener("mousedown", j),
        () => {
          document.removeEventListener("mousedown", j);
        }
      ),
      []
    ),
    v === "select"
      ? w.jsxs("div", {
          ref: S,
          children: [
            w.jsx(LE, {
              type: v,
              children: w.jsxs(Ke, {
                gap: "8px",
                children: [
                  w.jsx(en, {
                    spacing: "wide",
                    onClick: () => R(!b),
                    appearance: "dark",
                    icon: w.jsx(V2, {}),
                  }),
                  w.jsx(
                    ME,
                    {
                      selected: true,
                      id: p,
                      label:
                        (Y = c.find((U) => U.id === p)) == null
                          ? void 0
                          : Y.label,
                    },
                    p
                  ),
                ],
              }),
            }),
            b &&
              w.jsx(BE, {
                onClick: O,
                children: c.map((U) =>
                  w.jsx(VE, { id: U.id, label: U.label }, U.id)
                ),
              }),
          ],
        })
      : w.jsx(LE, {
          onClick: L,
          children: w.jsx(Ke, {
            gap: "24px",
            children: c.map((U) =>
              w.jsx(
                ME,
                {
                  disabled: U.disabled,
                  selected: U.id === p,
                  id: U.id,
                  label: U.label,
                },
                U.id
              )
            ),
          }),
        })
  );
};
var u_ = styled_components_browser_esm_default.div`
  position: fixed;
  display: grid;
  place-items: ${(c) => (c.isSmallScreen ? "center" : "initial")};
  inset: 0;
  background-color: ${({ theme: c }) => {
    var v, p, m;
    return (
      ((m =
        (p = (v = c == null ? void 0 : c.color) == null ? void 0 : v.surface) ==
        null
          ? void 0
          : p.blanket) == null
        ? void 0
        : m.regular) || k.color.surface.blanket.regular
    );
  }};
  border: none;
  z-index: 1;
  overflow-y: auto;
`;
var B_ = (c) => {
  const { children: v } = c,
    p = Bp("(max-width: 580px)");
  return w.jsx(u_, {
    isSmallScreen: !p,
    children: w.jsx(Ke, {
      alignItems: "center",
      justifyContent: "center",
      children: v,
    }),
  });
};
var Z = {
  neutral: {
    N900: "#333333",
    N800: "#404040",
    N700: "#4D4D4D",
    N600: "#595959",
    N500: "#666666",
    N400: "#737373",
    N300: "#808080",
    N200: "#8C8C8C",
    N100: "#999999",
    N90: "#BDBDBD",
    N80: "#C4C4C4",
    N70: "#C9C9C9",
    N60: "#D1D1D1",
    N50: "#D9D9D9",
    N40: "#E0E0E0",
    N30: "#E8E8E8",
    N20: "#F0F0F0",
    N10: "#F7F7F7",
    N0: "#FFFFFF",
  },
  neutralAlpha: {
    N900A: "rgba(51, 51, 51, 1)",
    N800A: "rgba(51, 51, 51, 0.95)",
    N700A: "rgba(51, 51, 51, 0.89)",
    N600A: "rgba(51, 51, 51, 0.82)",
    N500A: "rgba(51, 51, 51, 0.77)",
    N400A: "rgba(51, 51, 51, 0.71)",
    N300A: "rgba(51, 51, 51, 0.66)",
    N200A: "rgba(51, 51, 51, 0.60)",
    N100A: "rgba(51, 51, 51, 0.54)",
    N90A: "rgba(51, 51, 51, 0.48)",
    N80A: "rgba(51, 51, 51, 0.42)",
    N70A: "rgba(51, 51, 51, 0.36)",
    N60A: "rgba(51, 51, 51, 0.31)",
    N50A: "rgba(51, 51, 51, 0.25)",
    N40A: "rgba(51, 51, 51, 0.13)",
    N30A: "rgba(51, 51, 51, 0.08)",
    N20A: "rgba(51, 51, 51, 0.04)",
    N10A: "rgba(51, 51, 51, 0.02)",
    N0A: "rgba(51, 51, 51, 0)",
  },
  red: {
    R500: "#BF2600",
    R400: "#DE350B",
    R300: "#FF5630",
    R200: "#FF7452",
    R100: "#FF8F73",
    R75: "#FFBDAD",
    R50: "#FFEBE6",
  },
  yellow: {
    Y500: "#FFD400",
    Y400: "#FFEA00",
    Y300: "#FFFF00",
    Y200: "#FFFF66",
    Y100: "#FFFF99",
    Y75: "#FFFFCC",
    Y50: "#FFFFE5",
  },
  green: {
    G500: "#006644",
    G400: "#00875A",
    G300: "#36B37E",
    G200: "#57D9A3",
    G100: "#79F2C0",
    G75: "#ABF5D1",
    G50: "#E3FCEF",
  },
  blue: {
    B500: "#0747A6",
    B400: "#0052CC",
    B300: "#0065FF",
    B200: "#2684FF",
    B100: "#4C9AFF",
    B75: "#B3D4FF",
    B50: "#DEEBFF",
  },
  teal: {
    T500: "#008DA6",
    T400: "#00A3BF",
    T300: "#00B8D9",
    T200: "#00C7E6",
    T100: "#79E2F2",
    T75: "#B3F5FF",
    T50: "#E6FCFF",
  },
  purple: {
    P500: "#403294",
    P400: "#5243AA",
    P300: "#6554C0",
    P200: "#8777D9",
    P100: "#998DD9",
    P75: "#C0B6F2",
    P50: "#EAE6FF",
  },
};
var s_ = {
  primary: {
    regular: Z.yellow.Y400,
    hover: Z.yellow.Y300,
    focus: Z.yellow.Y300,
    disabled: Z.neutral.N70,
  },
  error: {
    regular: Z.red.R400,
    hover: Z.red.R300,
    disabled: Z.neutral.N70,
  },
  warning: {
    regular: Z.yellow.Y400,
    hover: Z.yellow.Y300,
    disabled: Z.neutral.N70,
  },
  success: {
    regular: Z.green.G400,
    hover: Z.green.G300,
    disabled: Z.neutral.N70,
  },
  information: {
    regular: Z.blue.B400,
    hover: Z.blue.B300,
    disabled: Z.neutral.N70,
  },
  help: {
    regular: Z.purple.P400,
    hover: Z.purple.P300,
    disabled: Z.neutral.N70,
  },
  divider: {
    regular: Z.neutral.N40,
  },
  spinner: {
    regular: Z.neutral.N30,
    transparent: Z.neutralAlpha.N0A,
  },
  dark: {
    regular: Z.neutral.N900,
    hover: Z.neutral.N500,
    disabled: Z.neutral.N70,
  },
  gray: {
    regular: Z.neutral.N200,
    hover: Z.neutral.N90,
    disabled: Z.neutral.N70,
  },
  light: {
    regular: Z.neutral.N10,
    hover: Z.neutral.N0,
    disabled: Z.neutral.N70,
  },
  link: {
    regular: Z.blue.B400,
    hover: Z.blue.B300,
    disabled: Z.neutral.N70,
  },
};
var c_ = {
  primary: {
    regular: Z.yellow.Y400,
    hover: Z.yellow.Y300,
    clear: Z.yellow.Y50,
    disabled: Z.neutral.N20,
  },
  error: {
    regular: Z.red.R400,
    hover: Z.red.R300,
    clear: Z.red.R50,
    disabled: Z.neutral.N20,
  },
  warning: {
    regular: Z.yellow.Y400,
    hover: Z.yellow.Y300,
    clear: Z.yellow.Y50,
    disabled: Z.neutral.N20,
  },
  success: {
    regular: Z.green.G400,
    hover: Z.green.G300,
    clear: Z.green.G50,
    disabled: Z.neutral.N20,
  },
  information: {
    regular: Z.blue.B400,
    hover: Z.blue.B300,
    clear: Z.blue.B50,
    disabled: Z.neutral.N20,
  },
  help: {
    regular: Z.purple.P400,
    hover: Z.purple.P300,
    clear: Z.purple.P50,
    disabled: Z.neutral.N20,
  },
  nav: {
    regular: Z.neutral.N10,
  },
  navLink: {
    regular: Z.neutralAlpha.N0A,
    selected: Z.neutral.N30,
    hover: Z.neutral.N30,
  },
  blanket: {
    regular: Z.neutralAlpha.N100A,
  },
  dark: {
    regular: Z.neutral.N900,
    hover: Z.neutral.N500,
    clear: Z.neutral.N30,
    disabled: Z.neutral.N20,
  },
  gray: {
    regular: Z.neutral.N30,
    hover: Z.neutral.N20,
    clear: Z.neutral.N10,
    disabled: Z.neutral.N20,
  },
  light: {
    regular: Z.neutral.N10,
    hover: Z.neutral.N0,
    clear: Z.neutral.N0,
    disabled: Z.neutral.N20,
  },
};
var f_ = {
  primary: {
    regular: Z.yellow.Y400,
    hover: Z.yellow.Y300,
    disabled: Z.neutral.N70,
  },
  error: {
    regular: Z.red.R400,
    hover: Z.red.R300,
    disabled: Z.neutral.N70,
  },
  warning: {
    regular: Z.yellow.Y400,
    hover: Z.yellow.Y300,
    disabled: Z.neutral.N70,
  },
  success: {
    regular: Z.green.G400,
    hover: Z.green.G300,
    disabled: Z.neutral.N70,
  },
  help: {
    regular: Z.purple.P400,
    hover: Z.purple.P300,
    disabled: Z.neutral.N70,
  },
  information: {
    regular: Z.blue.B400,
    hover: Z.blue.B300,
    disabled: Z.neutral.N70,
  },
  dark: {
    regular: Z.neutral.N900,
    hover: Z.neutral.N500,
    disabled: Z.neutral.N70,
  },
  gray: {
    regular: Z.neutral.N300,
    hover: Z.neutral.N100,
    disabled: Z.neutral.N70,
  },
  light: {
    regular: Z.neutral.N10,
    hover: Z.neutral.N0,
    disabled: Z.neutral.N70,
  },
  link: {
    regular: Z.blue.B400,
    hover: Z.blue.B300,
    disabled: Z.neutral.N70,
  },
};
var d_ = {
  palette: Z,
  stroke: s_,
  surface: c_,
  text: f_,
};
var p_ = {
  s0: "0px",
  s025: "2px",
  s050: "4px",
  s075: "6px",
  s100: "8px",
  s150: "12px",
  s200: "16px",
  s250: "20px",
  s300: "24px",
  s350: "28px",
  s400: "32px",
  s450: "36px",
  s500: "40px",
  s600: "48px",
  s800: "64px",
  s1000: "80px",
};
var v_ = {
  large: {
    font: "Roboto",
    lineHeight: "24px",
    size: "16px",
    tracking: "0.5px",
    weight: "400",
  },
  medium: {
    font: "Roboto",
    lineHeight: "20px",
    size: "14px",
    tracking: "0.25px",
    weight: "400",
  },
  small: {
    font: "Roboto",
    lineHeight: "16px",
    size: "12px",
    tracking: "0.4px",
    weight: "400",
  },
};
var h_ = {
  large: {
    font: "Roboto",
    lineHeight: "64px",
    size: "57px",
    tracking: "-0.25px",
    weight: "400",
  },
  medium: {
    font: "Roboto",
    lineHeight: "52px",
    size: "45px",
    tracking: "0px",
    weight: "400",
  },
  small: {
    font: "Roboto",
    lineHeight: "44px",
    size: "36px",
    tracking: "0px",
    weight: "400",
  },
};
var g_ = {
  large: {
    font: "Roboto",
    lineHeight: "40px",
    size: "32px",
    tracking: "0px",
    weight: "400",
  },
  medium: {
    font: "Roboto",
    lineHeight: "36px",
    size: "28px",
    tracking: "0px",
    weight: "400",
  },
  small: {
    font: "Roboto",
    lineHeight: "32px",
    size: "24px",
    tracking: "0px",
    weight: "400",
  },
};
var y_ = {
  large: {
    font: "Roboto",
    lineHeight: "20px",
    size: "14px",
    tracking: "0.1px",
    weight: "500",
  },
  medium: {
    font: "Roboto",
    lineHeight: "16px",
    size: "12px",
    tracking: "0.5px",
    weight: "500",
  },
  small: {
    font: "Roboto",
    lineHeight: "16px",
    size: "11px",
    tracking: "0.5px",
    weight: "500",
  },
};
var m_ = {
  large: {
    font: "Roboto",
    lineHeight: "28px",
    size: "22px",
    tracking: "0px",
    weight: "400",
  },
  medium: {
    font: "Roboto",
    lineHeight: "24px",
    size: "16px",
    tracking: "0.15px",
    weight: "500",
  },
  small: {
    font: "Roboto",
    lineHeight: "20px",
    size: "14px",
    tracking: "0.1px",
    weight: "500",
  },
};
var S_ = [
  {
    family: "Roboto",
    url: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2",
    options: {
      weight: "400",
      style: "normal",
    },
  },
  {
    family: "Roboto",
    url: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4.woff2",
    options: {
      weight: "500",
      style: "normal",
    },
  },
];
var x_ = {
  display: h_,
  headline: g_,
  title: m_,
  label: y_,
  body: v_,
  fonts: S_,
};
var V_ = {
  color: d_,
  spacing: p_,
  typography: x_,
};
export {
  N_ as Assisted,
  fD as Avatar,
  B_ as Blanket,
  U_ as Breadcrumbs,
  bE as Button,
  WD as CountdownBar,
  Yg as Grid,
  F_ as Header,
  en as Icon,
  Wg as Label,
  $_ as Nav,
  Cf as NavLink,
  __ as SectionMessage,
  L_ as Select,
  z_ as SkeletonIcon,
  M_ as SkeletonLine,
  UD as Spinner,
  Ke as Stack,
  O_ as Switch,
  k_ as Table,
  H_ as Tabs,
  D_ as Tag,
  pt as Text,
  j_ as Textarea,
  A_ as Textfield,
  LD as User,
  k as inube,
  V_ as presente,
  HE as useMediaQueries,
  Bp as useMediaQuery,
};
/*! Bundled license information:

@inube/design-system/dist/index.es.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@inube/design-system/dist/index.es.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@inube/design-system/dist/index.es.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@inube/design-system/dist/index.es.js:
  (**
   * @license React
   * scheduler.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@inube/design-system/dist/index.es.js:
  (**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   *)
*/
//# sourceMappingURL=@inube_design-system.js.map
