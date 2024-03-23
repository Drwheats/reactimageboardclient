const data = [
    {
        question: 'League Format',
        answer: '16 Teams\t\n' +
            'Two Divisions selected by commissioner\n' +
            'Four teams from each division make playoffs\t\n' +
            'Seven Week season\t\n' +
            'Free to participate\n' ,
    },
    {
        question: 'The Draft',
        answer: 'Randomized order\n' +
            'Snake style draft\n' +
            'Each team has 100 points to draft 10 Mons.\n ' +
            'Each team must have 10 mons drafted.\n' +
            'You can spend up to, or below the 100 points.\n ' +
            'You cannot exceed 100 points.\n' +
            'Can be surplus money -- no added benefit to surplus.',
    },
    {
        question: 'Playoffs',
        answer: 'Eight Teams total -- top four from each division\t\n' +
            'BO1 each round\t\n' +
            'Regular season record determines which teams make it.\t\n' +
            'Differential breaks a tie\n' +
            'In the case of an exact tie of record and differential. \n' +
            'Teams will play a BO3 play in round. Same rules as playoffs. ' +
            '\nIn this case, playoffs are pushed back one week.'
    },
    {
        question: 'Roster Moves',
        answer: 'Teams are allowed 3 roster moves after the draft, before week 1.\n ' +
            'They will get 48 hours to make these moves.\n' +
            'Once Week One hits, each coach has 4 roster moves to make by the end of Week 5, before the Week 6 window begins. \n' +
            'Moves must be made before Sunday at midnight to be active for the next week.\n' +
            'A Pokemon picked up must stay on your roster for at least two match windows. \n' +
            'Example: If you pick up Cinderace in before your Week 2 game, it cannot be dropped until after your Week 3 game.\n' +
            'All moves will be approved by the commissioner and must stay within the given salary cap rules\n' +
            'Roster window closes after Week 5 add/drop window\t'
    },
    {question: 'General Game Rules',
    answer: 'Games will be played on Pokemon Showdown\t\n' +
        'Games will be played under Draft, Nat Dex Draft\t\n' +
        'All mons must be level 100 and must have four moves.\t\n' +
        'Smogon clauses in effect (sleep, OHKO, infinite battle, evasion, species)\t\n' +
        'Games are to be played on Sundays of each week as much as possible\t\n' +
        'Matches are to be coordinated between you and your opponent every week during the free agency window.\t\n' +
        'For late/missed game rules, keep scrolling\t\n' +
        'Faulted matches (rule violation) are considered forfeits and will constitute an X-0 loss for the violator \n' +
        'Disconnected matches are to be remade if the match has started. \t\n' +
        'In the event of a disconnect of BOTH players, a remake will be done cooperatively and as accurately as possible\n' +
        'Once a game window opens, it cannot be recreated for any reason other than a true disconnect. \n' +
        'The window that opens is the one that will be played unless it is disconnected by both parties accidentally.\t'},
    {
        question: 'Banned moves, items, natures and abilities',
        answer: 'Accuracy reduction moves\t\n' +
            'Accupressure\t\n' +
            'No item clause. Use as many of an item as you want!\t\n' +
            'Any other unreleased item\t\n' +
            'Bright powder/Sand veil/snow cloak\t\n' +
            'Megas are legal, and optional\t\n' +
            'Dynamx/Gmax is banned\t\n' +
            'Tera is banned\t\n' +
            'Evasion boosting moves\t\n' +
            'Greninja with battle bond is legal this season\t\n' +
            'Landorus I (sheer force)\t\n' +
            'Lax Incense\t\n' +
            'Moody\t\n' +
            'OHKO moves\t\n' +
            'Power Construct\t\n' +
            'All Z moves are banned\t\n' +
            'Shed tail is banned on all mons who learn it\t\n' +
            'Swagger and Flatter are banned, as is Last Respects\t\n' +
            'All other moves on the draft board in () that are Pokemon-specific\t'
    },
    {
        question: 'Illegal moves/items of note',
        answer: 'Hidden power is Illegal\t\n' +
            'Pursuit is Illegal\t\n' +
            'Return/Frustration are Illegal\t\n' +
            'Shed Shell is LEGAL\t'
    },
    {
        question: 'Baton Pass\t\t',
        answer: 'Baton Pass is LEGAL and CAN be used\t\n' +
            'Baton Pass users can not pass a positive stat change on purpose. \n' +
            'Meaning, you cannot click Agility and then Baton Pass. \n' +
            'Users can pass stat changes caused by the other trainer.\n ' +
            'Pro tip: Do not boost your opponent’s stats.\t'
    },
    {question: 'Weekly schedule (PLEASE READ)\t\t' ,
    answer: 'Window to play games is Monday at 12 a.m. to Sunday at 11:59 p.m.\t\n' +
        'Free agent window opens after a coach’s game for the week is played.\n' +
        'Free agent window closes before the next week starts.\t\n' +
        'Send Mo add/drop moves on Discord and he will announce them.\t'
    },
    {
        question: 'Replays/stats\t\t',
        answer: 'Replays must be saved after each game. They are archived on our Doc.\t\n' +
            'Stats must be submitted after every match, preferably on the same day. \t\n' +
            'With stats submission, the winner does stats.'
    },
    {
        question: 'Weekly schedule (PLEASE READ)\t\t',
        answer: 'Each coach can postpone their weekly match until the end of the free agent window twice.\n' +
            'Missed matches result in a loss for both teams.*\t\n' +
            '*Unless one team can provide Mo with proof that they were ready with a team set and the other team was not.\t\n' +
            'Obviously, for extreme circumstances exceptions can be made (death, fluke life event, etc.)\t\n' +
            'PLAY YOUR GAMES\t'
    }
];

export default data;
