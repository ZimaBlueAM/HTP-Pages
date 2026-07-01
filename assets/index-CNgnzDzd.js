(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const b of r.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&i(b)}).observe(document,{childList:!0,subtree:!0});function a(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=a(l);fetch(l.href,r)}})();const At=document.querySelector("#app"),Y=document.querySelector("#drawer-root"),z=document.querySelector("#modal-root"),wt=document.querySelector("#toast-root"),Rt=new URL("/HTP-Pages/assets/HashKey%20Trading%20Platform%20-logo-white-CAymNEUc.png",import.meta.url).href,It="/HTP-Pages/",J=[{id:"access",label:"登录 / 入驻",sub:"Onboarding / MFA / Permissions",icon:"AC",count:8},{id:"v1",label:"V1.0 全量基线",sub:"Original RFQ Market UI",icon:"V1",count:19},{id:"investor",label:"投资者工作台",sub:"Market / RFQ / Holdings",icon:"IN",count:4},{id:"maker",label:"做市商工作台",sub:"Incoming RFQ / Quote",icon:"MM",count:7},{id:"issuer",label:"发行方工作台",sub:"Issuance / NAV / Payout",icon:"IS",count:5},{id:"fund",label:"基金机构",sub:"Valuation / Ledger / Risk",icon:"FM",count:9},{id:"platform",label:"平台治理",sub:"Approvals / Risk / Audit",icon:"GV",count:12},{id:"settlement",label:"清算中心",sub:"NAV / CCASS / On-chain",icon:"ST",count:6}],dt=[{id:"all",label:"全部"},{id:"bond",label:"债券"},{id:"fund",label:"基金"},{id:"stock",label:"股票"}],kt={access:"Prospect Institution",v1:"RFQ Market V1 Archive",investor:"NorthBay Capital",maker:"Amber River Securities",issuer:"Harbour Fund Management",fund:"Harbour Fund Management",platform:"HashKey Operations",settlement:"HashKey Clearing Desk"},tt={access:[{label:"入驻表单",target:"onboarding-form",badge:"MFA"},{label:"资质进度",target:"qualification-upload",badge:"4-step"},{label:"登录安全",target:"login-security",badge:"V1"},{label:"子账号",target:"subaccounts",badge:"RBAC"}],v1:[{label:"V1 预览",target:"v1-preview",badge:"HTML"},{label:"页面地图",target:"v1-map",badge:"19"}],investor:[{label:"市场",target:"market",badge:"6"},{label:"RFQ / 比价",target:"active-rfq",badge:"4"},{label:"持仓",target:"holdings",badge:"4"},{label:"成交记录",target:"transactions",badge:"4"},{label:"结算权益",target:"investor-settlement-interest",badge:"V1"},{label:"账户/API",target:"investor-account-web3",badge:"KYC"},{label:"交易动作",target:"action-rail",badge:"CTA"}],maker:[{label:"Incoming",target:"maker-incoming",badge:"RFQ"},{label:"报价录入",target:"maker-quote-entry",badge:"CTA"},{label:"库存限制",target:"maker-inventory",badge:"4"},{label:"报价历史",target:"maker-quote-history",badge:"Quote"},{label:"V1 连续性",target:"maker-v1-continuity",badge:"5"}],issuer:[{label:"发行入口",target:"issuer-issuance",badge:"Type"},{label:"认购状态",target:"issuer-subscription",badge:"Book"},{label:"V1 发行方",target:"issuer-v1-continuity",badge:"4"},{label:"NAV 修正",target:"issuer-nav",badge:"NAV"},{label:"公司行动",target:"issuer-actions",badge:"Stock"},{label:"机构/API",target:"issuer-profile-center",badge:"API"}],fund:[{label:"资产台账",target:"fund-ledger",badge:"NAV"},{label:"申赎压力",target:"fund-pressure",badge:"31%"},{label:"产品风控",target:"fund-full-coverage",badge:"2.0"},{label:"NAV 趋势",target:"fund-nav-trend",badge:"90D"},{label:"合规报告",target:"fund-reports",badge:"Export"}],platform:[{label:"审批队列",target:"platform-approvals",badge:"4"},{label:"审批决策",target:"approval-detail",badge:"SLA"},{label:"应急开关",target:"platform-switches",badge:"4"},{label:"生命周期",target:"platform-lifecycle",badge:"6"},{label:"治理全量",target:"platform-v1-continuity",badge:"V1+2"},{label:"风险参数",target:"platform-risk",badge:"Rules"}],settlement:[{label:"清算泳道",target:"settlement-lanes",badge:"6"},{label:"清算任务",target:"settlement-tasks",badge:"4"},{label:"每日对账",target:"settlement-reconciliation",badge:"3/4"},{label:"异常补偿",target:"settlement-compensation",badge:"NAV"}]},F=[{file:"登录注册.html",group:"通用入口",label:"登录 / 注册 / 机构入驻",required:"系统登录、机构入驻、角色选择、MFA"},{file:"平台方.html",group:"平台方",label:"平台治理端",required:"运营大盘、异常监控、发行审批、上下架、规则、熔断、多签、机构准入、审计"},{file:"发行人.html",group:"发行人",label:"发行人工作台",required:"新发行、存续债券池、认购簿、二级市场动态、机构/API 设置"},{file:"债券发行与登记.html",group:"发行人",label:"债券发行与登记",required:"发行登记订单、CMU/合约部署/材料审核、近期登记完成记录"},{file:"发行人二级市场监控.html",group:"发行人",label:"二级市场监控",required:"成交量、做市商覆盖、收益率曲线、流动性分布、实时成交"},{file:"票息兑付管理.html",group:"发行人",label:"票息兑付管理",required:"兑付日程、历史兑付、资金划拨、RWA 智能合约派息"},{file:"发行人RWA资产通证化.html",group:"发行人",label:"RWA 资产通证化",required:"资产上链、ERC-3643、合规通证合约、通证资产库"},{file:"做市商.html",group:"做市商",label:"做市商工作台",required:"交易量、PnL、Hit Ratio、DV01、库存、快速报价、Incoming Stream"},{file:"做市商-报价与订单.html",group:"做市商",label:"报价与订单管理",required:"近期报价单、撤销、订单管理、待结算、凭证"},{file:"做市商-债券持仓.html",group:"做市商",label:"债券持仓管理",required:"净敞口、DV01、PnL、LCR、持仓筛选、对冲"},{file:"做市商-认购发行债券.html",group:"做市商",label:"认购新发债券",required:"一级市场发行、申购记录、Order Book、申购收益率"},{file:"做市商-清算交收.html",group:"做市商",label:"清算交收",required:"做市商清算交收原页面"},{file:"做市商-个人中心.html",group:"做市商",label:"个人中心 / 合规",required:"机构信息、API Key、2FA、IP 白名单、通知偏好"},{file:"买方.html",group:"买方",label:"买方工作台",required:"New RFQ、可交割券池、Active Inquiries、成交统计"},{file:"买方交易记录.html",group:"买方",label:"历史交易记录",required:"成交记录、筛选、CSV 导出、交易凭证、利息领取"},{file:"买方结算与清算.html",group:"买方",label:"结算与清算",required:"Pending Settlements、Progress、Interest Records、Smart Contract"},{file:"SPA.html",group:"导航",label:"综合系统主页",required:"1.0 原 IA 总导航"},{file:"index.html",group:"导航",label:"页面导航地图",required:"全部页面索引"},{file:"test_card_header.html",group:"测试",label:"库存卡片测试",required:"Live Inventory 卡片片段"}],A=[{id:"BOND-HKTB-2028",code:"HKTB4.20-2028",name:"HashKey Treasury Bond 2028",type:"bond",issuer:"HashKey Treasury",status:"normal",statusText:"正常交易",price:"101.38",ytm:"4.18%",change:"+0.12%",liquidity:"A",whitelist:"Professional Investor",settlement:"Instant DVP",risk:"Low",disabledReason:""},{id:"FUND-HK-LQD",code:"HKLQD-A",name:"HK Bond Liquidity Fund A",type:"fund",issuer:"Harbour Fund Management",status:"normal",statusText:"开放申赎",price:"NAV 1.0283",nav:1.0283,iNav:1.0291,change:"+0.08%",liquidity:"82%",whitelist:"PI + Fund RFQ whitelist",settlement:"Official NAV",risk:"Medium",disabledReason:""},{id:"FUND-RWA-MM",code:"RWAMM-P",name:"RWA Money Market Plus",type:"fund",issuer:"RWA Capital",status:"navException",statusText:"NAV 异常暂停",price:"NAV 0.9971",nav:.9971,iNav:1.0612,change:"+6.43%",liquidity:"34%",whitelist:"Institution only",settlement:"Paused",risk:"High",disabledReason:"NAV 日变动 +6.43%，超过 +/-5% 审核阈值，暂停交易、申购、赎回和 RFQ。"},{id:"STK-HKC-088",code:"HKC088",name:"HashKey Chain Infrastructure",type:"stock",issuer:"HashKey Chain Ltd.",status:"priceLimit",statusText:"触发涨跌停",price:"HKD 18.42",change:"+10.00%",freeFloat:"12,800,000",liquidity:"L2",whitelist:"Block RFQ whitelist",settlement:"CCASS + on-chain mirror",risk:"High",disabledReason:"股票价格触发涨跌停阈值，关闭新的 RFQ 买/卖入口；存量 RFQ 保留。"},{id:"STK-GRN-021",code:"GRNV021",name:"GreenVault Equity Class B",type:"stock",issuer:"GreenVault Holdings",status:"lockup",statusText:"30 日锁定",price:"HKD 6.81",change:"-0.74%",freeFloat:"4,600,000",liquidity:"B",whitelist:"Primary maker",settlement:"CCASS",risk:"Medium",disabledReason:"做市商一级认购股份锁定至 2026-07-18，后端同步拒绝卖出和 RFQ 卖出。"},{id:"BOND-HBR-2027",code:"HBRLG4.90-2027",name:"Harbour Logistics Bond 2027",type:"bond",issuer:"Harbour Logistics",status:"suspended",statusText:"临时停牌",price:"99.76",ytm:"5.02%",change:"-0.21%",liquidity:"C",whitelist:"Professional Investor",settlement:"Exit only",risk:"High",disabledReason:"发行方披露文件补充中，暂停新交易和 RFQ；现有持仓只允许退出处理。"}];let y=[{id:"RFQ-F-240617",assetId:"FUND-HK-LQD",direction:"卖出",quantity:42e4,unit:"份",initiator:"NorthBay Capital",scope:"4 makers",countdown:"07:42",responses:3,best:"1.0268",status:"active",statusText:"询价中",allowCancel:!0,feePayer:"发起方"},{id:"RFQ-S-240615",assetId:"STK-HKC-088",direction:"买入",quantity:65e3,unit:"股",initiator:"NorthBay Capital",scope:"Block whitelist",countdown:"暂停",responses:1,best:"18.37",status:"blocked",statusText:"价格限制",allowCancel:!0,feePayer:"双方各自"},{id:"RFQ-B-240612",assetId:"BOND-HKTB-2028",direction:"买入",quantity:3e6,unit:"面值",initiator:"NorthBay Capital",scope:"6 makers",countdown:"02:15",responses:5,best:"101.31 / 4.21%",status:"quoted",statusText:"可成交",allowCancel:!0,feePayer:"发起方"},{id:"RFQ-F-240609",assetId:"FUND-RWA-MM",direction:"卖出",quantity:18e4,unit:"份",initiator:"Lighthouse Asset",scope:"3 makers",countdown:"已撤销",responses:0,best:"-",status:"canceled",statusText:"NAV 异常撤销",allowCancel:!1,feePayer:"发起方"}],w=[{id:"Q-F-881",rfqId:"RFQ-F-240617",maker:"Amber River Securities",amount:42e4,value:"1.0268",deviation:"-0.15%",valid:"01:38",state:"best",note:"官方 NAV 截止日 T+0"},{id:"Q-F-882",rfqId:"RFQ-F-240617",maker:"HK Digital Markets",amount:36e4,value:"1.0259",deviation:"-0.23%",valid:"01:12",state:"normal",note:"部分成交，剩余额度不足"},{id:"Q-F-883",rfqId:"RFQ-F-240617",maker:"BluePeak Liquidity",amount:42e4,value:"1.0310",deviation:"+0.26%",valid:"00:54",state:"warn",note:"高于 iNAV 参考，需二次确认"},{id:"Q-B-331",rfqId:"RFQ-B-240612",maker:"Amber River Securities",amount:3e6,value:"101.31 / 4.21%",deviation:"+3bp",valid:"02:02",state:"best",note:"DVP 即时清算"},{id:"Q-B-332",rfqId:"RFQ-B-240612",maker:"Cedar Prime",amount:25e5,value:"101.25 / 4.25%",deviation:"+7bp",valid:"01:44",state:"normal",note:"部分成交"},{id:"Q-S-711",rfqId:"RFQ-S-240615",maker:"HK Digital Markets",amount:65e3,value:"18.37",deviation:"-0.27%",valid:"暂停",state:"blocked",note:"价格限制期间不可新成交"}];const C=[{assetId:"FUND-HK-LQD",total:72e4,available:58e4,frozen:14e4,reason:"大额赎回审批中，队列 rank #318，预计 T+2 自然日。",value:"HKD 740,376",pnl:"+HKD 8,940",actions:"申购 / 赎回 / RFQ"},{assetId:"STK-GRN-021",total:12e4,available:0,frozen:12e4,reason:"一级认购 30 自然日锁定至 2026-07-18。",value:"HKD 817,200",pnl:"-HKD 14,400",actions:"查看锁定"},{assetId:"BOND-HKTB-2028",total:5e6,available:5e6,frozen:0,reason:"-",value:"HKD 5,069,000",pnl:"+HKD 42,000",actions:"买入 / 卖出 / RFQ"},{assetId:"FUND-RWA-MM",total:21e4,available:0,frozen:21e4,reason:"NAV 异常冻结，等待平台审核修复。",value:"HKD 209,391",pnl:"-HKD 2,814",actions:"查看异常"}],R=[{id:"TRD-240618-091",assetId:"BOND-HKTB-2028",type:"买入",qty:"HKD 3,000,000",price:"101.31 / 4.21%",cp:"Amber River",status:"清算完成",channel:"DVP"},{id:"SUB-240618-041",assetId:"FUND-HK-LQD",type:"基金申购",qty:"HKD 800,000",price:"NAV 待确认",cp:"Harbour Fund",status:"等待官方 NAV",channel:"Fund ledger"},{id:"RED-240617-118",assetId:"FUND-HK-LQD",type:"基金赎回",qty:"140,000 份",price:"NAV T+0",cp:"Harbour Fund",status:"大额审批中",channel:"Liquidity queue"},{id:"RFQ-240615-065",assetId:"STK-HKC-088",type:"RFQ 买入",qty:"65,000 股",price:"18.37",cp:"HK Digital",status:"价格限制暂停",channel:"CCASS"}],pt=[{name:"营业执照 / Certificate of Incorporation",role:"全部机构",status:"已上传",validation:"格式与大小通过",action:"预览 / 替换"},{name:"SFC 牌照 Type 1/4/9",role:"做市商 / 基金机构",status:"平台复审中",validation:"牌照有效期 2027-05-31",action:"查看进度"},{name:"风控制度与业务连续性计划",role:"基金机构",status:"待补充",validation:"缺少签章页",action:"补正上传"},{name:"受益所有人声明",role:"全部机构",status:"已通过",validation:"KYB 记录已同步",action:"查看记录"}],U=[{name:"Trader-01",permission:"RFQ 发起 / 交易记录只读",state:"首次登录改密完成"},{name:"Ops-Settlement",permission:"结算与清算 / 导出申请",state:"MFA 已绑定"},{name:"Compliance-Read",permission:"审计日志 / 风险报告只读",state:"IP 白名单限制"}],W=[{assetId:"FUND-HK-LQD",available:118e4,auto:!1,reason:"基金流动性占用 31%，L2 暂停自动报价。",bid:"1.0259",ask:"1.0312",pnl:"+HKD 18,420"},{assetId:"BOND-HKTB-2028",available:8e6,auto:!0,reason:"正常自动报价，偏离阈值 20bp。",bid:"101.24",ask:"101.42",pnl:"+HKD 91,200"},{assetId:"STK-HKC-088",available:22e4,auto:!1,reason:"价格限制期间关闭新 RFQ 报价。",bid:"18.21",ask:"18.42",pnl:"-HKD 7,340"},{assetId:"STK-GRN-021",available:0,auto:!1,reason:"一级认购锁定，后端拒绝卖出和 RFQ 卖出。",bid:"6.74",ask:"6.88",pnl:"-HKD 3,760"}],Z=[{id:"ISS-901",assetId:"FUND-HK-LQD",stage:"NAV 披露",quota:"HKD 80,000,000",windowEnd:"2026-07-04 18:00 HKT",participant:"6 institutions",status:"开放"},{id:"ISS-914",assetId:"STK-GRN-021",stage:"一级认购锁定",quota:"1,800,000 shares",windowEnd:"2026-07-02 16:00 HKT",participant:"3 makers",status:"锁定中"},{id:"ISS-928",assetId:"BOND-HKTB-2028",stage:"二级监控",quota:"HKD 120,000,000",windowEnd:"2026-07-11 17:00 HKT",participant:"PI whitelist",status:"正常"}],T=[{assetId:"FUND-HK-LQD",official:"1.0283",iNav:"1.0291",source:"Manager API",deviation:"+0.08%",status:"已披露",time:"2026-06-30 09:55"},{assetId:"FUND-RWA-MM",official:"0.9971",iNav:"1.0612",source:"3rd-party fallback",deviation:"+6.43%",status:"待双人复核",time:"2026-06-30 09:48"}];let p=[{id:"APR-RED-804",type:"大额赎回",assetId:"FUND-HK-LQD",institution:"NorthBay Capital",trigger:"单笔赎回 82.4%，超过 80% 人工审批阈值。",amount:"580,000 份",severity:"high",sla:"2 天 06:14",level:"Senior admin",status:"待处理"},{id:"APR-NAV-217",type:"NAV 修正",assetId:"FUND-RWA-MM",institution:"RWA Capital",trigger:"官方 NAV 与 iNAV 偏离 +6.43%，超过 +/-5%。",amount:"影响 11 个未定价订单",severity:"severe",sla:"1 天 18:22",level:"Super admin",status:"待二审"},{id:"APR-BLK-132",type:"股票大宗 RFQ",assetId:"STK-HKC-088",institution:"Lighthouse Asset",trigger:"单笔询价 86% free float，需高管+超管复核。",amount:"11,008,000 股",severity:"severe",sla:"09:41",level:"Super admin",status:"待二审"},{id:"APR-LST-073",type:"资产停复牌",assetId:"BOND-HBR-2027",institution:"Harbour Logistics",trigger:"发行方补充披露，申请临时停牌延长 2 自然日。",amount:"HKD 62,000,000",severity:"medium",sla:"2 天 21:04",level:"Senior admin",status:"待处理"}];const I=[{id:"SET-TRADE-910",lane:"Trade DVP",assetId:"BOND-HKTB-2028",order:"TRD-240618-091",state:"完成",retry:"0/3",next:"-",owner:"Auto clearing",attribution:"2026-06-30"},{id:"SET-NAV-228",lane:"Fund NAV",assetId:"FUND-HK-LQD",order:"SUB-240618-041",state:"等待官方 NAV",retry:"0/3",next:"10:05 HKT",owner:"Fund ledger",attribution:"2026-06-30"},{id:"SET-CHAIN-551",lane:"On-chain mirror",assetId:"STK-HKC-088",order:"RFQ-240615-065",state:"第 2 次重试",retry:"2/3",next:"10:18 HKT",owner:"Ops queue",attribution:"2026-06-30"},{id:"SET-OPS-030",lane:"Ops window cache",assetId:"FUND-HK-LQD",order:"RED-240617-118",state:"03:00 缓存批清",retry:"0/3",next:"03:10 HKT",owner:"Batch clear",attribution:"2026-06-30"}],G=[];let Q=[{id:"ACT-BOOT",time:"06/30 09:55:00",title:"HTP mock store ready",detail:"前端所有操作会写入本地 mock 数据和审计日志。",tone:"good"}];const s={role:"investor",assetFilter:"all",marketStatusFilter:"all",approvalFilter:"all",settlementLaneFilter:"all",search:"",selectedAssetId:"FUND-HK-LQD",selectedRfqId:"RFQ-F-240617",selectedApprovalId:"APR-RED-804",activeModuleByRole:{access:"onboarding-form",v1:"v1-preview",investor:"market",maker:"maker-incoming",issuer:"issuer-issuance",fund:"fund-ledger",platform:"platform-approvals",settlement:"settlement-lanes"},onboardingStep:1,issuanceStep:2,v1Page:"登录注册.html",issuerType:"fund",rfqDirection:"卖出",rfqAmount:"420000",subscriptionAmount:"800000",redemptionShares:"580000",makerQuoteAmount:"420000",makerQuoteValue:"1.0264",secondQuote:!0,rememberPassword:!0,agreementsAccepted:!0,onboardingDraftSavedAt:"",onboardingSubmittedAt:"",qualificationUploadedAt:"",allocationSavedAt:"",interestClaimedAt:"",preferencesSavedAt:"",lastNavRefreshAt:"",riskChangeSubmittedAt:"",approvalOpinion:"",navCorrectionReason:"",preferences:{email:!0,webhook:!0},emergency:{rfq:!0,quote:!0,clearing:!0,onchain:!0},drawer:null,modal:null,toasts:[]};let _=null,x=null;function n(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ft(){if(typeof window>"u")return;const t=new URLSearchParams(window.location.search),e=t.get("role"),a=t.get("tab")||t.get("assetType"),i=t.get("asset"),l=t.get("rfq"),r=t.get("approval"),b=t.get("module"),h=t.get("v1")||t.get("legacy");if(J.some(v=>v.id===e)&&(s.role=e),dt.some(v=>v.id===a)&&(s.assetFilter=a),tt[s.role]?.some(v=>v.target===b)&&(s.activeModuleByRole[s.role]=b),i){const v=A.find(j=>j.id===i||j.code===i);v&&(s.selectedAssetId=v.id)}y.some(v=>v.id===l)&&(s.selectedRfqId=l,L()),p.some(v=>v.id===r)&&(s.selectedApprovalId=r),F.some(v=>v.file===h)&&(s.v1Page=h)}function B(t){return{bond:"债券",fund:"基金",stock:"股票"}[t]||t}function u(t){return Number(t||0).toLocaleString("en-US")}function c(t){return A.find(e=>e.id===t)||A[0]}function O(t){return s.assetFilter==="all"||t.type===s.assetFilter}function K(){return A.filter(t=>O(t))}function M({includeCanceled:t=!0}={}){return y.filter(e=>!t&&e.status==="canceled"?!1:O(c(e.assetId)))}function k(){const t=A.find(e=>e.id===s.selectedAssetId);return t&&O(t)?t:K()[0]||t||A[0]}function V(){const t=y.find(e=>e.id===s.selectedRfqId);return t&&O(c(t.assetId))?t:M({includeCanceled:!1})[0]||M()[0]||y[0]}function L(t=V()){if(!t)return;const e=c(t.assetId),a=W.find(i=>i.assetId===e.id);s.selectedAssetId=e.id,s.makerQuoteAmount=String(Math.min(t.quantity,a?.available||t.quantity)),e.type==="fund"?s.makerQuoteValue=String(((e.nav||1)*.9982).toFixed(4)):e.type==="bond"?s.makerQuoteValue=String((Number.parseFloat(e.price)||100).toFixed(2)):s.makerQuoteValue=String((Number(String(e.price).replace(/[^\d.]/g,""))||1).toFixed(2))}function rt(){const t=A.find(i=>i.id===s.selectedAssetId);if(!t||!O(t)){const i=K()[0];i&&(s.selectedAssetId=i.id)}const e=y.find(i=>i.id===s.selectedRfqId),a=M({includeCanceled:!1});a.length&&(!e||!a.some(i=>i.id===e.id))?(s.selectedRfqId=a[0].id,L(a[0])):e&&O(c(e.assetId))&&L(e)}function ot(){if(typeof window>"u")return;const t=new URLSearchParams(window.location.search);t.set("role",s.role),t.set("tab",s.assetFilter),s.role==="investor"?t.set("asset",s.selectedAssetId):t.delete("asset"),s.role==="maker"?t.set("rfq",s.selectedRfqId):t.delete("rfq"),s.role==="platform"?t.set("approval",s.selectedApprovalId):t.delete("approval"),s.role==="v1"?t.set("v1",s.v1Page):t.delete("v1");const e=et(tt[s.role]||[]);e?t.set("module",e):t.delete("module");const a=t.toString(),i=`${window.location.pathname}${a?`?${a}`:""}${window.location.hash}`,l=`${window.location.pathname}${window.location.search}${window.location.hash}`;i!==l&&window.history.replaceState(null,"",i)}function N(){return p.find(t=>t.id===s.selectedApprovalId)||p[0]}function g(t){return["normal","quoted","active","完成","开放","已披露"].includes(t)?"good":["blocked","navException","priceLimit","suspended","待二审","第 2 次重试"].includes(t)?"danger":["lockup","canceled","等待官方 NAV","待处理","锁定中"].includes(t)?"warn":""}function d(t,e=""){return`<span class="chip ${e}">${n(t)}</span>`}function vt(t,e){return t<e?"active done":t===e?"active current":"pending"}function $(){return new Intl.DateTimeFormat("zh-HK",{timeZone:"Asia/Hong_Kong",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(new Date)}function f(t,e){return`${t}-${String(e+1).padStart(3,"0")}`}function Nt(t,e="",a=""){Q=[{id:f("ACT",Q.length),time:$(),title:t,detail:e,tone:a},...Q].slice(0,16)}function m(t){return`<div class="asset-cell">
    <strong>${n(t.code)}</strong>
    <span>${n(t.name)}</span>
    <em>${B(t.type)} · ${n(t.issuer)}</em>
  </div>`}function nt(){const t=s.search.trim().toLowerCase();return A.filter(e=>{const a=s.assetFilter==="all"||e.type===s.assetFilter,i=s.marketStatusFilter==="all"||s.marketStatusFilter==="tradable"&&e.status==="normal"||s.marketStatusFilter==="exception"&&["navException","priceLimit"].includes(e.status)||s.marketStatusFilter==="exit"&&["lockup","suspended"].includes(e.status),l=`${e.code} ${e.name} ${e.issuer} ${e.statusText}`.toLowerCase();return a&&i&&(!t||l.includes(t))})}function P(){At.innerHTML=qt(),St(),ge(),me(),lt(),Dt(),Ht()}function St(){document.querySelectorAll("tr.selectable[data-action]").forEach(t=>{t.tabIndex=0,t.setAttribute("role","button"),t.setAttribute("aria-label",t.innerText.replace(/\s+/g," ").trim())})}function Dt(){if(!_)return;const{field:t,start:e,end:a}=_;_=null,window.requestAnimationFrame(()=>{const i=document.activeElement?.dataset?.field;if(i&&i!==t)return;const l=document.querySelector(`[data-field="${t}"]`);l&&(l.focus(),typeof l.setSelectionRange=="function"&&Number.isInteger(e)&&l.setSelectionRange(e,Number.isInteger(a)?a:e))})}function Ht(){if(!x)return;const t=x;x=null,window.requestAnimationFrame(()=>{const e=document.querySelector(`[data-panel="${t}"]`);e&&(e.setAttribute("tabindex","-1"),e.scrollIntoView({block:"start",behavior:"auto"}),e.focus({preventScroll:!0}))})}function ct(t){window.matchMedia("(max-width: 680px)").matches&&(x=t)}function qt(){const t=p.filter(a=>a.status.includes("待")).length,e=Math.min(99,t+Q.length+I.filter(a=>a.state.includes("重试")||a.state.includes("接管")).length);return`<a class="skip-link" href="#main-content">跳到主工作区</a>
  <div class="htp-shell">
    <aside class="sidebar">
      <div class="brand">
        <img class="brand-logo" src="${Rt}" alt="HashKey Trading Platform" />
        <strong>2.0 多资产终端</strong>
      </div>
      <div>
        <p class="side-section-label">Role Console</p>
        <nav class="role-nav" aria-label="HTP roles">
          ${J.map(a=>`<button class="role-button ${s.role===a.id?"active":""}" data-action="set-role" data-role="${a.id}">
            <span class="role-icon">${a.icon}</span>
            <span><b>${a.label}</b><small>${a.sub}</small></span>
            <span class="role-count">${a.count}</span>
          </button>`).join("")}
        </nav>
      </div>
      <div class="utility-nav">
        <p class="side-section-label">Control Plane</p>
        <button class="utility-button" data-action="open-drawer" data-drawer="rules">
          <span class="nav-icon">03</span>
          <span><b>自然日规则</b><small>7x24 / 03:00 ops window</small></span>
        </button>
        <button class="utility-button" data-action="set-role" data-role="platform">
          <span class="nav-icon">5Y</span>
          <span><b>审计与水印</b><small>审批、导出、留痕 5 年</small></span>
        </button>
      </div>
      <div class="sidebar-footer">
        <span>Environment</span>
        <strong>Demo data · HKT · Grey release</strong>
      </div>
    </aside>
    <header class="topbar">
      <label class="search-box">
        <span>⌕</span>
        <input data-field="search" value="${n(s.search)}" placeholder="搜索资产代码/名称、机构、RFQ、订单 ID" aria-label="全局搜索" />
        <kbd>/</kbd>
      </label>
      <div class="status-cluster">
        <span class="status-pill"><span class="status-dot"></span>SFC 合规在线</span>
        <span class="status-pill"><span class="status-dot"></span>链上镜像 99.98%</span>
        <span class="status-pill warn"><span class="status-dot"></span>基金 iNAV 5m</span>
        <span class="status-pill time-pill" data-clock>${$()} HKT</span>
        <button class="icon-button" data-action="open-drawer" data-drawer="notifications" aria-label="打开通知">${e}</button>
      </div>
    </header>
    <main class="main" id="main-content" data-view="${s.role}" tabindex="-1">
      ${Tt()}
    </main>
  </div>`}function Tt(){return s.role==="access"?Pt():s.role==="v1"?Ct():s.role==="maker"?_t():s.role==="issuer"?ee():s.role==="fund"?le():s.role==="platform"?oe():s.role==="settlement"?ve():Qt()}function et(t){const e=s.activeModuleByRole[s.role];return t.some(a=>a.target===e)?e:t[0]?.target||""}function Kt(){const t=tt[s.role]||[],e=et(t);return t.find(a=>a.target===e)?.label||"Overview"}function Vt(){const t=et(tt[s.role]||[]);return`/htp/${[s.role,t].filter(Boolean).join("/")}`}function gt(){const t=J.find(e=>e.id===s.role)||J[0];return`<div class="route-trail" aria-label="当前路径">
    <span>HTP</span>
    <span>${n(t.label)}</span>
    <span>${n(Kt())}</span>
    <code>${n(Vt())}</code>
  </div>`}function S(t=[]){return`<section class="workbench-meta" aria-label="工作台状态">
    ${[...[{label:"机构",value:kt[s.role]||"HTP Institution"},{label:"权限",value:s.role==="platform"?"Senior admin":s.role==="settlement"?"Clearing owner":"Institution operator"},{label:"数据",value:"Mock API ready"},{label:"日期归属",value:"Natural day HKT"}],...t].slice(0,6).map(a=>`<div>
      <span>${n(a.label)}</span>
      <strong>${n(a.value)}</strong>
    </div>`).join("")}
  </section>`}function E(t,e,a,i=""){return`<div class="page-head">
    <div>
      <p class="eyebrow">${n(t)}</p>
      <h1>${n(e)}</h1>
      ${gt()}
      <p class="page-subtitle">${n(a)}</p>
    </div>
    <div class="filter-row">
      ${Mt()}
      ${i}
    </div>
  </div>`}function Mt(){return`<div class="asset-tabs" role="tablist" aria-label="资产类型">
    ${dt.map(t=>{const e=t.id==="all"?A.length:A.filter(a=>a.type===t.id).length;return`<button class="${s.assetFilter===t.id?"active":""}" data-action="asset-tab" data-asset-tab="${t.id}" role="tab" aria-selected="${s.assetFilter===t.id?"true":"false"}">
        <span>${t.label}</span><span class="tab-count">${e}</span>
      </button>`}).join("")}
  </div>`}function bt(t,e,a,i,l){return`<div class="submodule-tabs" role="tablist" aria-label="${n(t)}">
    ${a.map(r=>`<button class="${e===r.id?"active":""}" data-action="${n(i)}" data-${l}="${n(r.id)}" role="tab" aria-selected="${e===r.id?"true":"false"}">
      <span>${n(r.label)}</span>
      ${r.count!==void 0?`<em>${n(r.count)}</em>`:""}
    </button>`).join("")}
  </div>`}function D(t){return`<div class="kpi-grid">
    ${t.map(e=>`<div class="kpi">
      <span>${n(e.label)}${e.tag?`<em>${n(e.tag)}</em>`:""}</span>
      <strong>${n(e.value)}</strong>
      <em>${n(e.detail)}</em>
    </div>`).join("")}
  </div>`}function H(t){return`<section class="context-bar" aria-label="当前工作上下文">
    ${t.map(e=>`<div class="context-item ${e.tone||""}">
      <span>${n(e.label)}</span>
      <strong>${n(e.value)}</strong>
      ${e.detail?`<em>${n(e.detail)}</em>`:""}
    </div>`).join("")}
  </section>`}function q(t){const e=et(t);return`<nav class="module-nav" aria-label="工作台模块">
    ${t.map(a=>`<button class="${a.target===e?"active":""}" data-action="jump-panel" data-target-panel="${n(a.target)}">
      <span>${n(a.label)}</span>
      ${a.badge?`<em>${n(a.badge)}</em>`:""}
    </button>`).join("")}
  </nav>`}function Pt(){const t=[["自动初审","机构编码、邮箱、文件格式校验通过"],["平台复审","合规团队核查 SFC / KYB 材料"],["监管复核","高风险角色可选监管复核"],["权限激活","按角色分配模块权限并通知管理员"]];return`${mt("System Access","登录、机构入驻与权限激活","V1.0 的登录/注册/机构入驻不能丢；2.0 额外加入基金机构类型，仍按机构资质、MFA、子账号和权限精准管控。",'<button class="ghost-btn" data-action="submit-onboarding">提交入驻申请</button>')}
  ${S([{label:"入驻状态",value:`${s.onboardingStep}/4`},{label:"MFA",value:"Required"}])}
  ${D([{label:"审核链路",value:"3-Step",detail:"系统初审 / 平台复审 / 监管复核可选"},{label:"暂存有效期",value:"7 天",detail:"超时提示重新填写"},{label:"验证码",value:"15m",detail:"每手机号每日 5 次"},{label:"账号锁定",value:"5 次",detail:"连续错误密码触发锁定"}])}
  ${H([{label:"当前步骤",value:`${s.onboardingStep}/4`,detail:s.onboardingStep>=4?"权限激活":"入驻处理中",tone:s.onboardingStep>=4?"good":"warn"},{label:"协议状态",value:s.agreementsAccepted?"已确认":"未确认",detail:"提交前必填",tone:s.agreementsAccepted?"good":"danger"},{label:"草稿",value:s.onboardingDraftSavedAt||"未保存",detail:"7 天有效"},{label:"子账号",value:`${U.length}`,detail:"最小权限分配"}])}
  ${q([{label:"入驻表单",target:"onboarding-form",badge:"MFA"},{label:"资质进度",target:"qualification-upload",badge:`${s.onboardingStep}/4`},{label:"登录安全",target:"login-security",badge:"V1"},{label:"子账号",target:"subaccounts",badge:String(U.length)}])}
  <div class="screen-grid">
    <div class="stack">
      <section class="panel" data-panel="onboarding-form">
        <div class="panel-head">
          <div>
            <h2>机构入驻注册</h2>
            <p>机构类型选择后不可修改，并决定资质清单、权限和业务入口。</p>
          </div>
          ${d("SFC 监管合规","good")}
        </div>
        <div class="panel-body">
          <div class="form-grid">
            <div class="field">
              <label>机构角色类型</label>
              <select>
                <option>对手方 / 投资者</option>
                <option>做市商</option>
                <option>发行方</option>
                <option>基金机构 / 资管计划</option>
              </select>
            </div>
            <div class="field">
              <label>统一社会信用代码 / LEI</label>
              <input value="549300HTP20260630" />
            </div>
            <div class="field">
              <label>机构全称</label>
              <input value="NorthBay Capital Management Limited" />
            </div>
            <div class="field">
              <label>注册地</label>
              <input value="Hong Kong SAR" />
            </div>
            <div class="field">
              <label>联系人姓名</label>
              <input value="Alex Chan" />
            </div>
            <div class="field">
              <label>企业邮箱</label>
              <input value="ops@northbay.example" />
            </div>
            <div class="field">
              <label>管理员账号</label>
              <input value="northbay-admin" />
            </div>
            <div class="field">
              <label>MFA 动态口令</label>
              <input value="••••••" />
            </div>
          </div>
          <div class="two-col" style="margin-top:12px;">
            <button class="switch-row" data-action="toggle-field" data-field-name="rememberPassword" type="button">
              <span><strong>记住密码 7 天</strong><br /><small class="muted">异常登录仍会弹窗提醒管理员。</small></span>
              <span class="toggle ${s.rememberPassword?"on":""}"><span></span></span>
            </button>
            <button class="switch-row" data-action="toggle-field" data-field-name="agreementsAccepted" type="button">
              <span><strong>协议三项已勾选</strong><br /><small class="muted">服务协议、隐私政策、风险告知书缺一不可。</small></span>
              <span class="toggle ${s.agreementsAccepted?"on":""}"><span></span></span>
            </button>
          </div>
          <div class="row-actions">
            <button class="ghost-btn" data-action="draft-onboarding">保存草稿</button>
            <button class="btn" data-action="submit-onboarding" ${s.agreementsAccepted?"":"disabled"}>提交注册并进入资质上传</button>
          </div>
          ${s.onboardingDraftSavedAt?`<p class="inline-note success-note">草稿已保存：${n(s.onboardingDraftSavedAt)} HKT。</p>`:""}
          ${s.agreementsAccepted?"":'<p class="disabled-reason">请先确认服务协议、隐私政策和风险告知书。</p>'}
        </div>
      </section>
      <section class="panel" data-panel="qualification-upload">
        <div class="panel-head">
          <div>
            <h2>资质上传与审核进度</h2>
            <p>PDF/JPG/PNG，单文件不超过 10MB；驳回后展示原因并允许补正重提。</p>
          </div>
          <div class="row-actions">
            ${d(`当前 ${s.onboardingStep}/4`,s.onboardingStep>=4?"good":"warn")}
            <button class="ghost-btn" data-action="upload-qualification">上传资质</button>
          </div>
        </div>
        <div class="panel-body">
          <div class="workflow-stepper" data-flow="onboarding" data-current-step="${s.onboardingStep}">
            ${t.map((e,a)=>{const i=a+1,l=i<s.onboardingStep?"已完成":i===s.onboardingStep?"当前步骤":"待处理";return`<div class="step ${vt(i,s.onboardingStep)}" ${i===s.onboardingStep?'aria-current="step"':""}>
                <b>${i} ${n(e[0])}</b>
                <span>${n(e[1])}</span>
                <em>${n(l)}</em>
              </div>`}).join("")}
          </div>
          <div class="table-wrap" style="margin-top:12px;">
            <table>
              <thead><tr><th>资质文件</th><th>适用角色</th><th>状态</th><th>校验</th><th>操作</th></tr></thead>
              <tbody>
                ${pt.map(e=>`<tr>
                  <td>${n(e.name)}</td>
                  <td class="muted">${n(e.role)}</td>
                  <td>${d(e.status,e.status.includes("通过")||e.status.includes("上传")?"good":e.status.includes("补充")?"warn":"")}</td>
                  <td class="muted">${n(e.validation)}</td>
                  <td class="muted">${n(e.action)}</td>
                </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
    <aside class="rail">
      <section class="panel" data-panel="login-security">
        <div class="panel-head">
          <div><h2>登录安全</h2><p>V1.0 登录、找回、锁定和异常提醒。</p></div>
        </div>
        <div class="panel-body">
          <div class="stat-list">
            <div class="stat-line"><span>登录角色</span><strong>投资者 / Maker / Issuer / Fund / Platform</strong></div>
            <div class="stat-line"><span>密码复杂度</span><strong>12+ chars · MFA required</strong></div>
            <div class="stat-line"><span>失败锁定</span><strong>5 次连续错误</strong></div>
            <div class="stat-line"><span>找回密码</span><strong>手机 / 邮箱双通道</strong></div>
          </div>
          <p class="inline-note">首次登录子账号必须修改初始密码；异地登录弹窗提醒管理员。</p>
        </div>
      </section>
      <section class="panel" data-panel="subaccounts">
        <div class="panel-head">
          <div><h2>子账号管理</h2><p>按模块和操作权限分配，防止越权。</p></div>
        </div>
        <div class="panel-body">
          <div class="mini-list">
            ${U.map(e=>`<article class="queue-card">
              <header><strong>${n(e.name)}</strong>${d("启用","good")}</header>
              <p>${n(e.permission)}</p>
              <p class="inline-note">${n(e.state)}</p>
            </article>`).join("")}
          </div>
          <button class="btn" data-action="save-subaccount">新增子账号</button>
        </div>
      </section>
    </aside>
  </div>`}function mt(t,e,a,i=""){return`<div class="page-head">
    <div>
      <p class="eyebrow">${n(t)}</p>
      <h1>${n(e)}</h1>
      ${gt()}
      <p class="page-subtitle">${n(a)}</p>
    </div>
    <div class="filter-row">${i}</div>
  </div>`}function Ct(){const t=F.find(i=>i.file===s.v1Page)||F[0],e=`${It}v1/${t.file}`,a=[...new Set(F.map(i=>i.group))];return`${mt("V1.0 Original UI Code","1.0 全量功能基线","这里直接加载你给的 RFQ_market 1.0 静态 HTML 原页面，作为“1.0 功能一个都不少”的可访问基线；2.0 工作台在此基础上扩展基金和股票。",`<a class="ghost-btn" href="${n(e)}" target="_blank" rel="noreferrer">新窗口打开当前 V1 页面</a>`)}
  ${S([{label:"保留页面",value:`${F.length}`},{label:"预览文件",value:t.file}])}
  ${D([{label:"原始页面",value:`${F.length}`,detail:"登录、平台、发行人、做市商、买方、清算、票息、RWA"},{label:"V1 角色",value:"4",detail:"平台 / 发行人 / 做市商 / 买方"},{label:"保留方式",value:"原 HTML",detail:"复制到 public/v1，GitHub Pages 可直接访问"},{label:"2.0 扩展",value:"Fund + Stock",detail:"新工作台继续承载 2.0 PRD"}])}
  ${H([{label:"当前 V1 页面",value:t.label,detail:t.group,tone:"good"},{label:"保留模式",value:"原 HTML",detail:"不重写、不丢功能"},{label:"页面总数",value:`${F.length}`,detail:"直接可访问"},{label:"当前文件",value:t.file,detail:"public/v1"}])}
  ${q([{label:"V1 预览",target:"v1-preview",badge:t.group},{label:"页面地图",target:"v1-map",badge:`${F.length}`}])}
  <div class="screen-grid">
    <section class="panel" data-panel="v1-preview">
      <div class="panel-head">
        <div>
          <h2>${n(t.label)}</h2>
          <p>${n(t.file)} · ${n(t.required)}</p>
        </div>
        ${d(t.group,"good")}
      </div>
      <div class="legacy-frame-shell">
        <iframe class="legacy-frame" src="${n(e)}" title="${n(t.label)}"></iframe>
      </div>
    </section>
    <aside class="rail">
      <section class="panel" data-panel="v1-map">
        <div class="panel-head">
          <div><h2>V1.0 页面地图</h2><p>按原 IA 保留，不把功能揉没。</p></div>
        </div>
        <div class="panel-body">
          ${a.map(i=>`<div class="legacy-group">
            <h3>${n(i)}</h3>
            <div class="mini-list">
              ${F.filter(l=>l.group===i).map(l=>`<button class="quote-card ${s.v1Page===l.file?"best":""}" data-action="set-v1-page" data-v1-page="${n(l.file)}">
                <header><strong>${n(l.label)}</strong>${d("V1",s.v1Page===l.file?"good":"")}</header>
                <p>${n(l.required)}</p>
                <small class="muted">${n(l.file)}</small>
              </button>`).join("")}
            </div>
          </div>`).join("")}
        </div>
      </section>
    </aside>
  </div>`}function Qt(){return`${E("Investor / Counterparty","多资产市场、RFQ 与持仓","同一个工作台完成债券、基金、股票交易动作；所有不可用状态必须展示原因，基金赎回直接进入流动性队列和审批链路。",'<button class="ghost-btn" data-action="open-drawer" data-drawer="export">导出当前视图</button>')}
  ${S([{label:"钱包",value:"HKD 12.84M"},{label:"导出额度",value:"5 / natural day"}])}
  ${D([{label:"可用余额",value:"HKD 12.84M",detail:"锁定 HKD 1.36M · 额度 74%"},{label:"活跃询价",value:"3",detail:"最快报价 42s · 可撤销 3"},{label:"基金队列",value:"#318",detail:"大额赎回 82.4% · 待审批"},{label:"收益/股息",value:"HKD 184.2K",detail:"债息 + 股息待领取"}])}
  ${H([{label:"选中资产",value:k().code,detail:k().statusText,tone:g(k().status)},{label:"选中 RFQ",value:V().id,detail:`${V().responses}/${V().scope}`},{label:"当前资产层",value:dt.find(t=>t.id===s.assetFilter)?.label||"全部",detail:`${K().length} assets`},{label:"下一动作",value:at(k())?"查看禁用原因":"新建 RFQ",detail:"右侧动作栏"}])}
  ${q([{label:"市场",target:"market",badge:`${nt().length}`},{label:"RFQ / 比价",target:"active-rfq",badge:`${M().length}`},{label:"持仓",target:"holdings",badge:`${C.length}`},{label:"交易记录",target:"transactions",badge:`${R.length}`},{label:"结算权益",target:"investor-settlement-interest",badge:"V1"},{label:"账户/API",target:"investor-account-web3",badge:"KYC"},{label:"交易动作",target:"action-rail",badge:"CTA"}])}
  <div class="screen-grid">
    <div class="stack">
      ${xt()}
      ${Bt()}
      ${Lt()}
      ${Ut()}
      ${Et()}
      ${jt()}
    </div>
    <aside class="rail">
      ${Wt(k())}
    </aside>
  </div>`}function xt(){const t=nt(),e=[{id:"all",label:"全部状态",count:K().length},{id:"tradable",label:"可交易",count:K().filter(a=>a.status==="normal").length},{id:"exception",label:"异常/暂停",count:K().filter(a=>["navException","priceLimit"].includes(a.status)).length},{id:"exit",label:"锁定/退出",count:K().filter(a=>["lockup","suspended"].includes(a.status)).length}];return`<section class="panel" data-panel="market">
    <div class="panel-head">
      <div>
        <h2>市场概览</h2>
        <p>价格、NAV/iNAV、状态、白名单和禁用原因保持在同一表格内。</p>
      </div>
      <span class="status-pill"><span class="status-dot"></span>${t.length} assets</span>
    </div>
    <div class="panel-body">
      <div class="table-toolbar">
        ${bt("资产状态",s.marketStatusFilter,e,"set-market-status","market-status")}
        <div class="table-tools">
          <button class="ghost-btn" data-action="open-drawer" data-drawer="export">导出</button>
          <button class="ghost-btn" data-action="open-drawer" data-drawer="rules">规则</button>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>资产</th>
              <th>状态</th>
              <th>价格 / NAV</th>
              <th>变动</th>
              <th>流动性</th>
              <th>准入范围</th>
              <th>交易入口</th>
            </tr>
          </thead>
          <tbody>
            ${t.length?t.map(a=>{const i=at(a);return`<tr class="selectable ${s.selectedAssetId===a.id?"selected":""}" data-action="select-asset" data-asset-id="${a.id}">
                <td>${m(a)}</td>
                <td>${d(a.statusText,g(a.status))}</td>
                <td class="num">${n(a.price)}</td>
                <td class="num ${a.change.startsWith("-")?"neg":"pos"}">${n(a.change)}</td>
                <td>${n(a.liquidity)}</td>
                <td>${n(a.whitelist)}</td>
                <td>
                  ${i?`<span class="risk-tag block">${n(i)}</span>`:'<span class="chip good">可交易</span>'}
                </td>
              </tr>`}).join(""):`<tr><td colspan="7"><div class="empty-state">
              <strong>没有匹配资产</strong>
              <span>请调整资产类型或搜索关键字；后端接入后这里会展示权限范围内的实时资产池。</span>
            </div></td></tr>`}
          </tbody>
        </table>
      </div>
      <div class="pagination-strip">
        <span>50 rows / page</span>
        <strong>${t.length?`1-${t.length}`:"0"} / ${nt().length}</strong>
      </div>
    </div>
  </section>`}function at(t){return t.status==="normal"?"":t.status==="lockup"?"卖出/RFQ 卖出锁定":t.status==="priceLimit"?"新 RFQ 暂停":t.status==="navException"?"NAV 异常暂停":t.status==="suspended"?"临停，仅退出":t.disabledReason||"当前不可交易"}function Bt(){const t=M();return`<section class="panel" data-panel="active-rfq">
    <div class="panel-head">
      <div>
        <h2>活跃 RFQ 与报价比较</h2>
        <p>保留 1.0 询价心智，2.0 增加基金 NAV 截止、股票价格限制和可撤销状态。</p>
      </div>
      <button class="ghost-btn" data-action="refresh-rfq-quotes" data-rfq-id="${n(s.selectedRfqId||t[0]?.id||"")}">刷新报价</button>
    </div>
    <div class="panel-body">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>RFQ</th>
              <th>资产</th>
              <th>方向/数量</th>
              <th>倒计时</th>
              <th>Maker 响应</th>
              <th>最优报价</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${t.map(e=>{const a=c(e.assetId);return`<tr class="selectable ${s.selectedRfqId===e.id?"selected":""}" data-action="select-rfq" data-rfq-id="${e.id}">
                <td class="num">${n(e.id)}</td>
                <td>${m(a)}</td>
                <td>${n(e.direction)} <span class="num">${u(e.quantity)}</span> ${n(e.unit)}</td>
                <td><span class="countdown">${n(e.countdown)}</span></td>
                <td><span class="num">${e.responses}</span> / ${n(e.scope)}</td>
                <td class="num">${n(e.best)}</td>
                <td>${d(e.statusText,g(e.status))}</td>
                <td>
                  <div class="row-actions">
                    <button class="link-btn" data-action="select-rfq" data-rfq-id="${e.id}">比价</button>
                    ${e.allowCancel?`<button class="danger-btn" data-action="cancel-rfq" data-rfq-id="${e.id}">撤销</button>`:'<span class="muted">不可撤销</span>'}
                  </div>
                </td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>
      ${ht(V())}
    </div>
  </section>`}function ht(t){const e=w.filter(a=>a.rfqId===t.id);return e.length?`<div class="toolbar" style="margin-top: 12px;">
    <div>
      <h3>${n(t.id)} 报价比较</h3>
      <p class="muted">费用承担：${n(t.feePayer)} · 成交后按资产类型进入清算。</p>
    </div>
    <span class="countdown">${n(t.countdown)}</span>
  </div>
  <div class="three-col">
    ${e.map(a=>`<article class="quote-card ${a.state==="best"?"best":a.state==="blocked"?"blocked":""}">
      <header>
        <strong>${n(a.maker)}</strong>
        ${a.state==="best"?d("Best","good"):a.state==="warn"?d("偏离预警","warn"):a.state==="blocked"?d("阻断","danger"):d("有效")}
      </header>
      <div class="stat-list">
        <div class="stat-line"><span>可成交量</span><strong>${u(a.amount)}</strong></div>
        <div class="stat-line"><span>价格 / NAV / YTM</span><strong>${n(a.value)}</strong></div>
        <div class="stat-line"><span>偏离</span><strong class="${a.deviation.startsWith("-")?"neg":"pos"}">${n(a.deviation)}</strong></div>
        <div class="stat-line"><span>有效期</span><strong>${n(a.valid)}</strong></div>
      </div>
      <p class="inline-note">${n(a.note)}</p>
      <button class="btn" data-action="quote-confirm-modal" data-quote-id="${a.id}" ${a.state==="blocked"?"disabled":""}>确认成交</button>
    </article>`).join("")}
  </div>`:'<div class="inline-note">当前 RFQ 暂无有效报价；超时后自动归档，并释放锁定资金或份额。</div>'}function Lt(){return`<section class="panel" data-panel="holdings">
    <div class="panel-head">
      <div>
        <h2>持仓与冻结原因</h2>
        <p>基金份额、股票锁定、RFQ 锁定和审批冻结必须直接可见。</p>
      </div>
    </div>
    <div class="panel-body table-wrap">
      <table>
        <thead>
          <tr>
            <th>资产</th>
            <th>总量</th>
            <th>可用</th>
            <th>冻结</th>
            <th>冻结原因</th>
            <th>市值 / P&L</th>
            <th>动作</th>
          </tr>
        </thead>
        <tbody>
          ${C.map(t=>{const e=c(t.assetId);return`<tr class="selectable" data-action="select-asset" data-asset-id="${e.id}">
              <td>${m(e)}</td>
              <td class="num">${u(t.total)}</td>
              <td class="num">${u(t.available)}</td>
              <td class="num">${u(t.frozen)}</td>
              <td>${t.reason==="-"?'<span class="muted">-</span>':`<span class="risk-tag">${n(t.reason)}</span>`}</td>
              <td><span class="num">${n(t.value)}</span><br /><span class="${t.pnl.startsWith("-")?"neg":"pos"}">${n(t.pnl)}</span></td>
              <td>${Ot(t,e)}</td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
  </section>`}function Ot(t,e){const a=at(e);return e.type==="fund"&&e.status==="normal"?`<div class="row-actions">
      <button class="link-btn" data-action="select-asset" data-asset-id="${e.id}">申购/赎回</button>
      <button class="link-btn" data-action="select-asset" data-asset-id="${e.id}">RFQ</button>
    </div>`:e.type==="bond"&&e.status==="normal"?`<div class="row-actions">
      <button class="link-btn" data-action="select-asset" data-asset-id="${e.id}">买卖/RFQ</button>
      <button class="link-btn" data-action="open-drawer" data-drawer="asset" data-asset-id="${e.id}">规则</button>
    </div>`:`<div class="row-actions">
    <button class="ghost-btn" data-action="open-drawer" data-drawer="asset" data-asset-id="${e.id}">查看原因</button>
    <span class="risk-tag block">${n(a||t.reason)}</span>
  </div>`}function Et(){return`<section class="panel" data-panel="investor-settlement-interest">
    <div class="panel-head">
      <div>
        <h2>结算与清算 / 利息领取</h2>
        <p>保留 V1.0 买方结算清算页：DvP、智能合约交收、交收进度、利息明细和凭证下载。</p>
      </div>
      <button class="ghost-btn" data-action="claim-interest">${s.interestClaimedAt?"再次同步利息":"立即领取利息"}</button>
    </div>
    <div class="panel-body">
      <div class="two-col">
        <article class="queue-card">
          <header><strong>待交收明细</strong>${d("区块确认中","warn")}</header>
          <div class="stat-list">
            <div class="stat-line"><span>TRD-20240315-081</span><strong>-49,125,000 HKD / +50M FV</strong></div>
            <div class="stat-line"><span>进度</span><strong>交易匹配 → 资金准备 → 券款对付 → 8/12 confirmations</strong></div>
            <div class="stat-line"><span>类型</span><strong>Web3 DvP</strong></div>
          </div>
        </article>
        <article class="queue-card">
          <header><strong>利息明细</strong>${d(s.interestClaimedAt?"已领取":"待领取",s.interestClaimedAt?"good":"warn")}</header>
          <div class="stat-list">
            <div class="stat-line"><span>INT-202403-003</span><strong>+125,000 HKD</strong></div>
            <div class="stat-line"><span>周期</span><strong>H1 2024 · HKGB 3.0 10/28</strong></div>
            <div class="stat-line"><span>方式</span><strong>${s.interestClaimedAt?`已同步 ${n(s.interestClaimedAt)}`:"智能合约自动派发"}</strong></div>
          </div>
        </article>
      </div>
      <div class="table-wrap" style="margin-top:12px;">
        <table>
          <thead><tr><th>凭证/记录</th><th>资产</th><th>义务</th><th>权益</th><th>状态</th><th>操作</th></tr></thead>
          <tbody>
            ${[["TRD-20240313-045","BABA 2.9 11/27","-9,655,000 HKD","+10,000,000 FV","处理交收","查看进度"],["TRD-20240314-112","USDC-BOND-01","-5,000,000 USDC","+5,000,000 FV","等待执行","查看进度"],["INT-202403-001","USDC-BOND-01","-","+50,000 USDC","已领取","查看详情"],["CONF-240618","HKTB4.20-2028","Trade confirmation","PDF","可下载","下载 PDF"]].map(t=>`<tr>${t.map((e,a)=>`<td class="${a===2||a===3?"num":""}">${a===4?d(e,e.includes("已")||e.includes("可")?"good":"warn"):n(e)}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  </section>`}function jt(){return`<section class="panel" data-panel="investor-account-web3">
    <div class="panel-head">
      <div>
        <h2>KYC 认证状态、钱包与 API</h2>
        <p>V1.0 买方个人中心：KYC、绑定钱包、API Key、邮件/Webhook/2FA 偏好。</p>
      </div>
      <button class="ghost-btn" data-action="save-preferences">保存偏好</button>
    </div>
    <div class="panel-body">
      <div class="three-col">
        <article class="queue-card">
          <header><strong>KYC 认证状态</strong>${d("Level 3 投资者","good")}</header>
          <p>机构：NorthBay Capital · SFC CE No. AHTP99 · API Active</p>
        </article>
        <article class="queue-card">
          <header><strong>链上资产与钱包</strong>${d("3 networks")}</header>
          <p>Ethereum 已验证 · Polygon 已验证 · Arbitrum 验签中，可重新验证或解绑。</p>
        </article>
        <article class="queue-card">
          <header><strong>API 密钥管理</strong>${d("Read / RFQ")}</header>
          <p>Algo-Trader-01 · Data-Sync · 支持撤销、生成新密钥、IP 白名单。</p>
        </article>
      </div>
      <div class="two-col" style="margin-top:12px;">
        <button class="switch-row" data-action="toggle-preference" data-preference="email" type="button"><span><strong>邮件通知</strong><br /><small class="muted">RFQ、成交、结算、风险审批</small></span><span class="toggle ${s.preferences.email?"on":""}"><span></span></span></button>
        <button class="switch-row" data-action="toggle-preference" data-preference="webhook" type="button"><span><strong>Webhook 推送</strong><br /><small class="muted">交易成交确认与清算状态</small></span><span class="toggle ${s.preferences.webhook?"on":""}"><span></span></span></button>
      </div>
      ${s.preferencesSavedAt?`<p class="inline-note success-note">偏好已保存：${n(s.preferencesSavedAt)} HKT。</p>`:""}
    </div>
  </section>`}function Ut(){return`<section class="panel" data-panel="transactions">
    <div class="panel-head">
      <div>
        <h2>交易与清算记录</h2>
        <p>覆盖买入、RFQ、申购、赎回和结算状态。</p>
      </div>
    </div>
    <div class="panel-body table-wrap">
      <table>
        <thead>
          <tr>
            <th>记录 ID</th>
            <th>资产</th>
            <th>类型</th>
            <th>数量/金额</th>
            <th>价格</th>
            <th>对手方</th>
            <th>结算</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          ${R.map(t=>{const e=c(t.assetId);return`<tr>
              <td class="num">${n(t.id)}</td>
              <td>${m(e)}</td>
              <td>${n(t.type)}</td>
              <td class="num">${n(t.qty)}</td>
              <td class="num">${n(t.price)}</td>
              <td>${n(t.cp)}</td>
              <td>${n(t.channel)}</td>
              <td>${d(t.status,g(t.status))}</td>
              <td><button class="link-btn" data-action="open-drawer" data-drawer="order" data-order-id="${n(t.id)}">详情</button></td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
  </section>`}function Wt(t){const e=C.find(i=>i.assetId===t.id),a=at(t);return`<section class="panel" data-panel="action-rail">
    <div class="panel-head">
      <div>
        <h2>交易动作</h2>
        <p>余额、额度和禁用原因贴近表单展示。</p>
      </div>
    </div>
    <div class="panel-body asset-detail">
      <div class="detail-header">
        ${m(t)}
        ${d(t.statusText,g(t.status))}
      </div>
      <div class="stat-list">
        <div class="stat-line"><span>结算方式</span><strong>${n(t.settlement)}</strong></div>
        <div class="stat-line"><span>白名单</span><strong>${n(t.whitelist)}</strong></div>
        <div class="stat-line"><span>可用余额</span><strong>HKD 12.84M</strong></div>
        <div class="stat-line"><span>持仓可用</span><strong>${e?u(e.available):"-"}</strong></div>
      </div>
      ${a?`<div class="disabled-reason">${n(t.disabledReason||a)}</div>`:'<div class="inline-note success-note">当前资产允许新交易；提交后会按 7x24 自然日规则清算。</div>'}
      ${Gt(t,a)}
      ${t.type==="fund"?Yt(t,e):""}
      ${t.type==="stock"?zt(t,e):""}
      ${t.type==="bond"?Xt(t):""}
    </div>
  </section>`}function Gt(t,e){return`<div>
    <div class="toolbar">
      <h3>新建 RFQ</h3>
      <span class="risk-tag">${B(t.type)} 独立阈值</span>
    </div>
    <div class="form-grid">
      <div class="field">
        <label>方向</label>
        <select data-field="rfqDirection">
          ${["买入","卖出"].map(a=>`<option ${s.rfqDirection===a?"selected":""}>${a}</option>`).join("")}
        </select>
      </div>
      <div class="field">
        <label>${t.type==="bond"?"面值":t.type==="stock"?"股数":"份额"}</label>
        <input class="num" data-field="rfqAmount" value="${n(s.rfqAmount)}" inputmode="decimal" />
      </div>
      <div class="field full">
        <label>费用承担</label>
        <select>
          <option>发起方承担</option>
          <option>双方各自承担</option>
        </select>
      </div>
    </div>
    <button class="btn" data-action="submit-rfq" ${e?"disabled":""}>发送 RFQ</button>
    ${e?`<p class="disabled-reason">${n(e)}</p>`:'<p class="inline-note">系统将验证白名单、可用余额/份额、原询价数量和资产状态。</p>'}
  </div>`}function Yt(t,e){const a=it(e,s.redemptionShares);return`<div class="two-col">
    <div>
      <h3>基金申购</h3>
      <div class="form-grid">
        <div class="field full">
          <label>申购金额 HKD</label>
          <input class="num" data-field="subscriptionAmount" value="${n(s.subscriptionAmount)}" inputmode="decimal" />
        </div>
        <div class="field">
          <label>费率</label>
          <input value="0.00%" readonly />
        </div>
        <div class="field">
          <label>预计份额</label>
          <input class="num" value="${u(Math.floor(Number(s.subscriptionAmount||0)/(t.nav||1)))}" readonly />
        </div>
      </div>
      <button class="btn" data-action="submit-subscription" ${t.status!=="normal"?"disabled":""}>确认申购</button>
    </div>
    <div>
      <h3>基金赎回</h3>
      <div class="form-grid">
        <div class="field full">
          <label>赎回份额</label>
          <input class="num" data-field="redemptionShares" value="${n(s.redemptionShares)}" inputmode="decimal" />
        </div>
      </div>
      <div class="row-actions">
        <button class="ghost-btn" data-action="all-redeem" ${e?"":"disabled"}>全部赎回</button>
        <button class="btn" data-action="submit-redemption" ${t.status!=="normal"?"disabled":""}>提交赎回</button>
      </div>
      <p class="${a.tone==="danger"?"disabled-reason danger-note":"inline-note"}">${n(a.text)}</p>
    </div>
  </div>`}function it(t,e){const a=Number(e||0);if(!t||!t.available)return{pct:0,tone:"danger",text:"没有可用份额，无法赎回。"};const i=a/t.available*100;return i>=95?{pct:i,tone:"danger",text:`赎回 ${i.toFixed(1)}%，需要超管二审；队列优先级高但仍受 7 自然日保留限制。`}:i>80?{pct:i,tone:"danger",text:`赎回 ${i.toFixed(1)}%，超过 80%，提交后进入大额赎回人工审批。`}:i>50?{pct:i,tone:"warn",text:`赎回 ${i.toFixed(1)}%，超过 50%，展示风险确认但不阻断。`}:{pct:i,tone:"good",text:`赎回 ${i.toFixed(1)}%，预计 T+1 自然日按官方 NAV 清算。`}}function zt(t,e){const a=t.status==="priceLimit"||t.status==="lockup";return`<div>
    <h3>股票风控</h3>
    <div class="stat-list">
      <div class="stat-line"><span>Free float</span><strong>${n(t.freeFloat)}</strong></div>
      <div class="stat-line"><span>大宗 RFQ 阈值</span><strong>5% / 80%</strong></div>
      <div class="stat-line"><span>持仓可卖</span><strong>${e?u(e.available):"-"}</strong></div>
    </div>
    ${a?`<p class="disabled-reason">${n(t.disabledReason)}</p>`:'<p class="inline-note">白名单机构可发起大宗 RFQ；超过 80% free float 进入超管审批。</p>'}
  </div>`}function Xt(t){return`<div>
    <h3>债券参数</h3>
    <div class="stat-list">
      <div class="stat-line"><span>YTM</span><strong>${n(t.ytm||"-")}</strong></div>
      <div class="stat-line"><span>DVP 清算</span><strong>确认后即时</strong></div>
      <div class="stat-line"><span>报价偏离</span><strong>20bp 警告 / 50bp 阻断</strong></div>
    </div>
  </div>`}function _t(){const t=M({includeCanceled:!1}),e=t.find(i=>i.id===s.selectedRfqId)||t[0]||V(),a=c(e.assetId);return`${E("Market Maker","跨资产 RFQ 接收与报价","做市商需要在倒计时内处理债券、基金、股票 RFQ；二次报价的金额和价格可编辑，并受库存与原询价上限校验。",'<button class="ghost-btn" data-action="open-drawer" data-drawer="makerRisk">报价权限</button>')}
  ${S([{label:"报价席位",value:"MM-Primary"},{label:"响应 SLA",value:"80%+"}])}
  ${D([{label:"今日成交",value:"HKD 42.6M",detail:"Hit ratio 38.4%"},{label:"平均响应",value:"41s",detail:"低于平台 80% 警戒线"},{label:"未回 RFQ",value:"7",detail:"连续 2 自然日无响应"},{label:"库存 P/L",value:"+HKD 98.5K",detail:"基金自动报价暂停 1 项"}])}
  ${H([{label:"当前 RFQ",value:e.id,detail:`${e.direction} ${u(e.quantity)} ${e.unit}`,tone:g(e.status)},{label:"报价资产",value:a.code,detail:a.statusText,tone:g(a.status)},{label:"可用库存",value:u(W.find(i=>i.assetId===a.id)?.available||0),detail:"受原询价上限约束"},{label:"报价模式",value:s.secondQuote?"二次报价":"首次报价",detail:"实时校验"}])}
  ${q([{label:"Incoming",target:"maker-incoming",badge:`${t.length}`},{label:"报价录入",target:"maker-quote-entry",badge:"CTA"},{label:"库存限制",target:"maker-inventory",badge:`${W.length}`},{label:"报价历史",target:"maker-quote-history",badge:"比较"},{label:"V1 连续性",target:"maker-v1-continuity",badge:"5"}])}
  <div class="screen-grid three">
    <section class="panel" data-panel="maker-incoming">
      <div class="panel-head">
        <div>
          <h2>Incoming RFQ</h2>
          <p>列表保留倒计时，不因切换表单丢失上下文。</p>
        </div>
      </div>
      <div class="panel-body">
        <div class="mini-list">
          ${t.length?t.map(i=>{const l=c(i.assetId);return`<button class="quote-card ${s.selectedRfqId===i.id?"best":""}" data-action="select-rfq" data-rfq-id="${i.id}">
              <header>
                <strong>${n(i.id)}</strong>
                <span class="countdown">${n(i.countdown)}</span>
              </header>
              ${m(l)}
              <div class="stat-line"><span>${n(i.direction)}</span><strong>${u(i.quantity)} ${n(i.unit)}</strong></div>
              <div class="stat-line"><span>响应</span><strong>${i.responses}/${n(i.scope)}</strong></div>
              ${d(i.statusText,g(i.status))}
            </button>`}).join(""):'<div class="inline-note">当前资产类型暂无待处理 RFQ；切换到“全部”可查看跨资产流。</div>'}
        </div>
      </div>
    </section>
    <section class="panel" data-panel="maker-quote-entry">
      <div class="panel-head">
        <div>
          <h2>报价录入</h2>
          <p>${n(e.id)} · ${n(a.code)} · ${n(a.name)}</p>
        </div>
        ${d(e.statusText,g(e.status))}
      </div>
      <div class="panel-body">
        ${Zt(e,a)}
      </div>
    </section>
    <aside class="panel" data-panel="maker-inventory">
      <div class="panel-head">
        <div>
          <h2>库存与限制</h2>
          <p>自动报价、锁定和价格限制需要明确原因。</p>
        </div>
      </div>
      <div class="panel-body">
        ${te()}
      </div>
    </aside>
  </div>
  <div class="panel" data-panel="maker-quote-history" style="margin-top: 14px;">
    <div class="panel-head">
      <div>
        <h2>报价历史与比较</h2>
        <p>多家 maker 报价并列展示，不合并成单一值。</p>
      </div>
    </div>
    <div class="panel-body">${ht(e)}</div>
  </div>
  ${Jt()}`}function Jt(){return`<section class="panel" data-panel="maker-v1-continuity" style="margin-top:14px;">
    <div class="panel-head">
      <div>
        <h2>V1.0 做市商功能连续性</h2>
        <p>报价与订单、债券持仓、认购发行债券、清算交收和个人中心，不从 2.0 中消失。</p>
      </div>
      ${d("5 original pages","good")}
    </div>
    <div class="panel-body">
      <div class="three-col">
        <article class="queue-card">
          <header><strong>报价与订单管理</strong>${d("可撤销")}</header>
          <p>近期报价单、成交订单、待结算订单和交易凭证并列展示；RFQ 过期后自动归档。</p>
          <div class="stat-list">
            <div class="stat-line"><span>有效报价</span><strong>18</strong></div>
            <div class="stat-line"><span>待结算</span><strong>HKD 9.84M</strong></div>
          </div>
        </article>
        <article class="queue-card">
          <header><strong>债券持仓管理</strong>${d("DV01")}</header>
          <p>净敞口、DV01、P/L、LCR 和持仓筛选保留，并接入基金和股票库存限制。</p>
          <div class="stat-list">
            <div class="stat-line"><span>净敞口</span><strong>HKD 62.4M</strong></div>
            <div class="stat-line"><span>DV01</span><strong>HKD 8,740</strong></div>
          </div>
        </article>
        <article class="queue-card">
          <header><strong>认购发行债券</strong>${d("一级市场","warn")}</header>
          <p>一级市场发行、申购记录、Order Book 和申购收益率保留；股票一级认购增加 30 自然日锁定。</p>
          <div class="stat-list">
            <div class="stat-line"><span>可认购</span><strong>3 assets</strong></div>
            <div class="stat-line"><span>申购收益率</span><strong>4.92% avg</strong></div>
          </div>
        </article>
      </div>
      <div class="two-col" style="margin-top:12px;">
        <article class="queue-card">
          <header><strong>清算交收</strong>${d("CCASS + DVP")}</header>
          <div class="stat-list">
            <div class="stat-line"><span>债券 DVP</span><strong>即时清算</strong></div>
            <div class="stat-line"><span>CCASS</span><strong>T+2 / 链上镜像</strong></div>
            <div class="stat-line"><span>异常接管</span><strong>3 retries then manual owner</strong></div>
          </div>
        </article>
        <article class="queue-card">
          <header><strong>个人与机构中心</strong>${d("合规","good")}</header>
          <div class="stat-list">
            <div class="stat-line"><span>机构信息</span><strong>Amber River Securities</strong></div>
            <div class="stat-line"><span>API 密钥与安全</span><strong>Quote-Write / Inventory-Read</strong></div>
            <div class="stat-line"><span>通知偏好</span><strong>RFQ / 成交 / 清算 / 风控</strong></div>
          </div>
        </article>
      </div>
    </div>
  </section>`}function Zt(t,e){const a=W.find(yt=>yt.assetId===e.id),i=Math.min(t.quantity,a?.available||0),l=Number(s.makerQuoteAmount||0),r=Number(s.makerQuoteValue||0),b=e.type==="fund"?e.nav||1:Number(String(e.price).replace(/[^\d.]/g,""))||1,h=(r-b)/b*100,v=Math.abs(h)>(e.type==="fund"?5:10),j=Math.abs(h)>(e.type==="fund"?2:5),st=l<=0||l>i,$t=st?`报价数量需大于 0 且不超过 ${u(i)}。`:v?`偏离 ${h.toFixed(2)}%，超过硬阻断阈值。`:j?`偏离 ${h.toFixed(2)}%，提交前需要二次确认。`:`偏离 ${h.toFixed(2)}%，在可报价范围内。`;return`<div class="asset-detail">
    <div class="detail-header">
      ${m(e)}
      <span class="countdown">${n(t.countdown)}</span>
    </div>
    <div class="stat-list">
      <div class="stat-line"><span>原询价数量</span><strong>${u(t.quantity)} ${n(t.unit)}</strong></div>
      <div class="stat-line"><span>可用库存</span><strong>${u(a?.available||0)}</strong></div>
      <div class="stat-line"><span>自动报价</span><strong>${a?.auto?"开启":"关闭"}</strong></div>
    </div>
    ${a&&!a.auto?`<p class="disabled-reason">${n(a.reason)}</p>`:""}
    <label class="switch-row">
      <span><strong>二次报价</strong><br /><small class="muted">金额和价格可编辑，实时校验库存与原询价上限。</small></span>
      <input class="sr-only" type="checkbox" data-field="secondQuote" ${s.secondQuote?"checked":""} />
      <span class="toggle ${s.secondQuote?"on":""}" data-action="toggle-field" data-field-name="secondQuote"><span></span></span>
    </label>
    <div class="form-grid">
      <div class="field">
        <label>报价数量</label>
        <input class="num" data-field="makerQuoteAmount" value="${n(s.makerQuoteAmount)}" inputmode="decimal" />
      </div>
      <div class="field">
        <label>${e.type==="bond"?"价格 / YTM":e.type==="fund"?"NAV 参考价":"股票价格"}</label>
        <input class="num" data-field="makerQuoteValue" value="${n(s.makerQuoteValue)}" inputmode="decimal" />
      </div>
    </div>
    <p class="${v||st?"disabled-reason danger-note":j?"disabled-reason":"inline-note success-note"}">${n($t)}</p>
    <button class="btn" data-action="submit-maker-quote" ${v||st||t.status==="blocked"?"disabled":""}>提交报价</button>
    ${t.status==="blocked"?`<p class="disabled-reason danger-note">${n(e.disabledReason||"当前 RFQ 被风控暂停。")}</p>`:""}
  </div>`}function te(){return`<div class="mini-list">
    ${W.map(t=>{const e=c(t.assetId);return`<article class="queue-card">
        <header>
          <strong>${n(e.code)}</strong>
          ${t.auto?d("Auto","good"):d("Manual","warn")}
        </header>
        ${m(e)}
        <div class="stat-list">
          <div class="stat-line"><span>可用</span><strong>${u(t.available)}</strong></div>
          <div class="stat-line"><span>Bid / Ask</span><strong>${n(t.bid)} / ${n(t.ask)}</strong></div>
          <div class="stat-line"><span>P/L</span><strong class="${t.pnl.startsWith("-")?"neg":"pos"}">${n(t.pnl)}</strong></div>
        </div>
        <p class="inline-note">${n(t.reason)}</p>
        <div class="row-actions">
          <button class="link-btn" data-action="select-maker-asset" data-asset-id="${e.id}">进入报价</button>
          <button class="link-btn" data-action="open-drawer" data-drawer="asset" data-asset-id="${e.id}">限制规则</button>
        </div>
      </article>`}).join("")}
  </div>`}function ee(){return`${E("Issuer","发行、一级认购、NAV 与公司行动","发行方 2.0 工作台把债券、基金、股票放入同一生命周期；一级认购只保留一个认购窗口结束时间。",'<button class="ghost-btn" data-action="open-drawer" data-drawer="allocation">指定参与方配额</button>')}
  ${S([{label:"发行批次",value:"Grey release"},{label:"披露通道",value:"Webhook + PDF"}])}
  ${D([{label:"在管资产",value:"HKD 284M",detail:"债券 3 · 基金 2 · 股票 2"},{label:"一级认购",value:"68%",detail:"3 家 maker 待确认"},{label:"NAV 待处理",value:"2",detail:"1 个需超管二审"},{label:"派息/披露",value:"5",detail:"最近截止 2026-07-02"}])}
  ${H([{label:"发行类型",value:B(s.issuerType),detail:s.issuerType==="stock"?"30 自然日锁定":s.issuerType==="fund"?"NAV / 份额台账":"YTM / DVP"},{label:"发行步骤",value:`${s.issuanceStep}/4`,detail:s.issuanceStep>=3?"平台审核中":"资料配置"},{label:"NAV 记录",value:`${T.length}`,detail:"含异常复核"},{label:"配额状态",value:s.allocationSavedAt?"已保存":"未保存",detail:"指定参与方"}])}
  ${q([{label:"发行入口",target:"issuer-issuance",badge:B(s.issuerType)},{label:"认购状态",target:"issuer-subscription",badge:`${Z.length}`},{label:"V1 发行方",target:"issuer-v1-continuity",badge:"4"},{label:"NAV 修正",target:"issuer-nav",badge:`${T.length}`},{label:"公司行动",target:"issuer-actions",badge:"Stock"},{label:"机构/API",target:"issuer-profile-center",badge:"API"}])}
  <div class="screen-grid">
    <div class="stack">
      <section class="panel" data-panel="issuer-issuance">
        <div class="panel-head">
          <div>
            <h2>多资产发行入口</h2>
            <p>资产类型决定价格字段：债券用利率/YTM，基金用 NAV，股票用发行价和锁定。</p>
          </div>
          <div class="segmented">
            ${["bond","fund","stock"].map(t=>`<button class="${s.issuerType===t?"active":""}" data-action="set-issuer-type" data-type="${t}">${B(t)}</button>`).join("")}
          </div>
        </div>
        <div class="panel-body">
          ${ne()}
        </div>
      </section>
      <section class="panel" data-panel="issuer-subscription">
        <div class="panel-head">
          <div>
            <h2>发行与认购状态</h2>
            <p>每一行必须显示资产代码和资产名称，便于审批对照。</p>
          </div>
        </div>
        <div class="panel-body table-wrap">
          <table>
            <thead><tr><th>资产</th><th>阶段</th><th>配额</th><th>唯一窗口结束</th><th>参与方</th><th>状态</th><th>操作</th></tr></thead>
            <tbody>
              ${Z.map(t=>{const e=c(t.assetId);return`<tr><td>${m(e)}</td><td>${n(t.stage)}</td><td class="num">${n(t.quota)}</td><td class="num">${n(t.windowEnd)}</td><td>${n(t.participant)}</td><td>${d(t.status,g(t.status))}</td><td><div class="row-actions"><button class="link-btn" data-action="open-drawer" data-drawer="allocation">配额</button><button class="link-btn" data-action="open-drawer" data-drawer="asset" data-asset-id="${e.id}">规则</button></div></td></tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </section>
      ${ae()}
    </div>
    <aside class="rail">
      <section class="panel" data-panel="issuer-nav">
        <div class="panel-head">
          <div>
            <h2>NAV 上传与修正</h2>
            <p>超过 +/-5% 自动进入人工审核和补偿链路。</p>
          </div>
        </div>
        <div class="panel-body">
          ${ie()}
          <div class="form-grid">
            <div class="field">
              <label>官方 NAV</label>
              <input value="1.0283" />
            </div>
            <div class="field">
              <label>iNAV</label>
              <input value="1.0291" />
            </div>
            <div class="field full">
              <label>修正理由</label>
              <textarea data-field="navCorrectionReason" placeholder="填写数据源、估值调整、影响订单和补偿方案">${n(s.navCorrectionReason)}</textarea>
            </div>
          </div>
          <div class="row-actions">
            <button class="ghost-btn" data-action="refresh-nav">手动估值刷新</button>
            <button class="btn" data-action="submit-nav-correction">提交 NAV 修正</button>
          </div>
        </div>
      </section>
      <section class="panel" data-panel="issuer-actions">
        <div class="panel-head"><h2>股票公司行动</h2></div>
        <div class="panel-body">
          <div class="stat-list">
            <div class="stat-line"><span>现金股息计划</span><strong>HKD 0.12 / share</strong></div>
            <div class="stat-line"><span>登记日</span><strong>2026-07-08</strong></div>
            <div class="stat-line"><span>重试策略</span><strong>失败重试 3 次</strong></div>
          </div>
          <p class="inline-note">除权除息后自动重算成本和 P/L；失败由发行方补偿并发送明细通知。</p>
        </div>
      </section>
      ${se()}
    </aside>
  </div>`}function ae(){return`<section class="panel" data-panel="issuer-v1-continuity">
    <div class="panel-head">
      <div>
        <h2>V1.0 发行方功能连续性</h2>
        <p>债券发行登记、二级市场监控、票息兑付和 RWA 通证化全部保留，并接入 2.0 多资产生命周期。</p>
      </div>
      ${d("V1 + 2.0","good")}
    </div>
    <div class="panel-body">
      <div class="two-col">
        <article class="queue-card">
          <header><strong>债券发行与登记</strong>${d("CMU + 合约部署")}</header>
          <div class="stat-list">
            <div class="stat-line"><span>待登记订单</span><strong>BOND-REG-20260630-07</strong></div>
            <div class="stat-line"><span>材料审核</span><strong>法律意见书 / 认购协议 / 风险揭示</strong></div>
            <div class="stat-line"><span>近期登记完成</span><strong>HKTB4.20-2028 · 2026-06-28</strong></div>
          </div>
        </article>
        <article class="queue-card">
          <header><strong>二级市场监控</strong>${d("实时","good")}</header>
          <div class="stat-list">
            <div class="stat-line"><span>成交量</span><strong>HKD 42.6M</strong></div>
            <div class="stat-line"><span>做市商覆盖</span><strong>6 / 8 active</strong></div>
            <div class="stat-line"><span>收益率曲线</span><strong>2Y 4.21% · 5Y 4.58%</strong></div>
          </div>
        </article>
        <article class="queue-card">
          <header><strong>票息兑付管理</strong>${d("资金划拨","warn")}</header>
          <div class="stat-list">
            <div class="stat-line"><span>下一兑付日程</span><strong>2026-07-02 · HKD 1.25M</strong></div>
            <div class="stat-line"><span>历史兑付</span><strong>12 / 12 completed</strong></div>
            <div class="stat-line"><span>RWA 智能合约派息</span><strong>Retry 0 / 3</strong></div>
          </div>
        </article>
        <article class="queue-card">
          <header><strong>RWA 资产通证化</strong>${d("ERC-3643","violet")}</header>
          <div class="stat-list">
            <div class="stat-line"><span>资产上链</span><strong>Warehouse Receipt Pool A</strong></div>
            <div class="stat-line"><span>合规通证合约</span><strong>身份白名单 / 转让限制</strong></div>
            <div class="stat-line"><span>通证资产库</span><strong>7 active · 2 pending review</strong></div>
          </div>
        </article>
      </div>
      <div class="table-wrap" style="margin-top:12px;">
        <table>
          <thead><tr><th>发行方任务</th><th>资产</th><th>V1 来源页</th><th>2.0 连接</th><th>状态</th></tr></thead>
          <tbody>
            ${[["登记发行材料","HKTB5.10-2031","债券发行与登记","资产生命周期 / 平台审批","待平台复审"],["监控二级成交","HKTB4.20-2028","发行人二级市场监控","RFQ / 做市覆盖 / 流动性","正常"],["处理票息兑付","HKGB 3.0 10/28","票息兑付管理","清算中心 / 智能合约派息","资金准备"],["RWA 通证化","RWAMM-P","发行人RWA资产通证化","NAV / 合规通证 / 白名单","合约审查"]].map(t=>`<tr>${t.map((e,a)=>`<td class="${a===1?"num":""}">${a===4?d(e,e==="正常"?"good":"warn"):n(e)}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  </section>`}function se(){return`<section class="panel" data-panel="issuer-profile-center">
    <div class="panel-head">
      <div><h2>机构信息、API 与通知</h2><p>V1.0 发行人个人中心延续为 2.0 机构控制区。</p></div>
    </div>
    <div class="panel-body">
      <div class="stat-list">
        <div class="stat-line"><span>机构信息</span><strong>Harbour Fund Management · SFC Type 9</strong></div>
        <div class="stat-line"><span>API 密钥与安全</span><strong>Issuer-Disclosure / NAV-Upload</strong></div>
        <div class="stat-line"><span>IP 白名单</span><strong>3 active · quarterly review</strong></div>
        <div class="stat-line"><span>系统通知</span><strong>票息 / NAV / 审批 / Webhook</strong></div>
      </div>
    </div>
  </section>`}function ne(){const t=s.issuerType==="fund",e=s.issuerType==="stock",a=[["资产资料","代码、名称、发行方、文件"],["风控参数","白名单、阈值、锁定"],["平台审核","高管/超管审批"],["上线交易","二级市场与清算"]];return`<div class="workflow-stepper" data-flow="issuance" data-current-step="${s.issuanceStep}">
    ${a.map((i,l)=>{const r=l+1,b=r<s.issuanceStep?"已完成":r===s.issuanceStep?"当前步骤":"待处理";return`<div class="step ${vt(r,s.issuanceStep)}" ${r===s.issuanceStep?'aria-current="step"':""}>
        <b>${r} ${n(i[0])}</b>
        <span>${n(i[1])}</span>
        <em>${n(b)}</em>
      </div>`}).join("")}
  </div>
  <div class="form-grid" style="margin-top: 12px;">
    <div class="field">
      <label>资产代码</label>
      <input value="${t?"HKINC-B":e?"HKC099":"HKTB5.10-2031"}" />
    </div>
    <div class="field">
      <label>资产名称</label>
      <input value="${t?"HK Income Fund B":e?"HashKey Data Equity":"HashKey Treasury Bond 2031"}" />
    </div>
    <div class="field">
      <label>${t?"确认周期":e?"发行价 HKD":"票息 / YTM"}</label>
      <input value="${t?"T+1 自然日":e?"8.20":"5.10% / 5.24%"}" />
    </div>
    <div class="field">
      <label>认购窗口结束时间</label>
      <input value="2026-07-11 17:00 HKT" />
    </div>
    <div class="field full">
      <label>指定参与方与配额</label>
      <textarea>Amber River Securities: HKD 20,000,000
HK Digital Markets: HKD 15,000,000
BluePeak Liquidity: HKD 10,000,000</textarea>
    </div>
  </div>
  ${e?'<p class="disabled-reason">一级认购股份默认锁定 30 自然日；后端必须拒绝卖出和 RFQ 卖出 API。</p>':""}
  ${t?'<p class="inline-note">基金产品上线后自动生成资产台账、估值/NAV、申赎压力和监管报表入口。</p>':""}
  ${s.allocationSavedAt?`<p class="inline-note success-note">指定参与方配额已保存：${n(s.allocationSavedAt)} HKT，将随发行审批一并提交。</p>`:""}
  <button class="btn" data-action="submit-issuance">提交发行审批</button>`}function ie(){return`<div class="mini-list" style="margin-bottom: 12px;">
    ${T.map(t=>{const e=c(t.assetId);return`<article class="queue-card ${t.status.includes("二审")?"blocked":""}">
        <header>
          <strong>${n(e.code)}</strong>
          ${d(t.status,g(t.status))}
        </header>
        <div class="stat-list">
          <div class="stat-line"><span>官方 NAV</span><strong>${n(t.official)}</strong></div>
          <div class="stat-line"><span>iNAV</span><strong>${n(t.iNav)}</strong></div>
          <div class="stat-line"><span>偏离</span><strong class="${t.deviation.startsWith("+")&&Number(t.deviation.replace("%",""))>5?"neg":"pos"}">${n(t.deviation)}</strong></div>
          <div class="stat-line"><span>数据源</span><strong>${n(t.source)}</strong></div>
          <div class="stat-line"><span>时间</span><strong>${n(t.time)}</strong></div>
        </div>
      </article>`}).join("")}
  </div>`}function le(){return`${E("Fund Institution","基金机构估值、台账与流动性压力","基金机构是 2.0 新增核心工作台，连接底层债券持仓、NAV 披露、申赎压力、建议交易和监管报告。",'<button class="ghost-btn" data-action="export-report">导出监管报告</button>')}
  ${S([{label:"估值源",value:"Manager API"},{label:"NAV cut",value:"T+0 HKT"}])}
  ${D([{label:"基金债券总资产",value:"HKD 186.4M",detail:"同步债券 28 支 · 现金 12.2M"},{label:"最新 NAV",value:"1.0283",detail:"iNAV 1.0291 · 5m 刷新"},{label:"集中度",value:"18.6%",detail:"单一发行方上限 25%"},{label:"大额申赎",value:"6",detail:"赎回压力 HKD 9.2M"}])}
  ${H([{label:"估值时点",value:s.lastNavRefreshAt||"09:55 HKT",detail:"iNAV 5m"},{label:"队列占用",value:"31%",detail:"L2 流动性提示",tone:"warn"},{label:"报表",value:`${G.filter(t=>t.owner==="fund").length}`,detail:"本次导出申请"},{label:"风控状态",value:"3/4 通过",detail:"兑付对账待核",tone:"warn"}])}
  ${q([{label:"资产台账",target:"fund-ledger",badge:"NAV"},{label:"申赎压力",target:"fund-pressure",badge:"31%"},{label:"产品风控",target:"fund-full-coverage",badge:"2.0"},{label:"NAV 趋势",target:"fund-nav-trend",badge:"90D"},{label:"合规报告",target:"fund-reports",badge:"Export"}])}
  <div class="screen-grid">
    <div class="stack">
      <section class="panel" data-panel="fund-ledger">
        <div class="panel-head">
          <div><h2>资产台账与估值</h2><p>估值刷新后生成 NAV 记录并归档。</p></div>
          <button class="ghost-btn" data-action="refresh-nav">刷新估值</button>
        </div>
        <div class="panel-body table-wrap">
          <table>
            <thead><tr><th>底层资产</th><th>面值/份额</th><th>市值</th><th>久期</th><th>评级</th><th>估值源</th><th>状态</th></tr></thead>
            <tbody>
              ${[["HKTB4.20-2028","HKD 42,000,000","HKD 42,579,600","2.1Y","A","Bond EDX 1s","正常"],["HBRLG4.90-2027","HKD 18,000,000","HKD 17,956,800","1.2Y","BBB","暂停沿用前收","需复核"],["Cash HKD","HKD 12,200,000","HKD 12,200,000","-","-","Bank API","正常"]].map(t=>`<tr>${t.slice(0,6).map((e,a)=>`<td class="${a===1||a===2?"num":""}">${n(e)}</td>`).join("")}<td>${d(t[6],t[6]==="正常"?"good":"warn")}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </section>
      <section class="panel" data-panel="fund-pressure">
        <div class="panel-head"><div><h2>申赎压力与建议交易</h2><p>流动性队列纳入赎回、交易卖出、RFQ 卖出和 7 自然日 pending。</p></div></div>
        <div class="panel-body">
          <div class="three-col">
            <article class="queue-card">
              <header><strong>队列占用</strong>${d("31%","warn")}</header>
              <div class="progress warn"><span style="width:31%"></span></div>
              <p class="inline-note">L2 流动性提示，自动报价暂停，按持仓比例分配清算额度。</p>
            </article>
            <article class="queue-card">
              <header><strong>最大保留</strong>${d("7 自然日")}</header>
              <p>超过保留时间自动取消、返还份额和期间收益，并减免费用。</p>
            </article>
            <article class="queue-card">
              <header><strong>建议交易</strong>${d("3 笔")}</header>
              <p>卖出 HKTB4.20-2028 HKD 6M；买入短久期现金替代。</p>
            </article>
          </div>
        </div>
      </section>
      ${de()}
    </div>
    <aside class="rail">
      <section class="panel" data-panel="fund-nav-trend">
        <div class="panel-head"><div><h2>NAV 趋势</h2><p>7 / 30 / 90 自然日 hover 视图。</p></div></div>
        <div class="panel-body">
          <div class="stat-list">
            <div class="stat-line"><span>7D</span><strong class="pos">+0.28%</strong></div>
            <div class="stat-line"><span>30D</span><strong class="pos">+1.42%</strong></div>
            <div class="stat-line"><span>90D</span><strong class="pos">+3.84%</strong></div>
            <div class="stat-line"><span>NAV 成功率</span><strong>99.7%</strong></div>
          </div>
          <p class="inline-note">低于 99% 自动触发风险看板预警；NAV 修正进入双人审核并保留 5 年日志。</p>
        </div>
      </section>
      <section class="panel" data-panel="fund-reports">
        <div class="panel-head"><h2>合规与报告</h2></div>
        <div class="panel-body mini-list">
          ${["基金 NAV 报告","份额变动报告","申赎流水","大额赎回专项报告","小时级流动性增量报告"].map(t=>`<div class="report-row">
            <span>${n(t)}</span>
            <strong>带水印导出</strong>
            <button class="link-btn" data-action="export-report" data-report-type="${n(t)}">导出</button>
          </div>`).join("")}
        </div>
      </section>
    </aside>
  </div>`}function de(){return`<section class="panel" data-panel="fund-full-coverage">
    <div class="panel-head">
      <div>
        <h2>基金产品管理、净值披露与风控</h2>
        <p>2.0 新增基金机构角色不只做 NAV，也要覆盖产品、资产导入、披露、压力测试、合规和兑付对账。</p>
      </div>
      ${d("Fund 2.0","good")}
    </div>
    <div class="panel-body">
      <div class="two-col">
        <article class="queue-card">
          <header><strong>基金产品管理</strong>${d("开放申赎")}</header>
          <p>基金类型、确认周期、申赎费率、最小金额、白名单和产品状态配置。</p>
          <div class="stat-list">
            <div class="stat-line"><span>产品</span><strong>HKLQD-A / RWAMM-P / HKINC-B</strong></div>
            <div class="stat-line"><span>最小申购</span><strong>HKD 100 · configurable</strong></div>
          </div>
        </article>
        <article class="queue-card">
          <header><strong>资产台账管理</strong>${d("导入校验")}</header>
          <p>同步债券持仓、现金、非标资产和负债，生成可审计台账。</p>
          <div class="stat-list">
            <div class="stat-line"><span>导入批次</span><strong>LEDGER-20260630-03</strong></div>
            <div class="stat-line"><span>校验</span><strong>市值 / 久期 / 评级 / 现金余额</strong></div>
          </div>
        </article>
        <article class="queue-card">
          <header><strong>估值净值核算</strong>${d("5m iNAV")}</header>
          <p>官方 NAV 用于申赎和 NAV 成交；iNAV 只用于盘中参考和偏离预警。</p>
          <div class="stat-list">
            <div class="stat-line"><span>NAV 成功率</span><strong>99.7%</strong></div>
            <div class="stat-line"><span>异常阈值</span><strong>+/-5% 人工审核</strong></div>
          </div>
        </article>
        <article class="queue-card">
          <header><strong>净值披露与报表</strong>${d("水印导出")}</header>
          <p>基金 NAV 报告、份额变动、申赎流水、大额赎回专项和小时级流动性增量报告。</p>
          <div class="stat-list">
            <div class="stat-line"><span>净值披露</span><strong>2026-06-30 09:55 HKT</strong></div>
            <div class="stat-line"><span>监管补发</span><strong>失败 3 次后次日全量补发</strong></div>
          </div>
        </article>
      </div>
      <div class="table-wrap" style="margin-top:12px;">
        <table>
          <thead><tr><th>风控项</th><th>指标</th><th>当前值</th><th>阈值</th><th>动作</th></tr></thead>
          <tbody>
            ${[["久期压力测试","Parallel +100bp","-HKD 1.84M","Risk budget 2.5M","通过"],["集中度监控","单一发行方","18.6%","25%","通过"],["合规豁免申请","高净值大额例外","2 pending","月度额度复核","待审批"],["资金额兑付对账","赎回现金 vs 份额扣减","HKD 9.2M","100% 对账","待核"]].map(t=>`<tr>${t.map((e,a)=>`<td class="${a===2||a===3?"num":""}">${a===4?d(e,e==="通过"?"good":"warn"):n(e)}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  </section>`}function re(){return s.approvalFilter==="all"?p:p.filter(t=>s.approvalFilter==="severe"?t.severity==="severe":s.approvalFilter==="redemption"?t.type.includes("赎回"):s.approvalFilter==="nav"?t.type.includes("NAV"):s.approvalFilter==="lifecycle"?t.type.includes("停")||t.type.includes("发行"):!0)}function oe(){const t=re(),e=[{id:"all",label:"全部",count:p.length},{id:"severe",label:"超管/高危",count:p.filter(a=>a.severity==="severe").length},{id:"redemption",label:"赎回",count:p.filter(a=>a.type.includes("赎回")).length},{id:"nav",label:"NAV",count:p.filter(a=>a.type.includes("NAV")).length},{id:"lifecycle",label:"发行/生命周期",count:p.filter(a=>a.type.includes("停")||a.type.includes("发行")).length}];return`${E("Platform Governance","审批、风险参数、白名单与紧急开关","平台控制面把机构资格、资产生命周期、NAV 异常、大额赎回、股票大宗 RFQ、导出审批和应急开关联动管理。",'<button class="ghost-btn" data-action="open-drawer" data-drawer="audit">审计日志</button>')}
  ${S([{label:"SLA",value:"Max 3 days"},{label:"留痕",value:"5 years"}])}
  ${D([{label:"待审批",value:String(p.filter(a=>a.status.includes("待")).length),detail:"超管二审 2 · 高管 2"},{label:"NAV 异常",value:"1",detail:"3 自然日修复倒计时"},{label:"导出申请",value:"4",detail:"水印+永久日志"},{label:"清算成功率",value:"99.2%",detail:"链上镜像重试 1 项"}])}
  ${H([{label:"当前审批",value:N().id,detail:N().type,tone:g(N().status)},{label:"审批层级",value:N().level,detail:N().sla},{label:"应急开关",value:Object.values(s.emergency).filter(Boolean).length+"/4",detail:"可独立熔断"},{label:"处理意见",value:s.approvalOpinion.trim()?"已填写":"必填",detail:"提交前校验",tone:s.approvalOpinion.trim()?"good":"warn"}])}
  ${q([{label:"审批队列",target:"platform-approvals",badge:`${p.length}`},{label:"审批决策",target:"approval-detail",badge:N().status},{label:"应急开关",target:"platform-switches",badge:`${Object.values(s.emergency).filter(Boolean).length}/4`},{label:"生命周期",target:"platform-lifecycle",badge:`${A.length}`},{label:"治理全量",target:"platform-v1-continuity",badge:"V1+2"},{label:"风险参数",target:"platform-risk",badge:"Rules"}])}
  <div class="screen-grid">
    <div class="stack">
      <section class="panel" data-panel="platform-approvals">
        <div class="panel-head">
          <div><h2>审批队列</h2><p>所有决策必须填写 handling opinion，超时自动拒绝并释放冻结。</p></div>
        </div>
        <div class="panel-body">
          <div class="table-toolbar">
            ${bt("审批类型",s.approvalFilter,e,"set-approval-filter","approval-filter")}
            <div class="table-tools">
              <button class="ghost-btn" data-action="open-drawer" data-drawer="audit">审计</button>
            </div>
          </div>
          <div class="mini-list">
            ${t.length?t.map(a=>ue(a)).join(""):'<div class="empty-state"><strong>当前过滤无审批</strong><span>切换过滤条件查看其他审批类型。</span></div>'}
          </div>
        </div>
      </section>
      <section class="panel" data-panel="platform-lifecycle">
        <div class="panel-head"><div><h2>资产生命周期</h2><p>待上市、正常、临停、永久摘牌和退出模式。</p></div></div>
        <div class="panel-body table-wrap">
          <table>
            <thead><tr><th>资产</th><th>当前状态</th><th>新订单</th><th>既有订单</th><th>平台动作</th></tr></thead>
            <tbody>
              ${A.map(a=>`<tr>
                <td>${m(a)}</td>
                <td>${d(a.statusText,g(a.status))}</td>
                <td>${a.status==="normal"?d("允许","good"):d("禁用","danger")}</td>
                <td>${a.status==="suspended"?"保留并恢复后继续":a.status==="navException"?"批量解锁未定价单":"按规则清算"}</td>
                <td><button class="link-btn" data-action="open-drawer" data-drawer="asset" data-asset-id="${a.id}">查看规则</button></td>
              </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </section>
      ${ce()}
    </div>
    <aside class="rail">
      ${pe()}
      <section class="panel" data-panel="platform-switches">
        <div class="panel-head"><div><h2>应急开关</h2><p>RFQ、报价、清算和链上交互独立控制。</p></div></div>
        <div class="panel-body">
          ${Object.entries({rfq:"RFQ 发起",quote:"Maker 报价",clearing:"清算指令",onchain:"链上镜像"}).map(([a,i])=>`<button class="switch-row" data-action="toggle-switch" data-switch="${a}">
            <span><strong>${i}</strong><br /><small class="muted">${s.emergency[a]?"开启，所有操作留痕":"关闭，新请求进入缓存或拒绝"}</small></span>
            <span class="toggle ${s.emergency[a]?"on":""}"><span></span></span>
          </button>`).join("")}
        </div>
      </section>
      <section class="panel" data-panel="platform-risk">
        <div class="panel-head"><h2>风险参数变更</h2></div>
        <div class="panel-body">
          <div class="form-grid">
            <div class="field">
              <label>基金 RFQ 警告/阻断</label>
              <input value="+/-2% / +/-5%" />
            </div>
            <div class="field">
              <label>赎回审批</label>
              <input value="80% / 95%" />
            </div>
            <div class="field">
              <label>股票大宗 RFQ</label>
              <input value="5% / 80%" />
            </div>
            <div class="field">
              <label>白名单有效期</label>
              <input value="365 自然日" />
            </div>
          </div>
          <p class="inline-note">底层系统参数修改需要两名超管复核。</p>
          ${s.riskChangeSubmittedAt?`<p class="inline-note success-note">参数变更审批已提交：${n(s.riskChangeSubmittedAt)} HKT。</p>`:""}
          <button class="btn" data-action="submit-risk-change">提交参数变更审批</button>
        </div>
      </section>
    </aside>
  </div>`}function ce(){return`<section class="panel" data-panel="platform-v1-continuity">
    <div class="panel-head">
      <div>
        <h2>平台治理全量控制面</h2>
        <p>V1.0 平台方能力加上 2.0 基金/股票风险：机构、权限、封禁、审计、对账和报表必须同屏可追溯。</p>
      </div>
      ${d("Governance","good")}
    </div>
    <div class="panel-body">
      <div class="two-col">
        <article class="queue-card">
          <header><strong>多签钱包配置</strong>${d("2 / 3")}</header>
          <p>资金划拨、NAV 补偿、RWA 派息和链上镜像开关都绑定多签策略。</p>
          <div class="stat-list">
            <div class="stat-line"><span>签名人</span><strong>Ops Lead / Risk Head / Super Admin</strong></div>
            <div class="stat-line"><span>阈值</span><strong>HKD 1M 以上强制多签</strong></div>
          </div>
        </article>
        <article class="queue-card">
          <header><strong>机构准入 KYC/BP 终审</strong>${d("3 pending","warn")}</header>
          <p>KYB、SFC 牌照、业务计划、受益所有人和季度复核集中处理。</p>
          <div class="stat-list">
            <div class="stat-line"><span>系统初审</span><strong>12 passed</strong></div>
            <div class="stat-line"><span>平台复审</span><strong>3 waiting</strong></div>
          </div>
        </article>
        <article class="queue-card">
          <header><strong>机构角色与权限分配</strong>${d("RBAC")}</header>
          <p>投资者、做市商、发行方、基金机构和平台管理员按模块授权。</p>
          <div class="stat-list">
            <div class="stat-line"><span>权限模板</span><strong>8 roles · 42 actions</strong></div>
            <div class="stat-line"><span>首次登录</span><strong>强制改密 + MFA</strong></div>
          </div>
        </article>
        <article class="queue-card">
          <header><strong>定向封禁</strong>${d("Target ban","danger")}</header>
          <p>按机构、资产、报价权限、RFQ 方向或 API Key 定向封禁，避免一刀切停服。</p>
          <div class="stat-list">
            <div class="stat-line"><span>生效对象</span><strong>Maker / Asset / Action</strong></div>
            <div class="stat-line"><span>解除条件</span><strong>观察期 / 保证金 / 二审</strong></div>
          </div>
        </article>
      </div>
      <div class="table-wrap" style="margin-top:12px;">
        <table>
          <thead><tr><th>运营模块</th><th>范围</th><th>频率 / SLA</th><th>留痕</th><th>状态</th></tr></thead>
          <tbody>
            ${[["平台数据对账中心","资金、链上余额、份额台账、交易/清算、NAV","00:00 每日","永久日志","3/4 通过"],["不可篡改审计日志","审批、导出、参数、封禁、补偿","实时写入","5 年保留","在线"],["日报 / 周报 / 月报 / 大额赎回专项报表","交易统计、风险合规、流动性、监管补发","按期生成","水印导出","待审批 4"],["白名单季度复核","机构、资产、高净值例外、测试白名单","365 天有效 / 季度复核","到期前 7 天提醒","运行中"]].map(t=>`<tr>${t.map((e,a)=>`<td class="${a===2?"num":""}">${a===4?d(e,e.includes("通过")||e.includes("在线")||e.includes("运行")?"good":"warn"):n(e)}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  </section>`}function ue(t){const e=c(t.assetId);return`<article class="approval-card ${t.severity==="severe"?"severe":""} ${s.selectedApprovalId===t.id?"best":""}">
    <header>
      <strong>${n(t.type)} · ${n(t.id)}</strong>
      <span class="countdown">SLA ${n(t.sla)}</span>
    </header>
    ${m(e)}
    <div class="two-col">
      <div class="stat-line"><span>机构</span><strong>${n(t.institution)}</strong></div>
      <div class="stat-line"><span>层级</span><strong>${n(t.level)}</strong></div>
    </div>
    <p class="${t.severity==="severe"?"disabled-reason danger-note":"inline-note"}">${n(t.trigger)}</p>
    <div class="row-actions">
      ${d(t.status,g(t.status))}
      <button class="ghost-btn" data-action="select-approval" data-approval-id="${t.id}">处理</button>
    </div>
  </article>`}function pe(){const t=N(),e=c(t.assetId);return`<section class="panel" data-panel="approval-detail">
    <div class="panel-head">
      <div><h2>审批决策</h2><p>${n(t.id)} · ${n(t.level)}</p></div>
      ${d(t.status,g(t.status))}
    </div>
    <div class="panel-body asset-detail">
      ${m(e)}
      <div class="stat-list">
        <div class="stat-line"><span>触发原因</span><strong>${n(t.type)}</strong></div>
        <div class="stat-line"><span>金额/份额</span><strong>${n(t.amount)}</strong></div>
        <div class="stat-line"><span>超时结果</span><strong>自动拒绝+释放冻结</strong></div>
      </div>
      <p class="disabled-reason">${n(t.trigger)}</p>
      <div class="field">
        <label>Handling opinion</label>
        <textarea data-field="approvalOpinion" placeholder="必须填写处理意见、证据和补偿/释放安排。">${n(s.approvalOpinion)}</textarea>
      </div>
      <div class="row-actions">
        <button class="btn" data-action="approve-task">批准</button>
        <button class="danger-btn" data-action="reject-task">拒绝</button>
        <button class="ghost-btn" data-action="open-drawer" data-drawer="approvalEvidence">证据</button>
      </div>
    </div>
  </section>`}function ve(){return`${E("Settlement","清算、重试、对账与补偿闭环","清算中心展示交易、基金 NAV、链上镜像、CCASS、03:00-03:10 运维窗口缓存和人工异常处理。",'<button class="ghost-btn" data-action="open-drawer" data-drawer="reconciliation">每日对账</button>')}
  ${S([{label:"重试",value:"5 / 10 / 30m"},{label:"批清",value:"03:10 HKT"}])}
  ${D([{label:"待清算金额",value:"HKD 9.84M",detail:"NAV 待确认 4 笔"},{label:"今日完成",value:"HKD 42.1M",detail:"DVP 即时 18 笔"},{label:"重试中",value:"1",detail:"链上镜像第 2 次"},{label:"对账通过",value:"3/4",detail:"基金份额台账待核"}])}
  ${H([{label:"待处理泳道",value:I.filter(t=>!["完成"].includes(t.state)).length.toString(),detail:"NAV / on-chain / ops"},{label:"重试策略",value:"5/10/30m",detail:"三次后人工 owner"},{label:"自然日归属",value:"HKT",detail:"03:00 缓存不改归属"},{label:"对账状态",value:"3/4",detail:"份额台账待核",tone:"warn"}])}
  ${q([{label:"清算泳道",target:"settlement-lanes",badge:"6"},{label:"清算任务",target:"settlement-tasks",badge:`${I.length}`},{label:"每日对账",target:"settlement-reconciliation",badge:"3/4"},{label:"异常补偿",target:"settlement-compensation",badge:"NAV"}])}
  <div class="screen-grid">
    <div class="stack">
      <section class="panel" data-panel="settlement-lanes">
        <div class="panel-head"><div><h2>清算泳道</h2><p>失败任务展示重试次数、下次重试时间和人工 owner。</p></div></div>
        <div class="panel-body">
          <div class="three-col">
            ${["Trade DVP","Fund NAV","On-chain mirror","CCASS","Ops window cache","Reg reporting"].map(t=>{const e=I.filter(i=>i.lane===t),a=e[0];return`<article class="lane-card">
                <header><strong>${n(t)}</strong>${d(a?a.state:"正常",g(a?.state||"normal"))}</header>
                <div class="stat-list">
                  <div class="stat-line"><span>任务</span><strong>${e.length||3}</strong></div>
                  <div class="stat-line"><span>Owner</span><strong>${n(a?.owner||"Auto")}</strong></div>
                  <div class="stat-line"><span>Next</span><strong>${n(a?.next||"-")}</strong></div>
                </div>
              </article>`}).join("")}
          </div>
        </div>
      </section>
      <section class="panel" data-panel="settlement-tasks">
        <div class="panel-head"><div><h2>清算任务</h2><p>03:00-03:10 内提交的订单保持自然日归属，批量缓存后清算。</p></div></div>
        <div class="panel-body table-wrap">
          <table>
            <thead><tr><th>任务</th><th>资产</th><th>订单</th><th>泳道</th><th>重试</th><th>下次动作</th><th>归属自然日</th><th>操作</th></tr></thead>
            <tbody>
              ${I.map(t=>{const e=c(t.assetId);return`<tr>
                  <td class="num">${n(t.id)}</td>
                  <td>${m(e)}</td>
                  <td class="num">${n(t.order)}</td>
                  <td>${n(t.lane)}</td>
                  <td class="num">${n(t.retry)}</td>
                  <td>${d(t.state,g(t.state))}<br /><span class="muted">${n(t.next)}</span></td>
                  <td class="num">${n(t.attribution)}</td>
                  <td><button class="ghost-btn" data-action="retry-settlement" data-task-id="${t.id}">重试/接管</button></td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </section>
    </div>
    <aside class="rail">
      <section class="panel" data-panel="settlement-reconciliation">
        <div class="panel-head"><h2>每日对账维度</h2></div>
        <div class="panel-body">
          <div class="stat-list">
            <div class="stat-line"><span>资金余额 vs 链上余额</span><strong class="pos">通过</strong></div>
            <div class="stat-line"><span>基金份额台账 vs 总份额</span><strong class="warn-text">待核</strong></div>
            <div class="stat-line"><span>交易记录 vs 清算记录</span><strong class="pos">通过</strong></div>
            <div class="stat-line"><span>计算 NAV vs 官方 NAV</span><strong class="pos">通过</strong></div>
          </div>
        </div>
      </section>
      <section class="panel" data-panel="settlement-compensation">
        <div class="panel-head"><h2>NAV 异常补偿</h2></div>
        <div class="panel-body">
          <p class="disabled-reason danger-note">RWAMM-P 已完成 RFQ/场内成交不可批量作废；运营逐笔核对，发行方承担 NAV 差额补偿。</p>
          <div class="timeline">
            <div class="timeline-item"><span class="timeline-dot"></span><p>异常识别 <small>09:48 HKT</small></p></div>
            <div class="timeline-item"><span class="timeline-dot"></span><p>冻结未定价订单 <small>09:49 HKT</small></p></div>
            <div class="timeline-item"><span class="timeline-dot"></span><p>超管二审中 <small>SLA 1 天 18:22</small></p></div>
          </div>
        </div>
      </section>
    </aside>
  </div>`}function ge(){if(!s.drawer){Y.className="drawer-layer",Y.innerHTML="";return}Y.className="drawer-layer open",Y.innerHTML=`<aside class="drawer" role="dialog" aria-modal="true">
    <header>
      <div>
        <p class="eyebrow">${n(ut(s.drawer).eyebrow)}</p>
        <h2>${n(ut(s.drawer).title)}</h2>
      </div>
      <button class="icon-button" data-action="close-drawer" aria-label="关闭">X</button>
    </header>
    <div class="drawer-body">${be(s.drawer)}</div>
  </aside>`}function ut(t){const e={rules:["Global Rules","7x24 自然日与运维窗口"],notifications:["Notifications","风险与待办通知"],export:["Export","导出额度、水印与审批"],makerRisk:["Maker Risk","做市商权限与惩罚"],allocation:["Primary Allocation","指定参与方配额"],audit:["Audit","5 年留痕与操作日志"],approvalEvidence:["Evidence","审批证据包"],reconciliation:["Reconciliation","每日对账明细"],asset:["Asset Rule","资产生命周期规则"],order:["Order Detail","成交、清算与凭证"],riskChange:["Risk Change","参数变更审批"]},[a,i]=e[t.type]||["Detail","详情"];return{eyebrow:a,title:i}}function be(t){if(t.type==="asset"){const e=c(t.assetId||s.selectedAssetId);return`${m(e)}
      <div class="stat-list" style="margin-top:12px;">
        <div class="stat-line"><span>状态</span><strong>${n(e.statusText)}</strong></div>
        <div class="stat-line"><span>新订单</span><strong>${e.status==="normal"?"允许":"禁用"}</strong></div>
        <div class="stat-line"><span>清算方式</span><strong>${n(e.settlement)}</strong></div>
      </div>
      <p class="${e.disabledReason?"disabled-reason":"inline-note success-note"}">${n(e.disabledReason||"资产正常交易，RFQ、成交和清算全部开放。")}</p>
      <div class="audit-line">永久摘牌需要发行方提交、高管初审、超管二审；临停期间存量订单保留，恢复后继续。</div>`}if(t.type==="order"){const e=R.find(i=>i.id===t.orderId)||R[0],a=c(e.assetId);return`${m(a)}
      <div class="stat-list" style="margin-top:12px;">
        <div class="stat-line"><span>记录 ID</span><strong>${n(e.id)}</strong></div>
        <div class="stat-line"><span>类型</span><strong>${n(e.type)}</strong></div>
        <div class="stat-line"><span>数量/金额</span><strong>${n(e.qty)}</strong></div>
        <div class="stat-line"><span>价格 / NAV / YTM</span><strong>${n(e.price)}</strong></div>
        <div class="stat-line"><span>对手方</span><strong>${n(e.cp)}</strong></div>
        <div class="stat-line"><span>清算通道</span><strong>${n(e.channel)}</strong></div>
        <div class="stat-line"><span>状态</span><strong>${n(e.status)}</strong></div>
      </div>
      <div class="timeline" style="margin-top:12px;">
        <div class="timeline-item"><span class="timeline-dot"></span><p>订单生成 <small>写入交易记录和审计日志</small></p></div>
        <div class="timeline-item"><span class="timeline-dot"></span><p>清算路由 <small>${n(e.channel)}</small></p></div>
        <div class="timeline-item"><span class="timeline-dot"></span><p>凭证归档 <small>5 年留痕，可水印导出</small></p></div>
      </div>`}if(t.type==="rules")return`<div class="mini-list">
      ${["所有 T+N 均为 N 个自然日，系统 7x24 运行。","03:00-03:10 运维窗口内订单缓存，03:10 批清，不改变自然日归属。","审批超时自动拒绝，释放冻结资金/份额，清空当日额度占用。","人工审批、异常、惩罚和补偿工单必须保留 5 年。"].map(e=>`<div class="audit-line">${n(e)}</div>`).join("")}
    </div>`;if(t.type==="export")return`<div class="stat-list">
      <div class="stat-line"><span>普通用户导出</span><strong>5 次/自然日</strong></div>
      <div class="stat-line"><span>管理员导出</span><strong>需审批+水印</strong></div>
      <div class="stat-line"><span>导出日志</span><strong>永久保留</strong></div>
    </div><p class="inline-note">当前视图导出会包含资产代码、名称、类型、状态、操作人和时间水印。</p>
    <div class="mini-list" style="margin-top:12px;">
      ${(G.length?G:[{id:"EXP-SAMPLE",type:"当前视图导出",status:"可申请",time:"-",owner:"Current user"}]).map(e=>`<div class="audit-line">
        <strong>${n(e.id)}</strong> · ${n(e.type)} · ${n(e.status)}<br />
        <span class="muted">${n(e.time)} · ${n(e.owner)}</span>
      </div>`).join("")}
    </div>`;if(t.type==="makerRisk")return`<div class="mini-list">
      <div class="disabled-reason">轻度：连续 3 自然日无响应或一次报价超过偏离阈值，进入 7 日观察。</div>
      <div class="disabled-reason danger-note">中度：连续 7 自然日无响应或重复报价阻断，关闭目标资产报价权限 15 自然日。</div>
      <div class="disabled-reason danger-note">重度：恶意严重偏离造成用户损失，永久关闭目标报价权限并扣保证金。</div>
    </div>`;if(t.type==="allocation")return`<div class="form-grid">
      <div class="field full"><label>Amber River Securities</label><input value="HKD 20,000,000" /></div>
      <div class="field full"><label>HK Digital Markets</label><input value="HKD 15,000,000" /></div>
      <div class="field full"><label>BluePeak Liquidity</label><input value="HKD 10,000,000" /></div>
    </div><button class="btn" data-action="allocation-save">保存配额</button>`;if(t.type==="notifications")return`<div class="mini-list">
      ${Q.map(e=>`<div class="audit-line">
        <strong>${n(e.title)}</strong><br />
        <span>${n(e.detail)}</span><br />
        <small class="muted">${n(e.time)} HKT · ${n(e.id)}</small>
      </div>`).join("")}
    </div>`;if(t.type==="audit")return`<div class="mini-list">
      ${Q.map(e=>`<div class="audit-line">
        <strong>${n(e.id)} · ${n(e.title)}</strong><br />
        <span>${n(e.detail)}</span><br />
        <small class="muted">${n(e.time)} HKT · 5 年留痕</small>
      </div>`).join("")}
    </div>`;if(t.type==="approvalEvidence"){const e=N();return`${m(c(e.assetId))}
      <div class="audit-line">触发：${n(e.trigger)}</div>
      <div class="audit-line">关联订单/金额：${n(e.amount)}</div>
      <div class="audit-line">用户历史：最近 30 自然日无异常处罚；导出和审批日志齐全。</div>
      <div class="audit-line">超时处理：自动拒绝、释放冻结、通知用户、归档 5 年。</div>`}return t.type==="reconciliation"?`<div class="mini-list">
      <div class="audit-line">00:00 自动对账：资金余额、链上余额、份额台账、交易/清算记录、NAV。</div>
      <div class="audit-line">监管推送失败重试 3 次；同日失败则次日凌晨全量补发。</div>
      <div class="audit-line">清算重试：5 分钟、10 分钟、30 分钟；三次失败进入人工处理。</div>
    </div>`:`<div class="mini-list">
    ${["大额赎回待处理 1","NAV 异常待超管 1","股票大宗 RFQ 待二审 1","链上镜像重试 1"].map(e=>`<div class="audit-line">${n(e)}</div>`).join("")}
  </div>`}function me(){if(!s.modal){z.className="modal-layer",z.innerHTML="";return}z.className="modal-layer open",z.innerHTML=`<div class="modal-card" role="dialog" aria-modal="true">
    <header>
      <h2>${n(s.modal.title)}</h2>
      <button class="icon-button" data-action="close-modal" aria-label="关闭">X</button>
    </header>
    <div class="modal-body">${s.modal.body}</div>
    <div class="modal-actions">
      <button class="ghost-btn" data-action="close-modal">取消</button>
      <button class="btn" data-action="${n(s.modal.confirmAction)}">${n(s.modal.confirmLabel||"确认")}</button>
    </div>
  </div>`}function o(t,e="",a=""){const i=`${Date.now()}-${Math.random()}`;Nt(t,e,a),s.toasts=[...s.toasts,{id:i,title:t,detail:e,tone:a}].slice(-4),lt(),window.setTimeout(()=>{s.toasts=s.toasts.filter(l=>l.id!==i),lt()},3600)}function lt(){wt.innerHTML=s.toasts.map(t=>`<div class="toast ${n(t.tone||"")}" role="status" aria-live="polite">
    <strong>${n(t.title)}</strong>
    ${t.detail?`<span>${n(t.detail)}</span>`:""}
  </div>`).join("")}function X(t,e,a,i="确认"){s.modal={title:t,body:e,confirmAction:a,confirmLabel:i},P()}function ft(t){const e=t.dataset.action;if(e==="set-role")s.role=t.dataset.role,rt();else if(e==="set-v1-page")s.v1Page=t.dataset.v1Page;else if(e==="asset-tab")s.assetFilter=t.dataset.assetTab,rt();else if(e==="set-market-status")s.marketStatusFilter=t.dataset.marketStatus;else if(e==="set-approval-filter")s.approvalFilter=t.dataset.approvalFilter;else if(e==="jump-panel"){s.activeModuleByRole[s.role]=t.dataset.targetPanel;const a=document.querySelector(`[data-panel="${t.dataset.targetPanel}"]`);a&&(document.querySelectorAll(".module-nav button").forEach(i=>i.classList.toggle("active",i===t)),a.setAttribute("tabindex","-1"),a.scrollIntoView({block:"start",behavior:"auto"}),a.focus({preventScroll:!0})),ot();return}else if(e==="select-asset")s.selectedAssetId=t.dataset.assetId,ct(s.role==="maker"?"maker-quote-entry":"action-rail");else if(e==="select-maker-asset"){s.selectedAssetId=t.dataset.assetId;const a=M({includeCanceled:!1}).find(i=>i.assetId===s.selectedAssetId);a?(s.selectedRfqId=a.id,L(a),s.activeModuleByRole.maker="maker-quote-entry",x="maker-quote-entry"):o("暂无待报价 RFQ",`${c(s.selectedAssetId).code} 当前没有未撤销询价。`,"warn")}else if(e==="select-rfq"){const a=y.find(i=>i.id===t.dataset.rfqId);a&&(s.selectedRfqId=a.id,s.selectedAssetId=a.assetId,L(a),ct(s.role==="maker"?"maker-quote-entry":"action-rail"))}else if(e==="refresh-rfq-quotes"){const a=y.find(i=>i.id===(t.dataset.rfqId||s.selectedRfqId));if(a){s.selectedRfqId=a.id;const i=c(a.assetId),l=f("Q-LIVE",w.length),r=i.type==="fund"?i.nav||1:Number(String(i.price).replace(/[^\d.]/g,""))||100;w=[{id:l,rfqId:a.id,maker:"Mock Liquidity API",amount:Math.max(1,Math.floor(a.quantity*.72)),value:i.type==="bond"?`${(r-.02).toFixed(2)} / ${(Number(i.ytm?.replace("%",""))||4.2).toFixed(2)}%`:r.toFixed(i.type==="fund"?4:2),deviation:i.type==="fund"?"-0.04%":"+1bp",valid:"02:00",state:"normal",note:"刷新报价 mock，后端接入时替换为 maker quote stream。"},...w],a.responses+=1,a.best=w[0].value,a.status="quoted",a.statusText="已刷新",L(a),o("报价已刷新",`${l} 已写入 ${a.id} 的报价比较。`,"good")}}else if(e==="cancel-rfq"){const a=y.find(i=>i.id===t.dataset.rfqId);a&&(a.status="canceled",a.statusText="已撤销",a.allowCancel=!1,a.countdown="已撤销",o("RFQ 已撤销",`${a.id} 的锁定资金/份额已释放。`))}else if(e==="submit-rfq"){const a=k(),i=`<div class="stat-list">
      <div class="stat-line"><span>资产</span><strong>${n(a.code)} · ${n(a.name)}</strong></div>
      <div class="stat-line"><span>方向/数量</span><strong>${n(s.rfqDirection)} ${u(Number(s.rfqAmount||0))}</strong></div>
      <div class="stat-line"><span>风控</span><strong>白名单、余额/份额、资产状态校验</strong></div>
    </div><p class="inline-note">提交后会推送至合格做市商，并显示倒计时、响应数和最优报价。</p>`;X("确认发送 RFQ",i,"confirm-rfq","发送 RFQ");return}else if(e==="confirm-rfq")he();else if(e==="quote-confirm-modal"){const a=w.find(i=>i.id===t.dataset.quoteId);if(a){const i=y.find(r=>r.id===a.rfqId),l=c(i.assetId);X("确认成交",`<div class="stat-list">
        <div class="stat-line"><span>资产</span><strong>${n(l.code)} · ${n(l.name)}</strong></div>
        <div class="stat-line"><span>Maker</span><strong>${n(a.maker)}</strong></div>
        <div class="stat-line"><span>价格/NAV/YTM</span><strong>${n(a.value)}</strong></div>
        <div class="stat-line"><span>结算</span><strong>${n(l.settlement)}</strong></div>
      </div>`,"confirm-quote","确认成交"),s.pendingQuoteId=a.id;return}}else if(e==="confirm-quote"){const a=w.find(i=>i.id===s.pendingQuoteId);if(a){const i=y.find(l=>l.id===a.rfqId);i&&(i.status="done",i.statusText="已成交",i.allowCancel=!1,i.best=a.value),s.modal=null,o("成交确认已提交",`${a.id} 进入 ${c(i.assetId).settlement} 清算。`)}}else if(e==="all-redeem"){const a=C.find(i=>i.assetId===s.selectedAssetId);a&&(s.redemptionShares=String(a.available))}else if(e==="submit-subscription"){const a=k();X("确认基金申购",`<div class="stat-list">
      <div class="stat-line"><span>基金</span><strong>${n(a.code)} · ${n(a.name)}</strong></div>
      <div class="stat-line"><span>金额</span><strong>HKD ${u(Number(s.subscriptionAmount||0))}</strong></div>
      <div class="stat-line"><span>预计份额</span><strong>${u(Math.floor(Number(s.subscriptionAmount||0)/(a.nav||1)))}</strong></div>
      <div class="stat-line"><span>NAV</span><strong>等待官方 NAV</strong></div>
    </div>`,"confirm-subscription","确认申购");return}else if(e==="confirm-subscription"){const a=k(),i=Number(s.subscriptionAmount||0),l=f("SUB-DEMO",R.length);R.unshift({id:l,assetId:a.id,type:"基金申购",qty:`HKD ${u(i)}`,price:"NAV pending",cp:a.issuer,status:"等待官方 NAV",channel:"Fund ledger"}),I.unshift({id:f("SET-NAV",I.length),lane:"Fund NAV",assetId:a.id,order:l,state:"等待官方 NAV",retry:"0/3",next:"下一 NAV cut",owner:"Fund ledger",attribution:"2026-06-30"}),s.modal=null,o("申购已提交",`${l} 已写入交易记录和 Fund NAV 清算泳道。`,"good")}else if(e==="submit-redemption"){const a=C.find(l=>l.assetId===s.selectedAssetId),i=it(a,s.redemptionShares);X("确认基金赎回",`<div class="stat-list">
      <div class="stat-line"><span>赎回份额</span><strong>${u(Number(s.redemptionShares||0))}</strong></div>
      <div class="stat-line"><span>占可用份额</span><strong>${i.pct.toFixed(1)}%</strong></div>
      <div class="stat-line"><span>路由</span><strong>${i.pct>80?"大额赎回审批":"流动性队列"}</strong></div>
    </div><p class="${i.pct>80?"disabled-reason":"inline-note"}">${n(i.text)}</p>`,"confirm-redemption","提交赎回");return}else if(e==="confirm-redemption"){s.modal=null;const a=C.find(h=>h.assetId===s.selectedAssetId),i=it(a,s.redemptionShares),l=k(),r=Math.min(Number(s.redemptionShares||0),a?.available||0),b=f("RED-DEMO",R.length);if(a&&r>0&&(a.available=Math.max(0,a.available-r),a.frozen+=r,a.reason=i.pct>80?"大额赎回审批中，等待平台处理。":"赎回清算队列中，等待官方 NAV。"),R.unshift({id:b,assetId:l.id,type:"基金赎回",qty:`${u(r)} 份`,price:"NAV T+0 pending",cp:l.issuer,status:i.pct>80?"大额审批中":"等待官方 NAV",channel:i.pct>80?"Approval queue":"Fund ledger"}),i.pct>80){const h=f("APR-RED-DEMO",p.length);p.unshift({id:h,type:"大额赎回",assetId:l.id,institution:"NorthBay Capital",trigger:`单笔赎回 ${i.pct.toFixed(1)}%，超过 80% 人工审批阈值。`,amount:`${u(r)} 份`,severity:i.pct>=95?"severe":"high",sla:"3 天 00:00",level:i.pct>=95?"Super admin":"Senior admin",status:"待处理"}),s.selectedApprovalId=h,o("已进入大额赎回审批",`${h} 已进入平台审批队列，${b} 已冻结份额。`,"warn")}else I.unshift({id:f("SET-RED",I.length),lane:"Fund NAV",assetId:l.id,order:b,state:"等待官方 NAV",retry:"0/3",next:"T+1 自然日",owner:"Fund ledger",attribution:"2026-06-30"}),o("赎回已进入队列",`${b} 已写入清算队列，预计 T+1 自然日按官方 NAV 清算。`,"good")}else if(e==="submit-maker-quote")fe();else if(e==="toggle-field"){const a=t.dataset.fieldName;s[a]=!s[a],(a==="rememberPassword"||a==="agreementsAccepted"||a==="secondQuote")&&o("开关已更新",`${a} 当前为 ${s[a]?"开启":"关闭"}。`)}else if(e==="toggle-preference"){const a=t.dataset.preference;a&&Object.prototype.hasOwnProperty.call(s.preferences,a)&&(s.preferences[a]=!s.preferences[a],o("通知通道已更新",`${a} 当前为 ${s.preferences[a]?"开启":"关闭"}。`))}else if(e==="set-issuer-type")s.issuerType=t.dataset.type;else if(e==="submit-issuance"){const a=s.issuerType==="fund"?"FUND-HK-LQD":s.issuerType==="stock"?"STK-GRN-021":"BOND-HKTB-2028",i=f("ISS-DEMO",Z.length);Z.unshift({id:i,assetId:a,stage:"平台审核",quota:s.issuerType==="stock"?"1,200,000 shares":"HKD 45,000,000",windowEnd:"2026-07-11 17:00 HKT",participant:s.allocationSavedAt?"指定参与方配额":"PI whitelist",status:"待平台审核"}),p.unshift({id:f("APR-ISS-DEMO",p.length),type:"发行审批",assetId:a,institution:"Harbour Fund Management",trigger:`${B(s.issuerType)}发行 ${i} 已提交，等待平台审核。`,amount:s.issuerType==="stock"?"1,200,000 shares":"HKD 45,000,000",severity:"medium",sla:"3 天 00:00",level:"Senior admin",status:"待处理"}),s.issuanceStep=Math.max(s.issuanceStep,3),o("发行审批已提交",`${i} 已写入发行状态和审批队列。`,"good")}else if(e==="refresh-nav"){s.lastNavRefreshAt=$();const a=T.find(i=>i.assetId==="FUND-HK-LQD")||T[0];a.time=s.lastNavRefreshAt,a.source="Manual refresh",a.status="已刷新",a.iNav=(Number(a.iNav||1)+1e-4).toFixed(4),o("估值刷新已完成",`${c(a.assetId).code} iNAV 已刷新为 ${a.iNav}。`,"good")}else if(e==="submit-nav-correction"){if(!s.navCorrectionReason.trim()){o("需要修正理由","提交前必须填写数据源、估值调整、影响订单和补偿方案。");return}const a=T.find(l=>l.assetId==="FUND-RWA-MM")||T[1];a.status="修正待二审",a.source="Issuer correction",a.time=$();const i=f("APR-NAV-DEMO",p.length);p.unshift({id:i,type:"NAV 修正",assetId:a.assetId,institution:"RWA Capital",trigger:s.navCorrectionReason,amount:"影响未定价订单与补偿测算",severity:"severe",sla:"3 天 00:00",level:"Super admin",status:"待二审"}),s.selectedApprovalId=i,o("NAV 修正已提交",`${i} 已进入高管初审与超管二审。`,"warn")}else if(e==="select-approval")s.selectedApprovalId=t.dataset.approvalId,s.approvalOpinion="";else if(e==="approve-task"||e==="reject-task")$e(e==="approve-task"?"已批准":"已拒绝");else if(e==="toggle-switch"){const a=t.dataset.switch;s.emergency[a]=!s.emergency[a],o("应急开关已更新",`${a} 当前为 ${s.emergency[a]?"开启":"关闭"}。`)}else if(e==="submit-risk-change"){s.riskChangeSubmittedAt=$();const a=f("APR-RISK-DEMO",p.length);p.unshift({id:a,type:"风险参数",assetId:"FUND-HK-LQD",institution:"HashKey Operations",trigger:"基金 RFQ、赎回审批、股票大宗 RFQ 与白名单有效期参数变更，需要两名超管复核。",amount:"Global ruleset v2.0",severity:"severe",sla:"3 天 00:00",level:"Super admin",status:"待二审"}),s.selectedApprovalId=a,s.activeModuleByRole.platform="approval-detail",x="approval-detail",o("参数变更已提交",`${a} 已进入超管双人复核。`,"warn")}else if(e==="retry-settlement"){const a=I.find(i=>i.id===t.dataset.taskId);if(a){const i=Math.min(3,Number(a.retry.split("/")[0]||0)+1);a.retry=`${i}/3`,a.state=i>=3?"人工接管":`第 ${i} 次重试`,a.next=i>=3?"Manual owner":"5 分钟后",a.owner=i>=3?"Manual clearing desk":"Ops retry engine"}o("清算任务已接管",`${t.dataset.taskId} 已更新重试次数和 owner。`,"warn")}else if(e==="export-report"){const a={id:f("EXP",G.length),type:t.dataset.reportType||(s.role==="fund"?"基金监管报告":"当前视图导出"),status:s.role==="platform"?"待审批":"已生成",time:$(),owner:s.role};G.unshift(a),s.drawer={type:"export"},o("监管报告导出申请已生成",`${a.id} 已写入导出日志并添加水印策略。`,"good")}else if(e==="allocation-save")s.allocationSavedAt=$(),s.drawer=null,o("配额已保存","指定参与方额度会随发行审批提交。","good");else if(e==="submit-onboarding"){if(!s.agreementsAccepted){o("协议未确认","提交入驻前必须确认三项协议。","warn");return}s.onboardingSubmittedAt=$(),s.onboardingStep=Math.max(s.onboardingStep,2),o("入驻申请已提交","系统初审、平台复审和可选监管复核进度已生成。","good")}else if(e==="draft-onboarding")s.onboardingDraftSavedAt=$(),o("草稿已保存","7 天内可继续编辑，超时会提示重新填写。","good");else if(e==="upload-qualification"){s.qualificationUploadedAt=$();const a=pt.find(i=>i.status==="待补充");a&&(a.status="已上传",a.validation="签章页已补正，等待平台复审",a.action="查看进度"),s.onboardingStep=Math.max(s.onboardingStep,3),o("资质上传已接收","文件格式、大小和角色匹配校验通过后进入复审。","good")}else if(e==="save-subaccount"){const a=U.length+1;U.unshift({name:`Ops-Mock-${String(a).padStart(2,"0")}`,permission:"清算只读 / 导出申请 / 通知接收",state:"待首次登录改密"}),s.onboardingStep=4,o("子账号权限已更新","新增子账号已写入权限表，首次登录强制改密。","good")}else e==="claim-interest"?(s.interestClaimedAt=$(),R.unshift({id:f("INT-DEMO",R.length),assetId:"BOND-HKTB-2028",type:"利息领取",qty:"+HKD 125,000",price:"Coupon",cp:"Smart contract payout",status:"已领取",channel:"On-chain payout"}),o("利息领取指令已完成","交易凭证和利息记录已同步。","good")):e==="save-preferences"?(s.preferencesSavedAt=$(),o("通知偏好已保存","邮件、Webhook、2FA 和 API 权限变更已留痕。","good")):e==="open-drawer"?s.drawer={type:t.dataset.drawer,assetId:t.dataset.assetId,orderId:t.dataset.orderId,taskId:t.dataset.taskId}:e==="close-drawer"?s.drawer=null:e==="close-modal"&&(s.modal=null);ot(),P()}function he(){const t=k(),e=`RFQ-DEMO-${String(y.length+101).padStart(3,"0")}`;y=[{id:e,assetId:t.id,direction:s.rfqDirection,quantity:Number(s.rfqAmount||0),unit:t.type==="bond"?"面值":t.type==="stock"?"股":"份",initiator:"NorthBay Capital",scope:t.type==="stock"?"Block whitelist":"4 makers",countdown:"09:59",responses:0,best:"-",status:"active",statusText:"询价中",allowCancel:!0,feePayer:"发起方"},...y],s.selectedRfqId=e,s.modal=null,o("RFQ 已发送",`${t.code} 已推送至合格做市商。`)}function fe(){const t=V(),e=c(t.assetId),a=`Q-DEMO-${w.length+100}`;w=[{id:a,rfqId:t.id,maker:"Current Market Maker",amount:Number(s.makerQuoteAmount||0),value:s.makerQuoteValue,deviation:e.type==="fund"?"-0.18%":"+2bp",valid:"02:00",state:"normal",note:s.secondQuote?"二次报价，已校验库存和原询价数量。":"首次报价。"},...w],t.responses+=1,t.status="quoted",t.statusText="已报价",o("报价已提交",`${a} 已进入投资者报价比较。`)}function $e(t){if(!s.approvalOpinion.trim()){o("需要处理意见","审批提交前必须填写 handling opinion。");return}const e=N();e.status=t,o(`审批${t}`,`${e.id} 已记录处理意见并归档 5 年。`),s.approvalOpinion=""}document.addEventListener("click",t=>{if(s.drawer&&t.target.closest(".drawer-layer")&&!t.target.closest(".drawer")){s.drawer=null,P();return}if(s.modal&&t.target.closest(".modal-layer")&&!t.target.closest(".modal-card")){s.modal=null,P();return}const e=t.target.closest("[data-action]");e&&(t.preventDefault(),ft(e))});document.addEventListener("input",t=>{const e=t.target.dataset.field;e&&(t.target.type==="checkbox"?s[e]=t.target.checked:s[e]=t.target.value,e!=="approvalOpinion"&&e!=="navCorrectionReason"&&(_={field:e,start:t.target.selectionStart,end:t.target.selectionEnd},P()))});document.addEventListener("keydown",t=>{if(t.key==="Escape"&&(s.drawer=null,s.modal=null,P()),t.key==="/"&&!t.target.matches("input, textarea, select")&&(t.preventDefault(),document.querySelector('[data-field="search"]')?.focus()),(t.key==="Enter"||t.key===" ")&&!t.target.matches("button, a, input, textarea, select")){const e=t.target.closest("[data-action]");e&&(t.preventDefault(),ft(e))}});window.setInterval(()=>{const t=document.querySelector("[data-clock]");t&&(t.textContent=`${$()} HKT`)},1e3);Ft();P();
