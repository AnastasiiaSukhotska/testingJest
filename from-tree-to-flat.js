export function fromTreeToFlat(tree, pid) {
  if( tree === undefined ) throw new Error('You need input value of tree');
  if(pid === undefined ) throw new Error('You need input pid!')
  if (tree.children && Array.isArray(tree.children) === false ) throw new Error('Children of tree should contain array');
  const result = [{id: tree.id, name: tree.name, pid: pid}];
  if (tree.children) {
    result.push(...tree.children.flatMap(child => fromTreeToFlat(child, tree.id)));
  }

  return result.sort(({id: aId}, {id: bId}) => aId - bId);
}
