var _0xNIAZI,_0xMIAN,_0xBOT,_0xMD,_0xWHATSAPP,_0xBAILEYS,_0xSESSION,_0xHANDLER,_0xCOMMAND,_0xDATABASE;

const _0xKEYS=[0x0,0x1,0x8,0xff,"length","undefined",0x3f,0x6,"fromCodePoint",0x7,0xc,"push",0x5b,0x1fff,0x58,0xd,0xe,0x400,0x67,0x3e8,0x6d,0x7f,0x80,0x3,0x1388,0x81,0x83,null,0xa1,0xa4,"tz",0xc3,0xd1,"3","2",0xdd,0xdf,"on",!0x0,0xe0,0xec,0xef,0xf5,0xf8,0xfa,!0x1,0x103,0x106,0x127,0x142,0x138,0xf,0x157,0x186a0,0x162,0x167,0x168,0x64,0x12c,0xf0,0x200,0xdc,0x2000000,0x2,0x4000000,0x4,0xb4,0xc8,0x16a,0x171,0x16d,0x9e,"1","0",0x184,"\n","Q",".","i",0x1a6,0x100,0x1a5,0x18f,"/",0x1c6,0x1ca,0x1d0,"[","] ",0x1d2,0x1d9,0x1d8,0x153,0x1e9];

function _0xDECRYPT(_0xNIAZI){
    var _0xMIAN="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_0xBOT,_0xMD,_0xWHATSAPP,_0xBAILEYS,_0xSESSION,_0xHANDLER,_0xCOMMAND;
    _0xNIAZI=String(_0xNIAZI||""),_0xBOT=_0xNIAZI.length,_0xMD=[],_0xWHATSAPP=_0xKEYS[0x0],_0xBAILEYS=_0xKEYS[0x0],_0xSESSION=-_0xKEYS[0x1];
    for(_0xHANDLER=_0xKEYS[0x0];_0xHANDLER<_0xBOT;_0xHANDLER++){
        var _0xDATABASE=_0xMIAN.indexOf(_0xNIAZI[_0xHANDLER]);
        if(_0xDATABASE===-_0xKEYS[0x1])continue;
        if(_0xSESSION<_0xKEYS[0x0]){
            _0xSESSION=_0xDATABASE
        }else{
            _0xSESSION+=_0xDATABASE*_0xKEYS[0xc],
            _0xWHATSAPP|=_0xSESSION<<_0xBAILEYS,
            _0xBAILEYS+=(_0xSESSION&_0xKEYS[0xd])>_0xKEYS[0xe]?_0xKEYS[0xf]:_0xKEYS[0x10];
            do{
                _0xMD.push(_0xWHATSAPP&_0xKEYS[0x3]),
                _0xWHATSAPP>>=_0xKEYS[0x2],
                _0xBAILEYS-=_0xKEYS[0x2]
            }while(_0xBAILEYS>_0xKEYS[0x9]);
            _0xSESSION=-_0xKEYS[0x1]
        }
    }
    if(_0xSESSION>-_0xKEYS[0x1]){
        _0xMD.push((_0xWHATSAPP|_0xSESSION<<_0xBAILEYS)&_0xKEYS[0x3])
    }
    return _0xCONVERT(_0xMD)
}

function _0xCONVERT(_0xNIAZI){
    return typeof TextDecoder!==_0xKEYS[0x5]&&TextDecoder?new TextDecoder().decode(new Uint8Array(_0xNIAZI)):typeof Buffer!==_0xKEYS[0x5]&&Buffer?Buffer.from(_0xNIAZI).toString("utf-8"):String.fromCharCode.apply(null,_0xNIAZI)
}

function _0xENCRYPT(_0xNIAZI){
    var _0xMIAN="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_0xBOT="",_0xMD,_0xWHATSAPP,_0xBAILEYS,_0xSESSION;
    for(_0xMD=0;_0xMD<_0xNIAZI.length;_0xMD+=3){
        _0xWHATSAPP=_0xNIAZI.charCodeAt(_0xMD),
        _0xBAILEYS=_0xMD+1<_0xNIAZI.length?_0xNIAZI.charCodeAt(_0xMD+1):0,
        _0xSESSION=_0xMD+2<_0xNIAZI.length?_0xNIAZI.charCodeAt(_0xMD+2):0;
        _0xBOT+=_0xMIAN.charAt(_0xWHATSAPP>>2),
        _0xBOT+=_0xMIAN.charAt((3&_0xWHATSAPP)<<4|_0xBAILEYS>>4),
        _0xBOT+=_0xMD+1<_0xNIAZI.length?_0xMIAN.charAt((15&_0xBAILEYS)<<2|_0xSESSION>>6):"=",
        _0xBOT+=_0xMD+2<_0xNIAZI.length?_0xMIAN.charAt(63&_0xSESSION):"="
    }
    return _0xBOT
}

const _0xSTRINGS=["TWFrZVdBU29ja2V0","dXNlTXVsdGlGaWxlQXV0aFN0YXRl","RGlzY29ubmVjdFJlYXNvbg==","ZmV0Y2hMYXRlc3RCYWlsZXlzVmVyc2lvbg==","bWFrZUNhY2hlYWJsZVNpZ25hbEtleVN0b3Jl","cGluZw==","cG5n","ZGVmYXVsdA==","Y29ubmVjdGlvbi51cGRhdGU=","Y3JlZHMudXBkYXRl","bWVzc2FnZXMudXBzZXJ0","Z3JvdXAtcGFydGljaXBhbnRzLnVwZGF0ZQ==","cHJlc2VuY2UudXBkYXRl","bWVzc2FnZXMuZGVsZXRl","bG9nZ2Vy","c2lsZW50","cHJldHR5","Y29sb3JpemU=","dHJ1ZQ==","TWlhbiB4IE5pYXpp","Q2hyb21l","My4wLjA=","Y29ubmVjdGluZw==","b3Blbg==","Y2xvc2U=","bG9nZ2VkT3V0","UmVjb25uZWN0aW5nIGluIDUgc2Vjb25kcy4uLg==","U2Vzc2lvbiBleHBpcmVkLiBQbGVhc2Ugc2NhbiBRUiBhZ2Fpbi4=","Y29ubmVjdGVk","bWlhbi14LW5pYXpp","Y2hhdC53aGF0c2FwcC5uZXQ=","c2VuZE1lc3NhZ2U=","dGV4dA==","VGhpcyBpcyBhIHRlc3QgbWVzc2FnZQ==","cmVtb3RlSmlk","ZW5kc1dpdGg=","Z3JvdXB1c2Vy","cGFydGljaXBhbnQ=","cHVzaE5hbWU=","VW5rbm93bg==","Y29udmVyc2F0aW9u","ZXh0ZW5kZWRUZXh0TWVzc2FnZQ==","dGV4dA==","aW1hZ2VNZXNzYWdl","Y2FwdGlvbg==","dmlkZW9NZXNzYWdl","c3RpY2tlck1lc3NhZ2U=","YnV0dG9uc1Jlc3BvbnNlTWVzc2FnZQ==","c2VsZWN0ZWRCdXR0b25JZA==","bGlzdFJlc3BvbnNlTWVzc2FnZQ==","c2luZ2xlU2VsZWN0UmVwbHk=","c2VsZWN0ZWRSb3dJZA==","cmVhZE1lc3NhZ2Vz","a2V5","c3RhdHVzQGJyb2FkY2FzdA==","bG9jYWxlU3RyaW5n","bG9n","Z3JvdXBNZXRhZGF0YQ==","YWRtaW4=","c3VwZXJhZG1pbg==","aXNPd25lcg==","aXNNb2Q=","aXNQcmVtaXVt","aXNBZG1pbg==","aXNCb3RBZG1pbg==","cHJlZml4","c3RhcnRzV2l0aA==","c3BsaXQ=","dG9Mb3dlckNhc2U=","b3duZXJPbmx5","bW9kT25seQ==","cHJlbWl1bU9ubHk=","Z3JvdXBPbmx5","YWRtaW5Pbmx5","Ym90QWRtaW4=","cHJpdmF0ZU9ubHk=","ZXhlY3V0ZQ==","ZnJvbQ==","c29jaw==","c2VuZGVy","c2VuZGVyTnVtYmVy","aXNHcm91cA==","Z3JvdXBNZXRhZGF0YQ==","bWVzc2FnZVR5cGU=","bWVzc2FnZQ==","bWVzc2FnZVRleHQ=","dXNlcg==","YmFubmVk","bGltaXQ=","cHJlbWl1bQ==","d2FybmluZw==","Z2V0VXNlcg==","dXBkYXRlVXNlcg==","Z2V0Q2hhdA==","dXBkYXRlQ2hhdA==","aXNCYW5uZWQ=","YmFuVXNlcg==","dW5iYW5Vc2Vy","Y29uZmln","Ym90TmFtZQ==","dmVyc2lvbg==","b3duZXI=","bW9kcw==","cHJlbWl1bQ==","YXV0b1JlYWQ=","YXV0b1N0YXR1c1ZpZXc=","YXV0b1N0YXR1c1JlcGx5","YW50aURlbGV0ZQ==","YW50aVZpZXdPbmNl","YW50aUNhbGw=","YW50aVNwYW0=","d2VsY29tZQ==","Z29vZGJ5ZQ==","YXV0b3N0aWNrZXI=","YXBpS2V5cw==","cmVtb3ZlQmc=","b3BlbkFJ","d2VhdGhlcg==","eW91dHViZQ==","bWVzc2FnZXM=","d2FpdA==","ZG9uZQ==","ZXJyb3I=","b3duZXJPbmx5","bW9kT25seQ==","cHJlbWl1bU9ubHk=","Z3JvdXBPbmx5","YWRtaW5Pbmx5","Ym90QWRtaW4=","cHJpdmF0ZU9ubHk=","ZnJlZQ==","cHJlbWl1bQ==","cmVzZXRUaW1l","dGltZXpvbmU=","QXNpYS9LYXJhY2hp"];

function _0xGETSTRING(_0xNIAZI){
    return _0xDECRYPT(_0xSTRINGS[_0xNIAZI])
}

const _0xMODULES={};
const _0xCACHE={};

function _0xREQUIRE(_0xNIAZI){
    if(_0xCACHE[_0xNIAZI])return _0xCACHE[_0xNIAZI];
    var _0xMIAN=_0xGETSTRING(_0xNIAZI);
    _0xCACHE[_0xNIAZI]=require(_0xMIAN);
    return _0xCACHE[_0xNIAZI]
}

// Main Bot Class
class _0xNIAZIBOT{
    constructor(){
        this[_0xGETSTRING(0x0)]=null;
        this[_0xGETSTRING(0x1)]=0x0;
        this[_0xGETSTRING(0x2)]=!0x1
    }
    
    async [_0xGETSTRING(0x3)](){
        try{
            await this[_0xGETSTRING(0x4)]();
            await this[_0xGETSTRING(0x5)]();
            const _0xNIAZI=_0xREQUIRE(0x0);
            const _0xMIAN=_0xREQUIRE(0x1);
            const _0xBOT=_0xREQUIRE(0x2);
            const _0xMD=_0xREQUIRE(0x3);
            const _0xWHATSAPP=_0xREQUIRE(0x4);
            
            const {[_0xGETSTRING(0x6)]:_0xBAILEYS,[_0xGETSTRING(0x7)]:_0xSESSION}=_0xNIAZI;
            const {[_0xGETSTRING(0x8)]:_0xHANDLER,[_0xGETSTRING(0x9)]:_0xCOMMAND}=_0xMIAN;
            
            const _0xDATABASE=await _0xSESSION(_0xGETSTRING(0xa));
            const {[_0xGETSTRING(0xb)]:_0xWHATSAPP2,[_0xGETSTRING(0xc)]:_0xBAILEYS2}=_0xDATABASE;
            
            const _0xLOGGER=_0xBOT({[_0xGETSTRING(0xd)]:_0xGETSTRING(0xe),[_0xGETSTRING(0xf)]:{[_0xGETSTRING(0x10)]:!![]}});
            
            console[_0xGETSTRING(0x11)](_0xWHATSAPP[_0xGETSTRING(0x12)](`
╔══════════════════════════════════════════════════╗
║                                                  ║
║           🤖 MIAN x NIAZI 🤖                    ║
║                                                  ║
