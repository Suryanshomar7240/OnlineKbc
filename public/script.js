const data=[
     {
        name:"Akshita Dixit",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:45
    },
     {
        name:"Ayushman Bhatt",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:45
    },
    {
        name:"Pankaj Kumar",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Akash Parua",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Paras Papnai",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Anuj Kirodia",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Prayag Biswas",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Apurba Nath",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Harshit Sharma",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Gautam raj",
        score:66000,
        ll1:false,
        ll2:true,
        ll3:false,
        ll:1,
        time:80
    },
    {
        name:"Khushal sharma",
        score:66000,
        ll1:false,
        ll2:true,
        ll3:false,
        ll:1,
        time:80
    },
    {
        name:"Akshit Choudari",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Bhanu Teja",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Yashraj Singh",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Medhir Manoj",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Tanishque Skula",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Ravikant Tiwari",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Dev Gupta",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Pallav Saxena",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Jhatin Verma",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Manish Kumar",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Soumalya Biswas",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Bhanu Prasad",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"V Adithya Venkat",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Vemana Joshua",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Srijanjeet Singh",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
    {
        name:"Anindita Paramanik",
        score:0,
        ll1:false,
        ll2:false,
        ll3:false,
        ll:0,
        time:0
    },
];
data.sort((a, b)=>{
    if((a.score - b.score)!=0)
        return  b.score-a.score;
    else if((a.time - b.time)!=0)
        return a.time-b.time;
    else
        return a.ll-b.ll;});
const genrateTable=(data)=>{
    const table=document.querySelector(".tables");
    // data.sort((a,b)=>(a.price>b.price));
    data.forEach((item,idx)=>{
        const li=document.createElement("li");
        li.className="base-row";
        const div1=document.createElement("div");
        const div2=document.createElement("div");
        const div4=document.createElement("div");
        const div3=document.createElement("div");
        div1.className="col_1";
        div2.className="col_2";
        div3.className="col_3";
        div4.className="col_5";
        div1.innerHTML=idx+1;
        div3.innerHTML=item.name;
        div2.innerHTML=item.score;
        if(item.ll1)
            div4.innerHTML+="<img src='img/audience poll.png' alt='lifeline-1'></img>";
        if(item.ll2)
            div4.innerHTML+="<img src='img/DoubleDip.png' alt='lifeline-2'></img>";
        if(item.ll3)
            div4.innerHTML+="<img src='img/google.png' alt='lifeline-3'></img>";
        li.appendChild(div1);
        li.appendChild(div3);
        li.appendChild(div2);
        li.appendChild(div4);
        table.appendChild(li);
    });
};
genrateTable(data);
