import {fromTreeToFlat} from "./from-tree-to-flat";
import {NFS_MW_CITY_DISTRICTS, NFS_MW_CITY_DISTRICTS_TREE} from "./mock-data.js";
describe('fromTreeToFlat functionality', () => {
    it('should return array', function() {
        expect(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 0)).toBeTruthy();
        expect(Array.isArray(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 0))).toBeTruthy();
    }) 



    it ('should return NFS_MW_CITY_DISTRICTS from given NFS_MW_CITY_DISTRICTS_TREE with pid=0', function (){
        expect(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 0)[2]).toEqual({id: 3, pid: 1, name: "Kadmen Beach"});
        expect(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 0)).toEqual(NFS_MW_CITY_DISTRICTS);
        expect(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 0).length).toBe(18);

    });

    it ('should return error if children isn`t array ', function () {
        expect(() => {
            fromTreeToFlat({id: 4, name: 'u', children: {}}, 1);
        }).toThrow(/array/)
    })

    it('should return error if pid equal undefind', function () {
        expect(() => {
            fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE);
        }).toThrow(/pid/)
    })

    it('should return undefind if tree equal undefind', () => {
        expect(() => {
            fromTreeToFlat(undefined, 5);
        }).toThrow(/tree/)
    })


   
})