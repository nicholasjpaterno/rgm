(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ckBT:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return a})),t.d(n,"GoogleMarker",(function(){return f})),t.d(n,"default",(function(){return p}));var r=t("q1tI"),u=t("sqll"),c=t("CZrd"),l=t("TOXp"),i=t("qKvR"),o=(r.createElement,{zoom:9,center:{lat:59.936,lng:30.314}}),a=!0,f=function(e){var n=e.lat,t=e.lng,c=Object(u.d)(),l=c.api,i=c.map;return r.useEffect((function(){if(l){var e=new l.Marker({map:i,position:{lat:n,lng:t}});return function(){e.setMap(null)}}}),[l,i,n,t]),null};function p(){var e=Object(c.b)();return Object(i.c)(l.g,{value:.75},e&&Object(i.c)(u.a,{api:e,options:o},Object(i.c)(f,{lat:o.center.lat,lng:o.center.lng})))}},evMQ:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/google-marker",function(){return t("ckBT")}])},sqll:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"d",(function(){return a})),t.d(n,"b",(function(){return p})),t.d(n,"c",(function(){return d}));var r=t("ODXe"),u=t("q1tI"),c=t("qKvR"),l=(u.createElement,u.createContext(null)),i=(function(){var e={}}(),{width:"100%",height:"100%"}),o=u.forwardRef((function(e,n){var t=e.api,o=e.options,a=e.children,f=u.useRef(null),p=u.useRef(!1),d=u.useState(null),s=Object(r.a)(d,2),v=s[0],w=s[1];return u.useImperativeHandle(n,(function(){return v?v.map:null}),[v]),u.useEffect((function(){if(!p.current&&f.current){var e=new t.Map(f.current,"function"===typeof o?o(f.current):o);return p.current=!0,w({map:e,api:t}),function(){}}}),[t,o]),Object(c.c)(u.Fragment,null,Object(c.c)("div",{style:i,ref:f}),v&&Object(c.c)(l.Provider,{value:v},a))})),a=function(){return u.useContext(l)},f=t("i8i4"),p=(u.createElement,function(e){return e.children}),d=function(e){var n=a(),t=n.api,l=n.map,i=u.useRef(2),o=u.Children.toArray(e.children||[]),p=u.useState(null),d=Object(r.a)(p,2),s=d[0],v=d[1],w=u.useRef([]),g=u.useRef([]),b=function(e){return Math.round(e*i.current)/i.current};if(u.useLayoutEffect((function(){w.current=o})),u.useEffect((function(){if(t){i.current=window.devicePixelRatio;var e=new t.OverlayView,n=null;return e.onAdd=function(){n=document.createElement("div"),e.getPanes().floatPane.appendChild(n),v({element:n,view:e})},e.onRemove=function(){if(null!=n){var e=n.parentNode;null!=e&&e.removeChild(n),v(null)}},e.draw=function(){var n=e.getProjection();w.current.forEach((function(e,r){var u=e.props,c=u.lat,l=u.lng,i=g.current[r].current;if(null!=i){var o=n.fromLatLngToDivPixel(new t.LatLng(c,l));i.style.left=b(o.x)+"px",i.style.top=b(o.y)+"px"}}))},e.setMap(l),function(){e.setMap(null)}}}),[t,l]),null!=s&&null!=o&&null!=t){var m=s.view.getProjection();return f.createPortal(o.map((function(n,r){var u=m.fromLatLngToDivPixel(new t.LatLng(n.props.lat,n.props.lng));return null==g.current[r]&&(g.current[r]={current:null}),Object(c.c)("div",{key:n.key,ref:g.current[r],style:{position:"absolute",left:b(u.x),top:b(u.y),display:"grid",gridTemplate:"0/0"}},n,!0===e.debug&&Object(c.c)("div",{style:{position:"absolute",borderRadius:"100%",width:4,height:4,left:-2,top:-2,opacity:.8,boxShadow:"0 0 0 2px blue, 0 0 0 4px white, 0 0 0 6px blue"}}))})),s.element)}return null}}},[["evMQ",1,2,3,0,4]]]);