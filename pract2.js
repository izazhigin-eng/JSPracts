let expenses = []
const addExpense = (name, cost, category) => {expenses.push({name,cost,category});}
const printAllExpenses = (expenses) => {expenses.forEach(i => {console.log(`${i.category}| ${i.name} - $${i.cost}`)})}
const getTotalAmount = (expenses) => {
    let total = expenses.reduce((total,expense)=>total+=expense.cost,0);
    console.log("Total amout check:"+total);
    return total;
}
const getExpensesByCategory = (expenses,category) => {
    let listFiltred = expenses.filter(i => i.category===category);
    console.log(`Total cost category ${category}:`+listFiltred.reduce((total,i)=>total+i.cost,0));
    return listFiltred;
}
const findExpensiveByTitle = (expenses,name,line=null) =>{
    let index = expenses.findIndex((i)=>i.name.includes(name))
    if (line) {
        expenses[index].line = line;
    }
    return expenses[index];
}

let expenseTracker = {
    currentExpense : [],
    allExpenses: new Map(),
    addExpense(name,obj){
        let list = this.allExpenses.get(name) || [];
        if (Array.isArray(obj)) {list=list.concat(obj);this.allExpenses.set(name, list)}
        else {
            list.push(obj)
            this.allExpenses.set(name, list)
        }
        this.setPreset(name)
    },
    setPreset(name){this.currentExpense = this.allExpenses.get(name)},
    getTotalAmount(){return getTotalAmount(this.currentExpense)},
    getExpensesByCategory(cat){return getExpensesByCategory(this.currentExpense,cat)},
    findExpensiveByTitle(name){return findExpensiveByTitle(this.currentExpense,name)},
    removeExpensive(name){this.allExpenses.delete(name)}
}
expenseTracker.addExpense("exp1",{name:"car1",cost:0.1,category:"cars"});
expenseTracker.addExpense("exp2",[{name:"carX",cost:0.1,category:"car"},{name:"apple",cost:0.2,category:"products"},{name: "banana",cost: 0.2,category:"products"}]);

expenseTracker.setPreset("exp1")
console.log("list one");console.log(expenseTracker.currentExpense);;console.log("")
expenseTracker.setPreset("exp2")
console.log("list two");console.log(expenseTracker.currentExpense);console.log("")

console.log("getEpneses by category: ");console.log(expenseTracker.getExpensesByCategory("car"));console.log("")

console.log("total amount: "+expenseTracker.getTotalAmount());console.log("")

console.log("find exoensive title: ");console.log(expenseTracker.findExpensiveByTitle("carX"));console.log("")

/*addExpense("apple",1.4,"product");
addExpense("banana",9.,"product");
addExpense("carX",9999.,"car");

getExpensesByCategory(expenses,"car");
printAllExpenses(expenses)
getTotalAmount(expenses)
console.log(findExpensiveByTitle(expenses,"app","[eq"));*/
