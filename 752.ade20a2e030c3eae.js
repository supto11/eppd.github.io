"use strict";(self.webpackChunke_pos_point_dashboard=self.webpackChunke_pos_point_dashboard||[]).push([[752],{752:(O,u,n)=>{n.r(u),n.d(u,{GroupsModule:()=>R});var h=n(6019),d=n(8977),m=n(2262),r=n(4176),g=n(5351),f=n(4753),v=n(3719),C=n(2997);const S=[{id:1,name:"Hydrogen"},{id:2,name:"Helium"},{id:3,name:"Lithium"},{id:4,name:"Beryllium"},{id:5,name:"Boron"},{id:6,name:"Carbon"},{id:7,name:"Nitrogen"},{id:8,name:"Oxygen"},{id:9,name:"Fluorine"},{id:10,name:"Neon"},{id:11,name:"Sodium"},{id:12,name:"Magnesium"},{id:13,name:"Aluminum"},{id:14,name:"Silicon"},{id:15,name:"Phosphorus"},{id:16,name:"Sulfur"},{id:17,name:"Chlorine"},{id:18,name:"Argon"},{id:19,name:"Potassium"},{id:20,name:"Calcium"}];class G extends g.o2{constructor(){super(),this.data=S}connect(){if(this.paginator&&this.sort)return(0,v.T)((0,C.of)(this.data),this.paginator.page,this.sort.sortChange).pipe((0,f.U)(()=>this.getPagedData(this.getSortedData([...this.data]))));throw Error("Please set the paginator and sort on the data source before connecting.")}disconnect(){}getPagedData(o){return this.paginator?o.splice(this.paginator.pageIndex*this.paginator.pageSize,this.paginator.pageSize):o}getSortedData(o){return this.sort&&this.sort.active&&""!==this.sort.direction?o.sort((a,i)=>{var s,l;const c="asc"===(null===(s=this.sort)||void 0===s?void 0:s.direction);switch(null===(l=this.sort)||void 0===l?void 0:l.active){case"name":return p(a.name,i.name,c);case"id":return p(+a.id,+i.id,c);default:return 0}}):o}}function p(e,o,a){return(e<o?-1:1)*(a?1:-1)}var t=n(3668),D=n(2082),Z=n(248);function y(e,o){1&e&&(t.TgZ(0,"th",12),t._uU(1,"Id"),t.qZA())}function T(e,o){if(1&e&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.id)}}function w(e,o){1&e&&(t.TgZ(0,"th",12),t._uU(1,"Name"),t.qZA())}function A(e,o){if(1&e&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.name)}}function M(e,o){1&e&&t._UZ(0,"tr",14)}function N(e,o){1&e&&t._UZ(0,"tr",15)}const U=function(){return[5,10,20]};let x=(()=>{class e{constructor(a){this.dummyDataService=a,this.displayedColumns=["id","name"],this.dataSource=new G}ngAfterViewInit(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator,this.table.dataSource=this.dataSource}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(D.m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["eppd-groups"]],viewQuery:function(a,i){if(1&a&&(t.Gf(d.NW,5),t.Gf(m.YE,5),t.Gf(r.BZ,5)),2&a){let s;t.iGM(s=t.CRH())&&(i.paginator=s.first),t.iGM(s=t.CRH())&&(i.sort=s.first),t.iGM(s=t.CRH())&&(i.table=s.first)}},decls:15,vars:8,consts:[[1,"mat-h1","page__title"],[3,"overviewData"],[1,"mat-elevation-z8"],["mat-table","","matSort","","aria-label","Elements",1,"full-width-table"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page",3,"length","pageIndex","pageSize","pageSizeOptions"],["paginator",""],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(a,i){1&a&&(t.TgZ(0,"h1",0),t._uU(1,"Groups"),t.qZA(),t._UZ(2,"eppd-page-overview-01",1),t.TgZ(3,"div",2),t.TgZ(4,"table",3),t.ynx(5,4),t.YNc(6,y,2,0,"th",5),t.YNc(7,T,2,1,"td",6),t.BQk(),t.ynx(8,7),t.YNc(9,w,2,0,"th",5),t.YNc(10,A,2,1,"td",6),t.BQk(),t.YNc(11,M,1,0,"tr",8),t.YNc(12,N,1,0,"tr",9),t.qZA(),t._UZ(13,"mat-paginator",10,11),t.qZA()),2&a&&(t.xp6(2),t.Q6J("overviewData",i.dummyDataService.overviewData),t.xp6(9),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("length",null==i.dataSource||null==i.dataSource.data?null:i.dataSource.data.length)("pageIndex",0)("pageSize",10)("pageSizeOptions",t.DdM(7,U)))},directives:[Z.N,r.BZ,m.YE,r.w1,r.fO,r.Dz,r.as,r.nj,d.NW,r.ge,m.nU,r.ev,r.XQ,r.Gk],styles:[".full-width-table[_ngcontent-%COMP%]{width:100%}"]}),e})();var z=n(3886),Q=n(4048);const Y=[{path:"",component:x}],B=[r.p0,d.TU,m.JX],H=[Q.C];let R=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[h.ez,z.Bz.forChild(Y),...B,...H]]}),e})()}}]);