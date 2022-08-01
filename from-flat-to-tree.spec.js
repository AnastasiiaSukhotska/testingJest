

import {fromFlatToTree} from "./from-flat-to-tree";
import {NFS_MW_CITY_DISTRICTS, NFS_MW_CITY_DISTRICTS_TREE} from "./mock-data.js";

describe("from flat to tree", () => {
  it('should return object that represents correct relation between instances of cities', () => {
    expect(fromFlatToTree(NFS_MW_CITY_DISTRICTS, NFS_MW_CITY_DISTRICTS[0])).toEqual(NFS_MW_CITY_DISTRICTS_TREE);
  });

  it('should throw error if firstElem equal null or undefind', () => {
    expect( () => {
      fromFlatToTree(NFS_MW_CITY_DISTRICTS)
    }).toThrow(/FirstElem can`t be undefind!/);
   
  })

  it('should throw error if arr equal undefind', () => {
    expect(() => {
      fromFlatToTree(undefined, NFS_MW_CITY_DISTRICTS[0])
    }).toThrow(/Arr can`t be undefind!/)
  })

  it('should throw error if firstElem doesn`t have pid 0 or null', () => {
    expect(() => {
      fromFlatToTree(NFS_MW_CITY_DISTRICTS, {id: 1, pid: 10, name: "Rockport City"})
    }).toThrow(/FirstElem should be root and has pid 0 or null/)
  })
});

