const list = [
    { 'pid': '五星', 'id': '五星直选', 'name': '复式' }, { 'pid': '五星', 'id': '五星直选', 'name': '单式' }, { 'pid': '五星', 'id': '五星直选', 'name': '组合' },
    { 'pid': '五星', 'id': '五星组选', 'name': '组选120' }, { 'pid': '五星', 'id': '五星组选', 'name': '组选60' }, { 'pid': '五星', 'id': '五星组选', 'name': '组选30' }, { 'pid': '五星', 'id': '五星组选', 'name': '组选20' }, { 'pid': '五星', 'id': '五星组选', 'name': '组选10' }, { 'pid': '五星', 'id': '五星组选', 'name': '组选5' }, 
];

function getGroup(list, pid, id) {
    let groups = new Map();
    list.forEach(item => {
        if (groups.has(item[pid])) {
            groups.get(item[pid]).add(item[id]);
        } else {
            const value = new Set([item[id]]);
            groups.set(item[pid], value);
        }
    });
    return groups;
}
export const playGroups = getGroup(list, 'pid', 'id');
export const playMethods = getGroup(list, 'id', 'name');