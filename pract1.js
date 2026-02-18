const users = [
    { id: 1, name: "Anna", age: 22, city: "Moscow", isActive: true },
    { id: 2, name: "Oleg", age: 17, city: "Kazan", isActive: false },
    { id: 3, name: "Ivan", age: 30, city: "Moscow", isActive: true },
    { id: 4, name: "Maria", age: 25, city: "Sochi", isActive: false }
];

function getActiveUsers(usersArray) {
    return usersArray.filter(user => user.isActive);
}

const getUserNames = (usersArray) => usersArray.map(user => user.name);

function findUserById(usersArray, id) {
    return usersArray.find(user => user.id === id) || null;
}

const getUsersStatistics = (users) =>{
    users.reduce((acc, { isActive }) => ({
        total: acc.total + 1,
        active: acc.active + (isActive ? 1 : 0),
        inactive: acc.inactive + (isActive ? 0 : 1)
    }), { total: 0, active: 0, inactive: 0 })
}
function getAverageAge(usersArray) {
    if (usersArray.length === 0) return 0;
    const totalAge = usersArray.reduce((sum, user) => sum + user.age, 0);
    return totalAge / usersArray.length;
}

function groupUsersByCity(usersArray) {
    return usersArray.reduce((acc, user) => {
        if (!acc[user.city]) {
            acc[user.city] = [];
        }
        acc[user.city].push(user);
        return acc;
    }, {});
}