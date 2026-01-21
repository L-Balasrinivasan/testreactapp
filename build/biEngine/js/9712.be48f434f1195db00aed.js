"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[9712],{

/***/ 79712:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  OidcClient: () => (/* reexport */ ke),
  OidcLocation: () => (/* reexport */ dist_H),
  OidcProvider: () => (/* binding */ dist_Pe),
  OidcSecure: () => (/* binding */ dist_ge),
  OidcUserStatus: () => (/* binding */ dist_me),
  TokenAutomaticRenewMode: () => (/* reexport */ V),
  TokenRenewMode: () => (/* reexport */ z),
  useOidc: () => (/* binding */ dist_Se),
  useOidcAccessToken: () => (/* binding */ dist_Ne),
  useOidcFetch: () => (/* binding */ dist_ne),
  useOidcIdToken: () => (/* binding */ dist_Le),
  useOidcUser: () => (/* binding */ dist_Ie),
  withOidcFetch: () => (/* binding */ dist_Oe),
  withOidcSecure: () => (/* binding */ dist_Ee)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86106);
;// ../node_modules/.pnpm/@axa-fr+oidc-client@7.25.13/node_modules/@axa-fr/oidc-client/dist/index.js
/* provided dependency */ var process = __webpack_require__(72290);
class dist_H {
  open(n) {
    window.location.href = n;
  }
  reload() {
    window.location.reload();
  }
  getCurrentHref() {
    return window.location.href;
  }
  getPath() {
    const n = window.location;
    return n.pathname + (n.search || "") + (n.hash || "");
  }
  getOrigin() {
    return window.origin;
  }
}
const le = 2e3, D = console;
class Ne {
  constructor(n, s, t, o = le, i = !0) {
    this._callback = n, this._client_id = s, this._url = t, this._interval = o || le, this._stopOnError = i;
    const r = t.indexOf("/", t.indexOf("//") + 2);
    this._frame_origin = t.substring(0, r), this._frame = window.document.createElement("iframe"), this._frame.style.visibility = "hidden", this._frame.style.position = "absolute", this._frame.style.display = "none", this._frame.width = 0, this._frame.height = 0, this._frame.src = t;
  }
  load() {
    return new Promise((n) => {
      this._frame.onload = () => {
        n();
      }, window.document.body.appendChild(this._frame), this._boundMessageEvent = this._message.bind(this), window.addEventListener("message", this._boundMessageEvent, !1);
    });
  }
  _message(n) {
    n.origin === this._frame_origin && n.source === this._frame.contentWindow && (n.data === "error" ? (D.error("CheckSessionIFrame: error message from check session op iframe"), this._stopOnError && this.stop()) : n.data === "changed" ? (D.debug(n), D.debug("CheckSessionIFrame: changed message from check session op iframe"), this.stop(), this._callback()) : D.debug("CheckSessionIFrame: " + n.data + " message from check session op iframe"));
  }
  start(n) {
    D.debug("CheckSessionIFrame.start :" + n), this.stop();
    const s = () => {
      this._frame.contentWindow.postMessage(
        this._client_id + " " + n,
        this._frame_origin
      );
    };
    s(), this._timer = window.setInterval(s, this._interval);
  }
  stop() {
    this._timer && (D.debug("CheckSessionIFrame.stop"), window.clearInterval(this._timer), this._timer = null);
  }
}
const k = {
  service_worker_not_supported_by_browser: "service_worker_not_supported_by_browser",
  token_acquired: "token_acquired",
  logout_from_another_tab: "logout_from_another_tab",
  logout_from_same_tab: "logout_from_same_tab",
  token_renewed: "token_renewed",
  token_timer: "token_timer",
  loginAsync_begin: "loginAsync_begin",
  loginAsync_error: "loginAsync_error",
  loginCallbackAsync_begin: "loginCallbackAsync_begin",
  loginCallbackAsync_end: "loginCallbackAsync_end",
  loginCallbackAsync_error: "loginCallbackAsync_error",
  refreshTokensAsync_begin: "refreshTokensAsync_begin",
  refreshTokensAsync: "refreshTokensAsync",
  refreshTokensAsync_end: "refreshTokensAsync_end",
  refreshTokensAsync_error: "refreshTokensAsync_error",
  refreshTokensAsync_silent_error: "refreshTokensAsync_silent_error",
  tryKeepExistingSessionAsync_begin: "tryKeepExistingSessionAsync_begin",
  tryKeepExistingSessionAsync_end: "tryKeepExistingSessionAsync_end",
  tryKeepExistingSessionAsync_error: "tryKeepExistingSessionAsync_error",
  silentLoginAsync_begin: "silentLoginAsync_begin",
  silentLoginAsync: "silentLoginAsync",
  silentLoginAsync_end: "silentLoginAsync_end",
  silentLoginAsync_error: "silentLoginAsync_error",
  syncTokensAsync_begin: "syncTokensAsync_begin",
  syncTokensAsync_lock_not_available: "syncTokensAsync_lock_not_available",
  syncTokensAsync_end: "syncTokensAsync_end",
  syncTokensAsync_error: "syncTokensAsync_error",
  tokensInvalidAndWaitingActionsToRefresh: "tokensInvalidAndWaitingActionsToRefresh"
}, I = (e, n = sessionStorage) => {
  const s = (g) => (n[`oidc.${e}`] = JSON.stringify({ tokens: null, status: g }), Promise.resolve()), t = async () => {
    if (!n[`oidc.${e}`])
      return n[`oidc.${e}`] = JSON.stringify({ tokens: null, status: null }), { tokens: null, status: null };
    const g = JSON.parse(n[`oidc.${e}`]);
    return Promise.resolve({ tokens: g.tokens, status: g.status });
  }, o = (g) => {
    n[`oidc.${e}`] = JSON.stringify({ tokens: g });
  }, i = async (g) => {
    n[`oidc.session_state.${e}`] = g;
  }, r = async () => n[`oidc.session_state.${e}`], a = (g) => {
    n[`oidc.nonce.${e}`] = g.nonce;
  }, c = (g) => {
    n[`oidc.jwk.${e}`] = JSON.stringify(g);
  }, l = () => JSON.parse(n[`oidc.jwk.${e}`]), d = async () => ({ nonce: n[`oidc.nonce.${e}`] }), u = async (g) => {
    n[`oidc.dpop_nonce.${e}`] = g;
  }, _ = () => n[`oidc.dpop_nonce.${e}`], f = () => n[`oidc.${e}`] ? JSON.stringify({ tokens: JSON.parse(n[`oidc.${e}`]).tokens }) : null, y = {};
  return {
    clearAsync: s,
    initAsync: t,
    setTokens: o,
    getTokens: f,
    setSessionStateAsync: i,
    getSessionStateAsync: r,
    setNonceAsync: a,
    getNonceAsync: d,
    setLoginParams: (g) => {
      y[e] = g, n[`oidc.login.${e}`] = JSON.stringify(g);
    },
    getLoginParams: () => {
      const g = n[`oidc.login.${e}`];
      return g ? (y[e] || (y[e] = JSON.parse(g)), y[e]) : (console.warn(
        `storage[oidc.login.${e}] is empty, you should have an bad OIDC or code configuration somewhere.`
      ), null);
    },
    getStateAsync: async () => n[`oidc.state.${e}`],
    setStateAsync: async (g) => {
      n[`oidc.state.${e}`] = g;
    },
    getCodeVerifierAsync: async () => n[`oidc.code_verifier.${e}`],
    setCodeVerifierAsync: async (g) => {
      n[`oidc.code_verifier.${e}`] = g;
    },
    setDemonstratingProofOfPossessionNonce: u,
    getDemonstratingProofOfPossessionNonce: _,
    setDemonstratingProofOfPossessionJwkAsync: c,
    getDemonstratingProofOfPossessionJwkAsync: l
  };
};
var V = /* @__PURE__ */ ((e) => (e.AutomaticBeforeTokenExpiration = "AutomaticBeforeTokensExpiration", e.AutomaticOnlyWhenFetchExecuted = "AutomaticOnlyWhenFetchExecuted", e))(V || {});
const xe = (e) => decodeURIComponent(
  Array.prototype.map.call(atob(e), (n) => "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2)).join("")
), We = (e) => JSON.parse(xe(e.replaceAll(/-/g, "+").replaceAll(/_/g, "/"))), ue = (e) => {
  try {
    return e && Le(e, ".") === 2 ? We(e.split(".")[1]) : null;
  } catch (n) {
    console.warn(n);
  }
  return null;
}, Le = (e, n) => e.split(n).length - 1, z = {
  access_token_or_id_token_invalid: "access_token_or_id_token_invalid",
  access_token_invalid: "access_token_invalid",
  id_token_invalid: "id_token_invalid"
};
function De(e, n, s) {
  if (e.issuedAt) {
    if (typeof e.issuedAt == "string")
      return parseInt(e.issuedAt, 10);
  } else return n && n.iat ? n.iat : s && s.iat ? s.iat : (/* @__PURE__ */ new Date()).getTime() / 1e3;
  return e.issuedAt;
}
const te = (e, n = null, s) => {
  if (!e)
    return null;
  let t;
  const o = typeof e.expiresIn == "string" ? parseInt(e.expiresIn, 10) : e.expiresIn;
  e.accessTokenPayload !== void 0 ? t = e.accessTokenPayload : t = ue(e.accessToken);
  let i;
  n != null && "idToken" in n && !("idToken" in e) ? i = n.idToken : i = e.idToken;
  const r = e.idTokenPayload ? e.idTokenPayload : ue(i), a = r && r.exp ? r.exp : Number.MAX_VALUE, c = t && t.exp ? t.exp : e.issuedAt + o;
  e.issuedAt = De(e, t, r);
  let l;
  e.expiresAt ? l = e.expiresAt : s === z.access_token_invalid ? l = c : s === z.id_token_invalid ? l = a : l = a < c ? a : c;
  const d = {
    ...e,
    idTokenPayload: r,
    accessTokenPayload: t,
    expiresAt: l,
    idToken: i
  };
  if (n != null && "refreshToken" in n && !("refreshToken" in e)) {
    const u = n.refreshToken;
    return { ...d, refreshToken: u };
  }
  return d;
}, oe = (e, n, s) => {
  if (!e)
    return null;
  if (!e.issued_at) {
    const o = (/* @__PURE__ */ new Date()).getTime() / 1e3;
    e.issued_at = o;
  }
  const t = {
    accessToken: e.access_token,
    expiresIn: e.expires_in,
    idToken: e.id_token,
    scope: e.scope,
    tokenType: e.token_type,
    issuedAt: e.issued_at
  };
  return "refresh_token" in e && (t.refreshToken = e.refresh_token), e.accessTokenPayload !== void 0 && (t.accessTokenPayload = e.accessTokenPayload), e.idTokenPayload !== void 0 && (t.idTokenPayload = e.idTokenPayload), te(t, n, s);
}, K = (e, n) => {
  const s = (/* @__PURE__ */ new Date()).getTime() / 1e3, t = n - s;
  return Math.round(t - e);
}, _e = (e, n = 0) => e ? K(n, e.expiresAt) > 0 : !1, me = async (e, n = 200, s = 50) => {
  let t = s;
  if (!e.getTokens())
    return null;
  for (; !_e(
    e.getTokens(),
    e.configuration.refresh_time_before_tokens_expiration_in_second
  ) && t > 0; ) {
    if (e.configuration.token_automatic_renew_mode == V.AutomaticOnlyWhenFetchExecuted) {
      await e.renewTokensAsync({});
      break;
    } else
      await ie({ milliseconds: n });
    t = t - 1;
  }
  return {
    isTokensValid: _e(e.getTokens()),
    tokens: e.getTokens(),
    numberWaited: t - s
  };
}, pe = (e, n, s) => {
  if (e.idTokenPayload) {
    const t = e.idTokenPayload;
    if (s.issuer !== t.iss)
      return {
        isValid: !1,
        reason: `Issuer does not match (oidcServerConfiguration issuer) ${s.issuer} !== (idTokenPayload issuer) ${t.iss}`
      };
    const o = (/* @__PURE__ */ new Date()).getTime() / 1e3;
    if (t.exp && t.exp < o)
      return {
        isValid: !1,
        reason: `Token expired (idTokenPayload exp) ${t.exp} < (currentTimeUnixSecond) ${o}`
      };
    const i = 60 * 60 * 24 * 7;
    if (t.iat && t.iat + i < o)
      return {
        isValid: !1,
        reason: `Token is used from too long time (idTokenPayload iat + timeInSevenDays) ${t.iat + i} < (currentTimeUnixSecond) ${o}`
      };
    if (t.nonce && t.nonce !== n)
      return {
        isValid: !1,
        reason: `Nonce does not match (idTokenPayload nonce) ${t.nonce} !== (nonce) ${n}`
      };
  }
  return { isValid: !0, reason: "" };
}, U = function() {
  const e = typeof window > "u" ? __webpack_require__.g : window;
  return {
    setTimeout: setTimeout.bind(e),
    clearTimeout: clearTimeout.bind(e),
    setInterval: setInterval.bind(e),
    clearInterval: clearInterval.bind(e)
  };
}(), q = "7.25.13";
let fe = null, j;
const ie = ({ milliseconds: e }) => new Promise((n) => U.setTimeout(n, e)), we = (e = "/") => {
  try {
    j = new AbortController(), fetch(
      `${e}OidcKeepAliveServiceWorker.json?minSleepSeconds=150`,
      { signal: j.signal }
    ).catch((t) => {
      console.log(t);
    }), ie({ milliseconds: 150 * 1e3 }).then(we);
  } catch (n) {
    console.log(n);
  }
}, Y = () => {
  j && j.abort();
}, Ae = (e) => {
  const n = sessionStorage.getItem(`oidc.tabId.${e}`);
  if (n)
    return n;
  const s = globalThis.crypto.randomUUID();
  return sessionStorage.setItem(`oidc.tabId.${e}`, s), s;
}, O = (e) => (n) => new Promise(function(s, t) {
  const o = new MessageChannel();
  o.port1.onmessage = function(i) {
    i != null && i.data.error ? t(i.data.error) : s(i.data), o.port1.close(), o.port2.close();
  }, e.active.postMessage({ ...n, tabId: Ae(n.configurationName) }, [
    o.port2
  ]);
}), C = async (e, n) => {
  const s = e.service_worker_relative_url;
  if (typeof window > "u" || typeof navigator > "u" || !navigator.serviceWorker || !s || e.service_worker_activate() === !1)
    return null;
  const t = `${s}?v=${q}`;
  let o = null;
  e.service_worker_register ? o = await e.service_worker_register(s) : o = await navigator.serviceWorker.register(t, {
    updateViaCache: "none"
  }), o.addEventListener("updatefound", () => {
    const h = o.installing;
    Y(), h == null || h.addEventListener("statechange", () => {
      h.state === "installed" && navigator.serviceWorker.controller && (Y(), console.log("New SW waiting – skipWaiting()"), h.postMessage({ type: "SKIP_WAITING" }));
    });
  }), navigator.serviceWorker.addEventListener("controllerchange", () => {
    console.log("SW controller changed – reloading page"), Y(), window.location.reload();
  });
  try {
    await navigator.serviceWorker.ready, navigator.serviceWorker.controller || await O(o)({ type: "claim" });
  } catch (h) {
    return console.warn(`Failed init ServiceWorker ${h.toString()}`), null;
  }
  const i = async (h) => O(o)({ type: "clear", data: { status: h }, configurationName: n }), r = async (h, b, S) => {
    const m = await O(o)({
      type: "init",
      data: {
        oidcServerConfiguration: h,
        where: b,
        oidcConfiguration: {
          token_renew_mode: S.token_renew_mode,
          service_worker_convert_all_requests_to_cors: S.service_worker_convert_all_requests_to_cors
        }
      },
      configurationName: n
    }), x = m.version;
    return x !== q && console.warn(
      `Service worker ${x} version mismatch with js client version ${q}, unregistering and reloading`
    ), {
      tokens: oe(m.tokens, null, S.token_renew_mode),
      status: m.status
    };
  }, a = (h = "/") => {
    fe == null && (fe = "not_null", we(h));
  }, c = (h) => O(o)({
    type: "setSessionState",
    data: { sessionState: h },
    configurationName: n
  }), l = async () => (await O(o)({
    type: "getSessionState",
    data: null,
    configurationName: n
  })).sessionState, d = (h) => (sessionStorage[`oidc.nonce.${n}`] = h.nonce, O(o)({
    type: "setNonce",
    data: { nonce: h },
    configurationName: n
  })), u = async (h = !0) => {
    let S = (await O(o)({
      type: "getNonce",
      data: null,
      configurationName: n
    })).nonce;
    return S || (S = sessionStorage[`oidc.nonce.${n}`], console.warn("nonce not found in service worker, using sessionStorage"), h && (await d(S), S = (await u(!1)).nonce)), { nonce: S };
  }, _ = {}, f = (h) => {
    _[n] = h, localStorage[`oidc.login.${n}`] = JSON.stringify(h);
  }, y = () => {
    const h = localStorage[`oidc.login.${n}`];
    return _[n] || (_[n] = JSON.parse(h)), _[n];
  }, p = async (h) => {
    await O(o)({
      type: "setDemonstratingProofOfPossessionNonce",
      data: { demonstratingProofOfPossessionNonce: h },
      configurationName: n
    });
  }, w = async () => (await O(o)({
    type: "getDemonstratingProofOfPossessionNonce",
    data: null,
    configurationName: n
  })).demonstratingProofOfPossessionNonce, v = async (h) => {
    const b = JSON.stringify(h);
    await O(o)({
      type: "setDemonstratingProofOfPossessionJwk",
      data: { demonstratingProofOfPossessionJwkJson: b },
      configurationName: n
    });
  }, P = async () => {
    const h = await O(o)({
      type: "getDemonstratingProofOfPossessionJwk",
      data: null,
      configurationName: n
    });
    return h.demonstratingProofOfPossessionJwkJson ? JSON.parse(h.demonstratingProofOfPossessionJwkJson) : null;
  }, A = async (h = !0) => {
    let S = (await O(o)({
      type: "getState",
      data: null,
      configurationName: n
    })).state;
    return S || (S = sessionStorage[`oidc.state.${n}`], console.warn("state not found in service worker, using sessionStorage"), h && (await T(S), S = await A(!1))), S;
  }, T = async (h) => (sessionStorage[`oidc.state.${n}`] = h, O(o)({
    type: "setState",
    data: { state: h },
    configurationName: n
  })), g = async (h = !0) => {
    let S = (await O(o)({
      type: "getCodeVerifier",
      data: null,
      configurationName: n
    })).codeVerifier;
    return S || (S = sessionStorage[`oidc.code_verifier.${n}`], console.warn("codeVerifier not found in service worker, using sessionStorage"), h && (await E(S), S = await g(!1))), S;
  }, E = async (h) => (sessionStorage[`oidc.code_verifier.${n}`] = h, O(o)({
    type: "setCodeVerifier",
    data: { codeVerifier: h },
    configurationName: n
  }));
  return {
    clearAsync: i,
    initAsync: r,
    startKeepAliveServiceWorker: () => a(e.service_worker_keep_alive_path),
    setSessionStateAsync: c,
    getSessionStateAsync: l,
    setNonceAsync: d,
    getNonceAsync: u,
    setLoginParams: f,
    getLoginParams: y,
    getStateAsync: A,
    setStateAsync: T,
    getCodeVerifierAsync: g,
    setCodeVerifierAsync: E,
    setDemonstratingProofOfPossessionNonce: p,
    getDemonstratingProofOfPossessionNonce: w,
    setDemonstratingProofOfPossessionJwkAsync: v,
    getDemonstratingProofOfPossessionJwkAsync: P
  };
}, R = {}, Re = (e, n = window.sessionStorage, s) => {
  if (!R[e] && n) {
    const o = n.getItem(e);
    o && (R[e] = JSON.parse(o));
  }
  const t = 1e3 * s;
  return R[e] && R[e].timestamp + t > Date.now() ? R[e].result : null;
}, $e = (e, n, s = window.sessionStorage) => {
  const t = Date.now();
  R[e] = { result: n, timestamp: t }, s && s.setItem(e, JSON.stringify({ result: n, timestamp: t }));
};
function Se(e) {
  return new TextEncoder().encode(e);
}
function Te(e) {
  return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+/g, "");
}
function Ue(e) {
  return encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(s, t) {
    return String.fromCharCode(parseInt(t, 16));
  });
}
const re = (e) => {
  let n = "";
  return e.forEach(function(s) {
    n += String.fromCharCode(s);
  }), Te(n);
};
function de(e) {
  return Te(Ue(e));
}
const Ke = {
  importKeyAlgorithm: {
    name: "ECDSA",
    namedCurve: "P-256",
    hash: { name: "ES256" }
  },
  signAlgorithm: { name: "ECDSA", hash: { name: "SHA-256" } },
  generateKeyAlgorithm: {
    name: "ECDSA",
    namedCurve: "P-256"
  },
  digestAlgorithm: { name: "SHA-256" },
  jwtHeaderAlgorithm: "ES256"
}, Fe = (e) => async (n, s, t, o, i = "dpop+jwt") => {
  switch (n = Object.assign({}, n), s.typ = i, s.alg = o.jwtHeaderAlgorithm, s.alg) {
    case "ES256":
      s.jwk = { kty: n.kty, crv: n.crv, x: n.x, y: n.y };
      break;
    case "RS256":
      s.jwk = { kty: n.kty, n: n.n, e: n.e, kid: s.kid };
      break;
    default:
      throw new Error("Unknown or not implemented JWS algorithm");
  }
  const r = {
    // @ts-ignore
    // JWT "headers" really means JWS "protected headers"
    protected: de(JSON.stringify(s)),
    // @ts-ignore
    // JWT "claims" are really a JSON-defined JWS "payload"
    payload: de(JSON.stringify(t))
  }, a = o.importKeyAlgorithm, c = !0, l = ["sign"], d = await e.crypto.subtle.importKey("jwk", n, a, c, l), u = Se(`${r.protected}.${r.payload}`), _ = o.signAlgorithm, f = await e.crypto.subtle.sign(_, d, u);
  return r.signature = re(new Uint8Array(f)), `${r.protected}.${r.payload}.${r.signature}`;
}, Ve = { sign: Fe }, Me = (e) => async (n) => {
  const s = n, t = !0, o = ["sign", "verify"], i = await e.crypto.subtle.generateKey(s, t, o);
  return await e.crypto.subtle.exportKey("jwk", i.privateKey);
}, Je = (e) => {
  const n = Object.assign({}, e);
  return delete n.d, n.key_ops = ["verify"], n;
}, Be = {
  generate: Me,
  neuter: Je
}, He = (e) => async (n, s) => {
  let t;
  switch (n.kty) {
    case "EC":
      t = '{"crv":"CRV","kty":"EC","x":"X","y":"Y"}'.replace("CRV", n.crv).replace("X", n.x).replace("Y", n.y);
      break;
    case "RSA":
      t = '{"e":"E","kty":"RSA","n":"N"}'.replace("E", n.e).replace("N", n.n);
      break;
    default:
      throw new Error("Unknown or not implemented JWK type");
  }
  const o = await e.crypto.subtle.digest(s, Se(t));
  return re(new Uint8Array(o));
}, je = { thumbprint: He }, Ge = (e) => async (n) => await Be.generate(e)(n), ve = (e) => (n) => async (s, t = "POST", o, i = {}) => {
  const r = {
    // https://www.rfc-editor.org/rfc/rfc9449.html#name-concept
    jti: btoa(qe()),
    htm: t,
    htu: o,
    iat: Math.round(Date.now() / 1e3),
    ...i
  }, a = await je.thumbprint(e)(
    s,
    n.digestAlgorithm
  );
  return await Ve.sign(e)(
    s,
    { kid: a },
    r,
    n
  );
}, qe = () => {
  const e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", n = "0123456789abcdef";
  let s = 0, t = "";
  for (let o = 0; o < 36; o++)
    e[o] !== "-" && e[o] !== "4" && (s = Math.random() * 16 | 0), e[o] === "x" ? t += n[s] : e[o] === "y" ? (s &= 3, s |= 8, t += n[s]) : t += e[o];
  return t;
}, Ee = () => {
  const e = typeof window < "u" && !!window.crypto, n = e && !!window.crypto.subtle;
  return { hasCrypto: e, hasSubtleCrypto: n };
}, Q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", Ye = (e) => {
  const n = [];
  for (let s = 0; s < e.byteLength; s += 1) {
    const t = e[s] % Q.length;
    n.push(Q[t]);
  }
  return n.join("");
}, Z = (e) => {
  const n = new Uint8Array(e), { hasCrypto: s } = Ee();
  if (s)
    window.crypto.getRandomValues(n);
  else
    for (let t = 0; t < e; t += 1)
      n[t] = Math.random() * Q.length | 0;
  return Ye(n);
};
function Xe(e) {
  const n = new ArrayBuffer(e.length), s = new Uint8Array(n);
  for (let t = 0; t < e.length; t++)
    s[t] = e.charCodeAt(t);
  return s;
}
function be(e) {
  return new Promise((n, s) => {
    crypto.subtle.digest("SHA-256", Xe(e)).then(
      (t) => n(re(new Uint8Array(t))),
      (t) => s(t)
    );
  });
}
const ze = (e) => {
  if (e.length < 43 || e.length > 128)
    return Promise.reject(new Error("Invalid code length."));
  const { hasSubtleCrypto: n } = Ee();
  return n ? be(e) : Promise.reject(new Error("window.crypto.subtle is unavailable."));
}, Qe = 60 * 60, Ze = (e) => async (n, s = Qe, t = window.sessionStorage, o = 1e4) => {
  const i = `${n}/.well-known/openid-configuration`, r = `oidc.server:${n}`, a = Re(r, t, s);
  if (a)
    return new se(a);
  const c = await J(e)(i, {}, o);
  if (c.status !== 200)
    return null;
  const l = await c.json();
  return $e(r, l, t), new se(l);
}, J = (e) => async (n, s = {}, t = 1e4, o = 0) => {
  let i;
  try {
    const r = new AbortController();
    setTimeout(() => r.abort(), t), i = await e(n, { ...s, signal: r.signal });
  } catch (r) {
    if (r.name === "AbortError" || r.message === "Network request failed") {
      if (o <= 1)
        return await J(e)(n, s, t, o + 1);
      throw r;
    } else
      throw console.error(r.message), r;
  }
  return i;
}, ee = {
  refresh_token: "refresh_token",
  access_token: "access_token"
}, he = (e) => async (n, s, t = ee.refresh_token, o, i = {}, r = 1e4) => {
  const a = {
    token: s,
    token_type_hint: t,
    client_id: o
  };
  for (const [u, _] of Object.entries(i))
    a[u] === void 0 && (a[u] = _);
  const c = [];
  for (const u in a) {
    const _ = encodeURIComponent(u), f = encodeURIComponent(a[u]);
    c.push(`${_}=${f}`);
  }
  const l = c.join("&");
  return (await J(e)(
    n,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: l
    },
    r
  )).status !== 200 ? { success: !1 } : {
    success: !0
  };
}, en = (e) => async (n, s, t, o, i = {}, r, a = 1e4) => {
  for (const [f, y] of Object.entries(t))
    s[f] === void 0 && (s[f] = y);
  const c = [];
  for (const f in s) {
    const y = encodeURIComponent(f), p = encodeURIComponent(s[f]);
    c.push(`${y}=${p}`);
  }
  const l = c.join("&"), d = await J(e)(
    n,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        ...i
      },
      body: l
    },
    a
  );
  if (d.status !== 200)
    return {
      success: !1,
      status: d.status,
      demonstratingProofOfPossessionNonce: null
    };
  const u = await d.json();
  let _ = null;
  return d.headers.has(G) && (_ = d.headers.get(
    G
  )), {
    success: !0,
    status: d.status,
    data: oe(u, o, r),
    demonstratingProofOfPossessionNonce: _
  };
}, nn = (e, n) => async (s, t) => {
  t = t ? { ...t } : {};
  const o = Z(128), i = await ze(o);
  await e.setCodeVerifierAsync(o), await e.setStateAsync(t.state), t.code_challenge = i, t.code_challenge_method = "S256";
  let r = "";
  if (t)
    for (const [a, c] of Object.entries(t))
      r === "" ? r += "?" : r += "&", r += `${a}=${encodeURIComponent(c)}`;
  n.open(`${s}${r}`);
}, G = "DPoP-Nonce", sn = (e) => async (n, s, t, o, i = 1e4) => {
  s = s ? { ...s } : {}, s.code_verifier = await e.getCodeVerifierAsync();
  const r = [];
  for (const u in s) {
    const _ = encodeURIComponent(u), f = encodeURIComponent(s[u]);
    r.push(`${_}=${f}`);
  }
  const a = r.join("&"), c = await J(fetch)(
    n,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        ...t
      },
      body: a
    },
    i
  );
  if (await Promise.all([e.setCodeVerifierAsync(null), e.setStateAsync(null)]), c.status !== 200)
    return { success: !1, status: c.status };
  let l = null;
  c.headers.has(G) && (l = c.headers.get(
    G
  ));
  const d = await c.json();
  return {
    success: !0,
    data: {
      state: s.state,
      tokens: oe(d, null, o),
      demonstratingProofOfPossessionNonce: l
    }
  };
};
async function ye(e, n, s, t = null) {
  const o = (c) => {
    e.tokens = c;
  }, { tokens: i, status: r } = await B(e)(
    o,
    0,
    n,
    s,
    t
  );
  return await C(e.configuration, e.configurationName) || await I(e.configurationName, e.configuration.storage).setTokens(e.tokens), e.tokens ? i : (await e.destroyAsync(r), null);
}
async function Oe(e, n = !1, s = null, t = null) {
  const o = e.configuration, i = `${o.client_id}_${e.configurationName}_${o.authority}`;
  let r;
  const a = await C(e.configuration, e.configurationName);
  if ((o == null ? void 0 : o.storage) === (window == null ? void 0 : window.sessionStorage) && !a || !navigator.locks)
    r = await ye(e, n, s, t);
  else {
    let c = "retry";
    for (; c === "retry"; )
      c = await navigator.locks.request(
        i,
        { ifAvailable: !0 },
        async (l) => l ? await ye(e, n, s, t) : (e.publishEvent(N.eventNames.syncTokensAsync_lock_not_available, {
          lock: "lock not available"
        }), "retry")
      );
    r = c;
  }
  return r ? (e.timeoutId && (e.timeoutId = M(e, e.tokens.expiresAt, s, t)), e.tokens) : null;
}
const M = (e, n, s = null, t = null) => {
  const o = e.configuration.refresh_time_before_tokens_expiration_in_second;
  return e.timeoutId && U.clearTimeout(e.timeoutId), U.setTimeout(async () => {
    const r = { timeLeft: K(o, n) };
    e.publishEvent(N.eventNames.token_timer, r), await Oe(e, !1, s, t);
  }, 1e3);
}, W = {
  FORCE_REFRESH: "FORCE_REFRESH",
  SESSION_LOST: "SESSION_LOST",
  NOT_CONNECTED: "NOT_CONNECTED",
  TOKENS_VALID: "TOKENS_VALID",
  TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_VALID: "TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_VALID",
  LOGOUT_FROM_ANOTHER_TAB: "LOGOUT_FROM_ANOTHER_TAB",
  REQUIRE_SYNC_TOKENS: "REQUIRE_SYNC_TOKENS"
}, tn = (e) => async (n, s, t, o = !1) => {
  const i = { nonce: null };
  if (!t)
    return { tokens: null, status: "NOT_CONNECTED", nonce: i };
  let r = i;
  const a = await e.initAsync(
    n.authority,
    n.authority_configuration
  ), c = await C(n, s);
  if (c) {
    const { status: u, tokens: _ } = await c.initAsync(
      a,
      "syncTokensAsync",
      n
    );
    if (u === "LOGGED_OUT")
      return { tokens: null, status: "LOGOUT_FROM_ANOTHER_TAB", nonce: i };
    if (u === "SESSIONS_LOST")
      return { tokens: null, status: "SESSIONS_LOST", nonce: i };
    if (!u || !_)
      return { tokens: null, status: "REQUIRE_SYNC_TOKENS", nonce: i };
    if (_.issuedAt !== t.issuedAt) {
      const y = K(
        n.refresh_time_before_tokens_expiration_in_second,
        _.expiresAt
      ) > 0 ? "TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_VALID" : "TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_INVALID", p = await c.getNonceAsync();
      return { tokens: _, status: y, nonce: p };
    }
    r = await c.getNonceAsync();
  } else {
    const u = I(s, n.storage ?? sessionStorage), _ = await u.initAsync();
    let { tokens: f } = _;
    const { status: y } = _;
    if (f && (f = te(f, e.tokens, n.token_renew_mode)), f) {
      if (y === "SESSIONS_LOST")
        return { tokens: null, status: "SESSIONS_LOST", nonce: i };
      if (f.issuedAt !== t.issuedAt) {
        const w = K(
          n.refresh_time_before_tokens_expiration_in_second,
          f.expiresAt
        ) > 0 ? "TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_VALID" : "TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_INVALID", v = await u.getNonceAsync();
        return { tokens: f, status: w, nonce: v };
      }
    } else return { tokens: null, status: "LOGOUT_FROM_ANOTHER_TAB", nonce: i };
    r = await u.getNonceAsync();
  }
  const d = K(
    n.refresh_time_before_tokens_expiration_in_second,
    t.expiresAt
  ) > 0 ? "TOKENS_VALID" : "TOKENS_INVALID";
  return o ? { tokens: t, status: "FORCE_REFRESH", nonce: r } : { tokens: t, status: d, nonce: r };
}, B = (e) => async (n, s = 0, t = !1, o = null, i = null) => {
  if (!navigator.onLine && document.hidden)
    return { tokens: e.tokens, status: "GIVE_UP" };
  let r = 6;
  for (; !navigator.onLine && r > 0; )
    await ie({ milliseconds: 1e3 }), r--, e.publishEvent(k.refreshTokensAsync, {
      message: `wait because navigator is offline try ${r}`
    });
  const a = document.hidden, c = a ? s : s + 1;
  if (s > 4)
    return a ? { tokens: e.tokens, status: "GIVE_UP" } : (n(null), e.publishEvent(k.refreshTokensAsync_error, { message: "refresh token" }), { tokens: null, status: "SESSION_LOST" });
  o || (o = {});
  const l = e.configuration, d = (_, f = null, y = null) => ae(
    e.configurationName,
    e.configuration,
    e.publishEvent.bind(e)
  )(_, f, y), u = async () => {
    try {
      let _;
      const f = await C(l, e.configurationName);
      f ? _ = f.getLoginParams() : _ = I(e.configurationName, l.storage).getLoginParams();
      const y = await d({
        ..._.extras,
        ...o,
        prompt: "none",
        scope: i
      });
      return y ? y.error ? (n(null), e.publishEvent(k.refreshTokensAsync_error, {
        message: "refresh token silent"
      }), { tokens: null, status: "SESSION_LOST" }) : (n(y.tokens), e.publishEvent(N.eventNames.token_renewed, {}), { tokens: y.tokens, status: "LOGGED" }) : (n(null), e.publishEvent(k.refreshTokensAsync_error, {
        message: "refresh token silent not active"
      }), { tokens: null, status: "SESSION_LOST" });
    } catch (_) {
      return console.error(_), e.publishEvent(k.refreshTokensAsync_silent_error, {
        message: "exceptionSilent",
        exception: _.message
      }), await B(e)(
        n,
        c,
        t,
        o,
        i
      );
    }
  };
  try {
    const { status: _, tokens: f, nonce: y } = await tn(e)(
      l,
      e.configurationName,
      e.tokens,
      t
    );
    switch (_) {
      case W.SESSION_LOST:
        return n(null), e.publishEvent(k.refreshTokensAsync_error, {
          message: "refresh token session lost"
        }), { tokens: null, status: "SESSION_LOST" };
      case W.NOT_CONNECTED:
        return n(null), { tokens: null, status: null };
      case W.TOKENS_VALID:
        return n(f), { tokens: f, status: "LOGGED_IN" };
      case W.TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_VALID:
        return n(f), e.publishEvent(N.eventNames.token_renewed, {
          reason: "TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_VALID"
        }), { tokens: f, status: "LOGGED_IN" };
      case W.LOGOUT_FROM_ANOTHER_TAB:
        return n(null), e.publishEvent(k.logout_from_another_tab, {
          status: "session syncTokensAsync"
        }), { tokens: null, status: "LOGGED_OUT" };
      case W.REQUIRE_SYNC_TOKENS:
        return l.token_automatic_renew_mode == V.AutomaticOnlyWhenFetchExecuted && W.FORCE_REFRESH !== _ ? (e.publishEvent(k.tokensInvalidAndWaitingActionsToRefresh, {}), { tokens: e.tokens, status: "GIVE_UP" }) : (e.publishEvent(k.refreshTokensAsync_begin, { tryNumber: s }), await u());
      default: {
        if (l.token_automatic_renew_mode == V.AutomaticOnlyWhenFetchExecuted && W.FORCE_REFRESH !== _)
          return e.publishEvent(k.tokensInvalidAndWaitingActionsToRefresh, {}), { tokens: e.tokens, status: "GIVE_UP" };
        if (e.publishEvent(k.refreshTokensAsync_begin, {
          refreshToken: f.refreshToken,
          status: _,
          tryNumber: s
        }), !f.refreshToken)
          return await u();
        const p = l.client_id, w = l.redirect_uri, v = l.authority, A = { ...l.token_request_extras ? l.token_request_extras : {} };
        for (const [g, E] of Object.entries(o))
          g.endsWith(":token_request") && (A[g.replace(":token_request", "")] = E);
        return await (async () => {
          const g = {
            client_id: p,
            redirect_uri: w,
            grant_type: "refresh_token",
            refresh_token: f.refreshToken
          }, E = await e.initAsync(
            v,
            l.authority_configuration
          ), h = document.hidden ? 1e4 : 3e4 * 10, b = E.tokenEndpoint, S = {};
          l.demonstrating_proof_of_possession && (S.DPoP = await e.generateDemonstrationOfProofOfPossessionAsync(
            f.accessToken,
            b,
            "POST"
          ));
          const m = await en(e.getFetch())(
            b,
            g,
            A,
            f,
            S,
            l.token_renew_mode,
            h
          );
          if (m.success) {
            const { isValid: x, reason: Ce } = pe(
              m.data,
              y.nonce,
              E
            );
            if (!x)
              return n(null), e.publishEvent(k.refreshTokensAsync_error, {
                message: `refresh token return not valid tokens, reason: ${Ce}`
              }), { tokens: null, status: "SESSION_LOST" };
            if (n(m.data), m.demonstratingProofOfPossessionNonce) {
              const ce = await C(l, e.configurationName);
              ce ? await ce.setDemonstratingProofOfPossessionNonce(
                m.demonstratingProofOfPossessionNonce
              ) : await I(e.configurationName, l.storage).setDemonstratingProofOfPossessionNonce(
                m.demonstratingProofOfPossessionNonce
              );
            }
            return e.publishEvent(k.refreshTokensAsync_end, {
              success: m.success
            }), e.publishEvent(N.eventNames.token_renewed, { reason: "REFRESH_TOKEN" }), { tokens: m.data, status: "LOGGED_IN" };
          } else
            return e.publishEvent(k.refreshTokensAsync_silent_error, {
              message: "bad request",
              tokenResponse: m
            }), m.status >= 400 && m.status < 500 ? (n(null), e.publishEvent(k.refreshTokensAsync_error, {
              message: `session lost: ${m.status}`
            }), { tokens: null, status: "SESSION_LOST" }) : await B(e)(
              n,
              c,
              t,
              o,
              i
            );
        })();
      }
    }
  } catch (_) {
    return console.error(_), e.publishEvent(k.refreshTokensAsync_silent_error, {
      message: "exception",
      exception: _.message
    }), new Promise((f, y) => {
      setTimeout(() => {
        B(e)(n, c, t, o, i).then(f).catch(y);
      }, 1e3);
    });
  }
}, ae = (e, n, s) => (t = null, o = null, i = null) => {
  if (!n.silent_redirect_uri || !n.silent_login_uri)
    return Promise.resolve(null);
  try {
    s(k.silentLoginAsync_begin, {});
    let r = "";
    if (o && (t == null && (t = {}), t.state = o), i != null && (t == null && (t = {}), t.scope = i), t != null)
      for (const [u, _] of Object.entries(t))
        r === "" ? r = `?${encodeURIComponent(u)}=${encodeURIComponent(_)}` : r += `&${encodeURIComponent(u)}=${encodeURIComponent(_)}`;
    const a = n.silent_login_uri + r, c = a.indexOf("/", a.indexOf("//") + 2), l = a.substring(0, c), d = document.createElement("iframe");
    return d.width = "0px", d.height = "0px", d.id = `${e}_oidc_iframe`, d.setAttribute("src", a), document.body.appendChild(d), new Promise((u, _) => {
      let f = !1;
      const y = () => {
        window.removeEventListener("message", p), d.remove(), f = !0;
      }, p = (w) => {
        if (w.origin === l && w.source === d.contentWindow) {
          const v = `${e}_oidc_tokens:`, P = `${e}_oidc_error:`, A = `${e}_oidc_exception:`, T = w.data;
          if (T && typeof T == "string" && !f) {
            if (T.startsWith(v)) {
              const g = JSON.parse(w.data.replace(v, ""));
              s(k.silentLoginAsync_end, {}), u(g), y();
            } else if (T.startsWith(P)) {
              const g = JSON.parse(w.data.replace(P, ""));
              s(k.silentLoginAsync_error, g), u({ error: "oidc_" + g.error, tokens: null, sessionState: null }), y();
            } else if (T.startsWith(A)) {
              const g = JSON.parse(w.data.replace(A, ""));
              s(k.silentLoginAsync_error, g), _(new Error(g.error)), y();
            }
          }
        }
      };
      try {
        window.addEventListener("message", p);
        const w = n.silent_login_timeout;
        setTimeout(() => {
          f || (y(), s(k.silentLoginAsync_error, { reason: "timeout" }), _(new Error("timeout")));
        }, w);
      } catch (w) {
        y(), s(k.silentLoginAsync_error, w), _(w);
      }
    });
  } catch (r) {
    throw s(k.silentLoginAsync_error, r), r;
  }
}, on = (e, n, s, t, o) => (i = null, r = void 0) => {
  i = { ...i };
  const a = (l, d, u) => ae(n, s, t.bind(o))(
    l,
    d,
    u
  );
  return (async () => {
    o.timeoutId && U.clearTimeout(o.timeoutId);
    let l;
    i && "state" in i && (l = i.state, delete i.state);
    try {
      const d = s.extras ? { ...s.extras, ...i } : i, u = await a(
        {
          ...d,
          prompt: "none"
        },
        l,
        r
      );
      if (u)
        return o.tokens = u.tokens, t(k.token_acquired, {}), o.timeoutId = M(o, o.tokens.expiresAt, i, r), {};
    } catch (d) {
      return d;
    }
  })();
}, rn = (e, n, s) => (t, o, i, r = !1) => {
  const a = (c, l = void 0, d = void 0) => ae(e.configurationName, s, e.publishEvent.bind(e))(
    c,
    l,
    d
  );
  return new Promise((c, l) => {
    if (s.silent_login_uri && s.silent_redirect_uri && s.monitor_session && t && i && !r) {
      const d = () => {
        e.checkSessionIFrame.stop();
        const u = e.tokens;
        if (u === null)
          return;
        const _ = u.idToken, f = u.idTokenPayload;
        return a({
          prompt: "none",
          id_token_hint: _,
          scope: s.scope || "openid"
        }).then((y) => {
          if (y.error)
            throw new Error(y.error);
          const p = y.tokens.idTokenPayload;
          if (f.sub === p.sub) {
            const w = y.sessionState;
            e.checkSessionIFrame.start(y.sessionState), f.sid === p.sid ? console.debug(
              "SessionMonitor._callback: Same sub still logged in at OP, restarting check session iframe; session_state:",
              w
            ) : console.debug(
              "SessionMonitor._callback: Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:",
              w
            );
          } else
            console.debug(
              "SessionMonitor._callback: Different subject signed into OP:",
              p.sub
            );
        }).catch(async (y) => {
          console.warn(
            "SessionMonitor._callback: Silent login failed, logging out other tabs:",
            y
          );
          for (const [, p] of Object.entries(n))
            await p.logoutOtherTabAsync(s.client_id, f.sub);
        });
      };
      e.checkSessionIFrame = new Ne(
        d,
        o,
        t
      ), e.checkSessionIFrame.load().then(() => {
        e.checkSessionIFrame.start(i), c(e.checkSessionIFrame);
      }).catch((u) => {
        l(u);
      });
    } else
      c(null);
  });
}, an = (e) => !!(e.os === "iOS" && e.osVersion.startsWith("12") || e.os === "Mac OS X" && e.osVersion.startsWith("10_15_6")), cn = (e) => {
  const n = e.appVersion, s = e.userAgent, t = "-";
  let o = t;
  const i = [
    { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
    { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
    { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
    { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
    { s: "Windows Vista", r: /Windows NT 6.0/ },
    { s: "Windows Server 2003", r: /Windows NT 5.2/ },
    { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
    { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
    { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
    { s: "Windows 98", r: /(Windows 98|Win98)/ },
    { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
    { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
    { s: "Windows CE", r: /Windows CE/ },
    { s: "Windows 3.11", r: /Win16/ },
    { s: "Android", r: /Android/ },
    { s: "Open BSD", r: /OpenBSD/ },
    { s: "Sun OS", r: /SunOS/ },
    { s: "Chrome OS", r: /CrOS/ },
    { s: "Linux", r: /(Linux|X11(?!.*CrOS))/ },
    { s: "iOS", r: /(iPhone|iPad|iPod)/ },
    { s: "Mac OS X", r: /Mac OS X/ },
    { s: "Mac OS", r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
    { s: "QNX", r: /QNX/ },
    { s: "UNIX", r: /UNIX/ },
    { s: "BeOS", r: /BeOS/ },
    { s: "OS/2", r: /OS\/2/ },
    {
      s: "Search Bot",
      r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
    }
  ];
  for (const a in i) {
    const c = i[a];
    if (c.r.test(s)) {
      o = c.s;
      break;
    }
  }
  let r = t;
  switch (/Windows/.test(o) && (r = /Windows (.*)/.exec(o)[1], o = "Windows"), o) {
    case "Mac OS":
    case "Mac OS X":
    case "Android":
      r = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([._\d]+)/.exec(s)[1];
      break;
    case "iOS": {
      const a = /OS (\d+)_(\d+)_?(\d+)?/.exec(n);
      a != null && a.length > 2 && (r = a[1] + "." + a[2] + "." + (parseInt(a[3]) | 0));
      break;
    }
  }
  return {
    os: o,
    osVersion: r
  };
};
function ln() {
  const e = navigator.userAgent;
  let n, s = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(s[1]))
    return n = /\brv[ :]+(\d+)/g.exec(e) || [], { name: "ie", version: n[1] || "" };
  if (s[1] === "Chrome" && (n = e.match(/\bOPR|Edge\/(\d+)/), n != null)) {
    let t = n[1];
    if (!t) {
      const o = e.split(n[0] + "/");
      o.length > 1 && (t = o[1]);
    }
    return { name: "opera", version: t };
  }
  return s = s[2] ? [s[1], s[2]] : [navigator.appName, navigator.appVersion, "-?"], (n = e.match(/version\/(\d+)/i)) != null && s.splice(1, 1, n[1]), {
    name: s[0].toLowerCase(),
    version: s[1]
  };
}
const un = () => {
  const { name: e, version: n } = ln();
  if (e === "chrome" && parseInt(n) <= 70 || e === "opera" && (!n || parseInt(n.split(".")[0]) < 80) || e === "ie")
    return !1;
  const s = cn(navigator);
  return !an(s);
}, _n = async (e) => {
  let n;
  if (e.tokens != null)
    return !1;
  e.publishEvent(k.tryKeepExistingSessionAsync_begin, {});
  try {
    const s = e.configuration, t = await e.initAsync(
      s.authority,
      s.authority_configuration
    );
    if (n = await C(s, e.configurationName), n) {
      const { tokens: o } = await n.initAsync(
        t,
        "tryKeepExistingSessionAsync",
        s
      );
      if (o) {
        n.startKeepAliveServiceWorker(), e.tokens = o;
        const i = n.getLoginParams(e.configurationName);
        e.timeoutId = M(
          e,
          e.tokens.expiresAt,
          i.extras,
          i.scope
        );
        const r = await n.getSessionStateAsync();
        return await e.startCheckSessionAsync(
          t.checkSessionIframe,
          s.client_id,
          r
        ), s.preload_user_info && await e.userInfoAsync(), e.publishEvent(k.tryKeepExistingSessionAsync_end, {
          success: !0,
          message: "tokens inside ServiceWorker are valid"
        }), !0;
      }
      e.publishEvent(k.tryKeepExistingSessionAsync_end, {
        success: !1,
        message: "no exiting session found"
      });
    } else {
      s.service_worker_relative_url && e.publishEvent(k.service_worker_not_supported_by_browser, {
        message: "service worker is not supported by this browser"
      });
      const o = I(e.configurationName, s.storage ?? sessionStorage), { tokens: i } = await o.initAsync();
      if (i) {
        e.tokens = te(i, null, s.token_renew_mode);
        const r = o.getLoginParams();
        e.timeoutId = M(
          e,
          e.tokens.expiresAt,
          r.extras,
          r.scope
        );
        const a = await o.getSessionStateAsync();
        return await e.startCheckSessionAsync(
          t.checkSessionIframe,
          s.client_id,
          a
        ), s.preload_user_info && await e.userInfoAsync(), e.publishEvent(k.tryKeepExistingSessionAsync_end, {
          success: !0,
          message: "tokens inside storage are valid"
        }), !0;
      }
    }
    return e.publishEvent(k.tryKeepExistingSessionAsync_end, {
      success: !1,
      message: n ? "service worker sessions not retrieved" : "session storage sessions not retrieved"
    }), !1;
  } catch (s) {
    return console.error(s), n && await n.clearAsync(), e.publishEvent(
      k.tryKeepExistingSessionAsync_error,
      "tokens inside ServiceWorker are invalid"
    ), !1;
  }
}, Pe = (e) => {
  const n = e.match(
    // eslint-disable-next-line no-useless-escape
    /^([a-z][\w-]+\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/
  );
  if (!n)
    throw new Error("Invalid URL");
  let s = n[6], t = n[7];
  if (t) {
    const o = t.split("?");
    o.length === 2 && (t = o[0], s = o[1]);
  }
  return s.startsWith("?") && (s = s.slice(1)), n && {
    href: e,
    protocol: n[1],
    host: n[2],
    hostname: n[3],
    port: n[4],
    path: n[5],
    search: s,
    hash: t
  };
}, vn = (e) => {
  const n = Pe(e);
  let { path: s } = n;
  s.endsWith("/") && (s = s.slice(0, -1));
  let { hash: t } = n;
  return t === "#_=_" && (t = ""), t && (s += t), s;
}, ne = (e) => {
  const n = Pe(e), { search: s } = n;
  return fn(s);
}, fn = (e) => {
  const n = {};
  let s, t, o;
  const i = e.split("&");
  for (t = 0, o = i.length; t < o; t++)
    s = i[t].split("="), n[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  return n;
}, dn = (e, n, s, t, o) => (i = void 0, r = null, a = !1, c = void 0) => {
  const l = r;
  return r = { ...r }, (async () => {
    const u = i || o.getPath();
    if ("state" in r || (r.state = Z(16)), s(k.loginAsync_begin, {}), r)
      for (const _ of Object.keys(r))
        _.endsWith(":token_request") && delete r[_];
    try {
      const _ = a ? n.silent_redirect_uri : n.redirect_uri;
      c || (c = n.scope);
      const f = n.extras ? { ...n.extras, ...r } : r;
      f.nonce || (f.nonce = Z(12));
      const y = { nonce: f.nonce }, p = await C(n, e), w = await t(
        n.authority,
        n.authority_configuration
      );
      let v;
      if (p)
        p.setLoginParams({ callbackPath: u, extras: l, scope: c }), await p.initAsync(w, "loginAsync", n), await p.setNonceAsync(y), p.startKeepAliveServiceWorker(), v = p;
      else {
        const A = I(e, n.storage ?? sessionStorage);
        A.setLoginParams({ callbackPath: u, extras: l, scope: c }), await A.setNonceAsync(y), v = A;
      }
      const P = {
        client_id: n.client_id,
        redirect_uri: _,
        scope: c,
        response_type: "code",
        ...f
      };
      await nn(v, o)(
        w.authorizationEndpoint,
        P
      );
    } catch (_) {
      throw s(k.loginAsync_error, _), _;
    }
  })();
}, hn = (e) => async (n = !1) => {
  try {
    e.publishEvent(k.loginCallbackAsync_begin, {});
    const s = e.configuration, t = s.client_id, o = n ? s.silent_redirect_uri : s.redirect_uri, i = s.authority, r = s.token_request_timeout, a = await e.initAsync(
      i,
      s.authority_configuration
    ), c = e.location.getCurrentHref(), l = ne(c), d = l.session_state, u = await C(s, e.configurationName);
    let _, f, y, p;
    if (u)
      await u.initAsync(a, "loginCallbackAsync", s), await u.setSessionStateAsync(d), f = await u.getNonceAsync(), y = u.getLoginParams(), p = await u.getStateAsync(), u.startKeepAliveServiceWorker(), _ = u;
    else {
      const m = I(
        e.configurationName,
        s.storage ?? sessionStorage
      );
      await m.setSessionStateAsync(d), f = await m.getNonceAsync(), y = m.getLoginParams(), p = await m.getStateAsync(), _ = m;
    }
    if (l.error || l.error_description)
      throw new Error(
        `Error from OIDC server: ${l.error} - ${l.error_description}`
      );
    if (l.iss && l.iss !== a.issuer)
      throw console.error(), new Error(
        `Issuer not valid (expected: ${a.issuer}, received: ${l.iss})`
      );
    if (l.state && l.state !== p)
      throw new Error(`State not valid (expected: ${p}, received: ${l.state})`);
    const w = {
      code: l.code,
      grant_type: "authorization_code",
      client_id: s.client_id,
      redirect_uri: o
    }, v = {};
    if (s.token_request_extras)
      for (const [m, x] of Object.entries(s.token_request_extras))
        v[m] = x;
    if (y != null && y.extras)
      for (const [m, x] of Object.entries(y.extras))
        m.endsWith(":token_request") && (v[m.replace(":token_request", "")] = x);
    const P = a.tokenEndpoint, A = {};
    if (s.demonstrating_proof_of_possession)
      if (u)
        A.DPoP = `DPOP_SECURED_BY_OIDC_SERVICE_WORKER_${e.configurationName}`;
      else {
        const m = await Ge(window)(
          s.demonstrating_proof_of_possession_configuration.generateKeyAlgorithm
        );
        await I(e.configurationName, s.storage).setDemonstratingProofOfPossessionJwkAsync(m), A.DPoP = await ve(window)(
          s.demonstrating_proof_of_possession_configuration
        )(m, "POST", P);
      }
    const T = await sn(_)(
      P,
      { ...w, ...v },
      A,
      e.configuration.token_renew_mode,
      r
    );
    if (!T.success)
      throw new Error("Token request failed");
    let g;
    const E = T.data.tokens, h = T.data.demonstratingProofOfPossessionNonce;
    if (T.data.state !== v.state)
      throw new Error("state is not valid");
    const { isValid: b, reason: S } = pe(
      E,
      f.nonce,
      a
    );
    if (!b)
      throw new Error(`Tokens are not OpenID valid, reason: ${S}`);
    if (u) {
      if (E.refreshToken && !E.refreshToken.includes("SECURED_BY_OIDC_SERVICE_WORKER"))
        throw new Error("Refresh token should be hidden by service worker");
      if (h && (E != null && E.accessToken.includes("SECURED_BY_OIDC_SERVICE_WORKER")))
        throw new Error(
          "Demonstration of proof of possession require Access token not hidden by service worker"
        );
    }
    if (u)
      await u.initAsync(a, "syncTokensAsync", s), g = u.getLoginParams(), h && await u.setDemonstratingProofOfPossessionNonce(
        h
      );
    else {
      const m = I(e.configurationName, s.storage);
      g = m.getLoginParams(), h && await m.setDemonstratingProofOfPossessionNonce(h);
    }
    return await e.startCheckSessionAsync(
      a.checkSessionIframe,
      t,
      d,
      n
    ), e.publishEvent(k.loginCallbackAsync_end, {}), {
      tokens: E,
      state: "request.state",
      callbackPath: g.callbackPath,
      scope: l.scope,
      extras: g.extras
    };
  } catch (s) {
    throw console.error(s), e.publishEvent(k.loginCallbackAsync_error, s), s;
  }
}, ge = {
  access_token: "access_token",
  refresh_token: "refresh_token"
}, X = (e, n) => {
  const s = {};
  if (e) {
    for (const [t, o] of Object.entries(e))
      if (t.endsWith(n)) {
        const i = t.replace(n, "");
        s[i] = o;
      }
    return s;
  }
  return s;
}, yn = (e) => {
  const n = {};
  if (e) {
    for (const [s, t] of Object.entries(e))
      s.includes(":") || (n[s] = t);
    return n;
  }
  return n;
}, gn = (e) => async (n) => {
  U.clearTimeout(e.timeoutId), e.timeoutId = null, e.checkSessionIFrame && e.checkSessionIFrame.stop();
  const s = await C(e.configuration, e.configurationName);
  s ? await s.clearAsync(n) : await I(e.configurationName, e.configuration.storage).clearAsync(n), e.tokens = null, e.userInfo = null;
}, kn = (e, n, s, t, o) => async (i = void 0, r = null) => {
  var v, P;
  const a = e.configuration, c = await e.initAsync(
    a.authority,
    a.authority_configuration
  );
  i && typeof i != "string" && (i = void 0, t.warn("callbackPathOrUrl path is not a string"));
  const l = i ?? o.getPath();
  let d = !1;
  i && (d = i.includes("https://") || i.includes("http://"));
  const u = d ? i : o.getOrigin() + l, _ = e.tokens ? e.tokens.idToken : "";
  try {
    const A = c.revocationEndpoint;
    if (A) {
      const T = [], g = e.tokens ? e.tokens.accessToken : null;
      if (g && a.logout_tokens_to_invalidate.includes(ge.access_token)) {
        const h = X(r, ":revoke_access_token"), b = he(s)(
          A,
          g,
          ee.access_token,
          a.client_id,
          h
        );
        T.push(b);
      }
      const E = e.tokens ? e.tokens.refreshToken : null;
      if (E && a.logout_tokens_to_invalidate.includes(ge.refresh_token)) {
        const h = X(r, ":revoke_refresh_token"), b = he(s)(
          A,
          E,
          ee.refresh_token,
          a.client_id,
          h
        );
        T.push(b);
      }
      T.length > 0 && await Promise.all(T);
    }
  } catch (A) {
    t.warn(
      "logoutAsync: error when revoking tokens, if the error persist, you ay configure property logout_tokens_to_invalidate from configuration to avoid this error"
    ), t.warn(A);
  }
  const f = ((P = (v = e.tokens) == null ? void 0 : v.idTokenPayload) == null ? void 0 : P.sub) ?? null;
  await e.destroyAsync("LOGGED_OUT");
  for (const [, A] of Object.entries(n))
    A !== e ? await e.logoutSameTabAsync(e.configuration.client_id, f) : e.publishEvent(k.logout_from_same_tab, {});
  const y = X(r, ":oidc");
  if (y && y.no_reload === "true")
    return;
  const w = yn(r);
  if (c.endSessionEndpoint) {
    "id_token_hint" in w || (w.id_token_hint = _), !("post_logout_redirect_uri" in w) && i !== null && (w.post_logout_redirect_uri = u);
    let A = "";
    for (const [T, g] of Object.entries(w))
      g != null && (A === "" ? A += "?" : A += "&", A += `${T}=${encodeURIComponent(g)}`);
    o.open(`${c.endSessionEndpoint}${A}`);
  } else
    o.reload();
}, Ie = (e, n, s = !1) => async (...t) => {
  var f;
  const [o, i, ...r] = t, a = i ? { ...i } : { method: "GET" };
  let c = new Headers();
  a.headers && (c = a.headers instanceof Headers ? a.headers : new Headers(a.headers));
  const l = {
    getTokens: () => n.tokens,
    configuration: {
      token_automatic_renew_mode: n.configuration.token_automatic_renew_mode,
      refresh_time_before_tokens_expiration_in_second: n.configuration.refresh_time_before_tokens_expiration_in_second
    },
    renewTokensAsync: n.renewTokensAsync.bind(n)
  }, d = await me(l), u = (f = d == null ? void 0 : d.tokens) == null ? void 0 : f.accessToken;
  if (c.has("Accept") || c.set("Accept", "application/json"), u) {
    if (n.configuration.demonstrating_proof_of_possession && s) {
      const y = await n.generateDemonstrationOfProofOfPossessionAsync(
        u,
        o.toString(),
        a.method
      );
      c.set("Authorization", `DPoP ${u}`), c.set("DPoP", y);
    } else
      c.set("Authorization", `Bearer ${u}`);
    a.credentials || (a.credentials = "same-origin");
  }
  const _ = { ...a, headers: c };
  return await e(o, _, ...r);
}, mn = (e) => async (n = !1, s = !1) => {
  if (e.userInfo != null && !n)
    return e.userInfo;
  const t = e.configuration, i = (await e.initAsync(
    t.authority,
    t.authority_configuration
  )).userInfoEndpoint, a = await (async () => {
    const l = await Ie(fetch, e, s)(i);
    return l.status !== 200 ? null : l.json();
  })();
  return e.userInfo = a, a;
}, pn = () => fetch;
class se {
  constructor(n) {
    this.authorizationEndpoint = n.authorization_endpoint, this.tokenEndpoint = n.token_endpoint, this.revocationEndpoint = n.revocation_endpoint, this.userInfoEndpoint = n.userinfo_endpoint, this.checkSessionIframe = n.check_session_iframe, this.issuer = n.issuer, this.endSessionEndpoint = n.end_session_endpoint;
  }
}
const L = {}, wn = (e, n = new dist_H()) => (s, t = "default") => (L[t] || (L[t] = new N(s, t, e, n)), L[t]), An = async (e) => {
  const { parsedTokens: n, callbackPath: s, extras: t, scope: o } = await e.loginCallbackAsync();
  return e.timeoutId = M(e, n.expiresAt, t, o), { callbackPath: s };
}, Sn = (e) => Math.floor(Math.random() * e), F = class F {
  constructor(n, s = "default", t, o = new dist_H()) {
    this.initPromise = null, this.tryKeepExistingSessionPromise = null, this.loginPromise = null, this.loginCallbackPromise = null, this.loginCallbackWithAutoTokensRenewPromise = null, this.userInfoPromise = null, this.renewTokensPromise = null, this.logoutPromise = null;
    let i = n.silent_login_uri;
    n.silent_redirect_uri && !n.silent_login_uri && (i = `${n.silent_redirect_uri.replace("-callback", "").replace("callback", "")}-login`);
    let r = n.refresh_time_before_tokens_expiration_in_second ?? 120;
    r > 60 && (r = r - Math.floor(Math.random() * 40)), this.location = o ?? new dist_H(), this.configuration = {
      ...n,
      silent_login_uri: i,
      token_automatic_renew_mode: n.token_automatic_renew_mode ?? V.AutomaticBeforeTokenExpiration,
      monitor_session: n.monitor_session ?? !1,
      refresh_time_before_tokens_expiration_in_second: r,
      silent_login_timeout: n.silent_login_timeout ?? 12e3,
      token_renew_mode: n.token_renew_mode ?? z.access_token_or_id_token_invalid,
      demonstrating_proof_of_possession: n.demonstrating_proof_of_possession ?? !1,
      authority_timeout_wellknowurl_in_millisecond: n.authority_timeout_wellknowurl_in_millisecond ?? 1e4,
      logout_tokens_to_invalidate: n.logout_tokens_to_invalidate ?? [
        "access_token",
        "refresh_token"
      ],
      service_worker_activate: n.service_worker_activate ?? un,
      demonstrating_proof_of_possession_configuration: n.demonstrating_proof_of_possession_configuration ?? Ke,
      preload_user_info: n.preload_user_info ?? !1
    }, this.getFetch = t ?? pn, this.configurationName = s, this.tokens = null, this.userInfo = null, this.events = [], this.timeoutId = null, this.loginCallbackWithAutoTokensRenewAsync.bind(this), this.initAsync.bind(this), this.loginCallbackAsync.bind(this), this.subscribeEvents.bind(this), this.removeEventSubscription.bind(this), this.publishEvent.bind(this), this.destroyAsync.bind(this), this.logoutAsync.bind(this), this.renewTokensAsync.bind(this), this.initAsync(this.configuration.authority, this.configuration.authority_configuration);
  }
  subscribeEvents(n) {
    const s = Sn(9999999999999).toString();
    return this.events.push({ id: s, func: n }), s;
  }
  removeEventSubscription(n) {
    const s = this.events.filter((t) => t.id !== n);
    this.events = s;
  }
  publishEvent(n, s) {
    this.events.forEach((t) => {
      t.func(n, s);
    });
  }
  static get(n = "default") {
    const s = typeof process > "u";
    if (!Object.prototype.hasOwnProperty.call(L, n) && s)
      throw Error(`OIDC library does seem initialized.
Please checkout that you are using OIDC hook inside a <OidcProvider configurationName="${n}"></OidcProvider> component.`);
    return L[n];
  }
  _silentLoginCallbackFromIFrame() {
    if (this.configuration.silent_redirect_uri && this.configuration.silent_login_uri) {
      const n = this.location, s = ne(n.getCurrentHref());
      window.parent.postMessage(
        `${this.configurationName}_oidc_tokens:${JSON.stringify({ tokens: this.tokens, sessionState: s.session_state })}`,
        n.getOrigin()
      );
    }
  }
  _silentLoginErrorCallbackFromIFrame(n = null) {
    if (this.configuration.silent_redirect_uri && this.configuration.silent_login_uri) {
      const s = this.location, t = ne(s.getCurrentHref());
      t.error ? window.parent.postMessage(
        `${this.configurationName}_oidc_error:${JSON.stringify({ error: t.error })}`,
        s.getOrigin()
      ) : window.parent.postMessage(
        `${this.configurationName}_oidc_exception:${JSON.stringify({ error: n == null ? "" : n.toString() })}`,
        s.getOrigin()
      );
    }
  }
  async silentLoginCallbackAsync() {
    try {
      await this.loginCallbackAsync(!0), this._silentLoginCallbackFromIFrame();
    } catch (n) {
      console.error(n), this._silentLoginErrorCallbackFromIFrame(n);
    }
  }
  async initAsync(n, s) {
    if (this.initPromise !== null)
      return this.initPromise;
    const t = async () => {
      if (s != null)
        return new se({
          authorization_endpoint: s.authorization_endpoint,
          end_session_endpoint: s.end_session_endpoint,
          revocation_endpoint: s.revocation_endpoint,
          token_endpoint: s.token_endpoint,
          userinfo_endpoint: s.userinfo_endpoint,
          check_session_iframe: s.check_session_iframe,
          issuer: s.issuer
        });
      const i = await C(this.configuration, this.configurationName) ? window.sessionStorage : null;
      return await Ze(this.getFetch())(
        n,
        this.configuration.authority_time_cache_wellknowurl_in_second ?? 60 * 60,
        i,
        this.configuration.authority_timeout_wellknowurl_in_millisecond
      );
    };
    return this.initPromise = t(), this.initPromise.finally(() => {
      this.initPromise = null;
    });
  }
  async tryKeepExistingSessionAsync() {
    return this.tryKeepExistingSessionPromise !== null ? this.tryKeepExistingSessionPromise : (this.tryKeepExistingSessionPromise = _n(this), this.tryKeepExistingSessionPromise.finally(() => {
      this.tryKeepExistingSessionPromise = null;
    }));
  }
  async startCheckSessionAsync(n, s, t, o = !1) {
    await rn(this, L, this.configuration)(
      n,
      s,
      t,
      o
    );
  }
  async loginAsync(n = void 0, s = null, t = !1, o = void 0, i = !1) {
    return this.logoutPromise && await this.logoutPromise, this.loginPromise !== null ? this.loginPromise : (i ? this.loginPromise = on(
      window,
      this.configurationName,
      this.configuration,
      this.publishEvent.bind(this),
      this
    )(s, o) : this.loginPromise = dn(
      this.configurationName,
      this.configuration,
      this.publishEvent.bind(this),
      this.initAsync.bind(this),
      this.location
    )(n, s, t, o), this.loginPromise.finally(() => {
      this.loginPromise = null;
    }));
  }
  async loginCallbackAsync(n = !1) {
    if (this.loginCallbackPromise !== null)
      return this.loginCallbackPromise;
    const s = async () => {
      const t = await hn(this)(n), o = t.tokens;
      return this.tokens = o, await C(this.configuration, this.configurationName) || I(this.configurationName, this.configuration.storage).setTokens(o), this.publishEvent(F.eventNames.token_acquired, o), this.configuration.preload_user_info && await this.userInfoAsync(), {
        parsedTokens: o,
        state: t.state,
        callbackPath: t.callbackPath,
        scope: t.scope,
        extras: t.extras
      };
    };
    return this.loginCallbackPromise = s(), this.loginCallbackPromise.finally(() => {
      this.loginCallbackPromise = null;
    });
  }
  async generateDemonstrationOfProofOfPossessionAsync(n, s, t, o = {}) {
    const i = this.configuration, r = {
      ath: await be(n),
      ...o
    };
    if (await C(i, this.configurationName))
      return `DPOP_SECURED_BY_OIDC_SERVICE_WORKER_${this.configurationName}#tabId=${Ae(this.configurationName)}`;
    const c = I(this.configurationName, i.storage), l = await c.getDemonstratingProofOfPossessionJwkAsync(), d = c.getDemonstratingProofOfPossessionNonce();
    return d && (r.nonce = d), await ve(window)(
      i.demonstrating_proof_of_possession_configuration
    )(l, t, s, r);
  }
  loginCallbackWithAutoTokensRenewAsync() {
    return this.loginCallbackWithAutoTokensRenewPromise !== null ? this.loginCallbackWithAutoTokensRenewPromise : (this.loginCallbackWithAutoTokensRenewPromise = An(this), this.loginCallbackWithAutoTokensRenewPromise.finally(() => {
      this.loginCallbackWithAutoTokensRenewPromise = null;
    }));
  }
  userInfoAsync(n = !1, s = !1) {
    return this.userInfoPromise !== null ? this.userInfoPromise : (this.userInfoPromise = mn(this)(n, s), this.userInfoPromise.finally(() => {
      this.userInfoPromise = null;
    }));
  }
  async renewTokensAsync(n = null, s = null) {
    if (this.renewTokensPromise !== null)
      return this.renewTokensPromise;
    if (this.timeoutId)
      return U.clearTimeout(this.timeoutId), this.renewTokensPromise = Oe(this, !0, n, s), this.renewTokensPromise.finally(() => {
        this.renewTokensPromise = null;
      });
  }
  async destroyAsync(n) {
    return await gn(this)(n);
  }
  async logoutSameTabAsync(n, s) {
    this.configuration.monitor_session && this.configuration.client_id === n && s && this.tokens && this.tokens.idTokenPayload && this.tokens.idTokenPayload.sub === s && (await this.destroyAsync("LOGGED_OUT"), this.publishEvent(k.logout_from_same_tab, { mmessage: "SessionMonitor", sub: s }));
  }
  async logoutOtherTabAsync(n, s) {
    this.configuration.monitor_session && this.configuration.client_id === n && s && this.tokens && this.tokens.idTokenPayload && this.tokens.idTokenPayload.sub === s && (await this.destroyAsync("LOGGED_OUT"), this.publishEvent(k.logout_from_another_tab, { message: "SessionMonitor", sub: s }));
  }
  async logoutAsync(n = void 0, s = null) {
    return this.logoutPromise ? this.logoutPromise : (this.logoutPromise = kn(
      this,
      L,
      this.getFetch(),
      console,
      this.location
    )(n, s), this.logoutPromise.finally(() => {
      this.logoutPromise = null;
    }));
  }
};
F.getOrCreate = (n, s) => (t, o = "default") => wn(n, s)(t, o), F.eventNames = k;
let N = F;
const $ = class $ {
  constructor(n) {
    this._oidc = n;
  }
  subscribeEvents(n) {
    return this._oidc.subscribeEvents(n);
  }
  removeEventSubscription(n) {
    this._oidc.removeEventSubscription(n);
  }
  publishEvent(n, s) {
    this._oidc.publishEvent(n, s);
  }
  static get(n = "default") {
    return new $(N.get(n));
  }
  tryKeepExistingSessionAsync() {
    return this._oidc.tryKeepExistingSessionAsync();
  }
  loginAsync(n = void 0, s = null, t = !1, o = void 0, i = !1) {
    return this._oidc.loginAsync(n, s, t, o, i);
  }
  logoutAsync(n = void 0, s = null) {
    return this._oidc.logoutAsync(n, s);
  }
  silentLoginCallbackAsync() {
    return this._oidc.silentLoginCallbackAsync();
  }
  renewTokensAsync(n = null, s = null) {
    return this._oidc.renewTokensAsync(n, s);
  }
  loginCallbackAsync() {
    return this._oidc.loginCallbackWithAutoTokensRenewAsync();
  }
  get tokens() {
    return this._oidc.tokens;
  }
  get configuration() {
    return this._oidc.configuration;
  }
  async generateDemonstrationOfProofOfPossessionAsync(n, s, t, o = {}) {
    return this._oidc.generateDemonstrationOfProofOfPossessionAsync(
      n,
      s,
      t,
      o
    );
  }
  async getValidTokenAsync(n = 200, s = 50) {
    const t = this._oidc, o = {
      getTokens: () => t.tokens,
      configuration: {
        token_automatic_renew_mode: t.configuration.token_automatic_renew_mode,
        refresh_time_before_tokens_expiration_in_second: t.configuration.refresh_time_before_tokens_expiration_in_second
      },
      renewTokensAsync: t.renewTokensAsync.bind(t)
    };
    return me(o, n, s);
  }
  fetchWithTokens(n, s = !1) {
    return Ie(n, this._oidc, s);
  }
  async userInfoAsync(n = !1, s = !1) {
    return this._oidc.userInfoAsync(n, s);
  }
  userInfo() {
    return this._oidc.userInfo;
  }
};
$.getOrCreate = (n, s = new dist_H()) => (t, o = "default") => new $(N.getOrCreate(n, s)(t, o)), $.eventNames = N.eventNames;
let ke = $;


// EXTERNAL MODULE: consume shared module (default) react@^17.0.0 || ^18.0.0 || ^19.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(45500);
;// ../node_modules/.pnpm/@axa-fr+react-oidc@7.25.13_react@18.3.1/node_modules/@axa-fr/react-oidc/dist/index.js




const x = "default", dist_te = (t, s, e = !1) => async (...n) => await s().fetchWithTokens(t, e)(...n), dist_Oe = (t = null, s = x, e = !1) => (n) => (o) => {
  const { fetch: c } = dist_ne(
    t || o.fetch,
    s,
    e
  );
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(n, { ...o, fetch: c });
}, dist_ne = (t = null, s = x, e = !1) => {
  const n = t || window.fetch, o = ke.get;
  return { fetch: (0,index_js_.useCallback)(
    (l, a) => dist_te(
      n,
      () => o(s),
      e
    )(l, a),
    [n, s]
  ) };
}, dist_W = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "oidc-authenticating", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "oidc-authenticating__container", children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("h1", { className: "oidc-authenticating__title", children: "Error authentication" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "oidc-authenticating__content", children: "An error occurred during authentication." })
] }) }), dist_se = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "oidc-authenticating", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "oidc-authenticating__container", children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("h1", { className: "oidc-authenticating__title", children: "Authentication in progress" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "oidc-authenticating__content", children: "You will be redirected to the login page." })
] }) }), dist_oe = () => Math.random().toString(36).slice(2, 8), ce = (t, s) => (e, n) => {
  if (typeof t.CustomEvent == "function")
    return new t.CustomEvent(e, n);
  const o = n || { bubbles: !1, cancelable: !1, detail: void 0 }, c = s.createEvent("CustomEvent");
  return c.initCustomEvent(
    e,
    o.bubbles,
    o.cancelable,
    o.detail
  ), c.prototype = t.Event.prototype, c;
}, dist_re = (t, s, e) => ({
  replaceState: (n, o) => {
    const c = e(), l = o || t.history.state;
    t.history.replaceState({ key: c, state: l }, null, n), t.dispatchEvent(s("popstate"));
  }
}), dist_ie = () => dist_re(window, ce(window, document), dist_oe), dist_R = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "oidc-callback", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "oidc-callback__container", children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("h1", { className: "oidc-callback__title", children: "Authentication complete" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "oidc-callback__content", children: "You will be redirected to your application." })
] }) }), dist_ae = ({
  callBackError: t,
  callBackSuccess: s,
  configurationName: e,
  withCustomHistory: n
}) => {
  const [o, c] = (0,index_js_.useState)(!1);
  (0,index_js_.useEffect)(() => {
    let d = !0;
    return (async () => {
      const _ = ke.get;
      try {
        const { callbackPath: h } = await _(e).loginCallbackAsync();
        (n ? n() : dist_ie()).replaceState(h || "/");
      } catch (h) {
        d && (console.warn(h), c(!0));
      }
    })(), () => {
      d = !1;
    };
  }, []);
  const l = t || dist_W, a = s || dist_R;
  return o ? /* @__PURE__ */ (0,jsx_runtime.jsx)(l, { configurationName: e }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(a, { configurationName: e });
}, dist_le = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: "oidc-loading", children: "Loading" }), dist_de = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "oidc-serviceworker", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "oidc-serviceworker__container", children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("h1", { className: "oidc-serviceworker__title", children: "Unable to authenticate on this browser" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "oidc-serviceworker__content", children: "Your browser is not secure enough to make authentication work. Try updating your browser or use a newer browser." })
] }) }), dist_ue = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "oidc-session-lost", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "oidc-session-lost__container", children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("h1", { className: "oidc-session-lost__title", children: "Session timed out" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "oidc-session-lost__content", children: "Your session has expired. Please re-authenticate." })
] }) }), dist_ke = ({ configurationName: t }) => ((0,index_js_.useEffect)(() => {
  (async () => {
    ke.get(t).silentLoginCallbackAsync();
  })().catch((e) => {
    console.error("Error during silent login callback:", e);
  });
}, [t]), null), dist_he = ({ configurationName: t }) => {
  const s = ne(window.location.href), e = ke.get, n = e(t);
  let o = null;
  for (const [c, l] of Object.entries(s))
    c === "state" || c === "scope" || (o === null && (o = {}), o[c] = l);
  return (0,index_js_.useEffect)(() => {
    n.tokens || n.loginAsync(null, o, !0, s.scope);
  }, []), /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
}, dist_e = ({
  callbackErrorComponent: t,
  callbackSuccessComponent: s,
  redirect_uri: e,
  silent_redirect_uri: n,
  silent_login_uri: o,
  children: c,
  configurationName: l,
  withCustomHistory: a = null
}) => {
  const d = window ? vn(window.location.href) : "", [u, _] = (0,index_js_.useState)(d);
  (0,index_js_.useEffect)(() => {
    const g = () => _(vn(window.location.href));
    return g(), window.addEventListener("popstate", g, !1), () => window.removeEventListener("popstate", g, !1);
  }, []);
  const h = vn(e);
  if (n && u === vn(n))
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(dist_ke, { configurationName: l });
  if (o && u === vn(o))
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(dist_he, { configurationName: l });
  switch (u) {
    case h:
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        dist_ae,
        {
          callBackError: t,
          callBackSuccess: s,
          configurationName: l,
          withCustomHistory: a
        }
      );
    default:
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: c });
  }
}, dist_ve = index_js_.memo(dist_e), dist_D = { name: "", data: null }, dist_fe = ({
  loadingComponent: t,
  children: s,
  configurationName: e
}) => {
  const [n, o] = (0,index_js_.useState)(!0), c = ke.get, l = c(e);
  return (0,index_js_.useEffect)(() => {
    let d = !0;
    return l && l.tryKeepExistingSessionAsync().then(() => {
      d && o(!1);
    }), () => {
      d = !1;
    };
  }, [e]), /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: n ? /* @__PURE__ */ (0,jsx_runtime.jsx)(t, { configurationName: e }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: s }) });
}, P = ({ isLoading: t, loadingComponent: s, children: e, configurationName: n }) => {
  const o = s;
  return t ? /* @__PURE__ */ (0,jsx_runtime.jsx)(o, { configurationName: n, children: e }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: e });
}, dist_Pe = ({
  children: t,
  configuration: s,
  configurationName: e = "default",
  callbackSuccessComponent: n = dist_R,
  authenticatingComponent: o = dist_se,
  loadingComponent: c = dist_le,
  serviceWorkerNotSupportedComponent: l = dist_de,
  authenticatingErrorComponent: a = dist_W,
  sessionLostComponent: d = dist_ue,
  onSessionLost: u = null,
  onLogoutFromAnotherTab: _ = null,
  onLogoutFromSameTab: h = null,
  withCustomHistory: g = null,
  onEvent: T = null,
  getFetch: p = null,
  location: S = null
}) => {
  const w = (L = "default") => ke.getOrCreate(p ?? pn, S ?? new dist_H())(
    s,
    L
  ), [j, B] = (0,index_js_.useState)(!0), [z, C] = (0,index_js_.useState)(dist_D), [K, $] = (0,index_js_.useState)("default");
  (0,index_js_.useEffect)(() => {
    const I = w(e).subscribeEvents((k, b) => {
      T && T(e, k, b);
    });
    return () => {
      w(e).removeEventSubscription(I);
    };
  }, [e, T]), (0,index_js_.useEffect)(() => {
    const I = w(e).subscribeEvents((k, b) => {
      if (k === ke.eventNames.refreshTokensAsync_error || k === ke.eventNames.syncTokensAsync_error) {
        if (u != null) {
          u();
          return;
        }
        C({ name: k, data: b });
      } else if (k === ke.eventNames.logout_from_another_tab) {
        if (_ != null) {
          _();
          return;
        }
        C({ name: k, data: b });
      } else k === ke.eventNames.logout_from_same_tab ? h != null && h() : k === ke.eventNames.loginAsync_begin || k === ke.eventNames.loginCallbackAsync_end || k === ke.eventNames.loginAsync_error || k === ke.eventNames.loginCallbackAsync_error ? C({ name: k, data: b }) : k === ke.eventNames.service_worker_not_supported_by_browser && s.service_worker_only === !0 && C({ name: k, data: b });
    });
    return $(e), B(!1), () => {
      w(e).removeEventSubscription(I), C(dist_D);
    };
  }, [s, e]);
  const G = d, H = o, y = c, Q = l, J = a, A = j || K !== e, N = w(e);
  switch (z.name) {
    case ke.eventNames.service_worker_not_supported_by_browser:
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        P,
        {
          loadingComponent: y,
          isLoading: A,
          configurationName: e,
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Q, { configurationName: e })
        }
      );
    case ke.eventNames.loginAsync_begin:
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        P,
        {
          loadingComponent: y,
          isLoading: A,
          configurationName: e,
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(H, { configurationName: e })
        }
      );
    case ke.eventNames.loginAsync_error:
    case ke.eventNames.loginCallbackAsync_error:
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        P,
        {
          loadingComponent: y,
          isLoading: A,
          configurationName: e,
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(J, { configurationName: e })
        }
      );
    case ke.eventNames.refreshTokensAsync_error:
    case ke.eventNames.syncTokensAsync_error:
    case ke.eventNames.logout_from_another_tab:
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        P,
        {
          loadingComponent: y,
          isLoading: A,
          configurationName: e,
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(G, { configurationName: e })
        }
      );
    default:
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        P,
        {
          loadingComponent: y,
          isLoading: A,
          configurationName: e,
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
            dist_ve,
            {
              redirect_uri: N.configuration.redirect_uri,
              silent_redirect_uri: N.configuration.silent_redirect_uri,
              silent_login_uri: N.configuration.silent_login_uri,
              callbackSuccessComponent: n,
              callbackErrorComponent: a,
              authenticatingComponent: o,
              configurationName: e,
              withCustomHistory: g,
              location: S ?? new dist_H(),
              children: /* @__PURE__ */ (0,jsx_runtime.jsx)(dist_fe, { loadingComponent: y, configurationName: e, children: t })
            }
          )
        }
      );
  }
}, dist_ge = ({
  children: t,
  callbackPath: s = null,
  extras: e = null,
  configurationName: n = "default"
}) => {
  const o = ke.get, c = o(n);
  return (0,index_js_.useEffect)(() => {
    c.tokens || c.loginAsync(s, e);
  }, [n, s, e]), c.tokens ? /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: t }) : null;
}, dist_Ee = (t, s = null, e = null, n = "default") => (o) => /* @__PURE__ */ (0,jsx_runtime.jsx)(dist_ge, { callbackPath: s, extras: e, configurationName: n, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(t, { ...o }) }), dist_F = "default", dist_U = (t, s) => {
  let e = !1;
  return t(s) && (e = t(s).tokens != null), e;
}, dist_Se = (t = dist_F) => {
  const s = ke.get, [e, n] = (0,index_js_.useState)(
    dist_U(s, t)
  );
  return (0,index_js_.useEffect)(() => {
    let a = !0;
    const d = s(t);
    n(dist_U(s, t));
    const u = d.subscribeEvents((_, h) => {
      (_ === ke.eventNames.logout_from_another_tab || _ === ke.eventNames.logout_from_same_tab || _ === ke.eventNames.token_acquired) && a && n(dist_U(s, t));
    });
    return () => {
      a = !1, d.removeEventSubscription(u);
    };
  }, [t]), { login: (a = void 0, d = void 0, u = !1, _ = void 0) => s(t).loginAsync(
    a,
    d,
    !1,
    _,
    u
  ), logout: (a = void 0, d = void 0) => s(t).logoutAsync(a, d), renewTokens: async (a = void 0) => {
    const d = await s(t).renewTokensAsync(a);
    return {
      // @ts-ignore
      accessToken: d.accessToken,
      // @ts-ignore
      accessTokenPayload: d.accessTokenPayload,
      // @ts-ignore
      idToken: d.idToken,
      // @ts-ignore
      idTokenPayload: d.idTokenPayload
    };
  }, isAuthenticated: e };
}, dist_q = { accessToken: null, accessTokenPayload: null }, dist_pe = (t) => {
  const s = ke.get, e = s(t);
  if (e.tokens) {
    const n = e.tokens;
    return {
      accessToken: n.accessToken,
      accessTokenPayload: n.accessTokenPayload,
      generateDemonstrationOfProofOfPossessionAsync: e.configuration.demonstrating_proof_of_possession ? (o, c) => e.generateDemonstrationOfProofOfPossessionAsync(n.accessToken, o, c) : null
    };
  }
  return dist_q;
};
function dist_ye(t, s) {
  return t.configuration.demonstrating_proof_of_possession ? (e, n, o = {}) => t.generateDemonstrationOfProofOfPossessionAsync(s.accessToken, e, n, o) : null;
}
const dist_Ne = (t = dist_F) => {
  const s = ke.get, [e, n] = (0,index_js_.useState)(dist_pe(t));
  return (0,index_js_.useEffect)(() => {
    let o = !0;
    const c = s(t);
    if (c.tokens) {
      const a = c.tokens;
      n({
        accessToken: a.accessToken,
        accessTokenPayload: a.accessTokenPayload
      });
    }
    const l = c.subscribeEvents((a, d) => {
      if ((a === ke.eventNames.token_renewed || a === ke.eventNames.token_acquired || a === ke.eventNames.logout_from_another_tab || a === ke.eventNames.logout_from_same_tab || a === ke.eventNames.refreshTokensAsync_error || a === ke.eventNames.syncTokensAsync_error) && o) {
        const u = c.tokens;
        n(
          u != null ? {
            accessToken: u.accessToken,
            accessTokenPayload: u.accessTokenPayload,
            generateDemonstrationOfProofOfPossessionAsync: dist_ye(c, u)
          } : dist_q
        );
      }
    });
    return () => {
      o = !1, c.removeEventSubscription(l);
    };
  }, [t]), e;
}, dist_Y = { idToken: null, idTokenPayload: null }, dist_be = (t) => {
  const s = ke.get, e = s(t);
  if (e.tokens) {
    const n = e.tokens;
    return { idToken: n.idToken, idTokenPayload: n.idTokenPayload };
  }
  return dist_Y;
}, dist_Le = (t = dist_F) => {
  const s = ke.get, [e, n] = (0,index_js_.useState)(dist_be(t));
  return (0,index_js_.useEffect)(() => {
    let o = !0;
    const c = s(t);
    if (c.tokens) {
      const a = c.tokens;
      n({ idToken: a.idToken, idTokenPayload: a.idTokenPayload });
    }
    const l = c.subscribeEvents((a, d) => {
      if ((a === ke.eventNames.token_renewed || a === ke.eventNames.token_acquired || a === ke.eventNames.logout_from_another_tab || a === ke.eventNames.logout_from_same_tab || a === ke.eventNames.refreshTokensAsync_error || a === ke.eventNames.syncTokensAsync_error) && o) {
        const u = c.tokens;
        n(
          u != null ? { idToken: u.idToken, idTokenPayload: u.idTokenPayload } : dist_Y
        );
      }
    });
    return () => {
      o = !1, c.removeEventSubscription(l);
    };
  }, [t]), e;
};
var dist_me = /* @__PURE__ */ ((t) => (t.Unauthenticated = "Unauthenticated", t.Loading = "Loading user", t.Loaded = "User loaded", t.LoadingError = "Error loading user", t))(dist_me || {});
const dist_Ie = (t = "default", s = !1) => {
  const n = ke.get(t).userInfo(), [o, c] = (0,index_js_.useState)({
    user: n,
    status: n ? "User loaded" : "Unauthenticated"
    /* Unauthenticated */
  }), [l, a] = (0,index_js_.useState)(n ? 1 : 0), [d, u] = (0,index_js_.useState)(n ? 1 : 0);
  (0,index_js_.useEffect)(() => {
    const h = ke.get(t);
    let g = !0;
    if (h && h.tokens) {
      const p = l === d;
      if (p && h.userInfo())
        return;
      c({
        ...o,
        status: "Loading user"
        /* Loading */
      }), h.userInfoAsync(!p, s).then((S) => {
        g && c({
          user: S,
          status: "User loaded"
          /* Loaded */
        });
      }).catch(() => c({
        ...o,
        status: "Error loading user"
        /* LoadingError */
      })), u(l);
    } else
      c({
        user: null,
        status: "Unauthenticated"
        /* Unauthenticated */
      });
    const T = h.subscribeEvents((p) => {
      (p === ke.eventNames.logout_from_another_tab || p === ke.eventNames.logout_from_same_tab) && g && c({
        user: null,
        status: "Unauthenticated"
        /* Unauthenticated */
      });
    });
    return () => {
      g = !1, h.removeEventSubscription(T);
    };
  }, [l]);
  const _ = () => {
    a(l + 1);
  };
  return { oidcUser: o.user, oidcUserLoadingState: o.status, reloadOidcUser: _ };
};



/***/ })

}]);