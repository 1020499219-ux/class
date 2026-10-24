/* Content remains native DOM. data-module / data-art / data-reveal are independent motion hooks. */
gsap.registerPlugin(ScrollTrigger);
const assets = 'assets/';
const works = [
 {image:13,label:'社招',result:'0经验·年薪',value:'16w+'},
 {image:1,label:'社招',result:'1年·年薪',value:'涨幅45%'},
 {image:9,label:'腾讯',result:'年薪',value:'35w+'},
 {image:11,label:'社招',result:'1年·年薪',value:'涨幅50%'},
 {image:3,label:'字节',result:'年薪',value:'48w+'},
 {image:5,label:'京东',result:'年薪',value:'45w+'},
 {image:2,label:'社招',result:'年薪',value:'36w+'},
 {image:0,label:'社招',result:'年薪',value:'涨幅160%'},
 {image:4,label:'校招·字节',result:'年薪',value:'38w+'},
 {image:15,label:'校招·京东',result:'年薪',value:'45w+'},
 {image:10,label:'校招·小米',result:'年薪',value:'25w+'},
 {image:8,label:'社招',result:'4年·涨幅',value:'55%'},
 {image:7,label:'社招',result:'2.5年·涨幅',value:'50%'},
 {image:14,label:'社招',result:'薪资涨幅',value:'80%'},
 {image:6,label:'社招',result:'0经验·年薪',value:'23w'},
 {image:12,label:'社招·小鹅通',result:'0经验·年薪',value:'22w+'}
];
const orbit = document.querySelector('#work-orbit');
const gallery = document.querySelector('#work-gallery');
works.forEach((work,i)=>{
 const angle = -Math.PI/2 + i*Math.PI*2/works.length;
 const x = 50 + Math.cos(angle)*42, y = 45 + Math.sin(angle)*34;
 const button = document.createElement('button');
 button.className='work-card'; button.style.cssText=`--x:${x};--y:${y};z-index:${Math.round(30-y/3)}`;
 button.setAttribute('aria-label',`${work.label}学员作品，${work.result}${work.value}`);
 const src=`${assets}work-${String(work.image).padStart(2,'0')}.webp`;
 button.innerHTML=`<img src="${src}" alt="学员设计作品 ${i+1}" loading="lazy" width="600" height="600"><span class="work-caption">${work.label}<br>${work.result}<em>${work.value}</em></span>`;
 button.addEventListener('click',()=>openGallery(i)); orbit.append(button);
 const figure=document.createElement('figure'); figure.id=`gallery-work-${i}`;
 figure.innerHTML=`<img src="${src}" alt="${work.label}学员设计作品" loading="lazy" width="600" height="600"><figcaption>${work.label} · ${work.result}${work.value}</figcaption>`;gallery.append(figure);
});
const dialog=document.querySelector('#work-dialog');
function openGallery(index=0){dialog.showModal();requestAnimationFrame(()=>document.querySelector(`#gallery-work-${index}`).scrollIntoView({block:'nearest'}));}
document.querySelector('#more-work').addEventListener('click',()=>openGallery());
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
document.querySelectorAll('[data-tags]').forEach(group=>{group.dataset.tags.split(',').forEach((tag,i)=>{const span=document.createElement('span');span.className='tag'+(i===5||group.closest('.deploy-top')&&i===0?' highlight':'');span.textContent=tag;span.dataset.motion='tag';group.append(span);});});
const abilities=[['软件能力','设计能力'],['视觉执行','体验设计'],['承接需求','发现问题'],['设计好看','创造业务价值'],['单页设计','复杂产品设计'],['简单使用 AI','AI 设计工作流'],['有项目','有竞争力的作品集'],['有能力','拿到结果']];
document.querySelector('#ability-grid').innerHTML=abilities.map(([a,b])=>`<div class="ability" data-reveal><span>从“${a}”</span><span>到“${b}”</span></div>`).join('');
const audiences=[
 {title:'<em>零基础</em>、准备找实习的在校生',back:'对 AI 的理解停留在生成图片 网上内容太多不知道先学什么 作品集能交但不知道算不算作品 实习作品集需要达到什么标准',points:['学习<em>基础设计工具</em>，建立uiux设计认知','系统学习<em>色彩、字体、组件、视觉细节等UI视觉基本功</em>','围绕一个<em>真实业务场景</em>完成完整项目','正确使用 AI 辅助uiux设计工作流程，进行<em>学习画面和测试题训练</em>','使用 <em>Codex 上线个人作品集</em>网站']},
 {title:'有实习经验、<em>准备校招</em>的应届生',back:'实习经历多但零散 不知道怎么整合 缺少业务思考 不知道怎么提炼数据 个人贡献和项目成果不清晰 校招竞争激烈 测试题和面试准备不足',points:['从项目中选择<em>最能证明能力</em>的案例','梳理实习项目<em>突出个人贡献、强化业务意识</em>','建立<em>问题、判断、行动、验证、结果</em>的思维','提升<em>视觉表达的上限</em>，补齐创意短板','提升作品集的<em>完整度与个人辨识度</em>']},
 {title:'有基础但长期停留在<em>“只会做页面”</em>的初级设计师',back:'项目做了不少 为什么作品集还是没有竞争力 如何从执行走向判断 不知道怎么把日常工作变成完整项目 视觉不够好 交互逻辑不清晰 缺少系统方法',points:['系统提升<em>视觉表现和复杂流程能力</em>','建立可复用的 <em>UX 全链路方法</em>，理解产品决策和业务指标','训练<em>复杂业务、多角色、多任务、多状态</em>设计','建立 <em>AI 产品设计工作流</em>，重点训练 AI+设计判断','把<em>零散工作重构</em>成有价值的作品集项目']},
 {title:'<em>高年限低增长</em>，缺复杂项目和影响力的中级设计师',back:'缺少复杂系统设计能力 业务影响力和团队影响力不足 没有能证明能力的复杂项目 职业焦虑 高年限没有高级成果 AI带来的职业焦虑 不知道走专家还是管理路线',points:['补齐 <em>UX 全链路和业务思维</em>，建立数据驱动设计能力','平衡<em>用户体验和商业目标</em>','更新视觉能力，<em>摆脱老旧和过时</em>的设计表达','提升<em>项目推动与跨团队协作</em>能力','如何通过复杂项目<em>沉淀方法并复用</em>']}
];
document.querySelector('#audience-list').innerHTML=audiences.map((a,i)=>`<article class="audience-card" data-module="audience-${i+1}"><div class="audience-backdrop" aria-hidden="true">${a.back} ${a.back}</div><h3 data-reveal>${a.title}</h3><div class="audience-points">${a.points.map((p,j)=>`<p><small>0${j+1}:</small>${p}</p>`).join('')}</div></article>`).join('');
const summaries=[['零基础想找实习<br>的<br>在校生','不知道学什么、<br>没有项目和作品集','找到第一份实习','基础能力＋完整项目＋实习作品集'],['有实习经验<br>的<br>应届生','经历和项目零散，<br>个人贡献和竞争力不清晰','提高校招通过率','项目重构＋作品集＋测试题＋面试'],['1 - 3年<br>的<br>设计师','长期偏执行，<br>缺业务思维和方法沉淀','跳槽、涨薪、能力升级','UI / UX / 业务 / AI全链路进阶'],['5年以上<br>的<br>设计师','高年限低增长，<br>缺复杂项目和影响力','晋升或突破职业瓶颈','业务影响＋复杂项目＋高级表达']];
document.querySelector('#summary-grid').innerHTML=summaries.map(a=>`<article class="summary-item" data-reveal><h3>${a[0]}</h3><p>${a[1]}</p><strong>${a[2]}</strong><small>${a[3]}</small></article>`).join('');
document.querySelectorAll('.pixels').forEach(grid=>{for(let i=0;i<36;i++)grid.append(document.createElement('i'));});

// Region geometry is content-based. The course is never pinned or forced to one screen.
// A keeps its natural flow while B grows from its top-right origin.
const motion=gsap.matchMedia();
motion.add('(prefers-reduced-motion: no-preference)',()=>{
 const viewport=()=>window.innerHeight;
 document.documentElement.style.setProperty('--viewport',`${viewport()}px`);
 const updateViewport=()=>document.documentElement.style.setProperty('--viewport',`${viewport()}px`);
 ScrollTrigger.addEventListener('refreshInit',updateViewport);
 gsap.fromTo('.course',{scale:()=>window.innerWidth<768?.58:.4},{scale:1,ease:'none',scrollTrigger:{id:'course-expand',trigger:'.course-space',start:'top 78%',end:'top top',scrub:true,invalidateOnRefresh:true}});
 // C overlaps the final viewport of B. Hold the complete C content for one
 // viewport of scroll, then release at exactly the same top coordinate.
 ScrollTrigger.create({id:'black-reveal',trigger:'.after',pin:'.after-inner',start:'top top',end:()=>`+=${viewport()}`,pinSpacing:true,invalidateOnRefresh:true,anticipatePin:1});
 return()=>{ScrollTrigger.removeEventListener('refreshInit',updateViewport);document.documentElement.style.removeProperty('--viewport');};
});
// Explicit line wrappers preserve natural layout and allow later line-by-line choreography.
document.querySelectorAll('.course h2').forEach(heading=>{
 const lines=[document.createElement('span')];
 [...heading.childNodes].forEach(node=>{
  if(node.nodeName==='BR') lines.push(document.createElement('span'));
  else lines[lines.length-1].append(node);
 });
 lines.forEach((line,index)=>{line.className='motion-line';line.dataset.motion='line';line.dataset.line=String(index);});
 heading.replaceChildren(...lines);
});
// One entrance scheduler coordinates headings, copy groups and artwork in
// visible reading order. Parallax stays on CSS translate, separate from GSAP y.
const elementMotion=gsap.matchMedia();
elementMotion.add('(prefers-reduced-motion: no-preference)',()=>{
 const specs=[['.can',30],['.stair',-18],['.star',38],['.coin',32],
  ['.ux-wordmark',-20],['.mono-wordmark',-16],
  ['.smile-composition>img',34],['.price-smile',26],['.inclusion-art>img',24]];
 const depths=new Map(specs.flatMap(([selector,depth])=>
  [...document.querySelectorAll(selector)].map(art=>[art,depth])));
 const elements=[...new Set([
  ...document.querySelectorAll('main h1,main h2,main h3,.tags,.body-copy,.dual-description,.ability,.inclusion-lines>p,.summary-item>p,.summary-item>strong,.summary-item>small'),
  ...depths.keys()
 ])];
 const sequence=gsap.timeline({paused:true});
 let lastStart=-.14;
 const states=elements.map(element=>{
  const isArt=depths.has(element);
  const isTitle=element.matches('h1,h2,h3');
  const stateAttribute=isArt?'artState':isTitle?'titleState':'entranceState';
  element.classList.add('sequence-enter');
  if(isArt)element.classList.add('parallax-art');
  if(isTitle)element.classList.add('title-entrance');
  element.dataset[stateAttribute]='waiting';
  const tween=gsap.fromTo(element,{autoAlpha:0,y:isArt?32:24},
   {autoAlpha:1,y:0,duration:.75,ease:'power3.out',paused:true,
    onComplete:()=>{element.dataset[stateAttribute]='visible';}});
  return {element,isArt,stateAttribute,tween,played:false,depth:depths.get(element)||0,
   module:isArt?element.closest('[data-module],.price-stage,.inclusions'):null,
   setParallax:isArt?gsap.quickSetter(element,'--parallax-y','px'):null};
 });
 const course=document.querySelector('.course');
 const clamp=gsap.utils.clamp(-1,1);
 const updateElements=()=>{
  const vh=window.innerHeight;
  const courseRect=course.getBoundingClientRect();
  const mobileFactor=window.innerWidth<768?.55:1;
  // Read resting geometry before applying any transforms. This remains correct
  // while B scales and while C is temporarily pinned behind the course sheet.
  const frames=states.map(state=>{
   const {element,isArt}=state;
   const rect=element.getBoundingClientRect();
   const parentScale=element.closest('.course')?courseRect.width/course.offsetWidth:1;
   const currentParallax=isArt?parseFloat(element.style.getPropertyValue('--parallax-y'))||0:0;
   const top=rect.top-(Number(gsap.getProperty(element,'y'))+currentParallax)*parentScale;
   const bottom=top+element.offsetHeight*parentScale;
   const coveredUntil=element.closest('.after-inner')?Math.max(0,courseRect.bottom):0;
   const moduleRect=isArt?state.module.getBoundingClientRect():null;
   return {state,top,left:rect.left,
    visible:Math.min(bottom,vh*.94)-Math.max(top,coveredUntil,0),
    parallax:isArt?clamp((vh/2-(moduleRect.top+moduleRect.height/2))*2/(vh+moduleRect.height))*state.depth*mobileFactor:0};
  });
  const ready=[];
  frames.forEach(frame=>{
   const {state,top,visible,parallax}=frame;
   if(state.isArt)state.setParallax(parallax);
   if(top>=vh+32){
    if(state.played){
     sequence.remove(state.tween);state.tween.pause(0);
     state.played=false;state.element.dataset[state.stateAttribute]='waiting';
    }
   }else if(!state.played&&visible>=Math.min(state.element.offsetHeight*.25,24)){
    ready.push(frame);
   }
  });
  ready.sort((a,b)=>a.top-b.top||a.left-b.left).forEach(({state})=>{
   state.played=true;state.element.dataset[state.stateAttribute]='entering';
   const at=Math.max(sequence.time(),lastStart+.14);
   sequence.add(state.tween,at);state.tween.paused(false);lastStart=at;
  });
  if(ready.length)sequence.play();
 };
 let updateFrame;
 const requestUpdate=()=>{cancelAnimationFrame(updateFrame);updateFrame=requestAnimationFrame(updateElements);};
 const trigger=ScrollTrigger.create({id:'element-entrances',start:0,end:'max',
  onUpdate:requestUpdate,onRefresh:requestUpdate});
 requestUpdate();
 return()=>{
  cancelAnimationFrame(updateFrame);trigger.kill();sequence.kill();
  states.forEach(({element,stateAttribute})=>{
   element.classList.remove('sequence-enter','title-entrance','parallax-art');
   delete element.dataset[stateAttribute];element.style.removeProperty('--parallax-y');
  });
 };
});
// Native anchors into a temporarily pinned long container can land one viewport
// early. Resolve destinations against the reveal endpoint, independent of pin state.
function navigateToSection(hash){
 const target=document.getElementById(hash.slice(1));
 if(!target)return;
 const after=document.querySelector('.after-inner');
 const reveal=ScrollTrigger.getById('black-reveal');
 const y=after.contains(target)&&reveal
   ? reveal.end+target.getBoundingClientRect().top-after.getBoundingClientRect().top-24
   : scrollY+target.getBoundingClientRect().top-24;
 window.scrollTo({top:Math.max(0,y),behavior:'instant'});
}
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
 const hash=link.getAttribute('href');if(!document.getElementById(hash.slice(1)))return;
 event.preventDefault();history.pushState(null,'',hash);navigateToSection(hash);
}));
window.addEventListener('hashchange',()=>navigateToSection(location.hash));
Promise.all([document.fonts.ready,...Array.from(document.images).filter(im=>im.loading!=='lazy').map(im=>im.decode().catch(()=>{}))]).then(()=>{ScrollTrigger.refresh();if(location.hash)navigateToSection(location.hash);});
window.addEventListener('pagehide',()=>{elementMotion.revert();motion.revert();},{once:true});
