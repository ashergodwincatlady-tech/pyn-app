const lessons = [
  {chapter:'1 · Meet Python',title:'10 Fun Facts About Python',desc:'Meet Python and discover what people build with it.',explain:'Python is a popular programming language used for websites, AI, automation, data, games, robotics and much more. It was created by Guido van Rossum, and its name was inspired by Monty Python.',code:'print("Hello PYN!")',challenge:'Change the text so Python prints your own greeting.'},
  {chapter:'1 · Meet Python',title:'Get Ready',desc:'Install Python, VS Code, and run your first file.',explain:'A Python file normally ends in .py. You write code in an editor such as VS Code, then ask Python to run the file.',code:'# hello.py\nprint("My first Python program!")',challenge:'Create a file called hello.py and print a message.'},
  {chapter:'2 · Talking to Python',title:'Syntax',desc:'Learn the basic rules Python expects.',explain:'Syntax means the rules for writing code. Just like a language has grammar, Python expects certain symbols and spacing.',code:'print("Hello")',challenge:'Write a correct print statement that says PYN rocks!'},
  {chapter:'2 · Talking to Python',title:'Input and Output',desc:'Let your program speak and listen.',explain:'print() creates output. input() pauses the program and lets a person type something.',code:'name = input("What is your name? ")\nprint(f"Hello {name}!")',challenge:'Ask for someone\'s favorite food, then print it back.'},
  {chapter:'2 · Talking to Python',title:'Comments',desc:'Leave helpful notes inside your code.',explain:'Python ignores text that comes after # on a line. Comments help humans understand what code is doing.',code:'# This is a comment\nprint("Comments are useful")',challenge:'Add a comment explaining what your print line does.'},
  {chapter:'3 · Remembering Things',title:'Variables',desc:'Store information using names.',explain:'A variable is like a labeled box. You give the box a name, then put a value inside it.',code:'username = "Maya"\nxp = 120\nprint(username, xp)',challenge:'Create variables for your name, age, and favorite game.'},
  {chapter:'3 · Remembering Things',title:'Data Types',desc:'Text, numbers, True/False, and more.',explain:'Different values have different types. Common beginner types are str for text, int for whole numbers, float for decimals, and bool for True or False.',code:'name = "Maya"\nage = 13\nheight = 1.6\nonline = True\nprint(type(age))',challenge:'Make one variable of each basic type.'},
  {chapter:'3 · Remembering Things',title:'Numeric Types',desc:'Work with integers and decimals.',explain:'Integers are whole numbers. Floats are numbers with decimals. Python can calculate with both.',code:'coins = 10\ncoins = coins + 5\nprint(coins)',challenge:'Start with 20 points, add 15, then print the result.'},
  {chapter:'3 · Remembering Things',title:'Strings',desc:'Store and change text.',explain:'A string is text placed inside quotes. You can join strings, slice them, and use many helpful string methods.',code:'first = "Py"\nsecond = "thon"\nprint(first + second)',challenge:'Create your first and last name as two strings and join them.'},
  {chapter:'3 · Remembering Things',title:'Casting',desc:'Change one data type into another.',explain:'Casting converts a value. int("12") changes text into a whole number, while str(12) changes a number into text.',code:'age_text = "12"\nage = int(age_text)\nprint(age + 1)',challenge:'Convert the string "50" to a number and add 10.'},
  {chapter:'3 · Remembering Things',title:'Booleans',desc:'Use True and False.',explain:'A Boolean has only two possible values: True or False. Apps use booleans for things like online status, completed lessons, and settings.',code:'is_online = True\nif is_online:\n    print("Active now")',challenge:'Create a boolean called lesson_done and set it to True.'},
  {chapter:'4 · Collections',title:'Lists',desc:'Keep many values in one place.',explain:'A list stores multiple items in order. Python starts counting list positions from 0.',code:'friends = ["Alex", "Sam", "Maya"]\nprint(friends[0])\nfriends.append("Leo")',challenge:'Create a list of three things you like.'},
  {chapter:'4 · Collections',title:'Tuples',desc:'Store ordered values that usually stay fixed.',explain:'A tuple looks like a list but uses parentheses. It is useful when values should not be changed accidentally.',code:'position = (10, 20)\nprint(position[0])',challenge:'Create a tuple containing two coordinates.'},
  {chapter:'4 · Collections',title:'Sets',desc:'Store unique values.',explain:'A set automatically removes duplicate values. Sets are useful when you only care whether something is present once.',code:'skills = {"Python", "HTML", "Python"}\nprint(skills)',challenge:'Create a set containing a repeated word and see what happens.'},
  {chapter:'4 · Collections',title:'Dictionaries',desc:'Store information as key-value pairs.',explain:'A dictionary connects keys to values. It is perfect for things such as profiles and settings.',code:'user = {\n    "name": "Alex",\n    "level": 5,\n    "online": True\n}\nprint(user["name"])',challenge:'Create a dictionary for a PYN user with name, XP and online status.'},
  {chapter:'5 · Decisions',title:'If, Elif and Else',desc:'Make your program choose what to do.',explain:'if checks a condition. elif checks another possibility. else runs when the earlier conditions are false.',code:'score = 80\nif score >= 90:\n    print("Amazing!")\nelif score >= 70:\n    print("Great job!")\nelse:\n    print("Keep practicing!")',challenge:'Write an if statement that checks whether XP is at least 100.'},
  {chapter:'5 · Decisions',title:'Match',desc:'Choose between several clear cases.',explain:'match compares one value against several cases. It can make some multi-choice code easier to read.',code:'level = 2\nmatch level:\n    case 1: print("Starter")\n    case 2: print("Explorer")\n    case _: print("Coder")',challenge:'Use match for three different avatar choices.'},
  {chapter:'6 · Repetition',title:'While Loops',desc:'Repeat while something remains true.',explain:'A while loop keeps running as long as its condition is True. Make sure something changes so the loop can eventually stop.',code:'count = 1\nwhile count <= 5:\n    print(count)\n    count += 1',challenge:'Make a while loop count from 1 to 3.'},
  {chapter:'6 · Repetition',title:'For Loops',desc:'Repeat once for every item.',explain:'A for loop is great for going through lists, strings, ranges, and other collections.',code:'friends = ["Alex", "Maya", "Leo"]\nfor friend in friends:\n    print(friend)',challenge:'Loop through three project names and print each one.'},
  {chapter:'6 · Repetition',title:'Range',desc:'Create useful number sequences.',explain:'range() creates a sequence of numbers that works especially well with for loops.',code:'for number in range(1, 6):\n    print(number)',challenge:'Use range to print the numbers 1 through 10.'},
  {chapter:'7 · Reusable Code',title:'Functions',desc:'Create code you can use again.',explain:'A function groups code under a name. Parameters let you give the function information, and return sends a value back.',code:'def greet(name):\n    return f"Hello {name}!"\n\nprint(greet("Maya"))',challenge:'Create a function called add that returns the sum of two numbers.'},
  {chapter:'8 · Python Toolbox',title:'Modules',desc:'Use useful code from other files and libraries.',explain:'Modules give you code that already exists. Python includes many built-in modules, and you can install more.',code:'import random\nnumber = random.randint(1, 10)\nprint(number)',challenge:'Use random to make a virtual dice roll from 1 to 6.'},
  {chapter:'8 · Python Toolbox',title:'Dates',desc:'Work with dates and times.',explain:'The datetime module lets Python work with real dates and times.',code:'from datetime import datetime\nnow = datetime.now()\nprint(now)',challenge:'Print the current date and time.'},
  {chapter:'8 · Python Toolbox',title:'Math',desc:'Use Python\'s math helpers.',explain:'The math module includes useful functions such as square roots, rounding helpers, constants and trigonometry.',code:'import math\nprint(math.sqrt(25))',challenge:'Use math.sqrt() to find the square root of 81.'},
  {chapter:'8 · Python Toolbox',title:'JSON',desc:'Move structured information between apps.',explain:'JSON is a common text format for data. Python can convert JSON text into dictionaries and lists.',code:'import json\ndata = \'{"name":"Alex","level":5}\'\nuser = json.loads(data)\nprint(user["name"])',challenge:'Load JSON containing a username and XP value.'},
  {chapter:'8 · Python Toolbox',title:'Regex',desc:'Search text using patterns.',explain:'Regular expressions let you describe text patterns. They are powerful, but beginners only need a few basics at first.',code:'import re\ntext = "I have 3 cats"\nprint(re.findall(r"\\d+", text))',challenge:'Find the numbers inside the text "Level 12, XP 400".'},
  {chapter:'8 · Python Toolbox',title:'PIP',desc:'Install extra Python packages.',explain:'pip installs packages made by other Python developers. Think of it as adding new tools to your project.',code:'pip install requests',challenge:'Practice identifying which part is the command and which part is the package name.'},
  {chapter:'9 · When Things Go Wrong',title:'Try and Except',desc:'Handle errors without crashing.',explain:'try runs code that might fail. except lets you decide what should happen if an error occurs.',code:'try:\n    age = int(input("Age: "))\n    print(age)\nexcept ValueError:\n    print("Please enter a number.")',challenge:'Handle a ValueError when converting input to an integer.'},
  {chapter:'9 · When Things Go Wrong',title:'Debugging',desc:'Read errors and fix problems step by step.',explain:'Errors are clues. Start at the last line of the traceback, read the error type, then inspect the line Python points to.',code:'name = "Alex"\nprint(name)  # Try changing this to nam and inspect the error',challenge:'Cause a NameError on purpose, then fix it.'},
  {chapter:'10 · Project Setup',title:'Virtual Environments',desc:'Give each project its own package toolbox.',explain:'A virtual environment keeps one project\'s packages separate from another project\'s packages.',code:'python -m venv .venv\n# Windows:\n.venv\\Scripts\\activate',challenge:'Create a virtual environment for a new practice project.'},
];

const projects = [
  {icon:'🎲',title:'Dice Roller',level:'Beginner',time:'15 min',concepts:['random','variables','print'],desc:'Build a six-sided dice that rolls a different number.'},
  {icon:'🧮',title:'Calculator',level:'Beginner',time:'25 min',concepts:['input','numbers','if'],desc:'Ask for two numbers and perform calculations.'},
  {icon:'❓',title:'Quiz Game',level:'Beginner',time:'35 min',concepts:['strings','if','score'],desc:'Create a quiz that tracks correct answers.'},
  {icon:'🔐',title:'Password Generator',level:'Beginner',time:'30 min',concepts:['random','strings','loops'],desc:'Generate a random password from letters and numbers.'},
  {icon:'✊',title:'Rock Paper Scissors',level:'Beginner',time:'35 min',concepts:['random','if','input'],desc:'Play against the computer.'},
  {icon:'⏱️',title:'Countdown Timer',level:'Intermediate',time:'45 min',concepts:['loops','time','functions'],desc:'Count down and trigger a message at zero.'},
  {icon:'⭕',title:'Tic-Tac-Toe',level:'Intermediate',time:'2 hr',concepts:['lists','functions','loops'],desc:'Build a complete two-player board game.'},
  {icon:'💬',title:'Mini Chatbot',level:'Intermediate',time:'1.5 hr',concepts:['input','functions','match'],desc:'Create a text chatbot with simple responses.'},
  {icon:'🌤️',title:'Weather App',level:'Intermediate',time:'2 hr',concepts:['APIs','JSON','requests'],desc:'Read live weather data from an API.'},
  {icon:'📝',title:'To-Do App',level:'Intermediate',time:'2 hr',concepts:['lists','files','functions'],desc:'Add, remove and save tasks.'},
  {icon:'🤖',title:'AI Chatbot',level:'Advanced',time:'4 hr',concepts:['APIs','JSON','functions'],desc:'Connect Python to an AI model API.'},
  {icon:'📊',title:'Data Dashboard',level:'Advanced',time:'5 hr',concepts:['pandas','charts','data'],desc:'Turn data into a simple interactive dashboard.'},
];

const people = [
 {name:'Maya',avatar:'👩🏾‍💻',active:true,status:'Coding now'},
 {name:'Leo',avatar:'🧑🏻‍🚀',active:true,status:'Doing a lesson'},
 {name:'Sam',avatar:'👨🏽‍💻',active:true,status:'Building a project'},
 {name:'Nia',avatar:'👩🏿‍🎨',active:false,status:'Offline'},
 {name:'Omar',avatar:'🧑🏽‍🔬',active:true,status:'Active'},
 {name:'Zoe',avatar:'👩🏼‍🚀',active:false,status:'Offline'},
 {name:'Kai',avatar:'🧑🏾‍💻',active:true,status:'Active'},
 {name:'Ari',avatar:'👩🏻‍💻',active:false,status:'Offline'},
];

const feed = [
 {name:'Maya',avatar:'👩🏾‍💻',time:'2 min ago',text:'I built my first calculator today! The hardest part was remembering to convert input into numbers.',code:'a = int(input("First number: "))\nb = int(input("Second number: "))\nprint(a + b)'},
 {name:'Sam',avatar:'👨🏽‍💻',time:'12 min ago',text:'Can someone explain why Python starts list positions from 0? I understand how to use it, but I want to know why.'},
 {name:'Kai',avatar:'🧑🏾‍💻',time:'28 min ago',text:'My Dice Roller project is finished 🎲. Next I am trying the Password Generator.'},
];

const avatars = ['🧑🏽‍💻','👩🏾‍💻','👨🏻‍💻','👩🏼‍🚀','🧑🏾‍🚀','👩🏿‍🔬','🧑🏻‍🎨','👨🏽‍🔬','👩🏻‍💻','🧑🏼‍💻'];

const defaultState = {username:'Coder',avatar:'🧑🏽‍💻',xp:0,streak:1,completedLessons:[],completedProjects:[],levelChoice:"I've never coded before"};

// Safe storage helpers. These stop the whole app from crashing if a browser
// blocks localStorage or if old saved data becomes damaged.
const storage = {
  get(key){ try { return window.localStorage.getItem(key); } catch (e) { return null; } },
  set(key,value){ try { window.localStorage.setItem(key,value); return true; } catch (e) { return false; } },
  remove(key){ try { window.localStorage.removeItem(key); } catch (e) {} }
};

function loadState(){
  try {
    const saved = storage.get('pynState');
    const parsed = saved ? JSON.parse(saved) : {};
    return {
      ...defaultState,
      ...parsed,
      completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
      completedProjects: Array.isArray(parsed.completedProjects) ? parsed.completedProjects : []
    };
  } catch (e) {
    return {...defaultState};
  }
}

let state = loadState();

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const save = () => storage.set('pynState', JSON.stringify(state));

function boot(){
  if(storage.get('pynStarted')) showApp();
  renderAll();
}

function showApp(){
  $('#auth-screen').classList.add('hidden');
  $('#app').classList.remove('hidden');
}

$('#start-btn').onclick=()=>{
  const name=$('#username-input').value.trim();
  if(!name){$('#username-input').focus();return;}
  state.username=name; save(); storage.set('pynStarted','1'); showApp(); renderAll();
};
$('#demo-btn').onclick=()=>{storage.set('pynStarted','1');showApp();renderAll();};
$('#signout-btn').onclick=()=>{storage.remove('pynStarted');location.reload();};

function renderAll(){renderPeople();renderProjects();renderLessons();renderFeed();renderProfile();renderStats();}

function renderPeople(){
 $('#people-row').innerHTML=people.map(p=>`<div class="person"><div class="avatar medium">${p.avatar}<span class="presence ${p.active?'online':'offline'}"></span></div><strong>${p.name}</strong><small>${p.active?p.status:'Offline'}</small></div>`).join('');
 $('#active-list').innerHTML=people.map(p=>`<div class="active-person"><div class="avatar">${p.avatar}<span class="presence ${p.active?'online':'offline'}"></span></div><div><strong>${p.name}</strong><small>${p.active?p.status:'Offline'}</small></div></div>`).join('');
}

function projectCard(p,i){
 const done=state.completedProjects.includes(i);
 return `<article class="project-card" data-project="${i}"><div class="project-art">${p.icon}</div><div class="project-body"><span class="tag">${p.level}</span><h4>${p.title} ${done?'✓':''}</h4><p>${p.desc}</p><div class="project-meta"><span>${p.time}</span><span>${p.concepts.slice(0,2).join(' · ')}</span></div></div></article>`;
}
function renderProjects(filter='all'){
 $('#home-projects').innerHTML=projects.slice(0,4).map(projectCard).join('');
 const list=filter==='all'?projects:projects.filter(p=>p.level===filter);
 $('#project-grid').innerHTML=list.map(p=>projectCard(p,projects.indexOf(p))).join('');
 $$('[data-project]').forEach(el=>el.onclick=()=>openProject(+el.dataset.project));
}

function renderLessons(){
 let html='',current='';
 lessons.forEach((l,i)=>{
   if(l.chapter!==current){current=l.chapter;html+=`<div class="chapter-label">${current}</div>`;}
   const done=state.completedLessons.includes(i);
   html+=`<div class="lesson-row ${done?'done':''}" data-lesson="${i}"><div class="lesson-number">${done?'✓':i+1}</div><div><h4>${l.title}</h4><p>${l.desc}</p></div><div class="lesson-status">${done?'Completed':'+20 XP'}</div></div>`;
 });
 $('#lesson-path').innerHTML=html;
 $$('[data-lesson]').forEach(el=>el.onclick=()=>openLesson(+el.dataset.lesson));
}

function renderFeed(){
 $('#feed').innerHTML=feed.map(f=>`<article class="feed-card"><div class="feed-head"><div class="avatar">${f.avatar}</div><div><strong>${f.name}</strong><small>${f.time}</small></div></div><p>${f.text}</p>${f.code?`<div class="code-snippet">${f.code.replace(/</g,'&lt;')}</div>`:''}<div class="reaction-row"><button>👏 Celebrate</button><button>💡 Helpful</button><button>💬 Reply</button></div></article>`).join('');
}

function renderProfile(){
 const level=Math.floor(state.xp/100)+1;
 const rank=level>=10?'Python Builder':level>=5?'Python Explorer':'Python Starter';
 $('#sidebar-avatar').textContent=state.avatar; $('#big-avatar').textContent=state.avatar;
 $('#sidebar-name').textContent=state.username; $('#sidebar-level').textContent=`Level ${level}`;
 $('#profile-name').textContent=state.username; $('#profile-rank').textContent=rank;
 $('#display-name-input').value=state.username; $('#level-select').value=state.levelChoice;
 $('#profile-xp').textContent=state.xp; $('#profile-lessons').textContent=state.completedLessons.length; $('#profile-projects').textContent=state.completedProjects.length;
 $('#avatar-options').innerHTML=avatars.map(a=>`<button class="avatar-choice ${a===state.avatar?'selected':''}" data-avatar="${a}">${a}</button>`).join('');
 $$('[data-avatar]').forEach(b=>b.onclick=()=>{state.avatar=b.dataset.avatar;save();renderProfile();});
}

function renderStats(){
 $('#xp-count').textContent=state.xp; $('#streak-count').textContent=state.streak;
 $('#welcome-title').textContent=`Ready to code, ${state.username}?`;
 const pct=Math.round((state.completedLessons.length/lessons.length)*100);
 $('#progress-label').textContent=pct+'%'; $('#progress-bar').style.width=pct+'%';
 const next=lessons.findIndex((_,i)=>!state.completedLessons.includes(i));
 $('#next-lesson-label').textContent=next<0?'Python Foundations complete!':`Next: ${lessons[next].title}`;
}

function openLesson(i){
 const l=lessons[i],done=state.completedLessons.includes(i);
 $('#modal-content').innerHTML=`<p class="eyebrow">${l.chapter}</p><h2>${l.title}</h2><p>${l.explain}</p><h4>Example</h4><pre><code>${l.code.replace(/</g,'&lt;')}</code></pre><h4>Tiny challenge</h4><p>${l.challenge}</p><textarea spellcheck="false">${l.code}</textarea><div class="lesson-complete"><span>${done?'✅ Lesson completed':'Finish when you have tried the example.'}</span><button class="primary-btn" id="complete-lesson">${done?'Completed':'Complete +20 XP'}</button></div>`;
 $('#modal').classList.remove('hidden');
 $('#complete-lesson').onclick=()=>{
   if(!state.completedLessons.includes(i)){state.completedLessons.push(i);state.xp+=20;save();renderAll();}
   $('#modal').classList.add('hidden');
 };
}

function openProject(i){
 const p=projects[i],done=state.completedProjects.includes(i);
 $('#modal-content').innerHTML=`<p class="eyebrow">${p.level.toUpperCase()} PROJECT</p><h2>${p.icon} ${p.title}</h2><p>${p.desc}</p><h4>You will practice</h4><p>${p.concepts.map(c=>`<span class="tag" style="margin-right:6px">${c}</span>`).join('')}</p><h4>Build plan</h4><ol><li>Create a new Python file.</li><li>Build the smallest working version first.</li><li>Test it with different inputs.</li><li>Improve the messages and user experience.</li><li>Share what you built with the PYN community.</li></ol><div class="lesson-complete"><span>${done?'✅ Project completed':'Finishing a project earns 50 XP.'}</span><button class="primary-btn" id="complete-project">${done?'Completed':'Mark project complete'}</button></div>`;
 $('#modal').classList.remove('hidden');
 $('#complete-project').onclick=()=>{if(!state.completedProjects.includes(i)){state.completedProjects.push(i);state.xp+=50;save();renderAll();}$('#modal').classList.add('hidden');};
}

$('#close-modal').onclick=()=>$('#modal').classList.add('hidden');
$('#modal').onclick=e=>{if(e.target.id==='modal')$('#modal').classList.add('hidden');};

$$('.nav-item').forEach(btn=>btn.onclick=()=>go(btn.dataset.page));
$$('[data-go]').forEach(btn=>btn.onclick=()=>go(btn.dataset.go));
function go(page){
 $$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
 $$('.page').forEach(p=>p.classList.remove('active-page')); $('#'+page).classList.add('active-page');
 const names={home:['PYN COMMUNITY','Home'],learn:['LEARNING PATH','Learn Python'],projects:['BUILD SOMETHING','Projects'],community:['LEARN TOGETHER','Community'],profile:['YOUR SPACE','Profile']};
 $('#page-eyebrow').textContent=names[page][0]; $('#page-title').textContent=names[page][1]; window.scrollTo({top:0,behavior:'smooth'});
}

$$('.filter').forEach(b=>b.onclick=()=>{$$('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProjects(b.dataset.filter);});

$('#save-profile-btn').onclick=()=>{state.username=$('#display-name-input').value.trim()||state.username;state.levelChoice=$('#level-select').value;save();renderAll();$('#save-profile-btn').textContent='Saved ✓';setTimeout(()=>$('#save-profile-btn').textContent='Save changes',1200);};

$('#challenge-btn').onclick=()=>{
 $('#modal-content').innerHTML=`<p class="eyebrow">DAILY CHALLENGE · +20 XP</p><h2>Make Python say hello</h2><p>Write one line of Python that prints <strong>Hello PYN!</strong></p><textarea id="challenge-code" spellcheck="false">print("Hello PYN!")</textarea><div class="lesson-complete"><span id="challenge-result">Run your answer when ready.</span><button class="primary-btn" id="run-challenge">Check answer</button></div>`;
 $('#modal').classList.remove('hidden');
 $('#run-challenge').onclick=()=>{const v=$('#challenge-code').value.replace(/\s/g,'').toLowerCase();if(v.includes('print(')&&v.includes('hellopyn')){$('#challenge-result').textContent='✅ Correct! +20 XP';if(!storage.get('pynDailyDone')){state.xp+=20;save();storage.set('pynDailyDone','1');renderAll();}}else{$('#challenge-result').textContent='Not quite. Use print() and make the text say Hello PYN!';}};
};

boot();
