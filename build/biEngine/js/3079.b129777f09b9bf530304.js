"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[3079],{

/***/ 13079
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  OidcClient: () => (/* reexport */ we),
  OidcLocation: () => (/* reexport */ dist_j),
  OidcProvider: () => (/* binding */ dist_Pe),
  OidcSecure: () => (/* binding */ dist_pe),
  OidcUserStatus: () => (/* binding */ dist_me),
  TokenAutomaticRenewMode: () => (/* reexport */ B),
  TokenRenewMode: () => (/* reexport */ Q),
  useOidc: () => (/* binding */ dist_Se),
  useOidcAccessToken: () => (/* binding */ dist_Ne),
  useOidcFetch: () => (/* binding */ dist_ne),
  useOidcIdToken: () => (/* binding */ Le),
  useOidcUser: () => (/* binding */ dist_Ie),
  withOidcFetch: () => (/* binding */ dist_Oe),
  withOidcSecure: () => (/* binding */ dist_Ee)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49214);
;// ../node_modules/.pnpm/@axa-fr+oidc-client@7.26.0/node_modules/@axa-fr/oidc-client/dist/index.js
/* provided dependency */ var process = __webpack_require__(72290);
class dist_j {
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
const de = 2e3, R = console;
class De {
  constructor(n, s, t, o = de, i = !0) {
    this._callback = n, this._client_id = s, this._url = t, this._interval = o || de, this._stopOnError = i;
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
    n.origin === this._frame_origin && n.source === this._frame.contentWindow && (n.data === "error" ? (R.error("CheckSessionIFrame: error message from check session op iframe"), this._stopOnError && this.stop()) : n.data === "changed" ? (R.debug(n), R.debug("CheckSessionIFrame: changed message from check session op iframe"), this.stop(), this._callback()) : R.debug("CheckSessionIFrame: " + n.data + " message from check session op iframe"));
  }
  start(n) {
    R.debug("CheckSessionIFrame.start :" + n), this.stop();
    const s = () => {
      this._frame.contentWindow.postMessage(
        this._client_id + " " + n,
        this._frame_origin
      );
    };
    s(), this._timer = window.setInterval(s, this._interval);
  }
  stop() {
    this._timer && (R.debug("CheckSessionIFrame.stop"), window.clearInterval(this._timer), this._timer = null);
  }
}
const m = {
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
}, C = (e, n = sessionStorage) => {
  const s = (y) => (n[`oidc.${e}`] = JSON.stringify({ tokens: null, status: y }), delete n[`oidc.${e}.userInfo`], Promise.resolve()), t = async () => {
    if (!n[`oidc.${e}`])
      return n[`oidc.${e}`] = JSON.stringify({ tokens: null, status: null }), { tokens: null, status: null };
    const y = JSON.parse(n[`oidc.${e}`]);
    return Promise.resolve({ tokens: y.tokens, status: y.status });
  }, o = (y) => {
    n[`oidc.${e}`] = JSON.stringify({ tokens: y });
  }, i = async (y) => {
    n[`oidc.session_state.${e}`] = y;
  }, r = async () => n[`oidc.session_state.${e}`], a = (y) => {
    n[`oidc.nonce.${e}`] = y.nonce;
  }, c = (y) => {
    n[`oidc.jwk.${e}`] = JSON.stringify(y);
  }, u = () => JSON.parse(n[`oidc.jwk.${e}`]), f = async () => ({ nonce: n[`oidc.nonce.${e}`] }), l = async (y) => {
    n[`oidc.dpop_nonce.${e}`] = y;
  }, d = () => n[`oidc.dpop_nonce.${e}`], _ = () => n[`oidc.${e}`] ? JSON.stringify({ tokens: JSON.parse(n[`oidc.${e}`]).tokens }) : null, k = {};
  return {
    clearAsync: s,
    initAsync: t,
    setTokens: o,
    getTokens: _,
    setSessionStateAsync: i,
    getSessionStateAsync: r,
    setNonceAsync: a,
    getNonceAsync: f,
    setLoginParams: (y) => {
      k[e] = y, n[`oidc.login.${e}`] = JSON.stringify(y);
    },
    getLoginParams: () => {
      const y = n[`oidc.login.${e}`];
      return y ? (k[e] || (k[e] = JSON.parse(y)), k[e]) : (console.warn(
        `storage[oidc.login.${e}] is empty, you should have an bad OIDC or code configuration somewhere.`
      ), null);
    },
    getStateAsync: async () => n[`oidc.state.${e}`],
    setStateAsync: async (y) => {
      n[`oidc.state.${e}`] = y;
    },
    getCodeVerifierAsync: async () => n[`oidc.code_verifier.${e}`],
    setCodeVerifierAsync: async (y) => {
      n[`oidc.code_verifier.${e}`] = y;
    },
    setDemonstratingProofOfPossessionNonce: l,
    getDemonstratingProofOfPossessionNonce: d,
    setDemonstratingProofOfPossessionJwkAsync: c,
    getDemonstratingProofOfPossessionJwkAsync: u
  };
};
var B = /* @__PURE__ */ ((e) => (e.AutomaticBeforeTokenExpiration = "AutomaticBeforeTokensExpiration", e.AutomaticOnlyWhenFetchExecuted = "AutomaticOnlyWhenFetchExecuted", e))(B || {});
const Re = (e) => decodeURIComponent(
  Array.prototype.map.call(atob(e), (n) => "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2)).join("")
), $e = (e) => JSON.parse(Re(e.replaceAll(/-/g, "+").replaceAll(/_/g, "/"))), he = (e) => {
  try {
    return e && Ke(e, ".") === 2 ? $e(e.split(".")[1]) : null;
  } catch (n) {
    console.warn(n);
  }
  return null;
}, Ke = (e, n) => e.split(n).length - 1, Q = {
  access_token_or_id_token_invalid: "access_token_or_id_token_invalid",
  access_token_invalid: "access_token_invalid",
  id_token_invalid: "id_token_invalid"
};
function Ue(e, n, s) {
  if (e.issuedAt) {
    if (typeof e.issuedAt == "string")
      return parseInt(e.issuedAt, 10);
  } else return n && n.iat ? n.iat : s && s.iat ? s.iat : (/* @__PURE__ */ new Date()).getTime() / 1e3;
  return e.issuedAt;
}
const oe = (e, n = null, s) => {
  if (!e)
    return null;
  let t;
  const o = typeof e.expiresIn == "string" ? parseInt(e.expiresIn, 10) : e.expiresIn;
  e.accessTokenPayload !== void 0 ? t = e.accessTokenPayload : t = he(e.accessToken);
  let i;
  n != null && "idToken" in n && !("idToken" in e) ? i = n.idToken : i = e.idToken;
  const r = e.idTokenPayload ? e.idTokenPayload : he(i), a = r && r.exp ? r.exp : Number.MAX_VALUE, c = t && t.exp ? t.exp : e.issuedAt + o;
  e.issuedAt = Ue(e, t, r);
  let u;
  e.expiresAt ? u = e.expiresAt : s === Q.access_token_invalid ? u = c : s === Q.id_token_invalid ? u = a : u = a < c ? a : c;
  const f = {
    ...e,
    idTokenPayload: r,
    accessTokenPayload: t,
    expiresAt: u,
    idToken: i
  };
  if (n != null && "refreshToken" in n && !("refreshToken" in e)) {
    const l = n.refreshToken;
    return { ...f, refreshToken: l };
  }
  return f;
}, ie = (e, n, s) => {
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
  return "refresh_token" in e && (t.refreshToken = e.refresh_token), e.accessTokenPayload !== void 0 && (t.accessTokenPayload = e.accessTokenPayload), e.idTokenPayload !== void 0 && (t.idTokenPayload = e.idTokenPayload), oe(t, n, s);
}, V = (e, n) => {
  const s = (/* @__PURE__ */ new Date()).getTime() / 1e3, t = n - s;
  return Math.round(t - e);
}, Ve = (e, n = 0) => e ? V(n, e.expiresAt) > 0 : !1, Ae = async (e, n = 200, s = 50) => {
  let t = s, o = await e.syncTokensInfoAsync();
  for (; [
    O.REQUIRE_SYNC_TOKENS,
    O.TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_INVALID,
    O.TOKENS_INVALID
  ].includes(o) && t > 0; ) {
    if (e.configuration.token_automatic_renew_mode == B.AutomaticOnlyWhenFetchExecuted) {
      await e.renewTokensAsync({});
      break;
    } else
      await re({ milliseconds: n });
    t = t - 1, o = await e.syncTokensInfoAsync();
  }
  return {
    isTokensValid: Ve(e.getTokens()),
    tokens: e.getTokens(),
    numberWaited: t - s
  };
}, Se = (e, n, s) => {
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
}(), Y = "7.26.0";
let ye = null, G;
const re = ({ milliseconds: e }) => new Promise((n) => U.setTimeout(n, e)), Te = (e = "/") => {
  try {
    G = new AbortController(), fetch(
      `${e}OidcKeepAliveServiceWorker.json?minSleepSeconds=150`,
      { signal: G.signal }
    ).catch((t) => {
      console.log(t);
    }), re({ milliseconds: 150 * 1e3 }).then(Te);
  } catch (n) {
    console.log(n);
  }
}, X = () => {
  G && G.abort();
}, ve = (e) => {
  const n = sessionStorage.getItem(`oidc.tabId.${e}`);
  if (n)
    return n;
  const s = globalThis.crypto.randomUUID();
  return sessionStorage.setItem(`oidc.tabId.${e}`, s), s;
}, b = (e) => (n) => new Promise(function(s, t) {
  const o = new MessageChannel();
  o.port1.onmessage = function(i) {
    i != null && i.data.error ? t(i.data.error) : s(i.data), o.port1.close(), o.port2.close();
  }, e.active.postMessage({ ...n, tabId: ve(n.configurationName) }, [
    o.port2
  ]);
}), x = async (e, n) => {
  const s = e.service_worker_relative_url;
  if (typeof window > "u" || typeof navigator > "u" || !navigator.serviceWorker || !s || e.service_worker_activate() === !1)
    return null;
  const t = `${s}?v=${Y}`;
  let o = null;
  e.service_worker_register ? o = await e.service_worker_register(s) : o = await navigator.serviceWorker.register(t, {
    updateViaCache: "none"
  }), o.addEventListener("updatefound", () => {
    const h = o.installing;
    X(), h == null || h.addEventListener("statechange", () => {
      h.state === "installed" && navigator.serviceWorker.controller && (X(), console.log("New SW waiting – skipWaiting()"), h.postMessage({ type: "SKIP_WAITING" }));
    });
  }), navigator.serviceWorker.addEventListener("controllerchange", () => {
    console.log("SW controller changed – reloading page"), X(), window.location.reload();
  });
  try {
    await navigator.serviceWorker.ready, navigator.serviceWorker.controller || await b(o)({ type: "claim" });
  } catch (h) {
    return console.warn(`Failed init ServiceWorker ${h.toString()}`), null;
  }
  const i = async (h) => b(o)({ type: "clear", data: { status: h }, configurationName: n }), r = async (h, I, T) => {
    const v = await b(o)({
      type: "init",
      data: {
        oidcServerConfiguration: h,
        where: I,
        oidcConfiguration: {
          token_renew_mode: T.token_renew_mode,
          service_worker_convert_all_requests_to_cors: T.service_worker_convert_all_requests_to_cors
        }
      },
      configurationName: n
    }), W = v.version;
    return W !== Y && console.warn(
      `Service worker ${W} version mismatch with js client version ${Y}, unregistering and reloading`
    ), {
      tokens: ie(v.tokens, null, T.token_renew_mode),
      status: v.status
    };
  }, a = (h = "/") => {
    ye == null && (ye = "not_null", Te(h));
  }, c = (h) => b(o)({
    type: "setSessionState",
    data: { sessionState: h },
    configurationName: n
  }), u = async () => (await b(o)({
    type: "getSessionState",
    data: null,
    configurationName: n
  })).sessionState, f = (h) => (sessionStorage[`oidc.nonce.${n}`] = h.nonce, b(o)({
    type: "setNonce",
    data: { nonce: h },
    configurationName: n
  })), l = async (h = !0) => {
    let T = (await b(o)({
      type: "getNonce",
      data: null,
      configurationName: n
    })).nonce;
    return T || (T = sessionStorage[`oidc.nonce.${n}`], console.warn("nonce not found in service worker, using sessionStorage"), h && (await f(T), T = (await l(!1)).nonce)), { nonce: T };
  }, d = {}, _ = (h) => {
    d[n] = h, localStorage[`oidc.login.${n}`] = JSON.stringify(h);
  }, k = () => {
    const h = localStorage[`oidc.login.${n}`];
    return d[n] || (d[n] = JSON.parse(h)), d[n];
  }, A = async (h) => {
    await b(o)({
      type: "setDemonstratingProofOfPossessionNonce",
      data: { demonstratingProofOfPossessionNonce: h },
      configurationName: n
    });
  }, g = async () => (await b(o)({
    type: "getDemonstratingProofOfPossessionNonce",
    data: null,
    configurationName: n
  })).demonstratingProofOfPossessionNonce, p = async (h) => {
    const I = JSON.stringify(h);
    await b(o)({
      type: "setDemonstratingProofOfPossessionJwk",
      data: { demonstratingProofOfPossessionJwkJson: I },
      configurationName: n
    });
  }, E = async () => {
    const h = await b(o)({
      type: "getDemonstratingProofOfPossessionJwk",
      data: null,
      configurationName: n
    });
    return h.demonstratingProofOfPossessionJwkJson ? JSON.parse(h.demonstratingProofOfPossessionJwkJson) : null;
  }, w = async (h = !0) => {
    let T = (await b(o)({
      type: "getState",
      data: null,
      configurationName: n
    })).state;
    return T || (T = sessionStorage[`oidc.state.${n}`], console.warn("state not found in service worker, using sessionStorage"), h && (await S(T), T = await w(!1))), T;
  }, S = async (h) => (sessionStorage[`oidc.state.${n}`] = h, b(o)({
    type: "setState",
    data: { state: h },
    configurationName: n
  })), y = async (h = !0) => {
    let T = (await b(o)({
      type: "getCodeVerifier",
      data: null,
      configurationName: n
    })).codeVerifier;
    return T || (T = sessionStorage[`oidc.code_verifier.${n}`], console.warn("codeVerifier not found in service worker, using sessionStorage"), h && (await P(T), T = await y(!1))), T;
  }, P = async (h) => (sessionStorage[`oidc.code_verifier.${n}`] = h, b(o)({
    type: "setCodeVerifier",
    data: { codeVerifier: h },
    configurationName: n
  }));
  return {
    clearAsync: i,
    initAsync: r,
    startKeepAliveServiceWorker: () => a(e.service_worker_keep_alive_path),
    setSessionStateAsync: c,
    getSessionStateAsync: u,
    setNonceAsync: f,
    getNonceAsync: l,
    setLoginParams: _,
    getLoginParams: k,
    getStateAsync: w,
    setStateAsync: S,
    getCodeVerifierAsync: y,
    setCodeVerifierAsync: P,
    setDemonstratingProofOfPossessionNonce: A,
    getDemonstratingProofOfPossessionNonce: g,
    setDemonstratingProofOfPossessionJwkAsync: p,
    getDemonstratingProofOfPossessionJwkAsync: E
  };
}, $ = {}, Fe = (e, n = window.sessionStorage, s) => {
  if (!$[e] && n) {
    const o = n.getItem(e);
    o && ($[e] = JSON.parse(o));
  }
  const t = 1e3 * s;
  return $[e] && $[e].timestamp + t > Date.now() ? $[e].result : null;
}, Be = (e, n, s = window.sessionStorage) => {
  const t = Date.now();
  $[e] = { result: n, timestamp: t }, s && s.setItem(e, JSON.stringify({ result: n, timestamp: t }));
};
function Ee(e) {
  return new TextEncoder().encode(e);
}
function Oe(e) {
  return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+/g, "");
}
function Me(e) {
  return encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(s, t) {
    return String.fromCharCode(parseInt(t, 16));
  });
}
const ae = (e) => {
  let n = "";
  return e.forEach(function(s) {
    n += String.fromCharCode(s);
  }), Oe(n);
};
function ge(e) {
  return Oe(Me(e));
}
const Je = {
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
}, He = (e) => async (n, s, t, o, i = "dpop+jwt") => {
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
    protected: ge(JSON.stringify(s)),
    // @ts-ignore
    // JWT "claims" are really a JSON-defined JWS "payload"
    payload: ge(JSON.stringify(t))
  }, a = o.importKeyAlgorithm, c = !0, u = ["sign"], f = await e.crypto.subtle.importKey("jwk", n, a, c, u), l = Ee(`${r.protected}.${r.payload}`), d = o.signAlgorithm, _ = await e.crypto.subtle.sign(d, f, l);
  return r.signature = ae(new Uint8Array(_)), `${r.protected}.${r.payload}.${r.signature}`;
}, je = { sign: He }, Ge = (e) => async (n) => {
  const s = n, t = !0, o = ["sign", "verify"], i = await e.crypto.subtle.generateKey(s, t, o);
  return await e.crypto.subtle.exportKey("jwk", i.privateKey);
}, qe = (e) => {
  const n = Object.assign({}, e);
  return delete n.d, n.key_ops = ["verify"], n;
}, Ye = {
  generate: Ge,
  neuter: qe
}, Xe = (e) => async (n, s) => {
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
  const o = await e.crypto.subtle.digest(s, Ee(t));
  return ae(new Uint8Array(o));
}, ze = { thumbprint: Xe }, Qe = (e) => async (n) => await Ye.generate(e)(n), be = (e) => (n) => async (s, t = "POST", o, i = {}) => {
  const r = {
    // https://www.rfc-editor.org/rfc/rfc9449.html#name-concept
    jti: btoa(Ze()),
    htm: t,
    htu: o,
    iat: Math.round(Date.now() / 1e3),
    ...i
  }, a = await ze.thumbprint(e)(
    s,
    n.digestAlgorithm
  );
  return await je.sign(e)(
    s,
    { kid: a },
    r,
    n
  );
}, Ze = () => {
  const e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", n = "0123456789abcdef";
  let s = 0, t = "";
  for (let o = 0; o < 36; o++)
    e[o] !== "-" && e[o] !== "4" && (s = Math.random() * 16 | 0), e[o] === "x" ? t += n[s] : e[o] === "y" ? (s &= 3, s |= 8, t += n[s]) : t += e[o];
  return t;
}, Pe = () => {
  const e = typeof window < "u" && !!window.crypto, n = e && !!window.crypto.subtle;
  return { hasCrypto: e, hasSubtleCrypto: n };
}, Z = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", en = (e) => {
  const n = [];
  for (let s = 0; s < e.byteLength; s += 1) {
    const t = e[s] % Z.length;
    n.push(Z[t]);
  }
  return n.join("");
}, ee = (e) => {
  const n = new Uint8Array(e), { hasCrypto: s } = Pe();
  if (s)
    window.crypto.getRandomValues(n);
  else
    for (let t = 0; t < e; t += 1)
      n[t] = Math.random() * Z.length | 0;
  return en(n);
};
function nn(e) {
  const n = new ArrayBuffer(e.length), s = new Uint8Array(n);
  for (let t = 0; t < e.length; t++)
    s[t] = e.charCodeAt(t);
  return s;
}
function Ie(e) {
  return new Promise((n, s) => {
    crypto.subtle.digest("SHA-256", nn(e)).then(
      (t) => n(ae(new Uint8Array(t))),
      (t) => s(t)
    );
  });
}
const sn = (e) => {
  if (e.length < 43 || e.length > 128)
    return Promise.reject(new Error("Invalid code length."));
  const { hasSubtleCrypto: n } = Pe();
  return n ? Ie(e) : Promise.reject(new Error("window.crypto.subtle is unavailable."));
}, tn = 60 * 60, on = (e) => async (n, s = tn, t = window.sessionStorage, o = 1e4) => {
  const i = `${n}/.well-known/openid-configuration`, r = `oidc.server:${n}`, a = Fe(r, t, s);
  if (a)
    return new te(a);
  const c = await J(e)(i, {}, o);
  if (c.status !== 200)
    return null;
  const u = await c.json();
  return Be(r, u, t), new te(u);
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
}, ne = {
  refresh_token: "refresh_token",
  access_token: "access_token"
}, ke = (e) => async (n, s, t = ne.refresh_token, o, i = {}, r = 1e4) => {
  const a = {
    token: s,
    token_type_hint: t,
    client_id: o
  };
  for (const [l, d] of Object.entries(i))
    a[l] === void 0 && (a[l] = d);
  const c = [];
  for (const l in a) {
    const d = encodeURIComponent(l), _ = encodeURIComponent(a[l]);
    c.push(`${d}=${_}`);
  }
  const u = c.join("&");
  return (await J(e)(
    n,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: u
    },
    r
  )).status !== 200 ? { success: !1 } : {
    success: !0
  };
}, rn = (e) => async (n, s, t, o, i = {}, r, a = 1e4) => {
  for (const [_, k] of Object.entries(t))
    s[_] === void 0 && (s[_] = k);
  const c = [];
  for (const _ in s) {
    const k = encodeURIComponent(_), A = encodeURIComponent(s[_]);
    c.push(`${k}=${A}`);
  }
  const u = c.join("&"), f = await J(e)(
    n,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        ...i
      },
      body: u
    },
    a
  );
  if (f.status !== 200)
    return {
      success: !1,
      status: f.status,
      demonstratingProofOfPossessionNonce: null
    };
  const l = await f.json();
  let d = null;
  return f.headers.has(q) && (d = f.headers.get(
    q
  )), {
    success: !0,
    status: f.status,
    data: ie(l, o, r),
    demonstratingProofOfPossessionNonce: d
  };
}, an = (e, n) => async (s, t) => {
  t = t ? { ...t } : {};
  const o = ee(128), i = await sn(o);
  await e.setCodeVerifierAsync(o), await e.setStateAsync(t.state), t.code_challenge = i, t.code_challenge_method = "S256";
  let r = "";
  if (t)
    for (const [a, c] of Object.entries(t))
      r === "" ? r += "?" : r += "&", r += `${a}=${encodeURIComponent(c)}`;
  n.open(`${s}${r}`);
}, q = "DPoP-Nonce", cn = (e) => async (n, s, t, o, i = 1e4) => {
  s = s ? { ...s } : {}, s.code_verifier = await e.getCodeVerifierAsync();
  const r = [];
  for (const l in s) {
    const d = encodeURIComponent(l), _ = encodeURIComponent(s[l]);
    r.push(`${d}=${_}`);
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
  let u = null;
  c.headers.has(q) && (u = c.headers.get(
    q
  ));
  const f = await c.json();
  return {
    success: !0,
    data: {
      state: s.state,
      tokens: ie(f, null, o),
      demonstratingProofOfPossessionNonce: u
    }
  };
};
async function me(e, n, s, t = null) {
  const o = (c) => {
    e.tokens = c;
  }, { tokens: i, status: r } = await H(e)(
    o,
    0,
    0,
    n,
    s,
    t
  );
  return await x(e.configuration, e.configurationName) || C(e.configurationName, e.configuration.storage).setTokens(e.tokens), e.tokens ? i : (await e.destroyAsync(r), null);
}
async function Ne(e, n = !1, s = null, t = null) {
  const o = e.configuration, i = `${o.client_id}_${e.configurationName}_${o.authority}`;
  let r;
  const a = await x(e.configuration, e.configurationName);
  if ((o == null ? void 0 : o.storage) === (window == null ? void 0 : window.sessionStorage) && !a || !navigator.locks)
    r = await me(e, n, s, t);
  else {
    let c = "retry";
    for (; c === "retry"; )
      c = await navigator.locks.request(
        i,
        { ifAvailable: !0 },
        async (u) => u ? await me(e, n, s, t) : (e.publishEvent(L.eventNames.syncTokensAsync_lock_not_available, {
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
    const r = { timeLeft: V(o, n) };
    e.publishEvent(L.eventNames.token_timer, r), await Ne(e, !1, s, t);
  }, 1e3);
}, O = {
  FORCE_REFRESH: "FORCE_REFRESH",
  SESSION_LOST: "SESSION_LOST",
  NOT_CONNECTED: "NOT_CONNECTED",
  TOKENS_VALID: "TOKENS_VALID",
  TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_VALID: "TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_VALID",
  TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_INVALID: "TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_INVALID",
  LOGOUT_FROM_ANOTHER_TAB: "LOGOUT_FROM_ANOTHER_TAB",
  REQUIRE_SYNC_TOKENS: "REQUIRE_SYNC_TOKENS",
  TOKENS_INVALID: "TOKENS_INVALID"
}, ce = (e) => async (n, s, t, o = !1) => {
  const i = { nonce: null };
  if (!t)
    return { tokens: null, status: O.NOT_CONNECTED, nonce: i };
  let r = i;
  const a = await e.initAsync(
    n.authority,
    n.authority_configuration
  ), c = await x(n, s);
  if (c) {
    const { status: l, tokens: d } = await c.initAsync(
      a,
      "syncTokensAsync",
      n
    );
    if (l === "LOGGED_OUT")
      return {
        tokens: null,
        status: O.LOGOUT_FROM_ANOTHER_TAB,
        nonce: i
      };
    if (l === "SESSIONS_LOST")
      return { tokens: null, status: O.SESSION_LOST, nonce: i };
    if (!l || !d)
      return {
        tokens: null,
        status: O.REQUIRE_SYNC_TOKENS,
        nonce: i
      };
    if (d.issuedAt !== t.issuedAt) {
      const k = V(
        n.refresh_time_before_tokens_expiration_in_second,
        d.expiresAt
      ) > 0 ? O.TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_VALID : O.TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_INVALID, A = await c.getNonceAsync();
      return { tokens: d, status: k, nonce: A };
    }
    r = await c.getNonceAsync();
  } else {
    const l = C(s, n.storage ?? sessionStorage), d = await l.initAsync();
    let { tokens: _ } = d;
    const { status: k } = d;
    if (_ && (_ = oe(_, e.tokens, n.token_renew_mode)), _) {
      if (k === "SESSIONS_LOST")
        return { tokens: null, status: O.SESSION_LOST, nonce: i };
      if (_.issuedAt !== t.issuedAt) {
        const g = V(
          n.refresh_time_before_tokens_expiration_in_second,
          _.expiresAt
        ) > 0 ? O.TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_VALID : O.TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_INVALID, p = await l.getNonceAsync();
        return { tokens: _, status: g, nonce: p };
      }
    } else return {
      tokens: null,
      status: O.LOGOUT_FROM_ANOTHER_TAB,
      nonce: i
    };
    r = await l.getNonceAsync();
  }
  const f = V(
    n.refresh_time_before_tokens_expiration_in_second,
    t.expiresAt
  ) > 0 ? "TOKENS_VALID" : "TOKENS_INVALID";
  return o ? { tokens: t, status: "FORCE_REFRESH", nonce: r } : { tokens: t, status: f, nonce: r };
}, H = (e) => async (n, s = 0, t = 0, o = !1, i = null, r = null) => {
  if (!navigator.onLine && document.hidden)
    return { tokens: e.tokens, status: "GIVE_UP" };
  let a = 6;
  const c = o ? 2 : 5, u = 5;
  for (; !navigator.onLine && a > 0; )
    await re({ milliseconds: 1e3 }), a--, e.publishEvent(m.refreshTokensAsync, {
      message: `wait because navigator is offline try ${a}`
    });
  const f = document.hidden, l = f ? s : s + 1, d = f ? t + 1 : t;
  if (s >= c || t >= u)
    return n(null), e.publishEvent(m.refreshTokensAsync_error, { message: "refresh token" }), { tokens: null, status: "SESSION_LOST" };
  i || (i = {});
  const _ = e.configuration, k = (g, p = null, E = null) => le(
    e.configurationName,
    e.configuration,
    e.publishEvent.bind(e)
  )(g, p, E), A = async () => {
    try {
      let g;
      const p = await x(_, e.configurationName);
      p ? g = p.getLoginParams() : g = C(e.configurationName, _.storage).getLoginParams();
      const E = {};
      if (g && g.extras)
        for (const [S, y] of Object.entries(g.extras))
          E[S] = y;
      if (i)
        for (const [S, y] of Object.entries(i))
          E[S] = y;
      E.prompt = "none", r && (E.scope = r);
      const w = await k(E);
      return w ? w.error ? (n(null), e.publishEvent(m.refreshTokensAsync_error, {
        message: "refresh token silent"
      }), { tokens: null, status: "SESSION_LOST" }) : (n(w.tokens), e.publishEvent(L.eventNames.token_renewed, {}), { tokens: w.tokens, status: "LOGGED" }) : (n(null), e.publishEvent(m.refreshTokensAsync_error, {
        message: "refresh token silent not active"
      }), { tokens: null, status: "SESSION_LOST" });
    } catch (g) {
      return console.error(g), e.publishEvent(m.refreshTokensAsync_silent_error, {
        message: "exceptionSilent",
        exception: g.message
      }), await H(e)(
        n,
        l,
        d,
        o,
        i,
        r
      );
    }
  };
  try {
    const { status: g, tokens: p, nonce: E } = await ce(e)(
      _,
      e.configurationName,
      e.tokens,
      o
    );
    switch (g) {
      case O.SESSION_LOST:
        return n(null), e.publishEvent(m.refreshTokensAsync_error, {
          message: "refresh token session lost"
        }), { tokens: null, status: "SESSION_LOST" };
      case O.NOT_CONNECTED:
        return n(null), { tokens: null, status: null };
      case O.TOKENS_VALID:
        return n(p), { tokens: p, status: "LOGGED_IN" };
      case O.TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_VALID:
        return n(p), e.publishEvent(L.eventNames.token_renewed, {
          reason: "TOKEN_UPDATED_BY_ANOTHER_TAB_TOKENS_VALID"
        }), { tokens: p, status: "LOGGED_IN" };
      case O.LOGOUT_FROM_ANOTHER_TAB:
        return n(null), e.publishEvent(m.logout_from_another_tab, {
          status: "session syncTokensAsync"
        }), { tokens: null, status: "LOGGED_OUT" };
      case O.REQUIRE_SYNC_TOKENS:
        return _.token_automatic_renew_mode == B.AutomaticOnlyWhenFetchExecuted && !o ? (e.publishEvent(m.tokensInvalidAndWaitingActionsToRefresh, {}), { tokens: e.tokens, status: "GIVE_UP" }) : (e.publishEvent(m.refreshTokensAsync_begin, { tryNumber: s }), await A());
      default: {
        if (_.token_automatic_renew_mode == B.AutomaticOnlyWhenFetchExecuted && O.FORCE_REFRESH !== g)
          return e.publishEvent(m.tokensInvalidAndWaitingActionsToRefresh, {}), { tokens: e.tokens, status: "GIVE_UP" };
        if (e.publishEvent(m.refreshTokensAsync_begin, {
          refreshToken: p.refreshToken,
          status: g,
          tryNumber: s,
          backgroundTry: t
        }), !p.refreshToken)
          return await A();
        const w = _.client_id, S = _.redirect_uri, y = _.authority, h = { ..._.token_request_extras ? _.token_request_extras : {} };
        for (const [T, v] of Object.entries(i))
          T.endsWith(":token_request") && (h[T.replace(":token_request", "")] = v);
        return await (async () => {
          const T = {
            client_id: w,
            redirect_uri: S,
            grant_type: "refresh_token",
            refresh_token: p.refreshToken
          }, v = await e.initAsync(
            y,
            _.authority_configuration
          ), W = document.hidden ? 1e4 : 3e4 * 10, ue = v.tokenEndpoint, _e = {};
          _.demonstrating_proof_of_possession && (_e.DPoP = await e.generateDemonstrationOfProofOfPossessionAsync(
            p.accessToken,
            ue,
            "POST"
          ));
          const N = await rn(e.getFetch())(
            ue,
            T,
            h,
            p,
            _e,
            _.token_renew_mode,
            W
          );
          if (N.success) {
            const { isValid: Le, reason: We } = Se(
              N.data,
              E.nonce,
              v
            );
            if (!Le)
              return n(null), e.publishEvent(m.refreshTokensAsync_error, {
                message: `refresh token return not valid tokens, reason: ${We}`
              }), { tokens: null, status: "SESSION_LOST" };
            if (n(N.data), N.demonstratingProofOfPossessionNonce) {
              const fe = await x(_, e.configurationName);
              fe ? await fe.setDemonstratingProofOfPossessionNonce(
                N.demonstratingProofOfPossessionNonce
              ) : await C(e.configurationName, _.storage).setDemonstratingProofOfPossessionNonce(
                N.demonstratingProofOfPossessionNonce
              );
            }
            return e.publishEvent(m.refreshTokensAsync_end, {
              success: N.success
            }), e.publishEvent(L.eventNames.token_renewed, { reason: "REFRESH_TOKEN" }), { tokens: N.data, status: "LOGGED_IN" };
          } else
            return e.publishEvent(m.refreshTokensAsync_silent_error, {
              message: "bad request",
              tokenResponse: N
            }), N.status >= 400 && N.status < 500 ? (n(null), e.publishEvent(m.refreshTokensAsync_error, {
              message: `session lost: ${N.status}`
            }), { tokens: null, status: "SESSION_LOST" }) : await H(e)(
              n,
              l,
              d,
              o,
              i,
              r
            );
        })();
      }
    }
  } catch (g) {
    return console.error(g), e.publishEvent(m.refreshTokensAsync_silent_error, {
      message: "exception",
      exception: g.message
    }), new Promise((p, E) => {
      setTimeout(() => {
        H(e)(
          n,
          l,
          d,
          o,
          i,
          r
        ).then(p).catch(E);
      }, 1e3);
    });
  }
}, le = (e, n, s) => (t = null, o = null, i = null) => {
  if (!n.silent_redirect_uri || !n.silent_login_uri)
    return Promise.resolve(null);
  try {
    s(m.silentLoginAsync_begin, {});
    let r = "";
    if (o && (t == null && (t = {}), t.state = o), i != null && (t == null && (t = {}), t.scope = i), t != null)
      for (const [l, d] of Object.entries(t))
        r === "" ? r = `?${encodeURIComponent(l)}=${encodeURIComponent(d)}` : r += `&${encodeURIComponent(l)}=${encodeURIComponent(d)}`;
    const a = n.silent_login_uri + r, c = a.indexOf("/", a.indexOf("//") + 2), u = a.substring(0, c), f = document.createElement("iframe");
    return f.width = "0px", f.height = "0px", f.id = `${e}_oidc_iframe`, f.setAttribute("src", a), f.style.display = "none", document.body.appendChild(f), new Promise((l, d) => {
      let _ = !1;
      const k = () => {
        window.removeEventListener("message", A), f.remove(), _ = !0;
      }, A = (g) => {
        if (g.origin === u && g.source === f.contentWindow) {
          const p = `${e}_oidc_tokens:`, E = `${e}_oidc_error:`, w = `${e}_oidc_exception:`, S = g.data;
          if (S && typeof S == "string" && !_) {
            if (S.startsWith(p)) {
              const y = JSON.parse(g.data.replace(p, ""));
              s(m.silentLoginAsync_end, {}), l(y), k();
            } else if (S.startsWith(E)) {
              const y = JSON.parse(g.data.replace(E, ""));
              s(m.silentLoginAsync_error, y), l({ error: "oidc_" + y.error, tokens: null, sessionState: null }), k();
            } else if (S.startsWith(w)) {
              const y = JSON.parse(g.data.replace(w, ""));
              s(m.silentLoginAsync_error, y), d(new Error(y.error)), k();
            }
          }
        }
      };
      try {
        window.addEventListener("message", A);
        const g = n.silent_login_timeout;
        setTimeout(() => {
          _ || (k(), s(m.silentLoginAsync_error, { reason: "timeout" }), d(new Error("timeout")));
        }, g);
      } catch (g) {
        k(), s(m.silentLoginAsync_error, g), d(g);
      }
    });
  } catch (r) {
    throw s(m.silentLoginAsync_error, r), r;
  }
}, ln = (e, n, s, t, o) => (i = null, r = void 0) => {
  i = { ...i };
  const a = (u, f, l) => le(n, s, t.bind(o))(
    u,
    f,
    l
  );
  return (async () => {
    o.timeoutId && U.clearTimeout(o.timeoutId);
    let u;
    i && "state" in i && (u = i.state, delete i.state);
    try {
      const f = s.extras ? { ...s.extras, ...i } : i, l = await a(
        {
          ...f,
          prompt: "none"
        },
        u,
        r
      );
      if (l)
        return o.tokens = l.tokens, t(m.token_acquired, {}), o.timeoutId = M(o, o.tokens.expiresAt, i, r), {};
    } catch (f) {
      return f;
    }
  })();
}, un = (e, n, s) => (t, o, i, r = !1) => {
  const a = (c, u = void 0, f = void 0) => le(e.configurationName, s, e.publishEvent.bind(e))(
    c,
    u,
    f
  );
  return new Promise((c, u) => {
    if (s.silent_login_uri && s.silent_redirect_uri && s.monitor_session && t && i && !r) {
      const f = () => {
        e.checkSessionIFrame.stop();
        const l = e.tokens;
        if (l === null)
          return;
        const d = l.idToken, _ = l.idTokenPayload;
        return a({
          prompt: "none",
          id_token_hint: d,
          scope: s.scope || "openid"
        }).then((k) => {
          if (k.error)
            throw new Error(k.error);
          const A = k.tokens.idTokenPayload;
          if (_.sub === A.sub) {
            const g = k.sessionState;
            e.checkSessionIFrame.start(k.sessionState), _.sid === A.sid ? console.debug(
              "SessionMonitor._callback: Same sub still logged in at OP, restarting check session iframe; session_state:",
              g
            ) : console.debug(
              "SessionMonitor._callback: Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:",
              g
            );
          } else
            console.debug(
              "SessionMonitor._callback: Different subject signed into OP:",
              A.sub
            );
        }).catch(async (k) => {
          console.warn(
            "SessionMonitor._callback: Silent login failed, logging out other tabs:",
            k
          );
          for (const [, A] of Object.entries(n))
            await A.logoutOtherTabAsync(s.client_id, _.sub);
        });
      };
      e.checkSessionIFrame = new De(
        f,
        o,
        t
      ), e.checkSessionIFrame.load().then(() => {
        e.checkSessionIFrame.start(i), c(e.checkSessionIFrame);
      }).catch((l) => {
        u(l);
      });
    } else
      c(null);
  });
}, _n = (e) => !!(e.os === "iOS" && e.osVersion.startsWith("12") || e.os === "Mac OS X" && e.osVersion.startsWith("10_15_6")), fn = (e) => {
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
function dn() {
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
const hn = () => {
  const { name: e, version: n } = dn();
  if (e === "chrome" && parseInt(n) <= 70 || e === "opera" && (!n || parseInt(n.split(".")[0]) < 80) || e === "ie")
    return !1;
  const s = fn(navigator);
  return !_n(s);
}, yn = async (e) => {
  let n;
  if (e.tokens != null)
    return !1;
  e.publishEvent(m.tryKeepExistingSessionAsync_begin, {});
  try {
    const s = e.configuration, t = await e.initAsync(
      s.authority,
      s.authority_configuration
    );
    if (n = await x(s, e.configurationName), n) {
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
        ), s.preload_user_info && await e.userInfoAsync(), e.publishEvent(m.tryKeepExistingSessionAsync_end, {
          success: !0,
          message: "tokens inside ServiceWorker are valid"
        }), !0;
      }
      e.publishEvent(m.tryKeepExistingSessionAsync_end, {
        success: !1,
        message: "no exiting session found"
      });
    } else {
      s.service_worker_relative_url && e.publishEvent(m.service_worker_not_supported_by_browser, {
        message: "service worker is not supported by this browser"
      });
      const o = C(e.configurationName, s.storage ?? sessionStorage), { tokens: i } = await o.initAsync();
      if (i) {
        e.tokens = oe(i, null, s.token_renew_mode);
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
        ), s.preload_user_info && await e.userInfoAsync(), e.publishEvent(m.tryKeepExistingSessionAsync_end, {
          success: !0,
          message: "tokens inside storage are valid"
        }), !0;
      }
    }
    return e.publishEvent(m.tryKeepExistingSessionAsync_end, {
      success: !1,
      message: n ? "service worker sessions not retrieved" : "session storage sessions not retrieved"
    }), !1;
  } catch (s) {
    return console.error(s), n && await n.clearAsync(), e.publishEvent(
      m.tryKeepExistingSessionAsync_error,
      "tokens inside ServiceWorker are invalid"
    ), !1;
  }
}, Ce = (e) => {
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
}, Pn = (e) => {
  const n = Ce(e);
  let { path: s } = n;
  s.endsWith("/") && (s = s.slice(0, -1));
  let { hash: t } = n;
  return t === "#_=_" && (t = ""), t && (s += t), s;
}, se = (e) => {
  const n = Ce(e), { search: s } = n;
  return gn(s);
}, gn = (e) => {
  const n = {};
  let s, t, o;
  const i = e.split("&");
  for (t = 0, o = i.length; t < o; t++)
    s = i[t].split("="), n[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  return n;
}, kn = (e, n, s, t, o) => (i = void 0, r = null, a = !1, c = void 0) => {
  const u = r;
  return r = { ...r }, (async () => {
    const l = i || o.getPath();
    if ("state" in r || (r.state = ee(16)), s(m.loginAsync_begin, {}), r)
      for (const d of Object.keys(r))
        d.endsWith(":token_request") && delete r[d];
    try {
      const d = a ? n.silent_redirect_uri : n.redirect_uri;
      c || (c = n.scope);
      const _ = n.extras ? { ...n.extras, ...r } : r;
      _.nonce || (_.nonce = ee(12));
      const k = { nonce: _.nonce }, A = await x(n, e), g = await t(
        n.authority,
        n.authority_configuration
      );
      let p;
      if (A)
        A.setLoginParams({ callbackPath: l, extras: u, scope: c }), await A.initAsync(g, "loginAsync", n), await A.setNonceAsync(k), A.startKeepAliveServiceWorker(), p = A;
      else {
        const w = C(e, n.storage ?? sessionStorage);
        w.setLoginParams({ callbackPath: l, extras: u, scope: c }), await w.setNonceAsync(k), p = w;
      }
      const E = {
        client_id: n.client_id,
        redirect_uri: d,
        scope: c,
        response_type: "code",
        ..._
      };
      await an(p, o)(
        g.authorizationEndpoint,
        E
      );
    } catch (d) {
      throw s(m.loginAsync_error, d), d;
    }
  })();
}, mn = (e) => async (n = !1) => {
  try {
    e.publishEvent(m.loginCallbackAsync_begin, {});
    const s = e.configuration, t = s.client_id, o = n ? s.silent_redirect_uri : s.redirect_uri, i = s.authority, r = s.token_request_timeout, a = await e.initAsync(
      i,
      s.authority_configuration
    ), c = e.location.getCurrentHref(), u = se(c), f = u.session_state, l = await x(s, e.configurationName);
    let d, _, k, A;
    if (l)
      await l.initAsync(a, "loginCallbackAsync", s), await l.setSessionStateAsync(f), _ = await l.getNonceAsync(), k = l.getLoginParams(), A = await l.getStateAsync(), l.startKeepAliveServiceWorker(), d = l;
    else {
      const v = C(
        e.configurationName,
        s.storage ?? sessionStorage
      );
      await v.setSessionStateAsync(f), _ = await v.getNonceAsync(), k = v.getLoginParams(), A = await v.getStateAsync(), d = v;
    }
    if (u.error || u.error_description)
      throw new Error(
        `Error from OIDC server: ${u.error} - ${u.error_description}`
      );
    if (u.iss && u.iss !== a.issuer)
      throw console.error(), new Error(
        `Issuer not valid (expected: ${a.issuer}, received: ${u.iss})`
      );
    if (u.state && u.state !== A)
      throw new Error(`State not valid (expected: ${A}, received: ${u.state})`);
    const g = {
      code: u.code,
      grant_type: "authorization_code",
      client_id: s.client_id,
      redirect_uri: o
    }, p = {};
    if (s.token_request_extras)
      for (const [v, W] of Object.entries(s.token_request_extras))
        p[v] = W;
    if (k != null && k.extras)
      for (const [v, W] of Object.entries(k.extras))
        v.endsWith(":token_request") && (p[v.replace(":token_request", "")] = W);
    const E = a.tokenEndpoint, w = {};
    if (s.demonstrating_proof_of_possession)
      if (l)
        w.DPoP = `DPOP_SECURED_BY_OIDC_SERVICE_WORKER_${e.configurationName}`;
      else {
        const v = await Qe(window)(
          s.demonstrating_proof_of_possession_configuration.generateKeyAlgorithm
        );
        await C(e.configurationName, s.storage).setDemonstratingProofOfPossessionJwkAsync(v), w.DPoP = await be(window)(
          s.demonstrating_proof_of_possession_configuration
        )(v, "POST", E);
      }
    const S = await cn(d)(
      E,
      { ...g, ...p },
      w,
      e.configuration.token_renew_mode,
      r
    );
    if (!S.success)
      throw new Error("Token request failed");
    let y;
    const P = S.data.tokens, h = S.data.demonstratingProofOfPossessionNonce;
    if (S.data.state !== p.state)
      throw new Error("state is not valid");
    const { isValid: I, reason: T } = Se(
      P,
      _.nonce,
      a
    );
    if (!I)
      throw new Error(`Tokens are not OpenID valid, reason: ${T}`);
    if (l) {
      if (P.refreshToken && !P.refreshToken.includes("SECURED_BY_OIDC_SERVICE_WORKER"))
        throw new Error("Refresh token should be hidden by service worker");
      if (h && (P != null && P.accessToken.includes("SECURED_BY_OIDC_SERVICE_WORKER")))
        throw new Error(
          "Demonstration of proof of possession require Access token not hidden by service worker"
        );
    }
    if (l)
      await l.initAsync(a, "syncTokensAsync", s), y = l.getLoginParams(), h && await l.setDemonstratingProofOfPossessionNonce(
        h
      );
    else {
      const v = C(e.configurationName, s.storage);
      y = v.getLoginParams(), h && await v.setDemonstratingProofOfPossessionNonce(h);
    }
    return await e.startCheckSessionAsync(
      a.checkSessionIframe,
      t,
      f,
      n
    ), e.publishEvent(m.loginCallbackAsync_end, {}), {
      tokens: P,
      state: "request.state",
      callbackPath: y.callbackPath,
      scope: u.scope,
      extras: y.extras
    };
  } catch (s) {
    throw console.error(s), e.publishEvent(m.loginCallbackAsync_error, s), s;
  }
}, pe = {
  access_token: "access_token",
  refresh_token: "refresh_token"
}, z = (e, n) => {
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
}, pn = (e) => {
  const n = {};
  if (e) {
    for (const [s, t] of Object.entries(e))
      s.includes(":") || (n[s] = t);
    return n;
  }
  return n;
}, wn = (e) => async (n) => {
  U.clearTimeout(e.timeoutId), e.timeoutId = null, e.checkSessionIFrame && e.checkSessionIFrame.stop();
  const s = await x(e.configuration, e.configurationName);
  s ? await s.clearAsync(n) : await C(e.configurationName, e.configuration.storage).clearAsync(n), e.tokens = null, e.userInfo = null;
}, An = (e, n, s, t, o) => async (i = void 0, r = null) => {
  var p, E;
  const a = e.configuration, c = await e.initAsync(
    a.authority,
    a.authority_configuration
  );
  i && typeof i != "string" && (i = void 0, t.warn("callbackPathOrUrl path is not a string"));
  const u = i ?? o.getPath();
  let f = !1;
  i && (f = i.includes("https://") || i.includes("http://"));
  const l = f ? i : o.getOrigin() + u, d = e.tokens ? e.tokens.idToken : "";
  try {
    const w = c.revocationEndpoint;
    if (w) {
      const S = [], y = e.tokens ? e.tokens.accessToken : null;
      if (y && a.logout_tokens_to_invalidate.includes(pe.access_token)) {
        const h = z(r, ":revoke_access_token"), I = ke(s)(
          w,
          y,
          ne.access_token,
          a.client_id,
          h
        );
        S.push(I);
      }
      const P = e.tokens ? e.tokens.refreshToken : null;
      if (P && a.logout_tokens_to_invalidate.includes(pe.refresh_token)) {
        const h = z(r, ":revoke_refresh_token"), I = ke(s)(
          w,
          P,
          ne.refresh_token,
          a.client_id,
          h
        );
        S.push(I);
      }
      S.length > 0 && await Promise.all(S);
    }
  } catch (w) {
    t.warn(
      "logoutAsync: error when revoking tokens, if the error persist, you ay configure property logout_tokens_to_invalidate from configuration to avoid this error"
    ), t.warn(w);
  }
  const _ = ((E = (p = e.tokens) == null ? void 0 : p.idTokenPayload) == null ? void 0 : E.sub) ?? null;
  await e.destroyAsync("LOGGED_OUT");
  for (const [, w] of Object.entries(n))
    w !== e ? await e.logoutSameTabAsync(e.configuration.client_id, _) : e.publishEvent(m.logout_from_same_tab, {});
  const k = z(r, ":oidc");
  if (k && k.no_reload === "true")
    return;
  const g = pn(r);
  if (c.endSessionEndpoint) {
    "id_token_hint" in g || (g.id_token_hint = d), !("post_logout_redirect_uri" in g) && i !== null && (g.post_logout_redirect_uri = l);
    let w = "";
    for (const [S, y] of Object.entries(g))
      y != null && (w === "" ? w += "?" : w += "&", w += `${S}=${encodeURIComponent(y)}`);
    o.open(`${c.endSessionEndpoint}${w}`);
  } else
    o.reload();
}, xe = (e, n, s = !1) => async (...t) => {
  var _;
  const [o, i, ...r] = t, a = i ? { ...i } : { method: "GET" };
  let c = new Headers();
  a.headers && (c = a.headers instanceof Headers ? a.headers : new Headers(a.headers));
  const u = {
    getTokens: () => n.tokens,
    configuration: {
      token_automatic_renew_mode: n.configuration.token_automatic_renew_mode,
      refresh_time_before_tokens_expiration_in_second: n.configuration.refresh_time_before_tokens_expiration_in_second
    },
    syncTokensInfoAsync: async () => {
      const { status: k } = await ce(n)(
        n.configuration,
        n.configurationName,
        n.tokens,
        !1
      );
      return k;
    },
    renewTokensAsync: n.renewTokensAsync.bind(n)
  }, f = await Ae(u), l = (_ = f == null ? void 0 : f.tokens) == null ? void 0 : _.accessToken;
  if (c.has("Accept") || c.set("Accept", "application/json"), l) {
    if (n.configuration.demonstrating_proof_of_possession && s) {
      const k = await n.generateDemonstrationOfProofOfPossessionAsync(
        l,
        o.toString(),
        a.method
      );
      c.set("Authorization", `DPoP ${l}`), c.set("DPoP", k);
    } else
      c.set("Authorization", `Bearer ${l}`);
    a.credentials || (a.credentials = "same-origin");
  }
  const d = { ...a, headers: c };
  return await e(o, d, ...r);
}, Sn = (e) => async (n = !1, s = !1) => {
  var u, f;
  if (e.userInfo != null && !n)
    return e.userInfo;
  const t = !n && ((u = e.configuration.storage) == null ? void 0 : u.getItem(`oidc.${e.configurationName}.userInfo`));
  if (t)
    return e.userInfo = JSON.parse(t), e.userInfo;
  const o = e.configuration, r = (await e.initAsync(
    o.authority,
    o.authority_configuration
  )).userInfoEndpoint, c = await (async () => {
    const d = await xe(fetch, e, s)(r);
    return d.status !== 200 ? null : d.json();
  })();
  return e.userInfo = c, c && ((f = e.configuration.storage) == null || f.setItem(
    `oidc.${e.configurationName}.userInfo`,
    JSON.stringify(c)
  )), c;
}, Tn = () => fetch;
class te {
  constructor(n) {
    this.authorizationEndpoint = n.authorization_endpoint, this.tokenEndpoint = n.token_endpoint, this.revocationEndpoint = n.revocation_endpoint, this.userInfoEndpoint = n.userinfo_endpoint, this.checkSessionIframe = n.check_session_iframe, this.issuer = n.issuer, this.endSessionEndpoint = n.end_session_endpoint;
  }
}
const D = {}, vn = (e, n = new dist_j()) => (s, t = "default") => (D[t] || (D[t] = new L(s, t, e, n)), D[t]), En = async (e) => {
  const { parsedTokens: n, callbackPath: s, extras: t, scope: o } = await e.loginCallbackAsync();
  return e.timeoutId = M(e, n.expiresAt, t, o), { callbackPath: s };
}, On = (e) => Math.floor(Math.random() * e), F = class F {
  constructor(n, s = "default", t, o = new dist_j()) {
    this.initPromise = null, this.tryKeepExistingSessionPromise = null, this.loginPromise = null, this.loginCallbackPromise = null, this.loginCallbackWithAutoTokensRenewPromise = null, this.userInfoPromise = null, this.renewTokensPromise = null, this.logoutPromise = null;
    let i = n.silent_login_uri;
    n.silent_redirect_uri && !n.silent_login_uri && (i = `${n.silent_redirect_uri.replace("-callback", "").replace("callback", "")}-login`);
    let r = n.refresh_time_before_tokens_expiration_in_second ?? 120;
    r > 60 && (r = r - Math.floor(Math.random() * 40)), this.location = o ?? new dist_j(), this.configuration = {
      ...n,
      silent_login_uri: i,
      token_automatic_renew_mode: n.token_automatic_renew_mode ?? B.AutomaticBeforeTokenExpiration,
      monitor_session: n.monitor_session ?? !1,
      refresh_time_before_tokens_expiration_in_second: r,
      silent_login_timeout: n.silent_login_timeout ?? 12e3,
      token_renew_mode: n.token_renew_mode ?? Q.access_token_or_id_token_invalid,
      demonstrating_proof_of_possession: n.demonstrating_proof_of_possession ?? !1,
      authority_timeout_wellknowurl_in_millisecond: n.authority_timeout_wellknowurl_in_millisecond ?? 1e4,
      logout_tokens_to_invalidate: n.logout_tokens_to_invalidate ?? [
        "access_token",
        "refresh_token"
      ],
      service_worker_activate: n.service_worker_activate ?? hn,
      demonstrating_proof_of_possession_configuration: n.demonstrating_proof_of_possession_configuration ?? Je,
      preload_user_info: n.preload_user_info ?? !1
    }, this.getFetch = t ?? Tn, this.configurationName = s, this.tokens = null, this.userInfo = null, this.events = [], this.timeoutId = null, this.loginCallbackWithAutoTokensRenewAsync.bind(this), this.initAsync.bind(this), this.loginCallbackAsync.bind(this), this.subscribeEvents.bind(this), this.removeEventSubscription.bind(this), this.publishEvent.bind(this), this.destroyAsync.bind(this), this.logoutAsync.bind(this), this.renewTokensAsync.bind(this), this.initAsync(this.configuration.authority, this.configuration.authority_configuration);
  }
  subscribeEvents(n) {
    const s = On(9999999999999).toString();
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
    if (!Object.prototype.hasOwnProperty.call(D, n) && s)
      throw Error(`OIDC library does seem initialized.
Please checkout that you are using OIDC hook inside a <OidcProvider configurationName="${n}"></OidcProvider> component.`);
    return D[n];
  }
  _silentLoginCallbackFromIFrame() {
    if (this.configuration.silent_redirect_uri && this.configuration.silent_login_uri) {
      const n = this.location, s = se(n.getCurrentHref());
      window.parent.postMessage(
        `${this.configurationName}_oidc_tokens:${JSON.stringify({ tokens: this.tokens, sessionState: s.session_state })}`,
        n.getOrigin()
      );
    }
  }
  _silentLoginErrorCallbackFromIFrame(n = null) {
    if (this.configuration.silent_redirect_uri && this.configuration.silent_login_uri) {
      const s = this.location, t = se(s.getCurrentHref());
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
        return new te({
          authorization_endpoint: s.authorization_endpoint,
          end_session_endpoint: s.end_session_endpoint,
          revocation_endpoint: s.revocation_endpoint,
          token_endpoint: s.token_endpoint,
          userinfo_endpoint: s.userinfo_endpoint,
          check_session_iframe: s.check_session_iframe,
          issuer: s.issuer
        });
      const i = await x(this.configuration, this.configurationName) ? this.configuration.storage || window.sessionStorage : this.configuration.storage;
      return await on(this.getFetch())(
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
    return this.tryKeepExistingSessionPromise !== null ? this.tryKeepExistingSessionPromise : (this.tryKeepExistingSessionPromise = yn(this), this.tryKeepExistingSessionPromise.finally(() => {
      this.tryKeepExistingSessionPromise = null;
    }));
  }
  async startCheckSessionAsync(n, s, t, o = !1) {
    await un(this, D, this.configuration)(
      n,
      s,
      t,
      o
    );
  }
  async loginAsync(n = void 0, s = null, t = !1, o = void 0, i = !1) {
    return this.logoutPromise && await this.logoutPromise, this.loginPromise !== null ? this.loginPromise : (i ? this.loginPromise = ln(
      window,
      this.configurationName,
      this.configuration,
      this.publishEvent.bind(this),
      this
    )(s, o) : this.loginPromise = kn(
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
      const t = await mn(this)(n), o = t.tokens;
      return this.tokens = o, await x(this.configuration, this.configurationName) || C(this.configurationName, this.configuration.storage).setTokens(o), this.publishEvent(F.eventNames.token_acquired, o), this.configuration.preload_user_info && await this.userInfoAsync(), {
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
      ath: await Ie(n),
      ...o
    };
    if (await x(i, this.configurationName))
      return `DPOP_SECURED_BY_OIDC_SERVICE_WORKER_${this.configurationName}#tabId=${ve(this.configurationName)}`;
    const c = C(this.configurationName, i.storage), u = await c.getDemonstratingProofOfPossessionJwkAsync(), f = c.getDemonstratingProofOfPossessionNonce();
    return f && (r.nonce = f), await be(window)(
      i.demonstrating_proof_of_possession_configuration
    )(u, t, s, r);
  }
  loginCallbackWithAutoTokensRenewAsync() {
    return this.loginCallbackWithAutoTokensRenewPromise !== null ? this.loginCallbackWithAutoTokensRenewPromise : (this.loginCallbackWithAutoTokensRenewPromise = En(this), this.loginCallbackWithAutoTokensRenewPromise.finally(() => {
      this.loginCallbackWithAutoTokensRenewPromise = null;
    }));
  }
  userInfoAsync(n = !1, s = !1) {
    return this.userInfoPromise !== null ? this.userInfoPromise : (this.userInfoPromise = Sn(this)(n, s), this.userInfoPromise.finally(() => {
      this.userInfoPromise = null;
    }));
  }
  async renewTokensAsync(n = null, s = null) {
    if (this.renewTokensPromise !== null)
      return this.renewTokensPromise;
    if (this.timeoutId)
      return U.clearTimeout(this.timeoutId), this.renewTokensPromise = Ne(this, !0, n, s), this.renewTokensPromise.finally(() => {
        this.renewTokensPromise = null;
      });
  }
  async destroyAsync(n) {
    return await wn(this)(n);
  }
  async logoutSameTabAsync(n, s) {
    this.configuration.monitor_session && this.configuration.client_id === n && s && this.tokens && this.tokens.idTokenPayload && this.tokens.idTokenPayload.sub === s && (await this.destroyAsync("LOGGED_OUT"), this.publishEvent(m.logout_from_same_tab, { mmessage: "SessionMonitor", sub: s }));
  }
  async logoutOtherTabAsync(n, s) {
    this.configuration.monitor_session && this.configuration.client_id === n && s && this.tokens && this.tokens.idTokenPayload && this.tokens.idTokenPayload.sub === s && (await this.destroyAsync("LOGGED_OUT"), this.publishEvent(m.logout_from_another_tab, { message: "SessionMonitor", sub: s }));
  }
  async logoutAsync(n = void 0, s = null) {
    return this.logoutPromise ? this.logoutPromise : (this.logoutPromise = An(
      this,
      D,
      this.getFetch(),
      console,
      this.location
    )(n, s), this.logoutPromise.finally(() => {
      this.logoutPromise = null;
    }));
  }
};
F.getOrCreate = (n, s) => (t, o = "default") => vn(n, s)(t, o), F.eventNames = m;
let L = F;
const K = class K {
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
    return new K(L.get(n));
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
      syncTokensInfoAsync: async () => {
        const { status: i } = await ce(t)(
          t.configuration,
          t.configurationName,
          t.tokens,
          !1
        );
        return i;
      },
      renewTokensAsync: t.renewTokensAsync.bind(t)
    };
    return Ae(o, n, s);
  }
  fetchWithTokens(n, s = !1) {
    return xe(n, this._oidc, s);
  }
  async userInfoAsync(n = !1, s = !1) {
    return this._oidc.userInfoAsync(n, s);
  }
  userInfo() {
    return this._oidc.userInfo;
  }
};
K.getOrCreate = (n, s = new dist_j()) => (t, o = "default") => new K(L.getOrCreate(n, s)(t, o)), K.eventNames = L.eventNames;
let we = K;


// EXTERNAL MODULE: consume shared module (default) react@^17.0.0 || ^18.0.0 || ^19.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js)
var index_js_ = __webpack_require__(83336);
;// ../node_modules/.pnpm/@axa-fr+react-oidc@7.26.0_react@18.2.0/node_modules/@axa-fr/react-oidc/dist/index.js




const dist_x = "default", dist_te = (t, n, e = !1) => async (...s) => await n().fetchWithTokens(t, e)(...s), dist_Oe = (t = null, n = dist_x, e = !1) => (s) => (o) => {
  const { fetch: c } = dist_ne(
    t || o.fetch,
    n,
    e
  );
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(s, { ...o, fetch: c });
}, dist_ne = (t = null, n = dist_x, e = !1) => {
  const s = t || window.fetch, o = we.get;
  return { fetch: (0,index_js_.useCallback)(
    (l, a) => dist_te(
      s,
      () => o(n),
      e
    )(l, a),
    [s, n]
  ) };
}, W = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "oidc-authenticating", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "oidc-authenticating__container", children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("h1", { className: "oidc-authenticating__title", children: "Error authentication" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "oidc-authenticating__content", children: "An error occurred during authentication." })
] }) }), dist_se = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "oidc-authenticating", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "oidc-authenticating__container", children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("h1", { className: "oidc-authenticating__title", children: "Authentication in progress" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "oidc-authenticating__content", children: "You will be redirected to the login page." })
] }) }), dist_oe = () => Math.random().toString(36).slice(2, 8), dist_ce = (t, n) => (e, s) => {
  if (typeof t.CustomEvent == "function")
    return new t.CustomEvent(e, s);
  const o = s || { bubbles: !1, cancelable: !1, detail: void 0 }, c = n.createEvent("CustomEvent");
  return c.initCustomEvent(
    e,
    o.bubbles,
    o.cancelable,
    o.detail
  ), c.prototype = t.Event.prototype, c;
}, dist_re = (t, n, e) => ({
  replaceState: (s, o) => {
    const c = e(), l = o || t.history.state;
    t.history.replaceState({ key: c, state: l }, null, s), t.dispatchEvent(n("popstate"));
  }
}), dist_ie = () => dist_re(window, dist_ce(window, document), dist_oe), dist_R = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "oidc-callback", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "oidc-callback__container", children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("h1", { className: "oidc-callback__title", children: "Authentication complete" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "oidc-callback__content", children: "You will be redirected to your application." })
] }) }), dist_ae = ({
  callBackError: t,
  callBackSuccess: n,
  configurationName: e,
  withCustomHistory: s
}) => {
  const [o, c] = (0,index_js_.useState)(!1);
  (0,index_js_.useEffect)(() => {
    let d = !0;
    return (async () => {
      const _ = we.get;
      try {
        const { callbackPath: h } = await _(e).loginCallbackAsync();
        (s ? s() : dist_ie()).replaceState(h || "/");
      } catch (h) {
        d && (console.warn(h), c(!0));
      }
    })(), () => {
      d = !1;
    };
  }, []);
  const l = t || W, a = n || dist_R;
  return o ? /* @__PURE__ */ (0,jsx_runtime.jsx)(l, { configurationName: e }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(a, { configurationName: e });
}, dist_le = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: "oidc-loading", children: "Loading" }), dist_de = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "oidc-serviceworker", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "oidc-serviceworker__container", children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("h1", { className: "oidc-serviceworker__title", children: "Unable to authenticate on this browser" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "oidc-serviceworker__content", children: "Your browser is not secure enough to make authentication work. Try updating your browser or use a newer browser." })
] }) }), ue = () => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "oidc-session-lost", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "oidc-session-lost__container", children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("h1", { className: "oidc-session-lost__title", children: "Session timed out" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "oidc-session-lost__content", children: "Your session has expired. Please re-authenticate." })
] }) }), dist_ke = ({ configurationName: t }) => ((0,index_js_.useEffect)(() => {
  (async () => {
    we.get(t).silentLoginCallbackAsync();
  })().catch((e) => {
    console.error("Error during silent login callback:", e);
  });
}, [t]), null), dist_he = ({ configurationName: t }) => {
  const n = se(window.location.href), e = we.get, s = e(t);
  let o = null;
  for (const [c, l] of Object.entries(n))
    c === "state" || c === "scope" || (o === null && (o = {}), o[c] = l);
  return (0,index_js_.useEffect)(() => {
    s.tokens || s.loginAsync(null, o, !0, n.scope);
  }, []), /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
}, _e = ({
  callbackErrorComponent: t,
  callbackSuccessComponent: n,
  redirect_uri: e,
  silent_redirect_uri: s,
  silent_login_uri: o,
  children: c,
  configurationName: l,
  withCustomHistory: a = null
}) => {
  const d = window ? Pn(window.location.href) : "", [u, _] = (0,index_js_.useState)(d);
  (0,index_js_.useEffect)(() => {
    const p = () => _(Pn(window.location.href));
    return p(), window.addEventListener("popstate", p, !1), () => window.removeEventListener("popstate", p, !1);
  }, []);
  const h = Pn(e);
  if (s && u === Pn(s))
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(dist_ke, { configurationName: l });
  if (o && u === Pn(o))
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(dist_he, { configurationName: l });
  switch (u) {
    case h:
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        dist_ae,
        {
          callBackError: t,
          callBackSuccess: n,
          configurationName: l,
          withCustomHistory: a
        }
      );
    default:
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: c });
  }
}, dist_ve = index_js_.memo(_e), dist_D = { name: "", data: null }, fe = ({
  loadingComponent: t,
  children: n,
  configurationName: e
}) => {
  const [s, o] = (0,index_js_.useState)(!0), c = we.get, l = c(e);
  return (0,index_js_.useEffect)(() => {
    let d = !0;
    return l && l.tryKeepExistingSessionAsync().then(() => {
      d && o(!1);
    }), () => {
      d = !1;
    };
  }, [e]), /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: s ? /* @__PURE__ */ (0,jsx_runtime.jsx)(t, { configurationName: e }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: n }) });
}, P = ({ isLoading: t, loadingComponent: n, children: e, configurationName: s }) => {
  const o = n;
  return t ? /* @__PURE__ */ (0,jsx_runtime.jsx)(o, { configurationName: s, children: e }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: e });
}, dist_Pe = ({
  children: t,
  configuration: n,
  configurationName: e = "default",
  callbackSuccessComponent: s = dist_R,
  authenticatingComponent: o = dist_se,
  loadingComponent: c = dist_le,
  serviceWorkerNotSupportedComponent: l = dist_de,
  authenticatingErrorComponent: a = W,
  sessionLostComponent: d = ue,
  onSessionLost: u = null,
  onLogoutFromAnotherTab: _ = null,
  onLogoutFromSameTab: h = null,
  withCustomHistory: p = null,
  onEvent: T = null,
  getFetch: y = null,
  location: S = null
}) => {
  if (n && n.redirect_uri && n.silent_redirect_uri && n.redirect_uri === n.silent_redirect_uri)
    throw new Error("redirect_uri and silent_redirect_uri must be different");
  const w = (L = "default") => we.getOrCreate(y ?? Tn, S ?? new dist_j())(
    n,
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
      if (k === we.eventNames.refreshTokensAsync_error || k === we.eventNames.syncTokensAsync_error) {
        if (u != null) {
          u();
          return;
        }
        C({ name: k, data: b });
      } else if (k === we.eventNames.logout_from_another_tab) {
        if (_ != null) {
          _();
          return;
        }
        C({ name: k, data: b });
      } else k === we.eventNames.logout_from_same_tab ? h != null && h() : k === we.eventNames.loginAsync_begin || k === we.eventNames.loginCallbackAsync_end || k === we.eventNames.loginAsync_error || k === we.eventNames.loginCallbackAsync_error ? C({ name: k, data: b }) : k === we.eventNames.service_worker_not_supported_by_browser && n.service_worker_only === !0 && C({ name: k, data: b });
    });
    return $(e), B(!1), () => {
      w(e).removeEventSubscription(I), C(dist_D);
    };
  }, [n, e]);
  const G = d, H = o, g = c, Q = l, J = a, A = j || K !== e, N = w(e);
  switch (z.name) {
    case we.eventNames.service_worker_not_supported_by_browser:
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        P,
        {
          loadingComponent: g,
          isLoading: A,
          configurationName: e,
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Q, { configurationName: e })
        }
      );
    case we.eventNames.loginAsync_begin:
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        P,
        {
          loadingComponent: g,
          isLoading: A,
          configurationName: e,
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(H, { configurationName: e })
        }
      );
    case we.eventNames.loginAsync_error:
    case we.eventNames.loginCallbackAsync_error:
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        P,
        {
          loadingComponent: g,
          isLoading: A,
          configurationName: e,
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(J, { configurationName: e })
        }
      );
    case we.eventNames.refreshTokensAsync_error:
    case we.eventNames.syncTokensAsync_error:
    case we.eventNames.logout_from_another_tab:
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        P,
        {
          loadingComponent: g,
          isLoading: A,
          configurationName: e,
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(G, { configurationName: e })
        }
      );
    default:
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        P,
        {
          loadingComponent: g,
          isLoading: A,
          configurationName: e,
          children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
            dist_ve,
            {
              redirect_uri: N.configuration.redirect_uri,
              silent_redirect_uri: N.configuration.silent_redirect_uri,
              silent_login_uri: N.configuration.silent_login_uri,
              callbackSuccessComponent: s,
              callbackErrorComponent: a,
              authenticatingComponent: o,
              configurationName: e,
              withCustomHistory: p,
              location: S ?? new dist_j(),
              children: /* @__PURE__ */ (0,jsx_runtime.jsx)(fe, { loadingComponent: g, configurationName: e, children: t })
            }
          )
        }
      );
  }
}, dist_pe = ({
  children: t,
  callbackPath: n = null,
  extras: e = null,
  configurationName: s = "default"
}) => {
  const o = we.get, c = o(s);
  return (0,index_js_.useEffect)(() => {
    c.tokens || c.loginAsync(n, e);
  }, [s, n, e]), c.tokens ? /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: t }) : null;
}, dist_Ee = (t, n = null, e = null, s = "default") => (o) => /* @__PURE__ */ (0,jsx_runtime.jsx)(dist_pe, { callbackPath: n, extras: e, configurationName: s, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(t, { ...o }) }), dist_F = "default", dist_U = (t, n) => {
  let e = !1;
  return t(n) && (e = t(n).tokens != null), e;
}, dist_Se = (t = dist_F) => {
  const n = we.get, [e, s] = (0,index_js_.useState)(
    dist_U(n, t)
  );
  return (0,index_js_.useEffect)(() => {
    let a = !0;
    const d = n(t);
    s(dist_U(n, t));
    const u = d.subscribeEvents((_, h) => {
      (_ === we.eventNames.logout_from_another_tab || _ === we.eventNames.logout_from_same_tab || _ === we.eventNames.token_acquired) && a && s(dist_U(n, t));
    });
    return () => {
      a = !1, d.removeEventSubscription(u);
    };
  }, [t]), { login: (a = void 0, d = void 0, u = !1, _ = void 0) => n(t).loginAsync(
    a,
    d,
    !1,
    _,
    u
  ), logout: (a = void 0, d = void 0) => n(t).logoutAsync(a, d), renewTokens: async (a = void 0) => {
    const d = await n(t).renewTokensAsync(a);
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
}, dist_q = { accessToken: null, accessTokenPayload: null }, dist_ye = (t) => {
  const n = we.get, e = n(t);
  if (e.tokens) {
    const s = e.tokens;
    return {
      accessToken: s.accessToken,
      accessTokenPayload: s.accessTokenPayload,
      generateDemonstrationOfProofOfPossessionAsync: e.configuration.demonstrating_proof_of_possession ? (o, c) => e.generateDemonstrationOfProofOfPossessionAsync(s.accessToken, o, c) : null
    };
  }
  return dist_q;
};
function dist_ge(t, n) {
  return t.configuration.demonstrating_proof_of_possession ? (e, s, o = {}) => t.generateDemonstrationOfProofOfPossessionAsync(n.accessToken, e, s, o) : null;
}
const dist_Ne = (t = dist_F) => {
  const n = we.get, [e, s] = (0,index_js_.useState)(dist_ye(t));
  return (0,index_js_.useEffect)(() => {
    let o = !0;
    const c = n(t);
    if (c.tokens) {
      const a = c.tokens;
      s({
        accessToken: a.accessToken,
        accessTokenPayload: a.accessTokenPayload
      });
    }
    const l = c.subscribeEvents((a, d) => {
      if ((a === we.eventNames.token_renewed || a === we.eventNames.token_acquired || a === we.eventNames.logout_from_another_tab || a === we.eventNames.logout_from_same_tab || a === we.eventNames.refreshTokensAsync_error || a === we.eventNames.syncTokensAsync_error) && o) {
        const u = c.tokens;
        s(
          u != null ? {
            accessToken: u.accessToken,
            accessTokenPayload: u.accessTokenPayload,
            generateDemonstrationOfProofOfPossessionAsync: dist_ge(c, u)
          } : dist_q
        );
      }
    });
    return () => {
      o = !1, c.removeEventSubscription(l);
    };
  }, [t]), e;
}, dist_Y = { idToken: null, idTokenPayload: null }, dist_be = (t) => {
  const n = we.get, e = n(t);
  if (e.tokens) {
    const s = e.tokens;
    return { idToken: s.idToken, idTokenPayload: s.idTokenPayload };
  }
  return dist_Y;
}, Le = (t = dist_F) => {
  const n = we.get, [e, s] = (0,index_js_.useState)(dist_be(t));
  return (0,index_js_.useEffect)(() => {
    let o = !0;
    const c = n(t);
    if (c.tokens) {
      const a = c.tokens;
      s({ idToken: a.idToken, idTokenPayload: a.idTokenPayload });
    }
    const l = c.subscribeEvents((a, d) => {
      if ((a === we.eventNames.token_renewed || a === we.eventNames.token_acquired || a === we.eventNames.logout_from_another_tab || a === we.eventNames.logout_from_same_tab || a === we.eventNames.refreshTokensAsync_error || a === we.eventNames.syncTokensAsync_error) && o) {
        const u = c.tokens;
        s(
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
const dist_Ie = (t = "default", n = !1) => {
  const s = we.get(t).userInfo(), [o, c] = (0,index_js_.useState)({
    user: s,
    status: s ? "User loaded" : "Unauthenticated"
    /* Unauthenticated */
  }), [l, a] = (0,index_js_.useState)(s ? 1 : 0), [d, u] = (0,index_js_.useState)(s ? 1 : 0);
  (0,index_js_.useEffect)(() => {
    const h = we.get(t);
    let p = !0;
    if (h && h.tokens) {
      const y = l === d;
      if (y && h.userInfo())
        return;
      c({
        ...o,
        status: "Loading user"
        /* Loading */
      }), h.userInfoAsync(!y, n).then((S) => {
        p && c({
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
    const T = h.subscribeEvents((y) => {
      (y === we.eventNames.logout_from_another_tab || y === we.eventNames.logout_from_same_tab) && p && c({
        user: null,
        status: "Unauthenticated"
        /* Unauthenticated */
      });
    });
    return () => {
      p = !1, h.removeEventSubscription(T);
    };
  }, [l]);
  const _ = () => {
    a(l + 1);
  };
  return { oidcUser: o.user, oidcUserLoadingState: o.status, reloadOidcUser: _ };
};



/***/ }

}]);