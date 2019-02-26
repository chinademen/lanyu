import Storage from 'react-native-storage';

import { AsyncStorage } from 'react-native';

// storage实例化
let storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,
  
    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,
      
    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: 1000 * 3600 * 24,
      
    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,
      
    // 如果storage中没有相应数据，或数据已过期，
    // 则会调用相应的sync方法，无缝返回最新数据。
    // sync方法的具体说明会在后文提到
    // 你可以在构造函数这里就写好sync的方法
    // 或是写到另一个文件里，这里require引入
    // 或是在任何时候，直接对storage.sync进行赋值修改
    // sync: require('./syncStorage')  // 这个sync文件是要你自己写的
});

// 存  (使用key来保存数据)
storage.set = (key, data, expires) => {
    storage.save({
      key,
      data,
      expires: expires || null // null为永不过期
    })
}

// 取
storage.get = (key) => {
    return storage.load({
        key: key,
        autoSync: true, // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
        // syncInBackground(默认为true)意味着如果数据过期，在调用sync方法的同时先返回已经过期的数据。
        // 设置为false的话，则始终强制返回sync方法提供的最新数据(当然会需要更多等待时间)。
        syncInBackground: true,
        // 你还可以给sync方法传递额外的参数
        syncParams: {
          extraFetchOptions: {
            // 各种参数
          },
          someFlag: true,
        },
      }).then(res => {
        return res;
      }).catch(err => {
        //如果没有找到数据且没有sync方法，或者有其他异常，则在catch中返回
        switch (err.name) {
            case 'NotFoundError':
                // TODO;
                break;
            case 'ExpiredError':
                // TODO
                break;
        }
      })
}

// 删除单个数据
storage.remove = (key) => {
    return storage.remove({
      key: key
    }).then(res => {
      return res;
    }).catch(err => {
      
    })
}

// 获取某个key下的所有id(仅key-id数据)
storage.getIdsForKey = (id, callback) => {
  storage.getIdsForKey(id).then(ids => {
    callback && callback(ids)
  })
}

// 获取某个key下的所有数据(仅key-id数据)
storage.getAllDataForKey = (key, callback) => {
  storage.getAllDataForKey(key).then(res => {
    callback && callback(res)
  })
}

// 清除某个key下的所有数据(仅key-id数据)
storage.clearMapForKey = (key) => {
  storage.clearMapForKey(key)
}

// 清空map，移除所有"key-id"数据（但会保留只有key的数据）
storage.clearMap = () => {
  storage.clearMap()
}


export default storage
