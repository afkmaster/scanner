var __Html5QrcodeLibrary__;
(() => {
    var t = {
            449: function(t, e, r) {
                ! function(t) {
                    "use strict";

                    function e(t) {
                        return null == t
                    }
                    var n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                    };
                    var i, o = function(t) {
                        function e(e) {
                            var r, n, i, o = this.constructor,
                                s = t.call(this, e) || this;
                            return Object.defineProperty(s, "name", {
                                    value: o.name,
                                    enumerable: !1
                                }), r = s, n = o.prototype, (i = Object.setPrototypeOf) ? i(r, n) : r.__proto__ = n,
                                function(t, e) {
                                    void 0 === e && (e = t.constructor);
                                    var r = Error.captureStackTrace;
                                    r && r(t, e)
                                }(s), s
                        }
                        return function(t, e) {
                            function r() {
                                this.constructor = t
                            }
                            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                        }(e, t), e
                    }(Error);
                    class s extends o {
                        constructor(t = undefined) {
                            super(t), this.message = t
                        }
                        getKind() {
                            return this.constructor.kind
                        }
                    }
                    s.kind = "Exception";
                    class a extends s {}
                    a.kind = "ArgumentException";
                    class c extends s {}
                    c.kind = "IllegalArgumentException";
                    class l {
                        constructor(t) {
                            if (this.binarizer = t, null === t) throw new c("Binarizer must be non-null.")
                        }
                        getWidth() {
                            return this.binarizer.getWidth()
                        }
                        getHeight() {
                            return this.binarizer.getHeight()
                        }
                        getBlackRow(t, e) {
                            return this.binarizer.getBlackRow(t, e)
                        }
                        getBlackMatrix() {
                            return null !== this.matrix && void 0 !== this.matrix || (this.matrix = this.binarizer.getBlackMatrix()), this.matrix
                        }
                        isCropSupported() {
                            return this.binarizer.getLuminanceSource().isCropSupported()
                        }
                        crop(t, e, r, n) {
                            const i = this.binarizer.getLuminanceSource().crop(t, e, r, n);
                            return new l(this.binarizer.createBinarizer(i))
                        }
                        isRotateSupported() {
                            return this.binarizer.getLuminanceSource().isRotateSupported()
                        }
                        rotateCounterClockwise() {
                            const t = this.binarizer.getLuminanceSource().rotateCounterClockwise();
                            return new l(this.binarizer.createBinarizer(t))
                        }
                        rotateCounterClockwise45() {
                            const t = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
                            return new l(this.binarizer.createBinarizer(t))
                        }
                        toString() {
                            try {
                                return this.getBlackMatrix().toString()
                            } catch (t) {
                                return ""
                            }
                        }
                    }
                    class h extends s {
                        static getChecksumInstance() {
                            return new h
                        }
                    }
                    h.kind = "ChecksumException";
                    class u {
                        constructor(t) {
                            this.source = t
                        }
                        getLuminanceSource() {
                            return this.source
                        }
                        getWidth() {
                            return this.source.getWidth()
                        }
                        getHeight() {
                            return this.source.getHeight()
                        }
                    }
                    class d {
                        static arraycopy(t, e, r, n, i) {
                            for (; i--;) r[n++] = t[e++]
                        }
                        static currentTimeMillis() {
                            return Date.now()
                        }
                    }
                    class f extends s {}
                    f.kind = "IndexOutOfBoundsException";
                    class g extends f {
                        constructor(t = undefined, e = undefined) {
                            super(e), this.index = t, this.message = e
                        }
                    }
                    g.kind = "ArrayIndexOutOfBoundsException";
                    class w {
                        static fill(t, e) {
                            for (let r = 0, n = t.length; r < n; r++) t[r] = e
                        }
                        static fillWithin(t, e, r, n) {
                            w.rangeCheck(t.length, e, r);
                            for (let i = e; i < r; i++) t[i] = n
                        }
                        static rangeCheck(t, e, r) {
                            if (e > r) throw new c("fromIndex(" + e + ") > toIndex(" + r + ")");
                            if (e < 0) throw new g(e);
                            if (r > t) throw new g(r)
                        }
                        static asList(...t) {
                            return t
                        }
                        static create(t, e, r) {
                            return Array.from({
                                length: t
                            }).map((t => Array.from({
                                length: e
                            }).fill(r)))
                        }
                        static createInt32Array(t, e, r) {
                            return Array.from({
                                length: t
                            }).map((t => Int32Array.from({
                                length: e
                            }).fill(r)))
                        }
                        static equals(t, e) {
                            if (!t) return !1;
                            if (!e) return !1;
                            if (!t.length) return !1;
                            if (!e.length) return !1;
                            if (t.length !== e.length) return !1;
                            for (let r = 0, n = t.length; r < n; r++)
                                if (t[r] !== e[r]) return !1;
                            return !0
                        }
                        static hashCode(t) {
                            if (null === t) return 0;
                            let e = 1;
                            for (const r of t) e = 31 * e + r;
                            return e
                        }
                        static fillUint8Array(t, e) {
                            for (let r = 0; r !== t.length; r++) t[r] = e
                        }
                        static copyOf(t, e) {
                            return t.slice(0, e)
                        }
                        static copyOfUint8Array(t, e) {
                            if (t.length <= e) {
                                const r = new Uint8Array(e);
                                return r.set(t), r
                            }
                            return t.slice(0, e)
                        }
                        static copyOfRange(t, e, r) {
                            const n = r - e,
                                i = new Int32Array(n);
                            return d.arraycopy(t, e, i, 0, n), i
                        }
                        static binarySearch(t, e, r) {
                            void 0 === r && (r = w.numberComparator);
                            let n = 0,
                                i = t.length - 1;
                            for (; n <= i;) {
                                const o = i + n >> 1,
                                    s = r(e, t[o]);
                                if (s > 0) n = o + 1;
                                else {
                                    if (!(s < 0)) return o;
                                    i = o - 1
                                }
                            }
                            return -n - 1
                        }
                        static numberComparator(t, e) {
                            return t - e
                        }
                    }
                    class m {
                        static numberOfTrailingZeros(t) {
                            let e;
                            if (0 === t) return 32;
                            let r = 31;
                            return e = t << 16, 0 !== e && (r -= 16, t = e), e = t << 8, 0 !== e && (r -= 8, t = e), e = t << 4, 0 !== e && (r -= 4, t = e), e = t << 2, 0 !== e && (r -= 2, t = e), r - (t << 1 >>> 31)
                        }
                        static numberOfLeadingZeros(t) {
                            if (0 === t) return 32;
                            let e = 1;
                            return t >>> 16 == 0 && (e += 16, t <<= 16), t >>> 24 == 0 && (e += 8, t <<= 8), t >>> 28 == 0 && (e += 4, t <<= 4), t >>> 30 == 0 && (e += 2, t <<= 2), e -= t >>> 31, e
                        }
                        static toHexString(t) {
                            return t.toString(16)
                        }
                        static toBinaryString(t) {
                            return String(parseInt(String(t), 2))
                        }
                        static bitCount(t) {
                            return t = (t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135, 63 & (t += t >>> 8) + (t >>> 16)
                        }
                        static truncDivision(t, e) {
                            return Math.trunc(t / e)
                        }
                        static parseInt(t, e = undefined) {
                            return parseInt(t, e)
                        }
                    }
                    m.MIN_VALUE_32_BITS = -2147483648, m.MAX_VALUE = Number.MAX_SAFE_INTEGER;
                    class p {
                        constructor(t, e) {
                            void 0 === t ? (this.size = 0, this.bits = new Int32Array(1)) : (this.size = t, this.bits = null == e ? p.makeArray(t) : e)
                        }
                        getSize() {
                            return this.size
                        }
                        getSizeInBytes() {
                            return Math.floor((this.size + 7) / 8)
                        }
                        ensureCapacity(t) {
                            if (t > 32 * this.bits.length) {
                                const e = p.makeArray(t);
                                d.arraycopy(this.bits, 0, e, 0, this.bits.length), this.bits = e
                            }
                        }
                        get(t) {
                            return 0 != (this.bits[Math.floor(t / 32)] & 1 << (31 & t))
                        }
                        set(t) {
                            this.bits[Math.floor(t / 32)] |= 1 << (31 & t)
                        }
                        flip(t) {
                            this.bits[Math.floor(t / 32)] ^= 1 << (31 & t)
                        }
                        getNextSet(t) {
                            const e = this.size;
                            if (t >= e) return e;
                            const r = this.bits;
                            let n = Math.floor(t / 32),
                                i = r[n];
                            i &= ~((1 << (31 & t)) - 1);
                            const o = r.length;
                            for (; 0 === i;) {
                                if (++n === o) return e;
                                i = r[n]
                            }
                            const s = 32 * n + m.numberOfTrailingZeros(i);
                            return s > e ? e : s
                        }
                        getNextUnset(t) {
                            const e = this.size;
                            if (t >= e) return e;
                            const r = this.bits;
                            let n = Math.floor(t / 32),
                                i = ~r[n];
                            i &= ~((1 << (31 & t)) - 1);
                            const o = r.length;
                            for (; 0 === i;) {
                                if (++n === o) return e;
                                i = ~r[n]
                            }
                            const s = 32 * n + m.numberOfTrailingZeros(i);
                            return s > e ? e : s
                        }
                        setBulk(t, e) {
                            this.bits[Math.floor(t / 32)] = e
                        }
                        setRange(t, e) {
                            if (e < t || t < 0 || e > this.size) throw new c;
                            if (e === t) return;
                            e--;
                            const r = Math.floor(t / 32),
                                n = Math.floor(e / 32),
                                i = this.bits;
                            for (let o = r; o <= n; o++) {
                                const s = (2 << (o < n ? 31 : 31 & e)) - (1 << (o > r ? 0 : 31 & t));
                                i[o] |= s
                            }
                        }
                        clear() {
                            const t = this.bits.length,
                                e = this.bits;
                            for (let r = 0; r < t; r++) e[r] = 0
                        }
                        isRange(t, e, r) {
                            if (e < t || t < 0 || e > this.size) throw new c;
                            if (e === t) return !0;
                            e--;
                            const n = Math.floor(t / 32),
                                i = Math.floor(e / 32),
                                o = this.bits;
                            for (let s = n; s <= i; s++) {
                                const a = (2 << (s < i ? 31 : 31 & e)) - (1 << (s > n ? 0 : 31 & t)) & 4294967295;
                                if ((o[s] & a) !== (r ? a : 0)) return !1
                            }
                            return !0
                        }
                        appendBit(t) {
                            this.ensureCapacity(this.size + 1), t && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)), this.size++
                        }
                        appendBits(t, e) {
                            if (e < 0 || e > 32) throw new c("Num bits must be between 0 and 32");
                            this.ensureCapacity(this.size + e);
                            for (let r = e; r > 0; r--) this.appendBit(1 == (t >> r - 1 & 1))
                        }
                        appendBitArray(t) {
                            const e = t.size;
                            this.ensureCapacity(this.size + e);
                            for (let r = 0; r < e; r++) this.appendBit(t.get(r))
                        }
                        xor(t) {
                            if (this.size !== t.size) throw new c("Sizes don't match");
                            const e = this.bits;
                            for (let r = 0, n = e.length; r < n; r++) e[r] ^= t.bits[r]
                        }
                        toBytes(t, e, r, n) {
                            for (let i = 0; i < n; i++) {
                                let n = 0;
                                for (let e = 0; e < 8; e++) this.get(t) && (n |= 1 << 7 - e), t++;
                                e[r + i] = n
                            }
                        }
                        getBitArray() {
                            return this.bits
                        }
                        reverse() {
                            const t = new Int32Array(this.bits.length),
                                e = Math.floor((this.size - 1) / 32),
                                r = e + 1,
                                n = this.bits;
                            for (let i = 0; i < r; i++) {
                                let r = n[i];
                                r = r >> 1 & 1431655765 | (1431655765 & r) << 1, r = r >> 2 & 858993459 | (858993459 & r) << 2, r = r >> 4 & 252645135 | (252645135 & r) << 4, r = r >> 8 & 16711935 | (16711935 & r) << 8, r = r >> 16 & 65535 | (65535 & r) << 16, t[e - i] = r
                            }
                            if (this.size !== 32 * r) {
                                const e = 32 * r - this.size;
                                let n = t[0] >>> e;
                                for (let i = 1; i < r; i++) {
                                    const r = t[i];
                                    n |= r << 32 - e, t[i - 1] = n, n = r >>> e
                                }
                                t[r - 1] = n
                            }
                            this.bits = t
                        }
                        static makeArray(t) {
                            return new Int32Array(Math.floor((t + 31) / 32))
                        }
                        equals(t) {
                            if (!(t instanceof p)) return !1;
                            const e = t;
                            return this.size === e.size && w.equals(this.bits, e.bits)
                        }
                        hashCode() {
                            return 31 * this.size + w.hashCode(this.bits)
                        }
                        toString() {
                            let t = "";
                            for (let e = 0, r = this.size; e < r; e++) 0 == (7 & e) && (t += " "), t += this.get(e) ? "X" : ".";
                            return t
                        }
                        clone() {
                            return new p(this.size, this.bits.slice())
                        }
                    }! function(t) {
                        t[t.OTHER = 0] = "OTHER", t[t.PURE_BARCODE = 1] = "PURE_BARCODE", t[t.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS", t[t.TRY_HARDER = 3] = "TRY_HARDER", t[t.CHARACTER_SET = 4] = "CHARACTER_SET", t[t.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS", t[t.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT", t[t.ASSUME_GS1 = 7] = "ASSUME_GS1", t[t.RETURN_CODABAR_START_END = 8] = "RETURN_CODABAR_START_END", t[t.NEED_RESULT_POINT_CALLBACK = 9] = "NEED_RESULT_POINT_CALLBACK", t[t.ALLOWED_EAN_EXTENSIONS = 10] = "ALLOWED_EAN_EXTENSIONS"
                    }(i || (i = {}));
                    var A, C = i;
                    class E extends s {
                        static getFormatInstance() {
                            return new E
                        }
                    }
                    E.kind = "FormatException",
                        function(t) {
                            t[t.Cp437 = 0] = "Cp437", t[t.ISO8859_1 = 1] = "ISO8859_1", t[t.ISO8859_2 = 2] = "ISO8859_2", t[t.ISO8859_3 = 3] = "ISO8859_3", t[t.ISO8859_4 = 4] = "ISO8859_4", t[t.ISO8859_5 = 5] = "ISO8859_5", t[t.ISO8859_6 = 6] = "ISO8859_6", t[t.ISO8859_7 = 7] = "ISO8859_7", t[t.ISO8859_8 = 8] = "ISO8859_8", t[t.ISO8859_9 = 9] = "ISO8859_9", t[t.ISO8859_10 = 10] = "ISO8859_10", t[t.ISO8859_11 = 11] = "ISO8859_11", t[t.ISO8859_13 = 12] = "ISO8859_13", t[t.ISO8859_14 = 13] = "ISO8859_14", t[t.ISO8859_15 = 14] = "ISO8859_15", t[t.ISO8859_16 = 15] = "ISO8859_16", t[t.SJIS = 16] = "SJIS", t[t.Cp1250 = 17] = "Cp1250", t[t.Cp1251 = 18] = "Cp1251", t[t.Cp1252 = 19] = "Cp1252", t[t.Cp1256 = 20] = "Cp1256", t[t.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked", t[t.UTF8 = 22] = "UTF8", t[t.ASCII = 23] = "ASCII", t[t.Big5 = 24] = "Big5", t[t.GB18030 = 25] = "GB18030", t[t.EUC_KR = 26] = "EUC_KR"
                        }(A || (A = {}));
                    class I {
                        constructor(t, e, r, ...n) {
                            this.valueIdentifier = t, this.name = r, this.values = "number" == typeof e ? Int32Array.from([e]) : e, this.otherEncodingNames = n, I.VALUE_IDENTIFIER_TO_ECI.set(t, this), I.NAME_TO_ECI.set(r, this);
                            const i = this.values;
                            for (let t = 0, e = i.length; t !== e; t++) {
                                const e = i[t];
                                I.VALUES_TO_ECI.set(e, this)
                            }
                            for (const t of n) I.NAME_TO_ECI.set(t, this)
                        }
                        getValueIdentifier() {
                            return this.valueIdentifier
                        }
                        getName() {
                            return this.name
                        }
                        getValue() {
                            return this.values[0]
                        }
                        static getCharacterSetECIByValue(t) {
                            if (t < 0 || t >= 900) throw new E("incorect value");
                            const e = I.VALUES_TO_ECI.get(t);
                            if (void 0 === e) throw new E("incorect value");
                            return e
                        }
                        static getCharacterSetECIByName(t) {
                            const e = I.NAME_TO_ECI.get(t);
                            if (void 0 === e) throw new E("incorect value");
                            return e
                        }
                        equals(t) {
                            if (!(t instanceof I)) return !1;
                            const e = t;
                            return this.getName() === e.getName()
                        }
                    }
                    I.VALUE_IDENTIFIER_TO_ECI = new Map, I.VALUES_TO_ECI = new Map, I.NAME_TO_ECI = new Map, I.Cp437 = new I(A.Cp437, Int32Array.from([0, 2]), "Cp437"), I.ISO8859_1 = new I(A.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"), I.ISO8859_2 = new I(A.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"), I.ISO8859_3 = new I(A.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3"), I.ISO8859_4 = new I(A.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"), I.ISO8859_5 = new I(A.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5"), I.ISO8859_6 = new I(A.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"), I.ISO8859_7 = new I(A.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"), I.ISO8859_8 = new I(A.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8"), I.ISO8859_9 = new I(A.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"), I.ISO8859_10 = new I(A.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10"), I.ISO8859_11 = new I(A.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"), I.ISO8859_13 = new I(A.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"), I.ISO8859_14 = new I(A.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14"), I.ISO8859_15 = new I(A.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"), I.ISO8859_16 = new I(A.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16"), I.SJIS = new I(A.SJIS, 20, "SJIS", "Shift_JIS"), I.Cp1250 = new I(A.Cp1250, 21, "Cp1250", "windows-1250"), I.Cp1251 = new I(A.Cp1251, 22, "Cp1251", "windows-1251"), I.Cp1252 = new I(A.Cp1252, 23, "Cp1252", "windows-1252"), I.Cp1256 = new I(A.Cp1256, 24, "Cp1256", "windows-1256"), I.UnicodeBigUnmarked = new I(A.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"), I.UTF8 = new I(A.UTF8, 26, "UTF8", "UTF-8"), I.ASCII = new I(A.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII"), I.Big5 = new I(A.Big5, 28, "Big5"), I.GB18030 = new I(A.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK"), I.EUC_KR = new I(A.EUC_KR, 30, "EUC_KR", "EUC-KR");
                    class S extends s {}
                    S.kind = "UnsupportedOperationException";
                    class _ {
                        static decode(t, e) {
                            const r = this.encodingName(e);
                            return this.customDecoder ? this.customDecoder(t, r) : "undefined" == typeof TextDecoder || this.shouldDecodeOnFallback(r) ? this.decodeFallback(t, r) : new TextDecoder(r).decode(t)
                        }
                        static shouldDecodeOnFallback(t) {
                            return !_.isBrowser() && "ISO-8859-1" === t
                        }
                        static encode(t, e) {
                            const r = this.encodingName(e);
                            return this.customEncoder ? this.customEncoder(t, r) : "undefined" == typeof TextEncoder ? this.encodeFallback(t) : (new TextEncoder).encode(t)
                        }
                        static isBrowser() {
                            return "undefined" != typeof window && "[object Window]" === {}.toString.call(window)
                        }
                        static encodingName(t) {
                            return "string" == typeof t ? t : t.getName()
                        }
                        static encodingCharacterSet(t) {
                            return t instanceof I ? t : I.getCharacterSetECIByName(t)
                        }
                        static decodeFallback(t, e) {
                            const r = this.encodingCharacterSet(e);
                            if (_.isDecodeFallbackSupported(r)) {
                                let e = "";
                                for (let r = 0, n = t.length; r < n; r++) {
                                    let n = t[r].toString(16);
                                    n.length < 2 && (n = "0" + n), e += "%" + n
                                }
                                return decodeURIComponent(e)
                            }
                            if (r.equals(I.UnicodeBigUnmarked)) return String.fromCharCode.apply(null, new Uint16Array(t.buffer));
                            throw new S(`Encoding ${this.encodingName(e)} not supported by fallback.`)
                        }
                        static isDecodeFallbackSupported(t) {
                            return t.equals(I.UTF8) || t.equals(I.ISO8859_1) || t.equals(I.ASCII)
                        }
                        static encodeFallback(t) {
                            const e = btoa(unescape(encodeURIComponent(t))).split(""),
                                r = [];
                            for (let t = 0; t < e.length; t++) r.push(e[t].charCodeAt(0));
                            return new Uint8Array(r)
                        }
                    }
                    class T {
                        static castAsNonUtf8Char(t, e = null) {
                            const r = e ? e.getName() : this.ISO88591;
                            return _.decode(new Uint8Array([t]), r)
                        }
                        static guessEncoding(t, e) {
                            if (null != e && void 0 !== e.get(C.CHARACTER_SET)) return e.get(C.CHARACTER_SET).toString();
                            const r = t.length;
                            let n = !0,
                                i = !0,
                                o = !0,
                                s = 0,
                                a = 0,
                                c = 0,
                                l = 0,
                                h = 0,
                                u = 0,
                                d = 0,
                                f = 0,
                                g = 0,
                                w = 0,
                                m = 0;
                            const p = t.length > 3 && 239 === t[0] && 187 === t[1] && 191 === t[2];
                            for (let e = 0; e < r && (n || i || o); e++) {
                                const r = 255 & t[e];
                                o && (s > 0 ? 0 == (128 & r) ? o = !1 : s-- : 0 != (128 & r) && (0 == (64 & r) ? o = !1 : (s++, 0 == (32 & r) ? a++ : (s++, 0 == (16 & r) ? c++ : (s++, 0 == (8 & r) ? l++ : o = !1))))), n && (r > 127 && r < 160 ? n = !1 : r > 159 && (r < 192 || 215 === r || 247 === r) && m++), i && (h > 0 ? r < 64 || 127 === r || r > 252 ? i = !1 : h-- : 128 === r || 160 === r || r > 239 ? i = !1 : r > 160 && r < 224 ? (u++, f = 0, d++, d > g && (g = d)) : r > 127 ? (h++, d = 0, f++, f > w && (w = f)) : (d = 0, f = 0))
                            }
                            return o && s > 0 && (o = !1), i && h > 0 && (i = !1), o && (p || a + c + l > 0) ? T.UTF8 : i && (T.ASSUME_SHIFT_JIS || g >= 3 || w >= 3) ? T.SHIFT_JIS : n && i ? 2 === g && 2 === u || 10 * m >= r ? T.SHIFT_JIS : T.ISO88591 : n ? T.ISO88591 : i ? T.SHIFT_JIS : o ? T.UTF8 : T.PLATFORM_DEFAULT_ENCODING
                        }
                        static format(t, ...e) {
                            let r = -1;
                            return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, (function(t, n, i, o, s, a) {
                                if ("%%" === t) return "%";
                                if (void 0 === e[++r]) return;
                                t = o ? parseInt(o.substr(1)) : void 0;
                                let c, l = s ? parseInt(s.substr(1)) : void 0;
                                switch (a) {
                                    case "s":
                                        c = e[r];
                                        break;
                                    case "c":
                                        c = e[r][0];
                                        break;
                                    case "f":
                                        c = parseFloat(e[r]).toFixed(t);
                                        break;
                                    case "p":
                                        c = parseFloat(e[r]).toPrecision(t);
                                        break;
                                    case "e":
                                        c = parseFloat(e[r]).toExponential(t);
                                        break;
                                    case "x":
                                        c = parseInt(e[r]).toString(l || 16);
                                        break;
                                    case "d":
                                        c = parseFloat(parseInt(e[r], l || 10).toPrecision(t)).toFixed(0)
                                }
                                c = "object" == typeof c ? JSON.stringify(c) : (+c).toString(l);
                                let h = parseInt(i),
                                    u = i && i[0] + "" == "0" ? "0" : " ";
                                for (; c.length < h;) c = void 0 !== n ? c + u : u + c;
                                return c
                            }))
                        }
                        static getBytes(t, e) {
                            return _.encode(t, e)
                        }
                        static getCharCode(t, e = 0) {
                            return t.charCodeAt(e)
                        }
                        static getCharAt(t) {
                            return String.fromCharCode(t)
                        }
                    }
                    T.SHIFT_JIS = I.SJIS.getName(), T.GB2312 = "GB2312", T.ISO88591 = I.ISO8859_1.getName(), T.EUC_JP = "EUC_JP", T.UTF8 = I.UTF8.getName(), T.PLATFORM_DEFAULT_ENCODING = T.UTF8, T.ASSUME_SHIFT_JIS = !1;
                    class y {
                        constructor(t = "") {
                            this.value = t
                        }
                        enableDecoding(t) {
                            return this.encoding = t, this
                        }
                        append(t) {
                            return "string" == typeof t ? this.value += t.toString() : this.encoding ? this.value += T.castAsNonUtf8Char(t, this.encoding) : this.value += String.fromCharCode(t), this
                        }
                        appendChars(t, e, r) {
                            for (let n = e; e < e + r; n++) this.append(t[n]);
                            return this
                        }
                        length() {
                            return this.value.length
                        }
                        charAt(t) {
                            return this.value.charAt(t)
                        }
                        deleteCharAt(t) {
                            this.value = this.value.substr(0, t) + this.value.substring(t + 1)
                        }
                        setCharAt(t, e) {
                            this.value = this.value.substr(0, t) + e + this.value.substr(t + 1)
                        }
                        substring(t, e) {
                            return this.value.substring(t, e)
                        }
                        setLengthToZero() {
                            this.value = ""
                        }
                        toString() {
                            return this.value
                        }
                        insert(t, e) {
                            this.value = this.value.substr(0, t) + e + this.value.substr(t + e.length)
                        }
                    }
                    class N {
                        constructor(t, e, r, n) {
                            if (this.width = t, this.height = e, this.rowSize = r, this.bits = n, null == e && (e = t), this.height = e, t < 1 || e < 1) throw new c("Both dimensions must be greater than 0");
                            null == r && (r = Math.floor((t + 31) / 32)), this.rowSize = r, null == n && (this.bits = new Int32Array(this.rowSize * this.height))
                        }
                        static parseFromBooleanArray(t) {
                            const e = t.length,
                                r = t[0].length,
                                n = new N(r, e);
                            for (let i = 0; i < e; i++) {
                                const e = t[i];
                                for (let t = 0; t < r; t++) e[t] && n.set(t, i)
                            }
                            return n
                        }
                        static parseFromString(t, e, r) {
                            if (null === t) throw new c("stringRepresentation cannot be null");
                            const n = new Array(t.length);
                            let i = 0,
                                o = 0,
                                s = -1,
                                a = 0,
                                l = 0;
                            for (; l < t.length;)
                                if ("\n" === t.charAt(l) || "\r" === t.charAt(l)) {
                                    if (i > o) {
                                        if (-1 === s) s = i - o;
                                        else if (i - o !== s) throw new c("row lengths do not match");
                                        o = i, a++
                                    }
                                    l++
                                } else if (t.substring(l, l + e.length) === e) l += e.length, n[i] = !0, i++;
                            else {
                                if (t.substring(l, l + r.length) !== r) throw new c("illegal character encountered: " + t.substring(l));
                                l += r.length, n[i] = !1, i++
                            }
                            if (i > o) {
                                if (-1 === s) s = i - o;
                                else if (i - o !== s) throw new c("row lengths do not match");
                                a++
                            }
                            const h = new N(s, a);
                            for (let t = 0; t < i; t++) n[t] && h.set(Math.floor(t % s), Math.floor(t / s));
                            return h
                        }
                        get(t, e) {
                            const r = e * this.rowSize + Math.floor(t / 32);
                            return 0 != (this.bits[r] >>> (31 & t) & 1)
                        }
                        set(t, e) {
                            const r = e * this.rowSize + Math.floor(t / 32);
                            this.bits[r] |= 1 << (31 & t) & 4294967295
                        }
                        unset(t, e) {
                            const r = e * this.rowSize + Math.floor(t / 32);
                            this.bits[r] &= ~(1 << (31 & t) & 4294967295)
                        }
                        flip(t, e) {
                            const r = e * this.rowSize + Math.floor(t / 32);
                            this.bits[r] ^= 1 << (31 & t) & 4294967295
                        }
                        xor(t) {
                            if (this.width !== t.getWidth() || this.height !== t.getHeight() || this.rowSize !== t.getRowSize()) throw new c("input matrix dimensions do not match");
                            const e = new p(Math.floor(this.width / 32) + 1),
                                r = this.rowSize,
                                n = this.bits;
                            for (let i = 0, o = this.height; i < o; i++) {
                                const o = i * r,
                                    s = t.getRow(i, e).getBitArray();
                                for (let t = 0; t < r; t++) n[o + t] ^= s[t]
                            }
                        }
                        clear() {
                            const t = this.bits,
                                e = t.length;
                            for (let r = 0; r < e; r++) t[r] = 0
                        }
                        setRegion(t, e, r, n) {
                            if (e < 0 || t < 0) throw new c("Left and top must be nonnegative");
                            if (n < 1 || r < 1) throw new c("Height and width must be at least 1");
                            const i = t + r,
                                o = e + n;
                            if (o > this.height || i > this.width) throw new c("The region must fit inside the matrix");
                            const s = this.rowSize,
                                a = this.bits;
                            for (let r = e; r < o; r++) {
                                const e = r * s;
                                for (let r = t; r < i; r++) a[e + Math.floor(r / 32)] |= 1 << (31 & r) & 4294967295
                            }
                        }
                        getRow(t, e) {
                            null == e || e.getSize() < this.width ? e = new p(this.width) : e.clear();
                            const r = this.rowSize,
                                n = this.bits,
                                i = t * r;
                            for (let t = 0; t < r; t++) e.setBulk(32 * t, n[i + t]);
                            return e
                        }
                        setRow(t, e) {
                            d.arraycopy(e.getBitArray(), 0, this.bits, t * this.rowSize, this.rowSize)
                        }
                        rotate180() {
                            const t = this.getWidth(),
                                e = this.getHeight();
                            let r = new p(t),
                                n = new p(t);
                            for (let t = 0, i = Math.floor((e + 1) / 2); t < i; t++) r = this.getRow(t, r), n = this.getRow(e - 1 - t, n), r.reverse(), n.reverse(), this.setRow(t, n), this.setRow(e - 1 - t, r)
                        }
                        getEnclosingRectangle() {
                            const t = this.width,
                                e = this.height,
                                r = this.rowSize,
                                n = this.bits;
                            let i = t,
                                o = e,
                                s = -1,
                                a = -1;
                            for (let t = 0; t < e; t++)
                                for (let e = 0; e < r; e++) {
                                    const c = n[t * r + e];
                                    if (0 !== c) {
                                        if (t < o && (o = t), t > a && (a = t), 32 * e < i) {
                                            let t = 0;
                                            for (; 0 == (c << 31 - t & 4294967295);) t++;
                                            32 * e + t < i && (i = 32 * e + t)
                                        }
                                        if (32 * e + 31 > s) {
                                            let t = 31;
                                            for (; c >>> t == 0;) t--;
                                            32 * e + t > s && (s = 32 * e + t)
                                        }
                                    }
                                }
                            return s < i || a < o ? null : Int32Array.from([i, o, s - i + 1, a - o + 1])
                        }
                        getTopLeftOnBit() {
                            const t = this.rowSize,
                                e = this.bits;
                            let r = 0;
                            for (; r < e.length && 0 === e[r];) r++;
                            if (r === e.length) return null;
                            const n = r / t;
                            let i = r % t * 32;
                            const o = e[r];
                            let s = 0;
                            for (; 0 == (o << 31 - s & 4294967295);) s++;
                            return i += s, Int32Array.from([i, n])
                        }
                        getBottomRightOnBit() {
                            const t = this.rowSize,
                                e = this.bits;
                            let r = e.length - 1;
                            for (; r >= 0 && 0 === e[r];) r--;
                            if (r < 0) return null;
                            const n = Math.floor(r / t);
                            let i = 32 * Math.floor(r % t);
                            const o = e[r];
                            let s = 31;
                            for (; o >>> s == 0;) s--;
                            return i += s, Int32Array.from([i, n])
                        }
                        getWidth() {
                            return this.width
                        }
                        getHeight() {
                            return this.height
                        }
                        getRowSize() {
                            return this.rowSize
                        }
                        equals(t) {
                            if (!(t instanceof N)) return !1;
                            const e = t;
                            return this.width === e.width && this.height === e.height && this.rowSize === e.rowSize && w.equals(this.bits, e.bits)
                        }
                        hashCode() {
                            let t = this.width;
                            return t = 31 * t + this.width, t = 31 * t + this.height, t = 31 * t + this.rowSize, t = 31 * t + w.hashCode(this.bits), t
                        }
                        toString(t = "X ", e = "  ", r = "\n") {
                            return this.buildToString(t, e, r)
                        }
                        buildToString(t, e, r) {
                            let n = new y;
                            for (let i = 0, o = this.height; i < o; i++) {
                                for (let r = 0, o = this.width; r < o; r++) n.append(this.get(r, i) ? t : e);
                                n.append(r)
                            }
                            return n.toString()
                        }
                        clone() {
                            return new N(this.width, this.height, this.rowSize, this.bits.slice())
                        }
                    }
                    class D extends s {
                        static getNotFoundInstance() {
                            return new D
                        }
                    }
                    D.kind = "NotFoundException";
                    class M extends u {
                        constructor(t) {
                            super(t), this.luminances = M.EMPTY, this.buckets = new Int32Array(M.LUMINANCE_BUCKETS)
                        }
                        getBlackRow(t, e) {
                            const r = this.getLuminanceSource(),
                                n = r.getWidth();
                            null == e || e.getSize() < n ? e = new p(n) : e.clear(), this.initArrays(n);
                            const i = r.getRow(t, this.luminances),
                                o = this.buckets;
                            for (let t = 0; t < n; t++) o[(255 & i[t]) >> M.LUMINANCE_SHIFT]++;
                            const s = M.estimateBlackPoint(o);
                            if (n < 3)
                                for (let t = 0; t < n; t++)(255 & i[t]) < s && e.set(t);
                            else {
                                let t = 255 & i[0],
                                    r = 255 & i[1];
                                for (let o = 1; o < n - 1; o++) {
                                    const n = 255 & i[o + 1];
                                    (4 * r - t - n) / 2 < s && e.set(o), t = r, r = n
                                }
                            }
                            return e
                        }
                        getBlackMatrix() {
                            const t = this.getLuminanceSource(),
                                e = t.getWidth(),
                                r = t.getHeight(),
                                n = new N(e, r);
                            this.initArrays(e);
                            const i = this.buckets;
                            for (let n = 1; n < 5; n++) {
                                const o = Math.floor(r * n / 5),
                                    s = t.getRow(o, this.luminances),
                                    a = Math.floor(4 * e / 5);
                                for (let t = Math.floor(e / 5); t < a; t++) i[(255 & s[t]) >> M.LUMINANCE_SHIFT]++
                            }
                            const o = M.estimateBlackPoint(i),
                                s = t.getMatrix();
                            for (let t = 0; t < r; t++) {
                                const r = t * e;
                                for (let i = 0; i < e; i++)(255 & s[r + i]) < o && n.set(i, t)
                            }
                            return n
                        }
                        createBinarizer(t) {
                            return new M(t)
                        }
                        initArrays(t) {
                            this.luminances.length < t && (this.luminances = new Uint8ClampedArray(t));
                            const e = this.buckets;
                            for (let t = 0; t < M.LUMINANCE_BUCKETS; t++) e[t] = 0
                        }
                        static estimateBlackPoint(t) {
                            const e = t.length;
                            let r = 0,
                                n = 0,
                                i = 0;
                            for (let o = 0; o < e; o++) t[o] > i && (n = o, i = t[o]), t[o] > r && (r = t[o]);
                            let o = 0,
                                s = 0;
                            for (let r = 0; r < e; r++) {
                                const e = r - n,
                                    i = t[r] * e * e;
                                i > s && (o = r, s = i)
                            }
                            if (n > o) {
                                const t = n;
                                n = o, o = t
                            }
                            if (o - n <= e / 16) throw new D;
                            let a = o - 1,
                                c = -1;
                            for (let e = o - 1; e > n; e--) {
                                const i = e - n,
                                    s = i * i * (o - e) * (r - t[e]);
                                s > c && (a = e, c = s)
                            }
                            return a << M.LUMINANCE_SHIFT
                        }
                    }
                    M.LUMINANCE_BITS = 5, M.LUMINANCE_SHIFT = 8 - M.LUMINANCE_BITS, M.LUMINANCE_BUCKETS = 1 << M.LUMINANCE_BITS, M.EMPTY = Uint8ClampedArray.from([0]);
                    class R extends M {
                        constructor(t) {
                            super(t), this.matrix = null
                        }
                        getBlackMatrix() {
                            if (null !== this.matrix) return this.matrix;
                            const t = this.getLuminanceSource(),
                                e = t.getWidth(),
                                r = t.getHeight();
                            if (e >= R.MINIMUM_DIMENSION && r >= R.MINIMUM_DIMENSION) {
                                const n = t.getMatrix();
                                let i = e >> R.BLOCK_SIZE_POWER;
                                0 != (e & R.BLOCK_SIZE_MASK) && i++;
                                let o = r >> R.BLOCK_SIZE_POWER;
                                0 != (r & R.BLOCK_SIZE_MASK) && o++;
                                const s = R.calculateBlackPoints(n, i, o, e, r),
                                    a = new N(e, r);
                                R.calculateThresholdForBlock(n, i, o, e, r, s, a), this.matrix = a
                            } else this.matrix = super.getBlackMatrix();
                            return this.matrix
                        }
                        createBinarizer(t) {
                            return new R(t)
                        }
                        static calculateThresholdForBlock(t, e, r, n, i, o, s) {
                            const a = i - R.BLOCK_SIZE,
                                c = n - R.BLOCK_SIZE;
                            for (let i = 0; i < r; i++) {
                                let l = i << R.BLOCK_SIZE_POWER;
                                l > a && (l = a);
                                const h = R.cap(i, 2, r - 3);
                                for (let r = 0; r < e; r++) {
                                    let i = r << R.BLOCK_SIZE_POWER;
                                    i > c && (i = c);
                                    const a = R.cap(r, 2, e - 3);
                                    let u = 0;
                                    for (let t = -2; t <= 2; t++) {
                                        const e = o[h + t];
                                        u += e[a - 2] + e[a - 1] + e[a] + e[a + 1] + e[a + 2]
                                    }
                                    const d = u / 25;
                                    R.thresholdBlock(t, i, l, d, n, s)
                                }
                            }
                        }
                        static cap(t, e, r) {
                            return t < e ? e : t > r ? r : t
                        }
                        static thresholdBlock(t, e, r, n, i, o) {
                            for (let s = 0, a = r * i + e; s < R.BLOCK_SIZE; s++, a += i)
                                for (let i = 0; i < R.BLOCK_SIZE; i++)(255 & t[a + i]) <= n && o.set(e + i, r + s)
                        }
                        static calculateBlackPoints(t, e, r, n, i) {
                            const o = i - R.BLOCK_SIZE,
                                s = n - R.BLOCK_SIZE,
                                a = new Array(r);
                            for (let i = 0; i < r; i++) {
                                a[i] = new Int32Array(e);
                                let r = i << R.BLOCK_SIZE_POWER;
                                r > o && (r = o);
                                for (let o = 0; o < e; o++) {
                                    let e = o << R.BLOCK_SIZE_POWER;
                                    e > s && (e = s);
                                    let c = 0,
                                        l = 255,
                                        h = 0;
                                    for (let i = 0, o = r * n + e; i < R.BLOCK_SIZE; i++, o += n) {
                                        for (let e = 0; e < R.BLOCK_SIZE; e++) {
                                            const r = 255 & t[o + e];
                                            c += r, r < l && (l = r), r > h && (h = r)
                                        }
                                        if (h - l > R.MIN_DYNAMIC_RANGE)
                                            for (i++, o += n; i < R.BLOCK_SIZE; i++, o += n)
                                                for (let e = 0; e < R.BLOCK_SIZE; e++) c += 255 & t[o + e]
                                    }
                                    let u = c >> 2 * R.BLOCK_SIZE_POWER;
                                    if (h - l <= R.MIN_DYNAMIC_RANGE && (u = l / 2, i > 0 && o > 0)) {
                                        const t = (a[i - 1][o] + 2 * a[i][o - 1] + a[i - 1][o - 1]) / 4;
                                        l < t && (u = t)
                                    }
                                    a[i][o] = u
                                }
                            }
                            return a
                        }
                    }
                    R.BLOCK_SIZE_POWER = 3, R.BLOCK_SIZE = 1 << R.BLOCK_SIZE_POWER, R.BLOCK_SIZE_MASK = R.BLOCK_SIZE - 1, R.MINIMUM_DIMENSION = 5 * R.BLOCK_SIZE, R.MIN_DYNAMIC_RANGE = 24;
                    class O {
                        constructor(t, e) {
                            this.width = t, this.height = e
                        }
                        getWidth() {
                            return this.width
                        }
                        getHeight() {
                            return this.height
                        }
                        isCropSupported() {
                            return !1
                        }
                        crop(t, e, r, n) {
                            throw new S("This luminance source does not support cropping.")
                        }
                        isRotateSupported() {
                            return !1
                        }
                        rotateCounterClockwise() {
                            throw new S("This luminance source does not support rotation by 90 degrees.")
                        }
                        rotateCounterClockwise45() {
                            throw new S("This luminance source does not support rotation by 45 degrees.")
                        }
                        toString() {
                            const t = new Uint8ClampedArray(this.width);
                            let e = new y;
                            for (let r = 0; r < this.height; r++) {
                                const n = this.getRow(r, t);
                                for (let t = 0; t < this.width; t++) {
                                    const r = 255 & n[t];
                                    let i;
                                    i = r < 64 ? "#" : r < 128 ? "+" : r < 192 ? "." : " ", e.append(i)
                                }
                                e.append("\n")
                            }
                            return e.toString()
                        }
                    }
                    class b extends O {
                        constructor(t) {
                            super(t.getWidth(), t.getHeight()), this.delegate = t
                        }
                        getRow(t, e) {
                            const r = this.delegate.getRow(t, e),
                                n = this.getWidth();
                            for (let t = 0; t < n; t++) r[t] = 255 - (255 & r[t]);
                            return r
                        }
                        getMatrix() {
                            const t = this.delegate.getMatrix(),
                                e = this.getWidth() * this.getHeight(),
                                r = new Uint8ClampedArray(e);
                            for (let n = 0; n < e; n++) r[n] = 255 - (255 & t[n]);
                            return r
                        }
                        isCropSupported() {
                            return this.delegate.isCropSupported()
                        }
                        crop(t, e, r, n) {
                            return new b(this.delegate.crop(t, e, r, n))
                        }
                        isRotateSupported() {
                            return this.delegate.isRotateSupported()
                        }
                        invert() {
                            return this.delegate
                        }
                        rotateCounterClockwise() {
                            return new b(this.delegate.rotateCounterClockwise())
                        }
                        rotateCounterClockwise45() {
                            return new b(this.delegate.rotateCounterClockwise45())
                        }
                    }
                    class B extends O {
                        constructor(t) {
                            super(t.width, t.height), this.canvas = t, this.tempCanvasElement = null, this.buffer = B.makeBufferFromCanvasImageData(t)
                        }
                        static makeBufferFromCanvasImageData(t) {
                            const e = t.getContext("2d").getImageData(0, 0, t.width, t.height);
                            return B.toGrayscaleBuffer(e.data, t.width, t.height)
                        }
                        static toGrayscaleBuffer(t, e, r) {
                            const n = new Uint8ClampedArray(e * r);
                            for (let e = 0, r = 0, i = t.length; e < i; e += 4, r++) {
                                let i;
                                i = 0 === t[e + 3] ? 255 : 306 * t[e] + 601 * t[e + 1] + 117 * t[e + 2] + 512 >> 10, n[r] = i
                            }
                            return n
                        }
                        getRow(t, e) {
                            if (t < 0 || t >= this.getHeight()) throw new c("Requested row is outside the image: " + t);
                            const r = this.getWidth(),
                                n = t * r;
                            return null === e ? e = this.buffer.slice(n, n + r) : (e.length < r && (e = new Uint8ClampedArray(r)), e.set(this.buffer.slice(n, n + r))), e
                        }
                        getMatrix() {
                            return this.buffer
                        }
                        isCropSupported() {
                            return !0
                        }
                        crop(t, e, r, n) {
                            return super.crop(t, e, r, n), this
                        }
                        isRotateSupported() {
                            return !0
                        }
                        rotateCounterClockwise() {
                            return this.rotate(-90), this
                        }
                        rotateCounterClockwise45() {
                            return this.rotate(-45), this
                        }
                        getTempCanvasElement() {
                            if (null === this.tempCanvasElement) {
                                const t = this.canvas.ownerDocument.createElement("canvas");
                                t.width = this.canvas.width, t.height = this.canvas.height, this.tempCanvasElement = t
                            }
                            return this.tempCanvasElement
                        }
                        rotate(t) {
                            const e = this.getTempCanvasElement(),
                                r = e.getContext("2d"),
                                n = t * B.DEGREE_TO_RADIANS,
                                i = this.canvas.width,
                                o = this.canvas.height,
                                s = Math.ceil(Math.abs(Math.cos(n)) * i + Math.abs(Math.sin(n)) * o),
                                a = Math.ceil(Math.abs(Math.sin(n)) * i + Math.abs(Math.cos(n)) * o);
                            return e.width = s, e.height = a, r.translate(s / 2, a / 2), r.rotate(n), r.drawImage(this.canvas, i / -2, o / -2), this.buffer = B.makeBufferFromCanvasImageData(e), this
                        }
                        invert() {
                            return new b(this)
                        }
                    }
                    B.DEGREE_TO_RADIANS = Math.PI / 180;
                    class L {
                        constructor(t, e, r) {
                            this.deviceId = t, this.label = e, this.kind = "videoinput", this.groupId = r || void 0
                        }
                        toJSON() {
                            return {
                                kind: this.kind,
                                groupId: this.groupId,
                                deviceId: this.deviceId,
                                label: this.label
                            }
                        }
                    }
                    var P, v = (globalThis || r.g || self || window ? (globalThis || r.g || self || window || void 0).__awaiter : void 0) || function(t, e, r, n) {
                        return new(r || (r = Promise))((function(i, o) {
                            function s(t) {
                                try {
                                    c(n.next(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function a(t) {
                                try {
                                    c(n.throw(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function c(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                    t(e)
                                }))).then(s, a)
                            }
                            c((n = n.apply(t, e || [])).next())
                        }))
                    };
                    class F {
                        constructor(t, e = 500, r) {
                            this.reader = t, this.timeBetweenScansMillis = e, this._hints = r, this._stopContinuousDecode = !1, this._stopAsyncDecode = !1, this._timeBetweenDecodingAttempts = 0
                        }
                        get hasNavigator() {
                            return "undefined" != typeof navigator
                        }
                        get isMediaDevicesSuported() {
                            return this.hasNavigator && !!navigator.mediaDevices
                        }
                        get canEnumerateDevices() {
                            return !(!this.isMediaDevicesSuported || !navigator.mediaDevices.enumerateDevices)
                        }
                        get timeBetweenDecodingAttempts() {
                            return this._timeBetweenDecodingAttempts
                        }
                        set timeBetweenDecodingAttempts(t) {
                            this._timeBetweenDecodingAttempts = t < 0 ? 0 : t
                        }
                        set hints(t) {
                            this._hints = t || null
                        }
                        get hints() {
                            return this._hints
                        }
                        listVideoInputDevices() {
                            return v(this, void 0, void 0, (function*() {
                                if (!this.hasNavigator) throw new Error("Can't enumerate devices, navigator is not present.");
                                if (!this.canEnumerateDevices) throw new Error("Can't enumerate devices, method not supported.");
                                const t = yield navigator.mediaDevices.enumerateDevices(), e = [];
                                for (const r of t) {
                                    const t = "video" === r.kind ? "videoinput" : r.kind;
                                    if ("videoinput" !== t) continue;
                                    const n = {
                                        deviceId: r.deviceId || r.id,
                                        label: r.label || `Video device ${e.length+1}`,
                                        kind: t,
                                        groupId: r.groupId
                                    };
                                    e.push(n)
                                }
                                return e
                            }))
                        }
                        getVideoInputDevices() {
                            return v(this, void 0, void 0, (function*() {
                                return (yield this.listVideoInputDevices()).map((t => new L(t.deviceId, t.label)))
                            }))
                        }
                        findDeviceById(t) {
                            return v(this, void 0, void 0, (function*() {
                                const e = yield this.listVideoInputDevices();
                                return e ? e.find((e => e.deviceId === t)) : null
                            }))
                        }
                        decodeFromInputVideoDevice(t, e) {
                            return v(this, void 0, void 0, (function*() {
                                return yield this.decodeOnceFromVideoDevice(t, e)
                            }))
                        }
                        decodeOnceFromVideoDevice(t, e) {
                            return v(this, void 0, void 0, (function*() {
                                let r;
                                this.reset(), r = t ? {
                                    deviceId: {
                                        exact: t
                                    }
                                } : {
                                    facingMode: "environment"
                                };
                                const n = {
                                    video: r
                                };
                                return yield this.decodeOnceFromConstraints(n, e)
                            }))
                        }
                        decodeOnceFromConstraints(t, e) {
                            return v(this, void 0, void 0, (function*() {
                                const r = yield navigator.mediaDevices.getUserMedia(t);
                                return yield this.decodeOnceFromStream(r, e)
                            }))
                        }
                        decodeOnceFromStream(t, e) {
                            return v(this, void 0, void 0, (function*() {
                                this.reset();
                                const r = yield this.attachStreamToVideo(t, e);
                                return yield this.decodeOnce(r)
                            }))
                        }
                        decodeFromInputVideoDeviceContinuously(t, e, r) {
                            return v(this, void 0, void 0, (function*() {
                                return yield this.decodeFromVideoDevice(t, e, r)
                            }))
                        }
                        decodeFromVideoDevice(t, e, r) {
                            return v(this, void 0, void 0, (function*() {
                                let n;
                                n = t ? {
                                    deviceId: {
                                        exact: t
                                    }
                                } : {
                                    facingMode: "environment"
                                };
                                const i = {
                                    video: n
                                };
                                return yield this.decodeFromConstraints(i, e, r)
                            }))
                        }
                        decodeFromConstraints(t, e, r) {
                            return v(this, void 0, void 0, (function*() {
                                const n = yield navigator.mediaDevices.getUserMedia(t);
                                return yield this.decodeFromStream(n, e, r)
                            }))
                        }
                        decodeFromStream(t, e, r) {
                            return v(this, void 0, void 0, (function*() {
                                this.reset();
                                const n = yield this.attachStreamToVideo(t, e);
                                return yield this.decodeContinuously(n, r)
                            }))
                        }
                        stopAsyncDecode() {
                            this._stopAsyncDecode = !0
                        }
                        stopContinuousDecode() {
                            this._stopContinuousDecode = !0
                        }
                        attachStreamToVideo(t, e) {
                            return v(this, void 0, void 0, (function*() {
                                const r = this.prepareVideoElement(e);
                                return this.addVideoSource(r, t), this.videoElement = r, this.stream = t, yield this.playVideoOnLoadAsync(r), r
                            }))
                        }
                        playVideoOnLoadAsync(t) {
                            return new Promise(((e, r) => this.playVideoOnLoad(t, (() => e()))))
                        }
                        playVideoOnLoad(t, e) {
                            this.videoEndedListener = () => this.stopStreams(), this.videoCanPlayListener = () => this.tryPlayVideo(t), t.addEventListener("ended", this.videoEndedListener), t.addEventListener("canplay", this.videoCanPlayListener), t.addEventListener("playing", e), this.tryPlayVideo(t)
                        }
                        isVideoPlaying(t) {
                            return t.currentTime > 0 && !t.paused && !t.ended && t.readyState > 2
                        }
                        tryPlayVideo(t) {
                            return v(this, void 0, void 0, (function*() {
                                if (this.isVideoPlaying(t)) console.warn("Trying to play video that is already playing.");
                                else try {
                                    yield t.play()
                                } catch (t) {
                                    console.warn("It was not possible to play the video.")
                                }
                            }))
                        }
                        getMediaElement(t, e) {
                            const r = document.getElementById(t);
                            if (!r) throw new a(`element with id '${t}' not found`);
                            if (r.nodeName.toLowerCase() !== e.toLowerCase()) throw new a(`element with id '${t}' must be an ${e} element`);
                            return r
                        }
                        decodeFromImage(t, e) {
                            if (!t && !e) throw new a("either imageElement with a src set or an url must be provided");
                            return e && !t ? this.decodeFromImageUrl(e) : this.decodeFromImageElement(t)
                        }
                        decodeFromVideo(t, e) {
                            if (!t && !e) throw new a("Either an element with a src set or an URL must be provided");
                            return e && !t ? this.decodeFromVideoUrl(e) : this.decodeFromVideoElement(t)
                        }
                        decodeFromVideoContinuously(t, e, r) {
                            if (void 0 === t && void 0 === e) throw new a("Either an element with a src set or an URL must be provided");
                            return e && !t ? this.decodeFromVideoUrlContinuously(e, r) : this.decodeFromVideoElementContinuously(t, r)
                        }
                        decodeFromImageElement(t) {
                            if (!t) throw new a("An image element must be provided.");
                            this.reset();
                            const e = this.prepareImageElement(t);
                            let r;
                            return this.imageElement = e, r = this.isImageLoaded(e) ? this.decodeOnce(e, !1, !0) : this._decodeOnLoadImage(e), r
                        }
                        decodeFromVideoElement(t) {
                            const e = this._decodeFromVideoElementSetup(t);
                            return this._decodeOnLoadVideo(e)
                        }
                        decodeFromVideoElementContinuously(t, e) {
                            const r = this._decodeFromVideoElementSetup(t);
                            return this._decodeOnLoadVideoContinuously(r, e)
                        }
                        _decodeFromVideoElementSetup(t) {
                            if (!t) throw new a("A video element must be provided.");
                            this.reset();
                            const e = this.prepareVideoElement(t);
                            return this.videoElement = e, e
                        }
                        decodeFromImageUrl(t) {
                            if (!t) throw new a("An URL must be provided.");
                            this.reset();
                            const e = this.prepareImageElement();
                            this.imageElement = e;
                            const r = this._decodeOnLoadImage(e);
                            return e.src = t, r
                        }
                        decodeFromVideoUrl(t) {
                            if (!t) throw new a("An URL must be provided.");
                            this.reset();
                            const e = this.prepareVideoElement(),
                                r = this.decodeFromVideoElement(e);
                            return e.src = t, r
                        }
                        decodeFromVideoUrlContinuously(t, e) {
                            if (!t) throw new a("An URL must be provided.");
                            this.reset();
                            const r = this.prepareVideoElement(),
                                n = this.decodeFromVideoElementContinuously(r, e);
                            return r.src = t, n
                        }
                        _decodeOnLoadImage(t) {
                            return new Promise(((e, r) => {
                                this.imageLoadedListener = () => this.decodeOnce(t, !1, !0).then(e, r), t.addEventListener("load", this.imageLoadedListener)
                            }))
                        }
                        _decodeOnLoadVideo(t) {
                            return v(this, void 0, void 0, (function*() {
                                return yield this.playVideoOnLoadAsync(t), yield this.decodeOnce(t)
                            }))
                        }
                        _decodeOnLoadVideoContinuously(t, e) {
                            return v(this, void 0, void 0, (function*() {
                                yield this.playVideoOnLoadAsync(t), this.decodeContinuously(t, e)
                            }))
                        }
                        isImageLoaded(t) {
                            return !!t.complete && 0 !== t.naturalWidth
                        }
                        prepareImageElement(t) {
                            let e;
                            return void 0 === t && (e = document.createElement("img"), e.width = 200, e.height = 200), "string" == typeof t && (e = this.getMediaElement(t, "img")), t instanceof HTMLImageElement && (e = t), e
                        }
                        prepareVideoElement(t) {
                            let e;
                            return t || "undefined" == typeof document || (e = document.createElement("video"), e.width = 200, e.height = 200), "string" == typeof t && (e = this.getMediaElement(t, "video")), t instanceof HTMLVideoElement && (e = t), e.setAttribute("autoplay", "true"), e.setAttribute("muted", "true"), e.setAttribute("playsinline", "true"), e
                        }
                        decodeOnce(t, e = !0, r = !0) {
                            this._stopAsyncDecode = !1;
                            const n = (i, o) => {
                                if (this._stopAsyncDecode) return o(new D("Video stream has ended before any code could be detected.")), void(this._stopAsyncDecode = void 0);
                                try {
                                    i(this.decode(t))
                                } catch (t) {
                                    if (e && t instanceof D || (t instanceof h || t instanceof E) && r) return setTimeout(n, this._timeBetweenDecodingAttempts, i, o);
                                    o(t)
                                }
                            };
                            return new Promise(((t, e) => n(t, e)))
                        }
                        decodeContinuously(t, e) {
                            this._stopContinuousDecode = !1;
                            const r = () => {
                                if (this._stopContinuousDecode) this._stopContinuousDecode = void 0;
                                else try {
                                    const n = this.decode(t);
                                    e(n, null), setTimeout(r, this.timeBetweenScansMillis)
                                } catch (t) {
                                    e(null, t), (t instanceof h || t instanceof E || t instanceof D) && setTimeout(r, this._timeBetweenDecodingAttempts)
                                }
                            };
                            r()
                        }
                        decode(t) {
                            const e = this.createBinaryBitmap(t);
                            return this.decodeBitmap(e)
                        }
                        _isHTMLVideoElement(t) {
                            return 0 !== t.videoWidth
                        }
                        drawFrameOnCanvas(t, e, r) {
                            e || (e = {
                                sx: 0,
                                sy: 0,
                                sWidth: t.videoWidth,
                                sHeight: t.videoHeight,
                                dx: 0,
                                dy: 0,
                                dWidth: t.videoWidth,
                                dHeight: t.videoHeight
                            }), r || (r = this.captureCanvasContext), r.drawImage(t, e.sx, e.sy, e.sWidth, e.sHeight, e.dx, e.dy, e.dWidth, e.dHeight)
                        }
                        drawImageOnCanvas(t, e, r = this.captureCanvasContext) {
                            e || (e = {
                                sx: 0,
                                sy: 0,
                                sWidth: t.naturalWidth,
                                sHeight: t.naturalHeight,
                                dx: 0,
                                dy: 0,
                                dWidth: t.naturalWidth,
                                dHeight: t.naturalHeight
                            }), r || (r = this.captureCanvasContext), r.drawImage(t, e.sx, e.sy, e.sWidth, e.sHeight, e.dx, e.dy, e.dWidth, e.dHeight)
                        }
                        createBinaryBitmap(t) {
                            this.getCaptureCanvasContext(t), this._isHTMLVideoElement(t) ? this.drawFrameOnCanvas(t) : this.drawImageOnCanvas(t);
                            const e = this.getCaptureCanvas(t),
                                r = new B(e),
                                n = new R(r);
                            return new l(n)
                        }
                        getCaptureCanvasContext(t) {
                            if (!this.captureCanvasContext) {
                                const e = this.getCaptureCanvas(t).getContext("2d");
                                this.captureCanvasContext = e
                            }
                            return this.captureCanvasContext
                        }
                        getCaptureCanvas(t) {
                            if (!this.captureCanvas) {
                                const e = this.createCaptureCanvas(t);
                                this.captureCanvas = e
                            }
                            return this.captureCanvas
                        }
                        decodeBitmap(t) {
                            return this.reader.decode(t, this._hints)
                        }
                        createCaptureCanvas(t) {
                            if ("undefined" == typeof document) return this._destroyCaptureCanvas(), null;
                            const e = document.createElement("canvas");
                            let r, n;
                            return void 0 !== t && (t instanceof HTMLVideoElement ? (r = t.videoWidth, n = t.videoHeight) : t instanceof HTMLImageElement && (r = t.naturalWidth || t.width, n = t.naturalHeight || t.height)), e.style.width = r + "px", e.style.height = n + "px", e.width = r, e.height = n, e
                        }
                        stopStreams() {
                            this.stream && (this.stream.getVideoTracks().forEach((t => t.stop())), this.stream = void 0), !1 === this._stopAsyncDecode && this.stopAsyncDecode(), !1 === this._stopContinuousDecode && this.stopContinuousDecode()
                        }
                        reset() {
                            this.stopStreams(), this._destroyVideoElement(), this._destroyImageElement(), this._destroyCaptureCanvas()
                        }
                        _destroyVideoElement() {
                            this.videoElement && (void 0 !== this.videoEndedListener && this.videoElement.removeEventListener("ended", this.videoEndedListener), void 0 !== this.videoPlayingEventListener && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener), void 0 !== this.videoCanPlayListener && this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener), this.cleanVideoSource(this.videoElement), this.videoElement = void 0)
                        }
                        _destroyImageElement() {
                            this.imageElement && (void 0 !== this.imageLoadedListener && this.imageElement.removeEventListener("load", this.imageLoadedListener), this.imageElement.src = void 0, this.imageElement.removeAttribute("src"), this.imageElement = void 0)
                        }
                        _destroyCaptureCanvas() {
                            this.captureCanvasContext = void 0, this.captureCanvas = void 0
                        }
                        addVideoSource(t, e) {
                            try {
                                t.srcObject = e
                            } catch (r) {
                                t.src = URL.createObjectURL(e)
                            }
                        }
                        cleanVideoSource(t) {
                            try {
                                t.srcObject = null
                            } catch (e) {
                                t.src = ""
                            }
                            this.videoElement.removeAttribute("src")
                        }
                    }
                    class x {
                        constructor(t, e, r = (null == e ? 0 : 8 * e.length), n, i, o = d.currentTimeMillis()) {
                            this.text = t, this.rawBytes = e, this.numBits = r, this.resultPoints = n, this.format = i, this.timestamp = o, this.text = t, this.rawBytes = e, this.numBits = null == r ? null == e ? 0 : 8 * e.length : r, this.resultPoints = n, this.format = i, this.resultMetadata = null, this.timestamp = null == o ? d.currentTimeMillis() : o
                        }
                        getText() {
                            return this.text
                        }
                        getRawBytes() {
                            return this.rawBytes
                        }
                        getNumBits() {
                            return this.numBits
                        }
                        getResultPoints() {
                            return this.resultPoints
                        }
                        getBarcodeFormat() {
                            return this.format
                        }
                        getResultMetadata() {
                            return this.resultMetadata
                        }
                        putMetadata(t, e) {
                            null === this.resultMetadata && (this.resultMetadata = new Map), this.resultMetadata.set(t, e)
                        }
                        putAllMetadata(t) {
                            null !== t && (null === this.resultMetadata ? this.resultMetadata = t : this.resultMetadata = new Map(t))
                        }
                        addResultPoints(t) {
                            const e = this.resultPoints;
                            if (null === e) this.resultPoints = t;
                            else if (null !== t && t.length > 0) {
                                const r = new Array(e.length + t.length);
                                d.arraycopy(e, 0, r, 0, e.length), d.arraycopy(t, 0, r, e.length, t.length), this.resultPoints = r
                            }
                        }
                        getTimestamp() {
                            return this.timestamp
                        }
                        toString() {
                            return this.text
                        }
                    }! function(t) {
                        t[t.AZTEC = 0] = "AZTEC", t[t.CODABAR = 1] = "CODABAR", t[t.CODE_39 = 2] = "CODE_39", t[t.CODE_93 = 3] = "CODE_93", t[t.CODE_128 = 4] = "CODE_128", t[t.DATA_MATRIX = 5] = "DATA_MATRIX", t[t.EAN_8 = 6] = "EAN_8", t[t.EAN_13 = 7] = "EAN_13", t[t.ITF = 8] = "ITF", t[t.MAXICODE = 9] = "MAXICODE", t[t.PDF_417 = 10] = "PDF_417", t[t.QR_CODE = 11] = "QR_CODE", t[t.RSS_14 = 12] = "RSS_14", t[t.RSS_EXPANDED = 13] = "RSS_EXPANDED", t[t.UPC_A = 14] = "UPC_A", t[t.UPC_E = 15] = "UPC_E", t[t.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION"
                    }(P || (P = {}));
                    var k, U = P;
                    ! function(t) {
                        t[t.OTHER = 0] = "OTHER", t[t.ORIENTATION = 1] = "ORIENTATION", t[t.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS", t[t.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL", t[t.ISSUE_NUMBER = 4] = "ISSUE_NUMBER", t[t.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE", t[t.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY", t[t.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION", t[t.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA", t[t.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE", t[t.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY"
                    }(k || (k = {}));
                    var H, V, z, G, Y, X, W = k;
                    class j {
                        constructor(t, e, r, n, i = -1, o = -1) {
                            this.rawBytes = t, this.text = e, this.byteSegments = r, this.ecLevel = n, this.structuredAppendSequenceNumber = i, this.structuredAppendParity = o, this.numBits = null == t ? 0 : 8 * t.length
                        }
                        getRawBytes() {
                            return this.rawBytes
                        }
                        getNumBits() {
                            return this.numBits
                        }
                        setNumBits(t) {
                            this.numBits = t
                        }
                        getText() {
                            return this.text
                        }
                        getByteSegments() {
                            return this.byteSegments
                        }
                        getECLevel() {
                            return this.ecLevel
                        }
                        getErrorsCorrected() {
                            return this.errorsCorrected
                        }
                        setErrorsCorrected(t) {
                            this.errorsCorrected = t
                        }
                        getErasures() {
                            return this.erasures
                        }
                        setErasures(t) {
                            this.erasures = t
                        }
                        getOther() {
                            return this.other
                        }
                        setOther(t) {
                            this.other = t
                        }
                        hasStructuredAppend() {
                            return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0
                        }
                        getStructuredAppendParity() {
                            return this.structuredAppendParity
                        }
                        getStructuredAppendSequenceNumber() {
                            return this.structuredAppendSequenceNumber
                        }
                    }
                    class Z {
                        exp(t) {
                            return this.expTable[t]
                        }
                        log(t) {
                            if (0 === t) throw new c;
                            return this.logTable[t]
                        }
                        static addOrSubtract(t, e) {
                            return t ^ e
                        }
                    }
                    class Q {
                        constructor(t, e) {
                            if (0 === e.length) throw new c;
                            this.field = t;
                            const r = e.length;
                            if (r > 1 && 0 === e[0]) {
                                let t = 1;
                                for (; t < r && 0 === e[t];) t++;
                                t === r ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(r - t), d.arraycopy(e, t, this.coefficients, 0, this.coefficients.length))
                            } else this.coefficients = e
                        }
                        getCoefficients() {
                            return this.coefficients
                        }
                        getDegree() {
                            return this.coefficients.length - 1
                        }
                        isZero() {
                            return 0 === this.coefficients[0]
                        }
                        getCoefficient(t) {
                            return this.coefficients[this.coefficients.length - 1 - t]
                        }
                        evaluateAt(t) {
                            if (0 === t) return this.getCoefficient(0);
                            const e = this.coefficients;
                            let r;
                            if (1 === t) {
                                r = 0;
                                for (let t = 0, n = e.length; t !== n; t++) {
                                    const n = e[t];
                                    r = Z.addOrSubtract(r, n)
                                }
                                return r
                            }
                            r = e[0];
                            const n = e.length,
                                i = this.field;
                            for (let o = 1; o < n; o++) r = Z.addOrSubtract(i.multiply(t, r), e[o]);
                            return r
                        }
                        addOrSubtract(t) {
                            if (!this.field.equals(t.field)) throw new c("GenericGFPolys do not have same GenericGF field");
                            if (this.isZero()) return t;
                            if (t.isZero()) return this;
                            let e = this.coefficients,
                                r = t.coefficients;
                            if (e.length > r.length) {
                                const t = e;
                                e = r, r = t
                            }
                            let n = new Int32Array(r.length);
                            const i = r.length - e.length;
                            d.arraycopy(r, 0, n, 0, i);
                            for (let t = i; t < r.length; t++) n[t] = Z.addOrSubtract(e[t - i], r[t]);
                            return new Q(this.field, n)
                        }
                        multiply(t) {
                            if (!this.field.equals(t.field)) throw new c("GenericGFPolys do not have same GenericGF field");
                            if (this.isZero() || t.isZero()) return this.field.getZero();
                            const e = this.coefficients,
                                r = e.length,
                                n = t.coefficients,
                                i = n.length,
                                o = new Int32Array(r + i - 1),
                                s = this.field;
                            for (let t = 0; t < r; t++) {
                                const r = e[t];
                                for (let e = 0; e < i; e++) o[t + e] = Z.addOrSubtract(o[t + e], s.multiply(r, n[e]))
                            }
                            return new Q(s, o)
                        }
                        multiplyScalar(t) {
                            if (0 === t) return this.field.getZero();
                            if (1 === t) return this;
                            const e = this.coefficients.length,
                                r = this.field,
                                n = new Int32Array(e),
                                i = this.coefficients;
                            for (let o = 0; o < e; o++) n[o] = r.multiply(i[o], t);
                            return new Q(r, n)
                        }
                        multiplyByMonomial(t, e) {
                            if (t < 0) throw new c;
                            if (0 === e) return this.field.getZero();
                            const r = this.coefficients,
                                n = r.length,
                                i = new Int32Array(n + t),
                                o = this.field;
                            for (let t = 0; t < n; t++) i[t] = o.multiply(r[t], e);
                            return new Q(o, i)
                        }
                        divide(t) {
                            if (!this.field.equals(t.field)) throw new c("GenericGFPolys do not have same GenericGF field");
                            if (t.isZero()) throw new c("Divide by 0");
                            const e = this.field;
                            let r = e.getZero(),
                                n = this;
                            const i = t.getCoefficient(t.getDegree()),
                                o = e.inverse(i);
                            for (; n.getDegree() >= t.getDegree() && !n.isZero();) {
                                const i = n.getDegree() - t.getDegree(),
                                    s = e.multiply(n.getCoefficient(n.getDegree()), o),
                                    a = t.multiplyByMonomial(i, s),
                                    c = e.buildMonomial(i, s);
                                r = r.addOrSubtract(c), n = n.addOrSubtract(a)
                            }
                            return [r, n]
                        }
                        toString() {
                            let t = "";
                            for (let e = this.getDegree(); e >= 0; e--) {
                                let r = this.getCoefficient(e);
                                if (0 !== r) {
                                    if (r < 0 ? (t += " - ", r = -r) : t.length > 0 && (t += " + "), 0 === e || 1 !== r) {
                                        const e = this.field.log(r);
                                        0 === e ? t += "1" : 1 === e ? t += "a" : (t += "a^", t += e)
                                    }
                                    0 !== e && (1 === e ? t += "x" : (t += "x^", t += e))
                                }
                            }
                            return t
                        }
                    }
                    class K extends s {}
                    K.kind = "ArithmeticException";
                    class q extends Z {
                        constructor(t, e, r) {
                            super(), this.primitive = t, this.size = e, this.generatorBase = r;
                            const n = new Int32Array(e);
                            let i = 1;
                            for (let r = 0; r < e; r++) n[r] = i, i *= 2, i >= e && (i ^= t, i &= e - 1);
                            this.expTable = n;
                            const o = new Int32Array(e);
                            for (let t = 0; t < e - 1; t++) o[n[t]] = t;
                            this.logTable = o, this.zero = new Q(this, Int32Array.from([0])), this.one = new Q(this, Int32Array.from([1]))
                        }
                        getZero() {
                            return this.zero
                        }
                        getOne() {
                            return this.one
                        }
                        buildMonomial(t, e) {
                            if (t < 0) throw new c;
                            if (0 === e) return this.zero;
                            const r = new Int32Array(t + 1);
                            return r[0] = e, new Q(this, r)
                        }
                        inverse(t) {
                            if (0 === t) throw new K;
                            return this.expTable[this.size - this.logTable[t] - 1]
                        }
                        multiply(t, e) {
                            return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.size - 1)]
                        }
                        getSize() {
                            return this.size
                        }
                        getGeneratorBase() {
                            return this.generatorBase
                        }
                        toString() {
                            return "GF(0x" + m.toHexString(this.primitive) + "," + this.size + ")"
                        }
                        equals(t) {
                            return t === this
                        }
                    }
                    q.AZTEC_DATA_12 = new q(4201, 4096, 1), q.AZTEC_DATA_10 = new q(1033, 1024, 1), q.AZTEC_DATA_6 = new q(67, 64, 1), q.AZTEC_PARAM = new q(19, 16, 1), q.QR_CODE_FIELD_256 = new q(285, 256, 0), q.DATA_MATRIX_FIELD_256 = new q(301, 256, 1), q.AZTEC_DATA_8 = q.DATA_MATRIX_FIELD_256, q.MAXICODE_FIELD_64 = q.AZTEC_DATA_6;
                    class J extends s {}
                    J.kind = "ReedSolomonException";
                    class $ extends s {}
                    $.kind = "IllegalStateException";
                    class tt {
                        constructor(t) {
                            this.field = t
                        }
                        decode(t, e) {
                            const r = this.field,
                                n = new Q(r, t),
                                i = new Int32Array(e);
                            let o = !0;
                            for (let t = 0; t < e; t++) {
                                const e = n.evaluateAt(r.exp(t + r.getGeneratorBase()));
                                i[i.length - 1 - t] = e, 0 !== e && (o = !1)
                            }
                            if (o) return;
                            const s = new Q(r, i),
                                a = this.runEuclideanAlgorithm(r.buildMonomial(e, 1), s, e),
                                c = a[0],
                                l = a[1],
                                h = this.findErrorLocations(c),
                                u = this.findErrorMagnitudes(l, h);
                            for (let e = 0; e < h.length; e++) {
                                const n = t.length - 1 - r.log(h[e]);
                                if (n < 0) throw new J("Bad error location");
                                t[n] = q.addOrSubtract(t[n], u[e])
                            }
                        }
                        runEuclideanAlgorithm(t, e, r) {
                            if (t.getDegree() < e.getDegree()) {
                                const r = t;
                                t = e, e = r
                            }
                            const n = this.field;
                            let i = t,
                                o = e,
                                s = n.getZero(),
                                a = n.getOne();
                            for (; o.getDegree() >= (r / 2 | 0);) {
                                let t = i,
                                    e = s;
                                if (i = o, s = a, i.isZero()) throw new J("r_{i-1} was zero");
                                o = t;
                                let r = n.getZero();
                                const c = i.getCoefficient(i.getDegree()),
                                    l = n.inverse(c);
                                for (; o.getDegree() >= i.getDegree() && !o.isZero();) {
                                    const t = o.getDegree() - i.getDegree(),
                                        e = n.multiply(o.getCoefficient(o.getDegree()), l);
                                    r = r.addOrSubtract(n.buildMonomial(t, e)), o = o.addOrSubtract(i.multiplyByMonomial(t, e))
                                }
                                if (a = r.multiply(s).addOrSubtract(e), o.getDegree() >= i.getDegree()) throw new $("Division algorithm failed to reduce polynomial?")
                            }
                            const c = a.getCoefficient(0);
                            if (0 === c) throw new J("sigmaTilde(0) was zero");
                            const l = n.inverse(c);
                            return [a.multiplyScalar(l), o.multiplyScalar(l)]
                        }
                        findErrorLocations(t) {
                            const e = t.getDegree();
                            if (1 === e) return Int32Array.from([t.getCoefficient(1)]);
                            const r = new Int32Array(e);
                            let n = 0;
                            const i = this.field;
                            for (let o = 1; o < i.getSize() && n < e; o++) 0 === t.evaluateAt(o) && (r[n] = i.inverse(o), n++);
                            if (n !== e) throw new J("Error locator degree does not match number of roots");
                            return r
                        }
                        findErrorMagnitudes(t, e) {
                            const r = e.length,
                                n = new Int32Array(r),
                                i = this.field;
                            for (let o = 0; o < r; o++) {
                                const s = i.inverse(e[o]);
                                let a = 1;
                                for (let t = 0; t < r; t++)
                                    if (o !== t) {
                                        const r = i.multiply(e[t], s),
                                            n = 0 == (1 & r) ? 1 | r : -2 & r;
                                        a = i.multiply(a, n)
                                    } n[o] = i.multiply(t.evaluateAt(s), i.inverse(a)), 0 !== i.getGeneratorBase() && (n[o] = i.multiply(n[o], s))
                            }
                            return n
                        }
                    }! function(t) {
                        t[t.UPPER = 0] = "UPPER", t[t.LOWER = 1] = "LOWER", t[t.MIXED = 2] = "MIXED", t[t.DIGIT = 3] = "DIGIT", t[t.PUNCT = 4] = "PUNCT", t[t.BINARY = 5] = "BINARY"
                    }(H || (H = {}));
                    class et {
                        decode(t) {
                            this.ddata = t;
                            let e = t.getBits(),
                                r = this.extractBits(e),
                                n = this.correctBits(r),
                                i = et.convertBoolArrayToByteArray(n),
                                o = et.getEncodedData(n),
                                s = new j(i, o, null, null);
                            return s.setNumBits(n.length), s
                        }
                        static highLevelDecode(t) {
                            return this.getEncodedData(t)
                        }
                        static getEncodedData(t) {
                            let e = t.length,
                                r = H.UPPER,
                                n = H.UPPER,
                                i = "",
                                o = 0;
                            for (; o < e;)
                                if (n === H.BINARY) {
                                    if (e - o < 5) break;
                                    let s = et.readCode(t, o, 5);
                                    if (o += 5, 0 === s) {
                                        if (e - o < 11) break;
                                        s = et.readCode(t, o, 11) + 31, o += 11
                                    }
                                    for (let r = 0; r < s; r++) {
                                        if (e - o < 8) {
                                            o = e;
                                            break
                                        }
                                        const r = et.readCode(t, o, 8);
                                        i += T.castAsNonUtf8Char(r), o += 8
                                    }
                                    n = r
                                } else {
                                    let s = n === H.DIGIT ? 4 : 5;
                                    if (e - o < s) break;
                                    let a = et.readCode(t, o, s);
                                    o += s;
                                    let c = et.getCharacter(n, a);
                                    c.startsWith("CTRL_") ? (r = n, n = et.getTable(c.charAt(5)), "L" === c.charAt(6) && (r = n)) : (i += c, n = r)
                                } return i
                        }
                        static getTable(t) {
                            switch (t) {
                                case "L":
                                    return H.LOWER;
                                case "P":
                                    return H.PUNCT;
                                case "M":
                                    return H.MIXED;
                                case "D":
                                    return H.DIGIT;
                                case "B":
                                    return H.BINARY;
                                default:
                                    return H.UPPER
                            }
                        }
                        static getCharacter(t, e) {
                            switch (t) {
                                case H.UPPER:
                                    return et.UPPER_TABLE[e];
                                case H.LOWER:
                                    return et.LOWER_TABLE[e];
                                case H.MIXED:
                                    return et.MIXED_TABLE[e];
                                case H.PUNCT:
                                    return et.PUNCT_TABLE[e];
                                case H.DIGIT:
                                    return et.DIGIT_TABLE[e];
                                default:
                                    throw new $("Bad table")
                            }
                        }
                        correctBits(t) {
                            let e, r;
                            this.ddata.getNbLayers() <= 2 ? (r = 6, e = q.AZTEC_DATA_6) : this.ddata.getNbLayers() <= 8 ? (r = 8, e = q.AZTEC_DATA_8) : this.ddata.getNbLayers() <= 22 ? (r = 10, e = q.AZTEC_DATA_10) : (r = 12, e = q.AZTEC_DATA_12);
                            let n = this.ddata.getNbDatablocks(),
                                i = t.length / r;
                            if (i < n) throw new E;
                            let o = t.length % r,
                                s = new Int32Array(i);
                            for (let e = 0; e < i; e++, o += r) s[e] = et.readCode(t, o, r);
                            try {
                                new tt(e).decode(s, i - n)
                            } catch (t) {
                                throw new E(t)
                            }
                            let a = (1 << r) - 1,
                                c = 0;
                            for (let t = 0; t < n; t++) {
                                let e = s[t];
                                if (0 === e || e === a) throw new E;
                                1 !== e && e !== a - 1 || c++
                            }
                            let l = new Array(n * r - c),
                                h = 0;
                            for (let t = 0; t < n; t++) {
                                let e = s[t];
                                if (1 === e || e === a - 1) l.fill(e > 1, h, h + r - 1), h += r - 1;
                                else
                                    for (let t = r - 1; t >= 0; --t) l[h++] = 0 != (e & 1 << t)
                            }
                            return l
                        }
                        extractBits(t) {
                            let e = this.ddata.isCompact(),
                                r = this.ddata.getNbLayers(),
                                n = (e ? 11 : 14) + 4 * r,
                                i = new Int32Array(n),
                                o = new Array(this.totalBitsInLayer(r, e));
                            if (e)
                                for (let t = 0; t < i.length; t++) i[t] = t;
                            else {
                                let t = n + 1 + 2 * m.truncDivision(m.truncDivision(n, 2) - 1, 15),
                                    e = n / 2,
                                    r = m.truncDivision(t, 2);
                                for (let t = 0; t < e; t++) {
                                    let n = t + m.truncDivision(t, 15);
                                    i[e - t - 1] = r - n - 1, i[e + t] = r + n + 1
                                }
                            }
                            for (let s = 0, a = 0; s < r; s++) {
                                let c = 4 * (r - s) + (e ? 9 : 12),
                                    l = 2 * s,
                                    h = n - 1 - l;
                                for (let e = 0; e < c; e++) {
                                    let r = 2 * e;
                                    for (let n = 0; n < 2; n++) o[a + r + n] = t.get(i[l + n], i[l + e]), o[a + 2 * c + r + n] = t.get(i[l + e], i[h - n]), o[a + 4 * c + r + n] = t.get(i[h - n], i[h - e]), o[a + 6 * c + r + n] = t.get(i[h - e], i[l + n])
                                }
                                a += 8 * c
                            }
                            return o
                        }
                        static readCode(t, e, r) {
                            let n = 0;
                            for (let i = e; i < e + r; i++) n <<= 1, t[i] && (n |= 1);
                            return n
                        }
                        static readByte(t, e) {
                            let r = t.length - e;
                            return r >= 8 ? et.readCode(t, e, 8) : et.readCode(t, e, r) << 8 - r
                        }
                        static convertBoolArrayToByteArray(t) {
                            let e = new Uint8Array((t.length + 7) / 8);
                            for (let r = 0; r < e.length; r++) e[r] = et.readByte(t, 8 * r);
                            return e
                        }
                        totalBitsInLayer(t, e) {
                            return ((e ? 88 : 112) + 16 * t) * t
                        }
                    }
                    et.UPPER_TABLE = ["CTRL_PS", " ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "CTRL_LL", "CTRL_ML", "CTRL_DL", "CTRL_BS"], et.LOWER_TABLE = ["CTRL_PS", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "CTRL_US", "CTRL_ML", "CTRL_DL", "CTRL_BS"], et.MIXED_TABLE = ["CTRL_PS", " ", "\\1", "\\2", "\\3", "\\4", "\\5", "\\6", "\\7", "\b", "\t", "\n", "\\13", "\f", "\r", "\\33", "\\34", "\\35", "\\36", "\\37", "@", "\\", "^", "_", "`", "|", "~", "\\177", "CTRL_LL", "CTRL_UL", "CTRL_PL", "CTRL_BS"], et.PUNCT_TABLE = ["", "\r", "\r\n", ". ", ", ", ": ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}", "CTRL_UL"], et.DIGIT_TABLE = ["CTRL_PS", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ",", ".", "CTRL_UL", "CTRL_US"];
                    class rt {
                        constructor() {}
                        static round(t) {
                            return NaN === t ? 0 : t <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : t >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t + (t < 0 ? -.5 : .5) | 0
                        }
                        static distance(t, e, r, n) {
                            const i = t - r,
                                o = e - n;
                            return Math.sqrt(i * i + o * o)
                        }
                        static sum(t) {
                            let e = 0;
                            for (let r = 0, n = t.length; r !== n; r++) e += t[r];
                            return e
                        }
                    }
                    class nt {
                        static floatToIntBits(t) {
                            return t
                        }
                    }
                    nt.MAX_VALUE = Number.MAX_SAFE_INTEGER;
                    class it {
                        constructor(t, e) {
                            this.x = t, this.y = e
                        }
                        getX() {
                            return this.x
                        }
                        getY() {
                            return this.y
                        }
                        equals(t) {
                            if (t instanceof it) {
                                const e = t;
                                return this.x === e.x && this.y === e.y
                            }
                            return !1
                        }
                        hashCode() {
                            return 31 * nt.floatToIntBits(this.x) + nt.floatToIntBits(this.y)
                        }
                        toString() {
                            return "(" + this.x + "," + this.y + ")"
                        }
                        static orderBestPatterns(t) {
                            const e = this.distance(t[0], t[1]),
                                r = this.distance(t[1], t[2]),
                                n = this.distance(t[0], t[2]);
                            let i, o, s;
                            if (r >= e && r >= n ? (o = t[0], i = t[1], s = t[2]) : n >= r && n >= e ? (o = t[1], i = t[0], s = t[2]) : (o = t[2], i = t[0], s = t[1]), this.crossProductZ(i, o, s) < 0) {
                                const t = i;
                                i = s, s = t
                            }
                            t[0] = i, t[1] = o, t[2] = s
                        }
                        static distance(t, e) {
                            return rt.distance(t.x, t.y, e.x, e.y)
                        }
                        static crossProductZ(t, e, r) {
                            const n = e.x,
                                i = e.y;
                            return (r.x - n) * (t.y - i) - (r.y - i) * (t.x - n)
                        }
                    }
                    class ot {
                        constructor(t, e) {
                            this.bits = t, this.points = e
                        }
                        getBits() {
                            return this.bits
                        }
                        getPoints() {
                            return this.points
                        }
                    }
                    class st extends ot {
                        constructor(t, e, r, n, i) {
                            super(t, e), this.compact = r, this.nbDatablocks = n, this.nbLayers = i
                        }
                        getNbLayers() {
                            return this.nbLayers
                        }
                        getNbDatablocks() {
                            return this.nbDatablocks
                        }
                        isCompact() {
                            return this.compact
                        }
                    }
                    class at {
                        constructor(t, e, r, n) {
                            this.image = t, this.height = t.getHeight(), this.width = t.getWidth(), null == e && (e = at.INIT_SIZE), null == r && (r = t.getWidth() / 2 | 0), null == n && (n = t.getHeight() / 2 | 0);
                            const i = e / 2 | 0;
                            if (this.leftInit = r - i, this.rightInit = r + i, this.upInit = n - i, this.downInit = n + i, this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) throw new D
                        }
                        detect() {
                            let t = this.leftInit,
                                e = this.rightInit,
                                r = this.upInit,
                                n = this.downInit,
                                i = !1,
                                o = !0,
                                s = !1,
                                a = !1,
                                c = !1,
                                l = !1,
                                h = !1;
                            const u = this.width,
                                d = this.height;
                            for (; o;) {
                                o = !1;
                                let f = !0;
                                for (;
                                    (f || !a) && e < u;) f = this.containsBlackPoint(r, n, e, !1), f ? (e++, o = !0, a = !0) : a || e++;
                                if (e >= u) {
                                    i = !0;
                                    break
                                }
                                let g = !0;
                                for (;
                                    (g || !c) && n < d;) g = this.containsBlackPoint(t, e, n, !0), g ? (n++, o = !0, c = !0) : c || n++;
                                if (n >= d) {
                                    i = !0;
                                    break
                                }
                                let w = !0;
                                for (;
                                    (w || !l) && t >= 0;) w = this.containsBlackPoint(r, n, t, !1), w ? (t--, o = !0, l = !0) : l || t--;
                                if (t < 0) {
                                    i = !0;
                                    break
                                }
                                let m = !0;
                                for (;
                                    (m || !h) && r >= 0;) m = this.containsBlackPoint(t, e, r, !0), m ? (r--, o = !0, h = !0) : h || r--;
                                if (r < 0) {
                                    i = !0;
                                    break
                                }
                                o && (s = !0)
                            }
                            if (!i && s) {
                                const i = e - t;
                                let o = null;
                                for (let e = 1; null === o && e < i; e++) o = this.getBlackPointOnSegment(t, n - e, t + e, n);
                                if (null == o) throw new D;
                                let s = null;
                                for (let e = 1; null === s && e < i; e++) s = this.getBlackPointOnSegment(t, r + e, t + e, r);
                                if (null == s) throw new D;
                                let a = null;
                                for (let t = 1; null === a && t < i; t++) a = this.getBlackPointOnSegment(e, r + t, e - t, r);
                                if (null == a) throw new D;
                                let c = null;
                                for (let t = 1; null === c && t < i; t++) c = this.getBlackPointOnSegment(e, n - t, e - t, n);
                                if (null == c) throw new D;
                                return this.centerEdges(c, o, a, s)
                            }
                            throw new D
                        }
                        getBlackPointOnSegment(t, e, r, n) {
                            const i = rt.round(rt.distance(t, e, r, n)),
                                o = (r - t) / i,
                                s = (n - e) / i,
                                a = this.image;
                            for (let r = 0; r < i; r++) {
                                const n = rt.round(t + r * o),
                                    i = rt.round(e + r * s);
                                if (a.get(n, i)) return new it(n, i)
                            }
                            return null
                        }
                        centerEdges(t, e, r, n) {
                            const i = t.getX(),
                                o = t.getY(),
                                s = e.getX(),
                                a = e.getY(),
                                c = r.getX(),
                                l = r.getY(),
                                h = n.getX(),
                                u = n.getY(),
                                d = at.CORR;
                            return i < this.width / 2 ? [new it(h - d, u + d), new it(s + d, a + d), new it(c - d, l - d), new it(i + d, o - d)] : [new it(h + d, u + d), new it(s + d, a - d), new it(c - d, l + d), new it(i - d, o - d)]
                        }
                        containsBlackPoint(t, e, r, n) {
                            const i = this.image;
                            if (n) {
                                for (let n = t; n <= e; n++)
                                    if (i.get(n, r)) return !0
                            } else
                                for (let n = t; n <= e; n++)
                                    if (i.get(r, n)) return !0;
                            return !1
                        }
                    }
                    at.INIT_SIZE = 10, at.CORR = 1;
                    class ct {
                        static checkAndNudgePoints(t, e) {
                            const r = t.getWidth(),
                                n = t.getHeight();
                            let i = !0;
                            for (let t = 0; t < e.length && i; t += 2) {
                                const o = Math.floor(e[t]),
                                    s = Math.floor(e[t + 1]);
                                if (o < -1 || o > r || s < -1 || s > n) throw new D;
                                i = !1, -1 === o ? (e[t] = 0, i = !0) : o === r && (e[t] = r - 1, i = !0), -1 === s ? (e[t + 1] = 0, i = !0) : s === n && (e[t + 1] = n - 1, i = !0)
                            }
                            i = !0;
                            for (let t = e.length - 2; t >= 0 && i; t -= 2) {
                                const o = Math.floor(e[t]),
                                    s = Math.floor(e[t + 1]);
                                if (o < -1 || o > r || s < -1 || s > n) throw new D;
                                i = !1, -1 === o ? (e[t] = 0, i = !0) : o === r && (e[t] = r - 1, i = !0), -1 === s ? (e[t + 1] = 0, i = !0) : s === n && (e[t + 1] = n - 1, i = !0)
                            }
                        }
                    }
                    class lt {
                        constructor(t, e, r, n, i, o, s, a, c) {
                            this.a11 = t, this.a21 = e, this.a31 = r, this.a12 = n, this.a22 = i, this.a32 = o, this.a13 = s, this.a23 = a, this.a33 = c
                        }
                        static quadrilateralToQuadrilateral(t, e, r, n, i, o, s, a, c, l, h, u, d, f, g, w) {
                            const m = lt.quadrilateralToSquare(t, e, r, n, i, o, s, a);
                            return lt.squareToQuadrilateral(c, l, h, u, d, f, g, w).times(m)
                        }
                        transformPoints(t) {
                            const e = t.length,
                                r = this.a11,
                                n = this.a12,
                                i = this.a13,
                                o = this.a21,
                                s = this.a22,
                                a = this.a23,
                                c = this.a31,
                                l = this.a32,
                                h = this.a33;
                            for (let u = 0; u < e; u += 2) {
                                const e = t[u],
                                    d = t[u + 1],
                                    f = i * e + a * d + h;
                                t[u] = (r * e + o * d + c) / f, t[u + 1] = (n * e + s * d + l) / f
                            }
                        }
                        transformPointsWithValues(t, e) {
                            const r = this.a11,
                                n = this.a12,
                                i = this.a13,
                                o = this.a21,
                                s = this.a22,
                                a = this.a23,
                                c = this.a31,
                                l = this.a32,
                                h = this.a33,
                                u = t.length;
                            for (let d = 0; d < u; d++) {
                                const u = t[d],
                                    f = e[d],
                                    g = i * u + a * f + h;
                                t[d] = (r * u + o * f + c) / g, e[d] = (n * u + s * f + l) / g
                            }
                        }
                        static squareToQuadrilateral(t, e, r, n, i, o, s, a) {
                            const c = t - r + i - s,
                                l = e - n + o - a;
                            if (0 === c && 0 === l) return new lt(r - t, i - r, t, n - e, o - n, e, 0, 0, 1);
                            {
                                const h = r - i,
                                    u = s - i,
                                    d = n - o,
                                    f = a - o,
                                    g = h * f - u * d,
                                    w = (c * f - u * l) / g,
                                    m = (h * l - c * d) / g;
                                return new lt(r - t + w * r, s - t + m * s, t, n - e + w * n, a - e + m * a, e, w, m, 1)
                            }
                        }
                        static quadrilateralToSquare(t, e, r, n, i, o, s, a) {
                            return lt.squareToQuadrilateral(t, e, r, n, i, o, s, a).buildAdjoint()
                        }
                        buildAdjoint() {
                            return new lt(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21)
                        }
                        times(t) {
                            return new lt(this.a11 * t.a11 + this.a21 * t.a12 + this.a31 * t.a13, this.a11 * t.a21 + this.a21 * t.a22 + this.a31 * t.a23, this.a11 * t.a31 + this.a21 * t.a32 + this.a31 * t.a33, this.a12 * t.a11 + this.a22 * t.a12 + this.a32 * t.a13, this.a12 * t.a21 + this.a22 * t.a22 + this.a32 * t.a23, this.a12 * t.a31 + this.a22 * t.a32 + this.a32 * t.a33, this.a13 * t.a11 + this.a23 * t.a12 + this.a33 * t.a13, this.a13 * t.a21 + this.a23 * t.a22 + this.a33 * t.a23, this.a13 * t.a31 + this.a23 * t.a32 + this.a33 * t.a33)
                        }
                    }
                    class ht extends ct {
                        sampleGrid(t, e, r, n, i, o, s, a, c, l, h, u, d, f, g, w, m, p, A) {
                            const C = lt.quadrilateralToQuadrilateral(n, i, o, s, a, c, l, h, u, d, f, g, w, m, p, A);
                            return this.sampleGridWithTransform(t, e, r, C)
                        }
                        sampleGridWithTransform(t, e, r, n) {
                            if (e <= 0 || r <= 0) throw new D;
                            const i = new N(e, r),
                                o = new Float32Array(2 * e);
                            for (let e = 0; e < r; e++) {
                                const r = o.length,
                                    s = e + .5;
                                for (let t = 0; t < r; t += 2) o[t] = t / 2 + .5, o[t + 1] = s;
                                n.transformPoints(o), ct.checkAndNudgePoints(t, o);
                                try {
                                    for (let n = 0; n < r; n += 2) t.get(Math.floor(o[n]), Math.floor(o[n + 1])) && i.set(n / 2, e)
                                } catch (t) {
                                    throw new D
                                }
                            }
                            return i
                        }
                    }
                    class ut {
                        static setGridSampler(t) {
                            ut.gridSampler = t
                        }
                        static getInstance() {
                            return ut.gridSampler
                        }
                    }
                    ut.gridSampler = new ht;
                    class dt {
                        constructor(t, e) {
                            this.x = t, this.y = e
                        }
                        toResultPoint() {
                            return new it(this.getX(), this.getY())
                        }
                        getX() {
                            return this.x
                        }
                        getY() {
                            return this.y
                        }
                    }
                    class ft {
                        constructor(t) {
                            this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799]), this.image = t
                        }
                        detect() {
                            return this.detectMirror(!1)
                        }
                        detectMirror(t) {
                            let e = this.getMatrixCenter(),
                                r = this.getBullsEyeCorners(e);
                            if (t) {
                                let t = r[0];
                                r[0] = r[2], r[2] = t
                            }
                            this.extractParameters(r);
                            let n = this.sampleGrid(this.image, r[this.shift % 4], r[(this.shift + 1) % 4], r[(this.shift + 2) % 4], r[(this.shift + 3) % 4]),
                                i = this.getMatrixCornerPoints(r);
                            return new st(n, i, this.compact, this.nbDataBlocks, this.nbLayers)
                        }
                        extractParameters(t) {
                            if (!(this.isValidPoint(t[0]) && this.isValidPoint(t[1]) && this.isValidPoint(t[2]) && this.isValidPoint(t[3]))) throw new D;
                            let e = 2 * this.nbCenterLayers,
                                r = new Int32Array([this.sampleLine(t[0], t[1], e), this.sampleLine(t[1], t[2], e), this.sampleLine(t[2], t[3], e), this.sampleLine(t[3], t[0], e)]);
                            this.shift = this.getRotation(r, e);
                            let n = 0;
                            for (let t = 0; t < 4; t++) {
                                let e = r[(this.shift + t) % 4];
                                this.compact ? (n <<= 7, n += e >> 1 & 127) : (n <<= 10, n += (e >> 2 & 992) + (e >> 1 & 31))
                            }
                            let i = this.getCorrectedParameterData(n, this.compact);
                            this.compact ? (this.nbLayers = 1 + (i >> 6), this.nbDataBlocks = 1 + (63 & i)) : (this.nbLayers = 1 + (i >> 11), this.nbDataBlocks = 1 + (2047 & i))
                        }
                        getRotation(t, e) {
                            let r = 0;
                            t.forEach(((t, n, i) => {
                                r = (t >> e - 2 << 1) + (1 & t) + (r << 3)
                            })), r = ((1 & r) << 11) + (r >> 1);
                            for (let t = 0; t < 4; t++)
                                if (m.bitCount(r ^ this.EXPECTED_CORNER_BITS[t]) <= 2) return t;
                            throw new D
                        }
                        getCorrectedParameterData(t, e) {
                            let r, n;
                            e ? (r = 7, n = 2) : (r = 10, n = 4);
                            let i = r - n,
                                o = new Int32Array(r);
                            for (let e = r - 1; e >= 0; --e) o[e] = 15 & t, t >>= 4;
                            try {
                                new tt(q.AZTEC_PARAM).decode(o, i)
                            } catch (t) {
                                throw new D
                            }
                            let s = 0;
                            for (let t = 0; t < n; t++) s = (s << 4) + o[t];
                            return s
                        }
                        getBullsEyeCorners(t) {
                            let e = t,
                                r = t,
                                n = t,
                                i = t,
                                o = !0;
                            for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
                                let t = this.getFirstDifferent(e, o, 1, -1),
                                    s = this.getFirstDifferent(r, o, 1, 1),
                                    a = this.getFirstDifferent(n, o, -1, 1),
                                    c = this.getFirstDifferent(i, o, -1, -1);
                                if (this.nbCenterLayers > 2) {
                                    let r = this.distancePoint(c, t) * this.nbCenterLayers / (this.distancePoint(i, e) * (this.nbCenterLayers + 2));
                                    if (r < .75 || r > 1.25 || !this.isWhiteOrBlackRectangle(t, s, a, c)) break
                                }
                                e = t, r = s, n = a, i = c, o = !o
                            }
                            if (5 !== this.nbCenterLayers && 7 !== this.nbCenterLayers) throw new D;
                            this.compact = 5 === this.nbCenterLayers;
                            let s = new it(e.getX() + .5, e.getY() - .5),
                                a = new it(r.getX() + .5, r.getY() + .5),
                                c = new it(n.getX() - .5, n.getY() + .5),
                                l = new it(i.getX() - .5, i.getY() - .5);
                            return this.expandSquare([s, a, c, l], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers)
                        }
                        getMatrixCenter() {
                            let t, e, r, n;
                            try {
                                let i = new at(this.image).detect();
                                t = i[0], e = i[1], r = i[2], n = i[3]
                            } catch (i) {
                                let o = this.image.getWidth() / 2,
                                    s = this.image.getHeight() / 2;
                                t = this.getFirstDifferent(new dt(o + 7, s - 7), !1, 1, -1).toResultPoint(), e = this.getFirstDifferent(new dt(o + 7, s + 7), !1, 1, 1).toResultPoint(), r = this.getFirstDifferent(new dt(o - 7, s + 7), !1, -1, 1).toResultPoint(), n = this.getFirstDifferent(new dt(o - 7, s - 7), !1, -1, -1).toResultPoint()
                            }
                            let i = rt.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4),
                                o = rt.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4);
                            try {
                                let s = new at(this.image, 15, i, o).detect();
                                t = s[0], e = s[1], r = s[2], n = s[3]
                            } catch (s) {
                                t = this.getFirstDifferent(new dt(i + 7, o - 7), !1, 1, -1).toResultPoint(), e = this.getFirstDifferent(new dt(i + 7, o + 7), !1, 1, 1).toResultPoint(), r = this.getFirstDifferent(new dt(i - 7, o + 7), !1, -1, 1).toResultPoint(), n = this.getFirstDifferent(new dt(i - 7, o - 7), !1, -1, -1).toResultPoint()
                            }
                            return i = rt.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4), o = rt.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4), new dt(i, o)
                        }
                        getMatrixCornerPoints(t) {
                            return this.expandSquare(t, 2 * this.nbCenterLayers, this.getDimension())
                        }
                        sampleGrid(t, e, r, n, i) {
                            let o = ut.getInstance(),
                                s = this.getDimension(),
                                a = s / 2 - this.nbCenterLayers,
                                c = s / 2 + this.nbCenterLayers;
                            return o.sampleGrid(t, s, s, a, a, c, a, c, c, a, c, e.getX(), e.getY(), r.getX(), r.getY(), n.getX(), n.getY(), i.getX(), i.getY())
                        }
                        sampleLine(t, e, r) {
                            let n = 0,
                                i = this.distanceResultPoint(t, e),
                                o = i / r,
                                s = t.getX(),
                                a = t.getY(),
                                c = o * (e.getX() - t.getX()) / i,
                                l = o * (e.getY() - t.getY()) / i;
                            for (let t = 0; t < r; t++) this.image.get(rt.round(s + t * c), rt.round(a + t * l)) && (n |= 1 << r - t - 1);
                            return n
                        }
                        isWhiteOrBlackRectangle(t, e, r, n) {
                            t = new dt(t.getX() - 3, t.getY() + 3), e = new dt(e.getX() - 3, e.getY() - 3), r = new dt(r.getX() + 3, r.getY() - 3), n = new dt(n.getX() + 3, n.getY() + 3);
                            let i = this.getColor(n, t);
                            if (0 === i) return !1;
                            let o = this.getColor(t, e);
                            return o === i && (o = this.getColor(e, r), o === i && (o = this.getColor(r, n), o === i))
                        }
                        getColor(t, e) {
                            let r = this.distancePoint(t, e),
                                n = (e.getX() - t.getX()) / r,
                                i = (e.getY() - t.getY()) / r,
                                o = 0,
                                s = t.getX(),
                                a = t.getY(),
                                c = this.image.get(t.getX(), t.getY()),
                                l = Math.ceil(r);
                            for (let t = 0; t < l; t++) s += n, a += i, this.image.get(rt.round(s), rt.round(a)) !== c && o++;
                            let h = o / r;
                            return h > .1 && h < .9 ? 0 : h <= .1 === c ? 1 : -1
                        }
                        getFirstDifferent(t, e, r, n) {
                            let i = t.getX() + r,
                                o = t.getY() + n;
                            for (; this.isValid(i, o) && this.image.get(i, o) === e;) i += r, o += n;
                            for (i -= r, o -= n; this.isValid(i, o) && this.image.get(i, o) === e;) i += r;
                            for (i -= r; this.isValid(i, o) && this.image.get(i, o) === e;) o += n;
                            return o -= n, new dt(i, o)
                        }
                        expandSquare(t, e, r) {
                            let n = r / (2 * e),
                                i = t[0].getX() - t[2].getX(),
                                o = t[0].getY() - t[2].getY(),
                                s = (t[0].getX() + t[2].getX()) / 2,
                                a = (t[0].getY() + t[2].getY()) / 2,
                                c = new it(s + n * i, a + n * o),
                                l = new it(s - n * i, a - n * o);
                            return i = t[1].getX() - t[3].getX(), o = t[1].getY() - t[3].getY(), s = (t[1].getX() + t[3].getX()) / 2, a = (t[1].getY() + t[3].getY()) / 2, [c, new it(s + n * i, a + n * o), l, new it(s - n * i, a - n * o)]
                        }
                        isValid(t, e) {
                            return t >= 0 && t < this.image.getWidth() && e > 0 && e < this.image.getHeight()
                        }
                        isValidPoint(t) {
                            let e = rt.round(t.getX()),
                                r = rt.round(t.getY());
                            return this.isValid(e, r)
                        }
                        distancePoint(t, e) {
                            return rt.distance(t.getX(), t.getY(), e.getX(), e.getY())
                        }
                        distanceResultPoint(t, e) {
                            return rt.distance(t.getX(), t.getY(), e.getX(), e.getY())
                        }
                        getDimension() {
                            return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers <= 4 ? 4 * this.nbLayers + 15 : 4 * this.nbLayers + 2 * (m.truncDivision(this.nbLayers - 4, 8) + 1) + 15
                        }
                    }
                    class gt {
                        decode(t, e = null) {
                            let r = null,
                                n = new ft(t.getBlackMatrix()),
                                i = null,
                                o = null;
                            try {
                                let t = n.detectMirror(!1);
                                i = t.getPoints(), this.reportFoundResultPoints(e, i), o = (new et).decode(t)
                            } catch (t) {
                                r = t
                            }
                            if (null == o) try {
                                let t = n.detectMirror(!0);
                                i = t.getPoints(), this.reportFoundResultPoints(e, i), o = (new et).decode(t)
                            } catch (t) {
                                if (null != r) throw r;
                                throw t
                            }
                            let s = new x(o.getText(), o.getRawBytes(), o.getNumBits(), i, U.AZTEC, d.currentTimeMillis()),
                                a = o.getByteSegments();
                            null != a && s.putMetadata(W.BYTE_SEGMENTS, a);
                            let c = o.getECLevel();
                            return null != c && s.putMetadata(W.ERROR_CORRECTION_LEVEL, c), s
                        }
                        reportFoundResultPoints(t, e) {
                            if (null != t) {
                                let r = t.get(C.NEED_RESULT_POINT_CALLBACK);
                                null != r && e.forEach(((t, e, n) => {
                                    r.foundPossibleResultPoint(t)
                                }))
                            }
                        }
                        reset() {}
                    }
                    class wt {
                        decode(t, e) {
                            try {
                                return this.doDecode(t, e)
                            } catch (r) {
                                if (e && !0 === e.get(C.TRY_HARDER) && t.isRotateSupported()) {
                                    const r = t.rotateCounterClockwise(),
                                        n = this.doDecode(r, e),
                                        i = n.getResultMetadata();
                                    let o = 270;
                                    null !== i && !0 === i.get(W.ORIENTATION) && (o += i.get(W.ORIENTATION) % 360), n.putMetadata(W.ORIENTATION, o);
                                    const s = n.getResultPoints();
                                    if (null !== s) {
                                        const t = r.getHeight();
                                        for (let e = 0; e < s.length; e++) s[e] = new it(t - s[e].getY() - 1, s[e].getX())
                                    }
                                    return n
                                }
                                throw new D
                            }
                        }
                        reset() {}
                        doDecode(t, e) {
                            const r = t.getWidth(),
                                n = t.getHeight();
                            let i = new p(r);
                            const o = e && !0 === e.get(C.TRY_HARDER),
                                s = Math.max(1, n >> (o ? 8 : 5));
                            let a;
                            a = o ? n : 15;
                            const c = Math.trunc(n / 2);
                            for (let o = 0; o < a; o++) {
                                const a = Math.trunc((o + 1) / 2),
                                    l = c + s * (0 == (1 & o) ? a : -a);
                                if (l < 0 || l >= n) break;
                                try {
                                    i = t.getBlackRow(l, i)
                                } catch (t) {
                                    continue
                                }
                                for (let t = 0; t < 2; t++) {
                                    if (1 === t && (i.reverse(), e && !0 === e.get(C.NEED_RESULT_POINT_CALLBACK))) {
                                        const t = new Map;
                                        e.forEach(((e, r) => t.set(r, e))), t.delete(C.NEED_RESULT_POINT_CALLBACK), e = t
                                    }
                                    try {
                                        const n = this.decodeRow(l, i, e);
                                        if (1 === t) {
                                            n.putMetadata(W.ORIENTATION, 180);
                                            const t = n.getResultPoints();
                                            null !== t && (t[0] = new it(r - t[0].getX() - 1, t[0].getY()), t[1] = new it(r - t[1].getX() - 1, t[1].getY()))
                                        }
                                        return n
                                    } catch (t) {}
                                }
                            }
                            throw new D
                        }
                        static recordPattern(t, e, r) {
                            const n = r.length;
                            for (let t = 0; t < n; t++) r[t] = 0;
                            const i = t.getSize();
                            if (e >= i) throw new D;
                            let o = !t.get(e),
                                s = 0,
                                a = e;
                            for (; a < i;) {
                                if (t.get(a) !== o) r[s]++;
                                else {
                                    if (++s === n) break;
                                    r[s] = 1, o = !o
                                }
                                a++
                            }
                            if (s !== n && (s !== n - 1 || a !== i)) throw new D
                        }
                        static recordPatternInReverse(t, e, r) {
                            let n = r.length,
                                i = t.get(e);
                            for (; e > 0 && n >= 0;) t.get(--e) !== i && (n--, i = !i);
                            if (n >= 0) throw new D;
                            wt.recordPattern(t, e + 1, r)
                        }
                        static patternMatchVariance(t, e, r) {
                            const n = t.length;
                            let i = 0,
                                o = 0;
                            for (let r = 0; r < n; r++) i += t[r], o += e[r];
                            if (i < o) return Number.POSITIVE_INFINITY;
                            const s = i / o;
                            r *= s;
                            let a = 0;
                            for (let i = 0; i < n; i++) {
                                const n = t[i],
                                    o = e[i] * s,
                                    c = n > o ? n - o : o - n;
                                if (c > r) return Number.POSITIVE_INFINITY;
                                a += c
                            }
                            return a / i
                        }
                    }
                    class mt extends wt {
                        static findStartPattern(t) {
                            const e = t.getSize(),
                                r = t.getNextSet(0);
                            let n = 0,
                                i = Int32Array.from([0, 0, 0, 0, 0, 0]),
                                o = r,
                                s = !1;
                            for (let a = r; a < e; a++)
                                if (t.get(a) !== s) i[n]++;
                                else {
                                    if (5 === n) {
                                        let e = mt.MAX_AVG_VARIANCE,
                                            r = -1;
                                        for (let t = mt.CODE_START_A; t <= mt.CODE_START_C; t++) {
                                            const n = wt.patternMatchVariance(i, mt.CODE_PATTERNS[t], mt.MAX_INDIVIDUAL_VARIANCE);
                                            n < e && (e = n, r = t)
                                        }
                                        if (r >= 0 && t.isRange(Math.max(0, o - (a - o) / 2), o, !1)) return Int32Array.from([o, a, r]);
                                        o += i[0] + i[1], i = i.slice(2, i.length - 1), i[n - 1] = 0, i[n] = 0, n--
                                    } else n++;
                                    i[n] = 1, s = !s
                                } throw new D
                        }
                        static decodeCode(t, e, r) {
                            wt.recordPattern(t, r, e);
                            let n = mt.MAX_AVG_VARIANCE,
                                i = -1;
                            for (let t = 0; t < mt.CODE_PATTERNS.length; t++) {
                                const r = mt.CODE_PATTERNS[t],
                                    o = this.patternMatchVariance(e, r, mt.MAX_INDIVIDUAL_VARIANCE);
                                o < n && (n = o, i = t)
                            }
                            if (i >= 0) return i;
                            throw new D
                        }
                        decodeRow(t, e, r) {
                            const n = r && !0 === r.get(C.ASSUME_GS1),
                                i = mt.findStartPattern(e),
                                o = i[2];
                            let s = 0;
                            const a = new Uint8Array(20);
                            let c;
                            switch (a[s++] = o, o) {
                                case mt.CODE_START_A:
                                    c = mt.CODE_CODE_A;
                                    break;
                                case mt.CODE_START_B:
                                    c = mt.CODE_CODE_B;
                                    break;
                                case mt.CODE_START_C:
                                    c = mt.CODE_CODE_C;
                                    break;
                                default:
                                    throw new E
                            }
                            let l = !1,
                                u = !1,
                                d = "",
                                f = i[0],
                                g = i[1];
                            const w = Int32Array.from([0, 0, 0, 0, 0, 0]);
                            let m = 0,
                                p = 0,
                                A = o,
                                I = 0,
                                S = !0,
                                _ = !1,
                                T = !1;
                            for (; !l;) {
                                const t = u;
                                switch (u = !1, m = p, p = mt.decodeCode(e, w, g), a[s++] = p, p !== mt.CODE_STOP && (S = !0), p !== mt.CODE_STOP && (I++, A += I * p), f = g, g += w.reduce(((t, e) => t + e), 0), p) {
                                    case mt.CODE_START_A:
                                    case mt.CODE_START_B:
                                    case mt.CODE_START_C:
                                        throw new E
                                }
                                switch (c) {
                                    case mt.CODE_CODE_A:
                                        if (p < 64) d += T === _ ? String.fromCharCode(" ".charCodeAt(0) + p) : String.fromCharCode(" ".charCodeAt(0) + p + 128), T = !1;
                                        else if (p < 96) d += T === _ ? String.fromCharCode(p - 64) : String.fromCharCode(p + 64), T = !1;
                                        else switch (p !== mt.CODE_STOP && (S = !1), p) {
                                            case mt.CODE_FNC_1:
                                                n && (0 === d.length ? d += "]C1" : d += String.fromCharCode(29));
                                                break;
                                            case mt.CODE_FNC_2:
                                            case mt.CODE_FNC_3:
                                                break;
                                            case mt.CODE_FNC_4_A:
                                                !_ && T ? (_ = !0, T = !1) : _ && T ? (_ = !1, T = !1) : T = !0;
                                                break;
                                            case mt.CODE_SHIFT:
                                                u = !0, c = mt.CODE_CODE_B;
                                                break;
                                            case mt.CODE_CODE_B:
                                                c = mt.CODE_CODE_B;
                                                break;
                                            case mt.CODE_CODE_C:
                                                c = mt.CODE_CODE_C;
                                                break;
                                            case mt.CODE_STOP:
                                                l = !0
                                        }
                                        break;
                                    case mt.CODE_CODE_B:
                                        if (p < 96) d += T === _ ? String.fromCharCode(" ".charCodeAt(0) + p) : String.fromCharCode(" ".charCodeAt(0) + p + 128), T = !1;
                                        else switch (p !== mt.CODE_STOP && (S = !1), p) {
                                            case mt.CODE_FNC_1:
                                                n && (0 === d.length ? d += "]C1" : d += String.fromCharCode(29));
                                                break;
                                            case mt.CODE_FNC_2:
                                            case mt.CODE_FNC_3:
                                                break;
                                            case mt.CODE_FNC_4_B:
                                                !_ && T ? (_ = !0, T = !1) : _ && T ? (_ = !1, T = !1) : T = !0;
                                                break;
                                            case mt.CODE_SHIFT:
                                                u = !0, c = mt.CODE_CODE_A;
                                                break;
                                            case mt.CODE_CODE_A:
                                                c = mt.CODE_CODE_A;
                                                break;
                                            case mt.CODE_CODE_C:
                                                c = mt.CODE_CODE_C;
                                                break;
                                            case mt.CODE_STOP:
                                                l = !0
                                        }
                                        break;
                                    case mt.CODE_CODE_C:
                                        if (p < 100) p < 10 && (d += "0"), d += p;
                                        else switch (p !== mt.CODE_STOP && (S = !1), p) {
                                            case mt.CODE_FNC_1:
                                                n && (0 === d.length ? d += "]C1" : d += String.fromCharCode(29));
                                                break;
                                            case mt.CODE_CODE_A:
                                                c = mt.CODE_CODE_A;
                                                break;
                                            case mt.CODE_CODE_B:
                                                c = mt.CODE_CODE_B;
                                                break;
                                            case mt.CODE_STOP:
                                                l = !0
                                        }
                                }
                                t && (c = c === mt.CODE_CODE_A ? mt.CODE_CODE_B : mt.CODE_CODE_A)
                            }
                            const y = g - f;
                            if (g = e.getNextUnset(g), !e.isRange(g, Math.min(e.getSize(), g + (g - f) / 2), !1)) throw new D;
                            if (A -= I * m, A % 103 !== m) throw new h;
                            const N = d.length;
                            if (0 === N) throw new D;
                            N > 0 && S && (d = c === mt.CODE_CODE_C ? d.substring(0, N - 2) : d.substring(0, N - 1));
                            const M = (i[1] + i[0]) / 2,
                                R = f + y / 2,
                                O = a.length,
                                b = new Uint8Array(O);
                            for (let t = 0; t < O; t++) b[t] = a[t];
                            const B = [new it(M, t), new it(R, t)];
                            return new x(d, b, 0, B, U.CODE_128, (new Date).getTime())
                        }
                    }
                    mt.CODE_PATTERNS = [Int32Array.from([2, 1, 2, 2, 2, 2]), Int32Array.from([2, 2, 2, 1, 2, 2]), Int32Array.from([2, 2, 2, 2, 2, 1]), Int32Array.from([1, 2, 1, 2, 2, 3]), Int32Array.from([1, 2, 1, 3, 2, 2]), Int32Array.from([1, 3, 1, 2, 2, 2]), Int32Array.from([1, 2, 2, 2, 1, 3]), Int32Array.from([1, 2, 2, 3, 1, 2]), Int32Array.from([1, 3, 2, 2, 1, 2]), Int32Array.from([2, 2, 1, 2, 1, 3]), Int32Array.from([2, 2, 1, 3, 1, 2]), Int32Array.from([2, 3, 1, 2, 1, 2]), Int32Array.from([1, 1, 2, 2, 3, 2]), Int32Array.from([1, 2, 2, 1, 3, 2]), Int32Array.from([1, 2, 2, 2, 3, 1]), Int32Array.from([1, 1, 3, 2, 2, 2]), Int32Array.from([1, 2, 3, 1, 2, 2]), Int32Array.from([1, 2, 3, 2, 2, 1]), Int32Array.from([2, 2, 3, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 3, 2]), Int32Array.from([2, 2, 1, 2, 3, 1]), Int32Array.from([2, 1, 3, 2, 1, 2]), Int32Array.from([2, 2, 3, 1, 1, 2]), Int32Array.from([3, 1, 2, 1, 3, 1]), Int32Array.from([3, 1, 1, 2, 2, 2]), Int32Array.from([3, 2, 1, 1, 2, 2]), Int32Array.from([3, 2, 1, 2, 2, 1]), Int32Array.from([3, 1, 2, 2, 1, 2]), Int32Array.from([3, 2, 2, 1, 1, 2]), Int32Array.from([3, 2, 2, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 2, 3]), Int32Array.from([2, 1, 2, 3, 2, 1]), Int32Array.from([2, 3, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 3, 2, 3]), Int32Array.from([1, 3, 1, 1, 2, 3]), Int32Array.from([1, 3, 1, 3, 2, 1]), Int32Array.from([1, 1, 2, 3, 1, 3]), Int32Array.from([1, 3, 2, 1, 1, 3]), Int32Array.from([1, 3, 2, 3, 1, 1]), Int32Array.from([2, 1, 1, 3, 1, 3]), Int32Array.from([2, 3, 1, 1, 1, 3]), Int32Array.from([2, 3, 1, 3, 1, 1]), Int32Array.from([1, 1, 2, 1, 3, 3]), Int32Array.from([1, 1, 2, 3, 3, 1]), Int32Array.from([1, 3, 2, 1, 3, 1]), Int32Array.from([1, 1, 3, 1, 2, 3]), Int32Array.from([1, 1, 3, 3, 2, 1]), Int32Array.from([1, 3, 3, 1, 2, 1]), Int32Array.from([3, 1, 3, 1, 2, 1]), Int32Array.from([2, 1, 1, 3, 3, 1]), Int32Array.from([2, 3, 1, 1, 3, 1]), Int32Array.from([2, 1, 3, 1, 1, 3]), Int32Array.from([2, 1, 3, 3, 1, 1]), Int32Array.from([2, 1, 3, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 2, 3]), Int32Array.from([3, 1, 1, 3, 2, 1]), Int32Array.from([3, 3, 1, 1, 2, 1]), Int32Array.from([3, 1, 2, 1, 1, 3]), Int32Array.from([3, 1, 2, 3, 1, 1]), Int32Array.from([3, 3, 2, 1, 1, 1]), Int32Array.from([3, 1, 4, 1, 1, 1]), Int32Array.from([2, 2, 1, 4, 1, 1]), Int32Array.from([4, 3, 1, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 2, 4]), Int32Array.from([1, 1, 1, 4, 2, 2]), Int32Array.from([1, 2, 1, 1, 2, 4]), Int32Array.from([1, 2, 1, 4, 2, 1]), Int32Array.from([1, 4, 1, 1, 2, 2]), Int32Array.from([1, 4, 1, 2, 2, 1]), Int32Array.from([1, 1, 2, 2, 1, 4]), Int32Array.from([1, 1, 2, 4, 1, 2]), Int32Array.from([1, 2, 2, 1, 1, 4]), Int32Array.from([1, 2, 2, 4, 1, 1]), Int32Array.from([1, 4, 2, 1, 1, 2]), Int32Array.from([1, 4, 2, 2, 1, 1]), Int32Array.from([2, 4, 1, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 1, 4]), Int32Array.from([4, 1, 3, 1, 1, 1]), Int32Array.from([2, 4, 1, 1, 1, 2]), Int32Array.from([1, 3, 4, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 4, 2]), Int32Array.from([1, 2, 1, 1, 4, 2]), Int32Array.from([1, 2, 1, 2, 4, 1]), Int32Array.from([1, 1, 4, 2, 1, 2]), Int32Array.from([1, 2, 4, 1, 1, 2]), Int32Array.from([1, 2, 4, 2, 1, 1]), Int32Array.from([4, 1, 1, 2, 1, 2]), Int32Array.from([4, 2, 1, 1, 1, 2]), Int32Array.from([4, 2, 1, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 4, 1]), Int32Array.from([2, 1, 4, 1, 2, 1]), Int32Array.from([4, 1, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 1, 4, 3]), Int32Array.from([1, 1, 1, 3, 4, 1]), Int32Array.from([1, 3, 1, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 1, 3]), Int32Array.from([1, 1, 4, 3, 1, 1]), Int32Array.from([4, 1, 1, 1, 1, 3]), Int32Array.from([4, 1, 1, 3, 1, 1]), Int32Array.from([1, 1, 3, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 4, 1]), Int32Array.from([4, 1, 1, 1, 3, 1]), Int32Array.from([2, 1, 1, 4, 1, 2]), Int32Array.from([2, 1, 1, 2, 1, 4]), Int32Array.from([2, 1, 1, 2, 3, 2]), Int32Array.from([2, 3, 3, 1, 1, 1, 2])], mt.MAX_AVG_VARIANCE = .25, mt.MAX_INDIVIDUAL_VARIANCE = .7, mt.CODE_SHIFT = 98, mt.CODE_CODE_C = 99, mt.CODE_CODE_B = 100, mt.CODE_CODE_A = 101, mt.CODE_FNC_1 = 102, mt.CODE_FNC_2 = 97, mt.CODE_FNC_3 = 96, mt.CODE_FNC_4_A = 101, mt.CODE_FNC_4_B = 100, mt.CODE_START_A = 103, mt.CODE_START_B = 104, mt.CODE_START_C = 105, mt.CODE_STOP = 106;
                    class pt extends wt {
                        constructor(t = !1, e = !1) {
                            super(), this.usingCheckDigit = t, this.extendedMode = e, this.decodeRowResult = "", this.counters = new Int32Array(9)
                        }
                        decodeRow(t, e, r) {
                            let n = this.counters;
                            n.fill(0), this.decodeRowResult = "";
                            let i, o, s = pt.findAsteriskPattern(e, n),
                                a = e.getNextSet(s[1]),
                                c = e.getSize();
                            do {
                                pt.recordPattern(e, a, n);
                                let t = pt.toNarrowWidePattern(n);
                                if (t < 0) throw new D;
                                i = pt.patternToChar(t), this.decodeRowResult += i, o = a;
                                for (let t of n) a += t;
                                a = e.getNextSet(a)
                            } while ("*" !== i);
                            this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
                            let l, u = 0;
                            for (let t of n) u += t;
                            if (a !== c && 2 * (a - o - u) < u) throw new D;
                            if (this.usingCheckDigit) {
                                let t = this.decodeRowResult.length - 1,
                                    e = 0;
                                for (let r = 0; r < t; r++) e += pt.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(r));
                                if (this.decodeRowResult.charAt(t) !== pt.ALPHABET_STRING.charAt(e % 43)) throw new h;
                                this.decodeRowResult = this.decodeRowResult.substring(0, t)
                            }
                            if (0 === this.decodeRowResult.length) throw new D;
                            l = this.extendedMode ? pt.decodeExtended(this.decodeRowResult) : this.decodeRowResult;
                            let d = (s[1] + s[0]) / 2,
                                f = o + u / 2;
                            return new x(l, null, 0, [new it(d, t), new it(f, t)], U.CODE_39, (new Date).getTime())
                        }
                        static findAsteriskPattern(t, e) {
                            let r = t.getSize(),
                                n = t.getNextSet(0),
                                i = 0,
                                o = n,
                                s = !1,
                                a = e.length;
                            for (let c = n; c < r; c++)
                                if (t.get(c) !== s) e[i]++;
                                else {
                                    if (i === a - 1) {
                                        if (this.toNarrowWidePattern(e) === pt.ASTERISK_ENCODING && t.isRange(Math.max(0, o - Math.floor((c - o) / 2)), o, !1)) return [o, c];
                                        o += e[0] + e[1], e.copyWithin(0, 2, 2 + i - 1), e[i - 1] = 0, e[i] = 0, i--
                                    } else i++;
                                    e[i] = 1, s = !s
                                } throw new D
                        }
                        static toNarrowWidePattern(t) {
                            let e, r = t.length,
                                n = 0;
                            do {
                                let i = 2147483647;
                                for (let e of t) e < i && e > n && (i = e);
                                n = i, e = 0;
                                let o = 0,
                                    s = 0;
                                for (let i = 0; i < r; i++) {
                                    let a = t[i];
                                    a > n && (s |= 1 << r - 1 - i, e++, o += a)
                                }
                                if (3 === e) {
                                    for (let i = 0; i < r && e > 0; i++) {
                                        let r = t[i];
                                        if (r > n && (e--, 2 * r >= o)) return -1
                                    }
                                    return s
                                }
                            } while (e > 3);
                            return -1
                        }
                        static patternToChar(t) {
                            for (let e = 0; e < pt.CHARACTER_ENCODINGS.length; e++)
                                if (pt.CHARACTER_ENCODINGS[e] === t) return pt.ALPHABET_STRING.charAt(e);
                            if (t === pt.ASTERISK_ENCODING) return "*";
                            throw new D
                        }
                        static decodeExtended(t) {
                            let e = t.length,
                                r = "";
                            for (let n = 0; n < e; n++) {
                                let e = t.charAt(n);
                                if ("+" === e || "$" === e || "%" === e || "/" === e) {
                                    let i = t.charAt(n + 1),
                                        o = "\0";
                                    switch (e) {
                                        case "+":
                                            if (!(i >= "A" && i <= "Z")) throw new E;
                                            o = String.fromCharCode(i.charCodeAt(0) + 32);
                                            break;
                                        case "$":
                                            if (!(i >= "A" && i <= "Z")) throw new E;
                                            o = String.fromCharCode(i.charCodeAt(0) - 64);
                                            break;
                                        case "%":
                                            if (i >= "A" && i <= "E") o = String.fromCharCode(i.charCodeAt(0) - 38);
                                            else if (i >= "F" && i <= "J") o = String.fromCharCode(i.charCodeAt(0) - 11);
                                            else if (i >= "K" && i <= "O") o = String.fromCharCode(i.charCodeAt(0) + 16);
                                            else if (i >= "P" && i <= "T") o = String.fromCharCode(i.charCodeAt(0) + 43);
                                            else if ("U" === i) o = "\0";
                                            else if ("V" === i) o = "@";
                                            else if ("W" === i) o = "`";
                                            else {
                                                if ("X" !== i && "Y" !== i && "Z" !== i) throw new E;
                                                o = ""
                                            }
                                            break;
                                        case "/":
                                            if (i >= "A" && i <= "O") o = String.fromCharCode(i.charCodeAt(0) - 32);
                                            else {
                                                if ("Z" !== i) throw new E;
                                                o = ":"
                                            }
                                    }
                                    r += o, n++
                                } else r += e
                            }
                            return r
                        }
                    }
                    pt.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%", pt.CHARACTER_ENCODINGS = [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42], pt.ASTERISK_ENCODING = 148;
                    class At extends wt {
                        constructor() {
                            super(...arguments), this.narrowLineWidth = -1
                        }
                        decodeRow(t, e, r) {
                            let n = this.decodeStart(e),
                                i = this.decodeEnd(e),
                                o = new y;
                            At.decodeMiddle(e, n[1], i[0], o);
                            let s = o.toString(),
                                a = null;
                            null != r && (a = r.get(C.ALLOWED_LENGTHS)), null == a && (a = At.DEFAULT_ALLOWED_LENGTHS);
                            let c = s.length,
                                l = !1,
                                h = 0;
                            for (let t of a) {
                                if (c === t) {
                                    l = !0;
                                    break
                                }
                                t > h && (h = t)
                            }
                            if (!l && c > h && (l = !0), !l) throw new E;
                            const u = [new it(n[1], t), new it(i[0], t)];
                            return new x(s, null, 0, u, U.ITF, (new Date).getTime())
                        }
                        static decodeMiddle(t, e, r, n) {
                            let i = new Int32Array(10),
                                o = new Int32Array(5),
                                s = new Int32Array(5);
                            for (i.fill(0), o.fill(0), s.fill(0); e < r;) {
                                wt.recordPattern(t, e, i);
                                for (let t = 0; t < 5; t++) {
                                    let e = 2 * t;
                                    o[t] = i[e], s[t] = i[e + 1]
                                }
                                let r = At.decodeDigit(o);
                                n.append(r.toString()), r = this.decodeDigit(s), n.append(r.toString()), i.forEach((function(t) {
                                    e += t
                                }))
                            }
                        }
                        decodeStart(t) {
                            let e = At.skipWhiteSpace(t),
                                r = At.findGuardPattern(t, e, At.START_PATTERN);
                            return this.narrowLineWidth = (r[1] - r[0]) / 4, this.validateQuietZone(t, r[0]), r
                        }
                        validateQuietZone(t, e) {
                            let r = 10 * this.narrowLineWidth;
                            r = r < e ? r : e;
                            for (let n = e - 1; r > 0 && n >= 0 && !t.get(n); n--) r--;
                            if (0 !== r) throw new D
                        }
                        static skipWhiteSpace(t) {
                            const e = t.getSize(),
                                r = t.getNextSet(0);
                            if (r === e) throw new D;
                            return r
                        }
                        decodeEnd(t) {
                            t.reverse();
                            try {
                                let e, r = At.skipWhiteSpace(t);
                                try {
                                    e = At.findGuardPattern(t, r, At.END_PATTERN_REVERSED[0])
                                } catch (n) {
                                    n instanceof D && (e = At.findGuardPattern(t, r, At.END_PATTERN_REVERSED[1]))
                                }
                                this.validateQuietZone(t, e[0]);
                                let n = e[0];
                                return e[0] = t.getSize() - e[1], e[1] = t.getSize() - n, e
                            } finally {
                                t.reverse()
                            }
                        }
                        static findGuardPattern(t, e, r) {
                            let n = r.length,
                                i = new Int32Array(n),
                                o = t.getSize(),
                                s = !1,
                                a = 0,
                                c = e;
                            i.fill(0);
                            for (let l = e; l < o; l++)
                                if (t.get(l) !== s) i[a]++;
                                else {
                                    if (a === n - 1) {
                                        if (wt.patternMatchVariance(i, r, At.MAX_INDIVIDUAL_VARIANCE) < At.MAX_AVG_VARIANCE) return [c, l];
                                        c += i[0] + i[1], d.arraycopy(i, 2, i, 0, a - 1), i[a - 1] = 0, i[a] = 0, a--
                                    } else a++;
                                    i[a] = 1, s = !s
                                } throw new D
                        }
                        static decodeDigit(t) {
                            let e = At.MAX_AVG_VARIANCE,
                                r = -1,
                                n = At.PATTERNS.length;
                            for (let i = 0; i < n; i++) {
                                let n = At.PATTERNS[i],
                                    o = wt.patternMatchVariance(t, n, At.MAX_INDIVIDUAL_VARIANCE);
                                o < e ? (e = o, r = i) : o === e && (r = -1)
                            }
                            if (r >= 0) return r % 10;
                            throw new D
                        }
                    }
                    At.PATTERNS = [Int32Array.from([1, 1, 2, 2, 1]), Int32Array.from([2, 1, 1, 1, 2]), Int32Array.from([1, 2, 1, 1, 2]), Int32Array.from([2, 2, 1, 1, 1]), Int32Array.from([1, 1, 2, 1, 2]), Int32Array.from([2, 1, 2, 1, 1]), Int32Array.from([1, 2, 2, 1, 1]), Int32Array.from([1, 1, 1, 2, 2]), Int32Array.from([2, 1, 1, 2, 1]), Int32Array.from([1, 2, 1, 2, 1]), Int32Array.from([1, 1, 3, 3, 1]), Int32Array.from([3, 1, 1, 1, 3]), Int32Array.from([1, 3, 1, 1, 3]), Int32Array.from([3, 3, 1, 1, 1]), Int32Array.from([1, 1, 3, 1, 3]), Int32Array.from([3, 1, 3, 1, 1]), Int32Array.from([1, 3, 3, 1, 1]), Int32Array.from([1, 1, 1, 3, 3]), Int32Array.from([3, 1, 1, 3, 1]), Int32Array.from([1, 3, 1, 3, 1])], At.MAX_AVG_VARIANCE = .38, At.MAX_INDIVIDUAL_VARIANCE = .5, At.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14], At.START_PATTERN = Int32Array.from([1, 1, 1, 1]), At.END_PATTERN_REVERSED = [Int32Array.from([1, 1, 2]), Int32Array.from([1, 1, 3])];
                    class Ct extends wt {
                        constructor() {
                            super(...arguments), this.decodeRowStringBuffer = ""
                        }
                        static findStartGuardPattern(t) {
                            let e, r = !1,
                                n = 0,
                                i = Int32Array.from([0, 0, 0]);
                            for (; !r;) {
                                i = Int32Array.from([0, 0, 0]), e = Ct.findGuardPattern(t, n, !1, this.START_END_PATTERN, i);
                                let o = e[0];
                                n = e[1];
                                let s = o - (n - o);
                                s >= 0 && (r = t.isRange(s, o, !1))
                            }
                            return e
                        }
                        static checkChecksum(t) {
                            return Ct.checkStandardUPCEANChecksum(t)
                        }
                        static checkStandardUPCEANChecksum(t) {
                            let e = t.length;
                            if (0 === e) return !1;
                            let r = parseInt(t.charAt(e - 1), 10);
                            return Ct.getStandardUPCEANChecksum(t.substring(0, e - 1)) === r
                        }
                        static getStandardUPCEANChecksum(t) {
                            let e = t.length,
                                r = 0;
                            for (let n = e - 1; n >= 0; n -= 2) {
                                let e = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                                if (e < 0 || e > 9) throw new E;
                                r += e
                            }
                            r *= 3;
                            for (let n = e - 2; n >= 0; n -= 2) {
                                let e = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                                if (e < 0 || e > 9) throw new E;
                                r += e
                            }
                            return (1e3 - r) % 10
                        }
                        static decodeEnd(t, e) {
                            return Ct.findGuardPattern(t, e, !1, Ct.START_END_PATTERN, new Int32Array(Ct.START_END_PATTERN.length).fill(0))
                        }
                        static findGuardPatternWithoutCounters(t, e, r, n) {
                            return this.findGuardPattern(t, e, r, n, new Int32Array(n.length))
                        }
                        static findGuardPattern(t, e, r, n, i) {
                            let o = t.getSize(),
                                s = 0,
                                a = e = r ? t.getNextUnset(e) : t.getNextSet(e),
                                c = n.length,
                                l = r;
                            for (let r = e; r < o; r++)
                                if (t.get(r) !== l) i[s]++;
                                else {
                                    if (s === c - 1) {
                                        if (wt.patternMatchVariance(i, n, Ct.MAX_INDIVIDUAL_VARIANCE) < Ct.MAX_AVG_VARIANCE) return Int32Array.from([a, r]);
                                        a += i[0] + i[1];
                                        let t = i.slice(2, i.length - 1);
                                        for (let e = 0; e < s - 1; e++) i[e] = t[e];
                                        i[s - 1] = 0, i[s] = 0, s--
                                    } else s++;
                                    i[s] = 1, l = !l
                                } throw new D
                        }
                        static decodeDigit(t, e, r, n) {
                            this.recordPattern(t, r, e);
                            let i = this.MAX_AVG_VARIANCE,
                                o = -1,
                                s = n.length;
                            for (let t = 0; t < s; t++) {
                                let r = n[t],
                                    s = wt.patternMatchVariance(e, r, Ct.MAX_INDIVIDUAL_VARIANCE);
                                s < i && (i = s, o = t)
                            }
                            if (o >= 0) return o;
                            throw new D
                        }
                    }
                    Ct.MAX_AVG_VARIANCE = .48, Ct.MAX_INDIVIDUAL_VARIANCE = .7, Ct.START_END_PATTERN = Int32Array.from([1, 1, 1]), Ct.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]), Ct.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), Ct.L_PATTERNS = [Int32Array.from([3, 2, 1, 1]), Int32Array.from([2, 2, 2, 1]), Int32Array.from([2, 1, 2, 2]), Int32Array.from([1, 4, 1, 1]), Int32Array.from([1, 1, 3, 2]), Int32Array.from([1, 2, 3, 1]), Int32Array.from([1, 1, 1, 4]), Int32Array.from([1, 3, 1, 2]), Int32Array.from([1, 2, 1, 3]), Int32Array.from([3, 1, 1, 2])];
                    class Et {
                        constructor() {
                            this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5], this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = ""
                        }
                        decodeRow(t, e, r) {
                            let n = this.decodeRowStringBuffer,
                                i = this.decodeMiddle(e, r, n),
                                o = n.toString(),
                                s = Et.parseExtensionString(o),
                                a = [new it((r[0] + r[1]) / 2, t), new it(i, t)],
                                c = new x(o, null, 0, a, U.UPC_EAN_EXTENSION, (new Date).getTime());
                            return null != s && c.putAllMetadata(s), c
                        }
                        decodeMiddle(t, e, r) {
                            let n = this.decodeMiddleCounters;
                            n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                            let i = t.getSize(),
                                o = e[1],
                                s = 0;
                            for (let e = 0; e < 5 && o < i; e++) {
                                let i = Ct.decodeDigit(t, n, o, Ct.L_AND_G_PATTERNS);
                                r += String.fromCharCode("0".charCodeAt(0) + i % 10);
                                for (let t of n) o += t;
                                i >= 10 && (s |= 1 << 4 - e), 4 !== e && (o = t.getNextSet(o), o = t.getNextUnset(o))
                            }
                            if (5 !== r.length) throw new D;
                            let a = this.determineCheckDigit(s);
                            if (Et.extensionChecksum(r.toString()) !== a) throw new D;
                            return o
                        }
                        static extensionChecksum(t) {
                            let e = t.length,
                                r = 0;
                            for (let n = e - 2; n >= 0; n -= 2) r += t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                            r *= 3;
                            for (let n = e - 1; n >= 0; n -= 2) r += t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                            return r *= 3, r % 10
                        }
                        determineCheckDigit(t) {
                            for (let e = 0; e < 10; e++)
                                if (t === this.CHECK_DIGIT_ENCODINGS[e]) return e;
                            throw new D
                        }
                        static parseExtensionString(t) {
                            if (5 !== t.length) return null;
                            let e = Et.parseExtension5String(t);
                            return null == e ? null : new Map([
                                [W.SUGGESTED_PRICE, e]
                            ])
                        }
                        static parseExtension5String(t) {
                            let e;
                            switch (t.charAt(0)) {
                                case "0":
                                    e = "£";
                                    break;
                                case "5":
                                    e = "$";
                                    break;
                                case "9":
                                    switch (t) {
                                        case "90000":
                                            return null;
                                        case "99991":
                                            return "0.00";
                                        case "99990":
                                            return "Used"
                                    }
                                    e = "";
                                    break;
                                default:
                                    e = ""
                            }
                            let r = parseInt(t.substring(1)),
                                n = r % 100;
                            return e + (r / 100).toString() + "." + (n < 10 ? "0" + n : n.toString())
                        }
                    }
                    class It {
                        constructor() {
                            this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = ""
                        }
                        decodeRow(t, e, r) {
                            let n = this.decodeRowStringBuffer,
                                i = this.decodeMiddle(e, r, n),
                                o = n.toString(),
                                s = It.parseExtensionString(o),
                                a = [new it((r[0] + r[1]) / 2, t), new it(i, t)],
                                c = new x(o, null, 0, a, U.UPC_EAN_EXTENSION, (new Date).getTime());
                            return null != s && c.putAllMetadata(s), c
                        }
                        decodeMiddle(t, e, r) {
                            let n = this.decodeMiddleCounters;
                            n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                            let i = t.getSize(),
                                o = e[1],
                                s = 0;
                            for (let e = 0; e < 2 && o < i; e++) {
                                let i = Ct.decodeDigit(t, n, o, Ct.L_AND_G_PATTERNS);
                                r += String.fromCharCode("0".charCodeAt(0) + i % 10);
                                for (let t of n) o += t;
                                i >= 10 && (s |= 1 << 1 - e), 1 !== e && (o = t.getNextSet(o), o = t.getNextUnset(o))
                            }
                            if (2 !== r.length) throw new D;
                            if (parseInt(r.toString()) % 4 !== s) throw new D;
                            return o
                        }
                        static parseExtensionString(t) {
                            return 2 !== t.length ? null : new Map([
                                [W.ISSUE_NUMBER, parseInt(t)]
                            ])
                        }
                    }
                    class St {
                        static decodeRow(t, e, r) {
                            let n = Ct.findGuardPattern(e, r, !1, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
                            try {
                                return (new Et).decodeRow(t, e, n)
                            } catch (r) {
                                return (new It).decodeRow(t, e, n)
                            }
                        }
                    }
                    St.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]);
                    class _t extends Ct {
                        constructor() {
                            super(), this.decodeRowStringBuffer = "", _t.L_AND_G_PATTERNS = _t.L_PATTERNS.map((t => Int32Array.from(t)));
                            for (let t = 10; t < 20; t++) {
                                let e = _t.L_PATTERNS[t - 10],
                                    r = new Int32Array(e.length);
                                for (let t = 0; t < e.length; t++) r[t] = e[e.length - t - 1];
                                _t.L_AND_G_PATTERNS[t] = r
                            }
                        }
                        decodeRow(t, e, r) {
                            let n = _t.findStartGuardPattern(e),
                                i = null == r ? null : r.get(C.NEED_RESULT_POINT_CALLBACK);
                            if (null != i) {
                                const e = new it((n[0] + n[1]) / 2, t);
                                i.foundPossibleResultPoint(e)
                            }
                            let o = this.decodeMiddle(e, n, this.decodeRowStringBuffer),
                                s = o.rowOffset,
                                a = o.resultString;
                            if (null != i) {
                                const e = new it(s, t);
                                i.foundPossibleResultPoint(e)
                            }
                            let c = this.decodeEnd(e, s);
                            if (null != i) {
                                const e = new it((c[0] + c[1]) / 2, t);
                                i.foundPossibleResultPoint(e)
                            }
                            let l = c[1],
                                u = l + (l - c[0]);
                            if (u >= e.getSize() || !e.isRange(l, u, !1)) throw new D;
                            let d = a.toString();
                            if (d.length < 8) throw new E;
                            if (!_t.checkChecksum(d)) throw new h;
                            let f = (n[1] + n[0]) / 2,
                                g = (c[1] + c[0]) / 2,
                                w = this.getBarcodeFormat(),
                                m = [new it(f, t), new it(g, t)],
                                p = new x(d, null, 0, m, w, (new Date).getTime()),
                                A = 0;
                            try {
                                let r = St.decodeRow(t, e, c[1]);
                                p.putMetadata(W.UPC_EAN_EXTENSION, r.getText()), p.putAllMetadata(r.getResultMetadata()), p.addResultPoints(r.getResultPoints()), A = r.getText().length
                            } catch (t) {}
                            let I = null == r ? null : r.get(C.ALLOWED_EAN_EXTENSIONS);
                            if (null != I) {
                                let t = !1;
                                for (let e in I)
                                    if (A.toString() === e) {
                                        t = !0;
                                        break
                                    } if (!t) throw new D
                            }
                            return p
                        }
                        decodeEnd(t, e) {
                            return _t.findGuardPattern(t, e, !1, _t.START_END_PATTERN, new Int32Array(_t.START_END_PATTERN.length).fill(0))
                        }
                        static checkChecksum(t) {
                            return _t.checkStandardUPCEANChecksum(t)
                        }
                        static checkStandardUPCEANChecksum(t) {
                            let e = t.length;
                            if (0 === e) return !1;
                            let r = parseInt(t.charAt(e - 1), 10);
                            return _t.getStandardUPCEANChecksum(t.substring(0, e - 1)) === r
                        }
                        static getStandardUPCEANChecksum(t) {
                            let e = t.length,
                                r = 0;
                            for (let n = e - 1; n >= 0; n -= 2) {
                                let e = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                                if (e < 0 || e > 9) throw new E;
                                r += e
                            }
                            r *= 3;
                            for (let n = e - 2; n >= 0; n -= 2) {
                                let e = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                                if (e < 0 || e > 9) throw new E;
                                r += e
                            }
                            return (1e3 - r) % 10
                        }
                    }
                    class Tt extends _t {
                        constructor() {
                            super(), this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])
                        }
                        decodeMiddle(t, e, r) {
                            let n = this.decodeMiddleCounters;
                            n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                            let i = t.getSize(),
                                o = e[1],
                                s = 0;
                            for (let e = 0; e < 6 && o < i; e++) {
                                let i = _t.decodeDigit(t, n, o, _t.L_AND_G_PATTERNS);
                                r += String.fromCharCode("0".charCodeAt(0) + i % 10);
                                for (let t of n) o += t;
                                i >= 10 && (s |= 1 << 5 - e)
                            }
                            r = Tt.determineFirstDigit(r, s), o = _t.findGuardPattern(t, o, !0, _t.MIDDLE_PATTERN, new Int32Array(_t.MIDDLE_PATTERN.length).fill(0))[1];
                            for (let e = 0; e < 6 && o < i; e++) {
                                let e = _t.decodeDigit(t, n, o, _t.L_PATTERNS);
                                r += String.fromCharCode("0".charCodeAt(0) + e);
                                for (let t of n) o += t
                            }
                            return {
                                rowOffset: o,
                                resultString: r
                            }
                        }
                        getBarcodeFormat() {
                            return U.EAN_13
                        }
                        static determineFirstDigit(t, e) {
                            for (let r = 0; r < 10; r++)
                                if (e === this.FIRST_DIGIT_ENCODINGS[r]) return String.fromCharCode("0".charCodeAt(0) + r) + t;
                            throw new D
                        }
                    }
                    Tt.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
                    class yt extends _t {
                        constructor() {
                            super(), this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])
                        }
                        decodeMiddle(t, e, r) {
                            const n = this.decodeMiddleCounters;
                            n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                            let i = t.getSize(),
                                o = e[1];
                            for (let e = 0; e < 4 && o < i; e++) {
                                let e = _t.decodeDigit(t, n, o, _t.L_PATTERNS);
                                r += String.fromCharCode("0".charCodeAt(0) + e);
                                for (let t of n) o += t
                            }
                            o = _t.findGuardPattern(t, o, !0, _t.MIDDLE_PATTERN, new Int32Array(_t.MIDDLE_PATTERN.length).fill(0))[1];
                            for (let e = 0; e < 4 && o < i; e++) {
                                let e = _t.decodeDigit(t, n, o, _t.L_PATTERNS);
                                r += String.fromCharCode("0".charCodeAt(0) + e);
                                for (let t of n) o += t
                            }
                            return {
                                rowOffset: o,
                                resultString: r
                            }
                        }
                        getBarcodeFormat() {
                            return U.EAN_8
                        }
                    }
                    class Nt extends _t {
                        constructor() {
                            super(...arguments), this.ean13Reader = new Tt
                        }
                        getBarcodeFormat() {
                            return U.UPC_A
                        }
                        decode(t, e) {
                            return this.maybeReturnResult(this.ean13Reader.decode(t))
                        }
                        decodeRow(t, e, r) {
                            return this.maybeReturnResult(this.ean13Reader.decodeRow(t, e, r))
                        }
                        decodeMiddle(t, e, r) {
                            return this.ean13Reader.decodeMiddle(t, e, r)
                        }
                        maybeReturnResult(t) {
                            let e = t.getText();
                            if ("0" === e.charAt(0)) {
                                let r = new x(e.substring(1), null, null, t.getResultPoints(), U.UPC_A);
                                return null != t.getResultMetadata() && r.putAllMetadata(t.getResultMetadata()), r
                            }
                            throw new D
                        }
                        reset() {
                            this.ean13Reader.reset()
                        }
                    }
                    class Dt extends _t {
                        constructor() {
                            super(), this.decodeMiddleCounters = new Int32Array(4)
                        }
                        decodeMiddle(t, e, r) {
                            const n = this.decodeMiddleCounters.map((t => t));
                            n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                            const i = t.getSize();
                            let o = e[1],
                                s = 0;
                            for (let e = 0; e < 6 && o < i; e++) {
                                const i = Dt.decodeDigit(t, n, o, Dt.L_AND_G_PATTERNS);
                                r += String.fromCharCode("0".charCodeAt(0) + i % 10);
                                for (let t of n) o += t;
                                i >= 10 && (s |= 1 << 5 - e)
                            }
                            return {
                                rowOffset: o,
                                resultString: Dt.determineNumSysAndCheckDigit(r, s)
                            }
                        }
                        decodeEnd(t, e) {
                            return Dt.findGuardPatternWithoutCounters(t, e, !0, Dt.MIDDLE_END_PATTERN)
                        }
                        checkChecksum(t) {
                            return _t.checkChecksum(Dt.convertUPCEtoUPCA(t))
                        }
                        static determineNumSysAndCheckDigit(t, e) {
                            for (let r = 0; r <= 1; r++)
                                for (let n = 0; n < 10; n++)
                                    if (e === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[r][n]) return String.fromCharCode("0".charCodeAt(0) + r) + t + String.fromCharCode("0".charCodeAt(0) + n);
                            throw D.getNotFoundInstance()
                        }
                        getBarcodeFormat() {
                            return U.UPC_E
                        }
                        static convertUPCEtoUPCA(t) {
                            const e = t.slice(1, 7).split("").map((t => t.charCodeAt(0))),
                                r = new y;
                            r.append(t.charAt(0));
                            let n = e[5];
                            switch (n) {
                                case 0:
                                case 1:
                                case 2:
                                    r.appendChars(e, 0, 2), r.append(n), r.append("0000"), r.appendChars(e, 2, 3);
                                    break;
                                case 3:
                                    r.appendChars(e, 0, 3), r.append("00000"), r.appendChars(e, 3, 2);
                                    break;
                                case 4:
                                    r.appendChars(e, 0, 4), r.append("00000"), r.append(e[4]);
                                    break;
                                default:
                                    r.appendChars(e, 0, 5), r.append("0000"), r.append(n)
                            }
                            return t.length >= 8 && r.append(t.charAt(7)), r.toString()
                        }
                    }
                    Dt.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), Dt.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]), Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 26])];
                    class Mt extends wt {
                        constructor(t) {
                            super();
                            let r = null == t ? null : t.get(C.POSSIBLE_FORMATS),
                                n = [];
                            e(r) ? (n.push(new Tt), n.push(new Nt), n.push(new yt), n.push(new Dt)) : (r.indexOf(U.EAN_13) > -1 && n.push(new Tt), r.indexOf(U.UPC_A) > -1 && n.push(new Nt), r.indexOf(U.EAN_8) > -1 && n.push(new yt), r.indexOf(U.UPC_E) > -1 && n.push(new Dt)), this.readers = n
                        }
                        decodeRow(t, e, r) {
                            for (let n of this.readers) try {
                                const i = n.decodeRow(t, e, r),
                                    o = i.getBarcodeFormat() === U.EAN_13 && "0" === i.getText().charAt(0),
                                    s = null == r ? null : r.get(C.POSSIBLE_FORMATS),
                                    a = null == s || s.includes(U.UPC_A);
                                if (o && a) {
                                    const t = i.getRawBytes(),
                                        e = new x(i.getText().substring(1), t, t ? t.length : null, i.getResultPoints(), U.UPC_A);
                                    return e.putAllMetadata(i.getResultMetadata()), e
                                }
                                return i
                            } catch (t) {}
                            throw new D
                        }
                        reset() {
                            for (let t of this.readers) t.reset()
                        }
                    }
                    class Rt extends wt {
                        constructor() {
                            super(), this.decodeFinderCounters = new Int32Array(4), this.dataCharacterCounters = new Int32Array(8), this.oddRoundingErrors = new Array(4), this.evenRoundingErrors = new Array(4), this.oddCounts = new Array(this.dataCharacterCounters.length / 2), this.evenCounts = new Array(this.dataCharacterCounters.length / 2)
                        }
                        getDecodeFinderCounters() {
                            return this.decodeFinderCounters
                        }
                        getDataCharacterCounters() {
                            return this.dataCharacterCounters
                        }
                        getOddRoundingErrors() {
                            return this.oddRoundingErrors
                        }
                        getEvenRoundingErrors() {
                            return this.evenRoundingErrors
                        }
                        getOddCounts() {
                            return this.oddCounts
                        }
                        getEvenCounts() {
                            return this.evenCounts
                        }
                        parseFinderValue(t, e) {
                            for (let r = 0; r < e.length; r++)
                                if (wt.patternMatchVariance(t, e[r], Rt.MAX_INDIVIDUAL_VARIANCE) < Rt.MAX_AVG_VARIANCE) return r;
                            throw new D
                        }
                        static count(t) {
                            return rt.sum(new Int32Array(t))
                        }
                        static increment(t, e) {
                            let r = 0,
                                n = e[0];
                            for (let i = 1; i < t.length; i++) e[i] > n && (n = e[i], r = i);
                            t[r]++
                        }
                        static decrement(t, e) {
                            let r = 0,
                                n = e[0];
                            for (let i = 1; i < t.length; i++) e[i] < n && (n = e[i], r = i);
                            t[r]--
                        }
                        static isFinderPattern(t) {
                            let e = t[0] + t[1],
                                r = e / (e + t[2] + t[3]);
                            if (r >= Rt.MIN_FINDER_PATTERN_RATIO && r <= Rt.MAX_FINDER_PATTERN_RATIO) {
                                let e = Number.MAX_SAFE_INTEGER,
                                    r = Number.MIN_SAFE_INTEGER;
                                for (let n of t) n > r && (r = n), n < e && (e = n);
                                return r < 10 * e
                            }
                            return !1
                        }
                    }
                    Rt.MAX_AVG_VARIANCE = .2, Rt.MAX_INDIVIDUAL_VARIANCE = .45, Rt.MIN_FINDER_PATTERN_RATIO = 9.5 / 12, Rt.MAX_FINDER_PATTERN_RATIO = 12.5 / 14;
                    class Ot {
                        constructor(t, e) {
                            this.value = t, this.checksumPortion = e
                        }
                        getValue() {
                            return this.value
                        }
                        getChecksumPortion() {
                            return this.checksumPortion
                        }
                        toString() {
                            return this.value + "(" + this.checksumPortion + ")"
                        }
                        equals(t) {
                            if (!(t instanceof Ot)) return !1;
                            const e = t;
                            return this.value === e.value && this.checksumPortion === e.checksumPortion
                        }
                        hashCode() {
                            return this.value ^ this.checksumPortion
                        }
                    }
                    class bt {
                        constructor(t, e, r, n, i) {
                            this.value = t, this.startEnd = e, this.value = t, this.startEnd = e, this.resultPoints = new Array, this.resultPoints.push(new it(r, i)), this.resultPoints.push(new it(n, i))
                        }
                        getValue() {
                            return this.value
                        }
                        getStartEnd() {
                            return this.startEnd
                        }
                        getResultPoints() {
                            return this.resultPoints
                        }
                        equals(t) {
                            if (!(t instanceof bt)) return !1;
                            const e = t;
                            return this.value === e.value
                        }
                        hashCode() {
                            return this.value
                        }
                    }
                    class Bt {
                        constructor() {}
                        static getRSSvalue(t, e, r) {
                            let n = 0;
                            for (let e of t) n += e;
                            let i = 0,
                                o = 0,
                                s = t.length;
                            for (let a = 0; a < s - 1; a++) {
                                let c;
                                for (c = 1, o |= 1 << a; c < t[a]; c++, o &= ~(1 << a)) {
                                    let t = Bt.combins(n - c - 1, s - a - 2);
                                    if (r && 0 === o && n - c - (s - a - 1) >= s - a - 1 && (t -= Bt.combins(n - c - (s - a), s - a - 2)), s - a - 1 > 1) {
                                        let r = 0;
                                        for (let t = n - c - (s - a - 2); t > e; t--) r += Bt.combins(n - c - t - 1, s - a - 3);
                                        t -= r * (s - 1 - a)
                                    } else n - c > e && t--;
                                    i += t
                                }
                                n -= c
                            }
                            return i
                        }
                        static combins(t, e) {
                            let r, n;
                            t - e > e ? (n = e, r = t - e) : (n = t - e, r = e);
                            let i = 1,
                                o = 1;
                            for (let e = t; e > r; e--) i *= e, o <= n && (i /= o, o++);
                            for (; o <= n;) i /= o, o++;
                            return i
                        }
                    }
                    class Lt {
                        static buildBitArray(t) {
                            let e = 2 * t.length - 1;
                            null == t[t.length - 1].getRightChar() && (e -= 1);
                            let r = new p(12 * e),
                                n = 0,
                                i = t[0].getRightChar().getValue();
                            for (let t = 11; t >= 0; --t) 0 != (i & 1 << t) && r.set(n), n++;
                            for (let e = 1; e < t.length; ++e) {
                                let i = t[e],
                                    o = i.getLeftChar().getValue();
                                for (let t = 11; t >= 0; --t) 0 != (o & 1 << t) && r.set(n), n++;
                                if (null != i.getRightChar()) {
                                    let t = i.getRightChar().getValue();
                                    for (let e = 11; e >= 0; --e) 0 != (t & 1 << e) && r.set(n), n++
                                }
                            }
                            return r
                        }
                    }
                    class Pt {
                        constructor(t, e) {
                            e ? this.decodedInformation = null : (this.finished = t, this.decodedInformation = e)
                        }
                        getDecodedInformation() {
                            return this.decodedInformation
                        }
                        isFinished() {
                            return this.finished
                        }
                    }
                    class vt {
                        constructor(t) {
                            this.newPosition = t
                        }
                        getNewPosition() {
                            return this.newPosition
                        }
                    }
                    class Ft extends vt {
                        constructor(t, e) {
                            super(t), this.value = e
                        }
                        getValue() {
                            return this.value
                        }
                        isFNC1() {
                            return this.value === Ft.FNC1
                        }
                    }
                    Ft.FNC1 = "$";
                    class xt extends vt {
                        constructor(t, e, r) {
                            super(t), r ? (this.remaining = !0, this.remainingValue = this.remainingValue) : (this.remaining = !1, this.remainingValue = 0), this.newString = e
                        }
                        getNewString() {
                            return this.newString
                        }
                        isRemaining() {
                            return this.remaining
                        }
                        getRemainingValue() {
                            return this.remainingValue
                        }
                    }
                    class kt extends vt {
                        constructor(t, e, r) {
                            if (super(t), e < 0 || e > 10 || r < 0 || r > 10) throw new E;
                            this.firstDigit = e, this.secondDigit = r
                        }
                        getFirstDigit() {
                            return this.firstDigit
                        }
                        getSecondDigit() {
                            return this.secondDigit
                        }
                        getValue() {
                            return 10 * this.firstDigit + this.secondDigit
                        }
                        isFirstDigitFNC1() {
                            return this.firstDigit === kt.FNC1
                        }
                        isSecondDigitFNC1() {
                            return this.secondDigit === kt.FNC1
                        }
                        isAnyFNC1() {
                            return this.firstDigit === kt.FNC1 || this.secondDigit === kt.FNC1
                        }
                    }
                    kt.FNC1 = 10;
                    class Ut {
                        constructor() {}
                        static parseFieldsInGeneralPurpose(t) {
                            if (!t) return null;
                            if (t.length < 2) throw new D;
                            let e = t.substring(0, 2);
                            for (let r of Ut.TWO_DIGIT_DATA_LENGTH)
                                if (r[0] === e) return r[1] === Ut.VARIABLE_LENGTH ? Ut.processVariableAI(2, r[2], t) : Ut.processFixedAI(2, r[1], t);
                            if (t.length < 3) throw new D;
                            let r = t.substring(0, 3);
                            for (let e of Ut.THREE_DIGIT_DATA_LENGTH)
                                if (e[0] === r) return e[1] === Ut.VARIABLE_LENGTH ? Ut.processVariableAI(3, e[2], t) : Ut.processFixedAI(3, e[1], t);
                            for (let e of Ut.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH)
                                if (e[0] === r) return e[1] === Ut.VARIABLE_LENGTH ? Ut.processVariableAI(4, e[2], t) : Ut.processFixedAI(4, e[1], t);
                            if (t.length < 4) throw new D;
                            let n = t.substring(0, 4);
                            for (let e of Ut.FOUR_DIGIT_DATA_LENGTH)
                                if (e[0] === n) return e[1] === Ut.VARIABLE_LENGTH ? Ut.processVariableAI(4, e[2], t) : Ut.processFixedAI(4, e[1], t);
                            throw new D
                        }
                        static processFixedAI(t, e, r) {
                            if (r.length < t) throw new D;
                            let n = r.substring(0, t);
                            if (r.length < t + e) throw new D;
                            let i = r.substring(t, t + e),
                                o = r.substring(t + e),
                                s = "(" + n + ")" + i,
                                a = Ut.parseFieldsInGeneralPurpose(o);
                            return null == a ? s : s + a
                        }
                        static processVariableAI(t, e, r) {
                            let n, i = r.substring(0, t);
                            n = r.length < t + e ? r.length : t + e;
                            let o = r.substring(t, n),
                                s = r.substring(n),
                                a = "(" + i + ")" + o,
                                c = Ut.parseFieldsInGeneralPurpose(s);
                            return null == c ? a : a + c
                        }
                    }
                    Ut.VARIABLE_LENGTH = [], Ut.TWO_DIGIT_DATA_LENGTH = [
                        ["00", 18],
                        ["01", 14],
                        ["02", 14],
                        ["10", Ut.VARIABLE_LENGTH, 20],
                        ["11", 6],
                        ["12", 6],
                        ["13", 6],
                        ["15", 6],
                        ["17", 6],
                        ["20", 2],
                        ["21", Ut.VARIABLE_LENGTH, 20],
                        ["22", Ut.VARIABLE_LENGTH, 29],
                        ["30", Ut.VARIABLE_LENGTH, 8],
                        ["37", Ut.VARIABLE_LENGTH, 8],
                        ["90", Ut.VARIABLE_LENGTH, 30],
                        ["91", Ut.VARIABLE_LENGTH, 30],
                        ["92", Ut.VARIABLE_LENGTH, 30],
                        ["93", Ut.VARIABLE_LENGTH, 30],
                        ["94", Ut.VARIABLE_LENGTH, 30],
                        ["95", Ut.VARIABLE_LENGTH, 30],
                        ["96", Ut.VARIABLE_LENGTH, 30],
                        ["97", Ut.VARIABLE_LENGTH, 3],
                        ["98", Ut.VARIABLE_LENGTH, 30],
                        ["99", Ut.VARIABLE_LENGTH, 30]
                    ], Ut.THREE_DIGIT_DATA_LENGTH = [
                        ["240", Ut.VARIABLE_LENGTH, 30],
                        ["241", Ut.VARIABLE_LENGTH, 30],
                        ["242", Ut.VARIABLE_LENGTH, 6],
                        ["250", Ut.VARIABLE_LENGTH, 30],
                        ["251", Ut.VARIABLE_LENGTH, 30],
                        ["253", Ut.VARIABLE_LENGTH, 17],
                        ["254", Ut.VARIABLE_LENGTH, 20],
                        ["400", Ut.VARIABLE_LENGTH, 30],
                        ["401", Ut.VARIABLE_LENGTH, 30],
                        ["402", 17],
                        ["403", Ut.VARIABLE_LENGTH, 30],
                        ["410", 13],
                        ["411", 13],
                        ["412", 13],
                        ["413", 13],
                        ["414", 13],
                        ["420", Ut.VARIABLE_LENGTH, 20],
                        ["421", Ut.VARIABLE_LENGTH, 15],
                        ["422", 3],
                        ["423", Ut.VARIABLE_LENGTH, 15],
                        ["424", 3],
                        ["425", 3],
                        ["426", 3]
                    ], Ut.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
                        ["310", 6],
                        ["311", 6],
                        ["312", 6],
                        ["313", 6],
                        ["314", 6],
                        ["315", 6],
                        ["316", 6],
                        ["320", 6],
                        ["321", 6],
                        ["322", 6],
                        ["323", 6],
                        ["324", 6],
                        ["325", 6],
                        ["326", 6],
                        ["327", 6],
                        ["328", 6],
                        ["329", 6],
                        ["330", 6],
                        ["331", 6],
                        ["332", 6],
                        ["333", 6],
                        ["334", 6],
                        ["335", 6],
                        ["336", 6],
                        ["340", 6],
                        ["341", 6],
                        ["342", 6],
                        ["343", 6],
                        ["344", 6],
                        ["345", 6],
                        ["346", 6],
                        ["347", 6],
                        ["348", 6],
                        ["349", 6],
                        ["350", 6],
                        ["351", 6],
                        ["352", 6],
                        ["353", 6],
                        ["354", 6],
                        ["355", 6],
                        ["356", 6],
                        ["357", 6],
                        ["360", 6],
                        ["361", 6],
                        ["362", 6],
                        ["363", 6],
                        ["364", 6],
                        ["365", 6],
                        ["366", 6],
                        ["367", 6],
                        ["368", 6],
                        ["369", 6],
                        ["390", Ut.VARIABLE_LENGTH, 15],
                        ["391", Ut.VARIABLE_LENGTH, 18],
                        ["392", Ut.VARIABLE_LENGTH, 15],
                        ["393", Ut.VARIABLE_LENGTH, 18],
                        ["703", Ut.VARIABLE_LENGTH, 30]
                    ], Ut.FOUR_DIGIT_DATA_LENGTH = [
                        ["7001", 13],
                        ["7002", Ut.VARIABLE_LENGTH, 30],
                        ["7003", 10],
                        ["8001", 14],
                        ["8002", Ut.VARIABLE_LENGTH, 20],
                        ["8003", Ut.VARIABLE_LENGTH, 30],
                        ["8004", Ut.VARIABLE_LENGTH, 30],
                        ["8005", 6],
                        ["8006", 18],
                        ["8007", Ut.VARIABLE_LENGTH, 30],
                        ["8008", Ut.VARIABLE_LENGTH, 12],
                        ["8018", 18],
                        ["8020", Ut.VARIABLE_LENGTH, 25],
                        ["8100", 6],
                        ["8101", 10],
                        ["8102", 2],
                        ["8110", Ut.VARIABLE_LENGTH, 70],
                        ["8200", Ut.VARIABLE_LENGTH, 70]
                    ];
                    class Ht {
                        constructor(t) {
                            this.buffer = new y, this.information = t
                        }
                        decodeAllCodes(t, e) {
                            let r = e,
                                n = null;
                            for (;;) {
                                let e = this.decodeGeneralPurposeField(r, n),
                                    i = Ut.parseFieldsInGeneralPurpose(e.getNewString());
                                if (null != i && t.append(i), n = e.isRemaining() ? "" + e.getRemainingValue() : null, r === e.getNewPosition()) break;
                                r = e.getNewPosition()
                            }
                            return t.toString()
                        }
                        isStillNumeric(t) {
                            if (t + 7 > this.information.getSize()) return t + 4 <= this.information.getSize();
                            for (let e = t; e < t + 3; ++e)
                                if (this.information.get(e)) return !0;
                            return this.information.get(t + 3)
                        }
                        decodeNumeric(t) {
                            if (t + 7 > this.information.getSize()) {
                                let e = this.extractNumericValueFromBitArray(t, 4);
                                return new kt(this.information.getSize(), 0 === e ? kt.FNC1 : e - 1, kt.FNC1)
                            }
                            let e = this.extractNumericValueFromBitArray(t, 7);
                            return new kt(t + 7, (e - 8) / 11, (e - 8) % 11)
                        }
                        extractNumericValueFromBitArray(t, e) {
                            return Ht.extractNumericValueFromBitArray(this.information, t, e)
                        }
                        static extractNumericValueFromBitArray(t, e, r) {
                            let n = 0;
                            for (let i = 0; i < r; ++i) t.get(e + i) && (n |= 1 << r - i - 1);
                            return n
                        }
                        decodeGeneralPurposeField(t, e) {
                            this.buffer.setLengthToZero(), null != e && this.buffer.append(e), this.current.setPosition(t);
                            let r = this.parseBlocks();
                            return null != r && r.isRemaining() ? new xt(this.current.getPosition(), this.buffer.toString(), r.getRemainingValue()) : new xt(this.current.getPosition(), this.buffer.toString())
                        }
                        parseBlocks() {
                            let t, e;
                            do {
                                let r = this.current.getPosition();
                                if (this.current.isAlpha() ? (e = this.parseAlphaBlock(), t = e.isFinished()) : this.current.isIsoIec646() ? (e = this.parseIsoIec646Block(), t = e.isFinished()) : (e = this.parseNumericBlock(), t = e.isFinished()), r === this.current.getPosition() && !t) break
                            } while (!t);
                            return e.getDecodedInformation()
                        }
                        parseNumericBlock() {
                            for (; this.isStillNumeric(this.current.getPosition());) {
                                let t = this.decodeNumeric(this.current.getPosition());
                                if (this.current.setPosition(t.getNewPosition()), t.isFirstDigitFNC1()) {
                                    let e;
                                    return e = t.isSecondDigitFNC1() ? new xt(this.current.getPosition(), this.buffer.toString()) : new xt(this.current.getPosition(), this.buffer.toString(), t.getSecondDigit()), new Pt(!0, e)
                                }
                                if (this.buffer.append(t.getFirstDigit()), t.isSecondDigitFNC1()) {
                                    let t = new xt(this.current.getPosition(), this.buffer.toString());
                                    return new Pt(!0, t)
                                }
                                this.buffer.append(t.getSecondDigit())
                            }
                            return this.isNumericToAlphaNumericLatch(this.current.getPosition()) && (this.current.setAlpha(), this.current.incrementPosition(4)), new Pt(!1)
                        }
                        parseIsoIec646Block() {
                            for (; this.isStillIsoIec646(this.current.getPosition());) {
                                let t = this.decodeIsoIec646(this.current.getPosition());
                                if (this.current.setPosition(t.getNewPosition()), t.isFNC1()) {
                                    let t = new xt(this.current.getPosition(), this.buffer.toString());
                                    return new Pt(!0, t)
                                }
                                this.buffer.append(t.getValue())
                            }
                            return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setAlpha()), new Pt(!1)
                        }
                        parseAlphaBlock() {
                            for (; this.isStillAlpha(this.current.getPosition());) {
                                let t = this.decodeAlphanumeric(this.current.getPosition());
                                if (this.current.setPosition(t.getNewPosition()), t.isFNC1()) {
                                    let t = new xt(this.current.getPosition(), this.buffer.toString());
                                    return new Pt(!0, t)
                                }
                                this.buffer.append(t.getValue())
                            }
                            return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setIsoIec646()), new Pt(!1)
                        }
                        isStillIsoIec646(t) {
                            if (t + 5 > this.information.getSize()) return !1;
                            let e = this.extractNumericValueFromBitArray(t, 5);
                            if (e >= 5 && e < 16) return !0;
                            if (t + 7 > this.information.getSize()) return !1;
                            let r = this.extractNumericValueFromBitArray(t, 7);
                            if (r >= 64 && r < 116) return !0;
                            if (t + 8 > this.information.getSize()) return !1;
                            let n = this.extractNumericValueFromBitArray(t, 8);
                            return n >= 232 && n < 253
                        }
                        decodeIsoIec646(t) {
                            let e = this.extractNumericValueFromBitArray(t, 5);
                            if (15 === e) return new Ft(t + 5, Ft.FNC1);
                            if (e >= 5 && e < 15) return new Ft(t + 5, "0" + (e - 5));
                            let r, n = this.extractNumericValueFromBitArray(t, 7);
                            if (n >= 64 && n < 90) return new Ft(t + 7, "" + (n + 1));
                            if (n >= 90 && n < 116) return new Ft(t + 7, "" + (n + 7));
                            switch (this.extractNumericValueFromBitArray(t, 8)) {
                                case 232:
                                    r = "!";
                                    break;
                                case 233:
                                    r = '"';
                                    break;
                                case 234:
                                    r = "%";
                                    break;
                                case 235:
                                    r = "&";
                                    break;
                                case 236:
                                    r = "'";
                                    break;
                                case 237:
                                    r = "(";
                                    break;
                                case 238:
                                    r = ")";
                                    break;
                                case 239:
                                    r = "*";
                                    break;
                                case 240:
                                    r = "+";
                                    break;
                                case 241:
                                    r = ",";
                                    break;
                                case 242:
                                    r = "-";
                                    break;
                                case 243:
                                    r = ".";
                                    break;
                                case 244:
                                    r = "/";
                                    break;
                                case 245:
                                    r = ":";
                                    break;
                                case 246:
                                    r = ";";
                                    break;
                                case 247:
                                    r = "<";
                                    break;
                                case 248:
                                    r = "=";
                                    break;
                                case 249:
                                    r = ">";
                                    break;
                                case 250:
                                    r = "?";
                                    break;
                                case 251:
                                    r = "_";
                                    break;
                                case 252:
                                    r = " ";
                                    break;
                                default:
                                    throw new E
                            }
                            return new Ft(t + 8, r)
                        }
                        isStillAlpha(t) {
                            if (t + 5 > this.information.getSize()) return !1;
                            let e = this.extractNumericValueFromBitArray(t, 5);
                            if (e >= 5 && e < 16) return !0;
                            if (t + 6 > this.information.getSize()) return !1;
                            let r = this.extractNumericValueFromBitArray(t, 6);
                            return r >= 16 && r < 63
                        }
                        decodeAlphanumeric(t) {
                            let e = this.extractNumericValueFromBitArray(t, 5);
                            if (15 === e) return new Ft(t + 5, Ft.FNC1);
                            if (e >= 5 && e < 15) return new Ft(t + 5, "0" + (e - 5));
                            let r, n = this.extractNumericValueFromBitArray(t, 6);
                            if (n >= 32 && n < 58) return new Ft(t + 6, "" + (n + 33));
                            switch (n) {
                                case 58:
                                    r = "*";
                                    break;
                                case 59:
                                    r = ",";
                                    break;
                                case 60:
                                    r = "-";
                                    break;
                                case 61:
                                    r = ".";
                                    break;
                                case 62:
                                    r = "/";
                                    break;
                                default:
                                    throw new $("Decoding invalid alphanumeric value: " + n)
                            }
                            return new Ft(t + 6, r)
                        }
                        isAlphaTo646ToAlphaLatch(t) {
                            if (t + 1 > this.information.getSize()) return !1;
                            for (let e = 0; e < 5 && e + t < this.information.getSize(); ++e)
                                if (2 === e) {
                                    if (!this.information.get(t + 2)) return !1
                                } else if (this.information.get(t + e)) return !1;
                            return !0
                        }
                        isAlphaOr646ToNumericLatch(t) {
                            if (t + 3 > this.information.getSize()) return !1;
                            for (let e = t; e < t + 3; ++e)
                                if (this.information.get(e)) return !1;
                            return !0
                        }
                        isNumericToAlphaNumericLatch(t) {
                            if (t + 1 > this.information.getSize()) return !1;
                            for (let e = 0; e < 4 && e + t < this.information.getSize(); ++e)
                                if (this.information.get(t + e)) return !1;
                            return !0
                        }
                    }
                    class Vt {
                        constructor(t) {
                            this.information = t, this.generalDecoder = new Ht(t)
                        }
                        getInformation() {
                            return this.information
                        }
                        getGeneralDecoder() {
                            return this.generalDecoder
                        }
                    }
                    class zt extends Vt {
                        constructor(t) {
                            super(t)
                        }
                        encodeCompressedGtin(t, e) {
                            t.append("(01)");
                            let r = t.length();
                            t.append("9"), this.encodeCompressedGtinWithoutAI(t, e, r)
                        }
                        encodeCompressedGtinWithoutAI(t, e, r) {
                            for (let r = 0; r < 4; ++r) {
                                let n = this.getGeneralDecoder().extractNumericValueFromBitArray(e + 10 * r, 10);
                                n / 100 == 0 && t.append("0"), n / 10 == 0 && t.append("0"), t.append(n)
                            }
                            zt.appendCheckDigit(t, r)
                        }
                        static appendCheckDigit(t, e) {
                            let r = 0;
                            for (let n = 0; n < 13; n++) {
                                let i = t.charAt(n + e).charCodeAt(0) - "0".charCodeAt(0);
                                r += 0 == (1 & n) ? 3 * i : i
                            }
                            r = 10 - r % 10, 10 === r && (r = 0), t.append(r)
                        }
                    }
                    zt.GTIN_SIZE = 40;
                    class Gt extends zt {
                        constructor(t) {
                            super(t)
                        }
                        parseInformation() {
                            let t = new y;
                            t.append("(01)");
                            let e = t.length(),
                                r = this.getGeneralDecoder().extractNumericValueFromBitArray(Gt.HEADER_SIZE, 4);
                            return t.append(r), this.encodeCompressedGtinWithoutAI(t, Gt.HEADER_SIZE + 4, e), this.getGeneralDecoder().decodeAllCodes(t, Gt.HEADER_SIZE + 44)
                        }
                    }
                    Gt.HEADER_SIZE = 4;
                    class Yt extends Vt {
                        constructor(t) {
                            super(t)
                        }
                        parseInformation() {
                            let t = new y;
                            return this.getGeneralDecoder().decodeAllCodes(t, Yt.HEADER_SIZE)
                        }
                    }
                    Yt.HEADER_SIZE = 5;
                    class Xt extends zt {
                        constructor(t) {
                            super(t)
                        }
                        encodeCompressedWeight(t, e, r) {
                            let n = this.getGeneralDecoder().extractNumericValueFromBitArray(e, r);
                            this.addWeightCode(t, n);
                            let i = this.checkWeight(n),
                                o = 1e5;
                            for (let e = 0; e < 5; ++e) i / o == 0 && t.append("0"), o /= 10;
                            t.append(i)
                        }
                    }
                    class Wt extends Xt {
                        constructor(t) {
                            super(t)
                        }
                        parseInformation() {
                            if (this.getInformation().getSize() != Wt.HEADER_SIZE + Xt.GTIN_SIZE + Wt.WEIGHT_SIZE) throw new D;
                            let t = new y;
                            return this.encodeCompressedGtin(t, Wt.HEADER_SIZE), this.encodeCompressedWeight(t, Wt.HEADER_SIZE + Xt.GTIN_SIZE, Wt.WEIGHT_SIZE), t.toString()
                        }
                    }
                    Wt.HEADER_SIZE = 5, Wt.WEIGHT_SIZE = 15;
                    class jt extends Wt {
                        constructor(t) {
                            super(t)
                        }
                        addWeightCode(t, e) {
                            t.append("(3103)")
                        }
                        checkWeight(t) {
                            return t
                        }
                    }
                    class Zt extends Wt {
                        constructor(t) {
                            super(t)
                        }
                        addWeightCode(t, e) {
                            e < 1e4 ? t.append("(3202)") : t.append("(3203)")
                        }
                        checkWeight(t) {
                            return t < 1e4 ? t : t - 1e4
                        }
                    }
                    class Qt extends zt {
                        constructor(t) {
                            super(t)
                        }
                        parseInformation() {
                            if (this.getInformation().getSize() < Qt.HEADER_SIZE + zt.GTIN_SIZE) throw new D;
                            let t = new y;
                            this.encodeCompressedGtin(t, Qt.HEADER_SIZE);
                            let e = this.getGeneralDecoder().extractNumericValueFromBitArray(Qt.HEADER_SIZE + zt.GTIN_SIZE, Qt.LAST_DIGIT_SIZE);
                            t.append("(392"), t.append(e), t.append(")");
                            let r = this.getGeneralDecoder().decodeGeneralPurposeField(Qt.HEADER_SIZE + zt.GTIN_SIZE + Qt.LAST_DIGIT_SIZE, null);
                            return t.append(r.getNewString()), t.toString()
                        }
                    }
                    Qt.HEADER_SIZE = 8, Qt.LAST_DIGIT_SIZE = 2;
                    class Kt extends zt {
                        constructor(t) {
                            super(t)
                        }
                        parseInformation() {
                            if (this.getInformation().getSize() < Kt.HEADER_SIZE + zt.GTIN_SIZE) throw new D;
                            let t = new y;
                            this.encodeCompressedGtin(t, Kt.HEADER_SIZE);
                            let e = this.getGeneralDecoder().extractNumericValueFromBitArray(Kt.HEADER_SIZE + zt.GTIN_SIZE, Kt.LAST_DIGIT_SIZE);
                            t.append("(393"), t.append(e), t.append(")");
                            let r = this.getGeneralDecoder().extractNumericValueFromBitArray(Kt.HEADER_SIZE + zt.GTIN_SIZE + Kt.LAST_DIGIT_SIZE, Kt.FIRST_THREE_DIGITS_SIZE);
                            r / 100 == 0 && t.append("0"), r / 10 == 0 && t.append("0"), t.append(r);
                            let n = this.getGeneralDecoder().decodeGeneralPurposeField(Kt.HEADER_SIZE + zt.GTIN_SIZE + Kt.LAST_DIGIT_SIZE + Kt.FIRST_THREE_DIGITS_SIZE, null);
                            return t.append(n.getNewString()), t.toString()
                        }
                    }
                    Kt.HEADER_SIZE = 8, Kt.LAST_DIGIT_SIZE = 2, Kt.FIRST_THREE_DIGITS_SIZE = 10;
                    class qt extends Xt {
                        constructor(t, e, r) {
                            super(t), this.dateCode = r, this.firstAIdigits = e
                        }
                        parseInformation() {
                            if (this.getInformation().getSize() != qt.HEADER_SIZE + qt.GTIN_SIZE + qt.WEIGHT_SIZE + qt.DATE_SIZE) throw new D;
                            let t = new y;
                            return this.encodeCompressedGtin(t, qt.HEADER_SIZE), this.encodeCompressedWeight(t, qt.HEADER_SIZE + qt.GTIN_SIZE, qt.WEIGHT_SIZE), this.encodeCompressedDate(t, qt.HEADER_SIZE + qt.GTIN_SIZE + qt.WEIGHT_SIZE), t.toString()
                        }
                        encodeCompressedDate(t, e) {
                            let r = this.getGeneralDecoder().extractNumericValueFromBitArray(e, qt.DATE_SIZE);
                            if (38400 == r) return;
                            t.append("("), t.append(this.dateCode), t.append(")");
                            let n = r % 32;
                            r /= 32;
                            let i = r % 12 + 1;
                            r /= 12;
                            let o = r;
                            o / 10 == 0 && t.append("0"), t.append(o), i / 10 == 0 && t.append("0"), t.append(i), n / 10 == 0 && t.append("0"), t.append(n)
                        }
                        addWeightCode(t, e) {
                            t.append("("), t.append(this.firstAIdigits), t.append(e / 1e5), t.append(")")
                        }
                        checkWeight(t) {
                            return t % 1e5
                        }
                    }

                    function Jt(t) {
                        try {
                            if (t.get(1)) return new Gt(t);
                            if (!t.get(2)) return new Yt(t);
                            switch (Ht.extractNumericValueFromBitArray(t, 1, 4)) {
                                case 4:
                                    return new jt(t);
                                case 5:
                                    return new Zt(t)
                            }
                            switch (Ht.extractNumericValueFromBitArray(t, 1, 5)) {
                                case 12:
                                    return new Qt(t);
                                case 13:
                                    return new Kt(t)
                            }
                            switch (Ht.extractNumericValueFromBitArray(t, 1, 7)) {
                                case 56:
                                    return new qt(t, "310", "11");
                                case 57:
                                    return new qt(t, "320", "11");
                                case 58:
                                    return new qt(t, "310", "13");
                                case 59:
                                    return new qt(t, "320", "13");
                                case 60:
                                    return new qt(t, "310", "15");
                                case 61:
                                    return new qt(t, "320", "15");
                                case 62:
                                    return new qt(t, "310", "17");
                                case 63:
                                    return new qt(t, "320", "17")
                            }
                        } catch (e) {
                            throw console.log(e), new $("unknown decoder: " + t)
                        }
                    }
                    qt.HEADER_SIZE = 8, qt.WEIGHT_SIZE = 20, qt.DATE_SIZE = 16;
                    class $t {
                        constructor(t, e, r, n) {
                            this.leftchar = t, this.rightchar = e, this.finderpattern = r, this.maybeLast = n
                        }
                        mayBeLast() {
                            return this.maybeLast
                        }
                        getLeftChar() {
                            return this.leftchar
                        }
                        getRightChar() {
                            return this.rightchar
                        }
                        getFinderPattern() {
                            return this.finderpattern
                        }
                        mustBeLast() {
                            return null == this.rightchar
                        }
                        toString() {
                            return "[ " + this.leftchar + ", " + this.rightchar + " : " + (null == this.finderpattern ? "null" : this.finderpattern.getValue()) + " ]"
                        }
                        static equals(t, e) {
                            return t instanceof $t && $t.equalsOrNull(t.leftchar, e.leftchar) && $t.equalsOrNull(t.rightchar, e.rightchar) && $t.equalsOrNull(t.finderpattern, e.finderpattern)
                        }
                        static equalsOrNull(t, e) {
                            return null === t ? null === e : $t.equals(t, e)
                        }
                        hashCode() {
                            return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue()
                        }
                    }
                    class te {
                        constructor(t, e, r) {
                            this.pairs = t, this.rowNumber = e, this.wasReversed = r
                        }
                        getPairs() {
                            return this.pairs
                        }
                        getRowNumber() {
                            return this.rowNumber
                        }
                        isReversed() {
                            return this.wasReversed
                        }
                        isEquivalent(t) {
                            return this.checkEqualitity(this, t)
                        }
                        toString() {
                            return "{ " + this.pairs + " }"
                        }
                        equals(t, e) {
                            return t instanceof te && this.checkEqualitity(t, e) && t.wasReversed === e.wasReversed
                        }
                        checkEqualitity(t, e) {
                            if (!t || !e) return;
                            let r;
                            return t.forEach(((t, n) => {
                                e.forEach((e => {
                                    t.getLeftChar().getValue() === e.getLeftChar().getValue() && t.getRightChar().getValue() === e.getRightChar().getValue() && t.getFinderPatter().getValue() === e.getFinderPatter().getValue() && (r = !0)
                                }))
                            })), r
                        }
                    }
                    class ee extends Rt {
                        constructor(t) {
                            super(...arguments), this.pairs = new Array(ee.MAX_PAIRS), this.rows = new Array, this.startEnd = [2], this.verbose = !0 === t
                        }
                        decodeRow(t, e, r) {
                            this.pairs.length = 0, this.startFromEven = !1;
                            try {
                                return ee.constructResult(this.decodeRow2pairs(t, e))
                            } catch (t) {
                                this.verbose && console.log(t)
                            }
                            return this.pairs.length = 0, this.startFromEven = !0, ee.constructResult(this.decodeRow2pairs(t, e))
                        }
                        reset() {
                            this.pairs.length = 0, this.rows.length = 0
                        }
                        decodeRow2pairs(t, e) {
                            let r, n = !1;
                            for (; !n;) try {
                                this.pairs.push(this.retrieveNextPair(e, this.pairs, t))
                            } catch (t) {
                                if (t instanceof D) {
                                    if (!this.pairs.length) throw new D;
                                    n = !0
                                }
                            }
                            if (this.checkChecksum()) return this.pairs;
                            if (r = !!this.rows.length, this.storeRow(t, !1), r) {
                                let t = this.checkRowsBoolean(!1);
                                if (null != t) return t;
                                if (t = this.checkRowsBoolean(!0), null != t) return t
                            }
                            throw new D
                        }
                        checkRowsBoolean(t) {
                            if (this.rows.length > 25) return this.rows.length = 0, null;
                            this.pairs.length = 0, t && (this.rows = this.rows.reverse());
                            let e = null;
                            try {
                                e = this.checkRows(new Array, 0)
                            } catch (t) {
                                this.verbose && console.log(t)
                            }
                            return t && (this.rows = this.rows.reverse()), e
                        }
                        checkRows(t, e) {
                            for (let r = e; r < this.rows.length; r++) {
                                let e = this.rows[r];
                                this.pairs.length = 0;
                                for (let e of t) this.pairs.push(e.getPairs());
                                if (this.pairs.push(e.getPairs()), !ee.isValidSequence(this.pairs)) continue;
                                if (this.checkChecksum()) return this.pairs;
                                let n = new Array(t);
                                n.push(e);
                                try {
                                    return this.checkRows(n, r + 1)
                                } catch (t) {
                                    this.verbose && console.log(t)
                                }
                            }
                            throw new D
                        }
                        static isValidSequence(t) {
                            for (let e of ee.FINDER_PATTERN_SEQUENCES) {
                                if (t.length > e.length) continue;
                                let r = !0;
                                for (let n = 0; n < t.length; n++)
                                    if (t[n].getFinderPattern().getValue() != e[n]) {
                                        r = !1;
                                        break
                                    } if (r) return !0
                            }
                            return !1
                        }
                        storeRow(t, e) {
                            let r = 0,
                                n = !1,
                                i = !1;
                            for (; r < this.rows.length;) {
                                let e = this.rows[r];
                                if (e.getRowNumber() > t) {
                                    i = e.isEquivalent(this.pairs);
                                    break
                                }
                                n = e.isEquivalent(this.pairs), r++
                            }
                            i || n || ee.isPartialRow(this.pairs, this.rows) || (this.rows.push(r, new te(this.pairs, t, e)), this.removePartialRows(this.pairs, this.rows))
                        }
                        removePartialRows(t, e) {
                            for (let r of e)
                                if (r.getPairs().length !== t.length)
                                    for (let e of r.getPairs())
                                        for (let r of t)
                                            if ($t.equals(e, r)) break
                        }
                        static isPartialRow(t, e) {
                            for (let r of e) {
                                let e = !0;
                                for (let n of t) {
                                    let t = !1;
                                    for (let e of r.getPairs())
                                        if (n.equals(e)) {
                                            t = !0;
                                            break
                                        } if (!t) {
                                        e = !1;
                                        break
                                    }
                                }
                                if (e) return !0
                            }
                            return !1
                        }
                        getRows() {
                            return this.rows
                        }
                        static constructResult(t) {
                            let e = Jt(Lt.buildBitArray(t)).parseInformation(),
                                r = t[0].getFinderPattern().getResultPoints(),
                                n = t[t.length - 1].getFinderPattern().getResultPoints(),
                                i = [r[0], r[1], n[0], n[1]];
                            return new x(e, null, null, i, U.RSS_EXPANDED, null)
                        }
                        checkChecksum() {
                            let t = this.pairs.get(0),
                                e = t.getLeftChar(),
                                r = t.getRightChar();
                            if (null == r) return !1;
                            let n = r.getChecksumPortion(),
                                i = 2;
                            for (let t = 1; t < this.pairs.size(); ++t) {
                                let e = this.pairs.get(t);
                                n += e.getLeftChar().getChecksumPortion(), i++;
                                let r = e.getRightChar();
                                null != r && (n += r.getChecksumPortion(), i++)
                            }
                            return n %= 211, 211 * (i - 4) + n == e.getValue()
                        }
                        static getNextSecondBar(t, e) {
                            let r;
                            return t.get(e) ? (r = t.getNextUnset(e), r = t.getNextSet(r)) : (r = t.getNextSet(e), r = t.getNextUnset(r)), r
                        }
                        retrieveNextPair(t, e, r) {
                            let n, i = e.length % 2 == 0;
                            this.startFromEven && (i = !i);
                            let o = !0,
                                s = -1;
                            do {
                                this.findNextPair(t, e, s), n = this.parseFoundFinderPattern(t, r, i), null == n ? s = ee.getNextSecondBar(t, this.startEnd[0]) : o = !1
                            } while (o);
                            let a, c = this.decodeDataCharacter(t, n, i, !0);
                            if (!this.isEmptyPair(e) && e[e.length - 1].mustBeLast()) throw new D;
                            try {
                                a = this.decodeDataCharacter(t, n, i, !1)
                            } catch (t) {
                                a = null, this.verbose && console.log(t)
                            }
                            return new $t(c, a, n, !0)
                        }
                        isEmptyPair(t) {
                            return 0 === t.length
                        }
                        findNextPair(t, e, r) {
                            let n = this.getDecodeFinderCounters();
                            n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
                            let i, o = t.getSize();
                            i = r >= 0 ? r : this.isEmptyPair(e) ? 0 : e[e.length - 1].getFinderPattern().getStartEnd()[1];
                            let s = e.length % 2 != 0;
                            this.startFromEven && (s = !s);
                            let a = !1;
                            for (; i < o && (a = !t.get(i), a);) i++;
                            let c = 0,
                                l = i;
                            for (let e = i; e < o; e++)
                                if (t.get(e) != a) n[c]++;
                                else {
                                    if (3 == c) {
                                        if (s && ee.reverseCounters(n), ee.isFinderPattern(n)) return this.startEnd[0] = l, void(this.startEnd[1] = e);
                                        s && ee.reverseCounters(n), l += n[0] + n[1], n[0] = n[2], n[1] = n[3], n[2] = 0, n[3] = 0, c--
                                    } else c++;
                                    n[c] = 1, a = !a
                                } throw new D
                        }
                        static reverseCounters(t) {
                            let e = t.length;
                            for (let r = 0; r < e / 2; ++r) {
                                let n = t[r];
                                t[r] = t[e - r - 1], t[e - r - 1] = n
                            }
                        }
                        parseFoundFinderPattern(t, e, r) {
                            let n, i, o;
                            if (r) {
                                let e = this.startEnd[0] - 1;
                                for (; e >= 0 && !t.get(e);) e--;
                                e++, n = this.startEnd[0] - e, i = e, o = this.startEnd[1]
                            } else i = this.startEnd[0], o = t.getNextUnset(this.startEnd[1] + 1), n = o - this.startEnd[1];
                            let s, a = this.getDecodeFinderCounters();
                            d.arraycopy(a, 0, a, 1, a.length - 1), a[0] = n;
                            try {
                                s = this.parseFinderValue(a, ee.FINDER_PATTERNS)
                            } catch (t) {
                                return null
                            }
                            return new bt(s, [i, o], i, o, e)
                        }
                        decodeDataCharacter(t, e, r, n) {
                            let i = this.getDataCharacterCounters();
                            for (let t = 0; t < i.length; t++) i[t] = 0;
                            if (n) ee.recordPatternInReverse(t, e.getStartEnd()[0], i);
                            else {
                                ee.recordPattern(t, e.getStartEnd()[1], i);
                                for (let t = 0, e = i.length - 1; t < e; t++, e--) {
                                    let r = i[t];
                                    i[t] = i[e], i[e] = r
                                }
                            }
                            let o = rt.sum(new Int32Array(i)) / 17,
                                s = (e.getStartEnd()[1] - e.getStartEnd()[0]) / 15;
                            if (Math.abs(o - s) / s > .3) throw new D;
                            let a = this.getOddCounts(),
                                c = this.getEvenCounts(),
                                l = this.getOddRoundingErrors(),
                                h = this.getEvenRoundingErrors();
                            for (let t = 0; t < i.length; t++) {
                                let e = 1 * i[t] / o,
                                    r = e + .5;
                                if (r < 1) {
                                    if (e < .3) throw new D;
                                    r = 1
                                } else if (r > 8) {
                                    if (e > 8.7) throw new D;
                                    r = 8
                                }
                                let n = t / 2;
                                0 == (1 & t) ? (a[n] = r, l[n] = e - r) : (c[n] = r, h[n] = e - r)
                            }
                            this.adjustOddEvenCounts(17);
                            let u = 4 * e.getValue() + (r ? 0 : 2) + (n ? 0 : 1) - 1,
                                d = 0,
                                f = 0;
                            for (let t = a.length - 1; t >= 0; t--) {
                                if (ee.isNotA1left(e, r, n)) {
                                    let e = ee.WEIGHTS[u][2 * t];
                                    f += a[t] * e
                                }
                                d += a[t]
                            }
                            let g = 0;
                            for (let t = c.length - 1; t >= 0; t--)
                                if (ee.isNotA1left(e, r, n)) {
                                    let e = ee.WEIGHTS[u][2 * t + 1];
                                    g += c[t] * e
                                } let w = f + g;
                            if (0 != (1 & d) || d > 13 || d < 4) throw new D;
                            let m = (13 - d) / 2,
                                p = ee.SYMBOL_WIDEST[m],
                                A = 9 - p,
                                C = Bt.getRSSvalue(a, p, !0),
                                E = Bt.getRSSvalue(c, A, !1),
                                I = ee.EVEN_TOTAL_SUBSET[m],
                                S = ee.GSUM[m];
                            return new Ot(C * I + E + S, w)
                        }
                        static isNotA1left(t, e, r) {
                            return !(0 == t.getValue() && e && r)
                        }
                        adjustOddEvenCounts(t) {
                            let e = rt.sum(new Int32Array(this.getOddCounts())),
                                r = rt.sum(new Int32Array(this.getEvenCounts())),
                                n = !1,
                                i = !1;
                            e > 13 ? i = !0 : e < 4 && (n = !0);
                            let o = !1,
                                s = !1;
                            r > 13 ? s = !0 : r < 4 && (o = !0);
                            let a = e + r - t,
                                c = 1 == (1 & e),
                                l = 0 == (1 & r);
                            if (1 == a)
                                if (c) {
                                    if (l) throw new D;
                                    i = !0
                                } else {
                                    if (!l) throw new D;
                                    s = !0
                                }
                            else if (-1 == a)
                                if (c) {
                                    if (l) throw new D;
                                    n = !0
                                } else {
                                    if (!l) throw new D;
                                    o = !0
                                }
                            else {
                                if (0 != a) throw new D;
                                if (c) {
                                    if (!l) throw new D;
                                    e < r ? (n = !0, s = !0) : (i = !0, o = !0)
                                } else if (l) throw new D
                            }
                            if (n) {
                                if (i) throw new D;
                                ee.increment(this.getOddCounts(), this.getOddRoundingErrors())
                            }
                            if (i && ee.decrement(this.getOddCounts(), this.getOddRoundingErrors()), o) {
                                if (s) throw new D;
                                ee.increment(this.getEvenCounts(), this.getOddRoundingErrors())
                            }
                            s && ee.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
                        }
                    }
                    ee.SYMBOL_WIDEST = [7, 5, 4, 3, 1], ee.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204], ee.GSUM = [0, 348, 1388, 2948, 3988], ee.FINDER_PATTERNS = [Int32Array.from([1, 8, 4, 1]), Int32Array.from([3, 6, 4, 1]), Int32Array.from([3, 4, 6, 1]), Int32Array.from([3, 2, 8, 1]), Int32Array.from([2, 6, 5, 1]), Int32Array.from([2, 2, 9, 1])], ee.WEIGHTS = [
                        [1, 3, 9, 27, 81, 32, 96, 77],
                        [20, 60, 180, 118, 143, 7, 21, 63],
                        [189, 145, 13, 39, 117, 140, 209, 205],
                        [193, 157, 49, 147, 19, 57, 171, 91],
                        [62, 186, 136, 197, 169, 85, 44, 132],
                        [185, 133, 188, 142, 4, 12, 36, 108],
                        [113, 128, 173, 97, 80, 29, 87, 50],
                        [150, 28, 84, 41, 123, 158, 52, 156],
                        [46, 138, 203, 187, 139, 206, 196, 166],
                        [76, 17, 51, 153, 37, 111, 122, 155],
                        [43, 129, 176, 106, 107, 110, 119, 146],
                        [16, 48, 144, 10, 30, 90, 59, 177],
                        [109, 116, 137, 200, 178, 112, 125, 164],
                        [70, 210, 208, 202, 184, 130, 179, 115],
                        [134, 191, 151, 31, 93, 68, 204, 190],
                        [148, 22, 66, 198, 172, 94, 71, 2],
                        [6, 18, 54, 162, 64, 192, 154, 40],
                        [120, 149, 25, 75, 14, 42, 126, 167],
                        [79, 26, 78, 23, 69, 207, 199, 175],
                        [103, 98, 83, 38, 114, 131, 182, 124],
                        [161, 61, 183, 127, 170, 88, 53, 159],
                        [55, 165, 73, 8, 24, 72, 5, 15],
                        [45, 135, 194, 160, 58, 174, 100, 89]
                    ], ee.FINDER_PAT_A = 0, ee.FINDER_PAT_B = 1, ee.FINDER_PAT_C = 2, ee.FINDER_PAT_D = 3, ee.FINDER_PAT_E = 4, ee.FINDER_PAT_F = 5, ee.FINDER_PATTERN_SEQUENCES = [
                        [ee.FINDER_PAT_A, ee.FINDER_PAT_A],
                        [ee.FINDER_PAT_A, ee.FINDER_PAT_B, ee.FINDER_PAT_B],
                        [ee.FINDER_PAT_A, ee.FINDER_PAT_C, ee.FINDER_PAT_B, ee.FINDER_PAT_D],
                        [ee.FINDER_PAT_A, ee.FINDER_PAT_E, ee.FINDER_PAT_B, ee.FINDER_PAT_D, ee.FINDER_PAT_C],
                        [ee.FINDER_PAT_A, ee.FINDER_PAT_E, ee.FINDER_PAT_B, ee.FINDER_PAT_D, ee.FINDER_PAT_D, ee.FINDER_PAT_F],
                        [ee.FINDER_PAT_A, ee.FINDER_PAT_E, ee.FINDER_PAT_B, ee.FINDER_PAT_D, ee.FINDER_PAT_E, ee.FINDER_PAT_F, ee.FINDER_PAT_F],
                        [ee.FINDER_PAT_A, ee.FINDER_PAT_A, ee.FINDER_PAT_B, ee.FINDER_PAT_B, ee.FINDER_PAT_C, ee.FINDER_PAT_C, ee.FINDER_PAT_D, ee.FINDER_PAT_D],
                        [ee.FINDER_PAT_A, ee.FINDER_PAT_A, ee.FINDER_PAT_B, ee.FINDER_PAT_B, ee.FINDER_PAT_C, ee.FINDER_PAT_C, ee.FINDER_PAT_D, ee.FINDER_PAT_E, ee.FINDER_PAT_E],
                        [ee.FINDER_PAT_A, ee.FINDER_PAT_A, ee.FINDER_PAT_B, ee.FINDER_PAT_B, ee.FINDER_PAT_C, ee.FINDER_PAT_C, ee.FINDER_PAT_D, ee.FINDER_PAT_E, ee.FINDER_PAT_F, ee.FINDER_PAT_F],
                        [ee.FINDER_PAT_A, ee.FINDER_PAT_A, ee.FINDER_PAT_B, ee.FINDER_PAT_B, ee.FINDER_PAT_C, ee.FINDER_PAT_D, ee.FINDER_PAT_D, ee.FINDER_PAT_E, ee.FINDER_PAT_E, ee.FINDER_PAT_F, ee.FINDER_PAT_F]
                    ], ee.MAX_PAIRS = 11;
                    class re extends Ot {
                        constructor(t, e, r) {
                            super(t, e), this.count = 0, this.finderPattern = r
                        }
                        getFinderPattern() {
                            return this.finderPattern
                        }
                        getCount() {
                            return this.count
                        }
                        incrementCount() {
                            this.count++
                        }
                    }
                    class ne extends Rt {
                        constructor() {
                            super(...arguments), this.possibleLeftPairs = [], this.possibleRightPairs = []
                        }
                        decodeRow(t, e, r) {
                            const n = this.decodePair(e, !1, t, r);
                            ne.addOrTally(this.possibleLeftPairs, n), e.reverse();
                            let i = this.decodePair(e, !0, t, r);
                            ne.addOrTally(this.possibleRightPairs, i), e.reverse();
                            for (let t of this.possibleLeftPairs)
                                if (t.getCount() > 1)
                                    for (let e of this.possibleRightPairs)
                                        if (e.getCount() > 1 && ne.checkChecksum(t, e)) return ne.constructResult(t, e);
                            throw new D
                        }
                        static addOrTally(t, e) {
                            if (null == e) return;
                            let r = !1;
                            for (let n of t)
                                if (n.getValue() === e.getValue()) {
                                    n.incrementCount(), r = !0;
                                    break
                                } r || t.push(e)
                        }
                        reset() {
                            this.possibleLeftPairs.length = 0, this.possibleRightPairs.length = 0
                        }
                        static constructResult(t, e) {
                            let r = 4537077 * t.getValue() + e.getValue(),
                                n = new String(r).toString(),
                                i = new y;
                            for (let t = 13 - n.length; t > 0; t--) i.append("0");
                            i.append(n);
                            let o = 0;
                            for (let t = 0; t < 13; t++) {
                                let e = i.charAt(t).charCodeAt(0) - "0".charCodeAt(0);
                                o += 0 == (1 & t) ? 3 * e : e
                            }
                            o = 10 - o % 10, 10 === o && (o = 0), i.append(o.toString());
                            let s = t.getFinderPattern().getResultPoints(),
                                a = e.getFinderPattern().getResultPoints();
                            return new x(i.toString(), null, 0, [s[0], s[1], a[0], a[1]], U.RSS_14, (new Date).getTime())
                        }
                        static checkChecksum(t, e) {
                            let r = (t.getChecksumPortion() + 16 * e.getChecksumPortion()) % 79,
                                n = 9 * t.getFinderPattern().getValue() + e.getFinderPattern().getValue();
                            return n > 72 && n--, n > 8 && n--, r === n
                        }
                        decodePair(t, e, r, n) {
                            try {
                                let i = this.findFinderPattern(t, e),
                                    o = this.parseFoundFinderPattern(t, r, e, i),
                                    s = null == n ? null : n.get(C.NEED_RESULT_POINT_CALLBACK);
                                if (null != s) {
                                    let n = (i[0] + i[1]) / 2;
                                    e && (n = t.getSize() - 1 - n), s.foundPossibleResultPoint(new it(n, r))
                                }
                                let a = this.decodeDataCharacter(t, o, !0),
                                    c = this.decodeDataCharacter(t, o, !1);
                                return new re(1597 * a.getValue() + c.getValue(), a.getChecksumPortion() + 4 * c.getChecksumPortion(), o)
                            } catch (t) {
                                return null
                            }
                        }
                        decodeDataCharacter(t, e, r) {
                            let n = this.getDataCharacterCounters();
                            for (let t = 0; t < n.length; t++) n[t] = 0;
                            if (r) wt.recordPatternInReverse(t, e.getStartEnd()[0], n);
                            else {
                                wt.recordPattern(t, e.getStartEnd()[1] + 1, n);
                                for (let t = 0, e = n.length - 1; t < e; t++, e--) {
                                    let r = n[t];
                                    n[t] = n[e], n[e] = r
                                }
                            }
                            let i = r ? 16 : 15,
                                o = rt.sum(new Int32Array(n)) / i,
                                s = this.getOddCounts(),
                                a = this.getEvenCounts(),
                                c = this.getOddRoundingErrors(),
                                l = this.getEvenRoundingErrors();
                            for (let t = 0; t < n.length; t++) {
                                let e = n[t] / o,
                                    r = Math.floor(e + .5);
                                r < 1 ? r = 1 : r > 8 && (r = 8);
                                let i = Math.floor(t / 2);
                                0 == (1 & t) ? (s[i] = r, c[i] = e - r) : (a[i] = r, l[i] = e - r)
                            }
                            this.adjustOddEvenCounts(r, i);
                            let h = 0,
                                u = 0;
                            for (let t = s.length - 1; t >= 0; t--) u *= 9, u += s[t], h += s[t];
                            let d = 0,
                                f = 0;
                            for (let t = a.length - 1; t >= 0; t--) d *= 9, d += a[t], f += a[t];
                            let g = u + 3 * d;
                            if (r) {
                                if (0 != (1 & h) || h > 12 || h < 4) throw new D;
                                let t = (12 - h) / 2,
                                    e = ne.OUTSIDE_ODD_WIDEST[t],
                                    r = 9 - e,
                                    n = Bt.getRSSvalue(s, e, !1),
                                    i = Bt.getRSSvalue(a, r, !0),
                                    o = ne.OUTSIDE_EVEN_TOTAL_SUBSET[t],
                                    c = ne.OUTSIDE_GSUM[t];
                                return new Ot(n * o + i + c, g)
                            } {
                                if (0 != (1 & f) || f > 10 || f < 4) throw new D;
                                let t = (10 - f) / 2,
                                    e = ne.INSIDE_ODD_WIDEST[t],
                                    r = 9 - e,
                                    n = Bt.getRSSvalue(s, e, !0),
                                    i = Bt.getRSSvalue(a, r, !1),
                                    o = ne.INSIDE_ODD_TOTAL_SUBSET[t],
                                    c = ne.INSIDE_GSUM[t];
                                return new Ot(i * o + n + c, g)
                            }
                        }
                        findFinderPattern(t, e) {
                            let r = this.getDecodeFinderCounters();
                            r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 0;
                            let n = t.getSize(),
                                i = !1,
                                o = 0;
                            for (; o < n && (i = !t.get(o), e !== i);) o++;
                            let s = 0,
                                a = o;
                            for (let e = o; e < n; e++)
                                if (t.get(e) !== i) r[s]++;
                                else {
                                    if (3 === s) {
                                        if (Rt.isFinderPattern(r)) return [a, e];
                                        a += r[0] + r[1], r[0] = r[2], r[1] = r[3], r[2] = 0, r[3] = 0, s--
                                    } else s++;
                                    r[s] = 1, i = !i
                                } throw new D
                        }
                        parseFoundFinderPattern(t, e, r, n) {
                            let i = t.get(n[0]),
                                o = n[0] - 1;
                            for (; o >= 0 && i !== t.get(o);) o--;
                            o++;
                            const s = n[0] - o,
                                a = this.getDecodeFinderCounters(),
                                c = new Int32Array(a.length);
                            d.arraycopy(a, 0, c, 1, a.length - 1), c[0] = s;
                            const l = this.parseFinderValue(c, ne.FINDER_PATTERNS);
                            let h = o,
                                u = n[1];
                            return r && (h = t.getSize() - 1 - h, u = t.getSize() - 1 - u), new bt(l, [o, n[1]], h, u, e)
                        }
                        adjustOddEvenCounts(t, e) {
                            let r = rt.sum(new Int32Array(this.getOddCounts())),
                                n = rt.sum(new Int32Array(this.getEvenCounts())),
                                i = !1,
                                o = !1,
                                s = !1,
                                a = !1;
                            t ? (r > 12 ? o = !0 : r < 4 && (i = !0), n > 12 ? a = !0 : n < 4 && (s = !0)) : (r > 11 ? o = !0 : r < 5 && (i = !0), n > 10 ? a = !0 : n < 4 && (s = !0));
                            let c = r + n - e,
                                l = (1 & r) == (t ? 1 : 0),
                                h = 1 == (1 & n);
                            if (1 === c)
                                if (l) {
                                    if (h) throw new D;
                                    o = !0
                                } else {
                                    if (!h) throw new D;
                                    a = !0
                                }
                            else if (-1 === c)
                                if (l) {
                                    if (h) throw new D;
                                    i = !0
                                } else {
                                    if (!h) throw new D;
                                    s = !0
                                }
                            else {
                                if (0 !== c) throw new D;
                                if (l) {
                                    if (!h) throw new D;
                                    r < n ? (i = !0, a = !0) : (o = !0, s = !0)
                                } else if (h) throw new D
                            }
                            if (i) {
                                if (o) throw new D;
                                Rt.increment(this.getOddCounts(), this.getOddRoundingErrors())
                            }
                            if (o && Rt.decrement(this.getOddCounts(), this.getOddRoundingErrors()), s) {
                                if (a) throw new D;
                                Rt.increment(this.getEvenCounts(), this.getOddRoundingErrors())
                            }
                            a && Rt.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
                        }
                    }
                    ne.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126], ne.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81], ne.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715], ne.INSIDE_GSUM = [0, 336, 1036, 1516], ne.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1], ne.INSIDE_ODD_WIDEST = [2, 4, 6, 8], ne.FINDER_PATTERNS = [Int32Array.from([3, 8, 2, 1]), Int32Array.from([3, 5, 5, 1]), Int32Array.from([3, 3, 7, 1]), Int32Array.from([3, 1, 9, 1]), Int32Array.from([2, 7, 4, 1]), Int32Array.from([2, 5, 6, 1]), Int32Array.from([2, 3, 8, 1]), Int32Array.from([1, 5, 7, 1]), Int32Array.from([1, 3, 9, 1])];
                    class ie extends wt {
                        constructor(t, e) {
                            super(), this.readers = [], this.verbose = !0 === e;
                            const r = t ? t.get(C.POSSIBLE_FORMATS) : null,
                                n = t && void 0 !== t.get(C.ASSUME_CODE_39_CHECK_DIGIT);
                            r ? ((r.includes(U.EAN_13) || r.includes(U.UPC_A) || r.includes(U.EAN_8) || r.includes(U.UPC_E)) && this.readers.push(new Mt(t)), r.includes(U.CODE_39) && this.readers.push(new pt(n)), r.includes(U.CODE_128) && this.readers.push(new mt), r.includes(U.ITF) && this.readers.push(new At), r.includes(U.RSS_14) && this.readers.push(new ne), r.includes(U.RSS_EXPANDED) && this.readers.push(new ee(this.verbose))) : (this.readers.push(new Mt(t)), this.readers.push(new pt), this.readers.push(new Mt(t)), this.readers.push(new mt), this.readers.push(new At), this.readers.push(new ne), this.readers.push(new ee(this.verbose)))
                        }
                        decodeRow(t, e, r) {
                            for (let n = 0; n < this.readers.length; n++) try {
                                return this.readers[n].decodeRow(t, e, r)
                            } catch (t) {}
                            throw new D
                        }
                        reset() {
                            this.readers.forEach((t => t.reset()))
                        }
                    }
                    class oe {
                        constructor(t, e, r) {
                            this.ecCodewords = t, this.ecBlocks = [e], r && this.ecBlocks.push(r)
                        }
                        getECCodewords() {
                            return this.ecCodewords
                        }
                        getECBlocks() {
                            return this.ecBlocks
                        }
                    }
                    class se {
                        constructor(t, e) {
                            this.count = t, this.dataCodewords = e
                        }
                        getCount() {
                            return this.count
                        }
                        getDataCodewords() {
                            return this.dataCodewords
                        }
                    }
                    class ae {
                        constructor(t, e, r, n, i, o) {
                            this.versionNumber = t, this.symbolSizeRows = e, this.symbolSizeColumns = r, this.dataRegionSizeRows = n, this.dataRegionSizeColumns = i, this.ecBlocks = o;
                            let s = 0;
                            const a = o.getECCodewords(),
                                c = o.getECBlocks();
                            for (let t of c) s += t.getCount() * (t.getDataCodewords() + a);
                            this.totalCodewords = s
                        }
                        getVersionNumber() {
                            return this.versionNumber
                        }
                        getSymbolSizeRows() {
                            return this.symbolSizeRows
                        }
                        getSymbolSizeColumns() {
                            return this.symbolSizeColumns
                        }
                        getDataRegionSizeRows() {
                            return this.dataRegionSizeRows
                        }
                        getDataRegionSizeColumns() {
                            return this.dataRegionSizeColumns
                        }
                        getTotalCodewords() {
                            return this.totalCodewords
                        }
                        getECBlocks() {
                            return this.ecBlocks
                        }
                        static getVersionForDimensions(t, e) {
                            if (0 != (1 & t) || 0 != (1 & e)) throw new E;
                            for (let r of ae.VERSIONS)
                                if (r.symbolSizeRows === t && r.symbolSizeColumns === e) return r;
                            throw new E
                        }
                        toString() {
                            return "" + this.versionNumber
                        }
                        static buildVersions() {
                            return [new ae(1, 10, 10, 8, 8, new oe(5, new se(1, 3))), new ae(2, 12, 12, 10, 10, new oe(7, new se(1, 5))), new ae(3, 14, 14, 12, 12, new oe(10, new se(1, 8))), new ae(4, 16, 16, 14, 14, new oe(12, new se(1, 12))), new ae(5, 18, 18, 16, 16, new oe(14, new se(1, 18))), new ae(6, 20, 20, 18, 18, new oe(18, new se(1, 22))), new ae(7, 22, 22, 20, 20, new oe(20, new se(1, 30))), new ae(8, 24, 24, 22, 22, new oe(24, new se(1, 36))), new ae(9, 26, 26, 24, 24, new oe(28, new se(1, 44))), new ae(10, 32, 32, 14, 14, new oe(36, new se(1, 62))), new ae(11, 36, 36, 16, 16, new oe(42, new se(1, 86))), new ae(12, 40, 40, 18, 18, new oe(48, new se(1, 114))), new ae(13, 44, 44, 20, 20, new oe(56, new se(1, 144))), new ae(14, 48, 48, 22, 22, new oe(68, new se(1, 174))), new ae(15, 52, 52, 24, 24, new oe(42, new se(2, 102))), new ae(16, 64, 64, 14, 14, new oe(56, new se(2, 140))), new ae(17, 72, 72, 16, 16, new oe(36, new se(4, 92))), new ae(18, 80, 80, 18, 18, new oe(48, new se(4, 114))), new ae(19, 88, 88, 20, 20, new oe(56, new se(4, 144))), new ae(20, 96, 96, 22, 22, new oe(68, new se(4, 174))), new ae(21, 104, 104, 24, 24, new oe(56, new se(6, 136))), new ae(22, 120, 120, 18, 18, new oe(68, new se(6, 175))), new ae(23, 132, 132, 20, 20, new oe(62, new se(8, 163))), new ae(24, 144, 144, 22, 22, new oe(62, new se(8, 156), new se(2, 155))), new ae(25, 8, 18, 6, 16, new oe(7, new se(1, 5))), new ae(26, 8, 32, 6, 14, new oe(11, new se(1, 10))), new ae(27, 12, 26, 10, 24, new oe(14, new se(1, 16))), new ae(28, 12, 36, 10, 16, new oe(18, new se(1, 22))), new ae(29, 16, 36, 14, 16, new oe(24, new se(1, 32))), new ae(30, 16, 48, 14, 22, new oe(28, new se(1, 49)))]
                        }
                    }
                    ae.VERSIONS = ae.buildVersions();
                    class ce {
                        constructor(t) {
                            const e = t.getHeight();
                            if (e < 8 || e > 144 || 0 != (1 & e)) throw new E;
                            this.version = ce.readVersion(t), this.mappingBitMatrix = this.extractDataRegion(t), this.readMappingMatrix = new N(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight())
                        }
                        getVersion() {
                            return this.version
                        }
                        static readVersion(t) {
                            const e = t.getHeight(),
                                r = t.getWidth();
                            return ae.getVersionForDimensions(e, r)
                        }
                        readCodewords() {
                            const t = new Int8Array(this.version.getTotalCodewords());
                            let e = 0,
                                r = 4,
                                n = 0;
                            const i = this.mappingBitMatrix.getHeight(),
                                o = this.mappingBitMatrix.getWidth();
                            let s = !1,
                                a = !1,
                                c = !1,
                                l = !1;
                            do {
                                if (r !== i || 0 !== n || s)
                                    if (r !== i - 2 || 0 !== n || 0 == (3 & o) || a)
                                        if (r !== i + 4 || 2 !== n || 0 != (7 & o) || c)
                                            if (r !== i - 2 || 0 !== n || 4 != (7 & o) || l) {
                                                do {
                                                    r < i && n >= 0 && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, i, o)), r -= 2, n += 2
                                                } while (r >= 0 && n < o);
                                                r += 1, n += 3;
                                                do {
                                                    r >= 0 && n < o && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, i, o)), r += 2, n -= 2
                                                } while (r < i && n >= 0);
                                                r += 3, n += 1
                                            } else t[e++] = 255 & this.readCorner4(i, o), r -= 2, n += 2, l = !0;
                                else t[e++] = 255 & this.readCorner3(i, o), r -= 2, n += 2, c = !0;
                                else t[e++] = 255 & this.readCorner2(i, o), r -= 2, n += 2, a = !0;
                                else t[e++] = 255 & this.readCorner1(i, o), r -= 2, n += 2, s = !0
                            } while (r < i || n < o);
                            if (e !== this.version.getTotalCodewords()) throw new E;
                            return t
                        }
                        readModule(t, e, r, n) {
                            return t < 0 && (t += r, e += 4 - (r + 4 & 7)), e < 0 && (e += n, t += 4 - (n + 4 & 7)), this.readMappingMatrix.set(e, t), this.mappingBitMatrix.get(e, t)
                        }
                        readUtah(t, e, r, n) {
                            let i = 0;
                            return this.readModule(t - 2, e - 2, r, n) && (i |= 1), i <<= 1, this.readModule(t - 2, e - 1, r, n) && (i |= 1), i <<= 1, this.readModule(t - 1, e - 2, r, n) && (i |= 1), i <<= 1, this.readModule(t - 1, e - 1, r, n) && (i |= 1), i <<= 1, this.readModule(t - 1, e, r, n) && (i |= 1), i <<= 1, this.readModule(t, e - 2, r, n) && (i |= 1), i <<= 1, this.readModule(t, e - 1, r, n) && (i |= 1), i <<= 1, this.readModule(t, e, r, n) && (i |= 1), i
                        }
                        readCorner1(t, e) {
                            let r = 0;
                            return this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 1, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(2, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(3, e - 1, t, e) && (r |= 1), r
                        }
                        readCorner2(t, e) {
                            let r = 0;
                            return this.readModule(t - 3, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 2, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 4, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r
                        }
                        readCorner3(t, e) {
                            let r = 0;
                            return this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r
                        }
                        readCorner4(t, e) {
                            let r = 0;
                            return this.readModule(t - 3, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 2, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(2, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(3, e - 1, t, e) && (r |= 1), r
                        }
                        extractDataRegion(t) {
                            const e = this.version.getSymbolSizeRows(),
                                r = this.version.getSymbolSizeColumns();
                            if (t.getHeight() !== e) throw new c("Dimension of bitMatrix must match the version size");
                            const n = this.version.getDataRegionSizeRows(),
                                i = this.version.getDataRegionSizeColumns(),
                                o = e / n | 0,
                                s = r / i | 0,
                                a = new N(s * i, o * n);
                            for (let e = 0; e < o; ++e) {
                                const r = e * n;
                                for (let o = 0; o < s; ++o) {
                                    const s = o * i;
                                    for (let c = 0; c < n; ++c) {
                                        const l = e * (n + 2) + 1 + c,
                                            h = r + c;
                                        for (let e = 0; e < i; ++e) {
                                            const r = o * (i + 2) + 1 + e;
                                            if (t.get(r, l)) {
                                                const t = s + e;
                                                a.set(t, h)
                                            }
                                        }
                                    }
                                }
                            }
                            return a
                        }
                    }
                    class le {
                        constructor(t, e) {
                            this.numDataCodewords = t, this.codewords = e
                        }
                        static getDataBlocks(t, e) {
                            const r = e.getECBlocks();
                            let n = 0;
                            const i = r.getECBlocks();
                            for (let t of i) n += t.getCount();
                            const o = new Array(n);
                            let s = 0;
                            for (let t of i)
                                for (let e = 0; e < t.getCount(); e++) {
                                    const e = t.getDataCodewords(),
                                        n = r.getECCodewords() + e;
                                    o[s++] = new le(e, new Uint8Array(n))
                                }
                            const a = o[0].codewords.length - r.getECCodewords(),
                                l = a - 1;
                            let h = 0;
                            for (let e = 0; e < l; e++)
                                for (let r = 0; r < s; r++) o[r].codewords[e] = t[h++];
                            const u = 24 === e.getVersionNumber(),
                                d = u ? 8 : s;
                            for (let e = 0; e < d; e++) o[e].codewords[a - 1] = t[h++];
                            const f = o[0].codewords.length;
                            for (let e = a; e < f; e++)
                                for (let r = 0; r < s; r++) {
                                    const n = u ? (r + 8) % s : r,
                                        i = u && n > 7 ? e - 1 : e;
                                    o[n].codewords[i] = t[h++]
                                }
                            if (h !== t.length) throw new c;
                            return o
                        }
                        getNumDataCodewords() {
                            return this.numDataCodewords
                        }
                        getCodewords() {
                            return this.codewords
                        }
                    }
                    class he {
                        constructor(t) {
                            this.bytes = t, this.byteOffset = 0, this.bitOffset = 0
                        }
                        getBitOffset() {
                            return this.bitOffset
                        }
                        getByteOffset() {
                            return this.byteOffset
                        }
                        readBits(t) {
                            if (t < 1 || t > 32 || t > this.available()) throw new c("" + t);
                            let e = 0,
                                r = this.bitOffset,
                                n = this.byteOffset;
                            const i = this.bytes;
                            if (r > 0) {
                                const o = 8 - r,
                                    s = t < o ? t : o,
                                    a = o - s,
                                    c = 255 >> 8 - s << a;
                                e = (i[n] & c) >> a, t -= s, r += s, 8 === r && (r = 0, n++)
                            }
                            if (t > 0) {
                                for (; t >= 8;) e = e << 8 | 255 & i[n], n++, t -= 8;
                                if (t > 0) {
                                    const o = 8 - t,
                                        s = 255 >> o << o;
                                    e = e << t | (i[n] & s) >> o, r += t
                                }
                            }
                            return this.bitOffset = r, this.byteOffset = n, e
                        }
                        available() {
                            return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset
                        }
                    }! function(t) {
                        t[t.PAD_ENCODE = 0] = "PAD_ENCODE", t[t.ASCII_ENCODE = 1] = "ASCII_ENCODE", t[t.C40_ENCODE = 2] = "C40_ENCODE", t[t.TEXT_ENCODE = 3] = "TEXT_ENCODE", t[t.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE", t[t.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE", t[t.BASE256_ENCODE = 6] = "BASE256_ENCODE"
                    }(V || (V = {}));
                    class ue {
                        static decode(t) {
                            const e = new he(t),
                                r = new y,
                                n = new y,
                                i = new Array;
                            let o = V.ASCII_ENCODE;
                            do {
                                if (o === V.ASCII_ENCODE) o = this.decodeAsciiSegment(e, r, n);
                                else {
                                    switch (o) {
                                        case V.C40_ENCODE:
                                            this.decodeC40Segment(e, r);
                                            break;
                                        case V.TEXT_ENCODE:
                                            this.decodeTextSegment(e, r);
                                            break;
                                        case V.ANSIX12_ENCODE:
                                            this.decodeAnsiX12Segment(e, r);
                                            break;
                                        case V.EDIFACT_ENCODE:
                                            this.decodeEdifactSegment(e, r);
                                            break;
                                        case V.BASE256_ENCODE:
                                            this.decodeBase256Segment(e, r, i);
                                            break;
                                        default:
                                            throw new E
                                    }
                                    o = V.ASCII_ENCODE
                                }
                            } while (o !== V.PAD_ENCODE && e.available() > 0);
                            return n.length() > 0 && r.append(n.toString()), new j(t, r.toString(), 0 === i.length ? null : i, null)
                        }
                        static decodeAsciiSegment(t, e, r) {
                            let n = !1;
                            do {
                                let i = t.readBits(8);
                                if (0 === i) throw new E;
                                if (i <= 128) return n && (i += 128), e.append(String.fromCharCode(i - 1)), V.ASCII_ENCODE;
                                if (129 === i) return V.PAD_ENCODE;
                                if (i <= 229) {
                                    const t = i - 130;
                                    t < 10 && e.append("0"), e.append("" + t)
                                } else switch (i) {
                                    case 230:
                                        return V.C40_ENCODE;
                                    case 231:
                                        return V.BASE256_ENCODE;
                                    case 232:
                                        e.append(String.fromCharCode(29));
                                        break;
                                    case 233:
                                    case 234:
                                    case 241:
                                        break;
                                    case 235:
                                        n = !0;
                                        break;
                                    case 236:
                                        e.append("[)>05"), r.insert(0, "");
                                        break;
                                    case 237:
                                        e.append("[)>06"), r.insert(0, "");
                                        break;
                                    case 238:
                                        return V.ANSIX12_ENCODE;
                                    case 239:
                                        return V.TEXT_ENCODE;
                                    case 240:
                                        return V.EDIFACT_ENCODE;
                                    default:
                                        if (254 !== i || 0 !== t.available()) throw new E
                                }
                            } while (t.available() > 0);
                            return V.ASCII_ENCODE
                        }
                        static decodeC40Segment(t, e) {
                            let r = !1;
                            const n = [];
                            let i = 0;
                            do {
                                if (8 === t.available()) return;
                                const o = t.readBits(8);
                                if (254 === o) return;
                                this.parseTwoBytes(o, t.readBits(8), n);
                                for (let t = 0; t < 3; t++) {
                                    const o = n[t];
                                    switch (i) {
                                        case 0:
                                            if (o < 3) i = o + 1;
                                            else {
                                                if (!(o < this.C40_BASIC_SET_CHARS.length)) throw new E;
                                                {
                                                    const t = this.C40_BASIC_SET_CHARS[o];
                                                    r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), r = !1) : e.append(t)
                                                }
                                            }
                                            break;
                                        case 1:
                                            r ? (e.append(String.fromCharCode(o + 128)), r = !1) : e.append(String.fromCharCode(o)), i = 0;
                                            break;
                                        case 2:
                                            if (o < this.C40_SHIFT2_SET_CHARS.length) {
                                                const t = this.C40_SHIFT2_SET_CHARS[o];
                                                r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), r = !1) : e.append(t)
                                            } else switch (o) {
                                                case 27:
                                                    e.append(String.fromCharCode(29));
                                                    break;
                                                case 30:
                                                    r = !0;
                                                    break;
                                                default:
                                                    throw new E
                                            }
                                            i = 0;
                                            break;
                                        case 3:
                                            r ? (e.append(String.fromCharCode(o + 224)), r = !1) : e.append(String.fromCharCode(o + 96)), i = 0;
                                            break;
                                        default:
                                            throw new E
                                    }
                                }
                            } while (t.available() > 0)
                        }
                        static decodeTextSegment(t, e) {
                            let r = !1,
                                n = [],
                                i = 0;
                            do {
                                if (8 === t.available()) return;
                                const o = t.readBits(8);
                                if (254 === o) return;
                                this.parseTwoBytes(o, t.readBits(8), n);
                                for (let t = 0; t < 3; t++) {
                                    const o = n[t];
                                    switch (i) {
                                        case 0:
                                            if (o < 3) i = o + 1;
                                            else {
                                                if (!(o < this.TEXT_BASIC_SET_CHARS.length)) throw new E;
                                                {
                                                    const t = this.TEXT_BASIC_SET_CHARS[o];
                                                    r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), r = !1) : e.append(t)
                                                }
                                            }
                                            break;
                                        case 1:
                                            r ? (e.append(String.fromCharCode(o + 128)), r = !1) : e.append(String.fromCharCode(o)), i = 0;
                                            break;
                                        case 2:
                                            if (o < this.TEXT_SHIFT2_SET_CHARS.length) {
                                                const t = this.TEXT_SHIFT2_SET_CHARS[o];
                                                r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), r = !1) : e.append(t)
                                            } else switch (o) {
                                                case 27:
                                                    e.append(String.fromCharCode(29));
                                                    break;
                                                case 30:
                                                    r = !0;
                                                    break;
                                                default:
                                                    throw new E
                                            }
                                            i = 0;
                                            break;
                                        case 3:
                                            if (!(o < this.TEXT_SHIFT3_SET_CHARS.length)) throw new E;
                                            {
                                                const t = this.TEXT_SHIFT3_SET_CHARS[o];
                                                r ? (e.append(String.fromCharCode(t.charCodeAt(0) + 128)), r = !1) : e.append(t), i = 0
                                            }
                                            break;
                                        default:
                                            throw new E
                                    }
                                }
                            } while (t.available() > 0)
                        }
                        static decodeAnsiX12Segment(t, e) {
                            const r = [];
                            do {
                                if (8 === t.available()) return;
                                const n = t.readBits(8);
                                if (254 === n) return;
                                this.parseTwoBytes(n, t.readBits(8), r);
                                for (let t = 0; t < 3; t++) {
                                    const n = r[t];
                                    switch (n) {
                                        case 0:
                                            e.append("\r");
                                            break;
                                        case 1:
                                            e.append("*");
                                            break;
                                        case 2:
                                            e.append(">");
                                            break;
                                        case 3:
                                            e.append(" ");
                                            break;
                                        default:
                                            if (n < 14) e.append(String.fromCharCode(n + 44));
                                            else {
                                                if (!(n < 40)) throw new E;
                                                e.append(String.fromCharCode(n + 51))
                                            }
                                    }
                                }
                            } while (t.available() > 0)
                        }
                        static parseTwoBytes(t, e, r) {
                            let n = (t << 8) + e - 1,
                                i = Math.floor(n / 1600);
                            r[0] = i, n -= 1600 * i, i = Math.floor(n / 40), r[1] = i, r[2] = n - 40 * i
                        }
                        static decodeEdifactSegment(t, e) {
                            do {
                                if (t.available() <= 16) return;
                                for (let r = 0; r < 4; r++) {
                                    let r = t.readBits(6);
                                    if (31 === r) {
                                        const e = 8 - t.getBitOffset();
                                        return void(8 !== e && t.readBits(e))
                                    }
                                    0 == (32 & r) && (r |= 64), e.append(String.fromCharCode(r))
                                }
                            } while (t.available() > 0)
                        }
                        static decodeBase256Segment(t, e, r) {
                            let n = 1 + t.getByteOffset();
                            const i = this.unrandomize255State(t.readBits(8), n++);
                            let o;
                            if (o = 0 === i ? t.available() / 8 | 0 : i < 250 ? i : 250 * (i - 249) + this.unrandomize255State(t.readBits(8), n++), o < 0) throw new E;
                            const s = new Uint8Array(o);
                            for (let e = 0; e < o; e++) {
                                if (t.available() < 8) throw new E;
                                s[e] = this.unrandomize255State(t.readBits(8), n++)
                            }
                            r.push(s);
                            try {
                                e.append(_.decode(s, T.ISO88591))
                            } catch (t) {
                                throw new $("Platform does not support required encoding: " + t.message)
                            }
                        }
                        static unrandomize255State(t, e) {
                            const r = t - (149 * e % 255 + 1);
                            return r >= 0 ? r : r + 256
                        }
                    }
                    ue.C40_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], ue.C40_SHIFT2_SET_CHARS = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"], ue.TEXT_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], ue.TEXT_SHIFT2_SET_CHARS = ue.C40_SHIFT2_SET_CHARS, ue.TEXT_SHIFT3_SET_CHARS = ["`", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "{", "|", "}", "~", String.fromCharCode(127)];
                    class de {
                        constructor() {
                            this.rsDecoder = new tt(q.DATA_MATRIX_FIELD_256)
                        }
                        decode(t) {
                            const e = new ce(t),
                                r = e.getVersion(),
                                n = e.readCodewords(),
                                i = le.getDataBlocks(n, r);
                            let o = 0;
                            for (let t of i) o += t.getNumDataCodewords();
                            const s = new Uint8Array(o),
                                a = i.length;
                            for (let t = 0; t < a; t++) {
                                const e = i[t],
                                    r = e.getCodewords(),
                                    n = e.getNumDataCodewords();
                                this.correctErrors(r, n);
                                for (let e = 0; e < n; e++) s[e * a + t] = r[e]
                            }
                            return ue.decode(s)
                        }
                        correctErrors(t, e) {
                            const r = new Int32Array(t);
                            try {
                                this.rsDecoder.decode(r, t.length - e)
                            } catch (t) {
                                throw new h
                            }
                            for (let n = 0; n < e; n++) t[n] = r[n]
                        }
                    }
                    class fe {
                        constructor(t) {
                            this.image = t, this.rectangleDetector = new at(this.image)
                        }
                        detect() {
                            const t = this.rectangleDetector.detect();
                            let e = this.detectSolid1(t);
                            if (e = this.detectSolid2(e), e[3] = this.correctTopRight(e), !e[3]) throw new D;
                            e = this.shiftToModuleCenter(e);
                            const r = e[0],
                                n = e[1],
                                i = e[2],
                                o = e[3];
                            let s = this.transitionsBetween(r, o) + 1,
                                a = this.transitionsBetween(i, o) + 1;
                            1 == (1 & s) && (s += 1), 1 == (1 & a) && (a += 1), 4 * s < 7 * a && 4 * a < 7 * s && (s = a = Math.max(s, a));
                            let c = fe.sampleGrid(this.image, r, n, i, o, s, a);
                            return new ot(c, [r, n, i, o])
                        }
                        static shiftPoint(t, e, r) {
                            let n = (e.getX() - t.getX()) / (r + 1),
                                i = (e.getY() - t.getY()) / (r + 1);
                            return new it(t.getX() + n, t.getY() + i)
                        }
                        static moveAway(t, e, r) {
                            let n = t.getX(),
                                i = t.getY();
                            return n < e ? n -= 1 : n += 1, i < r ? i -= 1 : i += 1, new it(n, i)
                        }
                        detectSolid1(t) {
                            let e = t[0],
                                r = t[1],
                                n = t[3],
                                i = t[2],
                                o = this.transitionsBetween(e, r),
                                s = this.transitionsBetween(r, n),
                                a = this.transitionsBetween(n, i),
                                c = this.transitionsBetween(i, e),
                                l = o,
                                h = [i, e, r, n];
                            return l > s && (l = s, h[0] = e, h[1] = r, h[2] = n, h[3] = i), l > a && (l = a, h[0] = r, h[1] = n, h[2] = i, h[3] = e), l > c && (h[0] = n, h[1] = i, h[2] = e, h[3] = r), h
                        }
                        detectSolid2(t) {
                            let e = t[0],
                                r = t[1],
                                n = t[2],
                                i = t[3],
                                o = this.transitionsBetween(e, i),
                                s = fe.shiftPoint(r, n, 4 * (o + 1)),
                                a = fe.shiftPoint(n, r, 4 * (o + 1));
                            return this.transitionsBetween(s, e) < this.transitionsBetween(a, i) ? (t[0] = e, t[1] = r, t[2] = n, t[3] = i) : (t[0] = r, t[1] = n, t[2] = i, t[3] = e), t
                        }
                        correctTopRight(t) {
                            let e = t[0],
                                r = t[1],
                                n = t[2],
                                i = t[3],
                                o = this.transitionsBetween(e, i),
                                s = this.transitionsBetween(r, i),
                                a = fe.shiftPoint(e, r, 4 * (s + 1)),
                                c = fe.shiftPoint(n, r, 4 * (o + 1));
                            o = this.transitionsBetween(a, i), s = this.transitionsBetween(c, i);
                            let l = new it(i.getX() + (n.getX() - r.getX()) / (o + 1), i.getY() + (n.getY() - r.getY()) / (o + 1)),
                                h = new it(i.getX() + (e.getX() - r.getX()) / (s + 1), i.getY() + (e.getY() - r.getY()) / (s + 1));
                            return this.isValid(l) ? this.isValid(h) ? this.transitionsBetween(a, l) + this.transitionsBetween(c, l) > this.transitionsBetween(a, h) + this.transitionsBetween(c, h) ? l : h : l : this.isValid(h) ? h : null
                        }
                        shiftToModuleCenter(t) {
                            let e = t[0],
                                r = t[1],
                                n = t[2],
                                i = t[3],
                                o = this.transitionsBetween(e, i) + 1,
                                s = this.transitionsBetween(n, i) + 1,
                                a = fe.shiftPoint(e, r, 4 * s),
                                c = fe.shiftPoint(n, r, 4 * o);
                            o = this.transitionsBetween(a, i) + 1, s = this.transitionsBetween(c, i) + 1, 1 == (1 & o) && (o += 1), 1 == (1 & s) && (s += 1);
                            let l, h, u = (e.getX() + r.getX() + n.getX() + i.getX()) / 4,
                                d = (e.getY() + r.getY() + n.getY() + i.getY()) / 4;
                            return e = fe.moveAway(e, u, d), r = fe.moveAway(r, u, d), n = fe.moveAway(n, u, d), i = fe.moveAway(i, u, d), a = fe.shiftPoint(e, r, 4 * s), a = fe.shiftPoint(a, i, 4 * o), l = fe.shiftPoint(r, e, 4 * s), l = fe.shiftPoint(l, n, 4 * o), c = fe.shiftPoint(n, i, 4 * s), c = fe.shiftPoint(c, r, 4 * o), h = fe.shiftPoint(i, n, 4 * s), h = fe.shiftPoint(h, e, 4 * o), [a, l, c, h]
                        }
                        isValid(t) {
                            return t.getX() >= 0 && t.getX() < this.image.getWidth() && t.getY() > 0 && t.getY() < this.image.getHeight()
                        }
                        static sampleGrid(t, e, r, n, i, o, s) {
                            return ut.getInstance().sampleGrid(t, o, s, .5, .5, o - .5, .5, o - .5, s - .5, .5, s - .5, e.getX(), e.getY(), i.getX(), i.getY(), n.getX(), n.getY(), r.getX(), r.getY())
                        }
                        transitionsBetween(t, e) {
                            let r = Math.trunc(t.getX()),
                                n = Math.trunc(t.getY()),
                                i = Math.trunc(e.getX()),
                                o = Math.trunc(e.getY()),
                                s = Math.abs(o - n) > Math.abs(i - r);
                            if (s) {
                                let t = r;
                                r = n, n = t, t = i, i = o, o = t
                            }
                            let a = Math.abs(i - r),
                                c = Math.abs(o - n),
                                l = -a / 2,
                                h = n < o ? 1 : -1,
                                u = r < i ? 1 : -1,
                                d = 0,
                                f = this.image.get(s ? n : r, s ? r : n);
                            for (let t = r, e = n; t !== i; t += u) {
                                let r = this.image.get(s ? e : t, s ? t : e);
                                if (r !== f && (d++, f = r), l += c, l > 0) {
                                    if (e === o) break;
                                    e += h, l -= a
                                }
                            }
                            return d
                        }
                    }
                    class ge {
                        constructor() {
                            this.decoder = new de
                        }
                        decode(t, e = null) {
                            let r, n;
                            if (null != e && e.has(C.PURE_BARCODE)) {
                                const e = ge.extractPureBits(t.getBlackMatrix());
                                r = this.decoder.decode(e), n = ge.NO_POINTS
                            } else {
                                const e = new fe(t.getBlackMatrix()).detect();
                                r = this.decoder.decode(e.getBits()), n = e.getPoints()
                            }
                            const i = r.getRawBytes(),
                                o = new x(r.getText(), i, 8 * i.length, n, U.DATA_MATRIX, d.currentTimeMillis()),
                                s = r.getByteSegments();
                            null != s && o.putMetadata(W.BYTE_SEGMENTS, s);
                            const a = r.getECLevel();
                            return null != a && o.putMetadata(W.ERROR_CORRECTION_LEVEL, a), o
                        }
                        reset() {}
                        static extractPureBits(t) {
                            const e = t.getTopLeftOnBit(),
                                r = t.getBottomRightOnBit();
                            if (null == e || null == r) throw new D;
                            const n = this.moduleSize(e, t);
                            let i = e[1];
                            const o = r[1];
                            let s = e[0];
                            const a = (r[0] - s + 1) / n,
                                c = (o - i + 1) / n;
                            if (a <= 0 || c <= 0) throw new D;
                            const l = n / 2;
                            i += l, s += l;
                            const h = new N(a, c);
                            for (let e = 0; e < c; e++) {
                                const r = i + e * n;
                                for (let i = 0; i < a; i++) t.get(s + i * n, r) && h.set(i, e)
                            }
                            return h
                        }
                        static moduleSize(t, e) {
                            const r = e.getWidth();
                            let n = t[0];
                            const i = t[1];
                            for (; n < r && e.get(n, i);) n++;
                            if (n === r) throw new D;
                            const o = n - t[0];
                            if (0 === o) throw new D;
                            return o
                        }
                    }
                    ge.NO_POINTS = [];
                    ! function(t) {
                        t[t.L = 0] = "L", t[t.M = 1] = "M", t[t.Q = 2] = "Q", t[t.H = 3] = "H"
                    }(z || (z = {}));
                    class we {
                        constructor(t, e, r) {
                            this.value = t, this.stringValue = e, this.bits = r, we.FOR_BITS.set(r, this), we.FOR_VALUE.set(t, this)
                        }
                        getValue() {
                            return this.value
                        }
                        getBits() {
                            return this.bits
                        }
                        static fromString(t) {
                            switch (t) {
                                case "L":
                                    return we.L;
                                case "M":
                                    return we.M;
                                case "Q":
                                    return we.Q;
                                case "H":
                                    return we.H;
                                default:
                                    throw new a(t + "not available")
                            }
                        }
                        toString() {
                            return this.stringValue
                        }
                        equals(t) {
                            if (!(t instanceof we)) return !1;
                            const e = t;
                            return this.value === e.value
                        }
                        static forBits(t) {
                            if (t < 0 || t >= we.FOR_BITS.size) throw new c;
                            return we.FOR_BITS.get(t)
                        }
                    }
                    we.FOR_BITS = new Map, we.FOR_VALUE = new Map, we.L = new we(z.L, "L", 1), we.M = new we(z.M, "M", 0), we.Q = new we(z.Q, "Q", 3), we.H = new we(z.H, "H", 2);
                    class me {
                        constructor(t) {
                            this.errorCorrectionLevel = we.forBits(t >> 3 & 3), this.dataMask = 7 & t
                        }
                        static numBitsDiffering(t, e) {
                            return m.bitCount(t ^ e)
                        }
                        static decodeFormatInformation(t, e) {
                            const r = me.doDecodeFormatInformation(t, e);
                            return null !== r ? r : me.doDecodeFormatInformation(t ^ me.FORMAT_INFO_MASK_QR, e ^ me.FORMAT_INFO_MASK_QR)
                        }
                        static doDecodeFormatInformation(t, e) {
                            let r = Number.MAX_SAFE_INTEGER,
                                n = 0;
                            for (const i of me.FORMAT_INFO_DECODE_LOOKUP) {
                                const o = i[0];
                                if (o === t || o === e) return new me(i[1]);
                                let s = me.numBitsDiffering(t, o);
                                s < r && (n = i[1], r = s), t !== e && (s = me.numBitsDiffering(e, o), s < r && (n = i[1], r = s))
                            }
                            return r <= 3 ? new me(n) : null
                        }
                        getErrorCorrectionLevel() {
                            return this.errorCorrectionLevel
                        }
                        getDataMask() {
                            return this.dataMask
                        }
                        hashCode() {
                            return this.errorCorrectionLevel.getBits() << 3 | this.dataMask
                        }
                        equals(t) {
                            if (!(t instanceof me)) return !1;
                            const e = t;
                            return this.errorCorrectionLevel === e.errorCorrectionLevel && this.dataMask === e.dataMask
                        }
                    }
                    me.FORMAT_INFO_MASK_QR = 21522, me.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]), Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]), Int32Array.from([16590, 5]), Int32Array.from([20375, 6]), Int32Array.from([19104, 7]), Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]), Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]), Int32Array.from([27713, 14]), Int32Array.from([26998, 15]), Int32Array.from([5769, 16]), Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]), Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]), Int32Array.from([2107, 23]), Int32Array.from([13663, 24]), Int32Array.from([12392, 25]), Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]), Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])];
                    class pe {
                        constructor(t, ...e) {
                            this.ecCodewordsPerBlock = t, this.ecBlocks = e
                        }
                        getECCodewordsPerBlock() {
                            return this.ecCodewordsPerBlock
                        }
                        getNumBlocks() {
                            let t = 0;
                            const e = this.ecBlocks;
                            for (const r of e) t += r.getCount();
                            return t
                        }
                        getTotalECCodewords() {
                            return this.ecCodewordsPerBlock * this.getNumBlocks()
                        }
                        getECBlocks() {
                            return this.ecBlocks
                        }
                    }
                    class Ae {
                        constructor(t, e) {
                            this.count = t, this.dataCodewords = e
                        }
                        getCount() {
                            return this.count
                        }
                        getDataCodewords() {
                            return this.dataCodewords
                        }
                    }
                    class Ce {
                        constructor(t, e, ...r) {
                            this.versionNumber = t, this.alignmentPatternCenters = e, this.ecBlocks = r;
                            let n = 0;
                            const i = r[0].getECCodewordsPerBlock(),
                                o = r[0].getECBlocks();
                            for (const t of o) n += t.getCount() * (t.getDataCodewords() + i);
                            this.totalCodewords = n
                        }
                        getVersionNumber() {
                            return this.versionNumber
                        }
                        getAlignmentPatternCenters() {
                            return this.alignmentPatternCenters
                        }
                        getTotalCodewords() {
                            return this.totalCodewords
                        }
                        getDimensionForVersion() {
                            return 17 + 4 * this.versionNumber
                        }
                        getECBlocksForLevel(t) {
                            return this.ecBlocks[t.getValue()]
                        }
                        static getProvisionalVersionForDimension(t) {
                            if (t % 4 != 1) throw new E;
                            try {
                                return this.getVersionForNumber((t - 17) / 4)
                            } catch (t) {
                                throw new E
                            }
                        }
                        static getVersionForNumber(t) {
                            if (t < 1 || t > 40) throw new c;
                            return Ce.VERSIONS[t - 1]
                        }
                        static decodeVersionInformation(t) {
                            let e = Number.MAX_SAFE_INTEGER,
                                r = 0;
                            for (let n = 0; n < Ce.VERSION_DECODE_INFO.length; n++) {
                                const i = Ce.VERSION_DECODE_INFO[n];
                                if (i === t) return Ce.getVersionForNumber(n + 7);
                                const o = me.numBitsDiffering(t, i);
                                o < e && (r = n + 7, e = o)
                            }
                            return e <= 3 ? Ce.getVersionForNumber(r) : null
                        }
                        buildFunctionPattern() {
                            const t = this.getDimensionForVersion(),
                                e = new N(t);
                            e.setRegion(0, 0, 9, 9), e.setRegion(t - 8, 0, 8, 9), e.setRegion(0, t - 8, 9, 8);
                            const r = this.alignmentPatternCenters.length;
                            for (let t = 0; t < r; t++) {
                                const n = this.alignmentPatternCenters[t] - 2;
                                for (let i = 0; i < r; i++) 0 === t && (0 === i || i === r - 1) || t === r - 1 && 0 === i || e.setRegion(this.alignmentPatternCenters[i] - 2, n, 5, 5)
                            }
                            return e.setRegion(6, 9, 1, t - 17), e.setRegion(9, 6, t - 17, 1), this.versionNumber > 6 && (e.setRegion(t - 11, 0, 3, 6), e.setRegion(0, t - 11, 6, 3)), e
                        }
                        toString() {
                            return "" + this.versionNumber
                        }
                    }
                    Ce.VERSION_DECODE_INFO = Int32Array.from([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017]), Ce.VERSIONS = [new Ce(1, new Int32Array(0), new pe(7, new Ae(1, 19)), new pe(10, new Ae(1, 16)), new pe(13, new Ae(1, 13)), new pe(17, new Ae(1, 9))), new Ce(2, Int32Array.from([6, 18]), new pe(10, new Ae(1, 34)), new pe(16, new Ae(1, 28)), new pe(22, new Ae(1, 22)), new pe(28, new Ae(1, 16))), new Ce(3, Int32Array.from([6, 22]), new pe(15, new Ae(1, 55)), new pe(26, new Ae(1, 44)), new pe(18, new Ae(2, 17)), new pe(22, new Ae(2, 13))), new Ce(4, Int32Array.from([6, 26]), new pe(20, new Ae(1, 80)), new pe(18, new Ae(2, 32)), new pe(26, new Ae(2, 24)), new pe(16, new Ae(4, 9))), new Ce(5, Int32Array.from([6, 30]), new pe(26, new Ae(1, 108)), new pe(24, new Ae(2, 43)), new pe(18, new Ae(2, 15), new Ae(2, 16)), new pe(22, new Ae(2, 11), new Ae(2, 12))), new Ce(6, Int32Array.from([6, 34]), new pe(18, new Ae(2, 68)), new pe(16, new Ae(4, 27)), new pe(24, new Ae(4, 19)), new pe(28, new Ae(4, 15))), new Ce(7, Int32Array.from([6, 22, 38]), new pe(20, new Ae(2, 78)), new pe(18, new Ae(4, 31)), new pe(18, new Ae(2, 14), new Ae(4, 15)), new pe(26, new Ae(4, 13), new Ae(1, 14))), new Ce(8, Int32Array.from([6, 24, 42]), new pe(24, new Ae(2, 97)), new pe(22, new Ae(2, 38), new Ae(2, 39)), new pe(22, new Ae(4, 18), new Ae(2, 19)), new pe(26, new Ae(4, 14), new Ae(2, 15))), new Ce(9, Int32Array.from([6, 26, 46]), new pe(30, new Ae(2, 116)), new pe(22, new Ae(3, 36), new Ae(2, 37)), new pe(20, new Ae(4, 16), new Ae(4, 17)), new pe(24, new Ae(4, 12), new Ae(4, 13))), new Ce(10, Int32Array.from([6, 28, 50]), new pe(18, new Ae(2, 68), new Ae(2, 69)), new pe(26, new Ae(4, 43), new Ae(1, 44)), new pe(24, new Ae(6, 19), new Ae(2, 20)), new pe(28, new Ae(6, 15), new Ae(2, 16))), new Ce(11, Int32Array.from([6, 30, 54]), new pe(20, new Ae(4, 81)), new pe(30, new Ae(1, 50), new Ae(4, 51)), new pe(28, new Ae(4, 22), new Ae(4, 23)), new pe(24, new Ae(3, 12), new Ae(8, 13))), new Ce(12, Int32Array.from([6, 32, 58]), new pe(24, new Ae(2, 92), new Ae(2, 93)), new pe(22, new Ae(6, 36), new Ae(2, 37)), new pe(26, new Ae(4, 20), new Ae(6, 21)), new pe(28, new Ae(7, 14), new Ae(4, 15))), new Ce(13, Int32Array.from([6, 34, 62]), new pe(26, new Ae(4, 107)), new pe(22, new Ae(8, 37), new Ae(1, 38)), new pe(24, new Ae(8, 20), new Ae(4, 21)), new pe(22, new Ae(12, 11), new Ae(4, 12))), new Ce(14, Int32Array.from([6, 26, 46, 66]), new pe(30, new Ae(3, 115), new Ae(1, 116)), new pe(24, new Ae(4, 40), new Ae(5, 41)), new pe(20, new Ae(11, 16), new Ae(5, 17)), new pe(24, new Ae(11, 12), new Ae(5, 13))), new Ce(15, Int32Array.from([6, 26, 48, 70]), new pe(22, new Ae(5, 87), new Ae(1, 88)), new pe(24, new Ae(5, 41), new Ae(5, 42)), new pe(30, new Ae(5, 24), new Ae(7, 25)), new pe(24, new Ae(11, 12), new Ae(7, 13))), new Ce(16, Int32Array.from([6, 26, 50, 74]), new pe(24, new Ae(5, 98), new Ae(1, 99)), new pe(28, new Ae(7, 45), new Ae(3, 46)), new pe(24, new Ae(15, 19), new Ae(2, 20)), new pe(30, new Ae(3, 15), new Ae(13, 16))), new Ce(17, Int32Array.from([6, 30, 54, 78]), new pe(28, new Ae(1, 107), new Ae(5, 108)), new pe(28, new Ae(10, 46), new Ae(1, 47)), new pe(28, new Ae(1, 22), new Ae(15, 23)), new pe(28, new Ae(2, 14), new Ae(17, 15))), new Ce(18, Int32Array.from([6, 30, 56, 82]), new pe(30, new Ae(5, 120), new Ae(1, 121)), new pe(26, new Ae(9, 43), new Ae(4, 44)), new pe(28, new Ae(17, 22), new Ae(1, 23)), new pe(28, new Ae(2, 14), new Ae(19, 15))), new Ce(19, Int32Array.from([6, 30, 58, 86]), new pe(28, new Ae(3, 113), new Ae(4, 114)), new pe(26, new Ae(3, 44), new Ae(11, 45)), new pe(26, new Ae(17, 21), new Ae(4, 22)), new pe(26, new Ae(9, 13), new Ae(16, 14))), new Ce(20, Int32Array.from([6, 34, 62, 90]), new pe(28, new Ae(3, 107), new Ae(5, 108)), new pe(26, new Ae(3, 41), new Ae(13, 42)), new pe(30, new Ae(15, 24), new Ae(5, 25)), new pe(28, new Ae(15, 15), new Ae(10, 16))), new Ce(21, Int32Array.from([6, 28, 50, 72, 94]), new pe(28, new Ae(4, 116), new Ae(4, 117)), new pe(26, new Ae(17, 42)), new pe(28, new Ae(17, 22), new Ae(6, 23)), new pe(30, new Ae(19, 16), new Ae(6, 17))), new Ce(22, Int32Array.from([6, 26, 50, 74, 98]), new pe(28, new Ae(2, 111), new Ae(7, 112)), new pe(28, new Ae(17, 46)), new pe(30, new Ae(7, 24), new Ae(16, 25)), new pe(24, new Ae(34, 13))), new Ce(23, Int32Array.from([6, 30, 54, 78, 102]), new pe(30, new Ae(4, 121), new Ae(5, 122)), new pe(28, new Ae(4, 47), new Ae(14, 48)), new pe(30, new Ae(11, 24), new Ae(14, 25)), new pe(30, new Ae(16, 15), new Ae(14, 16))), new Ce(24, Int32Array.from([6, 28, 54, 80, 106]), new pe(30, new Ae(6, 117), new Ae(4, 118)), new pe(28, new Ae(6, 45), new Ae(14, 46)), new pe(30, new Ae(11, 24), new Ae(16, 25)), new pe(30, new Ae(30, 16), new Ae(2, 17))), new Ce(25, Int32Array.from([6, 32, 58, 84, 110]), new pe(26, new Ae(8, 106), new Ae(4, 107)), new pe(28, new Ae(8, 47), new Ae(13, 48)), new pe(30, new Ae(7, 24), new Ae(22, 25)), new pe(30, new Ae(22, 15), new Ae(13, 16))), new Ce(26, Int32Array.from([6, 30, 58, 86, 114]), new pe(28, new Ae(10, 114), new Ae(2, 115)), new pe(28, new Ae(19, 46), new Ae(4, 47)), new pe(28, new Ae(28, 22), new Ae(6, 23)), new pe(30, new Ae(33, 16), new Ae(4, 17))), new Ce(27, Int32Array.from([6, 34, 62, 90, 118]), new pe(30, new Ae(8, 122), new Ae(4, 123)), new pe(28, new Ae(22, 45), new Ae(3, 46)), new pe(30, new Ae(8, 23), new Ae(26, 24)), new pe(30, new Ae(12, 15), new Ae(28, 16))), new Ce(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new pe(30, new Ae(3, 117), new Ae(10, 118)), new pe(28, new Ae(3, 45), new Ae(23, 46)), new pe(30, new Ae(4, 24), new Ae(31, 25)), new pe(30, new Ae(11, 15), new Ae(31, 16))), new Ce(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new pe(30, new Ae(7, 116), new Ae(7, 117)), new pe(28, new Ae(21, 45), new Ae(7, 46)), new pe(30, new Ae(1, 23), new Ae(37, 24)), new pe(30, new Ae(19, 15), new Ae(26, 16))), new Ce(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new pe(30, new Ae(5, 115), new Ae(10, 116)), new pe(28, new Ae(19, 47), new Ae(10, 48)), new pe(30, new Ae(15, 24), new Ae(25, 25)), new pe(30, new Ae(23, 15), new Ae(25, 16))), new Ce(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new pe(30, new Ae(13, 115), new Ae(3, 116)), new pe(28, new Ae(2, 46), new Ae(29, 47)), new pe(30, new Ae(42, 24), new Ae(1, 25)), new pe(30, new Ae(23, 15), new Ae(28, 16))), new Ce(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new pe(30, new Ae(17, 115)), new pe(28, new Ae(10, 46), new Ae(23, 47)), new pe(30, new Ae(10, 24), new Ae(35, 25)), new pe(30, new Ae(19, 15), new Ae(35, 16))), new Ce(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new pe(30, new Ae(17, 115), new Ae(1, 116)), new pe(28, new Ae(14, 46), new Ae(21, 47)), new pe(30, new Ae(29, 24), new Ae(19, 25)), new pe(30, new Ae(11, 15), new Ae(46, 16))), new Ce(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new pe(30, new Ae(13, 115), new Ae(6, 116)), new pe(28, new Ae(14, 46), new Ae(23, 47)), new pe(30, new Ae(44, 24), new Ae(7, 25)), new pe(30, new Ae(59, 16), new Ae(1, 17))), new Ce(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new pe(30, new Ae(12, 121), new Ae(7, 122)), new pe(28, new Ae(12, 47), new Ae(26, 48)), new pe(30, new Ae(39, 24), new Ae(14, 25)), new pe(30, new Ae(22, 15), new Ae(41, 16))), new Ce(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new pe(30, new Ae(6, 121), new Ae(14, 122)), new pe(28, new Ae(6, 47), new Ae(34, 48)), new pe(30, new Ae(46, 24), new Ae(10, 25)), new pe(30, new Ae(2, 15), new Ae(64, 16))), new Ce(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new pe(30, new Ae(17, 122), new Ae(4, 123)), new pe(28, new Ae(29, 46), new Ae(14, 47)), new pe(30, new Ae(49, 24), new Ae(10, 25)), new pe(30, new Ae(24, 15), new Ae(46, 16))), new Ce(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new pe(30, new Ae(4, 122), new Ae(18, 123)), new pe(28, new Ae(13, 46), new Ae(32, 47)), new pe(30, new Ae(48, 24), new Ae(14, 25)), new pe(30, new Ae(42, 15), new Ae(32, 16))), new Ce(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new pe(30, new Ae(20, 117), new Ae(4, 118)), new pe(28, new Ae(40, 47), new Ae(7, 48)), new pe(30, new Ae(43, 24), new Ae(22, 25)), new pe(30, new Ae(10, 15), new Ae(67, 16))), new Ce(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new pe(30, new Ae(19, 118), new Ae(6, 119)), new pe(28, new Ae(18, 47), new Ae(31, 48)), new pe(30, new Ae(34, 24), new Ae(34, 25)), new pe(30, new Ae(20, 15), new Ae(61, 16)))],
                        function(t) {
                            t[t.DATA_MASK_000 = 0] = "DATA_MASK_000", t[t.DATA_MASK_001 = 1] = "DATA_MASK_001", t[t.DATA_MASK_010 = 2] = "DATA_MASK_010", t[t.DATA_MASK_011 = 3] = "DATA_MASK_011", t[t.DATA_MASK_100 = 4] = "DATA_MASK_100", t[t.DATA_MASK_101 = 5] = "DATA_MASK_101", t[t.DATA_MASK_110 = 6] = "DATA_MASK_110", t[t.DATA_MASK_111 = 7] = "DATA_MASK_111"
                        }(G || (G = {}));
                    class Ee {
                        constructor(t, e) {
                            this.value = t, this.isMasked = e
                        }
                        unmaskBitMatrix(t, e) {
                            for (let r = 0; r < e; r++)
                                for (let n = 0; n < e; n++) this.isMasked(r, n) && t.flip(n, r)
                        }
                    }
                    Ee.values = new Map([
                        [G.DATA_MASK_000, new Ee(G.DATA_MASK_000, ((t, e) => 0 == (t + e & 1)))],
                        [G.DATA_MASK_001, new Ee(G.DATA_MASK_001, ((t, e) => 0 == (1 & t)))],
                        [G.DATA_MASK_010, new Ee(G.DATA_MASK_010, ((t, e) => e % 3 == 0))],
                        [G.DATA_MASK_011, new Ee(G.DATA_MASK_011, ((t, e) => (t + e) % 3 == 0))],
                        [G.DATA_MASK_100, new Ee(G.DATA_MASK_100, ((t, e) => 0 == (Math.floor(t / 2) + Math.floor(e / 3) & 1)))],
                        [G.DATA_MASK_101, new Ee(G.DATA_MASK_101, ((t, e) => t * e % 6 == 0))],
                        [G.DATA_MASK_110, new Ee(G.DATA_MASK_110, ((t, e) => t * e % 6 < 3))],
                        [G.DATA_MASK_111, new Ee(G.DATA_MASK_111, ((t, e) => 0 == (t + e + t * e % 3 & 1)))]
                    ]);
                    class Ie {
                        constructor(t) {
                            const e = t.getHeight();
                            if (e < 21 || 1 != (3 & e)) throw new E;
                            this.bitMatrix = t
                        }
                        readFormatInformation() {
                            if (null !== this.parsedFormatInfo && void 0 !== this.parsedFormatInfo) return this.parsedFormatInfo;
                            let t = 0;
                            for (let e = 0; e < 6; e++) t = this.copyBit(e, 8, t);
                            t = this.copyBit(7, 8, t), t = this.copyBit(8, 8, t), t = this.copyBit(8, 7, t);
                            for (let e = 5; e >= 0; e--) t = this.copyBit(8, e, t);
                            const e = this.bitMatrix.getHeight();
                            let r = 0;
                            const n = e - 7;
                            for (let t = e - 1; t >= n; t--) r = this.copyBit(8, t, r);
                            for (let t = e - 8; t < e; t++) r = this.copyBit(t, 8, r);
                            if (this.parsedFormatInfo = me.decodeFormatInformation(t, r), null !== this.parsedFormatInfo) return this.parsedFormatInfo;
                            throw new E
                        }
                        readVersion() {
                            if (null !== this.parsedVersion && void 0 !== this.parsedVersion) return this.parsedVersion;
                            const t = this.bitMatrix.getHeight(),
                                e = Math.floor((t - 17) / 4);
                            if (e <= 6) return Ce.getVersionForNumber(e);
                            let r = 0;
                            const n = t - 11;
                            for (let e = 5; e >= 0; e--)
                                for (let i = t - 9; i >= n; i--) r = this.copyBit(i, e, r);
                            let i = Ce.decodeVersionInformation(r);
                            if (null !== i && i.getDimensionForVersion() === t) return this.parsedVersion = i, i;
                            r = 0;
                            for (let e = 5; e >= 0; e--)
                                for (let i = t - 9; i >= n; i--) r = this.copyBit(e, i, r);
                            if (i = Ce.decodeVersionInformation(r), null !== i && i.getDimensionForVersion() === t) return this.parsedVersion = i, i;
                            throw new E
                        }
                        copyBit(t, e, r) {
                            return (this.isMirror ? this.bitMatrix.get(e, t) : this.bitMatrix.get(t, e)) ? r << 1 | 1 : r << 1
                        }
                        readCodewords() {
                            const t = this.readFormatInformation(),
                                e = this.readVersion(),
                                r = Ee.values.get(t.getDataMask()),
                                n = this.bitMatrix.getHeight();
                            r.unmaskBitMatrix(this.bitMatrix, n);
                            const i = e.buildFunctionPattern();
                            let o = !0;
                            const s = new Uint8Array(e.getTotalCodewords());
                            let a = 0,
                                c = 0,
                                l = 0;
                            for (let t = n - 1; t > 0; t -= 2) {
                                6 === t && t--;
                                for (let e = 0; e < n; e++) {
                                    const r = o ? n - 1 - e : e;
                                    for (let e = 0; e < 2; e++) i.get(t - e, r) || (l++, c <<= 1, this.bitMatrix.get(t - e, r) && (c |= 1), 8 === l && (s[a++] = c, l = 0, c = 0))
                                }
                                o = !o
                            }
                            if (a !== e.getTotalCodewords()) throw new E;
                            return s
                        }
                        remask() {
                            if (null === this.parsedFormatInfo) return;
                            const t = Ee.values[this.parsedFormatInfo.getDataMask()],
                                e = this.bitMatrix.getHeight();
                            t.unmaskBitMatrix(this.bitMatrix, e)
                        }
                        setMirror(t) {
                            this.parsedVersion = null, this.parsedFormatInfo = null, this.isMirror = t
                        }
                        mirror() {
                            const t = this.bitMatrix;
                            for (let e = 0, r = t.getWidth(); e < r; e++)
                                for (let r = e + 1, n = t.getHeight(); r < n; r++) t.get(e, r) !== t.get(r, e) && (t.flip(r, e), t.flip(e, r))
                        }
                    }
                    class Se {
                        constructor(t, e) {
                            this.numDataCodewords = t, this.codewords = e
                        }
                        static getDataBlocks(t, e, r) {
                            if (t.length !== e.getTotalCodewords()) throw new c;
                            const n = e.getECBlocksForLevel(r);
                            let i = 0;
                            const o = n.getECBlocks();
                            for (const t of o) i += t.getCount();
                            const s = new Array(i);
                            let a = 0;
                            for (const t of o)
                                for (let e = 0; e < t.getCount(); e++) {
                                    const e = t.getDataCodewords(),
                                        r = n.getECCodewordsPerBlock() + e;
                                    s[a++] = new Se(e, new Uint8Array(r))
                                }
                            const l = s[0].codewords.length;
                            let h = s.length - 1;
                            for (; h >= 0 && s[h].codewords.length !== l;) h--;
                            h++;
                            const u = l - n.getECCodewordsPerBlock();
                            let d = 0;
                            for (let e = 0; e < u; e++)
                                for (let r = 0; r < a; r++) s[r].codewords[e] = t[d++];
                            for (let e = h; e < a; e++) s[e].codewords[u] = t[d++];
                            const f = s[0].codewords.length;
                            for (let e = u; e < f; e++)
                                for (let r = 0; r < a; r++) {
                                    const n = r < h ? e : e + 1;
                                    s[r].codewords[n] = t[d++]
                                }
                            return s
                        }
                        getNumDataCodewords() {
                            return this.numDataCodewords
                        }
                        getCodewords() {
                            return this.codewords
                        }
                    }! function(t) {
                        t[t.TERMINATOR = 0] = "TERMINATOR", t[t.NUMERIC = 1] = "NUMERIC", t[t.ALPHANUMERIC = 2] = "ALPHANUMERIC", t[t.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND", t[t.BYTE = 4] = "BYTE", t[t.ECI = 5] = "ECI", t[t.KANJI = 6] = "KANJI", t[t.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION", t[t.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION", t[t.HANZI = 9] = "HANZI"
                    }(Y || (Y = {}));
                    class _e {
                        constructor(t, e, r, n) {
                            this.value = t, this.stringValue = e, this.characterCountBitsForVersions = r, this.bits = n, _e.FOR_BITS.set(n, this), _e.FOR_VALUE.set(t, this)
                        }
                        static forBits(t) {
                            const e = _e.FOR_BITS.get(t);
                            if (void 0 === e) throw new c;
                            return e
                        }
                        getCharacterCountBits(t) {
                            const e = t.getVersionNumber();
                            let r;
                            return r = e <= 9 ? 0 : e <= 26 ? 1 : 2, this.characterCountBitsForVersions[r]
                        }
                        getValue() {
                            return this.value
                        }
                        getBits() {
                            return this.bits
                        }
                        equals(t) {
                            if (!(t instanceof _e)) return !1;
                            const e = t;
                            return this.value === e.value
                        }
                        toString() {
                            return this.stringValue
                        }
                    }
                    _e.FOR_BITS = new Map, _e.FOR_VALUE = new Map, _e.TERMINATOR = new _e(Y.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0), _e.NUMERIC = new _e(Y.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1), _e.ALPHANUMERIC = new _e(Y.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2), _e.STRUCTURED_APPEND = new _e(Y.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3), _e.BYTE = new _e(Y.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4), _e.ECI = new _e(Y.ECI, "ECI", Int32Array.from([0, 0, 0]), 7), _e.KANJI = new _e(Y.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8), _e.FNC1_FIRST_POSITION = new _e(Y.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5), _e.FNC1_SECOND_POSITION = new _e(Y.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9), _e.HANZI = new _e(Y.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13);
                    class Te {
                        static decode(t, e, r, n) {
                            const i = new he(t);
                            let o = new y;
                            const s = new Array;
                            let a = -1,
                                c = -1;
                            try {
                                let t, r = null,
                                    l = !1;
                                do {
                                    if (i.available() < 4) t = _e.TERMINATOR;
                                    else {
                                        const e = i.readBits(4);
                                        t = _e.forBits(e)
                                    }
                                    switch (t) {
                                        case _e.TERMINATOR:
                                            break;
                                        case _e.FNC1_FIRST_POSITION:
                                        case _e.FNC1_SECOND_POSITION:
                                            l = !0;
                                            break;
                                        case _e.STRUCTURED_APPEND:
                                            if (i.available() < 16) throw new E;
                                            a = i.readBits(8), c = i.readBits(8);
                                            break;
                                        case _e.ECI:
                                            const h = Te.parseECIValue(i);
                                            if (r = I.getCharacterSetECIByValue(h), null === r) throw new E;
                                            break;
                                        case _e.HANZI:
                                            const u = i.readBits(4),
                                                d = i.readBits(t.getCharacterCountBits(e));
                                            u === Te.GB2312_SUBSET && Te.decodeHanziSegment(i, o, d);
                                            break;
                                        default:
                                            const f = i.readBits(t.getCharacterCountBits(e));
                                            switch (t) {
                                                case _e.NUMERIC:
                                                    Te.decodeNumericSegment(i, o, f);
                                                    break;
                                                case _e.ALPHANUMERIC:
                                                    Te.decodeAlphanumericSegment(i, o, f, l);
                                                    break;
                                                case _e.BYTE:
                                                    Te.decodeByteSegment(i, o, f, r, s, n);
                                                    break;
                                                case _e.KANJI:
                                                    Te.decodeKanjiSegment(i, o, f);
                                                    break;
                                                default:
                                                    throw new E
                                            }
                                    }
                                } while (t !== _e.TERMINATOR)
                            } catch (t) {
                                throw new E
                            }
                            return new j(t, o.toString(), 0 === s.length ? null : s, null === r ? null : r.toString(), a, c)
                        }
                        static decodeHanziSegment(t, e, r) {
                            if (13 * r > t.available()) throw new E;
                            const n = new Uint8Array(2 * r);
                            let i = 0;
                            for (; r > 0;) {
                                const e = t.readBits(13);
                                let o = e / 96 << 8 & 4294967295 | e % 96;
                                o += o < 959 ? 41377 : 42657, n[i] = o >> 8 & 255, n[i + 1] = 255 & o, i += 2, r--
                            }
                            try {
                                e.append(_.decode(n, T.GB2312))
                            } catch (t) {
                                throw new E(t)
                            }
                        }
                        static decodeKanjiSegment(t, e, r) {
                            if (13 * r > t.available()) throw new E;
                            const n = new Uint8Array(2 * r);
                            let i = 0;
                            for (; r > 0;) {
                                const e = t.readBits(13);
                                let o = e / 192 << 8 & 4294967295 | e % 192;
                                o += o < 7936 ? 33088 : 49472, n[i] = o >> 8, n[i + 1] = o, i += 2, r--
                            }
                            try {
                                e.append(_.decode(n, T.SHIFT_JIS))
                            } catch (t) {
                                throw new E(t)
                            }
                        }
                        static decodeByteSegment(t, e, r, n, i, o) {
                            if (8 * r > t.available()) throw new E;
                            const s = new Uint8Array(r);
                            for (let e = 0; e < r; e++) s[e] = t.readBits(8);
                            let a;
                            a = null === n ? T.guessEncoding(s, o) : n.getName();
                            try {
                                e.append(_.decode(s, a))
                            } catch (t) {
                                throw new E(t)
                            }
                            i.push(s)
                        }
                        static toAlphaNumericChar(t) {
                            if (t >= Te.ALPHANUMERIC_CHARS.length) throw new E;
                            return Te.ALPHANUMERIC_CHARS[t]
                        }
                        static decodeAlphanumericSegment(t, e, r, n) {
                            const i = e.length();
                            for (; r > 1;) {
                                if (t.available() < 11) throw new E;
                                const n = t.readBits(11);
                                e.append(Te.toAlphaNumericChar(Math.floor(n / 45))), e.append(Te.toAlphaNumericChar(n % 45)), r -= 2
                            }
                            if (1 === r) {
                                if (t.available() < 6) throw new E;
                                e.append(Te.toAlphaNumericChar(t.readBits(6)))
                            }
                            if (n)
                                for (let t = i; t < e.length(); t++) "%" === e.charAt(t) && (t < e.length() - 1 && "%" === e.charAt(t + 1) ? e.deleteCharAt(t + 1) : e.setCharAt(t, String.fromCharCode(29)))
                        }
                        static decodeNumericSegment(t, e, r) {
                            for (; r >= 3;) {
                                if (t.available() < 10) throw new E;
                                const n = t.readBits(10);
                                if (n >= 1e3) throw new E;
                                e.append(Te.toAlphaNumericChar(Math.floor(n / 100))), e.append(Te.toAlphaNumericChar(Math.floor(n / 10) % 10)), e.append(Te.toAlphaNumericChar(n % 10)), r -= 3
                            }
                            if (2 === r) {
                                if (t.available() < 7) throw new E;
                                const r = t.readBits(7);
                                if (r >= 100) throw new E;
                                e.append(Te.toAlphaNumericChar(Math.floor(r / 10))), e.append(Te.toAlphaNumericChar(r % 10))
                            } else if (1 === r) {
                                if (t.available() < 4) throw new E;
                                const r = t.readBits(4);
                                if (r >= 10) throw new E;
                                e.append(Te.toAlphaNumericChar(r))
                            }
                        }
                        static parseECIValue(t) {
                            const e = t.readBits(8);
                            if (0 == (128 & e)) return 127 & e;
                            if (128 == (192 & e)) return (63 & e) << 8 & 4294967295 | t.readBits(8);
                            if (192 == (224 & e)) return (31 & e) << 16 & 4294967295 | t.readBits(16);
                            throw new E
                        }
                    }
                    Te.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", Te.GB2312_SUBSET = 1;
                    class ye {
                        constructor(t) {
                            this.mirrored = t
                        }
                        isMirrored() {
                            return this.mirrored
                        }
                        applyMirroredCorrection(t) {
                            if (!this.mirrored || null === t || t.length < 3) return;
                            const e = t[0];
                            t[0] = t[2], t[2] = e
                        }
                    }
                    class Ne {
                        constructor() {
                            this.rsDecoder = new tt(q.QR_CODE_FIELD_256)
                        }
                        decodeBooleanArray(t, e) {
                            return this.decodeBitMatrix(N.parseFromBooleanArray(t), e)
                        }
                        decodeBitMatrix(t, e) {
                            const r = new Ie(t);
                            let n = null;
                            try {
                                return this.decodeBitMatrixParser(r, e)
                            } catch (t) {
                                n = t
                            }
                            try {
                                r.remask(), r.setMirror(!0), r.readVersion(), r.readFormatInformation(), r.mirror();
                                const t = this.decodeBitMatrixParser(r, e);
                                return t.setOther(new ye(!0)), t
                            } catch (t) {
                                if (null !== n) throw n;
                                throw t
                            }
                        }
                        decodeBitMatrixParser(t, e) {
                            const r = t.readVersion(),
                                n = t.readFormatInformation().getErrorCorrectionLevel(),
                                i = t.readCodewords(),
                                o = Se.getDataBlocks(i, r, n);
                            let s = 0;
                            for (const t of o) s += t.getNumDataCodewords();
                            const a = new Uint8Array(s);
                            let c = 0;
                            for (const t of o) {
                                const e = t.getCodewords(),
                                    r = t.getNumDataCodewords();
                                this.correctErrors(e, r);
                                for (let t = 0; t < r; t++) a[c++] = e[t]
                            }
                            return Te.decode(a, r, n, e)
                        }
                        correctErrors(t, e) {
                            const r = new Int32Array(t);
                            try {
                                this.rsDecoder.decode(r, t.length - e)
                            } catch (t) {
                                throw new h
                            }
                            for (let n = 0; n < e; n++) t[n] = r[n]
                        }
                    }
                    class De extends it {
                        constructor(t, e, r) {
                            super(t, e), this.estimatedModuleSize = r
                        }
                        aboutEquals(t, e, r) {
                            if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
                                const e = Math.abs(t - this.estimatedModuleSize);
                                return e <= 1 || e <= this.estimatedModuleSize
                            }
                            return !1
                        }
                        combineEstimate(t, e, r) {
                            const n = (this.getX() + e) / 2,
                                i = (this.getY() + t) / 2,
                                o = (this.estimatedModuleSize + r) / 2;
                            return new De(n, i, o)
                        }
                    }
                    class Me {
                        constructor(t, e, r, n, i, o, s) {
                            this.image = t, this.startX = e, this.startY = r, this.width = n, this.height = i, this.moduleSize = o, this.resultPointCallback = s, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(3)
                        }
                        find() {
                            const t = this.startX,
                                e = this.height,
                                r = t + this.width,
                                n = this.startY + e / 2,
                                i = new Int32Array(3),
                                o = this.image;
                            for (let s = 0; s < e; s++) {
                                const e = n + (0 == (1 & s) ? Math.floor((s + 1) / 2) : -Math.floor((s + 1) / 2));
                                i[0] = 0, i[1] = 0, i[2] = 0;
                                let a = t;
                                for (; a < r && !o.get(a, e);) a++;
                                let c = 0;
                                for (; a < r;) {
                                    if (o.get(a, e))
                                        if (1 === c) i[1]++;
                                        else if (2 === c) {
                                        if (this.foundPatternCross(i)) {
                                            const t = this.handlePossibleCenter(i, e, a);
                                            if (null !== t) return t
                                        }
                                        i[0] = i[2], i[1] = 1, i[2] = 0, c = 1
                                    } else i[++c]++;
                                    else 1 === c && c++, i[c]++;
                                    a++
                                }
                                if (this.foundPatternCross(i)) {
                                    const t = this.handlePossibleCenter(i, e, r);
                                    if (null !== t) return t
                                }
                            }
                            if (0 !== this.possibleCenters.length) return this.possibleCenters[0];
                            throw new D
                        }
                        static centerFromEnd(t, e) {
                            return e - t[2] - t[1] / 2
                        }
                        foundPatternCross(t) {
                            const e = this.moduleSize,
                                r = e / 2;
                            for (let n = 0; n < 3; n++)
                                if (Math.abs(e - t[n]) >= r) return !1;
                            return !0
                        }
                        crossCheckVertical(t, e, r, n) {
                            const i = this.image,
                                o = i.getHeight(),
                                s = this.crossCheckStateCount;
                            s[0] = 0, s[1] = 0, s[2] = 0;
                            let a = t;
                            for (; a >= 0 && i.get(e, a) && s[1] <= r;) s[1]++, a--;
                            if (a < 0 || s[1] > r) return NaN;
                            for (; a >= 0 && !i.get(e, a) && s[0] <= r;) s[0]++, a--;
                            if (s[0] > r) return NaN;
                            for (a = t + 1; a < o && i.get(e, a) && s[1] <= r;) s[1]++, a++;
                            if (a === o || s[1] > r) return NaN;
                            for (; a < o && !i.get(e, a) && s[2] <= r;) s[2]++, a++;
                            if (s[2] > r) return NaN;
                            const c = s[0] + s[1] + s[2];
                            return 5 * Math.abs(c - n) >= 2 * n ? NaN : this.foundPatternCross(s) ? Me.centerFromEnd(s, a) : NaN
                        }
                        handlePossibleCenter(t, e, r) {
                            const n = t[0] + t[1] + t[2],
                                i = Me.centerFromEnd(t, r),
                                o = this.crossCheckVertical(e, i, 2 * t[1], n);
                            if (!isNaN(o)) {
                                const e = (t[0] + t[1] + t[2]) / 3;
                                for (const t of this.possibleCenters)
                                    if (t.aboutEquals(e, o, i)) return t.combineEstimate(o, i, e);
                                const r = new De(i, o, e);
                                this.possibleCenters.push(r), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(r)
                            }
                            return null
                        }
                    }
                    class Re extends it {
                        constructor(t, e, r, n) {
                            super(t, e), this.estimatedModuleSize = r, this.count = n, void 0 === n && (this.count = 1)
                        }
                        getEstimatedModuleSize() {
                            return this.estimatedModuleSize
                        }
                        getCount() {
                            return this.count
                        }
                        aboutEquals(t, e, r) {
                            if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
                                const e = Math.abs(t - this.estimatedModuleSize);
                                return e <= 1 || e <= this.estimatedModuleSize
                            }
                            return !1
                        }
                        combineEstimate(t, e, r) {
                            const n = this.count + 1,
                                i = (this.count * this.getX() + e) / n,
                                o = (this.count * this.getY() + t) / n,
                                s = (this.count * this.estimatedModuleSize + r) / n;
                            return new Re(i, o, s, n)
                        }
                    }
                    class Oe {
                        constructor(t) {
                            this.bottomLeft = t[0], this.topLeft = t[1], this.topRight = t[2]
                        }
                        getBottomLeft() {
                            return this.bottomLeft
                        }
                        getTopLeft() {
                            return this.topLeft
                        }
                        getTopRight() {
                            return this.topRight
                        }
                    }
                    class be {
                        constructor(t, e) {
                            this.image = t, this.resultPointCallback = e, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(5), this.resultPointCallback = e
                        }
                        getImage() {
                            return this.image
                        }
                        getPossibleCenters() {
                            return this.possibleCenters
                        }
                        find(t) {
                            const e = null != t && void 0 !== t.get(C.TRY_HARDER),
                                r = null != t && void 0 !== t.get(C.PURE_BARCODE),
                                n = this.image,
                                i = n.getHeight(),
                                o = n.getWidth();
                            let s = Math.floor(3 * i / (4 * be.MAX_MODULES));
                            (s < be.MIN_SKIP || e) && (s = be.MIN_SKIP);
                            let a = !1;
                            const c = new Int32Array(5);
                            for (let t = s - 1; t < i && !a; t += s) {
                                c[0] = 0, c[1] = 0, c[2] = 0, c[3] = 0, c[4] = 0;
                                let e = 0;
                                for (let i = 0; i < o; i++)
                                    if (n.get(i, t)) 1 == (1 & e) && e++, c[e]++;
                                    else if (0 == (1 & e))
                                    if (4 === e)
                                        if (be.foundPatternCross(c)) {
                                            if (!0 !== this.handlePossibleCenter(c, t, i, r)) {
                                                c[0] = c[2], c[1] = c[3], c[2] = c[4], c[3] = 1, c[4] = 0, e = 3;
                                                continue
                                            }
                                            if (s = 2, !0 === this.hasSkipped) a = this.haveMultiplyConfirmedCenters();
                                            else {
                                                const e = this.findRowSkip();
                                                e > c[2] && (t += e - c[2] - s, i = o - 1)
                                            }
                                            e = 0, c[0] = 0, c[1] = 0, c[2] = 0, c[3] = 0, c[4] = 0
                                        } else c[0] = c[2], c[1] = c[3], c[2] = c[4], c[3] = 1, c[4] = 0, e = 3;
                                else c[++e]++;
                                else c[e]++;
                                be.foundPatternCross(c) && !0 === this.handlePossibleCenter(c, t, o, r) && (s = c[0], this.hasSkipped && (a = this.haveMultiplyConfirmedCenters()))
                            }
                            const l = this.selectBestPatterns();
                            return it.orderBestPatterns(l), new Oe(l)
                        }
                        static centerFromEnd(t, e) {
                            return e - t[4] - t[3] - t[2] / 2
                        }
                        static foundPatternCross(t) {
                            let e = 0;
                            for (let r = 0; r < 5; r++) {
                                const n = t[r];
                                if (0 === n) return !1;
                                e += n
                            }
                            if (e < 7) return !1;
                            const r = e / 7,
                                n = r / 2;
                            return Math.abs(r - t[0]) < n && Math.abs(r - t[1]) < n && Math.abs(3 * r - t[2]) < 3 * n && Math.abs(r - t[3]) < n && Math.abs(r - t[4]) < n
                        }
                        getCrossCheckStateCount() {
                            const t = this.crossCheckStateCount;
                            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t
                        }
                        crossCheckDiagonal(t, e, r, n) {
                            const i = this.getCrossCheckStateCount();
                            let o = 0;
                            const s = this.image;
                            for (; t >= o && e >= o && s.get(e - o, t - o);) i[2]++, o++;
                            if (t < o || e < o) return !1;
                            for (; t >= o && e >= o && !s.get(e - o, t - o) && i[1] <= r;) i[1]++, o++;
                            if (t < o || e < o || i[1] > r) return !1;
                            for (; t >= o && e >= o && s.get(e - o, t - o) && i[0] <= r;) i[0]++, o++;
                            if (i[0] > r) return !1;
                            const a = s.getHeight(),
                                c = s.getWidth();
                            for (o = 1; t + o < a && e + o < c && s.get(e + o, t + o);) i[2]++, o++;
                            if (t + o >= a || e + o >= c) return !1;
                            for (; t + o < a && e + o < c && !s.get(e + o, t + o) && i[3] < r;) i[3]++, o++;
                            if (t + o >= a || e + o >= c || i[3] >= r) return !1;
                            for (; t + o < a && e + o < c && s.get(e + o, t + o) && i[4] < r;) i[4]++, o++;
                            if (i[4] >= r) return !1;
                            const l = i[0] + i[1] + i[2] + i[3] + i[4];
                            return Math.abs(l - n) < 2 * n && be.foundPatternCross(i)
                        }
                        crossCheckVertical(t, e, r, n) {
                            const i = this.image,
                                o = i.getHeight(),
                                s = this.getCrossCheckStateCount();
                            let a = t;
                            for (; a >= 0 && i.get(e, a);) s[2]++, a--;
                            if (a < 0) return NaN;
                            for (; a >= 0 && !i.get(e, a) && s[1] <= r;) s[1]++, a--;
                            if (a < 0 || s[1] > r) return NaN;
                            for (; a >= 0 && i.get(e, a) && s[0] <= r;) s[0]++, a--;
                            if (s[0] > r) return NaN;
                            for (a = t + 1; a < o && i.get(e, a);) s[2]++, a++;
                            if (a === o) return NaN;
                            for (; a < o && !i.get(e, a) && s[3] < r;) s[3]++, a++;
                            if (a === o || s[3] >= r) return NaN;
                            for (; a < o && i.get(e, a) && s[4] < r;) s[4]++, a++;
                            if (s[4] >= r) return NaN;
                            const c = s[0] + s[1] + s[2] + s[3] + s[4];
                            return 5 * Math.abs(c - n) >= 2 * n ? NaN : be.foundPatternCross(s) ? be.centerFromEnd(s, a) : NaN
                        }
                        crossCheckHorizontal(t, e, r, n) {
                            const i = this.image,
                                o = i.getWidth(),
                                s = this.getCrossCheckStateCount();
                            let a = t;
                            for (; a >= 0 && i.get(a, e);) s[2]++, a--;
                            if (a < 0) return NaN;
                            for (; a >= 0 && !i.get(a, e) && s[1] <= r;) s[1]++, a--;
                            if (a < 0 || s[1] > r) return NaN;
                            for (; a >= 0 && i.get(a, e) && s[0] <= r;) s[0]++, a--;
                            if (s[0] > r) return NaN;
                            for (a = t + 1; a < o && i.get(a, e);) s[2]++, a++;
                            if (a === o) return NaN;
                            for (; a < o && !i.get(a, e) && s[3] < r;) s[3]++, a++;
                            if (a === o || s[3] >= r) return NaN;
                            for (; a < o && i.get(a, e) && s[4] < r;) s[4]++, a++;
                            if (s[4] >= r) return NaN;
                            const c = s[0] + s[1] + s[2] + s[3] + s[4];
                            return 5 * Math.abs(c - n) >= n ? NaN : be.foundPatternCross(s) ? be.centerFromEnd(s, a) : NaN
                        }
                        handlePossibleCenter(t, e, r, n) {
                            const i = t[0] + t[1] + t[2] + t[3] + t[4];
                            let o = be.centerFromEnd(t, r),
                                s = this.crossCheckVertical(e, Math.floor(o), t[2], i);
                            if (!isNaN(s) && (o = this.crossCheckHorizontal(Math.floor(o), Math.floor(s), t[2], i), !isNaN(o) && (!n || this.crossCheckDiagonal(Math.floor(s), Math.floor(o), t[2], i)))) {
                                const t = i / 7;
                                let e = !1;
                                const r = this.possibleCenters;
                                for (let n = 0, i = r.length; n < i; n++) {
                                    const i = r[n];
                                    if (i.aboutEquals(t, s, o)) {
                                        r[n] = i.combineEstimate(s, o, t), e = !0;
                                        break
                                    }
                                }
                                if (!e) {
                                    const e = new Re(o, s, t);
                                    r.push(e), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(e)
                                }
                                return !0
                            }
                            return !1
                        }
                        findRowSkip() {
                            if (this.possibleCenters.length <= 1) return 0;
                            let t = null;
                            for (const e of this.possibleCenters)
                                if (e.getCount() >= be.CENTER_QUORUM) {
                                    if (null != t) return this.hasSkipped = !0, Math.floor((Math.abs(t.getX() - e.getX()) - Math.abs(t.getY() - e.getY())) / 2);
                                    t = e
                                } return 0
                        }
                        haveMultiplyConfirmedCenters() {
                            let t = 0,
                                e = 0;
                            const r = this.possibleCenters.length;
                            for (const r of this.possibleCenters) r.getCount() >= be.CENTER_QUORUM && (t++, e += r.getEstimatedModuleSize());
                            if (t < 3) return !1;
                            const n = e / r;
                            let i = 0;
                            for (const t of this.possibleCenters) i += Math.abs(t.getEstimatedModuleSize() - n);
                            return i <= .05 * e
                        }
                        selectBestPatterns() {
                            const t = this.possibleCenters.length;
                            if (t < 3) throw new D;
                            const e = this.possibleCenters;
                            let r;
                            if (t > 3) {
                                let n = 0,
                                    i = 0;
                                for (const t of this.possibleCenters) {
                                    const e = t.getEstimatedModuleSize();
                                    n += e, i += e * e
                                }
                                r = n / t;
                                let o = Math.sqrt(i / t - r * r);
                                e.sort(((t, e) => {
                                    const n = Math.abs(e.getEstimatedModuleSize() - r),
                                        i = Math.abs(t.getEstimatedModuleSize() - r);
                                    return n < i ? -1 : n > i ? 1 : 0
                                }));
                                const s = Math.max(.2 * r, o);
                                for (let t = 0; t < e.length && e.length > 3; t++) {
                                    const n = e[t];
                                    Math.abs(n.getEstimatedModuleSize() - r) > s && (e.splice(t, 1), t--)
                                }
                            }
                            if (e.length > 3) {
                                let t = 0;
                                for (const r of e) t += r.getEstimatedModuleSize();
                                r = t / e.length, e.sort(((t, e) => {
                                    if (e.getCount() === t.getCount()) {
                                        const n = Math.abs(e.getEstimatedModuleSize() - r),
                                            i = Math.abs(t.getEstimatedModuleSize() - r);
                                        return n < i ? 1 : n > i ? -1 : 0
                                    }
                                    return e.getCount() - t.getCount()
                                })), e.splice(3)
                            }
                            return [e[0], e[1], e[2]]
                        }
                    }
                    be.CENTER_QUORUM = 2, be.MIN_SKIP = 3, be.MAX_MODULES = 57;
                    class Be {
                        constructor(t) {
                            this.image = t
                        }
                        getImage() {
                            return this.image
                        }
                        getResultPointCallback() {
                            return this.resultPointCallback
                        }
                        detect(t) {
                            this.resultPointCallback = null == t ? null : t.get(C.NEED_RESULT_POINT_CALLBACK);
                            const e = new be(this.image, this.resultPointCallback).find(t);
                            return this.processFinderPatternInfo(e)
                        }
                        processFinderPatternInfo(t) {
                            const e = t.getTopLeft(),
                                r = t.getTopRight(),
                                n = t.getBottomLeft(),
                                i = this.calculateModuleSize(e, r, n);
                            if (i < 1) throw new D("No pattern found in proccess finder.");
                            const o = Be.computeDimension(e, r, n, i),
                                s = Ce.getProvisionalVersionForDimension(o),
                                a = s.getDimensionForVersion() - 7;
                            let c = null;
                            if (s.getAlignmentPatternCenters().length > 0) {
                                const t = r.getX() - e.getX() + n.getX(),
                                    o = r.getY() - e.getY() + n.getY(),
                                    s = 1 - 3 / a,
                                    l = Math.floor(e.getX() + s * (t - e.getX())),
                                    h = Math.floor(e.getY() + s * (o - e.getY()));
                                for (let t = 4; t <= 16; t <<= 1) try {
                                    c = this.findAlignmentInRegion(i, l, h, t);
                                    break
                                } catch (t) {
                                    if (!(t instanceof D)) throw t
                                }
                            }
                            const l = Be.createTransform(e, r, n, c, o),
                                h = Be.sampleGrid(this.image, l, o);
                            let u;
                            return u = null === c ? [n, e, r] : [n, e, r, c], new ot(h, u)
                        }
                        static createTransform(t, e, r, n, i) {
                            const o = i - 3.5;
                            let s, a, c, l;
                            return null !== n ? (s = n.getX(), a = n.getY(), c = o - 3, l = c) : (s = e.getX() - t.getX() + r.getX(), a = e.getY() - t.getY() + r.getY(), c = o, l = o), lt.quadrilateralToQuadrilateral(3.5, 3.5, o, 3.5, c, l, 3.5, o, t.getX(), t.getY(), e.getX(), e.getY(), s, a, r.getX(), r.getY())
                        }
                        static sampleGrid(t, e, r) {
                            return ut.getInstance().sampleGridWithTransform(t, r, r, e)
                        }
                        static computeDimension(t, e, r, n) {
                            const i = rt.round(it.distance(t, e) / n),
                                o = rt.round(it.distance(t, r) / n);
                            let s = Math.floor((i + o) / 2) + 7;
                            switch (3 & s) {
                                case 0:
                                    s++;
                                    break;
                                case 2:
                                    s--;
                                    break;
                                case 3:
                                    throw new D("Dimensions could be not found.")
                            }
                            return s
                        }
                        calculateModuleSize(t, e, r) {
                            return (this.calculateModuleSizeOneWay(t, e) + this.calculateModuleSizeOneWay(t, r)) / 2
                        }
                        calculateModuleSizeOneWay(t, e) {
                            const r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.getX()), Math.floor(t.getY()), Math.floor(e.getX()), Math.floor(e.getY())),
                                n = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.getX()), Math.floor(e.getY()), Math.floor(t.getX()), Math.floor(t.getY()));
                            return isNaN(r) ? n / 7 : isNaN(n) ? r / 7 : (r + n) / 14
                        }
                        sizeOfBlackWhiteBlackRunBothWays(t, e, r, n) {
                            let i = this.sizeOfBlackWhiteBlackRun(t, e, r, n),
                                o = 1,
                                s = t - (r - t);
                            s < 0 ? (o = t / (t - s), s = 0) : s >= this.image.getWidth() && (o = (this.image.getWidth() - 1 - t) / (s - t), s = this.image.getWidth() - 1);
                            let a = Math.floor(e - (n - e) * o);
                            return o = 1, a < 0 ? (o = e / (e - a), a = 0) : a >= this.image.getHeight() && (o = (this.image.getHeight() - 1 - e) / (a - e), a = this.image.getHeight() - 1), s = Math.floor(t + (s - t) * o), i += this.sizeOfBlackWhiteBlackRun(t, e, s, a), i - 1
                        }
                        sizeOfBlackWhiteBlackRun(t, e, r, n) {
                            const i = Math.abs(n - e) > Math.abs(r - t);
                            if (i) {
                                let i = t;
                                t = e, e = i, i = r, r = n, n = i
                            }
                            const o = Math.abs(r - t),
                                s = Math.abs(n - e);
                            let a = -o / 2;
                            const c = t < r ? 1 : -1,
                                l = e < n ? 1 : -1;
                            let h = 0;
                            const u = r + c;
                            for (let r = t, d = e; r !== u; r += c) {
                                const c = i ? d : r,
                                    u = i ? r : d;
                                if (1 === h === this.image.get(c, u)) {
                                    if (2 === h) return rt.distance(r, d, t, e);
                                    h++
                                }
                                if (a += s, a > 0) {
                                    if (d === n) break;
                                    d += l, a -= o
                                }
                            }
                            return 2 === h ? rt.distance(r + c, n, t, e) : NaN
                        }
                        findAlignmentInRegion(t, e, r, n) {
                            const i = Math.floor(n * t),
                                o = Math.max(0, e - i),
                                s = Math.min(this.image.getWidth() - 1, e + i);
                            if (s - o < 3 * t) throw new D("Alignment top exceeds estimated module size.");
                            const a = Math.max(0, r - i),
                                c = Math.min(this.image.getHeight() - 1, r + i);
                            if (c - a < 3 * t) throw new D("Alignment bottom exceeds estimated module size.");
                            return new Me(this.image, o, a, s - o, c - a, t, this.resultPointCallback).find()
                        }
                    }
                    class Le {
                        constructor() {
                            this.decoder = new Ne
                        }
                        getDecoder() {
                            return this.decoder
                        }
                        decode(t, e) {
                            let r, n;
                            if (null != e && void 0 !== e.get(C.PURE_BARCODE)) {
                                const i = Le.extractPureBits(t.getBlackMatrix());
                                r = this.decoder.decodeBitMatrix(i, e), n = Le.NO_POINTS
                            } else {
                                const i = new Be(t.getBlackMatrix()).detect(e);
                                r = this.decoder.decodeBitMatrix(i.getBits(), e), n = i.getPoints()
                            }
                            r.getOther() instanceof ye && r.getOther().applyMirroredCorrection(n);
                            const i = new x(r.getText(), r.getRawBytes(), void 0, n, U.QR_CODE, void 0),
                                o = r.getByteSegments();
                            null !== o && i.putMetadata(W.BYTE_SEGMENTS, o);
                            const s = r.getECLevel();
                            return null !== s && i.putMetadata(W.ERROR_CORRECTION_LEVEL, s), r.hasStructuredAppend() && (i.putMetadata(W.STRUCTURED_APPEND_SEQUENCE, r.getStructuredAppendSequenceNumber()), i.putMetadata(W.STRUCTURED_APPEND_PARITY, r.getStructuredAppendParity())), i
                        }
                        reset() {}
                        static extractPureBits(t) {
                            const e = t.getTopLeftOnBit(),
                                r = t.getBottomRightOnBit();
                            if (null === e || null === r) throw new D;
                            const n = this.moduleSize(e, t);
                            let i = e[1],
                                o = r[1],
                                s = e[0],
                                a = r[0];
                            if (s >= a || i >= o) throw new D;
                            if (o - i != a - s && (a = s + (o - i), a >= t.getWidth())) throw new D;
                            const c = Math.round((a - s + 1) / n),
                                l = Math.round((o - i + 1) / n);
                            if (c <= 0 || l <= 0) throw new D;
                            if (l !== c) throw new D;
                            const h = Math.floor(n / 2);
                            i += h, s += h;
                            const u = s + Math.floor((c - 1) * n) - a;
                            if (u > 0) {
                                if (u > h) throw new D;
                                s -= u
                            }
                            const d = i + Math.floor((l - 1) * n) - o;
                            if (d > 0) {
                                if (d > h) throw new D;
                                i -= d
                            }
                            const f = new N(c, l);
                            for (let e = 0; e < l; e++) {
                                const r = i + Math.floor(e * n);
                                for (let i = 0; i < c; i++) t.get(s + Math.floor(i * n), r) && f.set(i, e)
                            }
                            return f
                        }
                        static moduleSize(t, e) {
                            const r = e.getHeight(),
                                n = e.getWidth();
                            let i = t[0],
                                o = t[1],
                                s = !0,
                                a = 0;
                            for (; i < n && o < r;) {
                                if (s !== e.get(i, o)) {
                                    if (5 == ++a) break;
                                    s = !s
                                }
                                i++, o++
                            }
                            if (i === n || o === r) throw new D;
                            return (i - t[0]) / 7
                        }
                    }
                    Le.NO_POINTS = new Array;
                    class Pe {
                        PDF417Common() {}
                        static getBitCountSum(t) {
                            return rt.sum(t)
                        }
                        static toIntArray(t) {
                            if (null == t || !t.length) return Pe.EMPTY_INT_ARRAY;
                            const e = new Int32Array(t.length);
                            let r = 0;
                            for (const n of t) e[r++] = n;
                            return e
                        }
                        static getCodeword(t) {
                            const e = w.binarySearch(Pe.SYMBOL_TABLE, 262143 & t);
                            return e < 0 ? -1 : (Pe.CODEWORD_TABLE[e] - 1) % Pe.NUMBER_OF_CODEWORDS
                        }
                    }
                    Pe.NUMBER_OF_CODEWORDS = 929, Pe.MAX_CODEWORDS_IN_BARCODE = Pe.NUMBER_OF_CODEWORDS - 1, Pe.MIN_ROWS_IN_BARCODE = 3, Pe.MAX_ROWS_IN_BARCODE = 90, Pe.MODULES_IN_CODEWORD = 17, Pe.MODULES_IN_STOP_PATTERN = 18, Pe.BARS_IN_MODULE = 8, Pe.EMPTY_INT_ARRAY = new Int32Array([]), Pe.SYMBOL_TABLE = Int32Array.from([66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396, 66454, 66470, 66476, 66594, 66600, 66614, 66626, 66628, 66632, 66640, 66654, 66662, 66668, 66682, 66690, 66718, 66720, 66748, 66758, 66776, 66798, 66802, 66804, 66820, 66824, 66832, 66846, 66848, 66876, 66880, 66936, 66950, 66956, 66968, 66992, 67006, 67022, 67036, 67042, 67044, 67048, 67062, 67118, 67150, 67164, 67214, 67228, 67256, 67294, 67322, 67350, 67366, 67372, 67398, 67404, 67416, 67438, 67474, 67476, 67490, 67492, 67496, 67510, 67618, 67624, 67650, 67656, 67664, 67678, 67686, 67692, 67706, 67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800, 67822, 67826, 67828, 67842, 67848, 67870, 67872, 67900, 67904, 67960, 67974, 67992, 68016, 68030, 68046, 68060, 68066, 68068, 68072, 68086, 68104, 68112, 68126, 68128, 68156, 68160, 68216, 68336, 68358, 68364, 68376, 68400, 68414, 68448, 68476, 68494, 68508, 68536, 68546, 68548, 68552, 68560, 68574, 68582, 68588, 68654, 68686, 68700, 68706, 68708, 68712, 68726, 68750, 68764, 68792, 68802, 68804, 68808, 68816, 68830, 68838, 68844, 68858, 68878, 68892, 68920, 68976, 68990, 68994, 68996, 69e3, 69008, 69022, 69024, 69052, 69062, 69068, 69080, 69102, 69106, 69108, 69142, 69158, 69164, 69190, 69208, 69230, 69254, 69260, 69272, 69296, 69310, 69326, 69340, 69386, 69394, 69396, 69410, 69416, 69430, 69442, 69444, 69448, 69456, 69470, 69478, 69484, 69554, 69556, 69666, 69672, 69698, 69704, 69712, 69726, 69754, 69762, 69764, 69776, 69790, 69792, 69820, 69830, 69836, 69848, 69870, 69874, 69876, 69890, 69918, 69920, 69948, 69952, 70008, 70022, 70040, 70064, 70078, 70094, 70108, 70114, 70116, 70120, 70134, 70152, 70174, 70176, 70264, 70384, 70412, 70448, 70462, 70496, 70524, 70542, 70556, 70584, 70594, 70600, 70608, 70622, 70630, 70636, 70664, 70672, 70686, 70688, 70716, 70720, 70776, 70896, 71136, 71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416, 71452, 71480, 71536, 71550, 71554, 71556, 71560, 71568, 71582, 71584, 71612, 71622, 71628, 71640, 71662, 71726, 71732, 71758, 71772, 71778, 71780, 71784, 71798, 71822, 71836, 71864, 71874, 71880, 71888, 71902, 71910, 71916, 71930, 71950, 71964, 71992, 72048, 72062, 72066, 72068, 72080, 72094, 72096, 72124, 72134, 72140, 72152, 72174, 72178, 72180, 72206, 72220, 72248, 72304, 72318, 72416, 72444, 72456, 72464, 72478, 72480, 72508, 72512, 72568, 72588, 72600, 72624, 72638, 72654, 72668, 72674, 72676, 72680, 72694, 72726, 72742, 72748, 72774, 72780, 72792, 72814, 72838, 72856, 72880, 72894, 72910, 72924, 72930, 72932, 72936, 72950, 72966, 72972, 72984, 73008, 73022, 73056, 73084, 73102, 73116, 73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210, 73226, 73234, 73236, 73250, 73252, 73256, 73270, 73282, 73284, 73296, 73310, 73318, 73324, 73346, 73348, 73352, 73360, 73374, 73376, 73404, 73414, 73420, 73432, 73454, 73498, 73518, 73522, 73524, 73550, 73564, 73570, 73572, 73576, 73590, 73800, 73822, 73858, 73860, 73872, 73886, 73888, 73916, 73944, 73970, 73972, 73992, 74014, 74016, 74044, 74048, 74104, 74118, 74136, 74160, 74174, 74210, 74212, 74216, 74230, 74244, 74256, 74270, 74272, 74360, 74480, 74502, 74508, 74544, 74558, 74592, 74620, 74638, 74652, 74680, 74690, 74696, 74704, 74726, 74732, 74782, 74784, 74812, 74992, 75232, 75288, 75326, 75360, 75388, 75456, 75512, 75576, 75632, 75646, 75650, 75652, 75664, 75678, 75680, 75708, 75718, 75724, 75736, 75758, 75808, 75836, 75840, 75896, 76016, 76256, 76736, 76824, 76848, 76862, 76896, 76924, 76992, 77048, 77296, 77340, 77368, 77424, 77438, 77536, 77564, 77572, 77576, 77584, 77600, 77628, 77632, 77688, 77702, 77708, 77720, 77744, 77758, 77774, 77788, 77870, 77902, 77916, 77922, 77928, 77966, 77980, 78008, 78018, 78024, 78032, 78046, 78060, 78074, 78094, 78136, 78192, 78206, 78210, 78212, 78224, 78238, 78240, 78268, 78278, 78284, 78296, 78322, 78324, 78350, 78364, 78448, 78462, 78560, 78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726, 78744, 78768, 78782, 78798, 78812, 78818, 78820, 78824, 78838, 78862, 78876, 78904, 78960, 78974, 79072, 79100, 79296, 79352, 79368, 79376, 79390, 79392, 79420, 79424, 79480, 79600, 79628, 79640, 79664, 79678, 79712, 79740, 79772, 79800, 79810, 79812, 79816, 79824, 79838, 79846, 79852, 79894, 79910, 79916, 79942, 79948, 79960, 79982, 79988, 80006, 80024, 80048, 80062, 80078, 80092, 80098, 80100, 80104, 80134, 80140, 80176, 80190, 80224, 80252, 80270, 80284, 80312, 80328, 80336, 80350, 80358, 80364, 80378, 80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576, 80632, 80654, 80668, 80696, 80752, 80766, 80776, 80784, 80798, 80800, 80828, 80844, 80856, 80878, 80882, 80884, 80914, 80916, 80930, 80932, 80936, 80950, 80962, 80968, 80976, 80990, 80998, 81004, 81026, 81028, 81040, 81054, 81056, 81084, 81094, 81100, 81112, 81134, 81154, 81156, 81160, 81168, 81182, 81184, 81212, 81216, 81272, 81286, 81292, 81304, 81328, 81342, 81358, 81372, 81380, 81384, 81398, 81434, 81454, 81458, 81460, 81486, 81500, 81506, 81508, 81512, 81526, 81550, 81564, 81592, 81602, 81604, 81608, 81616, 81630, 81638, 81644, 81702, 81708, 81722, 81734, 81740, 81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108, 82180, 82184, 82192, 82206, 82208, 82236, 82240, 82296, 82316, 82328, 82352, 82366, 82402, 82404, 82408, 82440, 82448, 82462, 82464, 82492, 82496, 82552, 82672, 82694, 82700, 82712, 82736, 82750, 82784, 82812, 82830, 82882, 82884, 82888, 82896, 82918, 82924, 82952, 82960, 82974, 82976, 83004, 83008, 83064, 83184, 83424, 83468, 83480, 83504, 83518, 83552, 83580, 83648, 83704, 83740, 83768, 83824, 83838, 83842, 83844, 83848, 83856, 83872, 83900, 83910, 83916, 83928, 83950, 83984, 84e3, 84028, 84032, 84088, 84208, 84448, 84928, 85040, 85054, 85088, 85116, 85184, 85240, 85488, 85560, 85616, 85630, 85728, 85756, 85764, 85768, 85776, 85790, 85792, 85820, 85824, 85880, 85894, 85900, 85912, 85936, 85966, 85980, 86048, 86080, 86136, 86256, 86496, 86976, 88160, 88188, 88256, 88312, 88560, 89056, 89200, 89214, 89312, 89340, 89536, 89592, 89608, 89616, 89632, 89664, 89720, 89840, 89868, 89880, 89904, 89952, 89980, 89998, 90012, 90040, 90190, 90204, 90254, 90268, 90296, 90306, 90308, 90312, 90334, 90382, 90396, 90424, 90480, 90494, 90500, 90504, 90512, 90526, 90528, 90556, 90566, 90572, 90584, 90610, 90612, 90638, 90652, 90680, 90736, 90750, 90848, 90876, 90884, 90888, 90896, 90910, 90912, 90940, 90944, 91e3, 91014, 91020, 91032, 91056, 91070, 91086, 91100, 91106, 91108, 91112, 91126, 91150, 91164, 91192, 91248, 91262, 91360, 91388, 91584, 91640, 91664, 91678, 91680, 91708, 91712, 91768, 91888, 91928, 91952, 91966, 92e3, 92028, 92046, 92060, 92088, 92098, 92100, 92104, 92112, 92126, 92134, 92140, 92188, 92216, 92272, 92384, 92412, 92608, 92664, 93168, 93200, 93214, 93216, 93244, 93248, 93304, 93424, 93664, 93720, 93744, 93758, 93792, 93820, 93888, 93944, 93980, 94008, 94064, 94078, 94084, 94088, 94096, 94110, 94112, 94140, 94150, 94156, 94168, 94246, 94252, 94278, 94284, 94296, 94318, 94342, 94348, 94360, 94384, 94398, 94414, 94428, 94440, 94470, 94476, 94488, 94512, 94526, 94560, 94588, 94606, 94620, 94648, 94658, 94660, 94664, 94672, 94686, 94694, 94700, 94714, 94726, 94732, 94744, 94768, 94782, 94816, 94844, 94912, 94968, 94990, 95004, 95032, 95088, 95102, 95112, 95120, 95134, 95136, 95164, 95180, 95192, 95214, 95218, 95220, 95244, 95256, 95280, 95294, 95328, 95356, 95424, 95480, 95728, 95758, 95772, 95800, 95856, 95870, 95968, 95996, 96008, 96016, 96030, 96032, 96060, 96064, 96120, 96152, 96176, 96190, 96220, 96226, 96228, 96232, 96290, 96292, 96296, 96310, 96322, 96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388, 96392, 96400, 96414, 96416, 96444, 96454, 96460, 96472, 96494, 96498, 96500, 96514, 96516, 96520, 96528, 96542, 96544, 96572, 96576, 96632, 96646, 96652, 96664, 96688, 96702, 96718, 96732, 96738, 96740, 96744, 96758, 96772, 96776, 96784, 96798, 96800, 96828, 96832, 96888, 97008, 97030, 97036, 97048, 97072, 97086, 97120, 97148, 97166, 97180, 97208, 97220, 97224, 97232, 97246, 97254, 97260, 97326, 97330, 97332, 97358, 97372, 97378, 97380, 97384, 97398, 97422, 97436, 97464, 97474, 97476, 97480, 97488, 97502, 97510, 97516, 97550, 97564, 97592, 97648, 97666, 97668, 97672, 97680, 97694, 97696, 97724, 97734, 97740, 97752, 97774, 97830, 97836, 97850, 97862, 97868, 97880, 97902, 97906, 97908, 97926, 97932, 97944, 97968, 97998, 98012, 98018, 98020, 98024, 98038, 98618, 98674, 98676, 98838, 98854, 98874, 98892, 98904, 98926, 98930, 98932, 98968, 99006, 99042, 99044, 99048, 99062, 99166, 99194, 99246, 99286, 99350, 99366, 99372, 99386, 99398, 99416, 99438, 99442, 99444, 99462, 99504, 99518, 99534, 99548, 99554, 99556, 99560, 99574, 99590, 99596, 99608, 99632, 99646, 99680, 99708, 99726, 99740, 99768, 99778, 99780, 99784, 99792, 99806, 99814, 99820, 99834, 99858, 99860, 99874, 99880, 99894, 99906, 99920, 99934, 99962, 99970, 99972, 99976, 99984, 99998, 1e5, 100028, 100038, 100044, 100056, 100078, 100082, 100084, 100142, 100174, 100188, 100246, 100262, 100268, 100306, 100308, 100390, 100396, 100410, 100422, 100428, 100440, 100462, 100466, 100468, 100486, 100504, 100528, 100542, 100558, 100572, 100578, 100580, 100584, 100598, 100620, 100656, 100670, 100704, 100732, 100750, 100792, 100802, 100808, 100816, 100830, 100838, 100844, 100858, 100888, 100912, 100926, 100960, 100988, 101056, 101112, 101148, 101176, 101232, 101246, 101250, 101252, 101256, 101264, 101278, 101280, 101308, 101318, 101324, 101336, 101358, 101362, 101364, 101410, 101412, 101416, 101430, 101442, 101448, 101456, 101470, 101478, 101498, 101506, 101508, 101520, 101534, 101536, 101564, 101580, 101618, 101620, 101636, 101640, 101648, 101662, 101664, 101692, 101696, 101752, 101766, 101784, 101838, 101858, 101860, 101864, 101934, 101938, 101940, 101966, 101980, 101986, 101988, 101992, 102030, 102044, 102072, 102082, 102084, 102088, 102096, 102138, 102166, 102182, 102188, 102214, 102220, 102232, 102254, 102282, 102290, 102292, 102306, 102308, 102312, 102326, 102444, 102458, 102470, 102476, 102488, 102514, 102516, 102534, 102552, 102576, 102590, 102606, 102620, 102626, 102632, 102646, 102662, 102668, 102704, 102718, 102752, 102780, 102798, 102812, 102840, 102850, 102856, 102864, 102878, 102886, 102892, 102906, 102936, 102974, 103008, 103036, 103104, 103160, 103224, 103280, 103294, 103298, 103300, 103312, 103326, 103328, 103356, 103366, 103372, 103384, 103406, 103410, 103412, 103472, 103486, 103520, 103548, 103616, 103672, 103920, 103992, 104048, 104062, 104160, 104188, 104194, 104196, 104200, 104208, 104224, 104252, 104256, 104312, 104326, 104332, 104344, 104368, 104382, 104398, 104412, 104418, 104420, 104424, 104482, 104484, 104514, 104520, 104528, 104542, 104550, 104570, 104578, 104580, 104592, 104606, 104608, 104636, 104652, 104690, 104692, 104706, 104712, 104734, 104736, 104764, 104768, 104824, 104838, 104856, 104910, 104930, 104932, 104936, 104968, 104976, 104990, 104992, 105020, 105024, 105080, 105200, 105240, 105278, 105312, 105372, 105410, 105412, 105416, 105424, 105446, 105518, 105524, 105550, 105564, 105570, 105572, 105576, 105614, 105628, 105656, 105666, 105672, 105680, 105702, 105722, 105742, 105756, 105784, 105840, 105854, 105858, 105860, 105864, 105872, 105888, 105932, 105970, 105972, 106006, 106022, 106028, 106054, 106060, 106072, 106100, 106118, 106124, 106136, 106160, 106174, 106190, 106210, 106212, 106216, 106250, 106258, 106260, 106274, 106276, 106280, 106306, 106308, 106312, 106320, 106334, 106348, 106394, 106414, 106418, 106420, 106566, 106572, 106610, 106612, 106630, 106636, 106648, 106672, 106686, 106722, 106724, 106728, 106742, 106758, 106764, 106776, 106800, 106814, 106848, 106876, 106894, 106908, 106936, 106946, 106948, 106952, 106960, 106974, 106982, 106988, 107032, 107056, 107070, 107104, 107132, 107200, 107256, 107292, 107320, 107376, 107390, 107394, 107396, 107400, 107408, 107422, 107424, 107452, 107462, 107468, 107480, 107502, 107506, 107508, 107544, 107568, 107582, 107616, 107644, 107712, 107768, 108016, 108060, 108088, 108144, 108158, 108256, 108284, 108290, 108292, 108296, 108304, 108318, 108320, 108348, 108352, 108408, 108422, 108428, 108440, 108464, 108478, 108494, 108508, 108514, 108516, 108520, 108592, 108640, 108668, 108736, 108792, 109040, 109536, 109680, 109694, 109792, 109820, 110016, 110072, 110084, 110088, 110096, 110112, 110140, 110144, 110200, 110320, 110342, 110348, 110360, 110384, 110398, 110432, 110460, 110478, 110492, 110520, 110532, 110536, 110544, 110558, 110658, 110686, 110714, 110722, 110724, 110728, 110736, 110750, 110752, 110780, 110796, 110834, 110836, 110850, 110852, 110856, 110864, 110878, 110880, 110908, 110912, 110968, 110982, 111e3, 111054, 111074, 111076, 111080, 111108, 111112, 111120, 111134, 111136, 111164, 111168, 111224, 111344, 111372, 111422, 111456, 111516, 111554, 111556, 111560, 111568, 111590, 111632, 111646, 111648, 111676, 111680, 111736, 111856, 112096, 112152, 112224, 112252, 112320, 112440, 112514, 112516, 112520, 112528, 112542, 112544, 112588, 112686, 112718, 112732, 112782, 112796, 112824, 112834, 112836, 112840, 112848, 112870, 112890, 112910, 112924, 112952, 113008, 113022, 113026, 113028, 113032, 113040, 113054, 113056, 113100, 113138, 113140, 113166, 113180, 113208, 113264, 113278, 113376, 113404, 113416, 113424, 113440, 113468, 113472, 113560, 113614, 113634, 113636, 113640, 113686, 113702, 113708, 113734, 113740, 113752, 113778, 113780, 113798, 113804, 113816, 113840, 113854, 113870, 113890, 113892, 113896, 113926, 113932, 113944, 113968, 113982, 114016, 114044, 114076, 114114, 114116, 114120, 114128, 114150, 114170, 114194, 114196, 114210, 114212, 114216, 114242, 114244, 114248, 114256, 114270, 114278, 114306, 114308, 114312, 114320, 114334, 114336, 114364, 114380, 114420, 114458, 114478, 114482, 114484, 114510, 114524, 114530, 114532, 114536, 114842, 114866, 114868, 114970, 114994, 114996, 115042, 115044, 115048, 115062, 115130, 115226, 115250, 115252, 115278, 115292, 115298, 115300, 115304, 115318, 115342, 115394, 115396, 115400, 115408, 115422, 115430, 115436, 115450, 115478, 115494, 115514, 115526, 115532, 115570, 115572, 115738, 115758, 115762, 115764, 115790, 115804, 115810, 115812, 115816, 115830, 115854, 115868, 115896, 115906, 115912, 115920, 115934, 115942, 115948, 115962, 115996, 116024, 116080, 116094, 116098, 116100, 116104, 116112, 116126, 116128, 116156, 116166, 116172, 116184, 116206, 116210, 116212, 116246, 116262, 116268, 116282, 116294, 116300, 116312, 116334, 116338, 116340, 116358, 116364, 116376, 116400, 116414, 116430, 116444, 116450, 116452, 116456, 116498, 116500, 116514, 116520, 116534, 116546, 116548, 116552, 116560, 116574, 116582, 116588, 116602, 116654, 116694, 116714, 116762, 116782, 116786, 116788, 116814, 116828, 116834, 116836, 116840, 116854, 116878, 116892, 116920, 116930, 116936, 116944, 116958, 116966, 116972, 116986, 117006, 117048, 117104, 117118, 117122, 117124, 117136, 117150, 117152, 117180, 117190, 117196, 117208, 117230, 117234, 117236, 117304, 117360, 117374, 117472, 117500, 117506, 117508, 117512, 117520, 117536, 117564, 117568, 117624, 117638, 117644, 117656, 117680, 117694, 117710, 117724, 117730, 117732, 117736, 117750, 117782, 117798, 117804, 117818, 117830, 117848, 117874, 117876, 117894, 117936, 117950, 117966, 117986, 117988, 117992, 118022, 118028, 118040, 118064, 118078, 118112, 118140, 118172, 118210, 118212, 118216, 118224, 118238, 118246, 118266, 118306, 118312, 118338, 118352, 118366, 118374, 118394, 118402, 118404, 118408, 118416, 118430, 118432, 118460, 118476, 118514, 118516, 118574, 118578, 118580, 118606, 118620, 118626, 118628, 118632, 118678, 118694, 118700, 118730, 118738, 118740, 118830, 118834, 118836, 118862, 118876, 118882, 118884, 118888, 118902, 118926, 118940, 118968, 118978, 118980, 118984, 118992, 119006, 119014, 119020, 119034, 119068, 119096, 119152, 119166, 119170, 119172, 119176, 119184, 119198, 119200, 119228, 119238, 119244, 119256, 119278, 119282, 119284, 119324, 119352, 119408, 119422, 119520, 119548, 119554, 119556, 119560, 119568, 119582, 119584, 119612, 119616, 119672, 119686, 119692, 119704, 119728, 119742, 119758, 119772, 119778, 119780, 119784, 119798, 119920, 119934, 120032, 120060, 120256, 120312, 120324, 120328, 120336, 120352, 120384, 120440, 120560, 120582, 120588, 120600, 120624, 120638, 120672, 120700, 120718, 120732, 120760, 120770, 120772, 120776, 120784, 120798, 120806, 120812, 120870, 120876, 120890, 120902, 120908, 120920, 120946, 120948, 120966, 120972, 120984, 121008, 121022, 121038, 121058, 121060, 121064, 121078, 121100, 121112, 121136, 121150, 121184, 121212, 121244, 121282, 121284, 121288, 121296, 121318, 121338, 121356, 121368, 121392, 121406, 121440, 121468, 121536, 121592, 121656, 121730, 121732, 121736, 121744, 121758, 121760, 121804, 121842, 121844, 121890, 121922, 121924, 121928, 121936, 121950, 121958, 121978, 121986, 121988, 121992, 122e3, 122014, 122016, 122044, 122060, 122098, 122100, 122116, 122120, 122128, 122142, 122144, 122172, 122176, 122232, 122246, 122264, 122318, 122338, 122340, 122344, 122414, 122418, 122420, 122446, 122460, 122466, 122468, 122472, 122510, 122524, 122552, 122562, 122564, 122568, 122576, 122598, 122618, 122646, 122662, 122668, 122694, 122700, 122712, 122738, 122740, 122762, 122770, 122772, 122786, 122788, 122792, 123018, 123026, 123028, 123042, 123044, 123048, 123062, 123098, 123146, 123154, 123156, 123170, 123172, 123176, 123190, 123202, 123204, 123208, 123216, 123238, 123244, 123258, 123290, 123314, 123316, 123402, 123410, 123412, 123426, 123428, 123432, 123446, 123458, 123464, 123472, 123486, 123494, 123500, 123514, 123522, 123524, 123528, 123536, 123552, 123580, 123590, 123596, 123608, 123630, 123634, 123636, 123674, 123698, 123700, 123740, 123746, 123748, 123752, 123834, 123914, 123922, 123924, 123938, 123944, 123958, 123970, 123976, 123984, 123998, 124006, 124012, 124026, 124034, 124036, 124048, 124062, 124064, 124092, 124102, 124108, 124120, 124142, 124146, 124148, 124162, 124164, 124168, 124176, 124190, 124192, 124220, 124224, 124280, 124294, 124300, 124312, 124336, 124350, 124366, 124380, 124386, 124388, 124392, 124406, 124442, 124462, 124466, 124468, 124494, 124508, 124514, 124520, 124558, 124572, 124600, 124610, 124612, 124616, 124624, 124646, 124666, 124694, 124710, 124716, 124730, 124742, 124748, 124760, 124786, 124788, 124818, 124820, 124834, 124836, 124840, 124854, 124946, 124948, 124962, 124964, 124968, 124982, 124994, 124996, 125e3, 125008, 125022, 125030, 125036, 125050, 125058, 125060, 125064, 125072, 125086, 125088, 125116, 125126, 125132, 125144, 125166, 125170, 125172, 125186, 125188, 125192, 125200, 125216, 125244, 125248, 125304, 125318, 125324, 125336, 125360, 125374, 125390, 125404, 125410, 125412, 125416, 125430, 125444, 125448, 125456, 125472, 125504, 125560, 125680, 125702, 125708, 125720, 125744, 125758, 125792, 125820, 125838, 125852, 125880, 125890, 125892, 125896, 125904, 125918, 125926, 125932, 125978, 125998, 126002, 126004, 126030, 126044, 126050, 126052, 126056, 126094, 126108, 126136, 126146, 126148, 126152, 126160, 126182, 126202, 126222, 126236, 126264, 126320, 126334, 126338, 126340, 126344, 126352, 126366, 126368, 126412, 126450, 126452, 126486, 126502, 126508, 126522, 126534, 126540, 126552, 126574, 126578, 126580, 126598, 126604, 126616, 126640, 126654, 126670, 126684, 126690, 126692, 126696, 126738, 126754, 126756, 126760, 126774, 126786, 126788, 126792, 126800, 126814, 126822, 126828, 126842, 126894, 126898, 126900, 126934, 127126, 127142, 127148, 127162, 127178, 127186, 127188, 127254, 127270, 127276, 127290, 127302, 127308, 127320, 127342, 127346, 127348, 127370, 127378, 127380, 127394, 127396, 127400, 127450, 127510, 127526, 127532, 127546, 127558, 127576, 127598, 127602, 127604, 127622, 127628, 127640, 127664, 127678, 127694, 127708, 127714, 127716, 127720, 127734, 127754, 127762, 127764, 127778, 127784, 127810, 127812, 127816, 127824, 127838, 127846, 127866, 127898, 127918, 127922, 127924, 128022, 128038, 128044, 128058, 128070, 128076, 128088, 128110, 128114, 128116, 128134, 128140, 128152, 128176, 128190, 128206, 128220, 128226, 128228, 128232, 128246, 128262, 128268, 128280, 128304, 128318, 128352, 128380, 128398, 128412, 128440, 128450, 128452, 128456, 128464, 128478, 128486, 128492, 128506, 128522, 128530, 128532, 128546, 128548, 128552, 128566, 128578, 128580, 128584, 128592, 128606, 128614, 128634, 128642, 128644, 128648, 128656, 128670, 128672, 128700, 128716, 128754, 128756, 128794, 128814, 128818, 128820, 128846, 128860, 128866, 128868, 128872, 128886, 128918, 128934, 128940, 128954, 128978, 128980, 129178, 129198, 129202, 129204, 129238, 129258, 129306, 129326, 129330, 129332, 129358, 129372, 129378, 129380, 129384, 129398, 129430, 129446, 129452, 129466, 129482, 129490, 129492, 129562, 129582, 129586, 129588, 129614, 129628, 129634, 129636, 129640, 129654, 129678, 129692, 129720, 129730, 129732, 129736, 129744, 129758, 129766, 129772, 129814, 129830, 129836, 129850, 129862, 129868, 129880, 129902, 129906, 129908, 129930, 129938, 129940, 129954, 129956, 129960, 129974, 130010]), Pe.CODEWORD_TABLE = Int32Array.from([2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868, 865, 861, 859, 2511, 873, 871, 1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806, 2480, 815, 814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655, 2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752, 2739, 2737, 2728, 2727, 2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413, 754, 752, 1719, 692, 689, 681, 2371, 678, 2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646, 643, 2345, 654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608, 606, 2324, 603, 2323, 615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619, 1618, 2575, 2538, 2536, 905, 901, 898, 909, 2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489, 2487, 2485, 1748, 836, 834, 832, 830, 2494, 827, 2492, 843, 841, 839, 845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629, 1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576, 569, 566, 2296, 1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466, 2242, 462, 2239, 492, 485, 482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425, 419, 2202, 415, 2199, 432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362, 2157, 2155, 2152, 378, 377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384, 1423, 1422, 1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403, 750, 742, 738, 2414, 756, 753, 1720, 2367, 2365, 2362, 2359, 1663, 693, 691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337, 2336, 2334, 2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645, 2346, 655, 653, 1653, 1651, 1649, 1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904, 900, 910, 2503, 2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713, 2711, 2697, 2694, 2691, 2702, 2672, 2670, 2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654, 2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751, 2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345, 1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354, 1352, 1349, 1356, 262, 257, 2101, 253, 2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052, 202, 2050, 2044, 2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229, 1266, 1264, 1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988, 165, 164, 2007, 162, 2006, 159, 2003, 2e3, 172, 171, 169, 2012, 166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191, 1189, 1187, 176, 1194, 1193, 2313, 2307, 2305, 592, 589, 2294, 2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529, 2278, 525, 2275, 547, 544, 541, 1574, 1571, 2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241, 493, 488, 484, 2250, 498, 495, 1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427, 414, 412, 2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429, 1473, 1471, 1469, 1466, 434, 1477, 1475, 2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726, 2443, 2440, 792, 789, 785, 2401, 2399, 2393, 1702, 2389, 1699, 2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353, 1661, 2350, 1660, 2347, 1657, 2368, 2366, 2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689, 2619, 2617, 2610, 2608, 2605, 2613, 2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573, 2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517, 1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539, 906, 903, 911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703, 1827, 1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679, 2677, 1858, 1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133, 131, 1984, 128, 1983, 125, 1981, 138, 137, 136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971, 1969, 122, 121, 119, 117, 1977, 114, 1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78, 1950, 1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081, 1078, 100, 1090, 1089, 1087, 1091, 49, 47, 1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919, 66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70, 1032, 68, 1048, 1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867, 1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28, 1888, 25, 1886, 22, 1883, 982, 980, 977, 974, 32, 30, 991, 989, 987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146, 2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359, 343, 341, 338, 2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308, 305, 2131, 302, 2129, 298, 2127, 320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089, 2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256, 2100, 252, 2098, 2095, 272, 269, 2108, 266, 2106, 281, 279, 277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039, 2037, 2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205, 2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062, 211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267, 1265, 1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303, 2301, 2299, 1593, 2308, 2306, 590, 2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295, 2293, 2291, 579, 577, 574, 571, 2298, 582, 581, 1592, 2263, 2262, 2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535, 532, 2279, 528, 2277, 546, 543, 549, 1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492, 480, 477, 2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730, 2473, 2471, 2453, 2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427, 2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438, 2436, 2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388, 2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398, 2395, 1703, 2392, 1701, 2412, 2410, 2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611, 2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592, 2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562, 2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569, 2578, 1847, 1846, 2722, 1843, 1842, 1840, 1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695, 2704, 1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758, 808, 2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726, 2776, 782, 740, 737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645, 1643, 1640, 1648, 602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604, 1611, 1610, 1608, 1606, 613, 1615, 1613, 2328, 926, 924, 892, 886, 899, 857, 850, 2505, 1778, 824, 823, 821, 819, 2488, 818, 2486, 833, 831, 828, 840, 1761, 1759, 2649, 2632, 2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531, 527, 523, 540, 1566, 1564, 476, 467, 463, 2240, 486, 483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462, 1457, 1454, 428, 1468, 1465, 2210, 366, 363, 2158, 360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417, 1415, 1412, 1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363, 665, 2360, 685, 1684, 1681, 626, 624, 622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646, 1644, 1642, 2566, 928, 925, 2530, 2527, 894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851, 1779, 2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759, 2757, 2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369, 307, 300, 296, 2126, 315, 312, 1347, 1342, 1350, 261, 258, 250, 2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312, 1309, 2115, 203, 2048, 195, 2045, 191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262, 2080, 2079, 154, 1997, 150, 1995, 147, 1992, 1989, 163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167, 1185, 1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559, 556, 2290, 573, 1588, 520, 518, 512, 2268, 508, 2265, 530, 1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526, 1523, 1520, 397, 395, 2185, 392, 2183, 389, 2180, 2177, 410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779, 776, 773, 2397, 2394, 2390, 734, 728, 724, 746, 1717, 2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670, 667, 688, 1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521, 2518, 2515, 1784, 2532, 895, 893, 890, 2718, 2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769, 1852, 2760, 2758, 142, 141, 1139, 1138, 134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120, 118, 115, 1109, 1108, 1106, 1104, 123, 1113, 1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98, 1069, 96, 1084, 1082, 1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923, 50, 1920, 1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944, 1943, 1941, 11, 9, 1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966, 963, 29, 960, 26, 23, 983, 981, 978, 975, 33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328, 326, 2137, 323, 2135, 339, 1372, 1370, 294, 293, 291, 289, 2122, 286, 2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245, 244, 242, 2090, 239, 2088, 236, 2085, 2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189, 2038, 186, 2036, 183, 2033, 2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300, 2286, 2284, 2281, 565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514, 2270, 511, 533, 1569, 1567, 2223, 2221, 2218, 2215, 1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475, 2467, 2465, 2451, 2449, 2446, 801, 800, 2426, 2424, 2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379, 1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718, 2616, 2615, 2604, 2603, 2601, 2584, 2583, 2581, 2579, 1800, 2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688, 2686, 1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629, 1638, 1636, 1633, 1641, 598, 1605, 1604, 1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524, 1560, 1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452, 1447, 1444, 417, 1458, 1455, 2208, 364, 361, 358, 2154, 1401, 1400, 1398, 1396, 374, 1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672, 669, 666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849, 848, 847, 846, 2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338, 1335, 1343, 255, 251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232, 1230, 1224, 214, 1220, 210, 1242, 1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160, 1158, 1155, 161, 1152, 157, 1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458, 447, 2227, 472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460, 2209, 769, 764, 720, 712, 2391, 729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919, 2519, 2516, 885, 883, 881, 2685, 2661, 2659, 2767, 2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122, 1127, 109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068, 1067, 1065, 1063, 90, 1060, 87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008, 51, 1029, 1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956, 954, 952, 949, 946, 17, 14, 969, 967, 964, 961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350, 349, 1381, 329, 327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345, 243, 240, 237, 2086, 233, 2083, 254, 1297, 1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199, 1233, 1231, 1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555, 554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499, 2254, 515, 1563, 1561, 445, 443, 441, 2219, 438, 2216, 435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798, 797, 2422, 2419, 770, 768, 766, 2383, 2380, 2376, 721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546, 2543, 923, 921, 2717, 2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731, 1735, 1814, 1707, 1670, 1668, 1631, 1629, 1626, 1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504, 1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394, 1404, 2171, 2170, 1708, 1672, 1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281, 1278, 248, 1292, 1289, 2111, 1218, 1216, 1210, 197, 1206, 193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150, 1148, 1146, 152, 1143, 149, 1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014, 2019, 1582, 510, 1556, 1553, 452, 448, 1506, 1500, 394, 391, 387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709, 662, 660, 657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118, 1123, 1097, 1096, 1094, 1092, 103, 1101, 1099, 1979, 1059, 1058, 1056, 1054, 77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007, 1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935, 1933, 1938, 942, 940, 938, 935, 932, 5, 2, 955, 953, 950, 947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897, 1379, 325, 1364, 1362, 288, 285, 1334, 1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178, 2028, 1219, 1217, 1215, 1212, 200, 1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505, 503, 500, 513, 1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507, 1505, 1502, 796, 763, 762, 760, 767, 711, 710, 708, 706, 2377, 718, 715, 1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499, 1438, 1435, 2204, 1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207, 1222, 2068, 2065, 1149, 1147, 1144, 1141, 146, 1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431, 1428, 1425, 388, 1440, 2205, 1705, 658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062, 1962, 1960, 1005, 1003, 1e3, 997, 38, 1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933, 6, 930, 3, 951, 948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35, 1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275, 1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182, 1195, 179, 1213, 2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706, 913, 912, 2198, 1386, 2164, 2161, 1621, 1766, 2103, 1208, 2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954, 1001, 998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270, 2105, 1202, 1199, 1196, 1211, 2061, 2057, 1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700]);
                    class ve {
                        constructor(t, e) {
                            this.bits = t, this.points = e
                        }
                        getBits() {
                            return this.bits
                        }
                        getPoints() {
                            return this.points
                        }
                    }
                    class Fe {
                        static detectMultiple(t, e, r) {
                            let n = t.getBlackMatrix(),
                                i = Fe.detect(r, n);
                            return i.length || (n = n.clone(), n.rotate180(), i = Fe.detect(r, n)), new ve(n, i)
                        }
                        static detect(t, e) {
                            const r = new Array;
                            let n = 0,
                                i = 0,
                                o = !1;
                            for (; n < e.getHeight();) {
                                const s = Fe.findVertices(e, n, i);
                                if (null != s[0] || null != s[3]) {
                                    if (o = !0, r.push(s), !t) break;
                                    null != s[2] ? (i = Math.trunc(s[2].getX()), n = Math.trunc(s[2].getY())) : (i = Math.trunc(s[4].getX()), n = Math.trunc(s[4].getY()))
                                } else {
                                    if (!o) break;
                                    o = !1, i = 0;
                                    for (const t of r) null != t[1] && (n = Math.trunc(Math.max(n, t[1].getY()))), null != t[3] && (n = Math.max(n, Math.trunc(t[3].getY())));
                                    n += Fe.ROW_STEP
                                }
                            }
                            return r
                        }
                        static findVertices(t, e, r) {
                            const n = t.getHeight(),
                                i = t.getWidth(),
                                o = new Array(8);
                            return Fe.copyToResult(o, Fe.findRowsWithPattern(t, n, i, e, r, Fe.START_PATTERN), Fe.INDEXES_START_PATTERN), null != o[4] && (r = Math.trunc(o[4].getX()), e = Math.trunc(o[4].getY())), Fe.copyToResult(o, Fe.findRowsWithPattern(t, n, i, e, r, Fe.STOP_PATTERN), Fe.INDEXES_STOP_PATTERN), o
                        }
                        static copyToResult(t, e, r) {
                            for (let n = 0; n < r.length; n++) t[r[n]] = e[n]
                        }
                        static findRowsWithPattern(t, e, r, n, i, o) {
                            const s = new Array(4);
                            let a = !1;
                            const c = new Int32Array(o.length);
                            for (; n < e; n += Fe.ROW_STEP) {
                                let e = Fe.findGuardPattern(t, i, n, r, !1, o, c);
                                if (null != e) {
                                    for (; n > 0;) {
                                        const s = Fe.findGuardPattern(t, i, --n, r, !1, o, c);
                                        if (null == s) {
                                            n++;
                                            break
                                        }
                                        e = s
                                    }
                                    s[0] = new it(e[0], n), s[1] = new it(e[1], n), a = !0;
                                    break
                                }
                            }
                            let l = n + 1;
                            if (a) {
                                let n = 0,
                                    i = Int32Array.from([Math.trunc(s[0].getX()), Math.trunc(s[1].getX())]);
                                for (; l < e; l++) {
                                    const e = Fe.findGuardPattern(t, i[0], l, r, !1, o, c);
                                    if (null != e && Math.abs(i[0] - e[0]) < Fe.MAX_PATTERN_DRIFT && Math.abs(i[1] - e[1]) < Fe.MAX_PATTERN_DRIFT) i = e, n = 0;
                                    else {
                                        if (n > Fe.SKIPPED_ROW_COUNT_MAX) break;
                                        n++
                                    }
                                }
                                l -= n + 1, s[2] = new it(i[0], l), s[3] = new it(i[1], l)
                            }
                            return l - n < Fe.BARCODE_MIN_HEIGHT && w.fill(s, null), s
                        }
                        static findGuardPattern(t, e, r, n, i, o, s) {
                            w.fillWithin(s, 0, s.length, 0);
                            let a = e,
                                c = 0;
                            for (; t.get(a, r) && a > 0 && c++ < Fe.MAX_PIXEL_DRIFT;) a--;
                            let l = a,
                                h = 0,
                                u = o.length;
                            for (let e = i; l < n; l++)
                                if (t.get(l, r) !== e) s[h]++;
                                else {
                                    if (h === u - 1) {
                                        if (Fe.patternMatchVariance(s, o, Fe.MAX_INDIVIDUAL_VARIANCE) < Fe.MAX_AVG_VARIANCE) return new Int32Array([a, l]);
                                        a += s[0] + s[1], d.arraycopy(s, 2, s, 0, h - 1), s[h - 1] = 0, s[h] = 0, h--
                                    } else h++;
                                    s[h] = 1, e = !e
                                } return h === u - 1 && Fe.patternMatchVariance(s, o, Fe.MAX_INDIVIDUAL_VARIANCE) < Fe.MAX_AVG_VARIANCE ? new Int32Array([a, l - 1]) : null
                        }
                        static patternMatchVariance(t, e, r) {
                            let n = t.length,
                                i = 0,
                                o = 0;
                            for (let r = 0; r < n; r++) i += t[r], o += e[r];
                            if (i < o) return 1 / 0;
                            let s = i / o;
                            r *= s;
                            let a = 0;
                            for (let i = 0; i < n; i++) {
                                let n = t[i],
                                    o = e[i] * s,
                                    c = n > o ? n - o : o - n;
                                if (c > r) return 1 / 0;
                                a += c
                            }
                            return a / i
                        }
                    }
                    Fe.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]), Fe.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]), Fe.MAX_AVG_VARIANCE = .42, Fe.MAX_INDIVIDUAL_VARIANCE = .8, Fe.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]), Fe.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]), Fe.MAX_PIXEL_DRIFT = 3, Fe.MAX_PATTERN_DRIFT = 5, Fe.SKIPPED_ROW_COUNT_MAX = 25, Fe.ROW_STEP = 5, Fe.BARCODE_MIN_HEIGHT = 10;
                    class xe {
                        constructor(t, e) {
                            if (0 === e.length) throw new c;
                            this.field = t;
                            let r = e.length;
                            if (r > 1 && 0 === e[0]) {
                                let t = 1;
                                for (; t < r && 0 === e[t];) t++;
                                t === r ? this.coefficients = new Int32Array([0]) : (this.coefficients = new Int32Array(r - t), d.arraycopy(e, t, this.coefficients, 0, this.coefficients.length))
                            } else this.coefficients = e
                        }
                        getCoefficients() {
                            return this.coefficients
                        }
                        getDegree() {
                            return this.coefficients.length - 1
                        }
                        isZero() {
                            return 0 === this.coefficients[0]
                        }
                        getCoefficient(t) {
                            return this.coefficients[this.coefficients.length - 1 - t]
                        }
                        evaluateAt(t) {
                            if (0 === t) return this.getCoefficient(0);
                            if (1 === t) {
                                let t = 0;
                                for (let e of this.coefficients) t = this.field.add(t, e);
                                return t
                            }
                            let e = this.coefficients[0],
                                r = this.coefficients.length;
                            for (let n = 1; n < r; n++) e = this.field.add(this.field.multiply(t, e), this.coefficients[n]);
                            return e
                        }
                        add(t) {
                            if (!this.field.equals(t.field)) throw new c("ModulusPolys do not have same ModulusGF field");
                            if (this.isZero()) return t;
                            if (t.isZero()) return this;
                            let e = this.coefficients,
                                r = t.coefficients;
                            if (e.length > r.length) {
                                let t = e;
                                e = r, r = t
                            }
                            let n = new Int32Array(r.length),
                                i = r.length - e.length;
                            d.arraycopy(r, 0, n, 0, i);
                            for (let t = i; t < r.length; t++) n[t] = this.field.add(e[t - i], r[t]);
                            return new xe(this.field, n)
                        }
                        subtract(t) {
                            if (!this.field.equals(t.field)) throw new c("ModulusPolys do not have same ModulusGF field");
                            return t.isZero() ? this : this.add(t.negative())
                        }
                        multiply(t) {
                            return t instanceof xe ? this.multiplyOther(t) : this.multiplyScalar(t)
                        }
                        multiplyOther(t) {
                            if (!this.field.equals(t.field)) throw new c("ModulusPolys do not have same ModulusGF field");
                            if (this.isZero() || t.isZero()) return new xe(this.field, new Int32Array([0]));
                            let e = this.coefficients,
                                r = e.length,
                                n = t.coefficients,
                                i = n.length,
                                o = new Int32Array(r + i - 1);
                            for (let t = 0; t < r; t++) {
                                let r = e[t];
                                for (let e = 0; e < i; e++) o[t + e] = this.field.add(o[t + e], this.field.multiply(r, n[e]))
                            }
                            return new xe(this.field, o)
                        }
                        negative() {
                            let t = this.coefficients.length,
                                e = new Int32Array(t);
                            for (let r = 0; r < t; r++) e[r] = this.field.subtract(0, this.coefficients[r]);
                            return new xe(this.field, e)
                        }
                        multiplyScalar(t) {
                            if (0 === t) return new xe(this.field, new Int32Array([0]));
                            if (1 === t) return this;
                            let e = this.coefficients.length,
                                r = new Int32Array(e);
                            for (let n = 0; n < e; n++) r[n] = this.field.multiply(this.coefficients[n], t);
                            return new xe(this.field, r)
                        }
                        multiplyByMonomial(t, e) {
                            if (t < 0) throw new c;
                            if (0 === e) return new xe(this.field, new Int32Array([0]));
                            let r = this.coefficients.length,
                                n = new Int32Array(r + t);
                            for (let t = 0; t < r; t++) n[t] = this.field.multiply(this.coefficients[t], e);
                            return new xe(this.field, n)
                        }
                        toString() {
                            let t = new y;
                            for (let e = this.getDegree(); e >= 0; e--) {
                                let r = this.getCoefficient(e);
                                0 !== r && (r < 0 ? (t.append(" - "), r = -r) : t.length() > 0 && t.append(" + "), 0 !== e && 1 === r || t.append(r), 0 !== e && (1 === e ? t.append("x") : (t.append("x^"), t.append(e))))
                            }
                            return t.toString()
                        }
                    }
                    class ke {
                        add(t, e) {
                            return (t + e) % this.modulus
                        }
                        subtract(t, e) {
                            return (this.modulus + t - e) % this.modulus
                        }
                        exp(t) {
                            return this.expTable[t]
                        }
                        log(t) {
                            if (0 === t) throw new c;
                            return this.logTable[t]
                        }
                        inverse(t) {
                            if (0 === t) throw new K;
                            return this.expTable[this.modulus - this.logTable[t] - 1]
                        }
                        multiply(t, e) {
                            return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.modulus - 1)]
                        }
                        getSize() {
                            return this.modulus
                        }
                        equals(t) {
                            return t === this
                        }
                    }
                    class Ue extends ke {
                        constructor(t, e) {
                            super(), this.modulus = t, this.expTable = new Int32Array(t), this.logTable = new Int32Array(t);
                            let r = 1;
                            for (let n = 0; n < t; n++) this.expTable[n] = r, r = r * e % t;
                            for (let e = 0; e < t - 1; e++) this.logTable[this.expTable[e]] = e;
                            this.zero = new xe(this, new Int32Array([0])), this.one = new xe(this, new Int32Array([1]))
                        }
                        getZero() {
                            return this.zero
                        }
                        getOne() {
                            return this.one
                        }
                        buildMonomial(t, e) {
                            if (t < 0) throw new c;
                            if (0 === e) return this.zero;
                            let r = new Int32Array(t + 1);
                            return r[0] = e, new xe(this, r)
                        }
                    }
                    Ue.PDF417_GF = new Ue(Pe.NUMBER_OF_CODEWORDS, 3);
                    class He {
                        constructor() {
                            this.field = Ue.PDF417_GF
                        }
                        decode(t, e, r) {
                            let n = new xe(this.field, t),
                                i = new Int32Array(e),
                                o = !1;
                            for (let t = e; t > 0; t--) {
                                let r = n.evaluateAt(this.field.exp(t));
                                i[e - t] = r, 0 !== r && (o = !0)
                            }
                            if (!o) return 0;
                            let s = this.field.getOne();
                            if (null != r)
                                for (const e of r) {
                                    let r = this.field.exp(t.length - 1 - e),
                                        n = new xe(this.field, new Int32Array([this.field.subtract(0, r), 1]));
                                    s = s.multiply(n)
                                }
                            let a = new xe(this.field, i),
                                c = this.runEuclideanAlgorithm(this.field.buildMonomial(e, 1), a, e),
                                l = c[0],
                                u = c[1],
                                d = this.findErrorLocations(l),
                                f = this.findErrorMagnitudes(u, l, d);
                            for (let e = 0; e < d.length; e++) {
                                let r = t.length - 1 - this.field.log(d[e]);
                                if (r < 0) throw h.getChecksumInstance();
                                t[r] = this.field.subtract(t[r], f[e])
                            }
                            return d.length
                        }
                        runEuclideanAlgorithm(t, e, r) {
                            if (t.getDegree() < e.getDegree()) {
                                let r = t;
                                t = e, e = r
                            }
                            let n = t,
                                i = e,
                                o = this.field.getZero(),
                                s = this.field.getOne();
                            for (; i.getDegree() >= Math.round(r / 2);) {
                                let t = n,
                                    e = o;
                                if (n = i, o = s, n.isZero()) throw h.getChecksumInstance();
                                i = t;
                                let r = this.field.getZero(),
                                    a = n.getCoefficient(n.getDegree()),
                                    c = this.field.inverse(a);
                                for (; i.getDegree() >= n.getDegree() && !i.isZero();) {
                                    let t = i.getDegree() - n.getDegree(),
                                        e = this.field.multiply(i.getCoefficient(i.getDegree()), c);
                                    r = r.add(this.field.buildMonomial(t, e)), i = i.subtract(n.multiplyByMonomial(t, e))
                                }
                                s = r.multiply(o).subtract(e).negative()
                            }
                            let a = s.getCoefficient(0);
                            if (0 === a) throw h.getChecksumInstance();
                            let c = this.field.inverse(a);
                            return [s.multiply(c), i.multiply(c)]
                        }
                        findErrorLocations(t) {
                            let e = t.getDegree(),
                                r = new Int32Array(e),
                                n = 0;
                            for (let i = 1; i < this.field.getSize() && n < e; i++) 0 === t.evaluateAt(i) && (r[n] = this.field.inverse(i), n++);
                            if (n !== e) throw h.getChecksumInstance();
                            return r
                        }
                        findErrorMagnitudes(t, e, r) {
                            let n = e.getDegree(),
                                i = new Int32Array(n);
                            for (let t = 1; t <= n; t++) i[n - t] = this.field.multiply(t, e.getCoefficient(t));
                            let o = new xe(this.field, i),
                                s = r.length,
                                a = new Int32Array(s);
                            for (let e = 0; e < s; e++) {
                                let n = this.field.inverse(r[e]),
                                    i = this.field.subtract(0, t.evaluateAt(n)),
                                    s = this.field.inverse(o.evaluateAt(n));
                                a[e] = this.field.multiply(i, s)
                            }
                            return a
                        }
                    }
                    class Ve {
                        constructor(t, e, r, n, i) {
                            t instanceof Ve ? this.constructor_2(t) : this.constructor_1(t, e, r, n, i)
                        }
                        constructor_1(t, e, r, n, i) {
                            const o = null == e || null == r,
                                s = null == n || null == i;
                            if (o && s) throw new D;
                            o ? (e = new it(0, n.getY()), r = new it(0, i.getY())) : s && (n = new it(t.getWidth() - 1, e.getY()), i = new it(t.getWidth() - 1, r.getY())), this.image = t, this.topLeft = e, this.bottomLeft = r, this.topRight = n, this.bottomRight = i, this.minX = Math.trunc(Math.min(e.getX(), r.getX())), this.maxX = Math.trunc(Math.max(n.getX(), i.getX())), this.minY = Math.trunc(Math.min(e.getY(), n.getY())), this.maxY = Math.trunc(Math.max(r.getY(), i.getY()))
                        }
                        constructor_2(t) {
                            this.image = t.image, this.topLeft = t.getTopLeft(), this.bottomLeft = t.getBottomLeft(), this.topRight = t.getTopRight(), this.bottomRight = t.getBottomRight(), this.minX = t.getMinX(), this.maxX = t.getMaxX(), this.minY = t.getMinY(), this.maxY = t.getMaxY()
                        }
                        static merge(t, e) {
                            return null == t ? e : null == e ? t : new Ve(t.image, t.topLeft, t.bottomLeft, e.topRight, e.bottomRight)
                        }
                        addMissingRows(t, e, r) {
                            let n = this.topLeft,
                                i = this.bottomLeft,
                                o = this.topRight,
                                s = this.bottomRight;
                            if (t > 0) {
                                let e = r ? this.topLeft : this.topRight,
                                    i = Math.trunc(e.getY() - t);
                                i < 0 && (i = 0);
                                let s = new it(e.getX(), i);
                                r ? n = s : o = s
                            }
                            if (e > 0) {
                                let t = r ? this.bottomLeft : this.bottomRight,
                                    n = Math.trunc(t.getY() + e);
                                n >= this.image.getHeight() && (n = this.image.getHeight() - 1);
                                let o = new it(t.getX(), n);
                                r ? i = o : s = o
                            }
                            return new Ve(this.image, n, i, o, s)
                        }
                        getMinX() {
                            return this.minX
                        }
                        getMaxX() {
                            return this.maxX
                        }
                        getMinY() {
                            return this.minY
                        }
                        getMaxY() {
                            return this.maxY
                        }
                        getTopLeft() {
                            return this.topLeft
                        }
                        getTopRight() {
                            return this.topRight
                        }
                        getBottomLeft() {
                            return this.bottomLeft
                        }
                        getBottomRight() {
                            return this.bottomRight
                        }
                    }
                    class ze {
                        constructor(t, e, r, n) {
                            this.columnCount = t, this.errorCorrectionLevel = n, this.rowCountUpperPart = e, this.rowCountLowerPart = r, this.rowCount = e + r
                        }
                        getColumnCount() {
                            return this.columnCount
                        }
                        getErrorCorrectionLevel() {
                            return this.errorCorrectionLevel
                        }
                        getRowCount() {
                            return this.rowCount
                        }
                        getRowCountUpperPart() {
                            return this.rowCountUpperPart
                        }
                        getRowCountLowerPart() {
                            return this.rowCountLowerPart
                        }
                    }
                    class Ge {
                        constructor() {
                            this.buffer = ""
                        }
                        static form(t, e) {
                            let r = -1;
                            return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, (function(t, n, i, o, s, a) {
                                if ("%%" === t) return "%";
                                if (void 0 === e[++r]) return;
                                t = o ? parseInt(o.substr(1)) : void 0;
                                let c, l = s ? parseInt(s.substr(1)) : void 0;
                                switch (a) {
                                    case "s":
                                        c = e[r];
                                        break;
                                    case "c":
                                        c = e[r][0];
                                        break;
                                    case "f":
                                        c = parseFloat(e[r]).toFixed(t);
                                        break;
                                    case "p":
                                        c = parseFloat(e[r]).toPrecision(t);
                                        break;
                                    case "e":
                                        c = parseFloat(e[r]).toExponential(t);
                                        break;
                                    case "x":
                                        c = parseInt(e[r]).toString(l || 16);
                                        break;
                                    case "d":
                                        c = parseFloat(parseInt(e[r], l || 10).toPrecision(t)).toFixed(0)
                                }
                                c = "object" == typeof c ? JSON.stringify(c) : (+c).toString(l);
                                let h = parseInt(i),
                                    u = i && i[0] + "" == "0" ? "0" : " ";
                                for (; c.length < h;) c = void 0 !== n ? c + u : u + c;
                                return c
                            }))
                        }
                        format(t, ...e) {
                            this.buffer += Ge.form(t, e)
                        }
                        toString() {
                            return this.buffer
                        }
                    }
                    class Ye {
                        constructor(t) {
                            this.boundingBox = new Ve(t), this.codewords = new Array(t.getMaxY() - t.getMinY() + 1)
                        }
                        getCodewordNearby(t) {
                            let e = this.getCodeword(t);
                            if (null != e) return e;
                            for (let r = 1; r < Ye.MAX_NEARBY_DISTANCE; r++) {
                                let n = this.imageRowToCodewordIndex(t) - r;
                                if (n >= 0 && (e = this.codewords[n], null != e)) return e;
                                if (n = this.imageRowToCodewordIndex(t) + r, n < this.codewords.length && (e = this.codewords[n], null != e)) return e
                            }
                            return null
                        }
                        imageRowToCodewordIndex(t) {
                            return t - this.boundingBox.getMinY()
                        }
                        setCodeword(t, e) {
                            this.codewords[this.imageRowToCodewordIndex(t)] = e
                        }
                        getCodeword(t) {
                            return this.codewords[this.imageRowToCodewordIndex(t)]
                        }
                        getBoundingBox() {
                            return this.boundingBox
                        }
                        getCodewords() {
                            return this.codewords
                        }
                        toString() {
                            const t = new Ge;
                            let e = 0;
                            for (const r of this.codewords) null != r ? t.format("%3d: %3d|%3d%n", e++, r.getRowNumber(), r.getValue()) : t.format("%3d:    |   %n", e++);
                            return t.toString()
                        }
                    }
                    Ye.MAX_NEARBY_DISTANCE = 5;
                    class Xe {
                        constructor() {
                            this.values = new Map
                        }
                        setValue(t) {
                            t = Math.trunc(t);
                            let e = this.values.get(t);
                            null == e && (e = 0), e++, this.values.set(t, e)
                        }
                        getValue() {
                            let t = -1,
                                e = new Array;
                            for (const [r, n] of this.values.entries()) {
                                const i = {
                                    getKey: () => r,
                                    getValue: () => n
                                };
                                i.getValue() > t ? (t = i.getValue(), e = [], e.push(i.getKey())) : i.getValue() === t && e.push(i.getKey())
                            }
                            return Pe.toIntArray(e)
                        }
                        getConfidence(t) {
                            return this.values.get(t)
                        }
                    }
                    class We extends Ye {
                        constructor(t, e) {
                            super(t), this._isLeft = e
                        }
                        setRowNumbers() {
                            for (let t of this.getCodewords()) null != t && t.setRowNumberAsRowIndicatorColumn()
                        }
                        adjustCompleteIndicatorColumnRowNumbers(t) {
                            let e = this.getCodewords();
                            this.setRowNumbers(), this.removeIncorrectCodewords(e, t);
                            let r = this.getBoundingBox(),
                                n = this._isLeft ? r.getTopLeft() : r.getTopRight(),
                                i = this._isLeft ? r.getBottomLeft() : r.getBottomRight(),
                                o = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
                                s = this.imageRowToCodewordIndex(Math.trunc(i.getY())),
                                a = -1,
                                c = 1,
                                l = 0;
                            for (let r = o; r < s; r++) {
                                if (null == e[r]) continue;
                                let n = e[r],
                                    i = n.getRowNumber() - a;
                                if (0 === i) l++;
                                else if (1 === i) c = Math.max(c, l), l = 1, a = n.getRowNumber();
                                else if (i < 0 || n.getRowNumber() >= t.getRowCount() || i > r) e[r] = null;
                                else {
                                    let t;
                                    t = c > 2 ? (c - 2) * i : i;
                                    let o = t >= r;
                                    for (let n = 1; n <= t && !o; n++) o = null != e[r - n];
                                    o ? e[r] = null : (a = n.getRowNumber(), l = 1)
                                }
                            }
                        }
                        getRowHeights() {
                            let t = this.getBarcodeMetadata();
                            if (null == t) return null;
                            this.adjustIncompleteIndicatorColumnRowNumbers(t);
                            let e = new Int32Array(t.getRowCount());
                            for (let t of this.getCodewords())
                                if (null != t) {
                                    let r = t.getRowNumber();
                                    if (r >= e.length) continue;
                                    e[r]++
                                } return e
                        }
                        adjustIncompleteIndicatorColumnRowNumbers(t) {
                            let e = this.getBoundingBox(),
                                r = this._isLeft ? e.getTopLeft() : e.getTopRight(),
                                n = this._isLeft ? e.getBottomLeft() : e.getBottomRight(),
                                i = this.imageRowToCodewordIndex(Math.trunc(r.getY())),
                                o = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
                                s = this.getCodewords(),
                                a = -1;
                            for (let e = i; e < o; e++) {
                                if (null == s[e]) continue;
                                let r = s[e];
                                r.setRowNumberAsRowIndicatorColumn();
                                let n = r.getRowNumber() - a;
                                0 === n || (1 === n ? a = r.getRowNumber() : r.getRowNumber() >= t.getRowCount() ? s[e] = null : a = r.getRowNumber())
                            }
                        }
                        getBarcodeMetadata() {
                            let t = this.getCodewords(),
                                e = new Xe,
                                r = new Xe,
                                n = new Xe,
                                i = new Xe;
                            for (let o of t) {
                                if (null == o) continue;
                                o.setRowNumberAsRowIndicatorColumn();
                                let t = o.getValue() % 30,
                                    s = o.getRowNumber();
                                switch (this._isLeft || (s += 2), s % 3) {
                                    case 0:
                                        r.setValue(3 * t + 1);
                                        break;
                                    case 1:
                                        i.setValue(t / 3), n.setValue(t % 3);
                                        break;
                                    case 2:
                                        e.setValue(t + 1)
                                }
                            }
                            if (0 === e.getValue().length || 0 === r.getValue().length || 0 === n.getValue().length || 0 === i.getValue().length || e.getValue()[0] < 1 || r.getValue()[0] + n.getValue()[0] < Pe.MIN_ROWS_IN_BARCODE || r.getValue()[0] + n.getValue()[0] > Pe.MAX_ROWS_IN_BARCODE) return null;
                            let o = new ze(e.getValue()[0], r.getValue()[0], n.getValue()[0], i.getValue()[0]);
                            return this.removeIncorrectCodewords(t, o), o
                        }
                        removeIncorrectCodewords(t, e) {
                            for (let r = 0; r < t.length; r++) {
                                let n = t[r];
                                if (null == t[r]) continue;
                                let i = n.getValue() % 30,
                                    o = n.getRowNumber();
                                if (o > e.getRowCount()) t[r] = null;
                                else switch (this._isLeft || (o += 2), o % 3) {
                                    case 0:
                                        3 * i + 1 !== e.getRowCountUpperPart() && (t[r] = null);
                                        break;
                                    case 1:
                                        Math.trunc(i / 3) === e.getErrorCorrectionLevel() && i % 3 === e.getRowCountLowerPart() || (t[r] = null);
                                        break;
                                    case 2:
                                        i + 1 !== e.getColumnCount() && (t[r] = null)
                                }
                            }
                        }
                        isLeft() {
                            return this._isLeft
                        }
                        toString() {
                            return "IsLeft: " + this._isLeft + "\n" + super.toString()
                        }
                    }
                    class je {
                        constructor(t, e) {
                            this.ADJUST_ROW_NUMBER_SKIP = 2, this.barcodeMetadata = t, this.barcodeColumnCount = t.getColumnCount(), this.boundingBox = e, this.detectionResultColumns = new Array(this.barcodeColumnCount + 2)
                        }
                        getDetectionResultColumns() {
                            this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]), this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
                            let t, e = Pe.MAX_CODEWORDS_IN_BARCODE;
                            do {
                                t = e, e = this.adjustRowNumbersAndGetCount()
                            } while (e > 0 && e < t);
                            return this.detectionResultColumns
                        }
                        adjustIndicatorColumnRowNumbers(t) {
                            null != t && t.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata)
                        }
                        adjustRowNumbersAndGetCount() {
                            let t = this.adjustRowNumbersByRow();
                            if (0 === t) return 0;
                            for (let t = 1; t < this.barcodeColumnCount + 1; t++) {
                                let e = this.detectionResultColumns[t].getCodewords();
                                for (let r = 0; r < e.length; r++) null != e[r] && (e[r].hasValidRowNumber() || this.adjustRowNumbers(t, r, e))
                            }
                            return t
                        }
                        adjustRowNumbersByRow() {
                            return this.adjustRowNumbersFromBothRI(), this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI()
                        }
                        adjustRowNumbersFromBothRI() {
                            if (null == this.detectionResultColumns[0] || null == this.detectionResultColumns[this.barcodeColumnCount + 1]) return;
                            let t = this.detectionResultColumns[0].getCodewords(),
                                e = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
                            for (let r = 0; r < t.length; r++)
                                if (null != t[r] && null != e[r] && t[r].getRowNumber() === e[r].getRowNumber())
                                    for (let e = 1; e <= this.barcodeColumnCount; e++) {
                                        let n = this.detectionResultColumns[e].getCodewords()[r];
                                        null != n && (n.setRowNumber(t[r].getRowNumber()), n.hasValidRowNumber() || (this.detectionResultColumns[e].getCodewords()[r] = null))
                                    }
                        }
                        adjustRowNumbersFromRRI() {
                            if (null == this.detectionResultColumns[this.barcodeColumnCount + 1]) return 0;
                            let t = 0,
                                e = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
                            for (let r = 0; r < e.length; r++) {
                                if (null == e[r]) continue;
                                let n = e[r].getRowNumber(),
                                    i = 0;
                                for (let e = this.barcodeColumnCount + 1; e > 0 && i < this.ADJUST_ROW_NUMBER_SKIP; e--) {
                                    let o = this.detectionResultColumns[e].getCodewords()[r];
                                    null != o && (i = je.adjustRowNumberIfValid(n, i, o), o.hasValidRowNumber() || t++)
                                }
                            }
                            return t
                        }
                        adjustRowNumbersFromLRI() {
                            if (null == this.detectionResultColumns[0]) return 0;
                            let t = 0,
                                e = this.detectionResultColumns[0].getCodewords();
                            for (let r = 0; r < e.length; r++) {
                                if (null == e[r]) continue;
                                let n = e[r].getRowNumber(),
                                    i = 0;
                                for (let e = 1; e < this.barcodeColumnCount + 1 && i < this.ADJUST_ROW_NUMBER_SKIP; e++) {
                                    let o = this.detectionResultColumns[e].getCodewords()[r];
                                    null != o && (i = je.adjustRowNumberIfValid(n, i, o), o.hasValidRowNumber() || t++)
                                }
                            }
                            return t
                        }
                        static adjustRowNumberIfValid(t, e, r) {
                            return null == r || r.hasValidRowNumber() || (r.isValidRowNumber(t) ? (r.setRowNumber(t), e = 0) : ++e), e
                        }
                        adjustRowNumbers(t, e, r) {
                            if (!this.detectionResultColumns[t - 1]) return;
                            let n = r[e],
                                i = this.detectionResultColumns[t - 1].getCodewords(),
                                o = i;
                            null != this.detectionResultColumns[t + 1] && (o = this.detectionResultColumns[t + 1].getCodewords());
                            let s = new Array(14);
                            s[2] = i[e], s[3] = o[e], e > 0 && (s[0] = r[e - 1], s[4] = i[e - 1], s[5] = o[e - 1]), e > 1 && (s[8] = r[e - 2], s[10] = i[e - 2], s[11] = o[e - 2]), e < r.length - 1 && (s[1] = r[e + 1], s[6] = i[e + 1], s[7] = o[e + 1]), e < r.length - 2 && (s[9] = r[e + 2], s[12] = i[e + 2], s[13] = o[e + 2]);
                            for (let t of s)
                                if (je.adjustRowNumber(n, t)) return
                        }
                        static adjustRowNumber(t, e) {
                            return !(null == e || !e.hasValidRowNumber() || e.getBucket() !== t.getBucket() || (t.setRowNumber(e.getRowNumber()), 0))
                        }
                        getBarcodeColumnCount() {
                            return this.barcodeColumnCount
                        }
                        getBarcodeRowCount() {
                            return this.barcodeMetadata.getRowCount()
                        }
                        getBarcodeECLevel() {
                            return this.barcodeMetadata.getErrorCorrectionLevel()
                        }
                        setBoundingBox(t) {
                            this.boundingBox = t
                        }
                        getBoundingBox() {
                            return this.boundingBox
                        }
                        setDetectionResultColumn(t, e) {
                            this.detectionResultColumns[t] = e
                        }
                        getDetectionResultColumn(t) {
                            return this.detectionResultColumns[t]
                        }
                        toString() {
                            let t = this.detectionResultColumns[0];
                            null == t && (t = this.detectionResultColumns[this.barcodeColumnCount + 1]);
                            let e = new Ge;
                            for (let r = 0; r < t.getCodewords().length; r++) {
                                e.format("CW %3d:", r);
                                for (let t = 0; t < this.barcodeColumnCount + 2; t++) {
                                    if (null == this.detectionResultColumns[t]) {
                                        e.format("    |   ");
                                        continue
                                    }
                                    let n = this.detectionResultColumns[t].getCodewords()[r];
                                    null != n ? e.format(" %3d|%3d", n.getRowNumber(), n.getValue()) : e.format("    |   ")
                                }
                                e.format("%n")
                            }
                            return e.toString()
                        }
                    }
                    class Ze {
                        constructor(t, e, r, n) {
                            this.rowNumber = Ze.BARCODE_ROW_UNKNOWN, this.startX = Math.trunc(t), this.endX = Math.trunc(e), this.bucket = Math.trunc(r), this.value = Math.trunc(n)
                        }
                        hasValidRowNumber() {
                            return this.isValidRowNumber(this.rowNumber)
                        }
                        isValidRowNumber(t) {
                            return t !== Ze.BARCODE_ROW_UNKNOWN && this.bucket === t % 3 * 3
                        }
                        setRowNumberAsRowIndicatorColumn() {
                            this.rowNumber = Math.trunc(3 * Math.trunc(this.value / 30) + Math.trunc(this.bucket / 3))
                        }
                        getWidth() {
                            return this.endX - this.startX
                        }
                        getStartX() {
                            return this.startX
                        }
                        getEndX() {
                            return this.endX
                        }
                        getBucket() {
                            return this.bucket
                        }
                        getValue() {
                            return this.value
                        }
                        getRowNumber() {
                            return this.rowNumber
                        }
                        setRowNumber(t) {
                            this.rowNumber = t
                        }
                        toString() {
                            return this.rowNumber + "|" + this.value
                        }
                    }
                    Ze.BARCODE_ROW_UNKNOWN = -1;
                    class Qe {
                        static initialize() {
                            for (let t = 0; t < Pe.SYMBOL_TABLE.length; t++) {
                                let e = Pe.SYMBOL_TABLE[t],
                                    r = 1 & e;
                                for (let n = 0; n < Pe.BARS_IN_MODULE; n++) {
                                    let i = 0;
                                    for (;
                                        (1 & e) === r;) i += 1, e >>= 1;
                                    r = 1 & e, Qe.RATIOS_TABLE[t] || (Qe.RATIOS_TABLE[t] = new Array(Pe.BARS_IN_MODULE)), Qe.RATIOS_TABLE[t][Pe.BARS_IN_MODULE - n - 1] = Math.fround(i / Pe.MODULES_IN_CODEWORD)
                                }
                            }
                            this.bSymbolTableReady = !0
                        }
                        static getDecodedValue(t) {
                            let e = Qe.getDecodedCodewordValue(Qe.sampleBitCounts(t));
                            return -1 !== e ? e : Qe.getClosestDecodedValue(t)
                        }
                        static sampleBitCounts(t) {
                            let e = rt.sum(t),
                                r = new Int32Array(Pe.BARS_IN_MODULE),
                                n = 0,
                                i = 0;
                            for (let o = 0; o < Pe.MODULES_IN_CODEWORD; o++) {
                                let s = e / (2 * Pe.MODULES_IN_CODEWORD) + o * e / Pe.MODULES_IN_CODEWORD;
                                i + t[n] <= s && (i += t[n], n++), r[n]++
                            }
                            return r
                        }
                        static getDecodedCodewordValue(t) {
                            let e = Qe.getBitValue(t);
                            return -1 === Pe.getCodeword(e) ? -1 : e
                        }
                        static getBitValue(t) {
                            let e = 0;
                            for (let r = 0; r < t.length; r++)
                                for (let n = 0; n < t[r]; n++) e = e << 1 | (r % 2 == 0 ? 1 : 0);
                            return Math.trunc(e)
                        }
                        static getClosestDecodedValue(t) {
                            let e = rt.sum(t),
                                r = new Array(Pe.BARS_IN_MODULE);
                            if (e > 1)
                                for (let n = 0; n < r.length; n++) r[n] = Math.fround(t[n] / e);
                            let n = nt.MAX_VALUE,
                                i = -1;
                            this.bSymbolTableReady || Qe.initialize();
                            for (let t = 0; t < Qe.RATIOS_TABLE.length; t++) {
                                let e = 0,
                                    o = Qe.RATIOS_TABLE[t];
                                for (let t = 0; t < Pe.BARS_IN_MODULE; t++) {
                                    let i = Math.fround(o[t] - r[t]);
                                    if (e += Math.fround(i * i), e >= n) break
                                }
                                e < n && (n = e, i = Pe.SYMBOL_TABLE[t])
                            }
                            return i
                        }
                    }
                    Qe.bSymbolTableReady = !1, Qe.RATIOS_TABLE = new Array(Pe.SYMBOL_TABLE.length).map((t => new Array(Pe.BARS_IN_MODULE)));
                    class Ke {
                        constructor() {
                            this.segmentCount = -1, this.fileSize = -1, this.timestamp = -1, this.checksum = -1
                        }
                        getSegmentIndex() {
                            return this.segmentIndex
                        }
                        setSegmentIndex(t) {
                            this.segmentIndex = t
                        }
                        getFileId() {
                            return this.fileId
                        }
                        setFileId(t) {
                            this.fileId = t
                        }
                        getOptionalData() {
                            return this.optionalData
                        }
                        setOptionalData(t) {
                            this.optionalData = t
                        }
                        isLastSegment() {
                            return this.lastSegment
                        }
                        setLastSegment(t) {
                            this.lastSegment = t
                        }
                        getSegmentCount() {
                            return this.segmentCount
                        }
                        setSegmentCount(t) {
                            this.segmentCount = t
                        }
                        getSender() {
                            return this.sender || null
                        }
                        setSender(t) {
                            this.sender = t
                        }
                        getAddressee() {
                            return this.addressee || null
                        }
                        setAddressee(t) {
                            this.addressee = t
                        }
                        getFileName() {
                            return this.fileName
                        }
                        setFileName(t) {
                            this.fileName = t
                        }
                        getFileSize() {
                            return this.fileSize
                        }
                        setFileSize(t) {
                            this.fileSize = t
                        }
                        getChecksum() {
                            return this.checksum
                        }
                        setChecksum(t) {
                            this.checksum = t
                        }
                        getTimestamp() {
                            return this.timestamp
                        }
                        setTimestamp(t) {
                            this.timestamp = t
                        }
                    }
                    class qe {
                        static parseLong(t, e = undefined) {
                            return parseInt(t, e)
                        }
                    }
                    class Je extends s {}
                    Je.kind = "NullPointerException";
                    class $e {
                        writeBytes(t) {
                            this.writeBytesOffset(t, 0, t.length)
                        }
                        writeBytesOffset(t, e, r) {
                            if (null == t) throw new Je;
                            if (e < 0 || e > t.length || r < 0 || e + r > t.length || e + r < 0) throw new f;
                            if (0 !== r)
                                for (let n = 0; n < r; n++) this.write(t[e + n])
                        }
                        flush() {}
                        close() {}
                    }
                    class tr extends s {}
                    class er extends $e {
                        constructor(t = 32) {
                            if (super(), this.count = 0, t < 0) throw new c("Negative initial size: " + t);
                            this.buf = new Uint8Array(t)
                        }
                        ensureCapacity(t) {
                            t - this.buf.length > 0 && this.grow(t)
                        }
                        grow(t) {
                            let e = this.buf.length << 1;
                            if (e - t < 0 && (e = t), e < 0) {
                                if (t < 0) throw new tr;
                                e = m.MAX_VALUE
                            }
                            this.buf = w.copyOfUint8Array(this.buf, e)
                        }
                        write(t) {
                            this.ensureCapacity(this.count + 1), this.buf[this.count] = t, this.count += 1
                        }
                        writeBytesOffset(t, e, r) {
                            if (e < 0 || e > t.length || r < 0 || e + r - t.length > 0) throw new f;
                            this.ensureCapacity(this.count + r), d.arraycopy(t, e, this.buf, this.count, r), this.count += r
                        }
                        writeTo(t) {
                            t.writeBytesOffset(this.buf, 0, this.count)
                        }
                        reset() {
                            this.count = 0
                        }
                        toByteArray() {
                            return w.copyOfUint8Array(this.buf, this.count)
                        }
                        size() {
                            return this.count
                        }
                        toString(t) {
                            return t ? "string" == typeof t ? this.toString_string(t) : this.toString_number(t) : this.toString_void()
                        }
                        toString_void() {
                            return new String(this.buf).toString()
                        }
                        toString_string(t) {
                            return new String(this.buf).toString()
                        }
                        toString_number(t) {
                            return new String(this.buf).toString()
                        }
                        close() {}
                    }

                    function rr() {
                        if ("undefined" != typeof window) return window.BigInt || null;
                        if (void 0 !== r.g) return r.g.BigInt || null;
                        if ("undefined" != typeof self) return self.BigInt || null;
                        throw new Error("Can't search globals for BigInt!")
                    }
                    let nr;

                    function ir(t) {
                        if (void 0 === nr && (nr = rr()), null === nr) throw new Error("BigInt is not supported!");
                        return nr(t)
                    }! function(t) {
                        t[t.ALPHA = 0] = "ALPHA", t[t.LOWER = 1] = "LOWER", t[t.MIXED = 2] = "MIXED", t[t.PUNCT = 3] = "PUNCT", t[t.ALPHA_SHIFT = 4] = "ALPHA_SHIFT", t[t.PUNCT_SHIFT = 5] = "PUNCT_SHIFT"
                    }(X || (X = {}));
                    class or {
                        static decode(t, e) {
                            let r = new y(""),
                                n = I.ISO8859_1;
                            r.enableDecoding(n);
                            let i = 1,
                                o = t[i++],
                                s = new Ke;
                            for (; i < t[0];) {
                                switch (o) {
                                    case or.TEXT_COMPACTION_MODE_LATCH:
                                        i = or.textCompaction(t, i, r);
                                        break;
                                    case or.BYTE_COMPACTION_MODE_LATCH:
                                    case or.BYTE_COMPACTION_MODE_LATCH_6:
                                        i = or.byteCompaction(o, t, n, i, r);
                                        break;
                                    case or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                        r.append(t[i++]);
                                        break;
                                    case or.NUMERIC_COMPACTION_MODE_LATCH:
                                        i = or.numericCompaction(t, i, r);
                                        break;
                                    case or.ECI_CHARSET:
                                        I.getCharacterSetECIByValue(t[i++]);
                                        break;
                                    case or.ECI_GENERAL_PURPOSE:
                                        i += 2;
                                        break;
                                    case or.ECI_USER_DEFINED:
                                        i++;
                                        break;
                                    case or.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                        i = or.decodeMacroBlock(t, i, s);
                                        break;
                                    case or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                    case or.MACRO_PDF417_TERMINATOR:
                                        throw new E;
                                    default:
                                        i--, i = or.textCompaction(t, i, r)
                                }
                                if (!(i < t.length)) throw E.getFormatInstance();
                                o = t[i++]
                            }
                            if (0 === r.length()) throw E.getFormatInstance();
                            let a = new j(null, r.toString(), null, e);
                            return a.setOther(s), a
                        }
                        static decodeMacroBlock(t, e, r) {
                            if (e + or.NUMBER_OF_SEQUENCE_CODEWORDS > t[0]) throw E.getFormatInstance();
                            let n = new Int32Array(or.NUMBER_OF_SEQUENCE_CODEWORDS);
                            for (let r = 0; r < or.NUMBER_OF_SEQUENCE_CODEWORDS; r++, e++) n[r] = t[e];
                            r.setSegmentIndex(m.parseInt(or.decodeBase900toBase10(n, or.NUMBER_OF_SEQUENCE_CODEWORDS)));
                            let i = new y;
                            e = or.textCompaction(t, e, i), r.setFileId(i.toString());
                            let o = -1;
                            for (t[e] === or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (o = e + 1); e < t[0];) switch (t[e]) {
                                case or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                    switch (t[++e]) {
                                        case or.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                                            let n = new y;
                                            e = or.textCompaction(t, e + 1, n), r.setFileName(n.toString());
                                            break;
                                        case or.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                                            let i = new y;
                                            e = or.textCompaction(t, e + 1, i), r.setSender(i.toString());
                                            break;
                                        case or.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                                            let o = new y;
                                            e = or.textCompaction(t, e + 1, o), r.setAddressee(o.toString());
                                            break;
                                        case or.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                                            let s = new y;
                                            e = or.numericCompaction(t, e + 1, s), r.setSegmentCount(m.parseInt(s.toString()));
                                            break;
                                        case or.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                                            let a = new y;
                                            e = or.numericCompaction(t, e + 1, a), r.setTimestamp(qe.parseLong(a.toString()));
                                            break;
                                        case or.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                                            let c = new y;
                                            e = or.numericCompaction(t, e + 1, c), r.setChecksum(m.parseInt(c.toString()));
                                            break;
                                        case or.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                                            let l = new y;
                                            e = or.numericCompaction(t, e + 1, l), r.setFileSize(qe.parseLong(l.toString()));
                                            break;
                                        default:
                                            throw E.getFormatInstance()
                                    }
                                    break;
                                case or.MACRO_PDF417_TERMINATOR:
                                    e++, r.setLastSegment(!0);
                                    break;
                                default:
                                    throw E.getFormatInstance()
                            }
                            if (-1 !== o) {
                                let n = e - o;
                                r.isLastSegment() && n--, r.setOptionalData(w.copyOfRange(t, o, o + n))
                            }
                            return e
                        }
                        static textCompaction(t, e, r) {
                            let n = new Int32Array(2 * (t[0] - e)),
                                i = new Int32Array(2 * (t[0] - e)),
                                o = 0,
                                s = !1;
                            for (; e < t[0] && !s;) {
                                let r = t[e++];
                                if (r < or.TEXT_COMPACTION_MODE_LATCH) n[o] = r / 30, n[o + 1] = r % 30, o += 2;
                                else switch (r) {
                                    case or.TEXT_COMPACTION_MODE_LATCH:
                                        n[o++] = or.TEXT_COMPACTION_MODE_LATCH;
                                        break;
                                    case or.BYTE_COMPACTION_MODE_LATCH:
                                    case or.BYTE_COMPACTION_MODE_LATCH_6:
                                    case or.NUMERIC_COMPACTION_MODE_LATCH:
                                    case or.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                    case or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                    case or.MACRO_PDF417_TERMINATOR:
                                        e--, s = !0;
                                        break;
                                    case or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                        n[o] = or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE, r = t[e++], i[o] = r, o++
                                }
                            }
                            return or.decodeTextCompaction(n, i, o, r), e
                        }
                        static decodeTextCompaction(t, e, r, n) {
                            let i = X.ALPHA,
                                o = X.ALPHA,
                                s = 0;
                            for (; s < r;) {
                                let r = t[s],
                                    a = "";
                                switch (i) {
                                    case X.ALPHA:
                                        if (r < 26) a = String.fromCharCode(65 + r);
                                        else switch (r) {
                                            case 26:
                                                a = " ";
                                                break;
                                            case or.LL:
                                                i = X.LOWER;
                                                break;
                                            case or.ML:
                                                i = X.MIXED;
                                                break;
                                            case or.PS:
                                                o = i, i = X.PUNCT_SHIFT;
                                                break;
                                            case or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                                n.append(e[s]);
                                                break;
                                            case or.TEXT_COMPACTION_MODE_LATCH:
                                                i = X.ALPHA
                                        }
                                        break;
                                    case X.LOWER:
                                        if (r < 26) a = String.fromCharCode(97 + r);
                                        else switch (r) {
                                            case 26:
                                                a = " ";
                                                break;
                                            case or.AS:
                                                o = i, i = X.ALPHA_SHIFT;
                                                break;
                                            case or.ML:
                                                i = X.MIXED;
                                                break;
                                            case or.PS:
                                                o = i, i = X.PUNCT_SHIFT;
                                                break;
                                            case or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                                n.append(e[s]);
                                                break;
                                            case or.TEXT_COMPACTION_MODE_LATCH:
                                                i = X.ALPHA
                                        }
                                        break;
                                    case X.MIXED:
                                        if (r < or.PL) a = or.MIXED_CHARS[r];
                                        else switch (r) {
                                            case or.PL:
                                                i = X.PUNCT;
                                                break;
                                            case 26:
                                                a = " ";
                                                break;
                                            case or.LL:
                                                i = X.LOWER;
                                                break;
                                            case or.AL:
                                                i = X.ALPHA;
                                                break;
                                            case or.PS:
                                                o = i, i = X.PUNCT_SHIFT;
                                                break;
                                            case or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                                n.append(e[s]);
                                                break;
                                            case or.TEXT_COMPACTION_MODE_LATCH:
                                                i = X.ALPHA
                                        }
                                        break;
                                    case X.PUNCT:
                                        if (r < or.PAL) a = or.PUNCT_CHARS[r];
                                        else switch (r) {
                                            case or.PAL:
                                                i = X.ALPHA;
                                                break;
                                            case or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                                n.append(e[s]);
                                                break;
                                            case or.TEXT_COMPACTION_MODE_LATCH:
                                                i = X.ALPHA
                                        }
                                        break;
                                    case X.ALPHA_SHIFT:
                                        if (i = o, r < 26) a = String.fromCharCode(65 + r);
                                        else switch (r) {
                                            case 26:
                                                a = " ";
                                                break;
                                            case or.TEXT_COMPACTION_MODE_LATCH:
                                                i = X.ALPHA
                                        }
                                        break;
                                    case X.PUNCT_SHIFT:
                                        if (i = o, r < or.PAL) a = or.PUNCT_CHARS[r];
                                        else switch (r) {
                                            case or.PAL:
                                                i = X.ALPHA;
                                                break;
                                            case or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                                n.append(e[s]);
                                                break;
                                            case or.TEXT_COMPACTION_MODE_LATCH:
                                                i = X.ALPHA
                                        }
                                }
                                "" !== a && n.append(a), s++
                            }
                        }
                        static byteCompaction(t, e, r, n, i) {
                            let o = new er,
                                s = 0,
                                a = 0,
                                c = !1;
                            switch (t) {
                                case or.BYTE_COMPACTION_MODE_LATCH:
                                    let t = new Int32Array(6),
                                        r = e[n++];
                                    for (; n < e[0] && !c;) switch (t[s++] = r, a = 900 * a + r, r = e[n++], r) {
                                        case or.TEXT_COMPACTION_MODE_LATCH:
                                        case or.BYTE_COMPACTION_MODE_LATCH:
                                        case or.NUMERIC_COMPACTION_MODE_LATCH:
                                        case or.BYTE_COMPACTION_MODE_LATCH_6:
                                        case or.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                        case or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                        case or.MACRO_PDF417_TERMINATOR:
                                            n--, c = !0;
                                            break;
                                        default:
                                            if (s % 5 == 0 && s > 0) {
                                                for (let t = 0; t < 6; ++t) o.write(Number(ir(a) >> ir(8 * (5 - t))));
                                                a = 0, s = 0
                                            }
                                    }
                                    n === e[0] && r < or.TEXT_COMPACTION_MODE_LATCH && (t[s++] = r);
                                    for (let e = 0; e < s; e++) o.write(t[e]);
                                    break;
                                case or.BYTE_COMPACTION_MODE_LATCH_6:
                                    for (; n < e[0] && !c;) {
                                        let t = e[n++];
                                        if (t < or.TEXT_COMPACTION_MODE_LATCH) s++, a = 900 * a + t;
                                        else switch (t) {
                                            case or.TEXT_COMPACTION_MODE_LATCH:
                                            case or.BYTE_COMPACTION_MODE_LATCH:
                                            case or.NUMERIC_COMPACTION_MODE_LATCH:
                                            case or.BYTE_COMPACTION_MODE_LATCH_6:
                                            case or.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                            case or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                            case or.MACRO_PDF417_TERMINATOR:
                                                n--, c = !0
                                        }
                                        if (s % 5 == 0 && s > 0) {
                                            for (let t = 0; t < 6; ++t) o.write(Number(ir(a) >> ir(8 * (5 - t))));
                                            a = 0, s = 0
                                        }
                                    }
                            }
                            return i.append(_.decode(o.toByteArray(), r)), n
                        }
                        static numericCompaction(t, e, r) {
                            let n = 0,
                                i = !1,
                                o = new Int32Array(or.MAX_NUMERIC_CODEWORDS);
                            for (; e < t[0] && !i;) {
                                let s = t[e++];
                                if (e === t[0] && (i = !0), s < or.TEXT_COMPACTION_MODE_LATCH) o[n] = s, n++;
                                else switch (s) {
                                    case or.TEXT_COMPACTION_MODE_LATCH:
                                    case or.BYTE_COMPACTION_MODE_LATCH:
                                    case or.BYTE_COMPACTION_MODE_LATCH_6:
                                    case or.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                    case or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                    case or.MACRO_PDF417_TERMINATOR:
                                        e--, i = !0
                                }(n % or.MAX_NUMERIC_CODEWORDS == 0 || s === or.NUMERIC_COMPACTION_MODE_LATCH || i) && n > 0 && (r.append(or.decodeBase900toBase10(o, n)), n = 0)
                            }
                            return e
                        }
                        static decodeBase900toBase10(t, e) {
                            let r = ir(0);
                            for (let n = 0; n < e; n++) r += or.EXP900[e - n - 1] * ir(t[n]);
                            let n = r.toString();
                            if ("1" !== n.charAt(0)) throw new E;
                            return n.substring(1)
                        }
                    }
                    or.TEXT_COMPACTION_MODE_LATCH = 900, or.BYTE_COMPACTION_MODE_LATCH = 901, or.NUMERIC_COMPACTION_MODE_LATCH = 902, or.BYTE_COMPACTION_MODE_LATCH_6 = 924, or.ECI_USER_DEFINED = 925, or.ECI_GENERAL_PURPOSE = 926, or.ECI_CHARSET = 927, or.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928, or.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923, or.MACRO_PDF417_TERMINATOR = 922, or.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913, or.MAX_NUMERIC_CODEWORDS = 15, or.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0, or.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1, or.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2, or.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3, or.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4, or.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5, or.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6, or.PL = 25, or.LL = 27, or.AS = 27, or.ML = 28, or.AL = 28, or.PS = 29, or.PAL = 29, or.PUNCT_CHARS = ";<>@[\\]_`~!\r\t,:\n-.$/\"|*()?{}'", or.MIXED_CHARS = "0123456789&\r\t,:#-.$/+%*=^", or.EXP900 = rr() ? function() {
                        let t = [];
                        t[0] = ir(1);
                        let e = ir(900);
                        t[1] = e;
                        for (let r = 2; r < 16; r++) t[r] = t[r - 1] * e;
                        return t
                    }() : [], or.NUMBER_OF_SEQUENCE_CODEWORDS = 2;
                    class sr {
                        constructor() {}
                        static decode(t, e, r, n, i, o, s) {
                            let a, c = new Ve(t, e, r, n, i),
                                l = null,
                                h = null;
                            for (let r = !0;; r = !1) {
                                if (null != e && (l = sr.getRowIndicatorColumn(t, c, e, !0, o, s)), null != n && (h = sr.getRowIndicatorColumn(t, c, n, !1, o, s)), a = sr.merge(l, h), null == a) throw D.getNotFoundInstance();
                                let i = a.getBoundingBox();
                                if (!r || null == i || !(i.getMinY() < c.getMinY() || i.getMaxY() > c.getMaxY())) break;
                                c = i
                            }
                            a.setBoundingBox(c);
                            let u = a.getBarcodeColumnCount() + 1;
                            a.setDetectionResultColumn(0, l), a.setDetectionResultColumn(u, h);
                            let d = null != l;
                            for (let e = 1; e <= u; e++) {
                                let r, n = d ? e : u - e;
                                if (void 0 !== a.getDetectionResultColumn(n)) continue;
                                r = 0 === n || n === u ? new We(c, 0 === n) : new Ye(c), a.setDetectionResultColumn(n, r);
                                let i = -1,
                                    l = i;
                                for (let e = c.getMinY(); e <= c.getMaxY(); e++) {
                                    if (i = sr.getStartColumn(a, n, e, d), i < 0 || i > c.getMaxX()) {
                                        if (-1 === l) continue;
                                        i = l
                                    }
                                    let h = sr.detectCodeword(t, c.getMinX(), c.getMaxX(), d, i, e, o, s);
                                    null != h && (r.setCodeword(e, h), l = i, o = Math.min(o, h.getWidth()), s = Math.max(s, h.getWidth()))
                                }
                            }
                            return sr.createDecoderResult(a)
                        }
                        static merge(t, e) {
                            if (null == t && null == e) return null;
                            let r = sr.getBarcodeMetadata(t, e);
                            if (null == r) return null;
                            let n = Ve.merge(sr.adjustBoundingBox(t), sr.adjustBoundingBox(e));
                            return new je(r, n)
                        }
                        static adjustBoundingBox(t) {
                            if (null == t) return null;
                            let e = t.getRowHeights();
                            if (null == e) return null;
                            let r = sr.getMax(e),
                                n = 0;
                            for (let t of e)
                                if (n += r - t, t > 0) break;
                            let i = t.getCodewords();
                            for (let t = 0; n > 0 && null == i[t]; t++) n--;
                            let o = 0;
                            for (let t = e.length - 1; t >= 0 && (o += r - e[t], !(e[t] > 0)); t--);
                            for (let t = i.length - 1; o > 0 && null == i[t]; t--) o--;
                            return t.getBoundingBox().addMissingRows(n, o, t.isLeft())
                        }
                        static getMax(t) {
                            let e = -1;
                            for (let r of t) e = Math.max(e, r);
                            return e
                        }
                        static getBarcodeMetadata(t, e) {
                            let r, n;
                            return null == t || null == (r = t.getBarcodeMetadata()) ? null == e ? null : e.getBarcodeMetadata() : null == e || null == (n = e.getBarcodeMetadata()) ? r : r.getColumnCount() !== n.getColumnCount() && r.getErrorCorrectionLevel() !== n.getErrorCorrectionLevel() && r.getRowCount() !== n.getRowCount() ? null : r
                        }
                        static getRowIndicatorColumn(t, e, r, n, i, o) {
                            let s = new We(e, n);
                            for (let a = 0; a < 2; a++) {
                                let c = 0 === a ? 1 : -1,
                                    l = Math.trunc(Math.trunc(r.getX()));
                                for (let a = Math.trunc(Math.trunc(r.getY())); a <= e.getMaxY() && a >= e.getMinY(); a += c) {
                                    let e = sr.detectCodeword(t, 0, t.getWidth(), n, l, a, i, o);
                                    null != e && (s.setCodeword(a, e), l = n ? e.getStartX() : e.getEndX())
                                }
                            }
                            return s
                        }
                        static adjustCodewordCount(t, e) {
                            let r = e[0][1],
                                n = r.getValue(),
                                i = t.getBarcodeColumnCount() * t.getBarcodeRowCount() - sr.getNumberOfECCodeWords(t.getBarcodeECLevel());
                            if (0 === n.length) {
                                if (i < 1 || i > Pe.MAX_CODEWORDS_IN_BARCODE) throw D.getNotFoundInstance();
                                r.setValue(i)
                            } else n[0] !== i && r.setValue(i)
                        }
                        static createDecoderResult(t) {
                            let e = sr.createBarcodeMatrix(t);
                            sr.adjustCodewordCount(t, e);
                            let r = new Array,
                                n = new Int32Array(t.getBarcodeRowCount() * t.getBarcodeColumnCount()),
                                i = [],
                                o = new Array;
                            for (let s = 0; s < t.getBarcodeRowCount(); s++)
                                for (let a = 0; a < t.getBarcodeColumnCount(); a++) {
                                    let c = e[s][a + 1].getValue(),
                                        l = s * t.getBarcodeColumnCount() + a;
                                    0 === c.length ? r.push(l) : 1 === c.length ? n[l] = c[0] : (o.push(l), i.push(c))
                                }
                            let s = new Array(i.length);
                            for (let t = 0; t < s.length; t++) s[t] = i[t];
                            return sr.createDecoderResultFromAmbiguousValues(t.getBarcodeECLevel(), n, Pe.toIntArray(r), Pe.toIntArray(o), s)
                        }
                        static createDecoderResultFromAmbiguousValues(t, e, r, n, i) {
                            let o = new Int32Array(n.length),
                                s = 100;
                            for (; s-- > 0;) {
                                for (let t = 0; t < o.length; t++) e[n[t]] = i[t][o[t]];
                                try {
                                    return sr.decodeCodewords(e, t, r)
                                } catch (t) {
                                    if (!(t instanceof h)) throw t
                                }
                                if (0 === o.length) throw h.getChecksumInstance();
                                for (let t = 0; t < o.length; t++) {
                                    if (o[t] < i[t].length - 1) {
                                        o[t]++;
                                        break
                                    }
                                    if (o[t] = 0, t === o.length - 1) throw h.getChecksumInstance()
                                }
                            }
                            throw h.getChecksumInstance()
                        }
                        static createBarcodeMatrix(t) {
                            let e = Array.from({
                                length: t.getBarcodeRowCount()
                            }, (() => new Array(t.getBarcodeColumnCount() + 2)));
                            for (let t = 0; t < e.length; t++)
                                for (let r = 0; r < e[t].length; r++) e[t][r] = new Xe;
                            let r = 0;
                            for (let n of t.getDetectionResultColumns()) {
                                if (null != n)
                                    for (let t of n.getCodewords())
                                        if (null != t) {
                                            let n = t.getRowNumber();
                                            if (n >= 0) {
                                                if (n >= e.length) continue;
                                                e[n][r].setValue(t.getValue())
                                            }
                                        } r++
                            }
                            return e
                        }
                        static isValidBarcodeColumn(t, e) {
                            return e >= 0 && e <= t.getBarcodeColumnCount() + 1
                        }
                        static getStartColumn(t, e, r, n) {
                            let i = n ? 1 : -1,
                                o = null;
                            if (sr.isValidBarcodeColumn(t, e - i) && (o = t.getDetectionResultColumn(e - i).getCodeword(r)), null != o) return n ? o.getEndX() : o.getStartX();
                            if (o = t.getDetectionResultColumn(e).getCodewordNearby(r), null != o) return n ? o.getStartX() : o.getEndX();
                            if (sr.isValidBarcodeColumn(t, e - i) && (o = t.getDetectionResultColumn(e - i).getCodewordNearby(r)), null != o) return n ? o.getEndX() : o.getStartX();
                            let s = 0;
                            for (; sr.isValidBarcodeColumn(t, e - i);) {
                                e -= i;
                                for (let r of t.getDetectionResultColumn(e).getCodewords())
                                    if (null != r) return (n ? r.getEndX() : r.getStartX()) + i * s * (r.getEndX() - r.getStartX());
                                s++
                            }
                            return n ? t.getBoundingBox().getMinX() : t.getBoundingBox().getMaxX()
                        }
                        static detectCodeword(t, e, r, n, i, o, s, a) {
                            i = sr.adjustCodewordStartColumn(t, e, r, n, i, o);
                            let c, l = sr.getModuleBitCount(t, e, r, n, i, o);
                            if (null == l) return null;
                            let h = rt.sum(l);
                            if (n) c = i + h;
                            else {
                                for (let t = 0; t < l.length / 2; t++) {
                                    let e = l[t];
                                    l[t] = l[l.length - 1 - t], l[l.length - 1 - t] = e
                                }
                                c = i, i = c - h
                            }
                            if (!sr.checkCodewordSkew(h, s, a)) return null;
                            let u = Qe.getDecodedValue(l),
                                d = Pe.getCodeword(u);
                            return -1 === d ? null : new Ze(i, c, sr.getCodewordBucketNumber(u), d)
                        }
                        static getModuleBitCount(t, e, r, n, i, o) {
                            let s = i,
                                a = new Int32Array(8),
                                c = 0,
                                l = n ? 1 : -1,
                                h = n;
                            for (;
                                (n ? s < r : s >= e) && c < a.length;) t.get(s, o) === h ? (a[c]++, s += l) : (c++, h = !h);
                            return c === a.length || s === (n ? r : e) && c === a.length - 1 ? a : null
                        }
                        static getNumberOfECCodeWords(t) {
                            return 2 << t
                        }
                        static adjustCodewordStartColumn(t, e, r, n, i, o) {
                            let s = i,
                                a = n ? -1 : 1;
                            for (let c = 0; c < 2; c++) {
                                for (;
                                    (n ? s >= e : s < r) && n === t.get(s, o);) {
                                    if (Math.abs(i - s) > sr.CODEWORD_SKEW_SIZE) return i;
                                    s += a
                                }
                                a = -a, n = !n
                            }
                            return s
                        }
                        static checkCodewordSkew(t, e, r) {
                            return e - sr.CODEWORD_SKEW_SIZE <= t && t <= r + sr.CODEWORD_SKEW_SIZE
                        }
                        static decodeCodewords(t, e, r) {
                            if (0 === t.length) throw E.getFormatInstance();
                            let n = 1 << e + 1,
                                i = sr.correctErrors(t, r, n);
                            sr.verifyCodewordCount(t, n);
                            let o = or.decode(t, "" + e);
                            return o.setErrorsCorrected(i), o.setErasures(r.length), o
                        }
                        static correctErrors(t, e, r) {
                            if (null != e && e.length > r / 2 + sr.MAX_ERRORS || r < 0 || r > sr.MAX_EC_CODEWORDS) throw h.getChecksumInstance();
                            return sr.errorCorrection.decode(t, r, e)
                        }
                        static verifyCodewordCount(t, e) {
                            if (t.length < 4) throw E.getFormatInstance();
                            let r = t[0];
                            if (r > t.length) throw E.getFormatInstance();
                            if (0 === r) {
                                if (!(e < t.length)) throw E.getFormatInstance();
                                t[0] = t.length - e
                            }
                        }
                        static getBitCountForCodeword(t) {
                            let e = new Int32Array(8),
                                r = 0,
                                n = e.length - 1;
                            for (; !((1 & t) !== r && (r = 1 & t, n--, n < 0));) e[n]++, t >>= 1;
                            return e
                        }
                        static getCodewordBucketNumber(t) {
                            return t instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(t) : this.getCodewordBucketNumber_number(t)
                        }
                        static getCodewordBucketNumber_number(t) {
                            return sr.getCodewordBucketNumber(sr.getBitCountForCodeword(t))
                        }
                        static getCodewordBucketNumber_Int32Array(t) {
                            return (t[0] - t[2] + t[4] - t[6] + 9) % 9
                        }
                        static toString(t) {
                            let e = new Ge;
                            for (let r = 0; r < t.length; r++) {
                                e.format("Row %2d: ", r);
                                for (let n = 0; n < t[r].length; n++) {
                                    let i = t[r][n];
                                    0 === i.getValue().length ? e.format("        ", null) : e.format("%4d(%2d)", i.getValue()[0], i.getConfidence(i.getValue()[0]))
                                }
                                e.format("%n")
                            }
                            return e.toString()
                        }
                    }
                    sr.CODEWORD_SKEW_SIZE = 2, sr.MAX_ERRORS = 3, sr.MAX_EC_CODEWORDS = 512, sr.errorCorrection = new He;
                    class ar {
                        decode(t, e = null) {
                            let r = ar.decode(t, e, !1);
                            if (null == r || 0 === r.length || null == r[0]) throw D.getNotFoundInstance();
                            return r[0]
                        }
                        decodeMultiple(t, e = null) {
                            try {
                                return ar.decode(t, e, !0)
                            } catch (t) {
                                if (t instanceof E || t instanceof h) throw D.getNotFoundInstance();
                                throw t
                            }
                        }
                        static decode(t, e, r) {
                            const n = new Array,
                                i = Fe.detectMultiple(t, e, r);
                            for (const t of i.getPoints()) {
                                const e = sr.decode(i.getBits(), t[4], t[5], t[6], t[7], ar.getMinCodewordWidth(t), ar.getMaxCodewordWidth(t)),
                                    r = new x(e.getText(), e.getRawBytes(), void 0, t, U.PDF_417);
                                r.putMetadata(W.ERROR_CORRECTION_LEVEL, e.getECLevel());
                                const o = e.getOther();
                                null != o && r.putMetadata(W.PDF417_EXTRA_METADATA, o), n.push(r)
                            }
                            return n.map((t => t))
                        }
                        static getMaxWidth(t, e) {
                            return null == t || null == e ? 0 : Math.trunc(Math.abs(t.getX() - e.getX()))
                        }
                        static getMinWidth(t, e) {
                            return null == t || null == e ? m.MAX_VALUE : Math.trunc(Math.abs(t.getX() - e.getX()))
                        }
                        static getMaxCodewordWidth(t) {
                            return Math.floor(Math.max(Math.max(ar.getMaxWidth(t[0], t[4]), ar.getMaxWidth(t[6], t[2]) * Pe.MODULES_IN_CODEWORD / Pe.MODULES_IN_STOP_PATTERN), Math.max(ar.getMaxWidth(t[1], t[5]), ar.getMaxWidth(t[7], t[3]) * Pe.MODULES_IN_CODEWORD / Pe.MODULES_IN_STOP_PATTERN)))
                        }
                        static getMinCodewordWidth(t) {
                            return Math.floor(Math.min(Math.min(ar.getMinWidth(t[0], t[4]), ar.getMinWidth(t[6], t[2]) * Pe.MODULES_IN_CODEWORD / Pe.MODULES_IN_STOP_PATTERN), Math.min(ar.getMinWidth(t[1], t[5]), ar.getMinWidth(t[7], t[3]) * Pe.MODULES_IN_CODEWORD / Pe.MODULES_IN_STOP_PATTERN)))
                        }
                        reset() {}
                    }
                    class cr extends s {}
                    cr.kind = "ReaderException";
                    class lr {
                        constructor(t, e) {
                            this.verbose = !0 === t, e && this.setHints(e)
                        }
                        decode(t, e) {
                            return e && this.setHints(e), this.decodeInternal(t)
                        }
                        decodeWithState(t) {
                            return null !== this.readers && void 0 !== this.readers || this.setHints(null), this.decodeInternal(t)
                        }
                        setHints(t) {
                            this.hints = t;
                            const r = !e(t) && !0 === t.get(C.TRY_HARDER),
                                n = e(t) ? null : t.get(C.POSSIBLE_FORMATS),
                                i = new Array;
                            if (!e(n)) {
                                const e = n.some((t => t === U.UPC_A || t === U.UPC_E || t === U.EAN_13 || t === U.EAN_8 || t === U.CODABAR || t === U.CODE_39 || t === U.CODE_93 || t === U.CODE_128 || t === U.ITF || t === U.RSS_14 || t === U.RSS_EXPANDED));
                                e && !r && i.push(new ie(t, this.verbose)), n.includes(U.QR_CODE) && i.push(new Le), n.includes(U.DATA_MATRIX) && i.push(new ge), n.includes(U.AZTEC) && i.push(new gt), n.includes(U.PDF_417) && i.push(new ar), e && r && i.push(new ie(t, this.verbose))
                            }
                            0 === i.length && (r || i.push(new ie(t, this.verbose)), i.push(new Le), i.push(new ge), i.push(new gt), i.push(new ar), r && i.push(new ie(t, this.verbose))), this.readers = i
                        }
                        reset() {
                            if (null !== this.readers)
                                for (const t of this.readers) t.reset()
                        }
                        decodeInternal(t) {
                            if (null === this.readers) throw new cr("No readers where selected, nothing can be read.");
                            for (const e of this.readers) try {
                                return e.decode(t, this.hints)
                            } catch (t) {
                                if (t instanceof cr) continue
                            }
                            throw new D("No MultiFormat Readers were able to detect the code.")
                        }
                    }
                    var hr;
                    ! function(t) {
                        t[t.ERROR_CORRECTION = 0] = "ERROR_CORRECTION", t[t.CHARACTER_SET = 1] = "CHARACTER_SET", t[t.DATA_MATRIX_SHAPE = 2] = "DATA_MATRIX_SHAPE", t[t.MIN_SIZE = 3] = "MIN_SIZE", t[t.MAX_SIZE = 4] = "MAX_SIZE", t[t.MARGIN = 5] = "MARGIN", t[t.PDF417_COMPACT = 6] = "PDF417_COMPACT", t[t.PDF417_COMPACTION = 7] = "PDF417_COMPACTION", t[t.PDF417_DIMENSIONS = 8] = "PDF417_DIMENSIONS", t[t.AZTEC_LAYERS = 9] = "AZTEC_LAYERS", t[t.QR_VERSION = 10] = "QR_VERSION"
                    }(hr || (hr = {}));
                    var ur = hr;
                    class dr {
                        constructor(t) {
                            this.field = t, this.cachedGenerators = [], this.cachedGenerators.push(new Q(t, Int32Array.from([1])))
                        }
                        buildGenerator(t) {
                            const e = this.cachedGenerators;
                            if (t >= e.length) {
                                let r = e[e.length - 1];
                                const n = this.field;
                                for (let i = e.length; i <= t; i++) {
                                    const t = r.multiply(new Q(n, Int32Array.from([1, n.exp(i - 1 + n.getGeneratorBase())])));
                                    e.push(t), r = t
                                }
                            }
                            return e[t]
                        }
                        encode(t, e) {
                            if (0 === e) throw new c("No error correction bytes");
                            const r = t.length - e;
                            if (r <= 0) throw new c("No data bytes provided");
                            const n = this.buildGenerator(e),
                                i = new Int32Array(r);
                            d.arraycopy(t, 0, i, 0, r);
                            let o = new Q(this.field, i);
                            o = o.multiplyByMonomial(e, 1);
                            const s = o.divide(n)[1].getCoefficients(),
                                a = e - s.length;
                            for (let e = 0; e < a; e++) t[r + e] = 0;
                            d.arraycopy(s, 0, t, r + a, s.length)
                        }
                    }
                    class fr {
                        constructor() {}
                        static applyMaskPenaltyRule1(t) {
                            return fr.applyMaskPenaltyRule1Internal(t, !0) + fr.applyMaskPenaltyRule1Internal(t, !1)
                        }
                        static applyMaskPenaltyRule2(t) {
                            let e = 0;
                            const r = t.getArray(),
                                n = t.getWidth(),
                                i = t.getHeight();
                            for (let t = 0; t < i - 1; t++) {
                                const i = r[t];
                                for (let o = 0; o < n - 1; o++) {
                                    const n = i[o];
                                    n === i[o + 1] && n === r[t + 1][o] && n === r[t + 1][o + 1] && e++
                                }
                            }
                            return fr.N2 * e
                        }
                        static applyMaskPenaltyRule3(t) {
                            let e = 0;
                            const r = t.getArray(),
                                n = t.getWidth(),
                                i = t.getHeight();
                            for (let t = 0; t < i; t++)
                                for (let o = 0; o < n; o++) {
                                    const s = r[t];
                                    o + 6 < n && 1 === s[o] && 0 === s[o + 1] && 1 === s[o + 2] && 1 === s[o + 3] && 1 === s[o + 4] && 0 === s[o + 5] && 1 === s[o + 6] && (fr.isWhiteHorizontal(s, o - 4, o) || fr.isWhiteHorizontal(s, o + 7, o + 11)) && e++, t + 6 < i && 1 === r[t][o] && 0 === r[t + 1][o] && 1 === r[t + 2][o] && 1 === r[t + 3][o] && 1 === r[t + 4][o] && 0 === r[t + 5][o] && 1 === r[t + 6][o] && (fr.isWhiteVertical(r, o, t - 4, t) || fr.isWhiteVertical(r, o, t + 7, t + 11)) && e++
                                }
                            return e * fr.N3
                        }
                        static isWhiteHorizontal(t, e, r) {
                            e = Math.max(e, 0), r = Math.min(r, t.length);
                            for (let n = e; n < r; n++)
                                if (1 === t[n]) return !1;
                            return !0
                        }
                        static isWhiteVertical(t, e, r, n) {
                            r = Math.max(r, 0), n = Math.min(n, t.length);
                            for (let i = r; i < n; i++)
                                if (1 === t[i][e]) return !1;
                            return !0
                        }
                        static applyMaskPenaltyRule4(t) {
                            let e = 0;
                            const r = t.getArray(),
                                n = t.getWidth(),
                                i = t.getHeight();
                            for (let t = 0; t < i; t++) {
                                const i = r[t];
                                for (let t = 0; t < n; t++) 1 === i[t] && e++
                            }
                            const o = t.getHeight() * t.getWidth();
                            return Math.floor(10 * Math.abs(2 * e - o) / o) * fr.N4
                        }
                        static getDataMaskBit(t, e, r) {
                            let n, i;
                            switch (t) {
                                case 0:
                                    n = r + e & 1;
                                    break;
                                case 1:
                                    n = 1 & r;
                                    break;
                                case 2:
                                    n = e % 3;
                                    break;
                                case 3:
                                    n = (r + e) % 3;
                                    break;
                                case 4:
                                    n = Math.floor(r / 2) + Math.floor(e / 3) & 1;
                                    break;
                                case 5:
                                    i = r * e, n = (1 & i) + i % 3;
                                    break;
                                case 6:
                                    i = r * e, n = (1 & i) + i % 3 & 1;
                                    break;
                                case 7:
                                    i = r * e, n = i % 3 + (r + e & 1) & 1;
                                    break;
                                default:
                                    throw new c("Invalid mask pattern: " + t)
                            }
                            return 0 === n
                        }
                        static applyMaskPenaltyRule1Internal(t, e) {
                            let r = 0;
                            const n = e ? t.getHeight() : t.getWidth(),
                                i = e ? t.getWidth() : t.getHeight(),
                                o = t.getArray();
                            for (let t = 0; t < n; t++) {
                                let n = 0,
                                    s = -1;
                                for (let a = 0; a < i; a++) {
                                    const i = e ? o[t][a] : o[a][t];
                                    i === s ? n++ : (n >= 5 && (r += fr.N1 + (n - 5)), n = 1, s = i)
                                }
                                n >= 5 && (r += fr.N1 + (n - 5))
                            }
                            return r
                        }
                    }
                    fr.N1 = 3, fr.N2 = 3, fr.N3 = 40, fr.N4 = 10;
                    class gr {
                        constructor(t, e) {
                            this.width = t, this.height = e;
                            const r = new Array(e);
                            for (let n = 0; n !== e; n++) r[n] = new Uint8Array(t);
                            this.bytes = r
                        }
                        getHeight() {
                            return this.height
                        }
                        getWidth() {
                            return this.width
                        }
                        get(t, e) {
                            return this.bytes[e][t]
                        }
                        getArray() {
                            return this.bytes
                        }
                        setNumber(t, e, r) {
                            this.bytes[e][t] = r
                        }
                        setBoolean(t, e, r) {
                            this.bytes[e][t] = r ? 1 : 0
                        }
                        clear(t) {
                            for (const e of this.bytes) w.fill(e, t)
                        }
                        equals(t) {
                            if (!(t instanceof gr)) return !1;
                            const e = t;
                            if (this.width !== e.width) return !1;
                            if (this.height !== e.height) return !1;
                            for (let t = 0, r = this.height; t < r; ++t) {
                                const r = this.bytes[t],
                                    n = e.bytes[t];
                                for (let t = 0, e = this.width; t < e; ++t)
                                    if (r[t] !== n[t]) return !1
                            }
                            return !0
                        }
                        toString() {
                            const t = new y;
                            for (let e = 0, r = this.height; e < r; ++e) {
                                const r = this.bytes[e];
                                for (let e = 0, n = this.width; e < n; ++e) switch (r[e]) {
                                    case 0:
                                        t.append(" 0");
                                        break;
                                    case 1:
                                        t.append(" 1");
                                        break;
                                    default:
                                        t.append("  ")
                                }
                                t.append("\n")
                            }
                            return t.toString()
                        }
                    }
                    class wr {
                        constructor() {
                            this.maskPattern = -1
                        }
                        getMode() {
                            return this.mode
                        }
                        getECLevel() {
                            return this.ecLevel
                        }
                        getVersion() {
                            return this.version
                        }
                        getMaskPattern() {
                            return this.maskPattern
                        }
                        getMatrix() {
                            return this.matrix
                        }
                        toString() {
                            const t = new y;
                            return t.append("<<\n"), t.append(" mode: "), t.append(this.mode ? this.mode.toString() : "null"), t.append("\n ecLevel: "), t.append(this.ecLevel ? this.ecLevel.toString() : "null"), t.append("\n version: "), t.append(this.version ? this.version.toString() : "null"), t.append("\n maskPattern: "), t.append(this.maskPattern.toString()), this.matrix ? (t.append("\n matrix:\n"), t.append(this.matrix.toString())) : t.append("\n matrix: null\n"), t.append(">>\n"), t.toString()
                        }
                        setMode(t) {
                            this.mode = t
                        }
                        setECLevel(t) {
                            this.ecLevel = t
                        }
                        setVersion(t) {
                            this.version = t
                        }
                        setMaskPattern(t) {
                            this.maskPattern = t
                        }
                        setMatrix(t) {
                            this.matrix = t
                        }
                        static isValidMaskPattern(t) {
                            return t >= 0 && t < wr.NUM_MASK_PATTERNS
                        }
                    }
                    wr.NUM_MASK_PATTERNS = 8;
                    class mr extends s {}
                    mr.kind = "WriterException";
                    class pr {
                        constructor() {}
                        static clearMatrix(t) {
                            t.clear(255)
                        }
                        static buildMatrix(t, e, r, n, i) {
                            pr.clearMatrix(i), pr.embedBasicPatterns(r, i), pr.embedTypeInfo(e, n, i), pr.maybeEmbedVersionInfo(r, i), pr.embedDataBits(t, n, i)
                        }
                        static embedBasicPatterns(t, e) {
                            pr.embedPositionDetectionPatternsAndSeparators(e), pr.embedDarkDotAtLeftBottomCorner(e), pr.maybeEmbedPositionAdjustmentPatterns(t, e), pr.embedTimingPatterns(e)
                        }
                        static embedTypeInfo(t, e, r) {
                            const n = new p;
                            pr.makeTypeInfoBits(t, e, n);
                            for (let t = 0, e = n.getSize(); t < e; ++t) {
                                const e = n.get(n.getSize() - 1 - t),
                                    i = pr.TYPE_INFO_COORDINATES[t],
                                    o = i[0],
                                    s = i[1];
                                if (r.setBoolean(o, s, e), t < 8) {
                                    const n = r.getWidth() - t - 1,
                                        i = 8;
                                    r.setBoolean(n, i, e)
                                } else {
                                    const n = 8,
                                        i = r.getHeight() - 7 + (t - 8);
                                    r.setBoolean(n, i, e)
                                }
                            }
                        }
                        static maybeEmbedVersionInfo(t, e) {
                            if (t.getVersionNumber() < 7) return;
                            const r = new p;
                            pr.makeVersionInfoBits(t, r);
                            let n = 17;
                            for (let t = 0; t < 6; ++t)
                                for (let i = 0; i < 3; ++i) {
                                    const o = r.get(n);
                                    n--, e.setBoolean(t, e.getHeight() - 11 + i, o), e.setBoolean(e.getHeight() - 11 + i, t, o)
                                }
                        }
                        static embedDataBits(t, e, r) {
                            let n = 0,
                                i = -1,
                                o = r.getWidth() - 1,
                                s = r.getHeight() - 1;
                            for (; o > 0;) {
                                for (6 === o && (o -= 1); s >= 0 && s < r.getHeight();) {
                                    for (let i = 0; i < 2; ++i) {
                                        const a = o - i;
                                        if (!pr.isEmpty(r.get(a, s))) continue;
                                        let c;
                                        n < t.getSize() ? (c = t.get(n), ++n) : c = !1, 255 !== e && fr.getDataMaskBit(e, a, s) && (c = !c), r.setBoolean(a, s, c)
                                    }
                                    s += i
                                }
                                i = -i, s += i, o -= 2
                            }
                            if (n !== t.getSize()) throw new mr("Not all bits consumed: " + n + "/" + t.getSize())
                        }
                        static findMSBSet(t) {
                            return 32 - m.numberOfLeadingZeros(t)
                        }
                        static calculateBCHCode(t, e) {
                            if (0 === e) throw new c("0 polynomial");
                            const r = pr.findMSBSet(e);
                            for (t <<= r - 1; pr.findMSBSet(t) >= r;) t ^= e << pr.findMSBSet(t) - r;
                            return t
                        }
                        static makeTypeInfoBits(t, e, r) {
                            if (!wr.isValidMaskPattern(e)) throw new mr("Invalid mask pattern");
                            const n = t.getBits() << 3 | e;
                            r.appendBits(n, 5);
                            const i = pr.calculateBCHCode(n, pr.TYPE_INFO_POLY);
                            r.appendBits(i, 10);
                            const o = new p;
                            if (o.appendBits(pr.TYPE_INFO_MASK_PATTERN, 15), r.xor(o), 15 !== r.getSize()) throw new mr("should not happen but we got: " + r.getSize())
                        }
                        static makeVersionInfoBits(t, e) {
                            e.appendBits(t.getVersionNumber(), 6);
                            const r = pr.calculateBCHCode(t.getVersionNumber(), pr.VERSION_INFO_POLY);
                            if (e.appendBits(r, 12), 18 !== e.getSize()) throw new mr("should not happen but we got: " + e.getSize())
                        }
                        static isEmpty(t) {
                            return 255 === t
                        }
                        static embedTimingPatterns(t) {
                            for (let e = 8; e < t.getWidth() - 8; ++e) {
                                const r = (e + 1) % 2;
                                pr.isEmpty(t.get(e, 6)) && t.setNumber(e, 6, r), pr.isEmpty(t.get(6, e)) && t.setNumber(6, e, r)
                            }
                        }
                        static embedDarkDotAtLeftBottomCorner(t) {
                            if (0 === t.get(8, t.getHeight() - 8)) throw new mr;
                            t.setNumber(8, t.getHeight() - 8, 1)
                        }
                        static embedHorizontalSeparationPattern(t, e, r) {
                            for (let n = 0; n < 8; ++n) {
                                if (!pr.isEmpty(r.get(t + n, e))) throw new mr;
                                r.setNumber(t + n, e, 0)
                            }
                        }
                        static embedVerticalSeparationPattern(t, e, r) {
                            for (let n = 0; n < 7; ++n) {
                                if (!pr.isEmpty(r.get(t, e + n))) throw new mr;
                                r.setNumber(t, e + n, 0)
                            }
                        }
                        static embedPositionAdjustmentPattern(t, e, r) {
                            for (let n = 0; n < 5; ++n) {
                                const i = pr.POSITION_ADJUSTMENT_PATTERN[n];
                                for (let o = 0; o < 5; ++o) r.setNumber(t + o, e + n, i[o])
                            }
                        }
                        static embedPositionDetectionPattern(t, e, r) {
                            for (let n = 0; n < 7; ++n) {
                                const i = pr.POSITION_DETECTION_PATTERN[n];
                                for (let o = 0; o < 7; ++o) r.setNumber(t + o, e + n, i[o])
                            }
                        }
                        static embedPositionDetectionPatternsAndSeparators(t) {
                            const e = pr.POSITION_DETECTION_PATTERN[0].length;
                            pr.embedPositionDetectionPattern(0, 0, t), pr.embedPositionDetectionPattern(t.getWidth() - e, 0, t), pr.embedPositionDetectionPattern(0, t.getWidth() - e, t);
                            pr.embedHorizontalSeparationPattern(0, 7, t), pr.embedHorizontalSeparationPattern(t.getWidth() - 8, 7, t), pr.embedHorizontalSeparationPattern(0, t.getWidth() - 8, t);
                            pr.embedVerticalSeparationPattern(7, 0, t), pr.embedVerticalSeparationPattern(t.getHeight() - 7 - 1, 0, t), pr.embedVerticalSeparationPattern(7, t.getHeight() - 7, t)
                        }
                        static maybeEmbedPositionAdjustmentPatterns(t, e) {
                            if (t.getVersionNumber() < 2) return;
                            const r = t.getVersionNumber() - 1,
                                n = pr.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[r];
                            for (let t = 0, r = n.length; t !== r; t++) {
                                const i = n[t];
                                if (i >= 0)
                                    for (let t = 0; t !== r; t++) {
                                        const r = n[t];
                                        r >= 0 && pr.isEmpty(e.get(r, i)) && pr.embedPositionAdjustmentPattern(r - 2, i - 2, e)
                                    }
                            }
                        }
                    }
                    pr.POSITION_DETECTION_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1, 1, 1])]), pr.POSITION_ADJUSTMENT_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1])]), pr.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([Int32Array.from([-1, -1, -1, -1, -1, -1, -1]), Int32Array.from([6, 18, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, -1, -1, -1, -1, -1]), Int32Array.from([6, 26, -1, -1, -1, -1, -1]), Int32Array.from([6, 30, -1, -1, -1, -1, -1]), Int32Array.from([6, 34, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, 38, -1, -1, -1, -1]), Int32Array.from([6, 24, 42, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, -1, -1, -1, -1]), Int32Array.from([6, 28, 50, -1, -1, -1, -1]), Int32Array.from([6, 30, 54, -1, -1, -1, -1]), Int32Array.from([6, 32, 58, -1, -1, -1, -1]), Int32Array.from([6, 34, 62, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, 66, -1, -1, -1]), Int32Array.from([6, 26, 48, 70, -1, -1, -1]), Int32Array.from([6, 26, 50, 74, -1, -1, -1]), Int32Array.from([6, 30, 54, 78, -1, -1, -1]), Int32Array.from([6, 30, 56, 82, -1, -1, -1]), Int32Array.from([6, 30, 58, 86, -1, -1, -1]), Int32Array.from([6, 34, 62, 90, -1, -1, -1]), Int32Array.from([6, 28, 50, 72, 94, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, -1, -1]), Int32Array.from([6, 30, 54, 78, 102, -1, -1]), Int32Array.from([6, 28, 54, 80, 106, -1, -1]), Int32Array.from([6, 32, 58, 84, 110, -1, -1]), Int32Array.from([6, 30, 58, 86, 114, -1, -1]), Int32Array.from([6, 34, 62, 90, 118, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, 122, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, -1]), Int32Array.from([6, 26, 52, 78, 104, 130, -1]), Int32Array.from([6, 30, 56, 82, 108, 134, -1]), Int32Array.from([6, 34, 60, 86, 112, 138, -1]), Int32Array.from([6, 30, 58, 86, 114, 142, -1]), Int32Array.from([6, 34, 62, 90, 118, 146, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, 150]), Int32Array.from([6, 24, 50, 76, 102, 128, 154]), Int32Array.from([6, 28, 54, 80, 106, 132, 158]), Int32Array.from([6, 32, 58, 84, 110, 136, 162]), Int32Array.from([6, 26, 54, 82, 110, 138, 166]), Int32Array.from([6, 30, 58, 86, 114, 142, 170])]), pr.TYPE_INFO_COORDINATES = Array.from([Int32Array.from([8, 0]), Int32Array.from([8, 1]), Int32Array.from([8, 2]), Int32Array.from([8, 3]), Int32Array.from([8, 4]), Int32Array.from([8, 5]), Int32Array.from([8, 7]), Int32Array.from([8, 8]), Int32Array.from([7, 8]), Int32Array.from([5, 8]), Int32Array.from([4, 8]), Int32Array.from([3, 8]), Int32Array.from([2, 8]), Int32Array.from([1, 8]), Int32Array.from([0, 8])]), pr.VERSION_INFO_POLY = 7973, pr.TYPE_INFO_POLY = 1335, pr.TYPE_INFO_MASK_PATTERN = 21522;
                    class Ar {
                        constructor(t, e) {
                            this.dataBytes = t, this.errorCorrectionBytes = e
                        }
                        getDataBytes() {
                            return this.dataBytes
                        }
                        getErrorCorrectionBytes() {
                            return this.errorCorrectionBytes
                        }
                    }
                    class Cr {
                        constructor() {}
                        static calculateMaskPenalty(t) {
                            return fr.applyMaskPenaltyRule1(t) + fr.applyMaskPenaltyRule2(t) + fr.applyMaskPenaltyRule3(t) + fr.applyMaskPenaltyRule4(t)
                        }
                        static encode(t, e, r = null) {
                            let n = Cr.DEFAULT_BYTE_MODE_ENCODING;
                            const i = null !== r && void 0 !== r.get(ur.CHARACTER_SET);
                            i && (n = r.get(ur.CHARACTER_SET).toString());
                            const o = this.chooseMode(t, n),
                                s = new p;
                            if (o === _e.BYTE && (i || Cr.DEFAULT_BYTE_MODE_ENCODING !== n)) {
                                const t = I.getCharacterSetECIByName(n);
                                void 0 !== t && this.appendECI(t, s)
                            }
                            this.appendModeInfo(o, s);
                            const a = new p;
                            let c;
                            if (this.appendBytes(t, o, a, n), null !== r && void 0 !== r.get(ur.QR_VERSION)) {
                                const t = Number.parseInt(r.get(ur.QR_VERSION).toString(), 10);
                                c = Ce.getVersionForNumber(t);
                                const n = this.calculateBitsNeeded(o, s, a, c);
                                if (!this.willFit(n, c, e)) throw new mr("Data too big for requested version")
                            } else c = this.recommendVersion(e, o, s, a);
                            const l = new p;
                            l.appendBitArray(s);
                            const h = o === _e.BYTE ? a.getSizeInBytes() : t.length;
                            this.appendLengthInfo(h, c, o, l), l.appendBitArray(a);
                            const u = c.getECBlocksForLevel(e),
                                d = c.getTotalCodewords() - u.getTotalECCodewords();
                            this.terminateBits(d, l);
                            const f = this.interleaveWithECBytes(l, c.getTotalCodewords(), d, u.getNumBlocks()),
                                g = new wr;
                            g.setECLevel(e), g.setMode(o), g.setVersion(c);
                            const w = c.getDimensionForVersion(),
                                m = new gr(w, w),
                                A = this.chooseMaskPattern(f, e, c, m);
                            return g.setMaskPattern(A), pr.buildMatrix(f, e, c, A, m), g.setMatrix(m), g
                        }
                        static recommendVersion(t, e, r, n) {
                            const i = this.calculateBitsNeeded(e, r, n, Ce.getVersionForNumber(1)),
                                o = this.chooseVersion(i, t),
                                s = this.calculateBitsNeeded(e, r, n, o);
                            return this.chooseVersion(s, t)
                        }
                        static calculateBitsNeeded(t, e, r, n) {
                            return e.getSize() + t.getCharacterCountBits(n) + r.getSize()
                        }
                        static getAlphanumericCode(t) {
                            return t < Cr.ALPHANUMERIC_TABLE.length ? Cr.ALPHANUMERIC_TABLE[t] : -1
                        }
                        static chooseMode(t, e = null) {
                            if (I.SJIS.getName() === e && this.isOnlyDoubleByteKanji(t)) return _e.KANJI;
                            let r = !1,
                                n = !1;
                            for (let e = 0, i = t.length; e < i; ++e) {
                                const i = t.charAt(e);
                                if (Cr.isDigit(i)) r = !0;
                                else {
                                    if (-1 === this.getAlphanumericCode(i.charCodeAt(0))) return _e.BYTE;
                                    n = !0
                                }
                            }
                            return n ? _e.ALPHANUMERIC : r ? _e.NUMERIC : _e.BYTE
                        }
                        static isOnlyDoubleByteKanji(t) {
                            let e;
                            try {
                                e = _.encode(t, I.SJIS)
                            } catch (t) {
                                return !1
                            }
                            const r = e.length;
                            if (r % 2 != 0) return !1;
                            for (let t = 0; t < r; t += 2) {
                                const r = 255 & e[t];
                                if ((r < 129 || r > 159) && (r < 224 || r > 235)) return !1
                            }
                            return !0
                        }
                        static chooseMaskPattern(t, e, r, n) {
                            let i = Number.MAX_SAFE_INTEGER,
                                o = -1;
                            for (let s = 0; s < wr.NUM_MASK_PATTERNS; s++) {
                                pr.buildMatrix(t, e, r, s, n);
                                let a = this.calculateMaskPenalty(n);
                                a < i && (i = a, o = s)
                            }
                            return o
                        }
                        static chooseVersion(t, e) {
                            for (let r = 1; r <= 40; r++) {
                                const n = Ce.getVersionForNumber(r);
                                if (Cr.willFit(t, n, e)) return n
                            }
                            throw new mr("Data too big")
                        }
                        static willFit(t, e, r) {
                            return e.getTotalCodewords() - e.getECBlocksForLevel(r).getTotalECCodewords() >= (t + 7) / 8
                        }
                        static terminateBits(t, e) {
                            const r = 8 * t;
                            if (e.getSize() > r) throw new mr("data bits cannot fit in the QR Code" + e.getSize() + " > " + r);
                            for (let t = 0; t < 4 && e.getSize() < r; ++t) e.appendBit(!1);
                            const n = 7 & e.getSize();
                            if (n > 0)
                                for (let t = n; t < 8; t++) e.appendBit(!1);
                            const i = t - e.getSizeInBytes();
                            for (let t = 0; t < i; ++t) e.appendBits(0 == (1 & t) ? 236 : 17, 8);
                            if (e.getSize() !== r) throw new mr("Bits size does not equal capacity")
                        }
                        static getNumDataBytesAndNumECBytesForBlockID(t, e, r, n, i, o) {
                            if (n >= r) throw new mr("Block ID too large");
                            const s = t % r,
                                a = r - s,
                                c = Math.floor(t / r),
                                l = c + 1,
                                h = Math.floor(e / r),
                                u = h + 1,
                                d = c - h,
                                f = l - u;
                            if (d !== f) throw new mr("EC bytes mismatch");
                            if (r !== a + s) throw new mr("RS blocks mismatch");
                            if (t !== (h + d) * a + (u + f) * s) throw new mr("Total bytes mismatch");
                            n < a ? (i[0] = h, o[0] = d) : (i[0] = u, o[0] = f)
                        }
                        static interleaveWithECBytes(t, e, r, n) {
                            if (t.getSizeInBytes() !== r) throw new mr("Number of bits and data bytes does not match");
                            let i = 0,
                                o = 0,
                                s = 0;
                            const a = new Array;
                            for (let c = 0; c < n; ++c) {
                                const l = new Int32Array(1),
                                    h = new Int32Array(1);
                                Cr.getNumDataBytesAndNumECBytesForBlockID(e, r, n, c, l, h);
                                const u = l[0],
                                    d = new Uint8Array(u);
                                t.toBytes(8 * i, d, 0, u);
                                const f = Cr.generateECBytes(d, h[0]);
                                a.push(new Ar(d, f)), o = Math.max(o, u), s = Math.max(s, f.length), i += l[0]
                            }
                            if (r !== i) throw new mr("Data bytes does not match offset");
                            const c = new p;
                            for (let t = 0; t < o; ++t)
                                for (const e of a) {
                                    const r = e.getDataBytes();
                                    t < r.length && c.appendBits(r[t], 8)
                                }
                            for (let t = 0; t < s; ++t)
                                for (const e of a) {
                                    const r = e.getErrorCorrectionBytes();
                                    t < r.length && c.appendBits(r[t], 8)
                                }
                            if (e !== c.getSizeInBytes()) throw new mr("Interleaving error: " + e + " and " + c.getSizeInBytes() + " differ.");
                            return c
                        }
                        static generateECBytes(t, e) {
                            const r = t.length,
                                n = new Int32Array(r + e);
                            for (let e = 0; e < r; e++) n[e] = 255 & t[e];
                            new dr(q.QR_CODE_FIELD_256).encode(n, e);
                            const i = new Uint8Array(e);
                            for (let t = 0; t < e; t++) i[t] = n[r + t];
                            return i
                        }
                        static appendModeInfo(t, e) {
                            e.appendBits(t.getBits(), 4)
                        }
                        static appendLengthInfo(t, e, r, n) {
                            const i = r.getCharacterCountBits(e);
                            if (t >= 1 << i) throw new mr(t + " is bigger than " + ((1 << i) - 1));
                            n.appendBits(t, i)
                        }
                        static appendBytes(t, e, r, n) {
                            switch (e) {
                                case _e.NUMERIC:
                                    Cr.appendNumericBytes(t, r);
                                    break;
                                case _e.ALPHANUMERIC:
                                    Cr.appendAlphanumericBytes(t, r);
                                    break;
                                case _e.BYTE:
                                    Cr.append8BitBytes(t, r, n);
                                    break;
                                case _e.KANJI:
                                    Cr.appendKanjiBytes(t, r);
                                    break;
                                default:
                                    throw new mr("Invalid mode: " + e)
                            }
                        }
                        static getDigit(t) {
                            return t.charCodeAt(0) - 48
                        }
                        static isDigit(t) {
                            const e = Cr.getDigit(t);
                            return e >= 0 && e <= 9
                        }
                        static appendNumericBytes(t, e) {
                            const r = t.length;
                            let n = 0;
                            for (; n < r;) {
                                const i = Cr.getDigit(t.charAt(n));
                                if (n + 2 < r) {
                                    const r = Cr.getDigit(t.charAt(n + 1)),
                                        o = Cr.getDigit(t.charAt(n + 2));
                                    e.appendBits(100 * i + 10 * r + o, 10), n += 3
                                } else if (n + 1 < r) {
                                    const r = Cr.getDigit(t.charAt(n + 1));
                                    e.appendBits(10 * i + r, 7), n += 2
                                } else e.appendBits(i, 4), n++
                            }
                        }
                        static appendAlphanumericBytes(t, e) {
                            const r = t.length;
                            let n = 0;
                            for (; n < r;) {
                                const i = Cr.getAlphanumericCode(t.charCodeAt(n));
                                if (-1 === i) throw new mr;
                                if (n + 1 < r) {
                                    const r = Cr.getAlphanumericCode(t.charCodeAt(n + 1));
                                    if (-1 === r) throw new mr;
                                    e.appendBits(45 * i + r, 11), n += 2
                                } else e.appendBits(i, 6), n++
                            }
                        }
                        static append8BitBytes(t, e, r) {
                            let n;
                            try {
                                n = _.encode(t, r)
                            } catch (t) {
                                throw new mr(t)
                            }
                            for (let t = 0, r = n.length; t !== r; t++) {
                                const r = n[t];
                                e.appendBits(r, 8)
                            }
                        }
                        static appendKanjiBytes(t, e) {
                            let r;
                            try {
                                r = _.encode(t, I.SJIS)
                            } catch (t) {
                                throw new mr(t)
                            }
                            const n = r.length;
                            for (let t = 0; t < n; t += 2) {
                                const n = (255 & r[t]) << 8 & 4294967295 | 255 & r[t + 1];
                                let i = -1;
                                if (n >= 33088 && n <= 40956 ? i = n - 33088 : n >= 57408 && n <= 60351 && (i = n - 49472), -1 === i) throw new mr("Invalid byte sequence");
                                const o = 192 * (i >> 8) + (255 & i);
                                e.appendBits(o, 13)
                            }
                        }
                        static appendECI(t, e) {
                            e.appendBits(_e.ECI.getBits(), 4), e.appendBits(t.getValue(), 8)
                        }
                    }
                    Cr.ALPHANUMERIC_TABLE = Int32Array.from([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1]), Cr.DEFAULT_BYTE_MODE_ENCODING = I.UTF8.getName();
                    class Er {
                        write(t, e, r, n = null) {
                            if (0 === t.length) throw new c("Found empty contents");
                            if (e < 0 || r < 0) throw new c("Requested dimensions are too small: " + e + "x" + r);
                            let i = we.L,
                                o = Er.QUIET_ZONE_SIZE;
                            null !== n && (void 0 !== n.get(ur.ERROR_CORRECTION) && (i = we.fromString(n.get(ur.ERROR_CORRECTION).toString())), void 0 !== n.get(ur.MARGIN) && (o = Number.parseInt(n.get(ur.MARGIN).toString(), 10)));
                            const s = Cr.encode(t, i, n);
                            return this.renderResult(s, e, r, o)
                        }
                        writeToDom(t, e, r, n, i = null) {
                            "string" == typeof t && (t = document.querySelector(t));
                            const o = this.write(e, r, n, i);
                            t && t.appendChild(o)
                        }
                        renderResult(t, e, r, n) {
                            const i = t.getMatrix();
                            if (null === i) throw new $;
                            const o = i.getWidth(),
                                s = i.getHeight(),
                                a = o + 2 * n,
                                c = s + 2 * n,
                                l = Math.max(e, a),
                                h = Math.max(r, c),
                                u = Math.min(Math.floor(l / a), Math.floor(h / c)),
                                d = Math.floor((l - o * u) / 2),
                                f = Math.floor((h - s * u) / 2),
                                g = this.createSVGElement(l, h);
                            for (let t = 0, e = f; t < s; t++, e += u)
                                for (let r = 0, n = d; r < o; r++, n += u)
                                    if (1 === i.get(r, t)) {
                                        const t = this.createSvgRectElement(n, e, u, u);
                                        g.appendChild(t)
                                    } return g
                        }
                        createSVGElement(t, e) {
                            const r = document.createElementNS(Er.SVG_NS, "svg");
                            return r.setAttributeNS(null, "height", t.toString()), r.setAttributeNS(null, "width", e.toString()), r
                        }
                        createSvgRectElement(t, e, r, n) {
                            const i = document.createElementNS(Er.SVG_NS, "rect");
                            return i.setAttributeNS(null, "x", t.toString()), i.setAttributeNS(null, "y", e.toString()), i.setAttributeNS(null, "height", r.toString()), i.setAttributeNS(null, "width", n.toString()), i.setAttributeNS(null, "fill", "#000000"), i
                        }
                    }
                    Er.QUIET_ZONE_SIZE = 4, Er.SVG_NS = "http://www.w3.org/2000/svg";
                    class Ir {
                        encode(t, e, r, n, i) {
                            if (0 === t.length) throw new c("Found empty contents");
                            if (e !== U.QR_CODE) throw new c("Can only encode QR_CODE, but got " + e);
                            if (r < 0 || n < 0) throw new c(`Requested dimensions are too small: ${r}x${n}`);
                            let o = we.L,
                                s = Ir.QUIET_ZONE_SIZE;
                            null !== i && (void 0 !== i.get(ur.ERROR_CORRECTION) && (o = we.fromString(i.get(ur.ERROR_CORRECTION).toString())), void 0 !== i.get(ur.MARGIN) && (s = Number.parseInt(i.get(ur.MARGIN).toString(), 10)));
                            const a = Cr.encode(t, o, i);
                            return Ir.renderResult(a, r, n, s)
                        }
                        static renderResult(t, e, r, n) {
                            const i = t.getMatrix();
                            if (null === i) throw new $;
                            const o = i.getWidth(),
                                s = i.getHeight(),
                                a = o + 2 * n,
                                c = s + 2 * n,
                                l = Math.max(e, a),
                                h = Math.max(r, c),
                                u = Math.min(Math.floor(l / a), Math.floor(h / c)),
                                d = Math.floor((l - o * u) / 2),
                                f = Math.floor((h - s * u) / 2),
                                g = new N(l, h);
                            for (let t = 0, e = f; t < s; t++, e += u)
                                for (let r = 0, n = d; r < o; r++, n += u) 1 === i.get(r, t) && g.setRegion(n, e, u, u);
                            return g
                        }
                    }
                    Ir.QUIET_ZONE_SIZE = 4;
                    class Sr extends O {
                        constructor(t, e, r, n, i, o, s, a) {
                            if (super(o, s), this.yuvData = t, this.dataWidth = e, this.dataHeight = r, this.left = n, this.top = i, n + o > e || i + s > r) throw new c("Crop rectangle does not fit within image data.");
                            a && this.reverseHorizontal(o, s)
                        }
                        getRow(t, e) {
                            if (t < 0 || t >= this.getHeight()) throw new c("Requested row is outside the image: " + t);
                            const r = this.getWidth();
                            (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
                            const n = (t + this.top) * this.dataWidth + this.left;
                            return d.arraycopy(this.yuvData, n, e, 0, r), e
                        }
                        getMatrix() {
                            const t = this.getWidth(),
                                e = this.getHeight();
                            if (t === this.dataWidth && e === this.dataHeight) return this.yuvData;
                            const r = t * e,
                                n = new Uint8ClampedArray(r);
                            let i = this.top * this.dataWidth + this.left;
                            if (t === this.dataWidth) return d.arraycopy(this.yuvData, i, n, 0, r), n;
                            for (let r = 0; r < e; r++) {
                                const e = r * t;
                                d.arraycopy(this.yuvData, i, n, e, t), i += this.dataWidth
                            }
                            return n
                        }
                        isCropSupported() {
                            return !0
                        }
                        crop(t, e, r, n) {
                            return new Sr(this.yuvData, this.dataWidth, this.dataHeight, this.left + t, this.top + e, r, n, !1)
                        }
                        renderThumbnail() {
                            const t = this.getWidth() / Sr.THUMBNAIL_SCALE_FACTOR,
                                e = this.getHeight() / Sr.THUMBNAIL_SCALE_FACTOR,
                                r = new Int32Array(t * e),
                                n = this.yuvData;
                            let i = this.top * this.dataWidth + this.left;
                            for (let o = 0; o < e; o++) {
                                const e = o * t;
                                for (let o = 0; o < t; o++) {
                                    const t = 255 & n[i + o * Sr.THUMBNAIL_SCALE_FACTOR];
                                    r[e + o] = 4278190080 | 65793 * t
                                }
                                i += this.dataWidth * Sr.THUMBNAIL_SCALE_FACTOR
                            }
                            return r
                        }
                        getThumbnailWidth() {
                            return this.getWidth() / Sr.THUMBNAIL_SCALE_FACTOR
                        }
                        getThumbnailHeight() {
                            return this.getHeight() / Sr.THUMBNAIL_SCALE_FACTOR
                        }
                        reverseHorizontal(t, e) {
                            const r = this.yuvData;
                            for (let n = 0, i = this.top * this.dataWidth + this.left; n < e; n++, i += this.dataWidth) {
                                const e = i + t / 2;
                                for (let n = i, o = i + t - 1; n < e; n++, o--) {
                                    const t = r[n];
                                    r[n] = r[o], r[o] = t
                                }
                            }
                        }
                        invert() {
                            return new b(this)
                        }
                    }
                    Sr.THUMBNAIL_SCALE_FACTOR = 2;
                    class _r extends O {
                        constructor(t, e, r, n, i, o, s) {
                            if (super(e, r), this.dataWidth = n, this.dataHeight = i, this.left = o, this.top = s, 4 === t.BYTES_PER_ELEMENT) {
                                const n = e * r,
                                    i = new Uint8ClampedArray(n);
                                for (let e = 0; e < n; e++) {
                                    const r = t[e],
                                        n = r >> 16 & 255,
                                        o = r >> 7 & 510,
                                        s = 255 & r;
                                    i[e] = (n + o + s) / 4 & 255
                                }
                                this.luminances = i
                            } else this.luminances = t;
                            if (void 0 === n && (this.dataWidth = e), void 0 === i && (this.dataHeight = r), void 0 === o && (this.left = 0), void 0 === s && (this.top = 0), this.left + e > this.dataWidth || this.top + r > this.dataHeight) throw new c("Crop rectangle does not fit within image data.")
                        }
                        getRow(t, e) {
                            if (t < 0 || t >= this.getHeight()) throw new c("Requested row is outside the image: " + t);
                            const r = this.getWidth();
                            (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
                            const n = (t + this.top) * this.dataWidth + this.left;
                            return d.arraycopy(this.luminances, n, e, 0, r), e
                        }
                        getMatrix() {
                            const t = this.getWidth(),
                                e = this.getHeight();
                            if (t === this.dataWidth && e === this.dataHeight) return this.luminances;
                            const r = t * e,
                                n = new Uint8ClampedArray(r);
                            let i = this.top * this.dataWidth + this.left;
                            if (t === this.dataWidth) return d.arraycopy(this.luminances, i, n, 0, r), n;
                            for (let r = 0; r < e; r++) {
                                const e = r * t;
                                d.arraycopy(this.luminances, i, n, e, t), i += this.dataWidth
                            }
                            return n
                        }
                        isCropSupported() {
                            return !0
                        }
                        crop(t, e, r, n) {
                            return new _r(this.luminances, r, n, this.dataWidth, this.dataHeight, this.left + t, this.top + e)
                        }
                        invert() {
                            return new b(this)
                        }
                    }
                    class Tr extends I {
                        static forName(t) {
                            return this.getCharacterSetECIByName(t)
                        }
                    }
                    class yr {}
                    yr.ISO_8859_1 = I.ISO8859_1;
                    class Nr {
                        isCompact() {
                            return this.compact
                        }
                        setCompact(t) {
                            this.compact = t
                        }
                        getSize() {
                            return this.size
                        }
                        setSize(t) {
                            this.size = t
                        }
                        getLayers() {
                            return this.layers
                        }
                        setLayers(t) {
                            this.layers = t
                        }
                        getCodeWords() {
                            return this.codeWords
                        }
                        setCodeWords(t) {
                            this.codeWords = t
                        }
                        getMatrix() {
                            return this.matrix
                        }
                        setMatrix(t) {
                            this.matrix = t
                        }
                    }
                    class Dr {
                        static singletonList(t) {
                            return [t]
                        }
                        static min(t, e) {
                            return t.sort(e)[0]
                        }
                    }
                    class Mr {
                        constructor(t) {
                            this.previous = t
                        }
                        getPrevious() {
                            return this.previous
                        }
                    }
                    class Rr extends Mr {
                        constructor(t, e, r) {
                            super(t), this.value = e, this.bitCount = r
                        }
                        appendTo(t, e) {
                            t.appendBits(this.value, this.bitCount)
                        }
                        add(t, e) {
                            return new Rr(this, t, e)
                        }
                        addBinaryShift(t, e) {
                            return console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token"), new Rr(this, t, e)
                        }
                        toString() {
                            let t = this.value & (1 << this.bitCount) - 1;
                            return t |= 1 << this.bitCount, "<" + m.toBinaryString(t | 1 << this.bitCount).substring(1) + ">"
                        }
                    }
                    class Or extends Rr {
                        constructor(t, e, r) {
                            super(t, 0, 0), this.binaryShiftStart = e, this.binaryShiftByteCount = r
                        }
                        appendTo(t, e) {
                            for (let r = 0; r < this.binaryShiftByteCount; r++)(0 === r || 31 === r && this.binaryShiftByteCount <= 62) && (t.appendBits(31, 5), this.binaryShiftByteCount > 62 ? t.appendBits(this.binaryShiftByteCount - 31, 16) : 0 === r ? t.appendBits(Math.min(this.binaryShiftByteCount, 31), 5) : t.appendBits(this.binaryShiftByteCount - 31, 5)), t.appendBits(e[this.binaryShiftStart + r], 8)
                        }
                        addBinaryShift(t, e) {
                            return new Or(this, t, e)
                        }
                        toString() {
                            return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">"
                        }
                    }

                    function br(t, e, r) {
                        return new Rr(t, e, r)
                    }
                    const Br = ["UPPER", "LOWER", "DIGIT", "MIXED", "PUNCT"],
                        Lr = 0,
                        Pr = 1,
                        vr = 2,
                        Fr = 3,
                        xr = 4,
                        kr = new Rr(null, 0, 0),
                        Ur = [Int32Array.from([0, 327708, 327710, 327709, 656318]), Int32Array.from([590318, 0, 327710, 327709, 656318]), Int32Array.from([262158, 590300, 0, 590301, 932798]), Int32Array.from([327709, 327708, 656318, 0, 327710]), Int32Array.from([327711, 656380, 656382, 656381, 0])];
                    const Hr = function(t) {
                        for (let e of t) w.fill(e, -1);
                        return t[Lr][xr] = 0, t[Pr][xr] = 0, t[Pr][Lr] = 28, t[Fr][xr] = 0, t[vr][xr] = 0, t[vr][Lr] = 15, t
                    }(w.createInt32Array(6, 6));
                    class Vr {
                        constructor(t, e, r, n) {
                            this.token = t, this.mode = e, this.binaryShiftByteCount = r, this.bitCount = n
                        }
                        getMode() {
                            return this.mode
                        }
                        getToken() {
                            return this.token
                        }
                        getBinaryShiftByteCount() {
                            return this.binaryShiftByteCount
                        }
                        getBitCount() {
                            return this.bitCount
                        }
                        latchAndAppend(t, e) {
                            let r = this.bitCount,
                                n = this.token;
                            if (t !== this.mode) {
                                let e = Ur[this.mode][t];
                                n = br(n, 65535 & e, e >> 16), r += e >> 16
                            }
                            let i = t === vr ? 4 : 5;
                            return n = br(n, e, i), new Vr(n, t, 0, r + i)
                        }
                        shiftAndAppend(t, e) {
                            let r = this.token,
                                n = this.mode === vr ? 4 : 5;
                            return r = br(r, Hr[this.mode][t], n), r = br(r, e, 5), new Vr(r, this.mode, 0, this.bitCount + n + 5)
                        }
                        addBinaryShiftChar(t) {
                            let e = this.token,
                                r = this.mode,
                                n = this.bitCount;
                            if (this.mode === xr || this.mode === vr) {
                                let t = Ur[r][Lr];
                                e = br(e, 65535 & t, t >> 16), n += t >> 16, r = Lr
                            }
                            let i = 0 === this.binaryShiftByteCount || 31 === this.binaryShiftByteCount ? 18 : 62 === this.binaryShiftByteCount ? 9 : 8,
                                o = new Vr(e, r, this.binaryShiftByteCount + 1, n + i);
                            return 2078 === o.binaryShiftByteCount && (o = o.endBinaryShift(t + 1)), o
                        }
                        endBinaryShift(t) {
                            if (0 === this.binaryShiftByteCount) return this;
                            let e = this.token;
                            return e = function(t, e, r) {
                                return new Or(t, e, r)
                            }(e, t - this.binaryShiftByteCount, this.binaryShiftByteCount), new Vr(e, this.mode, 0, this.bitCount)
                        }
                        isBetterThanOrEqualTo(t) {
                            let e = this.bitCount + (Ur[this.mode][t.mode] >> 16);
                            return this.binaryShiftByteCount < t.binaryShiftByteCount ? e += Vr.calculateBinaryShiftCost(t) - Vr.calculateBinaryShiftCost(this) : this.binaryShiftByteCount > t.binaryShiftByteCount && t.binaryShiftByteCount > 0 && (e += 10), e <= t.bitCount
                        }
                        toBitArray(t) {
                            let e = [];
                            for (let r = this.endBinaryShift(t.length).token; null !== r; r = r.getPrevious()) e.unshift(r);
                            let r = new p;
                            for (const n of e) n.appendTo(r, t);
                            return r
                        }
                        toString() {
                            return T.format("%s bits=%d bytes=%d", Br[this.mode], this.bitCount, this.binaryShiftByteCount)
                        }
                        static calculateBinaryShiftCost(t) {
                            return t.binaryShiftByteCount > 62 ? 21 : t.binaryShiftByteCount > 31 ? 20 : t.binaryShiftByteCount > 0 ? 10 : 0
                        }
                    }
                    Vr.INITIAL_STATE = new Vr(kr, Lr, 0, 0);
                    const zr = function(t) {
                        const e = T.getCharCode(" "),
                            r = T.getCharCode("."),
                            n = T.getCharCode(",");
                        t[Lr][e] = 1;
                        const i = T.getCharCode("Z"),
                            o = T.getCharCode("A");
                        for (let e = o; e <= i; e++) t[Lr][e] = e - o + 2;
                        t[Pr][e] = 1;
                        const s = T.getCharCode("z"),
                            a = T.getCharCode("a");
                        for (let e = a; e <= s; e++) t[Pr][e] = e - a + 2;
                        t[vr][e] = 1;
                        const c = T.getCharCode("9"),
                            l = T.getCharCode("0");
                        for (let e = l; e <= c; e++) t[vr][e] = e - l + 2;
                        t[vr][n] = 12, t[vr][r] = 13;
                        const h = ["\0", " ", "", "", "", "", "", "", "", "\b", "\t", "\n", "\v", "\f", "\r", "", "", "", "", "", "@", "\\", "^", "_", "`", "|", "~", ""];
                        for (let e = 0; e < h.length; e++) t[Fr][T.getCharCode(h[e])] = e;
                        const u = ["\0", "\r", "\0", "\0", "\0", "\0", "!", "'", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}"];
                        for (let e = 0; e < u.length; e++) T.getCharCode(u[e]) > 0 && (t[xr][T.getCharCode(u[e])] = e);
                        return t
                    }(w.createInt32Array(5, 256));
                    class Gr {
                        constructor(t) {
                            this.text = t
                        }
                        encode() {
                            const t = T.getCharCode(" "),
                                e = T.getCharCode("\n");
                            let r = Dr.singletonList(Vr.INITIAL_STATE);
                            for (let n = 0; n < this.text.length; n++) {
                                let i, o = n + 1 < this.text.length ? this.text[n + 1] : 0;
                                switch (this.text[n]) {
                                    case T.getCharCode("\r"):
                                        i = o === e ? 2 : 0;
                                        break;
                                    case T.getCharCode("."):
                                        i = o === t ? 3 : 0;
                                        break;
                                    case T.getCharCode(","):
                                        i = o === t ? 4 : 0;
                                        break;
                                    case T.getCharCode(":"):
                                        i = o === t ? 5 : 0;
                                        break;
                                    default:
                                        i = 0
                                }
                                i > 0 ? (r = Gr.updateStateListForPair(r, n, i), n++) : r = this.updateStateListForChar(r, n)
                            }
                            return Dr.min(r, ((t, e) => t.getBitCount() - e.getBitCount())).toBitArray(this.text)
                        }
                        updateStateListForChar(t, e) {
                            const r = [];
                            for (let n of t) this.updateStateForChar(n, e, r);
                            return Gr.simplifyStates(r)
                        }
                        updateStateForChar(t, e, r) {
                            let n = 255 & this.text[e],
                                i = zr[t.getMode()][n] > 0,
                                o = null;
                            for (let s = 0; s <= xr; s++) {
                                let a = zr[s][n];
                                if (a > 0) {
                                    if (null == o && (o = t.endBinaryShift(e)), !i || s === t.getMode() || s === vr) {
                                        const t = o.latchAndAppend(s, a);
                                        r.push(t)
                                    }
                                    if (!i && Hr[t.getMode()][s] >= 0) {
                                        const t = o.shiftAndAppend(s, a);
                                        r.push(t)
                                    }
                                }
                            }
                            if (t.getBinaryShiftByteCount() > 0 || 0 === zr[t.getMode()][n]) {
                                let n = t.addBinaryShiftChar(e);
                                r.push(n)
                            }
                        }
                        static updateStateListForPair(t, e, r) {
                            const n = [];
                            for (let i of t) this.updateStateForPair(i, e, r, n);
                            return this.simplifyStates(n)
                        }
                        static updateStateForPair(t, e, r, n) {
                            let i = t.endBinaryShift(e);
                            if (n.push(i.latchAndAppend(xr, r)), t.getMode() !== xr && n.push(i.shiftAndAppend(xr, r)), 3 === r || 4 === r) {
                                let t = i.latchAndAppend(vr, 16 - r).latchAndAppend(vr, 1);
                                n.push(t)
                            }
                            if (t.getBinaryShiftByteCount() > 0) {
                                let r = t.addBinaryShiftChar(e).addBinaryShiftChar(e + 1);
                                n.push(r)
                            }
                        }
                        static simplifyStates(t) {
                            let e = [];
                            for (const r of t) {
                                let t = !0;
                                for (const n of e) {
                                    if (n.isBetterThanOrEqualTo(r)) {
                                        t = !1;
                                        break
                                    }
                                    r.isBetterThanOrEqualTo(n) && (e = e.filter((t => t !== n)))
                                }
                                t && e.push(r)
                            }
                            return e
                        }
                    }
                    class Yr {
                        constructor() {}
                        static encodeBytes(t) {
                            return Yr.encode(t, Yr.DEFAULT_EC_PERCENT, Yr.DEFAULT_AZTEC_LAYERS)
                        }
                        static encode(t, e, r) {
                            let n, i, o, s, a, l = new Gr(t).encode(),
                                h = m.truncDivision(l.getSize() * e, 100) + 11,
                                u = l.getSize() + h;
                            if (r !== Yr.DEFAULT_AZTEC_LAYERS) {
                                if (n = r < 0, i = Math.abs(r), i > (n ? Yr.MAX_NB_BITS_COMPACT : Yr.MAX_NB_BITS)) throw new c(T.format("Illegal value %s for layers", r));
                                o = Yr.totalBitsInLayer(i, n), s = Yr.WORD_SIZE[i];
                                let t = o - o % s;
                                if (a = Yr.stuffBits(l, s), a.getSize() + h > t) throw new c("Data to large for user specified layer");
                                if (n && a.getSize() > 64 * s) throw new c("Data to large for user specified layer")
                            } else {
                                s = 0, a = null;
                                for (let t = 0;; t++) {
                                    if (t > Yr.MAX_NB_BITS) throw new c("Data too large for an Aztec code");
                                    if (n = t <= 3, i = n ? t + 1 : t, o = Yr.totalBitsInLayer(i, n), u > o) continue;
                                    null != a && s === Yr.WORD_SIZE[i] || (s = Yr.WORD_SIZE[i], a = Yr.stuffBits(l, s));
                                    let e = o - o % s;
                                    if (!(n && a.getSize() > 64 * s) && a.getSize() + h <= e) break
                                }
                            }
                            let d, f = Yr.generateCheckWords(a, o, s),
                                g = a.getSize() / s,
                                w = Yr.generateModeMessage(n, i, g),
                                p = (n ? 11 : 14) + 4 * i,
                                A = new Int32Array(p);
                            if (n) {
                                d = p;
                                for (let t = 0; t < A.length; t++) A[t] = t
                            } else {
                                d = p + 1 + 2 * m.truncDivision(m.truncDivision(p, 2) - 1, 15);
                                let t = m.truncDivision(p, 2),
                                    e = m.truncDivision(d, 2);
                                for (let r = 0; r < t; r++) {
                                    let n = r + m.truncDivision(r, 15);
                                    A[t - r - 1] = e - n - 1, A[t + r] = e + n + 1
                                }
                            }
                            let C = new N(d);
                            for (let t = 0, e = 0; t < i; t++) {
                                let r = 4 * (i - t) + (n ? 9 : 12);
                                for (let n = 0; n < r; n++) {
                                    let i = 2 * n;
                                    for (let o = 0; o < 2; o++) f.get(e + i + o) && C.set(A[2 * t + o], A[2 * t + n]), f.get(e + 2 * r + i + o) && C.set(A[2 * t + n], A[p - 1 - 2 * t - o]), f.get(e + 4 * r + i + o) && C.set(A[p - 1 - 2 * t - o], A[p - 1 - 2 * t - n]), f.get(e + 6 * r + i + o) && C.set(A[p - 1 - 2 * t - n], A[2 * t + o])
                                }
                                e += 8 * r
                            }
                            if (Yr.drawModeMessage(C, n, d, w), n) Yr.drawBullsEye(C, m.truncDivision(d, 2), 5);
                            else {
                                Yr.drawBullsEye(C, m.truncDivision(d, 2), 7);
                                for (let t = 0, e = 0; t < m.truncDivision(p, 2) - 1; t += 15, e += 16)
                                    for (let t = 1 & m.truncDivision(d, 2); t < d; t += 2) C.set(m.truncDivision(d, 2) - e, t), C.set(m.truncDivision(d, 2) + e, t), C.set(t, m.truncDivision(d, 2) - e), C.set(t, m.truncDivision(d, 2) + e)
                            }
                            let E = new Nr;
                            return E.setCompact(n), E.setSize(d), E.setLayers(i), E.setCodeWords(g), E.setMatrix(C), E
                        }
                        static drawBullsEye(t, e, r) {
                            for (let n = 0; n < r; n += 2)
                                for (let r = e - n; r <= e + n; r++) t.set(r, e - n), t.set(r, e + n), t.set(e - n, r), t.set(e + n, r);
                            t.set(e - r, e - r), t.set(e - r + 1, e - r), t.set(e - r, e - r + 1), t.set(e + r, e - r), t.set(e + r, e - r + 1), t.set(e + r, e + r - 1)
                        }
                        static generateModeMessage(t, e, r) {
                            let n = new p;
                            return t ? (n.appendBits(e - 1, 2), n.appendBits(r - 1, 6), n = Yr.generateCheckWords(n, 28, 4)) : (n.appendBits(e - 1, 5), n.appendBits(r - 1, 11), n = Yr.generateCheckWords(n, 40, 4)), n
                        }
                        static drawModeMessage(t, e, r, n) {
                            let i = m.truncDivision(r, 2);
                            if (e)
                                for (let e = 0; e < 7; e++) {
                                    let r = i - 3 + e;
                                    n.get(e) && t.set(r, i - 5), n.get(e + 7) && t.set(i + 5, r), n.get(20 - e) && t.set(r, i + 5), n.get(27 - e) && t.set(i - 5, r)
                                } else
                                    for (let e = 0; e < 10; e++) {
                                        let r = i - 5 + e + m.truncDivision(e, 5);
                                        n.get(e) && t.set(r, i - 7), n.get(e + 10) && t.set(i + 7, r), n.get(29 - e) && t.set(r, i + 7), n.get(39 - e) && t.set(i - 7, r)
                                    }
                        }
                        static generateCheckWords(t, e, r) {
                            let n = t.getSize() / r,
                                i = new dr(Yr.getGF(r)),
                                o = m.truncDivision(e, r),
                                s = Yr.bitsToWords(t, r, o);
                            i.encode(s, o - n);
                            let a = e % r,
                                c = new p;
                            c.appendBits(0, a);
                            for (const t of Array.from(s)) c.appendBits(t, r);
                            return c
                        }
                        static bitsToWords(t, e, r) {
                            let n, i, o = new Int32Array(r);
                            for (n = 0, i = t.getSize() / e; n < i; n++) {
                                let r = 0;
                                for (let i = 0; i < e; i++) r |= t.get(n * e + i) ? 1 << e - i - 1 : 0;
                                o[n] = r
                            }
                            return o
                        }
                        static getGF(t) {
                            switch (t) {
                                case 4:
                                    return q.AZTEC_PARAM;
                                case 6:
                                    return q.AZTEC_DATA_6;
                                case 8:
                                    return q.AZTEC_DATA_8;
                                case 10:
                                    return q.AZTEC_DATA_10;
                                case 12:
                                    return q.AZTEC_DATA_12;
                                default:
                                    throw new c("Unsupported word size " + t)
                            }
                        }
                        static stuffBits(t, e) {
                            let r = new p,
                                n = t.getSize(),
                                i = (1 << e) - 2;
                            for (let o = 0; o < n; o += e) {
                                let s = 0;
                                for (let r = 0; r < e; r++)(o + r >= n || t.get(o + r)) && (s |= 1 << e - 1 - r);
                                (s & i) === i ? (r.appendBits(s & i, e), o--) : 0 == (s & i) ? (r.appendBits(1 | s, e), o--) : r.appendBits(s, e)
                            }
                            return r
                        }
                        static totalBitsInLayer(t, e) {
                            return ((e ? 88 : 112) + 16 * t) * t
                        }
                    }
                    Yr.DEFAULT_EC_PERCENT = 33, Yr.DEFAULT_AZTEC_LAYERS = 0, Yr.MAX_NB_BITS = 32, Yr.MAX_NB_BITS_COMPACT = 4, Yr.WORD_SIZE = Int32Array.from([4, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]);
                    class Xr {
                        encode(t, e, r, n) {
                            return this.encodeWithHints(t, e, r, n, null)
                        }
                        encodeWithHints(t, e, r, n, i) {
                            let o = yr.ISO_8859_1,
                                s = Yr.DEFAULT_EC_PERCENT,
                                a = Yr.DEFAULT_AZTEC_LAYERS;
                            return null != i && (i.has(ur.CHARACTER_SET) && (o = Tr.forName(i.get(ur.CHARACTER_SET).toString())), i.has(ur.ERROR_CORRECTION) && (s = m.parseInt(i.get(ur.ERROR_CORRECTION).toString())), i.has(ur.AZTEC_LAYERS) && (a = m.parseInt(i.get(ur.AZTEC_LAYERS).toString()))), Xr.encodeLayers(t, e, r, n, o, s, a)
                        }
                        static encodeLayers(t, e, r, n, i, o, s) {
                            if (e !== U.AZTEC) throw new c("Can only encode AZTEC, but got " + e);
                            let a = Yr.encode(T.getBytes(t, i), o, s);
                            return Xr.renderResult(a, r, n)
                        }
                        static renderResult(t, e, r) {
                            let n = t.getMatrix();
                            if (null == n) throw new $;
                            let i = n.getWidth(),
                                o = n.getHeight(),
                                s = Math.max(e, i),
                                a = Math.max(r, o),
                                c = Math.min(s / i, a / o),
                                l = (s - i * c) / 2,
                                h = (a - o * c) / 2,
                                u = new N(s, a);
                            for (let t = 0, e = h; t < o; t++, e += c)
                                for (let r = 0, o = l; r < i; r++, o += c) n.get(r, t) && u.setRegion(o, e, c, c);
                            return u
                        }
                    }
                    t.AbstractExpandedDecoder = Vt, t.ArgumentException = a, t.ArithmeticException = K, t.AztecCode = Nr, t.AztecCodeReader = gt, t.AztecCodeWriter = Xr, t.AztecDecoder = et, t.AztecDetector = ft, t.AztecDetectorResult = st, t.AztecEncoder = Yr, t.AztecHighLevelEncoder = Gr, t.AztecPoint = dt, t.BarcodeFormat = U, t.Binarizer = u, t.BinaryBitmap = l, t.BitArray = p, t.BitMatrix = N, t.BitSource = he, t.BrowserAztecCodeReader = class extends F {
                        constructor(t = 500) {
                            super(new gt, t)
                        }
                    }, t.BrowserBarcodeReader = class extends F {
                        constructor(t = 500, e) {
                            super(new ie(e), t, e)
                        }
                    }, t.BrowserCodeReader = F, t.BrowserDatamatrixCodeReader = class extends F {
                        constructor(t = 500) {
                            super(new ge, t)
                        }
                    }, t.BrowserMultiFormatReader = class extends F {
                        constructor(t = null, e = 500) {
                            const r = new lr;
                            r.setHints(t), super(r, e)
                        }
                        decodeBitmap(t) {
                            return this.reader.decodeWithState(t)
                        }
                    }, t.BrowserPDF417Reader = class extends F {
                        constructor(t = 500) {
                            super(new ar, t)
                        }
                    }, t.BrowserQRCodeReader = class extends F {
                        constructor(t = 500) {
                            super(new Le, t)
                        }
                    }, t.BrowserQRCodeSvgWriter = Er, t.CharacterSetECI = I, t.ChecksumException = h, t.Code128Reader = mt, t.Code39Reader = pt, t.DataMatrixDecodedBitStreamParser = ue, t.DataMatrixReader = ge, t.DecodeHintType = C, t.DecoderResult = j, t.DefaultGridSampler = ht, t.DetectorResult = ot, t.EAN13Reader = Tt, t.EncodeHintType = ur, t.Exception = s, t.FormatException = E, t.GenericGF = q, t.GenericGFPoly = Q, t.GlobalHistogramBinarizer = M, t.GridSampler = ct, t.GridSamplerInstance = ut, t.HTMLCanvasElementLuminanceSource = B, t.HybridBinarizer = R, t.ITFReader = At, t.IllegalArgumentException = c, t.IllegalStateException = $, t.InvertedLuminanceSource = b, t.LuminanceSource = O, t.MathUtils = rt, t.MultiFormatOneDReader = ie, t.MultiFormatReader = lr, t.MultiFormatWriter = class {
                        encode(t, e, r, n, i) {
                            let o;
                            if (e !== U.QR_CODE) throw new c("No encoder available for format " + e);
                            return o = new Ir, o.encode(t, e, r, n, i)
                        }
                    }, t.NotFoundException = D, t.OneDReader = wt, t.PDF417DecodedBitStreamParser = or, t.PDF417DecoderErrorCorrection = He, t.PDF417Reader = ar, t.PDF417ResultMetadata = Ke, t.PerspectiveTransform = lt, t.PlanarYUVLuminanceSource = Sr, t.QRCodeByteMatrix = gr, t.QRCodeDataMask = Ee, t.QRCodeDecodedBitStreamParser = Te, t.QRCodeDecoderErrorCorrectionLevel = we, t.QRCodeDecoderFormatInformation = me, t.QRCodeEncoder = Cr, t.QRCodeEncoderQRCode = wr, t.QRCodeMaskUtil = fr, t.QRCodeMatrixUtil = pr, t.QRCodeMode = _e, t.QRCodeReader = Le, t.QRCodeVersion = Ce, t.QRCodeWriter = Ir, t.RGBLuminanceSource = _r, t.RSS14Reader = ne, t.RSSExpandedReader = ee, t.ReaderException = cr, t.ReedSolomonDecoder = tt, t.ReedSolomonEncoder = dr, t.ReedSolomonException = J, t.Result = x, t.ResultMetadataType = W, t.ResultPoint = it, t.StringUtils = T, t.UnsupportedOperationException = S, t.VideoInputDevice = L, t.WhiteRectangleDetector = at, t.WriterException = mr, t.ZXingArrays = w, t.ZXingCharset = Tr, t.ZXingInteger = m, t.ZXingStandardCharsets = yr, t.ZXingStringBuilder = y, t.ZXingStringEncoding = _, t.ZXingSystem = d, t.createAbstractExpandedDecoder = Jt, Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }(e)
            }
        },
        e = {};

    function r(n) {
        var i = e[n];
        if (void 0 !== i) return i.exports;
        var o = e[n] = {
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r), o.exports
    }
    r.d = (t, e) => {
        for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), r.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    };
    var n = {};
    (() => {
        "use strict";
        var t;
        r.r(n), r.d(n, {
                Html5Qrcode: () => W,
                Html5QrcodeScanType: () => i,
                Html5QrcodeScanner: () => ft,
                Html5QrcodeScannerState: () => w,
                Html5QrcodeSupportedFormats: () => t
            }),
            function(t) {
                t[t.QR_CODE = 0] = "QR_CODE", t[t.AZTEC = 1] = "AZTEC", t[t.CODABAR = 2] = "CODABAR", t[t.CODE_39 = 3] = "CODE_39", t[t.CODE_93 = 4] = "CODE_93", t[t.CODE_128 = 5] = "CODE_128", t[t.DATA_MATRIX = 6] = "DATA_MATRIX", t[t.MAXICODE = 7] = "MAXICODE", t[t.ITF = 8] = "ITF", t[t.EAN_13 = 9] = "EAN_13", t[t.EAN_8 = 10] = "EAN_8", t[t.PDF_417 = 11] = "PDF_417", t[t.RSS_14 = 12] = "RSS_14", t[t.RSS_EXPANDED = 13] = "RSS_EXPANDED", t[t.UPC_A = 14] = "UPC_A", t[t.UPC_E = 15] = "UPC_E", t[t.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION"
            }(t || (t = {}));
        var e, i, o = new Map([
            [t.QR_CODE, "QR_CODE"],
            [t.AZTEC, "AZTEC"],
            [t.CODABAR, "CODABAR"],
            [t.CODE_39, "CODE_39"],
            [t.CODE_93, "CODE_93"],
            [t.CODE_128, "CODE_128"],
            [t.DATA_MATRIX, "DATA_MATRIX"],
            [t.MAXICODE, "MAXICODE"],
            [t.ITF, "ITF"],
            [t.EAN_13, "EAN_13"],
            [t.EAN_8, "EAN_8"],
            [t.PDF_417, "PDF_417"],
            [t.RSS_14, "RSS_14"],
            [t.RSS_EXPANDED, "RSS_EXPANDED"],
            [t.UPC_A, "UPC_A"],
            [t.UPC_E, "UPC_E"],
            [t.UPC_EAN_EXTENSION, "UPC_EAN_EXTENSION"]
        ]);

        function s(e) {
            return Object.values(t).includes(e)
        }! function(t) {
            t[t.UNKNOWN = 0] = "UNKNOWN", t[t.URL = 1] = "URL"
        }(e || (e = {})),
        function(t) {
            t[t.SCAN_TYPE_CAMERA = 0] = "SCAN_TYPE_CAMERA", t[t.SCAN_TYPE_FILE = 1] = "SCAN_TYPE_FILE"
        }(i || (i = {}));
        var a, c = function() {
                function t() {}
                return t.GITHUB_PROJECT_URL = "https://google.com", t.SCAN_DEFAULT_FPS = 2, t.DEFAULT_DISABLE_FLIP = !1, t.DEFAULT_REMEMBER_LAST_CAMERA_USED = !0, t.DEFAULT_SUPPORTED_SCAN_TYPE = [i.SCAN_TYPE_CAMERA, i.SCAN_TYPE_FILE], t
            }(),
            l = function() {
                function t(t, e) {
                    this.format = t, this.formatName = e
                }
                return t.prototype.toString = function() {
                    return this.formatName
                }, t.create = function(e) {
                    if (!o.has(e)) throw "".concat(e, " not in html5QrcodeSupportedFormatsTextMap");
                    return new t(e, o.get(e))
                }, t
            }(),
            h = function() {
                function t() {}
                return t.createFromText = function(t) {
                    return {
                        decodedText: t,
                        result: {
                            text: t
                        }
                    }
                }, t.createFromQrcodeResult = function(t) {
                    return {
                        decodedText: t.text,
                        result: t
                    }
                }, t
            }();
        ! function(t) {
            t[t.UNKWOWN_ERROR = 0] = "UNKWOWN_ERROR", t[t.IMPLEMENTATION_ERROR = 1] = "IMPLEMENTATION_ERROR", t[t.NO_CODE_FOUND_ERROR = 2] = "NO_CODE_FOUND_ERROR"
        }(a || (a = {}));
        var u = function() {
                function t() {}
                return t.createFrom = function(t) {
                    return {
                        errorMessage: t,
                        type: a.UNKWOWN_ERROR
                    }
                }, t
            }(),
            d = function() {
                function t(t) {
                    this.verbose = t
                }
                return t.prototype.log = function(t) {
                    this.verbose && console.log(t)
                }, t.prototype.warn = function(t) {
                    this.verbose && console.warn(t)
                }, t.prototype.logError = function(t, e) {
                    (this.verbose || !0 === e) && console.error(t)
                }, t.prototype.logErrors = function(t) {
                    if (0 === t.length) throw "Logger#logError called without arguments";
                    this.verbose && console.error(t)
                }, t
            }();

        function f(t) {
            return null == t
        }
        var g, w, m = function() {
                function t() {}
                return t.codeParseError = function(t) {
                    return "QR code parse error, error = ".concat(t)
                }, t.errorGettingUserMedia = function(t) {
                    return "Error getting userMedia, error = ".concat(t)
                }, t.onlyDeviceSupportedError = function() {
                    return "The device doesn't support navigator.mediaDevices , only supported cameraIdOrConfig in this case is deviceId parameter (string)."
                }, t.cameraStreamingNotSupported = function() {
                    return "Camera streaming not supported by the browser."
                }, t.unableToQuerySupportedDevices = function() {
                    return "Unable to query supported devices, unknown error."
                }, t.insecureContextCameraQueryError = function() {
                    return "Camera access is only supported in secure context like https or localhost."
                }, t.scannerPaused = function() {
                    return "Scanner paused"
                }, t
            }(),
            p = function() {
                function t() {}
                return t.scanningStatus = function() {
                    return "Scanning"
                }, t.idleStatus = function() {
                    return "Idle"
                }, t.errorStatus = function() {
                    return "Error"
                }, t.permissionStatus = function() {
                    return "Permission"
                }, t.noCameraFoundErrorStatus = function() {
                    return "No Cameras"
                }, t.lastMatch = function(t) {
                    return "Last Match: ".concat(t)
                }, t.codeScannerTitle = function() {
                    return "Code Scanner"
                }, t.cameraPermissionTitle = function() {
                    return "Request Camera Permissions"
                }, t.cameraPermissionRequesting = function() {
                    return "Requesting camera permissions..."
                }, t.noCameraFound = function() {
                    return "No camera found"
                }, t.scanButtonStopScanningText = function() {
                    return "Stop Scanning"
                }, t.scanButtonStartScanningText = function() {
                    return "Start Scanning"
                }, t.torchOnButton = function() {
                    return "Switch On Torch"
                }, t.torchOffButton = function() {
                    return "Switch Off Torch"
                }, t.torchOnFailedMessage = function() {
                    return "Failed to turn on torch"
                }, t.torchOffFailedMessage = function() {
                    return "Failed to turn off torch"
                }, t.scanButtonScanningStarting = function() {
                    return "Launching Camera..."
                }, t.textIfCameraScanSelected = function() {
                    return "Scan an Image File"
                }, t.textIfFileScanSelected = function() {
                    return "Scan using camera directly"
                }, t.selectCamera = function() {
                    return "Select Camera"
                }, t.fileSelectionChooseImage = function() {
                    return "Choose Image"
                }, t.fileSelectionChooseAnother = function() {
                    return "Choose Another"
                }, t.fileSelectionNoImageSelected = function() {
                    return "No image choosen"
                }, t.anonymousCameraPrefix = function() {
                    return "Anonymous Camera"
                }, t.dragAndDropMessage = function() {
                    return "Or drop an image to scan"
                }, t.dragAndDropMessageOnlyImages = function() {
                    return "Or drop an image to scan (other files not supported)"
                }, t.zoom = function() {
                    return "zoom"
                }, t.loadingImage = function() {
                    return "Loading image..."
                }, t.cameraScanAltText = function() {
                    return "Camera based scan"
                }, t.fileScanAltText = function() {
                    return "Fule based scan"
                }, t
            }(),
            A = function() {
                function t() {}
                return t.poweredBy = function() {
                    return "Powered by "
                }, t.reportIssues = function() {
                    return "Report issues"
                }, t
            }(),
            C = function() {
                function t() {}
                return t.isMediaStreamConstraintsValid = function(t, e) {
                    if ("object" != typeof t) {
                        var r = typeof t;
                        return e.logError("videoConstraints should be of type object, the " + "object passed is of type ".concat(r, "."), !0), !1
                    }
                    for (var n = new Set(["autoGainControl", "channelCount", "echoCancellation", "latency", "noiseSuppression", "sampleRate", "sampleSize", "volume"]), i = 0, o = Object.keys(t); i < o.length; i++) {
                        var s = o[i];
                        if (n.has(s)) return e.logError("".concat(s, " is not supported videoConstaints."), !0), !1
                    }
                    return !0
                }, t
            }(),
            E = r(449),
            I = function() {
                function e(e, r, n) {
                    if (this.formatMap = new Map([
                            [t.QR_CODE, E.BarcodeFormat.QR_CODE],
                            [t.AZTEC, E.BarcodeFormat.AZTEC],
                            [t.CODABAR, E.BarcodeFormat.CODABAR],
                            [t.CODE_39, E.BarcodeFormat.CODE_39],
                            [t.CODE_93, E.BarcodeFormat.CODE_93],
                            [t.CODE_128, E.BarcodeFormat.CODE_128],
                            [t.DATA_MATRIX, E.BarcodeFormat.DATA_MATRIX],
                            [t.MAXICODE, E.BarcodeFormat.MAXICODE],
                            [t.ITF, E.BarcodeFormat.ITF],
                            [t.EAN_13, E.BarcodeFormat.EAN_13],
                            [t.EAN_8, E.BarcodeFormat.EAN_8],
                            [t.PDF_417, E.BarcodeFormat.PDF_417],
                            [t.RSS_14, E.BarcodeFormat.RSS_14],
                            [t.RSS_EXPANDED, E.BarcodeFormat.RSS_EXPANDED],
                            [t.UPC_A, E.BarcodeFormat.UPC_A],
                            [t.UPC_E, E.BarcodeFormat.UPC_E],
                            [t.UPC_EAN_EXTENSION, E.BarcodeFormat.UPC_EAN_EXTENSION]
                        ]), this.reverseFormatMap = this.createReverseFormatMap(), !E) throw "Use html5qrcode.min.js without edit, ZXing not found.";
                    this.verbose = r, this.logger = n;
                    var i = this.createZXingFormats(e),
                        o = new Map;
                    o.set(E.DecodeHintType.POSSIBLE_FORMATS, i), o.set(E.DecodeHintType.TRY_HARDER, !1), this.hints = o
                }
                return e.prototype.decodeAsync = function(t) {
                    var e = this;
                    return new Promise((function(r, n) {
                        try {
                            r(e.decode(t))
                        } catch (t) {
                            n(t)
                        }
                    }))
                }, e.prototype.decode = function(t) {
                    var e = new E.MultiFormatReader(this.verbose, this.hints),
                        r = new E.HTMLCanvasElementLuminanceSource(t),
                        n = new E.BinaryBitmap(new E.HybridBinarizer(r)),
                        i = e.decode(n);
                    return {
                        text: i.text,
                        format: l.create(this.toHtml5QrcodeSupportedFormats(i.format)),
                        debugData: this.createDebugData()
                    }
                }, e.prototype.createReverseFormatMap = function() {
                    var t = new Map;
                    return this.formatMap.forEach((function(e, r, n) {
                        t.set(e, r)
                    })), t
                }, e.prototype.toHtml5QrcodeSupportedFormats = function(t) {
                    if (!this.reverseFormatMap.has(t)) throw "reverseFormatMap doesn't have ".concat(t);
                    return this.reverseFormatMap.get(t)
                }, e.prototype.createZXingFormats = function(t) {
                    for (var e = [], r = 0, n = t; r < n.length; r++) {
                        var i = n[r];
                        this.formatMap.has(i) ? e.push(this.formatMap.get(i)) : this.logger.logError("".concat(i, " is not supported by") + "ZXingHtml5QrcodeShim")
                    }
                    return e
                }, e.prototype.createDebugData = function() {
                    return {
                        decoderName: "zxing-js"
                    }
                }, e
            }(),
            S = function() {
                function e(r, n, i) {
                    if (this.formatMap = new Map([
                            [t.QR_CODE, "qr_code"],
                            [t.AZTEC, "aztec"],
                            [t.CODABAR, "codabar"],
                            [t.CODE_39, "code_39"],
                            [t.CODE_93, "code_93"],
                            [t.CODE_128, "code_128"],
                            [t.DATA_MATRIX, "data_matrix"],
                            [t.ITF, "itf"],
                            [t.EAN_13, "ean_13"],
                            [t.EAN_8, "ean_8"],
                            [t.PDF_417, "pdf417"],
                            [t.UPC_A, "upc_a"],
                            [t.UPC_E, "upc_e"]
                        ]), this.reverseFormatMap = this.createReverseFormatMap(), !e.isSupported()) throw "Use html5qrcode.min.js without edit, Use BarcodeDetectorDelegate only if it isSupported();";
                    this.verbose = n, this.logger = i;
                    var o = this.createBarcodeDetectorFormats(r);
                    if (this.detector = new BarcodeDetector(o), !this.detector) throw "BarcodeDetector detector not supported"
                }
                return e.isSupported = function() {
                    return "BarcodeDetector" in window && void 0 !== new BarcodeDetector({
                        formats: ["qr_code"]
                    })
                }, e.prototype.decodeAsync = function(t) {
                    return e = this, r = void 0, i = function() {
                        var e, r;
                        return function(t, e) {
                            var r, n, i, o, s = {
                                label: 0,
                                sent: function() {
                                    if (1 & i[0]) throw i[1];
                                    return i[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return o = {
                                next: a(0),
                                throw: a(1),
                                return: a(2)
                            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                return this
                            }), o;

                            function a(a) {
                                return function(c) {
                                    return function(a) {
                                        if (r) throw new TypeError("Generator is already executing.");
                                        for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                            if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                            switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                                case 0:
                                                case 1:
                                                    i = a;
                                                    break;
                                                case 4:
                                                    return s.label++, {
                                                        value: a[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    s.label++, n = a[1], a = [0];
                                                    continue;
                                                case 7:
                                                    a = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                        s = 0;
                                                        continue
                                                    }
                                                    if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                        s.label = a[1];
                                                        break
                                                    }
                                                    if (6 === a[0] && s.label < i[1]) {
                                                        s.label = i[1], i = a;
                                                        break
                                                    }
                                                    if (i && s.label < i[2]) {
                                                        s.label = i[2], s.ops.push(a);
                                                        break
                                                    }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            a = e.call(t, s)
                                        } catch (t) {
                                            a = [6, t], n = 0
                                        } finally {
                                            r = i = 0
                                        }
                                        if (5 & a[0]) throw a[1];
                                        return {
                                            value: a[0] ? a[1] : void 0,
                                            done: !0
                                        }
                                    }([a, c])
                                }
                            }
                        }(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.detector.detect(t)];
                                case 1:
                                    if (!(e = n.sent()) || 0 === e.length) throw "No barcode or QR code detected.";
                                    return [2, {
                                        text: (r = this.selectLargestBarcode(e)).rawValue,
                                        format: l.create(this.toHtml5QrcodeSupportedFormats(r.format)),
                                        debugData: this.createDebugData()
                                    }]
                            }
                        }))
                    }, new((n = void 0) || (n = Promise))((function(t, o) {
                        function s(t) {
                            try {
                                c(i.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                c(i.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function c(e) {
                            var r;
                            e.done ? t(e.value) : (r = e.value, r instanceof n ? r : new n((function(t) {
                                t(r)
                            }))).then(s, a)
                        }
                        c((i = i.apply(e, r || [])).next())
                    }));
                    var e, r, n, i
                }, e.prototype.selectLargestBarcode = function(t) {
                    for (var e = null, r = 0, n = 0, i = t; n < i.length; n++) {
                        var o = i[n],
                            s = o.boundingBox.width * o.boundingBox.height;
                        s > r && (r = s, e = o)
                    }
                    if (!e) throw "No largest barcode found";
                    return e
                }, e.prototype.createBarcodeDetectorFormats = function(t) {
                    for (var e = [], r = 0, n = t; r < n.length; r++) {
                        var i = n[r];
                        this.formatMap.has(i) ? e.push(this.formatMap.get(i)) : this.logger.warn("".concat(i, " is not supported by") + "BarcodeDetectorDelegate")
                    }
                    return {
                        formats: e
                    }
                }, e.prototype.toHtml5QrcodeSupportedFormats = function(t) {
                    if (!this.reverseFormatMap.has(t)) throw "reverseFormatMap doesn't have ".concat(t);
                    return this.reverseFormatMap.get(t)
                }, e.prototype.createReverseFormatMap = function() {
                    var t = new Map;
                    return this.formatMap.forEach((function(e, r, n) {
                        t.set(e, r)
                    })), t
                }, e.prototype.createDebugData = function() {
                    return {
                        decoderName: "BarcodeDetector"
                    }
                }, e
            }(),
            _ = function(t, e, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            },
            T = function(t, e) {
                var r, n, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(a) {
                    return function(c) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < i[1]) {
                                            s.label = i[1], i = a;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(a);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                a = e.call(t, s)
                            } catch (t) {
                                a = [6, t], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, c])
                    }
                }
            },
            y = function() {
                function t(t, e, r, n) {
                    this.EXECUTIONS_TO_REPORT_PERFORMANCE = 100, this.executions = 0, this.executionResults = [], this.wasPrimaryDecoderUsedInLastDecode = !1, this.verbose = r, e && S.isSupported() ? (this.primaryDecoder = new S(t, r, n), this.secondaryDecoder = new I(t, r, n)) : this.primaryDecoder = new I(t, r, n)
                }
                return t.prototype.decodeAsync = function(t) {
                    return _(this, void 0, void 0, (function() {
                        var e;
                        return T(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    e = performance.now(), r.label = 1;
                                case 1:
                                    return r.trys.push([1, , 3, 4]), [4, this.getDecoder().decodeAsync(t)];
                                case 2:
                                    return [2, r.sent()];
                                case 3:
                                    return this.possiblyLogPerformance(e), [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, t.prototype.decodeRobustlyAsync = function(t) {
                    return _(this, void 0, void 0, (function() {
                        var e, r;
                        return T(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    e = performance.now(), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), [4, this.primaryDecoder.decodeAsync(t)];
                                case 2:
                                    return [2, n.sent()];
                                case 3:
                                    if (r = n.sent(), this.secondaryDecoder) return [2, this.secondaryDecoder.decodeAsync(t)];
                                    throw r;
                                case 4:
                                    return this.possiblyLogPerformance(e), [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }))
                }, t.prototype.getDecoder = function() {
                    return this.secondaryDecoder ? !1 === this.wasPrimaryDecoderUsedInLastDecode ? (this.wasPrimaryDecoderUsedInLastDecode = !0, this.primaryDecoder) : (this.wasPrimaryDecoderUsedInLastDecode = !1, this.secondaryDecoder) : this.primaryDecoder
                }, t.prototype.possiblyLogPerformance = function(t) {
                    if (this.verbose) {
                        var e = performance.now() - t;
                        this.executionResults.push(e), this.executions++, this.possiblyFlushPerformanceReport()
                    }
                }, t.prototype.possiblyFlushPerformanceReport = function() {
                    if (!(this.executions < this.EXECUTIONS_TO_REPORT_PERFORMANCE)) {
                        for (var t = 0, e = 0, r = this.executionResults; e < r.length; e++) t += r[e];
                        var n = t / this.executionResults.length;
                        console.log("".concat(n, " ms for ").concat(this.executionResults.length, " last runs.")), this.executions = 0, this.executionResults = []
                    }
                }, t
            }(),
            N = (g = function(t, e) {
                return g = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                }, g(t, e)
            }, function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function r() {
                    this.constructor = t
                }
                g(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }),
            D = function(t, e, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            },
            M = function(t, e) {
                var r, n, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(a) {
                    return function(c) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < i[1]) {
                                            s.label = i[1], i = a;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(a);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                a = e.call(t, s)
                            } catch (t) {
                                a = [6, t], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, c])
                    }
                }
            },
            R = function() {
                function t(t, e) {
                    this.name = t, this.track = e
                }
                return t.prototype.isSupported = function() {
                    return !!this.track.getCapabilities && this.name in this.track.getCapabilities()
                }, t.prototype.apply = function(t) {
                    var e = {};
                    e[this.name] = t;
                    var r = {
                        advanced: [e]
                    };
                    return this.track.applyConstraints(r)
                }, t.prototype.value = function() {
                    var t = this.track.getSettings();
                    return this.name in t ? t[this.name] : null
                }, t
            }(),
            O = function(t) {
                function e(e) {
                    return t.call(this, "zoom", e) || this
                }
                return N(e, t), e
            }(function(t) {
                function e(e, r) {
                    return t.call(this, e, r) || this
                }
                return N(e, t), e.prototype.min = function() {
                    return this.getCapabilities().min
                }, e.prototype.max = function() {
                    return this.getCapabilities().max
                }, e.prototype.step = function() {
                    return this.getCapabilities().step
                }, e.prototype.apply = function(t) {
                    var e = {};
                    e[this.name] = t;
                    var r = {
                        advanced: [e]
                    };
                    return this.track.applyConstraints(r)
                }, e.prototype.getCapabilities = function() {
                    this.failIfNotSupported();
                    var t = this.track.getCapabilities()[this.name];
                    return {
                        min: t.min,
                        max: t.max,
                        step: t.step
                    }
                }, e.prototype.failIfNotSupported = function() {
                    if (!this.isSupported()) throw new Error("".concat(this.name, " capability not supported"))
                }, e
            }(R)),
            b = function(t) {
                function e(e) {
                    return t.call(this, "torch", e) || this
                }
                return N(e, t), e
            }(R),
            B = function() {
                function t(t) {
                    this.track = t
                }
                return t.prototype.zoomFeature = function() {
                    return new O(this.track)
                }, t.prototype.torchFeature = function() {
                    return new b(this.track)
                }, t
            }(),
            L = function() {
                function t(t, e, r) {
                    this.isClosed = !1, this.parentElement = t, this.mediaStream = e, this.callbacks = r, this.surface = this.createVideoElement(this.parentElement.clientWidth), t.append(this.surface)
                }
                return t.prototype.createVideoElement = function(t) {
                    var e = document.createElement("video");
                    return e.style.width = "".concat(t, "px"), e.style.display = "block", e.muted = !0, e.setAttribute("muted", "true"), e.playsInline = !0, e
                }, t.prototype.setupSurface = function() {
                    var t = this;
                    this.surface.onabort = function() {
                        throw "RenderedCameraImpl video surface onabort() called"
                    }, this.surface.onerror = function() {
                        throw "RenderedCameraImpl video surface onerror() called"
                    };
                    var e = function() {
                        var r = t.surface.clientWidth,
                            n = t.surface.clientHeight;
                        t.callbacks.onRenderSurfaceReady(r, n), t.surface.removeEventListener("playing", e)
                    };
                    this.surface.addEventListener("playing", e), this.surface.srcObject = this.mediaStream, this.surface.play()
                }, t.create = function(e, r, n, i) {
                    return D(this, void 0, void 0, (function() {
                        var o, s;
                        return M(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return o = new t(e, r, i), n.aspectRatio ? (s = {
                                        aspectRatio: n.aspectRatio
                                    }, [4, o.getFirstTrackOrFail().applyConstraints(s)]) : [3, 2];
                                case 1:
                                    a.sent(), a.label = 2;
                                case 2:
                                    return o.setupSurface(), [2, o]
                            }
                        }))
                    }))
                }, t.prototype.failIfClosed = function() {
                    if (this.isClosed) throw "The RenderedCamera has already been closed."
                }, t.prototype.getFirstTrackOrFail = function() {
                    if (this.failIfClosed(), 0 === this.mediaStream.getVideoTracks().length) throw "No video tracks found";
                    return this.mediaStream.getVideoTracks()[0]
                }, t.prototype.pause = function() {
                    this.failIfClosed(), this.surface.pause()
                }, t.prototype.resume = function(t) {
                    this.failIfClosed();
                    var e = this,
                        r = function() {
                            setTimeout(t, 200), e.surface.removeEventListener("playing", r)
                        };
                    this.surface.addEventListener("playing", r), this.surface.play()
                }, t.prototype.isPaused = function() {
                    return this.failIfClosed(), this.surface.paused
                }, t.prototype.getSurface = function() {
                    return this.failIfClosed(), this.surface
                }, t.prototype.getRunningTrackCapabilities = function() {
                    return this.getFirstTrackOrFail().getCapabilities()
                }, t.prototype.getRunningTrackSettings = function() {
                    return this.getFirstTrackOrFail().getSettings()
                }, t.prototype.applyVideoConstraints = function(t) {
                    return D(this, void 0, void 0, (function() {
                        return M(this, (function(e) {
                            if ("aspectRatio" in t) throw "Changing 'aspectRatio' in run-time is not yet supported.";
                            return [2, this.getFirstTrackOrFail().applyConstraints(t)]
                        }))
                    }))
                }, t.prototype.close = function() {
                    if (this.isClosed) return Promise.resolve();
                    var t = this;
                    return new Promise((function(e, r) {
                        var n = t.mediaStream.getVideoTracks().length,
                            i = 0;
                        t.mediaStream.getVideoTracks().forEach((function(r) {
                            t.mediaStream.removeTrack(r), r.stop(), ++i >= n && (t.isClosed = !0, t.parentElement.removeChild(t.surface), e())
                        }))
                    }))
                }, t.prototype.getCapabilities = function() {
                    return new B(this.getFirstTrackOrFail())
                }, t
            }(),
            P = function() {
                function t(t) {
                    this.mediaStream = t
                }
                return t.prototype.render = function(t, e, r) {
                    return D(this, void 0, void 0, (function() {
                        return M(this, (function(n) {
                            return [2, L.create(t, this.mediaStream, e, r)]
                        }))
                    }))
                }, t.create = function(e) {
                    return D(this, void 0, void 0, (function() {
                        var r;
                        return M(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!navigator.mediaDevices) throw "navigator.mediaDevices not supported";
                                    return r = {
                                        audio: !1,
                                        video: e
                                    }, [4, navigator.mediaDevices.getUserMedia(r)];
                                case 1:
                                    return [2, new t(n.sent())]
                            }
                        }))
                    }))
                }, t
            }(),
            v = function(t, e, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            },
            F = function(t, e) {
                var r, n, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(a) {
                    return function(c) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < i[1]) {
                                            s.label = i[1], i = a;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(a);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                a = e.call(t, s)
                            } catch (t) {
                                a = [6, t], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, c])
                    }
                }
            },
            x = function() {
                function t() {}
                return t.failIfNotSupported = function() {
                    return v(this, void 0, void 0, (function() {
                        return F(this, (function(e) {
                            if (!navigator.mediaDevices) throw "navigator.mediaDevices not supported";
                            return [2, new t]
                        }))
                    }))
                }, t.prototype.create = function(t) {
                    return v(this, void 0, void 0, (function() {
                        return F(this, (function(e) {
                            return [2, P.create(t)]
                        }))
                    }))
                }, t
            }(),
            k = function() {
                function t() {}
                return t.retrieve = function() {
                    if (navigator.mediaDevices) return t.getCamerasFromMediaDevices();
                    var e = MediaStreamTrack;
                    return MediaStreamTrack && e.getSources ? t.getCamerasFromMediaStreamTrack() : t.rejectWithError()
                }, t.rejectWithError = function() {
                    var e = m.unableToQuerySupportedDevices();
                    return t.isHttpsOrLocalhost() || (e = m.insecureContextCameraQueryError()), Promise.reject(e)
                }, t.isHttpsOrLocalhost = function() {
                    if ("https:" === location.protocol) return !0;
                    var t = location.host.split(":")[0];
                    return "127.0.0.1" === t || "localhost" === t
                }, t.getCamerasFromMediaDevices = function() {
                    return t = this, e = void 0, n = function() {
                        var t, e, r, n, i, o, s;
                        return function(t, e) {
                            var r, n, i, o, s = {
                                label: 0,
                                sent: function() {
                                    if (1 & i[0]) throw i[1];
                                    return i[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return o = {
                                next: a(0),
                                throw: a(1),
                                return: a(2)
                            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                return this
                            }), o;

                            function a(a) {
                                return function(c) {
                                    return function(a) {
                                        if (r) throw new TypeError("Generator is already executing.");
                                        for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                            if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                            switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                                case 0:
                                                case 1:
                                                    i = a;
                                                    break;
                                                case 4:
                                                    return s.label++, {
                                                        value: a[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    s.label++, n = a[1], a = [0];
                                                    continue;
                                                case 7:
                                                    a = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                        s = 0;
                                                        continue
                                                    }
                                                    if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                        s.label = a[1];
                                                        break
                                                    }
                                                    if (6 === a[0] && s.label < i[1]) {
                                                        s.label = i[1], i = a;
                                                        break
                                                    }
                                                    if (i && s.label < i[2]) {
                                                        s.label = i[2], s.ops.push(a);
                                                        break
                                                    }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            a = e.call(t, s)
                                        } catch (t) {
                                            a = [6, t], n = 0
                                        } finally {
                                            r = i = 0
                                        }
                                        if (5 & a[0]) throw a[1];
                                        return {
                                            value: a[0] ? a[1] : void 0,
                                            done: !0
                                        }
                                    }([a, c])
                                }
                            }
                        }(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return t = function(t) {
                                        for (var e = 0, r = t.getVideoTracks(); e < r.length; e++) {
                                            var n = r[e];
                                            n.enabled = !1, n.stop(), t.removeTrack(n)
                                        }
                                    }, [4, navigator.mediaDevices.getUserMedia({
                                        audio: !1,
                                        video: !0
                                    })];
                                case 1:
                                    return e = a.sent(), [4, navigator.mediaDevices.enumerateDevices()];
                                case 2:
                                    for (r = a.sent(), n = [], i = 0, o = r; i < o.length; i++) "videoinput" === (s = o[i]).kind && n.push({
                                        id: s.deviceId,
                                        label: s.label
                                    });
                                    return t(e), [2, n]
                            }
                        }))
                    }, new((r = void 0) || (r = Promise))((function(i, o) {
                        function s(t) {
                            try {
                                c(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                c(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function c(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(s, a)
                        }
                        c((n = n.apply(t, e || [])).next())
                    }));
                    var t, e, r, n
                }, t.getCamerasFromMediaStreamTrack = function() {
                    return new Promise((function(t, e) {
                        MediaStreamTrack.getSources((function(e) {
                            for (var r = [], n = 0, i = e; n < i.length; n++) {
                                var o = i[n];
                                "video" === o.kind && r.push({
                                    id: o.id,
                                    label: o.label
                                })
                            }
                            t(r)
                        }))
                    }))
                }, t
            }();
        ! function(t) {
            t[t.UNKNOWN = 0] = "UNKNOWN", t[t.NOT_STARTED = 1] = "NOT_STARTED", t[t.SCANNING = 2] = "SCANNING", t[t.PAUSED = 3] = "PAUSED"
        }(w || (w = {}));
        var U, H = function() {
                function t() {
                    this.state = w.NOT_STARTED, this.onGoingTransactionNewState = w.UNKNOWN
                }
                return t.prototype.directTransition = function(t) {
                    this.failIfTransitionOngoing(), this.validateTransition(t), this.state = t
                }, t.prototype.startTransition = function(t) {
                    return this.failIfTransitionOngoing(), this.validateTransition(t), this.onGoingTransactionNewState = t, this
                }, t.prototype.execute = function() {
                    if (this.onGoingTransactionNewState === w.UNKNOWN) throw "Transaction is already cancelled, cannot execute().";
                    var t = this.onGoingTransactionNewState;
                    this.onGoingTransactionNewState = w.UNKNOWN, this.directTransition(t)
                }, t.prototype.cancel = function() {
                    if (this.onGoingTransactionNewState === w.UNKNOWN) throw "Transaction is already cancelled, cannot cancel().";
                    this.onGoingTransactionNewState = w.UNKNOWN
                }, t.prototype.getState = function() {
                    return this.state
                }, t.prototype.failIfTransitionOngoing = function() {
                    if (this.onGoingTransactionNewState !== w.UNKNOWN) throw "Cannot transition to a new state, already under transition"
                }, t.prototype.validateTransition = function(t) {
                    switch (this.state) {
                        case w.UNKNOWN:
                            throw "Transition from unknown is not allowed";
                        case w.NOT_STARTED:
                            this.failIfNewStateIs(t, [w.PAUSED]);
                        case w.SCANNING:
                        case w.PAUSED:
                    }
                }, t.prototype.failIfNewStateIs = function(t, e) {
                    for (var r = 0, n = e; r < n.length; r++)
                        if (t === n[r]) throw "Cannot transition from ".concat(this.state, " to ").concat(t)
                }, t
            }(),
            V = function() {
                function t(t) {
                    this.stateManager = t
                }
                return t.prototype.startTransition = function(t) {
                    return this.stateManager.startTransition(t)
                }, t.prototype.directTransition = function(t) {
                    this.stateManager.directTransition(t)
                }, t.prototype.getState = function() {
                    return this.stateManager.getState()
                }, t.prototype.canScanFile = function() {
                    return this.stateManager.getState() === w.NOT_STARTED
                }, t.prototype.isScanning = function() {
                    return this.stateManager.getState() !== w.NOT_STARTED
                }, t.prototype.isStrictlyScanning = function() {
                    return this.stateManager.getState() === w.SCANNING
                }, t.prototype.isPaused = function() {
                    return this.stateManager.getState() === w.PAUSED
                }, t
            }(),
            z = function() {
                function t() {}
                return t.create = function() {
                    return new V(new H)
                }, t
            }(),
            G = function() {
                var t = function(e, r) {
                    return t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                    }, t(e, r)
                };
                return function(e, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                }
            }(),
            Y = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return G(e, t), e.DEFAULT_WIDTH = 300, e.DEFAULT_WIDTH_OFFSET = 2, e.FILE_SCAN_MIN_HEIGHT = 300, e.FILE_SCAN_HIDDEN_CANVAS_PADDING = 100, e.MIN_QR_BOX_SIZE = 50, e.SHADED_LEFT = 1, e.SHADED_RIGHT = 2, e.SHADED_TOP = 3, e.SHADED_BOTTOM = 4, e.SHADED_REGION_ELEMENT_ID = "qr-shaded-region", e.VERBOSE = !1, e.BORDER_SHADER_DEFAULT_COLOR = "#ffffff", e.BORDER_SHADER_MATCH_COLOR = "rgb(90, 193, 56)", e
            }(c),
            X = function() {
                function t(t, e) {
                    this.logger = e, this.fps = Y.SCAN_DEFAULT_FPS, t ? (t.fps && (this.fps = t.fps), this.disableFlip = !0 === t.disableFlip, this.qrbox = t.qrbox, this.aspectRatio = t.aspectRatio, this.videoConstraints = t.videoConstraints) : this.disableFlip = Y.DEFAULT_DISABLE_FLIP
                }
                return t.prototype.isMediaStreamConstraintsValid = function() {
                    return this.videoConstraints ? C.isMediaStreamConstraintsValid(this.videoConstraints, this.logger) : (this.logger.logError("Empty videoConstraints", !0), !1)
                }, t.prototype.isShadedBoxEnabled = function() {
                    return !f(this.qrbox)
                }, t.create = function(e, r) {
                    return new t(e, r)
                }, t
            }(),
            W = function() {
                function e(t, e) {
                    if (this.element = null, this.canvasElement = null, this.scannerPausedUiElement = null, this.hasBorderShaders = null, this.borderShaders = null, this.qrMatch = null, this.renderedCamera = null, this.qrRegion = null, this.context = null, this.lastScanImageFile = null, this.isScanning = !1, !document.getElementById(t)) throw "HTML Element with id=".concat(t, " not found");
                    var r;
                    this.elementId = t, this.verbose = !1, "boolean" == typeof e ? this.verbose = !0 === e : e && (r = e, this.verbose = !0 === r.verbose, r.experimentalFeatures), this.logger = new d(this.verbose), this.qrcode = new y(this.getSupportedFormats(e), this.getUseBarCodeDetectorIfSupported(r), this.verbose, this.logger), this.foreverScanTimeout, this.shouldScan = !0, this.stateManagerProxy = z.create()
                }
                return e.prototype.start = function(t, e, r, n) {
                    var i, o = this;
                    if (!t) throw "cameraIdOrConfig is required";
                    if (!r || "function" != typeof r) throw "qrCodeSuccessCallback is required and should be a function.";
                    i = n || (this.verbose ? this.logger.log : function() {});
                    var s = X.create(e, this.logger);
                    this.clearElement();
                    var a = !1;
                    s.videoConstraints && (s.isMediaStreamConstraintsValid() ? a = !0 : this.logger.logError("'videoConstraints' is not valid 'MediaStreamConstraints, it will be ignored.'", !0));
                    var c = a,
                        l = document.getElementById(this.elementId);
                    l.clientWidth ? l.clientWidth : Y.DEFAULT_WIDTH, l.style.position = "relative", this.shouldScan = !0, this.element = l;
                    var h = this,
                        u = this.stateManagerProxy.startTransition(w.SCANNING);
                    return new Promise((function(e, n) {
                        var a = c ? s.videoConstraints : h.createVideoConstraints(t);
                        if (!a) return u.cancel(), void n("videoConstraints should be defined");
                        var l = {};
                        c && !s.aspectRatio || (l.aspectRatio = s.aspectRatio);
                        var d = {
                            onRenderSurfaceReady: function(t, e) {
                                h.setupUi(t, e, s), h.isScanning = !0, h.foreverScan(s, r, i)
                            }
                        };
                        x.failIfNotSupported().then((function(t) {
                            t.create(a).then((function(t) {
                                return t.render(o.element, l, d).then((function(t) {
                                    h.renderedCamera = t, u.execute(), e(null)
                                })).catch((function(t) {
                                    u.cancel(), n(t)
                                }))
                            })).catch((function(t) {
                                u.cancel(), n(m.errorGettingUserMedia(t))
                            }))
                        })).catch((function(t) {
                            u.cancel(), n(m.cameraStreamingNotSupported())
                        }))
                    }))
                }, e.prototype.pause = function(t) {
                    if (!this.stateManagerProxy.isStrictlyScanning()) throw "Cannot pause, scanner is not scanning.";
                    this.stateManagerProxy.directTransition(w.PAUSED), this.showPausedState(), (f(t) || !0 !== t) && (t = !1), t && this.renderedCamera && this.renderedCamera.pause()
                }, e.prototype.resume = function() {
                    if (!this.stateManagerProxy.isPaused()) throw "Cannot result, scanner is not paused.";
                    if (!this.renderedCamera) throw "renderedCamera doesn't exist while trying resume()";
                    var t = this,
                        e = function() {
                            t.stateManagerProxy.directTransition(w.SCANNING), t.hidePausedState()
                        };
                    this.renderedCamera.isPaused() ? this.renderedCamera.resume((function() {
                        e()
                    })) : e()
                }, e.prototype.getState = function() {
                    return this.stateManagerProxy.getState()
                }, e.prototype.stop = function() {
                    var t = this;
                    if (!this.stateManagerProxy.isScanning()) throw "Cannot stop, scanner is not running or paused.";
                    var e = this.stateManagerProxy.startTransition(w.NOT_STARTED);
                    this.shouldScan = !1, this.foreverScanTimeout && clearTimeout(this.foreverScanTimeout);
                    var r = this;
                    return this.renderedCamera.close().then((function() {
                        return r.renderedCamera = null, r.element && (r.element.removeChild(r.canvasElement), r.canvasElement = null),
                            function() {
                                if (t.element) {
                                    var e = document.getElementById(Y.SHADED_REGION_ELEMENT_ID);
                                    e && t.element.removeChild(e)
                                }
                            }(), r.qrRegion && (r.qrRegion = null), r.context && (r.context = null), e.execute(), r.hidePausedState(), r.isScanning = !1, Promise.resolve()
                    }))
                }, e.prototype.scanFile = function(t, e) {
                    return this.scanFileV2(t, e).then((function(t) {
                        return t.decodedText
                    }))
                }, e.prototype.scanFileV2 = function(t, e) {
                    var r = this;
                    if (!(t && t instanceof File)) throw "imageFile argument is mandatory and should be instance of File. Use 'event.target.files[0]'.";
                    if (f(e) && (e = !0), !this.stateManagerProxy.canScanFile()) throw "Cannot start file scan - ongoing camera scan";
                    return new Promise((function(n, i) {
                        r.possiblyCloseLastScanImageFile(), r.clearElement(), r.lastScanImageFile = URL.createObjectURL(t);
                        var o = new Image;
                        o.onload = function() {
                            var t = o.width,
                                s = o.height,
                                a = document.getElementById(r.elementId),
                                c = a.clientWidth ? a.clientWidth : Y.DEFAULT_WIDTH,
                                l = Math.max(a.clientHeight ? a.clientHeight : s, Y.FILE_SCAN_MIN_HEIGHT),
                                u = r.computeCanvasDrawConfig(t, s, c, l);
                            if (e) {
                                var d = r.createCanvasElement(c, l, "qr-canvas-visible");
                                d.style.display = "inline-block", a.appendChild(d);
                                var f = d.getContext("2d");
                                if (!f) throw "Unable to get 2d context from canvas";
                                f.canvas.width = c, f.canvas.height = l, f.drawImage(o, 0, 0, t, s, u.x, u.y, u.width, u.height)
                            }
                            var g = Y.FILE_SCAN_HIDDEN_CANVAS_PADDING,
                                w = Math.max(o.width, u.width),
                                m = Math.max(o.height, u.height),
                                p = w + 2 * g,
                                A = m + 2 * g,
                                C = r.createCanvasElement(p, A);
                            a.appendChild(C);
                            var E = C.getContext("2d");
                            if (!E) throw "Unable to get 2d context from canvas";
                            E.canvas.width = p, E.canvas.height = A, E.drawImage(o, 0, 0, t, s, g, g, w, m);
                            try {
                                r.qrcode.decodeRobustlyAsync(C).then((function(t) {
                                    n(h.createFromQrcodeResult(t))
                                })).catch(i)
                            } catch (t) {
                                i("QR code parse error, error = ".concat(t))
                            }
                        }, o.onerror = i, o.onabort = i, o.onstalled = i, o.onsuspend = i, o.src = URL.createObjectURL(t)
                    }))
                }, e.prototype.clear = function() {
                    this.clearElement()
                }, e.getCameras = function() {
                    return k.retrieve()
                }, e.prototype.getRunningTrackCapabilities = function() {
                    return this.getRenderedCameraOrFail().getRunningTrackCapabilities()
                }, e.prototype.getRunningTrackSettings = function() {
                    return this.getRenderedCameraOrFail().getRunningTrackSettings()
                }, e.prototype.getRunningTrackCameraCapabilities = function() {
                    return this.getRenderedCameraOrFail().getCapabilities()
                }, e.prototype.applyVideoConstraints = function(t) {
                    if (!t) throw "videoConstaints is required argument.";
                    if (!C.isMediaStreamConstraintsValid(t, this.logger)) throw "invalid videoConstaints passed, check logs for more details";
                    return this.getRenderedCameraOrFail().applyVideoConstraints(t)
                }, e.prototype.getRenderedCameraOrFail = function() {
                    if (null == this.renderedCamera) throw "Scanning is not in running state, call this API only when QR code scanning using camera is in running state.";
                    return this.renderedCamera
                }, e.prototype.getSupportedFormats = function(e) {
                    var r = [t.QR_CODE, t.AZTEC, t.CODABAR, t.CODE_39, t.CODE_93, t.CODE_128, t.DATA_MATRIX, t.MAXICODE, t.ITF, t.EAN_13, t.EAN_8, t.PDF_417, t.RSS_14, t.RSS_EXPANDED, t.UPC_A, t.UPC_E, t.UPC_EAN_EXTENSION];
                    if (!e || "boolean" == typeof e) return r;
                    if (!e.formatsToSupport) return r;
                    if (!Array.isArray(e.formatsToSupport)) throw "configOrVerbosityFlag.formatsToSupport should be undefined or an array.";
                    if (0 === e.formatsToSupport.length) throw "Atleast 1 formatsToSupport is needed.";
                    for (var n = [], i = 0, o = e.formatsToSupport; i < o.length; i++) {
                        var a = o[i];
                        s(a) ? n.push(a) : this.logger.warn("Invalid format: ".concat(a, " passed in config, ignoring."))
                    }
                    if (0 === n.length) throw "None of formatsToSupport match supported values.";
                    return n
                }, e.prototype.getUseBarCodeDetectorIfSupported = function(t) {
                    if (f(t)) return !0;
                    if (!f(t.useBarCodeDetectorIfSupported)) return !1 !== t.useBarCodeDetectorIfSupported;
                    if (f(t.experimentalFeatures)) return !0;
                    var e = t.experimentalFeatures;
                    return !!f(e.useBarCodeDetectorIfSupported) || !1 !== e.useBarCodeDetectorIfSupported
                }, e.prototype.validateQrboxSize = function(t, e, r) {
                    var n = r.qrbox;
                    this.validateQrboxConfig(n);
                    var i, o = this.toQrdimensions(t, e, n),
                        s = function(t) {
                            if (t < Y.MIN_QR_BOX_SIZE) throw "minimum size of 'config.qrbox' dimension value is" + " ".concat(Y.MIN_QR_BOX_SIZE, "px.")
                        };
                    s(o.width), s(o.height), o.width = ((i = o.width) > t && (this.logger.warn("`qrbox.width` or `qrbox` is larger than the width of the root element. The width will be truncated to the width of root element."), i = t), i)
                }, e.prototype.validateQrboxConfig = function(t) {
                    if ("number" != typeof t && "function" != typeof t && (void 0 === t.width || void 0 === t.height)) throw "Invalid instance of QrDimensions passed for 'config.qrbox'. Both 'width' and 'height' should be set."
                }, e.prototype.toQrdimensions = function(t, e, r) {
                    if ("number" == typeof r) return {
                        width: r,
                        height: r
                    };
                    if ("function" == typeof r) try {
                        return r(t, e)
                    } catch (t) {
                        throw new Error("qrbox config was passed as a function but it failed with unknown error" + t)
                    }
                    return r
                }, e.prototype.setupUi = function(t, e, r) {
                    r.isShadedBoxEnabled() && this.validateQrboxSize(t, e, r);
                    var n = f(r.qrbox) ? {
                        width: t,
                        height: e
                    } : r.qrbox;
                    this.validateQrboxConfig(n);
                    var i = this.toQrdimensions(t, e, n);
                    i.height > e && this.logger.warn("[Html5Qrcode] config.qrbox has height that isgreater than the height of the video stream. Shading will be ignored");
                    var o = r.isShadedBoxEnabled() && i.height <= e,
                        s = {
                            x: 0,
                            y: 0,
                            width: t,
                            height: e
                        },
                        a = o ? this.getShadedRegionBounds(t, e, i) : s,
                        c = this.createCanvasElement(a.width, a.height),
                        l = c.getContext("2d", {
                            willReadFrequently: !0
                        });
                    l.canvas.width = a.width, l.canvas.height = a.height, this.element.append(c), o && this.possiblyInsertShadingElement(this.element, t, e, i), this.createScannerPausedUiElement(this.element), this.qrRegion = a, this.context = l, this.canvasElement = c
                }, e.prototype.createScannerPausedUiElement = function(t) {
                    var e = document.createElement("div");
                    e.innerText = m.scannerPaused(), e.style.display = "none", e.style.position = "absolute", e.style.top = "0px", e.style.zIndex = "1", e.style.background = "rgba(9, 9, 9, 0.46)", e.style.color = "#FFECEC", e.style.textAlign = "center", e.style.width = "100%", t.appendChild(e), this.scannerPausedUiElement = e
                }, e.prototype.scanContext = function(t, e) {
                    var r = this;
                    return this.stateManagerProxy.isPaused() ? Promise.resolve(!1) : this.qrcode.decodeAsync(this.canvasElement).then((function(e) {
                        return t(e.text, h.createFromQrcodeResult(e)), r.possiblyUpdateShaders(!0), !0
                    })).catch((function(t) {
                        r.possiblyUpdateShaders(!1);
                        var n = m.codeParseError(t);
                        return e(n, u.createFrom(n)), !1
                    }))
                }, e.prototype.foreverScan = function(t, e, r) {
                    var n = this;
                    if (this.shouldScan && this.renderedCamera) {
                        var i = this.renderedCamera.getSurface(),
                            o = i.videoWidth / i.clientWidth,
                            s = i.videoHeight / i.clientHeight;
                        if (!this.qrRegion) throw "qrRegion undefined when localMediaStream is ready.";
                        var a = this.qrRegion.width * o,
                            c = this.qrRegion.height * s,
                            l = this.qrRegion.x * o,
                            h = this.qrRegion.y * s;
                        this.context.drawImage(i, l, h, a, c, 0, 0, this.qrRegion.width, this.qrRegion.height);
                        var u = function() {
                            n.foreverScanTimeout = setTimeout((function() {
                                n.foreverScan(t, e, r)
                            }), n.getTimeoutFps(t.fps))
                        };
                        this.scanContext(e, r).then((function(i) {
                            i || !0 === t.disableFlip ? u() : (n.context.translate(n.context.canvas.width, 0), n.context.scale(-1, 1), n.scanContext(e, r).finally((function() {
                                u()
                            })))
                        })).catch((function(t) {
                            n.logger.logError("Error happend while scanning context", t), u()
                        }))
                    }
                }, e.prototype.createVideoConstraints = function(t) {
                    if ("string" == typeof t) return {
                        deviceId: {
                            exact: t
                        }
                    };
                    if ("object" == typeof t) {
                        var e = "facingMode",
                            r = "deviceId",
                            n = {
                                user: !0,
                                environment: !0
                            },
                            i = "exact",
                            o = function(t) {
                                if (t in n) return !0;
                                throw "config has invalid 'facingMode' value = " + "'".concat(t, "'")
                            },
                            s = Object.keys(t);
                        if (1 !== s.length) throw "'cameraIdOrConfig' object should have exactly 1 key," + " if passed as an object, found ".concat(s.length, " keys");
                        var a = Object.keys(t)[0];
                        if (a !== e && a !== r) throw "Only '".concat(e, "' and '").concat(r, "' ") + " are supported for 'cameraIdOrConfig'";
                        if (a !== e) {
                            var c = t.deviceId;
                            if ("string" == typeof c) return {
                                deviceId: c
                            };
                            if ("object" == typeof c) {
                                if (i in c) return {
                                    deviceId: {
                                        exact: c["".concat(i)]
                                    }
                                };
                                throw "'deviceId' should be string or object with" + " ".concat(i, " as key.")
                            }
                            throw "Invalid type of 'deviceId' = ".concat(typeof c)
                        }
                        var l = t.facingMode;
                        if ("string" == typeof l) {
                            if (o(l)) return {
                                facingMode: l
                            }
                        } else {
                            if ("object" != typeof l) throw "Invalid type of 'facingMode' = ".concat(typeof l);
                            if (!(i in l)) throw "'facingMode' should be string or object with" + " ".concat(i, " as key.");
                            if (o(l["".concat(i)])) return {
                                facingMode: {
                                    exact: l["".concat(i)]
                                }
                            }
                        }
                    }
                    throw "Invalid type of 'cameraIdOrConfig' = ".concat(typeof t)
                }, e.prototype.computeCanvasDrawConfig = function(t, e, r, n) {
                    if (t <= r && e <= n) return {
                        x: (r - t) / 2,
                        y: (n - e) / 2,
                        width: t,
                        height: e
                    };
                    var i = t,
                        o = e;
                    return t > r && (e *= r / t, t = r), e > n && (t *= n / e, e = n), this.logger.log("Image downsampled from " + "".concat(i, "X").concat(o) + " to ".concat(t, "X").concat(e, ".")), this.computeCanvasDrawConfig(t, e, r, n)
                }, e.prototype.clearElement = function() {
                    if (this.stateManagerProxy.isScanning()) throw "Cannot clear while scan is ongoing, close it first.";
                    var t = document.getElementById(this.elementId);
                    t && (t.innerHTML = "")
                }, e.prototype.possiblyUpdateShaders = function(t) {
                    this.qrMatch !== t && (this.hasBorderShaders && this.borderShaders && this.borderShaders.length && this.borderShaders.forEach((function(e) {
                        e.style.backgroundColor = t ? Y.BORDER_SHADER_MATCH_COLOR : Y.BORDER_SHADER_DEFAULT_COLOR
                    })), this.qrMatch = t)
                }, e.prototype.possiblyCloseLastScanImageFile = function() {
                    this.lastScanImageFile && (URL.revokeObjectURL(this.lastScanImageFile), this.lastScanImageFile = null)
                }, e.prototype.createCanvasElement = function(t, e, r) {
                    var n = t,
                        i = e,
                        o = document.createElement("canvas");
                    return o.style.width = "".concat(n, "px"), o.style.height = "".concat(i, "px"), o.style.display = "none", o.id = f(r) ? "qr-canvas" : r, o
                }, e.prototype.getShadedRegionBounds = function(t, e, r) {
                    if (r.width > t || r.height > e) throw "'config.qrbox' dimensions should not be greater than the dimensions of the root HTML element.";
                    return {
                        x: (t - r.width) / 2,
                        y: (e - r.height) / 2,
                        width: r.width,
                        height: r.height
                    }
                }, e.prototype.possiblyInsertShadingElement = function(t, e, r, n) {
                    if (!(e - n.width < 1 || r - n.height < 1)) {
                        var i = document.createElement("div");
                        i.style.position = "absolute";
                        var o = (e - n.width) / 2,
                            s = (r - n.height) / 2;
                        if (i.style.borderLeft = "".concat(o, "px solid rgba(0, 0, 0, 0.48)"), i.style.borderRight = "".concat(o, "px solid rgba(0, 0, 0, 0.48)"), i.style.borderTop = "".concat(s, "px solid rgba(0, 0, 0, 0.48)"), i.style.borderBottom = "".concat(s, "px solid rgba(0, 0, 0, 0.48)"), i.style.boxSizing = "border-box", i.style.top = "0px", i.style.bottom = "0px", i.style.left = "0px", i.style.right = "0px", i.id = "".concat(Y.SHADED_REGION_ELEMENT_ID), e - n.width < 11 || r - n.height < 11) this.hasBorderShaders = !1;
                        else {
                            this.insertShaderBorders(i, 40, 5, -5, null, 0, !0), this.insertShaderBorders(i, 40, 5, -5, null, 0, !1), this.insertShaderBorders(i, 40, 5, null, -5, 0, !0), this.insertShaderBorders(i, 40, 5, null, -5, 0, !1), this.insertShaderBorders(i, 5, 45, -5, null, -5, !0), this.insertShaderBorders(i, 5, 45, null, -5, -5, !0), this.insertShaderBorders(i, 5, 45, -5, null, -5, !1), this.insertShaderBorders(i, 5, 45, null, -5, -5, !1), this.hasBorderShaders = !0
                        }
                        t.append(i)
                    }
                }, e.prototype.insertShaderBorders = function(t, e, r, n, i, o, s) {
                    var a = document.createElement("div");
                    a.style.position = "absolute", a.style.backgroundColor = Y.BORDER_SHADER_DEFAULT_COLOR, a.style.width = "".concat(e, "px"), a.style.height = "".concat(r, "px"), null !== n && (a.style.top = "".concat(n, "px")), null !== i && (a.style.bottom = "".concat(i, "px")), s ? a.style.left = "".concat(o, "px") : a.style.right = "".concat(o, "px"), this.borderShaders || (this.borderShaders = []), this.borderShaders.push(a), t.appendChild(a)
                }, e.prototype.showPausedState = function() {
                    if (!this.scannerPausedUiElement) throw "[internal error] scanner paused UI element not found";
                    this.scannerPausedUiElement.style.display = "block"
                }, e.prototype.hidePausedState = function() {
                    if (!this.scannerPausedUiElement) throw "[internal error] scanner paused UI element not found";
                    this.scannerPausedUiElement.style.display = "none"
                }, e.prototype.getTimeoutFps = function(t) {
                    return 1e3 / t
                }, e
            }(),
            j = "data:image/svg+xml;base64,",
            Z = j + "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzEuNjQzIDM3MS42NDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM3MS42NDMgMzcxLjY0MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTEwNS4wODQgMzguMjcxaDE2My43Njh2MjBIMTA1LjA4NHoiLz48cGF0aCBkPSJNMzExLjU5NiAxOTAuMTg5Yy03LjQ0MS05LjM0Ny0xOC40MDMtMTYuMjA2LTMyLjc0My0yMC41MjJWMzBjMC0xNi41NDItMTMuNDU4LTMwLTMwLTMwSDEyNS4wODRjLTE2LjU0MiAwLTMwIDEzLjQ1OC0zMCAzMHYxMjAuMTQzaC04LjI5NmMtMTYuNTQyIDAtMzAgMTMuNDU4LTMwIDMwdjEuMzMzYTI5LjgwNCAyOS44MDQgMCAwIDAgNC42MDMgMTUuOTM5Yy03LjM0IDUuNDc0LTEyLjEwMyAxNC4yMjEtMTIuMTAzIDI0LjA2MXYxLjMzM2MwIDkuODQgNC43NjMgMTguNTg3IDEyLjEwMyAyNC4wNjJhMjkuODEgMjkuODEgMCAwIDAtNC42MDMgMTUuOTM4djEuMzMzYzAgMTYuNTQyIDEzLjQ1OCAzMCAzMCAzMGg4LjMyNGMuNDI3IDExLjYzMSA3LjUwMyAyMS41ODcgMTcuNTM0IDI2LjE3Ny45MzEgMTAuNTAzIDQuMDg0IDMwLjE4NyAxNC43NjggNDUuNTM3YTkuOTg4IDkuOTg4IDAgMCAwIDguMjE2IDQuMjg4IDkuOTU4IDkuOTU4IDAgMCAwIDUuNzA0LTEuNzkzYzQuNTMzLTMuMTU1IDUuNjUtOS4zODggMi40OTUtMTMuOTIxLTYuNzk4LTkuNzY3LTkuNjAyLTIyLjYwOC0xMC43Ni0zMS40aDgyLjY4NWMuMjcyLjQxNC41NDUuODE4LjgxNSAxLjIxIDMuMTQyIDQuNTQxIDkuMzcyIDUuNjc5IDEzLjkxMyAyLjUzNCA0LjU0Mi0zLjE0MiA1LjY3Ny05LjM3MSAyLjUzNS0xMy45MTMtMTEuOTE5LTE3LjIyOS04Ljc4Ny0zNS44ODQgOS41ODEtNTcuMDEyIDMuMDY3LTIuNjUyIDEyLjMwNy0xMS43MzIgMTEuMjE3LTI0LjAzMy0uODI4LTkuMzQzLTcuMTA5LTE3LjE5NC0xOC42NjktMjMuMzM3YTkuODU3IDkuODU3IDAgMCAwLTEuMDYxLS40ODZjLS40NjYtLjE4Mi0xMS40MDMtNC41NzktOS43NDEtMTUuNzA2IDEuMDA3LTYuNzM3IDE0Ljc2OC04LjI3MyAyMy43NjYtNy42NjYgMjMuMTU2IDEuNTY5IDM5LjY5OCA3LjgwMyA0Ny44MzYgMTguMDI2IDUuNzUyIDcuMjI1IDcuNjA3IDE2LjYyMyA1LjY3MyAyOC43MzMtLjQxMyAyLjU4NS0uODI0IDUuMjQxLTEuMjQ1IDcuOTU5LTUuNzU2IDM3LjE5NC0xMi45MTkgODMuNDgzLTQ5Ljg3IDExNC42NjEtNC4yMjEgMy41NjEtNC43NTYgOS44Ny0xLjE5NCAxNC4wOTJhOS45OCA5Ljk4IDAgMCAwIDcuNjQ4IDMuNTUxIDkuOTU1IDkuOTU1IDAgMCAwIDYuNDQ0LTIuMzU4YzQyLjY3Mi0zNi4wMDUgNTAuODAyLTg4LjUzMyA1Ni43MzctMTI2Ljg4OC40MTUtMi42ODQuODIxLTUuMzA5IDEuMjI5LTcuODYzIDIuODM0LTE3LjcyMS0uNDU1LTMyLjY0MS05Ljc3Mi00NC4zNDV6bS0yMzIuMzA4IDQyLjYyYy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi0xLjMzM2MwLTUuNTE0IDQuNDg2LTEwIDEwLTEwaDE1djIxLjMzM2gtMTV6bS0yLjUtNTIuNjY2YzAtNS41MTQgNC40ODYtMTAgMTAtMTBoNy41djIxLjMzM2gtNy41Yy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi0xLjMzM3ptMTcuNSA5My45OTloLTcuNWMtNS41MTQgMC0xMC00LjQ4Ni0xMC0xMHYtMS4zMzNjMC01LjUxNCA0LjQ4Ni0xMCAxMC0xMGg3LjV2MjEuMzMzem0zMC43OTYgMjguODg3Yy01LjUxNCAwLTEwLTQuNDg2LTEwLTEwdi04LjI3MWg5MS40NTdjLS44NTEgNi42NjgtLjQzNyAxMi43ODcuNzMxIDE4LjI3MWgtODIuMTg4em03OS40ODItMTEzLjY5OGMtMy4xMjQgMjAuOTA2IDEyLjQyNyAzMy4xODQgMjEuNjI1IDM3LjA0IDUuNDQxIDIuOTY4IDcuNTUxIDUuNjQ3IDcuNzAxIDcuMTg4LjIxIDIuMTUtMi41NTMgNS42ODQtNC40NzcgNy4yNTEtLjQ4Mi4zNzgtLjkyOS44LTEuMzM1IDEuMjYxLTYuOTg3IDcuOTM2LTExLjk4MiAxNS41Mi0xNS40MzIgMjIuNjg4aC05Ny41NjRWMzBjMC01LjUxNCA0LjQ4Ni0xMCAxMC0xMGgxMjMuNzY5YzUuNTE0IDAgMTAgNC40ODYgMTAgMTB2MTM1LjU3OWMtMy4wMzItLjM4MS02LjE1LS42OTQtOS4zODktLjkxNC0yNS4xNTktMS42OTQtNDIuMzcgNy43NDgtNDQuODk4IDI0LjY2NnoiLz48cGF0aCBkPSJNMTc5LjEyOSA4My4xNjdoLTI0LjA2YTUgNSAwIDAgMC01IDV2MjQuMDYxYTUgNSAwIDAgMCA1IDVoMjQuMDZhNSA1IDAgMCAwIDUtNVY4OC4xNjdhNSA1IDAgMCAwLTUtNXpNMTcyLjYyOSAxNDIuODZoLTEyLjU2VjEzMC44YTUgNSAwIDEgMC0xMCAwdjE3LjA2MWE1IDUgMCAwIDAgNSA1aDE3LjU2YTUgNSAwIDEgMCAwLTEwLjAwMXpNMjE2LjU2OCA4My4xNjdoLTI0LjA2YTUgNSAwIDAgMC01IDV2MjQuMDYxYTUgNSAwIDAgMCA1IDVoMjQuMDZhNSA1IDAgMCAwIDUtNVY4OC4xNjdhNSA1IDAgMCAwLTUtNXptLTUgMjQuMDYxaC0xNC4wNlY5My4xNjdoMTQuMDZ2MTQuMDYxek0yMTEuNjY5IDEyNS45MzZIMTk3LjQxYTUgNSAwIDAgMC01IDV2MTQuMjU3YTUgNSAwIDAgMCA1IDVoMTQuMjU5YTUgNSAwIDAgMCA1LTV2LTE0LjI1N2E1IDUgMCAwIDAtNS01eiIvPjwvc3ZnPg==",
            Q = j + "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OS4wMTggNTkuMDE4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OS4wMTggNTkuMDE4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJtNTguNzQxIDU0LjgwOS01Ljk2OS02LjI0NGExMC43NCAxMC43NCAwIDAgMCAyLjgyLTcuMjVjMC01Ljk1My00Ljg0My0xMC43OTYtMTAuNzk2LTEwLjc5NlMzNCAzNS4zNjEgMzQgNDEuMzE0IDM4Ljg0MyA1Mi4xMSA0NC43OTYgNTIuMTFjMi40NDEgMCA0LjY4OC0uODI0IDYuNDk5LTIuMTk2bDYuMDAxIDYuMjc3YS45OTguOTk4IDAgMCAwIDEuNDE0LjAzMiAxIDEgMCAwIDAgLjAzMS0xLjQxNHpNMzYgNDEuMzE0YzAtNC44NSAzLjk0Ni04Ljc5NiA4Ljc5Ni04Ljc5NnM4Ljc5NiAzLjk0NiA4Ljc5NiA4Ljc5Ni0zLjk0NiA4Ljc5Ni04Ljc5NiA4Ljc5NlMzNiA0Ni4xNjQgMzYgNDEuMzE0ek0xMC40MzEgMTYuMDg4YzAgMy4wNyAyLjQ5OCA1LjU2OCA1LjU2OSA1LjU2OHM1LjU2OS0yLjQ5OCA1LjU2OS01LjU2OGMwLTMuMDcxLTIuNDk4LTUuNTY5LTUuNTY5LTUuNTY5cy01LjU2OSAyLjQ5OC01LjU2OSA1LjU2OXptOS4xMzggMGMwIDEuOTY4LTEuNjAyIDMuNTY4LTMuNTY5IDMuNTY4cy0zLjU2OS0xLjYwMS0zLjU2OS0zLjU2OCAxLjYwMi0zLjU2OSAzLjU2OS0zLjU2OSAzLjU2OSAxLjYwMSAzLjU2OSAzLjU2OXoiLz48cGF0aCBkPSJtMzAuODgyIDI4Ljk4NyA5LjE4LTEwLjA1NCAxMS4yNjIgMTAuMzIzYTEgMSAwIDAgMCAxLjM1MS0xLjQ3NWwtMTItMTFhMSAxIDAgMCAwLTEuNDE0LjA2M2wtOS43OTQgMTAuNzI3LTQuNzQzLTQuNzQzYTEuMDAzIDEuMDAzIDAgMCAwLTEuMzY4LS4wNDRMNi4zMzkgMzcuNzY4YTEgMSAwIDEgMCAxLjMyMiAxLjUwMWwxNi4zMTMtMTQuMzYyIDcuMzE5IDcuMzE4YS45OTkuOTk5IDAgMSAwIDEuNDE0LTEuNDE0bC0xLjgyNS0xLjgyNHoiLz48cGF0aCBkPSJNMzAgNDYuNTE4SDJ2LTQyaDU0djI4YTEgMSAwIDEgMCAyIDB2LTI5YTEgMSAwIDAgMC0xLTFIMWExIDEgMCAwIDAtMSAxdjQ0YTEgMSAwIDAgMCAxIDFoMjlhMSAxIDAgMSAwIDAtMnoiLz48L3N2Zz4=",
            K = j + "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NjAgNDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjAgNDYwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMjMwIDBDMTAyLjk3NSAwIDAgMTAyLjk3NSAwIDIzMHMxMDIuOTc1IDIzMCAyMzAgMjMwIDIzMC0xMDIuOTc0IDIzMC0yMzBTMzU3LjAyNSAwIDIzMCAwem0zOC4zMzMgMzc3LjM2YzAgOC42NzYtNy4wMzQgMTUuNzEtMTUuNzEgMTUuNzFoLTQzLjEwMWMtOC42NzYgMC0xNS43MS03LjAzNC0xNS43MS0xNS43MVYyMDIuNDc3YzAtOC42NzYgNy4wMzMtMTUuNzEgMTUuNzEtMTUuNzFoNDMuMTAxYzguNjc2IDAgMTUuNzEgNy4wMzMgMTUuNzEgMTUuNzFWMzc3LjM2ek0yMzAgMTU3Yy0yMS41MzkgMC0zOS0xNy40NjEtMzktMzlzMTcuNDYxLTM5IDM5LTM5IDM5IDE3LjQ2MSAzOSAzOS0xNy40NjEgMzktMzkgMzl6Ii8+PC9zdmc+",
            q = function() {
                function t() {}
                return t.createDefault = function() {
                    return {
                        hasPermission: !1,
                        lastUsedCameraId: null
                    }
                }, t
            }(),
            J = function() {
                function t() {
                    this.data = q.createDefault();
                    var e = localStorage.getItem(t.LOCAL_STORAGE_KEY);
                    e ? this.data = JSON.parse(e) : this.reset()
                }
                return t.prototype.hasCameraPermissions = function() {
                    return this.data.hasPermission
                }, t.prototype.getLastUsedCameraId = function() {
                    return this.data.lastUsedCameraId
                }, t.prototype.setHasPermission = function(t) {
                    this.data.hasPermission = t, this.flush()
                }, t.prototype.setLastUsedCameraId = function(t) {
                    this.data.lastUsedCameraId = t, this.flush()
                }, t.prototype.resetLastUsedCameraId = function() {
                    this.data.lastUsedCameraId = null, this.flush()
                }, t.prototype.reset = function() {
                    this.data = q.createDefault(), this.flush()
                }, t.prototype.flush = function() {
                    localStorage.setItem(t.LOCAL_STORAGE_KEY, JSON.stringify(this.data))
                }, t.LOCAL_STORAGE_KEY = "HTML5_QRCODE_DATA", t
            }(),
            $ = function() {
                function t() {
                    this.infoDiv = document.createElement("div")
                }
                return t.prototype.renderInto = function(t) {
                    this.infoDiv.style.position = "absolute", this.infoDiv.style.top = "10px", this.infoDiv.style.right = "10px", this.infoDiv.style.zIndex = "2", this.infoDiv.style.display = "none", this.infoDiv.style.padding = "5pt", this.infoDiv.style.border = "1px solid #171717", this.infoDiv.style.fontSize = "10pt", this.infoDiv.style.background = "rgb(0 0 0 / 69%)", this.infoDiv.style.borderRadius = "5px", this.infoDiv.style.textAlign = "center", this.infoDiv.style.fontWeight = "400", this.infoDiv.style.color = "white", this.infoDiv.innerText = A.poweredBy();
                    var e = document.createElement("a");
                    e.innerText = "Google?", e.href = "https://google.com", e.target = "new", e.style.color = "white", this.infoDiv.appendChild(e);
                    var r = document.createElement("br"),
                        n = document.createElement("br");
                    this.infoDiv.appendChild(r), this.infoDiv.appendChild(n);
                    var i = document.createElement("a");
                    i.innerText = A.reportIssues(), i.href = "https://google.com", i.target = "new", i.style.color = "white", this.infoDiv.appendChild(i), t.appendChild(this.infoDiv)
                }, t.prototype.show = function() {
                    this.infoDiv.style.display = "block"
                }, t.prototype.hide = function() {
                    this.infoDiv.style.display = "none"
                }, t
            }(),
            tt = function() {
                function t(t, e) {
                    this.isShowingInfoIcon = !0, this.onTapIn = t, this.onTapOut = e, this.infoIcon = document.createElement("img")
                }
                return t.prototype.renderInto = function(t) {
                    var e = this;
                    this.infoIcon.alt = "Info icon", this.infoIcon.src = K, this.infoIcon.style.position = "absolute", this.infoIcon.style.top = "4px", this.infoIcon.style.right = "4px", this.infoIcon.style.opacity = "0.6", this.infoIcon.style.cursor = "pointer", this.infoIcon.style.zIndex = "2", this.infoIcon.style.width = "16px", this.infoIcon.style.height = "16px", this.infoIcon.onmouseover = function(t) {
                        return e.onHoverIn()
                    }, this.infoIcon.onmouseout = function(t) {
                        return e.onHoverOut()
                    }, this.infoIcon.onclick = function(t) {
                        return e.onClick()
                    }, t.appendChild(this.infoIcon)
                }, t.prototype.onHoverIn = function() {
                    this.isShowingInfoIcon && (this.infoIcon.style.opacity = "1")
                }, t.prototype.onHoverOut = function() {
                    this.isShowingInfoIcon && (this.infoIcon.style.opacity = "0.6")
                }, t.prototype.onClick = function() {
                    this.isShowingInfoIcon ? (this.isShowingInfoIcon = !1, this.onTapIn(), this.infoIcon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAQgAAAEIBarqQRAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAE1SURBVDiNfdI7S0NBEAXgLya1otFgpbYSbISAgpXYi6CmiH9KCAiChaVga6OiWPgfRDQ+0itaGVNosXtluWwcuMzePfM4M3sq8lbHBubwg1dc4m1E/J/N4ghDPOIsfk/4xiEao5KX0McFljN4C9d4QTPXuY99jP3DsIoDPGM6BY5i5yI5R7O4q+ImFkJY2DCh3cAH2klyB+9J1xUMMAG7eCh1a+Mr+k48b5diXrFVwwLuS+BJ9MfR7+G0FHOHhTHhnXNWS87VDF4pcnfQK4Ep7XScNLmPTZgURNKKYENYWDpzW1BhscS1WHS8CDgURFJQrWcoF3c13KKbgg1BYQfy8xZWEzTTw1QZbAoKu8FqJnktdu5hcVSHmchiILzzuaDQvjBzV2m8yohCE1jHfPx/xhU+y4G/D75ELlRJsSYAAAAASUVORK5CYII=", this.infoIcon.style.opacity = "1") : (this.isShowingInfoIcon = !0, this.onTapOut(), this.infoIcon.src = K, this.infoIcon.style.opacity = "0.6")
                }, t
            }(),
            et = function() {
                function t() {
                    var t = this;
                    this.infoDiv = new $, this.infoIcon = new tt((function() {
                        t.infoDiv.show()
                    }), (function() {
                        t.infoDiv.hide()
                    }))
                }
                return t.prototype.renderInto = function(t) {
                    this.infoDiv.renderInto(t), this.infoIcon.renderInto(t)
                }, t
            }(),
            rt = function() {
                function t() {}
                return t.hasPermissions = function() {
                    return t = this, e = void 0, n = function() {
                        var t, e, r, n;
                        return function(t, e) {
                            var r, n, i, o, s = {
                                label: 0,
                                sent: function() {
                                    if (1 & i[0]) throw i[1];
                                    return i[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return o = {
                                next: a(0),
                                throw: a(1),
                                return: a(2)
                            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                return this
                            }), o;

                            function a(a) {
                                return function(c) {
                                    return function(a) {
                                        if (r) throw new TypeError("Generator is already executing.");
                                        for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                            if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                            switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                                case 0:
                                                case 1:
                                                    i = a;
                                                    break;
                                                case 4:
                                                    return s.label++, {
                                                        value: a[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    s.label++, n = a[1], a = [0];
                                                    continue;
                                                case 7:
                                                    a = s.ops.pop(), s.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                        s = 0;
                                                        continue
                                                    }
                                                    if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                        s.label = a[1];
                                                        break
                                                    }
                                                    if (6 === a[0] && s.label < i[1]) {
                                                        s.label = i[1], i = a;
                                                        break
                                                    }
                                                    if (i && s.label < i[2]) {
                                                        s.label = i[2], s.ops.push(a);
                                                        break
                                                    }
                                                    i[2] && s.ops.pop(), s.trys.pop();
                                                    continue
                                            }
                                            a = e.call(t, s)
                                        } catch (t) {
                                            a = [6, t], n = 0
                                        } finally {
                                            r = i = 0
                                        }
                                        if (5 & a[0]) throw a[1];
                                        return {
                                            value: a[0] ? a[1] : void 0,
                                            done: !0
                                        }
                                    }([a, c])
                                }
                            }
                        }(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, navigator.mediaDevices.enumerateDevices()];
                                case 1:
                                    for (t = i.sent(), e = 0, r = t; e < r.length; e++)
                                        if ("videoinput" === (n = r[e]).kind && n.label) return [2, !0];
                                    return [2, !1]
                            }
                        }))
                    }, new((r = void 0) || (r = Promise))((function(i, o) {
                        function s(t) {
                            try {
                                c(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                c(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function c(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(s, a)
                        }
                        c((n = n.apply(t, e || [])).next())
                    }));
                    var t, e, r, n
                }, t
            }(),
            nt = function() {
                function t(t) {
                    this.supportedScanTypes = this.validateAndReturnScanTypes(t)
                }
                return t.prototype.getDefaultScanType = function() {
                    return this.supportedScanTypes[0]
                }, t.prototype.hasMoreThanOneScanType = function() {
                    return this.supportedScanTypes.length > 1
                }, t.prototype.isCameraScanRequired = function() {
                    for (var e = 0, r = this.supportedScanTypes; e < r.length; e++) {
                        var n = r[e];
                        if (t.isCameraScanType(n)) return !0
                    }
                    return !1
                }, t.isCameraScanType = function(t) {
                    return t === i.SCAN_TYPE_CAMERA
                }, t.isFileScanType = function(t) {
                    return t === i.SCAN_TYPE_FILE
                }, t.prototype.validateAndReturnScanTypes = function(t) {
                    if (!t || 0 === t.length) return c.DEFAULT_SUPPORTED_SCAN_TYPE;
                    var e = c.DEFAULT_SUPPORTED_SCAN_TYPE.length;
                    if (t.length > e) throw "Max ".concat(e, " values expected for ") + "supportedScanTypes";
                    for (var r = 0, n = t; r < n.length; r++) {
                        var i = n[r];
                        if (!c.DEFAULT_SUPPORTED_SCAN_TYPE.includes(i)) throw "Unsupported scan type ".concat(i)
                    }
                    return t
                }, t
            }(),
            it = function() {
                function t() {}
                return t.ALL_ELEMENT_CLASS = "html5-qrcode-element", t.CAMERA_PERMISSION_BUTTON_ID = "html5-qrcode-button-camera-permission", t.CAMERA_START_BUTTON_ID = "html5-qrcode-button-camera-start", t.CAMERA_STOP_BUTTON_ID = "html5-qrcode-button-camera-stop", t.TORCH_BUTTON_ID = "html5-qrcode-button-torch", t.CAMERA_SELECTION_SELECT_ID = "html5-qrcode-select-camera", t.FILE_SELECTION_BUTTON_ID = "html5-qrcode-button-file-selection", t.ZOOM_SLIDER_ID = "html5-qrcode-input-range-zoom", t.SCAN_TYPE_CHANGE_ANCHOR_ID = "html5-qrcode-anchor-scan-type-change", t.TORCH_BUTTON_CLASS_TORCH_ON = "html5-qrcode-button-torch-on", t.TORCH_BUTTON_CLASS_TORCH_OFF = "html5-qrcode-button-torch-off", t
            }(),
            ot = function() {
                function t() {}
                return t.createElement = function(t, e) {
                    var r = document.createElement(t);
                    return r.id = e, r.classList.add(it.ALL_ELEMENT_CLASS), "button" === t && r.setAttribute("type", "button"), r
                }, t
            }(),
            st = function(t, e, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            },
            at = function(t, e) {
                var r, n, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(a) {
                    return function(c) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < i[1]) {
                                            s.label = i[1], i = a;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(a);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                a = e.call(t, s)
                            } catch (t) {
                                a = [6, t], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, c])
                    }
                }
            },
            ct = function() {
                function t(t, e, r) {
                    this.isTorchOn = !1, this.torchCapability = t, this.buttonController = e, this.onTorchActionFailureCallback = r
                }
                return t.prototype.isTorchEnabled = function() {
                    return this.isTorchOn
                }, t.prototype.flipState = function() {
                    return st(this, void 0, void 0, (function() {
                        var t, e;
                        return at(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    this.buttonController.disable(), t = !this.isTorchOn, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, this.torchCapability.apply(t)];
                                case 2:
                                    return r.sent(), this.updateUiBasedOnLatestSettings(this.torchCapability.value(), t), [3, 4];
                                case 3:
                                    return e = r.sent(), this.propagateFailure(t, e), this.buttonController.enable(), [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, t.prototype.updateUiBasedOnLatestSettings = function(t, e) {
                    t === e ? (this.buttonController.setText(e ? p.torchOffButton() : p.torchOnButton()), this.isTorchOn = e) : this.propagateFailure(e), this.buttonController.enable()
                }, t.prototype.propagateFailure = function(t, e) {
                    var r = t ? p.torchOnFailedMessage() : p.torchOffFailedMessage();
                    e && (r += "; Error = " + e), this.onTorchActionFailureCallback(r)
                }, t.prototype.reset = function() {
                    this.isTorchOn = !1
                }, t
            }(),
            lt = function() {
                function t(t, e) {
                    this.onTorchActionFailureCallback = e, this.torchButton = ot.createElement("button", it.TORCH_BUTTON_ID), this.torchController = new ct(t, this, e)
                }
                return t.prototype.render = function(t, e) {
                    var r = this;
                    this.torchButton.innerText = p.torchOnButton(), this.torchButton.style.display = e.display, this.torchButton.style.marginLeft = e.marginLeft;
                    var n = this;
                    this.torchButton.addEventListener("click", (function(t) {
                        return st(r, void 0, void 0, (function() {
                            return at(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, n.torchController.flipState()];
                                    case 1:
                                        return t.sent(), n.torchController.isTorchEnabled() ? (n.torchButton.classList.remove(it.TORCH_BUTTON_CLASS_TORCH_OFF), n.torchButton.classList.add(it.TORCH_BUTTON_CLASS_TORCH_ON)) : (n.torchButton.classList.remove(it.TORCH_BUTTON_CLASS_TORCH_ON), n.torchButton.classList.add(it.TORCH_BUTTON_CLASS_TORCH_OFF)), [2]
                                }
                            }))
                        }))
                    })), t.appendChild(this.torchButton)
                }, t.prototype.updateTorchCapability = function(t) {
                    this.torchController = new ct(t, this, this.onTorchActionFailureCallback)
                }, t.prototype.getTorchButton = function() {
                    return this.torchButton
                }, t.prototype.hide = function() {
                    this.torchButton.style.display = "none"
                }, t.prototype.show = function() {
                    this.torchButton.style.display = "inline-block"
                }, t.prototype.disable = function() {
                    this.torchButton.disabled = !0
                }, t.prototype.enable = function() {
                    this.torchButton.disabled = !1
                }, t.prototype.setText = function(t) {
                    this.torchButton.innerText = t
                }, t.prototype.reset = function() {
                    this.torchButton.innerText = p.torchOnButton(), this.torchController.reset()
                }, t.create = function(e, r, n, i) {
                    var o = new t(r, i);
                    return o.render(e, n), o
                }, t
            }(),
            ht = function() {
                function t(t, e, r) {
                    this.fileBasedScanRegion = this.createFileBasedScanRegion(), this.fileBasedScanRegion.style.display = e ? "block" : "none", t.appendChild(this.fileBasedScanRegion);
                    var n = document.createElement("label");
                    n.setAttribute("for", this.getFileScanInputId()), n.style.display = "inline-block", this.fileBasedScanRegion.appendChild(n), this.fileSelectionButton = ot.createElement("button", it.FILE_SELECTION_BUTTON_ID), this.setInitialValueToButton(), this.fileSelectionButton.addEventListener("click", (function(t) {
                        n.click()
                    })), n.append(this.fileSelectionButton), this.fileScanInput = ot.createElement("input", this.getFileScanInputId()), this.fileScanInput.type = "file", this.fileScanInput.accept = "image/*", this.fileScanInput.style.display = "none", n.appendChild(this.fileScanInput);
                    var i = this;
                    this.fileScanInput.addEventListener("change", (function(t) {
                        if (null != t && null != t.target) {
                            var e = t.target;
                            if (!e.files || 0 !== e.files.length) {
                                var n = e.files[0],
                                    o = n.name;
                                i.setImageNameToButton(o), r(n)
                            }
                        }
                    }));
                    var o = this.createDragAndDropMessage();
                    this.fileBasedScanRegion.appendChild(o), this.fileBasedScanRegion.addEventListener("dragenter", (function(t) {
                        i.fileBasedScanRegion.style.border = i.fileBasedScanRegionActiveBorder(), t.stopPropagation(), t.preventDefault()
                    })), this.fileBasedScanRegion.addEventListener("dragleave", (function(t) {
                        i.fileBasedScanRegion.style.border = i.fileBasedScanRegionDefaultBorder(), t.stopPropagation(), t.preventDefault()
                    })), this.fileBasedScanRegion.addEventListener("dragover", (function(t) {
                        i.fileBasedScanRegion.style.border = i.fileBasedScanRegionActiveBorder(), t.stopPropagation(), t.preventDefault()
                    })), this.fileBasedScanRegion.addEventListener("drop", (function(t) {
                        t.stopPropagation(), t.preventDefault(), i.fileBasedScanRegion.style.border = i.fileBasedScanRegionDefaultBorder();
                        var e = t.dataTransfer;
                        if (e) {
                            var n = e.files;
                            if (!n || 0 === n.length) return;
                            for (var s = !1, a = 0; a < n.length; ++a) {
                                var c = n.item(a);
                                if (c && c.type.match(/image.*/)) {
                                    s = !0;
                                    var l = c.name;
                                    i.setImageNameToButton(l), r(c), o.innerText = p.dragAndDropMessage();
                                    break
                                }
                            }
                            s || (o.innerText = p.dragAndDropMessageOnlyImages())
                        }
                    }))
                }
                return t.prototype.hide = function() {
                    this.fileBasedScanRegion.style.display = "none", this.fileScanInput.disabled = !0
                }, t.prototype.show = function() {
                    this.fileBasedScanRegion.style.display = "block", this.fileScanInput.disabled = !1
                }, t.prototype.isShowing = function() {
                    return "block" === this.fileBasedScanRegion.style.display
                }, t.prototype.resetValue = function() {
                    this.fileScanInput.value = "", this.setInitialValueToButton()
                }, t.prototype.createFileBasedScanRegion = function() {
                    var t = document.createElement("div");
                    return t.style.textAlign = "center", t.style.margin = "auto", t.style.width = "80%", t.style.maxWidth = "600px", t.style.border = this.fileBasedScanRegionDefaultBorder(), t.style.padding = "10px", t.style.marginBottom = "10px", t
                }, t.prototype.fileBasedScanRegionDefaultBorder = function() {
                    return "6px dashed #ebebeb"
                }, t.prototype.fileBasedScanRegionActiveBorder = function() {
                    return "6px dashed rgb(153 151 151)"
                }, t.prototype.createDragAndDropMessage = function() {
                    var t = document.createElement("div");
                    return t.innerText = p.dragAndDropMessage(), t.style.fontWeight = "400", t
                }, t.prototype.setImageNameToButton = function(t) {
                    if (t.length > 20) {
                        var e = t.substring(0, 8),
                            r = t.length,
                            n = t.substring(r - 8, r);
                        t = "".concat(e, "....").concat(n)
                    }
                    var i = p.fileSelectionChooseAnother() + " - " + t;
                    this.fileSelectionButton.innerText = i
                }, t.prototype.setInitialValueToButton = function() {
                    var t = p.fileSelectionChooseImage() + " - " + p.fileSelectionNoImageSelected();
                    this.fileSelectionButton.innerText = t
                }, t.prototype.getFileScanInputId = function() {
                    return "html5-qrcode-private-filescan-input"
                }, t.create = function(e, r, n) {
                    return new t(e, r, n)
                }, t
            }(),
            ut = function() {
                function t(t) {
                    this.selectElement = ot.createElement("select", it.CAMERA_SELECTION_SELECT_ID), this.cameras = t, this.options = []
                }
                return t.prototype.render = function(t) {
                    var e = document.createElement("span");
                    e.style.marginRight = "10px";
                    var r = this.cameras.length;
                    if (0 === r) throw new Error("No cameras found");
                    if (1 === r) e.style.display = "none";
                    else {
                        var n = p.selectCamera();
                        e.innerText = "".concat(n, " (").concat(this.cameras.length, ")  ")
                    }
                    for (var i = 1, o = 0, s = this.cameras; o < s.length; o++) {
                        var a = s[o],
                            c = a.id,
                            l = null == a.label ? c : a.label;
                        l && "" !== l || (l = [p.anonymousCameraPrefix(), i++].join(" "));
                        var h = document.createElement("option");
                        h.value = c, h.innerText = l, this.options.push(h), this.selectElement.appendChild(h)
                    }
                    e.appendChild(this.selectElement), t.appendChild(e)
                }, t.prototype.disable = function() {
                    this.selectElement.disabled = !0
                }, t.prototype.isDisabled = function() {
                    return !0 === this.selectElement.disabled
                }, t.prototype.enable = function() {
                    this.selectElement.disabled = !1
                }, t.prototype.getValue = function() {
                    return this.selectElement.value
                }, t.prototype.hasValue = function(t) {
                    for (var e = 0, r = this.options; e < r.length; e++)
                        if (r[e].value === t) return !0;
                    return !1
                }, t.prototype.setValue = function(t) {
                    if (!this.hasValue(t)) throw new Error("".concat(t, " is not present in the camera list."));
                    this.selectElement.value = t
                }, t.prototype.hasSingleItem = function() {
                    return 1 === this.cameras.length
                }, t.prototype.numCameras = function() {
                    return this.cameras.length
                }, t.create = function(e, r) {
                    var n = new t(r);
                    return n.render(e), n
                }, t
            }(),
            dt = function() {
                function t() {
                    this.onChangeCallback = null, this.zoomElementContainer = document.createElement("div"), this.rangeInput = ot.createElement("input", it.ZOOM_SLIDER_ID), this.rangeInput.type = "range", this.rangeText = document.createElement("span"), this.rangeInput.min = "1", this.rangeInput.max = "5", this.rangeInput.value = "1", this.rangeInput.step = "0.1"
                }
                return t.prototype.render = function(t, e) {
                    this.zoomElementContainer.style.display = e ? "block" : "none", this.zoomElementContainer.style.padding = "5px 10px", this.zoomElementContainer.style.textAlign = "center", t.appendChild(this.zoomElementContainer), this.rangeInput.style.display = "inline-block", this.rangeInput.style.width = "50%", this.rangeInput.style.height = "5px", this.rangeInput.style.background = "#d3d3d3", this.rangeInput.style.outline = "none", this.rangeInput.style.opacity = "0.7";
                    var r = p.zoom();
                    this.rangeText.innerText = "".concat(this.rangeInput.value, "x ").concat(r), this.rangeText.style.marginRight = "10px";
                    var n = this;
                    this.rangeInput.addEventListener("input", (function() {
                        return n.onValueChange()
                    })), this.rangeInput.addEventListener("change", (function() {
                        return n.onValueChange()
                    })), this.zoomElementContainer.appendChild(this.rangeInput), this.zoomElementContainer.appendChild(this.rangeText)
                }, t.prototype.onValueChange = function() {
                    var t = p.zoom();
                    this.rangeText.innerText = "".concat(this.rangeInput.value, "x ").concat(t), this.onChangeCallback && this.onChangeCallback(parseFloat(this.rangeInput.value))
                }, t.prototype.setValues = function(t, e, r, n) {
                    this.rangeInput.min = t.toString(), this.rangeInput.max = e.toString(), this.rangeInput.step = n.toString(), this.rangeInput.value = r.toString(), this.onValueChange()
                }, t.prototype.show = function() {
                    this.zoomElementContainer.style.display = "block"
                }, t.prototype.hide = function() {
                    this.zoomElementContainer.style.display = "none"
                }, t.prototype.setOnCameraZoomValueChangeCallback = function(t) {
                    this.onChangeCallback = t
                }, t.prototype.removeOnCameraZoomValueChangeCallback = function() {
                    this.onChangeCallback = null
                }, t.create = function(e, r) {
                    var n = new t;
                    return n.render(e, r), n
                }, t
            }();
        ! function(t) {
            t[t.STATUS_DEFAULT = 0] = "STATUS_DEFAULT", t[t.STATUS_SUCCESS = 1] = "STATUS_SUCCESS", t[t.STATUS_WARNING = 2] = "STATUS_WARNING", t[t.STATUS_REQUESTING_PERMISSION = 3] = "STATUS_REQUESTING_PERMISSION"
        }(U || (U = {}));
        var ft = function() {
            function t(t, e, r) {
                if (this.lastMatchFound = null, this.cameraScanImage = null, this.fileScanImage = null, this.fileSelectionUi = null, this.elementId = t, this.config = this.createConfig(e), this.verbose = !0 === r, !document.getElementById(t)) throw "HTML Element with id=".concat(t, " not found");
                this.scanTypeSelector = new nt(this.config.supportedScanTypes), this.currentScanType = this.scanTypeSelector.getDefaultScanType(), this.sectionSwapAllowed = !0, this.logger = new d(this.verbose), this.persistedDataManager = new J, !0 !== e.rememberLastUsedCamera && this.persistedDataManager.reset()
            }
            return t.prototype.render = function(t, e) {
                var r = this;
                this.lastMatchFound = null, this.qrCodeSuccessCallback = function(e, n) {
                    if (t) t(e, n);
                    else {
                        if (r.lastMatchFound === e) return;
                        r.lastMatchFound = e, r.setHeaderMessage(p.lastMatch(e), U.STATUS_SUCCESS)
                    }
                }, this.qrCodeErrorCallback = function(t, r) {
                    e && e(t, r)
                };
                var n, i, o = document.getElementById(this.elementId);
                if (!o) throw "HTML Element with id=".concat(this.elementId, " not found");
                o.innerHTML = "", this.createBasicLayout(o), this.html5Qrcode = new W(this.getScanRegionId(), (n = this.config, i = this.verbose, {
                    formatsToSupport: n.formatsToSupport,
                    useBarCodeDetectorIfSupported: n.useBarCodeDetectorIfSupported,
                    experimentalFeatures: n.experimentalFeatures,
                    verbose: i
                }))
            }, t.prototype.pause = function(t) {
                (f(t) || !0 !== t) && (t = !1), this.getHtml5QrcodeOrFail().pause(t)
            }, t.prototype.resume = function() {
                this.getHtml5QrcodeOrFail().resume()
            }, t.prototype.getState = function() {
                return this.getHtml5QrcodeOrFail().getState()
            }, t.prototype.clear = function() {
                var t = this,
                    e = function() {
                        var e = document.getElementById(t.elementId);
                        e && (e.innerHTML = "", t.resetBasicLayout(e))
                    };
                return this.html5Qrcode ? new Promise((function(r, n) {
                    t.html5Qrcode ? t.html5Qrcode.isScanning ? t.html5Qrcode.stop().then((function(n) {
                        t.html5Qrcode ? (t.html5Qrcode.clear(), e(), r()) : r()
                    })).catch((function(e) {
                        t.verbose && t.logger.logError("Unable to stop qrcode scanner", e), n(e)
                    })) : (t.html5Qrcode.clear(), e(), r()) : r()
                })) : Promise.resolve()
            }, t.prototype.getRunningTrackCapabilities = function() {
                return this.getHtml5QrcodeOrFail().getRunningTrackCapabilities()
            }, t.prototype.getRunningTrackSettings = function() {
                return this.getHtml5QrcodeOrFail().getRunningTrackSettings()
            }, t.prototype.applyVideoConstraints = function(t) {
                return this.getHtml5QrcodeOrFail().applyVideoConstraints(t)
            }, t.prototype.getHtml5QrcodeOrFail = function() {
                if (!this.html5Qrcode) throw "Code scanner not initialized.";
                return this.html5Qrcode
            }, t.prototype.createConfig = function(t) {
                return t ? (t.fps || (t.fps = c.SCAN_DEFAULT_FPS), t.rememberLastUsedCamera !== !c.DEFAULT_REMEMBER_LAST_CAMERA_USED && (t.rememberLastUsedCamera = c.DEFAULT_REMEMBER_LAST_CAMERA_USED), t.supportedScanTypes || (t.supportedScanTypes = c.DEFAULT_SUPPORTED_SCAN_TYPE), t) : {
                    fps: c.SCAN_DEFAULT_FPS,
                    rememberLastUsedCamera: c.DEFAULT_REMEMBER_LAST_CAMERA_USED,
                    supportedScanTypes: c.DEFAULT_SUPPORTED_SCAN_TYPE
                }
            }, t.prototype.createBasicLayout = function(t) {
                t.style.position = "relative", t.style.padding = "0px", t.style.border = "1px solid silver", this.createHeader(t);
                var e = document.createElement("div"),
                    r = this.getScanRegionId();
                e.id = r, e.style.width = "100%", e.style.minHeight = "100px", e.style.textAlign = "center", t.appendChild(e), nt.isCameraScanType(this.currentScanType) ? this.insertCameraScanImageToScanRegion() : this.insertFileScanImageToScanRegion();
                var n = document.createElement("div"),
                    i = this.getDashboardId();
                n.id = i, n.style.width = "100%", t.appendChild(n), this.setupInitialDashboard(n)
            }, t.prototype.resetBasicLayout = function(t) {
                t.style.border = "none"
            }, t.prototype.setupInitialDashboard = function(t) {
                this.createSection(t), this.createSectionControlPanel(), this.scanTypeSelector.hasMoreThanOneScanType() && this.createSectionSwap()
            }, t.prototype.createHeader = function(t) {
                var e = document.createElement("div");
                e.style.textAlign = "left", e.style.margin = "0px", t.appendChild(e), (new et).renderInto(e);
                var r = document.createElement("div");
                r.id = this.getHeaderMessageContainerId(), r.style.display = "none", r.style.textAlign = "center", r.style.fontSize = "14px", r.style.padding = "2px 10px", r.style.margin = "4px", r.style.borderTop = "1px solid #f6f6f6", e.appendChild(r)
            }, t.prototype.createSection = function(t) {
                var e = document.createElement("div");
                e.id = this.getDashboardSectionId(), e.style.width = "100%", e.style.padding = "10px 0px 10px 0px", e.style.textAlign = "left", t.appendChild(e)
            }, t.prototype.createCameraListUi = function(t, e, r) {
                var n = this;
                n.showHideScanTypeSwapLink(!1), n.setHeaderMessage(p.cameraPermissionRequesting());
                var i = function() {
                    r || n.createPermissionButton(t, e)
                };
                W.getCameras().then((function(r) {
                    n.persistedDataManager.setHasPermission(!0), n.showHideScanTypeSwapLink(!0), n.resetHeaderMessage(), r && r.length > 0 ? (t.removeChild(e), n.renderCameraSelection(r)) : (n.setHeaderMessage(p.noCameraFound(), U.STATUS_WARNING), i())
                })).catch((function(t) {
                    n.persistedDataManager.setHasPermission(!1), r ? r.disabled = !1 : i(), n.setHeaderMessage(t, U.STATUS_WARNING), n.showHideScanTypeSwapLink(!0)
                }))
            }, t.prototype.createPermissionButton = function(t, e) {
                var r = this,
                    n = ot.createElement("button", this.getCameraPermissionButtonId());
                n.innerText = p.cameraPermissionTitle(), n.addEventListener("click", (function() {
                    n.disabled = !0, r.createCameraListUi(t, e, n)
                })), e.appendChild(n)
            }, t.prototype.createPermissionsUi = function(t, e) {
                var r = this;
                nt.isCameraScanType(this.currentScanType) && this.persistedDataManager.hasCameraPermissions() ? rt.hasPermissions().then((function(n) {
                    n ? r.createCameraListUi(t, e) : (r.persistedDataManager.setHasPermission(!1), r.createPermissionButton(t, e))
                })).catch((function(n) {
                    r.persistedDataManager.setHasPermission(!1), r.createPermissionButton(t, e)
                })) : this.createPermissionButton(t, e)
            }, t.prototype.createSectionControlPanel = function() {
                var t = document.getElementById(this.getDashboardSectionId()),
                    e = document.createElement("div");
                t.appendChild(e);
                var r = document.createElement("div");
                r.id = this.getDashboardSectionCameraScanRegionId(), r.style.display = nt.isCameraScanType(this.currentScanType) ? "block" : "none", e.appendChild(r);
                var n = document.createElement("div");
                n.style.textAlign = "center", r.appendChild(n), this.scanTypeSelector.isCameraScanRequired() && this.createPermissionsUi(r, n), this.renderFileScanUi(e)
            }, t.prototype.renderFileScanUi = function(t) {
                var e = nt.isFileScanType(this.currentScanType),
                    r = this;
                this.fileSelectionUi = ht.create(t, e, (function(t) {
                    if (!r.html5Qrcode) throw "html5Qrcode not defined";
                    nt.isFileScanType(r.currentScanType) && (r.setHeaderMessage(p.loadingImage()), r.html5Qrcode.scanFileV2(t, !0).then((function(t) {
                        r.resetHeaderMessage(), r.qrCodeSuccessCallback(t.decodedText, t)
                    })).catch((function(t) {
                        r.setHeaderMessage(t, U.STATUS_WARNING), r.qrCodeErrorCallback(t, u.createFrom(t))
                    })))
                }))
            }, t.prototype.renderCameraSelection = function(t) {
                var e = this,
                    r = this,
                    n = document.getElementById(this.getDashboardSectionCameraScanRegionId());
                n.style.textAlign = "center";
                var i = dt.create(n, !1),
                    o = ut.create(n, t),
                    s = document.createElement("span"),
                    a = ot.createElement("button", it.CAMERA_START_BUTTON_ID);
                a.innerText = p.scanButtonStartScanningText(), s.appendChild(a);
                var c, l = ot.createElement("button", it.CAMERA_STOP_BUTTON_ID);
                l.innerText = p.scanButtonStopScanningText(), l.style.display = "none", l.disabled = !0, s.appendChild(l), n.appendChild(s);
                var h = function(t) {
                    t || (a.style.display = "none"), a.innerText = p.scanButtonStartScanningText(), a.style.opacity = "1", a.disabled = !1, t && (a.style.display = "inline-block")
                };
                if (a.addEventListener("click", (function(t) {
                        a.innerText = p.scanButtonScanningStarting(), o.disable(), a.disabled = !0, a.style.opacity = "0.5", e.scanTypeSelector.hasMoreThanOneScanType() && r.showHideScanTypeSwapLink(!1), r.resetHeaderMessage();
                        var n, u = o.getValue();
                        r.persistedDataManager.setLastUsedCameraId(u), r.html5Qrcode.start(u, (n = r.config, {
                            fps: n.fps,
                            qrbox: n.qrbox,
                            aspectRatio: n.aspectRatio,
                            disableFlip: n.disableFlip,
                            videoConstraints: n.videoConstraints
                        }), r.qrCodeSuccessCallback, r.qrCodeErrorCallback).then((function(t) {
                            l.disabled = !1, l.style.display = "inline-block", h(!1);
                            var n = r.html5Qrcode.getRunningTrackCameraCapabilities();
                            !0 === e.config.showTorchButtonIfSupported && function(t) {
                                t.torchFeature().isSupported() ? (c ? c.updateTorchCapability(t.torchFeature()) : c = lt.create(s, t.torchFeature(), {
                                    display: "none",
                                    marginLeft: "5px"
                                }, (function(t) {
                                    r.setHeaderMessage(t, U.STATUS_WARNING)
                                })), c.show()) : c && c.hide()
                            }(n), !0 === e.config.showZoomSliderIfSupported && function(t) {
                                var r = t.zoomFeature();
                                if (r.isSupported()) {
                                    i.setOnCameraZoomValueChangeCallback((function(t) {
                                        r.apply(t)
                                    }));
                                    var n, o, s, a = 1;
                                    e.config.defaultZoomValueIfSupported && (a = e.config.defaultZoomValueIfSupported), n = a, o = r.min(), a = n > (s = r.max()) ? s : n < o ? o : n, i.setValues(r.min(), r.max(), a, r.step()), i.show()
                                }
                            }(n)
                        })).catch((function(t) {
                            r.showHideScanTypeSwapLink(!0), o.enable(), h(!0), r.setHeaderMessage(t, U.STATUS_WARNING)
                        }))
                    })), o.hasSingleItem() && a.click(), l.addEventListener("click", (function(t) {
                        if (!r.html5Qrcode) throw "html5Qrcode not defined";
                        l.disabled = !0, r.html5Qrcode.stop().then((function(t) {
                            e.scanTypeSelector.hasMoreThanOneScanType() && r.showHideScanTypeSwapLink(!0), o.enable(), a.disabled = !1, l.style.display = "none", a.style.display = "inline-block", c && (c.reset(), c.hide()), i.removeOnCameraZoomValueChangeCallback(), i.hide(), r.insertCameraScanImageToScanRegion()
                        })).catch((function(t) {
                            l.disabled = !1, r.setHeaderMessage(t, U.STATUS_WARNING)
                        }))
                    })), r.persistedDataManager.getLastUsedCameraId()) {
                    var u = r.persistedDataManager.getLastUsedCameraId();
                    o.hasValue(u) ? (o.setValue(u), a.click()) : r.persistedDataManager.resetLastUsedCameraId()
                }
            }, t.prototype.createSectionSwap = function() {
                var t = this,
                    e = p.textIfCameraScanSelected(),
                    r = p.textIfFileScanSelected(),
                    n = document.getElementById(this.getDashboardSectionId()),
                    o = document.createElement("div");
                o.style.textAlign = "center";
                var s = ot.createElement("span", this.getDashboardSectionSwapLinkId());
                s.style.textDecoration = "underline", s.style.cursor = "pointer", s.innerText = nt.isCameraScanType(this.currentScanType) ? e : r, s.addEventListener("click", (function() {
                    t.sectionSwapAllowed ? (t.resetHeaderMessage(), t.fileSelectionUi.resetValue(), t.sectionSwapAllowed = !1, nt.isCameraScanType(t.currentScanType) ? (t.clearScanRegion(), t.getCameraScanRegion().style.display = "none", t.fileSelectionUi.show(), s.innerText = r, t.currentScanType = i.SCAN_TYPE_FILE, t.insertFileScanImageToScanRegion()) : (t.clearScanRegion(), t.getCameraScanRegion().style.display = "block", t.fileSelectionUi.hide(), s.innerText = e, t.currentScanType = i.SCAN_TYPE_CAMERA, t.insertCameraScanImageToScanRegion(), t.startCameraScanIfPermissionExistsOnSwap()), t.sectionSwapAllowed = !0) : t.verbose && t.logger.logError("Section swap called when not allowed")
                })), o.appendChild(s), n.appendChild(o)
            }, t.prototype.startCameraScanIfPermissionExistsOnSwap = function() {
                var t = this,
                    e = this;
                this.persistedDataManager.hasCameraPermissions() && rt.hasPermissions().then((function(r) {
                    if (r) {
                        var n = document.getElementById(e.getCameraPermissionButtonId());
                        if (!n) throw t.logger.logError("Permission button not found, fail;"), "Permission button not found";
                        n.click()
                    } else e.persistedDataManager.setHasPermission(!1)
                })).catch((function(t) {
                    e.persistedDataManager.setHasPermission(!1)
                }))
            }, t.prototype.resetHeaderMessage = function() {
                document.getElementById(this.getHeaderMessageContainerId()).style.display = "none"
            }, t.prototype.setHeaderMessage = function(t, e) {
                e || (e = U.STATUS_DEFAULT);
                var r = this.getHeaderMessageDiv();
                switch (r.innerText = t, r.style.display = "block", e) {
                    case U.STATUS_SUCCESS:
                        r.style.background = "rgba(106, 175, 80, 0.26)", r.style.color = "#477735";
                        break;
                    case U.STATUS_WARNING:
                        r.style.background = "rgba(203, 36, 49, 0.14)", r.style.color = "#cb2431";
                        break;
                    case U.STATUS_DEFAULT:
                    default:
                        r.style.background = "rgba(0, 0, 0, 0)", r.style.color = "rgb(17, 17, 17)"
                }
            }, t.prototype.showHideScanTypeSwapLink = function(t) {
                this.scanTypeSelector.hasMoreThanOneScanType() && (!0 !== t && (t = !1), this.sectionSwapAllowed = t, this.getDashboardSectionSwapLink().style.display = t ? "inline-block" : "none")
            }, t.prototype.insertCameraScanImageToScanRegion = function() {
                var t = this,
                    e = document.getElementById(this.getScanRegionId());
                if (this.cameraScanImage) return e.innerHTML = "<br>", void e.appendChild(this.cameraScanImage);
                this.cameraScanImage = new Image, this.cameraScanImage.onload = function(r) {
                    e.innerHTML = "<br>", e.appendChild(t.cameraScanImage)
                }, this.cameraScanImage.width = 64, this.cameraScanImage.style.opacity = "0.8", this.cameraScanImage.src = Z, this.cameraScanImage.alt = p.cameraScanAltText()
            }, t.prototype.insertFileScanImageToScanRegion = function() {
                var t = this,
                    e = document.getElementById(this.getScanRegionId());
                if (this.fileScanImage) return e.innerHTML = "<br>", void e.appendChild(this.fileScanImage);
                this.fileScanImage = new Image, this.fileScanImage.onload = function(r) {
                    e.innerHTML = "<br>", e.appendChild(t.fileScanImage)
                }, this.fileScanImage.width = 64, this.fileScanImage.style.opacity = "0.8", this.fileScanImage.src = Q, this.fileScanImage.alt = p.fileScanAltText()
            }, t.prototype.clearScanRegion = function() {
                document.getElementById(this.getScanRegionId()).innerHTML = ""
            }, t.prototype.getDashboardSectionId = function() {
                return "".concat(this.elementId, "__dashboard_section")
            }, t.prototype.getDashboardSectionCameraScanRegionId = function() {
                return "".concat(this.elementId, "__dashboard_section_csr")
            }, t.prototype.getDashboardSectionSwapLinkId = function() {
                return it.SCAN_TYPE_CHANGE_ANCHOR_ID
            }, t.prototype.getScanRegionId = function() {
                return "".concat(this.elementId, "__scan_region")
            }, t.prototype.getDashboardId = function() {
                return "".concat(this.elementId, "__dashboard")
            }, t.prototype.getHeaderMessageContainerId = function() {
                return "".concat(this.elementId, "__header_message")
            }, t.prototype.getCameraPermissionButtonId = function() {
                return it.CAMERA_PERMISSION_BUTTON_ID
            }, t.prototype.getCameraScanRegion = function() {
                return document.getElementById(this.getDashboardSectionCameraScanRegionId())
            }, t.prototype.getDashboardSectionSwapLink = function() {
                return document.getElementById(this.getDashboardSectionSwapLinkId())
            }, t.prototype.getHeaderMessageDiv = function() {
                return document.getElementById(this.getHeaderMessageContainerId())
            }, t
        }()
    })(), __Html5QrcodeLibrary__ = n
})();
if (window) {
    if (!Html5QrcodeScanner) {
        var Html5QrcodeScanner = window.__Html5QrcodeLibrary__.Html5QrcodeScanner;
    }
    if (!Html5Qrcode) {
        var Html5Qrcode = window.__Html5QrcodeLibrary__.Html5Qrcode;
    }
    if (!Html5QrcodeSupportedFormats) {
        var Html5QrcodeSupportedFormats = window.__Html5QrcodeLibrary__.Html5QrcodeSupportedFormats
    }
    if (!Html5QrcodeScannerState) {
        var Html5QrcodeScannerState = window.__Html5QrcodeLibrary__.Html5QrcodeScannerState;
    }
    if (!Html5QrcodeScanType) {
        var Html5QrcodeScanType = window.__Html5QrcodeLibrary__.Html5QrcodeScanType;
    }
}
