"use strict";(self.webpackChunkns_file_parser=self.webpackChunkns_file_parser||[]).push([[679],{679:function(e,a,n){n.r(a);var t=n(9439),r=n(8391),o=(n(8548),n(7592),n(2973),n(774)),i=n(2961),s=n(222),d=n(7097),l=(n(6289),n(6713)),c=n(5949),u=n(3712);a.default=function(){var e=(0,o.v9)(i.GO),a=e.programs,n=e.synths,h=e.lives,m=e.performances,f=e.managerSelectedIndexes,g=e.managerTabSelection,p=(0,r.useState)(null),v=(0,t.Z)(p,2),S=v[0],x=v[1],w=(0,r.useState)(""),y=(0,t.Z)(w,2),b=y[0],N=y[1],j=(0,r.useState)(a),k=(0,t.Z)(j,2),C=k[0],I=k[1],Z=(0,o.I0)(),T=function(e){var a,n=f[g]&&f[g].length>0;e.api.forEachNode((function(t){var r;r=n?f[g].includes(t.data.model.uuid):0===t.rowIndex,t.setSelected(r),r&&!a&&(a=t,e.api.ensureNodeVisible(t,"middle"))}))},L=function(e){switch(e){case"Synth":I(n);break;case"Live":I(h);break;case"Performance":I(m);break;default:I(a)}Z((0,i.h5)({managerTabSelection:e}))};return(0,r.useEffect)((function(){L(g)}),[a,n]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"manager-search-area d-flex justify-content-between",children:[(0,u.jsxs)("div",{className:"form-group has-search mt-2 ml-2",children:[(0,u.jsx)(c.dVI,{className:"form-control-feedback"}),(0,u.jsx)("input",{type:"text",className:"form-control",placeholder:"Search",value:b,onChange:function(e){N(e.target.value),S.setQuickFilter(e.target.value)}})]}),(0,u.jsx)("div",{className:"mr-0",children:(0,u.jsxs)(s.Z,{className:"nav-link",onSelect:L,id:"dropdown-program",variant:"dark",title:g,children:[(0,u.jsx)(d.Z.Item,{eventKey:"Program",children:"Program"},"Program"),(0,u.jsx)(d.Z.Item,{eventKey:"Synth",children:"Synth"},"Synth"),(0,u.jsx)(d.Z.Item,{eventKey:"Live",children:"Live"},"Live")]})})]}),(0,u.jsx)("div",{className:"ag-theme-custom-react",style:{height:"77vh",width:"100%"},children:(0,u.jsx)(l.AgGridReact,{onGridReady:function(e){x(e.api)},onGridSizeChanged:function(){S&&S.sizeColumnsToFit()},onSelectionChanged:function(e){var a=e.api.getSelectedNodes().sort((function(e,a){return e.rowIndex-a.rowIndex})).map((function(e){return e.data.model}));!function(e){var a=e.api.getSelectedNodes().map((function(e){return e.data.model.uuid}));Z((0,i.h5)({managerTabSelection:g,indexes:a}))}(e),Z((0,i.k$)({data:a}))},onRowDataUpdated:T,onSortChanged:function(e){console.log("onSortChanged()"),T(e)},rowData:C,defaultColDef:{sortable:!0,resizable:!0},columnDefs:[{headerName:"Loc",field:"location",width:116,sort:"asc"},{field:"name",width:180},{field:"category",width:120},{field:"version",width:80}],sortingOrder:["desc","asc"],rowSelection:"multiple",overlayNoRowsTemplate:'<span style="padding: 10px; border: 1px solid #444; background: lightgoldenrodyellow;">Nothing To Show</span>'})})]})}}}]);