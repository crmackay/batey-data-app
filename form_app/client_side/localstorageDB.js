/*
	Kailash Nadh (http://nadh.in)

	localStorageDB v 2.3.3
	A simple database layer for localStorage

	v 1.9 Nov 2012
	v 2.0 June 2013
	v 2.1 Nov 2013
	v 2.2 Jan 2014 Contribution: Andy Hawkins (http://a904guy.com) 
	v 2.3 Feb 2014 Contribution: Christian Kellner (http://orange-coding.net)

	License	:	MIT License
*/

!function(e,t){function n(e,n){function f(){if(u.hasOwnProperty(i)){delete u[i]}o=null}function l(){var e=0;for(var t in o.tables){if(o.tables.hasOwnProperty(t)){e++}}return e}function c(e){return o.tables[e].fields}function h(e){return o.tables[e]?true:false}function p(e){if(!h(e)){O("The table '"+e+"' does not exist")}}function d(e,t){var n=false;var r=o.tables[e].fields;for(var i in r){if(r[i]==t){n=true;break}}return n}function v(e,t){o.tables[e]={fields:t,auto_increment:1};o.data[e]={}}function m(e){delete o.tables[e];delete o.data[e]}function g(e){o.tables[e].auto_increment=1;o.data[e]={}}function y(e,t,n){o.tables[e].fields=o.tables[e].fields.concat(t);if(typeof n!="undefined"){for(var r in o.data[e]){if(!o.data[e].hasOwnProperty(r)){continue}for(var i in t){if(typeof n=="object"){o.data[e][r][t[i]]=n[t[i]]}else{o.data[e][r][t[i]]=n}}}}}function b(e){var t=0;for(var n in o.data[e]){if(o.data[e].hasOwnProperty(n)){t++}}return t}function w(e,t){t.ID=o.tables[e].auto_increment;o.data[e][o.tables[e].auto_increment]=t;o.tables[e].auto_increment++;return t.ID}function E(e,t,n,r,i){var s=null,u=[],a=null;for(var f=0;f<t.length;f++){s=t[f];a=o.data[e][s];u.push(M(a))}if(i&&i instanceof Array){for(var f=0;f<i.length;f++){u.sort(S(i[f][0],i[f].length>1?i[f][1]:null))}}n=n&&typeof n==="number"?n:null;r=r&&typeof r==="number"?r:null;if(n&&r){u=u.slice(n,n+r)}else if(n){u=u.slice(n)}else if(r){u=u.slice(n,r)}return u}function S(e,t){return function(n,r){var i=typeof n[e]==="string"?n[e].toLowerCase():n[e],s=typeof r[e]==="string"?r[e].toLowerCase():r[e];if(t==="DESC"){return i==s?0:i<s?1:-1}else{return i==s?0:i>s?1:-1}}}function x(e,t){var n=[],r=false,i=null;for(var s in o.data[e]){if(!o.data[e].hasOwnProperty(s)){continue}i=o.data[e][s];r=true;for(var u in t){if(!t.hasOwnProperty(u)){continue}if(typeof t[u]=="string"){if(i[u].toString().toLowerCase()!=t[u].toString().toLowerCase()){r=false;break}}else{if(i[u]!=t[u]){r=false;break}}}if(r){n.push(s)}}return n}function T(e,t){var n=[],r=false,i=null;for(var s in o.data[e]){if(!o.data[e].hasOwnProperty(s)){continue}i=o.data[e][s];if(t(M(i))==true){n.push(s)}}return n}function N(e){var t=[];for(var n in o.data[e]){if(o.data[e].hasOwnProperty(n)){t.push(n)}}return t}function C(e,t){for(var n=0;n<t.length;n++){if(o.data[e].hasOwnProperty(t[n])){delete o.data[e][t[n]]}}return t.length}function k(e,t,n){var r="",i=0;for(var s=0;s<t.length;s++){r=t[s];var u=n(M(o.data[e][r]));if(u){delete u["ID"];var a=o.data[e][r];for(var f in u){if(u.hasOwnProperty(f)){a[f]=u[f]}}o.data[e][r]=D(e,a);i++}}return i}function L(){try{u.setItem(i,JSON.stringify(o));return true}catch(e){return false}}function A(){return JSON.stringify(o)}function O(e){throw new Error(e)}function M(e){var t={};for(var n in e){if(e.hasOwnProperty(n)){t[n]=e[n]}}return t}function _(e){return e.toString().match(/[^a-z_0-9]/ig)?false:true}function D(e,n){var r="",i={};for(var s=0;s<o.tables[e].fields.length;s++){r=o.tables[e].fields[s];if(n[r]!==t){i[r]=n[r]}}return i}function P(e,n){var r="",i={};for(var s=0;s<o.tables[e].fields.length;s++){r=o.tables[e].fields[s];i[r]=n[r]===null||n[r]===t?null:n[r]}return i}var r="db_",i=r+e,s=false,o=null;try{var u=n==sessionStorage?sessionStorage:localStorage}catch(a){var u=n}o=u[i];if(!(o&&(o=JSON.parse(o))&&o.tables&&o.data)){if(!_(e)){O("The name '"+e+"' contains invalid characters")}else{o={tables:{},data:{}};L();s=true}}return{commit:function(){return L()},isNew:function(){return s},drop:function(){f()},serialize:function(){return A()},tableExists:function(e){return h(e)},tableFields:function(e){return c(e)},tableCount:function(){return l()},columnExists:function(e,t){return d(e,t)},createTable:function(e,t){var n=false;if(!_(e)){O("The database name '"+e+"' contains invalid characters.")}else if(this.tableExists(e)){O("The table name '"+e+"' already exists.")}else{var r=true;for(var i=0;i<t.length;i++){if(!_(t[i])){r=false;break}}if(r){var s={};for(var i=0;i<t.length;i++){s[t[i]]=true}delete s["ID"];t=["ID"];for(var o in s){if(s.hasOwnProperty(o)){t.push(o)}}v(e,t);n=true}else{O("One or more field names in the table definition contains invalid characters")}}return n},createTableWithData:function(e,t){if(typeof t!=="object"||!t.length||t.length<1){O("Data supplied isn't in object form. Example: [{k:v,k:v},{k:v,k:v} ..]")}var n=Object.keys(t[0]);if(this.createTable(e,n)){this.commit();for(var r=0;r<t.length;r++){if(!w(e,t[r])){O("Failed to insert record: ["+JSON.stringify(t[r])+"]")}}this.commit()}return true},dropTable:function(e){p(e);m(e)},truncate:function(e){p(e);g(e)},alterTable:function(e,t,n){var r=false;if(!_(e)){O("The database name '"+e+"' contains invalid characters")}else{if(typeof t=="object"){var i=true;for(var s=0;s<t.length;s++){if(!_(t[s])){i=false;break}}if(i){var o={};for(var s=0;s<t.length;s++){o[t[s]]=true}delete o["ID"];t=[];for(var u in o){if(o.hasOwnProperty(u)){t.push(u)}}y(e,t,n);r=true}else{O("One or more field names in the table definition contains invalid characters")}}else if(typeof t=="string"){if(_(t)){var a=[];a.push(t);y(e,a,n);r=true}else{O("One or more field names in the table definition contains invalid characters")}}}return r},rowCount:function(e){p(e);return b(e)},insert:function(e,t){p(e);return w(e,P(e,t))},insertOrUpdate:function(e,t,n){p(e);var r=[];if(!t){r=N(e)}else if(typeof t=="object"){r=x(e,D(e,t))}else if(typeof t=="function"){r=T(e,t)}if(r.length==0){return w(e,P(e,n))}else{var i=[];for(var s=0;s<r.length;s++){k(e,r,function(e){i.push(e.ID);return n})}return i}},update:function(e,t,n){p(e);var r=[];if(!t){r=N(e)}else if(typeof t=="object"){r=x(e,D(e,t))}else if(typeof t=="function"){r=T(e,t)}return k(e,r,n)},query:function(e,t,n,r,i){p(e);var s=[];if(!t){s=N(e,n,r)}else if(typeof t=="object"){s=x(e,D(e,t),n,r)}else if(typeof t=="function"){s=T(e,t,n,r)}return E(e,s,r,n,i)},queryAll:function(e,t){return this.query(e,t.hasOwnProperty("query")?t.query:null,t.hasOwnProperty("limit")?t.limit:null,t.hasOwnProperty("start")?t.start:null,t.hasOwnProperty("sort")?t.sort:null)},deleteRows:function(e,t){p(e);var n=[];if(!t){n=N(e)}else if(typeof t=="object"){n=x(e,D(e,t))}else if(typeof t=="function"){n=T(e,t)}return C(e,n)}}}if(typeof define==="function"&&define.amd){define(function(){return n})}else{e["localStorageDB"]=n}}(window);