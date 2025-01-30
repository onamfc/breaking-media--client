"use strict";(()=>{var e={};e.id=407,e.ids=[407],e.modules={846:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4870:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},6924:(e,r,t)=>{t.r(r),t.d(r,{patchFetch:()=>m,routeModule:()=>l,serverHooks:()=>c,workAsyncStorage:()=>u,workUnitAsyncStorage:()=>d});var a={};t.r(a),t.d(a,{GET:()=>p});var s=t(1271),i=t(1232),o=t(8079),n=t(1238);async function p(){let e="https://breakingmedia.ai",r=await fetch("https://api.breakingmedia.ai/posts").then(e=>e.json()).catch(()=>[]),t=["","about","donate","articles"].map(r=>`
        <url>
            <loc>${e}/${r}</loc>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
    `).join(""),a=r.map(r=>`
        <url>
            <loc>${e}/articles/${r.slug}</loc>
            <lastmod>${new Date(r.updated_at||r.created_at).toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
    `).join(""),s=`
        <url>
            <loc>${e}/api/rss</loc>
            <changefreq>hourly</changefreq>
            <priority>0.9</priority>
        </url>
    `,i=`
        <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
            ${t}
            ${a}
            ${s}
        </urlset>
    `;return new n.NextResponse(i,{headers:{"Content-Type":"application/xml","Cache-Control":"s-maxage=86400, stale-while-revalidate=3600"}})}let l=new s.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/sitemap/route",pathname:"/api/sitemap",filename:"route",bundlePath:"app/api/sitemap/route"},resolvedPagePath:"C:\\Users\\brand\\WebstormProjects\\breaking-media--client\\apps\\BreakingMedia\\src\\app\\api\\sitemap\\route.ts",nextConfigOutput:"",userland:a}),{workAsyncStorage:u,workUnitAsyncStorage:d,serverHooks:c}=l;function m(){return(0,o.patchFetch)({workAsyncStorage:u,workUnitAsyncStorage:d})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[207,48],()=>t(6924));module.exports=a})();