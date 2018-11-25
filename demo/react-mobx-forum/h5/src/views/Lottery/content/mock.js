import cqssc from '@/mock/methodlist';

const list = cqssc.data.game_methods;

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