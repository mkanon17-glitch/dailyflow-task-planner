/* DailyFlow Task Planner
   1) Create a Supabase project.
   2) Paste your Project URL and anon/publishable key below.
   Never put a service_role key in this file.
*/
const SUPABASE_URL = "https://oyiniuibkrgllftpflpm.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_EMRPq141eXYYZE15F7ipmw_d0wf1bl8";
const hasConfig = SUPABASE_URL.startsWith("https://") && !SUPABASE_URL.includes("PASTE_") && !SUPABASE_ANON_KEY.includes("PASTE_");
const supabaseClient = hasConfig && window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const translations = {
  bn: {
    dailyRoutine:"প্রতিদিনের কাজ",routineHelp:"এখানে কাজ যোগ করলে প্রতিদিনের তালিকায় স্বয়ংক্রিয়ভাবে তৈরি হবে।",addRoutine:"প্রতিদিনের তালিকায় যোগ করুন",yourRoutine:"আপনার প্রতিদিনের কাজ",routineSaved:"প্রতিদিনের কাজ যোগ হয়েছে",routineError:"প্রতিদিনের কাজ সংরক্ষণ করা যায়নি",routineRemoved:"প্রতিদিনের কাজ বন্ধ করা হয়েছে",welcomeEyebrow:"আপনার ব্যক্তিগত কর্মক্ষেত্র",welcomeTitle:"আপনার দিন, আপনার নিয়ন্ত্রণে",welcomeSub:"কাজ সাজান, অগ্রগতি দেখুন, আর কিছুই ভুলে যাবেন না।",email:"ইমেইল",password:"পাসওয়ার্ড",signIn:"লগ ইন",createAccount:"অ্যাকাউন্ট তৈরি",authNote:"প্রতিটি ব্যবহারকারীর কাজ আলাদা ও ব্যক্তিগত থাকবে।",setupNeeded:"প্রথমবার সেটআপ করতে হবে",setupExplain:"README-তে Supabase সেটআপ ও GitHub Pages প্রকাশের নির্দেশনা আছে। Supabase URL ও anon key না দিলে লগইন কাজ করবে না।",workspace:"WORKSPACE",today:"আজকের কাজ",calendar:"ক্যালেন্ডার",allTasks:"সব কাজ",personalSpace:"ব্যক্তিগত কর্মক্ষেত্র",signOut:"লগ আউট",newTask:"নতুন কাজ",totalTasks:"মোট কাজ",inThisView:"এই ভিউতে",completed:"সম্পন্ন",greatProgress:"চমৎকার অগ্রগতি",remaining:"বাকি",keepGoing:"চালিয়ে যান",dailyProgress:"কাজের অগ্রগতি",smallSteps:"ছোট ছোট পদক্ষেপই বড় ফল আনে",focusToday:"আজ কী করতে হবে",focusSub:"একটি কাজ শেষ করুন, তারপর পরেরটিতে যান।",nothingPlanned:"এখনো কোনো কাজ যোগ করা হয়নি",emptySub:"নতুন কাজ যোগ করে আপনার দিন সাজিয়ে নিন।",addFirstTask:"প্রথম কাজটি যোগ করুন",monthSub:"তারিখে চাপ দিলে ওই দিনের কাজ দেখুন।",allSub:"সব তারিখের কাজ এখানে ম্যানেজ করুন।",taskName:"কাজের নাম",dueDate:"তারিখ",timeOptional:"সময় (ঐচ্ছিক)",category:"ক্যাটাগরি",priority:"গুরুত্ব",notesOptional:"নোট (ঐচ্ছিক)",delete:"মুছে ফেলুন",cancel:"বাতিল",saveTask:"কাজ সংরক্ষণ",footerNote:"আপনার পরিকল্পনা, আপনার অগ্রগতি।",allStatus:"সব স্ট্যাটাস",pending:"বাকি",done:"সম্পন্ন",search:"কাজ খুঁজুন…",edit:"এডিট",noTasks:"এই তারিখে কোনো কাজ নেই",saved:"কাজ সংরক্ষণ হয়েছে",updated:"কাজ আপডেট হয়েছে",deleted:"কাজ মুছে ফেলা হয়েছে",loadError:"কাজ লোড করা যায়নি",saveError:"সংরক্ষণ করা যায়নি",deleteConfirm:"এই কাজটি মুছে ফেলবেন?",configMissing:"প্রথমে README অনুযায়ী Supabase সেটআপ করুন।",signedOut:"লগ আউট হয়েছে",signingIn:"লগ ইন হচ্ছে…",checkEmail:"অ্যাকাউন্ট নিশ্চিত করতে ইমেইল চেক করুন।",authError:"লগ ইন করা যায়নি। ইমেইল ও পাসওয়ার্ড পরীক্ষা করুন।",monthNames:["জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"],weekdays:["রবি","সোম","মঙ্গল","বুধ","বৃহস্পতি","শুক্র","শনি"]
  },
  en: {
    dailyRoutine:"Daily routine",routineHelp:"Tasks added here will be created automatically in your daily list.",addRoutine:"Add to daily routine",yourRoutine:"Your daily routine",routineSaved:"Recurring task added",routineError:"Could not save recurring task",routineRemoved:"Recurring task deactivated",welcomeEyebrow:"YOUR PERSONAL WORKSPACE",welcomeTitle:"Your day, in your control",welcomeSub:"Organize tasks, track progress, and keep nothing important forgotten.",email:"Email",password:"Password",signIn:"Sign in",createAccount:"Create account",authNote:"Each user's tasks stay separate and private.",setupNeeded:"First-time setup required",setupExplain:"Follow README for Supabase setup and GitHub Pages deployment. Sign-in won't work until you add your Supabase URL and anon key.",workspace:"WORKSPACE",today:"Today",calendar:"Calendar",allTasks:"All tasks",personalSpace:"Personal workspace",signOut:"Sign out",newTask:"New task",totalTasks:"Total tasks",inThisView:"In this view",completed:"Completed",greatProgress:"Great progress",remaining:"Remaining",keepGoing:"Keep going",dailyProgress:"Progress",smallSteps:"Small steps lead to big results",focusToday:"Your focus for today",focusSub:"Finish one task, then move to the next.",nothingPlanned:"Nothing planned yet",emptySub:"Add a task to start organizing your day.",addFirstTask:"Add your first task",monthSub:"Select a date to view its tasks.",allSub:"Manage tasks across all dates.",taskName:"Task name",dueDate:"Due date",timeOptional:"Time (optional)",category:"Category",priority:"Priority",notesOptional:"Notes (optional)",delete:"Delete",cancel:"Cancel",saveTask:"Save task",footerNote:"Your plan, your progress.",allStatus:"All statuses",pending:"Pending",done:"Completed",search:"Search tasks…",edit:"Edit",noTasks:"No tasks for this date",saved:"Task saved",updated:"Task updated",deleted:"Task deleted",loadError:"Could not load tasks",saveError:"Could not save task",deleteConfirm:"Delete this task?",configMissing:"Set up Supabase using the README first.",signedOut:"Signed out",signingIn:"Signing in…",checkEmail:"Check your email to confirm your account.",authError:"Sign-in failed. Check your email and password.",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  }
};
let lang = localStorage.getItem("dailyflow-language") || "bn";
let currentUser = null, tasks = [], activeView = "day";
let selectedDate = localDateISO(new Date());
let visibleMonth = new Date(new Date().getFullYear(),new Date().getMonth(),1);
let calendarSelected = selectedDate;
const $ = id => document.getElementById(id);
const tr = key => translations[lang][key] ?? key;
function localDateISO(d){const x=new Date(d.getTime()-d.getTimezoneOffset()*60000);return x.toISOString().slice(0,10)}
function escapeHTML(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2800)}
function setAuthMessage(msg,isError=true){$("authMessage").textContent=msg;$("authMessage").style.color=isError?"var(--red)":"var(--green)"}
function applyLanguage(){
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.textContent=tr(key)});
  $("languageSelect").value=lang;
  $("searchInput").placeholder=tr("search");
  $("statusFilter").options[0].text=tr("allStatus");$("statusFilter").options[1].text=tr("pending");$("statusFilter").options[2].text=tr("done");
  render();
}
function showApp(user){currentUser=user;$("authShell").classList.add("hidden");$("appShell").classList.remove("hidden");$("userEmail").textContent=user.email||"DailyFlow user";$("avatar").textContent=(user.email||"D").charAt(0).toUpperCase();loadTasks()}
function showAuth(){$("appShell").classList.add("hidden");$("authShell").classList.remove("hidden")}
async function authAction(kind){
  if(!supabaseClient){setAuthMessage(tr("configMissing"));return}
  const email=$("email").value.trim(),password=$("password").value;
  if(!email||password.length<6){setAuthMessage(lang==="bn"?"সঠিক ইমেইল দিন এবং অন্তত ৬ অক্ষরের পাসওয়ার্ড ব্যবহার করুন।":"Enter a valid email and a password of at least 6 characters.");return}
  setAuthMessage("");
  const result=kind==="signup"?await supabaseClient.auth.signUp({email,password}):await supabaseClient.auth.signInWithPassword({email,password});
  if(result.error){setAuthMessage(result.error.message);return}
  if(kind==="signup"&&!result.data.session){setAuthMessage(tr("checkEmail"),false);return}
  if(result.data.user)showApp(result.data.user);
}
async function loadTasks(){
  if(!supabaseClient||!currentUser)return;
  await ensureRecurringTasks(selectedDate);
  const {data,error}=await supabaseClient.from("tasks").select("*").eq("user_id",currentUser.id).order("due_date",{ascending:true}).order("created_at",{ascending:true});
  if(error){toast(tr("loadError")+": "+error.message);return}
  tasks=data||[];render();
}
async function ensureRecurringTasks(date){
  if(!supabaseClient||!currentUser||!date)return;
  const {data:templates,error}=await supabaseClient.from("recurring_tasks").select("*").eq("user_id",currentUser.id).eq("is_active",true);
  if(error){console.warn("Recurring tasks unavailable",error.message);return}
  for(const t of (templates||[])){
    const {data:exists,error:checkError}=await supabaseClient.from("tasks").select("id").eq("user_id",currentUser.id).eq("recurring_task_id",t.id).eq("due_date",date).limit(1);
    if(checkError){console.warn(checkError.message);continue}
    if(!exists?.length){const {error:insertError}=await supabaseClient.from("tasks").insert({user_id:currentUser.id,title:t.title,due_date:date,category:t.category||"Content",priority:t.priority||"medium",notes:t.notes||null,recurring_task_id:t.id});if(insertError)console.warn(insertError.message)}
  }
}
async function openRecurringDialog(){
  $("recurringForm").reset();$("recurringDialog").showModal();await renderRecurringList();
}
async function renderRecurringList(){
  const box=$("recurringList");if(!supabaseClient||!currentUser){box.textContent=tr("routineError");return}
  const {data,error}=await supabaseClient.from("recurring_tasks").select("*").eq("user_id",currentUser.id).eq("is_active",true).order("created_at",{ascending:true});
  if(error){box.textContent=tr("routineError")+": "+error.message;return}
  if(!data?.length){box.innerHTML='<p class="muted small">'+(lang==="bn"?"এখনো কোনো দৈনিক কাজ সেট করা হয়নি।":"No daily tasks set yet.")+'</p>';return}
  box.innerHTML=data.map(t=>`<article class="task-card"><div class="task-main"><div class="task-title">${escapeHTML(t.title)}</div><div class="task-meta"><span class="pill">${escapeHTML(t.category||"Content")}</span></div></div><button class="icon-btn" data-disable-recurring="${t.id}" title="${lang==="bn"?"বন্ধ করুন":"Deactivate"}">×</button></article>`).join("");
}
async function saveRecurring(e){
  e.preventDefault();if(!supabaseClient||!currentUser)return;
  const title=$("recurringTitle").value.trim();if(!title)return;
  const {error}=await supabaseClient.from("recurring_tasks").insert({user_id:currentUser.id,title,category:$("recurringCategory").value,priority:$("recurringPriority").value,notes:$("recurringNotes").value.trim()||null,is_active:true});
  if(error){toast(tr("routineError")+": "+error.message);return}
  await ensureRecurringTasks(selectedDate);await loadTasks();$("recurringForm").reset();await renderRecurringList();toast(tr("routineSaved"));
}
async function deactivateRecurring(id){
  const {error}=await supabaseClient.from("recurring_tasks").update({is_active:false}).eq("id",id).eq("user_id",currentUser.id);
  if(error){toast(tr("routineError")+": "+error.message);return}await renderRecurringList();toast(tr("routineRemoved"));
}
function visibleTasks(){
  if(activeView==="day")return tasks.filter(t=>t.due_date===selectedDate);
  if(activeView==="month"){const prefix=`${visibleMonth.getFullYear()}-${String(visibleMonth.getMonth()+1).padStart(2,"0")}`;return tasks.filter(t=>t.due_date?.startsWith(prefix))}
  const status=$("statusFilter").value,query=$("searchInput").value.trim().toLowerCase();
  return tasks.filter(t=>(status==="all"||(status==="done"&&t.is_done)||(status==="pending"&&!t.is_done))&&(!query||`${t.title} ${t.notes||""} ${t.category||""}`.toLowerCase().includes(query)));
}
function render(){
  if(!$("dayTaskList"))return;
  const list=visibleTasks(),completed=list.filter(t=>t.is_done).length,total=list.length;
  $("totalStat").textContent=total;$("completedStat").textContent=completed;$("remainingStat").textContent=total-completed;
  $("progressText").textContent=(total?Math.round(completed/total*100):0)+"%";$("progressBar").style.width=(total?completed/total*100:0)+"%";
  $("dayPicker").value=selectedDate;
  $("pageTitle").textContent=activeView==="day"?tr("today"):activeView==="month"?tr("calendar"):tr("allTasks");
  $("todayLabel").textContent=activeView==="day"?selectedDate.toUpperCase():"DAILYFLOW WORKSPACE";
  $("dayView").classList.toggle("hidden",activeView!=="day");$("monthView").classList.toggle("hidden",activeView!=="month");$("allView").classList.toggle("hidden",activeView!=="all");
  if(activeView==="day"){renderTaskList($("dayTaskList"),list);$("dayEmpty").classList.toggle("hidden",list.length!==0);$("dayTaskList").classList.toggle("hidden",list.length===0)}
  if(activeView==="all")renderTaskList($("allTaskList"),list);
  if(activeView==="month")renderCalendar();
}
function renderTaskList(container,list){
  if(!list.length){container.innerHTML=`<div class="muted" style="padding:20px 2px;font-size:13px">${tr("noTasks")}</div>`;return}
  container.innerHTML=list.map(t=>`<article class="task-card ${t.is_done?"is-done":""}">
    <input class="task-check" type="checkbox" data-toggle="${t.id}" ${t.is_done?"checked":""} aria-label="${escapeHTML(t.title)}">
    <div class="task-main"><div class="task-title">${escapeHTML(t.title)}</div><div class="task-meta"><span>▦ ${escapeHTML(t.due_date||"")}${t.due_time?" · "+escapeHTML(t.due_time.slice(0,5)):""}</span><span class="pill">${escapeHTML(t.category||"Other")}</span><span class="pill ${escapeHTML(t.priority||"medium")}">${escapeHTML((t.priority||"medium").toUpperCase())}</span>${t.notes?`<span>${escapeHTML(t.notes)}</span>`:""}</div></div>
    <div class="task-actions"><button class="icon-btn" data-edit="${t.id}" aria-label="${tr("edit")}" title="${tr("edit")}">✎</button><button class="icon-btn" data-delete="${t.id}" aria-label="${tr("delete")}" title="${tr("delete")}">×</button></div>
  </article>`).join("");
}
function renderCalendar(){
  const y=visibleMonth.getFullYear(),m=visibleMonth.getMonth();
  $("monthTitle").textContent=`${tr("monthNames")[m]} ${y}`;
  const first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate(),today=localDateISO(new Date());
  const out=tr("weekdays").map(d=>`<div class="calendar-day-name">${d}</div>`).join("");
  let cells="";
  for(let i=0;i<first;i++)cells+=`<div class="calendar-cell outside" aria-hidden="true"></div>`;
  for(let d=1;d<=days;d++){
    const date=`${y}-${String(m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`,dayTasks=tasks.filter(t=>t.due_date===date);
    cells+=`<button class="calendar-cell ${date===calendarSelected?"selected":""} ${date===today?"today":""}" data-date="${date}"><span class="day-number">${d}</span><span class="calendar-dots">${dayTasks.slice(0,3).map(t=>`<span class="calendar-task-label ${t.is_done?"done":""}">${escapeHTML(t.title)}</span>`).join("")}${dayTasks.length>3?`<span class="calendar-task-label">+${dayTasks.length-3}</span>`:""}</span></button>`;
  }
  $("calendarGrid").innerHTML=out+cells;
  $("selectedDateTitle").textContent=new Date(calendarSelected+"T12:00:00").toLocaleDateString(lang==="bn"?"bn-BD":"en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});
  renderTaskList($("selectedDateTasks"),tasks.filter(t=>t.due_date===calendarSelected));
}
function setView(view){activeView=view;document.querySelectorAll(".nav-item[data-view]").forEach(b=>b.classList.toggle("active",b.dataset.view===view));render()}
function openTaskDialog(task=null){
  $("taskForm").reset();$("taskId").value=task?.id||"";$("taskTitle").value=task?.title||"";$("taskDate").value=task?.due_date||(activeView==="day"?selectedDate:calendarSelected);$("taskTime").value=task?.due_time?.slice(0,5)||"";$("taskCategory").value=task?.category||"Content";$("taskPriority").value=task?.priority||"medium";$("taskNotes").value=task?.notes||"";
  $("dialogTitle").textContent=task?(lang==="bn"?"কাজ এডিট করুন":"Edit task"):tr("newTask");$("deleteTaskBtn").classList.toggle("hidden",!task);$("taskDialog").showModal();
}
async function saveTask(e){
  e.preventDefault();if(!supabaseClient||!currentUser)return;
  const id=$("taskId").value;
  const payload={user_id:currentUser.id,title:$("taskTitle").value.trim(),due_date:$("taskDate").value,due_time:$("taskTime").value||null,category:$("taskCategory").value,priority:$("taskPriority").value,notes:$("taskNotes").value.trim()||null};
  if(!payload.title||!payload.due_date)return;
  $("saveTaskBtn").disabled=true;
  const result=id?await supabaseClient.from("tasks").update(payload).eq("id",id).eq("user_id",currentUser.id):await supabaseClient.from("tasks").insert(payload);
  $("saveTaskBtn").disabled=false;
  if(result.error){toast(tr("saveError")+": "+result.error.message);return}
  $("taskDialog").close();toast(id?tr("updated"):tr("saved"));await loadTasks();
}
async function toggleTask(id,done){
  const result=await supabaseClient.from("tasks").update({is_done:done}).eq("id",id).eq("user_id",currentUser.id);
  if(result.error){toast(tr("saveError"));return}await loadTasks();
}
async function deleteTask(id){
  if(!confirm(tr("deleteConfirm")))return;
  const result=await supabaseClient.from("tasks").delete().eq("id",id).eq("user_id",currentUser.id);
  if(result.error){toast(tr("saveError"));return}$("taskDialog").close();toast(tr("deleted"));await loadTasks();
}
function init(){
  applyLanguage();
  $("signInBtn").addEventListener("click",()=>authAction("signin"));$("signUpBtn").addEventListener("click",()=>authAction("signup"));
  $("password").addEventListener("keydown",e=>{if(e.key==="Enter")authAction("signin")});
  $("signOutBtn").addEventListener("click",async()=>{if(supabaseClient)await supabaseClient.auth.signOut();currentUser=null;tasks=[];showAuth();setAuthMessage(tr("signedOut"),false)});
  $("languageSelect").addEventListener("change",e=>{lang=e.target.value;localStorage.setItem("dailyflow-language",lang);applyLanguage()});
  document.querySelectorAll(".nav-item[data-view]").forEach(b=>b.addEventListener("click",()=>setView(b.dataset.view)));
  $("addTaskBtn").addEventListener("click",()=>openTaskDialog());$("manageRecurringBtn").addEventListener("click",openRecurringDialog);$("closeRecurringDialog").addEventListener("click",()=>$("recurringDialog").close());$("recurringForm").addEventListener("submit",saveRecurring);$("emptyAddBtn").addEventListener("click",()=>openTaskDialog());
  $("closeDialog").addEventListener("click",()=>$("taskDialog").close());$("cancelDialog").addEventListener("click",()=>$("taskDialog").close());
  $("taskForm").addEventListener("submit",saveTask);$("deleteTaskBtn").addEventListener("click",()=>{const id=$("taskId").value;if(id)deleteTask(id)});
  $("dayPicker").addEventListener("change",e=>{selectedDate=e.target.value||localDateISO(new Date());calendarSelected=selectedDate;render();loadTasks()});
  $("prevMonth").addEventListener("click",()=>{visibleMonth=new Date(visibleMonth.getFullYear(),visibleMonth.getMonth()-1,1);render()});
  $("nextMonth").addEventListener("click",()=>{visibleMonth=new Date(visibleMonth.getFullYear(),visibleMonth.getMonth()+1,1);render()});
  $("todayMonthBtn").addEventListener("click",()=>{visibleMonth=new Date();calendarSelected=localDateISO(new Date());render()});
  $("statusFilter").addEventListener("change",render);$("searchInput").addEventListener("input",render);
  document.body.addEventListener("change",e=>{if(e.target.matches("[data-toggle]"))toggleTask(e.target.dataset.toggle,e.target.checked)});
  document.body.addEventListener("click",e=>{
    const edit=e.target.closest("[data-edit]");if(edit){const task=tasks.find(t=>t.id===edit.dataset.edit);if(task)openTaskDialog(task);return}
    const del=e.target.closest("[data-delete]");if(del){deleteTask(del.dataset.delete);return}
    const recurringDel=e.target.closest("[data-disable-recurring]");if(recurringDel){deactivateRecurring(recurringDel.dataset.disableRecurring);return}
    const dateBtn=e.target.closest("[data-date]");if(dateBtn){calendarSelected=dateBtn.dataset.date;selectedDate=calendarSelected;renderCalendar();$("selectedDateTitle").scrollIntoView({block:"nearest",behavior:"smooth"});}
  });
  if(supabaseClient){
    supabaseClient.auth.getSession().then(({data})=>{if(data.session)showApp(data.session.user);else showAuth()});
    supabaseClient.auth.onAuthStateChange((_event,session)=>{if(session&&!currentUser)showApp(session.user);else if(!session&&currentUser){currentUser=null;showAuth()}});
  } else showAuth();
}
init();
