/**
 * @desc localStorage / sessionStorage
 * @param {[String]} table      [表名, 可选]
 * @param {[Object]} settings   [{key, value, remove}, 可选]
 * @param {[String]} storage    [sessionStorage || localStorage, 可选]
*/
export function opStorage(table, settings, storage){
    table = table || 'game-admin';         // 默认表名 'game-admin'
    storage = storage || localStorage;  // 默认使用localStorage

    if(!window.JSON || !window.JSON.parse) return;

    // 如果settings为null，则删除表
    if(settings === 'null') delete storage[table];

    settings = typeof settings === 'object' ? settings : {key: settings};

    try{
        var data = JSON.parse(storage[table]);
    } catch(e){
        var data = {};
    }

    if('value' in settings) data[settings.key] = settings.value;
    if(settings.remove) delete data[settings.key];
    storage[table] = JSON.stringify(data);

    return settings.key ? data[settings.key] : data;
};