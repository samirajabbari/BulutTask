const dashboard = [
  { id: 1, title: "Dashboard", image: "src/assets/Icons/home-hashtag.svg" },
  { id: 2, title: "Report", image: "src/assets/Icons/chart-square.svg" },
  { id: 3, title: "Bank", image: "src/assets/Icons/bank.svg" },
  { id: 4, title: "Email", image: "src/assets/Icons/sms.svg" },
  { id: 5, title: "Group", image: "src/assets/Icons/people.svg" },
  { id: 6, title: "List", image: "src/assets/Icons/document-text.svg" },
  { id: 7, title: "Finance", image: "src/assets/Icons/money-send.svg" },
];

const options = [
  { value: "Menu Item1", label: "Menu Item" },
  { value: "Menu Item2", label: "Menu Item" },
  { value: "Menu Item3", label: "Menu Item" },
  { value: "Menu Item4", label: "Menu Item" },
  { value: "Menu Item5", label: "Menu Item" },
];
const cards = [
  {
    id: 1,
    icon: "src/assets/Icons/balance.svg",
    symbol: "$",
    price: 143.223,
    discript: "Your bank balance",
  },
  {
    id: 2,
    icon: "src/assets/Icons/balanceChart.svg",
    symbol: "$",
    price: 43.11,
    discript: "Your Tax",
  },
  {
    id: 3,
    icon: "src/assets/Icons/wallet.svg",
    symbol: "$",
    price: 24,
    discript: "Employees working today",
  },
  {
    id: 4,
    icon: "src/assets/Icons/dash.svg",
    symbol: "$",
    price: 3.287,
    discript: "This week`s card spending",
  },
];

const stats = [
  { id: 1, title: "New Client", count: 54, changes: 18.7 },
  { id: 2, title: "invoice overdue", count: 6, changes: -2.7 },
];

const chartData = [
  {
    name: "Monday",
    Diposit: 25000,
    Whitdrawal: 4000,
  },
  {
    name: "Tuesday",
    Diposit: 18000,
    Whitdrawal: 2000,
  },
  {
    name: "Wednsday",
    Diposit: 14000,
    Whitdrawal: 5000,
  },
  {
    name: "Thursday",
    Diposit: 16000,
    Whitdrawal: 13000,
  },
  {
    name: "Friday",
    Diposit: 10000,
    Whitdrawal: 5000,
  },
];

const emailsList = [
  {
    id: 1,
    image: "src/assets/PersonImage/Fram1.svg",
    from: "Livia Stanton",
    discription: "Meeting scheduled",
    time: "1:24 PM",
  },
  {
    id: 2,
    image: "src/assets/PersonImage/Fram2.svg",
    from: "Allison Lipshutz",
    discription: "Update on marketing campaign",
    time: "12:14 PM",
  },
  {
    id: 3,
    image: "src/assets/PersonImage/Frame3.svg",
    from: "Martin Stanton",
    discription: "Designly 2.0 is about to launch",
    time: "Dec 19 at 8:01 PM",
  },
  {
    id: 4,
    image: "src/assets/PersonImage/Frame4.svg",
    from: "Alfredo Botosh",
    discription: "My friend Julie loves Dapper!",
    time: "Dec 19 at 6:11 PM",
  },
  {
    id: 5,
    image: "src/assets/PersonImage/Frame5.svg",
    from: "Ann Philips",
    discription: "My friend Julie loves Dapper!",
    time: "Dec 19 at 6:11 PM",
  },
];
const todos = [
  {
    id: 1,
    title: "Run payroll",
    disc: "Mar 4 at 6:00 pm",
    icon: "src/assets/Icons/payroll.svg",
  },
  {
    id: 2,
    title: "Review time off request",
    disc: "Mar 7 at 8:00 pm",
    icon: "src/assets/Icons/timer.svg",
  },
  {
    id: 3,
    title: "Sign board resoluation",
    disc: "Mar 12 at 8:30 pm",
    icon: "src/assets/Icons/sing.svg",
  },
];
const todoList = [
  {
    id: "0234",
    value: "Matin Abbasi",
    label: "Matin Abbasi",
    image: "src/assets/PersonImage/Fram1.svg",
  },
  {
    id: "0874",
    value: "Matin Gaderi",
    label: "Matin Gaderi",
    image: "src/assets/PersonImage/Fram2.svg",
  },
  {
    id: "0987",
    value: "Matin Kazemi",
    label: "Matin Kazemi",
    image: "src/assets/PersonImage/Frame3.svg",
  },
  {
    id: "0877",
    value: "Matin Hasani",
    label: "Matin Hasani",
    image: "src/assets/PersonImage/Frame4.svg",
  },
  {
    id: "0845",
    value: "Matin Mohammadi",
    label: "Matin Mohammadi",
    image: "src/assets/PersonImage/Frame5.svg",
  },
  {
    id: "0457",
    value: "Matin Alopour",
    label: "Matin Alopour",
    image: "src/assets/PersonImage/Fram2.svg",
  },
];
export {
  dashboard,
  options,
  cards,
  stats,
  chartData,
  emailsList,
  todos,
  todoList,
};
