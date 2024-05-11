/**
 * Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root;
    
    let levelStart = root;
    
    while (levelStart.left) {
        let curr = levelStart;
        
        while (curr) {
            curr.left.next = curr.right;
            if (curr.next) {
                curr.right.next = curr.next.left;
            }
            curr = curr.next;
        }
        
        levelStart = levelStart.left;
    }
    
    return root;
};
