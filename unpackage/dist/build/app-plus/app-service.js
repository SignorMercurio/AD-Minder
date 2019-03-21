var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181221_syb_scopedata*/global.__wcc_version__='v0.5vv_20181221_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'564b0e58-default-564b0e58-0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'655259e0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'45610025'])
Z([3,'_view 45610025'])
Z([3,'default'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotdefault']],[1,'default']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'266638ca'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7f23d953'])
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'99107496'])
Z([3,'_view 99107496'])
Z([3,'_view 99107496 uni-card'])
Z([[2,'!=='],[[6],[[7],[3,'detail']],[3,'type']],[1,'ans']])
Z([3,'_view 99107496 uni-card-footer'])
Z([3,'handleProxy'])
Z([3,'_view 99107496 uni-flex uni-row'])
Z([[7],[3,'$k']])
Z([1,'99107496-1'])
Z([[7],[3,'agreed']])
Z([[2,'!'],[[7],[3,'agreed']]])
Z(z[5])
Z(z[6])
Z(z[7])
Z([1,'99107496-2'])
Z([[7],[3,'liked']])
Z([[2,'!'],[[7],[3,'liked']]])
Z([3,'key'])
Z([3,'value'])
Z([[7],[3,'listData']])
Z(z[17])
Z(z[5])
Z([3,'_view 99107496 uni-card-header'])
Z(z[7])
Z([[2,'+'],[1,'99107496-3-'],[[7],[3,'key']]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'99107496-0-']],[[7],[3,'key']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'655259e0'])
Z([3,'16'])
Z([3,'arrowup'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'99107496'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3a2c5756'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3a2c5756'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0fac16d6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0fac16d6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'c8b35312'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'c8b35312'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7f776b89'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7f776b89'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6f5082fa'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'6f5082fa'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'41fe5fc8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'41fe5fc8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'a00f8842'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'a00f8842'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1fe66fd6'])
Z([[7],[3,'has_title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1fe66fd6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'05cb4216'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'05cb4216'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'a7636fd6'])
Z([3,'_view a7636fd6'])
Z([3,'background-color: #FFFFFF;'])
Z([[7],[3,'animationData']])
Z([3,'_view a7636fd6 has-mgb-0'])
Z([3,'width: 100%'])
Z([[2,'&&'],[[2,'>='],[[7],[3,'curId']],[1,1]],[[2,'<='],[[7],[3,'curId']],[1,199]]])
Z([[2,'&&'],[[2,'>='],[[7],[3,'curId']],[1,3001]],[[2,'<='],[[7],[3,'curId']],[1,3999]]])
Z([3,'_view a7636fd6 my-audio-wrapper'])
Z([[2,'=='],[[7],[3,'hasExeDes']],[1,true]])
Z([[2,'=='],[[7],[3,'hasExeDes']],[1,false]])
Z([[2,'&&'],[[2,'>='],[[7],[3,'curId']],[1,301]],[[2,'<='],[[7],[3,'curId']],[1,399]]])
Z([3,'_view a7636fd6 my-video-wrapper'])
Z(z[9])
Z(z[10])
Z([[2,'&&'],[[2,'>='],[[7],[3,'curId']],[1,201]],[[2,'<='],[[7],[3,'curId']],[1,203]]])
Z([3,'_view a7636fd6 my-grid-wrapper'])
Z([[2,'=='],[[7],[3,'curId']],[1,203]])
Z([[2,'=='],[[7],[3,'curId']],[1,202]])
Z([[2,'=='],[[7],[3,'curId']],[1,201]])
Z([3,'index3'])
Z([3,'item'])
Z([[7],[3,'mySelections']])
Z(z[20])
Z([[2,'&&'],[[2,'!'],[[2,'&&'],[[2,'>='],[[7],[3,'curId']],[1,201]],[[2,'<='],[[7],[3,'curId']],[1,203]]]],[[2,'=='],[[7],[3,'hasExeDes']],[1,false]]])
Z([[2,'&&'],[[2,'&&'],[[2,'>='],[[7],[3,'curId']],[1,201]],[[2,'<='],[[7],[3,'curId']],[1,203]]],[[2,'=='],[[7],[3,'hasExeDes']],[1,false]]])
Z(z[9])
Z([[2,'&&'],[[2,'=='],[[7],[3,'hasExeDes']],[1,true]],[[2,'||'],[[2,'&&'],[[2,'>='],[[7],[3,'curId']],[1,301]],[[2,'<='],[[7],[3,'curId']],[1,399]]],[[2,'&&'],[[2,'>='],[[7],[3,'curId']],[1,3001]],[[2,'<='],[[7],[3,'curId']],[1,3999]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'a7636fd6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'f6f59228'])
Z([3,'_view f6f59228 uni-padding-wrap'])
Z([3,'#8bc34a'])
Z([3,'handleProxy'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'f6f59228-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'f6f59228-0'])
Z([3,'266638ca'])
Z([3,'text'])
Z([3,'keys'])
Z([3,'idx'])
Z([[4],[[5],[[5],[[5],[1,0]],[1,1]],[1,2]]])
Z(z[9])
Z([3,'_view f6f59228'])
Z([[2,'!'],[[2,'==='],[[7],[3,'current']],[[7],[3,'idx']]]])
Z([[7],[3,'keys']])
Z([3,'key'])
Z([3,'value'])
Z([[6],[[7],[3,'listData']],[[7],[3,'idx']]])
Z(z[16])
Z(z[3])
Z(z[3])
Z([3,'_view f6f59228 uni-card'])
Z(z[5])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'f6f59228-1-'],[[7],[3,'keys']]],[1,'-']],[[7],[3,'key']]])
Z([[7],[3,'key']])
Z([3,'border-radius: 15rpx;'])
Z([3,'true'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'f6f59228-1-']],[[7],[3,'keys']]],[1,'-']],[[7],[3,'key']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[27])
Z([3,'7f23d953'])
Z([[2,'&&'],[[2,'!=='],[[7],[3,'keys']],[1,0]],[[6],[[7],[3,'blank']],[[2,'-'],[[7],[3,'keys']],[1,1]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'f6f59228'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'8bc6e804'])
Z([3,'#666666'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'8bc6e804-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'655259e0'])
Z([3,'22'])
Z([3,'search'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'8bc6e804'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'564b0e58'])
Z([3,'_view 564b0e58 center'])
Z([3,'handleProxy'])
Z([3,'_view 564b0e58 logo'])
Z([[7],[3,'$k']])
Z([1,'564b0e58-1'])
Z([[2,'?:'],[[2,'!'],[[7],[3,'login']]],[1,'logo-hover'],[1,'']])
Z([[2,'!'],[[7],[3,'login']]])
Z(z[2])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'564b0e58-0']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'564b0e58-default-564b0e58-0']]])
Z(z[4])
Z([1,'564b0e58-3'])
Z([3,'45610025'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'564b0e58'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'24e92e58'])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'24e92e58'])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','/components/uni-popup.vue.wxml','/components/uni-icon.vue.wxml','/components/uni-segmented-control.vue.wxml','/components/uni-tag.vue.wxml','/common/slots.wxml','./components/uni-icon.vue.wxml','./components/uni-popup.vue.wxml','./components/uni-segmented-control.vue.wxml','./components/uni-tag.vue.wxml','./pages/article-detail/article-detail.vue.wxml','./pages/article-detail/article-detail.wxml','./article-detail.vue.wxml','./pages/chose-test/chose-test.vue.wxml','./pages/chose-test/chose-test.wxml','./chose-test.vue.wxml','./pages/feedback/feedback.vue.wxml','./pages/feedback/feedback.wxml','./feedback.vue.wxml','./pages/list-detail/list-detail.vue.wxml','./pages/list-detail/list-detail.wxml','./list-detail.vue.wxml','./pages/login/login.vue.wxml','./pages/login/login.wxml','./login.vue.wxml','./pages/login/register.vue.wxml','./pages/login/register.wxml','./register.vue.wxml','./pages/login/retrieve.vue.wxml','./pages/login/retrieve.wxml','./retrieve.vue.wxml','./pages/new-msg/new-msg.vue.wxml','./pages/new-msg/new-msg.wxml','./new-msg.vue.wxml','./pages/post-article/post-article.vue.wxml','./pages/post-article/post-article.wxml','./post-article.vue.wxml','./pages/show-score/show-score.vue.wxml','./pages/show-score/show-score.wxml','./show-score.vue.wxml','./pages/start-test/start-test.vue.wxml','./pages/start-test/start-test.wxml','./start-test.vue.wxml','./pages/tabBar/community/community.vue.wxml','./pages/tabBar/community/community.wxml','./community.vue.wxml','./pages/tabBar/index/index.vue.wxml','./pages/tabBar/index/index.wxml','./index.vue.wxml','./pages/tabBar/my/my.vue.wxml','./pages/tabBar/my/my.wxml','./my.vue.wxml','./pages/tabBar/training/training.vue.wxml','./pages/tabBar/training/training.wxml','./training.vue.wxml'];d_[x[0]]={}
d_[x[0]]["564b0e58-default-564b0e58-0"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':564b0e58-default-564b0e58-0'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
_ai(oB,x[2],e_,x[0],2,2)
_ai(oB,x[3],e_,x[0],3,2)
_ai(oB,x[4],e_,x[0],4,2)
_ai(oB,x[5],e_,x[0],5,2)
oB.pop()
oB.pop()
oB.pop()
oB.pop()
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1],x[2],x[3],x[4],x[5]],ic:[]}
d_[x[6]]={}
d_[x[6]]["655259e0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[6]+':655259e0'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-icon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[6]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
d_[x[7]]["45610025"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[7]+':45610025'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-popup.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
cs.push("./components/uni-popup.vue.wxml:view:1:62")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./components/uni-popup.vue.wxml:template:1:413")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[7],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[7],1,471)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[7]]["default"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[7]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-popup.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fE=e_[x[7]].i
_ai(fE,x[5],e_,x[7],1,1)
fE.pop()
return r
}
e_[x[7]]={f:m2,j:[],i:[],ti:[x[5]],ic:[]}
d_[x[8]]={}
d_[x[8]]["266638ca"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[8]+':266638ca'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-segmented-control.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[8]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
d_[x[9]]["7f23d953"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[9]+':7f23d953'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-tag.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./components/uni-tag.vue.wxml:view:1:27")
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[9]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
d_[x[10]]["99107496"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[10]+':99107496'
r.wxVkey=b
gg.f=$gdc(f_["./pages/article-detail/article-detail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
cs.push("./pages/article-detail/article-detail.vue.wxml:view:1:73")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/article-detail/article-detail.vue.wxml:view:1:102")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./pages/article-detail/article-detail.vue.wxml:button:1:323")
cs.pop()
}
cs.push("./pages/article-detail/article-detail.vue.wxml:view:1:765")
var fE=_n('view')
_rz(z,fE,'class',4,e,s,gg)
cs.push("./pages/article-detail/article-detail.vue.wxml:view:1:810")
var cF=_mz(z,'view',['bindtap',5,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,9,e,s,gg)){hG.wxVkey=1
cs.push("./pages/article-detail/article-detail.vue.wxml:view:1:931")
cs.pop()
}
var oH=_v()
_(cF,oH)
if(_oz(z,10,e,s,gg)){oH.wxVkey=1
cs.push("./pages/article-detail/article-detail.vue.wxml:view:1:995")
cs.pop()
}
hG.wxXCkey=1
oH.wxXCkey=1
cs.pop()
_(fE,cF)
cs.push("./pages/article-detail/article-detail.vue.wxml:view:1:1168")
var cI=_mz(z,'view',['bindtap',11,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,15,e,s,gg)){oJ.wxVkey=1
cs.push("./pages/article-detail/article-detail.vue.wxml:view:1:1289")
cs.pop()
}
var lK=_v()
_(cI,lK)
if(_oz(z,16,e,s,gg)){lK.wxVkey=1
cs.push("./pages/article-detail/article-detail.vue.wxml:view:1:1393")
cs.pop()
}
oJ.wxXCkey=1
lK.wxXCkey=1
cs.pop()
_(fE,cI)
cs.pop()
_(xC,fE)
oD.wxXCkey=1
cs.pop()
_(oB,xC)
var aL=_v()
_(oB,aL)
cs.push("./pages/article-detail/article-detail.vue.wxml:view:1:1581")
var tM=function(bO,eN,oP,gg){
cs.push("./pages/article-detail/article-detail.vue.wxml:view:1:1707")
var oR=_mz(z,'view',['bindtap',21,'class',1,'data-comkey',2,'data-eventid',3],[],bO,eN,gg)
var fS=_v()
_(oR,fS)
cs.push("./pages/article-detail/article-detail.vue.wxml:template:1:2373")
var cT=_oz(z,26,bO,eN,gg)
var hU=_gd(x[10],cT,e_,d_)
if(hU){
var oV=_1z(z,25,bO,eN,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[10],1,2474)
cs.pop()
cs.pop()
_(oP,oR)
return oP
}
aL.wxXCkey=2
_2z(z,19,tM,e,s,gg,aL,'value','key','key')
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var cI=e_[x[10]].i
_ai(cI,x[2],e_,x[10],1,1)
cI.pop()
return r
}
e_[x[10]]={f:m5,j:[],i:[],ti:[x[2]],ic:[]}
d_[x[11]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var lK=e_[x[11]].i
_ai(lK,x[12],e_,x[11],1,1)
var aL=_v()
_(r,aL)
cs.push("./pages/article-detail/article-detail.wxml:template:2:6")
var tM=_oz(z,1,e,s,gg)
var eN=_gd(x[11],tM,e_,d_)
if(eN){
var bO=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[11],2,18)
cs.pop()
lK.pop()
return r
}
e_[x[11]]={f:m6,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[13]]={}
d_[x[13]]["3a2c5756"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[13]+':3a2c5756'
r.wxVkey=b
gg.f=$gdc(f_["./pages/chose-test/chose-test.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[13]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oR=e_[x[14]].i
_ai(oR,x[15],e_,x[14],1,1)
var fS=_v()
_(r,fS)
cs.push("./pages/chose-test/chose-test.wxml:template:2:6")
var cT=_oz(z,1,e,s,gg)
var hU=_gd(x[14],cT,e_,d_)
if(hU){
var oV=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[14],2,18)
cs.pop()
oR.pop()
return r
}
e_[x[14]]={f:m8,j:[],i:[],ti:[x[15]],ic:[]}
d_[x[16]]={}
d_[x[16]]["0fac16d6"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[16]+':0fac16d6'
r.wxVkey=b
gg.f=$gdc(f_["./pages/feedback/feedback.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[16]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var lY=e_[x[17]].i
_ai(lY,x[18],e_,x[17],1,1)
var aZ=_v()
_(r,aZ)
cs.push("./pages/feedback/feedback.wxml:template:2:6")
var t1=_oz(z,1,e,s,gg)
var e2=_gd(x[17],t1,e_,d_)
if(e2){
var b3=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aZ.wxXCkey=3
e2(b3,b3,aZ,gg)
gg.f=cur_globalf
}
else _w(t1,x[17],2,18)
cs.pop()
lY.pop()
return r
}
e_[x[17]]={f:m10,j:[],i:[],ti:[x[18]],ic:[]}
d_[x[19]]={}
d_[x[19]]["c8b35312"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[19]+':c8b35312'
r.wxVkey=b
gg.f=$gdc(f_["./pages/list-detail/list-detail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[19]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var o6=e_[x[20]].i
_ai(o6,x[21],e_,x[20],1,1)
var f7=_v()
_(r,f7)
cs.push("./pages/list-detail/list-detail.wxml:template:2:6")
var c8=_oz(z,1,e,s,gg)
var h9=_gd(x[20],c8,e_,d_)
if(h9){
var o0=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
f7.wxXCkey=3
h9(o0,o0,f7,gg)
gg.f=cur_globalf
}
else _w(c8,x[20],2,18)
cs.pop()
o6.pop()
return r
}
e_[x[20]]={f:m12,j:[],i:[],ti:[x[21]],ic:[]}
d_[x[22]]={}
d_[x[22]]["7f776b89"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[22]+':7f776b89'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[22]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var lCB=e_[x[23]].i
_ai(lCB,x[24],e_,x[23],1,1)
var aDB=_v()
_(r,aDB)
cs.push("./pages/login/login.wxml:template:2:6")
var tEB=_oz(z,1,e,s,gg)
var eFB=_gd(x[23],tEB,e_,d_)
if(eFB){
var bGB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aDB.wxXCkey=3
eFB(bGB,bGB,aDB,gg)
gg.f=cur_globalf
}
else _w(tEB,x[23],2,18)
cs.pop()
lCB.pop()
return r
}
e_[x[23]]={f:m14,j:[],i:[],ti:[x[24]],ic:[]}
d_[x[25]]={}
d_[x[25]]["6f5082fa"]=function(e,s,r,gg){
var z=gz$gwx_16()
var b=x[25]+':6f5082fa'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/register.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[25]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[25]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var oJB=e_[x[26]].i
_ai(oJB,x[27],e_,x[26],1,1)
var fKB=_v()
_(r,fKB)
cs.push("./pages/login/register.wxml:template:2:6")
var cLB=_oz(z,1,e,s,gg)
var hMB=_gd(x[26],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[26],2,18)
cs.pop()
oJB.pop()
return r
}
e_[x[26]]={f:m16,j:[],i:[],ti:[x[27]],ic:[]}
d_[x[28]]={}
d_[x[28]]["41fe5fc8"]=function(e,s,r,gg){
var z=gz$gwx_18()
var b=x[28]+':41fe5fc8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/retrieve.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[28]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var lQB=e_[x[29]].i
_ai(lQB,x[30],e_,x[29],1,1)
var aRB=_v()
_(r,aRB)
cs.push("./pages/login/retrieve.wxml:template:2:6")
var tSB=_oz(z,1,e,s,gg)
var eTB=_gd(x[29],tSB,e_,d_)
if(eTB){
var bUB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aRB.wxXCkey=3
eTB(bUB,bUB,aRB,gg)
gg.f=cur_globalf
}
else _w(tSB,x[29],2,18)
cs.pop()
lQB.pop()
return r
}
e_[x[29]]={f:m18,j:[],i:[],ti:[x[30]],ic:[]}
d_[x[31]]={}
d_[x[31]]["a00f8842"]=function(e,s,r,gg){
var z=gz$gwx_20()
var b=x[31]+':a00f8842'
r.wxVkey=b
gg.f=$gdc(f_["./pages/new-msg/new-msg.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[31]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[31]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var oXB=e_[x[32]].i
_ai(oXB,x[33],e_,x[32],1,1)
var fYB=_v()
_(r,fYB)
cs.push("./pages/new-msg/new-msg.wxml:template:2:6")
var cZB=_oz(z,1,e,s,gg)
var h1B=_gd(x[32],cZB,e_,d_)
if(h1B){
var o2B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fYB.wxXCkey=3
h1B(o2B,o2B,fYB,gg)
gg.f=cur_globalf
}
else _w(cZB,x[32],2,18)
cs.pop()
oXB.pop()
return r
}
e_[x[32]]={f:m20,j:[],i:[],ti:[x[33]],ic:[]}
d_[x[34]]={}
d_[x[34]]["1fe66fd6"]=function(e,s,r,gg){
var z=gz$gwx_22()
var b=x[34]+':1fe66fd6'
r.wxVkey=b
gg.f=$gdc(f_["./pages/post-article/post-article.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[34]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./pages/post-article/post-article.vue.wxml:view:1:102")
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[34]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var l5B=e_[x[35]].i
_ai(l5B,x[36],e_,x[35],1,1)
var a6B=_v()
_(r,a6B)
cs.push("./pages/post-article/post-article.wxml:template:2:6")
var t7B=_oz(z,1,e,s,gg)
var e8B=_gd(x[35],t7B,e_,d_)
if(e8B){
var b9B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
a6B.wxXCkey=3
e8B(b9B,b9B,a6B,gg)
gg.f=cur_globalf
}
else _w(t7B,x[35],2,18)
cs.pop()
l5B.pop()
return r
}
e_[x[35]]={f:m22,j:[],i:[],ti:[x[36]],ic:[]}
d_[x[37]]={}
d_[x[37]]["05cb4216"]=function(e,s,r,gg){
var z=gz$gwx_24()
var b=x[37]+':05cb4216'
r.wxVkey=b
gg.f=$gdc(f_["./pages/show-score/show-score.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[37]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[37]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var oBC=e_[x[38]].i
_ai(oBC,x[39],e_,x[38],1,1)
var fCC=_v()
_(r,fCC)
cs.push("./pages/show-score/show-score.wxml:template:2:6")
var cDC=_oz(z,1,e,s,gg)
var hEC=_gd(x[38],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[38],2,18)
cs.pop()
oBC.pop()
return r
}
e_[x[38]]={f:m24,j:[],i:[],ti:[x[39]],ic:[]}
d_[x[40]]={}
d_[x[40]]["a7636fd6"]=function(e,s,r,gg){
var z=gz$gwx_26()
var b=x[40]+':a7636fd6'
r.wxVkey=b
gg.f=$gdc(f_["./pages/start-test/start-test.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[40]);return}
p_[b]=true
try{
cs.push("./pages/start-test/start-test.vue.wxml:view:1:27")
var oB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
cs.push("./pages/start-test/start-test.vue.wxml:view:1:533")
var xC=_mz(z,'view',['animation',3,'class',1,'style',2],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,6,e,s,gg)){oD.wxVkey=1
cs.push("./pages/start-test/start-test.vue.wxml:view:1:622")
cs.pop()
}
var fE=_v()
_(xC,fE)
if(_oz(z,7,e,s,gg)){fE.wxVkey=1
cs.push("./pages/start-test/start-test.vue.wxml:view:1:784")
cs.push("./pages/start-test/start-test.vue.wxml:view:1:784")
var oH=_n('view')
_rz(z,oH,'class',8,e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,9,e,s,gg)){cI.wxVkey=1
cs.push("./pages/start-test/start-test.vue.wxml:block:1:867")
cs.pop()
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,10,e,s,gg)){oJ.wxVkey=1
cs.push("./pages/start-test/start-test.vue.wxml:view:1:1112")
cs.pop()
}
cI.wxXCkey=1
oJ.wxXCkey=1
cs.pop()
_(fE,oH)
cs.pop()
}
var cF=_v()
_(xC,cF)
if(_oz(z,11,e,s,gg)){cF.wxVkey=1
cs.push("./pages/start-test/start-test.vue.wxml:view:1:1270")
cs.push("./pages/start-test/start-test.vue.wxml:view:1:1270")
var lK=_n('view')
_rz(z,lK,'class',12,e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,13,e,s,gg)){aL.wxVkey=1
cs.push("./pages/start-test/start-test.vue.wxml:block:1:1351")
cs.pop()
}
var tM=_v()
_(lK,tM)
if(_oz(z,14,e,s,gg)){tM.wxVkey=1
cs.push("./pages/start-test/start-test.vue.wxml:view:1:1598")
cs.pop()
}
aL.wxXCkey=1
tM.wxXCkey=1
cs.pop()
_(cF,lK)
cs.pop()
}
var hG=_v()
_(xC,hG)
if(_oz(z,15,e,s,gg)){hG.wxVkey=1
cs.push("./pages/start-test/start-test.vue.wxml:view:1:1750")
cs.push("./pages/start-test/start-test.vue.wxml:view:1:1750")
var eN=_n('view')
_rz(z,eN,'class',16,e,s,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,17,e,s,gg)){bO.wxVkey=1
cs.push("./pages/start-test/start-test.vue.wxml:view:1:1830")
cs.pop()
}
var oP=_v()
_(eN,oP)
if(_oz(z,18,e,s,gg)){oP.wxVkey=1
cs.push("./pages/start-test/start-test.vue.wxml:view:1:2189")
cs.pop()
}
var xQ=_v()
_(eN,xQ)
if(_oz(z,19,e,s,gg)){xQ.wxVkey=1
cs.push("./pages/start-test/start-test.vue.wxml:view:1:2550")
cs.pop()
}
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
cs.pop()
_(hG,eN)
cs.pop()
}
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
cs.pop()
_(oB,xC)
cs.push("./pages/start-test/start-test.vue.wxml:block:1:3077")
var hU=_v()
_(oB,hU)
cs.push("./pages/start-test/start-test.vue.wxml:view:1:3084")
var oV=function(oX,cW,lY,gg){
var t1=_v()
_(lY,t1)
if(_oz(z,24,oX,cW,gg)){t1.wxVkey=1
cs.push("./pages/start-test/start-test.vue.wxml:view:1:3084")
cs.pop()
}
t1.wxXCkey=1
return lY
}
hU.wxXCkey=2
_2z(z,22,oV,e,s,gg,hU,'item','index3','index3')
cs.pop()
var oR=_v()
_(oB,oR)
if(_oz(z,25,e,s,gg)){oR.wxVkey=1
cs.push("./pages/start-test/start-test.vue.wxml:view:1:3986")
cs.pop()
}
var fS=_v()
_(oB,fS)
if(_oz(z,26,e,s,gg)){fS.wxVkey=1
cs.push("./pages/start-test/start-test.vue.wxml:view:1:4462")
cs.pop()
}
var cT=_v()
_(oB,cT)
if(_oz(z,27,e,s,gg)){cT.wxVkey=1
cs.push("./pages/start-test/start-test.vue.wxml:image:1:4674")
cs.pop()
}
oR.wxXCkey=1
fS.wxXCkey=1
cT.wxXCkey=1
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[40]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var lIC=e_[x[41]].i
_ai(lIC,x[42],e_,x[41],1,1)
var aJC=_v()
_(r,aJC)
cs.push("./pages/start-test/start-test.wxml:template:2:6")
var tKC=_oz(z,1,e,s,gg)
var eLC=_gd(x[41],tKC,e_,d_)
if(eLC){
var bMC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aJC.wxXCkey=3
eLC(bMC,bMC,aJC,gg)
gg.f=cur_globalf
}
else _w(tKC,x[41],2,18)
cs.pop()
lIC.pop()
return r
}
e_[x[41]]={f:m26,j:[],i:[],ti:[x[42]],ic:[]}
d_[x[43]]={}
d_[x[43]]["f6f59228"]=function(e,s,r,gg){
var z=gz$gwx_28()
var b=x[43]+':f6f59228'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/community/community.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[43]);return}
p_[b]=true
try{
cs.push("./pages/tabBar/community/community.vue.wxml:view:1:160")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/tabBar/community/community.vue.wxml:template:1:206")
var oD=_oz(z,7,e,s,gg)
var fE=_gd(x[43],oD,e_,d_)
if(fE){
var cF=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[43],1,397)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/tabBar/community/community.vue.wxml:view:1:420")
var oH=function(oJ,cI,lK,gg){
cs.push("./pages/tabBar/community/community.vue.wxml:view:1:420")
var tM=_mz(z,'view',['class',13,'hidden',1,'key',2],[],oJ,cI,gg)
var bO=_v()
_(tM,bO)
cs.push("./pages/tabBar/community/community.vue.wxml:view:1:569")
var oP=function(oR,xQ,fS,gg){
cs.push("./pages/tabBar/community/community.vue.wxml:view:1:569")
var hU=_mz(z,'view',['bindlongpress',20,'bindtap',1,'class',2,'data-comkey',3,'data-eventid',4,'key',5,'style',6],[],oR,xQ,gg)
var oV=_v()
_(hU,oV)
cs.push("./pages/tabBar/community/community.vue.wxml:template:1:1013")
var cW=_oz(z,30,oR,xQ,gg)
var oX=_gd(x[43],cW,e_,d_)
if(oX){
var lY=_1z(z,28,oR,xQ,gg) || {}
var cur_globalf=gg.f
oV.wxXCkey=3
oX(lY,lY,oV,gg)
gg.f=cur_globalf
}
else _w(cW,x[43],1,1128)
cs.pop()
cs.pop()
_(fS,hU)
return fS
}
bO.wxXCkey=2
_2z(z,18,oP,oJ,cI,gg,bO,'value','key','key')
cs.pop()
var eN=_v()
_(tM,eN)
if(_oz(z,31,oJ,cI,gg)){eN.wxVkey=1
cs.push("./pages/tabBar/community/community.vue.wxml:view:1:1664")
cs.pop()
}
eN.wxXCkey=1
cs.pop()
_(lK,tM)
return lK
}
hG.wxXCkey=2
_2z(z,11,oH,e,s,gg,hG,'idx','keys','keys')
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var xOC=e_[x[43]].i
_ai(xOC,x[3],e_,x[43],1,1)
_ai(xOC,x[4],e_,x[43],1,60)
xOC.pop()
xOC.pop()
return r
}
e_[x[43]]={f:m27,j:[],i:[],ti:[x[3],x[4]],ic:[]}
d_[x[44]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var fQC=e_[x[44]].i
_ai(fQC,x[45],e_,x[44],1,1)
var cRC=_v()
_(r,cRC)
cs.push("./pages/tabBar/community/community.wxml:template:2:6")
var hSC=_oz(z,1,e,s,gg)
var oTC=_gd(x[44],hSC,e_,d_)
if(oTC){
var cUC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cRC.wxXCkey=3
oTC(cUC,cUC,cRC,gg)
gg.f=cur_globalf
}
else _w(hSC,x[44],2,18)
cs.pop()
fQC.pop()
return r
}
e_[x[44]]={f:m28,j:[],i:[],ti:[x[45]],ic:[]}
d_[x[46]]={}
d_[x[46]]["8bc6e804"]=function(e,s,r,gg){
var z=gz$gwx_30()
var b=x[46]+':8bc6e804'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/tabBar/index/index.vue.wxml:template:1:186")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[46],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[46],1,297)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var lWC=e_[x[46]].i
_ai(lWC,x[2],e_,x[46],1,1)
lWC.pop()
return r
}
e_[x[46]]={f:m29,j:[],i:[],ti:[x[2]],ic:[]}
d_[x[47]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var tYC=e_[x[47]].i
_ai(tYC,x[48],e_,x[47],1,1)
var eZC=_v()
_(r,eZC)
cs.push("./pages/tabBar/index/index.wxml:template:2:6")
var b1C=_oz(z,1,e,s,gg)
var o2C=_gd(x[47],b1C,e_,d_)
if(o2C){
var x3C=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
eZC.wxXCkey=3
o2C(x3C,x3C,eZC,gg)
gg.f=cur_globalf
}
else _w(b1C,x[47],2,18)
cs.pop()
tYC.pop()
return r
}
e_[x[47]]={f:m30,j:[],i:[],ti:[x[48]],ic:[]}
d_[x[49]]={}
d_[x[49]]["564b0e58"]=function(e,s,r,gg){
var z=gz$gwx_32()
var b=x[49]+':564b0e58'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/my/my.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[49]);return}
p_[b]=true
try{
cs.push("./pages/tabBar/my/my.vue.wxml:view:1:74")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/tabBar/my/my.vue.wxml:view:1:110")
var xC=_mz(z,'view',['bindtap',2,'class',1,'data-comkey',2,'data-eventid',3,'hoverClass',4],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,7,e,s,gg)){oD.wxVkey=1
cs.push("./pages/tabBar/my/my.vue.wxml:view:1:532")
cs.pop()
}
oD.wxXCkey=1
cs.pop()
_(oB,xC)
var fE=_v()
_(oB,fE)
cs.push("./pages/tabBar/my/my.vue.wxml:template:1:630")
var cF=_oz(z,12,e,s,gg)
var hG=_gd(x[49],cF,e_,d_)
if(hG){
var oH=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[49],1,826)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var f5C=e_[x[49]].i
_ai(f5C,x[1],e_,x[49],1,1)
f5C.pop()
return r
}
e_[x[49]]={f:m31,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[50]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var h7C=e_[x[50]].i
_ai(h7C,x[51],e_,x[50],1,1)
var o8C=_v()
_(r,o8C)
cs.push("./pages/tabBar/my/my.wxml:template:2:6")
var c9C=_oz(z,1,e,s,gg)
var o0C=_gd(x[50],c9C,e_,d_)
if(o0C){
var lAD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o8C.wxXCkey=3
o0C(lAD,lAD,o8C,gg)
gg.f=cur_globalf
}
else _w(c9C,x[50],2,18)
cs.pop()
h7C.pop()
return r
}
e_[x[50]]={f:m32,j:[],i:[],ti:[x[51]],ic:[]}
d_[x[52]]={}
d_[x[52]]["24e92e58"]=function(e,s,r,gg){
var z=gz$gwx_34()
var b=x[52]+':24e92e58'
r.wxVkey=b
gg.f=$gdc(f_["./pages/tabBar/training/training.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[52]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
return r
}
e_[x[52]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var eDD=e_[x[53]].i
_ai(eDD,x[54],e_,x[53],1,1)
var bED=_v()
_(r,bED)
cs.push("./pages/tabBar/training/training.wxml:template:2:6")
var oFD=_oz(z,1,e,s,gg)
var xGD=_gd(x[53],oFD,e_,d_)
if(xGD){
var oHD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bED.wxXCkey=3
xGD(oHD,oHD,bED,gg)
gg.f=cur_globalf
}
else _w(oFD,x[53],2,18)
cs.pop()
eDD.pop()
return r
}
e_[x[53]]={f:m34,j:[],i:[],ti:[x[54]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/tabBar/index/index","pages/tabBar/training/training","pages/tabBar/community/community","pages/tabBar/my/my","pages/login/login","pages/login/register","pages/login/retrieve","pages/chose-test/chose-test","pages/show-score/show-score","pages/start-test/start-test","pages/list-detail/list-detail","pages/article-detail/article-detail","pages/post-article/post-article","pages/new-msg/new-msg","pages/feedback/feedback"],"subPackages":[],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"AD Minder","navigationBarBackgroundColor":"#8bc34a","backgroundColor":"#f8f8f8","autoBackButton":false},"usingComponents":{},"tabBar":{"color":"black","selectedColor":"#8bc34a","borderStyle":"white","backgroundColor":"#f8f8f8","list":[{"pagePath":"pages/tabBar/index/index","iconPath":"static/home.png","selectedIconPath":"static/home1.png","text":"首页"},{"pagePath":"pages/tabBar/training/training","iconPath":"static/dashboard.png","selectedIconPath":"static/dashboard1.png","text":"训练"},{"pagePath":"pages/tabBar/community/community","iconPath":"static/comment.png","selectedIconPath":"static/comment1.png","text":"社区"},{"pagePath":"pages/tabBar/my/my","iconPath":"static/user.png","selectedIconPath":"static/user1.png","text":"我的"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"AD Minder"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"], { "37ac": function ac(e, t, s) {}, "38be": function be(e, t, s) {"use strict";var a = s("37ac"),n = s.n(a);n.a;}, 5576: function _(e, t, s) {"use strict";Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;var a = { onLaunch: function onLaunch() {console.log("App Launch");}, onShow: function onShow() {console.log("App Show");}, onHide: function onHide() {console.log("App Hide");}, onError: function onError(e) {console.log(e);} };t.default = a;}, 7277: function _(e, t, s) {"use strict";s.r(t);var a = s("5576"),n = s.n(a);for (var i in a) {"default" !== i && function (e) {s.d(t, e, function () {return a[e];});}(i);}t["default"] = n.a;}, ae40: function ae40(e, t, s) {"use strict";(function (e) {s("2b83");var t = n(s("f3d3")),a = n(s("d6fd"));function n(e) {return e && e.__esModule ? e : { default: e };}function i(e) {for (var t = 1; t < arguments.length; t++) {var s = null != arguments[t] ? arguments[t] : {},a = Object.keys(s);"function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(s).filter(function (e) {return Object.getOwnPropertyDescriptor(s, e).enumerable;}))), a.forEach(function (t) {o(e, t, s[t]);});}return e;}function o(e, t, s) {return t in e ? Object.defineProperty(e, t, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = s, e;}t.default.config.productionTip = !1, t.default.prototype.$msg = function (t) {var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";e.showToast({ title: t, duration: 2e3, icon: s });}, t.default.prototype.$ajax = function (t, s, a) {e.request({ url: "http://106.14.200.248:8080/" + t, method: "POST", header: { "content-type": "application/x-www-form-urlencoded" }, data: s, success: function success(e) {a(e);} });}, t.default.prototype.$back = function () {setTimeout(function () {e.navigateBack({ delta: 1 });}, 500);}, t.default.prototype.chosenId = [!1, !1, !1, !1], t.default.prototype.allTests = [{ name: "定向力训练", id: 0 }, { name: "注意力与计算力训练", id: 1 }, { name: "短时记忆训练", id: 2 }, { name: "延时记忆训练", id: 3 }], t.default.prototype.selectedNum = 0, a.default.mpType = "app", t.default.prototype.allExe = [{ exeId: 8, type: 0, diff: 1, val: 24, hasExeDes: !1, needPV: !0, aSrc: "../../static/_3.70.jpg", selections: ["B->C->A", "B->A->C", "A->B->C", "A->C->B"], answer: 0 }, { exeId: 7, type: 0, diff: 2, val: 24, hasExeDes: !1, needPV: !0, aSrc: "../../static/_5.30.jpg", selections: ["A", "B", "C"], answer: 1 }, { exeId: 6, type: 0, diff: 2, val: 24, hasExeDes: !1, needPV: !0, aSrc: "../../static/_4.70.jpg", selections: ["B->C->A", "A->C->B", "C->A->B", "A->C->B"], answer: 0 }, { exeId: 5, type: 0, diff: 2, val: 24, hasExeDes: !1, needPV: !0, aSrc: "../../static/_14.60.jpg", selections: ["下午10点08分", "上午10点14分", "下午9点08分", "上午11点04分"], answer: 0 }, { exeId: 4, type: 0, diff: 2, val: 24, hasExeDes: !1, needPV: !0, aSrc: "../../static/_16.60.jpg", selections: ["下午6点07分", "上午5点07分", "下午7点10分", "上午6点12分"], answer: 0 }, { exeId: 3, type: 0, diff: 2, val: 24, needPV: !1, hasExeDes: !1, aSrc: "../../static/_11.40.jpg", selections: ["A", "B", "C"], answer: 0 }, { exeId: 2, type: 0, diff: 2, val: 24, needPV: !1, hasExeDes: !1, aSrc: "../../static/_2.10.jpg", selections: ["A", "B", "C"], answer: 2 }, { exeId: 1, type: 0, diff: 2, val: 24, needPV: !1, hasExeDes: !1, aSrc: "../../static/_1.10.jpg", selections: ["A", "B", "C"], answer: 1 }, { exeId: 107, type: 1, diff: 2, val: 24, hasExeDes: !1, aSrc: "../../static/19.100.jpg", answer: 1 }, { exeId: 106, type: 1, diff: 2, val: 24, hasExeDes: !1, aSrc: "../../static/11.70.jpg", answer: 1 }, { exeId: 105, type: 1, diff: 2, val: 24, hasExeDes: !1, aSrc: "../../static/9.60.jpg", answer: 2 }, { exeId: 104, type: 1, diff: 2, val: 24, hasExeDes: !1, aSrc: "../../static/9.60.jpg", answer: 2 }, { exeId: 103, type: 1, diff: 3, val: 24, hasExeDes: !1, aSrc: "../../static/20.95.jpg", answer: 2 }, { exeId: 102, type: 1, diff: 1, val: 24, hasExeDes: !1, aSrc: "../../static/2.20.jpg", answer: 5 }, { exeId: 101, type: 1, diff: 1, val: 24, hasExeDes: !1, aSrc: "../../static/1.10.jpg", answer: 2 }, { exeId: 312, type: 3, diff: 2, val: 24, hasExeDes: !0, exeDes: "请根据视频内容回答问题", question: "视频中有海吗？", selections: ["有", "没有"], aSrc: "http://106.14.200.248:8080/getVideo?video=2.mp4", answer: 0 }, { exeId: 312, type: 3, diff: 2, val: 24, hasExeDes: !0, exeDes: "请根据视频内容回答问题", question: "视频中有海吗？", selections: ["有", "没有"], aSrc: "http://106.14.200.248:8080/getVideo?video=2.mp4", answer: 0 }, { exeId: 3001, type: 3, diff: 1, val: 15, hasExeDes: !0, exeDes: "请根据音频内容回答问题", question: "全球绿化面积增加了百分之几？", aSrc: "../../static/1.mp3", selections: ["3", "50", "10"], answer: 1 }, { exeId: 3009, type: 3, diff: 1, val: 12, hasExeDes: !0, exeDes: "请根据音频内容回答问题", question: "囚犯抵抗的时候狱警是通过什么武器将其制服？", selections: ["电击枪", "警棍", "手枪", "红缨枪"], aSrc: "../../static/4.mp3", answer: 0 }, { exeId: 3008, type: 3, diff: 1, val: 12, hasExeDes: !0, exeDes: "请根据音频内容回答问题", question: "囚犯最后掉进了哪个地方？", selections: ["厕所", "狱警办公室", "其他牢房"], aSrc: "../../static/4.mp3", answer: 1 }, { exeId: 3007, type: 3, diff: 1, val: 12, hasExeDes: !0, exeDes: "请根据音频内容回答问题", question: "囚犯打算通过哪个地方越狱？", selections: ["天花板", "下水管道", "窗户"], aSrc: "../../static/4.mp3", answer: 0 }, { exeId: 3006, type: 3, diff: 1, val: 12, hasExeDes: !0, exeDes: "请根据音频内容回答问题", question: "哪一个月份是福建省的环卫工人关爱月？", aSrc: "../../static/3.mp3", selections: ["10月", "8月", "4月"], answer: 0 }, { exeId: 3005, type: 3, diff: 1, val: 12, hasExeDes: !0, exeDes: "请根据音频内容回答问题", question: "谁获得了帮助？", selections: ["环卫工人", "老师", "医生"], aSrc: "../../static/3.mp3", answer: 0 }, { exeId: 3004, type: 3, diff: 1, val: 12, hasExeDes: !0, exeDes: "请根据音频内容回答问题", question: "总共对几家企业进行了处罚？", aSrc: "../../static/2.mp3", selections: ["160", "300", "261"], answer: 2 }, { exeId: 3003, type: 3, diff: 1, val: 12, hasExeDes: !0, exeDes: "请根据音频内容回答问题", question: "哪个省对环境违法企业进行了处罚？", selections: ["青海", "上海", "北京"], aSrc: "../../static/2.mp3", answer: 0 }, { exeId: 3002, type: 3, diff: 1, val: 12, hasExeDes: !0, exeDes: "请根据音频内容回答问题", question: "哪一个国家为地球的绿化做出了最大贡献？", selections: ["中国", "美国", "英国"], aSrc: "../../static/1.mp3", answer: 0 }, { exeId: 305, type: 3, diff: 1, val: 15, hasExeDes: !0, exeDes: "请根据视频内容回答问题", question: "视频中女孩在做什么？", selections: ["散步", "骑自行车", "开车", "骑摩托车"], aSrc: "https://openload.co/embed/gwQ9PjWwk1M/1.mp4", answer: 1 }, { exeId: 311, type: 3, diff: 2, val: 21, hasExeDes: !0, exeDes: "请根据视频内容回答问题", question: "男孩和女孩牵着手吗？", selections: ["是", "否"], aSrc: "http://106.14.200.248:8080/getVideo?video=2.mp4", answer: 0 }, { exeId: 313, type: 3, diff: 2, val: 27, hasExeDes: !0, exeDes: "请根据视频内容回答问题", question: "女孩的上衣是什么颜色？", selections: ["红色", "绿色", "粉色", "白色"], answer: 0 }, { exeId: 314, type: 3, diff: 2, val: 30, hasExeDes: !0, exeDes: "请根据视频内容回答问题", question: "男孩手里拿着的是什么？", selections: ["行李箱", "折页纸", "手提包", "手机"], aSrc: "http://106.14.200.248:8080/getVideo?video=2.mp4", answer: 1 }, { exeId: 315, type: 3, diff: 2, val: 33, hasExeDes: !0, exeDes: "请根据视频内容回答问题", question: "女孩手里拿着的是什么？", selections: ["行李箱", "书本", "折页纸", "手机"], aSrc: "http://106.14.200.248:8080/getVideo?video=2.mp4", answer: 0 }, { exeId: 316, type: 3, diff: 2, val: 36, hasExeDes: !0, exeDes: "请根据视频内容回答问题", question: "男孩的裤子是什么颜色？", selections: ["绿色", "红色", "黄色", "黑色"], aSrc: "http://106.14.200.248:8080/getVideo?video=2.mp4", answer: 0 }, { exeId: 301, type: 3, diff: 1, val: 3, hasExeDes: !0, exeDes: "请根据视频内容回答问题", question: "道路两边有树吗？", selections: ["有", "没有"], aSrc: "https://openload.co/embed/gwQ9PjWwk1M/1.mp4", answer: 0 }, { exeId: 302, type: 3, diff: 1, val: 6, hasExeDes: !0, exeDes: "请根据视频内容回答问题", question: "道路两旁有路灯吗？", selections: ["有", "没有"], aSrc: "https://openload.co/embed/gwQ9PjWwk1M/1.mp4", answer: 0 }, { exeId: 303, type: 3, diff: 1, val: 9, hasExeDes: !0, exeDes: "请根据视频内容回答问题", question: "路旁有几个垃圾桶？", selections: ["1个", "2个", "3个", "4个"], aSrc: "https://openload.co/embed/gwQ9PjWwk1M/1.mp4", answer: 2 }, { exeId: 304, type: 3, diff: 1, val: 12, hasExeDes: !0, exeDes: "请视频内容回答问题", question: "视频中女孩的头发是什么颜色？", selections: ["红色", "黑色", "黄色", "紫色"], aSrc: "https://openload.co/embed/gwQ9PjWwk1M/1.mp4", answer: 0 }, { exeId: 306, type: 3, diff: 1, val: 18, hasExeDes: !0, exeDes: "请根据视频内容回答问题", question: "视频中女孩穿的是什么？", selections: ["短裤", "长裙", "长裤", "短裙"], aSrc: "https://openload.co/embed/gwQ9PjWwk1M/1.mp4", answer: 0 }, { exeId: 201, type: 2, diff: 1, val: 21, hasExeDes: !0, exeDes: "现在显示一个2*2的网格，蓝色方块几秒后会变成白色，您需要记住并回答哪些是蓝色方块" }, { exeId: 202, type: 2, diff: 2, val: 50, hasExeDes: !0, exeDes: "现在显示一个3*3的网格，蓝色方块几秒后会变成白色，您需要记住并回答哪些是蓝色方块" }, { exeId: 203, type: 2, diff: 3, val: 80, hasExeDes: !0, exeDes: "现在显示一个4*4的网格，蓝色方块几秒后会变成白色，您需要记住并回答哪些是蓝色方块" }, { exeId: 203 }];var c = new t.default(i({}, a.default));c.$mount();}).call(this, s("649d")["default"]);}, d6fd: function d6fd(e, t, s) {"use strict";s.r(t);var a = s("7277");for (var n in a) {"default" !== n && function (e) {s.d(t, e, function () {return a[e];});}(n);}s("38be");var i,o,c = s("2877"),d = Object(c["a"])(a["default"], i, o, !1, null, null, null);t["default"] = d.exports;} }, [["ae40", "common/runtime", "common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(function (e) {function r(r) {for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;}for (n in a) {Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);}c && c(r);while (s.length) {s.shift()();}return u.push.apply(u, f || []), t();}function t() {for (var e, r = 0; r < u.length; r++) {for (var t = u[r], n = !0, i = 1; i < t.length; i++) {var a = t[i];0 !== o[a] && (n = !1);}n && (u.splice(r--, 1), e = l(l.s = t[0]));}return e;}var n = {},o = { "common/runtime": 0 },u = [];function l(r) {if (n[r]) return n[r].exports;var t = n[r] = { i: r, l: !1, exports: {} };return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;}l.m = e, l.c = n, l.d = function (e, r, t) {l.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });}, l.r = function (e) {"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });}, l.t = function (e, r) {if (1 & r && (e = l(e)), 8 & r) return e;if (4 & r && "object" === typeof e && e && e.__esModule) return e;var t = Object.create(null);if (l.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) {l.d(t, n, function (r) {return e[r];}.bind(null, n));}return t;}, l.n = function (e) {var r = e && e.__esModule ? function () {return e["default"];} : function () {return e;};return l.d(r, "a", r), r;}, l.o = function (e, r) {return Object.prototype.hasOwnProperty.call(e, r);}, l.p = "/";var i = global["webpackJsonp"] = global["webpackJsonp"] || [],a = i.push.bind(i);i.push = r, i = i.slice();for (var f = 0; f < i.length; f++) {r(i[f]);}var c = a;t();})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"2b83":function(t,e,n){},"649d":function(t,e,n){"use strict";n.r(e);var r=function(t){return"function"===typeof t},o=function(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})},i=/^on|^create|Sync$|Manager$|^pause/,a=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],s=function(t){return(!i.test(t)||"createBLEConnection"===t)&&!~a.indexOf(t)},c=function(t){return function(){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r(a.success)||r(a.fail)||r(a.complete)?t.apply(void 0,[a].concat(n)):o(new Promise(function(e,r){t.apply(void 0,[Object.assign({},a,{success:e,fail:r})].concat(n)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}))}},u=1e-4,f=750,p=!1,l=0,d=0;function h(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;l=r,d=n,p="ios"===e}function v(t,e){if(0===l&&h(),0===t)return 0;var n=t/f*(e||l);return n<0&&(n=-n),n=Math.floor(n+u),0===n?1!==d&&p?.5:1:t<0?-n:n}function y(t){return __requireNativePlugin__(t)}var _={},g={os:{plus:!0}};"undefined"!==typeof Proxy?_=new Proxy({},{get:function(t,e){return g.hasOwnProperty(e)?g[e]:"upx2px"===e?v:"requireNativePlugin"===e?y:wx.hasOwnProperty(e)?s(e)?c(wx[e]):wx[e]:void 0}}):(_.upx2px=v,_.requireNativePlugin=y,Object.keys(g).forEach(function(t){_[t]=g[t]}),Object.keys(wx).forEach(function(t){wx.hasOwnProperty(t)&&(s(t)?_[t]=c(wx[t]):_[t]=wx[t])}));var m=_;e["default"]=m},"881e":function(t,e,n){"use strict";n.r(e);var r=n("afbf"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},afbf:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=r},b0ce:function(t,e,n){"use strict";n.r(e);var r=n("f3d3"),o=n.n(r);function i(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),"function"===typeof o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)r=o[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return i(t,e,n)}),r}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new o.a(t);this.$vm=n;var r=n.$root;r.__wxExparserNodeId__=this.__wxExparserNodeId__,r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var i=r.$mp;i.mpType="page",i.page=this,i.query=e,i.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",i(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",i(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",i(t,"onHide")},onUnload:function(){var t=a(this);i(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);i(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);i(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);i(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);i(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return i(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);i(e,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var e=a(this);i(e,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var e=a(this);i(e,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var e=a(this);i(e,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var e=a(this);return i(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},b5b0:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},attrs:{eventid:"655259e0-0"},on:{click:function(e){t.onClick()}}})},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},cbc1:function(t,e,n){"use strict";n.r(e);var r=n("b5b0"),o=n("881e");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!==typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"===typeof r&&"object"===typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var f=s[i];t(e,n+"."+f,r[f],o[f])}}}else r!==o&&(e[n]=r)}function r(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],f=1,p=c.length;f<p&&void 0!==u;++f)u=u[c[f]];t(o,s,e[s],u)}return o}function o(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t}function u(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function p(t){return"[object Object]"===f.call(t)}function l(t){return"[object RegExp]"===f.call(t)}function d(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var _=y("key,ref,slot,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,x=$(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=$(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),O=/([^-])([A-Z])/g,k=$(function(t){return t.replace(O,"$1-$2").replace(O,"$1-$2").toLowerCase()});function C(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function S(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function j(t,e){for(var n in e)t[n]=e[n];return t}function P(t){for(var e={},n=0;n<t.length;n++)t[n]&&j(e,t[n]);return e}function I(t,e,n){}var T=function(t,e,n){return!1},E=function(t){return t};function D(t,e){var r=u(t),o=u(e);if(!r||!o)return!r&&!o&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function N(t,e){for(var n=0;n<t.length;n++)if(D(t[n],e))return n;return-1}function R(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var B="data-server-rendered",M=["component","directive","filter"],L=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:I,parsePlatformTagName:E,mustUseProp:T,_lifecycleHooks:L},U=Object.freeze({});function F(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=/[^\w.$]/;function z(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var q=I;function J(t,e,n){if(V.errorHandler)V.errorHandler.call(null,t,e,n);else{if(!G||"undefined"===typeof console)throw t;console.error(t)}}var K,X="__proto__"in{},G="undefined"!==typeof window,Z=["mpvue-runtime"].join(),Q=(Z&&/msie|trident/.test(Z),Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),Y=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)),tt=(Z&&/chrome\/\d+/.test(Z),{}.watch);if(G)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===K&&(K=!G&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),K},rt=G&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var it,at="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys),st=function(){var t,e=[],r=!1;function o(){r=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&ot(Promise)){var i=Promise.resolve(),a=function(t){console.error(t)};t=function(){i.then(o).catch(a),Y&&setTimeout(I)}}else t=function(){setTimeout(o,0)};return function(o,i){var a;if(e.push(function(){if(o)try{o.call(i)}catch(n){J(n,i,"nextTick")}else a&&a(i)}),r||(r=!0,t()),!o&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();it="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=0,ut=function(){this.id=ct++,this.subs=[]};ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){g(this.subs,t)},ut.prototype.depend=function(){ut.target&&ut.target.addDep(this)},ut.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ut.target=null;var ft=[];function pt(t){ut.target&&ft.push(ut.target),ut.target=t}function lt(){ut.target=ft.pop()}var dt=Array.prototype,ht=Object.create(dt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=dt[t];W(ht,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var vt=Object.getOwnPropertyNames(ht),yt={shouldConvert:!0},_t=function(t){if(this.value=t,this.dep=new ut,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)){var e=X?gt:mt;e(t,ht,vt),this.observeArray(t)}else this.walk(t)};function gt(t,e,n){t.__proto__=e}function mt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];W(t,i,e[i])}}function bt(t,e){var n;if(u(t))return b(t,"__ob__")&&t.__ob__ instanceof _t?n=t.__ob__:yt.shouldConvert&&!nt()&&(Array.isArray(t)||p(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new _t(t)),e&&n&&n.vmCount++,n}function $t(t,e,n,r,o){var i=new ut,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&bt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ut.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&At(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!o&&bt(e),i.notify())}})}}function wt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(b(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?($t(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function xt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function At(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&At(e)}_t.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)$t(t,e[n],t[e[n]])},_t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)bt(t[e])};var Ot=V.optionMergeStrategies;function kt(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)n=i[a],r=t[n],o=e[n],b(t,n)?p(r)&&p(o)&&kt(r,o):wt(t,n,o);return t}function Ct(t,e,n){return n?t||e?function(){var r="function"===typeof e?e.call(n):e,o="function"===typeof t?t.call(n):void 0;return r?kt(r,o):o}:void 0:e?t?function(){return kt("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function St(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function jt(t,e){var n=Object.create(t||null);return e?j(n,e):n}Ot.data=function(t,e,n){return n?Ct(t,e,n):e&&"function"!==typeof e?t:Ct.call(this,t,e)},L.forEach(function(t){Ot[t]=St}),M.forEach(function(t){Ot[t+"s"]=jt}),Ot.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in j(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},Ot.props=Ot.methods=Ot.inject=Ot.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return j(n,t),j(n,e),n},Ot.provide=Ct;var Pt=function(t,e){return void 0===e?t:e};function It(t){var e=t.props;if(e){var n,r,o,i={};if(Array.isArray(e)){n=e.length;while(n--)r=e[n],"string"===typeof r&&(o=x(r),i[o]={type:null})}else if(p(e))for(var a in e)r=e[a],o=x(a),i[o]=p(r)?r:{type:r};t.props=i}}function Tt(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function Et(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Dt(t,e,n){"function"===typeof e&&(e=e.options),It(e),Tt(e),Et(e);var r=e.extends;if(r&&(t=Dt(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=Dt(t,e.mixins[o],n);var a,s={};for(a in t)c(a);for(a in e)b(t,a)||c(a);function c(r){var o=Ot[r]||Pt;s[r]=o(t[r],e[r],n,r)}return s}function Nt(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=x(n);if(b(o,i))return o[i];var a=A(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Rt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t];if(Lt(Boolean,o.type)&&(i&&!b(o,"default")?a=!1:Lt(String,o.type)||""!==a&&a!==k(t)||(a=!0)),void 0===a){a=Bt(r,o,t);var s=yt.shouldConvert;yt.shouldConvert=!0,bt(a),yt.shouldConvert=s}return a}function Bt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Mt(e.type)?r.call(t):r}}function Mt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Lt(t,e){if(!Array.isArray(e))return Mt(e)===Mt(t);for(var n=0,r=e.length;n<r;n++)if(Mt(e[n])===Mt(t))return!0;return!1}var Vt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Ut={child:{}};Ut.child.get=function(){return this.componentInstance},Object.defineProperties(Vt.prototype,Ut);var Ft=function(t){void 0===t&&(t="");var e=new Vt;return e.text=t,e.isComment=!0,e};function Wt(t){return new Vt(void 0,void 0,void 0,String(t))}function Ht(t){var e=new Vt(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function zt(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Ht(t[r]);return n}var qt,Jt=$(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function Kt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Xt(t,e,n,r,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=Jt(a),o(s)||(o(c)?(o(s.fns)&&(s=t[a]=Kt(s)),n(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)o(t[a])&&(u=Jt(a),r(u.name,e[a],u.capture))}function Gt(t,e,n){var r=e.options.props;if(!o(r)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in r){var f=k(u);Zt(a,c,u,f,!0)||Zt(a,s,u,f,!1)}return a}}function Zt(t,e,n,r,o){if(i(e)){if(b(e,n))return t[n]=e[n],o||delete e[n],!0;if(b(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Qt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Yt(t){return c(t)?[Wt(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return i(t)&&i(t.text)&&s(t.isComment)}function ee(t,e){var n,r,s,u=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(s=u[u.length-1],Array.isArray(r)?u.push.apply(u,ee(r,(e||"")+"_"+n)):c(r)?te(s)?s.text+=String(r):""!==r&&u.push(Wt(r)):te(r)&&te(s)?u[u.length-1]=Wt(s.text+r.text):(a(t._isVList)&&i(r.tag)&&o(r.key)&&i(e)&&(r.key="__vlist"+e+"_"+n+"__"),u.push(r)));return u}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),u(t)?e.extend(t):t}function re(t,e,n,r,o){var i=Ft();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function oe(t,e,n){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var r=t.contexts=[n],s=!0,c=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},f=R(function(n){t.resolved=ne(n,e),s||c()}),p=R(function(e){i(t.errorComp)&&(t.error=!0,c())}),l=t(f,p);return u(l)&&("function"===typeof l.then?o(t.resolved)&&l.then(f,p):i(l.component)&&"function"===typeof l.component.then&&(l.component.then(f,p),i(l.error)&&(t.errorComp=ne(l.error,e)),i(l.loading)&&(t.loadingComp=ne(l.loading,e),0===l.delay?t.loading=!0:setTimeout(function(){o(t.resolved)&&o(t.error)&&(t.loading=!0,c())},l.delay||200)),i(l.timeout)&&setTimeout(function(){o(t.resolved)&&p(null)},l.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function ie(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ue(t,e)}function se(t,e,n){n?qt.$once(t,e):qt.$on(t,e)}function ce(t,e){qt.$off(t,e)}function ue(t,e,n){qt=t,Xt(e,n||{},se,ce,t)}function fe(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,o=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var o=0,i=t.length;o<i;o++)n.$off(t[o],e);return r}var a,s=r._events[t];if(!s)return r;if(1===arguments.length)return r._events[t]=null,r;var c=s.length;while(c--)if(a=s[c],a===e||a.fn===e){s.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,r=e._events[t];if(r){r=r.length>1?S(r):r;for(var o=S(arguments,1),i=0,a=r.length;i<a;i++)try{r[i].apply(e,o)}catch(n){J(n,e,'event handler for "'+t+'"')}}return e}}function pe(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(le)||(n.default=r),n}function le(t){return t.isComment||" "===t.text}function de(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?de(t[n],e):e[t[n].key]=t[n].fn;return e}var he=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function ye(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&we(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=he;he=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),he=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){we(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),we(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function _e(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Ft),we(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new Re(t,r,I),n=!1,null==t.$vnode&&(t._isMounted=!0,we(t,"mounted")),t}function ge(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==U);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){yt.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Rt(u,t.$options.props,e,t)}yt.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,ue(t,n,f)}i&&(t.$slots=pe(o,r.context),t.$forceUpdate())}function me(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function be(t,e){if(e){if(t._directInactive=!1,me(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);we(t,"activated")}}function $e(t,e){if((!e||(t._directInactive=!0,!me(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)$e(t.$children[n]);we(t,"deactivated")}}function we(t,e){var r=t.$options[e];if(r)for(var o=0,i=r.length;o<i;o++)try{r[o].call(t)}catch(n){J(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var xe=[],Ae=[],Oe={},ke=!1,Ce=!1,Se=0;function je(){Se=xe.length=Ae.length=0,Oe={},ke=Ce=!1}function Pe(){var t,e;for(Ce=!0,xe.sort(function(t,e){return t.id-e.id}),Se=0;Se<xe.length;Se++)t=xe[Se],e=t.id,Oe[e]=null,t.run();var n=Ae.slice(),r=xe.slice();je(),Ee(n),Ie(r),rt&&V.devtools&&rt.emit("flush")}function Ie(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&we(r,"updated")}}function Te(t){t._inactive=!1,Ae.push(t)}function Ee(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,be(t[e],!0)}function De(t){var e=t.id;if(null==Oe[e]){if(Oe[e]=!0,Ce){var n=xe.length-1;while(n>Se&&xe[n].id>t.id)n--;xe.splice(n+1,0,t)}else xe.push(t);ke||(ke=!0,st(Pe))}}var Ne=0,Re=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ne,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression="","function"===typeof e?this.getter=e:(this.getter=z(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Re.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;J(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Me(t),lt(),this.cleanupDeps()}return t},Re.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Re.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Re.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():De(this)},Re.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){J(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Re.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Re.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},Re.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var Be=new it;function Me(t){Be.clear(),Le(t,Be)}function Le(t,e){var n,r,o=Array.isArray(t);if((o||u(t))&&Object.isExtensible(t)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)Le(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)Le(t[r[n]],e)}}}var Ve={enumerable:!0,configurable:!0,get:I,set:I};function Ue(t,e,n){Ve.get=function(){return this[e][n]},Ve.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ve)}function Fe(t){t._watchers=[];var e=t.$options;e.props&&We(t,e.props),e.methods&&Ge(t,e.methods),e.data?He(t):bt(t._data={},!0),e.computed&&Je(t,e.computed),e.watch&&e.watch!==tt&&Ze(t,e.watch)}function We(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;yt.shouldConvert=i;var a=function(i){o.push(i);var a=Rt(i,e,n,t);$t(r,i,a),i in t||Ue(t,"_props",i)};for(var s in e)a(s);yt.shouldConvert=!0}function He(t){var e=t.$options.data;e=t._data="function"===typeof e?ze(e,t):e||{},p(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];r&&b(r,i)||F(i)||Ue(t,"_data",i)}bt(e,!0)}function ze(t,e){try{return t.call(e)}catch(n){return J(n,e,"data()"),{}}}var qe={lazy:!0};function Je(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"===typeof o?o:o.get;n[r]=new Re(t,i,I,qe),r in t||Ke(t,r,o)}}function Ke(t,e,n){"function"===typeof n?(Ve.get=Xe(e),Ve.set=I):(Ve.get=n.get?!1!==n.cache?Xe(e):n.get:I,Ve.set=n.set?n.set:I),Object.defineProperty(t,e,Ve)}function Xe(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.target&&e.depend(),e.value}}function Ge(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?I:C(e[n],t)}function Ze(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)Qe(t,n,r[o]);else Qe(t,n,r)}}function Qe(t,e,n,r){return p(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Ye(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=wt,t.prototype.$delete=xt,t.prototype.$watch=function(t,e,n){var r=this;if(p(e))return Qe(r,t,e,n);n=n||{},n.user=!0;var o=new Re(r,t,e,n);return n.immediate&&e.call(r,o.value),function(){o.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(yt.shouldConvert=!1,Object.keys(e).forEach(function(n){$t(t,n,e[n])}),yt.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i],s=e;while(s){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,r,o){var a={},s=t.options.props;if(i(s))for(var c in s)a[c]=Rt(c,s,e||{});else i(n.attrs)&&on(a,n.attrs),i(n.props)&&on(a,n.props);var u=Object.create(r),f=function(t,e,n,r){return vn(u,t,e,n,r,!0)},p=t.options.render.call(null,f,{data:n,props:a,children:o,parent:r,listeners:n.on||{},injections:nn(t.options.inject,r),slots:function(){return pe(o,r)}});return p instanceof Vt&&(p.functionalContext=r,p.functionalOptions=t.options,n.slot&&((p.data||(p.data={})).slot=n.slot)),p}function on(t,e){for(var n in e)t[x(n)]=e[n]}var an={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){var o=t.componentInstance=un(t,he,n,r);o.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var i=t;an.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;ge(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,we(n,"mounted")),t.data.keepAlive&&(e._isMounted?Te(n):be(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?$e(e,!0):e.$destroy())}},sn=Object.keys(an);function cn(t,e,n,r,s){if(!o(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(o(t.cid)&&(f=t,t=oe(f,c,n),void 0===t))return re(f,e,n,r,s);e=e||{},En(t),i(e.model)&&ln(t.options,e);var p=Gt(e,t,s);if(a(t.options.functional))return rn(t,p,e,n,r);var l=e.on;if(a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}fn(e);var h=t.options.name||s,v=new Vt("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:l,tag:s,children:r},f);return v}}}function un(t,e,n,r){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function fn(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],r=t.hook[n],o=an[n];t.hook[n]=r?pn(o,r):o}}function pn(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});i(o[r])?o[r]=[e.model.callback].concat(o[r]):o[r]=e.model.callback}var dn=1,hn=2;function vn(t,e,n,r,o,i){return(Array.isArray(n)||c(n))&&(o=r,r=n,n=void 0),a(i)&&(o=hn),yn(t,e,n,r,o)}function yn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return Ft();if(i(n)&&i(n.is)&&(e=n.is),!e)return Ft();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===hn?r=Yt(r):o===dn&&(r=Qt(r)),"string"===typeof e)?(s=V.getTagNamespace(e),a=V.isReservedTag(e)?new Vt(V.parsePlatformTagName(e),n,r,void 0,void 0,t):i(c=Nt(t.$options,"components",e))?cn(c,n,t,r,e):new Vt(e,n,r,void 0,void 0,t)):a=cn(e,n,t,r);return i(a)?(s&&_n(a,s),a):Ft()}function _n(t,e){if(t.ns=e,"foreignObject"!==t.tag&&i(t.children))for(var n=0,r=t.children.length;n<r;n++){var a=t.children[n];i(a.tag)&&o(a.ns)&&_n(a,e)}}function gn(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)&&(n._isVList=!0),n}function mn(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=j(j({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function bn(t){return Nt(this.$options,"filters",t,!0)||E}function $n(t,e,n){var r=V.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function wn(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=P(n));var a=function(a){if("class"===a||"style"===a||_(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||V.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in i)&&(i[a]=n[a],o)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function xn(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?zt(n):Ht(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),On(n,"__static__"+t,!1),n)}function An(t,e,n){return On(t,"__once__"+e+(n?"_"+n:""),!0),t}function On(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&kn(t[r],e+"_"+r,n);else kn(t,e,n)}function kn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Cn(t,e){if(e)if(p(e)){var n=t.on=t.on?j({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}function Sn(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=pe(t.$options._renderChildren,n),t.$scopedSlots=U,t._c=function(e,n,r,o){return vn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return vn(t,e,n,r,o,!0)};var r=e&&e.data;$t(t,"$attrs",r&&r.attrs,null,!0),$t(t,"$listeners",r&&r.on,null,!0)}function jn(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,o=r.render,i=r.staticRenderFns,a=r._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=zt(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||U,i&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=o.call(e._renderProxy,e.$createElement)}catch(n){J(n,e,"render function"),t=e._vnode}return t instanceof Vt||(t=Ft()),t.parent=a,t},t.prototype._o=An,t.prototype._n=v,t.prototype._s=h,t.prototype._l=gn,t.prototype._t=mn,t.prototype._q=D,t.prototype._i=N,t.prototype._m=xn,t.prototype._f=bn,t.prototype._k=$n,t.prototype._b=wn,t.prototype._v=Wt,t.prototype._e=Ft,t.prototype._u=de,t.prototype._g=Cn}var Pn=0;function In(t){t.prototype._init=function(t){var e=this;e._uid=Pn++,e._isVue=!0,t&&t._isComponent?Tn(e,t):e.$options=Dt(En(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),Sn(e),we(e,"beforeCreate"),en(e),Fe(e),tn(e),we(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Tn(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function En(t){var e=t.options;if(t.super){var n=En(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=Dn(t);o&&j(t.extendOptions,o),e=t.options=Dt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Dn(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Nn(n[i],r[i],o[i]));return e}function Nn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Rn(t){this._init(t)}function Bn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=S(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Mn(t){t.mixin=function(t){return this.options=Dt(this.options,t),this}}function Ln(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Dt(n.options,t),a["super"]=n,a.options.props&&Vn(a),a.options.computed&&Un(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=j({},a.options),o[r]=a,a}}function Vn(t){var e=t.options.props;for(var n in e)Ue(t.prototype,"_props",n)}function Un(t){var e=t.options.computed;for(var n in e)Ke(t.prototype,n,e[n])}function Fn(t){M.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&p(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}In(Rn),Ye(Rn),fe(Rn),ye(Rn),jn(Rn);var Wn=[String,RegExp,Array];function Hn(t){return t&&(t.Ctor.options.name||t.tag)}function zn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function qn(t,e,n){for(var r in t){var o=t[r];if(o){var i=Hn(o.componentOptions);i&&!n(i)&&(o!==e&&Jn(o),t[r]=null)}}}function Jn(t){t&&t.componentInstance.$destroy()}var Kn={name:"keep-alive",abstract:!0,props:{include:Wn,exclude:Wn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)Jn(t.cache[e])},watch:{include:function(t){qn(this.cache,this._vnode,function(e){return zn(t,e)})},exclude:function(t){qn(this.cache,this._vnode,function(e){return!zn(t,e)})}},render:function(){var t=ie(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Hn(e);if(n&&(this.include&&!zn(this.include,n)||this.exclude&&zn(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},Xn={KeepAlive:Kn};function Gn(t){var e={get:function(){return V}};Object.defineProperty(t,"config",e),t.util={warn:q,extend:j,mergeOptions:Dt,defineReactive:$t},t.set=wt,t.delete=xt,t.nextTick=st,t.options=Object.create(null),M.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,j(t.options.components,Xn),Bn(t),Mn(t),Ln(t),Fn(t)}Gn(Rn),Object.defineProperty(Rn.prototype,"$isServer",{get:nt}),Object.defineProperty(Rn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Rn.version="2.4.1",Rn.mpvueVersion="1.0.12";var Zn=y("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Qn=y("style,class");y("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),y("embed,img,image,input,link,meta",!0);function Yn(){}function tr(){}function er(){}function nr(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var rr={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},or={};function ir(t,e){return or}function ar(t,e){return or}function sr(t){return or}function cr(t){return or}function ur(t,e,n){}function fr(t,e){}function pr(t,e){}function lr(t){return or}function dr(t){return or}function hr(t){return"div"}function vr(t,e){return or}function yr(t,e,n){return or}var _r=Object.freeze({createElement:ir,createElementNS:ar,createTextNode:sr,createComment:cr,insertBefore:ur,removeChild:fr,appendChild:pr,parentNode:lr,nextSibling:dr,tagName:hr,setTextContent:vr,setAttribute:yr}),gr={create:function(t,e){mr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(mr(t,!0),mr(e))},destroy:function(t){mr(t,!0)}};function mr(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?g(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var br=new Vt("",{},[]),$r=["create","activate","update","remove","destroy"];function wr(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&xr(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&o(e.asyncFactory.error))}function xr(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o}function Ar(t,e,n){var r,o,a={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(a[o]=r);return a}function Or(t){var e,n,r={},s=t.modules,u=t.nodeOps;for(e=0;e<$r.length;++e)for(r[$r[e]]=[],n=0;n<s.length;++n)i(s[n][$r[e]])&&r[$r[e]].push(s[n][$r[e]]);function f(t){return new Vt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function p(t,e){function n(){0===--n.listeners&&l(t)}return n.listeners=e,n}function l(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function d(t,e,n,r,o){if(t.isRootInsert=!o,!h(t,e,n,r)){var s=t.data,c=t.children,f=t.tag;i(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),w(t),m(t,c,e),i(s)&&$(t,e),g(n,t.elm,r)):a(t.isComment)?(t.elm=u.createComment(t.text),g(n,t.elm,r)):(t.elm=u.createTextNode(t.text),g(n,t.elm,r))}}function h(t,e,n,r){var o=t.data;if(i(o)){var s=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1,n,r),i(t.componentInstance))return v(t,e),a(s)&&_(t,e,n,r),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?($(t,e),w(t)):(mr(t),e.push(t))}function _(t,e,n,o){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(a=s.data)&&i(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](br,s);e.push(s);break}g(n,t.elm,o)}function g(t,e,n){i(t)&&(i(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function m(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0);else c(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function $(t,n){for(var o=0;o<r.create.length;++o)r.create[o](br,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(br,t),i(e.insert)&&n.push(t))}function w(t){var e,n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;i(e=he)&&e!==t.context&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function x(t,e,n,r,o,i){for(;r<=o;++r)d(n[r],i,t,e)}function A(t){var e,n,o=t.data;if(i(o))for(i(e=o.hook)&&i(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)A(t.children[n])}function O(t,e,n,r){for(;n<=r;++n){var o=e[n];i(o)&&(i(o.tag)?(k(o),A(o)):l(o.elm))}}function k(t,e){if(i(e)||i(t.data)){var n,o=r.remove.length+1;for(i(e)?e.listeners+=o:e=p(t.elm,o),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&k(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else l(t.elm)}function C(t,e,n,r,a){var s,c,f,p,l=0,h=0,v=e.length-1,y=e[0],_=e[v],g=n.length-1,m=n[0],b=n[g],$=!a;while(l<=v&&h<=g)o(y)?y=e[++l]:o(_)?_=e[--v]:wr(y,m)?(S(y,m,r),y=e[++l],m=n[++h]):wr(_,b)?(S(_,b,r),_=e[--v],b=n[--g]):wr(y,b)?(S(y,b,r),$&&u.insertBefore(t,y.elm,u.nextSibling(_.elm)),y=e[++l],b=n[--g]):wr(_,m)?(S(_,m,r),$&&u.insertBefore(t,_.elm,y.elm),_=e[--v],m=n[++h]):(o(s)&&(s=Ar(e,l,v)),c=i(m.key)?s[m.key]:null,o(c)?(d(m,r,t,y.elm),m=n[++h]):(f=e[c],wr(f,m)?(S(f,m,r),e[c]=void 0,$&&u.insertBefore(t,f.elm,y.elm),m=n[++h]):(d(m,r,t,y.elm),m=n[++h])));l>v?(p=o(n[g+1])?null:n[g+1].elm,x(t,p,n,h,g,r)):h>g&&O(t,e,l,v)}function S(t,e,n,s){if(t!==e){var c=e.elm=t.elm;if(a(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?I(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,p=e.data;i(p)&&i(f=p.hook)&&i(f=f.prepatch)&&f(t,e);var l=t.children,d=e.children;if(i(p)&&b(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);i(f=p.hook)&&i(f=f.update)&&f(t,e)}o(e.text)?i(l)&&i(d)?l!==d&&C(c,l,d,n,s):i(d)?(i(t.text)&&u.setTextContent(c,""),x(c,null,d,0,d.length-1,n)):i(l)?O(c,l,0,l.length-1):i(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),i(p)&&i(f=p.hook)&&i(f=f.postpatch)&&f(t,e)}}}function j(t,e,n){if(a(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var P=y("attrs,style,class,staticClass,staticStyle,key");function I(t,n,r){if(a(n.isComment)&&i(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var o=n.tag,s=n.data,c=n.children;if(i(s)&&(i(e=s.hook)&&i(e=e.init)&&e(n,!0),i(e=n.componentInstance)))return v(n,r),!0;if(i(o)){if(i(c))if(t.hasChildNodes()){for(var u=!0,f=t.firstChild,p=0;p<c.length;p++){if(!f||!I(f,c[p],r)){u=!1;break}f=f.nextSibling}if(!u||f)return!1}else m(n,c,r);if(i(s))for(var l in s)if(!P(l)){$(n,r);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,c,p){if(!o(e)){var l=!1,h=[];if(o(t))l=!0,d(e,h,c,p);else{var v=i(t.nodeType);if(!v&&wr(t,e))S(t,e,h,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(B)&&(t.removeAttribute(B),n=!0),a(n)&&I(t,e,h))return j(e,h,!0),t;t=f(t)}var y=t.elm,_=u.parentNode(y);if(d(e,h,y._leaveCb?null:_,u.nextSibling(y)),i(e.parent)){var g=e.parent;while(g)g.elm=e.elm,g=g.parent;if(b(e))for(var m=0;m<r.create.length;++m)r.create[m](br,e.parent)}i(_)?O(_,[t],0,0):i(t.tag)&&A(t)}}return j(e,h,l),e.elm}i(t)&&A(t)}}var kr=[gr],Cr=Or({nodeOps:_r,modules:kr});function Sr(){Cr.apply(this,arguments),this.$updateDataToMP()}function jr(t,e,r){var o,i=t.$options[e];if("onError"===e&&i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)try{o=i[a].call(t,r)}catch(n){J(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return jr(t,e,r)}),o}function Pr(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Ir(t,e,n){if(t){var r,o,i;if(Array.isArray(t)){r=t.length;while(r--)o=t[r],"string"===typeof o&&(i=x(o),e[i]={type:null})}else if(p(t))for(var a in t)o=t[a],i=x(a),e[i]=p(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var c=e[s];c.default&&(c.value=c.default);var u=c.observer;c.observer=function(t,e){n[i]=t,"function"===typeof u&&u.call(n,t,e)}}return e}}function Tr(t){var e=t.$options.properties,n=t.$options.props,r={};return Ir(e,r,t),Ir(n,r,t),r}function Er(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(Ue(t,"_mpProps",n),e[n]=void 0)}),bt(e,!0)}function Dr(t,n){var r=this.$root;r.$mp||(r.$mp={});var o=r.$mp;if(o.status)return"app"===t?jr(this,"onLaunch",o.appOptions):(this.__wxWebviewId__=r.__wxWebviewId__,this.__wxExparserNodeId__=r.__wxExparserNodeId__,jr(this,"onLoad",o.query)),n();if(o.mpType=t,o.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),o.app=this,o.status="launch",this.globalData.appOptions=o.appOptions=t,jr(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),o.status="show",this.globalData.appOptions=o.appOptions=t,jr(r,"onShow",t)},onHide:function(){o.status="hide",jr(r,"onHide")},onError:function(t){jr(r,"onError",t)},onUniNViewMessage:function(t){jr(r,"onUniNViewMessage",t)}});else if("component"===t)Er(r),e.Component({properties:Tr(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){o.status="created",o.page=this},attached:function(){o.status="attached",jr(r,"attached")},ready:function(){o.status="ready",jr(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){jr(r,"moved")},detached:function(){o.status="detached",jr(r,"detached")}});else{var i=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.query=t,o.status="load",Pr(i,r),r.$options&&"function"===typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),jr(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.status="show",jr(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){o.status="ready",jr(r,"onReady"),n()},onHide:function(){o.status="hide",jr(r,"onHide")},onUnload:function(){o.status="unload",jr(r,"onUnload"),o.page=null},onPullDownRefresh:function(){jr(r,"onPullDownRefresh")},onReachBottom:function(){jr(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return jr(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){jr(r,"onPageScroll",t)},onTabItemTap:function(t){jr(r,"onTabItemTap",t)}})}}function Nr(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Rr(t,e){void 0===e&&(e=[]);var n=t||{},r=n.$parent;return r?(e.unshift(nr(r)),r.$parent?Rr(r,e):e):e}function Br(t){var e=Rr(t).join(","),n=e+(e?",":"")+nr(t),r=Object.assign(Nr(t),{$k:n,$kk:n+",",$p:e}),o="$root."+n,i={};return i[o]=r,i}function Mr(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Mr(t,e)}),Object.assign(e,Br(t))}function Lr(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,f){var p=Date.now();s||!1!==n.leading||(s=p);var l=e-(p-s);return r=this,o=o?[u,Object.assign(o[1],f)]:[u,f],l<=0||l>e?(clearTimeout(a),a=null,s=p,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,l)),i}}var Vr=Lr(function(t,e){t(e)},50);function Ur(t){var e=t.$root,n=e.$mp||{},r=n.mpType;void 0===r&&(r="");var o=n.page;if("app"!==r&&o&&"function"===typeof o.setData)return o}function Fr(){var t=Ur(this);if(t){var e=JSON.parse(JSON.stringify(Br(this)));Vr(t.setData.bind(t),r(e,t.data))}}function Wr(){var t=Ur(this);if(t){var e=Mr(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function Hr(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r],i=nr(o);if(i===e)return t=o,t}return t},t):t}function zr(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var o=t||{},i=o.data;void 0===i&&(i={});var a=o.children;void 0===a&&(a=[]);var s=o.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var o=s.$slots[t],i=Array.isArray(o)?o:[o];i.forEach(function(t){r=r.concat(zr(t,e,n))})}):a.forEach(function(t){r=r.concat(zr(t,e,n))});var c=i.attrs,u=i.on;return c&&u&&c["eventid"]===e?(n.forEach(function(t){var e=u[t];"function"===typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function qr(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s=o.x,c=o.y,u={mp:t,type:e,timeStamp:n,x:s,y:c,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:I,preventDefault:I};return r&&r.length&&(Object.assign(u,r[0]),u.touches=r),u}function Jr(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=t.currentTarget,i=o||r,a=i.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var c=a.eventid,u=Hr(e,s.split(","));if(u){var f=rr[n]||[n],p=zr(u._vnode,c,f);if(p.length){var l=qr(t);if(1===p.length){var d=p[0](l);return d}p.forEach(function(t){return t(l)})}}}return Rn.config.mustUseProp=Yn,Rn.config.isReservedTag=Zn,Rn.config.isReservedAttr=Qn,Rn.config.getTagNamespace=tr,Rn.config.isUnknownElement=er,Rn.prototype.__patch__=Sr,Rn.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return _e(n,void 0,void 0)})}return _e(this,void 0,void 0)},Rn.prototype._initMP=Dr,Rn.prototype.$updateDataToMP=Fr,Rn.prototype._initDataToMP=Wr,Rn.prototype.$handleProxyWithVue=Jr,Rn})}).call(this,n("c8ba"))}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/tabBar/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/index/index.js';

define('pages/tabBar/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/index/index"],{"1da2":function(t,i,e){"use strict";e.r(i);var a=e("82f2"),s=e("9113");for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);e("355f");var c=e("2877"),o=Object(c["a"])(s["default"],a["a"],a["b"],!1,null,null,null);i["default"]=o.exports},"355f":function(t,i,e){"use strict";var a=e("5a3a"),s=e.n(a);s.a},"3a41":function(t,i,e){"use strict";e("2b83");var a=n(e("b0ce")),s=n(e("1da2"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},"5a3a":function(t,i,e){},"82f2":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"content"},[e("view",{staticClass:"header"},[e("view",{staticClass:"input-view"},[e("uni-icon",{attrs:{type:"search",size:"22",color:"#666666",mpcomid:"8bc6e804-0"}}),e("input",{staticClass:"input",attrs:{"confirm-type":"search",type:"text",placeholder:"搜索感兴趣的内容...",eventid:"8bc6e804-0"},on:{confirm:t.search_confirm}})],1)]),e("view",{staticClass:"uni-common-mt uni-padding-wrap"},[e("view",{staticClass:"page-section swiper"},[e("view",{staticClass:"page-section-spacing"},[e("swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:500}},[e("swiper-item",{attrs:{mpcomid:"8bc6e804-1"}},[e("view",{staticClass:"swiper-item"},[e("image",{attrs:{src:"../../../static/ad1.png"}})])]),e("swiper-item",{attrs:{mpcomid:"8bc6e804-2"}},[e("view",{staticClass:"swiper-item"},[e("image",{attrs:{src:"../../../static/ad2.png"}})])]),e("swiper-item",{attrs:{mpcomid:"8bc6e804-3"}},[e("view",{staticClass:"swiper-item"},[e("image",{attrs:{src:"../../../static/ad3.png"}})])])],1)],1)])]),e("view",{staticClass:"uni-common-mt uni-padding-wrap"},[e("view",{staticClass:"uni-flex uni-row"},[e("view",{staticClass:"flex-item uni-bg-red",attrs:{eventid:"8bc6e804-1"},on:{tap:t.switch_train}},[e("view",{staticClass:"uni-flex uni-column"},[e("i",{staticClass:"iconfont"},[t._v("")]),e("text",[t._v("参加训练")])],1)]),e("view",{staticClass:"flex-item uni-bg-green",attrs:{eventid:"8bc6e804-2"},on:{tap:t.post_article}},[e("view",{staticClass:"uni-flex uni-column"},[e("i",{staticClass:"iconfont"},[t._v("")]),e("text",[t._v("发布文章")])],1)]),e("view",{staticClass:"flex-item uni-bg-blue",attrs:{eventid:"8bc6e804-3"},on:{tap:t.post_question}},[e("view",{staticClass:"uni-flex uni-column"},[e("i",{staticClass:"iconfont"},[t._v("")]),e("text",[t._v("发布问题")])],1)])])]),e("view",{staticClass:"uni-list uni-common-mt"},t._l(t.listData,function(i,a){return e("view",{key:a,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover",eventid:"8bc6e804-4-"+a},on:{click:function(e){t.goDetail(i)}}},[e("view",{staticClass:"uni-media-list"},[e("image",{staticClass:"uni-media-list-logo",attrs:{src:i.cover}}),e("view",{staticClass:"uni-media-list-body"},[e("view",{staticClass:"uni-media-list-text-top"},[t._v(t._s(i.title))]),e("view",{staticClass:"uni-media-list-text-bottom"},[e("text",[t._v(t._s(i.author))]),e("text",[t._v(t._s(i.published_at))])])])])])}))])},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},9113:function(t,i,e){"use strict";e.r(i);var a=e("ee64"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=s.a},ee64:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=s(e("cbc1"));function s(t){return t&&t.__esModule?t:{default:t}}var n={components:{uniIcon:a.default},data:function(){return{listData:[{id:1,title:"什么是阿尔茨海默症？",author:"周周复始",published_at:"5小时前",cover:"../../../static/ad1.png"},{id:2,title:"怎样预防阿尔茨海默症？",author:"周周复始",published_at:"3小时前",cover:"../../../static/ad2.png"},{id:3,title:"如何看护阿尔茨海默症患者？",author:"周周复始",published_at:"1小时前",cover:"../../../static/ad3.png"},{id:4,title:"阿尔茨海默症的相关影视作品推荐",author:"周周复始",published_at:"刚刚",cover:"../../../static/ad4.png"}]}},methods:{search_confirm:function(){this.$msg("搜索功能还在开发中^_^")},switch_train:function(){t.switchTab({url:"../training/training"})},post_article:function(){t.navigateTo({url:"../../post-article/post-article?type=article"})},post_question:function(){t.navigateTo({url:"../../post-article/post-article?type=question"})},goDetail:function(i){t.navigateTo({url:"../../list-detail/list-detail?value="+encodeURIComponent(JSON.stringify(i))})}},onLoad:function(){this.$ajax("checkSession",null,function(i){t.setStorageSync("login_state",0===i.data)})},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)}};i.default=n}).call(this,e("649d")["default"])}},[["3a41","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/index/index.js');
__wxRoute = 'pages/tabBar/training/training';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/training/training.js';

define('pages/tabBar/training/training.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/training/training"],{"11f1":function(t,e,n){"use strict";var s=n("6387"),a=n.n(s);a.a},1439:function(t,e,n){"use strict";n.r(e);var s=n("2c47"),a=n("1d88");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("11f1");var c=n("2877"),o=Object(c["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=o.exports},"1d88":function(t,e,n){"use strict";n.r(e);var s=n("38ac"),a=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);e["default"]=a.a},"2c47":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[t._m(0),n("br"),t._m(1),n("view",{staticClass:"my-common-mt uni-padding-wrap"},[n("view",{staticClass:"page-section-spacing"},t._l(t.myTestList,function(e,s){return n("view",{key:s,staticClass:"uni-card my-common-mb has-mglr-5 has-mgtb-20",class:t.bgColor[s%4]},[n("view",{staticClass:"uni-card-content"},[n("view",{staticClass:"uni-card-content-inner"},[n("view",{staticClass:"my-card-des"},[n("text",[t._v(t._s(e))]),n("text",{staticClass:"my-card-navigat-arrow"},[t._v("")])])])])])})),n("view",{staticClass:"uni-common-mt"},[n("button",{attrs:{eventid:"24e92e58-0"},on:{tap:function(e){t.addTest()}}},[t._v("编辑测试")]),t.mySelectedNum>0?n("button",{attrs:{type:"warn",eventid:"24e92e58-1"},on:{tap:function(e){t.startTest()}}},[t._v("开始测试")]):n("button",{attrs:{type:"warn",disabled:"true"}},[t._v("请先添加测试")])],1)])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-common-mt has-space-pd-10 has-pdtb-30\n\t\t\t\t has-mglr-20 has-mgtb-20 my-bg-green\n\t\t\t\t my-box-shadow-green"},[n("text",{staticClass:"my-train-des"},[t._v("ADMinder 前测系列")]),n("text",{staticClass:"navigat-arrow"},[t._v("")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"my-common-mt uni-padding-wrap　uni-common-mb"},[n("view",{staticClass:"my-deco-box"}),n("text",{staticClass:"my-deco-box-text"},[t._v("我的自主测试")])])}];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return a})},3203:function(t,e,n){"use strict";n("2b83");var s=i(n("b0ce")),a=i(n("1439"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},"38ac":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;s(n("f3d3"));function s(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{mySelectedNum:0,myTestList:[],myIdList:[],bgColor:["my-bg-blue","my-bg-green","my-bg-bg","my-bg-green"]}},methods:{decideBg:function(t){return console.log(t),console.log(this.bgColor[t%2]),this.bgColor[t%2]},addTest:function(){var e=this;this.$ajax("checkSession",null,function(n){1===n.data?e.$msg("请先登录"):t.navigateTo({url:"../../chose-test/chose-test"})})},startTest:function(){t.navigateTo({url:"../../start-test/start-test"})}},onShow:function(){this.myIdList=this.chosenId,this.myTestList=[],this.mySelectedNum=this.selectedNum;for(var t=0;t<this.myIdList.length;t++)1==this.myIdList[t]&&(this.myTestList=this.myTestList.concat(this.allTests[t].name))}};e.default=a}).call(this,n("649d")["default"])},6387:function(t,e,n){}},[["3203","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/training/training.js');
__wxRoute = 'pages/tabBar/community/community';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/community/community.js';

define('pages/tabBar/community/community.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/community/community"],{"16b8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("c61c")),a=r(n("c368"));function r(t){return t&&t.__esModule?t:{default:t}}var c={components:{uniTag:i.default,uniSegmentedControl:a.default},data:function(){return{items:["全部","创建","收藏"],current:0,listData:[[],[],[]],list_name:["articleList","user/myArticle","user/liked"],blank:[!1,!1]}},methods:{onClickItem:function(t){this.current!==t&&(this.current=t)},del_article:function(e,n){var i=this;1===e&&t.showActionSheet({itemList:["删除","取消"],success:function(e){0===e.tapIndex&&t.showModal({title:"删除",content:"确定要删除吗？",success:function(t){t.confirm&&i.$ajax("user/delete",{id:n},function(t){i.$msg("删除成功","success"),i.getList(1)})}})}})},getList:function(t){var e=this;this.$set(this.listData,t,[]),this.$ajax(this.list_name[t],null,function(n){if("<"!==n.data[0]){0!==t&&e.$set(e.blank,t-1,""==n.data);var i=e.listData[t].slice(0);for(var a in n.data)i.push(n.data[a]);e.$set(e.listData,t,i)}else e.$set(e.blank,0,!0),e.$set(e.blank,1,!0)})},goDetail:function(e){this.$ajax("articleDetail",{id:e},function(n){t.navigateTo({url:"../../article-detail/article-detail?id="+e})})}},onShow:function(){for(var t=0;t<3;++t)this.getList(t);this.current=0},onPullDownRefresh:function(){for(var e=0;e<3;++e)this.getList(e);setTimeout(function(){t.stopPullDownRefresh()},1e3)}};e.default=c}).call(this,n("649d")["default"])},"1d5e":function(t,e,n){"use strict";n.r(e);var i=n("64d5"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"2c69":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"segmented-control",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:this.current}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},computed:{wrapStyle:function(){var t="";switch(this.styleType){case"text":t="border:0;";break;default:t="border-color: ".concat(this.activeColor);break}return t},itemStyle:function(){var t="";switch(this.styleType){case"text":t="color:#000;border-left:0;";break;default:t="color:".concat(this.activeColor,";border-color:").concat(this.activeColor,";");break}return t},activeStyle:function(){var t="";switch(this.styleType){case"text":t="color:".concat(this.activeColor,";border-left:0;border-bottom-style:solid;");break;default:t="color:#fff;border-color:".concat(this.activeColor,";background-color:").concat(this.activeColor);break}return t}},methods:{onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",t))}}};e.default=i},"2ea8":function(t,e,n){},"62e1":function(t,e,n){},"64d5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:String,disabled:{type:[String,Boolean],defalut:!1},inverted:{type:[String,Boolean],defalut:!1},circle:{type:[String,Boolean],defalut:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};e.default=i},8719:function(t,e,n){"use strict";n("2b83");var i=r(n("b0ce")),a=r(n("9f3d"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},"8ab1":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"segmented-control",class:t.styleType,style:t.wrapStyle},t._l(t.values,function(e,i){return n("view",{key:i,staticClass:"segmented-control-item",class:t.styleType,style:i===t.currentIndex?t.activeStyle:t.itemStyle,attrs:{eventid:"266638ca-0-"+i},on:{click:function(e){t.onClick(i)}}},[t._v(t._s(e))])}))},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"8b00":function(t,e,n){"use strict";var i=n("2ea8"),a=n.n(i);a.a},"9f3d":function(t,e,n){"use strict";n.r(e);var i=n("db4a"),a=n("a473");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("e73a");var c=n("2877"),u=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},a288:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.text?n("view",{staticClass:"uni-tag",class:[!0===t.disabled||"true"===t.disabled?"uni-tag-disabled":"",!0===t.inverted||"true"===t.inverted?"uni-tag-inverted":"",!0===t.circle||"true"===t.circle?"uni-tag-circle":"","uni-tag-"+t.size,"uni-tag-"+t.type],attrs:{eventid:"7f23d953-0"},on:{click:function(e){t.onClick()}}},[t._v(t._s(t.text))]):t._e()},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},a473:function(t,e,n){"use strict";n.r(e);var i=n("16b8"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},ae9e:function(t,e,n){"use strict";n.r(e);var i=n("2c69"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},c368:function(t,e,n){"use strict";n.r(e);var i=n("8ab1"),a=n("ae9e");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("eb6f");var c=n("2877"),u=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},c61c:function(t,e,n){"use strict";n.r(e);var i=n("a288"),a=n("1d5e");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("8b00");var c=n("2877"),u=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},cb2a:function(t,e,n){},db4a:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:"uni-padding-wrap"},[n("uni-segmented-control",{attrs:{current:t.current,values:t.items,styleType:"text",activeColor:"#8bc34a",eventid:"f6f59228-0",mpcomid:"f6f59228-0"},on:{clickItem:t.onClickItem}}),t._l([0,1,2],function(e,i){return n("view",{directives:[{name:"show",rawName:"v-show",value:t.current===e,expression:"current === idx"}],key:i},[t._l(t.listData[e],function(e,a){return n("view",{key:a,staticClass:"uni-card",staticStyle:{"border-radius":"15rpx"},attrs:{eventid:"f6f59228-1-"+i+"-"+a},on:{click:function(n){t.goDetail(e.id)},longpress:function(n){t.del_article(i,e.id)}}},[n("view",{staticClass:"uni-card-header"},[n("text",{staticClass:"uni-ellipsis",staticStyle:{width:"80%"}},[t._v(t._s(e.title))]),n("view",{staticClass:"tag-view"},[n("uni-tag",{attrs:{text:"art"===e.type?"文章":"问答",type:"art"===e.type?"royal":"warning",inverted:"true",circle:"true",mpcomid:"f6f59228-1-"+i+"-"+a}})],1)]),n("view",{staticClass:"uni-card-content"},[n("view",{staticClass:"uni-card-content-inner"},[t._v(t._s(e.content))])]),n("view",{staticClass:"uni-card-footer"},[n("view",{staticClass:"uni-flex uni-row"},[n("i",{staticClass:"iconfont"},[t._v("")]),n("view",[t._v("赞同 "+t._s(e.agrees))])],1),n("view",{staticClass:"uni-flex uni-row"},[n("i",{staticClass:"iconfont"},[t._v("")]),n("view",[t._v("评论 "+t._s(e.cnt))])],1)])])}),0!==i&&t.blank[i-1]?n("view",{staticClass:"feedback-title"},[t._v("这里还没有文章")]):t._e()],2)})],2)])},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},e73a:function(t,e,n){"use strict";var i=n("62e1"),a=n.n(i);a.a},eb6f:function(t,e,n){"use strict";var i=n("cb2a"),a=n.n(i);a.a}},[["8719","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/community/community.js');
__wxRoute = 'pages/tabBar/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/my/my.js';

define('pages/tabBar/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/my/my"],{"084d":function(t,e,s){},"2bb2":function(t,e,s){"use strict";var i=s("70e7"),a=s.n(i);a.a},"2c9d":function(t,e,s){"use strict";s.r(e);var i=s("7297"),a=s("a1f7");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);s("4cf2");var o=s("2877"),r=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"4cf2":function(t,e,s){"use strict";var i=s("084d"),a=s.n(i);a.a},"5be8":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(s("2c9d"));function a(t){return t&&t.__esModule?t:{default:t}}var n={components:{uniPopup:i.default},data:function(){return{login:!1,userInfo:{username:"您尚未登录",avatarUrl:"../../../static/default_avatar.png",t1:0,t2:0,t3:0,t4:0},showMiddle:!1,imgvals:[0,1,2,3]}},methods:{hide_middle:function(){this.showMiddle=!1},show_middle:function(){this.login&&(this.showMiddle=!0)},change_avatar:function(t){var e=this;this.$ajax("user/setPic_profile",{pic_profile:t},function(s){0===s.data?(e.$msg("头像更改成功","success"),e.hide_middle(),e.userInfo.avatarUrl="../../../static/"+t+".jpg"):1===s.data?e.$msg("头像更改失败"):console.log(JSON.stringify(s))})},Login:function(){this.login||t.navigateTo({url:"../../login/login"})},Logout:function(){var e=this;this.login&&t.showModal({title:"注销",content:"确定要注销吗？",success:function(s){s.confirm&&e.$ajax("signOut",null,function(){e.$msg("注销成功","success"),e.userInfo={username:"您尚未登录",avatarUrl:"../../../static/default_avatar.png"},e.login=!1,t.setStorageSync("login_state",!1)})}})},new_msg:function(){t.navigateTo({url:"../../new-msg/new-msg"})},feedback:function(){t.navigateTo({url:"../../feedback/feedback"})}},onShow:function(){var e=this;this.login=t.getStorageSync("login_state"),this.login&&this.$ajax("user/info",null,function(t){e.userInfo.username=t.data.username,e.userInfo.avatarUrl="../../../static/"+t.data.pic_profile+".jpg",e.userInfo.t1=t.data.t1,e.userInfo.t2=t.data.t2,e.userInfo.t3=t.data.t3,e.userInfo.t4=t.data.t4})}};e.default=n}).call(this,s("649d")["default"])},"70e7":function(t,e,s){},7297:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-mask",style:{top:t.offsetTop+"px"},attrs:{eventid:"45610025-0"},on:{click:t.hide}}),s("view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:["uni-popup","uni-popup-"+t.type]},[t._v(t._s(t.msg)),t._t("default",null,{mpcomid:"45610025-0"})],2)])},a=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return a})},8948:function(t,e,s){"use strict";s.r(e);var i=s("5be8"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},9907:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{show:{type:Boolean,default:!1},type:{type:String,default:"middle"},msg:{type:String,default:""}},data:function(){var t=0;return{offsetTop:t}},methods:{hide:function(){this.$emit("hidePopup")}}};e.default=i},"9c8a":function(t,e,s){"use strict";s.r(e);var i=s("d024"),a=s("8948");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);s("2bb2");var o=s("2877"),r=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},a1f7:function(t,e,s){"use strict";s.r(e);var i=s("9907"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},d024:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"center"},[s("view",{staticClass:"logo",attrs:{"hover-class":t.login?"":"logo-hover",eventid:"564b0e58-1"},on:{click:t.Login}},[s("image",{staticClass:"logo-img",attrs:{src:t.userInfo.avatarUrl,eventid:"564b0e58-0"},on:{tap:t.show_middle}}),s("view",{staticClass:"logo-title"},[s("text",{staticClass:"user-name"},[t._v("您好，"+t._s(t.userInfo.username))]),t.login?t._e():s("i",{staticClass:"iconfont",staticStyle:{color:"#fff"}},[t._v("")])],1)]),s("uni-popup",{attrs:{show:t.showMiddle,type:t.middle,eventid:"564b0e58-3",mpcomid:"564b0e58-0"},on:{hidePopup:t.hide_middle}},t._l(t.imgvals,function(e,i){return s("image",{key:i,staticClass:"image",staticStyle:{width:"100rpx",height:"200rpx"},attrs:{src:"../../../static/"+e+".jpg",eventid:"564b0e58-2-"+i},on:{tap:function(s){t.change_avatar(e)}}})})),s("view",{staticClass:"center-list"},[t._m(0),s("view",{staticClass:"center-list-item",staticStyle:{height:"70rpx"}},[s("progress",{attrs:{percent:t.userInfo.t1,active:"","show-info":"",color:"#8bc34a","stroke-width":"10"}})],1),t._m(1),s("view",{staticClass:"center-list-item",staticStyle:{height:"70rpx"}},[s("progress",{attrs:{percent:t.userInfo.t2,active:"","show-info":"",color:"#8bc34a","stroke-width":"10"}})],1),t._m(2),s("view",{staticClass:"center-list-item",staticStyle:{height:"70rpx"}},[s("progress",{attrs:{percent:t.userInfo.t3,active:"","show-info":"",color:"#8bc34a","stroke-width":"10"}})],1),t._m(3),s("view",{staticClass:"center-list-item",staticStyle:{height:"70rpx"}},[s("progress",{attrs:{percent:t.userInfo.t4,active:"","show-info":"",color:"#8bc34a","stroke-width":"10"}})],1)]),s("view",{staticClass:"center-list"},[s("view",{staticClass:"center-list-item",attrs:{"hover-class":"uni-list-cell-hover",eventid:"564b0e58-4"},on:{tap:t.new_msg}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("text",{staticClass:"list-text"},[t._v("新消息通知")]),s("i",{staticClass:"iconfont"},[t._v("")])],1),s("view",{staticClass:"center-list-item",attrs:{"hover-class":"uni-list-cell-hover",eventid:"564b0e58-5"},on:{tap:t.feedback}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("text",{staticClass:"list-text"},[t._v("问题反馈")]),s("i",{staticClass:"iconfont"},[t._v("")])],1)]),s("view",{staticClass:"center-list"},[s("view",{staticClass:"center-list-item",attrs:{"hover-class":"uni-list-cell-hover",eventid:"564b0e58-6"},on:{tap:t.Logout}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("text",{staticClass:"list-text"},[t._v("注销账号")]),s("i",{staticClass:"iconfont"},[t._v("")])],1)])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"center-list-item",staticStyle:{height:"50rpx"}},[s("text",{staticClass:"list-text"},[t._v("注意力与计算力")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"center-list-item",staticStyle:{height:"50rpx"}},[s("text",{staticClass:"list-text"},[t._v("定向力")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"center-list-item",staticStyle:{height:"50rpx"}},[s("text",{staticClass:"list-text"},[t._v("短时记忆")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"center-list-item",staticStyle:{height:"50rpx"}},[s("text",{staticClass:"list-text"},[t._v("延时记忆")])])}];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return a})},ea2a:function(t,e,s){"use strict";s("2b83");var i=n(s("b0ce")),a=n(s("9c8a"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))}},[["ea2a","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/my/my.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0512":function(t,s,e){"use strict";e.r(s);var a=e("7921"),i=e("42ae");for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);e("0fdc");var o=e("2877"),r=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);s["default"]=r.exports},"0fdc":function(t,s,e){"use strict";var a=e("98e9"),i=e.n(a);i.a},"3acc":function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{login:{}}},methods:{sign_in:function(){var s=this;this.login.loading=!0,setTimeout(function(t){s.login.loading=!1},2e3),this.$ajax("signIn",{username:this.login.username,password:this.login.password},function(e){0===e.data?(s.$msg("登录成功","success"),t.setStorageSync("login_state",!0),setTimeout(function(){t.switchTab({url:"../tabBar/my/my"})},500)):1===e.data&&s.$msg("用户名或密码错误")})}}};s.default=e}).call(this,e("649d")["default"])},"3be2":function(t,s,e){"use strict";e("2b83");var a=n(e("b0ce")),i=n(e("0512"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},"42ae":function(t,s,e){"use strict";e.r(s);var a=e("3acc"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);s["default"]=i.a},7921:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"s-page-wrapper is-100vh"},[t._m(0),e("view",{staticClass:"content has-mgt-25"},[e("view",{staticClass:"has-mglr-10 "},[e("view",{staticClass:" has-mgtb-10 "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"}],staticClass:"is-input1 ",attrs:{type:"text",placeholder:"请输入用户名",eventid:"7f776b89-0"},domProps:{value:t.login.username},on:{input:function(s){s.target.composing||(t.login.username=s.target.value)}}})]),e("view",{staticClass:" has-radius has-mgtb-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"is-input1",attrs:{type:"text",placeholder:"请输入登录密码",password:!0,eventid:"7f776b89-1"},domProps:{value:t.login.password},on:{input:function(s){s.target.composing||(t.login.password=s.target.value)}}})]),e("view",{staticClass:" loginbtn has-radius has-mgtb-20"},[e("button",{attrs:{loading:t.login.loading,eventid:"7f776b89-2"},on:{tap:t.sign_in}},[t._v(t._s(t.login.loading?"登 录 中 . . .":"登     录"))])],1)])]),e("view",{staticClass:"is-20vh has-mgt-80 content"},[e("navigator",{staticClass:" has-radius is-center is-white has-mgb-10",attrs:{url:"./register","hover-class":""}},[e("text",[t._v("没有账户？")]),e("text",{staticClass:"is-blue"},[t._v("点击注册")])]),e("navigator",{staticClass:" has-radius is-center is-white",attrs:{url:"./retrieve","hover-class":""}},[e("text",[t._v("忘记密码？")]),e("text",{staticClass:"is-blue"},[t._v("点击找回")])])],1)])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"is-33vh has-mgt-25"},[e("view",{staticClass:"is-flex is-column is-justify-center is-align-center is-height-100"},[e("image",{staticClass:"logoimg",attrs:{src:"../../static/default_avatar.png",mode:"aspectFit"}})])])}];e.d(s,"a",function(){return a}),e.d(s,"b",function(){return i})},"98e9":function(t,s,e){}},[["3be2","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/login/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/register.js';

define('pages/login/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register"],{"5ef8":function(e,t,a){},"68d7":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{vBtnTxt:"获取验证码",reg:{}}},methods:{checkNsend:function(e){var t=this;this.$ajax("checkMail",e,function(a){0===a.data?(t.vBtnTxt="请稍等",t.$ajax("sendMail",e,function(e){0===e.data?t.$msg("邮件发送成功","success"):t.$msg("邮件发送失败")})):1===a.data?t.$msg("邮箱已被注册"):2===a.data&&t.$msg("邮箱长度超出限制")})},get_vcode:function(){var e=/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;e.test(this.reg.mail)?this.checkNsend({mail:this.reg.mail}):this.$msg("请输入合法的邮箱")},check_uname:function(){var e=this;this.$ajax("checkUsername",{username:this.reg.username},function(t){1===t.data?e.$msg("用户名重复"):2===t.data&&e.$msg("用户名长度超出限制")})},register:function(){var e=this;this.$ajax("signUp",{mail:this.reg.mail,verifyCode:this.reg.vcode,username:this.reg.username,password:this.reg.password},function(t){0===t.data?(e.$msg("注册成功","success"),e.$back()):1===t.data?e.$msg("邮箱不合法"):2===t.data?e.$msg("用户名不合法"):3===t.data&&e.$msg("验证码错误")})}}};t.default=s},7069:function(e,t,a){"use strict";var s=a("5ef8"),i=a.n(s);i.a},9041:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"s-page-wrapper is-100vh"},[e._m(0),a("view",{staticClass:"registercontent has-mgt-25"},[a("view",{staticClass:"has-mglr-10 "},[a("view",{staticClass:" has-mgtb-10 "},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.reg.mail,expression:"reg.mail"}],staticClass:"is-input1 ",attrs:{type:"text",placeholder:"请输入邮箱地址",eventid:"6f5082fa-0"},domProps:{value:e.reg.mail},on:{input:function(t){t.target.composing||(e.reg.mail=t.target.value)}}})]),a("view",{staticClass:" has-mgtb-10 "},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.reg.vcode,expression:"reg.vcode"}],staticClass:"is-input1 ",attrs:{type:"number",maxlength:"6",placeholder:"验证码",eventid:"6f5082fa-1"},domProps:{value:e.reg.vcode},on:{input:function(t){t.target.composing||(e.reg.vcode=t.target.value)}}}),a("view",{staticClass:"codeimg",attrs:{eventid:"6f5082fa-2"},on:{tap:e.get_vcode}},[e._v(e._s(e.vBtnTxt))])]),a("view",{staticClass:" has-radius has-mgtb-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.reg.username,expression:"reg.username"}],staticClass:"is-input1",attrs:{placeholder:"请输入用户名",eventid:"6f5082fa-3"},domProps:{value:e.reg.username},on:{blur:e.check_uname,input:function(t){t.target.composing||(e.reg.username=t.target.value)}}})]),a("view",{staticClass:" has-radius has-mgtb-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.reg.password,expression:"reg.password"}],staticClass:"is-input1",attrs:{placeholder:"请输入登录密码",password:!0,eventid:"6f5082fa-4"},domProps:{value:e.reg.password},on:{input:function(t){t.target.composing||(e.reg.password=t.target.value)}}})]),a("view",{staticClass:" registerbtn has-radius has-mgtb-20"},[a("button",{attrs:{eventid:"6f5082fa-5"},on:{tap:e.register}},[e._v("注 册")])],1)])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"is-33vh has-mgt-25"},[a("view",{staticClass:"is-flex is-column is-justify-center  is-align-center is-height-100"},[a("image",{staticClass:"logoimg",attrs:{src:"../../static/default_avatar.png",mode:"aspectFit"}})])])}];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i})},a256:function(e,t,a){"use strict";a.r(t);var s=a("9041"),i=a("b807");for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);a("7069");var r=a("2877"),o=Object(r["a"])(i["default"],s["a"],s["b"],!1,null,null,null);t["default"]=o.exports},b807:function(e,t,a){"use strict";a.r(t);var s=a("68d7"),i=a.n(s);for(var n in s)"default"!==n&&function(e){a.d(t,e,function(){return s[e]})}(n);t["default"]=i.a},f2bb:function(e,t,a){"use strict";a("2b83");var s=n(a("b0ce")),i=n(a("a256"));function n(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(i.default))}},[["f2bb","common/runtime","common/vendor"]]]);
});
require('pages/login/register.js');
__wxRoute = 'pages/login/retrieve';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/retrieve.js';

define('pages/login/retrieve.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/retrieve"],{"2cc1":function(e,t,a){"use strict";a.r(t);var s=a("54bb"),i=a("ba1d");for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);a("c87d");var n=a("2877"),c=Object(n["a"])(i["default"],s["a"],s["b"],!1,null,null,null);t["default"]=c.exports},"399a":function(e,t,a){},"47e1":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{vBtnTxt:"获取验证码",reg:{}}},methods:{checkNsend:function(e){var t=this;this.$ajax("checkMail",e,function(a){1===a.data?(t.vBtnTxt="请稍等",t.$ajax("XsendMail",e,function(e){0===e.data?t.$msg("邮件发送成功","success"):t.$msg("邮件发送失败")})):t.$msg("邮箱地址非法")})},get_vcode:function(){var e=/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;e.test(this.reg.mail)?this.checkNsend({mail:this.reg.mail}):this.$msg("请输入合法的邮箱")},retrieve:function(){var e=this;this.$ajax("retrievePassword",{mail:this.reg.mail,verifyCode:this.reg.vcode,password:this.reg.password},function(t){0===t.data?(e.$msg("重置成功","success"),e.$back()):1===t.data?e.$msg("验证码错误"):2===t.data&&e.$msg("重置失败")})}}};t.default=s},"54bb":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"s-page-wrapper is-100vh"},[e._m(0),a("view",{staticClass:"registercontent has-mgt-25"},[a("view",{staticClass:"has-mglr-10 "},[a("view",{staticClass:" has-mgtb-10 "},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.reg.mail,expression:"reg.mail"}],staticClass:"is-input1 ",attrs:{type:"text",placeholder:"请输入注册的邮箱地址",eventid:"41fe5fc8-0"},domProps:{value:e.reg.mail},on:{input:function(t){t.target.composing||(e.reg.mail=t.target.value)}}})]),a("view",{staticClass:" has-mgtb-10 "},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.reg.vcode,expression:"reg.vcode"}],staticClass:"is-input1 ",attrs:{type:"number",maxlength:"6",placeholder:"验证码",eventid:"41fe5fc8-1"},domProps:{value:e.reg.vcode},on:{input:function(t){t.target.composing||(e.reg.vcode=t.target.value)}}}),a("view",{staticClass:"codeimg",attrs:{eventid:"41fe5fc8-2"},on:{tap:e.get_vcode}},[e._v(e._s(e.vBtnTxt))])]),a("view",{staticClass:" has-radius has-mgtb-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.reg.password,expression:"reg.password"}],staticClass:"is-input1",attrs:{placeholder:"请输入新密码",password:!0,eventid:"41fe5fc8-3"},domProps:{value:e.reg.password},on:{input:function(t){t.target.composing||(e.reg.password=t.target.value)}}})]),a("view",{staticClass:" registerbtn has-radius has-mgtb-20"},[a("button",{attrs:{eventid:"41fe5fc8-4"},on:{tap:e.retrieve}},[e._v("重 置")])],1)])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"is-33vh has-mgt-25"},[a("view",{staticClass:"is-flex is-column is-justify-center  is-align-center is-height-100"},[a("image",{staticClass:"logoimg",attrs:{src:"../../static/default_avatar.png",mode:"aspectFit"}})])])}];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i})},ab3a:function(e,t,a){"use strict";a("2b83");var s=r(a("b0ce")),i=r(a("2cc1"));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(i.default))},ba1d:function(e,t,a){"use strict";a.r(t);var s=a("47e1"),i=a.n(s);for(var r in s)"default"!==r&&function(e){a.d(t,e,function(){return s[e]})}(r);t["default"]=i.a},c87d:function(e,t,a){"use strict";var s=a("399a"),i=a.n(s);i.a}},[["ab3a","common/runtime","common/vendor"]]]);
});
require('pages/login/retrieve.js');
__wxRoute = 'pages/chose-test/chose-test';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chose-test/chose-test.js';

define('pages/chose-test/chose-test.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chose-test/chose-test"],{"0285":function(t,e,s){"use strict";var n=s("13dc"),a=s.n(n);a.a},"0fd3":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"my-common-my uni-padding-wrap"},[s("view",{staticClass:"page-section-spacing"},t._l(t.myAllTestList,function(e,n){return s("view",{key:n,staticClass:"uni-card my-common-mb my-card-select-tap",class:[t.bgColor[n%4],{"my-card-selected":1==t.myIdList[n]}],attrs:{eventid:"3a2c5756-0-"+n},on:{tap:function(e){t.changeSelect(n)}}},[s("view",{staticClass:"uni-card-content"},[s("view",{staticClass:"uni-card-content-inner"},[s("view",{staticClass:"my-card-des"},[s("text",[t._v(t._s(e.name))]),0==t.myIdList[n]?s("text",{staticClass:"my-card-navigat-add"},[t._v("+")]):s("text",{staticClass:"my-card-navigat-add my-card-selected-text",staticStyle:{"margin-left":"520rpx"}},[t._v("✓")])])])])])}))]),0==t.mySelectedNum?s("view",{staticClass:"my-footer has-bg-red",attrs:{eventid:"3a2c5756-2"},on:{tap:function(e){t.confirmTest()}}},[t._v("确认")]):s("view",{staticClass:"my-footer has-bg-red",attrs:{eventid:"3a2c5756-1"},on:{tap:function(e){t.confirmTest()}}},[t._v("确认"+t._s("("+t.mySelectedNum+")"))])])},a=[];s.d(e,"a",function(){return n}),s.d(e,"b",function(){return a})},"13dc":function(t,e,s){},b546:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(s("f3d3"));function a(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{mySelectedNum:0,myAllTestList:[],myIdList:[],bgColor:["my-bg-blue","my-bg-green","my-bg-bg","my-bg-green"]}},methods:{changeSelect:function(t){n.default.set(this.myIdList,t,!this.myIdList[t]),1==this.myIdList[t]?this.mySelectedNum++:this.mySelectedNum--},confirmTest:function(){n.default.prototype.chosenId=this.myIdList,n.default.prototype.selectedNum=this.mySelectedNum,console.log(this.selectedNum),t.navigateBack({delta:1})}},onLoad:function(){this.myAllTestList=this.allTests,this.myIdList=this.chosenId,this.mySelectedNum=this.selectedNum,console.log(this.selectedNum)},onUnload:function(){n.default.prototype.chosenId=this.myIdList,n.default.prototype.selectedNum=this.mySelectedNum}};e.default=c}).call(this,s("649d")["default"])},b816:function(t,e,s){"use strict";s.r(e);var n=s("0fd3"),a=s("e98f");for(var c in a)"default"!==c&&function(t){s.d(e,t,function(){return a[t]})}(c);s("0285");var i=s("2877"),o=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},e98f:function(t,e,s){"use strict";s.r(e);var n=s("b546"),a=s.n(n);for(var c in n)"default"!==c&&function(t){s.d(e,t,function(){return n[t]})}(c);e["default"]=a.a},f636:function(t,e,s){"use strict";s("2b83");var n=c(s("b0ce")),a=c(s("b816"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))}},[["f636","common/runtime","common/vendor"]]]);
});
require('pages/chose-test/chose-test.js');
__wxRoute = 'pages/show-score/show-score';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/show-score/show-score.js';

define('pages/show-score/show-score.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/show-score/show-score"],{"0bcf":function(t,e,n){"use strict";n.r(e);var a=n("fcd5"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},"1e2d":function(t,e,n){"use strict";var a=n("4aa8"),o=n.n(a);o.a},"2b91":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"has-mgt-50"},[n("view",{staticClass:"has-mgt-61",staticStyle:{"font-size":"128rpx",color:"#576B95"}},[t._v("您的得分为")]),n("view",{staticStyle:{"font-size":"200rpx",color:"#576B95"}},[t._v(t._s(t.myScore))]),n("view",{staticStyle:{"font-size":"128rpx",color:"#576B95"}},[t._v("加油")]),n("view",{staticClass:"my-mgt-infty uni-padding-wrap"},[n("button",{staticStyle:{"margin-right":"5%"},attrs:{type:"default",eventid:"05cb4216-0"},on:{tap:function(e){t.reloadPrev()}}},[t._v("重新训练")]),n("button",{staticStyle:{"margin-left":"5%"},attrs:{type:"primary",eventid:"05cb4216-1"},on:{tap:function(e){t.goBack2()}}},[t._v("返回")])],1)])},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"4aa8":function(t,e,n){},ae6e:function(t,e,n){"use strict";n("2b83");var a=r(n("b0ce")),o=r(n("b157"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},b157:function(t,e,n){"use strict";n.r(e);var a=n("2b91"),o=n("0bcf");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("1e2d");var i=n("2877"),c=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},fcd5:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{timer:"",myScore:0}},methods:{reloadPrev:function(){t.showLoading({title:"准备中"}),this.timer=setInterval(function(){clearInterval(this.timer),t.hideLoading()},1e3),t.redirectTo({url:"../start-test/start-test"})},goBack2:function(){t.navigateBack({delta:2})}},onLoad:function(t){console.log(t.myScore),this.myScore=Math.floor(t.myScore)},onShow:function(){}};e.default=n}).call(this,n("649d")["default"])}},[["ae6e","common/runtime","common/vendor"]]]);
});
require('pages/show-score/show-score.js');
__wxRoute = 'pages/start-test/start-test';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/start-test/start-test.js';

define('pages/start-test/start-test.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/start-test/start-test"],{"018c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYwAAAC3CAIAAACOkf7HAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAujSURBVHhe7drBzuRGFYZhri/3wgVwAayQWMMGZcECsSGLSBGb2QwClEA0USAkaC6Gozn+PxWnXOWq6rZ02n6PnsX83eXqKtv1te2en/3q/WcAkBYhBSA1QgpAaoQUgNQIKQCpEVIAUiOkAKRGSAFIjZACkBohBSA1QgpAaoQUgNQIKQCpEVIAUiOkAKRGSAFIjZACkBohBSA1QgpAaoQUgNQIKQCpEVIAUiOkAKRGSAFIjZACkBohBSA1QgpAaoQUgNQIKQCpEVIAUiOkAKRGSAFIjZACkBohBSA1QgpAaoQUgNQIKQCpEVIAUiOkAKRGSAFIjZACkBohBSA1QgpAaoQUgNQIKQCpEVIAUiOkAKRGSAFIjZACkBohBSA1QgpAaoQUgNQIKQCpEVIAUiOkAKRGSAFIjZACkBohBSA1QgpAaoQUgNQIKQCpEVIAUiOkAKRGSAFIjZACkBohBSA1QgpAaoQUgNQIKQCpEVIAUiOkAKRGSAFIjZACkBohBSA1QgpAarcOqd/+9ecfP9W/fvoQ3ur4xw9/8a1m6913X9gnht7WHI4htD+kXdGqP3/4gzUbnLs182777fu7fWvULhvS2cdiuf+6Hu/Wtvr9178s+7mJW4eUneXb8f/4cfzwP37i/umfvwl9zjocw+xH2KLdtmzUGSFl5d3u2lq065GQUvV31OP9q57YbWenXdKtQ8q+ybfD/vHj+++/Cu+OKGPOSotTfvf3X3z57ecf/vP11uKt7KNPvaqyTwzN+spdoeovhsO5B62VOXVF0/kuOftYjM/3j9/8uv6U0Eb63drALEZ3x1w2u7b7hpSd7tsB/1Q//veH0GDE1EK1s21r91a2bEKbBVrAocZD0BbVts3/l80utCxNzd20xnm4odG2j4RUaeFYzM7X9v/W9FO1+h/vNnyRzH4Pva77hpRdOm1H+61srYY2h2ZPXDtTt6ZvNR4lLVrAoeyqIbRsqXeFl80utCzNzl3jrAd8OFRt8qyQMrPHYrZ/U34RtkY+1e3W6K1mb+pf1H1DajvORS3c8T144lo9/n2oBRxuCsZ79vZ2LamuvGx2oWVpdu7q3PZAff8SGgfltuEtOftYLPRvdPnzlJDSfvD627/fhQaXdNOQqq/2vUKzQ2snbjjVHvw+VG9rt5Pa6t13X4SB2exC49Ls3NW5LdeQDlb99VZuG96Ss4/FWv/6ReIpIRWueQfH8OpuGlLh1FTN5sXaiRvS5MGLKc3FlkG4QrEVEhrXtIklWtgtNrvQuDQ793Kc9mf9e2Lndjtsu+vsY7HWv573PSWk1sbw6u4YUnqiaZfi4atp9vp57aQJj1StHnkyZR/qndgy+PLbz/3fXoe/Aem5jC9OdeVlsysbB7NzL8fpr9gNpr/i1fntot62dvaxWOtfe7gVwVPd2vm5tftUg2N4dXcMKZ0WtqTtpPd/q0LjvrUT14T1Of6Qu2Yf6p3YXOol11nVRpczfgmprrxsdmXjYHbu5Tj9lXrnty796m1rZx+Lkf7VJrzeMTVs7QevkSvlC7hjSOlZpn9nhl92p/JieWGEs23hmb2oK1/A4cu237PWp/8ZRmWzU8va7NzDOF0YrdVuDO1uG5x9LEb6V+iH1zumhr01eqvO3riS24WUHVc/wLqzCw9Hpp4QPWthjG9YU1d+yoaHLJ17KD0u0bIMo7LZqXFtdu5hnOIvqnb3f2vb0tnHYqR/dRVe7xgf9vIEX93tQkoPofSMYPypRG35vNEwvA4fHnVoYWgB+5+q1tMQXcWogbrystmpcW127vU4nbJSVX9ua9vS2cfisP/yRApvdQwOe/Zp45XcLqR2j7F+4fIav+NbXhhhQ6vQYFy9gMOq04VS4O+Wu0Jdedkg9VZtdu71OOu3VOF7orOtnH0s+v2HqC3f6jvstr4jnrrYv4B7hZRuhcITx+WvqbMXxoh6AdfXJmosmnK5K9SVlw1Sb9Vm516PU+qL2dBbZ1s5+1jUzToVtu2Y6tbKf+K4lXuFlK6Y6hs6f1018t8gzdkLY8TuAg6/WNVn9u6uUFdeNki9VZud++44JXxPWJXXs/1t3dnHom7WqbBtx3i3NqP6vL2DG4WUvq53T99wUT344+7ZC2PE7gIOd3z6lcDpP++EAasrLxtk+W4wO/fdcZbCTbeV3jrc1px9LPr9h5At3+rrd2tHKuyWwTPzSm4UUvoVb/eCOfwoNnjH96yF0fkN7tDuAlYMqfSWae0KdeVlgyzfDWbnvjvOUj1mZevhtubsY3HYv41te+95IeVCAt4tp24UUpY720EeK/3m1bG8MLTqvMY3rKmrsIDDfMu7p/DfoySMymYXGpRm594aZyn0aeVHYWHbw/FImHVrw5H+ddUTXu8YHHY4mre677tLSNXPkg+r9aNY6VkLI9yOTVFXYQHrcsnL1o+/rl1RTzCMymYXGpRm594aZxBWo1/XjGx79rEY6V8PDcLrHYPDDkfzVhdTdwkpPaPp/DgS7vhGbsGWF0Z40GD9hAbjtMbCAtYzOJV//Woh1Qs+LNf+qGbn3hpnYO96M5UtyJFtzz4WI/2rTfmin3vLd5EunJz6yrmDu4SUH9rD3PFmqsM7vuWFsW3wVv1129dZwPXyU3LtPnRTV17WPjQozc69M84gXDVY6f70jJDaNnir1keM9K825Yt+FFrjGRx2/yHjtd0ipPQtdHgHp6sMr8O7sLWFEU64kUu2DvtQ76deXeGBqwWTXikfUYm68rLZhQal2bl3xllTKoV6ekiNH4u1/k2//Xi3W4u3GtmN13CLkNIFhZ2R4a0gXFRbhQbB2okbssM6CQ2m2Id6P/VZW9/xqXafvKorr/7AZufeGWet9Qzx6SE1fizW+rcB99uPd9v5JeTarh9S/RucWvgO7zzDMmsnbrgLC+/Osg/1fnYXcLg29GpdIaorr86KNbNz74+ztjvyp4fU+LFY61+3rq32491qB3rd59n59UNKZ0l/yYkesXv17/gWTtxwjTA4qg6du7sLuL42tGolb1gG/bHNzr0/zl3evqznhtTUsVjo3+jyp9V+vNvwqG5wABdw/ZDSWbJ7g1OrbzQ6G86euOEJyOEzrxH2od5bawH7u6rOYxd15fXcRXs4zlqdsE8MqdljMdu/Ke8lW+3Huw0tH3yU+UIuHlJKnJFTSsIdX+fmf+rEDUvObjRCgzX2od5hawGHa8POrwfqystmFxqUZhft4Th3hSE9K6QWjsXsfMO3XevubLxbm/vW6K0On7Few8VDSuuzdYOzK6zqzhl8eIbZaWRtwiNPK3sxtFymZdxawGG1dM5sdeXVH+T46nKH49wVnv0/ElIPHovB+doIw/nj1fqUwW5d+PocHPmru2BIaTG0avfQHm6l+vDjN9u/lso+aPDGs+NwtKG9Tu46cMMiaZXvtMG9ZM2889lx7ipvmkJIDY6nVbZ5/1g82H9ZrUAJ+1+7bld9/3uH3/gIqdGtVGshZV/gdkUTPnTZ4WhDe3231+d0/pAy+g3uKSE1fizW+t+t8qwb71abSLguVk1dn76W6z84B/DSCCkAqRFSAFIjpACkRkgBSI2QApAaIQUgNUIKQGqEFIDUCCkAqRFSAFIjpACkRkgBSI2QApAaIQUgNUIKQGqEFIDUCCkAqRFSAFIjpACkRkgBSI2QApAaIQUgNUIKQGqEFIDUCCkAqRFSAFIjpACkRkgBSI2QApAaIQUgNUIKQGqEFIDUCCkAqRFSAFIjpACkRkgBSI2QApAaIQUgNUIKQGqEFIDUCCkAqRFSAFIjpACkRkgBSI2QApAaIQUgNUIKQGqEFIDUCCkAqRFSAFIjpACkRkgBSI2QApAaIQUgNUIKQGqEFIDUCCkAqRFSAFIjpACkRkgBSI2QApAaIQUgNUIKQGqEFIDUCCkAqRFSAFIjpACkRkgBSI2QApAaIQUgNUIKQGqEFIDUCCkAqRFSAFIjpACkRkgBSOz9Z/8D/S+G5cFqixEAAAAASUVORK5CYII="},"0d65":function(t,e,s){"use strict";s("2b83");var i=r(s("b0ce")),a=r(s("b868"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},"107e":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticStyle:{"background-color":"#FFFFFF"}},[s("view",{staticClass:"my-testing-head"},[s("view",{staticClass:"my-testing-bar"},[s("view",{staticClass:"my-testing-progress-pd"},[s("progress",{attrs:{percent:t.curNum/t.totNum*100,"stroke-width":"4",active:"true","active-mode":"forwards",activeColor:"white","background-color":"#8bc34a"}})],1)]),s("view",{staticClass:"my-testing-content-header my-testing-content"},[t._v(t._s(t.testName)+" · 难度"+t._s(t.testDiff))]),s("view",{staticClass:"has-mgb-0",staticStyle:{width:"100%"},attrs:{animation:t.animationData}},[t.curId>=1&&t.curId<=199?s("view",{staticClass:"my-image-wrapper"},[s("image",{staticStyle:{width:"100%"},attrs:{src:t.source}})]):t._e(),t.curId>=3001&&t.curId<=3999?s("view",{staticClass:"my-audio-wrapper"},[1==t.hasExeDes?s("block",[s("audio",{attrs:{src:t.source,author:"来源网络",name:"题目音频",poster:t.pSrc,controls:"",eventid:"a7636fd6-0"},on:{ended:function(e){t.type3FadeIO()}}})],1):t._e(),0==t.hasExeDes?s("view",{staticClass:"my-testing-audio-question",staticStyle:{"text-align":"center","font-size":"50rpx"}},[t._v(t._s(t.myQuestion))]):t._e()],1):t._e(),t.curId>=301&&t.curId<=399?s("view",{staticClass:"my-video-wrapper"},[1==t.hasExeDes?s("block",[s("video",{attrs:{id:"myVideo",src:t.source,autoplay:"true",objectFit:"cover",eventid:"a7636fd6-1"},on:{error:t.videoErrorCallback,ended:function(e){t.type3FadeIO()}}})]):t._e(),0==t.hasExeDes?s("view",{staticClass:"my-testing-question",staticStyle:{"text-align":"center","font-size":"50rpx"}},[t._v(t._s(t.myQuestion))]):t._e()],1):t._e(),t.curId>=201&&t.curId<=203?s("view",{staticClass:"my-grid-wrapper"},[203==t.curId?s("view",{staticClass:"uni-grid-16"},t._l(16,function(e,i){return s("view",{key:i,staticClass:"uni-grid-16-item uni-grid-item-hover",class:t.matrix[i],staticStyle:{"text-align":"center"},attrs:{eventid:"a7636fd6-2-"+i},on:{tap:function(e){t.type2SelectBlock(i)}}})})):t._e(),202==t.curId?s("view",{staticClass:"uni-grid-9"},t._l(9,function(e,i){return s("view",{key:i,staticClass:"uni-grid-9-item uni-grid-item-hover",class:t.matrix[i],staticStyle:{"text-align":"center"},attrs:{eventid:"a7636fd6-3-"+i},on:{tap:function(e){t.type2SelectBlock(i)}}})})):t._e(),201==t.curId?s("view",{staticClass:"uni-grid-4"},t._l(4,function(e,i){return s("view",{key:i,staticClass:"uni-grid-4-item uni-grid-item-hover",class:t.matrix[i],staticStyle:{"text-align":"center"},attrs:{eventid:"a7636fd6-4-"+i},on:{tap:function(e){t.type2SelectBlock(i)}}})})):t._e()]):t._e()])]),s("view",{staticClass:"my-testing-button-area has-mgt-35 uni-padding-wrap",staticStyle:{"background-color":"#FFFFFF"},attrs:{animation:t.animationData}},[s("block",[t._l(t.mySelections,function(e,i){return t.curId>=201&&t.curId<=203||0!=t.hasExeDes?t._e():s("view",{key:i},[0==t.curState?s("button",{attrs:{type:"default",eventid:"a7636fd6-5-"+i},on:{tap:function(e){t.choseIndex(i)}}},[t._v(t._s(e))]):1==t.curState&&t.correctIdx==i?s("button",{attrs:{type:"primary"}},[t._v(t._s(e))]):1==t.curState&&t.correctIdx!=i?s("button",{attrs:{disabled:"true"}},[t._v(t._s(e))]):t.curState<0&&t.correctIdx==i?s("button",{attrs:{type:"primary"}},[t._v(t._s(e))]):t.curState<0&&-1*t.curState-1==i?s("button",{attrs:{type:"warn",disabled:"true"}},[t._v(t._s(e))]):s("button",{attrs:{disabled:"true"}},[t._v(t._s(e))])],1)}),t.curId>=201&&t.curId<=203&&0==t.hasExeDes?s("view",{staticClass:"my-testing-button-area my-mgt-62"},[0==t.curState?s("button",{attrs:{type:"default",eventid:"a7636fd6-6"},on:{tap:function(e){t.choseIndex(-2)}}},[t._v("确定")]):1==t.curState?s("button",{attrs:{type:"primary"}},[t._v("确定")]):-1==t.curState?s("button",{attrs:{type:"warn",disabled:"true"}},[t._v("确定")]):t._e()],1):t._e(),1==t.hasExeDes?s("view",{staticClass:"has-pdlr-20",staticStyle:{"vertical-align":"middle","text-align":"center","font-size":"50rpx",color:"#576B95 !important"},attrs:{animation:t.animationData}},[t._v(t._s(t.exeDes))]):t._e(),1==t.hasExeDes&&(t.curId>=301&&t.curId<=399||t.curId>=3001&&t.curId<=3999)?s("image",{staticClass:"has-mgtb-25",staticStyle:{"margin-left":"20rpx",height:"250rpx"},attrs:{animation:t.animationData,src:"../../static/this.gif"}}):t._e()],2)],1)])},a=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return a})},"1b42":function(t,e,s){},8102:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(s("f3d3"));function a(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{myCurId:0,indicatorstyle:"height: ".concat(Math.round(t.getSystemInfoSync().screenWidth/7.5),"px;"),pSrc:s("018c"),source:"",myExes:[],animationData:{},timer:"",value:["白天",0,0],sections:"",hours:0,minutes:0,needPV:!1,testName:"",testDiff:0,ansArray:[],subArray:[],curId:0,matrix:[],hasExeDes:!1,lastState:0,curState:0,correctIdx:0,exeDes:"",myQuestion:"",totScore:0,curPoints:0,totNum:0,curNum:0,mySelections:[]}},methods:{bindChange:function(t){var e=t.detail.value;this.sections=0==e[0]?"上午":"下午",this.hours=e[1],this.minutes=e[2]},videoErrorCallback:function(e){t.showModal({content:e.target.errMsg,showCancel:!1})},type2SelectBlock:function(t){1!=this.hasExeDes&&0==this.curState&&(i.default.set(this.subArray,t,!this.subArray[t]),i.default.set(this.matrix,t,"my-testing-type2-bgBlue"==this.matrix[t]?"my-testing-type2-bgWhite":"my-testing-type2-bgBlue"))},choseNext:function(){clearInterval(this.timer);var e=t.createAnimation({duration:500,timingFunction:"ease"});this.animation=e,this.animation.opacity(0+1e-6*this.curNum).step(),this.curNum!=this.totNum&&this.animation.opacity(1-1e-6*this.curNum).step(),this.animationData=this.animation.export(),this.timer=setInterval(function(){clearInterval(this.timer),this.curNum!=this.totNum?(this.curState=0,this.nextExe()):this.showScore()}.bind(this),500)},showScore:function(){t.redirectTo({url:"../show-score/show-score?myScore="+this.totScore})},choseIndex:function(t){if(console.log(t),this.curNum++,-2==t){for(var e=!0,s=0;s<this.subArray.length;s++)this.subArray[s]!=this.ansArray[s]&&(e=!1,1==this.ansArray[s]?i.default.set(this.matrix,s,"my-testing-type2-bgnBlue"):i.default.set(this.matrix,s,"my-testing-type2-bgRed"));1==e?(this.playMusic(),this.curState=1,this.totScore+=this.curPoints):this.curState=-1,console.log(this.curState)}else t==this.correctIdx?(this.curState=1,this.totScore+=this.curPoints,this.playMusic()):this.curState=-1*t-1;this.timer=setInterval(this.choseNext,2e3)},playMusic:function(){var e=t.createInnerAudioContext();e.autoplay=!0,e.src="../../static/right.mp3"},nextExe:function(){var t=this.myCurId++,e=this.myExes[t];if(this.hasExeDes=e.hasExeDes,this.curState=0,this.hasExeDes&&(this.exeDes=e.exeDes),this.testName=this.allTests[e.type].name,this.testDiff=e.diff,this.curId=e.exeId,0==e.type){this.source=e.aSrc;for(var s=new Array(e.selections.length),i=new Array(e.selections.length),a=0;a<e.selections.length;a++)s[a]=Math.floor(1024*Math.random()),i[a]=0;this.mySelections=new Array(e.selections.length);for(a=0;a<e.selections.length;a++){for(var r=0;r<e.selections.length;r++)a!=r&&(s[r]<s[a]?i[a]++:s[r]==s[a]&&r<a&&i[a]++);this.mySelections[i[a]]=e.selections[a]}this.correctIdx=i[e.answer],this.source=e.aSrc}else if(1==e.type){this.source=e.aSrc;var n=new Array(4);n[0]=e.answer;for(a=1;a<4;a++){var o=Math.floor(24*Math.random()),c=!0;for(r=0;r<a;r++)if(o==n[r]){c=!1;break}c?n[a]=o:a--}for(s=new Array(4),i=new Array(4),a=0;a<4;a++)s[a]=Math.floor(1024*Math.random()),i[a]=0;for(a=0;a<4;a++){for(r=0;r<4;r++)a!=r&&(s[r]<s[a]?i[a]++:s[r]==s[a]&&r<a&&i[a]++);this.mySelections[i[a]]=n[a]}this.correctIdx=i[0]}else if(3==e.type){this.myQuestion=e.question,console.log(e.selections.length);for(s=new Array(e.selections.length),i=new Array(e.selections.length),a=0;a<e.selections.length;a++)s[a]=Math.floor(1024*Math.random()),i[a]=0;this.mySelections=new Array(e.selections.length);for(a=0;a<e.selections.length;a++){for(r=0;r<e.selections.length;r++)a!=r&&(s[r]<s[a]?i[a]++:s[r]==s[a]&&r<a&&i[a]++);this.mySelections[i[a]]=e.selections[a]}this.correctIdx=i[e.answer],this.source=e.aSrc}else if(2==e.type){var u=(e.diff+1)*(e.diff+1),l=0;1==e.diff?l=2:2==e.diff?l=4:3==e.diff&&(l=7);for(s=new Array(u),a=0;a<u;a++)s[a]=!1;for(a=0;a<l;a++)s[Math.floor(Math.random()*(u-1))]=!0;this.ansArray=s,this.matrix=new Array(u);var h="";for(a=0;a<u;a++)1==s[a]?(this.matrix[a]="my-testing-type2-bgBlue",h+=a):this.matrix[a]="my-testing-type2-bgWhite";console.log("ans="+h);var d=Math.floor(3*Math.random());this.subArray=new Array(u);for(a=0;a<u;a++)this.subArray[a]=!1;console.log(this.matrix.length);for(a=0;a<this.matrix.length;a++)console.log(this.matrix[a]);console.log(d),this.timer=setInterval(this.type2FadeIO,4e3)}},type3FadeIO:function(){console.log("Video ended"),console.log(this.myQuestion);var e=t.createAnimation({duration:300,timingFunction:"ease"});this.animation=e,this.animation.opacity(0+1e-8*this.curNum).step(),this.animation.opacity(1-1e-8*this.curNum).step(),this.animationData=this.animation.export(),this.timer=setInterval(function(){clearInterval(this.timer),this.hasExeDes=!1}.bind(this),300)},type2FadeIO:function(){clearInterval(this.timer);var e=t.createAnimation({duration:250,timingFunction:"ease"});this.animation=e,this.animation.opacity(0+1e-7*this.curNum).step(),this.animation.opacity(1-1e-7*this.curNum).step(),this.animationData=this.animation.export(),this.timer=setInterval(function(){clearInterval(this.timer);for(var t=0;t<this.matrix.length;t++)i.default.set(this.matrix,t,"my-testing-type2-bgWhite");this.hasExeDes=!1}.bind(this),250)}},onNavigationBarButtonTap:function(e){0==e.index&&(console.log("!"),t.showModal({title:"确认退出？",content:"当前进度将不被保存",confirmColor:"#FF3333",success:function(e){e.confirm?t.navigateBack({delta:1}):e.cancel&&console.log("Cancel")}}))},onLoad:function(){console.log(this.allExe.length);for(var t=0;t<this.chosenId.length;t++)console.log(t+""+this.chosenId[t]);for(t=0;t<this.allExe.length;t++)1==this.chosenId[this.allExe[t].type]&&(this.myExes=this.myExes.concat(this.allExe[t]),console.log(this.myExes.length));for(t=0;t<this.myExes.length;t++)this.myExes[t].used=!1;var e=new Array(this.myExes.length),s=new Array(this.myExes.length);for(t=0;t<this.myExes.length;t++)e[t]=Math.floor(1024*Math.random()),s[t]=0;var i=new Array(this.myExes.length);for(t=0;t<this.myExes.length;t++){for(var a=0;a<this.myExes.length;a++)t!=a&&(e[a]<e[t]?s[t]++:e[a]==e[t]&&a<t&&s[t]++);i[s[t]]=this.myExes[t]}this.myExes=i,this.totScore=0,this.totNum=this.myExes.length,this.curPoints=100/this.myExes.length,this.myAllTestList=this.allTests,this.nextExe()},onShow:function(){this.testClosed=!1},onUnload:function(){clearInterval(this.timer),this.testClosed=!0},onReady:function(){this.videoContext=t.createVideoContext("myVideo"),console.log(this.curId)}};e.default=r}).call(this,s("649d")["default"])},b868:function(t,e,s){"use strict";s.r(e);var i=s("107e"),a=s("bc10");for(var r in a)"default"!==r&&function(t){s.d(e,t,function(){return a[t]})}(r);s("e303");var n=s("2877"),o=Object(n["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},bc10:function(t,e,s){"use strict";s.r(e);var i=s("8102"),a=s.n(i);for(var r in i)"default"!==r&&function(t){s.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},e303:function(t,e,s){"use strict";var i=s("1b42"),a=s.n(i);a.a}},[["0d65","common/runtime","common/vendor"]]]);
});
require('pages/start-test/start-test.js');
__wxRoute = 'pages/list-detail/list-detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/list-detail/list-detail.js';

define('pages/list-detail/list-detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/list-detail/list-detail"],{"0a5e":function(t,n,r){"use strict";r("2b83");var e=a(r("b0ce")),p=a(r("309d"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(p.default))},"1fc3":function(t,n,r){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{banner:{},htmlString:['<p>试想一下，当你的记忆慢慢不见了，你的生活会变成什么样子？当拿起电话，却忘记了要打给谁；明明正在和面前的人说话，却想不起他的名字；不断重复地买着几天前已经买好的东西……</p><br>\n\t\t\t\t\t<p>阿尔兹海默症就是这样一种慢慢蚕食记忆的疾病。但是它对人的影响并不局限于记忆，它是一种获得性和进行性认知功能障碍，伴有明显的社会功能受损和不同程度精神行为改变。通俗来讲，就是记忆力变差、语言功能下降、对空间关系的辨别能力下降，可能会出现说话磕磕绊绊、迷路、把东西放错位置等等情况。除此之外，还常常伴随有性格和行为改变、情绪更加焦虑抑郁等等。</p><br>\n\t\t\t\t\t<img src="https://s2.ax1x.com/2019/03/17/Ae2BIs.png" alt="Ae2BIs.png" border="0" width="100%"><br>\n\t\t\t\t\t<p>老年人的阿尔茨海默症发病率很高，65岁到74岁之间大约有1%-2%的人患上阿尔茨海默症，85岁以上的老人，患病的几率高达25%。但是相对更年轻的人也有可能患病，这种情况称作早发性阿尔茨海默症，有数据表明，早发性阿尔茨海默症更多是由遗传导致.</p><br>\n\t\t\t\t\t<p>按照病情的发展，可大致分为 3 个阶段：</p><br>\n\t\t\t\t\t<p>1. 健忘期。表现为记忆力明显减退，伴有思维、判断、计算能力，空间辨别、视觉能力的降低，但尚可保持过去熟悉的工作或技能。这个阶段往往被人们忽视，其实老人“丢三落四”“说完就忘”“反复提问某个问题”“老犯糊涂，出低级错误”可能就是阿尔兹海默症的早期信号，应该加以重视和诊断。</p><br>\n\t\t\t\t\t<p>2. 思维混乱期。除第一阶段的症状加重外，其突出表现是视觉能力、空间辨认障碍的明显加重，容易迷路、穿衣困难、不认识亲友。</p><br>\n\t\t\t\t\t<p>3. 极度痴呆期。全面衰退状态，生活不能自理，如吃饭、穿衣、洗澡均需人照顾，大小便失禁。在这个阶段，仿佛是生命的轮回一般，老人变成了需要我们照顾的孩子。</p><br>\n\t\t\t\t\t<img src="https://s2.ax1x.com/2019/03/17/Ae2wZQ.png" alt="Ae2wZQ.png" border="0" width="100%"><br>\n\t\t\t\t\t<p>对于患上阿尔茨海默症的患者及其家人而言，积极、乐观和爱是对抗此病的良药。在这里我们真诚地希望，能够早日找到医治阿尔兹海默症的方法，让老人不再忘记爱的感觉。</p><br>','<p>阿尔兹海默症并非遥不可及，电焊工人，理发师，银行收银员，机器维修师吸入的金属元素会增加发病可能；吸烟者，酗酒者，文盲者发病率大幅上升；食用高热量高盐分高糖食品、久坐不动、缺乏锻炼、肥胖、自闭、孤独、睡眠质量低，长期抑郁都会提高阿尔兹海默病的发病率。</p><br>\n\t\t\t\t\t<img src="https://s2.ax1x.com/2019/03/17/Ae26zV.png" alt="Ae26zV.png" border="0" width="100%"><br>\n\t\t\t\t\t<p>阿尔兹海默症离我们不远，离我们心爱的家人不远，最好的治疗就是预防，为了家人的记忆，为了我们自身的明天，我们要警惕记忆小偷登门造访：</p><br>\n\t\t\t\t\t<p>运动：运动训练能提高空间学习记忆能力, 对老年痴呆的学习记忆障碍有改善作用, 研究显示运动可能扩张微血管改善微循环, 增加组织器官的血流量及提高机体耐缺氧能力。</p><br>\n\t\t\t\t\t<p>训练：多做智力训练；鼓励老人读书看报，查字典；学习新事物，保持好奇心培养自己的兴趣；支持老人多聊天，听新闻联播。</p><br>\n\t\t\t\t\t<p>心态：保持老人心情愉快，享受天伦之乐；减少重大不良刺激对老人的影响。</p><br>\n\t\t\t\t\t<p>膳食：吃易消化，营养丰富的食物；禁止为老人使用铝制炊具，铝盐易在大脑沉积；细嚼慢咽，增加大脑血流量。</p><br>\n\t\t\t\t\t<p>检查：如果有家族遗传史，工作能力减退或者明显的记忆力下降到专科医院就诊。</p><br>','<p>阿尔兹海默症在对患者的认知功能造成影响的同时，也会给患者及其家人带来心理上的负担，患者早期可能会出现抑郁和焦虑的情况，照料者也会面临照顾病人的诸多挑战，比如自己的“预期性悲伤”，患抑郁的风险增高。</p><br>\n\t\t\t\t\t<p>有研究显示，老年痴呆症患者照顾者的认知情况对老年痴呆症预防、诊断和治疗有重要影响。如果照顾者缺乏相关知识和照料常识，会使痴呆患者得不到系统、正规的康复训练，从而加速疾病的进展。换而言之，照料者的素质和能力的高低对患者的康复起到决定作用。</p><br>\n\t\t\t\t\t<img src="https://s2.ax1x.com/2019/03/17/Ae2rin.png" alt="Ae2rin.png" border="0" width="100%"><br>\n\t\t\t\t\t<p>我们如何更好地为老人提供支持呢？</p><br>\n\t\t\t\t\t<p>护理大致可以分为以下几个方面。</p><br>\n\t\t\t\t\t<p>家庭护理：让老人在熟悉的环境下生活康复，可以使老人更加舒适安心。</p><br>\n\t\t\t\t\t<p>住院护理：住院时，老人可能会忘记很多事情，记得提醒并鼓励老人自己完成，而不是包办。</p><br>\n\t\t\t\t\t<p>康复护理：在家人的陪伴下和社会接触，会见老友；有意识的让老人回忆，判断生活中的事物。</p><br>\n\t\t\t\t\t<p>睡眠护理：安排老人喜欢的活动，尽量让老人保持一定兴奋度，以减少白天睡眠，保证夜间睡眠质量。</p><br>\n\t\t\t\t\t<p>环境护理：床边安上护栏，浴室做防滑，墙壁安装扶手，隔离煤气电源。</p><br>\n\t\t\t\t\t<p>心理护理：如果老人情绪激动，用温和的语言劝导，分散老人的注意力，切莫言辞激烈，二次刺激。心理层面上，目前普遍提倡“以人为中心”的痴呆症照顾理念和服务模式（PCC），它的概念包含以下几个方面：</p><br>\n\t\t\t\t\t<p>①始终将患者视为能够体会生活和社会交往的个体；</p><br>\n\t\t\t\t\t<p>②为患者提供选择并尊重患者做出的选择；</p><br>\n\t\t\t\t\t<p>③将患者过往的生活和经历融入照料中；</p><br>\n\t\t\t\t\t<p>④训练的重点是患者目前能够完成的任务，而不是已经丧失的能力。</p><br>\n\t\t\t\t\t<p>具体而言，我们可以通过图片、音乐等，与老人分享过去的经历，回忆早期的生活。承认和肯定老人的看法也是一种有效方法，可以促进提升自信和健康。此外还可以把自己一些生活中的小问题讲给老人听，向她们寻求帮助，不仅对我们自己有所启发，更能满足老人的心理需要。</p><br>\n\t\t\t\t\t<img src="https://s2.ax1x.com/2019/03/17/Ae2yR0.png" alt="Ae2yR0.png" border="0" width="100%"><br>\n\t\t\t\t\t<p>总的来讲，PCC强调“以人为中心”而不是“以病人为中心”，强调每一个人都是平等的个体。老人在白发苍苍的年纪变回了孩子，羊跪乳，鸦反哺，像老人在我们孩童时期照顾我们一样，现在轮到我们关爱、照顾这些可爱的老小孩了。</p><br>','<p>阿尔茨海默症的常见性和特殊性，使得它常常是电影的主题。走进这些影片，感悟冷暖的人生，不仅能够加深我们对阿尔兹海默症的了解，也能让我们认清自己的内心，以更加强健的心态面对病人。</p><br>\n\t\t\t\t\t<p>《依然爱丽丝》：爱丽丝是一名阿尔茨海默症的患者，“那感觉就像有东西从我脑中消失了，整个生活都在离我而去”，得知自己患上了阿尔茨海默症，她绝望且无助。然而，就像爱丽丝为其他阿尔茨海默症患者所做的演讲中说，“我并不痛苦，我在努力挣扎”。影片最后，爱丽丝的小女儿为爱丽丝耐心地重复着故事，尽管爱丽丝无法记得故事的内容，但是这则故事，关于爱。</p><br>\n\t\t\t\t\t<img src="https://s2.ax1x.com/2019/03/17/Ae2gMT.png" alt="Ae2gMT.png" border="0" width="100%"><br>\n\t\t\t\t\t<p>《世界上最疼我的那个人去了》：事业成功的女作家诃回到北京看望八十多岁高龄的妈，妈和心爱的猫及雇用的小保姆住在一处简陋的家里，诃从妈歪斜的左肩、双脚蹭着地走路、说话颠三倒四、口水不断地往外渗等种种迹象中发现妈突然间衰老了。诃对此感到很震动和意外，妈在年老力衰时最需要照顾，自己却远远地把妈丢下了……</p><br>\n\t\t\t\t\t<img src="https://s2.ax1x.com/2019/03/17/Ae20aj.png" alt="Ae20aj.png" border="0" width="100%"><br>\n\t\t\t\t\t<p>《明日的记忆》：在广告公司工作的佐伯雅行，今年50岁，生活里充满了平稳的幸福。原本几个月后，他将主持独生女的结婚典礼，完成人生中最大的心愿。可是某天，他因为持续目眩与失眠而前往医院，诊断的结果竟是得到"少年阿兹海默症"。"为什么是我？……为什么偏偏是我？"他对天咆哮，却得不到任何答案。 为了挽留住片刻都在流失的记忆，他拚死命地在所有事物上留下小纸条提醒自己，开始了无奈的抢救记忆大作战......</p><br>\n\t\t\t\t\t<p>《脑海中的橡皮擦》：秀真在便利店内与在建筑公司当工人的哲洙相遇。未来的日子里，他们一次又一次相遇，最终彼此相爱了。哲洙知道自己与秀真的身份悬殊，所以不敢轻易表白情谊，秀真向哲洙求婚。 就算秀真父母阻拦，他们爱情的力量还是说服了父母。 婚后生活甜蜜，秀真还帮忙修复了哲洙与母亲的关系。可是好景不长，秀真的记忆力开始一天比一天衰退，得了阿滋海默氏症，大脑在逐渐死亡.....</p><br>\n\t\t\t\t\t<img src="https://s2.ax1x.com/2019/03/17/Ae2sGq.png" alt="Ae2sGq.png" border="0" width="100%"><br>']}},onLoad:function(n){try{this.banner=JSON.parse(decodeURIComponent(n.value))}catch(r){this.banner=JSON.parse(n.value)}t.setNavigationBarTitle({title:this.banner.title})}};n.default=r}).call(this,r("649d")["default"])},"309d":function(t,n,r){"use strict";r.r(n);var e=r("4d6f"),p=r("4d20");for(var a in p)"default"!==a&&function(t){r.d(n,t,function(){return p[t]})}(a);r("6d7b");var i=r("2877"),s=Object(i["a"])(p["default"],e["a"],e["b"],!1,null,null,null);n["default"]=s.exports},"4d20":function(t,n,r){"use strict";r.r(n);var e=r("1fc3"),p=r.n(e);for(var a in e)"default"!==a&&function(t){r.d(n,t,function(){return e[t]})}(a);n["default"]=p.a},"4d6f":function(t,n,r){"use strict";var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("view",[r("view",{staticClass:"banner"},[r("image",{staticClass:"banner-img",attrs:{src:t.banner.cover}}),r("view",{staticClass:"banner-title"},[t._v(t._s(t.banner.title))])]),r("view",{staticClass:"article-meta"},[r("text",{staticClass:"article-author"},[t._v(t._s(t.banner.author))]),r("text",{staticClass:"article-text"},[t._v("发表于")]),r("text",{staticClass:"article-time"},[t._v(t._s(t.banner.published_at))])]),r("view",{staticClass:"uni-padding-wrap article-content"},[r("rich-text",{attrs:{nodes:t.htmlString[t.banner.id-1],mpcomid:"c8b35312-0"}})],1)])},p=[];r.d(n,"a",function(){return e}),r.d(n,"b",function(){return p})},"6d7b":function(t,n,r){"use strict";var e=r("881c"),p=r.n(e);p.a},"881c":function(t,n,r){}},[["0a5e","common/runtime","common/vendor"]]]);
});
require('pages/list-detail/list-detail.js');
__wxRoute = 'pages/article-detail/article-detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/article-detail/article-detail.js';

define('pages/article-detail/article-detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article-detail/article-detail"],{"01d9":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("cbc1"));function n(t){return t&&t.__esModule?t:{default:t}}var s={components:{uniIcon:a.default},data:function(){return{detail:{},listData:[],agreed:0,liked:0,imgsrc:[]}},methods:{com_ans:function(e){t.navigateTo({url:"../post-article/post-article?type="+("art"===this.detail.type?"comment":"answer")+"&id="+e})},get_list:function(){var t=this;this.imgsrc=[],this.$ajax("get"+("art"===this.detail.type?"Comment":"Answer"),{id:this.detail.id},function(e){var i=function(i){t.listData.push(e.data[i]),t.$ajax("getPic",{username:e.data[i].author},function(e){t.$set(t.imgsrc,i,"../../static/"+e.data+".jpg")})};for(var a in e.data)i(a)})},get_agreed:function(){var t=this;this.$ajax("user/hasAgreedIt",{id:this.detail.id},function(e){t.agreed=1===e.data})},get_liked:function(){var t=this;this.$ajax("user/hasLikedIt",{id:this.detail.id},function(e){t.liked=1===e.data})},set_agree:function(){var t=this;this.$ajax("user/setAgree",{id:this.detail.id,new_val:1-this.agreed},function(e){"<"!==e.data[0]?(t.agreed=1-t.agreed,t.detail.agrees+=1===t.agreed?1:-1):t.$msg("请先登录")})},set_like:function(){var t=this;this.$ajax("user/setLike",{id:this.detail.id,new_val:1-this.liked},function(e){"<"!==e.data[0]?t.liked=1-t.liked:t.$msg("请先登录")})},check_comment:function(e){t.navigateTo({url:"./article-detail?id="+e})}},onLoad:function(t){var e=this;this.$ajax("articleDetail",{id:t.id},function(t){e.detail=t.data,e.get_agreed(),e.get_liked(),e.get_list()})},onPullDownRefresh:function(){this.listData=[],this.get_list(),setTimeout(function(){t.stopPullDownRefresh()},1e3)}};e.default=s}).call(this,i("649d")["default"])},1853:function(t,e,i){},"3b56":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"uni-card"},[i("view",{staticClass:"uni-card-header"},[i("text",{staticStyle:{width:"70%"}},[t._v(t._s(("ans"!==t.detail.type?"":"Re")+t.detail.title))]),i("view",["ans"!==t.detail.type?i("button",{attrs:{type:"primary",plain:"true",size:"mini",eventid:"99107496-0"},on:{tap:function(e){t.com_ans(t.detail.id)}}},[t._v("添加回复")]):t._e()],1)]),i("view",{staticClass:"uni-card-footer"},[t._v(t._s(t.detail.author)+" 发表于 "+t._s(t.detail.date))]),i("view",{staticClass:"uni-card-content"},[i("view",{staticClass:"uni-card-content-inner"},[t._v(t._s(t.detail.content))])]),i("view",{staticClass:"uni-card-footer"},[i("view",{staticClass:"uni-flex uni-row",attrs:{eventid:"99107496-1"},on:{tap:t.set_agree}},[t.agreed?i("i",{staticClass:"iconfont"},[t._v("")]):t._e(),t.agreed?t._e():i("i",{staticClass:"iconfont",staticStyle:{color:"#999"}},[t._v("")]),i("view",[t._v(t._s(t.agreed?"已":"")+"赞同 "+t._s(t.detail.agrees))])],1),i("view",{staticClass:"uni-flex uni-row",attrs:{eventid:"99107496-2"},on:{tap:t.set_like}},[t.liked?i("i",{staticClass:"iconfont",staticStyle:{color:"#f0ad4e","font-size":"20px"}},[t._v("")]):t._e(),t.liked?t._e():i("i",{staticClass:"iconfont",staticStyle:{color:"#f0ad4e","font-size":"20px"}},[t._v("")]),i("view",[t._v(t._s(t.liked?"已":"")+"收藏")])],1)])]),t._l(t.listData,function(e,a){return i("view",{key:a,staticClass:"uni-card"},[i("view",{staticClass:"uni-card-header",attrs:{eventid:"99107496-3-"+a},on:{tap:function(i){t.check_comment(e.id)}}},[i("view",{staticClass:"uni-comment-list"},[i("view",{staticClass:"uni-comment-face"},[i("image",{attrs:{src:t.imgsrc[a],mode:"widthFix"}})]),i("view",{staticClass:"uni-comment-body"},[i("view",{staticClass:"uni-comment-top"},[i("text",[t._v(t._s(e.author))])]),i("view",{staticClass:"uni-comment-content"},[t._v(t._s(e.content))]),i("view",{staticClass:"uni-comment-date"},[i("view",[t._v(t._s(e.date))]),i("view",{staticClass:"uni-flex uni-row"},[i("uni-icon",{attrs:{type:"arrowup",size:"16",mpcomid:"99107496-0-"+a}}),i("view",[t._v("赞同 "+t._s(e.agrees))])],1)])])])])])})],2)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"4fa1":function(t,e,i){"use strict";i.r(e);var a=i("01d9"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"674e":function(t,e,i){"use strict";var a=i("1853"),n=i.n(a);n.a},"7b0a":function(t,e,i){"use strict";i("2b83");var a=s(i("b0ce")),n=s(i("b8bb"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},b8bb:function(t,e,i){"use strict";i.r(e);var a=i("3b56"),n=i("4fa1");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("674e");var c=i("2877"),r=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports}},[["7b0a","common/runtime","common/vendor"]]]);
});
require('pages/article-detail/article-detail.js');
__wxRoute = 'pages/post-article/post-article';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/post-article/post-article.js';

define('pages/post-article/post-article.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/post-article/post-article"],{"1f3b":function(t,e,i){"use strict";var n=i("46e3"),a=i.n(n);a.a},"28d8":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"uni-padding-wrap"},[t.has_title?i("view",{staticClass:"title_part"},[i("view",{staticClass:"feedback-title"},[i("text",[t._v(t._s(("article"===t.type?"文章":"问题")+"标题"))])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.art.title,expression:"art.title"}],staticClass:"uni-input",attrs:{focus:"",placeholder:"请输入"+("article"===t.type?"文章":"问题")+"标题",eventid:"1fe66fd6-0"},domProps:{value:t.art.title},on:{input:function(e){e.target.composing||(t.art.title=e.target.value)}}})]):t._e(),i("view",{staticClass:"feedback-title"},[i("text",[t._v(t._s(t.type_cn))])]),i("view",{staticClass:"feedback-body"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.art.content,expression:"art.content"}],staticClass:"feedback-textare",attrs:{placeholder:"请输入"+t.type_cn,eventid:"1fe66fd6-1"},domProps:{value:t.art.content},on:{input:function(e){e.target.composing||(t.art.content=e.target.value)}}})]),i("view",{staticClass:"uni-common-mt"},[i("button",{attrs:{type:"primary",plain:"true",eventid:"1fe66fd6-2"},on:{tap:t.submit}},[t._v("发     布")])],1)])])},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"2cf4":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{type:"",id:0,type_cn:"",has_title:!0,art:{title:"",content:""},items:[{value:"AnArticle",name:"文章",check:"true"},{value:"AQuestion",name:"提问"}],current:0}},methods:{submit:function(){var t=this,e=this.type,i={id:this.id,content:this.art.content};this.has_title&&(e="article"===this.type?"postAnArticle":"postAQuestion",i={title:this.art.title,content:this.art.content}),this.$ajax("user/"+e,i,function(e){0===e.data?(t.$msg("发布成功","success"),t.$back()):1===e.data?t.$msg("发布失败"):t.$msg("请先登录")})}},onLoad:function(e){this.type=e.type,this.id=e.id,"article"===this.type?this.type_cn="文章内容":"question"===this.type?this.type_cn="问题描述":(this.has_title=!1,"comment"===this.type?this.type_cn="评论内容":this.type_cn="回答内容"),t.setNavigationBarTitle({title:"发布"+this.type_cn[0]+this.type_cn[1]})}};e.default=i}).call(this,i("649d")["default"])},"46e3":function(t,e,i){},b007:function(t,e,i){"use strict";i.r(e);var n=i("28d8"),a=i("b2b2");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("1f3b");var c=i("2877"),r=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},b2b2:function(t,e,i){"use strict";i.r(e);var n=i("2cf4"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},e3f6:function(t,e,i){"use strict";i("2b83");var n=s(i("b0ce")),a=s(i("b007"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))}},[["e3f6","common/runtime","common/vendor"]]]);
});
require('pages/post-article/post-article.js');
__wxRoute = 'pages/new-msg/new-msg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/new-msg/new-msg.js';

define('pages/new-msg/new-msg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/new-msg/new-msg"],{"0962":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}}};t.default=u},3109:function(e,t,n){"use strict";n.r(t);var u=n("ff8c"),r=n("e683");for(var f in r)"default"!==f&&function(e){n.d(t,e,function(){return r[e]})}(f);var a=n("2877"),c=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},e683:function(e,t,n){"use strict";n.r(t);var u=n("0962"),r=n.n(u);for(var f in u)"default"!==f&&function(e){n.d(t,e,function(){return u[e]})}(f);t["default"]=r.a},f3f1:function(e,t,n){"use strict";n("2b83");var u=f(n("b0ce")),r=f(n("3109"));function f(e){return e&&e.__esModule?e:{default:e}}Page((0,u.default)(r.default))},ff8c:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[n("view",{staticClass:"feedback-title"},[e._v("还没有未读的消息")])])}];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r})}},[["f3f1","common/runtime","common/vendor"]]]);
});
require('pages/new-msg/new-msg.js');
__wxRoute = 'pages/feedback/feedback';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/feedback/feedback.js';

define('pages/feedback/feedback.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/feedback/feedback"],{"41c4":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{msgContents:["界面显示错乱","启动缓慢","UI无法直视","偶发性崩溃"],stars:[1,2,3,4,5],imageList:[],sendDate:{score:0,content:"",contact:""}}},onLoad:function(){var e={appid:plus.runtime.appid,imei:plus.device.imei,p:"Android"===plus.os.name?"a":"i",md:plus.device.model,app_version:plus.runtime.version,plus_version:plus.runtime.innerVersion,os:plus.os.version,net:""+plus.networkinfo.getCurrentType()};this.sendDate=Object.assign(e,this.sendDate)},methods:{close:function(e){this.imageList.splice(e,1)},chooseMsg:function(){var t=this;e.showActionSheet({itemList:this.msgContents,success:function(e){t.sendDate.content=t.msgContents[e.tapIndex]}})},chooseImg:function(){var t=this;e.chooseImage({sourceType:["camera","album"],sizeType:"compressed",count:8-this.imageList.length,success:function(e){t.imageList=t.imageList.concat(e.tempFilePaths)}})},chooseStar:function(e){this.sendDate.score=e},previewImage:function(){e.previewImage({urls:this.imageList})},send:function(){var t=this;console.log(JSON.stringify(this.sendDate));var a=this.imageList.map(function(e,t){return{name:"image"+t,uri:e}});e.uploadFile({url:"https://service.dcloud.net.cn/feedback",files:a,formData:this.sendDate,success:function(a){200===a.statusCode&&(e.showToast({title:"反馈成功!"}),t.imageList=[],t.sendDate={score:0,content:"",contact:""})},fail:function(e){console.log(e)}})}}};t.default=a}).call(this,a("649d")["default"])},8833:function(e,t,a){"use strict";a.r(t);var s=a("ea5d"),i=a("9d08");for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);a("da0e");var c=a("2877"),o=Object(c["a"])(i["default"],s["a"],s["b"],!1,null,null,null);t["default"]=o.exports},"8aec":function(e,t,a){"use strict";a("2b83");var s=n(a("b0ce")),i=n(a("8833"));function n(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(i.default))},"9d08":function(e,t,a){"use strict";a.r(t);var s=a("41c4"),i=a.n(s);for(var n in s)"default"!==n&&function(e){a.d(t,e,function(){return s[e]})}(n);t["default"]=i.a},da0e:function(e,t,a){"use strict";var s=a("f9d7"),i=a.n(s);i.a},ea5d:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"page"},[a("view",{staticClass:"feedback-title"},[a("text",[e._v("问题和意见")]),a("text",{staticClass:"feedback-quick",attrs:{eventid:"0fac16d6-0"},on:{tap:e.chooseMsg}},[e._v("快速键入")])]),a("view",{staticClass:"feedback-body"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.sendDate.content,expression:"sendDate.content"}],staticClass:"feedback-textare",attrs:{placeholder:"请详细描述你的问题和意见...",eventid:"0fac16d6-1"},domProps:{value:e.sendDate.content},on:{input:function(t){t.target.composing||(e.sendDate.content=t.target.value)}}})]),e._m(0),a("view",{staticClass:"feedback-body feedback-uploader"},[a("view",{staticClass:"uni-uploader"},[a("view",{staticClass:"uni-uploader-head"},[a("view",{staticClass:"uni-uploader-title"},[e._v("点击预览图片")]),a("view",{staticClass:"uni-uploader-info"},[e._v(e._s(e.imageList.length)+"/8")])]),a("view",{staticClass:"uni-uploader-body"},[a("view",{staticClass:"uni-uploader__files"},[e._l(e.imageList,function(t,s){return a("block",{key:s},[a("view",{staticClass:"uni-uploader__file",staticStyle:{position:"relative"}},[a("image",{staticClass:"uni-uploader__img",attrs:{src:t,eventid:"0fac16d6-2-"+s},on:{tap:e.previewImage}}),a("view",{staticClass:"close-view",attrs:{eventid:"0fac16d6-3-"+s},on:{click:function(t){e.close(s)}}},[e._v("x")])])])}),a("view",{directives:[{name:"show",rawName:"v-show",value:e.imageList.length<8,expression:"imageList.length < 8"}],staticClass:"uni-uploader__input-box"},[a("view",{staticClass:"uni-uploader__input",attrs:{eventid:"0fac16d6-4"},on:{tap:e.chooseImg}})])],2)])])]),e._m(1),a("view",{staticClass:"feedback-body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.sendDate.contact,expression:"sendDate.contact"}],staticClass:"feedback-input",attrs:{placeholder:"(选填,方便我们联系您 )",eventid:"0fac16d6-5"},domProps:{value:e.sendDate.contact},on:{input:function(t){t.target.composing||(e.sendDate.contact=t.target.value)}}})]),a("view",{staticClass:"feedback-title feedback-star-view"},[a("text",[e._v("应用评分")]),a("view",{staticClass:"feedback-star-view"},e._l(e.stars,function(t,s){return a("text",{key:s,staticClass:"feedback-star",class:s<e.sendDate.score?"active":"",attrs:{eventid:"0fac16d6-6-"+s},on:{tap:function(a){e.chooseStar(t)}}})}))]),a("button",{staticClass:"feedback-submit",attrs:{type:"default",eventid:"0fac16d6-7"},on:{tap:e.send}},[e._v("提交")])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"feedback-title"},[a("text",[e._v("图片(选填,提供问题截图,总大小10M以下)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"feedback-title"},[a("text",[e._v("QQ/邮箱")])])}];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i})},f9d7:function(e,t,a){}},[["8aec","common/runtime","common/vendor"]]]);
});
require('pages/feedback/feedback.js');

