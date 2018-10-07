// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (arg) => {
    return arg;
};
const createNotEnumerableProperty = (propertyName) => {
    Object.keys = function(object) {
        let arrReturn = [];
        for (let key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key) && (key != propertyName)) {
                let val = object[key];
                arrReturn.push(val); 
            }
        }
        return arrReturn;
    }

    return propertyName;
};
const createProtoMagicObject = () => {
    const fun = () => {}
    fun.prototype = fun.__proto__;
    return fun;
};


const incrementor = () => {
    let counterFun = () => {
        incrementor.counter++;
        return counterFun;
    }
    counterFun.valueOf = () => incrementor.counter;
    incrementor.counter++;   
    return counterFun;
};
incrementor.counter = 0;


const asyncIncrementor = () => {
    let counterFun = () => {
        asyncIncrementor.counter++;
        return counterFun;
    };
    counterFun.valueOf = () => asyncIncrementor.counter
    asyncIncrementor.counter++;   
    return counterFun;
};
asyncIncrementor.counter = 0;


const createIncrementer = () => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr[i] = i + 1;
    }
    arr.next = () => {
        let ret = arr.shift(); // удалим из начала массива первое значение и верем его в переменную
        let obj = {value: ret};
        return obj;
    }
    return arr;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(param); 
        }, 1001);           
    });
    return promise;
};

const getDeepPropertiesCount = (MainObj) => {
    let counter = 0;
    function getDeepRecursion (obj) {
        for (let key in obj) {
            counter++;
            getDeepRecursion(obj[key]);
        }     
    }
    getDeepRecursion(MainObj);
    return counter;
};
const createSerializedObject = () => {
    let obj = {
        str: "any", 
        toJSON: function() {
            return this.str;
        },
        toString: function() {
            return this.str;
        }
    };
    return obj;
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    let compareNumeric = (obj1, obj2) => {
        if (obj1.__proto__ == obj2) {
            return -1;
        }
        else if(obj1.__proto__ == null) {
            return 1;
        }
        else {
            let ret = compareNumeric(obj1.__proto__, obj2);
            return ret;
        }
    }
    arr.sort(compareNumeric);
    return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;