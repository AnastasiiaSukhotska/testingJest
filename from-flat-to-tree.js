
 export function fromFlatToTree ( arr, firstElem ) {
    if(firstElem === undefined) throw new Error ('FirstElem can`t be undefind!');
    if(arr === undefined) throw new Error ('Arr can`t be undefind!');
    if(firstElem.pid !== 0) throw new Error ('FirstElem should be root and has pid 0 or null')
     arr.map(a=> a.children = [])

     arr = arr.sort(({id: aId}, {id: bId}) => aId - bId);
 

    let res = { id: firstElem.id, name: firstElem.name, pid: firstElem.pid, children: []  };
    console.log(res);
    
      return  arr.reduce ((obj, currentValue) => {
            currentValue.pid === obj.id ? obj.children.push(currentValue) : (obj.children.map(child => currentValue.pid === child.id ? child.children.push(currentValue) : child))
                
                
              
                return obj;
        }, res
        )
    
     
}

console.log( fromFlatToTree([
    {id: 1, pid: 0, name: "Rockport City"},
    {id: 2, pid: 1, name: "Rosewood"},
    {id: 3, pid: 1, name: "Kadmen Beach"},
    {id: 4, pid: 1, name: "Downtown Rockport"},
    {id: 5, pid: 2, name: "Downtown Rosewood"},
    {id: 6, pid: 2, name: "Heritage Heights"},
    {id: 7, pid: 2, name: "Petersburg"},
    {id: 8, pid: 2, name: "Rosewood College Campus"},
    {id: 9, pid: 2, name: "Highlander Stadium"},
    {id: 10, pid: 2, name: "Hickley Field"},
    {id: 11, pid: 2, name: "Highway 99"},
    {id: 12, pid: 3, name: "North Gray Point"},
    {id: 13, pid: 3, name: "Ocean Hills"},
    {id: 14, pid: 3, name: "Point Camden"},
    {id: 15, pid: 4, name: "Agostini Heights"},
    {id: 16, pid: 4, name: "Century Square"},
    {id: 17, pid: 4, name: "Riverfront Stadium"},
    {id: 18, pid: 4, name: "Rockport Valley Airport"},
  ],  {id: 1, pid: 0, name: "Rockport City"}))