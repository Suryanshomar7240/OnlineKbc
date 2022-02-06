const data = [
    {
        name: "Team Jatin (W)",
        score: 1 + 1,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team Venkat (L)",
        score: 1 + 1,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Amarjit (Actor)",
        score: 5,
        member: "Best Actor"
    },
    {
        name: "Aditya (Actor)",
        score: 5,
        member: "Best Actor"
    },
    {
        name: "Team Dumb Noobs (W)",
        score: 10.6,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team Amarjit (L)",
        score: 4,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team Aditya (L)",
        score: 7.3,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 3
    },
    {
        name: "Team Akash (W)",
        score: 8.6,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 3
    },
    {
        name: "Team Aman (W)",
        score: 3 + 5,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team Gautam (L)",
        score: 5 + 1,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Pappi Gang (W)",
        score: 4 + 5,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Pappi Gang Jr. (L)",
        score: 4 + 3,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 4
    },
    {
        name: "Team RAW (L)",
        score: 5,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team Arshalan (W)",
        score: 5 + 4 + 2,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
];
// data.sort((a, b) => {
//     if ((a.score - b.score) != 0)
//         return b.score - a.score;
//     else if ((a.time - b.time) != 0)   // commented for future kbc
//         return a.time - b.time;
//     else
//         return a.ll - b.ll;
// });
data.sort((a, b) => {
    if ((a.score - b.score) != 0)
        return b.score - a.score;
});
const genrateTable = (data) => {
    const table = document.querySelector(".tables");
    // data.sort((a,b)=>(a.price>b.price));
    data.forEach((item, idx) => {
        const li = document.createElement("li");
        li.className = "base-row";
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const div4 = document.createElement("div");
        const div3 = document.createElement("div");
        div1.className = "col_1";
        div2.className = "col_2";
        div3.className = "col_3";
        div4.className = "col_5";
        div1.innerHTML = idx + 1;
        div3.innerHTML = item.name;
        div2.innerHTML = item.score;
        div4.innerHTML = item.member;
        // if(item.ll1)
        //     div4.innerHTML+="<img src='img/audience poll.png' alt='lifeline-1'></img>";
        // if(item.ll2)
        //     div4.innerHTML+="<img src='img/DoubleDip.png' alt='lifeline-2'></img>";
        // if(item.ll3)
        //     div4.innerHTML+="<img src='img/google.png' alt='lifeline-3'></img>";
        li.appendChild(div1);
        li.appendChild(div3);
        li.appendChild(div2);
        li.appendChild(div4);
        table.appendChild(li);
    });
};
genrateTable(data);
